# Resource library audit and first improvement batch

**Written 27 Sep 2026, 11:25 PKT (D-339).** Batch rebased on `origin/main` 693ca218, on branch `d-339-resource-quality-batch1`.

## 1. Verdict

**Marlbridge needs better existing resources more than more resources.**

- **Breadth is not the problem** for the courses inspected:
  - Every one of the 188 official subtopics of Cambridge Chemistry 0620, 5070 and 9701 is mapped to at least two pages.
  - Keyword checks find the syllabus terminology for almost every learning outcome.
- **The problems are accuracy, tier labelling and review status:**
  - 5 of the 24 randomly drawn pages (21%) contained a definite subject error (a wrong fact or a wrong answer); the 3 high-traffic pages had gaps but no errors. Small, stratified sample (95% Wilson interval about 9% to 40%): treat it as a warning sign, not a library-wide rate.
  - 20 of the 55 pages shared by 0620 and 5070 never say what is Core and what is Extended (counted before this batch: the page body, after the frontmatter, contains none of the words "Core", "Extended" or "Supplement").
  - The 0620 **Core** diagnostic contained an Extended-only question.
  - All 1,724 resources are `review-pending`: none has had a subject-teacher review.
- **Gap-filling should be targeted:** revision notes are missing for 34 subtopics across the three courses, and some pages leave out specific Core content.

Recommended split for the next month: about **75% improving existing pages, 25% filling gaps**. This is slightly more towards improvement than the 70/30 starting point, because the sample error rate is high and the gaps are narrow.

## 2. Scope, method and limitations

- **Access:**
  - the full repository (content files, syllabus data, validators);
  - the built site;
  - the live site;
  - the Search Console store the site keeps (D1 `mb-search-demand`, 26 Aug–24 Sep 2026).
- **Not accessible:** GA4. The Supermetrics connector trial expired on 22 Sep 2026. GA4 figures below are the ones recorded on 24 Sep (`claude/enquiries-review-2026-09-24.md`). **No fresh GA4 baseline was taken.**
- **Official documents read** (downloaded from cambridgeinternational.org on 27 Sep 2026):

  | Code | Exam years | Document |
  |---|---|---|
  | 0620 | 2026–2028 | 697205-2026-2028-syllabus.pdf |
  | 5070 | 2026–2028 | 697326-2026-2028-syllabus.pdf |
  | 9701 | 2025–2027 | 664563-2025-2027-syllabus.pdf |
  | 0580 | 2025–2027 | 662466-2025-2027-syllabus.pdf |
  | 0610 | 2026–2028 | 697203-2026-2028-syllabus.pdf |

  The syllabus text was extracted from each PDF. Other boards' specifications were **not** read; claims about them are marked "from knowledge".
- **Coverage matrix:** built for the three Cambridge Chemistry courses only (the provisional priority). Other courses were **not** mapped.
- **Quality sample:** 27 pages. 24 were drawn by stratified random selection (seed 20260927): 0620/5070 ×5, 9701 ×5, 9702 ×2, 0580/4024 ×2, other Cambridge ×2, Edexcel ×2, AQA ×2, OxfordAQA ×1, OCR ×1, IB ×2. The other 3 were the pages with the most search clicks.
  - Each page was read in full by an independent reviewer, who recomputed every calculation.
  - **Every high-severity claim was then re-checked by me** against the file and, where possible, the official syllabus.
  - Three reviewer claims were **rejected** after checking (see section 5).
- **Keyword evidence is not a review.** Finding a syllabus term on a mapped page shows the page mentions it, not that it teaches it well. Coverage status is therefore "Present but not yet reviewed" throughout. Nothing is "Complete and checked", because no page has had a teacher review.

## 3. What exists (verified 27 Sep 2026)

- **1,724 resources** in total:
  - by type: 553 practice-question sets, 549 study guides, 489 revision notes, 110 exam-preparation pages, 23 subject guides;
  - by board: Cambridge 841, OxfordAQA 213, IB 206, AQA 203, Edexcel 175, OCR 86.
  - The median length is 1,048 words; the shortest is 374.
- **Syllabus mapping:**
  - 168 syllabus codes.
  - Only 7 resources carry no code.
  - Every chemistry resource is mapped to official subtopics (`syllabusTopics`), and the build validates this.
- **Authorship:** 1,336 pages carry the "Marlbridge Academic Team" byline. The rest carry a named teacher (Nouman Ahmed 188, Iftikhar Azeemi 162, and others).
  - **Review status: 1,724 of 1,724 are `review-pending`.**
  - No "reviewed by" claim is shown anywhere (D-134 held).
- **Tools and navigation already in place:**
  - 31 ten-minute diagnostics, none teacher-reviewed;
  - a self-check practice bank per flagship code;
  - printable checklists;
  - a revision planner;
  - a "Next steps" block on every resource: same-topic practice, notes or guide, then a diagnostic, checklist and planner, tracked as `recommended_resource_click`;
  - diagnostic results that name the weakest topic, link its resources and offer a trial class;
  - a trial link under each resource title (D-326);
  - board-filtered teacher chips (D-334).
- **0620 and 5070 share one set of 55 pages.** Every page coded 0620 is also coded 5070. 0620 is tiered (Core/Extended); 5070 is not.

## 4. Demand evidence

