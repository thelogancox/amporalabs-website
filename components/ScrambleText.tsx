"use client";

import { useEffect, useRef, useState } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>[]{}";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: boolean;
}

export default function ScrambleText({
  text,
  className = "",
  delay = 0,
  duration = 1.5,
  trigger = true,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text.replace(/[^\s]/g, "-"));
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger || hasAnimated) return;

    const timeoutId = setTimeout(() => {
      let iteration = 0;
      const finalText = text;
      const totalIterations = finalText.length * 3;
      const intervalDuration = (duration * 1000) / totalIterations;

      const interval = setInterval(() => {
        setDisplayText(
          finalText
            .split("")
            .map((letter, index) => {
              if (letter === " ") return " ";
              if (index < iteration / 3) {
                return finalText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= totalIterations) {
          clearInterval(interval);
          setDisplayText(finalText);
          setHasAnimated(true);
        }
        iteration += 1;
      }, intervalDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, delay, duration, trigger, hasAnimated]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
    </span>
  );
}
