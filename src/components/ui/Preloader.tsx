"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

// Animation for fading in text
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

// Animation for sliding the preloader up and out of view
const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

// Array of words to display during preloading
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

export default function Preloader() {
  const [index, setIndex] = useState(0); // Tracks the index of the current word
  const [dimension, setDimension] = useState({ width: 0, height: 0 }); // Stores viewport dimensions

  // Set viewport dimensions on mount
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Cycle through words in the `words` array with a delay
  useEffect(() => {
    if (index === words.length - 1) return; // Stop once the last word is displayed
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150, // Longer delay for first word, shorter for others
    );
  }, [index]);

  // Define the initial and target paths for the SVG animation
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // Animation for the SVG path transition
  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] flex h-[100vh] w-[100vw] items-center justify-center bg-black"
    >
      {dimension.width > 0 && (
        <>
          {/* Animated text displaying different words */}
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-[1] flex items-center bg-gradient-to-br from-[rgb(255,255,255,1)] to-[rgb(255,255,255,0.8)] bg-clip-text text-[42px] font-medium"
            style={{ color: "transparent" }}
          >
            {words[index]}
          </motion.p>

          {/* Animated SVG path that morphs and disappears */}
          <svg className="h-[calc(100% + 200px)] absolute top-0 w-[100%]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              fill="#000"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
