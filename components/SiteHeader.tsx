import Link from "next/link";

const NAV = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/papers", label: "Publications" },
  { href: "/blog", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div
        className="w-full bg-contain bg-no-repeat bg-right"
        style={{
          backgroundImage: "url(/images/linkedin-banner.png)",
          backgroundColor: "#eead45",
        }}
      >
        <div className="mx-auto max-w-site px-6 sm:px-8 h-36 sm:h-52 flex flex-col justify-between py-4">
          <nav className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-lg">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-ink font-medium hover:bg-white/50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="font-display text-2xl sm:text-4xl md:text-6xl leading-tight tracking-tight text-ink hover:text-accent transition-colors max-w-[65%] sm:max-w-none"
          >
            Saagara Manju Baiju
          </Link>
        </div>
      </div>
    </header>
  );
}
