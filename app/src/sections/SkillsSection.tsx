import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionLabel } from "@/components/SectionLabel";
import { skillCategories } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  // Scroll reveal for section
  useEffect(() => {
    if (!sectionRef.current) return;
    const items = sectionRef.current.querySelectorAll(".animate-item");
    const anim = gsap.from(items, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
    return () => {
      anim.kill();
    };
  }, []);

  // Animate bars when tab changes or on scroll
  useEffect(() => {
    barRefs.current = barRefs.current.slice(0, activeCategory.skills.length);
    const validBars = barRefs.current.filter(Boolean);
    if (validBars.length === 0) return;

    gsap.fromTo(
      validBars,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [activeCategory]);

  const handleTabChange = (id: string) => {
    if (id === activeTab) return;
    setActiveTab(id);
  };

  return (
    <section id="skills" className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto">
        <div className="animate-item">
          <SectionLabel text="My Expertise" />
        </div>
        <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary mb-3">
          Technologies & Tools
        </h2>
        <p className="animate-item text-ds-text-secondary mb-10 max-w-[600px]">
          A comprehensive stack built through 25+ projects and 600+ hours of hands-on training.
        </p>

        {/* Tabs */}
        <div className="animate-item flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8 -mx-2 px-2">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === cat.id
                  ? "bg-ds-primary/10 text-ds-primary border border-ds-primary/30"
                  : "text-ds-text-muted hover:text-ds-text-secondary border border-transparent hover:border-ds-border-color"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activeCategory.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="bg-ds-surface border border-ds-border-color rounded-xl p-5 hover:border-ds-border-light hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-ds-text-primary">
                  {skill.name}
                </span>
                <span className="text-xs font-medium text-ds-primary">
                  {skill.proficiency}%
                </span>
              </div>
              <div className="h-1 bg-ds-surface-light rounded-full overflow-hidden mb-3">
                <div
                  ref={(el) => { barRefs.current[i] = el; }}
                  className="h-full rounded-full bg-gradient-to-r from-ds-primary to-ds-secondary origin-left"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-ds-text-secondary bg-ds-surface-light rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
