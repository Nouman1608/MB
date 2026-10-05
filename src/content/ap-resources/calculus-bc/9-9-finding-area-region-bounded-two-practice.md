---
resourceId: "mb-ap-calcbc-9.9-practice"
title: "Finding the Area of the Region Bounded by Two Polar Curves: Practice Questions (Calculus BC 9.9)"
description: "Seven original Marlbridge practice questions on areas between two polar curves: intersections and the pole, outer and inner curves, regions inside both, and a garden context, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.9"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Polar coordinates (Topic 9.7) and the single-curve polar area formula (Topic 9.8)"
prerequisiteResources: ["mb-ap-calcbc-9.9-study-guide"]
learningObjectives:
  - "Find all intersection points of two polar curves, including the pole"
  - "Set up area integrals for regions inside one polar curve and outside another"
  - "Split a region inside both curves at the intersection angle and justify the choice of curve"
  - "Evaluate polar area integrals exactly by hand and numerically with a calculator, and interpret the result"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–3, 5 and 6: no calculator. Questions 4 and 7: graphing calculator allowed; store intersection angles and give final answers to 3 decimal places."
related: ["mb-ap-calcbc-9.9-study-guide", "mb-ap-calcbc-9.9-revision-notes", "mb-ap-calcbc-9.9-checklist"]
next: "mb-ap-calcbc-9.9-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator for Questions 1–3, 5 and 6; in Questions 4 and 7 a graphing calculator may be used, and decimal answers should be given to 3 decimal places. Notation: "∫ from a to b of f(θ) dθ" is a definite integral. The garden in Question 7 is fictional.

## Question 1 (multiple choice · foundation)

What is the area of the region inside the circle r = 5 and outside the limaçon r = 3 + 2 cos θ?

- (A) 28π
- (B) 14π
- (C) 6π
- (D) 7π

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The limaçon has 1 ≤ r ≤ 5, so it never goes outside the circle (it only touches it at θ = 0). The region is therefore swept for the full turn, 0 ≤ θ ≤ 2π:

Area = ½ ∫ from 0 to 2π of [25 − (3 + 2 cos θ)²] dθ = ½ ∫ from 0 to 2π of (16 − 12 cos θ − 4 cos²θ) dθ = ½(32π − 0 − 4π) = **14π**.

Check: the circle's area is 25π and the limaçon's is ½ ∫ from 0 to 2π of (3 + 2 cos θ)² dθ = 11π. 25π − 11π = 14π. ✓

- (A) leaves out the ½ from the sector area formula.
- (C) squares the gap: ½ ∫ from 0 to 2π of (5 − 3 − 2 cos θ)² dθ = 6π. Each radius must be squared separately.
- (D) integrates only from 0 to π (the top half) and forgets to double.
</details>

## Question 2 (multiple choice · core)

How many distinct points do the curves r = 2 sin θ and r = 2 − 2 sin θ have in common?

- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Solving 2 sin θ = 2 − 2 sin θ gives sin θ = ½, so θ = π/6 and θ = 5π/6, both with r = 1. These are two different points. Now check the pole: r = 2 sin θ is 0 at θ = 0 (and π), and r = 2 − 2 sin θ is 0 at θ = π/2. Both curves pass through the pole, at different angles, so the pole is a third shared point.

- (B) counts only the solutions of the equation and misses the pole.
- (A) keeps only one solution of sin θ = ½. Both π/6 and 5π/6 lie in the range of the circle, 0 ≤ θ ≤ π.
- (D) counts the pole twice, because the circle reaches it at both θ = 0 and θ = π. It is one point.
</details>

## Question 3 (multiple choice · core)

Which expression gives the area of the region inside both r = 3 cos θ and r = √3 sin θ?

- (A) ½ ∫ from 0 to π/3 of 3 sin²θ dθ + ½ ∫ from π/3 to π/2 of 9 cos²θ dθ
- (B) ½ ∫ from 0 to π/3 of 9 cos²θ dθ + ½ ∫ from π/3 to π/2 of 3 sin²θ dθ
- (C) ½ ∫ from 0 to π/3 of (9 cos²θ − 3 sin²θ) dθ
- (D) ½ ∫ from 0 to π/2 of (9 cos²θ − 3 sin²θ) dθ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The curves meet where 3 cos θ = √3 sin θ, so tan θ = √3 and θ = π/3 (r = 3/2). They also share the pole. Test θ = π/6: r = √3 sin θ ≈ 0.866 and r = 3 cos θ ≈ 2.598, so the circle r = √3 sin θ is nearer the pole on [0, π/3]. Past π/3 the circle r = 3 cos θ is nearer (at θ = π/2 it is 0). For a region inside both, use the nearer curve on each piece. The value is 5π/8 − 3√3/4 ≈ 0.665.

