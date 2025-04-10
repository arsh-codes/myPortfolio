import { useEffect, useState } from "react";

import { AnimatedGradientText } from "./AnimatedGradientText";
import { AnimatedResumeButton } from "./AnimatedResumeButton";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { CodeBlock } from "./CodeBlock";
import { FlipWords } from "@/components/Home/heroSection/FlipWords";
// import { MeteorsBackground } from "./MeteorsBackground";
import { Particles } from "../../ui/ParticlesBackground";
import { ShimmerButton } from "./ShimmerButton";
import codeBlockData from "@/assets/data/codeBlockData";
import { motion } from "motion/react";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Main HeroSection component
export default function HeroSection() {
  const { theme } = useTheme();

  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    // Main wrapper container for the Hero section
    <div
      className="relative flex h-fit w-full items-center justify-center overflow-hidden pt-20 lg:h-screen lg:pt-10"
      id="hero"
    >
      <Particles
        className="absolute inset-0 z-0"
        quantity={50}
        staticity={1000}
        ease={100}
        size={0.2}
        color={color}
        refresh
      />
      {/* Background Gradients */}
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full blur-3xl filter dark:bg-emerald-400/6"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full blur-3xl filter dark:bg-cyan-400/6"></div>
      <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full border border-red-500 blur-3xl filter dark:bg-purple-400/6"></div>

      {/* Animated meteor-like background effect */}
      {/* <MeteorsBackground number={20} /> */}

      {/* Inner container: holds bio section and code block side-by-side (on large screens) */}
      <div className="relative mx-auto my-auto flex w-11/12 flex-col gap-10 lg:flex-row lg:items-center lg:gap-6 lg:py-7">
        {/*  Left: Bio / Intro Section */}

        <motion.section
          className="relative flex w-full flex-col items-start lg:w-1/2 lg:items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Decorative elements
          <div className="animate-spin-slow absolute -top-8 -left-8 h-16 w-16 rounded-full border-2 border-dashed border-emerald-500/40"></div>
          <div className="absolute right-0 bottom-1/4 h-24 w-24 rotate-45 rounded-lg border border-cyan-500/30"></div> */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Pre-headline tag */}
            <div className="mb-2 inline-flex items-center rounded-full bg-emerald-100/80 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
              Full Stack Developer
            </div>

            {/* Greeting and Name with animated gradient */}
            <h1 className="font-manrope text-primary relative z-10 text-4xl leading-tight font-bold lg:text-5xl">
              Hello! <br />
              I'm{" "}
              <AnimatedGradientText
                speed={1}
                colorFrom={theme === "dark" ? "#4ade80" : "#10B981"}
                colorTo={theme === "dark" ? "#06b6d4" : "#06A3C9"}
                className="relative font-bold"
              >
                Arshdeep Singh
              </AnimatedGradientText>
            </h1>

            {/* Dynamic titles with animated word flipping */}
            <motion.div
              className="text-primary font-manrope mt-4 text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {" "}
              <div className="relative border-l-2 border-emerald-500 pl-4 dark:border-emerald-400">
                {" "}
                I make frontend beautiful{" "}
                <span className="inline-block animate-pulse">✨</span> <br />
                backend powerful ⚡
                <br />
                and conversations meaningful 💬 <br />
                —because I'm a
                <div className="inline-block min-w-64">
                  <FlipWords
                    words={[
                      "Tech Simplifier!",
                      "Full Stack Developer!",
                      "Problem Solver!",
                      "Backend Specialist!",
                      "Effective Collaborator!",
                      "Frontend Innovator!",
                      "JavaScript Enthusiast!",
                      "Team Player!",
                      "Continuous Learner!",
                      "Complexity Breaker!",
                    ]}
                    duration={3000}
                    className="ml-2"
                  />
                </div>
              </div>
            </motion.div>

            {/* Call-to-action buttons: Contact and Resume */}
            <motion.div
              className="flex h-fit flex-row items-center gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Contact Button with shimmer effect */}
              <a href="#contact">
                <ShimmerButton
                  shimmerColor="var(--secondary)"
                  shimmerSize="0.15em"
                  shimmerDuration="3s"
                  borderRadius="100px"
                  background="var(--primary)"
                  className="cursor-pointer shadow-2xl hover:scale-105"
                >
                  <span>Contact me</span>
                </ShimmerButton>
              </a>

              {/* Resume download button with animation */}
              <AnimatedResumeButton
                resume={resume}
                className="cursor-pointer rounded-full px-6 py-[25px] hover:scale-105 hover:border hover:shadow"
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Right: Code Snippet Display Section */}
        <motion.section
          className="flex max-w-full items-center overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <BackgroundGradient containerClassName="w-full p-[2px]">
            {/* Code block showing sample code with syntax highlighting */}
            <CodeBlock
              language="javascript"
              filename="profile.js"
              code={codeBlockData}
              highlightLines={[2, 4, 23]}
            />
          </BackgroundGradient>
        </motion.section>
      </div>
    </div>
  );
}
