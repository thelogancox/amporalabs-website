"use client";

import { useEffect, useState } from "react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

// Seeded random function for consistent values
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Reduced bubble count for performance - only static positioning, no animation
function generateBubbles(count: number): Bubble[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = i * 1000;
    return {
      id: i,
      x: seededRandom(seed + 1) * 100,
      y: seededRandom(seed + 2) * 100,
      size: 4 + seededRandom(seed + 3) * 8,
      opacity: 0.08 + seededRandom(seed + 6) * 0.12,
    };
  });
}

// Reduced from 40 to 15 static bubbles - no animations
const bubbles = generateBubbles(15);

export default function BubbleBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{
        willChange: 'auto',
        contain: 'strict',
      }}
    >
      {/* Main gradient background - no blur, just gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-ampora-950/20 to-black" />

      {/* Radial glow spots - reduced blur for performance */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(109, 40, 217, 0.08) 0%, transparent 70%)',
          transform: 'translate3d(0, -50%, 0)',
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
          transform: 'translate3d(0, 50%, 0)',
        }}
      />

      {/* Static bubbles - no animation, GPU accelerated */}
      {mounted && (
        <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                background: `radial-gradient(circle at 30% 30%, rgba(139, 92, 246, ${bubble.opacity}), rgba(109, 40, 217, ${bubble.opacity * 0.5}))`,
                transform: 'translateZ(0)',
              }}
            />
          ))}
        </div>
      )}

      {/* Simplified grid overlay - no animation */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          transform: 'translateZ(0)',
        }}
      />

      {/* Static grid lines - no animation */}
      <div className="absolute inset-0" style={{ transform: 'translateZ(0)' }}>
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ampora-500/10 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ampora-500/8 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ampora-500/10 to-transparent" />
      </div>
    </div>
  );
}
