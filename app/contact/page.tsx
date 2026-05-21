"use client";

import { useMemo, useState } from "react";
import { MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CALL_PHONE, DISPLAY_CALL_PHONE, WHATSAPP_PUBLISH, WHATSAPP_RENTAL, whatsappUrl } from "@/lib/utils";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const inquiryOptions = {
  rent: {
    label: "I want to rent a cart",
    tamil: "வண்டி rent எடுக்கணும்",
    message: "Hi, I want to rent a food cart from Thalluvandi. Please guide me.",
    phone: WHATSAPP_RENTAL
  },
  list: {
    label: "I want to list my cart",
    tamil: "என் வண்டி list பண்ணணும்",
    message: "Hi, I own a food cart and want to list it on Thalluvandi.",
    phone: WHATSAPP_PUBLISH
  },
  buy: {
    label: "I want to buy/order a cart",
    tamil: "Custom வண்டி வாங்கணும்",
    message: "Hi, I want to buy or order a custom food cart from Thalluvandi.",
    phone: WHATSAPP_RENTAL
  },
  other: {
    label: "Other inquiry",
    tamil: "மற்ற கேள்வி",
    message: "Hi, I have an inquiry about Thalluvandi.",
    phone: WHATSAPP_RENTAL
  }
};

const infoCards = [
  [PhoneCall, "Phone", "Call பண்ணுங்க", DISPLAY_CALL_PHONE],
  [MessageCircle, "WhatsApp", "WhatsApp-ல பேசலாம்", "+91 88382 92849"],
  [MapPin, "Service Area", "சேவை பகுதி", "Coimbatore"]
];

type InquiryKey = keyof typeof inquiryOptions;

export default function ContactPage() {
  const [selection, setSelection] = useState<InquiryKey>("rent");
  const selected = useMemo(() => inquiryOptions[selection], [selection]);

  return (
    <main className="bg-[#F8F6F2] pt-0 md:pt-28">
      <section className="pb-16 pt-12 md:pb-20 md:pt-0">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Text en="Contact" ta="தொடர்பு" />
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-6xl uppercase leading-none text-ink md:text-8xl">
            <Text en="Talk to Thalluvandi" ta="உங்கள் தொழில் பற்றி பேசலாம்" />
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-muted">
            <Text en="Call us or send a WhatsApp message. We will guide you based on your need." ta="வண்டி rent, list, custom build — எதுவாக இருந்தாலும் சொல்லுங்க. நாங்க வழி காட்டுறோம்." />
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="site-container grid items-stretch gap-4 md:grid-cols-3 md:gap-6">
          {infoCards.map(([Icon, title, tamilTitle, value]) => (
            <div key={title as string} className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <Icon className="text-primary" size={28} />
              <h2 className="mt-4 font-display text-4xl uppercase text-ink">
                <Text en={title as string} ta={tamilTitle as string} />
              </h2>
              <p className="mt-2 text-sm font-bold text-muted">{value as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="site-container">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-premium md:p-8">
            <h2 className="font-display text-5xl uppercase leading-none text-ink">
              <Text en="Send us a message" ta="WhatsApp message அனுப்புங்க" />
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <label className="grid gap-2 text-sm font-bold text-ink">
                <span>
                  <Text en="User type" ta="உங்களுக்கு என்ன தேவை?" />
                </span>
                <select value={selection} onChange={(event) => setSelection(event.target.value as InquiryKey)} className="min-h-12 w-full rounded border border-black/10 bg-[#F8F6F2] px-4 text-sm outline-none focus:border-primary">
                  {Object.entries(inquiryOptions).map(([value, option]) => (
                    <option key={value} value={value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-ink">
                <span>
                  <Text en="Inquiry type" ta="விசாரணை வகை" />
                </span>
                <select value={selection} onChange={(event) => setSelection(event.target.value as InquiryKey)} className="min-h-12 w-full rounded border border-black/10 bg-[#F8F6F2] px-4 text-sm outline-none focus:border-primary">
                  {Object.entries(inquiryOptions).map(([value, option]) => (
                    <option key={value} value={value}>{option.label}</option>
                  ))}
                </select>
              </label>
              <Button asChild size="lg" className="w-full md:w-auto">
                <a href={whatsappUrl(selected.message, selected.phone)} target="_blank">
                  <MessageCircle size={18} /> <Text en="💬 Chat on WhatsApp" ta="💬 WhatsApp-ல பேசலாம்" />
                </a>
              </Button>
            </div>
            <div className="mt-5 rounded-xl border border-primary/20 bg-[#fff7ed] p-4 text-sm leading-7 text-muted">
              <strong className="text-ink">
                <Text en={selected.label} ta={selected.tamil} />
              </strong>
              <p>{selected.message}</p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="outline" className="text-ink">
                <a href={`tel:${CALL_PHONE}`}>
                  <PhoneCall size={18} /> <Text en="📞 Call Us" ta="📞 Call பண்ணுங்க" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container">
          <div className="relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white" style={{ aspectRatio: "16 / 9" }}>
            <iframe title="Coimbatore map" src="https://maps.google.com/maps?q=Coimbatore,Tamil+Nadu&output=embed" className="absolute inset-0 h-full w-full" loading="lazy" />
          </div>
        </div>
      </section>
    </main>
  );
}