**Search Console (D1 store, 26 Aug–24 Sep):**
- Resource pages: 500 clicks from 12,121 impressions, spread thinly across many pages. The top page has 11 clicks.
- Clicks by subject: physics 68, English 61, maths 55, ICT/CS 41, Pakistan Studies/Islamiyat 30, chemistry 29, IB other 25, economics 23, biology 21, Global Perspectives 20, business 10. About 117 are in other subjects.
- Chemistry hubs rank poorly: 0620 at average position 23, 5070 at 47.
- Top resource pages:
  - IB MYP Individuals & Societies subject guide: 11 clicks, 242 impressions;
  - 9626 data processing revision notes: 9 clicks;
  - 0580 mensuration practice: 8 clicks, position 8.3.

**GA4 (27 Aug–23 Sep, recorded 24 Sep):**
- Resource pages are about 60% of 2,202 views.
- 5 trial CTA clicks and 5 leads, all from /trial/.
- 23 WhatsApp clicks, about half from resource pages.
- 13% of users scroll to 90%.

**Teaching capacity:** Chemistry is taught by the owner (Cambridge, Edexcel, AQA, OCR, OxfordAQA, IB). Learners Academy blog posts already link to the 0620 and 5070 diagnostics.

**Why Chemistry first:** keeping it first is justified by teaching capacity, by its being the largest single set (231 pages across 0620/5070/9701), and by the error rate found. Search demand alone would put 0580 Maths, 9702 Physics and English Literature ahead of it. **Those are the next courses to map** (section 8).

## 5. Quality sample results (27 pages)

| Page | Verdict | Verified issue (my check) |
|---|---|---|
| /resources/as-chem-ionisation-energy-practice/ | **Error** | Q7(a): says only one 2p orbital is doubly occupied in fluorine. Two are (⇅ ⇅ ↑). Q2 marks only three of the syllabus factors. The description promised mass spectrometry, which the page does not cover. |
| /resources/a-chemistry-transition-elements-revision-notes/ | **Error** | Presents "does not redissolve in excess NaOH / does redissolve in excess NH₃" as general rules. The 9701 table shows Cr(OH)₃ dissolves in excess NaOH, and the Fe²⁺, Fe³⁺ and Mn²⁺ hydroxides do not dissolve in excess NH₃. The shapes table ties square planar to "small ligands". |
| /resources/identification-tests-practice/ | **Error** | Q2(b) gives a mark for "add excess NaOH", which cannot tell Zn²⁺ from Al³⁺. Q9 and a "common mistake" line say the sulfite test works through SO₂ gas; the 0620 test is done on the solution. Cu²⁺ is "light blue" in the syllabus. |
| /resources/aqa-a-level-mathematics-exam-preparation/ | **Error** | Says "hence or otherwise" requires building on the earlier part. It allows any valid method. |
| /resources/ib-dp-language-a-literature-readers-writers-texts-practice/ | **Error** | Q3 accepts "dialogue or dramatic irony" as drama-specific; both occur in prose. |
| /resources/edexcel-ial-physics-oscillations-ial/ | Minor | a_max given as 3.12 m s⁻² from a rounded ω. The exact value is 3.125, so 3.13 m s⁻². |
| /resources/a-physics-electric-fields-revision-notes/ | Minor | Says qV = ½mv² "defines" the electronvolt. Self-test Q1 asks for the units of ε₀ but the answer gives those of 1/(4πε₀). |
| /resources/metals-reactivity-practice/, /resources/alloys-and-extraction-revision-notes/ | Misaligned | 0620 Supplement content is unlabelled: sacrificial protection 9.5.4–5, alloy structure 9.3.5, displacement from ions 9.4.4, blast-furnace symbol equations, cryolite and half-equations 9.6.4–5. Also a questionable "bond energy" reason for electrolysis. |
| /resources/igcse-biology-characteristics-and-classification-of-living-organisms/ | Gap | Core 1.3.2 requires the features of vertebrate and arthropod groups; the page gives none. The key used "has gills", which is not a clean two-way contrast. |
| /resources/igcse-mathematics-mensuration-practice/ (high demand) | Gap | All 10 questions are Core. It has nothing on major sectors, cone surface area or frustums (E5.3–E5.5). |
| /resources/aqa-gcse-physics-conservation-and-dissipation-of-energy/ | Minor | A duplicated sentence. "No device can be 100% efficient, except an electric heater" contradicts itself. |
| /resources/o-level-computer-science-data-representation-revision-notes/ | Minor | "Unicode — up to 32 bits in a fixed-width encoding" is misleading. |
| /resources/as-chem-stoichiometry-revision-notes/ | Minor | Ionic-equation tip says species "that change state" are written as ions: the reverse of the rule. |
| /resources/oxfordaqa-igcse-biology-bioenergetics-practice/ | Minor | Q3 says light or temperature "must" be limiting. Q4 and Q6 double-credit single points. |
| /resources/a-ict-data-processing-revision-notes/ (high demand) | Misaligned | Calls 9626 "ICT"; the official title is Information Technology (checked on the Cambridge site). Scope and quality-factor lists need checking against the syllabus. |
| /resources/ib-myp-individuals-and-societies-subject-guide/ (most clicked) | Weak | eAssessment is described four times. There are no key or global concepts, and no internal links or next steps. |
| Other 11 pages | OK or minor | Calculations correct. Minor style points, recorded in the backlog where worth doing. |

**Reviewer claims I rejected after checking the syllabus documents:**
- 0580 Core "turning points not required": the page is **right** (C2.11 note).
- 0580 "quartiles and IQR are Extended": the page is **right** (C9.3 lists only mean, median, mode and range).
- 0610 "five kingdoms are Core": the page is **right** (1.3.4 is Supplement).

