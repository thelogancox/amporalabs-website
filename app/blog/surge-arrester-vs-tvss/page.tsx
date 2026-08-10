import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BreadcrumbJsonLd, BlogPostingJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Surge Arrester vs SPD (TVSS): Understanding Surge Protection Device Types",
  description: "Complete guide to surge protection devices for electricians. Learn the differences between surge arresters, SPDs, and TVSS. Understand Type 1, 2, 3, and 4 devices, voltage protection ratings, kA ratings, MOV technology, and UL 1449 requirements.",
  keywords: [
    "surge arrester vs SPD",
    "TVSS vs SPD",
    "surge protection device types",
    "Type 1 surge protector",
    "Type 2 surge protector",
    "Type 3 surge protector",
    "UL 1449",
    "voltage protection rating",
    "MOV surge protection",
    "surge protective device NEC",
    "kA surge rating",
    "NEC Article 242",
    "whole house surge protection",
    "transient voltage surge suppressor",
    "SPD installation requirements",
    "surge arrester installation"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/surge-arrester-vs-tvss",
  },
  openGraph: {
    title: "Surge Arrester vs SPD (TVSS): Surge Protection Device Guide - Ampora",
    description: "Understanding surge protection device types: surge arresters, SPDs, TVSS, and the differences between Type 1, 2, 3, and 4 devices.",
    url: "https://amporalabs.com/blog/surge-arrester-vs-tvss",
    type: "article",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 160" className="w-full h-40 md:h-48" aria-label="Surge protection device types comparison">
      {/* Lightning bolt */}
      <g transform="translate(10, 5)">
        <polygon points="35,0 20,55 35,50 18,100 55,40 38,45" fill="#fbbf24" fillOpacity="0.8"/>
        <text x="35" y="115" textAnchor="middle" fill="#fcd34d" fontSize="7">Surge Event</text>
      </g>

      {/* Power line */}
      <line x1="60" y1="40" x2="380" y2="40" stroke="#ef4444" strokeWidth="2.5"/>
      <line x1="60" y1="50" x2="380" y2="50" stroke="#1f2937" strokeWidth="2.5"/>
      <text x="80" y="35" fill="#ef4444" fontSize="6">Line (Hot)</text>
      <text x="80" y="62" fill="#6b7280" fontSize="6">Neutral/Ground</text>

      {/* Type 1 SPD */}
      <g transform="translate(110, 55)">
        <rect x="0" y="0" width="60" height="50" rx="4" fill="#374151" stroke="#a855f7" strokeWidth="2"/>
        <text x="30" y="18" textAnchor="middle" fill="#c4b5fd" fontSize="8" fontWeight="bold">Type 1</text>
        <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Before main</text>
        <text x="30" y="40" textAnchor="middle" fill="#9ca3af" fontSize="6">disconnect</text>
        {/* Connection lines */}
        <line x1="30" y1="-5" x2="30" y2="0" stroke="#a855f7" strokeWidth="2"/>
        <line x1="30" y1="50" x2="30" y2="55" stroke="#a855f7" strokeWidth="2"/>
        <text x="30" y="68" textAnchor="middle" fill="#a855f7" fontSize="7" fontWeight="bold">200 kA</text>
      </g>

      {/* Type 2 SPD */}
      <g transform="translate(200, 55)">
        <rect x="0" y="0" width="60" height="50" rx="4" fill="#374151" stroke="#22c55e" strokeWidth="2"/>
        <text x="30" y="18" textAnchor="middle" fill="#86efac" fontSize="8" fontWeight="bold">Type 2</text>
        <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">At panel</text>
        <text x="30" y="40" textAnchor="middle" fill="#9ca3af" fontSize="6">load side</text>
        <line x1="30" y1="-5" x2="30" y2="0" stroke="#22c55e" strokeWidth="2"/>
        <line x1="30" y1="50" x2="30" y2="55" stroke="#22c55e" strokeWidth="2"/>
        <text x="30" y="68" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">50-100 kA</text>
      </g>

      {/* Type 3 SPD */}
      <g transform="translate(290, 55)">
        <rect x="0" y="0" width="60" height="50" rx="4" fill="#374151" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="30" y="18" textAnchor="middle" fill="#7dd3fc" fontSize="8" fontWeight="bold">Type 3</text>
        <text x="30" y="30" textAnchor="middle" fill="#9ca3af" fontSize="6">Point of</text>
        <text x="30" y="40" textAnchor="middle" fill="#9ca3af" fontSize="6">use</text>
        <line x1="30" y1="-5" x2="30" y2="0" stroke="#0ea5e9" strokeWidth="2"/>
        <line x1="30" y1="50" x2="30" y2="55" stroke="#0ea5e9" strokeWidth="2"/>
        <text x="30" y="68" textAnchor="middle" fill="#0ea5e9" fontSize="7" fontWeight="bold">10-20 kA</text>
      </g>

      {/* Voltage clamping visualization */}
      <g transform="translate(100, 128)">
        <rect x="0" y="0" width="270" height="28" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
        <text x="135" y="12" textAnchor="middle" fill="#fff" fontSize="7" fontWeight="bold">Voltage Protection Rating (VPR)</text>
        <text x="135" y="23" textAnchor="middle" fill="#9ca3af" fontSize="6">Lower VPR = Better protection for sensitive electronics</text>
      </g>
    </svg>
  );
}

export default function SurgeArresterVsTvssPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Surge Arrester vs SPD", url: "https://amporalabs.com/blog/surge-arrester-vs-tvss" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Surge Arrester vs SPD (TVSS): Understanding Surge Protection Device Types"
          description="Complete guide to surge protection devices including surge arresters, SPDs, and TVSS. Understand device types, ratings, and NEC requirements."
          datePublished="2025-02-08"
          dateModified="2025-02-08"
          url="https://amporalabs.com/blog/surge-arrester-vs-tvss"
          wordCount={2500}
          keywords={["surge arrester", "SPD", "TVSS", "surge protection", "UL 1449", "Type 1 2 3"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Surge Arrester vs SPD (TVSS)</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-orange-600/30 text-orange-300 text-sm font-medium rounded-full">
                Materials
              </span>
              <span className="text-white/40 text-sm">10 min read</span>
              <span className="text-white/40 text-sm">February 8, 2025</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Surge Arrester vs SPD (TVSS): Understanding Surge Protection Device Types
            </h1>
            <p className="text-xl text-white/70">
              A complete guide to surge protection terminology, device types, ratings, and installation requirements. Learn the differences between surge arresters, SPDs, and the old TVSS classification, plus how to select the right protection for any application.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-orange-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Quick Reference CTA */}
          <div className="bg-orange-900/30 border border-orange-500/30 rounded-2xl p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-lg mb-1">Quick NEC Reference</h3>
                <p className="text-white/70 text-sm">Look up surge protection requirements and NEC Article 242 instantly with Ampora.</p>
              </div>
              <a
                href="/get"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-500 transition-colors whitespace-nowrap"
              >
                Download Free
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#terminology" className="hover:text-orange-400">&#8594; Terminology: Surge Arrester vs SPD vs TVSS</a></li>
              <li><a href="#device-types" className="hover:text-orange-400">&#8594; Type 1, 2, 3 &amp; 4 Device Classifications</a></li>
              <li><a href="#voltage-protection" className="hover:text-orange-400">&#8594; Voltage Protection Ratings (VPR)</a></li>
              <li><a href="#ka-ratings" className="hover:text-orange-400">&#8594; Surge Current (kA) Ratings</a></li>
              <li><a href="#mov-technology" className="hover:text-orange-400">&#8594; MOV Technology &amp; How SPDs Work</a></li>
              <li><a href="#ul-1449" className="hover:text-orange-400">&#8594; UL 1449 Standard &amp; NEC Requirements</a></li>
              <li><a href="#selection-guide" className="hover:text-orange-400">&#8594; Selecting the Right SPD</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="terminology" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Terminology: Surge Arrester vs SPD vs TVSS</h2>
              <p className="text-white/80 mb-4">
                The surge protection industry has undergone significant terminology changes over the years, which creates confusion for electricians in the field. Understanding the historical context and current nomenclature is essential for proper specification and installation.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-cyan-400 mb-3">Terminology Evolution</h3>
                <ul className="text-white/80 space-y-3">
                  <li>
                    <strong>Surge Arrester (traditional):</strong> Originally referred to utility-grade devices used on power distribution systems to protect against lightning strikes and switching surges. Covered by IEEE C62 standards and NEC Article 280. These are heavy-duty devices installed on the line side of the service.
                  </li>
                  <li>
                    <strong>TVSS (Transient Voltage Surge Suppressor):</strong> The term used before 2009 for devices that protected equipment inside buildings. This term was eliminated by UL in the 4th edition of UL 1449 (2009) and replaced with &quot;SPD.&quot;
                  </li>
                  <li>
                    <strong>SPD (Surge Protective Device):</strong> The current official term per UL 1449 (4th edition and later) and the NEC. SPDs replaced the TVSS designation and are now categorized as Type 1, 2, 3, or 4. NEC Article 242 covers SPD requirements.
                  </li>
                </ul>
              </div>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Why the Change from TVSS to SPD?</h4>
                <p className="text-white/70">
                  The 2009 UL 1449 revision unified surge protection terminology and tightened safety requirements. Under the old system, TVSS devices were not required to have an internal disconnect, leading to fire hazards when MOV components failed. The SPD classification introduced mandatory fail-safe disconnect mechanisms and standardized testing across all device types.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Article References</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Article 242:</strong> Surge Protective Devices (SPDs) - Type 1, 2, 3, and 4</li>
                <li><strong>Article 280:</strong> Surge Arresters over 1000V (utility-grade devices)</li>
                <li><strong>Article 285:</strong> Removed in 2020 NEC - content moved to Article 242</li>
              </ul>
            </section>

            <section id="device-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Type 1, 2, 3 &amp; 4 Device Classifications</h2>
              <p className="text-white/80 mb-4">
                SPDs are classified into four types based on their installation location relative to the service entrance. Each type has different surge current ratings, voltage protection levels, and application requirements.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Installation Location</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical kA Rating</th>
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-purple-400">Type 1</td>
                      <td className="py-3 px-4">Line side of service (before main disconnect)</td>
                      <td className="py-3 px-4">100-200+ kA</td>
                      <td className="py-3 px-4">Service entrance, utility meter base</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Type 2</td>
                      <td className="py-3 px-4">Load side of service (at panel)</td>
                      <td className="py-3 px-4">50-200 kA</td>
                      <td className="py-3 px-4">Main panel, subpanels, distribution boards</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Type 3</td>
                      <td className="py-3 px-4">Point of utilization (30+ ft from panel)</td>
                      <td className="py-3 px-4">10-20 kA</td>
                      <td className="py-3 px-4">Receptacle strips, UPS units, plug-in devices</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-amber-400">Type 4</td>
                      <td className="py-3 px-4">Component level</td>
                      <td className="py-3 px-4">Varies</td>
                      <td className="py-3 px-4">Inside equipment, on circuit boards</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Type 2 SPDs: The Most Common Installation</h3>
                <p className="text-white/70 mb-3">
                  Type 2 SPDs installed at the main service panel are the most common surge protection installation for electricians. Key requirements:
                </p>
                <ul className="text-white/70 space-y-2">
                  <li><strong>Connected on load side</strong> of the service overcurrent device</li>
                  <li><strong>Maximum conductor length:</strong> Keep leads as short as possible (under 6 inches ideal)</li>
                  <li><strong>Overcurrent protection:</strong> Required per manufacturer instructions (typically 20-40A breaker)</li>
                  <li><strong>Listed to UL 1449:</strong> Must be listed as Type 2 SPD</li>
                  <li><strong>NEC 2020:</strong> Required for all new dwelling unit services per 230.67</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Type 1 vs Type 2: When to Use Each</h3>
              <p className="text-white/80 mb-4">
                Type 1 devices are installed on the line side of the main overcurrent device and can withstand direct lightning surges. They are commonly used on:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li>Utility meter bases and CT cabinets</li>
                <li>Commercial service entrances exposed to frequent lightning</li>
                <li>Industrial facilities with high surge exposure</li>
                <li>Applications where the utility requires line-side protection</li>
              </ul>
              <p className="text-white/80 mb-4">
                Type 2 devices are the standard choice for panel-level protection in residential and commercial buildings. They provide excellent protection for equipment downstream of the panel.
              </p>
            </section>

            <section id="voltage-protection" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Voltage Protection Ratings (VPR)</h2>
              <p className="text-white/80 mb-4">
                The Voltage Protection Rating (VPR) is the most critical performance specification for an SPD. It indicates the maximum voltage that the SPD will allow to pass through to connected equipment during a surge event.
              </p>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-purple-400 mb-3">Understanding VPR</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Lower VPR = Better protection</strong> for sensitive electronics</li>
                  <li><strong>Measured in volts:</strong> Common ratings are 600V, 700V, 800V, 1000V, 1200V, 1800V</li>
                  <li><strong>Tested per UL 1449:</strong> Using a standardized 6kV, 3kA waveform</li>
                  <li><strong>Replaced SVR:</strong> VPR replaced the older &quot;Suppressed Voltage Rating&quot; (SVR) and clamping voltage ratings</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">VPR Selection Guide</h3>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">System Voltage</th>
                      <th className="text-left py-3 px-4 text-white/60">Good VPR</th>
                      <th className="text-left py-3 px-4 text-white/60">Better VPR</th>
                      <th className="text-left py-3 px-4 text-white/60">Best VPR</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">120V (L-N)</td>
                      <td className="py-3 px-4">800V</td>
                      <td className="py-3 px-4 text-green-400">700V</td>
                      <td className="py-3 px-4 text-cyan-400">600V</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">240V (L-L)</td>
                      <td className="py-3 px-4">1200V</td>
                      <td className="py-3 px-4 text-green-400">1000V</td>
                      <td className="py-3 px-4 text-cyan-400">800V</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">277V (L-N)</td>
                      <td className="py-3 px-4">1200V</td>
                      <td className="py-3 px-4 text-green-400">1000V</td>
                      <td className="py-3 px-4 text-cyan-400">800V</td>
                    </tr>
                  </tbody>
                </table>
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

            <section id="ka-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Surge Current (kA) Ratings</h2>
              <p className="text-white/80 mb-4">
                The kA (kiloampere) surge current rating indicates how much surge current the SPD can safely divert without failing. Higher kA ratings mean the device can handle larger surges and survive more surge events over its lifetime.
              </p>

              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Surge Current Rating Guide</h4>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Residential service:</strong> Minimum 50 kA per mode recommended</li>
                  <li><strong>Commercial panel:</strong> 100-200 kA per mode recommended</li>
                  <li><strong>Industrial/critical:</strong> 200+ kA per mode for maximum protection</li>
                  <li><strong>Point-of-use (Type 3):</strong> 10-20 kA typical for plug-in devices</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Per Mode vs Total Rating</h3>
              <p className="text-white/80 mb-4">
                Pay attention to whether a manufacturer specifies their kA rating &quot;per mode&quot; or &quot;total&quot; - this distinction dramatically affects the actual protection level:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Per mode:</strong> Rating for each protection pathway (L-N, L-G, N-G). A device rated 50 kA per mode provides 50 kA on each path independently</li>
                <li><strong>Total (or combined):</strong> Sum of all modes. A &quot;200 kA total&quot; device might only provide 50 kA per mode across 4 modes</li>
                <li><strong>Always compare per-mode ratings</strong> for an apples-to-apples comparison between manufacturers</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">Marketing vs Reality</h4>
                <p className="text-white/70">
                  Some manufacturers advertise impressive total kA ratings (like &quot;200 kA&quot;) that sound much better than they are. A &quot;200 kA total&quot; device with 4 modes actually provides only 50 kA per mode. Compare the per-mode (or &quot;per phase&quot;) surge current rating when evaluating SPDs. The per-mode rating is what actually matters for protection.
                </p>
              </div>
            </section>

            <section id="mov-technology" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">MOV Technology &amp; How SPDs Work</h2>
              <p className="text-white/80 mb-4">
                Most SPDs use Metal Oxide Varistors (MOVs) as their primary surge-diverting component. Understanding how MOVs work helps you select, install, and troubleshoot surge protection devices.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">How MOVs Operate</h3>
              <p className="text-white/80 mb-4">
                An MOV is a voltage-dependent, nonlinear resistor made from zinc oxide and other metal oxides:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Normal operation:</strong> The MOV acts as an open circuit - very high resistance, negligible current flows through it</li>
                <li><strong>During a surge:</strong> When voltage exceeds the clamping level, MOV resistance drops dramatically, diverting surge current to ground</li>
                <li><strong>After the surge:</strong> MOV returns to high-resistance state within nanoseconds</li>
                <li><strong>Degradation:</strong> Each surge event slightly degrades the MOV material. Over time, the clamping voltage may increase or the device may fail</li>
              </ul>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h3 className="font-semibold text-green-400 mb-3">Other SPD Technologies</h3>
                <ul className="text-white/80 space-y-2">
                  <li><strong>Silicon Avalanche Diode (SAD):</strong> Faster response than MOVs, used in sensitive electronics protection. More expensive, lower energy handling</li>
                  <li><strong>Gas Discharge Tube (GDT):</strong> Handles very high surge currents but slower to respond. Often used in telecom and line-side applications</li>
                  <li><strong>Hybrid designs:</strong> Combine MOVs with SADs or GDTs for the best of both technologies - fast response and high energy handling</li>
                  <li><strong>Thyristor-based:</strong> Used in industrial applications for high-energy surge diversion with crowbar-type clamping</li>
                </ul>
              </div>

              <div className="bg-purple-900/30 border border-purple-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-2">MOV Failure Modes</h4>
                <p className="text-white/70">
                  MOVs can fail in two ways: open circuit (safe failure, no more protection) or short circuit (dangerous, can cause fire). Modern UL 1449-listed SPDs are required to have thermal disconnect mechanisms that safely remove a degraded MOV from the circuit before it can overheat. This is why using listed devices is critical - unlisted power strips with MOVs may lack this safety feature.
                </p>
              </div>
            </section>

            <section id="ul-1449" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">UL 1449 Standard &amp; NEC Requirements</h2>
              <p className="text-white/80 mb-4">
                UL 1449 is the safety standard for Surge Protective Devices. Understanding this standard and the related NEC requirements is essential for proper specification and installation.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">UL 1449 Key Requirements</h3>
              <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li><strong>Type designation:</strong> All SPDs must be classified as Type 1, 2, 3, or 4</li>
                  <li><strong>VPR testing:</strong> Standardized voltage protection rating test using 6kV/3kA combination waveform</li>
                  <li><strong>Nominal discharge current:</strong> Tested at 20kA 8/20 microsecond waveform</li>
                  <li><strong>Short circuit current rating (SCCR):</strong> Must be marked and appropriate for installation location</li>
                  <li><strong>Thermal disconnect:</strong> Required internal disconnect to prevent fire from failed components</li>
                  <li><strong>Status indicator:</strong> Must indicate when protection is no longer functioning</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">NEC Article 242 Requirements</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>242.6:</strong> SPDs must be listed to UL 1449</li>
                <li><strong>242.8:</strong> Type 1 SPDs can be installed on either side of service disconnect</li>
                <li><strong>242.10:</strong> Type 2 SPDs must be installed on load side of overcurrent protection</li>
                <li><strong>242.12:</strong> Type 3 SPDs must be installed at minimum 30 feet of conductor from the panel</li>
                <li><strong>242.24:</strong> SPD conductor length shall be kept as short as practicable</li>
                <li><strong>230.67 (2020 NEC):</strong> All dwelling unit services must have a surge protective device installed</li>
              </ul>

              <div className="bg-orange-900/30 border border-orange-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-2">NEC 2020: SPDs Now Required for Homes</h4>
                <p className="text-white/70">
                  Beginning with the 2020 NEC, Section 230.67 requires a Type 1 or Type 2 SPD at all new dwelling unit electrical services. This is a significant change that makes whole-house surge protection mandatory rather than optional. The SPD must be an integral part of the service equipment or installed immediately adjacent to it.
                </p>
              </div>
            </section>

            <section id="selection-guide" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Selecting the Right SPD</h2>
              <p className="text-white/80 mb-4">
                Choosing the correct SPD for an installation depends on the application, voltage system, available fault current, and level of protection required.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Selection Checklist</h3>
              <div className="bg-white/5 rounded-xl p-6 my-6">
                <ul className="text-white/80 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Determine SPD Type needed (1, 2, 3, or 4) based on installation location
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Verify system voltage matches SPD voltage rating (120/240V, 208Y/120V, 480Y/277V)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Select appropriate kA per-mode surge current rating for the application
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Choose the lowest VPR available within budget for sensitive equipment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Verify SCCR is adequate for available fault current at installation point
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Confirm UL 1449 listing for the correct Type designation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Plan for shortest possible conductor length between SPD and panel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">&#10003;</span>
                    Include status indication (LED, audible alarm, or dry contact for monitoring)
                  </li>
                </ul>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-2">Layered Protection Strategy</h4>
                <p className="text-white/70">
                  The best surge protection uses a layered (cascaded) approach: a Type 1 or Type 2 device at the main service panel handles the bulk of the surge energy, while Type 3 devices at sensitive equipment provide fine-tuned clamping. This combination provides the lowest let-through voltage to protected equipment and extends the life of both devices.
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
                <Link href="/blog/whole-house-surge-protection-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Whole House Surge Protection NEC</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting</h3>
                </Link>
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/electrical-grounding-vs-bonding" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Grounding vs Bonding</h3>
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
