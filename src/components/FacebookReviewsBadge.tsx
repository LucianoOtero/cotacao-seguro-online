"use client";
import Script from "next/script";

type FacebookReviewsBadgeProps = {
  /** Force using an embed widget when possible; falls back to simple link if not configured */
  useEmbed?: boolean;
  /** Override the reviews URL (otherwise reads from NEXT_PUBLIC_FACEBOOK_REVIEWS_URL) */
  reviewsUrl?: string;
};

/**
 * FacebookReviewsBadge
 *
 * Displays a badge linking to the company's Facebook reviews page.
 * Since the Facebook Reviews API is restricted, we don't fetch counts; we offer an optional third-party
 * embed (e.g., Elfsight) if configured, with a graceful fallback to a simple accessible link.
 *
 * Environment variables (public):
 * - NEXT_PUBLIC_FACEBOOK_REVIEWS_URL: The URL to the Facebook reviews page (e.g., https://www.facebook.com/yourpage/reviews)
 * - NEXT_PUBLIC_ELFSIGHT_APP_ID: Optional Elfsight app id to render the embedded widget
 */
export function FacebookReviewsBadge({ useEmbed, reviewsUrl }: FacebookReviewsBadgeProps) {
  const url =
    reviewsUrl ||
    process.env.NEXT_PUBLIC_FACEBOOK_REVIEWS_URL ||
    process.env.FACEBOOK_REVIEWS_URL ||
    "https://www.facebook.com/imediatoseguros/reviews";
  const elfsightAppId = process.env.NEXT_PUBLIC_ELFSIGHT_APP_ID;

  if (useEmbed && elfsightAppId) {
    return (
      <div>
        <Script src="https://apps.elfsight.com/p/platform.js" strategy="afterInteractive" defer />
        <div className={`elfsight-app-${elfsightAppId}`} />
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      aria-label="Veja nossas avaliações no Facebook"
    >
      <span className="font-semibold">Facebook</span>
      <span>Veja nossas avaliações</span>
    </a>
  );
}


