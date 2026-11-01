"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  Heart,
  MessageCircle,
  Truck,
  ShieldCheck,
  Leaf,
  Clock,
  Sparkles,
  CheckCircle2,
  Share2,
  FileCheck,
} from "lucide-react";
import { Product } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice, calculateDiscount } from "@/lib/utils";
import { generateWhatsAppOrderLink, generateWhatsAppConsultationLink } from "@/lib/whatsapp";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductDetailViewProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductDetailView({
  product,
  relatedProducts,
}: ProductDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isLiked, setIsLiked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<"benefits" | "ingredients" | "dosage">("benefits");

  const discount = calculateDiscount(product.price, product.mrp);
  const category = categories.find((c) => c.slug === product.category);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const whatsappOrderUrl = generateWhatsAppOrderLink({
    name: product.name,
    price: product.price,
    mrp: product.mrp,
    weight: product.weight,
    slug: product.slug,
  });

  const whatsappConsultUrl = generateWhatsAppConsultationLink(product.name);

  return (
    <div className="w-full">
      {/* Main Product Hero Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4">
            {/* Primary Main Image Frame */}
            <div className="relative aspect-square w-full bg-white rounded-lg border border-[#e8dfcd] overflow-hidden p-6 sm:p-10 flex items-center justify-center shadow-xs">
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Wishlist button */}
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-xs rounded-full border border-border shadow-xs text-charcoal-muted hover:text-red-600 transition-colors"
                aria-label="Save to wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isLiked ? "fill-red-600 text-red-600" : ""
                  }`}
                />
              </button>

              {/* Share button */}
              <button
                onClick={handleShare}
                className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-xs rounded-full border border-border shadow-xs text-charcoal-muted hover:text-forest transition-colors"
                aria-label="Share formulation"
                title="Share link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {copiedLink && (
                <span className="absolute top-16 left-4 text-[10px] bg-forest text-white px-2 py-0.5 rounded shadow">
                  Link copied!
                </span>
              )}
            </div>

            {/* Thumbnail Gallery (if multiple images) */}
            {product.images && product.images.length > 1 && (
              <div className="flex items-center gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-20 h-20 rounded-md bg-white border p-1 overflow-hidden transition-all ${
                      selectedImage === img
                        ? "border-forest ring-2 ring-forest/30"
                        : "border-[#e8dfcd] hover:border-forest/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} preview ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Purity Guarantee Mini Strip */}
            <div className="bg-[#FAF6F0] p-4 rounded-lg border border-[#e8dfcd] grid grid-cols-3 gap-2 text-center text-xs">
              <div className="flex flex-col items-center">
                <Leaf className="w-4 h-4 text-forest mb-1" />
                <span className="font-semibold text-charcoal text-[11px]">100% Herbal</span>
                <span className="text-[10px] text-charcoal-muted">Zero Synthetics</span>
              </div>
              <div className="flex flex-col items-center border-x border-border/80">
                <ShieldCheck className="w-4 h-4 text-forest mb-1" />
                <span className="font-semibold text-charcoal text-[11px]">AYUSH Reg.</span>
                <span className="text-[10px] text-charcoal-muted">Lab Tested</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-4 h-4 text-forest mb-1" />
                <span className="font-semibold text-charcoal text-[11px]">Fresh Packed</span>
                <span className="text-[10px] text-charcoal-muted">Direct Dispensary</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Information & CTAs */}
          <div className="space-y-6">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                {category && (
                  <Link
                    href={`/category/${category.slug}`}
                    className="text-xs font-semibold uppercase tracking-widest text-gold-dark hover:underline"
                  >
                    {category.name}
                  </Link>
                )}
                {product.badge && (
                  <span className="px-2 py-0.5 bg-[#8a3324] text-white text-[10px] font-bold tracking-wider uppercase rounded">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-forest tracking-tight leading-tight">
                {product.name}
              </h1>

              {/* Botanical Subtitle */}
              <p className="mt-2 text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
                {product.botanicalSubtitle}
              </p>

              {/* Rating row */}
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-border/40 text-xs">
                <div className="flex items-center gap-1 text-charcoal font-semibold">
                  <span>{product.rating.toFixed(1)}</span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(product.rating)
                            ? "fill-[#C9A84C] text-[#C9A84C]"
                            : "text-stone-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-charcoal-muted">•</span>
                <span className="text-charcoal-muted">
                  {product.reviewCount} verified dispensary customer reviews
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-[#FAF6F0] p-4 rounded-lg border border-[#e8dfcd]">
              <div className="flex items-baseline gap-3">
                <span className="font-sans text-2xl sm:text-3xl font-bold text-forest">
                  {formatPrice(product.price)}
                </span>
                {product.mrp > product.price && (
                  <>
                    <span className="text-sm text-charcoal-muted line-through">
                      {formatPrice(product.mrp)}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Save {formatPrice(product.mrp - product.price)} ({discount}% OFF)
                    </span>
                  </>
                )}
              </div>
              <p className="text-[11px] text-charcoal-muted mt-1">
                Inclusive of all taxes • Pack Size: <strong>{product.weight}</strong>
              </p>
            </div>

            {/* WhatsApp Ordering CTAs */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#25D366] hover:bg-[#20b858] text-white rounded font-sans font-semibold text-sm tracking-widest uppercase shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>Order on WhatsApp (Instant Reply)</span>
              </a>

              <a
                href={whatsappConsultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-white hover:bg-forest text-forest hover:text-white border border-forest rounded font-sans font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Consult Herbalist Regarding This Herb</span>
              </a>
            </div>

            {/* Fast Delivery & Trust Notes */}
            <div className="space-y-2 pt-2 border-t border-border/60 text-xs text-charcoal-light">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-forest shrink-0" />
                <span>
                  <strong>Dispatches within 24 hours</strong> from Mumbai dispensary • Pan-India delivery.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold shrink-0" />
                <span>Free delivery on all orders above ₹499.</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-forest shrink-0" />
                <span>COD & UPI payment options available upon WhatsApp confirmation.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed In-Depth Information: Benefits, Ingredients, Usage */}
        <div className="mt-16 pt-10 border-t border-[#e8dfcd]">
          {/* Tabs header */}
          <div className="flex border-b border-[#e8dfcd] overflow-x-auto gap-4 sm:gap-8">
            <button
              onClick={() => setActiveTab("benefits")}
              className={`pb-3 font-serif text-base sm:text-lg font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === "benefits"
                  ? "border-forest text-forest font-bold"
                  : "border-transparent text-charcoal-muted hover:text-charcoal"
              }`}
            >
              Therapeutic Benefits
            </button>
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`pb-3 font-serif text-base sm:text-lg font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === "ingredients"
                  ? "border-forest text-forest font-bold"
                  : "border-transparent text-charcoal-muted hover:text-charcoal"
              }`}
            >
              Classical Ingredients
            </button>
            <button
              onClick={() => setActiveTab("dosage")}
              className={`pb-3 font-serif text-base sm:text-lg font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === "dosage"
                  ? "border-forest text-forest font-bold"
                  : "border-transparent text-charcoal-muted hover:text-charcoal"
              }`}
            >
              Dosage & Directions (Vidhi)
            </button>
          </div>

          {/* Tab Content */}
          <div className="py-6 sm:py-8">
            {activeTab === "benefits" && (
              <div className="space-y-4 max-w-3xl">
                <div
                  className="prose prose-stone text-sm sm:text-base leading-relaxed text-charcoal-light"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <h4 className="font-serif text-base font-bold text-forest pt-3">
                  Key Documented Benefits:
                </h4>
                <ul className="space-y-2.5">
                  {product.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="max-w-3xl space-y-4">
                <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Every botanical constituent is authenticated under microscopic & organoleptic pharmacognostic testing.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.ingredients.map((ing, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded border border-[#e8dfcd] flex items-center gap-2.5 text-xs sm:text-sm font-medium text-charcoal"
                    >
                      <Leaf className="w-4 h-4 text-forest shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "dosage" && (
              <div className="max-w-3xl bg-white p-6 rounded-lg border border-[#e8dfcd] space-y-3">
                <h4 className="font-serif text-base font-bold text-forest">
                  Recommended Ayurvedic Protocol:
                </h4>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {product.dosage}
                </p>
                <div className="pt-2 text-xs text-charcoal-muted border-t border-border/60">
                  <p>
                    <em>Note:</em> In classical medicine, anupana (the carrier, e.g. warm milk, warm water, honey, or ghee) plays a critical role in carrying the herbal potency directly to deep tissues (Dhatus).
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Formulations Carousel / Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#e8dfcd]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-dark block">
                  Complementary Healing
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest">
                  Related Formulations You May Need
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold uppercase tracking-wider text-forest hover:text-gold-dark transition-colors underline underline-offset-4"
              >
                View Catalog
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedProducts.slice(0, 4).map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
