import ProjectType from "../types/projectType";

interface ProjectItemRowMobileProps {
  item: ProjectType;
  onProjectSelected: (id: number) => void;
}

const ProjectItemRowMobile = (props: ProjectItemRowMobileProps) => {
  const { item, onProjectSelected } = props;
  return (
    <div
      onClick={() => onProjectSelected(item.id)}
      className="flex flex-col text-start items-start justify-start w-full mb-4"
    >
      <p className="text-2xl">{item.title}</p>
      <div className="flex flex-row text-sm">
        <p>{item.timeline}</p>
        <p className="ml-1 mr-1">/</p>
        <p>{item.type}</p>
      </div>
    </div>
  );
};

export default ProjectItemRowMobile;
