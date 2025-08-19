import Image from "next/image";

export function Partners() {
  const partners = [
    {
      name: "Allianz",
      logo: "/images/allianz-grey.svg",
      description: "Uma das maiores seguradoras do mundo"
    },
    {
      name: "Bradesco Seguros",
      logo: "/images/bradesco-grey.svg",
      description: "Confiança e tradição brasileira"
    },
    {
      name: "Azul Seguros",
      logo: "/images/azul-grey.svg",
      description: "Inovação e tecnologia"
    },
    {
      name: "HDI Seguros",
      logo: "/images/hdi-grey.svg",
      description: "Especialista em seguros automotivos"
    },
    {
      name: "Liberty Seguros",
      logo: "/images/liberty-grey.svg",
      description: "Soluções personalizadas"
    },
    {
      name: "Mapfre",
      logo: "/images/mapfre-grey.svg",
      description: "Líder em seguros na América Latina"
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Nossas Seguradoras Parceiras
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Trabalhamos com as seguradoras mais confiáveis do mercado para 
              oferecer as melhores condições e coberturas
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {partners.map((partner, index) => (
            <div key={index} className="webflow-col webflow-col-4 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-4">
                  <Image
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    width={80}
                    height={80}
                    className="max-w-full h-auto"
                  />
                </div>
                <h3 className="text-lg font-semibold text-brand-secondary mb-2">
                  {partner.name}
                </h3>
                <p className="text-sm text-neutral-600">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mt-12">
            <div className="bg-brand-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-secondary mb-4">
                Por que trabalhamos com essas seguradoras?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Solidez Financeira</h4>
                  <p className="text-sm text-neutral-600">Todas com classificação A+ ou superior</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Coberturas Amplas</h4>
                  <p className="text-sm text-neutral-600">Proteção completa para todas as necessidades</p>
                </div>
                <div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Assistência 24h</h4>
                  <p className="text-sm text-neutral-600">Suporte disponível a qualquer momento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
