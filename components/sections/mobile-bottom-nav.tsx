"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MessageCircle, Search, Send, UserRound } from "lucide-react";
import { rentalTamilMessage, whatsappUrl } from "@/lib/utils";

const items = [
  ["Home", "/", Home],
  ["Explore", "/explore", Search],
  ["Publish", "/publish", Send],
  ["About", "/about", UserRound]
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-3 left-3 right-3 z-50 rounded-2xl border border-black/10 bg-white/95 px-2 py-2 shadow-premium backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
      <div className="grid grid-cols-5 items-center gap-1">
        {items.map(([label, href, Icon]) => (
          <Link key={href} href={href} className={`grid min-h-14 place-items-center rounded-xl text-[11px] font-bold ${pathname === href ? "bg-primary text-white" : "text-muted"}`}>
            <Icon size={20} />
            <span>{label}</span>
          </Link>
        ))}
        <a href={whatsappUrl(rentalTamilMessage)} target="_blank" className="grid min-h-14 place-items-center rounded-xl bg-accent text-[11px] font-bold text-white">
          <MessageCircle size={20} />
          <span>Book</span>
        </a>
      </div>
    </nav>
  );
}
