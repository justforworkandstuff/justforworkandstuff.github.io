import { useState } from "react";
import sound from '../../assets/audios/cursor.mp3';

const HomePage = () => {
  const [selected, setSelected] = useState(0);
//   const cursorEffect = new Audio("../../assets/audios/cursor.mp3");
const cursorEffect = new Audio(sound);
  const menuItems = ["About", "Projects", "Experiences", "Contact"];

  const playSoundEffect = () => {
    cursorEffect.play();
  }

  const onItemSelection = (index: number) => {
    setSelected(index);
    playSoundEffect();
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center pl-10 bg-black text-white">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl font-bold mb-4">justforworkandstuff</h1>
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            {selected === index && (
              <button className="absolute -left-[4px] px-4 py-2 text-lg text-start font-bold text-white border-l-2 border-white-400 bg-gradient-to-r from-blue-400 w-full">
                {item}
              </button>
            )}

            <button
              onClick={() => onItemSelection(index)}
              className={`px-4 py-2 text-lg font-bold border-gray-400 border-l-2 opacity-50 text-start bg-gradient-to-r from-blue-500 to-transparent w-full 
          ${selected === index ? "text-transparent" : "text-gray-400"}`}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
