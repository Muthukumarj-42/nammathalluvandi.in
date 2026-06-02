import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact Namma Thalluvandi | Ondipudur Coimbatore | WhatsApp & Phone",
  description:
    "Visit Namma Thalluvandi at Ondipudur, Coimbatore 641016. Serving Coimbatore and Tiruppur. WhatsApp +91 88382 92849. Monday to Saturday 8am to 8pm.",
  alternates: {
    canonical: "https://nammathalluvandi.in/contact"
  },
  openGraph: {
    title: "Contact Namma Thalluvandi | Ondipudur Coimbatore | WhatsApp & Phone",
    description: "Visit Namma Thalluvandi at Ondipudur, Coimbatore 641016. Serving Coimbatore and Tiruppur. WhatsApp +91 88382 92849. Monday to Saturday 8am to 8pm.",
    url: "https://nammathalluvandi.in/contact",
    siteName: "Namma Thalluvandi",
    images: [
      {
        url: "https://nammathalluvandi.in/brand/full-logo-with-background.png",
        width: 1200,
        height: 630,
        alt: "Namma Thalluvandi logo"
      }
    ],
    locale: "ta_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Namma Thalluvandi | Ondipudur Coimbatore | WhatsApp & Phone",
    description: "Visit Namma Thalluvandi at Ondipudur, Coimbatore 641016. Serving Coimbatore and Tiruppur. WhatsApp +91 88382 92849. Monday to Saturday 8am to 8pm.",
    images: ["https://nammathalluvandi.in/brand/full-logo-with-background.png"]
  }
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
