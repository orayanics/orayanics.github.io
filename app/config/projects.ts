import {
  CHRONOS_ASSETS,
  COINZ_ASSETS,
  NMIXX_ASSETS,
  TALKTHERAPY_ASSETS,
} from "./asset";

export const PROJECTS = [
  {
    slug: "coinz",
    title: "coinz",
    stack: ["Vue", "Pinia", "Zod", "Bun", "ElysiaJS", "SQLite"],
    role: "Developer",
    backend: [
      "CRUD API for wallets and transactions using ElysiaJS, Prisma, and SQLite, ensuring relational integrity and cascading deletes.",
      "Pagination, sorting, debounced search, and analytics endpoints (aggregations and time-based insights) with flexible filtering.",
      "Computation of wallets and transactions for dashboard insights and analytics.",
    ],
    frontend: [
      "First project to use Vue and Pinia, and follows a feature/module-based architecture for frontend and backend for better organization and developer experience.",
      "Uses Zod for schema validation and type safety across the stack.",
    ],
    year: "2025",
    summary:
      "coinz is a personal project for tracking income and expenses with a simple and intuitive interface.",
    overview:
      "coinz is a personal finance management application designed to help users track their income and expenses with a simple and intuitive interface. The application allows users to create wallets, add transactions, and view analytics on their spending habits.",
    github: "https://github.com/orayanics/coinz",
    image: COINZ_ASSETS.landing,
    assets: COINZ_ASSETS,
  },
  {
    slug: "chronos",
    title: "chronos",
    stack: ["TanStack Start (React)", "SQLite"],
    role: "Developer",
    backend: [
      "Initial use of server functions for handling logic and API routes using TanStack Start",
      "Used LocalStorage for data persistence at first with an offline-first approach but later moved to SQLite",
    ],
    frontend: [
      "Used TanStack Start (React) for the frontend with a feature/module-based architecture for better organization and developer experience.",
      "Utilizes html to image library for the session sharing feature which allows users to share their pomodoro sessions as images on social media.",
    ],
    year: "2026",
    summary:
      "A pomodoro timer with task management and a image session sharing feature.",
    overview:
      "chronos is a pomodoro timer application that helps users manage their time and tasks effectively. It features a pomodoro timer, task management, and an image session sharing feature that allows users to share their pomodoro sessions as images on social media.",
    github: "https://github.com/orayanics/chronos",
    image: CHRONOS_ASSETS.app,
    assets: CHRONOS_ASSETS,
  },
  {
    slug: "nmixx-studio",
    title: "NMIXX Studio",
    stack: ["TanStack Start (React)", "Tailwind CSS"],
    role: "Developer",
    frontend: [
      "Utilizes YouTube API to fetch and display the group's videography, including music videos, dance practices, and variety show appearances.",
      "Data is scraped from external sources, transformed on load and fetch, and cached using TanStack Query for performance and reactive updates.",
      "Initial use and implementation of motion package for animations and transitions, such as page transitions and interactive hover effects.",
    ],
    year: "2026",
    summary:
      "A fan-made web application inspired by the K-pop group NMIXX, showcasing the group's members, tracks, and videography.",
    overview:
      "NMIXX Studio is a fan-made web page for the K-pop group NMIXX which collates information about the group such as member profiles, track details, and videography. The application uses the YouTube API to fetch and display the group's videography, including music videos, dance practices, and variety show appearances.",
    github: "https://github.com/orayanics/nmixx-studio",
    link: "https://nmixx-studio.up.railway.app/",
    video: NMIXX_ASSETS.landing,
    videos: NMIXX_ASSETS,
  },
  {
    slug: "talktherapy",
    title: "TalkTherapy",
    stack: [
      "ElysiaJS",
      "Python",
      "TanStack Start (React)",
      "WebSockets",
      "SQLite",
    ],
    role: "Developer",
    backend: [
      "Rewrote the backend API from ExpressJS to ElysiaJS for improved performance and developer experience, and implemented a module-based structure for better organization.",
      "Follows an RBAC model for access control and rate-limiting to ensure correct ownership and eliminate bypasses.",
      "Uses WebSockets for real-time messaging and notifications for seamless communication between clinicians and patients.",
      "Features a Phoneme Confidence test for patients that serves as self-assessment and speech exercise for therapy.",
    ],
    frontend: [
      "Uses TanStack Start (React) with a module-based architecture for better organization and developer experience.",
      "Integrated and implemented WebRTC for video conferencing and WebSocket for real-time notifications and messaging.",
      "Initial implementation of Better-Auth for authentication and authorization.",
      "Uses role-based conditional rendering and route protection to ensure users only access views and perform actions within their permissions.",
    ],
    year: "2025",
    summary:
      "A telehealth platform designed for Speech-Language Pathologists (SLPs) and their patients, providing tools for remote therapy sessions, progress tracking, and communication.",
    overview:
      "The platform includes features such as video conferencing, real-time messaging, and a phoneme confidence test for self-assessment and speech exercises.",
    github: "https://github.com/orayanics/talktherapy",
    image: TALKTHERAPY_ASSETS.landing,
    assets: TALKTHERAPY_ASSETS,
  },
].reverse();
