# Singapore IB merge (owner decision, 26 Nov 2026)

Live article: `src/content/articles/ib-tuition-in-singapore-online.md` (slug, URL, reviewer, reviewStatus, reviewedDate 2026-10-10 unchanged).
Draft `ib-in-singapore-online-diploma-and-myp-lessons.md` deleted. Nothing committed, no build.

## Merged from the draft
- Analytics sentences (about 21 Singapore visits over five seconds, July to early October 2026) added to the intro, wording as in the draft.
- Course list matching those visits (6 links) plus the Environmental Systems and Societies "published, no classes" note and IB board page link.
- New section "Languages: lessons are in English only" (mandatory note: English only; no French, German, Spanish or other language for DP Language B or MYP Language Acquisition) with the Language B Paper 1/2/Oral marks.
- Singapore/Lahore time table and WhatsApp/email reply hours, in "Class times in Singapore time".
- Not copied (already in the live article): integrity paragraph, not-taught list, fees, trial steps.

## Unsourced claim fixed
"Many international schools in Singapore teach the IB" replaced by "Some international schools in Singapore are IB World Schools, and the IB's own school directory lists which programmes each one offers." Sources line now cites the IB school directory (ibo.org). ibo.org returned 403 to WebFetch, so I could not open it; a search returned no reliable school count (third-party figures of 27, 34 and 37 disagree), so no number is given.

## Flags for the owner
- Owner-provided figures: the about-21 visits, the dates, and the pages they landed on come from the owner's analytics and are unverified by me. The Sources line names "Marlbridge site analytics".
- Language B marks (30/25/40/30) rest only on `src/data/academic/assessments.ts` (checked 2026-09-21 per that file), not re-read from the IB guide.
- ESS "no classes offered" follows the site's resources-only convention; not rechecked.
- Re-review: the validators only check that reviewer fields are consistent and that reviewedDate is not before publishedDate or in the future; no rule detects later edits, and I found no written re-review policy in the decision log. The reviewed page now contains substantial text added after 2026-10-10 (and earlier today's rewrite), so the "Reviewed by nouman-ahmed, 10 Oct 2026" credit no longer covers all of it. Recommend nouman-ahmed re-reads the page and then updates reviewedDate, or the credit is dropped until then. I did not touch it.

## References
Only remaining mentions of the draft slug: `docs/decision-log.md` line 16984 (historical log entry, left as is), `OWNER-DECISIONS-REPORT.md`, and `reports/owner-decisions-2/singapore-and-journal.md` (reports). Nothing in src, scripts, public or `country-guides.ts`. No redirect needed: the draft was never public.

## Validators
validate-academic-content OK; validate-commercial-claims OK; validate-review-integrity PASS (0 problems). validate-cross-board-integrity was stopped after 180s without a result (slow); the rest of `validate:academic` was not run. node_modules junction removed.
