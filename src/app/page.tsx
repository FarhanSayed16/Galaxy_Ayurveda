import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { TrustBadges } from "@/components/home/TrustBadges";
import { CTABanner } from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col">
      {/* 1. Full-width Luxury Hero Slider */}
      <HeroSection />

      {/* 2. Featured Bestsellers (4-column grid with WhatsApp action) */}
      <FeaturedProducts />

      {/* 3. Shop by Classical Ayurvedic & Unani Category */}
      <CategoryShowcase />

      {/* 4. Why Choose Galaxy Ayurveda (4 Value Pillars) */}
      <WhyChooseUs />

      {/* 5. Brand Heritage & Dispensary Story Snippet */}
      <AboutSnippet />

      {/* 6. Regulatory Trust & License Badges */}
      <TrustBadges />

      {/* 7. Direct WhatsApp Consultation Banner */}
      <CTABanner />
    </div>
  );
}
