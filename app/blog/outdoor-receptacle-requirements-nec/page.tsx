import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Outdoor Receptacle Requirements NEC: GFCI, Covers & Placement Rules",
  description: "Complete guide to NEC outdoor receptacle requirements. Learn GFCI protection rules, weatherproof vs in-use cover requirements, placement and height specifications for residential and commercial outdoor electrical installations.",
  keywords: [
    "outdoor receptacle requirements",
    "NEC outdoor outlets",
    "outdoor GFCI requirements",
    "weatherproof cover requirements",
    "in-use cover NEC",
    "outdoor electrical code",
    "NEC 210.8",
    "NEC 406.9",
    "outdoor outlet placement",
    "exterior receptacle requirements",
    "wet location receptacle",
    "damp location electrical",
    "outdoor outlet height",
    "patio receptacle code",
    "deck outlet requirements"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/outdoor-receptacle-requirements-nec",
  },
  openGraph: {
    title: "Outdoor Receptacle Requirements NEC: Complete Guide - Ampora",
    description: "NEC outdoor receptacle requirements including GFCI, weatherproof covers, and placement rules.",
    url: "https://amporalabs.com/blog/outdoor-receptacle-requirements-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Outdoor receptacle installation illustration">
      {/* Background - house exterior */}
      <rect x="20" y="30" width="360" height="140" rx="4" fill="#374151" fillOpacity="0.3"/>

      {/* Siding lines */}
      <g stroke="#4b5563" strokeWidth="1" opacity="0.5">
        <line x1="20" y1="50" x2="380" y2="50"/>
        <line x1="20" y1="70" x2="380" y2="70"/>
        <line x1="20" y1="90" x2="380" y2="90"/>
        <line x1="20" y1="110" x2="380" y2="110"/>
        <line x1="20" y1="130" x2="380" y2="130"/>
        <line x1="20" y1="150" x2="380" y2="150"/>
      </g>

      {/* Ground level */}
      <line x1="20" y1="170" x2="380" y2="170" stroke="#78350f" strokeWidth="3"/>
      <text x="370" y="168" textAnchor="end" fill="#9ca3af" fontSize="7">Ground</text>

      {/* In-Use Cover (left) */}
      <g transform="translate(60, 70)">
        {/* Box */}
        <rect x="0" y="0" width="50" height="70" rx="4" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
        {/* Cover (bubble type) */}
        <path d="M 5 5 L 5 65 L 45 65 L 45 5 C 45 5 40 0 25 0 C 10 0 5 5 5 5" fill="#374151" stroke="#9ca3af" strokeWidth="1.5"/>
        {/* Receptacle visible through clear cover */}
        <rect x="15" y="25" width="20" height="30" rx="2" fill="#f5f5f4" fillOpacity="0.3"/>
        <rect x="20" y="32" width="10" height="6" rx="1" fill="#1f2937"/>
        <rect x="17" y="42" width="6" height="4" rx="1" fill="#ef4444"/>
        <rect x="27" y="42" width="6" height="4" rx="1" fill="#1f2937"/>
        {/* Cord entry slot */}
        <rect x="15" y="60" width="20" height="5" fill="#1f2937"/>
        <text x="25" y="82" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">In-Use Cover</text>
        <text x="25" y="92" textAnchor="middle" fill="#86efac" fontSize="6">Required when cord</text>
        <text x="25" y="100" textAnchor="middle" fill="#86efac" fontSize="6">is plugged in</text>
      </g>

      {/* Weatherproof Cover (middle) */}
      <g transform="translate(160, 70)">
        {/* Box */}
        <rect x="0" y="0" width="50" height="55" rx="4" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
        {/* Flip cover (closed) */}
        <rect x="3" y="3" width="44" height="49" rx="3" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
        {/* Spring hinge */}
        <circle cx="25" cy="5" r="3" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        {/* WP marking */}
        <text x="25" y="35" textAnchor="middle" fill="#9ca3af" fontSize="10" fontWeight="bold">WP</text>
        <text x="25" y="72" textAnchor="middle" fill="#f59e0b" fontSize="8" fontWeight="bold">Weather Resistant</text>
        <text x="25" y="82" textAnchor="middle" fill="#fcd34d" fontSize="6">Only protects when</text>
        <text x="25" y="90" textAnchor="middle" fill="#fcd34d" fontSize="6">cover is closed</text>
      </g>

      {/* GFCI indicator */}
      <g transform="translate(260, 50)">
        <rect x="0" y="0" width="100" height="60" rx="8" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2"/>
        <text x="50" y="20" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">GFCI REQUIRED</text>
        <text x="50" y="35" textAnchor="middle" fill="#86efac" fontSize="8">NEC 210.8(A)(3)</text>
        <text x="50" y="50" textAnchor="middle" fill="#86efac" fontSize="7">All outdoor receptacles</text>
      </g>

      {/* Height indicator */}
      <g transform="translate(310, 90)">
        <line x1="0" y1="0" x2="0" y2="80" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="-5" y1="0" x2="5" y2="0" stroke="#a855f7" strokeWidth="1.5"/>
        <line x1="-5" y1="80" x2="5" y2="80" stroke="#a855f7" strokeWidth="1.5"/>
        <text x="10" y="45" fill="#c4b5fd" fontSize="7">6" - 6.5 ft</text>
        <text x="10" y="55" fill="#c4b5fd" fontSize="6">typical</text>
      </g>
    </svg>
  );
}

