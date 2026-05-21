import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, MessageCircle, PanelsTopLeft, PhoneCall, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { Reveal } from "@/components/sections/reveal";
import { rentalTamilMessage, whatsappUrl } from "@/lib/utils";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const stats = [
  ["60+ Carts", "60+ வண்டிகள்"],
  ["Coimbatore", "கோவை"],
  ["4 Types", "4 வகைகள்"],
  ["Same-Day Booking", "அன்றே புக்கிங்"]
];

const marquee = [
  ["HAS STOVE", "அடுப்பு வண்டி"],
  ["NO STOVE", "அடுப்பு இல்லாத வண்டி"],
  ["HAS ROOF", "மேல் கவர் வண்டி"],
  ["PREMIUM CARTS", "பிரீமியம் வண்டி"],
  ["SAME DAY BOOKING", "அன்றே புக்கிங்"],
  ["EXPANDING ACROSS TAMIL NADU", "தமிழ்நாடு முழுக்க விரைவில்"]
];

const featureCards = [
  [ShoppingCart, "Large cart fleet", "பெரிய வண்டி fleet", "60+ carts ready for tea, snacks, juice, and fast food businesses.", "60-க்கும் மேல் வண்டிகள் தயாரா இருக்கு"],
  [PanelsTopLeft, "Multiple Variants", "பல வகை வண்டிகள்", "Stove carts, covered carts, compact carts, and premium options.", "அடுப்பு வண்டி, மேல் கவர் வண்டி — உங்களுக்கு எது வேணும்னாலும்"],
  [PhoneCall, "WhatsApp Booking", "WhatsApp புக்கிங்", "Send one WhatsApp message and we will guide the booking.", "WhatsApp-ல ஒரு message அனுப்புங்க — வண்டி ready"],
  [CalendarCheck, "Trusted by Vendors", "வியாபாரிகள் நம்பிக்கை", "Local support trusted by vendors starting small food businesses.", "கோவையில் நூறுக்கும் மேல் வியாபாரிகள் நம்பி பயன்படுத்துறாங்க"]
];

