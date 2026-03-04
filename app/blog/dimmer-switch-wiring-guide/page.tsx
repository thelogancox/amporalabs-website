import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Dimmer Switch Wiring: Types, LED Compatibility & Installation Guide",
  description: "Complete guide to dimmer switch wiring covering leading-edge, trailing-edge, 0-10V, and ELV dimmer types. Learn LED compatibility with CL-rated dimmers, single-pole and 3-way dimmer wiring diagrams, neutral wire requirements for smart dimmers, wattage ratings, and how to troubleshoot flickering LEDs.",
  keywords: [
    "dimmer switch wiring",
    "LED dimmer switch",
    "3 way dimmer wiring",
    "dimmer switch installation",
    "dimmer compatibility",
    "CL dimmer",
    "ELV dimmer",
    "smart dimmer wiring",
    "dimmer switch neutral wire",
    "dimmer wattage rating"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/dimmer-switch-wiring-guide",
  },
  openGraph: {
    title: "Dimmer Switch Wiring: Types, LED Compatibility & Installation Guide - Ampora",
    description: "Master dimmer switch wiring with this comprehensive guide covering dimmer types, LED compatibility, 3-way wiring, smart dimmer installation, and troubleshooting flickering LEDs.",
    url: "https://amporalabs.com/blog/dimmer-switch-wiring-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Dimmer switch wiring diagrams showing single-pole and 3-way configurations">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Single-Pole Dimmer Diagram - Left Side */}
      <text x="105" y="28" textAnchor="middle" fill="#10b981" fontSize="7" fontWeight="bold">SINGLE-POLE DIMMER</text>

      {/* Electrical Box */}
      <rect x="70" y="50" width="70" height="90" rx="3" fill="#10b981" fillOpacity="0.08" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2"/>

      {/* Dimmer Body */}
      <rect x="85" y="65" width="40" height="55" rx="4" fill="#374151" stroke="#10b981" strokeWidth="1.5"/>
      <rect x="95" y="72" width="20" height="8" rx="2" fill="#10b981" fillOpacity="0.3"/>
      <line x1="105" y1="85" x2="105" y2="110" stroke="#10b981" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="105" cy="110" r="3" fill="#10b981" fillOpacity="0.5" stroke="#10b981" strokeWidth="1"/>

      {/* Hot Wire In (black) */}
      <line x1="30" y1="75" x2="85" y2="75" stroke="#ef4444" strokeWidth="2"/>
      <text x="38" y="72" fill="#ef4444" fontSize="5">HOT (BLK)</text>

      {/* Switched Hot Out (red/black) */}
      <line x1="125" y1="75" x2="175" y2="75" stroke="#f97316" strokeWidth="2"/>
      <text x="140" y="72" fill="#f97316" fontSize="5">SW HOT</text>

      {/* Ground */}
      <line x1="85" y1="110" x2="55" y2="110" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="38" y="108" fill="#22c55e" fontSize="5">GND</text>

      {/* Neutral Pass-Through */}
      <line x1="30" y1="130" x2="175" y2="130" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 2"/>
      <text x="85" y="148" textAnchor="middle" fill="#9ca3af" fontSize="5">NEUTRAL (WHT) - pass through</text>

      {/* Light Fixture Symbol */}
      <circle cx="175" cy="75" r="10" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="170" y1="70" x2="180" y2="80" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="170" y1="80" x2="180" y2="70" stroke="#fbbf24" strokeWidth="1"/>
      <text x="175" y="95" textAnchor="middle" fill="#fbbf24" fontSize="5">LIGHT</text>

      {/* 3-Way Dimmer Diagram - Right Side */}
      <text x="305" y="28" textAnchor="middle" fill="#8b5cf6" fontSize="7" fontWeight="bold">3-WAY DIMMER</text>

      {/* Dimmer Box */}
      <rect x="230" y="42" width="50" height="55" rx="3" fill="#8b5cf6" fillOpacity="0.08" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="4 2"/>

      {/* Dimmer Body */}
      <rect x="237" y="48" width="36" height="42" rx="4" fill="#374151" stroke="#8b5cf6" strokeWidth="1.5"/>
      <rect x="245" y="53" width="20" height="6" rx="2" fill="#8b5cf6" fillOpacity="0.3"/>
      <line x1="255" y1="63" x2="255" y2="82" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round"/>

      {/* Common Wire */}
      <line x1="215" y1="55" x2="237" y2="55" stroke="#ef4444" strokeWidth="2"/>
      <text x="210" y="53" textAnchor="end" fill="#ef4444" fontSize="5">COM (BLK)</text>

      {/* Traveler 1 */}
      <line x1="273" y1="55" x2="325" y2="55" stroke="#c084fc" strokeWidth="1.5"/>
      <text x="296" y="52" textAnchor="middle" fill="#c084fc" fontSize="4.5">TRAV 1</text>

      {/* Traveler 2 */}
      <line x1="273" y1="70" x2="325" y2="70" stroke="#a78bfa" strokeWidth="1.5"/>
      <text x="296" y="67" textAnchor="middle" fill="#a78bfa" fontSize="4.5">TRAV 2</text>

      {/* 3-Way Switch Box */}
      <rect x="325" y="42" width="45" height="55" rx="3" fill="#6366f1" fillOpacity="0.08" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4 2"/>

      {/* 3-Way Toggle */}
      <rect x="332" y="50" width="30" height="36" rx="3" fill="#374151" stroke="#6366f1" strokeWidth="1.5"/>
      <text x="347" y="65" textAnchor="middle" fill="#6366f1" fontSize="6" fontWeight="bold">3W</text>
      <text x="347" y="78" textAnchor="middle" fill="#9ca3af" fontSize="4.5">SWITCH</text>

      {/* Common Out to Light */}
      <line x1="362" y1="120" x2="362" y2="100" stroke="#f97316" strokeWidth="2"/>
      <line x1="347" y1="100" x2="377" y2="100" stroke="#f97316" strokeWidth="1.5"/>
      <text x="377" y="98" fill="#f97316" fontSize="4.5"> SW</text>

      {/* Light Fixture */}
      <circle cx="362" cy="130" r="10" fill="none" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="357" y1="125" x2="367" y2="135" stroke="#fbbf24" strokeWidth="1"/>
      <line x1="357" y1="135" x2="367" y2="125" stroke="#fbbf24" strokeWidth="1"/>
      <text x="362" y="148" textAnchor="middle" fill="#fbbf24" fontSize="5">LIGHT</text>

      {/* Ground Lines */}
      <line x1="237" y1="85" x2="215" y2="85" stroke="#22c55e" strokeWidth="1"/>
      <line x1="362" y1="87" x2="380" y2="87" stroke="#22c55e" strokeWidth="1"/>

      {/* Legend */}
      <g transform="translate(215, 110)">
        <rect x="0" y="0" width="160" height="48" rx="3" fill="#1f2937" stroke="#374151" strokeWidth="0.5"/>
        <line x1="8" y1="12" x2="22" y2="12" stroke="#ef4444" strokeWidth="2"/>
        <text x="26" y="14" fill="#9ca3af" fontSize="4.5">Hot / Common</text>
        <line x1="78" y1="12" x2="92" y2="12" stroke="#c084fc" strokeWidth="2"/>
        <text x="96" y="14" fill="#9ca3af" fontSize="4.5">Travelers</text>
        <line x1="8" y1="26" x2="22" y2="26" stroke="#f97316" strokeWidth="2"/>
        <text x="26" y="28" fill="#9ca3af" fontSize="4.5">Switched Hot</text>
        <line x1="78" y1="26" x2="92" y2="26" stroke="#22c55e" strokeWidth="2"/>
        <text x="96" y="28" fill="#9ca3af" fontSize="4.5">Ground</text>
        <line x1="8" y1="40" x2="22" y2="40" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3 2"/>
        <text x="26" y="42" fill="#9ca3af" fontSize="4.5">Neutral</text>
        <circle cx="85" cy="40" r="5" fill="none" stroke="#fbbf24" strokeWidth="1"/>
        <text x="96" y="42" fill="#9ca3af" fontSize="4.5">Light Fixture</text>
      </g>
    </svg>
  );
}

