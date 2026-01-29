"use client";

import { Calculator, Zap, TrendingDown, Box, Ruler, AlertTriangle, Cog } from "lucide-react";

const calculators = [
  { name: "Load Calculator", shortDesc: "Demand factors", description: "Electrical loads & demand factors", Icon: Zap, gradient: "from-amber-500 to-orange-600", glow: "rgba(245, 158, 11, 0.3)" },
  { name: "Voltage Drop", shortDesc: "Wire sizing", description: "Wire sizing for NEC limits", Icon: TrendingDown, gradient: "from-blue-500 to-blue-700", glow: "rgba(59, 130, 246, 0.3)" },
  { name: "Conduit Fill", shortDesc: "Size calc", description: "Conduit size requirements", Icon: Box, gradient: "from-green-500 to-green-700", glow: "rgba(34, 197, 94, 0.3)" },
  { name: "Wire Sizing", shortDesc: "Ampacity", description: "Conductor ampacity selection", Icon: Ruler, gradient: "from-purple-500 to-purple-700", glow: "rgba(168, 85, 247, 0.3)" },
  { name: "Arc Flash", shortDesc: "PPE levels", description: "Incident energy & PPE levels", Icon: AlertTriangle, gradient: "from-red-500 to-red-700", glow: "rgba(239, 68, 68, 0.3)" },
  { name: "Motor Sizing", shortDesc: "NEC 430", description: "Protection per NEC 430", Icon: Cog, gradient: "from-cyan-500 to-cyan-700", glow: "rgba(6, 182, 212, 0.3)" },
];

export default function Calculators() {
  return (
    <section id="calculators" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
            <Calculator className="w-4 h-4 text-ampora-400" />
            <span className="text-sm text-ampora-300 font-medium">Tools</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="text-white">6 Professional</span>
            <br />
            <span className="gradient-text">Calculators</span>
          </h2>

          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto">
            Industry-standard calculations based on NEC requirements.
          </p>
        </div>

        {/* Grid - 2x3 on mobile, 3x2 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {calculators.map((calc) => (
            <div
              key={calc.name}
              className="group relative bg-zinc-900/50 hover:bg-zinc-800/50 border border-white/5 hover:border-ampora-500/30 rounded-2xl p-3 sm:p-5 transition-colors duration-300 overflow-hidden"
              style={{ transform: 'translateZ(0)' }}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${calc.glow}, transparent 70%)` }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${calc.gradient} flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <calc.Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="font-display text-sm sm:text-lg font-bold text-white mb-0.5 sm:mb-1">{calc.name}</h3>
                <p className="text-[11px] sm:text-sm text-white/50">{calc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://apps.apple.com/us/app/ampora/id6753693522"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <Calculator className="w-5 h-5" />
            Get All Calculators
          </a>
        </div>
      </div>
    </section>
  );
}
