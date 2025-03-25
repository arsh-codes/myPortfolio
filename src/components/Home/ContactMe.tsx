import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "./ContactForm";

export default function ContactMe() {
  return (
    <section className="relative flex h-fit w-full items-center justify-center border lg:h-screen">
      <div className="relative mx-auto flex h-full w-11/12 flex-col gap-10 py-12 lg:flex-row lg:items-center">
        <div className="text-muted-foreground flex space-x-4">
          <a
            href="https://github.com/arsh-codes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="size-20" />
          </a>
          <a
            href="https://discordapp.com/users/572624088783126562"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="size-20" />
          </a>
          <a href="mailto:work.arshdeep@outlook.com">
            <FaEnvelope className="size-20" />
          </a>
          <a
            href="https://www.linkedin.com/in/work-arsh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-20" />
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
