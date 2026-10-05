---
resourceId: "mb-ap-calcab-u8-diagnostic"
title: "Applications of Integration: Unit Diagnostic (Calculus AB Unit 8)"
description: "Thirteen short original questions, one per topic of Applications of Integration, to show which topics you should revisit, with explanations and links."
course: "calculus-ab"
unit: 8
topics: []
resourceType: "unit-diagnostic"
calculusScope: "ab-and-bc"
prerequisites:
  - "Antiderivatives and the Fundamental Theorem of Calculus from Unit 6"
  - "Solving polynomial equations to find where two graphs meet"
learningObjectives:
  - "Find out which Unit 8 topics are secure and which need more work"
  - "Check average value, motion, accumulation, area and volume set-ups quickly"
  - "Practise short written set-ups for accumulation, cross-section and washer questions"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave π, e, ln and surds in exact answers; no constants or data beyond those in each question are needed."
related: ["mb-ap-calcab-u8-review", "mb-ap-calcab-8.3-study-guide", "mb-ap-calcab-8.6-study-guide", "mb-ap-calcab-8.12-study-guide"]
next: "mb-ap-calcab-u8-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Use this before revising Unit 8, to decide which of the 13 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
  - "Shared diagnostic for Calculus AB and Calculus BC students; Question 13 (arc length) is for BC students only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** Use this diagnostic to find which topics of Unit 8, Applications of Integration, to revisit. There is one question per topic. These are **original Marlbridge practice questions**, not past exam questions; contexts are invented. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening the answers. The unit is shared by Calculus AB and Calculus BC: Questions 1 to 12 are for both courses, and **Question 13 is BC only** (Topic 8.13, arc length).

## Question 1 (multiple choice · 8.1)

What is the average value of f(x) = cos x on the interval [0, π/3]?

- (A) √3/2
- (B) 3√3/(2π)
- (C) −3/(2π)
- (D) 3/4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f_avg = (3/π) ∫ (0 to π/3) cos x dx = (3/π)(√3/2) = 3√3/(2π), about 0.827.

- (A) forgets to divide by the length π/3.
- (C) is the average rate of change, (cos(π/3) − cos 0)/(π/3).
- (D) averages the two end values, which works only for linear functions.

**If you missed this:** [Topic 8.1 study guide](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/).
</details>

## Question 2 (multiple choice · 8.2)

A particle moves along a line with velocity v(t) = t² − 4t + 3 for 0 ≤ t ≤ 3. At t = 0 it is at x = 2. What is the total distance it travels over 0 ≤ t ≤ 3?

- (A) 0
- (B) 4/3
- (C) 2
- (D) 8/3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** v(t) = (t − 1)(t − 3) changes sign at t = 1, so split there: ∫ (0 to 1) v dt = 4/3 and ∫ (1 to 3) v dt = −4/3. Total distance = 4/3 + 4/3 = 8/3.

- (A) is the displacement; forward and backward parts cancel.
- (B) counts only the first part.
- (C) is the final position x(3) = 2 + 0.

**If you missed this:** [Topic 8.2 study guide](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/).
</details>

## Question 3 (short answer · 8.3)

The volume of water in a reservoir is V(t) thousand cubic metres, t days after a storm, for 0 ≤ t ≤ 8. V(0) = 200, and V changes at the rate r(t) = 30 − 6t thousand m³ per day.

(a) Find V(8).
(b) Find the greatest volume on 0 ≤ t ≤ 8. Justify.
(c) Find ∫ (5 to 8) r(t) dt and explain its meaning in context.

<details>
<summary>Worked answer</summary>

**(a)** V(8) = 200 + ∫ (0 to 8) (30 − 6t) dt = 200 + (240 − 192) = **248 thousand m³**.

**(b)** r changes from positive to negative at t = 5, so V rises then falls. Candidates: V(0) = 200, V(5) = 275 and V(8) = 248. The greatest volume is **275 thousand m³, at t = 5**.

**(c)** ∫ (5 to 8) (30 − 6t) dt = **−27**: from day 5 to day 8, the volume of water fell by 27 thousand cubic metres. It is a net change, not an amount.

**If you missed this:** [Topic 8.3 study guide](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/).
</details>

## Question 4 (multiple choice · 8.4)

What is the area of the region enclosed by y = √x and y = x³?

- (A) 5/12
- (B) −5/12
- (C) 11/12
- (D) 2/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The curves meet at x = 0 and x = 1, and √x is on top between them (test x = 1/4). Area = ∫ (0 to 1) (√x − x³) dx = 2/3 − 1/4 = 5/12.

