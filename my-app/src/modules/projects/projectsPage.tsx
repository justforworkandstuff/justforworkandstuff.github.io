import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CustomDrawer from "shared/components/customDrawer";
import DrawerMenuContent from "shared/components/drawerMenuContent";
import MenuSection from "shared/components/menuSection";
import ThemeSection from "shared/components/themeSection";
import { MenuType, RouterPath, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";
import ProjectItemListing from "./components/projectItemListing";
import { subscribeProjectListValue } from "./reducers/projectListSlice";
import useProjectViewModel from "./useProjectViewModel";

const ProjectsPage = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width:768px)");
  const { getProjectsList } = useProjectViewModel();
  const initialLoad = useRef(false);
  const navigate = useNavigate();
  const projectList = useAppSelector(subscribeProjectListValue);
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;

  useEffect(() => {
    if (initialLoad.current === false) {
      initialLoad.current = true;
      getProjectsList();
    }
  });

  const onProjectSelected = (id: number) => {
    navigate(`${RouterPath.Projects}/${id}`);
  };

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div
      className={`min-h-screen w-screen flex flex-col items-center justify-center ${
        isThemeLight ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <Outlet /> 
      <ThemeSection />

      {showDrawer && !isMediumScreen && (
        <CustomDrawer
          paperProps={{
            style: {
              backgroundColor: `${isThemeLight ? "white" : "black"}`,
              width: "50%",
            },
          }}
          showDrawer={showDrawer}
          onCloseDrawerCallback={toggleDrawer}
          contentItem={
            <DrawerMenuContent
              newMenuType={MenuType.Projects}
              isThemeLight={isThemeLight}
            />
          }
        />
      )}

      <div
        className={`w-[95%] h-[90vh] border relative xl:p-8 p-10 flex md:flex-row flex-col overflow-y-auto scrollbar-hide ${
          isThemeLight ? "border-black" : "border-gray-500"
        }`}
      >
        <div className="md:flex-[1]">
          <MenuSection
            defaultMenuType={MenuType.Projects}
            onDrawerMenuClicked={toggleDrawer}
          />
        </div>

        {/* Project List */}
        <div className={`flex-1 md:flex-[4] mt-6`}>
            <ProjectItemListing
              projectList={projectList}
              isThemeLight={isThemeLight}
              onProjectSelected={onProjectSelected}
            />
          </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
