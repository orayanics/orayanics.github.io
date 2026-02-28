import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <section
      className="text-stone-800 font-medium tracking-normal text-left mx-auto my-6 fade-in"
      id="contact"
    >
      <h2 className="text-[2rem] leading-[1.1]">
        Interested in working together?
      </h2>
      <p className="md:text-lg text-base mt-3">
        Contact me at <span className="font-mono">orayanics@gmail.com</span>
      </p>

      <div className="flex gap-5 mt-5">
        <a href="https://linkedin.com/in/nicole-oraya-8b3146261">
          <AiFillLinkedin size={"2em"} />
        </a>
        <a href="https://github.com/orayanics">
          <AiFillGithub size={"2em"} />
        </a>
      </div>
    </section>
  );
}
