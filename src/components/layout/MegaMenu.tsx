"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, X } from "lucide-react";
import { Category } from "@/data/categories";
import { products } from "@/data/products";

interface MegaMenuProps {
  category: Category;
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({
  category,
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!isOpen) return null;

  // Find a featured product in this category
  const featuredProduct =
    products.find((p) => p.category === category.slug && p.isFeatured) ||
    products.find((p) => p.category === category.slug);

  return (
    <>
      {/* Soft translucent backdrop - clicking outside closes the menu */}
      <div
        className="fixed inset-0 top-[110px] bg-charcoal/25 backdrop-blur-[1px] z-30 transition-opacity animate-in fade-in duration-150"
        onClick={onClose}
      />

      {/* Compact, refined Mega Menu dropdown */}
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="absolute top-full left-0 w-full bg-[#FAF7F2] border-b border-[#e8dfcd] shadow-xl py-6 px-4 sm:px-6 lg:px-8 z-40 animate-in fade-in slide-in-from-top-1 duration-150"
      >
        <div className="max-w-7xl mx-auto relative">
          {/* Subtle Top Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-3 right-0 p-1 text-charcoal-muted hover:text-forest transition-colors rounded-full hover:bg-black/5"
            aria-label="Close menu"
            title="Close menu"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8 items-start">
            {/* Column 1: By Formulation (Title Case, clean serif heading) */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.16em] font-serif font-bold text-forest border-b border-[#e8dfcd] pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-gold" />
                By Formulation
              </h4>
              <ul className="space-y-1.5">
                {category.subcategories.map((sub) => (
                  <li key={sub.slug}>
                    <Link
                      href={`/category/${category.slug}?sub=${sub.slug}`}
                      onClick={onClose}
                      className="text-xs text-charcoal-light hover:text-forest hover:translate-x-0.5 transition-all inline-block py-0.5 normal-case"
                    >
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: By Concern (Title Case, clean serif heading) */}
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.16em] font-serif font-bold text-forest border-b border-[#e8dfcd] pb-1.5 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                By Health Concern
              </h4>
              <ul className="space-y-1.5">
                {category.concerns.map((concern) => (
                  <li key={concern.slug}>
                    <Link
                      href={`/category/${category.slug}?concern=${concern.slug}`}
                      onClick={onClose}
                      className="text-xs text-charcoal-light hover:text-forest hover:translate-x-0.5 transition-all inline-block py-0.5 normal-case"
                    >
                      {concern.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Compact Spotlight Product Card */}
            <div className="bg-white p-3 rounded-lg border border-[#e8dfcd] shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1.5">
                  Featured Formulation
                </span>
                {featuredProduct ? (
                  <>
                    <div className="relative aspect-16/9 w-full bg-[#FAF7F2] rounded overflow-hidden mb-2">
                      <Image
                        src={featuredProduct.image}
                        alt={featuredProduct.name}
                        fill
                        className="object-cover"
                        sizes="240px"
                      />
                    </div>
                    <h5 className="font-serif text-xs font-semibold text-charcoal line-clamp-1">
                      {featuredProduct.name}
                    </h5>
                    <p className="text-[11px] text-charcoal-muted line-clamp-1 mt-0.5">
                      {featuredProduct.botanicalSubtitle}
                    </p>
                  </>
                ) : (
                  <div className="text-xs text-charcoal-muted py-4 text-center">
                    Classical Preparation
                  </div>
                )}
              </div>
              {featuredProduct && (
                <Link
                  href={`/products/${featuredProduct.slug}`}
                  onClick={onClose}
                  className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-forest hover:text-gold-dark transition-colors uppercase tracking-wider pt-1.5 border-t border-border/40"
                >
                  Shop Formulation <ArrowRight className="w-3 h-3" />
                </Link>
              )}
            </div>

            {/* Column 4: Compact Herbal Wisdom Card */}
            <div className="bg-white p-3 rounded-lg border border-[#e8dfcd] shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest block mb-1.5">
                  Herbal Philosophy
                </span>
                <div className="relative aspect-16/9 w-full bg-[#FAF7F2] rounded overflow-hidden mb-2">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
                <h5 className="font-serif text-xs font-semibold text-charcoal line-clamp-1">
                  The Heritage of {category.shortTitle}
                </h5>
                <p className="text-[11px] text-charcoal-muted line-clamp-1 mt-0.5">
                  {category.subtitle}
                </p>
              </div>
              <Link
                href={`/about#${category.slug}`}
                onClick={onClose}
                className="mt-2.5 inline-flex items-center gap-1 text-[11px] font-semibold text-forest hover:text-gold-dark transition-colors uppercase tracking-wider pt-1.5 border-t border-border/40"
              >
                Read Herbology <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Bottom Sleek Bar: View All Category Link */}
          <div className="mt-4 pt-3 border-t border-[#e8dfcd] flex items-center justify-between text-xs">
            <span className="text-charcoal-muted text-[11px]">
              Explore pure {category.shortTitle} formulations crafted per classical Shastras
            </span>
            <Link
              href={`/category/${category.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-forest hover:text-gold-dark transition-colors underline underline-offset-4"
            >
              <span>View All {category.name}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
