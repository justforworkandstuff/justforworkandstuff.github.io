import { SkillsType } from "shared/constants/enums";
import ExperienceType from "../types/experienceType";

interface ExperienceCardComponentProps {
  experience: ExperienceType;
  isLastItem: boolean;
}

const ExperienceCardComponent = (props: ExperienceCardComponentProps) => {
  const { experience, isLastItem } = props;

  const highlightText = (text: string, keywords: string[]) => {
    const regex = new RegExp(`(${keywords.join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      keywords.includes(part) ? (
        <strong key={index} className="font-semibold">
          {part}
        </strong>
      ) : (
        part
      )
    );
  };

  return (
    <div key={experience.id} className={`${isLastItem ? '' :'pb-4'}`}>
      <h1 className="mb-2 text-xl font-bold underline">{experience.title}</h1>

      <h3 className="mb-4 text-base leading-none underline">{experience.role}</h3>

      {experience.description.map((item, index) => (
        <p key={index} className="mb-2">
          {highlightText(item, Object.values(SkillsType))}
        </p>
      ))}
    </div>
  );
};

export default ExperienceCardComponent;
