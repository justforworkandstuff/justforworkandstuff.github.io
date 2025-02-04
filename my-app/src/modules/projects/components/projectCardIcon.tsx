import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import StorageIcon from '@mui/icons-material/Storage';
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { SkillsCategories } from "shared/constants/enums";

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
                        return <PhoneIphoneIcon />;
                    case SkillsCategories.Frontend:
                        return <TravelExploreIcon />;
                    case SkillsCategories.Backend:
                        return <StorageIcon />;
                    case SkillsCategories.Tools:
                        return <HomeRepairServiceIcon />;
                }
            })()}
        </div>
    );
}

export default ProjectCardIcon;