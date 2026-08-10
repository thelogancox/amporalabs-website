import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "PVC Conduit Installation Guide: Gluing, Bending & Expansion Joints",
  description: "Complete PVC conduit installation guide covering Schedule 40 vs 80 differences, proper PVC cement application techniques, heat bending procedures, expansion fitting requirements for temperature changes, NEC Article 352 support spacing tables, underground burial depths, and common installation mistakes to avoid.",
  keywords: [
    "pvc conduit installation",
    "pvc conduit glue",
    "pvc conduit bending",
    "schedule 40 vs 80 conduit",
    "pvc expansion fitting",
    "pvc conduit cement",
    "pvc conduit support spacing",
    "pvc conduit fittings",
    "electrical pvc conduit",
    "pvc conduit underground"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/pvc-conduit-installation-guide",
  },
  openGraph: {
    title: "PVC Conduit Installation Guide: Gluing, Bending & Expansion Joints - Ampora",
    description: "Master PVC conduit installation with this comprehensive guide covering Schedule 40 vs 80, cementing techniques, heat bending, expansion fittings, and NEC Article 352 requirements.",
    url: "https://amporalabs.com/blog/pvc-conduit-installation-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="PVC conduit runs with fittings and expansion joint">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Horizontal PVC Conduit Run - Top */}
      <rect x="30" y="40" width="140" height="12" rx="6" fill="#d1d5db" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="100" y="35" textAnchor="middle" fill="#9ca3af" fontSize="6">Schedule 40 PVC</text>

      {/* Coupling Joint */}
      <rect x="170" y="37" width="20" height="18" rx="3" fill="#6b7280" fillOpacity="0.4" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="180" y="62" textAnchor="middle" fill="#9ca3af" fontSize="5">Coupling</text>

      {/* Continue Conduit */}
      <rect x="190" y="40" width="80" height="12" rx="6" fill="#d1d5db" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>

      {/* 90-degree Elbow */}
      <path d="M270 46 Q290 46 290 66" fill="none" stroke="#9ca3af" strokeWidth="12" strokeLinecap="round" opacity="0.3"/>
      <path d="M270 46 Q290 46 290 66" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
      <text x="300" y="46" fill="#9ca3af" fontSize="5">90&deg; Elbow</text>

      {/* Vertical Run Down */}
      <rect x="284" y="66" width="12" height="50" rx="6" fill="#d1d5db" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>

      {/* Expansion Joint - Center Feature */}
      <g transform="translate(30, 85)">
        <rect x="0" y="0" width="60" height="14" rx="7" fill="#d1d5db" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>
        <rect x="60" y="-3" width="30" height="20" rx="4" fill="#10b981" fillOpacity="0.2" stroke="#10b981" strokeWidth="1.5"/>
        {/* Expansion arrows */}
        <line x1="65" y1="7" x2="72" y2="7" stroke="#10b981" strokeWidth="1"/>
        <line x1="78" y1="7" x2="85" y2="7" stroke="#10b981" strokeWidth="1"/>
        <polygon points="72,4 72,10 67,7" fill="#10b981"/>
        <polygon points="78,4 78,10 83,7" fill="#10b981"/>
        <rect x="90" y="0" width="60" height="14" rx="7" fill="#d1d5db" fillOpacity="0.3" stroke="#9ca3af" strokeWidth="1.5"/>
        <text x="75" y="28" textAnchor="middle" fill="#10b981" fontSize="6" fontWeight="bold">Expansion Fitting</text>
      </g>

      {/* Heat Bend Section */}
      <g transform="translate(180, 90)">
        <rect x="0" y="10" width="50" height="10" rx="5" fill="#d1d5db" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <path d="M50 15 Q70 15 80 35" fill="none" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round" opacity="0.3"/>
        <path d="M50 15 Q70 15 80 35" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <rect x="76" y="35" width="10" height="30" rx="5" fill="#d1d5db" fillOpacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        {/* Heat waves */}
        <path d="M58 0 Q60 3 58 6" stroke="#ef4444" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M63 0 Q65 3 63 6" stroke="#ef4444" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <path d="M68 0 Q70 3 68 6" stroke="#ef4444" strokeWidth="0.8" fill="none" opacity="0.6"/>
        <text x="63" y="-4" textAnchor="middle" fill="#f59e0b" fontSize="6" fontWeight="bold">Heat Bend</text>
      </g>

      {/* Support Clamps */}
      <g transform="translate(60, 40)">
        <rect x="-3" y="-5" width="6" height="22" rx="1" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <line x1="0" y1="17" x2="0" y2="24" stroke="#60a5fa" strokeWidth="1.5"/>
      </g>
      <g transform="translate(130, 40)">
        <rect x="-3" y="-5" width="6" height="22" rx="1" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <line x1="0" y1="17" x2="0" y2="24" stroke="#60a5fa" strokeWidth="1.5"/>
      </g>
      <g transform="translate(230, 40)">
        <rect x="-3" y="-5" width="6" height="22" rx="1" fill="none" stroke="#60a5fa" strokeWidth="1.5"/>
        <line x1="0" y1="17" x2="0" y2="24" stroke="#60a5fa" strokeWidth="1.5"/>
      </g>
      <text x="130" y="74" textAnchor="middle" fill="#60a5fa" fontSize="5">Support Clamps</text>

      {/* PVC Cement Label */}
      <g transform="translate(320, 90)">
        <rect x="0" y="0" width="45" height="55" rx="4" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1.5"/>
        <text x="22" y="16" textAnchor="middle" fill="#7c3aed" fontSize="6" fontWeight="bold">PVC</text>
        <text x="22" y="26" textAnchor="middle" fill="#7c3aed" fontSize="5">CEMENT</text>
        <circle cx="22" cy="38" r="8" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.5"/>
        <text x="22" y="41" textAnchor="middle" fill="#7c3aed" fontSize="6">&#9679;</text>
      </g>
    </svg>
  );
}

