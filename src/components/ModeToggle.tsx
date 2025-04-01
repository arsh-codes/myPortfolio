import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/Button";
import buttonSound from "@/assets/media/modeTogglerSound.mp3";
import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    // Play sound if audioRef is available
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start for consecutive clicks
      audioRef.current.play();
    }
  };

  return (
    <div>
      {/* Hidden audio element outside the button */}
      <audio ref={audioRef} src={buttonSound} preload="auto"></audio>

      {/* Theme Toggle Button */}
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="p-5"
      >
        {theme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )}
      </Button>
    </div>
  );
}
