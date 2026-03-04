import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tandem Breakers: NEC Rules for Slim & Twin Circuit Breakers",
  description: "Complete guide to tandem breaker NEC rules. Learn where slim/twin breakers are permitted, CTL panelboard requirements, panel listing restrictions, which slots accept tandem breakers, half-size breaker compatibility by brand, panel schedule considerations, and common inspection failures with double-stuff breakers.",
  keywords: [
    "tandem breakers",
    "slim breakers nec",
    "twin circuit breakers",
    "tandem breaker rules",
    "CTL panelboard",
    "half size breakers",
    "tandem breaker slots",
    "panel breaker capacity",
    "double stuff breakers",
    "tandem vs double pole"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/tandem-breakers-nec-rules",
  },
  openGraph: {
    title: "Tandem Breakers: NEC Rules for Slim & Twin Circuit Breakers - Ampora",
    description: "Master tandem breaker NEC rules with this comprehensive guide covering CTL panelboards, slot restrictions, brand compatibility, and inspection requirements.",
    url: "https://amporalabs.com/blog/tandem-breakers-nec-rules",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Comparison of standard breaker and tandem breaker in electrical panel">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Panel Enclosure Left */}
      <rect x="25" y="25" width="160" height="140" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1.5"/>
      <text x="105" y="20" textAnchor="middle" fill="#9ca3af" fontSize="7" fontWeight="bold">STANDARD BREAKERS</text>

      {/* Left bus bar */}
      <rect x="103" y="35" width="4" height="120" fill="#d97706" rx="1"/>

      {/* Standard breakers - left side */}
      <g transform="translate(35, 38)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>
      <g transform="translate(35, 64)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>
      <g transform="translate(35, 90)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>
      <g transform="translate(35, 116)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>

      {/* Right side standard breakers */}
      <g transform="translate(110, 38)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
      </g>
      <g transform="translate(110, 64)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
      </g>
      <g transform="translate(110, 90)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
      </g>
      <g transform="translate(110, 116)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
      </g>

      {/* Label: 4 spaces = 8 circuits */}
      <text x="105" y="152" textAnchor="middle" fill="#60a5fa" fontSize="5.5">4 spaces = 8 circuits</text>

      {/* Arrow */}
      <line x1="195" y1="90" x2="215" y2="90" stroke="#a78bfa" strokeWidth="2" markerEnd="url(#arrowhead)"/>
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
          <polygon points="0 0, 6 2, 0 4" fill="#a78bfa"/>
        </marker>
      </defs>

      {/* Panel Enclosure Right - Tandem */}
      <rect x="220" y="25" width="160" height="140" rx="3" fill="#111827" stroke="#4b5563" strokeWidth="1.5"/>
      <text x="300" y="20" textAnchor="middle" fill="#a78bfa" fontSize="7" fontWeight="bold">WITH TANDEM BREAKERS</text>

      {/* Right bus bar */}
      <rect x="298" y="35" width="4" height="120" fill="#d97706" rx="1"/>

      {/* Tandem breakers left side - top slot */}
      <g transform="translate(230, 38)">
        <rect x="0" y="0" width="65" height="10" rx="2" fill="#3b1e6b" stroke="#a78bfa" strokeWidth="1"/>
        <circle cx="8" cy="5" r="2.5" fill="#111827" stroke="#c4b5fd" strokeWidth="0.8"/>
        <text x="18" y="7.5" fill="#c4b5fd" fontSize="5" fontWeight="bold">20A</text>
        <rect x="50" y="2" width="10" height="6" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.5"/>
      </g>
      <g transform="translate(230, 50)">
        <rect x="0" y="0" width="65" height="10" rx="2" fill="#3b1e6b" stroke="#a78bfa" strokeWidth="1"/>
        <circle cx="8" cy="5" r="2.5" fill="#111827" stroke="#c4b5fd" strokeWidth="0.8"/>
        <text x="18" y="7.5" fill="#c4b5fd" fontSize="5" fontWeight="bold">15A</text>
        <rect x="50" y="2" width="10" height="6" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.5"/>
      </g>

      {/* Standard breaker left - second slot */}
      <g transform="translate(230, 64)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>

      {/* Tandem breakers left side - third slot */}
      <g transform="translate(230, 90)">
        <rect x="0" y="0" width="65" height="10" rx="2" fill="#3b1e6b" stroke="#a78bfa" strokeWidth="1"/>
        <circle cx="8" cy="5" r="2.5" fill="#111827" stroke="#c4b5fd" strokeWidth="0.8"/>
        <text x="18" y="7.5" fill="#c4b5fd" fontSize="5" fontWeight="bold">15A</text>
        <rect x="50" y="2" width="10" height="6" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.5"/>
      </g>
      <g transform="translate(230, 102)">
        <rect x="0" y="0" width="65" height="10" rx="2" fill="#3b1e6b" stroke="#a78bfa" strokeWidth="1"/>
        <circle cx="8" cy="5" r="2.5" fill="#111827" stroke="#c4b5fd" strokeWidth="0.8"/>
        <text x="18" y="7.5" fill="#c4b5fd" fontSize="5" fontWeight="bold">20A</text>
        <rect x="50" y="2" width="10" height="6" rx="1" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="0.5"/>
      </g>

      {/* Standard breaker left - fourth slot */}
      <g transform="translate(230, 116)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="10" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="22" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
        <rect x="50" y="8" width="12" height="6" rx="1" fill="#3b82f6" fillOpacity="0.3" stroke="#3b82f6" strokeWidth="0.5"/>
      </g>

      {/* Right side - mirror with tandems */}
      <g transform="translate(305, 38)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
      </g>
      <g transform="translate(305, 64)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
      </g>
      <g transform="translate(305, 90)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">20A</text>
      </g>
      <g transform="translate(305, 116)">
        <rect x="0" y="0" width="65" height="22" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
        <circle cx="55" cy="11" r="4" fill="#111827" stroke="#60a5fa" strokeWidth="1"/>
        <text x="18" y="14" fill="#93c5fd" fontSize="6" fontWeight="bold">15A</text>
      </g>

      {/* Label: 4 spaces = 12 circuits */}
      <text x="300" y="152" textAnchor="middle" fill="#a78bfa" fontSize="5.5">4 spaces = 12 circuits</text>
    </svg>
  );
}