function CoverTypesDiagram() {
  return (
    <svg viewBox="0 0 380 200" className="w-full h-48" aria-label="Comparison of weatherproof cover types">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="bold">Cover Types: Weatherproof vs In-Use</text>

      {/* Weatherproof (standard) */}
      <g transform="translate(40, 40)">
        <text x="55" y="0" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">Standard Weatherproof</text>

        {/* Closed position */}
        <g transform="translate(0, 15)">
          <rect x="20" y="0" width="70" height="55" rx="4" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
          <rect x="25" y="5" width="60" height="45" rx="3" fill="#4b5563" stroke="#6b7280" strokeWidth="1"/>
          <circle cx="55" cy="8" r="4" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
          <text x="55" y="35" textAnchor="middle" fill="#9ca3af" fontSize="10">WP</text>
          <text x="55" y="65" textAnchor="middle" fill="#fcd34d" fontSize="7">Closed = Protected</text>
        </g>

        {/* Open with cord - NOT protected */}
        <g transform="translate(0, 95)">
          <rect x="20" y="0" width="70" height="55" rx="4" fill="#6b7280" stroke="#ef4444" strokeWidth="2"/>
          <rect x="25" y="5" width="60" height="10" rx="2" fill="#4b5563"/>
          <rect x="35" y="20" width="40" height="25" rx="2" fill="#f5f5f4"/>
          <rect x="42" y="25" width="8" height="12" rx="1" fill="#1f2937"/>
          <rect x="55" y="25" width="8" height="12" rx="1" fill="#1f2937"/>
          {/* Cord */}
          <line x1="55" y1="45" x2="55" y2="60" stroke="#1f2937" strokeWidth="4"/>
          <line x1="55" y1="60" x2="70" y2="75" stroke="#1f2937" strokeWidth="4"/>
          <text x="55" y="85" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">NOT Protected!</text>
        </g>
      </g>

      {/* In-Use Cover */}
      <g transform="translate(210, 40)">
        <text x="55" y="0" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">In-Use (Extra Duty)</text>

        {/* With cord - STILL protected */}
        <g transform="translate(0, 15)">
          <rect x="10" y="0" width="90" height="85" rx="4" fill="#6b7280" stroke="#22c55e" strokeWidth="2"/>
          {/* Bubble cover */}
          <path d="M 15 5 L 15 75 Q 15 80 20 80 L 90 80 Q 95 80 95 75 L 95 5 Q 95 0 55 0 Q 15 0 15 5" fill="#374151" stroke="#22c55e" strokeWidth="1.5"/>
          {/* Clear window */}
          <rect x="25" y="20" width="50" height="35" rx="2" fill="#374151" fillOpacity="0.3" stroke="#6b7280"/>
          {/* Receptacle visible */}
          <rect x="35" y="28" width="30" height="20" rx="2" fill="#f5f5f4" fillOpacity="0.4"/>
          {/* Cord exit */}
          <rect x="35" y="60" width="30" height="8" fill="#1f2937"/>
          <line x1="50" y1="68" x2="50" y2="90" stroke="#1f2937" strokeWidth="4"/>
          <line x1="50" y1="90" x2="70" y2="105" stroke="#1f2937" strokeWidth="4"/>
          <text x="55" y="115" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">Protected with cord!</text>
        </g>

        {/* Cord entry detail */}
        <g transform="translate(0, 130)">
          <rect x="20" y="0" width="70" height="30" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
          <text x="55" y="12" textAnchor="middle" fill="#86efac" fontSize="7">Gasket seals around</text>
          <text x="55" y="22" textAnchor="middle" fill="#86efac" fontSize="7">cord when inserted</text>
        </g>
      </g>

      {/* Summary box */}
      <g transform="translate(110, 175)">
        <text x="80" y="0" textAnchor="middle" fill="#9ca3af" fontSize="8">In-Use covers required in wet locations per NEC 406.9(B)(1)</text>
      </g>
    </svg>
  );
}

