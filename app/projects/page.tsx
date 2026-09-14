import Link from "next/link";
import { getEntry } from "@/lib/content";

export const metadata = { title: "Projects — Saagara M B" };

export default function ProjectsPage() {
  const soProject = getEntry("projects", "pick-and-place-so-101");
  const craterProject = getEntry("projects", "lunar-crater-pipeline");
  const bokehPaper = getEntry("papers", "bokeh-eccv2020");

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-10">
        Projects
      </p>

      {/* Physical AI */}
      <section className="mb-14">
        <h2 className="font-display text-xl text-ink mb-5">Physical AI</h2>
        <div className="space-y-5">
          <ProjectCard entry={soProject} />
        </div>
      </section>

      {/* Computer Vision */}
      <section>
        <h2 className="font-display text-xl text-ink mb-5">Computer Vision</h2>
        <div className="space-y-5">
          <div className="p-6 rounded-2xl border border-line bg-white/60">
            <h3 className="font-display text-xl text-ink mb-2">
              Low-Light Face Detection
            </h3>
            <p className="text-ink2 leading-relaxed">
              A DETR-based object detection model for low-light face
              detection, developed while competing in international computer
              vision challenges at ECCV 2020 and CVPR 2021.
            </p>
          </div>
          <Link
            href={`/papers/${bokehPaper.slug}`}
            className="block p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
          >
            <h3 className="font-display text-xl text-ink mb-2">
              {bokehPaper.title}
            </h3>
            <p className="text-ink2 leading-relaxed">{bokehPaper.summary}</p>
          </Link>
          <ProjectCard entry={craterProject} />
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ entry }: { entry: any }) {
  return (
    <Link
      href={`/projects/${entry.slug}`}
      className="block p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
    >
      <div className="flex items-center flex-wrap gap-2 mb-2">
        <h3 className="font-display text-xl text-ink">{entry.title}</h3>
        {entry.status && (
          <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent-soft text-accent">
            {entry.status}
          </span>
        )}
      </div>
      <p className="text-ink2 leading-relaxed">{entry.summary}</p>
      {Array.isArray(entry.tags) && entry.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {entry.tags.map((t: string) => (
            <span
              key={t}
              className="font-mono text-[11px] text-ink3 px-2 py-0.5 rounded-full bg-paper border border-line"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
