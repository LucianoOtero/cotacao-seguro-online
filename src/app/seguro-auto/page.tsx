import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro Auto",
  description: "Cote seguro de automóvel com atendimento imediato e várias seguradoras.",
  alternates: { canonical: "/seguro-auto" },
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
        <div className="prose max-w-none">
          <h2>Vantagens</h2>
          <ul>
            <li>Atendimento humano e rápido</li>
            <li>Parcerias com grandes seguradoras</li>
            <li>Opções com assistência 24h</li>
          </ul>
        </div>
      </section>
    </main>
  );
}


