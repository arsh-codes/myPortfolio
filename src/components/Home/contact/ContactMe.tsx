import {
  FaArrowUp,
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect, useState } from "react";

import { ContactForm } from "./ContactForm";
import { TypewriterEffectSmooth } from "./TypewriterEffect";

export default function ContactMe() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/work-arsh/",
      icon: <FaLinkedin className="size-8 md:size-12" />,
      label: "LinkedIn",
    },

    {
      href: "https://discordapp.com/users/572624088783126562",
      icon: <FaDiscord className="size-8 md:size-12" />,
      label: "Discord",
    },
    {
      href: "https://github.com/arsh-codes",
      icon: <FaGithub className="size-8 md:size-12" />,
      label: "GitHub",
    },
    {
      href: "mailto:work.arshdeep@outlook.com",
      icon: <FaEnvelope className="size-8 md:size-12" />,
      label: "Email",
    },
  ];

  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }),
      );
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center lg:h-screen">
      <div className="relative mx-auto flex w-11/12 flex-col justify-center gap-10 lg:flex-row lg:items-start">
        {/* Contact Info Section */}
        <div className="">
          <TypewriterEffectSmooth
            className="text-2xl font-bold md:text-3xl"
            words={[
              { text: "Let's" },
              { text: "Build" },
              { text: "Something" },
              { text: "Awesome" },
              {
                text: "Together.",
                className: "text-blue-500 dark:text-blue-500",
              },
            ]}
            cursorClassName="bg-blue-500 dark:bg-blue-500 animate-blink"
          />
          <p className="text-muted-foreground max-w-2xl text-balance">
            Got a cool idea, a job opportunity, or just want to chat about tech,
            movies, or anime? I’m all ears! Whether you're looking for a
            developer to join your team, a collaborator for an exciting project,
            or just want to say hello, don’t hesitate to reach out.
          </p>

          {/* Social Links */}
          <div className="my-6 flex justify-start space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-md"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Location & Time Info */}
          <div className="mt-4 flex flex-col space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
            <p>
              📍 <strong>Based in:</strong>{" "}
              <span className="font-medium">Delhi, India 🇮🇳</span>
            </p>
            <p>
              ⏳ <strong>Time Zone:</strong>{" "}
              <span className="font-medium">IST (UTC+5:30)</span>
            </p>
            <p>
              🕒 <strong>Current Time:</strong>{" "}
              <span className="text-primary font-mono">{time}</span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
      </div>

      {/* Go to Top Button (Visible only in ContactMe section) */}
      <button
        onClick={scrollToTop}
        className="bg-secondary hover:bg-opacity-90 text-primary absolute right-4 bottom-2 z-50 flex cursor-pointer items-center justify-center rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        aria-label="Go to top"
      >
        <FaArrowUp className="mr-2 text-lg" />
        <span>Back to top</span>
      </button>

      {/* Footer */}
      <footer className="absolute bottom-2 mt-10 w-full text-center text-sm text-neutral-600 dark:text-neutral-400">
        Made with ❤️ by Arshdeep Singh | 🅮 {new Date().getFullYear()}
      </footer>
    </section>
  );
}
