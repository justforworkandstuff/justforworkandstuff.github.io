import { motion } from "motion/react";
import ProjectType from "../types/projectType";
import ProjectItemRow from "./projectItemRow";
import ProjectItemRowMobile from "./projectItemRowMobile";

interface ProjectItemListingProps {
  projectList: ProjectType[];
  isThemeLight: boolean;
  onProjectSelected: (id: number) => void;
}

const ProjectItemListing = (props: ProjectItemListingProps) => {
  const { projectList, isThemeLight, onProjectSelected } = props;
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      className={`w-full h-full flex flex-col items-start md:items-end justify-start text-right text-lg md:text-sm leading-5 md:leading-4 md:max-h-[70vh] overflow-y-auto scrollbar-hide ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      <div className="hidden md:block">
        {projectList.map((item, index) => (
          <ProjectItemRow
            key={index}
            item={item}
            onProjectSelected={() => onProjectSelected(item.id)}
          />
        ))}
      </div>

      <div className="block md:hidden">
        {projectList.map((item, index) => (
          <ProjectItemRowMobile
            key={index}
            item={item}
            onProjectSelected={() => onProjectSelected(item.id)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectItemListing;
