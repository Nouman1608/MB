# Academic QA pilot: closure report

**17 November 2026 (UTC) · Decision D-496 · Branch `academic-qa/pilot-closure` · Rubric 1.0.0**

Internal. Not published on the site. Framework: [docs/academic-qa/framework.md](../../academic-qa/framework.md). Register: [assessments.json](assessments.json). Dashboard: [dashboard.md](dashboard.md).

## A. Summary

The four pilot pages were corrected against official documents, reassessed with the existing rubric, and the framework's safeguards were tested on the real register.

- **Corrected:** 28 of the 37 findings open at the start. 3 more were disproven or accepted with a recorded reason, and 6 remain open. (2 further findings on the practice page had been fixed on 15 November.)
- **Still open:** 10 findings (3 minor, 7 advisory): the 6 carried over and 4 new ones found in this programme. None is major, critical or a hard-stop.
- **Scores (AI-assisted, not approvals):** three pages are at 90 or above; the Psychology page is at 88 and stays in REVISION_REQUIRED.
- **Teacher verification:** none. `teacher-verifications.json` has 0 records, so no page is VERIFIED_APPROVED. That is a separate outcome from the technical closure and is still outstanding for all four pages.
- **Not deployed.** Nothing in this report is live until the branch is merged and the deployment is checked.

## B. The four pages, before and after

| | 0620 study guide | AQA 7405 mole guide | 9990 clinical psychology practice | 0620/5070 atomic structure practice |
|---|---|---|---|---|
| Slug | `igcse-chemistry-0620-elements-atomic-structure-and-isotopes` | `a-level-aqa-chemistry-relative-mass-and-the-mole` | `a-level-psychology-clinical-psychology-practice` | `atomic-structure-practice` |
| Original record | QA-0001 | QA-0002 | QA-0003 | QA-0005 (after QA-0004) |
| Original score | 93.5 | 75 | 85.5 | 82.5 |
| State at the start of this programme | ACADEMIC_REVIEW_PENDING | REVERIFICATION_REQUIRED (stale) | REVERIFICATION_REQUIRED (stale) | REVISION_REQUIRED |
| Open findings at the start | 8 (1 minor, 7 advisory) | 11 (2 major, 5 minor, 4 advisory) | 7 (3 minor, 4 advisory) | 11 (6 minor, 5 advisory) |
| New record | QA-0006 | QA-0007 | QA-0008 | QA-0009 |
| New score | **95.5** | **91.5** | **88** | **92** |
| New state | ACADEMIC_REVIEW_PENDING | ACADEMIC_REVIEW_PENDING | REVISION_REQUIRED | ACADEMIC_REVIEW_PENDING |
| Open findings now | 2 advisory | 1 minor, 1 advisory | 2 minor, 2 advisory | 2 advisory |
| Teacher verification | none | none | none | none |

Why two records were stale at the start: neither page's teaching content had changed. On 16 November a `seoTitle` was added to both (D-481), and a reviewer credit was added to the Psychology page. Any hashed field change makes a record stale, which is the designed behaviour.

Scores by category (points; previous record in brackets):

| Category (max) | QA-0006 | QA-0007 | QA-0008 | QA-0009 |
|---|---|---|---|---|
| Syllabus alignment (20) | 19.5 (19) | 19 (14) | 19 (18) | 19.5 (17.5) |
| Factual accuracy (20) | 19.5 (19.5) | 19 (17) | 18 (18) | 19.5 (19) |
| Worked answers and exam alignment (20) | 19.5 (19.5) | 18.5 (17) | 16.5 (16) | 18.5 (16) |
| Depth and teaching value (15) | 14 (14) | 12.5 (10) | 12.5 (12.5) | 12.5 (12) |
| Source traceability (10) | 9.5 (8.5) | 9.5 (7) | 9 (9) | 9 (6) |
| Clarity and accessibility (10) | 9.5 (9) | 9 (6.5) | 9 (9) | 9 (8) |
| Editorial completeness (5) | 4 (4) | 4 (3.5) | 4 (3) | 4 (4) |
| **Total** | **95.5** | **91.5** | **88** | **92** |

