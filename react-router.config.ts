import type { Config } from "@react-router/dev/config";
import { PROJECTS } from "./app/config/projects";
import { WORK } from "./app/config/work";

export default {
  // Config options...
  // GitHub Pages is static hosting, so pre-render all known paths.
  ssr: false,
  prerender: [
    "/",
    ...PROJECTS.map((project) => `/project/${project.slug}`),
    ...WORK.map((entry) => `/work/${entry.slug}`),
  ],
} satisfies Config;
