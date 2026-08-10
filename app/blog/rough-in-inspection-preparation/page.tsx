import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Rough-In Electrical Inspection: Complete Preparation Checklist",
  description: "Comprehensive rough-in electrical inspection preparation guide. Box fill calculations, cable securing requirements, nail plates, AFCI/GFCI circuits, grounding electrode system, and common failures to avoid per NEC code.",
  keywords: [
    "rough-in electrical inspection",
    "rough-in inspection checklist",
    "electrical rough-in preparation",
    "NEC rough-in requirements",
    "box fill calculation 314.16",
    "cable stapling requirements 334.30",
    "nail plate requirements NEC",
    "AFCI GFCI rough-in",
    "electrical inspection preparation",
    "pass rough-in inspection"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/rough-in-inspection-preparation",
  },
  openGraph: {
    title: "Rough-In Electrical Inspection: Complete Preparation Checklist - Ampora",
    description: "Everything you need to pass your rough-in electrical inspection on the first try. Box fill, cable support, grounding, AFCI/GFCI, and more.",
    url: "https://amporalabs.com/blog/rough-in-inspection-preparation",
    type: "article",
    publishedTime: "2025-05-12",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Open wall with wiring, boxes, and inspection clipboard illustration">
      {/* Wall studs */}
      <rect x="30" y="10" width="16" height="160" rx="1" fill="#92400e" opacity="0.6"/>
      <rect x="130" y="10" width="16" height="160" rx="1" fill="#92400e" opacity="0.6"/>
      <rect x="230" y="10" width="16" height="160" rx="1" fill="#92400e" opacity="0.6"/>

      {/* Top and bottom plates */}
      <rect x="20" y="5" width="236" height="10" rx="1" fill="#78350f" opacity="0.5"/>
      <rect x="20" y="160" width="236" height="10" rx="1" fill="#78350f" opacity="0.5"/>

      {/* Electrical box on first stud */}
      <rect x="42" y="55" width="30" height="40" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
      <circle cx="57" cy="68" r="4" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
      <circle cx="57" cy="82" r="4" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>

      {/* NM cable from box across studs */}
      <path d="M 72 70 L 130 70" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>
      <path d="M 146 70 L 230 70" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round"/>

      {/* Hole through studs */}
      <ellipse cx="138" cy="70" rx="6" ry="8" fill="#1f2937" stroke="#78350f" strokeWidth="1"/>
      <ellipse cx="238" cy="70" rx="6" ry="8" fill="#1f2937" stroke="#78350f" strokeWidth="1"/>

      {/* Cable staples */}
      <g transform="translate(85, 65)">
        <rect x="0" y="0" width="10" height="10" rx="1" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="2" y1="5" x2="8" y2="5" stroke="#9ca3af" strokeWidth="1.5"/>
      </g>
      <g transform="translate(170, 65)">
        <rect x="0" y="0" width="10" height="10" rx="1" fill="none" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="2" y1="5" x2="8" y2="5" stroke="#9ca3af" strokeWidth="1.5"/>
      </g>

      {/* Second box on middle stud */}
      <rect x="142" y="110" width="30" height="40" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="2"/>
      <circle cx="157" cy="123" r="4" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>
      <circle cx="157" cy="137" r="4" fill="none" stroke="#6b7280" strokeWidth="1" strokeDasharray="2"/>

      {/* Cable down to second box */}
      <path d="M 57 95 L 57 130 Q 57 145 72 145 L 142 130" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round"/>

      {/* Nail plate on stud */}
      <rect x="128" y="62" width="20" height="16" rx="1" fill="#71717a" opacity="0.7" stroke="#a1a1aa" strokeWidth="1"/>
      <text x="138" y="73" textAnchor="middle" fill="#d4d4d8" fontSize="5">NP</text>

      {/* Clipboard / Checklist on right side */}
      <g transform="translate(280, 15)">
        <rect x="0" y="12" width="100" height="140" rx="5" fill="#1f2937" stroke="#f43f5e" strokeWidth="2"/>
        <rect x="30" y="2" width="40" height="18" rx="3" fill="#374151" stroke="#f43f5e" strokeWidth="1.5"/>
        <circle cx="50" cy="11" r="4" fill="#f43f5e" opacity="0.4"/>

        {/* Checklist items */}
        {[
          { label: "Box Fill", checked: true },
          { label: "Cable Support", checked: true },
          { label: "Nail Plates", checked: true },
          { label: "Grounding", checked: true },
          { label: "AFCI/GFCI", checked: false },
          { label: "Panel Space", checked: false },
        ].map((item, i) => (
          <g key={i} transform={`translate(10, ${32 + i * 18})`}>
            <rect x="0" y="0" width="12" height="12" rx="2" fill={item.checked ? "#f43f5e" : "#374151"} stroke={item.checked ? "#f43f5e" : "#6b7280"} strokeWidth="1"/>
            {item.checked && (
              <path d="M 2 6 L 5 9 L 10 3" stroke="#fff" strokeWidth="1.5" fill="none"/>
            )}
            <text x="16" y="10" fill={item.checked ? "#fda4af" : "#9ca3af"} fontSize="8">{item.label}</text>
          </g>
        ))}
      </g>

      {/* Ground wire running along bottom plate */}
      <path d="M 57 95 L 57 155 L 157 155 L 157 150" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 3"/>
    </svg>
  );
}

