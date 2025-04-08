import { useEffect, useState } from "react";

import { motion } from "framer-motion";

// Animation variants for fading in the text
const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

// Animation variants for sliding the preloader screen up and out of view
const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

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

export default function Preloader() {
  const [index, setIndex] = useState(0); // Tracks the current index in the words array
  const [dimension, setDimension] = useState({ width: 0, height: 0 }); // Stores current viewport dimensions

  // On mount: set the viewport width and height
  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Cycles through the `words` array with controlled timing
  useEffect(() => {
    // Stop cycling once the last word has been shown
    if (index === words.length - 1) return;

    // Increment the word index after a timeout
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150, // Delay longer on the first word, faster on subsequent ones
    );
  }, [index]);

  // Initial path definition for animated SVG wave
  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;

  // Final path after animation (flatter curve)
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  // Animation variants for morphing the SVG path
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
    // Fullscreen overlay preloader container with exit animation
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed top-0 left-0 z-[99] flex h-[100vh] w-[100vw] items-center justify-center bg-black"
    >
      {/* Render content only once dimensions are available */}
      {dimension.width > 0 && (
        <>
          {/* Greeting word animation with gradient-filled text */}
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="absolute z-[1] flex items-center bg-gradient-to-br from-[rgb(255,255,255,1)] to-[rgb(255,255,255,0.8)] bg-clip-text text-[42px] font-medium"
            style={{ color: "transparent" }}
          >
            {words[index]}
          </motion.p>

          {/* SVG wave animation morphing out during preloader exit */}
          <svg className="h-[calc(100% + 200px)] absolute top-0 w-[100%]">
            <motion.path
              variants={curve}
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
