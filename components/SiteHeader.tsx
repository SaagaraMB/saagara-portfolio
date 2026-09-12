import Link from "next/link";

const NAV = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Papers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-site px-6 sm:px-8 py-6 flex items-center justify-between flex-wrap gap-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-ink hover:text-accent transition-colors"
        >
          Saagara M B
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-ink2 hover:text-ink hover:bg-accent-soft transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
