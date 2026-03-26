import fs from 'fs';
import path from 'path';

const BLOG_DIR = path.resolve('app/blog');
const APP_STORE_URL = 'https://apps.apple.com/us/app/ampora/id6753693522';

// Mid-article CTA - compact banner
const MID_ARTICLE_CTA = `
            {/* Mid-Article CTA */}
            <div className="not-prose my-12 bg-gradient-to-r from-purple-900/40 to-cyan-900/40 rounded-xl p-6 border border-purple-500/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1 text-center sm:text-left">
                  <p className="font-display font-bold text-lg text-white mb-1">Ampora — The Electrician&apos;s AI Companion</p>
                  <p className="text-white/60 text-sm">Instant NEC code answers, electrical calculators, and AI troubleshooting. Free on iOS.</p>
                </div>
                <a
                  href="${APP_STORE_URL}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download Free
                </a>
              </div>
            </div>`;

// Enhanced bottom CTA
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

function findMidArticleInsertionPoint(content) {
  // Strategy: Find the 3rd or 4th closing </section> tag within the article content
  // to insert mid-article CTA

  const lines = content.split('\n');
  let sectionCloseCount = 0;
  let inArticleContent = false;
  let insertLineIndex = -1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect we're in the prose/article content area
    if (line.includes('prose prose-invert') || line.includes('prose-invert prose-lg')) {
      inArticleContent = true;
      continue;
    }

    if (!inArticleContent) continue;

    // Count closing section tags
    if (line.trim() === '</section>' || line.trim().startsWith('</section>')) {
      sectionCloseCount++;
      // Insert after the 3rd section closes (roughly mid-article for 7-8 section posts)
      if (sectionCloseCount === 3) {
        insertLineIndex = i + 1;
        break;
      }
    }
  }

  // Fallback: if we couldn't find sections, look for the 3rd h2 closing
  if (insertLineIndex === -1) {
    let h2Count = 0;
    inArticleContent = false;
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('prose prose-invert') || line.includes('prose-invert prose-lg')) {
        inArticleContent = true;
        continue;
      }
      if (!inArticleContent) continue;

      if (line.includes('<h2')) {
        h2Count++;
        if (h2Count === 4) {
          // Insert right before the 4th h2
          insertLineIndex = i;
          break;
        }
      }
    }
  }

  // Last fallback: insert roughly at 40% of the file
  if (insertLineIndex === -1) {
    insertLineIndex = Math.floor(lines.length * 0.4);
  }

  return insertLineIndex;
}

function findAndReplaceBottomCTA(content) {
  // Match various CTA section patterns and replace with enhanced version
  // Pattern 1: {/* CTA Section */} followed by <section className="bg-gradient...
  // Pattern 2: Just <section className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 my-12">

  const lines = content.split('\n');
  let ctaStartLine = -1;
  let ctaEndLine = -1;

  // Find the CTA section that contains the App Store link
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Look for CTA section comment or the gradient section that contains App Store link
    if ((line.includes('{/* CTA Section */}') || line.includes('{/* CTA */}')) ||
        (line.includes('bg-gradient-to-r from-purple-900/30 to-cyan-900/30') &&
         !line.includes('border-purple-500/20'))) {

      // Verify this section contains the App Store link (within next 20 lines)
      let hasAppStoreLink = false;
      for (let j = i; j < Math.min(i + 25, lines.length); j++) {
        if (lines[j].includes('apps.apple.com')) {
          hasAppStoreLink = true;
          break;
        }
      }

      if (hasAppStoreLink) {
        // Find the start - might be the comment line or the section line
        ctaStartLine = line.includes('{/*') ? i : i;
        // Check if previous line is a comment
        if (i > 0 && lines[i-1].trim().startsWith('{/*') && lines[i-1].includes('CTA')) {
          ctaStartLine = i - 1;
        }

        // Find the closing </section> tag
        let depth = 0;
        for (let j = i; j < lines.length; j++) {
          const sectionOpens = (lines[j].match(/<section/g) || []).length;
          const sectionCloses = (lines[j].match(/<\/section>/g) || []).length;
          depth += sectionOpens - sectionCloses;
          if (depth <= 0 && sectionCloses > 0) {
            ctaEndLine = j;
            break;
          }
        }
        break;
      }
    }
  }

  if (ctaStartLine === -1 || ctaEndLine === -1) {
    return null; // Could not find CTA to replace
  }

  return { startLine: ctaStartLine, endLine: ctaEndLine };
}

function hasExistingMidArticleCTA(content) {
  return content.includes('Mid-Article CTA') || content.includes("Electrician's AI Companion") || content.includes("Electrician&apos;s AI Companion");
}

// Process all blog posts
const blogDirs = fs.readdirSync(BLOG_DIR).filter(f => {
  const fullPath = path.join(BLOG_DIR, f);
  return fs.statSync(fullPath).isDirectory();
});

let processed = 0;
let midCTAAdded = 0;
let bottomCTAEnhanced = 0;
let errors = [];

for (const dir of blogDirs) {
  const filePath = path.join(BLOG_DIR, dir, 'page.tsx');
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // 1. Add mid-article CTA if not already present
  if (!hasExistingMidArticleCTA(content)) {
    const insertLine = findMidArticleInsertionPoint(content);
    if (insertLine > 0) {
      const lines = content.split('\n');
      lines.splice(insertLine, 0, MID_ARTICLE_CTA);
      content = lines.join('\n');
      modified = true;
      midCTAAdded++;
    }
  }

  // 2. Enhance bottom CTA
  const ctaLocation = findAndReplaceBottomCTA(content);
  if (ctaLocation) {
    const lines = content.split('\n');
    const beforeCTA = lines.slice(0, ctaLocation.startLine);
    const afterCTA = lines.slice(ctaLocation.endLine + 1);
    content = [...beforeCTA, ENHANCED_BOTTOM_CTA, ...afterCTA].join('\n');
    modified = true;
    bottomCTAEnhanced++;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    processed++;
  }
}

console.log(`\nProcessed: ${processed} files`);
console.log(`Mid-article CTAs added: ${midCTAAdded}`);
console.log(`Bottom CTAs enhanced: ${bottomCTAEnhanced}`);
if (errors.length) {
  console.log(`Errors: ${errors.join(', ')}`);
}
