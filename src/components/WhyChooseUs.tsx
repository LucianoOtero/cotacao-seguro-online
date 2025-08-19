export function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Atendimento Rápido",
      description: "Resposta em até 2 horas úteis para suas cotações"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Melhor Preço Garantido",
      description: "Comparamos todas as seguradoras para você economizar"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
        </svg>
      ),
      title: "Equipe Especializada",
      description: "Profissionais com mais de 15 anos de experiência"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: "Processo Simplificado",
      description: "Cotação online em poucos minutos, sem burocracia"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Segurança Total",
      description: "Seus dados protegidos com criptografia de ponta"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: "Suporte 24/7",
      description: "Assistência disponível a qualquer momento do dia"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Por que escolher a Imediato Seguros?
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Somos especialistas em encontrar as melhores condições para seus seguros, 
              com atendimento personalizado e preços competitivos
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {reasons.map((reason, index) => (
            <div key={index} className="webflow-col webflow-col-4 mb-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-secondary mb-3">
                  {reason.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mt-8">
            <div className="bg-brand-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                Mais de 10.000 clientes satisfeitos
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Junte-se aos milhares de clientes que já confiaram na Imediato Seguros
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-brand-primary">98%</div>
                  <div className="text-sm text-neutral-600">Satisfação</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">15+</div>
                  <div className="text-sm text-neutral-600">Anos de experiência</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-primary">24h</div>
                  <div className="text-sm text-neutral-600">Atendimento</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
