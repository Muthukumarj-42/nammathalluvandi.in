import { MessageCircle, WalletCards } from "lucide-react";
import { Reveal } from "@/components/sections/reveal";

function Text({ en, ta }: { en: string; ta: string }) {
  return (
    <>
      <span className="en">{en}</span>
      <span className="ta">{ta}</span>
    </>
  );
}

const steps = [
  ["Browse the carts and choose your type", "முதல்ல வண்டிகளை பாருங்க, உங்களுக்கு suit ஆகுற type தேர்ந்தெடுங்க"],
  ["Tap “Book This Cart” and WhatsApp opens", "“இந்த வண்டியை book பண்ணுங்க” அழுத்துங்க — WhatsApp திறக்கும்"],
  ["Share your date and Coimbatore location", "தேதி, கோவையில் location, எத்தனை நாள் வேணும் சொல்லுங்க"],
  ["Confirm deposit by Cash or UPI", "Cash அல்லது UPI-ல deposit confirm பண்ணுங்க"],
  ["We deliver the cart to your spot", "உங்கள் இடத்துக்கு வண்டி வந்து ready ஆகும்"]
];

const faqs = [
  ["Deposit amount?", "Deposit எவ்வளவு?", "Refundable security deposit is ₹2,000 – ₹5,000 depending on the cart type and rental duration. Confirmed on WhatsApp before booking.", "வண்டி வகையைப் பொறுத்து ₹2,000 – ₹5,000 deposit வாங்குவோம். திரும்ப கொடுத்துடுவோம்."],
  ["Damage policy?", "Damage ஆனா என்ன?", "Damage is checked during return. If needed, it is adjusted from the deposit.", "வண்டியை திரும்ப கொடுக்கும்போது சரிபார்ப்போம். damage இருந்தா deposit-ல இருந்து கழிப்போம்."],
  ["Minimum rental period?", "குறைந்தது எத்தனை நாள்?", "You can rent from one day. Longer rentals may get a better rate.", "குறைந்தது ஒரு நாள் முதல் வாடகைக்கு எடுக்கலாம். நீண்ட நாள் எடுத்தால் rate குறையும்."],
  ["Payment methods?", "Payment எப்படி?", "Cash and UPI are supported. Final payment details are confirmed before booking.", "Cash அல்லது UPI — இரண்டும் ஓகே. Deposit confirm ஆனதும் வண்டி ready."],
  ["What is the commission if I list my cart on Thalluvandi?", "என் வண்டி list பண்ணினா commission என்ன?", "Thalluvandi charges a small platform fee when your cart gets booked through us. The percentage is discussed before listing.", "உங்கள் வண்டியை எங்கள் platform-ல list பண்ணினா, booking வரும்போது ஒரு சிறிய தொகை மட்டும் எடுப்போம். WhatsApp-ல பேசி decide பண்ணலாம்."]
];

export default function HowItWorksPage() {
  return (
    <main className="bg-[#F8F6F2] pt-0 md:pt-28">
      <section className="pb-16 pt-12 md:pb-20 md:pt-0">
        <div className="site-container">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <Text en="How It Works" ta="எப்படி rent பண்ணுவது?" />
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-6xl uppercase leading-none text-ink md:text-8xl">
            <Text en="A simple WhatsApp-first rental flow" ta="WhatsApp-ல பேசுங்க, வண்டி ready பண்ணிடுவோம்" />
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            <Text en="Made for first-time food business owners who need clear steps and fast confirmation." ta="புதிய தொழில் ஆரம்பிக்கிறவர்களுக்கு குழப்பம் இல்லாம, நேரா, சுலபமா rent எடுக்க இந்த flow." />
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="site-container max-w-[1000px]">
          <div className="relative">
            <div className="absolute left-7 top-8 h-[calc(100%-64px)] w-px bg-black/12" />
            {steps.map(([step, tamilStep], index) => (
              <Reveal key={step} className="relative grid grid-cols-[72px_1fr] gap-4 py-4 md:grid-cols-[92px_1fr] md:gap-6 md:py-6">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-3xl text-white shadow-glow">
                  {index + 1}
                </div>
                <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                  <h2 className="font-display text-3xl uppercase leading-none text-ink md:text-4xl">
                    <Text en={step} ta={tamilStep} />
                  </h2>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-4 rounded-2xl border border-black/10 bg-white p-6 md:grid-cols-2 md:gap-6">
            <div>
              <MessageCircle className="text-primary" />
              <h3 className="mt-4 font-display text-4xl uppercase text-ink">
                <Text en="Pre-filled inquiry" ta="Message ready ஆ திறக்கும்" />
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                <Text en="Each cart opens WhatsApp with that cart name." ta="ஒவ்வொரு வண்டிக்கும் அதன் பெயருடன் WhatsApp message ready ஆ இருக்கும்." />
              </p>
            </div>
            <div>
              <WalletCards className="text-primary" />
              <h3 className="mt-4 font-display text-4xl uppercase text-ink">
                <Text en="Clear deposit" ta="Deposit clear ஆ சொல்லுவோம்" />
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">
                <Text en="Deposit is confirmed before booking." ta="Book பண்ணும் முன் deposit, date, delivery எல்லாம் confirm பண்ணுவோம்." />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="site-container max-w-[1000px]">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 font-display text-5xl uppercase leading-none text-ink">
            <Text en="Common questions" ta="சாதாரணமா கேட்கும் கேள்விகள்" />
          </h2>
          <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white">
            {faqs.map(([question, tamilQuestion, answer, tamilAnswer]) => (
              <details key={question} className="group p-6 open:bg-[#F8F6F2]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ink">
                  <span>
                    <Text en={question} ta={tamilQuestion} />
                  </span>
                  <span className="text-xl text-primary group-open:hidden">+</span>
                  <span className="hidden text-xl text-primary group-open:inline">−</span>
                </summary>
                <p className="mt-3 text-[0.95rem] leading-7 text-muted">
                  <Text en={answer} ta={tamilAnswer} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
