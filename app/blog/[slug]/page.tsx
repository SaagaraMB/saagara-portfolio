import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getEntry } from "@/lib/content";
import MDXBody from "@/components/MDXBody";
import { format } from "date-fns";

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const entry = getEntry("blog", params.slug);
    return { title: `${entry.title} — Saagara M B` };
  } catch {
    return {};
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  let entry;
  try {
    entry = getEntry("blog", params.slug);
  } catch {
    notFound();
  }
  if (!entry) notFound();

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <Link
        href="/blog"
        className="text-sm text-ink3 hover:text-accent transition-colors"
      >
        ← All posts
      </Link>

      <div className="mt-6 mb-10">
        {entry.date && (
          <p className="font-mono text-xs text-ink3 mb-3">
            {format(new Date(entry.date), "MMM d, yyyy")}
          </p>
        )}
        <h1 className="font-display text-3xl text-ink">{entry.title}</h1>
      </div>

      <MDXBody source={entry.content} />
    </div>
  );
}
