import ProjectType from "../types/projectType";

interface ProjectDetailCardProps {
  item: ProjectType;
}

const ProjectDetailCard = (props: ProjectDetailCardProps) => {
  const { item } = props;

  return (
    <div className="flex-[2] flex flex-col justify-start items-start text-white shadow-md p-4 mr-4">
      <p className="text-2xl font-semibold">{item.title}</p>
      <p className="text-base mt-2 mb-4">{item.timeline}</p>
      <p className="text-lg text-justify">{item.description}</p>
    </div>
  );
};

export default ProjectDetailCard;
