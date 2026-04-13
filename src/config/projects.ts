export const PROJECTS = [
  {
    title: "UST-CRS Fil-Pat",
    stack: ["NextJS", "Prisma", "SQLite", "WebSocket", "Electron"],
    role: "Developer",
    description: [
      "Bootstrapped using Next.js (routing), MUI, and Tailwind CSS.",
      "Implemented session management system with QR code-based room entry and PDF export functionality.",
      "Implemented real-time bidirectional communication via WebSocket for live patient-clinician session handling.",
    ],
    year: "2025",
    summary:
      "A Filipino Picture Articulation Test (Fil-Pat) application for speech therapy sessions between clinicians and patients.",
  },
  {
    title: "Coinz",
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
  },
  {
    title: "TalkTherapy",
    stack: [
      "Bun",
      "ElysiaJS",
      "TanStack Start",
      "WebSocket",
      "WebRTC",
      "SQLite",
      "Zod",
      "Better-Auth",
    ],
    role: "Developer",
    description: [
      "Developed and implemented a full CRUD API, content CMS, authentication and authorization using ElysiaJS, Prisma, SQLite, and Better-Auth which follows a module-based structure for both backend and frontend for developer experience.",
      "Implemented RBAC and rate-limiting for backend endpoints and frontend views to ensure correct ownership and eliminate bypasses.",
      "Integrated and implemented WebRTC for video conferencing and WebSocket for real-time notifications and messaging.",
    ],
    year: "2025",
    summary:
      "A web application for online speech therapy sessions between clinicians and patients.",
  },
].reverse();
