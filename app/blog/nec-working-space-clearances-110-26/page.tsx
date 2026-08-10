import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NEC Working Space Clearances: 110.26 Requirements for Electrical Equipment",
  description: "Complete guide to NEC 110.26 working space clearance requirements for electrical equipment. Learn working space depth conditions 1, 2, and 3, width and headroom requirements, dedicated space rules, illumination, and common violations.",
  keywords: [
    "NEC 110.26",
    "working space clearances",
    "electrical equipment clearance",
    "NEC working space requirements",
    "condition 1 working space",
    "condition 2 working space",
    "condition 3 working space",
    "dedicated space electrical",
    "panel clearance requirements",
    "electrical headroom requirement",
    "NEC clearance depth",
    "working space width",
    "electrical room requirements",
    "panel board clearance",
    "110.26 violations"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/nec-working-space-clearances-110-26",
  },
  openGraph: {
    title: "NEC 110.26 Working Space Clearances Guide - Ampora",
    description: "Complete guide to NEC working space clearance requirements for electrical equipment with depth conditions, width, and headroom.",
    url: "https://amporalabs.com/blog/nec-working-space-clearances-110-26",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Working space clearance requirements illustration showing depth, width, and headroom">
      {/* Panel on wall */}
      <g transform="translate(40, 10)">
        {/* Wall */}
        <rect x="0" y="0" width="15" height="140" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="7" y="80" textAnchor="middle" fill="#9ca3af" fontSize="6" transform="rotate(-90, 7, 80)">WALL</text>

        {/* Panel */}
        <rect x="15" y="20" width="50" height="100" rx="3" fill="#1f2937" stroke="#a78bfa" strokeWidth="2"/>
        <rect x="22" y="28" width="36" height="84" fill="#111827"/>
        {/* Breakers */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="26" y={35 + i * 15} width="12" height="10" rx="1" fill="#374151"/>
            <rect x="42" y={35 + i * 15} width="12" height="10" rx="1" fill="#374151"/>
          </g>
        ))}
      </g>

      {/* Working space depth */}
      <g transform="translate(65, 10)">
        {/* Depth arrow */}
        <line x1="0" y1="140" x2="120" y2="140" stroke="#a78bfa" strokeWidth="2" strokeDasharray="4"/>
        <polygon points="0,136 0,144 -6,140" fill="#a78bfa"/>
        <polygon points="120,136 120,144 126,140" fill="#a78bfa"/>
        <text x="60" y="155" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">3&apos; min depth</text>

        {/* Floor line */}
        <line x1="-30" y1="130" x2="130" y2="130" stroke="#6b7280" strokeWidth="1"/>
      </g>

      {/* Width indicator */}
      <g transform="translate(200, 15)">
        <rect x="0" y="0" width="100" height="120" fill="#a78bfa" fillOpacity="0.08" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4"/>
        <text x="50" y="65" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">30&quot; min</text>
        <text x="50" y="80" textAnchor="middle" fill="#a78bfa" fontSize="9" fontWeight="bold">width</text>

        {/* Headroom */}
        <line x1="110" y1="0" x2="110" y2="120" stroke="#22c55e" strokeWidth="2" strokeDasharray="4"/>
        <polygon points="106,0 114,0 110,-6" fill="#22c55e"/>
        <polygon points="106,120 114,120 110,126" fill="#22c55e"/>
        <text x="145" y="65" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">6.5&apos;</text>
        <text x="145" y="80" textAnchor="middle" fill="#22c55e" fontSize="8">headroom</text>
      </g>

      {/* Condition labels */}
      <g transform="translate(310, 20)">
        <text x="0" y="0" fill="#f59e0b" fontSize="8" fontWeight="bold">Depth Conditions:</text>
        <text x="0" y="18" fill="#9ca3af" fontSize="7">C1: Exposed live / no live</text>
        <text x="0" y="33" fill="#9ca3af" fontSize="7">C2: Exposed live / grounded</text>
        <text x="0" y="48" fill="#9ca3af" fontSize="7">C3: Exposed live / live</text>
        <rect x="0" y="60" width="75" height="30" rx="4" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444"/>
        <text x="37" y="78" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">Do NOT block!</text>
      </g>
    </svg>
  );
}

