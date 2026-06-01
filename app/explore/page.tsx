import type { Metadata } from "next";
import { MessageCircle, PenTool, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { customCartMessage } from "@/lib/utils";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

export const metadata: Metadata = {
  title: "Food Carts for Rent | Thalluvandi | Coimbatore",
  description: "Browse 66+ rental food carts — stove carts, juice carts, tea carts, premium covered carts. Starting ₹100/day. Serving Coimbatore."
};

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta tamil-text">{ta}</span>
    </>
  );
}

export default function ExplorePage() {
  return (
    <main className="pt-0 md:pt-20">
      <CartExplorer />

      {/* Redesigned Custom Manufacturing teaser section */}
      <section className="py-16 md:py-24 bg-white border-t border-black/10">
        <div className="site-container">
          <div className="grid gap-8 md:grid-cols-[0.4fr_0.6fr]">
            {/* Left Column (40%) */}
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316] font-semibold">
                  <span className="en">CUSTOM MANUFACTURING</span>
                  <span className="ta tamil-text">தனிப்பயன் தயாரிப்பு</span>
                </p>
                <h2 className="mt-3 font-display text-4xl uppercase leading-none text-ink md:text-5xl">
                  <span className="en">CUSTOMIZE YOUR CART & OWN IT</span>
                  <span className="ta tamil-text">உங்களுக்கே ஒரு வண்டி — நீங்களே வடிவமையுங்கள்!</span>
                </h2>
                <p className="mt-4 text-base leading-7 text-muted">
                  <span className="en">Build your own customized food cart based on your business needs. Delivery in 2–4 weeks.</span>
                  <span className="ta tamil-text">உங்கள் தேவைக்கேற்ப தனிப்பட்ட உணவு வண்டி. 2-4 வாரங்களில் டெலிவரி.</span>
                </p>
              </div>

              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
                  <span className="en">ESTIMATED RANGE</span>
                  <span className="ta tamil-text">மதிப்பிடப்பட்ட விலை</span>
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-ink">₹30,000 – ₹70,000</p>
              </div>

              <Button asChild size="lg" className="mt-6 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white">
                <a href={buildWAUrl(WA_NUMBER, customCartMessage)} target="_blank">
                  <MessageCircle size={18} /> 
                  <span className="en">🔧 REQUEST CUSTOM CART</span>
                  <span className="ta tamil-text">🔧 தனிப்பயன் வண்டிக்கு கேட்க</span>
                </a>
              </Button>
            </div>

            {/* Right Column (60%) */}
            <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
              {/* DESIGN Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <PenTool className="text-[#f97316]" size={24} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">DESIGN</span>
                    <span className="ta tamil-text">வடிவமைப்பு</span>
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Tell us the size you need</span>
                      <span className="ta tamil-text">தேவையான அளவு சொல்லுங்கள்</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Choose counter layout</span>
                      <span className="ta tamil-text">கவுண்டர் வடிவமைப்பு தேர்வு</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Plan your branding space</span>
                      <span className="ta tamil-text">உங்கள் பிராண்ட் இடம் திட்டமிடுங்கள்</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* BUILD Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <Wrench className="text-[#f97316]" size={24} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">BUILD</span>
                    <span className="ta tamil-text">கட்டுமானம்</span>
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
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
                      <span className="ta tamil-text">அடுப்பு அமைப்பு (விருப்பம்)</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Storage & cover options</span>
                      <span className="ta tamil-text">சேமிப்பு மற்றும் மூடி விருப்பங்கள்</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* DELIVER Card */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <Truck className="text-[#f97316]" size={24} />
                  <h3 className="mt-4 font-display text-xl uppercase font-bold text-ink">
                    <span className="en">DELIVER</span>
                    <span className="ta tamil-text">டெலிவரி</span>
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Ready in 2-4 weeks</span>
                      <span className="ta tamil-text">2-4 வாரங்களில் தயார்</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Direct delivery in Coimbatore</span>
                      <span className="ta tamil-text">கோயம்புத்தூரில் நேரடி டெலிவரி</span>
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#f97316] font-bold">•</span>
                    <span>
                      <span className="en">Fully checked before handover</span>
                      <span className="ta tamil-text">கையளிப்பதற்கு முன் முழு சரிபார்ப்பு</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