**Unverifiable or unrecorded claims:**
- 79 pages carry "Examiner insight" boxes (92 dated June 2024, 61 dated June 2025) and 117 carry "Try the real question next" pointers.
- The June 2025 0620 ones trace to the owner's papers and examiner report (D-312).
- The **June 2024 ones have no recorded source**. D-329 disproved one challenged claim (9609 ARR), so they are not assumed wrong, but they are unchecked.

## 6. Student journey

The sequence is: choose syllabus → find weak topic → study → questions → worked answers → retest → tuition.

**Already exists:**
- syllabus hubs with topic lists and a checklist;
- a 10-minute diagnostic that names the weakest topic and links its guide and practice;
- practice pages with full worked answers, plus a self-check bank;
- "Next steps" on every page;
- a revision planner;
- a trial link at the top and foot of each page, and a named teacher filtered by board.

**Weak points found:**
1. A Core 0620 student cannot tell which parts of a shared 0620/5070 page they need. **Fixed at template level** (section 7).
2. The Core diagnostic could send a Core student to Extended content. **Fixed.**
3. The "Next steps" block sits at the foot of long pages, and only 13% of users scroll to 90%. Backlog B8 proposes a short "On this topic" line near the top, reusing the same links.
4. There is no retest path apart from repeating the whole diagnostic. Backlog B9 proposes a "Retest this topic" link to the practice bank filtered to the weak topic.

## 7. First batch: completed on branch `d-339-resource-quality-batch1` (not merged)

**Corrections (priority 1):**
- `as-chem-ionisation-energy-practice`: Q7(a) rewritten correctly; Q2 now accepts any three factors, including spin-pair repulsion and sub-shell; the description no longer promises mass spectrometry.
- `a-chemistry-transition-elements-revision-notes`: NaOH/NH₃ behaviour scoped to Cu²⁺, with the Cr³⁺, Fe²⁺, Fe³⁺ and Mn²⁺ behaviour from the 9701 table; shapes table corrected (square planar for d⁸ ions such as Pt²⁺, e.g. [Pt(NH₃)₂Cl₂]); the unsupported ligand-strength claim removed.
- `identification-tests-practice`: Q2(b) mark scheme rewritten (excess ammonia separates Zn²⁺ from Al³⁺). Q9 split into "identify the gas" and "the sulfite test on the solution", matching the syllabus. Cu²⁺ is now "light blue". Q6 wording fixed. The common-mistake line rewritten.
- `identification-tests-revision-notes`: sulfite explanation corrected.
- `aqa-a-level-mathematics-exam-preparation`: "hence" and "hence or otherwise" defined correctly.
- `ib-dp-language-a-literature-readers-writers-texts-practice`: Q3 answer limited to performance elements.
- `edexcel-ial-physics-oscillations-ial`: a_max = 3.13 m s⁻², worked from ω² = k/m.
- `a-physics-electric-fields-revision-notes`: electronvolt definition and ε₀ units corrected.
- `aqa-gcse-physics-conservation-and-dissipation-of-energy`: duplicate removed; heater claim corrected.
- `o-level-computer-science-data-representation-revision-notes`: Unicode wording.
- `as-chem-stoichiometry-revision-notes`: ionic-equation rule.
- `oxfordaqa-igcse-biology-bioenergetics-practice`: Q3 answer.

**Tier alignment (priority 2):**
- `metals-reactivity-practice`: a tier note, and five items labelled *(0620 Extended, 5070 required)*.
- `alloys-and-extraction-revision-notes`: three tier notes; the "mark scheme wording" claim softened to "syllabus wording"; the bond-energy reasoning removed; aluminium uses aligned to the syllabus (low density **and** good conductivity).
- **0620 Core diagnostic:** `metals-reactivity-practice-q10` (displacement from aqueous ions, 9.4.4, Supplement) swapped for `-q7` (magnesium with steam, 9.4.2, Core), in `src/data/diagnostics.ts`. The set is now 15 marks. Correct labelling exposed this: the diagnostics validator rejected it.
- **New on every mapped resource page:** a collapsed "Syllabus points this page covers" list inside the provenance box (`src/utils/academic/syllabus-points.ts`, 3 tests).
  - It shows each subtopic with its verified 0620 tier (Core / Extended only / Core and Extended) or the 9701 stage.
  - It says 5070 "is not tiered, so all of it is required".
  - Tiers come only from `tierVerified` syllabus data; nothing is inferred.

**Gap-filling (about 25% of the batch):**
- `igcse-mathematics-mensuration-practice`: three new Extended questions (major sector; cone slant height, total surface area in terms of π and volume; frustum). They have full worked answers, a tier note and an "indicative marking" label. Every answer was recomputed: 30.5 cm, 107 cm², 44.5 cm; 13 cm, 90π cm², 314 cm³; 436 cm³.
- `igcse-biology-characteristics-and-classification-of-living-organisms`: Core 1.3.2 tables for the five vertebrate and four arthropod groups; the dichotomous-key pair fixed (fins and scales); tier wording corrected.
- `formulae-equations-and-the-mole`: "Deducing a formula from a model or diagram" (0620 3.1.3 Core; 3.1.6 Extended). This was the one outcome with no keyword evidence on its mapped pages.

`updatedDate` is set to 2026-09-27 on every changed resource. No author or reviewer field changed. No review claim was added.

## 8. Ranked backlog

