"use client";
import { useCallback } from "react";

type WhatsAppButtonProps = {
  phoneE164: string; // e.g., 551132301422
  label?: string;
};

export function WhatsAppButton({ phoneE164, label = "Falar no WhatsApp" }: WhatsAppButtonProps) {
  const onClick = useCallback(() => {
    const cookieMap = Object.fromEntries(
      document.cookie
        .split("; ")
        .filter(Boolean)
        .map((p) => {
          const [k, ...r] = p.split("=");
          return [decodeURIComponent(k), decodeURIComponent(r.join("="))];
        })
    );
    const gclid = cookieMap.gclid || "";
    const url = new URL("https://api.whatsapp.com/send");
    url.searchParams.set("phone", phoneE164);
    const baseText = "Ola. Quero fazer uma cotacao de seguro.";
    const text = `${baseText} Codigo de Desconto (Nao apagar, por favor) = ${gclid}`;
    url.searchParams.set("text", text);
    window.open(url.toString(), "_blank");
  }, [phoneE164]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
      aria-label="Abrir conversa no WhatsApp"
    >
      {label}
    </button>
  );
}


