import { MetadataRoute } from 'next'

// Blog post data for sitemap generation - all 63 posts
const blogPosts = [
  { slug: 'nec-article-210-branch-circuits-guide', date: '2025-01-27' },
  { slug: 'how-to-calculate-voltage-drop', date: '2025-01-23' },
  { slug: 'electrical-inspection-checklist', date: '2025-01-20' },
  { slug: 'wire-sizing-guide-nec-ampacity-tables', date: '2024-12-10' },
  { slug: 'ai-tools-for-electricians', date: '2024-12-06' },
  { slug: 'nec-article-250-grounding-guide', date: '2024-12-13' },
  { slug: 'conduit-fill-calculation-guide', date: '2024-12-17' },
  { slug: 'thhn-vs-thwn-wire-differences', date: '2024-12-20' },
  { slug: 'electrical-panel-troubleshooting', date: '2024-12-24' },
  { slug: 'nec-service-entrance-requirements', date: '2024-12-30' },
  { slug: 'nec-article-240-overcurrent-protection', date: '2025-01-03' },
  { slug: '3-phase-power-calculations', date: '2025-01-06' },
  { slug: 'gfci-vs-afci-requirements', date: '2025-01-10' },
  { slug: 'box-fill-calculations-nec-314', date: '2025-01-13' },
  { slug: 'motor-circuit-protection-sizing', date: '2025-01-16' },
  { slug: 'aluminum-vs-copper-wiring', date: '2025-01-24' },
  { slug: 'residential-load-calculations', date: '2025-01-28' },
  { slug: 'ev-charger-installation-guide', date: '2025-01-30' },
  { slug: 'transformer-sizing-guide', date: '2025-02-01' },
  { slug: 'emergency-standby-power-systems', date: '2025-02-03' },
  // Batch 2: Added 2025-02-05
  { slug: 'bathroom-electrical-code-requirements', date: '2025-02-05' },
  { slug: 'underground-wiring-installation-guide', date: '2025-02-05' },
  { slug: 'electrical-symbols-blueprint-reading', date: '2025-02-05' },
  { slug: 'power-factor-correction-basics', date: '2025-02-05' },
  { slug: 'outdoor-receptacle-requirements-nec', date: '2025-02-05' },
  // Batch 3: Added 2025-02-06
  { slug: 'hazardous-locations-nec-500', date: '2025-02-06' },
  { slug: 'electrical-grounding-vs-bonding', date: '2025-02-06' },
  { slug: 'solar-pv-system-installation-nec-690', date: '2025-02-06' },
  { slug: 'derating-factors-conductor-ampacity', date: '2025-02-06' },
  { slug: 'electrical-service-upgrade-200-amp', date: '2025-02-06' },
  { slug: 'swimming-pool-electrical-nec-680', date: '2025-02-06' },
  { slug: 'commercial-lighting-controls-nec', date: '2025-02-06' },
  { slug: 'temporary-wiring-construction-sites', date: '2025-02-06' },
  { slug: 'electrical-fault-current-calculations', date: '2025-02-06' },
  { slug: 'kitchen-electrical-requirements-nec', date: '2025-02-06' },
  // Batch 4: Added 2025-02-07
  { slug: 'commercial-kitchen-electrical-requirements', date: '2025-02-07' },
  { slug: 'data-center-electrical-design', date: '2025-02-07' },
  { slug: 'low-voltage-wiring-basics', date: '2025-02-07' },
  { slug: 'electrical-safety-nfpa-70e', date: '2025-02-07' },
  { slug: 'receptacle-types-configurations-guide', date: '2025-02-07' },
  // Batch 5: Added 2025-02-08
  { slug: 'garage-electrical-requirements-nec', date: '2025-02-08' },
  { slug: 'electrical-conduit-types-guide', date: '2025-02-08' },
  { slug: 'whole-house-surge-protection-nec', date: '2025-02-08' },
  { slug: 'smoke-detector-wiring-requirements', date: '2025-02-08' },
  { slug: 'electrical-wire-color-code-guide', date: '2025-02-08' },
  { slug: 'generator-transfer-switch-installation', date: '2025-02-08' },
  { slug: 'electrical-load-balancing-guide', date: '2025-02-08' },
  { slug: 'nec-article-334-romex-nm-cable', date: '2025-02-08' },
  { slug: 'multimeter-guide-electricians', date: '2025-02-08' },
  { slug: 'nec-working-space-clearances-110-26', date: '2025-02-08' },
  { slug: 'whole-house-rewiring-guide', date: '2025-02-08' },
  { slug: 'electrical-apprenticeship-career-guide', date: '2025-02-08' },
  { slug: 'fire-alarm-wiring-nec-760', date: '2025-02-08' },
  { slug: 'panel-schedule-labeling-nec-408', date: '2025-02-08' },
  { slug: 'disconnect-switch-requirements-nec', date: '2025-02-08' },
  { slug: 'knob-and-tube-wiring-guide', date: '2025-02-08' },
  { slug: 'receptacle-height-requirements-nec', date: '2025-02-08' },
  { slug: 'electrical-estimating-contractors', date: '2025-02-08' },
  { slug: 'surge-arrester-vs-tvss', date: '2025-02-08' },
  { slug: 'nec-article-230-service-requirements', date: '2025-02-08' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://amporalabs.com'
  const currentDate = new Date().toISOString()

  // Generate blog post URLs
  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Calculators Hub
    {
      url: `${baseUrl}/calculators`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Calculator Pages
    {
      url: `${baseUrl}/calculators/voltage-drop`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/wire-sizing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/conduit-fill`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/arc-flash`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/load-calculation`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculators/motor-sizing`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Feature Pages
    {
      url: `${baseUrl}/features/ai-assistant`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/nec-code-reference`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/features/photo-analysis`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features/troubleshooting`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Blog Hub
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog Posts
    ...blogUrls,
    // Enterprise / B2B Page
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Resource Pages
    {
      url: `${baseUrl}/electrical-formulas`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // About Page
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}
