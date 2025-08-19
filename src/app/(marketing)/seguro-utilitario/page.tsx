import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro Utilitário",
  alternates: { canonical: "/seguro-utilitario" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro Utilitário" subtitle="Coberturas para veículos de trabalho." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <LeadForm product="utilitario" />
      </section>
    </main>
  );
}