- (B) subtracts top from bottom.
- (C) adds the curves instead of subtracting.
- (D) is the area under √x only; it forgets the bottom curve.

**If you missed this:** [Topic 8.4 study guide](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/).
</details>

## Question 5 (multiple choice · 8.5)

R is the region bounded by y = √x, the line y = x − 2 and the x-axis. Using horizontal strips, what is the area of R?

- (A) 10/3
- (B) 9/2
- (C) 16/3
- (D) −10/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** As x in terms of y, the curve is x = y² (left) and the line is x = y + 2 (right). They meet where y² = y + 2, at y = 2 (y = −1 is below the x-axis). Area = ∫ (0 to 2) [(y + 2) − y²] dy = 10/3, one integral where vertical strips need two.

- (B) uses −1 to 2 as limits, ignoring the x-axis.
- (C) is the area under √x from 0 to 4, triangle included.
- (D) uses left minus right.

**If you missed this:** [Topic 8.5 study guide](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/).
</details>

## Question 6 (multiple choice · 8.6)

What is the total area of the regions enclosed by y = x³ − x and y = 3x?

- (A) 0
- (B) 4
- (C) 8
- (D) −4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** x³ − x = 3x gives x(x² − 4) = 0: crossings at x = −2, 0 and 2. ∫ (−2 to 0) (x³ − 4x) dx = 4 and ∫ (0 to 2) (x³ − 4x) dx = −4. Area = 4 + 4 = 8.

- (A) is the net integral; the pieces cancel.
- (B) finds only one region.
- (D) is one region with bottom minus top.

**If you missed this:** [Topic 8.6 study guide](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/).
</details>

## Question 7 (multiple choice · 8.7)

The base of a solid is the region bounded by y = 2√x, the line y = 4 and the y-axis. Cross sections perpendicular to the **y-axis** are squares. What is the volume?

- (A) 16/3
- (B) 32
- (C) 64/5
- (D) 64π/5

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Slices perpendicular to the y-axis are horizontal, so work in y. The curve is x = y²/4, so the side is s(y) = y²/4. V = ∫ (0 to 4) (y²/4)² dy = (1/16)(4⁵/5) = 64/5.

- (A) is the base area; the side is not squared.
- (B) slices across x with side 2√x: wrong direction and wrong region.
- (D) adds π, which squares do not have.

**If you missed this:** [Topic 8.7 study guide](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/).
</details>

## Question 8 (short answer · 8.8)

The base of a solid is the region R enclosed by y = 3x − x² and y = x.

(a) Find the limits of integration and the length s(x) of a vertical segment across R.
(b) Cross sections perpendicular to the x-axis are semicircles with diameters in R. Find the volume.
(c) Cross sections perpendicular to the x-axis are instead isosceles right triangles, each with its hypotenuse in R. Find the volume.

<details>
<summary>Worked answer</summary>

**(a)** 3x − x² = x gives **x = 0 and x = 2**. The parabola is on top, so **s(x) = 2x − x²**.

**(b)** A semicircle with diameter s has area (1/2)π(s/2)² = (π/8)s². ∫ (0 to 2) (2x − x²)² dx = 16/15, so V = (π/8)(16/15) = **2π/15**.

**(c)** Each leg is s/√2, so the area is s²/4 and V = (1/4)(16/15) = **4/15**.

Using s as the radius gives 8π/15, four times too big.

**If you missed this:** [Topic 8.8 study guide](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/).
</details>

## Question 9 (multiple choice · 8.9)

The region bounded by y = ln x, the y-axis, the x-axis and the line y = 1 is revolved around the y-axis. What is the volume?

- (A) π(e − 1)
- (B) π(e² − 1)/2
- (C) π(e − 2)
- (D) (e² − 1)/2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The axis is vertical, so work in y. The radius is x = eʸ. V = π ∫ (0 to 1) (eʸ)² dy = π[e^(2y)/2] (0 to 1) = π(e² − 1)/2.

- (A) forgets to square the radius.
- (C) is π ∫ (1 to e) (ln x)² dx, discs about the x-axis.
- (D) forgets π.

**If you missed this:** [Topic 8.9 study guide](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/).
</details>

## Question 10 (multiple choice · 8.10)

The region bounded by y = 1/x, the line y = 1/2 and the line x = 1 is revolved around the line y = 1/2. What is the volume?

