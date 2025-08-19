# 🚀 Guia de Deploy - Seguros Imediato

## 1. Preparação para Deploy

### Verificar Build Local
```bash
npm run build
npm run start
```

### Testar Funcionalidades
- [ ] Formulários de lead funcionando
- [ ] Blog carregando posts
- [ ] Imagens carregando corretamente
- [ ] Menu responsivo funcionando
- [ ] WhatsApp button funcionando

## 2. Deploy na Vercel (Recomendado)

### Passo 1: Criar conta na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub/GitLab
3. Conecte seu repositório

### Passo 2: Configurar Projeto
1. Clique em "New Project"
2. Selecione o repositório do projeto
3. Configure as variáveis de ambiente:

```env
# Variáveis necessárias (criar em Vercel Dashboard)
NEXT_PUBLIC_SITE_URL=https://seudominio.com.br
NEXT_PUBLIC_WEBFLOW_API_TOKEN=seu_token_aqui
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
WEBHOOK_SECRET=seu_secret_aqui
```

### Passo 3: Build Settings
- **Framework Preset**: Next.js
- **Root Directory**: `cotacao-seguro-online`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

## 3. Configuração de Domínio

### Na Vercel:
1. Vá em Project Settings > Domains
2. Adicione seu domínio personalizado
3. Configure os DNS records:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

### No seu provedor de DNS:
- Aponte o domínio para os servidores da Vercel
- Configure SSL (automático na Vercel)

## 4. Variáveis de Ambiente

### Variáveis Obrigatórias:
```env
NEXT_PUBLIC_SITE_URL=https://cotacaoseguroonline.com.br
NEXT_PUBLIC_WEBFLOW_API_TOKEN=seu_token_webflow
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
WEBHOOK_SECRET=senha_segura_para_webhooks
```

### Variáveis Opcionais:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=xxxxxxxxxx
NEXT_PUBLIC_HOTJAR_ID=xxxxxxx
```

## 5. Pós-Deploy

### Verificações Essenciais:
- [ ] Site carregando corretamente
- [ ] Formulários enviando leads
- [ ] Blog funcionando
- [ ] Imagens otimizadas
- [ ] Performance > 90 (PageSpeed Insights)
- [ ] SEO configurado
- [ ] Analytics funcionando

### Monitoramento:
- Configure alertas na Vercel
- Monitore logs de erro
- Acompanhe métricas de performance

## 6. Backup e Rollback

### Git Tags:
```bash
git tag -a v1.0.0 -m "Primeira versão em produção"
git push origin v1.0.0
```

### Rollback na Vercel:
1. Vá em Deployments
2. Selecione versão anterior
3. Clique em "Promote to Production"

## 7. Próximos Passos

1. **Analytics**: Configurar GA4 + GTM
2. **Monitoring**: Sentry para logs de erro
3. **Performance**: Otimizar imagens com Next/Image
4. **SEO**: Submit sitemap no Google Search Console
5. **Security**: Configurar headers de segurança
6. **Backup**: Automatizar backup do conteúdo

---

## 📞 Suporte

Em caso de problemas:
1. Verificar logs na Vercel Dashboard
2. Testar build local primeiro
3. Verificar variáveis de ambiente
4. Consultar documentação Next.js/Vercel
