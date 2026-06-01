"use client";

import { useEffect, useState, useRef } from "react";
import { X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BookingRulesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  cartName: string;
}

export function BookingRulesModal({
  isOpen,
  onClose,
  onConfirm,
  cartName,
}: BookingRulesModalProps) {
  const [agreed, setAgreed] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Reset agreement state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setAgreed(false);
    }
  }, [isOpen]);

  // Handle Escape key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Handle click outside modal card
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-all duration-300"
    >
      <div
        ref={modalRef}
        className="relative flex w-full max-w-md flex-col rounded-2xl border border-primary/20 bg-charcoal p-6 text-white shadow-premium animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-primary/20">
          <div>
            <h3 className="font-display text-2xl uppercase tracking-wider text-primary">
              <span className="en">Before You Book</span>
              <span className="ta tamil-text text-xl">முன்பதிவு செய்வதற்கு முன்</span>
            </h3>
            {cartName && (
              <p className="mt-1 text-xs font-bold text-muted uppercase tracking-widest">
                <span className="en">Booking: {cartName}</span>
                <span className="ta tamil-text text-[10px] normal-case">வண்டி: {cartName}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-muted hover:bg-white/5 hover:text-white transition"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Rules List Container */}
        <div className="my-4 max-h-[320px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
          
          {/* English Rules */}
          <ol className="en list-decimal pl-4 space-y-3 text-sm leading-relaxed text-slate-200">
            <li>
              <span>Cart must be rented in the name of the person running the business.</span>
            </li>
            <li>
              <span>Picking up and returning the cart is the renter's responsibility.</span>
            </li>
            <li>
              <span>Any damage to the cart must be paid for by the renter.</span>
            </li>
            <li>
              <span>Return the cart clean. ₹500 will be deducted for cleaning if returned dirty.</span>
            </li>
            <li>
              <span>Documents will be returned only after the cart is safely returned.</span>
            </li>
            <li>
              <span>Violation of rules will result in legal action.</span>
            </li>
            <li className="list-none -ml-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <span className="font-bold text-primary block text-xs uppercase tracking-wider mb-1">Rule 7 - Important</span>
              <span>Minimum rental period is 1 month. Returning early will still be charged for the full month.</span>
            </li>
            <li>
              <span>The renter is responsible for the cart while taking and returning it (Tempo charges).</span>
            </li>
            <li>
              <span>Advance amount will be refunded within 1 week of returning the cart.</span>
            </li>
          </ol>

          {/* Tamil Rules */}
          <ol className="ta tamil-text list-decimal pl-4 space-y-3 text-sm leading-relaxed text-slate-200">
            <li>
              <span>வண்டியில் வியாபாரம் செய்பவர் பேரில் தான் வண்டி எடுக்க வேண்டும்.</span>
            </li>
            <li>
              <span>வண்டி எடுத்து செல்வதும் ஒப்படைப்பதும் தங்கள் பொறுப்பு.</span>
            </li>
            <li>
              <span>வண்டி சேதம் அடைந்தால் அதற்குண்டான பணம் செலுத்த வேண்டும்.</span>
            </li>
            <li>
              <span>வண்டியை சுத்தமாக கழுவி கொண்டு வர வேண்டும். இல்லையெனில் ரூ.500 பிடித்தம் செய்யப்படும்.</span>
            </li>
            <li>
              <span>வண்டியை பத்திரமாக ஒப்படைத்த பின்பே ஆவணங்கள் திரும்ப தரப்படும்.</span>
            </li>
            <li>
              <span>விதிகளை மீறினால் கோர்ட் நடவடிக்கை எடுக்கப்படும்.</span>
            </li>
            <li className="list-none -ml-4 border-l-4 border-primary bg-primary/5 p-3 rounded-r-lg">
              <span className="font-bold text-primary block text-xs uppercase tracking-wider mb-1">விதி 7 - முக்கிய குறிப்பு</span>
              <span>குறைந்தபட்சம் 1 மாதம் வாடகை வைத்துக்கொள்ள வேண்டும். முன்னதாக திரும்பினாலும் 1 மாத வாடகை வசூலிக்கப்படும்.</span>
            </li>
            <li>
              <span>வண்டி எடுத்துச் செல்லும் போதும் திரும்பி தரும் போதும் டெம்போ வாடகை எடுத்துச் செல்வோரது பொறுப்பு.</span>
            </li>
            <li>
              <span>வண்டியை திரும்பி கொண்டு வந்து தரும்போது அட்வான்ஸ் தொகை 1 வாரத்திற்குள் திரும்ப தரப்படும்.</span>
            </li>
          </ol>
        </div>

        {/* Required Documents Note */}
        <div className="rounded-xl bg-white/5 border border-white/10 p-3 mb-4 text-xs italic text-muted leading-relaxed">
          <span className="en">Please bring: Aadhaar Card, Ration Card, PAN Card, 1 Passport Photo</span>
          <span className="ta tamil-text block text-[11px] not-italic">கொண்டு வர வேண்டியது: ஆதார் கார்டு, ரேசன் கார்டு, பான் கார்டு, போட்டோ 1</span>
        </div>

        {/* Agreement Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group mb-6">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary focus:ring-offset-charcoal transition"
          />
          <span className="text-xs text-slate-300 font-semibold select-none group-hover:text-white transition">
            <span className="en">I have read and agree to all rental terms</span>
            <span className="ta tamil-text text-[11px]">அனைத்து வாடகை விதிகளையும் படித்து ஒப்புக்கொள்கிறேன்</span>
          </span>
        </label>

        {/* Footer Buttons */}
        <div className="grid grid-cols-[100px_1fr] gap-3">
          <Button
            onClick={onClose}
            variant="outline"
            className="border-white/20 hover:bg-white/5 text-slate-300 hover:text-white text-xs h-11 uppercase font-bold tracking-wider"
          >
            <span className="en">Cancel</span>
            <span className="ta tamil-text text-[10px] normal-case">ரத்து செய்</span>
          </Button>
          <Button
            disabled={!agreed}
            onClick={onConfirm}
            className={`bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs h-11 uppercase font-bold tracking-wider flex items-center justify-center gap-2 ${
              !agreed ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MessageCircle size={16} className="shrink-0" />
            <span className="en">I Agree & Book</span>
            <span className="ta tamil-text text-[11px] tracking-normal normal-case">ஒப்புக்கொள்கிறேன் - Book</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
