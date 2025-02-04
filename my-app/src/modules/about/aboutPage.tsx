import { MenuType } from "shared/constants/enums";
import PageTitle from "shared/components/pageTitle";
import { useAppSelector } from "shared/hooks/useAppSelector";
import useAboutViewModel from "./useAboutViewModel";
import { useEffect, useRef } from "react";
import { subscribeUserDataValue } from "./reducers/userDataSlice";
import { TagSphere } from "react-tag-sphere";

const AboutPage = () => {
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
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 pl-4 pt-14 text-white flex flex-row h-full w-full">
      <PageTitle title={MenuType.About} />

      {/* About Me */}
      <div className="flex-[1] mr-4 mb-4 flex flex-col text-lg">
        {(userData?.aboutDescription?.length ?? 0) >= 1 && (
          <p className="flex-[1] text-start">{userData?.aboutDescription[0]}</p>
        )}
        {(userData?.aboutDescription?.length ?? 0) >= 2 && (
          <p className="flex-[1] text-start mt-4">
            {userData?.aboutDescription[1]}
          </p>
        )}
      </div>

      {/* Skills */}
      <div className="flex-[1]">
        <TagSphere
          tags={Object.entries(userData?.skills ?? {}).map((skill) => {
            const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            return (
              <p className="text-lg font-semibold" style={{color: randomColor}}>{skill[1]}</p>
            );
          })}
          blur={false}
          maxSpeed={15}
          keepRollingAfterMouseOut={false}
          grayscale={false}
          fullHeight={true}
          fullWidth={false}
        />
      </div>
    </div>
  );
};

export default AboutPage;
