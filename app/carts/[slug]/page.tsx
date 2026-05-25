import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CreditCard, MessageCircle, Star, UserRound, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carts, getCart } from "@/lib/carts";
import { cartBookingMessage } from "@/lib/utils";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";
import { CartGallery } from "@/components/sections/cart-gallery";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta tamil-text">{ta}</span>
    </>
  );
}

export function generateStaticParams() {
  return carts.map((cart) => ({ slug: cart.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  
  if (!cart) {
    return {
      title: "Cart Details | Thalluvandi",
      description: "Premium food cart rentals in Tamil Nadu."
    };
  }

  const titleText = `${cart.nameEn} for Rent in Coimbatore | Thalluvandi`;
  const descText = `Rent the premium ${cart.nameEn} (தளவண்டி) in Coimbatore, Tamil Nadu. Features: ${cart.features.join(", ")}. Starting at ₹${cart.pricePerDay}/day with refundable deposit.`;

  return { 
    title: titleText, 
    description: descText,
    keywords: `food cart rental coimbatore, push cart rental tamil nadu, thalluvandi, thallu vandi, ${cart.nameEn} rent`,
    alternates: {
      canonical: `https://thethalluvandi.in/carts/${cart.id}`
    },
    openGraph: {
      title: titleText,
      description: descText,
      url: `https://thethalluvandi.in/carts/${cart.id}`,
      images: [
        {
          url: cart.images[0],
          width: 1200,
          height: 630,
          alt: `${cart.nameEn} for rent in Coimbatore`
        }
      ],
      type: "website"
    }
  };
}

export default async function CartDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cart = getCart(slug);
  if (!cart) notFound();

  const related = carts.filter((item) => item.id !== cart.id).slice(0, 3);

  // Formatting Tamil booking message
  const bookingMsg = cartBookingMessage(cart.nameTa);

  return (
    <main className="bg-[#F8F6F2] pt-14 md:pt-24">
      <section className="py-10">
        <div className="site-container grid gap-6 md:grid-cols-[1fr_360px]">
          <div>
            {/* Aspect Ratio Image Gallery component (CHANGE 3) */}
            <CartGallery images={cart.images} nameEn={cart.nameEn} />

            <div className="mt-6 rounded-xl bg-white p-4 text-ink shadow-sm border border-black/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {cart.available ? (
                  <Text en="Available — Coimbatore" ta="இப்போது வாடகைக்கு கிடைக்கும் — கோவை" />
                ) : (
                  <Text en="Fully Booked — Coimbatore" ta="முன்பதிவு செய்யப்பட்டுள்ளது — கோவை" />
                )}
              </p>
              <h1 className="mt-2 font-display text-5xl uppercase leading-none md:text-6xl">
                <Text en={cart.nameEn} ta={cart.nameTa} />
              </h1>
            </div>

            {/* Side-by-side Price & Deposit amount cards (CHANGE 4) */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {/* Daily Price Card */}
              <div className="bg-orange-50 border border-orange-500/20 rounded-xl p-4 flex flex-col justify-between">
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  <span className="en">DAILY PRICE</span>
                  <span className="ta tamil-text">ஒரு நாள் வாடகை</span>
                </p>
                <div className="mt-2 flex items-baseline">
                  <span className="font-display text-3xl font-bold text-foreground">₹{cart.pricePerDay}</span>
                  <span className="text-sm text-muted ml-1">/DAY</span>
                </div>
              </div>

              {/* Deposit Amount Card */}
              <div className="bg-orange-50 border border-orange-500/20 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    <span className="en">DEPOSIT AMOUNT</span>
                    <span className="ta tamil-text">முன்பணம்</span>
                  </p>
                  <div className="mt-2">
                    <span className="font-display text-3xl font-bold text-foreground">₹{cart.depositAmount}</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-green-600 font-semibold">
                  <span className="en">Refundable</span>
                  <span className="ta tamil-text">திரும்ப பெறத்தக்கது</span>
                </div>
              </div>
            </div>

            {/* Features list */}
            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Features" ta="வண்டி வசதிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {cart.features.map((feature) => (
                  <div key={feature} className="rounded-xl border border-black/10 bg-white p-4 text-sm font-bold text-muted-foreground flex items-center gap-2">
                    <Zap className="text-primary shrink-0" size={18} /> 
                    <span className="tamil-text">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Specifications grid */}
            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Details" ta="விவரங்கள்" />
              </h2>
              <div className="mt-5 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
                <div className="grid grid-cols-2 gap-4 p-4 text-sm">
                  <span className="font-bold text-ink"><Text en="Supported Area" ta="சேவை பகுதி" /></span>
                  <span className="text-muted-foreground tamil-text"><Text en="Coimbatore" ta="கோயம்புத்தூர்" /></span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 text-sm">
                  <span className="font-bold text-ink"><Text en="Cart Type" ta="வண்டி வகை" /></span>
                  <span className="text-muted-foreground flex flex-wrap gap-1">
                    {cart.type.map((t) => (
                      <span key={t} className="bg-orange-50 border border-orange-200/50 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wider text-[#f97316]">
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 p-4 text-sm">
                  <span className="font-bold text-ink"><Text en="Availability Limit" ta="விருப்ப இருப்பு எண்ணிக்கை" /></span>
                  <span className="text-muted-foreground font-semibold"><Text en={`${cart.availableCount} Carts ready`} ta={`${cart.availableCount} வண்டிகள் தயார்`} /></span>
                </div>
              </div>
            </section>

            {/* Roadmap options */}
            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Future-ready modules" ta="வரப்போகும் வசதிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {[
                  [CalendarDays, "Booking calendar", "முன்பதிவு காலண்டர்"],
                  [CreditCard, "Payment gateway", "வாடகை கட்டணம் செலுத்துதல்"],
                  [Star, "User reviews", "மதிப்பீடுகள் / விமர்சனங்கள்"],
                  [UserRound, "Vendor profile", "உரிமையாளர் சுயவிவரம்"]
                ].map(([Icon, label, tamil]) => (
                  <div key={label as string} className="rounded-xl border border-dashed border-black/20 bg-white p-4 text-sm font-bold text-muted-foreground">
                    <Icon className="mb-3 text-primary" size={18} /> 
                    <Text en={label as string} ta={tamil as string} />
                  </div>
                ))}
              </div>
            </section>

            {/* Related carts */}
            <section className="mt-12">
              <h2 className="font-display text-4xl uppercase text-ink">
                <Text en="Related carts" ta="மற்ற வண்டிகள்" />
              </h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link href={`/carts/${item.id}`} key={item.id} className="rounded-xl border border-black/10 bg-white p-4 transition hover:-translate-y-1 hover:shadow-premium">
                    <p className="font-bold text-ink">
                      <span className="en">{item.nameEn}</span>
                      <span className="ta tamil-text">{item.nameTa}</span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-semibold">
                      ₹{item.pricePerDay}/DAY | {item.availableCount} available
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Inquiry card panel */}
          <aside className="h-fit rounded-2xl border border-black/10 bg-white p-5 shadow-premium md:sticky md:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
              <Text en="Booking inquiry" ta="முன்பதிவு விசாரணை" />
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase text-ink">
              <Text en="Reserve this cart" ta="இந்த வண்டியை புக் செய்ய" />
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              <Text 
                en="Confirm availability, rental period, location, delivery, and setup details on WhatsApp." 
                ta="கோயம்புத்தூரில் தள்ளுவண்டி கிடைக்கும் தேதி, இடம் மற்றும் டெலிவரி விவரங்களை வாட்ஸ்அப்பில் பேசி உறுதி செய்து கொள்ளவும்." 
              />
            </p>
            <Button asChild size="lg" className="mt-6 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white">
              <a href={buildWAUrl(WA_NUMBER, bookingMsg)} target="_blank">
                <MessageCircle size={18} /> <Text en="🛒 Book This Cart" ta="🛒 முன்பதிவு செய்ய" />
              </a>
            </Button>
            <div className="mt-6 rounded-xl border border-dashed border-black/18 bg-[#F8F6F2] p-4 text-xs leading-relaxed text-muted-foreground">
              <Text 
                en="Live availability is confirmed on WhatsApp before booking." 
                ta="முன்பதிவு செய்வதற்கு முன்பாக வண்டியின் இருப்பு வாட்ஸ்அப்பில் உறுதிப்படுத்தப்படும்." 
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
