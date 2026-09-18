import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getEntry } from "@/lib/content";
import MDXBody from "@/components/MDXBody";

export function generateStaticParams() {
  return getAllSlugs("papers").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const entry = getEntry("papers", params.slug);
    return { title: `${entry.title} — Saagara M B` };
  } catch {
    return {};
  }
}

export default function PaperPage({ params }: { params: { slug: string } }) {
  let entry;
  try {
    entry = getEntry("papers", params.slug);
  } catch {
    notFound();
  }
  if (!entry) notFound();

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <Link
        href="/papers"
        className="text-sm text-ink3 hover:text-accent transition-colors"
      >
        ← All papers
      </Link>

      <div className="mt-6 mb-10 p-8 rounded-2xl border border-line bg-white/70">
        <p className="font-mono text-[11px] text-ink3 mb-2">
          {[entry.venue, entry.year].filter(Boolean).join(" · ")}
        </p>
        <h1 className="font-display text-2xl sm:text-3xl text-ink mb-3">
          {entry.title}
        </h1>
        {entry.summary && (
          <p className="max-w-prose text-ink2 leading-relaxed">
            {entry.summary}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {entry.role && (
            <p className="inline-block text-xs font-medium text-accent bg-accent-soft px-3 py-1 rounded-full">
              {entry.role}
            </p>
          )}
          {typeof entry.url === "string" && (
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              View Paper ↗
            </a>
          )}
          {typeof entry.pdf === "string" && (
            <a
              href={entry.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              Download PDF ↗
            </a>
          )}
        </div>
      </div>

      <MDXBody source={entry.content} />
    </div>
  );
}
