import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Fire Prevention: Common Causes & NEC Code Requirements",
  description: "Complete guide to electrical fire prevention covering top causes of electrical fires including arc faults, overloaded circuits, loose connections, and damaged wiring. Learn AFCI protection requirements, NEC code requirements for fire prevention, proper breaker sizing per NEC 240, and a prevention checklist every electrician should follow.",
  keywords: [
    "electrical fire prevention",
    "electrical fire causes",
    "arc fault fire",
    "overloaded circuit fire",
    "AFCI fire prevention",
    "electrical fire statistics",
    "loose connection fire",
    "extension cord fire",
    "electrical fire safety",
    "preventing electrical fires"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-fire-prevention-guide",
  },
  openGraph: {
    title: "Electrical Fire Prevention: Common Causes & NEC Code Requirements - Ampora",
    description: "Learn the top causes of electrical fires and the NEC code requirements that prevent them. Covers AFCI protection, overloaded circuits, loose connections, and a complete prevention checklist.",
    url: "https://amporalabs.com/blog/electrical-fire-prevention-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="Electrical fire prevention icons showing hazards and protection devices">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* Left: House with fire hazard indicators */}
      <g transform="translate(30, 25)">
        {/* House outline */}
        <polygon points="60,20 10,55 110,55" fill="none" stroke="#ef4444" strokeWidth="2"/>
        <rect x="20" y="55" width="80" height="60" fill="none" stroke="#ef4444" strokeWidth="2"/>

        {/* Electrical panel inside */}
        <rect x="40" y="62" width="40" height="45" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="50" y1="70" x2="50" y2="78" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="60" y1="70" x2="60" y2="78" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="70" y1="70" x2="70" y2="78" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="50" y1="82" x2="50" y2="90" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="60" y1="82" x2="60" y2="90" stroke="#f59e0b" strokeWidth="2"/>
        <line x1="70" y1="82" x2="70" y2="90" stroke="#f59e0b" strokeWidth="2"/>

        {/* Fire flames */}
        <path d="M95,40 Q100,25 105,40 Q110,30 108,45 Q112,35 110,50 Q105,42 100,50 Q95,42 95,40Z" fill="#ef4444" fillOpacity="0.7"/>
        <path d="M100,42 Q103,34 106,42 Q108,36 106,48 Q103,42 100,48 Q98,42 100,42Z" fill="#fbbf24" fillOpacity="0.8"/>

        {/* Label */}
        <text x="60" y="130" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">FIRE HAZARDS</text>
      </g>

      {/* Center: Cause icons */}
      <g transform="translate(155, 22)">
        <text x="50" y="10" textAnchor="middle" fill="#f59e0b" fontSize="7" fontWeight="bold">COMMON CAUSES</text>

        {/* Arc fault */}
        <g transform="translate(0, 18)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
          <path d="M10,5 L16,11 L12,11 L18,17" stroke="#ef4444" strokeWidth="1.5" fill="none"/>
          <text x="26" y="9" fill="#ef4444" fontSize="5.5" fontWeight="bold">Arc Faults</text>
          <text x="26" y="17" fill="#9ca3af" fontSize="4">Series &amp; parallel arcing</text>
        </g>

        {/* Overloaded circuits */}
        <g transform="translate(0, 44)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1"/>
          <circle cx="12" cy="11" r="6" fill="none" stroke="#f97316" strokeWidth="1.5"/>
          <text x="12" y="14" textAnchor="middle" fill="#f97316" fontSize="8" fontWeight="bold">!</text>
          <text x="26" y="9" fill="#f97316" fontSize="5.5" fontWeight="bold">Overloaded Circuits</text>
          <text x="26" y="17" fill="#9ca3af" fontSize="4">Exceeding ampacity</text>
        </g>

        {/* Loose connections */}
        <g transform="translate(0, 70)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#eab308" fillOpacity="0.15" stroke="#eab308" strokeWidth="1"/>
          <line x1="6" y1="11" x2="11" y2="11" stroke="#eab308" strokeWidth="2"/>
          <line x1="15" y1="11" x2="20" y2="11" stroke="#eab308" strokeWidth="2" strokeDasharray="2,1"/>
          <text x="26" y="9" fill="#eab308" fontSize="5.5" fontWeight="bold">Loose Connections</text>
          <text x="26" y="17" fill="#9ca3af" fontSize="4">High-resistance joints</text>
        </g>

        {/* Old wiring */}
        <g transform="translate(0, 96)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1"/>
          <path d="M7,7 Q13,7 13,11 Q13,15 19,15" stroke="#a855f7" strokeWidth="1.5" fill="none"/>
          <text x="26" y="9" fill="#a855f7" fontSize="5.5" fontWeight="bold">Damaged Wiring</text>
          <text x="26" y="17" fill="#9ca3af" fontSize="4">Degraded insulation</text>
        </g>

        {/* Extension cords */}
        <g transform="translate(0, 122)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#06b6d4" fillOpacity="0.15" stroke="#06b6d4" strokeWidth="1"/>
          <rect x="7" y="7" width="12" height="8" rx="1" fill="none" stroke="#06b6d4" strokeWidth="1"/>
          <line x1="10" y1="10" x2="10" y2="12" stroke="#06b6d4" strokeWidth="1"/>
          <line x1="14" y1="10" x2="14" y2="12" stroke="#06b6d4" strokeWidth="1"/>
          <text x="26" y="9" fill="#06b6d4" fontSize="5.5" fontWeight="bold">Extension Cord Misuse</text>
          <text x="26" y="17" fill="#9ca3af" fontSize="4">Permanent use violations</text>
        </g>
      </g>

      {/* Right: Protection shield / AFCI breaker */}
      <g transform="translate(280, 22)">
        <text x="50" y="10" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">PREVENTION</text>

        {/* Shield icon */}
        <g transform="translate(25, 18)">
          <path d="M25,5 L45,15 L45,45 Q45,65 25,75 Q5,65 5,45 L5,15 Z" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="1.5"/>
          <text x="25" y="38" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">NEC</text>
          <text x="25" y="50" textAnchor="middle" fill="#22c55e" fontSize="6">CODE</text>
        </g>

        {/* AFCI label */}
        <g transform="translate(0, 100)">
          <rect x="5" y="0" width="90" height="18" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="50" y="8" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">AFCI Protection</text>
          <text x="50" y="15" textAnchor="middle" fill="#9ca3af" fontSize="4.5">NEC 210.12</text>
        </g>

        {/* Breaker sizing label */}
        <g transform="translate(0, 124)">
          <rect x="5" y="0" width="90" height="18" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="50" y="8" textAnchor="middle" fill="#22c55e" fontSize="6" fontWeight="bold">Proper OCP Sizing</text>
          <text x="50" y="15" textAnchor="middle" fill="#9ca3af" fontSize="4.5">NEC Article 240</text>
        </g>
      </g>
    </svg>
  );
}

