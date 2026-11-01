import { MessageCircle, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function CTABanner() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0c2418] text-white overflow-hidden border-t border-b border-gold/20">
      {/* Decorative ambient lighting & botanical gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1d4833] via-[#0c2418] to-[#07170f]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#23553b]/20 blur-[140px] pointer-events-none" />

      {/* Subtle traditional lattice pattern watermark */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#c5a059 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gold/15 border border-gold/30 rounded-full shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-gold-light">
            Ayurvedic Dosha & Prakriti Consultation
          </span>
        </div>

        {/* Main Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] text-white drop-shadow-sm">
          Unsure Which Classical Herb Fits Your Body Constitution?
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 pt-1 opacity-70">
          <span className="h-[1px] w-12 bg-gold/60" />
          <span className="text-gold text-xs">✦</span>
          <span className="h-[1px] w-12 bg-gold/60" />
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-[#d3e2d7] max-w-2xl mx-auto leading-relaxed font-light">
          Every individual possesses a unique Prakriti and Dosha state. Speak
          directly with our experienced dispensary herbalists on WhatsApp for
          honest formulation recommendations, dosage timing, and fast home delivery.
        </p>

        {/* Quick assurance pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2 text-xs text-[#c5dac9] font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold" />
            100% Free Herbalist Advice
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold" />
            No Prescription Required
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-gold" />
            Pan-India Delivery
          </span>
        </div>

        {/* Action CTAs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              "Hello Galaxy Ayurveda! 🌿 I would like to consult an herbalist regarding the best Ayurvedic / Unani formulation for my wellness needs."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gold hover:bg-gold-light text-[#0c2418] font-bold text-xs tracking-[0.16em] uppercase rounded shadow-lg hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-[#0c2418] text-[#0c2418]" />
            <span>Chat with Herbalist on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/25 hover:border-gold/50 backdrop-blur-sm font-semibold text-xs tracking-[0.14em] uppercase rounded transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-gold-light" />
            <span>Call Dispensary: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
