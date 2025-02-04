import ProjectType from "../types/projectType";

interface ProjectItemRowProps {
  item: ProjectType;
  onProjectSelected: (id: number) => void;
}

const ProjectItemRow = (props: ProjectItemRowProps) => {
  const { item, onProjectSelected } = props;
  return (
    <div
      onClick={() => onProjectSelected(item.id)}
      className="flex flex-row text-right items-end justify-end w-full space-y-8 hover:opacity-50"
    >
      <p>{item.timeline}</p>
      <p className="ml-1 mr-1">/</p>
      <p className="mr-6">{item.type}</p>
      <p className="text-4xl">{item.title}</p>
    </div>
  );
};

export default ProjectItemRow;
