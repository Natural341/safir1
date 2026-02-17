"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface Props {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}

export default function BeforeAfterSlider({ before, after, labelBefore = "ÖNCE", labelAfter = "SONRA" }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <Image src={after} alt="Sonra" fill className="object-cover" />
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image src={before} alt="Önce" fill className="object-cover grayscale" />
      </div>
      <div 
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-xl cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-600 text-blue-600 font-bold">
           ↔
        </div>
      </div>
      <div className="absolute top-4 left-4 z-30 pointer-events-none">
        <span className="bg-black/50 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{labelBefore}</span>
      </div>
      <div className="absolute top-4 right-4 z-30 pointer-events-none">
        <span className="bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{labelAfter}</span>
      </div>
    </div>
  );
}
