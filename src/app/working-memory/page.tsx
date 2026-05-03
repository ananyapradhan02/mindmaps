import Link from "next/link";

const entries = [
  {
    id: "001",
    title: "Writing Culture Is Infrastructure",
    description: "Why the companies that write well are the companies that compound. The argument is civilisational before it is operational.",
    type: "flagship",
    status: "live",
  },
  {
    id: "002",
    title: "The Memo as Architecture",
    description: "How Stripe, GitLab, and Linear turned documents into load-bearing walls.",
    type: "case study",
    status: "draft",
  },
  {
    id: "003",
    title: "What Gets Written Down Compounds",
    description: "A fieldnote on why most companies discuss writing culture and practice it nowhere.",
    type: "fieldnote",
    status: "draft",
  },
  {
    id: "004",
    title: "The Kool-Aid Problem",
    description: "When internal knowledge becomes ideology — and when it becomes something rarer.",
    type: "essay",
    status: "upcoming",
  },
  {
    id: "005",
    title: "Brie Wolfson and the Architecture of Belonging",
    description: "On building employee experience as a design discipline.",
    type: "interview",
    status: "upcoming",
  },
];

export default function WorkingMemory() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      {/* ─── BACK ─── */}
      <Link
        href="/"
        className="text-sm text-text-faint hover:text-text-muted mb-12 inline-block"
      >
        ← back to the map
      </Link>

      {/* ─── HEADER ─── */}
      <header className="mb-12">
        <p className="text-text-faint text-xs tracking-widest uppercase mb-3">
          mindmaps collective / archive
        </p>
        <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-normal text-text mb-4 leading-snug">
          Working Memory
        </h1>
        <p className="text-text-muted text-[15px] leading-relaxed">
          A structured knowledge repository exploring how the best companies
          build writing culture as infrastructure — in the tradition of{" "}
          <a href="https://koolaidfactory.com" target="_blank" rel="noopener">
            The Kool-Aid Factory
          </a>{" "}
          and the great company handbooks. Because what gets written down is
          what compounds.
        </p>
      </header>

      {/* ─── ISSUE LABEL ─── */}
      <div className="mb-8 pb-4 border-b border-border">
        <p className="text-sm">
          <span className="text-text-faint">Current issue:</span>{" "}
          <span className="font-medium text-text">01 — Repetition</span>
        </p>
      </div>

      {/* ─── ENTRIES ─── */}
      <section className="mb-16">
        <div className="space-y-8">
          {entries.map((entry) => (
            <article key={entry.id} className="group">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-text-faint text-sm font-[family-name:var(--font-serif)]">
                  {entry.id}
                </span>
                <span className="text-[11px] tracking-wide uppercase text-text-faint">
                  {entry.type}
                </span>
                {entry.status === "draft" && (
                  <span className="text-[11px] tracking-wide uppercase text-amber-600/70">
                    draft
                  </span>
                )}
                {entry.status === "upcoming" && (
                  <span className="text-[11px] tracking-wide uppercase text-text-faint/50">
                    upcoming
                  </span>
                )}
              </div>
              <h3 className="text-text font-medium text-[15px] group-hover:text-accent transition-colors cursor-pointer">
                {entry.title}
              </h3>
              <p className="text-text-muted text-sm mt-1 leading-relaxed">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ─── REFERENCE SHELF ─── */}
      <section className="mb-16 border-t border-border pt-8">
        <h2 className="font-[family-name:var(--font-serif)] text-lg font-normal text-text mb-4">
          Reference shelf
        </h2>
        <p className="text-sm text-text-muted mb-4">
          Companies and sources this issue draws from:
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm text-text-muted">
          <div>
            <p className="font-medium text-text text-[13px]">Stripe</p>
            <p className="text-[13px]">Writing culture, internal docs as product</p>
          </div>
          <div>
            <p className="font-medium text-text text-[13px]">Linear</p>
            <p className="text-[13px]">Craft as speed, the changelog as literature</p>
          </div>
          <div>
            <p className="font-medium text-text text-[13px]">GitLab</p>
            <p className="text-[13px]">Handbook-first, radical transparency</p>
          </div>
          <div>
            <p className="font-medium text-text text-[13px]">Cursor</p>
            <p className="text-[13px]">Employee experience, culture as infrastructure</p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="pt-6 border-t border-border text-sm text-text-faint">
        <p>Working Memory — a branch of Mind Maps Collective</p>
      </footer>
    </div>
  );
}
