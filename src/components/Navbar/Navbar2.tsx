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
  IconX
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { FloatingDock } from "../ui/FloatingDock";
import { useTheme } from "@/components/ThemeProvider";

const sections = [
  { id: "hero", title: "Home", icon: <IconDeviceDesktop size={20} />, href: "#hero" },
  { id: "about", title: "About Me", icon: <IconUser size={20} />, href: "#about" },
  {
    id: "experience",
    title: "Experience",
    icon: <IconBriefcase size={20} />,
    href: "#experience",
  },
  { id: "skills", title: "Skills", icon: <IconCode size={20} />, href: "#skills" },
  {
    id: "projects",
    title: "Projects",
    icon: <IconDeviceDesktop size={20} />,
    href: "#projects",
  },
  { id: "github", title: "GitHub", icon: <IconBrandGithub size={20} />, href: "#github" },
  { id: "blogs", title: "Medium Blogs", icon: <IconBook size={20} />, href: "#blogs" },
  { id: "contact", title: "Contact", icon: <IconMessage size={20} />, href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  // Handle scroll and set active section
  useEffect(() => {
    const handleScroll = () => {
      // Set navbar style based on scroll position
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(item => item.element);
      
      const currentSection = sectionElements.find(section => {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? `backdrop-blur-md bg-opacity-80 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} shadow-lg` 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-11/12 items-center justify-between">
        {/* Left Side: Logo and Text */}
        <div className="flex items-center group">
          <div className="flex items-center rounded-lg p-2 transition-transform duration-300 group-hover:scale-110">
            <span className="from-emerald-400 to-cyan-500 flex items-center bg-gradient-to-r bg-clip-text text-2xl font-bold tracking-tighter text-transparent transition-all duration-300 group-hover:tracking-normal">
              {"</>"}
            </span>
          </div>
          <span className="ubuntu-regular text-lg font-semibold">
            <span className="text-cyan-500">arsh</span>
            <span className="text-primary">-codes</span>
          </span>
        </div>
        
        {/* Navigation dock (desktop only) */}
        <div className="hidden md:block">
          <FloatingDock items={sections} activeItem={activeSection} />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="block md:hidden text-primary hover:text-cyan-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              theme === 'dark' ? 'bg-gray-900 bg-opacity-95' : 'bg-white bg-opacity-95'
            } backdrop-blur-md`}
          >
            <nav className="flex flex-col space-y-1 p-4">
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`flex items-center rounded-md px-4 py-2 text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-emerald-400/20 to-cyan-500/20 text-cyan-500'
                      : 'text-primary hover:bg-gray-100 dark:hover:bg-gray-800'
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