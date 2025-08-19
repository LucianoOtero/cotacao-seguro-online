import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="webflow-container">
        <div className="webflow-row items-center py-4">
          <div className="webflow-col webflow-col-6">
            <Link href="/" className="text-2xl font-bold text-brand-primary">
              Imediato Seguros
            </Link>
          </div>
          <div className="webflow-col webflow-col-6 text-right">
            <nav className="space-x-4">
              <Link href="/seguro-auto" className="text-neutral-600 hover:text-brand-primary">
                Auto
              </Link>
              <Link href="/seguro-motos" className="text-neutral-600 hover:text-brand-primary">
                Motos
              </Link>
              <Link href="/seguro-caminhao" className="text-neutral-600 hover:text-brand-primary">
                Caminhão
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
