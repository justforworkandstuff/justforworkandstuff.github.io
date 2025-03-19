import { motion } from "motion/react";
import SkillIcon from "shared/components/skillIcon";
import { SkillsType } from "shared/constants/enums";
import ProjectType from "../types/projectType";

interface ProjectDetailCardMobileProps {
  item: ProjectType;
  isThemeLight: boolean;
}

const ProjectDetailCardMobile = (props: ProjectDetailCardMobileProps) => {
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      className={`w-full h-full flex flex-col text-start items-start justify-start leading-5 ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      <div className="flex flex-col items-start justify-start max-w-lg">
        {/* Project Title & Stack */}
        <div className="min-w-full flex flex-row items-center">
          <p className="text-2xl font-semibold pr-2">{item.title}</p>

          <div className="flex-1 flex flex-row justify-end space-x-2">
            {item.stack.map((stack) => {
              return <SkillIcon key={stack} type={stack} />;
            })}
          </div>
        </div>

        {/* Date (Mobile) */}
        <p className="text-base mb-4">{item.timeline}</p>

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

export default ProjectDetailCardMobile;
