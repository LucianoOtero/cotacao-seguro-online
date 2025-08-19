import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://cotacaoseguroonline.com.br").replace(/\/$/, "");

  const staticEntries: MetadataRoute.Sitemap = [
    "",
    "/seguro-auto",
    "/seguro-motos",
    "/seguro-uber",
    "/seguro-taxi",
    "/seguro-utilitario",
    "/seguro-caminhao",
    "/seguro-de-vida",
    "/reputacao",
    "/politicas-de-privacidade",
    "/blog",
  ].map((p) => ({ url: `${baseUrl}${p}`, changeFrequency: "weekly", priority: 0.8 }));

  const posts = await getAllPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}


