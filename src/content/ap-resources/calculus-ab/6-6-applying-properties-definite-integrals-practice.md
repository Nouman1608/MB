---
resourceId: "mb-ap-calcab-6.6-practice"
title: "Applying Properties of Definite Integrals: Practice Questions (Calculus AB 6.6)"
description: "Seven original Marlbridge practice questions on evaluating definite integrals with geometry and integral properties, including jumps and holes, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Areas of triangles, trapezoids and circles"
prerequisiteResources: ["mb-ap-calcab-6.6-study-guide"]
learningObjectives:
  - "Evaluate definite integrals using geometry and signed area"
  - "Combine given integral values with the properties of definite integrals"
  - "Integrate functions with removable or jump discontinuities and explain why this is valid"
  - "Tell true properties of integrals apart from false ones"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers, using π where it appears."
related: ["mb-ap-calcab-6.6-study-guide", "mb-ap-calcab-6.6-revision-notes", "mb-ap-calcab-6.6-checklist"]
next: "mb-ap-calcab-6.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written reasoning."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers, and no antiderivatives (use geometry and the properties of definite integrals). Notation: ∫ (a to b) f(x) dx means the definite integral of f from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

f is continuous, ∫ (1 to 6) f(x) dx = 8 and ∫ (1 to 4) f(x) dx = 11. What is ∫ (6 to 4) 2f(x) dx?

- (A) −6
- (B) 6
- (C) 3
- (D) 38

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Adjacent intervals: ∫ (4 to 6) f = ∫ (1 to 6) f − ∫ (1 to 4) f = 8 − 11 = −3. Reverse the limits: ∫ (6 to 4) f = 3. Take out the constant: ∫ (6 to 4) 2f = 2 × 3 = 6.

- (A) is 2 ∫ (4 to 6) f. It forgets that the limits run from 6 down to 4.
- (C) is ∫ (6 to 4) f. It forgets the factor 2.
- (D) adds the two given integrals instead of subtracting: 2(8 + 11).
</details>

## Question 2 (multiple choice · core)

What is ∫ (−4 to 0) [√(16 − x²) + 3] dx?

- (A) 4π + 3
- (B) 4π + 12
- (C) 8π + 12
- (D) 16π + 12

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Split the sum. On [−4, 0], y = √(16 − x²) is a quarter circle of radius 4, area (1/4)π(4²) = 4π. ∫ (−4 to 0) 3 dx is a rectangle 3 high and 4 wide, area 12. Total: 4π + 12.

- (A) adds 3 instead of 3 × (width 4).
- (C) uses a semicircle. From −4 to 0 is only a quarter of the circle.
- (D) uses the whole circle.
</details>

## Question 3 (multiple choice · core)

Let f(x) = 2 for x < 3 and f(x) = x for x ≥ 3. What is ∫ (0 to 5) f(x) dx?

- (A) 10
- (B) 25/2
- (C) 14
- (D) It does not exist, because f is not continuous on [0, 5].

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f has a jump at x = 3, so split there. ∫ (0 to 3) 2 dx = 6 (a rectangle). ∫ (3 to 5) x dx is a trapezoid with parallel sides 3 and 5 and width 2: (1/2)(3 + 5)(2) = 8. Total: 14.

- (A) uses f = 2 on the whole interval.
- (B) uses f = x on the whole interval: a triangle with area (1/2)(5)(5).
- (D) is false. A bounded function with a jump discontinuity still has a definite integral; you split at the jump.
</details>

## Question 4 (multiple choice · core)

f and g are continuous on an interval containing a, b and c. Which statement **must** be true?

- (A) ∫ (a to b) f(x)g(x) dx = (∫ (a to b) f(x) dx)(∫ (a to b) g(x) dx)
- (B) ∫ (a to b) [f(x) + 3] dx = ∫ (a to b) f(x) dx + 3
- (C) ∫ (a to b) f(x) dx + ∫ (b to c) f(x) dx = ∫ (a to c) f(x) dx
- (D) ∫ (a to b) |f(x)| dx = |∫ (a to b) f(x) dx|

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** This is the adjacent-interval property. It holds for any order of a, b and c.

