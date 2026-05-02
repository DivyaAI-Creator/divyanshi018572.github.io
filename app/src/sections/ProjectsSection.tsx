import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionLabel } from "@/components/SectionLabel";
import { projects, projectFilters } from "@/data/portfolio";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Scroll reveal
  useEffect(() => {
    if (!sectionRef.current) return undefined;
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
    return () => { anim.kill(); };
  }, []);

  // Animate grid items on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.08, ease: "power2.out" }
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div ref={sectionRef} className="max-w-[1200px] mx-auto">
        <div className="animate-item">
          <SectionLabel text="Featured Work" />
        </div>
        <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary mb-3">
          Projects That Define My Craft
        </h2>
        <p className="animate-item text-ds-text-secondary mb-8 max-w-[600px]">
          From autonomous AI agents to production analytics dashboards — each project solves real problems.
        </p>

        {/* Filters */}
        <div className="animate-item flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-8 -mx-2 px-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-ds-primary/10 text-ds-primary border border-ds-primary/30"
                  : "text-ds-text-muted hover:text-ds-text-secondary border border-transparent hover:border-ds-border-color"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-ds-surface border border-ds-border-color rounded-xl overflow-hidden hover:border-ds-border-light hover:-translate-y-1.5 hover:shadow-card-hover transition-all duration-400"
            >
              {/* Image */}
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ds-surface via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ds-text-secondary bg-ds-surface/80 backdrop-blur-sm rounded-md border border-ds-border-color">
                  {project.category}
                </span>
              </div>

              {/* Text */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-ds-text-primary mb-2 group-hover:text-ds-primary-glow transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ds-text-secondary leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] uppercase tracking-wider text-ds-primary bg-ds-primary/10 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ds-primary font-medium flex items-center gap-1 hover:gap-2 transition-all group/link"
                    >
                      GitHub
                      <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-ds-secondary font-medium flex items-center gap-1 hover:gap-2 transition-all group/link"
                    >
                      Live Demo
                      <ExternalLink size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
