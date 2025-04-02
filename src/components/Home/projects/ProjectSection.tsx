import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/Button";
import studyNotionImage from "@/assets/media/studyNotionImage.png";

export default function ProjectSection() {
  return (
    <section
      className="relative flex h-fit w-full items-center justify-center lg:h-screen"
      id="projects"
    >
      <div className="justify relative mx-auto flex w-11/12 flex-col items-center gap-10">
        {/* Heading */}
        <div className="text-left md:text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
            Errors Faced, Challenges Embraced
          </h2>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            "Every project has a story—mostly about fixing what I broke!"
          </p>
        </div>
        {/* Project Cards */}
        <div className="flex w-10/12 flex-col gap-4">
          {projectsData.map((project, index) => (
            // card
            <div
              className="flex h-fit flex-col items-center gap-1 rounded-lg lg:flex-row"
              key={index}
            >
              {/* image section */}
              <section className="w-full overflow-hidden rounded-md lg:w-1/2">
                <img src={project.image} alt="" />
              </section>
              {/* details section card */}
              <section className="h-fit w-full lg:w-1/2">
                <div
                  key={index}
                  className="h-fit w-full rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition hover:shadow-xl dark:border-gray-600 dark:bg-gray-900"
                >
                  {/* Title */}
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {project.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        ✅ {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <strong>Frontend:</strong>{" "}
                    {project.technologies.frontend.join(", ")}
                    <br />
                    <strong>Backend:</strong>{" "}
                    {project.technologies.backend.join(", ")}
                    <br />
                    <strong>Tools:</strong>{" "}
                    {project.technologies.tools.join(", ")}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-4">
                    <Button asChild variant="outline">
                      <a
                        href={project.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="mr-2" /> GitHub
                      </a>
                    </Button>
                    <Button asChild>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="mr-2" /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const projectsData = [
  {
    name: "StudyNotion",
    description:
      "StudyNotion is a feature-rich EdTech platform that enhances learning accessibility while enabling instructors to create and share courses with a global audience.",
    features: [
      "Interactive dashboards for students and instructors",
      "Seamless course creation and management",
      "Secure authentication with JWT & OTP",
      "Integrated payments via Razorpay",
      "Cloud-based media storage with Cloudinary",
      "Rich-text course content with Markdown support",
    ],
    technologies: {
      frontend: ["ReactJS", "Redux", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
      tools: ["Cloudinary", "Razorpay", "Stripe", "Mongoose"],
      deployment: ["Vercel", "Render", "MongoDB Atlas"],
    },
    repository: "https://github.com/arsh-codes/studynotion",
    liveDemo: "https://studynotion.com",
    image: studyNotionImage,
  },
];
