"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { categories, Category } from "@/data/categories";
import { MegaMenu } from "./MegaMenu";

export function CategoryBar() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-dismiss on page scroll so it never obstructs reading content
  useEffect(() => {
    const handleScroll = () => {
      if (activeCategory) {
        setActiveCategory(null);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeCategory]);

  // Dismiss on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCategory(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleMouseEnter = useCallback((cat: Category) => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);

    // Intentional hover delay (220ms) to prevent accidental popups while scrolling
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(cat);
    }, 220);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  }, []);

  const handleClose = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    setActiveCategory(null);
  }, []);

  return (
    <div
      className="relative hidden lg:block bg-[#FAF7F2] border-b border-[#e8dfcd] text-charcoal font-sans text-xs tracking-wider uppercase z-30 select-none"
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
                  onClick={handleClose}
                  className={`px-3 py-1 font-medium transition-all duration-150 rounded relative group whitespace-nowrap ${
                    isHovered
                      ? "text-forest font-semibold"
                      : "text-charcoal hover:text-forest"
                  }`}
                >
                  {cat.shortTitle}
                  {cat.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 bg-[#94382b] text-white text-[9px] font-bold rounded-full normal-case tracking-normal">
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
                  <span className="text-[#c5a059] mx-1.5 select-none text-[8px] opacity-40">
                    ◆
                  </span>
                )}
              </div>
            );
          })}

          {/* Separator before All Products */}
          <span className="text-[#c5a059] mx-1.5 select-none text-[8px] opacity-40">
            ◆
          </span>

          <Link
            href="/products"
            onClick={handleClose}
            className="px-3 py-1 font-semibold text-gold-dark hover:text-forest transition-colors whitespace-nowrap"
          >
            All Formulations
          </Link>
        </nav>
      </div>

      {/* Render active mega menu with close handle & auto-dismiss on scroll */}
      {activeCategory && (
        <MegaMenu
          category={activeCategory}
          isOpen={Boolean(activeCategory)}
          onClose={handleClose}
          onMouseEnter={() => {
            if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        />
      )}
    </div>
  );
}
