import { MenuType, Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { subscribeThemeValue } from "shared/reducers/themeSlice";

interface MenuButtonProps {
  currentMenuType: MenuType;
  selectedMenuType: MenuType;
  onItemSelection: (newMenuType: MenuType) => void;
}

const MenuButton = (props: MenuButtonProps) => {
  const { currentMenuType, selectedMenuType, onItemSelection } = props;
  const themeValue = useAppSelector(subscribeThemeValue);
  const isThemeLight = themeValue === Theme.Light;

  return (
    // On Selected
    <div className="relative">
      {selectedMenuType === currentMenuType && (
        <button
          className={`absolute -left-[4px] px-4 py-2 text-lg text-start font-bold border-l-2 w-40 ${
            isThemeLight
              ? "text-black border-gray-600 bg-gradient-to-r from-blue-400"
              : "text-white border-white-400 bg-gradient-to-r from-blue-700"
          }`}
        >
          {currentMenuType}
        </button>
      )}

      <button
        onClick={() => onItemSelection(currentMenuType)}
        className={`px-4 py-2 text-lg font-bold border-l-2 opacity-50 text-start ${
          isThemeLight
            ? "border-gray-200 bg-gradient-to-r from-gray-400 to-transparent"
            : "border-gray-400 bg-gradient-to-r from-gray-500 to-transparent"
        }  w-40 hover:opacity-70
          ${
            selectedMenuType === currentMenuType
              ? "text-transparent"
              : isThemeLight
              ? "text-black"
              : "text-gray-300"
          }`}
      >
        {currentMenuType}
      </button>
    </div>
  );
};

export default MenuButton;
