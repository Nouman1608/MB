# Marlbridge Academic Content Coverage Report — v1.1

Generated 2026-08-18 from the working tree by `scripts/academic-coverage-report.mjs`. Reflects the full 139-combination ACTIVE matrix after the v1.1 OxfordAQA syllabus-prose completion and a v1.1 WS4 tagging fix (21 resources that were written specifically for Cambridge but carried no `boards:` tag, which would otherwise have counted as false coverage for other boards on the same subject/level).

This report distinguishes four things that are easy to conflate:

- **Teaching availability** — whether Marlbridge/Learners Academy teaches the combination at all (`marlbridgeStatus: ACTIVE` in the matrix). All 139 combinations below are ACTIVE.
- **Syllabus-summary completion** — whether the combination's leaf page has a real "The qualification" summary (`syllabusFor()` populated) instead of the honest "being verified" placeholder.
- **Learning-resource coverage** — whether at least one dedicated, board-and-level-eligible resource exists (this report's primary subject).
- **Number and depth of resources** — how many, and how much of the official syllabus they touch (see the existing `academic-coverage-dashboard.mjs` for topic-level depth on subjects with a taxonomy).

## 1. Summary

- Total ACTIVE combinations: **139**
- Covered (>=1 eligible resource): **12** (8.6%)
- Zero-resource: **127** (91.4%)

## 2. Coverage by board

| Board | Covered | Total | % |
|---|---|---|---|
| AQA | 3 | 25 | 12.0% |
| Cambridge | 9 | 54 | 16.7% |
| OCR | 0 | 12 | 0.0% |
| OxfordAQA | 0 | 30 | 0.0% |
| Pearson Edexcel | 0 | 18 | 0.0% |

## 3. Coverage by qualification

| Qualification | Covered | Total | % |
|---|---|---|---|
| a-level | 3 | 59 | 5.1% |
| as-level | 0 | 1 | 0.0% |
| gcse | 2 | 17 | 11.8% |
| igcse | 1 | 45 | 2.2% |
| o-level | 6 | 17 | 35.3% |

## 4. Coverage by subject

| Subject | Covered | Total | % |
|---|---|---|---|
| accounting | 1 | 6 | 16.7% |
| biology | 1 | 11 | 9.1% |
| business | 1 | 11 | 9.1% |
| chemistry | 3 | 11 | 27.3% |
| commerce | 0 | 2 | 0.0% |
| computer-science | 0 | 6 | 0.0% |
| economics | 1 | 11 | 9.1% |
| english-language | 1 | 7 | 14.3% |
| english-literature | 0 | 8 | 0.0% |
| environmental-management | 0 | 2 | 0.0% |
| geography | 0 | 5 | 0.0% |
| global-perspectives | 0 | 2 | 0.0% |
| ict | 0 | 2 | 0.0% |
| islamiyat | 0 | 3 | 0.0% |
| law | 0 | 3 | 0.0% |
| mathematics | 1 | 11 | 9.1% |
| pakistan-studies | 0 | 3 | 0.0% |
| physics | 1 | 11 | 9.1% |
| psychology | 0 | 5 | 0.0% |
| sociology | 1 | 7 | 14.3% |
| statistics | 0 | 2 | 0.0% |
| urdu-language | 0 | 4 | 0.0% |
| world-history | 1 | 6 | 16.7% |

## 5. Full zero-resource table

Every ACTIVE combination with zero eligible resources (board- and level-filtered, matching the live leaf page exactly). "Syllabus summary" = whether the page already shows real qualification prose rather than the verification placeholder.

| Board | Qualification | Subject | Code | Syllabus summary |
|---|---|---|---|---|
| AQA | a-level | accounting | 7127 | yes |
| Cambridge | igcse | accounting | 0452 | no |
| OxfordAQA | a-level | accounting | 9615 | yes |
| OxfordAQA | igcse | accounting | 9215 | yes |
| Pearson Edexcel | a-level | accounting | — | no |
| AQA | a-level | biology | 7402 | no |
| AQA | gcse | biology | 8461 | no |
| Cambridge | a-level | biology | 9700 | no |
| Cambridge | igcse | biology | 0610 | no |
| OCR | a-level | biology | H420 | yes |
| OCR | gcse | biology | J247 | yes |
| OxfordAQA | a-level | biology | 9610 | yes |
| OxfordAQA | igcse | biology | 9201 | yes |
| Pearson Edexcel | a-level | biology | — | no |
| Pearson Edexcel | igcse | biology | — | no |
| AQA | a-level | business | 7132 | no |
| AQA | as-level | business | 7131 / 7137 | no |
| AQA | gcse | business | 8132 | no |
| Cambridge | a-level | business | 9609 | no |
| Cambridge | igcse | business | 0450 | no |
| OCR | a-level | business | H431 | yes |
| OCR | gcse | business | J204 | yes |
| OxfordAQA | a-level | business | 9625 / 9725 | yes |
| OxfordAQA | igcse | business | 9225 | yes |
| Pearson Edexcel | a-level | business | — | no |
| AQA | a-level | chemistry | 7405 | no |
| AQA | gcse | chemistry | 8462 | no |
| OCR | a-level | chemistry | H432 | yes |
| OCR | gcse | chemistry | J248 | yes |
| OxfordAQA | a-level | chemistry | 9620 | yes |
| OxfordAQA | igcse | chemistry | 9202 | yes |
| Pearson Edexcel | a-level | chemistry | YCH11 | no |
| Pearson Edexcel | igcse | chemistry | 4CH1 | no |
| Cambridge | igcse | commerce | 0715 | no |
| Cambridge | o-level | commerce | 7100 | no |
| AQA | a-level | computer-science | — | no |
| Cambridge | a-level | computer-science | — | no |
| Cambridge | igcse | computer-science | — | no |
| Cambridge | o-level | computer-science | — | no |
| OxfordAQA | a-level | computer-science | 9645 | yes |
| OxfordAQA | igcse | computer-science | 9210 | yes |
| AQA | a-level | economics | — | no |
| AQA | gcse | economics | 8136 | no |
| Cambridge | a-level | economics | 9708 | no |
| Cambridge | igcse | economics | 0455 | no |
| OCR | a-level | economics | H460 | yes |
| OCR | gcse | economics | J205 | yes |
| OxfordAQA | a-level | economics | 9640 | yes |
| OxfordAQA | igcse | economics | 9214 | yes |
| Pearson Edexcel | a-level | economics | — | no |
| Pearson Edexcel | igcse | economics | — | no |
| AQA | a-level | english-language | — | no |
| Cambridge | a-level | english-language | — | no |
| Cambridge | o-level | english-language | — | no |
| OxfordAQA | a-level | english-language | 9670 | yes |
| OxfordAQA | igcse | english-language | 9270 | yes |
| Pearson Edexcel | igcse | english-language | — | no |
| AQA | a-level | english-literature | 7712 / 7717 | no |
| AQA | gcse | english-literature | 8702 | no |
| Cambridge | a-level | english-literature | 9695 | no |
| Cambridge | igcse | english-literature | 0475 / 0992 | no |
| OxfordAQA | a-level | english-literature | 9675 | yes |
| OxfordAQA | igcse | english-literature | 9275 | yes |
| Pearson Edexcel | a-level | english-literature | YET01 | no |
| Pearson Edexcel | igcse | english-literature | 4ET1 / 4XET1 | no |
| Cambridge | igcse | environmental-management | 0680 | no |
| Cambridge | o-level | environmental-management | 5014 | no |
| Cambridge | a-level | geography | 9696 | no |
| Cambridge | igcse | geography | 0460 / 0976 | no |
| Cambridge | o-level | geography | 2217 | no |
| OxfordAQA | a-level | geography | 9635 | yes |
| OxfordAQA | igcse | geography | 9230 | yes |
| Cambridge | a-level | global-perspectives | 9239 | no |
| Cambridge | igcse | global-perspectives | 0457 | no |
| Cambridge | a-level | ict | — | no |
| Cambridge | igcse | ict | — | no |
| Cambridge | igcse | islamiyat | 0493 | no |
| Cambridge | o-level | islamiyat | 2058 | no |
| OxfordAQA | igcse | islamiyat | 9237 | yes |
| AQA | a-level | law | — | no |
| Cambridge | a-level | law | — | no |
| Pearson Edexcel | a-level | law | — | no |
| AQA | a-level | mathematics | — | no |
| AQA | gcse | mathematics | 8300 | no |
| Cambridge | a-level | mathematics | 9709 | no |
| Cambridge | igcse | mathematics | 0580 | no |
| OCR | a-level | mathematics | H240 | yes |
| OCR | gcse | mathematics | J560 | yes |
| OxfordAQA | a-level | mathematics | 9660 | yes |
| OxfordAQA | igcse | mathematics | 9260 | yes |
| Pearson Edexcel | a-level | mathematics | — | no |
| Pearson Edexcel | igcse | mathematics | — | no |
| Cambridge | igcse | pakistan-studies | 0448 | no |
| Cambridge | o-level | pakistan-studies | 2059 | no |
| OxfordAQA | igcse | pakistan-studies | 9236 | yes |
| AQA | a-level | physics | 7408 | no |
| AQA | gcse | physics | 8463 | no |
| Cambridge | a-level | physics | 9702 | no |
| Cambridge | igcse | physics | 0625 | no |
| OCR | a-level | physics | H556 | yes |
| OCR | gcse | physics | J249 | yes |
| OxfordAQA | a-level | physics | 9630 | yes |
| OxfordAQA | igcse | physics | 9203 | yes |
| Pearson Edexcel | a-level | physics | — | no |
| Pearson Edexcel | igcse | physics | — | no |
| AQA | a-level | psychology | 7182 | no |
| AQA | gcse | psychology | 8182 | no |
| Cambridge | a-level | psychology | — | no |
| OxfordAQA | a-level | psychology | 9685 | yes |
| OxfordAQA | igcse | psychology | 9218 | yes |
| AQA | gcse | sociology | 8192 | no |
| Cambridge | a-level | sociology | — | no |
| Cambridge | igcse | sociology | — | no |
| Cambridge | o-level | sociology | — | no |
| OxfordAQA | a-level | sociology | 9690 | yes |
| OxfordAQA | igcse | sociology | 9292 | yes |
| Cambridge | igcse | statistics | 0479 | no |
| Cambridge | o-level | statistics | 4040 | no |
| Cambridge | igcse | urdu-language | 0539 | no |
| Cambridge | o-level | urdu-language | 3247 / 3248 | no |
| OxfordAQA | igcse | urdu-language | 9264 | yes |
| Pearson Edexcel | a-level | urdu-language | — | no |
| Cambridge | a-level | world-history | — | no |
| Cambridge | igcse | world-history | — | no |
| Cambridge | o-level | world-history | — | no |
| OxfordAQA | igcse | world-history | 9245 | yes |
| Pearson Edexcel | igcse | world-history | — | no |

## 6. Priority methodology

Each zero-resource combination is scored on six evidence dimensions (a seventh — demonstrated learner/enquiry/search demand — is recorded as **NO_DATA** for every row: this repository has no connected CRM, contact-form log, or Search Console/site-search data source in this environment, so it is never estimated or invented):

- **Exam-cycle urgency (0-3)** — how soon a real cohort needs the material. Long-running, currently-examined specifications score 3; OxfordAQA's newly launched 2026 specifications (first exams 2027-2028) score 0-2 since no cohort is exam-ready yet.
- **Foundational learner impact (0-4)** — Mathematics, English Language and the three sciences score 4 as universally-required subjects; Business/Economics/Accounting/Computer Science score 3; mid-tier humanities and socials score 2; smaller-audience subjects score 1.
- **Confirmed current teaching activity (0-3)** — pulled directly from the matrix's own `evidence` field: `la-course`/`marlbridge` tier (a genuine, independently confirmed current Learners Academy course) scores 3; the `board` tier (ACTIVE only via the 2026-08-18 owner teach-all authorization, with no separate course-page confirmation) scores 1.
- **Strategic board/level coverage (0-2)** — scores 2 when the pick would give a board its first-ever live resource (OCR, OxfordAQA and Pearson Edexcel currently have 0% coverage each), 1 otherwise.
- **Existing content readiness (0-3)** — how much Marlbridge already knows how to write for this *subject*, regardless of board: 3 if the subject already has 10+ resources elsewhere (Chemistry), 2 if it has 1-9, 0 if it has none.
- **Evidence confidence (0-2)** — 2 if a verified syllabus summary already exists for this exact combination (safe to write from today), 0 if it does not (the syllabus must be verified against the official source first, exactly as was done for the 30 OxfordAQA combinations in this release).

Combinations are ranked by the sum of these six scores (max 17; demand excluded). The top 15% by rank are Tier 1, the next 35% are Tier 2, and the remainder is Tier 3. Ties within Tier 1 are broken first by confirmed-teaching-evidence, then by foundational impact — favouring real, confirmed classroom need over subjects that merely inherit ACTIVE status from the blanket teach-all authorization.

## 7. Tier 1 — write next (19 combinations)

| Score | Board | Qualification | Subject | Code | Recommended first resource |
|---|---|---|---|---|---|
| 15 | Pearson Edexcel | a-level | chemistry | YCH11 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 15 | Pearson Edexcel | igcse | chemistry | 4CH1 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 15 | OCR | a-level | chemistry | H432 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 15 | OCR | gcse | chemistry | J248 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 15 | OxfordAQA | a-level | chemistry | 9620 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 15 | OxfordAQA | igcse | chemistry | 9202 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | AQA | a-level | chemistry | 7405 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | a-level | biology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | a-level | mathematics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | a-level | physics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | igcse | biology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | igcse | english-language | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | igcse | mathematics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | Pearson Edexcel | igcse | physics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 14 | AQA | a-level | accounting | 7127 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OCR | a-level | biology | H420 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OCR | a-level | mathematics | H240 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OCR | a-level | physics | H556 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OCR | gcse | biology | J247 | Course Structure & Study Approach guide (subject-guides) — ready to write now |

## 8. Tier 2 — build after Tier 1 (44 combinations)

| Score | Board | Qualification | Subject | Code | Recommended first resource |
|---|---|---|---|---|---|
| 14 | OCR | gcse | mathematics | J560 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OCR | gcse | physics | J249 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | a-level | biology | 9610 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | a-level | english-language | 9670 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | a-level | mathematics | 9660 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | a-level | physics | 9630 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | igcse | biology | 9201 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | igcse | english-language | 9270 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | igcse | mathematics | 9260 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 14 | OxfordAQA | igcse | physics | 9203 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | AQA | a-level | biology | 7402 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | AQA | a-level | english-language | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | AQA | a-level | mathematics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | AQA | a-level | physics | 7408 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | a-level | biology | 9700 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | a-level | english-language | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | a-level | mathematics | 9709 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | a-level | physics | 9702 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | igcse | biology | 0610 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | igcse | mathematics | 0580 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | igcse | physics | 0625 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Cambridge | o-level | english-language | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Pearson Edexcel | a-level | accounting | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Pearson Edexcel | a-level | business | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Pearson Edexcel | a-level | economics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | Pearson Edexcel | igcse | economics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 13 | OCR | a-level | business | H431 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | OCR | a-level | economics | H460 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | OCR | gcse | business | J204 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | OCR | gcse | economics | J205 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | OxfordAQA | a-level | economics | 9640 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 13 | OxfordAQA | igcse | business | 9225 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 12 | AQA | a-level | business | 7132 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | AQA | a-level | economics | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | AQA | gcse | chemistry | 8462 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Cambridge | a-level | business | 9609 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Cambridge | a-level | economics | 9708 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Cambridge | igcse | accounting | 0452 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Cambridge | igcse | business | 0450 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Cambridge | igcse | economics | 0455 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | Pearson Edexcel | igcse | world-history | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 12 | OxfordAQA | a-level | accounting | 9615 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 12 | OxfordAQA | igcse | accounting | 9215 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 12 | OxfordAQA | igcse | economics | 9214 | Course Structure & Study Approach guide (subject-guides) — ready to write now |

## 9. Tier 3 — monitor / validate (64 combinations)

| Score | Board | Qualification | Subject | Code | Recommended first resource |
|---|---|---|---|---|---|
| 11 | AQA | gcse | biology | 8461 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | AQA | gcse | mathematics | 8300 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | AQA | gcse | physics | 8463 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | a-level | sociology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | a-level | world-history | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | igcse | sociology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | igcse | world-history | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | o-level | sociology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | Cambridge | o-level | world-history | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 11 | OxfordAQA | a-level | business | 9625 / 9725 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 11 | OxfordAQA | igcse | computer-science | 9210 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | AQA | a-level | computer-science | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | AQA | as-level | business | 7131 / 7137 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | AQA | gcse | business | 8132 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | AQA | gcse | economics | 8136 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | Cambridge | a-level | computer-science | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | Cambridge | igcse | computer-science | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | Cambridge | o-level | computer-science | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 10 | OxfordAQA | a-level | computer-science | 9645 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | OxfordAQA | a-level | english-literature | 9675 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | OxfordAQA | a-level | geography | 9635 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | OxfordAQA | a-level | psychology | 9685 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | OxfordAQA | igcse | english-literature | 9275 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 10 | OxfordAQA | igcse | geography | 9230 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 9 | AQA | a-level | psychology | 7182 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | AQA | gcse | sociology | 8192 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | Cambridge | a-level | psychology | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | Cambridge | o-level | commerce | 7100 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | Cambridge | o-level | statistics | 4040 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | Pearson Edexcel | a-level | law | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | Pearson Edexcel | a-level | urdu-language | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 9 | OxfordAQA | a-level | sociology | 9690 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 9 | OxfordAQA | igcse | psychology | 9218 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 9 | OxfordAQA | igcse | sociology | 9292 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 9 | OxfordAQA | igcse | world-history | 9245 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 8 | AQA | a-level | law | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | Cambridge | a-level | ict | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | Cambridge | a-level | law | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | Cambridge | igcse | ict | — | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | Pearson Edexcel | a-level | english-literature | YET01 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | Pearson Edexcel | igcse | english-literature | 4ET1 / 4XET1 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 8 | OxfordAQA | igcse | islamiyat | 9237 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 8 | OxfordAQA | igcse | pakistan-studies | 9236 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 8 | OxfordAQA | igcse | urdu-language | 9264 | Course Structure & Study Approach guide (subject-guides) — ready to write now |
| 7 | AQA | a-level | english-literature | 7712 / 7717 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | AQA | gcse | english-literature | 8702 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | AQA | gcse | psychology | 8182 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | a-level | english-literature | 9695 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | a-level | geography | 9696 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | igcse | commerce | 0715 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | igcse | english-literature | 0475 / 0992 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | igcse | geography | 0460 / 0976 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | igcse | statistics | 0479 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 7 | Cambridge | o-level | geography | 2217 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | a-level | global-perspectives | 9239 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | igcse | environmental-management | 0680 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | igcse | global-perspectives | 0457 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | igcse | islamiyat | 0493 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | igcse | pakistan-studies | 0448 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | igcse | urdu-language | 0539 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | o-level | environmental-management | 5014 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | o-level | islamiyat | 2058 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | o-level | pakistan-studies | 2059 | Verify syllabus against the official source first, then an Exam & Subject Guide |
| 6 | Cambridge | o-level | urdu-language | 3247 / 3248 | Verify syllabus against the official source first, then an Exam & Subject Guide |

## 10. Recommended next production batch

The single highest-scoring, immediately-actionable cluster is **OCR and OxfordAQA Chemistry** (4 combinations, all Tier 1, all already carrying a verified syllabus summary from this release, so no further primary-source research is required before writing):

1. OCR A Level Chemistry A (H432) — Course Structure and Study Approach
2. OCR GCSE Chemistry A (J248) — Course Structure and Study Approach
3. OxfordAQA International AS and A-level Chemistry (9620) — Course Structure and Study Approach
4. OxfordAQA International GCSE Chemistry (9202) — Course Structure and Study Approach

Rationale: Chemistry is Marlbridge's deepest existing subject (62 Cambridge-tagged resources, full 9701/0620/5070 topic coverage), so the team has the most established internal pattern for what a rigorous Chemistry resource looks like; all four combinations score in the top six of the entire 127-row backlog; and OCR and OxfordAQA both currently have 0% resource coverage across every subject they teach, so these four pages would be the first live resource either board has ever had on Marlbridge. This batch is intentionally small (4 pages, one subject, two boards) to keep primary-source verification, academic review and full QA achievable in one pass — matching the existing `a-level-sociology-course-structure.md` / `gcse-history-course-structure.md` "Course Structure and Study Approach" format already used elsewhere on the site.

This batch is a recommendation only. No resource file has been created as part of v1.1 — per the v1.1 mandate, resource production is explicitly out of scope for this release.
