import ProjectType from "../types/projectType";
import ProjectCardIcon from "./projectCardIcon";

interface ProjectCardProps {
  item: ProjectType;
  selectedItemId: number;
  onClick: () => void;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { item, selectedItemId, onClick } = props;
  const isSelected = item.id === selectedItemId;

  const unselectedProjectCard = () => {
    return (
      <div className="w-full p-4 shadow-md hover:opacity-70" onClick={onClick}>
        <div className="flex justify-between items-center">
          <p
            className={`text-lg ${
              isSelected ? "text-transparent" : "text-blue-300"
            }`}
          >
            {item.timeline}
          </p>

          {isSelected ? null : <ProjectCardIcon type={item.type} />}
        </div>

        <h1
          className={`text-2xl font-semibold mt-2 ${
            isSelected ? "text-transparent" : "text-white"
          }`}
        >
          {item.title}
        </h1>
      </div>
    );
  };

  const selectedProjectCard = () => {
    return (
      <div className="w-full hover:opacity-70 p-1">
        <div className="flex justify-between items-center text-white">
          <p className={`text-lg`}>{item.timeline}</p>

          <ProjectCardIcon type={item.type} />
        </div>

        <h1 className={`text-2xl font-semibold mt-2`}>{item.title}</h1>
      </div>
    );
  };

  return (
    <div className="relative">
      {isSelected && (
        <div className="absolute -left-[4px] h-full w-full px-4 py-2 text-blue-200 border-l-2 border-blue-300 bg-gradient-to-r from-blue-600 to-blue-400">
          {selectedProjectCard()}
        </div>
      )}
      {unselectedProjectCard()}
    </div>
  );
};

export default ProjectCard;
