"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/download-1.jpg",
    alt: "ふとんのやまもり メイン画像1",
    zoom: "in", // 遠くから近くへ
  },
  {
    src: "/download-2.jpg",
    alt: "ふとんのやまもり メイン画像2",
    zoom: "out", // 近くから遠くへ
  },
  {
    src: "/download-3.jpg",
    alt: "ふとんのやまもり メイン画像3",
    zoom: "in", // 遠くから近くへ
  },
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // 5.5秒ごとに次の画像へ切り替え
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {IMAGES.map((img, index) => {
        const isActive = index === currentIndex;

        // 遠くから近く（1.0倍 → 1.12倍）、近くから遠く（1.12倍 → 1.0倍）の動き
        const scaleStyle =
          img.zoom === "in"
            ? isActive
              ? "scale(1.12)"
              : "scale(1.0)"
            : isActive
            ? "scale(1.0)"
            : "scale(1.12)";

        return (
          <div
            key={img.src}
            style={{
              opacity: isActive ? 1 : 0,
              transform: scaleStyle,
              transition: "opacity 2000ms ease-in-out, transform 6000ms ease-out",
            }}
            className="absolute inset-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={index === 0}
              className="object-cover object-center"
            />
          </div>
        );
      })}
    </div>
  );
}
