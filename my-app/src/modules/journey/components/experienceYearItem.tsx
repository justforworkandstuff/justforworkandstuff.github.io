interface ExperienceYearItemProps {
  prevYear: string;
  currentYear: string;
  isThemeLight: boolean;
  startDate: string;
}

const ExperienceYearItem = (props: ExperienceYearItemProps) => {
  const { prevYear, currentYear, isThemeLight, startDate } = props;

  return (
    <div className="w-full flex flex-row items-center pt-8">
      {/* End Date */}
      <div className="min-h-[3rem]">
        {prevYear !== currentYear && (
          <h1
            className={`mr-4 text-3xl decoration-[2px] underline underline-offset-[4px] border-double border-b-2 ${
              isThemeLight
                ? "border-black text-black"
                : "border-white text-white"
            }`}
          >
            {currentYear}
          </h1>
        )}
      </div>

      {/* Border */}
      <div
        className={`h-[2px] flex-1 border-b-2 border-double ${
          isThemeLight ? "border-black" : "border-white"
        }`}
      ></div>

      {/* Start Date */}
      <div className="min-h-[3rem]">
        <h1
          className={`ml-4 text-3xl ${
            isThemeLight ? "text-black" : "text-white"
          }`}
        >
          {startDate}
        </h1>
      </div>
    </div>
  );
};

export default ExperienceYearItem;
