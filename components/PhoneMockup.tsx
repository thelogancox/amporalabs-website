"use client";

import { useState, useEffect, useRef } from "react";

export default function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 2);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    // Use requestAnimationFrame for smoother 3D effect
    requestAnimationFrame(() => {
      if (!phoneRef.current) return;
      const rect = phoneRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x: x * 6, y: y * -6 });
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={phoneRef}
      className="relative group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
    >
      {/* Glow - simplified for performance */}
      <div
        className="absolute -inset-8 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)' }}
      />

      {/* Phone */}
      <div
        className="relative w-[280px] sm:w-[320px] transform-gpu transition-transform duration-300 ease-out"
        style={{ transform: `rotateY(${mousePosition.x}deg) rotateX(${mousePosition.y}deg)` }}
      >
        {/* Frame */}
        <div className="relative rounded-[3rem] bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-900 p-[3px] shadow-2xl">
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
          <div className="rounded-[2.85rem] bg-black p-3 relative overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
              <div className="w-[100px] h-[30px] bg-black rounded-full" />
            </div>

            {/* Screen */}
            <div className="relative rounded-[2.4rem] overflow-hidden aspect-[9/19.5]" style={{ background: "#0a0014" }}>
              {/* Status Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-8 pb-1 text-[10px] text-white/60 z-10">
                <span className="font-medium">9:41</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-[2px]">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-[3px] bg-white/60 rounded-sm" style={{ height: `${4 + i * 2}px` }} />
                    ))}
                  </div>
                  <div className="w-6 h-3 border border-white/60 rounded-sm relative">
                    <div className="absolute inset-0.5 bg-white/60 rounded-sm" style={{ width: "80%" }} />
                  </div>
                </div>
              </div>

              {/* Particles removed for performance */}

              {/* Dashboard Screen - EXACT REPLICA */}
              <div
                className={`absolute inset-0 pt-14 transition-all duration-500 ${
                  activeScreen === 0 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}
                style={{ background: "linear-gradient(180deg, #000000 0%, #0a0a0f 30%, #1a1a2e 60%, #16213e 80%, #2d1b69 100%)" }}
              >
                {/* Content wrapper */}
                <div className="h-full overflow-hidden">
                  {/* Header - Exact match */}
                  <div className="px-4 pt-2 pb-3 flex items-center justify-between" style={{ background: "rgba(20, 20, 35, 0.95)" }}>
                    <div className="flex items-center gap-3">
                      {/* Logo */}
                      <div className="w-10 h-10 rounded-full flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)" }}>
                        <div className="absolute inset-0 rounded-full blur-md opacity-50" style={{ background: "linear-gradient(135deg, #6366f1, #a855f7)" }} />
                        <svg className="w-5 h-5 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-extralight text-lg tracking-[0.15em]">AMPORA</div>
                        <div className="text-white/50 text-[8px] uppercase tracking-wider">AI-Powered Intelligence</div>
                      </div>
                    </div>
                    {/* Menu button */}
                    <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))", border: "1px solid rgba(139, 92, 246, 0.3)" }}>
                      <div className="space-y-1">
                        <div className="w-3.5 h-0.5 bg-white/70 rounded" />
                        <div className="w-3.5 h-0.5 bg-white/70 rounded" />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 space-y-4">
                    {/* Hero Card - Ask AMPORA AI */}
                    <div className="relative rounded-2xl overflow-hidden">
                      {/* Outer glow */}
                      <div className="absolute -inset-1 rounded-2xl blur-lg opacity-40" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #d946ef)" }} />
                      <div className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)" }}>
                        {/* Glass overlay */}
                        <div className="absolute top-0 left-0 w-[60%] h-[60%] opacity-50" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)" }} />
                        <div className="relative px-4 py-3.5 flex items-center gap-3">
                          {/* Icon */}
                          <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.2)" }}>
                            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                            </svg>
                          </div>
                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-bold text-sm">Ask AMPORA AI</div>
                            <div className="text-white/80 text-[10px] leading-tight mt-0.5">Expert electrical advice & NEC codes</div>
                          </div>
                          {/* Arrow */}
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.25)" }}>
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Help Section */}
                    <div>
                      <div className="text-white/40 text-[9px] uppercase tracking-wider mb-2 font-medium">Quick Help</div>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { title: "Trouble-\nshooting", icon: "🔧", gradient: "linear-gradient(135deg, #f59e0b, #d97706)" },
                          { title: "Formulas", icon: "📐", gradient: "linear-gradient(135deg, #10b981, #059669)" },
                          { title: "NEC\nReference", icon: "📖", gradient: "linear-gradient(135deg, #3b82f6, #2563eb)" },
                        ].map((item) => (
                          <div key={item.title} className="rounded-2xl overflow-hidden relative" style={{ height: "80px" }}>
                            <div className="absolute inset-0" style={{ background: item.gradient }} />
                            {/* Glass overlay */}
                            <div className="absolute top-0 left-0 w-full h-1/2" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15), transparent)" }} />
                            <div className="relative h-full flex flex-col items-center justify-center p-2 text-center">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-1" style={{ background: "rgba(255,255,255,0.15)" }}>
                                <span className="text-sm">{item.icon}</span>
                              </div>
                              <div className="text-white text-[9px] font-bold whitespace-pre-line leading-tight">{item.title}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Professional Calculators */}
                    <div>
                      <div className="text-white/40 text-[9px] uppercase tracking-wider mb-2 font-medium">Professional Calculators</div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { title: "Load Calculator", icon: "⚡", color: "#fbbf24" },
                          { title: "Voltage Drop", icon: "📉", color: "#ef4444" },
                          { title: "Conduit Fill", icon: "🔌", color: "#8b5cf6" },
                          { title: "Wire Sizing", icon: "📏", color: "#06b6d4" },
                          { title: "Arc Flash", icon: "⚠️", color: "#f97316" },
                          { title: "Motor Sizing", icon: "⚙️", color: "#84cc16" },
                        ].map((calc) => (
                          <div
                            key={calc.title}
                            className="rounded-xl p-2.5 relative overflow-hidden"
                            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                          >
                            {/* Accent line */}
                            <div className="absolute top-0 left-4 right-4 h-0.5 rounded-full" style={{ background: calc.color }} />
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${calc.color}20` }}>
                                <span className="text-sm">{calc.icon}</span>
                              </div>
                              <div>
                                <div className="text-white text-[10px] font-semibold">{calc.title}</div>
                                <div className="text-white/40 text-[8px]">NEC compliant</div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Screen */}
              <div
                className={`absolute inset-0 pt-14 transition-all duration-500 ${
                  activeScreen === 1 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
                style={{ background: "linear-gradient(180deg, #0a0014 0%, #1a1a2e 100%)" }}
              >
                <div className="h-full flex flex-col">
                  {/* Chat Header */}
                  <div className="px-4 py-3 flex items-center gap-3" style={{ background: "rgba(20, 20, 35, 0.95)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center relative" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)" }}>
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">AMPORA AI</div>
                      <div className="text-green-400 text-[10px] flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                        Online
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-3 overflow-hidden">
                    <div className="flex justify-end">
                      <div className="rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[85%]" style={{ background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)" }}>
                        <p className="text-sm text-white">What size wire for 50A?</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}>
                        <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </div>
                      <div className="rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[85%]" style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                        <p className="text-sm text-white/90">
                          For 50A: <span className="text-ampora-300 font-medium">#6 AWG copper</span> or #4 AWG aluminum per NEC 310.16
                        </p>
                        <div className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1">
                          <svg className="w-3 h-3 text-ampora-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                          </svg>
                          <span className="text-[10px] text-ampora-400">NEC 310.16</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input */}
                  <div className="p-3" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="flex items-center gap-2 rounded-2xl px-4 py-3" style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
                      <span className="text-white/40 text-sm flex-1">Ask about NEC codes...</span>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #8b5cf6, #a855f7)" }}>
                        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom fade and home indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#2d1b69] to-transparent pointer-events-none" />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute right-0 top-28 w-[3px] h-8 bg-zinc-700 rounded-l-sm" />
        <div className="absolute left-0 top-20 w-[3px] h-6 bg-zinc-700 rounded-r-sm" />
        <div className="absolute left-0 top-32 w-[3px] h-10 bg-zinc-700 rounded-r-sm" />
        <div className="absolute left-0 top-44 w-[3px] h-10 bg-zinc-700 rounded-r-sm" />
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {["Dashboard", "AI Chat"].map((label, i) => (
          <button
            key={i}
            onClick={() => setActiveScreen(i)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              i === activeScreen ? "bg-gradient-to-r from-ampora-500 to-ampora-600 text-white" : "bg-white/5 text-white/40"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