| # | Priority | Page / course | Verified issue or gap | Proposed improvement | Student benefit | Evidence of demand | Effort | Acceptance criteria |
|---|---|---|---|---|---|---|---|---|
| B1 | 1 | 9701 transition element and other A Level chemistry pages (121 pages) | 2 of 5 sampled 9701 pages had a definite error | Owner (chemistry teacher) reviews the 9701 pages in the order of the matrix, starting with topics 28–37. Record `reviewer`, `reviewedDate`, `reviewStatus: reviewed` only after a real review. | Correct A Level chemistry | Owner teaches it; A Level chemistry blog links | High (about 15 min/page) | Each reviewed page has a named reviewer and date; the error log is kept in the decision log |
| B2 | 1 | All 55 shared 0620/5070 pages | 20 have no tier labels in the body (rule as in section 1) | Add the "*(0620 Extended, 5070 required)*" labels used in rates/redox/metals to the remaining 20 pages, item by item, against the syllabus Supplement column | A Core student knows what to skip | 0620 is the site's main IGCSE chemistry course | Medium (2 days) | Every Supplement-only item on a 0620 page carries a label; checked against the PDF |
| B3 | 1 | 79 pages with "Examiner insight (June 2024)" and 117 "Try the real question" pointers | Source not recorded for the June 2024 ones | Check each against the published June 2024 examiner report or paper; keep with a citation, correct, or delete | Honest, citable exam advice | Present on high-traffic pages (e.g. mensuration) | Medium–High | Every insight names the report and page; unverifiable ones removed |
| B4 | 1 | /resources/a-ict-data-processing-revision-notes/ and the other 8 pages for 9626 | Called "ICT"; the official title is Information Technology; topic scope needs checking | Retitle as "Information Technology (ICT)" to keep the search term; check the scope and lists against the 9626 syllabus | Correct naming and scope | 2nd most-clicked resource | Low–Medium | Titles and body say "Information Technology"; lists match the syllabus |
| B5 | 2 | /resources/ib-myp-individuals-and-societies-subject-guide/ | Repetition; no key or global concepts; no next steps | Remove repeats; add key concepts, global contexts and links to MYP resources | Useful for the page students actually find | Most-clicked resource (11 clicks, 242 impressions) | Low | No repeated section; at least 3 internal links; concepts listed from the IB brief |
| B6 | 2 | 9701 revision notes | 14 subtopics have no revision notes (e.g. 28.3–28.5) | Condensed notes for the missing subtopics, from the existing study guides | Quick revision for all of topic 28 | Owner-taught | Medium | Matrix shows notes for every 9701 subtopic |
| B7 | 2 | 0620/5070 revision notes | 10 subtopics per course have no revision notes | Same approach | As B6 | As above | Medium | As B6 |

**Progress on B6/B7 (D-343, 27 Sep 2026):** four new revision-notes pages cover 0620/5070 11.3–11.7 and 12.1–12.4 (9 subtopics per course) and 9701 28.3–28.5. Remaining without notes: 0620/5070 6.1, and 11 subtopics of 9701 (1.1, 1.2, 25.1, 25.2, 26.1, 26.2, 27.1, 29.4, 31.1, 32.1, 32.2). The new pages are review-pending; see section 10.

