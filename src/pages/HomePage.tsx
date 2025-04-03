import AboutMe from "@/components/Home/AboutSection";
import ContactMe from "@/components/Home/contact/ContactSection";
import Experience from "@/components/Home/experience/ExperienceSection";
import GithubSection from "@/components/Home/github/GithubSection";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import MediumBlogs from "@/components/Home/BlogSection";
import ProjectSection from "@/components/Home/projects/ProjectSection";
import Skills from "@/components/Home/skills/SkillSection";
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
      <div className="mt-8">
        <footer className="absolute bottom-2 mt-10 w-full text-center text-xs text-neutral-600 dark:text-neutral-400">
          Designed and Developed with ❤️ by Arshdeep Singh | 🅮{" "}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
}
