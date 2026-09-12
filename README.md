# Saagara M B — Portfolio

A minimal, content-driven portfolio built with Next.js (App Router) +
Tailwind CSS + MDX. Sections: About (home page), Projects, Papers (as
one-page posters), Blog, and Contact.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding content

Content lives as plain `.mdx` files with frontmatter — no code changes or
redeploy logic needed, just add a file and push.

- **Projects** — add a file to `content/projects/your-slug.mdx`:

  ```md
  ---
  title: "Project Name"
  summary: "One-sentence summary shown in the list."
  status: "In progress"   # or "Complete", "Upcoming", etc.
  date: "2026-09-12"
  order: 1                 # lower = appears first
  tags: ["Tag1", "Tag2"]
  ---

  ## Goal
  ...
  ```

- **Papers** — add a file to `content/papers/your-slug.mdx`:

  ```md
  ---
  title: "Paper Title"
  summary: "One-sentence summary."
  venue: "Conference/Journal, Year"
  year: "2026"
  role: "First author"     # or "Co-author", etc.
  date: "2026-08-01"
  ---

  ## Core idea
  ## Methodology
  ## Architecture
  ## Results
  ## My take
  ```

- **Blog posts** — add a file to `content/blog/your-slug.mdx`:

  ```md
  ---
  title: "Post Title"
  summary: "One-sentence summary."
  date: "2026-09-12"
  ---

  Post content in Markdown/MDX.
  ```

The slug (URL path) is just the filename without `.mdx`. Lists are sorted
by `order` when present, otherwise by `date` (newest first).

## Design system

- Colors, fonts, and spacing live in `tailwind.config.js` (see the
  `paper`/`ink`/`accent` color tokens) and `app/globals.css`.
- Fonts: Fraunces (display/headings), Source Sans 3 (body), IBM Plex Mono
  (labels/metadata) — loaded via `next/font/google` in `app/layout.tsx`.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repository,
   and click Deploy — no configuration needed, Vercel auto-detects
   Next.js.
3. For a custom domain, add it under the Vercel project's Settings →
   Domains.

Every future push to the repo's default branch redeploys automatically,
and every pull request gets its own preview URL.
