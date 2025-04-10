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
import { ReactNode, useEffect, useRef, useState } from "react";

import { FloatingDock } from "./FloatingDock";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Define type for navigation sections
interface Section {
  id: string;
  title: string;
  icon: ReactNode;
  href: string;
}

// Navigation sections definition with title, icon, and target anchor
const sections: Section[] = [
  {
    id: "hero",
    title: "Home",
    icon: <IconDeviceDesktop size={25} />,
    href: "#hero",
  },
  {
    id: "about",
    title: "About Me",
    icon: <IconUser size={25} />,
    href: "#about",
  },
  {
    id: "experience",
    title: "Experience",
    icon: <IconBriefcase size={25} />,
    href: "#experience",
  },
  {
    id: "skills",
    title: "Skills",
    icon: <IconCode size={25} />,
    href: "#skills",
  },
  {
    id: "projects",
    title: "Projects",
    icon: <IconDeviceDesktop size={25} />,
    href: "#projects",
  },
  {
    id: "github",
    title: "GitHub",
    icon: <IconBrandGithub size={25} />,
    href: "#github",
  },
  {
    id: "blogs",
    title: "Blogs",
    icon: <IconBook size={25} />,
    href: "#blogs",
  },
  {
    id: "contact",
    title: "Contact",
    icon: <IconMessage size={25} />,
    href: "#contact",
  },
];

export default function Navbar() {
  // Tracks currently active section
  const [activeSection, setActiveSection] = useState("hero");

  // Tracks whether the page is scrolled for styling purposes
  const [isScrolled, setIsScrolled] = useState(false);

  // Controls mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { theme } = useTheme(); // Access current theme from context

  // References for detecting clicks outside mobile menu and button
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Handle click on a mobile nav item: update active section and close menu
  const handleMobileNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  // Detect clicks outside the mobile menu to close it
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (!mobileMenuOpen) return;

      const isClickOutsideMobileMenu =
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node);

      const isClickOutsideButton =
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node);

      if (isClickOutsideMobileMenu && isClickOutsideButton) {
        setMobileMenuOpen(false);
      }
    };

    // Attach listeners
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    // Clean up listeners
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [mobileMenuOpen]);

  // Handle scroll events to track active section and navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // Add shadow/background on scroll

      const sectionElements = sections
        .map((section) => ({
          id: section.id,
          element: document.getElementById(section.id),
        }))
        .filter((item) => item.element); // Filter out any missing elements

      const currentSection = sectionElements.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Listen for scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu if resizing to desktop layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    // Listen for resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Navbar wrapper with dynamic background based on scroll position
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? `bg-opacity-80 bg-background shadow-lg backdrop-blur-md`
          : "bg-transparent"
      }`}
    >
      {/* Navbar inner container */}
      <div className="mx-auto flex h-16 w-11/12 items-center justify-between">
        {/* Left section: Logo and brand name */}
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

        {/* Center: Desktop floating dock navigation */}
        <div className="hidden lg:block">
          <FloatingDock items={sections} activeItem={activeSection} />
        </div>

        {/* Right section: Theme toggle and mobile menu button */}
        <div className="flex items-center space-x-4">
          {/* Light/Dark mode toggle */}
          <ModeToggle />

          {/* Hamburger / Close icon button for mobile menu */}
          {/* Hamburger / Close icon button for mobile menu with animation */}
          <motion.button
            ref={mobileMenuButtonRef}
            className="text-primary block p-1 transition-colors hover:text-cyan-500 lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            animate={{
              rotate: mobileMenuOpen ? 90 : 0,
              scale: 1,
            }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu rendered conditionally with animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-16 left-0 z-40 w-full lg:hidden ${
              theme === "dark"
                ? "bg-opacity-95 bg-gray-900"
                : "bg-opacity-95 bg-white"
            } shadow-lg backdrop-blur-md`}
          >
            {/* Mobile nav links */}
            <nav className="flex flex-col space-y-1 p-4">
              {sections.map((item) => (
                <motion.a
                key={item.id}
                href={item.href}
                className={`flex items-center rounded-md px-4 py-3 text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 text-cyan-500"
                    : "text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => handleMobileNavClick(item.id)}
                variants={{
                  hidden: { opacity: 0, y: -10, x: -5 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                variants={{
                  hidden: { opacity: 0, y: -10, x: -5 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    x: 0,
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 25
                    }
                  },
                  hover: { 
                    x: 6, 
                    backgroundColor: activeSection === item.id 
                      ? "rgba(6, 182, 212, 0.1)" 
                      : theme === "dark" 
                        ? "rgba(31, 41, 55, 0.8)" 
                        : "rgba(243, 244, 246, 0.8)",
                    transition: {
                      type: "tween",
                      ease: "easeOut",
                      duration: 0.2
                    }
                  }
                }}
              >
                <motion.span 
                  className="mr-4 flex items-center justify-center"
                  variants={{
                    hover: { 
                      rotate: 5,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 10
                      }
                    }
                  }}
                >
                  {item.icon}
                </motion.span>
                <span className="tracking-wide">{item.title}</span>
              </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
