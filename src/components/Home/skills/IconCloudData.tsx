import { IconCloud } from "./IconCloud";

const slugs = [
  "mongodb",
  "express",
  "react",
  "nodedotjs",
  "javascript",
  "typescript",
  "redux",
  "tailwindcss",
  "figma",
  "css3",
  "html5",
  "linux",
  "git",
  "python",
  "vite",
  "mysql",
  "vercel",
  "postman",
  "jira",
  "chakraui",
  "eslint",
  "prettier",
  "notion",
  "apple",
  "steam",
  "amd",
  "openai",
  "amazonalexa",
  "axios",
  "reacthookform",
  "reactrouter",
  "torproject",
  "googlechrome",
  "firefoxbrowser",
  "npm",
  "yarn",
  "bun",
];

export function IconCloudData() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
