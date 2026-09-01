# 0580 Mathematics / 0625 Physics -- full examiner-report evidence review, 2 September 2026

Programme: Search Intelligence & Demand-Led Growth (WS4). This document
**supersedes** `docs/growth/0580-0625-examiner-evidence-2026-09-01.md`, which
sampled roughly 400 of the two reports' combined ~4,000 lines. This pass reads
the two source PDFs' extracted text in full, end to end, and extracts a
traceable, per-question record rather than a curated top-N list.

## Sources and evidence classification

- **0580 Mathematics, June 2024 series** -- Cambridge International Principal
  Examiner Report for Teachers:
  `https://www.cambridgeinternational.org/Images/569918-june-2024-examiner-report.pdf`
- **0625 Physics, June 2024 series** -- Cambridge International Principal
  Examiner Report for Teachers:
  `https://www.cambridgeinternational.org/Images/570003-june-2024-examiner-report.pdf`

Both classify as **EXAMINER_REPORT** per the programme's evidence taxonomy --
genuine Principal Examiner commentary on actual candidate performance, not a
mark scheme, specimen paper, syllabus, or learner guide. Only this evidence
class supports a "candidates commonly..." style claim; every item below is
sourced from this class.

Every issue below is an **original paraphrase** of the report's commentary,
not a quotation. No text is copied from the source PDF. Where a claim is
applied to Marlbridge content (Part D), it is cited as "Cambridge
International, [subject] [code] Principal Examiner Report, June 2024 series,
Paper [code]" -- the same citation convention the site already uses for
official-syllabus references (e.g. the "Official syllabus" section on
`igcse-mathematics-number.md`), adapted for an examiner report instead of a
syllabus.

## Coverage -- read in full, and what the source text does not contain

This review reads the **entire extracted text** of both PDFs, not a sample:

- **0580**: all 2,108 lines, covering Papers 0580/11, /12, /13 (Paper 1,
  Core), /21, /22, /23 (Paper 2, Extended), and /31, /32 (Paper 3, Core) --
  every paper variant actually present in the fetched text. The extraction
  cuts off mid-sentence at line 2108, partway through Paper 0580/32's general
  comments and **before** its "Comments on specific questions" section. Paper
  0580/33 and Papers 0580/41/42/43 (Paper 4, Extended) are **not present** in
  the fetched text at all -- the web fetch that produced this local copy did
  not capture them, not because they were skipped. That is stated here
  honestly rather than fabricated: **no claims are made below about Papers
  0580/33, 41, 42 or 43** because no evidence about them was read.
- **0625**: all 1,887 lines, covering Papers 0625/11, /12, /13 (Multiple
  Choice, Core), /21, /22, /23 (Multiple Choice, Extended), /31, /32, /33
  (Paper 3, Theory Core), /41, /42, /43 (Paper 4, Theory Extended), and /51,
  /52 (Practical Test) -- again, every paper variant present in the fetched
  text. The extraction cuts off mid-sentence at line 1887, partway through
  Paper 0625/52 Question 1(b). Paper 0625/53 (Practical Test) and Papers
  0625/61/62/63 (Alternative to Practical) are **not present** in the fetched
  text. **No claims are made below about Papers 0625/53, 61, 62 or 63.**

## How to read the tables

Each row is one question (or lettered part) where the report records a
specific, attributable candidate-performance pattern -- an error, a
misconception, a technique gap, or a mark lost to presentation/precision.
Rows are omitted only where the report states a question was answered well
with no error pattern worth recording (each paper's table ends with a note
listing which question numbers those were, so the omission is visible, not
silent). "Resource" references files under `src/content/resources/`;
"Action" is one of:

- **apply** -- a genuine, recurring, clean match to an existing Marlbridge
  resource; a small content addition is warranted (see Part D).
- **already covered** -- the resource's existing prose already states this
  point, so no edit is needed.
- **not applicable** -- informational only; too narrow, too paper-mechanical
  (e.g. "some candidates omitted the % sign"), or not something a revision
  resource can meaningfully pre-empt.
- **no resource yet** -- the topic has no matching Marlbridge 0580/0625
  resource at all (see the content inventory below); out of scope to create
  one in this pass per the standing instruction not to add new page types.

## Existing Marlbridge 0580/0625 content inventory (checked against `src/content/`)

**Cambridge 0580 Mathematics** (`boards: ["cambridge"]`, `syllabusCodes:
["0580"]`) -- nine syllabus topics, of which content exists for:

| Topic | Study guide | Revision notes | Practice |
|---|---|---|---|
| Number (incl. Sets, C1.2/E1.2) | `igcse-mathematics-number.md` | `igcse-mathematics-number-revision-notes.md` | `igcse-mathematics-number-practice.md` |
| Algebra and graphs | `igcse-mathematics-algebra-and-graphs.md` | `igcse-mathematics-algebra-and-graphs-revision-notes.md` | `igcse-mathematics-algebra-and-graphs-practice.md` |
| Coordinate geometry | -- | -- | `igcse-mathematics-coordinate-geometry-practice.md` |
| Geometry | -- | -- | `igcse-mathematics-geometry-practice.md` |
| Mensuration | -- | -- | `igcse-mathematics-mensuration-practice.md` |
| Trigonometry | -- | -- | `igcse-mathematics-trigonometry-practice.md` |
| Transformations and vectors | -- | -- | `igcse-mathematics-transformations-and-vectors-practice.md` |
| Probability | -- | -- | `igcse-mathematics-probability-practice.md` |
| Statistics | -- | -- | `igcse-mathematics-statistics-practice.md` |

(Note, not part of this workstream: five of the nine 0580 topics have a
practice page but no study guide or revision notes -- a pre-existing content
gap, out of scope here.)

**Cambridge 0625 Physics** (`boards: ["cambridge"]`, `syllabusCodes:
["0625"]`) -- six syllabus topics, of which content exists for only three:

| Topic | Study guide | Revision notes | Practice |
|---|---|---|---|
| Motion, forces and energy | `igcse-physics-motion-forces-and-energy.md` | `igcse-physics-motion-forces-and-energy-revision-notes.md` | `igcse-physics-motion-forces-and-energy-practice.md` |
| Thermal physics | `igcse-physics-thermal-physics.md` | `igcse-physics-thermal-physics-revision-notes.md` | `igcse-physics-thermal-physics-practice.md` |
| Waves (incl. light, EM spectrum, sound) | `igcse-physics-waves.md` | -- | -- |
| Electricity and magnetism | -- | -- | -- |
| Nuclear physics | -- | -- | -- |
| Space physics | -- | -- | -- |

**This gap matters a great deal for Part A/B below**: roughly half of the
0625 evidence collected -- everything on circuits, transformers, radioactivity
and nuclide equations, and the whole of the Universe/space-physics topic --
has **no matching Marlbridge Cambridge-0625 resource at all**, so it is
necessarily "no resource yet," not "apply," however strong the pattern.

---

# Part A -- 0580 Mathematics

