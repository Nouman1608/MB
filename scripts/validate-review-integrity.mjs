#!/usr/bin/env node
/**
 * Review-integrity validator (QIGT programme, Section 3).
 *
 * Reads src/content/resources/, src/content/articles/, and
 * src/content/authors/ directly (plain fs, no astro:content needed --
 * this runs standalone via `node`, matching the other validate-*.mjs
 * scripts in this repo) and enforces the publication-state rules the
 * schema declares but does not itself check:
 *
 *   [1] reviewStatus: "reviewed" requires a `reviewer` field to be set.
 *   [2] That reviewer must reference a real author file that exists.
 *   [3] That author must have isReviewer: true -- being referenced as
 *       `author` (who wrote it) is not the same as being a genuine,
 *       accountable reviewer.
 *   [4] reviewedDate, if set, must not precede publishedDate.
 *   [5] reviewedDate, if set, must not be in the future.
 *   [6] "changes-requested" also requires a real, existing reviewer (the
 *       same accountability applies -- someone requested the changes).
 *   [7] practice-questions and exam-preparation resources get no special
 *       exemption from [1]-[3] -- the brief specifically calls out that
 *       these must not be labelled reviewed without evidence, and this
 *       validator applies the identical rule to every resourceType, so
 *       there is no separate, weaker path for these two.
 *   [8] `reviewer` must not equal `author` (self-review is not review).
 *       D-166 (2026-09-11) removed 135 such self-review fields, but that
 *       fix ran as a one-off script scoped to src/content/resources/ only
 *       and never re-ran as part of this permanent gate. E569 (2026-09-12
 *       audit) prompted this rule as a structural safeguard: this validator
 *       already read src/content/articles/ for [1]-[3] but had no rule
 *       actually checking author-vs-reviewer equality there. Correction
 *       (2026-09-13 audit): the specific article file named in the
 *       original E569 write-up does not in fact have a self-review
 *       defect -- its reviewer differs from its author, as the file's
 *       own D-166 provenance note already said. Rule [8] itself is
 *       unaffected by that correction and stays permanent: it closes a
 *       real structural gap (no equality check existed on this
 *       collection before) even though no live instance was actually
 *       found in src/content/articles/ at the time it was added, so a
 *       future self-review field still cannot slip past silently in
 *       whichever collection nobody happened to grep by hand.
 *
 * Exits 1 on any problem found, matching the other validate-*.mjs
 * scripts in this repo.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const TODAY = new Date();

function parseFrontmatter(raw) {
  const parts = raw.split('---');
  const fm = parts[1] ?? '';
  const get = (re) => fm.match(re)?.[1];
  return {
    reviewStatus: get(/^reviewStatus:\s*"?([\w-]+)"?/m) ?? 'review-pending',
    reviewer: get(/^reviewer:\s*"?([\w-]+)"?/m),
    author: get(/^author:\s*"?([\w-]+)"?/m),
    reviewedDate: get(/^reviewedDate:\s*(\S+)/m),
    publishedDate: get(/^publishedDate:\s*(\S+)/m),
    resourceType: get(/^resourceType:\s*"?([\w-]+)"?/m),
  };
}

function loadAuthors() {
  const dir = 'src/content/authors';
  const authors = new Map();
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const raw = readFileSync(join(dir, file), 'utf-8');
    const fm = raw.split('---')[1] ?? '';
    const isReviewer = /^isReviewer:\s*true/m.test(fm);
    authors.set(file.replace(/\.md$/, ''), { isReviewer });
  }
  return authors;
}

function checkCollection(dir, label, authors, problems) {
  let count = 0;
  for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    count += 1;
    const raw = readFileSync(join(dir, file), 'utf-8');
    const fm = parseFrontmatter(raw);
    const id = `${label} "${file}"`;

    const claimsReviewed = fm.reviewStatus === 'reviewed' || fm.reviewStatus === 'changes-requested';
    if (claimsReviewed) {
      if (!fm.reviewer) {
        problems.push(`[1] ${id} has reviewStatus "${fm.reviewStatus}" but no reviewer field set.`);
      } else if (!authors.has(fm.reviewer)) {
        problems.push(`[2] ${id} references reviewer "${fm.reviewer}", which does not exist in src/content/authors/.`);
      } else if (!authors.get(fm.reviewer).isReviewer) {
        problems.push(`[3] ${id} references reviewer "${fm.reviewer}", who is not marked isReviewer: true.`);
      }
    }

    if (fm.reviewer && fm.author && fm.reviewer === fm.author) {
      problems.push(`[8] ${id} has reviewer "${fm.reviewer}" identical to author "${fm.author}" -- self-review is not independent review.`);
    }

    if (fm.reviewedDate) {
      const reviewed = new Date(fm.reviewedDate);
      if (fm.publishedDate && reviewed < new Date(fm.publishedDate)) {
        problems.push(`[4] ${id} has reviewedDate (${fm.reviewedDate}) before publishedDate (${fm.publishedDate}).`);
      }
      if (reviewed > TODAY) {
        problems.push(`[5] ${id} has reviewedDate (${fm.reviewedDate}) in the future.`);
      }
    }
  }
  return count;
}

const authors = loadAuthors();
const problems = [];
const resourceCount = checkCollection('src/content/resources', 'resource', authors, problems);
const articleCount = checkCollection('src/content/articles', 'article', authors, problems);

console.log('Review-integrity validator');
console.log(`  Resources checked: ${resourceCount}`);
console.log(`  Articles checked: ${articleCount}`);
console.log(`  Reviewer records available: ${authors.size} (${[...authors.values()].filter((a) => a.isReviewer).length} marked isReviewer: true)`);
console.log('');

if (problems.length === 0) {
  console.log('PASS: 0 problem(s) found.');
  process.exit(0);
} else {
  console.log(`FAIL: ${problems.length} problem(s) found:\n`);
  for (const p of problems) console.log(`  - ${p}`);
  process.exit(1);
}
