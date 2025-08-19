import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  alternates: { canonical: "/politicas-de-privacidade" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10 prose">
      <h1>Política de Privacidade</h1>
      <p>Respeitamos sua privacidade. Utilizamos cookies para fins de analytics e atribuição de campanhas.</p>
      <h2>Dados coletados</h2>
      <p>Coletamos apenas dados necessários para contato e elaboração de cotações.</p>
      <h2>Compartilhamento</h2>
      <p>Dados podem ser encaminhados a parceiros seguradores para fins de cotação.</p>
      <h2>Contato</h2>
      <p>Para exercer seus direitos, entre em contato com nossa equipe.</p>
    </main>
  );
}