export default function PvcConduitInstallationGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "PVC Conduit Installation Guide", url: "https://amporalabs.com/blog/pvc-conduit-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="PVC Conduit Installation Guide: Gluing, Bending & Expansion Joints"
          description="Complete guide to PVC conduit installation covering Schedule 40 vs 80, cementing techniques, heat bending, expansion fittings, and NEC Article 352 requirements."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/pvc-conduit-installation-guide"
          wordCount={4800}
          keywords={["pvc conduit installation", "pvc conduit cement", "pvc conduit bending", "expansion fitting", "NEC 352"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">PVC Conduit Installation Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600/20 text-emerald-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              PVC Conduit Installation: Gluing, Bending &amp; Expansion Joints
            </h1>
            <p className="text-xl text-white/70">
              PVC conduit is one of the most widely used raceway systems in electrical construction, valued for its corrosion resistance, lightweight handling, and low material cost. This guide covers everything you need to know about installing PVC conduit per NEC Article 352 &mdash; from selecting the right schedule type, to proper cementing technique, heat bending procedures, expansion fitting requirements, support spacing, and underground installation best practices.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#pvc-conduit-types" className="hover:text-purple-400">PVC Conduit Types: Schedule 40, 80, EB &amp; DB</a></li>
              <li><a href="#nec-article-352" className="hover:text-purple-400">NEC Article 352 Requirements</a></li>
              <li><a href="#cementing-technique" className="hover:text-purple-400">Proper PVC Cementing Technique</a></li>
              <li><a href="#heat-bending" className="hover:text-purple-400">Heat Bending PVC Conduit</a></li>
              <li><a href="#expansion-fittings" className="hover:text-purple-400">Expansion Fitting Requirements</a></li>
              <li><a href="#support-spacing" className="hover:text-purple-400">Support and Securing Spacing Table</a></li>
              <li><a href="#underground-installation" className="hover:text-purple-400">Underground PVC Installation</a></li>
              <li><a href="#exposed-locations" className="hover:text-purple-400">PVC in Exposed Locations</a></li>
              <li><a href="#temperature-limitations" className="hover:text-purple-400">Temperature Limitations</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common PVC Installation Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="pvc-conduit-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PVC Conduit Types: Schedule 40, 80, EB &amp; DB</h2>
              <p className="text-white/80 mb-4">
                Not all PVC conduit is the same. The NEC and UL standards define several types of rigid PVC conduit (formally called <strong>Rigid Polyvinyl Chloride Conduit, Type PVC</strong>), each designed for specific installation conditions. Understanding the differences is critical for code compliance and a durable installation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-emerald-500/20">
                  <h3 className="font-semibold text-emerald-400 mb-3">Schedule 40 PVC</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Wall thickness:</strong> Standard wall (e.g., 1&quot; = 0.133&quot; wall)</li>
                    <li><strong>Color:</strong> Typically dark gray</li>
                    <li><strong>Use:</strong> Underground, concealed in walls, above-ground with protection</li>
                    <li><strong>Sunlight:</strong> Listed for sunlight resistance when so marked</li>
                    <li><strong>Most common:</strong> Standard choice for most electrical installations</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Schedule 80 PVC</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Wall thickness:</strong> Heavy wall (e.g., 1&quot; = 0.179&quot; wall)</li>
                    <li><strong>Color:</strong> Dark gray (same OD, smaller ID than Sch. 40)</li>
                    <li><strong>Use:</strong> Exposed locations subject to physical damage</li>
                    <li><strong>Required:</strong> Where conduit exits underground and is subject to damage</li>
                    <li><strong>Strength:</strong> Higher crush and impact resistance</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">Type EB (Encased Burial)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Wall thickness:</strong> Thin wall (thinnest of the types)</li>
                    <li><strong>Use:</strong> Underground only, must be encased in concrete</li>
                    <li><strong>Cost:</strong> Lowest material cost per foot</li>
                    <li><strong>Limitation:</strong> Cannot be used without concrete encasement</li>
                    <li><strong>Common:</strong> Duct bank construction, parking lot feeders</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Type DB (Direct Burial)</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Wall thickness:</strong> Between EB and Schedule 40</li>
                    <li><strong>Use:</strong> Underground direct burial without concrete</li>
                    <li><strong>Advantage:</strong> No concrete encasement required</li>
                    <li><strong>Limitation:</strong> Underground use only, not for above-grade</li>
                    <li><strong>Application:</strong> Long underground runs, utility feeds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Schedule 40 vs Schedule 80 &mdash; Quick Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Trade Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Sch. 40 Wall</th>
                        <th className="text-left py-2 px-3 text-white/60">Sch. 80 Wall</th>
                        <th className="text-left py-2 px-3 text-white/60">Sch. 40 ID</th>
                        <th className="text-left py-2 px-3 text-white/60">Sch. 80 ID</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">1/2&quot;</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">0.109&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">0.147&quot;</td>
                        <td className="py-2 px-3 font-mono">0.622&quot;</td>
                        <td className="py-2 px-3 font-mono">0.546&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">3/4&quot;</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">0.113&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">0.154&quot;</td>
                        <td className="py-2 px-3 font-mono">0.824&quot;</td>
                        <td className="py-2 px-3 font-mono">0.742&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">1&quot;</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">0.133&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">0.179&quot;</td>
                        <td className="py-2 px-3 font-mono">1.049&quot;</td>
                        <td className="py-2 px-3 font-mono">0.957&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">2&quot;</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">0.154&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">0.218&quot;</td>
                        <td className="py-2 px-3 font-mono">2.067&quot;</td>
                        <td className="py-2 px-3 font-mono">1.939&quot;</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">4&quot;</td>
                        <td className="py-2 px-3 font-mono text-emerald-400">0.237&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">0.337&quot;</td>
                        <td className="py-2 px-3 font-mono">4.026&quot;</td>
                        <td className="py-2 px-3 font-mono">3.826&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/50 text-xs mt-3">Note: Schedule 80 has the same outer diameter as Schedule 40 but a thicker wall, resulting in a smaller internal diameter. This affects <Link href="/blog/conduit-fill-calculation-guide" className="text-purple-400 hover:text-purple-300">conduit fill calculations</Link>.</p>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">When to Use Schedule 80</h4>
                <p className="text-white/70 text-sm">
                  NEC 352.10(F) requires Schedule 80 PVC where the conduit is <strong>exposed to physical damage</strong>. Common locations include: conduit risers from underground to above-grade, exposed runs in parking garages, loading docks, outdoor locations near vehicle traffic, mechanical rooms at floor level, and any location where the AHJ determines the conduit is subject to physical damage. When in doubt, use Schedule 80 for exposed conduit.
                </p>
              </div>
            </section>

            <section id="nec-article-352" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 352 Requirements</h2>
              <p className="text-white/80 mb-4">
                <strong>NEC Article 352</strong> governs the installation of Rigid Polyvinyl Chloride Conduit (PVC). This article covers permitted uses, prohibited uses, installation requirements, and construction specifications. Understanding the key sections ensures your PVC conduit installations pass inspection. For a broader overview of all conduit types, see our <Link href="/blog/electrical-conduit-types-guide" className="text-purple-400 hover:text-purple-300">electrical conduit types guide</Link>.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">352.10 &mdash; Permitted Uses</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Concealed in walls, floors, and ceilings</li>
                    <li>In locations subject to severe corrosive influences</li>
                    <li>In cinder fill</li>
                    <li>In wet locations</li>
                    <li>Direct buried (with proper cover)</li>
                    <li>Exposed where not subject to physical damage (Sch. 40)</li>
                    <li>Exposed where subject to physical damage (Sch. 80 only)</li>
                    <li>Underground with concrete encasement (Type EB or Sch. 40)</li>
                    <li>Support of conduit bodies not larger than the conduit</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">352.12 &mdash; Prohibited Uses</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>In hazardous (classified) locations (except as permitted)</li>
                    <li>For support of luminaires or equipment</li>
                    <li>Where subject to ambient temperature above 50&deg;C (122&deg;F)</li>
                    <li>For conductors with insulation temperature exceeding those for which the conduit is listed</li>
                    <li>Where exposed to direct sunlight unless listed and marked for sunlight resistance</li>
                    <li>In theater and similar locations (NEC Article 518)</li>
                    <li>Where the conduit would be exposed to physical damage (unless Sch. 80)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Key Article 352 Sections at a Glance</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>352.20 &mdash; Trade Sizes:</strong> 1/2&quot; through 6&quot;</li>
                  <li><strong>352.22 &mdash; Number of Bends:</strong> Not more than 360&deg; of bends (total) between pull points</li>
                  <li><strong>352.24 &mdash; Bends:</strong> Bends shall be made so the conduit is not damaged and the internal diameter is not effectively reduced</li>
                  <li><strong>352.26 &mdash; Bends (radius):</strong> Minimum bending radius per NEC Table 2 of Chapter 9</li>
                  <li><strong>352.28 &mdash; Trimming:</strong> Cut ends must be trimmed inside and outside to remove rough edges</li>
                  <li><strong>352.30 &mdash; Securing and Supporting:</strong> Must be secured within 3 feet of each box/fitting and at intervals per Table 352.30</li>
                  <li><strong>352.44 &mdash; Expansion Fittings:</strong> Required where necessary to compensate for thermal expansion and contraction</li>
                  <li><strong>352.46 &mdash; Bushings:</strong> A bushing or adapter must be provided at terminations to protect wires</li>
                  <li><strong>352.48 &mdash; Joints:</strong> All joints must be made by an approved method (typically solvent cement)</li>
                  <li><strong>352.60 &mdash; Grounding:</strong> Separate equipment grounding conductor required (PVC is nonmetallic)</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Equipment Grounding Reminder</h4>
                <p className="text-white/70 text-sm">
                  Because PVC conduit is nonmetallic, it <strong>cannot serve as an equipment grounding conductor</strong>. NEC 352.60 requires a separate equipment grounding conductor (EGC) to be installed inside the conduit for all circuits. This is one of the most significant differences between PVC and metallic conduit systems (EMT, RMC, IMC) where the conduit itself can serve as the EGC.
                </p>
              </div>
            </section>

            <section id="cementing-technique" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Proper PVC Cementing Technique</h2>
              <p className="text-white/80 mb-4">
                A properly cemented PVC joint is a permanent, watertight connection that actually fuses the conduit and fitting together through a chemical welding process. The solvent cement softens the PVC surfaces, allowing them to intermix at the molecular level. When the solvent evaporates, the joint becomes a single, solid piece of PVC &mdash; often stronger than the conduit itself.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Cement Types</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">PVC Cement (Gray)</p>
                  <p className="text-white/60 text-sm">Standard electrical PVC cement for Schedule 40 and 80 conduit. Must be UL listed for electrical conduit. Do not use plumbing PVC cement &mdash; it has different formulations.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">PVC Primer (Purple or Clear)</p>
                  <p className="text-white/60 text-sm">Pre-softens the PVC surface for better cement penetration. Required by some specifications and AHJs. Always recommended for Schedule 80 and larger sizes (2&quot; and above).</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Step-by-Step Cementing Process</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Cut and Deburr</p>
                    <p className="text-white/60 text-sm">Cut the conduit square using a PVC cutter, fine-tooth saw, or miter box. Remove all burrs from the inside and outside of the cut end using a deburring tool or utility knife. Rough edges can damage conductor insulation during <Link href="/blog/wire-pulling-techniques-guide" className="text-purple-400 hover:text-purple-300">wire pulling</Link>.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Dry Fit</p>
                    <p className="text-white/60 text-sm">Test-fit the conduit into the fitting. The conduit should enter the fitting socket approximately 1/3 to 2/3 of the way with a slight interference fit. If the conduit slides all the way in loosely, the fitting may be oversized &mdash; use a different fitting.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Clean the Surfaces</p>
                    <p className="text-white/60 text-sm">Wipe the conduit end and fitting socket with a clean, dry rag to remove dirt, moisture, and debris. For the strongest joint, use PVC cleaner/primer on both surfaces. The purple primer leaves a visible mark that proves primer was used.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Apply PVC Cement</p>
                    <p className="text-white/60 text-sm">Apply a generous, even coat of PVC cement to the outside of the conduit end and a thin coat to the inside of the fitting socket. Work quickly &mdash; the cement begins to set in seconds. Use the correct applicator size: the dauber should be roughly half the diameter of the conduit.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Assemble Immediately</p>
                    <p className="text-white/60 text-sm">Insert the conduit into the fitting with a slight twisting motion (1/4 turn) to spread the cement evenly. Push the conduit fully into the fitting socket until it bottoms out. Hold the joint together for 15&ndash;30 seconds to prevent the joint from pushing apart due to the tapered fit.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Verify and Cure</p>
                    <p className="text-white/60 text-sm">A bead of cement should be visible around the entire circumference of the joint. If there are dry spots, the joint may not be fully sealed. Allow proper cure time before handling: 15 minutes minimum for handling, 24 hours for full cure, longer in cold weather.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Common Cementing Mistakes</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Too little cement:</strong> Results in incomplete chemical weld &mdash; joint can leak or separate under stress</li>
                  <li><strong>Waiting too long:</strong> Cement begins to dry within seconds. If the surfaces start to set before assembly, you must start over</li>
                  <li><strong>No primer on large sizes:</strong> For 2&quot; and above, primer is critical for proper solvent penetration of the thicker walls</li>
                  <li><strong>Using plumbing cement:</strong> Plumbing PVC cement is not formulated for electrical conduit &mdash; it may not provide a proper bond</li>
                  <li><strong>Cold weather application:</strong> Below 40&deg;F (4&deg;C), cement sets slowly and may not bond properly. Use cold-weather cement or warm the materials</li>
                  <li><strong>Wet surfaces:</strong> Moisture prevents proper chemical welding. Wipe surfaces completely dry before cementing</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Cure Time by Temperature</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Temperature Range</th>
                        <th className="text-left py-2 px-3 text-white/60">Initial Set</th>
                        <th className="text-left py-2 px-3 text-white/60">Handling Strength</th>
                        <th className="text-left py-2 px-3 text-white/60">Full Cure</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">60&ndash;100&deg;F (16&ndash;38&deg;C)</td>
                        <td className="py-2 px-3 font-mono text-green-400">30 sec</td>
                        <td className="py-2 px-3 font-mono text-green-400">15 min</td>
                        <td className="py-2 px-3 font-mono text-green-400">24 hrs</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">40&ndash;60&deg;F (4&ndash;16&deg;C)</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">2 min</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">30 min</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">48 hrs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Below 40&deg;F (below 4&deg;C)</td>
                        <td className="py-2 px-3 font-mono text-red-400">5+ min</td>
                        <td className="py-2 px-3 font-mono text-red-400">1+ hr</td>
                        <td className="py-2 px-3 font-mono text-red-400">72+ hrs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="heat-bending" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Heat Bending PVC Conduit</h2>
              <p className="text-white/80 mb-4">
                PVC conduit can be field-bent using heat, which is one of its major advantages over metallic conduit systems. Heat bending allows custom angles, offsets, and sweeps without factory fittings. However, improper bending technique can ruin the conduit by kinking, flattening, or discoloring it.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Approved Heating Methods</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20">
                  <p className="font-semibold text-green-400 mb-1">PVC Heat Blanket (Preferred)</p>
                  <p className="text-white/60 text-sm">Electric heating blankets designed specifically for PVC conduit bending. Wraps around the conduit for even, controlled heating. Available in various sizes. This is the safest and most consistent method.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-4 border border-green-500/20">
                  <p className="font-semibold text-green-400 mb-1">PVC Hot Box / Oven</p>
                  <p className="text-white/60 text-sm">An enclosed heating chamber that uniformly heats the conduit section. Ideal for shop fabrication of large-radius bends and offsets. Provides the most uniform heat distribution.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Prohibited Heating Methods</h4>
                <p className="text-white/70 text-sm mb-2">
                  NEC 352.24 requires that bends be made so the conduit is not damaged. The following heat sources must <strong>never</strong> be used to bend PVC conduit:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Open flame (torch):</strong> Creates hotspots, scorches/chars the PVC, releases toxic fumes, causes uneven heating and kinking</li>
                  <li><strong>Heat gun (uncontrolled):</strong> Concentrated heat can scorch or bubble the surface before the core is pliable</li>
                  <li><strong>Boiling water:</strong> Insufficient temperature for proper bending, and cooling happens too fast to maintain the bend</li>
                </ul>
                <p className="text-white/70 text-sm mt-2">
                  Burning PVC releases <strong>hydrogen chloride gas</strong>, which is toxic and corrosive. Always use controlled, indirect heat sources.
                </p>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Bending Procedure</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Mark the Bend Location</p>
                    <p className="text-white/60 text-sm">Measure and mark the center of the bend on the conduit. For a 90&deg; bend, the heated section should be approximately 10 times the conduit trade size in length (e.g., 10&quot; for 1&quot; conduit).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Apply Even Heat</p>
                    <p className="text-white/60 text-sm">Wrap the PVC heating blanket around the marked section. Heat until the conduit is uniformly pliable &mdash; it should feel soft like a rubber hose and bend easily under hand pressure. Rotate or reposition the blanket as needed for even heating. Target temperature: approximately 250&ndash;300&deg;F (121&ndash;149&deg;C).</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Make the Bend</p>
                    <p className="text-white/60 text-sm">Remove the heat source and immediately bend the conduit to the desired angle using a template, jig, or measured reference. Bend smoothly and steadily &mdash; do not jerk or overbend. The conduit cross-section should remain round without flattening. For larger sizes, plug the ends to maintain internal pressure and prevent collapse.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-orange-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Hold and Cool</p>
                    <p className="text-white/60 text-sm">Hold the bend in position until the PVC cools and hardens (use a wet rag to accelerate cooling if needed). PVC has memory when warm and will spring back slightly. Overbend by a few degrees to compensate. The conduit must maintain at least the minimum bend radius per NEC Table 2, Chapter 9.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Minimum Bending Radius for PVC Conduit</h4>
                <p className="text-white/70 text-sm mb-3">Per NEC Table 2, Chapter 9 (one-shot and full-shoe benders, conduit with conductors):</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Trade Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Minimum Radius</th>
                        <th className="text-left py-2 px-3 text-white/60">Trade Size</th>
                        <th className="text-left py-2 px-3 text-white/60">Minimum Radius</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">1/2&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">4&quot;</td>
                        <td className="py-2 px-3">2&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">12&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">3/4&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">4-1/2&quot;</td>
                        <td className="py-2 px-3">2-1/2&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">14-1/2&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">1&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">5-3/4&quot;</td>
                        <td className="py-2 px-3">3&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">18&quot;</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">1-1/4&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">7-1/4&quot;</td>
                        <td className="py-2 px-3">4&quot;</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">24&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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

            <section id="expansion-fittings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Expansion Fitting Requirements</h2>
              <p className="text-white/80 mb-4">
                PVC conduit has a <strong>coefficient of thermal expansion</strong> approximately 5 times greater than steel. A 100-foot run of PVC conduit can expand or contract by over <strong>4 inches</strong> with a 100&deg;F temperature change. Without expansion fittings, this movement will crack cemented joints, pull conduit out of fittings, or warp the conduit run.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">PVC Expansion Rate</h4>
                <p className="text-white/70 mb-3">PVC conduit expands approximately <strong>0.042 inches per 10 feet per 10&deg;F</strong> of temperature change. Use this formula:</p>
                <div className="bg-black/40 rounded-lg p-4 font-mono text-sm text-cyan-400 mb-3">
                  Expansion (in) = Length (ft) &times; Temp Change (&deg;F) &times; 0.00042 in/ft/&deg;F
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Run Length</th>
                        <th className="text-left py-2 px-3 text-white/60">&Delta;T = 30&deg;F</th>
                        <th className="text-left py-2 px-3 text-white/60">&Delta;T = 60&deg;F</th>
                        <th className="text-left py-2 px-3 text-white/60">&Delta;T = 100&deg;F</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">25 ft</td>
                        <td className="py-2 px-3 font-mono text-green-400">0.32&quot;</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">0.63&quot;</td>
                        <td className="py-2 px-3 font-mono text-orange-400">1.05&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">50 ft</td>
                        <td className="py-2 px-3 font-mono text-green-400">0.63&quot;</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">1.26&quot;</td>
                        <td className="py-2 px-3 font-mono text-orange-400">2.10&quot;</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">100 ft</td>
                        <td className="py-2 px-3 font-mono text-green-400">1.26&quot;</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">2.52&quot;</td>
                        <td className="py-2 px-3 font-mono text-red-400">4.20&quot;</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">200 ft</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">2.52&quot;</td>
                        <td className="py-2 px-3 font-mono text-red-400">5.04&quot;</td>
                        <td className="py-2 px-3 font-mono text-red-400">8.40&quot;</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">When Expansion Fittings Are Required</h3>
              <p className="text-white/80 mb-4">
                NEC 352.44 requires expansion fittings where <strong>necessary to compensate for thermal expansion and contraction</strong>. In practice, expansion fittings are needed in these situations:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Long exposed runs:</strong> Any PVC conduit run exposed to significant temperature variation (roof-mounted, exterior walls, parking garages, unconditioned spaces)</li>
                <li><strong>Straight runs over 25 feet:</strong> In exposed locations with significant temperature swings, install an expansion fitting approximately every 25&ndash;50 feet</li>
                <li><strong>Risers:</strong> Vertical conduit runs through multiple floors or from underground to above-grade, especially on building exteriors</li>
                <li><strong>Between buildings:</strong> Any run exposed to outdoor temperature extremes</li>
              </ul>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Expansion Fitting Installation Tips</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Set the gap:</strong> Install the expansion fitting at approximately the midpoint of its travel range based on the current temperature. Most fittings have a reference mark &mdash; set it based on whether you expect the conduit to expand (hot weather installation) or contract (cold weather installation).</li>
                  <li><strong>Anchor one end:</strong> The conduit must be anchored on one side of the expansion fitting and allowed to slide freely on the other side. Use a fixed support (pipe clamp) on one end and allow the other end to slide on roller supports or oversized hangers.</li>
                  <li><strong>Do not cement the sliding end:</strong> One side of the expansion fitting is cemented permanently. The other side slides &mdash; do not cement it, or the fitting cannot accommodate movement.</li>
                  <li><strong>Waterproofing:</strong> Expansion fittings include O-rings or gaskets for outdoor/wet locations. Verify the seal is intact before installation.</li>
                </ul>
              </div>
            </section>

            <section id="support-spacing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Support and Securing Spacing Table</h2>
              <p className="text-white/80 mb-4">
                NEC 352.30 requires PVC conduit to be <strong>secured within 3 feet of each box, cabinet, conduit body, or other conduit termination</strong>. Between terminations, the conduit must be supported at intervals not exceeding the values in NEC Table 352.30. Proper support prevents sagging, maintains alignment, and protects cemented joints from stress.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conduit Trade Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Maximum Support Spacing</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1/2&quot; &ndash; 1&quot;</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">3 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">1-1/4&quot; &ndash; 2&quot;</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">5 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">2-1/2&quot; &ndash; 3&quot;</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">6 feet</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">3-1/2&quot; &ndash; 5&quot;</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">7 feet</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6&quot;</td>
                      <td className="py-3 px-4 font-mono text-emerald-400">8 feet</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm mb-4">Source: NEC Table 352.30</p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Support Requirements Summary</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Within 3 ft of termination:</strong> Must be secured within 3 feet of every box, conduit body, cabinet, or fitting (352.30(A))</li>
                  <li><strong>Horizontal runs:</strong> Support at intervals per Table 352.30 to prevent sag between supports</li>
                  <li><strong>Vertical runs:</strong> Same spacing applies. Use conduit clamps or straps rated for the weight of the conduit plus conductors</li>
                  <li><strong>Support types:</strong> Use listed PVC conduit straps, clamps, or hangers. Do not use wire ties, duct tape, or unapproved support methods</li>
                  <li><strong>Exception:</strong> Horizontal runs through framing members (studs, joists) where the conduit is supported at each framing member do not require additional securing</li>
                </ul>
              </div>
            </section>

            <section id="underground-installation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Underground PVC Installation</h2>
              <p className="text-white/80 mb-4">
                PVC conduit is the most popular choice for underground electrical installations due to its corrosion resistance, smooth interior for easy wire pulling, and relatively low cost. For detailed information about underground wiring methods, see our <Link href="/blog/underground-wiring-installation-guide" className="text-purple-400 hover:text-purple-300">underground wiring installation guide</Link>.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Minimum Cover Requirements (NEC Table 300.5)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Circuit Voltage &amp; Location</th>
                      <th className="text-left py-3 px-4 text-white/60">PVC Conduit (Direct Burial)</th>
                      <th className="text-left py-3 px-4 text-white/60">PVC Under Concrete</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0&ndash;600V, under buildings</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0&quot; (in raceway)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">0&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0&ndash;600V, general (no vehicles)</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">18&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">12&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0&ndash;600V, under roadways</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24&quot;</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">24&quot;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">0&ndash;600V, residential (120V, 20A GFCI)</td>
                      <td className="py-3 px-4 font-mono text-green-400">12&quot;</td>
                      <td className="py-3 px-4 font-mono text-green-400">6&quot;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Over 600V</td>
                      <td className="py-3 px-4 font-mono text-orange-400">30&quot;</td>
                      <td className="py-3 px-4 font-mono text-orange-400">18&quot;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Underground Installation Best Practices</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Trench Preparation</p>
                  <p className="text-white/60 text-sm">Excavate the trench to the required depth plus 3&ndash;4 inches for bedding material. Remove all rocks, debris, and sharp objects from the trench bottom. Grade the trench bottom to ensure uniform support along the entire conduit run &mdash; unsupported spans can cause the conduit to sag or break at joints.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Bedding and Backfill</p>
                  <p className="text-white/60 text-sm">Place 3&ndash;4 inches of sand or fine granular material below and around the conduit. Backfill with clean fill, free of rocks larger than 3 inches. Compact backfill in 6-inch lifts for areas subject to vehicle traffic. Never use heavy equipment directly over the conduit until adequate cover is achieved.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Warning Tape</p>
                  <p className="text-white/60 text-sm">Install detectable warning tape (red for electrical) approximately 12 inches above the conduit. This alerts future excavators before they reach the conduit depth. Some jurisdictions require specific tape types or marking methods.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="font-semibold text-white mb-1">Transition to Above Grade</p>
                  <p className="text-white/60 text-sm">Where conduit exits underground, use <strong>Schedule 80 PVC</strong> from 18 inches below grade to the termination point above grade. This section is subject to physical damage from lawn equipment, vehicle traffic, and UV exposure. Protect exposed risers with bollards or guard posts where necessary.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Underground Expansion Considerations</h4>
                <p className="text-white/70 text-sm">
                  PVC conduit buried underground experiences minimal temperature variation once below the frost line &mdash; soil temperatures remain relatively stable year-round. In most underground installations, expansion fittings are <strong>not required</strong> because the soil constrains movement and temperature changes are small. However, expansion fittings <strong>are required</strong> at the transition point where conduit emerges from underground to above-grade, as this is where the greatest temperature differential occurs.
                </p>
              </div>
            </section>

            <section id="exposed-locations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">PVC in Exposed Locations</h2>
              <p className="text-white/80 mb-4">
                PVC conduit can be installed in exposed locations, but additional considerations apply regarding physical protection, sunlight resistance, support, and thermal expansion. NEC 352.10(F) and (G) define the specific requirements.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Schedule 40 Exposed</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Permitted where <strong>not subject to physical damage</strong>. Suitable for:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Interior walls above 7 feet</li>
                    <li>Ceiling-mounted runs</li>
                    <li>Mechanical/electrical rooms (above damage height)</li>
                    <li>Residential attics and crawlspaces</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Schedule 80 Exposed</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Required where <strong>subject to physical damage</strong>. Examples:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Underground risers to above-grade</li>
                    <li>Parking garages at floor level</li>
                    <li>Loading docks and warehouse floors</li>
                    <li>Exterior walls below 7 feet</li>
                    <li>Any area with vehicle or foot traffic</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Sunlight Resistance</h4>
                <p className="text-white/70 text-sm">
                  PVC conduit exposed to direct sunlight must be <strong>listed and marked as sunlight-resistant</strong> per NEC 352.12(D). Standard PVC conduit degrades under prolonged UV exposure &mdash; it becomes brittle, discolors, and can crack or shatter. Most major manufacturers now produce sunlight-resistant PVC conduit (look for the &quot;SUN RES&quot; or sunlight-resistant marking printed on the conduit). Never install non-sunlight-rated PVC in outdoor exposed locations.
                </p>
              </div>
            </section>

            <section id="temperature-limitations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Temperature Limitations</h2>
              <p className="text-white/80 mb-4">
                PVC conduit is a thermoplastic material that softens at elevated temperatures and becomes brittle at extremely low temperatures. Understanding these limitations is essential for proper specification and installation.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-500/20 text-center">
                  <p className="text-3xl font-bold text-blue-400 mb-2">-20&deg;F</p>
                  <p className="text-white/60 text-sm">Minimum Ambient Temperature</p>
                  <p className="text-white/50 text-xs mt-1">Below this, PVC becomes very brittle and can shatter on impact</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20 text-center">
                  <p className="text-3xl font-bold text-green-400 mb-2">75&deg;C</p>
                  <p className="text-white/60 text-sm">Max Conductor Temperature Rating</p>
                  <p className="text-white/50 text-xs mt-1">Standard PVC conduit is listed for 75&deg;C conductor insulation temperature</p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-2">122&deg;F</p>
                  <p className="text-white/60 text-sm">Maximum Ambient Temperature</p>
                  <p className="text-white/50 text-xs mt-1">50&deg;C per NEC 352.12(C) &mdash; do not install in environments above this</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Temperature Derating Considerations</h4>
                <p className="text-white/70 text-sm mb-3">
                  When PVC conduit is installed in locations with high ambient temperatures or exposed to direct sunlight, the temperature inside the conduit can exceed the ambient air temperature by 10&ndash;20&deg;F or more. This affects conductor ampacity. Refer to NEC Table 310.15(B)(1)(1) for temperature correction factors applied to conductor ampacity. For a detailed explanation, see our guide on <Link href="/blog/conduit-fill-calculation-guide" className="text-purple-400 hover:text-purple-300">conduit fill calculations</Link>.
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Rooftop installations:</strong> NEC 310.15(B)(3)(c) requires additional temperature adders for conduit exposed to sunlight on or above rooftops</li>
                  <li><strong>Multiple conduits:</strong> Conduit banks in direct sunlight may require ampacity adjustments for mutual heating</li>
                  <li><strong>Dark-colored conduit:</strong> PVC absorbs more solar radiation than reflective metallic conduit, increasing internal temperatures</li>
                </ul>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Cold Weather Installation Precautions</h4>
                <p className="text-white/70 text-sm mb-2">
                  PVC conduit becomes increasingly brittle as temperatures drop below 32&deg;F (0&deg;C). Take these precautions during cold weather installation:
                </p>
                <ul className="text-white/60 text-sm space-y-1">
                  <li><strong>Handle carefully:</strong> Do not drop, throw, or strike PVC conduit in cold weather &mdash; it may shatter instead of flexing</li>
                  <li><strong>Store indoors:</strong> If possible, store conduit in a heated area before installation</li>
                  <li><strong>Cut gently:</strong> Use fine-tooth saws. Avoid snapping or breaking conduit to length</li>
                  <li><strong>Allow extra cure time:</strong> PVC cement cures much more slowly in cold temperatures (see cure time table above)</li>
                  <li><strong>Expansion gap:</strong> When installing in cold weather, leave additional expansion gap in expansion fittings since the conduit will expand significantly as temperatures rise</li>
                </ul>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common PVC Installation Mistakes</h2>
              <p className="text-white/80 mb-4">
                Even experienced electricians occasionally make PVC conduit installation errors that result in failed inspections, future maintenance problems, or code violations. Here are the most common mistakes and how to avoid them.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Missing Expansion Fittings</h4>
                  <p className="text-white/60 text-sm">
                    The most common PVC mistake. Long exposed runs without expansion fittings will crack joints, bow conduit, and pull out of boxes. Always calculate expected thermal movement for exposed runs and install expansion fittings accordingly.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using Schedule 40 Where Sch. 80 Is Required</h4>
                  <p className="text-white/60 text-sm">
                    Using Schedule 40 PVC in locations subject to physical damage is a code violation (NEC 352.10(F)). This is especially common at underground-to-above-grade transitions and in parking structures.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Torch-Bending PVC</h4>
                  <p className="text-white/60 text-sm">
                    Using a torch or open flame to bend PVC is one of the most dangerous installation practices. It scorches the conduit, releases toxic fumes, creates weak points, and is a code violation. Always use an approved heating blanket or hot box.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Insufficient Cement / Dry Joints</h4>
                  <p className="text-white/60 text-sm">
                    Not applying enough cement results in partial bonding &mdash; the joint may hold during installation but fail over time due to thermal cycling, moisture intrusion, or wire-pulling forces. A complete cement bead around the joint is essential.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Forgetting the Equipment Grounding Conductor</h4>
                  <p className="text-white/60 text-sm">
                    Unlike metallic conduit, PVC cannot serve as an EGC. Failing to install a separate equipment grounding conductor inside PVC conduit is a serious code violation that leaves equipment ungrounded.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exceeding 360 Degrees of Bends</h4>
                  <p className="text-white/60 text-sm">
                    NEC 352.22 limits total bends to 360&deg; between pull points. Exceeding this makes wire pulling extremely difficult and can damage conductor insulation. Plan pull points (junction boxes, conduit bodies) to stay within the limit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inadequate Support Spacing</h4>
                  <p className="text-white/60 text-sm">
                    PVC conduit that is not supported at proper intervals will sag, especially when loaded with conductors. Sagging conduit looks unprofessional and can create low points where condensation collects. Follow NEC Table 352.30 spacing requirements.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">No Bushings at Terminations</h4>
                  <p className="text-white/60 text-sm">
                    NEC 352.46 requires a bushing or adapter at conduit terminations to protect wires from abrasion. The cut end of PVC conduit, even when deburred, can have sharp edges that damage conductor insulation during pulling and over time due to thermal movement.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">PVC Installation Quality Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Correct schedule type for the application (Sch. 40 vs. 80 vs. EB/DB)</li>
                  <li>&#9744; Conduit listed as sunlight-resistant for outdoor exposed installations</li>
                  <li>&#9744; All joints properly cemented with UL-listed electrical PVC cement</li>
                  <li>&#9744; Expansion fittings installed where required for long exposed runs</li>
                  <li>&#9744; Support spacing per NEC Table 352.30</li>
                  <li>&#9744; Secured within 3 feet of every box and termination</li>
                  <li>&#9744; Not more than 360&deg; of bends between pull points</li>
                  <li>&#9744; Bushings installed at all conduit terminations</li>
                  <li>&#9744; Equipment grounding conductor included in all conduit runs</li>
                  <li>&#9744; All cut ends deburred inside and outside</li>
                  <li>&#9744; Underground cover depths meet NEC Table 300.5</li>
                  <li>&#9744; Schedule 80 used at all underground-to-above-grade transitions</li>
                </ul>
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
                <Link href="/blog/electrical-conduit-types-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Conduit Types Guide: EMT, RMC, IMC, PVC & More</h3>
                </Link>
                <Link href="/blog/conduit-fill-calculation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Fill Calculation Guide</h3>
                </Link>
                <Link href="/blog/underground-wiring-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Underground Wiring Installation Guide</h3>
                </Link>
                <Link href="/blog/conduit-bending-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Conduit Bending Calculations</h3>
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
