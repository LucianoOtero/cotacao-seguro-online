import { NextResponse } from "next/server";

/**
 * Returns business displayName, rating and userRatingCount from Google Places v1.
 */
export async function GET() {
  const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
  const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

  if (!GOOGLE_PLACE_ID || !GOOGLE_MAPS_API_KEY) {
    return NextResponse.json(
      { error: "Missing GOOGLE_PLACE_ID or GOOGLE_MAPS_API_KEY" },
      { status: 500 }
    );
  }

  // Places API v1 endpoint:
  // https://places.googleapis.com/v1/places/{place_id}?fields=displayName,rating,userRatingCount
  const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(
    GOOGLE_PLACE_ID
  )}?fields=displayName,rating,userRatingCount`;

  const res = await fetch(endpoint, {
    headers: {
      "X-Goog-Api-Key": GOOGLE_MAPS_API_KEY,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "Google Places request failed", status: res.status, details: text },
      { status: 502 }
    );
  }

  const json = await res.json();
  const displayName: string | null = json?.displayName?.text ?? null;
  const rating: number | null = json?.rating ?? null;
  const userRatingCount: number | null = json?.userRatingCount ?? null;

  return NextResponse.json({ displayName, rating, userRatingCount });
}


