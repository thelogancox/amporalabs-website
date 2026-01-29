"use client";

import { BookOpen, Wrench, FileText } from "lucide-react";

const references = [
  {
    icon: Wrench,
    title: "Troubleshooting",
    items: ["Flickering lights", "Tripping breakers", "GFCI issues", "Motor problems"],
    gradient: "from-orange-500 to-red-600",
  },
  {
    icon: FileText,
    title: "Formulas",
    items: ["Ohm's Law (V=IR)", "Power (P=VI)", "3-Phase calcs", "Motor FLA"],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "NEC Reference",
    items: ["Table 310.16", "Article 430", "Article 240", "Table 250.66"],
    gradient: "from-ampora-500 to-ampora-700",
  },
];

export default function QuickReference() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ampora-500/10 border border-ampora-500/20 mb-6">
            <BookOpen className="w-4 h-4 text-ampora-400" />
            <span className="text-sm text-ampora-300 font-medium">Reference</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Quick Access to</span>
            <br />
            <span className="gradient-text">Everything</span>
          </h2>
        </div>

        {/* Cards - centered on mobile, left-aligned on desktop */}
        <div className="grid md:grid-cols-3 gap-5">
          {references.map((ref) => (
            <div
              key={ref.title}
              className="group bg-zinc-900/50 hover:bg-zinc-800/50 border border-white/5 hover:border-ampora-500/30 rounded-2xl p-6 transition-all duration-200 text-center md:text-left"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ref.gradient} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200 mx-auto md:mx-0`}>
                <ref.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">{ref.title}</h3>
              <ul className="space-y-2 inline-block md:block">
                {ref.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-center md:justify-start gap-2 text-sm text-white/50">
                    <div className="w-1 h-1 rounded-full bg-ampora-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
