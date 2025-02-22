import { useState } from "react";
import placeholderImage from "../../../assets/img/icon_placeholder.png";

interface SkillIconComponentProps {
  imgPath?: string;
  customImageProperties?: string;
  type: string;
  index: number;
}

const SkillIconComponent = (props: SkillIconComponentProps) => {
  const { imgPath, customImageProperties, type, index } = props;
  const [imgError, setImgError] = useState<boolean>(false);

  var imageProperties = "aspect-square object-cover";
  if (customImageProperties) {
    imageProperties = customImageProperties;
  }

  var altText = `ic-${type}-${index + 1}`;
  return (
    <div className="h-[20px] w-[20px] m-[4px]">
      {!imgError && imgPath ? (
        <img
          className={imageProperties}
          alt={altText}
          src={imgPath}
          onError={(e) => setImgError(true)}
        />
      ) : (
        <img className={imageProperties} alt={altText} src={placeholderImage} />
      )}
    </div>
  );
};

export default SkillIconComponent;
