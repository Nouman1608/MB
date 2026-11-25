# Edexcel June 2026 grade boundaries: extract for owner decision

Status: NOT added to `src/data/academic/grade-thresholds.ts`. The current data model and page contract do not fit Edexcel (reasons below). No site code was changed.

## Sources (read 2026-11-25)

Folder: `C:\Users\nouma\OneDrive - Learners Academy\new topicals\Board PDFs`

- `Pearson Edexcel\International-GCSE-June-2026.pdf` and `Pearson-Edexcel-IGCSE-Grade-Boundaries-June-2026.pdf` are byte-identical (md5 8460befa4687a7feaee0bb4a95d8dd33).
- `Pearson Edexcel\International-A-level-June-2026.pdf` and `Pearson-Edexcel-IAL-Grade-Boundaries-June-2026.pdf` are byte-identical (md5 7c331ce83347e75ef7217cefeab9f29a).

The top-level copies therefore add nothing. The text below is `pdftotext -raw` output copied verbatim (`-layout` mode scrambles the IAL rows; `-raw` reads cleanly). Only subjects the site marks ACTIVE for Edexcel in `src/data/academic/matrix.ts` are reproduced: IGCSE accounting, biology, business, chemistry, economics, English language, English literature, history (4HI1), mathematics (4MA1 Mathematics A), physics; IAL accounting, biology, business, chemistry, economics, law, mathematics, physics. Urdu A Level is UK GCE 9UR0 and is not in the IAL document. Confirm the exact active list in `matrix.ts` before building from this.

## Why the current model does not fit

1. The `Grade` type is `A*..G` plus `a..e`. Edexcel IGCSE (9-1) boundaries are numeric grades 9 to 1 (PDF header `a* a b c d e f g u` over `9 8 7 6 5 4 3 2 1 U`). It needs a 9..1 grade scale and a new order list in `scripts/validate-grade-thresholds.mjs` (its check [5] would reject the keys).
2. 4MA1 Foundation and Higher publish different grade ranges in the same table; the PDF text does not state which grade each number belongs to, so the mapping is by column position and must be checked against the PDF page.
3. Edexcel IAL is modular: boundaries are per unit on two scales (Raw and UMS), plus "cash-in" (overall AS or A Level) in UMS only. The model has one `maxMark` and one `thresholds` map per row, with no raw/UMS scale or unit concept. Unit "A" variants (Unit 1 and Unit 1A) carry separate boundaries.
4. IAL UMS boundaries are fixed percentages (for example 80/70/60/50/40 of 100), so the useful learner figures are the raw unit boundaries, which are session-specific.
5. The page is Cambridge-specific: title, description, lead, footers and source text in `src/pages/grade-thresholds/index.astro` say "Cambridge", "flagship specifications" and component-numbered routes.
6. There is no board field to tell records apart.

## Model change needed (not done)

- Add a `board` field (default Cambridge) and make the page copy, title and lead board-aware.
- Add `Grade` members `'9'..'1'` and a third order list in the validator; keep A*-G and a-e.
- Add an optional `scale: 'raw' | 'ums'` on rows and allow the `combination` label to be a unit code and title.
- Decide whether IAL cash-in (UMS) is shown or omitted.
- Extend `scripts/test-negative-validation-suite.mjs` for the new scale.
- Owner choice: IGCSE overall boundaries only (closest to the current model once 9-1 exists), IAL unit raw boundaries as a second table type, or IAL not at all.

## Parsing notes

- IGCSE rows: code, title, `Subject`, max mark, boundaries from highest grade downward, then U (0). A row with fewer numbers than the 9..1 header does not publish the missing top grades. For 4MA1 Foundation (1F/2F) the row has 200 then 148 125 90 56 22 (grades 5 to 1); Higher (1H/2H) has 200 then 165 138 111 87 64 41 29 (grades 9 to 3). That is the reading of the printed columns (the `-layout` text puts them under those columns); verify against the PDF page.
- Paper codes ending R are the resit-series papers.
- Within IAL `-layout` text some Raw/UMS labels are shifted; the `-raw` text below is correct (for example Accounting Unit 1: Raw max 200, UMS max 300).

## IGCSE (Edexcel International GCSE 9-1, June 2026), verbatim -raw text

Header printed by the PDF: `Max Mark a* a b c d e f g u` over `Max Mark 9 8 7 6 5 4 3 2 1 U`.

### Accounting 4AC1

