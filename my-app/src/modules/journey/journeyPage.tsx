import ExperienceCardComponent from "modules/about/components/experienceCardComponent";
import { subscribeUserDataValue } from "modules/about/reducers/userDataSlice";
import useAboutViewModel from "modules/about/useAboutViewModel";
import { useRef, useEffect } from "react";
import PageTitle from "shared/components/pageTitle";
import { MenuType } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";

const JourneyPage = () => {
  const { getUserData } = useAboutViewModel();
  const initialLoad = useRef(false);
  const userData = useAppSelector(subscribeUserDataValue);

  useEffect(() => {
    if (initialLoad.current === false) {
      initialLoad.current = true;
      getUserData();
    }
  });

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 pl-8 pt-14 text-white flex flex-row h-full w-full overflow-y-auto">
      <PageTitle title={MenuType.Journey} />

      <div className="flex flex-col">
        {userData?.experienceList.map((exp, index) => {
          const prevYear =
            index > 0 ? userData?.experienceList[index - 1].endDate : null;
          const currentYear = exp.endDate;

          return (
            <div
              key={exp.id}
              className="grid grid-cols-[4rem_2rem_1fr] gap-4 items-start"
            >
              <div className="text-right pr-4">
                {prevYear !== currentYear && (
                  <h1 className="text-white text-3xl font-bold">
                    {currentYear}
                  </h1>
                )}
              </div>

              <div className="flex flex-col items-center h-full mt-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                {userData?.experienceList.length > 1 && (
                  <div className="w-[2px] bg-gray-400 opacity-50 flex-grow border-l-2 border-dotted"></div>
                )}
              </div>

              <ExperienceCardComponent experience={exp} isLastItem={index === userData?.experienceList.length - 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyPage;
