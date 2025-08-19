import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Webhook público do Collect.chat
 * URL: /api/collect
 *
 * Recebe JSON do Collect.chat e cria/encaminha um ticket no Octadesk.
 * Autenticação: Authorization: Bearer ${OCTADESK_TOKEN}
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Basic validation: ensure it has at least key fields
    const schema = z
      .object({
        name: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().email().optional(),
        message: z.string().optional(),
        url: z.string().url().optional(),
        utm_source: z.string().optional(),
        utm_medium: z.string().optional(),
        utm_campaign: z.string().optional(),
        utm_term: z.string().optional(),
        utm_content: z.string().optional(),
        gclid: z.string().optional(),
        fbclid: z.string().optional(),
      })
      .passthrough();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid webhook payload", details: parsed.error.flatten() },
        { status: 422 }
      );
    }

    const headers = new Headers(request.headers);
    const referer = headers.get("referer") || undefined;
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

    const OCTADESK_TOKEN = process.env.OCTADESK_TOKEN;
    const OCTADESK_URL = process.env.OCTADESK_URL || "https://api.octadesk.services/v2/tickets";

    if (!OCTADESK_TOKEN) {
      return NextResponse.json(
        { error: "Missing OCTADESK_TOKEN" },
        { status: 500 }
      );
    }

    // Map to a basic Octadesk ticket payload
    const ticketPayload = {
      subject: `Contato via Collect.chat${parsed.data.name ? ` - ${parsed.data.name}` : ""}`,
      content: parsed.data.message || "Mensagem não informada",
      requester: {
        name: parsed.data.name || "Visitante",
        email: parsed.data.email,
        phone: parsed.data.phone,
      },
      customFields: {
        sourceUrl: parsed.data.url || referer,
        utm_source: parsed.data.utm_source || cookies.utm_source,
        utm_medium: parsed.data.utm_medium || cookies.utm_medium,
        utm_campaign: parsed.data.utm_campaign || cookies.utm_campaign,
        utm_term: parsed.data.utm_term || cookies.utm_term,
        utm_content: parsed.data.utm_content || cookies.utm_content,
        gclid: parsed.data.gclid || cookies.gclid,
        fbclid: parsed.data.fbclid || cookies.fbclid,
      },
    };

    const res = await fetch(OCTADESK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OCTADESK_TOKEN}`,
      },
      body: JSON.stringify(ticketPayload),
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json(
        { error: "Octadesk request failed", status: res.status, details: text },
        { status: 502 }
      );
    }

    const data = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: true, result: data });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 400 });
  }
}


