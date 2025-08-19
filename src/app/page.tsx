import { 
  Header, 
  Footer, 
  Hero, 
  FraudAlert, 
  GoogleReviews, 
  FacebookReviews, 
  InsuranceMenu,
  WhyChooseUs,
  PriceQualityService,
  Partners,
  Coverages,
  Team,
  CollectChat,
  CTA
} from "@/components";

export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <Hero 
          title="Imediato Seguros"
          subtitle="Cote seguro auto, moto, caminhão, utilitário e vida com quem entende. Atendimento rápido e humano."
        />
        
        <FraudAlert />
        
        <GoogleReviews />
        
        <FacebookReviews />
        
        <InsuranceMenu />
        
        <WhyChooseUs />
        
        <PriceQualityService />
        
        <Partners />
        
        <Coverages />
        
        <Team />
        
        <CTA
          title="Pronto para contratar seu seguro?"
          subtitle="Faça uma cotação gratuita e sem compromisso. Nossa equipe especializada está pronta para ajudar você."
          primary={{
            label: "Fazer Cotação Gratuita",
            href: "#cotacao"
          }}
          secondary={{
            label: "Falar com Consultor",
            href: "https://wa.me/5511999999999"
          }}
          variant="gradient"
        />
      </main>
      
      <Footer />
      <CollectChat />
    </>
  );
}