```
Accounting Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4AC1 Accounting Subject 150 133 121 109 98 87 76 57 39 21 0
Paper(s) 01 02
4AC1 Accounting Subject 150 131 116 101 91 81 72 53 34 16 0
Paper(s) 01R 02R
```

### Biology 4BI1

```
Biology Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4BI1 Biology Subject 180 142 127 112 97 82 67 55 43 32 0
Paper(s) 1B 2B
4BI1 Biology Subject 180 146 131 117 104 92 80 64 49 34 0
Paper(s) 1BR 2BR
```

### Business 4BS1

```
Business Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4BS1 Business Subject 160 133 124 115 103 92 81 70 59 48 0
Paper(s) 01 02
4BS1 Business Subject 160 137 129 122 110 98 87 72 58 44 0
Paper(s) 01R 02R
4BS1 Business Subject 160 133 124 115 103 92 81 70 59 48 0
Paper(s) 1C 2C
4BS1 Business Subject 160 133 124 115 103 92 81 70 59 48 0
Paper(s) 1C 02
4BS1 Business Subject 160 137 129 122 110 98 87 72 58 44 0
Paper(s) 1CR 2CR
```

### Chemistry 4CH1

```
Chemistry Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4CH1 Chemistry Subject 180 141 122 103 90 78 66 53 41 29 0
Paper(s) 1C 2C
4CH1 Chemistry Subject 180 150 130 111 99 88 77 61 46 31 0
Paper(s) 1CR 2CR
```

### Economics 4EC1

```
Economics Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4EC1 Economics Subject 160 122 112 102 93 85 77 64 51 38 0
Paper(s) 01 02
4EC1 Economics Subject 160 121 111 101 94 87 81 69 57 45 0
Paper(s) 01R 02R
4EC1 Economics Subject 160 122 112 102 93 85 77 64 51 38 0
Paper(s) 1C 2C
4EC1 Economics Subject 160 121 111 101 94 87 81 69 57 45 0
Paper(s) 1CR 2CR
```

### English Language A 4EA1 and B 4EB1

```
English Language A Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4EA1 English Language A Subject 150 113 105 98 88 78 69 51 34 17 0
Paper(s) 01 02
4EA1 English Language A Subject 150 123 115 108 97 87 77 59 41 24 0
Paper(s) 01 03
4EA1 English Language A Subject 150 116 108 100 91 82 73 54 35 17 0
Paper(s) 01R 02R
4EA1 English Language A Subject 150 126 118 110 100 90 80 61 42 24 0
Paper(s) 01R 03
4EA1 English Language A Subject 150 123 115 108 97 87 77 59 41 24 0
Paper(s) 01 03T
4EA1 English Language A Subject 150 126 118 110 100 90 80 61 42 24 0
Paper(s) 01R 03T
4EA1 English Language A Subject 150 113 105 98 88 78 69 51 34 17 0
Paper(s) 1C 2C
4EA1 English Language A Subject 150 113 105 98 88 78 69 51 34 17 0
Paper(s) 02 1C
4EA1 English Language A Subject 150 113 105 98 88 78 69 51 34 17 0
Paper(s) 01 2C
4EA1 English Language A Subject 150 123 115 108 97 87 77 59 41 24 0
Paper(s) 03 1C
4EA1 English Language A Subject 150 116 108 100 91 82 73 54 35 17 0
Paper(s) 1CR 2CR
4EA1 English Language A Subject 150 126 118 110 100 90 80 61 42 24 0
Paper(s) 03 1CR
4EA1 English Language A Subject 150 123 115 108 97 87 77 59 41 24 0
Paper(s) 03T 1C
English Language B Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4EB1 English Language B Subject 100 70 65 60 57 54 51 39 27 16 0
Paper(s) 01
4EB1 English Language B Subject 100 70 64 59 56 53 50 38 27 16 0
Paper(s) 01R
```

### English Literature 4ET1

