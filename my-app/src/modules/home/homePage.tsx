import { useState, useEffect, useRef } from "react";
import cursorSelectionSound from "../../assets/audios/cursor.mp3";
import MenuButton from "./components/menuButton";
import { MenuType } from "constants/enums";
import AboutPage from "modules/about/aboutPage";
import ContactPage from "modules/contact/contactPage";
import ProjectsPage from "modules/projects/projectsPage";

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuType>(MenuType.About);
  const audioContext = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const menuComponents = {
    [MenuType.About]: <AboutPage />,
    [MenuType.Projects]: <ProjectsPage />,
    [MenuType.Contact]: <ContactPage />,
  };

  useEffect(() => {
    setupAudioEffect();
  }, []);

  const setupAudioEffect = () => {
    audioContext.current = new AudioContext();
    fetch(cursorSelectionSound)
      .then((res) => res.arrayBuffer())
      .then((data) => audioContext.current!.decodeAudioData(data))
      .then((buffer) => {
        bufferRef.current = buffer;
      });
  };

  const playSoundEffect = () => {
    if (audioContext.current && bufferRef.current) {
      const source = audioContext.current.createBufferSource();
      source.buffer = bufferRef.current;
      source.connect(audioContext.current.destination);
      source.start(0);
    }
  };

  const onItemSelection = (newMenuType: MenuType) => {
    setSelectedMenu(newMenuType);
    playSoundEffect();
  };

  return (
    <div className="h-screen flex bg-black">
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
