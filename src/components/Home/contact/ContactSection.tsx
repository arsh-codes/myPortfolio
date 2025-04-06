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
import { motion } from "motion/react";

export default function ContactSection() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/work-arsh/",
      icon: <FaLinkedin className="size-8 md:size-10" />,
      label: "LinkedIn",
      color: "hover:text-[#0077B5]",
    },
    {
      href: "https://discordapp.com/users/572624088783126562",
      icon: <FaDiscord className="size-8 md:size-10" />,
      label: "Discord",
      color: "hover:text-[#7289DA]",
    },
    {
      href: "https://github.com/arsh-codes",
      icon: <FaGithub className="size-8 md:size-10" />,
      label: "GitHub",
      color: "hover:text-[#2b3137] dark:hover:text-[#fafbfc]",
    },
    {
      href: "mailto:work.arshdeep@outlook.com",
      icon: <FaEnvelope className="size-8 md:size-10" />,
      label: "Email",
      color: "hover:text-[#c71610]",
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
    <section
      className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full flex-col items-center justify-center py-16 md:py-20 lg:py-24"
      id="contact"
    >
      {/* wrapper  */}
      <div className="mx-auto flex w-11/12 flex-col items-center">
        {/* Heading */}
        <div className="mb-8 md:text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#4ade80] to-[#06b6d4] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Let's collaborate and bring your ideas to life
          </p>
        </div>
        {/* info and form */}
        <div className="flex flex-col lg:flex-row">
          <div className="relative flex flex-col justify-center gap-10 lg:flex-row lg:items-start lg:gap-30">
            {/* Contact Info Section */}
            <div>
              <TypewriterEffectSmooth
                className="text-4xl font-bold md:text-3xl"
                words={[
                  { text: "Let's" },
                  {
                    text: "Build",
                    className:
                      "bg-gradient-to-r from-[#4ade80] to-[#06b6d4] bg-clip-text text-transparent",
                  },
                  { text: "Something" },
                  {
                    text: "Awesome",
                  },
                  {
                    text: "Together.",
                  },
                ]}
                cursorClassName="bg-emerald animate-blink"
              />

              <p className="text-muted-foreground max-w-2xl text-balance">
                Got a cool idea, a job opportunity, or just want to chat about
                tech, movies, or anime? I’m all ears! Whether you're looking for
                a developer to join your team, a collaborator for an exciting
                project, or just want to say hello, don’t hesitate to reach out.
              </p>

              {/* Social Links */}
              <div className="my-8">
                <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`text-muted-foreground transition-all duration-200 ${link.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Location & Time Info */}
              <div className="bg-muted/50 dark:bg-muted/20 mt-8 space-y-4 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    📍
                  </span>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Based in
                    </p>
                    <p className="font-medium">Delhi, India 🇮🇳</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    ⏳
                  </span>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Time Zone
                    </p>
                    <p className="font-medium">IST (UTC+5:30)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    🕒
                  </span>
                  <div>
                    <p className="text-muted-foreground text-sm font-medium">
                      Current Time
                    </p>
                    <p className="text-primary font-mono font-medium">{time}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Go to Top Button (Visible only in ContactMe section) */}
      <button
        onClick={scrollToTop}
        className="bg-secondary hover:bg-opacity-90 text-primary absolute right-6 bottom-1.5 z-50 flex cursor-pointer items-center justify-center rounded-full p-3 text-sm shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:right-1.5 lg:right-10 lg:bottom-2 lg:text-base"
        aria-label="Go to top"
      >
        <FaArrowUp className="lg:text-lg" />
        <span className="ml-2 hidden lg:inline">Back to top</span>
      </button>
    </section>
  );
}
