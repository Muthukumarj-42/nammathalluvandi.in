import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_RENTAL = "918838292849";
export const WHATSAPP_PUBLISH = "917305514199";
export const CALL_PHONE = "+919442763940";
export const DISPLAY_CALL_PHONE = "+91 94427 63940";
export const DISPLAY_RENTAL_WHATSAPP = "+91 88382 92849";
export const DISPLAY_PUBLISH_WHATSAPP = "+91 73055 14199";

export function whatsappUrl(message: string, phone = WHATSAPP_RENTAL) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const rentalTamilMessage = `Hi, I want to rent a food cart from Thalluvandi.
Name:
Phone:
Location in Coimbatore:
Rental start date:
Duration (days):
Any questions:`;

export function cartBookingMessage(cartTitle: string) {
  const questions = cartTitle === "Premium Fast Food Cart" ? "\nAny questions:" : "";
  return `Hi, I want to rent the *${cartTitle}* from Thalluvandi.
Name:
Phone:
Location in Coimbatore:
Rental start date:
Duration (days):${questions}`;
}

export const customCartMessage = `Hi, I want to order a *Custom Food Cart* from Thalluvandi.
Name:
Phone:
Cart Size / Dimensions (if known):
Stove needed? (Yes/No):
Top cover needed? (Yes/No):
Preferred color/branding:
Budget range: ₹
Delivery location in Coimbatore:
Any special requirements:`;

export const publishCartMessage = `Hi, I want to list my cart on Thalluvandi.
Name:
Phone:
Number of Carts:
Cart Type:
Expected Rent per day: ₹
Location:
(I will send photos on WhatsApp)`;