- (B) uses the **farther** curve on each piece. Its value, 7π/8 + 3√3/4 ≈ 4.048, is larger than the whole smaller circle (area 3π/4 ≈ 2.356), which is impossible.
- (C) is the area inside r = 3 cos θ and outside r = √3 sin θ for 0 ≤ θ ≤ π/3. That is a different region.
- (D) subtracts all the way to π/2, but past π/3 the "outer" curve is the inner one. It gives the difference of two separate areas, not the shared region.
</details>

## Question 4 (multiple choice · stretch · calculator)

What is the area of the region inside the circle r = 3 sin θ and outside the limaçon r = 2 + cos θ?

- (A) 0.626
- (B) 5.751
- (C) 5.879
- (D) 2.939

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** With a calculator, 3 sin θ = 2 + cos θ at θ = α ≈ 1.0065 and θ = β ≈ 2.7786 (store both). Test θ = π/2: the circle has r = 3 and the limaçon r = 2, so the circle is outer between α and β. Then

Area = ½ ∫ from α to β of [9 sin²θ − (2 + cos θ)²] dθ ≈ **2.939**.

- (A) squares the gap: ½ ∫ from α to β of (3 sin θ − 2 − cos θ)² dθ ≈ 0.626.
- (B) forgets to subtract the inner curve: ½ ∫ from α to β of 9 sin²θ dθ ≈ 5.751.
- (C) leaves out the ½, doubling the answer to ≈ 5.879.
</details>

## Question 5 (calculation · core)

Let R be the region inside the rose r = 2 sin 2θ and outside the circle r = 1.

(a) Find the two angles in the first quadrant where the curves meet.
(b) Write an integral for the area of the part of R in the first quadrant.
(c) Evaluate your integral exactly.
(d) The rose has four congruent petals. Find the total area of R.

<details>
<summary>Worked solution</summary>

**(a)** 2 sin 2θ = 1 gives sin 2θ = ½. With 0 < θ < π/2, 2θ = π/6 or 5π/6, so **θ = π/12 and θ = 5π/12**.

**(b)** At θ = π/4 the rose has r = 2 and the circle r = 1, so the rose is outer between the two angles:
**A₁ = ½ ∫ from π/12 to 5π/12 of (4 sin²2θ − 1) dθ**.

**(c)** Use sin²2θ = ½(1 − cos 4θ): 4 sin²2θ − 1 = 1 − 2 cos 4θ. An antiderivative is θ − ½ sin 4θ.
[θ − ½ sin 4θ] from π/12 to 5π/12 = (5π/12 − ½ sin(5π/3)) − (π/12 − ½ sin(π/3)) = (5π/12 + √3/4) − (π/12 − √3/4) = π/3 + √3/2.
So **A₁ = ½(π/3 + √3/2) = π/6 + √3/4 ≈ 0.957**.

**(d)** Each petal reaches r = 2, beyond the circle, in the same way, so R has four congruent pieces: **Area = 4A₁ = 2π/3 + √3 ≈ 3.826**.

Suggested mark points (4): 1 for both angles π/12 and 5π/12; 1 for the integral with ½, the squares and correct limits; 1 for the exact value π/6 + √3/4; 1 for multiplying by 4 with a reason.

Common errors: ½ ∫ (2 sin 2θ − 1)² dθ (squaring the gap); using 4 sin²2θ = 2 + 2 cos 4θ (wrong identity sign); integrating the rose alone, which gives the whole rose area 2π.
</details>

## Question 6 (constructed response · core)

Let S be the region inside both the circle r = 2 sin θ and the cardioid r = 2 − 2 sin θ (the curves of Question 2).

(a) Find the polar coordinates of the points, other than the pole, where the curves meet.
(b) For 0 ≤ θ ≤ π/6 and for π/6 ≤ θ ≤ π/2, state which curve is nearer the pole. Justify with a test value in each interval.
(c) Using symmetry, write an expression involving integrals for the area of S.
(d) Find the exact area of S.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 2 sin θ = 2 − 2 sin θ gives sin θ = ½: the points are **(1, π/6) and (1, 5π/6)**.

**(b)** At θ = π/12: circle r ≈ 0.518, cardioid r ≈ 1.482, so the **circle** is nearer on [0, π/6]. At θ = π/3: circle r ≈ 1.732, cardioid r ≈ 0.268, so the **cardioid** is nearer on [π/6, π/2].

**(c)** Both curves use only sin θ, so S is symmetric about the y-axis. Double the right-hand half:
**Area = 2[ ½ ∫ from 0 to π/6 of (2 sin θ)² dθ + ½ ∫ from π/6 to π/2 of (2 − 2 sin θ)² dθ ]**
= ∫ from 0 to π/6 of 4 sin²θ dθ + ∫ from π/6 to π/2 of (2 − 2 sin θ)² dθ.

