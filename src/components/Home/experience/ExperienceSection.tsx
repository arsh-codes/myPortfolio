import { Timeline } from "./Timeline";
import timelineData from "@/assets/data/timelineData";
export default function ExperienceSection() {
  return (
    <div className="h-fit w-full pb-10" id="experience">
      <section className="mx-auto flex w-11/12 flex-col gap-0">
        {/* Heading container */}
        {/* Enhanced heading container */}
        <div className="relative mb-8 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="from-emerald to-cyan h-1 w-16 rounded-full bg-gradient-to-r"></div>
            <h2 className="text-emerald text-sm font-semibold tracking-wider uppercase">
              Career Path
            </h2>
          </div>

          <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text pb-2 text-3xl font-bold text-transparent lg:text-5xl dark:from-white dark:via-gray-200 dark:to-gray-300">
            How I Got Here
          </h1>

          <p className="text-muted-foreground max-w-2xl text-lg">
            A Timeline of My Professional and Academic Milestones
          </p>

          {/* Decorative element for more heading emphasis */}
          <div className="from-emerald to-cyan absolute -bottom-4 left-0 h-0.5 w-24 rounded-full bg-gradient-to-r"></div>
        </div>

        <div>
          <Timeline data={timelineData} />
        </div>
      </section>
    </div>
  );
}
