import Image from "next/link";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";
import { Category } from "@/data/categories";
import { products } from "@/data/products";

interface MegaMenuProps {
  category: Category;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaMenu({
  category,
  isOpen,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  if (!isOpen) return null;

  // Find a featured product in this category
  const featuredProduct =
    products.find((p) => p.category === category.slug && p.isFeatured) ||
    products.find((p) => p.category === category.slug);

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 w-full bg-[#FAF6F0] border-b border-border shadow-2xl py-8 px-6 z-40 animate-in fade-in slide-in-from-top-1 duration-200"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: By Category / Formulation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-serif font-bold text-forest border-b border-border/80 pb-2 mb-3.5 flex items-center gap-1.5">
              <Leaf className="w-3.5 h-3.5 text-gold-dark" />
              By Formulation
            </h4>
            <ul className="space-y-2">
              {category.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/category/${category.slug}?sub=${sub.slug}`}
                    className="text-xs md:text-sm text-charcoal hover:text-forest hover:translate-x-1 transition-all inline-block py-0.5"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: By Concern */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-serif font-bold text-forest border-b border-border/80 pb-2 mb-3.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              By Health Concern
            </h4>
            <ul className="space-y-2">
              {category.concerns.map((concern) => (
                <li key={concern.slug}>
                  <Link
                    href={`/category/${category.slug}?concern=${concern.slug}`}
                    className="text-xs md:text-sm text-charcoal hover:text-forest hover:translate-x-1 transition-all inline-block py-0.5"
                  >
                    {concern.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Formulation Card */}
          <div className="bg-white p-3.5 rounded-lg border border-border/70 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-2">
                Featured Formulation
              </span>
              {featuredProduct ? (
                <>
                  <div className="relative aspect-4/3 w-full bg-stone-50 rounded overflow-hidden mb-2.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featuredProduct.image}
                      alt={featuredProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h5 className="font-serif text-sm font-semibold text-charcoal line-clamp-1">
                    {featuredProduct.name}
                  </h5>
                  <p className="text-xs text-charcoal-muted line-clamp-2 mt-1">
                    {featuredProduct.botanicalSubtitle}
                  </p>
                </>
              ) : (
                <div className="text-xs text-charcoal-muted py-8 text-center">
                  Classical Herbal Preparation
                </div>
              )}
            </div>
            {featuredProduct && (
              <Link
                href={`/products/${featuredProduct.slug}`}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-gold-dark transition-colors uppercase tracking-wider pt-2 border-t border-border/40"
              >
                Shop Now <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>

          {/* Column 4: Ayurvedic Wisdom / Philosophy */}
          <div className="bg-white p-3.5 rounded-lg border border-border/70 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-forest block mb-2">
                Herbal Philosophy
              </span>
              <div className="relative aspect-4/3 w-full bg-stone-50 rounded overflow-hidden mb-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="font-serif text-sm font-semibold text-charcoal line-clamp-1">
                The Heritage of {category.shortTitle}
              </h5>
              <p className="text-xs text-charcoal-muted line-clamp-2 mt-1">
                {category.description}
              </p>
            </div>
            <Link
              href={`/about#${category.slug}`}
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-forest hover:text-gold-dark transition-colors uppercase tracking-wider pt-2 border-t border-border/40"
            >
              Read Herbology <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar: View All Category Link */}
        <div className="mt-6 pt-4 border-t border-border/70 text-center">
          <Link
            href={`/category/${category.slug}`}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-forest hover:text-gold-dark transition-colors underline underline-offset-4"
          >
            View All {category.name} &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

