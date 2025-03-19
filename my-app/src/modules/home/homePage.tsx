import { useMediaQuery } from "@mui/material";
import useHomeViewModel from "modules/home/useHomeViewModel";
import { useEffect, useRef, useState } from "react";
import CustomDrawer from "shared/components/customDrawer";
import DrawerMenuContent from "shared/components/drawerMenuContent";
import MenuSection from "shared/components/menuSection";
import ThemeSection from "shared/components/themeSection";
import { MenuType, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";
import { subscribeUserDataValue } from "shared/reducers/userDataSlice";
import AboutDescription from "./components/aboutDescription";

const HomePage = () => {
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
      className={`min-h-screen w-full flex flex-col items-center justify-center ${
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
          contentItem={<DrawerMenuContent newMenuType={MenuType.Home} isThemeLight={isThemeLight} />}
        />
      )}

      <div
        className={`w-[95%] h-[90vh] border relative xl:p-8 p-10 flex md:flex-row flex-col ${
          isThemeLight ? "border-black" : "border-gray-500"
        }`}
      >
        <div className="md:flex-[1]">
          <MenuSection
            defaultMenuType={MenuType.Home}
            onDrawerMenuClicked={toggleDrawer}
          />
        </div>

        <div className="md:flex-[4] mt-auto">
          <AboutDescription
            isThemeLight={isThemeLight}
            aboutDescription={userData?.aboutDescription ?? []}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
