import Link from "next/link";
import { getAllEntries } from "@/lib/content";
import { format } from "date-fns";

export const metadata = { title: "Blog — Saagara M B" };

export default function BlogPage() {
  const posts = getAllEntries("blog");

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Blog
      </p>
      <h1 className="font-display text-3xl text-ink mb-4">
        Notes from the work
      </h1>
      <p className="max-w-prose text-ink2 leading-relaxed mb-12">
        Project documentation, experiment write-ups, technical concepts, and
        paper analyses — as they happen, not polished after the fact.
      </p>

      <div className="divide-y divide-line">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block py-6 group"
          >
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-display text-lg text-ink group-hover:text-accent transition-colors">
                {p.title}
              </h2>
              {p.date && (
                <p className="font-mono text-xs text-ink3 shrink-0">
                  {format(new Date(p.date), "MMM d, yyyy")}
                </p>
              )}
            </div>
            {p.summary && (
              <p className="text-sm text-ink2 mt-2 leading-relaxed">
                {p.summary}
              </p>
            )}
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="text-ink3 text-sm py-6">
            No posts yet — add a .mdx file under{" "}
            <code className="font-mono">content/blog/</code>.
          </p>
        )}
      </div>
    </div>
  );
}
