"use client";

import { useEffect, useRef } from "react";

const ns = "http://www.w3.org/2000/svg";

export default function TopoHero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    // Wide viewBox (16:9-ish) so "slice" barely crops on typical screens
    const cx = 80, cy = 45;

    // Inject keyframe styles
    const styleEl = document.createElementNS(ns, "style");
    styleEl.textContent = `
      @keyframes floatA {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(0.5px, -0.8px); }
        50% { transform: translate(-0.3px, 0.5px); }
        75% { transform: translate(0.6px, 0.3px); }
      }
      @keyframes floatB {
        0%, 100% { transform: translate(0, 0); }
        30% { transform: translate(-0.6px, 0.4px); }
        60% { transform: translate(0.4px, -0.7px); }
      }
      @keyframes floatC {
        0%, 100% { transform: translate(0, 0); }
        40% { transform: translate(0.3px, 0.6px); }
        70% { transform: translate(-0.5px, -0.4px); }
      }
      @keyframes breathe {
        0%, 100% { opacity: 0.06; }
        50% { opacity: 0.14; }
      }
      @keyframes lineDraw {
        from { stroke-dashoffset: 8; }
        to { stroke-dashoffset: 0; }
      }
      .topo-node { cursor: pointer; }
      .topo-node:hover .topo-label { opacity: 0.85 !important; }
      .topo-node:hover .topo-dot { opacity: 0.7 !important; }
      .topo-node:hover .topo-ring { opacity: 0.2 !important; }
      .topo-label { cursor: pointer; transition: opacity 0.3s ease; }
    `;
    svg.appendChild(styleEl);

    // Contour rings — living, breathing (scaled for wider viewBox)
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

    // All 9 labels scattered across the wide canvas
    // y range kept to 18–72 (safe center band for any screen)
    const floatAnims = ["floatA", "floatB", "floatC"];
    const nodes = [
      { l: "essays",         x: 30,  y: 18, size: 1.3, rot: -5,  delay: 0.0, href: "#archive" },
      { l: "reading",        x: 130, y: 16, size: 1.2, rot: 4,   delay: 0.2, href: "#archive" },
      { l: "photos",         x: 25,  y: 36, size: 1.1, rot: -3,  delay: 0.4, href: "#archive" },
      { l: "music",          x: 132, y: 34, size: 1.2, rot: 5,   delay: 0.5, href: "#archive" },
      { l: "art",            x: 28,  y: 54, size: 1.4, rot: -4,  delay: 0.7, href: "#archive" },
      { l: "experiments",    x: 128, y: 56, size: 1.1, rot: 3,   delay: 0.9, href: "#archive" },
      { l: "podcast",        x: 32,  y: 72, size: 1.2, rot: -2,  delay: 1.1, href: "#archive" },
      { l: "working memory", x: 80,  y: 76, size: 0.9, rot: 2,   delay: 1.3, href: "#wm" },
      { l: "lore",           x: 126, y: 73, size: 1.1, rot: -3,  delay: 1.5, href: "#lore" },
      { l: "play",           x: 80,  y: 18, size: 1.2, rot: 3,   delay: 1.7, href: "#archive" },
    ];

    // Animated connection lines between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        if (dist < 60) {
          const mx = (a.x + b.x) / 2 + (Math.sin(i * 3 + j) * 8);
          const my = (a.y + b.y) / 2 + (Math.cos(i * 2 + j) * 6);
          const p = document.createElementNS(ns, "path");
          p.setAttribute("d", `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`);
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "var(--sage-300)");
          p.setAttribute("stroke-width", "0.1");
          p.setAttribute("opacity", "0.15");
          p.setAttribute("stroke-dasharray", "1.5 2");
          p.style.animation = `lineDraw ${3 + i}s linear ${0.5 + i * 0.3}s infinite`;
          svg.appendChild(p);
        }
      }
    }

    // Render nodes
    nodes.forEach((n, idx) => {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "topo-node");
      const anim = floatAnims[idx % 3];
      g.style.animation = `${anim} ${6 + (idx % 4) * 2}s ease-in-out ${n.delay}s infinite`;

      // Breathing ring behind label
      const ring = document.createElementNS(ns, "circle");
      ring.setAttribute("cx", String(n.x));
      ring.setAttribute("cy", String(n.y));
      ring.setAttribute("r", String(n.size * 3));
      ring.setAttribute("fill", "var(--sage-200)");
      ring.setAttribute("opacity", "0.06");
      ring.setAttribute("class", "topo-ring");
      ring.style.animation = `breathe ${4 + idx * 0.7}s ease-in-out ${n.delay}s infinite`;
      g.appendChild(ring);

      // Dot
      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", String(n.x));
      dot.setAttribute("cy", String(n.y - 0.8));
      dot.setAttribute("r", "0.4");
      dot.setAttribute("fill", "var(--sage-500)");
      dot.setAttribute("opacity", "0.3");
      dot.setAttribute("class", "topo-dot");
      g.appendChild(dot);

      // Text label — smaller fonts
      const t = document.createElementNS(ns, "text");
      t.setAttribute("x", String(n.x));
      t.setAttribute("y", String(n.y + 1));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("fill", "var(--sage-600)");
      t.setAttribute("opacity", "0.45");
      t.setAttribute("font-size", String(n.size));
      t.setAttribute("font-family", "var(--font-serif), Georgia, serif");
      t.setAttribute("font-style", "italic");
      t.setAttribute("letter-spacing", "0.06em");
      t.setAttribute("class", "topo-label");
      if (n.rot !== 0) {
        t.setAttribute("transform", `rotate(${n.rot} ${n.x} ${n.y})`);
      }
      t.style.opacity = "0";
      t.style.animation = `fadeInUp 0.6s ease-out ${0.3 + n.delay}s forwards`;
      t.textContent = n.l;
      g.appendChild(t);

      g.onclick = () => {
        document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" });
      };

      svg.appendChild(g);
    });
  }, []);

  return (
    <div className="topo-bg">
      <svg
        ref={svgRef}
        viewBox="0 0 160 90"
        preserveAspectRatio="none"
      />
    </div>
  );
}
