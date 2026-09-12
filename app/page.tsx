import Link from "next/link";
import { getAllEntries } from "@/lib/content";

export default function HomePage() {
  const projects = getAllEntries("projects").slice(0, 2);

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8">
      {/* Hero */}
      <section className="pt-14 sm:pt-20 pb-16">
        <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
          Physical AI &amp; Robot Learning
        </p>
        <h1 className="font-display text-3xl sm:text-4xl leading-tight text-ink max-w-2xl">
          I build and evaluate robot-learning systems — and write about the
          research behind them.
        </h1>
        <p className="mt-6 max-w-prose text-ink2 leading-relaxed">
          I&apos;m an ML researcher and engineer transitioning from enterprise
          software into embodied AI and robot learning. My background spans
          computer vision research, applied ML for scientific data, and
          production software engineering — and I&apos;m currently building a
          hands-on robot-manipulation portfolio: collecting teleoperated
          demonstrations on a SO-101 arm, fine-tuning and comparing
          vision-language-action policies, and extending the strongest one
          with reinforcement learning.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-medium hover:bg-accent transition-colors"
          >
            See current projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full border border-line text-sm font-medium text-ink hover:border-accent hover:text-accent transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Technical interests */}
      <section className="pb-16 border-t border-line pt-12">
        <h2 className="font-display text-xl text-ink mb-5">
          What I&apos;m focused on
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <InterestCard
            title="Robot manipulation"
            body="Teleoperated data collection and imitation learning (ACT, SmolVLA) on real hardware, with honest, reproducible evaluation."
          />
          <InterestCard
            title="Policy refinement with RL"
            body="Extending fine-tuned policies with reinforcement learning — compressed-embedding tokens, sparse reward, corrective intervention."
          />
          <InterestCard
            title="Computer vision research"
            body="Detection and representation learning — from DETR-based low-light face detection to ML pipelines for scientific imagery."
          />
        </div>
      </section>

      {/* Currently building */}
      {projects.length > 0 && (
        <section className="pb-16 border-t border-line pt-12">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display text-xl text-ink">
              Currently building
            </h2>
            <Link
              href="/projects"
              className="text-sm text-accent hover:underline"
            >
              All projects →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block p-5 rounded-2xl border border-line bg-white/60 hover:border-accent transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-lg text-ink">
                    {p.title}
                  </h3>
                  {p.status && (
                    <span className="font-mono text-[10px] tracking-wide uppercase px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                      {p.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-ink2 leading-relaxed">
                  {p.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Background */}
      <section className="pb-24 border-t border-line pt-12">
        <h2 className="font-display text-xl text-ink mb-6">Background</h2>
        <div className="space-y-6">
          <TimelineRow
            when="Sept 2026 — Present"
            what="Career transition into physical AI"
            where="Self-directed"
            body="Full-time, focused work on robot learning fundamentals and a small number of rigorous, well-documented hardware projects."
          />
          <TimelineRow
            when="Feb 2024 — Present"
            what="Research Assistant"
            where="University of Kerala, Geology Department"
            body="Designed and led an end-to-end ML pipeline classifying 1.3M+ lunar impact craters by age — supervised classification at 95.6% accuracy, followed by ensemble clustering into age-based groups. First-author paper submitted to IAAI 2026."
          />
          <TimelineRow
            when="Aug 2021 — Dec 2023"
            what="Applications Engineer"
            where="Oracle India"
            body="Built and shipped web and mobile UI features for enterprise data-integration workflows; authored APIs and test automation to improve release reliability."
          />
          <TimelineRow
            when="Jun 2019 — Jul 2021"
            what="Undergraduate Researcher, Computer Vision Lab"
            where="College of Engineering, Trivandrum (under Dr. Jiji C V)"
            body="Built a DETR-based object detection model for low-light face detection; competed in international CV challenges at ECCV 2020 and CVPR 2021."
          />
        </div>
      </section>
    </div>
  );
}

function InterestCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/60 border border-line">
      <h3 className="font-display text-base text-ink mb-2">{title}</h3>
      <p className="text-sm text-ink2 leading-relaxed">{body}</p>
    </div>
  );
}

function TimelineRow({
  when,
  what,
  where,
  body,
}: {
  when: string;
  what: string;
  where: string;
  body: string;
}) {
  return (
    <div className="grid sm:grid-cols-[10rem_1fr] gap-2 sm:gap-6">
      <p className="font-mono text-xs text-ink3 pt-1">{when}</p>
      <div className="pb-2 border-b border-line/70">
        <p className="text-ink font-medium">
          {what} <span className="text-ink3 font-normal">· {where}</span>
        </p>
        <p className="text-sm text-ink2 mt-1.5 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
