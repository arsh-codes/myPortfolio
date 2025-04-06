import { useEffect, useState } from "react";

import AboutMe from "@/components/Home/AboutSection";
import { AnimatePresence } from "framer-motion";
import ContactMe from "@/components/Home/contact/ContactSection";
import Experience from "@/components/Home/experience/ExperienceSection";
import Footer from "./components/Home/Footer";
import GithubSection from "@/components/Home/github/GithubSection";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import MediumBlogs from "@/components/Home/BlogSection";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";
import ProjectSection from "@/components/Home/projects/ProjectSection";
import Skills from "@/components/Home/skills/SkillSection";

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Remove the hash fragment from URL when page loads/reloads
    if (window.location.hash) {
      // First scroll to top
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });

      // Then replace the URL without the hash fragment
      history.replaceState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      );
    } else {
      // If no hash, just scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const timer = setTimeout(() => {
      setLoader(false);
    }, 2250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{loader && <Preloader />}</AnimatePresence>
      <div className="relative flex w-full flex-col scroll-smooth select-none">
        <Navbar />

        {/* Hero: Full screen height */}
        <section className="">
          <HeroSection />
        </section>

        {/* Content sections: Adaptive height with consistent spacing */}
        <section className="">
          <AboutMe />
        </section>

        <section className="">
          <Experience />
        </section>

        <section className="">
          <Skills />
        </section>

        <section className="">
          <ProjectSection />
        </section>

        <section className="">
          <GithubSection />
        </section>

        <section className="">
          <MediumBlogs />
        </section>

        <section className="">
          <ContactMe />
        </section>

        <Footer />
      </div>
    </>
  );
}
