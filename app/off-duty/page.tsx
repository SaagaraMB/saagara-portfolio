export const metadata = { title: "Off Duty — Saagara M B" };

export default function OffDutyPage() {
  return (
    <div className="mx-auto max-w-site px-6 sm:px-8 py-14">
      <p className="font-mono text-xs tracking-widest uppercase text-accent mb-3">
        Off Duty
      </p>
      <h1 className="font-display text-3xl text-ink mb-6">Beyond the work</h1>
      <p className="max-w-prose text-ink2 leading-relaxed mb-12">
        Art, poetry, and music alongside the research.
      </p>

      {/* Artwork */}
      <section className="pb-14 border-t border-line pt-10">
        <h2 className="font-display text-xl text-ink mb-5">Artwork</h2>
        <a
          href="https://www.instagram.com/swatchandsketch/"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-6 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors max-w-md"
        >
          <h3 className="font-display text-lg text-ink mb-2">
            Swatch & Sketch
          </h3>
          <p className="text-sm text-ink2 leading-relaxed">
            My Instagram page for drawings and sketches.
          </p>
          <p className="mt-3 text-sm text-accent">@swatchandsketch ↗</p>
        </a>
      </section>

      {/* Poems */}
      <section className="pb-14 border-t border-line pt-10">
        <h2 className="font-display text-xl text-ink mb-5">Poems</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          <PlaceholderCard
            title="English poems"
            body="A collection of poems written in English."
          />
          <PlaceholderCard
            title="Malayalam poems"
            body="Poems written in Malayalam."
          />
        </div>
      </section>

      {/* Music */}
      <section className="pb-14 border-t border-line pt-10">
        <h2 className="font-display text-xl text-ink mb-5">Music</h2>
        <PlaceholderCard title="A song in Tamil" body="A song, in Tamil." />
      </section>
    </div>
  );
}

function PlaceholderCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/60 border border-line max-w-md">
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-display text-base text-ink">{title}</h3>
        <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent-soft text-accent">
          Coming soon
        </span>
      </div>
      <p className="text-sm text-ink2 leading-relaxed">{body}</p>
    </div>
  );
}