```
English Literature Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4ET1 English Literature Subject 150 121 113 106 93 81 69 52 36 20 0
Paper(s) 01 02
4ET1 English Literature Subject 150 125 116 108 96 84 72 55 38 22 0
Paper(s) 01 03
4ET1 English Literature Subject 150 123 115 108 94 81 68 51 35 19 0
Paper(s) 01R 02R
4ET1 English Literature Subject 150 127 118 109 96 84 72 55 38 22 0
Paper(s) 01R 03
4ET1 English Literature Subject 150 125 116 108 96 84 72 55 38 22 0
Paper(s) 01 03T
4ET1 English Literature Subject 150 121 113 106 93 81 69 52 36 20 0
Paper(s) 1C 2C
4ET1 English Literature Subject 150 121 113 106 93 81 69 52 36 20 0
Paper(s) 02 1C
4ET1 English Literature Subject 150 121 113 106 93 81 69 52 36 20 0
Paper(s) 01 2C
4ET1 English Literature Subject 150 125 116 108 96 84 72 55 38 22 0
Paper(s) 03 1C
4ET1 English Literature Subject 150 123 115 108 94 81 68 51 35 19 0
Paper(s) 1CR 2CR
4ET1 English Literature Subject 150 127 118 109 96 84 72 55 38 22 0
Paper(s) 03 1CR
```

### History 4HI1

```
History Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4HI1 History Subject 120 99 91 83 74 66 58 43 28 14 0
Paper(s) 01 02
4HI1 History Subject 120 94 84 75 66 57 49 36 24 12 0
Paper(s) 01R 02R
4HI1 History Subject 120 99 91 83 74 66 58 43 28 14 0
Paper(s) 1C 2C
4HI1 History Subject 120 99 91 83 74 66 58 43 28 14 0
Paper(s) 1C 02
4HI1 History Subject 120 94 84 75 66 57 49 36 24 12 0
Paper(s) 1CR 2CR
```

### Mathematics A 4MA1

```
Mathematics A Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4MA1 Mathematics A (Foundation) Subject 200 148 125 90 56 22 0
Paper(s) 1F 2F
4MA1 Mathematics A (Higher) Subject 200 165 138 111 87 64 41 29 0
Paper(s) 1H 2H
4MA1 Mathematics A (Foundation) Subject 200 147 125 90 55 21 0
Paper(s) 1FR 2FR
4MA1 Mathematics A (Higher) Subject 200 171 145 119 94 69 45 33 0
Paper(s) 1HR 2HR
```

### Physics 4PH1

```
Physics Max Mark a* a b c d e f g u
Overall grade boundaries Max Mark 9 8 7 6 5 4 3 2 1 U
4PH1 Physics Subject 180 138 121 105 94 83 72 60 49 38 0
Paper(s) 1P 2P
4PH1 Physics Subject 180 134 116 99 88 77 67 56 45 35 0
Paper(s) 1PR 2PR
```

## International AS / A Level (June 2026), verbatim -raw text

Header printed by the PDF: AS units `Max Mark a b c d e u`; A2 units `a* a b c d e u` (a theoretical A* is published); each unit has a Raw row and a UMS row; "A"-suffixed units (1A, 2A and so on) are separate rows with their own boundaries; cash-in rows are UMS only.

### Accounting

```
Accounting
International AS unit grade boundaries Max Mark a b c d e u
WAC11 Unit 1: The Accounting System and Costing Raw 200 127 108 89 70 51 0
UMS 300 240 210 180 150 120 0
WAC11 Unit 1A: The Accounting System and Costing Raw 200 127 108 89 71 53 0
UMS 300 240 210 180 150 120 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WAC12 Unit 2: Corporate and Management Accounting Raw 200 181 163 143 124 105 86 0
UMS 300 270 240 210 180 150 120 0
WAC12 Unit 2A: Corporate and Management Accounting Raw 200 170 151 132 113 95 77 0
UMS 300 270 240 210 180 150 120 0
Cash-in grade boundaries Max Mark A B C D E U
XAC11 International AS Level Accounting UMS 300 240 210 180 150 120 0
YAC11 International A Level Accounting UMS 600 480 420 360 300 240 0
```

### Biology

