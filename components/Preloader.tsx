"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "AMPOR@#$%01ΞΔΩ";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [displayText, setDisplayText] = useState(["", "", "", "", "", ""]);
  const [textRevealed, setTextRevealed] = useState(false);
  const [dissolving, setDissolving] = useState(false);
  const [done, setDone] = useState(false);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);

  const targetText = "AMPORA";

  // Cleanup intervals
  useEffect(() => {
    return () => {
      intervalsRef.current.forEach(clearInterval);
    };
  }, []);

  // Start scramble immediately
  useEffect(() => {
    const startDelay = setTimeout(() => {
      targetText.split("").forEach((finalChar, index) => {
        setTimeout(() => {
          let iteration = 0;
          const maxIterations = 6; // Reduced from 10

          const interval = setInterval(() => {
            iteration++;

            if (iteration >= maxIterations) {
              clearInterval(interval);
              setDisplayText(prev => {
                const newArr = [...prev];
                newArr[index] = finalChar;
                return newArr;
              });

              if (index === targetText.length - 1) {
                setTimeout(() => setTextRevealed(true), 150);
              }
            } else {
              setDisplayText(prev => {
                const newArr = [...prev];
                newArr[index] = CHARS[Math.floor(Math.random() * CHARS.length)];
                return newArr;
              });
            }
          }, 40); // Faster interval (was 60)

          intervalsRef.current.push(interval);
        }, index * 80); // Faster stagger (was 150)
      });
    }, 200);

    return () => clearTimeout(startDelay);
  }, []);

  // Dissolve after text revealed
  useEffect(() => {
    if (!textRevealed) return;
    const timer = setTimeout(() => setDissolving(true), 500); // Shorter pause
    return () => clearTimeout(timer);
  }, [textRevealed]);

  // Complete after dissolve
  useEffect(() => {
    if (!dissolving) return;
    const timer = setTimeout(() => {
      setDone(true);
      onComplete();
    }, 600);
    return () => clearTimeout(timer);
  }, [dissolving, onComplete]);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      style={{
        opacity: dissolving ? 0 : 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center">
        {/* Main text */}
        <div className="relative flex items-center gap-1 sm:gap-2">
          {displayText.map((char, i) => (
            <span
              key={i}
              className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold inline-block min-w-[0.55em] text-center"
              style={{
                color: char === targetText[i] ? '#ffffff' : '#a78bfa',
                textShadow: char === targetText[i] && textRevealed
                  ? '0 0 30px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.4)'
                  : '0 0 15px rgba(139, 92, 246, 0.3)',
                opacity: char ? 1 : 0.2,
                transition: 'color 0.15s, text-shadow 0.2s',
              }}
            >
              {char || '_'}
            </span>
          ))}
        </div>

        {/* Underline */}
        <div
          className="mt-4 h-[2px] bg-gradient-to-r from-transparent via-ampora-500 to-transparent"
          style={{
            width: textRevealed ? '280px' : '0px',
            transition: 'width 0.4s ease-out',
            boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
          }}
        />

        {/* Tagline */}
        <p
          className="mt-6 text-xs sm:text-sm tracking-[0.3em] uppercase text-white/40"
          style={{
            opacity: textRevealed ? 1 : 0,
            transform: textRevealed ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.3s ease-out',
          }}
        >
          Electrical Intelligence
        </p>
      </div>

      {/* Corner brackets */}
      <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-ampora-500/30" />
      <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-ampora-500/30" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-ampora-500/30" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-ampora-500/30" />
    </div>
  );
}
