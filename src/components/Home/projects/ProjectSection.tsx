import {
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaServer,
  FaTools,
} from "react-icons/fa";

import { AnimatedGradientText } from "@/components/Home/heroSection/AnimatedGradientText";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
// Import project images
import portfolioImageDark from "@/assets/media/portfolioImageDark.webp";
import portfolioImageLight from "@/assets/media/portfolioImageLight.webp";
import studyNotionImage from "@/assets/media/studyNotionImage.webp";
import { useState } from "react";
import { useTheme } from "@/components/Navbar/ThemeProvider";

export default function ProjectSection() {
  // Track the currently selected project
  const [activeProject, setActiveProject] = useState(0);
  // Reference to the container for scroll animations
  const { theme } = useTheme();
  // Project data
  const projects = [
    {
      id: 1,
      title: "StudyNotion",
      description:
        "A comprehensive EdTech platform enabling instructors to create courses and providing students with an immersive learning experience.",
      image: studyNotionImage,
      tags: ["EdTech", "eLearning", "Full Stack"],
      features: [
        "Interactive dashboards for students and instructors",
        "Seamless course creation and management",
        "Secure authentication with JWT & OTP",
        "Integrated payments via Razorpay",
        "Cloud-based media storage with Cloudinary",
        "Rich-text course content with Markdown support",
      ],
      stack: {
        frontend: ["React", "Redux", "TypeScript", "Tailwind CSS"],
        backend: ["Node.js", "Express", "MongoDB", "JWT"],
        tools: ["Cloudinary", "Razorpay", "Mongoose", "Git"],
      },
      github: "https://github.com/arsh-codes/studynotion",
      liveDemo: "https://studynotion.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "A modern, interactive developer portfolio with animated components and responsive design showcasing projects and skills.",
      image: theme === "dark" ? portfolioImageDark : portfolioImageLight,
      tags: ["Portfolio", "Frontend", "UI/UX"],
      features: [
        "Interactive UI with smooth animations",
        "Dark/light theme support",
        "Component-based architecture",
        "Responsive design for all devices",
        "Optimized performance metrics",
        "Custom animated components",
      ],
      stack: {
        frontend: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
        backend: ["N/A"],
        tools: ["Vite", "Git", "Figma", "Netlify"],
      },
      github: "https://github.com/arsh-codes/myPortfolio",
      liveDemo: "https://arsh-codes.web.app",
    },
  ];

  // Animation variants for staggered animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="projects"
      className="relative h-fit w-full overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
    >
      {/* Background gradient elements */}
      {theme === "dark" && (
        <>
          <div className="absolute top-20 -left-10 size-80 rounded-full bg-emerald-500/10 blur-3xl filter"></div>
          <div className="absolute right-20 bottom-40 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl filter"></div>
          <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-emerald-300/10 blur-3xl filter"></div>
        </>
      )}

      <div className="container mx-auto w-11/12 px-4">
        {/* Section header with animated title */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedGradientText
            speed={1}
            colorFrom="#10B981" // emerald
            colorTo="#06A3C9" // cyan
            className="text-4xl font-bold md:text-5xl"
          >
            Errors Faced, Challenges Embraced
          </AnimatedGradientText>
          <p className="text-primary mx-auto mt-2 max-w-2xl text-lg">
            "Every project has a story—mostly about fixing what I broke!"
            <span className="ml-2 inline-block animate-pulse">💻</span>
          </p>
        </motion.div>

        {/* Project navigation tabs */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`relative w-fit rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeProject === index
                  ? "from-emerald to-cyan text-background dark:text-foreground bg-gradient-to-r font-semibold shadow-lg"
                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
              }`}
            >
              {project.title}
              {/* Animated indicator for active tab */}
              {activeProject === index && (
                <motion.span
                  layoutId="activeProjectIndicator"
                  className="absolute inset-0 rounded-full"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </button>
          ))}

          {/* Enhanced See More Projects button */}
          <Button
            variant="outline"
            className="group border-emerald text-emerald rounded-full border-2 px-7 py-5 text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:text-white"
            onClick={() =>
              window.open(
                "https://github.com/arsh-codes?tab=repositories",
                "_blank",
              )
            }
          >
            <span>See More Projects</span>
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Button>
        </div>

        {/* Featured project display with animation */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <BackgroundGradient containerClassName="w-full p-[1px] rounded-2xl overflow-hidden">
            <div className="rounded-2xl bg-white p-1 dark:bg-gray-900">
              <div className="flex flex-col gap-8 lg:flex-row">
                {/* Project image with overlay on hover */}
                <div className="group relative w-full overflow-hidden rounded-xl lg:w-1/2">
                  <img
                    loading="lazy"
                    src={projects[activeProject].image}
                    alt={projects[activeProject].title}
                    className="h-full w-full object-contain object-center"
                  />
                  {/* Overlay with action buttons on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute right-0 bottom-6 left-0 flex justify-center space-x-4">
                      {/* GitHub button */}
                      <Button
                        variant="outline"
                        className="flex items-center border-emerald-500 bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg hover:scale-105 hover:bg-emerald-500 hover:text-white dark:border-emerald-400 dark:bg-white/10 dark:text-emerald-50 dark:hover:bg-emerald-600 dark:hover:text-white"
                        onClick={() =>
                          window.open(projects[activeProject].github, "_blank")
                        }
                      >
                        <FaGithub className="mr-2" /> View Code
                      </Button>
                      {/* Live demo button */}
                      <Button
                        variant="outline"
                        className="border-cyan hover:bg-cyan flex items-center bg-black/70 px-4 py-2 text-sm font-medium text-white shadow-lg hover:scale-105 hover:text-white dark:border-cyan-400 dark:bg-white/10 dark:text-cyan-50 dark:hover:bg-cyan-600 dark:hover:text-white"
                        onClick={() =>
                          window.open(
                            projects[activeProject].liveDemo,
                            "_blank",
                          )
                        }
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project details section */}
                <div className="flex w-full flex-col justify-between p-6 lg:w-1/2">
                  <div>
                    {/* Project tags */}
                    <div className="mb-4 flex flex-wrap gap-2">
                      {projects[activeProject].tags.map((tag, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project title */}
                    <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                      {projects[activeProject].title}
                    </h3>

                    {/* Project description */}
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      {projects[activeProject].description}
                    </p>

                    {/* Features with staggered animation */}
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {projects[activeProject].features.map(
                          (feature, index) => (
                            <motion.div
                              key={index}
                              variants={fadeInUp}
                              className="flex items-start"
                            >
                              <span className="mr-2 text-emerald-500">✓</span>
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {feature}
                              </span>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </motion.div>

                    {/* Tech stack with category icons */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Tech Stack
                      </h4>

                      {/* Frontend technologies */}
                      <div className="flex items-start gap-3 md:items-center">
                        <FaLayerGroup className="text-cyan" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Frontend:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {projects[activeProject].stack.frontend.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Backend technologies */}
                      <div className="flex items-center gap-3">
                        <FaServer className="text-emerald-500" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Backend:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {projects[activeProject].stack.backend.map(
                            (tech, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200"
                              >
                                {tech}
                              </span>
                            ),
                          )}
                        </div>
                      </div>

                      {/* Tools and technologies */}
                      <div className="flex items-center gap-3">
                        <FaTools className="text-cyan" />
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Tools:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {projects[activeProject].stack.tools.map(
                            (tool, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-cyan-100 px-2 py-1 text-xs font-medium text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
                              >
                                {tool}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile-only buttons for small screens */}
                  <div className="mt-6 flex flex-col gap-3 sm:hidden">
                    <Button
                      variant="outline"
                      className="flex w-full items-center justify-center border-emerald-500 py-3 font-medium text-emerald-500 hover:bg-emerald-500 hover:text-white"
                      onClick={() =>
                        window.open(projects[activeProject].github, "_blank")
                      }
                    >
                      <FaGithub className="mr-2" /> View Code
                    </Button>
                    <Button
                      variant="outline"
                      className="border-cyan text-cyan hover:bg-cyan flex w-full items-center justify-center py-3 font-medium hover:text-white"
                      onClick={() =>
                        window.open(projects[activeProject].liveDemo, "_blank")
                      }
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>

        {/* Mobile navigation dots */}
        <div className="mt-8 flex justify-center gap-2 sm:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeProject === index
                  ? "from-emerald to-cyan w-6 bg-gradient-to-r"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Select project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
