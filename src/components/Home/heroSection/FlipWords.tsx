import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

// FlipWords Component
// Displays an animated, cyclic transition of words with smooth entry and exit animations
export const FlipWords = ({
  words,
  duration = 3000, // Time interval (in ms) between word transitions
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]); // Tracks the currently displayed word
  const [isAnimating, setIsAnimating] = useState<boolean>(false); // Controls whether an animation is currently in progress

  // Callback to advance to the next word in the array, looping to the beginning if needed
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  // Triggers the animation periodically based on the specified duration
  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      // Resets animation state once the exit transition is complete
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        // Initial state before animation begins
        initial={{
          opacity: 0,
          y: 10,
        }}
        // Final state of the animation (entering)
        animate={{
          opacity: 1,
          y: 0,
        }}
        // Spring animation configuration for a smooth effect
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        // Exit animation properties
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        // Apply additional styles and utility classes
        className={cn(
          "relative z-10 inline-block text-left text-neutral-900 dark:text-neutral-100",
          className,
        )}
        // Key helps AnimatePresence detect when the word changes
        key={currentWord}
      >
        {/* Animate each word and its characters individually for a staggered effect */}
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {/* Animate each letter with a slight delay to create a sequential reveal effect */}
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            {/* Add spacing between words */}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
