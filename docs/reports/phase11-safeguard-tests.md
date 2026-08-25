# Phase 11 — the 14 automated safeguard tests

Aug 2026 SEO remediation, Section 15 of the brief. Each of the 14
required checks below is enforced by a real, runnable script — none of
these are descriptions of intended behaviour; every one was executed
against the live built site (`npm run build` first) as part of this
phase and returned a clean (0-problem) result. Run the full set with
`npm run audit:all` after `npm run build`, or individually as listed.

| # | Requirement | Enforced by | Result (2026-08-25) |
|---|---|---|---|
| 1 | No noindex URL in sitemap | `node scripts/test-sitemap-noindex.mjs` | PASS — 0/1122 |
| 2 | No redirecting URL in sitemap | `npm run audit:redirects` (check [1]) | PASS — 0/1122 |
| 3 | No broken sitemap URL | `node scripts/test-sitemap-noindex.mjs` ("All sitemap URLs resolved to a built page") | PASS — 1122/1122 resolved |
| 4 | No indexable zero-resource page unless the substantial-original-guidance rule passes | `npm run audit:content-integrity` (check [4]) | PASS — 160/160 hub pages checked, 0 contradictions |
| 5 | No metadata claim of resources when none exist | `npm run audit:content-integrity` (check [5]) | PASS — 0 mismatches between claimed and rendered resource count |
| 6 | No self-canonical pointing to a redirect | `npm run audit:content-integrity` (check [6]) | PASS — 0/160 hub-page canonicals are redirect sources |
| 7 | No internal link to a redirect | `npm run audit:redirects` (check [4]) | PASS — 0 (2 real instances found and fixed in D-028) |
| 8 | No redirect chains/loops | `npm run audit:redirects` (check [2]) | PASS — 0/967 static rules chain or loop |
| 9 | No duplicate canonical URLs | `npm run audit:redirects` (check [5]) | PASS — 0 duplicates across 1122 pages |
| 10 | No malformed JSON-LD | `npm run audit:structured-data` | PASS — 5308 typed nodes, 0 problems |
| 11 | Correct board-aware resource filtering | `npm run validate:academic` (cross-board-integrity checks [1]-[5]) | PASS — 0 problems across 5 rule categories |
| 12 | Correct qualification/syllabus-topic mappings | `npm run validate:academic` (`validate-academic-content.mjs`) | PASS — topic tagging + stage consistency OK |
| 13 | No duplicate font binary presented as unrelated static weight | `npm run audit:fonts` | PASS — 14/14 font files are genuinely distinct binaries |
| 14 | No orphan indexable page | `npm run audit:internal-links` (check [2]) | PASS — 0/1122 orphans |

## What's new this phase vs. what already existed

Items 1, 3, 10, 11, 12 were already enforced by scripts written in
earlier phases (Phase 2, 10, and the pre-existing `validate:academic`
chain) — this phase didn't change their logic, just confirmed they
belong on this list.

Items 2, 6, 7, 8, 9 are enforced by `scripts/audit-redirects.mjs`,
new in Phase 6 (D-028).

Item 14 (and the broken-link/generic-anchor checks that ride alongside
it) is enforced by `scripts/audit-internal-links.mjs`, new in Phase 9
(D-029).

Items 4, 5, 6 (content-metadata honesty) and 13 (font binary integrity)
were genuine gaps — no script previously asserted these as permanent,
build-time-enforceable invariants, even though the underlying bugs
(font duplication) had already been found and fixed by hand earlier in
this engagement (D-025). `scripts/audit-content-integrity.mjs` and
`scripts/audit-fonts.mjs`, both new this phase, close that gap so a
future regression fails the build instead of requiring another manual
audit to catch it.