export default function ElectricalFirePreventionGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Fire Prevention Guide", url: "https://amporalabs.com/blog/electrical-fire-prevention-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Fire Prevention: Common Causes & NEC Code Requirements"
          description="Complete guide to electrical fire prevention covering top causes, AFCI protection, NEC code requirements, proper breaker sizing, and a prevention checklist for electricians."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/electrical-fire-prevention-guide"
          wordCount={5200}
          keywords={["electrical fire prevention", "electrical fire causes", "AFCI fire prevention", "NEC fire safety", "preventing electrical fires"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Fire Prevention Guide</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-rose-600/20 text-rose-300 text-sm font-medium rounded-full">
                Safety
              </span>
              <span className="text-white/40 text-sm">18 min read</span>
              <span className="text-white/40 text-sm">March 4, 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Electrical Fire Prevention: Common Causes &amp; NEC Code Requirements
            </h1>
            <p className="text-xl text-white/70">
              Electrical fires cause billions of dollars in property damage and hundreds of deaths every year in the United States. This guide covers the most common causes of electrical fires, the NEC code requirements designed to prevent them, AFCI protection, proper overcurrent protection sizing, and a comprehensive prevention checklist that every electrician and homeowner should follow.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-amber-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Fire Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  If you suspect an electrical fire hazard in your home or workplace, contact a licensed electrician immediately. Never attempt to repair damaged wiring, overloaded panels, or burning electrical equipment yourself. If an electrical fire occurs, evacuate and call 911. Never use water on an electrical fire.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#fire-statistics" className="hover:text-purple-400">Electrical Fire Statistics</a></li>
              <li><a href="#top-causes" className="hover:text-purple-400">Top Causes of Electrical Fires</a></li>
              <li><a href="#arc-faults" className="hover:text-purple-400">Arc Faults and How AFCI Prevents Them</a></li>
              <li><a href="#overloaded-circuits" className="hover:text-purple-400">Overloaded Circuits</a></li>
              <li><a href="#loose-connections" className="hover:text-purple-400">Loose Connections</a></li>
              <li><a href="#damaged-wiring" className="hover:text-purple-400">Damaged and Deteriorated Wiring</a></li>
              <li><a href="#extension-cords" className="hover:text-purple-400">Improper Use of Extension Cords</a></li>
              <li><a href="#old-wiring" className="hover:text-purple-400">Old or Outdated Wiring Systems</a></li>
              <li><a href="#nec-requirements" className="hover:text-purple-400">NEC Code Requirements That Prevent Fires</a></li>
              <li><a href="#afci-requirements" className="hover:text-purple-400">AFCI Protection Requirements (NEC 210.12)</a></li>
              <li><a href="#breaker-sizing" className="hover:text-purple-400">Proper Fuse and Breaker Sizing (NEC 240)</a></li>
              <li><a href="#thermal-insulation" className="hover:text-purple-400">Thermal Insulation and Wiring</a></li>
              <li><a href="#smoke-detectors" className="hover:text-purple-400">Smoke Detector Placement</a></li>
              <li><a href="#commercial-prevention" className="hover:text-purple-400">Commercial Fire Prevention</a></li>
              <li><a href="#what-to-do" className="hover:text-purple-400">What to Do If an Electrical Fire Occurs</a></li>
              <li><a href="#prevention-checklist" className="hover:text-purple-400">Prevention Checklist</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="fire-statistics" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Fire Statistics</h2>
              <p className="text-white/80 mb-4">
                Electrical fires remain one of the leading causes of structure fires in the United States. Understanding the scale of the problem helps underscore why proper electrical installation, maintenance, and code compliance are critical for fire prevention.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-rose-400 mb-3">Electrical Fires by the Numbers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-rose-400">46,700+</p>
                    <p className="text-white/60 text-sm">Home electrical fires per year in the U.S.</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">390+</p>
                    <p className="text-white/60 text-sm">Deaths from electrical fires annually</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">1,330+</p>
                    <p className="text-white/60 text-sm">Injuries from electrical fires annually</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">$1.5B+</p>
                    <p className="text-white/60 text-sm">Property damage from electrical fires per year</p>
                  </div>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                According to the National Fire Protection Association (NFPA), electrical distribution and lighting equipment is the third-leading cause of home structure fires. The Electrical Safety Foundation International (ESFI) reports that <strong>electrical fires account for approximately 6.3% of all residential fires</strong>, yet they cause a disproportionate share of fire deaths because they often ignite inside walls where they go undetected until they have spread significantly.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-rose-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-rose-400 mb-3">Where Electrical Fires Start</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Bedrooms:</strong> 15% of home electrical fires</li>
                    <li><strong>Attics &amp; crawl spaces:</strong> 13%</li>
                    <li><strong>Living rooms:</strong> 11%</li>
                    <li><strong>Kitchens:</strong> 10%</li>
                    <li><strong>Garages &amp; carports:</strong> 8%</li>
                    <li><strong>Laundry rooms:</strong> 6%</li>
                  </ul>
                </div>
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">Peak Times for Electrical Fires</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>December &amp; January:</strong> Highest months due to heating and holiday lighting</li>
                    <li><strong>Evenings (5-9 PM):</strong> Peak usage period</li>
                    <li><strong>Winter months:</strong> Space heaters and increased electrical loads</li>
                    <li><strong>Homes 40+ years old:</strong> 2x higher fire rate than newer homes</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The critical takeaway is that most electrical fires are <strong>preventable</strong>. Proper installation per the NEC, regular maintenance, and modern protective devices like AFCIs can eliminate the vast majority of electrical fire hazards before they ever become dangerous.
              </p>
            </section>

            <section id="top-causes" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Top Causes of Electrical Fires</h2>
              <p className="text-white/80 mb-4">
                Electrical fires originate from a limited number of root causes. Understanding these causes is the first step in prevention. The following sections break down each major cause in detail, explaining the mechanism, warning signs, and relevant NEC code requirements.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/20 text-center">
                  <p className="text-3xl font-bold text-red-400 mb-1">35%</p>
                  <p className="text-white/60 text-sm">Arc faults &amp; wiring failures</p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20 text-center">
                  <p className="text-3xl font-bold text-orange-400 mb-1">25%</p>
                  <p className="text-white/60 text-sm">Overloaded circuits &amp; equipment</p>
                </div>
                <div className="bg-yellow-900/20 rounded-xl p-4 border border-yellow-500/20 text-center">
                  <p className="text-3xl font-bold text-yellow-400 mb-1">20%</p>
                  <p className="text-white/60 text-sm">Loose or corroded connections</p>
                </div>
              </div>
            </section>

            <section id="arc-faults" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Arc Faults and How AFCI Prevents Them</h2>
              <p className="text-white/80 mb-4">
                An <strong>arc fault</strong> occurs when electrical current flows through an unintended path, jumping across a gap in damaged, deteriorated, or improperly installed wiring. Unlike a short circuit or ground fault, arc faults can occur at relatively low current levels that are too small to trip a standard circuit breaker, yet they generate enough heat (up to <strong>10,000&deg;F</strong>) to ignite surrounding combustible materials like wood framing, insulation, or fabric.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Series Arc Fault</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Occurs in a single conductor when the wire is damaged or a connection becomes loose. Current arcs across the break in the conductor. Series arcs are limited by the load impedance, so they typically carry less current than the circuit&apos;s rating &mdash; making them invisible to standard breakers.
                  </p>
                  <p className="text-white/60 text-sm"><strong>Examples:</strong> Nail through a wire, broken conductor inside insulation, loose terminal screw</p>
                </div>
                <div className="bg-orange-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Parallel Arc Fault</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Occurs between two conductors (hot-to-neutral or hot-to-ground) when insulation breaks down. Parallel arcs can draw significantly more current because they bypass the load, though the intermittent nature of arcing may prevent sustained current high enough to trip a breaker quickly.
                  </p>
                  <p className="text-white/60 text-sm"><strong>Examples:</strong> Chafed wire insulation, rodent damage, pinched cable behind drywall</p>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">How AFCI Circuit Breakers Work</h3>
              <p className="text-white/80 mb-4">
                <strong>Arc-Fault Circuit Interrupters (AFCIs)</strong> use electronic circuitry to monitor the current waveform on the circuit. They detect the unique electrical signatures of dangerous arcing &mdash; characterized by irregular, high-frequency current patterns &mdash; and trip the breaker before the arc can generate enough heat to start a fire. For more details on AFCI vs. GFCI differences and when each is required, see our guide on <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI vs. AFCI Protection Requirements</Link>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">AFCI Detection Capabilities</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Series arcing:</strong> Detects characteristic current interruptions and re-strikes in a single conductor</li>
                  <li><strong>Parallel arcing:</strong> Detects intermittent high-current spikes between conductors</li>
                  <li><strong>Ground arcing:</strong> Detects current leakage to ground through an arc path</li>
                  <li><strong>Combination AFCI:</strong> Current NEC requirement &mdash; detects both series and parallel arc faults</li>
                </ul>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">AFCI Effectiveness</h4>
                <p className="text-white/70">
                  Studies by the CPSC (Consumer Product Safety Commission) estimate that <strong>AFCI protection could prevent approximately 50-75% of electrical fires</strong> that originate in branch circuit wiring. The technology specifically targets the arcing conditions that standard breakers and fuses cannot detect, making it one of the most significant fire prevention advances in the NEC.
                </p>
              </div>
            </section>

            <section id="overloaded-circuits" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Overloaded Circuits</h2>
              <p className="text-white/80 mb-4">
                An <strong>overloaded circuit</strong> occurs when more current flows through a conductor than its rated ampacity allows. The excess current generates heat in the conductor, connections, and surrounding insulation. Over time, this heat degrades wire insulation, weakens connections, and can eventually ignite combustible materials in walls, ceilings, and junction boxes.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Common Overload Scenarios</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Too many devices on one circuit:</strong> Multiple high-wattage appliances (space heaters, hair dryers, microwaves) on a single 15A or 20A branch circuit</li>
                  <li><strong>Daisy-chained power strips:</strong> Plugging power strips into other power strips defeats built-in overload protection and creates cumulative current loads</li>
                  <li><strong>Oversized breakers:</strong> Installing a 20A breaker on a 14 AWG circuit (rated for 15A) allows dangerous overload without tripping. Proper breaker sizing per <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC Article 240 overcurrent protection</Link> requirements prevents this</li>
                  <li><strong>Degraded connections:</strong> High-resistance connections reduce effective circuit capacity while generating localized heat</li>
                  <li><strong>Undersized wiring in older homes:</strong> Original 14 AWG or even 16 AWG wiring serving modern electrical loads</li>
                </ul>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Warning Signs of Overloaded Circuits</h3>
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20">
                  <p className="font-semibold text-orange-400 mb-1">Frequently Tripping Breakers</p>
                  <p className="text-white/60 text-sm">A breaker that trips repeatedly is doing its job &mdash; it&apos;s detecting an overcurrent condition. The solution is to redistribute loads, not replace the breaker with a larger one.</p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20">
                  <p className="font-semibold text-orange-400 mb-1">Warm or Discolored Outlets</p>
                  <p className="text-white/60 text-sm">Outlets or cover plates that feel warm to the touch indicate excess current flow or a high-resistance connection. Discoloration or melting is a critical warning sign.</p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20">
                  <p className="font-semibold text-orange-400 mb-1">Flickering or Dimming Lights</p>
                  <p className="text-white/60 text-sm">Lights that dim when large appliances start may indicate the circuit is approaching its capacity limit or has a loose connection in the circuit.</p>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-4 border border-orange-500/20">
                  <p className="font-semibold text-orange-400 mb-1">Burning Smell or Buzzing</p>
                  <p className="text-white/60 text-sm">A burning smell from an outlet, switch, or panel is an emergency. De-energize the circuit immediately and have a licensed electrician investigate.</p>
                </div>
              </div>
            </section>

            <section id="loose-connections" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Loose Connections</h2>
              <p className="text-white/80 mb-4">
                <strong>Loose or high-resistance electrical connections</strong> are one of the most insidious causes of electrical fires because they generate heat gradually over months or years, often hidden behind walls, in junction boxes, or inside electrical panels. A loose connection creates a point of increased electrical resistance, and by Ohm&apos;s law (P = I&sup2;R), even a small increase in resistance generates significant heat at normal operating current.
              </p>

              <div className="bg-yellow-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-yellow-400 mb-3">The Heating Cycle of Loose Connections</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">1</span>
                    <p className="text-white/70 text-sm">Connection loosens due to vibration, thermal cycling, or improper installation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">2</span>
                    <p className="text-white/70 text-sm">Increased resistance generates localized heat, oxidizing the conductor surface</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">3</span>
                    <p className="text-white/70 text-sm">Oxidation further increases resistance, creating a positive feedback loop</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-yellow-600 text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5">4</span>
                    <p className="text-white/70 text-sm">Temperatures escalate until insulation, wire jackets, or surrounding materials ignite</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Common Locations for Loose Connections</h3>
              <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                <li><strong>Panel bus bar connections:</strong> Where branch circuit conductors land on breakers or the neutral/ground bars</li>
                <li><strong>Wire nuts in junction boxes:</strong> Improperly twisted or undersized wire connectors</li>
                <li><strong>Backstab receptacles:</strong> Push-in connections on outlets lose tension over time and are a leading cause of loose-connection fires</li>
                <li><strong>Aluminum wiring connections:</strong> Aluminum expands and contracts more than copper, causing connections to work loose over thermal cycles</li>
                <li><strong>Splices inside walls:</strong> Code violations where splices are made without junction boxes</li>
                <li><strong>Service entrance connections:</strong> High-current connections at the meter base and main panel</li>
              </ul>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Prevention: Proper Termination Techniques</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Use screw terminals</strong> instead of backstab connections on receptacles and switches &mdash; wrap wire clockwise around the screw</li>
                  <li><strong>Torque connections to specification</strong> using a torque screwdriver, especially on panel breaker and lug connections</li>
                  <li><strong>Use anti-oxidant compound</strong> on all aluminum conductor connections (required by NEC)</li>
                  <li><strong>Use listed connectors</strong> rated for the conductor material (AL/CU or CO/ALR rated devices for aluminum)</li>
                  <li><strong>Schedule infrared thermography inspections</strong> to identify hot spots in panels and equipment before they become dangerous</li>
                </ul>
              </div>
            </section>

            <section id="damaged-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Damaged and Deteriorated Wiring</h2>
              <p className="text-white/80 mb-4">
                Physical damage to electrical wiring is a direct pathway to electrical fires. When the insulation on a conductor is compromised, the conductor is exposed to surrounding materials, creating conditions for arcing, short circuits, and ground faults that can ignite nearby combustibles.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-purple-400 mb-3">Physical Damage Sources</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Nails and screws:</strong> Penetrating wires during construction or hanging items</li>
                    <li><strong>Rodent damage:</strong> Mice and rats gnaw through wire insulation</li>
                    <li><strong>Pinched cables:</strong> Wires crushed behind drywall or under staples</li>
                    <li><strong>Door and window frames:</strong> Cords run through closeable openings</li>
                    <li><strong>Furniture:</strong> Cords pinched under legs or compressed against walls</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Insulation Degradation</h3>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Heat exposure:</strong> Wiring near heat sources (recessed lights, steam pipes)</li>
                    <li><strong>UV exposure:</strong> NM cable (Romex) exposed to sunlight degrades rapidly</li>
                    <li><strong>Chemical exposure:</strong> Solvents, cleaners, or atmospheric conditions</li>
                    <li><strong>Age:</strong> Insulation materials become brittle after 30-50 years</li>
                    <li><strong>Overheating history:</strong> Past overload events weaken insulation permanently</li>
                  </ul>
                </div>
              </div>

              <p className="text-white/80 mb-4">
                The NEC addresses damaged wiring protection through requirements for nail plates (NEC 300.4), cable protection in exposed locations, proper support intervals, and <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">inspection requirements</Link> that catch damage before it becomes a fire hazard.
              </p>
            </section>

            <section id="extension-cords" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Improper Use of Extension Cords</h2>
              <p className="text-white/80 mb-4">
                Extension cords are designed for <strong>temporary use only</strong> and should never be used as permanent wiring. The CPSC estimates that extension cords are involved in approximately <strong>3,300 residential fires per year</strong>, causing 50 deaths and 270 injuries annually. Misuse of extension cords is one of the most common and preventable causes of electrical fires.
              </p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Dangerous Extension Cord Practices</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Running cords under rugs or carpets:</strong> Traps heat and prevents air cooling, leading to insulation failure and fire</li>
                  <li><strong>Daisy-chaining multiple extension cords:</strong> Increases resistance and voltage drop, generating excess heat along the entire length</li>
                  <li><strong>Using indoor-rated cords outdoors:</strong> Indoor cords lack moisture and UV protection, leading to rapid insulation breakdown</li>
                  <li><strong>Overloading cord capacity:</strong> Using a light-duty 16 AWG extension cord for a 1500W space heater (draws 12.5A on a cord rated for 10A)</li>
                  <li><strong>Permanent installation:</strong> Running extension cords through walls, ceilings, floors, or doorways as permanent wiring</li>
                  <li><strong>Damaged cords:</strong> Continuing to use cords with frayed insulation, exposed conductors, or damaged plugs</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">NEC Extension Cord Requirements</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>NEC 400.12:</strong> Flexible cords and cables shall not be used as a substitute for fixed wiring</li>
                  <li><strong>NEC 400.12(1):</strong> Shall not be run through holes in walls, ceilings, or floors</li>
                  <li><strong>NEC 400.12(2):</strong> Shall not be run through doorways, windows, or similar openings</li>
                  <li><strong>NEC 400.12(3):</strong> Shall not be attached to building surfaces (no staples, nails, or clips)</li>
                  <li><strong>NEC 400.12(4):</strong> Shall not be concealed behind walls, floors, or ceilings</li>
                  <li><strong>NEC 400.12(5):</strong> Shall not be installed in raceways (except as specifically permitted)</li>
                </ul>
              </div>
            </section>

            <section id="old-wiring" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Old or Outdated Wiring Systems</h2>
              <p className="text-white/80 mb-4">
                Homes with wiring systems installed before modern code requirements carry significantly higher fire risk. The NEC has evolved dramatically over the past several decades to address fire hazards that were not fully understood when these older systems were installed. For a detailed look at one of the most hazardous legacy wiring types, see our guide on <Link href="/blog/knob-and-tube-wiring-guide" className="text-purple-400 hover:text-purple-300">knob-and-tube wiring</Link>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Wiring Era</th>
                      <th className="text-left py-3 px-4 text-white/60">System Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Fire Risk Factors</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-red-400">Pre-1950</td>
                      <td className="py-3 px-4">Knob-and-tube</td>
                      <td className="py-3 px-4 text-white/60">No ground wire, no insulation contact allowed, brittle insulation, not rated for modern loads</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">1950s-1970s</td>
                      <td className="py-3 px-4">Aluminum branch wiring</td>
                      <td className="py-3 px-4 text-white/60">Loose connections from thermal expansion/contraction, oxidation, incompatible devices</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">1960s-1980s</td>
                      <td className="py-3 px-4">Federal Pacific panels</td>
                      <td className="py-3 px-4 text-white/60">Breakers that fail to trip on overcurrent, documented failure rates of 25-60%</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">1950s-1980s</td>
                      <td className="py-3 px-4">Zinsco/Sylvania panels</td>
                      <td className="py-3 px-4 text-white/60">Breakers fuse to bus bars, preventing tripping; aluminum bus bar connections deteriorate</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-green-400">Pre-2002</td>
                      <td className="py-3 px-4">Any wiring without AFCI</td>
                      <td className="py-3 px-4 text-white/60">No arc fault detection capability &mdash; arc faults in wiring go undetected</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">When to Consider a Wiring Upgrade</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>Home is more than <strong>40 years old</strong> and has never been rewired</li>
                  <li>Frequent breaker trips or blown fuses</li>
                  <li>Two-prong ungrounded outlets throughout the home</li>
                  <li>Federal Pacific, Zinsco, or Pushmatic panel installed</li>
                  <li>Knob-and-tube or aluminum branch circuit wiring present</li>
                  <li>Evidence of DIY or unlicensed electrical work</li>
                  <li>Insurance company requires upgrade</li>
                  <li>Planning a major renovation or addition</li>
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

            <section id="nec-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">NEC Code Requirements That Prevent Fires</h2>
              <p className="text-white/80 mb-4">
                The National Electrical Code is fundamentally a <strong>fire prevention document</strong>. While it also addresses electrocution hazards, the majority of its requirements exist to prevent electrical fires. Understanding which code sections target fire prevention helps electricians appreciate why specific requirements exist and ensures compliance that genuinely protects lives and property.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-rose-500">
                  <h4 className="font-semibold text-rose-400 mb-2">NEC 210.12 &mdash; AFCI Protection</h4>
                  <p className="text-white/70 text-sm">
                    Requires arc-fault circuit interrupter protection for all 120V, 15A and 20A branch circuits supplying outlets or devices in dwelling units. This is the NEC&apos;s primary defense against arc-fault fires and has expanded with each code cycle since its introduction in 1999.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-400 mb-2">NEC Article 240 &mdash; Overcurrent Protection</h4>
                  <p className="text-white/70 text-sm">
                    Requires that every ungrounded conductor be protected by an overcurrent device rated at or below the conductor&apos;s ampacity. This prevents overheating from excess current. The requirements for <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC fuse sizing and breaker selection</Link> ensure conductors never carry more current than they can safely handle.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-400 mb-2">NEC 110.14 &mdash; Electrical Connections</h4>
                  <p className="text-white/70 text-sm">
                    Requires that connections be made using approved methods and materials. Conductors must be properly spliced, joined, or terminated. This section prevents the loose and improper connections that lead to high-resistance heating and fire.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-400 mb-2">NEC 300.4 &mdash; Protection Against Physical Damage</h4>
                  <p className="text-white/70 text-sm">
                    Requires nail plates, proper cable routing, and physical protection for wiring methods in locations where they could be damaged by nails, screws, or other penetrations. This prevents the wire damage that leads to arcing and fire.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">NEC 334.80 &mdash; Ampacity of NM Cable</h4>
                  <p className="text-white/70 text-sm">
                    Requires ampacity derating when NM cable is installed in thermal insulation or bundled with other cables. This prevents overheating in conditions where heat dissipation is restricted &mdash; a common cause of fires in insulated attics and walls.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">NEC 314.16 &mdash; Box Fill Calculations</h4>
                  <p className="text-white/70 text-sm">
                    Limits the number of conductors in electrical boxes to prevent overcrowding. Overcrowded boxes create heat buildup, damaged insulation, and conditions where conductors contact each other or grounded surfaces.
                  </p>
                </div>
              </div>
            </section>

            <section id="afci-requirements" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">AFCI Protection Requirements (NEC 210.12)</h2>
              <p className="text-white/80 mb-4">
                AFCI requirements have expanded with every NEC code cycle since their initial introduction in the 1999 NEC. Understanding the current requirements and their history helps electricians ensure proper protection on both new construction and renovation projects.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">NEC Edition</th>
                      <th className="text-left py-3 px-4 text-white/60">AFCI Requirement</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-rose-400">1999 NEC</td>
                      <td className="py-3 px-4">Bedrooms only (branch/feeder type AFCI)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-orange-400">2008 NEC</td>
                      <td className="py-3 px-4">Bedrooms, combination type AFCI required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-yellow-400">2014 NEC</td>
                      <td className="py-3 px-4">Added kitchens and laundry rooms</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-green-400">2017 NEC</td>
                      <td className="py-3 px-4">Expanded to virtually all habitable rooms in dwelling units</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-cyan-400">2020/2023 NEC</td>
                      <td className="py-3 px-4">Maintained broad coverage; clarified dormitory, guest room, and patient care requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-display font-semibold mb-3 text-cyan-400">Current AFCI Requirements (NEC 210.12)</h3>
              <p className="text-white/80 mb-4">
                Under current NEC requirements, <strong>AFCI protection is required for all 120-volt, 15- and 20-ampere branch circuits</strong> supplying outlets or devices in the following areas of dwelling units:
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Kitchens</li>
                    <li>Family rooms</li>
                    <li>Dining rooms</li>
                    <li>Living rooms</li>
                    <li>Parlors</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Libraries</li>
                    <li>Dens</li>
                    <li>Bedrooms</li>
                    <li>Sunrooms</li>
                    <li>Recreation rooms</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <ul className="text-white/70 text-sm space-y-1">
                    <li>Closets</li>
                    <li>Hallways</li>
                    <li>Laundry areas</li>
                    <li>Similar rooms/areas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-green-400 mb-3">AFCI Protection Methods</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>AFCI breaker:</strong> Combination-type AFCI circuit breaker installed at the panel &mdash; most common method</li>
                  <li><strong>AFCI receptacle:</strong> Outlet-type AFCI at the first receptacle in the circuit, protecting downstream devices</li>
                  <li><strong>Combination approach:</strong> AFCI breaker for branch circuit wiring protection with AFCI receptacles for cord-connected loads</li>
                </ul>
              </div>
            </section>

            <section id="breaker-sizing" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Proper Fuse and Breaker Sizing (NEC 240)</h2>
              <p className="text-white/80 mb-4">
                Correct overcurrent protection sizing is a fundamental fire prevention requirement. An oversized breaker or fuse allows dangerous overload conditions to persist without tripping, while an undersized device causes nuisance tripping. The NEC provides clear rules for matching overcurrent protection to conductor ampacity. For a complete deep dive, see our article on <Link href="/blog/nec-article-240-overcurrent-protection" className="text-purple-400 hover:text-purple-300">NEC Article 240: Overcurrent Protection</Link>.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white/60">Conductor Size</th>
                      <th className="text-left py-3 px-4 text-white/60">Insulation Type</th>
                      <th className="text-left py-3 px-4 text-white/60">Ampacity (75&deg;C)</th>
                      <th className="text-left py-3 px-4 text-white/60">Max Breaker/Fuse</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">14 AWG copper</td>
                      <td className="py-3 px-4">THHN/THWN</td>
                      <td className="py-3 px-4 font-mono">20A*</td>
                      <td className="py-3 px-4 font-mono text-green-400">15A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">12 AWG copper</td>
                      <td className="py-3 px-4">THHN/THWN</td>
                      <td className="py-3 px-4 font-mono">25A*</td>
                      <td className="py-3 px-4 font-mono text-green-400">20A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">10 AWG copper</td>
                      <td className="py-3 px-4">THHN/THWN</td>
                      <td className="py-3 px-4 font-mono">35A</td>
                      <td className="py-3 px-4 font-mono text-green-400">30A</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4 font-mono text-cyan-400">8 AWG copper</td>
                      <td className="py-3 px-4">THHN/THWN</td>
                      <td className="py-3 px-4 font-mono">50A</td>
                      <td className="py-3 px-4 font-mono text-green-400">40A or 50A</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-mono text-cyan-400">6 AWG copper</td>
                      <td className="py-3 px-4">THHN/THWN</td>
                      <td className="py-3 px-4 font-mono">65A</td>
                      <td className="py-3 px-4 font-mono text-green-400">60A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/60 text-sm mb-4">*NEC 240.4(D) limits 14 AWG to 15A and 12 AWG to 20A overcurrent protection for branch circuits, regardless of the conductor&apos;s higher ampacity at 75&deg;C or 90&deg;C.</p>

              <div className="bg-red-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-red-400 mb-3">Dangerous Oversizing: A Common Fire Cause</h4>
                <p className="text-white/70 mb-3">
                  One of the most dangerous code violations is replacing a tripping breaker with a larger one instead of diagnosing the root cause. For example:
                </p>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Scenario:</strong> A 15A breaker trips repeatedly on a kitchen circuit</li>
                  <li><strong>Wrong fix:</strong> Replace with a 20A breaker (14 AWG wire is now unprotected above 15A)</li>
                  <li><strong>Result:</strong> Wire can now carry up to 20A continuously, exceeding its 15A safe limit. Heat builds in the wire, connections, and insulation until ignition occurs</li>
                  <li><strong>Correct fix:</strong> Add additional circuits, redistribute loads, or upgrade the wire to 12 AWG with a 20A breaker</li>
                </ul>
              </div>
            </section>

            <section id="thermal-insulation" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Thermal Insulation and Wiring</h2>
              <p className="text-white/80 mb-4">
                The interaction between building insulation and electrical wiring is a significant fire concern. When conductors are surrounded by thermal insulation, their ability to dissipate heat is dramatically reduced. The NEC addresses this through ampacity derating requirements and installation restrictions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-amber-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-amber-400 mb-3">NEC 334.80 &mdash; NM Cable in Insulation</h3>
                  <p className="text-white/60 text-sm mb-2">
                    When NM cable is installed in thermal insulation, the ampacity must be based on the <strong>60&deg;C conductor rating</strong>, even if the cable has 90&deg;C rated insulation. This derating accounts for the reduced heat dissipation.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>14 AWG NM: 15A (limited from 25A at 90&deg;C)</li>
                    <li>12 AWG NM: 20A (limited from 30A at 90&deg;C)</li>
                    <li>10 AWG NM: 30A (limited from 40A at 90&deg;C)</li>
                  </ul>
                </div>
                <div className="bg-red-900/30 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Recessed Lighting Hazards</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Recessed light fixtures (can lights) are a common fire hazard when installed near insulation. Non-IC (insulation contact) rated fixtures require a <strong>3-inch clearance</strong> from insulation on all sides.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li>IC-rated fixtures: Can contact insulation</li>
                    <li>Non-IC fixtures: 3&quot; clearance required</li>
                    <li>Use LED retrofits to eliminate heat</li>
                    <li>NEC 410.116 governs installation requirements</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Bundled Conductor Derating (NEC 310.15(C))</h4>
                <p className="text-white/70 text-sm mb-3">
                  When multiple current-carrying conductors are bundled together (more than 3), the NEC requires ampacity adjustment to prevent cumulative heat buildup:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Number of Conductors</th>
                        <th className="text-left py-2 px-3 text-white/60">Adjustment Factor</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">4-6 conductors</td>
                        <td className="py-2 px-3 font-mono text-cyan-400">80%</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">7-9 conductors</td>
                        <td className="py-2 px-3 font-mono text-yellow-400">70%</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3">10-20 conductors</td>
                        <td className="py-2 px-3 font-mono text-orange-400">50%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3">21-30 conductors</td>
                        <td className="py-2 px-3 font-mono text-red-400">45%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="smoke-detectors" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Smoke Detector Placement</h2>
              <p className="text-white/80 mb-4">
                While smoke detectors do not prevent electrical fires, they are critical for <strong>early detection</strong> that saves lives. The NEC works alongside the building code (NFPA 72, National Fire Alarm and Signaling Code) to ensure proper detector installation. For detailed wiring requirements, see our guide on <Link href="/blog/smoke-detector-wiring-requirements" className="text-purple-400 hover:text-purple-300">smoke detector wiring requirements</Link>.
              </p>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Smoke Detector Requirements for Dwelling Units</h4>
                <ul className="space-y-2 text-white/70">
                  <li><strong>Inside every sleeping room</strong> (bedroom)</li>
                  <li><strong>Outside each sleeping area</strong> within the immediate vicinity (hallway)</li>
                  <li><strong>On each level</strong> of the dwelling, including basements and habitable attics</li>
                  <li><strong>Interconnected:</strong> When one alarm sounds, all alarms in the dwelling must sound</li>
                  <li><strong>Hardwired with battery backup:</strong> Required in new construction (NEC provides the circuit)</li>
                  <li><strong>Ceiling mounted:</strong> At least 4 inches from any wall, or on a wall 4-12 inches from the ceiling</li>
                </ul>
              </div>

              <div className="bg-cyan-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Electrical Fire Detection Tip</h4>
                <p className="text-white/70 text-sm">
                  Standard ionization smoke detectors respond slowly to smoldering fires, which is the type most often caused by overheated wiring. <strong>Dual-sensor smoke detectors</strong> (combining ionization and photoelectric technology) or <strong>photoelectric-only detectors</strong> provide faster response to the smoldering, smoky conditions typical of electrical fires in walls and attics. Consider installing dual-sensor detectors, especially near electrical panels and in attics where wiring runs through insulation.
                </p>
              </div>
            </section>

            <section id="commercial-prevention" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Commercial Fire Prevention</h2>
              <p className="text-white/80 mb-4">
                Commercial and industrial facilities face additional electrical fire risks due to higher voltages, greater current loads, and more complex electrical systems. Fire prevention in commercial settings requires a combination of proper design, regular maintenance, and compliance with both the NEC and NFPA 70E.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-rose-500">
                  <h4 className="font-semibold text-rose-400 mb-2">Infrared Thermography Program</h4>
                  <p className="text-white/70 text-sm">
                    Regular infrared (IR) scanning of electrical panels, switchgear, transformers, and connections detects hot spots from loose connections, overloaded circuits, and failing components before they become fire hazards. NFPA 70B recommends annual IR surveys for critical electrical equipment.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-400 mb-2">Preventive Maintenance Schedule</h4>
                  <p className="text-white/70 text-sm">
                    NFPA 70B, Recommended Practice for Electrical Equipment Maintenance, provides maintenance schedules for all types of electrical equipment. Key fire prevention activities include retorquing connections, testing overcurrent protective devices, cleaning equipment, and verifying grounding integrity.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-400 mb-2">Electrical Room Housekeeping</h4>
                  <p className="text-white/70 text-sm">
                    NEC 110.26 requires clear working spaces around electrical equipment. Storing combustible materials near panels, switchgear, or transformers creates a direct fire risk. Electrical rooms must be kept clean, dry, and free of combustible storage.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-400 mb-2">Ground Fault Protection (NEC 230.95)</h4>
                  <p className="text-white/70 text-sm">
                    The NEC requires ground-fault protection of equipment (GFPE) for solidly grounded wye electrical services of more than 150V to ground but not exceeding 1000V phase-to-phase, rated 1000A or more. GFPE detects ground faults that could cause arcing and fire in the service equipment.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Overcurrent Coordination Study</h4>
                  <p className="text-white/70 text-sm">
                    A coordination study ensures that overcurrent protective devices operate in the correct sequence so that only the device nearest the fault trips. Poor coordination can leave upstream devices to clear faults at higher energy levels, increasing fire risk.
                  </p>
                </div>
              </div>
            </section>

            <section id="what-to-do" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">What to Do If an Electrical Fire Occurs</h2>
              <p className="text-white/80 mb-4">
                Knowing how to respond to an electrical fire can mean the difference between a minor incident and a catastrophe. Electrical fires require different handling than ordinary combustible fires because of the electrocution hazard and the risk of re-energization.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-red-900/30 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Evacuate Immediately</p>
                    <p className="text-white/60 text-sm">Get everyone out of the building. Do not stop to gather belongings. Close doors behind you to slow fire spread. Call 911 from outside the building.</p>
                  </div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Disconnect Power (If Safe)</p>
                    <p className="text-white/60 text-sm">If you can safely reach the main breaker or disconnect switch without approaching the fire, turn off power to the affected area. Do not touch any electrical equipment that may be energized or wet.</p>
                  </div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Never Use Water on an Electrical Fire</p>
                    <p className="text-white/60 text-sm">Water conducts electricity and can cause electrocution. If the fire is small and power has been disconnected, a Class C fire extinguisher (dry chemical, CO2, or clean agent) can be used. If power is still on, use only a Class C rated extinguisher.</p>
                  </div>
                </div>
                <div className="bg-red-900/30 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Do Not Re-enter the Building</p>
                    <p className="text-white/60 text-sm">Wait for the fire department to declare the building safe. Electrical fires can smolder inside walls for hours before re-igniting. Even after the visible fire is out, hidden hot spots can cause re-ignition.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Fire Extinguisher Classes for Electrical Fires</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left py-2 px-3 text-white/60">Class</th>
                        <th className="text-left py-2 px-3 text-white/60">Type</th>
                        <th className="text-left py-2 px-3 text-white/60">Safe for Electrical?</th>
                      </tr>
                    </thead>
                    <tbody className="text-white/80">
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-bold text-red-400">Class A</td>
                        <td className="py-2 px-3">Water / Foam</td>
                        <td className="py-2 px-3 text-red-400">NO &mdash; electrocution risk</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-bold text-orange-400">Class B</td>
                        <td className="py-2 px-3">CO2 / Dry Chemical</td>
                        <td className="py-2 px-3 text-yellow-400">CO2 and dry chemical types are safe</td>
                      </tr>
                      <tr className="border-b border-white/10">
                        <td className="py-2 px-3 font-bold text-green-400">Class C</td>
                        <td className="py-2 px-3">Electrical fires</td>
                        <td className="py-2 px-3 text-green-400">YES &mdash; designed for electrical fires</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 font-bold text-cyan-400">Class ABC</td>
                        <td className="py-2 px-3">Multi-purpose</td>
                        <td className="py-2 px-3 text-green-400">YES &mdash; includes Class C rating</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="prevention-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Electrical Fire Prevention Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this comprehensive checklist to evaluate electrical fire risk in any residential or commercial building. Regular inspection using this checklist, combined with a professional <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">electrical inspection</Link>, provides the best protection against electrical fires.
              </p>

              <div className="bg-rose-900/20 rounded-xl p-6 my-6 border border-rose-500/30">
                <h4 className="font-semibold text-rose-400 mb-4">Panel and Overcurrent Protection</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; All breakers/fuses properly sized for conductor ampacity</li>
                  <li>&#9744; No Federal Pacific, Zinsco, or recalled panels installed</li>
                  <li>&#9744; Panel not overcrowded &mdash; all knockouts in place, cover secure</li>
                  <li>&#9744; No double-tapped breakers (two wires on single-pole breaker terminal)</li>
                  <li>&#9744; All panel connections properly torqued</li>
                  <li>&#9744; AFCI protection installed on required circuits</li>
                  <li>&#9744; No evidence of overheating, discoloration, or melting in panel</li>
                </ul>
              </div>

              <div className="bg-orange-900/20 rounded-xl p-6 my-6 border border-orange-500/30">
                <h4 className="font-semibold text-orange-400 mb-4">Wiring and Connections</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; No exposed or damaged wiring visible</li>
                  <li>&#9744; All junction boxes covered and accessible</li>
                  <li>&#9744; No warm outlets, switches, or cover plates</li>
                  <li>&#9744; No burning smell from any electrical device or outlet</li>
                  <li>&#9744; All receptacles firmly attached to boxes &mdash; no loose or wobbly outlets</li>
                  <li>&#9744; Aluminum wiring properly terminated with CO/ALR devices or remediated</li>
                  <li>&#9744; No splices made outside of junction boxes</li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 rounded-xl p-6 my-6 border border-yellow-500/30">
                <h4 className="font-semibold text-yellow-400 mb-4">Extension Cords and Plug Strips</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; No extension cords used as permanent wiring</li>
                  <li>&#9744; No cords running under rugs, through walls, or through doorways</li>
                  <li>&#9744; No daisy-chained power strips or extension cords</li>
                  <li>&#9744; Extension cords properly rated for connected load</li>
                  <li>&#9744; No damaged cords in use (frayed, cracked, or taped insulation)</li>
                  <li>&#9744; Space heaters plugged directly into wall outlets (never extension cords)</li>
                </ul>
              </div>

              <div className="bg-green-900/20 rounded-xl p-6 my-6 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-4">Detection and Safety</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Working smoke detectors in every bedroom and on every level</li>
                  <li>&#9744; Smoke detectors tested monthly and batteries replaced annually</li>
                  <li>&#9744; Smoke detectors less than 10 years old (replace if older)</li>
                  <li>&#9744; Class ABC fire extinguisher readily accessible</li>
                  <li>&#9744; Family/occupant fire escape plan established and practiced</li>
                  <li>&#9744; Electrical system inspected by a licensed electrician within the last 5 years</li>
                </ul>
              </div>

              <div className="bg-cyan-900/20 rounded-xl p-6 my-6 border border-cyan-500/30">
                <h4 className="font-semibold text-cyan-400 mb-4">Commercial/Industrial Additional Items</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li>&#9744; Annual infrared thermography survey of electrical equipment</li>
                  <li>&#9744; Preventive maintenance program per NFPA 70B</li>
                  <li>&#9744; Electrical rooms free of combustible storage</li>
                  <li>&#9744; Working space clearances maintained per NEC 110.26</li>
                  <li>&#9744; Ground-fault protection of equipment (GFPE) functional and tested</li>
                  <li>&#9744; Overcurrent protective devices tested per manufacturer schedules</li>
                  <li>&#9744; Coordination study current and protective devices set accordingly</li>
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
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs. AFCI Protection: Requirements & Differences</h3>
                </Link>
                <Link href="/blog/electrical-safety-nfpa-70e" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">NFPA 70E Electrical Safety Guide</h3>
                </Link>
                <Link href="/blog/smoke-detector-wiring-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Installation</span>
                  <h3 className="font-semibold mt-2">Smoke Detector Wiring Requirements</h3>
                </Link>
                <Link href="/blog/knob-and-tube-wiring-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-amber-400 text-sm">Materials</span>
                  <h3 className="font-semibold mt-2">Knob-and-Tube Wiring: Hazards & Remediation Guide</h3>
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
