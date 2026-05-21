import Image from "next/image";
import type { Metadata } from "next";
import { MessageCircle, PenTool, Truck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartExplorer } from "@/components/sections/cart-explorer";
import { whatsappUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Explore Food Carts",
  description: "Browse premium food cart rentals and custom food cart manufacturing options across Tamil Nadu."
};

export default function ExplorePage() {
  return (
    <main className="pt-24">
      <CartExplorer />

      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-[1440px] gap-8 rounded-2xl border border-black/10 bg-white p-6 shadow-premium md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Custom Manufacturing</p>
            <h2 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">Customize Your Cart & Own It</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Build your own customized food cart based on your business needs. Manufacturing available with delivery in 2–4 weeks.
            </p>
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Estimated Range</p>
              <p className="mt-1 font-display text-5xl text-ink">₹30,000 – ₹70,000</p>
            </div>
            <Button asChild size="lg" className="mt-6">
              <a href={whatsappUrl("Hi, I’m interested in requesting a custom food cart from Thalluvandi.")} target="_blank">
                <MessageCircle size={18} /> Request Custom Cart
              </a>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              [PenTool, "Design", "Layout, counter size, branding space"],
              [Wrench, "Build", "Material, stove setup, storage, cover"],
              [Truck, "Deliver", "2–4 week manufacturing delivery"]
            ].map(([Icon, title, copy]) => (
              <div key={title as string} className="rounded-2xl border border-black/10 bg-[#F8F6F2] p-5">
                <Icon className="text-primary" />
                <h3 className="mt-5 font-display text-4xl uppercase text-ink">{title as string}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{copy as string}</p>
              </div>
            ))}
            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-black/10 bg-ink md:col-span-3">
              <Image src="/brand/stitch-reference.png" alt="Custom cart mockup" fill className="object-cover opacity-80" />
              <Image src="/brand/text-logo.png" alt="" width={160} height={60} className="absolute bottom-5 left-5 h-10 w-auto rounded bg-white/80 p-2" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
