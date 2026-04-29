import Hero from "~/landing/Hero";
import Contact from "~/landing/Contact";
import Work from "~/landing/Work";
import Experience from "~/landing/Experience";

export function Welcome() {
  return (
    <main className="mx-auto max-w-screen md:max-w-6xl my-10 space-y-10">
      <Hero />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
