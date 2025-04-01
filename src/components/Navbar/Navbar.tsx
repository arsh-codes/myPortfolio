import {
  IconBook,
  IconBrandGithub,
  IconBriefcase,
  IconCode,
  IconDeviceDesktop,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

import { FloatingDock } from "../ui/FloatingDock";

const sections = [
  { id: "hero", title: "Home", icon: <IconDeviceDesktop />, href: "#hero" },
  { id: "about", title: "About Me", icon: <IconUser />, href: "#about" },
  {
    id: "experience",
    title: "Experience",
    icon: <IconBriefcase />,
    href: "#experience",
  },
  { id: "skills", title: "Skills", icon: <IconCode />, href: "#skills" },
  {
    id: "projects",
    title: "Projects",
    icon: <IconDeviceDesktop />,
    href: "#projects",
  },
  { id: "github", title: "GitHub", icon: <IconBrandGithub />, href: "#github" },
  { id: "blogs", title: "Medium Blogs", icon: <IconBook />, href: "#blogs" },
  { id: "contact", title: "Contact", icon: <IconMessage />, href: "#contact" },
];

export default function Navbar() {
  return (
    <div className="relative mt-1 border-b-2 p-3 shadow-md">
      <div className="mx-auto flex w-10/12 items-center">
        {/* Left Side: Logo and Text */}
        <div className="flex items-center">
          <div className="size-fit rounded-lg bg-transparent p-2 font-mono">
            <span className="flex items-center bg-gradient-to-r from-[#4ade80] to-[#06b6d4] bg-clip-text text-2xl font-bold tracking-tighter text-transparent">
              {"</>"}
            </span>
          </div>
          <span className="ubuntu-regular text-lg font-semibold">
            arsh-codes
          </span>
        </div>

        {/* Navigation dock (centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <FloatingDock items={sections} />
        </div>
      </div>
    </div>
  );
}
