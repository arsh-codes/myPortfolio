import { FaCodeBranch, FaGithub, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

import { AnimatedGradientText } from "@/components/Home/heroSection/AnimatedGradientText";
import { BackgroundGradient } from "@/components/Home/heroSection/BackgroundGradient";
import { Button } from "@/components/ui/Button";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function GithubSection() {
  const { theme } = useTheme();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const username = "arsh-codes";

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        // Simple fetch for user data without metrics
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

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching GitHub data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardItem = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.1 * i, duration: 0.4 },
    }),
  };

  if (loading) {
    return (
      <section className="relative w-full overflow-hidden py-20" id="github">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-lg">Loading GitHub data...</p>
        </div>
      </section>
    );
  }
  // make this error section better. dont log error only show the message i added with a contact button
  if (error) {
    return (
      <section
        className="relative hidden w-full overflow-hidden py-20"
        id="github"
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-red-500">
            "Oops! Looks like something went wrong while fetching my GitHub
            data. If you're not able to see my projects here, it means the data
            isn't loading properly. Feel free to drop me a message—I'd really
            appreciate it! I'll check it out and get it fixed as soon as
            possible. 🚀😊"
          </p>
          <a href="#contact">
            <button className="shadow-2xl hover:scale-105">
              <span>Contact me</span>
            </button>
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex h-screen w-full items-center justify-center overflow-hidden pt-20"
      id="github"
    >
      {/* Background gradient elements */}
      <div className="absolute top-20 -right-64 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl filter"></div>
      <div className="absolute bottom-20 -left-64 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl filter"></div>

      <div className="container mx-auto px-4">
        {/* Section header with animated title */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedGradientText
            speed={1}
            colorFrom="#06A3C9" // cyan
            colorTo="#10B981" // emerald
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Merging Ideas, One Commit at a Time
          </AnimatedGradientText>
          <p className="text-primary mx-auto max-w-2xl text-lg">
            Every green square is a moment of learning, sharing, and building
            <span className="ml-2 inline-block animate-pulse">🌱</span>
          </p>
        </motion.div>

        {/* GitHub Card with better layout */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BackgroundGradient containerClassName="w-full p-[1px] rounded-2xl overflow-hidden">
            <div className="rounded-2xl bg-white p-6 dark:bg-gray-900">
              {/* GitHub Content - Profile and Calendar in one row */}
              <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-4">
                {/* Profile Card - Kept as is */}
                <motion.div
                  custom={0}
                  variants={cardItem}
                  className="col-span-1 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/5 to-emerald-500/10 p-6 text-center lg:col-span-1"
                >
                  <div className="mb-4 overflow-hidden rounded-full border-2 border-cyan-500/30 hover:border-cyan-500/50 p-1">
                    {userData?.avatar_url && (
                      <img
                        src={userData.avatar_url}
                        alt={`${username}'s avatar`}
                        className="h-24 w-24 rounded-full object-cover"
                      />
                    )}
                  </div>
                  <h3 className="mb-1 flex items-center text-xl font-bold text-gray-800 dark:text-white">
                    <FaGithub className="mr-2 text-lg" />
                    {userData?.name || userData?.login || username}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 italic dark:text-gray-300">
                    @{userData?.login}
                  </p>

                  {userData?.bio && (
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                      "{userData.bio}"
                    </p>
                  )}

                  <div className="mt-auto flex w-full flex-col gap-2">
                    {userData?.location && (
                      <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="mr-2 text-emerald-500" />
                        {userData.location}
                      </div>
                    )}
                    {userData?.blog && (
                      <div className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300">
                        <FaLink className="mr-2 text-cyan-500" />
                        <a
                          href={
                            userData.blog.startsWith("http")
                              ? userData.blog
                              : `https://${userData.blog}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-cyan-500 dark:hover:text-cyan-400"
                        >
                          Website
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Contribution Activity Calendar - Now next to profile card */}
                <motion.div
                  custom={1}
                  variants={cardItem}
                  className="col-span-1 flex flex-col rounded-xl bg-gray-50 p-6 lg:col-span-3 dark:bg-gray-800/50"
                >
                  <h4 className="mb-4 text-center text-lg font-medium text-gray-800 dark:text-white">
                    Contribution Activity
                  </h4>
                  <div className="flex flex-1 items-center justify-center overflow-x-auto py-2">
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

              {/* Action Buttons */}
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
