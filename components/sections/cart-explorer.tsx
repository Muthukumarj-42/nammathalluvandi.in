"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { carts, filters } from "@/lib/carts";
import { cn, rentalTamilMessage, whatsappUrl } from "@/lib/utils";

export function CartExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => (active === "All" ? carts : carts.filter((cart) => cart.tags.includes(active) || cart.category === active)), [active]);

  return (
    <section id="explore" className="bg-[#F8F6F2] px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Explore Carts</p>
            <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink md:text-7xl">Marketplace-ready fleet</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">
            Daily rental food carts for stove setups, covered counters, tea, juice, and fast food businesses. Built for backend availability, payments, and multi-city scaling.
          </p>
        </div>

        <div className="hide-scrollbar mobile-snap mt-8 flex gap-3 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "min-h-11 shrink-0 rounded-full border px-5 text-xs font-bold uppercase tracking-[0.12em] transition",
                active === filter ? "border-primary bg-primary text-white" : "border-outline bg-white text-muted hover:border-primary hover:text-primary"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mobile-snap mt-8 grid auto-cols-[86%] grid-flow-col gap-5 overflow-x-auto pb-5 md:grid-flow-row md:grid-cols-3 md:overflow-visible">
          {visible.slice(0, compact ? 3 : visible.length).map((cart, index) => (
            <motion.article
              layout
              key={cart.slug}
              initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.06, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
              className="grain group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-premium"
            >
              <Link href={`/carts/${cart.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <Image src={cart.image} alt={cart.title} fill sizes="(min-width: 768px) 33vw, 86vw" className="object-cover transition duration-700 group-hover:scale-[1.08]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <Image src="/brand/text-logo.png" alt="" width={104} height={38} className="absolute right-3 top-3 h-7 w-auto rounded bg-white/72 p-1 opacity-80" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                    {cart.availability}
                  </span>
                  <span className="absolute bottom-4 left-4 flex items-center gap-1 text-sm font-bold text-white">
                    <MapPin size={15} /> {cart.location}
                  </span>
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl uppercase leading-none text-ink">{cart.title}</h3>
                    <p className="mt-1 text-sm text-muted">{cart.category}</p>
                  </div>
                  <Sparkles className="text-primary" size={20} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cart.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#F8F6F2] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 rounded-lg border border-black/10 bg-[#F8F6F2] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Daily price range</p>
                  <p className="mt-1 font-display text-4xl text-ink">{cart.dailyPrice}</p>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {cart.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button asChild variant="dark">
                    <Link href={`/carts/${cart.slug}`}>Details</Link>
                  </Button>
                  <Button asChild>
                    <a href={whatsappUrl(`${rentalTamilMessage}\n\nதேவைப்படும் வண்டி வகை: ${cart.title}`)} target="_blank">
                      <MessageCircle size={16} /> Book
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {compact && (
          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline" className="text-ink">
              <Link href="/explore">View All Carts</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
