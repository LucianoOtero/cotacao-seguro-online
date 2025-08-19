import { NextResponse } from "next/server";
import { z } from "zod";

// Simple in-memory IP rate limiter (per serverless instance)
const ipToTimestamps: Map<string, number[]> = new Map();
const MAX_PER_MINUTE = Number(process.env.LEAD_RATE_LIMIT_PER_MIN || 10);
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const oneMinuteAgo = now - 60_000;
  const arr = ipToTimestamps.get(ip) || [];
  const recent = arr.filter((t) => t > oneMinuteAgo);
  recent.push(now);
  ipToTimestamps.set(ip, recent);
  return recent.length > MAX_PER_MINUTE;
}

type LeadPayload = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  emailAddress?: string;
  message?: string;
  product?: string;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  gclid?: string | null;
  fbclid?: string | null;
  [key: string]: unknown;
};

/**
 * Receives lead form data, enriches with attribution cookies, and forwards to EspoCRM.
 */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload & { website?: string; elapsedMs?: number };

    // Validate minimal inputs
    const schema = z.object({
      firstName: z.string().min(2, "Nome inválido"),
      lastName: z.string().min(1, "Sobrenome inválido"),
      emailAddress: z.string().email(),
      phoneNumber: z
        .string()
        .regex(/^[+]?\d{8,15}$/i, "Telefone inválido (use apenas números e DDI opcional)"),
      message: z.string().optional(),
      product: z.string().optional(),
    });
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 422 }
      );
    }

    // Anti-spam: honeypot field
    if (typeof body.website === "string" && body.website.trim() !== "") {
      // Pretend success for bots
      return NextResponse.json({ ok: true, id: null });
    }

    // Anti-spam: optional minimum elapsed time if client provides it
    if (typeof body.elapsedMs === "number" && body.elapsedMs < 1500) {
      return NextResponse.json({ ok: true, id: null });
    }

    // Anti-spam: basic IP rate limiting
    const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    const headers = new Headers(request.headers);
    const cookiesHeader = headers.get("cookie") || "";
    const cookies: Record<string, string> = Object.fromEntries(
      cookiesHeader
        .split(/;\s*/)
        .filter(Boolean)
        .map((pair) => {
          const [k, ...rest] = pair.split("=");
          return [decodeURIComponent(k), decodeURIComponent(rest.join("="))];
        })
    );

    const payload: LeadPayload = {
      ...body,
      utm_source: body.utm_source ?? cookies.utm_source ?? null,
      utm_medium: body.utm_medium ?? cookies.utm_medium ?? null,
      utm_campaign: body.utm_campaign ?? cookies.utm_campaign ?? null,
      utm_term: body.utm_term ?? cookies.utm_term ?? null,
      utm_content: body.utm_content ?? cookies.utm_content ?? null,
      gclid: body.gclid ?? cookies.gclid ?? null,
      fbclid: body.fbclid ?? cookies.fbclid ?? null,
      source: body.source ?? "website",
    };

    const ESPO_URL = process.env.ESPO_URL;
    const ESPO_API_KEY = process.env.ESPO_API_KEY;
    const ESPO_ENTITY = process.env.ESPO_ENTITY ?? "Lead";

    if (!ESPO_URL || !ESPO_API_KEY) {
      return NextResponse.json(
        { error: "Missing ESPO_URL or ESPO_API_KEY" },
        { status: 500 }
      );
    }

    const espoEndpoint = `${ESPO_URL.replace(/\/$/, "")}/api/v1/${ESPO_ENTITY}`;

    // Map payload depending on the target entity in EspoCRM
    const fullName = `${body.firstName ?? ""} ${body.lastName ?? ""}`.trim();
    const isOpportunity = ESPO_ENTITY.toLowerCase() === "opportunity";

    const espoPayload = isOpportunity
      ? {
          // Default Opportunity fields
          name: fullName ? `${fullName}${body.product ? ` — ${body.product}` : ""}` : body.product || "Oportunidade",
          description: body.message,
          // Custom/contact fields (ensure these exist in your Espo schema)
          phoneNumber: body.phoneNumber,
          emailAddress: body.emailAddress,
          leadSource: payload.source,
          utm_source: payload.utm_source,
          utm_medium: payload.utm_medium,
          utm_campaign: payload.utm_campaign,
          utm_term: payload.utm_term,
          utm_content: payload.utm_content,
          gclid: payload.gclid,
          fbclid: payload.fbclid,
        }
      : {
          // Default Lead fields
          firstName: body.firstName,
          lastName: body.lastName,
          phoneNumber: body.phoneNumber,
          emailAddress: body.emailAddress,
          description: body.message,
          product: body.product,
          source: payload.source,
          utm_source: payload.utm_source,
          utm_medium: payload.utm_medium,
          utm_campaign: payload.utm_campaign,
          utm_term: payload.utm_term,
          utm_content: payload.utm_content,
          gclid: payload.gclid,
          fbclid: payload.fbclid,
        };

    const espoRes = await fetch(espoEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": ESPO_API_KEY,
      },
      body: JSON.stringify(espoPayload),
      // Avoid hanging on network issues
      cache: "no-store",
    });

    if (!espoRes.ok) {
      const text = await espoRes.text();
      return NextResponse.json(
        { error: "EspoCRM request failed", status: espoRes.status, details: text },
        { status: 502 }
      );
    }

    const data = await espoRes.json();
    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 400 });
  }
}


