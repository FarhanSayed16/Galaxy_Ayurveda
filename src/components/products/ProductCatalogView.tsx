"use client";

import { useState, useMemo } from "react";
import {
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  X,
  Check,
  Sparkles,
  Filter,
} from "lucide-react";
import { Product } from "@/data/products";
import { categories } from "@/data/categories";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductCatalogViewProps {
  initialProducts: Product[];
  initialCategory?: string;
  initialConcern?: string;
  pageTitle?: string;
  pageDescription?: string;
}

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export function ProductCatalogView({
  initialProducts,
  initialCategory,
  initialConcern,
  pageTitle = "Shop Authentic Ayurvedic Products",
  pageDescription = "Pure, chemical-free herbal, Ayurvedic, and Unani formulations crafted according to classical Shastras.",
}: ProductCatalogViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || "all"
  );
  const [selectedConcern, setSelectedConcern] = useState<string>(
    initialConcern || "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract all unique concerns across categories
  const allConcerns = useMemo(() => {
    const map = new Map<string, string>();
    categories.forEach((cat) => {
      cat.concerns.forEach((c) => {
        if (!map.has(c.slug)) {
          map.set(c.slug, c.name);
        }
      });
    });
    return Array.from(map.entries()).map(([slug, name]) => ({ slug, name }));
  }, []);

  // Filter products based on search, category, and concern
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      // Category filter
      if (selectedCategory !== "all" && p.category !== selectedCategory) {
        return false;
      }

      // Concern filter
      if (selectedConcern !== "all" && !p.concerns.includes(selectedConcern)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesTag = p.tags.some((t) => t.toLowerCase().includes(q));
        const matchesCategory = p.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesTag && !matchesCategory) {
          return false;
        }
      }

      return true;
    });
  }, [initialProducts, selectedCategory, selectedConcern, searchQuery]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (sortBy) {
      case "price-asc":
        return list.sort((a, b) => a.price - b.price);
      case "price-desc":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      case "newest":
        return list.reverse();
      case "featured":
      default:
        return list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }
  }, [filteredProducts, sortBy]);

  const activeFiltersCount =
    (selectedCategory !== "all" ? 1 : 0) +
    (selectedConcern !== "all" ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0);

  const clearAllFilters = () => {
    setSelectedCategory("all");
    setSelectedConcern("all");
    setSearchQuery("");
  };

  return (
    <div className="w-full">
      {/* Editorial Header (Matching Screenshot 2) */}
      <div className="pt-4 pb-8 border-b border-[#e8dfcd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-forest tracking-tight">
            {pageTitle}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-charcoal-light max-w-2xl">
            {pageDescription}
          </p>
        </div>
      </div>

      {/* Catalog Controls Bar (SORT BY & FILTER BY - Matching Screenshot 2) */}
      <div className="bg-[#FAF6F0] border-b border-[#e8dfcd] py-3.5 sticky top-[69px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Result Count and Active Badges */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-charcoal-muted font-medium">
              Showing <strong>{sortedProducts.length}</strong> formulations
            </span>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="hidden sm:inline-flex items-center gap-1 text-xs text-[#8a3324] hover:underline font-semibold"
              >
                Clear all filters ({activeFiltersCount})
              </button>
            )}
          </div>

          {/* Right Action Controls: SORT BY and FILTER BY */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#8a3324]">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort formulations by"
                className="bg-transparent text-xs font-semibold text-[#8a3324] uppercase border-none focus:outline-none cursor-pointer pr-2"
              >
                <option value="featured">Featured / Bestseller</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>

            {/* Filter Toggle (for mobile drawer or toggle desktop sidebar) */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#8a3324] py-1 px-2.5 rounded border border-[#8a3324]/30 hover:bg-[#8a3324]/5 transition-colors"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER BY</span>
              {activeFiltersCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#8a3324] text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area: Sidebar Filters (Desktop) + Product Grid (3 cols) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Left Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 space-y-6 select-none">
            {/* Search within catalog */}
            <div className="bg-white p-4 rounded-lg border border-[#e8dfcd]">
              <label className="text-xs uppercase font-serif font-bold tracking-wider text-forest block mb-2">
                Filter by Keyword
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="e.g. Saffron, Hair, Root..."
                  className="w-full pl-9 pr-8 py-2 text-xs bg-[#FAF6F0] border border-border/80 rounded focus:outline-none focus:border-forest"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-charcoal-muted hover:text-charcoal"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white p-4 rounded-lg border border-[#e8dfcd]">
              <h3 className="text-xs uppercase font-serif font-bold tracking-wider text-forest border-b border-border/60 pb-2 mb-3">
                Classical Category
              </h3>
              <div className="space-y-1.5 text-xs">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full flex items-center justify-between text-left py-1 px-2 rounded transition-colors ${
                    selectedCategory === "all"
                      ? "bg-forest text-white font-semibold"
                      : "text-charcoal hover:bg-forest/5"
                  }`}
                >
                  <span>All Formulations</span>
                  <span>{initialProducts.length}</span>
                </button>
                {categories.map((cat) => {
                  const count = initialProducts.filter(
                    (p) => p.category === cat.slug
                  ).length;
                  const isSelected = selectedCategory === cat.slug;

                  return (
                    <button
                      key={cat.slug}
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`w-full flex items-center justify-between text-left py-1 px-2 rounded transition-colors ${
                        isSelected
                          ? "bg-forest text-white font-semibold"
                          : "text-charcoal hover:bg-forest/5"
                      }`}
                    >
                      <span className="line-clamp-1">{cat.name}</span>
                      <span className="text-[11px] opacity-80">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Health Concern Filter */}
            <div className="bg-white p-4 rounded-lg border border-[#e8dfcd]">
              <h3 className="text-xs uppercase font-serif font-bold tracking-wider text-forest border-b border-border/60 pb-2 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                Health Concern
              </h3>
              <div className="space-y-1 text-xs max-h-64 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedConcern("all")}
                  className={`w-full text-left py-1 px-2 rounded transition-colors ${
                    selectedConcern === "all"
                      ? "text-forest font-bold"
                      : "text-charcoal hover:text-forest"
                  }`}
                >
                  All Concerns
                </button>
                {allConcerns.map((concern) => {
                  const isSelected = selectedConcern === concern.slug;
                  return (
                    <button
                      key={concern.slug}
                      onClick={() => setSelectedConcern(concern.slug)}
                      className={`w-full text-left py-1 px-2 rounded flex items-center justify-between transition-colors ${
                        isSelected
                          ? "text-forest font-bold bg-forest/5"
                          : "text-charcoal-light hover:text-forest"
                      }`}
                    >
                      <span>{concern.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-forest" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Product Grid Column (3 cols on desktop - Matching Screenshot 2 & 3) */}
          <div className="lg:col-span-3">
            {sortedProducts.length === 0 ? (
              <div className="py-16 text-center bg-white rounded-lg border border-dashed border-[#e8dfcd] p-8">
                <Sparkles className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="font-serif text-xl font-medium text-forest">
                  No formulations found
                </h3>
                <p className="text-xs text-charcoal-muted mt-1 max-w-md mx-auto">
                  Try clearing your search query or selected filters to view all
                  classical formulations.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-4 px-5 py-2 bg-forest text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-forest-dark transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-[#FAF6F0] h-full shadow-2xl flex flex-col z-10 p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-border">
              <h3 className="font-serif text-base font-bold text-forest uppercase tracking-wider">
                Filter Formulations
              </h3>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-charcoal hover:text-forest"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-6">
              {/* Category */}
              <div>
                <h4 className="text-xs uppercase font-serif font-bold text-forest mb-2">
                  Category
                </h4>
                <div className="space-y-1 text-xs">
                  <button
                    onClick={() => {
                      setSelectedCategory("all");
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left py-1.5 px-2 rounded ${
                      selectedCategory === "all"
                        ? "bg-forest text-white font-bold"
                        : "text-charcoal"
                    }`}
                  >
                    All Formulations
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => {
                        setSelectedCategory(cat.slug);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`w-full text-left py-1.5 px-2 rounded ${
                        selectedCategory === cat.slug
                          ? "bg-forest text-white font-bold"
                          : "text-charcoal"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Concern */}
              <div>
                <h4 className="text-xs uppercase font-serif font-bold text-forest mb-2">
                  Health Concern
                </h4>
                <div className="space-y-1 text-xs max-h-48 overflow-y-auto">
                  <button
                    onClick={() => {
                      setSelectedConcern("all");
                      setIsMobileFilterOpen(false);
                    }}
                    className={`w-full text-left py-1.5 px-2 rounded ${
                      selectedConcern === "all"
                        ? "bg-forest text-white font-bold"
                        : "text-charcoal"
                    }`}
                  >
                    All Concerns
                  </button>
                  {allConcerns.map((c) => (
                    <button
                      key={c.slug}
                      onClick={() => {
                        setSelectedConcern(c.slug);
                        setIsMobileFilterOpen(false);
                      }}
                      className={`w-full text-left py-1.5 px-2 rounded ${
                        selectedConcern === c.slug
                          ? "bg-forest text-white font-bold"
                          : "text-charcoal"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-border flex gap-2">
              <button
                onClick={() => {
                  clearAllFilters();
                  setIsMobileFilterOpen(false);
                }}
                className="flex-1 py-2 text-xs border border-border text-charcoal rounded font-semibold"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="flex-1 py-2 text-xs bg-forest text-white rounded font-semibold"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

