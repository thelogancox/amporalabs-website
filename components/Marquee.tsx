"use client";

import { Zap, Calculator, Camera, Book, Shield, Cpu } from "lucide-react";

const items = [
  { icon: Zap, text: "NEC Code Expert" },
  { icon: Calculator, text: "6 Pro Calculators" },
  { icon: Camera, text: "Photo Analysis" },
  { icon: Book, text: "Reference Library" },
  { icon: Shield, text: "Code Compliance" },
  { icon: Cpu, text: "AI-Powered" },
];

interface MarqueeProps {
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function Marquee({
  speed = 30,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Marquee track - faster on mobile via CSS, GPU accelerated */}
      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      >
        {/* Duplicate items for seamless loop - GPU accelerated */}
        {[...items, ...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 mx-8 px-6 py-3 rounded-full border border-white/10 bg-white/5"
            style={{ transform: 'translateZ(0)' }}
          >
            <item.icon className="w-5 h-5 text-ampora-400" />
            <span className="text-sm font-medium text-white/80">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
