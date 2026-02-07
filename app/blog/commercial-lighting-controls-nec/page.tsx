import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Lighting Controls: NEC Requirements & Energy Code Compliance",
  description: "Complete guide to commercial lighting control requirements per NEC and energy codes. Learn occupancy sensor wiring, daylight harvesting controls, automatic shutoff requirements, and ASHRAE 90.1 compliance.",
  keywords: [
    "commercial lighting controls",
    "lighting control NEC",
    "occupancy sensor wiring",
    "daylight harvesting",
    "automatic shutoff",
    "ASHRAE 90.1 lighting",
    "IECC lighting requirements",
    "lighting control panel",
    "commercial lighting code",
    "energy code lighting",
    "lighting control relay",
    "photocell wiring",
    "dimmer switch commercial",
    "NEC 410 lighting",
    "lighting power density",
    "demand response lighting"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/commercial-lighting-controls-nec",
  },
  openGraph: {
    title: "Commercial Lighting Controls: NEC & Energy Code Guide - Ampora",
    description: "Master commercial lighting control requirements for NEC compliance and energy code mandates.",
    url: "https://amporalabs.com/blog/commercial-lighting-controls-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Commercial lighting control system diagram">
      {/* Control Panel */}
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="70" height="100" rx="4" fill="#1f2937" stroke="#a855f7" strokeWidth="2"/>
        <text x="35" y="15" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">LIGHTING</text>
        <text x="35" y="24" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">CONTROL</text>

        {/* Control panel indicators */}
        <rect x="10" y="32" width="50" height="8" rx="2" fill="#22c55e" opacity="0.8"/>
        <rect x="10" y="44" width="50" height="8" rx="2" fill="#22c55e" opacity="0.8"/>
        <rect x="10" y="56" width="50" height="8" rx="2" fill="#eab308" opacity="0.8"/>
        <rect x="10" y="68" width="50" height="8" rx="2" fill="#6b7280"/>
        <rect x="10" y="80" width="50" height="8" rx="2" fill="#6b7280"/>

        {/* Status labels */}
        <text x="35" y="39" textAnchor="middle" fill="#000" fontSize="5">ZONE 1</text>
        <text x="35" y="51" textAnchor="middle" fill="#000" fontSize="5">ZONE 2</text>
        <text x="35" y="63" textAnchor="middle" fill="#000" fontSize="5">ZONE 3</text>
      </g>

      {/* Occupancy Sensor */}
      <g transform="translate(130, 25)">
        <circle cx="20" cy="20" r="18" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        <circle cx="20" cy="20" r="8" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2"/>
        <circle cx="20" cy="20" r="4" fill="#22c55e"/>
        <text x="20" y="50" textAnchor="middle" fill="#22c55e" fontSize="7">OCCUPANCY</text>
        <text x="20" y="58" textAnchor="middle" fill="#22c55e" fontSize="7">SENSOR</text>

        {/* Detection waves */}
        <path d="M5 20 Q-5 20 -5 10" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
        <path d="M5 20 Q-10 20 -10 5" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"/>
        <path d="M35 20 Q45 20 45 10" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
        <path d="M35 20 Q50 20 50 5" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.3"/>
      </g>

      {/* Daylight Sensor */}
      <g transform="translate(200, 25)">
        <rect x="0" y="0" width="40" height="40" rx="4" fill="#1f2937" stroke="#fbbf24" strokeWidth="2"/>
        <circle cx="20" cy="20" r="10" fill="none" stroke="#fbbf24" strokeWidth="2"/>

        {/* Sun rays */}
        <line x1="20" y1="5" x2="20" y2="-2" stroke="#fbbf24" strokeWidth="2"/>
        <line x1="30" y1="10" x2="35" y2="5" stroke="#fbbf24" strokeWidth="2"/>
        <line x1="35" y1="20" x2="42" y2="20" stroke="#fbbf24" strokeWidth="2"/>

        <text x="20" y="55" textAnchor="middle" fill="#fbbf24" fontSize="7">PHOTOCELL</text>
      </g>

      {/* Time Clock */}
      <g transform="translate(270, 25)">
        <rect x="0" y="0" width="40" height="40" rx="4" fill="#1f2937" stroke="#0ea5e9" strokeWidth="2"/>
        <circle cx="20" cy="20" r="12" fill="none" stroke="#0ea5e9" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="20" y2="12" stroke="#0ea5e9" strokeWidth="1.5"/>
        <line x1="20" y1="20" x2="26" y2="20" stroke="#0ea5e9" strokeWidth="1.5"/>
        <circle cx="20" cy="20" r="2" fill="#0ea5e9"/>

        <text x="20" y="55" textAnchor="middle" fill="#0ea5e9" fontSize="7">TIME CLOCK</text>
      </g>

      {/* Dimmer */}
      <g transform="translate(340, 25)">
        <rect x="0" y="0" width="35" height="50" rx="4" fill="#1f2937" stroke="#f472b6" strokeWidth="2"/>
        <rect x="8" y="10" width="19" height="30" rx="2" fill="#374151"/>
        <rect x="11" y="20" width="13" height="15" rx="1" fill="#f472b6" opacity="0.6"/>
        <circle cx="17" cy="36" r="2" fill="#f472b6"/>
        <text x="17" y="62" textAnchor="middle" fill="#f472b6" fontSize="7">DIMMER</text>
      </g>

      {/* Lighting Fixtures */}
      <g transform="translate(100, 100)">
        {/* Fixture 1 - ON */}
        <rect x="0" y="0" width="50" height="15" rx="2" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="5" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.8"/>
        <rect x="17" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.8"/>
        <rect x="29" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.8"/>
        <rect x="41" y="3" width="5" height="9" rx="1" fill="#fff" opacity="0.8"/>

        {/* Fixture 2 - ON Dimmed */}
        <rect x="70" y="0" width="50" height="15" rx="2" fill="#fbbf24" opacity="0.5" stroke="#f59e0b" strokeWidth="1"/>
        <rect x="75" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.4"/>
        <rect x="87" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.4"/>
        <rect x="99" y="3" width="8" height="9" rx="1" fill="#fff" opacity="0.4"/>
        <rect x="111" y="3" width="5" height="9" rx="1" fill="#fff" opacity="0.4"/>

        {/* Fixture 3 - OFF */}
        <rect x="140" y="0" width="50" height="15" rx="2" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
        <rect x="145" y="3" width="8" height="9" rx="1" fill="#4b5563"/>
        <rect x="157" y="3" width="8" height="9" rx="1" fill="#4b5563"/>
        <rect x="169" y="3" width="8" height="9" rx="1" fill="#4b5563"/>
        <rect x="181" y="3" width="5" height="9" rx="1" fill="#4b5563"/>

        <text x="25" y="28" textAnchor="middle" fill="#22c55e" fontSize="7">100%</text>
        <text x="95" y="28" textAnchor="middle" fill="#eab308" fontSize="7">50%</text>
        <text x="165" y="28" textAnchor="middle" fill="#6b7280" fontSize="7">OFF</text>
      </g>

      {/* Connection lines */}
      <path d="M90 70 L130 50" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,2"/>
      <path d="M90 70 L220 45" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="3,2"/>
      <path d="M90 70 L290 45" fill="none" stroke="#0ea5e9" strokeWidth="1.5" strokeDasharray="3,2"/>

      {/* Control lines to fixtures */}
      <line x1="55" y1="120" x2="100" y2="107" stroke="#a855f7" strokeWidth="1"/>
      <line x1="55" y1="120" x2="170" y2="107" stroke="#a855f7" strokeWidth="1"/>
      <line x1="55" y1="120" x2="240" y2="107" stroke="#a855f7" strokeWidth="1"/>

      {/* Energy Savings Label */}
      <rect x="280" y="100" width="100" height="35" rx="4" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e"/>
      <text x="330" y="115" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">ENERGY SAVINGS</text>
      <text x="330" y="128" textAnchor="middle" fill="#22c55e" fontSize="12" fontWeight="bold">30-50%</text>
    </svg>
  );
}

