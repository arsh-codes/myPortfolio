import { useEffect, useState } from "react";

import { Button } from "../ui/Button";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image: string;
}

export default function MediumArticles() {
  const [mediumPosts, setMediumPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    async function fetchMediumPosts() {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@11322brar`,
        );
        const data = await response.json();

        if (data.status === "ok") {
          const posts = data.items
            .slice(0, 5)
            .map((item: any, index: number) => ({
              title: item.title,
              link: item.link,
              pubDate: new Date(item.pubDate).toDateString(), // Format date
              description:
                item.description.replace(/<[^>]*>/g, "").slice(0, 120) + "...", // Remove HTML & limit text
              image: `/mediumThumbnails/${index + 1}.webp`, // Ensure correct path
            }));
          setMediumPosts(posts);
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error);
      }
    }

    fetchMediumPosts();
  }, []);

  return (
    <div
      className="my-10 flex h-fit w-full items-center justify-center"
      id="blogs"
    >
      <div className="mx-auto flex h-fit w-11/12 flex-row gap-2 px-10 lg:items-center">
        {/* Header */}
        <div className="flex max-w-fit flex-col p-2">
          <h2 className="text-2xl font-bold md:text-3xl">
            My Latest <br />
            Medium Articles
          </h2>
          <p className="text-muted-foreground mt-2 text-balance">
            Sharing insights, tutorials, and experiences in web development.
          </p>
          <a
            href="https://medium.com/@11322brar"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-lg font-medium text-blue-500 hover:underline dark:text-blue-400"
          >
            View More on Medium &rarr;
          </a>
        </div>

        {/* Scrollable Cards Section */}
        <div className="relative w-[90%] overflow-hidden">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-4">
            {mediumPosts.length > 0 ? (
              mediumPosts.map((post, index) => (
                <div
                  key={index}
                  className="relative flex w-[300px] min-w-[300px] snap-start flex-col rounded-lg border border-gray-300 bg-white p-4 shadow-md dark:border-gray-700 dark:bg-gray-800"
                >
                  {/* Image */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full rounded-md object-cover"
                  />

                  {/* Title */}
                  <h3 className="text-md mt-2 font-semibold text-gray-800 dark:text-white">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {post.pubDate}
                  </p>

                  {/* Description */}
                  <p className="mt-2 mb-8 text-sm text-gray-600 dark:text-gray-300">
                    {post.description}
                  </p>

                  {/* Read More Button */}
                  <Button
                    asChild
                    variant="outline"
                    className="absolute bottom-2 mt-2 px-4 py-2 text-sm"
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More →
                    </a>
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">
                Loading articles...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
