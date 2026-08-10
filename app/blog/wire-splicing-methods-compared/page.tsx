import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Wire Splicing Methods Compared: Wire Nuts vs Wago vs Push-In Connectors",
  description: "Complete comparison of wire splicing methods including wire nuts (twist-on connectors), Wago 221 lever nuts, push-in connectors, crimp connectors, butt splices, and split bolt connectors. Learn proper techniques, UL listing requirements, NEC 110.14 compliance, torque specifications, pull-out testing, and when to use each connector type for residential and commercial electrical work.",
  keywords: [
    "wire splicing methods",
    "wire nuts vs wago",
    "push in wire connectors",
    "wago lever nut",
    "wire nut types",
    "wire splice connectors",
    "best wire connectors",
    "ideal wire nuts",
    "wago 221",
    "in line wire splice"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/wire-splicing-methods-compared",
  },
  openGraph: {
    title: "Wire Splicing Methods Compared: Wire Nuts vs Wago vs Push-In Connectors - Ampora",
    description: "Master wire splicing with this comprehensive comparison of wire nuts, Wago lever nuts, push-in connectors, crimp connectors, and split bolts. NEC code requirements and best practices.",
    url: "https://amporalabs.com/blog/wire-splicing-methods-compared",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Wire splicing connector types: wire nut, Wago lever nut, and push-in connector">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Wire Nut Section */}
      <g transform="translate(30, 25)">
        <text x="50" y="10" textAnchor="middle" fill="#f97316" fontSize="7" fontWeight="bold">WIRE NUT</text>
        {/* Wire nut body - cone shape */}
        <polygon points="30,30 70,30 60,70 40,70" fill="#f97316" fillOpacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
        {/* Ridges on wire nut */}
        <line x1="35" y1="38" x2="65" y2="38" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.5"/>
        <line x1="37" y1="46" x2="63" y2="46" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.5"/>
        <line x1="39" y1="54" x2="61" y2="54" stroke="#f97316" strokeWidth="0.5" strokeOpacity="0.5"/>
        {/* Internal spring */}
        <path d="M45,62 L47,66 L53,64 L55,68" stroke="#9ca3af" strokeWidth="1" fill="none"/>
        {/* Wires coming out bottom */}
        <line x1="45" y1="70" x2="42" y2="100" stroke="#ef4444" strokeWidth="2"/>
        <line x1="50" y1="70" x2="50" y2="100" stroke="#000" strokeWidth="2"/>
        <line x1="55" y1="70" x2="58" y2="100" stroke="#22c55e" strokeWidth="2"/>
        {/* Wire stripping */}
        <line x1="42" y1="85" x2="42" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="50" y1="85" x2="50" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="58" y1="85" x2="58" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <text x="50" y="118" textAnchor="middle" fill="#9ca3af" fontSize="5">Twist-On</text>
        <text x="50" y="126" textAnchor="middle" fill="#9ca3af" fontSize="5">$0.05-0.15 each</text>
      </g>

      {/* Wago Lever Nut Section */}
      <g transform="translate(155, 25)">
        <text x="45" y="10" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold">WAGO 221</text>
        {/* Wago body - rectangular */}
        <rect x="15" y="28" width="60" height="40" rx="3" fill="#22d3ee" fillOpacity="0.2" stroke="#22d3ee" strokeWidth="1.5"/>
        {/* Lever tabs */}
        <rect x="18" y="22" width="12" height="8" rx="1" fill="#f97316" fillOpacity="0.8" stroke="#f97316" strokeWidth="1"/>
        <rect x="39" y="22" width="12" height="8" rx="1" fill="#f97316" fillOpacity="0.8" stroke="#f97316" strokeWidth="1"/>
        <rect x="60" y="22" width="12" height="8" rx="1" fill="#f97316" fillOpacity="0.8" stroke="#f97316" strokeWidth="1"/>
        {/* Transparent window */}
        <rect x="20" y="40" width="50" height="12" rx="1" fill="#22d3ee" fillOpacity="0.1" stroke="#22d3ee" strokeWidth="0.5"/>
        {/* Wire ports */}
        <circle cx="24" cy="46" r="3" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="45" cy="46" r="3" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        <circle cx="66" cy="46" r="3" fill="none" stroke="#9ca3af" strokeWidth="0.5"/>
        {/* Wires coming out bottom */}
        <line x1="24" y1="68" x2="24" y2="100" stroke="#ef4444" strokeWidth="2"/>
        <line x1="45" y1="68" x2="45" y2="100" stroke="#000" strokeWidth="2"/>
        <line x1="66" y1="68" x2="66" y2="100" stroke="#22c55e" strokeWidth="2"/>
        {/* Wire stripping */}
        <line x1="24" y1="82" x2="24" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="45" y1="82" x2="45" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="66" y1="82" x2="66" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <text x="45" y="118" textAnchor="middle" fill="#9ca3af" fontSize="5">Lever Nut</text>
        <text x="45" y="126" textAnchor="middle" fill="#9ca3af" fontSize="5">$0.50-1.00 each</text>
      </g>

      {/* Push-In Connector Section */}
      <g transform="translate(280, 25)">
        <text x="50" y="10" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">PUSH-IN</text>
        {/* Push-in body - compact rectangular */}
        <rect x="20" y="30" width="60" height="35" rx="3" fill="#a78bfa" fillOpacity="0.2" stroke="#a78bfa" strokeWidth="1.5"/>
        {/* Wire entry holes */}
        <circle cx="32" cy="38" r="3.5" fill="#1f2937" stroke="#a78bfa" strokeWidth="0.8"/>
        <circle cx="50" cy="38" r="3.5" fill="#1f2937" stroke="#a78bfa" strokeWidth="0.8"/>
        <circle cx="68" cy="38" r="3.5" fill="#1f2937" stroke="#a78bfa" strokeWidth="0.8"/>
        {/* Internal spring contacts */}
        <path d="M30,48 L34,50 L30,52" stroke="#9ca3af" strokeWidth="0.8" fill="none"/>
        <path d="M48,48 L52,50 L48,52" stroke="#9ca3af" strokeWidth="0.8" fill="none"/>
        <path d="M66,48 L70,50 L66,52" stroke="#9ca3af" strokeWidth="0.8" fill="none"/>
        {/* Release slots */}
        <rect x="28" y="56" width="8" height="3" rx="0.5" fill="#9ca3af" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="46" y="56" width="8" height="3" rx="0.5" fill="#9ca3af" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="0.5"/>
        <rect x="64" y="56" width="8" height="3" rx="0.5" fill="#9ca3af" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="0.5"/>
        {/* Wires coming out bottom */}
        <line x1="32" y1="65" x2="32" y2="100" stroke="#ef4444" strokeWidth="2"/>
        <line x1="50" y1="65" x2="50" y2="100" stroke="#000" strokeWidth="2"/>
        <line x1="68" y1="65" x2="68" y2="100" stroke="#22c55e" strokeWidth="2"/>
        {/* Wire stripping */}
        <line x1="32" y1="82" x2="32" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="50" y1="82" x2="50" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <line x1="68" y1="82" x2="68" y2="100" stroke="#d4d4d4" strokeWidth="1.5"/>
        <text x="50" y="118" textAnchor="middle" fill="#9ca3af" fontSize="5">Stab-In</text>
        <text x="50" y="126" textAnchor="middle" fill="#9ca3af" fontSize="5">$0.20-0.40 each</text>
      </g>

      {/* Comparison arrow labels */}
      <text x="200" y="170" textAnchor="middle" fill="#6b7280" fontSize="5">Wire Splicing Connector Comparison</text>
    </svg>
  );
}

export default function WireSplicingMethodsComparedPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Wire Splicing Methods Compared", url: "https://amporalabs.com/blog/wire-splicing-methods-compared" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Wire Splicing Methods Compared: Wire Nuts vs Wago vs Push-In Connectors"
          description="Complete comparison of wire splicing methods including wire nuts, Wago lever nuts, push-in connectors, crimp connectors, and split bolts with NEC code requirements and proper techniques."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/wire-splicing-methods-compared"
          wordCount={5200}
          keywords={["wire splicing methods", "wire nuts vs wago", "push-in connectors", "wire splice connectors", "NEC 110.14"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Wire Splicing Methods Compared</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/20 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Wire Splicing Methods Compared: Wire Nuts vs Wago vs Push-In Connectors
            </h1>
            <p className="text-xl text-white/70">
              Choosing the right wire splicing connector impacts connection reliability, installation speed, and long-term safety. This guide compares wire nuts (twist-on connectors), Wago 221 lever nuts, push-in connectors, crimp connectors, butt splices, and split bolt connectors &mdash; covering proper techniques, NEC requirements, UL listing, cost, and when to use each type in residential and commercial electrical work.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#types-overview" className="hover:text-purple-400">Types of Wire Splicing Connectors</a></li>
              <li><a href="#wire-nuts" className="hover:text-purple-400">Wire Nuts (Twist-On Connectors)</a></li>
              <li><a href="#wago-lever-nuts" className="hover:text-purple-400">Wago Lever Nuts (221 Series)</a></li>
              <li><a href="#push-in-connectors" className="hover:text-purple-400">Push-In (Stab-In) Connectors</a></li>
              <li><a href="#crimp-connectors" className="hover:text-purple-400">Crimp Connectors and Butt Splices</a></li>
              <li><a href="#split-bolt" className="hover:text-purple-400">Split Bolt Connectors for Larger Wire</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">NEC Requirements (110.14, Junction Boxes)</a></li>
              <li><a href="#torque-pull-testing" className="hover:text-purple-400">Torque and Pull-Out Testing</a></li>
              <li><a href="#reliability-comparison" className="hover:text-purple-400">Reliability Comparison</a></li>
              <li><a href="#cost-comparison" className="hover:text-purple-400">Cost Comparison</a></li>
              <li><a href="#when-to-use" className="hover:text-purple-400">When to Use Each Type</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Mistakes</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="types-overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Types of Wire Splicing Connectors</h2>
              <p className="text-white/80 mb-4">
                Every wire splice in an electrical system must create a connection that is <strong>mechanically secure</strong>, <strong>electrically sound</strong>, and <strong>properly insulated</strong>. The NEC requires that all splices be made with devices identified for the purpose (NEC 110.14(B)) and installed in accessible <Link href="/blog/nec-article-300-wiring-methods" className="text-purple-400 hover:text-purple-300">junction boxes or enclosures</Link>. The connector you choose depends on wire size, number of conductors, environment, and application.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-2">Mechanical Connectors</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Wire nuts (twist-on)</li>
                    <li>Wago lever nuts</li>
                    <li>Push-in connectors</li>
                    <li>Split bolt connectors</li>
                    <li>Set-screw connectors</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/20 rounded-xl p-4 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-2">Crimp Connectors</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Butt splices (insulated)</li>
                    <li>Butt splices (non-insulated)</li>
                    <li>Closed-end crimp caps</li>
                    <li>C-crimp connectors</li>
                    <li>Compression connectors</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-4 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-2">Specialty Connectors</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>In-line splice kits</li>
                    <li>Underground splice kits</li>
                    <li>High-temperature splices</li>
                    <li>Polaris insulated connectors</li>
                    <li>Tap connectors (insulation piercing)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Requirements for All Wire Splices</h4>
                <ul className="text-white/70 space-y-2">
                  <li><strong>UL Listed:</strong> All connectors must be listed by a nationally recognized testing laboratory (UL, CSA, ETL)</li>
                  <li><strong>Proper sizing:</strong> Connector must be rated for the wire gauge(s) and number of conductors being joined</li>
                  <li><strong>Accessible:</strong> All splices must remain accessible after installation (NEC 314.29)</li>
                  <li><strong>Enclosed:</strong> Splices must be made in approved boxes or enclosures (NEC 300.15)</li>
                  <li><strong>Insulated:</strong> The completed splice must be insulated equivalent to the conductor insulation</li>
                </ul>
              </div>
            </section>

            <section id="wire-nuts" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Nuts (Twist-On Connectors)</h2>
              <p className="text-white/80 mb-4">
                <strong>Wire nuts</strong>, also called twist-on connectors, are the most widely used wire splicing method in North American residential and commercial electrical work. They consist of a tapered plastic shell with an internal metal spring insert that threads onto stripped conductor ends, creating a mechanically tight and electrically sound connection.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Wire Nut Color Codes and Sizing</h3>
              <p className="text-white/80 mb-4">
                Wire nuts are color-coded by size, though colors vary slightly between manufacturers. The most common brands are <strong>Ideal</strong> (Wing-Nut, Wire-Nut), <strong>3M</strong> (Performance Plus), and <strong>Gardner Bender</strong>. Always check the manufacturer&apos;s packaging for exact wire combination ratings.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Color</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Range (Typical)</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-gray-400 mr-2 align-middle border border-white/20"></span>Gray</td>
                      <td className="py-3 px-4 font-mono">Small</td>
                      <td className="py-3 px-4">2x #22 to 2x #16 AWG</td>
                      <td className="py-3 px-4 text-white/60">Low-voltage, thermostat, signal wires</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-blue-500 mr-2 align-middle"></span>Blue</td>
                      <td className="py-3 px-4 font-mono">Small</td>
                      <td className="py-3 px-4">2x #22 to 3x #16 AWG</td>
                      <td className="py-3 px-4 text-white/60">Small gauge wire, fixture leads</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-orange-500 mr-2 align-middle"></span>Orange</td>
                      <td className="py-3 px-4 font-mono">Small/Medium</td>
                      <td className="py-3 px-4">2x #18 to 3x #14 AWG</td>
                      <td className="py-3 px-4 text-white/60">Light fixtures, small device connections</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-yellow-400 mr-2 align-middle"></span>Yellow</td>
                      <td className="py-3 px-4 font-mono">Medium</td>
                      <td className="py-3 px-4">2x #18 to 4x #14 AWG</td>
                      <td className="py-3 px-4 text-white/60">General 14 AWG circuits, switches</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-red-500 mr-2 align-middle"></span>Red</td>
                      <td className="py-3 px-4 font-mono">Medium/Large</td>
                      <td className="py-3 px-4">2x #18 to 4x #12 or 2x #10 AWG</td>
                      <td className="py-3 px-4 text-white/60">Standard 12-14 AWG branch circuits</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4"><span className="inline-block w-4 h-4 rounded-full bg-blue-800 mr-2 align-middle"></span>Big Blue/Tan</td>
                      <td className="py-3 px-4 font-mono">Large</td>
                      <td className="py-3 px-4">2x #14 to 4x #10 or 3x #8 AWG</td>
                      <td className="py-3 px-4 text-white/60">Larger circuits, appliance connections</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Proper Wire Nut Installation Technique</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Strip Conductors</p>
                    <p className="text-white/60 text-sm">Strip approximately 3/4 inch of insulation from each conductor. Use the strip gauge on the wire nut packaging if provided. Over-stripping exposes bare copper outside the connector; under-stripping prevents the spring from gripping properly.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Hold Conductors Parallel</p>
                    <p className="text-white/60 text-sm">Hold the stripped ends of all conductors together with the tips even. For different gauge wires, extend the larger wire slightly past the smaller ones so the spring engages both effectively.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Twist Clockwise</p>
                    <p className="text-white/60 text-sm">Place the wire nut over the conductor ends and twist firmly clockwise. The internal spring threads onto the conductors and draws them together. Some manufacturers recommend pre-twisting the conductors with lineman&apos;s pliers before applying the wire nut; others state that pre-twisting is unnecessary with their product. Follow the manufacturer&apos;s instructions.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Verify the Connection</p>
                    <p className="text-white/60 text-sm">Tug on each individual wire to confirm it is securely held. No bare copper should be visible below the wire nut. If the connection feels loose or a wire pulls free, remove the wire nut, re-strip if needed, and reinstall with the next larger size.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Wire Nut Advantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Lowest cost per connection ($0.03&ndash;$0.15)</li>
                    <li>Universally available at every supply house</li>
                    <li>Decades of proven field reliability</li>
                    <li>No special tools required</li>
                    <li>Reusable &mdash; can be removed and reapplied</li>
                    <li>Wide range of sizes for #22 to #8 AWG</li>
                    <li>Accepted by all AHJs without question</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wire Nut Disadvantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Technique-dependent &mdash; improper installation causes failures</li>
                    <li>Can loosen over time with thermal cycling</li>
                    <li>Difficult in cramped boxes with many conductors</li>
                    <li>No visual confirmation of conductor engagement</li>
                    <li>Slower installation than lever-nut connectors</li>
                    <li>Cannot mix solid and stranded wire in all sizes</li>
                    <li>Overtightening can cut conductor strands</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="wago-lever-nuts" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wago Lever Nuts (221 Series)</h2>
              <p className="text-white/80 mb-4">
                <strong>Wago 221 series lever nuts</strong> are compact, tool-free wire connectors that use spring-loaded lever clamps to secure conductors. Originally developed in Germany and widely adopted in European electrical installations, Wago connectors have gained significant popularity in North America for their speed, reliability, and ability to connect both solid and stranded conductors in the same connector.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How Wago 221 Lever Nuts Work</h3>
              <p className="text-white/80 mb-4">
                Each port on a Wago 221 connector has an individual <strong>orange lever</strong> that opens and closes the clamping mechanism. When the lever is raised (open position), the conductor is inserted into the port. When the lever is pushed down (closed position), a stainless steel spring clamp engages the conductor with calibrated force, creating a gas-tight connection. A <strong>transparent housing</strong> allows visual inspection to verify that conductors are fully inserted.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Model</th>
                      <th className="text-left py-3 px-4 text-white/60">Ports</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Range</th>
                      <th className="text-left py-3 px-4 text-white/60">Voltage/Current Rating</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">221-412</td>
                      <td className="py-3 px-4">2-conductor</td>
                      <td className="py-3 px-4">24&ndash;12 AWG (solid/stranded)</td>
                      <td className="py-3 px-4">600V / 20A (UL)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">221-413</td>
                      <td className="py-3 px-4">3-conductor</td>
                      <td className="py-3 px-4">24&ndash;12 AWG (solid/stranded)</td>
                      <td className="py-3 px-4">600V / 20A (UL)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">221-415</td>
                      <td className="py-3 px-4">5-conductor</td>
                      <td className="py-3 px-4">24&ndash;12 AWG (solid/stranded)</td>
                      <td className="py-3 px-4">600V / 20A (UL)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-cyan-400">221-612</td>
                      <td className="py-3 px-4">2-conductor</td>
                      <td className="py-3 px-4">12&ndash;6 AWG (solid/stranded)</td>
                      <td className="py-3 px-4">600V / 41A (UL)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Wago 221 Advantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Tool-free installation &mdash; fastest connection method</li>
                    <li>Transparent body for visual wire-insertion verification</li>
                    <li>Handles solid, stranded, and fine-stranded wire</li>
                    <li>Each port is independent &mdash; easy to add or remove wires</li>
                    <li>Consistent clamping force eliminates technique variation</li>
                    <li>Compact size saves box fill space</li>
                    <li>UL Listed for 600V / 20A in North America</li>
                    <li>Gas-tight connection resists oxidation</li>
                    <li>Rated for 221-6xx series up to 41A and 6 AWG</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wago 221 Disadvantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Higher cost per connection ($0.50&ndash;$1.00 each)</li>
                    <li>Maximum wire size of 12 AWG (standard series)</li>
                    <li>Some AHJs unfamiliar with product &mdash; may question during inspection</li>
                    <li>Not rated for direct burial or wet locations without enclosure</li>
                    <li>Limited maximum number of conductors per unit (2, 3, or 5)</li>
                    <li>Requires precise strip length (11mm / 7/16 in)</li>
                    <li>Counterfeit products exist &mdash; buy from authorized distributors</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Are Wago Connectors Code-Compliant?</h4>
                <p className="text-white/70">
                  Yes. Wago 221 series connectors are <strong>UL 486C Listed</strong> and accepted for use in the United States and Canada. They meet the requirements of NEC 110.14(B) as splicing devices &ldquo;identified for the use.&rdquo; While some inspectors may be less familiar with them than traditional wire nuts, they are fully code-compliant when installed per manufacturer instructions. Keep the UL listing documentation available during inspections if needed.
                </p>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="/get"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="push-in-connectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Push-In (Stab-In) Connectors</h2>
              <p className="text-white/80 mb-4">
                <strong>Push-in connectors</strong> (also called stab-in or port connectors) use internal spring clips that grab conductors when they are pushed into the connector body. Unlike Wago lever nuts, these connectors have no external lever &mdash; the conductor is simply inserted until it locks in place. Common brands include <strong>Ideal In-Sure</strong>, <strong>Wago 773 series</strong>, and various generic products.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-3">Push-In Advantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Very fast installation &mdash; just push wire in</li>
                    <li>No tools required</li>
                    <li>Compact size minimizes box fill</li>
                    <li>Consistent clamping force</li>
                    <li>Lower cost than lever-style connectors</li>
                    <li>Available in 2-port through 8-port models</li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Push-In Disadvantages</h4>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Solid wire only</strong> &mdash; most cannot accept stranded wire</li>
                    <li>Difficult to remove wires (requires release tool or slot)</li>
                    <li>Lower pull-out force than wire nuts or lever nuts</li>
                    <li>Limited wire size range (typically 12&ndash;14 AWG only)</li>
                    <li>Some electricians question long-term reliability</li>
                    <li>Not reusable in many designs after wire removal</li>
                    <li>No visual confirmation of internal contact</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Push-In vs. Back-Stab (Receptacle Back-Wiring)</h4>
                <p className="text-white/70">
                  Push-in wire connectors should not be confused with the <strong>push-in (back-stab) terminals</strong> on receptacles and switches. Back-stab connections on devices are widely criticized for loosening over time and causing arcing. Stand-alone push-in wire connectors (like the Ideal In-Sure or Wago 773) are a different product with higher retention forces and more robust spring mechanisms. That said, many experienced electricians still prefer wire nuts or lever nuts for critical connections.
                </p>
              </div>
            </section>

            <section id="crimp-connectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Crimp Connectors and Butt Splices</h2>
              <p className="text-white/80 mb-4">
                <strong>Crimp connectors</strong> create a permanent mechanical and electrical connection by deforming a metal sleeve around the conductor(s) using a crimping tool. Unlike twist-on or lever connectors, crimp connections are not reusable &mdash; they are permanent splices that must be cut out and replaced if the circuit needs modification.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Types of Crimp Connectors</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Insulated Butt Splices</h4>
                  <p className="text-white/70 text-sm">
                    The most common crimp splice. A metal barrel inside a color-coded insulating sleeve joins two conductors end-to-end. Color codes: <strong>red</strong> (22&ndash;18 AWG), <strong>blue</strong> (16&ndash;14 AWG), <strong>yellow</strong> (12&ndash;10 AWG). Ideal for in-line splices, pigtails, and extending wire runs. Must be crimped with the correct tool &mdash; never use pliers.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Closed-End Crimp Caps (B-Connectors)</h4>
                  <p className="text-white/70 text-sm">
                    Similar to a wire nut in function but creates a permanent crimped connection. A metal sleeve inside a plastic cap is crimped onto the conductor bundle. Commonly used in low-voltage applications (data, telephone, alarm). Not easily reusable.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Heat-Shrink Butt Splices</h4>
                  <p className="text-white/70 text-sm">
                    A butt splice with an adhesive-lined heat-shrink sleeve that, when heated, creates a waterproof, insulated seal around the connection. Excellent for outdoor, underground, or wet-location splices. Requires a heat gun for proper installation.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">C-Crimp and H-Tap Connectors</h4>
                  <p className="text-white/70 text-sm">
                    Heavy-duty crimp connectors for larger conductors (6 AWG and up). C-crimps are used for end-to-end splices, while H-taps create a branch connection without cutting the main conductor. Require hydraulic or manual crimp tools with specific dies matched to the connector and conductor size.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Proper Crimping Technique</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Match the tool to the connector:</strong> Use a ratcheting crimp tool with the correct die for the connector type and size. Never use pliers, vise-grips, or side-cutters to crimp.</li>
                  <li><strong>Strip to the correct length:</strong> The conductor should be visible in the inspection window (if present) and extend to the internal stop.</li>
                  <li><strong>Center the crimp:</strong> Position the crimping die over the center of the barrel for maximum strength.</li>
                  <li><strong>Full ratchet cycle:</strong> Allow ratcheting tools to complete their full cycle before releasing to ensure proper compression.</li>
                  <li><strong>Tug test:</strong> Pull firmly on each conductor after crimping to verify retention.</li>
                </ul>
              </div>
            </section>

            <section id="split-bolt" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Split Bolt Connectors for Larger Wire</h2>
              <p className="text-white/80 mb-4">
                <strong>Split bolt connectors</strong> are used for splicing larger conductors (typically #8 AWG and above) where twist-on connectors are impractical. They consist of a bronze or tin-plated bronze bolt that is split lengthwise, with a nut that compresses the split sections around the conductors. Split bolts are commonly used for service entrance conductors, grounding electrode conductors, and feeder splices.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wire Range</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Insulation Method</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#8 &ndash; #2 AWG</td>
                      <td className="py-3 px-4">Feeder splices, sub-panel taps</td>
                      <td className="py-3 px-4 text-white/60">Rubber tape + vinyl tape (3 layers minimum)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono">#1 &ndash; 4/0 AWG</td>
                      <td className="py-3 px-4">Service entrance, feeder mains</td>
                      <td className="py-3 px-4 text-white/60">Rubber tape + vinyl tape or heat-shrink tubing</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono">250 &ndash; 500 kcmil</td>
                      <td className="py-3 px-4">Large feeders, paralleled conductors</td>
                      <td className="py-3 px-4 text-white/60">Multi-layer rubber + vinyl tape or molded boot</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Split Bolt Insulation Requirements</h4>
                <p className="text-white/70">
                  Split bolt connectors are sold without insulation. Per NEC 110.14(B), completed splices must be insulated equivalent to the conductor insulation. The standard practice is to apply <strong>rubber splicing tape</strong> (such as 3M Scotch 130C) directly over the connector, followed by <strong>vinyl electrical tape</strong> (such as 3M Super 33+) for mechanical protection. Some electricians use <strong>heat-shrink tubing</strong> or <strong>pre-formed insulation boots</strong> for a cleaner, more reliable finish.
                </p>
              </div>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Requirements (110.14, Junction Boxes)</h2>
              <p className="text-white/80 mb-4">
                The National Electrical Code establishes clear requirements for how wire splices must be made, where they can be located, and what materials are acceptable. Understanding these requirements is essential for code-compliant installations and passing inspections.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 110.14 &mdash; Electrical Connections</h4>
                  <p className="text-white/70 text-sm mb-2">
                    This is the primary NEC section governing wire connections and splices:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>110.14(A):</strong> Connections must ensure a &ldquo;thoroughly good&rdquo; connection without damage to the conductors</li>
                    <li><strong>110.14(B):</strong> Splices must use devices &ldquo;identified for the use&rdquo; (UL Listed connectors). Soldering alone is not sufficient &mdash; the connection must be mechanically secure before soldering and must be covered with insulation equivalent to the conductor insulation</li>
                    <li><strong>110.14(C):</strong> Temperature limitations &mdash; conductor terminations must be suitable for the temperature rating of both the conductor and the equipment</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 300.15 &mdash; Boxes Required</h4>
                  <p className="text-white/70 text-sm">
                    All splices, junctions, switches, pull points, and outlets must be enclosed in a box or conduit body identified for the purpose. This means every wire splice must be inside a <Link href="/blog/nec-article-300-wiring-methods" className="text-purple-400 hover:text-purple-300">junction box, outlet box, or conduit body</Link>. The box must remain accessible (NEC 314.29) &mdash; it cannot be buried behind drywall or covered by permanent building materials.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 314.16 &mdash; Box Fill Calculations</h4>
                  <p className="text-white/70 text-sm">
                    Junction boxes must be large enough to accommodate all conductors, devices, clamps, and fittings. Each conductor counts toward the box fill calculation. Oversized wire nuts and bulky connectors can make it physically difficult to fit everything in the box even when calculations are met. Compact connectors like Wago 221 can help in tight boxes.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 110.3(B) &mdash; Listed Equipment</h4>
                  <p className="text-white/70 text-sm">
                    All connectors must be installed per their listing and manufacturer&apos;s instructions. This means using the correct wire size range, number of conductors, strip length, and installation method specified by the manufacturer. Using a connector outside its listed parameters is a code violation.
                  </p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Prohibited Splicing Methods</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Electrical tape alone:</strong> Wrapping wires together with tape is never an acceptable splice method. The connection must use a listed device.</li>
                  <li><strong>Wire nuts on stranded wire (if not rated):</strong> Some wire nuts are rated for solid wire only. Check the listing.</li>
                  <li><strong>Oversized/undersized connectors:</strong> Using a connector outside its listed wire combination range is a code violation and creates unsafe connections.</li>
                  <li><strong>Splices outside boxes:</strong> Splices in walls, attics, or crawl spaces without a proper enclosure violate NEC 300.15.</li>
                  <li><strong>Solder-only joints:</strong> NEC 110.14(B) requires that soldered splices be mechanically secure first, and solder alone shall not be depended upon for mechanical support.</li>
                </ul>
              </div>
            </section>

            <section id="torque-pull-testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Torque and Pull-Out Testing</h2>
              <p className="text-white/80 mb-4">
                The reliability of any wire splice depends on the <strong>contact force</strong> between the connector and conductor. UL tests connectors for pull-out strength, current-carrying capacity, and temperature rise. Understanding these tests helps you evaluate different connector types objectively.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Connector Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Pull-Out Force (12 AWG)</th>
                      <th className="text-left py-3 px-4 text-white/60">Connection Mechanism</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wire nut (properly installed)</td>
                      <td className="py-3 px-4 font-mono text-green-400">25&ndash;35 lbs</td>
                      <td className="py-3 px-4 text-white/60">Spring coil threads onto twisted conductors</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wago 221 lever nut</td>
                      <td className="py-3 px-4 font-mono text-green-400">20&ndash;30 lbs</td>
                      <td className="py-3 px-4 text-white/60">Stainless steel spring clamp, calibrated force</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Push-in connector</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">12&ndash;20 lbs</td>
                      <td className="py-3 px-4 text-white/60">Spring tab grabs conductor surface</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Crimp butt splice</td>
                      <td className="py-3 px-4 font-mono text-green-400">30&ndash;50 lbs</td>
                      <td className="py-3 px-4 text-white/60">Permanent mechanical deformation of barrel</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Split bolt (torqued)</td>
                      <td className="py-3 px-4 font-mono text-green-400">High (bolt compression)</td>
                      <td className="py-3 px-4 text-white/60">Bolt compression with wrench torque</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">UL 486C Testing Requirements</h4>
                <p className="text-white/70 mb-3 text-sm">
                  UL 486C (Standard for Splicing Wire Connectors) is the standard that wire nuts, lever connectors, and push-in connectors must meet. Key tests include:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Pull-out test:</strong> Each conductor must withstand a minimum pull force without disengaging</li>
                  <li><strong>Temperature cycling:</strong> Connectors are subjected to repeated heating and cooling cycles at rated current to verify that connections remain secure over time</li>
                  <li><strong>Current overload:</strong> Connectors must handle overcurrent conditions (typically 150% of rated current) without failure</li>
                  <li><strong>Dielectric voltage withstand:</strong> The insulating shell must withstand the rated voltage without breakdown</li>
                  <li><strong>Aging test:</strong> Accelerated aging tests verify long-term reliability under sustained load</li>
                </ul>
              </div>
            </section>

            <section id="reliability-comparison" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Reliability Comparison</h2>
              <p className="text-white/80 mb-4">
                The long-term reliability of a wire splice depends on the connector type, installation quality, and environmental conditions. Here is a practical reliability assessment based on field experience, UL testing data, and failure mode analysis:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Factor</th>
                      <th className="text-left py-3 px-4 text-white/60">Wire Nut</th>
                      <th className="text-left py-3 px-4 text-white/60">Wago 221</th>
                      <th className="text-left py-3 px-4 text-white/60">Push-In</th>
                      <th className="text-left py-3 px-4 text-white/60">Crimp</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white/60">Initial contact quality</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Varies</td>
                      <td className="py-3 px-4 font-mono text-green-400">Consistent</td>
                      <td className="py-3 px-4 font-mono text-green-400">Consistent</td>
                      <td className="py-3 px-4 font-mono text-green-400">Consistent</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white/60">Thermal cycling resistance</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Good</td>
                      <td className="py-3 px-4 font-mono text-green-400">Excellent</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Fair</td>
                      <td className="py-3 px-4 font-mono text-green-400">Excellent</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white/60">Vibration resistance</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Fair</td>
                      <td className="py-3 px-4 font-mono text-green-400">Good</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Fair</td>
                      <td className="py-3 px-4 font-mono text-green-400">Excellent</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white/60">Installer error risk</td>
                      <td className="py-3 px-4 font-mono text-red-400">Higher</td>
                      <td className="py-3 px-4 font-mono text-green-400">Lower</td>
                      <td className="py-3 px-4 font-mono text-green-400">Lower</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Moderate</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 text-white/60">Oxidation resistance</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Good</td>
                      <td className="py-3 px-4 font-mono text-green-400">Excellent</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">Good</td>
                      <td className="py-3 px-4 font-mono text-green-400">Very Good</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-white/60">Long-term track record</td>
                      <td className="py-3 px-4 font-mono text-green-400">60+ years</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">10+ years (US)</td>
                      <td className="py-3 px-4 font-mono text-yellow-400">15+ years</td>
                      <td className="py-3 px-4 font-mono text-green-400">50+ years</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Key Takeaway: Installation Quality Matters Most</h4>
                <p className="text-white/70">
                  The single biggest factor in splice reliability is <strong>proper installation</strong>, not the connector brand or type. A poorly installed wire nut (wrong size, under-tightened, bare copper exposed) will fail long before a properly installed one. Wago and push-in connectors reduce the human-error variable by providing consistent clamping force regardless of the installer, which is their primary reliability advantage over wire nuts in large-scale commercial installations where hundreds of connections are made by crews of varying skill levels.
                </p>
              </div>
            </section>

            <section id="cost-comparison" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost Comparison</h2>
              <p className="text-white/80 mb-4">
                The cost of wire connectors involves both <strong>material cost per unit</strong> and <strong>labor cost per connection</strong>. While lever connectors cost significantly more per piece, their faster installation time can offset the material premium on large jobs.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Connector</th>
                      <th className="text-left py-3 px-4 text-white/60">Unit Cost</th>
                      <th className="text-left py-3 px-4 text-white/60">Install Time</th>
                      <th className="text-left py-3 px-4 text-white/60">Labor Cost (@ $75/hr)</th>
                      <th className="text-left py-3 px-4 text-white/60">Total per Connection</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wire nut (Red)</td>
                      <td className="py-3 px-4 font-mono">$0.08</td>
                      <td className="py-3 px-4 font-mono">30&ndash;45 sec</td>
                      <td className="py-3 px-4 font-mono">$0.63&ndash;$0.94</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$0.71&ndash;$1.02</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Wago 221-413</td>
                      <td className="py-3 px-4 font-mono">$0.65</td>
                      <td className="py-3 px-4 font-mono">10&ndash;15 sec</td>
                      <td className="py-3 px-4 font-mono">$0.21&ndash;$0.31</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$0.86&ndash;$0.96</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Push-in (Ideal In-Sure)</td>
                      <td className="py-3 px-4 font-mono">$0.25</td>
                      <td className="py-3 px-4 font-mono">10&ndash;15 sec</td>
                      <td className="py-3 px-4 font-mono">$0.21&ndash;$0.31</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$0.46&ndash;$0.56</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Crimp butt splice</td>
                      <td className="py-3 px-4 font-mono">$0.15</td>
                      <td className="py-3 px-4 font-mono">20&ndash;30 sec</td>
                      <td className="py-3 px-4 font-mono">$0.42&ndash;$0.63</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">$0.57&ndash;$0.78</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Cost Analysis Summary</h4>
                <p className="text-white/70 mb-3">
                  When labor is factored in, the total installed cost of Wago 221 lever nuts is comparable to wire nuts. On a residential project with 200&ndash;400 wire connections, the material premium for Wagos adds roughly $120&ndash;$250 in materials, but the labor savings from faster installation can offset most or all of that premium.
                </p>
                <p className="text-white/70">
                  For contractors bidding large commercial projects with thousands of connections, the labor savings from lever connectors can produce a <strong>net cost reduction</strong> despite the higher material cost. The reduced callback rate from fewer loose connections also factors into the long-term cost calculation.
                </p>
              </div>
            </section>

            <section id="when-to-use" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Use Each Type</h2>
              <p className="text-white/80 mb-4">
                Different splicing methods have different strengths. Here are recommended applications for each <Link href="/blog/electrical-connector-types-guide" className="text-purple-400 hover:text-purple-300">connector type</Link> based on the specific situation:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">Wire Nuts &mdash; Best For</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>General residential branch circuits:</strong> 14 and 12 AWG connections in outlet, switch, and junction boxes</li>
                    <li><strong>Budget-conscious projects:</strong> When material cost is the primary concern</li>
                    <li><strong>Temporary connections:</strong> Quick splice-and-test during troubleshooting</li>
                    <li><strong>Mixed-gauge splices:</strong> Connecting 14 AWG to 12 AWG pigtails where specific combinations are listed</li>
                    <li><strong>High-confidence installations:</strong> When the installer is experienced and meticulous about technique</li>
                  </ul>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Wago 221 Lever Nuts &mdash; Best For</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Crowded junction boxes:</strong> Compact size maximizes usable space</li>
                    <li><strong>Mixed solid/stranded connections:</strong> Handles both wire types in the same connector</li>
                    <li><strong>Large commercial projects:</strong> Faster installation saves labor on hundreds of connections</li>
                    <li><strong>Connections that may need modification:</strong> Easy to open, disconnect, and reconnect</li>
                    <li><strong>Quality-critical installations:</strong> Consistent clamping force reduces the risk of poor connections</li>
                    <li><strong>Fixture connections:</strong> Where fine-stranded fixture leads meet solid branch-circuit wires</li>
                  </ul>
                </div>

                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Push-In Connectors &mdash; Best For</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>High-volume new construction:</strong> When maximum speed is needed on solid-wire-only installations</li>
                    <li><strong>Lighting circuits:</strong> Multiple 14 AWG solid connections in lighting junction boxes</li>
                    <li><strong>Simple 2-wire splices:</strong> Quick pigtail connections where stranded wire is not involved</li>
                  </ul>
                </div>

                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Crimp Connectors &mdash; Best For</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>In-line splices:</strong> Where wires are joined end-to-end (not in a box with multiple branches)</li>
                    <li><strong>Outdoor and wet locations:</strong> Heat-shrink butt splices provide waterproof seals</li>
                    <li><strong>Automotive and low-voltage:</strong> Standard practice for vehicle and low-voltage wiring</li>
                    <li><strong>Permanent connections:</strong> Where the splice will never need to be modified</li>
                    <li><strong>Vibration environments:</strong> Crimps resist vibration-induced loosening better than mechanical connectors</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-3">Split Bolts &mdash; Best For</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li><strong>Large gauge wire (6 AWG and above):</strong> Where wire nuts and lever connectors are not available</li>
                    <li><strong>Service entrance splices:</strong> Connecting service entrance conductors in pull boxes</li>
                    <li><strong>Grounding electrode conductor splices:</strong> Where accessible and properly taped</li>
                    <li><strong>Feeder taps:</strong> Tapping off main feeders for sub-panel connections</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Mistakes</h2>
              <p className="text-white/80 mb-4">
                Wire splicing errors are a leading cause of electrical failures, arcing, and fires. Here are the most common mistakes electricians and DIYers make when splicing wires:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Size Connector</h4>
                  <p className="text-white/60 text-sm">
                    Using a wire nut that is too small or too large for the conductor combination. An undersized wire nut won&apos;t grip properly; an oversized one allows wires to pull out. Always check the manufacturer&apos;s wire combination chart on the packaging.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exposed Bare Copper</h4>
                  <p className="text-white/60 text-sm">
                    Over-stripping conductors so that bare copper is visible below the wire nut. This creates a short-circuit and shock hazard. If bare copper is visible, remove the connector, trim the conductors, and reinstall.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Under-Tightened Wire Nuts</h4>
                  <p className="text-white/60 text-sm">
                    Not twisting the wire nut enough to fully engage the spring. A loose wire nut will vibrate free over time, creating a high-resistance connection that generates heat and can arc. The connection should require firm effort to pull apart.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Splices Outside Junction Boxes</h4>
                  <p className="text-white/60 text-sm">
                    Making wire splices in walls, ceilings, attics, or crawl spaces without enclosing them in a junction box. This is a clear NEC violation (300.15) and a serious fire hazard. Every splice must be in an accessible, enclosed box.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Taping Over Wire Nuts</h4>
                  <p className="text-white/60 text-sm">
                    Wrapping electrical tape around a wire nut is unnecessary and can mask a poor connection. If the wire nut is properly sized and installed, it does not need tape. If it won&apos;t stay on without tape, it is the wrong size or improperly installed.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Wrong Strip Length for Wago</h4>
                  <p className="text-white/60 text-sm">
                    Wago 221 connectors require an 11mm (7/16 in) strip length. Too short and the conductor won&apos;t reach the contact; too long and bare wire protrudes from the connector. Use the built-in strip gauge on the connector body.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Crimping with Pliers</h4>
                  <p className="text-white/60 text-sm">
                    Using pliers, side-cutters, or hammers to crimp connectors instead of a proper ratcheting crimp tool. Pliers cannot produce the uniform compression needed for a reliable electrical connection. The result is a high-resistance joint that overheats.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Counterfeit Connectors</h4>
                  <p className="text-white/60 text-sm">
                    Purchasing cheap counterfeit Wago or Ideal connectors from unauthorized sellers. Counterfeit products may bear fake UL marks and use inferior materials that fail under load. Buy only from authorized electrical distributors.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Are Wago connectors better than wire nuts?</h3>
                  <p className="text-white/70 text-sm">
                    Neither is categorically better &mdash; each has advantages depending on the application. Wago 221 lever nuts offer faster installation, more consistent connections, and the ability to mix solid and stranded wire. Wire nuts are cheaper, have a longer track record in the U.S., and are universally accepted by all inspectors. Both are UL Listed and code-compliant when properly installed. For most residential and commercial applications, either choice will provide reliable, long-lasting connections.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use push-in connectors with stranded wire?</h3>
                  <p className="text-white/70 text-sm">
                    Most standard push-in connectors (like the Wago 773 series) are rated for <strong>solid wire only</strong>. The internal spring mechanism requires the rigidity of solid conductors to function properly. Stranded wire can fold and bypass the spring contact, resulting in a poor or failed connection. If you need to connect stranded wire, use Wago 221 lever nuts, which are specifically listed for both solid and stranded conductors.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need to pre-twist wires before using a wire nut?</h3>
                  <p className="text-white/70 text-sm">
                    This depends on the manufacturer. <strong>Ideal</strong> recommends pre-twisting conductors with lineman&apos;s pliers before applying their standard wire nuts. <strong>3M</strong> and some other manufacturers state that pre-twisting is unnecessary with their products. Pre-twisting creates a more secure mechanical bond, but over-twisting can damage conductors. When in doubt, follow the specific manufacturer&apos;s instructions printed on the packaging.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How many wires can I put in one wire nut?</h3>
                  <p className="text-white/70 text-sm">
                    The maximum number of wires depends on the wire nut size and the gauge of each conductor. Every wire nut package lists the approved wire combinations (minimum and maximum). Common examples: a yellow wire nut typically handles 2 to 4 wires of 14 AWG; a red wire nut handles 2 to 4 wires of 12&ndash;14 AWG. Never exceed the listed combinations &mdash; this is a code violation per NEC 110.3(B).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Are wire splices allowed in walls without a junction box?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>No.</strong> NEC 300.15 requires that all splices be enclosed in a box or conduit body. NEC 314.29 further requires that all boxes be accessible without removing building materials. A splice buried in a wall without an accessible junction box is a code violation and a potential fire hazard. If you need to splice wires in a wall, install an accessible junction box with a blank cover plate.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I reuse Wago 221 connectors?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Wago 221 lever nuts are designed to be opened and closed multiple times. Simply raise the lever to release the conductor, remove it, and insert a new conductor. Wago states that the spring mechanism maintains its performance through multiple reuse cycles. This is one of the advantages of lever nuts over crimp connectors, which are permanent and single-use.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What is the best connector for underground wire splices?</h3>
                  <p className="text-white/70 text-sm">
                    For direct-burial underground splices, use a <strong>UL Listed underground splice kit</strong> that includes a waterproof encapsulant (gel-filled or resin-filled). Common products include 3M DBR/Y-6 direct-bury splice kits and similar gel-filled connectors. Standard wire nuts, Wagos, and open crimp connectors are <strong>not rated for direct burial</strong> unless enclosed in a rated underground junction box. Heat-shrink butt splices with adhesive lining can work for small conductors in conduit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What size Wago do I need for 10 AWG wire?</h3>
                  <p className="text-white/70 text-sm">
                    The standard Wago 221-4xx series is rated for 24&ndash;12 AWG only and <strong>cannot accept 10 AWG wire</strong>. For 10 AWG and larger (up to 6 AWG), you need the <strong>Wago 221-6xx series</strong> (such as the 221-612 or 221-613). These larger lever nuts are rated for 600V / 41A and handle both solid and stranded conductors from 12 AWG through 6 AWG.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA Section */}
            <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-purple-500/20">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full mb-4">
                  <span className="text-sm text-white/80">&#9733; Free on iOS &amp; Android</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Your Electrical Reference, Powered by AI
                </h2>
                <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="/get"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
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
                <Link href="/blog/electrical-connector-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Connector Types Guide</h3>
                </Link>
                <Link href="/blog/electrical-wire-color-code-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Wire Color Code Guide</h3>
                </Link>
                <Link href="/blog/nec-article-300-wiring-methods" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 300: Wiring Methods</h3>
                </Link>
                <Link href="/blog/nec-junction-box-rules-314" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Junction Box Rules (Article 314)</h3>
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
