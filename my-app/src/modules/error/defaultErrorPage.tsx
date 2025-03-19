import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ThemeSection from "shared/components/themeSection";
import { RouterPath, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";

function DefaultErrorPage() {
  const navigate = useNavigate();
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;

  const onHomeClicked = () => {
    navigate(RouterPath.Home);
  };

  return (
    <div
      className={`min-h-dvh w-full flex flex-col items-center md:justify-center py-2 ${
        isThemeLight ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <ThemeSection />

      <div
        className={`w-[95%] h-full flex-1 border relative p-8 flex items-center justify-center ${
          isThemeLight ? "border-black" : "border-gray-500"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
          className={`flex flex-col items-center justify-center max-w-lg text-center text-base leading-4 ${
            isThemeLight ? "text-black" : "text-gray-300"
          }`}
        >
          <p>Uh-oh! We couldn’t find that page. Maybe it moved or never existed.</p>
          <p className="mt-2">Let’s get you back home!</p>
          <button
            onClick={onHomeClicked}
            className="w-1/2 mt-6 bg-blue-400 text-white py-2 px-4 rounded-lg"
          >
            Back to home
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default DefaultErrorPage;
