import AboutMe from "@/components/Home/AboutMe";
import ContactMe from "@/components/Home/ContactMe";
import Experience from "@/components/Home/experience/Experience";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import ProjectSection from "@/components/Home/projects/ProjectSection";
import Skills from "@/components/Home/skills/Skills";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <AboutMe />
      <Experience />
      <Skills />
      <ProjectSection />
      <ContactMe />
    </div>
  );
}
