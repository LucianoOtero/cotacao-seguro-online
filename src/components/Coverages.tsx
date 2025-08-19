export function Coverages() {
  const coverages = [
    {
      category: "Seguro Auto",
      icon: "🚗",
      items: [
        {
          name: "Colisão",
          description: "Cobertura para danos causados por colisão, capotagem ou tombamento"
        },
        {
          name: "Roubo e Furto",
          description: "Proteção contra roubo e furto total do veículo"
        },
        {
          name: "Incêndio",
          description: "Cobertura para danos causados por incêndio"
        },
        {
          name: "Fenômenos da Natureza",
          description: "Proteção contra granizo, enchente, vendaval e outros"
        },
        {
          name: "Assistência 24h",
          description: "Guincho, socorro mecânico, chaveiro e pane seca"
        },
        {
          name: "Carro Reserva",
          description: "Veículo substituto durante o conserto"
        }
      ]
    },
    {
      category: "Seguro Moto",
      icon: "🏍️",
      items: [
        {
          name: "Colisão",
          description: "Cobertura para danos causados por acidentes"
        },
        {
          name: "Roubo e Furto",
          description: "Proteção contra roubo e furto da motocicleta"
        },
        {
          name: "Acidentes Pessoais",
          description: "Cobertura para morte e invalidez do condutor"
        },
        {
          name: "Assistência 24h",
          description: "Guincho especializado e socorro"
        },
        {
          name: "Equipamentos",
          description: "Cobertura para acessórios e equipamentos"
        }
      ]
    },
    {
      category: "Seguro Caminhão",
      icon: "🚛",
      items: [
        {
          name: "Casco",
          description: "Cobertura para danos ao veículo"
        },
        {
          name: "Responsabilidade Civil",
          description: "Danos a terceiros causados pelo veículo"
        },
        {
          name: "Carga",
          description: "Proteção para a mercadoria transportada"
        },
        {
          name: "Assistência 24h",
          description: "Socorro especializado para veículos pesados"
        },
        {
          name: "Despesas Extraordinárias",
          description: "Hospedagem e alimentação em viagem"
        }
      ]
    }
  ];

  return (
    <section className="bg-neutral-50 py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Coberturas Disponíveis
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Conheça todas as coberturas que oferecemos para proteger você e seu patrimônio
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {coverages.map((coverage, index) => (
            <div key={index} className="webflow-col webflow-col-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{coverage.icon}</div>
                  <h3 className="text-xl font-bold text-brand-secondary">
                    {coverage.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {coverage.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-2 border-brand-primary pl-4">
                      <h4 className="font-semibold text-brand-secondary text-sm mb-1">
                        {item.name}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <button className="w-full bg-brand-primary text-white py-2 px-4 rounded-md hover:bg-brand-primary/90 transition-colors text-sm font-medium">
                    Cotar {coverage.category}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mt-12">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">
                Coberturas Adicionais Disponíveis
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-brand-secondary text-sm">Vidros</h4>
                  <p className="text-xs text-neutral-600">Para-brisa e vidros</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-brand-secondary text-sm">Faróis</h4>
                  <p className="text-xs text-neutral-600">Faróis e lanternas</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-brand-secondary text-sm">Acessórios</h4>
                  <p className="text-xs text-neutral-600">Som e equipamentos</p>
                </div>
                <div>
                  <div className="w-12 h-12 mx-auto mb-2 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-medium text-brand-secondary text-sm">Terceiros</h4>
                  <p className="text-xs text-neutral-600">Danos materiais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
