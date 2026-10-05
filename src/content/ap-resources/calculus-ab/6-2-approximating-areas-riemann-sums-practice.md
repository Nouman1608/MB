---
resourceId: "mb-ap-calcab-6.2-practice"
title: "Approximating Areas with Riemann Sums: Practice Questions (Calculus AB 6.2)"
description: "Seven original Marlbridge practice questions on left, right, midpoint and trapezoidal sums from formulas, tables and descriptions, with over/under reasoning and full solutions."
course: "calculus-ab"
unit: 6
topics: ["6.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Increasing, decreasing and concavity (Unit 5)"
prerequisiteResources: ["mb-ap-calcab-6.2-study-guide"]
learningObjectives:
  - "Compute left, right, midpoint and trapezoidal sums with equal and unequal widths"
  - "Justify whether a sum overestimates or underestimates the exact value"
  - "Interpret a Riemann sum in context with units"
  - "Use the gap between left and right sums to control the accuracy of an estimate"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7(d) uses a value that was found with technology; the rest can be done by hand."
related: ["mb-ap-calcab-6.2-study-guide", "mb-ap-calcab-6.2-revision-notes", "mb-ap-calcab-6.2-checklist"]
next: "mb-ap-calcab-6.2-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: no calculator unless stated; "exact value" means the signed area between the graph and the x-axis over the stated interval; all contexts and data are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The table gives values of a function g.

| x | 0 | 2 | 4 | 6 | 8 |
|---|---|---|---|---|---|
| g(x) | 5 | 9 | 8 | 12 | 10 |

What is the left Riemann sum for g on [0, 8] using the four subintervals in the table?

- (A) 34
- (B) 68
- (C) 73
- (D) 78

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each width is 2. Left ends: 0, 2, 4, 6. L = 2(5 + 9 + 8 + 12) = 2 × 34 = 68.

- (A) adds the heights but forgets to multiply by the width 2.
- (C) is the trapezoidal sum, (68 + 78)/2.
- (D) is the right sum, 2(9 + 8 + 12 + 10): it uses the right end of each subinterval.
</details>

## Question 2 (multiple choice · core)

The table gives values of a continuous function h.

| x | 0 | 1 | 3 | 4 | 7 |
|---|---|---|---|---|---|
| h(x) | 6 | 4 | 5 | 9 | 3 |

What is the trapezoidal sum for h on [0, 7] using the four subintervals in the table?

- (A) 32
- (B) 39
- (C) 46
- (D) 78

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Widths 1, 2, 1, 3.
T = 1 × ½(6 + 4) + 2 × ½(4 + 5) + 1 × ½(5 + 9) + 3 × ½(9 + 3) = 5 + 9 + 7 + 18 = 39.

- (A) is the right sum: 1 × 4 + 2 × 5 + 1 × 9 + 3 × 3 = 32.
- (C) is the left sum: 1 × 6 + 2 × 4 + 1 × 5 + 3 × 9 = 46.
- (D) leaves out the ½ in every trapezoid, which gives L + R = 78.
</details>

## Question 3 (multiple choice · core)

A function f is decreasing and concave up on [a, b]. Let L, R, M and T be the left, right, midpoint and trapezoidal sums for f on [a, b] with the same partition, and let I be the exact value. Which statement must be true?

- (A) L < I
- (B) T < I
- (C) R < I < T
- (D) M > I

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f is decreasing, so the right end is the lowest point of each subinterval: R < I. f is concave up, so each trapezoid top (a chord) lies above the curve: I < T. Together, R < I < T.

- (A) is backwards. For a decreasing function the left end is the highest point, so L > I.
- (B) is the rule for concave down. For concave up, T is too big.
- (D) is also the concave-down rule. For concave up, M is too small.
</details>

## Question 4 (multiple choice · core)

What is the midpoint Riemann sum for f(x) = x³ on [0, 4] using two subintervals of equal width?

- (A) 16
- (B) 56
- (C) 64
- (D) 80

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Width 2; midpoints 1 and 3. M = 2(1³ + 3³) = 2(1 + 27) = 56.

- (A) is the left sum, 2(0³ + 2³) = 16: it uses the left ends 0 and 2 instead of the midpoints.
- (C) is the exact value. M is less than it because x³ is concave up on [0, 4].
- (D) is the trapezoidal sum, 2 × ½(0 + 8) + 2 × ½(8 + 64) = 80.
</details>

## Question 5 (table · core)

Water leaves a reservoir through a sluice gate. The rate of flow F(t), in cubic metres per hour, is measured every 2 hours for 12 hours. The graph of F is concave down on 0 ≤ t ≤ 12.

| t (hours) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
|---|---|---|---|---|---|---|---|
| F(t) (m³/h) | 48 | 55 | 59 | 60 | 57 | 50 | 38 |

(a) Use a midpoint Riemann sum with three subintervals of equal width to estimate the volume of water that leaves from t = 0 to t = 12. Give units.
(b) Use a trapezoidal sum with the six subintervals in the table to estimate the same volume.
(c) Is each estimate an overestimate or an underestimate? Explain, and state what this tells you about the exact volume.
(d) Explain the meaning of your answer to (b) in context.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Three equal subintervals: [0, 4], [4, 8], [8, 12], each 4 hours wide. Their midpoints are t = 2, 6 and 10, which are in the table.
M = 4 × 55 + 4 × 60 + 4 × 50 = 4 × 165 = **660 m³**.

**(b)** Width 2 throughout:
T = 2 × [½(48 + 55) + ½(55 + 59) + ½(59 + 60) + ½(60 + 57) + ½(57 + 50) + ½(50 + 38)]
Each inside value appears in two trapezoids, so this is 2 × [½(48) + 55 + 59 + 60 + 57 + 50 + ½(38)]
= 2 × [24 + 281 + 19] = 2 × 324 = **648 m³**.

**(c)** F is concave down, so its graph lies above each chord: the trapezoidal sum is an **underestimate**. A concave-down graph lies below its tangent lines, so the midpoint sum is an **overestimate**. So the exact volume is between 648 m³ and 660 m³.

**(d)** About 648 m³ of water left the reservoir through the gate between t = 0 and t = 12 hours.

| Point | What earns it |
|---|---|
| 1 | Midpoint sum set up with t = 2, 6, 10 and width 4, value 660 |
| 1 | Trapezoidal sum 648 |
| 1 | T under and M over, each linked to concave down (chord below curve; tangent above curve) |
| 1 | Interpretation with units, interval and "left the reservoir" |

Note: F increases and then decreases, so the left and right sums cannot be classified as over or under on [0, 12].
</details>

## Question 6 (constructed response · core)

Let f(x) = √x on [1, 9]. Use the partition 1, 4, 9 (two subintervals of unequal width).

(a) Find the left and right Riemann sums.
(b) Find the trapezoidal sum, and show that it equals the average of your answers to (a).
(c) The exact value is 52/3. Without using that value, explain whether each of the three sums is an overestimate or an underestimate. Then check your explanations against 52/3.
(d) Explain why, for any partition, the trapezoidal sum equals the average of the left and right sums.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Widths 3 and 5. f(1) = 1, f(4) = 2, f(9) = 3.
L = 3 × 1 + 5 × 2 = **13**. R = 3 × 2 + 5 × 3 = **21**.

**(b)** T = 3 × ½(1 + 2) + 5 × ½(2 + 3) = 4.5 + 12.5 = **17**. (13 + 21)/2 = 17. ✓

**(c)** √x is increasing on [1, 9], so L is an underestimate and R is an overestimate. f″(x) = −1/(4x^(3/2)) < 0, so √x is concave down; chords lie below the curve, so T is an underestimate. Check: 52/3 ≈ 17.333, and 13 < 17 < 17.333 < 21. ✓

**(d)** On each subinterval the trapezoid term is Δxᵢ × ½[f(xᵢ₋₁) + f(xᵢ)] = ½[f(xᵢ₋₁)Δxᵢ + f(xᵢ)Δxᵢ], the average of that subinterval's left term and right term. Adding over all subintervals, T is the average of L and R.

| Point | What earns it |
|---|---|
| 1 | L = 13 and R = 21, using the unequal widths 3 and 5 |
| 1 | T = 17 |
| 1 | L under and R over, because √x is increasing |
| 1 | T under, because √x is concave down (with f″ or a description of the graph) |
| 1 | Shows each trapezoid term is the average of a left term and a right term |
</details>

## Question 7 (constructed response · stretch)

Let f(x) = x² + x on [1, 3]. Use n subintervals of equal width Δx = 2/n, and let Lₙ and Rₙ be the left and right sums.

(a) Explain why Rₙ − Lₙ = Δx × [f(3) − f(1)].
(b) Find the smallest n for which Rₙ − Lₙ < 0.1.
(c) Explain why, for that n, both Lₙ and Rₙ are within 0.1 of the exact value.
(d) Technology gives L₂₀₁ = 12.61695 to five decimal places. Use (a) to find R₂₀₁ to three decimal places, and state an interval that contains the exact value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Lₙ = Δx[f(x₀) + f(x₁) + … + f(xₙ₋₁)] and Rₙ = Δx[f(x₁) + f(x₂) + … + f(xₙ)]. Subtracting, every value from f(x₁) to f(xₙ₋₁) cancels, leaving Rₙ − Lₙ = Δx[f(xₙ) − f(x₀)] = Δx[f(3) − f(1)].

**(b)** f(3) − f(1) = 12 − 2 = 10, so Rₙ − Lₙ = (2/n) × 10 = 20/n. We need 20/n < 0.1, so n > 200. The smallest n is **201**. (n = 200 gives exactly 0.1, which is not less than 0.1.)

**(c)** f′(x) = 2x + 1 > 0 on [1, 3], so f is increasing. So Lₙ is an underestimate and Rₙ an overestimate: Lₙ < exact < Rₙ. The exact value is trapped in an interval of length less than 0.1, so each end of the interval is less than 0.1 from it.

**(d)** R₂₀₁ = L₂₀₁ + 20/201 ≈ 12.61695 + 0.09950 = 12.71645, so **R₂₀₁ ≈ 12.716**. The exact value lies between about 12.617 and 12.716.

| Point | What earns it |
|---|---|
| 1 | Writes out both sums and shows the middle terms cancel |
| 1 | Rₙ − Lₙ = 20/n |
| 1 | n = 201, with the reason n = 200 fails |
| 1 | f increasing (from f′ > 0), so Lₙ < exact < Rₙ |
| 1 | R₂₀₁ ≈ 12.716 and an interval from about 12.617 to 12.716 |

For interest: the exact value is 38/3 ≈ 12.667, which you will be able to confirm later in the unit.
</details>

## How did you do?

- **Q1, Q2 or Q4 wrong:** redo Worked example 1 and the "four sums" table in the [study guide](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/), using a separate width for each term.
- **Q3 or Q5(c) wrong:** reread "Over or under? Reading the behaviour of f" and Figures 1 and 2.
- **Q5(a) wrong:** check which table values are midpoints of the subintervals you chose.
- **Q6 or Q7 wrong:** redo Worked example 2, then try (c) and (d) again.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-checklist/).
