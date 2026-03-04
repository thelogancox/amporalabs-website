import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import BlogPostList from "@/components/BlogPostList";
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
    "garage-electrical-requirements-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="100" height="50" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <rect x="40" y="50" width="40" height="15" rx="1" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <rect x="15" y="25" width="15" height="20" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="22" y="38" textAnchor="middle" fill="#22c55e" fontSize="5">SUB</text>
        <circle cx="60" cy="35" r="5" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
        <rect x="85" y="25" width="18" height="18" rx="2" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="94" y="37" textAnchor="middle" fill="#3b82f6" fontSize="6">EV</text>
        <text x="60" y="73" textAnchor="middle" fill="#9ca3af" fontSize="7">Garage</text>
      </svg>
    ),
    "electrical-conduit-types-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="25" cy="30" r="10" fill="none" stroke="#6b7280" strokeWidth="3"/>
        <text x="25" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">EMT</text>
        <circle cx="55" cy="30" r="10" fill="none" stroke="#f59e0b" strokeWidth="3"/>
        <text x="55" y="50" textAnchor="middle" fill="#f59e0b" fontSize="6">RMC</text>
        <circle cx="85" cy="30" r="10" fill="none" stroke="#22c55e" strokeWidth="3"/>
        <text x="85" y="50" textAnchor="middle" fill="#22c55e" fontSize="6">PVC</text>
        <text x="55" y="68" textAnchor="middle" fill="#6b7280" fontSize="7">Conduit Types</text>
      </svg>
    ),
    "whole-house-surge-protection-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="40" y="15" width="40" height="45" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="60" y="35" textAnchor="middle" fill="#22c55e" fontSize="7">SPD</text>
        <text x="60" y="48" textAnchor="middle" fill="#86efac" fontSize="6">50kA</text>
        <path d="M20 15 L25 25 L22 25 L27 35 L18 28 L21 28 L16 18 Z" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="95" cy="35" r="10" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M91 35 L94 38 L100 32" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">Surge Protection</text>
      </svg>
    ),
    "smoke-detector-wiring-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="30" cy="30" r="12" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="30" cy="30" r="5" fill="#ef4444" fillOpacity="0.4"/>
        <circle cx="60" cy="30" r="12" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="60" cy="30" r="5" fill="#ef4444" fillOpacity="0.4"/>
        <circle cx="90" cy="30" r="12" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="90" cy="30" r="5" fill="#ef4444" fillOpacity="0.4"/>
        <line x1="42" y1="30" x2="48" y2="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2"/>
        <line x1="72" y1="30" x2="78" y2="30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="2"/>
        <text x="60" y="55" textAnchor="middle" fill="#fcd34d" fontSize="6">Interconnected</text>
        <text x="60" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">Smoke Detectors</text>
      </svg>
    ),
    "electrical-wire-color-code-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="15" y1="20" x2="105" y2="20" stroke="#111827" strokeWidth="6"/>
        <line x1="15" y1="30" x2="105" y2="30" stroke="#ef4444" strokeWidth="6"/>
        <line x1="15" y1="40" x2="105" y2="40" stroke="#3b82f6" strokeWidth="6"/>
        <line x1="15" y1="50" x2="105" y2="50" stroke="#f5f5f4" strokeWidth="6"/>
        <line x1="15" y1="60" x2="105" y2="60" stroke="#22c55e" strokeWidth="6"/>
        <text x="60" y="75" textAnchor="middle" fill="#9ca3af" fontSize="7">Wire Colors</text>
      </svg>
    ),
    "generator-transfer-switch-installation": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="25" height="25" rx="2" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="22" y="36" textAnchor="middle" fill="#3b82f6" fontSize="6">UTIL</text>
        <rect x="48" y="15" width="25" height="35" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="30" textAnchor="middle" fill="#f59e0b" fontSize="5">ATS</text>
        <text x="60" y="42" textAnchor="middle" fill="#fcd34d" fontSize="5">200A</text>
        <rect x="85" y="20" width="25" height="25" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="97" y="36" textAnchor="middle" fill="#22c55e" fontSize="6">GEN</text>
        <line x1="35" y1="32" x2="48" y2="32" stroke="#374151" strokeWidth="2"/>
        <line x1="73" y1="32" x2="85" y2="32" stroke="#374151" strokeWidth="2"/>
        <text x="60" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">Transfer Switch</text>
      </svg>
    ),
    "electrical-load-balancing-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="55" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="40" y="18" width="18" height="5" rx="1" fill="#ef4444" fillOpacity="0.5"/>
        <rect x="62" y="18" width="18" height="5" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="40" y="27" width="18" height="5" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="62" y="27" width="18" height="5" rx="1" fill="#ef4444" fillOpacity="0.5"/>
        <rect x="40" y="36" width="18" height="5" rx="1" fill="#3b82f6" fillOpacity="0.5"/>
        <rect x="62" y="36" width="18" height="5" rx="1" fill="#3b82f6" fillOpacity="0.5"/>
        <rect x="40" y="45" width="18" height="5" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="62" y="45" width="18" height="5" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">Load Balance</text>
      </svg>
    ),
    "nec-article-334-romex-nm-cable": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="15" y1="35" x2="105" y2="35" stroke="#f5f5f4" strokeWidth="8"/>
        <line x1="15" y1="35" x2="105" y2="35" stroke="#d1d5db" strokeWidth="6"/>
        <circle cx="85" cy="35" r="12" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="3"/>
        <circle cx="85" cy="31" r="3" fill="#111827"/>
        <circle cx="81" cy="37" r="3" fill="#f5f5f4" stroke="#6b7280" strokeWidth="0.5"/>
        <circle cx="89" cy="37" r="3" fill="#22c55e"/>
        <text x="40" y="20" fill="#f59e0b" fontSize="8" fontWeight="bold">NM-B</text>
        <text x="60" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6">14/2 w/ Ground</text>
        <text x="60" y="72" textAnchor="middle" fill="#6b7280" fontSize="7">Romex Cable</text>
      </svg>
    ),
    "multimeter-guide-electricians": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="8" width="60" height="64" rx="6" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="38" y="14" width="44" height="22" rx="3" fill="#0f172a" stroke="#374151" strokeWidth="1"/>
        <text x="60" y="30" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">120.3</text>
        <text x="72" y="30" fill="#22c55e" fontSize="6">V</text>
        <circle cx="60" cy="50" r="10" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <line x1="60" y1="50" x2="55" y2="43" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="48" cy="66" r="3" fill="#ef4444"/>
        <circle cx="60" cy="66" r="3" fill="#111827" stroke="#6b7280" strokeWidth="0.5"/>
        <circle cx="72" cy="66" r="3" fill="#6b7280"/>
      </svg>
    ),
    "nec-working-space-clearances-110-26": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="70" y="10" width="30" height="55" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="85" y="35" textAnchor="middle" fill="#a855f7" fontSize="6">PANEL</text>
        <line x1="30" y1="10" x2="30" y2="65" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3"/>
        <line x1="30" y1="65" x2="70" y2="65" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="30" y1="10" x2="70" y2="10" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="50" y="72" textAnchor="middle" fill="#22c55e" fontSize="6">36&quot; min</text>
        <text x="50" y="42" textAnchor="middle" fill="#f59e0b" fontSize="8">CLEAR</text>
      </svg>
    ),
    "whole-house-rewiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M30 60 L30 25 L60 12 L90 25 L90 60 Z" fill="#1f2937" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="45" y1="30" x2="75" y2="30" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3"/>
        <line x1="45" y1="40" x2="75" y2="40" stroke="#22c55e" strokeWidth="2"/>
        <line x1="45" y1="50" x2="75" y2="50" stroke="#22c55e" strokeWidth="2"/>
        <text x="40" y="25" fill="#ef4444" fontSize="5">OLD</text>
        <text x="80" y="38" fill="#22c55e" fontSize="5">NEW</text>
        <text x="60" y="75" textAnchor="middle" fill="#9ca3af" fontSize="7">Rewiring</text>
      </svg>
    ),
    "electrical-apprenticeship-career-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="25" width="25" height="30" rx="3" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="27" y="38" textAnchor="middle" fill="#3b82f6" fontSize="5">APP</text>
        <text x="27" y="48" textAnchor="middle" fill="#93c5fd" fontSize="5">1-4yr</text>
        <rect x="48" y="20" width="25" height="35" rx="3" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="60" y="35" textAnchor="middle" fill="#22c55e" fontSize="5">JW</text>
        <text x="60" y="48" textAnchor="middle" fill="#86efac" fontSize="5">4-8yr</text>
        <rect x="81" y="15" width="25" height="40" rx="3" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="93" y="33" textAnchor="middle" fill="#f59e0b" fontSize="5">ME</text>
        <text x="93" y="48" textAnchor="middle" fill="#fcd34d" fontSize="5">8+yr</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">Career Path</text>
      </svg>
    ),
    "fire-alarm-wiring-nec-760": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="15" width="25" height="20" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="27" y="28" textAnchor="middle" fill="#ef4444" fontSize="6">FACP</text>
        <line x1="40" y1="25" x2="55" y2="25" stroke="#ef4444" strokeWidth="1.5"/>
        <circle cx="65" cy="25" r="8" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="65" y="28" textAnchor="middle" fill="#ef4444" fontSize="6">S</text>
        <line x1="73" y1="25" x2="85" y2="25" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="85" y="17" width="20" height="16" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1"/>
        <text x="95" y="28" textAnchor="middle" fill="#f59e0b" fontSize="5">NAC</text>
        <text x="60" y="52" textAnchor="middle" fill="#ef4444" fontSize="6">SLC &#8594; IDC &#8594; NAC</text>
        <text x="60" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">Fire Alarm</text>
      </svg>
    ),
    "panel-schedule-labeling-nec-408": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="10" width="80" height="60" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="25" y="16" width="70" height="10" rx="2" fill="#a855f7" fillOpacity="0.2"/>
        <text x="60" y="24" textAnchor="middle" fill="#a855f7" fontSize="6">PANEL SCHEDULE</text>
        <rect x="28" y="30" width="30" height="5" rx="1" fill="#374151"/>
        <text x="43" y="34" textAnchor="middle" fill="#9ca3af" fontSize="4">Kitchen 20A</text>
        <rect x="62" y="30" width="30" height="5" rx="1" fill="#374151"/>
        <text x="77" y="34" textAnchor="middle" fill="#9ca3af" fontSize="4">Bedroom 15A</text>
        <rect x="28" y="38" width="30" height="5" rx="1" fill="#374151"/>
        <rect x="62" y="38" width="30" height="5" rx="1" fill="#374151"/>
        <rect x="28" y="46" width="30" height="5" rx="1" fill="#374151"/>
        <rect x="62" y="46" width="30" height="5" rx="1" fill="#374151"/>
        <text x="60" y="62" textAnchor="middle" fill="#f59e0b" fontSize="5">AIC: 22,000A</text>
      </svg>
    ),
    "disconnect-switch-requirements-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="55" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="45" y="20" width="30" height="15" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="60" y="31" textAnchor="middle" fill="#ef4444" fontSize="7">OFF</text>
        <line x1="60" y1="38" x2="60" y2="52" stroke="#6b7280" strokeWidth="3"/>
        <circle cx="60" cy="55" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">Disconnect</text>
      </svg>
    ),
    "knob-and-tube-wiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="25" cy="35" r="8" fill="#78350f" fillOpacity="0.5" stroke="#92400e" strokeWidth="1.5"/>
        <circle cx="25" cy="35" r="3" fill="#1f2937"/>
        <line x1="33" y1="35" x2="67" y2="35" stroke="#111827" strokeWidth="2"/>
        <rect x="67" y="28" width="6" height="14" rx="1" fill="#78350f" stroke="#92400e" strokeWidth="1"/>
        <line x1="73" y1="35" x2="95" y2="35" stroke="#111827" strokeWidth="2"/>
        <circle cx="95" cy="35" r="8" fill="#78350f" fillOpacity="0.5" stroke="#92400e" strokeWidth="1.5"/>
        <circle cx="95" cy="35" r="3" fill="#1f2937"/>
        <text x="25" y="55" textAnchor="middle" fill="#92400e" fontSize="5">Knob</text>
        <text x="70" y="55" textAnchor="middle" fill="#92400e" fontSize="5">Tube</text>
        <text x="95" y="55" textAnchor="middle" fill="#92400e" fontSize="5">Knob</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="7">K&amp;T Wiring</text>
      </svg>
    ),
    "receptacle-height-requirements-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="90" y1="5" x2="90" y2="75" stroke="#374151" strokeWidth="1.5"/>
        <rect x="80" y="52" width="12" height="10" rx="1" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="75" y="60" textAnchor="end" fill="#22c55e" fontSize="5">12&quot;</text>
        <rect x="80" y="25" width="12" height="10" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1"/>
        <text x="75" y="33" textAnchor="end" fill="#3b82f6" fontSize="5">48&quot;</text>
        <rect x="30" y="15" width="15" height="8" rx="1" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="37" y="30" textAnchor="middle" fill="#f59e0b" fontSize="5">SW</text>
        <text x="60" y="75" textAnchor="middle" fill="#9ca3af" fontSize="7">Heights</text>
      </svg>
    ),
    "electrical-estimating-contractors": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="50" height="60" rx="3" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="40" y="25" textAnchor="middle" fill="#06b6d4" fontSize="6">ESTIMATE</text>
        <rect x="20" y="30" width="40" height="5" rx="1" fill="#22c55e" fillOpacity="0.3"/>
        <text x="22" y="34" fill="#9ca3af" fontSize="4">Material</text>
        <rect x="20" y="38" width="30" height="5" rx="1" fill="#3b82f6" fillOpacity="0.3"/>
        <text x="22" y="42" fill="#9ca3af" fontSize="4">Labor</text>
        <rect x="20" y="46" width="15" height="5" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <text x="22" y="50" fill="#9ca3af" fontSize="4">O&amp;P</text>
        <rect x="20" y="56" width="40" height="8" rx="1" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1"/>
        <text x="40" y="62" textAnchor="middle" fill="#a855f7" fontSize="5">$12,450</text>
        <text x="90" y="45" textAnchor="middle" fill="#9ca3af" fontSize="7">BID</text>
      </svg>
    ),
    "surge-arrester-vs-tvss": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="45" height="35" rx="4" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="32" y="35" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">SPD</text>
        <text x="32" y="47" textAnchor="middle" fill="#fcd34d" fontSize="6">Type 2</text>
        <rect x="65" y="20" width="45" height="35" rx="4" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="87" y="35" textAnchor="middle" fill="#3b82f6" fontSize="6" fontWeight="bold">Surge</text>
        <text x="87" y="47" textAnchor="middle" fill="#93c5fd" fontSize="6">Type 1</text>
        <text x="60" y="15" textAnchor="middle" fill="#6b7280" fontSize="8">VS</text>
        <text x="60" y="68" textAnchor="middle" fill="#9ca3af" fontSize="7">Surge Devices</text>
      </svg>
    ),
    "nec-article-230-service-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="10" y1="15" x2="10" y2="65" stroke="#92400e" strokeWidth="3"/>
        <line x1="10" y1="20" x2="35" y2="15" stroke="#374151" strokeWidth="2"/>
        <circle cx="40" cy="15" r="5" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <text x="40" y="17" textAnchor="middle" fill="#9ca3af" fontSize="4">WH</text>
        <line x1="40" y1="20" x2="40" y2="30" stroke="#374151" strokeWidth="2"/>
        <rect x="30" y="30" width="20" height="12" rx="1" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="40" y="39" textAnchor="middle" fill="#f59e0b" fontSize="5">MTR</text>
        <line x1="40" y1="42" x2="40" y2="50" stroke="#374151" strokeWidth="2"/>
        <rect x="28" y="50" width="24" height="20" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="40" y="63" textAnchor="middle" fill="#22c55e" fontSize="5">MAIN</text>
        <text x="80" y="40" fill="#9ca3af" fontSize="6">Service</text>
        <text x="80" y="52" fill="#9ca3af" fontSize="6">Entrance</text>
      </svg>
    ),
    "nec-article-220-load-calculations": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="30" height="55" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="20" y="16" width="20" height="4" rx="1" fill="#a855f7"/>
        <rect x="20" y="24" width="20" height="4" rx="1" fill="#a855f7"/>
        <rect x="20" y="32" width="20" height="4" rx="1" fill="#a855f7"/>
        <rect x="20" y="40" width="20" height="4" rx="1" fill="#a855f7" fillOpacity="0.5"/>
        <text x="30" y="58" textAnchor="middle" fill="#a855f7" fontSize="5">PANEL</text>
        <text x="75" y="25" textAnchor="middle" fill="#f59e0b" fontSize="10">Σ</text>
        <text x="75" y="40" textAnchor="middle" fill="#9ca3af" fontSize="7">VA</text>
        <rect x="58" y="48" width="34" height="14" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1"/>
        <text x="75" y="58" textAnchor="middle" fill="#f59e0b" fontSize="6">220</text>
        <text x="60" y="75" fill="#9ca3af" fontSize="6">Load Calc</text>
      </svg>
    ),
    "nec-article-430-motor-circuits": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="40" cy="38" r="22" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <text x="40" y="42" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">M</text>
        <line x1="62" y1="38" x2="80" y2="38" stroke="#22c55e" strokeWidth="2"/>
        <rect x="80" y="28" width="16" height="20" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="88" y="42" textAnchor="middle" fill="#f59e0b" fontSize="6">OL</text>
        <line x1="18" y1="38" x2="5" y2="38" stroke="#a855f7" strokeWidth="2"/>
        <rect x="2" y="30" width="16" height="16" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="10" y="40" textAnchor="middle" fill="#a855f7" fontSize="5">CB</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Motor Circuit</text>
      </svg>
    ),
    "nec-article-480-battery-storage": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="35" height="40" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="18" y="15" width="6" height="5" rx="1" fill="#22c55e"/>
        <rect x="28" y="15" width="6" height="5" rx="1" fill="#22c55e"/>
        <line x1="16" y1="32" x2="38" y2="32" stroke="#22c55e" strokeWidth="1"/>
        <line x1="16" y1="40" x2="38" y2="40" stroke="#22c55e" strokeWidth="1"/>
        <line x1="16" y1="48" x2="38" y2="48" stroke="#22c55e" strokeWidth="1"/>
        <text x="27" y="57" textAnchor="middle" fill="#22c55e" fontSize="5">BESS</text>
        <line x1="45" y1="38" x2="62" y2="38" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="62" y="25" width="22" height="26" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="73" y="42" textAnchor="middle" fill="#f59e0b" fontSize="6">INV</text>
        <line x1="84" y1="38" x2="100" y2="38" stroke="#a855f7" strokeWidth="2"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Battery Storage</text>
      </svg>
    ),
    "nec-2026-code-changes": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="12" width="40" height="52" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="40" y="30" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">NEC</text>
        <text x="40" y="44" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">2026</text>
        <text x="40" y="57" textAnchor="middle" fill="#9ca3af" fontSize="5">EDITION</text>
        <path d="M72 25 L82 20 L82 30 Z" fill="#22c55e"/>
        <text x="92" y="28" fill="#22c55e" fontSize="7">NEW</text>
        <line x1="72" y1="38" x2="108" y2="38" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
        <line x1="72" y1="48" x2="108" y2="48" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,2"/>
        <text x="60" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Code Changes</text>
      </svg>
    ),
    "short-circuit-current-calculation": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="15" width="25" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="47" y="45" textAnchor="middle" fill="#f59e0b" fontSize="6">AIC</text>
        <path d="M15 30 L30 30 L25 40 L35 25" stroke="#ef4444" strokeWidth="2.5" fill="none"/>
        <path d="M60 30 L75 30 L70 40 L80 25" stroke="#ef4444" strokeWidth="2.5" fill="none"/>
        <text x="47" y="58" textAnchor="middle" fill="#f59e0b" fontSize="5">22kA</text>
        <circle cx="100" cy="40" r="12" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="100" y="43" textAnchor="middle" fill="#ef4444" fontSize="6">⚡</text>
        <text x="60" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Fault Current</text>
      </svg>
    ),
    "lighting-load-calculations-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M30 18 L40 8 L50 18" stroke="#f59e0b" strokeWidth="2" fill="none"/>
        <rect x="32" y="18" width="16" height="10" rx="1" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="35" y1="28" x2="35" y2="35" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="40" y1="28" x2="40" y2="38" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="45" y1="28" x2="45" y2="33" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2"/>
        <rect x="65" y="15" width="35" height="18" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="82" y="22" textAnchor="middle" fill="#f59e0b" fontSize="5">3 VA/ft²</text>
        <text x="82" y="30" textAnchor="middle" fill="#9ca3af" fontSize="4">Table 220.12</text>
        <rect x="20" y="45" width="80" height="16" rx="2" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="56" textAnchor="middle" fill="#f59e0b" fontSize="6">2,800 ft² × 3 VA</text>
        <text x="60" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Lighting Load</text>
      </svg>
    ),
    "demand-factor-calculations-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="40" height="25" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1"/>
        <text x="30" y="31" textAnchor="middle" fill="#f59e0b" fontSize="7">100%</text>
        <path d="M55 28 L65 28 L62 22 M55 28 L65 28 L62 34" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <rect x="70" y="18" width="40" height="20" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <text x="90" y="31" textAnchor="middle" fill="#22c55e" fontSize="7">35%</text>
        <rect x="25" y="50" width="70" height="16" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1"/>
        <text x="60" y="61" textAnchor="middle" fill="#a855f7" fontSize="6">Demand Factor</text>
        <text x="60" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Reduce Load</text>
      </svg>
    ),
    "recessed-lighting-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="5" y="8" width="110" height="8" rx="1" fill="#374151"/>
        <rect x="25" y="16" width="22" height="14" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="36" cy="23" r="4" fill="#f59e0b" fillOpacity="0.5"/>
        <line x1="36" y1="30" x2="36" y2="42" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2,2" opacity="0.5"/>
        <rect x="72" y="16" width="22" height="14" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="83" cy="23" r="4" fill="#22c55e" fillOpacity="0.5"/>
        <text x="36" y="52" textAnchor="middle" fill="#f59e0b" fontSize="5">Non-IC</text>
        <text x="83" y="52" textAnchor="middle" fill="#22c55e" fontSize="5">IC Rated</text>
        <rect x="68" y="8" width="30" height="8" fill="#d1d5db" fillOpacity="0.2"/>
        <text x="83" y="14" textAnchor="middle" fill="#9ca3af" fontSize="4">insulation</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Recessed Light</text>
      </svg>
    ),
    "sub-panel-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="8" y="15" width="25" height="45" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="20" y="42" textAnchor="middle" fill="#22c55e" fontSize="5">MAIN</text>
        <line x1="33" y1="30" x2="55" y2="30" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="33" y1="38" x2="55" y2="38" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="33" y1="46" x2="55" y2="46" stroke="#22c55e" strokeWidth="2"/>
        <line x1="33" y1="50" x2="55" y2="50" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2"/>
        <rect x="55" y="18" width="25" height="40" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="67" y="42" textAnchor="middle" fill="#a855f7" fontSize="5">SUB</text>
        <text x="100" y="30" fill="#f59e0b" fontSize="5">4-wire</text>
        <text x="100" y="42" fill="#9ca3af" fontSize="5">feeder</text>
        <text x="55" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Sub-Panel</text>
      </svg>
    ),
    "smart-home-wiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="12" width="50" height="45" rx="3" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="4,2"/>
        <circle cx="38" cy="25" r="6" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="1"/>
        <text x="38" y="28" textAnchor="middle" fill="#06b6d4" fontSize="5">W</text>
        <rect x="52" y="20" width="14" height="10" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="59" y="28" textAnchor="middle" fill="#22c55e" fontSize="4">SW</text>
        <circle cx="38" cy="45" r="5" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="52" y="38" width="14" height="10" rx="2" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1"/>
        <text x="59" y="45" textAnchor="middle" fill="#a855f7" fontSize="4">HUB</text>
        <circle cx="95" cy="35" r="10" fill="#06b6d4" fillOpacity="0.1" stroke="#06b6d4" strokeWidth="1"/>
        <text x="95" y="38" textAnchor="middle" fill="#06b6d4" fontSize="5">☁</text>
        <text x="55" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Smart Home</text>
      </svg>
    ),
    "ceiling-fan-wiring-installation": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="5" width="30" height="6" rx="1" fill="#374151"/>
        <circle cx="50" cy="18" r="8" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="50" y1="11" x2="50" y2="8" stroke="#6b7280" strokeWidth="2"/>
        <line x1="30" y1="20" x2="50" y2="18" stroke="#374151" strokeWidth="3"/>
        <line x1="70" y1="20" x2="50" y2="18" stroke="#374151" strokeWidth="3"/>
        <line x1="42" y1="26" x2="35" y2="35" stroke="#374151" strokeWidth="3"/>
        <line x1="58" y1="26" x2="65" y2="35" stroke="#374151" strokeWidth="3"/>
        <circle cx="50" cy="18" r="3" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="15" y="50" width="30" height="10" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="30" y="58" textAnchor="middle" fill="#f59e0b" fontSize="4">FAN BOX</text>
        <text x="85" y="55" fill="#9ca3af" fontSize="5">314.27(C)</text>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Ceiling Fan</text>
      </svg>
    ),
    "arc-flash-hazard-analysis": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M40 15 L50 10 L60 15 L55 30 L65 25 L50 50 L52 35 L42 40 Z" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="70" y="15" width="40" height="25" rx="3" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="90" y="24" textAnchor="middle" fill="#ef4444" fontSize="5" fontWeight="bold">DANGER</text>
        <text x="90" y="34" textAnchor="middle" fill="#ef4444" fontSize="4">ARC FLASH</text>
        <text x="90" y="55" fill="#f59e0b" fontSize="5">PPE Cat 2</text>
        <text x="90" y="65" fill="#9ca3af" fontSize="4">8 cal/cm²</text>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Arc Flash</text>
      </svg>
    ),
    "lockout-tagout-electrical-procedures": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="15" width="25" height="40" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="25" y="22" width="15" height="4" rx="1" fill="#ef4444"/>
        <rect x="25" y="30" width="15" height="4" rx="1" fill="#6b7280"/>
        <rect x="25" y="38" width="15" height="4" rx="1" fill="#6b7280"/>
        <circle cx="32" cy="60" r="8" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="29" y="52" width="6" height="8" rx="1" fill="#f59e0b"/>
        <rect x="70" y="20" width="30" height="40" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="85" y="35" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="bold">DANGER</text>
        <text x="85" y="46" textAnchor="middle" fill="#ef4444" fontSize="4">DO NOT</text>
        <text x="85" y="53" textAnchor="middle" fill="#ef4444" fontSize="4">OPERATE</text>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">LOTO</text>
      </svg>
    ),
    "energy-management-systems-electrical": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="12" width="50" height="35" rx="3" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <polyline points="20,38 28,30 36,35 44,22 52,28 60,18" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="40" y="10" textAnchor="middle" fill="#06b6d4" fontSize="5">DASHBOARD</text>
        <circle cx="85" cy="22" r="10" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="85" y="25" textAnchor="middle" fill="#f59e0b" fontSize="5">CT</text>
        <line x1="85" y1="32" x2="85" y2="45" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="65" y1="30" x2="75" y2="25" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3,2"/>
        <rect x="25" y="55" width="70" height="12" rx="2" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1"/>
        <text x="60" y="64" textAnchor="middle" fill="#22c55e" fontSize="5">kWh Monitoring</text>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="5">Energy Mgmt</text>
      </svg>
    ),
    "electric-vehicle-fleet-charging": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="5" y="25" width="18" height="30" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <text x="14" y="44" textAnchor="middle" fill="#22c55e" fontSize="4">EVSE</text>
        <rect x="28" y="25" width="18" height="30" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <text x="37" y="44" textAnchor="middle" fill="#22c55e" fontSize="4">EVSE</text>
        <rect x="51" y="25" width="18" height="30" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <text x="60" y="44" textAnchor="middle" fill="#22c55e" fontSize="4">EVSE</text>
        <rect x="74" y="25" width="18" height="30" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <text x="83" y="44" textAnchor="middle" fill="#22c55e" fontSize="4">EVSE</text>
        <line x1="5" y1="18" x2="95" y2="18" stroke="#f59e0b" strokeWidth="2"/>
        <text x="100" y="21" fill="#f59e0b" fontSize="5">BUS</text>
        <line x1="14" y1="18" x2="14" y2="25" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="37" y1="18" x2="37" y2="25" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="60" y1="18" x2="60" y2="25" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="83" y1="18" x2="83" y2="25" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="50" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Fleet Charging</text>
      </svg>
    ),
    "electrical-connector-types-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="25" cy="25" r="10" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M20 22 L25 28 L30 22" stroke="#f59e0b" strokeWidth="2" fill="none"/>
        <text x="25" y="46" textAnchor="middle" fill="#9ca3af" fontSize="4">Wire Nut</text>
        <rect x="52" y="16" width="18" height="18" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="55" y1="25" x2="67" y2="25" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="61" y="46" textAnchor="middle" fill="#9ca3af" fontSize="4">Push-In</text>
        <rect x="85" y="15" width="20" height="20" rx="3" fill="#a855f7" fillOpacity="0.2" stroke="#a855f7" strokeWidth="1.5"/>
        <circle cx="95" cy="25" r="4" fill="none" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="95" y="46" textAnchor="middle" fill="#9ca3af" fontSize="4">Lug</text>
        <text x="60" y="64" textAnchor="middle" fill="#f59e0b" fontSize="5">NEC 110.14</text>
        <text x="60" y="74" textAnchor="middle" fill="#9ca3af" fontSize="6">Connectors</text>
      </svg>
    ),
    "mc-cable-vs-conduit-comparison": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M10 30 Q20 25, 30 30 Q40 35, 50 30" stroke="#f59e0b" strokeWidth="4" fill="none"/>
        <path d="M10 33 Q20 28, 30 33 Q40 38, 50 33" stroke="#f59e0b" strokeWidth="1" fill="none" opacity="0.5"/>
        <text x="30" y="50" textAnchor="middle" fill="#f59e0b" fontSize="5">MC Cable</text>
        <text x="60" y="42" textAnchor="middle" fill="#9ca3af" fontSize="8" fontWeight="bold">vs</text>
        <rect x="70" y="26" width="40" height="12" rx="6" fill="none" stroke="#a855f7" strokeWidth="2"/>
        <line x1="75" y1="32" x2="105" y2="32" stroke="#a855f7" strokeWidth="1" strokeDasharray="2,2"/>
        <text x="90" y="50" textAnchor="middle" fill="#a855f7" fontSize="5">Conduit</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Comparison</text>
      </svg>
    ),
    "voltage-imbalance-troubleshooting": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M10 40 Q25 15, 40 40 Q55 65, 70 40 Q85 15, 100 40" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <path d="M10 40 Q25 18, 40 42 Q55 66, 70 38 Q85 10, 100 40" stroke="#f59e0b" strokeWidth="1.5" fill="none"/>
        <path d="M10 40 Q25 20, 40 45 Q55 70, 70 35 Q85 5, 100 40" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeDasharray="4,2"/>
        <text x="15" y="18" fill="#22c55e" fontSize="5">A</text>
        <text x="15" y="28" fill="#f59e0b" fontSize="5">B</text>
        <text x="15" y="38" fill="#ef4444" fontSize="5">C</text>
        <circle cx="90" cy="25" r="3" fill="#ef4444"/>
        <text x="90" y="20" textAnchor="middle" fill="#ef4444" fontSize="4">!</text>
        <text x="55" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Voltage Imbalance</text>
      </svg>
    ),
    "intermittent-electrical-faults-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="20" width="30" height="20" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="35" y="34" textAnchor="middle" fill="#22c55e" fontSize="6">DMM</text>
        <line x1="25" y1="40" x2="25" y2="55" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="45" y1="40" x2="45" y2="55" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="60" y1="30" x2="110" y2="30" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="70" y1="30" x2="72" y2="20" stroke="#ef4444" strokeWidth="2"/>
        <line x1="72" y1="20" x2="74" y2="30" stroke="#ef4444" strokeWidth="2"/>
        <line x1="90" y1="30" x2="92" y2="18" stroke="#ef4444" strokeWidth="2"/>
        <line x1="92" y1="18" x2="94" y2="30" stroke="#ef4444" strokeWidth="2"/>
        <text x="85" y="48" textAnchor="middle" fill="#f59e0b" fontSize="4">intermittent</text>
        <circle cx="85" cy="58" r="6" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="85" y="61" textAnchor="middle" fill="#ef4444" fontSize="6">?</text>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="5">Find Faults</text>
      </svg>
    ),
    "rough-in-inspection-preparation": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="20" y1="10" x2="20" y2="65" stroke="#92400e" strokeWidth="3"/>
        <line x1="50" y1="10" x2="50" y2="65" stroke="#92400e" strokeWidth="3"/>
        <line x1="20" y1="10" x2="50" y2="10" stroke="#92400e" strokeWidth="2"/>
        <line x1="20" y1="65" x2="50" y2="65" stroke="#92400e" strokeWidth="2"/>
        <rect x="28" y="30" width="14" height="14" rx="1" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="25" y1="37" x2="28" y2="37" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="42" y1="37" x2="48" y2="37" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="65" y="15" width="40" height="45" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <line x1="72" y1="25" x2="98" y2="25" stroke="#22c55e" strokeWidth="1"/>
        <path d="M70 25 L73 28 L78 20" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <line x1="72" y1="35" x2="98" y2="35" stroke="#22c55e" strokeWidth="1"/>
        <path d="M70 35 L73 38 L78 30" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <line x1="72" y1="45" x2="98" y2="45" stroke="#9ca3af" strokeWidth="1"/>
        <text x="55" y="74" textAnchor="middle" fill="#9ca3af" fontSize="5">Rough-In Inspect</text>
      </svg>
    ),
    "nec-article-300-wiring-methods": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="20" width="30" height="40" rx="3" fill="#7c3aed" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="25" y="44" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">300</text>
        <path d="M40 30 Q55 20, 70 30 Q85 40, 100 30" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <path d="M40 40 L100 40" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M40 50 Q55 60, 70 50 Q85 40, 100 50" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <text x="70" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">Wiring Methods</text>
      </svg>
    ),
    "cable-tray-installation-nec-392": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M10 35 L110 35" stroke="#f59e0b" strokeWidth="2"/>
        <path d="M10 55 L110 55" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="20" y1="35" x2="20" y2="55" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="40" y1="35" x2="40" y2="55" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="60" y1="35" x2="60" y2="55" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="80" y1="35" x2="80" y2="55" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="100" y1="35" x2="100" y2="55" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M25 42 L95 42" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
        <path d="M25 48 L95 48" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Cable Tray NEC 392</text>
      </svg>
    ),
    "nec-article-344-rigid-conduit": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="30" width="90" height="14" rx="7" fill="#6b7280" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="15" y="33" width="90" height="8" rx="4" fill="#7c3aed" fillOpacity="0.2"/>
        <circle cx="25" cy="37" r="3" fill="#a855f7"/>
        <circle cx="35" cy="37" r="3" fill="#22c55e"/>
        <circle cx="45" cy="37" r="3" fill="#f59e0b"/>
        <rect x="10" y="28" width="8" height="18" rx="2" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <rect x="102" y="28" width="8" height="18" rx="2" fill="#6b7280" stroke="#9ca3af" strokeWidth="1"/>
        <text x="60" y="62" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">Art. 344</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Rigid Conduit</text>
      </svg>
    ),
    "harmonics-power-systems-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M10 40 Q20 20, 30 40 Q40 60, 50 40 Q60 20, 70 40 Q80 60, 90 40 Q100 20, 110 40" stroke="#f59e0b" strokeWidth="2" fill="none"/>
        <path d="M10 40 Q15 30, 20 40 Q25 50, 30 40 Q35 30, 40 40 Q45 50, 50 40 Q55 30, 60 40 Q65 50, 70 40 Q75 30, 80 40 Q85 50, 90 40 Q95 30, 100 40 Q105 50, 110 40" stroke="#ef4444" strokeWidth="1.5" fill="none" strokeDasharray="3,2"/>
        <line x1="10" y1="40" x2="110" y2="40" stroke="#6b7280" strokeWidth="0.5" strokeDasharray="2,2"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">Harmonics Analysis</text>
      </svg>
    ),
    "single-phase-vs-three-phase": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M10 40 Q25 15, 40 40 Q55 65, 70 40 Q85 15, 100 40" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <path d="M20 40 Q35 15, 50 40 Q65 65, 80 40 Q95 15, 110 40" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        <path d="M30 40 Q45 15, 60 40 Q75 65, 90 40 Q105 15, 115 40" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <text x="30" y="70" fill="#22c55e" fontSize="6">1φ</text>
        <text x="60" y="70" fill="#9ca3af" fontSize="6">vs</text>
        <text x="85" y="70" fill="#3b82f6" fontSize="6">3φ</text>
      </svg>
    ),
    "wire-pulling-techniques-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="32" width="100" height="16" rx="8" fill="#6b7280" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="20" y1="40" x2="95" y2="40" stroke="#22c55e" strokeWidth="3" strokeLinecap="round"/>
        <polygon points="95,34 105,40 95,46" fill="#22c55e"/>
        <circle cx="15" cy="40" r="6" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="65" textAnchor="middle" fill="#9ca3af" fontSize="6">Wire Pulling</text>
      </svg>
    ),
    "electric-heat-installation-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="15" width="60" height="40" rx="4" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M45 25 L50 35 L55 25 L60 35 L65 25 L70 35 L75 25" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <path d="M45 38 L50 48 L55 38 L60 48 L65 38 L70 48 L75 38" stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity="0.6"/>
        <circle cx="60" cy="32" r="20" fill="#ef4444" fillOpacity="0.1" stroke="none"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">Electric Heat NEC</text>
      </svg>
    ),
    "outdoor-landscape-lighting-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="5" y="55" width="110" height="10" rx="2" fill="#22c55e" fillOpacity="0.15"/>
        <line x1="30" y1="25" x2="30" y2="55" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="30" cy="20" r="8" fill="#fbbf24" fillOpacity="0.4" stroke="#fbbf24" strokeWidth="1.5"/>
        <line x1="70" y1="30" x2="70" y2="55" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="70" cy="25" r="6" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
        <line x1="100" y1="35" x2="100" y2="55" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="100" cy="30" r="5" fill="#fbbf24" fillOpacity="0.2" stroke="#fbbf24" strokeWidth="1"/>
        <text x="60" y="73" textAnchor="middle" fill="#9ca3af" fontSize="6">Landscape Lighting</text>
      </svg>
    ),
    "busway-busduct-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="25" width="80" height="20" rx="3" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="25" y="30" width="70" height="3" rx="1" fill="#ef4444"/>
        <rect x="25" y="35" width="70" height="3" rx="1" fill="#22c55e"/>
        <rect x="25" y="40" width="70" height="3" rx="1" fill="#3b82f6"/>
        <rect x="45" y="45" width="12" height="15" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="75" y="45" width="12" height="15" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Busway Install</text>
      </svg>
    ),
    "grounding-electrode-system-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="60" y1="10" x2="60" y2="35" stroke="#22c55e" strokeWidth="2"/>
        <rect x="40" y="35" width="40" height="8" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="60" y1="43" x2="60" y2="60" stroke="#22c55e" strokeWidth="2"/>
        <line x1="45" y1="60" x2="75" y2="60" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="50" y1="65" x2="70" y2="65" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="55" y1="70" x2="65" y2="70" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="78" textAnchor="middle" fill="#9ca3af" fontSize="5">Grounding Electrode</text>
      </svg>
    ),
    "electrical-bonding-requirements-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="25" width="35" height="30" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="75" y="25" width="35" height="30" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M45 40 Q60 30, 75 40" stroke="#f59e0b" strokeWidth="2.5" fill="none"/>
        <circle cx="60" cy="35" r="4" fill="#f59e0b" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1"/>
        <text x="27" y="44" textAnchor="middle" fill="#22c55e" fontSize="7">A</text>
        <text x="92" y="44" textAnchor="middle" fill="#22c55e" fontSize="7">B</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Bonding Guide</text>
      </svg>
    ),
    "medium-voltage-basics-electricians": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M25 20 L25 55 L40 55" stroke="#ef4444" strokeWidth="2" fill="none"/>
        <path d="M60 20 L60 55 L75 55" stroke="#f59e0b" strokeWidth="2" fill="none"/>
        <path d="M95 20 L95 55 L110 55" stroke="#22c55e" strokeWidth="2" fill="none"/>
        <text x="25" y="16" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">4kV</text>
        <text x="60" y="16" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">13kV</text>
        <text x="95" y="16" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">35kV</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="6">Medium Voltage</text>
      </svg>
    ),
    "uninterruptible-power-supply-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="15" width="60" height="40" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="38" y="22" width="44" height="12" rx="2" fill="#111827"/>
        <text x="60" y="31" textAnchor="middle" fill="#22c55e" fontSize="8">UPS</text>
        <rect x="38" y="38" width="15" height="10" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <rect x="57" y="38" width="25" height="10" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="6">UPS Systems</text>
      </svg>
    ),
    "electrical-troubleshooting-methodology": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <circle cx="30" cy="25" r="10" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="30" y="28" textAnchor="middle" fill="#ef4444" fontSize="8">?</text>
        <line x1="40" y1="25" x2="50" y2="25" stroke="#9ca3af" strokeWidth="1.5" markerEnd="url(#arrow)"/>
        <circle cx="60" cy="25" r="10" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="28" textAnchor="middle" fill="#f59e0b" fontSize="6">TEST</text>
        <line x1="70" y1="25" x2="80" y2="25" stroke="#9ca3af" strokeWidth="1.5"/>
        <circle cx="90" cy="25" r="10" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="90" y="28" textAnchor="middle" fill="#22c55e" fontSize="8">✓</text>
        <text x="60" y="55" textAnchor="middle" fill="#9ca3af" fontSize="6">Troubleshooting</text>
      </svg>
    ),
    "electrical-testing-equipment-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="50" rx="5" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="42" y="17" width="36" height="20" rx="2" fill="#111827"/>
        <text x="60" y="31" textAnchor="middle" fill="#10b981" fontSize="9">120V</text>
        <circle cx="48" cy="48" r="4" fill="#ef4444" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="60" cy="48" r="4" fill="#1f2937" stroke="#10b981" strokeWidth="1"/>
        <circle cx="72" cy="48" r="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="48" y1="55" x2="48" y2="68" stroke="#ef4444" strokeWidth="2"/>
        <line x1="72" y1="55" x2="72" y2="68" stroke="#3b82f6" strokeWidth="2"/>
        <text x="60" y="76" textAnchor="middle" fill="#9ca3af" fontSize="5">Testing Equipment</text>
      </svg>
    ),
    "electrical-room-design-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="90" height="55" rx="3" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="25" y="15" width="15" height="40" rx="2" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="1"/>
        <rect x="50" y="15" width="15" height="40" rx="2" fill="#f97316" fillOpacity="0.2" stroke="#f97316" strokeWidth="1"/>
        <rect x="75" y="15" width="20" height="20" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <path d="M15 65 L25 65" stroke="#ef4444" strokeWidth="2"/>
        <text x="28" y="67" fill="#ef4444" fontSize="5">3ft</text>
        <text x="60" y="76" textAnchor="middle" fill="#9ca3af" fontSize="5">Electrical Room</text>
      </svg>
    ),
    "electrical-permit-process-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="8" width="60" height="55" rx="3" fill="#1f2937" stroke="#f43f5e" strokeWidth="1.5"/>
        <line x1="40" y1="18" x2="80" y2="18" stroke="#f43f5e" strokeWidth="1"/>
        <line x1="40" y1="26" x2="80" y2="26" stroke="#9ca3af" strokeWidth="0.5"/>
        <line x1="40" y1="32" x2="80" y2="32" stroke="#9ca3af" strokeWidth="0.5"/>
        <line x1="40" y1="38" x2="80" y2="38" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="55" y="44" width="25" height="12" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <text x="67" y="53" textAnchor="middle" fill="#22c55e" fontSize="6">APPROVED</text>
        <text x="60" y="76" textAnchor="middle" fill="#9ca3af" fontSize="5">Permit Process</text>
      </svg>
    ),
    "electrical-blueprint-takeoff-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="12" width="80" height="55" rx="2" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <line x1="15" y1="20" x2="85" y2="20" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2,2"/>
        <line x1="15" y1="30" x2="85" y2="30" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2,2"/>
        <line x1="15" y1="40" x2="85" y2="40" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2,2"/>
        <line x1="30" y1="15" x2="30" y2="62" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2,2"/>
        <line x1="50" y1="15" x2="50" y2="62" stroke="#06b6d4" strokeWidth="0.5" strokeDasharray="2,2"/>
        <circle cx="40" cy="25" r="3" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="60" cy="35" r="3" fill="#22c55e" stroke="#22c55e" strokeWidth="1"/>
        <rect x="92" y="20" width="20" height="30" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="102" y="38" textAnchor="middle" fill="#f59e0b" fontSize="6">QTY</text>
        <text x="55" y="76" textAnchor="middle" fill="#9ca3af" fontSize="5">Blueprint Takeoff</text>
      </svg>
    ),
    "branch-circuit-design-commercial": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="25" height="50" rx="3" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="14" y="20" width="17" height="4" rx="1" fill="#f59e0b"/>
        <rect x="14" y="27" width="17" height="4" rx="1" fill="#f59e0b"/>
        <rect x="14" y="34" width="17" height="4" rx="1" fill="#f59e0b"/>
        <rect x="14" y="41" width="17" height="4" rx="1" fill="#f59e0b" fillOpacity="0.5"/>
        <rect x="14" y="48" width="17" height="4" rx="1" fill="#f59e0b" fillOpacity="0.5"/>
        <line x1="35" y1="22" x2="55" y2="22" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="35" y1="29" x2="75" y2="29" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="35" y1="36" x2="65" y2="36" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="55" y="18" width="12" height="8" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="1"/>
        <rect x="75" y="25" width="12" height="8" rx="2" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="1"/>
        <rect x="65" y="32" width="12" height="8" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Branch Circuits</text>
      </svg>
    ),
    "journeyman-electrician-exam-prep": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="10" width="70" height="50" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="60" y="26" textAnchor="middle" fill="#06b6d4" fontSize="7" fontWeight="bold">EXAM</text>
        <rect x="35" y="32" width="50" height="6" rx="2" fill="#111827"/>
        <rect x="35" y="32" width="35" height="6" rx="2" fill="#22c55e" fillOpacity="0.4"/>
        <text x="60" y="50" textAnchor="middle" fill="#f59e0b" fontSize="6">70%</text>
        <rect x="35" y="55" width="10" height="8" rx="1" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.5"/>
        <rect x="48" y="55" width="10" height="8" rx="1" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
        <rect x="61" y="55" width="10" height="8" rx="1" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="0.5"/>
        <rect x="74" y="55" width="10" height="8" rx="1" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="0.5"/>
        <text x="60" y="76" textAnchor="middle" fill="#9ca3af" fontSize="5">Exam Prep</text>
      </svg>
    ),
    // Batch 4 thumbnails
    "nec-article-440-hvac-electrical": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="35" height="45" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="20" y="16" width="10" height="10" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="20" y="30" width="25" height="3" rx="1" fill="#a855f7" fillOpacity="0.5"/>
        <rect x="20" y="36" width="20" height="3" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="65" y="15" width="40" height="35" rx="4" fill="#06b6d4" fillOpacity="0.15" stroke="#06b6d4" strokeWidth="1"/>
        <path d="M75 25 L95 25 L95 40 L75 40 Z" fill="none" stroke="#06b6d4" strokeWidth="1"/>
        <line x1="80" y1="30" x2="80" y2="35" stroke="#06b6d4" strokeWidth="1"/>
        <line x1="85" y1="28" x2="85" y2="37" stroke="#06b6d4" strokeWidth="1.5"/>
        <line x1="90" y1="30" x2="90" y2="35" stroke="#06b6d4" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">HVAC Art. 440</text>
      </svg>
    ),
    "nec-article-422-appliance-circuits": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="15" width="30" height="35" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="20" y="20" width="20" height="4" rx="1" fill="#a855f7" fillOpacity="0.5"/>
        <rect x="20" y="28" width="15" height="4" rx="1" fill="#a855f7" fillOpacity="0.3"/>
        <rect x="60" y="12" width="22" height="28" rx="3" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="71" cy="22" r="3" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="71" cy="32" r="3" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="90" y="18" width="18" height="22" rx="2" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
        <rect x="94" y="22" width="10" height="6" rx="1" fill="#22c55e" fillOpacity="0.3"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Appliance Circuits</text>
      </svg>
    ),
    "nec-article-517-healthcare-electrical": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="10" width="60" height="45" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M55 18 L65 18 L65 24 L71 24 L71 34 L65 34 L65 40 L55 40 L55 34 L49 34 L49 24 L55 24 Z" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="1"/>
        <circle cx="30" cy="50" r="4" fill="#22c55e" fillOpacity="0.4" stroke="#22c55e" strokeWidth="0.5"/>
        <circle cx="60" cy="50" r="4" fill="#f59e0b" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="0.5"/>
        <circle cx="90" cy="50" r="4" fill="#ef4444" fillOpacity="0.4" stroke="#ef4444" strokeWidth="0.5"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Healthcare 517</text>
      </svg>
    ),
    "nec-junction-box-rules-314": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="15" width="50" height="35" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <circle cx="45" cy="28" r="4" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.5"/>
        <circle cx="60" cy="28" r="4" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.5"/>
        <circle cx="75" cy="28" r="4" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.5"/>
        <line x1="35" y1="38" x2="85" y2="38" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="2,2"/>
        <line x1="20" y1="32" x2="35" y2="32" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="85" y1="32" x2="100" y2="32" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="60" y1="50" x2="60" y2="60" stroke="#f59e0b" strokeWidth="2"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Junction Box 314</text>
      </svg>
    ),
    "tandem-breakers-nec-rules": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="10" width="25" height="50" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="33" y="14" width="19" height="9" rx="2" fill="#a855f7" fillOpacity="0.4" stroke="#a855f7" strokeWidth="0.5"/>
        <rect x="33" y="26" width="19" height="9" rx="2" fill="#a855f7" fillOpacity="0.4" stroke="#a855f7" strokeWidth="0.5"/>
        <rect x="65" y="10" width="25" height="50" rx="3" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="68" y="14" width="19" height="6" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="68" y="22" width="19" height="6" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="68" y="30" width="19" height="6" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="68" y="38" width="19" height="6" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Tandem Breakers</text>
      </svg>
    ),
    "ground-fault-protection-services": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="12" width="70" height="40" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <circle cx="60" cy="32" r="12" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M55 28 L60 36 L65 28" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="60" y1="36" x2="60" y2="40" stroke="#ef4444" strokeWidth="1.5"/>
        <line x1="55" y1="42" x2="65" y2="42" stroke="#22c55e" strokeWidth="2"/>
        <line x1="57" y1="45" x2="63" y2="45" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="59" y1="48" x2="61" y2="48" stroke="#22c55e" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">GFP Services</text>
      </svg>
    ),
    "nec-article-225-outside-feeders": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="25" width="25" height="30" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <rect x="85" y="25" width="25" height="30" rx="3" fill="#1f2937" stroke="#a855f7" strokeWidth="1.5"/>
        <path d="M35 30 C50 10 70 10 85 30" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="35" y1="45" x2="85" y2="45" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4,2"/>
        <circle cx="22" cy="35" r="3" fill="#a855f7" fillOpacity="0.4"/>
        <circle cx="98" cy="35" r="3" fill="#a855f7" fillOpacity="0.4"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Outside Feeders</text>
      </svg>
    ),
    "selective-coordination-requirements": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="10" width="80" height="50" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1"/>
        <path d="M30 50 C40 45 50 35 60 20 C70 35 80 45 90 50" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M30 50 C45 42 55 30 65 15 C75 30 85 42 95 50" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="30" y1="50" x2="100" y2="50" stroke="#6b7280" strokeWidth="0.5"/>
        <line x1="30" y1="50" x2="30" y2="12" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Coordination</text>
      </svg>
    ),
    "conduit-bending-calculations": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M20 55 L20 25 C20 18 27 12 35 12 L70 12" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round"/>
        <path d="M80 55 L80 35 C80 30 84 25 90 25 L105 25" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeDasharray="4,3"/>
        <text x="45" y="30" fill="#f59e0b" fontSize="7">90°</text>
        <text x="92" y="40" fill="#f59e0b" fontSize="6">30°</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Conduit Bending</text>
      </svg>
    ),
    "generator-sizing-calculation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="12" width="60" height="40" rx="5" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="50" cy="32" r="10" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M47 28 L53 28 L50 36 L54 32 L48 32 L51 24" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="68" y="22" width="15" height="3" rx="1" fill="#22c55e" fillOpacity="0.5"/>
        <rect x="68" y="28" width="12" height="3" rx="1" fill="#22c55e" fillOpacity="0.4"/>
        <rect x="68" y="34" width="10" height="3" rx="1" fill="#22c55e" fillOpacity="0.3"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Generator Sizing</text>
      </svg>
    ),
    "hvac-circuit-sizing-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="35" rx="4" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="22" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">MCA</text>
        <text x="60" y="32" textAnchor="middle" fill="#f59e0b" fontSize="10">23A</text>
        <text x="45" y="42" fill="#f59e0b" fontSize="5">MOP: 30A</text>
        <line x1="60" y1="45" x2="60" y2="55" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="48" y="55" width="24" height="6" rx="2" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
        <text x="60" y="60" textAnchor="middle" fill="#22c55e" fontSize="4">#10 AWG</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">HVAC Sizing</text>
      </svg>
    ),
    "feeder-sizing-calculations-nec": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="45" y="8" width="30" height="15" rx="3" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1"/>
        <line x1="60" y1="23" x2="60" y2="35" stroke="#f59e0b" strokeWidth="3"/>
        <line x1="60" y1="35" x2="30" y2="50" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="60" y1="35" x2="60" y2="50" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="60" y1="35" x2="90" y2="50" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="20" y="50" width="20" height="10" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.5"/>
        <rect x="50" y="50" width="20" height="10" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.5"/>
        <rect x="80" y="50" width="20" height="10" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="0.5"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Feeder Sizing</text>
      </svg>
    ),
    "electrical-cost-per-square-foot": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="15" width="70" height="40" rx="4" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="30" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">$4.50</text>
        <text x="60" y="40" textAnchor="middle" fill="#9ca3af" fontSize="6">/sq ft</text>
        <rect x="30" y="45" width="12" height="5" rx="1" fill="#22c55e" fillOpacity="0.4"/>
        <rect x="45" y="42" width="12" height="8" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="60" y="39" width="12" height="11" rx="1" fill="#ef4444" fillOpacity="0.4"/>
        <rect x="75" y="43" width="12" height="7" rx="1" fill="#3b82f6" fillOpacity="0.4"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Cost Estimating</text>
      </svg>
    ),
    "mini-split-wiring-installation": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="10" width="70" height="18" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="30" y="14" width="30" height="3" rx="1" fill="#10b981" fillOpacity="0.4"/>
        <rect x="30" y="20" width="20" height="2" rx="1" fill="#10b981" fillOpacity="0.3"/>
        <line x1="60" y1="28" x2="60" y2="40" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="40" y="40" width="40" height="25" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="60" cy="52" r="6" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Mini-Split</text>
      </svg>
    ),
    "dimmer-switch-wiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="40" y="10" width="40" height="50" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="60" cy="30" r="10" fill="#10b981" fillOpacity="0.15" stroke="#10b981" strokeWidth="1"/>
        <line x1="60" y1="22" x2="60" y2="30" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M52 38 Q56 42 60 38 Q64 42 68 38" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="50" cy="50" r="3" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="60" cy="50" r="3" fill="#f59e0b" fillOpacity="0.6"/>
        <circle cx="70" cy="50" r="3" fill="#f59e0b" fillOpacity="0.8"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Dimmer Wiring</text>
      </svg>
    ),
    "240v-outlet-wiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="50" rx="6" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="50" cy="30" r="4" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="70" cy="30" r="4" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M55 42 Q60 48 65 42" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <text x="60" y="55" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">240V</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">240V Outlets</text>
      </svg>
    ),
    "hot-tub-spa-electrical-wiring": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <ellipse cx="60" cy="35" rx="30" ry="18" fill="#3b82f6" fillOpacity="0.15" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M38 30 Q45 24 52 30 Q59 24 66 30 Q73 24 80 30" fill="none" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.5"/>
        <rect x="15" y="20" width="12" height="18" rx="2" fill="#1f2937" stroke="#f59e0b" strokeWidth="1"/>
        <text x="21" y="32" textAnchor="middle" fill="#f59e0b" fontSize="5">GFI</text>
        <line x1="27" y1="29" x2="30" y2="29" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Hot Tub/Spa</text>
      </svg>
    ),
    "pvc-conduit-installation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="30" width="90" height="10" rx="5" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="40" y="15" width="10" height="25" rx="5" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="45" cy="30" r="6" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="2,1"/>
        <rect x="70" y="25" width="20" height="6" rx="2" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="0.5"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">PVC Conduit</text>
      </svg>
    ),
    "under-cabinet-lighting-wiring": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="10" width="90" height="20" rx="2" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <rect x="20" y="30" width="80" height="4" rx="1" fill="#f59e0b" fillOpacity="0.6"/>
        <path d="M25 34 L25 55 M40 34 L40 55 M60 34 L60 55 M80 34 L80 55 M95 34 L95 55" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3"/>
        <rect x="15" y="55" width="90" height="8" rx="1" fill="#1f2937" stroke="#6b7280" strokeWidth="0.5"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Cabinet Lighting</text>
      </svg>
    ),
    "detached-building-electrical-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M15 35 L30 20 L45 35 L45 55 L15 55 Z" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <path d="M75 35 L90 20 L105 35 L105 55 L75 55 Z" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <line x1="45" y1="45" x2="75" y2="45" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,2"/>
        <rect x="25" y="42" width="8" height="10" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <rect x="87" y="42" width="8" height="10" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Detached Building</text>
      </svg>
    ),
    "home-workshop-electrical-setup": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="15" width="80" height="40" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="1"/>
        <circle cx="40" cy="32" r="8" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1"/>
        <path d="M37 32 L40 28 L43 32" fill="none" stroke="#10b981" strokeWidth="1.5"/>
        <rect x="60" y="24" width="30" height="18" rx="2" fill="#f59e0b" fillOpacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <text x="75" y="35" textAnchor="middle" fill="#f59e0b" fontSize="6">240V</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Workshop Setup</text>
      </svg>
    ),
    "basement-electrical-wiring-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="15" y="8" width="90" height="5" rx="1" fill="#6b7280" fillOpacity="0.3"/>
        <rect x="15" y="13" width="90" height="45" rx="2" fill="#1f2937" stroke="#10b981" strokeWidth="1"/>
        <rect x="25" y="20" width="12" height="18" rx="2" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="0.5"/>
        <circle cx="31" cy="26" r="2" fill="#10b981" fillOpacity="0.5"/>
        <circle cx="31" cy="32" r="2" fill="#10b981" fillOpacity="0.5"/>
        <rect x="50" y="25" width="15" height="10" rx="2" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="0.5"/>
        <circle cx="80" cy="30" r="6" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Basement Wiring</text>
      </svg>
    ),
    "bathroom-exhaust-fan-wiring": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="10" width="50" height="40" rx="4" fill="#1f2937" stroke="#10b981" strokeWidth="1.5"/>
        <circle cx="60" cy="28" r="12" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="1"/>
        <path d="M55 24 L60 28 L65 24 M55 32 L60 28 L65 32 M60 20 L60 28 M60 36 L60 28" fill="none" stroke="#10b981" strokeWidth="1"/>
        <path d="M60 10 C65 5 75 8 72 15" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2,1"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Exhaust Fan</text>
      </svg>
    ),
    "afci-breaker-nuisance-tripping": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="40" y="10" width="40" height="50" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="45" y="16" width="30" height="12" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.5"/>
        <text x="60" y="25" textAnchor="middle" fill="#ef4444" fontSize="6">AFCI</text>
        <circle cx="60" cy="40" r="5" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="43" textAnchor="middle" fill="#f59e0b" fontSize="6">!</text>
        <rect x="50" y="50" width="20" height="4" rx="1" fill="#ef4444" fillOpacity="0.4"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">AFCI Tripping</text>
      </svg>
    ),
    "neutral-vs-ground-wire-explained": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="20" y1="20" x2="20" y2="55" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.8"/>
        <line x1="60" y1="20" x2="60" y2="55" stroke="#22c55e" strokeWidth="3"/>
        <text x="20" y="15" textAnchor="middle" fill="#ffffff" fontSize="6">N</text>
        <text x="60" y="15" textAnchor="middle" fill="#22c55e" fontSize="6">G</text>
        <text x="40" y="38" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">≠</text>
        <rect x="80" y="20" width="25" height="35" rx="3" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        <circle cx="88" cy="32" r="3" fill="#ffffff" fillOpacity="0.3"/>
        <circle cx="98" cy="32" r="3" fill="#22c55e" fillOpacity="0.3"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Neutral vs Ground</text>
      </svg>
    ),
    "double-tapped-breakers-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="40" y="10" width="40" height="50" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="45" y="18" width="30" height="10" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.5"/>
        <line x1="25" y1="20" x2="45" y2="23" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="20" y1="28" x2="45" y2="23" stroke="#ef4444" strokeWidth="2"/>
        <circle cx="45" cy="23" r="3" fill="#ef4444" fillOpacity="0.5" stroke="#ef4444" strokeWidth="0.5"/>
        <text x="60" y="45" textAnchor="middle" fill="#ef4444" fontSize="8">⚠</text>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Double Tapped</text>
      </svg>
    ),
    "federal-pacific-zinsco-panels": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="30" y="8" width="60" height="52" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="35" y="14" width="50" height="8" rx="1" fill="#ef4444" fillOpacity="0.2"/>
        <text x="60" y="20" textAnchor="middle" fill="#ef4444" fontSize="5">FPE STAB-LOK</text>
        <rect x="38" y="26" width="20" height="5" rx="1" fill="#ef4444" fillOpacity="0.3"/>
        <rect x="62" y="26" width="20" height="5" rx="1" fill="#ef4444" fillOpacity="0.3"/>
        <rect x="38" y="34" width="20" height="5" rx="1" fill="#ef4444" fillOpacity="0.3"/>
        <rect x="62" y="34" width="20" height="5" rx="1" fill="#ef4444" fillOpacity="0.3"/>
        <rect x="38" y="42" width="20" height="5" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <rect x="62" y="42" width="20" height="5" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">FPE/Zinsco</text>
      </svg>
    ),
    "circuit-breaker-wont-reset": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="40" y="10" width="40" height="50" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="1.5"/>
        <rect x="48" y="18" width="24" height="14" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="0.5"/>
        <rect x="56" y="20" width="8" height="10" rx="1" fill="#ef4444" fillOpacity="0.5"/>
        <text x="60" y="45" textAnchor="middle" fill="#ef4444" fontSize="6">TRIP</text>
        <path d="M50 52 L55 48 L60 52 L65 48 L70 52" fill="none" stroke="#f59e0b" strokeWidth="1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Won&apos;t Reset</text>
      </svg>
    ),
    "electrical-safety-homeowners-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M45 12 L75 12 L80 25 L60 55 L40 25 Z" fill="#e11d48" fillOpacity="0.15" stroke="#e11d48" strokeWidth="1.5"/>
        <text x="60" y="30" textAnchor="middle" fill="#e11d48" fontSize="14" fontWeight="bold">⚡</text>
        <text x="60" y="42" textAnchor="middle" fill="#e11d48" fontSize="5">WARNING</text>
        <rect x="25" y="58" width="10" height="6" rx="1" fill="#22c55e" fillOpacity="0.3"/>
        <rect x="55" y="58" width="10" height="6" rx="1" fill="#f59e0b" fillOpacity="0.3"/>
        <rect x="85" y="58" width="10" height="6" rx="1" fill="#ef4444" fillOpacity="0.3"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Home Safety</text>
      </svg>
    ),
    "aluminum-wiring-remediation-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="20" y1="30" x2="50" y2="30" stroke="#c0c0c0" strokeWidth="4" strokeOpacity="0.6"/>
        <line x1="70" y1="30" x2="100" y2="30" stroke="#d97706" strokeWidth="3"/>
        <rect x="50" y="22" width="20" height="16" rx="3" fill="#1f2937" stroke="#e11d48" strokeWidth="1.5"/>
        <text x="60" y="32" textAnchor="middle" fill="#22c55e" fontSize="6">✓</text>
        <text x="35" y="45" textAnchor="middle" fill="#c0c0c0" fontSize="5">AL</text>
        <text x="85" y="45" textAnchor="middle" fill="#d97706" fontSize="5">CU</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">AL Remediation</text>
      </svg>
    ),
    "electrical-fire-prevention-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <path d="M50 50 Q50 30 60 15 Q70 30 70 50" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1.5"/>
        <path d="M54 50 Q55 38 60 28 Q65 38 66 50" fill="#f59e0b" fillOpacity="0.3"/>
        <line x1="35" y1="55" x2="85" y2="55" stroke="#e11d48" strokeWidth="1"/>
        <path d="M30 52 L33 48 L36 52" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M84 52 L87 48 L90 52" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Fire Prevention</text>
      </svg>
    ),
    "live-electrical-work-safety": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="10" width="70" height="45" rx="4" fill="#e11d48" fillOpacity="0.1" stroke="#e11d48" strokeWidth="1.5"/>
        <text x="60" y="24" textAnchor="middle" fill="#e11d48" fontSize="6" fontWeight="bold">DANGER</text>
        <path d="M50 30 L55 30 L52 42 L58 36 L53 36 L56 28" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <rect x="65" y="30" width="20" height="15" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <text x="75" y="40" textAnchor="middle" fill="#22c55e" fontSize="5">PPE</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Live Work Safety</text>
      </svg>
    ),
    "circuit-breaker-types-explained": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="10" y="15" width="22" height="35" rx="2" fill="#1f2937" stroke="#ea580c" strokeWidth="1"/>
        <text x="21" y="36" textAnchor="middle" fill="#ea580c" fontSize="5">STD</text>
        <rect x="36" y="15" width="22" height="35" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1"/>
        <text x="47" y="36" textAnchor="middle" fill="#22c55e" fontSize="5">GFCI</text>
        <rect x="62" y="15" width="22" height="35" rx="2" fill="#1f2937" stroke="#a855f7" strokeWidth="1"/>
        <text x="73" y="36" textAnchor="middle" fill="#a855f7" fontSize="5">AFCI</text>
        <rect x="88" y="15" width="22" height="35" rx="2" fill="#1f2937" stroke="#3b82f6" strokeWidth="1"/>
        <text x="99" y="36" textAnchor="middle" fill="#3b82f6" fontSize="5">DUAL</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Breaker Types</text>
      </svg>
    ),
    "wire-splicing-methods-compared": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <line x1="15" y1="25" x2="40" y2="25" stroke="#ea580c" strokeWidth="2"/>
        <line x1="15" y1="40" x2="40" y2="40" stroke="#ea580c" strokeWidth="2"/>
        <line x1="15" y1="55" x2="40" y2="55" stroke="#ea580c" strokeWidth="2"/>
        <polygon points="45,20 55,25 45,30" fill="#f59e0b" fillOpacity="0.5" stroke="#f59e0b" strokeWidth="0.5"/>
        <rect x="42" y="35" width="16" height="10" rx="2" fill="#ea580c" fillOpacity="0.3" stroke="#ea580c" strokeWidth="1"/>
        <circle cx="50" cy="55" r="5" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1"/>
        <line x1="60" y1="25" x2="100" y2="25" stroke="#ea580c" strokeWidth="2"/>
        <line x1="58" y1="40" x2="100" y2="40" stroke="#ea580c" strokeWidth="2"/>
        <line x1="55" y1="55" x2="100" y2="55" stroke="#ea580c" strokeWidth="2"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Wire Splicing</text>
      </svg>
    ),
    "led-driver-selection-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="15" width="70" height="30" rx="4" fill="#1f2937" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="60" y="28" textAnchor="middle" fill="#ea580c" fontSize="6">LED DRIVER</text>
        <text x="60" y="38" textAnchor="middle" fill="#f59e0b" fontSize="5">350mA / 24V</text>
        <circle cx="35" cy="55" r="5" fill="#f59e0b" fillOpacity="0.6"/>
        <circle cx="50" cy="55" r="5" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="65" cy="55" r="5" fill="#f59e0b" fillOpacity="0.25"/>
        <circle cx="80" cy="55" r="5" fill="#f59e0b" fillOpacity="0.1"/>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">LED Drivers</text>
      </svg>
    ),
    "electrical-tape-types-ratings": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <ellipse cx="40" cy="30" rx="18" ry="18" fill="none" stroke="#111111" strokeWidth="8"/>
        <ellipse cx="40" cy="30" rx="18" ry="18" fill="none" stroke="#1f2937" strokeWidth="6"/>
        <ellipse cx="40" cy="30" rx="8" ry="8" fill="#1f2937"/>
        <ellipse cx="75" cy="30" rx="15" ry="15" fill="none" stroke="#ef4444" strokeWidth="6" strokeOpacity="0.5"/>
        <ellipse cx="75" cy="30" rx="6" ry="6" fill="#1f2937"/>
        <ellipse cx="100" cy="30" rx="10" ry="10" fill="none" stroke="#22c55e" strokeWidth="4" strokeOpacity="0.5"/>
        <ellipse cx="100" cy="30" rx="4" ry="4" fill="#1f2937"/>
        <text x="60" y="65" textAnchor="middle" fill="#9ca3af" fontSize="5">Electrical Tape</text>
      </svg>
    ),
    "home-ev-charger-comparison": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="20" y="12" width="35" height="45" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <circle cx="37" cy="28" r="6" fill="#06b6d4" fillOpacity="0.2" stroke="#06b6d4" strokeWidth="1"/>
        <path d="M35 26 L37 30 L39 26" fill="none" stroke="#06b6d4" strokeWidth="1"/>
        <text x="37" y="45" textAnchor="middle" fill="#06b6d4" fontSize="5">48A</text>
        <rect x="65" y="12" width="35" height="45" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="82" cy="28" r="6" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <path d="M80 26 L82 30 L84 26" fill="none" stroke="#22c55e" strokeWidth="1"/>
        <text x="82" y="45" textAnchor="middle" fill="#22c55e" fontSize="5">40A</text>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">EV Chargers</text>
      </svg>
    ),
    "electrical-panel-monitoring-systems": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="10" width="70" height="45" rx="4" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <polyline points="30,45 40,35 50,40 60,25 70,30 80,20 90,28" fill="none" stroke="#06b6d4" strokeWidth="1.5"/>
        <circle cx="90" cy="28" r="2" fill="#06b6d4"/>
        <text x="60" y="18" textAnchor="middle" fill="#06b6d4" fontSize="5">LIVE MONITOR</text>
        <rect x="30" y="48" width="15" height="4" rx="1" fill="#22c55e" fillOpacity="0.4"/>
        <rect x="50" y="48" width="10" height="4" rx="1" fill="#f59e0b" fillOpacity="0.4"/>
        <rect x="65" y="48" width="22" height="4" rx="1" fill="#ef4444" fillOpacity="0.4"/>
        <text x="60" y="70" textAnchor="middle" fill="#9ca3af" fontSize="5">Panel Monitor</text>
      </svg>
    ),
    "electrical-apps-software-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="35" y="5" width="50" height="65" rx="8" fill="#1f2937" stroke="#06b6d4" strokeWidth="1.5"/>
        <rect x="40" y="12" width="40" height="48" rx="4" fill="#0f172a"/>
        <rect x="44" y="16" width="16" height="16" rx="3" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="0.5"/>
        <text x="52" y="27" textAnchor="middle" fill="#a855f7" fontSize="6">NEC</text>
        <rect x="64" y="16" width="12" height="16" rx="3" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
        <text x="70" y="27" textAnchor="middle" fill="#22c55e" fontSize="5">V</text>
        <rect x="44" y="36" width="12" height="16" rx="3" fill="#f59e0b" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="0.5"/>
        <text x="50" y="47" textAnchor="middle" fill="#f59e0b" fontSize="5">$</text>
        <rect x="60" y="36" width="16" height="16" rx="3" fill="#06b6d4" fillOpacity="0.3" stroke="#06b6d4" strokeWidth="0.5"/>
        <text x="68" y="47" textAnchor="middle" fill="#06b6d4" fontSize="5">AI</text>
        <text x="60" y="75" textAnchor="middle" fill="#9ca3af" fontSize="5">Electrician Apps</text>
      </svg>
    ),
    "final-electrical-inspection-guide": (
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="25" y="8" width="70" height="55" rx="4" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="60" y="20" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">INSPECTION</text>
        <g transform="translate(35, 26)">
          <rect x="0" y="0" width="8" height="8" rx="1" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
          <path d="M2 4 L3 5 L6 2" stroke="#22c55e" strokeWidth="1" fill="none"/>
          <text x="12" y="6" fill="#9ca3af" fontSize="5">Panel</text>
        </g>
        <g transform="translate(35, 38)">
          <rect x="0" y="0" width="8" height="8" rx="1" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
          <path d="M2 4 L3 5 L6 2" stroke="#22c55e" strokeWidth="1" fill="none"/>
          <text x="12" y="6" fill="#9ca3af" fontSize="5">GFCI</text>
        </g>
        <g transform="translate(35, 50)">
          <rect x="0" y="0" width="8" height="8" rx="1" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" strokeWidth="0.5"/>
          <text x="12" y="6" fill="#9ca3af" fontSize="5">Labels</text>
        </g>
        <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="5">Final Inspection</text>
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
  {
    slug: "garage-electrical-requirements-nec",
    title: "Garage Electrical Requirements: NEC Code Guide for Residential & Detached Garages",
    description: "Complete guide to NEC garage electrical requirements. Learn receptacle placement, GFCI protection, lighting circuits, detached garage feeder sizing, sub-panel requirements, and EV charger readiness.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "electrical-conduit-types-guide",
    title: "Electrical Conduit Types: Complete Guide to EMT, IMC, RMC, PVC & Flexible Conduit",
    description: "Complete guide to electrical conduit types. Learn when to use EMT, IMC, RMC, PVC, and flexible conduit with NEC requirements, trade sizes, support spacing, and fittings.",
    category: "Materials",
    date: "2025-02-08",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "whole-house-surge-protection-nec",
    title: "Whole House Surge Protection: NEC Article 242 Requirements & Installation Guide",
    description: "Complete guide to whole house surge protection. Learn NEC Article 242 requirements, Type 1/2/3 SPDs, kA ratings, installation methods, and surge protection coordination.",
    category: "Safety",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "smoke-detector-wiring-requirements",
    title: "Smoke Detector Wiring Requirements: NEC & Building Code Guide",
    description: "Complete guide to smoke detector wiring requirements. Learn hardwired vs battery, interconnection wiring, placement rules, circuit requirements, and CO detector rules.",
    category: "Safety",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "electrical-wire-color-code-guide",
    title: "Electrical Wire Color Code Guide: NEC Conductor Identification Standards",
    description: "Complete guide to electrical wire color codes. Learn NEC conductor identification for 120/208V and 277/480V systems, grounding conductor colors, and re-identification methods.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "generator-transfer-switch-installation",
    title: "Generator Transfer Switch Installation: Manual vs Automatic & NEC Requirements",
    description: "Complete guide to generator transfer switch installation. Learn manual vs automatic transfer switches, sizing, interlock kits, NEC Article 702, and grounding requirements.",
    category: "Installation",
    date: "2025-02-08",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "electrical-load-balancing-guide",
    title: "Electrical Load Balancing: How to Balance a Residential Panel",
    description: "Learn how to balance electrical loads in a residential panel. Understand 120V vs 240V distribution, measuring with amp clamps, neutral current, and real-world examples.",
    category: "Calculations",
    date: "2025-02-08",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "nec-article-334-romex-nm-cable",
    title: "NEC Article 334: Romex NM Cable Guide - Uses, Limitations & Installation",
    description: "Complete guide to NM cable per NEC Article 334. Learn where Romex is permitted, securing requirements, bending radius, temperature ratings, and common code violations.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "multimeter-guide-electricians",
    title: "Multimeter Guide for Electricians: How to Test Voltage, Current & Resistance",
    description: "Complete multimeter guide for electricians. Learn voltage, current, and resistance testing, CAT safety ratings, testing outlets and breakers, and troubleshooting techniques.",
    category: "Technology",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "nec-working-space-clearances-110-26",
    title: "NEC Working Space Clearances: 110.26 Requirements for Electrical Equipment",
    description: "Master NEC 110.26 working space clearances. Learn depth conditions 1/2/3, width requirements, headroom, dedicated equipment space, and common violations.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "whole-house-rewiring-guide",
    title: "Whole House Rewiring Guide: When to Rewire, Process & What to Expect",
    description: "Complete guide to whole house rewiring. Learn signs you need rewiring, old wiring types, the rewiring process, permits, and what to expect during a residential rewire.",
    category: "Installation",
    date: "2025-02-08",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-apprenticeship-career-guide",
    title: "Electrical Apprenticeship Guide: How to Become a Licensed Electrician",
    description: "Complete guide to becoming an electrician. Learn about apprenticeship programs, IBEW vs non-union paths, pay progression, licensing requirements, and specializations.",
    category: "Technology",
    date: "2025-02-08",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "fire-alarm-wiring-nec-760",
    title: "Fire Alarm Wiring Guide: NEC Article 760 Requirements",
    description: "Complete guide to fire alarm wiring per NEC Article 760. Learn power-limited vs non-power-limited circuits, cable types, separation requirements, and NAC circuits.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "panel-schedule-labeling-nec-408",
    title: "Panel Schedule & Labeling Requirements: NEC 408.4 Directory Guide",
    description: "Master NEC 408.4 panel labeling requirements. Learn circuit directory rules, available fault current marking, field vs factory markings, and best practices.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "disconnect-switch-requirements-nec",
    title: "Disconnect Switch Requirements: NEC Rules for Equipment Disconnecting Means",
    description: "Complete guide to NEC disconnect switch requirements. Learn in-sight rules, disconnect types, ratings, motor and HVAC disconnects, and lockable disconnect provisions.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "knob-and-tube-wiring-guide",
    title: "Knob and Tube Wiring: Identification, Hazards & Replacement Guide",
    description: "Complete guide to knob and tube wiring. Learn how to identify K&T wiring, fire hazards, insulation interaction, insurance implications, and replacement options.",
    category: "Troubleshooting",
    date: "2025-02-08",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "receptacle-height-requirements-nec",
    title: "Receptacle & Switch Height Requirements: NEC & ADA Mounting Guidelines",
    description: "Complete guide to receptacle and switch mounting heights. Learn standard heights, ADA requirements, countertop heights, floor receptacles, and outdoor receptacle placement.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "9 min read",
    featured: false,
  },
  {
    slug: "electrical-estimating-contractors",
    title: "Electrical Estimating Guide: How to Bid Jobs & Calculate Material & Labor Costs",
    description: "Complete electrical estimating guide for contractors. Learn the takeoff process, material pricing, labor units, overhead and profit, and how to submit winning bids.",
    category: "Technology",
    date: "2025-02-08",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "surge-arrester-vs-tvss",
    title: "Surge Arrester vs SPD (TVSS): Understanding Surge Protection Device Types",
    description: "Understand the differences between surge arresters, SPDs, and TVSS devices. Learn Type 1/2/3/4 classifications, voltage protection ratings, kA ratings, and UL 1449.",
    category: "Materials",
    date: "2025-02-08",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "nec-article-230-service-requirements",
    title: "NEC Article 230: Electrical Service Requirements Complete Guide",
    description: "Master NEC Article 230 electrical service requirements. Learn service drop vs lateral, overhead clearances, service entrance conductors, disconnecting means, and grounding.",
    category: "NEC Code",
    date: "2025-02-08",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "nec-article-220-load-calculations",
    title: "NEC Article 220: Branch Circuit & Feeder Load Calculations Guide",
    description: "Master NEC Article 220 load calculations for dwelling units and commercial buildings. Learn standard and optional methods, demand factors, and step-by-step examples.",
    category: "NEC Code",
    date: "2025-03-15",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "nec-article-430-motor-circuits",
    title: "NEC Article 430: Motor Circuit Wiring Requirements Guide",
    description: "Complete guide to NEC Article 430 motor circuit requirements. Learn motor FLC tables, conductor sizing, overload protection, short-circuit protection, and disconnect requirements.",
    category: "NEC Code",
    date: "2025-03-18",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "nec-article-480-battery-storage",
    title: "NEC Article 480: Battery Storage Systems Requirements Guide",
    description: "Guide to NEC Article 480 battery energy storage system requirements. Learn wiring, protection, ventilation, disconnecting means, and integration with solar PV systems.",
    category: "NEC Code",
    date: "2025-03-20",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "nec-2026-code-changes",
    title: "Key NEC 2026 Code Changes Every Electrician Should Know",
    description: "Overview of major NEC 2026 code changes including updated GFCI/AFCI requirements, energy storage updates, EV charging changes, and surge protection revisions.",
    category: "NEC Code",
    date: "2025-03-22",
    readTime: "16 min read",
    featured: false,
  },
  {
    slug: "short-circuit-current-calculation",
    title: "How to Calculate Short-Circuit Current for Panel Sizing",
    description: "Learn to calculate available fault current using the point-to-point method. Understand AIC ratings, transformer contribution, and NEC 110.9 requirements for panel sizing.",
    category: "Calculations",
    date: "2025-03-25",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "lighting-load-calculations-guide",
    title: "Lighting Load Calculations: Methods & NEC Requirements",
    description: "Complete guide to lighting load calculations per NEC Table 220.12. Learn VA per square foot values, demand factors, continuous load rules, and LED vs fluorescent differences.",
    category: "Calculations",
    date: "2025-03-28",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "demand-factor-calculations-nec",
    title: "Demand Factor Calculations: Reducing Oversized Services",
    description: "Master NEC demand factor calculations to right-size electrical services. Learn Tables 220.42, 220.54, 220.55, 220.56, and the optional calculation method for dwellings.",
    category: "Calculations",
    date: "2025-04-01",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "recessed-lighting-installation-guide",
    title: "Recessed Lighting Installation: IC vs Non-IC Rated Guide",
    description: "Complete guide to recessed lighting installation. Learn IC vs Non-IC rated fixtures, NEC Article 410 requirements, clearances, thermal protection, and LED retrofit options.",
    category: "Installation",
    date: "2025-04-05",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "sub-panel-installation-guide",
    title: "Sub-Panel Installation Guide: Sizing, Wiring & NEC Rules",
    description: "Step-by-step sub-panel installation guide. Learn feeder sizing, 4-wire requirements, grounding vs bonding rules, and the critical mistake of bonding neutral in sub-panels.",
    category: "Installation",
    date: "2025-04-08",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "smart-home-wiring-guide",
    title: "Smart Home Wiring: Pre-Wire & Retrofit Guide for Electricians",
    description: "Guide to smart home wiring for electricians. Learn neutral wire requirements, structured wiring, Cat6 cabling, PoE for cameras, and smart switch installation techniques.",
    category: "Technology",
    date: "2025-04-10",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "ceiling-fan-wiring-installation",
    title: "Ceiling Fan Wiring & Installation: Box Requirements & Methods",
    description: "Complete ceiling fan wiring guide. Learn fan-rated box requirements per NEC 314.27(C), wiring configurations, remote control options, and outdoor-rated fan installations.",
    category: "Installation",
    date: "2025-04-12",
    readTime: "10 min read",
    featured: false,
  },
  {
    slug: "arc-flash-hazard-analysis",
    title: "Arc Flash Hazard Analysis: NFPA 70E Compliance Guide",
    description: "Complete guide to arc flash hazard analysis per NFPA 70E. Learn incident energy calculations, PPE categories, labeling requirements, and approach boundaries.",
    category: "Safety",
    date: "2025-04-15",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "lockout-tagout-electrical-procedures",
    title: "Lockout/Tagout (LOTO) Procedures for Electrical Work",
    description: "Master lockout/tagout procedures per OSHA 1910.147 and NFPA 70E. Learn the six LOTO steps, energy source identification, verification, and group lockout procedures.",
    category: "Safety",
    date: "2025-04-18",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "energy-management-systems-electrical",
    title: "Energy Management Systems: Monitoring & Optimization Guide",
    description: "Guide to energy management systems for electricians. Learn CT installation, communication protocols, demand response, power quality monitoring, and revenue opportunities.",
    category: "Technology",
    date: "2025-04-22",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "electric-vehicle-fleet-charging",
    title: "Commercial EV Fleet Charging Infrastructure Design",
    description: "Design guide for commercial EV fleet charging infrastructure. Learn service sizing, load management, transformer considerations, and NEC 625 commercial requirements.",
    category: "Technology",
    date: "2025-04-25",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-connector-types-guide",
    title: "Electrical Connectors & Terminals: Types, Uses & Best Practices",
    description: "Complete guide to electrical connectors and terminals. Learn wire nuts, push-in connectors, crimp lugs, split bolts, torque specs, and NEC 110.14 requirements.",
    category: "Materials",
    date: "2025-04-28",
    readTime: "11 min read",
    featured: false,
  },
  {
    slug: "mc-cable-vs-conduit-comparison",
    title: "MC Cable vs Conduit: When to Use Each & NEC Requirements",
    description: "Compare MC cable and conduit for electrical installations. Learn cost differences, installation speed, NEC requirements, grounding considerations, and where each is required.",
    category: "Materials",
    date: "2025-05-01",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "voltage-imbalance-troubleshooting",
    title: "Voltage Imbalance in 3-Phase Systems: Diagnosis & Solutions",
    description: "Diagnose and fix voltage imbalance in 3-phase systems. Learn the NEMA calculation method, causes, effects on motors, derating factors, and corrective actions.",
    category: "Troubleshooting",
    date: "2025-05-05",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "intermittent-electrical-faults-guide",
    title: "Finding Intermittent Electrical Faults: Systematic Troubleshooting",
    description: "Systematic guide to finding intermittent electrical faults. Learn thermal imaging, data logging, insulation testing, and pattern recognition techniques for elusive problems.",
    category: "Troubleshooting",
    date: "2025-05-08",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "rough-in-inspection-preparation",
    title: "Rough-In Electrical Inspection: Complete Preparation Checklist",
    description: "Pass your rough-in electrical inspection on the first try. Complete checklist covering box fill, cable securing, nail plates, AFCI/GFCI circuits, and common failures.",
    category: "Inspections",
    date: "2025-05-12",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "nec-article-300-wiring-methods",
    title: "NEC Article 300 Wiring Methods: Complete Electrician's Guide",
    description: "Master NEC Article 300 wiring methods. Learn installation requirements for conductors, raceways, cables, protection, and common code violations to avoid.",
    category: "NEC Code",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "cable-tray-installation-nec-392",
    title: "Cable Tray Installation Guide: NEC Article 392 Requirements",
    description: "Complete guide to cable tray installation per NEC 392. Learn tray types, sizing, fill calculations, support requirements, and grounding for commercial installations.",
    category: "Installation",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "nec-article-344-rigid-conduit",
    title: "NEC Article 344 Rigid Metal Conduit: Installation Guide",
    description: "Complete guide to rigid metal conduit (RMC) installation per NEC 344. Learn sizing, bending, support spacing, threading, and best practices for industrial applications.",
    category: "NEC Code",
    date: "2026-03-02",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "harmonics-power-systems-guide",
    title: "Harmonics in Power Systems: Causes, Effects, and Solutions",
    description: "Understand harmonics in electrical power systems. Learn causes of harmonic distortion, effects on equipment, measurement techniques, and mitigation strategies.",
    category: "Troubleshooting",
    date: "2026-03-02",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "single-phase-vs-three-phase",
    title: "Single Phase vs Three Phase Power: Complete Comparison Guide",
    description: "Understand the differences between single-phase and three-phase power. Learn when to use each system, conversion methods, load balancing, and practical applications.",
    category: "Calculations",
    date: "2026-03-02",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "wire-pulling-techniques-guide",
    title: "Wire Pulling Techniques: Professional Methods and Best Practices",
    description: "Master professional wire pulling techniques. Learn about lubricants, pulling tension calculations, fish tape methods, conduit preparation, and team coordination.",
    category: "Installation",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "electric-heat-installation-nec",
    title: "Electric Heat Installation: NEC Requirements for Fixed Heating",
    description: "Complete guide to electric heat installation per NEC Article 424. Learn circuit sizing, thermostat wiring, baseboard heaters, and radiant heat system requirements.",
    category: "Installation",
    date: "2026-03-02",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "outdoor-landscape-lighting-nec",
    title: "Outdoor Landscape Lighting: NEC Requirements and Installation",
    description: "Install outdoor and landscape lighting per NEC requirements. Learn about low-voltage systems, transformer sizing, wet location ratings, and GFCI protection.",
    category: "Installation",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "busway-busduct-installation-guide",
    title: "Busway and Bus Duct Installation: Complete Electrician's Guide",
    description: "Master busway and bus duct installation. Learn about feeder busway, plug-in busway, trolley busway, sizing calculations, and NEC Article 368 requirements.",
    category: "Installation",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "grounding-electrode-system-guide",
    title: "Grounding Electrode System: NEC 250 Complete Guide",
    description: "Master grounding electrode systems per NEC 250. Learn electrode types, installation requirements, conductor sizing, bonding, and testing procedures.",
    category: "NEC Code",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-bonding-requirements-guide",
    title: "Electrical Bonding Requirements: NEC Compliance Guide",
    description: "Understand electrical bonding requirements per the NEC. Learn equipment bonding, service bonding, bonding jumper sizing, and common violations to avoid.",
    category: "NEC Code",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "medium-voltage-basics-electricians",
    title: "Medium Voltage Basics for Electricians: 1kV to 35kV Systems",
    description: "Introduction to medium voltage electrical systems. Learn about switchgear, transformers, cable terminations, safety procedures, and career opportunities in MV work.",
    category: "Materials",
    date: "2026-03-02",
    readTime: "15 min read",
    featured: false,
  },
  {
    slug: "uninterruptible-power-supply-guide",
    title: "UPS Systems Guide: Selection, Sizing, and Installation",
    description: "Complete guide to uninterruptible power supply systems. Learn UPS types, sizing calculations, battery selection, bypass systems, and maintenance best practices.",
    category: "Technology",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-troubleshooting-methodology",
    title: "Electrical Troubleshooting Methodology: Systematic Approach",
    description: "Master systematic electrical troubleshooting. Learn the half-split method, logical diagnosis techniques, common fault patterns, and documentation best practices.",
    category: "Troubleshooting",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "electrical-testing-equipment-guide",
    title: "Essential Electrical Testing Equipment Guide for Electricians",
    description: "Complete guide to electrical testing equipment. Learn about multimeters, clamp meters, meggers, circuit analyzers, thermal cameras, and proper calibration practices.",
    category: "Troubleshooting",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "electrical-room-design-requirements",
    title: "Electrical Room Design Requirements: NEC Compliance Guide",
    description: "Design compliant electrical rooms per NEC requirements. Learn working space clearances, ventilation, lighting, fire rating, equipment layout, and access requirements.",
    category: "Materials",
    date: "2026-03-02",
    readTime: "13 min read",
    featured: false,
  },
  {
    slug: "electrical-permit-process-guide",
    title: "Electrical Permit Process Guide: From Application to Final Inspection",
    description: "Navigate the electrical permit process from application to final inspection. Learn permit types, documentation requirements, scheduling, and working with inspectors.",
    category: "Inspections",
    date: "2026-03-02",
    readTime: "12 min read",
    featured: false,
  },
  {
    slug: "electrical-blueprint-takeoff-guide",
    title: "Electrical Blueprint Takeoff Guide: Reading Plans and Estimating",
    description: "Master electrical blueprint takeoffs. Learn to read construction plans, identify symbols, count devices, measure conduit runs, and create accurate material lists.",
    category: "Technology",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "branch-circuit-design-commercial",
    title: "Commercial Branch Circuit Design: NEC Requirements and Best Practices",
    description: "Design commercial branch circuits per NEC Article 210. Learn circuit types, load calculations, receptacle layouts, voltage drop considerations, and panelboard design.",
    category: "Calculations",
    date: "2026-03-02",
    readTime: "14 min read",
    featured: false,
  },
  {
    slug: "journeyman-electrician-exam-prep",
    title: "Journeyman Electrician Exam Prep: Complete Study Guide",
    description: "Prepare for the journeyman electrician exam with this comprehensive study guide. Covers NEC code navigation, electrical theory, load calculations, and test strategies.",
    category: "Technology",
    date: "2026-03-02",
    readTime: "15 min read",
    featured: false,
  },
  // Batch 4 - 40 SEO-driven posts (2026-03-04)
  {
    slug: "nec-article-440-hvac-electrical",
    title: "NEC Article 440: HVAC Equipment Electrical Requirements Guide",
    description: "Complete guide to NEC Article 440 HVAC electrical requirements. Learn AC disconnect sizing, compressor circuit protection, heat pump wiring, MCA and MOP calculations, overload protection for hermetic refrigerant motor-compressors, wire sizing for air conditioning units, and common HVAC electrical code violations to avoid.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "nec-article-422-appliance-circuits",
    title: "NEC Article 422: Appliance Wiring & Circuit Requirements Guide",
    description: "Complete guide to NEC Article 422 appliance circuit requirements. Learn dedicated circuit rules for dishwashers, garbage disposals, ranges, and dryers. Covers cord-and-plug connections (422.16), appliance overcurrent protection, fixed vs portable appliance wiring, and common code violations.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "nec-article-517-healthcare-electrical",
    title: "NEC Article 517: Healthcare Facility Electrical Requirements Guide",
    description: "Comprehensive guide to NEC Article 517 healthcare facility electrical requirements. Learn essential electrical system design including life safety branch, critical branch, and equipment system. Covers hospital grade receptacles, isolated power systems, wet procedure locations, and generator requirements.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "nec-junction-box-rules-314",
    title: "NEC Junction Box Rules: Article 314 Installation & Accessibility Requirements",
    description: "Complete guide to NEC Article 314 junction box rules. Learn junction box accessibility requirements (314.29), pull box sizing for straight and angle pulls (314.28), conduit body rules, box fill calculations, cover plate requirements, box support and mounting, and damp/wet location box installation.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "tandem-breakers-nec-rules",
    title: "Tandem Breakers: NEC Rules for Slim & Twin Circuit Breakers",
    description: "Complete guide to tandem breaker NEC rules. Learn where slim/twin breakers are permitted, CTL panelboard requirements, panel listing restrictions, which slots accept tandem breakers, half-size breaker compatibility by brand, and common inspection failures with double-stuff breakers.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "16 min read",
    featured: false,
  },
  {
    slug: "ground-fault-protection-services",
    title: "Ground Fault Protection for Services: NEC 230.95 Complete Guide",
    description: "Complete guide to ground fault protection (GFP) for services per NEC 230.95. Learn GFP vs GFCI differences, 1000 amp threshold requirements, solidly grounded wye system criteria, two levels of GFP per NEC 215.10, zero-sequence and residual sensing methods, and nuisance tripping causes.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "16 min read",
    featured: false,
  },
  {
    slug: "nec-article-225-outside-feeders",
    title: "NEC Article 225: Outside Branch Circuits & Feeders Guide",
    description: "Complete guide to NEC Article 225 covering outside branch circuits and feeders. Learn overhead conductor clearance heights, underground feeder installation methods, detached building disconnect requirements, number of disconnects allowed per 225.33, and grounding at separate buildings.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "16 min read",
    featured: false,
  },
  {
    slug: "selective-coordination-requirements",
    title: "Selective Coordination: NEC Requirements for Critical Electrical Systems",
    description: "Complete guide to selective coordination requirements for critical electrical systems. Learn NEC 700.32, 701.27, 708.54, and 517 requirements, time-current curve analysis, breaker vs fuse coordination, coordination study procedures, and healthcare facility selective coordination.",
    category: "NEC Code",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "conduit-bending-calculations",
    title: "Conduit Bending Calculations: Offsets, Kicks & Saddle Bends Guide",
    description: "Master conduit bending calculations for offset bends, saddle bends, kick 90s, and stub-ups. Includes offset multiplier tables (10-60 degrees), shrink constants, 3-point and 4-point saddle formulas, segment bending for large EMT/rigid conduit, and field-proven tips for accurate bends.",
    category: "Calculations",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "generator-sizing-calculation-guide",
    title: "Generator Sizing Guide: How to Calculate Backup Power Needs",
    description: "Complete generator sizing guide covering kW calculations, starting watts vs running watts, standby vs portable generators, transfer switch sizing, load prioritization, residential and commercial generator sizing with step-by-step calculation examples and common household load wattage tables.",
    category: "Calculations",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "hvac-circuit-sizing-guide",
    title: "HVAC Circuit Sizing: How to Size Circuits for AC Units & Heat Pumps",
    description: "Complete guide to HVAC circuit sizing for air conditioners and heat pumps. Learn how to read equipment nameplates, calculate MCA and MOP, select the correct breaker size and wire gauge, handle heat pump backup strip loads, and calculate voltage drop for long condenser runs per NEC Article 440.",
    category: "Calculations",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "feeder-sizing-calculations-nec",
    title: "Feeder Sizing Calculations: NEC Conductor & Overcurrent Requirements",
    description: "Complete guide to feeder sizing calculations per NEC Article 215. Learn feeder conductor sizing, demand factor application, overcurrent protection, voltage drop considerations for feeders, neutral conductor sizing, feeder tap rules (10-foot and 25-foot), and step-by-step sizing examples.",
    category: "Calculations",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "electrical-cost-per-square-foot",
    title: "Electrical Cost Per Square Foot: New Construction Estimating Guide",
    description: "Complete guide to electrical cost per square foot for new construction. Covers residential and commercial electrical rough-in costs, material and labor breakdown, wiring cost estimates, regional pricing variations, bid pricing strategies, and money-saving tips for electrical contractors.",
    category: "Calculations",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "mini-split-wiring-installation",
    title: "Mini-Split AC Wiring: Complete Electrical Installation Guide",
    description: "Complete electrical installation guide for ductless mini-split AC systems. Learn circuit sizing from MCA/MOP nameplate data, disconnect switch requirements, wire sizing for 120V and 240V units, whip connections, communication wire routing, and NEC compliance for mini-split installations.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "dimmer-switch-wiring-guide",
    title: "Dimmer Switch Wiring: Types, LED Compatibility & Installation Guide",
    description: "Complete guide to dimmer switch wiring covering leading-edge, trailing-edge, 0-10V, and ELV dimmer types. Learn LED compatibility with CL-rated dimmers, single-pole and 3-way dimmer wiring diagrams, neutral wire requirements for smart dimmers, and how to troubleshoot flickering LEDs.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "240v-outlet-wiring-guide",
    title: "240V Outlet Wiring Guide: Dryer, Range & EV Circuits Explained",
    description: "Complete 240V outlet wiring guide covering NEMA 14-30 dryer outlets, NEMA 14-50 range and EV charging outlets, 3-wire vs 4-wire configurations, double-pole breaker selection, wire sizing per NEC, and step-by-step installation for 240 volt receptacles.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "hot-tub-spa-electrical-wiring",
    title: "Hot Tub & Spa Electrical Wiring: GFCI, Disconnect & NEC 680 Guide",
    description: "Complete guide to hot tub and spa electrical wiring requirements per NEC Article 680. Learn GFCI protection rules, disconnect placement (5-50 feet), 240V wire sizing for 50A spa circuits, conduit and direct burial methods, bonding requirements, and breaker sizing.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "pvc-conduit-installation-guide",
    title: "PVC Conduit Installation Guide: Gluing, Bending & Expansion Joints",
    description: "Complete PVC conduit installation guide covering Schedule 40 vs 80 differences, proper PVC cement application techniques, heat bending procedures, expansion fitting requirements for temperature changes, NEC Article 352 support spacing tables, and common installation mistakes to avoid.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "under-cabinet-lighting-wiring",
    title: "Under Cabinet Lighting Wiring: Methods, Types & NEC Requirements",
    description: "Complete guide to under cabinet lighting wiring methods including LED tape lights, puck lights, hardwired vs plug-in options, NEC code requirements for kitchen cabinet lighting, LED driver placement, low voltage vs line voltage systems, and dimmer compatibility.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "detached-building-electrical-guide",
    title: "Detached Building Electrical: Feeding Garages, Shops & ADUs Guide",
    description: "Complete guide to detached building electrical installations including detached garage wiring, ADU electrical requirements, separate building feeders, sub-panel installation, overhead vs underground feeder options, disconnect requirements per NEC 225, and grounding at a second building.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "home-workshop-electrical-setup",
    title: "Home Workshop Electrical Setup: Circuit Planning for Power Tools & Welders",
    description: "Complete guide to planning your home workshop electrical system. Learn workshop sub-panel sizing, welder circuit requirements, air compressor wiring, 240V shop circuits, power tool dedicated circuits, workshop lighting layout, and receptacle placement strategies.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "basement-electrical-wiring-guide",
    title: "Basement Electrical Wiring Guide: Finishing a Basement to Code",
    description: "Complete guide to basement electrical wiring for finished basements. Covers AFCI protection requirements, receptacle spacing per NEC 210.52, lighting and switch placement, basement bathroom GFCI circuits, egress lighting, panel capacity planning, and common code violations to avoid.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "bathroom-exhaust-fan-wiring",
    title: "Bathroom Exhaust Fan Wiring: Installation, Timer Switch & CFM Guide",
    description: "Complete guide to bathroom exhaust fan wiring and installation. Learn CFM sizing by room square footage, timer switch and humidity sensor wiring, fan/light/heater combo connections, duct sizing and routing, building code ventilation requirements, and common installation mistakes to avoid.",
    category: "Installation",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "afci-breaker-nuisance-tripping",
    title: "AFCI Breaker Nuisance Tripping: Causes, Diagnosis & Solutions",
    description: "Complete guide to AFCI breaker nuisance tripping causes and solutions. Learn to troubleshoot arc fault circuit interrupter problems including shared neutral issues, incompatible devices like motors and dimmers, long home runs, loose connections, and systematic diagnosis steps.",
    category: "Troubleshooting",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "neutral-vs-ground-wire-explained",
    title: "Neutral vs Ground Wire: Understanding the Critical Difference",
    description: "Understand the critical difference between neutral and ground wires. Learn NEC definitions of grounded conductor vs grounding conductor, why they bond only at the service entrance, floating neutral dangers, bootleg grounds, sub-panel neutral-ground separation, and testing procedures.",
    category: "Troubleshooting",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "double-tapped-breakers-guide",
    title: "Double Tapped Breakers: Why They're Dangerous & How to Fix Them",
    description: "Complete guide to double tapped breakers -- why two wires on one breaker is a fire hazard and NEC code violation. Learn how home inspectors flag double taps, which breakers allow double lugging, and proper fixes including pigtailing, tandem breakers, and sub-panels.",
    category: "Troubleshooting",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "federal-pacific-zinsco-panels",
    title: "Federal Pacific & Zinsco Panels: Safety Risks & Replacement Guide",
    description: "Complete guide to Federal Pacific Electric (FPE) Stab-Lok breaker panels and Zinsco panels. Learn how to identify these dangerous panels, understand the fire hazard risks from breakers that fail to trip, insurance implications, and estimated costs for panel upgrades.",
    category: "Troubleshooting",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "circuit-breaker-wont-reset",
    title: "Circuit Breaker Won't Reset: Diagnosis & Solutions Guide",
    description: "Complete troubleshooting guide when a circuit breaker won't reset. Learn how to diagnose tripped breakers, identify short circuits, ground faults, overloaded circuits, and bad breakers. Step-by-step reset procedures, AFCI vs GFCI trip indicators, and when to call an electrician.",
    category: "Troubleshooting",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "electrical-safety-homeowners-guide",
    title: "Electrical Safety for Homeowners: Warning Signs & When to Call an Electrician",
    description: "Complete homeowner guide to electrical safety warning signs including flickering lights, warm outlets, burning smells, buzzing sounds, and tripping breakers. Learn when to call an electrician immediately, how to prevent electrical fires, and a home electrical safety checklist.",
    category: "Safety",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "aluminum-wiring-remediation-guide",
    title: "Aluminum Wiring Remediation: COPALUM, AlumiConn & Repair Methods",
    description: "Complete guide to aluminum wiring remediation methods including COPALUM crimp connectors, AlumiConn lug connectors, pigtailing techniques, and complete rewiring. Learn about aluminum wire hazards, oxidation and thermal expansion problems, NEC 110.14 compliance, and cost comparisons.",
    category: "Safety",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "electrical-fire-prevention-guide",
    title: "Electrical Fire Prevention: Common Causes & NEC Code Requirements",
    description: "Complete guide to electrical fire prevention covering top causes of electrical fires including arc faults, overloaded circuits, loose connections, and damaged wiring. Learn AFCI protection requirements, NEC code requirements for fire prevention, and a prevention checklist every electrician should follow.",
    category: "Safety",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "live-electrical-work-safety",
    title: "Working on Live Electrical Equipment: NFPA 70E Safety Requirements",
    description: "Comprehensive guide to working on live electrical equipment per NFPA 70E. Learn energized work permit requirements, when live work is permitted, approach boundaries, PPE for energized electrical work, risk assessment procedures, and OSHA enforcement of energized work safety rules.",
    category: "Safety",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "circuit-breaker-types-explained",
    title: "Circuit Breaker Types Explained: Standard, GFCI, AFCI & Dual-Function",
    description: "Complete guide to every type of circuit breaker: standard single-pole and double-pole, GFCI breakers, AFCI breakers, dual-function AFCI/GFCI, tandem/slim breakers, GFPE, molded case circuit breakers (MCCB), and shunt trip breakers. Learn how each works and NEC requirements.",
    category: "Materials",
    date: "2026-03-04",
    readTime: "20 min read",
    featured: false,
  },
  {
    slug: "wire-splicing-methods-compared",
    title: "Wire Splicing Methods Compared: Wire Nuts vs Wago vs Push-In Connectors",
    description: "Complete comparison of wire splicing methods including wire nuts, Wago 221 lever nuts, push-in connectors, crimp connectors, butt splices, and split bolt connectors. Learn proper techniques, UL listing requirements, NEC 110.14 compliance, and when to use each connector type.",
    category: "Materials",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "led-driver-selection-guide",
    title: "LED Driver Selection Guide: Types, Dimming Protocols & Compatibility",
    description: "Complete guide to LED driver selection covering constant current vs constant voltage drivers, 0-10V dimming, DALI and DALI-2 protocols, ELV trailing edge and forward phase TRIAC dimming, PWM dimming, driver sizing calculations, and dimmer compatibility troubleshooting.",
    category: "Materials",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "electrical-tape-types-ratings",
    title: "Electrical Tape Types & Ratings: Vinyl, Rubber & Specialty Tapes Guide",
    description: "Complete guide to electrical tape types including vinyl, rubber splicing, mastic, and specialty tapes. Learn voltage ratings, UL listings, color coding standards per NEC phasing, proper half-lap application technique, temperature ratings, and 3M tape comparisons.",
    category: "Materials",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "home-ev-charger-comparison",
    title: "Home EV Charger Comparison: ChargePoint, Wallbox, Tesla & More Reviewed",
    description: "Comprehensive home EV charger comparison reviewing ChargePoint Home Flex, Wallbox Pulsar Plus, Tesla Wall Connector, Emporia, Grizzl-E, and JuiceBox. Compare Level 2 charger features, pricing, amperage, WiFi connectivity, load sharing, and installation requirements.",
    category: "Technology",
    date: "2026-03-04",
    readTime: "22 min read",
    featured: false,
  },
  {
    slug: "electrical-panel-monitoring-systems",
    title: "Electrical Panel Monitoring Systems: Real-Time Load Monitoring Guide",
    description: "Complete guide to electrical panel monitoring systems for real-time load monitoring. Compare Sense, Emporia Vue, IoTaWatt, Leviton, and Span smart panels. Learn how CT clamp monitors work, circuit-level vs whole-home energy monitoring, and installation requirements.",
    category: "Technology",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "electrical-apps-software-guide",
    title: "Best Electrical Apps & Software for Modern Electricians (2026)",
    description: "Comprehensive guide to the best electrical apps and software for electricians in 2026. Covers NEC code reference apps, electrical calculator apps for voltage drop and wire sizing, conduit fill calculators, project management tools, estimating software, and AI-powered electrical tools like Ampora.",
    category: "Technology",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
  {
    slug: "final-electrical-inspection-guide",
    title: "Final Electrical Inspection: Common Failures & How to Prepare",
    description: "Complete guide to passing your final electrical inspection. Learn what inspectors look for during cover-up and final inspection, common inspection failures including missing cover plates, GFCI/AFCI violations, panel labeling issues, grounding deficiencies, and a room-by-room checklist.",
    category: "Inspections",
    date: "2026-03-04",
    readTime: "18 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured);

  // Pre-render thumbnails on the server for the client component
  const thumbnails: Record<string, ReactNode> = {};
  for (const post of recentPosts) {
    thumbnails[post.slug] = getThumbnail(post.slug);
  }

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

          {/* Filterable Post List */}
          <BlogPostList
            posts={recentPosts}
            thumbnails={thumbnails}
            categoryColors={categoryColors}
          />

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
