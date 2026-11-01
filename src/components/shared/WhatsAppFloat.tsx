"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-[#FAF7F2] text-charcoal text-xs py-2 px-4 rounded-full shadow-lg border border-[#e6dfd1] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-serif font-medium text-forest text-[13px]">
            Consult Herbalist on WhatsApp
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal ml-1 p-0.5 rounded-full hover:bg-black/5"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
          "Hello Galaxy Ayurveda! 🌿 I would like to inquire about your classical formulations."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#143826] hover:bg-[#0c2418] text-[#c5a059] border border-gold/40 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gold/30"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current text-gold transition-transform group-hover:scale-110" />

        {/* Subtle gold aura pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-gold/30 opacity-40 group-hover:animate-ping -z-10" />
      </a>
    </div>
  );
}
