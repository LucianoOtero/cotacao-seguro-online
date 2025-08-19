import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Imediato Soluções em Seguros — CNPJ 04.718.602/0001-45
        </p>
        <nav aria-label="Rodapé">
          <ul className="flex gap-3">
            <li>
              <Link className="hover:underline" href="/politicas-de-privacidade">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a className="hover:underline" href="https://www.facebook.com/imediatoseguros" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:underline" href="https://g.page/r/Ce5mHtp78co1EAE" target="_blank" rel="noopener noreferrer" aria-label="Avaliações do Google">
                Avaliações Google
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}


