import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Ceiling Fan Wiring & Installation: Box Requirements & Methods",
  description: "Complete guide to ceiling fan wiring and installation. Learn NEC 314.27(C) fan-rated box requirements, wiring configurations, mounting methods, and smart fan switch wiring for electricians.",
  keywords: [
    "ceiling fan wiring",
    "fan-rated box",
    "NEC 314.27",
    "ceiling fan installation",
    "fan wiring diagram",
    "ceiling fan box requirements",
    "fan light wiring",
    "smart fan switch wiring",
    "ceiling fan mounting",
    "fan brace bar installation"
  ],
  openGraph: {
    title: "Ceiling Fan Wiring & Installation: Box Requirements & Methods",
    description: "Complete guide to ceiling fan wiring, fan-rated box requirements per NEC 314.27(C), and installation methods.",
    type: "article",
    publishedTime: "2025-04-12",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Ceiling fan with wiring connections and fan-rated box illustration">
      {/* Ceiling line */}
      <rect x="0" y="10" width="400" height="8" fill="#374151" />

      {/* Fan-rated box */}
      <g transform="translate(170, 18)">
        <rect x="0" y="0" width="60" height="22" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="2" />
        <text x="30" y="15" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">FAN RATED</text>
        {/* Mounting screws */}
        <circle cx="10" cy="22" r="2" fill="#9ca3af" />
        <circle cx="50" cy="22" r="2" fill="#9ca3af" />
      </g>

      {/* Downrod */}
      <rect x="196" y="40" width="8" height="30" fill="#6b7280" stroke="#9ca3af" strokeWidth="1" />

      {/* Canopy */}
      <path d="M 175 40 Q 200 50, 225 40" stroke="#9ca3af" strokeWidth="2" fill="#374151" />

      {/* Motor housing */}
      <ellipse cx="200" cy="78" rx="28" ry="12" fill="#374151" stroke="#6b7280" strokeWidth="2" />

      {/* Fan blades */}
      <g>
        {/* Left blade */}
        <path d="M 172 75 L 90 60 L 88 68 L 170 80" fill="#4b5563" stroke="#6b7280" strokeWidth="1" />
        {/* Right blade */}
        <path d="M 228 75 L 310 60 L 312 68 L 230 80" fill="#4b5563" stroke="#6b7280" strokeWidth="1" />
        {/* Front blade (angled) */}
        <path d="M 195 86 L 170 140 L 180 142 L 205 88" fill="#4b5563" stroke="#6b7280" strokeWidth="1" />
        {/* Back blade (angled) */}
        <path d="M 205 86 L 230 140 L 220 142 L 195 88" fill="#4b5563" stroke="#6b7280" strokeWidth="1" />
      </g>

      {/* Light kit */}
      <path d="M 188 90 L 185 108 Q 200 115, 215 108 L 212 90" fill="#1f2937" stroke="#6b7280" strokeWidth="1" />
      <ellipse cx="200" cy="108" rx="15" ry="5" fill="#fbbf24" fillOpacity="0.4" stroke="#f59e0b" strokeWidth="1" />

      {/* Light glow */}
      <ellipse cx="200" cy="115" rx="25" ry="10" fill="#fbbf24" fillOpacity="0.1" />

      {/* Wiring from box */}
      <g>
        {/* Black wire (hot) */}
        <path d="M 185 40 Q 180 50, 185 60" stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="165" y="55" fill="#9ca3af" fontSize="6">BLK</text>
        {/* Red wire (switched hot) */}
        <path d="M 195 40 Q 193 50, 195 60" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="192" y="55" fill="#ef4444" fontSize="6">RED</text>
        {/* White wire (neutral) */}
        <path d="M 205 40 Q 207 50, 205 60" stroke="#e5e7eb" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="210" y="55" fill="#e5e7eb" fontSize="6">WHT</text>
        {/* Green wire (ground) */}
        <path d="M 215 40 Q 220 50, 215 60" stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <text x="222" y="55" fill="#22c55e" fontSize="6">GRN</text>
      </g>

      {/* Weight rating label */}
      <g transform="translate(20, 50)">
        <rect x="0" y="0" width="65" height="35" rx="4" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="32" y="14" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">NEC 314.27(C)</text>
        <text x="32" y="25" textAnchor="middle" fill="#9ca3af" fontSize="7">35 lb min</text>
        <text x="32" y="33" textAnchor="middle" fill="#9ca3af" fontSize="6">or 70 lb listed</text>
      </g>

      {/* Brace bar label */}
      <g transform="translate(315, 50)">
        <rect x="0" y="0" width="70" height="28" rx="4" fill="#1f2937" stroke="#3b82f6" strokeWidth="1.5" />
        <text x="35" y="13" textAnchor="middle" fill="#3b82f6" fontSize="7" fontWeight="bold">Brace Bar</text>
        <text x="35" y="23" textAnchor="middle" fill="#9ca3af" fontSize="6">Between Joists</text>
      </g>

      {/* Min clearance arrow */}
      <g transform="translate(340, 100)">
        <line x1="0" y1="0" x2="0" y2="60" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3,3" />
        <polygon points="-3,0 3,0 0,-6" fill="#9ca3af" />
        <polygon points="-3,60 3,60 0,66" fill="#9ca3af" />
        <text x="5" y="35" fill="#9ca3af" fontSize="6">7 ft min</text>
      </g>

      {/* Labels */}
      <text x="200" y="170" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">Fan-Rated Box + 3-Wire Configuration</text>
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
            { name: "Ceiling Fan Wiring Installation", url: "https://amporalabs.com/blog/ceiling-fan-wiring-installation" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Ceiling Fan Wiring & Installation: Box Requirements & Methods"
          description="Complete guide to ceiling fan wiring, fan-rated box requirements per NEC 314.27(C), and installation methods."
          datePublished="2025-04-12"
          url="https://amporalabs.com/blog/ceiling-fan-wiring-installation"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ceiling Fan Wiring Installation</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">April 12, 2025</span>
              <span className="text-white/40 text-sm">• 10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ceiling Fan Wiring &amp; Installation: Box Requirements &amp; Methods
            </h1>
            <p className="text-xl text-white/70">
              Ceiling fan installations are among the most common requests electricians handle. Getting the box, wiring, and mounting right is critical for safety and code compliance.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>Fan-Rated Box Requirements: NEC 314.27(C)</h2>
            <p>
              The single most important rule for ceiling fan installations is using the correct outlet box. Per <strong>NEC 314.27(C)</strong>, outlet boxes used as the sole support for ceiling-suspended (paddle) fans must be listed for that purpose and marked accordingly. A standard lighting outlet box is <strong>not</strong> acceptable for fan support, even if the fan weighs less than 50 pounds.
            </p>
            <p>
              This requirement exists because ceiling fans produce dynamic loads&mdash;the rotating motion creates forces that far exceed the static weight of the fixture. A fan that weighs 30 pounds can exert 100+ pounds of dynamic force on the box during operation, especially at higher speeds or when blades become unbalanced.
            </p>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-300 font-semibold mt-0">Critical Safety Point</h4>
              <p className="text-white/80 mb-0">
                Never install a ceiling fan on a standard octagon box, even if it &quot;seems sturdy.&quot; Standard boxes are rated for static loads only. A fan-rated box is specifically tested for the dynamic loads that a rotating fan produces. Using an improper box is a code violation and a serious safety hazard&mdash;fans have fallen and caused injuries when mounted to non-rated boxes.
              </p>
            </div>

            <h3>Weight Ratings and Listing Requirements</h3>
            <p>
              NEC 314.27(C) establishes two weight thresholds for fan support boxes:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold">35 lb Maximum</h4>
                <p className="text-3xl font-bold text-green-400">Standard</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>Listed fan-rated box</li>
                  <li>Covers most residential fans</li>
                  <li>Must be marked &quot;Acceptable for Fan Support&quot;</li>
                  <li>Box alone supports the fan</li>
                </ul>
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                <h4 className="text-white font-semibold">35&ndash;70 lb Maximum</h4>
                <p className="text-3xl font-bold text-amber-400">Heavy Duty</p>
                <ul className="text-white/60 text-sm mt-2 space-y-1">
                  <li>Listed box and assembly system</li>
                  <li>Large fans with heavy light kits</li>
                  <li>Must be listed for the specific weight</li>
                  <li>Typically requires brace bar or direct joist mount</li>
                </ul>
              </div>
            </div>
            <p>
              If a fan weighs more than 70 pounds, the box must be supported directly by the building structure using methods specified by the manufacturer. Always check the fan&apos;s weight (including any light kit) against the box&apos;s listed rating before installation.
            </p>

            <h2>Types of Fan-Rated Boxes</h2>

            <h3>Pancake Box (Shallow)</h3>
            <p>
              A fan-rated pancake box is only about 1/2 inch deep and mounts directly to a ceiling joist or structural member with long screws (typically #10 x 1-1/2&quot; minimum). This is the most secure mounting method because the fan load transfers directly to framing lumber.
            </p>
            <ul>
              <li><strong>Pros:</strong> Strongest mount, minimal ceiling penetration, ideal for flush-mount fans</li>
              <li><strong>Cons:</strong> Must be centered on a joist (limits placement), very limited wire space</li>
              <li><strong>Box fill:</strong> Extremely tight&mdash;typically only 6&ndash;8 cubic inches. Plan wire routing carefully per NEC 314.16</li>
              <li><strong>Best for:</strong> New construction where joist location can be planned, or retrofit where a joist happens to be at the desired location</li>
            </ul>

            <h3>Old Work (Retrofit) Fan Box</h3>
            <p>
              Old work fan boxes are designed for retrofit installations in finished ceilings. They feature swing-out wings or arms that clamp against the back of the drywall, combined with a brace mechanism that transfers load to the ceiling structure.
            </p>
            <ul>
              <li><strong>Pros:</strong> No attic access required, installs through existing ceiling hole</li>
              <li><strong>Cons:</strong> Lower weight ratings than joist-mounted options, requires adequate ceiling structure</li>
              <li><strong>Typical rating:</strong> 35 lb for fan support</li>
              <li><strong>Best for:</strong> Replacing a light fixture with a ceiling fan in an existing room</li>
            </ul>

            <h3>New Work Fan Box</h3>
            <p>
              New work fan-rated boxes mount directly to ceiling joists before drywall is installed. They feature integral brackets or nail-on flanges and provide the most box fill volume for wiring.
            </p>
            <ul>
              <li><strong>Pros:</strong> Maximum wiring space, strongest mounting, easy installation during rough-in</li>
              <li><strong>Cons:</strong> Requires open ceiling access, must be positioned before drywall</li>
              <li><strong>Typical rating:</strong> Up to 70 lb</li>
              <li><strong>Best for:</strong> New construction and remodels where ceilings are open</li>
            </ul>

            <h3>Adjustable Brace Bar with Box</h3>
            <p>
              An adjustable brace bar spans between two ceiling joists (up to 24&quot; on center) and supports a fan-rated box at any point along its length. Brace bars come in two varieties:
            </p>
            <ul>
              <li><strong>New work brace:</strong> Installed before drywall, nails into joists. Rated up to 70 lb.</li>
              <li><strong>Old work (retrofit) brace:</strong> Inserted through the ceiling hole and expanded to grip joists with teeth. Rated up to 50 lb typically.</li>
            </ul>
            <p>
              Brace bars are the most versatile option because they allow fan placement anywhere between joists, not just directly under one. Always ensure the brace teeth or screws fully engage the joist&mdash;shallow engagement is a common cause of fan box failure.
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold">Fan Box Quick Reference</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Box Type</th>
                    <th className="py-2 text-white">Typical Rating</th>
                    <th className="py-2 text-white">Access Needed</th>
                    <th className="py-2 text-white">Best Use</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Pancake (joist)</td>
                    <td className="py-2">70 lb</td>
                    <td className="py-2">Attic or open ceiling</td>
                    <td className="py-2">New construction</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Old work fan box</td>
                    <td className="py-2">35 lb</td>
                    <td className="py-2">Ceiling hole only</td>
                    <td className="py-2">Light-to-fan retrofit</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">New work fan box</td>
                    <td className="py-2">70 lb</td>
                    <td className="py-2">Open ceiling</td>
                    <td className="py-2">Rough-in phase</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">New work brace</td>
                    <td className="py-2">70 lb</td>
                    <td className="py-2">Open ceiling</td>
                    <td className="py-2">Between joists, new build</td>
                  </tr>
                  <tr>
                    <td className="py-2">Old work brace</td>
                    <td className="py-2">50 lb</td>
                    <td className="py-2">Ceiling hole only</td>
                    <td className="py-2">Between joists, retrofit</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Wiring Configurations</h2>

            <h3>2-Wire: Fan Only (No Separate Light Control)</h3>
            <p>
              The simplest wiring configuration uses a standard 2-wire (plus ground) cable from a single switch to the fan box. This is used when the fan has no light kit, or when you want a single switch to control both fan and light simultaneously.
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-sm">Switch box to fan box: 14/2 or 12/2 NM-B (with ground)</p>
              <ul className="text-white/70 font-mono text-sm mt-2 space-y-1">
                <li>Black (hot) &rarr; Fan motor black wire</li>
                <li>White (neutral) &rarr; Fan motor white wire</li>
                <li>Bare/Green (ground) &rarr; Fan ground &amp; box ground</li>
              </ul>
            </div>

            <h3>3-Wire: Separate Fan and Light Control</h3>
            <p>
              The preferred configuration for fans with light kits uses a 3-wire (plus ground) cable, allowing independent control of the fan motor and light from separate switches. This requires a <strong>14/3 or 12/3 NM-B cable</strong> between the switch box and the fan box.
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-sm">Switch box to fan box: 14/3 or 12/3 NM-B (with ground)</p>
              <ul className="text-white/70 font-mono text-sm mt-2 space-y-1">
                <li>Black (hot, switch 1) &rarr; Fan motor black wire</li>
                <li>Red (hot, switch 2) &rarr; Light kit blue/red wire</li>
                <li>White (neutral) &rarr; Fan white &amp; light white (shared)</li>
                <li>Bare/Green (ground) &rarr; Fan ground, light ground, &amp; box ground</li>
              </ul>
            </div>
            <p>
              At the switch box, the incoming hot (from the breaker) pigtails to both switches. Each switch sends its switched hot up to the fan box on the black and red conductors respectively. This provides full independent wall control of fan speed and light brightness when used with a fan speed control and dimmer.
            </p>

            <h3>Single Switch with Pull Chains</h3>
            <p>
              When only 2-wire cable is available (common in retrofit), wire both the fan motor and light kit to the same switched hot, and use the fan&apos;s built-in pull chains for independent control. The wall switch becomes a master on/off.
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-sm">At the fan box (2-wire feed):</p>
              <ul className="text-white/70 font-mono text-sm mt-2 space-y-1">
                <li>Black (switched hot) &rarr; Pigtail to fan black AND light blue/black</li>
                <li>White (neutral) &rarr; Pigtail to fan white AND light white</li>
                <li>Bare/Green (ground) &rarr; All grounds bonded + box</li>
              </ul>
            </div>

            <h2>Remote Control Wiring Options</h2>
            <p>
              Fan remote control receivers solve the problem of independent fan/light control when only 2-wire cable exists to the fan box. The remote receiver module installs inside the fan canopy and receives radio frequency signals from a handheld or wall-mounted transmitter.
            </p>

            <h3>Standard RF Remote Receiver Wiring</h3>
            <ul>
              <li>Incoming hot (black) connects to the receiver&apos;s black input wire</li>
              <li>Incoming neutral (white) connects to the receiver&apos;s white wire</li>
              <li>Receiver&apos;s blue output wire connects to the light kit</li>
              <li>Receiver&apos;s black output wire connects to the fan motor</li>
              <li>Ground connects through to all components</li>
            </ul>
            <p>
              With a remote receiver, the wall switch should remain in the &quot;on&quot; position at all times&mdash;the remote handles all switching. Many electricians install a blank cover plate or a &quot;fan remote&quot; labeled plate where the switch was to prevent accidental shutoff.
            </p>

            <h3>Wall-Mounted Remote Transmitters</h3>
            <p>
              Wall-mounted transmitters replace a standard switch and operate on batteries or low-voltage power. They do <strong>not</strong> require any wiring changes at the switch box because they communicate wirelessly with the receiver in the fan canopy. The existing switch wiring simply feeds constant power to the fan box.
            </p>

            <h2>Smart Fan Switch Wiring</h2>
            <p>
              Smart fan switches (Wi-Fi, Z-Wave, Zigbee) are increasingly popular for home automation integration. Unlike basic switches, most smart fan controllers <strong>require a neutral wire</strong> at the switch box to power their internal electronics.
            </p>

            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 my-6">
              <h4 className="text-amber-300 font-semibold mt-0">Neutral Wire Requirement</h4>
              <p className="text-white/80 mb-0">
                Most smart fan switches need a neutral (white) wire at the switch box. Older homes wired with switch loops (hot and switched hot only, no neutral) will need rewiring to accommodate smart switches. Per <strong>NEC 404.2(C)</strong>, the 2011 and later code requires a grounded conductor (neutral) at most switch locations, so newer homes should already have one available.
              </p>
            </div>

            <h3>Smart Fan/Light Combo Switch Wiring (3-Wire)</h3>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono text-sm">At the smart switch (with 14/3 to fan box):</p>
              <ul className="text-white/70 font-mono text-sm mt-2 space-y-1">
                <li>Line (hot from breaker) &rarr; Switch &quot;Line&quot; terminal</li>
                <li>Neutral (white) &rarr; Switch &quot;Neutral&quot; terminal</li>
                <li>Black (load) &rarr; Switch &quot;Fan&quot; terminal &rarr; to fan motor</li>
                <li>Red (load) &rarr; Switch &quot;Light&quot; terminal &rarr; to light kit</li>
                <li>Ground &rarr; Switch ground terminal</li>
              </ul>
            </div>
            <p>
              Some smart switches can control fan speed and light dimming independently from a single-gang device, which is ideal for retrofit situations where expanding to a double-gang box is difficult. Check that the smart switch is specifically rated for motor (inductive) loads&mdash;standard smart dimmers will damage fan motors and create a fire hazard.
            </p>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="https://apps.apple.com/us/app/ampora/id6753693522"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <h2>Mounting Methods</h2>

            <h3>Joist Mount (Direct Mount)</h3>
            <p>
              Direct joist mounting provides the strongest support. The fan-rated box (typically a pancake box or new work box) attaches directly to the bottom face or side of a ceiling joist using structural screws. For joist mounting:
            </p>
            <ul>
              <li>Use #10 or larger wood screws, minimum 1-1/2&quot; penetration into the joist</li>
              <li>Never use drywall screws&mdash;they are brittle and not rated for shear loads</li>
              <li>Ensure the fan&apos;s mounting bracket aligns with the box screw holes (8/32 or 10/32 machine screws)</li>
              <li>For pancake boxes, verify adequate box fill for the number of conductors</li>
            </ul>

            <h3>Brace Bar Mount</h3>
            <p>
              Brace bar mounting is the go-to method when the desired fan location falls between joists. The brace spans across the joist bay and provides a solid mounting point:
            </p>
            <ul>
              <li><strong>New work braces</strong> nail or screw into joist faces before drywall. They provide the strongest between-joist mounting.</li>
              <li><strong>Old work braces</strong> are inserted through the ceiling hole, expanded, and their teeth bite into the joists. Use a wrench to fully tighten&mdash;hand-tight is not sufficient.</li>
              <li>The box slides onto the brace and locks in position with a U-bolt or clamp mechanism</li>
              <li>Verify the brace is level before tightening&mdash;a tilted brace means a wobbly fan</li>
            </ul>

            <h3>Structural Mounting for Heavy Fans</h3>
            <p>
              Fans over 50&ndash;70 pounds (large commercial or industrial styles) may require blocking between joists&mdash;a 2x4 or 2x6 piece of lumber nailed between adjacent joists, with the fan box mounted to it. This distributes the load across two joists and provides maximum support.
            </p>

            <h2>Sloped and Vaulted Ceiling Installations</h2>
            <p>
              Installing ceiling fans on angled ceilings requires special consideration for both mounting and aesthetics:
            </p>
            <ul>
              <li><strong>Angled mounting adapter:</strong> Most fan manufacturers offer slope adapters that allow the downrod to hang plumb while the canopy sits flush against the angled ceiling. These are typically included with the fan for slopes up to 30&ndash;45 degrees.</li>
              <li><strong>Extended downrods:</strong> On vaulted ceilings, longer downrods are needed to bring the fan blades down to the optimal height. Calculate the required downrod length based on ceiling height at the mounting point minus 7 feet (minimum blade clearance) minus the fan&apos;s hanging distance.</li>
              <li><strong>Steep slopes (over 45 degrees):</strong> Some fans are not rated for steep slopes. Check manufacturer specifications. The fan motor must remain reasonably level to operate properly and avoid bearing wear.</li>
              <li><strong>Cathedral ceiling adapter kits:</strong> Purpose-built kits include a sloped canopy, ball-and-socket hanger, and appropriate hardware. These allow the fan to swing freely and find plumb regardless of ceiling angle.</li>
            </ul>
            <p>
              When mounting on sloped ceilings, the fan-rated box must still be secured to structural framing. On cathedral or vaulted ceilings with exposed beams, the box can mount directly to the beam. Between rafters, use a brace bar rated for fan support.
            </p>

            <h2>Minimum Blade Height Clearances</h2>
            <p>
              The NEC and building codes set minimum clearance requirements for ceiling fan blade height:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Requirement</th>
                    <th className="py-2 text-white">Minimum Height</th>
                    <th className="py-2 text-white">Code Reference</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Fan blades above floor</td>
                    <td className="py-2">7 feet (84&quot;)</td>
                    <td className="py-2">NEC 314.27(C) / IRC</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Fan blades above floor (listed for lower)</td>
                    <td className="py-2">Per listing</td>
                    <td className="py-2">Manufacturer UL listing</td>
                  </tr>
                  <tr>
                    <td className="py-2">Optimal blade height for airflow</td>
                    <td className="py-2">8&ndash;9 feet</td>
                    <td className="py-2">Industry recommendation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The 7-foot minimum applies to the lowest point of the fan blades, not the bottom of the light kit. In rooms with standard 8-foot ceilings, a flush-mount (hugger) fan is typically required to maintain the 7-foot clearance. For 9-foot and higher ceilings, a standard downrod-mounted fan provides better airflow because the blades sit lower in the room where air circulation is more effective.
            </p>

            <h3>Downrod Sizing Guide</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Ceiling Height</th>
                    <th className="py-2 text-white">Recommended Downrod</th>
                    <th className="py-2 text-white">Approximate Blade Height</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">8 ft</td>
                    <td className="py-2">Flush mount (no downrod)</td>
                    <td className="py-2">7&ndash;7.5 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">9 ft</td>
                    <td className="py-2">6&quot; downrod (usually included)</td>
                    <td className="py-2">8&ndash;8.5 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">10 ft</td>
                    <td className="py-2">12&ndash;18&quot; downrod</td>
                    <td className="py-2">8&ndash;8.5 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">11 ft</td>
                    <td className="py-2">24&ndash;36&quot; downrod</td>
                    <td className="py-2">8&ndash;8.5 ft</td>
                  </tr>
                  <tr>
                    <td className="py-2">12+ ft</td>
                    <td className="py-2">36&ndash;72&quot; downrod</td>
                    <td className="py-2">8&ndash;9 ft</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Outdoor and Damp/Wet Location Rated Fans</h2>
            <p>
              Ceiling fans installed outdoors or in high-moisture areas must be appropriately rated per NEC requirements:
            </p>
            <ul>
              <li><strong>Damp-rated fans:</strong> Required for covered outdoor locations (porches, patios, covered gazebos) where the fan is protected from direct water exposure but subject to moisture and humidity. Also appropriate for bathrooms.</li>
              <li><strong>Wet-rated fans:</strong> Required for locations exposed to direct rain, sprinkler spray, or other direct water contact. All components including motor, blades, and light kit must be wet-rated.</li>
              <li><strong>Indoor-only fans:</strong> Standard fans are only suitable for dry, indoor locations. Installing an indoor fan outdoors&mdash;even on a covered porch&mdash;is a code violation and safety hazard.</li>
            </ul>
            <p>
              For outdoor installations, also ensure the outlet box is rated for the location (damp or wet as applicable) per <strong>NEC 314.15</strong>. Use appropriate cable or conduit methods for outdoor runs. GFCI protection may be required depending on the installation location per NEC 210.8.
            </p>

            <h3>Outdoor Fan Wiring Considerations</h3>
            <ul>
              <li>Use UF-B cable for direct burial runs to detached structures (pergolas, gazebos)</li>
              <li>NM-B (Romex) is acceptable in covered, dry portions of the structure only</li>
              <li>Conduit (PVC or rigid) is required for exposed runs</li>
              <li>All outdoor fan circuits should have GFCI protection at the breaker or first receptacle</li>
              <li>Provide weatherproof covers for any associated outdoor switches</li>
            </ul>

            <h2>Common Wiring Mistakes to Avoid</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-3">
                <li>
                  <strong className="text-red-400">Using a non-fan-rated box:</strong> The most dangerous and most common mistake. Always verify the box is listed and marked for fan support per NEC 314.27(C).
                </li>
                <li>
                  <strong className="text-red-400">Connecting fan motor to a dimmer switch:</strong> Standard dimmers are for resistive loads (lights) only. Connecting a fan motor to a dimmer will overheat the dimmer and can damage the motor windings. Use a fan speed control rated for inductive loads.
                </li>
                <li>
                  <strong className="text-red-400">Insufficient box fill:</strong> Ceiling fan boxes&mdash;especially pancake boxes&mdash;have limited volume. Stuffing too many conductors, splices, and device wires into a small box violates NEC 314.16 and creates overheating risk.
                </li>
                <li>
                  <strong className="text-red-400">Missing ground connection to the box:</strong> Both the fan and the metal outlet box must be grounded. A bonding jumper from the box ground screw to the fan mounting bracket ensures the entire assembly is properly grounded.
                </li>
                <li>
                  <strong className="text-red-400">Not supporting the fan during wiring:</strong> Always hang the fan from the included support hook (attached to the mounting bracket) while making wire connections. Never let the fan hang by its wires.
                </li>
                <li>
                  <strong className="text-red-400">Reversing hot and neutral:</strong> Connect black to black, white to white. Reversing polarity can cause the fan to operate unsafely and creates a shock hazard at the pull chain switches.
                </li>
                <li>
                  <strong className="text-red-400">Using drywall screws for box mounting:</strong> Drywall screws are case-hardened and brittle. They snap under dynamic shear loads. Use only wood screws or machine screws as specified by the box manufacturer.
                </li>
                <li>
                  <strong className="text-red-400">Ignoring maximum blade clearance:</strong> Fan blades must be at least 7 feet above the floor. Measure actual clearance after installation&mdash;do not estimate.
                </li>
              </ul>
            </div>

            <h2>NEC Code Reference Summary</h2>
            <p>
              The following NEC articles are most relevant to ceiling fan installations:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">NEC Article</th>
                    <th className="py-2 text-white">Topic</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">314.27(C)</td>
                    <td className="py-2">Outlet boxes for ceiling-suspended fans&mdash;must be listed and marked for fan support</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">314.27(A)</td>
                    <td className="py-2">Outlet boxes for lighting fixtures&mdash;50 lb maximum for standard boxes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">314.16</td>
                    <td className="py-2">Box fill calculations&mdash;volume requirements for conductors and devices</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">314.15</td>
                    <td className="py-2">Damp and wet location box requirements</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">404.2(C)</td>
                    <td className="py-2">Grounded conductor (neutral) required at switch locations</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">404.14(E)</td>
                    <td className="py-2">Fan speed controllers&mdash;must be listed for the application</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">422.18</td>
                    <td className="py-2">Support of ceiling-suspended paddle fans</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-mono">210.12</td>
                    <td className="py-2">AFCI protection requirements for dwelling unit rooms (applies to fan circuits)</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-mono">680.22(B)</td>
                    <td className="py-2">Ceiling fans near pools&mdash;minimum 7.5 ft above max water level, 5 ft horizontal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Installation Checklist</h2>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li>&#9744; Verify outlet box is listed and marked for fan support (NEC 314.27(C))</li>
                <li>&#9744; Confirm box weight rating exceeds fan weight (including light kit)</li>
                <li>&#9744; Check box is secured to structural framing (joist or approved brace)</li>
                <li>&#9744; Verify correct cable type and size (14/2, 14/3, or 12/2, 12/3)</li>
                <li>&#9744; Confirm box fill calculation meets NEC 314.16</li>
                <li>&#9744; Test circuit is de-energized before beginning work</li>
                <li>&#9744; Make all wire connections with appropriate connectors (wire nuts or push-ins)</li>
                <li>&#9744; Bond ground wire to box, mounting bracket, and fan</li>
                <li>&#9744; Hang fan from support hook during wiring&mdash;never by wires</li>
                <li>&#9744; Verify fan blade height is minimum 7 feet above finished floor</li>
                <li>&#9744; Check fan balance and adjust blades if wobbling</li>
                <li>&#9744; Test all speeds and light operation</li>
                <li>&#9744; Verify fan direction (counterclockwise in summer for downdraft)</li>
                <li>&#9744; Confirm AFCI protection on circuit if required (NEC 210.12)</li>
                <li>&#9744; For outdoor fans: verify damp/wet rating matches location</li>
              </ul>
            </div>

            <h2>Troubleshooting Common Issues</h2>

            <h3>Fan Wobble</h3>
            <p>
              Fan wobble is rarely a wiring issue but is the most common callback. Check these mechanical causes first:
            </p>
            <ul>
              <li>Loose blade screws&mdash;tighten all blade-to-bracket and bracket-to-motor screws</li>
              <li>Warped blades&mdash;use a blade balancing kit or replace the affected blade</li>
              <li>Loose mounting bracket&mdash;ensure the bracket screws are tight to the fan box</li>
              <li>Loose brace bar&mdash;if the entire assembly moves, the brace needs tightening or replacement</li>
              <li>Improperly seated canopy ball&mdash;on downrod fans, the ball must seat fully in the bracket socket</li>
            </ul>

            <h3>Fan Hums but Doesn&apos;t Spin</h3>
            <ul>
              <li>Capacitor failure&mdash;the most common electrical cause. The run capacitor in the switch housing provides the phase shift needed for motor starting.</li>
              <li>Seized motor bearings&mdash;try spinning the blades by hand. If there is resistance, the motor needs replacement.</li>
              <li>Incorrect speed switch position&mdash;some speed switches have an &quot;off&quot; position between speeds.</li>
            </ul>

            <h3>Light Works but Fan Doesn&apos;t (or Vice Versa)</h3>
            <ul>
              <li>Check the pull chain switches&mdash;ensure both are in the &quot;on&quot; position</li>
              <li>On 3-wire setups, verify the black and red wires are connected to the correct fan components</li>
              <li>On remote control systems, check receiver wiring&mdash;input vs. output wires may be swapped</li>
              <li>Test for voltage at the fan motor leads with a non-contact voltage tester</li>
            </ul>

            <h2>Pro Tips for Electricians</h2>
            <ul>
              <li><strong>Always recommend 3-wire to the fan box</strong> during new construction or remodels, even if the homeowner hasn&apos;t chosen a fan yet. The minimal additional cost of 14/3 vs. 14/2 saves a significant callback later.</li>
              <li><strong>Leave extra wire in the fan box</strong>&mdash;at least 8&ndash;10 inches of slack. Fan connections happen in a tight space, and extra wire makes the job much easier.</li>
              <li><strong>Use a fan-rated old work brace</strong> for retrofit jobs instead of trying to use the existing light fixture box. The five minutes spent upgrading the box prevents liability issues.</li>
              <li><strong>Label wires clearly</strong> at the switch box: &quot;FAN&quot; on the black conductor, &quot;LIGHT&quot; on the red. This helps the next person working on the circuit.</li>
              <li><strong>Test rotation direction before closing up</strong>&mdash;counterclockwise (looking up) pushes air down for cooling. Many callbacks are simply a fan running in reverse.</li>
              <li><strong>For smart home installations,</strong> confirm the customer&apos;s smart home platform (Alexa, Google Home, Apple HomeKit) before recommending a smart fan switch. Compatibility varies widely between manufacturers.</li>
            </ul>
          </div>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on the App Store</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting — right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://apps.apple.com/us/app/ampora/id6753693522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                    Download on App Store
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
        </article>
      </div>
    </main>
  );
}