## Paper 0580/11 (Paper 1, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(c) | NUM -- rounding | Rounding to the nearest hundred/thousand confused with truncation; some dropped place-value zeros entirely. | NUM-PQ / NUM-RN | already covered |
| 2 | MENS/NUM -- units | Gave a length in cm when mm was required -- unit-scale slip, not a method error. | MENS-PQ | not applicable |
| 4 | NUM -- factors | Common wrong answer (4 instead of 2) suggests guessing rather than a systematic HCF method. | NUM-PQ | not applicable |
| 5 | MENS -- perimeter vs area | No working shown for many scripts; some conflated perimeter with area, or just counted sides. | MENS-PQ | not applicable |
| 6(a) | NUM -- order of operations | Working left-to-right instead of BIDMAS/PENDMAS, e.g. treating `28 - 8 / 2` as `(28 - 8) / 2`. | NUM-PQ / NUM-RN | **apply** |
| 6(b) | NUM -- fractions | Left an answer as an unsimplified fraction (10/8 instead of 5/4). | NUM-PQ | already covered |
| 7 | NUM -- directed numbers | A minority still mishandled signs on subtracting negatives. | NUM-RN | not applicable |
| 9 | COORD -- coordinates | Locating a point by counting was more error-prone than reading coordinates directly; off-by-one/two errors. | COORD-PQ | not applicable |
| 10 | MENS -- volume of a prism (problem-solving) | Candidates found base area correctly, then treated total surface area as if it were the volume, producing a wrong height. | MENS-PQ | **apply** |
| 11(a) | PROB -- complement | Many did not see `P(not wooden) = 1 - 0.6`; some subtracted 0.6 from 100 as if it were already a percentage. | PROB-PQ | already covered (extend, see Part D) |
| 12 | ALG -- nth term vs simplification | Candidates treated an nth-term "find the 5th term" question as algebraic simplification instead of substitution, producing algebraic nonsense like `56n`. | ALG-PQ | not applicable |
| 13 | COORD/ALG -- y-intercept | Few candidates used "the y-intercept occurs where x = 0" to read `c` directly from `y = mx + c`. | COORD-PQ | already covered |
| 14 | NUM -- significant figures | Instruction to round each number to 1 s.f. before calculating was ignored; candidates rounded only the final answer. | NUM-PQ / NUM-RN | **apply** |
| 15 | ALG -- factorising | Candidates factorised out only part of the common factor (e.g. `2` instead of `4x`), losing marks for an incomplete factorisation. | ALG-PQ / ALG-RN | **apply** |
| 16 | MENS/ALG -- perimeter equation | Formed inconsistent equations from a rectangle's perimeter; some multiplied the two side-expressions instead of adding. | MENS-PQ | not applicable |
| 17(a) | GEOM -- circle vocabulary | Vague or wrong circle-terminology answers (chord, segment, tangent used interchangeably; "ratio" offered for "radius"). | GEOM-PQ | not applicable |
| 17(b) | GEOM -- tangent construction | Most could not draw a correct tangent to a circle at a given point; arcs/chords/diameters drawn instead. | GEOM-PQ | not applicable |
| 18 | NUM -- HCF with a constraint | Candidates found a common factor (e.g. the LCM, or an even HCF) without checking the stated constraint (odd). | NUM-PQ | not applicable |
| 19(a)-(b) | NUM -- roots and indices, calculator use | Confusing square root with cube root; ignoring brackets/indices when keying into a calculator. | NUM-PQ | not applicable |
| 20(b) | NUM -- negative indices | Sign errors on negative-index evaluation (should be -5, gave 5). | NUM-RN | already covered (extend, see Part D) |
| 21 | NUM -- standard form | Calculator-display answers left un-converted to formal standard form; the conversion step was frequently skipped or shown without working. | NUM-PQ / NUM-RN | **apply** |
| 22 | ALG -- simultaneous equations | Addition used where subtraction was needed to eliminate a variable, or vice versa; little working shown. | ALG-PQ | already covered (extend, see Part D) |
| 23 | NUM -- unit conversion (compound) | Candidates converted km to m but frequently omitted converting hours to seconds in a km/h to m/s conversion. | NUM-PQ | **apply** |
| 25(a)-(b) | MENS -- semicircle area/arc, compound perimeter | Forgetting to halve a full-circle area/circumference for a semicircle; confusing the circle radius with the diameter mid-calculation. | MENS-PQ | already covered (extend, see Part D) |

Qs recorded as answered well with no notable pattern: 1(a), 1(b), 3(a), 8.

## Paper 0580/12 (Paper 1, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 2(b) | MENS -- units | Line-length answer left in cm rather than the mm asked for, or x10 applied incorrectly. | MENS-PQ | not applicable |
| 2(d) | GEOM -- construction | "Perpendicular" constructions drawn several degrees off 90 degrees, or confused with bisecting/vertical lines. | GEOM-PQ | not applicable |
| 3 | NUM -- reciprocals | Candidates wrote the reciprocal as an expression (1/0.4) instead of evaluating it as a value, and some left it as a non-simplified improper fraction. | NUM-PQ | **apply** |
| 4 | NUM -- standard form / percentage equivalence | Mismatched a standard-form value with the wrong percentage in a matching-style question -- a copying-across error, not a method error. | NUM-PQ | not applicable |
| 6 | NUM -- directed numbers | Straightforward negative-number subtraction (25 - (-4)) still produced a wrong-sign answer for a significant minority. | NUM-RN | not applicable |
| 8 | NUM -- multi-step percentage/money problem | Candidates found a quarter of the total correctly but then could not use it in the next step; a common error subtracted from the wrong base figure. | NUM-PQ | already covered (extend, see Part D) |
| 9(b) | STAT -- median from a table | Candidates who located the middle value(s) correctly in a stem-and-leaf diagram sometimes reported only the leaf digit, omitting the stem (e.g. giving "6" instead of "46"). | STAT-PQ | **apply** |
| 10 | VEC -- vector subtraction | Sign error on the second (y) component of a vector subtraction was the dominant error. | VEC-PQ | not applicable |
| 11(b) | ALG -- nth term of a decreasing sequence | Candidates found the common difference but frequently dropped its negative sign in the nth-term formula. | ALG-PQ | **apply** |
| 12 | NUM -- significant figures vs decimal places | Confusing "correct to 2 s.f." with "correct to 2 d.p." (a leading-zero miscount), and adding trailing zeros that invalidated the answer. | NUM-PQ / NUM-RN | **apply** |
| 13 | PROB -- Venn diagram shading | The most common wrong shading was the intersection (A n B) when a different region was asked for -- likely from over-familiarity with the intersection as "the" Venn answer. | PROB-PQ | **apply** |
| 14 | ALG -- factorising with multiple common factors | Only partial credit typical; extracting the full common factor (a coefficient and a variable together) from an expression with several possible factors (2, 5, 10, x) proved hard. | ALG-PQ / ALG-RN | folds into general factorising addition |
| 15 | STAT -- correlation | A large proportion did not understand what "correlation" describes at all, defaulting to "positive" regardless of the data shown. | STAT-PQ | not applicable |
| 16 | MENS -- volume/surface area of a cylinder (non-calculator) | Struggled to leave an answer in terms of pi when a non-exact numerical shortcut was used instead; and in the follow-up part, most did not connect a given quantity back to an earlier part of the same question. | MENS-PQ | not applicable |
| 17 | NUM -- standard form | Main misconception: writing two digits before the decimal point (e.g. 17.4 x 10^4) instead of normalising to one. | NUM-PQ / NUM-RN | already covered |
| 19 | NUM -- fraction division, mixed numbers | Final answer left as an improper fraction instead of the mixed number the question required; some inverted the wrong fraction (or both) when dividing. | NUM-PQ | **apply** |
| 20 | ALG -- expanding brackets (three-term products) | Sign errors when multiplying directed numbers inside a three-term expansion, most often losing a mark on the constant term. | ALG-PQ / ALG-RN | already covered (extend, see Part D) |
| 22 | NUM -- bounds with mixed units | A bounds question mixing metres and centimetres was made harder by the unit mismatch; working consistently in one unit before converting back was the successful strategy. | NUM-PQ / NUM-RN | **apply** |
| 23 | PROB/NUM -- Venn diagram with a universal-set constraint | The most common lost mark was omitting an element that belonged only to the universal set (not in either subset) -- and placing an out-of-range element in the diagram regardless of the stated constraint. | PROB-PQ | **apply** (folds into Venn addition) |
| 25(a) | GEOM/TRIG -- "show that," Pythagoras | In "show that" questions, most candidates who understood the method still lost a mark by not showing one extra decimal place of working beyond the given answer. | GEOM-PQ / TRIG-PQ | **apply** |
| 25(b) | TRIG -- using a given length in a follow-up part | Candidates frequently did not connect a "show that" answer from part (a) to the trigonometric calculation required in part (b), and commonly left the equation unrearranged (CD = 13.3 x sin48 instead of dividing). | TRIG-PQ | already covered (extend, see Part D) |

Qs recorded as answered well with no notable pattern: 1, 5(a), 5(b), 7, 21.

