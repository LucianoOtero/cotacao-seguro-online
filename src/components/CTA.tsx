type CTAProps = {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  variant?: "default" | "gradient" | "minimal";
};

export function CTA({ 
  title, 
  subtitle, 
  primary, 
  secondary, 
  variant = "default" 
}: CTAProps) {
  const baseClasses = "py-16";
  const variantClasses = {
    default: "bg-neutral-50",
    gradient: "bg-gradient-to-r from-brand-primary to-brand-secondary",
    minimal: "bg-white"
  };

  const textColorClasses = {
    default: "text-brand-secondary",
    gradient: "text-white",
    minimal: "text-brand-secondary"
  };

  const subtitleColorClasses = {
    default: "text-neutral-600",
    gradient: "text-white/90",
    minimal: "text-neutral-600"
  };

  return (
    <section className={`${baseClasses} ${variantClasses[variant]}`}>
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${textColorClasses[variant]}`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg mb-8 max-w-2xl mx-auto ${subtitleColorClasses[variant]}`}>
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primary && (
                <a
                  href={primary.href}
                  className="bg-brand-primary text-white px-8 py-3 rounded-md hover:bg-brand-primary/90 transition-colors font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  {primary.label}
                </a>
              )}
              {secondary && (
                <a
                  href={secondary.href}
                  className={`border-2 px-8 py-3 rounded-md transition-colors font-semibold text-lg ${
                    variant === "gradient" 
                      ? "border-white text-white hover:bg-white hover:text-brand-primary" 
                      : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                  }`}
                >
                  {secondary.label}
                </a>
              )}
            </div>

            {variant === "default" && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-brand-secondary mb-2">Rápido</h3>
                  <p className="text-sm text-neutral-600">Cotação em 2 minutos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-brand-secondary mb-2">Gratuito</h3>
                  <p className="text-sm text-neutral-600">Sem compromisso</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-brand-secondary mb-2">Seguro</h3>
                  <p className="text-sm text-neutral-600">Dados protegidos</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


