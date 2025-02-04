import { useMediaQuery } from "@mui/material";
import useHomeViewModel from "modules/home/useHomeViewModel";
import ExperienceCard from "modules/journey/components/experienceCard";
import { useEffect, useRef, useState } from "react";
import CustomDrawer from "shared/components/customDrawer";
import DrawerMenuContent from "shared/components/drawerMenuContent";
import MenuSection from "shared/components/menuSection";
import ThemeSection from "shared/components/themeSection";
import { MenuType, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";
import { subscribeUserDataValue } from "shared/reducers/userDataSlice";
import ExperienceCardMobile from "./components/experienceCardMobile";

const JourneyPage = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width:768px)");
  const { getUserData } = useHomeViewModel();
  const initialLoad = useRef(false);
  const userData = useAppSelector(subscribeUserDataValue);
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;

  useEffect(() => {
    if (initialLoad.current === false) {
      initialLoad.current = true;
      getUserData();
    }
  });

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <div
      className={`min-h-screen w-screen flex flex-col items-center justify-center ${
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
              newMenuType={MenuType.Journey}
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
            defaultMenuType={MenuType.Journey}
            onDrawerMenuClicked={toggleDrawer}
          />
        </div>

        <div className="hidden md:block md:flex-[4]">
          <ExperienceCard
            isThemeLight={isThemeLight}
            experienceList={userData?.experienceList ?? []}
          />
        </div>

        <div className="block md:hidden">
          <ExperienceCardMobile
            isThemeLight={isThemeLight}
            experienceList={userData?.experienceList ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default JourneyPage;