**B6/B7 completed (D-347, 27 Sep 2026):** eight more revision-notes pages cover the remaining subtopics (0620/5070 6.1; 9701 1.1–1.2, 25.1–25.2, 26.1–26.2, 27.1, 29.4, 31.1, 32.1–32.2). The coverage matrix now shows revision notes for every 0620, 5070 and 9701 subtopic. All new pages are review-pending.
| B8 | 4 | Resource page template | "Next steps" sits at the foot; 13% scroll to 90% | One line under the title: "On this topic: notes · practice · test yourself", reusing ResourceNextSteps links, tracked with a new link kind | Faster study → practice → retest | GA4 scroll data | Low | Line present on mapped pages; `recommended_resource_click` split by position |
| B9 | 4 | Diagnostic results | Retest means redoing the whole set | "Retest this topic" link to the practice bank filtered to that topic | Closes the retest step | Journey gap | Low–Medium | The link opens only that topic's questions |
| B10 | 3 | 0580 Maths (next course to map) | Not yet mapped; mensuration gap found | Build the same coverage matrix for 0580; check tier labels | Covers the highest-demand Cambridge course | Maths 55 resource clicks; 3 of the top pages | Medium | 0580 matrix in `docs/content-review/` |
| B11 | 3 | 9702 Physics (then English Literature) | Not yet mapped | Same | As above | Physics 68 clicks, the highest subject | Medium | 9702 matrix |
| B12 | 5 | 5070 and 9701 diagnostics | 25 (5070) and 57 (9701) subtopics are outside any 10-minute set | Not more sets. Point results to the per-topic self-check bank (B9) instead | Topic-level checking | – | – | Covered by B9 |
| B13 | 2 | Minor items from the sample | Listed in section 5 (OxfordAQA double marks, Edexcel 9UR0 headings, OCR "guaranteed synoptic", 2210 missing two's complement, etc.) | Fix in one pass | Accuracy | – | Low | Each item closed or rejected with a reason |

**Backlog status (27 Sep 2026, evening):**

| # | Status |
|---|---|
| B1 | Open. This is the owner's review; no page is marked reviewed. |
| B2 | Done in D-358. |
| B3 | Done in D-356. |
| B4 | Done in D-357. The hub heading "ICT" is shared with 0417; see B15. |
| B5 | Done in D-357. |
| B6, B7 | Done in D-343 and D-347. |
| B8, B9 | Done in D-354. |
| B10, B11 | Done in D-355. Follow-ups M1–M10 are in section 13. |
| B12 | Covered by B9. |
| B13 | Done in D-357. Each item was fixed or rejected with a reason. |
| **B14 (new)** | 34 "Mark-scheme insight (June 2024)" lines are not verified. Mark schemes for these variants are not published by Cambridge. Verify each one, or relabel it as our own advice. |
| **B15 (new)** | The 9626 hub heading says "ICT". This needs a per-course display-name override, because the subject entry is shared with 0417. |
| **B16 (new)** | 0610 and 0625 practice questions carry no Core/Extended tier tags, so the Core filters cannot apply to them. |

## 9. Verification (27 Sep 2026)

- **Local gate, all pass:**
  - `npm run build`, including validate:academic, validate:diagnostics (31 sets valid), the practice-bank and schema validators and the FX policy;
  - `npm run audit:all`;
  - the negative-validation suite (fixture [AD] updated to the corrected Q2 wording);
  - cross-board regression;
  - `test:api` 84/0;
  - `test:tools` 72/0, including the 3 new syllabus-points tests;
  - practice-analytics 24/0;
  - `astro check`: 0 errors, 0 warnings.
- **Rendered checks** (local preview; 8 changed resource pages plus the 0620 Core diagnostic):
  - HTTP 200;
  - no horizontal overflow at 360 px or 1280 px;
  - axe-core (WCAG 2.0/2.1 A and AA) found 0 violations at 360 px;
  - the syllabus-points list opens and shows the right tiers;
  - the Core diagnostic now serves the magnesium/steam question.
- **Not deployed.** The brief says to prepare changes for review.

## 10. Academic review needed before or soon after publication

**The owner, as the chemistry teacher, should check:**
- the rewritten ionisation-energy, transition-element and identification-test answers;
- the new formula-from-a-diagram section;
- the tier labels on the two metals pages.

**Also needed:**
- **A biology teacher:** the new vertebrate/arthropod feature tables. They are standard textbook features; the syllabus lists the groups but not the features.
- **A maths teacher:** the three Extended mensuration questions and their mark allocations.
- **An English/IB teacher:** the Language A Q3 answer.
- **Physics and maths:** the small wording fixes.

**D-347 revision notes (added 27 Sep 2026), for the chemistry teacher:**
- `physical-and-chemical-changes-revision-notes` (0620/5070), `as-chem-atomic-structure-revision-notes` (AS), and six A Level pages: `a-chemistry-acids-bases-partition-revision-notes`, `a-chemistry-reaction-kinetics-revision-notes`, `a-chemistry-group-2-revision-notes`, `a-chemistry-optical-isomerism-revision-notes`, `a-chemistry-halogen-compounds-revision-notes`, `a-chemistry-alcohols-and-phenol-revision-notes`.
- Points to confirm, **answered by the owner on 27 Sep 2026 at 17:44 PKT (D-351):** NO₂ is the catalyst in SO₂ oxidation, as the notes say. "Yellow/orange" is correct for the phenol azo product. The glowing-splint observation for Group 2 nitrates is fine. The electron relative mass is **1/1840** throughout the site, and the 1/1836 figure is changed on 6 pages. This settles the four points only. The pages are still review-pending until the owner reviews them in full.
- Two independent AI checks recomputed every calculation and checked every equation; they found no errors of fact or arithmetic. Their wording fixes (for example "phenol gives no CO₂ with carbonates", and the ΔHsol trend sentence) were applied. These checks are not a teacher review.

**D-343 revision notes (added 27 Sep 2026), for the chemistry teacher:**
- `fuels-alkanes-and-alkenes-revision-notes`, `alcohols-and-carboxylic-acids-revision-notes`, `practical-techniques-revision-notes` (0620/5070) and `a-chemistry-transition-elements-colour-isomerism-kstab-revision-notes` (9701).
- Points to confirm: the cobalt(II) colours (Co(OH)₂ "blue precipitate", [Co(NH₃)₆]²⁺ "pale brown (straw)"), [CuCl₄]²⁻ "yellow-green", and whether mark schemes also credit heat for hydrogenation.
- An independent AI check against the syllabus PDFs found no equation or calculation errors; its tier-label and wording findings were fixed. That check is not a teacher review.

None of these is marked reviewed.

## 11. Measurement

**Tracking already in place** (consent handled by the existing regional banner, D-280):
- `recommended_resource_click` with `source` (resource_next_steps / diagnostic) and `link_kind`;
- `trial_cta_click` with `cta_location` (`resource-trial-top`, `resource-trial`);
- `generate_lead` with `trial_source`;
- `diagnostic_start`, `whatsapp_click`, scroll.

**Baselines:**
- **Search (D1, 26 Aug–24 Sep):** resource pages 500 clicks / 12,121 impressions. Chemistry resource pages: 29 clicks.
- **GA4 (27 Aug–23 Sep, recorded 24 Sep):** see section 4. A fresh GA4 pull was not possible (connector expired). Take one from the GA4 interface on the day the batch is deployed.

**Minimal additions (none requires new consent):**
1. **Done in this batch:** opening the new list sends `recommended_resource_click` with `source: 'syllabus_points'` and `link_kind: 'open'`, through the existing consent-aware `mbTrack`.
2. When B8 ships, give its links a separate `source` so top and bottom placements can be compared.
3. Monthly: resource clicks and impressions for the edited pages from D1, compared with the table above. Do not expect ranking changes from accuracy fixes within 30 days.

## 12. 30-day plan (from deployment)

| Week | Work | Measurable success criterion |
|---|---|---|
| 1 | Owner reviews and approves the batch; deploy; take a GA4 baseline | Batch live; 12 corrected pages each have an owner sign-off note in the decision log |
| 1–2 | B2: tier labels on the remaining 20 shared 0620/5070 pages | 55 of 55 shared pages label Supplement content; checked against the PDF |
| 2 | B3 (part): check the June 2024 examiner-insight claims on chemistry and maths pages (about 30) | Each kept claim cites report and page; unverifiable ones removed |
| 2–3 | B1: owner reviews 9701 topics 28–37 (about 40 pages) | At least 40 pages `reviewed` with named reviewer and date; errors logged |
| 3 | B4 and B5: 9626 naming/scope; MYP I&S guide | Both done; clicks on the two pages tracked in D1 |
| 4 | B8 and B10: "On this topic" line; 0580 coverage matrix | `recommended_resource_click` from the new line visible in GA4; 0580 matrix saved |
| Day 30 | Report | Errors in a fresh random sample of at least 30 pages, drawn by the same stratified method, at or below 2 (about 7%; currently 5 of 24); resource-to-practice/diagnostic clicks and trial clicks from resource pages compared with the baseline |

## Corrections (27 Sep 2026, D-344)

After the auditor's check of D-339 (project doc `audit-d339-d341-2026-09-27.md`, finding A-03), three figures above were corrected:
- **Error rate:** the sample was 24 random pages plus 3 chosen by search clicks. All 5 errors came from the random 24, so the rate is 5 of 24 (21%), not 5 of 27 (19%). The sample was stratified with fixed quotas, not weighted by each board's share of the library, and the 95% Wilson interval is about 9% to 40%.
- **Pages without tier labels:** recounted on the state before this batch (`afcdb54^`) with the rule now stated in section 1. The count is 20, not 22; the auditor's own count was also 20.
- **Day-30 target:** a 15-page sample cannot distinguish 10% from 19%, so the target is now a count on a sample of at least 30 pages drawn the same way.


## 13. Coverage matrices: 0580 and 9702 (B10, B11)

**Written 27 Sep 2026.** Files:
- `docs/content-review/coverage-matrix-cambridge-0580-2026-09-27.csv` (72 rows)
- `docs/content-review/coverage-matrix-cambridge-9702-2026-09-27.csv` (76 rows)

Same columns as the chemistry matrix, except the tier/stage column: **"0580 tier"** (Core and Extended / Extended only) and **"9702 stage"** (AS / A Level). One row per official subtopic. **Status is "Present but not yet reviewed" on all 148 rows**: every subtopic has at least one mapped page, and no page has had a teacher review. Keyword evidence is not a review.

### 13.1 Sources and syllabus data check

| Code | Exam years | Document (cambridgeinternational.org) | Version |
|---|---|---|---|
| 0580 | 2025–2027 | 662466-2025-2027-syllabus.pdf | Version 3 (May 2024), the latest. The update notice 709706 lists the version 2–3 changes (C5.4/E5.4 prism, E2.11 graphs, C8.2.2/E8.2.2 "random", text alignment). The text used already includes them. |
| 9702 | 2025–2027 | 664565-2025-2027-syllabus.pdf (downloaded 27 Sep 2026) | Version 1 |

- **`src/data/academic/syllabus-topics.ts` matches both syllabuses:**
  - 9702: all 25 topics and 76 subtopics match in number, name and stage (AS = topics 1–11, A Level = 12–25).
  - 0580: all 72 subtopic numbers match, and every tier matches the syllabus (19 subtopics whose Core cell reads "Extended content only" are `supplement`, the other 53 are `both`). Names follow the Core column. The two places where the Extended wording differs (4.7 "Circle theorems I", 9.3 "Averages and measures of spread") are already recorded in the data's own notes. No other mismatch.
- **Newer syllabuses already published:** 0580 2028–2030 (745681, with update 763300) and 9702 2028–2030 (744626). Not read for this matrix (see M7).

### 13.2 What exists

| | 0580 | 9702 |
|---|---|---|
| Rows | 72 (53 Core and Extended, 19 Extended only) | 76 (32 AS, 44 A Level) |
| Pages mapped | 31: 9 study guides, 9 revision notes, 13 practice sets | 75: 25 of each type |
| Subtopics with no mapped resource | **0** | **0** |
| Study guide / notes / practice present | 70 / 72 / 72 | 76 / 76 / 76 |
| Worked answers (practice has an answers section) | 72 | 76 |
| Self-check bank (practice file parsed into the bank) | 72 | 76 |
| In a 10-minute diagnostic (question-level, see 13.5) | 14 | 15 |
| Outcomes with keyword evidence | Extended statements 171/187; Core statements 108/122 | 275/279, plus 21 formula-only outcomes (formula found by hand) |

### 13.3 Gaps by type

**0580**
- **Mapped at topic level only**, not to subtopics: the study guide in 70 rows (all 9 guides), revision notes in 38 rows (Number, Algebra, Statistics) and practice in 25 rows (Number, Algebra). A topic-level tag credits the page with every subtopic of the topic. In 8 rows, a topic-level page shows no keyword evidence of its own for that subtopic, even at the looser 50% rule (1.2, 1.3, 1.5, 1.15, 1.16, 1.17, 1.18, 2.11). A read of those pages confirms nothing relevant for 1.2, 1.5, 1.15, 1.18 and 2.11; 1.16 and 1.17 are partial.
- **No study guide:** 2 rows (1.17 Exponential growth and decay, 1.18 Surds). The Number study guide is tagged to the whole topic but says "Extended-only content is not covered here", so it is not counted for Extended-only rows. It is noted in 4 more rows where the Extended statements add to Core (1.2, 1.7, 1.10, 1.13).
- **No keyword evidence:** 16 Extended-list outcomes in 12 rows. Each was checked by hand against the mapped pages:
  - **Gap (not found), 8:** 1.2 sets (notation and Venn diagrams appear only in the study guide's syllabus list); 1.4 converting between fractions, decimals and percentages; 1.5 ordering; 1.14 entering values and reading the calculator display (2); 1.15 time calculations, clocks and timetables (2); 1.16 currency conversion.
  - **Partial, 4:** 1.4 fraction vocabulary; 1.12 average speed (only a unit conversion); 2.1 letters for generalised numbers; 9.1 tabulating data.
  - **Method miss (content taught, the syllabus word unused), 4:** 1.16 money; 1.17 exponential growth (depreciation and population questions); 1.18 surds; 3.1 Cartesian coordinates.
- **Not in a 10-minute diagnostic:** 58 rows. Topics 3 (Coordinate geometry) and 7 (Transformations and vectors) are in neither 0580 set.
- **Tier labels (0580 only): 22 rows, on 6 pages.** Rule as in section 1: the page body contains none of the words "Core", "Extended" or "Supplement".
  - **11 of the 19 Extended-only subtopics** are mapped to a page with no tier label in the body: 3.4, 3.7, 4.8, 6.3–6.6, 7.2–7.4 and 8.4. For example, the trigonometry notes give the sine and cosine rules unlabelled.
  - **11 Core-and-Extended subtopics** whose Extended statements add to the Core ones: 3.3, 3.5, 4.1, 4.4–4.7, 5.3, 6.2, 7.1 and 8.1.
  - The 6 pages are the revision notes for coordinate geometry, geometry, mensuration, trigonometry, transformations and vectors, and probability.
  - All 9 study guides and all 13 practice sets do carry tier wording. The Number, Algebra and Statistics notes label Extended items.
  - The collapsed "Syllabus points this page covers" list (D-339) does show each subtopic's tier on these pages, but only at subtopic level.

**9702**
- Every row has a study guide, revision notes and practice with worked answers, all mapped at subtopic level.
- **No keyword evidence:** 4 outcomes in 3 rows. Checked by hand:
  - **Gap, 3:** circuit symbols (10.1.1 and 10.1.2): components are named, but the symbols are not shown in the page text; experiments demonstrating electromagnetic induction (20.5.4).
  - **Partial, 1:** the rope, spring and ripple-tank illustrations of wave motion (7.1.1).
- **Not in a 10-minute diagnostic:** 61 rows. Topics in neither set:
  - AS: 1, 6, 10 and 11;
  - A Level: 14, 16, 18, 20, 21, 23, 24 and 25.

### 13.4 Proposed follow-ups (from the matrix evidence; not yet ranked against B1–B13)

Demand figures are only those already in section 4. No new analytics were taken.

| # | Priority | Page / course | Verified issue or gap | Proposed improvement | Student benefit | Evidence of demand | Effort | Acceptance criteria |
|---|---|---|---|---|---|---|---|---|
| M1 | 1 | 6 0580 revision-notes pages (coordinate geometry, geometry, mensuration, trigonometry, transformations and vectors, probability) | No tier words in the body. Mapped to 11 Extended-only subtopics and 11 where Extended adds to Core | Label Extended-only items "(Extended)", item by item against the E column, as the Number and Algebra notes already do | A Core candidate can see what to skip | Maths 55 resource clicks; 0580 mensuration practice is a top-3 page | Low–Medium | Section-1 recount finds 0 of the 6 pages without tier words; each label matches the syllabus |
| M2 | 1 | 0580 Number, Core content | Not taught on the mapped pages: 1.2 sets and Venn diagrams, 1.4 converting between fractions, decimals and percentages, 1.5 ordering, 1.14 calculator use, 1.15 time and timetables, 1.16 currency conversion | Short taught sections in `igcse-mathematics-number-revision-notes`; Core questions with worked answers in `igcse-mathematics-number-practice` (tier note at the top) | Core Number complete for both tiers | As M1 | Medium | A hand re-check finds teaching for each outcome; practice-bank and diagnostics validators pass |
| M3 | 2 | 0580 Number, Extended content | No study guide for 1.17 and 1.18 (the Number guide covers Core only); E1.2 additions (three-set Venn diagrams, ∈, ∅, ⊆) not found on the Number pages | An Extended section, or a separate Extended Number guide, covering E1.2, E1.4, E1.7, E1.10, E1.13, E1.17 and E1.18 | Extended candidates get a guide for all of Topic 1 | As M1 | Medium | Matrix shows a study guide for 1.17 and 1.18 and keyword evidence for E1.2 |
| M4 | 2 | 0580 `syllabusTopics` mappings | Study guides are topic-level in 70 rows, notes in 38, practice in 25; 8 rows have a topic-level page with nothing on that subtopic | Map each page to the subtopics it teaches (the guides already cite C/E numbers); remove tags it does not teach | Accurate syllabus-points list, next steps and self-check topic filters (B8, B9) | – | Low–Medium | No 0580 page is tagged to a subtopic it does not teach; `validate:academic` passes |
| M5 | 2 | 9702 dc-circuits, magnetic-fields and waves pages | 10.1 circuit symbols not shown; 20.5.4 induction experiments not described; 7.1.1 wave-motion illustrations missing | Add a symbol table (from syllabus section 6, not reproduced wholesale), a short description of the induction experiments, and the rope/spring/ripple-tank examples | AS and A Level candidates meet every outcome | Physics 68 clicks, the highest subject | Low | Hand re-check finds each; a physics teacher confirms |
| M6 | 2 | All 106 0580 and 9702 pages | All `review-pending`. The section 5 sample found minor issues on the 9702 electric-fields notes and the Extended gap on the 0580 mensuration practice (both fixed in D-339) | A physics teacher and a maths teacher review in matrix order, starting with the pages changed by M1–M5 | Correct content | As M1 and M5 | High | Reviewed pages have a named reviewer and date recorded only after a real review |
| M7 | 2 | `syllabus-topics.ts`, 0580 and 9702 | The 2028–2030 syllabuses are published. Students starting two-year courses in September 2026 sit 2028 exams | Read both, add them as `status: 'future'` series (the file's versioning rule), and list the subtopics that change | Pages stay right for the 2028 cohort | – | Medium | Future entries added and verified against the PDFs; differences listed in the decision log |
| M8 | 3 | 0580 small partial items | 1.12 average speed, 2.1 letters for generalised numbers, 9.1 tabulating data, 2.11 sketching curves (no practice question), 1.3 roots (practice has powers only) | Add one worked example or question each | Fills small holes | – | Low | Hand re-check finds each |
| M9 | 3 | 0580 and 9702 diagnostics | No question on 0580 topics 3 and 7; none on 9702 AS topics 1, 6, 10, 11 or A Level topics 14, 16, 18, 20, 21, 23, 24, 25 | As B12: no new sets. Make sure B9's "Retest this topic" works for 0580 and 9702 (every row has self-check questions; 0580 needs M4 first) | Retest on any topic | – | Low (after B9) | B9 link opens the right questions for a 0580 and a 9702 topic |
| M10 | 3 | 0625 IGCSE Physics (next course to map) | 4 of its 6 topics have no subtopics in `syllabus-topics.ts`, and none of its 14 pages is mapped below topic level | Record the subtopics from the official PDF, map the pages, then build the matrix with the same method | Same as B10 and B11 | Physics 68 clicks | Medium | 0625 matrix saved with subtopic-level rows |

### 13.5 Method and limitations

- **Mapping.** A page counts for a row if:
  - it is a Cambridge resource for the subject;
  - it carries the code, or no code;
  - its frontmatter `syllabusTopics` names the subtopic, or the whole topic. A whole-topic tag counts for every subtopic in the topic, and is flagged "mapped at topic level only".
  
  Resource type decides the column: `study-guides`, `revision-notes` or `practice-questions`. No other type is mapped to these codes.
- **Outcomes.** Parsed from the `pdftotext -layout` text of the official PDFs:
  - one outcome per numbered item;
  - where a subtopic has no numbered items, one per bullet (with its stem);
  - otherwise the whole statement is one outcome.
  - 0580: only the left (outcome) column is used; "Notes and examples" is dropped. Core and Extended statements are both parsed: 122 Core and 187 Extended. The Extended list includes the Core content.
  - 9702: 300 outcomes. Topic-level "assumed knowledge" notes are excluded.
- **Keyword rule.**
  - Key terms are an outcome's words after removing:
    - English stopwords;
    - syllabus command words (understand, use, recall, calculate, describe, explain, represent and similar);
    - words under 4 letters (except sin, cos, tan, arc and 3-letter acronyms such as HCF, PET);
    - 2-letter capitals, which are formula symbols in the PDF text.
  - Each term is reduced to its first 6 letters.
  - An outcome has evidence when **at least three-quarters** of its key terms (rounded up) occur in the text of the row's mapped pages.
  - Lines that begin with a syllabus reference (for example "- C1.14 Using a calculator — …") are removed first, because contents lists restate the syllabus rather than teach it.
- **Why three-quarters.** A control test matched each topic's outcomes against the pages of an unrelated topic:
  - at 50%, 65/187 (0580) and 123/279 (9702) outcomes wrongly passed;
  - at 75%, 20/187 (11%) and 39/279 (14%).

  The 75% rule was therefore used. The control rate is the method's approximate false-pass rate: **a "yes" is weak evidence, and a "no" is a prompt to look, not a finding.** Every "no" was checked by hand (13.3), and 4 of the 20 were method misses.
- **Formula-only outcomes** (21 in 9702, such as "recall and use Q = It") have no words left to test. Each was checked by hand with a text search of the mapped pages, and every formula was found. The matrix says so in the cell.
- **Diagnostic column.** A row is marked only where a diagnostic question tests that subtopic. The 23 questions in the four 0580/9702 sets were read and assigned by hand (the list is in the script). This is stricter than the chemistry matrix, which credited every subtopic of the source practice file.
- **Tier labels** use the section 1 rule. It is a page-level test, so it cannot show whether each Extended item is labelled. It is applied to Extended-only rows and to rows where the Extended statements differ from Core.
- **Not a quality check.** Nothing here shows a page is correct or well taught. Worked answers were counted, not checked.
- **Script.** `/tmp/claude-0/matrix-b10-b11/build-matrix.mjs` and `parse-syllabus.mjs`, run from the repo root with `node --experimental-strip-types`. They stay outside the repo because:
  - the PDF parsing is specific to these two layouts;
  - the syllabus texts are not in the repository;
  - the manual checks are hard-coded.
  
  No resource content was changed.
