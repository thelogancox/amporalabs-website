"use client";

import { useRef, useEffect, useState } from "react";
import {
  MessageSquareText,
  Calculator,
  Camera,
  BookOpen,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: MessageSquareText,
    title: "AI-Powered Assistant",
    description: "Get instant, NEC code-backed answers to any electrical question.",
    gradient: "from-ampora-500 to-ampora-700",
    color: "#8b5cf6",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Calculator,
    title: "6 Pro Calculators",
    description: "Load, voltage drop, conduit fill, wire sizing, arc flash, motor sizing.",
    gradient: "from-emerald-500 to-emerald-700",
    color: "#10b981",
    stat: "6",
    statLabel: "Tools",
  },
  {
    icon: Camera,
    title: "Photo Analysis",
    description: "Snap a photo. Get NEC compliance feedback and recommendations.",
    gradient: "from-blue-500 to-blue-700",
    color: "#3b82f6",
    stat: "AI",
    statLabel: "Vision",
  },
  {
    icon: BookOpen,
    title: "NEC Reference",
    description: "Quick access to articles and tables. No more flipping through books.",
    gradient: "from-amber-500 to-amber-700",
    color: "#f59e0b",
    stat: "2023",
    statLabel: "NEC",
  },
  {
    icon: Zap,
    title: "Troubleshooting",
    description: "Step-by-step diagnostics for common electrical issues.",
    gradient: "from-cyan-500 to-cyan-700",
    color: "#06b6d4",
    stat: "50+",
    statLabel: "Guides",
  },
  {
    icon: Shield,
    title: "Formula Library",
    description: "Ohm's Law, power calculations, motor formulas, and more.",
    gradient: "from-rose-500 to-rose-700",
    color: "#f43f5e",
    stat: "100+",
    statLabel: "Formulas",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    // Use requestAnimationFrame for smoother mouse tracking
    requestAnimationFrame(() => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  };

  return (
    <div
      ref={cardRef}
      className="group relative rounded-2xl overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${feature.color}15, transparent 40%)`,
        }}
      />

      {/* Card content */}
      <div
        className="relative h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.05] group-hover:border-white/10 rounded-2xl p-6 transition-all duration-300 group-hover:translate-y-[-4px]"
        style={{
          boxShadow: isHovered
            ? `0 20px 40px -20px ${feature.color}30, 0 0 60px -30px ${feature.color}20`
            : "none",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
        />

        {/* Header with icon and stat */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
            style={{
              boxShadow: `0 10px 30px -10px ${feature.color}50`,
            }}
          >
            <feature.icon className="w-7 h-7 text-white" />
          </div>

          {/* Mini stat */}
          <div className="text-right opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-white">{feature.stat}</div>
            <div className="text-[10px] uppercase tracking-wider text-white/50">{feature.statLabel}</div>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
          {feature.title}
        </h3>
        <p className="text-sm text-white/50 group-hover:text-white/70 transition-colors leading-relaxed">
          {feature.description}
        </p>


        {/* Corner decoration */}
        <div
          className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at bottom right, ${feature.color}, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-ampora-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
            <Zap className="w-4 h-4 text-ampora-400" />
            <span className="text-sm text-ampora-300 font-medium">Features</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Everything You Need</span>
            <br />
            <span className="gradient-text">In Your Pocket</span>
          </h2>

          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Professional tools and AI-powered intelligence designed specifically for electrical work.
          </p>
        </div>

        {/* Grid with enhanced cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
           target="_blank"
           rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-ampora-500 to-ampora-600 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] hover:scale-105"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span>Get Ampora for iOS</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