Evidence and reasoning for every score are in the register.

## C. Findings-resolution register

Dispositions: **Corrected** (corrected and verified), **Earlier** (already corrected before this programme), **Disproven**, **Accepted** (with recorded justification), **Open** (unresolved; needs a decision, a document or a teacher).

### QA-0001 → QA-0006 (0620 study guide)

| Finding | Severity | Disposition | What was done |
|---|---|---|---|
| F1 outcome column paraphrased the syllabus without saying so | minor | Corrected | Table headed "our summary"; sentence above it; three rows reworded against syllabus p.13 |
| F2 numbering convention; row 2.2.6 compressed | advisory | Corrected | Convention explained; row lists (a)-(c) |
| F3 "Ar" same as the argon symbol | advisory | Corrected | Worked examples write "relative atomic mass ="; the two symbols are distinguished |
| F4 ion rule contradicted "16 + 2" | advisory | Corrected | Separate lines for positive and negative ions; signed form in the figure explained |
| F5 two figures away from their text | advisory | Corrected | Moved beside Worked example 8 and the chemical-properties section; URLs unchanged |
| F6 syllabus not linked | advisory | Corrected | Linked to the official PDF |
| F7 description fragment; no teacher verification | advisory | Part corrected, part **Open** | Description completed. No teacher verification exists |
| F8 image file named after the O Level page | advisory | Accepted | Picture viewed: board-neutral. Renaming would break a published URL |
| F9 (new) one image labels its number lines "Ar" | advisory | **Open** | The label is part of the picture; it needs a redrawn image |

### QA-0002 → QA-0007 (AQA mole guide)

| Finding | Severity | Disposition | What was done |
|---|---|---|---|
| F1 four figures taught content declared out of scope | major | Corrected | Figures removed from this page; scope restated as a list; link to the ideal gas and empirical formula guide. Scope was not widened |
| F2 OCR/Edexcel labels and a molar-volume route | major | Corrected | Both figures removed (the labels are drawn into the images); page states AQA uses pV = nRT |
| F3 skills column presented as content | minor | Corrected | MS 0.1 and MS 1.1 in their own paragraph |
| F4 circular mole definition | minor | Corrected | Mole and Avogadro constant defined separately, with the unit mol⁻¹ |
| F5 Avogadro value uncertain | advisory | Corrected | Two June 2022 AQA papers print L = 6.022 × 10²³ mol⁻¹; page updated |
| F6 too many significant figures | minor | Corrected | Figures removed; both examples tie significant figures to the data |
| F7 mass/Mr/moles not worked in the text | minor | Corrected | Worked example 1 added |
| F8 figure placement, alt text, notation | minor | Corrected | Two figures, each after its text; proper symbols |
| F9 figure of uncertain origin | advisory | Corrected (by removal) | Origin was not established; the page no longer shows or describes it |
| F10 credit beside a re-review request | minor | **Open** | No documented review exists. The reviewNote history is unchanged |
| F11 link text did not match the link | advisory | Corrected | Link text names the PDF |
| F12 (new) one image rounds an intermediate value | advisory | **Open** | Final answer is the same; needs a redrawn image |

### QA-0003 → QA-0008 (9990 clinical psychology practice)

| Finding | Severity | Disposition | What was done |
|---|---|---|---|
| F1 4(b) gives only the top level | minor | **Open** | No official Paper 3 mark scheme was available. Level bands were not invented; the page now says it does not reproduce them |
| F2 Section B is not in Paper 4 format | minor | Accepted | Kept as extra practice; the real format and both differences are stated at the head of the section |
| F3 Freeman et al. procedure not checked against the paper | advisory | **Open** | The paper refused automated download and was not worked around. The unverifiable phrase was removed |
| F4 "cannot take both drugs" overstated | advisory | Corrected | Justification reworded |
| F5 nothing for 2027 candidates | minor | Corrected | 2027 syllabus compared line by line: same option content and paper format. Note and link added |
| F6 "covers all five topics" | advisory | Corrected | Described as a sample, with untested items named |
| F7 no documented human check | advisory | **Open** | A teacher is now credited (D-379); a credit is not a verification |
| F8 (new) series field and taxonomy end at 2026 | minor | **Open** | Changing either affects every 9990 page; owner decision |

