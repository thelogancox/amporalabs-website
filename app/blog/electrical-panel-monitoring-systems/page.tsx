import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Panel Monitoring Systems: Real-Time Load Monitoring Guide",
  description: "Complete guide to electrical panel monitoring systems for real-time load monitoring. Compare Sense, Emporia Vue, IoTaWatt, Leviton, and Span smart panels. Learn how CT clamp monitors work, circuit-level vs whole-home energy monitoring, smart home integration, solar monitoring capabilities, and installation requirements for electricians.",
  keywords: [
    "electrical panel monitoring",
    "home energy monitor",
    "Sense energy monitor",
    "Emporia Vue",
    "CT clamp monitor",
    "circuit level monitoring",
    "real time energy monitoring",
    "whole home energy monitor",
    "electrical load monitoring",
    "smart panel monitoring"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-panel-monitoring-systems",
  },
  openGraph: {
    title: "Electrical Panel Monitoring Systems: Real-Time Load Monitoring Guide - Ampora",
    description: "Compare top electrical panel monitoring systems including Sense, Emporia Vue, IoTaWatt, Leviton, and Span. Learn CT clamp installation, circuit-level monitoring, and smart home integration.",
    url: "https://amporalabs.com/blog/electrical-panel-monitoring-systems",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Electrical panel monitoring system with CT clamps and real-time dashboard">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Electrical Panel */}
      <rect x="25" y="20" width="130" height="150" rx="3" fill="#111827" stroke="#6b7280" strokeWidth="1.5"/>
      <rect x="30" y="25" width="120" height="140" rx="2" fill="#1f2937" stroke="#4b5563" strokeWidth="1"/>

      {/* Panel label */}
      <text x="90" y="38" textAnchor="middle" fill="#9ca3af" fontSize="6" fontWeight="bold">MAIN PANEL 200A</text>

      {/* Main breaker */}
      <rect x="60" y="42" width="60" height="12" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="0.5"/>
      <text x="90" y="51" textAnchor="middle" fill="#22d3ee" fontSize="5" fontWeight="bold">MAIN 200A</text>

      {/* Circuit breakers - left column */}
      <rect x="38" y="60" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="38" y="72" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="38" y="84" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="38" y="96" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="38" y="108" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="38" y="120" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>

      {/* Circuit breakers - right column */}
      <rect x="96" y="60" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="96" y="72" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="96" y="84" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="96" y="96" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="96" y="108" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>
      <rect x="96" y="120" width="46" height="8" rx="1" fill="#374151" stroke="#4b5563" strokeWidth="0.5"/>

      {/* CT Clamps on wires (toroidal shape) */}
      <ellipse cx="90" cy="140" rx="14" ry="6" fill="none" stroke="#22d3ee" strokeWidth="2"/>
      <ellipse cx="90" cy="140" rx="10" ry="4" fill="#1f2937" stroke="#22d3ee" strokeWidth="1"/>
      <text x="90" y="142" textAnchor="middle" fill="#22d3ee" fontSize="4" fontWeight="bold">CT</text>

      {/* Small CTs on individual circuits */}
      <ellipse cx="36" y="64" rx="4" ry="3" fill="none" stroke="#a78bfa" strokeWidth="1"/>
      <ellipse cx="36" y="76" rx="4" ry="3" fill="none" stroke="#a78bfa" strokeWidth="1"/>
      <ellipse cx="36" y="88" rx="4" ry="3" fill="none" stroke="#a78bfa" strokeWidth="1"/>

      {/* Wire from CT to monitoring unit */}
      <line x1="104" y1="140" x2="160" y2="140" stroke="#22d3ee" strokeWidth="1" strokeDasharray="3,2"/>

      {/* Monitoring Unit */}
      <rect x="160" y="125" width="40" height="30" rx="4" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5"/>
      <circle cx="180" cy="135" r="4" fill="#22d3ee" fillOpacity="0.3" stroke="#22d3ee" strokeWidth="0.5"/>
      <circle cx="180" cy="135" r="1.5" fill="#22d3ee"/>
      <text x="180" y="150" textAnchor="middle" fill="#9ca3af" fontSize="4">MONITOR</text>

      {/* WiFi signal from monitor */}
      <path d="M195 130 Q200 120 205 130" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.5"/>
      <path d="M193 128 Q200 114 207 128" fill="none" stroke="#22d3ee" strokeWidth="0.8" opacity="0.3"/>

      {/* Dashboard Display */}
      <rect x="220" y="20" width="155" height="145" rx="6" fill="#0f172a" stroke="#374151" strokeWidth="1.5"/>
      <rect x="225" y="28" width="145" height="12" rx="2" fill="#1e293b"/>
      <text x="297" y="37" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold">ENERGY DASHBOARD</text>

      {/* Real-time power reading */}
      <text x="235" y="52" fill="#9ca3af" fontSize="5">Current Usage</text>
      <text x="235" y="62" fill="#22d3ee" fontSize="12" fontWeight="bold" fontFamily="monospace">4,287 W</text>

      {/* Mini bar chart for circuits */}
      <text x="235" y="78" fill="#9ca3af" fontSize="4.5">Circuit Breakdown</text>
      <rect x="235" y="82" width="60" height="5" rx="1" fill="#22d3ee" fillOpacity="0.3"/>
      <rect x="235" y="82" width="42" height="5" rx="1" fill="#22d3ee"/>
      <text x="300" y="86" fill="#9ca3af" fontSize="4">HVAC 1,800W</text>

      <rect x="235" y="90" width="60" height="5" rx="1" fill="#a78bfa" fillOpacity="0.3"/>
      <rect x="235" y="90" width="28" height="5" rx="1" fill="#a78bfa"/>
      <text x="300" y="94" fill="#9ca3af" fontSize="4">Kitchen 1,200W</text>

      <rect x="235" y="98" width="60" height="5" rx="1" fill="#34d399" fillOpacity="0.3"/>
      <rect x="235" y="98" width="15" height="5" rx="1" fill="#34d399"/>
      <text x="300" y="102" fill="#9ca3af" fontSize="4">EV Charger 640W</text>

      <rect x="235" y="106" width="60" height="5" rx="1" fill="#fbbf24" fillOpacity="0.3"/>
      <rect x="235" y="106" width="10" height="5" rx="1" fill="#fbbf24"/>
      <text x="300" y="110" fill="#9ca3af" fontSize="4">Lighting 420W</text>

      {/* Solar production indicator */}
      <rect x="225" y="118" width="145" height="22" rx="3" fill="#166534" fillOpacity="0.3" stroke="#22c55e" strokeWidth="0.5"/>
      <circle cx="238" cy="129" r="6" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="238" y1="122" x2="238" y2="121" stroke="#fbbf24" strokeWidth="0.8"/>
      <line x1="244" y1="129" x2="245" y2="129" stroke="#fbbf24" strokeWidth="0.8"/>
      <line x1="232" y1="129" x2="231" y2="129" stroke="#fbbf24" strokeWidth="0.8"/>
      <line x1="242" y1="125" x2="243" y2="124" stroke="#fbbf24" strokeWidth="0.8"/>
      <line x1="234" y1="125" x2="233" y2="124" stroke="#fbbf24" strokeWidth="0.8"/>
      <text x="252" y="127" fill="#22c55e" fontSize="5" fontWeight="bold">Solar: +3,200W</text>
      <text x="252" y="135" fill="#9ca3af" fontSize="4">Net: -1,087W (exporting)</text>

      {/* Monthly cost */}
      <rect x="225" y="144" width="70" height="18" rx="3" fill="#1e293b"/>
      <text x="260" y="153" textAnchor="middle" fill="#9ca3af" fontSize="4">This Month</text>
      <text x="260" y="160" textAnchor="middle" fill="#22d3ee" fontSize="6" fontWeight="bold" fontFamily="monospace">$127.40</text>

      {/* Alerts */}
      <rect x="300" y="144" width="70" height="18" rx="3" fill="#7f1d1d" fillOpacity="0.4" stroke="#ef4444" strokeWidth="0.5"/>
      <text x="335" y="153" textAnchor="middle" fill="#ef4444" fontSize="4">Alert</text>
      <text x="335" y="160" textAnchor="middle" fill="#fca5a5" fontSize="4">Dryer: 6,200W peak</text>
    </svg>
  );
}

export default function ElectricalPanelMonitoringSystemsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Panel Monitoring Systems", url: "https://amporalabs.com/blog/electrical-panel-monitoring-systems" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Panel Monitoring Systems: Real-Time Load Monitoring Guide"
          description="Complete guide to electrical panel monitoring systems covering CT clamps, Sense, Emporia Vue, IoTaWatt, Leviton, Span, circuit-level monitoring, smart home integration, and solar monitoring."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/electrical-panel-monitoring-systems"
          wordCount={5800}
          keywords={["electrical panel monitoring", "home energy monitor", "Sense energy monitor", "Emporia Vue", "CT clamp monitor"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Panel Monitoring Systems</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-cyan-600/20 text-cyan-300 text-sm font-medium rounded-full">
                Technology
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Panel Monitoring: Real-Time Load Monitoring Systems
            </h1>
            <p className="text-xl text-white/70">
              Electrical panel monitoring systems give homeowners and electricians unprecedented visibility into energy consumption at the circuit level. This guide covers how CT clamp monitors work, compares the top systems (Sense, Emporia Vue, IoTaWatt, Leviton, and Span), explains installation requirements, and shows how electricians can turn panel monitoring into a profitable service offering.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-is-panel-monitoring" className="hover:text-purple-400">What Is Electrical Panel Monitoring?</a></li>
              <li><a href="#how-ct-clamps-work" className="hover:text-purple-400">How CT Clamps Work</a></li>
              <li><a href="#whole-home-vs-circuit-level" className="hover:text-purple-400">Whole-Home vs Circuit-Level Monitoring</a></li>
              <li><a href="#top-monitoring-systems" className="hover:text-purple-400">Top Panel Monitoring Systems Compared</a></li>
              <li><a href="#installation-requirements" className="hover:text-purple-400">Installation Requirements</a></li>
              <li><a href="#smart-home-integration" className="hover:text-purple-400">Smart Home Integration</a></li>
              <li><a href="#solar-monitoring" className="hover:text-purple-400">Solar Monitoring Capabilities</a></li>
              <li><a href="#data-analytics" className="hover:text-purple-400">Data and Analytics Features</a></li>
              <li><a href="#electrician-revenue" className="hover:text-purple-400">Revenue Opportunity for Electricians</a></li>
              <li><a href="#cost-comparison" className="hover:text-purple-400">Cost Comparison</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-is-panel-monitoring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Is Electrical Panel Monitoring?</h2>
              <p className="text-white/80 mb-4">
                <strong>Electrical panel monitoring</strong> is a technology that provides real-time visibility into the energy consumption of a home or building by measuring current flow at the electrical panel. These systems use sensors &mdash; typically current transformers (CTs) &mdash; clamped around conductors inside the panel to measure how much power each circuit or the entire service is drawing at any given moment.
              </p>
              <p className="text-white/80 mb-4">
                The data is transmitted wirelessly to a cloud platform or local hub, where homeowners and electricians can view <strong>real-time power usage</strong>, historical consumption trends, cost projections, and alerts for abnormal activity. Modern panel monitoring systems have evolved from simple whole-home meters into sophisticated circuit-level analytics platforms that can identify individual appliances, detect electrical faults, and integrate with smart home ecosystems.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Benefits for Homeowners</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Energy awareness:</strong> See exactly where electricity is being consumed</li>
                    <li><strong>Cost reduction:</strong> Typical savings of 10-15% on electricity bills</li>
                    <li><strong>Appliance detection:</strong> Identify energy hogs and phantom loads</li>
                    <li><strong>Safety alerts:</strong> Notifications for unusual electrical activity</li>
                    <li><strong>Solar optimization:</strong> Track production vs consumption in real time</li>
                  </ul>
                </div>
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Benefits for Electricians</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Diagnostic tool:</strong> Identify overloaded circuits and imbalanced loads</li>
                    <li><strong>Service upsell:</strong> High-margin installation and setup service</li>
                    <li><strong>Load studies:</strong> Accurate data for <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300 underline">load calculations</Link> and panel upgrades</li>
                    <li><strong>Recurring revenue:</strong> Ongoing monitoring and maintenance contracts</li>
                    <li><strong>EV readiness:</strong> Verify panel capacity before charger installation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Panel Monitoring by the Numbers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-cyan-400">$300B+</p>
                    <p className="text-white/60 text-sm">U.S. residential electricity spending per year</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-400">10-15%</p>
                    <p className="text-white/60 text-sm">Average savings from energy monitoring</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-400">42%</p>
                    <p className="text-white/60 text-sm">Of homeowners unaware of their biggest energy loads</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">2-3 yr</p>
                    <p className="text-white/60 text-sm">Typical payback period for monitoring systems</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="how-ct-clamps-work" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">How CT Clamps Work</h2>
              <p className="text-white/80 mb-4">
                A <strong>current transformer (CT)</strong> is the core sensor behind virtually every panel monitoring system. Understanding how CTs work is essential for proper installation and troubleshooting. CTs are passive devices that measure alternating current (AC) flowing through a conductor without requiring a direct electrical connection to the circuit.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Operating Principle</h3>
              <p className="text-white/80 mb-4">
                A CT works on the principle of <strong>electromagnetic induction</strong>. When AC current flows through a conductor (the primary winding), it creates a magnetic field around the conductor. A CT&apos;s toroidal (doughnut-shaped) core wraps around the conductor, and a secondary winding on the core produces a proportional current or voltage output that the monitoring device can measure.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">CT Clamp Types Used in Panel Monitoring</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full mt-0.5">1</span>
                    <div>
                      <p className="font-semibold text-cyan-400">Split-Core CTs (Most Common)</p>
                      <p className="text-white/60 text-sm">The core hinges open like a clamp, allowing installation around a conductor without disconnecting it. Used by Sense, Emporia Vue, and most add-on monitoring systems. Easier to install but slightly less accurate than solid-core CTs. Typical accuracy: &plusmn;1-2%.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full mt-0.5">2</span>
                    <div>
                      <p className="font-semibold text-purple-400">Solid-Core CTs</p>
                      <p className="text-white/60 text-sm">One-piece toroidal ring that the conductor must be threaded through during installation. More accurate (&plusmn;0.5-1%) and typically used in permanent metering installations. Requires disconnecting the conductor for installation &mdash; a task that must be performed by a licensed electrician.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full mt-0.5">3</span>
                    <div>
                      <p className="font-semibold text-green-400">Rogowski Coils</p>
                      <p className="text-white/60 text-sm">Flexible coils that wrap around conductors of any size. Used in some commercial monitoring systems and IoTaWatt configurations. Easier to fit in tight spaces and around large conductors but require signal integration electronics.</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">CT Sizing and Selection</h3>
              <p className="text-white/80 mb-4">
                The CT must be properly sized for the conductor and expected current range. An undersized CT can saturate and produce inaccurate readings, while an oversized CT reduces measurement resolution at low loads.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Application</th>
                      <th className="text-left py-3 px-4 text-white/60">CT Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Typical Conductor</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Individual 15-20A branch circuit</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">50A CT</td>
                      <td className="py-3 px-4">14 AWG - 12 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">30-50A appliance circuit</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">100A CT</td>
                      <td className="py-3 px-4">10 AWG - 6 AWG</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">100A sub-panel or sub-feed</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">100A CT</td>
                      <td className="py-3 px-4">3 AWG - 1 AWG</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">200A main service</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">200A CT</td>
                      <td className="py-3 px-4">2/0 AWG - 4/0 AWG</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Installation Best Practices for CTs</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Direction matters:</strong> CTs are directional. An arrow on the CT indicates the current flow direction (toward the load). Installing backward produces negative readings.</li>
                  <li><strong>One conductor only:</strong> Each CT must clamp around a single conductor. Clamping around a cable with both hot and neutral will result in near-zero readings as the magnetic fields cancel.</li>
                  <li><strong>Secure placement:</strong> CTs must be fully closed and snapped shut. A gap in a split-core CT introduces significant measurement error.</li>
                  <li><strong>Keep CTs away from high-current conductors:</strong> Adjacent high-current conductors can induce false readings through magnetic coupling.</li>
                  <li><strong>Temperature rating:</strong> Most CTs are rated for 60-85&deg;C. Ensure the ambient panel temperature stays within the CT&apos;s rated range.</li>
                </ul>
              </div>
            </section>

            <section id="whole-home-vs-circuit-level" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Whole-Home vs Circuit-Level Monitoring</h2>
              <p className="text-white/80 mb-4">
                Panel monitoring systems fall into two primary categories based on the granularity of data they provide. Understanding the difference is key to recommending the right solution for each customer.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">Whole-Home Monitoring</h3>
                  <p className="text-white/70 text-sm mb-3">CTs on the main service conductors only</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Simple 2-CT installation on mains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Lower cost ($100-$300)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Total consumption and solar production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Some use ML to disaggregate individual loads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Cannot directly measure individual circuits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Disaggregation not 100% accurate</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Circuit-Level Monitoring</h3>
                  <p className="text-white/70 text-sm mb-3">Individual CTs on each branch circuit</p>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Exact per-circuit measurements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Accurate load balancing data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Ideal for <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300 underline">panel troubleshooting</Link></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Better for solar self-consumption optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>More complex installation (16-42+ CTs)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Higher cost ($300-$500+)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Many electricians recommend <strong>circuit-level monitoring</strong> for customers who want actionable data for energy management, load balancing, or as part of an <Link href="/blog/energy-management-systems-electrical" className="text-cyan-400 hover:text-cyan-300 underline">energy management system</Link>. Whole-home systems like Sense are better suited for homeowners who want general awareness and appliance detection without the complexity of per-circuit CTs.
              </p>
            </section>

            <section id="top-monitoring-systems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Top Panel Monitoring Systems Compared</h2>
              <p className="text-white/80 mb-4">
                The panel monitoring market has matured significantly, with options ranging from DIY-friendly add-on monitors to full smart panel replacements. Here is an in-depth look at the leading systems available today.
              </p>

              <div className="space-y-6 my-6">
                {/* Sense */}
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-cyan-400">Sense Energy Monitor</h3>
                    <span className="text-white/40 text-sm font-mono">~$300</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    Sense is the most popular <strong>whole-home energy monitor</strong> that uses machine learning to identify individual appliances from their electrical signatures on the mains. It installs with two CTs on the main service conductors and connects to Wi-Fi for cloud analytics.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">STRENGTHS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Excellent device detection via ML algorithms</li>
                        <li>Clean, intuitive mobile app interface</li>
                        <li>Real-time power meter with 1-second updates</li>
                        <li>Solar monitoring variant available (Sense Solar)</li>
                        <li>Integrates with Alexa, Google Home, IFTTT</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">LIMITATIONS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Device detection takes weeks/months to learn</li>
                        <li>Cannot detect all devices (resistive loads are harder)</li>
                        <li>No per-circuit physical measurement</li>
                        <li>Requires strong Wi-Fi at the panel location</li>
                        <li>Cloud-dependent &mdash; no local-only option</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3">Best for: Homeowners wanting appliance-level insights without per-circuit CTs. Good entry point for energy awareness.</p>
                </div>

                {/* Emporia Vue */}
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-green-400">Emporia Vue</h3>
                    <span className="text-white/40 text-sm font-mono">~$150-$250</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    The Emporia Vue is the most popular <strong>circuit-level monitoring system</strong> for residential use. The Vue Gen 3 supports up to 16 circuits with included 50A CTs, plus two 200A CTs for the mains. Expansion modules allow monitoring of up to 48 circuits.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">STRENGTHS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Best value for circuit-level monitoring</li>
                        <li>16 circuits included, expandable to 48</li>
                        <li>Per-circuit real-time data (1-second updates)</li>
                        <li>Supports solar CT monitoring</li>
                        <li>Free app with historical data and budgets</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">LIMITATIONS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>CTs are smaller &mdash; tight fit in full panels</li>
                        <li>Cloud-dependent for data access</li>
                        <li>50A CTs may not cover all circuit sizes</li>
                        <li>Wi-Fi connectivity required at panel</li>
                        <li>Limited local API access</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3">Best for: Budget-conscious homeowners wanting true circuit-level data. Excellent bang for the buck.</p>
                </div>

                {/* IoTaWatt */}
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-yellow-400">IoTaWatt</h3>
                    <span className="text-white/40 text-sm font-mono">~$130 + CTs</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    IoTaWatt is an <strong>open-source, local-first</strong> energy monitoring system that appeals to technically savvy users and electricians who want full data ownership. It supports up to 14 CT inputs per unit and stores data locally, with optional cloud upload to services like Emoncms or InfluxDB.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">STRENGTHS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Fully local operation &mdash; no cloud required</li>
                        <li>Open-source firmware and documentation</li>
                        <li>True power measurement (voltage x current)</li>
                        <li>Accepts any standard CT (flexible sizing)</li>
                        <li>Exports to InfluxDB, Emoncms, PVOutput</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">LIMITATIONS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Requires separate CT purchases</li>
                        <li>No polished consumer mobile app</li>
                        <li>Setup requires technical knowledge</li>
                        <li>Web-based interface only (local network)</li>
                        <li>No ML-based device disaggregation</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3">Best for: Technical users, electricians doing load studies, and anyone who wants local data ownership and open-source flexibility.</p>
                </div>

                {/* Leviton */}
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-blue-400">Leviton Smart Load Center</h3>
                    <span className="text-white/40 text-sm font-mono">~$2,000-$4,000+</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    The Leviton Smart Load Center is a <strong>complete panel replacement</strong> with built-in energy monitoring on every circuit, plus smart breakers that can be remotely controlled. It targets new construction and panel upgrade projects where the homeowner wants monitoring and control integrated directly into the panel hardware.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">STRENGTHS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Built-in monitoring on every circuit &mdash; no CTs</li>
                        <li>Remote breaker control via app</li>
                        <li>UL listed as a standard load center</li>
                        <li>Clean installation with no aftermarket sensors</li>
                        <li>Works with standard Leviton breakers</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">LIMITATIONS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Full panel replacement required</li>
                        <li>Significantly higher cost</li>
                        <li>Limited to Leviton ecosystem</li>
                        <li>Newer product with smaller community</li>
                        <li>Smart breakers add cost per circuit</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3">Best for: New construction or full panel upgrades where the customer wants integrated monitoring and control without aftermarket add-ons.</p>
                </div>

                {/* Span */}
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-display font-semibold text-orange-400">Span Smart Panel</h3>
                    <span className="text-white/40 text-sm font-mono">~$4,000-$6,000+</span>
                  </div>
                  <p className="text-white/70 text-sm mb-3">
                    The <strong>Span Smart Panel</strong> is the premium option in the residential panel monitoring space. It replaces the entire load center with a connected panel that provides per-circuit monitoring, per-circuit remote control, and deep integration with solar, battery, and EV charging systems. Span is popular in the solar and home electrification market.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">STRENGTHS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Per-circuit monitoring and remote on/off control</li>
                        <li>Automatic load shedding for battery/solar optimization</li>
                        <li>Elegant hardware design and app experience</li>
                        <li>Backup priority management during outages</li>
                        <li>Deep integration with Tesla, Enphase, SolarEdge</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-semibold mb-1">LIMITATIONS</p>
                      <ul className="text-white/60 text-sm space-y-1">
                        <li>Highest cost option (panel + installation)</li>
                        <li>Full panel replacement required</li>
                        <li>Requires Span-certified installer</li>
                        <li>Proprietary ecosystem</li>
                        <li>32-circuit maximum per panel</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-white/50 text-xs mt-3">Best for: Solar + battery homeowners, home electrification projects, and customers willing to invest in premium whole-home energy management.</p>
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

            <section id="installation-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Installation Requirements</h2>
              <p className="text-white/80 mb-4">
                While some panel monitoring systems are marketed as DIY-installable, working inside an electrical panel involves exposure to <strong>live conductors at full service voltage</strong>. Most manufacturers recommend professional installation, and in many jurisdictions, work inside the panel requires a licensed electrician.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">General Installation Steps (Add-On CT Systems)</h3>
              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Turn Off Main Breaker (if possible)</p>
                    <p className="text-white/60 text-sm">While the service entrance conductors remain energized, turning off the main breaker de-energizes all branch circuits. Note: the main lugs and service entrance conductors are always live even with the main breaker off.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Install Main CTs on Service Conductors</p>
                    <p className="text-white/60 text-sm">Clamp the 200A CTs around each of the two main hot conductors (L1 and L2). Ensure CTs are oriented with the arrow pointing toward the load (into the panel). These conductors are always energized &mdash; exercise extreme caution.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Install Branch Circuit CTs (Circuit-Level Systems)</p>
                    <p className="text-white/60 text-sm">Clamp individual CTs around each branch circuit hot conductor. Each CT monitors one circuit. For 240V circuits (dryer, range, EV charger), typically only one hot leg needs a CT, though monitoring both provides more accurate power readings.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Mount the Monitoring Unit</p>
                    <p className="text-white/60 text-sm">Secure the monitoring device inside or adjacent to the panel. Some units mount inside the panel cover; others mount on the wall nearby. Route CT wires neatly and connect to the monitoring unit&apos;s input channels.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Power the Monitor and Connect Wi-Fi</p>
                    <p className="text-white/60 text-sm">Most monitors power from a dedicated 120V breaker (typically 15A or 20A) or a built-in USB/transformer connection. Connect the unit to the home Wi-Fi network and complete the mobile app setup.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">6</span>
                  <div>
                    <p className="font-semibold text-white">Verify and Calibrate</p>
                    <p className="text-white/60 text-sm">Turn the main breaker back on. Turn on known loads and verify the monitor reads the expected wattage. Check that CT orientation is correct (positive readings when loads are on). Label each circuit channel in the app.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 my-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">&#9888;</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2 text-red-400">Safety Warning</h3>
                    <p className="text-white/80 text-sm">
                      The service entrance conductors inside an electrical panel are <strong>always energized</strong> at full voltage (240V) even when the main breaker is off. Contact with these conductors can cause electrocution and death. Only qualified electricians should work inside electrical panels. Follow all NFPA 70E safety procedures and use appropriate PPE.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Panel Space Considerations</h3>
              <p className="text-white/80 mb-4">
                One of the most common installation challenges is fitting CTs inside a panel that is already full of conductors. In a packed 200A panel with 40+ circuits, there may not be enough physical space for 16-42 individual CT clamps on the conductors. Strategies for tight panels include:
              </p>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Mini CTs:</strong> Emporia and others offer smaller-diameter CTs designed to fit in tight panel spaces</li>
                <li><strong>Staggered placement:</strong> Install CTs at different heights along the conductor run to avoid clumping</li>
                <li><strong>Wire management:</strong> Carefully re-route conductors to create space (requires electrician)</li>
                <li><strong>Prioritize circuits:</strong> Monitor only the highest-consuming circuits instead of every circuit</li>
                <li><strong>Consider panel upgrade:</strong> If the panel is full, a larger panel or sub-panel may be warranted regardless</li>
              </ul>
            </section>

            <section id="smart-home-integration" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Smart Home Integration</h2>
              <p className="text-white/80 mb-4">
                Panel monitoring systems become significantly more powerful when integrated into a broader smart home ecosystem. Energy data can trigger automations, inform HVAC scheduling, and optimize when high-draw appliances run based on real-time rates or solar production.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">System</th>
                      <th className="text-left py-3 px-4 text-white/60">Alexa</th>
                      <th className="text-left py-3 px-4 text-white/60">Google Home</th>
                      <th className="text-left py-3 px-4 text-white/60">Home Assistant</th>
                      <th className="text-left py-3 px-4 text-white/60">Apple Home</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Sense</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003; (community)</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Emporia Vue</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003; (official)</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">IoTaWatt</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-green-400">&#10003; (native)</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">Leviton</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-orange-400">Span</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Popular Automation Examples</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Solar surplus trigger:</strong> When solar production exceeds consumption, automatically start the EV charger, water heater, or pool pump to maximize self-consumption</li>
                  <li><strong>Peak rate avoidance:</strong> On time-of-use (TOU) rate plans, receive alerts or automatically reduce loads during peak pricing periods</li>
                  <li><strong>Dryer/washer notification:</strong> Get notified when the dryer finishes its cycle based on the power draw dropping to zero</li>
                  <li><strong>HVAC optimization:</strong> Correlate HVAC runtime with energy consumption to identify efficiency problems</li>
                  <li><strong>Phantom load detection:</strong> Identify circuits with unexplained baseline consumption and track down phantom loads</li>
                </ul>
              </div>
            </section>

            <section id="solar-monitoring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Solar Monitoring Capabilities</h2>
              <p className="text-white/80 mb-4">
                Panel monitoring systems have become essential tools for solar PV homeowners. By monitoring both the solar production circuit and the overall home consumption, these systems provide a real-time view of energy generation, consumption, and net grid interaction.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h4 className="font-semibold text-green-400 mb-2">Production Monitoring</h4>
                  <p className="text-white/60 text-sm">Track real-time solar generation with dedicated CTs on the solar breaker. Compare actual production against expected output to detect panel shading, inverter issues, or degradation over time.</p>
                </div>
                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h4 className="font-semibold text-cyan-400 mb-2">Self-Consumption Tracking</h4>
                  <p className="text-white/60 text-sm">See how much solar energy is consumed on-site vs exported to the grid. Optimize appliance scheduling to maximize self-consumption, especially important in areas with reduced net metering rates.</p>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
                  <h4 className="font-semibold text-yellow-400 mb-2">Net Metering Verification</h4>
                  <p className="text-white/60 text-sm">Independently verify your utility&apos;s net metering calculations. Track net import/export to ensure billing accuracy and understand the true financial return of your solar investment.</p>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                Systems like Sense Solar and Emporia Vue include dedicated solar CT inputs that measure production independently from consumption. The Span panel integrates directly with solar inverters from Enphase, SolarEdge, and Tesla for even tighter integration and automatic load management during grid outages with battery backup.
              </p>
            </section>

            <section id="data-analytics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Data and Analytics Features</h2>
              <p className="text-white/80 mb-4">
                The real value of panel monitoring comes from the data it provides. Modern monitoring platforms offer comprehensive analytics that go far beyond simple real-time wattage readings.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Real-Time Power Monitoring</h4>
                  <p className="text-white/60 text-sm">Live wattage readings updated every 1-2 seconds for the whole home and each monitored circuit. Instantly see the impact of turning appliances on and off. Most systems display data in both watts and estimated cost.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Historical Usage Trends</h4>
                  <p className="text-white/60 text-sm">View energy consumption patterns by hour, day, week, month, or year. Identify seasonal trends, baseline consumption, and the impact of behavioral changes or efficiency upgrades. Compare month-over-month and year-over-year usage.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Cost Tracking and Budgets</h4>
                  <p className="text-white/60 text-sm">Enter your utility rate schedule (flat rate, tiered, or time-of-use) and the system calculates estimated costs in real time. Set monthly budgets and receive alerts when approaching the target. Emporia Vue and Sense both offer robust cost tracking features.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Alerts and Notifications</h4>
                  <p className="text-white/60 text-sm">Receive push notifications for unusual consumption patterns, devices left on, power outages, solar production drops, and budget thresholds. Sense is particularly strong at detecting when specific appliances turn on or off and sending contextual notifications.</p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h4 className="font-semibold text-cyan-400 mb-2">Load Profile Analysis</h4>
                  <p className="text-white/60 text-sm">Generate detailed load profiles showing peak demand, average consumption, and power factor data. This is valuable for electricians performing <Link href="/blog/residential-load-calculations" className="text-cyan-400 hover:text-cyan-300 underline">residential load calculations</Link> for panel upgrades, EV charger installations, or service upgrades.</p>
                </div>
              </div>
            </section>

            <section id="electrician-revenue" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Revenue Opportunity for Electricians</h2>
              <p className="text-white/80 mb-4">
                Panel monitoring installation is one of the highest-margin service offerings an electrician can add to their business. The growing demand for energy awareness, solar optimization, and EV readiness creates a strong market for professional monitoring installation and ongoing energy consulting.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">Revenue Streams</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Installation labor:</strong> $200-$500 per installation (1-2 hours typical)</li>
                    <li><strong>Equipment markup:</strong> 15-30% on monitoring hardware</li>
                    <li><strong>Panel upgrade add-on:</strong> Bundle monitoring with 200A service upgrades</li>
                    <li><strong>EV charger combo:</strong> Add monitoring to every EV charger installation</li>
                    <li><strong>Solar pre-sales:</strong> Use load data to sell solar installations</li>
                    <li><strong>Annual check-up:</strong> $100-$200/year for monitoring review and panel inspection</li>
                  </ul>
                </div>
                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">Marketing Angles</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>&quot;Know what you&apos;re paying for&quot;:</strong> Energy awareness as a consumer right</li>
                    <li><strong>EV readiness:</strong> Monitor panel capacity before adding a charger</li>
                    <li><strong>Solar ROI:</strong> Track actual solar savings with real data</li>
                    <li><strong>Safety monitoring:</strong> Alert homeowners to potential electrical issues</li>
                    <li><strong>Home resale value:</strong> Smart home technology as a selling point</li>
                    <li><strong>Utility rate optimization:</strong> Help customers choose the best rate plan</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pricing Strategy Example</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Service Package</th>
                        <th className="text-left py-2 px-3 text-white/60">Customer Price</th>
                        <th className="text-left py-2 px-3 text-white/60">Your Cost</th>
                        <th className="text-left py-2 px-3 text-white/60">Profit</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Basic (Sense + install)</td>
                        <td className="py-2 px-3 font-mono text-green-400">$550</td>
                        <td className="py-2 px-3 font-mono">$300 + 1hr labor</td>
                        <td className="py-2 px-3 font-mono text-green-400">~$175</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Standard (Emporia Vue 16-circuit)</td>
                        <td className="py-2 px-3 font-mono text-green-400">$650</td>
                        <td className="py-2 px-3 font-mono">$200 + 1.5hr</td>
                        <td className="py-2 px-3 font-mono text-green-400">~$325</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Premium (Span Panel replacement)</td>
                        <td className="py-2 px-3 font-mono text-green-400">$8,000-$12,000</td>
                        <td className="py-2 px-3 font-mono">$4,000 + 6-8hr</td>
                        <td className="py-2 px-3 font-mono text-green-400">~$3,000-$6,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="cost-comparison" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Cost Comparison</h2>
              <p className="text-white/80 mb-4">
                Here is a comprehensive cost comparison of the leading panel monitoring systems, including hardware cost, typical installation cost, and ongoing subscription fees.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">System</th>
                      <th className="text-left py-3 px-4 text-white/60">Hardware</th>
                      <th className="text-left py-3 px-4 text-white/60">Install</th>
                      <th className="text-left py-3 px-4 text-white/60">Subscription</th>
                      <th className="text-left py-3 px-4 text-white/60">Monitoring Type</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Sense</td>
                      <td className="py-3 px-4 font-mono">$300</td>
                      <td className="py-3 px-4 font-mono">$150-$300</td>
                      <td className="py-3 px-4 text-green-400">Free</td>
                      <td className="py-3 px-4">Whole-home + ML</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-green-400">Emporia Vue</td>
                      <td className="py-3 px-4 font-mono">$150-$250</td>
                      <td className="py-3 px-4 font-mono">$200-$400</td>
                      <td className="py-3 px-4 text-green-400">Free</td>
                      <td className="py-3 px-4">Circuit-level (16-48)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-yellow-400">IoTaWatt</td>
                      <td className="py-3 px-4 font-mono">$130 + CTs</td>
                      <td className="py-3 px-4 font-mono">$200-$400</td>
                      <td className="py-3 px-4 text-green-400">Free (local)</td>
                      <td className="py-3 px-4">Circuit-level (14)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-blue-400">Leviton</td>
                      <td className="py-3 px-4 font-mono">$2,000-$4,000</td>
                      <td className="py-3 px-4 font-mono">$1,500-$3,000</td>
                      <td className="py-3 px-4 text-green-400">Free</td>
                      <td className="py-3 px-4">Built-in circuit-level</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-orange-400">Span</td>
                      <td className="py-3 px-4 font-mono">$4,000-$6,000</td>
                      <td className="py-3 px-4 font-mono">$2,000-$4,000</td>
                      <td className="py-3 px-4 text-green-400">Free</td>
                      <td className="py-3 px-4">Built-in + control</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/60 text-sm">
                Note: Installation costs vary significantly by region and panel complexity. Panel replacement systems (Leviton, Span) include the cost of a complete panel swap, which accounts for the higher installation labor.
              </p>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do I need an electrician to install a panel monitoring system?</h3>
                  <p className="text-white/70 text-sm">
                    While some systems like Sense and Emporia Vue are marketed as DIY-installable, the installation requires opening the electrical panel and working near live conductors. Most jurisdictions require a licensed electrician for work inside the panel, and manufacturers recommend professional installation for safety. For panel replacement systems (Leviton, Span), a licensed electrician is absolutely required.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Will a panel monitor work with my existing electrical panel?</h3>
                  <p className="text-white/70 text-sm">
                    Add-on CT-based systems (Sense, Emporia Vue, IoTaWatt) work with virtually any standard residential panel &mdash; Square D, Siemens, Eaton, GE, Cutler-Hammer, etc. The CTs clamp around the conductors, not the breakers, so panel brand does not matter. Panel replacement systems (Leviton, Span) replace the entire panel and are brand-specific.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How accurate are panel monitoring systems?</h3>
                  <p className="text-white/70 text-sm">
                    CT-based systems typically achieve <strong>&plusmn;1-2% accuracy</strong> for real power measurements when properly installed. IoTaWatt, which measures actual voltage in addition to current, is often considered the most accurate consumer-grade option at &plusmn;0.5-1%. Sense&apos;s ML-based device disaggregation has lower accuracy for individual device detection (varies by device type), while its total home consumption reading is precise.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can panel monitoring detect electrical problems?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, indirectly. Monitoring systems can detect <strong>abnormal power consumption patterns</strong> that may indicate issues: a circuit drawing more current than expected (potential short or ground fault), a motor cycling rapidly (compressor problem), unexplained baseline loads (phantom draw or wiring issue), or sudden changes in a circuit&apos;s consumption pattern. These alerts can prompt an electrician visit before a problem becomes dangerous.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Do these systems work with 400A services or three-phase power?</h3>
                  <p className="text-white/70 text-sm">
                    Most consumer-grade systems (Sense, Emporia Vue) are designed for single-phase 120/240V residential services up to 200A. For 400A services (which typically use two 200A panels), you would need two monitoring systems or a commercial-grade solution. IoTaWatt can be configured for three-phase monitoring with appropriate CT selection and configuration. Commercial panel monitoring systems from Schneider Electric, Siemens, and others are available for three-phase and higher-amperage applications.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What happens to my data if the manufacturer goes out of business?</h3>
                  <p className="text-white/70 text-sm">
                    This is a real concern with cloud-dependent systems. If Sense or Emporia were to shut down their cloud servers, the hardware would stop functioning. <strong>IoTaWatt</strong> is the notable exception &mdash; it stores all data locally and operates independently of any cloud service, making it the most resilient option for long-term data ownership. For cloud-dependent systems, regularly export your data if the option is available.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I monitor my solar panels and battery storage?</h3>
                  <p className="text-white/70 text-sm">
                    Yes. Sense Solar includes dedicated solar CTs. Emporia Vue can assign any of its CT channels to a solar circuit. IoTaWatt can monitor solar with any available CT channel. Span has native integration with solar inverters and battery systems (Tesla Powerwall, Enphase, SolarEdge). All systems can show real-time net consumption (production minus consumption) and track export to the grid.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How much can I actually save with a panel monitoring system?</h3>
                  <p className="text-white/70 text-sm">
                    Studies consistently show that <strong>real-time energy feedback reduces consumption by 10-15%</strong>. For the average U.S. household spending $150/month on electricity, that translates to $180-$270/year in savings. The primary savings come from identifying and eliminating phantom loads, optimizing HVAC run times, shifting loads to off-peak hours on TOU rate plans, and catching inefficient appliances before they fail.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer CTA Section */}
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
                <Link href="/blog/energy-management-systems-electrical" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Energy Management Systems for Electrical Contractors</h3>
                </Link>
                <Link href="/blog/smart-home-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Smart Home Wiring Guide</h3>
                </Link>
                <Link href="/blog/residential-load-calculations" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-blue-400 text-sm">Calculations</span>
                  <h3 className="font-semibold mt-2">Residential Load Calculations</h3>
                </Link>
                <Link href="/blog/electrical-load-balancing-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Electrical Load Balancing Guide</h3>
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
