import type { Route } from "./+types/project.$slug";
import { Link, useParams } from "react-router";
import { PROJECTS } from "~/config/projects";

export function meta({ params }: Route.MetaArgs) {
  const project = PROJECTS.find((item) => item.slug === params.slug);

  if (!project) {
    return [{ title: "Project Not Found" }];
  }

  return [
    { title: `${project.title} | Projects` },
    { name: "description", content: project.summary },
  ];
}

export default function ProjectRoute() {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-screen md:max-w-6xl my-10 p-4 space-y-6">
        <p className="text-sm text-neutral-600">PROJECT NOT FOUND</p>
        <h1 className="font-black text-4xl md:text-6xl">Unknown project</h1>
        <p className="text-neutral-600">
          The project you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="inline-block border border-neutral-300 rounded px-3 py-1 text-sm text-neutral-600 hover:bg-neutral-700 hover:text-white transition-colors"
        >
          Back home
        </Link>
      </main>
    );
  }

  const assetValues = project.assets ? Object.values(project.assets) : [];
  const videoValues = project.videos ? Object.values(project.videos) : [];
  const mediaValues = [...assetValues, ...videoValues].filter(
    (value) => value !== project.image && value !== project.video,
  );
  const isVideo = (src: string) =>
    src.endsWith(".webm") || src.endsWith(".mp4") || src.endsWith(".mov");

  return (
    <main className="mx-auto max-w-screen md:max-w-6xl my-10 p-4 space-y-10">
      <div className="space-y-3 border-b border-neutral-300 pb-6">
        <div>
          <p className="text-xs text-neutral-600">PROJECT</p>
          <h1 className="font-black text-5xl md:text-7xl">{project.title}</h1>
        </div>

        {project.overview && (
          <p className="text-neutral-600">{project.overview}</p>
        )}

        <div className="flex flex-wrap gap-2">
          <span className="text-neutral-600 text-xs py-0.5">Stack</span>{" "}
          {project.stack.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-neutral-600 border border-neutral-300 rounded px-1 py-0.5"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            to="/"
            className="border border-neutral-300 rounded px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-700 hover:text-white transition-colors"
          >
            Back home
          </Link>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-300 rounded px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-700 hover:text-white transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-neutral-300 rounded px-2 py-0.5 text-xs text-neutral-600 hover:bg-neutral-700 hover:text-white transition-colors"
            >
              View Live
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-4">
          <div>
            <p className="text-xs text-neutral-600">WHAT ABOUT IT?</p>
            <p className="uppercase font-bold">TAKEAWAYS</p>
          </div>

          {project.backend?.length && (
            <div>
              <p
                className="text-sm text-neutral-600
              border px-2 py-0.5 border-neutral-300 rounded inline-block"
              >
                Backend
              </p>

              <ul className="space-y-2 text-neutral-600 list-disc list-inside">
                {project.backend.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.frontend?.length && (
            <div>
              <p
                className="text-sm text-neutral-600
              border px-2 py-0.5 border-neutral-300 rounded inline-block"
              >
                Frontend
              </p>
              <ul className="space-y-2 text-neutral-600 list-disc list-inside">
                {project.frontend.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-4">
          {project.image && (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-auto rounded-lg border border-neutral-200"
            />
          )}
          {project.video && (
            <video
              src={project.video}
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
              className="w-full h-auto rounded-lg border border-neutral-200"
            />
          )}
          {mediaValues.map((src, index) =>
            isVideo(src) ? (
              <video
                key={src}
                src={src}
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className="w-full h-auto rounded-lg border border-neutral-200"
              />
            ) : (
              <img
                key={src}
                src={src}
                alt={`${project.title} preview ${index + 1}`}
                className="w-full h-auto rounded-lg border border-neutral-200"
              />
            ),
          )}
        </div>
      </div>
    </main>
  );
}
