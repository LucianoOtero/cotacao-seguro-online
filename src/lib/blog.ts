import path from "node:path";
import { readCsv } from "@/lib/csv";

export type BlogPost = {
  slug: string;
  title: string;
  publishedDate: string;
  richTextHtml: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string | undefined;
  featured: boolean;
};

const CONTENT_PATH = path.join(process.cwd(), "content", "equipe.csv");

function sanitizeSlug(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/vbscript:/gi, "");
}

function generateExcerpt(html: string, maxLength: number = 200): string {
  const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  
  if (text.length <= maxLength) {
    return text;
  }
  
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
}

// Sample blog posts for demonstration
function getSamplePosts(): BlogPost[] {
  const posts: BlogPost[] = [
    {
      slug: "como-escolher-seguro-auto",
      title: "Como Escolher o Melhor Seguro Auto em 2024",
      publishedDate: "2024-01-15",
      richTextHtml: `
        <p>Escolher o seguro auto ideal pode parecer complicado, mas com as dicas certas, você pode encontrar a melhor proteção pelo melhor preço.</p>
        <h2>1. Avalie suas necessidades</h2>
        <p>Antes de contratar um seguro, considere:</p>
        <ul>
          <li>Valor do seu veículo</li>
          <li>Região onde você circula</li>
          <li>Perfil de uso (trabalho, lazer, viagens)</li>
        </ul>
        <h2>2. Compare coberturas</h2>
        <p>Não olhe apenas o preço. Verifique se o seguro oferece:</p>
        <ul>
          <li>Cobertura para colisão e roubo</li>
          <li>Assistência 24 horas</li>
          <li>Carro reserva</li>
          <li>Cobertura para terceiros</li>
        </ul>
      `,
      excerpt: "Escolher o seguro auto ideal pode parecer complicado, mas com as dicas certas, você pode encontrar a melhor proteção pelo melhor preço.",
      author: "Carlos Silva",
      category: "Seguro Auto",
      tags: ["seguro auto", "dicas", "comparação"],
      imageUrl: "/images/blog/seguro-auto-dicas.jpg",
      featured: true,
    },
    {
      slug: "seguro-moto-vale-pena",
      title: "Seguro de Moto Vale a Pena? Descubra Agora",
      publishedDate: "2024-01-10",
      richTextHtml: `
        <p>Muitos motociclistas têm dúvidas se vale a pena contratar um seguro para moto. A resposta é sim, e vamos explicar por quê.</p>
        <h2>Estatísticas preocupantes</h2>
        <p>Segundo dados da Secretaria de Segurança:</p>
        <ul>
          <li>1 moto é roubada a cada 10 minutos no Brasil</li>
          <li>Acidentes com motos representam 30% do total</li>
          <li>Custo médio de reparo: R$ 3.500</li>
        </ul>
      `,
      excerpt: "Muitos motociclistas têm dúvidas se vale a pena contratar um seguro para moto. A resposta é sim, e vamos explicar por quê.",
      author: "Ana Santos",
      category: "Seguro Moto",
      tags: ["seguro moto", "vale a pena", "estatísticas"],
      imageUrl: "/images/blog/seguro-moto-vale-pena.jpg",
      featured: false,
    },
    {
      slug: "seguro-vida-jovens",
      title: "Por que Jovens Devem Pensar em Seguro de Vida",
      publishedDate: "2024-01-05",
      richTextHtml: `
        <p>Seguro de vida não é só para pessoas mais velhas. Jovens também podem se beneficiar muito dessa proteção.</p>
        <h2>Vantagens para jovens</h2>
        <p>Contratar cedo traz benefícios:</p>
        <ul>
          <li>Prêmios mais baixos pela idade</li>
          <li>Proteção desde cedo</li>
          <li>Cobertura para invalidez</li>
        </ul>
      `,
      excerpt: "Seguro de vida não é só para pessoas mais velhas. Jovens também podem se beneficiar muito dessa proteção.",
      author: "Roberto Lima",
      category: "Seguro de Vida",
      tags: ["seguro vida", "jovens", "planejamento"],
      imageUrl: "/images/blog/seguro-vida-jovens.jpg",
      featured: false,
    },
  ];
  
  return posts;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const rows = await readCsv(CONTENT_PATH);
    
    if (rows.length === 0) {
      // Return sample posts if CSV is empty or doesn't exist
      return getSamplePosts();
    }

    const posts = rows
      .map((r) => {
        const title = r.title || r.Title || r.nome || r.Nome || "";
        const content = r.richTextHtml || r.body || r.content || r.Content || "";
        const slug = r.slug || r.Slug || sanitizeSlug(title);
        
        if (!title || !content) return null;

        const post: BlogPost = {
          slug,
          title,
          publishedDate: r.publishedDate || r.PublishedDate || r.data || r.Data || new Date().toISOString().split('T')[0],
          richTextHtml: sanitizeHtml(content),
          excerpt: r.excerpt || r.resumo || generateExcerpt(content),
          author: r.author || r.autor || "Imediato Seguros",
          category: r.category || r.categoria || "Seguros",
          tags: r.tags ? r.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [],
          imageUrl: r.image || r.Image || r.imageUrl || r.ImageUrl || undefined,
          featured: (r.featured || r.destaque || "").toLowerCase() === "true" || r.featured === "1",
        };
        
        return post;
      })
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      });

    return posts.length > 0 ? posts : getSamplePosts();
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return getSamplePosts();
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  const featuredPosts = posts.filter(post => post.featured);
  return featuredPosts.slice(0, limit);
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}


