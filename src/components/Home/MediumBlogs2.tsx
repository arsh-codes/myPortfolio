import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { AnimatedGradientText } from "./heroSection/AnimatedGradientText";
import { Button } from "../ui/Button";
import { useTheme } from "@/components/ThemeProvider";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

export default function MediumArticles() {
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

  return (
    <div
      className="my-16 flex h-fit w-full items-center justify-center"
      id="blogs"
    >
      <div className="relative mx-auto flex h-fit w-11/12 flex-col gap-8 px-4 md:px-10 lg:flex-row lg:items-start lg:gap-4">
        {/* Header */}
        <div className="flex max-w-sm flex-col p-2">
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
          <p className="text-muted-foreground mt-4 text-balance">
            Sharing insights, tutorials, and experiences in web development and software engineering.
          </p>
          <a
            href="https://medium.com/@11322brar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:text-emerald-500 dark:text-cyan-400 dark:hover:text-emerald-400 mt-4 inline-flex items-center text-lg font-medium transition-colors duration-300"
          >
            View More on Medium
            <svg
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
            </svg>
          </a>

          {/* Navigation Buttons - Mobile Only */}
          <div className="mt-6 flex items-center gap-4 lg:hidden">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500/20 bg-background/80 backdrop-blur-sm hover:bg-cyan-500/10 dark:border-cyan-400/20 dark:hover:bg-cyan-400/10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="rounded-full border-emerald-500/20 bg-background/80 backdrop-blur-sm hover:bg-emerald-500/10 dark:border-emerald-400/20 dark:hover:bg-emerald-400/10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Articles Cards Container */}
        <div className="relative w-full lg:w-[calc(100%-20rem)]">
          {/* Navigation Buttons - Desktop Only */}
          <div className="absolute -left-12 top-1/2 hidden -translate-y-1/2 transform lg:block">
            <Button
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="rounded-full border-cyan-500/20 bg-background/80 backdrop-blur-sm hover:bg-cyan-500/10 dark:border-cyan-400/20 dark:hover:bg-cyan-400/10"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute -right-12 top-1/2 hidden -translate-y-1/2 transform lg:block">
            <Button
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="rounded-full border-emerald-500/20 bg-background/80 backdrop-blur-sm hover:bg-emerald-500/10 dark:border-emerald-400/20 dark:hover:bg-emerald-400/10"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Scrollable Cards Section */}
          <div 
            ref={scrollRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4"
          >
            {loading ? (
              // Loading Skeletons
              Array(3)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="relative flex h-[480px] w-[300px] min-w-[300px] snap-start flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="h-48 w-full animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-4 h-6 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-4 h-16 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                    <div className="mt-auto h-10 w-full animate-pulse rounded bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                ))
            ) : error ? (
              <div className="flex h-64 w-full items-center justify-center rounded-lg border border-red-200 bg-red-50 p-4 text-red-500 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400">
                <p>{error}</p>
              </div>
            ) : (
              mediumPosts.map((post, index) => (
                <div
                  key={index}
                  className="group relative flex h-[480px] w-[300px] min-w-[300px] snap-start flex-col rounded-lg border border-gray-200 bg-white p-4 shadow-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-cyan-400/50 dark:hover:shadow-lg dark:hover:shadow-cyan-400/5"
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-48 w-full overflow-hidden rounded-md">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 min-h-[4.5rem] line-clamp-3 text-lg font-semibold leading-tight text-gray-800 dark:text-white">
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
                        <svg
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
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}