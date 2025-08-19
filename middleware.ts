import { NextResponse, NextRequest } from "next/server";

/**
 * Marketing attribution middleware
 *
 * Captures the following query params and stores them as cookies (90 days, SameSite=Lax):
 * - utm_source
 * - utm_medium
 * - utm_campaign
 * - utm_term
 * - utm_content
 * - gclid
 * - fbclid
 *
 * Cookies are non-HTTPOnly so the client can read them for form prefill.
 * Navigation is not blocked; the request proceeds normally.
 */
export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const response = NextResponse.next();

  const paramNames = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
  ];

  for (const name of paramNames) {
    const value = url.searchParams.get(name);
    if (value) {
      response.cookies.set(name, value, {
        httpOnly: false,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 90, // 90 days
        path: "/",
      });
    }
  }

  return response;
}

export const config = {
  matcher: "/:path*",
};


