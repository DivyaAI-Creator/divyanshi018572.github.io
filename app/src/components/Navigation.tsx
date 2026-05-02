import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Download } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-ds-bg/90 backdrop-blur-xl border-b border-ds-border-color"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto h-full px-5 md:px-10 lg:px-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-mono font-bold text-xl text-ds-primary hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            DS.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium uppercase tracking-[0.05em] text-ds-text-muted hover:text-ds-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-ds-primary rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Divya-gen-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-ds-surface-light flex items-center justify-center text-ds-text-secondary hover:text-ds-primary hover:bg-ds-primary/10 transition-all"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/Divya-gen-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-ds-surface-light flex items-center justify-center text-ds-text-secondary hover:text-ds-primary hover:bg-ds-primary/10 transition-all"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:divyanshis499@gmail.com?subject=Job Opportunity"
              className="h-9 px-4 rounded-lg bg-ds-primary text-white text-sm font-semibold flex items-center gap-2 hover:bg-ds-primary-glow hover:shadow-glow transition-all"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-ds-text-primary p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[280px] bg-ds-surface border-l border-ds-border-color p-6 flex flex-col transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-mono font-bold text-xl text-ds-primary">DS.</span>
            <button
              className="text-ds-text-primary p-1"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium uppercase tracking-[0.05em] text-ds-text-secondary hover:text-ds-primary transition-colors text-left py-2"
                style={{
                  animationDelay: `${i * 0.05}s`,
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href="mailto:divyanshis499@gmail.com?subject=Job Opportunity"
              className="h-10 px-4 rounded-lg bg-ds-primary text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Download size={14} />
              <span>Download Resume</span>
            </a>
            <div className="flex gap-3 justify-center">
              <a
                href="https://github.com/Divya-gen-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ds-surface-light flex items-center justify-center text-ds-text-secondary hover:text-ds-primary transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/Divya-gen-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-ds-surface-light flex items-center justify-center text-ds-text-secondary hover:text-ds-primary transition-all"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
