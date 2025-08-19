type HeroProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
};

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative isolate">
      {imageUrl && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/80 to-brand-primary/80" />
        </div>
      )}
      
      <div className="webflow-container mt-26 relative">
        <div className="flex justify-start items-center h-full mt-0 p-[1vw]">
          <div className="webflow-row h-auto mb-30 relative">
            <div className="webflow-col webflow-col-6 flex flex-col justify-center items-start h-full">
              <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
            <div className="webflow-col webflow-col-6 flex flex-col justify-center items-start h-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
                <h3 className="text-2xl font-semibold mb-4">Cote agora</h3>
                <p className="text-white/80 mb-6">
                  Preencha o formulário e receba sua cotação personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
