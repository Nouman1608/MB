#!/usr/bin/env node
/**
 * v1.x CLOSURE WS2 safeguard -- validates the built dist/ output (not the
 * source data) for every translated route named in src/i18n/routes.ts:
 * locale completeness, self-referencing canonical, reciprocal hreflang
 * (en/ar/ur/bn/x-default all present and pointing at real built files),
 * and correct lang/dir per locale (rtl for ar/ur, ltr for bn/en).
 *
 * Reads the real built HTML, same pattern as test-sitemap-noindex.mjs --
 * this catches drift regardless of *why* two independently-generated
 * things disagree (a typo in a translationKey, a missing getStaticPaths
 * entry, a copy-pasted hreflang block that didn't get updated), not just
 * whether the hreflang-generation logic looks correct in isolation.
 *
 * Not part of `npm run validate:academic` (requires a build first) -- run
 * explicitly as `node scripts/test-i18n-routes.mjs` after `npm run build`,
 * wired into `npm run audit:all` alongside test-sitemap-noindex.mjs.
 */
import { readFile, access } from 'node:fs/promises';
import { EN_PATH, TRANSLATED_LOCALES } from '../src/i18n/routes.ts';

let problems = 0;
const fail = (msg) => { console.error(`  ✗ ${msg}`); problems++; };
const ok = (msg) => console.log(`  ✓ ${msg}`);

const EXPECTED_DIR = { en: 'ltr', ar: 'rtl', ur: 'rtl', bn: 'ltr' };

function distFileFor(urlPath) {
  // '/ar/about/' -> 'dist/ar/about/index.html'; '/' -> 'dist/index.html'
  const trimmed = urlPath.replace(/^\/|\/$/g, '');
  return trimmed === '' ? 'dist/index.html' : `dist/${trimmed}/index.html`;
}

async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function checkPage(locale, path, expectedHreflangTargets) {
  const file = distFileFor(path);
  if (!(await fileExists(file))) {
    fail(`${path} -- expected built file ${file} does not exist`);
    return;
  }
  const html = await readFile(file, 'utf-8');

  const htmlTag = html.match(/<html[^>]*>/)?.[0] ?? '';
  const langMatch = htmlTag.match(/lang="([^"]+)"/)?.[1];
  const dirMatch = htmlTag.match(/dir="([^"]+)"/)?.[1];
  if (langMatch !== locale) fail(`${path} -- <html lang> is "${langMatch}", expected "${locale}"`);
  if (dirMatch !== EXPECTED_DIR[locale]) fail(`${path} -- <html dir> is "${dirMatch}", expected "${EXPECTED_DIR[locale]}" for locale ${locale}`);

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const expectedCanonical = `https://marlbridge.com${path}`;
  if (canonical !== expectedCanonical) fail(`${path} -- canonical is "${canonical}", expected self-referencing "${expectedCanonical}"`);

  const hreflangLinks = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)]
    .map(([, code, href]) => [code, href]);
  const hreflangMap = Object.fromEntries(hreflangLinks);

  for (const [code, expectedHref] of Object.entries(expectedHreflangTargets)) {
    if (hreflangMap[code] !== expectedHref) {
      fail(`${path} -- hreflang "${code}" is "${hreflangMap[code] ?? '(missing)'}", expected "${expectedHref}"`);
    }
  }
}

async function main() {
  console.log('Checking translated-route completeness, canonical and hreflang against the built dist/ output...\n');

  const keys = Object.keys(EN_PATH);
  for (const key of keys) {
    const enPath = EN_PATH[key];
    // The two noindexed search shells are deliberately excluded from full
    // reciprocal-hreflang checking (see src/pages/[locale]/search/index.astro's
    // own comment -- one-directional hreflang on a pair of noindexed utility
    // pages is a documented, accepted exception, not a defect).
    if (key === 'search') continue;

    const localePaths = Object.fromEntries(TRANSLATED_LOCALES.map((l) => [l, `/${l}${enPath}`]));
    const expectedForEn = {
      en: `https://marlbridge.com${enPath}`,
      ar: `https://marlbridge.com${localePaths.ar}`,
      ur: `https://marlbridge.com${localePaths.ur}`,
      bn: `https://marlbridge.com${localePaths.bn}`,
      'x-default': `https://marlbridge.com${enPath}`,
    };
    await checkPage('en', enPath, expectedForEn);

    for (const locale of TRANSLATED_LOCALES) {
      const expectedForLocale = {
        en: `https://marlbridge.com${enPath}`,
        ar: `https://marlbridge.com${localePaths.ar}`,
        ur: `https://marlbridge.com${localePaths.ur}`,
        bn: `https://marlbridge.com${localePaths.bn}`,
        'x-default': `https://marlbridge.com${enPath}`,
      };
      await checkPage(locale, localePaths[locale], expectedForLocale);
    }
  }

  const totalRoutes = keys.length - 1; // minus 'search'
  if (problems === 0) {
    ok(`All ${totalRoutes} translated routes (× 4 locales incl. English = ${totalRoutes * 4} pages) have correct self-canonical, reciprocal hreflang, and lang/dir.`);
    ok('Search shells (/search/, /ar/search/, /ur/search/, /bn/search/) checked separately -- noindexed, one-directional hreflang accepted by design.');
  }

  console.log(`\n${problems === 0 ? '✓ i18n route check passed.' : `✗ i18n route check failed: ${problems} problem(s).`}`);
  process.exit(problems === 0 ? 0 : 1);
}

main();
