import { AnimatedResumeButton } from "./AnimatedResumeButton";
import { BackgroundBeams } from "./BackgroundBeams";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { CodeBlock } from "./CodeBlock";
import { FlipWords } from "@/components/Home/heroSection/FlipWords";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/Button";
import codeBlockData from "@/assets/data/codeBlockData";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";

export default function HeroSection() {
  return (
    // wrapper
    <div className="relative h-fit w-full lg:h-screen">
      <BackgroundBeams />
      <main className="relative mx-auto flex h-fit w-11/12 flex-col gap-6 py-15 lg:flex-row">
        {/* Bio Section */}
        <section className="relative flex w-full flex-col items-center justify-center lg:w-1/2">
          <div>
            <h1 className="text-primary font-manrope relative z-10 text-4xl sm:text-5xl">
              Hey! Arsh here.
            </h1>

            {/* FlipWords Component */}
            <p className="text-primary font-manrope mt-4 text-2xl">
              I make frontend beautiful, backend powerful,
              <br />
              and conversations meaningful <br />
              —because I'm a
              <FlipWords
                words={[
                  "Full Stack Developer!",
                  "Tech Simplifier!",
                  "Clear Communicator!",
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
            <div className="flex flex-row gap-2 py-4">
              <Link
                to="/contact-me"
                className={buttonVariants({ variant: "default" })}
              >
                Contact me
              </Link>

              <AnimatedResumeButton resume={resume} className="custom-class" />
            </div>
          </div>
        </section>
        {/* Codeblock Section */}
        <BackgroundGradient containerClassName="w-fit p-[2px] ">
          <section className="w-full lg:w-1/2">
            <CodeBlock
              language="javascript"
              filename="profile.js"
              code={codeBlockData}
              highlightLines={[2, 4, 23]}
            />
          </section>
        </BackgroundGradient>
      </main>
    </div>
  );
}
