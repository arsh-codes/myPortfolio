const codeBlockData = `const profile = {
  name: "Arshdeep Singh",
  title: "Full Stack Developer | Problem Solver | Open Source Contributor",
  skills: [
    "MongoDB", "Express", "React", "Node.js", "JavaScript",
    "TypeScript", "Redux", "Tailwind CSS", "Figma", "CSS3",
    "HTML5", "Linux", "Git", "Python", "Java", "Adobe Photoshop"
  ],
  problemSolver: true,
  openToRelocation: true,
  yearsOfExperience: 2.5,
  strongCommunication: true,
  hireable: () => {
    return (
      profile.openToRelocation &&
      profile.skills.length >= 10 &&
      profile.yearsOfExperience >= 2 &&
      profile.strongCommunication &&
      profile.problemSolver
    );
  },
};
console.log(profile.hireable()); // true
`;

export default codeBlockData;
