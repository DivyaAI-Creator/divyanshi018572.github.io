import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { Calendar, ArrowRight } from "lucide-react";
import { experiences } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const line = sectionRef.current!.querySelector(".timeline-line");
      const dots = sectionRef.current!.querySelectorAll(".timeline-dot");
      const cards = sectionRef.current!.querySelectorAll(".exp-card");

      if (line) {
        gsap.from(line, {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });
      }

      dots.forEach((dot, i) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: dot,
            start: "top 80%",
            once: true,
          },
          delay: i * 0.3,
        });
      });

      cards.forEach((card, i) => {
        gsap.from(card, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
          delay: i * 0.3,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto">
        <SectionLabel text="Experience" />
        <h2 className="text-3xl md:text-4xl font-semibold text-ds-text-primary mb-12">
          Where I&apos;ve Made Impact
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-ds-primary to-ds-secondary rounded-full" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex gap-6 md:gap-8">
                {/* Dot */}
                <div className="timeline-dot shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-ds-bg border-[3px] border-ds-primary mt-1 relative z-10" />

                {/* Card */}
                <div className="exp-card flex-1 bg-ds-surface border border-ds-border-color rounded-xl p-5 md:p-6 hover:border-ds-border-light transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-ds-text-primary">
                      {exp.company}
                    </h3>
                    <span className="text-xs font-medium text-ds-primary bg-ds-primary/10 px-2.5 py-1 rounded-md">
                      {exp.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ds-text-muted mb-4">
                    <Calendar size={12} />
                    <span>{exp.date}</span>
                    <span className="mx-1">·</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-sm text-ds-text-secondary leading-relaxed">
                        <ArrowRight size={14} className="text-ds-primary shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-ds-text-secondary bg-ds-surface-light rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
