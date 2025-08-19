import { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Seguro de Vida",
  alternates: { canonical: "/seguro-de-vida" },
};

export default function Page() {
  return (
    <main>
      <Hero title="Seguro de Vida" subtitle="Proteção financeira para quem você ama." />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <LeadForm product="vida" />
      </section>
    </main>
  );
}


