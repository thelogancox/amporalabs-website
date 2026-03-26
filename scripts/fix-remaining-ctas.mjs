import fs from 'fs';
import path from 'path';

const APP_STORE_URL = 'https://apps.apple.com/us/app/ampora/id6753693522';

const ENHANCED_BOTTOM_CTA = `            {/* CTA Section */}
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
                    href="${APP_STORE_URL}"
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
            </section>`;

const files = [
  'app/blog/3-phase-power-calculations/page.tsx',
  'app/blog/aluminum-vs-copper-wiring/page.tsx',
  'app/blog/box-fill-calculations-nec-314/page.tsx',
  'app/blog/emergency-standby-power-systems/page.tsx',
  'app/blog/ev-charger-installation-guide/page.tsx',
  'app/blog/gfci-vs-afci-requirements/page.tsx',
  'app/blog/motor-circuit-protection-sizing/page.tsx',
  'app/blog/nec-article-240-overcurrent-protection/page.tsx',
  'app/blog/residential-load-calculations/page.tsx',
  'app/blog/transformer-sizing-guide/page.tsx',
];

let fixed = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  // Find the div-based CTA that contains apps.apple.com
  let ctaStartLine = -1;
  let ctaEndLine = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Look for div-based CTA patterns (bg-gradient with rounded-2xl and text-center)
    if (line.includes('bg-gradient-to-r') && line.includes('rounded-2xl') &&
        line.includes('text-center') && line.includes('<div')) {
      // Check if this contains App Store link
      let hasAppStoreLink = false;
      for (let j = i; j < Math.min(i + 20, lines.length); j++) {
        if (lines[j].includes('apps.apple.com')) {
          hasAppStoreLink = true;
          break;
        }
      }

      if (hasAppStoreLink) {
        // Check if previous line is a CTA comment
        if (i > 0 && lines[i-1].trim().startsWith('{/*') && lines[i-1].includes('CTA')) {
          ctaStartLine = i - 1;
        } else {
          ctaStartLine = i;
        }

        // Find closing </div> by tracking depth from the opening div
        let depth = 0;
        for (let j = i; j < lines.length; j++) {
          const divOpens = (lines[j].match(/<div/g) || []).length;
          const divCloses = (lines[j].match(/<\/div>/g) || []).length;
          depth += divOpens - divCloses;
          if (depth <= 0 && divCloses > 0) {
            ctaEndLine = j;
            break;
          }
        }
        break;
      }
    }
  }

  if (ctaStartLine !== -1 && ctaEndLine !== -1) {
    const beforeCTA = lines.slice(0, ctaStartLine);
    const afterCTA = lines.slice(ctaEndLine + 1);
    content = [...beforeCTA, ENHANCED_BOTTOM_CTA, ...afterCTA].join('\n');
    fs.writeFileSync(file, content, 'utf-8');
    fixed++;
    console.log(`Fixed: ${file}`);
  } else {
    console.log(`Could not find CTA in: ${file}`);
  }
}

console.log(`\nFixed ${fixed} of ${files.length} files`);
