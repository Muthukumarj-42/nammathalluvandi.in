export const runtime = "edge";

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
import { Reveal } from "@/components/sections/reveal";
import dynamic from "next/dynamic";

const CartExplorer = dynamic(
  () => import("@/components/sections/cart-explorer").then((mod) => mod.CartExplorer),
  {
    ssr: true,
    loading: () => (
      <div className="min-h-[400px] flex items-center justify-center text-muted font-semibold">
        Loading Carts...
      </div>
    ),
  }
);
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
  ["65+ Carts", "65+ வண்டிகள்"],
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
    "65+ carts ready for tea, snacks, juice, and fast food businesses. With over 65 carts maintained and ready at our Coimbatore yard you will always find the right cart for your business type without any waiting period.",
    "65-க்கும் மேல் வண்டிகள் தயாராக உள்ளது. 65-க்கும் மேல் வண்டிகள் எப்போதும் தயாராக உள்ளன. உங்களுக்கு ஏற்ற வண்டி உடனே கிடைக்கும்.",
  ],
  [
    PanelsTopLeft,
    "Multiple Variants",
    "பல வகை வண்டிகள்",
    "Stove carts, covered carts, compact carts, and premium options. Whether you need a simple open counter for snacks or a fully covered premium cart with stove for hot food we have the exact variant your business needs.",
    "அடுப்பு வண்டி, மேல் கவர் வண்டி — உங்களுக்கு எது வேண்டுமானாலும். சாதாரண வண்டி முதல் அடுப்பு மேல்கவர் பிரீமியம் வண்டி வரை உங்கள் தேவைக்கேற்ப தேர்வு செய்யலாம்.",
  ],
  [
    PhoneCall,
    "WhatsApp Booking",
    "WhatsApp புக்கிங்",
    "Send one WhatsApp message and we will guide the booking. No complicated forms or advance payment needed. Just send one WhatsApp message and our team confirms your booking the same day.",
    "வாட்ஸ்அப்பில் ஒரு மெசேஜ் அனுப்புங்கள் — வண்டி தயாராகிவிடும். ஒரு வாட்ஸ்அப் மெசேஜ் அனுப்புங்கள். அன்றே உறுதிப்படுத்துவோம்.",
  ],
  [
    CalendarCheck,
    "Trusted by Vendors",
    "வியாபாரிகள் நம்பிக்கை",
    "Local support trusted by vendors starting small food businesses. Street food vendors across Coimbatore trust us for reliable carts, fair pricing, and honest service with full refundable deposit.",
    "கோவையில் நூறுக்கும் மேற்பட்ட வியாபாரிகள் நம்பி பயன்படுத்துகிறார்கள். கோவையில் நூற்றுக்கும் மேற்பட்ட வியாபாரிகள் நம்மை நம்பி பயன்படுத்துகிறார்கள்.",
  ],
];

