import { SkillsType } from "shared/constants/enums";
import ExperienceType from "./experienceType";

interface UserDataType {
    aboutDescription: string[];
    skills: SkillsType[];
    experienceList: ExperienceType[];
}

export default UserDataType;