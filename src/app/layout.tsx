import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://cotacaoseguroonline.com.br"),
  title: {
    default: "Imediato Seguros — Cotação online de seguros",
    template: "%s | Imediato Seguros",
  },
  description: "Cote seguro auto, moto, caminhão, utilitário e vida com quem entende. Atendimento rápido e humano.",
  openGraph: {
    type: "website",
    title: "Imediato Seguros",
    description: "Cotações de seguros com especialistas.",
    url: "/",
    siteName: "Imediato Seguros",
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
