import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export const metadata = { title: "Papers — Saagara M B" };

export default function PapersPage() {
  const papers = getAllEntries("papers");

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Papers as posters
      </p>
      <h1 className="font-display text-3xl text-ink mb-4">Research papers</h1>
      <p className="max-w-prose text-ink2 leading-relaxed mb-12">
        Each paper here is presented as a one-page poster — the core idea,
        method, architecture, results, and my own take — rather than a raw
        PDF link.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {papers.map((p) => (
          <Link
            key={p.slug}
            href={`/papers/${p.slug}`}
            className="block p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
          >
            <p className="font-mono text-[11px] text-ink3 mb-2">
              {[p.venue, p.year].filter(Boolean).join(" · ")}
            </p>
            <h2 className="font-display text-lg text-ink mb-2">{p.title}</h2>
            <p className="text-sm text-ink2 leading-relaxed">{p.summary}</p>
            {p.role && (
              <p className="mt-3 text-xs text-accent font-medium">
                {p.role}
              </p>
            )}
          </Link>
        ))}
        {papers.length === 0 && (
          <p className="text-ink3 text-sm">
            No papers yet — add a .mdx file under{" "}
            <code className="font-mono">content/papers/</code>.
          </p>
        )}
      </div>
    </div>
  );
}
