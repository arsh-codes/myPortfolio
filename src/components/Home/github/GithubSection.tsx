import { FaCodeBranch, FaGithub, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import { AnimatedGradientText } from "@/components/Home/heroSection/AnimatedGradientText";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { Button } from "@/components/ui/Button";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Navbar/ThemeProvider";

// Define TypeScript interface for GitHub API user data
interface GitHubUserData {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  location: string | null;
  blog: string | null;
}

export default function GithubSection() {
  const { theme } = useTheme(); // Access current theme (light/dark)
  const [userData, setUserData] = useState<GitHubUserData | null>(null); // Store GitHub user data
  const [loading, setLoading] = useState(true); // Manage loading state
  const [error, setError] = useState<string | null>(null); // Manage error state

  const username = "arsh-codes"; // GitHub username to fetch data for

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Fetch GitHub user data using API
        const response = await fetch(
          `https://api.github.com/users/${username}`,
          {
            headers: {
              Authorization: import.meta.env.VITE_GITHUB_TOKEN
                ? `token ${import.meta.env.VITE_GITHUB_TOKEN}`
                : "",
            },
          },
        );

        // Handle non-OK responses
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        // Parse and set the response data
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        // Handle fetch errors
        console.error("Error fetching GitHub data:", err);
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
        setLoading(false);
      }
    };

    fetchGithubData(); // Trigger data fetch on mount
  }, [username]);

  // Framer Motion animation for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Framer Motion animation for staggered card entrance
  const cardItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 * i, duration: 0.4 },
    }),
  };

  // Render loading state UI
  if (loading) {
    return (
      <section
        className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
        id="github"
      >
        {/* Decorative gradient background for dark mode */}
        {theme === "dark" && (
          <>
            <div className="absolute -top-20 -left-40 size-96 rounded-full bg-cyan-600/6 blur-3xl filter"></div>
            <div className="absolute top-60 right-10 h-80 w-80 rounded-full bg-emerald-400/6 blur-3xl filter"></div>
          </>
        )}
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-lg">Loading GitHub data...</p>
        </div>
      </section>
    );
  }

  // Render error state UI
  if (error) {
    return (
      <section
        className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
        id="github"
      >
        {/* Decorative gradient background for dark mode */}
        {theme === "dark" && (
          <>
            <div className="absolute -top-20 -left-40 size-96 rounded-full bg-cyan-600/6 blur-3xl filter"></div>
            <div className="absolute top-60 right-10 h-80 w-80 rounded-full bg-emerald-400/6 blur-3xl filter"></div>
          </>
        )}
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-red-500">
              Something went wrong!
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
              Well, this is awkward... 🤖💥 Something went wrong while trying to
              fetch my GitHub data — and no, this isn’t how it’s supposed to go.
              If my contributions or projects aren’t showing up, it’s probably
              just a tech hiccup. Feel free to reach out — I’ll jump on it
              faster than a cat on a laser pointer! 🚀😄
            </p>

            <a href="#contact">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                Contact Me
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  // Render GitHub profile and contributions section
  return (
    <section
      className="bg-muted/60 dark:bg-muted/20 relative flex h-fit w-full items-center justify-center overflow-hidden py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32"
      id="github"
    >
      {/* Decorative gradient background for dark mode */}
      {theme === "dark" && (
        <>
          <div className="absolute -top-20 -left-40 size-96 rounded-full bg-cyan-600/6 blur-3xl filter"></div>
          <div className="absolute top-60 right-10 h-80 w-80 rounded-full bg-emerald-400/6 blur-3xl filter"></div>
        </>
      )}

      <div className="container mx-auto px-4">
        {/* Section heading with animated text and subtitle */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedGradientText
            speed={1}
            colorFrom="#06A3C9"
            colorTo="#10B981"
            className="mb-4 text-4xl font-bold lg:text-5xl"
          >
            Merging Ideas, One Commit at a Time
          </AnimatedGradientText>
          <p className="text-primary mx-auto max-w-2xl text-lg">
            Every green square is a moment of learning, sharing, and building
            <span className="ml-2 inline-block animate-pulse">🌱</span>
          </p>
        </motion.div>

        {/* GitHub profile card and contributions calendar */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BackgroundGradient containerClassName="w-full p-[1px] rounded-2xl overflow-hidden">
            <div className="rounded-2xl bg-white p-6 dark:bg-gray-900">
              {/* Grid layout: GitHub profile card (left) + contribution calendar (right) */}
              <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* GitHub profile card */}
                <motion.div
                  custom={0}
                  variants={cardItem}
                  className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/10 p-6 text-center lg:col-span-1"
                >
                  {/* Avatar image */}
                  <div className="mb-4 overflow-hidden rounded-full border-2 border-cyan-500/30 p-1 hover:border-cyan-500/50">
                    {userData?.avatar_url && (
                      <img
                        src={userData.avatar_url}
                        alt={`${username}'s avatar`}
                        className="h-24 w-24 rounded-full object-cover"
                      />
                    )}
                  </div>

                  {/* Name and username */}
                  <h3 className="mb-1 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                    <FaGithub className="mr-2 text-lg" />
                    {userData?.name || userData?.login || username}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 italic dark:text-gray-300">
                    @{userData?.login}
                  </p>

                  {/* Bio (if available) */}
                  {userData?.bio && (
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      "{userData.bio}"
                    </p>
                  )}

                  {/* Location and profile link */}
                  <div className="mt-auto flex w-full flex-row items-center justify-center gap-4">
                    {userData?.location && (
                      <a
                        href="https://maps.app.goo.gl/H7dEy8vnVmZWUD5A6"
                        className="flex items-center justify-center text-sm text-gray-600 hover:text-emerald-500 dark:text-gray-300 dark:hover:text-emerald-400"
                      >
                        <FaMapMarkerAlt className="mr-2 text-emerald-500" />
                        {userData.location}
                      </a>
                    )}
                    {userData?.blog && (
                      <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                        <FaLink className="mr-2 text-cyan-500" />
                        <a
                          href={"https://github.com/arsh-codes"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 dark:hover:text-cyan-400"
                        >
                          Profile
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* GitHub contributions calendar */}
                <motion.div
                  custom={1}
                  variants={cardItem}
                  className="col-span-1 flex flex-col rounded-xl bg-gray-50 p-6 lg:col-span-3 dark:bg-gray-800/50"
                >
                  <h4 className="mb-4 text-center text-lg font-medium text-gray-800 dark:text-white">
                    Contribution Activity
                  </h4>

                  {/* Responsive container for GitHubCalendar */}
                  <div
                    className="flex flex-1 items-center justify-center overflow-scroll py-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                  >
                    <div className="min-w-max px-4">
                      <GitHubCalendar
                        username={username}
                        colorScheme={theme === "dark" ? "dark" : "light"}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        hideColorLegend={false}
                        hideMonthLabels={false}
                        labels={{
                          totalCount:
                            "{{count}} contributions in the last year",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* CTA buttons: view profile and repositories */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="group flex items-center border-2 border-emerald-500 px-6 py-3 font-medium text-emerald-500 shadow-md transition-all duration-300 hover:scale-105 hover:bg-emerald-500 hover:text-white"
                  onClick={() =>
                    window.open(
                      userData?.html_url || `https://github.com/${username}`,
                      "_blank",
                    )
                  }
                >
                  <FaGithub className="mr-2" />
                  <span>View Profile</span>
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>

                <Button
                  variant="outline"
                  className="group flex items-center border-2 border-cyan-500 px-6 py-3 font-medium text-cyan-500 shadow-md transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-white"
                  onClick={() =>
                    window.open(
                      `https://github.com/${username}?tab=repositories`,
                      "_blank",
                    )
                  }
                >
                  <FaCodeBranch className="mr-2" />
                  <span>View Repositories</span>
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Button>
              </div>
            </div>
          </BackgroundGradient>
        </motion.div>
      </div>
    </section>
  );
}