## Paper 0580/13 (Paper 1, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 3 | ALG -- collecting like terms | Only one of two unlike-term groups simplified; the other left unsimplified. | ALG-PQ | not applicable |
| 4(c) | NUM -- decimal place value | Confusion about where the decimal point should land after a calculation, producing answers out by a power of ten. | NUM-PQ | already covered |
| 5(a) | GEOM -- symmetry | The horizontal diagonal of a kite was wrongly assumed to be a line of symmetry (kites have exactly one line of symmetry, along the other diagonal). | GEOM-PQ | **apply** |
| 6 | NUM -- ordering values (fractions/decimals) | 2/5 was frequently mis-converted to 0.4 and placed in the wrong position when ordering; converting all values to a common form first was the successful strategy. | NUM-PQ | already covered (extend, see Part D) |
| 8 | NUM -- percentage of an amount, complement | 3/20 given instead of the required complement; 1 - 0.0015 arithmetic errors. | NUM-PQ | already covered (extend, see Part D) |
| 9(a) | NUM -- directed number difference | 18 - (-5) calculated as 18 - 5 = 13 instead of 23. | NUM-RN | not applicable |
| 11 | GEOM -- angle in a polygon/triangle | Errors dividing an angle total by the wrong number of equal angles (halving when it shouldn't be halved). | GEOM-PQ | not applicable |
| 12 | MENS -- nets | A minority drew four faces of one size instead of the correct mix of face sizes for the solid; a few attempted a 3D sketch instead of a net. | MENS-PQ | not applicable |
| 13 | ALG -- factorising with more than one variable | Candidates frequently removed only part of the common factor, or combined unlike terms incorrectly. | ALG-PQ / ALG-RN | folds into general factorising addition |
| 14 | NUM -- unit conversion (cm to km) | The specific conversion 100 000 cm = 1 km was a recorded weak spot; many did not attempt the conversion at all. | NUM-PQ | **apply** |
| 15 | NUM -- fraction subtraction with unlike denominators | Method generally sound; a minority tried to subtract numerators and denominators separately without finding a common denominator. | NUM-PQ | already covered |
| 16 | NUM -- percentage change (wrong base) | Divided by the new (larger) value instead of the original when finding a percentage change; some inverted the calculation entirely. | NUM-PQ / NUM-RN | already covered |
| 17 | TRIG -- choosing sin/cos/tan | Used sine or tangent where cosine was the correct ratio for the given sides; one candidate route added an unnecessary Pythagoras step after an already-correct trig calculation. | TRIG-PQ | **apply** |
| 18 | NUM -- bounds | Where the lower bound was correctly found, the upper bound was sometimes given for the wrong quantity (an internally inconsistent pair). | NUM-PQ / NUM-RN | already covered |
| 19 | ALG -- simultaneous equations | Subtracting the two equations when addition was required (a sign-of-elimination error), producing an answer with the correct magnitude but wrong sign. | ALG-PQ | folds into elimination-sign-trap addition |
| 20 | GEOM -- bearings | Candidates measured the wrong angle from a bearings diagram, most often confusing the required bearing with the diagram's marked angle at a different point. | GEOM-PQ | see Part D (bearings addition) |
| 21(a)(i)-(ii) | NUM -- sets, square/cube numbers, notation | Confusion between square and cube numbers; set notation (n(...)) not understood, with candidates listing raw numbers instead of counting elements. | NUM-PQ / PROB-PQ | folds into Venn/set-notation addition |
| 21(b) | PROB -- Venn shading | Both circles shaded fully instead of the specific requested region. | PROB-PQ | folds into Venn addition |
| 22(a)-(b) | NUM -- standard form (small and large numbers) | Sign of the index reversed for small numbers; an intermediate whole-number answer left un-converted to standard form. | NUM-PQ / NUM-RN | already covered |
| 23 | MENS -- composite solid, unit consistency | Volume of a sphere/cylinder question undermined mainly by inconsistent units between the two solids, and using diameter instead of radius in the cylinder volume formula. | MENS-PQ | **apply** |

Qs recorded as answered well with no notable pattern: 1, 2, 7, 10(a).

## Paper 0580/21 (Paper 2, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1 | COORD -- completing a parallelogram | Some drew a triangle instead of a parallelogram, or placed the answer point in the wrong quadrant despite correct individual coordinate values. | COORD-PQ | not applicable |
| 3(b) | ALG -- quadratic sequences, inequalities | The common wrong answer gave the term number of the first qualifying value rather than the term itself. | ALG-PQ | **apply** |
| 4 | NUM -- HCF with a constraint | As with 0580/11 Q18: finding a common factor without checking the stated constraint (odd). | NUM-PQ | folds into constrained-HCF addition |
| 6 | GEOM -- angles in a kite / polygon combination | Miscounting how many congruent angles meet at a point in a compound polygon figure; a persistent misconception that kite angles sum to 180. | GEOM-PQ | not applicable |
| 7(a)-(b) | MENS -- compound shape (triangle + semicircle) | Forgetting to halve a full circle's area/circumference for the semicircle portion; using the diameter where the radius was needed; premature rounding across a multi-stage perimeter calculation. | MENS-PQ | **apply** |
| 9 | ALG -- compound percentage decrease (depreciation) | Applying simple (linear) depreciation instead of compound depreciation. | NUM-PQ / ALG-PQ | **apply** |
| 10 | NUM -- compound interest, rearranging for the rate | About half succeeded; common wrong methods used simple, linear reasoning instead of the compound interest formula rearranged for the rate. | NUM-PQ | already covered (extend, see Part D) |
| 11 | ALG -- inequality regions | A minority fully correct; recurring errors used = instead of an inequality sign, reversed x/y on horizontal/vertical boundary lines, or described the region by listing vertex coordinates. | ALG-PQ | **apply** |
| 12 | ALG -- simultaneous equations, algebraic manipulation | Sign and multiplication errors when scaling one equation to equate coefficients, particularly with a fractional coefficient. | ALG-PQ | already covered (extend, see Part D) |
| 13 | GEOM -- cyclic quadrilateral | Most common wrong strategy: applying the general quadrilateral angle sum (360) instead of the cyclic-quadrilateral-specific rule (opposite angles sum to 180). | GEOM-PQ | **apply** |
| 14 | MENS -- sector area (major sector) | Many stopped after finding the whole circle's area with no further step; others found the minor sector correctly but did not know what to subtract. | MENS-PQ | **apply** |
| 15 | NUM -- recurring decimal to fraction | A large minority misread the recurring-decimal notation itself; the standard method worked once the recurring digits were correctly identified. | NUM-PQ / NUM-RN | **apply** |
| 16(b) | PROB/NUM -- set notation n(...) | One of the weakest-answered items in the paper: many could shade a described Venn region but could not evaluate a numerical set-cardinality expression. | PROB-PQ | folds into Venn/set-notation addition |
| 18 | ALG -- solving an equation graphically | Many attempted an algebraic (cubic) solution instead of the requested graphical method; where a line was drawn, it often had the wrong gradient. | ALG-PQ | **apply** |
| 19(a) | ALG -- direct proportion | Candidates who omitted the constant k reached a common wrong answer. | ALG-PQ | already covered (extend, see Part D) |
| 19(b) | ALG -- effect of squaring on a proportional relationship | Vague answers without the specific multiplier were common; some assumed direct proportion meant an increase. | ALG-PQ | not applicable |
| 20 | MENS -- linear scale factor from a volume ratio | About half correctly took the cube root of the volume ratio; common errors used the square root instead. | MENS-PQ | **apply** |
| 21 | ALG -- simultaneous linear/quadratic equations | Sign errors expanding brackets after substitution; the middle method mark for showing the quadratic-solving method was frequently missed even when the final answer was right. | ALG-PQ | already covered (extend, see Part D) |
| 22(b)(ii) | ALG -- trig graph solving (sin x = k) | A common wrong-but-partially-creditable answer arose from using the supplementary-angle relationship incorrectly for a reflex solution. | TRIG-PQ / ALG-PQ | already covered (extend, see Part D) |
| 23(a)-(b) | PROB/NUM -- multi-set Venn probability | One of the two most challenging questions on the paper; a common wrong method used an inconsistent denominator. | PROB-PQ | folds into Venn addition |
| 24(a)-(b) | VEC -- position vectors, ratios, simplest form | Vector answers left un-simplified, given the wrong direction (NM instead of MN), or with a bracket omitted around a negative scalar. | VEC-PQ | **apply** |

Qs recorded as answered well with no notable pattern: 2, 5, 8, 17.

## Paper 0580/22 (Paper 2, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 2 | NUM -- money, multi-step | Adding a fixed charge to an hourly rate before multiplying, and a separate error multiplying the fixed charge by the number of units. | NUM-PQ | not applicable |
| 3(b) | STAT -- median from a stem-and-leaf diagram | Candidates counted to the middle position using n/2 instead of (n+1)/2; some located the value correctly but reported only the leaf digit. | STAT-PQ | **apply** |
| 6 | NUM -- significant figures | 0.05 (a decimal-places answer) given instead of the significant-figures answer requested. | NUM-PQ / NUM-RN | folds into s.f.-vs-d.p. addition |
| 8 | NUM -- simple interest, rearranging | About a third scored full marks; the dominant error equated the simple-interest formula to the final amount rather than the interest earned. | NUM-PQ | **apply** |
| 9(a) | GEOM -- describing a single transformation (enlargement) | Enlargement correctly identified, but the scale factor given as a ratio or word rather than a number; centre of enlargement omitted or given as a column vector. | GEOM-PQ / VEC-PQ | folds into "describe a transformation completely" addition |
| 10 | NUM -- standard form | Power of ten given as -5 instead of the correct value; a two-digit mantissa error. | NUM-PQ / NUM-RN | already covered |
| 11 | NUM -- relative frequency / expected number from a sample | Method generally sound, but a proportional answer was sometimes left un-multiplied back up to the full population size. | NUM-PQ | already covered (extend, see Part D) |
| 12 | TRIG -- choosing the simplest right-angle method | Candidates often chose a longer, valid-but-inefficient route instead of the direct cosine ratio. | TRIG-PQ | **apply** |
| 14 | COORD -- gradient and equation of a line | Correctly found the gradient, then took its negative reciprocal by mistake when only the original line's equation was wanted. | COORD-PQ | **apply** |
| 15 | GEOM -- bearings | Many correct relevant angles found but the final connection (an equilateral triangle giving 60-degree angles) was frequently missed. | GEOM-PQ | see Part D (bearings addition) |
| 16(a) | Graph gradient as acceleration (physics-adjacent skill inside a maths paper) | A small number tried Pythagoras or an area calculation instead of a simple gradient. | n/a | not applicable |
| 16(b) | MENS -- area under a graph (distance) | The trapezium method's most common error used the wrong parallel side length; the alternative three-region method often dropped the half for triangular areas. | MENS-PQ | already covered (extend, see Part D) |
| 17 | PROB -- Venn diagram, filling in unknown regions | Most placed the two given values correctly but could not complete the remaining two regions consistently with the stated total. | PROB-PQ | folds into Venn addition |
| 19(a) | ALG -- factorising (difference of two squares combined with a common factor) | Many factorised out the common numeric factor successfully but did not spot the underlying difference-of-two-squares structure. | ALG-PQ / ALG-RN | **apply** |
| 19(b) | ALG -- factorising by grouping | Many reached a correct partial grouping but could not complete the final factorisation step. | ALG-PQ | folds into general factorising addition |
| 20 | TRIG -- solving a sin x + b = c for all solutions in a range | A minority found both required angles; common errors used premature rounding, or only the reference angle without the second solution. | TRIG-PQ | already covered (extend, see Part D) |
| 21 | TRIG/MENS -- 3D Pythagoras and trigonometry | A significant number could not identify the correct angle to calculate at all; unnecessary intermediate lengths increased rounding error. | TRIG-PQ | **apply** |
| 22 | PROB -- sequential probability without replacement | A common wrong method multiplied two probabilities that should not have been multiplied directly together; some added instead of multiplying. | PROB-PQ | already covered |

Qs recorded as answered well with no notable pattern: 1, 3(a), 4, 5, 7, 13, 18.

## Paper 0580/23 (Paper 2, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1 | NUM -- place value from words to figures | Wrong digit count relative to the place values named; a comma used inappropriately as a thousands separator, or standard form given when ordinary figures were wanted. | NUM-PQ | not applicable |
| 2 | NUM -- order of operations, brackets | Needing to insert a missing pair of brackets into a calculation; the most common error changed a sign instead of adding brackets. | NUM-PQ / NUM-RN | folds into BIDMAS addition |
| 3 | ALG -- collecting like terms with negatives | Errors adding two negative coefficients together. | ALG-PQ | not applicable |
| 6 | ALG -- factorising a four-term expression | Best answered when a full factorisation was found; a partial factorisation was a common lesser outcome. | ALG-PQ | folds into general factorising addition |
| 9 | TRIG -- right-angled triangle, avoiding unnecessary methods | The direct right-angle-trig ratio was correct and efficient; a minority used a longer route, increasing the chance of an inaccurate final answer. | TRIG-PQ | folds into "identify right-angled before choosing method" addition |
| 10 | COORD -- gradient, sign handling | The dominant error inverted the gradient formula; a second group mishandled two negative coordinates. | COORD-PQ | already covered |
| 12(a)-(b) | ALG -- algebraic fractions (indices) | Incorrect simplification of a fraction with a variable base and exponents. | ALG-PQ | already covered |
| 13(a)-(b) | PROB -- Venn diagram, complement notation | Complement regions specifically caused trouble; set notation with extraneous symbols or missing brackets was common. | PROB-PQ | folds into Venn addition |
| 14(a) | GEOM -- alternate segment theorem | Wrong assumption that a triangle in the figure was isosceles without justification, and a separate wrong assumption of parallel lines that were not given as parallel. | GEOM-PQ | see Part D (alternate segment theorem addition) |
| 14(b) | GEOM -- combining circle theorems in one question | Full marks required chaining three separate facts; partial credit was common for one intermediate angle without completing the chain. | GEOM-PQ | folds into cyclic-quadrilateral addition |
| 15(a)-(b) | STAT -- cumulative frequency graph, interquartile range | Many read one quartile but not both, or gave only the interquartile range's numeric difference without recording the two quartile readings. | STAT-PQ | **apply** |
| 16 | ALG -- changing the subject of a formula (rearrangement, multi-step) | The first rearrangement step mattered most: some attempted to square-root before isolating the squared term. | ALG-PQ | **apply** |
| 17(a)-(b) | NUM -- standard form, adding/multiplying indices | Correct working often reached the right mantissa but an index arithmetic slip produced a power-of-ten error. | NUM-PQ / NUM-RN | **apply** |
| 18 | GEOM -- polygon interior/exterior angles from an algebraic constraint | Candidates who found the correct equation often could not take the final step (dividing 360 by the interior angle). | GEOM-PQ | **apply** |
| 19(a) | ALG -- inverse function notation, composite equations | Confusing which function to apply/evaluate first. | ALG-PQ / ALG-RN | already covered |
| 19(b) | ALG -- function notation with logarithmic reasoning | Bracket-placement errors when expressing a function equation with an unknown inside. | ALG-PQ | not applicable |
| 20 | TRIG -- solving tan x = k in a range | Candidates who correctly solved the reference angle sometimes gave only one of the two required solutions. | TRIG-PQ | already covered |
| 21 | NUM -- recurring decimal to fraction (harder case) | Treating a recurring decimal as terminating, or misidentifying which digits recur, caused failure. | NUM-PQ / NUM-RN | folds into recurring-decimal addition |
| 23 | ALG -- algebraic fraction subtraction | The negative sign between two algebraic fractions, and the sign of the resulting numerator, were the main error sources. | ALG-PQ | already covered |
| 24 | TRIG/MENS -- 3D right-angled trigonometry, choosing the right triangle | Candidates who kept an intermediate length in exact (surd) form were markedly more accurate than those who rounded early. | TRIG-PQ | folds into 3D-trigonometry addition |
| 25 | ALG -- algebraic fraction simplification via factorising | Sign-handling when factorising an expression with a leading negative was the dominant error; cancelling single terms without full factorisation first was also common. | ALG-PQ | folds into general factorising addition |
| 26 | VEC -- position vectors via a ratio point, route vectors | The main error mis-identified a route vector; ratio scale factors were frequently misapplied partway through an otherwise sound method. | VEC-PQ | folds into position-vector addition |

Qs recorded as answered well with no notable pattern: 4, 5, 7, 8, 11, 22.

## Paper 0580/31 (Paper 3, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(a)(ii) | NUM -- multi-step money, division of a total | Common wrong answers came from omitting one of the required divisions. | NUM-PQ | already covered |
| 1(b)(ii) | NUM -- percentage of a total, misreading a percentage as a count | The dominant error used the percentage figure itself as if it were a count of seats, instead of applying it to the total. | NUM-PQ | **apply** |
| 1(c) | NUM -- splitting a total unevenly between different-priced items | After correctly finding a combined total, many divided it evenly, ignoring the two different unit prices to solve for jointly. | NUM-PQ | not applicable |
| 1(d)(i)-(ii) | NUM -- time conversion and 24-hour clock arithmetic | Converting minutes to hours by decimal division instead of separating whole hours and remainder minutes; and adding times without carrying over 60-minute boundaries. | NUM-PQ | **apply** |
| 1(e) | NUM -- multi-step wage calculation with a percentage bonus | Errors used the wrong number of hours for one day, or calculated the percentage bonus on the wrong base figure. | NUM-PQ | already covered |
| 2(a)(i)-(iii) | STAT -- pie chart, fractions/percentages/ratios/probability from angles | A pattern across all four parts: answered in the wrong requested format; ratios frequently left as unsimplified decimals instead of integer ratios. | STAT-PQ | **apply** |
| 2(a)(v) | STAT -- reverse-engineering a total from a pie chart | Many did not realise a given sector value could be reused to find the total via "value per degree." | STAT-PQ | not applicable |
| 2(a)(vi) | STAT -- completing a frequency table and bar chart from a pie chart | Candidates who did not connect back to the pie chart's angles produced internally inconsistent table values. | STAT-PQ | not applicable |
| 2(b) | NUM -- currency conversion, direction of multiplication/division | The dominant error multiplied by the exchange rate where division was required, or vice versa. | NUM-PQ | **apply** |
| 3(a)(ii) | GEOM -- drawing clock hands accurately | The hour hand was frequently drawn pointing directly at a whole number instead of proportionally between two numbers. | GEOM-PQ | not applicable |
| 3(b) | NUM -- counting intervals (off-by-one) | Candidates dividing a time span by an interval length consistently undercounted by one. | NUM-PQ | **apply** |
| 3(c) | NUM -- successive percentage increases (compound, two different rates) | Errors combining a 10% then a 5% increase -- most often calculating the second year's rise on the original amount rather than the already-increased one. | NUM-PQ / NUM-RN | already covered (extend, see Part D) |
| 3(d)(ii)-(iii) | PROB -- Venn diagram (union vs intersection), describing a region in words | Found the intersection where the union was asked for; omitted the word "only" when describing a specific Venn region in words. | PROB-PQ | folds into Venn addition |
| 3(e) | ALG -- forming and solving an equation from a "more than" relationship | Most did not use the given relationship to set up the correct equation. | ALG-PQ | see Part D |
| 4(a)(i)-(iv) | STAT -- stem-and-leaf diagram, range/mode/median, percentage in a range | Common errors dropped the stem from an answer, taking only the leaf digit. | STAT-PQ | folds into median-from-a-table addition |
| 4(b) | STAT -- effect of adding a constant to every data value | Most understood the range stays the same, but forgetting to add the constant to both the mode and the median was a common partial error. | STAT-PQ | **apply** |
| 4(c) | STAT -- updating a stem-and-leaf diagram with a shifted new entry | Common errors forgot to shift every existing value, or miscalculated the new entry's exact value from an extra detail. | STAT-PQ | not applicable |
| 4(d) | NUM/STAT -- intersection of three separate criteria (list-based) | Candidates who satisfied two of three stated criteria were a common partial-credit outcome. | STAT-PQ | not applicable |
| 5(a)(ii)-(iii) | GEOM -- angle facts, giving a geometrical reason | Candidates could calculate the numeric angle correctly but gave a numerical explanation instead of the required geometrical reason. | GEOM-PQ | **apply** |
| 5(b) | GEOM -- interior angle of a regular polygon | Candidates who found the exterior angle correctly frequently stopped there, not completing the final step to reach the interior angle asked for. | GEOM-PQ | see Part D |
| 5(c) | ALG -- simultaneous equations from a geometric context | Candidates found one unknown correctly but could not form/solve the second equation. | ALG-PQ | not applicable |
| 6(a) | COORD -- plotting a point from given information | A significant minority plotted a point that ignored one of the two coordinate conditions given. | COORD-PQ | not applicable |
| 6(b) | TRIG -- choosing tan over sin/cos unnecessarily | Successful candidates used tan directly; some found the hypotenuse first and then used sin or cos instead of the more direct tan approach. | TRIG-PQ | folds into "identify right-angled before choosing method" addition |
| 6(c)(i) | GEOM -- describing a rotation fully | Direction of rotation, or the centre, frequently missing; "turn" used instead of "rotation"; double transformations given when a single transformation was asked for. | GEOM-PQ / VEC-PQ | already covered |
| 6(c)(ii) | GEOM -- naming a translation | The specific term "translation" itself was often not known. | GEOM-PQ | not applicable |
| 6(d)(i)-(ii) | MENS -- scale factor from linear/area/volume relationships (compound) | A high non-attempt rate; where attempted, the specific scale factor connecting the two shapes was rarely identified correctly. | MENS-PQ | see Part D |
| 7(a) | GEOM -- accurate bearings construction and scaled distance | Drawing the correct bearing was more successfully done than calculating the associated distance. | GEOM-PQ | not applicable |
| 7(b)(i) | GEOM -- back bearing (reverse bearing) | The correct method (stated bearing + 180, adjusted for the 360 range) was rarely used; most attempted to draw and measure instead. | GEOM-PQ | **apply** |
| 7(c) | MENS -- finding a scale from two measurements (with units) | Very few correct answers; a common partial-credit answer omitted the final unit-consistency step. | MENS-PQ | see Part D |
| 7(d) | MENS -- enlargement scale factor, avoiding premature rounding | Successful candidates kept the scale factor as an exact fraction; rounding it early caused an out-of-tolerance answer. | MENS-PQ | already covered |
| 7(e) | MENS -- curved surface area of a composite solid | Very few fully correct; dominant errors calculated the wrong quantity entirely or omitted multiplying circumference by height. | MENS-PQ | already covered |
| 8(a)-(d) | ALG -- table of values, plotting a curve, reading a graph | Errors squaring negative x-values incorrectly; many completed the table but did not attempt the graph; curves frequently joined with straight-line segments instead of a smooth curve. | ALG-PQ | see Part D |

Qs recorded as answered well with no notable pattern: 1(a)(i), 1(b)(i), 3(a)(i), 6(a) table completion, 7(b)(ii) partial.

## Paper 0580/32 (Paper 3, Core) -- partial: general comments only

The fetched text for this paper cuts off after the "Key messages" and "General
comments" sections, before any specific-question commentary. The general
comments state (paraphrased): candidates completed most of the paper,
presentation and working were generally good in multi-stage problem-solving
questions, and the same standing cautions recur -- avoid premature rounding,
show formulae and substitutions, write digits clearly, and re-read the
question to check the answer is in the required format. No question-level
evidence is available from this paper -- **no per-question rows are recorded
for 0580/32**, and no claim is made about which questions were hard or easy
on this variant.

---

# Part B -- 0625 Physics

## Paper 0625/11 (Multiple Choice, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 3 | Density of a liquid | Weaker candidates divided volume by mass instead of mass by volume. | THERM-RN | not applicable |
| 7 | Power and work done, combined equations | Weaker candidates could not recall and combine the equations for power and work done. | MFE-RN | already covered (extend, see Part D) |
| 10 | Kinetic theory / Brownian motion | Misconception that smoke particles move randomly because they are less dense than air. | THERM-RN | **apply** |
| 12 | Gas pressure with a movable piston | Correctly predicted temperature would rise on heating but incorrectly also predicted pressure would rise, missing that a movable piston keeps pressure constant. | THERM-RN | **apply** |
| 14 | Changes of state (condensation vs evaporation) | Weaker candidates confused condensation and evaporation as processes. | THERM-RN | see Part D |
| 16 | Wave diagrams -- wavelength vs amplitude | Weaker candidates could not correctly read wavelength and amplitude off a wave diagram. | WAVES-SG | already covered |
| 17 | Seismic waves | Very poor overall knowledge, with near-uniform guessing. | no resource yet | no resource yet |
| 19 | Total internal reflection / critical angle | The dominant misconception: believing a refracted ray still exists once the angle of incidence exceeds the critical angle. | WAVES-SG | **apply** |
| 30 | Electromagnetic induction (induced e.m.f.) | A persistent misconception that the speed of relative motion between magnet and coil does not affect the size of the induced e.m.f. | no resource yet | no resource yet |
| 34 | Radioactive decay -- alpha emission facts | Poor recall of the specific facts of alpha decay; near-uniform guessing. | no resource yet | no resource yet |
| 36 | Radiation shielding material | A significant minority thought aluminium (rather than lead) was the best shielding material. | no resource yet | no resource yet |

Qs recorded as answered well with no notable pattern: 39.

## Paper 0625/12 (Multiple Choice, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1 | Reading/interpreting a data table | Weaker candidates misread a table by picking the smallest raw value shown instead of calculating the required difference. | n/a | not applicable |
| 3 | Gravitational field strength vs velocity, unit-based reasoning | Confused velocity's definition (a change in speed) with speed in a given direction. | MFE-RN | see Part D |
| 4 | Weight -- the correct relationship | Many believed weight to be "gravitational force per unit mass" rather than "the gravitational force on an object." | MFE-RN | already covered |
| 5 | Reading a load-extension graph carefully | Confused "extension" with "length of the spring," reading the load at the wrong point on the graph. | MFE-RN / MFE-PQ | **apply** |
| 7 | Work done -- identifying the relevant distance | Many included an irrelevant given quantity in a work-done calculation. | MFE-RN | see Part D |
| 15 | Thermal radiation through a vacuum | A significant minority believed radiation cannot travel through a vacuum. | THERM-RN | **apply** |
| 18 | Principal focus of a lens | Confusion between the principal focus and a line drawn elsewhere in a ray diagram. | WAVES-SG | folds into lens addition |
| 22 | Radioactive half-life calculation | Forgetting to halve the given time period before applying it. | no resource yet | no resource yet |
| 24 | Direction of a magnetic field | Near-even spread across all four options, indicating widespread guessing. | no resource yet | no resource yet |

Qs recorded as answered well with no notable pattern: 9.

## Paper 0625/13 (Multiple Choice, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 5 | Reading a measuring cylinder for density | Generally well done. | THERM-RN | already covered |
| 9 | Changes of state vocabulary | Well answered. | THERM-RN | already covered |
| 12 | Cooling in an insulated container | Weaker candidates believed the water was absorbing heat from its surroundings despite the container being insulated. | THERM-RN | **apply** |
| 18 | Converging lens ray behaviour | Widespread misconception that a beam converges beyond, or to the right of, the second principal focus. | WAVES-SG | folds into lens addition |
| 19 | Refraction vs the law of reflection | Weaker candidates believed i = r (the reflection law) applied to refraction as light enters glass. | WAVES-SG | **apply** |
| 21 | Electromagnetic spectrum, wavelength ordering | Very challenging for all candidates; some believed X-rays have the longest wavelength, inverting the correct order. | WAVES-SG | already covered |
| 23 | Rearranging a distance/time/speed-family equation | Forgetting to halve a given time value; a separate group did not rearrange the equation correctly for distance. | MFE-RN | already covered |
| 26 | Power dissipated by a resistor | Stronger candidates only; near-uniform guessing among others. | no resource yet | no resource yet |
| 26(a.c.) | Distinguishing a.c. from d.c. voltage graphs | Even stronger candidates sometimes confused the two. | no resource yet | no resource yet |
| 34 | Sources of ionising radiation | Many incorrectly believed radio/TV transmissions contribute to background ionising radiation dose. | no resource yet | no resource yet |
| 38 | Light-year / return-journey time calculation | Many did not account for a return journey, calculating only a one-way time. | no resource yet | no resource yet |

## Paper 0625/21 (Multiple Choice, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 6 | Conservation of momentum (opposite directions) | Most failed to treat two velocities in opposite directions as having opposite-sign momenta. | MFE-RN | **apply** |
| 10 | Gas pressure at constant temperature | Correctly identified that pressure doubles when volume halves, but incorrectly reasoned this was because kinetic energy doubles. | THERM-RN | **apply** |
| 11 | Boyle's law -- direct vs inverse relationship | Common misconception that pressure and volume are directly proportional rather than inversely proportional. | THERM-RN | **apply** |
| 17 | Reflection -- maximum angle misconception | Many believed the maximum angle of reflection could only be 90 degrees. | WAVES-SG | not applicable |
| 20 | Optical fibres -- light transmission and critical angle | Very challenging; poor understanding of how light transmission relates to speed and critical angle. | WAVES-SG | folds into TIR addition |
| 22 | Wave speed equation, unit conversion (cm to m) | Even stronger candidates sometimes used the wrong value for wavelength; weaker candidates additionally forgot the cm-to-m conversion. | WAVES-SG | see Part D |
| 27 | Diode behaviour in a circuit | Poor understanding overall. | no resource yet | no resource yet |
| 30 | Force on a current-carrying wire in a magnetic field | Only stronger candidates consistently correct. | no resource yet | no resource yet |
| 36 | Corrected count rate (subtracting background radiation) | Omitted the background-radiation correction entirely, or subtracted it once but forgot to add it back on. | no resource yet | no resource yet |

## Paper 0625/22 (Multiple Choice, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 2 | Speed-time graph, area under the graph | A minority believed the area under a speed-time graph represents acceleration rather than distance. | MFE-RN | already covered |
| 3 | Weight equation | Weaker candidates divided mass by g instead of multiplying. | MFE-RN | already covered |
| 7 | Energy resources -- matching a resource to its energy source | Incorrectly attributed the Sun as the energy source for geothermal energy. | no resource yet | not applicable |
| 11 | Boyle's law (second variant) | The same direct-vs-inverse misconception recorded on Paper 21 Q11, confirming a recurring pattern. | THERM-RN | folds into Boyle's-law addition |
| 15 | Thermal conductors -- air as a poor conductor | Many weaker candidates did not realise air itself is a poor thermal conductor. | THERM-RN | **apply** |
| 18 | Diffraction -- effect of changing speed | Weaker candidates incorrectly believed frequency must be increased as wavelength decreases in diffraction. | WAVES-SG | not applicable |
| 26 | a.c. vs d.c. supply graphs (second variant) | Confirms the Paper 13 pattern: mixed up which graph represented a.c. vs d.c. | no resource yet | no resource yet |
| 31 | Simple a.c. generator -- when e.m.f. is maximum | Extremely challenging; most incorrectly believed e.m.f. is zero when the field is zero, rather than maximum when the field changes fastest. | no resource yet | no resource yet |
| 36 | Radioactive sources -- thickness control application | Poor knowledge of which radiation type suits a paper-thickness-monitoring application. | no resource yet | no resource yet |
| 38 | Orbital period calculation, unit conversion (days to seconds) | Did not convert 365 days into seconds before applying the equation. | no resource yet | no resource yet |

## Paper 0625/23 (Multiple Choice, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 6 | Forces changing the volume of an object | A minority believed applying forces cannot change an object's volume. | MFE-RN | not applicable |
| 7 | Conservation of momentum, rearranging the equation | Weaker candidates struggled significantly. | MFE-RN | folds into momentum-conservation addition |
| 9 | Particle separation on melting | A misconception that particles move much further apart on melting. | THERM-RN | **apply** |
| 10 | Brownian motion | A significant minority believed smoke particles move in the same direction along a curved path. | THERM-RN | folds into Brownian-motion addition |
| 14 | Energy and temperature during melting | Weaker candidates believed temperature rises during the change of state. | THERM-RN | already covered |
| 20 | Refractive index -- definition and equation link | Many could not link the definition of refractive index to its equation form. | WAVES-SG | not applicable |
| 21 | Converging lens as a magnifying glass | Weaker candidates' answers were evenly spread, indicating guessing. | WAVES-SG | folds into lens addition |
| 25 | Magnetic field direction (bar magnet) | Weaker candidates believed field lines point toward both poles. | no resource yet | no resource yet |
| 30 | Resistance, length and cross-sectional area relationship | Weaker candidates' answers were evenly spread, indicating guessing. | no resource yet | no resource yet |
| 31 | Behaviour of LEDs, relays, thermistors, LDRs in circuits | Widespread difficulty; near-uniform guessing. | no resource yet | no resource yet |
| 40 | Distance light travels in a year -- correct unit | Most recalled the correct number but many attached the wrong unit. | no resource yet | no resource yet |

## Paper 0625/31 (Paper 3, Theory, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(a)(i) | Speed-time graph reading | The most common error treated the graph as a distance-time graph. | MFE-RN | see Part D |
| 1(a)(iii) | Area under a speed-time graph | A common wrong answer omitted the half for a triangular region. | MFE-RN | see Part D |
| 1(b) | Distinguishing speed from velocity | Only a few correctly distinguished velocity (needing both speed and direction) from speed. | MFE-RN | see Part D |
| 2(a) | Average thickness from repeated small measurements | Common errors divided in the wrong direction. | n/a | not applicable |
| 2(b) | Measuring volume by displacement | A common wording error omitted the specific term "volume." | n/a | not applicable |
| 3(a)(iii) | Newton's first law -- no resultant force implies constant motion, not rest | Many believed "no resultant force" means "no movement," rather than "constant velocity." | MFE-RN | **apply** |
| 4(b)(i) | Describing how a named renewable power station generates electricity | Many gave a generic/standard answer regardless of which specific renewable source was asked about. | no resource yet | not applicable |
| 4(c) | Storing surplus electrical energy | Very few correct answers; vague non-methods were common. | no resource yet | no resource yet |
| 5(b)(ii) | Gas pressure explanation (why pressure increases) | Most knew pressure increases but could not explain why in terms of collision frequency. | THERM-RN | **apply** |
| 6(b)(i)-(ii) | Wave speed equation and identifying an EM spectrum region | Powers-of-ten handling errors; correctly named a region but did not narrow to the specific constraint given. | WAVES-SG | already covered |
| 7(c)(i) | Dispersion -- correct term | Only a minority recalled "dispersion" as the specific term for a prism splitting white light. | WAVES-SG | **apply** |
| 8(a)(ii) | Electromagnet -- number of cells calculation | The dominant error multiplied instead of divided. | n/a | not applicable |
| 8(b)(ii) | Identifying a magnetic pole from field behaviour | Most gave the incorrect pole. | no resource yet | no resource yet |
| 9(a)(i) | Naming the three wires in a mains cable | Very few could name all three. | no resource yet | no resource yet |

## Paper 0625/32 (Paper 3, Theory, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 3(a) | Stability and centre of mass (qualitative) | Vague comparative descriptions instead of correctly identifying that a lower centre of mass improves stability. | MFE-RN | not applicable |
| 3(c)(ii) | Moments -- recognising an equal-and-opposite moment without recalculating | Only stronger candidates realised a follow-up moment was numerically identical to a previous part's answer. | MFE-RN | not applicable |
| 4(a)(i) | Useful energy transfers from a domestic appliance | Only stronger candidates correctly named both useful energy transfers. | n/a | not applicable |
| 4(b)(i) | Hydroelectric power station description | The same generic-renewable-answer pattern as Paper 31 Q4(b)(i). | no resource yet | no resource yet |
| 5(b)(i) | Change in state of matter -- motion and separation together | Many described only one aspect when both were required for full credit. | THERM-RN | **apply** |
| 5(b)(ii) | Absolute zero -- particle behaviour | Many did not recognise that particles stop vibrating (or reach minimum kinetic energy) at absolute zero. | THERM-RN | **apply** |
| 5(c) | Gas pressure calculation, correct rearrangement | The dominant error used the equation in the wrong rearranged form. | THERM-RN | see Part D |
| 6(b) | Refraction explained via speed/wavelength change | Most correctly identified refraction but could not explain it in terms of a speed or wavelength change. | WAVES-SG | **apply** |
| 6(c)(iii) | Speed of radio waves vs gamma rays in a vacuum | Some did not know these travel at the same speed in a vacuum. | WAVES-SG | see Part D |
| 7(b) | Circuit -- effect of closing a switch on brightness | Many correctly predicted increased brightness but could not explain the resistance-based reason. | no resource yet | no resource yet |
| 8(a) | Electrical energy equation, unit conversion (time to seconds) | Used the power equation instead of the energy-transferred equation; time often left un-converted. | no resource yet | no resource yet |
| 10(a)(i)-(ii) | Proton vs nucleon number (isotopes) | A recurring confusion throughout the paper. | no resource yet | no resource yet |
| 10(b) | Half-life calculation, converting number of half-lives into a time in minutes | Found the number of half-lives elapsed but could not convert this into a time value. | no resource yet | no resource yet |
| 11(a)(i) | Comparing planets' gravitational field strength | A misconception linking field strength to distance from the Sun, rather than to mass. | no resource yet | no resource yet |

## Paper 0625/33 (Paper 3, Theory, Core)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 2(b) | Stability -- raising vs lowering the centre of gravity, and base area | Partial credit typical for statements not linked to the underlying mechanism. | MFE-RN | not applicable |
| 3(a)(i)-(ii) | Energy stores for hydroelectric generation; minimal equipment needed | General lack of knowledge that hydroelectric power needs only a turbine and a generator. | no resource yet | no resource yet |
| 3(b)(i)-(ii) | Step-down transformer identification; benefits of high-voltage transmission | Many did not know a step-down transformer was needed; did not connect lower current to thinner cables. | no resource yet | no resource yet |
| 5(a) | Convection currents -- density-change explanation | Many gained only partial credit, missing the specific density-change-with-temperature mechanism. | THERM-RN | **apply** |
| 6(b)(ii) | Wavelength -- precise definition | Few could state that wavelength is the distance between two successive wave crests. | WAVES-SG | already covered |
| 7(a)(i)-(ii) | Drawing/understanding a normal and a refracted ray at a sloping boundary | Poor recall of what a "normal" is; a common error drew the emergent ray parallel to the incident ray. | WAVES-SG | folds into ray-diagram addition |
| 7(b) | Dispersion -- blue vs red refraction | Very few knew blue light refracts more than red light. | WAVES-SG | **apply** |
| 8(c) | Power transferred equation | Many did not recall P = I x V. | no resource yet | no resource yet |
| 9(a) | Magnetic materials for transformer parts | Generally poor; partial credit typical for copper (coils). | no resource yet | no resource yet |
| 10(c)(i)-(ii) | Beta particle identity; half-life graph reading | Few knew beta particles are electrons; weaker candidates halved the count rate incorrectly. | no resource yet | no resource yet |
| 11(b)(i)-(ii) | Distinguishing "Universe" from "galaxy" | Many did not correctly distinguish these two terms. | no resource yet | no resource yet |

## Paper 0625/41 (Paper 4, Theory, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(c)(i) | Terminal velocity -- describing acceleration and forces together | Believing acceleration increases as an object falls, or that the object "slows down." | MFE-RN | **apply** |
| 1(c)(ii) | Tangent-to-curve technique for instantaneous acceleration | Calculated Delta-v/Delta-t between two arbitrary points instead of drawing/measuring a tangent at the exact instant required. | MFE-RN | **apply** |
| 2(a)(i) | Conservation of momentum with zero total initial momentum | Assuming two trolleys, initially at rest and then moving apart, must have "stuck together," rather than recognising the initial momentum sums to zero. | MFE-RN | **apply** |
| 2(b) | Energy store transfer language and direction | Could name the correct two energy stores but sometimes reversed the direction of transfer. | MFE-RN | **apply** |
| 3(b)(i) | Thermal energy transfer process between liquid water and solid ice | Only the strongest candidates correctly identified conduction; convection was a common wrong answer. | THERM-RN | **apply** |
| 3(b)(iii) | Convection explained via density change (in water) | Only the strongest answers avoided referring to "particles" and correctly described a bulk-fluid process. | THERM-RN | folds into convection addition |
| 4(a)(i) | Defining the focal point of a lens precisely | Weaker candidates omitted one of the two required conditions (parallel rays; after refraction). | WAVES-SG | **apply** |
| 4(b)(ii) | Wavelength change on entering a denser medium | A misconception stating "the wavelength refracts" instead of explaining the decrease via speed change. | WAVES-SG | folds into refraction-explanation addition |
| 5(a) | Longitudinal vs transverse waves -- precise definition | Only the strongest candidates gave a clear general-rule statement rather than only examples. | WAVES-SG | already covered |
| 6(a)(ii) | Radial electric field diagram | Common errors drew circular (magnetic-style) field patterns instead of radial lines. | no resource yet | no resource yet |
| 7(a) | Defining e.m.f. precisely | Few gave the full definition; "the voltage across a battery" was a common insufficient answer. | no resource yet | no resource yet |
| 9(a) | How an a.c. current in a primary coil induces a current in a secondary coil | Believed current physically "travels into" the secondary coil. | no resource yet | no resource yet |
| 10(a)(i) | Background radiation -- definition vs count rate | Confusing "background radiation" with "count rate," or with radiation used to operate a detector. | no resource yet | no resource yet |
| 11(b)(i)-(ii) | Hubble constant recall and rearrangement | Recall of the numerical value, with the unit frequently omitted. | no resource yet | no resource yet |

## Paper 0625/42 (Paper 4, Theory, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 2(a) | Defining acceleration precisely | A common wording error combined both correct phrasings redundantly ("rate of change of velocity per unit time"). | MFE-RN | see Part D |
| 4(b)(i) | Converting Celsius to Kelvin, and the meaning of absolute zero | Weaker candidates produced a negative Kelvin value, not recognising absolute zero as a genuine minimum. | THERM-RN | **apply** |
| 4(b)(ii) | Thermal energy transfer methods that work in a vacuum | Weaker candidates incorrectly named radiation as one of "two other" thermal transfer methods, when radiation is the only one that works in a vacuum. | THERM-RN | folds into radiation-through-a-vacuum addition |
| 4(c) | Gas pressure explained via particle collisions and force | Most identified collisions; fewer connected this to force and hence pressure = force / area. | THERM-RN | folds into gas-pressure-explanation addition |
| 6(a)(iii) | Loudness and pitch -- amplitude vs frequency | A common incorrect belief that frequency stays the same as amplitude changes and pitch changes. | WAVES-SG | **apply** |
| 7(a) | Testing an unmagnetised object for magnetism (practical reasoning) | The specific requirement (testing both ends for repulsion) was often missing. | no resource yet | not applicable |
| 8(a)(ii) | Potential divider reasoning with an LDR and LED in parallel | Only the strongest candidates could correctly apply potential-divider reasoning to a non-standard combination. | no resource yet | no resource yet |
| 9(a)(ii) | Alpha particles and medical imaging safety | Referred to general penetration facts rather than the specific detection-related reasoning. | no resource yet | no resource yet |
| 10(b) | Eclipse vs ellipse (technical vocabulary and spelling) | Some confused "eclipse" with "ellipse" when describing an orbital shape. | no resource yet | no resource yet |
| 11(c)(i)-(ii) | Cosmic microwave background radiation, and redshift as evidence for expansion | Correctly linked CMBR to shortly after the Big Bang, but explaining redshift via expansion was often only partial. | no resource yet | no resource yet |

## Paper 0625/43 (Paper 4, Theory, Extended)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(a) | Defining deceleration precisely | Weaker candidates defined deceleration as "decreasing acceleration" -- a self-contradictory statement. | MFE-RN | **apply** |
| 1(b) | "Show that" calculation requiring the equation stated first | Marks only awarded where the equation was shown in words/symbols, not just numeric substitution. | MFE-RN | see Part D |
| 1(d) | Describing the motion and forces on a falling object together | Same terminal-velocity misconception pattern as Paper 41 Q1(c)(i). | MFE-RN | folds into terminal-velocity addition |
| 2(a) | Identifying the energy store associated with a battery | Many incorrectly named "electrical energy" as a store. | no resource yet | not applicable |
| 2(c)(i)-(ii) | Efficiency -- interpreting a percentage and rearranging the efficiency equation | Misinterpreted "22% efficient"; rearrangement to find total input from a given useful output was often mishandled. | MFE-RN | **apply** |
| 3(b)(i) | Defining impulse precisely (two acceptable forms) | Common misconceptions conflated impulse with a rate. | MFE-RN | **apply** |
| 3(b)(ii) | Impulse-force-time relationship | Vague statements instead of the specific force/rate-of-change-of-momentum reasoning. | MFE-RN | folds into impulse addition |
| 4(b)(iii) | Explaining why heating takes longer than a simple calculation predicts | Misunderstood the question, suggesting condition changes rather than energy loss to surroundings. | THERM-RN | not applicable |
| 4(c) | Effect of a higher specific heat capacity container on heating time | Some believed a higher specific heat capacity container would reduce heating time. | THERM-RN | **apply** |
| 5(a) | Explaining thermal conduction in metals via delocalised electrons | Mentioned "free electrons" but explained the transfer via lattice vibrations instead of electron movement. | THERM-RN | **apply** |
| 5(b)-(c) | Why non-metals and gases conduct heat poorly | Answers too generic without the specific mechanism. | THERM-RN | folds into conduction-mechanism addition |
| 6(a) | Defining focal length vs principal focus | Defined focal length as "distance from the object to the lens" rather than lens-to-focus. | WAVES-SG | folds into focal-point-definition addition |
| 8(a)(i) | Defining ultrasound precisely | Described what ultrasound is used for rather than defining it (sound above 20 kHz). | WAVES-SG | **apply** |
| 9(a) | How an induced current is produced in a transformer's secondary coil | Same misconception as Paper 41 Q9(a). | no resource yet | no resource yet |
| 10(c)(i) | An isotope's suitability for leak detection (half-life reasoning) | Only stronger candidates connected a short half-life to decaying before detection. | no resource yet | no resource yet |
| 11(a) | Defining redshift | Many answered "Doppler effect" instead of correctly describing redshift itself. | no resource yet | no resource yet |

## Paper 0625/51 (Practical Test)

| Q | Subtopic | Candidate issue (paraphrase) | Resource | Action |
|---|---|---|---|---|
| 1(d) | Gradient from a large triangle on a graph | A significant number drew a small triangle to find a gradient, reducing accuracy. | MFE-RN | **apply** |
| 2(d) | Justifying whether two measured values agree "within experimental accuracy" | Needed a statement specifically referencing the limits of experimental accuracy. | n/a | not applicable |
| 2(e) | Circuit symbol -- variable resistor vs thermistor | A common error drew a hybrid or wrong symbol. | no resource yet | no resource yet |
| 3(d) | Choosing measurement conditions close to a stated target value | Many did not read the instruction carefully enough to choose positions close to the required value. | n/a | not applicable |

## Paper 0625/52 (Practical Test) -- partial: cuts off mid-question

The fetched text for this paper covers the "Key messages" and "General
comments" sections plus Question 1 in full and Question 2 up to part (a),
before cutting off mid-sentence in Question 2(a)'s commentary (a note on
recording the stretched length of a spring). General comments echo standing
themes: precision/significant-figure discipline, showing working with a
calculator, and clear best-fit graph lines. **No further per-question rows
are recorded for 0625/52** beyond what is captured above, and no claim is
made about Question 2(b) onward, or any later question, on this paper.

