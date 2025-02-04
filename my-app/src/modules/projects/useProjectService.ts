import { SkillsCategories, SkillsType } from "shared/constants/enums";
import ProjectType from "./types/projectType";

const useProjectService = () => {
  const localDataSource = [
    {
      id: 1,
      title: "Event Ticketing App",
      timeline: "Feb.2025",
      type: SkillsCategories.Mobile,
      stack: [SkillsType.Flutter],
      description: [
        "Built with Flutter, this mobile app powers one of Malaysia’s largest ticketing platforms, streamlining event discovery and ticket purchases for users nationwide.",
        "As the lead developer, I manage the entire development lifecycle—-driving timelines, prioritizing features, and ensuring smooth collaboration to deliver a high-quality user experience.",
        "• Offline mode for uninterrupted access in event areas",
        "• Personlized notifications for upcoming events",
        "• Modern, intuitive UI/UX for smooth navigation",
        "• Social login integration for quick access",
      ],
    },
    {
      id: 2,
      title: "E-Wallet Payment System",
      timeline: "Dec.2024",
      type: SkillsCategories.Mobile,
      stack: [SkillsType.Flutter],
      description: [
        "A feature-rich mobile e-wallet app built with Flutter, designed to simplify users’ daily transactions.",
        "My role involved maintaining and enhancing the app, ensuring smooth functionality across all features while optimizing the payment system for improved performance and reliability.",
        "• Seamless payments with support for QR codes, cards, and online banking",
        "• Transaction history for reviewing past payments",
        "• Intuitive and modern UI/UX for a smooth and user-friendly payment experience",
        "• Alibaba Miniapp integration for expanded services within the e-wallet ecosystem",
      ],
    },
    {
      id: 3,
      title: "EV Loan Comparison",
      timeline: "Jun.2024",
      type: SkillsCategories.Frontend,
      stack: [SkillsType.React, SkillsType.TypeScript, SkillsType.TailwindCss],
      description: [
        "Led the development of a mini-app built with React and TypeScript for a Superapp, leveraging the Alibaba Miniapp framework.",
        "Worked with a team to build it from scratch to production, ensuring seamless functionality, performance optimization, and an improved EV buying experience in Malaysia.",
        "• Comparing financing rates across multiple banks",
        "• Providing real-time updates on promotions and discounts for specific EV brands",
        "• Streamlining loan interest submission for a smoother financing process",
      ],
    },
    {
      id: 4,
      title: "Museum App",
      timeline: "Dec.2023",
      type: SkillsCategories.Mobile,
      stack: [SkillsType.Flutter],
      description: [
        "Bringing history to life with a fun and interactive museum app built in Flutter.",
        "Designed to enhance the visitor experience, this app combines AR technology, smart navigation, and intuitive design. As the lead developer, I managed the project end-to-end, ensuring smooth execution and client satisfaction.",
        "• Augmented Reality (AR) integration for interactive storytelling",
        "• Indoor Pathfinder to help visitors explore with ease",
        "• Immersive UI/UX for a seamless experience",
        "• Hassle-free program registration directly in the app",
      ],
    },
    {
      id: 5,
      title: "Idol Fan App",
      timeline: "Apr.2023",
      type: SkillsCategories.Mobile,
      stack: [SkillsType.Android],
      description: [
        "A fan engagement mobile app built with Kotlin and Java, designed to connect idols with their fans through live interactions with the use of WebSocket & WebRTC.",
        "My role involved enhancing and maintaining key features, with a strong focus on optimizing the live streaming experience.",
        "• Live streaming feature integrated with WebRTC for low-latency video streaming",
        "• Real-time notifications with instant updates on news, events, and exclusive content",
        "• Fan chatrooms with WebSocket integration for instant chat delivery and updates ",
        "• In-app purchases system for fans to support their idols",
      ],
    },
    {
      id: 6,
      title: "EV Companion App",
      timeline: "Jan.2023",
      type: SkillsCategories.Mobile,
      stack: [SkillsType.Flutter],
      description: [
        "Built from the ground up in Flutter, this mobile app unifies multiple Malaysia EV charging networks into a single platform, simplifying the charging experience for Malaysian EV owners.",
        "As a key developer, I contributed to the full development lifecycle—building core features, ensuring seamless integrations, and optimizing the user experience.",
        "• Interactive map with real-time charging station availability",
        "• Unified payment system supporting multiple charging networks",
        "• Detailed station info including pricing, socket types, location, and user reviews",
      ],
    },
  ];

  const fetchProjectsList = (): ProjectType[] => {
    return localDataSource;
  };

  const fetchProjectDetail = (id: number): ProjectType => {
    const projectDetail = localDataSource.find(
      (item) => item.id === id
    ) as ProjectType;
    if (!projectDetail) throw new Error(`Project with id ${id} not found`);
    return projectDetail;
  };

  return {
    fetchProjectsList,
    fetchProjectDetail,
  };
};

export default useProjectService;
