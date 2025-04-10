import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";
import { useTheme } from "@/components/Navbar/ThemeProvider";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  // Check scroll position to show/hide button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 z-50 flex items-center justify-center rounded-full shadow-lg md:right-8 md:bottom-8 lg:right-10 lg:bottom-10"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
          aria-label="Scroll to top"
        >
          {/* Inner container with gradient border */}
          <motion.div className="relative overflow-hidden rounded-full p-[2px]">
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-100"
              animate={{
                background:
                  theme === "dark"
                    ? [
                        "linear-gradient(to right, #4ade80, #06b6d4)",
                        "linear-gradient(to right, #06b6d4, #4ade80)",
                      ]
                    : [
                        "linear-gradient(to right, #10B981, #06A3C9)",
                        "linear-gradient(to right, #06A3C9, #10B981)",
                      ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Button content */}
            <div className="relative flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 dark:bg-slate-900">
              <FaArrowUp className="text-emerald-500 dark:text-emerald-400" />
              <span className="hidden font-medium text-slate-800 md:inline dark:text-white">
                Back to top
              </span>
            </div>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
