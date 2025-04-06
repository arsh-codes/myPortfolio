import { Suspense, lazy, useEffect, useState } from "react";

import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";
import { Toaster } from "react-hot-toast";

// Lazy load components that are below the fold
const AboutMe = lazy(() => import("@/components/Home/AboutSection"));
const Skills = lazy(() => import("@/components/Home/skills/SkillSection"));
const Experience = lazy(
  () => import("@/components/Home/experience/ExperienceSection"),
);
const ProjectSection = lazy(
  () => import("@/components/Home/projects/ProjectSection"),
);
const GithubSection = lazy(
  () => import("@/components/Home/github/GithubSection"),
);
const MediumBlogs = lazy(() => import("@/components/Home/BlogSection"));
const ContactMe = lazy(
  () => import("@/components/Home/contact/ContactSection"),
);
const Footer = lazy(() => import("./components/Home/Footer"));

export default function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!loader) {
      // 1. Remove any hash from the URL to prevent auto-scrolling to sections on refresh
      if (window.location.hash) {
        history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }

      // 2. Scroll to the top of the page instantly after the loader completes
      window.scrollTo({ top: 0, behavior: "auto" });

      // 3. Additionally, scroll to the hero section element if it exists
      const hero = document.getElementById("herosection");
      if (hero) {
        hero.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [loader]);

  useEffect(() => {
    // Start the loader when the app mounts, and end it after 2.25 seconds
    const loaderTimer = setTimeout(() => {
      setLoader(false);
    }, 2250);

    // Clean up the timer if the component unmounts early
    return () => {
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <AnimatePresence>{loader && <Preloader />}</AnimatePresence>
      {/* Components above the fold - load immediately */}
      <Navbar />
      <HeroSection />
      {/* Below the fold components - lazy loaded */}
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <AboutMe />
        <Experience />
        <Skills />
        <ProjectSection />
        <GithubSection />
        <MediumBlogs />
        <ContactMe />
        <Footer />
      </Suspense>
    </>
  );
}