```
Biology
International AS unit grade boundaries Max Mark a b c d e u
WBI11 Unit 1: Molecules, Diet, Transport and Health Raw 80 58 51 45 39 33 0
UMS 120 96 84 72 60 48 0
WBI11 Unit 1A: Molecules, Diet, Transport and Health Raw 80 58 51 45 39 33 0
UMS 120 96 84 72 60 48 0
WBI12 Unit 2: Cells, Development, Biodiversity and Conservation Raw 80 58 51 44 37 31 0
UMS 120 96 84 72 60 48 0
WBI12 Unit 2A: Cells, Development, Biodiversity and Conservation Raw 80 57 50 43 37 31 0
UMS 120 96 84 72 60 48 0
WBI13 Unit 3: Practical Skills in Biology I Raw 50 36 31 26 21 17 0
UMS 60 48 42 36 30 24 0
WBI13 Unit 3A: Practical Skills in Biology I Raw 50 38 33 28 24 20 0
UMS 60 48 42 36 30 24 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WBI14 Unit 4: Energy, Environment, Microbiology and Immunity Raw 90 62 56 50 44 38 32 0
UMS 120 108 96 84 72 60 48 0
WBI14 Unit 4A: Energy, Environment, Microbiology and Immunity Raw 90 63 57 51 45 39 33 0
UMS 120 108 96 84 72 60 48 0
WBI15
Unit 5: Respiration, Internal Environment, Coordination and
Gene Technology
Raw 90 72 64 56 48 40 33 0
UMS 120 108 96 84 72 60 48 0
WBI15
Unit 5A: Respiration, Internal Environment, Coordination
and Gene Technology
Raw 90 72 64 56 48 41 34 0
UMS 120 108 96 84 72 60 48 0
WBI16 Unit 6: Practical Skills in Biology II Raw 50 45 41 36 31 26 22 0
UMS 60 54 48 42 36 30 24 0
WBI16 Unit 6A: Practical Skills in Biology II Raw 50 45 40 35 30 25 21 0
UMS 60 54 48 42 36 30 24 0
Cash-in grade boundaries Max Mark A B C D E U
XBI11 International AS Level Biology UMS 300 240 210 180 150 120 0
YBI11 International A Level Biology UMS 600 480 420 360 300 240 0
```

### Business

```
Business
International AS unit grade boundaries Max Mark a b c d e u
WBS11 Unit 1: Marketing and People Raw 80 58 52 47 42 37 0
UMS 100 80 70 60 50 40 0
WBS12 Unit 2: Managing Business Activities Raw 80 58 52 46 41 36 0
UMS 100 80 70 60 50 40 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WBS13 Unit 3: Business Decisions And Strategy Raw 80 54 49 44 39 35 31 0
UMS 100 90 80 70 60 50 40 0
WBS14 Unit 4: Global Business Raw 80 63 56 49 43 37 31 0
UMS 100 90 80 70 60 50 40 0
Cash-in grade boundaries Max Mark A B C D E U
XBS11 International AS Level Business UMS 200 160 140 120 100 80 0
YBS11 International A Level Business UMS 400 320 280 240 200 160 0
```

### Chemistry

```
Chemistry
International AS unit grade boundaries Max Mark a b c d e u
WCH11 Unit 1: Structure, Bonding and Introducttion to Organic ChemistryRaw 80 59 52 45 38 31 0
UMS 120 96 84 72 60 48 0
WCH11 Unit 1A: Structure, Bonding and Introducttion to Organic ChemistRaw 80 60 52 44 37 30 0
UMS 120 96 84 72 60 48 0
WCH12
Unit 2: Energetics, Group Chemistry, Halogenoalkanes and
Alcohol
Raw 80 65 56 48 40 32 0
UMS 120 96 84 72 60 48 0
WCH12
Unit 2A: Energetics, Group Chemistry, Halogenoalkanes
and Alcohol
Raw 80 49 42 36 30 24 0
UMS 120 96 84 72 60 48 0
WCH13 Unit 3: Practical Skills in Chemistry I Raw 50 40 34 28 22 16 0
UMS 60 48 42 36 30 24 0
WCH13 Unit 3A: Practical Skills in Chemistry I Raw 50 31 27 23 19 16 0
UMS 60 48 42 36 30 24 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WCH14 Unit 4: Rates, Equilibria and Further Organic Chemistry Raw 90 74 66 58 50 42 34 0
UMS 120 108 96 84 72 60 48 0
WCH14 Unit 4A: Rates, Equilibria and Further Organic Chemistry Raw 90 69 61 53 45 38 31 0
UMS 120 108 96 84 72 60 48 0
WCH15 Unit 5: Transition Metals and Organic Nitrogen Chemistry Raw 90 77 68 59 51 43 35 0
UMS 120 108 96 84 72 60 48 0
WCH15 Unit 5A: Transition Metals and Organic Nitrogen Chemistry Raw 90 82 74 66 58 51 44 0
UMS 120 108 96 84 72 60 48 0
WCH16 Unit 6: Practical Skills in Chemistry II Raw 50 41 37 33 30 27 24 0
UMS 60 54 48 42 36 30 24 0
WCH16 Unit 6A: Practical Skills in Chemistry II Raw 50 36 32 28 25 22 19 0
UMS 60 54 48 42 36 30 24 0
Cash-in grade boundaries Max Mark A B C D E U
XCH11 International AS Level Chemistry UMS 300 240 210 180 150 120 0
YCH11 International A Level Chemistry UMS 600 480 420 360 300 240 0
```

