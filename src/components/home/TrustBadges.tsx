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
    <section className="py-14 sm:py-20 bg-[#F2ECE1] border-b border-[#e6dfd1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-forest block mb-1.5">
            Certified Dispensary Assurance
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-forest">
            Government Licenses & Purity Accreditations
          </h3>
          <div className="w-12 h-0.5 bg-gold mx-auto mt-2.5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-[#e6dfd1] text-center flex flex-col items-center hover:border-gold/60 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-forest text-gold flex items-center justify-center mb-3.5 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-base font-semibold text-charcoal">
                  {b.title}
                </h4>
                <p className="text-xs font-mono font-medium text-forest mt-1.5 bg-[#FAF7F2] px-2.5 py-0.5 rounded border border-[#e6dfd1]/60">
                  {b.subtitle}
                </p>
                <p className="text-[11px] text-charcoal-muted mt-2.5 leading-relaxed">
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
