import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { BarChart3, Code2, Satellite, Terminal } from "lucide-react";
import { certifications } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Code2,
  Satellite,
  Terminal,
};

export function CertificationsSection() {
  const ref = useScrollReveal(".animate-item", { y: 30, stagger: 0.1 });

  return (
    <section id="certifications" className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        <div className="animate-item">
          <SectionLabel text="Certifications" />
        </div>
        <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary mb-10">
          Credentials & Continuous Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Code2;
            return (
              <div
                key={cert.id}
                className="animate-item flex gap-4 bg-ds-surface border border-ds-border-color rounded-xl p-5 hover:border-ds-border-light transition-all group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-ds-surface-light flex items-center justify-center group-hover:bg-ds-primary/10 transition-colors">
                  <Icon size={22} className="text-ds-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-semibold text-ds-text-primary mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-medium text-ds-primary uppercase tracking-wider mb-2">
                    {cert.provider}
                  </p>
                  <p className="text-sm text-ds-text-secondary leading-relaxed">
                    {cert.description}
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
