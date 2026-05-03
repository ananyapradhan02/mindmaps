"use client";

import { useEffect, useRef } from "react";

const ns = "http://www.w3.org/2000/svg";

function seededRandom(seed: number) {
  let s = seed;
  return function () {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface SectionTopoProps {
  seed: number;
  dark?: boolean;
}

export default function SectionTopo({ seed, dark = false }: SectionTopoProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.innerHTML = "";

    const rand = seededRandom(seed * 12345);
    const strokeColor = dark ? "var(--sage-700)" : "var(--sage-400)";
    const dotColor = dark ? "var(--sage-700)" : "var(--sage-400)";
    const baseOpacity = dark ? 0.15 : 0.1;

    // Contour arcs — subtle
    for (let i = 0; i < 5; i++) {
      const startX = rand() * 200;
      const startY = rand() * 100;
      let d = `M ${startX} ${startY}`;
      let px = startX, py = startY;
      for (let j = 0; j < 4; j++) {
        const cpx = px + (rand() - 0.4) * 70;
        const cpy = py + (rand() - 0.5) * 45;
        const ex = px + (rand() - 0.3) * 90;
        const ey = py + (rand() - 0.5) * 55;
        d += ` Q ${cpx} ${cpy} ${ex} ${ey}`;
        px = ex;
        py = ey;
      }
      const p = document.createElementNS(ns, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", strokeColor);
      p.setAttribute("stroke-width", (0.1 + rand() * 0.25).toFixed(2));
      p.setAttribute("opacity", (baseOpacity * 0.7 + rand() * 0.05).toFixed(3));
      svg.appendChild(p);
    }

    // Dot clusters
    const points: { x: number; y: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const x = rand() * 200;
      const y = rand() * 100;
      points.push({ x, y });
      const c = document.createElementNS(ns, "circle");
      c.setAttribute("cx", String(x));
      c.setAttribute("cy", String(y));
      c.setAttribute("r", (0.25 + rand() * 0.5).toFixed(2));
      c.setAttribute("fill", dotColor);
      c.setAttribute("opacity", (baseOpacity * 0.8 + rand() * 0.06).toFixed(3));
      svg.appendChild(c);
    }

    // Connection lines between nearby dots
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = Math.sqrt(
          (points[i].x - points[j].x) ** 2 + (points[i].y - points[j].y) ** 2
        );
        if (dist < 35 && rand() > 0.6) {
          const mx = (points[i].x + points[j].x) / 2 + (rand() - 0.5) * 12;
          const my = (points[i].y + points[j].y) / 2 + (rand() - 0.5) * 8;
          const l = document.createElementNS(ns, "path");
          l.setAttribute(
            "d",
            `M ${points[i].x} ${points[i].y} Q ${mx} ${my} ${points[j].x} ${points[j].y}`
          );
          l.setAttribute("stroke", strokeColor);
          l.setAttribute("fill", "none");
          l.setAttribute("stroke-width", "0.1");
          l.setAttribute("opacity", (baseOpacity * 0.5).toFixed(3));
          l.setAttribute("stroke-dasharray", "1.5 2.5");
          svg.appendChild(l);
        }
      }
    }

    // Elevation ring markers
    for (let i = 0; i < 2; i++) {
      const rcx = 30 + rand() * 140;
      const rcy = 20 + rand() * 60;
      const rr = 3 + rand() * 8;
      const seg = 32;
      let d = "";
      for (let j = 0; j <= seg; j++) {
        const a = (j / seg) * Math.PI * 2;
        const v = Math.sin(a * 3 + seed) * 1 + Math.sin(a * 5 + seed * 2) * 0.5;
        const r = rr + v;
        const x = rcx + r * Math.cos(a);
        const y = rcy + r * Math.sin(a);
        d += j === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
      }
      d += " Z";
      const p = document.createElementNS(ns, "path");
      p.setAttribute("d", d);
      p.setAttribute("fill", "none");
      p.setAttribute("stroke", strokeColor);
      p.setAttribute("stroke-width", "0.15");
      p.setAttribute("opacity", (baseOpacity * 0.6).toFixed(3));
      svg.appendChild(p);
    }
  }, [seed, dark]);

  return (
    <div className="section-topo">
      <svg
        ref={svgRef}
        viewBox="0 0 200 100"
        preserveAspectRatio="xMidYMid slice"
      />
    </div>
  );
}
