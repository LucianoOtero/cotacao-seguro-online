export function PriceQualityService() {
  const pillars = [
    {
      icon: "💰",
      title: "Melhor Preço",
      description: "Comparamos todas as seguradoras para garantir o menor preço do mercado",
      features: ["Cotação gratuita", "Sem compromisso", "Descontos exclusivos", "Renovação automática"]
    },
    {
      icon: "⭐",
      title: "Qualidade Garantida",
      description: "Trabalhamos apenas com as seguradoras mais confiáveis do Brasil",
      features: ["Seguradoras A+", "Coberturas amplas", "Processo de sinistro ágil", "Assistência 24h"]
    },
    {
      icon: "🛠️",
      title: "Serviço Excepcional",
      description: "Atendimento personalizado e suporte completo durante todo o processo",
      features: ["Consultor dedicado", "Suporte técnico", "Acompanhamento", "Resolução rápida"]
    }
  ];

  return (
    <section className="bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Nossos Três Pilares
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A combinação perfeita que faz da Imediato Seguros sua melhor escolha
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {pillars.map((pillar, index) => (
            <div key={index} className="webflow-col webflow-col-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-8 h-full text-center">
                <div className="text-6xl mb-6">{pillar.icon}</div>
                <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                  {pillar.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <ul className="text-left space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-700">
                      <svg className="w-4 h-4 text-brand-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mt-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">
                Garantia de Satisfação
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">100%</div>
                  <div className="text-neutral-600">Gratuito</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">30 dias</div>
                  <div className="text-neutral-600">Garantia</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-2">24/7</div>
                  <div className="text-neutral-600">Suporte</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
