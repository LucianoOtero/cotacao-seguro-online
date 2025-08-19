import Link from "next/link";
import Image from "next/image";

type InsuranceType = {
  id: string;
  name: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
};

const insuranceTypes: InsuranceType[] = [
  {
    id: "auto",
    name: "Seguro Auto",
    description: "Proteção completa para seu veículo com as melhores seguradoras",
    icon: "/images/icon-auto.png",
    href: "/seguro-auto",
    features: ["Colisão", "Roubo", "Assistência 24h", "Carro reserva"]
  },
  {
    id: "moto",
    name: "Seguro Moto",
    description: "Segurança para sua motocicleta com cobertura ampla",
    icon: "/images/icon-motos.png",
    href: "/seguro-motos",
    features: ["Colisão", "Roubo", "Assistência", "Acidentes pessoais"]
  },
  {
    id: "caminhao",
    name: "Seguro Caminhão",
    description: "Proteção para quem roda o Brasil com cargas valiosas",
    icon: "/images/icon-frotas.png",
    href: "/seguro-caminhao",
    features: ["Carga", "Responsabilidade civil", "Assistência", "Roubo"]
  },
  {
    id: "vida",
    name: "Seguro de Vida",
    description: "Tranquilidade para você e sua família",
    icon: "/images/seguro-vida.jpg",
    href: "/seguro-de-vida",
    features: ["Morte", "Invalidez", "Doenças graves", "Aposentadoria"]
  },
  {
    id: "utilitario",
    name: "Seguro Utilitário",
    description: "Proteção para veículos comerciais e de trabalho",
    icon: "/images/icon-utilitario.png",
    href: "/seguro-utilitario",
    features: ["Colisão", "Roubo", "Responsabilidade civil", "Assistência"]
  },
  {
    id: "taxi",
    name: "Seguro Táxi",
    description: "Segurança para profissionais do transporte",
    icon: "/images/icon-taxi.png",
    href: "/seguro-taxi",
    features: ["Colisão", "Roubo", "Passageiros", "Responsabilidade civil"]
  }
];

export function InsuranceMenu() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Nossos Seguros
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de seguros para proteger o que é mais importante para você
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {insuranceTypes.map((insurance) => (
            <div key={insurance.id} className="webflow-col webflow-col-4 mb-8">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 h-full">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <Image
                      src={insurance.icon}
                      alt={insurance.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-secondary mb-2">
                    {insurance.name}
                  </h3>
                  <p className="text-neutral-600 text-sm mb-4">
                    {insurance.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-neutral-800 mb-3">Principais Coberturas:</h4>
                  <ul className="space-y-2">
                    {insurance.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-neutral-600">
                        <svg className="w-4 h-4 text-brand-success mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={insurance.href}
                  className="block w-full bg-brand-primary text-white text-center py-3 px-4 rounded-md hover:bg-brand-primary/90 transition-colors font-medium"
                >
                  Cotar Agora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
