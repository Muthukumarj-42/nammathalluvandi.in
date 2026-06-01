"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCart, type Cart } from "@/lib/carts";

export function BookingFlow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const cartId = searchParams.get("cart");
  const cart = cartId ? getCart(cartId) : null;

  const [lang, setLang] = useState<"en" | "ta">("en");
  const [todayDate, setTodayDate] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "",
    details: "",
  });

  // Validation States
  const [phoneError, setPhoneError] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Sync language toggle
  useEffect(() => {
    if (typeof window === "undefined") return;
    const currentLang = document.documentElement.dataset.lang === "ta" ? "ta" : "en";
    setLang(currentLang);
    setTodayDate(new Date().toISOString().split("T")[0]);

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

  if (!cart) {
    return (
      <main className="bg-[#fffdf7] min-h-screen py-16 flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white border border-[#f97316]/20 p-8 rounded-2xl shadow-sm">
          <h2 className="font-display text-4xl text-ink uppercase mb-2">Cart Not Found</h2>
          <p className="text-muted text-sm mb-6">
            The food cart you are trying to book could not be found or has been removed.
          </p>
          <Button onClick={() => router.push("/explore")} size="lg" className="w-full">
            <ArrowLeft size={16} className="mr-2" /> Explore Carts
          </Button>
        </div>
      </main>
    );
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));

    if (id === "phone") {
      // Validate phone number (must be 10 digits)
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

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.replace(/\D/g, "").length === 10 &&
    formData.date !== "" &&
    formData.location.trim() !== "" &&
    agreed &&
    phoneError === "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const extraDetails = formData.details.trim() !== "" ? formData.details.trim() : "இல்லை";

    // Build message dynamically strictly in Tamil as required
    const message = `வணக்கம், நான் ${cart.nameTa} வாடகைக்கு எடுக்க விரும்புகிறேன்.

பெயர்: ${formData.name.trim()}
தொலைபேசி: ${formData.phone.trim()}
தேவையான தேதி: ${formData.date}
இடம் (கோவையில்): ${formData.location.trim()}
மேலும் விவரம்: ${extraDetails}

அனைத்து வாடகை விதிகளையும் படித்து ஒப்புக்கொண்டேன். ✓`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/918838292849?text=${encodedMessage}`;
    window.open(waUrl, "_blank");
  };

  const placeholders = {
    name: lang === "ta" ? "உங்கள் பெயர் உள்ளிடுங்கள்" : "Enter your full name",
    phone: lang === "ta" ? "உங்கள் கைபேசி எண்" : "Enter your mobile number",
    location: lang === "ta" ? "உங்கள் கடை / இடம்" : "Your shop/stall location",
    details: lang === "ta" ? "கூடுதல் தேவைகள் அல்லது கேள்விகள்?" : "Any special requirements or questions?",
  };

  return (
    <main className="bg-[#fffdf7] min-h-screen text-[#1a1208] pb-16 pt-6 md:pt-24">
      <div className="max-w-lg md:max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Navigation, Cart Card, Rules) */}
          <div className="md:col-span-5 flex flex-col gap-6 md:sticky md:top-24">
            
            {/* Navigation & Header */}
            <div className="flex flex-col gap-3">
              <button
                onClick={() => router.back()}
                className="flex items-center gap-1 text-[#78716c] hover:text-[#f97316] font-semibold text-sm w-fit transition"
              >
                <ArrowLeft size={16} />
                <span className="en">Back</span>
                <span className="ta tamil-text">பின்னால்</span>
              </button>

              <div>
                <h1 className="font-display text-4xl uppercase leading-none tracking-wide text-ink">
                  <span className="en">Book This Cart</span>
                  <span className="ta tamil-text text-3xl">வண்டி முன்பதிவு செய்யுங்கள்</span>
                </h1>
                <p className="mt-1 text-sm font-bold text-[#f97316] uppercase tracking-widest">
                  <span className="en">{cart.nameEn}</span>
                  <span className="ta tamil-text text-xs tracking-normal normal-case">{cart.nameTa}</span>
                </p>
              </div>
            </div>

            {/* Cart Summary Card */}
            <div className="overflow-hidden rounded-2xl border border-[#f97316]/20 bg-white p-4 shadow-sm flex flex-col gap-4 transition duration-300 hover:shadow-premium">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#fff7ed]">
                <img
                  src={cart.images[0]}
                  alt={cart.nameEn}
                  className="object-cover absolute inset-0 w-full h-full"
                />
                {/* Availability Badge */}
                <span
                  className={`absolute top-2 left-2 z-10 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    cart.availableCount >= 2
                      ? "bg-green-500 text-white"
                      : cart.availableCount === 1
                        ? "bg-amber-400 text-black"
                        : "bg-red-500 text-white"
                  }`}
                >
                  {cart.availableCount >= 2
                    ? "AVAILABLE"
                    : cart.availableCount === 1
                      ? "LIMITED"
                      : "BOOKED"}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="font-display text-2xl uppercase leading-tight text-ink">
                  <span className="en">{cart.nameEn}</span>
                  <span className="ta tamil-text leading-tight">{cart.nameTa}</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mt-2 border-t border-[#e5e0d8] pt-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#78716c]">
                      <span className="en">DAILY PRICE</span>
                      <span className="ta tamil-text">ஒரு நாள் வாடகை</span>
                    </p>
                    <p className="font-display text-2xl font-bold text-[#f97316] mt-0.5">
                      ₹{cart.pricePerDay}/day
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#78716c]">
                      <span className="en">DEPOSIT AMOUNT</span>
                      <span className="ta tamil-text">முன்பணம்</span>
                    </p>
                    <p className="font-display text-2xl font-bold text-ink mt-0.5">
                      ₹{cart.depositAmount} <span className="text-[10px] font-sans font-semibold text-[#78716c] uppercase tracking-normal">({lang === "ta" ? "திரும்பப் பெறலாம்" : "Refundable"})</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rental Rules (Desktop Only) */}
            <div className="hidden md:block">
              <RentalRules lang={lang} />
            </div>

          </div>

          {/* Right Column (Form Details) */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-[#f97316]/10 shadow-premium-dark space-y-5">
              <h2 className="font-display text-3xl uppercase tracking-wide text-ink border-b border-[#e5e0d8] pb-2">
                <span className="en">Your Details</span>
                <span className="ta tamil-text text-2xl">உங்கள் விவரங்கள்</span>
              </h2>

              {/* Field 1: Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-1 block">
                  <span className="en">Full Name *</span>
                  <span className="ta tamil-text">பெயர் *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={placeholders.name}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-base outline-none transition"
                />
              </div>

              {/* Field 2: Phone */}
              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-semibold mb-1 block">
                  <span className="en">Phone Number *</span>
                  <span className="ta tamil-text">தொலைபேசி எண் *</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={placeholders.phone}
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

              {/* Field 3: Date */}
              <div className="flex flex-col">
                <label htmlFor="date" className="text-sm font-semibold mb-1 block">
                  <span className="en">Required Date *</span>
                  <span className="ta tamil-text">தேவையான தேதி *</span>
                </label>
                <input
                  type="date"
                  id="date"
                  required
                  min={todayDate}
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-base outline-none transition"
                />
              </div>

              {/* Field 4: Location */}
              <div className="flex flex-col">
                <label htmlFor="location" className="text-sm font-semibold mb-1 block">
                  <span className="en">Location in Coimbatore *</span>
                  <span className="ta tamil-text">இடம் (கோவையில்) *</span>
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={placeholders.location}
                  className="w-full h-12 border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl px-4 bg-white text-base outline-none transition"
                />
              </div>



              {/* Field 6: Details */}
              <div className="flex flex-col">
                <label htmlFor="details" className="text-sm font-semibold mb-1 block">
                  <span className="en">Additional Details (Optional)</span>
                  <span className="ta tamil-text">மேலும் விவரம் (விருப்பம்)</span>
                </label>
                <textarea
                  id="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={placeholders.details}
                  className="w-full border border-[#e5e0d8] focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/40 rounded-xl p-4 bg-white text-base outline-none transition resize-none"
                />
              </div>

              {/* Rental Rules (Mobile Only) */}
              <div className="block md:hidden">
                <RentalRules lang={lang} />
              </div>

              {/* SECTION E — CHECKBOX + SUBMIT */}
              <div className="pt-4 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-[#e5e0d8] bg-white text-[#f97316] focus:ring-[#f97316] focus:ring-offset-white transition"
                  />
                  <span className="text-sm text-[#78716c] font-semibold group-hover:text-[#1a1208] transition">
                    <span className="en">I have read and agree to all rental terms</span>
                    <span className="ta tamil-text text-[11px]">அனைத்து வாடகை விதிகளையும் படித்து ஒப்புக்கொள்கிறேன்</span>
                  </span>
                </label>

                <Button
                  type="submit"
                  disabled={!isFormValid}
                  className={`w-full h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2 transition duration-200 ${
                    !isFormValid ? "opacity-40 cursor-not-allowed" : ""
                  }`}
                >
                  <MessageCircle size={20} className="shrink-0" />
                  <span className="en">Continue to WhatsApp →</span>
                  <span className="ta tamil-text text-sm tracking-normal normal-case">WhatsApp-ல் தொடரவும் →</span>
                </Button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}

function RentalRules({ lang }: { lang: "en" | "ta" }) {
  return (
    <div className="pt-4">
      <h3 className="text-base font-bold mb-3 border-b border-[#e5e0d8] pb-1">
        <span className="en">Rental Terms</span>
        <span className="ta tamil-text">வாடகை விதிகள்</span>
      </h3>

      {/* Rules Box */}
      <div className="bg-orange-50 rounded-xl p-4 border border-orange-200 space-y-1.5">
        
        {/* EN Rules List */}
        <div className="en space-y-3">
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">1.</span>
            <span>Cart must be rented in the name of the person running the business.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">2.</span>
            <span>Picking up and returning the cart is entirely the renter's responsibility.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">3.</span>
            <span>Any damage to the cart must be paid for by the renter.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">4.</span>
            <span>Return the cart clean. ₹500 will be deducted for cleaning if returned dirty.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">5.</span>
            <span>Documents will be returned only after the cart is safely returned.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">6.</span>
            <span>Violation of rules will result in legal action.</span>
          </div>
          {/* Rule 7 Highlighted */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl font-medium text-sm leading-relaxed border-y border-r border-[#f97316]/10">
            <span className="text-[#f97316] font-bold mr-1 block text-xs uppercase tracking-wider mb-0.5">Rule 7 - Important</span>
            <span>Minimum rental period is 1 month. Early return will still be charged for the full month.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">8.</span>
            <span>The renter is responsible for transport while picking up and returning the cart.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed">
            <span className="text-[#f97316] font-bold mr-2">9.</span>
            <span>Advance amount will be refunded within 1 week of returning the cart.</span>
          </div>
        </div>

        {/* TA Rules List */}
        <div className="ta tamil-text space-y-3">
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">1.</span>
            <span>வண்டியில் வியாபாரம் செய்பவர் பேரில் தான் வண்டி எடுக்க வேண்டும்.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">2.</span>
            <span>வண்டி எடுத்து செல்வதும் ஒப்படைப்பதும் தங்கள் பொறுப்பு.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">3.</span>
            <span>வண்டி சேதம் அடைந்தால் அதற்குண்டான பணம் செலுத்த வேண்டும்.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">4.</span>
            <span>வண்டியை சுத்தமாக கழுவி கொண்டு வர வேண்டும். இல்லையெனில் ரூ.500 பிடித்தம் செய்யப்படும்.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">5.</span>
            <span>வண்டியை பத்திரமாக ஒப்படைத்த பின்பே ஆவணங்கள் திரும்ப தரப்படும்.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">6.</span>
            <span>விதிகளை மீறினால் கோர்ட் நடவடிக்கை எடுக்கப்படும்.</span>
          </div>
          {/* Rule 7 Highlighted */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-xl font-medium text-sm leading-relaxed border-y border-r border-[#f97316]/10">
            <span className="text-[#f97316] font-bold mr-1 block text-xs uppercase tracking-wider mb-0.5">விதி 7 - முக்கிய குறிப்பு</span>
            <span>குறைந்தபட்சம் 1 மாதம் வாடகை வைத்துக்கொள்ள வேண்டும். முன்னதாக திரும்பினாலும் 1 மாத வாடகை வசூலிக்கப்படும்.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed pb-2 border-b border-orange-100">
            <span className="text-[#f97316] font-bold mr-2">8.</span>
            <span>வண்டி எடுத்துச் செல்லும் போதும் திரும்பி தரும் போதும் டெம்போ வாடகை தங்கள் பொறுப்பு.</span>
          </div>
          <div className="flex items-start text-sm leading-relaxed">
            <span className="text-[#f97316] font-bold mr-2">9.</span>
            <span>அட்வான்ஸ் தொகை வண்டி திரும்பிய 1 வாரத்திற்குள் தரப்படும்.</span>
          </div>
        </div>

      </div>

      {/* Docs Note */}
      <p className="text-xs text-muted-foreground italic mt-2">
        <span className="en">Bring with you: Aadhaar Card, Ration Card, PAN Card, 1 Passport Photo</span>
        <span className="ta tamil-text block text-[11px] not-italic">கொண்டு வர வேண்டியது: ஆதார் கார்டு, ரேசன் கார்டு, பான் கார்டு, போட்டோ 1</span>
      </p>
    </div>
  );
}
