"use client";

import { useEffect, useRef } from "react";

const ns = "http://www.w3.org/2000/svg";

/* ── Label data ── */
const nodes = [
  { l: "essays",         left: "15%", top: "18%", rot: -5,  delay: 0.0, href: "#archive", anim: "floatA" },
  { l: "reading",        left: "78%", top: "16%", rot: 4,   delay: 0.2, href: "#archive", anim: "floatB" },
  { l: "photos",         left: "12%", top: "36%", rot: -3,  delay: 0.4, href: "#archive", anim: "floatC" },
  { l: "music",          left: "82%", top: "34%", rot: 5,   delay: 0.5, href: "#archive", anim: "floatA" },
  { l: "art",            left: "18%", top: "55%", rot: -4,  delay: 0.7, href: "#archive", anim: "floatB" },
  { l: "experiments",    left: "76%", top: "57%", rot: 3,   delay: 0.9, href: "#archive", anim: "floatC" },
  { l: "podcast",        left: "16%", top: "74%", rot: -2,  delay: 1.1, href: "#archive", anim: "floatA" },
  { l: "working memory", left: "44%", top: "78%", rot: 2,   delay: 1.3, href: "#wm",      anim: "floatB" },
  { l: "about",          left: "80%", top: "76%", rot: -3,  delay: 1.5, href: "#about",   anim: "floatC" },
];

export default function TopoHero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const cx = 80, cy = 45;

    // Contour rings — living, breathing
    for (let ring = 0; ring < 18; ring++) {
      const baseR = 4 + ring * 5.5;
      const seg = 64;
      let d = "";
      for (let i = 0; i <= seg; i++) {
        const a = (i / seg) * Math.PI * 2;
        const v =
          Math.sin(a * 3 + ring * 0.7) * 2.5 +
          Math.sin(a * 5 + ring * 1.3) * 1.5 +
          Math.sin(a * 7 + ring * 0.3) * 0.8 +
          Math.cos(a * 2 + ring * 2.1) * 1.8;
        const r = baseR + v;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        d += i === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
      }
      d += " Z";
      const p = document.createElementNS(ns, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", "var(--sage-400)");
      p.setAttribute("stroke-width", ring % 4 === 0 ? "0.3" : "0.15");
      p.setAttribute("opacity", (0.12 + (ring % 3 === 0 ? 0.08 : 0)).toString());
      p.style.animation = `gentlePulse ${6 + (ring % 4) * 2}s ease-in-out ${ring * 0.15}s infinite`;
      svg.appendChild(p);
    }
  }, []);

  return (
    <div className="topo-bg">
      <svg
        ref={svgRef}
        viewBox="0 0 160 90"
        preserveAspectRatio="xMidYMid slice"
      />
      {/* HTML labels — always visible, positioned relative to hero viewport */}
      {nodes.map((n) => (
        <a
          key={n.l}
          href={n.l === "working memory" ? "/working-memory" : n.href}
          className="topo-html-label"
          style={{
            left: n.left,
            top: n.top,
            transform: `rotate(${n.rot}deg)`,
            animationDelay: `${n.delay}s`,
            animationName: n.anim,
          }}
          onClick={(e) => {
            if (n.href.startsWith("#")) {
              e.preventDefault();
              document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="topo-html-dot" />
          {n.l}
        </a>
      ))}
    </div>
  );
}
