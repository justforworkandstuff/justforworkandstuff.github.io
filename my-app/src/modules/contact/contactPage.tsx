import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import CustomDrawer from "shared/components/customDrawer";
import DrawerMenuContent from "shared/components/drawerMenuContent";
import MenuSection from "shared/components/menuSection";
import ThemeSection from "shared/components/themeSection";
import { MenuType, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";
import ContactDescription from "./components/contactDescription";

const ContactPage = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isMediumScreen = useMediaQuery("(min-width:768px)");
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;

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
          contentItem={<DrawerMenuContent newMenuType={MenuType.Contact} isThemeLight={isThemeLight} />}
        />
      )}

      <div
        className={`w-[95%] h-[90vh] border relative xl:p-8 p-10 flex md:flex-row flex-col ${
          isThemeLight ? "border-black" : "border-gray-500"
        }`}
      >
        <div className="md:flex-[1]">
          <MenuSection
            defaultMenuType={MenuType.Contact}
            onDrawerMenuClicked={toggleDrawer}
          />
        </div>

        <div className="md:flex-[4] mt-auto">
          <ContactDescription
            isThemeLight={isThemeLight}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
