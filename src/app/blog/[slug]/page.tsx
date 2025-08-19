import type { Metadata } from "next";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Params = { params: { slug: string } };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: post?.title || "Post",
    description: post?.richTextHtml ? `${post.title} — publicação` : undefined,
  };
}

export default async function Page({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold">Não encontrado</h1>
        <p>Este conteúdo não está disponível.</p>
      </main>
    );
  }
  const safeHtml = post.richTextHtml ? DOMPurify.sanitize(post.richTextHtml) : "";
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


