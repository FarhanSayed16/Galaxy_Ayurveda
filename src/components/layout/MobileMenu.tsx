"use client";

import { useState } from "react";
import Link from "next/link";
import {
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  MessageCircle,
  Search,
  Sparkles,
  ShieldCheck,
  MapPin,
  Clock,
} from "lucide-react";
import { categories } from "@/data/categories";
import { siteConfig } from "@/data/siteConfig";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleCategory = (slug: string) => {
    setExpandedCategory(expandedCategory === slug ? null : slug);
  };

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Slide-out drawer */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-[#FAF6F0] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-[#F5EEDB]">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-dark block">
              100% Herbal & Unani
            </span>
            <span className="font-serif text-lg font-bold text-forest tracking-wider">
              {siteConfig.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-charcoal-light hover:text-forest hover:bg-black/5 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search quick button */}
        <div className="p-3 border-b border-border/70 bg-white">
          <button
            onClick={() => {
              onClose();
              onOpenSearch();
            }}
            className="w-full flex items-center justify-between px-3 py-2 bg-[#FAF6F0] border border-border rounded-md text-xs text-charcoal-muted hover:border-forest transition-colors"
          >
            <span className="flex items-center gap-2">
              <Search className="w-4 h-4 text-forest" />
              Search herbs, ailments, oils...
            </span>
            <span className="text-[10px] bg-white border border-border px-1.5 py-0.5 rounded text-charcoal-muted">
              Search
            </span>
          </button>
        </div>

        {/* Scrollable Nav Items */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 text-sm divide-y divide-border/60">
          {/* Main Navigation Links */}
          <div className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2 text-forest font-semibold hover:text-gold-dark transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              onClick={onClose}
              className="block py-2 text-forest font-semibold hover:text-gold-dark transition-colors flex items-center justify-between"
            >
              <span>All Products & Formulations</span>
              <span className="text-[10px] bg-gold/20 text-forest font-bold px-1.5 py-0.5 rounded">
                Catalog
              </span>
            </Link>
          </div>

          {/* Categories Accordion */}
          <div className="pt-3">
            <p className="text-[11px] font-bold uppercase tracking-wider text-charcoal-muted mb-2 font-serif">
              Shop By Category
            </p>
            <div className="space-y-1">
              {categories.map((cat) => {
                const isExpanded = expandedCategory === cat.slug;

                return (
                  <div key={cat.slug} className="rounded-md overflow-hidden">
                    <div className="flex items-center justify-between py-2 text-charcoal hover:text-forest transition-colors">
                      <Link
                        href={`/category/${cat.slug}`}
                        onClick={onClose}
                        className="flex-1 font-medium text-xs sm:text-sm flex items-center gap-1.5"
                      >
                        {cat.name}
                        {cat.badge && (
                          <span className="text-[9px] px-1 bg-[#B73E2F] text-white rounded">
                            {cat.badge}
                          </span>
                        )}
                      </Link>
                      <button
                        onClick={() => toggleCategory(cat.slug)}
                        className="p-1 text-charcoal-muted hover:text-forest"
                        aria-label={`Expand ${cat.name}`}
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="pl-3 pb-2 pt-1 bg-white/70 rounded-md mb-1 space-y-1 text-xs">
                        <p className="text-[10px] font-semibold uppercase text-gold-dark">
                          Formulations:
                        </p>
                        {cat.subcategories.map((sub) => (
                          <Link
                            key={sub.slug}
                            href={`/category/${cat.slug}?sub=${sub.slug}`}
                            onClick={onClose}
                            className="block py-1 text-charcoal-light hover:text-forest transition-colors"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                        <Link
                          href={`/category/${cat.slug}`}
                          onClick={onClose}
                          className="block pt-1.5 font-semibold text-forest hover:underline text-[11px]"
                        >
                          View All in {cat.shortTitle} &rarr;
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* About & Contact */}
          <div className="pt-3 space-y-2">
            <Link
              href="/about"
              onClick={onClose}
              className="block py-1.5 text-charcoal hover:text-forest font-medium"
            >
              About Our Heritage & Dispensary
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-1.5 text-charcoal hover:text-forest font-medium"
            >
              Contact & Store Location
            </Link>
          </div>

          {/* Store Info snippet */}
          <div className="pt-3 text-xs text-charcoal-muted space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
              <span>
                {siteConfig.contact.address}, {siteConfig.contact.city}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-forest shrink-0" />
              <span>{siteConfig.contact.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Quick Action CTAs */}
        <div className="p-4 border-t border-border bg-white space-y-2">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#25D366] text-white rounded-md font-semibold text-xs tracking-wide shadow-xs hover:bg-[#20b858] transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            Order / Enquire on WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="w-full flex items-center justify-center gap-2 py-2 border border-forest text-forest rounded-md font-medium text-xs hover:bg-forest hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Store: {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}

