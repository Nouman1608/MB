#!/usr/bin/env node
/**
 * Generates public/_redirects.
 *
 * Why static rather than placeholder rules: Cloudflare's `_redirects`
 * placeholder matching did not reliably resolve the two-segment
 * `/resources/:type/:slug/` case in production — it fell through to the
 * single-segment rule and dumped visitors on the index. Enumerated static
 * rules are unambiguous, and Cloudflare evaluates static rules first.
 *
 * The legacy URL shapes this covers:
 *   /resources/<type>/<slug>/  -> /resources/<slug>/    (flattened URLs, own type only)
 *   /resources/<type>/         -> /resources/#<type>    (removed category indexes)
 *   /learning/<slug>/          -> /articles/<slug>/     (section rename)
 *
 * Each resource is emitted only against its OWN current `resourceType`, not
 * all seven known types. Enumerating every type for every resource was
 * generating six redundant, never-linked rules per resource (no resource
 * has ever been served, or linked externally, under a type it isn't
 * currently tagged with) and put the file on a path toward Cloudflare's
 * ~2,100-line ceiling by ~300 resources. If a resource's `resourceType` is
 * later changed, add its old type -> new-slug pair to
 * TYPE_CHANGED_RESOURCES below (same pattern as CONSOLIDATED_RESOURCES) so
 * the stale link keeps redirecting — same discipline as a slug rename.
 *
 * Run: npm run generate:redirects  (build does this automatically)
 */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const RESOURCE_TYPES = [
  'study-guides', 'revision-notes', 'past-papers', 'practice-questions',
  'exam-preparation', 'subject-guides', 'learning-articles',
];

/**
 * Resources that have been consolidated into another resource and removed
 * from the content collection. Their old URLs (flat and every nested type
 * variant) must keep 301-redirecting to the surviving resource so no dead
 * link or de-indexed URL is left live. Add an entry here whenever a
 * resource file is deleted in favour of another; do not remove entries
 * once added, since external links/bookmarks/search results may still
 * point at the old slug indefinitely.
 */
const CONSOLIDATED_RESOURCES = {
  // /resources/stoichiometry/ -> /resources/formulae-equations-and-the-mole/
  // Reason: "Stoichiometry and the Mole" was a 28-line stub with no
  // syllabus-verified content; consolidated into the authoritative
  // "Formulae, Equations and the Mole" resource (Phase 1 QA, Aug 2026).
  stoichiometry: 'formulae-equations-and-the-mole',
  // /resources/atoms-elements-and-compounds/ -> /resources/atomic-structure/
  // Reason: both resources independently declared identical syllabusTopics
  // coverage (0620/5070 subtopics 2.1-2.3) - a genuine duplicate found
  // during the site-wide audit. "Atomic Structure" is the more complete
  // resource (worked examples, AS-Level bridge, referenced in site UI
  // copy); its missing ion-configuration content was merged in from the
  // retired page before deletion (Site-wide audit, Aug 2026).
  'atoms-elements-and-compounds': 'atomic-structure',

  // --- Duplicate-content sweep, 2026-08-23 ---
  // The weekly content-automation job generated two separate resource
  // files for the same official syllabusTopics scope (same board,
  // qualification, syllabus code and subtopic) under two different slug
  // conventions on at least 27 occasions, discovered during a full-site
  // Google Search Console duplicate-content audit. Each pair was verified
  // by hand (not just by matching taxonomy tags -- several same-tag pairs
  // turned out to be genuinely different content sharing one coarse
  // official subtopic label, e.g. "forces-and-motion" vs
  // "moments-and-stability", and were deliberately left alone). For each
  // confirmed duplicate, the higher-word-count / more complete file was
  // kept; the other is retired here. See docs/decision-log.md D-010.
  'ict-computer-systems-revision-notes': 'igcse-ict-computer-systems-revision-notes',
  'world-history-nineteenth-century-revision-notes': 'igcse-world-history-nineteenth-century-revision-notes',
  'english-language-analysis-practice': 'oxfordaqa-english-language-practice',
  'as-chem-equilibria-practice': 'as-chemistry-equilibria-practice',
  'igcse-accounting-fundamentals-practice': 'fundamentals-of-accounting-practice',
  'english-language-analysis-revision-notes': 'oxfordaqa-english-language-revision-notes',
  'graphs-and-curves-practice': 'mathematics-graphs-curves-practice',
  'igcse-economics-basic-problem-practice': 'the-basic-economic-problem-practice',
  'igcse-ict-computer-systems-practice': 'ict-computer-systems-practice',
  'as-physics-deformation-of-solids-practice': 'as-physics-deformation-practice',
  'as-chem-bonding-shapes-practice': 'as-chemistry-shapes-imf-practice',
  'fundamentals-of-accounting-revision-notes': 'igcse-accounting-fundamentals-revision-notes',
  'commerce-and-production-revision-notes': 'igcse-commerce-production-revision-notes',
  'as-chem-equilibria-revision-notes': 'as-chemistry-equilibria-revision-notes',
  'as-chem-bonding-shapes-revision-notes': 'as-chemistry-shapes-imf-revision-notes',
  'igcse-geography-population-settlement-practice': 'population-and-settlement-practice',
  'igcse-oxfordaqa-biology-organisation-practice': 'igcse-biology-organisation-practice',
  'igcse-commerce-production-practice': 'commerce-and-production-practice',
  'graphs-and-curves-revision-notes': 'mathematics-graphs-curves-revision-notes',
  'igcse-world-history-nineteenth-century-practice': 'world-history-nineteenth-century-practice',
  'a-psychology-approaches-practice': 'psychology-approaches-and-debates-practice',
  'as-chem-energetics-revision-notes': 'as-chemistry-hess-law-revision-notes',
  'as-chem-energetics-practice': 'as-chemistry-hess-law-practice',
  'igcse-computer-science-algorithms-practice': 'igcse-oxfordaqa-computer-science-algorithms-practice',
  'population-and-settlement-revision-notes': 'igcse-geography-population-settlement-revision-notes',
  'psychology-approaches-and-debates-revision-notes': 'a-psychology-approaches-revision-notes',
  'the-basic-economic-problem-revision-notes': 'igcse-economics-basic-problem-revision-notes',
};

