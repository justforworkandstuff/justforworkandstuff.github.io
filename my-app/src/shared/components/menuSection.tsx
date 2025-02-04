import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import { setProjectDetail } from "modules/projects/reducers/projectDetailSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MenuButton from "shared/components/menuButton";
import { MenuType, RouterPath, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";

interface MenuSectionProps {
  defaultMenuType: MenuType;
  onDrawerMenuClicked: () => void;
}

const MenuSection = (props: MenuSectionProps) => {
  const { defaultMenuType, onDrawerMenuClicked } = props;
  const themeValue = useAppSelector(subscribeThemeValue);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onItemSelection = (newMenuType: MenuType) => {
    dispatch(setProjectDetail(null));

    switch (newMenuType) {
      case MenuType.Home:
        navigate(RouterPath.Home);
        break;
      case MenuType.Journey:
        navigate(RouterPath.Journey);
        break;
      case MenuType.Projects:
        navigate(RouterPath.Projects);
        break;
      case MenuType.Contact:
        navigate(RouterPath.Contact);
        break;
    }
  };

  return (
    <div className="flex flex-col items-between">
      <div className="block md:hidden" onClick={onDrawerMenuClicked}>
        <MenuTwoToneIcon className="mb-4" />
      </div>
      <h1
        className={`text-6xl md:text-5xl ${
          themeValue === Theme.Light ? "text-black" : "text-white"
        }`}
      >
        Vitti Ng
      </h1>
      <p className="text-xl md:text-sm md:mb-12 ml-[4px]">Software Developer</p>

      <div className="hidden md:block">
        {Object.values(MenuType).map((item, index) => (
          <MenuButton
            key={index}
            currentMenuType={item}
            selectedMenuType={defaultMenuType}
            onItemSelection={onItemSelection}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
