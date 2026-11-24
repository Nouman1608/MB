# Figure regeneration: Cambridge-origin pictures on other boards' pages

Replacement pictures for figures drawn for Cambridge courses that are reused on AQA, OCR, OxfordAQA, Edexcel and IB pages and carry Cambridge-only or board-specific marks inside the picture. **No page has been edited and nothing has been uploaded.** The owner reviews, uploads, and then a separate step updates the pages from `mapping.csv`.

## Result

| Status | Images |
|---|---|
| regenerated | 326 |
| neutral-ok (no board mark in the picture; keeps its picture) | 329 |
| owner-review | 4 |

`mapping.csv` has 326 rows covering 2406 page uses. 75 new sets in `sets/` (webp 1800 px wide, `svg/`, `figures.html`, `figures.json`); sources in `scripts/topic-figures/lessons/<set>.mjs`.

The six priority figures (pages currently have the picture removed):

| Old | New |
|---|---|
| igcse-biology-human-nutrition--08-villus | biology-transport-in-cells--01-villus |
| igcse-biology-movement-into-and-out-of-cells--03-osmosis | biology-transport-in-cells--02-osmosis |
| igcse-biology-movement-into-and-out-of-cells--06-active-transport | biology-transport-in-cells--03-active-transport |
| ib-dp-economics-demand-supply-equilibrium--05-ib-allocative-efficiency | economics-efficiency-and-market-failure--01-allocative-efficiency |
| a-level-economics-government-microeconomic-intervention--08-monopoly-welfare-loss | economics-efficiency-and-market-failure--02-monopoly-welfare-loss |
| cambridge-a-level-economics-efficiency-market-failure-and-externalities--03-bypass-cba-flip | economics-efficiency-and-market-failure--03-bypass-cost-benefit |

## Files

- `progress.csv`: every image (old_image, status, new_image, notes).
- `mapping.csv`: old_image, new_image, pages_to_update.
- `alt-changes.csv`: the 35 replacements whose alt text or caption must change on the page with the picture (a removed board/tier phrase).

## How the list was built

The manifest was rebuilt from the current site: images whose file name carries a Cambridge code or starts `cambridge-igcse-` / `igcse-`, used on any page whose boards exclude Cambridge. That gives 655 images on 1,062 pages (the owner's list had 463 on 862, made before revision-notes pages took copies of their lessons' figures). Every image was then checked by eye, because an automatic text scan missed more than half of the marks (white text on dark-gold pills, light "All boards" pills).

## Owner review

- `a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp`: stage pill 'A2 content' (not a board/tier); parametric diff is A2 on AQA/OCR/OxfordAQA/IAL but image also sits on AS-level differentiation pages
- `a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp`: MISSED BY SCAN; 'A2 content' stage pill names no board, but the AS/A2 split fits Cambridge/IAL/OxfordAQA, not the linear AQA/OCR pages it also sits on (15 pages)
- `igcse-economics-the-allocation-of-resources--01-economic-systems.webp`: no board name, but 'Contrast' pill implies planned economy is off-syllabus (Cambridge framing); OCR A-level pages using it do teach command economies
- `a-level-biology-9700-transport-in-plants--03-root-water-pathways.webp`: only 'water potential'/psi; both pages are OxfordAQA A-level, where water potential is on spec (rule targets AQA GCSE), so likely fine there

Also decide: "A2 content" and "A Level only (not AS)" pills were treated as marks and removed (they follow the Cambridge AS/A2 split and the figures are also used on linear AQA and OCR A level pages).

## Notes from the redraws

- mathematics-integration--01: its alt ends "This is the lesson's worked example 5." That holds only on the Cambridge 9709 page; drop the sentence on the AQA and OxfordAQA pages when placing it.
- mathematics-cumulative-frequency-diagrams--06, biology-selection-and-evolution--06 (genetic drift) and biology-factors-that-affect-enzyme-action--06/08: curves redrawn to the stated values (median 26, IQR about 11; Vmax/Km); the exact old curve shape was not recoverable, so the line itself is new.
- biology-selection-and-evolution--07: panel headings now "(allele A)" / "(rare allele)", subtitle "gold = the allele followed".
- biology-homeostasis--08: G-protein step kept (the AQA and Edexcel pages describe it); only the "Cambridge only" pill removed.
- Content kept where a board pill used to limit it (the maths/biology is correct for any board; whether the topic belongs on each board's page is a separate question): biology-immunity--08 herd immunity keeps 1 - 1/R0 = 83.3% (was "OCR only"); biology-immunity--07 HIV keeps the "drug target" tags (was "OxfordAQA only"); mathematics-mechanics--04 tow keeps the rigid-bar braking panel (was "Cambridge 9709, OxfordAQA").
- biology-photosynthesis--06 Calvin cycle: "Edexcel name for TP: GALP" now reads "TP is also called GALP".
- mathematics-mensuration--03 arc and sector: tier pills became headings "Angle 90°: a quarter circle" / "Any angle: the same method"; alt updated.
- biology-transport-in-mammals--06-cardiac-cycle: the OLD picture disagreed with the page (0.75 s cycle, times 0.05/0.15/...; page table is a 0.80 s cycle, 0.05/0.12/0.25/0.45/0.60, ventricle 16.0 v aorta 15.4). The new graph follows the page table. Its "75 beats/min" label is derived (60 / 0.80), not stated on the page: drop it if derived numbers are unwanted.
- biology-transport-in-mammals--04-oxygen-dissociation keeps the fetal haemoglobin curve, labelled neutrally (was "Fetal Hb (Edexcel)"); it is extra detail on the OxfordAQA page, not an error.
- biology-the-mitotic-cell-cycle--07 non-disjunction keeps the meiosis I content (was "AQA only"); correct for the AQA, OxfordAQA and Edexcel IAL pages that use it.
- biology-movement-into-and-out-of-cells--04-root-water-gradient: "higher/lower water potential" replaced by "more dilute / more concentrated" (GCSE wording).
