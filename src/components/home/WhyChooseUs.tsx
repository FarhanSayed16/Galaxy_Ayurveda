import {
  Leaf,
  ShieldCheck,
  Award,
  Truck,
  HeartPulse,
  Sparkles,
} from "lucide-react";

export function WhyChooseUs() {
  const pillars = [
    {
      icon: Leaf,
      title: "100% Pure Botanicals",
      subtitle: "Zero Adulteration",
      description:
        "Every herb is ethically sourced from wild forest habitats and cultivated farmlands. We strictly never use synthetic preservatives, parabens, or mineral oils.",
    },
    {
      icon: Award,
      title: "Classical Shastra Texts",
      subtitle: "Authentic Taila Paka Vidhi",
      description:
        "Our formulations adhere religiously to the Charaka Samhita, Sharangadhara Samhita, and Greco-Arabic Unani Tibb standards to preserve maximum therapeutic Prana.",
    },
    {
      icon: HeartPulse,
      title: "Personalized Guidance",
      subtitle: "Free Herbalist Advice",
      description:
        "Health is never one-size-fits-all. Connect with us on WhatsApp to discuss your Dosha imbalance, diet guidelines (Pathya), and lifestyle synergy.",
    },
    {
      icon: Truck,
      title: "Fresh Dispensary Dispatch",
      subtitle: "Pan-India Safe Delivery",
      description:
        "Packed fresh in light-protected glass and food-grade packaging. Enjoy free shipping on orders above ₹499 with live tracking updates.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#e8dfcd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-bold text-gold-dark block mb-2">
            The Galaxy Ayurveda Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-forest tracking-tight">
            Why Choose Galaxy Ayurveda?
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-3 mb-4" />
          <p className="text-sm sm:text-base text-charcoal-light leading-relaxed">
            In an era of mass-manufactured herbal supplements, we remain true to
            small-batch classical decoctions and uncompromising purity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-lg border border-[#e8dfcd] flex flex-col justify-between shadow-xs hover:border-forest/60 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="w-13 h-13 rounded-full bg-[#FAF6F0] border border-border/80 flex items-center justify-center mb-5 group-hover:bg-forest group-hover:border-forest transition-colors duration-300">
                    <Icon className="w-6 h-6 text-forest group-hover:text-gold transition-colors duration-300" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-dark block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-charcoal mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-charcoal-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