### QA-0005 → QA-0009 (atomic structure practice)

| Finding | Severity | Disposition | What was done |
|---|---|---|---|
| F1 Q4 tier label | major | Earlier | Fixed 15 Nov 2026; re-checked |
| F2 FAQ tier guidance | minor | Earlier | Fixed 15 Nov 2026; re-checked |
| F3 Q8 and Q12 outside the mapped sub-topics | minor | Corrected | Both reworded to stay inside 2.1-2.3. No mapping was added |
| F4 Q7 [3] and Q13 [2] for the same skill | minor | Corrected | Both [2], the tariff and split of the June 2025 Paper 43 mark scheme |
| F5 rounding step not shown | minor | Corrected | 69.798 → 69.8 and 63.62 → 63.6 shown |
| F6 Q4 mark split | minor | Corrected | 1 mark definition, 2 marks explanation |
| F7 examiner claim without a reference | minor | Corrected | Report named; its three listed errors given; "divide the wrong way round" (not in the report) removed |
| F8 Q13 may copy a real question | advisory | Disproven | The real question uses sulfur (32 at 95%, 34 at 5%); Q13 uses gallium |
| F9 syllabuses not linked | minor | Corrected | Both PDFs linked |
| F10 marks-lost list referred to a missing question | advisory | Corrected | List now matches the questions |
| F11 63.6 against the Periodic Table value | advisory | Corrected | Note added; answer unchanged because it is correct |
| F12 Q13 set apart by a rule | advisory | Corrected | Rule removed |
| F13 credit, no line-by-line review | advisory | **Open** | No teacher verification exists |
| F14 (new) ledger records one official URL per page | advisory | **Open** | Tooling limit; see rollout recommendations |

## D. Calculations re-checked

Every numerical answer on the three chemistry pages was recomputed for the new records.

| Page | Calculation | Result |
|---|---|---|
| 0620 guide | boron (10×20 + 11×80) ÷ 100 | 10.8 |
| 0620 guide | magnesium (1896 + 250 + 286) ÷ 100 | 24.32 → 24.3 |
| 0620 guide | chlorine (2625 + 925) ÷ 100 | 35.5 |
| 0620 guide | electrons in Al³⁺, S²⁻, Ca²⁺, N³⁻, F⁻ | 10, 18, 18, 10, 10 |
| AQA guide | Mᵣ(Na₂CO₃); 5.30 ÷ 106.0; × 6.022×10²³; × 2 | 106.0; 0.0500 mol; 3.011×10²²; 6.02×10²² |
| AQA guide | 0.20 × 0.250; × 6.02×10²³; × 2 | 0.050 mol; 3.01×10²²; 6.0×10²² |
| Practice Q7 | (63×69 + 65×31) ÷ 100 | 63.62 → 63.6 |
| Practice Q13 | (69×60.1 + 71×39.9) ÷ 100 | 69.798 → 69.8 |

## E. Sources

All documents are in the owner's OneDrive folder `Papers 2025/resource check`; hashes are in [source-manifest.json](source-manifest.json) and were re-read from disk.

| Document | Used for | Status |
|---|---|---|
| Cambridge IGCSE Chemistry 0620 syllabus 2026-2028, v2 | QA-0006, QA-0009 | Same file as the 15 Nov pilot (SHA-256 identical) |
| Cambridge O Level Chemistry 5070 syllabus 2026-2028, v1 | QA-0009 | Same file as the pilot |
| AQA 7404/7405 specification, v1.1 | QA-0007 | Same file as the pilot |
| Cambridge 9990 syllabus 2024-2026 | QA-0008 | Same file as the pilot |
| Cambridge 9990 syllabus 2027 | QA-0008 F5 | New, 17 Nov 2026 |
| Cambridge 9990 syllabus 2028-2030 | QA-0008 F5, F8 | New, 17 Nov 2026 |
| AQA 7405/1 and 7404/1 question papers, June 2022 | QA-0007 F5 | New, 17 Nov 2026 |
| 0620 June 2025 Paper 43 paper, mark scheme and examiner report | QA-0009 F4, F7, F8 | Owner's existing copies in `Papers 2025`; read in place, not copied |

