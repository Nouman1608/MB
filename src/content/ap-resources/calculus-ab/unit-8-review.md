---
resourceId: "mb-ap-calcab-u8-review"
title: "Applications of Integration: Mixed Unit Review (Calculus AB Unit 8)"
description: "The big ideas of Applications of Integration in one place, a methods summary table, and eight original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 8
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 8 topics, or at least the Unit 8 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u8-diagnostic"]
learningObjectives:
  - "Connect average value, motion, accumulation, area and volume as one idea: add up thin slices with a definite integral"
  - "Choose dx or dy, the slice shape and the radius by reading the region and the question"
  - "Answer multi-part questions that combine several Unit 8 topics, with and without a calculator"
  - "Write justifications for greatest and least amounts and for changes of direction"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 6 and 8(c) are calculator-active: use radians, store unrounded values and give answers to three decimal places. Every other question is done without a calculator, with exact answers."
related: ["mb-ap-calcab-u8-diagnostic", "mb-ap-calcab-8.1-checklist", "mb-ap-calcab-8.2-checklist", "mb-ap-calcab-8.3-checklist", "mb-ap-calcab-8.4-checklist", "mb-ap-calcab-8.5-checklist", "mb-ap-calcab-8.6-checklist", "mb-ap-calcab-8.7-checklist", "mb-ap-calcab-8.8-checklist", "mb-ap-calcab-8.9-checklist", "mb-ap-calcab-8.10-checklist", "mb-ap-calcab-8.11-checklist", "mb-ap-calcab-8.12-checklist", "mb-ap-calcbc-8.13-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Every topic in the unit is one idea: slice, find the size of one slice, and add the slices with a definite integral."
  - "The integral of a rate is a net change; add the starting amount to get an amount, and use |v| for total distance."
  - "For area, subtract top minus bottom (or right minus left); split wherever the curves cross."
  - "For volume, find the area of one slice: s² or (π/8)s² for known cross sections, πr² for discs, π(R² − r²) for washers."
  - "Shared review for Calculus AB and Calculus BC students; Question 8 includes arc length and is BC only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Use this page after studying Unit 8, Applications of Integration, or after the [Unit 8 diagnostic](/advanced-course-resources/calculus-ab/unit-8-diagnostic/). The unit is shared by Calculus AB and Calculus BC. Questions 1 to 7 are for both courses; **Question 8 is BC only**, because it uses arc length (Topic 8.13). These are **original Marlbridge practice questions**, not past exam questions; contexts and data are invented. The rubrics are a suggested Marlbridge rubric, not official scoring. Only Questions 6 and 8(c) need a graphing calculator.

## Big ideas of the unit

- **Slice, measure, add.** Every topic builds a quantity from thin slices (a rate times dt, a strip, a slab) and adds them with a definite integral ([Topic 8.4](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/), [Topic 8.7](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/)).
- **Average value is an integral divided by a length**, not an average rate of change ([Topic 8.1](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/)).
- **The integral of a rate is a net change.** Greatest and least amounts occur where the net rate changes sign, or at an endpoint ([Topic 8.3](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/)).
- **Motion is a special case**: ∫ v dt is displacement and ∫ |v| dt is total distance ([Topic 8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/)).
- **Area is top minus bottom, or right minus left.** Pick the strip direction that needs one integral ([Topic 8.5](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/)). Split where curves cross, or integrate |f − g| ([Topic 8.6](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/)).
- **Known cross sections use the segment length s**: squares s², semicircles on a diameter (π/8)s², equilateral triangles (√3/4)s² ([Topic 8.8](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/)).
- **Solids of revolution are cross sections too**: discs πr² ([Topic 8.9](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/)), washers π(R² − r²) ([Topic 8.11](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/)).
- **Every radius is a distance to the axis**, for example 1 + f(x) for the line y = −1 ([Topic 8.10](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/), [Topic 8.12](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/)).
- **BC only: arc length adds tiny straight pieces**, each of length √(1 + (f′(x))²) dx ([Topic 8.13](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/)).

## Key relationships and methods

| You see or need | What to write | Topics |
|---|---|---|
| Average value of f on [a, b] | (1/(b − a)) ∫ (a to b) f(x) dx | 8.1 |
| Position at time b | x(a) + ∫ (a to b) v(t) dt | 8.2 |
| Total distance | ∫ (speed) dt: split where v changes sign | 8.2 |
| Amount at time b | Starting amount + ∫ (in − out) dt | 8.3 |
| Greatest or least amount | Compare endpoints and times where the net rate changes sign | 8.3 |
| Area, vertical strips | ∫ (top − bottom) dx | 8.4 |
| Area, horizontal strips | ∫ (right − left) dy | 8.5 |
| Curves cross inside the interval | Split at each crossing | 8.6 |
| Known cross sections | ∫ (area of one slice) | 8.7, 8.8 |
| Discs / washers | π ∫ r², π ∫ (R² − r²), radii measured from the axis | 8.9–8.12 |
| Arc length (BC only) | ∫ √(1 + (f′(x))²) dx | 8.13 |

## Question 1 (multiple choice · mixed)

A particle moves along a line with velocity v(t) = 3t² − 12t for 0 ≤ t ≤ 5. What is its average speed over this interval?

- (A) 39/5
- (B) 5
- (C) 15/2
- (D) 39

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Average speed is the average value of |v|: total distance ÷ time. v = 3t(t − 4) changes sign at t = 4. ∫ (0 to 4) v dt = −32 and ∫ (4 to 5) v dt = 7, so the distance is 32 + 7 = 39 and the average speed is 39/5.

- (B) is |average velocity| = 25/5; the two parts of the trip cancel.
- (C) averages the end speeds, |v(0)| = 0 and |v(5)| = 15.
- (D) is not divided by the time.

Topics: 8.1, 8.2.
</details>

## Question 2 (multiple choice · mixed)

The base of a solid is the region between the graphs of y = sin x and y = cos x for 0 ≤ x ≤ π. Cross sections perpendicular to the x-axis are squares. What is the volume?

- (A) 2
- (B) 8
- (C) π
- (D) 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The side is |sin x − cos x|. The curves cross at x = π/4, but squaring removes the sign, so no split is needed: s² = (sin x − cos x)² = 1 − 2 sin x cos x = 1 − sin 2x. V = ∫ (0 to π) (1 − sin 2x) dx = π − 0 = π.

- (A) is ∫ (0 to π) (sin x − cos x) dx, with no square.
- (B) squares the total base area, (2√2)², instead of each slice.
- (D) squares each curve separately: ∫ (sin²x − cos²x) dx.

Topics: 8.6, 8.7.
</details>

## Question 3 (multiple choice · mixed)

The region bounded by y = 4 − x² and the x-axis is revolved around the line y = −1. What is the volume?

- (A) 512π/15
- (B) 452π/15
- (C) 892π/15
- (D) 832π/15

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** There is a gap between the axis and the region, so use washers. Measured from y = −1: R(x) = 4 − x² + 1 = 5 − x² and r(x) = 0 + 1 = 1, for −2 ≤ x ≤ 2. V = π ∫ (−2 to 2) [(5 − x²)² − 1] dx = π(96 − 160/3 + 64/5) = 832π/15.

- (A) revolves around the x-axis.
- (B) subtracts the hole but does not shift the outer radius.
- (C) uses discs of radius 5 − x² and forgets the hole.

Topics: 8.9, 8.10, 8.12.
</details>

## Question 4 (constructed response · mixed)

A particle moves along the x-axis with velocity v(t) = t² − 6t + 8 cm per second, for 0 ≤ t ≤ 5. At t = 0 it is at x = −3.

(a) Find the times when the particle changes direction. Justify.
(b) Find the position of the particle at t = 5.
(c) Find the total distance travelled over 0 ≤ t ≤ 5.
(d) Find the particle's rightmost position on 0 ≤ t ≤ 5. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v(t) = (t − 2)(t − 4). v > 0 on [0, 2), v < 0 on (2, 4) and v > 0 on (4, 5]. v changes sign at both zeros, so the particle **changes direction at t = 2 and t = 4**.

**(b)** x(5) = −3 + ∫ (0 to 5) (t² − 6t + 8) dt = −3 + (125/3 − 75 + 40) = −3 + 20/3 = **11/3 cm**.

**(c)** Split at the sign changes: ∫ (0 to 2) v dt = 20/3, ∫ (2 to 4) v dt = −4/3 and ∫ (4 to 5) v dt = 4/3. Distance = 20/3 + 4/3 + 4/3 = **28/3 cm**.

**(d)** Candidates are the endpoints and t = 2, where v changes from positive to negative. x(0) = −3, x(2) = 11/3 and x(5) = 11/3. The rightmost position is **x = 11/3**, reached at t = 2 and again at t = 5.

| Point | What earns it |
|---|---|
| 1 | t = 2 and t = 4, with the sign change of v shown |
| 1 | x(5) = 11/3, using the initial position |
| 1 | Integral split at t = 2 and t = 4 (or speed integrated) |
| 1 | Distance 28/3 |
| 1 | Candidates x(0), x(2), x(5) compared |
| 1 | Rightmost x = 11/3 at t = 2 and t = 5 |

Total: 6 points. Topics: 8.2, 8.3.
</details>

## Question 5 (constructed response · mixed)

R is the region enclosed by y = x² and y = 4x − 3.

(a) Find the points where the graphs meet, and find the area of R.
(b) R is the base of a solid whose cross sections perpendicular to the x-axis are squares. Find its volume.
(c) Write, but do not evaluate, an integral for the volume when R is revolved around the line y = 9.
(d) R is revolved around the y-axis. Write an integral in y for the volume and evaluate it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x² = 4x − 3 gives (x − 1)(x − 3) = 0, so the graphs meet at **(1, 1) and (3, 9)**. At x = 2 the line (5) is above the parabola (4). Area = ∫ (1 to 3) (4x − 3 − x²) dx = **4/3**.

**(b)** s(x) = 4x − 3 − x². V = ∫ (1 to 3) (4x − 3 − x²)² dx = **16/15**.

**(c)** The axis y = 9 is above R, so the lower curve, y = x², is farther away. R(x) = 9 − x² and r(x) = 9 − (4x − 3) = 12 − 4x:

V = π ∫ (1 to 3) [(9 − x²)² − (12 − 4x)²] dx. (It evaluates to 176π/15.)

**(d)** In y, the curve is x = √y and the line is x = (y + 3)/4, for 1 ≤ y ≤ 9. At y = 4 these give 2 and 7/4, so the curve is farther from the y-axis: R(y) = √y and r(y) = (y + 3)/4.

V = π ∫ (1 to 9) [y − (y + 3)²/16] dy = π[(81/2 − 36) − (1/2 − 4/3)] = **16π/3**.

| Point | What earns it |
|---|---|
| 1 | Intersections (1, 1) and (3, 9), and the line identified as the top |
| 1 | Area 4/3 |
| 1 | Volume 16/15 from ∫ s(x)² dx |
| 1 | R(x) = 9 − x² and r(x) = 12 − 4x, with a reason |
| 1 | Correct integral for (c), with π, limits and dx |
| 1 | Both boundaries as x in terms of y, with limits 1 and 9 |
| 1 | R(y) = √y, r(y) = (y + 3)/4, and the volume 16π/3 |

Total: 7 points. Topics: 8.4, 8.5, 8.7, 8.11, 8.12.
</details>

## Question 6 (constructed response · mixed)

*Calculator allowed.* A building site keeps a pile of sand. For 0 ≤ t ≤ 8 hours, lorries add sand at a rate A(t) = 40t e^(−t/2) tonnes per hour, and a loader removes sand at a constant 10 tonnes per hour. At t = 0 the pile holds 50 tonnes. Let P(t) be the amount of sand in the pile.

(a) How much sand is added during the 8 hours?
(b) Find the average rate at which sand is added over 0 ≤ t ≤ 8.
(c) Is the amount of sand increasing or decreasing at t = 6? Give a reason.
(d) Find P(8).
(e) Find the greatest amount of sand in the pile on 0 ≤ t ≤ 8. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ (0 to 8) 40t e^(−t/2) dt = **145.347 tonnes** (exactly 160 − 800e^(−4)).

**(b)** Average rate = (1/8) × 145.347… = **18.168 tonnes per hour**.

**(c)** P′(6) = A(6) − 10 = 1.949 > 0, so the amount is **increasing**.

**(d)** P(8) = 50 + ∫ (0 to 8) (A(t) − 10) dt = 50 + 145.347 − 80 = **115.347 tonnes**.

**(e)** P′(t) = A(t) − 10 = 0 at t = c₁ ≈ 0.289 and t = c₂ ≈ 6.523. P′ changes from positive to negative only at c₂, so c₂ is the only interior candidate for a maximum. Compare P(0) = 50, P(c₂) = 50 + ∫ (0 to c₂) (A(t) − 10) dt = 118.634 and P(8) = 115.347. The greatest amount is **118.634 tonnes**, at t ≈ 6.523 hours.

| Point | What earns it |
|---|---|
| 1 | 145.347 tonnes from the integral of A |
| 1 | 18.168 tonnes per hour, dividing by 8 |
| 1 | Increasing, with P′(6) = A(6) − 10 > 0 |
| 1 | P(8) = 50 + ∫ (A − 10) dt = 115.347 |
| 1 | P′ = 0 at t ≈ 6.523, with the sign change from + to − |
| 1 | Endpoints compared and 118.634 tonnes |

Total: 6 points. Topics: 8.1, 8.3.
</details>

## Question 7 (constructed response · mixed)

R is the region bounded by y = sec x and the x-axis, for −π/4 ≤ x ≤ π/4.

(a) R is revolved around the x-axis. Find the volume.
(b) A second solid has base R, and its cross sections perpendicular to the x-axis are semicircles with diameters in R. Find its volume, and explain why it is exactly 1/8 of your answer to (a).
(c) A third solid has base R, and its cross sections perpendicular to the x-axis are isosceles right triangles with one leg in R. Find its volume.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** V = π ∫ (−π/4 to π/4) sec²x dx = π[tan x] (−π/4 to π/4) = π(1 − (−1)) = **2π**.

**(b)** A semicircle with diameter s = sec x has area (π/8)sec²x, so V = (π/8) × 2 = **π/4**. The disc at the same x has area π sec²x, eight times as much. Every slice is 1/8 of its disc, so the volume is 1/8 too.

**(c)** An isosceles right triangle with leg s has area s²/2, so V = (1/2) ∫ sec²x dx = (1/2)(2) = **1**.

| Point | What earns it |
|---|---|
| 1 | π ∫ sec²x dx with correct limits |
| 1 | Volume 2π |
| 1 | Semicircle area (π/8)s² and volume π/4 |
| 1 | Explanation comparing slice areas at the same x |
| 1 | Volume 1 from area s²/2 |

Total: 5 points. Topics: 8.8, 8.9.
</details>

## Question 8 (constructed response · mixed) (BC only)

A flower bed is the region between the curve y = 4 − x²/4 and the x-axis, with x and y in metres. A gardener puts edging along the curved side and along the straight side.

(a) Find the area of the bed.
(b) Find the average height of the curved edge above the x-axis.
(c) *Calculator allowed.* Write an integral for the length of the curved edge, and find the total length of edging needed.
(d) Without a calculator, show that the curved edge is between 8√2 m and 8√5 m long.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The curve meets the x-axis at x = ±4. Area = ∫ (−4 to 4) (4 − x²/4) dx = 32 − 32/3 = **64/3 m²**.

**(b)** Average height = (1/8)(64/3) = **8/3 m**.

**(c)** f′(x) = −x/2, so the length is ∫ (−4 to 4) √(1 + x²/4) dx = 11.832 m. With the straight side of 8 m, the total is **19.832 m**.

**(d)** Lower bound: the chords from (−4, 0) to (0, 4) and from (0, 4) to (4, 0) each have length 4√2. A curve is at least as long as its chord, so L ≥ 8√2 ≈ 11.31. Upper bound: |f′(x)| ≤ 2 on [−4, 4], so √(1 + (f′(x))²) ≤ √5 and L ≤ 8√5 ≈ 17.89.

| Point | What earns it |
|---|---|
| 1 | Limits ±4 and area 64/3 m² |
| 1 | Average height 8/3 m |
| 1 | Arc length integral with f′(x) = −x/2 squared |
| 1 | 11.832 m and a total of 19.832 m |
| 1 | Lower bound from the two chords |
| 1 | Upper bound from the largest slope, 2 in size |

Total: 6 points. Topics: 8.1, 8.4, 8.13 (BC only).
</details>

## How did you do?

Add up your points from Questions 4 to 7 (24 in total; 30 for BC students who also did Question 8) and your correct answers to Questions 1 to 3. The total is a guide, not a predicted exam score. More useful: note **which topics** your lost points came from, then work through those topic checklists:

[8.1](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-checklist/) ·
[8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-checklist/) ·
[8.3](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-checklist/) ·
[8.4](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-checklist/) ·
[8.5](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-checklist/) ·
[8.6](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-checklist/) ·
[8.7](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-checklist/) ·
[8.8](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-checklist/) ·
[8.9](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-checklist/) ·
[8.10](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-checklist/) ·
[8.11](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-checklist/) ·
[8.12](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-checklist/) ·
[8.13 (BC only)](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-checklist/)

If many topics need work, use the "Your next step" table in the [Unit 8 diagnostic](/advanced-course-resources/calculus-ab/unit-8-diagnostic/) to choose where to start.
