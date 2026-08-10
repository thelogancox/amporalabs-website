import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Recessed Lighting Installation: IC vs Non-IC Rated Guide",
  description: "Complete guide to recessed lighting installation for electricians. Learn IC vs Non-IC rated fixtures, NEC Article 410 requirements, thermal protection, LED retrofits, and inspection tips.",
  keywords: [
    "recessed lighting installation",
    "IC rated recessed lights",
    "Non-IC rated fixtures",
    "NEC Article 410",
    "can light installation",
    "recessed lighting NEC code",
    "IC-AT airtight fixtures",
    "LED recessed lighting",
    "recessed light clearances",
    "recessed lighting inspection"
  ],
  openGraph: {
    title: "Recessed Lighting Installation: IC vs Non-IC Rated Guide",
    description: "Complete guide to IC vs Non-IC rated recessed lighting installation per NEC Article 410.",
    type: "article",
    publishedTime: "2025-04-05",
  },
};

function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 180" className="w-full h-44 md:h-52" aria-label="Recessed can lights in ceiling with insulation contact labels">
      {/* Ceiling plane */}
      <rect x="0" y="50" width="400" height="8" fill="#374151" stroke="#4b5563" strokeWidth="1"/>
      {/* Drywall layer */}
      <rect x="0" y="58" width="400" height="4" fill="#6b7280"/>

      {/* Insulation batts - left side */}
      <g>
        <rect x="0" y="20" width="90" height="30" fill="#fbbf24" fillOpacity="0.25" rx="2"/>
        <line x1="5" y1="25" x2="85" y2="25" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
        <line x1="5" y1="35" x2="85" y2="35" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
        <line x1="5" y1="45" x2="85" y2="45" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
      </g>

      {/* IC Rated fixture - left */}
      <g transform="translate(100, 10)">
        {/* Housing can */}
        <rect x="0" y="10" width="60" height="45" rx="3" fill="#1f2937" stroke="#22c55e" strokeWidth="2"/>
        {/* Trim ring */}
        <rect x="-4" y="48" width="68" height="6" rx="2" fill="#9ca3af" stroke="#d1d5db" strokeWidth="1"/>
        {/* Light source */}
        <circle cx="30" cy="50" r="10" fill="#22c55e" fillOpacity="0.3"/>
        <circle cx="30" cy="50" r="5" fill="#22c55e" fillOpacity="0.6"/>
        {/* Light rays */}
        <line x1="20" y1="58" x2="10" y2="78" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="30" y1="58" x2="30" y2="82" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="40" y1="58" x2="50" y2="78" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.3"/>
        {/* IC label */}
        <rect x="10" y="22" width="40" height="14" rx="2" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1"/>
        <text x="30" y="32" textAnchor="middle" fill="#22c55e" fontSize="8" fontWeight="bold">IC</text>
        {/* Insulation touching fixture */}
        <rect x="-20" y="10" width="20" height="30" fill="#fbbf24" fillOpacity="0.25" rx="2"/>
        <rect x="60" y="10" width="20" height="30" fill="#fbbf24" fillOpacity="0.25" rx="2"/>
      </g>

      {/* Insulation batts - middle */}
      <g>
        <rect x="185" y="20" width="30" height="30" fill="#fbbf24" fillOpacity="0.25" rx="2"/>
      </g>

      {/* Non-IC Rated fixture - right */}
      <g transform="translate(225, 10)">
        {/* Housing can */}
        <rect x="0" y="10" width="60" height="45" rx="3" fill="#1f2937" stroke="#ef4444" strokeWidth="2"/>
        {/* Trim ring */}
        <rect x="-4" y="48" width="68" height="6" rx="2" fill="#9ca3af" stroke="#d1d5db" strokeWidth="1"/>
        {/* Light source */}
        <circle cx="30" cy="50" r="10" fill="#ef4444" fillOpacity="0.3"/>
        <circle cx="30" cy="50" r="5" fill="#ef4444" fillOpacity="0.6"/>
        {/* Light rays */}
        <line x1="20" y1="58" x2="10" y2="78" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="30" y1="58" x2="30" y2="82" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3"/>
        <line x1="40" y1="58" x2="50" y2="78" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.3"/>
        {/* Non-IC label */}
        <rect x="5" y="22" width="50" height="14" rx="2" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1"/>
        <text x="30" y="32" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="bold">NON-IC</text>
        {/* Clearance gaps - insulation kept away */}
        <line x1="-15" y1="10" x2="-15" y2="55" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
        <line x1="75" y1="10" x2="75" y2="55" stroke="#ef4444" strokeWidth="1" strokeDasharray="3,3"/>
        <text x="-15" y="8" textAnchor="middle" fill="#ef4444" fontSize="6">3&quot;</text>
        <text x="75" y="8" textAnchor="middle" fill="#ef4444" fontSize="6">3&quot;</text>
      </g>

      {/* Insulation batts - right side */}
      <g>
        <rect x="310" y="20" width="90" height="30" fill="#fbbf24" fillOpacity="0.25" rx="2"/>
        <line x1="315" y1="25" x2="395" y2="25" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
        <line x1="315" y1="35" x2="395" y2="35" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
        <line x1="315" y1="45" x2="395" y2="45" stroke="#fbbf24" strokeWidth="0.5" strokeOpacity="0.4"/>
      </g>

      {/* Labels below */}
      <text x="130" y="105" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">IC Rated</text>
      <text x="130" y="117" textAnchor="middle" fill="#9ca3af" fontSize="7">Insulation Contact OK</text>
      <text x="255" y="105" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Non-IC Rated</text>
      <text x="255" y="117" textAnchor="middle" fill="#9ca3af" fontSize="7">3&quot; Clearance Required</text>

      {/* Junction box with wire */}
      <g transform="translate(340, 30)">
        <rect x="0" y="0" width="20" height="15" rx="2" fill="#374151" stroke="#6b7280" strokeWidth="1"/>
        <text x="10" y="10" textAnchor="middle" fill="#9ca3af" fontSize="5">J-BOX</text>
        <path d="M 10 15 Q 10 25, -60 35" stroke="#60a5fa" strokeWidth="1.5" fill="none" strokeDasharray="4,2"/>
      </g>

      {/* Attic / ceiling space label */}
      <text x="200" y="170" textAnchor="middle" fill="#6b7280" fontSize="9">NEC Article 410 - Luminaires in Contact with Insulation</text>
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
            { name: "Recessed Lighting Installation", url: "https://amporalabs.com/blog/recessed-lighting-installation-guide" },
          ]}
        />
        <BlogPostingJsonLd
          headline="Recessed Lighting Installation: IC vs Non-IC Rated Guide"
          description="Complete guide to IC vs Non-IC rated recessed lighting installation per NEC Article 410."
          datePublished="2025-04-05"
          url="https://amporalabs.com/blog/recessed-lighting-installation-guide"
        />

        <article className="max-w-4xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Recessed Lighting Installation</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-600/30 text-green-300 text-sm font-medium rounded-full">
                Installation
              </span>
              <span className="text-white/40 text-sm">April 5, 2025</span>
              <span className="text-white/40 text-sm">• 11 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Recessed Lighting Installation: IC vs Non-IC Rated Guide
            </h1>
            <p className="text-xl text-white/70">
              Recessed lighting is one of the most common fixture types installed in residential and commercial projects. Understanding IC ratings, NEC Article 410 requirements, and proper installation techniques is essential for safe, code-compliant work.
            </p>
          </header>

          <div className="mb-12 bg-gradient-to-br from-green-900/20 to-cyan-900/20 rounded-2xl p-6 border border-white/10">
            <HeroIllustration />
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2>IC vs Non-IC Rated Fixtures: What&apos;s the Difference?</h2>
            <p>
              The most critical distinction in recessed lighting is the <strong>Insulation Contact (IC) rating</strong>. This rating determines whether the fixture housing can be installed in direct contact with thermal insulation or whether clearance must be maintained. Getting this wrong is one of the most common code violations and a significant fire hazard.
            </p>

            <h3>IC Rated Fixtures</h3>
            <p>
              IC rated recessed luminaires are designed and tested to operate safely when thermal insulation is placed directly against and over the fixture housing. These fixtures incorporate thermal protection devices that limit housing temperature, preventing ignition of surrounding combustible materials.
            </p>
            <ul>
              <li><strong>Insulation can touch the housing</strong> on all sides and on top</li>
              <li>Maximum lamp wattage is typically lower than Non-IC equivalents</li>
              <li>Thermal protector shuts off the fixture if it overheats</li>
              <li>Required in virtually all insulated ceiling applications</li>
              <li>Double-walled construction provides additional heat isolation</li>
            </ul>

            <h3>Non-IC Rated Fixtures</h3>
            <p>
              Non-IC rated fixtures are <strong>not designed for insulation contact</strong> and require minimum clearances from all combustible materials. These fixtures are appropriate only where no insulation will be present near the fixture housing, such as between floors in multi-story buildings or in uninsulated ceilings.
            </p>
            <ul>
              <li><strong>Minimum 3-inch clearance</strong> required from insulation on all sides</li>
              <li>Typically allow higher wattage lamps</li>
              <li>Lower cost than IC rated equivalents</li>
              <li>Must not be covered or surrounded by insulation at any time</li>
              <li>Rarely appropriate for new residential construction with modern insulation requirements</li>
            </ul>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">IC vs Non-IC at a Glance</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Feature</th>
                    <th className="py-2 text-white">IC Rated</th>
                    <th className="py-2 text-white">Non-IC Rated</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Insulation Contact</td>
                    <td className="py-2 text-green-400">Allowed</td>
                    <td className="py-2 text-red-400">Not Allowed</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Required Clearance</td>
                    <td className="py-2">0 inches</td>
                    <td className="py-2">3 inches minimum</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Thermal Protection</td>
                    <td className="py-2">Built-in cutoff</td>
                    <td className="py-2">Relies on air space</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Typical Max Wattage</td>
                    <td className="py-2">75W incandescent</td>
                    <td className="py-2">150W incandescent</td>
                  </tr>
                  <tr>
                    <td className="py-2">Cost</td>
                    <td className="py-2">Higher</td>
                    <td className="py-2">Lower</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>IC-AT (Airtight) Rated Fixtures</h2>
            <p>
              IC-AT rated fixtures add another important dimension: <strong>air sealing</strong>. The &quot;AT&quot; designation means the fixture housing is sealed to prevent air leakage between conditioned and unconditioned spaces. This is increasingly important for energy code compliance.
            </p>
            <ul>
              <li><strong>Less than 2.0 CFM air leakage</strong> when tested at 75 Pascals pressure difference</li>
              <li>Required by most energy codes (IECC, ASHRAE 90.1) for insulated ceiling assemblies</li>
              <li>Reduces heating and cooling losses through the ceiling plane</li>
              <li>Prevents moisture-laden air from entering the attic, reducing condensation risk</li>
              <li>Gasket seal between housing and ceiling drywall</li>
            </ul>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Pro Tip:</p>
              <p className="text-white/80">
                Always specify IC-AT rated fixtures for new construction and remodels in insulated ceilings. The modest cost premium is far less than the expense of failing an energy code inspection or dealing with moisture problems from air leakage.
              </p>
            </div>

            <h2>NEC Article 410 Requirements for Recessed Luminaires</h2>
            <p>
              NEC Article 410, Part XI (Sections 410.115 through 410.122) governs the installation of recessed luminaires. These requirements are focused on fire prevention and safe heat dissipation.
            </p>

            <h3>410.116 - Clearances from Combustibles</h3>
            <p>
              This is the core section governing recessed fixture installation clearances:
            </p>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-3">
                <li><strong>410.116(A)(1) - Non-IC Fixtures:</strong> A minimum clearance of <span className="text-red-400 font-semibold">1/2 inch</span> must be maintained between the fixture and combustible materials, except at the point of support. Thermal insulation must be kept at least <span className="text-red-400 font-semibold">3 inches</span> away from the fixture enclosure, wiring compartment, and ballast/driver.</li>
                <li><strong>410.116(A)(2) - IC Rated Fixtures:</strong> Fixtures identified as suitable for insulation contact (Type IC) may be installed in direct contact with combustible materials and thermal insulation. Insulation may be placed directly over and around the fixture.</li>
                <li><strong>410.116(B) - Recessed Fixture Enclosures:</strong> The enclosure must provide adequate space for branch-circuit wiring connections and supply wiring.</li>
              </ul>
            </div>

            <h3>410.115 - Temperature</h3>
            <p>
              Recessed luminaires must be installed so that adjacent combustible materials are not subjected to temperatures exceeding <strong>90 degrees C (194 degrees F)</strong>. This requirement applies regardless of IC rating and is the fundamental safety principle behind all recessed lighting regulations.
            </p>

            <h3>410.117 - Wiring Requirements</h3>
            <p>
              Conductors that have insulation suitable for the temperature encountered must be used. The branch-circuit wiring that connects to the fixture must:
            </p>
            <ul>
              <li>Be rated for the temperature of the recessed fixture compartment</li>
              <li>Use a minimum of 60 degrees C rated conductors for connections to the fixture</li>
              <li>Not exceed the length of tap conductors specified by the manufacturer (typically 4 to 6 feet)</li>
            </ul>

            <h3>410.130(G) - Disconnecting Means</h3>
            <p>
              Per NEC 410.130(G), recessed luminaires with LED drivers or fluorescent ballasts installed in accessible ceiling spaces must have a disconnecting means either:
            </p>
            <ul>
              <li>Internal to the luminaire, or</li>
              <li>An accessible connector within the accessible ceiling space, located within sight of the luminaire and not more than the length of the flexible wiring permitted</li>
            </ul>
            <p>
              This disconnecting means must be accessible without having to remove the luminaire. Many modern LED recessed fixtures use a plug connector at the junction box to satisfy this requirement.
            </p>

            <h2>Thermal Protection Requirements</h2>
            <p>
              NEC 410.115(C) requires recessed luminaires installed in fire-rated or poke-through assemblies to have thermal protection. All recessed incandescent luminaires must be equipped with a thermal protection device that is an integral part of the fixture. This device:
            </p>
            <ul>
              <li>Senses the fixture temperature</li>
              <li>De-energizes the fixture before reaching dangerous temperatures</li>
              <li>Automatically resets when the fixture cools down</li>
              <li>Cannot be field-defeated or bypassed</li>
            </ul>
            <div className="bg-gradient-to-r from-amber-900/30 to-red-900/30 rounded-xl p-6 my-6 border border-amber-500/20">
              <p className="text-amber-300 font-semibold mb-2">Warning:</p>
              <p className="text-white/80">
                If a recessed fixture repeatedly cycles on and off (thermal protection tripping), do not remove the thermal protector or replace it with a higher-wattage unit. Instead, investigate the cause: wrong lamp wattage, insulation too close to a Non-IC fixture, or a failed thermal protector. Defeating thermal protection is a serious fire hazard and a code violation.
              </p>
            </div>

            <h2>Junction Box and Wiring Methods</h2>
            <p>
              Proper wiring of recessed fixtures involves understanding the junction box requirements and approved wiring methods.
            </p>

            <h3>Junction Box Location</h3>
            <p>
              Most recessed housings include an integral junction box or a separate junction box mounted on the housing. The NEC requires:
            </p>
            <ul>
              <li>Junction box must be accessible after installation (through the trim opening or from above)</li>
              <li>Branch circuit wiring connects to the junction box, not directly to the fixture leads</li>
              <li>A flexible whip (armored cable or flexible conduit) connects the junction box to the fixture housing</li>
              <li>Whip length is limited per manufacturer specifications, typically 4 to 6 feet</li>
            </ul>

            <h3>Approved Wiring Methods</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>NM Cable (Romex):</strong> Permitted for residential installations in accessible attic spaces. Must be supported and secured per NEC 334.30.</li>
                <li><strong>AC Cable (BX):</strong> Commonly used for the flexible connection between the junction box and the fixture housing.</li>
                <li><strong>MC Cable:</strong> Suitable for both the branch circuit run and the fixture whip. Common in commercial installations.</li>
                <li><strong>EMT Conduit:</strong> Used in commercial applications. Flexible conduit or liquidtight flexible conduit permitted for the final connection to the fixture.</li>
              </ul>
            </div>

            <h3>Wire Temperature Ratings</h3>
            <p>
              Inside the fixture junction box and within the fixture housing, temperatures can be significantly higher than ambient. The NEC requires:
            </p>
            <ul>
              <li>Tap conductors within 3 feet of the fixture must be rated for the fixture compartment temperature, typically <strong>90 degrees C minimum</strong></li>
              <li>Standard NM cable (rated at 90 degrees C for conductor insulation) is generally suitable for the branch circuit run</li>
              <li>The manufacturer&apos;s installation instructions specify the required conductor temperature rating</li>
            </ul>

            <h2>LED Retrofit Considerations</h2>
            <p>
              LED retrofit kits and integrated LED recessed fixtures have changed the recessed lighting landscape significantly. Here are the key considerations for electricians.
            </p>

            <h3>Retrofit Kit Types</h3>
            <ul>
              <li><strong>Screw-in LED bulbs:</strong> Direct replacement for incandescent lamps. Must respect the existing fixture IC/Non-IC rating and maximum wattage. Easiest upgrade path.</li>
              <li><strong>LED retrofit trim kits:</strong> Replace the existing trim and bulb. Connect via a medium-base Edison adapter that screws into the existing socket. Often include an integrated driver.</li>
              <li><strong>Complete LED modules:</strong> Replace the entire trim assembly and lamp holder. Connect to the existing junction box. Provide the best performance and efficiency.</li>
              <li><strong>Wafer / canless LED fixtures:</strong> Ultra-thin LED fixtures that mount directly to the junction box without a traditional housing can. Ideal for new construction and shallow ceiling cavities.</li>
            </ul>

            <h3>IC Rating and LED Heat</h3>
            <p>
              While LED fixtures produce far less heat than incandescent or halogen alternatives, the <strong>IC rating still matters</strong>. LED drivers generate heat, and in an enclosed, insulated space, temperatures can still reach levels that affect driver longevity and performance. Key points:
            </p>
            <ul>
              <li>LED retrofit kits installed in existing Non-IC housings still require 3-inch insulation clearance</li>
              <li>The reduced heat of LEDs does not change the rating of the existing housing</li>
              <li>IC-rated LED fixtures are designed for insulation contact and tested accordingly</li>
              <li>Many wafer-style LED fixtures are inherently IC-AT rated due to their sealed, low-profile design</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 my-6 border border-blue-500/20">
              <p className="text-blue-300 font-semibold mb-2">Key Point:</p>
              <p className="text-white/80">
                Installing an LED bulb in a Non-IC rated housing does not convert it to an IC rated fixture. The housing rating is determined by the manufacturer&apos;s listing and testing, not by the lamp type installed. Always maintain required clearances based on the housing rating.
              </p>
            </div>

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

            <h2>New Construction vs Remodel Housings</h2>
            <p>
              Recessed lighting housings come in two fundamental styles, each designed for a specific installation scenario.
            </p>

            <h3>New Construction Housings</h3>
            <p>
              New construction housings are designed to be installed <strong>before the ceiling drywall is in place</strong>. They feature:
            </p>
            <ul>
              <li>Adjustable bar hangers that nail or screw to ceiling joists</li>
              <li>Plaster frames for precise positioning relative to the finished ceiling plane</li>
              <li>Typically lower cost than remodel equivalents</li>
              <li>More secure mounting with direct joist attachment</li>
              <li>Available in IC, Non-IC, IC-AT, and shallow-ceiling versions</li>
            </ul>

            <h3>Remodel (Old Work) Housings</h3>
            <p>
              Remodel housings are designed for retrofit installation through a <strong>finished ceiling</strong>. Key features include:
            </p>
            <ul>
              <li>Spring clips or torsion springs that grip the back of the drywall</li>
              <li>No bar hangers needed - supports from the drywall cutout</li>
              <li>Installed through a hole saw cut in the finished ceiling</li>
              <li>Some models include friction-fit retention clips</li>
              <li>Must verify ceiling cavity depth before selection</li>
            </ul>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Housing Selection Guide</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Scenario</th>
                    <th className="py-2 text-white">Housing Type</th>
                    <th className="py-2 text-white">IC Rating</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">Insulated attic above, new construction</td>
                    <td className="py-2">New Construction</td>
                    <td className="py-2 text-green-400">IC-AT Required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Insulated attic above, finished ceiling</td>
                    <td className="py-2">Remodel</td>
                    <td className="py-2 text-green-400">IC-AT Required</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Between floors, no insulation</td>
                    <td className="py-2">New Construction</td>
                    <td className="py-2">Non-IC Acceptable</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Shallow ceiling, insulated</td>
                    <td className="py-2">Low-Profile / Wafer</td>
                    <td className="py-2 text-green-400">IC-AT Required</td>
                  </tr>
                  <tr>
                    <td className="py-2">Commercial drop ceiling</td>
                    <td className="py-2">New Construction or Grid Mount</td>
                    <td className="py-2">Per insulation conditions</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Dimmer Compatibility and Wiring</h2>
            <p>
              Dimmer compatibility is one of the most common issues electricians encounter with recessed lighting, especially when upgrading to LED.
            </p>

            <h3>LED Dimmer Requirements</h3>
            <p>
              Standard incandescent dimmers (leading-edge/TRIAC) often cause problems with LED fixtures, including flickering, buzzing, limited dimming range, and premature driver failure. For LED recessed lighting:
            </p>
            <ul>
              <li><strong>Use LED-rated dimmers</strong> (trailing-edge or universal dimmers) compatible with the specific LED fixture</li>
              <li>Check the fixture manufacturer&apos;s compatible dimmer list</li>
              <li>Match the dimmer&apos;s minimum load rating to the total LED wattage on the circuit</li>
              <li>Some dimmers require a minimum load (e.g., 25W) that a few LED fixtures may not meet</li>
              <li>Ensure the dimmer is rated for the total wattage of all fixtures on the circuit</li>
            </ul>

            <h3>Wiring Considerations for Dimmed Circuits</h3>
            <ul>
              <li>All fixtures on a dimmed circuit should be the same model to ensure uniform dimming</li>
              <li>Use 12 AWG conductors for 20A circuits and 14 AWG for 15A circuits as with any branch circuit</li>
              <li>The dimmer switch requires a neutral conductor in the switch box per NEC 404.2(C)</li>
              <li>3-way and 4-way dimming requires compatible dimmer and companion switches</li>
              <li>Maximum number of fixtures per dimmer depends on the dimmer VA rating and fixture wattage</li>
            </ul>

            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-semibold mb-2">Dimmer Sizing Example:</p>
              <p className="text-white/80 font-mono">
                600W LED dimmer / 10W per LED fixture = 60 fixtures maximum<br/>
                However, derate to 80%: 60 x 0.80 = 48 fixtures practical maximum
              </p>
              <p className="text-white/60 text-sm mt-2">
                Always consult the dimmer manufacturer&apos;s specifications for maximum fixture count.
              </p>
            </div>

            <h2>Insulation Contact Requirements in Detail</h2>
            <p>
              Understanding the nuances of insulation contact requirements prevents common installation errors and inspection failures.
            </p>

            <h3>When IC Rating Is Required</h3>
            <p>
              NEC 410.116 effectively requires IC-rated fixtures whenever thermal insulation is present or may be installed in the future above the ceiling plane. In practice, this means:
            </p>
            <ul>
              <li><strong>All insulated attic installations</strong> - both blown-in and batt insulation</li>
              <li><strong>Exterior walls with insulation</strong> for wall-wash recessed fixtures</li>
              <li><strong>Cathedral ceilings</strong> with insulation between rafters</li>
              <li><strong>Any location where insulation could later be added</strong> (many inspectors enforce this interpretation)</li>
            </ul>

            <h3>Non-IC Clearance Enforcement</h3>
            <p>
              When Non-IC fixtures are used (in permitted locations), maintaining the 3-inch clearance requires:
            </p>
            <ul>
              <li>Insulation dams or barriers around each fixture</li>
              <li>Rigid material (sheet metal, drywall scraps, or commercial insulation shields) to hold back insulation</li>
              <li>Barriers must extend from the ceiling plane to at least 3 inches above the top of the fixture</li>
              <li>No insulation resting on top of the fixture housing</li>
            </ul>

            <h2>Circuit Loading Calculations for Recessed Lighting</h2>
            <p>
              Proper circuit loading ensures compliance with NEC branch circuit requirements and prevents overloaded circuits.
            </p>

            <h3>NEC 220.12 - Lighting Load Calculations</h3>
            <p>
              For residential occupancies, the NEC requires a minimum of <strong>3 VA per square foot</strong> for general lighting. Recessed fixtures count toward this calculation. For dedicated lighting circuits:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <h4 className="text-white font-semibold mb-3">Circuit Loading Examples</h4>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-2 text-white">Fixture Type</th>
                    <th className="py-2 text-white">Watts Each</th>
                    <th className="py-2 text-white">Max on 15A Circuit</th>
                    <th className="py-2 text-white">Max on 20A Circuit</th>
                  </tr>
                </thead>
                <tbody className="text-white/70">
                  <tr className="border-b border-white/5">
                    <td className="py-2">LED 6&quot; (typical)</td>
                    <td className="py-2">10-14W</td>
                    <td className="py-2">~12 fixtures</td>
                    <td className="py-2">~16 fixtures</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">LED 4&quot; (typical)</td>
                    <td className="py-2">7-10W</td>
                    <td className="py-2">~16 fixtures</td>
                    <td className="py-2">~22 fixtures</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2">Incandescent 65W BR30</td>
                    <td className="py-2">65W</td>
                    <td className="py-2">~2 fixtures</td>
                    <td className="py-2">~3 fixtures</td>
                  </tr>
                  <tr>
                    <td className="py-2">Incandescent 75W PAR30</td>
                    <td className="py-2">75W</td>
                    <td className="py-2">~2 fixtures</td>
                    <td className="py-2">~2 fixtures</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-white/50 text-sm mt-3">
                * Based on 80% of circuit capacity for continuous loads: 15A x 120V x 0.80 = 1,440W; 20A x 120V x 0.80 = 1,920W
              </p>
            </div>

            <h3>Continuous vs Non-Continuous Loads</h3>
            <p>
              Per NEC 210.20(A), where a luminaire operates for 3 hours or more continuously (common for recessed lighting in occupied spaces), it is considered a <strong>continuous load</strong>. Branch circuit conductors and overcurrent devices must be sized at 125% of the continuous load:
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <p className="text-white font-mono">10 LED fixtures x 12W = 120W total load</p>
              <p className="text-white font-mono">120W x 1.25 = 150W design load (continuous)</p>
              <p className="text-white font-mono">150W / 120V = 1.25A on a 15A or 20A circuit</p>
              <p className="text-white/60 text-sm mt-2">LED recessed lighting rarely stresses circuit capacity, but always verify the total when combining with other loads on the circuit.</p>
            </div>

            <h2>Common Installation Mistakes</h2>
            <p>
              Experienced electricians and inspectors consistently identify these recurring problems with recessed lighting installations:
            </p>

            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-3">
                <li>
                  <strong className="text-red-400">1. Non-IC fixtures in insulated ceilings:</strong> The most dangerous mistake. Insulation pushed against a Non-IC fixture can reach ignition temperatures. Always verify the fixture rating matches the installation environment.
                </li>
                <li>
                  <strong className="text-red-400">2. Exceeding maximum lamp wattage:</strong> Installing a 100W bulb in a fixture rated for 75W maximum. The wattage rating is stamped on the fixture socket or housing label.
                </li>
                <li>
                  <strong className="text-red-400">3. Missing thermal protection:</strong> Older recessed fixtures may lack thermal protectors. Per NEC 410.115(C), thermally protected fixtures are required. Replace non-compliant housings during renovations.
                </li>
                <li>
                  <strong className="text-red-400">4. Improper junction box access:</strong> Burying junction boxes above the fixture so they cannot be accessed. Junction boxes must remain accessible per NEC 314.29.
                </li>
                <li>
                  <strong className="text-red-400">5. Wrong dimmer type for LED:</strong> Using a standard incandescent dimmer with LED fixtures, causing flickering, buzzing, and reduced lamp life.
                </li>
                <li>
                  <strong className="text-red-400">6. Missing neutral at dimmer switch:</strong> NEC 404.2(C) requires a neutral conductor at the switch location. Older wiring may use a switch loop without a neutral.
                </li>
                <li>
                  <strong className="text-red-400">7. Inadequate support for remodel cans:</strong> Relying solely on friction clips in crumbling ceiling material. Verify ceiling material can support the fixture weight.
                </li>
                <li>
                  <strong className="text-red-400">8. Cutting into structural members:</strong> Cutting ceiling holes that damage joists, trusses, or other structural elements. Always verify the location of structural members before cutting.
                </li>
                <li>
                  <strong className="text-red-400">9. Fire-rated ceiling penetrations:</strong> Installing recessed fixtures in fire-rated ceiling assemblies without using fire-rated housings. NEC 410.116(C) addresses this requirement.
                </li>
                <li>
                  <strong className="text-red-400">10. Missing disconnecting means:</strong> Failing to provide the required accessible disconnect per NEC 410.130(G) for LED fixtures with remote drivers.
                </li>
              </ul>
            </div>

            <h2>Inspection Tips for Recessed Lighting</h2>
            <p>
              Whether you are preparing for a rough-in inspection or a final inspection, these points will help ensure your recessed lighting installation passes the first time.
            </p>

            <h3>Rough-In Inspection Checklist</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li>&#9744; All housings are properly secured to framing (new construction) or ceiling material (remodel)</li>
                <li>&#9744; IC rating is visible and matches the installation environment</li>
                <li>&#9744; Junction boxes are accessible and properly secured</li>
                <li>&#9744; Wiring is properly supported and secured per NEC 334.30 (NM cable) or applicable article</li>
                <li>&#9744; Correct wire gauge for circuit ampacity (14 AWG for 15A, 12 AWG for 20A)</li>
                <li>&#9744; No more than the manufacturer-specified number of fixtures per circuit</li>
                <li>&#9744; Proper clearances maintained for Non-IC fixtures (3 inches from insulation)</li>
                <li>&#9744; Thermal insulation dams installed where Non-IC fixtures are used near insulation</li>
                <li>&#9744; Fire-rated housings used in fire-rated ceiling assemblies</li>
                <li>&#9744; Plaster frames properly positioned for finished ceiling plane</li>
              </ul>
            </div>

            <h3>Final Inspection Checklist</h3>
            <div className="bg-white/5 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li>&#9744; Correct trim type installed (baffle, reflector, gimbal, etc.)</li>
                <li>&#9744; Lamp wattage does not exceed fixture maximum rating</li>
                <li>&#9744; Thermal protection operational (fixture cycles off when overheating)</li>
                <li>&#9744; Dimmer is LED-compatible if LED fixtures are installed</li>
                <li>&#9744; All fixtures operational on correct switch/dimmer</li>
                <li>&#9744; No visible gaps between trim and ceiling (air seal for IC-AT)</li>
                <li>&#9744; Insulation properly placed around and over IC-rated fixtures</li>
                <li>&#9744; Disconnecting means accessible per NEC 410.130(G)</li>
                <li>&#9744; Circuit loading within 80% of breaker rating for continuous loads</li>
                <li>&#9744; All junction box covers in place and accessible</li>
              </ul>
            </div>

            <h3>Documentation to Have Ready</h3>
            <ul>
              <li>Fixture spec sheets showing IC/Non-IC rating and maximum wattage</li>
              <li>Dimmer compatibility documentation if using LED fixtures</li>
              <li>Fire-rated assembly documentation if applicable</li>
              <li>Circuit loading calculations for the lighting circuits</li>
              <li>Manufacturer installation instructions available on site</li>
            </ul>

            <h2>Best Practices Summary</h2>
            <p>
              Following these best practices will ensure safe, efficient, and code-compliant recessed lighting installations:
            </p>
            <div className="bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-xl p-6 my-6">
              <ul className="text-white/80 space-y-2">
                <li><strong>1.</strong> Default to IC-AT rated fixtures for all insulated ceiling installations.</li>
                <li><strong>2.</strong> Specify LED-compatible dimmers and verify compatibility with the specific LED fixture model.</li>
                <li><strong>3.</strong> Use wafer/canless LED fixtures for shallow ceiling cavities and remodel applications.</li>
                <li><strong>4.</strong> Always verify ceiling cavity depth before selecting housing type.</li>
                <li><strong>5.</strong> Calculate circuit loading including the 125% continuous load factor.</li>
                <li><strong>6.</strong> Provide accessible disconnecting means per NEC 410.130(G).</li>
                <li><strong>7.</strong> Maintain proper wire temperature ratings within fixture compartments.</li>
                <li><strong>8.</strong> Use fire-rated housings in fire-rated ceiling assemblies.</li>
                <li><strong>9.</strong> Never exceed the fixture&apos;s maximum lamp wattage rating.</li>
                <li><strong>10.</strong> Document fixture ratings, dimmer compatibility, and circuit loading for inspections.</li>
              </ul>
            </div>
          </div>

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
        </article>
      </div>
    </main>
  );
}
