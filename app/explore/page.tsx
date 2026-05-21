import type { Metadata } from "next";
import { MessageCircle, PenTool, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { customCartMessage, whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Explore Food Carts",
  description: "Browse food cart rentals and custom food cart manufacturing options in Coimbatore."
};

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const customCards = [
  {
    Icon: PenTool,
    title: "DESIGN",
    tamilTitle: "வடிவமைப்பு",
    points: ["Tell us the size you need", "Choose the counter layout", "Plan your branding space"],
    tamilPoints: ["உங்களுக்கு வேண்டிய size சொல்லுங்க", "Counter layout தேர்ந்தெடுங்க", "Branding space plan பண்ணலாம்"]
  },
  {
    Icon: Wrench,
    title: "BUILD",
    tamilTitle: "கட்டுமானம்",
    points: ["Quality steel material", "Stove setup (optional)", "Storage & cover options"],
    tamilPoints: ["தரமான steel material", "Stove setup (optional)", "Storage & cover options"]
  },
  {
    Icon: Truck,
    title: "DELIVER",
    tamilTitle: "டெலிவரி",
    points: ["Ready in 2–4 weeks", "Direct delivery in Coimbatore", "Fully checked before handover"],
    tamilPoints: ["2–4 வாரத்தில் ready", "கோவையில் நேரடி delivery", "Full check பண்ணி தருவோம்"]
  }
];

export default function ExplorePage() {
  return (
    <main className="pt-0 md:pt-20">
      <CartExplorer />

      <section className="pb-20 md:pb-28">
        <div className="site-container">
          <div className="flex flex-col gap-6 rounded-2xl border border-black/10 bg-white p-6 shadow-premium md:flex-row md:items-stretch md:p-8">
            <div className="md:w-[40%]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <Text en="Custom Manufacturing" ta="Custom வண்டி தயாரிப்பு" />
              </p>
              <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
                <Text en="Customize Your Cart & Own It" ta="உங்களுக்கே ஒரு வண்டி — நீங்களே design பண்ணுங்க!" />
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted">
                <Text
                  en="Build your own customized food cart based on your business needs. Delivery in 2–4 weeks."
                  ta="உங்கள் business-க்கு தேவையான size, அடுப்பு, color — எல்லாம் உங்கள் மனசுக்கு வச்சு build பண்ணி தருவோம். 2–4 வாரத்தில் delivery."
                />
              </p>
              <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  <Text en="Estimated Range" ta="மதிப்பிடப்பட்ட விலை" />
                </p>
                <p className="mt-1 font-display text-5xl text-ink">₹30,000 – ₹70,000</p>
              </div>
              <Button asChild size="lg" className="mt-6">
                <a href={whatsappUrl(customCartMessage)} target="_blank">
                  <MessageCircle size={18} /> <Text en="✏️ Request Custom Cart" ta="✏️ Custom வண்டி கேளுங்க" />
                </a>
              </Button>
            </div>

            <div className="grid flex-1 items-stretch gap-4 md:w-[60%] md:grid-cols-3 md:gap-6">
              {customCards.map(({ Icon, title, tamilTitle, points, tamilPoints }) => (
                <div key={title} className="flex min-h-[280px] flex-col justify-between rounded-xl border border-[rgba(234,108,0,0.2)] bg-[#fff7ed] p-6">
                  <div>
                    <Icon className="text-primary" size={24} />
                    <h3 className="mt-6 font-display text-4xl uppercase text-ink">
                      <Text en={title} ta={tamilTitle} />
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-6 text-muted">
                    {points.map((point, index) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>
                          <span className="en">{point}</span>
                          <span className="ta">{tamilPoints[index]}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
