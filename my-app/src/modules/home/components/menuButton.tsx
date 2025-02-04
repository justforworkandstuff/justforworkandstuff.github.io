import { MenuType } from "shared/constants/enums";

interface MenuButtonProps {
  currentMenuType: MenuType;
  selectedMenuType: MenuType;
  onItemSelection: (newMenuType: MenuType) => void;
}

const MenuButton = (props: MenuButtonProps) => {
  const { currentMenuType, selectedMenuType, onItemSelection } = props;
  return (
    <div className="relative">
      {selectedMenuType === currentMenuType && (
        <button className="absolute -left-[4px] px-4 py-2 text-lg text-start font-bold text-white border-l-2 border-white-400 bg-gradient-to-r from-blue-400 w-full">
          {currentMenuType}
        </button>
      )}

      <button
        onClick={() => onItemSelection(currentMenuType)}
        className={`px-4 py-2 text-lg font-bold border-blue-400 border-l-2 opacity-50 text-start bg-gradient-to-r from-blue-500 to-transparent w-full hover:opacity-70
          ${selectedMenuType === currentMenuType ? "text-transparent" : "text-gray-400"}`}
      >
        {currentMenuType}
      </button>
    </div>
  );
};

export default MenuButton;
