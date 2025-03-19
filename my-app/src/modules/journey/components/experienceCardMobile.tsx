import { motion } from "motion/react";
import { SkillsType } from "shared/constants/enums";
import ExperienceType from "../../../shared/types/experienceType";
import ExperienceYearItemMobile from "./experienceYearItemMobile";

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
      className={`w-full h-full flex items-start justify-start text-base leading-5 ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      {experienceList.map((experience, index) => {
        const prevYear = index > 0 ? experienceList[index - 1].endDate : null;
        const currentYear = experience.endDate;
        const isLastItem = index === experienceList.length - 1;

        return (
          <div key={experience.id} className="flex flex-row pt-6">
            {/* Border */}
            <div
              className={`flex-1 border-r-2 border-double ${
                isThemeLight ? "border-black" : "border-white"
              }`}
            ></div>

            {/* Year */}
            <div className="flex flex-col flex-1 justify-between mr-4 mt-4 mb-4">
              {/* End Date */}
              {prevYear !== currentYear && (
                <ExperienceYearItemMobile
                  isThemeLight={isThemeLight}
                  date={currentYear}
                />
              )}

              {/* Start Date */}
              <ExperienceYearItemMobile
                isThemeLight={isThemeLight}
                date={experience.startDate}
              />
            </div>

            {/* Item */}
            <div
              className={`flex flex-col items-center justify-start min-h-full`}
            >
              <div
                key={experience.id}
                className={`${isLastItem ? "" : "pb-4"}`}
              >
                {/* Experience Title & Role */}
                <div className="flex flex-row items-center justify-start mb-4 leading-4">
                  <h1 className="text-xl font-bold border-r-2 border-gray-400 pr-2">
                    {experience.title}
                  </h1>
                  <h3 className="pl-2 text-base">{experience.role}</h3>
                </div>

                {/* Experience Details */}
                {experience.description.map((item, index) => (
                  <p key={index} className="mb-2">
                    {highlightText(item, Object.values(SkillsType))}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default ExperienceCardMobile;
