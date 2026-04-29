import {
  CHRONOS_ASSETS,
  COINZ_ASSETS,
  NMIXX_ASSETS,
  TALKTHERAPY_ASSETS,
} from "./asset";

export const PROJECTS = [
  {
    title: "coinz",
    stack: ["Vue", "Pinia", "Zod", "Bun", "ElysiaJS", "SQLite"],
    role: "Developer",
    description: [
      "Developed and maintained a full CRUD API for wallets and transactions using ElysiaJS, Prisma, and SQLite, ensuring relational integrity and cascading deletes.",
      "Designed and implemented frontend architecture using Vue Composition API with feature-based structure, integrating TanStack Query for caching and reactive data synchronization.",
      "Implemented transaction-bImproved data consistency by implementing based balance computation, deriving wallet balances from income, expense, and adjustment records with explicit audit tracking.",
      "Implemented pagination, sorting, debounced search, and analytics endpoints (aggregations and time-based insights) with flexible filtering.",
    ],
    year: "2025",
    summary: "A web application for managing personal finances.",
    github: "https://github.com/orayanics/coinz",
    image: COINZ_ASSETS.landing,
  },
  {
    title: "chronos",
    stack: ["TanStack Start (React)", "SQLite"],
    role: "Developer",
    description: [
      "Developed and maintained a full CRUD API for sessions, notes, and settings using ElysiaJS, Prisma, and SQLite, ensuring relational integrity and cascading deletes.",
      "Designed and implemented frontend architecture using React with feature-based structure, integrating TanStack Query for caching and reactive data synchronization.",
      "Implemented pagination, sorting, debounced search, and analytics endpoints (aggregations and time-based insights) with flexible filtering.",
    ],
    year: "2026",
    summary:
      "A pomodoro timer with task management and a image session sharing feature.",
    github: "https://github.com/orayanics/chronos",
    image: CHRONOS_ASSETS.app,
  },
  {
    title: "NMIXX Studio",
    stack: ["TanStack Start (React)", "Tailwind CSS"],
    role: "Developer",
    description: [
      "Developed and maintained a full CRUD API for managing music production projects, including tracks, samples, and project settings using ElysiaJS, Prisma, and SQLite.",
      "Designed and implemented frontend architecture using React with feature-based structure, integrating TanStack Query for caching and reactive data synchronization.",
      "Implemented pagination, sorting, debounced search, and analytics endpoints (aggregations and time-based insights) with flexible filtering.",
    ],
    year: "2026",
    summary:
      "A fan-made web application inspired by the K-pop group NMIXX, showcasing the group's members, tracks, and videography.",
    github: "https://github.com/orayanics/nmixx-studio",
    link: "https://nmixx-studio.up.railway.app/",
    video: NMIXX_ASSETS.landing,
  },
  {
    title: "TalkTherapy",
    stack: [
      "ElysiaJS",
      "Python",
      "TanStack Start (React)",
      "WebSockets",
      "SQLite",
    ],
    role: "Developer",
    description: [
      "Implemented a Phoneme Confidence test for patients that serves as self-assessment and speech exercise for therapy",
      "Integrated and implemented WebRTC for video conferencing and WebSocket for real-time notifications and messaging.",
      "Developed and implemented a full CRUD API, content CMS, authentication and authorization using ElysiaJS, Prisma, SQLite, and Better-Auth which follows a module-based structure for both backend and frontend for developer experience.",
      "Implemented RBAC and rate-limiting for backend endpoints and frontend views to ensure correct ownership and eliminate bypasses.",
    ],
    year: "2025",
    summary:
      "A telehealth platform designed for Speech-Language Pathologists (SLPs) and their patients, providing tools for remote therapy sessions, progress tracking, and communication.",
    full: "The platform includes features such as video conferencing, real-time messaging, and a phoneme confidence test for self-assessment and speech exercises.",
    github: "https://github.com/orayanics/talktherapy",
    image: TALKTHERAPY_ASSETS.landing,
  },
].reverse();