/**
 * Resources whose `resourceType` frontmatter has changed since publication.
 * Add an entry here whenever a resource's type is reclassified, so a link
 * or bookmark using the old type-prefixed URL keeps 301-redirecting to the
 * (still-flat) resource URL. Shape: slug -> array of retired type values.
 * Empty until the first reclassification happens.
 */
const TYPE_CHANGED_RESOURCES = {};

const slugsIn = async (dir) =>
  (await readdir(dir)).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));

const resources = await slugsIn('src/content/resources');
const articles = await slugsIn('src/content/articles');

/** Read each resource's current `resourceType` straight out of its frontmatter. */
const resourceTypeOf = async (slug) => {
  const raw = await readFile(join('src/content/resources', `${slug}.md`), 'utf8');
  const match = raw.match(/^resourceType:\s*"([^"]+)"/m);
  if (!match) {
    throw new Error(`${slug}.md has no resourceType frontmatter field`);
  }
  return match[1];
};

const resourceTypes = new Map(
  await Promise.all(resources.map(async (slug) => [slug, await resourceTypeOf(slug)]))
);

const pad = (s) => (s.length >= 57 ? s + '  ' : s.padEnd(58, ' '));
const lines = [
  '# Generated by scripts/generate-redirects.mjs — do not edit by hand.',
  '# Static rules first (Cloudflare evaluates these before dynamic ones).',
  '',
  '# Flattened resource URLs: /resources/<type>/<slug>/ -> /resources/<slug>/',
];

for (const slug of resources.sort()) {
  const ownType = resourceTypes.get(slug);
  const retiredTypes = TYPE_CHANGED_RESOURCES[slug] ?? [];
  for (const type of [ownType, ...retiredTypes]) {
    lines.push(`${pad(`/resources/${type}/${slug}/`)}/resources/${slug}/  301`);
  }
}

lines.push('', '# Consolidated resources: old slug (flat + every nested type) -> surviving resource');
for (const [oldSlug, newSlug] of Object.entries(CONSOLIDATED_RESOURCES)) {
  lines.push(`${pad(`/resources/${oldSlug}/`)}/resources/${newSlug}/  301`);
  for (const type of RESOURCE_TYPES) {
    lines.push(`${pad(`/resources/${type}/${oldSlug}/`)}/resources/${newSlug}/  301`);
  }
}

lines.push('', '# Removed resource-type indexes -> anchored section on the resources page');
for (const type of RESOURCE_TYPES) {
  lines.push(`${pad(`/resources/${type}/`)}/resources/#${type}  301`);
}

lines.push('', '# Section rename: /learning/ -> /articles/');
for (const slug of articles.sort()) {
  lines.push(`${pad(`/learning/${slug}/`)}/articles/${slug}/  301`);
}
lines.push(`${pad('/learning/')}/articles/  301`);

lines.push('', '# Dynamic fallbacks for any legacy URL not enumerated above.');
lines.push(`${pad('/learning/*')}/articles/:splat  301`);

const out = lines.join('\n') + '\n';
await writeFile(join('public', '_redirects'), out, 'utf8');
const resourceRuleCount = resources.length + Object.values(TYPE_CHANGED_RESOURCES).reduce((n, arr) => n + arr.length, 0);
console.log(`_redirects written — ${resourceRuleCount} resource rules, ${RESOURCE_TYPES.length} type rules, ${articles.length + 1} article rules, ${lines.length} lines total.`);
