import { motion } from "motion/react";
import { SkillsType } from "shared/constants/enums";
import ExperienceType from "../../../shared/types/experienceType";

interface ExperienceCardMobileProps {
  isThemeLight: boolean;
  experienceList: ExperienceType[];
}

const ExperienceCardMobile = (props: ExperienceCardMobileProps) => {
  const { isThemeLight, experienceList } = props;

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
      className={`relative w-full h-full text-base leading-5 ${isThemeLight ? "text-black" : "text-gray-300"
        }`}
    >
      {/* Vertical timeline line */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-px ${isThemeLight ? "bg-black" : "bg-white"
          }`}
      />

      {experienceList.map((experience) => {
        return (
          <div
            key={experience.id}
            className="flex flex-row items-stretch mb-4 mt-4 pl-6 relative"
          >
            {/* Date Column (endDate on top, startDate on bottom) */}
            <div className="absolute left-2 top-0 h-full flex flex-col justify-between items-center">
              <span
                className="text-xs font-bold"
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                {experience.endDate}
              </span>
              <span
                className="text-xs"
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                {experience.startDate}
              </span>
            </div>

            {/* Experience Content */}
            <div className="flex flex-col flex-1 ml-8">
              {/* Title & Role */}
              <div className="flex flex-row items-center mb-2">
                <h1 className="text-lg font-bold border-r-2 border-gray-400 pr-2">
                  {experience.title}
                </h1>
                <h3 className="pl-2 text-sm">{experience.role}</h3>
              </div>

              {/* Description */}
              {experience.description.map((item, i) => (
                <p key={i} className="mb-2">
                  {highlightText(item, Object.values(SkillsType))}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCardMobile;
