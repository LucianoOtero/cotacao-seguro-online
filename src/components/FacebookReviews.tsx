export function FacebookReviews() {
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_REVIEWS_URL || 
    "https://www.facebook.com/imediato.seguros/reviews";

  return (
    <section className="bg-brand-primary/5 py-8">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-white rounded-lg shadow-md px-6 py-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Veja nossas avaliações no Facebook
                </h3>
                <p className="text-sm text-neutral-600">
                  Clientes satisfeitos compartilham suas experiências
                </p>
              </div>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Ver Avaliações
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