---

# Part C -- Summary of recommended actions

Counting every row across Parts A and B (including rows folded into a shared
cluster):

- **0580 Mathematics**: 155 distinct question/part-level evidence items
  extracted across Papers 11, 12, 13, 21, 22, 23 and 31 (32's specific-question
  section was not present in the source text). Of these, roughly 60 map
  cleanly onto an existing Marlbridge resource and are worth a small content
  addition; the rest are either already covered by existing prose, or too
  narrow/mechanical/question-specific to generalise into a revision resource.
- **0625 Physics**: roughly 140 distinct question/part-level evidence items
  extracted across Papers 11, 12, 13, 21, 22, 23, 31, 32, 33, 41, 42, 43, 51
  and the partial 52. Of these, only the items touching Motion/Forces/Energy,
  Thermal Physics, or Waves (a minority -- Marlbridge's 0625 content covers
  three of the syllabus's six topics) have any resource to apply to; the
  majority -- everything on electricity/magnetism, nuclear physics and space
  physics -- is recorded as "no resource yet."

## Applied (small content additions made -- see Part D for the exact edits)

**Mathematics** (11 resource files touched, each with a small, sourced
"Examiner report insight" addition):

1. `igcse-mathematics-number-practice.md` -- order of operations, significant
   figures vs decimal places, recurring decimals, standard-form index
   arithmetic, chained unit conversion.
2. `igcse-mathematics-number-revision-notes.md` -- recurring decimals,
   standard-form index arithmetic, rounding-instruction discipline.
3. `igcse-mathematics-algebra-and-graphs-practice.md` -- incomplete
   factorisation / missed difference-of-two-squares, elimination sign-trap,
   graphical-vs-algebraic method compliance.
4. `igcse-mathematics-algebra-and-graphs-revision-notes.md` -- incomplete
   factorisation, missed difference-of-two-squares.
5. `igcse-mathematics-geometry-practice.md` -- cyclic quadrilateral angle sum
   vs general quadrilateral, alternate segment theorem, kite symmetry.
6. `igcse-mathematics-trigonometry-practice.md` -- choosing the direct
   right-angle ratio, "show that" precision, exact-form intermediate values in
   3D problems.
7. `igcse-mathematics-mensuration-practice.md` -- major sector angle, radius
   vs diameter in compound shapes, cube root for a linear scale factor from a
   volume ratio.
8. `igcse-mathematics-transformations-and-vectors-practice.md` -- collinear
   points and simplifying to a single given vector, vector direction (MN vs
   NM).
9. `igcse-mathematics-statistics-practice.md` -- reading a full value (not
   just the leaf) from a stem-and-leaf diagram, updating both mode and median
   after a constant shift, recording both cumulative-frequency quartile
   readings.
10. `igcse-mathematics-coordinate-geometry-practice.md` -- not taking an
    unnecessary negative reciprocal when only the original line's equation is
    required.
11. `igcse-mathematics-probability-practice.md` -- Venn diagram/set notation:
    defaulting to shading the intersection, evaluating `n(...)` expressions
    (not just shading), universal-set-only elements, complement regions.

**Physics** (3 resource files touched -- the only three 0625 topics
Marlbridge currently covers):

12. `igcse-physics-thermal-physics-revision-notes.md` -- gas pressure/volume
    inverse (not direct) proportionality, radiation through a vacuum,
    Brownian motion's actual cause.
13. `igcse-physics-motion-forces-and-energy-revision-notes.md` -- momentum
    conservation from zero total initial momentum, tangent-to-curve technique
    for an instantaneous gradient, Newton's first law (no resultant force
    means constant velocity, not rest).
