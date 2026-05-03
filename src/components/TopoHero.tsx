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

    // Nodes
    const nodes = [
      { l: "essays", x: 28, y: 30, s: 3, href: "#archive" },
      { l: "notes", x: 72, y: 28, s: 2.8, href: "#archive" },
      { l: "explainers", x: 20, y: 56, s: 2.8, href: "#archive" },
      { l: "experiments", x: 80, y: 54, s: 2.8, href: "#archive" },
      { l: "podcast", x: 32, y: 76, s: 2.8, href: "#archive" },
      { l: "new media", x: 68, y: 76, s: 3, href: "#archive" },
    ];

    // Connection lines between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dist = Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
        if (dist < 55) {
          const mx = (a.x + b.x) / 2 + (Math.random() - 0.5) * 10;
          const my = (a.y + b.y) / 2 + (Math.random() - 0.5) * 10;
          const p = document.createElementNS(ns, "path");
          p.setAttribute("d", `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`);
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "var(--sage-300)");
          p.setAttribute("stroke-width", "0.15");
          p.setAttribute("opacity", "0.25");
          p.setAttribute("stroke-dasharray", "1 1.5");
          svg.appendChild(p);
        }
      }
    }

    // Render nodes
    nodes.forEach((n) => {
      const c1 = document.createElementNS(ns, "circle");
      c1.setAttribute("cx", String(n.x));
      c1.setAttribute("cy", String(n.y));
      c1.setAttribute("r", String(n.s));
      c1.setAttribute("fill", "var(--sage-100)");
      c1.setAttribute("opacity", "0.3");
      c1.setAttribute("class", "node-ring");
      c1.onclick = () => document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" });
      svg.appendChild(c1);

      const c2 = document.createElementNS(ns, "circle");
      c2.setAttribute("cx", String(n.x));
      c2.setAttribute("cy", String(n.y));
      c2.setAttribute("r", "0.6");
      c2.setAttribute("fill", "var(--sage-500)");
      c2.setAttribute("opacity", "0.5");
      svg.appendChild(c2);

      const t = document.createElementNS(ns, "text");
      t.setAttribute("x", String(n.x));
      t.setAttribute("y", String(n.y + n.s + 2.2));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("fill", "var(--sage-600)");
      t.setAttribute("opacity", "0.55");
      t.setAttribute("font-size", "1.8");
      t.setAttribute("font-family", "'Cormorant Garamond', Georgia, serif");
      t.setAttribute("font-style", "italic");
      t.setAttribute("class", "node-label");
      t.textContent = n.l;
      t.onclick = () => document.querySelector(n.href)?.scrollIntoView({ behavior: "smooth" });
      svg.appendChild(t);
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