- (A) π/2
- (B) π/4
- (C) π(3/4 − ln 2)
- (D) π(3/4 + ln 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The curve meets y = 1/2 at x = 2, and the radius is 1/x − 1/2. V = π ∫ (1 to 2) (1/x − 1/2)² dx = π ∫ (1 to 2) (1/x² − 1/x + 1/4) dx = π(1/2 − ln 2 + 1/4) = π(3/4 − ln 2), about 0.179.

- (A) uses radius 1/x, as if spinning about the x-axis.
- (B) squares each term separately.
- (D) loses the minus sign on the middle term.

**If you missed this:** [Topic 8.10 study guide](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/).
</details>

## Question 11 (multiple choice · 8.11)

The region enclosed by y = x and y = √x is revolved around the y-axis. What is the volume?

- (A) 2π/15
- (B) π/30
- (C) π/6
- (D) 2/15

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Work in y. For 0 < y < 1, x = y is farther from the axis than x = y², so R(y) = y and r(y) = y². V = π ∫ (0 to 1) (y² − y⁴) dy = π(1/3 − 1/5) = 2π/15.

- (B) uses π(R − r)² instead of π(R² − r²).
- (C) revolves around the x-axis.
- (D) forgets π.

**If you missed this:** [Topic 8.11 study guide](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/).
</details>

## Question 12 (short answer · 8.12)

The region enclosed by y = 2x and y = x² is revolved around the line x = 3.

(a) Write each boundary as x in terms of y, and say which is on the left.
(b) Find R(y) and r(y), with a reason.
(c) Write and evaluate an integral for the volume.

<details>
<summary>Worked answer</summary>

**(a)** x = y/2 and x = √y, for 0 ≤ y ≤ 4. At y = 1 these give 1/2 and 1, so **x = y/2 is on the left**.

**(b)** The axis x = 3 is to the right, so the left curve is farther away: **R(y) = 3 − y/2** and **r(y) = 3 − √y**.

**(c)** V = π ∫ (0 to 4) [(3 − y/2)² − (3 − √y)²] dy = π ∫ (0 to 4) (6√y − 4y + y²/4) dy = π(32 − 32 + 16/3) = **16π/3**.

If you got −16π/3, you swapped R and r.

**If you missed this:** [Topic 8.12 study guide](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/).
</details>

## Question 13 (multiple choice · 8.13) (BC only)

Which integral gives the length of the curve y = e^(2x) from x = 0 to x = ln 2?

- (A) ∫ (0 to ln 2) √(1 + 4e^(4x)) dx
- (B) ∫ (0 to ln 2) √(1 + e^(4x)) dx
- (C) ∫ (0 to ln 2) √(1 + 2e^(2x)) dx
- (D) ∫ (1 to 4) √(1 + 4e^(4x)) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The length is ∫ √(1 + (f′(x))²) dx, with f′(x) = 2e^(2x), so (f′(x))² = 4e^(4x). (Its value is about 3.091.)

- (B) drops the chain rule factor 2.
- (C) forgets to square f′(x).
- (D) uses the y-values 1 and 4 as limits of a dx integral.

**If you missed this:** [Topic 8.13 study guide](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/).
</details>

## Your next step

| Topic | Question | If you missed it, read |
|---|---|---|
| 8.1 Average value | 1 | [Guide 8.1](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/) |
| 8.2 Motion with integrals | 2 | [Guide 8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/) |
| 8.3 Accumulation in context | 3 | [Guide 8.3](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/) |
| 8.4 Area, functions of x | 4 | [Guide 8.4](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/) |
| 8.5 Area, functions of y | 5 | [Guide 8.5](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/) |
| 8.6 Curves meeting more than twice | 6 | [Guide 8.6](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/) |
| 8.7 Squares and rectangles | 7 | [Guide 8.7](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/) |
| 8.8 Triangles and semicircles | 8 | [Guide 8.8](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/) |
| 8.9 Discs about the axes | 9 | [Guide 8.9](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/) |
| 8.10 Discs about other lines | 10 | [Guide 8.10](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/) |
| 8.11 Washers about the axes | 11 | [Guide 8.11](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/) |
| 8.12 Washers about other lines | 12 | [Guide 8.12](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/) |
| 8.13 Arc length (BC only) | 13 | [Guide 8.13](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky or gap.
- **Fix gaps in Topics 8.3 and 8.4 first.** Net change (8.3) and "top minus bottom" (8.4) sit under every later topic.
- **Look for a pattern in Questions 7 to 12**: the wrong variable, a missing square or R and r swapped.
- **Check your reasons** in Questions 3, 8 and 12, not just the values.
- **For a gap**, read the guide, then do its practice set.
- **Then try the [Unit 8 mixed review](/advanced-course-resources/calculus-ab/unit-8-review/)**, which combines topics.
