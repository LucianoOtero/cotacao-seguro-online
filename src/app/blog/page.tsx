import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

const PAGE_SIZE = 12;

export default async function Page({ searchParams }: { searchParams?: Promise<Record<string, string | string[]>> }) {
  const sp = (await searchParams) || {};
  const page = Number((sp.page as string) || "1");
  const q = ((sp.q as string) || "").toLowerCase();
  const all = await getAllPosts();
  const filtered = q
    ? all.filter((p) => `${p.title} ${p.richTextHtml || ""}`.toLowerCase().includes(q))
    : all;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const items = filtered.slice(start, start + PAGE_SIZE);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Blog</h1>
      <form className="mt-6">
        <input
          name="q"
          defaultValue={q}
          placeholder="Buscar..."
          className="w-full rounded border px-3 py-2"
          aria-label="Buscar posts"
        />
      </form>
      <ul className="mt-6 space-y-4">
        {items.map((p) => (
          <li key={p.slug} className="border rounded p-4">
            <Link href={`/blog/${p.slug}`} className="font-semibold hover:underline">
              {p.title}
            </Link>
            {p.publishedDate ? (
              <p className="text-gray-600">{new Date(p.publishedDate).toLocaleDateString("pt-BR")}</p>
            ) : null}
          </li>
        ))}
      </ul>

      {totalPages > 1 ? (
        <nav className="mt-6 flex gap-2" aria-label="Paginação">
          {Array.from({ length: totalPages }).map((_, idx) => {
            const n = idx + 1;
            const params = new URLSearchParams();
            if (q) params.set("q", q);
            if (n > 1) params.set("page", String(n));
            const href = params.toString() ? `/blog?${params}` : "/blog";
            return (
              <Link
                key={n}
                href={href}
                className={`px-3 py-1 rounded border ${n === page ? "bg-blue-600 text-white" : "hover:bg-gray-50"}`}
                aria-current={n === page ? "page" : undefined}
              >
                {n}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </main>
  );
}


