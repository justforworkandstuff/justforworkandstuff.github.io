interface SocialMediaIconProps {
  iconSource: string;
  altText: string;
  onIconClicked: () => void;
}

const SocialMediaIcon = (props: SocialMediaIconProps) => {
  const { iconSource, altText, onIconClicked } = props;

  return (
    <img
      className="w-6 md:w-8 lg:w-10 m-4 hover:opacity-70 hover:scale-125 transition-transform duration-300"
      src={iconSource}
      alt={altText}
      onClick={onIconClicked}
    />
  );
};

export default SocialMediaIcon;
