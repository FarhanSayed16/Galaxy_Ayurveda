"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { categories, Category } from "@/data/categories";
import { MegaMenu } from "./MegaMenu";

export function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (cat: Category) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(cat);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  };

  return (
    <div
      className="relative hidden lg:block bg-[#FAF6F0] border-b border-border/80 text-charcoal font-sans text-xs tracking-wider uppercase z-30 select-none"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-center space-x-1 py-2.5 overflow-x-auto no-scrollbar"
          aria-label="Category Navigation"
        >
          {categories.map((cat, idx) => {
            const isHovered = activeCategory?.slug === cat.slug;

            return (
              <div
                key={cat.slug}
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter(cat)}
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className={`px-3 py-1 font-medium transition-all duration-150 rounded relative group whitespace-nowrap ${
                    isHovered
                      ? "text-forest font-semibold"
                      : "text-charcoal hover:text-forest"
                  }`}
                >
                  {cat.shortTitle}
                  {cat.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 bg-[#B73E2F] text-white text-[9px] font-bold rounded-full normal-case tracking-normal">
                      {cat.badge}
                    </span>
                  )}
                  {/* Subtle underline on hover/active */}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] bg-forest transition-transform duration-200 origin-left ${
                      isHovered ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>

                {/* Separator dot like Kama Ayurveda */}
                {idx < categories.length - 1 && (
                  <span className="text-border mx-1 select-none text-[8px] opacity-60">
                    ◆
                  </span>
                )}
              </div>
            );
          })}

          {/* Separator before All Products */}
          <span className="text-border mx-1 select-none text-[8px] opacity-60">
            ◆
          </span>

          <Link
            href="/products"
            className="px-3 py-1 font-semibold text-gold-dark hover:text-forest transition-colors whitespace-nowrap"
          >
            All Formulations
          </Link>
        </nav>
      </div>

      {/* Render active mega menu */}
      {activeCategory && (
        <MegaMenu
          category={activeCategory}
          isOpen={Boolean(activeCategory)}
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