The `resource check` folder did not exist on this machine. It was created inside the owner's OneDrive `Papers 2025` folder on 17 November, after the owner said to use the OneDrive. The four pilot documents were downloaded again and proved identical to the earlier manifest.

Not obtained: the Freeman et al. (2003) paper (download refused) and any official 9990 mark scheme.

## F. Regression tests

`npm run test:academic-qa` (`scripts/test-academic-qa-lifecycle.mjs`), run on the real register and pages. Every change it makes is restored byte for byte.

| Case | What it proves | Result |
|---|---|---|
| A | Each corrected page has a new record matching its content; the replaced record is kept and no longer matches | 4 / 4 |
| B | A body edit changes the hash and gives REVERIFICATION_REQUIRED; restoring the file restores the state; rewording only `reviewNote` does not make a record stale; changing `syllabusSeries` does | 6 / 6 |
| C | An open critical hard-stop fails the gate (`[Q3]`) and the page is BLOCKED at 95.5 | 4 / 4 |
| D | An approval with no evidence, placeholder evidence or no content hash is rejected (rule 13); an approval of different content never gives VERIFIED_APPROVED; a score of 90 or more alone is ACADEMIC_REVIEW_PENDING; an AI record relabelled as human is rejected | 9 / 9 |
| E | The five records on `origin/main` are present and identical; new records were added after them | 2 / 2 |
| F | A wrong board, syllabus code or qualification on a pilot page fails the academic validators | 5 / 5 |
| G | Built pages: canonical URL unchanged, indexable, BreadcrumbList present, one `h1` | 16 / 16 |
| H | Built pages: corrected answers and labels are in the resource body; removed material is not | 8 / 8 |

Observed for real, not as fixtures:

- All four pages went stale when corrected (`[R2] ... changed since QA-000x; reassess`), and the gate returned to 0 stale only after the new records matched the new hashes.
- The gate rejected the first version of the new records because their date was a day ahead of the UTC date the validator uses. The records carry the UTC date, 2026-11-17.

Case H first failed on the AQA page: "Edexcel" appears in a related-article card that the site template adds under every resource. The page's own content was clean, so the check was scoped to the resource body. No validator was changed.

## G. Search and answer quality

No canonical URL, title, `seoTitle`, H1 or slug changed.

| Page | Metadata change | Answer and source changes |
|---|---|---|
| 0620 guide | Description: "…shells and isotopes, worked." → "Cambridge IGCSE Chemistry 0620 sub-topics 2.1 to 2.3: elements, compounds and mixtures, atomic structure, electron shells and isotopes, with worked examples." `updatedDate` 2026-11-17 | Official syllabus linked; outcome table labelled as a summary |
| AQA guide | `updatedDate` 2026-11-17 | Three FAQ answers rewritten to stand alone (no "Ar and Mr", "AQA 7405 uses…" replaced by "The AQA specification uses…"); Avogadro answer corrected to 6.022 × 10²³ mol⁻¹; AS/A-level relationship stated; source of the constant stated |
| Psychology practice | `updatedDate` 2026-11-17 | Exam-year note for 2027; 2027 syllabus linked; coverage statement no longer implies full coverage |
| Atomic structure practice | `updatedDate` 2026-11-17 | Both syllabuses linked; relative atomic mass FAQ says "relative mass of each isotope"; examiner report named |

`updatedDate` follows the site's existing rule: it is set when content changes. No `reviewedDate` was changed.

Not measured and not claimed: rankings, click-through, or citations by AI systems.

## H. Checks on the built site

On the merged tree (`origin/main` at `eea936055`, 10,241 resources): `validate:academic`, `build` (16,003 pages), `audit:all` (0 problems across 16,002 pages, including accessibility, internal links and structured data), `astro check` (0 errors), `test:tools` 190/0, `test:api` 92/0, the negative suite 63/0 and the report consistency checks all pass. The full table, and what failed on the way, is in [test-results.md](test-results.md).

