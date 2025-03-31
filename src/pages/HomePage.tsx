import AboutMe from "@/components/Home/AboutMe";
import ContactMe from "@/components/Home/contact/ContactMe";
import Experience from "@/components/Home/experience/Experience";
import GithubSection from "@/components/Home/Github/GithubSection";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import MediumBlogs from "@/components/Home/MediumBlogs";
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
      <GithubSection />
      <MediumBlogs />
      <ContactMe />
    </div>
  );
}