export default function CommercialLightingControlsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Commercial Lighting Controls", url: "https://amporalabs.com/blog/commercial-lighting-controls-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Commercial Lighting Controls: NEC Requirements & Energy Code Compliance"
          description="Complete guide to commercial lighting control requirements per NEC and energy codes including occupancy sensors, daylight harvesting, and automatic shutoff."
          datePublished="2025-01-16"
          dateModified="2025-01-16"
          url="https://amporalabs.com/blog/commercial-lighting-controls-nec"
          wordCount={2800}
          keywords={["commercial lighting", "lighting controls", "occupancy sensors", "energy code", "ASHRAE 90.1"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Commercial Lighting Controls</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/30 text-cyan-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">January 16, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Commercial Lighting Controls: NEC Requirements & Energy Code Compliance
            </h1>
            <p className="text-xl text-white/70">
              Navigate the complex requirements of commercial lighting controls. Learn to install occupancy sensors, daylight harvesting systems, and automatic shutoff controls that satisfy both NEC and energy code mandates.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-yellow-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Key Takeaway Box */}
          <div className="bg-purple-900/30 border border-purple-500/30 rounded-2xl p-6 mb-12">
            <h3 className="font-display font-bold text-lg mb-2">Multiple Code Compliance</h3>
            <p className="text-white/70">
              Commercial lighting controls must satisfy both the NEC (electrical safety) and energy codes (ASHRAE 90.1, IECC, or state/local codes). Understanding both sets of requirements is essential for compliant installations.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">&#8594; Energy Code Overview</a></li>
              <li><a href="#automatic-shutoff" className="hover:text-purple-400">&#8594; Automatic Shutoff Requirements</a></li>
              <li><a href="#occupancy" className="hover:text-purple-400">&#8594; Occupancy Sensor Installation</a></li>
              <li><a href="#daylight" className="hover:text-purple-400">&#8594; Daylight Harvesting Controls</a></li>
              <li><a href="#dimming" className="hover:text-purple-400">&#8594; Dimming Control Systems</a></li>
              <li><a href="#nec" className="hover:text-purple-400">&#8594; NEC Wiring Requirements</a></li>
              <li><a href="#commissioning" className="hover:text-purple-400">&#8594; Control System Commissioning</a></li>
              <li><a href="#troubleshooting" className="hover:text-purple-400">&#8594; Common Issues and Solutions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Energy Code Overview</h2>
              <p className="text-white/80 mb-4">
                Commercial lighting controls are primarily driven by energy codes rather than the NEC. The NEC covers safe installation, while energy codes mandate what controls must be provided. The main energy codes affecting commercial lighting are:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Code</th>
                      <th className="text-left py-3 px-4 text-white/60">Scope</th>
                      <th className="text-left py-3 px-4 text-white/60">Key Lighting Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">ASHRAE 90.1</td>
                      <td className="py-3 px-4">Commercial buildings</td>
                      <td className="py-3 px-4 text-white/60">LPD limits, automatic controls, daylight responsive</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">IECC Commercial</td>
                      <td className="py-3 px-4">All commercial</td>
                      <td className="py-3 px-4 text-white/60">Similar to ASHRAE with some variations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Title 24 (CA)</td>
                      <td className="py-3 px-4">California only</td>
                      <td className="py-3 px-4 text-white/60">More stringent, demand response ready</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Local Amendments</td>
                      <td className="py-3 px-4">Varies</td>
                      <td className="py-3 px-4 text-white/60">May exceed base code requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Lighting Power Density (LPD)</h3>
              <p className="text-white/80 mb-4">
                Energy codes limit the maximum watts per square foot for lighting in each space type. Common LPD limits from ASHRAE 90.1-2019:
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Office Spaces</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>Enclosed office: 0.74 W/ft2</li>
                    <li>Open office: 0.61 W/ft2</li>
                    <li>Conference room: 0.97 W/ft2</li>
                    <li>Corridor: 0.41 W/ft2</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Other Spaces</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>Retail sales: 1.05 W/ft2</li>
                    <li>Classroom: 0.71 W/ft2</li>
                    <li>Warehouse: 0.48 W/ft2</li>
                    <li>Restroom: 0.63 W/ft2</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="automatic-shutoff" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Automatic Shutoff Requirements</h2>
              <p className="text-white/80 mb-4">
                ASHRAE 90.1 Section 9.4.1 requires automatic shutoff of interior lighting in most commercial buildings. This is one of the most fundamental energy code requirements for lighting.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Automatic Shutoff Methods</h3>
                <p className="text-white/70 mb-3">At least one of these methods must be provided:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>1. Occupancy sensors</strong> - Automatically turn off lights when space is unoccupied</li>
                  <li><strong>2. Time scheduling</strong> - Programmable time clocks or building automation</li>
                  <li><strong>3. Signal from other control system</strong> - Integration with BAS</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Control Zone Requirements</h3>
              <p className="text-white/80 mb-4">
                Lighting must be controlled in zones with maximum areas per ASHRAE 90.1:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>2,500 sq ft maximum</strong> per control zone (typical)</li>
                <li><strong>Enclosed spaces</strong> controlled independently</li>
                <li><strong>Daylight zones</strong> controlled separately from non-daylight zones</li>
                <li><strong>Different schedules</strong> require separate control zones</li>
              </ul>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Override Requirements</h3>
                <p className="text-white/70">
                  When automatic shutoff is provided by scheduled controls, <strong>manual override</strong> must be available. Override can activate lights for a maximum of <strong>4 hours</strong> (2 hours in some jurisdictions), after which automatic shutoff resumes.
                </p>
              </div>
            </section>

            <section id="occupancy" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Occupancy Sensor Installation</h2>
              <p className="text-white/80 mb-4">
                Occupancy sensors are required in many space types per current energy codes. Proper installation and coverage is critical for code compliance and user satisfaction.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Required Occupancy Sensor Spaces (ASHRAE 90.1-2019)</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Mandatory Spaces</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#10003; Classrooms</li>
                    <li>&#10003; Conference/meeting rooms</li>
                    <li>&#10003; Private offices (250 sf or less)</li>
                    <li>&#10003; Restrooms</li>
                    <li>&#10003; Storage rooms (1000 sf or less)</li>
                    <li>&#10003; Copy/print rooms</li>
                    <li>&#10003; Break rooms</li>
                    <li>&#10003; Locker rooms</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Additional Spaces</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#10003; Open offices (partial auto-off)</li>
                    <li>&#10003; Corridors</li>
                    <li>&#10003; Stairwells</li>
                    <li>&#10003; Warehouse aisles</li>
                    <li>&#10003; Parking garages</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Sensor Technology Types</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Detection Method</th>
                      <th className="text-left py-3 px-4 text-white/60">Best Applications</th>
                      <th className="text-left py-3 px-4 text-white/60">Limitations</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">PIR (Passive Infrared)</td>
                      <td className="py-3 px-4">Heat/motion</td>
                      <td className="py-3 px-4 text-white/60">Private offices, restrooms, corridors</td>
                      <td className="py-3 px-4 text-white/60">Requires line of sight, motion</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Ultrasonic</td>
                      <td className="py-3 px-4">Sound waves</td>
                      <td className="py-3 px-4 text-white/60">Restrooms, open offices, partitioned areas</td>
                      <td className="py-3 px-4 text-white/60">Can false trigger from air movement</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Dual Technology</td>
                      <td className="py-3 px-4">PIR + Ultrasonic</td>
                      <td className="py-3 px-4 text-white/60">Conference rooms, classrooms</td>
                      <td className="py-3 px-4 text-white/60">Higher cost</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Microwave</td>
                      <td className="py-3 px-4">RF waves</td>
                      <td className="py-3 px-4 text-white/60">Industrial, high-bay, outdoor</td>
                      <td className="py-3 px-4 text-white/60">Can penetrate walls</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Coverage and Placement Guidelines</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-white/70">
                  <li><strong>Ceiling-mount PIR:</strong> Major motion 40-60 ft diameter, minor motion 15-20 ft</li>
                  <li><strong>Wall-mount PIR:</strong> 180-degree coverage, 40 ft range typical</li>
                  <li><strong>Ceiling-mount ultrasonic:</strong> 500-2000 sq ft per sensor depending on height</li>
                  <li><strong>Corner mount:</strong> Can extend coverage to 2000+ sq ft for PIR</li>
                  <li><strong>High-bay sensors:</strong> Specialized units for 20+ ft mounting heights</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Vacancy vs. Occupancy Sensors</h3>
                <p className="text-white/70 mb-3">
                  Energy codes increasingly require <strong>vacancy sensors</strong> (manual-on, automatic-off) rather than occupancy sensors (automatic-on, automatic-off) in certain spaces:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li><strong>Private offices:</strong> Often require vacancy sensors</li>
                  <li><strong>Restrooms:</strong> Occupancy sensors typically acceptable</li>
                  <li><strong>Corridors:</strong> Occupancy or vacancy depending on code version</li>
                </ul>
              </div>
            </section>

            <section id="daylight" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Daylight Harvesting Controls</h2>
              <p className="text-white/80 mb-4">
                Daylight responsive controls dim or switch electric lighting based on available daylight. Required by energy codes in spaces with skylights or significant window area.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Sidelit and Toplit Daylight Zones</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-yellow-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Primary Sidelit Zone</h4>
                  <p className="text-white/70 text-sm mb-2">Area adjacent to windows:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>Extends inward from window</li>
                    <li>Depth = window head height</li>
                    <li>Width = window width + 2 ft each side</li>
                    <li>Must be controlled separately</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-4">
                  <h4 className="font-semibold text-cyan-400 mb-2">Toplit Zone (Skylights)</h4>
                  <p className="text-white/70 text-sm mb-2">Area under skylights:</p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>Footprint of skylight</li>
                    <li>Plus 0.7 x ceiling height around perimeter</li>
                    <li>Or 70% of ceiling height distance</li>
                    <li>Daylight responsive controls required</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Daylight Responsive Control Types</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Continuous dimming:</strong> Smooth adjustment based on light levels (preferred)</li>
                <li><strong>Stepped dimming:</strong> Preset levels (e.g., 100%, 50%, off)</li>
                <li><strong>Stepped switching:</strong> On/off of fixture rows</li>
                <li><strong>Minimum requirement:</strong> One control step between 50-70% and off</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Photosensor Placement</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">Proper photosensor placement is critical for reliable daylight harvesting:</p>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Open loop (outdoor):</strong> Sensor faces outdoors, not affected by electric light</li>
                  <li><strong>Closed loop (indoor):</strong> Sensor reads combined daylight + electric light on work plane</li>
                  <li><strong>Avoid direct sunlight:</strong> Position to read ambient light, not direct sun patches</li>
                  <li><strong>Mount location:</strong> Typically ceiling-mounted in center of daylight zone</li>
                  <li><strong>Calibration required:</strong> Set points must be adjusted during commissioning</li>
                </ul>
              </div>
            </section>

            <section id="dimming" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dimming Control Systems</h2>
              <p className="text-white/80 mb-4">
                Modern commercial lighting control often uses dimming systems that provide both energy savings and user comfort. Understanding dimming protocols is essential for proper installation.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Dimming Control Protocols</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Protocol</th>
                      <th className="text-left py-3 px-4 text-white/60">Wiring</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Use</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">0-10V</td>
                      <td className="py-3 px-4">2-conductor + power</td>
                      <td className="py-3 px-4 text-white/60">LED drivers, fluorescent ballasts</td>
                      <td className="py-3 px-4 text-white/60">Analog signal, one-way</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">DALI</td>
                      <td className="py-3 px-4">2-conductor bus</td>
                      <td className="py-3 px-4 text-white/60">Commercial, addressable</td>
                      <td className="py-3 px-4 text-white/60">Digital, bidirectional, 64 addresses</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Phase-cut (MLV/ELV)</td>
                      <td className="py-3 px-4">Standard power wiring</td>
                      <td className="py-3 px-4 text-white/60">Residential, small commercial</td>
                      <td className="py-3 px-4 text-white/60">Forward or reverse phase</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">DMX512</td>
                      <td className="py-3 px-4">5-pin XLR or Cat5</td>
                      <td className="py-3 px-4 text-white/60">Theatrical, architectural</td>
                      <td className="py-3 px-4 text-white/60">512 channels per universe</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Wireless</td>
                      <td className="py-3 px-4">RF or Bluetooth</td>
                      <td className="py-3 px-4 text-white/60">Retrofit, IoT systems</td>
                      <td className="py-3 px-4 text-white/60">Zigbee, Bluetooth Mesh, proprietary</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">0-10V Wiring Best Practices</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Use Class 2 rated cable (18-22 AWG typical)</li>
                  <li>Keep control wiring away from power conductors</li>
                  <li>Maximum run length depends on wire gauge and load</li>
                  <li>Polarity matters: purple (+), gray (-) is common</li>
                  <li>Parallel connection of multiple drivers to one controller</li>
                  <li>Check controller capacity (mA sink current)</li>
                </ul>
              </div>
            </section>

            <section id="nec" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Wiring Requirements</h2>
              <p className="text-white/80 mb-4">
                While energy codes mandate what controls to provide, the NEC governs how to safely install them. Key NEC requirements for lighting controls include:
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC 410 - Luminaires</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>NEC 410.62:</strong> Cord-connected luminaire requirements</li>
                <li><strong>NEC 410.64:</strong> Luminaires as raceways for control conductors</li>
                <li><strong>NEC 410.68:</strong> Feeder conductor clearances</li>
                <li><strong>Listed luminaires:</strong> Controls must be compatible with luminaire listing</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">NEC 404 - Switches</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-white/70">
                  <li><strong>NEC 404.2(C):</strong> Switches controlling lighting loads must have grounded conductor (neutral) at switch box</li>
                  <li><strong>NEC 404.14:</strong> Rating and use of snap switches</li>
                  <li><strong>NEC 404.22:</strong> Electronic lighting control switches must be listed</li>
                  <li><strong>Dimmer ratings:</strong> Must be rated for connected load type (LED, fluorescent, incandescent)</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Low-Voltage Control Wiring (NEC 725)</h3>
              <p className="text-white/80 mb-4">
                Many lighting control systems use low-voltage wiring covered by NEC Article 725:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-6">
                <li><strong>Class 2 circuits:</strong> Most 0-10V and DALI wiring is Class 2 (power limited)</li>
                <li><strong>Separation:</strong> Class 2 wiring must be separated from power conductors</li>
                <li><strong>Exception:</strong> Class 2 cables can be in same raceway with power if all insulated for max voltage</li>
                <li><strong>Listed cables:</strong> CL2, CL2R, CL2P for Class 2 applications</li>
              </ul>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Power Over Ethernet (PoE) Lighting</h3>
                <p className="text-white/70">
                  NEC 2023 includes expanded coverage for PoE lighting systems per Article 725. PoE-powered luminaires must comply with Class 2 or Class 3 circuit requirements. The NEC limits PoE to 100W (Type 4) with specific cable requirements for continuous current capacity.
                </p>
              </div>
            </section>

            <section id="commissioning" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Control System Commissioning</h2>
              <p className="text-white/80 mb-4">
                Lighting control commissioning is required by most energy codes. Proper commissioning ensures controls function as designed and achieve expected energy savings.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Commissioning Requirements</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="space-y-3 text-white/70">
                  <li><strong>Occupancy sensors:</strong> Verify coverage, adjust time delays (typically 15-20 minutes)</li>
                  <li><strong>Photosensors:</strong> Calibrate setpoints with light meter readings</li>
                  <li><strong>Time clocks:</strong> Program schedules, verify holiday and override functions</li>
                  <li><strong>Dimming:</strong> Set high and low end trim, verify smooth dimming curves</li>
                  <li><strong>Integration:</strong> Verify BAS communication and alarm functions</li>
                  <li><strong>Documentation:</strong> Provide as-built drawings and programming records</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mb-3 mt-6">Testing Checklist</h3>
              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">All sensors detect occupancy correctly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Time delays function as programmed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Daylight dimming responds to light levels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Manual overrides work and time out correctly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Schedules activate/deactivate at correct times</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Emergency lighting overrides controls</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400">&#9744;</span>
                    <span className="text-white/70">Light levels meet IES recommendations</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="troubleshooting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Issues and Solutions</h2>
              <p className="text-white/80 mb-4">
                Lighting control systems can exhibit various problems. Here are common issues and their solutions:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Occupancy sensor false triggers</p>
                  <p className="text-white/60 text-sm">Adjust sensitivity, change from ultrasonic to PIR, check for HVAC air movement, relocate sensor away from windows</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Lights turn off while room is occupied</p>
                  <p className="text-white/60 text-sm">Inadequate sensor coverage, seated occupants not detected, extend time delay, add additional sensors or switch to ultrasonic/dual-tech</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">Daylight dimming hunting (cycling up and down)</p>
                  <p className="text-white/60 text-sm">Increase deadband on photosensor, slow response time, check sensor placement for reflections or direct sun</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">0-10V fixtures not dimming smoothly</p>
                  <p className="text-white/60 text-sm">Check for minimum load requirements, verify driver compatibility, inspect for damaged control wiring, check polarity</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white font-semibold mb-2">LED flicker when dimming</p>
                  <p className="text-white/60 text-sm">Incompatible dimmer, driver minimum load not met, use dimmer rated for LED, add minimum load capacitor</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">
              <h2 className="text-2xl font-display font-bold mb-4 text-center">
                Commercial Electrical Reference On-Site
              </h2>
              <p className="text-white/70 mb-6 text-center">
                Access NEC requirements and electrical calculations instantly with Ampora. Get code answers and calculate loads while you work.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/features/nec-code-reference"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition-colors text-center"
                >
                  Explore NEC Reference
                </Link>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-center"
                >
                  Download App Free
                </a>
              </div>
            </section>

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/how-to-calculate-voltage-drop" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Voltage Drop Calculations for Long Runs</h3>
                </Link>
                <Link href="/blog/wire-sizing-guide-nec-ampacity-tables" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
