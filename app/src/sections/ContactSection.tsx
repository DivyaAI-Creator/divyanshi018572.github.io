import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "@/components/SectionLabel";
import { Mail, Phone, MapPin, Briefcase, Github, Linkedin, Globe, Loader2, CheckCircle2, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "divyanshis499@gmail.com", href: "mailto:divyanshis499@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 7007178630", href: "tel:+917007178630" },
  { icon: MapPin, label: "Location", value: "Basti, UP, India", href: null },
  { icon: Briefcase, label: "Open to", value: "Full-time roles · Remote / Bangalore / Hyderabad / Mumbai", href: null },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Divya-gen-ai" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/Divya-gen-ai" },
  { icon: Globe, label: "Portfolio", href: "https://github.com/Divya-gen-ai" },
];

export function ContactSection() {
  const ref = useScrollReveal(".animate-item", { y: 30, stagger: 0.1 });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormStatus("success");

    // Reset after 3 seconds
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-10 lg:px-20 relative">
      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-radial-bottom pointer-events-none" />

      <div ref={ref} className="max-w-[1200px] mx-auto relative">
        <div className="animate-item">
          <SectionLabel text="Get In Touch" />
        </div>
        <h2 className="animate-item text-3xl md:text-4xl font-semibold text-ds-text-primary mb-3">
          Let&apos;s Build Something Intelligent Together
        </h2>
        <p className="animate-item text-ds-text-secondary mb-12 max-w-[640px]">
          I&apos;m open to opportunities in GenAI, ML Engineering, Data Science, and Analytics roles. Whether you&apos;re hiring or collaborating — I&apos;d love to hear from you.
        </p>

        <div className="grid md:grid-cols-[55%_45%] gap-10 md:gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="animate-item flex gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-ds-primary/10 flex items-center justify-center">
                  <item.icon size={20} className="text-ds-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ds-text-muted mb-1">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-ds-text-primary hover:text-ds-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium text-ds-text-primary">
                      {item.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="animate-item flex gap-3 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-ds-surface-light flex items-center justify-center text-ds-text-secondary hover:text-ds-primary hover:bg-ds-primary/10 transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="animate-item space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full h-11 px-4 rounded-lg bg-ds-surface border border-ds-border-color text-sm text-ds-text-primary placeholder:text-ds-text-muted focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20 outline-none transition-all"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full h-11 px-4 rounded-lg bg-ds-surface border border-ds-border-color text-sm text-ds-text-primary placeholder:text-ds-text-muted focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20 outline-none transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full h-11 px-4 rounded-lg bg-ds-surface border border-ds-border-color text-sm text-ds-text-primary placeholder:text-ds-text-muted focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20 outline-none transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-ds-surface border border-ds-border-color text-sm text-ds-text-primary placeholder:text-ds-text-muted focus:border-ds-primary focus:ring-2 focus:ring-ds-primary/20 outline-none transition-all resize-none"
            />

            <button
              type="submit"
              disabled={formStatus === "submitting" || formStatus === "success"}
              className="w-full h-12 rounded-lg bg-ds-primary text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-ds-primary-glow hover:shadow-glow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {formStatus === "idle" && (
                <>
                  Send Message <Send size={14} />
                </>
              )}
              {formStatus === "submitting" && (
                <>
                  Sending... <Loader2 size={14} className="animate-spin" />
                </>
              )}
              {formStatus === "success" && (
                <>
                  Message Sent! <CheckCircle2 size={14} />
                </>
              )}
            </button>

            {formStatus === "success" && (
              <p className="text-sm text-ds-success text-center">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
