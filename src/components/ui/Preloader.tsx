import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

// Array of multilingual greetings to cycle through during preload
const words = [
  "Hello",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Bonjour",
  "नमस्ते",
];

// Optimized animation variants for text fade-in
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

// Improved animation variants for smoother exit animation
// Using translateY transform instead of top property for better performance
const slideUpVariants = {
  initial: {
    transform: "translateY(0)",
  },
  exit: {
    transform: "translateY(-100%)",
    transition: {
      duration: 1.2, // Slightly longer duration for smoother motion
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth acceleration/deceleration
    },
  },
};

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  // Set window dimensions once on mount
  useEffect(() => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  // Word cycling effect
  useEffect(() => {
    if (index === words.length - 1) return;

    const timeoutId = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150,
    );

    return () => clearTimeout(timeoutId);
  }, [index]);

  // Memoize path calculations
  const { initialPath, targetPath } = useMemo(() => {
    if (dimension.width === 0) return { initialPath: "", targetPath: "" };

    // Smoother curve for better animation
    return {
      initialPath: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`,
      targetPath: `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`,
    };
  }, [dimension]);

  // Improved SVG animation with smoother timing
  const curveVariants = useMemo(
    () => ({
      initial: {
        d: initialPath,
      },
      exit: {
        d: targetPath,
        transition: {
          duration: 0.9,
          ease: [0.43, 0.13, 0.23, 0.96], // Improved easing for path animation
        },
      },
    }),
    [initialPath, targetPath],
  );

  return (
    <motion.div
      variants={slideUpVariants}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] flex h-screen w-screen items-center justify-center bg-black will-change-transform"
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        perspective: 1000,
        WebkitPerspective: 1000,
      }}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-[1] flex items-center bg-gradient-to-br from-[rgb(255,255,255,1)] to-[rgb(255,255,255,0.8)] bg-clip-text text-[42px] font-medium"
            style={{
              color: "transparent",
              willChange: "opacity",
            }}
          >
            {words[index]}
          </motion.p>

          <svg
            className="h-[calc(100% + 300px)] absolute top-0 w-full"
            style={{
              willChange: "contents",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
            }}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              variants={curveVariants}
              initial="initial"
              exit="exit"
              fill="#000"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
