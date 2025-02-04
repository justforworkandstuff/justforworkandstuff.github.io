import PageTitle from "shared/components/pageTitle";
import { MenuType, MyLinks } from "shared/constants/enums";
import githubLogo from "../../shared/assets/img/github.svg";
import linkedInLogo from "../../shared/assets/img/linkedIn.svg";
import mediumLogo from "../../shared/assets/img/medium.svg";
import emailLogo from "../../shared/assets/img/email.svg";
import SocialMediaIcon from "./components/socialMediaIcon";

const ContactPage = () => {
  const onEmailClicked = () => {
    window.location.href = `mailto:${MyLinks.Email}`;
  };

  const onGithubClicked = () => {
    window.open(MyLinks.Github, "_blank");
  };

  const onLinkedInClicked = () => {
    window.open(MyLinks.LinkedIn, "_blank");
  };

  {
    /* TODO: Disabled until I have started writing on Medium */
  }
  //   const onMediumClicked = () => {
  //     window.open(MyLinks.Medium, "_blank");
  //   };

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 pl-4 pt-14 text-white flex flex-row h-full w-full">
      <PageTitle title={MenuType.Contact} />
      <div className="flex-[2] flex flex-col items-center text-center justify-center mr-8 pl-4 text-lg">
        <p>
          I'm always open to connecting with fellow developers and industry
          professionals.
        </p>
        <p>
          Whether you're interested in my work, have collaboration
          opportunities, or just want to chat about tech, feel free to reach out
          to me through these platforms.
        </p>
        <div className="flex flex-row mt-2 mb-6">
          <SocialMediaIcon
            iconSource={emailLogo}
            altText={"Email Logo"}
            onIconClicked={onEmailClicked}
          />
          <SocialMediaIcon
            iconSource={githubLogo}
            altText={"Github Logo"}
            onIconClicked={onGithubClicked}
          />
          <SocialMediaIcon
            iconSource={linkedInLogo}
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
        <p>I look forward to hearing from you.</p>
      </div>
    </div>
  );
};

export default ContactPage;
