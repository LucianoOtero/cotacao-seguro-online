"use client";
import { useEffect, useState } from "react";

type RatingState = {
  displayName: string | null;
  rating: number | null;
  userRatingCount: number | null;
};

export function GoogleRating() {
  const [state, setState] = useState<RatingState>({ displayName: null, rating: null, userRatingCount: null });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/google-rating", { cache: "no-store" })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) throw new Error(json.error);
        setState(json);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    if (state.rating != null && state.userRatingCount != null) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: state.displayName || "Imediato Seguros",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: state.rating,
          reviewCount: state.userRatingCount,
        },
      });
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [state.rating, state.userRatingCount, state.displayName]);

  if (error) return null;
  if (state.rating == null || state.userRatingCount == null) return null;

  return (
    <div
      className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm"
      aria-label={`Avaliação Google ${state.rating} de 5 com ${state.userRatingCount} avaliações`}
    >
      <span className="font-semibold">Google</span>
      <span aria-hidden>{state.rating.toFixed(1)} ★</span>
      <span className="text-gray-600">({state.userRatingCount})</span>
    </div>
  );
}


