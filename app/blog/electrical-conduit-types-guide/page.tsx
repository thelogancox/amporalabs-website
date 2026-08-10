import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Conduit Types: Complete Guide to EMT, IMC, RMC, PVC & Flexible Conduit",
  description: "Complete guide to electrical conduit types including EMT, IMC, RMC, PVC, and flexible conduit. Learn when to use each type, trade sizes, support spacing requirements, fittings, and applicable NEC articles for every installation.",
  keywords: [
    "electrical conduit types",
    "EMT conduit",
    "IMC conduit",
    "RMC conduit",
    "PVC conduit",
    "flexible conduit",
    "liquidtight flexible conduit",
    "conduit trade sizes",
    "conduit support spacing",
    "NEC conduit requirements",
    "conduit fittings",
    "electrical metallic tubing",
    "rigid metal conduit",
    "conduit installation guide",
    "FMC conduit",
    "LFMC conduit",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-conduit-types-guide",
  },
  openGraph: {
    title: "Electrical Conduit Types: EMT, IMC, RMC, PVC & Flexible - Ampora",
    description: "Complete guide to electrical conduit types, trade sizes, support spacing, and NEC requirements.",
    url: "https://amporalabs.com/blog/electrical-conduit-types-guide",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Electrical conduit types cross-section illustration">
      {/* EMT conduit */}
      <g transform="translate(50, 80)">
        <rect x="-30" y="-12" width="60" height="24" rx="12" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
        <rect x="-26" y="-8" width="52" height="16" rx="8" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#b87333"/>
        <circle cx="-10" cy="0" r="3" fill="#b87333"/>
        <circle cx="10" cy="0" r="3" fill="#b87333"/>
        <text x="0" y="28" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">EMT</text>
        <text x="0" y="40" textAnchor="middle" fill="#60a5fa" fontSize="7">Thin Wall</text>
      </g>

      {/* RMC conduit */}
      <g transform="translate(140, 80)">
        <rect x="-30" y="-14" width="60" height="28" rx="14" fill="#4b5563" stroke="#9ca3af" strokeWidth="3"/>
        <rect x="-24" y="-8" width="48" height="16" rx="8" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#b87333"/>
        <circle cx="-10" cy="0" r="3" fill="#b87333"/>
        <circle cx="10" cy="0" r="3" fill="#b87333"/>
        <text x="0" y="30" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">RMC</text>
        <text x="0" y="42" textAnchor="middle" fill="#a78bfa" fontSize="7">Heavy Wall</text>
      </g>

      {/* PVC conduit */}
      <g transform="translate(230, 80)">
        <rect x="-30" y="-12" width="60" height="24" rx="12" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
        <rect x="-26" y="-8" width="52" height="16" rx="8" fill="#111827"/>
        <circle cx="0" cy="0" r="3" fill="#b87333"/>
        <circle cx="-10" cy="0" r="3" fill="#b87333"/>
        <circle cx="10" cy="0" r="3" fill="#b87333"/>
        <text x="0" y="28" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">PVC</text>
        <text x="0" y="40" textAnchor="middle" fill="#34d399" fontSize="7">Non-Metallic</text>
      </g>

      {/* Flexible conduit */}
      <g transform="translate(330, 80)">
        <path d="M-25,-10 Q-20,-14 -15,-10 Q-10,-6 -5,-10 Q0,-14 5,-10 Q10,-6 15,-10 Q20,-14 25,-10 L25,10 Q20,14 15,10 Q10,6 5,10 Q0,14 -5,10 Q-10,6 -15,10 Q-20,14 -25,10 Z" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
        <circle cx="0" cy="0" r="3" fill="#b87333"/>
        <text x="0" y="28" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">FMC</text>
        <text x="0" y="40" textAnchor="middle" fill="#fbbf24" fontSize="7">Flexible</text>
      </g>

      {/* Title */}
      <rect x="100" y="5" width="200" height="25" rx="4" fill="#f97316" fillOpacity="0.2" stroke="#f97316"/>
      <text x="200" y="22" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">Conduit Type Comparison</text>
    </svg>
  );
}

