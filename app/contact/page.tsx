"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_RENTAL, whatsappUrl } from "@/lib/utils";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    selection: "",
    service: "",
    budget: "",
    timeline: "",
    details: ""
  });

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = `வணக்கம், நான் தள்ளுவண்டி வாடகை பற்றி தெரிந்து கொள்ள விரும்புகிறேன்.

பெயர்: ${form.name}
மின்னஞ்சல்: ${form.email}
தேவைப்படும் வண்டி வகை: ${form.selection} - ${form.service}
பட்ஜெட்: ${form.budget}
கால அவகாசம்: ${form.timeline}
மேலும் விவரம்: ${form.details}`;
    window.open(whatsappUrl(message, WHATSAPP_RENTAL), "_blank", "noopener,noreferrer");
  }

  return (
    <main className="bg-[#F8F6F2] pt-28">
      <section className="mx-auto grid max-w-[1200px] gap-10 px-4 pb-24 md:grid-cols-[0.8fr_1.2fr] md:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-3 font-display text-6xl uppercase leading-none text-ink md:text-8xl">Premium inquiry form</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            Tell us what you need. The form opens WhatsApp automatically with a structured Tamil message to +91 94427 63940.
          </p>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-black/10 bg-white p-5 shadow-premium md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Input required placeholder="Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
            <Input required placeholder="Email" type="email" value={form.email} onChange={(e) => update("email", e.target.value)} />
            <Input required placeholder="Main Selection" value={form.selection} onChange={(e) => update("selection", e.target.value)} />
            <Input required placeholder="Related Service" value={form.service} onChange={(e) => update("service", e.target.value)} />
            <Input required placeholder="Budget" value={form.budget} onChange={(e) => update("budget", e.target.value)} />
            <Input required placeholder="Timeline" value={form.timeline} onChange={(e) => update("timeline", e.target.value)} />
          </div>
          <Textarea required placeholder="Project Details" className="mt-4" value={form.details} onChange={(e) => update("details", e.target.value)} />
          <Button className="mt-5 w-full" size="lg">
            <MessageCircle size={18} /> Send to WhatsApp
          </Button>
        </form>
      </section>
    </main>
  );
}
