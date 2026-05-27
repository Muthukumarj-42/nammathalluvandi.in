"use client";

import { useMemo, useState } from "react";
import { MapPin, MessageCircle, PhoneCall, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CALL_PHONE,
  DISPLAY_CALL_PHONE,
  DISPLAY_RENTAL_WHATSAPP,
} from "@/lib/utils";
import { WA_NUMBER, WA_PUBLISH, buildWAUrl } from "@/config/whatsapp";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta tamil-text">{ta}</span>
    </>
  );
}

const inquiryOptions = {
  rent: {
    label: "I want to rent a cart",
    tamil: "வண்டி வாடகைக்கு எடுக்க வேண்டும்",
    message:
      "வணக்கம், நான் தள்ளுவண்டி வாடகைக்கு எடுக்க விரும்புகிறேன்.\n\nபெயர்:\nதொலைபேசி:\nதேவையான தேதி:\nஇடம் (கோவையில்):\nகால அவகாசம்:\nமேலும் விவரம்:",
    phone: WA_NUMBER,
  },
  list: {
    label: "I want to list my cart in thallu vandi",
    tamil: "என் வண்டியை தளவண்டியில் பதிவு செய்ய வேண்டும்",
    message:
      "Hi, I want to list my food cart on Thalluvandi.\n\nName:\nPhone:\nNumber of carts:\nCart type:\nRental price expectation:\nLocation (Tamil nadu):",
    phone: WA_PUBLISH,
  },
  buy: {
    label: "I want to buy/order a cart",
    tamil: "தனிப்பயன் வண்டி வாங்க வேண்டும்",
    message:
      "வணக்கம், நான் தனிப்பட்ட உணவு வண்டி வாங்க விரும்புகிறேன்.\n\nபெயர்:\nதொலைபேசி:\nவண்டி அளவு:\nவடிவமைப்பு விருப்பம்:\nபட்ஜெட்:",
    phone: WA_NUMBER,
  },
  other: {
    label: "Other inquiry",
    tamil: "மற்ற கேள்விகள்",
    message: "வணக்கம், தள்ளுவண்டி தளம் மூலம் தொடர்பு கொள்கிறேன். என் கேள்வி:",
    phone: WA_NUMBER,
  },
};

type InquiryKey = keyof typeof inquiryOptions;

