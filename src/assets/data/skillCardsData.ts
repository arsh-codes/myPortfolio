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
  SiReacthookform,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiYarn,
} from "@icons-pack/react-simple-icons";

import { SiAdobephotoshop } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skillCardsData = [
  {
    headingLogo: SiReact,
    headingText: "Frontend Development",
    skills: [
      { logo: SiHtml5, name: "HTML5", color: "#E34F26" },
      { logo: SiCss3, name: "CSS3", color: "#1572B6" },
      { logo: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { logo: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { logo: SiReact, name: "React", color: "#61DAFB" },
      { logo: SiRedux, name: "Redux", color: "#764ABC" },
      { logo: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
      { logo: SiFigma, name: "Figma", color: "#F24E1E" },
      { logo: SiVercel, name: "Vercel", color: "text-foreground" },
      { logo: SiReactrouter, name: "React Router", color: "#61DAFB" },
    ],
  },
  {
    headingLogo: SiNodedotjs,
    headingText: "Backend Development",
    skills: [
      { logo: SiNodedotjs, name: "Node.js", color: "#8CC84B" },
      { logo: SiExpress, name: "Express", color: "text-foreground" },
      { logo: SiMongodb, name: "MongoDB", color: "#47A248" },
      { logo: SiPostman, name: "RESTful APIs", color: "#FF6C37" },
      { logo: SiMysql, name: "MySQL", color: "#4479A1" },
      { logo: SiAxios, name: "Axios", color: "#5A29E5" },
    ],
  },
  {
    headingLogo: SiGit,
    headingText: "Tools & Platforms",
    skills: [
      { logo: SiGit, name: "Git", color: "#F05032" },
      { logo: SiLinux, name: "Linux", color: "#FCC624" },
      { logo: SiNotion, name: "Notion", color: "text-foreground" },
      { logo: SiNpm, name: "npm", color: "#CB3837" },
      { logo: SiYarn, name: "Yarn", color: "#2C8EBB" },
      { logo: SiOpenai, name: "OpenAI", color: "text-foreground" },
      { logo: SiFirefoxbrowser, name: "Firefox", color: "#FF7139" },
    ],
  },
  {
    headingLogo: SiAdobephotoshop,
    headingText: "Design Tools",
    skills: [
      { logo: SiAdobephotoshop, name: "Adobe Photoshop", color: "#31A8FF" },
      { logo: SiFigma, name: "Figma", color: "#F24E1E" },
    ],
  },
  {
    headingLogo: SiVite,
    headingText: "Other Tools",
    skills: [
      { logo: SiVite, name: "Vite", color: "#646CFF" },
      { logo: SiFramer, name: "Framer", color: "#F24E1E" },
      { logo: FaJava, name: "Java", color: "text-foreground" },
      { logo: SiJira, name: "Jira", color: "#0052CC" },
      { logo: SiReacthookform, name: "React Hook Form", color: "#EAF2FF" },
    ],
  },
  {
    headingLogo: FaPython,
    headingText: "Languages & IDEs",
    skills: [
      { logo: FaPython, name: "Python", color: "#3776AB" },
      { logo: FaJava, name: "Java", color: "text-foreground" },
      { logo: VscVscode, name: "Visual Studio Code", color: "#0078D4" },
    ],
  },
];

export default skillCardsData;
