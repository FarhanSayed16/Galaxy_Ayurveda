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
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { categories } from "@/data/categories";

export function Footer() {
  return (
    <footer className="bg-[#153427] text-[#FAF6F0] border-t border-[#234d3c] mt-auto">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-[#234d3c] bg-[#112d22] py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest-light/30 border border-gold/40 flex items-center justify-center mb-2.5">
              <Leaf className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
              100% Herbal & Pure
            </h4>
            <p className="text-[11px] text-[#cfdec4] mt-0.5">
              Zero mineral oils, heavy metals, or adulterants
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest-light/30 border border-gold/40 flex items-center justify-center mb-2.5">
              <Award className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
              Classical Shastra Texts
            </h4>
            <p className="text-[11px] text-[#cfdec4] mt-0.5">
              Formulated per Charaka, Sushruta & Unani Tibb
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest-light/30 border border-gold/40 flex items-center justify-center mb-2.5">
              <ShieldCheck className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
              Licensed & Certified
            </h4>
            <p className="text-[11px] text-[#cfdec4] mt-0.5">
              AYUSH & FSSAI compliant dispensary
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-forest-light/30 border border-gold/40 flex items-center justify-center mb-2.5">
              <MessageCircle className="w-6 h-6 text-gold" />
            </div>
            <h4 className="font-serif text-sm font-semibold text-white tracking-wide">
              Instant WhatsApp Orders
            </h4>
            <p className="text-[11px] text-[#cfdec4] mt-0.5">
              Direct herbalist consultation & rapid dispatch
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-[0.16em] uppercase text-white block">
                {siteConfig.name}
              </span>
              <p className="text-xs text-gold font-medium tracking-widest uppercase mt-0.5">
                Authentic Herbal & Unani Dispensary
              </p>
            </div>
            <p className="text-xs text-[#d1dfd6] leading-relaxed">
              Rooted in centuries-old Vedic and Greco-Arabic healing traditions.
              We provide pure single herbs, classical compound churnas, medicated
              tailams, and authentic Unani formulations directly to your doorstep.
            </p>
            <div className="pt-2 text-[11px] space-y-1 text-[#b5cbbe]">
              <p>• {siteConfig.business.ayushLicense}</p>
              <p>• {siteConfig.business.fssaiLicense}</p>
              <p>• {siteConfig.business.drugLicense}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-[#234d3c] pb-2">
              Explore Store
            </h4>
            <ul className="space-y-2 text-xs text-[#d1dfd6]">
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
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-[#234d3c] pb-2">
              Classical Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#d1dfd6]">
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
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold font-bold border-b border-[#234d3c] pb-2">
              Dispensary & Orders
            </h4>
            <div className="space-y-2.5 text-xs text-[#d1dfd6]">
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
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-[#25D366] font-semibold transition-colors"
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
                  <p>{siteConfig.contact.businessHours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Disclaimer Strip */}
        <div className="mt-12 pt-6 border-t border-[#234d3c] text-[11px] text-[#a0baa8] space-y-2">
          <p>
            <strong>Statutory Disclaimer:</strong> Statements regarding herbal,
            Ayurvedic, and Unani products are based on classical texts and
            traditional usage. Individual results may vary. If you have an
            acute medical emergency or pre-existing medical condition, please
            consult your qualified physician or Ayurvedic Vaidya.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#1b4332] text-xs">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 sm:mt-0 text-[11px]">
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

