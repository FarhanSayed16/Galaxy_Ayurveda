import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Leaf,
  Award,
  Truck,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="bg-[#0c2418] text-[#FAF7F2] border-t border-gold/20 mt-auto">
      {/* Top Value Assurance Banner - High Contrast Warm Ivory Accent */}
      <div className="border-b border-[#e6dfd1] bg-[#F4EFE6] text-charcoal py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-13 h-13 rounded-full bg-white border border-[#c5a059]/50 shadow-xs flex items-center justify-center mb-3">
              <Leaf className="w-6 h-6 text-forest" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-forest tracking-wide">
              100% Herbal & Pure
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
              Zero mineral oils, heavy metals, or adulterants
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-13 h-13 rounded-full bg-white border border-[#c5a059]/50 shadow-xs flex items-center justify-center mb-3">
              <Award className="w-6 h-6 text-forest" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-forest tracking-wide">
              Classical Shastra Texts
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
              Formulated per Charaka, Sushruta & Unani Tibb
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-13 h-13 rounded-full bg-white border border-[#c5a059]/50 shadow-xs flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6 text-forest" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-forest tracking-wide">
              Licensed & Certified
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
              AYUSH & FSSAI compliant dispensary
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-13 h-13 rounded-full bg-white border border-[#c5a059]/50 shadow-xs flex items-center justify-center mb-3">
              <MessageCircle className="w-6 h-6 text-forest" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-forest tracking-wide">
              Direct WhatsApp Orders
            </h4>
            <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
              Personalized guidance & rapid pan-India dispatch
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-normal tracking-[0.18em] uppercase text-white block">
                {siteConfig.name}
              </span>
              <p className="text-xs text-gold font-medium tracking-[0.2em] uppercase mt-1">
                Authentic Herbal & Unani Dispensary
              </p>
            </div>
            <p className="text-xs text-[#cfded4] leading-relaxed">
              Rooted in centuries-old Vedic and Greco-Arabic healing traditions.
              We provide pure single herbs, classical compound churnas, medicated
              tailams, and authentic Unani formulations directly to your doorstep.
            </p>
            <div className="pt-2 text-[11px] space-y-1.5 text-[#b5cbbe]">
              <p className="font-mono">• {siteConfig.business.ayushLicense}</p>
              <p className="font-mono">• {siteConfig.business.fssaiLicense}</p>
              <p className="font-mono">• {siteConfig.business.drugLicense}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-white/10 pb-2">
              Explore Store
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cfded4]">
              <li>
                <Link
                  href="/products"
                  className="hover:text-gold transition-colors inline-block"
                >
                  All Herbal Formulations
                </Link>
              </li>
              <li>
                <Link
                  href="/products?featured=true"
                  className="hover:text-gold transition-colors inline-block"
                >
                  Featured & Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gold transition-colors inline-block"
                >
                  Our Herbal Heritage & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gold transition-colors inline-block"
                >
                  Dispensary Location & Contact
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold-light hover:text-white transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  Consult with an Herbalist &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Category Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-white/10 pb-2">
              Classical Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#cfded4]">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-gold transition-colors inline-block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-white/10 pb-2">
              Dispensary & Orders
            </h4>
            <div className="space-y-3 text-xs text-[#cfded4]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address}, {siteConfig.contact.area},{" "}
                  {siteConfig.contact.city} — {siteConfig.contact.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gold-light font-semibold transition-colors"
                >
                  WhatsApp: {siteConfig.contact.whatsappDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Dispensary Timings:</p>
                  <p className="text-[#aabcb0]">{siteConfig.contact.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Strip */}
        <div className="mt-14 pt-6 border-t border-white/10 text-[11px] text-[#a0baa8] space-y-2">
          <p className="leading-relaxed">
            <strong>Statutory Disclaimer:</strong> Statements regarding herbal,
            Ayurvedic, and Unani products are based on classical texts and
            traditional usage. Individual results may vary. If you have an
            acute medical emergency or pre-existing medical condition, please
            consult your qualified physician or Ayurvedic Vaidya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 text-xs">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-[11px] text-[#cfded4]">
              <Link href="/about" className="hover:text-gold">
                About Us
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-gold">
                Store Location
              </Link>
              <span>•</span>
              <Link href="/products" className="hover:text-gold">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
