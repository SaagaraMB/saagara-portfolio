import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export const metadata = { title: "Projects — Saagara M B" };

export default function ProjectsPage() {
  const projects = getAllEntries("projects");

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Projects
      </p>
      <h1 className="font-display text-3xl text-ink mb-4">
        Hands-on robot-learning work
      </h1>
      <p className="max-w-prose text-ink2 leading-relaxed mb-12">
        A small number of rigorous projects rather than many shallow ones —
        each with real hardware, honest evaluation, and a written account of
        what worked and what didn&apos;t. Updated as work progresses.
      </p>

      <div className="space-y-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
          >
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <h2 className="font-display text-xl text-ink">{p.title}</h2>
              {p.status && (
                <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                  {p.status}
                </span>
              )}
            </div>
            <p className="text-ink2 leading-relaxed">{p.summary}</p>
            {Array.isArray(p.tags) && p.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t: string) => (
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
        ))}
        {projects.length === 0 && (
          <p className="text-ink3 text-sm">
            No projects yet — add a .mdx file under{" "}
            <code className="font-mono">content/projects/</code>.
          </p>
        )}
      </div>
    </div>
  );
}
