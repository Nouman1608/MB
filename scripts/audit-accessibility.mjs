#!/usr/bin/env node
/**
 * Flagship Dominance/Trust programme, Section 43 (2026-08-31, D-099).
 *
 * A lightweight, dependency-free WCAG 2.2 AA structural audit -- reads the
 * BUILT site (run `npm run build` first, same convention as the other
 * dist/-dependent audits in this repo) and checks facts that are cheap to
 * verify from static HTML without a browser or a new dependency (no
 * Playwright/axe-core -- matches this repo's established preference for
 * not pulling in a heavy dependency where a plain script will do, and
 * keeps this check fast enough to run in the standing CI gate on every
 * push):
 *
 *   [1] Every non-hidden form control (input/select/textarea) has a
 *       programmatically associated <label for="...">, so a screen-reader
 *       user knows what each field is for (WCAG 1.3.1, 3.3.2, 4.1.2).
 *   [2] Every <img> has an alt attribute (WCAG 1.1.1) -- present, not
 *       necessarily non-empty (an empty alt="" is a valid, intentional
 *       "decorative image" marker).
 *   [3] Heading levels do not skip (e.g. an h2 directly followed by an
 *       h4 with no h3) within a page (WCAG 1.3.1/2.4.6 -- a skip breaks
 *       the document outline a screen-reader's heading-navigation relies
 *       on). Does not require exactly one h1 -- some legitimate page
 *       shapes (this site's own layout chrome) can vary; that is checked
 *       separately as an informational count only.
 *   [4] No internal link's visible text is a generic phrase ("click
 *       here", "read more", etc.) that gives a screen-reader user
 *       tabbing by link-list no way to tell links apart (WCAG 2.4.4) --
 *       the same check audit-internal-links.mjs already runs for [3]
 *       there; duplicated here narrowly so this script is independently
 *       complete and not silently dependent on another script's list
 *       staying in sync.
 *   [5] <html lang="..."> is present and non-empty on every page (WCAG
 *       3.1.1).
 *
 * What this does NOT check (real, disclosed limitation, not silently
 * omitted): color contrast, focus order, keyboard-only operability,
 * ARIA state correctness (e.g. aria-expanded actually toggling), and
 * touch target size all require either rendering the page or running
 * real interaction -- this script cannot see those. Those were checked
 * manually for this programme's new functionality (the corrections form
 * and the resource-page trust block) before this script was written:
 * contrast ratios computed against this repo's actual defined color
 * tokens (all pass AA, several with wide margin -- see D-099), touch
 * targets confirmed at min-h-11 (44px, well over the 24px AA minimum),
 * and focus-visible styling confirmed as a global rule
 * (src/styles/global.css) that nothing in the new functionality
 * overrides. A genuine browser-based audit (Playwright + axe-core) would
 * catch more, but is a real new dependency this repo doesn't currently
 * have -- left as a disclosed future option, not silently skipped.
 *
 * Run via `npm run audit:accessibility`, wired into `npm run audit:all`.
 */
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const GENERIC_ANCHORS = new Set(['click here', 'here', 'read more', 'this page', 'link', 'learn more', 'more']);

async function walkHtml(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walkHtml(full)));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

let files;
try {
  files = await walkHtml(DIST);
} catch {
  console.error('dist/ not found -- run `npm run build` first.');
  process.exit(1);
}

const problems = [];
let pagesChecked = 0;
let controlsChecked = 0;
let imagesChecked = 0;

for (const file of files) {
  if (file.endsWith('404.html')) continue;
  const html = await readFile(file, 'utf8');
  const pagePath = '/' + relative(DIST, file).replace(/\\/g, '/');
  pagesChecked++;

  // [5] lang attribute
  const langMatch = html.match(/<html\b[^>]*\blang="([^"]*)"/);
  if (!langMatch || !langMatch[1].trim()) {
    problems.push(`[5] ${pagePath}: <html> has no non-empty lang attribute`);
  }

  // [1] Form control label association. A control is validly labelled two
  // ways per HTML/WCAG: explicit (<label for="id"> matching the control's
  // id) or implicit/wrapping (the control nested directly inside an open
  // <label>...</label>, no for/id pair needed). A single pass over the
  // markup, tracking whether we're currently inside an open <label>, is
  // needed to catch the wrapping case -- a naive per-control regex can't
  // see "am I nested inside a label" without walking the document.
  const labelFors = new Set([...html.matchAll(/<label\b[^>]*\bfor="([^"]+)"/g)].map((m) => m[1]));
  const scanRe = /<label\b[^>]*>|<\/label>|<(input|select|textarea)\b([^>]*)>/g;
  let labelDepth = 0;
  let scanMatch;
  while ((scanMatch = scanRe.exec(html)) !== null) {
    const token = scanMatch[0];
    if (token === '</label>') {
      if (labelDepth > 0) labelDepth--;
      continue;
    }
    if (/^<label\b/.test(token)) {
      labelDepth++;
      continue;
    }
    // Otherwise it's a form control tag.
    const attrs = scanMatch[2] ?? '';
    if (/\btype="hidden"/.test(attrs)) continue; // hidden fields need no visible label
    controlsChecked++;
    if (labelDepth > 0) continue; // implicitly labelled by the enclosing <label>
    const idMatch = attrs.match(/\bid="([^"]+)"/);
    const nameMatch = attrs.match(/\bname="([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : '(unnamed)';
    if (!idMatch) {
      problems.push(`[1] ${pagePath}: control name="${name}" has no id and is not wrapped in a <label>, so it cannot be associated with a label`);
    } else if (!labelFors.has(idMatch[1])) {
      problems.push(`[1] ${pagePath}: control id="${idMatch[1]}" (name="${name}") has no matching <label for="${idMatch[1]}"> and is not wrapped in a <label>`);
    }
  }

  // [2] Image alt presence
  for (const imgMatch of html.matchAll(/<img\b[^>]*>/g)) {
    imagesChecked++;
    if (!/\balt=/.test(imgMatch[0])) {
      problems.push(`[2] ${pagePath}: <img> with no alt attribute at all (src excerpt: ${(imgMatch[0].match(/src="([^"]{0,60})/) || ['', '?'])[1]})`);
    }
  }

  // [3] Heading level skip
  const levels = [...html.matchAll(/<h([1-6])\b/g)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] > levels[i - 1] + 1) {
      problems.push(`[3] ${pagePath}: heading level skips from h${levels[i - 1]} to h${levels[i]} (position ${i})`);
      break; // one report per page is enough signal; avoids flooding on a repeated pattern
    }
  }

  // [4] Generic internal link text
  for (const m of html.matchAll(/<a\b[^>]*\bhref="(\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const text = m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
    if (text && GENERIC_ANCHORS.has(text)) {
      problems.push(`[4] ${pagePath}: generic internal link text "${text}" (href="${m[1]}")`);
    }
  }
}

console.log('Accessibility structural audit (WCAG 2.2 AA, static-HTML-checkable subset)');
console.log(`  Pages scanned: ${pagesChecked}`);
console.log(`  Form controls checked for label association: ${controlsChecked}`);
console.log(`  Images checked for alt presence: ${imagesChecked}`);
console.log('');

if (problems.length > 0) {
  console.error('FAILED:');
  for (const p of problems.slice(0, 200)) console.error(`  ✗ ${p}`);
  if (problems.length > 200) console.error(`  ... and ${problems.length - 200} more`);
  console.error(`\n${problems.length} problem(s) found.`);
  process.exit(1);
}

console.log(`PASS: 0 problem(s) found across ${pagesChecked} pages.`);
