import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro Caminhão",
  alternates: { canonical: "/seguro-caminhao" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro Caminhão" subtitle="Proteção para quem roda o Brasil." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <LeadForm product="caminhao" />
      </section>
    </main>
  );
}


