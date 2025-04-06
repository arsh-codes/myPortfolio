import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import { GlowingEffect } from "./GlowingEffect";
import { IconCloudData } from "@/components/Home/skills/IconCloudData";
import skillCardsData from "@/assets/data/skillCardsData";

export default function SkillSection() {
  // Skills Data

  return (
    <div
      className="bg-muted/60 dark:bg-muted/20 relative h-fit w-full py-16 md:py-20 lg:py-24"
      id="skills"
    >
      <section className="mx-auto flex h-full w-11/12 flex-col items-start justify-evenly lg:items-center">
        {/* heading section */}
        <div className="flex flex-col items-start gap-4 text-left lg:items-center lg:justify-center lg:text-center">
          <div className="relative">
            <h1 className="relative z-10 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
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
        </div>

        {/* Skills Grid  */}
        <div className="relative flex flex-col-reverse items-center lg:flex-row">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {skillCardsData.map((cardData, index) => {
              const HeadingLogo = cardData.headingLogo;

              return (
                <li
                  key={index}
                  className={`${cardData.headingText === "Frontend Development" ? "col-span-1" : "col-span-1"}`}
                >
                  {/* Outer Container*/}
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

                    {/* Card Wrapper*/}
                    <div className="relative flex h-full flex-col items-center justify-start gap-6 overflow-hidden rounded-xl border p-6 shadow-[0px_0px_20px_0px_#D1D5DB] md:items-start dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                      {/*  heading logo and title */}
                      <div className="relative flex flex-col items-center gap-3 md:flex-row">
                        {/* Logo Container */}
                        <div className="border-muted-foreground borderp-2 w-fit rounded-lg border p-2">
                          {HeadingLogo && (
                            <HeadingLogo
                              className="size-6"
                              style={{ color: cardData.headingLogoColor }}
                            />
                          )}
                        </div>

                        {/* Heading Text */}
                        <div className="">
                          <h3 className="text-foreground text-md text-center font-semibold md:text-left md:text-2xl">
                            {cardData.headingText}
                          </h3>
                        </div>
                      </div>

                      {/* Skills list  */}
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
                                    {/* Skill Name - Text representation of the skill */}
                                    <p className="text-black dark:text-neutral-400">
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
                </li>
              );
            })}
          </ul>

          {/* // Iconcloud component */}
          <div className="my-6 lg:size-120">
            <IconCloudData />
          </div>
        </div>
      </section>
    </div>
  );
}
