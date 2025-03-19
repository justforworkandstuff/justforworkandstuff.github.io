import { motion } from "motion/react";

interface AboutDescriptionProps {
  isThemeLight: boolean;
  aboutDescription: string[];
}

const AboutDescription = (props: AboutDescriptionProps) => {
  const { isThemeLight, aboutDescription } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      className={`w-full h-full ml-auto flex flex-col items-end justify-end max-w-sm text-right text-lg md:text-base leading-6 md:leading-4 ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      {(aboutDescription?.length ?? 0) >= 1 && <p>{aboutDescription[0]}</p>}
      {(aboutDescription?.length ?? 0) >= 2 && (
        <p className="mt-4">{aboutDescription[1]}</p>
      )}
    </motion.div>
  );
};

export default AboutDescription;
