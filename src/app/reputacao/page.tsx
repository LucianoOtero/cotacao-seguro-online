import { Metadata } from "next";
import { GoogleRating } from "@/components/GoogleRating";

export const metadata: Metadata = {
  title: "Reputação",
  description: "Veja nossa reputação no Google e Facebook.",
  alternates: { canonical: "/reputacao" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Reputação</h1>
      <div className="mt-6 flex gap-4 items-center">
        <GoogleRating />
        <a
          className="inline-flex items-center gap-2 rounded border px-3 py-2 text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          href="https://www.facebook.com/imediatoseguros"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </main>
  );
}


