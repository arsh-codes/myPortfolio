import { AnimatePresence, motion } from "framer-motion";
import {
  IconBook,
  IconBrandGithub,
  IconBriefcase,
  IconCode,
  IconDeviceDesktop,
  IconMenu2,
  IconMessage,
  IconUser,
  IconX,
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

import { FloatingDock } from "./FloatingDock";
import { ModeToggle } from "../ModeToggle";
import { useTheme } from "@/components/ThemeProvider";

// Navigation sections with icons and href links
const sections = [
  {
    id: "hero",
    title: "Home",
    icon: <IconDeviceDesktop size={25} />, // Desktop icon
    href: "#hero", // Link to section
  },
  {
    id: "about",
    title: "About Me",
    icon: <IconUser size={25} />, // User icon
    href: "#about",
  },
  {
    id: "experience",
    title: "Experience",
    icon: <IconBriefcase size={25} />, // Briefcase icon
    href: "#experience",
  },
  {
    id: "skills",
    title: "Skills",
    icon: <IconCode size={25} />, // Code icon
    href: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <IconDeviceDesktop size={25} />, // Desktop icon for projects
    href: "#projects",
  },
  {
    id: "github",
    title: "GitHub",
    icon: <IconBrandGithub size={25} />, // GitHub icon
    href: "#github",
  },
  {
    id: "blogs",
    title: "Blogs",
    icon: <IconBook size={25} />, // Book icon
    href: "#blogs",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <IconMessage size={25} />, // Message icon
    href: "#contact",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero"); // State for active section
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll detection
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const { theme } = useTheme(); // Get current theme from context
  const navbarRef = useRef<HTMLElement | null>(null); // Properly typed ref for the header element
  const menuButtonRef = useRef<HTMLButtonElement | null>(null); // Properly typed ref for the button

  // Handle clicks outside the mobile menu
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      // Only close the menu if:
      // 1. The menu is open
      // 2. The click is outside the entire navbar (which contains the menu)
      // 3. The event target is not the menu button (which has its own handler)
      if (
        mobileMenuOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    // Add event listener when the menu is open
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    // Clean up event listener when component unmounts or menu closes
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Change navbar background on scroll

      // Get all sections by their ID and retrieve corresponding DOM elements
      const sectionElements = sections
        .map((section) => ({
          id: section.id, // Store the section ID
          element: document.getElementById(section.id), // Find the actual section element in the DOM
        }))
        .filter((item) => item.element); // Remove any sections that don't exist in the DOM (null elements)

      // Determine which section is currently in view based on scroll position
      const currentSection = sectionElements.find((section) => {
        const rect = section.element!.getBoundingClientRect(); // Get the position and size of the section relative to the viewport

        /*
  Explanation of conditions:
  - `rect.top <= 100`: This checks if the top of the section is within 100px from the top of the viewport.
    
  - `rect.bottom >= 100`: This ensures that the section hasn't completely scrolled out of view from the top.
    (This condition makes sure that at least part of the section is still visible.)
*/
        return rect.top <= 100 && rect.bottom >= 100;
      });

      // If a section is found that matches the criteria, it is considered the currently active section.

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? `bg-opacity-80 bg-background shadow-lg backdrop-blur-md`
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-11/12 items-center justify-between">
        {/* Left Side: Logo and Text */}
        <a href="#hero" className="group flex items-center">
          <div className="flex items-center rounded-lg p-2">
            <span className="from-emerald to-cyan flex items-center bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tighter text-transparent">
              {"</>"}
            </span>
          </div>
          <span className="ubuntu-regular text-xl font-semibold">
            <span className="text-cyan">arsh</span>
            <span className="text-primary">-codes</span>
          </span>
        </a>

        {/* Navigation dock (desktop only) */}
        <div className="hidden lg:block">
          <FloatingDock items={sections} activeItem={activeSection} />
        </div>

        {/* Right side: Mode Toggle and Mobile Menu button */}
        <div className="flex items-center space-x-4">
          {/* Mode Toggle Component */}
          <ModeToggle />

          {/* Mobile menu button - only visible on small screens */}
          <button
            ref={menuButtonRef}
            className="text-primary block transition-colors hover:text-cyan-500 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden lg:hidden ${
              theme === "dark"
                ? "bg-opacity-95 bg-gray-900"
                : "bg-opacity-95 bg-white"
            } backdrop-blur-md`}
          >
            <nav className="flex flex-col space-y-1 p-4">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center rounded-md px-4 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 text-cyan-500"
                      : "text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.title}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
