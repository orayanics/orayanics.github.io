import type { Route } from "./+types/work.$slug";
import { Link, useParams } from "react-router";
import { WORK } from "~/config/work";

export function meta({ params }: Route.MetaArgs) {
  const item = WORK.find((work) => work.slug === params.slug);

  if (!item) {
    return [{ title: "Work Not Found" }];
  }

  return [
    { title: `${item.title} | Work` },
    { name: "description", content: item.summary },
  ];
}

export default function WorkRoute() {
  const { slug } = useParams();
  const item = WORK.find((work) => work.slug === slug);

  if (!item) {
    return (
      <main className="mx-auto max-w-screen md:max-w-6xl my-10 p-4 space-y-6">
        <p className="text-sm text-neutral-600">WORK NOT FOUND</p>
        <h1 className="font-black text-4xl md:text-6xl">Unknown role</h1>
        <p className="text-neutral-600">
          The work entry you are looking for does not exist.
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

  return (
    <main className="mx-auto max-w-screen md:max-w-6xl my-10 p-4 space-y-10">
      <div className="space-y-3 border-b border-neutral-300 pb-6">
        <div>
          <p className="text-xs text-neutral-600">WORK</p>
          <h1 className="font-black text-5xl md:text-7xl">{item.title}</h1>
        </div>

        <p className="text-neutral-600">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech, idx) => (
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
          {item.link && (
            <a
              href={item.link}
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
            <p className="text-xs text-neutral-600">WHAT HAPPENED</p>
            <p className="uppercase font-bold">EXPERIENCE</p>
          </div>
          {item.description?.length ? (
            <ul className="space-y-2 text-neutral-600 list-disc list-inside">
              {item.description.map((entry, index) => (
                <li key={index}>{entry}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="lg:col-span-5">
          {item.image && (
            <img
              src={item.image}
              alt={`${item.title} preview`}
              className="w-full h-auto rounded-lg border border-neutral-200"
            />
          )}
        </div>
      </div>
    </main>
  );
}
