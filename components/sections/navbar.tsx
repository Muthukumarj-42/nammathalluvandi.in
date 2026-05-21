"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { rentalTamilMessage, whatsappUrl } from "@/lib/utils";

const nav = [
  ["Home", "/"],
  ["Explore", "/explore"],
  ["How It Works", "/how-it-works"],
  ["Publish Cart", "/publish"],
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#F8F6F2] text-ink transition-all duration-300 ${scrolled || open ? "shadow-sm backdrop-blur-xl" : ""}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Thalluvandi home">
          <Image src="/brand/text-logo.png" alt="Thalluvandi" width={230} height={88} priority className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={`text-xs font-bold uppercase tracking-[0.14em] transition hover:text-primary ${pathname === href ? "text-primary" : "text-ink/78"}`}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="default">
            <a href={whatsappUrl(rentalTamilMessage)} target="_blank">
              <MessageCircle size={18} /> Book on WhatsApp
            </a>
          </Button>
        </div>

        <button className="grid h-12 w-12 place-items-center rounded border border-black/15 md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={23} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, filter: "blur(8px)" }} animate={{ opacity: 1, filter: "blur(0px)" }} exit={{ opacity: 0, filter: "blur(8px)" }} className="fixed inset-0 z-50 bg-[#F8F6F2] p-5 text-ink md:hidden">
            <div className="flex items-center justify-between">
              <Image src="/brand/text-logo.png" alt="Thalluvandi" width={160} height={62} className="h-11 w-auto" />
              <button className="grid h-12 w-12 place-items-center rounded border border-black/15" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={22} />
              </button>
            </div>
            <div className="mt-12 grid gap-4">
              {nav.map(([label, href], index) => (
                <motion.div key={href} initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * 0.045 }}>
                  <Link href={href} onClick={() => setOpen(false)} className="block rounded-xl border border-black/10 bg-white px-5 py-4 font-display text-4xl uppercase tracking-wide text-ink shadow-sm">
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Button asChild className="mt-8 w-full" size="lg">
              <a href={whatsappUrl(rentalTamilMessage)} target="_blank">
                <MessageCircle size={18} /> Book on WhatsApp
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
