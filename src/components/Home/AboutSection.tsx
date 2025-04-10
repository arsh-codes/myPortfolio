import { Particles } from "../ui/ParticlesBackground";
import aboutMeImage from "@/assets/media/aboutMeImage.webp";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Navbar/ThemeProvider";
export default function AboutSection() {
  const { theme } = useTheme();

  return (
    // Main container for the About section
    <div
      className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full flex-col items-center justify-center py-16 md:py-20 lg:flex-row lg:py-24"
      id="about"
    >
      <Particles
        className="absolute inset-0"
        quantity={10}
        staticity={1000}
        ease={10}
        size={0.2}
        refresh
      />
      {/* Decorative background gradients — rendered only in dark mode for visual flair */}
      {theme === "dark" && (
        <>
          <div className="absolute top-20 -left-40 size-96 rounded-full bg-emerald-400/6 blur-3xl filter"></div>
          <div className="absolute right-10 bottom-40 h-60 w-80 rounded-full bg-cyan-500/6 blur-3xl filter"></div>
        </>
      )}
      {/* Left Section: Profile image with entrance animation */}
      {/* Left Section: Enhanced profile image with floating animation */}
      <motion.section
        className="relative flex w-full flex-col items-center justify-center pb-5 lg:w-1/3 lg:pb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          {/* Enhanced image container with multiple gradient effects */}
          <div className="relative">
            {/* Multi-layered gradient borders */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-70 blur"></div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50"></div>

            {/* Image with enhanced container */}
            <div className="relative rounded-lg bg-white p-2 dark:bg-gray-800">
              <img
                src={aboutMeImage}
                alt="Arshdeep Singh"
                className="w-80 rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Decorative elements around image */}
            <div className="absolute -right-4 -bottom-4 h-12 w-12 rounded-full bg-cyan-500 opacity-80"></div>
            <div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-emerald-500 opacity-80"></div>
          </div>
        </motion.div>
      </motion.section>
      {/* Right Section: About Me text content with animation */}
      <motion.section
        className="relative flex w-full flex-col items-center justify-center p-4 text-left lg:w-2/3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Section headline */}
        <h2 className="text-xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-200">
          Powered by Code, Sustained by Coffee, Driven by Curiosity!
        </h2>

        {/* Paragraph content describing background, skills, and personal interests */}
        <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            Hey there! I'm{" "}
            <span className="text-emerald font-semibold">Arshdeep Singh</span>,
            a Full Stack Developer from India who writes code, fixes bugs , and
            occasionally questions reality when things break for no reason.
          </p>
          <p>
            I work with{" "}
            <span className="text-cyan font-semibold">
              MongoDB, Express, React, Node.js, TypeScript, and Tailwind CSS
            </span>{" "}
            , building clean, efficient, and user-friendly applications. Whether
            it's crafting smooth UIs or making sure the backend doesn't catch
            fire, I enjoy the challenge.
          </p>
          <p>
            Outside of coding, I believe in{" "}
            <span className="text-emerald font-semibold">
              staying active, eating well, and staying at my best, inside and
              out
            </span>
            . You'll find me at the gym 🏋🏽, learning something new 📚, or having
            conversations with interesting people—I love hearing different
            perspectives and stories. 🎙️
          </p>
          <p>
            When I’m not staring at a screen full of errors, I’m probably
            tinkering with a{" "}
            <span className="text-cyan font-semibold">
              side project , catching up on tech trends , gaming 🎮, or
              listening to podcasts .
            </span>
          </p>
          <p className="font-medium italic">
            Also, coffee. Lots of coffee. ☕❣️
          </p>
        </div>
      </motion.section>
    </div>
  );
}
