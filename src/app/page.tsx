import TopoHero from "@/components/TopoHero";
import SectionTopo from "@/components/SectionTopo";
import ScrollBloom from "@/components/ScrollBloom";


export default function Home() {
  return (
    <>
      {/* ─── NAV ─── */}
      <nav>
        <a
          href="#"
          className="font-[family-name:var(--font-serif)] text-xl tracking-wide text-warm-dark no-underline"
        >
          mindmaps
        </a>
        <div className="flex gap-8">
          <a href="#about" className="text-[0.85rem] tracking-widest text-warm-gray no-underline hover:text-sage-600 transition-colors">about</a>
          <a href="#archive" className="text-[0.85rem] tracking-widest text-warm-gray no-underline hover:text-sage-600 transition-colors">archive</a>
          <a href="#wm" className="text-[0.85rem] tracking-widest text-warm-gray no-underline hover:text-sage-600 transition-colors">working memory</a>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero">
        <TopoHero />
        <div className="hero-content">
          <h1 className="font-[family-name:var(--font-serif)] text-[clamp(2.8rem,7vw,4.5rem)] font-normal leading-none tracking-tight text-sage-700 mb-5 animate-[fadeInUp_0.8s_ease-out_0.1s_both]">
            Mind Maps Collective
          </h1>
          <p className="text-[15px] text-warm-gray leading-relaxed max-w-lg mx-auto animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            The branches of this mind map are still growing — a living archive of
            culture, creativity, and the systems we build (and live inside).
          </p>
        </div>
        <ScrollBloom />
      </section>

      {/* ─── WHY THIS EXISTS ─── */}
      <section className="section-wrap" id="about">
        <SectionTopo seed={1} />
        <span className="margin-note left">technology × culture × meaning</span>
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">The Root</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Why this exists
          </h2>
          <div className="text-[15px] text-warm-gray leading-relaxed space-y-4">
            <p>
              I&apos;m interested in the overlap of{" "}
              <strong className="text-warm-dark font-medium">technology × culture × meaning</strong>{" "}
              and how we tell better stories about people and technology we don&apos;t
              immediately understand — to cultivate curiosity.
            </p>
            <p>
              This is where I practice the kind of writing I want to do more of:
              narrative + research, crisp explainers, and honest &quot;building in public&quot;
              notes. Alongside that, I&apos;m building toward new media — short films,
              directed pieces, and visual essays that bring the same rigour and warmth
              to the screen as longform writing does to the page.
            </p>
          </div>
        </div>
      </section>

      {/* ─── NOW ─── */}
      <section className="section-wrap alt">
        <SectionTopo seed={2} />
        <span className="margin-note right">building in public</span>
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">Right Now</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Now
          </h2>
          <div className="border-l-2 border-sage-200 pl-5">
            <ul className="list-none space-y-2.5 text-[15px] text-warm-gray">
              <li>Building this repository into a home for durable writing.</li>
              <li>Writing toward culture, creativity, and the future of work & growth.</li>
              <li>Running small experiments: formats, outlines, and &quot;explain it like a map.&quot;</li>
              <li>Developing new media projects — writing and directing short-form pieces.</li>
              <li>Producing conversations with people who defy neat categories.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU'LL FIND HERE ─── */}
      <section className="section-wrap" id="archive">
        <SectionTopo seed={3} />
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">Coming Soon</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            What you&apos;ll find here
          </h2>
          <div className="cards-grid">
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">Portrait Essays</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">People who defy neat categories</p>
            </div>
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">Public Guides</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">Translating hidden knowledge into usable systems</p>
            </div>
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">Growth Playbooks</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">Positioning, narrative, GTM motions, distribution</p>
            </div>
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">AI & Systems</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">Responsible storytelling about new tools</p>
            </div>
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">Production Notes</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">Behind the writing, directing, and making</p>
            </div>
            <div className="card">
              <h3 className="font-[family-name:var(--font-serif)] text-[1.4rem] text-warm-dark mb-2">Podcast Episodes</h3>
              <p className="text-warm-gray text-[0.85rem] leading-relaxed">Conversations across disciplines</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WORKING MEMORY ─── */}
      <section className="section-wrap cream-bg" id="wm">
        <SectionTopo seed={4} />
        <span className="margin-note left">what compounds</span>
        <div className="inner text-center">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">The Archive</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Working Memory
          </h2>
        </div>
        <div className="wm-box">
          <p className="text-[15px] text-warm-gray leading-relaxed mb-4">
            A structured knowledge repository — exploring how the best companies
            build writing culture as infrastructure. The tech and growth arm of this
            archive, in the tradition of great company handbooks.
          </p>
          <a
            href="/working-memory"
            className="inline-flex items-center gap-2 px-6 py-3 bg-warm-dark text-warm-white text-[0.85rem] tracking-wide rounded-full no-underline hover:bg-sage-800 transition-colors mt-2"
          >
            Browse Issue 01: Repetition →
          </a>
        </div>
      </section>

      {/* ─── SIX ISSUES ─── */}
      <section className="section-wrap">
        <SectionTopo seed={5} />
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">The Journey</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Six issues ahead
          </h2>
          <div>
            {[
              { num: "01", title: "Repetition", status: "in progress" },
              { num: "02", title: "Failure" },
              { num: "03", title: "Constraint" },
              { num: "04", title: "Audience" },
              { num: "05", title: "Transmission" },
              { num: "06", title: "The Body" },
            ].map((issue) => (
              <div key={issue.num} className="issue-row">
                <span className="font-[family-name:var(--font-serif)] text-3xl font-light text-sage-300 w-12">
                  {issue.num}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-warm-dark flex-1 transition-colors">
                  {issue.title}
                </h3>
                {issue.status && (
                  <span className="text-[0.65rem] tracking-[0.15em] uppercase text-terracotta">
                    {issue.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WORK, TOO ─── */}
      <section className="section-wrap alt">
        <SectionTopo seed={6} />
        <span className="margin-note right">ship end-to-end</span>
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">Collaborate</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Work, too
          </h2>
          <div className="text-[15px] text-warm-gray leading-relaxed space-y-4">
            <p>
              I&apos;m a growth operator who ships end-to-end. I build with AI natively
              — research pipelines, content engines, agentic prototypes — across the
              full arc: insight, narrative and distribution systems. I care about
              craft, building toward a future where AI innovates without flattening
              the people it touches, and about work that enriches its users with
              clearer decisions, better products and less friction in their lives.
            </p>
            <p>
              If you&apos;re building something thoughtful (especially AI-native) and want
              a fractional operator for 0-to-1 growth that maps to your real GTM, a
              content engine that compounds, positioning that finally sounds like you.
              Or someone to produce a new media piece that makes your product legible
              — a short film, a directed visual essay, or a podcast and publication —
              say hi. I take on new work as bandwidth allows, but I&apos;m always up for a
              conversation.
            </p>
          </div>
        </div>
      </section>


      {/* ─── UNDER THE BED ─── */}
      <section className="section-wrap alt">
        <SectionTopo seed={8} />
        <div className="inner">
          <p className="text-warm-gray text-[0.7rem] tracking-[0.3em] uppercase mb-3">Under the Bed</p>
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-warm-dark mb-6">
            Maybe some day
          </h2>
          <div className="text-[15px] text-warm-gray leading-relaxed">
            <p>
              A documentary tracing different creative communities. Cutting a drumming album in one take. Running an ultramarathon somewhere I&apos;ve never been. Curating an artist collective where every performer comes from a different discipline. Recording the oral history of a building that changed how a city thought. Teaching myself to animate by hand. Building a cultural publication about art and the structures that hold it up.
            </p>
          </div>
        </div>
      </section>


      {/* ─── SAY HI ─── */}
      <section className="reach-out">
        <SectionTopo seed={10} dark />
        <div className="inner">
          <h2 className="font-[family-name:var(--font-serif)] text-[clamp(1.8rem,4vw,2.4rem)] font-light text-sage-100 mb-4">
            Say hi
          </h2>
          <p className="text-[15px] text-sage-400 leading-relaxed mb-6">
            I&apos;m always looking for new music, new ideas, and new collaborators.
            Whether it&apos;s a project, a conversation, or a recommendation for something
            I should be reading — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap gap-6 mb-10">
            <a href="mailto:ananyapradhan02@gmail.com" className="text-[15px] text-sage-300 no-underline border-b border-sage-700 pb-0.5 hover:text-sage-100 hover:border-sage-500 transition-all">Email</a>
            <a href="https://linkedin.com/in/ananya-pradhan" target="_blank" rel="noopener" className="text-[15px] text-sage-300 no-underline border-b border-sage-700 pb-0.5 hover:text-sage-100 hover:border-sage-500 transition-all">LinkedIn</a>
            <a href="#" className="text-[15px] text-sage-300 no-underline border-b border-sage-700 pb-0.5 hover:text-sage-100 hover:border-sage-500 transition-all">Twitter / X</a>
            <a href="#" className="text-[15px] text-sage-300 no-underline border-b border-sage-700 pb-0.5 hover:text-sage-100 hover:border-sage-500 transition-all">Substack</a>
          </div>
          <div className="font-[family-name:var(--font-serif)] italic text-sm text-sage-500 pt-6 border-t border-sage-800">
            Mind Maps Collective — an archive in motion.
          </div>
        </div>
      </section>
    </>
  );
}
