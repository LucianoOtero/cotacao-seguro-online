import Image from "next/image";

type HeroProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
};

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative isolate">
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt=""
          width={1600}
          height={800}
          className="w-full h-[320px] object-cover"
          priority
        />
      ) : (
        <div className="w-full h-[200px] bg-gradient-to-r from-blue-50 to-blue-100" aria-hidden />
      )}
      <div className="mx-auto max-w-6xl px-4 py-6 -mt-20">
        <div className="bg-white/90 backdrop-blur rounded p-6 shadow">
          <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
          {subtitle ? <p className="mt-2 text-gray-700">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  );
}


