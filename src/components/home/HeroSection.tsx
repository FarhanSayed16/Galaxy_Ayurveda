"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Leaf,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface HeroSlide {
  id: number;
  eyebrow: string;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    eyebrow: "AUTHENTIC VEDIC HERBOLOGY",
    title: "100% Natural Herbal & Unani Formulations",
    subtitle:
      "Crafted strictly according to classical Ayurvedic Pharmacopoeia and Unani Tibb texts. Pure botanical roots, medicated tailams, and restorative rasayanas.",
    tagline: "Free Home Delivery on Orders Above ₹499",
    image:
      "https://images.unsplash.com/photo-1608248597359-00f72393d256?auto=format&fit=crop&w=1600&q=85",
    primaryCtaText: "Explore Formulations",
    primaryCtaLink: "/products",
    secondaryCtaText: "Order on WhatsApp",
    secondaryCtaLink: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
  {
    id: 2,
    eyebrow: "SACRED BOTANICAL CARE",
    title: "Kumkumadi & Bhringraj Scalp Therapies",
    subtitle:
      "Infused with grade-1 Kashmiri saffron and hand-simmered false daisy herb to revitalize dull skin and halt excess hair fall at the root.",
    tagline: "Zero Mineral Oils • Zero Artificial Fragrances",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=85",
    primaryCtaText: "Shop Hair & Skincare",
    primaryCtaLink: "/category/skincare",
    secondaryCtaText: "Consult Herbalist",
    secondaryCtaLink: `https://wa.me/${siteConfig.contact.whatsapp}?text=Hello!+I+need+advice+on+herbal+hair+and+skincare.`,
  },
  {
    id: 3,
    eyebrow: "TRADITIONAL DISPENSARY HERITAGE",
    title: "Pure Single Churna & Royal Unani Khamira",
    subtitle:
      "From single-origin Nagori Ashwagandha and classical Triphala to royal Unani Khamira Abresham with pure pearl and silver foil.",
    tagline: "FSSAI & AYUSH Licensed Dispensary",
    image:
      "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1600&q=85",
    primaryCtaText: "Browse Powders & Unani",
    primaryCtaLink: "/category/churna",
    secondaryCtaText: "Order via WhatsApp",
    secondaryCtaLink: `https://wa.me/${siteConfig.contact.whatsapp}`,
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full bg-[#17231c] text-[#FAF6F0] overflow-hidden">
      {/* Background Imagery with Opacity Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          priority
          className="object-cover object-center transition-all duration-1000 ease-in-out scale-105"
          sizes="100vw"
        />
        {/* Multi-layered luxury gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1e16]/95 via-[#132c20]/85 to-[#1c3829]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,transparent_20%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 flex flex-col justify-center min-h-[560px] md:min-h-[640px]">
        <div className="max-w-2xl space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-700 key={slide.id}">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/40 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-gold-light">
              {slide.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-white drop-shadow-xs">
            {slide.title}
          </h1>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-[#d8e6dc] leading-relaxed max-w-xl">
            {slide.subtitle}
          </p>

          {/* Special Tagline Highlight */}
          <div className="flex items-center gap-2 pt-1 text-gold-light text-xs md:text-sm font-medium tracking-wide">
            <Leaf className="w-4 h-4 text-gold shrink-0" />
            <span>{slide.tagline}</span>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={slide.primaryCtaText ? slide.primaryCtaLink : "/products"}
              className="px-7 py-3.5 bg-gold hover:bg-gold-light text-[#1B4332] font-semibold text-xs tracking-widest uppercase rounded shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              {slide.primaryCtaText}
            </Link>

            <a
              href={slide.secondaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs font-semibold text-xs tracking-widest uppercase rounded transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              {slide.secondaryCtaText}
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls (Left / Right Arrows) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-colors backdrop-blur-xs"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-colors backdrop-blur-xs"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              currentSlide === idx ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
