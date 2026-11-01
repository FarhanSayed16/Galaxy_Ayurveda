import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function AboutSnippet() {
  return (
    <section className="py-16 sm:py-24 bg-[#FDF8F0] border-b border-[#e8dfcd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="relative">
            <div className="relative aspect-4/3 sm:aspect-5/4 w-full rounded-lg overflow-hidden border border-[#e8dfcd] shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
                alt="Galaxy Ayurveda Herbal Preparation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-white p-4 sm:p-5 rounded-lg border border-[#e8dfcd] shadow-xl max-w-[260px] sm:max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest text-gold flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-forest">
                    Licensed & Inspected
                  </p>
                  <p className="text-[10px] text-charcoal-muted">
                    {siteConfig.business.ayushLicense}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-gold-dark block mb-2">
                Our Roots & Philosophy
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest tracking-tight leading-snug">
                Restoring Equilibrium with Ancient Botanical Science
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-3 mb-4" />
            </div>

            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
              Founded on the belief that nature holds the exact antidote for modern
              stress and ailments, <strong>{siteConfig.name}</strong> bridges the
              twin pillars of oriental medicine: Vedic Ayurveda and classical Greco-Arabic
              Unani Tibb.
            </p>

            <p className="text-sm text-charcoal-light leading-relaxed">
              We reject the industrial shortcuts common in commercial healthcare.
              Our oils are slow-simmered over multiple nights (Taila Paka Vidhi), our
              churnas are prepared exclusively from first-harvest roots, and our Unani
              khamiras are enriched with pure pearls and saffron.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-charcoal">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Single-origin Nagori herbs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Zero paraffin & synthetic binders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Authentic Unani Tibb confections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0" />
                <span>Direct WhatsApp consultation</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4332] hover:bg-forest-dark text-white rounded text-xs font-semibold tracking-widest uppercase transition-all duration-200 shadow-xs hover:shadow"
              >
                <span>Read Full Dispensary Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

