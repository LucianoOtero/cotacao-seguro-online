import path from "node:path";
import { readCsv } from "@/lib/csv";

export type BlogPost = {
  slug: string;
  title: string;
  publishedDate?: string;
  richTextHtml?: string;
  imageUrl?: string;
};

const CONTENT_PATH = path.join(process.cwd(), "content", "equipe.csv");

export async function getAllPosts(): Promise<BlogPost[]> {
  const rows = await readCsv(CONTENT_PATH);
  return rows
    .map((r) => ({
      slug: (r.slug || r.Slug || r.permalink || r.title || "").toString().trim().toLowerCase().replace(/\s+/g, "-"),
      title: r.title || r.Title || r.nome || r.Nome || "Sem título",
      publishedDate: r.publishedDate || r.PublishedDate || r.data || r.Data || undefined,
      richTextHtml: r.richTextHtml || r.body || r.content || r.Content || undefined,
      imageUrl: r.image || r.Image || r.imageUrl || r.ImageUrl || undefined,
    }))
    .filter((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}


