import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nicole Oraya" },
    { name: "description", content: "Web Developer - Nicole Oraya Portfolio" },
  ];
}

export default function Home() {
  return <Welcome />;
}
