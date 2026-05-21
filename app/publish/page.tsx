import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_PUBLISH, whatsappUrl } from "@/lib/utils";

export default function PublishPage() {
  return (
    <main className="bg-[#F8F6F2] pt-28">
      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-24 md:grid-cols-[0.95fr_1.05fr] md:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Vendor Network</p>
          <h1 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">Publish Your Cart on Thalluvandi</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            If you own a food cart and want more rental customers, publish it on Thalluvandi.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href={whatsappUrl("Hi, I’m interested in publishing my cart on Thalluvandi.", WHATSAPP_PUBLISH)} target="_blank">
              <MessageCircle size={18} /> Publish on WhatsApp
            </a>
          </Button>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-premium md:p-8">
          <h2 className="font-display text-5xl uppercase leading-none text-ink">Why publish?</h2>
          <div className="mt-8 grid gap-4">
            {["Reach more rental customers", "Earn from idle carts", "Get listed in a premium marketplace", "Prepare for future vendor dashboard tools"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 rounded-xl border border-black/10 bg-[#F8F6F2] p-4 font-bold text-ink">
                <CheckCircle2 className="text-primary" /> {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
