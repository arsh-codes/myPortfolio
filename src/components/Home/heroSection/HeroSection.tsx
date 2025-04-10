import { AnimatedGradientText } from "./AnimatedGradientText";
import { AnimatedResumeButton } from "./AnimatedResumeButton";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { CodeBlock } from "./CodeBlock";
import { FlipWords } from "@/components/Home/heroSection/FlipWords";
import { MeteorsBackground } from "./MeteorsBackground";
import { ShimmerButton } from "./ShimmerButton";
import codeBlockData from "@/assets/data/codeBlockData";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Main HeroSection component
export default function HeroSection() {
  const { theme } = useTheme();

  return (
    // Main wrapper container for the Hero section
    <div
      className="relative flex h-fit w-full items-center justify-center overflow-hidden pt-20 lg:h-screen lg:pt-10"
      id="hero"
    >
      {/* Animated meteor-like background effect */}
      <MeteorsBackground number={20} />

      {/* Inner container: holds bio section and code block side-by-side (on large screens) */}
      <div className="relative mx-auto my-auto flex w-11/12 flex-col gap-10 lg:flex-row lg:items-center lg:gap-6 lg:py-7">
        {/*  Left: Bio / Intro Section */}
        <section className="relative flex w-full flex-col items-start lg:w-1/2 lg:items-center">
          <div>
            {/* Greeting and Name with animated gradient */}
            <h1 className="text-primary font-manrope relative z-10 text-3xl leading-tight font-bold lg:text-4xl">
              Hello! <br />
              I'm{" "}
              <AnimatedGradientText
                speed={1}
                colorFrom={theme === "dark" ? "#4ade80" : "#10B981"}
                colorTo={theme === "dark" ? "#06b6d4" : "#06A3C9"}
                className="font-bold"
              >
                Arshdeep Singh
              </AnimatedGradientText>
            </h1>

            {/* Dynamic titles with animated word flipping */}
            <div className="text-primary font-manrope mt-4 text-xl lg:text-2xl">
              I make frontend beautiful{" "}
              <span className="inline-block animate-pulse">✨</span>, <br />
              backend powerful ⚡,
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

            {/* Call-to-action buttons: Contact and Resume */}
            <div className="flex h-fit flex-row items-center gap-4 pt-6">
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
            </div>
          </div>
        </section>

        {/* Right: Code Snippet Display Section */}

        <div className="flex max-w-full items-center overflow-hidden">
          <BackgroundGradient containerClassName="w-full p-[2px]">
            {/* Code block showing sample code with syntax highlighting */}
            <CodeBlock
              language="javascript"
              filename="profile.js"
              code={codeBlockData}
              highlightLines={[2, 4, 23]}
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
