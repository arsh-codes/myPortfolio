// Define the TimelineItem type
// type TimelineItem = {
//   title: string;
//   content: JSX.Element;
// };

// Timeline Data
const timelineData: any[] = [
  {
    title: "Jul 2024 – Present",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Web Developer at Imagine School of Animation and Multimedia
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Bathinda, Punjab, India
        </p>
        <div className="mt-4 space-y-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          <li>
            Designed and developed responsive websites for small businesses,
            ensuring seamless user experiences, optimal performance, and smooth
            deployment and maintenance.
          </li>
          <li>
            Conducted hands-on frontend development classes, mentoring students
            in building real-world projects and enhancing their practical coding
            skills.
          </li>
          <li>
            Assisted in optimizing website accessibility and performance,
            implementing best practices to improve load times, SEO, and user
            engagement.
          </li>
        </div>
      </div>
    ),
  },
  {
    title: "2023 – 2025",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Master of Computer Applications (MCA)
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Chandigarh University
        </p>
        <p className="mt-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          CGPA: 9 | Major: Full Stack Development
        </p>
        <div className="mt-4 space-y-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          <p>
            Gained a deep understanding of full stack development, learning the
            fundamentals of the MERN (MongoDB, Express, React, Node.js) stack.
            Worked on multiple projects in class, applying concepts of backend
            and frontend development to build dynamic web applications.
          </p>
          <p>
            Explored advanced concepts in web development, including API
            integration, authentication, and state management. Collaborated on
            team projects to develop scalable applications, enhancing
            problem-solving skills and real-world development experience.
          </p>
        </div>
      </div>
    ),
  },

  {
    title: "2022 – 2024",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Front-end Developer at Deloitte USI
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Hyderabad, Telangana, India
        </p>
        <div className="mt-4 space-y-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          <li>
            Developed a centralized web interface to streamline employee access
            to portals like HCM and SCM based on authority levels, eliminating
            the need to log into multiple platforms.
          </li>
          <li>
            Gained hands-on experience in frontend development while also
            developing an understanding of Oracle Fusion Analytics to retrieve
            data from the Oracle database and present it effectively through
            frontend applications.
          </li>
          <li>
            Collaborated with the Oracle Data Integrator team to extract data
            from Tableau and help create additional tables, going beyond the
            scope of my assigned work to support company needs.
          </li>
        </div>
      </div>
    ),
  },
  {
    title: "2019 – 2022",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Bachelor of Computer Applications (BCA)
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Punjabi University, Patiala
        </p>
        <p className="mt-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          CGPA: 8.1
        </p>
        <div className="mt-4 space-y-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          <p>
            Gained a strong foundation in programming, data structures, and
            algorithms, which laid the groundwork for my transition into web
            development.
          </p>
          <p>
            Developed multiple academic projects using Java, Python, and web
            technologies, focusing on problem-solving and efficient coding
            practices.
          </p>
          <p>
            Explored database management systems, networking, and software
            engineering principles, enhancing my understanding of scalable
            applications.
          </p>
          <h4 className="mt-4 font-semibold">
            Social Welfare Club (2020 – 2022)
          </h4>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Served as President of the Social Welfare Club at Baba Farid
              College, leading community-driven initiatives.
            </li>
            <li>
              Organized 4 blood donation drives, collecting over 1200 blood
              units from donors.
            </li>
            <li>
              Collaborated with local hospitals and NGOs to ensure blood
              donations benefited underprivileged patients at lower costs.
            </li>
            <li>
              Led awareness campaigns highlighting the importance of blood
              donation and its impact on society.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

// Export Timeline Data
export default timelineData;
