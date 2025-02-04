import { useState, useEffect } from "react";
import cursorSelectionSound from "../../shared/assets/audios/cursor.mp3";
import MenuButton from "./components/menuButton";
import { MenuType } from "shared/constants/enums";
import AboutPage from "modules/about/aboutPage";
import ContactPage from "modules/contact/contactPage";
import ProjectsPage from "modules/projects/projectsPage";
import useAudio from "shared/hooks/useAudio";
import JourneyPage from "modules/journey/journeyPage";

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(MenuType.About);
  const { setupAudioEffect, playSoundEffect } = useAudio(cursorSelectionSound);
  const menuComponents = {
    [MenuType.About]: <AboutPage />,
    [MenuType.Journey]: <JourneyPage />,
    [MenuType.Projects]: <ProjectsPage />,
    [MenuType.Contact]: <ContactPage />,
  };

  useEffect(() => {
    setupAudioEffect();
  }, []);

  const onItemSelection = (newMenuType: MenuType) => {
    setSelectedMenu(newMenuType);
    playSoundEffect();
  };

  return (
    <div className="h-full flex bg-black">
      {/* Menu Components */}
      <div className="h-screen flex-[1] flex items-end justify-center p-10">
        <div className="flex flex-col space-y-2">
          <h1 className="text-xl font-bold mb-4 text-white">
            justforworkandstuff
          </h1>
          {Object.values(MenuType).map((item, index) => (
            <MenuButton
              key={index}
              currentMenuType={item}
              selectedMenuType={selectedMenu}
              onItemSelection={onItemSelection}
            />
          ))}
        </div>
      </div>

      {/* Pages Component */}
      <div className="flex-[4]">{menuComponents[selectedMenu]}</div>
    </div>
  );
};

export default HomePage;
