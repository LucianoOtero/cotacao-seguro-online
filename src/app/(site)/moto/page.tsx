import type { Metadata } from "next";
import { Hero, LeadForm, CTA } from "@/components";

export const metadata: Metadata = {
  title: "Seguro Moto",
  description: "Proteção sob medida para sua moto.",
  alternates: { canonical: "/moto" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro Moto" subtitle="Coberturas pensadas para você e sua moto." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Faça sua cotação</h2>
          <LeadForm product="moto" />
        </div>
        <div>
          <p className="text-gray-700">Conteúdo placeholder para a página de Moto.</p>
        </div>
      </section>
      <CTA title="Tire suas dúvidas" subtitle="Fale com um especialista." primary={{ label: "Solicitar contato", href: "#" }} />
    </main>
  );
}


