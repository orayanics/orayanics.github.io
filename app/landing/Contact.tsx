import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  return (
    <section className="lg:p-0 p-4 fade-in" id="contact">
      <p className="text-xs text-neutral-600">GET IN TOUCH</p>
      <p className="font-black text-5xl md:text-7xl">CONTACTS</p>

      <p className="md:text-lg text-base mt-1">
        <span className="font-mono">orayanics@gmail.com</span>
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
