import { BackgroundGradient } from "./BackgroundGradient";
import { CodeBlock } from "@/components/Home/CodeBlock";
import { Download } from "lucide-react";
import { FlipWords } from "@/components/ui/FlipWords";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/Button";
import codeBlockData from "@/assets/data/codeBlockData";
import resume from "@/assets/data/Resume Arshdeep Singh.pdf";

export default function HomePage() {
  return (
    // Wrapper
    <main className="relative mx-auto flex w-11/12 flex-col gap-6 py-20 lg:flex-row">
      {/* Bio Section */}
      <section className="relative flex w-full flex-col items-start justify-center bg-gradient-primary p-6 lg:w-1/2">
        <div className="relative">
          <h1 className="text-primary font-manrope relative z-10 text-4xl sm:text-5xl">
            Hey! Arsh here.
          </h1>
        </div>

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
              "Passionate Engineer!",
              "Clear Communicator!",
              "Problem Solver!",
              "Technology Educator!",
              "Backend Specialist!",
              "Effective Collaborator!",
              "Frontend Innovator!",
              "Bridge Between Tech & People!",
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
          <a
            href={resume}
            download="Arshdeep_Singh_Resume.pdf"
            className={buttonVariants({ variant: "secondary" })}
          >
            <Download />
            Resume
          </a>
        </div>
      </section>
      {/* Codeblock Section */}
      <BackgroundGradient>
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
  );
}