const faqs = [
  ["Deposit amount?", "Deposit எவ்வளவு?", "Refundable security deposit is ₹2,000 – ₹5,000 depending on the cart type and rental duration. Confirmed on WhatsApp before booking.", "வண்டி வகையைப் பொறுத்து ₹2,000 – ₹5,000 deposit வாங்குவோம். திரும்ப கொடுத்துடுவோம்."],
  ["Delivery area?", "எங்கெல்லாம் கிடைக்கும்?", "Carts are available in Coimbatore. We will confirm your exact spot on WhatsApp.", "இப்போ கோவை முழுக்க service இருக்கு. உங்கள் area சொல்லுங்க, WhatsApp-ல confirm பண்ணிடுவோம்."],
  ["What is the commission if I list my cart on Thalluvandi?", "என் வண்டி list பண்ணினா commission என்ன?", "Thalluvandi charges a small platform fee when your cart gets booked through us. The exact percentage is discussed before listing.", "உங்கள் வண்டியை எங்கள் platform-ல list பண்ணினா, booking வரும்போது ஒரு சிறிய தொகை மட்டும் எடுப்போம். WhatsApp-ல பேசி decide பண்ணலாம்."],
  ["Damage policy?", "Damage ஆனா என்ன?", "Damage is checked during return. If needed, it is adjusted from the deposit.", "வண்டியை திரும்ப கொடுக்கும்போது சரிபார்ப்போம். damage இருந்தா deposit-ல இருந்து கழிப்போம்."],
  ["Minimum rental period?", "குறைந்தது எத்தனை நாள்?", "You can rent from one day. Longer rentals may get a better rate.", "குறைந்தது ஒரு நாள் முதல் வாடகைக்கு எடுக்கலாம். நீண்ட நாள் எடுத்தால் rate குறையும்."],
  ["Payment methods?", "Payment எப்படி?", "Cash and UPI are supported. Final payment details are confirmed before booking.", "Cash அல்லது UPI — இரண்டும் ஓகே. Deposit confirm ஆனதும் வண்டி ready."]
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thalluvandi.in",
    url: "https://thalluvandi.in",
    areaServed: "Coimbatore",
    description: "Food cart rental platform for entrepreneurs in Coimbatore.",
    sameAs: ["https://thalluvandi.in"],
    makesOffer: { "@type": "Offer", itemOffered: "Food cart rental", priceCurrency: "INR" }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden bg-[#fffdf7] py-14 text-ink md:py-24">
        <div className="absolute inset-0 editorial-grid opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,107,0,0.18),transparent_30%),linear-gradient(105deg,rgba(255,253,247,0.96),rgba(255,247,237,0.86)_48%,rgba(255,253,247,0.96))]" />

        <div className="site-container relative grid min-h-[78vh] items-center gap-8 md:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              <Text en="Food carts | Rent | Grow" ta="வண்டி வாடகை | தொழில் தொடக்கம் | வளர்ச்சி" />
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl">
              <Text en="START YOUR FOOD BUSINESS WITHOUT HEAVY INVESTMENT" ta="உங்கள் தொழில் இனி தொடங்கட்டும் — வண்டி நாங்க தருவோம்!" />
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted md:mx-0 md:text-lg md:leading-8">
              <Text en="Start your food business in Coimbatore without heavy investment." ta="அதிக முதலீடு இல்லாம, கோவையில் உங்கள் உணவு வியாபாரம் ஆரம்பிங்க." />
            </p>
            <div className="mt-8 grid gap-3 sm:flex md:justify-start">
              <Button asChild size="lg">
                <Link href="/explore">
                  <Text en="Explore Carts" ta="🔍 வண்டிகளை பாருங்க" /> <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/45 text-ink">
                <a href={whatsappUrl(rentalTamilMessage)} target="_blank">
                  <MessageCircle size={18} /> <Text en="💬 Chat on WhatsApp" ta="💬 WhatsApp-ல பேசலாம்" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="relative">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
            <Image src="/brand/full-logo-with-background.png" alt="Thalluvandi premium logo" width={720} height={720} priority className="relative mx-auto w-full max-w-[520px] drop-shadow-[0_0_40px_rgba(255,107,0,0.2)]" />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white">
        <div className="site-container grid grid-cols-2 md:grid-cols-4">
          {stats.map(([en, ta], index) => (
            <div key={en} className="border-black/10 px-4 py-5 text-center md:border-l first:md:border-l-0 odd:max-md:border-r max-md:border-b">
              <p className="font-display text-4xl uppercase leading-none text-ink">
                <Text en={en} ta={ta} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-b border-black/10 bg-white py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap px-4 font-display text-3xl uppercase tracking-wide text-ink">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex gap-8">
              {marquee.map(([en, ta]) => (
                <span key={`${loop}-${en}`} className="flex items-center gap-8">
                  <Text en={en} ta={ta} /> <span className="text-primary">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl max-md:text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="Why Us" ta="ஏன் Thalluvandi?" />
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
              <Text en="Simple rental support to start today" ta="இன்றே தொழில் தொடங்க நாங்க கூட இருக்கோம்" />
            </h2>
          </div>
          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {featureCards.map(([Icon, title, tamilTitle, copy, tamilCopy]) => (
              <Reveal key={title as string} className="group relative flex h-full flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <Icon className="text-primary" size={30} />
                <h3 className="mt-6 font-display text-4xl uppercase leading-none text-ink">
                  <Text en={title as string} ta={tamilTitle as string} />
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  <Text en={copy as string} ta={tamilCopy as string} />
                </p>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CartExplorer compact />

      <section className="py-16 md:py-24">
        <div className="site-container">
          <div className="grid gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:grid-cols-[0.95fr_1.05fr] md:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Text en="Buy Option Teaser" ta="வாங்கும் வசதி விரைவில்" />
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
                <Text en="Want to own one?" ta="உங்களுக்கே ஒரு வண்டி வேணுமா?" />
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                <Text en="Order-to-buy launching soon — 2–3 week delivery." ta="உங்கள் business-க்கு ஏற்ற மாதிரி வண்டி build பண்ணி தரும் சேவை விரைவில்." />
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["Custom size", "உங்களுக்கு வேண்டிய size"],
                ["Brand colors", "உங்கள் brand color"],
                ["Business-ready build", "தொழிலுக்கு ready build"]
              ].map(([en, ta]) => (
                <div key={en} className="rounded-xl border border-black/10 bg-[#F8F6F2] p-5">
                  <Sparkles className="text-primary" />
                  <p className="mt-5 font-bold text-ink">
                    <Text en={en} ta={ta} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="site-container max-w-[1000px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
            <Text en="Rental questions" ta="வாடகை பற்றி கேள்விகள்" />
          </h2>
          <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {faqs.map(([question, tamilQuestion, answer, tamilAnswer]) => (
              <details key={question} className="group p-6 open:bg-[#F8F6F2]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  <span>
                    <Text en={question} ta={tamilQuestion} />
                  </span>
                  <span className="text-xl text-primary group-open:hidden">+</span>
                  <span className="hidden text-xl text-primary group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-[0.95rem] leading-7 text-muted">
                  <Text en={answer} ta={tamilAnswer} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
