import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
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
  title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore",
  description:
    "Rent a thallu vandi in Coimbatore from ₹50/day. 65+ carts — stove, roof, premium variants. WhatsApp booking, same day response. தளவண்டி வாடகை கோவை",
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
    title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore",
    description: "Rent a thallu vandi in Coimbatore from ₹50/day. 65+ carts — stove, roof, premium variants. WhatsApp booking, same day response. தளவண்டி வாடகை கோவை",
    url: "https://nammathalluvandi.in",
    siteName: "Namma Thalluvandi",
    images: [
      {
        url: "https://nammathalluvandi.in/brand/full-logo-with-background.webp",
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
    title: "Namma Thalluvandi | Thallu Vandi Rental Coimbatore",
    description: "Rent a thallu vandi in Coimbatore from ₹50/day. 65+ carts — stove, roof, premium variants. WhatsApp booking, same day response. தளவண்டி வாடகை கோவை",
    images: ["https://nammathalluvandi.in/brand/full-logo-with-background.webp"]
  },
  icons: {
    icon: "/brand/text-logo.webp",
    apple: "/brand/text-logo.webp"
  },
  verification: {
    google: "01461042ed3c0564",
  }
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${notoTamil.variable}`}>
      <body className="font-sans antialiased">
        {/* Google Analytics 4 Setup - REPLACE_THIS_WITH_YOUR_GA4_MEASUREMENT_ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZKJMPC7793"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZKJMPC7793');
          `}
        </Script>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
        <MobileBottomNav />
      </body>
    </html>
  );
}
