import { CodeBlock } from "@/components/Home/CodeBlock"; // Importing CodeBlock component
import { FlipWords } from "@/components/ui/FlipWords"; // Importing FlipWords component
import codeBlockData from "@/assets/data/codeBlockData"; // Importing code block data
export default function HomePage() {
  return (
    // Wrapper
    <main className="mx-auto flex w-11/12 flex-col gap-6 p-6 lg:flex-row">
      {/* Bio Section */}
      {/* Bio Section */}
      <section className="flex w-full flex-col items-start justify-center p-6 lg:w-1/2">
        {/* Intro Header */}
        <h1 className="text-primary text-3xl font-extrabold sm:text-4xl">
          Hey! Arsh here.
        </h1>

        {/* FlipWords Component with Improved Word Flow */}
        <p className="text-primary mt-4 text-2xl font-bold">
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
      </section>

      {/* Codeblock Section */}
      <section className="w-full border p-6 lg:w-1/2">
        <CodeBlock
          language="javascript"
          filename="profile.js"
          code={codeBlockData}
          highlightLines={[2, 10, 28]}
        />
      </section>
    </main>
  );
}
