import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import { GlowingEffect } from "./GlowingEffect";
import { IconCloudData } from "@/components/Home/skills/IconCloudData";
import { motion } from "framer-motion";
import skillCardsData from "@/assets/data/skillCardsData";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const containerStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillCardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function SkillSection() {
  const { theme } = useTheme();

  return (
    <div
      className="bg-muted/60 dark:bg-muted/20 relative h-fit w-full py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      id="skills"
    >
      {/* Background gradient elements */}
      {theme === "dark" && (
        <>
          <div className="absolute top-50 -left-30 size-80 rounded-full bg-emerald-500/6 blur-3xl filter"></div>
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-500/6 blur-3xl filter"></div>
        </>
      )}

      <section className="mx-auto flex h-full w-11/12 flex-col items-start justify-evenly lg:items-center xl:gap-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-start gap-4 text-left lg:items-center lg:justify-center lg:text-center"
        >
          <div className="relative">
            <h1 className="relative z-10 text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl">
              <span className="from-emerald to-cyan bg-gradient-to-r bg-clip-text text-transparent">
                The Stack That Gets Things Done
              </span>
            </h1>
          </div>

          <p className="text-muted-foreground text-balance lg:text-lg">
            <span className="text-foreground/90 font-semibold">
              MERN-powered
            </span>
            ,<span className="text-cyan font-semibold"> TypeScript</span>-tuned,
            and
            <span className="text-emerald font-semibold"> Tailwind</span>
            -styled.
          </p>

          <div className="mt-1 flex items-center justify-center gap-2">
            <div className="bg-emerald size-1 animate-pulse rounded-full"></div>
            <div className="bg-cyan size-1 animate-pulse rounded-full delay-150"></div>
            <div className="bg-emerald size-1 animate-pulse rounded-full delay-300"></div>
          </div>
        </motion.div>

        {/* Skills Grid and IconCloud */}
        <div className="relative flex flex-col-reverse items-center xl:flex-row">
          {/* Skill Cards */}
          <motion.ul
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {skillCardsData.map((cardData, index) => {
              const HeadingLogo = cardData.headingLogo;

              return (
                <motion.li
                  key={index}
                  variants={skillCardVariant}
                  className="col-span-1"
                >
                  {/* Outer Container */}
                  <div className="relative h-full rounded-lg border p-3">
                    <GlowingEffect
                      blur={0}
                      borderWidth={2}
                      spread={90}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                    />

                    {/* Card Content */}
                    <div className="relative flex h-full flex-col items-center justify-start gap-6 overflow-hidden rounded-xl border p-6 shadow-[0px_0px_20px_0px_#D1D5DB] md:items-start dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                      {/* Heading */}
                      <div className="relative flex flex-col items-center gap-3 md:flex-row">
                        <div className="border-muted-foreground w-fit rounded-lg border p-2">
                          {HeadingLogo && (
                            <HeadingLogo
                              className="size-6"
                              style={{ color: cardData.headingLogoColor }}
                            />
                          )}
                        </div>

                        <div>
                          <h3 className="text-foreground text-md text-center font-semibold md:text-left md:text-2xl">
                            {cardData.headingText}
                          </h3>
                        </div>
                      </div>

                      {/* Skills List */}
                      <div className="grid w-fit grid-cols-1 gap-3 text-sm md:w-full md:grid-cols-2 lg:grid-cols-3">
                        {cardData.skills.map((skill, skillIndex) => {
                          const SkillLogo = skill.logo;

                          return (
                            <TooltipProvider key={skillIndex}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="flex w-fit cursor-help items-center justify-center space-x-2 md:justify-start">
                                    {SkillLogo && (
                                      <SkillLogo
                                        className="size-5 text-inherit"
                                        style={{ color: skill.color }}
                                      />
                                    )}
                                    <p className="text-left text-black dark:text-neutral-400">
                                      {skill.name}
                                    </p>
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>{skill.tooltip}</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* IconCloud */}
          <motion.div
            className="my-6 lg:size-120"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <IconCloudData />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
