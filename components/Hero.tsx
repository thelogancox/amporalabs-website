"use client";

import { useEffect, useState, useRef } from "react";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import PhoneMockup from "./PhoneMockup";
import Marquee from "./Marquee";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Start animations after a brief delay
    const timer = setTimeout(() => setIsLoaded(true), 300);

    // GSAP entrance animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
      )
        .fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.8, rotateY: -15 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.4"
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        )
        .fromTo(
          phoneRef.current,
          { opacity: 0, y: 60, scale: 0.9, rotateY: -10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

      // Floating animation disabled for scroll performance
    });

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-8 overflow-hidden"
    >
      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex-1 flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/30 mb-8 opacity-0"
            >
              <div className="w-2 h-2 rounded-full bg-ampora-400 animate-pulse" />
              <span className="text-sm text-ampora-300 font-medium tracking-wide">
                AI-POWERED ELECTRICAL INTELLIGENCE
              </span>
            </div>

            {/* Large Animated Ampora Logo */}
            <div
              ref={logoRef}
              className="relative mb-10 flex justify-center lg:justify-start opacity-0"
              style={{ perspective: "1000px" }}
            >
              {/* Simplified glows - reduced blur for performance */}
              <div
                className="absolute top-1/2 left-1/2 lg:left-[140px] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)', transform: 'translate3d(-50%, -50%, 0)' }}
              />

              {/* Logo container with hover effects */}
              <div className="relative group cursor-pointer transform-gpu transition-transform duration-500 hover:scale-105">
                {/* Rotating ring effect - hidden on mobile for cleaner look */}
                <div
                  className="absolute -inset-6 sm:-inset-8 rounded-full border-2 border-ampora-500/30 opacity-60 hidden sm:block"
                  style={{ animation: "slow-rotate 20s linear infinite" }}
                />
                <div
                  className="absolute -inset-10 sm:-inset-12 rounded-full border border-ampora-400/20 opacity-40 hidden sm:block"
                  style={{ animation: "slow-rotate 30s linear infinite reverse" }}
                />

                {/* Particle dots around logo - hidden on mobile for cleaner look */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-ampora-400 hidden sm:block"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${i * 60}deg) translateX(140px)`,
                      animation: `pulse-glow 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                      opacity: 0.6,
                    }}
                  />
                ))}

                {/* The actual logo image */}
                <div className="relative">
                  {/* Logo shadow/glow */}
                  <div
                    className="absolute inset-0 rounded-[40px] blur-2xl opacity-60"
                    style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)" }}
                  />

                  {/* Logo container with rounded corners and 3D effects */}
                  <div
                    className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] rounded-[40px] overflow-hidden"
                    style={{
                      boxShadow: `
                        0 0 60px rgba(139, 92, 246, 0.4),
                        0 25px 50px rgba(0, 0, 0, 0.5),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -2px 0 rgba(0, 0, 0, 0.2)
                      `,
                    }}
                  >
                    {/* The logo image */}
                    <img
                      src="/ampora-logo.png"
                      alt="Ampora AI"
                      className="w-full h-full object-cover"
                    />

                    {/* Glint/shine overlay - diagonal light reflection */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `linear-gradient(
                          135deg,
                          rgba(255, 255, 255, 0.25) 0%,
                          rgba(255, 255, 255, 0.1) 20%,
                          transparent 40%,
                          transparent 100%
                        )`,
                      }}
                    />

                    {/* Animated glint that sweeps across */}
                    <div
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(
                          105deg,
                          transparent 40%,
                          rgba(255, 255, 255, 0.3) 45%,
                          rgba(255, 255, 255, 0.1) 50%,
                          transparent 55%
                        )`,
                        animation: "glint-sweep 2s ease-in-out infinite",
                      }}
                    />

                    {/* Subtle inner border for depth */}
                    <div
                      className="absolute inset-0 rounded-[40px] pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  </div>
                </div>

                {/* Tagline under logo */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <p className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    Power Up Your Workflow
                  </p>
                </div>
              </div>
            </div>

            {/* Subheadline - with extra top margin to account for tagline */}
            <p
              ref={subheadRef}
              className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 mt-16 leading-relaxed opacity-0"
            >
              NEC code-backed answers in seconds. Professional calculators at your fingertips.
              Photo analysis that sees what you see. All powered by AI.
            </p>

            {/* CTAs */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
               target="_blank"
               rel="noopener noreferrer"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] opacity-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ampora-400 to-ampora-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  className="relative w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span className="relative">Download for iOS</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-ampora-500/50 hover:bg-ampora-500/10 opacity-0"
              >
                <Zap className="w-5 h-5 text-ampora-400 group-hover:animate-pulse" />
                <span>See Features</span>
              </a>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-10 mt-14 justify-center lg:justify-start"
            >
              {[
                { value: "6", label: "Pro Calculators", suffix: "" },
                { value: "24/7", label: "AI Assistant", suffix: "" },
                { value: "NEC", label: "Code Backed", suffix: "" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left opacity-0">
                  <div className="text-3xl font-display font-bold text-white flex items-baseline justify-center lg:justify-start gap-1">
                    <span>{stat.value}</span>
                    <span className="text-ampora-400">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div
            ref={phoneRef}
            className="relative flex justify-center lg:justify-end opacity-0"
            style={{ perspective: "1000px" }}
          >
            {/* Glow behind phone - simplified for performance */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)', transform: 'translate3d(-50%, -50%, 0)' }}
            />

            {/* Phone */}
            <div className="relative transform-gpu hover:scale-[1.02] transition-transform duration-500">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-16">
        <Marquee speed={40} />
      </div>

      {/* Scroll indicator - hidden on mobile to avoid marquee overlap */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-12 w-2 h-2 bg-ampora-500 rounded-full opacity-60 animate-pulse" />
      <div
        className="absolute top-48 right-20 w-3 h-3 border border-ampora-500/50 rounded-full"
        style={{ animation: "slow-rotate 10s linear infinite" }}
      />
      <div className="absolute bottom-40 left-24 w-1 h-1 bg-electric-cyan rounded-full opacity-40" />

      {/* Grid accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-ampora-500/20 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-ampora-500/10 to-transparent" />
    </section>
  );
}
