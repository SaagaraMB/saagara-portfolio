export default function SiteFooter() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-site px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-ink3">
        <p>&copy; {new Date().getFullYear()} Saagara M B.</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/saagara-mb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:saagaramb@gmail.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
