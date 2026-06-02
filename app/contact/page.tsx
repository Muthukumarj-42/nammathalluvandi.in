"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CALL_PHONE,
  DISPLAY_CALL_PHONE,
  DISPLAY_RENTAL_WHATSAPP,
} from "@/lib/utils";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta tamil-text">{ta}</span>
    </>
  );
}

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "ta">("en");

  // Sync language toggle dynamically
  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentLang = document.documentElement.dataset.lang === "ta" ? "ta" : "en";
    setLang(currentLang);

    const observer = new MutationObserver(() => {
      const updatedLang = document.documentElement.dataset.lang === "ta" ? "ta" : "en";
      setLang(updatedLang);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-lang"],
    });

    return () => observer.disconnect();
  }, []);

  // Rent Form State
  const [rentFormData, setRentFormData] = useState({
    name: "",
    phone: "",
    businessType: "Tea", // Tea, Juice, FastFood, Snacks, Other
    need: "rent", // rent, custom, other
    location: "",
    details: "",
  });

  const [phoneError, setPhoneError] = useState("");

  const handleRentInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setRentFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "phone") {
      const digits = value.replace(/\D/g, "");
      if (value && digits.length !== 10) {
        setPhoneError(
          lang === "ta"
            ? "தொலைபேசி எண் 10 இலக்கங்களாக இருக்க வேண்டும்"
            : "Phone number must be exactly 10 digits"
        );
      } else {
        setPhoneError("");
      }
    }
  };

  const isRentFormValid =
    rentFormData.name.trim() !== "" &&
    rentFormData.phone.replace(/\D/g, "").length === 10 &&
    rentFormData.location.trim() !== "" &&
    phoneError === "";

  // This message goes to 91 88382 92849, which must ALWAYS be in Tamil
  const rentCompiledMessage = useMemo(() => {
    const extraDetails = rentFormData.details.trim() !== "" ? rentFormData.details.trim() : "இல்லை";
    
    const needText = 
      rentFormData.need === "rent" ? "வண்டி வாடகைக்கு எடுக்க" :
      rentFormData.need === "custom" ? "பிரத்யேக வண்டி தயாரிக்க/வாங்க" : "பொதுவான கேள்விகள்";
      
    const businessText =
      rentFormData.businessType === "Tea" ? "டீ / காபி கடை" :
      rentFormData.businessType === "Juice" ? "ஜூஸ் / மில்க்ஷேக் வண்டி" :
      rentFormData.businessType === "FastFood" ? "ஃபாஸ்ட் ஃபுட் / காரசார கடை" :
      rentFormData.businessType === "Snacks" ? "ஸ்நாக்ஸ் / சாட் வண்டி" : "மற்ற உணவு தொழில்";

    return `வணக்கம் தள்ளுவண்டி குழுவினரே,

நான் ஒரு புதிய விசாரணை செய்ய விரும்புகிறேன்:

பெயர்: ${rentFormData.name.trim()}
கைபேசி எண்: ${rentFormData.phone.trim()}
தொழில் வகை: ${businessText}
தேவை: ${needText}
இடம் (கோவையில்): ${rentFormData.location.trim()}
கூடுதல் விவரம் / கேள்வி: ${extraDetails}`;
  }, [rentFormData]);

  const handleRentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRentFormValid) return;
    
    const waUrl = buildWAUrl(WA_NUMBER, rentCompiledMessage);
    window.open(waUrl, "_blank");
  };

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
              en="Contact Thalluvandi"
              ta="தொடர்பு கொள்ள — ஒண்டிப்புதூர், கோயம்புத்தூர்"
            />
          </h1>
          <p className="mt-6 max-w-[680px] text-lg leading-8 text-muted">
            <Text
              en="Reach out to us for premium food cart rentals and custom manufacturing in Coimbatore."
              ta="கோயம்புத்தூரில் தள்ளுவண்டி வாடகை மற்றும் பிரத்யேக வண்டிகள் தயாரிக்க எங்களை தொடர்பு கொள்ளவும்."
            />
          </p>
        </div>
      </section>

      {/* Main Info Cards */}
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
                  href="https://maps.app.goo.gl/PXkph8mPx1ZwyMb26"
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

      {/* WhatsApp Booking Interactive Form */}
      <section className="py-12 bg-white border-t border-black/5">
        <div className="site-container max-w-3xl">
          <div className="rounded-2xl border border-black/10 bg-[#fffdf7] p-6 md:p-10 shadow-premium flex flex-col gap-6">
            
            <div className="text-center">
              <h2 className="font-display text-4xl uppercase leading-none text-ink">
                <Text en="Rent a Food Cart" ta="உங்களின் விவரங்கள்" />
              </h2>
              <p className="mt-1 text-sm text-[#f97316] font-bold uppercase tracking-wider">
                <Text en="Direct WhatsApp Connection" ta="வாட்ஸ்அப் நேரடி முன்பதிவு" />
              </p>
            </div>

            <form onSubmit={handleRentSubmit} className="space-y-4">
              
              {/* Field 1: Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-1 block">
                  <Text en="Full Name *" ta="பெயர் *" />
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={rentFormData.name}
                  onChange={handleRentInputChange}
                  placeholder={lang === "ta" ? "உங்கள் முழு பெயர்" : "Enter your full name"}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-base outline-none transition"
                />
              </div>

              {/* Field 2: Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold mb-1 block">
                  <Text en="Phone Number *" ta="கைபேசி எண் *" />
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={rentFormData.phone}
                  onChange={handleRentInputChange}
                  placeholder={lang === "ta" ? "கைபேசி எண் (10 இலக்கங்கள்)" : "Enter your mobile number"}
                  className={`w-full h-12 border focus:ring-2 rounded-xl px-4 bg-white text-base outline-none transition ${
                    phoneError
                      ? "border-red-500 focus:border-red-500 focus:ring-red-500/40"
                      : "border-[#e5e0d8] focus:border-[#f97316] focus:ring-[#f97316]/40"
                  }`}
                />
                {phoneError && (
                  <span className="text-xs text-red-500 mt-1 font-semibold">
                    {phoneError}
                  </span>
                )}
              </div>

              {/* Field 3: Business Type Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="businessType" className="text-sm font-semibold mb-1 block">
                  <Text en="Business Type *" ta="தொழில் வகை *" />
                </label>
                <select
                  id="businessType"
                  value={rentFormData.businessType}
                  onChange={handleRentInputChange}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-sm outline-none transition cursor-pointer"
                >
                  {lang === "ta" ? (
                    <>
                      <option value="Tea">டீ / காபி கடை</option>
                      <option value="Juice">ஜூஸ் / மில்க்ஷேக் வண்டி</option>
                      <option value="FastFood">ஃபாஸ்ட் ஃபுட் / காரசார கடை</option>
                      <option value="Snacks">ஸ்நாக்ஸ் / சாட் வண்டி</option>
                      <option value="Other">மற்ற உணவு தொழில்</option>
                    </>
                  ) : (
                    <>
                      <option value="Tea">Tea / Coffee Stall</option>
                      <option value="Juice">Juice / Milkshake Cart</option>
                      <option value="FastFood">Fast Food / Chinese Stall</option>
                      <option value="Snacks">Snacks / Chaat Cart</option>
                      <option value="Other">Other Business</option>
                    </>
                  )}
                </select>
              </div>

              {/* Field 4: What do you need Dropdown */}
              <div className="flex flex-col">
                <label htmlFor="need" className="text-sm font-semibold mb-1 block">
                  <Text en="What do you need? *" ta="உங்களுக்கு என்ன தேவை? *" />
                </label>
                <select
                  id="need"
                  value={rentFormData.need}
                  onChange={handleRentInputChange}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-sm outline-none transition cursor-pointer"
                >
                  {lang === "ta" ? (
                    <>
                      <option value="rent">தள்ளுவண்டி வாடகைக்கு எடுக்க</option>
                      <option value="custom">பிரத்யேக வண்டி தயாரிக்க/வாங்க</option>
                      <option value="other">பொதுவான கேள்விகள்</option>
                    </>
                  ) : (
                    <>
                      <option value="rent">Rent a Food Cart</option>
                      <option value="custom">Custom Cart Design/Order</option>
                      <option value="other">General Question</option>
                    </>
                  )}
                </select>
              </div>

              {/* Field 5: Location in Coimbatore */}
              <div className="flex flex-col">
                <label htmlFor="location" className="text-sm font-semibold mb-1 block">
                  <Text en="Location in Coimbatore *" ta="இடம் (கோவையில்) *" />
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  value={rentFormData.location}
                  onChange={handleRentInputChange}
                  placeholder={lang === "ta" ? "எ.கா: ஒண்டிப்புதூர், காந்திபுரம்" : "e.g. Ondipudur, Gandhipuram"}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-base outline-none transition"
                />
              </div>

              {/* Field 6: Details Message */}
              <div className="flex flex-col">
                <label htmlFor="details" className="text-sm font-semibold mb-1 block">
                  <Text en="Enquiry Message (Optional)" ta="விவரங்கள் / கேள்விகள் (விருப்பம்)" />
                </label>
                <textarea
                  id="details"
                  rows={4}
                  value={rentFormData.details}
                  onChange={handleRentInputChange}
                  placeholder={lang === "ta" ? "வண்டி அளவு, குறிப்பிட்ட தேதி, அல்லது உங்கள் கேள்விகள்..." : "Cart size preference, required dates, or other questions..."}
                  className="w-full border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl p-4 bg-white text-base outline-none transition resize-none"
                />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={!isRentFormValid}
                className={`w-full h-14 mt-4 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition duration-200 ${
                  !isRentFormValid ? "opacity-40 cursor-not-allowed" : ""
                }`}
              >
                <MessageCircle size={20} className="shrink-0" />
                <Text en="Send Rental Enquiry (WhatsApp) →" ta="வாடகை முன்பதிவு கேள்வியை அனுப்பவும் (WhatsApp) →" />
              </Button>

            </form>
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="pb-16 pt-8">
        <div className="site-container">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#f97316] mb-3 text-center md:text-left">
            <Text en="📍 Our Location — Ondipudur, Coimbatore" ta="📍 எங்கள் இருப்பிடம் — ஒண்டிப்புதூர், கோயம்புத்தூர்" />
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
