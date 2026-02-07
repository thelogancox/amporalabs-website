import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, CollectionPageJsonLd } from "@/components/JsonLd";
import { ReactNode } from "react";

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "NEC Code": { bg: "bg-purple-600/30", text: "text-purple-300", border: "border-purple-500/30" },
  "Calculations": { bg: "bg-amber-600/30", text: "text-amber-300", border: "border-amber-500/30" },
  "Inspections": { bg: "bg-green-600/30", text: "text-green-300", border: "border-green-500/30" },
  "Technology": { bg: "bg-cyan-600/30", text: "text-cyan-300", border: "border-cyan-500/30" },
  "Troubleshooting": { bg: "bg-red-600/30", text: "text-red-300", border: "border-red-500/30" },
  "Materials": { bg: "bg-orange-600/30", text: "text-orange-300", border: "border-orange-500/30" },
  "Installation": { bg: "bg-emerald-600/30", text: "text-emerald-300", border: "border-emerald-500/30" },
  "Safety": { bg: "bg-rose-600/30", text: "text-rose-300", border: "border-rose-500/30" },
};

function getCategoryColor(category: string) {
  return categoryColors[category] || { bg: "bg-gray-600/30", text: "text-gray-300", border: "border-gray-500/30" };
}

// Thumbnail SVG components for each post
function getThumbnail(slug: string): ReactNode {
  const thumbnails: Record<string, ReactNode> = {
    "nec-article-210-branch-circuits-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="25" height="50" rx="3" fill="#7c3aed" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="15" y="22" width="15" height="4" rx="1" fill="#a855f7"/>
        <rect x="15" y="30" width="15" height="4" rx="1" fill="#a855f7"/>
        <rect x="15" y="38" width="15" height="4" rx="1" fill="#a855f7"/>
        <line x1="35" y1="24" x2="60" y2="24" stroke="#a855f7" strokeWidth="2"/>
        <line x1="35" y1="32" x2="60" y2="32" stroke="#a855f7" strokeWidth="2"/>
        <line x1="35" y1="40" x2="60" y2="40" stroke="#a855f7" strokeWidth="2"/>
        <rect x="60" y="18" width="20" height="12" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <rect x="60" y="34" width="20" height="12" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="95" cy="24" r="8" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="80" y1="24" x2="87" y2="24" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="70" fill="#9ca3af" fontSize="8">Branch Circuits</text>
      </svg>
    ),
    "how-to-calculate-voltage-drop": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <defs>
          <linearGradient id="vdrop" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e"/>
            <stop offset="100%" stopColor="#ef4444"/>
          </linearGradient>
        </defs>
        <rect x="10" y="25" width="100" height="8" rx="4" fill="url(#vdrop)" fillOpacity="0.4"/>
        <rect x="10" y="25" width="100" height="8" rx="4" fill="none" stroke="url(#vdrop)" strokeWidth="1.5"/>
        <text x="10" y="20" fill="#22c55e" fontSize="9" fontWeight="bold">120V</text>
        <text x="90" y="20" fill="#ef4444" fontSize="9" fontWeight="bold">114V</text>
        <path d="M60 40 L60 55 L50 50 L60 55 L70 50" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
        <text x="45" y="68" fill="#f59e0b" fontSize="8">5% Drop</text>
      </svg>
    ),
    "electrical-inspection-checklist": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="8" width="70" height="64" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1.5"/>
        <rect x="30" y="14" width="60" height="8" rx="2" fill="#22c55e" fillOpacity="0.3"/>
        <g transform="translate(35, 28)">
          <rect x="0" y="0" width="10" height="10" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
          <path d="M2 5 L4 7 L8 3" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
          <text x="14" y="8" fill="#9ca3af" fontSize="7">Panel labeled</text>
        </g>
        <g transform="translate(35, 42)">
          <rect x="0" y="0" width="10" height="10" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
          <path d="M2 5 L4 7 L8 3" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
          <text x="14" y="8" fill="#9ca3af" fontSize="7">GFCI tested</text>
        </g>
        <g transform="translate(35, 56)">
          <rect x="0" y="0" width="10" height="10" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
          <text x="14" y="8" fill="#9ca3af" fontSize="7">Box fill OK</text>
        </g>
      </svg>
    ),
    "wire-sizing-guide-nec-ampacity-tables": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="25" cy="25" r="12" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="25" y="28" textAnchor="middle" fill="#f59e0b" fontSize="8">#14</text>
        <circle cx="55" cy="25" r="14" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="55" y="28" textAnchor="middle" fill="#22c55e" fontSize="8">#12</text>
        <circle cx="90" cy="25" r="16" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="90" y="28" textAnchor="middle" fill="#3b82f6" fontSize="8">#10</text>
        <text x="25" y="48" textAnchor="middle" fill="#9ca3af" fontSize="7">15A</text>
        <text x="55" y="48" textAnchor="middle" fill="#9ca3af" fontSize="7">20A</text>
        <text x="90" y="48" textAnchor="middle" fill="#9ca3af" fontSize="7">30A</text>
        <text x="60" y="68" textAnchor="middle" fill="#6b7280" fontSize="8">AWG Ampacity</text>
      </svg>
    ),
    "ai-tools-for-electricians": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="8" width="50" height="64" rx="8" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <rect x="40" y="14" width="40" height="45" rx="4" fill="#0f172a"/>
        <rect x="44" y="18" width="32" height="8" rx="2" fill="#06b6d4" fillOpacity="0.3"/>
        <rect x="44" y="30" width="24" height="6" rx="2" fill="#a855f7" fillOpacity="0.4"/>
        <rect x="44" y="40" width="28" height="6" rx="2" fill="#06b6d4" fillOpacity="0.3"/>
        <rect x="44" y="50" width="20" height="6" rx="2" fill="#a855f7" fillOpacity="0.4"/>
        <circle cx="60" cy="66" r="3" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="95" cy="40" r="12" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <text x="95" y="43" textAnchor="middle" fill="#a855f7" fontSize="10">AI</text>
      </svg>
    ),
    "nec-article-250-grounding-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="45" y="8" width="30" height="35" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="60" y1="43" x2="60" y2="55" stroke="#22c55e" strokeWidth="2"/>
        <line x1="40" y1="55" x2="80" y2="55" stroke="#22c55e" strokeWidth="2"/>
        <line x1="45" y1="55" x2="45" y2="72" stroke="#22c55e" strokeWidth="2"/>
        <line x1="75" y1="55" x2="75" y2="72" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="45" cy="72" r="5" fill="#92400e" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="70" y="67" width="10" height="8" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1"/>
        <text x="60" y="28" textAnchor="middle" fill="#22c55e" fontSize="7">GEC</text>
      </svg>
    ),
    "conduit-fill-calculation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="35" cy="40" r="20" fill="none" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="28" cy="35" r="5" fill="#ef4444" fillOpacity="0.5" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="42" cy="35" r="5" fill="#3b82f6" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="35" cy="47" r="5" fill="#22c55e" fillOpacity="0.5" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="85" cy="40" r="20" fill="none" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="78" cy="33" r="4" fill="#ef4444" fillOpacity="0.5" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="92" cy="33" r="4" fill="#3b82f6" fillOpacity="0.5" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="78" cy="47" r="4" fill="#22c55e" fillOpacity="0.5" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="92" cy="47" r="4" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="85" cy="40" r="4" fill="#a855f7" fillOpacity="0.5" stroke="#a855f7" strokeWidth="1"/>
        <text x="35" y="70" textAnchor="middle" fill="#9ca3af" fontSize="7">40%</text>
        <text x="85" y="70" textAnchor="middle" fill="#ef4444" fontSize="7">53%</text>
      </svg>
    ),
    "thhn-vs-thwn-wire-differences": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="45" height="40" rx="4" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="32" y="35" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">THHN</text>
        <text x="32" y="48" textAnchor="middle" fill="#fca5a5" fontSize="7">90°C Dry</text>
        <rect x="65" y="20" width="45" height="40" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="87" y="35" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">THWN</text>
        <text x="87" y="48" textAnchor="middle" fill="#93c5fd" fontSize="7">75°C Wet</text>
        <text x="60" y="72" textAnchor="middle" fill="#6b7280" fontSize="8">Wire Types</text>
      </svg>
    ),
    "electrical-panel-troubleshooting": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="40" height="60" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="20" y="18" width="12" height="6" rx="1" fill="#ef4444"/>
        <rect x="20" y="28" width="12" height="6" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="20" y="38" width="12" height="6" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="36" y="18" width="12" height="6" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="36" y="28" width="12" height="6" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="36" y="38" width="12" height="6" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <circle cx="85" cy="40" r="20" fill="#1f2937" stroke="#f59e0b" strokeWidth="2"/>
        <text x="85" y="38" textAnchor="middle" fill="#f59e0b" fontSize="8">120V</text>
        <line x1="85" y1="45" x2="85" y2="52" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="55" y1="21" x2="65" y2="40" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2"/>
      </svg>
    ),
    "nec-service-entrance-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="15" y1="70" x2="15" y2="15" stroke="#92400e" strokeWidth="3"/>
        <line x1="15" y1="20" x2="40" y2="15" stroke="#374151" strokeWidth="2"/>
        <path d="M40 10 L40 20 L50 20 L50 10 Z" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="45" y1="20" x2="45" y2="35" stroke="#374151" strokeWidth="2"/>
        <circle cx="45" cy="42" r="7" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="45" y1="49" x2="45" y2="55" stroke="#374151" strokeWidth="2"/>
        <rect x="35" y="55" width="20" height="20" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="55" y1="65" x2="65" y2="65" stroke="#22c55e" strokeWidth="2"/>
        <line x1="65" y1="65" x2="65" y2="75" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="65" cy="77" r="3" fill="#92400e" stroke="#f59e0b" strokeWidth="1"/>
        <text x="85" y="45" fill="#9ca3af" fontSize="7">Service</text>
        <text x="85" y="55" fill="#9ca3af" fontSize="7">Entrance</text>
      </svg>
    ),
    "nec-article-240-overcurrent-protection": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="20" width="35" height="45" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="25" y="28" width="10" height="15" rx="2" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <rect x="40" y="28" width="10" height="15" rx="2" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <text x="37" y="58" textAnchor="middle" fill="#fca5a5" fontSize="7">Breakers</text>
        <rect x="70" y="25" width="30" height="35" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <ellipse cx="85" cy="42" rx="8" ry="12" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="85" y="45" textAnchor="middle" fill="#fcd34d" fontSize="7">Fuse</text>
      </svg>
    ),
    "3-phase-power-calculations": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="60" cy="40" r="25" fill="none" stroke="#374151" strokeWidth="1"/>
        <circle cx="60" cy="18" r="6" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="60" y="21" textAnchor="middle" fill="#ef4444" fontSize="7">A</text>
        <circle cx="38" cy="55" r="6" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="38" y="58" textAnchor="middle" fill="#f59e0b" fontSize="7">B</text>
        <circle cx="82" cy="55" r="6" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="82" y="58" textAnchor="middle" fill="#3b82f6" fontSize="7">C</text>
        <line x1="60" y1="24" x2="60" y2="40" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="43" y1="52" x2="60" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="77" y1="52" x2="60" y2="40" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="100" y="25" fill="#22c55e" fontSize="8">√3</text>
      </svg>
    ),
    "gfci-vs-afci-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="45" height="50" rx="4" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="32" y="32" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">GFCI</text>
        <circle cx="25" cy="48" r="5" fill="#22c55e" fillOpacity="0.3"/>
        <circle cx="40" cy="48" r="5" fill="#ef4444" fillOpacity="0.3"/>
        <text x="32" y="60" textAnchor="middle" fill="#86efac" fontSize="6">Ground Fault</text>
        <rect x="65" y="15" width="45" height="50" rx="4" fill="#a855f7" fillOpacity="0.1" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="87" y="32" textAnchor="middle" fill="#a855f7" fontSize="9" fontWeight="bold">AFCI</text>
        <path d="M75 45 L80 50 L85 42 L90 52 L95 44 L100 48" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
        <text x="87" y="60" textAnchor="middle" fill="#c4b5fd" fontSize="6">Arc Fault</text>
      </svg>
    ),
    "box-fill-calculations-nec-314": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="15" width="70" height="50" rx="4" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="40" cy="35" r="6" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="55" cy="35" r="6" fill="#3b82f6" fillOpacity="0.4" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="70" cy="35" r="6" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="1"/>
        <circle cx="85" cy="35" r="6" fill="#a855f7" fillOpacity="0.4" stroke="#a855f7" strokeWidth="1"/>
        <rect x="45" y="48" width="30" height="10" rx="2" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">18 cu. in.</text>
      </svg>
    ),
    "motor-circuit-protection-sizing": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="75" cy="40" r="22" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
        <circle cx="75" cy="40" r="12" fill="#1f2937" stroke="#3b82f6" strokeWidth="1"/>
        <text x="75" y="44" textAnchor="middle" fill="#3b82f6" fontSize="10">M</text>
        <rect x="15" y="30" width="25" height="20" rx="2" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="27" y="43" textAnchor="middle" fill="#ef4444" fontSize="7">OL</text>
        <line x1="40" y1="40" x2="53" y2="40" stroke="#374151" strokeWidth="2"/>
        <text x="27" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6">125%</text>
        <text x="75" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">FLC</text>
      </svg>
    ),
    "aluminum-vs-copper-wiring": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="30" width="45" height="20" rx="10" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2"/>
        <text x="32" y="44" textAnchor="middle" fill="#f59e0b" fontSize="9" fontWeight="bold">Cu</text>
        <rect x="65" y="30" width="45" height="20" rx="10" fill="#9ca3af" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="2"/>
        <text x="87" y="44" textAnchor="middle" fill="#d1d5db" fontSize="9" fontWeight="bold">Al</text>
        <text x="32" y="60" textAnchor="middle" fill="#fcd34d" fontSize="7">Copper</text>
        <text x="87" y="60" textAnchor="middle" fill="#9ca3af" fontSize="7">Aluminum</text>
        <text x="60" y="22" textAnchor="middle" fill="#6b7280" fontSize="8">VS</text>
      </svg>
    ),
    "residential-load-calculations": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M30 65 L30 25 L60 10 L90 25 L90 65 Z" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="50" y="45" width="20" height="20" fill="#374151" stroke="#22c55e" strokeWidth="1"/>
        <rect x="38" y="30" width="10" height="10" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="72" y="30" width="10" height="10" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="105" y="35" fill="#22c55e" fontSize="8">200A</text>
        <text x="105" y="48" fill="#9ca3af" fontSize="7">Service</text>
      </svg>
    ),
    "ev-charger-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="70" y="15" width="35" height="50" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="87" cy="35" r="10" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M84 32 L84 38 L90 35 L84 32" fill="#22c55e"/>
        <rect x="80" y="50" width="14" height="8" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <path d="M15 35 L15 55 L45 55 L45 45 L35 45 L35 35 Z" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="22" cy="50" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="38" cy="50" r="5" fill="#1f2937" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="45" y1="40" x2="70" y2="32" stroke="#22c55e" strokeWidth="2" strokeDasharray="3"/>
      </svg>
    ),
    "transformer-sizing-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <ellipse cx="40" cy="40" rx="15" ry="25" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <ellipse cx="80" cy="40" rx="15" ry="25" fill="none" stroke="#22c55e" strokeWidth="2"/>
        <rect x="55" y="25" width="10" height="30" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="40" y="44" textAnchor="middle" fill="#f59e0b" fontSize="8">480V</text>
        <text x="80" y="44" textAnchor="middle" fill="#22c55e" fontSize="8">120V</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="8">kVA</text>
      </svg>
    ),
    "emergency-standby-power-systems": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="25" width="30" height="35" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="15" y="35" width="20" height="15" rx="2" fill="#22c55e" fillOpacity="0.2"/>
        <text x="25" y="45" textAnchor="middle" fill="#22c55e" fontSize="7">GEN</text>
        <rect x="50" y="25" width="20" height="35" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="45" textAnchor="middle" fill="#f59e0b" fontSize="6">ATS</text>
        <rect x="80" y="25" width="30" height="35" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="95" y="38" textAnchor="middle" fill="#ef4444" fontSize="6">EMERG</text>
        <text x="95" y="50" textAnchor="middle" fill="#ef4444" fontSize="6">PANEL</text>
        <line x1="40" y1="42" x2="50" y2="42" stroke="#374151" strokeWidth="2"/>
        <line x1="70" y1="42" x2="80" y2="42" stroke="#374151" strokeWidth="2"/>
      </svg>
    ),
    "bathroom-electrical-code-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="15" width="90" height="50" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <ellipse cx="45" cy="35" rx="18" ry="10" fill="#374151" stroke="#9ca3af" strokeWidth="1"/>
        <text x="45" y="38" textAnchor="middle" fill="#9ca3af" fontSize="6">Sink</text>
        <circle cx="80" cy="35" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="80" y1="35" x2="80" y2="22" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="80" y="52" textAnchor="middle" fill="#22c55e" fontSize="5">GFCI</text>
        <rect x="25" y="55" width="30" height="15" rx="2" fill="#0ea5e9" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="1"/>
        <text x="40" y="65" textAnchor="middle" fill="#0ea5e9" fontSize="5">Shower</text>
      </svg>
    ),
    "underground-wiring-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="10" width="100" height="15" fill="#0c4a6e" fillOpacity="0.3"/>
        <line x1="10" y1="25" x2="110" y2="25" stroke="#78350f" strokeWidth="2"/>
        <rect x="10" y="25" width="100" height="45" fill="#422006" fillOpacity="0.3"/>
        <line x1="30" y1="25" x2="30" y2="60" stroke="#f59e0b" strokeWidth="4"/>
        <line x1="60" y1="25" x2="60" y2="45" stroke="#6b7280" strokeWidth="6"/>
        <rect x="57" y="25" width="6" height="20" fill="#1f2937"/>
        <line x1="90" y1="25" x2="90" y2="55" stroke="#4b5563" strokeWidth="6"/>
        <rect x="87" y="25" width="6" height="30" fill="#1f2937"/>
        <text x="30" y="72" textAnchor="middle" fill="#fcd34d" fontSize="5">24"</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">6"</text>
        <text x="90" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">18"</text>
      </svg>
    ),
    "electrical-symbols-blueprint-reading": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="10" width="100" height="60" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <g stroke="#60a5fa" strokeWidth="0.5" opacity="0.3">
          <line x1="10" y1="30" x2="110" y2="30"/>
          <line x1="10" y1="50" x2="110" y2="50"/>
          <line x1="40" y1="10" x2="40" y2="70"/>
          <line x1="80" y1="10" x2="80" y2="70"/>
        </g>
        <circle cx="30" cy="40" r="6" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="30" y1="40" x2="30" y2="30" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="55" y="42" fill="#f59e0b" fontSize="10">S</text>
        <circle cx="85" cy="40" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="80" y1="35" x2="90" y2="45" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="80" y1="45" x2="90" y2="35" stroke="#fbbf24" strokeWidth="1"/>
      </svg>
    ),
    "power-factor-correction-basics": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="20" y1="60" x2="80" y2="60" stroke="#22c55e" strokeWidth="3"/>
        <line x1="80" y1="60" x2="80" y2="25" stroke="#f59e0b" strokeWidth="3"/>
        <line x1="20" y1="60" x2="80" y2="25" stroke="#a855f7" strokeWidth="3"/>
        <text x="50" y="72" textAnchor="middle" fill="#22c55e" fontSize="7">kW</text>
        <text x="88" y="45" textAnchor="middle" fill="#f59e0b" fontSize="7">kVAR</text>
        <text x="40" y="40" textAnchor="middle" fill="#a855f7" fontSize="7">kVA</text>
        <path d="M 30 60 A 10 10 0 0 0 35 52" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="38" y="55" fill="#ef4444" fontSize="6">θ</text>
        <text x="100" y="35" fill="#22c55e" fontSize="8" fontWeight="bold">PF</text>
        <text x="100" y="48" fill="#86efac" fontSize="7">0.85</text>
      </svg>
    ),
    "outdoor-receptacle-requirements-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="100" height="50" rx="2" fill="#374151" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1"/>
        <line x1="10" y1="70" x2="110" y2="70" stroke="#78350f" strokeWidth="2"/>
        <rect x="25" y="30" width="30" height="35" rx="3" fill="#6b7280" stroke="#22c55e" strokeWidth="2"/>
        <path d="M 28 33 L 28 60 L 52 60 L 52 33 Q 52 28 40 28 Q 28 28 28 33" fill="#374151" stroke="#22c55e" strokeWidth="1"/>
        <rect x="34" y="42" width="12" height="8" rx="1" fill="#f5f5f4" fillOpacity="0.3"/>
        <rect x="34" y="53" width="12" height="4" fill="#1f2937"/>
        <text x="40" y="75" textAnchor="middle" fill="#22c55e" fontSize="6">In-Use</text>
        <rect x="70" y="35" width="25" height="25" rx="3" fill="#6b7280" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="73" y="38" width="19" height="19" rx="2" fill="#4b5563"/>
        <text x="82" y="52" textAnchor="middle" fill="#9ca3af" fontSize="6">WP</text>
        <text x="82" y="75" textAnchor="middle" fill="#fcd34d" fontSize="6">Standard</text>
      </svg>
    ),
    "hazardous-locations-nec-500": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="35" cy="40" r="20" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4"/>
        <text x="35" y="35" textAnchor="middle" fill="#ef4444" fontSize="7">Class I</text>
        <text x="35" y="48" textAnchor="middle" fill="#fca5a5" fontSize="6">Gases</text>
        <circle cx="85" cy="40" r="20" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4"/>
        <text x="85" y="35" textAnchor="middle" fill="#f59e0b" fontSize="7">Class II</text>
        <text x="85" y="48" textAnchor="middle" fill="#fcd34d" fontSize="6">Dust</text>
        <path d="M45 70 L55 62 L65 70 L75 62" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
        <text x="60" y="78" textAnchor="middle" fill="#9ca3af" fontSize="6">Hazardous</text>
      </svg>
    ),
    "electrical-grounding-vs-bonding": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="10" width="35" height="50" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="37" y="30" textAnchor="middle" fill="#22c55e" fontSize="7">GND</text>
        <line x1="37" y1="60" x2="37" y2="75" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="37" cy="77" r="4" fill="#92400e" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="65" y="10" width="35" height="50" rx="3" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="82" y="30" textAnchor="middle" fill="#3b82f6" fontSize="7">BND</text>
        <line x1="82" y1="60" x2="82" y2="65" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="70" y1="65" x2="94" y2="65" stroke="#3b82f6" strokeWidth="2"/>
        <text x="60" y="78" textAnchor="middle" fill="#9ca3af" fontSize="6">vs</text>
      </svg>
    ),
    "solar-pv-system-installation-nec-690": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="20" cy="20" r="12" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="20" y1="5" x2="20" y2="10" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="32" y1="8" x2="28" y2="12" stroke="#fbbf24" strokeWidth="1.5"/>
        <rect x="40" y="15" width="35" height="25" rx="2" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="45" y1="20" x2="70" y2="20" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="45" y1="27" x2="70" y2="27" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="45" y1="34" x2="70" y2="34" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="85" y="20" width="20" height="35" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="95" y="40" textAnchor="middle" fill="#22c55e" fontSize="7">INV</text>
        <line x1="75" y1="27" x2="85" y2="37" stroke="#374151" strokeWidth="2"/>
        <text x="57" y="55" textAnchor="middle" fill="#9ca3af" fontSize="6">PV Array</text>
      </svg>
    ),
    "derating-factors-conductor-ampacity": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="20" width="90" height="12" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="60" y="29" textAnchor="middle" fill="#22c55e" fontSize="7">100A Base</text>
        <rect x="15" y="38" width="70" height="12" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="50" y="47" textAnchor="middle" fill="#f59e0b" fontSize="7">80A Temp</text>
        <rect x="15" y="56" width="50" height="12" rx="2" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="40" y="65" textAnchor="middle" fill="#ef4444" fontSize="7">56A Fill</text>
        <path d="M90 35 L95 44 L100 35" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
        <path d="M75 53 L80 62 L85 53" stroke="#9ca3af" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    "electrical-service-upgrade-200-amp": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="15" width="35" height="50" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="3"/>
        <text x="37" y="38" textAnchor="middle" fill="#6b7280" fontSize="8">100A</text>
        <text x="37" y="52" textAnchor="middle" fill="#6b7280" fontSize="6">OLD</text>
        <path d="M58 40 L68 40 M63 35 L68 40 L63 45" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <rect x="72" y="15" width="35" height="50" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="89" y="38" textAnchor="middle" fill="#22c55e" fontSize="8">200A</text>
        <text x="89" y="52" textAnchor="middle" fill="#86efac" fontSize="6">NEW</text>
      </svg>
    ),
    "swimming-pool-electrical-nec-680": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <ellipse cx="60" cy="45" rx="45" ry="20" fill="#0ea5e9" fillOpacity="0.2" stroke="#0ea5e9" strokeWidth="1.5"/>
        <circle cx="40" cy="45" r="5" fill="#fbbf24" fillOpacity="0.5" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="80" y="20" width="25" height="20" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="92" y="33" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
        <line x1="25" y1="70" x2="95" y2="70" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4"/>
        <text x="60" y="78" textAnchor="middle" fill="#fcd34d" fontSize="6">Bonding Grid</text>
      </svg>
    ),
    "commercial-lighting-controls-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="25" width="25" height="35" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <circle cx="27" cy="35" r="5" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
        <rect x="20" y="45" width="15" height="8" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        <line x1="40" y1="42" x2="55" y2="35" stroke="#374151" strokeWidth="1.5" strokeDasharray="3"/>
        <line x1="40" y1="42" x2="55" y2="50" stroke="#374151" strokeWidth="1.5" strokeDasharray="3"/>
        <circle cx="65" cy="35" r="8" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5"/>
        <circle cx="65" cy="50" r="8" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1.5"/>
        <circle cx="90" cy="42" r="10" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="90" y="45" textAnchor="middle" fill="#22c55e" fontSize="6">PIR</text>
      </svg>
    ),
    "temporary-wiring-construction-sites": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="30" height="40" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="25" y="38" textAnchor="middle" fill="#f59e0b" fontSize="6">TEMP</text>
        <text x="25" y="50" textAnchor="middle" fill="#fcd34d" fontSize="6">PANEL</text>
        <line x1="40" y1="40" x2="60" y2="40" stroke="#f59e0b" strokeWidth="3"/>
        <rect x="60" y="30" width="25" height="20" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="72" y="43" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
        <line x1="85" y1="40" x2="105" y2="40" stroke="#374151" strokeWidth="3"/>
        <circle cx="105" cy="40" r="8" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1"/>
        <text x="105" y="60" textAnchor="middle" fill="#9ca3af" fontSize="5">Tool</text>
      </svg>
    ),
    "electrical-fault-current-calculations": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="25" width="25" height="30" rx="2" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="27" y="43" textAnchor="middle" fill="#ef4444" fontSize="7">XFMR</text>
        <line x1="40" y1="40" x2="60" y2="40" stroke="#ef4444" strokeWidth="2"/>
        <path d="M55 32 L65 40 L55 48" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <rect x="70" y="25" width="35" height="30" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="87" y="38" textAnchor="middle" fill="#f59e0b" fontSize="6">22kA</text>
        <text x="87" y="50" textAnchor="middle" fill="#fcd34d" fontSize="6">AIC</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">Fault Current</text>
      </svg>
    ),
    "kitchen-electrical-requirements-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="25" width="100" height="8" rx="1" fill="#78350f" fillOpacity="0.3" stroke="#a16207" strokeWidth="1"/>
        <circle cx="25" cy="45" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="25" y="48" textAnchor="middle" fill="#22c55e" fontSize="6">1</text>
        <circle cx="50" cy="45" r="8" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="50" y="48" textAnchor="middle" fill="#22c55e" fontSize="6">2</text>
        <circle cx="75" cy="45" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="75" y="48" textAnchor="middle" fill="#f59e0b" fontSize="6">3</text>
        <circle cx="100" cy="45" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="100" y="48" textAnchor="middle" fill="#f59e0b" fontSize="6">4</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">Small Appliance Circuits</text>
      </svg>
    ),
    "commercial-kitchen-electrical-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="10" width="40" height="25" rx="2" fill="#6b7280" fillOpacity="0.3" stroke="#6b7280" strokeWidth="1"/>
        <text x="30" y="26" textAnchor="middle" fill="#9ca3af" fontSize="6">Hood</text>
        <rect x="15" y="40" width="30" height="30" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="30" y="58" textAnchor="middle" fill="#ef4444" fontSize="7">Range</text>
        <rect x="55" y="40" width="25" height="30" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="67" y="58" textAnchor="middle" fill="#3b82f6" fontSize="6">Fryer</text>
        <rect x="85" y="40" width="25" height="30" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="97" y="58" textAnchor="middle" fill="#22c55e" fontSize="6">Refer</text>
      </svg>
    ),
    "data-center-electrical-design": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="25" height="50" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="22" y="35" textAnchor="middle" fill="#22c55e" fontSize="6">UPS</text>
        <text x="22" y="50" textAnchor="middle" fill="#86efac" fontSize="5">2N</text>
        <rect x="45" y="15" width="30" height="50" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="50" y="22" width="20" height="5" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="50" y="32" width="20" height="5" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="50" y="42" width="20" height="5" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="50" y="52" width="20" height="5" fill="#a855f7" fillOpacity="0.3"/>
        <text x="60" y="68" textAnchor="middle" fill="#9ca3af" fontSize="5">Racks</text>
        <rect x="85" y="15" width="25" height="50" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="97" y="42" textAnchor="middle" fill="#f59e0b" fontSize="6">GEN</text>
      </svg>
    ),
    "low-voltage-wiring-basics": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="20" width="40" height="15" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="35" y="31" textAnchor="middle" fill="#3b82f6" fontSize="7">Class 2</text>
        <rect x="65" y="20" width="40" height="15" rx="2" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="85" y="31" textAnchor="middle" fill="#a855f7" fontSize="7">Class 3</text>
        <line x1="20" y1="50" x2="100" y2="50" stroke="#22c55e" strokeWidth="3"/>
        <line x1="20" y1="55" x2="100" y2="55" stroke="#3b82f6" strokeWidth="2"/>
        <line x1="20" y1="60" x2="100" y2="60" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="20" y1="65" x2="100" y2="65" stroke="#9ca3af" strokeWidth="2"/>
        <text x="60" y="78" textAnchor="middle" fill="#9ca3af" fontSize="6">Cat6 Cable</text>
      </svg>
    ),
    "electrical-safety-nfpa-70e": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M60 10 L70 30 L65 30 L75 50 L55 35 L60 35 L45 15 Z" fill="#f59e0b" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="20" y="55" width="80" height="15" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="60" y="66" textAnchor="middle" fill="#ef4444" fontSize="8">PPE Required</text>
        <text x="90" y="25" fill="#22c55e" fontSize="7">Cat 2</text>
        <text x="90" y="38" fill="#86efac" fontSize="6">8 cal</text>
      </svg>
    ),
    "receptacle-types-configurations-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="30" height="40" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <ellipse cx="17" cy="35" rx="3" ry="5" fill="#4b5563"/>
        <ellipse cx="33" cy="35" rx="3" ry="5" fill="#4b5563"/>
        <circle cx="25" cy="50" r="3" fill="#4b5563"/>
        <text x="25" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">5-15R</text>
        <rect x="50" y="20" width="30" height="40" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <ellipse cx="57" cy="35" rx="3" ry="5" fill="#4b5563"/>
        <ellipse cx="73" cy="35" rx="3" ry="5" fill="#4b5563"/>
        <rect x="63" cy="33" width="6" height="3" fill="#4b5563"/>
        <circle cx="65" cy="50" r="3" fill="#4b5563"/>
        <text x="65" y="72" textAnchor="middle" fill="#22c55e" fontSize="6">5-20R</text>
        <rect x="90" y="20" width="20" height="40" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="100" cy="40" r="8" fill="none" stroke="#4b5563" strokeWidth="2"/>
        <text x="100" y="72" textAnchor="middle" fill="#f59e0b" fontSize="6">L14</text>
      </svg>
    ),
  };

  return thumbnails[slug] || (
    <svg viewBox="0 0 120 80" className="w-full h-full">
      <rect x="20" y="15" width="80" height="50" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
      <path d="M50 30 L60 25 L70 30 L70 50 L50 50 Z" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
      <circle cx="60" cy="38" r="8" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
      <path d="M57 36 L57 42 L63 39 Z" fill="#a855f7"/>
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Electrical Blog | NEC Code Guides, Calculators & AI Tips for Electricians",
  description: "Expert electrical guides for electricians. Learn NEC code, voltage drop calculations, wire sizing, electrical inspection tips, and how AI tools can help on the job site. Free educational resources from Ampora Labs.",
  keywords: [
    "electrical blog",
    "electrician blog",
    "NEC code guide",
    "electrical tips",
    "electrician resources",
    "electrical education",
    "NEC article explanations",
    "voltage drop guide",
    "wire sizing guide",
    "electrical inspection tips",
    "electrical troubleshooting guide",
    "AI for electricians guide",
    "electrical code explained",
    "electrician training resources",
    "electrical calculations guide"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog",
  },
  openGraph: {
    title: "Electrical Blog | Guides for Electricians - Ampora",
    description: "Expert electrical guides. NEC code explanations, calculation tutorials, inspection tips, and AI tools for electricians.",
    url: "https://amporalabs.com/blog",
    type: "website",
  },
};

