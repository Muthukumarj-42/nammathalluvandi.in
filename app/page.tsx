import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, MessageCircle, PanelsTopLeft, PhoneCall, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { Reveal } from "@/components/sections/reveal";
import { rentalTamilMessage, whatsappUrl } from "@/lib/utils";

const featureCards = [
  ["60+ Food Carts", "A growing rental fleet for different street food businesses.", ShoppingCart],
  ["Same-Day Booking", "Fast WhatsApp-first inquiry for urgent business starts.", CalendarCheck],
  ["Multiple Variants", "With stove, without stove, top cover, premium and compact options.", PanelsTopLeft],
  ["WhatsApp Support", "Clear local support from first inquiry to confirmation.", PhoneCall]
];

const faqs = [
  ["Deposit amount?", "Deposit depends on cart type, rental period, and delivery location. The team confirms it on WhatsApp."],
  ["Delivery area?", "Thalluvandi is expanding across Tamil Nadu with availability confirmed case by case."],
  ["Stove gas included?", "Stove-ready carts are available. Gas cylinder inclusion is confirmed during booking."],
  ["Damage policy?", "Damage is checked during return and adjusted against the deposit if needed."],
  ["Minimum rental period?", "Minimum rental period depends on cart type and current availability."],
  ["Payment methods?", "Cash and UPI deposit flows are supported during confirmation."]
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thalluvandi.in",
    url: "https://thalluvandi.in",
    areaServed: "Tamil Nadu",
    description: "Premium food cart rental and future marketplace platform for entrepreneurs across Tamil Nadu.",
    sameAs: ["https://thalluvandi.in"],
    makesOffer: {
      "@type": "Offer",
      itemOffered: "Food cart rental",
      priceCurrency: "INR"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative min-h-[92vh] overflow-hidden bg-ink pt-20 text-white md:min-h-screen">
        <div className="absolute inset-0 editorial-grid opacity-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,107,0,0.28),transparent_30%),radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.1),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(13,13,13,0.98),rgba(13,13,13,0.82)_48%,rgba(13,13,13,0.95))]" />

        <div className="relative mx-auto grid min-h-[calc(92vh-80px)] max-w-[1440px] items-center gap-8 px-4 py-10 md:min-h-[calc(100vh-80px)] md:grid-cols-[1.02fr_0.98fr] md:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Food carts | Rent | Grow</p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl">
              START YOUR FOOD BUSINESS WITHOUT HEAVY INVESTMENT
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/74 md:text-lg md:leading-8">
              Premium food cart rentals and future marketplace platform for entrepreneurs across Tamil Nadu.
            </p>
            <div className="mt-8 grid gap-3 sm:flex">
              <Button asChild size="lg">
                <Link href="/explore">Explore Carts <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/45 text-white">
                <a href={whatsappUrl(rentalTamilMessage)} target="_blank">
                  <MessageCircle size={18} /> Book on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" />
            <Image
              src="/brand/full-logo-with-background.png"
              alt="Thalluvandi premium logo"
              width={720}
              height={720}
              priority
              className="relative mx-auto w-full max-w-[580px] drop-shadow-[0_0_54px_rgba(255,107,0,0.34)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/10 bg-white py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap px-4 font-display text-3xl uppercase tracking-wide text-ink">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex gap-8">
              {["WITH STOVE", "WITHOUT STOVE", "WITH TOP", "PREMIUM CARTS", "SAME DAY BOOKING", "EXPANDING ACROSS TAMIL NADU"].map((item) => (
                <span key={`${loop}-${item}`} className="flex items-center gap-8">
                  {item} <span className="text-primary">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Serving Entrepreneurs Across Tamil Nadu</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">Premium rental infrastructure, simple enough to start today</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {featureCards.map(([title, copy, Icon], index) => (
              <Reveal key={title as string} className="group relative rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-premium">
                <Icon className="text-primary" size={30} />
                <h3 className="mt-6 font-display text-4xl uppercase leading-none text-ink">{title as string}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">{copy as string}</p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CartExplorer compact />

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Buy Option Teaser</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">Want to own one?</h2>
            <p className="mt-5 text-lg leading-8 text-muted">Order-to-buy launching soon — 2–3 week delivery.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Custom size", "Brand colors", "Business-ready build"].map((item) => (
              <div key={item} className="rounded-xl border border-black/10 bg-[#F8F6F2] p-5">
                <Sparkles className="text-primary" />
                <p className="mt-5 font-bold text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">Rental questions</h2>
          <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group p-5 open:bg-[#F8F6F2]">
                <summary className="cursor-pointer list-none font-bold text-ink">{question}</summary>
                <p className="mt-3 text-sm leading-7 text-muted">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
