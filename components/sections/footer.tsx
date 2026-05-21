import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";

const groups = {
  Navigation: [
    ["Home", "/"],
    ["Explore Carts", "/explore"],
    ["How It Works", "/how-it-works"],
    ["Publish Cart", "/publish"]
  ],
  Roadmap: [
    ["Marketplace", "/marketplace"],
    ["City SEO Pages", "/marketplace"],
    ["Vendor Dashboard", "/marketplace"],
    ["Booking System", "/marketplace"]
  ],
  Contact: [
    ["Serving Tamil Nadu", "/contact"],
    ["hello@thalluvandi.in", "mailto:hello@thalluvandi.in"],
    ["WhatsApp Booking", "https://wa.me/919442763940"]
  ]
};

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white md:pb-0">
      <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Image src="/brand/full-logo.png" alt="Thalluvandi" width={168} height={82} className="h-20 w-auto transition hover:scale-105" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/68">
              Empowering Tamil Nadu’s next generation of street businesses with premium food cart rental infrastructure.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Mail, Phone].map((Icon, index) => (
                <span key={index} className="grid h-10 w-10 place-items-center rounded border border-white/12 text-white/74">
                  <Icon size={18} />
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {Object.entries(groups).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-white/66">
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="transition hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.14em] text-white/45 md:flex-row md:justify-between">
          <span>© 2026 Thalluvandi.in</span>
          <span>Legal, terms, privacy and vendor policy placeholders</span>
        </div>
      </div>
    </footer>
  );
}
