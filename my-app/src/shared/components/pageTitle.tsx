import { MenuType } from "shared/constants/enums";

interface PageTitleProps {
  title: MenuType;
  flex?: number;
}

const PageTitle = (props: PageTitleProps) => {
  const { title, flex } = props;

  return (
    <div className={`flex flex-[${flex ?? 0.5}] justify-start items-start`}>
      <h1 className="rotate-90 text-white text-lg border-l-2 border-blue-400 pl-2 text-4xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
