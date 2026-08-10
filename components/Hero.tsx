"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Zap, ArrowRight, ChevronDown } from "lucide-react";
import { analyticsEvents } from "@/components/GoogleAnalytics";
import { gsap } from "gsap";
import PhoneMockup from "./PhoneMockup";
import Marquee from "./Marquee";
import { AppleIcon, GooglePlayIcon } from "./StoreIcons";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If hydration landed late (slow device, weak connection, in-app browser)
    // the content has already been on screen for a while. Animating it in at
    // that point reads as a glitch, so skip straight to the resting state.
    if (performance.now() > 1200) return;

    // Entrance animates transforms only, never opacity: the hero must never
    // have an invisible state, whatever happens to the JS bundle.
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(badgeRef.current, {
        y: 16,
        scale: 0.95,
        duration: 0.5,
        ease: "power3.out",
      })
        .from(
          logoRef.current,
          { y: 24, scale: 0.92, duration: 0.6, ease: "power3.out" },
          "-=0.35"
        )
        .from(
          subheadRef.current,
          { y: 16, duration: 0.5, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          ctaRef.current?.children || [],
          { y: 16, duration: 0.4, stagger: 0.06, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          statsRef.current?.children || [],
          { y: 16, duration: 0.4, stagger: 0.06, ease: "power3.out" },
          "-=0.25"
        )
        .from(
          phoneRef.current,
          { y: 40, scale: 0.95, duration: 0.6, ease: "power3.out" },
          "-=0.5"
        );
    });

    return () => ctx.revert();
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/30 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-ampora-400 animate-pulse" />
              <span className="text-sm text-ampora-300 font-medium tracking-wide">
                AI-POWERED ELECTRICAL INTELLIGENCE
              </span>
            </div>

            {/* Large Animated Ampora Logo */}
            <div
              ref={logoRef}
              className="relative mb-10 flex justify-center lg:justify-start"
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
                    <Image
                      src="/ampora-logo.webp"
                      alt="Ampora AI"
                      width={120}
                      height={120}
                      className="w-full h-full object-cover"
                      priority
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
                  <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    Power Up Your Workflow
                  </h1>
                </div>
              </div>
            </div>

            {/* Subheadline - with extra top margin to account for tagline */}
            <p
              ref={subheadRef}
              className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto lg:mx-0 mb-10 mt-16 leading-relaxed"
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
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsEvents.downloadClick('hero-ios')}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ampora-400 to-ampora-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <AppleIcon className="relative w-6 h-6" />
                <span className="relative">App Store</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analyticsEvents.downloadClick('hero-android')}
                className="group relative inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ampora-400 to-ampora-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <GooglePlayIcon className="relative w-6 h-6" />
                <span className="relative">Google Play</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:border-ampora-500/50 hover:bg-ampora-500/10"
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
                <div key={index} className="text-center lg:text-left">
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
            className="relative flex justify-center lg:justify-end"
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