function PlacementDiagram() {
  return (
    <svg viewBox="0 0 380 180" className="w-full h-44" aria-label="Outdoor receptacle placement requirements">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Residential Outdoor Receptacle Placement</text>

      {/* House outline */}
      <g transform="translate(90, 35)">
        <rect x="0" y="40" width="200" height="100" fill="#374151" fillOpacity="0.3" stroke="#6b7280" strokeWidth="2"/>
        <polygon points="0,40 100,0 200,40" fill="#4b5563" fillOpacity="0.3" stroke="#6b7280" strokeWidth="2"/>
        {/* Door */}
        <rect x="80" y="90" width="40" height="50" fill="#1f2937" stroke="#6b7280" strokeWidth="1"/>
        {/* Windows */}
        <rect x="20" y="60" width="40" height="30" fill="#0ea5e9" fillOpacity="0.2" stroke="#6b7280" strokeWidth="1"/>
        <rect x="140" y="60" width="40" height="30" fill="#0ea5e9" fillOpacity="0.2" stroke="#6b7280" strokeWidth="1"/>
        <text x="100" y="80" textAnchor="middle" fill="#9ca3af" fontSize="8">House</text>
      </g>

      {/* Front receptacle - REQUIRED */}
      <g transform="translate(55, 90)">
        <circle cx="10" cy="10" r="8" fill="none" stroke="#22c55e" strokeWidth="2"/>
        <line x1="10" y1="10" x2="10" y2="0" stroke="#22c55e" strokeWidth="2"/>
        <text x="10" y="-5" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
        <line x1="18" y1="10" x2="30" y2="10" stroke="#22c55e" strokeWidth="1" strokeDasharray="2"/>
        <text x="10" y="30" textAnchor="middle" fill="#86efac" fontSize="6">Front</text>
        <text x="10" y="40" textAnchor="middle" fill="#86efac" fontSize="5">Required</text>
      </g>

      {/* Back receptacle - REQUIRED */}
      <g transform="translate(310, 90)">
        <circle cx="10" cy="10" r="8" fill="none" stroke="#22c55e" strokeWidth="2"/>
        <line x1="10" y1="10" x2="10" y2="0" stroke="#22c55e" strokeWidth="2"/>
        <text x="10" y="-5" textAnchor="middle" fill="#22c55e" fontSize="6">GFCI</text>
        <line x1="2" y1="10" x2="-10" y2="10" stroke="#22c55e" strokeWidth="1" strokeDasharray="2"/>
        <text x="10" y="30" textAnchor="middle" fill="#86efac" fontSize="6">Back</text>
        <text x="10" y="40" textAnchor="middle" fill="#86efac" fontSize="5">Required</text>
      </g>

      {/* Side receptacle - at grade level access */}
      <g transform="translate(55, 145)">
        <circle cx="10" cy="10" r="8" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="10" y1="10" x2="10" y2="0" stroke="#f59e0b" strokeWidth="2"/>
        <text x="30" y="15" fill="#fcd34d" fontSize="6">Additional outlets</text>
        <text x="30" y="24" fill="#fcd34d" fontSize="5">at grade-level access</text>
      </g>

      {/* NEC Reference */}
      <rect x="200" y="145" width="150" height="30" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="1"/>
      <text x="275" y="162" textAnchor="middle" fill="#c4b5fd" fontSize="8">NEC 210.52(E) - Required at</text>
      <text x="275" y="172" textAnchor="middle" fill="#c4b5fd" fontSize="8">front and back of dwelling</text>
    </svg>
  );
}

