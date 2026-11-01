"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  Search,
  MessageCircle,
  Phone,
  Sparkles,
  ShoppingBag,
  Heart,
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
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md border-border/80 shadow-xs py-3"
            : "bg-[#FAF6F0] border-border/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Column: Mobile Menu trigger & Search Button */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-charcoal hover:text-forest transition-colors rounded-md focus:outline-none focus:ring-1 focus:ring-forest lg:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 p-2 text-charcoal hover:text-forest transition-colors rounded-md group"
                aria-label="Search herbal formulations"
              >
                <Search className="w-5 h-5 group-hover:scale-105 transition-transform" />
                <span className="hidden md:inline text-xs uppercase tracking-wider text-charcoal-muted group-hover:text-forest">
                  Search Formulations
                </span>
              </button>
            </div>

            {/* Center Column: Kama Ayurveda-inspired Centered Brand Identity */}
            <div className="flex flex-col items-center text-center">
              <Link href="/" className="group inline-flex flex-col items-center">
                <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.18em] text-forest group-hover:text-forest-dark transition-colors uppercase">
                  Galaxy Ayurveda
                </span>
                {/* Traditional herbal motif ornament */}
                <div className="flex items-center gap-1.5 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="h-[1px] w-6 bg-gold/70" />
                  <span className="text-[10px] tracking-[0.25em] uppercase text-gold-dark font-medium">
                    100% Herbal &bull; Unani
                  </span>
                  <span className="h-[1px] w-6 bg-gold/70" />
                </div>
              </Link>
            </div>

            {/* Right Column: WhatsApp consultation & Direct Action Buttons */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* WhatsApp direct order / consultation button */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1B4332] text-white rounded text-xs font-semibold tracking-wider uppercase hover:bg-forest-dark transition-all hover:shadow-xs"
                title="Direct WhatsApp Consultation"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                <span>WhatsApp Order</span>
              </a>

              {/* Mobile quick WhatsApp icon */}
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden p-2 text-forest hover:text-gold transition-colors"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
              </a>

              {/* Catalog quick link */}
              <Link
                href="/products"
                className="p-2 text-charcoal hover:text-forest transition-colors relative"
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
