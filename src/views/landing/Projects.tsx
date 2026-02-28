import { PROJECTS } from "../../config/projects";

export default function Projects() {
  return (
    <section
      className="min-h-screen mx-auto py-10 flex justify-center"
      id="projects"
    >
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-2 fade-up">
          <h2 className="font-mono text-center">Timeline of Projects</h2>
        </div>

        <div className="col-span-12 md:col-span-10">
          <div className="relative border-l-2 border-stone-200 ml-4 flex flex-col gap-12">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="relative pl-4 md:pl-8 fade-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* dot */}
                <span className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-stone-100 border-2 border-white ring-1 ring-stone-300" />

                {/* year */}
                <span className="text-xs font-mono font-semibold text-stone-400 uppercase tracking-widest">
                  {project.year}
                </span>

                {/* title */}
                <div className="flex items-center justify-between ">
                  <p className="font-bold text-stone-800">{project.title}</p>

                  <p className="font-mono tracking-tighter text-stone-500">
                    {project.role}
                  </p>
                </div>

                <p>
                  <span className="text-sm text-stone-600">
                    {project.summary}
                  </span>
                </p>

                {/* stack */}
                <p className="text-xs font-mono text-stone-400 mt-1 mb-3">
                  [{project.stack.join(", ")}]
                </p>

                {/* descriptions */}
                <ul className="list-disc list-inside text-sm text-stone-600 flex flex-col gap-1">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
