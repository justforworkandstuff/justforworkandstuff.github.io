import { SkillsCategories } from "shared/constants/enums";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import StorageIcon from '@mui/icons-material/Storage';

interface ProjectCardIconProps {
    type: SkillsCategories;
}

const ProjectCardIcon = (props: ProjectCardIconProps) => {
    const { type } = props;

    return (
        <div>
            {(() => {
                switch (type) {
                    case SkillsCategories.Mobile:
                        return <MobileFriendlyIcon />;
                    case SkillsCategories.FrontEnd:
                        return <TravelExploreIcon />;
                    case SkillsCategories.BackEnd:
                        return <StorageIcon />;
                    case SkillsCategories.Tools:
                        return <HomeRepairServiceIcon />;
                }
            })()}
        </div>
    );
}

export default ProjectCardIcon;