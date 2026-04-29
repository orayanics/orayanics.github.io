import "./App.css";

import Hero from "./views/landing/Hero";
import Contact from "./views/landing/Contact";
import Work from "./views/landing/Work";
import Experience from "./views/landing/Experience";

function App() {
  return (
    <>
      <main className="mx-auto max-w-screen md:max-w-6xl my-10 space-y-10">
        <Hero />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
