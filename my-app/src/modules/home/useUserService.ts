import { SkillsType } from "shared/constants/enums";
import UserDataType from "../../shared/types/userDataType";

const useUserService = () => {
  // Note: Latest experience should always have a larger id than previous experiences
  const rawExperienceList = [
    {
      id: 1,
      title: "Agmo Studio",
      startDate: ".2022",
      endDate: "",
      role: "Software Developer | Mobile & Full-Stack Development",
      location: "Petaling Jaya, Malaysia",
      description: [
        "•	Develop and maintain cross-platform and native mobile applications.",
        "•	Work in an Agile/Scrum environment, managing sprints via Azure DevOps.",
        "•	Improve CI/CD pipelines in Azure Pipelines for efficient deployments.",
        "•	Contribute to frontend (React, TailwindCSS) and backend (ExpressJS) projects.",
        "•	Collaborate with designers using Figma to create intuitive UI/UX.",
        "•	Manage multiple projects, ensuring timely delivery and quality standards.",
      ],
    },
    {
      id: 2,
      title: "dtcpay",
      startDate: ".2025",
      endDate: "present.",
      role: "Flutter Engineer | Mobile Development",
      location: "Kuala Lumpur, Malaysia",
      description: [
        "•	Build and maintain the Flutter-based fintech app with focus on performance and stability.",
        "•	Collaborate with product, design (Figma), and backend teams to deliver user-centric features.",
        "•	Ensure app quality through testing, debugging, and ongoing performance improvements.",
      ]
    }
  ];

  const userData: UserDataType = {
    aboutDescription: [
      "Based in Kuala Lumpur, Malaysia, I specialize in crafting seamless mobile experiences while remaining adaptable to different frameworks and technologies to meet project needs.",
      "Driven by a passion for intuitive design and efficient solutions, I strive to build apps that simplify lives and enhance everyday experiences.",
    ],
    skills: [
      SkillsType.Flutter,
      SkillsType.Android,
      SkillsType.iOS,

      SkillsType.React,
      SkillsType.TypeScript,
      SkillsType.TailwindCss,
      SkillsType.Redux,

      SkillsType.ExpressJs,
      SkillsType.NodeJs,
      SkillsType.Redis,

      SkillsType.Figma,
      SkillsType.AzureDevOps,
      SkillsType.Jira,
      SkillsType.Git,
      SkillsType.Firebase,
      SkillsType.Postman,
    ],
    experienceList: rawExperienceList
      .filter((exp) => exp.id)
      .sort((a, b) => b.id - a.id),
  };

  const fetchUserData = (): UserDataType => {
    return userData;
  };

  return {
    fetchUserData,
  };
};

export default useUserService;