### Economics

```
Economics
International AS unit grade boundaries Max Mark a b c d e u
WEC11 Unit 1: Markets in Action Raw 80 59 53 47 41 35 0
UMS 100 80 70 60 50 40 0
WEC11 Unit 1A: Markets in Action Raw 80 52 45 39 33 27 0
UMS 100 80 70 60 50 40 0
WEC12 Unit 2: Macroeconomic Performance and Policy Raw 80 53 47 41 36 31 0
UMS 100 80 70 60 50 40 0
WEC12 Unit 2A: Macroeconomic Performance and Policy Raw 80 52 45 39 33 27 0
UMS 100 80 70 60 50 40 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WEC13 Unit 3: Business Behaviour Raw 80 61 55 49 44 39 34 0
UMS 100 90 80 70 60 50 40 0
WEC13 Unit 3A: Business Behaviour Raw 80 61 55 49 43 37 32 0
UMS 100 90 80 70 60 50 40 0
WEC14 Unit 4: Developments in the Global Economy Raw 80 60 54 48 42 36 31 0
UMS 100 90 80 70 60 50 40 0
WEC14 Unit 4A: Developments in the Global Economy Raw 80 59 54 49 44 39 35 0
UMS 100 90 80 70 60 50 40 0
Cash-in grade boundaries Max Mark A B C D E U
XEC11 International AS Level Economics UMS 200 160 140 120 100 80 0
YEC11 International A Level Economics UMS 400 320 280 240 200 160 0
```

### Law

```
Law
International A Level grade boundaries Max Mark a* a b c d e u
YLA1 Law Subject 200 119 108 97 86 75 65 0
Paper(s) 01 02
```

### Mathematics

```
Mathematics
International AS unit grade boundaries Max Mark a b c d e u
WME01 Unit 1: Mechanics 1 Raw 75 57 50 43 36 29 0
UMS 100 80 70 60 50 40 0
WME01 Unit 1A: Mechanics 1 Raw 75 57 49 41 33 25 0
UMS 100 80 70 60 50 40 0
WST01 Unit 1: Statistics 1 Raw 75 65 56 47 39 31 0
UMS 100 80 70 60 50 40 0
WST01 Unit 1A: Statistics 1 Raw 75 55 46 37 28 20 0
UMS 100 80 70 60 50 40 0
WDM11 Unit 1: Decision Mathematics 1 Raw 75 58 51 44 38 32 0
UMS 100 80 70 60 50 40 0
WDM11 Unit 1A: Decision Mathematics 1 Raw 75 49 43 37 31 25 0
UMS 100 80 70 60 50 40 0
WMA11 Unit 1: Pure Mathematics 1 Raw 75 54 47 40 33 26 0
UMS 100 80 70 60 50 40 0
WMA11 Unit 1A: Pure Mathematics 1 Raw 75 46 40 34 28 22 0
UMS 100 80 70 60 50 40 0
WMA12 Unit 2: Pure Mathematics 2 Raw 75 48 42 36 31 26 0
UMS 100 80 70 60 50 40 0
WMA12 Unit 2A: Pure Mathematics 2 Raw 75 56 49 43 37 31 0
UMS 100 80 70 60 50 40 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WME02 Unit 2: Mechanics 2 Raw 75 58 52 46 40 34 28 0
UMS 100 90 80 70 60 50 40 0
WME02 Unit 2A: Mechanics 2 Raw 75 55 49 43 37 32 27 0
UMS 100 90 80 70 60 50 40 0
WST02 Unit 2: Statistics 2 Raw 75 68 61 53 46 39 32 0
UMS 100 90 80 70 60 50 40 0
WST02 Unit 2A: Statistics 2 Raw 75 67 59 50 41 33 25 0
UMS 100 90 80 70 60 50 40 0
WMA13 Unit 3: Pure Mathematics 3 Raw 75 63 57 51 45 39 33 0
UMS 100 90 80 70 60 50 40 0
WMA13 Unit 3A: Pure Mathematics 3 Raw 75 61 55 49 43 37 32 0
UMS 100 90 80 70 60 50 40 0
WMA14 Unit 4: Pure Mathematics 4 Raw 75 65 58 51 44 37 31 0
UMS 100 90 80 70 60 50 40 0
WMA14 Unit 4A: Pure Mathematics 4 Raw 75 66 58 50 42 34 27 0
UMS 100 90 80 70 60 50 40 0
Cash-in grade boundaries Max Mark A B C D E U
XMA01 International AS Level Mathematics UMS 300 240 210 180 150 120 0
YMA01 International A Level Mathematics UMS 600 480 420 360 300 240 0
```

