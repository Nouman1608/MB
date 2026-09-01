#!/usr/bin/env node
/**
 * One-time (but safely re-runnable) mechanical fixer for the
 * "Practice Questions — Practice Questions" title-duplication bug
 * (Flagship Dominance/Trust programme Priority 2, docs/decision-log.md
 * D-093).
 *
 * The duplication is baked directly into the `title:` frontmatter field
 * of 56 practice-questions resource files -- not appended live by a
 * render-time helper (pageTitle() in src/utils/seo/meta.ts only adds the
 * site-name suffix and never touches resource-type labels), so there is
 * no single helper function to fix centrally. This script instead
 * corrects the affected source files directly, mechanically and
 * idempotently, rather than by hand -- every title on every one of 805
 * resource files is checked against the same rule, so the fix is applied
 * uniformly and nothing is hand-typed per file.
 *
 * `title`, `heading`, JSON-LD `headline`, breadcrumb label and H1 on the
 * resource detail page (src/pages/resources/[slug].astro) all read from
 * this SAME frontmatter field, and no file in this repo sets a separate
 * `seoTitle` override for any of the affected resources (verified before
 * writing this script) -- so fixing `title` here fixes every one of those
 * surfaces at once.
 *
 * Rule: if the title ends with "<label> — <label>" for the SAME label
 * (case-sensitive), collapse it to a single "<label>". Does not touch
 * titles that legitimately repeat a word non-adjacently, or repeat a
 * DIFFERENT label pair.
 *
 * Regression prevention: scripts/audit-metadata.mjs's self-duplicated-
 * title-segment check now fails the build if this pattern reappears.
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIR = 'src/content/resources';
const files = readdirSync(DIR).filter((f) => f.endsWith('.md'));

let fixed = 0;
const changes = [];

for (const file of files) {
  const path = join(DIR, file);
  const raw = readFileSync(path, 'utf-8');
  const m = raw.match(/^title:\s*"((?:[^"\\]|\\.)*)"\s*$/m);
  if (!m) continue;
  const title = m[1];

  // Match "<anything>: <label> — <label>" where the two <label> occurrences
  // (up to the end of the string) are byte-identical.
  const dupMatch = title.match(/^(.*?)([:\s])([^—]+?) — \3$/);
  if (!dupMatch) continue;

  const fixedTitle = `${dupMatch[1]}${dupMatch[2]}${dupMatch[3]}`.trimEnd();
  const fixedRaw = raw.replace(m[0], `title: "${fixedTitle}"`);
  writeFileSync(path, fixedRaw);
  fixed++;
  changes.push({ file, before: title, after: fixedTitle });
}

console.log(`Title-suffix dedup: ${fixed} file(s) fixed out of ${files.length} scanned.`);
for (const c of changes) {
  console.log(`  ${c.file}`);
  console.log(`    before: "${c.before}"`);
  console.log(`    after:  "${c.after}"`);
}
