import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Electrical Safety for Homeowners: Warning Signs & When to Call an Electrician",
  description: "Complete homeowner guide to electrical safety warning signs including flickering lights, warm outlets, burning smells, buzzing sounds, and tripping breakers. Learn when to call an electrician immediately, how to prevent electrical fires, extension cord safety, and a home electrical safety checklist.",
  keywords: [
    "electrical safety homeowners",
    "electrical warning signs",
    "when to call electrician",
    "home electrical problems",
    "electrical fire signs",
    "flickering lights cause",
    "burning smell electrical",
    "warm outlet",
    "buzzing electrical",
    "home electrical safety tips"
  ],
  alternates: {
    canonical: "https://amporalabs.com/blog/electrical-safety-homeowners-guide",
  },
  openGraph: {
    title: "Electrical Safety for Homeowners: Warning Signs & When to Call an Electrician - Ampora",
    description: "Learn the critical warning signs of electrical problems in your home, when to call an electrician immediately, and how to prevent electrical fires with this comprehensive safety guide.",
    url: "https://amporalabs.com/blog/electrical-safety-homeowners-guide",
    type: "article",
    publishedTime: "2026-03-04",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-40 md:h-48" aria-label="House with electrical warning signs including sparks, heat waves, and warning indicators">
      {/* Background */}
      <rect x="10" y="10" width="380" height="160" rx="4" fill="#1f2937" stroke="#374151" strokeWidth="1"/>

      {/* House shape */}
      <polygon points="200,25 120,70 280,70" fill="none" stroke="#6b7280" strokeWidth="2"/>
      <rect x="130" y="70" width="140" height="90" fill="none" stroke="#6b7280" strokeWidth="2"/>

      {/* Roof detail */}
      <line x1="200" y1="25" x2="200" y2="18" stroke="#6b7280" strokeWidth="2"/>
      <rect x="195" y="14" width="10" height="8" fill="none" stroke="#6b7280" strokeWidth="1.5"/>

      {/* Door */}
      <rect x="185" y="115" width="30" height="45" fill="#374151" stroke="#6b7280" strokeWidth="1.5"/>
      <circle cx="210" cy="138" r="2" fill="#9ca3af"/>

      {/* Window left with sparks */}
      <rect x="142" y="85" width="28" height="24" fill="#1e3a5f" stroke="#6b7280" strokeWidth="1.5"/>
      <line x1="156" y1="85" x2="156" y2="109" stroke="#6b7280" strokeWidth="1"/>
      <line x1="142" y1="97" x2="170" y2="97" stroke="#6b7280" strokeWidth="1"/>

      {/* Sparks from left window */}
      <line x1="148" y1="82" x2="145" y2="76" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="156" y1="80" x2="156" y2="73" stroke="#fbbf24" strokeWidth="1.5"/>
      <line x1="164" y1="82" x2="167" y2="76" stroke="#fbbf24" strokeWidth="1.5"/>
      <circle cx="145" cy="74" r="1.5" fill="#fbbf24"/>
      <circle cx="156" cy="71" r="1.5" fill="#fbbf24"/>
      <circle cx="167" cy="74" r="1.5" fill="#fbbf24"/>

      {/* Window right with heat waves */}
      <rect x="230" y="85" width="28" height="24" fill="#1e3a5f" stroke="#6b7280" strokeWidth="1.5"/>
      <line x1="244" y1="85" x2="244" y2="109" stroke="#6b7280" strokeWidth="1"/>
      <line x1="230" y1="97" x2="258" y2="97" stroke="#6b7280" strokeWidth="1"/>

      {/* Heat waves from right window */}
      <path d="M232,78 Q235,74 232,70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8"/>
      <path d="M240,78 Q243,74 240,70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8"/>
      <path d="M248,78 Q251,74 248,70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.8"/>
      <path d="M256,78 Q259,74 256,70" fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.6"/>

      {/* Warning triangle on house */}
      <polygon points="200,42 210,58 190,58" fill="none" stroke="#fbbf24" strokeWidth="2"/>
      <text x="200" y="56" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">!</text>

      {/* Left panel - Warning Signs */}
      <g transform="translate(15, 22)">
        <text x="50" y="10" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">WARNING SIGNS</text>

        <g transform="translate(0, 18)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="1"/>
          <text x="8" y="10" fill="#fbbf24" fontSize="10">&#9889;</text>
          <text x="22" y="10" fill="#ef4444" fontSize="6" fontWeight="bold">Flickering Lights</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Loose wiring / overload</text>
        </g>

        <g transform="translate(0, 46)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#f97316" fillOpacity="0.15" stroke="#f97316" strokeWidth="1"/>
          <text x="8" y="10" fill="#f97316" fontSize="10">&#9632;</text>
          <text x="22" y="10" fill="#f97316" fontSize="6" fontWeight="bold">Warm Outlets</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Overloaded circuit</text>
        </g>

        <g transform="translate(0, 74)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#eab308" fillOpacity="0.15" stroke="#eab308" strokeWidth="1"/>
          <text x="8" y="10" fill="#eab308" fontSize="10">&#9788;</text>
          <text x="22" y="10" fill="#eab308" fontSize="6" fontWeight="bold">Burning Smell</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Melting insulation</text>
        </g>

        <g transform="translate(0, 102)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#a855f7" fillOpacity="0.15" stroke="#a855f7" strokeWidth="1"/>
          <text x="8" y="10" fill="#a855f7" fontSize="10">&#9835;</text>
          <text x="22" y="10" fill="#a855f7" fontSize="6" fontWeight="bold">Buzzing Sound</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Faulty wiring / arcing</text>
        </g>
      </g>

      {/* Right panel - Action Items */}
      <g transform="translate(285, 22)">
        <text x="50" y="10" textAnchor="middle" fill="#22c55e" fontSize="7" fontWeight="bold">TAKE ACTION</text>

        <g transform="translate(0, 18)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="8" y="14" fill="#22c55e" fontSize="9">&#10003;</text>
          <text x="22" y="10" fill="#22c55e" fontSize="6" fontWeight="bold">Test GFCIs Monthly</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Press test button</text>
        </g>

        <g transform="translate(0, 46)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="8" y="14" fill="#22c55e" fontSize="9">&#10003;</text>
          <text x="22" y="10" fill="#22c55e" fontSize="6" fontWeight="bold">Check Panel Labels</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Identify all circuits</text>
        </g>

        <g transform="translate(0, 74)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="8" y="14" fill="#22c55e" fontSize="9">&#10003;</text>
          <text x="22" y="10" fill="#22c55e" fontSize="6" fontWeight="bold">Inspect Cords</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">Replace damaged ones</text>
        </g>

        <g transform="translate(0, 102)">
          <rect x="0" y="0" width="100" height="22" rx="3" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeWidth="1"/>
          <text x="8" y="14" fill="#22c55e" fontSize="9">&#10003;</text>
          <text x="22" y="10" fill="#22c55e" fontSize="6" fontWeight="bold">Call Electrician</text>
          <text x="22" y="18" fill="#9ca3af" fontSize="4.5">When in doubt</text>
        </g>
      </g>
    </svg>
  );
}

export default function ElectricalSafetyHomeownersGuidePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://amporalabs.com" },
            { name: "Blog", url: "https://amporalabs.com/blog" },
            { name: "Electrical Safety for Homeowners", url: "https://amporalabs.com/blog/electrical-safety-homeowners-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Electrical Safety for Homeowners: Warning Signs & When to Call an Electrician"
          description="Complete homeowner guide to electrical safety warning signs, when to call an electrician immediately, how to prevent electrical fires, and a home electrical safety checklist."
          datePublished="2026-03-04"
          dateModified="2026-03-04"
          url="https://amporalabs.com/blog/electrical-safety-homeowners-guide"
          wordCount={5200}
          keywords={["electrical safety homeowners", "electrical warning signs", "when to call electrician", "home electrical problems", "electrical fire prevention"]}
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Electrical Safety for Homeowners</span>
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
              Electrical Safety for Homeowners: Warning Signs &amp; When to Call an Electrician
            </h1>
            <p className="text-xl text-white/70">
              Your home&apos;s electrical system is easy to take for granted &mdash; until something goes wrong. Electrical fires cause an estimated 51,000 home fires each year in the United States, resulting in nearly 500 deaths and $1.3 billion in property damage. This guide covers the critical warning signs every homeowner should recognize, when to call a licensed electrician immediately, common household electrical hazards, and a comprehensive safety checklist to protect your family and property.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-rose-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          {/* Safety Warning */}
          <div className="bg-red-900/40 border-2 border-red-500/50 rounded-2xl p-6 mb-12">
            <div className="flex items-start gap-4">
              <div className="text-3xl">&#9888;</div>
              <div>
                <h3 className="font-display font-bold text-lg mb-2 text-red-400">Important Safety Warning</h3>
                <p className="text-white/80 text-sm">
                  Electricity is dangerous. Never attempt to work on your home&apos;s electrical system unless you are qualified to do so. If you notice any warning signs described in this article, contact a licensed electrician. If you smell burning, see sparks, or notice scorched outlets, evacuate your home immediately and call 911. This article is for educational purposes only and is not a substitute for professional electrical inspection and repair.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-white/5 rounded-2xl p-6 mb-12">
            <h2 className="font-display font-bold mb-4">In This Guide</h2>
            <ul className="space-y-2 text-white/70">
              <li><a href="#warning-signs" className="hover:text-purple-400">Warning Signs of Electrical Problems</a></li>
              <li><a href="#call-electrician" className="hover:text-purple-400">When to Call an Electrician Immediately</a></li>
              <li><a href="#common-hazards" className="hover:text-purple-400">Common Home Electrical Hazards</a></li>
              <li><a href="#extension-cord-safety" className="hover:text-purple-400">Extension Cord Safety</a></li>
              <li><a href="#outlet-switch-problems" className="hover:text-purple-400">Outlet and Switch Problems</a></li>
              <li><a href="#panel-warning-signs" className="hover:text-purple-400">Panel Warning Signs</a></li>
              <li><a href="#outdoor-safety" className="hover:text-purple-400">Outdoor Electrical Safety</a></li>
              <li><a href="#diy-vs-professional" className="hover:text-purple-400">DIY vs Professional Work</a></li>
              <li><a href="#finding-electrician" className="hover:text-purple-400">Finding a Qualified Electrician</a></li>
              <li><a href="#safety-checklist" className="hover:text-purple-400">Home Electrical Safety Checklist</a></li>
              <li><a href="#faq" className="hover:text-purple-400">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">

            <section id="warning-signs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Warning Signs of Electrical Problems</h2>
              <p className="text-white/80 mb-4">
                Electrical problems rarely happen without warning. Your home gives you clues &mdash; subtle and not so subtle &mdash; that something is wrong with the wiring, outlets, or panel. Learning to recognize these <strong>electrical warning signs</strong> can prevent fires, shock injuries, and costly damage. Here are the most common indicators that your home has an electrical problem.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">1. Flickering or Dimming Lights</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Occasional flickers when a large appliance kicks on (like an air conditioner or refrigerator) can be normal. However, <strong>persistent flickering</strong>, lights dimming without an obvious cause, or lights that brighten and dim randomly are signs of a serious wiring issue. Common causes include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Loose wiring connections:</strong> Loose wires at the panel, junction box, or fixture create intermittent contact that causes flickering</li>
                    <li><strong>Overloaded circuits:</strong> Too many devices drawing power on a single circuit causes voltage fluctuations</li>
                    <li><strong>Faulty main service connection:</strong> Problems at the meter base or service entrance affect the entire home</li>
                    <li><strong>Deteriorated wiring:</strong> Old aluminum wiring or degraded connections loosen over time due to thermal expansion</li>
                    <li><strong>Utility-side issues:</strong> If neighbors also experience flickering, the problem may be with the utility transformer or service line</li>
                  </ul>
                </div>

                <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-500/20">
                  <h3 className="font-semibold text-orange-400 mb-3">2. Warm or Hot Outlets and Switch Plates</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Outlets and switch plates should never feel warm to the touch (with the exception of dimmer switches, which generate some heat normally). A <strong>warm or hot outlet</strong> indicates one of these problems:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Overloaded outlet:</strong> Too many devices plugged in, drawing more current than the circuit is rated for</li>
                    <li><strong>Loose wiring connections:</strong> Poor contact between wires and terminal screws creates resistance and heat</li>
                    <li><strong>Damaged or worn receptacle:</strong> Internal contacts inside the outlet have degraded and no longer grip plug prongs firmly</li>
                    <li><strong>Undersized wiring:</strong> Wire gauge is too small for the load, causing the conductor to heat up</li>
                    <li><strong>Backstab connections:</strong> Push-in wire connections are less reliable than screw terminals and can loosen over time</li>
                  </ul>
                  <p className="text-red-400 text-sm mt-3 font-semibold">
                    If an outlet is hot, discolored, or melted, stop using it immediately and call an electrician.
                  </p>
                </div>

                <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
                  <h3 className="font-semibold text-yellow-400 mb-3">3. Burning Smell or Smoke</h3>
                  <p className="text-white/70 text-sm mb-3">
                    A <strong>burning smell near outlets, switches, or your electrical panel</strong> is one of the most dangerous warning signs. This smell often indicates that wire insulation is melting or that an electrical connection is arcing &mdash; both of which can start a fire inside your walls where you cannot see it.
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Burning plastic smell:</strong> Wire insulation or outlet plastic is melting due to excessive heat</li>
                    <li><strong>Fishy or acrid odor:</strong> Overheating electrical components often produce an unusual chemical smell before visible smoke appears</li>
                    <li><strong>Smoke from outlet or panel:</strong> Active electrical fire &mdash; evacuate immediately and call 911</li>
                  </ul>
                  <div className="bg-red-900/30 rounded-lg p-3 mt-3">
                    <p className="text-red-300 text-sm font-semibold">Emergency Action: If you smell burning from any electrical source, turn off the circuit at the breaker panel (if safe to do so), evacuate, and call 911. Do not attempt to investigate or fix the problem yourself.</p>
                  </div>
                </div>

                <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-500/20">
                  <h3 className="font-semibold text-purple-400 mb-3">4. Buzzing, Crackling, or Sizzling Sounds</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Electrical systems should operate silently. Any <strong>buzzing, crackling, or sizzling</strong> sounds coming from outlets, switches, or your panel indicate a problem that needs immediate attention. These sounds are typically caused by:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Arcing:</strong> Electricity jumping across a gap between loose or damaged connections, creating heat and sparks</li>
                    <li><strong>Loose wiring:</strong> Vibrating connections that are not making solid contact</li>
                    <li><strong>Faulty breaker:</strong> A circuit breaker that is failing internally may buzz or hum</li>
                    <li><strong>Overloaded circuit:</strong> Components stressed beyond their rating can produce audible noise</li>
                  </ul>
                  <p className="text-white/60 text-sm mt-3">
                    <strong>Note:</strong> A slight hum from a transformer (such as a doorbell transformer) or a dimmer switch is typically normal. Loud buzzing from outlets, switches, or the panel is not.
                  </p>
                </div>

                <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-500/20">
                  <h3 className="font-semibold text-cyan-400 mb-3">5. Frequently Tripping Circuit Breakers</h3>
                  <p className="text-white/70 text-sm mb-3">
                    Circuit breakers are designed to trip when a circuit is overloaded or a fault is detected &mdash; this is a safety feature. However, <strong>breakers that trip repeatedly</strong> signal an underlying problem that needs to be diagnosed. Common causes include:
                  </p>
                  <ul className="text-white/60 text-sm space-y-1">
                    <li><strong>Circuit overload:</strong> Too many appliances or devices on one circuit exceeding the breaker&apos;s amperage rating</li>
                    <li><strong>Short circuit:</strong> A hot wire touching a neutral or ground wire, causing a sudden surge of current</li>
                    <li><strong>Ground fault:</strong> Current leaking to ground through unintended paths, especially in wet areas like kitchens and bathrooms</li>
                    <li><strong>Faulty breaker:</strong> The breaker itself may be worn out and tripping at lower current than its rating</li>
                    <li><strong>Arc fault:</strong> Damaged wiring or loose connections creating electrical arcs that an <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">AFCI breaker</Link> detects</li>
                  </ul>
                  <p className="text-white/60 text-sm mt-3">
                    Never replace a breaker with a higher-rated one to stop tripping. The breaker is sized to protect the wire &mdash; a larger breaker allows the wire to overheat, creating a fire hazard.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">6. Other Warning Signs to Watch For</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Sparks when plugging in:</strong> Brief sparks can be normal, but large, frequent, or colored sparks (yellow or white) indicate a problem</li>
                    <li><strong>Discolored outlets or switches:</strong> Brown or black marks around outlets indicate heat damage or arcing</li>
                    <li><strong>Shock when touching appliances:</strong> Even a mild tingle indicates a <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">grounding problem</Link> that could become lethal</li>
                    <li><strong>Outlets that don&apos;t hold plugs:</strong> Worn internal contacts create intermittent connections and arcing</li>
                    <li><strong>Dead outlets or switches:</strong> Can indicate tripped breakers, tripped GFCIs, or broken connections</li>
                    <li><strong>Rodent activity:</strong> Chewed wire insulation is a leading cause of electrical fires in attics and crawl spaces</li>
                    <li><strong>High electric bills:</strong> A sudden, unexplained increase can indicate a fault or short circuit wasting energy</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="call-electrician" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">When to Call an Electrician Immediately</h2>
              <p className="text-white/80 mb-4">
                Some electrical problems are emergencies that require immediate professional attention. <strong>Do not attempt to diagnose or repair these issues yourself.</strong> Call a licensed electrician right away &mdash; or call 911 if there is an immediate danger of fire or electrocution.
              </p>

              <div className="bg-red-900/40 rounded-xl p-6 my-6 border border-red-500/30">
                <h3 className="font-semibold text-red-400 mb-4">Call 911 Immediately If:</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You see flames or smoke coming from an outlet, switch, panel, or appliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Someone has received an electrical shock and is unresponsive, has burns, or cannot let go of the source</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 font-bold">&#8226;</span>
                    <span>A power line is down on your property or vehicle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You hear loud popping or crackling inside your walls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You smell strong burning and cannot identify the source</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-900/30 rounded-xl p-6 my-6 border border-orange-500/20">
                <h3 className="font-semibold text-orange-400 mb-4">Call a Licensed Electrician Same Day If:</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>An outlet or switch is warm, hot, discolored, or melted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You hear buzzing or sizzling from your electrical panel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>A circuit breaker keeps tripping repeatedly after being reset</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Multiple outlets or rooms lose power and the breaker has not tripped</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You notice a persistent burning or unusual chemical smell near electrical equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Water has entered your <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300">electrical panel</Link> or any electrical device</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Lights throughout your home are flickering or dimming without explanation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You get a shock or tingle when touching an appliance, faucet, or other metal surface</span>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 rounded-xl p-6 my-6 border border-yellow-500/20">
                <h3 className="font-semibold text-yellow-400 mb-4">Schedule an Electrician Soon If:</h3>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Your home is more than 40 years old and has never had an electrical inspection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You are using excessive extension cords or power strips because you don&apos;t have enough outlets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Two-prong (ungrounded) outlets are present throughout the home</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You are planning a major appliance addition (EV charger, hot tub, workshop equipment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>Your home has a Federal Pacific or Zinsco panel (known fire hazards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5 font-bold">&#8226;</span>
                    <span>You suspect your home has aluminum wiring (common in homes built between 1965-1973)</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="common-hazards" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Common Home Electrical Hazards</h2>
              <p className="text-white/80 mb-4">
                Many electrical hazards in the home are caused by everyday habits that homeowners may not realize are dangerous. Understanding these hazards is the first step toward preventing electrical fires and shock injuries.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Overloaded Circuits</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Plugging too many devices into a single circuit is the most common electrical hazard. Each circuit is designed to handle a specific amperage (typically 15A or 20A). Exceeding this limit causes wiring to overheat.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Spread high-wattage devices across multiple circuits. Never daisy-chain power strips. Know your circuit limits.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Water Near Electricity</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Water is an excellent conductor of electricity. Using electrical devices near sinks, bathtubs, pools, or in damp locations without proper <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI protection</Link> creates a serious shock and electrocution risk.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Ensure GFCI outlets are installed in kitchens, bathrooms, garages, outdoor areas, and anywhere near water.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Damaged Wiring and Cords</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Frayed, cracked, or damaged power cords and extension cords expose live conductors. Pinched wires behind furniture, cords run under rugs, and pet-chewed cords are fire and shock hazards.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Inspect cords regularly. Replace any cord with visible damage. Never run cords under rugs, through walls, or across doorways.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">DIY Electrical Work</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Improper electrical work by unqualified homeowners is a leading cause of electrical fires. Bad connections, wrong wire sizes, missing ground wires, and code violations create hidden hazards that may not manifest for years.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Hire a licensed electrician for all electrical work beyond changing light bulbs and plugging in devices.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Light Bulb Wattage Mismatch</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Installing a light bulb with a higher wattage than the fixture is rated for causes excessive heat buildup. This can melt the fixture socket, damage wiring insulation, and start a fire &mdash; especially in enclosed fixtures.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Always check the maximum wattage rating on each fixture and use LED bulbs, which produce far less heat than incandescent bulbs.
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Covered or Blocked Outlets</h3>
                  <p className="text-white/60 text-sm mb-2">
                    Placing furniture or materials directly against outlets with plugs inserted creates a fire risk. Heat cannot dissipate properly, and the plug can be pushed partially out, creating an arcing hazard.
                  </p>
                  <p className="text-white/60 text-sm">
                    <strong>Prevention:</strong> Maintain clearance around outlets. Use flat-plug adapters if furniture must be close to an outlet.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">Electrical Fire Statistics</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-red-400">51,000</p>
                    <p className="text-white/60 text-sm">Home electrical fires per year (U.S.)</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-400">500</p>
                    <p className="text-white/60 text-sm">Deaths annually from electrical fires</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-yellow-400">1,400</p>
                    <p className="text-white/60 text-sm">Injuries per year from electrical fires</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-500">$1.3B</p>
                    <p className="text-white/60 text-sm">Property damage annually</p>
                  </div>
                </div>
              </div>
            </section>

            <section id="extension-cord-safety" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Extension Cord Safety</h2>
              <p className="text-white/80 mb-4">
                Extension cords are one of the most misused electrical devices in the home. They are designed for <strong>temporary use only</strong> and should never serve as permanent wiring. According to the Consumer Product Safety Commission (CPSC), extension cords cause approximately 3,300 home fires each year.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Extension Cord Don&apos;ts</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never daisy-chain extension cords together</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never run cords under rugs, carpets, or furniture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never use indoor cords outdoors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never plug space heaters into extension cords</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never use a cord with a missing ground prong</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never use as a permanent wiring solution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Never run through walls, ceilings, or doorways</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-green-400 mb-3">Extension Cord Do&apos;s</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Use the correct gauge for the load (12 AWG for heavy loads)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Check the amperage rating before plugging in devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Use outdoor-rated cords (marked &quot;W&quot;) for outdoor use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Inspect for damage before each use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Unplug when not in use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Keep connections off the ground and away from water</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Use only UL-listed extension cords</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-900/20 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-cyan-400 mb-3">If You Need More Outlets</h4>
                <p className="text-white/70 text-sm">
                  If you find yourself relying on extension cords and power strips throughout your home, this is a sign that your home needs additional circuits and outlets. A licensed electrician can install new receptacles and dedicated circuits to safely meet your power needs. This is especially important in kitchens, home offices, workshops, and entertainment centers where multiple devices compete for limited outlets.
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

            <section id="outlet-switch-problems" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Outlet and Switch Problems</h2>
              <p className="text-white/80 mb-4">
                Outlets and switches are the most frequently used electrical devices in your home, and they can develop problems over time. Knowing what to look for helps you catch issues before they become hazardous.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-red-500">
                  <h4 className="font-semibold text-red-400 mb-2">Outlets That Spark</h4>
                  <p className="text-white/70 text-sm">
                    A brief blue spark when plugging in a device can be normal &mdash; this is the electricity connecting. However, <strong>large sparks, yellow or white sparks, sparks accompanied by a burning smell</strong>, or sparks that happen after the plug is fully inserted are dangerous. These indicate arcing due to loose connections, damaged outlet contacts, or short circuits. Stop using the outlet and have it inspected.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-400 mb-2">Loose-Fitting Plugs</h4>
                  <p className="text-white/70 text-sm">
                    When plugs fall out of an outlet or feel loose, the internal contact clips inside the receptacle have worn out. Loose connections create intermittent contact, arcing, and heat buildup. The outlet should be replaced. Modern tamper-resistant receptacles (required by current NEC code) provide better contact retention.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-yellow-400 mb-2">Two-Prong (Ungrounded) Outlets</h4>
                  <p className="text-white/70 text-sm">
                    Two-prong outlets lack a <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">ground connection</Link>, which is a critical safety feature that protects against shock. While existing two-prong outlets are grandfathered in older homes, they should be upgraded when possible. Options include rewiring with a ground wire, installing GFCI protection, or a full circuit upgrade. Never use a three-to-two prong adapter as a permanent solution.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-cyan-500">
                  <h4 className="font-semibold text-cyan-400 mb-2">Switches That Don&apos;t Work Properly</h4>
                  <p className="text-white/70 text-sm">
                    Switches that feel warm, make crackling sounds, don&apos;t toggle smoothly, or control lights inconsistently may have internal damage or loose wiring. A switch that requires jiggling to work is creating arcing with every use. Replace faulty switches promptly &mdash; they are inexpensive parts but can cause fires if ignored.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-400 mb-2">GFCI Outlets That Won&apos;t Reset</h4>
                  <p className="text-white/70 text-sm">
                    <Link href="/blog/gfci-vs-afci-requirements" className="text-purple-400 hover:text-purple-300">GFCI (Ground Fault Circuit Interrupter) outlets</Link> should be tested monthly by pressing the TEST button, then the RESET button. If a GFCI outlet won&apos;t reset, it may be protecting you from an active ground fault, or the GFCI device itself may have failed. GFCIs have a limited lifespan (10-15 years) and must be replaced when they fail.
                  </p>
                </div>
              </div>
            </section>

            <section id="panel-warning-signs" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Panel Warning Signs</h2>
              <p className="text-white/80 mb-4">
                Your <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300">electrical panel</Link> (breaker box) is the heart of your home&apos;s electrical system. Problems at the panel can affect your entire home and pose serious fire and shock risks.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-red-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-red-400 mb-3">Dangerous Panel Signs</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Rust or corrosion:</strong> Indicates moisture intrusion &mdash; water and electricity are a deadly combination</li>
                    <li><strong>Burning smell at panel:</strong> Melting insulation or failing connections inside the panel</li>
                    <li><strong>Buzzing or humming:</strong> Loose connections, failing breakers, or arcing inside the panel</li>
                    <li><strong>Scorch marks:</strong> Evidence of past arcing or overheating</li>
                    <li><strong>Melted plastic:</strong> Breakers or bus bar connections have overheated severely</li>
                    <li><strong>Warm panel cover:</strong> Internal components are generating excessive heat</li>
                  </ul>
                </div>
                <div className="bg-orange-900/20 rounded-xl p-6">
                  <h3 className="font-semibold text-orange-400 mb-3">Panels That Need Replacement</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li><strong>Federal Pacific (FPE) panels:</strong> Known for breakers that fail to trip during overloads &mdash; confirmed fire hazard</li>
                    <li><strong>Zinsco/GTE-Sylvania:</strong> Breakers can melt to the bus bar and fail to trip</li>
                    <li><strong>Fuse boxes:</strong> While functional, they lack the convenience and safety features of modern breakers and often indicate outdated wiring</li>
                    <li><strong>60-amp or 100-amp service:</strong> Most modern homes need a minimum of 200 amps</li>
                    <li><strong>Double-tapped breakers:</strong> Two wires connected to a single-pole breaker designed for one wire</li>
                    <li><strong>No available spaces:</strong> No room for additional circuits when needed</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-white mb-3">Panel Maintenance Tips for Homeowners</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>Keep the area clear:</strong> Maintain at least 3 feet of clear space in front of the panel per NEC 110.26</li>
                  <li><strong>Label all circuits:</strong> Every breaker should be clearly labeled with the rooms and devices it controls</li>
                  <li><strong>Know your main breaker:</strong> Know where your main disconnect is and how to shut off all power in an emergency</li>
                  <li><strong>Don&apos;t store items near the panel:</strong> Flammable materials near the panel increase fire risk</li>
                  <li><strong>Leave the cover on:</strong> The panel cover protects you from live bus bars and should only be removed by a qualified electrician</li>
                  <li><strong>Schedule periodic inspections:</strong> Have an electrician <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">inspect your panel</Link> every 10 years, or sooner if you notice any warning signs</li>
                </ul>
              </div>
            </section>

            <section id="outdoor-safety" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Outdoor Electrical Safety</h2>
              <p className="text-white/80 mb-4">
                Outdoor electrical hazards combine electricity with moisture, weather exposure, and yard work equipment. Following outdoor electrical safety practices protects your family from shock, electrocution, and fire.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Power Lines</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Never touch a downed power line</strong> or anything touching it. Call 911 and the utility company immediately. The ground around a downed line can be energized for 35 feet or more.</li>
                    <li><strong>Keep 10+ feet clearance</strong> from overhead power lines when using ladders, antennas, pool skimmers, or any long objects</li>
                    <li><strong>Call 811 before digging</strong> to have underground utilities marked. Hitting a buried power line can cause electrocution and widespread outages</li>
                    <li><strong>Tree trimming near lines</strong> should only be done by the utility company or qualified line clearance tree trimmers</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Outdoor Outlets and Equipment</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>All outdoor outlets must have GFCI protection</strong> per NEC code. Test them monthly.</li>
                    <li><strong>Use weatherproof covers</strong> (in-use or bubble covers) on all outdoor receptacles, especially those with cords plugged in</li>
                    <li><strong>Only use outdoor-rated extension cords</strong> for outdoor applications. Indoor cords degrade quickly when exposed to sunlight and moisture.</li>
                    <li><strong>Keep outdoor lighting fixtures sealed</strong> and use the correct bulb type and wattage for each fixture</li>
                    <li><strong>Never use electric tools in rain</strong> or on wet ground without GFCI protection</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Pool and Hot Tub Safety</h3>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li><strong>Bonding and grounding</strong> around pools and hot tubs must meet NEC Article 680 requirements</li>
                    <li><strong>Keep all electrical devices</strong> at least 6 feet from pool edges and hot tub water</li>
                    <li><strong>Never use standard extension cords</strong> near pools or water features</li>
                    <li><strong>Pool and hot tub wiring</strong> must be installed by a licensed electrician with inspection</li>
                    <li><strong>If you feel tingling in the water</strong>, get out immediately &mdash; stray current in water can cause drowning through electric shock</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="diy-vs-professional" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">DIY vs Professional Work</h2>
              <p className="text-white/80 mb-4">
                Understanding the boundary between what homeowners can safely do themselves and what requires a licensed electrician is critical for safety. Improper electrical work is not just dangerous &mdash; it can void your homeowner&apos;s insurance, reduce your home&apos;s value, and create hidden hazards for future occupants.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-900/20 rounded-xl p-6 border border-green-500/20">
                  <h3 className="font-semibold text-green-400 mb-3">What Homeowners Can Do</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Replace light bulbs (correct wattage)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Test and reset GFCI outlets and breakers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Replace switch and outlet cover plates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Reset tripped circuit breakers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Plug in and unplug devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Change batteries in smoke detectors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">&#10003;</span>
                      <span>Use a voltage tester to check if an outlet is live (non-contact type)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/20">
                  <h3 className="font-semibold text-red-400 mb-3">Requires a Licensed Electrician</h3>
                  <ul className="text-white/60 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Any work inside the electrical panel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Adding or moving outlets and switches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Running new circuits or wiring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Service upgrades (100A to 200A)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>EV charger installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Generator or transfer switch installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Troubleshooting electrical problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-0.5">&#10007;</span>
                      <span>Any work that requires a permit</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-900/20 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-orange-400 mb-3">Why Permits Matter</h4>
                <p className="text-white/70 text-sm">
                  Electrical permits exist to ensure work is done safely and inspected. When work is done without permits: (1) it may not be covered by your homeowner&apos;s insurance if a fire occurs; (2) it can be flagged during a home sale inspection, potentially killing the deal or requiring costly remediation; (3) you may be held personally liable for injuries caused by unpermitted work. Always pull permits for electrical work and have it inspected.
                </p>
              </div>
            </section>

            <section id="finding-electrician" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Finding a Qualified Electrician</h2>
              <p className="text-white/80 mb-4">
                Not all electricians are the same. Finding a qualified, reputable electrician protects your home and ensures the work is done correctly. Here is what to look for and what questions to ask.
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">1</span>
                  <div>
                    <p className="font-semibold text-white">Verify Licensing</p>
                    <p className="text-white/60 text-sm">Check that the electrician holds a valid license for your state and local jurisdiction. Licensing requirements vary by state, but most require passing an exam and demonstrating documented experience. Your state&apos;s contractor licensing board website is the best source to verify active licenses.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">2</span>
                  <div>
                    <p className="font-semibold text-white">Confirm Insurance</p>
                    <p className="text-white/60 text-sm">Ask for proof of general liability insurance and workers&apos; compensation insurance. If an uninsured electrician is injured on your property or causes damage, you could be held financially responsible.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">3</span>
                  <div>
                    <p className="font-semibold text-white">Get Multiple Estimates</p>
                    <p className="text-white/60 text-sm">Obtain at least three written estimates for the work. Be wary of bids that are significantly lower than others &mdash; this can indicate cut corners, unlicensed workers, or a bait-and-switch approach. A detailed written estimate should include the scope of work, materials, labor, permit fees, and timeline.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">4</span>
                  <div>
                    <p className="font-semibold text-white">Check Reviews and References</p>
                    <p className="text-white/60 text-sm">Look for reviews on Google, Yelp, BBB, and Nextdoor. Ask the electrician for references from recent jobs similar to yours. A reputable electrician will be happy to provide them.</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 flex items-start gap-4">
                  <span className="bg-cyan-600 text-white text-sm font-bold px-3 py-1 rounded-full">5</span>
                  <div>
                    <p className="font-semibold text-white">Ask About Permits and Inspections</p>
                    <p className="text-white/60 text-sm">A qualified electrician will pull the necessary permits and schedule inspections as required by your local jurisdiction. If an electrician suggests skipping the permit, find someone else.</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-900/30 rounded-xl p-6 my-6">
                <h4 className="font-semibold text-purple-400 mb-3">Red Flags to Avoid</h4>
                <ul className="text-white/70 space-y-2 text-sm">
                  <li><strong>No license or refuses to show it:</strong> Walk away immediately</li>
                  <li><strong>Demands full payment upfront:</strong> Standard practice is a deposit with balance due on completion</li>
                  <li><strong>Suggests skipping permits:</strong> This puts you at legal and safety risk</li>
                  <li><strong>No written estimate:</strong> Always get the scope and price in writing</li>
                  <li><strong>Pressure to decide immediately:</strong> Reputable contractors let you compare estimates</li>
                  <li><strong>Unmarked vehicle, no business cards:</strong> May indicate an unlicensed operator</li>
                </ul>
              </div>
            </section>

            <section id="safety-checklist" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Home Electrical Safety Checklist</h2>
              <p className="text-white/80 mb-4">
                Use this checklist to perform a basic electrical safety assessment of your home. While this does not replace a professional <Link href="/blog/electrical-inspection-checklist" className="text-purple-400 hover:text-purple-300">electrical inspection</Link>, it helps you identify obvious hazards and prioritize what to address first.
              </p>

              <div className="space-y-6 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Monthly Checks</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Test all GFCI outlets by pressing the TEST button, then RESET</li>
                    <li>&#9744; Test all AFCI breakers using the TEST button on each breaker</li>
                    <li>&#9744; Test smoke and carbon monoxide detectors</li>
                    <li>&#9744; Check that all outlet and switch covers are in place and undamaged</li>
                    <li>&#9744; Inspect extension cords for damage &mdash; replace any with cuts, fraying, or exposed wire</li>
                    <li>&#9744; Ensure nothing is blocking access to your electrical panel (3 ft clearance)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Seasonal Checks</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Inspect outdoor outlets for damage, moisture, and proper weatherproof covers</li>
                    <li>&#9744; Check outdoor lighting for damage, loose fixtures, and exposed wiring</li>
                    <li>&#9744; Inspect the electrical panel for signs of rust, corrosion, or moisture</li>
                    <li>&#9744; Test all outlets in the home &mdash; plug in a lamp to verify they work</li>
                    <li>&#9744; Check that trees and vegetation are clear of overhead power lines</li>
                    <li>&#9744; Inspect your home&apos;s service entrance cable for damage or wear</li>
                    <li>&#9744; Verify your surge protectors are functioning (indicator light is on)</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">Annual Professional Checks</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Schedule a professional electrical inspection if your home is 25+ years old</li>
                    <li>&#9744; Have smoke detectors replaced every 10 years (check manufacture date)</li>
                    <li>&#9744; Have an electrician check for recalled panels (Federal Pacific, Zinsco)</li>
                    <li>&#9744; Thermal scan of electrical panel (identifies hot connections before they fail)</li>
                    <li>&#9744; Review and update circuit directory labels in the panel</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-cyan-400 mb-3">General Safety Practices</h3>
                  <ul className="text-white/70 space-y-2 text-sm">
                    <li>&#9744; Never overload outlets or circuits with too many devices</li>
                    <li>&#9744; Keep flammable materials away from heat-producing appliances and outlets</li>
                    <li>&#9744; Use outlet covers or caps in homes with small children</li>
                    <li>&#9744; Never use water to put out an electrical fire &mdash; use a Class C or ABC fire extinguisher</li>
                    <li>&#9744; Ensure all light fixtures have the correct wattage bulbs installed</li>
                    <li>&#9744; Keep a working flashlight near the electrical panel for emergencies</li>
                    <li>&#9744; Know the location of your main disconnect and how to shut off power</li>
                    <li>&#9744; Have at least one ABC-rated fire extinguisher on each floor of your home</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-display font-bold mb-4">Frequently Asked Questions</h2>

              <div className="space-y-4 my-6">
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Why do my lights flicker when I turn on the microwave or hair dryer?</h3>
                  <p className="text-white/70 text-sm">
                    A brief, slight dim when a high-wattage appliance starts is normal &mdash; the motor draws a surge of current when it kicks on. However, if the flickering is severe, lasts more than a second, or happens throughout the house, it could indicate an overloaded circuit, a loose connection at the panel, or an undersized service. If it happens consistently, have an electrician check your panel connections and circuit loading.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Is it normal for a dimmer switch to feel warm?</h3>
                  <p className="text-white/70 text-sm">
                    Yes, dimmer switches generate some heat as part of their normal operation. They regulate brightness by rapidly switching the power on and off, and the excess energy is dissipated as heat. A dimmer switch should feel warm but never hot. If a dimmer is uncomfortably hot, it may be overloaded (controlling more wattage than its rating), or the switch may be defective. Check the dimmer&apos;s maximum wattage rating and ensure the total bulb wattage does not exceed it.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How often should I test my GFCI outlets?</h3>
                  <p className="text-white/70 text-sm">
                    The NEC and GFCI manufacturers recommend testing GFCI outlets <strong>monthly</strong>. Press the TEST button &mdash; the outlet should immediately lose power (a lamp plugged in should turn off). Then press RESET to restore power. If the GFCI does not trip when tested, or if it won&apos;t reset, it has failed and must be replaced. GFCIs typically last 10-15 years. Outlets in harsh environments (outdoors, garages) may fail sooner.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">Can I replace an outlet or switch myself?</h3>
                  <p className="text-white/70 text-sm">
                    While some jurisdictions allow homeowners to replace outlets and switches in their own homes, we strongly recommend hiring a licensed electrician. Incorrect wiring can create fire and shock hazards that may not be apparent for months or years. If you do any electrical work yourself, always turn off the breaker first, verify the circuit is dead with a voltage tester, and have the work inspected by your local building department.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">My house still has a fuse box. Do I need to upgrade?</h3>
                  <p className="text-white/70 text-sm">
                    A properly maintained fuse box can be safe, but there are strong reasons to upgrade to a modern breaker panel. Fuse boxes are typically 60-amp service (modern homes need 200 amps), they lack AFCI and GFCI protection, finding replacement fuses is increasingly difficult, and insurance companies may charge higher premiums or refuse coverage. If your home has a fuse box, consult an electrician about upgrading to a modern <Link href="/blog/electrical-panel-troubleshooting" className="text-purple-400 hover:text-purple-300">breaker panel</Link>.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What should I do if I get a small shock from an appliance?</h3>
                  <p className="text-white/70 text-sm">
                    Even a small shock or tingle indicates a <Link href="/blog/electrical-grounding-vs-bonding" className="text-purple-400 hover:text-purple-300">grounding problem</Link> that could become lethal under different conditions. Stop using the appliance and unplug it. Check whether the outlet has proper grounding (a three-prong outlet with functioning ground). Have an electrician test the outlet, the appliance, and the circuit grounding. This is especially urgent near water sources like kitchen sinks and bathrooms.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">How do I know if my home has aluminum wiring?</h3>
                  <p className="text-white/70 text-sm">
                    Aluminum branch circuit wiring was commonly used in homes built between 1965 and 1973. You can check by looking at the wiring visible in your attic, basement, or at the panel (with the cover removed by an electrician). Aluminum wire is silver-colored and may be stamped &quot;AL&quot; or &quot;ALUMINUM&quot; on the jacket. Aluminum wiring requires special connections and devices rated for aluminum (CO/ALR). If your home has aluminum wiring, have an electrician evaluate it and install appropriate connectors (such as COPALUM or AlumiConn) at all connection points.
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-2">What type of fire extinguisher should I use for an electrical fire?</h3>
                  <p className="text-white/70 text-sm">
                    <strong>Never use water</strong> on an electrical fire. Use a <strong>Class C fire extinguisher</strong> (or an ABC-rated multipurpose extinguisher, which is the most common household type). If the fire is too large for a portable extinguisher, evacuate immediately, close the door behind you, and call 911. If safe to do so, turn off the main breaker to cut power before evacuating.
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
                <Link href="/blog/electrical-inspection-checklist" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-green-400 text-sm">Inspections</span>
                  <h3 className="font-semibold mt-2">Electrical Inspection Checklist</h3>
                </Link>
                <Link href="/blog/federal-pacific-zinsco-panels" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-red-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Federal Pacific & Zinsco Panel Dangers</h3>
                </Link>
                <Link href="/blog/electrical-fire-prevention-guide" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-rose-400 text-sm">Safety</span>
                  <h3 className="font-semibold mt-2">Electrical Fire Prevention Guide</h3>
                </Link>
                <Link href="/blog/gfci-vs-afci-requirements" className="bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-colors">
                  <span className="text-purple-400 text-sm">NEC Code</span>
                  <h3 className="font-semibold mt-2">GFCI vs AFCI: Requirements & Differences</h3>
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
