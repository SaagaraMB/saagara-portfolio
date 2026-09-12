export const metadata = { title: "Contact — Saagara M B" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Contact
      </p>
      <h1 className="font-display text-3xl text-ink mb-6">Get in touch</h1>
      <p className="max-w-prose text-ink2 leading-relaxed mb-10">
        Happy to talk about robot learning, research, collaboration, or
        opportunities in physical AI.
      </p>

      <div className="space-y-4 max-w-prose">
        <ContactRow label="Email" value="saagaramb@gmail.com" href="mailto:saagaramb@gmail.com" />
        <ContactRow
          label="LinkedIn"
          value="linkedin.com/in/saagara-mb"
          href="https://www.linkedin.com/in/saagara-mb"
        />
        <ContactRow label="Location" value="Trivandrum, Kerala, India" />
      </div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-line bg-white/60">
      <span className="font-mono text-[11px] uppercase tracking-wide text-ink3 w-20 shrink-0">
        {label}
      </span>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="text-ink hover:text-accent transition-colors"
        >
          {value}
        </a>
      ) : (
        <span className="text-ink">{value}</span>
      )}
    </div>
  );
}
