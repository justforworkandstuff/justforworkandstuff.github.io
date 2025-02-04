import { SkillsType } from "shared/constants/enums";
import UserDataType from "./types/userDataType";

const useUserService = () => {
  // Note: Latest experience should always have a larger id than previous experiences
  const rawExperienceList = [
    {
      id: 1,
      title: "Agmo Studio",
      startDate: "2024",
      endDate: "2025",
      role: "Software Developer | Mobile & Full-Stack Development",
      location: "Petaling Jaya, Malaysia",
      description: [
        "•	Develop and maintain cross-platform (Flutter) and native mobile applications (Android/iOS).",
        "•	Work in an Agile/Scrum environment, managing sprints via Azure DevOps.",
        "•	Improve CI/CD pipelines in Azure Pipelines for efficient deployments.",
        "•	Contribute to frontend (React, TailwindCSS) and backend (ExpressJS) projects.",
        "•	Collaborate with designers using Figma to create intuitive UI/UX.",
        "•	Manage multiple projects, ensuring timely delivery and quality standards.",
      ],
    },
  ];

  const userData: UserDataType = {
    aboutDescription: [
      "Hey there! I'm a software developer based in Kuala Lumpur, Malaysia. I specialize in mobile development, particularly using Flutter and Android (Java/Kotlin/Jetpack Compose), but I'm also comfortable to work with other frameworks/tools to adapt to project needs. I also have experience in frontend & backend development.",
      "If you have any opportunities where I can contribute with my skill sets, let's connect and we can explore the possibilities!",
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
      SkillsType.RESTful,
      SkillsType.WebSocket,
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
