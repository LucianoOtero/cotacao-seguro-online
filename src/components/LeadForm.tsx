"use client";
import { useEffect, useRef, useState } from "react";

type LeadFormProps = {
  product?: string;
};

export function LeadForm({ product }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [attribution, setAttribution] = useState<Record<string, string>>({});
  const mountedAtRef = useRef<number>(Date.now());

  // Prefill marketing fields from cookies on client as a fallback
  useEffect(() => {
    const keys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
      "fbclid",
    ];
    const store: Record<string, string> = {};
    const map = Object.fromEntries(
      document.cookie
        .split("; ")
        .filter(Boolean)
        .map((p) => {
          const [k, ...r] = p.split("=");
          return [decodeURIComponent(k), decodeURIComponent(r.join("="))];
        })
    );
    for (const k of keys) if (map[k]) store[k] = map[k];
    setAttribution(store);
  }, []);

  async function onSubmit(formData: FormData) {
    setStatus("submitting");
    setError(null);

    // Anti-spam: honeypot and minimal time on page
    const honeypot = String(formData.get("website") || "");
    if (honeypot.trim() !== "") {
      // Silently succeed to mislead bots
      setStatus("success");
      return;
    }
    const elapsed = Date.now() - mountedAtRef.current;
    const remaining = 2000 - elapsed; // >= 2s
    if (remaining > 0) {
      await new Promise((r) => setTimeout(r, remaining));
    }

    const body = Object.fromEntries(formData.entries());
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...body, product, ...attribution }),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setError(json.error || "Falha ao enviar. Tente novamente.");
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  return (
    <form
      className="grid gap-3 max-w-xl"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        onSubmit(fd);
      }}
      aria-describedby={error ? "leadform-error" : undefined}
    >
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium">Nome</label>
          <input id="firstName" name="firstName" required className="mt-1 w-full rounded border px-3 py-2" autoComplete="given-name" />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium">Sobrenome</label>
          <input id="lastName" name="lastName" required className="mt-1 w-full rounded border px-3 py-2" autoComplete="family-name" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium">Telefone</label>
          <input id="phoneNumber" name="phoneNumber" required className="mt-1 w-full rounded border px-3 py-2" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="emailAddress" className="block text-sm font-medium">Email</label>
          <input id="emailAddress" name="emailAddress" type="email" required className="mt-1 w-full rounded border px-3 py-2" autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Mensagem</label>
        <textarea id="message" name="message" rows={3} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 disabled:opacity-50"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Enviando..." : "Quero uma cotação"}
      </button>
      {status === "success" && (
        <p role="status" className="text-green-700">Recebemos seus dados. Em breve entraremos em contato.</p>
      )}
      {error && (
        <p id="leadform-error" role="alert" className="text-red-700">{error}</p>
      )}
    </form>
  );
}