### Physics

```
Physics
International AS unit grade boundaries Max Mark a b c d e u
WPH11 Unit 1: Mechanics and Materials Raw 80 60 53 46 39 32 0
UMS 120 96 84 72 60 48 0
WPH11 Unit 1A: Mechanics and Materials Raw 80 60 53 46 39 33 0
UMS 120 96 84 72 60 48 0
WPH12 Unit 2: Waves and Electricity Raw 80 61 54 47 40 33 0
UMS 120 96 84 72 60 48 0
WPH12 Unit 2A: Waves and Electricity Raw 80 55 49 43 37 31 0
UMS 120 96 84 72 60 48 0
WPH13 Unit 3: Practical Skills in Physics I Raw 50 35 31 27 23 19 0
UMS 60 48 42 36 30 24 0
WPH13 Unit 3A: Practical Skills in Physics I Raw 50 38 33 28 24 20 0
UMS 60 48 42 36 30 24 0
International A2 unit grade boundaries Max Mark a* a b c d e u
WPH14 Unit 4: Further Mechanics, Fields and Particles Raw 90 83 76 66 56 47 38 0
UMS 120 108 96 84 72 60 48 0
WPH14 Unit 4A: Further Mechanics, Fields and Particles Raw 90 80 71 62 53 45 37 0
UMS 120 108 96 84 72 60 48 0
WPH15 Unit 5: Thermodynamics, Radiation, Oscillations and Cosmology Raw 90 81 73 65 57 49 41 0
UMS 120 108 96 84 72 60 48 0
WPH15 Unit 5A: Thermodynamics, Radiation, Oscillations and Cosmolog Raw 90 78 70 62 54 46 39 0
UMS 120 108 96 84 72 60 48 0
WPH16 Unit 6: Practical Skills in Physics II Raw 50 43 38 33 28 24 20 0
UMS 60 54 48 42 36 30 24 0
WPH16 Unit 6A: Practical Skills in Physics II Raw 50 44 39 34 29 24 20 0
UMS 60 54 48 42 36 30 24 0
Cash-in grade boundaries Max Mark A B C D E U
XPH11 International AS Level Physics UMS 300 240 210 180 150 120 0
YPH11 International A Level Physics UMS 600 480 420 360 300 240 0
```

## Other board PDFs checked (reported only, nothing added)

- `AQA-GCSE-History-Command-Words.pdf`: AQA GCSE History 8145 command-word guide. Per word: definition, example question, example answer, example mark scheme, guidance. The page text contains a stray "Strictly confidential" line, worth checking before any republishing.
- `OCR-GCSE-Mathematics-Command-Words.pdf`: OCR "Command words (general usage)" table for Mathematics (Calculate/Find/Solve/Work out, Write down, Complete, Prove, Draw, Plot, Sketch, Show that and others), copyright OCR 2020, header POST-16.
- Site data: `src/data/academic/command-words.ts` holds Cambridge's generic glossary only. Its header comment (D-097) records that AQA, OCR and OxfordAQA publish per-subject command words and that the page discloses other boards are not yet sourced. There is no structure to add AQA or OCR words to; a per-board, per-subject structure would have to be designed first.
- `AQA\*.pdf` (five hash-named files): AS, A-level and GCSE June 2026 grade boundaries (published 13 August 2026), Level 3 Certificate Mathematical Studies 1350, Level 2 Certificate Further Mathematics 8365 (published 20 August 2026). Subject boundaries plus notional component boundaries.
- `OCR\760861-as-and-a-level-grade-boundaries-june-2026.pdf` and `OCR\760866-gcse-grade-boundaries-june-2026.pdf`: raw-mark boundaries per component and notional component (A Level a* to u, GCSE 9-1).
- None of these fit the Cambridge-shaped model without the changes above.
