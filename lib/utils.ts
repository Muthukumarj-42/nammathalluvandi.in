import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_RENTAL = "919442763940";
export const WHATSAPP_PUBLISH = "917305514199";

export function whatsappUrl(message: string, phone = WHATSAPP_RENTAL) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const rentalTamilMessage = `வணக்கம், நான் தள்ளுவண்டி வாடகை பற்றி தெரிந்து கொள்ள விரும்புகிறேன்.

பெயர்:
மின்னஞ்சல்:
தேவைப்படும் வண்டி வகை:
பட்ஜெட்:
கால அவகாசம்:
மேலும் விவரம்:`;
