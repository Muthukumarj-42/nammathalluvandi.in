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
  metadataBase: new URL("https://thethalluvandi.in"),
  title: "Thalluvandi | Food Cart Rental Tamil Nadu | தளவண்டி வாடகை",
  description:
    "Tamil Nadu's trusted food cart rental service. 66+ carts in Coimbatore — with stove, roof, premium variants. WhatsApp booking. தளவண்டி வாடகை | ₹100/day onwards.",
  keywords: [
    "thalluvandi",
    "thallu vandi",
    "thalluvandi rental",
    "thalluvandi.in",
    "thallu vandi rent",
    "food cart rental tamil nadu",
    "food cart for rent tamil nadu",
    "push cart rental tamil nadu",
    "street food cart rental tamil nadu",
    "thallu vandi rent tamil nadu",
    "food cart rental near me",
    "food cart rental coimbatore",
    "food cart rental chennai",
    "food cart rental madurai",
    "food cart rental salem",
    "food cart rental erode",
    "food cart rental trichy",
    "food cart rental tirunelveli",
    "food cart rental vellore",
    "food cart rental dindigul",
    "thallu vandi rent coimbatore",
    "தளவண்டி வாடகை",
    "உணவு வண்டி வாடகை தமிழ்நாடு",
    "தளவண்டி வாடகை கோயம்புத்தூர்",
    "தள்ளு வண்டி வாடகை"
  ],
  alternates: {
    canonical: "https://thethalluvandi.in"
  },
  openGraph: {
    title: "Thalluvandi | Food Cart Rental Tamil Nadu | தளவண்டி வாடகை",
    description: "Tamil Nadu's trusted food cart rental service. 66+ carts in Coimbatore — with stove, roof, premium variants. WhatsApp booking. தளவண்டி வாடகை | ₹100/day onwards.",
    url: "https://thethalluvandi.in",
    siteName: "Thalluvandi",
    images: [
      {
        url: "/brand/full-logo-with-background.png",
        width: 1200,
        height: 630,
        alt: "Thalluvandi food cart rental Tamil Nadu logo"
      }
    ],
    locale: "ta_IN",
    alternateLocale: ["en_IN"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Thalluvandi | Food Cart Rental Tamil Nadu | தளவண்டி வாடகை",
    description: "Tamil Nadu's trusted food cart rental service. 66+ carts in Coimbatore — with stove, roof, premium variants.",
    images: ["/brand/full-logo-with-background.png"]
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
