# MB-audit REVIEW H (independent review of audit-fixes-content-tools @ 367b3647b)

Read-only review. No build run. validate:academic run (exit 0) plus scripts/test-exam-calendar-status.mjs (passes). Facts re-fetched where possible: OxfordAQA 9725 page; Cambridge June 2027 Zone 1 timetable PDF (read with pdftotext). NOT re-fetched (accepted on the fixers' citations, flagged "unverified by H"): Cambridge 2058 syllabus, 0475 and 4ET1 set texts, 0478 pseudocode (checked from knowledge only), 3247 Urdu syllabus, IB guides (ibo.org blocks fetch).

## BLOCKER (REJECT) - will break the build

**T2 (Agent F): `src/data/academic/exam-calendar.ts` is syntactically invalid and the May/June 2027 record is in the wrong array.**
- The `partialNote` string is single-quoted and contains an unescaped apostrophe: `... Confirm them with your school's exams officer.` Verified: `node --experimental-strip-types -e "import('./src/data/academic/exam-calendar.ts')"` fails at line 76 with a SyntaxError. The unit test only imports the `.mjs` file, so it did not catch this.
- The record (seriesLabel, seriesSlug, examStartIso, extraSources ...) was pasted at the end of `CAMBRIDGE_EXAM_SERIES` (type `CambridgeExamSeries` = label/months/availability), directly after `},  /**` on the Feb/March entry, instead of into `EXAM_SERIES_KEY_DATES`. Even once the quote is fixed it would fail type-checking there, and the page maps only `EXAM_SERIES_KEY_DATES`, so the June 2027 series would never render (the test case l3 "Later series" would never occur on the page).
- Fix (owner F): remove the object from `CAMBRIDGE_EXAM_SERIES` (restore that array to its 3 entries and the `},` / `/**` layout), append it to `EXAM_SERIES_KEY_DATES` after the March 2027 entry, and write `school\'s` or double-quote the string (or "your exams officer"). Then re-run `node --experimental-strip-types -e "import('./src/data/academic/exam-calendar.ts')"`, the page should show 3 series blocks.
- Fact check of the window itself: Zone 1 PDF contents list weeks 26-30 April ... 07-11 June 2027; the 26 April to 11 June window is correct (Zone 6 12 June not independently opened). Source ACCEPTED, placement REJECTED.

## Other REJECTs / fixes needed

| # | Item | Owner | Problem | Exact fix |
|---|---|---|---|---|
| R2 | C15 / D1 | B (or lead) | `cambridge-o-level-islamiyat-2058-subject-guide.md` lines 60, 70, 75: double honorific "the Prophet's (pbuh) life (pbuh)" (the script added a second (pbuh) after "Prophet's" where one already followed "life"). Only these 3 lines found (scan of all 132 changed Islamiyat files). | Delete the second "(pbuh)" after "life" (keep "Prophet's (pbuh) life") or delete the one after "Prophet's". |
| R3 | T11 | G | Not done. The owner's prompt supplies the wording; the card `src/data/flashcards/oxfordaqa-igcse-chemistry.ts` line 73 still reads "An average mass of the atoms of an element, compared with carbon-12." (no 1/12, no "weighted"). G treated it as NEEDS OWNER because the text was not in the deck, but the card exists and is imprecise. | Replace with: "The weighted average mass of an atom of the element relative to 1/12 of the mass of a carbon-12 atom." (check the OxfordAQA 9202 spec wording if reachable). |
| R4 | P4 (remaining half) | F / lead | D's report said `/syllabus-updates/` prints `paperCode — title`; line 326 of `src/pages/syllabus-updates/index.astro` still does, so "Paper 1 — Paper 1" survives there. | Use `componentLabel(c.paperCode, c.title)` from `src/utils/academic/assessment-faq.ts`. |
| R5 | P12 housekeeping | lead | `scripts/course-consistency-baseline.json` still has the 2 economics entries the lead's last commit fixed (validator prints "baselined 60, 2 stale baseline entries (delete them)"; passes, exit 0). | Delete those 2 lines (the file then has 60). |
| R6 | public/llms.txt | lead | Running `validate:academic` rewrote `public/llms.txt` in the worktree (T19 rename "World History" to "History" moves/renames one line). The committed file is stale; a validator that writes a tracked file. | Commit the regenerated `public/llms.txt` (diff is 1 line moved/renamed). |

## Item verdicts

### Area 1 (A, B, C)

| ID | Verdict | Evidence / re-derived numbers |
|---|---|---|
| C1 | ACCEPT | Units added (mol^-1, g/mol). 3.2 g O2 = 3.2/32 = 0.1 mol (6.02e22 particles) ok; 5 g H2 = 5/2 = 2.5 mol x 6.02e23 = 1.505e24 ok. |
| C2 | ACCEPT | Marks: A = 1+2+2+1+1+1 = 8; B = Q7 (2+1+2)=5, Q8 (2+2)=4, Q9 (1+2)=3, Q10 (3+2)=5, Q11 (2+2)=4, Q12 (1+2+2)=5, Q13 (2+1)=3 -> 29; total 37 matches. Notes re-derived: 7.1/71=0.10; 7.1/35.5=0.20; 24+16=40; 4x1.204e23 = 4.816e23 = 4.82e23 (4.80e23 with rounded); 3.01e24/6.02e23 = 5.0 mol; 2.70/27=0.100, 10.65/71=0.150, 13.35/133.5=0.100 -> 2:3:2; 9.0/18 = 0.5. All correct. |
| C3 | ACCEPT WITH NOTE | Paper 2 line now "5.5 and 5.11" instead of the owner's "fix to 5.11". Defensible: AA SL 5.5 includes definite integrals by technology, 5.11 the analytical version. Unverified by H (ibo.org 403). Keep, but owner asked for 5.11 so confirm. |
| C4 | ACCEPT WITH NOTE | Re-derived: SB = 55+10 = 65; SC = 50+12 = 62; net +3. Toll excluded (transfer); operator 20-50 = -30. Time -20%: 55x0.8 = 44, SB 54, net 54-62 = -8; break-even time 62-10 = 52. Lemons: 0.5x6000+0.5x3000 = 4500; owners of good cars need 5000 so withdraw; price 3000; lost gain 6000-5000 = 1000. MC check: demand P=14-0.1Q gives 10 at Q=40, 8 at 60; MC=2+0.1Q gives 6 at 40, 8 at 60; MR=14-0.2Q=6 at 40 (consistent); triangle 1/2 x (10-6) x (60-40) = 40. All consistent. Definitions added (public/merit good) correct. Pareto alt text correct. Notes: (i) time saving was changed 35->55 to keep net +3 (invented numbers, acceptable but it changes the "breakeven 32" to 52 and the 20% case from -4 to -8, all consistently updated in both pages; the removed image showed the old numbers so it was rightly removed); (ii) revision notes now show two different monopoly examples near each other (312.5k figure and the 40 example); (iii) three diagrams removed with no dangling references or captions found (bypass-cba-flip, ib-dp allocative-efficiency, monopoly-welfare-loss); owner needs regenerated images; (iv) the other Cambridge images were not individually inspected by H. |
| C5 | ACCEPT WITH NOTE | Three images carrying "Extended"/water potential removed from both AQA pages; alts of kept images clean. Not individually viewed by H. |
| C6 | ACCEPT | x1 = sqrt5 = 2.2360680; x2 = sqrt(5.2360680) = 2.288246 -> 2.2882 (sqrt(5.2361) = 2.288253 -> 2.2883, so original line was a rounding artefact; new unrounded working is right). x3 = 2.299619 -> 2.2996; root (1+sqrt13)/2 = 2.302776; f(2.3025) = -0.00099375; f(2.3035) = +0.00261225. All page values match. |
| C7 | ACCEPT | sqrt(2x15/(0.90e-3)) = sqrt(33333) = 182.57 -> 183 V. Q11(c) bracket fix 15/(2.0e-3) = 7500 W ok. |
| C8 | ACCEPT WITH NOTE | 229 titles unified to "Pearson Edexcel International A Level Mathematics". validate-resource-titles / search-title check: PASS, 0 duplicate. Unit codes not added (NEEDS OWNER, correct per rules). Note: 295 search titles already >60 chars; "Pearson " lengthens the 229 titles (SEO truncation risk, no validator). Also the course display name lives in src/data (not changed). |
| C9 | ACCEPT | Kc = 1.60x1.60/(0.40x1.40) = 4.571 ok; reasoning now species count not gas. |
| C10 | ACCEPT (NOT REPRODUCIBLE) | A's reasoning plausible; not re-checked by H against 0625 syllabus. |
| C11 | ACCEPT | 15/250 = 6%; 0.06x25 h = 1.5 h = 90 min unchanged. |
| C12 | ACCEPT | lambda = -ln(5/6) = 0.1823 per throw; t1/2 = 0.693/0.182 = 3.80 throws. |
| C13 | ACCEPT | 4.76 + log10(10) = 5.76; log ratio 6.90-7.20 = -0.30, ratio 10^-0.3 = 0.501 ok; ratio 1 -> pH = pKa = 4.76 (page says 9.25 for case 1 = pKa of ammonia/ammonium; not checked against the question). |
| C14 | ACCEPT | kg added; 0.48 +/- 0.05 = 0.43 to 0.53 ok. Calculus AB 8.5 "stray text" is axis labels read by text extraction: NOT REPRODUCIBLE accepted. |
| C15 | ACCEPT WITH NOTE | Safiyya, Zayd (qualified), Imams sentence, "Facts to use" heading, frontmatter-as-text and the rest as in B report; see R2 for a defect in a sibling file. Hasan/Husayn (RA) in a Twelver Imams list followed by Imams without any honorific is inconsistent in the 2058 notes line 92; minor. Unverified by H against the 2058 syllabus. |
| C16 | ACCEPT | "RCD 1964 (Pakistan, Iran and Turkey)" correct. |
| C17 | ACCEPT | Rewritten with OPENFILE ... FOR READ, FOR Index <- 1 TO 3, READFILE "Names.txt", Names[Index], CLOSEFILE, FOR WRITE loop 4 times: valid Cambridge 0478 pseudocode (file name used as identifier). |
| C18 | ACCEPT WITH NOTE | Q9 wording and mark scheme now agree with WRITE overwrite. Not read in full. |
| C19 | ACCEPT WITH NOTE | Kept Cambridge's transliteration "Ahtish" plus "spelled Atish or Aatish elsewhere"; owner asked for Aatish. Defensible (syllabus spelling), leaves owner question. 8 prose = 7 articles + Khatoot e Ghalib reading is plausible, unverified by H. |
| C20 | ACCEPT (verified correct, no change) | Unverified by H. |
| C21 | ACCEPT WITH NOTE | 9 legacy IGCSE Business titles end "(Cambridge 0450, exams to 2026)". Title changes alter the pages' search titles; the title validator passed. |
| C22 | ACCEPT (not reproducible) | |
| C23 | ACCEPT | 6000/24000 = 25%, 4950/18000 = 27.5%; claim reworded to "larger average yearly profit", total depends on life. Minimal. |
| C24 | ACCEPT WITH NOTE | Set texts added to 4ET1 and 0475 subject guides from specs; unverified by H. Board course pages not updated (D files). |
| C25 | ACCEPT (report only) | |
| C26 | ACCEPT (report only) | |
| C27 | ACCEPT (report only) | |
| C28 | ACCEPT WITH NOTE | Scan of all added lines: no empty alt, no double spaces, no residual "Extended" tier text outside genuine prose. 5 sampled files clean. Concerns: (a) alt text now omits "Extended" while the image itself still shows an "Extended" badge (2,470 image lines unresolved, reported); alt/image mismatch is a trade-off; (b) removing captions such as "(Cambridge only)" on OxfordAQA/OCR A Level Chemistry pages hides a warning rather than fixing content that may be out of spec (e.g. benzene -> 4-nitrophenyl ethanoate on OxfordAQA); content owners should confirm those figures belong on those pages. |
| D1 (Islamiyat script, B) | ACCEPT WITH NOTE | 132 files scanned: 1,439 (pbuh) and 1,543 (RA) insertions, 0 doubled, 0 inside frontmatter (only reviewNote changed in frontmatter), 0 inside URLs/code, (pbuh) only after Prophet/Muhammad (except the R2 defect and line-wrapped cases where "(pbuh)" begins a line after the name, which renders fine), (RA) only after Companions (Hasan/Husayn (RA) acceptable in Sunni usage). Two styles co-exist ("Prophet's (pbuh) life" 107 files vs "Prophet (pbuh)'s" 30): style inconsistency only. |

### Area 2 (D, E)

| ID | Verdict | Evidence |
|---|---|---|
| P1 | ACCEPT (done elsewhere) | |
| P2 | ACCEPT | FAQ lists 11 topics numbered with stage; lead's last commit removed the 2 bad syllabusTopics tags; validator passes. Baseline stale entries: R5. 6 distinct names/11 topics explained (AS 1-6, A 7-11). |
| P3 | ACCEPT WITH NOTE | Figures from 2058 (5 questions per paper; 8+14+14+14 = 50 marks) consistent; 2058 source not re-fetched by H. |
| P4 | ACCEPT WITH NOTE | Course page fixed; syllabus-updates not (R4). 202 of 628 stated by D, not recounted. |
| P5 | ACCEPT WITH NOTE | `validate-course-consistency` wired into validate:academic and passes ("166 courses, 18318 resources; hard problems 0, new [5] findings 0, baselined 60"). Tolerating 62 existing duplicate practice links (now 60): appropriate as a ratchet (any new one fails, stale reported) since many are deliberately multi-topic practice sets (e.g. IGCSE Maths trigonometry under Geometry and Trigonometry). But the audit asked the check to fail on duplicates, so state this to the owner; the 2 stale entries should be deleted (R5). Runtime 2-3 minutes in validate:academic. |
| P6 | ACCEPT WITH NOTE | "(combined)" tagging; IGCSE vs International GCSE title split (56/56) left NEEDS OWNER. |
| P7 | ACCEPT WITH NOTE | Course pages only; /subjects and /resources hub totals not changed (reported). |
| P8 | ACCEPT | Shared counts 75/59 stated on both pages. |
| P9 | ACCEPT WITH NOTE | Not render-checked. |
| P10, P11 | ACCEPT (report only) | |
| P12 | ACCEPT | 3+1+1+1 = 6 questions on 4 topics; label updated in G. |
| P13 | ACCEPT WITH NOTE | One end-of-page block (ResourceTutoringPrompt in the end Section, teachers in the slot, `class="mt-0"`), SubscribeBox at the very end, ResourceNextSteps `showSubscribe={false}`. Logic reads correct by static review. `astro check` not run. D2 "short line after the introduction" relies on an existing component (not changed here). |
| P14 | ACCEPT WITH NOTE | Form `hidden` until JS; `<noscript>` fallback; select label and hint. Risk: `hidden` attribute on elements that also carry display utility classes (`grid`) relies on Tailwind v4 preflight `[hidden]` rule; verify visually in a browser. |
| P15, P19 | ACCEPT (done elsewhere) | |
| P16 | ACCEPT | `{' '}` separator added in next steps; ArticleCard/other separation not individually checked. |
| P17 | ACCEPT | Eyebrow lines and second band removed; FAQ duplicates not re-verified in a render. |
| P18 | ACCEPT | Icons moved to CSS `::after` with `content: '+' / ''` (alt-empty form, with plain fallback declared first). |
| P20 | ACCEPT | `articleCategoryLabel` used on card and article eyebrow; lead follow-up covers the page. |

### Area 3 (F, G)

| ID | Verdict | Evidence |
|---|---|---|
| T1 | ACCEPT | Status logic re-read. 23 Nov 2026: Nov series exam end 2026-11-20 < today, results 2027-01-07 > today -> "Exams over, results pending"; Feb/Mar 2027 start 2027-02-03 in future -> "Next series"; warning: 2026-11-27 minus 2026-11-23 = 4 -> "Final entries deadline is in 4 days (27 November 2026)". Boundaries: 14 days inside (13 Nov), 15 outside (12 Nov), day-of "today", 28 Nov none, late deadline 14 Dec warns from 30 Nov; tests pass. Plain dates readable without JS; label hidden without JS. Date uses local time of visitor. Mild note: Nov window ISO dates are bounding days for "Late September"/"Mid-November" (documented). |
| T2 | REJECT | See BLOCKER. |
| T3 | ACCEPT | Re-fetched oxfordaqa.com page: AS first examined May/June 2027, full A Level May/June 2028. Note rendered on syllabus-updates; course page depends on D's `firstAssessmentText()` reading the optional field. |
| T4 | ACCEPT WITH NOTE | AQA 7131/7132 firstTeaching 2023-09, History legacy 2015, Psychology 2019 marks nulled and shown as "Not confirmed" (acceptable alternative to official figures; page consumers handle null per validator). Remaining "Not recorded" items NEEDS OWNER. Unverified by H. |
| T5 | ACCEPT (deferred by owner) | |
| T6, T7 | ACCEPT | T7 statement added; T6 report only. |
| T8 | ACCEPT | Unchanged. |
| T9 | ACCEPT WITH NOTE | `exam-years.ts` derives labels from assessment records; validator passes. Not render-checked. |
| T10 | ACCEPT WITH NOTE | Headline computed from listed decks plus separate AP phrase; counts print at build, not verified by H (needs build). Meta description now longer (may exceed ~160 chars). |
| T11 | REJECT | See R3. |
| T12 | ACCEPT WITH NOTE | "modelled on June 2024 Paper 42 (an Extended paper) ... keeping to Core content" is honest and logically coherent: Paper 4 is the Extended theory paper (Core candidates sit Paper 3). Weak point: a Core diagnostic is modelled on an Extended paper; better to model it on June 2024 Paper 32 (Core theory) if the questions really come from there. Owner decision. |
| T13 | ACCEPT | validate-diagnostics PASS for all 31 sets; 0620/extended label corrected Six->Five topics; 0625/core "4 topics / 6 questions" now shown as both. |
| T14 | ACCEPT | Statement matches code per G (localStorage for self-awarded marks, nothing sent). Not independently traced. |
| T15 | ACCEPT WITH NOTE | Not fully rendered in HTML (760 KB); option reported. Near-duplicate titles reported. |
| T16 | ACCEPT WITH NOTE | Both counts explained on the page (distinct vs per-course sum). Not a single source as asked, but both are computed at build and labelled. |
| T17, T18 | ACCEPT | |
| T19 | ACCEPT WITH NOTE | D renamed IB DP World History -> "History" via matrix.ts (display only, slug unchanged); R6 (llms.txt). |
| T20 | ACCEPT | "No resources published yet" shown for 0 count. |

## Scope / rule checks (g)
- No file under /ar /ur /bn changed; no page deleted (git: 18 A, 522 M, 0 D); no price file changed (validate-pricing-consistency passes); no URL/slug changes seen (only displayed names).
- Outside ownership: none found beyond Agent D's one-line import-extension changes (combination-resources.ts, course-topics.ts), declared in D's report.
- Frontmatter: across 485 changed resource files only `title`, `reviewNote` and two `syllabusTopics` lines (lead commit) changed. No seoTitle changes.

## Risks the build may not catch
1. exam-calendar.ts syntax/type error (BLOCKER) is a build error, but the June 2027 record would also silently never display if only the quote is fixed.
2. `hidden` on `grid`/`fieldset` elements in SubscribeBox: visual check in a browser; also check JS-on state shows the form (script sets `form.hidden = false`).
3. Alt text now omits "Extended" while ~2,470 image lines still show Cambridge Extended badges inside the pictures (A and B reports).
4. Caption tags such as "(Cambridge only)" removed from OxfordAQA/OCR A Level pages may expose out-of-spec material as in-spec.
5. SEO: 229 titles lengthened by "Pearson "; flashcards meta description longer; the title validator checks duplicates only.
6. Removed economics diagrams: other surfaces (OG images, image sitemaps) may reference the three removed image URLs; harmless but check.
7. Inline script in exam-calendar imports `exam-calendar-status.mjs` via Vite: confirm it bundles in the Astro build; labels depend on JS (no-JS shows plain dates by design).
8. public/llms.txt is regenerated by validate:academic (R6); the lead's build may leave the tree dirty.
9. Unverified externally by H: 2058 syllabus claims, 0475 and 4ET1 set texts, 3247 Urdu texts, IB guide claims (C3, T4), AQA 7131/7132 first-teaching date.

## Counts
Items reviewed: C1-C28 (28), P1-P20 (20), T1-T20 (20) = 68, plus D1 script as a separate row.
REJECT: 2 (T2, T11). Plus 4 housekeeping fixes (R2 double honorific in 3 lines, R4 syllabus-updates label, R5 stale baseline, R6 llms.txt).
ACCEPT WITH NOTE: about 33. ACCEPT: the remainder (about 33).
