import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CreditCard, MessageCircle, Star, UserRound, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carts, getCart } from "@/lib/carts";
import { rentalTamilMessage, whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return carts.map((cart) => ({ slug: cart.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  return { title: cart ? `${cart.title} for Rent` : "Cart Details", description: cart?.features.join(", ") };
}

export default async function CartDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  if (!cart) notFound();

  const related = carts.filter((item) => item.slug !== cart.slug).slice(0, 3);

  return (
    <main className="bg-[#F8F6F2] pt-24">
      <section className="mx-auto grid max-w-[1200px] gap-8 px-4 py-10 md:grid-cols-[1fr_360px] md:px-8">
        <div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
            <Image src={cart.image} alt={cart.title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/64 to-transparent" />
            <Image src="/brand/text-logo.png" alt="" width={150} height={56} className="absolute right-5 top-5 h-10 w-auto rounded bg-white/80 p-2" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{cart.location} | {cart.availability}</p>
              <h1 className="mt-2 font-display text-6xl uppercase leading-none">{cart.title}</h1>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">Daily price range</p>
            <p className="mt-2 font-display text-6xl text-ink">{cart.dailyPrice}</p>
          </div>

          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase text-ink">Feature breakdown</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {cart.features.map((feature) => (
                <div key={feature} className="rounded-xl border border-black/10 bg-white p-4 text-sm font-bold text-muted">
                  <Zap className="mb-3 text-primary" size={18} /> {feature}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase text-ink">Specifications</h2>
            <div className="mt-5 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
              {Object.entries(cart.specs).map(([key, value]) => (
                <div key={key} className="grid grid-cols-2 p-4 text-sm">
                  <span className="font-bold text-ink">{key}</span>
                  <span className="text-muted">{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase text-ink">Future-ready modules</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {[
                [CalendarDays, "Booking calendar"],
                [CreditCard, "Payment gateway"],
                [Star, "User reviews"],
                [UserRound, "Vendor profile"]
              ].map(([Icon, label]) => (
                <div key={label as string} className="rounded-xl border border-dashed border-black/20 bg-white p-4 text-sm font-bold text-muted">
                  <Icon className="mb-3 text-primary" size={18} /> {label as string}
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-display text-4xl uppercase text-ink">Related carts</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link href={`/carts/${item.slug}`} key={item.slug} className="rounded-xl border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-premium">
                  <p className="font-bold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm text-muted">{item.location} | {item.dailyPrice}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-black/10 bg-white p-5 shadow-premium md:sticky md:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Booking inquiry</p>
          <h2 className="mt-3 font-display text-4xl uppercase text-ink">Reserve this cart</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Confirm availability, rental period, location, delivery, and setup details on WhatsApp.</p>
          <Button asChild size="lg" className="mt-6 w-full">
            <a href={whatsappUrl(`${rentalTamilMessage}\n\nதேவைப்படும் வண்டி வகை: ${cart.title}`)} target="_blank">
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
          </Button>
          <div className="mt-6 rounded-xl border border-dashed border-black/18 bg-[#F8F6F2] p-4 text-sm text-muted">
            Live availability, payment gateway, and booking calendar are reserved for backend integration.
          </div>
        </aside>
      </section>
    </main>
  );
}
