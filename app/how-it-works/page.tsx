import { MessageCircle, WalletCards } from "lucide-react";
import { Reveal } from "@/components/sections/reveal";

const steps = [
  "Browse the catalog → pick your cart type",
  "Click “Book on WhatsApp” → chat opens with pre-filled message",
  "Confirm dates & location with the team",
  "Pay deposit (cash/UPI)",
  "Cart delivered to your spot 🛒"
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#F8F6F2] pt-28">
      <section className="mx-auto max-w-[1200px] px-4 pb-20 md:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How It Works</p>
        <h1 className="mt-3 max-w-4xl font-display text-6xl uppercase leading-none text-ink md:text-8xl">A simple WhatsApp-first rental flow</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Built for first-time entrepreneurs who need clarity, fast confirmation, and a practical path from catalog browsing to cart delivery.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-4 pb-24 md:px-8">
        <div className="relative">
          <div className="absolute left-7 top-8 hidden h-[calc(100%-64px)] w-px bg-black/12 md:block" />
          {steps.map((step, index) => (
            <Reveal key={step} className="relative grid gap-5 py-6 md:grid-cols-[92px_1fr] md:py-8">
              <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-3xl text-white shadow-glow">
                {index + 1}
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="font-display text-4xl uppercase leading-none text-ink">{step}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {index === 0 && "Compare cart types, daily price ranges, features, and availability."}
                  {index === 1 && "Every cart CTA opens WhatsApp with context so inquiry stays quick."}
                  {index === 2 && "Share exact date, timing, and spot details before confirmation."}
                  {index === 3 && "Deposit can be handled through cash or UPI based on confirmation."}
                  {index === 4 && "The team coordinates delivery and setup for your business spot."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-4 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-2">
          <div>
            <MessageCircle className="text-primary" />
            <h3 className="mt-4 font-display text-4xl uppercase text-ink">Pre-filled inquiry</h3>
            <p className="mt-2 text-sm leading-7 text-muted">Rental messages are formatted in Tamil for faster local conversation.</p>
          </div>
          <div>
            <WalletCards className="text-primary" />
            <h3 className="mt-4 font-display text-4xl uppercase text-ink">Payment-ready</h3>
            <p className="mt-2 text-sm leading-7 text-muted">The flow is prepared for future deposit tracking, UPI records, and payment gateway integration.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
