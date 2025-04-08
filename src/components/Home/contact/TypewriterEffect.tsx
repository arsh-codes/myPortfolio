import { motion, stagger, useAnimate, useInView } from "motion/react";

import { cn } from "@/lib/utils";
import { useEffect } from "react";

/**
 * TypewriterEffect
 * Animates each character of the provided words with a staggered reveal effect,
 * triggered when the component enters the viewport.
 */
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Convert each word's text into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  // Hooks for animation and visibility detection
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    // Trigger animation when the component is in view
    if (isInView) {
      animate(
        "span", // Target all span elements (characters)
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1), // Stagger the animation of each character
          ease: "easeInOut",
        },
      );
    }
  }, [isInView]);

  // Render each word and its characters inside motion spans
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            // Wrapper for each word
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                // Individual character span with animation styles
                <motion.span
                  initial={{}} // Required for motion element
                  key={`char-${index}`}
                  className={cn(
                    `hidden text-black opacity-0 dark:text-white`, // Hidden by default for reveal animation
                    word.className,
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp; {/* Add space between words */}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    // Main container with responsive text styling
    <div
      className={cn(
        "text-center text-base font-bold sm:text-xl md:text-3xl lg:text-5xl",
        className,
      )}
    >
      {renderWords()}
      {/* Blinking cursor animation */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse", // Creates a blinking effect
        }}
        className={cn(
          "inline-block h-4 w-[4px] rounded-sm bg-blue-500 md:h-6 lg:h-10",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};

/**
 * TypewriterEffectSmooth
 * A smooth, non-staggered version of the typewriter effect where the whole text reveals as a block.
 */
export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // Convert each word's text into an array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });

  // Render the words and their characters directly without animation
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            // Wrapper for each word
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                // Plain character span without animation
                <span key={`char-${index}`} className={cn(word.className)}>
                  {char}
                </span>
              ))}
              &nbsp; {/* Add space between words */}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    // Main wrapper with spacing between text and cursor
    <div className={cn("flex space-x-1", className)}>
      {/* Reveal animation for full text block */}
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%", // Start hidden
        }}
        whileInView={{
          width: "fit-content", // Expand to fit content when in view
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        {/* Static text container with nowrap style */}
        <div
          className="text-base font-bold md:text-2xl lg:text-2xl xl:text-3xl"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}
        </div>
      </motion.div>

      {/* Blinking cursor animation */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse", // Creates blinking effect
        }}
        className={cn(
          "block h-6 w-[4px] rounded-sm md:h-8 xl:h-12",
          cursorClassName,
        )}
      ></motion.span>
    </div>
  );
};