export default function ElectricalConduitTypesGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Conduit Types Guide", url: "https://amporalabs.com/blog/electrical-conduit-types-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Conduit Types: Complete Guide to EMT, IMC, RMC, PVC &amp; Flexible Conduit"
          description="Complete guide to electrical conduit types including EMT, IMC, RMC, PVC, and flexible conduit with NEC requirements."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/electrical-conduit-types-guide"
          wordCount={3200}
          keywords={["electrical conduit types", "EMT", "IMC", "RMC", "PVC conduit", "flexible conduit", "NEC conduit requirements"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Conduit Types Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">14 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Conduit Types: Complete Guide to EMT, IMC, RMC, PVC &amp; Flexible Conduit
            </h1>
            <p className="text-xl text-white/70">
              Choosing the right conduit type is critical for code compliance, installation efficiency, and long-term reliability. This guide covers every major conduit type, when to use each, and the NEC articles that govern them.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">&#8594; Conduit Types Overview</a></li>
              <li><a href="#emt" className="hover:text-purple-400">&#8594; EMT &mdash; Electrical Metallic Tubing</a></li>
              <li><a href="#imc" className="hover:text-purple-400">&#8594; IMC &mdash; Intermediate Metal Conduit</a></li>
              <li><a href="#rmc" className="hover:text-purple-400">&#8594; RMC &mdash; Rigid Metal Conduit</a></li>
              <li><a href="#pvc" className="hover:text-purple-400">&#8594; PVC &mdash; Rigid Polyvinyl Chloride Conduit</a></li>
              <li><a href="#flexible" className="hover:text-purple-400">&#8594; FMC &amp; LFMC &mdash; Flexible Conduit</a></li>
              <li><a href="#trade-sizes" className="hover:text-purple-400">&#8594; Trade Sizes &amp; Dimensions</a></li>
              <li><a href="#support-spacing" className="hover:text-purple-400">&#8594; Support Spacing Requirements</a></li>
              <li><a href="#fittings" className="hover:text-purple-400">&#8594; Fittings &amp; Connectors</a></li>
              <li><a href="#selection" className="hover:text-purple-400">&#8594; How to Choose the Right Conduit</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Conduit Types Overview</h2>
              <p className="text-white/80 mb-4">
                Electrical conduit serves as a protective raceway for conductors, shielding wiring from physical damage, moisture, chemicals, and electromagnetic interference. The NEC recognizes several distinct conduit types, each governed by its own article and suited to specific installation environments.
              </p>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">Key NEC Articles for Conduit</h3>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li><strong>Article 358</strong> &mdash; EMT (Electrical Metallic Tubing)</li>
                  <li><strong>Article 342</strong> &mdash; IMC (Intermediate Metal Conduit)</li>
                  <li><strong>Article 344</strong> &mdash; RMC (Rigid Metal Conduit)</li>
                  <li><strong>Article 352</strong> &mdash; PVC (Rigid Polyvinyl Chloride Conduit)</li>
                  <li><strong>Article 348</strong> &mdash; FMC (Flexible Metal Conduit)</li>
                  <li><strong>Article 350</strong> &mdash; LFMC (Liquidtight Flexible Metal Conduit)</li>
                  <li><strong>Article 356</strong> &mdash; LFNC (Liquidtight Flexible Nonmetallic Conduit)</li>
                </ul>
              </div>
              <p className="text-white/80">
                Each conduit type has specific rules for permitted uses, prohibited uses, support spacing, number of bends, and fitting requirements. Understanding these differences helps you select the right raceway for every job.
              </p>
            </section>

            <section id="emt" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">EMT &mdash; Electrical Metallic Tubing (Article 358)</h2>
              <p className="text-white/80 mb-4">
                EMT is the most commonly used conduit in commercial and residential construction. Often called &quot;thin-wall&quot; conduit, it is lightweight, easy to bend, and economical. EMT uses set-screw or compression fittings rather than threaded connections.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">Permitted Uses</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Exposed and concealed locations</li>
                    <li>&#8226; Above and below grade in concrete</li>
                    <li>&#8226; Indoor dry and damp locations</li>
                    <li>&#8226; Commercial and residential buildings</li>
                    <li>&#8226; Hazardous locations (with restrictions)</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Prohibited Uses (358.12)</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Where subject to severe physical damage</li>
                    <li>&#8226; Direct earth burial (unless approved)</li>
                    <li>&#8226; In cinder concrete or fill where corrosion possible</li>
                    <li>&#8226; Wet locations unless fittings are listed for wet</li>
                    <li>&#8226; Where exposed to corrosive environments</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                EMT is available in trade sizes from 1/2&quot; through 4&quot;. Standard stick lengths are 10 feet. EMT can serve as an equipment grounding conductor per NEC 250.118(4), provided all fittings are properly tightened to maintain electrical continuity.
              </p>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Pro Tip: Bending EMT</h3>
                <p className="text-white/70 text-sm">
                  NEC 358.26 limits bends to a maximum of 360 degrees of total bends between pull points. Use a hand bender for 1/2&quot; through 1-1/4&quot; EMT. For 1-1/2&quot; and larger, use a mechanical or hydraulic bender. Always account for gain when measuring bends.
                </p>
              </div>
            </section>

            <section id="imc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">IMC &mdash; Intermediate Metal Conduit (Article 342)</h2>
              <p className="text-white/80 mb-4">
                IMC is a steel conduit with a wall thickness between EMT and RMC. It uses threaded connections like RMC but is lighter and easier to work with. IMC is an excellent choice when you need more physical protection than EMT provides but want to avoid the weight of RMC.
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Wall thickness</strong> &mdash; Approximately 25% thinner than RMC, about 33% thicker than EMT</li>
                <li><strong>Weight savings</strong> &mdash; About 25% lighter than comparable RMC sizes</li>
                <li><strong>Connections</strong> &mdash; Threaded couplings and connectors (same threads as RMC)</li>
                <li><strong>Available sizes</strong> &mdash; 1/2&quot; through 4&quot; trade sizes</li>
                <li><strong>Grounding</strong> &mdash; Can serve as equipment grounding conductor per NEC 250.118(3)</li>
              </ul>
              <p className="text-white/80">
                IMC is permitted in all locations where RMC is allowed, including direct burial, concrete encasement, and hazardous locations. It provides a cost-effective middle ground between EMT and RMC for many installations.
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

            <section id="rmc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">RMC &mdash; Rigid Metal Conduit (Article 344)</h2>
              <p className="text-white/80 mb-4">
                RMC (also called rigid galvanized steel conduit or &quot;heavy-wall&quot;) provides the highest level of physical protection among metallic conduits. It uses threaded connections and is available in steel, stainless steel, and aluminum.
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-300 mb-2">When RMC Is Required</h3>
                <ul className="text-white/70 space-y-1 text-sm">
                  <li>&#8226; Service mast installations (weather head to meter)</li>
                  <li>&#8226; Locations subject to severe physical damage</li>
                  <li>&#8226; Direct burial applications (344.10(5))</li>
                  <li>&#8226; Hazardous (classified) locations per Articles 500-516</li>
                  <li>&#8226; Equipment rooms requiring maximum protection</li>
                  <li>&#8226; Underground service entrance conductors</li>
                </ul>
              </div>
              <p className="text-white/80 mb-4">
                RMC can also serve as an equipment grounding conductor per NEC 250.118(2). Available in trade sizes from 1/2&quot; through 6&quot;, it is the most robust conduit option. The primary downside is weight&mdash;a 10-foot stick of 2&quot; RMC weighs approximately 15 pounds compared to about 6 pounds for EMT.
              </p>
              <p className="text-white/80">
                Aluminum RMC (Article 344) is available where galvanic corrosion with steel is a concern. However, aluminum RMC is not permitted in direct contact with earth or concrete unless supplemental corrosion protection is provided.
              </p>
            </section>

            <section id="pvc" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PVC &mdash; Rigid Polyvinyl Chloride Conduit (Article 352)</h2>
              <p className="text-white/80 mb-4">
                PVC conduit is a non-metallic raceway that offers excellent corrosion resistance, low cost, and ease of installation. It is the dominant choice for underground and wet-location installations.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">PVC Schedule</th>
                      <th className="text-left py-3 px-4 text-white/60">Wall Thickness</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Uses</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Schedule 40</td>
                      <td className="py-3 px-4">Standard</td>
                      <td className="py-3 px-4">Underground, concrete encasement, above ground with support</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Schedule 80</td>
                      <td className="py-3 px-4">Heavy</td>
                      <td className="py-3 px-4">Exposed locations, areas subject to physical damage</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Type A (EB)</td>
                      <td className="py-3 px-4">Thin</td>
                      <td className="py-3 px-4">Encased in concrete only (electrical duct)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">PVC Expansion Joints</h3>
                <p className="text-white/70 text-sm">
                  PVC expands and contracts significantly with temperature changes. NEC 352.44 requires expansion fittings where the calculated expansion exceeds 1/4 inch. The expansion rate is approximately 4 inches per 100 feet for a 60&deg;F temperature change. Always account for this in exposed above-grade runs.
                </p>
              </div>
              <p className="text-white/80 mb-4">
                Because PVC is non-metallic, it cannot serve as an equipment grounding conductor. A separate equipment grounding conductor must be installed with PVC conduit runs. PVC also requires a separate bonding jumper at service equipment.
              </p>
              <p className="text-white/80">
                PVC is not permitted in hazardous (classified) locations, in locations exposed to ambient temperatures above its listed temperature rating, or for support of luminaires or equipment (except as specifically designed).
              </p>
            </section>

            <section id="flexible" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">FMC &amp; LFMC &mdash; Flexible Conduit (Articles 348 &amp; 350)</h2>
              <p className="text-white/80 mb-4">
                Flexible conduit is used where rigid conduit would be impractical, such as connections to equipment that vibrates, final connections to motors, and transitions around tight spaces.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-300 mb-3">FMC (Article 348)</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Dry locations only</li>
                    <li>&#8226; Spirally wound interlocked armor</li>
                    <li>&#8226; Available 3/8&quot; through 4&quot;</li>
                    <li>&#8226; Maximum 6 feet for grounding (348.60)</li>
                    <li>&#8226; EGC required over 6 feet</li>
                  </ul>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-300 mb-3">LFMC (Article 350)</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Wet and dry locations</li>
                    <li>&#8226; Liquid-tight plastic jacket over metal core</li>
                    <li>&#8226; Available 3/8&quot; through 4&quot;</li>
                    <li>&#8226; Maximum 6 feet for grounding (350.60)</li>
                    <li>&#8226; Ideal for outdoor motor connections</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80 mb-4">
                NEC 348.20 and 350.20 limit flexible conduit to a maximum of 360 degrees of bends between pull points, same as rigid conduit. Minimum bend radius requirements also apply per NEC Table 2, Chapter 9.
              </p>
              <p className="text-white/80">
                Liquidtight Flexible Nonmetallic Conduit (LFNC), covered in Article 356, is another option for wet locations. It is commonly used for spa and hot tub connections and in food processing areas where metal conduit could corrode.
              </p>
            </section>

            <section id="trade-sizes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Trade Sizes &amp; Dimensions</h2>
              <p className="text-white/80 mb-4">
                Conduit is specified by trade size (nominal size), not actual inside or outside diameter. The following table shows actual dimensions for common trade sizes:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Trade Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Metric Designator</th>
                      <th className="text-left py-3 px-4 text-white/60">EMT ID (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">RMC ID (in)</th>
                      <th className="text-left py-3 px-4 text-white/60">PVC Sch 40 ID (in)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/2&quot;</td>
                      <td className="py-3 px-4 font-mono">16</td>
                      <td className="py-3 px-4 font-mono">0.622</td>
                      <td className="py-3 px-4 font-mono">0.632</td>
                      <td className="py-3 px-4 font-mono">0.602</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3/4&quot;</td>
                      <td className="py-3 px-4 font-mono">21</td>
                      <td className="py-3 px-4 font-mono">0.824</td>
                      <td className="py-3 px-4 font-mono">0.836</td>
                      <td className="py-3 px-4 font-mono">0.804</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1&quot;</td>
                      <td className="py-3 px-4 font-mono">27</td>
                      <td className="py-3 px-4 font-mono">1.049</td>
                      <td className="py-3 px-4 font-mono">1.063</td>
                      <td className="py-3 px-4 font-mono">1.029</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-1/4&quot;</td>
                      <td className="py-3 px-4 font-mono">35</td>
                      <td className="py-3 px-4 font-mono">1.380</td>
                      <td className="py-3 px-4 font-mono">1.394</td>
                      <td className="py-3 px-4 font-mono">1.360</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-1/2&quot;</td>
                      <td className="py-3 px-4 font-mono">41</td>
                      <td className="py-3 px-4 font-mono">1.610</td>
                      <td className="py-3 px-4 font-mono">1.624</td>
                      <td className="py-3 px-4 font-mono">1.590</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">2&quot;</td>
                      <td className="py-3 px-4 font-mono">53</td>
                      <td className="py-3 px-4 font-mono">2.067</td>
                      <td className="py-3 px-4 font-mono">2.083</td>
                      <td className="py-3 px-4 font-mono">2.047</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                Note: Inside diameters directly affect conduit fill calculations. EMT and RMC of the same trade size have slightly different fill capacities due to wall thickness differences. Always use NEC Chapter 9, Table 4 for the specific conduit type you are installing.
              </p>
            </section>

            <section id="support-spacing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Support Spacing Requirements</h2>
              <p className="text-white/80 mb-4">
                Each conduit type has specific NEC requirements for maximum support spacing and distance from boxes, enclosures, and fittings:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Type</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Section</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Spacing</th>
                      <th className="text-left py-3 px-4 text-white/60">Max from Box</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">EMT</td>
                      <td className="py-3 px-4">358.30</td>
                      <td className="py-3 px-4">10 ft</td>
                      <td className="py-3 px-4">3 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">IMC</td>
                      <td className="py-3 px-4">342.30</td>
                      <td className="py-3 px-4">10 ft</td>
                      <td className="py-3 px-4">3 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">RMC</td>
                      <td className="py-3 px-4">344.30</td>
                      <td className="py-3 px-4">10 ft</td>
                      <td className="py-3 px-4">3 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">PVC</td>
                      <td className="py-3 px-4">352.30</td>
                      <td className="py-3 px-4">See Table 352.30</td>
                      <td className="py-3 px-4">3 ft</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">FMC</td>
                      <td className="py-3 px-4">348.30</td>
                      <td className="py-3 px-4">4.5 ft</td>
                      <td className="py-3 px-4">12 in</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">LFMC</td>
                      <td className="py-3 px-4">350.30</td>
                      <td className="py-3 px-4">4.5 ft</td>
                      <td className="py-3 px-4">12 in</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">PVC Support Spacing (Table 352.30)</h3>
                <p className="text-white/70 text-sm mb-2">
                  PVC support spacing varies by trade size: 1/2&quot; to 1&quot; = 3 ft, 1-1/4&quot; to 2&quot; = 5 ft, 2-1/2&quot; to 3&quot; = 6 ft, 3-1/2&quot; to 5&quot; = 7 ft, 6&quot; = 8 ft. PVC must be supported within 3 feet of every box, cabinet, or termination point.
                </p>
              </div>
            </section>

            <section id="fittings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fittings &amp; Connectors</h2>
              <p className="text-white/80 mb-4">
                Each conduit type requires specific fitting types. Using the wrong fitting can violate code and compromise the raceway&apos;s protection:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">EMT Fittings</p>
                  <p className="text-white/60 text-sm mt-1">Set-screw or compression couplings and connectors. Compression fittings are required for wet locations and concrete-tight installations. Die-cast (zinc) or steel fittings available. Indenter-type (crimp) fittings are also listed.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">IMC &amp; RMC Fittings</p>
                  <p className="text-white/60 text-sm mt-1">Threaded couplings and connectors. IMC and RMC share the same thread specifications so fittings are interchangeable. Running threads are not permitted for coupling (344.42). Use listed unions, conduit bodies, or couplings instead.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">PVC Fittings</p>
                  <p className="text-white/60 text-sm mt-1">Solvent-cemented couplings and connectors. PVC cement must be compatible with the conduit material. Allow proper cure time before pulling conductors. Factory elbows and LBs are available to avoid field bending with heat.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-orange-400 font-semibold">Flexible Conduit Fittings</p>
                  <p className="text-white/60 text-sm mt-1">Squeeze connectors, screw-in connectors, and set-screw fittings. LFMC requires liquidtight fittings. Always verify the fitting is listed for the specific flex type and size you are using.</p>
                </div>
              </div>
            </section>

            <section id="selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How to Choose the Right Conduit</h2>
              <p className="text-white/80 mb-4">
                Selecting the appropriate conduit type depends on the installation environment, code requirements, budget, and practical considerations:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Installation Scenario</th>
                      <th className="text-left py-3 px-4 text-white/60">Best Choice</th>
                      <th className="text-left py-3 px-4 text-white/60">Why</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Commercial interior walls &amp; ceilings</td>
                      <td className="py-3 px-4 font-semibold">EMT</td>
                      <td className="py-3 px-4">Low cost, easy to bend, lightweight</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Underground feeder runs</td>
                      <td className="py-3 px-4 font-semibold">PVC Sch 40</td>
                      <td className="py-3 px-4">Corrosion resistant, low cost, easy assembly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Service mast / riser</td>
                      <td className="py-3 px-4 font-semibold">RMC</td>
                      <td className="py-3 px-4">Required strength for weather head support</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Motor final connection</td>
                      <td className="py-3 px-4 font-semibold">LFMC</td>
                      <td className="py-3 px-4">Vibration isolation, moisture protection</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Parking garage (exposed)</td>
                      <td className="py-3 px-4 font-semibold">IMC or RMC</td>
                      <td className="py-3 px-4">Physical damage protection needed</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Hazardous location</td>
                      <td className="py-3 px-4 font-semibold">RMC or IMC</td>
                      <td className="py-3 px-4">Required by Articles 500-516</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                Always verify local amendments to the NEC. Some jurisdictions require specific conduit types in certain occupancies or prohibit types that the NEC otherwise permits. Check with your AHJ (Authority Having Jurisdiction) when in doubt.
              </p>
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
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide: NEC Chapter 9 Tables</h3>
                </Link>
                <Link href="/blog/thhn-vs-thwn-wire-differences" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-orange-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">THHN vs THWN: Wire Differences Explained</h3>
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
