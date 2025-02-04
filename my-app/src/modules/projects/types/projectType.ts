import { SkillsCategories } from "shared/constants/enums";

interface ProjectType {
    id: number;
    title: string;
    timeline: string;
    type: SkillsCategories;
    description: string;
}

export default ProjectType;