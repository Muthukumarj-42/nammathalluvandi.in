import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Footer } from "@/components/sections/footer";
import { MobileBottomNav } from "@/components/sections/mobile-bottom-nav";
import { Navbar } from "@/components/sections/navbar";
import { WhatsAppFloat } from "@/components/sections/whatsapp-float";

export const metadata: Metadata = {
  metadataBase: new URL("https://thalluvandi.in"),
  title: {
    default: "Thalluvandi.in | Premium Food Cart Rentals in Coimbatore",
    template: "%s | Thalluvandi.in"
  },
  description:
    "Premium food cart rentals for entrepreneurs in Coimbatore.",
  keywords: [
    "thalluvandi",
    "thalluvandi in coimbatore",
    "thalluvandi near me",
    "best thalluvandi for rental",
    "rental thallu vandi",
    "food cart rental",
    "push cart rental",
    "foodcart in coimbatore",
    "pushcart near me",
    "food cart rental coimbatore",
    "food cart for rent",
    "street food cart rental",
    "food pushcart rental"
  ],
  openGraph: {
    title: "Thalluvandi.in",
    description: "Start your food business without heavy investment.",
    url: "https://thalluvandi.in",
    siteName: "Thalluvandi.in",
    images: ["/brand/full-logo-with-background.png"],
    locale: "en_IN",
    type: "website"
  },
  icons: {
    icon: "/brand/text-logo.png",
    apple: "/brand/text-logo.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-lang="en">
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
