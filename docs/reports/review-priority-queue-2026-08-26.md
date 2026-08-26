# Academic review priority queue — 2026-08-26

QIGT programme, Section 3. This orders the 731 resources (all currently `reviewStatus: review-pending`, honestly reflecting that no bulk review has happened) into the priority tiers the brief specifies, for whoever performs the actual academic review work. This is a queue, not a review — nothing in this document marks any resource as reviewed.

## Criteria 1-2 could not be applied this session

The brief's top two ranking criteria are "pages with GSC impressions" and "pages ranking positions 4-20." No Google Search Console export (URL-level or otherwise) was supplied in this session -- only aggregate category counts were available from an earlier, separate SEO engagement, and those counts cannot be exploded into a per-page ranking without the underlying export. **If a GSC export becomes available, re-run this queue with impressions/position as the primary sort key before tier 3 below** -- doing so now would mean fabricating a ranking with no real data behind it.

## Tiers actually computed from repository data

| Tier | Criterion | Count | Method |
|---|---|---|---|
| 3 | Worked answers and practice questions | 225 | `resourceType` is `practice-questions` or `exam-preparation` |
| 4 | High-stakes / frequently-misunderstood topics | -- | Not separately computed: no reliable repository signal distinguishes "frequently misunderstood" from other content. Reviewers should apply judgement within tiers 3/5/6 rather than treat this as its own automatable pass. |
| 5 | Current/revised specification transitions | 58 | Resources tagged with a syllabus code this programme (or the preceding SEO engagement) confirmed has a live 2026-2028+ transition: Cambridge O-Level Urdu 3248 (2027-2029), Cambridge A-Level English Literature 9695 (2027-2028), Cambridge A-Level English Language 9093 (2027-2028), Cambridge O-Level/IGCSE Chemistry 5070/0620, Cambridge O-Level Physics 5054, Cambridge A-Level Accounting 9706 (all confirmed current for 2026-2028) |
| 6 | Attributed to a named individual | 204 | `author` resolves to a real named person, not `marlbridge-academic-team` |
| 7 | Remaining resources | 244 | Everything else |

731 total, 0 already `reviewed`/`changes-requested` (the one genuinely reviewed item on this site is an article, `where-igcse-maths-marks-are-lost-early.md`, already excluded from this resource-only queue).

A resource matching more than one tier is counted once, at its highest (lowest-numbered) applicable tier -- e.g. a practice-questions resource on a transitioning syllabus counts in tier 3, not tier 5.

## How to use this queue

This is a prioritisation aid for whoever does the actual subject-expert review -- it does not substitute for one. Marking a resource `reviewStatus: "reviewed"` requires a real named reviewer with `isReviewer: true` in `src/content/authors/`, is now enforced by `scripts/validate-review-integrity.mjs` (wired into `npm run validate:academic`), and must never be set in bulk.

Full per-file lists for each tier are reproducible via the tiering logic above against the current `src/content/resources/` directory.
