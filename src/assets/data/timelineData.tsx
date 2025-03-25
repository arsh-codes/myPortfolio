// Define the TimelineItem type
type TimelineItem = {
  title: string;
  content: JSX.Element;
};

// Timeline Data
const timelineData: TimelineItem[] = [
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
          <p>
            Built websites for small businesses, overseeing deployment and
            maintenance to ensure optimal performance.
          </p>
          <p>
            Taught frontend practical classes, helping students develop their
            skills and gain hands-on experience in web development.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2023 – 2025",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Master of Computer Applications
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Chandigarh University
        </p>
        <p className="mt-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Percentage: 92%
        </p>
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
          <p>
            Developed a centralized web interface to streamline employee access
            to portals like HCM and SCM based on authority levels, eliminating
            the need to log into multiple platforms.
          </p>
          <p>
            Collaborated with the Oracle Data Integrator team to extract data
            from Tableau and help create additional tables, going beyond the
            scope of my assigned work to support company needs.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          Bachelor of Computer Applications
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Punjabi University, Patiala
        </p>
        <p className="mt-2 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Percentage: 76.28%
        </p>
      </div>
    ),
  },
];

// Export Timeline Data
export default timelineData;