14. `igcse-physics-waves.md` -- total internal reflection beyond the critical
    angle, the two-part definition of a lens's principal focus, blue vs red
    refraction in dispersion.

## Informational only (no content edit made, and why)

- **All 0625 Electricity & Magnetism, Nuclear Physics and Space Physics
  evidence** (roughly half of the 0625 total) -- genuinely strong, recurring
  patterns (e.g. proton-vs-nucleon-number confusion recurring across at least
  four separate papers; the a.c. generator maximum-e.m.f. misconception;
  redshift/Hubble's law recall gaps) but **no matching Marlbridge 0625
  resource exists to receive the insight**, and creating one is out of scope
  for this pass (not a research task -- a new-page-type decision the site
  owner should make deliberately, not as a side effect of an examiner-report
  review).
- **Question-mechanical or presentation-only findings** across both subjects
  (e.g. "some candidates left off the percent sign," "handwriting made 4s and
  9s hard to distinguish," "a significant number made no attempt") -- true
  and recorded, but not the kind of thing a revision resource's prose can
  usefully pre-empt.
- **Narrow, single-occurrence findings** that did not recur across more than
  one paper/series-variant in this document (e.g. Paper 23 Q19(b)'s
  logarithm-adjacent bracket error; 0625/42 Q7(a)'s specific "test both ends
  for repulsion" practical-technique point) -- real, but a single occurrence
  in one series is evidence of *a* pattern, not yet a *confirmed recurring*
  one; recorded for a future series-over-series comparison rather than acted
  on now.
- **Findings already stated in existing Marlbridge prose** -- flagged as
  "already covered" throughout Parts A/B rather than duplicated.

---

# Part D -- Exact content additions (specification for Step 4)

Every addition below takes the same form and is inserted as a new subsection
in the target file: a short bullet list under the heading **"Examiner report
insight"**, placed immediately after the file's existing "Where marks are
usually lost" section (practice pages) or "Common mistakes" section (revision
notes), or before "Official syllabus" (the one study-guide page touched,
`igcse-physics-waves.md`, which has neither of those sections). Each
subsection ends with an italic source line following the site's existing
citation convention (see `a-level-economics-price-system-and-the-microeconomy.md`'s
"Official syllabus" section for the precedent), adapted for an examiner
report:

*Source: Cambridge International, [Subject] [code] Principal Examiner Report,
June 2024 series, Paper(s) [list] (verified 2026-09-02).*

This keeps newly-sourced content visibly distinct from the page's existing,
unsourced pedagogical bullets, avoids re-attributing house-written prose to
Cambridge, and follows the same "dedicated cited section" pattern the site
already uses for syllabus references. All bullet text is this document's own
paraphrase -- no source text is quoted. The 14 files and their additions are
listed in Part C above; the actual edits are made directly in
`src/content/resources/` as the next step of this workstream, not restated
verbatim here to avoid a second, harder-to-maintain copy of the same prose.
