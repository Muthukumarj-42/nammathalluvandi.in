import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F2] pt-28">
      <section className="mx-auto grid min-h-[75vh] max-w-[1200px] items-center gap-10 px-4 pb-20 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">About Thalluvandi</p>
          <h1 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">Serving Entrepreneurs Across Tamil Nadu</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Thalluvandi.in helps people begin food businesses with less risk, better presentation, and practical local support. It starts with premium cart rentals and grows toward a full street-business ecosystem.
          </p>
        </div>
        <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-premium">
          <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
          <Image src="/brand/full-logo-with-background.png" alt="Thalluvandi brand showcase" width={640} height={640} className="relative w-full drop-shadow-[0_0_48px_rgba(255,107,0,0.22)]" />
        </div>
      </section>
    </main>
  );
}
