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
        <div className="hidden sm:flex items-center gap-2 bg-white text-charcoal text-xs py-2 px-3.5 rounded-full shadow-lg border border-border/80 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <span className="font-medium">Need Ayurvedic Advice? Chat with us</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-charcoal-muted hover:text-charcoal ml-1 p-0.5 rounded-full hover:bg-black/5"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
          "Hello Galaxy Ayurveda! 🌿 I would like to inquire about your herbal formulations."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />

        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping -z-10" />
      </a>
    </div>
  );
}
