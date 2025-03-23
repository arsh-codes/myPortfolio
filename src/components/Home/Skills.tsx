import { IconCloudData } from "@/components/Home/skills/IconCloudData";
import skillCardsData from "@/assets/data/skillCardsData";

export default function Skills() {
  // Skills Data

  return (
    <div className="relative flex h-fit w-full border lg:h-screen">
      <section className="relative mx-auto flex w-11/12 flex-col items-center gap-6 p-4">
        <div className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-3xl font-bold text-neutral-800 lg:text-4xl dark:text-neutral-200">
            💻 What’s in My Dev Arsenal?
          </h1>
          <div className="size-100">
            <IconCloudData />
          </div>
        </div>

        {/* Skills Grid */}
        <section className="grid h-fit w-full grid-cols-3 gap-4">
          {skillCardsData.map((cardData, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg border p-4"
            >
              {/* Heading */}
              <div className="flex items-center space-x-2 text-lg font-semibold">
                {cardData.headingLogo && (
                  <cardData.headingLogo
                    className="h-6 w-6"
                    style={{ color: cardData.skills[0]?.color || "inherit" }}
                  />
                )}
                <span>{cardData.headingText}</span>
              </div>

              {/* Skills */}
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {cardData.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-2">
                    {skill.logo && (
                      <skill.logo
                        className="h-5 w-5"
                        style={{ color: skill.color || "inherit" }}
                      />
                    )}
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
