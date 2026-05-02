import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { NeuralCanvas } from "@/components/NeuralCanvas";

const stats = [
  { value: "25+", label: "Projects" },
  { value: "10+", label: "Deployed Apps" },
  { value: "600+", label: "Hours of Training" },
  { value: "200+", label: "DSA Problems" },
];

const roles = ["GenAI Engineer", "ML Engineer", "Data Scientist", "AI Engineer"];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Badges stagger
      tl.from(badgesRef.current?.children ?? [], {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Name character split animation
      if (nameRef.current) {
        const text = nameRef.current.textContent || "";
        nameRef.current.innerHTML = "";
        text.split("").forEach((char, i) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.opacity = "0";
          span.style.transform = "translateY(30px)";
          nameRef.current!.appendChild(span);

          gsap.to(span, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.5 + i * 0.04,
          });
        });
      }

      // Subtitle
      tl.from(
        subtitleRef.current,
        { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" },
        0.8
      );

      // Stats
      tl.from(
        statsRef.current?.children ?? [],
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        1.0
      );

      // CTAs
      tl.from(
        ctaRef.current?.children ?? [],
        { y: 20, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        1.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      <NeuralCanvas />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial-top pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-radial-bottom pointer-events-none" style={{ zIndex: 1 }} />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-[800px] mx-auto">
        {/* Role badges */}
        <div ref={badgesRef} className="flex flex-wrap justify-center gap-2 mb-6">
          {roles.map((role) => (
            <span
              key={role}
              className="px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ds-text-secondary border border-ds-border-light rounded-md bg-ds-surface/60 backdrop-blur-sm"
            >
              {role}
            </span>
          ))}
        </div>

        {/* Name */}
        <h1
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gradient leading-[1.1] tracking-tight mb-5"
        >
          Divyanshi Singh
        </h1>

        {/* Headline */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-ds-text-secondary font-light max-w-[640px] mx-auto leading-relaxed mb-10"
        >
          Building intelligent systems that learn, reason, and create.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-ds-primary">
                {stat.value}
              </div>
              <div className="text-xs text-ds-text-muted uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => scrollTo("#projects")}
            className="h-12 px-6 rounded-lg bg-ds-primary text-white text-sm font-semibold flex items-center gap-2 hover:bg-ds-primary-glow hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            View My Projects
            <ArrowUpRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="h-12 px-6 rounded-lg border border-ds-border-light text-ds-text-secondary text-sm font-semibold flex items-center gap-2 hover:border-ds-primary hover:text-ds-primary hover:bg-ds-primary/10 active:scale-[0.98] transition-all"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[11px] uppercase tracking-widest text-ds-text-muted">
          Scroll to explore
        </span>
        <ChevronDown size={20} className="text-ds-text-muted animate-bounce" />
      </div>
    </section>
  );
}
