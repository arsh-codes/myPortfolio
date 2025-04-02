import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

import { GlowingEffect } from "./GlowingEffect";
import { IconCloudData } from "@/components/Home/skills/IconCloudData";
import skillCardsData from "@/assets/data/skillCardsData";

export default function Skills() {
  // Skills Data

  return (
    <div className="relative h-fit w-full lg:h-screen" id="skills">
      <section className="mx-auto flex h-full w-11/12 flex-col items-start justify-evenly text-left lg:items-center">
        <div className="flex w-full flex-col text-left lg:items-center lg:text-center">
          <h1 className="text-foreground text-2xl font-bold md:text-3xl lg:text-4xl">
            The Stack That Gets Things Done
          </h1>
          <p className="text-muted-foreground mt-2 lg:text-lg">
            MERN-powered, TypeScript-tuned, and Tailwind-styled.
          </p>
        </div>

        <div className="relative flex flex-col-reverse items-center lg:flex-row">
          {/* Skills Grid  */}
          <ul className="grid grid-cols-2 gap-4">
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
                    <div className="relative flex h-full flex-col justify-start gap-6 overflow-hidden rounded-xl border p-6 shadow-[0px_0px_20px_0px_#D1D5DB] dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
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
                      <div className="grid grid-cols-1 gap-3 text-sm md:grid-cols-2 lg:grid-cols-3">
                        {cardData.skills.map((skill, skillIndex) => {
                          const SkillLogo = skill.logo;

                          return (
                            <TooltipProvider key={skillIndex}>
                              <Tooltip>
                                <TooltipTrigger>
                                  <div className="flex cursor-help items-center space-x-2">
                                    {SkillLogo && (
                                      <SkillLogo
                                        className="h-5 w-5 text-inherit"
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
