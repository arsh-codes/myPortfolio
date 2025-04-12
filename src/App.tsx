import { Suspense, lazy, useEffect, useState } from "react";

import AboutSection from "@/components/Home/AboutSection";
import { AnimatePresence } from "framer-motion";
import HeroSection from "@/components/Home/heroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/ui/Preloader";
import { Toaster } from "react-hot-toast";

// Improved lazy loading with appropriate loading indicators

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

// Loading fallback component with minimal UI impact
const LoadingFallback = () => (
  <div
    className="flex h-64 w-full items-center justify-center py-12"
    aria-live="polite"
  >
    <div className="flex flex-col items-center gap-6">
      {/* Animated loader with gradient */}
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-30 blur-lg"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-emerald-500"></div>
        <div className="animate-delay-150 absolute inset-0 animate-spin rounded-full border-r-2 border-l-2 border-cyan-500"></div>
      </div>

      {/* Pulsing text */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-lg font-medium text-transparent">
          Loading amazing content...
        </div>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Just a moment
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simplified loading timer without asset preloading
  useEffect(() => {
    // Simple timeout for loader display
    const loaderTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2450);

    // Clean up the timer if component unmounts
    return () => clearTimeout(loaderTimer);
  }, []);

  // Handle post-loader navigation
  useEffect(() => {
    if (!isLoading) {
      // Execute these actions after the loader animation completes
      setTimeout(() => {
        // 1. Remove hash from URL to prevent auto-scrolling
        if (window.location.hash) {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search,
          );
        }

        // 2. Scroll to top smoothly after loader exit animation completes
        window.scrollTo({ top: 0, behavior: "auto" });

        // 3. Focus on hero section if it exists
        const hero = document.getElementById("herosection");
        if (hero) {
          hero.scrollIntoView({ behavior: "auto" });
          // Optionally set focus for accessibility
          hero.setAttribute("tabindex", "-1");
          hero.focus({ preventScroll: true });
        }
      }, 800); // Wait for slideUp exit animation to complete
    }
  }, [isLoading]);

  return (
    <main className="bg-background text-foreground overflow-x-hidden scroll-smooth antialiased select-none">
      <Toaster position="top-center" />

      {/* Preloader with AnimatePresence for exit animation */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Always render Navbar and HeroSection for immediate display after loader */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Experience />
      {/* Only render lazy-loaded components if not loading */}
      {!isLoading && (
        <Suspense fallback={<LoadingFallback />}>
          <Skills />
          <ProjectSection />
          <GithubSection />
          <MediumBlogs />
          <ContactMe />
          <Footer />
        </Suspense>
      )}
    </main>
  );
}
