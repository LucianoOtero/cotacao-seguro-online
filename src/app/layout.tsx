import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/normalize.css";
import "@/styles/components.css";
import "@/styles/segurosimediato.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
