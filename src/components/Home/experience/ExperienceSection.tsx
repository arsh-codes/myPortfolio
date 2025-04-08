import { Timeline } from "./Timeline";
import timelineData from "@/assets/data/timelineData";
import { useTheme } from "@/components/Navbar/ThemeProvider";

export default function ExperienceSection() {
  const { theme } = useTheme();

  return (
    // Wrapper div for the entire Experience section with vertical padding and anchor ID
    <div
      className="relative h-fit w-full py-16 md:py-20 lg:py-24"
      id="experience"
    >
      {/* Section container to center content and manage layout spacing */}
      <section className="mx-auto flex w-11/12 flex-col gap-0">
        {/* Background gradient elements for dark mode — decorative visuals */}
        {theme === "dark" && (
          <>
            <div className="absolute top-10 -left-40 z-0 size-72 rounded-full bg-cyan-400/10 blur-3xl filter"></div>
            <div className="absolute top-1/4 left-1/2 z-0 size-72 rounded-full bg-cyan-500/10 blur-3xl filter"></div>
            <div className="absolute -right-50 bottom-10 z-0 size-96 rounded-full bg-emerald-400/10 blur-3xl filter"></div>
          </>
        )}

        {/* Header section: includes section title, heading, description, and accent line */}
        <div className="relative mb-8 flex flex-col">
          {/* Section title with gradient accent bar */}
          <div className="flex items-center gap-2">
            <div className="from-emerald to-cyan h-1 w-16 rounded-full bg-gradient-to-r"></div>
            <h2 className="text-emerald text-sm font-semibold tracking-wider uppercase">
              Career Path
            </h2>
          </div>

          {/* Main heading for the experience section */}
          <h1 className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 bg-clip-text pb-2 text-3xl font-bold text-transparent lg:text-5xl dark:from-white dark:via-gray-200 dark:to-gray-300">
            How I Got Here
          </h1>

          {/* Subtitle/description providing context for the timeline */}
          <p className="text-muted-foreground max-w-2xl text-lg">
            A Timeline of My Professional and Academic Milestones
          </p>

          {/* Underline accent line below heading for visual emphasis */}
          <div className="from-emerald to-cyan absolute -bottom-4 left-0 h-0.5 w-24 rounded-full bg-gradient-to-r"></div>
        </div>

        {/* Timeline component rendering the chronological events */}
        <div>
          <Timeline data={timelineData} />
        </div>
      </section>
    </div>
  );
}
