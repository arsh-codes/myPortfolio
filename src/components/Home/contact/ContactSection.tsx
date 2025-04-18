// Importing necessary icons from react-icons
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import BackToTopButton from "./BackToTopButton";
// Importing custom components
import { ContactForm } from "./ContactForm";
import { SlidingNumberClock } from "./SlidingNumberClock";
import { TypewriterEffectSmooth } from "./TypewriterEffect";
import { motion } from "motion/react"; // Motion animation library
import { useTheme } from "@/components/Navbar/ThemeProvider"; // Theme context

export default function ContactSection() {
  // Social media/contact links with associated icons and hover effects
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

  const { theme } = useTheme(); // Access current theme (light or dark)

  return (
    // Main contact section with padding and responsive layout
    <section
      className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full flex-col items-center justify-center pt-16 md:pt-20 lg:py-24 xl:py-28 2xl:py-36"
      id="contact"
    >
      {/* Decorative blurred background blobs (only in dark mode) */}
      {theme === "dark" && (
        <>
          <motion.div
            className="absolute bottom-10 -left-20 size-96 rounded-full bg-emerald-500/6 blur-3xl filter"
            animate={{
              opacity: [0.4, 0.6, 0.4],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/6 blur-3xl filter"
            animate={{
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
        </>
      )}

      {/* Content wrapper with fade-in animation */}
      <motion.div
        className="mx-auto flex w-11/12 flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Heading */}
        <motion.div
          className="mb-8 md:text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-[#4ade80] to-[#06b6d4] bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Let's collaborate and bring your ideas to life
          </p>
        </motion.div>

        {/* Grid layout containing contact info and contact form */}
        <div className="relative flex h-fit flex-col justify-center gap-10 lg:flex-row lg:gap-30">
          {/* Left: Contact Info and Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-fit"
          >
            {/* Animated intro message using typewriter effect */}
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
                { text: "Awesome" },
                { text: "Together." },
              ]}
              cursorClassName="bg-emerald animate-blink"
            />

            {/* Short pitch or invitation message */}
            <motion.p
              className="text-muted-foreground max-w-2xl text-balance"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Got a cool idea, a job opportunity, or just want to chat about
              tech, movies, or anime? I'm all ears! Whether you're looking for a
              developer to join your team, a collaborator for an exciting
              project, or just want to say hello, don't hesitate to reach out.
            </motion.p>

            {/* Social media/contact icons */}
            <motion.div
              className="my-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-muted-foreground mb-4 text-sm font-medium tracking-wider uppercase">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-6">
                {/* Mapping through social links to display each icon */}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location and time info block */}
            <motion.div
              className="bg-muted/50 dark:bg-muted/20 mt-8 space-y-4 rounded-2xl p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {/* Location info */}
              <motion.a
                whileHover={{ x: 5 }}
                href="https://maps.app.goo.gl/H7dEy8vnVmZWUD5A6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-800/40"
                >
                  📍
                </motion.span>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Based in
                  </p>
                  <p className="group-hover:text-foreground font-medium">
                    Punjab, India 🇮🇳
                  </p>
                </div>
              </motion.a>

              {/* Time zone info */}
              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.timeanddate.com/time/zone/india"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-800/40"
                >
                  ⏳
                </motion.span>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Time Zone
                  </p>
                  <p className="group-hover:text-foreground font-medium">
                    IST (UTC+5:30)
                  </p>
                </div>
              </motion.a>

              {/* Live clock displaying current time */}
              <motion.a
                whileHover={{ x: 5 }}
                href="https://www.timeanddate.com/worldclock/india"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-3 transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-800/40"
                >
                  🕒
                </motion.span>
                <div>
                  <p className="text-muted-foreground text-sm font-medium">
                    Current Time
                  </p>
                  <span className="text-primary group-hover:text-foreground font-mono font-medium">
                    <SlidingNumberClock />
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Contact form component */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating "Back to top" button at the bottom of the section */}
      <BackToTopButton />
    </section>
  );
}