// Blog post data - this would typically come from a CMS or database
export const blogPosts = [
  {
    slug: "nec-article-210-branch-circuits-guide",
    title: "NEC Article 210 Explained: Complete Guide to Branch Circuits",
    description: "Master NEC Article 210 branch circuit requirements. Learn about receptacle outlets, lighting loads, GFCI requirements, and conductor sizing for residential and commercial installations.",
    category: "NEC Code",
    date: "2025-01-27",
    readTime: "12 min read",
    featured: true,
  },
  {
    slug: "how-to-calculate-voltage-drop",
    title: "How to Calculate Voltage Drop: Step-by-Step Guide for Electricians",
    description: "Learn the complete voltage drop calculation process for single-phase and three-phase circuits. Includes NEC requirements, formulas, examples, and when to upsize conductors.",
    category: "Calculations",
    date: "2025-01-23",
    readTime: "10 min read",
    featured: true,
  },
  {
    slug: "electrical-inspection-checklist",
    title: "Electrical Inspection Checklist: Pass Your Inspection First Time",
    description: "Complete electrical inspection checklist covering residential and commercial work. Common code violations, what inspectors look for, and how to prepare for rough-in and final inspections.",
    category: "Inspections",
    date: "2025-01-20",
    readTime: "15 min read",
    featured: true,
  },
  {
    slug: "wire-sizing-guide-nec-ampacity-tables",
    title: "Wire Sizing Guide: How to Use NEC Ampacity Tables",
    description: "Complete guide to sizing conductors using NEC ampacity tables. Learn temperature correction, conduit fill derating, and how to select the right wire gauge for any application.",
    category: "Calculations",
    date: "2024-12-10",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "ai-tools-for-electricians",
    title: "AI Tools for Electricians: How AI is Changing the Electrical Trade",
    description: "Discover how AI assistants help electricians with code lookup, calculations, troubleshooting, and photo analysis. Real-world examples of AI improving productivity on the job site.",
    category: "Technology",
    date: "2024-12-06",
    readTime: "8 min read",
    featured: false,
  },
  {
    slug: "nec-article-250-grounding-guide",
    title: "NEC Article 250 Explained: Complete Grounding and Bonding Guide",
    description: "Master NEC Article 250 grounding requirements. Learn about grounding electrode conductors, equipment grounding, bonding, and how to size GECs and EGCs correctly.",
    category: "NEC Code",
    date: "2024-12-13",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "conduit-fill-calculation-guide",
    title: "Conduit Fill Calculation Guide: NEC Chapter 9 Tables Explained",
    description: "Learn how to calculate conduit fill using NEC Chapter 9 tables. Understand the 40% rule, jam ratio, and how to size conduit for any wire combination.",
    category: "Calculations",
    date: "2024-12-17",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "thhn-vs-thwn-wire-differences",
    title: "THHN vs THWN Wire: What's the Difference and When to Use Each",
    description: "Understand the key differences between THHN and THWN wire types. Learn about wet location ratings, temperature limits, and NEC requirements for proper wire selection.",
    category: "NEC Code",
    date: "2024-12-20",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "electrical-panel-troubleshooting",
    title: "Electrical Panel Troubleshooting: Common Problems and Solutions",
    description: "Diagnose and fix common electrical panel issues. Learn about tripping breakers, buzzing sounds, hot spots, and when to recommend a panel upgrade.",
    category: "Troubleshooting",
    date: "2024-12-24",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "nec-service-entrance-requirements",
    title: "NEC Service Entrance Requirements: Complete Installation Guide",
    description: "Master NEC service entrance requirements including clearances, conductor sizing, grounding, and meter base installation. Essential guide for residential and commercial services.",
    category: "NEC Code",
    date: "2024-12-30",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "nec-article-240-overcurrent-protection",
    title: "NEC Article 240: Overcurrent Protection Complete Guide",
    description: "Master overcurrent protection requirements including breaker sizing, fuse selection, conductor protection, and tap rules. Essential NEC 240 knowledge for electricians.",
    category: "NEC Code",
    date: "2025-01-03",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "3-phase-power-calculations",
    title: "3-Phase Power Calculations: Complete Guide for Electricians",
    description: "Master three-phase power calculations including watts, VA, power factor, delta vs wye configurations, and line vs phase values for commercial electrical work.",
    category: "Calculations",
    date: "2025-01-06",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "gfci-vs-afci-requirements",
    title: "GFCI vs AFCI: Understanding the Differences and NEC Requirements",
    description: "Complete guide to GFCI and AFCI protection. Learn how each works, where NEC requires them, combination devices, and common installation mistakes.",
    category: "NEC Code",
    date: "2025-01-10",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "box-fill-calculations-nec-314",
    title: "Box Fill Calculations: NEC Article 314 Complete Guide",
    description: "Master electrical box fill calculations using NEC Table 314.16. Learn conductor equivalents, device counting, and how to avoid overfilled boxes.",
    category: "Calculations",
    date: "2025-01-13",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "motor-circuit-protection-sizing",
    title: "Motor Circuit Protection & Sizing: NEC Article 430 Guide",
    description: "Master motor circuit sizing and protection per NEC Article 430. Learn overload protection, short-circuit protection, conductor sizing, and motor FLA tables.",
    category: "NEC Code",
    date: "2025-01-16",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "aluminum-vs-copper-wiring",
    title: "Aluminum vs Copper Wiring: Pros, Cons, and NEC Requirements",
    description: "Compare aluminum and copper conductors for electrical installations. Learn ampacity differences, termination requirements, and when to use each type.",
    category: "Materials",
    date: "2025-01-24",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "residential-load-calculations",
    title: "Residential Load Calculations: NEC Article 220 Complete Guide",
    description: "Master residential electrical load calculations per NEC Article 220. Learn standard and optional methods, demand factors, and how to size services.",
    category: "Calculations",
    date: "2025-01-28",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "ev-charger-installation-guide",
    title: "EV Charger Installation Guide: NEC Requirements for Electricians",
    description: "Complete guide to electric vehicle charger installation. Learn NEC 625 requirements, Level 1 vs Level 2 charging, circuit sizing, and EVSE best practices.",
    category: "Installation",
    date: "2025-01-30",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "transformer-sizing-guide",
    title: "Transformer Sizing Guide: kVA Calculations & NEC Requirements",
    description: "Learn how to properly size transformers for electrical installations. Covers kVA calculations, primary/secondary sizing, and NEC Article 450 protection.",
    category: "NEC Code",
    date: "2025-02-01",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "emergency-standby-power-systems",
    title: "Emergency & Standby Power Systems: NEC Articles 700, 701, 702 Guide",
    description: "Understand emergency, legally required, and optional standby power systems. Learn NEC requirements for transfer switches, generators, and circuit separation.",
    category: "NEC Code",
    date: "2025-02-03",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "bathroom-electrical-code-requirements",
    title: "Bathroom Electrical Code Requirements: NEC GFCI, Circuit & Receptacle Rules",
    description: "Complete guide to NEC bathroom electrical requirements including GFCI protection, dedicated circuits, exhaust fan requirements, receptacle placement rules, and lighting circuit sizing.",
    category: "NEC Code",
    date: "2025-02-05",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "underground-wiring-installation-guide",
    title: "Underground Wiring Installation Guide: NEC Burial Depth & Methods",
    description: "Complete guide to underground electrical wiring installation. Learn NEC burial depth requirements, direct burial vs conduit methods, UF cable selection, and trenching best practices.",
    category: "Installation",
    date: "2025-02-05",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "electrical-symbols-blueprint-reading",
    title: "Electrical Symbols & Blueprint Reading: Complete Guide for Electricians",
    description: "Learn to read electrical blueprints and drawings. Complete guide to electrical symbols, single-line diagrams, three-line diagrams, and plan reading for residential and commercial installations.",
    category: "Technology",
    date: "2025-02-05",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "power-factor-correction-basics",
    title: "Power Factor Correction Basics: Understanding & Calculating Capacitor Sizing",
    description: "Learn power factor correction fundamentals for electricians. Understand what causes poor power factor, how to calculate capacitor sizing, kVAR requirements, and NEC considerations.",
    category: "Calculations",
    date: "2025-02-05",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "outdoor-receptacle-requirements-nec",
    title: "Outdoor Receptacle Requirements NEC: GFCI, Covers & Placement Rules",
    description: "Complete guide to NEC outdoor receptacle requirements. Learn GFCI protection rules, weatherproof vs in-use cover requirements, placement and height specifications.",
    category: "NEC Code",
    date: "2025-02-05",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "hazardous-locations-nec-500",
    title: "NEC Article 500: Hazardous Locations Classification Guide",
    description: "Complete guide to hazardous locations per NEC Article 500. Learn Class I, II, III divisions, Zone classifications, equipment selection, and installation requirements.",
    category: "NEC Code",
    date: "2025-02-06",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-grounding-vs-bonding",
    title: "Electrical Grounding vs Bonding: Understanding the Difference",
    description: "Clear explanation of grounding vs bonding in electrical systems. Learn NEC definitions, when each is required, conductor sizing, and common code violations.",
    category: "NEC Code",
    date: "2025-02-06",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "solar-pv-system-installation-nec-690",
    title: "Solar PV Installation Guide: NEC Article 690 Requirements",
    description: "Complete guide to solar PV system installation per NEC 690. Learn rapid shutdown requirements, conductor sizing, disconnects, grounding, and labeling.",
    category: "Installation",
    date: "2025-02-06",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "derating-factors-conductor-ampacity",
    title: "Derating Factors for Conductor Ampacity: NEC 310.15 Guide",
    description: "Master conductor ampacity derating factors. Learn temperature correction, conduit fill adjustment, and how to apply NEC Table 310.15 for proper wire sizing.",
    category: "Calculations",
    date: "2025-02-06",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "electrical-service-upgrade-200-amp",
    title: "200 Amp Service Upgrade: Planning, NEC Requirements & Installation",
    description: "Complete guide to upgrading residential electrical service to 200 amps. Learn load calculations, NEC requirements, equipment selection, and permit process.",
    category: "Installation",
    date: "2025-02-06",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "swimming-pool-electrical-nec-680",
    title: "Swimming Pool Electrical Requirements: NEC Article 680 Guide",
    description: "Master NEC Article 680 for pools, spas, and hot tubs. Learn bonding requirements, GFCI protection, equipment clearances, and underwater lighting rules.",
    category: "NEC Code",
    date: "2025-02-06",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "commercial-lighting-controls-nec",
    title: "Commercial Lighting Controls: NEC & Energy Code Requirements",
    description: "Guide to commercial lighting control requirements. Learn occupancy sensors, daylight harvesting, dimming controls, and energy code compliance.",
    category: "Installation",
    date: "2025-02-06",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "temporary-wiring-construction-sites",
    title: "Temporary Wiring for Construction Sites: NEC Article 590 Guide",
    description: "Complete guide to temporary power on construction sites per NEC 590. Learn GFCI requirements, cord and cable rules, and temporary service installation.",
    category: "Installation",
    date: "2025-02-06",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "electrical-fault-current-calculations",
    title: "Electrical Fault Current Calculations: Complete Guide",
    description: "Learn to calculate available fault current for electrical systems. Understand AIC ratings, short-circuit protection, and equipment coordination.",
    category: "Calculations",
    date: "2025-02-06",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "kitchen-electrical-requirements-nec",
    title: "Kitchen Electrical Requirements: NEC Code Guide",
    description: "Complete guide to residential kitchen electrical requirements. Learn small appliance circuits, countertop receptacle spacing, GFCI rules, and dedicated circuits.",
    category: "NEC Code",
    date: "2025-02-06",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "commercial-kitchen-electrical-requirements",
    title: "Commercial Kitchen Electrical Requirements: NEC Installation Guide",
    description: "Guide to commercial kitchen electrical installation. Learn equipment circuits, hood ventilation wiring, cord-and-plug connections, and NEC requirements.",
    category: "Installation",
    date: "2025-02-07",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "data-center-electrical-design",
    title: "Data Center Electrical Design: Power Distribution & Redundancy",
    description: "Guide to data center electrical systems. Learn power distribution architecture, UPS configurations, generator integration, and Tier classifications.",
    category: "Installation",
    date: "2025-02-07",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "low-voltage-wiring-basics",
    title: "Low Voltage Wiring Basics: Class 2 & 3 Circuits Guide",
    description: "Guide to low voltage wiring per NEC Article 725. Learn Class 2 and 3 circuits, separation from power wiring, and structured cabling systems.",
    category: "Installation",
    date: "2025-02-07",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "electrical-safety-nfpa-70e",
    title: "NFPA 70E Electrical Safety: Arc Flash PPE & Lockout/Tagout Guide",
    description: "Complete guide to NFPA 70E workplace electrical safety. Learn arc flash PPE categories, approach boundaries, and lockout/tagout procedures.",
    category: "Safety",
    date: "2025-02-07",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "receptacle-types-configurations-guide",
    title: "Receptacle Types & NEMA Configurations: Complete Guide",
    description: "Complete guide to NEMA receptacle configurations. Learn 15A, 20A, 30A, 50A receptacles, twist-lock types, and special purpose receptacles.",
    category: "Materials",
    date: "2025-02-07",
    readTime: "9 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
          ]}
        />
        <CollectionPageJsonLd
          name="Ampora Electrical Blog"
          description="Expert electrical guides, NEC code explanations, and AI tools for electricians"
          url="https://amporalabs.com/blog"
          items={blogPosts.map(post => ({
            name: post.title,
            url: `https://amporalabs.com/blog/${post.slug}`
          }))}
        />

        <article className="max-w-6xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Electrical Blog
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Expert guides on NEC code, electrical calculations, inspection tips, and how AI is transforming the electrical trade. Free resources for professional electricians.
            </p>
          </header>

          {/* Featured Posts */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post) => {
                const colors = getCategoryColor(post.category);
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group bg-white/5 hover:bg-white/10 rounded-2xl overflow-hidden transition-all hover:scale-105 border ${colors.border}`}
                  >
                    {/* Thumbnail */}
                    <div className="h-32 bg-gradient-to-br from-gray-900 to-gray-800 p-4 border-b border-white/10">
                      {getThumbnail(post.slug)}
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                          {post.category}
                        </span>
                        <span className="text-white/40 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-display font-bold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60 text-sm line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40 text-xs">{post.date}</span>
                        <span className={`${colors.text} text-sm font-medium`}>Read More →</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Recent Posts */}
          {recentPosts.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-display font-bold mb-6">More Articles</h2>
              <div className="space-y-4">
                {recentPosts.map((post) => {
                  const colors = getCategoryColor(post.category);
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className={`group flex flex-col md:flex-row md:items-center p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border ${colors.border}`}
                    >
                      {/* Thumbnail */}
                      <div className="w-full md:w-32 h-20 md:h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-2 flex-shrink-0 mb-3 md:mb-0 md:mr-5">
                        {getThumbnail(post.slug)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-medium rounded-full`}>
                            {post.category}
                          </span>
                          <span className="text-white/40 text-xs">{post.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors line-clamp-1">
                          {post.title}
                        </h3>
                        <p className="text-white/60 text-sm mt-1 line-clamp-1 hidden md:block">
                          {post.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-3 md:mt-0 md:ml-4">
                        <span className="text-white/40 text-sm">{post.date}</span>
                        <span className={`${colors.text} text-sm font-medium whitespace-nowrap`}>Read →</span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold mb-6">Browse by Topic</h2>
            <div className="flex flex-wrap gap-3">
              {["NEC Code", "Calculations", "Inspections", "Technology", "Troubleshooting", "Materials", "Installation"].map((category) => {
                const colors = getCategoryColor(category);
                return (
                  <span
                    key={category}
                    className={`px-5 py-2 ${colors.bg} ${colors.text} border ${colors.border} rounded-full text-sm font-medium cursor-pointer hover:opacity-80 transition-all`}
                  >
                    {category}
                  </span>
                );
              })}
            </div>
          </section>

          {/* Newsletter / CTA */}
          <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Get Electrical Guides in Your Pocket
            </h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Download Ampora to access NEC code reference, AI-powered Q&A, electrical calculators, and more. Everything an electrician needs on the job site.
            </p>
            <a
              href="https://apps.apple.com/us/app/ampora/id6753693522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Download Free on App Store
            </a>
          </section>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/ai-assistant" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
