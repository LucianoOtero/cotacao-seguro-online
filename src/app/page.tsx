import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { GoogleRating } from "@/components/GoogleRating";

export default function Home() {
  return (
    <main>
      <Hero
        title="Cote seu seguro online com especialistas"
        subtitle="Auto, moto, caminhão, utilitários e vida. Atendimento rápido e humano."
        imageUrl="https://uploads-ssl.webflow.com/5f118b1b6f523941a14090bd/650b86814ddae4a4230f14db_bg-menina-capa.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Solicite sua cotação</h2>
          <p className="mt-2 text-gray-700">Preencha os dados e retornaremos rapidamente.</p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Nossa reputação</h2>
          <GoogleRating />
          <a
            className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            href="https://www.facebook.com/imediatoseguros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visite nossa página no Facebook"
          >
            Facebook
          </a>
        </div>
      </section>
    </main>
  );
}
