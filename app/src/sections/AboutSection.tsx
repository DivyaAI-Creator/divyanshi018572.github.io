import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { MapPin, GraduationCap, Building2, Mail, Phone } from "lucide-react";

const quickInfo = [
  { icon: GraduationCap, label: "Education", value: "B.Tech Civil Engg." },
  { icon: Building2, label: "University", value: "MMMUT, Gorakhpur" },
  { icon: Mail, label: "Email", value: "divyanshis499@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7007178630" },
];

export function AboutSection() {
  const ref = useScrollReveal(".animate-item", { y: 30, stagger: 0.12 });

  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-10 lg:px-20">
      <div ref={ref} className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[55%_45%] gap-12 md:gap-16 items-start">
          {/* Text Column */}
          <div>
            <div className="animate-item">
              <SectionLabel text="About Me" />
            </div>
            <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary leading-tight mb-6">
              Engineering the future with data and intelligence.
            </h2>
            <div className="space-y-4 text-ds-text-secondary leading-[1.8]">
              <p className="animate-item">
                I&apos;m Divyanshi Singh, a B.Tech Civil Engineering student at MMMUT with a passion for AI, Machine Learning, and Data Science. I&apos;ve built 25+ projects spanning GenAI agents, deep learning pipelines, business analytics dashboards, and production-deployed ML systems.
              </p>
              <p className="animate-item">
                My expertise bridges cutting-edge LLM technologies — LangChain, LangGraph, MCP servers, RAG pipelines — with classical data science — SQL, Power BI, statistical modeling, and predictive analytics. Whether it&apos;s crafting autonomous AI agents or uncovering insights from millions of data points, I bring both technical depth and business impact.
              </p>
            </div>
            <div className="animate-item flex items-center gap-2 mt-6 text-ds-text-secondary text-sm">
              <MapPin size={16} className="text-ds-text-muted shrink-0" />
              <span>Basti, UP · Open to Bangalore / Hyderabad / Mumbai / Remote</span>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {quickInfo.map((item) => (
                <div
                  key={item.label}
                  className="animate-item bg-ds-surface border border-ds-border-color rounded-xl p-4 hover:border-ds-border-light transition-all"
                >
                  <item.icon size={18} className="text-ds-primary mb-2" />
                  <div className="text-[11px] uppercase tracking-wider text-ds-text-muted mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-medium text-ds-text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Column */}
          <div className="animate-item relative">
            <div className="relative aspect-square max-w-[420px] mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ds-primary/20 to-ds-secondary/20 blur-2xl" />
              <div className="relative h-full rounded-2xl border border-ds-border-color bg-ds-surface/80 backdrop-blur-sm p-6 flex flex-col items-center justify-center overflow-hidden">
                {/* Abstract data visualization */}
                <div className="grid grid-cols-3 gap-3 w-full mb-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg bg-ds-surface-light flex items-center justify-center"
                      style={{
                        opacity: 0.3 + (i % 3) * 0.2,
                      }}
                    >
                      <div
                        className="w-1/2 h-1/2 rounded-full"
                        style={{
                          background:
                            i % 3 === 0
                              ? "linear-gradient(135deg, #6366F1, #818CF8)"
                              : i % 3 === 1
                              ? "linear-gradient(135deg, #22D3EE, #67E8F9)"
                              : "linear-gradient(135deg, #F59E0B, #FBBF24)",
                          opacity: 0.6 + Math.random() * 0.4,
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-full space-y-2">
                  <div className="h-2 rounded-full bg-ds-surface-light overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-ds-primary to-ds-secondary" />
                  </div>
                  <div className="h-2 rounded-full bg-ds-surface-light overflow-hidden">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-ds-secondary to-ds-accent" />
                  </div>
                  <div className="h-2 rounded-full bg-ds-surface-light overflow-hidden">
                    <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-ds-primary to-ds-primary-glow" />
                  </div>
                </div>
                <div className="mt-4 flex gap-2 flex-wrap justify-center">
                  {["Python", "LangChain", "PyTorch", "SQL", "Power BI"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] uppercase tracking-wider text-ds-text-secondary bg-ds-surface-light rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
