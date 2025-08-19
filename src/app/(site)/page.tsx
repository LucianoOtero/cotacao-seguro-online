import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { LeadForm } from "@/components/LeadForm";
import { GoogleRating } from "@/components/GoogleRating";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Cotação Seguro Auto — Grátis e sem compromisso",
  description:
    "Cotações completas de seguro de auto. Assistência 24h, perdas e danos, FIPE, e mais. Compare seguradoras e economize.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cotação Seguro Auto — Grátis e sem compromisso",
    description:
      "Cotações completas de seguro de auto. Assistência 24h, perdas e danos, FIPE, e mais. Compare seguradoras e economize.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotação Seguro Auto — Grátis e sem compromisso",
    description:
      "Cotações completas de seguro de auto. Assistência 24h, perdas e danos, FIPE, e mais. Compare seguradoras e economize.",
  },
};

export default function Page() {
  return (
    <main>
      {/* Hero with marketing headline */}
      <Hero
        title="25 anos de experiência. Especialistas em seguros de auto."
        subtitle="Atendimento em todo o território nacional. Cálculo online e comparação entre seguradoras."
        imageUrl="https://uploads-ssl.webflow.com/5f118b1b6f523941a14090bd/650b86814ddae4a4230f14db_bg-menina-capa.jpg"
      />

      {/* Lead form and pricing highlight */}
      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Seguro de Auto</h2>
          <p className="mt-1 text-gray-700">Cálculo online em diversas seguradoras.</p>
          <div className="mt-6">
            <LeadForm product="auto" />
          </div>
        </div>
        <div>
          <div className="rounded-lg border p-6 bg-white shadow-sm">
            <p className="text-gray-600">A partir de</p>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-4xl font-bold">R$ 79</span>
              <span className="text-lg font-semibold">,90</span>
              <span className="text-gray-600 mb-1">mensais</span>
            </div>
            <div className="mt-4">
              <WhatsAppButton phoneE164="551132301422" label="Falar agora no WhatsApp" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust and ratings */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-xl font-semibold">A melhor avaliação do mercado no Google</h2>
        <p className="text-gray-700">96% de satisfação (nota 4.8/5.0) com milhares de avaliações.</p>
        <div className="mt-4">
          <GoogleRating />
        </div>
      </section>

      {/* Menu of products */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Escolha o seu seguro</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { href: "/seguro-auto", src: "/images/logo-auto-sem-linha.svg", label: "Auto", price: "R$ 79,90 / mês" },
            { href: "/seguro-caminhao", src: "/images/caminhao-0.svg", label: "Caminhão", price: "R$ 99,90 / mês" },
            { href: "/seguro-uber", src: "/images/logo-uber-sem-linha.svg", label: "Aplicativo", price: "R$ 84,90 / mês" },
            { href: "/seguro-utilitario", src: "/images/logo-utilitario-sem-linha.svg", label: "Utilitários", price: "R$ 94,90 / mês" },
            { href: "/seguro-motos", src: "/images/logo-moto-sem-linha.svg", label: "Motos", price: "R$ 49,90 / mês" },
            { href: "/assistencia-24-horas", src: "/images/colisao-branco-centralizado.svg", label: "RCF/24 Hs", price: "R$ 39,90 / mês" },
            { href: "/seguro-taxi", src: "/images/logo-taxi-sem-linha.svg", label: "Taxi", price: "R$ 99,90 / mês" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group rounded-lg border p-4 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <div className="h-16 w-full flex items-center justify-center">
                <Image src={item.src} alt="" width={80} height={40} className="opacity-80 group-hover:opacity-100" />
              </div>
              <div className="mt-3">
                <h3 className="font-semibold">{item.label}</h3>
                <p className="text-sm text-gray-600">A partir de {item.price}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Preço, qualidade e atendimento</h2>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { label: "Preço", src: "/images/BEST-PRICE-4.svg" },
            { label: "Bônus", src: "/images/BONUS4.svg" },
            { label: "Sob medida", src: "/images/SOB-MEDIDA-2.svg" },
            { label: "Sinistro", src: "/images/sinistro.svg" },
            { label: "Canais", src: "/images/canais-19.svg" },
          ].map((f) => (
            <div key={f.label} className="rounded-lg border p-4 bg-white">
              <div className="h-10 flex items-center justify-center">
                <Image src={f.src} alt="" width={48} height={48} />
              </div>
              <h3 className="mt-3 font-semibold capitalize">{f.label}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-xl font-semibold">Parceiros</h2>
        <p className="text-gray-700">Companhias seguradoras de confiança</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            "porto-grey.svg",
            "bradesco-grey.svg",
            "azul-grey.svg",
            "itau-grey.svg",
            "hdi-grey.svg",
            "tokio-grey.svg",
            "sompo-grey.svg",
            "mapfre-grey.svg",
            "liberty-grey.svg",
            "allianz-grey-quadrado.svg",
          ].map((file) => (
            <div key={file} className="h-10 flex items-center justify-center opacity-80">
              <Image src={`/images/${file}`} alt="" width={120} height={40} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


