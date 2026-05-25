"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { rentalTamilMessage } from "@/lib/utils";
import { LanguageToggle } from "@/components/sections/language-toggle";
import { WA_NUMBER, buildWAUrl } from "@/config/whatsapp";

const nav = [
  ["Home", "முகப்பு", "/"],
  ["Explore", "வண்டிகள்", "/explore"],
  ["How It Works", "எப்படி?", "/how-it-works"],
  ["Publish Cart", "உங்கள் வண்டியை பதிவு செய்யுங்கள்", "/publish"],
  ["About", "எங்களைப் பற்றி", "/about"],
  ["Contact", "தொடர்பு", "/contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile Header (below 768px) */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-black/10 bg-[#F8F6F2] px-4 md:hidden">
        <Link href="/" className="flex items-center gap-2" aria-label="Thalluvandi home">
          <Image 
            src="/brand/full-logo.png" 
            alt="Thalluvandi food cart rental Tamil Nadu logo" 
            width={32} 
            height={32} 
            className="h-8 w-auto" 
            priority
          />
          <span className="font-display text-2xl font-black uppercase tracking-wide text-ink">
            THALLUVANDI
          </span>
        </Link>
      </header>

      {/* Desktop Header (768px+) */}
      <header className={`fixed inset-x-0 top-0 z-50 hidden border-b border-black/10 bg-[#F8F6F2] text-ink transition-all duration-300 md:block ${scrolled ? "shadow-sm backdrop-blur-xl" : ""}`}>
        <div className="site-container flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" aria-label="Thalluvandi home">
            <Image src="/brand/text-logo.png" alt="Thalluvandi food cart rental Tamil Nadu logo" width={230} height={88} priority className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map(([label, tamil, href]) => (
              <Link key={href} href={href} className={`text-xs font-bold uppercase tracking-[0.14em] transition hover:text-primary ${pathname === href ? "text-primary" : "text-ink/78"}`}>
                <span className="en">{label}</span>
                <span className="ta tamil-text">{tamil}</span>
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageToggle />
            <Button asChild size="default">
              <a href={buildWAUrl(WA_NUMBER, rentalTamilMessage)} target="_blank">
                <MessageCircle size={18} />
                <span className="en">💬 Chat on WhatsApp</span>
                <span className="ta tamil-text">💬 WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
