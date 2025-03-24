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
  "java",
  "adobephotoshop",
  "vite",
  "mysql",
  "vercel",
  "postman",
  "visualstudiocode",
  "jira",
  "chakraui",
  "eslint",
  "prettier",
  "notion",
  "windows",
  "apple",
  "steam",
  "amd",
  "openai",
  "alexa",
  "framermotion",
  "axios",
  "reacthookform",
  "reacthottoast",
  "reacticons",
  "reactrouter",
  "materialtailwind",
  "torproject",
  "googlechrome",
  "firefoxbrowser",
  "npm",
  "yarn",
  "bun",
];

export function IconCloudData() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-10  ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
