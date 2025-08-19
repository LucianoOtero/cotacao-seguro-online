This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a `.env.local` based on `.env.example` and set required variables.

### Environment variables

Create a `.env.local` with the following keys (see `.env.example`):

EspoCRM
- `ESPO_URL`
- `ESPO_API_KEY`

Google Places
- `GOOGLE_MAPS_API_KEY`
- `GOOGLE_PLACE_ID`

Octadesk
- `OCTADESK_TOKEN`

Facebook Reviews
- `FACEBOOK_REVIEWS_URL` (server-side) and/or `NEXT_PUBLIC_FACEBOOK_REVIEWS_URL` (client)

Collect.chat (optional)
- `NEXT_PUBLIC_COLLECTCHAT_ID`

Site URL
- `NEXT_PUBLIC_SITE_URL` (no trailing slash)

In Vercel, add the same variables under Project Settings → Environment Variables. Redeploy to apply.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Marketing attribution

`src/middleware.ts` stores `utm_*`, `gclid`, `fbclid` into cookies for 90 days.

### APIs

- `POST /api/lead`: forwards lead data to EspoCRM (`ESPO_URL`, `ESPO_API_KEY`).
- `POST /api/collect`: forwards Collect.chat webhook payload to Octadesk (`OCTADESK_URL`, `OCTADESK_API_KEY`).
- `GET /api/google-rating`: returns Google Places rating and review count (`GOOGLE_PLACE_ID`, `GOOGLE_PLACES_API_KEY`).

### SEO

`/robots.txt`, `/sitemap.xml` are generated at runtime. Configure `NEXT_PUBLIC_SITE_URL`.

### Redirects

You can add 301 rules in `redirects.config.json` at the project root or inline in `next.config.ts`.

## Deploy no Vercel

1) Repositório GitHub
- Crie um repositório no GitHub e faça push do projeto (`cotacao-seguro-online`).

2) Importar no Vercel
- No painel do Vercel, clique em "New Project" → "Import Git Repository" e selecione o repositório.
- Framework Preset: Next.js (App Router).
- Variáveis de Ambiente: adicione as chaves descritas em "Environment variables" acima.

3) Domínios
- Em Project Settings → Domains, adicione `cotacaoseguroonline.com.br` e `www.cotacaoseguroonline.com.br`.
- Aponte o DNS conforme instruções do Vercel e aguarde propagação/SSL.

4) Verificações (Preview e Production)
- Abra a URL de Preview gerada pelo Vercel e valide:
  - Páginas principais e blog.
  - `robots.txt` e `sitemap.xml` (gerados por Metadata API).
  - Metadados (OpenGraph, Twitter, canonical) nas páginas chaves.
  - Imagens remotas (Webflow) via `next/image`.
  - Redirects (ex.: `/artigos/:slug` → `/blog/:slug`).
- Em Production (domínio final), repita a validação após o primeiro deploy.

5) Testes de integrações
- Formulário → `/api/lead`: teste envio e verifique no EspoCRM.
- Coletor → `/api/collect`: simule webhook do Collect.chat (ou teste via chat) e verifique criação de ticket no Octadesk.
- Google Rating → `/api/google-rating`: confirme retorno (displayName, rating, userRatingCount) e UI.
- Middleware: acesse com `?utm_source=...&gclid=...` e verifique cookies.
- Logs: em Vercel → Project → Deployments → Functions/Logs, confira eventuais erros.

6) Performance
- Rode PageSpeed/Lighthouse para checar Core Web Vitals.


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
