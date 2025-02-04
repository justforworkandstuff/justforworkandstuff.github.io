interface ExperienceYearItemMobileProps {
  isThemeLight: boolean;
  date: string;
}

const ExperienceYearItemMobile = (props: ExperienceYearItemMobileProps) => {
  const { isThemeLight, date } = props;

  return (
    <h1
      className={`text-3xl rotate-90 ${
        isThemeLight ? "border-black text-black" : "border-white text-white"
      }`}
    >
      {date}
    </h1>
  );
};

export default ExperienceYearItemMobile;
