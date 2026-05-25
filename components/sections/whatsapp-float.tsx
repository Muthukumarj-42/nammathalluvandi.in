import { MessageCircle } from "lucide-react";
import { rentalTamilMessage } from "@/lib/utils";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWAUrl(WA_NUMBER, rentalTamilMessage)}
      target="_blank"
      className="fixed bottom-[114px] right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-white shadow-glow transition hover:scale-105 md:bottom-5"
      aria-label="WhatsApp booking"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
      <MessageCircle className="relative" size={26} />
    </a>
  );
}
