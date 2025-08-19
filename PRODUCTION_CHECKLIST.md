# ✅ Checklist de Produção - Seguros Imediato

## 🔧 Preparação Técnica

### Build e Testes Locais
- [ ] `npm run check` - Verificar configuração
- [ ] `npm run pre-deploy` - Verificação pré-deploy
- [ ] `npm run build` - Build de produção sem erros
- [ ] `npm run start` - Testar build localmente
- [ ] Testar todas as páginas principais
- [ ] Testar formulários de lead
- [ ] Verificar responsividade (mobile/desktop)

### Configuração de Ambiente
- [ ] Criar arquivo `.env.local` baseado em `env.example`
- [ ] Configurar `NEXT_PUBLIC_SITE_URL`
- [ ] Configurar Google Analytics/GTM (se aplicável)
- [ ] Configurar tokens de API necessários

## 🚀 Deploy

### Plataforma (Vercel Recomendada)
- [ ] Criar conta na Vercel
- [ ] Conectar repositório GitHub
- [ ] Configurar variáveis de ambiente
- [ ] Fazer primeiro deploy
- [ ] Verificar se build passou sem erros

### Domínio
- [ ] Configurar domínio personalizado
- [ ] Configurar DNS records
- [ ] Verificar SSL (HTTPS)
- [ ] Testar redirecionamentos

## 🧪 Testes Pós-Deploy

### Funcionalidade
- [ ] Homepage carregando corretamente
- [ ] Menu de navegação funcionando
- [ ] Formulários enviando dados
- [ ] Blog carregando posts
- [ ] Imagens otimizadas carregando
- [ ] WhatsApp button funcionando
- [ ] Telefones clicáveis funcionando

### Performance
- [ ] Google PageSpeed Insights > 85
- [ ] Core Web Vitals aprovados
- [ ] Imagens otimizadas
- [ ] Fontes carregando corretamente

### SEO
- [ ] Meta tags configuradas
- [ ] Sitemap acessível (/sitemap.xml)
- [ ] Robots.txt configurado (/robots.txt)
- [ ] Structured data (JSON-LD)
- [ ] Open Graph tags
- [ ] Canonical URLs

## 📊 Analytics e Monitoramento

### Google Analytics
- [ ] GA4 configurado e funcionando
- [ ] Goals/Conversões configurados
- [ ] Enhanced Ecommerce (se aplicável)
- [ ] Eventos de formulário rastreados

### Google Tag Manager
- [ ] Container GTM configurado
- [ ] Tags de conversão configuradas
- [ ] Triggers testados
- [ ] Variables configuradas

### Search Console
- [ ] Propriedade adicionada
- [ ] Sitemap submetido
- [ ] Verificar indexação
- [ ] Configurar alertas

## 🔒 Segurança

### Headers de Segurança
- [ ] Content Security Policy
- [ ] X-Frame-Options
- [ ] X-Content-Type-Options
- [ ] Referrer-Policy

### HTTPS
- [ ] Certificado SSL válido
- [ ] Redirecionamento HTTP → HTTPS
- [ ] HSTS configurado

## 📱 Mobile e Acessibilidade

### Responsividade
- [ ] Testar em diferentes dispositivos
- [ ] Menu mobile funcionando
- [ ] Formulários mobile-friendly
- [ ] Botões com tamanho adequado

### Acessibilidade
- [ ] Contraste adequado
- [ ] Alt text em imagens
- [ ] Navegação por teclado
- [ ] Screen reader friendly

## 📈 Go-Live

### Pré-Lançamento
- [ ] Backup do site atual (se existir)
- [ ] Plano de rollback definido
- [ ] Horário de menor tráfego escolhido
- [ ] Stakeholders notificados

### Lançamento
- [ ] DNS apontado para novo site
- [ ] Monitorar logs por 2 horas
- [ ] Verificar formulários funcionando
- [ ] Confirmar analytics funcionando
- [ ] Testar em diferentes browsers

### Pós-Lançamento
- [ ] Monitorar métricas por 24h
- [ ] Verificar leads chegando
- [ ] Acompanhar performance
- [ ] Documentar problemas encontrados

## 🔄 Manutenção Contínua

### Semanal
- [ ] Verificar uptime
- [ ] Revisar logs de erro
- [ ] Verificar performance
- [ ] Backup de conteúdo

### Mensal
- [ ] Atualizar dependências
- [ ] Revisar analytics
- [ ] Otimizar imagens novas
- [ ] Verificar SEO rankings

---

## 📞 Contatos de Emergência

**Desenvolvedor**: [Seu contato]
**Hosting**: Vercel Support
**Domínio**: [Provedor DNS]
**Analytics**: Google Analytics Support

## 🆘 Troubleshooting

### Site não carregando
1. Verificar status da Vercel
2. Verificar DNS records
3. Verificar certificado SSL
4. Verificar logs de build

### Formulários não funcionando
1. Verificar API endpoints
2. Verificar variáveis de ambiente
3. Verificar logs de erro
4. Testar em ambiente local

### Performance baixa
1. Verificar Core Web Vitals
2. Otimizar imagens grandes
3. Verificar JavaScript desnecessário
4. Verificar cache headers