**(d)** First integral: 4 sin²θ = 2 − 2 cos 2θ, so [2θ − sin 2θ] from 0 to π/6 = **π/3 − √3/2**.
Second integral: (2 − 2 sin θ)² = 4 − 8 sin θ + 4 sin²θ = 6 − 8 sin θ − 2 cos 2θ. An antiderivative is 6θ + 8 cos θ − sin 2θ. At π/2: 3π. At π/6: π + 4√3 − √3/2 = π + 7√3/2. Difference: **2π − 7√3/2**.
**Area = π/3 − √3/2 + 2π − 7√3/2 = 7π/3 − 4√3 ≈ 0.402** square units.

| Point | What earns it |
|---|---|
| 1 | Both intersection points (1, π/6) and (1, 5π/6) |
| 1 | Correct nearer curve on each interval, supported by a test value in each |
| 1 | Correct integral expression: nearer curve on each piece, ½ and squares, limits split at π/6 |
| 1 | Correct use of symmetry (factor 2 with the right-hand half) or equivalent full-range set-up |
| 1 | Exact area 7π/3 − 4√3 |

Total: 5 points. Acceptable alternative for (c): without symmetry, ½ ∫ from 0 to π/6 of (2 sin θ)² dθ + ½ ∫ from π/6 to 5π/6 of (2 − 2 sin θ)² dθ + ½ ∫ from 5π/6 to π of (2 sin θ)² dθ, which also gives 7π/3 − 4√3. Using the farther curve on each piece earns neither the (c) points nor the (d) point; it gives 5π/3 + 4√3 − 8 ≈ 4.164, more than the circle's whole area π.
</details>

## Question 7 (constructed response · stretch · calculator)

In a fictional garden plan, distances are in metres and the pole is at a sprinkler. The edge of a flower bed is the limaçon **r = 3 + 2.5 sin θ**, 0 ≤ θ ≤ 2π. The sprinkler wets every point within 4.5 m of it, that is, the region r ≤ 4.5.

(a) Find the values of θ, for 0 ≤ θ ≤ 2π, where the edge of the bed meets the circle r = 4.5.
(b) Find the area of the part of the bed that the sprinkler does **not** reach. Show your integral and justify which curve is outer.
(c) Find the area of the part of the bed that the sprinkler reaches.
(d) The gardener claims that more than 80% of the bed is watered. Is the claim correct? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 3 + 2.5 sin θ = 4.5 gives sin θ = 0.6, so **θ = α ≈ 0.6435** and **θ = β = π − α ≈ 2.4981**.

**(b)** At θ = π/2 the bed edge has r = 5.5 and the circle r = 4.5, so the bed edge is outer for α < θ < β. Elsewhere the bed edge is inside the circle (its r is between 0.5 and 4.5). The dry part is

**½ ∫ from α to β of [ (3 + 2.5 sin θ)² − 4.5² ] dθ ≈ 5.966 m²**.

**(c)** Area of the whole bed = ½ ∫ from 0 to 2π of (3 + 2.5 sin θ)² dθ = 97π/8 ≈ 38.092 m². Watered part ≈ 38.092 − 5.966 = **32.126 m²**.

**(d)** 32.126 ÷ 38.092 ≈ 0.843, so about **84.3%** of the bed is watered. That is more than 80%, so the claim is **correct**.

| Point | What earns it |
|---|---|
| 1 | Both angles, α ≈ 0.6435 and β ≈ 2.4981 (or sin θ = 0.6 with both solutions) |
| 1 | Integral ½ ∫ from α to β of [(3 + 2.5 sin θ)² − 4.5²] dθ, with the outer curve justified by a test value |
| 1 | Dry area 5.966 m², with units |
| 1 | Watered area 32.126 m² |
| 1 | Correct conclusion supported by the percentage (or by comparing 32.126 with 0.8 × 38.092 ≈ 30.473) |

Total: 5 points. Acceptable alternative for (c): ½ ∫ from 0 to α of (3 + 2.5 sin θ)² dθ + ½ ∫ from α to β of 4.5² dθ + ½ ∫ from β to 2π of (3 + 2.5 sin θ)² dθ ≈ 32.126 m². A correct (c) or (d) from a wrong (b) value carried forward can still earn those points. Squaring the gap in (b) gives about 0.484 m² and loses the (b) points.
</details>

## How did you do?

- **Q1 or Q4 wrong:** recheck the formula ½ ∫ (R² − r²) dθ, especially the ½ and squaring each radius; see "From one curve to two" in the [study guide](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-study-guide/).
- **Q2 wrong:** reread "Step 1: find where the curves meet", especially the pole check.
- **Q3 or Q6 wrong:** work through Worked example 2 (the region inside both curves).
- **Q5 wrong:** compare with Worked example 1 and check the double-angle identity.
- **Q7 wrong:** practise storing calculator angles and justifying the outer curve with a test value.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-checklist/).
