import { motion } from "motion/react";
import { MyLinks } from "shared/constants/enums";
import emailDarkLogo from "../../../shared/assets/img/dark/email_dark.svg";
import githubDarkLogo from "../../../shared/assets/img/dark/github_dark.svg";
import linkedInDarkLogo from "../../../shared/assets/img/dark/linkedIn_dark.svg";
import emailLightLogo from "../../../shared/assets/img/light/email_light.svg";
import githubLightLogo from "../../../shared/assets/img/light/github_light.svg";
import linkedInLightLogo from "../../../shared/assets/img/light/linkedIn_light.svg";
// import mediumLogo from "../../../shared/assets/img/medium.svg";
import SocialMediaIcon from "./socialMediaIcon";

interface ContactDescriptionProps {
  isThemeLight: boolean;
}

const ContactDescription = (props: ContactDescriptionProps) => {
  const { isThemeLight } = props;

  const onEmailClicked = () => {
    window.location.href = `mailto:${MyLinks.Email}`;
  };

  const onGithubClicked = () => {
    window.open(MyLinks.Github, "_blank");
  };

  const onLinkedInClicked = () => {
    window.open(MyLinks.LinkedIn, "_blank");
  };

  // TODO: Disabled further until I start writing on Medium
  //   const onMediumClicked = () => {
  //     window.open(MyLinks.Medium, "_blank");
  //   };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
      className={`w-full h-full ml-auto flex flex-col items-end justify-end max-w-sm text-right text-base leading-5 md:leading-4 ${
        isThemeLight ? "text-black" : "text-gray-300"
      }`}
    >
      <p className="mb-4">
        I'm always open to connecting with fellow developers and industry
        professionals.
      </p>
      <p>
        Whether you're interested in my work, have any collaboration
        opportunities, or just want to chat about tech, feel free to reach out
        to me through these platforms.
      </p>
      <div className="flex flex-row mt-2 mb-6">
        <SocialMediaIcon
          iconSource={isThemeLight ? emailDarkLogo : emailLightLogo}
          altText={"Email Logo"}
          onIconClicked={onEmailClicked}
        />
        <SocialMediaIcon
          iconSource={isThemeLight ? githubDarkLogo : githubLightLogo}
          altText={"Github Logo"}
          onIconClicked={onGithubClicked}
        />
        <SocialMediaIcon
          iconSource={isThemeLight ? linkedInDarkLogo : linkedInLightLogo}
          altText={"LinkedIn Logo"}
          onIconClicked={onLinkedInClicked}
        />
        {/* TODO: Disabled until I have started writing on Medium */}
        {/* <SocialMediaIcon
              iconSource={mediumLogo}
              altText={"Medium Logo"}
              onIconClicked={onMediumClicked}
            /> */}
      </div>
      <p className="w-full">I look forward to hearing from you.</p>
    </motion.div>
  );
};

export default ContactDescription;
