"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  MessageCircle,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { SearchModal } from "@/components/shared/SearchModal";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-border shadow-xs py-3"
            : "bg-[#FAF7F2] border-border/70 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Column: Mobile Menu trigger & Search Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-charcoal hover:text-forest transition-colors rounded-md lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2.5 py-1.5 px-2 text-charcoal-light hover:text-forest transition-colors rounded-md group"
                aria-label="Search herbal formulations"
              >
                <Search className="w-4 h-4 text-forest/70 group-hover:scale-110 group-hover:text-forest transition-all" />
                <span className="hidden md:inline text-xs uppercase tracking-[0.14em] text-charcoal-muted group-hover:text-forest font-medium">
                  Search Formulations
                </span>
              </button>
            </div>

            {/* Center Column: Kama Ayurveda-inspired Centered Brand Identity */}
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="group inline-flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal tracking-[0.2em] text-forest group-hover:text-forest-dark transition-colors uppercase select-none">
                  Galaxy Ayurveda
                </span>
                {/* Traditional herbal motif ornament */}
                <div className="flex items-center gap-2 mt-1 opacity-85 group-hover:opacity-100 transition-opacity">
                  <span className="h-[1px] w-8 bg-gold/70" />
                  <span className="text-[10px] tracking-[0.28em] uppercase text-gold-dark font-medium font-sans">
                    100% Herbal &bull; Unani
                  </span>
                  <span className="h-[1px] w-8 bg-gold/70" />
                </div>
              </Link>
            </div>

            {/* Right Column: WhatsApp consultation & Direct Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* WhatsApp direct order button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                  "Hello Galaxy Ayurveda! 🌿 I would like to inquire about ordering herbal formulations."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 border border-forest/25 bg-white/70 hover:bg-forest text-forest hover:text-white rounded text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-2xs group"
                title="Direct WhatsApp Consultation & Order"
              >
                <MessageCircle className="w-3.5 h-3.5 text-forest group-hover:text-gold fill-current transition-colors" />
                <span>WhatsApp Order</span>
              </a>

              {/* Mobile quick WhatsApp icon */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 text-forest hover:text-gold-dark transition-colors"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-forest" />
              </a>

              {/* Catalog quick link */}
              <Link
                href="/products"
                className="p-2 text-charcoal-light hover:text-forest transition-colors relative"
                aria-label="Browse all products"
                title="Browse Catalog"
              >
                <ShoppingBag className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Global Interactive Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
    </>
  );
}
