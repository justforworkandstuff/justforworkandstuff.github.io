import { useMediaQuery } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CustomDrawer from "shared/components/customDrawer";
import DrawerMenuContent from "shared/components/drawerMenuContent";
import MenuSection from "shared/components/menuSection";
import ThemeSection from "shared/components/themeSection";
import { MenuType, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";
import ProjectDetailCard from "./components/projectDetailCard";
import ProjectDetailCardMobile from "./components/projectDetailCardMobile";
import { subscribeProjectDetailValue } from "./reducers/projectDetailSlice";
import useProjectViewModel from "./useProjectViewModel";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [showDrawer, setShowDrawer] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width:768px)");
  const { getProjectDetail } = useProjectViewModel();
  const selectedProjectDetail = useAppSelector(subscribeProjectDetailValue);
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;
  const initialLoad = useRef(false);

  useEffect(() => {
    if (initialLoad.current === false) {
      initialLoad.current = true;
      getProjectDetail(Number(id));
    }
  });

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col flex-1 items-center md:justify-center pt-4 md:pt-0 ${
        isThemeLight ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
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
        className={`w-[95%] h-[90vh] border relative p-8 flex md:flex-row flex-col overflow-y-auto scrollbar-hide ${
          isThemeLight ? "border-black" : "border-gray-500"
        }`}
      >
        <div className="md:flex-[1]">
          <MenuSection
            defaultMenuType={MenuType.Projects}
            onDrawerMenuClicked={toggleDrawer}
          />
        </div>

        {selectedProjectDetail && (
          <div className="hidden md:block flex-[4]">
            <ProjectDetailCard
              item={selectedProjectDetail}
              isThemeLight={isThemeLight}
            />
          </div>
        )}

        {selectedProjectDetail && (
          <div className="block md:hidden flex-1 mt-6">
            <ProjectDetailCardMobile
              item={selectedProjectDetail}
              isThemeLight={isThemeLight}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
