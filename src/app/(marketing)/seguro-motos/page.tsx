import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro Motos",
  alternates: { canonical: "/seguro-motos" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro Motos" subtitle="Proteção sob medida para sua moto." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <LeadForm product="motos" />
      </section>
    </main>
  );
}


