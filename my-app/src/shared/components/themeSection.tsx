import { useDispatch } from "react-redux";
import { Theme } from "shared/constants/enums";
import { useAppSelector } from "shared/hooks/useAppSelector";
import { setTheme, subscribeThemeValue } from "shared/reducers/themeSlice";

const ThemeSection = () => {
  const themeValue = useAppSelector(subscribeThemeValue);
  const dispatch = useDispatch();

  const onThemeChecked = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };

  return (
    <div className="flex flex-row w-[90%] items-center justify-end space-x-2 mb-1 font-semibold">
      <input
        type="checkbox"
        id="themeLight"
        checked={themeValue === Theme.Light}
        onChange={() => onThemeChecked(Theme.Light)}
        className={`appearance-none w-4 h-4 border  ${
          themeValue === Theme.Dark
            ? "border-white checked:bg-white"
            : "border-black checked:bg-black"
        }`}
      ></input>
      <label htmlFor="themeLight">Light</label>
      <input
        type="checkbox"
        id="themeDark"
        checked={themeValue === Theme.Dark}
        onChange={() => onThemeChecked(Theme.Dark)}
        className={`appearance-none w-4 h-4 border ${
          themeValue === Theme.Dark
            ? "border-white checked:bg-white"
            : "border-black checked:bg-black"
        }`}
      ></input>
      <label htmlFor="themeDark">Dark</label>
    </div>
  );
};

export default ThemeSection;
