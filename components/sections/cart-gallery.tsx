"use client";

import { useState } from "react";
import Image from "next/image";

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="relative w-full h-full bg-[#1a1208] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <Image
          src="/brand/full-logo-with-background.png"
          alt="Thalluvandi fallback logo"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-8 opacity-40 z-20"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority
      sizes="(max-width: 768px) 100vw, 50vw"
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}

export function CartGallery({ images, nameEn }: { images: string[]; nameEn: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleThumbnailClick = (index: number) => {
    if (index === activeIndex) return;
    setFade(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
    }, 150); // half of the 300ms transition for smooth crossfade
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Large Image Container (16:9, aspect-video) */}
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-black/10 bg-[#fff7ed]">
        <div 
          className={`w-full h-full transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <GalleryImage src={images[activeIndex]} alt={`${nameEn} - view ${activeIndex + 1}`} />
        </div>
      </div>

      {/* Thumbnail row below */}
      <div className="flex gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => handleThumbnailClick(idx)}
            className={`relative aspect-square w-20 overflow-hidden rounded-xl border-2 transition ${
              idx === activeIndex 
                ? "border-primary scale-95 shadow-md" 
                : "border-black/10 hover:border-primary/40"
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <GalleryImage src={img} alt={`${nameEn} thumbnail ${idx + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
