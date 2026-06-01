import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarCheck,
  MessageCircle,
  PanelsTopLeft,
  PhoneCall,
  ShoppingCart,
  Sparkles,
  PenTool,
  Wrench,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { Reveal } from "@/components/sections/reveal";
import { rentalTamilMessage } from "@/lib/utils";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";
import { CartCounter } from "@/components/sections/cart-counter";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta tamil-text">{ta}</span>
    </>
  );
}

const stats: any[] = [];

const marquee = [
  ["66+ Carts", "66+ வண்டிகள்"],
  ["Coimbatore", "கோவை"],
  ["PREMIUM CARTS", "பிரீமியம் வண்டி"],
  ["SAME DAY BOOKING", "அன்றே புக்கிங்"],
  ["EXPANDING ACROSS TAMIL NADU", "தமிழ்நாடு முழுக்க விரைவில்"],
];

const featureCards = [
  [
    ShoppingCart,
    "Large cart fleet",
    "வண்டிகளின் பெரிய தொகுப்பு",
    "66+ carts ready for tea, snacks, juice, and fast food businesses.",
    "66-க்கும் மேல் வண்டிகள் தயாராக உள்ளது",
  ],
  [
    PanelsTopLeft,
    "Multiple Variants",
    "பல வகை வண்டிகள்",
    "Stove carts, covered carts, compact carts, and premium options.",
    "அடுப்பு வண்டி, மேல் கவர் வண்டி — உங்களுக்கு எது வேண்டுமானாலும்",
  ],
  [
    PhoneCall,
    "WhatsApp Booking",
    "WhatsApp புக்கிங்",
    "Send one WhatsApp message and we will guide the booking.",
    "வாட்ஸ்அப்பில் ஒரு மெசேஜ் அனுப்புங்கள் — வண்டி தயாராகிவிடும்",
  ],
  [
    CalendarCheck,
    "Trusted by Vendors",
    "வியாபாரிகள் நம்பிக்கை",
    "Local support trusted by vendors starting small food businesses.",
    "கோவையில் நூறுக்கும் மேற்பட்ட வியாபாரிகள் நம்பி பயன்படுத்துகிறார்கள்",
  ],
];

