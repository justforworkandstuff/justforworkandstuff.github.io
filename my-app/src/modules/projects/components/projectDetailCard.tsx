import { motion } from "motion/react";
import SkillIcon from "shared/components/skillIcon";
import { SkillsType } from "shared/constants/enums";
import ProjectType from "../types/projectType";

interface ProjectDetailCardProps {
  item: ProjectType;
  isThemeLight: boolean;
}

const ProjectDetailCard = (props: ProjectDetailCardProps) => {
  const { item, isThemeLight } = props;

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 150 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full h-full flex flex-col text-start items-start md:items-end justify-start md:justify-center leading-6 md:leading-4 ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      <div className="flex flex-col items-start justify-start max-w-lg">
        {/* Project Title & Stack */}
        <div className="min-w-full flex flex-row items-center md:mb-4">
          <p className="hidden md:block text-2xl font-semibold">{item.title}</p>
          <p className="block md:hidden text-2xl font-semibold pr-2">
            {item.title}
          </p>
          <p className="hidden md:block ml-2 mr-2 text-lg">|</p>
          <p className="hidden md:block text-base">{item.timeline}</p>

          <div className="flex-1 flex flex-row justify-end space-x-2">
            {item.stack.map((stack) => {
              return <SkillIcon key={stack} type={stack} />;
            })}
          </div>
        </div>

        {/* Date (Mobile) */}
        <p className="block md:hidden text-base mb-4">{item.timeline}</p>

        {/* Project Details */}
        {item.description.map((item, index) => {
          return (
            <p
              key={item}
              className={`${index === 0 || index === 1 ? "mb-4" : ""}`}
            >
              {highlightText(item, Object.values(SkillsType))}
            </p>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectDetailCard;
