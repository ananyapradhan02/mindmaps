import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* ─── HEADER ─── */}
      <header className="mb-16">
        <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-normal text-text mb-3 leading-snug">
          Mind Maps Collective{" "}
          <span className="inline-block">🌳🗺️</span>
        </h1>
        <p className="text-text-muted leading-relaxed text-[15px]">
          The branches of this mind map are still growing — a living archive of
          culture, creativity, and the systems we build (and live inside).
        </p>
      </header>

      {/* ─── THE MAP: Content Categories ─── */}
      <section className="mb-16">
        <ul className="space-y-3 text-[15px]">
          <li>
            <span className="mr-2">🌱</span>
            <Link href="/essays" className="font-medium">essays</Link>
            <span className="text-text-muted"> — long-form storytelling (slow, layered, human)</span>
          </li>
          <li>
            <span className="mr-2">🌿</span>
            <Link href="/notes" className="font-medium">notes</Link>
            <span className="text-text-muted"> — half-formed ideas, field observations, drafts</span>
          </li>
          <li>
            <span className="mr-2">🌳</span>
            <Link href="/explainers" className="font-medium">explainers</Link>
            <span className="text-text-muted"> — making complex systems legible</span>
          </li>
          <li>
            <span className="mr-2">🍃</span>
            <Link href="/experiments" className="font-medium">experiments</Link>
            <span className="text-text-muted"> — playful prototypes and formats</span>
          </li>
          <li>
            <span className="mr-2">🎙️</span>
            <Link href="/podcast" className="font-medium">podcast</Link>
            <span className="text-text-muted"> — long conversations with practitioners about craft</span>
          </li>
          <li>
            <span className="mr-2">🎬</span>
            <Link href="/new-media" className="font-medium">new media</Link>
            <span className="text-text-muted"> — writing, directing, production, visual storytelling</span>
          </li>
        </ul>
        <p className="mt-5 text-text-faint text-sm">
          Updated weekly. Written slowly. (With tea. ☕️)
        </p>
      </section>

      {/* ─── WHY THIS EXISTS ─── */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-serif)] text-xl md:text-2xl font-normal text-text mb-4">
          Why this exists
        </h2>
        <div className="space-y-4 text-[15px] text-text-muted leading-relaxed">
          <p>
            I'm interested in the overlap of{" "}
            <strong className="text-text font-medium">technology × culture × meaning</strong>{" "}
            and how we tell better stories about people and technology we don't
            immediately understand — to cultivate curiosity.
          </p>
          <p>
            This is where I practice the kind of writing I want to do more of:
            narrative + research, crisp explainers, and honest "building in public"
            notes — influenced by thoughtful internet gardens and longform newsletters.
          </p>
          <p>
            The dancer and the engineer practice the same thing under different names.
            Repetition. Constraint. The long negotiation between intention and material.
            This archive is an attempt to draw the connections that already exist but
            aren't yet visible.
          </p>
        </div>
      </section>

      {/* ─── NOW ─── */}
      <section className="mb-16 border-l-2 border-border pl-5">
        <h2 className="font-[family-name:var(--font-serif)] text-xl font-normal text-text mb-4">
          Now
        </h2>
        <ul className="space-y-2 text-[15px] text-text-muted">
          <li>
            <span className="mr-2">🌾</span>
            Building this repository into a home for durable writing (to consume less scroll-food).
          </li>
          <li>
            <span className="mr-2">🧭</span>
            Writing toward culture, creativity, and the future of work & growth.
          </li>
          <li>
            <span className="mr-2">🧰</span>
            Running small experiments: formats, outlines, and "explain it like a map."
          </li>
          <li>
            <span className="mr-2">🎬</span>
            Developing new media projects — writing and directing short-form pieces.
          </li>
          <li>
            <span className="mr-2">🎙️</span>
            Producing conversations with people who defy neat categories.
          </li>
        </ul>
      </section>

      {/* ─── WHAT YOU'LL FIND HERE ─── */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-serif)] text-xl font-normal text-text mb-4">
          What you'll find here (soon)
        </h2>
        <ul className="space-y-2 text-[15px] text-text-muted">
          <li><strong className="text-text font-medium">Portrait essays</strong> — people who defy neat categories</li>
          <li><strong className="text-text font-medium">Public guides</strong> — translating hidden knowledge into usable systems</li>
          <li><strong className="text-text font-medium">PMM notebooks</strong> — positioning, narrative, distribution, growth</li>
          <li><strong className="text-text font-medium">AI & systems</strong> — responsible storytelling about new tools</li>
          <li><strong className="text-text font-medium">Production notes</strong> — behind the writing, directing, and making</li>
          <li><strong className="text-text font-medium">Podcast episodes</strong> — conversations across disciplines</li>
        </ul>
      </section>

      {/* ─── WORKING MEMORY ─── */}
      <section className="mb-16 bg-surface rounded-lg p-6">
        <h2 className="font-[family-name:var(--font-serif)] text-xl font-normal text-text mb-3">
          Working Memory
        </h2>
        <p className="text-[15px] text-text-muted leading-relaxed mb-4">
          A structured knowledge repository — exploring how the best companies
          build writing culture as infrastructure. The tech/PMM arm of this
          archive, in the tradition of great company handbooks and{" "}
          <a href="https://koolaidfactory.com" target="_blank" rel="noopener">
            The Kool-Aid Factory
          </a>.
        </p>
        <Link
          href="/working-memory"
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          Browse Issue 01: Repetition →
        </Link>
      </section>

      {/* ─── WORK ─── */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-serif)] text-xl font-normal text-text mb-4">
          Work, too
        </h2>
        <div className="space-y-4 text-[15px] text-text-muted leading-relaxed">
          <p>
            I'm a creative operator who likes shipping end-to-end — from research
            and insight, to narrative and conception, to finally distribute and
            iterate. I care about craft, and I care about work that actually moves
            people: clearer decisions, better products, and fewer sharp edges for
            the humans using them.
          </p>
          <p>
            If you're a team building thoughtful products (especially AI-native)
            and you need: a sharp narrative, a clear explainer, a content system
            that compounds, or a podcast/new media piece that people actually feel
            something watching — say hi! 🌱
          </p>
        </div>
      </section>

      {/* ─── FIND ME ─── */}
      <footer className="pt-8 border-t border-border">
        <h2 className="font-[family-name:var(--font-serif)] text-lg font-normal text-text mb-3">
          Find me
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] mb-8">
          <a href="https://linkedin.com/in/ananya-pradhan" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener">
            Twitter / X
          </a>
          <a href="https://substack.com/" target="_blank" rel="noopener">
            Substack
          </a>
          <a href="mailto:ananyapradhan02@gmail.com">
            Email
          </a>
        </div>
        <p className="text-text-faint text-sm">
          🌿 Mind Maps Collective — an archive in motion.
        </p>
      </footer>
    </div>
  );
}
