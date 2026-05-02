import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { EducationSection } from "@/sections/EducationSection";
import { CertificationsSection } from "@/sections/CertificationsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ds-bg text-ds-text-primary">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
