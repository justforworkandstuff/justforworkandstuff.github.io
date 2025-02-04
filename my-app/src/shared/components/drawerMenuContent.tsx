import { setProjectDetail } from "modules/projects/reducers/projectDetailSlice";
import { useNavigate } from "react-router-dom";
import { MenuType, RouterPath } from "shared/constants/enums";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import MenuButton from "./menuButton";

interface DrawerMenuContentProps {
  newMenuType: MenuType;
  isThemeLight: boolean;
}

const DrawerMenuContent = (props: DrawerMenuContentProps) => {
  const { newMenuType, isThemeLight } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <div className="p-6 mt-12">
      <h2 className={`text-2xl font-bold mb-4 ${isThemeLight ? "text-black" : "text-white"}`}>Menu</h2>
      {Object.values(MenuType).map((item, index) => (
          <MenuButton
            key={index}
            currentMenuType={item}
            selectedMenuType={newMenuType}
            onItemSelection={onItemSelection}
          />
        ))}
    </div>
  );
};

export default DrawerMenuContent;
