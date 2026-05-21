import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { DISPLAY_CALL_PHONE, DISPLAY_RENTAL_WHATSAPP, rentalTamilMessage, whatsappUrl } from "@/lib/utils";

const groups = {
  Navigation: [
    ["Home", "முகப்பு", "/"],
    ["Explore Carts", "வண்டிகளை பாருங்க", "/explore"],
    ["How It Works", "எப்படி rent பண்ணுவது?", "/how-it-works"],
    ["Publish Cart", "வண்டி list பண்ணுங்க", "/publish"]
  ],
  Roadmap: [
    ["Currently in Coimbatore", "இப்போ கோவையில்", "/contact"],
    ["Expanding across Tamil Nadu", "தமிழ்நாடு முழுக்க விரைவில்", "/contact"],
    ["Vendor Dashboard", "Vendor dashboard", "/marketplace"],
    ["Booking System", "Booking system", "/marketplace"]
  ],
  Contact: [
    [DISPLAY_CALL_PHONE, DISPLAY_CALL_PHONE, "tel:+919442763940"],
    [DISPLAY_RENTAL_WHATSAPP, DISPLAY_RENTAL_WHATSAPP, whatsappUrl(rentalTamilMessage)],
    ["hello@thalluvandi.in", "hello@thalluvandi.in", "mailto:hello@thalluvandi.in"]
  ]
};

export function Footer() {
  return (
    <footer className="border-t border-[rgba(234,108,0,0.15)] bg-[#fffdf7] pb-24 text-[#1a1208] md:pb-0">
      <div className="site-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Image src="/brand/full-logo-with-background.png" alt="Thalluvandi" width={168} height={82} className="h-20 w-auto transition hover:scale-105" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-[#1a1208]/70">
              <span className="en">Food cart rentals for Coimbatore vendors. Expanding across Tamil Nadu.</span>
              <span className="ta">கோவையில் தொழில் தொடங்க வண்டி வேண்டுமா? நம்பிக்கையா பேசுங்க. தமிழ்நாடு முழுக்க விரைவில் வரோம்.</span>
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Mail, Phone].map((Icon, index) => (
                <span key={index} className="grid h-11 w-11 place-items-center rounded border border-primary/15 text-[#1a1208]/74">
                  <Icon size={18} />
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-9 sm:grid-cols-3">
            {Object.entries(groups).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-[#1a1208]/66">
                  {links.map(([label, tamil, href]) => (
                    <li key={label}>
                      <Link href={href} className="transition hover:text-primary">
                        <span className="en">{label}</span>
                        <span className="ta">{tamil}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-primary/15 pt-6 text-xs uppercase tracking-[0.14em] text-[#1a1208]/50 md:flex-row md:justify-between">
          <span>© 2026 Thalluvandi.in</span>
          <span>
            <span className="en">Legal, terms, privacy and vendor policy placeholders</span>
            <span className="ta">விதிமுறைகள், privacy, vendor policy</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
