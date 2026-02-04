import { MetadataRoute } from 'next'

// Blog post data for sitemap generation
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
