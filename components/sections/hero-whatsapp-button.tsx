"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingRulesModal } from "@/components/ui/booking-rules-modal";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

interface HeroWhatsappButtonProps {
  rentalTamilMessage: string;
}

export function HeroWhatsappButton({ rentalTamilMessage }: HeroWhatsappButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleConfirm = () => {
    const waUrl = buildWAUrl(WA_NUMBER, rentalTamilMessage);
    window.open(waUrl, "_blank");
    setModalOpen(false);
  };

  return (
    <>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-primary/45 text-ink cursor-pointer"
      >
        <a href="#" onClick={handleBookClick}>
          <MessageCircle size={18} />{" "}
          <span className="en">💬 Chat on WhatsApp</span>
          <span className="ta tamil-text">💬 WhatsApp-ல பேசலாம்</span>
        </a>
      </Button>

      <BookingRulesModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirm}
        cartName=""
      />
    </>
  );
}
