# AUDIT-REPORT-C (Agent C, cross-board sweep)

Branch `audit-fixes-C`. Full line-by-line list: `AUDIT-C28-HITS.md` (split by owner, each hit marked REAL / REAL-IMG / REVIEW / FALSE with file and line).

## C28 - Cambridge-only wording and assets on non-Cambridge resources

Status: **VERIFIED, NO CHANGE NEEDED in files owned by C. Hit lists handed to A and B (below). Images flagged, not edited.**

Method: scanned all 11,597 non-Cambridge resources in `src/content/resources` (no "cambridge" in `boards`) and all 3,270 `src/content/ap-resources` files (nested by course) for Extended, Supplement, Core, "water potential", Paper 4/6, Cambridge syllabus codes, the word Cambridge, and image filenames containing igcse-/0610/0620/0625/0580 (also any other Cambridge code in an image filename). About 21,600 raw line matches, each classified and then spot-checked by reading samples of every class.

Findings by owner (matched lines / files):

| owner | REAL text | REAL-IMG (Cambridge-origin image) | REVIEW | files owned |
|---|---|---|---|---|
| A (STEM) | 159 lines in 94 files | 2,470 lines in 534 files (HIGH 1,554 lines / 396 files; MED 916 / 347, overlapping) | 17 lines in 13 files | maths, physics, chemistry, biology, statistics, MYP sciences, AP STEM |
| B (humanities, business, computing, languages) | 8 lines in 8 files | 790 lines in 330 files (HIGH 145 / 108 files; MED 645 / 240) | 0 | |
| C (ESS, MYP design) | 0 | 0 | 0 | 121 + 34 files, 42 matches, all false positives |

REAL text, A: 66 files with the Cambridge "Extended" tier label in image alt text or captions (AQA GCSE Biology 8461 x ~25 incl. transport-in-cells, OCR GCSE Biology, AQA GCSE Mathematics algebra and AQA GCSE Chemistry 8462 bonding captions "MgO is Extended", "gold labels are Extended only"); 28 files where captions tag content "(Cambridge)", "(Cambridge only)" or "(OCR and Cambridge)" on AQA A Level Chemistry / OCR A Level Biology pages; 4 files using "water potential" on AQA GCSE Biology 8461 (not in that spec). REAL text, B: the caption "Market failure has five causes limited to those in the 0455 syllabus" (0455 is Cambridge IGCSE Economics) on 8 AQA / OCR / OxfordAQA economics files.

False positives worth knowing (no action): OxfordAQA International GCSE Maths 9260 genuinely has Core and Extension tiers; IB MYP Mathematics genuinely has Standard and Extended; OCR GCSE Biology J247 uses "water potential" in its own spec (B3.3f); AQA/Edexcel "core practical"; IB Global Politics "core topic"; Edexcel IGCSE / OxfordAQA / AQA / OCR image names beginning `edexcel-igcse-`, `oxfordaqa-igcse-`, `igcse-oxfordaqa-` etc. are the board's own; "Oxford Cambridge and RSA", Cambridge Water, Cambridge Analytica, and cross-board "equivalent Cambridge page" links; numbers such as 2058 or 7100 inside calculations; "paper 4,400 t".

Images to replace (not edited): AQA GCSE Biology 8461 transport-in-cells and other pages use `igcse-biology-0610-*` assets (images may themselves show "Extended" or water potential; open each). Many A Level maths / chemistry / physics pages on AQA, OCR, Edexcel and OxfordAQA use `a-level-maths-9709-*`, `igcse-mathematics-0580-*`, `igcse-biology-0610-*`, `igcse-physics-0625-*`, `igcse-shared-intl-*`, `o-level-biology-5090-*`. HIGH confidence = filename carries a Cambridge code; MED = bare `igcse-<subject>-` name that is likely from the Cambridge page of the same topic (picture may be board-neutral; check by viewing before replacing).

Edits made by C: none (no real hit in C-owned files). No validators were relevant because no content file changed; the only files added are the two reports.

Working: not applicable (no calculation touched).

## NEEDS OWNER / handoff questions
1. Are bare `igcse-*` images (MED list, about 1,560 lines) acceptable on non-Cambridge IGCSE pages when the picture is board-neutral, or must every one be re-generated per board? Only an eyes-on check can tell; lists are in AUDIT-C28-HITS.md.
2. Edexcel IGCSE Biology 4BI1 pages say "the term water potential is not required by Edexcel 4BI1" yet use it (A to rewrite or confirm against the Pearson spec, which I could not retrieve offline).
3. Captions "(Cambridge 9709 only.)" on AQA/Edexcel IAL maths inequalities pages (A decides: remove the caption tag or keep as cross-board note).
4. Ownership assumption: C = ESS and MYP design only. If the lead wants ESS counted with A or B, nothing changes (no hits).
