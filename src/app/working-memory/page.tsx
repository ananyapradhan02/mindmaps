import Link from "next/link";
import SectionTopo from "@/components/SectionTopo";

const entries = [
  {
    id: "001",
    title: "Writing Culture Is Infrastructure",
    description:
      "Why the companies that write well are the companies that compound. The argument is civilisational before it is operational.",
    type: "flagship",
    status: "live",
  },
  {
    id: "002",
    title: "The Memo as Architecture",
    description:
      "How Stripe, GitLab, and Linear turned documents into load-bearing walls.",
    type: "case study",
    status: "draft",
  },
  {
    id: "003",
    title: "What Gets Written Down Compounds",
    description:
      "A fieldnote on why most companies discuss writing culture and practice it nowhere.",
    type: "fieldnote",
    status: "draft",
  },
  {
    id: "004",
    title: "The Kool-Aid Problem",
    description:
      "When internal knowledge becomes ideology — and when it becomes something rarer.",
    type: "essay",
    status: "upcoming",
  },
  {
    id: "005",
    title: "Brie Wolfson and the Architecture of Belonging",
    description:
      "On building employee experience as a design discipline.",
    type: "interview",
    status: "upcoming",
  },
];

const references = [
  { name: "Stripe", desc: "Writing culture, internal docs as product" },
  { name: "Linear", desc: "Craft as speed, the changelog as literature" },
  { name: "GitLab", desc: "Handbook-first, radical transparency" },
  { name: "Cursor", desc: "Employee experience, culture as infrastructure" },
];

export default function WorkingMemory() {
  return (
    <div className="relative min-h-screen">
      {/* Background topo for the whole page */}
      <div className="fixed inset-0 pointer-events-none opacity-50">
        <SectionTopo seed={11} />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* ─── BACK ─── */}
        <Link
          href="/"
          className="text-sm text-warm-gray hover:text-sage-600 mb-12 inline-block"
        >
          ← back to the map
        </Link>

        {/* ─── HEADER ─── */}
        <header className="mb-12">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">
            mindmaps collective / archive
          </p>
          <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-warm-dark mb-4 leading-snug">
            Working Memory
          </h1>
          <p className="text-warm-gray text-[15px] leading-relaxed">
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
        <div className="mb-8 pb-4 border-b border-sage-200">
          <p className="text-sm">
            <span className="text-warm-gray">Current issue:</span>{" "}
            <span className="font-medium text-warm-dark">01 — Repetition</span>
          </p>
        </div>

        {/* ─── ENTRIES ─── */}
        <section className="mb-16">
          <div className="space-y-8">
            {entries.map((entry) => (
              <article key={entry.id} className="group">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-warm-gray text-sm font-[family-name:var(--font-serif)]">
                    {entry.id}
                  </span>
                  <span className="text-[11px] tracking-wide uppercase text-warm-gray">
                    {entry.type}
                  </span>
                  {entry.status === "draft" && (
                    <span className="text-[11px] tracking-wide uppercase text-terracotta/70">
                      draft
                    </span>
                  )}
                  {entry.status === "upcoming" && (
                    <span className="text-[11px] tracking-wide uppercase text-warm-gray/50">
                      upcoming
                    </span>
                  )}
                </div>
                <h3 className="text-warm-dark font-medium text-[15px] group-hover:text-sage-600 transition-colors cursor-pointer">
                  {entry.title}
                </h3>
                <p className="text-warm-gray text-sm mt-1 leading-relaxed">
                  {entry.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── REFERENCE SHELF ─── */}
        <section className="mb-16 border-t border-sage-200 pt-8">
          <h2 className="font-[family-name:var(--font-serif)] text-lg font-normal text-warm-dark mb-4">
            Reference shelf
          </h2>
          <p className="text-sm text-warm-gray mb-4">
            Companies and sources this issue draws from:
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm text-warm-gray">
            {references.map((ref) => (
              <div key={ref.name}>
                <p className="font-medium text-warm-dark text-[13px]">{ref.name}</p>
                <p className="text-[13px]">{ref.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="pt-6 border-t border-sage-200 text-sm text-warm-gray">
          <p>Working Memory — a branch of Mind Maps Collective</p>
        </footer>
      </div>
    </div>
  );
}