export default function DimmerSwitchWiringGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Dimmer Switch Wiring Guide", url: "https://amporalabs.com/blog/dimmer-switch-wiring-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Dimmer Switch Wiring: Types, LED Compatibility & Installation Guide"
          description="Complete guide to dimmer switch wiring covering dimmer types, LED compatibility, single-pole and 3-way wiring, smart dimmer installation, and troubleshooting."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/dimmer-switch-wiring-guide"
          wordCount={4800}
          keywords={["dimmer switch wiring", "LED dimmer", "3-way dimmer", "CL dimmer", "smart dimmer installation"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Dimmer Switch Wiring Guide</span>
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
              Dimmer Switch Wiring: Types, LED Compatibility & Installation Guide
            </h1>
            <p className="text-xl text-white/70">
              Dimmer switches save energy, extend lamp life, and set the mood &mdash; but only when properly matched to the load and correctly wired. This guide covers every dimmer type from leading-edge incandescent dimmers to 0-10V commercial controls, explains CL-rated LED compatibility, walks through single-pole and 3-way wiring step by step, and shows you how to diagnose and fix the most common dimmer problems including LED flickering.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-emerald-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Safety First</h3>
                <p className="text-white/80 text-sm">
                  Always turn off the circuit breaker and verify power is off with a non-contact voltage tester before working on any switch or dimmer. Follow all NEC requirements and local codes. If you are not comfortable working with electrical wiring, hire a licensed electrician.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#dimmer-types" className="hover:text-purple-400">Dimmer Switch Types Explained</a></li>
              <li><a href="#led-compatibility" className="hover:text-purple-400">LED Compatibility and CL-Rated Dimmers</a></li>
              <li><a href="#single-pole-wiring" className="hover:text-purple-400">Single-Pole Dimmer Wiring</a></li>
              <li><a href="#three-way-wiring" className="hover:text-purple-400">3-Way and 4-Way Dimmer Wiring</a></li>
              <li><a href="#neutral-wire" className="hover:text-purple-400">Neutral Wire Requirements</a></li>
              <li><a href="#wattage-ratings" className="hover:text-purple-400">Wattage and VA Ratings</a></li>
              <li><a href="#smart-dimmers" className="hover:text-purple-400">Smart Dimmer Installation</a></li>
              <li><a href="#troubleshooting" className="hover:text-purple-400">Troubleshooting Flickering LEDs</a></li>
              <li><a href="#multi-location" className="hover:text-purple-400">Multi-Location Dimming</a></li>
              <li><a href="#common-mistakes" className="hover:text-purple-400">Common Dimmer Wiring Mistakes</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="dimmer-types" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Dimmer Switch Types Explained</h2>
              <p className="text-white/80 mb-4">
                Not all dimmers work the same way. The dimming technology inside the switch must match the type of load it controls. Using the wrong dimmer type causes flickering, buzzing, reduced dimming range, or even damage to the lamp or dimmer. Here are the main dimmer technologies you need to know.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-emerald-500">
                  <h3 className="font-semibold text-emerald-400 mb-2">Leading-Edge (TRIAC / Forward-Phase) Dimmers</h3>
                  <p className="text-white/70 text-sm mb-2">
                    The most common residential dimmer type. A TRIAC semiconductor clips the leading edge of each AC waveform to reduce power to the load. These dimmers were designed for <strong>incandescent and halogen</strong> lamps and are the least expensive option.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Best for:</strong> Incandescent, halogen, magnetic low-voltage (MLV) transformers</li>
                    <li><strong>Not recommended for:</strong> Most LED and CFL lamps (causes flickering and buzzing)</li>
                    <li><strong>Minimum load:</strong> Typically 40W &mdash; problematic with low-wattage LED loads</li>
                    <li><strong>Cost:</strong> $5&ndash;$15 for basic models</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h3 className="font-semibold text-cyan-400 mb-2">Trailing-Edge (Reverse-Phase / ELV) Dimmers</h3>
                  <p className="text-white/70 text-sm mb-2">
                    These dimmers clip the trailing edge of the AC waveform using MOSFET or IGBT transistors, producing a smoother, quieter dimming curve. They are the <strong>preferred choice for LED lamps</strong> and electronic low-voltage (ELV) transformers.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Best for:</strong> LED, CFL, electronic low-voltage (ELV) transformers</li>
                    <li><strong>Advantages:</strong> Smooth dimming, no buzzing, low minimum load, soft start</li>
                    <li><strong>Minimum load:</strong> As low as 5&ndash;10W &mdash; ideal for LED circuits</li>
                    <li><strong>Cost:</strong> $25&ndash;$60 for quality models</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-400 mb-2">0-10V Dimmers (Low-Voltage Control)</h3>
                  <p className="text-white/70 text-sm mb-2">
                    A <strong>commercial-grade dimming protocol</strong> that uses a separate pair of low-voltage control wires (typically violet and gray) in addition to the line-voltage power circuit. The control signal ranges from 0 volts (minimum/off) to 10 volts (full brightness). Commonly used with <Link href="/blog/commercial-lighting-controls-nec" className="text-purple-400 hover:text-purple-300 underline">commercial lighting controls</Link>.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Best for:</strong> Commercial LED drivers, fluorescent ballasts, architectural lighting</li>
                    <li><strong>Wiring:</strong> Requires 2 extra control wires (Class 2, low voltage)</li>
                    <li><strong>Dimming range:</strong> Typically dims to 10&ndash;20% (not full off unless driver supports it)</li>
                    <li><strong>Cost:</strong> $30&ndash;$80 for the dimmer; driver must be 0-10V compatible</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="font-semibold text-yellow-400 mb-2">CL-Rated Dimmers (LED/CFL Specific)</h3>
                  <p className="text-white/70 text-sm mb-2">
                    <strong>CL dimmers</strong> are specifically designed and tested for use with dimmable CFL and LED lamps. They use advanced circuitry to handle the unique electrical characteristics of these loads, including low wattage, non-linear current draw, and capacitive input stages.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Best for:</strong> Dimmable LED and CFL lamps in residential applications</li>
                    <li><strong>Features:</strong> Adjustable low-end trim, air-gap off switch, high/low trim adjustments</li>
                    <li><strong>Brands:</strong> Lutron Diva CL, Caseta, Leviton SureSlide, Eaton CL</li>
                    <li><strong>Cost:</strong> $15&ndash;$40 depending on features</li>
                  </ul>
                </div>
              </div>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Dimmer Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Incandescent</th>
                      <th className="text-left py-3 px-4 text-white/60">Halogen</th>
                      <th className="text-left py-3 px-4 text-white/60">LED</th>
                      <th className="text-left py-3 px-4 text-white/60">CFL</th>
                      <th className="text-left py-3 px-4 text-white/60">ELV</th>
                      <th className="text-left py-3 px-4 text-white/60">MLV</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Leading-Edge (TRIAC)</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Trailing-Edge (ELV)</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-yellow-400">~</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">CL-Rated</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;</td>
                      <td className="py-3 px-4 text-yellow-400">~</td>
                      <td className="py-3 px-4 text-yellow-400">~</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">0-10V</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-green-400">&#10003;*</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                      <td className="py-3 px-4 text-red-400">&#10007;</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-white/50 text-xs mt-2">* Requires 0-10V compatible LED driver. ~ = check manufacturer compatibility.</p>
              </div>
            </section>

            <section id="led-compatibility" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">LED Compatibility and CL-Rated Dimmers</h2>
              <p className="text-white/80 mb-4">
                The number one cause of dimmer problems in modern homes is <strong>using an old incandescent dimmer with LED bulbs</strong>. LED lamps draw a fraction of the wattage of incandescent bulbs, and their internal drivers behave very differently from a simple resistive filament. A dimmer that worked perfectly with 6 incandescent cans at 65W each (390W total) will often flicker, buzz, or fail to dim properly when those same cans are retrofitted with 10W LEDs (60W total).
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-emerald-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Why LEDs Need Special Dimmers</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Low wattage:</strong> LED loads often fall below the dimmer&apos;s minimum load requirement, causing instability</li>
                    <li><strong>Non-linear current:</strong> LED drivers draw current in pulses, not a smooth sine wave</li>
                    <li><strong>Capacitive input:</strong> LED driver capacitors can cause inrush current spikes at turn-on</li>
                    <li><strong>Wide variety:</strong> Each LED manufacturer&apos;s driver responds differently to phase-cut dimming</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">What &ldquo;CL-Rated&rdquo; Means</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>CL = CFL + LED:</strong> Tested and rated for both dimmable CFL and LED lamp types</li>
                    <li><strong>Low minimum load:</strong> Can dim loads as low as a single LED bulb (~10W)</li>
                    <li><strong>Trim adjustments:</strong> Low-end trim prevents flicker at the bottom of the dimming range</li>
                    <li><strong>Compatibility lists:</strong> Manufacturers publish tested lamp compatibility charts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">LED Dimmer Selection Checklist</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Verify the LED bulb is labeled &ldquo;dimmable&rdquo; &mdash; not all LED bulbs can be dimmed</li>
                  <li>&#9744; Choose a CL-rated or ELV dimmer designed for LED loads</li>
                  <li>&#9744; Check the dimmer manufacturer&apos;s compatibility list for your specific LED bulb model</li>
                  <li>&#9744; Calculate total LED wattage and ensure it falls within the dimmer&apos;s LED wattage range</li>
                  <li>&#9744; Use the same brand and model of LED bulb on every socket in the circuit</li>
                  <li>&#9744; Set the low-end trim adjustment after installation to eliminate bottom-range flicker</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Dimmer Wattage Derating for LED Loads</h4>
                <p className="text-white/70 mb-3">
                  Most CL-rated dimmers have two wattage ratings: one for incandescent and one for LED/CFL. A dimmer rated 600W for incandescent is typically rated only <strong>150W for LED/CFL</strong>. Always use the LED wattage rating when calculating load capacity.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Incandescent Rating</th>
                        <th className="text-left py-2 px-3 text-white/60">Typical LED/CFL Rating</th>
                        <th className="text-left py-2 px-3 text-white/60">Max LED Bulbs (10W each)</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">300W</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">75W</td>
                        <td className="py-2 px-3 font-mono">7 bulbs</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-mono">600W</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">150W</td>
                        <td className="py-2 px-3 font-mono">15 bulbs</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-mono">1000W</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">250W</td>
                        <td className="py-2 px-3 font-mono">25 bulbs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="single-pole-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Single-Pole Dimmer Wiring</h2>
              <p className="text-white/80 mb-4">
                A <strong>single-pole dimmer</strong> controls a light from one location only &mdash; the most common residential dimmer installation. It has two black (or red and black) load wires plus a green ground wire, replacing a standard single-pole toggle switch. Per <Link href="/blog/nec-article-210-branch-circuits-guide" className="text-emerald-400 hover:text-emerald-300 underline">NEC Article 210 branch circuit requirements</Link>, the dimmer must be properly connected to the circuit&apos;s ungrounded (hot) conductor.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Turn Off Power</p>
                    <p className="text-white/60 text-sm">Switch off the circuit breaker serving the light circuit. Use a non-contact voltage tester at the switch box to confirm power is off. Test the tester on a known-live circuit first to verify it is working.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Remove the Old Switch</p>
                    <p className="text-white/60 text-sm">Remove the cover plate and switch mounting screws. Gently pull the switch out of the box. Note which wires are connected where. Take a photo for reference before disconnecting anything.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Identify the Wires</p>
                    <p className="text-white/60 text-sm">You should find: a <strong>hot wire (black)</strong> from the breaker, a <strong>switch leg (black or red)</strong> going to the light fixture, a <strong>neutral bundle (white)</strong> wire-nutted in the back of the box (pass-through), and a <strong>ground wire (green or bare copper)</strong>.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Connect the Dimmer</p>
                    <p className="text-white/60 text-sm">Connect one dimmer lead to the incoming hot wire and the other dimmer lead to the switch leg going to the light. On a single-pole dimmer, the two load wires are interchangeable &mdash; polarity does not matter. Connect the green dimmer ground wire to the box ground.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-emerald-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Secure and Test</p>
                    <p className="text-white/60 text-sm">Carefully fold the wires into the box, mount the dimmer, and install the cover plate. Restore power and test the dimmer across its full range. If using a CL dimmer with LEDs, set the low-end trim now.</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Wire Connection Methods</h4>
                <p className="text-white/70 text-sm">
                  Most residential dimmers come with stranded leads (pigtails) that must be connected to the house wiring using wire connectors (wire nuts or Wago lever connectors). Strip about 3/4&quot; of insulation from the house wire, hold the stripped ends side by side, and twist on the wire nut clockwise. Tug on each wire to confirm a secure connection. Do <strong>not</strong> use the push-in (backstab) connectors on the switch &mdash; dimmers draw higher current and generate heat.
                </p>
              </div>
            </section>

            <section id="three-way-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">3-Way and 4-Way Dimmer Wiring</h2>
              <p className="text-white/80 mb-4">
                A <strong>3-way dimmer</strong> allows you to control a light from two locations. One location gets the dimmer and the other gets a standard 3-way toggle switch. In a 3-way circuit, the dimmer has three load wires: one <strong>common</strong> (usually black) and two <strong>travelers</strong> (usually red and white/marked). Correct identification of the common terminal is critical.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">3-Way Dimmer Wiring Steps</h4>
                <ol className="text-white/70 space-y-3 text-sm list-decimal list-inside">
                  <li><strong>Identify the common wire:</strong> On the existing 3-way switch, the common terminal is a different color screw (usually dark/black). Note which wire is connected to it. This is the most important step.</li>
                  <li><strong>Connect the common:</strong> Connect the common wire from the old switch to the <strong>common lead</strong> on the dimmer (usually marked black or labeled &ldquo;COM&rdquo;).</li>
                  <li><strong>Connect the travelers:</strong> Connect the two remaining (traveler) wires to the dimmer&apos;s two traveler leads. These are interchangeable &mdash; either traveler can go to either traveler terminal.</li>
                  <li><strong>Connect ground:</strong> Connect the dimmer&apos;s green ground lead to the box ground wires.</li>
                  <li><strong>Leave the other switch alone:</strong> The standard 3-way switch at the other location stays as-is. Do not replace both switches with dimmers unless using a matched dimmer system.</li>
                </ol>
              </div>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">3-Way Configuration</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Location 1:</strong> 3-way dimmer (controls dim level + on/off)</li>
                    <li><strong>Location 2:</strong> Standard 3-way toggle switch (on/off only)</li>
                    <li><strong>Wires between switches:</strong> 2 travelers + ground</li>
                    <li><strong>Result:</strong> Dim from one spot, toggle on/off from both</li>
                  </ul>
                </div>
                <div className="bg-indigo-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-indigo-400 mb-3">4-Way Configuration</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Location 1:</strong> 3-way dimmer</li>
                    <li><strong>Location 2:</strong> 4-way switch (middle positions)</li>
                    <li><strong>Location 3:</strong> Standard 3-way toggle switch</li>
                    <li><strong>Result:</strong> On/off from 3+ locations, dim from one</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Critical: Never Put Two Standard Dimmers in a 3-Way Circuit</h4>
                <p className="text-white/70 text-sm">
                  You cannot install a regular dimmer at both ends of a 3-way circuit. The two dimmers will conflict and cause erratic behavior, buzzing, or damage. If you need dimming control from both locations, you must use a <strong>matched companion dimmer system</strong> (like Lutron Maestro or Caseta) where one is the &ldquo;master&rdquo; and the other is a &ldquo;remote/companion&rdquo; that communicates with the master via the traveler wires or wirelessly.
                </p>
              </div>
            </section>

            <section id="neutral-wire" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Neutral Wire Requirements</h2>
              <p className="text-white/80 mb-4">
                One of the biggest stumbling blocks in dimmer switch upgrades &mdash; particularly for smart dimmers &mdash; is the <strong>neutral wire</strong>. Many older homes have switch boxes that do not contain a neutral wire, which limits your dimmer options.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">When You Need a Neutral</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Smart dimmers with Wi-Fi/Zigbee/Z-Wave:</strong> Most require a neutral to power their radio and microprocessor when the light is off</li>
                    <li><strong>Illuminated dimmers:</strong> Models with a locator light or status LED</li>
                    <li><strong>NEC 404.2(C) requirement:</strong> As of NEC 2011, a grounded (neutral) conductor is required at every switch box location</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">When You Don&apos;t Need a Neutral</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Basic toggle/slide dimmers:</strong> Standard CL dimmers that do not have smart features</li>
                    <li><strong>Certain smart dimmers:</strong> Some models (Lutron Caseta, Inovelli) work without a neutral by passing a small leakage current through the load</li>
                    <li><strong>No-neutral smart dimmers:</strong> May require a bypass capacitor at the fixture if the LED load flickers at the off state</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">How to Tell If You Have a Neutral in the Box</h4>
                <p className="text-white/70 text-sm mb-3">
                  Turn off the breaker and remove the switch. Look in the back of the box:
                </p>
                <ul className="text-white/70 text-sm space-y-2">
                  <li><strong>Neutral present:</strong> You will see a bundle of white wires connected together with a wire nut, not connected to the switch. These are the neutrals passing through.</li>
                  <li><strong>No neutral (switch loop):</strong> You will see only two wires (one black, one white) with the white wire connected to a switch terminal and possibly re-identified with black tape. This is a switch loop &mdash; no neutral is available in this box.</li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">NEC 404.2(C) &mdash; Neutral at Switch Boxes</h4>
                <p className="text-white/70 text-sm">
                  The NEC requires a grounded conductor (neutral) at each switch or dimmer location to support future occupancy sensors, timers, and smart switches. Exceptions exist when the box is supplied by a conduit system (where a neutral can be pulled later) or when the switch does not serve a habitable room or bathroom. Homes built before this code cycle may not have neutrals at switch boxes.
                </p>
              </div>
            </section>

            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora &mdash; The Electrician&apos;s AI Companion</p>
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

            <section id="wattage-ratings" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Wattage and VA Ratings</h2>
              <p className="text-white/80 mb-4">
                Every dimmer has a maximum load rating, typically stamped on the side or back of the device. Exceeding this rating causes overheating, premature failure, and potential fire hazard. Understanding how to calculate and apply these ratings is essential for a safe installation.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Wattage Rating Rules</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Incandescent/halogen:</strong> Use the rated wattage directly. A 600W dimmer handles up to 600W of incandescent load.</li>
                  <li><strong>LED/CFL:</strong> Use the dimmer&apos;s LED/CFL wattage rating (much lower). A 600W/150W-CFL-LED dimmer handles only 150W of LED load.</li>
                  <li><strong>MLV transformers:</strong> Rated in VA (volt-amperes). A 600VA MLV dimmer handles up to 600VA of magnetic transformer load.</li>
                  <li><strong>ELV transformers:</strong> Also rated in VA. Must use an ELV (trailing-edge) dimmer specifically designed for electronic transformers.</li>
                  <li><strong>Mixed loads:</strong> If mixing lamp types on one dimmer (not recommended), use the lowest applicable rating.</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Multi-Gang Derating</h4>
                <p className="text-white/70 text-sm mb-3">
                  When multiple dimmers are installed side by side in a multi-gang box, each dimmer must be <strong>derated</strong> because the adjacent dimmers restrict heat dissipation. Most dimmers have removable heat sink fins (tabs) on each side. Remove one tab for each adjacent dimmer.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Configuration</th>
                        <th className="text-left py-2 px-3 text-white/60">Tabs Removed</th>
                        <th className="text-left py-2 px-3 text-white/60">600W Dimmer Derated To</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Single dimmer (no adjacent dimmers)</td>
                        <td className="py-2 px-3 font-mono">0</td>
                        <td className="py-2 px-3 font-mono text-green-400">600W</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">One adjacent dimmer</td>
                        <td className="py-2 px-3 font-mono">1</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">500W</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Two adjacent dimmers</td>
                        <td className="py-2 px-3 font-mono">2</td>
                        <td className="py-2 px-3 font-mono text-orange-400">400W</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Three adjacent dimmers</td>
                        <td className="py-2 px-3 font-mono">3</td>
                        <td className="py-2 px-3 font-mono text-red-400">300W</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-xs mt-2">Derating values are typical for Lutron. Always check the specific dimmer manufacturer&apos;s derating chart.</p>
              </div>
            </section>

            <section id="smart-dimmers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Smart Dimmer Installation</h2>
              <p className="text-white/80 mb-4">
                Smart dimmers add wireless control via Wi-Fi, Zigbee, Z-Wave, Bluetooth, or proprietary protocols (like Lutron Clear Connect). They allow dimming from a phone app, voice assistants, schedules, and automations. Installation is similar to a standard dimmer but with additional wiring considerations.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 1: Verify Neutral Wire Availability</h4>
                  <p className="text-white/70 text-sm">
                    Most smart dimmers require a neutral wire. Check the box before purchasing. If no neutral is available, choose a model that does not require one (Lutron Caseta PD-6WCL, Inovelli Blue, or similar) or plan to run a new neutral.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 2: Check Box Fill</h4>
                  <p className="text-white/70 text-sm">
                    Smart dimmers are physically larger than standard dimmers due to their electronics. Verify the electrical box has sufficient volume for the new device plus all existing conductors. A standard single-gang box may be too small &mdash; you may need to upgrade to a deeper or old-work box.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 3: Wire the Smart Dimmer</h4>
                  <p className="text-white/70 text-sm">
                    Smart dimmers have labeled wires: <strong>LINE</strong> (hot from breaker), <strong>LOAD</strong> (to light), <strong>NEUTRAL</strong> (white), and <strong>GROUND</strong> (green). Unlike basic dimmers, smart dimmers are polarity-sensitive &mdash; LINE and LOAD are <strong>not</strong> interchangeable. Use a voltage tester to identify which wire is the constant hot (LINE) before connecting.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Step 4: Configure and Pair</h4>
                  <p className="text-white/70 text-sm">
                    After wiring, restore power and follow the manufacturer&apos;s app to connect the dimmer to your network and smart home platform. Set bulb type (LED, incandescent, ELV), minimum/maximum brightness levels, ramp rate, and any automation schedules.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Smart Dimmer Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Feature</th>
                        <th className="text-left py-2 px-3 text-white/60">Wi-Fi</th>
                        <th className="text-left py-2 px-3 text-white/60">Zigbee/Z-Wave</th>
                        <th className="text-left py-2 px-3 text-white/60">Lutron Caseta</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Hub required</td>
                        <td className="py-2 px-3">No</td>
                        <td className="py-2 px-3">Yes</td>
                        <td className="py-2 px-3">Yes (Smart Bridge)</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">Neutral required</td>
                        <td className="py-2 px-3">Usually yes</td>
                        <td className="py-2 px-3">Varies</td>
                        <td className="py-2 px-3">No</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">3-way support</td>
                        <td className="py-2 px-3">Varies</td>
                        <td className="py-2 px-3">Yes (with add-on)</td>
                        <td className="py-2 px-3">Yes (Pico remote)</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">Reliability</td>
                        <td className="py-2 px-3 text-yellow-400">Good</td>
                        <td className="py-2 px-3 text-green-400">Very good</td>
                        <td className="py-2 px-3 text-green-400">Excellent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="troubleshooting" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Troubleshooting Flickering LEDs</h2>
              <p className="text-white/80 mb-4">
                LED flickering on a dimmer circuit is the most common complaint electricians encounter. The issue is almost always a <strong>compatibility mismatch</strong> between the dimmer and the LED driver. Here is a systematic approach to diagnosing and resolving it.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Flickering at All Levels</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> Wrong dimmer type (TRIAC dimmer with LED load). The dimmer&apos;s minimum holding current is too high for the LED driver.<br/>
                    <strong>Fix:</strong> Replace with a CL-rated or trailing-edge dimmer designed for LED loads.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Flickering at Low Dim Levels</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> The dimmer&apos;s low-end output drops below the LED driver&apos;s minimum operating threshold.<br/>
                    <strong>Fix:</strong> Adjust the dimmer&apos;s low-end trim (small set screw or button) to raise the minimum output. This clips the bottom of the dimming range but eliminates flicker.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Flickering When Other Loads Switch</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> Voltage fluctuations on the circuit from motors, HVAC, or other large loads starting and stopping.<br/>
                    <strong>Fix:</strong> Move the dimmed lighting circuit to a dedicated breaker. If the issue is system-wide, check for loose neutral connections at the panel.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Buzzing From the Dimmer or Bulbs</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> The chopped AC waveform from a leading-edge dimmer vibrates the LED driver&apos;s coils or the dimmer&apos;s own TRIAC.<br/>
                    <strong>Fix:</strong> Switch to a trailing-edge (ELV) dimmer. If buzzing persists, try a different LED bulb brand &mdash; some drivers are quieter than others.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">LEDs Glow or Flash When Off</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> Small leakage current from the dimmer (especially no-neutral smart dimmers) trickles through the LED driver, which is sensitive enough to produce a faint glow.<br/>
                    <strong>Fix:</strong> Install a <strong>bypass capacitor</strong> (LUT-MLC or equivalent) in parallel with the light fixture. This absorbs the leakage current.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Inconsistent Dimming (Some Bulbs Brighter)</h4>
                  <p className="text-white/60 text-sm">
                    <strong>Cause:</strong> Mixing LED bulb brands or models on the same circuit. Different LED drivers respond differently to the same dimmer signal.<br/>
                    <strong>Fix:</strong> Use the same brand, model, and wattage of LED bulb on every socket in the dimmed circuit.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">LED Dimmer Troubleshooting Flowchart</h4>
                <ol className="text-white/70 space-y-2 text-sm list-decimal list-inside">
                  <li>Are the LED bulbs labeled &ldquo;dimmable&rdquo;? If no &rarr; replace with dimmable LEDs.</li>
                  <li>Is the dimmer CL-rated or LED-compatible? If no &rarr; replace the dimmer.</li>
                  <li>Is the total LED wattage above the dimmer&apos;s minimum load? If no &rarr; add bulbs or install a load capacitor.</li>
                  <li>Is the total LED wattage below the dimmer&apos;s LED maximum? If no &rarr; reduce the number of bulbs or upgrade dimmer.</li>
                  <li>Are all bulbs the same brand and model? If no &rarr; standardize the bulbs.</li>
                  <li>Is low-end trim adjusted? If no &rarr; set the trim to just above the flicker point.</li>
                  <li>Still flickering? Check the manufacturer&apos;s compatibility list and try a different dimmer/bulb pairing.</li>
                </ol>
              </div>
            </section>

            <section id="multi-location" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Multi-Location Dimming</h2>
              <p className="text-white/80 mb-4">
                When you need <strong>dimming control from more than one location</strong>, simple 3-way dimmers are not enough. Multi-location dimming systems allow full dimming adjustment from two or more switches using companion dimmers, wireless remotes, or addressable control protocols.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-emerald-400 mb-3">Companion Dimmer Systems (Wired)</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Lutron Maestro, Leviton Decora, and similar systems use a <strong>master dimmer</strong> at one location and <strong>companion dimmers</strong> at other locations. The companions communicate with the master over the existing traveler wires. Both locations provide full dimming control.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>Requires compatible master + companion pair from the same manufacturer</li>
                    <li>Uses existing 3-way traveler wiring &mdash; no new wires needed</li>
                    <li>Master processes the dimming; companions send signals</li>
                    <li>Works for 3-way and 4-way (with 4-way accessory dimmers) configurations</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Wireless Remote Systems</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Systems like <strong>Lutron Caseta</strong> use a smart dimmer at the switch box and battery-powered Pico remote controls mounted anywhere. No traveler wires are needed, making it ideal for retrofits and adding control points without running new wire. For comprehensive smart home wiring planning, see our <Link href="/blog/smart-home-wiring-guide" className="text-purple-400 hover:text-purple-300 underline">smart home wiring guide</Link>.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>No traveler wires needed between switch locations</li>
                    <li>Mount Pico remotes with included wall plate for a clean, built-in look</li>
                    <li>Add unlimited control points without any new wiring</li>
                    <li>Works with voice assistants and smart home platforms</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">0-10V and DALI (Commercial)</h3>
                  <p className="text-white/70 text-sm mb-2">
                    Commercial <Link href="/blog/recessed-lighting-installation-guide" className="text-cyan-400 hover:text-cyan-300 underline">recessed lighting</Link> and architectural fixtures often use <strong>0-10V</strong> or <strong>DALI (Digital Addressable Lighting Interface)</strong> protocols for multi-zone dimming. These systems use dedicated low-voltage control wiring separate from the power circuit.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>0-10V: Simple analog control, sinks current, two-wire (violet + gray)</li>
                    <li>DALI: Digital protocol, addressable, supports scenes and groups</li>
                    <li>Both support multiple dimming zones from a central controller</li>
                    <li>Ideal for offices, retail, hospitality, and architectural applications</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="common-mistakes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Dimmer Wiring Mistakes</h2>
              <p className="text-white/80 mb-4">
                Dimmer installations are straightforward when done correctly, but several common errors lead to callbacks, safety hazards, and frustrated customers. Here are the mistakes to avoid.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using a TRIAC Dimmer for LEDs</h4>
                  <p className="text-white/60 text-sm">
                    The most common mistake. Old incandescent TRIAC dimmers cannot properly control LED loads. Always use a CL-rated or ELV dimmer for LED bulbs. This single change resolves the majority of LED dimmer complaints.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Exceeding the Wattage Rating</h4>
                  <p className="text-white/60 text-sm">
                    Overloading a dimmer causes overheating and is a fire hazard. Remember to use the LED wattage rating (not the incandescent rating) for LED loads, and derate for multi-gang installations by removing heat sink tabs.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Swapping LINE and LOAD on Smart Dimmers</h4>
                  <p className="text-white/60 text-sm">
                    Unlike basic dimmers, smart dimmers are polarity-sensitive. Connecting LINE to the LOAD terminal and vice versa can damage the dimmer or cause it to malfunction. Always identify the constant hot wire before connecting.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Misidentifying the Common Wire in 3-Way</h4>
                  <p className="text-white/60 text-sm">
                    Connecting a traveler wire to the dimmer&apos;s common terminal (or vice versa) causes the circuit to work intermittently or not at all. The common screw is a different color on 3-way switches &mdash; always identify it before disconnecting.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Dimming Non-Dimmable LEDs</h4>
                  <p className="text-white/60 text-sm">
                    Not all LED bulbs are dimmable. Non-dimmable LEDs on a dimmer circuit will flicker, strobe, buzz, or fail prematurely. Always verify the bulb packaging says &ldquo;dimmable&rdquo; before installing on a dimmer circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Not Connecting the Ground</h4>
                  <p className="text-white/60 text-sm">
                    Some installers skip the ground wire, especially in older boxes without a ground. The NEC requires dimmers to be grounded. If no equipment ground exists in the box, use a dimmer listed for use without an equipment grounding conductor, or install a GFCI-protected circuit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Using a Dimmer on a Fan Motor</h4>
                  <p className="text-white/60 text-sm">
                    Standard light dimmers must never be used to control ceiling fan motors. The dimmer&apos;s chopped waveform overheats the motor windings and creates a fire hazard. Use a fan-speed controller specifically designed for motor loads.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Skipping the Low-End Trim Adjustment</h4>
                  <p className="text-white/60 text-sm">
                    CL-rated dimmers have a low-end trim adjustment for a reason. Without setting it, the dimmer may flicker or turn off before reaching the lowest slider position. Spend 30 seconds adjusting the trim after installation &mdash; it prevents callbacks.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-emerald-400 mb-3">Dimmer Installation Best Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Verify power is off before starting work</li>
                  <li>&#9744; Match dimmer type to load type (LED/CFL, incandescent, ELV, MLV)</li>
                  <li>&#9744; Calculate total load wattage using the correct rating (LED vs. incandescent)</li>
                  <li>&#9744; Derate for multi-gang installations (remove heat sink tabs)</li>
                  <li>&#9744; Use the same brand and model of LED bulb throughout the circuit</li>
                  <li>&#9744; Connect ground wire on every dimmer installation</li>
                  <li>&#9744; Identify LINE vs. LOAD on smart dimmers before connecting</li>
                  <li>&#9744; Set low-end trim adjustment after installation</li>
                  <li>&#9744; Test across the full dimming range before closing up</li>
                  <li>&#9744; Never use a light dimmer on a motor or fan</li>
                </ul>
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
                  Join thousands of electricians using Ampora for instant NEC code answers, electrical calculations, and AI-powered troubleshooting &mdash; right from your phone.
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
                <Link href="/blog/recessed-lighting-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-emerald-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Recessed Lighting Installation Guide</h3>
                </Link>
                <Link href="/blog/commercial-lighting-controls-nec" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Commercial Lighting Controls &amp; NEC Requirements</h3>
                </Link>
                <Link href="/blog/smart-home-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Technology</span>
                  <h3 className="font-semibold mt-2">Smart Home Wiring Guide</h3>
                </Link>
                <Link href="/blog/led-driver-selection-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-yellow-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">LED Driver Selection Guide</h3>
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