export default function ContactPage() {
  const [selection, setSelection] = useState<InquiryKey>("rent");
  const selected = useMemo(() => inquiryOptions[selection], [selection]);

  const infoCards = [
    [
      PhoneCall,
      "Phone",
      "அழைக்க",
      <a
        href={`tel:${CALL_PHONE}`}
        key="phone-link"
        className="hover:text-primary transition font-mono"
      >
        {DISPLAY_CALL_PHONE}
      </a>,
    ],
    [
      MessageCircle,
      "WhatsApp",
      "வாட்ஸ்அப்",
      <a
        href={`https://wa.me/${WA_NUMBER}`}
        target="_blank"
        key="wa-link"
        className="hover:text-primary transition font-mono"
      >
        {DISPLAY_RENTAL_WHATSAPP}
      </a>,
    ],
  ] as const;

  return (
    <main className="bg-[#F8F6F2] pt-16 md:pt-28">
      {/* Page Header */}
      <section className="pb-12 pt-24 md:pb-16 md:pt-0">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Text en="Contact" ta="தொடர்பு கொள்ள" />
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-5xl uppercase leading-none text-ink md:text-7xl">
            <Text
              en="Contact Thalluvandi — Coimbatore, Tamil Nadu"
              ta="தொடர்பு கொள்ள — ஒண்டிப்புதூர், கோயம்புத்தூர்"
            />
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-muted">
            <Text
              en="Reach out to us for premium food cart rentals and custom manufacturing in Coimbatore and expanding across all districts of Tamil Nadu."
              ta="கோயம்புத்தூர் மற்றும் தமிழ்நாடு முழுவதும் உள்ள அனைத்து மாவட்டங்களிலும் தள்ளுவண்டி வாடகை மற்றும் தனிப்பட்ட வண்டிகள் தயாரிக்க எங்களை தொடர்பு கொள்ளவும்."
            />
          </p>
        </div>
      </section>

      {/* Main Info Cards - FIX 7 */}
      <section className="pb-10">
        <div className="site-container grid items-stretch gap-4 md:grid-cols-3 md:gap-6">
          {infoCards.map(([Icon, title, tamilTitle, renderContent]) => (
            <div
              key={title}
              className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <div>
                <Icon className="text-primary" size={24} />
                <h2 className="mt-4 font-display text-3xl uppercase text-ink">
                  <Text en={title} ta={tamilTitle} />
                </h2>
                <div className="mt-2 text-sm font-semibold text-muted-foreground">
                  {renderContent}
                </div>
              </div>
            </div>
          ))}

          {/* Physical Address Card */}
          <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div>
              <MapPin className="text-primary" size={24} />
              <h2 className="mt-4 font-display text-3xl uppercase text-ink">
                <span className="en">VISIT US</span>
                <span className="ta tamil-text">எங்களை சந்திக்க</span>
              </h2>
              <div className="mt-2 text-sm leading-6 text-muted-foreground">
                <div className="en">
                  6 A, Aruljothipuram Jallimedu,
                  <br />
                  Ondipudur, Coimbatore,
                  <br />
                  Tamil Nadu — 641016
                  <br />
                </div>
                <div className="ta tamil-text">
                  6 A, அருள்ஜோதிபுரம் ஜல்லிமேடு,
                  <br />
                  ஒண்டிப்புதூர், கோயம்புத்தூர்,
                  <br />
                  தமிழ்நாடு — 641016
                  <br />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-orange-50 w-full text-xs font-bold uppercase tracking-wider h-10"
              >
                <a
                  href="https://maps.app.goo.gl/udfX5YSDCpLHArc49"
                  target="_blank"
                >
                  <span className="en">Get Directions →</span>
                  <span className="ta tamil-text">வழித்தடம் பெற →</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Booking Interactive Area - FIX 2 & FIX 5 */}
      <section className="py-12 bg-white border-t border-black/5">
        <div className="site-container">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-4xl uppercase leading-none text-ink mb-6">
              <Text en="Message us on WhatsApp" ta="வாட்ஸ்அப்பில் தொடர்புகொள்ள" />
            </h2>

            {/* Form row containing 2 dropdowns + desktop CTA button */}
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div className="grid grid-cols-2 gap-4">
                <label className="grid gap-2 text-sm font-bold text-ink">
                  <span>
                    <Text en="User type" ta="உங்களுக்கு என்ன தேவை?" />
                  </span>
                  <select
                    value={selection}
                    onChange={(event) =>
                      setSelection(event.target.value as InquiryKey)
                    }
                    className="min-h-11 w-full rounded border border-black/10 bg-[#F8F6F2] px-3 text-xs outline-none focus:border-primary"
                  >
                    {Object.entries(inquiryOptions).map(([value, option]) => (
                      <option key={value} value={value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2 text-sm font-bold text-ink">
                  <span>
                    <Text en="Inquiry type" ta="விசாரணை வகை" />
                  </span>
                  <select
                    value={selection}
                    onChange={(event) =>
                      setSelection(event.target.value as InquiryKey)
                    }
                    className="min-h-11 w-full rounded border border-black/10 bg-[#F8F6F2] px-3 text-xs outline-none focus:border-primary"
                  >
                    {Object.entries(inquiryOptions).map(([value, option]) => (
                      <option key={value} value={value}>
                        {option.tamil}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white h-11 flex items-center justify-center text-xs tracking-wider"
              >
                <a
                  href={buildWAUrl(selected.phone, selected.message)}
                  target="_blank"
                >
                  <MessageCircle size={16} className="mr-1 shrink-0" />
                  <Text en="💬 Chat on WhatsApp" ta="💬 வாட்ஸ்அப்பில் பேச" />
                </a>
              </Button>
            </div>

            {/* Tight Message Preview Block */}
            <div className="mt-5 rounded-xl border border-primary/20 bg-[#fff7ed]/50 p-4 text-sm leading-relaxed text-muted-foreground">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                <span className="en">Message Preview</span>
                <span className="ta tamil-text">செய்தி முன்னோட்டம்</span>
              </p>

              <strong className="text-ink text-xs block mb-1">
                <Text en={selected.label} ta={selected.tamil} />
              </strong>

              <pre className="max-h-[200px] overflow-y-auto mt-2 text-[11px] font-mono whitespace-pre-wrap leading-relaxed text-muted-foreground bg-white/80 p-3 rounded border border-orange-500/10">
                {selected.message}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section - Spacing optimized */}
      <section className="pb-16 pt-8">
        <div className="site-container">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 text-center md:text-left">
            📍 எங்கள் இருப்பிடம் — ஒண்டிப்புதூர், கோயம்புத்தூர்
          </h2>
          <div className="relative w-full overflow-hidden rounded-2xl border border-[rgba(249,115,22,0.3)] bg-white h-[260px] md:h-[420px]">
            <iframe
              title="Thalluvandi location - Ondipudur Coimbatore"
              src="https://maps.google.com/maps?q=2345%2BW4+Coimbatore,+Tamil+Nadu&z=17&output=embed"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              style={{ borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
