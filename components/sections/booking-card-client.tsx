"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingRulesModal } from "@/components/ui/booking-rules-modal";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

interface BookingCardClientProps {
  bookingMsg: string;
  cartNameEn: string;
  cartNameTa: string;
}

export function BookingCardClient({
  bookingMsg,
  cartNameEn,
  cartNameTa,
}: BookingCardClientProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "ta">("en");

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

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleConfirm = () => {
    const waUrl = buildWAUrl(WA_NUMBER, bookingMsg);
    window.open(waUrl, "_blank");
    setModalOpen(false);
  };

  const displayCartName = lang === "ta" ? cartNameTa : cartNameEn;

  return (
    <>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
        <span className="en">Booking inquiry</span>
        <span className="ta tamil-text">முன்பதிவு விசாரணை</span>
      </p>
      <h2 className="mt-3 font-display text-4xl uppercase text-ink">
        <span className="en">Reserve this cart</span>
        <span className="ta tamil-text">இந்த வண்டியை புக் செய்ய</span>
      </h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        <span className="en">
          Confirm availability, rental period, location, delivery, and setup details on WhatsApp.
        </span>
        <span className="ta tamil-text">
          கோயம்புத்தூரில் தள்ளுவண்டி கிடைக்கும் தேதி, இடம் மற்றும் டெலிவரி விவரங்களை வாட்ஸ்அப்பில் பேசி உறுதி செய்து கொள்ளவும்.
        </span>
      </p>
      
      <Button
        asChild
        size="lg"
        className="mt-6 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white cursor-pointer relative z-20"
      >
        <a href="#" onClick={handleBookClick}>
          <MessageCircle size={18} />{" "}
          <span className="en">🛒 Book This Cart</span>
          <span className="ta tamil-text">🛒 முன்பதிவு செய்ய</span>
        </a>
      </Button>

      <div className="mt-6 rounded-xl border border-dashed border-black/18 bg-[#F8F6F2] p-4 text-xs leading-relaxed text-muted-foreground">
        <span className="en">Live availability is confirmed on WhatsApp before booking.</span>
        <span className="ta tamil-text">முன்பதிவு செய்வதற்கு முன்பாக வண்டியின் இருப்பு வாட்ஸ்அப்பில் உறுதிப்படுத்தப்படும்.</span>
      </div>

      <BookingRulesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        cartName={displayCartName}
      />
    </>
  );
}
