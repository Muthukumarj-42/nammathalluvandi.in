import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, MapPin, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const values = [
  [Wallet, "Affordable Start", "செலவு குறைஞ்ச தொடக்கம்", "No big investment needed to begin your business", "பெரிய பணம் போடாம ஒரு நாள் rent-ல தொழில் try பண்ணலாம்"],
  [MapPin, "Local Trust", "கோவை நம்பிக்கை", "We are from Coimbatore, we understand your needs", "நாங்க கோவையிலிருந்து தான். இங்க vendor-களுக்கு என்ன தேவைன்னு நன்றா தெரியும்"],
  [HeartHandshake, "Vendor First", "வியாபாரி முதலில்", "Your success is our growth", "நீங்க நல்லா ஓடினா தான் எங்களுக்கும் வளர்ச்சி"]
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F2] pt-0 md:pt-28">
      <section className="pb-16 pt-12 md:pb-20 md:pt-0">
        <div className="site-container grid items-center gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="About Thalluvandi" ta="Thalluvandi பற்றி" />
            </p>
            <h1 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">
              <Text en="Serving entrepreneurs in Coimbatore" ta="கோவை வியாபாரிகளுக்காக உருவான சேவை" />
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-muted">
              <Text en="Thalluvandi.in helps people begin food businesses with less risk, better presentation, and practical local support." ta="குறைந்த முதலீட்டில் உணவு தொழில் தொடங்கணும்னு ஆசை இருக்கும் ஒவ்வொருவருக்கும் நம்பிக்கையான வண்டி உதவி." />
            </p>
          </div>
          <div className="relative rounded-2xl border border-black/10 bg-white p-6 shadow-premium">
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-3xl" />
            <Image src="/brand/full-logo-with-background.png" alt="Thalluvandi brand showcase" width={640} height={640} className="relative w-full drop-shadow-[0_0_48px_rgba(255,107,0,0.22)]" />
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="Our Story" ta="எங்கள் கதை" />
            </p>
            <p className="mt-4 max-w-[680px] text-lg leading-8 text-muted">
              <span className="en">
                Thalluvandi was started by a family that has been in the food cart business for over a decade in Coimbatore. We saw how hard it was for new vendors to afford a cart upfront, so we built a rental system that lets anyone start with minimal investment. Today we manage 60+ carts across Coimbatore and are expanding across Tamil Nadu.
              </span>
              <span className="ta">
                Thalluvandi என்பது கோவையில் ஒரு குடும்பத்தினரால் தொடங்கப்பட்ட தள்ளுவண்டி வாடகை சேவை. புதுசா தொழில் ஆரம்பிக்கணும்னு ஆசை இருக்கு, ஆனா வண்டி வாங்க பணம் இல்லன்னு கவலைப்படுறவங்களுக்காக இந்த சேவை. 60-க்கும் மேல் வண்டிகள், ஒரு நாள் வாடகையில் தொழில் ஆரம்பிக்கலாம்.
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Text en="Our Values" ta="எங்கள் நம்பிக்கை" />
          </p>
          <div className="mt-6 grid items-stretch gap-4 md:grid-cols-3 md:gap-6">
            {values.map(([Icon, title, tamilTitle, copy, tamilCopy]) => (
              <div key={title as string} className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <Icon className="text-primary" size={30} />
                <h2 className="mt-5 font-display text-4xl uppercase text-ink">
                  <Text en={title as string} ta={tamilTitle as string} />
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  <Text en={copy as string} ta={tamilCopy as string} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container grid gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="font-display text-5xl uppercase leading-none text-ink">
              <Text en="Who We Serve" ta="யாருக்கு உதவுறோம்?" />
            </h2>
            <p className="mt-4 max-w-[680px] text-lg leading-8 text-muted">
              <Text
                en="We serve tea vendors, juice sellers, fast food starters, snack cart operators, and anyone wanting to run a street food business in Coimbatore. No experience needed — just your passion and our cart."
                ta="டீ, ஜூஸ், ஃபாஸ்ட் ஃபுட், ஸ்நாக்ஸ் — கோவையில் சின்னதா தொடங்கி பெரியதா வளரணும்னு நினைக்கிறவர்களுக்கு நாங்க வண்டி தர்றோம். அனுபவம் இல்லன்னாலும் பரவாயில்லை, மனசு இருந்தா போதும்."
              />
            </p>
          </div>
          <div className="rounded-2xl border border-primary/20 bg-white p-6 md:p-8">
            <h2 className="font-display text-5xl uppercase leading-none text-ink">
              <Text en="Expansion roadmap" ta="அடுத்த பயணம்" />
            </h2>
            <p className="mt-4 max-w-[680px] text-lg leading-8 text-muted">
              <Text en="Currently in Coimbatore. Expanding across all Tamil Nadu districts by 2027. Want us in your city? Contact us." ta="இப்போ கோவையில். 2027க்குள் தமிழ்நாடு மாவட்டங்களெல்லாம் செல்ல திட்டம். உங்கள் ஊருக்கும் வேண்டும்னா பேசுங்க." />
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link href="/contact">
                <Text en="Contact Us" ta="💬 WhatsApp-ல பேசலாம்" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
