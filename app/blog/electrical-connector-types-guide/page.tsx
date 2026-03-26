import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Connectors & Terminals: Types, Uses & Best Practices",
  description: "Complete guide to electrical connectors and terminals including wire nuts, crimp terminals, lugs, split bolts, compression connectors, and push-in connectors. Learn NEC 110.14 requirements, torque specs, temperature ratings, and best practices for reliable connections.",
  keywords: [
    "electrical connectors",
    "wire nuts",
    "crimp terminals",
    "split bolt connectors",
    "compression connectors",
    "push-in connectors",
    "electrical lugs",
    "NEC 110.14",
    "terminal temperature ratings",
    "aluminum to copper connections",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-connector-types-guide",
  },
  openGraph: {
    title: "Electrical Connectors & Terminals: Types, Uses & Best Practices - Ampora",
    description: "Complete guide to electrical connectors and terminals with NEC requirements, torque specs, and best practices.",
    url: "https://amporalabs.com/blog/electrical-connector-types-guide",
    type: "article",
    publishedTime: "2025-04-28",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Electrical connector types illustration showing wire nuts, lugs, crimp terminals, and split bolts">
      {/* Wire nut */}
      <g transform="translate(60, 70)">
        <path d="M-8,20 L-14,-5 Q-14,-18 0,-20 Q14,-18 14,-5 L8,20 Z" fill="#f97316" stroke="#fb923c" strokeWidth="1.5"/>
        <line x1="-3" y1="20" x2="-5" y2="40" stroke="#b87333" strokeWidth="2"/>
        <line x1="3" y1="20" x2="5" y2="40" stroke="#b87333" strokeWidth="2"/>
        <path d="M-10,0 Q0,-3 10,0" fill="none" stroke="#fdba74" strokeWidth="0.8"/>
        <path d="M-12,6 Q0,3 12,6" fill="none" stroke="#fdba74" strokeWidth="0.8"/>
        <text x="0" y="58" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Wire Nut</text>
      </g>

      {/* Crimp terminal (ring) */}
      <g transform="translate(150, 70)">
        <circle cx="0" cy="-12" r="10" fill="none" stroke="#3b82f6" strokeWidth="3"/>
        <circle cx="0" cy="-12" r="5" fill="#111827"/>
        <rect x="-6" y="-2" width="12" height="28" rx="2" fill="#3b82f6" stroke="#60a5fa" strokeWidth="1"/>
        <rect x="-4" y="8" width="8" height="16" rx="1" fill="#1e3a5f"/>
        <line x1="0" y1="26" x2="0" y2="44" stroke="#b87333" strokeWidth="2.5"/>
        <text x="0" y="58" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Crimp Lug</text>
      </g>

      {/* Split bolt */}
      <g transform="translate(240, 70)">
        <rect x="-14" y="-10" width="28" height="30" rx="3" fill="#6b7280" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="-4" y="-16" width="8" height="8" rx="1" fill="#4b5563" stroke="#9ca3af" strokeWidth="1"/>
        <line x1="0" y1="-16" x2="0" y2="-20" stroke="#9ca3af" strokeWidth="2"/>
        <line x1="-14" y1="5" x2="-28" y2="5" stroke="#b87333" strokeWidth="3"/>
        <line x1="14" y1="5" x2="28" y2="5" stroke="#b87333" strokeWidth="3"/>
        <path d="M-10,-4 L10,-4" fill="none" stroke="#4b5563" strokeWidth="1"/>
        <path d="M-10,14 L10,14" fill="none" stroke="#4b5563" strokeWidth="1"/>
        <text x="0" y="38" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Split Bolt</text>
        <text x="0" y="50" textAnchor="middle" fill="#9ca3af" fontSize="6">Connector</text>
      </g>

      {/* Push-in connector (Wago style) */}
      <g transform="translate(340, 70)">
        <rect x="-18" y="-14" width="36" height="28" rx="3" fill="#f97316" fillOpacity="0.3" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="-14" y="-8" width="8" height="6" rx="1" fill="#fb923c"/>
        <rect x="-2" y="-8" width="8" height="6" rx="1" fill="#fb923c"/>
        <rect x="10" y="-8" width="8" height="6" rx="1" fill="#fb923c"/>
        <line x1="-10" y1="14" x2="-10" y2="34" stroke="#b87333" strokeWidth="1.5"/>
        <line x1="2" y1="14" x2="2" y2="34" stroke="#b87333" strokeWidth="1.5"/>
        <line x1="14" y1="14" x2="14" y2="34" stroke="#b87333" strokeWidth="1.5"/>
        <text x="0" y="48" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Push-In</text>
        <text x="0" y="60" textAnchor="middle" fill="#9ca3af" fontSize="6">Connector</text>
      </g>

      {/* Title bar */}
      <rect x="80" y="2" width="240" height="22" rx="4" fill="#f97316" fillOpacity="0.2" stroke="#f97316"/>
      <text x="200" y="17" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">Electrical Connector Types</text>
    </svg>
  );
}

export default function ElectricalConnectorTypesGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Connector Types Guide", url: "https://amporalabs.com/blog/electrical-connector-types-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Connectors &amp; Terminals: Types, Uses &amp; Best Practices"
          description="Complete guide to electrical connectors and terminals including wire nuts, crimp terminals, lugs, split bolts, compression connectors, and push-in connectors."
          datePublished="2025-04-28"
          dateModified="2025-04-28"
          url="https://amporalabs.com/blog/electrical-connector-types-guide"
          wordCount={3800}
          keywords={["electrical connectors", "wire nuts", "crimp terminals", "split bolt connectors", "compression connectors", "NEC 110.14", "torque specifications"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Connector Types Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">April 28, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Connectors &amp; Terminals: Types, Uses &amp; Best Practices
            </h1>
            <p className="text-xl text-white/70">
              Every electrical connection is a potential point of failure. Understanding the right connector for each application&mdash;and installing it correctly&mdash;is what separates reliable work from callbacks. This guide covers every major connector type, NEC requirements, and the best practices that keep connections tight for decades.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#wire-nuts" className="hover:text-purple-400">&#8594; Wire Nuts (Twist-On Connectors)</a></li>
              <li><a href="#push-in" className="hover:text-purple-400">&#8594; Push-In Connectors (Wago Style)</a></li>
              <li><a href="#crimp-terminals" className="hover:text-purple-400">&#8594; Crimp Terminals &amp; Lugs</a></li>
              <li><a href="#split-bolt" className="hover:text-purple-400">&#8594; Split Bolt Connectors</a></li>
              <li><a href="#compression" className="hover:text-purple-400">&#8594; Compression Connectors</a></li>
              <li><a href="#emt-connectors" className="hover:text-purple-400">&#8594; Set Screw vs Compression EMT Connectors</a></li>
              <li><a href="#terminal-blocks" className="hover:text-purple-400">&#8594; Terminal Blocks &amp; Bus Bars</a></li>
              <li><a href="#al-cu" className="hover:text-purple-400">&#8594; Aluminum-to-Copper Connections</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">&#8594; NEC Requirements for Connections (110.14)</a></li>
              <li><a href="#temperature-ratings" className="hover:text-purple-400">&#8594; Temperature Ratings of Terminals</a></li>
              <li><a href="#torque" className="hover:text-purple-400">&#8594; Torque Specifications</a></li>
              <li><a href="#listed-vs-unlisted" className="hover:text-purple-400">&#8594; Listed vs Unlisted Connectors</a></li>
              <li><a href="#failures" className="hover:text-purple-400">&#8594; Common Connection Failures &amp; Causes</a></li>
              <li><a href="#best-practices" className="hover:text-purple-400">&#8594; Best Practices for Reliable Connections</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="wire-nuts" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wire Nuts (Twist-On Connectors)</h2>
              <p className="text-white/80 mb-4">
                Wire nuts&mdash;technically called twist-on wire connectors&mdash;are the most common connector in residential and light commercial wiring. They consist of a thermoplastic shell with a tapered, threaded copper spring insert that grips stripped conductors when twisted clockwise.
              </p>
              <p className="text-white/80 mb-4">
                Wire nuts are sized by conductor combination. Using the wrong size is one of the most frequent installation errors. An undersized wire nut won&apos;t grip properly; an oversized one will allow conductors to pull free.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Color Code</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Min Conductors</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Conductors</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-gray-400">Gray</td>
                      <td className="py-3 px-4">Small</td>
                      <td className="py-3 px-4">2x #22 AWG</td>
                      <td className="py-3 px-4">2x #16 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">Blue</td>
                      <td className="py-3 px-4">Small-Medium</td>
                      <td className="py-3 px-4">2x #22 AWG</td>
                      <td className="py-3 px-4">3x #16 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-orange-400">Orange</td>
                      <td className="py-3 px-4">Medium</td>
                      <td className="py-3 px-4">2x #18 AWG</td>
                      <td className="py-3 px-4">4x #14 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">Yellow</td>
                      <td className="py-3 px-4">Medium-Large</td>
                      <td className="py-3 px-4">2x #18 AWG</td>
                      <td className="py-3 px-4">4x #12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-red-400">Red</td>
                      <td className="py-3 px-4">Large</td>
                      <td className="py-3 px-4">2x #14 AWG</td>
                      <td className="py-3 px-4">4x #10 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-blue-300">Tan/Big Blue</td>
                      <td className="py-3 px-4">Extra Large</td>
                      <td className="py-3 px-4">2x #10 AWG</td>
                      <td className="py-3 px-4">3x #6 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Important: Color Codes Vary by Manufacturer</h3>
                <p className="text-white/70 text-sm">
                  The color codes above are common industry conventions, but they are not standardized by UL or NEC. Always check the manufacturer&apos;s packaging for the specific conductor combination chart. Ideal, 3M, and Gardner Bender each have slightly different size ranges for the same color shell.
                </p>
              </div>
              <p className="text-white/80 mb-4">
                When installing wire nuts, strip conductors to the length recommended by the manufacturer (typically 5/8&quot; to 3/4&quot;). Hold the conductors parallel with their ends even, then twist the wire nut clockwise firmly until the assembly is tight and no bare copper is visible below the shell. A gentle tug on each conductor verifies a secure connection.
              </p>
              <p className="text-white/80">
                Wire nuts are rated for use with copper conductors. Some models are specifically listed for aluminum-to-copper connections&mdash;these include anti-oxidant compound pre-loaded in the shell and are marked &quot;AL/CU&quot; on the packaging.
              </p>
            </section>

            <section id="push-in" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Push-In Connectors (Wago Style)</h2>
              <p className="text-white/80 mb-4">
                Lever-actuated push-in connectors, popularized by Wago (and now offered by Ideal, Polaris, and others), have become increasingly common in commercial and residential work. These connectors feature individual ports with spring-loaded clamps that grip stripped conductors when inserted.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Advantages</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Faster installation than wire nuts</li>
                    <li>&#8226; No twisting or special tools required</li>
                    <li>&#8226; Each wire is independently removable</li>
                    <li>&#8226; Clear housing allows visual inspection</li>
                    <li>&#8226; Consistent connection quality regardless of installer skill</li>
                    <li>&#8226; Test ports on some models for voltage testing</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Limitations</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Higher cost per connection than wire nuts</li>
                    <li>&#8226; Limited to solid or stranded conductors per listing</li>
                    <li>&#8226; Maximum conductor size typically #10 AWG</li>
                    <li>&#8226; Not suitable for high-vibration environments</li>
                    <li>&#8226; Some inspectors unfamiliar with newer models</li>
                    <li>&#8226; Require precise strip length for proper insertion</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                Wago 221 Series lever connectors are among the most popular. They accept solid and stranded conductors from #24 to #10 AWG and are rated for 600V, 20A (with appropriate conductor sizing). The transparent housing makes it easy to verify that each conductor is fully inserted to the strip gauge.
              </p>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Pro Tip: Strip Length Matters</h3>
                <p className="text-white/70 text-sm">
                  Push-in connectors require a precise strip length&mdash;typically 11mm (7/16&quot;) for Wago 221 models. Most push-in connectors include a strip gauge molded into the body. Under-stripped wires won&apos;t engage the clamp properly; over-stripped wires leave exposed copper outside the connector.
                </p>
              </div>
            </section>

            <section id="crimp-terminals" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Crimp Terminals and Lugs</h2>
              <p className="text-white/80 mb-4">
                Crimp connectors use mechanical deformation to create a gas-tight connection between a terminal and a conductor. They are available in a wide range of styles including ring terminals, spade terminals, butt splices, pin terminals, and large cable lugs.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Ring Terminals</p>
                  <p className="text-white/60 text-sm mt-1">Circular tongue that fits around a screw or stud. The most secure mechanical terminal&mdash;the conductor cannot pull free even if the screw loosens slightly. Required by many equipment manufacturers for ground connections. Available from #22 AWG through 750 kcmil.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Spade (Fork) Terminals</p>
                  <p className="text-white/60 text-sm mt-1">Open-ended U-shape that slides under a screw without removing it completely. Faster to install than ring terminals but can slip off if the screw loosens. Best used where vibration is minimal and maintenance access is needed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Butt Splices</p>
                  <p className="text-white/60 text-sm mt-1">Inline splice connectors that join two conductors end-to-end. Available insulated and uninsulated. Heat-shrink butt splices provide moisture protection for damp or outdoor locations. For NEC-compliant splices, the connector must be listed and the splice must be accessible (NEC 300.15).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Mechanical Lugs (Set Screw)</p>
                  <p className="text-white/60 text-sm mt-1">Used for larger conductors (#8 AWG and above). The conductor inserts into a barrel and is secured by one or more set screws tightened to a specific torque value. Common at panel bus bars, disconnects, and equipment terminations. Must be torqued to manufacturer specifications.</p>
                </div>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">Crimp Tool Selection</h3>
                <p className="text-white/70 text-sm">
                  Using the correct crimp tool is critical. Insulated terminal crimpers have color-coded dies matching the terminal insulation: red for #22&ndash;#18, blue for #16&ndash;#14, and yellow for #12&ndash;#10. For large lugs (#8 AWG and above), use a calibrated ratcheting crimper or hydraulic crimper matched to the lug manufacturer&apos;s specifications. Never crimp lugs with pliers&mdash;this creates a weak, non-conforming connection that will eventually fail.
                </p>
              </div>
            </section>

            <section id="split-bolt" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Split Bolt Connectors</h2>
              <p className="text-white/80 mb-4">
                Split bolt connectors are used to tap or splice larger conductors, typically #6 AWG through 750 kcmil. They consist of a machined bronze or tin-plated body with a bolt that clamps two parallel conductors together in a groove.
              </p>
              <p className="text-white/80 mb-4">
                Split bolts are widely used for grounding connections, neutral taps, and service entrance splices. When used for insulated conductors, the connection must be taped with a minimum of two layers of electrical tape (or heat-shrink) to restore the insulation equivalent to the conductor insulation.
              </p>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Split Bolt Installation Best Practices</h3>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>&#8226; Clean all conductor surfaces with a wire brush before installing</li>
                  <li>&#8226; Apply anti-oxidant compound to aluminum conductors</li>
                  <li>&#8226; Position conductors parallel in the groove with ends staggered slightly</li>
                  <li>&#8226; Tighten the bolt firmly until the conductors are compressed but not nicked or damaged</li>
                  <li>&#8226; Tape the completed splice starting beyond the insulation on one side, wrapping to the other, then back&mdash;minimum 3 layers</li>
                  <li>&#8226; Select the correct split bolt size for the conductor combination</li>
                </ul>
              </div>
              <p className="text-white/80">
                Split bolts are being phased out on many jobs in favor of mechanical or compression taps, which offer more consistent torque values and do not require taping. However, split bolts remain code-compliant when properly installed and are still commonly found in the field.
              </p>
            </section>

            <section id="compression" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Compression Connectors</h2>
              <p className="text-white/80 mb-4">
                Compression connectors use a hydraulic or mechanical crimping tool to permanently deform a sleeve or body around one or more conductors. They provide the most reliable and lowest-resistance connections available, making them the standard for utility work, medium-voltage applications, and critical power systems.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300 mb-3">Types of Compression Connectors</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; <strong>H-taps</strong> &mdash; Tap a branch conductor from a main without cutting</li>
                    <li>&#8226; <strong>C-taps</strong> &mdash; C-shaped body crimped onto a conductor for tapping</li>
                    <li>&#8226; <strong>Compression lugs</strong> &mdash; Cable terminations for bus bar or equipment</li>
                    <li>&#8226; <strong>Butt splices</strong> &mdash; Inline conductor splices</li>
                    <li>&#8226; <strong>Reducing taps</strong> &mdash; Connect different conductor sizes</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Key Advantages</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Lowest possible contact resistance</li>
                    <li>&#8226; Permanent, vibration-resistant connection</li>
                    <li>&#8226; Consistent quality when proper tools are used</li>
                    <li>&#8226; Available for conductor sizes up to 2000 kcmil</li>
                    <li>&#8226; No ongoing maintenance required</li>
                  </ul>
                </div>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Die Matching Is Critical</h3>
                <p className="text-white/70 text-sm">
                  Compression connectors must be installed using the die set specified by the connector manufacturer. Using the wrong die, wrong tool, or wrong number of crimps creates a defective connection. Most compression connector manufacturers (Burndy, Ilsco, Panduit, Thomas &amp; Betts) publish die charts matching each connector catalog number to its required die and number of crimps.
                </p>
              </div>
            </section>

            <section id="emt-connectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Set Screw vs Compression EMT Connectors</h2>
              <p className="text-white/80 mb-4">
                EMT conduit connectors and couplings come in two main styles: set screw and compression. Understanding when to use each is important for code compliance and installation reliability.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Set Screw Fittings</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; One or more screws tighten against the conduit</li>
                    <li>&#8226; Quick installation with a screwdriver or nut driver</li>
                    <li>&#8226; Acceptable for dry, indoor locations</li>
                    <li>&#8226; Not rated for wet locations or concrete-tight</li>
                    <li>&#8226; Lower cost than compression</li>
                    <li>&#8226; Can loosen over time in vibrating environments</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Compression Fittings</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Threaded ring compresses a ferrule around the conduit</li>
                    <li>&#8226; Required for wet locations and concrete-tight installations</li>
                    <li>&#8226; Superior vibration resistance</li>
                    <li>&#8226; Better ground path continuity</li>
                    <li>&#8226; Rain-tight when properly installed</li>
                    <li>&#8226; Higher cost but more reliable long-term</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                NEC 358.42 requires that all fittings used with EMT be listed. For EMT used as an equipment grounding conductor (NEC 250.118(4)), all fittings must maintain electrical continuity. Compression fittings generally provide superior continuity because they create 360-degree contact with the conduit wall, whereas set screw fittings rely on point contact.
              </p>
            </section>

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

            <section id="terminal-blocks" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Terminal Blocks and Bus Bars</h2>
              <p className="text-white/80 mb-4">
                Terminal blocks and bus bars provide organized, accessible connection points for multiple conductors. They are essential components in panelboards, control panels, junction boxes, and industrial equipment.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Screw-Type Terminal Blocks</p>
                  <p className="text-white/60 text-sm mt-1">The most common type in control panels and low-voltage wiring. DIN-rail mounted terminal blocks (such as those from Phoenix Contact, Wago, and Allen-Bradley) accept conductors from #26 through #2 AWG. Available in feed-through, ground, fused, and disconnect configurations.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Spring-Cage Terminal Blocks</p>
                  <p className="text-white/60 text-sm mt-1">Use a spring mechanism instead of screws. Faster termination, vibration-resistant, and maintenance-free. Increasingly popular in industrial controls and building automation systems. No torque wrench needed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Neutral and Ground Bus Bars</p>
                  <p className="text-white/60 text-sm mt-1">Found in every loadcenter and panelboard. Neutral bus bars terminate the grounded conductors; ground bus bars terminate equipment grounding conductors. Per NEC 408.41, neutral bus bars must be listed as part of the panel assembly. Additional ground bars can be field-installed if listed for the panel.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Power Distribution Blocks</p>
                  <p className="text-white/60 text-sm mt-1">Listed per UL 1953, power distribution blocks allow a single large feeder conductor to be split into multiple smaller branch conductors. They must be installed in a listed enclosure and are commonly used in gutters and junction boxes to avoid the limitations of wire nut connections for larger conductors.</p>
                </div>
              </div>
            </section>

            <section id="al-cu" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Aluminum-to-Copper Connections</h2>
              <p className="text-white/80 mb-4">
                Connecting aluminum conductors to copper conductors or copper bus bars requires special attention due to galvanic corrosion and the differing thermal expansion rates of the two metals. Improperly made aluminum connections are one of the leading causes of electrical fires in older residential wiring.
              </p>
              <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-300 mb-2">Critical: Anti-Oxidant Compound</h3>
                <p className="text-white/70 text-sm">
                  Aluminum forms an oxide layer almost immediately when exposed to air. This oxide layer is resistive and creates hot spots at connections. Anti-oxidant compound (such as Burndy Penetrox, Ilsco De-Ox, or Noalox) must be applied to all aluminum conductor connections unless the connector manufacturer states otherwise. The compound penetrates the oxide layer and prevents re-oxidation, ensuring a low-resistance connection.
                </p>
              </div>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">AL/CU Rated Connectors</p>
                  <p className="text-white/60 text-sm mt-1">NEC 110.14 requires that connectors used with aluminum conductors be listed and identified for the purpose. Look for the &quot;AL/CU&quot; or &quot;AL9CU&quot; marking on lugs, breakers, and connectors. If a terminal is marked &quot;CU only,&quot; aluminum conductors are prohibited.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Bi-Metallic Connectors</p>
                  <p className="text-white/60 text-sm mt-1">Purpose-built connectors with copper on one side and aluminum on the other, with an internal barrier to prevent galvanic corrosion. These are the gold standard for aluminum-to-copper transitions, commonly used at service entrance equipment and large feeder terminations.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">COPALUM and AlumiConn</p>
                  <p className="text-white/60 text-sm mt-1">For older residential aluminum branch circuit wiring (#12 and #10 AWG), the CPSC recommends either COPALUM crimp connectors (installed by certified contractors with a special tool) or AlumiConn set-screw connectors as approved repair methods. Standard wire nuts&mdash;even those marked AL/CU&mdash;are generally not recommended for small aluminum branch circuit connections.</p>
                </div>
              </div>
            </section>

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Requirements for Connections (110.14)</h2>
              <p className="text-white/80 mb-4">
                NEC Section 110.14 is the primary code section governing electrical connections. It establishes fundamental requirements that apply to every connection in an electrical system, regardless of the connector type used.
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">Key Provisions of NEC 110.14</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>110.14(A) &mdash; Terminals:</strong> Connection of conductors to terminal parts shall ensure a thoroughly good connection without damaging the conductors. Terminals for more than one conductor and terminals used to connect aluminum shall be so identified.</li>
                  <li><strong>110.14(B) &mdash; Splices:</strong> Conductors shall be spliced using devices identified for the use or by brazing, welding, or soldering with a fusible alloy. Splices must be covered with insulation equivalent to that of the conductors.</li>
                  <li><strong>110.14(C) &mdash; Temperature Limitations:</strong> The temperature rating associated with the ampacity of a conductor shall be selected and coordinated so as not to exceed the lowest temperature rating of any connected termination, conductor, or device.</li>
                </ul>
              </div>
              <p className="text-white/80 mb-4">
                Section 110.14(C) is particularly important because it establishes the temperature coordination rules. Even if a conductor is rated 90&deg;C, the ampacity must be based on the lowest-rated component in the circuit. For circuits rated 100A or less, or marked for #14 through #1 AWG conductors, termination provisions are based on 60&deg;C ampacity values unless the equipment is listed and marked for higher temperature conductors.
              </p>
              <p className="text-white/80">
                For circuits rated over 100A, or marked for conductors larger than #1 AWG, termination provisions are based on 75&deg;C ampacity values. Equipment with higher-rated terminals (marked for 75&deg;C or 90&deg;C) may use the corresponding ampacity column, provided all components in the circuit support that temperature.
              </p>
            </section>

            <section id="temperature-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Ratings of Terminals</h2>
              <p className="text-white/80 mb-4">
                Every termination point in an electrical system has a temperature rating. This rating limits the ampacity you can apply to the conductor connected to it, regardless of the conductor&apos;s own temperature rating.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Equipment Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Terminal Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity Column to Use</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Standard receptacles/switches</td>
                      <td className="py-3 px-4">60&deg;C</td>
                      <td className="py-3 px-4">60&deg;C column</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Most circuit breakers (&le;100A)</td>
                      <td className="py-3 px-4">60/75&deg;C</td>
                      <td className="py-3 px-4">60&deg;C (unless marked 75&deg;C)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Circuit breakers (&gt;100A)</td>
                      <td className="py-3 px-4">75&deg;C</td>
                      <td className="py-3 px-4">75&deg;C column</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Motor controllers</td>
                      <td className="py-3 px-4">75&deg;C typical</td>
                      <td className="py-3 px-4">75&deg;C column</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Industrial terminals (high-temp)</td>
                      <td className="py-3 px-4">90&deg;C (if marked)</td>
                      <td className="py-3 px-4">90&deg;C column</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Pro Tip: 90&deg;C Wire with 75&deg;C Terminals</h3>
                <p className="text-white/70 text-sm">
                  You can still benefit from 90&deg;C rated conductors (THHN/THWN-2) even with 75&deg;C terminals. The 90&deg;C rating provides extra &quot;headroom&quot; for derating calculations under NEC 310.15. Calculate derating using the 90&deg;C ampacity column, then verify the final derated ampacity does not exceed the 75&deg;C column value. This approach often allows a smaller conductor size when multiple current-carrying conductors share a raceway.
                </p>
              </div>
            </section>

            <section id="torque" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Torque Specifications</h2>
              <p className="text-white/80 mb-4">
                The 2017 NEC added Section 110.14(D), requiring electrical connections operating at more than 100 volts to be tightened to manufacturer-specified torque values using a calibrated torque tool. This was one of the most significant code changes in recent cycles, and it applies to virtually every termination an electrician makes.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Torque (in-lb)</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#14 AWG</td>
                      <td className="py-3 px-4">20 in-lb</td>
                      <td className="py-3 px-4">Standard device screws</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#12 AWG</td>
                      <td className="py-3 px-4">20 in-lb</td>
                      <td className="py-3 px-4">Standard device screws</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#10 AWG</td>
                      <td className="py-3 px-4">25 in-lb</td>
                      <td className="py-3 px-4">Verify on device label</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#8 AWG</td>
                      <td className="py-3 px-4">30&ndash;35 in-lb</td>
                      <td className="py-3 px-4">Depends on lug type</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#6 AWG</td>
                      <td className="py-3 px-4">35&ndash;45 in-lb</td>
                      <td className="py-3 px-4">Depends on lug type</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">#4&ndash;#2 AWG</td>
                      <td className="py-3 px-4">50&ndash;75 in-lb</td>
                      <td className="py-3 px-4">Use calibrated torque wrench</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">#1/0&ndash;250 kcmil</td>
                      <td className="py-3 px-4">100&ndash;250 in-lb</td>
                      <td className="py-3 px-4">Always follow manufacturer specs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Important: Always Use Manufacturer Values</h3>
                <p className="text-white/70 text-sm">
                  The values above are general guidelines. NEC 110.14(D) specifically requires that connections be tightened to the torque value printed on the equipment or specified in the manufacturer&apos;s installation instructions. If no value is specified, use the values in UL Standard 486A-486B. Under-torqued connections cause arcing and overheating; over-torqued connections can damage the conductor, strip threads, or crack terminal housings.
                </p>
              </div>
            </section>

            <section id="listed-vs-unlisted" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Listed vs Unlisted Connectors</h2>
              <p className="text-white/80 mb-4">
                NEC 110.3(B) requires that listed or labeled equipment be installed and used in accordance with any instructions included in the listing or labeling. For connectors, this has significant practical implications.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Listed Connectors</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Tested by an NRTL (UL, CSA, ETL, etc.)</li>
                    <li>&#8226; Marked with listing agency label</li>
                    <li>&#8226; Tested for specific conductor types and sizes</li>
                    <li>&#8226; Include torque specifications</li>
                    <li>&#8226; Required by NEC for virtually all applications</li>
                    <li>&#8226; Carry a product standard (UL 486A-486B, etc.)</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-300 mb-3">Unlisted Connectors</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; No third-party testing or certification</li>
                    <li>&#8226; No listing mark on the product</li>
                    <li>&#8226; Common in cheap import hardware</li>
                    <li>&#8226; Will fail electrical inspection</li>
                    <li>&#8226; May not meet material or performance standards</li>
                    <li>&#8226; Liability risk for the installing electrician</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                Always verify that connectors carry a listing mark from a recognized NRTL before installing them. The most common listing standards for connectors are UL 486A-486B (wire connectors), UL 486C (splicing wire connectors), and UL 486D (sealed wire connectors). Using unlisted connectors is a code violation per NEC 110.2 and 110.3(B), and most AHJs will require them to be replaced.
              </p>
            </section>

            <section id="failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Connection Failures and Causes</h2>
              <p className="text-white/80 mb-4">
                Loose or improperly made connections are the number one cause of electrical fires and equipment failures. Understanding common failure modes helps electricians avoid them.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-red-400 font-semibold">Loose Connections (Under-Torqued)</p>
                  <p className="text-white/60 text-sm mt-1">The most common failure. A loose connection creates high resistance at the contact point, generating heat. Over time, the heat oxidizes the conductor surface, increasing resistance further in a self-reinforcing cycle. Eventually the connection reaches ignition temperature. Thermal imaging surveys routinely find loose connections operating 50&ndash;100&deg;F above ambient.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-red-400 font-semibold">Over-Torqued Connections</p>
                  <p className="text-white/60 text-sm mt-1">Excessive torque damages conductor strands, reducing the effective cross-section. It can also crack terminal housings, strip screw threads, or deform the lug barrel. The damaged connection may hold initially but fail under thermal cycling as the weakened conductor breaks. This is especially problematic with aluminum conductors, which are softer than copper.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-red-400 font-semibold">Galvanic Corrosion (Al/Cu)</p>
                  <p className="text-white/60 text-sm mt-1">When aluminum and copper are in direct contact in the presence of moisture, galvanic corrosion occurs. The aluminum corrodes preferentially, creating aluminum oxide (a resistive insulator) at the contact surface. This is why anti-oxidant compound and AL/CU-rated connectors are mandatory for aluminum-to-copper connections.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-red-400 font-semibold">Wrong Connector for the Conductor</p>
                  <p className="text-white/60 text-sm mt-1">Using a connector not rated for the conductor material (CU-only with aluminum), conductor size (wrong wire nut size), or number of conductors (overloading a splice connector) will create an unreliable connection. Always match the connector to the exact conductor combination per the manufacturer&apos;s listing.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-red-400 font-semibold">Thermal Cycling and Cold Flow</p>
                  <p className="text-white/60 text-sm mt-1">Conductors expand when carrying current and contract when the load drops. Over thousands of cycles, this thermal cycling can cause connections to loosen&mdash;especially with aluminum conductors, which have a higher coefficient of thermal expansion than copper. This phenomenon, called &quot;cold flow&quot; or &quot;creep,&quot; is why aluminum connections require periodic re-torquing or belleville (spring) washers.</p>
                </div>
              </div>
            </section>

            <section id="best-practices" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Best Practices for Reliable Connections</h2>
              <p className="text-white/80 mb-4">
                Following these best practices will help ensure every connection you make is safe, code-compliant, and built to last:
              </p>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-3">Connection Checklist</h3>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li><strong>Use listed connectors</strong> &mdash; Verify the UL, CSA, or ETL listing mark on every connector before installation. Never use unlisted hardware.</li>
                  <li><strong>Match the connector to the conductor</strong> &mdash; Check conductor material (Cu, Al, or AL/CU), size range, and number of conductors against the manufacturer&apos;s listing chart.</li>
                  <li><strong>Strip to the correct length</strong> &mdash; Use the strip gauge on the connector or the manufacturer&apos;s specification. Too short means inadequate contact; too long means exposed conductor.</li>
                  <li><strong>Clean conductor surfaces</strong> &mdash; Remove oxidation with a wire brush or abrasive pad, especially on aluminum conductors. Apply anti-oxidant compound to aluminum immediately after cleaning.</li>
                  <li><strong>Torque to specification</strong> &mdash; Use a calibrated torque tool (torque screwdriver, torque wrench, or torque adapter) set to the manufacturer&apos;s specified value. Never guess.</li>
                  <li><strong>Verify the connection</strong> &mdash; Tug-test wire nut connections. Visually inspect push-in connectors through the clear housing. Verify crimp connectors have the correct number of dimples with proper depth.</li>
                  <li><strong>Maintain insulation integrity</strong> &mdash; Tape or heat-shrink all uninsulated connections (split bolts, butt splices, uninsulated ring terminals) to provide insulation equivalent to the conductor insulation.</li>
                  <li><strong>Ensure accessibility</strong> &mdash; NEC 300.15 requires that splices and connections be accessible without removing any part of the building structure. Never bury a junction box behind drywall.</li>
                  <li><strong>Support conductors near connections</strong> &mdash; Conductors should not place mechanical stress on terminals. Use cable ties, supports, or strain relief to prevent conductor weight from pulling on connections.</li>
                  <li><strong>Document torque values</strong> &mdash; On commercial and industrial projects, keep a torque log showing the date, connector location, specified torque, and the calibration date of the torque tool used.</li>
                </ol>
              </div>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">Invest in Quality Tools</h3>
                <p className="text-white/70 text-sm">
                  A calibrated torque screwdriver (such as the Klein or Wiha models designed for electrical work) typically costs $30&ndash;$80 and covers the most common torque ranges for branch circuit work. For larger connections, an adjustable torque wrench with socket adapters is essential. These tools pay for themselves by preventing callbacks, failed inspections, and potential liability from improperly torqued connections.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Summary: Choosing the Right Connector</h2>
              <p className="text-white/80 mb-4">
                Selecting the appropriate connector comes down to matching the right product to the specific application:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">Best Connector</th>
                      <th className="text-left py-3 px-4 text-white/60">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Residential box splices (#14&ndash;#10)</td>
                      <td className="py-3 px-4 font-semibold">Wire nuts or push-in</td>
                      <td className="py-3 px-4">Low cost, fast, widely accepted</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial lighting circuits</td>
                      <td className="py-3 px-4 font-semibold">Push-in (Wago) connectors</td>
                      <td className="py-3 px-4">Speed, consistency, visual verification</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Panel terminations (#8 and larger)</td>
                      <td className="py-3 px-4 font-semibold">Mechanical lugs</td>
                      <td className="py-3 px-4">High ampacity, listed for panel</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Grounding electrode conductors</td>
                      <td className="py-3 px-4 font-semibold">Compression or irreversible crimp</td>
                      <td className="py-3 px-4">NEC 250.70 requirements</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Service entrance splices</td>
                      <td className="py-3 px-4 font-semibold">Compression or Polaris connectors</td>
                      <td className="py-3 px-4">Highest reliability, weather resistance</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Aluminum-to-copper transitions</td>
                      <td className="py-3 px-4 font-semibold">Bi-metallic compression or AL/CU lugs</td>
                      <td className="py-3 px-4">Prevents galvanic corrosion</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Control panel wiring</td>
                      <td className="py-3 px-4 font-semibold">DIN-rail terminal blocks</td>
                      <td className="py-3 px-4">Organization, accessibility, labeling</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                Every connection in an electrical system has the potential to be its weakest point. By selecting the correct connector, using proper installation techniques, and torquing to specification, you ensure that your work will be safe and reliable for the life of the installation.
              </p>
            </section>

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

            {/* Related Articles */}
            <section className="mt-12">
              <h2 className="text-2xl font-display font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types: Complete Guide to EMT, IMC, RMC, PVC &amp; Flexible</h3>
                </Link>
                <Link href="/blog/aluminum-vs-copper-wiring" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Aluminum vs Copper Wiring: Pros, Cons &amp; Code Requirements</h3>
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
