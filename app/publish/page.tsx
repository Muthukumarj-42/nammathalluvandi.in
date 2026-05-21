import { CheckCircle2, ClipboardList, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_PUBLISH, publishCartMessage, whatsappUrl } from "@/lib/utils";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const details = [
  ["Your Name", "உங்கள் பெயர்"],
  ["Phone Number", "Phone number"],
  ["Number of Carts Available", "எத்தனை வண்டி இருக்கு"],
  ["Cart Type (with stove / without stove / with top / etc.)", "வண்டி வகை — அடுப்பு / மேல் கவர் / இல்லாதது"],
  ["Rental Price You Expect (per day)", "ஒரு நாள் rent எவ்வளவு எதிர்பார்க்கிறீங்க"],
  ["Location in Coimbatore", "கோவையில் உங்கள் location"],
  ["Cart Photos (send on WhatsApp)", "வண்டி photos — WhatsApp-ல அனுப்புங்க"]
];

const benefits = [
  ["Reach more rental customers", "உங்கள் வண்டிக்கு customer கிடைக்க உதவுவோம்"],
  ["Earn from idle carts", "நிற்கும் வண்டியிலிருந்து வருமானம் வரும்"],
  ["Get listed in a premium marketplace", "நம்பிக்கையான marketplace-ல உங்கள் வண்டி வரும்"],
  ["Agree platform fee before listing", "List பண்ணும் முன் fee தெளிவா பேசிக்கலாம்"]
];

export default function PublishPage() {
  return (
    <main className="bg-[#F8F6F2] pt-0 md:pt-28">
      <section className="pb-20 pt-12 md:pb-24 md:pt-0">
        <div className="site-container grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <Text en="Vendor Network" ta="வண்டி owner network" />
            </p>
            <h1 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">
              <Text en="Publish Your Cart on Thalluvandi" ta="உங்களுக்கு வண்டி இருக்கா? நாங்க customer தருவோம்!" />
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-8 text-muted">
              <Text en="If you own a food cart and want more rental customers, publish it on Thalluvandi." ta="உங்கள் தள்ளுவண்டியை Thalluvandi-ல list பண்ணுங்க — booking நாங்க பாத்துக்குவோம்." />
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={whatsappUrl(publishCartMessage, WHATSAPP_PUBLISH)} target="_blank">
                <MessageCircle size={18} /> <Text en="📋 List My Cart" ta="📋 வண்டி list பண்ணுங்க" />
              </a>
            </Button>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-premium md:p-8">
            <h2 className="font-display text-5xl uppercase leading-none text-ink">
              <Text en="To list your cart, share these details on WhatsApp:" ta="வண்டி list பண்ண இந்த details WhatsApp-ல அனுப்புங்க:" />
            </h2>
            <div className="mt-8 grid gap-3">
              {details.map(([detail, tamil]) => (
                <div key={detail} className="flex items-start gap-3 rounded-xl border border-black/10 bg-[#F8F6F2] p-4 text-left font-bold text-ink">
                  <ClipboardList className="mt-0.5 shrink-0 text-primary" />
                  <span>
                    <Text en={detail} ta={tamil} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container">
          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <h2 className="font-display text-5xl uppercase leading-none text-ink">
              <Text en="Why publish?" ta="ஏன் list பண்ணணும்?" />
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 md:gap-6">
              {benefits.map(([benefit, tamil]) => (
                <div key={benefit} className="flex min-h-14 items-center gap-3 rounded-xl border border-black/10 bg-[#F8F6F2] p-4 text-left font-bold text-ink">
                  <CheckCircle2 className="shrink-0 text-primary" />
                  <Text en={benefit} ta={tamil} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
