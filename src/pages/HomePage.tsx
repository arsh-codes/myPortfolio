import AboutMe from "@/components/Home/AboutMe";
import HeroSection from "@/components/Home/HeroSection";
import Skills from "@/components/Home/Skills";

export default function HomePage() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />

      <AboutMe />

      <Skills />
    </div>
  );
}
