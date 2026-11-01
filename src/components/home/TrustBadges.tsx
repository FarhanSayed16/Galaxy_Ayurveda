import { ShieldCheck, Award, FileText, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function TrustBadges() {
  const badges = [
    {
      icon: ShieldCheck,
      title: "AYUSH Registered",
      subtitle: siteConfig.business.ayushLicense,
      desc: "Licensed under Ministry of AYUSH, Govt. of India",
    },
    {
      icon: Award,
      title: "FSSAI Food Safety",
      subtitle: siteConfig.business.fssaiLicense,
      desc: "Compliant with highest food safety and herb purity codes",
    },
    {
      icon: FileText,
      title: "State Drug License",
      subtitle: siteConfig.business.drugLicense,
      desc: "Authorized retail & manufacturing dispensational licenses",
    },
    {
      icon: CheckCircle,
      title: "100% Natural Botanicals",
      subtitle: "Zero Artificial Additives",
      desc: "No liquid paraffin, artificial colours, or heavy metals",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F5EEDB] border-b border-[#e8dfcd]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-forest block mb-1">
            Certified Dispensary Assurance
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-forest">
            Government Licenses & Purity Accreditations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xs p-5 rounded-lg border border-border/80 text-center flex flex-col items-center hover:bg-white transition-all shadow-2xs"
              >
                <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-base font-semibold text-charcoal">
                  {b.title}
                </h4>
                <p className="text-xs font-mono font-medium text-forest-light mt-1">
                  {b.subtitle}
                </p>
                <p className="text-[11px] text-charcoal-muted mt-2 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

