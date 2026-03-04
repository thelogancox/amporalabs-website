# Design: 40 SEO-Driven Blog Posts (Batch 4)

**Date:** 2026-03-04
**Goal:** Add 40 new blog posts targeting high-search-volume electrical topics

## Approach
- Parallel agent-driven creation using existing blog post template structure
- Each post: metadata, HeroIllustration SVG, BreadcrumbJsonLd, BlogPostingJsonLd, content, CTA, related articles, footer
- Update `app/blog/page.tsx`: both `blogPosts` array and `getThumbnail()` function
- All posts dated 2026-03-04

## 40 Topics

### NEC Code (8)
1. `nec-article-440-hvac-electrical` - NEC Article 440: HVAC Equipment Electrical Requirements
2. `nec-article-422-appliance-circuits` - NEC Article 422: Appliance Wiring & Circuit Requirements
3. `nec-article-517-healthcare-electrical` - NEC Article 517: Healthcare Facility Electrical Guide
4. `nec-junction-box-rules-314` - NEC Junction Box Rules: Article 314 Requirements
5. `tandem-breakers-nec-rules` - Tandem Breakers: NEC Rules for Slim/Twin Breakers
6. `ground-fault-protection-services` - Ground Fault Protection for Services: NEC 230.95
7. `nec-article-225-outside-feeders` - NEC Article 225: Outside Branch Circuits & Feeders
8. `selective-coordination-requirements` - Selective Coordination: NEC Requirements Guide

### Calculations (5)
9. `conduit-bending-calculations` - Conduit Bending Calculations: Offsets, Kicks & Saddles
10. `generator-sizing-calculation-guide` - Generator Sizing Guide: How to Calculate Backup Power
11. `hvac-circuit-sizing-guide` - HVAC Circuit Sizing: AC Units & Heat Pump Circuits
12. `feeder-sizing-calculations-nec` - Feeder Sizing Calculations: NEC Requirements Guide
13. `electrical-cost-per-square-foot` - Electrical Cost Per Square Foot: New Construction Guide

### Installation (10)
14. `mini-split-wiring-installation` - Mini-Split AC Wiring & Installation Guide
15. `dimmer-switch-wiring-guide` - Dimmer Switch Wiring: Types, Compatibility & Installation
16. `240v-outlet-wiring-guide` - 240V Outlet Wiring: Dryer, Range & EV Circuits
17. `hot-tub-spa-electrical-wiring` - Hot Tub & Spa Electrical Wiring Guide
18. `pvc-conduit-installation-guide` - PVC Conduit Installation: Gluing, Bending & Joints
19. `under-cabinet-lighting-wiring` - Under Cabinet Lighting: Wiring Methods & NEC Rules
20. `detached-building-electrical-guide` - Detached Building Electrical: Garages, Shops & ADUs
21. `home-workshop-electrical-setup` - Home Workshop Electrical: Planning Circuits for Tools
22. `basement-electrical-wiring-guide` - Basement Electrical Wiring: Finishing to Code
23. `bathroom-exhaust-fan-wiring` - Bathroom Exhaust Fan Wiring & Installation Guide

### Troubleshooting (5)
24. `afci-breaker-nuisance-tripping` - AFCI Breaker Nuisance Tripping: Causes & Solutions
25. `neutral-vs-ground-wire-explained` - Neutral vs Ground Wire: Understanding the Difference
26. `double-tapped-breakers-guide` - Double Tapped Breakers: Dangers & How to Fix
27. `federal-pacific-zinsco-panels` - Federal Pacific & Zinsco Panels: Safety & Replacement
28. `circuit-breaker-wont-reset` - Circuit Breaker Won't Reset: Diagnosis & Solutions

### Safety (4)
29. `electrical-safety-homeowners-guide` - Electrical Safety for Homeowners: Warning Signs Guide
30. `aluminum-wiring-remediation-guide` - Aluminum Wiring Remediation: Repair Methods Guide
31. `electrical-fire-prevention-guide` - Electrical Fire Prevention: Causes & Code Requirements
32. `live-electrical-work-safety` - Working on Live Electrical: NFPA 70E Safety Rules

### Materials (4)
33. `circuit-breaker-types-explained` - Circuit Breaker Types: Standard, GFCI, AFCI & More
34. `wire-splicing-methods-compared` - Wire Splicing Methods: Nuts vs Wago vs Push-In
35. `led-driver-selection-guide` - LED Driver Selection: Types, Dimming & Compatibility
36. `electrical-tape-types-ratings` - Electrical Tape Types: Ratings, Uses & Application

### Technology (3)
37. `home-ev-charger-comparison` - Home EV Charger Comparison: Top Brands Reviewed
38. `electrical-panel-monitoring-systems` - Electrical Panel Monitoring: Real-Time Load Systems
39. `electrical-apps-software-guide` - Electrical Apps & Software for Modern Electricians

### Inspections (1)
40. `final-electrical-inspection-guide` - Final Electrical Inspection: Failures & Preparation

## Implementation Strategy
- Use parallel background agents (batches of ~8) to create post files
- Each agent writes one blog post page.tsx file
- After all posts created, update page.tsx (blogPosts array + getThumbnail function)
- Build and verify
