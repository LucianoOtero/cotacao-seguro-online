import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Lista de parâmetros de marketing que queremos capturar
  const marketingParams = [
    'utm_source',
    'utm_medium', 
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
    'msclkid', // Microsoft Ads
    'ttclid',  // TikTok
  ];

  // Verifica se há parâmetros de marketing na URL
  const url = request.nextUrl;
  const hasMarketingParams = marketingParams.some(param => url.searchParams.has(param));

  if (hasMarketingParams) {
    // Configurações do cookie
    const cookieOptions = {
      maxAge: 60 * 60 * 24 * 90, // 90 dias em segundos
      httpOnly: false, // Permitir acesso via JavaScript no cliente
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
    };

    // Captura e armazena cada parâmetro em um cookie separado
    marketingParams.forEach(param => {
      const value = url.searchParams.get(param);
      if (value) {
        response.cookies.set(`marketing_${param}`, value, cookieOptions);
      }
    });

    // Armazena timestamp da primeira visita
    if (!request.cookies.get('marketing_first_visit')) {
      response.cookies.set('marketing_first_visit', new Date().toISOString(), cookieOptions);
    }

    // Armazena a página de entrada (landing page)
    if (!request.cookies.get('marketing_landing_page')) {
      response.cookies.set('marketing_landing_page', url.pathname + url.search, cookieOptions);
    }

    // Armazena o referer se disponível
    const referer = request.headers.get('referer');
    if (referer && !request.cookies.get('marketing_referer')) {
      response.cookies.set('marketing_referer', referer, cookieOptions);
    }
  }

  // Armazena a última visita
  response.cookies.set('marketing_last_visit', new Date().toISOString(), {
    maxAge: 60 * 60 * 24 * 90, // 90 dias
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
  });

  return response;
}

// Configurar em quais rotas o middleware deve executar
export const config = {
  matcher: [
    /*
     * Aplicar em todas as rotas exceto:
     * - api routes (que começam com /api/)
     * - arquivos estáticos (_next/static)
     * - arquivos de imagem, favicon, etc.
     * - sitemap.xml, robots.txt
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images|fonts|js|css).*)',
  ],
};