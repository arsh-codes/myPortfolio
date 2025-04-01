import { AnimatedGradientText } from "./AnimatedGradientText";
import { AnimatedResumeButton } from "./AnimatedResumeButton";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { CodeBlock } from "./CodeBlock";
import { FlipWords } from "@/components/Home/heroSection/FlipWords";
import { MeteorsBackground } from "./MeteorsBackground";
import { ShimmerButton } from "./ShimmerButton";
import codeBlockData from "@/assets/data/codeBlockData";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";
// import { useTheme } from "@/components/ThemeProvider";

export default function HeroSection() {
  // const { theme } = useTheme();
  return (
    // wrapper
    <div className="relative h-fit w-screen overflow-hidden lg:h-screen">
      <MeteorsBackground number={20} />
      <div className="relative mx-auto flex h-fit w-11/12 flex-col gap-10 py-10 lg:flex-row lg:items-center lg:gap-6 lg:py-15">
        {/* Bio Section */}
        <section className="relative flex w-full flex-col items-start lg:w-1/2 lg:items-center">
          <div>
            <h1 className="text-primary font-manrope relative z-10 text-4xl leading-tight font-bold sm:text-5xl">
              Hello! <br />
              I'm{" "}
              <AnimatedGradientText
                speed={1}
                colorFrom="#4ade80"
                colorTo="#06b6d4 "
                className="font-bold"
              >
                Arshdeep Singh
              </AnimatedGradientText>
            </h1>
            {/* FlipWords Component */}

            <p className="text-primary font-manrope mt-4 text-2xl">
              I make frontend beautiful ✨, <br />
              backend powerful ⚡,
              <br />
              and conversations meaningful 💬 <br />
              —because I'm a
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
                className="ml-2 inline-block"
              />
            </p>

            {/* CTA Buttons */}

            <div className="flex h-fit flex-row items-center gap-4 pt-4">
              <a href="#contact">
                <ShimmerButton
                  shimmerColor="var(--secondary)"
                  shimmerSize="0.15em"
                  shimmerDuration="3s"
                  borderRadius="100px"
                  background="var(--primary)"
                  className="shadow-2xl"
                >
                  <span>Contact me</span>
                </ShimmerButton>
              </a>

              <AnimatedResumeButton
                resume={resume}
                className="rounded-full px-6 py-[25px]"
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
