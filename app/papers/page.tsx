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
      <h1 className="font-display text-3xl text-ink mb-12">Research papers</h1>

      <div className="grid sm:grid-cols-2 gap-5">
        {papers.map((p) => (
          <div
            key={p.slug}
            className="p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
          >
            <p className="font-mono text-[11px] text-ink3 mb-2">
              {[p.venue, p.year].filter(Boolean).join(" · ")}
            </p>
            <Link href={`/papers/${p.slug}`} className="block">
              <h2 className="font-display text-lg text-ink mb-2 hover:text-accent transition-colors">
                {p.title}
              </h2>
            </Link>
            <p className="text-sm text-ink2 leading-relaxed">{p.summary}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {p.role && (
                <p className="text-xs text-accent font-medium">{p.role}</p>
              )}
              {typeof p.url === "string" && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  View Paper ↗
                </a>
              )}
              {typeof p.pdf === "string" && (
                <a
                  href={p.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  Download PDF ↗
                </a>
              )}
            </div>
          </div>
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