- (A) fails for f(x) = g(x) = x on [0, 2]: the left side is 8/3, the right side is 2 × 2 = 4. There is no product rule for integrals.
- (B) fails for f(x) = 0 on [0, 2]: the left side is ∫ (0 to 2) 3 dx = 6, the right side is 3. The constant must be multiplied by the width.
- (D) fails for f(x) = x on [−1, 1]: total area 1, but net area 0.
</details>

## Question 5 (graph · core)

<figure>
<svg viewBox="0 0 520 250" role="img" aria-labelledby="p66-title p66-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p66-title">Graph of f for Question 5, with jumps at x = 4 and x = 6 and a moved point at x = 7</title>
<desc id="p66-desc">On 0 ≤ x &lt; 4 the graph is a semicircle of radius 2 above the x-axis, centred at (2, 0), ending at an open circle at (4, 0). On 4 ≤ x &lt; 6 it is a horizontal segment at height −2, from a filled point at (4, −2) to an open circle at (6, −2). On 6 ≤ x ≤ 8 it is a straight line from a filled point at (6, −1) to (8, 1), with an open circle at (7, 0) and a separate filled point at (7, 3). The semicircle region and the small triangle from 7 to 8 are hatched (above the axis). The rectangle from 4 to 6 and the small triangle from 6 to 7 are dotted (below the axis).</desc>
<rect x="0" y="0" width="520" height="250" fill="#ffffff"/>
<defs><pattern id="p66-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="p66-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="70.0,130.0 75.0,108.1 80.0,99.5 85.0,93.1 90.0,88.0 95.0,83.7 100.0,80.0 105.0,76.8 110.0,74.0 115.0,71.5 120.0,69.4 125.0,67.5 130.0,65.8 135.0,64.4 140.0,63.2 145.0,62.2 150.0,61.4 155.0,60.8 160.0,60.4 165.0,60.1 170.0,60.0 175.0,60.1 180.0,60.4 185.0,60.8 190.0,61.4 195.0,62.2 200.0,63.2 205.0,64.4 210.0,65.8 215.0,67.5 220.0,69.4 225.0,71.5 230.0,74.0 235.0,76.8 240.0,80.0 245.0,83.7 250.0,88.0 255.0,93.1 260.0,99.5 265.0,108.1 270.0,130.0" fill="url(#p66-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="270,130 270,200 370,200 370,130" fill="url(#p66-dots)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="370,130 370,165 420,130" fill="url(#p66-dots)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="420,130 470,95 470,130" fill="url(#p66-hatch)" stroke="#1d2b44" stroke-width="1"/>
<line x1="50" y1="130" x2="500" y2="130" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="225" x2="70" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<text x="504" y="126" font-size="12" fill="#1d2b44">x</text><text x="76" y="19" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="120" y1="126" x2="120" y2="134"/><line x1="170" y1="126" x2="170" y2="134"/><line x1="220" y1="126" x2="220" y2="134"/><line x1="270" y1="126" x2="270" y2="134"/><line x1="320" y1="126" x2="320" y2="134"/><line x1="370" y1="126" x2="370" y2="134"/><line x1="420" y1="126" x2="420" y2="134"/><line x1="470" y1="126" x2="470" y2="134"/><line x1="66" y1="200" x2="74" y2="200"/><line x1="66" y1="165" x2="74" y2="165"/><line x1="66" y1="95" x2="74" y2="95"/><line x1="66" y1="60" x2="74" y2="60"/><line x1="66" y1="25" x2="74" y2="25"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="120" y="147">1</text><text x="170" y="147">2</text><text x="220" y="147">3</text><text x="270" y="122">4</text><text x="320" y="122">5</text><text x="370" y="122">6</text><text x="420" y="147">7</text><text x="470" y="147">8</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="204">−2</text><text x="62" y="169">−1</text><text x="62" y="99">1</text><text x="62" y="64">2</text><text x="62" y="29">3</text></g>
<polyline points="70.0,130.0 75.0,108.1 80.0,99.5 85.0,93.1 90.0,88.0 95.0,83.7 100.0,80.0 105.0,76.8 110.0,74.0 115.0,71.5 120.0,69.4 125.0,67.5 130.0,65.8 135.0,64.4 140.0,63.2 145.0,62.2 150.0,61.4 155.0,60.8 160.0,60.4 165.0,60.1 170.0,60.0 175.0,60.1 180.0,60.4 185.0,60.8 190.0,61.4 195.0,62.2 200.0,63.2 205.0,64.4 210.0,65.8 215.0,67.5 220.0,69.4 225.0,71.5 230.0,74.0 235.0,76.8 240.0,80.0 245.0,83.7 250.0,88.0 255.0,93.1 260.0,99.5 265.0,108.1 270.0,130.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="270" y1="200" x2="370" y2="200" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="370" y1="165" x2="470" y2="95" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="270" cy="130" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="270" cy="200" r="5" fill="#1d2b44"/>
<circle cx="370" cy="200" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="370" cy="165" r="5" fill="#1d2b44"/>
<circle cx="420" cy="130" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="420" cy="25" r="5" fill="#1d2b44"/>
<text x="430" y="29" font-size="12" fill="#1d2b44">(7, 3)</text>
<text x="130" y="48" font-size="13" fill="#1d2b44">y = f(x)</text>
</svg>
<figcaption>Figure for Question 5. Open circles are not on the graph; filled circles are. Hatched regions lie above the x-axis; dotted regions lie below. Axes are unitless.</figcaption>
</figure>

The graph of f on 0 ≤ x ≤ 8 is shown above. It is a semicircle on [0, 4), a horizontal segment on [4, 6) and part of the line y = x − 7 on [6, 8], except that f(7) = 3.

(a) Find ∫ (0 to 8) f(x) dx.
(b) Find ∫ (8 to 4) f(x) dx.
(c) Find ∫ (0 to 6) [3f(x) − 1] dx.
(d) f is not continuous on [0, 8]. Explain why the integral in (a) still exists, and why the value f(7) = 3 does not affect it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Signed areas of the pieces:

- [0, 4]: semicircle of radius 2, area (1/2)π(2²) = **2π**.
- [4, 6]: rectangle 2 wide and 2 deep, below the axis: **−4**.
- [6, 7]: triangle with base 1 and height 1, below: **−1/2**.
- [7, 8]: triangle with base 1 and height 1, above: **+1/2**.

**(a)** 2π − 4 − 1/2 + 1/2 = **2π − 4**.

**(b)** ∫ (4 to 8) f = −4 − 1/2 + 1/2 = −4. Reversing the limits: ∫ (8 to 4) f = **4**.

**(c)** ∫ (0 to 6) f = 2π − 4. So ∫ (0 to 6) [3f − 1] = 3(2π − 4) − 1 × 6 = **6π − 18**.

**(d)** f is bounded and has only finitely many discontinuities, all jumps (at 4 and 6) or a removable one (at 7). Split the integral at 4 and 6 and add the pieces. At x = 7, f differs from the line only at a single point. A point has zero width, so it adds no area.

| Point | What earns it |
|---|---|
| 1 | Correct signed areas of all four pieces, including 2π for the semicircle |
| 1 | (a) 2π − 4 and (b) 4, with the sign change from reversed limits |
| 1 | (c) 6π − 18, multiplying the constant 1 by the width 6 |
| 1 | (d) Splitting at the jumps, and a single point having zero width (no area) |
</details>

## Question 6 (constructed response · core)

f and g are continuous, with

∫ (0 to 3) f(x) dx = 4, ∫ (0 to 7) f(x) dx = −2, ∫ (3 to 7) g(x) dx = 5.

(a) Find ∫ (3 to 7) f(x) dx.
(b) Find ∫ (3 to 7) [4f(x) − g(x)] dx.
(c) Find ∫ (7 to 3) [g(x) + 2] dx.
(d) Find the constant k for which ∫ (0 to 7) [f(x) + k] dx = 12.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ (3 to 7) f = ∫ (0 to 7) f − ∫ (0 to 3) f = −2 − 4 = **−6**.

**(b)** 4(−6) − 5 = **−29**.

**(c)** Reverse the limits: −∫ (3 to 7) [g + 2] = −(5 + 2 × 4) = **−13**. (The width from 3 to 7 is 4.)

**(d)** ∫ (0 to 7) f + k(7 − 0) = −2 + 7k. Set −2 + 7k = 12, so **k = 2**.

| Point | What earns it |
|---|---|
| 1 | (a) −6 using adjacent intervals |
| 1 | (b) −29 using the constant-multiple and difference properties |
| 1 | (c) −13: reversed limits and the constant 2 multiplied by the width 4 |
| 1 | (d) −2 + 7k = 12 and k = 2 |
</details>

## Question 7 (constructed response · stretch)

Let p(x) = |x − 2| − 1.

(a) Find ∫ (−1 to 5) p(x) dx.
(b) Find the total area between the graph of p and the x-axis for −1 ≤ x ≤ 5. Explain why it differs from (a).
(c) Let s(x) = p(x) for x ≠ 2, and s(2) = 10. Find ∫ (−1 to 5) s(x) dx, and justify.
(d) Find the value of c, with c > 3, for which ∫ (1 to c) p(x) dx = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

The graph of p is a V with its point at (2, −1). It crosses the axis where |x − 2| = 1, at x = 1 and x = 3.

**(a)** Three triangles:

- [−1, 1]: above the axis, base 2, height p(−1) = 2, area **+2**.
- [1, 3]: below the axis, base 2, depth 1, area **−1**.
- [3, 5]: above the axis, base 2, height p(5) = 2, area **+2**.

So ∫ (−1 to 5) p = 2 − 1 + 2 = **3**. (Alternative: ∫ |x − 2| = 9/2 + 9/2 = 9, and ∫ 1 dx over width 6 is 6; 9 − 6 = 3.)

**(b)** Total area counts every region as positive: 2 + 1 + 2 = **5**. The integral in (a) is smaller because the region from 1 to 3 lies below the axis and is subtracted.

**(c)** s differs from p only at the single point x = 2. A point has zero width, so it contributes no area, and **∫ (−1 to 5) s = 3**.

**(d)** ∫ (1 to 3) p = −1. For c > 3, the region from 3 to c is a triangle above the axis with base c − 3 and height c − 3, area (c − 3)²/2. Adjacent intervals: −1 + (c − 3)²/2 = 0, so (c − 3)² = 2 and **c = 3 + √2** (about 4.41).

| Point | What earns it |
|---|---|
| 1 | (a) 3, from signed areas or from the alternative split |
| 1 | (b) Total area 5, with the reason that the integral subtracts the region below the axis |
| 1 | (c) 3, because changing one point does not change the integral |
| 1 | (d) −1 + (c − 3)²/2 = 0 and c = 3 + √2 (the root 3 − √2 is rejected because c > 3) |
</details>

## How did you do?

- **Q1 or Q6 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/), and watch reversed limits and constants.
- **Q2 or Q7(a) wrong:** reread "Integrals from geometry" and Worked example 3.
- **Q3, Q5(d) or Q7(c) wrong:** reread "Integrals of functions with jumps and holes" and Worked example 2.
- **Q4 wrong:** reread "What is not a property".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-checklist/).
