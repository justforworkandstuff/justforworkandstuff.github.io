import ProjectCard from "./components/projectCard";
import useProjectViewModel from "./useProjectViewModel";
import cursorSelectionSound from "../../shared/assets/audios/cursor.mp3";
import { useEffect, useRef } from "react";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeProjectListValue } from "./reducers/projectListSlice";
import { subscribeProjectDetailValue } from "./reducers/projectDetailSlice";
import ProjectDetailCard from "./components/projectDetailCard";
import PageTitle from "shared/components/pageTitle";
import { MenuType } from "shared/constants/enums";
import useAudio from "shared/hooks/useAudio";

const ProjectsPage = () => {
  const { getProjectsList, getProjectDetail } = useProjectViewModel();
  const { setupAudioEffect, playSoundEffect } = useAudio(cursorSelectionSound);
  const initialLoad = useRef(false);
  const projectList = useAppSelector(subscribeProjectListValue);
  const selectedProjectDetail = useAppSelector(subscribeProjectDetailValue);

  useEffect(() => {
    if (initialLoad.current === false) {
      initialLoad.current = true;
      setupAudioEffect();
      getProjectsList();
      getProjectDetail();
    }
  });

  const onProjectSelected = (id: number) => {
    playSoundEffect();
    getProjectDetail(id);
  };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 pl-4 pt-14 text-white flex flex-row h-full w-full">
      <PageTitle title={MenuType.Projects}/>

      <div className="flex flex-[2] flex-col ml-4 mr-8">
        {projectList.map((item, index) => (
          <ProjectCard
            item={item}
            selectedItemId={selectedProjectDetail?.id ?? 0}
            key={index}
            onClick={() => onProjectSelected(item.id)}
          />
        ))}
      </div>
      {selectedProjectDetail ? (
        <ProjectDetailCard item={selectedProjectDetail} />
      ) : null}
    </div>
  );
};

export default ProjectsPage;
