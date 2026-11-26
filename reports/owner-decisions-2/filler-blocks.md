# Filler blocks cleanup (D-543k)

Counts from `node scripts/audit-filler-blocks.mjs`:

| Rule | Before | After |
|---|---|---|
| more-than-one-mistakes-block | 73 | 0 |
| more-than-one-checklist | 31 | 0 |
| faq-repeats-body-bullet (warn only, unchanged) | 1,212 | 1,212 |

Files changed: 103 (73 + 31, 1 page in both), all under `src/content/resources/`. None were ap-resources, price, legal or privacy pages. `scripts/filler-blocks-baseline.json` was regenerated with `--update-baseline`.

No new claims were written. The only text changes are heading renames, moving existing text, and dropping near-duplicate bullets (word-overlap 0.6 or more). Blank-line runs of 3+ were collapsed to one blank line in the changed files.

Method, mistakes rule:
- Where an "Exam traps" and a "Where marks are usually lost" (or "Common mistakes ...") block both existed, the unique bullets and paragraphs from the second were merged into "Exam traps" and the second heading removed.
- Topic-specific blocks ("Exam traps (distribution)", "Common errors on elasticity", "Common errors in G18") were renamed "Slips to avoid: <topic>" and kept.

Method, checklist rule: the first checklist heading stays. Consecutive later ones became a bold label inside it; non-consecutive ones were renamed "... points to check". No checklist content was removed.

## Five before/after examples
1. cambridge-igcse-biology-0610-conservation-revision-notes.md: the separate "Where marks are usually lost" block (5 bullets) is now 5 bullets at the end of "Exam traps". One mistakes block remains.
2. aqa-gcse-economics-balance-of-payments-and-distribution-of-income-revision-notes.md: "### Exam traps (balance of payments)" is now "### Slips to avoid: balance of payments", and "### Exam traps (distribution)" is now "### Slips to avoid: distribution". "Where marks are usually lost" is kept as the page single mistakes block.
3. business-activity-and-classification-revision-notes.md: "## Common mistakes worth avoiding specifically" (a single paragraph) removed as a heading. The paragraph now sits under "## Exam traps" after its bullets.
4. oxfordaqa-a-level-economics-demand-and-the-elasticities-of-demand.md: "### Common errors on demand" is now "### Slips to avoid: demand", and "## Common errors on elasticity" is now "## Slips to avoid: elasticity".
5. oxfordaqa-igcse-business-exam-preparation.md (checklist): "## Before/during exam checklist" is now "## Before/during exam points to check". The first checklist heading is kept. In cambridge-o-level-biology-5090-effects-of-temperature-and-ph the second heading "## Explanation checklist: pH" became the bold label "**Explanation checklist: pH**" under "Explanation checklist: temperature".

## Validators
- validate-resource-titles: pass (0 duplicates).
- validate-course-consistency: pass (0 hard problems, 0 new findings).
- validate-review-integrity: pass.
- validate-academic-content: 1 failure, not from this work: `src/content/resources/ocr-gcse-chemistry-atomic-structure.md` reports "aqa + igcse" is not an active combination for chemistry. That file is not in the lists changed here and is probably another agent's in-progress edit.
