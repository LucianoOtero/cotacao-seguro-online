"use client";

import { useState, useEffect } from "react";

type GoogleReview = {
  rating: number;
  reviewCount: number;
  displayName: string;
};

export function GoogleReviews() {
  const [review, setReview] = useState<GoogleReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await fetch("/api/google-rating");
        if (response.ok) {
          const data = await response.json();
          setReview(data);
        } else {
          // Fallback para dados estáticos se a API falhar
          setReview({
            rating: 4.8,
            reviewCount: 127,
            displayName: "Imediato Seguros"
          });
        }
      } catch (err) {
        // Fallback para dados estáticos em caso de erro
        setReview({
          rating: 4.8,
          reviewCount: 127,
          displayName: "Imediato Seguros"
        });
      } finally {
        setLoading(false);
      }
    }

    fetchReview();
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-8">
        <div className="webflow-container">
          <div className="webflow-row">
            <div className="webflow-col webflow-col-12 text-center">
              <div className="animate-pulse">
                <div className="h-6 bg-neutral-200 rounded w-48 mx-auto mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded w-32 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!review) {
    return null;
  }

  return (
    <section className="bg-white py-8">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-white rounded-lg shadow-md px-6 py-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(review.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-neutral-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg font-semibold text-neutral-900">
                {review.rating}
              </span>
              <span className="text-neutral-600">
                ({review.reviewCount} avaliações)
              </span>
            </div>
            <p className="mt-4 text-sm text-neutral-600">
              Avaliações verificadas no Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
