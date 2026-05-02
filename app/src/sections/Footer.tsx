import { navLinks } from "@/data/portfolio";

export function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-ds-border-color bg-ds-surface">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono font-bold text-xl text-ds-primary">DS.</span>
            <span className="text-sm text-ds-text-secondary">Divyanshi Singh</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-medium uppercase tracking-wider text-ds-text-muted hover:text-ds-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-ds-border-color pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-ds-text-muted">
            © 2025 Divyanshi Singh. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ds-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ds-success" />
            </span>
            <span className="text-xs font-medium text-ds-success">
              Available for opportunities
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
