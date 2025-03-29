import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { ContactForm } from "./ContactForm";

export default function ContactMe() {
  return (
    <section className="relative flex w-full items-center justify-center py-12 lg:h-screen">
      <div className="relative mx-auto flex w-11/12 flex-col gap-10 lg:flex-row lg:items-center">
        {/* Contact Info Section */}
        <div className="text-left">
          <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            Let’s Build Something Awesome Together!
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance md:text-xl">
            Got a cool idea, a job opportunity, or just want to chat about tech,
            movies, or anime? I’m all ears! Whether you're looking for a
            developer to join your team, a collaborator for an exciting project,
            or just want to say hello, don’t hesitate to reach out.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex justify-start space-x-6">
            <a
              href="https://github.com/arsh-codes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-105 hover:drop-shadow-md"
            >
              <FaGithub className="size-10 md:size-12" />
            </a>
            <a
              href="https://discordapp.com/users/572624088783126562"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
            >
              <FaDiscord className="size-10 md:size-12" />
            </a>
            <a
              href="mailto:work.arshdeep@outlook.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
            >
              <FaEnvelope className="size-10 md:size-12" />
            </a>
            <a
              href="https://www.linkedin.com/in/work-arsh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110 hover:drop-shadow-md"
            >
              <FaLinkedin className="size-10 md:size-12" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
