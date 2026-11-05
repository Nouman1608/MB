# Flashcards: what a teacher should check first (D-438)

86 decks, 17,670 cards, written 5 Nov 2026 by the Marlbridge Academic Team, one agent per
batch of courses, each following `docs/content-review/flashcard-authoring.md` and checked by
`scripts/validate-flashcards.mjs`. **No deck has been reviewed as a deck by a subject teacher**;
each flashcard page says so until `deckReview` is filled in for that deck.

| Subject | Decks | Cards |
|---|---|---|
| Mathematics | 14 | 3,383 |
| Chemistry | 12 | 3,131 |
| Physics | 12 | 2,864 |
| Business | 14 | 2,305 |
| Economics | 14 | 2,301 |
| Biology | 12 | 2,275 |
| Accounting | 8 | 1,411 |

1,292 cards are marked upper tier (Extended, Higher, Extension, HL or MYP Extended); 2,647
restate a revision-notes page and name it as their source.

## 1. Possible errors on existing Marlbridge pages

Found while writing the cards. The cards avoid repeating the doubtful point; the pages
themselves have not been changed.

- **OxfordAQA A Level Biology 9610** — regulation-of-gene-expression-and-stem-cells notes say
  pluripotent cells are "found in the adult".
- **OCR A Level Business H431** — HR notes describe Lewin's work as "contingency theory listing
  leadership styles".
- **IB DP Economics** — fiscal policy notes say "six goals" but list five.
- **Cambridge A Level Physics 9702** — temperature notes say molecular kinetic energy is "exactly
  zero" at 0 K; the thermodynamics notes (and the syllabus) say minimum.
- **AQA A Level Physics 7408** — astrophysics notes give two inconsistent red-shift sign
  conventions.
- **OxfordAQA A Level Physics 9630** — Hooke's law defined "up to the elastic limit" (should be
  the limit of proportionality).
- **Cambridge A Level Chemistry 9701** — [Co(NH₃)₆]²⁺ colour differs between the transition
  elements notes and the 28.3 notes; N≡N bond enthalpy (944 kJ mol⁻¹) should be checked against
  the data booklet.
- **OxfordAQA A Level Chemistry 9620** — cisplatin: notes quote the specification as "a nitrogen
  atom on a protein".
- **Cambridge A Level Economics 9708** — pollution-permit worked example: the cut of 100 and 20
  tonnes does not follow from the numbers given.
- **Edexcel International GCSE Economics 4EC1** — YED 0–1 labelled "normal good" and above 1
  "luxury good" (every positive-YED good is normal); current account defined as goods and
  services only.
- **OxfordAQA A Level Business 9625/9725** — employee retention rate formula reads oddly.
- **OCR GCSE Business J204** — component-level revision notes disagree with the section notes
  (segmentation lists; "added value").
- **OxfordAQA International GCSE Accounting 9215** — ROCE uses profit from operations on the
  ratios page and profit for the year on the appraising page.
- **AQA AS Business 7137** — the 3.1.4 and 3.2.2 notes say they follow the old 7131/7132 text.

## 2. Gaps in the syllabus data (no subtopic for the cards to sit on)

- **OCR A Level Biology H420** — Module 2 lists only 2.1.1–2.1.3; enzymes, membranes and cell
  division (2.1.4–2.1.6) have no cards.
- **AQA GCSE Biology 8461** — Organisation lists only 4.2.1–4.2.2.2; blood, coronary heart
  disease and plant tissues have no cards.
- **AQA GCSE Economics 8136** — only three "How the economy works" subtopics; policies, trade and
  money have no cards.
- **OxfordAQA International GCSE Accounting 9215** — the topic 2–5 subtopics have empty numbers,
  so card ids are `-101`, `-201`… (they change if the subtopics are numbered).
- **Topics with no subtopics** are covered by 8–16 topic-level cards, which is thin for broad
  topics: AQA A Level Biology 7402 topics 3–8, OCR A Level Biology H420 modules 3–6, Edexcel IAL
  Biology YBI11, AQA GCSE Biology 8461 homeostasis and infection, OCR GCSE Economics J205
  topics 3–4, AQA GCSE Business 8132 topics 3–6, Cambridge O Level Physics 5054 topics 2–6.
  Itemising those subtopics in `syllabus-topics.ts` would let the decks grow.

## 3. Cards written without a Marlbridge page behind them

Standard syllabus content, written conservatively; check these first in each deck.

- Edexcel IAL Biology YBI11 cards 2-7 to 2-16 (proteins, enzymes, DNA, protein synthesis,
  mutation, cystic fibrosis).
- OxfordAQA A Level Biology 9610 topic 1 (about half its cards).
- Edexcel IAL Economics YEC11 2.3.1 (inflation and unemployment measures).
- IB DP Economics 3.1–3.3 (macro measures).
- OCR A Level Physics H556 2.3 Nature of quantities.
- Smaller numbers of textbook-standard cards in 9702, 9701, 7408, 0625, 4PH1, 9203, 0580, 9709,
  7357 and the IB Mathematics decks, listed in each agent's notes below.

## 4. Tier decisions to confirm

- **Cambridge IGCSE Mathematics 0580** — 2.11-2 (sketching ax + by = c) marked Extended under
  E3.2; 5.5-5 hemisphere marked Extended.
- **Cambridge IGCSE Physics 0625** — the pages disagree on terminal velocity, optical fibres and
  efficiency/Sankey (all marked Extended).
- **OxfordAQA International GCSE Mathematics 9260** — uses its own Core/Extension scheme;
  factorising ax² + bx + c and the tangent theorems marked Extension.
- **AQA GCSE Mathematics 8300** — cards 3.2.2-9 and 6-10 mix tiers inside an unmarked card.
- **OCR GCSE Physics J249** — motor effect and F = BIl unmarked (both tiers per notes).
- **IB DP Physics** — orbital speed √(GM/r) marked HL only (may be SL).
- **IB DP Biology** — fundamental vs realised niche and competitive exclusion left out (possibly
  AHL).
- IB Physics, Chemistry, Biology, Economics and Business mark HL-only content with "(HL only)"
  on the card back, because those syllabus records are not tiered.

## 5. Values that should match the board's data booklet or formula sheet

IR ranges and Haber conditions (9620, H432, 7405, 9701); electrode potentials and indicator
ranges (9620); physical constants such as the parsec (7408, H556); g = 10 (9709, J249) or 9.8
(H240); ROCE definitions (4AC1, 9215, 9615, 7127, 9706); accounting ratio and HR formulas that
the specifications do not print (0264, 9609, 7132).

## 6. Large subtopics that could be trimmed

Most subtopics have 3–6 cards. Dense ones go up to 19 (9260 3.2.2), 17 (J249 P2.2, YPH11 2.3,
9260 3.3.1) and 16 (H556 5.5).
