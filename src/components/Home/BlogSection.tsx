import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AnimatedGradientText } from "./heroSection/AnimatedGradientText";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { useTheme } from "@/components/Navbar/ThemeProvider";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

export default function BlogSection() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@11322brar`,
        );
        const data = await response.json();

        if (data.status === "ok") {
          const posts = data.items
            .slice(0, 6)
            .map((item: any, index: number) => ({
              title: item.title,
              link: item.link,
              pubDate: new Date(item.pubDate).toDateString(),
              description:
                item.description.replace(/<[^>]*>/g, "").slice(0, 120) + "...",
              image: `/mediumThumbnails/${index + 1}.webp`,
            }));
          setMediumPosts(posts);
        } else {
          setError("Failed to fetch articles");
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
        setError("Failed to load articles");
      } finally {
        setLoading(false);
      }
    }

    fetchMediumPosts();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative flex h-fit w-full items-center justify-center py-16 md:py-20 lg:py-24"
      id="blogs"
    >
      {theme === "dark" && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-10 left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl filter"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute -right-20 bottom-20 size-80 rounded-full bg-emerald-500/10 blur-3xl filter"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl filter"
          ></motion.div>
        </>
      )}

      <div className="relative mx-auto flex h-fit w-11/12 flex-col gap-8 px-4 md:px-10 lg:flex-row lg:items-start lg:gap-4">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          className="flex max-w-sm flex-col p-2"
        >
          <h2 className="text-primary font-manrope text-3xl font-bold md:text-4xl">
            My Latest <br />
            <AnimatedGradientText
              speed={1}
              colorFrom={theme === "dark" ? "#4ade80" : "#10B981"}
              colorTo={theme === "dark" ? "#06b6d4" : "#06A3C9"}
              className="font-bold"
            >
              Medium Articles
            </AnimatedGradientText>
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-muted-foreground mt-4 text-balance"
          >
            Sharing insights, tutorials, and experiences in web development and
            software engineering.
          </motion.p>
          <motion.a
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="https://medium.com/@11322brar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-lg font-medium text-cyan-500 transition-colors duration-300 hover:text-emerald-500 dark:text-cyan-400 dark:hover:text-emerald-400"
          >
            View More on Medium
            <motion.svg
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </motion.svg>
          </motion.a>

          {/* Navigation Buttons - Mobile Only */}
          <div className="mt-6 flex items-center gap-4 lg:hidden">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                onClick={scrollLeft}
                variant="outline"
                size="icon"
                className="bg-background/80 rounded-full border-cyan-500/20 backdrop-blur-sm hover:bg-cyan-500/10 dark:border-cyan-400/20 dark:hover:bg-cyan-400/10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                onClick={scrollRight}
                variant="outline"
                size="icon"
                className="bg-background/80 rounded-full border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 dark:border-emerald-400/20 dark:hover:bg-emerald-400/10"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Articles Cards Container */}
        <div className="relative w-full lg:w-[calc(100%-20rem)]">
          {/* Navigation Buttons - Desktop Only */}
          <div className="absolute top-1/2 -left-12 hidden -translate-y-1/2 transform lg:block">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                onClick={scrollLeft}
                variant="outline"
                size="icon"
                className="bg-background/80 rounded-full border-cyan-500/20 backdrop-blur-sm hover:bg-cyan-500/10 dark:border-cyan-400/20 dark:hover:bg-cyan-400/10"
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          <div className="absolute top-1/2 -right-12 hidden -translate-y-1/2 transform lg:block">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
            >
              <Button
                onClick={scrollRight}
                variant="outline"
                size="icon"
                className="bg-background/80 rounded-full border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/10 dark:border-emerald-400/20 dark:hover:bg-emerald-400/10"
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>

          {/* Scrollable Cards Section */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {loading ? (
              // Loading Skeletons
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <motion.div
                    key={`skeleton-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    className="relative flex h-[480px] w-[300px] min-w-[300px] snap-start flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="h-48 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-4 h-16 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-auto h-10 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                  </motion.div>
                ))
            ) : error ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex h-64 w-full items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-500 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400"
              >
                <p>{error}</p>
              </motion.div>
            ) : (
              mediumPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for easeOutExpo feel
                  }}
                  className="group relative flex h-[480px] w-[300px] min-w-[300px] snap-start flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-400/50 dark:hover:shadow-lg dark:hover:shadow-cyan-400/5"
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 line-clamp-3 min-h-[4.5rem] text-lg leading-tight font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {post.pubDate}
                  </p>

                  {/* Description */}
                  <p className="mt-3 line-clamp-4 text-sm text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <div className="mt-auto pt-4">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-white transition-all duration-300 hover:from-emerald-500 hover:to-cyan-500 hover:shadow-md dark:from-cyan-600 dark:to-emerald-600 dark:hover:from-emerald-600 dark:hover:to-cyan-600"
                      >
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-center"
                        >
                          Read Article
                          <motion.svg
                            whileHover={{ x: 3 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                            className="ml-2 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </motion.svg>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
