const codeBlockData = `const profile = {
  name: "Arshdeep Singh",
  contact: {
    phone: "+91-7889045414",
    email: "work.arshdeep@outlook.com",
    linkedin: "linkedin.com/in/work-arsh",
    github: "github.com/arsh-codes",
  },
  title: "Full Stack Developer | Problem Solver | Open Source Contributor",
  skills: [
    "MongoDB","Express","React","Node.js","JavaScript","TypeScript","Redux","Tailwind CSS",
     "Figma","CSS3","HTML5","Linux","Git","Python","Java","Adobe Photoshop",
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  yearsOfExperience: 2.5,
  hireable: function () {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.skills.length >= 10 &&
      this.yearsOfExperience >= 2
    );
  },
};

console.log(profile.hireable()); //true`;

export default codeBlockData;
