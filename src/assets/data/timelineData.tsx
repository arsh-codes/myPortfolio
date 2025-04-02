"use client";

import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

import React from "react";

// Define proper interface matching the Timeline component requirements
interface TimelineEntry {
  title: string;
  date?: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  borderColor?: string;
}

// Timeline Data formatted for the Timeline component
const timelineData: TimelineEntry[] = [
  {
    title: "Full Stack Developer",
    date: "Jul 2024 – Present",
    icon: <FaBriefcase className="text-emerald h-6 w-6" />,
    borderColor: "border-emerald dark:border-[#4ade80]",
    content: (
      <div className="hover:shadow-emerald/10 rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 dark:bg-neutral-900/50 dark:hover:shadow-[#4ade80]/10">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Imagine School of Animation and Multimedia
        </h3>
        <p className="text-neutral text-sm font-medium dark:text-neutral-300">
          Bathinda, Punjab, India
        </p>
        <div className="mt-4 space-y-2 text-neutral-800 dark:text-neutral-200">
          <ul className="space-y-3 pl-5">
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                1
              </span>
              <span>
                Designed and developed{" "}
                <span className="font-semibold text-emerald">
                  responsive websites
                </span>{" "}
                for small businesses, ensuring seamless user experiences,
                optimal performance, and smooth deployment.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                2
              </span>
              <span>
                Conducted hands-on{" "}
                <span className="font-semibold text-emerald">
                  frontend development classes
                </span>
                , mentoring students in building real-world projects and
                enhancing practical coding skills.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                3
              </span>
              <span>
                Optimized website{" "}
                <span className="font-semibold text-emerald">
                  accessibility and performance
                </span>
                , implementing best practices to improve load times, SEO, and
                user engagement.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Master of Computer Applications",
    date: "2023 – 2025",
    icon: <FaGraduationCap className="text-cyan h-6 w-6" />,
    borderColor: "border-cyan dark:border-[#06b6d4]",
    content: (
      <div className="hover:shadow-cyan/10 rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 dark:bg-neutral-900/50 dark:hover:shadow-[#06b6d4]/10">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Chandigarh University
        </h3>
        <p className="mt-2 text-neutral-800 dark:text-neutral-200">
          <span className="text-cyan inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm font-medium dark:bg-[#06b6d4]/20">
            CGPA: 9
          </span>
          <span className="ml-2">Major: Full Stack Development</span>
        </p>
        <div className="mt-4 space-y-2 text-neutral-800 dark:text-neutral-200">
          <ul className="space-y-3 pl-5">
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                1
              </span>
              <span>
                Gained deep understanding of{" "}
                <span className="text-cyan font-semibold">MERN stack</span>{" "}
                (MongoDB, Express, React, Node.js) development.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                2
              </span>
              <span>
                Developed multiple{" "}
                <span className="text-cyan font-semibold">
                  dynamic web applications
                </span>{" "}
                through course projects, applying both backend and frontend
                principles.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                3
              </span>
              <span>
                Mastered{" "}
                <span className="text-cyan font-semibold">
                  advanced web concepts
                </span>{" "}
                including RESTful APIs, authentication systems, and state
                management.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                4
              </span>
              <span>
                Collaborated in{" "}
                <span className="text-cyan font-semibold">
                  cross-functional teams
                </span>{" "}
                to build scalable applications, enhancing problem-solving
                abilities.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Front-end Developer",
    date: "Dec 2022 – June 2024",
    icon: <FaCode className="text-emerald h-6 w-6" />,
    borderColor: "border-emerald dark:border-[#4ade80]",
    content: (
      <div className="hover:shadow-emerald/10 rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 dark:bg-neutral-900/50 dark:hover:shadow-[#4ade80]/10">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Deloitte USI
        </h3>
        <p className="text-neutral text-sm font-medium dark:text-neutral-300">
          Hyderabad, Telangana, India
        </p>
        <div className="mt-4 space-y-2 text-neutral-800 dark:text-neutral-200">
          <ul className="space-y-3 pl-5">
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                1
              </span>
              <span>
                Developed a{" "}
                <span className="font-semibold text-emerald">
                  centralized web interface
                </span>{" "}
                to streamline employee access to portals like HCM and SCM based
                on authority levels.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                2
              </span>
              <span>
                Gained hands-on experience in{" "}
                <span className="font-semibold text-emerald">
                  frontend development
                </span>{" "}
                while also developing understanding of Oracle Fusion Analytics
                to retrieve and present data effectively.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald inline-block h-5 w-5 flex-shrink-0 rounded-full bg-emerald-100 text-center text-sm leading-5 font-bold dark:bg-[#4ade80]/20">
                3
              </span>
              <span>
                Collaborated with{" "}
                <span className="font-semibold text-emerald">
                  Oracle Data Integrator team
                </span>{" "}
                to extract data from Tableau and help create additional tables
                to support company needs.
              </span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Bachelor of Computer Applications",
    date: "2019 – 2022",
    icon: <FaGraduationCap className="text-cyan h-6 w-6" />,
    borderColor: "border-cyan dark:border-[#06b6d4]",
    content: (
      <div className="hover:shadow-cyan/10 rounded-lg bg-white/5 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 dark:bg-neutral-900/50 dark:hover:shadow-[#06b6d4]/10">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Punjabi University, Patiala
        </h3>
        <p className="mt-2 text-neutral-800 dark:text-neutral-200">
          <span className="text-cyan inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-sm font-medium dark:bg-[#06b6d4]/20">
            CGPA: 8.1
          </span>
        </p>
        <div className="mt-4 space-y-2 text-neutral-800 dark:text-neutral-200">
          <ul className="space-y-3 pl-5">
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                1
              </span>
              <span>
                Gained a strong foundation in{" "}
                <span className="text-cyan font-semibold">
                  programming, data structures, and algorithms
                </span>
                , laying groundwork for web development.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                2
              </span>
              <span>
                Developed multiple academic projects using{" "}
                <span className="text-cyan font-semibold">
                  Java, Python, and web technologies
                </span>
                , focusing on problem-solving.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                3
              </span>
              <span>
                Explored{" "}
                <span className="text-cyan font-semibold">
                  database management, networking, and software engineering
                </span>{" "}
                principles for scalable applications.
              </span>
            </li>
          </ul>

          <div className="mt-6 rounded-lg bg-[#F6FFFF] p-4 dark:bg-[#06b6d4]/5">
            <div className="flex items-center gap-2">
              <FaHandsHelping className="text-cyan" />
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100">
                Social Welfare Club (2020 – 2022)
              </h4>
            </div>
            <ul className="mt-3 space-y-2 pl-5">
              <li className="flex items-start gap-2">
                <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                  •
                </span>
                <span>
                  Served as{" "}
                  <span className="text-cyan font-semibold">President</span> of
                  the Social Welfare Club at Baba Farid College, leading
                  community-driven initiatives.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-50 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                  •
                </span>
                <span>
                  Organized{" "}
                  <span className="text-cyan font-semibold">
                    4 blood donation drives
                  </span>
                  , collecting over 1200 blood units from donors.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                  •
                </span>
                <span>
                  Collaborated with{" "}
                  <span className="text-cyan font-semibold">
                    local hospitals and NGOs
                  </span>{" "}
                  to ensure blood donations benefited underprivileged patients.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan inline-block h-5 w-5 flex-shrink-0 rounded-full bg-cyan-100 text-center text-sm leading-5 font-bold dark:bg-[#06b6d4]/20">
                  •
                </span>
                <span>
                  Led{" "}
                  <span className="text-cyan font-semibold">
                    awareness campaigns
                  </span>{" "}
                  highlighting the importance of blood donation and its impact
                  on society.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

export default timelineData;