Not done: the four pages were not viewed in a browser at desktop and mobile widths. The automated accessibility audit covers the built pages; whether tables and code blocks read comfortably on a narrow screen was not judged by eye.

## I. Teacher review packs

Regenerated for the corrected pages, in [review-packs/](review-packs/). Each has the page's current hash, the official sources, the findings and the record templates.

Questions that need a teacher's judgement:

1. **0620 guide:** does the corrected ion rule read clearly to a Core candidate? Should the boron and magnesium figure be redrawn with a subscript r?
2. **AQA guide:** is "mean mass of a molecule" acceptable for relative molecular mass in AQA marking? Is removing the mole "hub" figure a loss worth a redrawn AQA version?
3. **Psychology practice:** check answer 1(b) against the Freeman et al. paper; supply or approve level descriptors for 4(b); decide whether Section B should become an 18-mark, two-question section.
4. **Atomic structure practice:** are the reworded Q8 and Q12 at the right demand? Is [2] right for Q7?

To approve a page, the teacher records a result in `teacher-verifications.json` with the hash printed in the pack and where their own record is kept. Nobody records it for them.

## J. Outside the pilot (recorded, not fixed)

| Priority | Issue | Where |
|---|---|---|
| High | The image with an "Edexcel example" tag drawn in, and the mole "hub" image tagged "OCR, Edexcel" with a 24.0 dm³ route, are still on other AQA and OxfordAQA pages | `aqa-a-level-chemistry-ideal-gas-equation-and-empirical-formula` (and its revision notes), `aqa-a-level-chemistry-mole-revision-notes`, `oxfordaqa-a-level-chemistry-amount-of-substance` (and its revision notes) |
| Medium | The taxonomy lists AQA 3.1.2.1 to 3.1.2.4 but not 3.1.2.5 | `src/data/academic/syllabus-topics.ts` |
| Medium | The 9990 taxonomy record ends at 2026; 2027 and 2028-2030 syllabuses exist | `src/data/academic/syllabus-topics.ts` |
| Low | The ledger stores one official URL per page | `scripts/academic-review-ledger.mjs` |

## K. Questions for the owner

1. **9990 series.** Should the 9990 pages move to a 2027 record (content verified identical for Option 1 and Papers 3 and 4), and should a 2028-2030 record be built?
2. **Psychology level bands.** Can you supply an official 9990 Paper 3 mark scheme, or should a teacher write Marlbridge's own banded guide, labelled as such?
3. **Freeman et al. (2003).** Can you supply the paper, or should a Psychology teacher check answer 1(b)?
4. **Redrawn figures.** Do you want AQA versions of the two cross-board images, and a corrected boron figure?
5. **Teacher sign-off.** Who should verify each of the four pages, and by when?

## L. Recommendations before wider rollout

1. **Look at the images.** Both major findings on the AQA page lived inside pictures. An assessment that reads only alt text cannot see a label drawn into an image. Make viewing every figure a required step.
2. **Check figure reuse across boards.** One image file carried another board's tag onto five pages. A check that flags an image used on pages of more than one board would have caught it.
3. **Record the syllabus end date.** The Psychology finding came from a series that ended while the page stayed live. The scorecard could warn when a page's series ends within a set number of months.
4. **Separate "metadata changed" from "content changed".** Two records went stale because a search title was added. The hash is right to be strict, but the dashboard could say which fields changed, so reassessment effort goes where the teaching content moved.
5. **Use the register's UTC date.** State it in the framework, so a record written late in the day elsewhere is not rejected as future-dated.
6. **Keep owner documents in the manifest by reference.** Past papers and examiner reports the owner already holds were needed here. The manifest could list them by path and hash without copying them.
7. **Allow more than one official URL per page** in the ledger, for pages serving two syllabuses.
8. **Do not pin test fixtures to a record number.** A negative case that planted a hard-stop in QA-0001 stopped working once the page was reassessed, because the gate acts on the newest record. Fixtures should select the newest record for a page.
9. **Plan for mark schemes.** Practice pages cannot be fully checked for tariffs and level descriptors without them. Decide which the owner can supply before assessing practice sets at scale.
