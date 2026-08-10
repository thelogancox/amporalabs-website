import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Blueprint Takeoff Guide: Reading Plans & Estimating Materials",
  description: "Complete guide to electrical blueprint takeoffs. Learn to read construction plans, identify electrical symbols, measure wire and conduit runs, count devices, use digital takeoff tools, and create accurate material lists for residential and commercial projects.",
  keywords: [
    "electrical blueprint takeoff",
    "electrical material takeoff",
    "reading electrical blueprints",
    "electrical plan reading",
    "electrical estimating takeoff",
    "blueprint takeoff process",
    "counting electrical devices",
    "wire measurement blueprints",
    "conduit takeoff",
    "electrical symbol legend",
    "panel schedule reading",
    "digital takeoff tools",
    "electrical material list",
    "construction plan reading",
    "electrical scale drawing",
    "takeoff waste factors"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-blueprint-takeoff-guide",
  },
  openGraph: {
    title: "Electrical Blueprint Takeoff Guide: Reading Plans & Estimating Materials - Ampora",
    description: "How to perform electrical blueprint takeoffs, read construction plans, and create accurate material lists.",
    url: "https://amporalabs.com/blog/electrical-blueprint-takeoff-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical blueprint takeoff illustration">
      {/* Blueprint paper background */}
      <rect x="10" y="5" width="230" height="170" rx="3" fill="#0c2d4a" stroke="#2563eb" strokeWidth="1.2"/>

      {/* Grid lines */}
      <g stroke="#1e40af" strokeWidth="0.4" opacity="0.35">
        <line x1="10" y1="35" x2="240" y2="35"/>
        <line x1="10" y1="65" x2="240" y2="65"/>
        <line x1="10" y1="95" x2="240" y2="95"/>
        <line x1="10" y1="125" x2="240" y2="125"/>
        <line x1="10" y1="155" x2="240" y2="155"/>
        <line x1="55" y1="5" x2="55" y2="175"/>
        <line x1="100" y1="5" x2="100" y2="175"/>
        <line x1="145" y1="5" x2="145" y2="175"/>
        <line x1="190" y1="5" x2="190" y2="175"/>
      </g>

      {/* Room outlines */}
      <rect x="25" y="15" width="90" height="70" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="125" y="15" width="100" height="70" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="25" y="95" width="70" height="65" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="105" y="95" width="120" height="65" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>

      {/* Door arcs */}
      <path d="M 95 85 L 95 70 A 15 15 0 0 1 110 85" fill="none" stroke="#60a5fa" strokeWidth="1"/>
      <path d="M 80 95 L 80 110 A 15 15 0 0 0 65 95" fill="none" stroke="#60a5fa" strokeWidth="1"/>

      {/* Highlighted/counted receptacle symbols (with color-coded markers) */}
      <g>
        {/* Receptacle 1 - highlighted */}
        <circle cx="40" cy="80" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="40" y1="80" x2="40" y2="68" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="40" cy="80" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.8"/>

        {/* Receptacle 2 - highlighted */}
        <circle cx="85" cy="80" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="85" y1="80" x2="85" y2="68" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="85" cy="80" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.8"/>

        {/* Receptacle 3 */}
        <circle cx="140" cy="80" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="140" y1="80" x2="140" y2="68" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="140" cy="80" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.8"/>

        {/* Receptacle 4 */}
        <circle cx="210" cy="80" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="210" y1="80" x2="210" y2="68" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="210" cy="80" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.8"/>

        {/* Receptacle 5 */}
        <circle cx="40" cy="150" r="5" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <line x1="40" y1="150" x2="40" y2="138" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="40" cy="150" r="9" fill="none" stroke="#f59e0b" strokeWidth="1" strokeDasharray="2" opacity="0.8"/>
      </g>

      {/* Light fixture symbols */}
      <g>
        <circle cx="65" cy="45" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="60" y1="40" x2="70" y2="50" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="60" y1="50" x2="70" y2="40" stroke="#fbbf24" strokeWidth="1.2"/>

        <circle cx="175" cy="45" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="170" y1="40" x2="180" y2="50" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="170" y1="50" x2="180" y2="40" stroke="#fbbf24" strokeWidth="1.2"/>

        <circle cx="60" cy="125" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="55" y1="120" x2="65" y2="130" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="55" y1="130" x2="65" y2="120" stroke="#fbbf24" strokeWidth="1.2"/>

        <circle cx="165" cy="125" r="7" fill="none" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="160" y1="120" x2="170" y2="130" stroke="#fbbf24" strokeWidth="1.2"/>
        <line x1="160" y1="130" x2="170" y2="120" stroke="#fbbf24" strokeWidth="1.2"/>
      </g>

      {/* Switch symbol */}
      <text x="108" y="88" fill="#f59e0b" fontSize="7">S</text>
      <text x="133" y="108" fill="#f59e0b" fontSize="7">S3</text>

      {/* Dashed wiring lines */}
      <line x1="108" y1="82" x2="65" y2="52" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="3"/>
      <line x1="140" y1="105" x2="165" y2="118" stroke="#9ca3af" strokeWidth="0.8" strokeDasharray="3"/>

      {/* Home run arrow */}
      <line x1="40" y1="80" x2="25" y2="140" stroke="#a855f7" strokeWidth="1.2"/>
      <polygon points="23,137 27,137 25,143" fill="#a855f7"/>
      <text x="16" y="152" fill="#c4b5fd" fontSize="5">1,3</text>

      {/* Scale bar */}
      <g transform="translate(25, 168)">
        <line x1="0" y1="0" x2="60" y2="0" stroke="#60a5fa" strokeWidth="1"/>
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#60a5fa" strokeWidth="1"/>
        <line x1="30" y1="-2" x2="30" y2="2" stroke="#60a5fa" strokeWidth="0.7"/>
        <line x1="60" y1="-3" x2="60" y2="3" stroke="#60a5fa" strokeWidth="1"/>
        <text x="30" y="9" textAnchor="middle" fill="#93c5fd" fontSize="5">1/4&quot; = 1&apos;-0&quot;</text>
      </g>

      {/* Material list / Takeoff sheet */}
      <g transform="translate(255, 8)">
        <rect x="0" y="0" width="135" height="164" rx="5" fill="#1f2937" fillOpacity="0.5" stroke="#6b7280" strokeWidth="1.2"/>
        <text x="67" y="17" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">MATERIAL TAKEOFF</text>
        <line x1="8" y1="22" x2="127" y2="22" stroke="#6b7280" strokeWidth="0.8"/>

        {/* Column headers */}
        <text x="12" y="33" fill="#9ca3af" fontSize="6" fontWeight="bold">Item</text>
        <text x="80" y="33" fill="#9ca3af" fontSize="6" fontWeight="bold">Qty</text>
        <text x="102" y="33" fill="#9ca3af" fontSize="6" fontWeight="bold">Unit</text>
        <line x1="8" y1="36" x2="127" y2="36" stroke="#4b5563" strokeWidth="0.5"/>

        {/* Line items */}
        <text x="12" y="47" fill="#d1d5db" fontSize="6">Duplex Receptacles</text>
        <text x="85" y="47" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">24</text>
        <text x="102" y="47" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="58" fill="#d1d5db" fontSize="6">GFCI Receptacles</text>
        <text x="85" y="58" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">8</text>
        <text x="102" y="58" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="69" fill="#d1d5db" fontSize="6">Single-pole Switches</text>
        <text x="85" y="69" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">14</text>
        <text x="102" y="69" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="80" fill="#d1d5db" fontSize="6">3-Way Switches</text>
        <text x="85" y="80" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">6</text>
        <text x="102" y="80" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="91" fill="#d1d5db" fontSize="6">Recessed LED 6&quot;</text>
        <text x="85" y="91" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">18</text>
        <text x="102" y="91" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="102" fill="#d1d5db" fontSize="6">2x4 LED Troffer</text>
        <text x="85" y="102" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">12</text>
        <text x="102" y="102" fill="#9ca3af" fontSize="6">EA</text>

        <text x="12" y="113" fill="#d1d5db" fontSize="6">12/2 NM Cable</text>
        <text x="85" y="113" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">1,250</text>
        <text x="102" y="113" fill="#9ca3af" fontSize="6">FT</text>

        <text x="12" y="124" fill="#d1d5db" fontSize="6">14/2 NM Cable</text>
        <text x="85" y="124" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">850</text>
        <text x="102" y="124" fill="#9ca3af" fontSize="6">FT</text>

        <text x="12" y="135" fill="#d1d5db" fontSize="6">3/4&quot; EMT</text>
        <text x="85" y="135" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">320</text>
        <text x="102" y="135" fill="#9ca3af" fontSize="6">FT</text>

        <text x="12" y="146" fill="#d1d5db" fontSize="6">4&quot; Square Boxes</text>
        <text x="85" y="146" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">32</text>
        <text x="102" y="146" fill="#9ca3af" fontSize="6">EA</text>

        <line x1="8" y1="150" x2="127" y2="150" stroke="#4b5563" strokeWidth="0.5"/>
        <text x="12" y="161" fill="#f59e0b" fontSize="6" fontWeight="bold">+ 10% waste factor</text>
      </g>

      {/* Colored pencil/highlighter marks connecting blueprint to list */}
      <line x1="240" y1="80" x2="255" y2="47" stroke="#f59e0b" strokeWidth="0.8" strokeDasharray="3" opacity="0.5"/>
      <line x1="240" y1="45" x2="255" y2="91" stroke="#fbbf24" strokeWidth="0.8" strokeDasharray="3" opacity="0.5"/>
    </svg>
  );
}

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Blueprint Takeoff Guide", url: "https://amporalabs.com/blog/electrical-blueprint-takeoff-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Blueprint Takeoff Guide: Reading Plans & Estimating Materials"
          description="Complete guide to electrical blueprint takeoffs. Learn to read construction plans, identify symbols, measure runs, and create accurate material lists."
          datePublished="2026-03-02"
          dateModified="2026-03-02"
          url="https://amporalabs.com/blog/electrical-blueprint-takeoff-guide"
          wordCount={4500}
          keywords={["electrical blueprint takeoff", "material takeoff", "reading electrical plans", "electrical estimating", "blueprint reading"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Blueprint Takeoff Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 2, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Blueprint Takeoff Guide: Reading Plans &amp; Estimating Materials
            </h1>
            <p className="text-xl text-white/70">
              Master the art of the electrical takeoff. Learn how to systematically read construction plans, decode electrical symbols, measure wire and conduit runs, count every device, and build accurate material lists that keep your projects profitable.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Blueprint Reading on the Go</h3>
                <p className="text-white/70 text-sm">Access NEC code references, electrical calculators, and symbol guides with Ampora.</p>
              </div>
              <a
                href="/get"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-cyan-600 text-white font-semibold rounded-full hover:bg-cyan-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#understanding-blueprints" className="hover:text-cyan-400">&#8594; Understanding Electrical Blueprints &amp; Plan Sets</a></li>
              <li><a href="#symbol-legend" className="hover:text-cyan-400">&#8594; Electrical Symbol Legend Reference</a></li>
              <li><a href="#scale-reading" className="hover:text-cyan-400">&#8594; Scale Reading &amp; Measurements</a></li>
              <li><a href="#takeoff-process" className="hover:text-cyan-400">&#8594; Material Takeoff Process Step by Step</a></li>
              <li><a href="#counting-devices" className="hover:text-cyan-400">&#8594; Counting Devices: Receptacles, Switches, Fixtures</a></li>
              <li><a href="#wire-conduit" className="hover:text-cyan-400">&#8594; Wire &amp; Conduit Measurement Techniques</a></li>
              <li><a href="#panel-schedules" className="hover:text-cyan-400">&#8594; Panel Schedules &amp; Circuit Directories</a></li>
              <li><a href="#digital-tools" className="hover:text-cyan-400">&#8594; Digital Takeoff Tools &amp; Software</a></li>
              <li><a href="#common-mistakes" className="hover:text-cyan-400">&#8594; Common Takeoff Mistakes to Avoid</a></li>
              <li><a href="#material-lists" className="hover:text-cyan-400">&#8594; Creating Accurate Material Lists</a></li>
              <li><a href="#waste-factors" className="hover:text-cyan-400">&#8594; Waste Factors &amp; Ordering Considerations</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="understanding-blueprints" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding Electrical Blueprints &amp; Plan Sets</h2>
              <p className="text-white/80 mb-4">
                An electrical blueprint takeoff is the systematic process of reviewing construction drawings to identify, count, and measure every electrical component needed for a project. The takeoff is the foundation of every electrical estimate, and its accuracy directly determines whether a job is profitable or a financial loss.
              </p>
              <p className="text-white/80 mb-4">
                Before you start counting devices and measuring runs, you need to understand how a complete set of electrical plans is organized. A typical plan set for a commercial project includes multiple sheet types, each serving a specific purpose.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Electrical Drawing Sheet Types</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Sheet Prefix</th>
                      <th className="text-left py-3 px-4 text-white/60">Drawing Type</th>
                      <th className="text-left py-3 px-4 text-white/60">What It Shows</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-001</td>
                      <td className="py-3 px-4">Legend &amp; General Notes</td>
                      <td className="py-3 px-4 text-white/60">Symbol key, abbreviations, specifications</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-1xx</td>
                      <td className="py-3 px-4">Lighting Plans</td>
                      <td className="py-3 px-4 text-white/60">Fixture locations, switching, circuiting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-2xx</td>
                      <td className="py-3 px-4">Power Plans</td>
                      <td className="py-3 px-4 text-white/60">Receptacles, equipment connections, circuiting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-3xx</td>
                      <td className="py-3 px-4">Special Systems</td>
                      <td className="py-3 px-4 text-white/60">Fire alarm, data, security, low voltage</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-4xx</td>
                      <td className="py-3 px-4">Single-Line Diagrams</td>
                      <td className="py-3 px-4 text-white/60">Power distribution, risers, one-line</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">E-5xx</td>
                      <td className="py-3 px-4">Panel Schedules</td>
                      <td className="py-3 px-4 text-white/60">Circuit directories, load calculations</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-cyan-400">E-6xx</td>
                      <td className="py-3 px-4">Details &amp; Sections</td>
                      <td className="py-3 px-4 text-white/60">Mounting details, wiring diagrams, sections</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Always Start with the Legend</h4>
                <p className="text-white/70">
                  The symbol legend sheet (typically E-001) is your Rosetta Stone for the entire plan set. Symbols vary between engineering firms, so never assume a symbol means the same thing from one project to the next. Read the legend first, and keep it open alongside every other sheet during your takeoff.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Key Documents Beyond the Drawings</h3>
              <p className="text-white/80 mb-4">
                The drawings alone do not tell the complete story. You also need to review these supporting documents during every takeoff:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Division 26 Specifications:</strong> Material requirements, acceptable manufacturers, quality standards, testing requirements, and installation methods</li>
                <li><strong>Division 27 (Communications):</strong> Low-voltage cabling, data, and telecom requirements if in your scope</li>
                <li><strong>Division 28 (Electronic Safety):</strong> Fire alarm, security, and access control specifications</li>
                <li><strong>Addenda:</strong> Changes issued during the bidding period that modify the original plans or specs</li>
                <li><strong>General Conditions:</strong> Project requirements for insurance, scheduling, permits, and coordination</li>
              </ul>
            </section>

            <section id="symbol-legend" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Symbol Legend Reference</h2>
              <p className="text-white/80 mb-4">
                Electrical symbols are the language of construction plans. While ANSI and IEEE have established standard symbols, individual engineering firms often use variations. Below is a comprehensive reference of the most common symbols you will encounter during takeoffs.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Power Device Symbols</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Symbol</th>
                      <th className="text-left py-3 px-4 text-white/60">Device</th>
                      <th className="text-left py-3 px-4 text-white/60">Takeoff Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O</td>
                      <td className="py-3 px-4">Duplex Receptacle (120V)</td>
                      <td className="py-3 px-4 text-white/60">Count box, device, plate, wire</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (G)</td>
                      <td className="py-3 px-4">GFCI Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Higher device cost than standard duplex</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (WP)</td>
                      <td className="py-3 px-4">Weatherproof Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Include in-use cover in takeoff</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">-O (IG)</td>
                      <td className="py-3 px-4">Isolated Ground Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Requires separate IG conductor</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">=O (240)</td>
                      <td className="py-3 px-4">240V Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Verify NEMA configuration in specs</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-green-400">-O (DED)</td>
                      <td className="py-3 px-4">Dedicated Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Individual home run to panel</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Switching &amp; Lighting Symbols</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-400 mb-3">Switch Types</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><span className="text-amber-400 font-mono">S</span> - Single-pole switch</li>
                    <li><span className="text-amber-400 font-mono">S3</span> - Three-way switch</li>
                    <li><span className="text-amber-400 font-mono">S4</span> - Four-way switch</li>
                    <li><span className="text-amber-400 font-mono">SD</span> - Dimmer switch</li>
                    <li><span className="text-amber-400 font-mono">SK</span> - Key-operated switch</li>
                    <li><span className="text-amber-400 font-mono">SWP</span> - Weatherproof switch</li>
                    <li><span className="text-amber-400 font-mono">OS</span> - Occupancy sensor switch</li>
                    <li><span className="text-amber-400 font-mono">SP</span> - Switch with pilot light</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-400 mb-3">Lighting Fixtures</h4>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><span className="text-yellow-400 font-mono">(X)</span> - Surface ceiling light</li>
                    <li><span className="text-yellow-400 font-mono">(R)</span> - Recessed downlight</li>
                    <li><span className="text-yellow-400 font-mono">[====]</span> - 2x4 troffer / strip</li>
                    <li><span className="text-yellow-400 font-mono">-O-</span> - Wall sconce</li>
                    <li><span className="text-yellow-400 font-mono">(E)</span> - Emergency light</li>
                    <li><span className="text-yellow-400 font-mono">(EXIT)</span> - Exit sign</li>
                    <li><span className="text-yellow-400 font-mono">(X)+blade</span> - Ceiling fan w/ light</li>
                    <li><span className="text-yellow-400 font-mono">(R) w/ EM</span> - Recessed with EM battery</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Wiring &amp; Raceway Symbols</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-3">
                  <li><strong>Solid line:</strong> Branch circuit wiring exposed or in conduit (number of tick marks indicates conductor count)</li>
                  <li><strong>Dashed line:</strong> Wiring concealed in wall or above ceiling</li>
                  <li><strong>Arrow with circuit number:</strong> Home run to panel (e.g., arrow with &quot;1,3&quot; means circuits 1 and 3)</li>
                  <li><strong>Curved dashed line:</strong> Switch leg connecting switch to controlled fixture</li>
                  <li><strong>Tick marks on wire:</strong> Each tick represents one conductor (2 ticks = 2 hots, typically 240V circuit)</li>
                  <li><strong>Wire size callout:</strong> Numbers near wiring runs indicate conductor size (e.g., &quot;3#10, 1#10G, 3/4&quot;C&quot; means 3 #10 conductors, 1 #10 ground, in 3/4&quot; conduit)</li>
                </ul>
              </div>
            </section>

            <section id="scale-reading" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Scale Reading &amp; Measurements</h2>
              <p className="text-white/80 mb-4">
                Accurate measurement is the backbone of a reliable takeoff. Every construction drawing is created at a specific scale, and understanding how to read and measure at that scale is essential for calculating wire lengths, conduit runs, and raceway quantities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Architectural Scales</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Scale</th>
                      <th className="text-left py-3 px-4 text-white/60">1 Inch on Drawing =</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">1/8&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">8 feet</td>
                      <td className="py-3 px-4 text-white/60">Large commercial floor plans</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">3/16&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">5.33 feet</td>
                      <td className="py-3 px-4 text-white/60">Medium commercial buildings</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">1/4&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">4 feet</td>
                      <td className="py-3 px-4 text-white/60">Residential, small commercial</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">3/8&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">2.67 feet</td>
                      <td className="py-3 px-4 text-white/60">Enlarged plans, detail areas</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">1/2&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">2 feet</td>
                      <td className="py-3 px-4 text-white/60">Room details, equipment layouts</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-cyan-400">1&quot; = 1&apos;-0&quot;</td>
                      <td className="py-3 px-4">1 foot</td>
                      <td className="py-3 px-4 text-white/60">Detail drawings, mounting details</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Measuring Tips for Accuracy</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Always verify the scale:</strong> Check the scale noted in the title block of each sheet. Different sheets within the same set may use different scales.</li>
                  <li><strong>Use an architect&apos;s scale ruler:</strong> Triangular scale rulers have six different scales. Line up the zero mark and read directly in feet and inches.</li>
                  <li><strong>Measure centerline to centerline:</strong> When measuring conduit runs, measure from the center of one device to the center of the next.</li>
                  <li><strong>Account for vertical runs:</strong> Floor plans show horizontal distances only. Add height for drops from ceiling, risers between floors, and connections to equipment.</li>
                  <li><strong>Check for &quot;NTS&quot; notes:</strong> &quot;Not To Scale&quot; means the drawing is diagrammatic. Use dimensions shown, not scaled measurements.</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Measuring Printed Plans vs. Digital</h3>
              <p className="text-white/80 mb-4">
                If working with printed plans, always verify the print scale by measuring a known dimension or the scale bar printed on the sheet. Prints are often reduced from their original size, which throws off all your measurements. A common check is to measure the graphic scale bar at the bottom of the drawing. If the bar marked as 10 feet measures something other than the correct length at the stated scale, your print has been reduced, and you need to calculate a correction factor.
              </p>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Print Reduction Correction Formula</h4>
                <p className="text-white/80 mb-2 font-mono text-sm">
                  Correction Factor = Stated Scale Bar Length / Measured Scale Bar Length
                </p>
                <p className="text-white/60 text-sm">
                  Example: If the 10&apos; scale bar measures only 7.5&apos; on your ruler, the correction factor is 10/7.5 = 1.333. Multiply all your measurements by 1.333 to get actual dimensions.
                </p>
              </div>
            </section>

            <section id="takeoff-process" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Material Takeoff Process Step by Step</h2>
              <p className="text-white/80 mb-4">
                A systematic approach to the takeoff prevents missed items and double-counting. Whether you are working on a small residential remodel or a large commercial project, follow this structured process.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">1.</span>
                  <div>
                    <h4 className="font-semibold">Review the Entire Plan Set</h4>
                    <p className="text-white/60 text-sm mt-1">Read the general notes, legend, specifications (Division 26), and all addenda before counting a single device. Understand the scope of work, acceptable manufacturers, and special requirements. Note any items marked &quot;NIC&quot; (Not In Contract) or &quot;By Others.&quot;</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">2.</span>
                  <div>
                    <h4 className="font-semibold">Set Up Your Takeoff Sheet or Software</h4>
                    <p className="text-white/60 text-sm mt-1">Organize your takeoff by system: lighting, power, fire alarm, low voltage. Create columns for item description, quantity, unit, and notes. If using digital takeoff software, create layers for each system and assign colors to each device type.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">3.</span>
                  <div>
                    <h4 className="font-semibold">Take Off the Lighting System</h4>
                    <p className="text-white/60 text-sm mt-1">Count every light fixture by type using the fixture schedule. Count switches, dimmers, and occupancy sensors. Trace switch legs and circuiting. Count emergency lights and exit signs separately since they are a different system. Note any special requirements like 0-10V dimming wire or low-voltage control wiring.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">4.</span>
                  <div>
                    <h4 className="font-semibold">Take Off the Power System</h4>
                    <p className="text-white/60 text-sm mt-1">Count all receptacles by type (standard, GFCI, WP, dedicated, 240V). Count equipment connections. Count junction boxes. Trace home runs and identify circuit routing. Count panels, disconnects, and distribution equipment.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">5.</span>
                  <div>
                    <h4 className="font-semibold">Measure Wire and Conduit Runs</h4>
                    <p className="text-white/60 text-sm mt-1">Measure branch circuit runs, feeder runs, and home runs using the drawing scale. Add height for vertical drops and risers. Add length for connections and terminations. Apply the project&apos;s wiring method (NM cable, MC cable, EMT, rigid) based on the specs.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">6.</span>
                  <div>
                    <h4 className="font-semibold">Take Off Special Systems</h4>
                    <p className="text-white/60 text-sm mt-1">Count fire alarm devices (smoke detectors, pull stations, strobes, horns). Count data drops and outlets. Count security devices if in scope. Each special system typically has its own sheet and specification section.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">7.</span>
                  <div>
                    <h4 className="font-semibold">Add Supporting Materials</h4>
                    <p className="text-white/60 text-sm mt-1">Count boxes, covers, connectors, couplings, straps, hangers, rod, and support hardware. Add wire nuts, tape, labels, and consumables. These small items are easy to overlook but add up to 5-10% of material cost.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="text-cyan-400 font-bold text-lg">8.</span>
                  <div>
                    <h4 className="font-semibold">Cross-Check and Verify</h4>
                    <p className="text-white/60 text-sm mt-1">Compare your device counts to the panel schedule totals. Verify fixture quantities against the fixture schedule. Check that every circuit shown on the panel schedule has corresponding devices on the floor plans. Resolve discrepancies before pricing.</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="counting-devices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Counting Devices: Receptacles, Switches, Fixtures</h2>
              <p className="text-white/80 mb-4">
                Device counting is the most fundamental part of any electrical takeoff. Every device represents not only the device itself but also a box, a faceplate, wire, connectors, and labor. A systematic approach prevents both missed items and double-counting.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Color-Coding Method</h3>
              <p className="text-white/80 mb-4">
                The most reliable manual takeoff method uses colored pencils or highlighters to mark each device as it is counted. Assign a different color to each device type:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Green</p>
                  <p className="text-white/60 text-xs">Standard Receptacles</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-red-500 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Red</p>
                  <p className="text-white/60 text-xs">GFCI / Special Receptacles</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-orange-500 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Orange</p>
                  <p className="text-white/60 text-xs">Switches &amp; Dimmers</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-400 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Yellow</p>
                  <p className="text-white/60 text-xs">Light Fixtures</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Blue</p>
                  <p className="text-white/60 text-xs">Panels &amp; Equipment</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 text-center">
                  <div className="w-8 h-8 rounded-full bg-purple-500 mx-auto mb-2"></div>
                  <p className="text-white/80 text-sm font-semibold">Purple</p>
                  <p className="text-white/60 text-xs">Fire Alarm &amp; Low Voltage</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">What to Count for Each Device</h3>
              <p className="text-white/80 mb-4">
                Each symbol on the plan represents more than just the device itself. Here is the complete list of materials associated with each common device:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Device</th>
                      <th className="text-left py-3 px-4 text-white/60">Associated Materials</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Duplex Receptacle</td>
                      <td className="py-3 px-4 text-white/60">Device, 1-gang box, mud ring (commercial), cover plate, wire connectors, ground pigtail, device screws</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">GFCI Receptacle</td>
                      <td className="py-3 px-4 text-white/60">GFCI device, 1-gang box (deeper box may be needed), mud ring, cover plate, wire connectors</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">Single-pole Switch</td>
                      <td className="py-3 px-4 text-white/60">Switch, 1-gang box, mud ring, cover plate, wire connectors, pigtails</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-amber-400">3-Way Switch (pair)</td>
                      <td className="py-3 px-4 text-white/60">2 three-way switches, 2 boxes, 2 mud rings, 2 cover plates, 14/3 or 12/3 traveler wire</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Recessed Downlight</td>
                      <td className="py-3 px-4 text-white/60">Fixture (housing + trim), junction box (if not integral), MC whip or flex connector, support wire/clips</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-yellow-400">2x4 LED Troffer</td>
                      <td className="py-3 px-4 text-white/60">Fixture, MC whip or flex, safety chain/cable, seismic bracing (if required by jurisdiction)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Pro Tip: Use the Fixture Schedule</h4>
                <p className="text-white/70">
                  Most commercial plans include a fixture schedule that lists every fixture type, manufacturer, catalog number, lamp type, voltage, and quantity. Compare your counted quantities from the floor plans against the schedule totals. If the numbers do not match, investigate. The floor plan governs locations, but the fixture schedule often has the correct total. When in doubt, submit an RFI.
                </p>
              </div>
            </section>

            <section id="wire-conduit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire &amp; Conduit Measurement Techniques</h2>
              <p className="text-white/80 mb-4">
                Wire and conduit are among the most expensive line items on any electrical takeoff, and they are also the most commonly underestimated. Accurate measurement requires understanding how to translate two-dimensional plan views into three-dimensional reality.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Branch Circuit Measurement Method</h3>
              <p className="text-white/80 mb-4">
                For branch circuit wiring (the wire from the panel to each device on a circuit), follow this systematic approach:
              </p>
              <ol className="list-decimal list-inside text-white/70 space-y-3 mb-6">
                <li><strong>Trace the circuit:</strong> Starting at the panel, follow the home run arrow to the first device on the circuit. Then trace from device to device until you reach the last one.</li>
                <li><strong>Measure the horizontal run:</strong> Use the scale ruler to measure each segment of the circuit path on the plan. Write down each segment length.</li>
                <li><strong>Add the vertical component:</strong> For each device, add the vertical distance from the ceiling (where wire typically runs) to the device height. Standard receptacles are 12-18 inches AFF, switches are 48 inches AFF.</li>
                <li><strong>Add stub-up and connection length:</strong> Add 12-18 inches at each device for making connections inside the box.</li>
                <li><strong>Add the home run vertical:</strong> Include the vertical run from the ceiling space down to the panel. Panels are typically 5-6 feet tall with circuits connecting at various heights.</li>
                <li><strong>Sum all segments:</strong> Add the horizontal run, all vertical drops, and all connection allowances to get the total wire length for that circuit.</li>
              </ol>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold mb-3">Wire Length Calculation Example</h4>
                <p className="text-white/80 mb-2 text-sm">Circuit: 3 receptacles on a 20A branch circuit, wired in conduit</p>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>Home run: panel to first receptacle = 45 ft horizontal + 8 ft vertical = <span className="text-cyan-400">53 ft</span></li>
                  <li>First to second receptacle = 12 ft horizontal = <span className="text-cyan-400">12 ft</span></li>
                  <li>Second to third receptacle = 15 ft horizontal = <span className="text-cyan-400">15 ft</span></li>
                  <li>Vertical drops (3 devices x 4 ft each) = <span className="text-cyan-400">12 ft</span></li>
                  <li>Connection allowance (4 points x 1.5 ft) = <span className="text-cyan-400">6 ft</span></li>
                  <li className="font-semibold text-green-400 pt-2 border-t border-white/10">Total wire per conductor: 98 ft (need 3 conductors: hot, neutral, ground)</li>
                  <li className="text-green-400">Total conductor feet: 294 ft (or 98 ft of 12/2 w/ground NM cable)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conduit Measurement</h3>
              <p className="text-white/80 mb-4">
                Conduit is measured in linear feet, but you must also count every fitting along the way:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Component</th>
                      <th className="text-left py-3 px-4 text-white/60">Count Per</th>
                      <th className="text-left py-3 px-4 text-white/60">Sizing Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">EMT conduit (10 ft sticks)</td>
                      <td className="py-3 px-4">Linear feet / 10</td>
                      <td className="py-3 px-4 text-white/60">Round up to full sticks</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Couplings</td>
                      <td className="py-3 px-4">1 per stick + extras</td>
                      <td className="py-3 px-4 text-white/60">1 every 10 ft of EMT</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Connectors</td>
                      <td className="py-3 px-4">2 per box/panel entry</td>
                      <td className="py-3 px-4 text-white/60">Set-screw or compression</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">90-degree elbows</td>
                      <td className="py-3 px-4">Count from plan</td>
                      <td className="py-3 px-4 text-white/60">Max 360 degrees of bends between pull points</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Straps/hangers</td>
                      <td className="py-3 px-4">1 per 6-10 ft</td>
                      <td className="py-3 px-4 text-white/60">Per NEC 358.30, within 3 ft of boxes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Pull boxes</td>
                      <td className="py-3 px-4">As shown on plans</td>
                      <td className="py-3 px-4 text-white/60">Required when exceeding 360-degree bends</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Feeder and Service Entrance Runs</h3>
              <p className="text-white/80 mb-4">
                Feeder runs (from the main distribution to sub-panels or large equipment) are typically the most expensive single-line items on a takeoff. Measure these with extra care:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Use riser diagrams:</strong> The electrical riser or single-line diagram shows vertical relationships between floors and equipment</li>
                <li><strong>Add floor-to-floor height:</strong> A typical commercial floor-to-floor height is 12-15 feet. Include the full riser length for vertical runs</li>
                <li><strong>Include service entrance length:</strong> Measure from the utility transformer or meter to the main panel or switchboard</li>
                <li><strong>Count parallel sets:</strong> Large feeders may require parallel conductors (e.g., 2 sets of 3/0 per phase). Each set needs its own conduit</li>
                <li><strong>Verify conductor sizing:</strong> Check the riser diagram for conductor size and conduit size callouts against NEC ampacity tables</li>
              </ul>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="/get"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="panel-schedules" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Panel Schedules &amp; Circuit Directories</h2>
              <p className="text-white/80 mb-4">
                Panel schedules are one of the most information-dense documents in the electrical plan set. They tell you what size panel to order, how many breakers are needed, what size each breaker is, and how the electrical load is distributed across phases.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Reading a Panel Schedule for Takeoff</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">CKT</th>
                      <th className="text-left py-3 px-4 text-white/60">Description</th>
                      <th className="text-left py-3 px-4 text-white/60">VA</th>
                      <th className="text-left py-3 px-4 text-white/60">BKR</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire</th>
                      <th className="text-left py-3 px-4 text-white/60">Conduit</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1</td>
                      <td className="py-3 px-4">Kitchen Recepts (GFCI)</td>
                      <td className="py-3 px-4">1,920</td>
                      <td className="py-3 px-4">20A/1P</td>
                      <td className="py-3 px-4 text-cyan-400">#12</td>
                      <td className="py-3 px-4 text-cyan-400">3/4&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2</td>
                      <td className="py-3 px-4">Lighting - East Wing</td>
                      <td className="py-3 px-4">1,440</td>
                      <td className="py-3 px-4">15A/1P</td>
                      <td className="py-3 px-4 text-cyan-400">#14</td>
                      <td className="py-3 px-4 text-cyan-400">1/2&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3,5</td>
                      <td className="py-3 px-4">HVAC Unit #1</td>
                      <td className="py-3 px-4">7,200</td>
                      <td className="py-3 px-4">30A/2P</td>
                      <td className="py-3 px-4 text-cyan-400">#10</td>
                      <td className="py-3 px-4 text-cyan-400">3/4&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">4</td>
                      <td className="py-3 px-4">General Recepts - Office</td>
                      <td className="py-3 px-4">1,800</td>
                      <td className="py-3 px-4">20A/1P</td>
                      <td className="py-3 px-4 text-cyan-400">#12</td>
                      <td className="py-3 px-4 text-cyan-400">3/4&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">7,9,11</td>
                      <td className="py-3 px-4">Electric Range</td>
                      <td className="py-3 px-4">12,000</td>
                      <td className="py-3 px-4">50A/3P</td>
                      <td className="py-3 px-4 text-cyan-400">#6</td>
                      <td className="py-3 px-4 text-cyan-400">1&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">What to Extract from Panel Schedules</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Panel type and size:</strong> Note the main breaker rating, bus rating, number of spaces, voltage, and phase configuration (120/240V single-phase or 208Y/120V three-phase)</li>
                <li><strong>Breaker count by size:</strong> Tally all 15A/1P, 20A/1P, 20A/2P, 30A/2P, 50A/2P, etc. breakers needed</li>
                <li><strong>Wire sizes per circuit:</strong> The panel schedule often specifies conductor sizes. Use these for your wire takeoff</li>
                <li><strong>Spare and space breakers:</strong> Count spare breakers (installed but not connected) and blank spaces (for future use)</li>
                <li><strong>Ground bar and neutral bar:</strong> Verify if additional ground bars are needed for the number of circuits</li>
              </ul>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-2">Cross-Check: Panel Schedule vs. Floor Plan</h4>
                <p className="text-white/70">
                  One of the most critical verification steps in any takeoff is comparing the panel schedule against the floor plan. Count the number of home run arrows pointing to a specific panel on the floor plans and verify that this matches the number of circuits shown on that panel&apos;s schedule. Discrepancies are common and should be resolved with an RFI before bidding.
                </p>
              </div>
            </section>

            <section id="digital-tools" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Digital Takeoff Tools &amp; Software</h2>
              <p className="text-white/80 mb-4">
                While manual takeoffs with colored pencils and scale rulers still work, digital takeoff tools dramatically improve speed, accuracy, and organization. Modern electrical contractors increasingly rely on software to perform takeoffs from PDF plan sets.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Types of Digital Takeoff Tools</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">General Takeoff Software</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Bluebeam Revu:</strong> Industry standard for PDF markup and measurement. Supports custom tool sets for counting and linear measuring.</li>
                    <li><strong>PlanSwift:</strong> Dedicated takeoff software with point-and-click counting and area/linear measurement tools.</li>
                    <li><strong>On-Screen Takeoff (OST):</strong> Classic takeoff tool with strong measurement capabilities and integration with estimating software.</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Electrical-Specific Software</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Accubid / Trimble:</strong> Full electrical estimating suite with integrated takeoff, pricing, and labor calculation.</li>
                    <li><strong>ConEst IntelliBid:</strong> Electrical estimating with built-in material databases, labor units, and takeoff tools.</li>
                    <li><strong>McCormick Estimating:</strong> Electrical-specific estimating software with takeoff integration and NECA labor units.</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of Digital Takeoff</h3>
              <div className="space-y-4 my-6">
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Speed</h4>
                  <p className="text-white/70">
                    Digital tools can count devices with a single click and measure runs by tracing on-screen. A takeoff that takes 8 hours manually can often be completed in 3-4 hours with software. For large commercial projects, this time savings is substantial.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Accuracy</h4>
                  <p className="text-white/70">
                    Software automatically calibrates to the drawing scale, eliminating measurement errors from reduced prints. Counts are tracked in real-time, making it impossible to accidentally double-count a device. Running totals update instantly as you work.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Documentation</h4>
                  <p className="text-white/70">
                    Every item you count and every measurement you take is saved as a layer on the PDF. This creates a complete record of your takeoff that can be reviewed, revised, and shared. When addenda change the plans, you can update specific areas without starting over.
                  </p>
                </div>
                <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6">
                  <h4 className="font-semibold text-green-400 mb-2">Integration</h4>
                  <p className="text-white/70">
                    Digital takeoff quantities can export directly to estimating software, pricing databases, and spreadsheets. This eliminates manual data entry errors and streamlines the transition from takeoff to estimate to proposal.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">Tip: Set Up Templates</h4>
                <p className="text-white/70">
                  Create reusable templates in your takeoff software with pre-configured device types, colors, and categories. Set up standard count tools for duplex receptacles, GFCI receptacles, switches, and common fixture types. This front-end investment saves hours on every subsequent takeoff and ensures consistency across your team.
                </p>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Takeoff Mistakes to Avoid</h2>
              <p className="text-white/80 mb-4">
                Even experienced estimators make costly errors during takeoffs. Recognizing these common pitfalls helps you build more reliable material lists and avoid budget-killing surprises during construction.
              </p>

              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical Takeoff Errors</h4>
                <ul className="text-white/70 space-y-4">
                  <li>
                    <strong>1. Forgetting the Home Runs:</strong> This is the single most common and costly takeoff error. Counting all the receptacles and switches on a floor plan but forgetting to measure the wire from the last device in each circuit back to the panel. Every circuit has a home run, and on commercial projects these can be 50-150 feet of additional wire per circuit. On a 42-circuit panel, that adds up to thousands of feet of wire.
                  </li>
                  <li>
                    <strong>2. Not Adding Vertical Runs:</strong> Floor plans show a flat, top-down view. Wire does not run at device height. It routes through the ceiling space, drops down walls to devices, and rises from underground or floor-level panels up to the ceiling. Failure to add vertical distances can underestimate wire by 15-25%.
                  </li>
                  <li>
                    <strong>3. Missing Sheets or Areas:</strong> Large plan sets can have dozens of electrical sheets. It is easy to miss a sheet, skip a floor, or overlook a small area detail that contains additional devices. Systematically check off each sheet as you complete it.
                  </li>
                  <li>
                    <strong>4. Ignoring the Specifications:</strong> The plans show what and where; the specifications dictate how and with what. Missing a specification requirement for a specific manufacturer, conduit type, or wiring method can result in either using the wrong materials or costly substitution requests.
                  </li>
                  <li>
                    <strong>5. Using the Wrong Scale:</strong> Different sheets or even different areas on the same sheet may be drawn at different scales. Always check the title block for the scale before measuring. An enlarged plan area drawn at 1/4&quot; scale measured as if it were 1/8&quot; scale doubles all your measurements.
                  </li>
                  <li>
                    <strong>6. Double-Counting on Overlapping Sheets:</strong> Lighting plans and power plans may show some of the same devices. For example, a receptacle on the power plan may also appear on the lighting plan if it is switch-controlled. Cross-reference to avoid counting it twice.
                  </li>
                  <li>
                    <strong>7. Skipping the Site Visit:</strong> Plans show ideal conditions. The actual site may have obstructions, limited access, long material storage distances, high ceilings, or existing conditions that affect installation. Always visit the site before finalizing your takeoff.
                  </li>
                  <li>
                    <strong>8. Forgetting Small Materials:</strong> Wire nuts, tape, cable ties, labels, fire caulk, penetration seals, anchors, and screws may seem insignificant, but they add up to 3-5% of total material cost on a typical project.
                  </li>
                </ul>
              </div>
            </section>

            <section id="material-lists" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Creating Accurate Material Lists</h2>
              <p className="text-white/80 mb-4">
                The final step of the takeoff is organizing your quantities into a clear, complete material list that can be priced, ordered, and used for project management. A well-organized material list is the bridge between the takeoff and the estimate.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Material List Organization</h3>
              <p className="text-white/80 mb-4">
                Group materials by category for clarity and to make pricing easier. Here is a recommended structure:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Category</th>
                      <th className="text-left py-3 px-4 text-white/60">Items Included</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical % of Material Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Distribution Equipment</td>
                      <td className="py-3 px-4">Panels, switchboards, transformers, disconnects, breakers</td>
                      <td className="py-3 px-4">15-25%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Wire &amp; Cable</td>
                      <td className="py-3 px-4">Building wire (THHN), NM cable, MC cable, feeders, low-voltage</td>
                      <td className="py-3 px-4">25-40%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Conduit &amp; Raceway</td>
                      <td className="py-3 px-4">EMT, rigid, PVC, flex, fittings, connectors, couplings</td>
                      <td className="py-3 px-4">10-20%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Boxes &amp; Covers</td>
                      <td className="py-3 px-4">Device boxes, junction boxes, pull boxes, mud rings, covers</td>
                      <td className="py-3 px-4">3-8%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Devices</td>
                      <td className="py-3 px-4">Receptacles, switches, dimmers, sensors, cover plates</td>
                      <td className="py-3 px-4">3-8%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Lighting</td>
                      <td className="py-3 px-4">Fixtures, lamps, ballasts, emergency units, exit signs</td>
                      <td className="py-3 px-4">10-25%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Supports &amp; Fasteners</td>
                      <td className="py-3 px-4">Strut, rod, beam clamps, straps, hangers, anchors</td>
                      <td className="py-3 px-4">3-6%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-cyan-400">Miscellaneous</td>
                      <td className="py-3 px-4">Wire nuts, tape, labels, cable ties, fire caulk, lubricant</td>
                      <td className="py-3 px-4">2-5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Material List Best Practices</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">Use Consistent Units</h4>
                  <p className="text-white/60 text-sm">Wire and conduit should be in feet. Devices, boxes, and fittings should be in &quot;each.&quot; Do not mix units within a category. Convert wire to number of rolls or reels when placing orders.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">Specify Completely</h4>
                  <p className="text-white/60 text-sm">Each line item should have enough detail to be priced and ordered without ambiguity. Include size, type, manufacturer (if specified), voltage, amperage, and any special features. &quot;20A receptacle&quot; is not enough; specify &quot;20A, 125V, duplex, spec grade, white, Leviton 5352-W or equal.&quot;</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">Note Assumptions</h4>
                  <p className="text-white/60 text-sm">Document any assumptions you made during the takeoff. If a detail was unclear and you assumed standard mounting height, or if you assumed a specific wiring method where the plans were ambiguous, note it. This protects you during change order discussions.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white mb-1">Include a Summary</h4>
                  <p className="text-white/60 text-sm">At the top of your material list, include a summary of major quantities: total receptacles, total switches, total fixtures, total wire footage, total conduit footage. This provides a quick sanity check and helps compare against similar past projects.</p>
                </div>
              </div>
            </section>

            <section id="waste-factors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Waste Factors &amp; Ordering Considerations</h2>
              <p className="text-white/80 mb-4">
                No installation is 100% efficient. Wire gets cut with remnants too short to use. Conduit sticks get bent incorrectly. Devices arrive damaged. Accounting for waste in your takeoff is essential for ensuring you order enough material to complete the job without running short.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Standard Waste Factors by Material</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Material</th>
                      <th className="text-left py-3 px-4 text-white/60">Waste Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Reason</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Building Wire (THHN)</td>
                      <td className="py-3 px-4 text-green-400">10-15%</td>
                      <td className="py-3 px-4 text-white/60">Cut-off ends, pull-through excess, damaged sections</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">NM Cable (Romex)</td>
                      <td className="py-3 px-4 text-green-400">10%</td>
                      <td className="py-3 px-4 text-white/60">Short ends from box connections, routing adjustments</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">MC Cable</td>
                      <td className="py-3 px-4 text-green-400">10-12%</td>
                      <td className="py-3 px-4 text-white/60">Similar to NM plus armor waste at terminations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">EMT Conduit</td>
                      <td className="py-3 px-4 text-green-400">5-10%</td>
                      <td className="py-3 px-4 text-white/60">Bad bends, short pieces, cut-off waste from 10 ft sticks</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Rigid Conduit</td>
                      <td className="py-3 px-4 text-green-400">5-8%</td>
                      <td className="py-3 px-4 text-white/60">Threading waste, cut-off pieces</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Devices (receptacles, switches)</td>
                      <td className="py-3 px-4 text-green-400">2-3%</td>
                      <td className="py-3 px-4 text-white/60">Shipping damage, defective units, installation damage</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Light Fixtures</td>
                      <td className="py-3 px-4 text-green-400">1-2%</td>
                      <td className="py-3 px-4 text-white/60">Shipping damage, defective units</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-cyan-400">Fittings &amp; Connectors</td>
                      <td className="py-3 px-4 text-green-400">5-10%</td>
                      <td className="py-3 px-4 text-white/60">Cross-threaded, dropped, lost on site</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ordering Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-3">Order Smart</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Wire by the reel:</strong> Order wire on full reels (500 ft or 1,000 ft) when quantities justify it. Per-foot pricing from partial reels is significantly higher.</li>
                    <li><strong>Conduit by the bundle:</strong> EMT comes in bundles of 10 sticks (100 ft). Full bundle pricing is better than per-stick pricing.</li>
                    <li><strong>Lock in copper pricing:</strong> For large projects, get a firm price quote with a validity period from your distributor. Copper prices fluctuate weekly.</li>
                    <li><strong>Lead times:</strong> Panels, switchboards, and specialty fixtures can have 6-16 week lead times. Order these immediately after contract award.</li>
                  </ul>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h4 className="font-semibold text-orange-400 mb-3">Avoid These Traps</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Over-ordering:</strong> Excessive waste factors tie up capital in unused material. Restocking fees on returns eat into profits.</li>
                    <li><strong>Under-ordering:</strong> Running short on material causes crew downtime, rush delivery charges, and schedule delays that cost far more than the materials.</li>
                    <li><strong>Wrong items:</strong> Double-check catalog numbers, voltage ratings, and NEMA configurations before placing orders. Returning incorrect items causes delays and restocking fees.</li>
                    <li><strong>Phasing:</strong> On large projects, phase your orders to match the construction schedule. Do not store 6 months of material on day one.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Final Takeoff Checklist</h4>
                <ul className="text-white/70 space-y-2">
                  <li>&#9745; All drawing sheets reviewed and marked up</li>
                  <li>&#9745; Legend and general notes reviewed</li>
                  <li>&#9745; Specifications (Division 26, 27, 28) reviewed</li>
                  <li>&#9745; All addenda incorporated</li>
                  <li>&#9745; Device counts verified against panel schedules</li>
                  <li>&#9745; Fixture counts verified against fixture schedule</li>
                  <li>&#9745; Wire lengths include vertical runs and connection allowances</li>
                  <li>&#9745; Home runs measured for every circuit</li>
                  <li>&#9745; Conduit fittings counted for every run</li>
                  <li>&#9745; Support hardware included</li>
                  <li>&#9745; Waste factors applied</li>
                  <li>&#9745; Miscellaneous consumables included</li>
                  <li>&#9745; Site conditions and access reviewed</li>
                  <li>&#9745; Material list organized and ready for pricing</li>
                </ul>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on iOS &amp; Android</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/get"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download Ampora Free
                  </a>
                  <Link
                    href="/features/nec-code-reference"
                    className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-symbols-blueprint-reading" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Electrical Symbols &amp; Blueprint Reading Guide</h3>
                </Link>
                <Link href="/blog/electrical-estimating-contractors" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Electrical Estimating: Bidding Jobs &amp; Calculating Costs</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Wire Sizing Guide: NEC Ampacity Tables</h3>
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
          <p className="text-sm text-white/40">&copy; 2026 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
