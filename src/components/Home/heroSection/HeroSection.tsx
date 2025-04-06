import { AnimatedGradientText } from "./AnimatedGradientText";
import { AnimatedResumeButton } from "./AnimatedResumeButton";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { CodeBlock } from "./CodeBlock";
import { FlipWords } from "@/components/Home/heroSection/FlipWords";
import { MeteorsBackground } from "./MeteorsBackground";
import { ShimmerButton } from "./ShimmerButton";
import codeBlockData from "@/assets/data/codeBlockData";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";
import { useTheme } from "@/components/ThemeProvider";

export default function HeroSection() {
  const { theme } = useTheme();
  return (
    // wrapper
    <div
      className="relative flex h-fit w-full items-center justify-center overflow-hidden pt-20 lg:h-screen lg:pt-10"
      id="hero"
    >
      <MeteorsBackground number={20} />
      <div className="relative mx-auto my-auto flex w-11/12 flex-col gap-10 lg:flex-row lg:items-center lg:gap-6 lg:py-7">
        {/* Bio Section */}
        <section className="relative flex w-full flex-col items-start lg:w-1/2 lg:items-center">
          <div className=" ">
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
            {/* FlipWords Component */}
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

            {/* CTA Buttons */}

            <div className="flex h-fit flex-row items-center gap-4 pt-6">
            <div className="flex h-fit flex-row items-center gap-4 pt-6">
              <a href="#contact">
                <ShimmerButton
                  shimmerColor="var(--secondary)"
                  shimmerSize="0.15em"
                  shimmerDuration="3s"
                  borderRadius="100px"
                  background="var(--primary)"
                  className="shadow-2xl hover:scale-105"
                >
                  <span>Contact me</span>
                </ShimmerButton>
              </a>

              <AnimatedResumeButton
                resume={resume}
                className="rounded-full px-6 py-[25px] hover:scale-105 hover:border hover:shadow"
              />
            </div>
          </div>
        </section>

        {/* Codeblock Section */}
        <div className="flex max-w-full items-center overflow-hidden">
          <BackgroundGradient containerClassName="w-full p-[2px]">
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
