import { SkillsCategories, SkillsType } from "shared/constants/enums";

interface ProjectType {
    id: number;
    title: string;
    timeline: string;
    type: SkillsCategories;
    stack: SkillsType[];
    description: string[];
}

export default ProjectType;