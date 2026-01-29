"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Simple scroll-triggered animations without Lenis (which was causing issues)
    const setupAnimations = () => {
      // Reveal animations for sections
      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((element) => {
        const animationType = element.dataset.animate;

        gsap.set(element, { opacity: 0, y: animationType === "scale-in" ? 0 : 40 });

        ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          onEnter: () => {
            if (animationType === "fade-up") {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
              });
            } else if (animationType === "scale-in") {
              gsap.fromTo(
                element,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
              );
            } else if (animationType === "fade-in") {
              gsap.to(element, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
              });
            }
          },
        });
      });
    };

    // Run animations after DOM is ready
    const timer = setTimeout(setupAnimations, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
