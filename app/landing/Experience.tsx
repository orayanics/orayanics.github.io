import { Link } from "react-router";
import { WORK } from "~/config/work";

export default function Experience() {
  return (
    <section className="lg:p-0 p-4 space-y-10" id="experience">
      <div>
        <p className="text-xs text-neutral-600">PROFESSIONAL EXPERIENCE</p>
        <p className="font-black text-5xl md:text-7xl">WORK</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {WORK.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-300
            rounded-lg
          grid grid-cols-12"
          >
            <div
              className="col-span-12 md:col-span-5
            md:order-1 order-2
            p-6"
            >
              <p className="font-bold text-sm text-neutral-600 mb-4">
                {project.year}
              </p>
              <h2 className="font-bold text-5xl tracking-wide mb-2 wrap-break-word">
                {project.title}
              </h2>

              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono text-neutral-600 mr-2
                  border border-neutral-300 rounded px-1 py-0.5 mb-2 inline-block"
                >
                  {tech}
                </span>
              ))}

              <p className="text-neutral-600 mb-4">{project.summary}</p>
              <div className="space-x-2">
                <Link
                  to={`/work/${project.slug}`}
                  className="hover:bg-neutral-700 hover:text-white transition-colors
                border border-neutral-300 rounded px-2 py-0.5 text-xs text-neutral-600"
                >
                  Read More
                </Link>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-neutral-700 hover:text-white transition-colors
                border border-neutral-300 rounded px-2 py-0.5 text-xs text-neutral-600"
                >
                  View Live
                </a>
              </div>
            </div>

            <div
              className="col-span-12 md:col-span-7
            md:order-2 order-1 relative"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div
                  className="absolute inset-0
                bg-black mix-blend-hue
                hover:bg-transparent
                transition-all duration-300
                rounded-t-lg md:rounded-t-none
                rounded-r-none md:rounded-r-lg
                flex items-center justify-center"
                ></div>
              </a>

              {project.image && (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-auto
                  rounded-t-lg md:rounded-t-none
                  rounded-r-none md:rounded-r-lg"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
