import type { Metadata } from "next";
import Image from "next/image";
function basicSanitize(html: string): string {
  // Minimal sanitize: strips script tags and on* attributes
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/ on[a-z]+="[^"]*"/gi, "")
    .replace(/ on[a-z]+='[^']*'/gi, "");
}
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type SlugParams = { slug: string };

// Only allow statically generated slugs; unknown slugs should 404 at build time
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<SlugParams> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title || "Post",
    description: post?.richTextHtml ? `${post.title} — publicação` : undefined,
  };
}

export default async function Page({ params }: { params: Promise<SlugParams> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold">Não encontrado</h1>
        <p>Este conteúdo não está disponível.</p>
      </main>
    );
  }
  const safeHtml = post.richTextHtml ? basicSanitize(post.richTextHtml) : "";
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      {post.publishedDate ? (
        <p className="text-gray-600 mt-1">{new Date(post.publishedDate).toLocaleDateString("pt-BR")}</p>
      ) : null}
      {post.imageUrl ? (
        <div className="mt-6">
          <Image src={post.imageUrl} alt="" width={1200} height={630} className="w-full h-auto rounded" />
        </div>
      ) : null}
      {safeHtml ? (
        <article className="prose mt-6" dangerouslySetInnerHTML={{ __html: safeHtml }} />
      ) : null}
    </main>
  );
}