function WetDampLocationDiagram() {
  return (
    <svg viewBox="0 0 380 160" className="w-full h-40" aria-label="Wet vs damp location definitions">
      {/* Title */}
      <text x="190" y="18" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold">Wet vs Damp Locations</text>

      {/* Wet Location */}
      <g transform="translate(30, 40)">
        <rect x="0" y="0" width="150" height="100" rx="8" fill="#0ea5e9" fillOpacity="0.1" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="75" y="22" textAnchor="middle" fill="#0ea5e9" fontSize="12" fontWeight="bold">WET Location</text>

        {/* Rain drops */}
        <path d="M 30 40 Q 32 35 34 40 L 32 48 Q 30 52 32 48 Z" fill="#0ea5e9" fillOpacity="0.5"/>
        <path d="M 50 45 Q 52 40 54 45 L 52 53 Q 50 57 52 53 Z" fill="#0ea5e9" fillOpacity="0.5"/>
        <path d="M 70 38 Q 72 33 74 38 L 72 46 Q 70 50 72 46 Z" fill="#0ea5e9" fillOpacity="0.5"/>

        <text x="75" y="60" textAnchor="middle" fill="#7dd3fc" fontSize="8">Subject to saturation</text>
        <text x="75" y="72" textAnchor="middle" fill="#7dd3fc" fontSize="8">with water or liquid</text>

        <text x="75" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7">Examples:</text>
        <text x="75" y="100" textAnchor="middle" fill="#9ca3af" fontSize="6">Direct rain, sprinklers, hose areas</text>
      </g>

      {/* Damp Location */}
      <g transform="translate(200, 40)">
        <rect x="0" y="0" width="150" height="100" rx="8" fill="#f59e0b" fillOpacity="0.1" stroke="#f59e0b" strokeWidth="2"/>
        <text x="75" y="22" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">DAMP Location</text>

        {/* Moisture dots */}
        <circle cx="40" cy="40" r="2" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="55" cy="45" r="2" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="70" cy="42" r="2" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="85" cy="48" r="2" fill="#f59e0b" fillOpacity="0.4"/>
        <circle cx="100" cy="44" r="2" fill="#f59e0b" fillOpacity="0.4"/>

        <text x="75" y="60" textAnchor="middle" fill="#fcd34d" fontSize="8">Partially protected from</text>
        <text x="75" y="72" textAnchor="middle" fill="#fcd34d" fontSize="8">weather - may be moist</text>

        <text x="75" y="90" textAnchor="middle" fill="#9ca3af" fontSize="7">Examples:</text>
        <text x="75" y="100" textAnchor="middle" fill="#9ca3af" fontSize="6">Under eaves, covered porches</text>
      </g>

      {/* Cover requirements */}
      <g transform="translate(50, 145)">
        <rect x="0" y="0" width="120" height="12" rx="3" fill="#0ea5e9" fillOpacity="0.2"/>
        <text x="60" y="9" textAnchor="middle" fill="#7dd3fc" fontSize="7">In-Use Cover Required</text>
      </g>
      <g transform="translate(210, 145)">
        <rect x="0" y="0" width="120" height="12" rx="3" fill="#f59e0b" fillOpacity="0.2"/>
        <text x="60" y="9" textAnchor="middle" fill="#fcd34d" fontSize="7">Weatherproof Cover OK</text>
      </g>
    </svg>
  );
}

export default function OutdoorReceptacleRequirementsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Outdoor Receptacle Requirements", url: "https://amporalabs.com/blog/outdoor-receptacle-requirements-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Outdoor Receptacle Requirements NEC: GFCI, Covers & Placement Rules"
          description="Complete guide to NEC outdoor receptacle requirements including GFCI protection, weatherproof covers, and placement specifications."
          datePublished="2025-02-05"
          dateModified="2025-02-05"
          url="https://amporalabs.com/blog/outdoor-receptacle-requirements-nec"
          wordCount={2100}
          keywords={["outdoor receptacle requirements", "NEC outdoor outlets", "GFCI outdoor", "weatherproof cover"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Outdoor Receptacle Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">9 min read</span>
              <span className="text-white/40 text-sm">February 5, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Outdoor Receptacle Requirements NEC: Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything you need to know about outdoor receptacle installations. GFCI protection, weatherproof vs in-use covers, placement requirements, and height specifications.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-green-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEC Reference</h3>
                <p className="text-white/70 text-sm">Access outdoor electrical requirements instantly with Ampora's NEC lookup.</p>
              </div>
              <a
                href="https://apps.apple.com/us/app/ampora/id6753693522"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#gfci-requirements" className="hover:text-purple-400">→ GFCI Protection Requirements</a></li>
              <li><a href="#cover-requirements" className="hover:text-purple-400">→ Weatherproof & In-Use Covers</a></li>
              <li><a href="#placement" className="hover:text-purple-400">→ Placement Requirements</a></li>
              <li><a href="#wet-damp" className="hover:text-purple-400">→ Wet vs Damp Locations</a></li>
              <li><a href="#height" className="hover:text-purple-400">→ Height & Mounting</a></li>
              <li><a href="#commercial" className="hover:text-purple-400">→ Commercial Requirements</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">→ Common Mistakes to Avoid</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="gfci-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">GFCI Protection Requirements</h2>
              <p className="text-white/80 mb-4">
                Per <strong>NEC 210.8(A)(3)</strong>, GFCI protection is required for all 125-volt through 250-volt receptacles installed outdoors at dwelling units. This includes both 15-amp and 20-amp circuits, and applies regardless of the location or type of cover installed.
              </p>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 210.8(A)(3) - Dwelling Unit Outdoor GFCI</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>All outdoor receptacles</strong> at dwelling units require GFCI protection</li>
                  <li>Applies to <strong>125V-250V, 15A and 20A</strong> receptacles</li>
                  <li>Includes receptacles under eaves, on porches, in garages with outdoor access</li>
                  <li>No exceptions for height or location (all outdoor receptacles, period)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GFCI Protection Methods</h3>
              <p className="text-white/80 mb-4">
                GFCI protection can be provided by:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>GFCI receptacle:</strong> Most common for outdoor use - visible test/reset buttons</li>
                <li><strong>GFCI circuit breaker:</strong> Protects entire circuit from panel</li>
                <li><strong>GFCI dead-front:</strong> Where only GFCI protection needed, no outlet</li>
                <li><strong>Upstream GFCI:</strong> Inside outlet can protect outside outlet on load terminals</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">NEC 2020 Change: 250V Receptacles</h4>
                <p className="text-white/70">
                  The 2020 NEC expanded outdoor GFCI requirements to include 250V receptacles (previously only 125V). This means outdoor 240V receptacles now also require GFCI protection.
                </p>
              </div>
            </section>

            <section id="cover-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Weatherproof & In-Use Covers</h2>
              <p className="text-white/80 mb-4">
                NEC 406.9 specifies cover requirements for outdoor receptacles. The type of cover required depends on whether the receptacle is in a wet location or damp location.
              </p>

              <div className="my-8">
                <CoverTypesDiagram />
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cover Type Requirements</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Location Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Cover Required</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Wet Location</td>
                      <td className="py-3 px-4">In-Use (Extra Duty) Cover</td>
                      <td className="py-3 px-4">406.9(B)(1)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Damp Location</td>
                      <td className="py-3 px-4">Weatherproof Cover (when closed)</td>
                      <td className="py-3 px-4">406.9(A)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-green-400">All 15A/20A Outdoor</td>
                      <td className="py-3 px-4">Weather-resistant receptacle type</td>
                      <td className="py-3 px-4">406.9(A)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Understanding In-Use Covers</h3>
              <p className="text-white/80 mb-4">
                In-use covers (also called "bubble covers" or "extra duty covers") provide protection while a cord is plugged in. Key features:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Rated for "wet location while in use"</li>
                <li>Larger enclosure allows cord entry while maintaining seal</li>
                <li>Gasket or flap seals around cord</li>
                <li>Required in wet locations per NEC 406.9(B)(1)</li>
              </ul>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Pro Tip: When in Doubt, Use In-Use</h4>
                <p className="text-white/70">
                  Many inspectors prefer in-use covers for all outdoor receptacles, even in damp locations. The cost difference is minimal, and they provide better protection for homeowners who may leave items plugged in during rain.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Weather-Resistant Receptacles</h3>
              <p className="text-white/80 mb-4">
                Per NEC 406.9(A), all 15A and 20A, 125V and 250V outdoor receptacles must be listed as "weather-resistant" (marked "WR" on the receptacle). This applies in addition to cover requirements.
              </p>
            </section>

            <section id="placement" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Placement Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 210.52(E) specifies minimum outdoor receptacle requirements for dwelling units.
              </p>

              <div className="my-8">
                <PlacementDiagram />
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">NEC 210.52(E) - Outdoor Outlets Required</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Front:</strong> At least one receptacle at the front of the dwelling</li>
                  <li><strong>Back:</strong> At least one receptacle at the back of the dwelling</li>
                  <li><strong>Grade-level access:</strong> Each floor with direct grade-level access requires an outdoor receptacle</li>
                  <li><strong>Balconies:</strong> Balconies, decks, and porches accessible from inside need a receptacle if usable space &gt; 20 sq ft</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Balcony and Deck Requirements</h3>
              <p className="text-white/80 mb-4">
                Per NEC 210.52(E)(3), outdoor receptacles are required for:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Balconies, decks, and porches accessible from the dwelling interior</li>
                <li>Applies when usable area is 20 square feet or more</li>
                <li>Receptacle must be accessible from the balcony/deck/porch</li>
                <li>GFCI protection required per 210.8(A)(3)</li>
              </ul>
            </section>

            <section id="wet-damp" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wet vs Damp Locations</h2>
              <p className="text-white/80 mb-4">
                Understanding the difference between wet and damp locations is critical for proper cover selection.
              </p>

              <div className="my-8">
                <WetDampLocationDiagram />
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Wet Locations</h4>
                  <p className="text-white/70 text-sm mb-3">Subject to saturation with water:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Directly exposed to weather (no overhead protection)</li>
                    <li>• In direct path of sprinklers</li>
                    <li>• Areas routinely washed down</li>
                    <li>• Underground or in contact with earth</li>
                  </ul>
                  <div className="mt-3 p-2 bg-cyan-900/50 rounded">
                    <p className="text-cyan-400 text-sm font-semibold">Requires In-Use Cover</p>
                  </div>
                </div>
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-amber-400 mb-3">Damp Locations</h4>
                  <p className="text-white/70 text-sm mb-3">Partially protected from weather:</p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>• Under eaves or overhangs</li>
                    <li>• Covered porches</li>
                    <li>• Roofed patios</li>
                    <li>• Areas protected from direct rain</li>
                  </ul>
                  <div className="mt-3 p-2 bg-amber-900/50 rounded">
                    <p className="text-amber-400 text-sm font-semibold">Weatherproof Cover OK</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Practical Tip: The Rain Test</h4>
                <p className="text-white/70">
                  Ask yourself: "Will this receptacle get wet during a rain storm?" If the answer is yes (even occasionally), treat it as a wet location and install an in-use cover. Covers under roof overhangs may still be wet locations if wind-driven rain can reach them.
                </p>
              </div>
            </section>

            <section id="height" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Height & Mounting Requirements</h2>
              <p className="text-white/80 mb-4">
                While the NEC doesn't specify a required height for outdoor receptacles, practical considerations and local codes often dictate mounting heights.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Recommended Heights</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>Standard exterior wall:</strong> 18-24 inches above finished grade</li>
                  <li><strong>Under eaves/protected:</strong> 12-18 inches may be acceptable</li>
                  <li><strong>Flood-prone areas:</strong> Higher mounting recommended (check local codes)</li>
                  <li><strong>ADA accessible:</strong> 15-48 inches above floor/grade</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Mounting Considerations</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Mount boxes level with face perpendicular to grade</li>
                <li>Use weatherproof boxes rated for the location</li>
                <li>Ensure proper drainage - boxes shouldn't collect water</li>
                <li>Consider accessibility for lawn equipment, holiday lights, etc.</li>
              </ul>
            </section>

            <section id="commercial" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Commercial Requirements</h2>
              <p className="text-white/80 mb-4">
                Commercial outdoor receptacle requirements differ slightly from residential per NEC 210.63 and 210.8(B).
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Commercial GFCI Requirements - NEC 210.8(B)</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Outdoors:</strong> All outdoor receptacles (public space)</li>
                  <li><strong>Sinks:</strong> Within 6 feet of any sink</li>
                  <li><strong>Kitchens:</strong> Commercial kitchen receptacles</li>
                  <li><strong>Rooftops:</strong> Receptacles on rooftops</li>
                  <li><strong>Garages:</strong> Service bays and similar areas</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">HVAC Equipment Receptacles</h3>
              <p className="text-white/80 mb-4">
                Per NEC 210.63, a 125V, 15A or 20A receptacle is required at HVAC equipment on rooftops and in attics for servicing. These receptacles must be:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Within 25 feet of the HVAC equipment</li>
                <li>On the same level as the equipment</li>
                <li>GFCI protected (when outdoors or on rooftop)</li>
              </ul>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes to Avoid</h2>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Frequently Cited Violations</h4>
                <ul className="text-white/70 space-y-3">
                  <li>
                    <strong>Wrong cover type:</strong> Using standard weatherproof cover in wet location. In-use covers required in wet locations.
                  </li>
                  <li>
                    <strong>Missing GFCI:</strong> All outdoor receptacles at dwellings require GFCI - no exceptions for height or location.
                  </li>
                  <li>
                    <strong>Non-WR receptacle:</strong> Outdoor receptacles must be weather-resistant type (marked "WR").
                  </li>
                  <li>
                    <strong>Cover not rated:</strong> Cover must be listed for the environment (wet location, in-use rated).
                  </li>
                  <li>
                    <strong>Missing front/back outlet:</strong> Dwellings require at least one outdoor receptacle at front AND back.
                  </li>
                  <li>
                    <strong>Deck/balcony missing outlet:</strong> Usable outdoor spaces over 20 sq ft need a receptacle.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Pre-Inspection Checklist</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    GFCI protection for all outdoor receptacles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Weather-resistant (WR) receptacles used
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    In-use covers in wet locations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Weatherproof covers in damp locations (minimum)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    One receptacle at front of dwelling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    One receptacle at back of dwelling
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Receptacle for decks/balconies over 20 sq ft
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">✓</span>
                    Weatherproof boxes properly sealed
                  </li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-green-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                NEC Code Reference On the Go
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access outdoor electrical requirements and NEC code instantly with Ampora. Search articles, get AI-powered answers, and use professional calculators.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download Free on App Store
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements & Differences</h3>
                </Link>
                <Link href="/blog/bathroom-electrical-code-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Bathroom Electrical Code Requirements</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-xl font-display font-bold">Ampora</Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/calculators" className="hover:text-white transition-colors">Calculators</Link>
            <Link href="/features/nec-code-reference" className="hover:text-white transition-colors">NEC Code</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </nav>
          <p className="text-sm text-white/40">© 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
