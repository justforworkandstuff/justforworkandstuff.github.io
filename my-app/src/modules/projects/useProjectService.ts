import { SkillsCategories } from "shared/constants/enums";
import ProjectType from "./types/projectType";

const useProjectService = () => {
  const localDataSource = [
    {
      id: 1,
      title: "Event Ticket Management System",
      timeline: "Feb 2025",
      type: SkillsCategories.Mobile,
      description:
        "Serving one of the biggest ticketing platform in Malaysia, developed an app to cater to its business operations.",
    },
    {
      id: 2,
      title: "Government e-wallet payment system",
      timeline: "Dec 2024",
      type: SkillsCategories.Mobile,
      description:
        "Serving the state government policy to introduce and support the latest and emerging trends, where the digital helps to easen up the lives of the people.",
    },
  ];

  const fetchProjectsList = (): ProjectType[] => {
    return localDataSource;
  };

  const fetchProjectDetail = (id: number): ProjectType => {
    const projectDetail = localDataSource.find((item) => item.id === id) as ProjectType;
    if (!projectDetail) throw new Error(`Project with id ${id} not found`);
    return projectDetail;
  }

  return {
    fetchProjectsList,
    fetchProjectDetail,
  };
};

export default useProjectService;