export default function NECWorkingSpacePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "NEC Working Space Clearances", url: "https://amporalabs.com/blog/nec-working-space-clearances-110-26" },
          ]}
        />
        <BlogPostingJsonLd
          headline="NEC Working Space Clearances: 110.26 Requirements for Electrical Equipment"
          description="Complete guide to NEC 110.26 working space clearance requirements including depth conditions, width, headroom, dedicated space, and common violations."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/nec-working-space-clearances-110-26"
          wordCount={2800}
          keywords={["NEC 110.26", "working space clearance", "electrical equipment clearance", "dedicated space", "working space depth"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">NEC Working Space Clearances</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/30 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              NEC Working Space Clearances: 110.26 Requirements for Electrical Equipment
            </h1>
            <p className="text-xl text-white/70">
              Working space clearances are among the most commonly cited NEC violations. Understanding 110.26 is essential for passing inspections and ensuring safe access to electrical equipment.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#overview" className="hover:text-purple-400">&#8594; Why Working Space Matters</a></li>
              <li><a href="#depth-conditions" className="hover:text-purple-400">&#8594; Working Space Depth: Conditions 1, 2 &amp; 3</a></li>
              <li><a href="#width" className="hover:text-purple-400">&#8594; Width Requirements</a></li>
              <li><a href="#headroom" className="hover:text-purple-400">&#8594; Headroom Requirements</a></li>
              <li><a href="#dedicated-space" className="hover:text-purple-400">&#8594; Dedicated Equipment Space (110.26(E))</a></li>
              <li><a href="#illumination" className="hover:text-purple-400">&#8594; Illumination Requirements (110.26(D))</a></li>
              <li><a href="#entrance-egress" className="hover:text-purple-400">&#8594; Entrance &amp; Egress (110.26(C))</a></li>
              <li><a href="#common-violations" className="hover:text-purple-400">&#8594; Common Violations &amp; How to Avoid Them</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="overview" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Why Working Space Matters</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26 exists to protect electricians and maintenance personnel. Adequate working space around electrical equipment ensures that workers can safely operate, maintain, and inspect equipment without being forced into awkward positions near energized parts. Insufficient clearance creates arc flash exposure risks and makes it impossible to escape quickly in an emergency.
              </p>
              <p className="text-white/80 mb-4">
                These requirements apply to all electrical equipment operating at 600 volts nominal or less that is likely to require examination, adjustment, servicing, or maintenance while energized. This includes panelboards, switchboards, motor control centers, and individual equipment disconnects.
              </p>
              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">When Does 110.26 Apply?</h3>
                <p className="text-white/70">
                  Any equipment that may need to be accessed while energized requires working space clearances. This includes residential panels, commercial panelboards, transformers, disconnects, and any other equipment where a worker might need to open a cover, operate a switch, or take measurements. The clearances must be maintained - they cannot be used for storage, even temporarily.
                </p>
              </div>
            </section>

            <section id="depth-conditions" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Working Space Depth: Conditions 1, 2 &amp; 3</h2>
              <p className="text-white/80 mb-4">
                NEC Table 110.26(A)(1) specifies minimum depth of working space based on the voltage level and what is on the opposite side of the working space from the equipment. The NEC defines three &quot;conditions&quot; that determine the required depth.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Condition 1 - Exposed Live Parts on One Side Only</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-2">
                  Exposed live parts on one side of the working space and no live or grounded parts on the other side. Also applies when the opposite side is concrete, brick, or tile (which are considered grounded for Condition 2 but NOT for Condition 1 per NEC interpretation).
                </p>
                <p className="text-white/60 text-sm">
                  <strong>Most common scenario:</strong> A residential or commercial panel on a wall with nothing on the opposite wall within the working space. This is the condition most residential installations fall under.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Condition 2 - Exposed Live Parts on One Side, Grounded Parts on the Other</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-2">
                  Exposed live parts on one side and grounded parts on the other side. Concrete, brick, or tile walls are considered grounded surfaces for this condition.
                </p>
                <p className="text-white/60 text-sm">
                  <strong>Example:</strong> An open panel facing a concrete block wall. The concrete wall is a grounded surface, creating a Condition 2 scenario requiring greater depth.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Condition 3 - Exposed Live Parts on Both Sides</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-2">
                  Exposed live parts on both sides of the working space. This is the most hazardous arrangement and requires the greatest depth.
                </p>
                <p className="text-white/60 text-sm">
                  <strong>Example:</strong> An electrician working between two facing switchboards or between a panelboard and an exposed bus duct on the opposite wall.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Minimum Depth Table</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Nominal Voltage</th>
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

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Key Insight for Residential Work</h3>
                <p className="text-white/70">
                  Most residential panels operate at 120/240V (0-150V to ground), which means Condition 1, 2, and 3 all require the same <strong>3-foot minimum depth</strong>. However, for 277/480V commercial systems (151-600V), the conditions make a significant difference in required depth. Always identify the voltage to ground, not just the system voltage, when determining the condition.
                </p>
              </div>
            </section>

            <section id="width" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Width Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26(A)(2) requires the working space width to be a minimum of <strong>30 inches (762 mm)</strong> or the width of the equipment, whichever is greater. The working space must extend from the floor to the required headroom height.
              </p>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-2">Width Measurement Details</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Measured from the front of the equipment</li>
                  <li>&bull; The 30-inch minimum is measured from left to right (or right to left) centered on the equipment</li>
                  <li>&bull; If the equipment is wider than 30 inches, the working space width equals the equipment width</li>
                  <li>&bull; The space can extend from the front of the equipment in any direction (it does not need to be centered if the full 30 inches is available)</li>
                  <li>&bull; Equipment doors must be able to open to at least 90 degrees within the working space</li>
                </ul>
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

            <section id="headroom" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Headroom Requirements</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26(A)(3) requires a minimum headroom of <strong>6 feet 6 inches (1981 mm)</strong> or the height of the equipment, whichever is greater. This ensures a worker can stand comfortably in front of the equipment without stooping.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-400 mb-2">Headroom Exceptions</h3>
                <p className="text-white/70">
                  In existing dwelling units (not new construction), panelboards that do not exceed 200 amperes are not required to meet the 6&apos;6&quot; headroom requirement. This exception recognizes that older homes may have panels in areas with limited ceiling height (such as basements with low beams). However, this exception applies only to existing installations - new construction must meet the full headroom requirement.
                </p>
              </div>
            </section>

            <section id="dedicated-space" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dedicated Equipment Space (110.26(E))</h2>
              <p className="text-white/80 mb-4">
                In addition to working space clearances, NEC 110.26(E) requires dedicated equipment space for indoor installations. This is separate from and in addition to the working space requirements. Many electricians confuse working space with dedicated space.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Indoor Dedicated Space</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Width and Depth</h4>
                  <p className="text-white/60 text-sm mt-1">The footprint of the equipment (width and depth) must be kept clear from the floor to a height of 6 feet above the equipment or to the structural ceiling, whichever is lower. No piping, ducts, or other equipment foreign to the electrical installation may be in this space.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Above the Equipment</h4>
                  <p className="text-white/60 text-sm mt-1">The area above the dedicated space must be free of foreign systems unless protection is provided. Sprinkler piping is allowed if the sprinkler system provides protection for the electrical equipment. Fire protection piping that complies with the manufacturer&apos;s instructions is permitted.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Foreign Systems</h4>
                  <p className="text-white/60 text-sm mt-1">Plumbing pipes, HVAC ducts, gas lines, and other non-electrical systems must not pass through the dedicated equipment space. This prevents water leaks, condensation, or physical damage to the electrical equipment.</p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-2">Common Dedicated Space Violations</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Water pipes running directly above a panelboard</li>
                  <li>&bull; HVAC ductwork passing through the dedicated space</li>
                  <li>&bull; Gas line running within the footprint of the panel</li>
                  <li>&bull; Sewer drain pipe directly above the electrical panel</li>
                </ul>
              </div>
            </section>

            <section id="illumination" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Illumination Requirements (110.26(D))</h2>
              <p className="text-white/80 mb-4">
                NEC 110.26(D) requires illumination for all working spaces about service equipment, switchboards, switchgear, panelboards, and motor control centers installed indoors. The lighting must not be controlled by the equipment being serviced.
              </p>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-2">Illumination Best Practices</h3>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>&bull; Provide dedicated lighting on a separate circuit from the panel being illuminated</li>
                  <li>&bull; The illumination cannot be controlled solely by a switch within the panel</li>
                  <li>&bull; Battery-backed emergency lighting can satisfy this requirement in some jurisdictions</li>
                  <li>&bull; The NEC does not specify a minimum foot-candle level, but adequate lighting to safely read labels and identify wiring is implied</li>
                </ul>
              </div>
            </section>

            <section id="entrance-egress" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Entrance &amp; Egress (110.26(C))</h2>
              <p className="text-white/80 mb-4">
                For equipment rated 1200 amperes or more and over 6 feet wide that contains overcurrent devices, fuses, or switches, at least one entrance to the working space must be at least 24 inches wide and 6 feet 6 inches high. For large equipment, two entrances may be required.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">When Are Two Entrances Required?</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <p className="text-white/70 mb-3">
                  Equipment rated 1200A or more and over 6 feet wide requires at least one entrance at each end of the working space, unless:
                </p>
                <ul className="text-white/60 text-sm space-y-2">
                  <li>&bull; The required working space depth is doubled (e.g., 6 feet instead of 3 feet), allowing the worker to retreat sideways</li>
                  <li>&bull; The location permits continuous and unobstructed exit from the working space</li>
                </ul>
                <p className="text-white/70 mt-3">
                  The purpose is escape routes. If an arc flash event occurs, the worker must be able to exit the working space quickly without being trapped between the equipment and a wall.
                </p>
              </div>
            </section>

            <section id="common-violations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Violations &amp; How to Avoid Them</h2>
              <p className="text-white/80 mb-4">
                Working space violations are among the top reasons for failed inspections. Here are the most frequently cited issues.
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Storage in front of panels</h4>
                  <p className="text-white/60 text-sm mt-1">The working space is not a storage area. Boxes, equipment, shelving, tools, and other items must not encroach on the 3-foot working space. This violation is found in nearly every warehouse and storage facility.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Panel installed too high or too low</h4>
                  <p className="text-white/60 text-sm mt-1">While NEC 110.26 does not directly specify mounting height, NEC 240.33 states that overcurrent devices must be installed so the center of the handle is not more than 6 feet 7 inches above the floor. Also, the headroom requirement of 6&apos;6&quot; must be maintained above the working space floor.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Plumbing above the panel</h4>
                  <p className="text-white/60 text-sm mt-1">Water supply lines, drain pipes, and condensate lines routed directly above electrical panels violate the dedicated space requirement. This is one of the most common trade coordination failures in new construction.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">Insufficient clearance in utility rooms</h4>
                  <p className="text-white/60 text-sm mt-1">Panels installed in utility rooms where the water heater, furnace, or laundry equipment encroaches on the 30-inch width or 3-foot depth of working space. Plan the room layout before rough-in to ensure all equipment fits with proper clearances.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <h4 className="font-semibold text-white">No lighting at the panel</h4>
                  <p className="text-white/60 text-sm mt-1">Panels installed in basements, closets, or garages without dedicated illumination. A light switch controlled from within the working space and not on the panel circuit is the standard solution.</p>
                </div>
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/nec-service-entrance-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Service Entrance Requirements</h3>
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