const faqs = [
  [
    "What is Thalluvandi?",
    "தள்ளுவண்டி என்றால் என்ன?",
    "Thalluvandi is Coimbatore's premier food cart rental marketplace. We help aspiring entrepreneurs and street vendors easily start small food businesses by offering food carts on a flexible daily rental plan with minimal investment.",
    "தள்ளுவண்டி என்பது கோவையில் எளிய முறையில் உணவுத் தொழில் தொடங்க தள்ளுவண்டிகளை வாடகைக்கு வழங்கும் ஒரு தளமாகும். பெரிய முதலீடு இன்றி சுலபமாக தொழிலைத் தொடங்க நாங்கள் உதவுகிறோம்.",
  ],
  [
    "Where is your branch located?",
    "உங்கள் கிளை எங்குள்ளது?",
    "D. Nagaraj Thalluvandi is located at Ondipudur, Coimbatore. Renter pickup, returns, and physical inspection of carts take place here.",
    "D. நாகராஜ் தளவண்டி ஒண்டிப்புதூர், கோயம்புத்தூரில் அமைந்துள்ளது. இங்கிருந்து நீங்கள் வண்டிகளை நேரடியாகப் பெற்றுக்கொள்ளலாம் அல்லது திரும்ப ஒப்படைக்கலாம்.",
  ],
  [
    "How do I book a food cart?",
    "வண்டியை புக் செய்வது எப்படி?",
    "Browse through our premium food cart variants on the Explore page, fill out your booking details on our dedicated `/book` page, and continue to WhatsApp to finalize your booking with our team.",
    "எங்கள் வண்டி வகைகள் பக்கத்தில் உங்களுக்கு தேவையான வண்டியைத் தேர்ந்தெடுத்து, உங்கள் விவரங்களை முன்பதிவு பக்கத்தில் பூர்த்தி செய்து, வாட்ஸ்அப் வழியாக எங்களுடன் தொடர்புகொண்டு முன்பதிவை உறுதி செய்யலாம்.",
  ],
  [
    "What documents are required for booking?",
    "என்னென்ன ஆவணங்கள் தேவை?",
    "Please bring any one of Aadhaar Card, Ration Card, or PAN Card along with 1 Passport Size Photo. Any one of these primary proofs is sufficient.",
    "கொண்டுவர வேண்டியது: ஆதார் கார்டு, ரேஷன் கார்டு அல்லது பான் கார்டு (இதில் ஏதேனும் ஒரு ஆதாரம்) மற்றும் 1 பாஸ்போர்ட் அளவு போட்டோ போதுமானது.",
  ],
  [
    "What are the key rental rules?",
    "முக்கிய வாடகை விதிகள் என்னென்ன?",
    "Key terms include: 1. Cart must be rented in the active operator's name. 2. Renter handles transport (pickup/return). 3. Damages are checked and charged. 4. Minimum rental period is 1 month; early returns are still billed for 1 full month.",
    "முக்கிய விதிகள்: 1. தொழில் செய்பவர் பெயரிலேயே வண்டி எடுக்க வேண்டும். 2. போக்குவரத்து தங்கள் பொறுப்பு. 3. சேதங்களுக்கு தகுந்த கட்டணம் வசூலிக்கப்படும். 4. குறைந்தபட்ச வாடகை காலம் 1 மாதம் (ஒரு மாதத்திற்குள் வண்டியைத் திரும்பக் கொடுத்தாலும் 1 மாத வாடகை வசூலிக்கப்படும்).",
  ],
  [
    "What is the minimum rental period for a thallu vandi in Coimbatore?",
    "கோவையில் தளவண்டி வாடகைக்கு குறைந்தபட்ச காலம் என்ன?",
    "The minimum rental period at Namma Thalluvandi is 1 month. If you return the cart before completing one month the full one month rent will still be charged. This ensures fair pricing for both parties.",
    "குறைந்தபட்சம் 1 மாதம் வாடகை வைத்திருக்க வேண்டும். முன்னதாக திரும்பினாலும் 1 மாத வாடகை வசூலிக்கப்படும்.",
  ],
  [
    "Do you deliver the cart to my location in Coimbatore?",
    "கோவையில் என் இடத்திற்கு வண்டி கொண்டு வருவீர்களா?",
    "Cart pickup and return from our yard at Ondipudur Coimbatore is the renter's responsibility. You will need to arrange your own transport to collect and return the cart. Our address is 6A Aruljothipuram Jallimedu Ondipudur Coimbatore.",
    "வண்டியை எங்கள் ஒண்டிப்புதூர் கிளையிலிருந்து எடுத்துச் செல்வதும் திரும்ப ஒப்படைப்பதும் வாடகைதாரரின் பொறுப்பு.",
  ],
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Namma Thalluvandi",
    alternateName: [
      "Thalluvandi",
      "நம்ம தளவண்டி",
      "தளவண்டி",
      "Thallu Vandi Coimbatore",
      "Namma Thallu Vandi",
      "D. Nagaraj Thalluvandi Ondipudur",
      "D. Nagaraj Thallu Vandi Ondipudur Coimbatore",
      "Thalluvandi Ondipudur",
      "நாகராஜ் தளவண்டி ஒண்டிப்புதூர்"
    ],
    description: "Premium thallu vandi food cart rentals in Coimbatore, Tamil Nadu. 65+ carts with stove, roof cover, and premium variants available for daily and monthly rental.",
    url: "https://nammathalluvandi.in",
    telephone: "+919442763940",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6A Aruljothipuram Jallimedu Ondipudur",
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
    priceRange: "₹50 to ₹200 per day",
    areaServed: ["Coimbatore", "Tamil Nadu"],
    serviceType: [
      "Food Cart Rental",
      "Thallu Vandi Rental",
      "Push Cart Rental",
      "Street Food Cart Rental"
    ],
    hasMap: "https://maps.app.goo.gl/mdeWyjcpqBQRVzR46",
    sameAs: ["https://www.instagram.com/nammathalluvandi.in"]
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
                en="Thallu Vandi Rental in Coimbatore"
                ta="கோவையில் தளவண்டி வாடகை"
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
                <Link href="/explore">
                  <MessageCircle size={18} />{" "}
                  <Text en="💬 Chat on WhatsApp" ta="💬 WhatsApp-ல பேசலாம்" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal className="relative hidden md:block">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
            <Image
              src="/brand/full-logo-with-background.webp"
              alt="Thalluvandi food cart rentals Coimbatore Tamil Nadu"
              width={720}
              height={720}
              priority
              sizes="100vw"
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
                en="Why Choose Namma Thalluvandi for Thallu Vandi Rental"
                ta="நம்ம தளவண்டியில் ஏன் வாடகை எடுக்கணும்?"
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
                  <span className="font-display text-xl uppercase tracking-[0.14em] text-ink faq-question-title">
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

      {/* Visually minimal but crawlable SEO text section */}
      <section className="py-6 border-t border-black/5">
        <div className="site-container">
          <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            Namma Thalluvandi provides thallu vandi vadagai in Coimbatore Tamil Nadu. Our push carts are available for rent for tea stalls juice counters fast food businesses and street food vendors. Thallu vandi rental Coimbatore from 50 rupees per day. Monthly and weekly rental available. Refundable deposit. WhatsApp booking. நம்ம தளவண்டி வாடகை கோவை. உணவு வண்டி வாடகை கோயம்புத்தூர். D. Nagaraj Thalluvandi Ondipudur — Coimbatore's trusted thallu vandi rental at Ondipudur. D நாகராஜ் தளவண்டி ஒண்டிப்புதூர் கோவை. Ondipudur thallu vandi vadagai. ஒண்டிப்புதூர் தளவண்டி வாடகை கோவை.
          </p>
        </div>
      </section>
    </main>
  );
}
