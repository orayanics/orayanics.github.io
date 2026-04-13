import "./App.css";

import Hero from "./views/landing/Hero";
import Projects from "./views/landing/Projects";
import Contact from "./views/landing/Contact";
import Work from "./views/landing/Work";

function App() {
  return (
    <>
      <main className="mx-auto max-w-screen md:max-w-6xl border border-stone-200 border-y-0 [&>section]:px-6 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-stone-200">
        <Hero />
        <Work />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
