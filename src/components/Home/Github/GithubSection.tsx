import GitHubCalendar from "react-github-calendar";
import { useTheme } from "@/components/ThemeProvider";

export default function GithubSection() {
  const { theme } = useTheme();
  return (
    <div className="py-10 relative flex h-fit w-full items-center justify-center ">
      <div className="relative mx-auto flex h-full w-11/12 flex-col gap-10 lg:items-center">
        <div className="group mx-auto flex w-full flex-col items-center rounded-xl border border-[rgba(255,255,255,0.10)] bg-gray-100 p-8 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] lg:w-fit dark:bg-[rgba(40,40,40,0.70)]">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl dark:text-white">
            Merging Ideas, One Commit at a Time
          </h2>
          <p className="mt-2 mb-6 text-gray-600 dark:text-gray-400">
            Every green square is a moment of learning, sharing, and building.
          </p>

          <GitHubCalendar
            username="arsh-codes"
            colorScheme={theme == "dark" ? "dark" : "light"}
          />
        </div>
      </div>
    </div>
  );
}
