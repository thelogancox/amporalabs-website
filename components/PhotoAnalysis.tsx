"use client";

import { useState, useEffect, useRef } from "react";
import { Camera, CheckCircle, AlertTriangle, Eye, Zap } from "lucide-react";

const results = [
  { type: "success", title: "200A Main Panel", desc: "Square D QO series identified", code: "NEC 408" },
  { type: "success", title: "Proper Grounding", desc: "Equipment bonding verified", code: "NEC 250" },
  { type: "warning", title: "Double-tapped Neutral", desc: "Right bus bar needs attention", code: "NEC 408.41" },
  { type: "success", title: "Working Space", desc: "Clearance requirements met", code: "NEC 110.26" },
];

export default function PhotoAnalysis() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [visibleResults, setVisibleResults] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setShowResults(false);
    setVisibleResults(0);

    // Progress animation
    intervalRef.current = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Show results
    setTimeout(() => {
      setIsScanning(false);
      setShowResults(true);
      // Reveal results one by one
      results.forEach((_, i) => {
        setTimeout(() => setVisibleResults(i + 1), i * 300);
      });
    }, 2200);
  };

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(startScan, 1000);
    return () => {
      clearTimeout(timer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section id="photo-scan" className="relative py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Scanning Breaker Panel Visual */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative flex items-center justify-center scale-[0.85] sm:scale-100">
              {/* Breaker Panel - Behind the phone */}
              <div className="relative w-[240px] sm:w-[280px] h-[320px] sm:h-[380px] bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg border-4 border-zinc-600 shadow-2xl">
                {/* Panel door frame */}
                <div className="absolute inset-2 bg-zinc-800 rounded border border-zinc-600">
                  {/* Main breaker */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-zinc-600 rounded flex items-center justify-center border border-zinc-500">
                    <span className="text-[10px] text-white/70 font-bold tracking-wider">MAIN 200A</span>
                  </div>

                  {/* Breaker rows */}
                  <div className="absolute top-16 left-4 right-4 grid grid-cols-2 gap-x-8 gap-y-2">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-5 rounded-sm flex items-center justify-center ${
                          i === 7 ? "bg-red-600/80" : "bg-zinc-600"
                        } border border-zinc-500`}
                      >
                        <div className={`w-3 h-2 rounded-sm ${i === 7 ? "bg-red-400" : "bg-zinc-400"}`} />
                      </div>
                    ))}
                  </div>

                  {/* Bus bars */}
                  <div className="absolute bottom-16 left-8 right-8 flex justify-between">
                    <div className="w-2 h-16 bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-sm" />
                    <div className="w-2 h-16 bg-gradient-to-b from-zinc-400 to-zinc-500 rounded-sm" />
                    <div className="w-2 h-16 bg-gradient-to-b from-yellow-500/80 to-yellow-600/80 rounded-sm" />
                  </div>

                  {/* Ground bar */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-green-700/70 rounded-sm border border-green-600/50" />
                </div>

                {/* Scanning effects on panel */}
                {isScanning && (
                  <>
                    {/* Scan line */}
                    <div
                      className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-10"
                      style={{
                        top: `${scanProgress}%`,
                        boxShadow: "0 0 30px rgba(34, 211, 238, 0.9), 0 0 60px rgba(34, 211, 238, 0.5)",
                        transition: "top 40ms linear"
                      }}
                    />
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-30 rounded-lg"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(34, 211, 238, 0.4) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(34, 211, 238, 0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: "20px 20px",
                      }}
                    />
                  </>
                )}

                {/* Detection boxes when results show */}
                {showResults && (
                  <>
                    {/* Main breaker detection */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-12 border-2 border-green-400 rounded-lg z-10">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 rounded text-[9px] text-white font-bold whitespace-nowrap shadow-lg">
                        200A Panel
                      </div>
                    </div>
                    {/* Issue detection */}
                    <div className="absolute top-[140px] right-6 w-10 h-24 border-2 border-yellow-400 rounded-lg z-10 animate-pulse">
                      <div className="absolute -right-16 top-1/2 -translate-y-1/2 px-2 py-1 bg-yellow-500 rounded text-[9px] text-black font-bold whitespace-nowrap shadow-lg">
                        Issue Found
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Phone mockup - Overlapping the panel */}
              <div className="absolute -right-4 sm:-right-8 lg:-right-4 top-1/2 -translate-y-1/2 z-20">
                {/* Phone glow */}
                <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-[50px] blur-2xl" />

                {/* Phone device */}
                <div className="relative w-[140px] sm:w-[180px] h-[280px] sm:h-[360px] bg-zinc-900 rounded-[28px] sm:rounded-[36px] border-3 sm:border-4 border-zinc-700 shadow-2xl overflow-hidden">
                  {/* Screen bezel */}
                  <div className="absolute inset-2 bg-black rounded-[28px] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20" />

                    {/* Camera app UI */}
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black">
                      {/* Camera viewfinder showing panel */}
                      <div className="absolute inset-3 top-10 bottom-20 rounded-xl overflow-hidden bg-zinc-800/50 border border-white/10">
                        {/* Mini panel view in viewfinder */}
                        <div className="absolute inset-2 bg-zinc-700/50 rounded-lg flex items-center justify-center">
                          <div className="w-full h-full p-1">
                            <div className="w-full h-full bg-zinc-600/50 rounded grid grid-cols-2 gap-0.5 p-1">
                              {Array.from({ length: 8 }).map((_, i) => (
                                <div key={i} className={`rounded-sm ${i === 3 ? "bg-red-500/50" : "bg-zinc-500/50"}`} />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Corner brackets */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400" />

                        {/* Scan effect in viewfinder */}
                        {isScanning && (
                          <div
                            className="absolute left-0 right-0 h-0.5 bg-cyan-400"
                            style={{
                              top: `${scanProgress}%`,
                              boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)",
                              transition: "top 40ms linear"
                            }}
                          />
                        )}
                      </div>

                      {/* Status bar */}
                      <div className="absolute bottom-4 left-3 right-3">
                        {isScanning ? (
                          <div className="bg-cyan-500/20 rounded-xl p-2 border border-cyan-500/30">
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                              <span className="text-[8px] text-cyan-400 font-medium">Analyzing...</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-cyan-400 rounded-full transition-all"
                                style={{ width: `${scanProgress}%` }}
                              />
                            </div>
                          </div>
                        ) : showResults ? (
                          <div className="bg-green-500/20 rounded-xl p-2 border border-green-500/30">
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              <span className="text-[8px] text-green-400 font-medium">Analysis Complete</span>
                            </div>
                          </div>
                        ) : (
                          <div className="bg-white/10 rounded-xl p-2 border border-white/20">
                            <span className="text-[8px] text-white/60 font-medium">Send photo to analyze</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Phone side button */}
                  <div className="absolute right-[-4px] top-24 w-1 h-12 bg-zinc-600 rounded-l" />
                </div>
              </div>

              {/* Scan beam effect from phone to panel */}
              {isScanning && (
                <div className="absolute left-[180px] top-1/2 -translate-y-1/2 w-[80px] h-[200px] z-10 pointer-events-none">
                  <div
                    className="w-full h-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.1) 20%, rgba(34, 211, 238, 0.2) 50%, rgba(34, 211, 238, 0.1) 80%, transparent)",
                      clipPath: "polygon(0 30%, 100% 0, 100% 100%, 0 70%)",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Results panel below */}
            {showResults && (
              <div className="mt-8 bg-zinc-900/50 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white font-medium">Analysis Results</span>
                </div>
                <div className="space-y-2">
                  {results.map((r, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                        visibleResults > i
                          ? "bg-white/5 opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-4"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        r.type === "success" ? "bg-green-500/20" : "bg-yellow-500/20"
                      }`}>
                        {r.type === "success" ? (
                          <CheckCircle className="w-3.5 h-3.5 text-green-400" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-yellow-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-white truncate">{r.title}</p>
                        <p className="text-[10px] text-white/40 truncate">{r.desc}</p>
                      </div>
                      <span className="text-[10px] text-white/30 font-mono">{r.code}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Camera className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Photo AI</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">AI That Sees</span>
              <br />
              <span className="gradient-text-electric">What You See</span>
            </h2>

            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Snap a photo of any electrical installation and send it to Ampora. Our AI instantly
              identifies components, checks code compliance, and spots potential hazards.
            </p>

            <div className="space-y-4">
              {[
                { icon: Eye, text: "Identifies panel types & components" },
                { icon: CheckCircle, text: "Verifies NEC code compliance" },
                { icon: AlertTriangle, text: "Flags potential safety issues" },
                { icon: Zap, text: "Provides instant recommendations" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-white/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
