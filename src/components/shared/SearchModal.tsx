"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, Sparkles } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const filteredProducts = trimmed
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.shortDescription.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.tags.some((t) => t.toLowerCase().includes(trimmed)) ||
          p.concerns.some((c) => c.toLowerCase().includes(trimmed))
      )
    : [];

  const matchedCategories = trimmed
    ? categories.filter(
        (c) =>
          c.name.toLowerCase().includes(trimmed) ||
          c.shortTitle.toLowerCase().includes(trimmed) ||
          c.description.toLowerCase().includes(trimmed)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-charcoal/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full bg-[#FAF6F0] border-b border-border shadow-xl pb-6 pt-4 px-4 sm:px-6 lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto">
          {/* Header row */}
          <div className="flex items-center justify-between pb-3 border-b border-border/80">
            <span className="text-xs uppercase tracking-widest text-charcoal-muted font-serif">
              Search Galaxy Ayurveda
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-charcoal-light hover:text-forest transition-colors rounded-full hover:bg-black/5"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="relative mt-4 flex items-center">
            <Search className="w-5 h-5 text-forest/70 absolute left-3 pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by herb, formulation (e.g. Kumkumadi, Ashwagandha, Bhringraj), or health concern..."
              className="w-full pl-11 pr-10 py-3.5 bg-white border border-border/80 rounded-lg text-charcoal placeholder:text-charcoal-muted/70 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest transition-all shadow-sm"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 p-1 text-charcoal-muted hover:text-charcoal"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Suggestions when empty */}
          {!trimmed && (
            <div className="mt-4 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Popular Herbal Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kumkumadi",
                  "Bhringraj Hair Oil",
                  "Ashwagandha Churna",
                  "Triphala Detox",
                  "Unani Khamira",
                  "Kesar Chyawanprash",
                  "Joint Pain Oil",
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1.5 bg-white border border-border/70 rounded-full text-charcoal-light hover:text-forest hover:border-forest hover:bg-forest/5 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results Display */}
          {trimmed && (
            <div className="mt-5 max-h-[60vh] overflow-y-auto space-y-4 pr-1">
              {/* Matched Categories */}
              {matchedCategories.length > 0 && (
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-forest mb-2">
                    Categories ({matchedCategories.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={`/category/${cat.slug}`}
                        onClick={onClose}
                        className="flex items-center justify-between p-2.5 bg-white rounded-md border border-border/60 hover:border-forest hover:shadow-xs transition-all group"
                      >
                        <div>
                          <p className="text-sm font-medium text-forest group-hover:text-gold-dark transition-colors">
                            {cat.name}
                          </p>
                          <p className="text-xs text-charcoal-muted line-clamp-1">
                            {cat.subtitle}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-charcoal-muted group-hover:text-forest group-hover:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Products */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-forest">
                    Products ({filteredProducts.length})
                  </h4>
                  {filteredProducts.length > 0 && (
                    <Link
                      href={`/products?search=${encodeURIComponent(trimmed)}`}
                      onClick={onClose}
                      className="text-xs text-forest hover:text-gold-dark font-medium underline underline-offset-4"
                    >
                      View all in catalog &rarr;
                    </Link>
                  )}
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="py-8 text-center bg-white rounded-lg border border-dashed border-border">
                    <p className="text-sm text-charcoal font-medium">
                      No formulations found matching &ldquo;{query}&rdquo;
                    </p>
                    <p className="text-xs text-charcoal-muted mt-1">
                      Try searching by generic herb name (e.g. Amla, Saffron, Brahmi) or contact our herbalist directly via WhatsApp.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-border/60 hover:border-forest hover:shadow-sm transition-all group"
                      >
                        <div className="relative w-16 h-16 shrink-0 bg-stone-50 rounded-md overflow-hidden border border-border/40">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-dark">
                            {product.category}
                          </span>
                          <p className="text-sm font-serif font-medium text-charcoal group-hover:text-forest line-clamp-1 transition-colors">
                            {product.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-sm font-bold text-forest">
                              {formatPrice(product.price)}
                            </span>
                            {product.mrp > product.price && (
                              <span className="text-xs text-charcoal-muted line-through">
                                {formatPrice(product.mrp)}
                              </span>
                            )}
                            <span className="text-[11px] text-charcoal-muted ml-auto">
                              {product.weight}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Click outside backdrop to close */}
      <div className="flex-1 cursor-pointer" onClick={onClose} />
    </div>
  );
}
