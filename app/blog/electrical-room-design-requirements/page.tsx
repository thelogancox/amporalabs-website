import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Room Design Requirements: NEC Compliance Guide",
  description: "Comprehensive guide to electrical room design requirements per the NEC. Covers working space clearances (110.26), dedicated equipment space, ventilation, lighting, fire ratings, drainage, equipment layout, entrance/exit requirements, labeling, and emergency systems.",
  keywords: [
    "electrical room design",
    "electrical room requirements",
    "NEC electrical room",
    "electrical room clearances",
    "electrical room ventilation",
    "electrical room fire rating",
    "electrical room lighting",
    "dedicated equipment space",
    "NEC 110.26 electrical room",
    "electrical room layout",
    "electrical room drainage",
    "electrical room signage",
    "electrical room entrance requirements",
    "electrical room emergency lighting",
    "switchgear room design"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-room-design-requirements",
  },
  openGraph: {
    title: "Electrical Room Design Requirements: NEC Compliance Guide - Ampora",
    description: "Complete guide to designing NEC-compliant electrical rooms. Covers clearances, ventilation, fire ratings, lighting, drainage, and equipment layout.",
    url: "https://amporalabs.com/blog/electrical-room-design-requirements",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Electrical room layout illustration showing equipment, clearances, and design elements">
      {/* Room outline */}
      <rect x="30" y="10" width="340" height="160" rx="4" fill="#111827" stroke="#6b7280" strokeWidth="2"/>

      {/* Floor grid pattern */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`vg-${i}`} x1={70 + i * 40} y1="10" x2={70 + i * 40} y2="170" stroke="#1f2937" strokeWidth="0.5"/>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line key={`hg-${i}`} x1="30" y1={50 + i * 40} x2="370" y2={50 + i * 40} stroke="#1f2937" strokeWidth="0.5"/>
      ))}

      {/* Back wall with switchgear */}
      <rect x="40" y="15" width="320" height="12" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
      <text x="200" y="24" textAnchor="middle" fill="#9ca3af" fontSize="6">WALL</text>

      {/* Switchgear / Panel lineup on back wall */}
      <g transform="translate(55, 28)">
        {/* Panel 1 - Main switchboard */}
        <rect x="0" y="0" width="60" height="50" rx="2" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="5" y="5" width="50" height="40" fill="#111827"/>
        {[0, 1, 2, 3].map((i) => (
          <g key={`b1-${i}`}>
            <rect x="10" y={10 + i * 9} width="18" height="6" rx="1" fill="#374151"/>
            <rect x="32" y={10 + i * 9} width="18" height="6" rx="1" fill="#374151"/>
          </g>
        ))}
        <text x="30" y="56" textAnchor="middle" fill="#f97316" fontSize="6" fontWeight="bold">MAIN</text>
      </g>

      <g transform="translate(125, 28)">
        {/* Panel 2 */}
        <rect x="0" y="0" width="45" height="50" rx="2" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="4" y="4" width="37" height="42" fill="#111827"/>
        {[0, 1, 2, 3].map((i) => (
          <g key={`b2-${i}`}>
            <rect x="8" y={9 + i * 9} width="12" height="6" rx="1" fill="#374151"/>
            <rect x="24" y={9 + i * 9} width="12" height="6" rx="1" fill="#374151"/>
          </g>
        ))}
        <text x="22" y="56" textAnchor="middle" fill="#f97316" fontSize="5">PNL-A</text>
      </g>

      <g transform="translate(180, 28)">
        {/* Panel 3 */}
        <rect x="0" y="0" width="45" height="50" rx="2" fill="#1f2937" stroke="#f97316" strokeWidth="1.5"/>
        <rect x="4" y="4" width="37" height="42" fill="#111827"/>
        {[0, 1, 2, 3].map((i) => (
          <g key={`b3-${i}`}>
            <rect x="8" y={9 + i * 9} width="12" height="6" rx="1" fill="#374151"/>
            <rect x="24" y={9 + i * 9} width="12" height="6" rx="1" fill="#374151"/>
          </g>
        ))}
        <text x="22" y="56" textAnchor="middle" fill="#f97316" fontSize="5">PNL-B</text>
      </g>

      <g transform="translate(240, 28)">
        {/* Transformer */}
        <rect x="0" y="0" width="50" height="50" rx="2" fill="#1f2937" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="25" cy="20" r="12" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="25" cy="30" r="12" fill="none" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="25" y="56" textAnchor="middle" fill="#22c55e" fontSize="5">XFMR</text>
      </g>

      {/* Working space depth arrows */}
      <g transform="translate(55, 90)">
        <rect x="0" y="0" width="235" height="55" fill="#f97316" fillOpacity="0.06" stroke="#f97316" strokeWidth="1" strokeDasharray="4"/>
        <text x="117" y="30" textAnchor="middle" fill="#f97316" fontSize="9" fontWeight="bold">WORKING SPACE</text>
        <text x="117" y="42" textAnchor="middle" fill="#f97316" fontSize="7">3 ft min depth</text>
      </g>

      {/* Door */}
      <g transform="translate(310, 100)">
        <rect x="0" y="0" width="30" height="60" rx="2" fill="#374151" stroke="#60a5fa" strokeWidth="1.5"/>
        <circle cx="6" cy="30" r="3" fill="#60a5fa"/>
        <text x="15" y="68" textAnchor="middle" fill="#60a5fa" fontSize="6">EXIT</text>
        {/* Door swing arc */}
        <path d="M 30 60 Q 60 60, 60 30" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3"/>
      </g>

      {/* Lighting symbols */}
      {[100, 200, 300].map((x) => (
        <g key={`light-${x}`}>
          <circle cx={x} y="155" r="6" fill="none" stroke="#fbbf24" strokeWidth="1"/>
          <line x1={x - 4} y1="155" x2={x + 4} y2="155" stroke="#fbbf24" strokeWidth="1"/>
          <line x1={x} y1="151" x2={x} y2="159" stroke="#fbbf24" strokeWidth="1"/>
        </g>
      ))}
      <text x="200" y="170" textAnchor="middle" fill="#fbbf24" fontSize="6">LIGHTING (110.26(D))</text>
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
            { name: "Electrical Room Design Requirements", url: "https://amporalabs.com/blog/electrical-room-design-requirements" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Room Design Requirements: NEC Compliance Guide"
          description="Comprehensive guide to electrical room design requirements per the NEC, covering working space clearances, dedicated equipment space, ventilation, lighting, fire ratings, drainage, equipment layout, and emergency systems."
          datePublished="2026-03-02"
          dateModified="2026-03-02"
          url="https://amporalabs.com/blog/electrical-room-design-requirements"
          wordCount={5200}
          keywords={["electrical room design", "NEC electrical room", "electrical room requirements", "working space clearances", "switchgear room"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Room Design Requirements</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">22 min read</span>
              <span className="text-white/40 text-sm">March 2, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Room Design Requirements: NEC Compliance Guide
            </h1>
            <p className="text-xl text-white/70">
              Electrical rooms are the nerve center of any building&apos;s power distribution system. Designing them correctly from the start prevents code violations, failed inspections, costly retrofits, and dangerous working conditions. This guide covers every NEC requirement you need to know.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-orange-400">&#8594; Why Electrical Room Design Matters</a></li>
              <li><a href="#working-space" className="hover:text-orange-400">&#8594; NEC Working Space Requirements (110.26)</a></li>
              <li><a href="#dedicated-space" className="hover:text-orange-400">&#8594; Dedicated Equipment Space (110.26(E))</a></li>
              <li><a href="#ventilation" className="hover:text-orange-400">&#8594; Ventilation and HVAC Requirements</a></li>
              <li><a href="#lighting" className="hover:text-orange-400">&#8594; Lighting Requirements</a></li>
              <li><a href="#fire-rating" className="hover:text-orange-400">&#8594; Fire Rating and Wall Construction</a></li>
              <li><a href="#drainage" className="hover:text-orange-400">&#8594; Drainage and Moisture Control</a></li>
              <li><a href="#equipment-layout" className="hover:text-orange-400">&#8594; Equipment Layout and Clearances</a></li>
              <li><a href="#entrance-exit" className="hover:text-orange-400">&#8594; Entrance and Exit Requirements</a></li>
              <li><a href="#labeling" className="hover:text-orange-400">&#8594; Labeling and Signage</a></li>
              <li><a href="#emergency" className="hover:text-orange-400">&#8594; Emergency Lighting and Exits</a></li>
              <li><a href="#design-checklist" className="hover:text-orange-400">&#8594; Electrical Room Design Checklist</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Electrical Room Design Matters</h2>
              <p className="text-white/80 mb-4">
                Electrical rooms house the most critical infrastructure in any building: the switchgear, panelboards, transformers, and distribution equipment that deliver power to every circuit. A poorly designed electrical room creates a cascade of problems -- failed inspections, safety hazards for maintenance personnel, equipment overheating, moisture damage, and expensive change orders during construction.
              </p>
              <p className="text-white/80 mb-4">
                The National Electrical Code (NEC) establishes minimum requirements for electrical rooms through several articles, primarily 110.26 (working space), 110.27 (guarding), and various equipment-specific articles. However, a compliant electrical room design also involves coordination with building codes (IBC), fire codes (NFPA 1), mechanical codes (IMC), and local amendments. This guide focuses on the NEC requirements while noting where other codes intersect.
              </p>
              <p className="text-white/80 mb-4">
                Whether you are an electrician roughing in a commercial building, an engineer specifying equipment, or a contractor coordinating trades, understanding electrical room design requirements is essential for delivering a safe, code-compliant installation that will pass inspection the first time.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Key NEC Articles for Electrical Rooms</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; <strong>NEC 110.26</strong> -- Working space around electrical equipment (600V or less)</li>
                  <li>&bull; <strong>NEC 110.27</strong> -- Guarding of live parts</li>
                  <li>&bull; <strong>NEC 110.31-110.34</strong> -- Requirements for equipment over 1000V (medium voltage rooms)</li>
                  <li>&bull; <strong>NEC 408</strong> -- Switchboards, switchgear, and panelboards</li>
                  <li>&bull; <strong>NEC 450</strong> -- Transformers and transformer vaults</li>
                  <li>&bull; <strong>NEC 700/701/702</strong> -- Emergency, legally required standby, and optional standby systems</li>
                </ul>
              </div>
            </section>

            <section id="working-space" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Working Space Requirements (110.26)</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26 is the cornerstone of electrical room design. It specifies the minimum working space depth, width, and headroom required around all electrical equipment rated 600 volts nominal or less. These clearances exist to protect workers who must access equipment for operation, maintenance, examination, or adjustment while it may be energized.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Working Space Depth (110.26(A)(1))</h3>
              <p className="text-white/80 mb-4">
                The required depth of working space depends on two factors: the nominal voltage to ground and the &quot;condition&quot; of the opposite side of the working space. The NEC defines three conditions:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Condition 1</h4>
                  <p className="text-white/60 text-sm mt-1">Exposed live parts on one side of the working space and no live or grounded parts on the other side. This is the most common condition in residential and light commercial work, where a panel is mounted on a wall with open space in front.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Condition 2</h4>
                  <p className="text-white/60 text-sm mt-1">Exposed live parts on one side and grounded parts on the other. Concrete, brick, or tile walls are considered grounded surfaces. This commonly occurs when a panel faces a concrete block wall across a corridor or when equipment is installed in concrete utility rooms.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Condition 3</h4>
                  <p className="text-white/60 text-sm mt-1">Exposed live parts on both sides of the working space. This is the most hazardous arrangement, found when switchboards or panelboards face each other across a working aisle. It requires the greatest clearance depth.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Working Space Depth Table (600V or Less)</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Nominal Voltage to Ground</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 1</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 2</th>
                      <th className="text-left py-3 px-4 text-white/60">Condition 3</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">0 - 150V</td>
                      <td className="py-3 px-4 text-green-400">3 ft (914 mm)</td>
                      <td className="py-3 px-4 text-amber-400">3 ft (914 mm)</td>
                      <td className="py-3 px-4 text-red-400">3 ft (914 mm)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">151 - 600V</td>
                      <td className="py-3 px-4 text-green-400">3 ft (914 mm)</td>
                      <td className="py-3 px-4 text-amber-400">3.5 ft (1067 mm)</td>
                      <td className="py-3 px-4 text-red-400">4 ft (1219 mm)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Pro Tip: Design Beyond Minimums</h3>
                <p className="text-white/70">
                  While the NEC provides minimum clearances, experienced designers typically specify 4 to 5 feet of working space depth in commercial electrical rooms, even for 120/240V systems. This extra space allows workers to comfortably use test equipment, maneuver large wire reels, and open panel doors fully. It also provides a buffer for future equipment additions. The small additional room cost is negligible compared to the long-term operational benefits.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Working Space Width (110.26(A)(2))</h3>
              <p className="text-white/80 mb-4">
                The width of working space must be at least <strong>30 inches (762 mm)</strong> or the width of the equipment, whichever is greater. This space must permit at least a 90-degree opening of equipment doors or hinged panels. In electrical rooms with multiple panels in a lineup, the 30-inch width requirement applies to each piece of equipment individually -- you do not need 30 inches between each panel, but you need 30 inches of clear width in front of each one.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Headroom (110.26(A)(3))</h3>
              <p className="text-white/80 mb-4">
                The minimum headroom in the working space is <strong>6 feet 6 inches (1981 mm)</strong> or the height of the equipment, whichever is greater. This applies from the floor or platform to the ceiling or any obstruction above. In electrical rooms, this means conduit racks, cable trays, ductwork, and lighting fixtures must all be planned to maintain the required headroom above the working space.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Warning: Common Design Mistake</h3>
                <p className="text-white/70">
                  One of the most frequently encountered issues is HVAC ductwork or plumbing pipes that are routed through the electrical room after the electrical layout is finalized. Mechanical trades may not be aware of NEC clearance requirements. Always coordinate with the mechanical engineer and plumber during the design phase and clearly mark the working space zones on the construction drawings. Label the working space areas on the floor with paint or tape during construction to prevent encroachment.
                </p>
              </div>
            </section>

            <section id="dedicated-space" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Equipment Space (110.26(E))</h2>
              <p className="text-white/80 mb-4">
                Separate from working space clearances, NEC 110.26(E) requires dedicated equipment space for indoor installations of switchboards, switchgear, panelboards, and motor control centers. This is frequently confused with working space, but they are distinct requirements that both must be met.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Indoor Dedicated Space Requirements</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Width and Depth of Equipment</h4>
                  <p className="text-white/60 text-sm mt-1">The footprint of the equipment (its width and depth) must extend from the floor to a height of 6 feet above the equipment or to the structural ceiling, whichever is lower. No piping, ducts, leak protection apparatus, or other equipment foreign to the electrical installation is permitted in this zone.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Zone Above the Equipment</h4>
                  <p className="text-white/60 text-sm mt-1">The area above the dedicated space extending to the structural ceiling must be free of foreign systems unless protection is provided against damage from leaks, condensation, or breaks. Sprinkler piping is permitted if the piping complies with applicable fire protection codes. A drip shield or other approved leak protection can allow limited foreign piping above, but this should be avoided when possible.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">What Counts as &quot;Foreign&quot; Systems?</h4>
                  <p className="text-white/60 text-sm mt-1">Any system not related to the electrical installation: domestic water supply, chilled water piping, steam lines, gas pipes, sewer drain lines, HVAC ductwork, pneumatic tube systems, and compressed air lines. Conduit, cable trays, and busway associated with the electrical distribution are not foreign and may occupy the dedicated space.</p>
                </div>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Design Implication for Electrical Rooms</h3>
                <p className="text-white/70">
                  The dedicated equipment space requirement effectively means that the entire volume above your switchgear and panelboard lineup -- from the floor to the ceiling -- must be reserved exclusively for electrical systems. This has a major impact on MEP coordination. Mechanical ductwork and plumbing must be routed around the electrical room or, at minimum, around the dedicated space zones within the room. Clearly delineate these zones on the reflected ceiling plan and coordinate with all trades during the shop drawing review process.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Outdoor Dedicated Space</h3>
              <p className="text-white/80 mb-4">
                For outdoor installations, NEC 110.26(E)(2) requires the same footprint clearance from grade level upward. While outdoor equipment does not have a ceiling constraint, it still requires the dedicated space zone to be free of foreign systems. Outdoor electrical equipment must also comply with the specific enclosure rating (NEMA 3R minimum for most outdoor applications) and may have additional requirements depending on the local jurisdiction.
              </p>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-orange-900/40 to-cyan-900/40 rounded-xl p-6 border border-orange-500/20">
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

            <section id="ventilation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Ventilation and HVAC Requirements</h2>
              <p className="text-white/80 mb-4">
                Electrical equipment generates significant heat during normal operation. Transformers, switchgear, panelboards, variable frequency drives (VFDs), and UPS systems all produce heat that must be removed from the electrical room to prevent equipment failure, insulation degradation, and premature aging. While the NEC does not prescribe specific HVAC requirements for electrical rooms, it does require that equipment be installed within the temperature limits specified by the manufacturer.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Temperature Considerations</h3>
              <p className="text-white/80 mb-4">
                Most electrical equipment is rated for a maximum ambient temperature of <strong>40 degrees C (104 degrees F)</strong>. When the room ambient temperature exceeds this threshold, conductor ampacities must be derated per NEC Table 310.15(B)(1)(1), equipment may malfunction, and component lifespan is drastically shortened. Every 10 degrees C above the rated temperature roughly halves the insulation life of many electrical components.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Heat Source</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Heat Output</th>
                      <th className="text-left py-3 px-4 text-white/60">Design Consideration</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Dry-type transformer</td>
                      <td className="py-3 px-4">1-3% of kVA rating as heat</td>
                      <td className="py-3 px-4 text-white/60">Provide dedicated ventilation or exhaust near the top of the transformer</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Panelboard (loaded)</td>
                      <td className="py-3 px-4">200-800 BTU/hr per panel</td>
                      <td className="py-3 px-4 text-white/60">Cumulative heat from multiple panels can be significant</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">VFD / motor controller</td>
                      <td className="py-3 px-4">3-5% of drive rating as heat</td>
                      <td className="py-3 px-4 text-white/60">Often requires dedicated cooling; heat rejection is continuous</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">UPS system</td>
                      <td className="py-3 px-4">5-10% of load as heat</td>
                      <td className="py-3 px-4 text-white/60">Batteries are especially sensitive to high temperatures</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Switchgear lineup</td>
                      <td className="py-3 px-4">1,000-5,000+ BTU/hr</td>
                      <td className="py-3 px-4 text-white/60">Scale varies with amperage and number of sections</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Ventilation Design Approaches</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Mechanical Cooling (HVAC)</h4>
                  <p className="text-white/60 text-sm mt-1">The most common approach for commercial electrical rooms. A dedicated split system or packaged unit maintains the room at 75-85 degrees F. The cooling unit should be sized for the total heat rejection of all equipment at full load, plus a 20% safety factor. The thermostat should be located near the equipment, not near supply diffusers.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Natural Ventilation</h4>
                  <p className="text-white/60 text-sm mt-1">In mild climates or for rooms with minimal heat load, natural ventilation through louvers can be sufficient. Provide low intake louvers and high exhaust louvers to create a chimney effect. Louvers must be screened to prevent rodent and insect entry. Calculate the required free area based on heat load and expected temperature differential.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Forced Ventilation (Exhaust Fans)</h4>
                  <p className="text-white/60 text-sm mt-1">Exhaust fans with intake louvers provide a middle-ground solution. Size the fan for a minimum of 10-15 air changes per hour. Use thermostatically controlled fans that activate when room temperature rises above a set point (typically 85-90 degrees F). This approach is less expensive than HVAC but less precise in temperature control.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Warning: Transformer Vaults</h3>
                <p className="text-white/70">
                  NEC 450.46 requires transformer vaults to have adequate ventilation to prevent the transformer temperature from exceeding its rated temperature. Ventilation openings, where required, must comply with NEC 450.45 and be located as far as possible from doors, windows, fire escapes, and combustible materials. Vault ventilation is a separate and more stringent requirement than general electrical room ventilation -- do not confuse the two.
                </p>
              </div>
            </section>

            <section id="lighting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Lighting Requirements for Electrical Rooms</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26(D) requires illumination for all working spaces around service equipment, switchboards, switchgear, panelboards, and motor control centers installed indoors. While the NEC does not specify a minimum foot-candle level, adequate lighting is essential for safely reading labels, identifying conductors, and performing maintenance tasks.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Illumination Requirements</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Control Independence (110.26(D))</h4>
                  <p className="text-white/60 text-sm mt-1">The illumination must not be controlled exclusively by automatic means (occupancy sensors alone are not acceptable as the sole control). Additionally, the illumination should not be controlled by the equipment being serviced -- if the main breaker in the panel is turned off, the lights in the room should stay on. Best practice is to provide a manual switch at the entrance to the electrical room on a circuit fed from a different panel or source.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Recommended Light Levels</h4>
                  <p className="text-white/60 text-sm mt-1">While the NEC does not specify foot-candle levels, the Illuminating Engineering Society (IES) recommends 30-50 foot-candles for electrical equipment rooms. NFPA 70E also expects sufficient illumination for workers to safely read labels, identify wiring, and perform tasks. Provide uniform lighting across all working spaces, avoiding harsh shadows near equipment.</p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Lighting Best Practices for Electrical Rooms</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Use LED fixtures rated for the electrical room environment (temperature, dust)</li>
                  <li>&bull; Mount lighting to avoid interference with working space headroom (6&apos;6&quot; minimum)</li>
                  <li>&bull; Provide a dedicated lighting circuit from a panel outside the electrical room, or from the line side of the main disconnect</li>
                  <li>&bull; Consider dual switching: manual switch at entry plus occupancy sensor for energy compliance codes</li>
                  <li>&bull; Avoid mounting fixtures directly above open equipment where maintenance personnel may need to work on live parts</li>
                  <li>&bull; In rooms with multiple switchgear lineups, ensure lighting covers all working aisles uniformly</li>
                </ul>
              </div>
            </section>

            <section id="fire-rating" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Fire Rating and Wall Construction</h2>
              <p className="text-white/80 mb-4">
                The fire resistance rating for electrical rooms is governed primarily by the International Building Code (IBC) and local fire codes rather than the NEC directly. However, the NEC addresses fire rating requirements for transformer vaults (Article 450, Part III) and specific equipment installations. Understanding these requirements is essential for electrical room design because they affect wall construction, penetration sealing, and door specifications.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">IBC Requirements for Electrical Rooms</h3>
              <p className="text-white/80 mb-4">
                The IBC classifies electrical rooms as special-use spaces. While a dedicated fire-resistance rating is not always required for low-voltage electrical rooms (600V or less), many jurisdictions require a minimum <strong>1-hour fire rating</strong> for rooms containing significant electrical equipment. For rooms containing medium-voltage equipment (over 1000V) or transformer vaults, a <strong>2-hour or 3-hour fire rating</strong> is typically required.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Room Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Fire Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Code Reference</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Low-voltage electrical room (600V or less)</td>
                      <td className="py-3 px-4 text-green-400">1-hour (varies by jurisdiction)</td>
                      <td className="py-3 px-4 text-white/60">IBC Table 509 / local amendments</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Medium-voltage switchgear room (over 1kV)</td>
                      <td className="py-3 px-4 text-amber-400">2-hour minimum</td>
                      <td className="py-3 px-4 text-white/60">IBC / NEC 110.31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Transformer vault (oil-filled)</td>
                      <td className="py-3 px-4 text-red-400">3-hour minimum</td>
                      <td className="py-3 px-4 text-white/60">NEC 450.42</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Transformer vault (dry-type, fire-resistant)</td>
                      <td className="py-3 px-4 text-amber-400">1-hour to 2-hour</td>
                      <td className="py-3 px-4 text-white/60">NEC 450.21 / 450.22</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Emergency generator room</td>
                      <td className="py-3 px-4 text-amber-400">2-hour minimum</td>
                      <td className="py-3 px-4 text-white/60">NEC 700.12 / IBC 403</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Penetration Firestopping</h3>
              <p className="text-white/80 mb-4">
                Every conduit, cable, or cable tray penetration through a fire-rated wall or floor of an electrical room must be firestopped with an approved fire-rated assembly. UL-listed firestop systems (putty, caulk, pillows, or intumescent wraps) must be selected based on the specific penetration type, size, and wall construction. This is one of the most commonly failed inspection items in commercial construction. Maintain a firestop log documenting each penetration, the system used, and inspection status.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Transformer Vault Construction (NEC 450.42)</h3>
                <p className="text-white/70">
                  NEC 450.42 requires transformer vault walls, floors, and ceilings to have a minimum 3-hour fire rating. The vault door must have a minimum 3-hour rating with automatic closing and latching. Vault walls must be constructed of materials with adequate structural strength for the conditions and must have a fire resistance rating consistent with the vault type. Studs and wallboard construction may not be acceptable -- verify with the AHJ. These requirements can be reduced to 1-hour for dry-type transformers under certain conditions per NEC 450.21(B).
                </p>
              </div>
            </section>

            <section id="drainage" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Drainage and Moisture Control</h2>
              <p className="text-white/80 mb-4">
                Water is one of the greatest threats to electrical equipment. Moisture causes corrosion, insulation breakdown, short circuits, and arc flash hazards. Electrical room design must address moisture from multiple sources: roof leaks, plumbing failures, condensation, groundwater intrusion, and fire suppression discharge.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Requirements for Moisture Protection</h3>
              <p className="text-white/80 mb-4">
                NEC 110.26(E)(1)(d) addresses the protection of indoor dedicated space. Where foreign piping or other systems that could introduce liquids are located above the dedicated equipment space, protection must be provided to prevent leaks from damaging the electrical equipment. This can include drip shields, catch basins, or rerouting the piping entirely.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Floor Drains</h4>
                  <p className="text-white/60 text-sm mt-1">Install floor drains in electrical rooms to handle fire suppression water discharge, condensate from equipment cooling, and incidental water entry. The floor should slope toward the drain (1/8 inch per foot minimum). In transformer vaults, NEC 450.46 permits a drain or other means to absorb oil from a leaking transformer, sized to carry off any accumulation of oil or water.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Vapor Barriers</h4>
                  <p className="text-white/60 text-sm mt-1">For below-grade electrical rooms (basements), install vapor barriers on the exterior side of walls and under the floor slab. Use waterproof coatings on interior concrete walls. Consider dehumidification systems in humid climates or below-grade locations where condensation is likely.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Elevated Equipment Pads</h4>
                  <p className="text-white/60 text-sm mt-1">Mount transformers and switchgear on concrete housekeeping pads raised 3-4 inches above the finished floor. This protects equipment from minor flooding, simplifies floor cleaning, and provides a defined mounting surface for seismic anchoring. Embed anchor bolts in the pad for equipment attachment.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Leak Detection</h4>
                  <p className="text-white/60 text-sm mt-1">Consider installing water leak detection sensors below raised equipment and at low points in the room. These sensors can alert building management systems (BMS) before water accumulation causes equipment damage. This is especially important in data centers and mission-critical facilities.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Warning: Never Locate Electrical Rooms Below Restrooms</h3>
                <p className="text-white/70">
                  While not explicitly prohibited by the NEC in all cases, locating an electrical room directly below a restroom, kitchen, mechanical room with water systems, or any area with significant plumbing creates a persistent leak risk. Many jurisdictions and most good engineering practice prohibits this arrangement. If it is unavoidable, provide a waterproof membrane above the ceiling of the electrical room and install leak detection systems.
                </p>
              </div>
            </section>

            <section id="equipment-layout" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Equipment Layout and Clearances</h2>
              <p className="text-white/80 mb-4">
                The layout of equipment within an electrical room determines whether the room will be functional, safe, and code-compliant for the life of the building. Good equipment layout accounts for current needs, future expansion, maintenance access, cable routing, and heat management.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Layout Planning Principles</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Single-Row Layout</h4>
                  <p className="text-white/60 text-sm mt-1">Equipment is mounted along one wall with working space in front. This is the simplest layout and works well for rooms with moderate equipment quantities. The working space extends from the face of the equipment into the room. Advantages: simple clearance compliance, easy cable routing along the wall, straightforward egress path.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Double-Row (Face-to-Face) Layout</h4>
                  <p className="text-white/60 text-sm mt-1">Equipment on two opposing walls with a shared working aisle between them. This creates a Condition 3 working space scenario (exposed live parts on both sides), requiring 4 feet of clearance for 151-600V systems. The aisle width must accommodate the deeper clearance requirement. Two exits are often required for aisles longer than 25 feet with equipment rated 1200A or more.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Back-to-Back Layout</h4>
                  <p className="text-white/60 text-sm mt-1">Equipment mounted on both sides of a center wall or back-to-back stand. The working space for each side is independent. This layout maximizes equipment density while maintaining Condition 1 clearances on each side. Popular in large commercial and industrial electrical rooms.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">U-Shape Layout</h4>
                  <p className="text-white/60 text-sm mt-1">Equipment on three walls with the entrance on the fourth. This provides maximum equipment capacity but requires careful clearance planning at the corners where working spaces may overlap. Ensure 30-inch minimum width is maintained at all equipment locations and that egress is not blocked.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Future Expansion Considerations</h3>
              <p className="text-white/80 mb-4">
                Design the electrical room with 20-25% spare capacity for future growth. This includes:
              </p>
              <ul className="text-white/70 text-sm space-y-2 mb-6">
                <li>&bull; Reserve wall space for future panelboards or distribution equipment</li>
                <li>&bull; Size conduit stub-ups and cable tray runs for additional circuits</li>
                <li>&bull; Provide spare breaker spaces in panelboards and switchboards</li>
                <li>&bull; Size the room HVAC system for the future full-load heat rejection</li>
                <li>&bull; Leave spare floor space for future transformer or UPS additions</li>
                <li>&bull; Install spare conduit sleeves through fire-rated walls for future cable routes</li>
              </ul>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Pro Tip: Equipment Arrangement for Arc Flash Safety</h3>
                <p className="text-white/70">
                  Arrange equipment so that higher-amperage gear (main switchboard, utility metering) is closest to the entrance, with lower-amperage panelboards further back. This allows workers performing routine tasks on smaller panels to pass by but not through the highest arc-flash hazard zones. Consider the arc flash boundary calculations during layout planning. NFPA 70E requires arc flash labels on all equipment, and the room layout directly impacts the PPE requirements for each piece of gear.
                </p>
              </div>
            </section>

            <section id="entrance-exit" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Entrance and Exit Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper egress from electrical rooms is a life-safety requirement. NEC 110.26(C) specifies entrance and exit requirements based on equipment ratings and room configuration. The fundamental principle is that a worker must never be trapped between energized equipment and a dead-end wall.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Single Entrance Requirements</h3>
              <p className="text-white/80 mb-4">
                At minimum, every electrical room must have at least one entrance of sufficient area to allow personnel to enter and exit the working space. Per NEC 110.26(C)(1), at least one entrance not less than <strong>24 inches (610 mm) wide and 6 feet 6 inches (1981 mm) high</strong> is required for access to and egress from the working space around electrical equipment.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">When Two Entrances Are Required</h3>
              <p className="text-white/80 mb-4">
                NEC 110.26(C)(2) requires at least one entrance at each end of the working space for equipment rated <strong>1200 amperes or more</strong> and over <strong>6 feet (1.8 m) wide</strong> that contains overcurrent devices, switching devices, or control devices. This ensures an escape route at each end of the aisle. The requirement can be waived if:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Exception 1: Doubled Working Space</h4>
                  <p className="text-white/60 text-sm mt-1">If the working space depth is at least twice the minimum required by Table 110.26(A)(1), only one entrance is required. For example, if the minimum depth is 3 feet, providing 6 feet of working space allows a single entrance. The additional depth allows the worker to sidestep and escape without turning their back to the equipment.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Exception 2: Unobstructed Exit</h4>
                  <p className="text-white/60 text-sm mt-1">Where the location of the working space permits a continuous and unobstructed exit path from the working space, only one entrance is required. This is typically interpreted as an open aisle that wraps around equipment without a dead end.</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Door Requirements</h3>
              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Electrical Room Door Specifications</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Doors must open in the direction of egress (outward from the electrical room)</li>
                  <li>&bull; Doors must be equipped with panic hardware (push bars) when serving large equipment installations</li>
                  <li>&bull; Door hardware must not require a key, tool, or special knowledge to open from inside the room</li>
                  <li>&bull; Door width: minimum 36 inches is recommended; 24 inches is the NEC minimum for working space access</li>
                  <li>&bull; If the room requires a fire rating, the door must be a rated fire door with proper frame and hardware</li>
                  <li>&bull; Self-closing and self-latching doors are typically required for fire-rated rooms</li>
                  <li>&bull; Consider double doors for equipment rooms where large gear must be moved in and out during installation or replacement</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Personnel Doors vs. Equipment Access</h3>
              <p className="text-white/80 mb-4">
                In addition to personnel egress doors, plan for equipment access during initial installation and future replacement. Switchgear sections, transformers, and large panelboards may not fit through standard personnel doors. Provide removable wall panels, double doors, or equipment hatches sized for the largest piece of equipment that will be installed. Document the equipment access path on the construction drawings.
              </p>
            </section>

            <section id="labeling" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Labeling and Signage</h2>
              <p className="text-white/80 mb-4">
                Proper labeling and signage in electrical rooms is not optional -- it is required by the NEC, NFPA 70E, and OSHA. Labels communicate critical safety information to anyone entering the room, including maintenance personnel, firefighters, and emergency responders.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Required Labels and Signs</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Label / Sign</th>
                      <th className="text-left py-3 px-4 text-white/60">NEC Reference</th>
                      <th className="text-left py-3 px-4 text-white/60">Requirements</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Room identification</td>
                      <td className="py-3 px-4">General practice / AHJ</td>
                      <td className="py-3 px-4 text-white/60">&quot;ELECTRICAL ROOM&quot; sign on all entrance doors</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">High voltage warning</td>
                      <td className="py-3 px-4">NEC 110.27(C)</td>
                      <td className="py-3 px-4 text-white/60">&quot;DANGER - HIGH VOLTAGE&quot; for equipment over 600V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Arc flash labels</td>
                      <td className="py-3 px-4">NEC 110.16 / NFPA 70E</td>
                      <td className="py-3 px-4 text-white/60">Arc flash hazard warning on all equipment likely to require servicing while energized</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Panel schedules</td>
                      <td className="py-3 px-4">NEC 408.4</td>
                      <td className="py-3 px-4 text-white/60">Circuit directory identifying each circuit, legible and accurate</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Disconnecting means labels</td>
                      <td className="py-3 px-4">NEC 408.4(A)</td>
                      <td className="py-3 px-4 text-white/60">Each disconnect plainly indicating its purpose (not just &quot;spare&quot;)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Source identification</td>
                      <td className="py-3 px-4">NEC 408.4(B)</td>
                      <td className="py-3 px-4 text-white/60">Each panelboard must identify the source feeder or branch circuit supplying it</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Available fault current</td>
                      <td className="py-3 px-4">NEC 110.24</td>
                      <td className="py-3 px-4 text-white/60">Label at service equipment showing the maximum available fault current and date of calculation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Floor Markings</h3>
              <p className="text-white/80 mb-4">
                While not explicitly required by the NEC for installations under 600V, marking the working space boundaries on the floor is a best practice that helps prevent encroachment. Use yellow or white industrial paint or tape to outline the working space in front of each equipment lineup. Many AHJs and facility owners require this. For equipment over 1000V, floor markings delineating the restricted space are more commonly mandated.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Best Practice: Signage Material</h3>
                <p className="text-white/70">
                  Use engraved phenolic or aluminum signs rather than adhesive labels for room identification and warning signs. Adhesive labels peel off over time, especially in warm environments. Engraved signs with mechanical fasteners are permanent, resistant to heat, and maintain legibility for decades. For arc flash labels, use UV-resistant and heat-resistant label materials rated for the environment.
                </p>
              </div>
            </section>

            <section id="emergency" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Emergency Lighting and Exit Requirements</h2>
              <p className="text-white/80 mb-4">
                Emergency lighting in electrical rooms serves a dual purpose: it meets building code egress requirements and ensures that personnel can safely navigate the room during a power failure -- which may include the very event they are responding to. A power failure in an electrical room creates an especially dangerous situation if the room goes completely dark while workers are near energized equipment that may be faulted.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">IBC and Life Safety Code Requirements</h3>
              <p className="text-white/80 mb-4">
                The IBC and NFPA 101 (Life Safety Code) require emergency illumination in all means of egress, including corridors, stairways, and rooms that are part of the exit path. While a standalone electrical room may not always be classified as part of the means of egress, most jurisdictions require emergency lighting in any occupied space where personnel may be present. The practical standard is to provide emergency lighting in every electrical room, regardless of whether it is strictly required by the building code.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Battery-Backed Emergency Lighting</h4>
                  <p className="text-white/60 text-sm mt-1">Self-contained battery emergency units (bug-eye style or integrated LED fixtures with battery backup) are the most common solution for electrical rooms. They must provide a minimum 90 minutes of illumination at not less than 1 foot-candle average along the path of egress. Mount units to illuminate the aisle between equipment lineups and the path to each exit door.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Generator-Backed Emergency Lighting</h4>
                  <p className="text-white/60 text-sm mt-1">In buildings with emergency generators (NEC Article 700), the electrical room lighting can be connected to the emergency distribution system. This is often required for critical facilities such as hospitals, data centers, and high-rise buildings. The transfer to generator power must occur within 10 seconds per NEC 700.12. Even with generator backup, battery units are recommended as a secondary layer of protection.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Exit Signs</h4>
                  <p className="text-white/60 text-sm mt-1">If the electrical room has multiple exits, illuminated exit signs are required above each exit door per IBC and NFPA 101. Exit signs must be visible from any point within the room and must be illuminated by a reliable source (battery backup or generator). In large electrical rooms with multiple aisles, additional directional exit signs may be needed to guide personnel to the nearest exit.</p>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-red-400 mb-2">Warning: Testing Requirements</h3>
                <p className="text-white/70">
                  Emergency lighting must be tested regularly -- monthly for 30 seconds and annually for 90 minutes (full duration test) per NFPA 101 and most local codes. Self-testing and self-diagnostic emergency fixtures can simplify compliance and are strongly recommended for electrical rooms. Document all emergency lighting tests in a maintenance log. Failed units must be repaired or replaced immediately.
                </p>
              </div>
            </section>

            <section id="design-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Room Design Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this comprehensive checklist during the design and construction of any electrical room to ensure compliance with all applicable requirements:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Space and Clearances</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 text-sm space-y-2">
                  <li>&bull; Minimum 3 ft working space depth in front of all equipment (3.5 ft or 4 ft for 151-600V per condition)</li>
                  <li>&bull; Minimum 30 inches or equipment width (whichever is greater) of working space width</li>
                  <li>&bull; Minimum 6 ft 6 in headroom above all working spaces</li>
                  <li>&bull; Dedicated equipment space from floor to ceiling above all switchboards, panelboards, and motor control centers</li>
                  <li>&bull; No foreign piping, ductwork, or systems within dedicated equipment space</li>
                  <li>&bull; Working space floor is level and not used for storage</li>
                  <li>&bull; Equipment doors can open at least 90 degrees within the working space</li>
                  <li>&bull; 20-25% spare space reserved for future equipment</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Access and Egress</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 text-sm space-y-2">
                  <li>&bull; At least one entrance: 24 inches wide minimum, 6 ft 6 in high minimum</li>
                  <li>&bull; Two exits for equipment rated 1200A or more that is over 6 ft wide (unless exceptions apply)</li>
                  <li>&bull; Doors swing outward in the direction of egress</li>
                  <li>&bull; Panic hardware installed on egress doors for large equipment rooms</li>
                  <li>&bull; Doors open without key, tool, or special knowledge from inside</li>
                  <li>&bull; Equipment access path sized for the largest piece of gear to be installed</li>
                  <li>&bull; Double doors or removable panels for transformer and switchgear replacement access</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Environmental Controls</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 text-sm space-y-2">
                  <li>&bull; HVAC or ventilation system sized for total equipment heat rejection at full load plus 20% factor</li>
                  <li>&bull; Room temperature maintained below 40 degrees C (104 degrees F) maximum ambient</li>
                  <li>&bull; Floor drain with slope (1/8 in per foot minimum toward drain)</li>
                  <li>&bull; Equipment mounted on housekeeping pads (3-4 inches above finished floor)</li>
                  <li>&bull; Vapor barrier on exterior walls for below-grade rooms</li>
                  <li>&bull; No plumbing or water piping routed above electrical equipment without approved protection</li>
                  <li>&bull; Leak detection sensors at critical locations</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Lighting, Signage, and Safety</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/70 text-sm space-y-2">
                  <li>&bull; Dedicated lighting circuit not controlled by the equipment being serviced</li>
                  <li>&bull; Manual light switch at the entrance (not occupancy sensor alone)</li>
                  <li>&bull; 30-50 foot-candles uniform illumination across all working spaces</li>
                  <li>&bull; Emergency lighting with 90-minute battery backup</li>
                  <li>&bull; Exit signs above each exit door (if multiple exits)</li>
                  <li>&bull; &quot;ELECTRICAL ROOM&quot; sign on all entrance doors</li>
                  <li>&bull; Arc flash labels on all equipment per NEC 110.16</li>
                  <li>&bull; Available fault current label at service equipment per NEC 110.24</li>
                  <li>&bull; Panel schedules and circuit directories complete and legible</li>
                  <li>&bull; Working space boundaries marked on the floor (recommended)</li>
                  <li>&bull; Fire-rated walls, floors, and ceilings per IBC and local codes</li>
                  <li>&bull; All penetrations firestopped with UL-listed assemblies</li>
                  <li>&bull; Fire-rated doors with self-closing and self-latching hardware where required</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Medium Voltage Electrical Rooms (Over 1000V)</h2>
              <p className="text-white/80 mb-4">
                Electrical rooms containing medium-voltage equipment (over 1000V) have significantly more stringent requirements per NEC 110.31 through 110.34. These rooms are often referred to as switchgear rooms or medium-voltage rooms and require additional design considerations.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Requirement</th>
                      <th className="text-left py-3 px-4 text-white/60">600V or Less (110.26)</th>
                      <th className="text-left py-3 px-4 text-white/60">Over 1kV (110.34)</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Working space depth (Condition 1)</td>
                      <td className="py-3 px-4 text-green-400">3 ft</td>
                      <td className="py-3 px-4 text-amber-400">4-6 ft (varies by voltage)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Working space depth (Condition 3)</td>
                      <td className="py-3 px-4 text-green-400">3-4 ft</td>
                      <td className="py-3 px-4 text-red-400">5-9 ft (varies by voltage)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Headroom</td>
                      <td className="py-3 px-4">6 ft 6 in</td>
                      <td className="py-3 px-4">6 ft 6 in</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Room access control</td>
                      <td className="py-3 px-4">Not required</td>
                      <td className="py-3 px-4 text-amber-400">Locked room, access limited to qualified persons</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Wall marking</td>
                      <td className="py-3 px-4">Not required</td>
                      <td className="py-3 px-4 text-amber-400">&quot;DANGER - HIGH VOLTAGE&quot; signs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/80 mb-4">
                NEC 110.31(A) requires that medium-voltage installations in rooms be accessible only to qualified persons. This typically means a locked door with restricted key access, card access controls, or combination locks. Warning signs must be posted on all entrances. The room construction must prevent unqualified persons from entering through any opening, including windows, ventilation louvers that could admit a person, and removable panels.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Medium Voltage Room Design Additions</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Arc flash mitigation systems (arc-resistant switchgear, optical detection, bus differential protection)</li>
                  <li>&bull; Pressure relief venting for arc fault events (typically calculated by IEEE 1584)</li>
                  <li>&bull; Increased fire ratings on walls, floors, and ceilings (2-hour minimum typical)</li>
                  <li>&bull; Emergency trip buttons at exits for rapid de-energization</li>
                  <li>&bull; Cable vaults or trenches with fire-rated covers below the switchgear</li>
                  <li>&bull; Grounding bus accessible throughout the room for portable protective grounding</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Coordination with Other Trades</h2>
              <p className="text-white/80 mb-4">
                One of the most common causes of electrical room code violations is poor coordination between trades during the design and construction phases. Electrical, mechanical, plumbing, fire protection, and structural disciplines must all agree on room boundaries and reserved spaces before construction begins.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Common Coordination Failures</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">HVAC Ductwork Through the Dedicated Space</h4>
                  <p className="text-white/60 text-sm mt-1">Mechanical designers route ductwork above panelboards because the electrical room often has the most accessible ceiling space. This violates NEC 110.26(E). Solution: clearly show the dedicated equipment space zones on the reflected ceiling plan and include them in the BIM model. Hold a coordination meeting before ductwork shop drawings are finalized.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Plumbing Routed Above Equipment</h4>
                  <p className="text-white/60 text-sm mt-1">Sanitary drains, domestic water supply, and condensate lines routed above electrical equipment create leak risks. Even with drip protection, this arrangement should be avoided. Solution: route all plumbing around the perimeter of the electrical room, never over equipment. Specify this as a design requirement in the project specifications.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Structural Conflicts</h4>
                  <p className="text-white/60 text-sm mt-1">Structural beams, columns, and bracing that encroach on working space or reduce headroom below 6 ft 6 in. These cannot be moved after construction. Solution: coordinate the electrical room layout with the structural engineer during the schematic design phase, before steel is fabricated.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Fire Sprinkler Heads</h4>
                  <p className="text-white/60 text-sm mt-1">Sprinkler piping is permitted above the dedicated space (it protects the equipment), but sprinkler heads should not discharge directly onto energized equipment. Work with the fire protection engineer to position heads and deflectors to provide coverage while minimizing direct water impingement on open switchgear during a fire event.</p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Pro Tip: Use BIM Clash Detection</h3>
                <p className="text-white/70">
                  Building Information Modeling (BIM) clash detection is the single most effective tool for preventing trade coordination failures in electrical rooms. Model the working space clearances and dedicated equipment space as 3D volumes in the BIM model. Any pipe, duct, or structural member that intersects these volumes will be flagged automatically. Require all trades to participate in BIM coordination and resolve electrical room clashes as a priority during the shop drawing phase.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Final Thoughts</h2>
              <p className="text-white/80 mb-4">
                Electrical room design is not simply about placing equipment in a room and providing clearances. It is a multidisciplinary coordination effort that involves NEC compliance, building code fire ratings, mechanical engineering for ventilation, structural engineering for floor loads, and life-safety systems for emergency lighting and egress. Getting it right during the design phase costs a fraction of what it costs to fix during construction or after a failed inspection.
              </p>
              <p className="text-white/80 mb-4">
                The key principles are straightforward: maintain all NEC-required working spaces and dedicated equipment spaces, keep foreign systems out of the electrical room envelope, provide adequate ventilation to prevent overheating, ensure proper lighting and emergency illumination, and plan for safe egress from the room under all conditions. Label everything, firestop every penetration, and coordinate with every trade that touches the room.
              </p>
              <p className="text-white/80 mb-4">
                By following the requirements and best practices outlined in this guide, you can design electrical rooms that are safe, code-compliant, and maintainable for the life of the building.
              </p>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-900/30 to-cyan-900/30 rounded-2xl p-8 md:p-12 my-12 border border-orange-500/20">
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
                <Link href="/blog/nec-working-space-clearances-110-26" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Working Space Clearances: 110.26 Requirements</h3>
                </Link>
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Electrical Safety: NFPA 70E Compliance Guide</h3>
                </Link>
                <Link href="/blog/transformer-sizing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Transformer Sizing Guide</h3>
                </Link>
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
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
          <p className="text-sm text-white/40">&copy; 2025 Ampora Labs</p>
        </div>
      </footer>
    </main>
  );
}
