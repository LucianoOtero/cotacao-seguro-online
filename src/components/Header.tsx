"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const nav = [
    { href: "/", label: "Início" },
    { href: "/seguro-auto", label: "Auto" },
    { href: "/seguro-motos", label: "Motos" },
    { href: "/seguro-uber", label: "Uber" },
    { href: "/seguro-caminhao", label: "Caminhão" },
    { href: "/seguro-de-vida", label: "Vida" },
    { href: "/reputacao", label: "Reputação" },
  ];

  return (
    <header className="w-full border-b border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Imediato Seguros">
          <Image src="/vercel.svg" alt="Logo" width={28} height={28} />
          <span className="font-semibold">Imediato Seguros</span>
        </Link>
        <nav aria-label="Principal" className="ml-auto">
          <ul className="flex gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                    pathname === item.href ? "text-blue-700" : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}


