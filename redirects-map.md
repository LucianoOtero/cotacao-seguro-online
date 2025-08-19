# Redirects 301 (Webflow → Next.js)

Preencha a tabela abaixo com os redirecionamentos necessários. As regras principais devem ser adicionadas em `next.config.ts` (função `async redirects()`), ou no arquivo `redirects.config.json` na raiz do projeto.

| Antigo (Webflow)                | Novo (Next.js)            | Observações                     |
|--------------------------------|---------------------------|---------------------------------|
| /artigos/:slug                 | /blog/:slug               | Mapeado no `next.config.ts`     |
| /index.html                    | /                         |                                 |
| /seguro-auto.html              | /seguro-auto              |                                 |
| /seguro-motos.html             | /seguro-motos             |                                 |
| /seguro-uber.html              | /seguro-uber              |                                 |
| /seguro-taxi.html              | /seguro-taxi              |                                 |
| /seguro-utilitario.html        | /seguro-utilitario        |                                 |
| /seguro-caminhao.html          | /seguro-caminhao          |                                 |
| /seguro-de-vida.html           | /seguro-de-vida           |                                 |
| /reputacao.html                | /reputacao                |                                 |
| /politicas-de-privacidade.html | /politicas-de-privacidade |                                 |

Observação: você também pode usar `redirects.config.json` para manter os mapeamentos fora do código. O `next.config.ts` já lê esse arquivo se existir.
