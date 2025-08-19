type CTAProps = {
  title: string;
  subtitle?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTA({ title, subtitle, primary, secondary }: CTAProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">{title}</h2>
        {subtitle ? <p className="mt-1 text-gray-700">{subtitle}</p> : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {primary ? (
            <a
              href={primary.href}
              className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {primary.label}
            </a>
          ) : null}
          {secondary ? (
            <a
              href={secondary.href}
              className="inline-flex items-center justify-center rounded border px-4 py-2 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              {secondary.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}


