"use client";

import { useEffect, useState } from "react";

export function HeroTitle() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 py-4 rounded-xl bg-black/30 backdrop-blur-[2px]">
      <h1
        style={{
          transitionDuration: "3000ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`text-white text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-[0.2em] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-center transition-all ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-12 scale-75"
        }`}
      >
        <span className="text-xl sm:text-3xl md:text-4xl mr-1 sm:mr-2">
          ふとんの
        </span>
        やまもり
      </h1>
    </div>
  );
}
