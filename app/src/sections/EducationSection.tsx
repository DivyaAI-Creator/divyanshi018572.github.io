import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { GraduationCap, School, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolio";

const iconMap: Record<string, React.ElementType> = {
  "Bachelor of Technology": GraduationCap,
  "Intermediate (12th)": School,
  "High School (10th)": School,
};

export function EducationSection() {
  const ref = useScrollReveal(".animate-item", { y: 30, stagger: 0.15 });

  return (
    <section id="education" className="py-20 md:py-24 px-5 md:px-10 lg:px-20">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        <div className="animate-item">
          <SectionLabel text="Education" />
        </div>
        <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary mb-10">
          Academic Foundation
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {education.map((edu) => {
            const Icon = iconMap[edu.degree] || GraduationCap;
            return (
              <div
                key={edu.id}
                className="animate-item bg-ds-surface border border-ds-border-color rounded-xl p-6 md:p-7 hover:border-ds-border-light hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-ds-primary/10 flex items-center justify-center mb-4">
                  <Icon size={24} className="text-ds-primary" />
                </div>
                <h3 className="text-lg font-semibold text-ds-text-primary mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-ds-text-secondary mb-1">
                  {edu.institution}
                </p>
                {edu.field && (
                  <p className="text-sm text-ds-text-muted mb-1">{edu.field}</p>
                )}
                <p className="text-sm font-semibold text-ds-primary mb-3">
                  {edu.grade}
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-ds-text-muted">
                    <Calendar size={12} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ds-text-muted">
                    <MapPin size={12} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