const faqs = [
  [
    "Deposit amount?",
    "Deposit எவ்வளவு?",
    "Refundable security deposit is ₹2,000 – ₹5,000 depending on the cart type and rental duration. Confirmed on WhatsApp before booking.",
    "வண்டி வகையைப் பொறுத்து ₹2,000 – ₹5,000 முன்பணம் வாங்குவோம். வண்டியைத் திரும்பக் கொடுக்கும் போது இது முழுமையாகத் திருப்பித் தரப்படும்.",
  ],
  [
    "Delivery area?",
    "எங்கெல்லாம் கிடைக்கும்?",
    "Carts are available in Coimbatore. We will confirm your exact spot on WhatsApp.",
    "இப்போது கோவை மாவட்டங்களில் சேவை உள்ளது. உங்கள் இடத்தை வாட்ஸ்அப்பில் பகிருங்கள், முன்பதிவு செய்வோம்.",
  ],
  [
    "What is the commission if I list my cart on Thalluvandi?",
    "என் வண்டி list பண்ணினா commission என்ன?",
    "Thalluvandi charges a small platform fee when your cart gets booked through us. The exact percentage is discussed before listing.",
    "உங்கள் வண்டியை எங்கள் தளத்தில் பதிவு செய்து வாடிக்கையாளர்கள் புக் செய்யும் போது மட்டுமே ஒரு சிறிய கட்டணம் வசூலிப்போம். இதை தெளிவாகப் பேசிக்கொள்ளலாம்.",
  ],
  [
    "Damage policy?",
    "Damage ஆனா என்ன?",
    "Damage is checked during return. If needed, it is adjusted from the deposit.",
    "வண்டியைத் திரும்பக் கொடுக்கும் போது சரிபார்ப்போம். ஏதேனும் சேதம் இருந்தால் முன்பணத்திலிருந்து கழிக்கப்படும்.",
  ],
  [
    "Minimum rental period?",
    "குறைந்தது எத்தனை நாள்?",
    "You can rent from one day. Longer rentals may get a better rate.",
    "குறைந்தது ஒரு நாள் முதல் வாடகைக்கு எடுக்கலாம். நீண்ட நாட்கள் எடுக்கும் போது சலுகை விலை வழங்கப்படும்.",
  ],
  [
    "Payment methods?",
    "Payment எப்படி?",
    "Cash and UPI are supported. Final payment details are confirmed before booking.",
    "UPI அல்லது ரொக்கப் பணம் (Cash) — இரண்டிலும் செலுத்தலாம். முன்பணம் செலுத்தியதும் வண்டி டெலிவரிக்கு தயாராகும்.",
  ],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thalluvandi",
    alternateName: ["Thallu Vandi", "தளவண்டி", "Thalluvandi Rental"],
    description:
      "Premium food cart rentals in Coimbatore. 66+ carts with stove, roof cover, and premium variants. Serving Coimbatore with WhatsApp-first booking.",
    url: "https://thethalluvandi.in",
    telephone: "+918838292849",
    email: "hello@thalluvandi.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641016",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 11.0168,
      longitude: 76.9558,
    },
    openingHours: "Mo-Sa 08:00-20:00",
    priceRange: "₹100-₹200 per day",
    areaServed: [
      "Coimbatore",
      "Salem",
      "Erode",
      "Madurai",
      "Chennai",
      "Trichy",
      "Tamil Nadu",
    ],
    serviceType: "Food Cart Rental",
    hasMap: "https://maps.app.goo.gl/udfX5YSDCpLHArc49",
    sameAs: ["https://thalluvandi.vercel.app"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fffdf7] py-14 text-ink md:py-24">
        <div className="absolute inset-0 editorial-grid opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_36%,rgba(255,107,0,0.18),transparent_30%),linear-gradient(105deg,rgba(255,253,247,0.96),rgba(255,247,237,0.86)_48%,rgba(255,253,247,0.96))]" />

        <div className="site-container relative grid min-h-[78vh] items-center gap-8 md:grid-cols-[1.02fr_0.98fr]">
          <Reveal className="text-center md:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
              <Text
                en="Food carts | Rent | Grow"
                ta="வண்டி வாடகை | தொழில் தொடக்கம் | வளர்ச்சி"
              />
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-5xl uppercase leading-none md:text-7xl lg:text-8xl">
              <Text
                en="Food Cart Rentals in Coimbatore | Thalluvandi"
                ta="உங்கள் தொழில் இனி தொடங்கட்டும் — வாடகை வண்டி நாங்க தருவோம்!"
              />
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-muted md:mx-0 md:text-lg md:leading-8">
              <Text
                en="Start your food business in Coimbatore without heavy investment."
                ta="அதிக முதலீடு இல்லாமல், கோவையில் உங்கள் தொழில் ஆரம்பியுங்கள்."
              />
            </p>
            <div className="mt-8 grid gap-3 sm:flex md:justify-start">
              <Button asChild size="lg">
                <Link href="/explore">
                  <Text en="Explore Carts" ta="🔍 வண்டிகளை பாருங்க" />{" "}
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/45 text-ink cursor-pointer"
              >
                <a
                  href={buildWAUrl(WA_NUMBER, rentalTamilMessage)}
                  target="_blank"
                >
                  <MessageCircle size={18} />{" "}
                  <Text en="💬 Chat on WhatsApp" ta="💬 WhatsApp-ல பேசலாம்" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal className="relative hidden md:block">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
            <Image
              src="/brand/full-logo-with-background.png"
              alt="Thalluvandi food cart rentals Coimbatore Tamil Nadu"
              width={720}
              height={720}
              priority
              className="relative mx-auto w-full max-w-[520px] drop-shadow-[0_0_40px_rgba(255,107,0,0.2)]"
            />
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-black/10 bg-white">
        <h2 className="sr-only">Service Areas</h2>
        <div className="site-container grid grid-cols-2 md:grid-cols-4">
          {stats.map(([en, ta], index) => (
            <div
              key={en}
              className="border-black/10 px-4 py-5 text-center md:border-l first:md:border-l-0 odd:max-md:border-r max-md:border-b"
            >
              <p className="font-display text-4xl uppercase leading-none text-ink">
                {index === 0 ? <CartCounter /> : <Text en={en} ta={ta} />}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee ticker */}
      <section className="overflow-hidden border-b border-black/10 bg-white py-4">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-8 whitespace-nowrap px-4 font-display text-3xl uppercase tracking-wide text-ink">
          {Array.from({ length: 2 }).map((_, loop) => (
            <span key={loop} className="flex gap-8">
              {marquee.map(([en, ta]) => (
                <span key={`${loop}-${en}`} className="flex items-center gap-8">
                  <Text en={en} ta={ta} />{" "}
                  <span className="text-primary">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 md:py-24">
        <div className="site-container">
          <div className="max-w-2xl max-md:text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="Why Us" ta="ஏன் Thalluvandi?" />
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
              <Text
                en="Why Choose Thalluvandi"
                ta="இன்றே தொழில் தொடங்க நாங்க கூட இருக்கோம்"
              />
            </h2>
          </div>
          <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {featureCards.map(([Icon, title, tamilTitle, copy, tamilCopy]) => (
              <Reveal
                key={title as string}
                className="group relative flex h-full flex-col rounded-xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium overflow-hidden"
              >
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

      {/* Catalog Explorer component */}
      <section>
        <h2 className="sr-only">Our Cart Variants</h2>
        <CartExplorer compact />
      </section>

      {/* Redesigned BUY OPTION TEASER SECTION (CHANGE 11) */}
      <section className="py-12 md:py-16 bg-white border-t border-black/10">
        <div className="site-container max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-[0.4fr_0.6fr]">
            {/* Left Column (40%) */}
            <div className="flex flex-col gap-4 justify-between h-auto">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] font-semibold">
                  <span className="en">CUSTOM MANUFACTURING</span>
                  <span className="ta tamil-text">தனிப்பயன் தயாரிப்பு</span>
                </p>
                <h2 className="font-display text-4xl uppercase leading-none text-ink md:text-5xl">
                  <span className="en">CUSTOMIZE YOUR CART & OWN IT</span>
                  <span className="ta tamil-text">
                    உங்களுக்கே ஒரு வண்டி — நீங்களே வடிவமையுங்கள்!
                  </span>
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  <span className="en">
                    Build your own customized food cart based on your business
                    needs. Delivery in 2–4 weeks.
                  </span>
                  <span className="ta tamil-text">
                    உங்கள் தேவைக்கேற்ப தனிப்பட்ட உணவு வண்டி. 2-4 வாரங்களில்
                    டெலிவரி.
                  </span>
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
                  <span className="en">ESTIMATED RANGE</span>
                  <span className="ta tamil-text">மதிப்பிடப்பட்ட விலை</span>
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-ink">
                  ₹30,000 – ₹70,000+
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white"
              >
                <a
                  href={buildWAUrl(
                    WA_NUMBER,
                    `வணக்கம், நான் தனிப்பட்ட உணவு வண்டி வாங்க விரும்புகிறேன்.\nபெயர்:\nதொலைபேசி:\nவண்டி அளவு:\nவடிவமைப்பு விருப்பம்:\nபட்ஜெட்:`,
                  )}
                  target="_blank"
                >
                  <MessageCircle size={18} />
                  <span className="en">🔧 REQUEST CUSTOM CART</span>
                  <span className="ta tamil-text">
                    🔧 தனிப்பயன் வண்டிக்கு கேட்க
                  </span>
                </a>
              </Button>
            </div>

            {/* Right Column (60%) */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 items-stretch">
              {/* DESIGN Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between h-full">
                <div>
                  <PenTool className="text-[#f97316]" size={20} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">DESIGN</span>
                    <span className="ta tamil-text">வடிவமைப்பு</span>
                  </h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Tell us the size you need</span>
                      <span className="ta tamil-text">
                        தேவையான அளவு சொல்லுங்கள்
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Choose counter layout</span>
                      <span className="ta tamil-text">
                        கவுண்டர் வடிவமைப்பு தேர்வு
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Plan your branding space</span>
                      <span className="ta tamil-text">
                        உங்கள் பிராண்ட் இடம் திட்டமிடுங்கள்
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* BUILD Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between h-full">
                <div>
                  <Wrench className="text-[#f97316]" size={20} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">BUILD</span>
                    <span className="ta tamil-text">கட்டுமானம்</span>
                  </h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Quality steel material</span>
                      <span className="ta tamil-text">தரமான ஸ்டீல் பொருள்</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Stove setup (optional)</span>
                      <span className="ta tamil-text">
                        அடுப்பு அமைப்பு (விருப்பம்)
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Storage & cover options</span>
                      <span className="ta tamil-text">
                        சேமிப்பு மற்றும் மூடி விருப்பங்கள்
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* DELIVER Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between h-full">
                <div>
                  <Truck className="text-[#f97316]" size={20} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">DELIVER</span>
                    <span className="ta tamil-text">டெலிவரி</span>
                  </h3>
                </div>
                <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Ready in 2-4 weeks</span>
                      <span className="ta tamil-text">
                        2-4 வாரங்களில் தயார்
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Direct delivery in Coimbatore</span>
                      <span className="ta tamil-text">
                        கோயம்புத்தூரில் நேரடி டெலிவரி
                      </span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Fully checked before handover</span>
                      <span className="ta tamil-text">
                        கையளிப்பதற்கு முன் முழு சரிபார்ப்பு
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works details */}
      <section className="pb-20 md:pb-28">
        <div className="site-container max-w-[1000px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="en">FAQ</span>
            <span className="ta tamil-text">கேள்விகள்</span>
          </p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
            <Text en="How It Works" ta="வாடகை பற்றி கேள்விகள்" />
          </h2>
          <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {faqs.map(([question, tamilQuestion, answer, tamilAnswer]) => (
              <details key={question} className="group p-6 open:bg-[#F8F6F2]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  <span className="font-display text-xl uppercase tracking-[0.14em] text-ink">
                    <Text en={question} ta={tamilQuestion} />
                  </span>
                  <span className="text-xl text-primary group-open:hidden">
                    +
                  </span>
                  <span className="hidden text-xl text-primary group-open:inline">
                    −
                  </span>
                </summary>
                <p className="mt-3 text-[0.95rem] leading-7 text-muted">
                  <Text en={answer} ta={tamilAnswer} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden but crawlable SEO text section (CHANGE 8) */}
      <section className="sr-only">
        <div className="site-container">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Thalluvandi offers food cart rentals across Tamil Nadu. Our push
            carts (thallu vandi) are available for daily and weekly rental in
            Coimbatore. We serve street food vendors, tea stall owners, juice
            cart businesses, and fast food entrepreneurs. Rent a food cart with
            stove, without stove, with roof cover, or our premium all-inclusive
            cart. WhatsApp booking available. தளவண்டி வாடகை | உணவு வண்டி வாடகை
            தமிழ்நாடு | தள்ளு வண்டி
          </p>
        </div>
      </section>
    </main>
  );
}
