import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getEntry } from "@/lib/content";
import MDXBody from "@/components/MDXBody";

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const entry = getEntry("projects", params.slug);
    return { title: `${entry.title} — Saagara M B` };
  } catch {
    return {};
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  let entry;
  try {
    entry = getEntry("projects", params.slug);
  } catch {
    notFound();
  }
  if (!entry) notFound();

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <Link
        href="/projects"
        className="text-sm text-ink3 hover:text-accent transition-colors"
      >
        ← All projects
      </Link>

      <div className="mt-6 mb-10">
        <div className="flex items-center flex-wrap gap-2 mb-3">
          <h1 className="font-display text-3xl text-ink">{entry.title}</h1>
          {entry.status && (
            <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent-soft text-accent">
              {entry.status}
            </span>
          )}
        </div>
        {entry.summary && (
          <p className="max-w-prose text-ink2 leading-relaxed">
            {entry.summary}
          </p>
        )}
        {Array.isArray(entry.tags) && entry.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((t: string) => (
              <span
                key={t}
                className="font-mono text-[11px] text-ink3 px-2 py-0.5 rounded-full bg-white border border-line"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      <MDXBody source={entry.content} />
    </div>
  );
}
