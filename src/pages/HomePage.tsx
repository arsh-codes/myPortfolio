import AboutMe from "@/components/Home/AboutMe";
import ContactMe from "@/components/Home/ContactMe";
import Experience from "@/components/Home/Experience/Experience";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import Skills from "@/components/Home/skills/Skills";
export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />

      <AboutMe />

      <Skills />

      <Experience />

      <ContactMe />
    </div>
  );
}
