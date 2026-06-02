import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { MobileBottomNav } from "@/components/sections/mobile-bottom-nav";
import { Navbar } from "@/components/sections/navbar";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";
import { Bebas_Neue, DM_Sans, Noto_Sans_Tamil } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const notoTamil = Noto_Sans_Tamil({
  weight: ["400", "500", "700"],
  subsets: ["tamil"],
  variable: "--font-noto-tamil",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nammathalluvandi.in"),
  title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore & Tiruppur | நம்ம தளவண்டி வாடகை",
  description:
    "Coimbatore's trusted thallu vandi rental. 60+ carts with stove, roof and premium variants. Thallu vandi vadagai from ₹100/day. Serving Coimbatore and Tiruppur. WhatsApp booking — same day response.",
  keywords: [
    "namma thalluvandi",
    "நம்ம தளவண்டி",
    "nammathalluvandi.in",
    "thallu vandi rental coimbatore",
    "thallu vandi rental tiruppur",
    "thallu vandi vadagai coimbatore",
    "thallu vandi vadagai tiruppur",
    "food cart rental coimbatore",
    "food cart rental tiruppur",
    "thalluvandi rent coimbatore",
    "thalluvandi rent tiruppur",
    "push cart rental coimbatore",
    "street food cart coimbatore",
    "உணவு வண்டி வாடகை கோயம்புத்தூர்",
    "தளவண்டி வாடகை திருப்பூர்",
    "தள்ளு வண்டி வாடகை கோவை",
    "தள்ளு வண்டி வாடகை திருப்பூர்",
    "நம்ம தளவண்டி கோவை",
    "food cart rental near me coimbatore",
    "push cart vadagai coimbatore"
  ],
  alternates: {
    canonical: "https://nammathalluvandi.in"
  },
  openGraph: {
    title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore & Tiruppur | நம்ம தளவண்டி வாடகை",
    description: "Coimbatore's trusted thallu vandi rental. 60+ carts with stove, roof and premium variants. Thallu vandi vadagai from ₹100/day. Serving Coimbatore and Tiruppur. WhatsApp booking — same day response.",
    url: "https://nammathalluvandi.in",
    siteName: "Namma Thalluvandi",
    images: [
      {
        url: "https://nammathalluvandi.in/brand/full-logo-with-background.png",
        width: 1200,
        height: 630,
        alt: "Namma Thalluvandi food cart rental logo"
      }
    ],
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore & Tiruppur | நம்ம தளவண்டி வாடகை",
    description: "Coimbatore's trusted thallu vandi rental. 60+ carts with stove, roof and premium variants.",
    images: ["https://nammathalluvandi.in/brand/full-logo-with-background.png"]
  },
  icons: {
    icon: "/brand/text-logo.png",
    apple: "/brand/text-logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${notoTamil.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <MobileBottomNav />
      </body>
    </html>
  );
}
