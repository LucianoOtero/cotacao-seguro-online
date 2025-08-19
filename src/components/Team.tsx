import Image from "next/image";

export function Team() {
  const teamMembers = [
    {
      name: "Carlos Silva",
      role: "Diretor Comercial",
      experience: "15 anos de experiência",
      photo: "/images/team-member-1.jpg",
      specialties: ["Seguros Automotivos", "Frotas", "Seguros Empresariais"]
    },
    {
      name: "Ana Santos",
      role: "Especialista em Seguros",
      experience: "12 anos de experiência",
      photo: "/images/team-member-2.jpg",
      specialties: ["Seguros de Vida", "Previdência", "Seguros Pessoais"]
    },
    {
      name: "Roberto Lima",
      role: "Consultor Sênior",
      experience: "18 anos de experiência",
      photo: "/images/team-member-3.jpg",
      specialties: ["Seguros de Carga", "Transportes", "Riscos Especiais"]
    },
    {
      name: "Mariana Costa",
      role: "Gerente de Atendimento",
      experience: "10 anos de experiência",
      photo: "/images/team-member-4.jpg",
      specialties: ["Atendimento ao Cliente", "Sinistros", "Pós-Venda"]
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="webflow-container">
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-secondary mb-4">
              Nossa Equipe Especializada
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Profissionais experientes e qualificados para oferecer o melhor atendimento 
              e encontrar a solução ideal para suas necessidades
            </p>
          </div>
        </div>
        
        <div className="webflow-row">
          {teamMembers.map((member, index) => (
            <div key={index} className="webflow-col webflow-col-3 mb-8">
              <div className="bg-neutral-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow h-full">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-neutral-200">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-lg font-bold text-brand-secondary mb-1">
                  {member.name}
                </h3>
                <p className="text-brand-primary font-medium mb-2 text-sm">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-xs mb-4">
                  {member.experience}
                </p>
                
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-neutral-800 mb-2">
                    Especialidades:
                  </h4>
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-brand-primary/10 text-brand-primary text-xs px-2 py-1 rounded-full mr-1 mb-1"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="webflow-row">
          <div className="webflow-col webflow-col-12 text-center mt-12">
            <div className="bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-brand-secondary mb-6">
                Por que nossa equipe faz a diferença?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Experiência Comprovada</h4>
                  <p className="text-sm text-neutral-600">
                    Mais de 15 anos de experiência média no mercado de seguros
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Certificações</h4>
                  <p className="text-sm text-neutral-600">
                    Todos certificados pela SUSEP e em constante atualização
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-brand-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-brand-secondary mb-2">Atendimento Dedicado</h4>
                  <p className="text-sm text-neutral-600">
                    Cada cliente tem um consultor dedicado para suas necessidades
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-brand-primary/20">
                <h4 className="text-lg font-semibold text-brand-secondary mb-4">
                  Quer falar com nossa equipe?
                </h4>
                <div className="flex justify-center space-x-4">
                  <a
                    href="tel:+5511999999999"
                    className="bg-brand-primary text-white px-6 py-2 rounded-md hover:bg-brand-primary/90 transition-colors text-sm font-medium"
                  >
                    📞 Ligar Agora
                  </a>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors text-sm font-medium"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
