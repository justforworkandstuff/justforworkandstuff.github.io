import { ReactElement } from "react";
import SkillIconComponent from "./skillIconComponent";
import { SkillsType } from "constants/enums";

interface SkillRowComponentProps {
    categoryIcon: ReactElement;
    categoryItems: string[];
    type: SkillsType;
}

const SkillRowComponent = (props: SkillRowComponentProps) => {
    const { categoryIcon, categoryItems, type } = props;

    return (
        <div className="flex flex-row items-center justify-start">
            <div className="mr-2">{categoryIcon}</div>
            {categoryItems.map((item, index) => (
                <SkillIconComponent key={item} imgPath={item} type={type} index={index} />
            ))}
          </div>
    );   
}

export default SkillRowComponent;