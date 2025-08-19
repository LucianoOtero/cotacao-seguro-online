import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro Uber",
  alternates: { canonical: "/seguro-uber" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro Uber" subtitle="As coberturas ideais para motoristas de app." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <LeadForm product="uber" />
      </section>
    </main>
  );
}


