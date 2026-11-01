import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Leaf,
  HeartPulse,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Us — Herbal & Unani Heritage",
  description:
    "Learn about Galaxy Ayurveda's dedication to authentic 100% herbal medicines, classical Ayurvedic taila paka vidhi, and Greco-Arabic Unani Tibb formulations.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDF8F0] flex flex-col">
      {/* Breadcrumb Bar */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <Breadcrumbs items={[{ label: "About Our Heritage" }]} />
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 bg-[#112d22] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=1600&q=80"
            alt="Herbal botanicals background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-gold-light inline-block">
            Tradition • Purity • Science
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
            A Living Sanctuary of Classical Herbal Healing
          </h1>
          <div className="w-20 h-0.5 bg-gold mx-auto my-3" />
          <p className="text-sm sm:text-base text-[#cfdec4] max-w-2xl mx-auto leading-relaxed">
            Founded with a singular commitment: to restore the uncompromising
            purity of classical Ayurveda and Unani Tibb in an age of industrial shortcuts.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 sm:py-24 bg-[#FDF8F0] border-b border-[#e8dfcd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-dark block">
                The Confluence of Two Sacred Sciences
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest tracking-tight">
                Where Vedic Ayurveda Meets Greco-Arabic Unani Tibb
              </h2>
              <div className="w-16 h-0.5 bg-gold" />

              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                For millennia, India has stood as the global crossroads of natural
                pharmacology. At <strong>Galaxy Ayurveda</strong>, we revere both
                the Vedic wisdom of the <em>Charaka Samhita</em> and <em>Ashtanga Hridaya</em>,
                as well as the Greco-Arabic constitutional medicine codified by Hakim
                Ibn Sina (Avicenna) in the <em>Canon of Medicine</em>.
              </p>

              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
                While Ayurveda harmonizes the three <strong>Tridoshas</strong> (Vata,
                Pitta, and Kapha), Unani medicine balances the four internal
                <strong>Akhlat</strong> (Humors: Dam, Balgham, Safra, and Sauda).
                Together, these twin traditions offer a comprehensive, gentle, and
                permanent path toward physical vitality and mental tranquility.
              </p>

              <div className="p-4 bg-[#FAF6F0] rounded-lg border-l-4 border-gold text-xs text-charcoal-light leading-relaxed italic">
                &ldquo;True medicine does not merely silence a symptom; it re-establishes the innate bio-energetic equilibrium of the human soul and organism.&rdquo;
              </div>
            </div>

            {/* Visual Column */}
            <div className="relative">
              <div className="relative aspect-4/3 sm:aspect-5/4 w-full rounded-lg overflow-hidden border border-[#e8dfcd] shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1200&q=80"
                  alt="Traditional Ayurvedic mortar and mortar grinding single herbs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#112d22] text-white p-5 rounded-lg shadow-xl max-w-xs hidden sm:block border border-gold/30">
                <p className="font-serif text-sm font-semibold text-gold">
                  100% Traditional Processing
                </p>
                <p className="text-[11px] text-[#cfdec4] mt-1">
                  Crafted through slow multi-day decoctions (Taila Paka Vidhi) in pure copper & bronze vessels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Uncompromising Purity */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#e8dfcd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-gold-dark block mb-2">
              Our Pharmaceutical Ethics
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest">
              The Galaxy Ayurveda Purity Pledge
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-3 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-lg border border-[#e8dfcd] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                1. First-Harvest Single Roots
              </h3>
              <p className="text-xs text-charcoal-light leading-relaxed">
                We reject stale root cut-offs and commercial powders bulked with
                starch. Our Nagori Ashwagandha, Shatavari, and Yashtimadhu are sourced
                from designated mineral-rich agro-climatic zones at peak potency.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-[#e8dfcd] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                2. Classical Pharmacopoeia Fidelity
              </h3>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Every formulation follows authentic scripture ratios. Our Kumkumadi
                Tailam contains Kashmiri Mongra saffron boiled in sesame oil and goat's
                milk over three days strictly according to the <em>Ashtanga Hridaya</em>.
              </p>
            </div>

            <div className="bg-white p-7 rounded-lg border border-[#e8dfcd] shadow-xs">
              <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                3. Zero Harmful Chemicals
              </h3>
              <p className="text-xs text-charcoal-light leading-relaxed">
                Zero liquid paraffin, zero synthetic chemical binding glues, zero
                artificial musk fragrances, and zero chemical preservatives. Packed
                fresh in food-grade, light-protected packaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Licenses & Accreditations */}
      <section className="py-16 sm:py-20 bg-[#F5EEDB] border-b border-[#e8dfcd]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-forest block mb-2">
            Dispensary Accreditations
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-forest mb-8">
            Officially Licensed, Inspected & Certified
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-5 rounded-lg border border-border shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-forest">
                <Award className="w-5 h-5 text-gold" />
                <h4 className="font-serif font-bold text-sm">Ministry of AYUSH</h4>
              </div>
              <p className="font-mono text-xs text-forest-light font-medium">
                {siteConfig.business.ayushLicense}
              </p>
              <p className="text-[11px] text-charcoal-muted mt-1.5">
                Authorized Ayurvedic & Unani proprietary formulations.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-border shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-forest">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <h4 className="font-serif font-bold text-sm">FSSAI Compliance</h4>
              </div>
              <p className="font-mono text-xs text-forest-light font-medium">
                {siteConfig.business.fssaiLicense}
              </p>
              <p className="text-[11px] text-charcoal-muted mt-1.5">
                Certified botanical dietary churnas and herbal tonics.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-border shadow-xs">
              <div className="flex items-center gap-2 mb-2 text-forest">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <h4 className="font-serif font-bold text-sm">Drug License</h4>
              </div>
              <p className="font-mono text-xs text-forest-light font-medium">
                {siteConfig.business.drugLicense}
              </p>
              <p className="text-[11px] text-charcoal-muted mt-1.5">
                Approved state pharmaceutical dispensary retail operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-[#153427] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            Experience Pure Herbal Wellness Today
          </h2>
          <p className="text-sm text-[#cfdec4] leading-relaxed">
            Browse our full catalog of classical Ayurvedic churnas, restorative oils,
            and Unani elixirs, or connect with our herbalist for tailored recommendations.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3.5 bg-gold hover:bg-gold-light text-forest font-semibold text-xs tracking-widest uppercase rounded shadow transition-colors"
            >
              Browse Catalog
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded font-semibold text-xs tracking-widest uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
