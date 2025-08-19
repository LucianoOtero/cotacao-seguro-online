# Go Live Checklist – cotacaoseguroonline.com.br

## DNS e Domínio
- [ ] Apontar domínio e subdomínios no Vercel (Apex e www)
- [ ] Verificar emissão/renovação de TLS

## Variáveis de Ambiente (Vercel)
- [ ] ESPO_URL
- [ ] ESPO_API_KEY
- [ ] GOOGLE_MAPS_API_KEY
- [ ] GOOGLE_PLACE_ID
- [ ] OCTADESK_TOKEN
- [ ] FACEBOOK_REVIEWS_URL ou NEXT_PUBLIC_FACEBOOK_REVIEWS_URL
- [ ] NEXT_PUBLIC_COLLECTCHAT_ID (opcional)
- [ ] NEXT_PUBLIC_SITE_URL (sem barra final)

## Redirects
- [ ] Conferir `next.config.ts` e `redirects.config.json`
- [ ] Validar `redirects-map.md`

## Formulários
- [ ] Testar `/api/lead` (envio, validação, anti-spam, integração EspoCRM)
- [ ] Testar `/api/collect` (webhook Collect.chat → Octadesk)
- [ ] Conferir cookies UTM/GCLID/FBCLID no navegador

## Observabilidade
- [ ] Conferir logs das rotas API no Vercel (Falhas/latência)
- [ ] Ativar alertas se necessário

## SEO e Performance
- [ ] Lighthouse/PageSpeed (Core Web Vitals)
- [ ] Conferir `<link rel="canonical">`, `robots.txt`, `sitemap.xml`
- [ ] Verificar metadados OpenGraph e Twitter Cards
- [ ] Testar página de listagem e detalhe do blog

## Pixels e Consentimento
- [ ] Configurar GTM/GA4 e Consent Mode (se aplicável)
- [ ] Verificar carregamento condicional de scripts de terceiros

## Build & Deploy
- [ ] `npm run lint && npm run typecheck`
- [ ] `npm run build && npm run postbuild-verify`
- [ ] Revisar logs de deploy no Vercel
