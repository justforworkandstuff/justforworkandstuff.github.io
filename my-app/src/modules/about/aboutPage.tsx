import SkillRowComponent from "./components/skillRowComponent";
import imgPlaceholder from "../../assets/img/icon_placeholder.png";
import ExperienceCardComponent from "./components/experienceCardComponent";
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import { SkillsType } from "constants/enums";

const AboutPage = () => {
  return (
    <div className="bg-blue-400 h-screen flex flex-col pl-4 pt-2 text-white">
      <h1 className="text-xl font-bold mb-4 text-white">justforworkandstuff</h1>
      <div className="flex-row flex">
        {/* Left content */}
        <div className="flex-[2] mr-4 flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-white">About</h3>
          <span className="">
            I am a mobile apps developer. This paragraph of text is to be
            curated further when everything else is ready.
          </span> 
          <h3 className="text-xl font-bold mb-4 text-white">Skills</h3>
          {/* Mobile */}
          <SkillRowComponent categoryIcon={<MobileFriendlyIcon />} categoryItems={[imgPlaceholder,]} type={SkillsType.Mobile} />
          {/* Web */}
          <SkillRowComponent categoryIcon={<TravelExploreIcon />} categoryItems={[imgPlaceholder,]} type={SkillsType.FrontEnd} />
          {/* Tools */}
          <SkillRowComponent categoryIcon={<HomeRepairServiceIcon />} categoryItems={['', '']} type={SkillsType.Tools} />
        </div>

        {/* Right content */}
        <div className="flex-[3] flex flex-col">
          <ExperienceCardComponent />
          <h1>Test</h1>
          <h1>Test</h1>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
