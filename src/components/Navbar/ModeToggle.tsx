import { Moon, Sun } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "../ui/Button";
import buttonSound from "@/assets/media/modeTogglerSound.mp3";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Navbar/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleTheme = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setTheme(theme === "dark" ? "light" : "dark");

    // Play sound if audioRef is available
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start for consecutive clicks
      audioRef.current
        .play()
        .catch((err) => console.warn("Audio playback prevented:", err));
    }

    // Reset animation state after animation completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="cursor-pointer">
      {/* Hidden audio element outside the button */}
      <audio ref={audioRef} src={buttonSound} preload="auto"></audio>

      {/* Theme Toggle Button */}
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
        <div className="relative flex items-center justify-center">
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
              <Sun className="text-cyan size-5" />
            ) : (
              <Moon className="text-cyan size-5" />
            )}
          </motion.div>

          {/* Ripple effect */}
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