export default function TandemBreakersNecRulesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Tandem Breakers NEC Rules", url: "https://amporalabs.com/blog/tandem-breakers-nec-rules" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Tandem Breakers: NEC Rules for Slim & Twin Circuit Breakers"
          description="Complete guide to tandem breaker NEC rules covering CTL panelboards, slot restrictions, brand compatibility, panel schedules, and common inspection failures."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/tandem-breakers-nec-rules"
          wordCount={4500}
          keywords={["tandem breakers", "slim breakers nec", "twin circuit breakers", "CTL panelboard", "tandem breaker slots"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Tandem Breakers NEC Rules</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm font-medium rounded-full">
                NEC Code
              </span>
              <span className="text-white/40 text-sm">16 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Tandem Breakers: NEC Rules for Slim &amp; Twin Circuit Breakers
            </h1>
            <p className="text-xl text-white/70">
              Tandem breakers (also called slim, twin, half-size, or double-stuff breakers) allow two circuits in one panel slot &mdash; but the NEC and panel listings strictly control where and how they can be used. This guide covers CTL panelboard rules, which slots accept tandems, brand-specific compatibility, common inspection failures, and how to avoid code violations when adding circuits to a full panel.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#what-are-tandem-breakers" className="hover:text-purple-400">What Are Tandem (Slim/Twin) Breakers?</a></li>
              <li><a href="#tandem-vs-double-pole" className="hover:text-purple-400">Tandem vs Double-Pole Breakers</a></li>
              <li><a href="#nec-rules-tandem" className="hover:text-purple-400">NEC Rules for Tandem Breaker Use</a></li>
              <li><a href="#ctl-panelboards" className="hover:text-purple-400">CTL (Circuit Total Limitation) Panelboards</a></li>
              <li><a href="#which-slots-accept-tandems" className="hover:text-purple-400">Which Slots Accept Tandems (Panel Listing)</a></li>
              <li><a href="#brand-compatibility" className="hover:text-purple-400">Common Panel Brands &amp; Tandem Compatibility</a></li>
              <li><a href="#when-not-to-use" className="hover:text-purple-400">When NOT to Use Tandem Breakers</a></li>
              <li><a href="#inspection-failures" className="hover:text-purple-400">Inspection Failures Related to Tandems</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="what-are-tandem-breakers" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What Are Tandem (Slim/Twin) Breakers?</h2>
              <p className="text-white/80 mb-4">
                A <strong>tandem breaker</strong> is a circuit breaker that provides two independent single-pole circuits in the physical space of one standard single-pole breaker. They are known by many names in the trade: <strong>slim breakers</strong>, <strong>twin breakers</strong>, <strong>half-size breakers</strong>, <strong>skinny breakers</strong>, <strong>duplex breakers</strong>, and <strong>double-stuff breakers</strong>. Regardless of the name, they all serve the same purpose &mdash; fitting two circuits into one breaker slot.
              </p>
              <p className="text-white/80 mb-4">
                Each half of a tandem breaker has its own toggle switch, its own overcurrent trip mechanism, and its own terminal for a circuit conductor. However, both halves share a single connection point to the panel&apos;s bus bar. This means both circuits in a tandem breaker are on the <strong>same phase (leg)</strong> of the panel.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Physical Characteristics</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Width:</strong> Same as one standard breaker (1 slot)</li>
                    <li><strong>Toggles:</strong> Two independent on/off switches</li>
                    <li><strong>Terminals:</strong> Two separate wire terminals</li>
                    <li><strong>Bus connection:</strong> Single stab on one bus bar</li>
                    <li><strong>Typical ratings:</strong> 15A or 20A per circuit (up to 30A on some)</li>
                  </ul>
                </div>
                <div className="bg-cyan-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Common Trade Names by Brand</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Square D:</strong> Tandem, Twin</li>
                    <li><strong>Eaton/Cutler-Hammer:</strong> Tandem, Twin, BD</li>
                    <li><strong>Siemens:</strong> Tandem, Duplex</li>
                    <li><strong>GE:</strong> Slim, Thin, Twin</li>
                    <li><strong>Murray/Crouse-Hinds:</strong> Duplex, Twin</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Why Electricians Use Tandem Breakers</h4>
                <p className="text-white/70 mb-3">
                  The primary reason for using tandem breakers is to add circuits to an existing panel that has run out of open breaker spaces. Common scenarios include:
                </p>
                <ul className="text-white/70 space-y-1">
                  <li>Adding circuits for a kitchen remodel (dishwasher, garbage disposal, additional receptacle circuits)</li>
                  <li>Installing dedicated circuits for new appliances (EV charger, workshop, home office)</li>
                  <li>Expanding lighting or receptacle circuits during renovations</li>
                  <li>Avoiding the cost and complexity of installing a sub-panel or upgrading the main panel</li>
                </ul>
              </div>
            </section>

            <section id="tandem-vs-double-pole" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Tandem vs Double-Pole Breakers</h2>
              <p className="text-white/80 mb-4">
                One of the most common misunderstandings in residential electrical work is confusing tandem breakers with double-pole breakers. They look superficially similar (both have two toggles), but they serve completely different purposes and are <strong>not interchangeable</strong>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Feature</th>
                      <th className="text-left py-3 px-4 text-white/60">Tandem Breaker</th>
                      <th className="text-left py-3 px-4 text-white/60">Double-Pole Breaker</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Purpose</td>
                      <td className="py-3 px-4">Two independent 120V circuits</td>
                      <td className="py-3 px-4">One 240V circuit (or one 120/240V circuit)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Slots used</td>
                      <td className="py-3 px-4 font-mono text-purple-400">1 slot</td>
                      <td className="py-3 px-4 font-mono text-cyan-400">2 slots (adjacent)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Bus bar connection</td>
                      <td className="py-3 px-4">Both circuits on same leg (A or B)</td>
                      <td className="py-3 px-4">Spans both legs (A and B)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Toggle operation</td>
                      <td className="py-3 px-4">Each toggle operates independently</td>
                      <td className="py-3 px-4">Toggles are tied &mdash; trip together</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold">Voltage supplied</td>
                      <td className="py-3 px-4">120V per circuit</td>
                      <td className="py-3 px-4">240V (or 120/240V)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Typical loads</td>
                      <td className="py-3 px-4">General lighting, receptacles</td>
                      <td className="py-3 px-4">Range, dryer, A/C, water heater</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6 border border-orange-500/30">
                <h4 className="font-semibold text-orange-400 mb-3">Critical Distinction</h4>
                <p className="text-white/70">
                  A tandem breaker <strong>cannot</strong> be used for 240V circuits. Because both halves connect to the same bus stab, they are on the same phase. A double-pole breaker spans two adjacent bus stabs on opposite phases (legs A and B) to deliver 240V. Some manufacturers make <strong>quad breakers</strong> that combine two tandems with an internal common trip for one 240V circuit plus two 120V circuits in two slots, but these are distinct products with their own listing requirements.
                </p>
              </div>
            </section>

            <section id="nec-rules-tandem" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Rules for Tandem Breaker Use</h2>
              <p className="text-white/80 mb-4">
                The NEC does not prohibit tandem breakers outright &mdash; but it establishes strict rules that govern where and how they can be installed. The key code sections that apply to tandem breaker use involve <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300 underline">overcurrent protection requirements</Link>, panelboard listings, and the circuit total limitation concept.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 408.54 &mdash; Maximum Number of Overcurrent Devices</h4>
                  <p className="text-white/70 text-sm">
                    A panelboard shall be provided with physical means to prevent the installation of more overcurrent devices than the number for which the panelboard was designed, rated, and listed. This is the foundation of the CTL rule &mdash; you cannot install more circuit breakers (including tandems) than the panel is <strong>listed</strong> to accept.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 110.3(B) &mdash; Listed Equipment Used Per Listing</h4>
                  <p className="text-white/70 text-sm">
                    Listed or labeled equipment shall be installed and used in accordance with any instructions included in the listing or labeling. This means you must follow the panel manufacturer&apos;s labeling for which breaker types are permitted in each slot. The panel&apos;s internal label (or the panel schedule on the door) tells you exactly which positions accept tandem breakers.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 408.36 &mdash; Overcurrent Protection of Panelboards</h4>
                  <p className="text-white/70 text-sm">
                    Each panelboard must be individually protected on the supply side by overcurrent devices having a rating not greater than the panelboard. The total number of circuits, including those provided by tandem breakers, must not exceed the panel&apos;s listing. This connects directly to the panel&apos;s <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300 underline">load calculation requirements</Link>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">UL 67 &mdash; Panelboard Standard</h4>
                  <p className="text-white/70 text-sm">
                    UL 67 is the product standard under which panelboards are tested and listed. It establishes the CTL (Circuit Total Limitation) requirements, including the rejection features that physically prevent installing tandems in non-approved slots. The panel&apos;s maximum circuit count is determined during this listing process.
                  </p>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">The Bottom Line</h4>
                <p className="text-white/70">
                  Tandem breakers are <strong>code-compliant</strong> when installed in the correct slots of a panel that is listed to accept them, and when the total number of circuits does not exceed the panel&apos;s maximum circuit rating. They are a <strong>code violation</strong> when installed in slots not approved for tandems, when they exceed the panel&apos;s circuit limit, or when they bypass the panel&apos;s rejection features.
                </p>
              </div>
            </section>

            <section id="ctl-panelboards" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">CTL (Circuit Total Limitation) Panelboards</h2>
              <p className="text-white/80 mb-4">
                <strong>CTL</strong> stands for <strong>Circuit Total Limitation</strong>. It is a UL requirement (under UL 67) that limits the maximum number of circuits (poles) a panelboard can accommodate. The CTL concept has been required for residential panels since the 1965 NEC cycle, and it is enforced through physical rejection features built into the panel&apos;s bus bar design.
              </p>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How CTL Works</h3>
              <p className="text-white/80 mb-4">
                A CTL panelboard has a <strong>maximum number of circuits</strong> it can support, which is printed on the panel&apos;s label. For example, a &ldquo;20-space, 40-circuit&rdquo; panel has 20 physical breaker spaces and is listed for up to 40 circuits. This means up to 20 of those spaces can accept tandem breakers (each providing 2 circuits), for a maximum of 40 circuits total.
              </p>
              <p className="text-white/80 mb-4">
                However, most panels do <strong>not</strong> allow tandems in every slot. The panel&apos;s bus bar includes physical <strong>rejection features</strong> &mdash; raised tabs, notches, or shaped stabs &mdash; that prevent tandem breakers from being installed in non-approved positions. Only slots specifically designed to accept tandems will allow the tandem breaker to physically clip onto the bus bar.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Example: 30-Space, 30-Circuit Panel</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Spaces:</strong> 30</li>
                    <li><strong>Maximum circuits:</strong> 30</li>
                    <li><strong>Tandem slots:</strong> 0 (none allowed)</li>
                    <li>All positions have rejection tabs that prevent tandems</li>
                    <li>This panel can only accept full-size breakers</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Example: 20-Space, 40-Circuit Panel</h3>
                  <ul className="text-white/70 text-sm space-y-1">
                    <li><strong>Spaces:</strong> 20</li>
                    <li><strong>Maximum circuits:</strong> 40</li>
                    <li><strong>Tandem slots:</strong> Up to 20 (all slots may accept tandems)</li>
                    <li>No rejection tabs on bus stabs</li>
                    <li>Can use tandem breakers in all positions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Common Space/Circuit Configurations</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Panel Rating</th>
                        <th className="text-left py-2 px-3 text-white/60">Spaces</th>
                        <th className="text-left py-2 px-3 text-white/60">Max Circuits</th>
                        <th className="text-left py-2 px-3 text-white/60">Tandem Slots</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">20/20</td>
                        <td className="py-2 px-3 font-mono">20</td>
                        <td className="py-2 px-3 font-mono">20</td>
                        <td className="py-2 px-3 font-mono text-red-400">0</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">20/24</td>
                        <td className="py-2 px-3 font-mono">20</td>
                        <td className="py-2 px-3 font-mono">24</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">4</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">20/30</td>
                        <td className="py-2 px-3 font-mono">20</td>
                        <td className="py-2 px-3 font-mono">30</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">10</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">20/40</td>
                        <td className="py-2 px-3 font-mono">20</td>
                        <td className="py-2 px-3 font-mono">40</td>
                        <td className="py-2 px-3 font-mono text-green-400">20</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">30/30</td>
                        <td className="py-2 px-3 font-mono">30</td>
                        <td className="py-2 px-3 font-mono">30</td>
                        <td className="py-2 px-3 font-mono text-red-400">0</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">30/40</td>
                        <td className="py-2 px-3 font-mono">30</td>
                        <td className="py-2 px-3 font-mono">40</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">10</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">30/60</td>
                        <td className="py-2 px-3 font-mono">30</td>
                        <td className="py-2 px-3 font-mono">60</td>
                        <td className="py-2 px-3 font-mono text-green-400">30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-white/60 text-sm mt-3">The number of tandem slots = Maximum circuits &minus; Spaces. A 20/40 panel: 40 &minus; 20 = 20 tandem-eligible slots.</p>
              </div>
            </section>

            <section id="which-slots-accept-tandems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Which Slots Accept Tandems (Panel Listing)</h2>
              <p className="text-white/80 mb-4">
                The specific slots that accept tandem breakers vary by panel manufacturer and model. The <strong>only</strong> reliable way to determine which positions accept tandems is to check the <strong>panel&apos;s internal label</strong> or the <strong>wiring diagram</strong> printed inside the panel door. This label is required by the listing and is placed there during manufacturing.
              </p>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6 border border-orange-500/30">
                <h4 className="font-semibold text-orange-400 mb-3">How to Read the Panel Label</h4>
                <p className="text-white/70 mb-3">Look for one of these indicators on the panel&apos;s internal label:</p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>&ldquo;CTL&rdquo; or &ldquo;Circuit Total Limitation&rdquo;:</strong> Confirms the panel is CTL-rated with specific slot restrictions</li>
                  <li><strong>Diagram showing tandem-eligible positions:</strong> Often marked with a different color or symbol</li>
                  <li><strong>&ldquo;Class CTL&rdquo; followed by a number:</strong> The maximum number of single-pole circuits permitted</li>
                  <li><strong>Breaker model numbers accepted:</strong> Lists both standard and tandem breaker part numbers for the panel</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Tandem Slot Placement Patterns</h3>
              <p className="text-white/80 mb-4">
                While the exact configuration varies by model, manufacturers typically follow one of these general patterns for where tandems are allowed:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Center-Out Pattern</p>
                    <p className="text-white/60 text-sm">Tandems are allowed in the center slots of the panel (closest to the main breaker feed point) and standard-only slots are at the top and bottom. This is common in many older panels.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Bottom-Up Pattern</p>
                    <p className="text-white/60 text-sm">Tandems are allowed in the bottom slots of the panel, while the top slots closest to the main breaker are standard-only. Common in some Square D and Siemens panels.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">All Slots Pattern</p>
                    <p className="text-white/60 text-sm">On panels where the maximum circuit count is double the space count (e.g., 20/40), all slots typically accept tandems with no rejection features on any bus stab.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Alternating Pattern</p>
                    <p className="text-white/60 text-sm">Some panels alternate tandem-eligible and standard-only slots. This is less common but appears in certain legacy panel models.</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 rounded-xl p-6 my-6 border border-red-500/30">
                <h4 className="font-semibold text-red-400 mb-3">Never Modify the Bus Bar</h4>
                <p className="text-white/70">
                  Some installers attempt to file down, bend, or remove the rejection tabs on bus bars to force tandem breakers into non-approved slots. This is a <strong>serious code violation</strong> (NEC 110.3(B)), voids the panel&apos;s UL listing, creates a safety hazard, and will fail inspection. If you need more circuits than the panel allows, the correct solution is to install a sub-panel or upgrade the main panel.
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

            <section id="brand-compatibility" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Panel Brands &amp; Tandem Compatibility</h2>
              <p className="text-white/80 mb-4">
                Tandem breaker part numbers and compatibility vary significantly between manufacturers and even between panel models within the same brand. Using the wrong tandem breaker is a code violation and can create a fire hazard. Always match the breaker to the panel&apos;s listing. For detailed <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300 underline">panel troubleshooting guidance</Link>, see our dedicated guide.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Brand</th>
                      <th className="text-left py-3 px-4 text-white/60">Common Tandem Part Numbers</th>
                      <th className="text-left py-3 px-4 text-white/60">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Square D<br/><span className="text-white/50 text-xs font-normal">Homeline</span></td>
                      <td className="py-3 px-4 font-mono text-sm">HOMT1515, HOMT1520, HOMT2020</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Check panel label for CTL positions. Older HOM panels may not accept any tandems.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Square D<br/><span className="text-white/50 text-xs font-normal">QO</span></td>
                      <td className="py-3 px-4 font-mono text-sm">QOT1515, QOT1520, QOT2020</td>
                      <td className="py-3 px-4 text-white/60 text-xs">QO series tandems have a different form factor than Homeline. Not interchangeable.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Eaton<br/><span className="text-white/50 text-xs font-normal">BR/Cutler-Hammer</span></td>
                      <td className="py-3 px-4 font-mono text-sm">BD1515, BD1520, BD2020</td>
                      <td className="py-3 px-4 text-white/60 text-xs">BR-series panels with CTL. Eaton&apos;s CH-series does NOT accept tandem breakers.</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-semibold text-cyan-400">Siemens</td>
                      <td className="py-3 px-4 font-mono text-sm">Q1515, Q1520, Q2020</td>
                      <td className="py-3 px-4 text-white/60 text-xs">Check panel model. Siemens/Murray have compatibility differences between vintage panels.</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-cyan-400">GE</td>
                      <td className="py-3 px-4 font-mono text-sm">THQP115, THQP120, THQP215</td>
                      <td className="py-3 px-4 text-white/60 text-xs">GE uses &ldquo;thin&rdquo; or &ldquo;slim&rdquo; designation. THQP series for CTL-compliant tandems.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-3">Cross-Brand Compatibility Warning</h4>
                <p className="text-white/70">
                  Tandem breakers from one manufacturer <strong>must not</strong> be installed in another manufacturer&apos;s panel, even if they physically fit. Per NEC 110.3(B), breakers must be listed and labeled for use in the specific panel. &ldquo;Classified&rdquo; (UL-classified) breakers from certain manufacturers may be listed for use in other brands&apos; panels, but always verify the classification listing before installing.
                </p>
              </div>
            </section>

            <section id="when-not-to-use" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When NOT to Use Tandem Breakers</h2>
              <p className="text-white/80 mb-4">
                While tandem breakers are a legitimate solution for adding circuits, there are specific situations where they are either prohibited by code, impractical, or a poor choice. Understanding these limitations prevents code violations and ensures safe installations.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">240V Circuits</h4>
                  <p className="text-white/60 text-sm">
                    Tandem breakers provide two 120V circuits on the same phase. They <strong>cannot</strong> supply 240V loads (ranges, dryers, A/C units, water heaters). Use a proper double-pole breaker for 240V circuits.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">MWBC (Multi-Wire Branch Circuits)</h4>
                  <p className="text-white/60 text-sm">
                    Multi-wire branch circuits require conductors on opposite phases with a common trip. Tandem breakers share one phase and cannot provide common-trip protection. MWBCs require handle-tied double-pole breakers per NEC 210.4(B).
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Non-CTL or Restricted Slots</h4>
                  <p className="text-white/60 text-sm">
                    If the panel&apos;s label indicates a slot does not accept tandems, or if rejection features prevent physical installation, do not force a tandem into that position. The rejection feature exists to enforce the CTL circuit limit.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">AFCI/GFCI Protection Needs</h4>
                  <p className="text-white/60 text-sm">
                    Most tandem breakers do <strong>not</strong> include AFCI or GFCI protection. Where NEC requires arc-fault or ground-fault breaker protection (bedrooms, kitchens, bathrooms per NEC 210.12 and 210.8), standard tandem breakers cannot meet the requirement. Some manufacturers now offer AFCI tandem breakers, but availability is limited.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Panel at Maximum Circuit Rating</h4>
                  <p className="text-white/60 text-sm">
                    If every tandem-eligible slot already has a tandem breaker and the panel has reached its listed maximum circuit count, you cannot add more tandems. The solution is a sub-panel or panel upgrade.
                  </p>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h4 className="font-semibold text-red-400 mb-3">Circuits Over 30A</h4>
                  <p className="text-white/60 text-sm">
                    Tandem breakers are typically available only in 15A, 20A, and occasionally 30A ratings. Circuits requiring 40A, 50A, or higher (ranges, sub-panels, large appliances) require full-size breakers.
                  </p>
                </div>
              </div>
            </section>

            <section id="inspection-failures" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Inspection Failures Related to Tandems</h2>
              <p className="text-white/80 mb-4">
                Tandem breaker violations are one of the most common findings during electrical inspections, particularly on remodel and renovation work. Inspectors look specifically at tandem breaker installations because improper use is widespread. Here are the most frequent inspection failures:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">1. Tandems in Non-Approved Slots</h4>
                  <p className="text-white/70 text-sm">
                    The most common violation. Tandem breakers installed in bus positions that the panel&apos;s listing does not approve for tandems. This often occurs when someone has removed or filed down rejection tabs. Inspectors verify each tandem position against the panel&apos;s label.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">2. Exceeding Maximum Circuit Count</h4>
                  <p className="text-white/70 text-sm">
                    The total number of circuits (counting each tandem half as one circuit) exceeds the panel&apos;s listed maximum. For example, installing 42 circuits in a 20/40 panel. Inspectors count every pole in the panel, including tandem halves.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">3. Wrong Breaker Brand or Model</h4>
                  <p className="text-white/70 text-sm">
                    Tandem breakers from a different manufacturer installed in a panel they are not listed for. Even if the breaker physically fits, using a non-listed breaker violates NEC 110.3(B) and the panel&apos;s UL listing.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">4. Modified Rejection Features</h4>
                  <p className="text-white/70 text-sm">
                    Evidence that the bus bar rejection tabs have been bent, filed, or removed to accommodate tandem breakers in restricted slots. This voids the panel&apos;s UL listing and is an immediate failure.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">5. Missing Panel Label or Schedule</h4>
                  <p className="text-white/70 text-sm">
                    The panel&apos;s CTL label is missing, illegible, or has been painted over. Without the label, the inspector cannot verify which slots accept tandems and may require all tandems to be removed or the panel to be replaced. Proper <Link href="/blog/residential-load-calculations" className="text-purple-400 hover:text-purple-300 underline">residential load calculations</Link> must also be documented.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">6. Tandem Used Where AFCI Is Required</h4>
                  <p className="text-white/70 text-sm">
                    A standard tandem breaker used to feed a bedroom or other area where AFCI protection is required by NEC 210.12. Unless the specific tandem breaker model includes AFCI protection, this is a code violation.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Pre-Inspection Checklist for Tandem Breakers</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Panel label is visible and legible &mdash; verify CTL rating</li>
                  <li>&#9744; Count all circuits (including tandem halves) &mdash; verify total does not exceed maximum</li>
                  <li>&#9744; Each tandem is in a position approved by the panel&apos;s label</li>
                  <li>&#9744; All tandem breakers are the correct brand and model for the panel</li>
                  <li>&#9744; No rejection features have been modified or removed</li>
                  <li>&#9744; AFCI/GFCI requirements are met for all circuits per NEC 210.12 and 210.8</li>
                  <li>&#9744; Panel schedule is updated to reflect tandem breaker circuit assignments</li>
                  <li>&#9744; No tandems used for 240V loads or MWBCs</li>
                </ul>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I put a tandem breaker in any slot of my panel?</h3>
                  <p className="text-white/70 text-sm">
                    No. You can only install tandem breakers in slots that are specifically approved by the panel&apos;s listing. Check the label inside the panel door or on the panel&apos;s interior. The label shows which positions accept tandems. Slots with rejection tabs on the bus bar will physically prevent a tandem from being installed (unless someone has improperly modified them).
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How many tandem breakers can I install in my panel?</h3>
                  <p className="text-white/70 text-sm">
                    The maximum number of tandems depends on your panel&apos;s space/circuit rating. Subtract the number of spaces from the maximum circuit count, then divide by 2 (since each tandem adds one extra circuit per slot). For a 20-space, 40-circuit panel: (40 &minus; 20) = 20 additional circuits, meaning all 20 slots can accept tandems. For a 30-space, 40-circuit panel: only 10 positions can accept tandems.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Are tandem breakers safe?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, when installed correctly in approved panel slots and within the panel&apos;s circuit limit. Tandem breakers are UL-listed products that undergo the same safety testing as standard breakers. Safety concerns arise only when they are installed in non-approved positions, when rejection features are modified, or when the panel&apos;s maximum circuit count is exceeded.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I use a tandem breaker for a 240V circuit?</h3>
                  <p className="text-white/70 text-sm">
                    No. A tandem breaker provides two separate 120V circuits on the same phase (bus leg). For 240V, you need a double-pole breaker that connects to both bus legs. Some manufacturers make <strong>quad breakers</strong> that combine a double-pole section with two single-pole tandem sections in a two-slot package, which can provide one 240V circuit and two 120V circuits.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">My panel is full. Should I use tandems or install a sub-panel?</h3>
                  <p className="text-white/70 text-sm">
                    If your panel has tandem-eligible slots available and the circuits you need to add are 120V, 15A or 20A circuits that don&apos;t require AFCI/GFCI breaker protection, tandems are a cost-effective solution. If your panel has no tandem-eligible slots remaining, or if you need multiple 240V circuits, AFCI-protected circuits, or significant additional capacity, a sub-panel is the better choice.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What does CTL mean on my panel?</h3>
                  <p className="text-white/70 text-sm">
                    CTL stands for <strong>Circuit Total Limitation</strong>. It means the panel has been manufactured with physical rejection features that limit the total number of circuits to the panel&apos;s rated maximum. The CTL system uses tabs or notches on the bus bar that prevent tandem breakers from being installed in restricted positions, enforcing the circuit count limit.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Are AFCI tandem breakers available?</h3>
                  <p className="text-white/70 text-sm">
                    Some manufacturers now produce AFCI-rated tandem breakers, though selection is limited compared to standard tandems. Eaton, Siemens, and Square D offer AFCI tandem models for specific panel lines. These are significantly more expensive than standard tandems ($60-$100+ each vs $8-$15 for standard tandems) and may not be available for all panel models.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can an inspector make me remove tandem breakers?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, if the tandems are installed in violation of the NEC or the panel&apos;s listing. Common reasons include: installed in non-approved slots, exceeding maximum circuit count, wrong breaker brand, or modified rejection features. The inspector will require correction before passing the inspection. If the tandems are properly installed per the panel&apos;s listing, the inspector cannot require their removal.
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
                <Link href="/blog/nec-article-240-overcurrent-protection" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">NEC Article 240: Overcurrent Protection</h3>
                </Link>
                <Link href="/blog/electrical-panel-troubleshooting" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-cyan-400 text-sm">Troubleshooting</span>
                  <h3 className="font-semibold mt-2">Electrical Panel Troubleshooting</h3>
                </Link>
                <Link href="/blog/panel-schedule-labeling-nec-408" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">Panel Schedule &amp; Labeling (NEC 408)</h3>
                </Link>
                <Link href="/blog/sub-panel-installation-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Sub-Panel Installation Guide</h3>
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
