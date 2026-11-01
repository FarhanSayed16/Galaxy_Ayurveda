import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function CTABanner() {
  return (
    <section className="relative py-16 sm:py-20 bg-[#153427] text-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-forest-light/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-gold-light">
            Free Herbalist Guidance
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white mb-4">
          Unsure Which Classical Herb Fits Your Body Constitution?
        </h2>

        <p className="text-sm sm:text-base text-[#cfdec4] max-w-2xl mx-auto leading-relaxed mb-8">
          Every individual possesses a unique Prakriti and Dosha state. Speak
          directly with our experienced dispensary herbalists on WhatsApp for
          honest formulation recommendations and home delivery.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              "Hello! 🌿 I would like to consult an herbalist regarding the best Ayurvedic / Unani formulation for my wellness needs."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-xs tracking-widest uppercase rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Chat on WhatsApp Now</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call Store: {siteConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}

