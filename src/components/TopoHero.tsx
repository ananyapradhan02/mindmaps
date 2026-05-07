"use client";

import { useEffect, useRef } from "react";

const ns = "http://www.w3.org/2000/svg";

export default function TopoHero() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const cx = 50, cy = 50;

    // Inject keyframe styles for floating + hover
    const styleEl = document.createElementNS(ns, "style");
    styleEl.textContent = `
      @keyframes floatLabel {
        0%, 100% { transform: translate(0, 0); }
        33% { transform: translate(0.4px, -0.6px); }
        66% { transform: translate(-0.3px, 0.4px); }
      }
      .topo-label {
        cursor: pointer;
        transition: opacity 0.3s ease, font-size 0.3s ease;
      }
      .topo-label:hover {
        opacity: 0.9 !important;
      }
      .topo-dot {
        transition: r 0.3s ease, opacity 0.3s ease;
      }
      .topo-label:hover ~ .topo-dot,
      .topo-dot:hover {
        opacity: 0.7;
      }
      .topo-node:hover .topo-label {
        opacity: 0.9 !important;
      }
      .topo-node:hover .topo-dot {
        opacity: 0.6 !important;
      }
      .topo-node:hover .topo-ring {
        opacity: 0.5 !important;
      }
      .topo-node {
        cursor: pointer;
      }
    `;
    svg.appendChild(styleEl);

    // Contour rings
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

    // Nav labels scattered across the map — matching the nav bar
    const nodes = [
      { l: "essays",         x: 22, y: 26, size: 2.4, rot: -8,  delay: 0.0, href: "#archive" },
      { l: "reading",        x: 78, y: 24, size: 2.0, rot: 5,   delay: 0.3, href: "#archive" },
      { l: "photos",         x: 15, y: 48, size: 1.9, rot: -3,  delay: 0.6, href: "#archive" },
      { l: "music",          x: 83, y: 45, size: 2.1, rot: 7,   delay: 0.9, href: "#archive" },
      { l: "art",            x: 35, y: 68, size: 2.6, rot: -5,  delay: 1.2, href: "#archive" },
      { l: "experiments",    x: 72, y: 70, size: 1.8, rot: 4,   delay: 1.5, href: "#archive" },
      { l: "podcast",        x: 50, y: 82, size: 2.0, rot: -2,  delay: 1.8, href: "#archive" },
      { l: "working memory", x: 25, y: 85, size: 1.5, rot: 3,   delay: 2.1, href: "#wm" },
      { l: "about",          x: 78, y: 84, size: 1.7, rot: -4,  delay: 2.4, href: "#about" },
    ];

    // Connection lines between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        if (dist < 40) {
          const mx = (a.x + b.x) / 2 + (Math.sin(i * 3 + j) * 8);
          const my = (a.y + b.y) / 2 + (Math.cos(i * 2 + j) * 6);
          const p = document.createElementNS(ns, "path");
          p.setAttribute("d", `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`);
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "var(--sage-300)");
          p.setAttribute("stroke-width", "0.12");
          p.setAttribute("opacity", "0.18");
          p.setAttribute("stroke-dasharray", "1 2");
          svg.appendChild(p);
        }
      }
    }

    // Render nodes as text labels with dots and hover groups
    nodes.forEach((n, idx) => {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("class", "topo-node");
      g.style.animation = `floatLabel ${5 + (idx % 3) * 2}s ease-in-out ${n.delay}s infinite`;

      // Soft ring behind label
      const ring = document.createElementNS(ns, "circle");
      ring.setAttribute("cx", String(n.x));
      ring.setAttribute("cy", String(n.y));
      ring.setAttribute("r", String(n.size * 2.5));
      ring.setAttribute("fill", "var(--sage-200)");
      ring.setAttribute("opacity", "0.08");
      ring.setAttribute("class", "topo-ring");
      g.appendChild(ring);

      // Small dot at node center
      const dot = document.createElementNS(ns, "circle");
      dot.setAttribute("cx", String(n.x));
      dot.setAttribute("cy", String(n.y - 1));
      dot.setAttribute("r", "0.5");
      dot.setAttribute("fill", "var(--sage-500)");
      dot.setAttribute("opacity", "0.35");
      dot.setAttribute("class", "topo-dot");
      g.appendChild(dot);

      // Text label
      const t = document.createElementNS(ns, "text");
      t.setAttribute("x", String(n.x));
      t.setAttribute("y", String(n.y + 1.2));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("fill", "var(--sage-600)");
      t.setAttribute("opacity", "0.5");
      t.setAttribute("font-size", String(n.size));
      t.setAttribute("font-family", "var(--font-serif), Georgia, serif");
      t.setAttribute("font-style", "italic");
      t.setAttribute("letter-spacing", "0.08em");
      t.setAttribute("class", "topo-label");
      if (n.rot !== 0) {
        t.setAttribute("transform", `rotate(${n.rot} ${n.x} ${n.y})`);
      }
      // Fade in with stagger
      t.style.opacity = "0";
      t.style.animation = `fadeInUp 0.8s ease-out ${0.5 + n.delay}s forwards`;
      t.textContent = n.l;
      g.appendChild(t);

      // Click handler for the whole group
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
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
}
