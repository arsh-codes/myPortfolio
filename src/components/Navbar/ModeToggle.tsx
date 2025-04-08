import { Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "../ui/Button";
import buttonSound from "@/assets/media/modeTogglerSound.mp3";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Navbar/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme(); // Access current theme and setter from custom context
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element for button sound
  const [isAnimating, setIsAnimating] = useState(false); // Controls animation state to prevent multiple triggers

  // Handles theme toggling with animation and sound
  const toggleTheme = () => {
    if (isAnimating) return; // Prevent toggling during animation

    setIsAnimating(true); // Set animation state to true

    // Toggle between light and dark themes
    setTheme(theme === "dark" ? "light" : "dark");

    // Play toggle sound effect if available
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Restart sound for quick consecutive clicks
      audioRef.current
        .play()
        .catch((err) => console.warn("Audio playback prevented:", err));
    }

    // Reset animation state after animation duration
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    // Wrapper div to make the entire toggle clickable
    <div className="cursor-pointer">
      {/* Hidden audio element used to play sound on toggle */}
      <audio ref={audioRef} src={buttonSound} preload="auto"></audio>

      {/* Main button to toggle theme with animation and accessibility features */}
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="relative h-10 w-10 overflow-hidden rounded-full border-0 bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        disabled={isAnimating}
        aria-label={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        {/* Inner container for animated icon and ripple effect */}
        <div className="relative flex items-center justify-center">
          {/* Animated icon transition between Sun and Moon using framer-motion */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isAnimating ? [1, 1.2, 0] : 1,
              rotate: isAnimating ? [0, 180, 360] : 0,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            {theme === "dark" ? (
              <Sun className="text-cyan size-5" /> // Sun icon for dark theme
            ) : (
              <Moon className="text-cyan size-5" /> // Moon icon for light theme
            )}
          </motion.div>

          {/* Expanding ripple animation on theme toggle */}
          {isAnimating && (
            <motion.div
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{
                width: 100,
                height: 100,
                opacity: 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute rounded-full bg-gradient-to-r from-emerald-400/30 to-cyan-500/30"
            />
          )}
        </div>
      </Button>
    </div>
  );
}
