import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CreditCard, MessageCircle, Star, UserRound, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carts, getCart } from "@/lib/carts";
import { cartBookingMessage, whatsappUrl } from "@/lib/utils";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

export function generateStaticParams() {
  return carts.map((cart) => ({ slug: cart.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  return { title: cart ? `${cart.title.en} for Rent` : "Cart Details", description: cart?.features.map((item) => item.en).join(", ") };
}

export default async function CartDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  if (!cart) notFound();

  const related = carts.filter((item) => item.slug !== cart.slug).slice(0, 3);

  return (
    <main className="bg-[#F8F6F2] pt-0 md:pt-24">
      <section className="py-10">
        <div className="site-container grid gap-6 md:grid-cols-[1fr_360px]">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#fff7ed] p-8">
              <Image src={cart.image} alt={cart.title.en} fill priority className="object-contain p-8" />
              <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 p-4 text-ink shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  <Text en={`${cart.availability.en} — Coimbatore`} ta={`${cart.availability.ta} — கோவை`} />
                </p>
                <h1 className="mt-2 font-display text-5xl uppercase leading-none md:text-6xl">
                  <Text en={cart.title.en} ta={cart.title.ta} />
                </h1>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                <Text en="Daily price" ta="ஒரு நாள் வாடகை" />
              </p>
              <p className="mt-2 font-display text-6xl text-ink">{cart.dailyPrice}</p>
              <p className="mt-2 text-sm font-bold text-muted">
                <Text en="Deposit: ₹2,000 – ₹5,000 (refundable)" ta="Deposit: ₹2,000 – ₹5,000 திரும்ப கொடுத்துடுவோம்" />
              </p>
            </div>

            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Features" ta="வண்டி வசதிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {cart.features.map((feature) => (
                  <div key={feature.en} className="rounded-xl border border-black/10 bg-white p-4 text-sm font-bold text-muted">
                    <Zap className="mb-3 text-primary" size={18} /> <Text en={feature.en} ta={feature.ta} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Details" ta="விவரங்கள்" />
              </h2>
              <div className="mt-5 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                {Object.entries(cart.specs).map(([key, value]) => (
                  <div key={key} className="grid grid-cols-2 gap-4 p-4 text-sm">
                    <span className="font-bold text-ink">{key}</span>
                    <span className="text-muted">
                      <Text en={value.en} ta={value.ta} />
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Future-ready modules" ta="வரப்போகும் வசதிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  [CalendarDays, "Booking calendar", "Booking calendar"],
                  [CreditCard, "Payment gateway", "Payment gateway"],
                  [Star, "User reviews", "Review வசதி"],
                  [UserRound, "Vendor profile", "Vendor profile"]
                ].map(([Icon, label, tamil]) => (
                  <div key={label as string} className="rounded-xl border border-dashed border-black/20 bg-white p-4 text-sm font-bold text-muted">
                    <Icon className="mb-3 text-primary" size={18} /> <Text en={label as string} ta={tamil as string} />
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Related carts" ta="மற்ற வண்டிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link href={`/carts/${item.slug}`} key={item.slug} className="rounded-xl border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-premium">
                    <p className="font-bold text-ink">
                      <Text en={item.title.en} ta={item.title.ta} />
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      <Text en={item.location.en} ta={item.location.ta} /> | {item.dailyPrice}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <aside className="h-fit rounded-2xl border border-black/10 bg-white p-5 shadow-premium md:sticky md:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Text en="Booking inquiry" ta="Booking விசாரணை" />
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase text-ink">
              <Text en="Reserve this cart" ta="இந்த வண்டியை book பண்ணுங்க" />
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              <Text en="Confirm availability, rental period, location, delivery, and setup details on WhatsApp." ta="கிடைக்குமா, எத்தனை நாள், எந்த இடம், delivery எப்படி — எல்லாம் WhatsApp-ல clear பண்ணலாம்." />
            </p>
            <Button asChild size="lg" className="mt-6 w-full">
              <a href={whatsappUrl(cartBookingMessage(cart.title.en))} target="_blank">
                <MessageCircle size={18} /> <Text en="🛒 Book This Cart" ta="🛒 இந்த வண்டியை book பண்ணுங்க" />
              </a>
            </Button>
            <div className="mt-6 rounded-xl border border-dashed border-black/18 bg-[#F8F6F2] p-4 text-sm text-muted">
              <Text en="Live availability is confirmed on WhatsApp before booking." ta="Book பண்ணும் முன் availability WhatsApp-ல confirm பண்ணுவோம்." />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
