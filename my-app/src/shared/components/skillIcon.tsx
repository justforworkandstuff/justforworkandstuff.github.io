import { SkillsType } from "shared/constants/enums";
import expressJsLogo from "../../shared/assets/img/dark/expressjs.svg";
import gitLogo from "../../shared/assets/img/dark/git.svg";
import iosLogo from "../../shared/assets/img/dark/ios.svg";
import reduxLogo from "../../shared/assets/img/dark/redux.svg";
import androidLogo from "../../shared/assets/img/light/android.svg";
import azureLogo from "../../shared/assets/img/light/azure.svg";
import figmaLogo from "../../shared/assets/img/light/figma.svg";
import firebaseLogo from "../../shared/assets/img/light/firebase.svg";
import flutterLogo from "../../shared/assets/img/light/flutter.svg";
import javaLogo from "../../shared/assets/img/light/java_light.svg";
import jiraLogo from "../../shared/assets/img/light/jira.svg";
import kotlinLogo from "../../shared/assets/img/light/kotlin_light.svg";
import nodeJsLogo from "../../shared/assets/img/light/nodejs.svg";
import postmanLogo from "../../shared/assets/img/light/postman.svg";
import reactLogo from "../../shared/assets/img/light/react.svg";
import redisLogo from "../../shared/assets/img/light/redis.svg";
import tailwindLogo from "../../shared/assets/img/light/tailwind.svg";
import typescriptLogo from "../../shared/assets/img/light/typescript.svg";

const skillIconMap: Record<SkillsType, string> = {
  [SkillsType.Flutter]: flutterLogo,
  [SkillsType.Android]: androidLogo,
  [SkillsType.iOS]: iosLogo,
  [SkillsType.Kotlin]: kotlinLogo,
  [SkillsType.Java]: javaLogo,
  [SkillsType.React]: reactLogo,
  [SkillsType.TypeScript]: typescriptLogo,
  [SkillsType.TailwindCss]: tailwindLogo,
  [SkillsType.Redux]: reduxLogo,
  [SkillsType.ExpressJs]: expressJsLogo,
  [SkillsType.NodeJs]: nodeJsLogo,
  [SkillsType.Redis]: redisLogo,
  [SkillsType.Figma]: figmaLogo,
  [SkillsType.AzureDevOps]: azureLogo,
  [SkillsType.Jira]: jiraLogo,
  [SkillsType.Git]: gitLogo,
  [SkillsType.Firebase]: firebaseLogo,
  [SkillsType.Postman]: postmanLogo,
};

interface SkillIconProps {
  type: SkillsType;
}
const SkillIcon = (props: SkillIconProps) => {
  const { type } = props;

  return (
    <div className="h-8 w-8">
      {
        <img
          className="w6 md:w-8 lg:w-10"
          src={skillIconMap[type]}
          alt={type}
        />
      }
    </div>
  );
};

export default SkillIcon;
