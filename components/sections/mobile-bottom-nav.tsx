"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, Search, Send } from "lucide-react";

const items = [
  ["Home", "முகப்பு", "/", Home],
  ["Explore", "வண்டிகள்", "/explore", Search],
  ["Publish", "என் வண்டி சேர்க்க", "/publish", Send],
  ["Contact", "தொடர்பு", "/contact", Phone],
] as const;

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-premium backdrop-blur-xl md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex h-16 items-stretch">
        {items.map(([label, tamil, href, Icon]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-bold text-center px-1 ${active ? "text-primary" : "text-muted"}`}
            >
              <Icon size={20} className="shrink-0" />
              <span className="en">{label}</span>
              <span
                className="ta tamil-text leading-tight truncate max-w-full"
                title={tamil}
              >
                {tamil}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
