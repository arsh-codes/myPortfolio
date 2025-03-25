import { FaJava, FaPython } from "react-icons/fa";
import {
  SiAxios,
  SiCss3,
  SiExpress,
  SiFigma,
  SiFirefoxbrowser,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNotion,
  SiNpm,
  SiOpenai,
  SiPostman,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiYarn,
} from "@icons-pack/react-simple-icons";

import { GiPlasticDuck } from "react-icons/gi";
import { PiCoffeeFill } from "react-icons/pi";
import { SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCardsData = [
  {
    headingLogo: SiReact,
    headingText: "Frontend Development",
    headingLogoColor: "#61DAFB",
    skills: [
      {
        logo: SiHtml5,
        name: "HTML5",
        color: "#E34F26",
        tooltip: "Structures web pages.",
      },
      {
        logo: SiCss3,
        name: "CSS3",
        color: "#1572B6",
        tooltip: "Styles web pages.",
      },
      {
        logo: SiJavascript,
        name: "JavaScript",
        color: "#F7DF1E",
        tooltip: "Adds interactivity.",
      },
      {
        logo: SiTypescript,
        name: "TypeScript",
        color: "#3178C6",
        tooltip: "JavaScript with types.",
      },
      {
        logo: SiReact,
        name: "React",
        color: "#61DAFB",
        tooltip: "Builds UI components.",
      },
      {
        logo: SiRedux,
        name: "Redux",
        color: "#764ABC",
        tooltip: "Manages app state.",
      },
      {
        logo: SiTailwindcss,
        name: "Tailwind CSS",
        color: "#38B2AC",
        tooltip: "Utility-first styling.",
      },
      {
        logo: SiFigma,
        name: "Figma",
        color: "#F24E1E",
        tooltip: "Designs UI/UX.",
      },

      {
        logo: SiReactrouter,
        name: "React Router",
        color: "#61DAFB",
        tooltip: "Handles navigation.",
      },
    ],
  },
  {
    headingLogo: SiNodedotjs,
    headingText: "Backend Development",
    headingLogoColor: "#8CC84B",
    skills: [
      {
        logo: SiNodedotjs,
        name: "Node.js",
        color: "#8CC84B",
        tooltip: "Runs JavaScript backend.",
      },
      {
        logo: SiExpress,
        name: "Express",
        color: "text-foreground",
        tooltip: "Simplifies backend APIs.",
      },
      {
        logo: SiMongodb,
        name: "MongoDB",
        color: "#47A248",
        tooltip: "NoSQL database.",
      },
      {
        logo: SiPostman,
        name: "RESTful APIs",
        color: "#FF6C37",
        tooltip: "Tests APIs easily.",
      },
      {
        logo: SiMysql,
        name: "MySQL",
        color: "#4479A1",
        tooltip: "Relational database.",
      },
      {
        logo: SiAxios,
        name: "Axios",
        color: "#5A29E5",
        tooltip: "Handles HTTP requests.",
      },
      {
        logo: FaPython,
        name: "Python",
        color: "#3776AB",
        tooltip: "Versatile programming language.",
      },
      {
        logo: FaJava,
        name: "Java",
        color: "text-foreground",
        tooltip: "Robust object-oriented language.",
      },
    ],
  },
  {
    headingLogo: SiGit,
    headingText: "Tools & Platforms",
    headingLogoColor: "#F05032",
    skills: [
      {
        logo: SiGit,
        name: "Git",
        color: "#F05032",
        tooltip: "Version control system.",
      },
      {
        logo: SiLinux,
        name: "Linux",
        color: "#FCC624",
        tooltip: "Powerful OS for devs.",
      },
      {
        logo: SiNpm,
        name: "npm",
        color: "#CB3837",
        tooltip: "JavaScript package manager.",
      },
      {
        logo: SiYarn,
        name: "Yarn",
        color: "#2C8EBB",
        tooltip: "Fast package manager.",
      },
      {
        logo: SiVercel,
        name: "Vercel",
        color: "text-foreground",
        tooltip: "Deploys web apps.",
      },
      {
        logo: VscVscode,
        name: "VS Code",
        color: "#0078D4",
        tooltip: "Popular code editor.",
      },
      {
        logo: SiAdobephotoshop,
        name: "Adobe Photoshop",
        color: "#31A8FF",
        tooltip: "Advanced image editing.",
      },
    ],
  },
  {
    headingLogo: SiVite,
    headingText: "Development & Productivity",
    headingLogoColor: "#646CFF",
    skills: [
      {
        logo: SiNotion,
        name: "Notion",
        color: "text-foreground",
        tooltip: "Organizes notes & tasks.",
      },
      {
        logo: SiOpenai,
        name: "OpenAI",
        color: "text-foreground",
        tooltip: "AI-powered tools.",
      },
      {
        logo: SiJira,
        name: "Jira",
        color: "#0052CC",
        tooltip: "Tracks software projects.",
      },
      {
        logo: SiVite,
        name: "Vite",
        color: "#646CFF",
        tooltip: "Fast frontend bundler.",
      },
      {
        logo: SiFramer,
        name: "Framer",
        color: "#F24E1E",
        tooltip: "Prototyping UI animations.",
      },
      {
        logo: SiFirefoxbrowser,
        name: "Firefox",
        color: "#FF7139",
        tooltip: "Privacy-focused browser.",
      },
      {
        logo: PiCoffeeFill,
        name: "Coffee",
        color: "#B5651D",
        tooltip: "Debugging fuel: highly recommended.",
      },
      {
        logo: GiPlasticDuck,
        name: "Duck Debugging",
        color: "#FFD700",
        tooltip: "Senior Debugging Consultant (Unpaid).",
      },
    ],
  },
];

export default skillCardsData;
