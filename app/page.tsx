import HomeSection from "@/app/components/sections/HomeSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ModernBackground from "@/app/components/ui/ModernBackground";
import GeometricBackground from "./components/ui/GeometricBackground";

export default function Home() {
  return (
    <div className="relative font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-32 sm:p-20">
      <ModernBackground />
      <HomeSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