export default function RoughInInspectionPreparationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Rough-In Inspection Preparation", url: "https://amporalabs.com/blog/rough-in-inspection-preparation" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Rough-In Electrical Inspection: Complete Preparation Checklist"
          description="Comprehensive rough-in electrical inspection preparation guide covering box fill, cable securing, nail plates, AFCI/GFCI circuits, grounding, and common failures."
          datePublished="2025-05-12"
          dateModified="2025-05-12"
          url="https://amporalabs.com/blog/rough-in-inspection-preparation"
          wordCount={4200}
          keywords={["rough-in inspection", "electrical inspection checklist", "NEC rough-in", "box fill", "cable stapling", "AFCI GFCI"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Rough-In Inspection Preparation</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/30 text-rose-300 text-sm font-medium rounded-full">
                Inspections
              </span>
              <span className="text-white/40 text-sm">12 min read</span>
              <span className="text-white/40 text-sm">May 12, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Rough-In Electrical Inspection: Complete Preparation Checklist
            </h1>
            <p className="text-xl text-white/70">
              The rough-in inspection is the single most critical checkpoint in residential electrical work. Once drywall goes up, everything is hidden. This guide walks through every item inspectors verify so you pass on the first call.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-inspectors-look-for" className="hover:text-purple-400">&#8594; What Inspectors Look For at Rough-In</a></li>
              <li><a href="#box-fill-calculations" className="hover:text-purple-400">&#8594; Box Fill Calculations (NEC 314.16)</a></li>
              <li><a href="#box-mounting-support" className="hover:text-purple-400">&#8594; Box Mounting and Support Requirements</a></li>
              <li><a href="#cable-securing" className="hover:text-purple-400">&#8594; Cable Securing and Stapling (NEC 334.30)</a></li>
              <li><a href="#hole-drilling" className="hover:text-purple-400">&#8594; Proper Hole Drilling: Notching vs. Boring</a></li>
              <li><a href="#nail-plates" className="hover:text-purple-400">&#8594; Nail Plate Requirements</a></li>
              <li><a href="#bathroom-kitchen" className="hover:text-purple-400">&#8594; Bathroom and Kitchen Circuit Requirements</a></li>
              <li><a href="#afci-gfci" className="hover:text-purple-400">&#8594; AFCI and GFCI Circuit Identification</a></li>
              <li><a href="#smoke-co-detectors" className="hover:text-purple-400">&#8594; Smoke/CO Detector Circuit Requirements</a></li>
              <li><a href="#outdoor-circuits" className="hover:text-purple-400">&#8594; Outdoor Circuit Rough-In</a></li>
              <li><a href="#panel-location" className="hover:text-purple-400">&#8594; Panel Location and Working Space</a></li>
              <li><a href="#grounding-electrode" className="hover:text-purple-400">&#8594; Grounding Electrode System</a></li>
              <li><a href="#common-failures" className="hover:text-purple-400">&#8594; Common Rough-In Failures and How to Avoid Them</a></li>
              <li><a href="#self-check" className="hover:text-purple-400">&#8594; Pre-Inspection Self-Check Walkthrough</a></li>
              <li><a href="#ready-for-inspector" className="hover:text-purple-400">&#8594; What to Have Ready for the Inspector</a></li>
              <li><a href="#tips-passing" className="hover:text-purple-400">&#8594; Tips for Passing on the First Try</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-inspectors-look-for" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Inspectors Look For at Rough-In</h2>
              <p className="text-white/80 mb-4">
                The rough-in inspection takes place after all wiring, boxes, and raceways are installed but before walls, ceilings, and floors are closed up. This is the authority having jurisdiction&apos;s (AHJ) only opportunity to verify concealed work, so inspectors are thorough.
              </p>
              <p className="text-white/80 mb-4">
                At a high level, inspectors evaluate these areas during a rough-in:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="font-semibold text-rose-400 mb-3">Mechanical</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#8226; Box installation and support</li>
                    <li>&#8226; Cable securing and protection</li>
                    <li>&#8226; Hole drilling through framing</li>
                    <li>&#8226; Nail plate placement</li>
                    <li>&#8226; Conduit support intervals</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="font-semibold text-cyan-400 mb-3">Electrical</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#8226; Wire gauge for circuit rating</li>
                    <li>&#8226; Box fill compliance</li>
                    <li>&#8226; Circuit identification (AFCI/GFCI)</li>
                    <li>&#8226; Dedicated circuit requirements</li>
                    <li>&#8226; Grounding electrode system</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-5">
                  <h3 className="font-semibold text-purple-400 mb-3">Code Compliance</h3>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>&#8226; Receptacle and switch placement</li>
                    <li>&#8226; Required circuits per room</li>
                    <li>&#8226; Panel location and clearance</li>
                    <li>&#8226; Smoke/CO detector wiring</li>
                    <li>&#8226; Match to approved plans</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                The inspector will also verify that the work matches the approved plans and that a valid permit is posted on site. Any deviation from plans needs to be discussed and approved before the inspection, not during.
              </p>
            </section>

            <section id="box-fill-calculations" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Box Fill Calculations (NEC 314.16)</h2>
              <p className="text-white/80 mb-4">
                NEC 314.16 sets strict limits on the number of conductors, devices, and fittings allowed in a box based on its volume. Overfilled boxes are one of the most common rough-in failures. Every conductor, clamp, device, and equipment grounding conductor takes up space that must be accounted for.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Conductor Volume Allowances (Table 314.16(B))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-white/60">Wire Size</th>
                      <th className="text-left py-2 pr-4 text-white/60">Volume per Conductor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/5"><td className="py-2 pr-4">14 AWG</td><td className="py-2">2.00 cu. in.</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 pr-4">12 AWG</td><td className="py-2">2.25 cu. in.</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 pr-4">10 AWG</td><td className="py-2">2.50 cu. in.</td></tr>
                    <tr className="border-b border-white/5"><td className="py-2 pr-4">8 AWG</td><td className="py-2">3.00 cu. in.</td></tr>
                    <tr><td className="py-2 pr-4">6 AWG</td><td className="py-2">5.00 cu. in.</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Counting Conductors per NEC 314.16(B)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">1.</span>
                    <span><strong>Each insulated conductor</strong> entering the box counts as one conductor volume based on its wire gauge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">2.</span>
                    <span><strong>All equipment grounding conductors</strong> (regardless of quantity) count as a single conductor volume, based on the largest EGC entering the box.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">3.</span>
                    <span><strong>Each yoke or strap</strong> containing a device (switch, receptacle) counts as two conductor volumes based on the largest conductor connected to the device.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">4.</span>
                    <span><strong>All internal cable clamps</strong> (regardless of quantity) count as one conductor volume based on the largest conductor in the box.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">5.</span>
                    <span><strong>Conductors that pass through</strong> the box without splice or termination count as one conductor volume each.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">6.</span>
                    <span><strong>Pigtails</strong> originating in the box do not count. Cable connectors outside the box do not count.</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Example Calculation</h3>
              <div className="bg-rose-900/20 rounded-xl p-6 my-4 border border-rose-500/20">
                <p className="text-white/80 mb-3"><strong>Scenario:</strong> A single-gang box with two 14/2 NM cables, one duplex receptacle, and internal cable clamps.</p>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>&#8226; 4 insulated conductors (2 hot + 2 neutral) x 2.00 cu. in. = <strong>8.00 cu. in.</strong></li>
                  <li>&#8226; 1 allowance for all EGCs (largest is 14 AWG) x 2.00 cu. in. = <strong>2.00 cu. in.</strong></li>
                  <li>&#8226; 1 device yoke x 2 conductor volumes x 2.00 cu. in. = <strong>4.00 cu. in.</strong></li>
                  <li>&#8226; 1 allowance for all internal clamps x 2.00 cu. in. = <strong>2.00 cu. in.</strong></li>
                  <li className="pt-2 border-t border-rose-500/20 font-semibold text-white">Total required: <strong>16.00 cu. in.</strong></li>
                </ul>
                <p className="text-white/60 text-sm mt-3">A standard single-gang plastic box (18 cu. in.) would work. A shallow box (14 cu. in.) would fail this calculation.</p>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Pro Tip</h3>
                <p className="text-white/70">
                  Always check the volume stamped on the box itself. Plastic boxes are required to have their volume marked (NEC 314.16(A)). Metal boxes can be looked up in Table 314.16(A). When in doubt, go one size larger. The small added cost of a deeper box is nothing compared to a failed inspection and rework.
                </p>
              </div>
            </section>

            <section id="box-mounting-support" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Box Mounting and Support Requirements</h2>
              <p className="text-white/80 mb-4">
                Every box must be securely fastened and properly positioned per NEC 314.23. Inspectors check both the mounting method and the box orientation relative to the finished wall surface.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Flush with finished surface:</strong> Boxes must be flush with or project past the finished wall/ceiling surface. In non-combustible walls, boxes can be recessed up to 1/4&quot; per NEC 314.20. In combustible walls (wood framing with drywall), the box must be flush with the finished surface.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Drywall depth setting:</strong> Set boxes to project past the stud face by the thickness of the finished wall material (typically 1/2&quot; for standard drywall). Adjustable boxes make this easier.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Secure mounting:</strong> Boxes must be rigidly and securely fastened to the structural member. Nail-on boxes, screw-mounted boxes, and bracket-mounted boxes are all acceptable when properly installed.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Ceiling fan boxes:</strong> Boxes supporting ceiling fans must be listed for fan support per NEC 314.27(C). Standard octagon boxes are NOT rated for ceiling fans. Look for the fan-rated listing mark.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Heavy fixture support:</strong> Boxes supporting luminaires over 50 pounds must be independently supported by the building structure, not just the box (NEC 314.27(A)(2)).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Accessible junction boxes:</strong> All junction boxes must remain accessible after construction is complete. Never bury a junction box behind drywall (NEC 314.29).</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="cable-securing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cable Securing and Stapling Requirements (NEC 334.30)</h2>
              <p className="text-white/80 mb-4">
                NM (Romex) cable support is one of the first things inspectors check. The rules are specific and any deviation is an easy fail. NEC 334.30 governs NM cable securing and supporting.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-3">Support Intervals</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Stapled or secured within <strong>12 inches</strong> of every box or fitting (without cable clamp)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Secured at intervals not exceeding <strong>4.5 feet (54 inches)</strong> along the cable run</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>If the box has an internal cable clamp, the 12&quot; staple can be omitted but the cable must still be supported within 12&quot; of the clamp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Single-gang plastic boxes with NM cable: cable must be stapled within 8&quot; of the box (the box clamp is not considered adequate support)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Stapling Rules</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Use staples sized for the cable (do not use staples rated for 14/2 on 10/3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Do not damage cable sheathing with staples (no over-driving)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Stack no more than two NM cables under a single staple (use stackable staples for multiple cables)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Cables must follow the building surface, not hang freely between supports</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Cable Connectors</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Every cable entering a metal box must have a listed cable connector (NEC 314.17(B))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Plastic (nonmetallic) single-gang boxes with integral cable clamps are acceptable, but the cable sheathing must extend at least 1/4&quot; inside the box (NEC 314.17(C))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>At least 6 inches of free conductor must be left at each box for making connections, measured from where the conductors emerge from the cable sheathing (NEC 300.14)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Conductors must extend at least 3 inches outside the box opening</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="hole-drilling" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Proper Hole Drilling: Notching vs. Boring Joists and Studs</h2>
              <p className="text-white/80 mb-4">
                Holes drilled through structural members must follow both the NEC and the building code (typically the IRC for residential). Incorrect drilling weakens the structure and will fail inspection.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Studs (Vertical Members)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Bored holes:</strong> Maximum diameter is 60% of the stud width. For a nominal 2x4 (actual 3.5&quot;), the maximum hole is 2.1&quot;. Holes must be at least 5/8&quot; from the nearest edge of the stud.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Notches:</strong> Maximum notch depth is 25% of the stud width. For a 2x4, the maximum notch is 7/8&quot;. Notches in the top third of load-bearing studs are limited to 25% of the stud width.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Edge distance rule:</strong> When a bored hole places the cable within 1-1/4&quot; of the nearest edge of the stud, a steel nail plate is required (NEC 300.4(A)(1)).</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Joists (Horizontal Members)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Bored holes:</strong> Maximum diameter is 1/3 of the joist depth. Holes must be at least 2&quot; from the top and bottom edges. For a 2x10 (actual 9.25&quot;), maximum hole is approximately 3&quot;.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Notches:</strong> Maximum notch depth is 1/6 of the joist depth. Notches should be in the outer 1/3 of the span, never in the middle third. No notching in the middle 1/3 of the span on the tension side.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold">&#8226;</span>
                    <span><strong>Engineered lumber:</strong> Never notch or bore engineered I-joists, LVL beams, or trusses without manufacturer approval. This is a non-negotiable fail.</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="nail-plates" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Nail Plate Requirements for Cable Protection</h2>
              <p className="text-white/80 mb-4">
                NEC 300.4(A)(1) requires steel plates (commonly called nail plates) to protect cables and raceways from physical damage by nails and screws driven during construction. This is a major inspection item.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-rose-400 mb-3">When Nail Plates Are Required</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Any cable or raceway installed through bored holes where the edge of the hole is <strong>less than 1-1/4 inches</strong> from the nearest edge of the wood member</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Cables run in notches that are covered by drywall or other finish material</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Any cable running along the face of a stud or joist where it could be contacted by a nail or screw</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Nail Plate Specifications</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Minimum <strong>1/16-inch thick</strong> steel (16 gauge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Must cover the area of the cable path and extend enough to protect the entire cable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Must be of adequate length and width to prevent penetration by nails or screws</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 rounded-xl p-6 my-4 border border-red-500/20">
                <h3 className="font-semibold text-red-400 mb-3">Common Nail Plate Mistakes</h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; Forgetting nail plates on the bottom plate where cables turn up into the wall cavity</li>
                  <li>&#8226; Missing nail plates on studs where cables run close to the drywall side</li>
                  <li>&#8226; Using nail plates that are too small and don&apos;t fully cover the cable path</li>
                  <li>&#8226; Assuming nail plates are only needed for NM cable (they apply to all wiring methods in wood framing)</li>
                </ul>
              </div>
            </section>

            <section id="bathroom-kitchen" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Bathroom and Kitchen Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                Bathrooms and kitchens have dedicated circuit requirements that inspectors verify at rough-in by tracing cable runs and confirming circuit assignments.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-3">Kitchen Requirements</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span><strong>Two 20A small-appliance branch circuits</strong> required, serving only kitchen, pantry, breakfast room, and dining room countertop receptacles (NEC 210.52(B))</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span><strong>One dedicated 20A circuit</strong> for the dishwasher</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span><strong>One dedicated 20A circuit</strong> for waste disposal (if installed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Range/oven circuit: typically 40A or 50A, 240V</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Refrigerator on a dedicated 20A circuit (recommended, sometimes required by AHJ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>GFCI protection for all countertop receptacles serving within 6 feet of a sink (NEC 210.8(A)(6))</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Bathroom Requirements</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span><strong>At least one 20A branch circuit</strong> required to supply bathroom receptacle outlets (NEC 210.11(C)(3))</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>This circuit may supply receptacles in <strong>other bathrooms</strong> but shall have no other outlets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Alternatively, a dedicated 20A circuit can serve a single bathroom&apos;s receptacles, lighting, and exhaust fan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>GFCI protection required on <strong>all</strong> 125V, 15A and 20A receptacles in bathrooms (NEC 210.8(A)(1))</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>At least one receptacle outlet within 36 inches of each lavatory basin outer edge (NEC 210.52(D))</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Exhaust fan circuit (may share with lighting on the dedicated bathroom circuit)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="afci-gfci" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI and GFCI Circuit Identification</h2>
              <p className="text-white/80 mb-4">
                At rough-in, inspectors verify that circuits requiring AFCI or GFCI protection are properly identified and routed. While the actual breakers may not be installed until later, the wiring must support the protection method.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">AFCI-Required Areas (NEC 210.12)</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">Arc-fault circuit interrupter protection is required for all 120V, 15A and 20A branch circuits supplying outlets and devices in the following areas of dwelling units:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-white/70">
                  <div className="bg-white/5 rounded-lg p-2 text-center">Kitchens</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Family Rooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Dining Rooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Living Rooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Parlors</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Libraries</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Dens</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Bedrooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Sunrooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Recreation Rooms</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Closets</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Hallways</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Laundry Areas</div>
                  <div className="bg-white/5 rounded-lg p-2 text-center">Similar Rooms</div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">GFCI-Required Locations (NEC 210.8(A))</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">GFCI protection is required for all 125V through 250V receptacles in the following locations in dwelling units:</p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>&#8226; <strong>Bathrooms</strong> - all receptacles</li>
                  <li>&#8226; <strong>Garages and accessory buildings</strong> at or below grade</li>
                  <li>&#8226; <strong>Outdoors</strong> - all receptacles</li>
                  <li>&#8226; <strong>Crawl spaces</strong> at or below grade</li>
                  <li>&#8226; <strong>Basements</strong> - unfinished areas and portions that are not habitable rooms</li>
                  <li>&#8226; <strong>Kitchens</strong> - receptacles serving countertop surfaces and within 6 feet of a sink</li>
                  <li>&#8226; <strong>Sinks</strong> - receptacles within 6 feet of the outside edge (NEC 210.8(A)(7))</li>
                  <li>&#8226; <strong>Boathouses</strong></li>
                  <li>&#8226; <strong>Bathtubs and shower stalls</strong> - receptacles within 6 feet</li>
                  <li>&#8226; <strong>Laundry areas</strong></li>
                </ul>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Rough-In Tip: Label Your Circuits</h3>
                <p className="text-white/70">
                  At rough-in, mark each home run cable at the panel with its intended circuit designation. Use tape flags or permanent marker to identify which circuits need AFCI breakers, GFCI breakers, or combination AFCI/GFCI breakers. This makes panel termination faster and reduces the chance of installing the wrong breaker type.
                </p>
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

            <section id="smoke-co-detectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Smoke/CO Detector Circuit Requirements</h2>
              <p className="text-white/80 mb-4">
                Hardwired smoke and carbon monoxide detectors must be roughed in at specific locations per the building code (IRC R314 and R315) and interconnected per NFPA 72. Inspectors verify both the wiring and placement at rough-in.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-rose-400 mb-3">Smoke Detector Locations</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Inside each sleeping room (bedroom)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Outside each sleeping area (in the immediate vicinity, typically hallway)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>On each additional story of the dwelling, including basements and habitable attics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>All detectors must be interconnected so when one sounds, all sound</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Hardwired with battery backup (in new construction)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Carbon Monoxide Detector Locations</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Required when the dwelling has fuel-burning appliances, an attached garage, or a fireplace</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Outside each separate sleeping area in the immediate vicinity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>On every level of the dwelling (varies by jurisdiction)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Combination smoke/CO detectors are acceptable and simplify installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-purple-400 mb-3">Wiring Requirements</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Typically wired with 14/3 NM cable for interconnect signal wire (red conductor is the interconnect)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Smoke detector circuit should not be on a switch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Circuit may supply lighting or other loads but must not be AFCI-protected if the AHJ requires smoke alarms to be on a non-AFCI circuit (check local amendments)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Ceiling-mounted locations are preferred; wall-mounted must be within 12 inches of the ceiling</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="outdoor-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Outdoor Circuit Rough-In</h2>
              <p className="text-white/80 mb-4">
                Outdoor wiring at rough-in involves running cables for required exterior receptacles, lighting at entrances, and any dedicated outdoor equipment circuits. Inspectors pay attention to how cables exit the building envelope.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Front and rear receptacles:</strong> Dwelling units require at least one receptacle outlet at the front and rear of the house, accessible from grade level and no more than 6.5 feet above grade (NEC 210.52(E))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>GFCI protection:</strong> All outdoor receptacles require GFCI protection (NEC 210.8(A)(3))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Weather-resistant receptacles:</strong> All 15A and 20A, 125V and 250V outdoor receptacles must be listed as weather-resistant (WR) (NEC 406.9(A))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>In-use covers:</strong> Outdoor receptacles in wet locations require in-use (while-in-use) covers, not just weatherproof flip covers (NEC 406.9(B))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Exterior lighting:</strong> At least one wall-switch-controlled lighting outlet at each entrance or exit, including vehicle doors to attached garages (NEC 210.70(A)(2))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Cable transitions:</strong> NM cable is not permitted for outdoor use. Where interior NM cable transitions to exterior, it must be done through a proper box and converted to an approved outdoor wiring method (UF cable, conduit, etc.)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="panel-location" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Panel Location and Working Space</h2>
              <p className="text-white/80 mb-4">
                Panel location and working space clearance per NEC 110.26 is verified at rough-in because it is much easier to relocate a panel before drywall than after. Inspectors will measure.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-rose-400 mb-3">Working Space Requirements (NEC 110.26)</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Width:</strong> Minimum 30 inches wide, or the width of the equipment, whichever is greater</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Depth:</strong> Minimum 36 inches from the face of the panel (for 0-150V to ground, Condition 1)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Height:</strong> Minimum 78 inches (6.5 feet) from floor to top of working space, or to structural ceiling if lower (NEC 110.26(A)(3))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Dedicated space:</strong> The space above and below the panel extending to the structural ceiling must be dedicated to the electrical installation only. No pipes, ducts, or other equipment (NEC 110.26(E))</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Prohibited Panel Locations</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">&#10005;</span>
                    <span><strong>Bathrooms</strong> - Panelboards shall not be installed in bathrooms (NEC 240.24(E))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">&#10005;</span>
                    <span><strong>Clothes closets</strong> - Overcurrent devices not permitted in the vicinity of easily ignitable materials (NEC 240.24(D))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">&#10005;</span>
                    <span><strong>Above steps of a stairway</strong> - Not permitted over steps (NEC 240.24(F))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">&#10005;</span>
                    <span><strong>Inaccessible locations</strong> - The panel must be readily accessible (no ladder required, not blocked by stored items)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-purple-400 mb-3">Breaker Handle Height</h3>
                <p className="text-white/70">
                  The center of the grip of the operating handle of the highest breaker, when in its highest position, must not be more than 6 feet 7 inches (2.0 m) above the floor or working platform (NEC 240.24(A)). Measure this at rough-in to ensure the panel is mounted at the correct height.
                </p>
              </div>
            </section>

            <section id="grounding-electrode" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Grounding Electrode System</h2>
              <p className="text-white/80 mb-4">
                NEC Article 250, Part III covers the grounding electrode system (GES). Inspectors verify that all available grounding electrodes are bonded together and properly connected to the service equipment. This work must be visible at rough-in.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-rose-400 mb-3">Required Grounding Electrodes (NEC 250.52)</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Metal underground water pipe:</strong> First 10 feet of metal water pipe in direct contact with the earth. Must be supplemented by an additional electrode (NEC 250.53(D)(2)).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Metal frame of the building:</strong> If the structural metal frame is effectively grounded, it serves as an electrode.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Concrete-encased electrode (Ufer ground):</strong> At least 20 feet of bare copper conductor (4 AWG minimum) or 1/2-inch rebar encased within the bottom of a concrete foundation in direct contact with the earth. This is typically the most common electrode in new construction.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Ground ring:</strong> At least 20 feet of bare copper conductor (2 AWG minimum) encircling the building at a depth of at least 30 inches.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Rod and pipe electrodes:</strong> Ground rods must be at least 8 feet long and driven to their full length. If a single rod does not achieve 25 ohms or less resistance to ground, a second rod is required, spaced at least 6 feet apart (NEC 250.53(A)(2)).</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-cyan-400 mb-3">Grounding Electrode Conductor (GEC) Sizing</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>GEC is sized per NEC Table 250.66 based on the size of the largest service-entrance conductor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>For a typical 200A service with 2/0 copper or 4/0 aluminum service conductors, the GEC is 4 AWG copper</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>GEC must be installed in one continuous length without splice, unless irreversible compression connectors or exothermic welding is used (NEC 250.64(C))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>GEC must be protected where subject to physical damage (NEC 250.64(B))</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-4">
                <h3 className="font-semibold text-purple-400 mb-3">Bonding Requirements</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>All grounding electrodes present must be bonded together to form the grounding electrode system (NEC 250.50)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Interior metal water piping must be bonded with a conductor sized per Table 250.66 (NEC 250.104(A))</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Metal gas piping must be bonded (but is NOT permitted as a grounding electrode) per NEC 250.104(B)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Bonding connections must use listed clamps or connectors appropriate for the application</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="common-failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Rough-In Failures and How to Avoid Them</h2>
              <p className="text-white/80 mb-4">
                Based on data from inspectors across the country, these are the most frequent rough-in failures. Each one is entirely preventable with proper attention during installation.
              </p>

              <div className="space-y-3 my-6">
                {[
                  { num: 1, title: "Missing or insufficient nail plates", desc: "Every cable within 1-1/4\" of a stud or joist edge needs a steel plate. Walk every stud and check every hole. This is the single most common rough-in failure." },
                  { num: 2, title: "Cable stapling violations", desc: "Cables not stapled within 12\" of boxes, or support intervals exceeding 4.5 feet. This is easy to verify and easy to fix before calling for inspection." },
                  { num: 3, title: "Box fill exceeded", desc: "Too many conductors or devices in a box without calculating the fill. Use the correct box size or upgrade to a deeper or larger box." },
                  { num: 4, title: "Missing cable connectors at metal boxes", desc: "Every cable entering a metal box must have a listed cable connector. NM cable pushed through an open knockout is a fail." },
                  { num: 5, title: "Insufficient free conductor length", desc: "Less than 6 inches of free conductor at each box, or conductors not extending at least 3 inches past the box opening. Leave plenty of slack." },
                  { num: 6, title: "Improper hole drilling through framing", desc: "Holes too large, too close to edges, or through engineered lumber without approval. Measure before you drill." },
                  { num: 7, title: "Wrong wire gauge for circuit rating", desc: "14 AWG on a 20A circuit or undersized conductors for the load. Double-check wire gauge against breaker size." },
                  { num: 8, title: "Missing grounding electrode connections", desc: "Ufer ground not connected, ground rods not driven, or GEC not properly installed. Complete all grounding work before calling for inspection." },
                  { num: 9, title: "Boxes not set for finished wall depth", desc: "Boxes set too deep or too shallow for the finished wall surface. Use adjustable boxes or depth rings." },
                  { num: 10, title: "Smoke detector locations wrong or missing", desc: "Missing inside a bedroom, missing outside sleeping areas, or not interconnected. Verify against the building code required locations." },
                  { num: 11, title: "Kitchen and bathroom circuit violations", desc: "Missing the two required small-appliance circuits, sharing bathroom receptacle circuit with non-bathroom outlets, or missing dedicated dishwasher circuit." },
                  { num: 12, title: "Panel working space not maintained", desc: "HVAC equipment, plumbing, or storage planned in the panel working space area. Coordinate with other trades early." },
                ].map((item) => (
                  <div key={item.num} className="bg-red-900/10 border border-red-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-red-400 font-bold text-lg">{item.num}.</span>
                      <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-white/60 text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="self-check" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Pre-Inspection Self-Check Walkthrough</h2>
              <p className="text-white/80 mb-4">
                Before calling for the inspection, walk the entire job systematically. Use this room-by-room approach to catch problems before the inspector does.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Start at the Panel</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Verify working space clearances (30&quot; x 36&quot; x 78&quot;)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Check that all home run cables are labeled</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Verify GEC is connected and properly routed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Confirm cable connectors on all entries to the panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Verify panel height (highest breaker handle no more than 6&apos;7&quot; from floor)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Walk Every Room</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <p className="text-white/70 mb-3">For each room, check:</p>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Every box is properly mounted and set to correct depth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Every cable is stapled within 12&quot; of the box and at proper intervals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Nail plates installed wherever cable passes within 1-1/4&quot; of stud edge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Cable sheathing is intact and undamaged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>At least 6&quot; of free conductor in each box</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Box fill is within limits for the number of cables entering</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Check Special Areas</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Kitchen:</strong> Verify two small-appliance circuits, dedicated dishwasher and disposal circuits, GFCI routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Bathrooms:</strong> Confirm dedicated 20A circuit, GFCI routing, exhaust fan wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Bedrooms:</strong> Verify smoke detector location and 14/3 interconnect wiring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Garage:</strong> Confirm GFCI-protected circuit, ceiling fan box if applicable, exterior receptacle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Laundry:</strong> Verify 20A dedicated circuit, dryer circuit (if electric), GFCI protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span><strong>Outdoor:</strong> Confirm front and rear receptacle boxes, exterior light boxes at entries, cable transition from NM to outdoor wiring method</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Verify Grounding System</h3>
              <div className="bg-white/5 rounded-xl p-6 my-4">
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Ufer ground connected and visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Ground rods driven and GEC connected (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Water pipe bond in place (if metal water pipe exists)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>Gas pipe bond in place (if metal gas piping exists)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#9744;</span>
                    <span>All bonding connections use listed clamps and connectors</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="ready-for-inspector" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What to Have Ready for the Inspector</h2>
              <p className="text-white/80 mb-4">
                Being prepared when the inspector arrives demonstrates professionalism and speeds up the inspection. Have these items ready before calling for the inspection.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-3">Documentation</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Permit posted and visible at the job site</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Approved plans on site (the stamped set, not a copy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Any approved plan revisions or change orders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Load calculation worksheet (if requested by AHJ)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Previous inspection approval card (if applicable)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Site Conditions</h3>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>All electrical work accessible and visible (no drywall covering)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Work area clean and safe to walk through</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Adequate lighting in work area (bring task lighting if needed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Ladders available if work is above reach height</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Address clearly visible from the street</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">&#9744;</span>
                      <span>Gate unlocked or access arranged if the site is secured</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Professional Courtesy</h3>
                <p className="text-white/70">
                  Be present or reachable during the inspection window. Many inspectors appreciate a quick walk-through with the electrician to point out anything unusual or ask questions about the installation. Being available and cooperative goes a long way toward a smooth inspection process.
                </p>
              </div>
            </section>

            <section id="tips-passing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tips for Passing on the First Try</h2>
              <p className="text-white/80 mb-4">
                Experienced electricians who consistently pass rough-in inspections share these habits:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">1. Install Nail Plates as You Go</h3>
                  <p className="text-white/70 text-sm">Don&apos;t wait until the end to install nail plates. Put them on as you drill each hole and pull each cable. Trying to retrace your work after the fact is how plates get missed.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">2. Keep a Staple Gun in Your Pouch</h3>
                  <p className="text-white/70 text-sm">Staple cables as you pull them, not as a separate step. This ensures you never miss a support point and keeps the installation neat from the start.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">3. Use the Right Box Size from the Start</h3>
                  <p className="text-white/70 text-sm">Know your box fill limits before you start pulling cables. A single-gang 18 cu. in. box handles two 14/2 cables with a device. If you anticipate three cables, use a deeper box or a two-gang box from the beginning.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">4. Leave Extra Conductor Length</h3>
                  <p className="text-white/70 text-sm">Leave 8 to 10 inches of free conductor instead of the minimum 6 inches. The extra length costs pennies and makes device termination much easier. It also ensures you meet the 3-inch extension past the box face requirement.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">5. Photograph Everything Before Drywall</h3>
                  <p className="text-white/70 text-sm">Take photos of every wall cavity showing cable routing, nail plates, and box locations. These photos are invaluable if issues arise later and help with troubleshooting if something fails after the walls are closed.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">6. Know Your Local Amendments</h3>
                  <p className="text-white/70 text-sm">Many jurisdictions amend the NEC with local requirements. Your AHJ may require things not in the national code, or may not have adopted the latest edition yet. Check with your building department before starting work.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">7. Do Your Own Inspection First</h3>
                  <p className="text-white/70 text-sm">Walk the entire job with a critical eye before scheduling the inspection. Pretend you are the inspector. Check every box, every cable run, every nail plate. A 30-minute self-inspection can save days of rescheduling and callback trips.</p>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-2">8. Coordinate with Other Trades</h3>
                  <p className="text-white/70 text-sm">Plumbers and HVAC installers can inadvertently interfere with your work. A pipe run through your panel working space or ductwork resting on your cables creates inspection failures that aren&apos;t your fault but are still your problem to resolve. Communicate early.</p>
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
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist: Pass Your Inspection First Time</h3>
                </Link>
                <Link href="/blog/box-fill-calculations-nec-314" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Box Fill Calculations: NEC 314.16 Complete Guide</h3>
                </Link>
                <Link href="/blog/nec-article-250-grounding-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 250: Grounding and Bonding Guide</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-rose-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements and Differences</h3>
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
