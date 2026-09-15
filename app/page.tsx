import Link from "next/link";
import { getEntry } from "@/lib/content";

export default function HomePage() {
  const pipelineProject = getEntry("projects", "lunar-crater-pipeline");
  const pipelinePaper = getEntry("papers", "lunar-craters");
  const bokehPaper = getEntry("papers", "bokeh-eccv2020");

  return (
    <div className="mx-auto max-w-site px-6 sm:px-8">
      {/* Hero */}
      <section className="pt-14 sm:pt-20 pb-16">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 sm:items-start">
          <img
            src="/images/saagara-headshot.jpg"
            alt="Saagara Manju Baiju"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border border-line shrink-0"
          />
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-accent mb-4">
              AI Researcher
            </p>
            <h1 className="font-display text-2xl sm:text-3xl leading-tight text-ink max-w-2xl">
              Physical Intelligence · Computer Vision · Robot Learning
            </h1>
            <p className="mt-6 max-w-prose text-ink2 leading-relaxed">
              Building physical AI systems that can perceive, learn, reason,
              and act in the physical world — robots that can be absolutely
              delightful and obviously helpful.
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
          </div>
        </div>
      </section>

      {/* Currently exploring */}
      <section className="pb-16 border-t border-line pt-12">
        <h2 className="font-display text-xl text-ink mb-5">
          Currently exploring
        </h2>
        <TagList
          tags={[
            "Physical Intelligence",
            "Robot Learning",
            "World Models",
            "World Action Models",
            "Vision-Language-Action Models",
            "Deep Reinforcement Learning",
            "Continual Learning",
          ]}
        />
        <div className="mt-6 p-5 rounded-2xl bg-white/60 border border-line">
          <h3 className="font-display text-base text-ink mb-2">
            SO-101 Robot Learning
          </h3>
          <p className="text-sm text-ink2 leading-relaxed">
            Investigating imitation learning and vision-language-action
            policies for real-world manipulation.
          </p>
        </div>
      </section>

      {/* Featured research */}
      <section className="pb-16 border-t border-line pt-12">
        <h2 className="font-display text-xl text-ink mb-5">
          Featured research
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl border border-line bg-white/60">
            <h3 className="font-display text-lg text-ink mb-2">
              {pipelineProject.title}
            </h3>
            <p className="text-sm text-ink2 leading-relaxed mb-4">
              {pipelineProject.summary}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/projects/${pipelineProject.slug}`}
                className="text-accent hover:underline"
              >
                Read Project
              </Link>
              <Link
                href={`/papers/${pipelinePaper.slug}`}
                className="text-accent hover:underline"
              >
                Paper
              </Link>
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-line bg-white/60">
            <h3 className="font-display text-lg text-ink mb-2">
              {bokehPaper.title}
            </h3>
            <p className="text-sm text-ink2 leading-relaxed mb-4">
              {bokehPaper.summary}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link
                href={`/papers/${bokehPaper.slug}`}
                className="text-accent hover:underline"
              >
                Read Paper
              </Link>
              {typeof bokehPaper.url === "string" && (
                <a
                  href={bokehPaper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  View Paper ↗
                </a>
              )}
            </div>
          </div>
          <div className="p-6 rounded-2xl border border-line bg-white/60">
            <h3 className="font-display text-lg text-ink mb-2">
              Low-Light Face Detection
            </h3>
            <p className="text-sm text-ink2 leading-relaxed mb-4">
              Exploring robust object detection under challenging illumination
              conditions using transformer-based computer vision models.
            </p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="pb-16 border-t border-line pt-12">
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="font-display text-xl text-ink">Writing</h2>
          <Link href="/blog" className="text-sm text-accent hover:underline">
            View all writing →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <WritingCard
            title="Understanding World Models"
            body="What are world models, what do they actually learn, and why might they matter for physical intelligence?"
          />
          <WritingCard
            title="Learning for Physical Intelligence"
            body="Notes on robot learning, reinforcement learning, vision-language-action models and embodied intelligence."
          />
        </div>
      </section>

      {/* About */}
      <section className="pb-16 border-t border-line pt-12">
        <h2 className="font-display text-xl text-ink mb-5">About</h2>
        <div className="max-w-prose space-y-4 text-ink2 leading-relaxed">
          <p>
            I am an AI researcher interested in physical intelligence — how
            machines can learn to perceive, reason about, and act in the
            physical world.
          </p>
          <p>
            My background is in applied electronics and instrumentation
            engineering, software engineering, and computer vision research.
          </p>
          <p>
            I am currently exploring robot learning, world models,
            reinforcement learning, and generalization in embodied systems.
          </p>
        </div>

        <h3 className="font-display text-lg text-ink mt-10 mb-4">
          Long-term research interest
        </h3>
        <div className="max-w-prose space-y-4 text-ink2 leading-relaxed">
          <p>
            My long-term research interest is in building general-purpose
            intelligent robots that can learn, adapt, and operate in the
            physical world, while helping make capable robots accessible and
            useful to everyone.
          </p>
          <p>
            I am particularly interested in the learning, reasoning, and
            adaptation mechanisms that could enable robots to become more
            capable, flexible, and autonomous across tasks, environments, and
            embodiments.
          </p>
        </div>

        <h3 className="font-display text-lg text-ink mt-10 mb-4">
          Research interests
        </h3>
        <TagList
          tags={[
            "Physical Intelligence",
            "Robot Learning",
            "World Models",
            "Imitation Learning",
            "Reinforcement Learning",
            "Computer Vision",
            "Continual Learning",
          ]}
        />
      </section>

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
            where={
              <>
                University of Kerala, Geology Department (under{" "}
                <a
                  href="https://in.linkedin.com/in/sajinkumar-ks-66223768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-accent"
                >
                  Dr. Sajin Kumar K S
                </a>
                )
              </>
            }
            body="Designed and led an end-to-end ML pipeline classifying 1.3M+ lunar impact craters by age — supervised classification at 95.6% accuracy, followed by ensemble clustering into age-based groups. First-author paper accepted at ICAITA 2026, but not published — unable to attend the conference in person to present it; currently preparing to resubmit to a new venue."
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
            where={
              <>
                College of Engineering, Trivandrum (under{" "}
                <a
                  href="https://www.linkedin.com/in/jiji-c-v-4ab00a40/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-accent"
                >
                  Dr. Jiji C V
                </a>
                )
              </>
            }
            body="Built a DETR-based object detection model for low-light face detection; competed in international CV challenges at ECCV 2020 and CVPR 2021."
          />
        </div>
      </section>
    </div>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="font-mono text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function WritingCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-5 rounded-2xl bg-white/60 border border-line">
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

function TimelineRow({
  when,
  what,
  where,
  body,
}: {
  when: string;
  what: string;
  where: React.ReactNode;
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
