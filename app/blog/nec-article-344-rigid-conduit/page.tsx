import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Article 344: Rigid Metal Conduit (RMC) Complete Guide",
  description: "Complete guide to NEC Article 344 covering Rigid Metal Conduit (RMC) requirements. Learn about permitted uses, bending, securing, threading, grounding, trade sizes, and how RMC compares to IMC and EMT.",
  keywords: [
    "NEC Article 344",
    "rigid metal conduit",
    "RMC conduit",
    "rigid conduit installation",
    "RMC vs IMC vs EMT",
    "conduit bending requirements",
    "conduit securing and supporting",
    "RMC grounding",
    "conduit threading",
    "rigid conduit trade sizes",
  ],
  openGraph: {
    title: "NEC Article 344: Rigid Metal Conduit (RMC) Complete Guide",
    description: "Complete guide to NEC Article 344 rigid metal conduit requirements for electricians.",
    type: "article",
    publishedTime: "2025-05-20",
  },
};

// SVG Illustrations
function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-48 md:h-64" aria-label="Rigid metal conduit with fittings illustration">
      <defs>
        <linearGradient id="rmcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>
        <linearGradient id="rmcInner" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#1f2937" />
        </linearGradient>
        <linearGradient id="couplingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
      </defs>

      {/* Straight RMC section - left */}
      <rect x="20" y="82" width="140" height="36" rx="2" fill="url(#rmcGrad)" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="25" y="88" width="130" height="24" rx="1" fill="url(#rmcInner)" />

      {/* Thread lines on left pipe end */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`tl-${i}`} x1={148 + i * 3} y1="83" x2={148 + i * 3} y2="117" stroke="#9ca3af" strokeWidth="0.5" opacity="0.6" />
      ))}

      {/* Coupling */}
      <rect x="155" y="76" width="30" height="48" rx="3" fill="url(#couplingGrad)" stroke="#d1d5db" strokeWidth="1.5" />
      <line x1="163" y1="77" x2="163" y2="123" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />
      <line x1="170" y1="77" x2="170" y2="123" stroke="#4b5563" strokeWidth="1" />
      <line x1="177" y1="77" x2="177" y2="123" stroke="#e5e7eb" strokeWidth="0.5" opacity="0.4" />

      {/* Thread lines on right pipe start */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={`tr-${i}`} x1={186 + i * 3} y1="83" x2={186 + i * 3} y2="117" stroke="#9ca3af" strokeWidth="0.5" opacity="0.6" />
      ))}

      {/* Straight RMC section - right going into 90-degree bend */}
      <rect x="180" y="82" width="80" height="36" rx="2" fill="url(#rmcGrad)" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="185" y="88" width="70" height="24" rx="1" fill="url(#rmcInner)" />

      {/* 90-degree bend */}
      <path d="M260 82 Q320 82 320 142" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
      <path d="M260 118 Q284 118 284 142" fill="none" stroke="#9ca3af" strokeWidth="1.5" />
      <path d="M260 84 C260 84 318 84 318 140" fill="url(#rmcGrad)" stroke="none" />
      <path d="M260 116 C260 116 282 116 282 140" fill="url(#rmcInner)" stroke="none" />
      <path d="M260 82 Q320 82 320 142 L320 180 L284 180 L284 142 Q284 118 260 118 Z" fill="url(#rmcGrad)" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="288" y="142" width="28" height="4" fill="url(#rmcInner)" />

      {/* Vertical section after bend */}
      <rect x="284" y="145" width="36" height="45" rx="2" fill="url(#rmcGrad)" stroke="#9ca3af" strokeWidth="1.5" />
      <rect x="290" y="142" width="24" height="48" rx="1" fill="url(#rmcInner)" />

      {/* Connector/fitting at bottom */}
      <rect x="278" y="185" width="48" height="12" rx="2" fill="url(#couplingGrad)" stroke="#d1d5db" strokeWidth="1" />

      {/* Conductors visible inside */}
      <line x1="30" y1="95" x2="250" y2="95" stroke="#ef4444" strokeWidth="2" opacity="0.7" />
      <line x1="30" y1="100" x2="250" y2="100" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
      <line x1="30" y1="105" x2="250" y2="105" stroke="#22c55e" strokeWidth="2" opacity="0.7" />

      {/* Labels */}
      <text x="90" y="70" textAnchor="middle" fill="#d1d5db" fontSize="10" fontWeight="bold">RMC</text>
      <text x="170" y="65" textAnchor="middle" fill="#a78bfa" fontSize="9">Coupling</text>
      <text x="355" y="168" textAnchor="middle" fill="#9ca3af" fontSize="9">90&deg; Bend</text>

      {/* Trade size label */}
      <rect x="20" y="130" width="70" height="22" rx="4" fill="#7c3aed" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1" />
      <text x="55" y="145" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontWeight="bold">1&quot; Trade Size</text>
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
            { name: "NEC Article 344 Rigid Conduit", url: "https://amporalabs.com/blog/nec-article-344-rigid-conduit" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Article 344: Rigid Metal Conduit (RMC) Complete Guide"
          description="Complete guide to NEC Article 344 covering rigid metal conduit requirements, permitted uses, bending, securing, grounding, and trade sizes."
          datePublished="2025-05-20"
          url="https://amporalabs.com/blog/nec-article-344-rigid-conduit"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Article 344 Rigid Conduit</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">May 20, 2025</span>
              <span className="text-white/40 text-sm">• 12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              NEC Article 344: Rigid Metal Conduit (RMC) Complete Guide
            </h1>
            <p className="text-xl text-white/70">
              Everything electricians need to know about rigid metal conduit — from permitted uses and bending requirements to grounding, threading, and how RMC compares to IMC and EMT.
            </p>
          </header>

          {/* Hero Illustration */}
          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <h2>What is Rigid Metal Conduit (RMC)?</h2>
            <p>
              Rigid Metal Conduit (RMC) is the heaviest and most robust wiring raceway recognized by the NEC. Covered under
              <strong> Article 344</strong>, RMC is a thick-walled, threaded metallic conduit typically made from steel (galvanized or
              stainless) or aluminum. It provides the highest level of physical protection for enclosed conductors and is the
              standard choice for exposed outdoor installations, industrial environments, and locations requiring superior
              mechanical protection.
            </p>
            <p>
              Because RMC is threaded at connections, it forms a mechanically and electrically continuous raceway system. When
              properly installed, RMC qualifies as an equipment grounding conductor per NEC 344.60, eliminating the need for a
              separate grounding wire in many installations.
            </p>

            <h2>RMC vs IMC vs EMT — Conduit Comparison</h2>
            <p>
              Choosing between RMC, IMC (Intermediate Metal Conduit), and EMT (Electrical Metallic Tubing) depends on the
              installation environment, required protection level, and budget. Here is how they compare:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-white/60">Feature</th>
                    <th className="text-left py-3 px-4 text-white/60">RMC (Art. 344)</th>
                    <th className="text-left py-3 px-4 text-white/60">IMC (Art. 342)</th>
                    <th className="text-left py-3 px-4 text-white/60">EMT (Art. 358)</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Wall Thickness</td>
                    <td className="py-3 px-4">Heaviest</td>
                    <td className="py-3 px-4">Medium</td>
                    <td className="py-3 px-4">Thinnest</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Connection Method</td>
                    <td className="py-3 px-4">Threaded</td>
                    <td className="py-3 px-4">Threaded</td>
                    <td className="py-3 px-4">Set-screw / Compression</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">EGC Qualified</td>
                    <td className="py-3 px-4">Yes (344.60)</td>
                    <td className="py-3 px-4">Yes (342.60)</td>
                    <td className="py-3 px-4">Yes (358.60)</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Physical Protection</td>
                    <td className="py-3 px-4">Highest</td>
                    <td className="py-3 px-4">High</td>
                    <td className="py-3 px-4">Moderate</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Weight (1&quot; per 10 ft)</td>
                    <td className="py-3 px-4">~28 lbs</td>
                    <td className="py-3 px-4">~20 lbs</td>
                    <td className="py-3 px-4">~10 lbs</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4 font-semibold">Cost</td>
                    <td className="py-3 px-4">Highest</td>
                    <td className="py-3 px-4">Moderate</td>
                    <td className="py-3 px-4">Lowest</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Typical Use</td>
                    <td className="py-3 px-4">Industrial, outdoor, hazardous</td>
                    <td className="py-3 px-4">Commercial, outdoor</td>
                    <td className="py-3 px-4">Commercial, residential interior</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              In general, RMC is specified where maximum mechanical protection is required or where local codes mandate
              threaded conduit. IMC offers a lighter-weight threaded alternative that can be used in nearly all the same
              locations as RMC. EMT, being the lightest and most economical, is the default choice for most interior
              commercial and residential applications.
            </p>

            <h2>Permitted Uses (344.10)</h2>
            <p>
              NEC 344.10 permits the use of RMC in virtually all conditions and occupancies. Specific permitted uses include:
            </p>
            <ul>
              <li>All atmospheric conditions and occupancies</li>
              <li>In concrete, in direct contact with the earth, or in areas subject to severe corrosive influences when protected by corrosion protection judged suitable for the condition</li>
              <li>In or under cinder fill subject to permanent moisture when protected on all sides by a layer of nite concrete not less than 50 mm (2 in.) thick, or when the conduit is at least 450 mm (18 in.) below the fill</li>
              <li>In hazardous (classified) locations as permitted by NEC Articles 500 through 516</li>
              <li>For services (NEC Article 230)</li>
              <li>In dry, damp, or wet locations</li>
              <li>Exposed or concealed installations</li>
              <li>For direct burial where listed and marked for the purpose</li>
            </ul>

            <h3>Not Permitted</h3>
            <p>
              While RMC is extremely versatile, it is prohibited in some circumstances:
            </p>
            <ul>
              <li>Where subject to severe corrosive conditions unless suitable protection is provided (e.g., PVC-coated RMC in chemical plants)</li>
              <li>Ferrous (steel) RMC should not be used in areas with corrosive soils or in concrete with chloride additives unless additionally protected</li>
            </ul>

            <h2>Construction Specifications</h2>
            <p>
              RMC is manufactured from steel or aluminum and must comply with ANSI standards. Key construction characteristics include:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Material Types:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Galvanized Steel:</strong> Most common. Hot-dip galvanized inside and out for corrosion resistance. Used in most commercial and industrial applications.</li>
                <li><strong>Stainless Steel:</strong> For highly corrosive environments such as water treatment plants and food processing facilities.</li>
                <li><strong>Aluminum:</strong> Lighter weight (~1/3 of steel). Used where weight is a concern or where galvanic corrosion with steel is a problem. Not permitted in concrete embedment or direct earth burial unless listed for the purpose.</li>
                <li><strong>PVC-Coated Steel:</strong> Galvanized steel RMC with an exterior PVC coating for extreme corrosion environments.</li>
                <li><strong>Red Brass:</strong> Permitted per 344.100(B) but rarely used today.</li>
              </ul>
            </div>

            <h2>Threading Requirements</h2>
            <p>
              One of the defining characteristics of RMC is its threaded connections. Threading must comply with specific requirements:
            </p>
            <ul>
              <li>Standard conduit threads are <strong>National Pipe Thread (NPT)</strong> taper threads per ANSI/ASME B1.20.1</li>
              <li>Running threads are <strong>not permitted</strong> for coupling conduit — they do not provide the same pull-out strength as tapered threads</li>
              <li>Thread compound or approved tape must be applied to all field-cut threads to prevent corrosion at the joint</li>
              <li>Field-cut threads must be made with proper dies to maintain thread integrity</li>
              <li>Exposed threads on steel RMC must be coated with an approved conductive and corrosion-resistant compound after installation</li>
            </ul>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 my-6">
              <h4 className="text-yellow-400 font-semibold mb-3">Field Threading Tip:</h4>
              <p className="text-white/70">
                When cutting and threading RMC in the field, always ream the cut end to remove burrs that could damage
                conductor insulation during pulling. Use cutting oil generously during the threading operation to produce
                clean threads and extend die life. After threading, verify thread engagement by hand-tightening the coupling
                at least 3-4 full threads before wrench-tightening.
              </p>
            </div>

            <h2>Bending Requirements (344.24 &amp; 344.26)</h2>
            <p>
              Bending RMC requires attention to both the minimum bending radius and the total number of bends in a run.
            </p>

            <h3>Bends — How to Make Them (344.24)</h3>
            <p>
              Bends in RMC must be made so that the conduit is not damaged and the internal diameter is not effectively
              reduced. Key rules include:
            </p>
            <ul>
              <li>Bends must be made with approved bending equipment for the specific trade size</li>
              <li>Field bends must not reduce the internal cross-sectional area of the conduit</li>
              <li>The minimum bending radius depends on the trade size — see the table below</li>
            </ul>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-white/60">Trade Size</th>
                    <th className="text-left py-3 px-4 text-white/60">One-Shot &amp; Full-Shoe Benders (in.)</th>
                    <th className="text-left py-3 px-4 text-white/60">Other Bends (in.)</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">4</td>
                    <td className="py-3 px-4 font-mono">6</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">3/4&quot;</td>
                    <td className="py-3 px-4 font-mono">4-1/2</td>
                    <td className="py-3 px-4 font-mono">8</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1&quot;</td>
                    <td className="py-3 px-4 font-mono">5-3/4</td>
                    <td className="py-3 px-4 font-mono">11</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1-1/4&quot;</td>
                    <td className="py-3 px-4 font-mono">7-1/4</td>
                    <td className="py-3 px-4 font-mono">14</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1-1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">8-1/4</td>
                    <td className="py-3 px-4 font-mono">16</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">2&quot;</td>
                    <td className="py-3 px-4 font-mono">9-1/2</td>
                    <td className="py-3 px-4 font-mono">21</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">2-1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">10-1/2</td>
                    <td className="py-3 px-4 font-mono">25</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">3&quot;</td>
                    <td className="py-3 px-4 font-mono">13</td>
                    <td className="py-3 px-4 font-mono">31</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Number of Bends (344.26)</h3>
            <p>
              Between pull points (boxes, conduit bodies, fittings), the total number of bends in a single run of RMC must
              not exceed the equivalent of <strong>four quarter bends (360 degrees total)</strong>. This includes offsets,
              kicks, and saddle bends — every bend angle counts toward the 360-degree limit.
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Why the 360-Degree Limit Matters:</h4>
              <p className="text-white/70 mb-3">
                Each bend increases friction during conductor pulling. Exceeding 360 degrees of total bends in a single
                run makes it extremely difficult — or impossible — to pull conductors without damaging insulation.
              </p>
              <p className="text-white/70">
                <strong>Example:</strong> A run with two 90-degree bends and two 45-degree offsets (each offset = two
                45-degree bends = 90 degrees total per offset) would total 90 + 90 + 90 + 90 = 360 degrees. This is at
                the maximum. Adding even one more small kick bend would require installing an additional pull point.
              </p>
            </div>

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

            <h2>Securing and Supporting (344.30)</h2>
            <p>
              RMC must be properly secured and supported throughout the installation. NEC 344.30 establishes the following requirements:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Securely Fastened</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Within <strong>3 feet</strong> of each outlet box, junction box, cabinet, or conduit body</li>
                  <li>• Within <strong>3 feet</strong> of each coupling when not made up with threaded couplings</li>
                  <li>• At intervals not exceeding <strong>10 feet</strong></li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-xl p-6">
                <h4 className="text-white font-semibold mb-3">Exceptions</h4>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Straight horizontal runs with threaded couplings: support at every other coupling is permitted if each section is supported</li>
                  <li>• Exposed vertical risers from industrial machinery: support at the top and bottom of the riser</li>
                  <li>• Conduit used in industrial installations for flexibility at equipment connections does not require support within 3 feet of the box when secured within 5 feet</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Quick Reference — Support Spacing:</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-left text-white">Requirement</th>
                    <th className="py-2 text-left text-white">Distance</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">From box/fitting</td>
                    <td className="py-2">Within 3 ft</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Maximum between supports</td>
                    <td className="py-2">10 ft</td>
                  </tr>
                  <tr>
                    <td className="py-2">Horizontal w/ threaded couplings</td>
                    <td className="py-2">Every other coupling</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Grounding (344.60)</h2>
            <p>
              One of the significant advantages of RMC is its ability to serve as an <strong>equipment grounding conductor (EGC)</strong>.
              Per NEC 344.60 and 250.118(2), RMC is recognized as an EGC when the conduit system is installed with proper
              connections throughout.
            </p>
            <p>
              For the RMC system to function as a reliable EGC:
            </p>
            <ul>
              <li>All joints and connections must be made tight using proper threaded fittings</li>
              <li>Locknuts and bushings must be properly installed at terminations</li>
              <li>Bonding jumpers must be used where structural joints, expansion fittings, or telescoping sections of conduit could interrupt the grounding path</li>
              <li>Grounding bushings with bonding jumpers may be required at service equipment per 250.92(B)</li>
            </ul>
            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6 my-6">
              <h4 className="text-cyan-400 font-semibold mb-3">Best Practice:</h4>
              <p className="text-white/70">
                While RMC qualifies as an EGC, many specifications and jurisdictions require an additional insulated or
                bare equipment grounding conductor to be installed inside the conduit, especially for circuits over 250 volts
                or in healthcare facilities. Always check local amendments and project specifications.
              </p>
            </div>

            <h2>Dissimilar Metals</h2>
            <p>
              When different metals come in contact in the presence of moisture, galvanic corrosion can occur. NEC 344.14
              requires that where practicable, contact between dissimilar metals be avoided. Key considerations include:
            </p>
            <ul>
              <li><strong>Steel RMC to aluminum fittings:</strong> Use only listed fittings approved for the connection. Apply anti-oxidant compound to aluminum threads.</li>
              <li><strong>Aluminum RMC in concrete:</strong> Aluminum conduit in concrete or direct earth contact will corrode unless specifically listed for the purpose. In general, avoid aluminum RMC in concrete.</li>
              <li><strong>Steel RMC on galvanized supports:</strong> This is acceptable — both are ferrous metals with similar galvanic potential.</li>
              <li><strong>Steel RMC to copper grounding conductors:</strong> Use approved lugs and connectors. Avoid direct copper-to-steel contact in wet locations.</li>
            </ul>

            <h2>Expansion Fittings</h2>
            <p>
              Long straight runs of RMC are subject to thermal expansion and contraction. NEC 344.44 requires that
              expansion, expansion-deflection, or deflection fittings be provided where necessary to compensate for
              thermal movement. This is particularly important in:
            </p>
            <ul>
              <li>Exposed outdoor runs subject to wide temperature swings</li>
              <li>Long straight runs (generally over 50 feet) without direction changes</li>
              <li>Runs crossing structural expansion joints</li>
              <li>Rooftop installations exposed to direct sunlight</li>
            </ul>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Thermal Expansion Formula:</h4>
              <p className="text-white/70 mb-3">
                Steel RMC expands approximately <strong>0.0075 inches per 10 feet per 10&deg;F</strong> temperature change.
              </p>
              <p className="text-white/70">
                <strong>Example:</strong> A 100-foot exposed rooftop run experiencing a 100&deg;F temperature swing
                (winter to summer) would expand approximately: 0.0075 &times; 10 &times; 10 = <strong>0.75 inches</strong>.
                An expansion fitting rated for at least 1 inch of movement would be required.
              </p>
            </div>
            <p>
              When expansion fittings are installed, a <strong>bonding jumper</strong> must be provided across the fitting
              to maintain the equipment grounding path, as the telescoping design of the fitting interrupts electrical
              continuity.
            </p>

            <h2>Trade Sizes and Dimensions</h2>
            <p>
              RMC is available in trade sizes from 1/2&quot; through 6&quot;. The table below shows the most commonly
              used trade sizes with their approximate dimensions:
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-3 px-4 text-white/60">Trade Size</th>
                    <th className="text-left py-3 px-4 text-white/60">Metric Designator</th>
                    <th className="text-left py-3 px-4 text-white/60">Inside Dia. (in.)</th>
                    <th className="text-left py-3 px-4 text-white/60">Outside Dia. (in.)</th>
                    <th className="text-left py-3 px-4 text-white/60">Internal Area (sq in.)</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">16</td>
                    <td className="py-3 px-4 font-mono">0.622</td>
                    <td className="py-3 px-4 font-mono">0.840</td>
                    <td className="py-3 px-4 font-mono">0.304</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">3/4&quot;</td>
                    <td className="py-3 px-4 font-mono">21</td>
                    <td className="py-3 px-4 font-mono">0.824</td>
                    <td className="py-3 px-4 font-mono">1.050</td>
                    <td className="py-3 px-4 font-mono">0.533</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1&quot;</td>
                    <td className="py-3 px-4 font-mono">27</td>
                    <td className="py-3 px-4 font-mono">1.049</td>
                    <td className="py-3 px-4 font-mono">1.315</td>
                    <td className="py-3 px-4 font-mono">0.864</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1-1/4&quot;</td>
                    <td className="py-3 px-4 font-mono">35</td>
                    <td className="py-3 px-4 font-mono">1.380</td>
                    <td className="py-3 px-4 font-mono">1.660</td>
                    <td className="py-3 px-4 font-mono">1.496</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">1-1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">41</td>
                    <td className="py-3 px-4 font-mono">1.610</td>
                    <td className="py-3 px-4 font-mono">1.900</td>
                    <td className="py-3 px-4 font-mono">2.036</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">2&quot;</td>
                    <td className="py-3 px-4 font-mono">53</td>
                    <td className="py-3 px-4 font-mono">2.067</td>
                    <td className="py-3 px-4 font-mono">2.375</td>
                    <td className="py-3 px-4 font-mono">3.356</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">2-1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">63</td>
                    <td className="py-3 px-4 font-mono">2.469</td>
                    <td className="py-3 px-4 font-mono">2.875</td>
                    <td className="py-3 px-4 font-mono">4.788</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">3&quot;</td>
                    <td className="py-3 px-4 font-mono">78</td>
                    <td className="py-3 px-4 font-mono">3.068</td>
                    <td className="py-3 px-4 font-mono">3.500</td>
                    <td className="py-3 px-4 font-mono">7.393</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-3 px-4">3-1/2&quot;</td>
                    <td className="py-3 px-4 font-mono">91</td>
                    <td className="py-3 px-4 font-mono">3.548</td>
                    <td className="py-3 px-4 font-mono">4.000</td>
                    <td className="py-3 px-4 font-mono">9.887</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">4&quot;</td>
                    <td className="py-3 px-4 font-mono">103</td>
                    <td className="py-3 px-4 font-mono">4.026</td>
                    <td className="py-3 px-4 font-mono">4.500</td>
                    <td className="py-3 px-4 font-mono">12.723</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Common Mistakes to Avoid</h2>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
              <h4 className="text-red-400 font-semibold mb-3">Watch Out For:</h4>
              <ul className="text-white/70 space-y-2">
                <li><strong>Not reaming after cutting:</strong> Failing to ream the inside of field-cut RMC leaves sharp burrs that will slice through conductor insulation during pulling. This is one of the most common inspection failures.</li>
                <li><strong>Using running threads:</strong> Running threads (straight threads vs. tapered) do not provide adequate mechanical strength or electrical continuity. Always use tapered NPT threads with proper couplings.</li>
                <li><strong>Exceeding 360 degrees of bends:</strong> Counting only 90-degree bends and forgetting that offset bends (two 45-degree kicks) add up. Every bend angle counts toward the total.</li>
                <li><strong>Missing supports:</strong> Forgetting the 3-foot-from-box rule or exceeding 10-foot spans between supports. Inspectors check this carefully.</li>
                <li><strong>Mixing dissimilar metals without protection:</strong> Installing aluminum fittings on steel conduit (or vice versa) in wet locations without proper anti-corrosion measures invites galvanic corrosion.</li>
                <li><strong>Omitting expansion fittings:</strong> Long exposed runs without expansion fittings can pull couplings apart or crush conduit at bends as the temperature changes.</li>
                <li><strong>No bonding jumper at expansion fittings:</strong> Installing an expansion fitting without a bonding jumper breaks the equipment grounding path through the conduit system.</li>
                <li><strong>Ignoring anti-short bushings:</strong> For larger conductors, failing to install insulating bushings per 300.4(G) on conduit ends where conductors could be damaged.</li>
              </ul>
            </div>

            <h2>Installation Best Practices</h2>
            <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <ol className="text-white/80 space-y-3">
                <li><strong>1.</strong> Always cut conduit square using a pipe cutter or hacksaw with a fine-tooth blade. File the outside edge smooth.</li>
                <li><strong>2.</strong> Ream the inside of every cut to remove all burrs — use a reamer or half-round file.</li>
                <li><strong>3.</strong> Apply thread compound or Teflon tape to all field-cut threads before assembly.</li>
                <li><strong>4.</strong> Support conduit within 3 feet of every box and fitting, and at 10-foot maximum intervals.</li>
                <li><strong>5.</strong> Use pull boxes or conduit bodies to keep total bends under 360 degrees between pull points.</li>
                <li><strong>6.</strong> Install expansion fittings with bonding jumpers on long exposed runs.</li>
                <li><strong>7.</strong> Verify all connections are wrench-tight — not just hand-tight — to ensure a reliable grounding path.</li>
                <li><strong>8.</strong> Use appropriate support hardware (straps, hangers, trapeze) rated for the conduit weight plus wire loading.</li>
              </ol>
            </div>

            <h2>When to Choose RMC</h2>
            <p>
              While RMC is more expensive and labor-intensive to install than IMC or EMT, there are situations where it is
              the best — or required — choice:
            </p>
            <ul>
              <li><strong>Hazardous locations:</strong> NEC Articles 500-516 often require threaded RMC or IMC for conduit runs in classified areas.</li>
              <li><strong>Physical protection:</strong> Exposed conduit subject to vehicle traffic, impact, or heavy equipment contact.</li>
              <li><strong>Pole risers:</strong> Outdoor service entrance conduit on utility poles and building exteriors.</li>
              <li><strong>Underground/direct burial:</strong> Listed RMC can be directly buried without concrete encasement in many jurisdictions.</li>
              <li><strong>Chemical/corrosive environments:</strong> PVC-coated or stainless steel RMC for water treatment, chemical, and food processing plants.</li>
              <li><strong>Specification requirement:</strong> Many commercial and institutional specifications call for RMC in specific areas regardless of minimum NEC requirements.</li>
            </ul>

            <h2>Use Ampora for Quick NEC Lookups</h2>
            <p>
              Article 344 has many specific requirements for trade sizes, bending radii, support spacing, and permitted
              uses. The Ampora app gives electricians instant access to NEC code references, conduit fill calculations,
              and AI-powered answers to installation questions — all from your phone on the job site.
            </p>
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

          {/* Related Posts */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/conduit-fill-calculation-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Conduit Fill Calculation Guide</h4>
                <p className="text-white/60 text-sm mt-2">Learn how to calculate conduit fill using NEC Chapter 9 tables.</p>
              </Link>
              <Link href="/blog/electrical-conduit-types-guide" className="group bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all">
                <h4 className="font-semibold group-hover:text-purple-400 transition-colors">Electrical Conduit Types Guide</h4>
                <p className="text-white/60 text-sm mt-2">Complete guide to all conduit types and their applications.</p>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
