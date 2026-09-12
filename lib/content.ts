import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentKind = "projects" | "papers" | "blog";

export interface ContentMeta {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  status?: string; // e.g. "in progress", "complete"
  tags?: string[];
  order?: number;
  [key: string]: unknown;
}

export interface ContentEntry extends ContentMeta {
  content: string;
}

function dirFor(kind: ContentKind) {
  return path.join(CONTENT_DIR, kind);
}

export function getAllSlugs(kind: ContentKind): string[] {
  const dir = dirFor(kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export function getEntry(kind: ContentKind, slug: string): ContentEntry {
  const dir = dirFor(kind);
  const mdxPath = path.join(dir, `${slug}.mdx`);
  const mdPath = path.join(dir, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: (data.title as string) ?? slug,
    ...data,
    content,
  } as ContentEntry;
}

export function getAllEntries(kind: ContentKind): ContentEntry[] {
  return getAllSlugs(kind)
    .map((slug) => getEntry(kind, slug))
    .sort((a, b) => {
      // explicit order first, then date desc
      if (typeof a.order === "number" && typeof b.order === "number") {
        return a.order - b.order;
      }
      const ad = a.date ? new Date(a.date).getTime() : 0;
      const bd = b.date ? new Date(b.date).getTime() : 0;
      return bd - ad;
    });
}
