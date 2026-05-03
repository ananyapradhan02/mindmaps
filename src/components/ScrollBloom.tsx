"use client";

import { useRef, useCallback } from "react";

export default function ScrollBloom() {
  const bloomRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    const bloom = bloomRef.current;
    if (!bloom) return;

    // Expand bloom
    bloom.style.transition =
      "width 0.6s cubic-bezier(0.22,1,0.36,1), height 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease";
    bloom.style.width = "200vmax";
    bloom.style.height = "200vmax";
    bloom.style.opacity = "1";

    // Scroll after a short delay
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }, 300);

    // Fade out bloom
    setTimeout(() => {
      bloom.style.transition = "opacity 0.4s ease";
      bloom.style.opacity = "0";
      setTimeout(() => {
        bloom.style.width = "0";
        bloom.style.height = "0";
      }, 400);
    }, 800);
  }, []);

  return (
    <div
      onClick={handleClick}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20 group"
    >
      <div
        ref={bloomRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 rounded-full opacity-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--sage-200) 0%, transparent 70%)",
        }}
      />
      <span className="text-[0.7rem] tracking-[0.2em] uppercase text-warm-gray/50 group-hover:text-sage-600 transition-colors">
        explore
      </span>
      <div className="w-px h-8 bg-sage-300/40 group-hover:h-10 transition-all" />
    </div>
  );
}
