export const metadata = { title: "Contact — Saagara M B" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Contact
      </p>
      <h1 className="font-display text-3xl text-ink mb-6">Get in touch</h1>
      <p className="max-w-prose text-ink2 leading-relaxed">
        Interested in research, collaboration, or interesting problems in AI
        and robotics? Let&apos;s talk.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href="mailto:saagaramb@gmail.com"
          className="text-accent hover:underline"
        >
          saagaramb@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/saagara-mb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=IEDxJ34AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}
