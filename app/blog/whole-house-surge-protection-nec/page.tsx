import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Whole House Surge Protection: NEC Article 242 Requirements & Installation Guide",
  description: "Complete guide to whole house surge protection devices (SPDs). Learn NEC Article 242 requirements, Type 1, 2, and 3 SPD differences, kA ratings, installation methods, and how to protect your home from voltage surges.",
  keywords: [
    "whole house surge protection",
    "surge protective device",
    "SPD installation",
    "NEC Article 242",
    "Type 1 SPD",
    "Type 2 SPD",
    "Type 3 SPD",
    "surge protector NEC code",
    "kA rating surge protector",
    "voltage surge protection",
    "transient voltage surge suppressor",
    "panel surge protector",
    "lightning protection electrical",
    "SPD requirements NEC 2023",
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/whole-house-surge-protection-nec",
  },
  openGraph: {
    title: "Whole House Surge Protection: NEC Article 242 Requirements - Ampora",
    description: "Complete guide to NEC Article 242 surge protective device requirements and installation.",
    url: "https://amporalabs.com/blog/whole-house-surge-protection-nec",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Surge protection device installation diagram">
      {/* Electrical panel */}
      <rect x="140" y="20" width="80" height="120" rx="4" fill="#1f2937" stroke="#6b7280" strokeWidth="2"/>
      <rect x="148" y="30" width="64" height="100" rx="2" fill="#111827"/>

      {/* Breakers */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="152" y={36 + i * 18} width="26" height="12" rx="2" fill="#374151" stroke="#4b5563"/>
          <rect x="182" y={36 + i * 18} width="26" height="12" rx="2" fill="#374151" stroke="#4b5563"/>
        </g>
      ))}

      {/* Main breaker */}
      <rect x="158" y="26" width="44" height="8" rx="1" fill="#dc2626" stroke="#ef4444"/>
      <text x="180" y="33" textAnchor="middle" fill="#fff" fontSize="5" fontWeight="bold">MAIN</text>

      {/* SPD device */}
      <rect x="240" y="40" width="50" height="70" rx="6" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
      <text x="265" y="60" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">SPD</text>
      <text x="265" y="72" textAnchor="middle" fill="#fff" fontSize="7">Type 2</text>

      {/* Status LED */}
      <circle cx="265" cy="85" r="4" fill="#22c55e" opacity="0.8"/>
      <circle cx="265" cy="85" r="6" fill="#22c55e" opacity="0.2"/>
      <text x="265" y="100" textAnchor="middle" fill="#22c55e" fontSize="6">Protected</text>

      {/* Connection lines */}
      <line x1="220" y1="55" x2="240" y2="55" stroke="#ef4444" strokeWidth="2"/>
      <line x1="220" y1="65" x2="240" y2="65" stroke="#111827" strokeWidth="2"/>
      <line x1="220" y1="75" x2="240" y2="75" stroke="#22c55e" strokeWidth="2"/>

      {/* Lightning bolt */}
      <g transform="translate(60, 50)">
        <polygon points="15,0 5,25 12,25 2,50 22,20 14,20 24,0" fill="#fbbf24" opacity="0.9"/>
      </g>

      {/* Surge arrow */}
      <path d="M95,65 L135,55" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4,3" markerEnd="url(#arrowhead)"/>
      <defs>
        <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#fbbf24"/>
        </marker>
      </defs>

      {/* Labels */}
      <text x="60" y="115" textAnchor="middle" fill="#fbbf24" fontSize="8" fontWeight="bold">Surge</text>
      <text x="180" y="148" textAnchor="middle" fill="#fff" fontSize="8" fontWeight="bold">Panel</text>
      <text x="265" y="125" textAnchor="middle" fill="#60a5fa" fontSize="8" fontWeight="bold">Surge Protector</text>

      {/* Title badge */}
      <rect x="300" y="5" width="90" height="25" rx="4" fill="#f43f5e" fillOpacity="0.2" stroke="#f43f5e"/>
      <text x="345" y="22" textAnchor="middle" fill="#f43f5e" fontSize="9" fontWeight="bold">NEC 242</text>
    </svg>
  );
}

export default function WholeHouseSurgeProtectionPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Whole House Surge Protection", url: "https://amporalabs.com/blog/whole-house-surge-protection-nec" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Whole House Surge Protection: NEC Article 242 Requirements &amp; Installation Guide"
          description="Complete guide to NEC Article 242 surge protective device requirements, SPD types, and installation methods."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/whole-house-surge-protection-nec"
          wordCount={2800}
          keywords={["surge protection", "NEC Article 242", "SPD", "Type 1 SPD", "Type 2 SPD", "surge protector installation"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Whole House Surge Protection</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/30 text-rose-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">11 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Whole House Surge Protection: NEC Article 242 Requirements &amp; Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Surge protective devices (SPDs) are now required by the NEC for dwelling units. Learn the different SPD types, kA ratings, installation requirements, and how to properly protect electrical systems from transient voltage surges.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-orange-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-are-surges" className="hover:text-purple-400">&#8594; What Are Voltage Surges?</a></li>
              <li><a href="#nec-242" className="hover:text-purple-400">&#8594; NEC Article 242 Requirements</a></li>
              <li><a href="#spd-types" className="hover:text-purple-400">&#8594; Type 1, 2, &amp; 3 SPDs Explained</a></li>
              <li><a href="#ka-ratings" className="hover:text-purple-400">&#8594; Understanding kA Ratings</a></li>
              <li><a href="#installation" className="hover:text-purple-400">&#8594; Installation Methods</a></li>
              <li><a href="#wiring" className="hover:text-purple-400">&#8594; Wiring &amp; Connection Requirements</a></li>
              <li><a href="#selection" className="hover:text-purple-400">&#8594; Selecting the Right SPD</a></li>
              <li><a href="#testing" className="hover:text-purple-400">&#8594; Testing &amp; Maintenance</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-are-surges" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Are Voltage Surges?</h2>
              <p className="text-white/80 mb-4">
                A voltage surge (or transient voltage) is a brief spike in electrical voltage that exceeds the normal 120/240V sine wave. Surges can last from microseconds to milliseconds but carry enough energy to damage or degrade sensitive electronics, motors, and electrical equipment.
              </p>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-300 mb-3">External Surge Sources</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; Lightning strikes (direct or nearby)</li>
                    <li>&#8226; Utility grid switching operations</li>
                    <li>&#8226; Power line faults and tree contacts</li>
                    <li>&#8226; Transformer switching by the utility</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-300 mb-3">Internal Surge Sources</h3>
                  <ul className="text-white/70 space-y-1 text-sm">
                    <li>&#8226; HVAC compressor cycling</li>
                    <li>&#8226; Elevator motors starting and stopping</li>
                    <li>&#8226; Large motor loads energizing</li>
                    <li>&#8226; Arc welders and similar equipment</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/80">
                Studies by the IEEE and NEMA indicate that approximately 60-80% of surge events originate from within the building. This is why whole-house surge protection at the service panel is so important&mdash;it protects against both external and internal surges traveling through the electrical system.
              </p>
            </section>

            <section id="nec-242" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Article 242 Requirements</h2>
              <p className="text-white/80 mb-4">
                Article 242 was introduced in the 2020 NEC (previously surge protection was addressed in Article 285). The 2023 NEC expanded these requirements significantly:
              </p>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">NEC 242.22 &mdash; Dwelling Unit Requirement</h3>
                <p className="text-white/70 text-sm">
                  All dwelling unit services rated 100 amperes or greater must have a surge protective device (SPD) installed. This applies to new construction and service upgrades. The SPD must be a Type 1 or Type 2 device and must be an integral part of, or connected to, the service disconnect equipment.
                </p>
              </div>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>242.24</strong> &mdash; SPDs must be listed and marked with their type, nominal voltage, and short-circuit current rating (SCCR)</li>
                <li><strong>242.30</strong> &mdash; Type 1 SPDs shall be connected on the line side of the service disconnect</li>
                <li><strong>242.32</strong> &mdash; Type 2 SPDs shall be connected to the load side of the service disconnect</li>
                <li><strong>242.34</strong> &mdash; Type 3 SPDs shall be installed at a minimum conductor length of 10 meters (30 ft) from the service or separately derived system disconnect</li>
                <li><strong>242.40</strong> &mdash; SPD connections must be as short as practicable to minimize impedance</li>
                <li><strong>242.42</strong> &mdash; SPDs must not be installed on circuits exceeding their maximum continuous operating voltage (MCOV)</li>
              </ul>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">Key Compliance Point</h3>
                <p className="text-white/70 text-sm">
                  The SPD requirement applies per NEC 242.22 regardless of whether the dwelling unit has sensitive electronic equipment. It is a code-mandated safety feature, similar to AFCI or GFCI requirements. Failure to install an SPD on a new or upgraded dwelling service is a code violation in jurisdictions adopting the 2020 NEC or later.
                </p>
              </div>
            </section>

            <section id="spd-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Type 1, 2, &amp; 3 SPDs Explained</h2>
              <p className="text-white/80 mb-4">
                UL 1449 (the standard for SPDs) classifies devices into three types based on their installation location:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">Type 1</th>
                      <th className="text-left py-3 px-4 text-white/60">Type 2</th>
                      <th className="text-left py-3 px-4 text-white/60">Type 3</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Location</td>
                      <td className="py-3 px-4">Line side of service</td>
                      <td className="py-3 px-4">Load side of service</td>
                      <td className="py-3 px-4">Point of use</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">NEC Section</td>
                      <td className="py-3 px-4">242.30</td>
                      <td className="py-3 px-4">242.32</td>
                      <td className="py-3 px-4">242.34</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">OCPD Required</td>
                      <td className="py-3 px-4">No (external fuse optional)</td>
                      <td className="py-3 px-4">Yes (dedicated breaker)</td>
                      <td className="py-3 px-4">Per manufacturer</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Typical kA Rating</td>
                      <td className="py-3 px-4">100-200+ kA</td>
                      <td className="py-3 px-4">50-100 kA</td>
                      <td className="py-3 px-4">10-40 kA</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Best For</td>
                      <td className="py-3 px-4">Primary protection</td>
                      <td className="py-3 px-4">Whole-house (most common)</td>
                      <td className="py-3 px-4">Sensitive equipment</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Typical Cost</td>
                      <td className="py-3 px-4">$300-$800+</td>
                      <td className="py-3 px-4">$50-$300</td>
                      <td className="py-3 px-4">$20-$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                For optimal protection, a layered approach using multiple SPD types is recommended. A Type 2 SPD at the main panel handles the bulk of surge energy, while Type 3 devices at individual outlets provide additional clamping for sensitive equipment like computers, home theaters, and medical devices.
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
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true"><path d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.69.59 1.19 0 .5-.22.9-.57 1.18l-2.29 1.32L15.39 12l2.5-2.5 2.27 1.31zM6.05 2.66L16.81 8.88l-2.27 2.27L6.05 2.66z"/></svg>
                  Download Free
                </a>
              </div>
            </div>

            <section id="ka-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Understanding kA Ratings</h2>
              <p className="text-white/80 mb-4">
                The kA (kiloampere) rating indicates the maximum surge current an SPD can handle. Higher kA ratings generally mean better protection and longer device life:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-purple-400 mb-2">50 kA</div>
                  <p className="text-white/70 text-sm">Minimum Recommended</p>
                  <p className="text-white/50 text-xs mt-1">Basic residential protection</p>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-cyan-400 mb-2">100 kA</div>
                  <p className="text-white/70 text-sm">Good Protection</p>
                  <p className="text-white/50 text-xs mt-1">Standard residential &amp; light commercial</p>
                </div>
                <div className="bg-green-900/30 rounded-xl p-6 text-center">
                  <div className="text-3xl font-mono font-bold text-green-400 mb-2">200 kA</div>
                  <p className="text-white/70 text-sm">Premium Protection</p>
                  <p className="text-white/50 text-xs mt-1">High-value electronics &amp; commercial</p>
                </div>
              </div>
              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-orange-300 mb-2">VPR (Voltage Protection Rating)</h3>
                <p className="text-white/70 text-sm">
                  The VPR indicates the maximum let-through voltage during a surge event. Lower VPR values mean better clamping. For 120V circuits, look for a VPR of 700V or less. For 240V circuits, look for 1200V or less. The VPR replaced the older SVR (Suppressed Voltage Rating) in UL 1449 4th Edition.
                </p>
              </div>
            </section>

            <section id="installation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Methods</h2>
              <p className="text-white/80 mb-4">
                Type 2 SPDs are the most commonly installed whole-house surge protectors. There are several mounting configurations:
              </p>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Breaker-Integrated SPD</p>
                  <p className="text-white/60 text-sm mt-1">Plugs directly into a two-pole breaker space in the panel. This is the most common residential installation method. The SPD occupies two breaker spaces and connects to both bus bars and neutral.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">External SPD with Dedicated Breaker</p>
                  <p className="text-white/60 text-sm mt-1">Mounts adjacent to the panel and connects through a dedicated two-pole breaker. This method works when panel space is limited or when installing on an existing panel. Keep conductors as short as possible (under 18 inches ideally).</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Integrated Panel SPD</p>
                  <p className="text-white/60 text-sm mt-1">Some newer load centers come with built-in SPD protection. These provide the shortest conductor length and best performance. Check the panel listing to confirm the SPD meets NEC 242 requirements.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-rose-400 font-semibold">Type 1 Meter-Base SPD</p>
                  <p className="text-white/60 text-sm mt-1">Installs at the meter base on the line side of the service disconnect. Requires coordination with the utility and may need a meter-base rated for SPD integration. Provides the earliest point of surge interception.</p>
                </div>
              </div>
            </section>

            <section id="wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wiring &amp; Connection Requirements</h2>
              <p className="text-white/80 mb-4">
                Proper wiring is critical to SPD performance. Long or poorly routed conductors add impedance that reduces the device&apos;s ability to clamp surges:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Conductor length</strong> &mdash; Keep SPD connections as short as practicable per NEC 242.40. Every inch of conductor adds inductance that increases let-through voltage. Target under 18 inches total lead length.</li>
                <li><strong>Conductor size</strong> &mdash; Minimum #14 AWG for SPD connections per most manufacturer instructions. Many specify #10 AWG for optimal performance. Follow the manufacturer&apos;s installation manual.</li>
                <li><strong>Routing</strong> &mdash; Route SPD conductors in a straight path without loops or coils. Avoid running SPD conductors parallel to other wiring. Sharp bends add inductance.</li>
                <li><strong>OCPD</strong> &mdash; Type 2 SPDs require a dedicated overcurrent protective device (typically a 15A or 20A two-pole breaker) unless the SPD is listed for direct bus connection.</li>
                <li><strong>Grounding</strong> &mdash; The SPD must connect to the panel grounding system. The equipment grounding conductor must be the same size as the SPD line conductors or as specified by the manufacturer.</li>
              </ul>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-300 mb-2">Installation Best Practice</h3>
                <p className="text-white/70 text-sm">
                  Install the SPD breaker as close to the main breaker as possible. Use the top breaker positions nearest the main bus lugs. This minimizes conductor length and maximizes surge diversion effectiveness. If using an external SPD, mount it directly adjacent to the panel with the shortest possible conduit run.
                </p>
              </div>
            </section>

            <section id="selection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Selecting the Right SPD</h2>
              <p className="text-white/80 mb-4">
                When choosing a surge protective device, evaluate these key specifications:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Specification</th>
                      <th className="text-left py-3 px-4 text-white/60">What to Look For</th>
                      <th className="text-left py-3 px-4 text-white/60">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Surge Rating (kA)</td>
                      <td className="py-3 px-4">50 kA minimum, 100 kA preferred</td>
                      <td className="py-3 px-4">Higher ratings last longer through multiple surge events</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">VPR</td>
                      <td className="py-3 px-4">700V or less (120V), 1200V or less (240V)</td>
                      <td className="py-3 px-4">Lower VPR = less voltage reaches your equipment</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">MCOV</td>
                      <td className="py-3 px-4">Must match or exceed system voltage</td>
                      <td className="py-3 px-4">Prevents premature SPD failure from normal voltage</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">SCCR</td>
                      <td className="py-3 px-4">Must meet or exceed available fault current</td>
                      <td className="py-3 px-4">Ensures safe operation during SPD failure</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Status Indicator</td>
                      <td className="py-3 px-4">LED or audible alarm</td>
                      <td className="py-3 px-4">Tells you when SPD has failed and needs replacement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/80">
                Always verify the SPD is UL 1449 listed and appropriate for the system voltage. For 120/240V single-phase residential services, the SPD MCOV must be rated for at least 150V L-N and 300V L-L.
              </p>
            </section>

            <section id="testing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Testing &amp; Maintenance</h2>
              <p className="text-white/80 mb-4">
                SPDs have a finite lifespan that degrades with each surge event. Proper maintenance ensures continued protection:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Visual inspection</strong> &mdash; Check the SPD status indicator monthly. A red light or no light typically indicates the device has reached end of life and needs replacement.</li>
                <li><strong>After major events</strong> &mdash; Inspect the SPD after any nearby lightning strike or known power quality event. Even if the indicator shows green, check for physical damage.</li>
                <li><strong>Connection integrity</strong> &mdash; During periodic panel inspections, verify SPD connections are tight. Loose connections increase impedance and reduce protection.</li>
                <li><strong>Replacement schedule</strong> &mdash; Most manufacturers recommend replacement every 5-10 years even if the status indicator shows good. MOV (metal oxide varistor) components degrade over time regardless of surge events.</li>
              </ul>
              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-300 mb-2">Record Keeping</h3>
                <p className="text-white/70 text-sm">
                  Document the SPD model, installation date, kA rating, and VPR in the panel schedule or service documentation. This helps future electricians verify code compliance and plan replacement when the device reaches end of life.
                </p>
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
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting Guide</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection Guide</h3>
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
