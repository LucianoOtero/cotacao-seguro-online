import type { Metadata } from "next";
import { Hero, LeadForm, CTA } from "@/components";

export const metadata: Metadata = {
  title: "Seguro Auto",
  description: "Cote seguro de automóvel com atendimento imediato e várias seguradoras.",
  alternates: { canonical: "/auto" },
};

export default function Page() {
  return (
    <main>
      <Hero
        title="Seguro Auto"
        subtitle="Compare seguradoras e economize com nossa consultoria."
        imageUrl="https://uploads-ssl.webflow.com/5f118b1b6f523941a14090bd/650b86814ddae4a4230f14db_bg-menina-capa.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Faça sua cotação</h2>
          <LeadForm product="auto" />
        </div>
        <div>
          <p className="text-gray-700">Conteúdo placeholder para a página de Auto.</p>
        </div>
      </section>
      <CTA title="Precisa de ajuda agora?" subtitle="Fale com um especialista." primary={{ label: "Solicitar contato", href: "#" }} />
    </main>
  );
}


