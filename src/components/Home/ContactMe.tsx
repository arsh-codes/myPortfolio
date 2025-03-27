import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { SignupFormDemo } from "./ContactForm";

export default function ContactMe() {
  return (
    <section className="relative flex w-full items-center justify-center py-12 lg:h-screen">
      <div className="relative mx-auto flex w-11/12 flex-col gap-10 lg:flex-row lg:items-center">
        {/* Contact Info Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            Let’s Build Something Awesome Together!
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg md:text-xl">
            Got a cool idea, a job opportunity, or just want to chat about tech,
            movies, or anime? I’m all ears! Whether you're looking for a
            developer to join your team, a collaborator for an exciting project,
            or just want to say hello, don’t hesitate to reach out.{" "}
            <span className="text-muted-foreground font-medium">
              From brainstorms to breakpoints—let’s build something amazing.
              💡💻
            </span>
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-center space-x-6 lg:justify-start">
            <a
              href="https://github.com/arsh-codes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition"
            >
              <FaGithub className="size-10 md:size-12" />
            </a>
            <a
              href="https://discordapp.com/users/572624088783126562"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-muted-foreground hover:text-primary transition"
            >
              <FaDiscord className="size-10 md:size-12" />
            </a>
            <a
              href="mailto:work.arshdeep@outlook.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition"
            >
              <FaEnvelope className="size-10 md:size-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/work-arsh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition"
            >
              <FaLinkedin className="size-10 md:size-12" />
            </a>
          </div>
        </div>

        {/* Contact Form */}

        <div>
          <SignupFormDemo />
        </div>
      </div>
    </section>
  );
}
