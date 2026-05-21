"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { carts, filters } from "@/lib/carts";
import { cartBookingMessage, cn, whatsappUrl } from "@/lib/utils";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

export function CartExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(
    () =>
      active === "All"
        ? carts
        : carts.filter((cart) => cart.tags.some((tag) => tag.en === active) || cart.category.en === active),
    [active]
  );

  return (
    <section id="explore" className="bg-[#F8F6F2] py-16 md:py-24">
      <div className="site-container">
        <div className="grid gap-4 md:grid-cols-[1fr_420px] md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="Explore Carts" ta="வண்டிகளை பாருங்க" />
            </p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">
              <Text en="Food carts ready for rent" ta="உங்கள் தொழிலுக்கு தயார் வண்டிகள்" />
            </h2>
          </div>
          <p className="text-sm leading-7 text-muted">
            <Text
              en="Daily rental food carts for tea, juice, snacks, and fast food businesses in Coimbatore."
              ta="டீ, ஜூஸ், ஸ்நாக்ஸ், ஃபாஸ்ட் ஃபுட் — கோவையில் தொழில் ஆரம்பிக்க தினசரி வாடகை வண்டிகள்."
            />
          </p>
        </div>

        <div className="hide-scrollbar mt-8 flex gap-3 overflow-x-auto whitespace-nowrap pb-3">
          {filters.map((filter) => (
            <button
              key={filter.en}
              onClick={() => setActive(filter.en)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-5 text-xs font-bold uppercase tracking-[0.12em] transition",
                active === filter.en ? "border-primary bg-primary text-white" : "border-outline bg-white text-muted hover:border-primary hover:text-primary"
              )}
            >
              <Text en={filter.en} ta={filter.ta} />
            </button>
          ))}
        </div>

        <motion.div layout className="mt-8 grid items-stretch gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {visible.slice(0, compact ? 3 : visible.length).map((cart, index) => (
            <motion.article
              layout
              key={cart.slug}
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
              className="grain group flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium"
            >
              <Link href={`/carts/${cart.slug}`} className="block">
                <div className="relative h-[180px] overflow-hidden bg-[#fff7ed]">
                  <Image src={cart.image} alt={cart.title.en} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-contain p-8 transition duration-500 group-hover:scale-[1.04]" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-ink">
                    <Text en={`${cart.availability.en} — Coimbatore`} ta={`${cart.availability.ta} — கோவை`} />
                  </span>
                  <span className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-sm font-bold text-ink">
                    <MapPin size={15} /> <Text en={cart.location.en} ta={cart.location.ta} />
                  </span>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl uppercase leading-none text-ink">
                      <Text en={cart.title.en} ta={cart.title.ta} />
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      <Text en={cart.category.en} ta={cart.category.ta} />
                    </p>
                  </div>
                  <Sparkles className="shrink-0 text-primary" size={20} />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cart.tags.map((tag) => (
                    <span key={tag.en} className="rounded-full bg-[#F8F6F2] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
                      <Text en={tag.en} ta={tag.ta} />
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-lg border border-black/10 bg-[#F8F6F2] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    <Text en="Daily price" ta="ஒரு நாள் வாடகை" />
                  </p>
                  <p className="mt-1 font-display text-4xl text-ink">{cart.dailyPrice}</p>
                  <p className="mt-2 text-xs font-bold text-muted">
                    <Text en="Deposit: ₹2,000 – ₹5,000 (refundable)" ta="Deposit: ₹2,000 – ₹5,000 திரும்ப கொடுத்துடுவோம்" />
                  </p>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {cart.features.slice(0, 3).map((feature) => (
                    <li key={feature.en} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>
                        <Text en={feature.en} ta={feature.ta} />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                  <Button asChild variant="dark">
                    <Link href={`/carts/${cart.slug}`}>
                      <Text en="Details" ta="விவரம்" />
                    </Link>
                  </Button>
                  <Button asChild>
                    <a href={whatsappUrl(cartBookingMessage(cart.title.en))} target="_blank">
                      <MessageCircle size={16} /> <Text en="🛒 Book This Cart" ta="🛒 இந்த வண்டியை book பண்ணுங்க" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {compact && (
          <div className="mt-8 text-left max-md:text-center">
            <Button asChild size="lg" variant="outline" className="text-ink">
              <Link href="/explore">
                <Text en="Explore Carts" ta="🔍 வண்டிகளை பாருங்க" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
