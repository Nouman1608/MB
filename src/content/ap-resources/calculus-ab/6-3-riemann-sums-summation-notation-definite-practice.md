---
resourceId: "mb-ap-calcab-6.3-practice"
title: "Riemann Sums, Summation Notation and Definite Integral Notation: Practice Questions (Calculus AB 6.3)"
description: "Seven original Marlbridge practice questions on sigma notation, Riemann sums and translating between limits of sums and definite integrals, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.3"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Left and right Riemann sums from tables and formulas (Topic 6.2)"
prerequisiteResources: ["mb-ap-calcab-6.3-study-guide"]
learningObjectives:
  - "Match a limit of Riemann sums with the definite integral it represents"
  - "Write a definite integral as the limit of a right Riemann sum"
  - "Write and calculate Riemann sums in sigma notation, including sums with unequal widths"
  - "Explain why the limit of Riemann sums is taken as the largest width shrinks to 0"
skills: ["2", "1", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers unless a question says otherwise."
related: ["mb-ap-calcab-6.3-study-guide", "mb-ap-calcab-6.3-revision-notes", "mb-ap-calcab-6.3-checklist"]
next: "mb-ap-calcab-6.3-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, exact answers unless stated, and all functions continuous on the intervals used. Notation: Σ (i = 1 to n) aᵢ means a₁ + a₂ + … + aₙ, and ∫ (a to b) f(x) dx means the definite integral of f from a to b. The data in Question 7 are invented. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which definite integral is equal to lim (n → ∞) Σ (i = 1 to n) (1 + 4i/n)³ · (4/n)?

- (A) ∫ (1 to 5) x³ dx
- (B) ∫ (0 to 4) x³ dx
- (C) ∫ (1 to 4) x³ dx
- (D) ∫ (0 to 1) (1 + 4x)³ dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The width is Δx = 4/n, so b − a = 4. Inside the cube, 1 + 4i/n = 1 + iΔx, so a = 1 and that whole expression becomes x. Then b = 1 + 4 = 5, giving ∫ (1 to 5) x³ dx (its value is 156).

- (B) uses the right width but forgets the starting value 1, so it slides the interval to [0, 4]. Its value is 64.
- (C) reads b as the 4 in 4i/n. That 4 is b − a, not b.
- (D) uses x = i/n on [0, 1] but drops the factor 4 from the width. Its value is 39, a quarter of the correct value. (∫ (0 to 1) 4(1 + 4x)³ dx would be correct.)
</details>

## Question 2 (multiple choice · core)

Which expression equals ∫ (3 to 7) (1/x) dx?

- (A) lim (n → ∞) Σ (i = 1 to n) 1/(3 + 4i/n) · (4/n)
- (B) lim (n → ∞) Σ (i = 1 to n) 1/(3 + 4i/n) · (1/n)
- (C) lim (n → ∞) Σ (i = 1 to n) 1/(3 + i/n) · (4/n)
- (D) lim (n → ∞) Σ (i = 1 to n) 1/(4i/n) · (4/n)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With a = 3 and b = 7, Δx = 4/n and the right endpoints are xᵢ = 3 + 4i/n. The right Riemann sum is Σ f(xᵢ) Δx = Σ 1/(3 + 4i/n) · (4/n).

- (B) has the right sample points but the wrong width. Each term is a quarter of the correct one, so the limit is a quarter of the integral.
- (C) uses the step i/n inside f, so the sample points only run from 3 to 4. Its limit is 4 × ∫ (3 to 4) (1/x) dx, a different number.
- (D) forgets to start at a = 3. The sample points run over [0, 4], where 1/x is not even bounded near 0.
</details>

## Question 3 (multiple choice · core)

The interval [0, 10] is cut by the partition 0 = t₀ < t₁ < t₂ < t₃ < t₄ = 10. The four subintervals do **not** all have the same width. Which expression is the **left** Riemann sum for a function v on this partition?

- (A) Σ (i = 1 to 4) v(tᵢ₋₁)(tᵢ − tᵢ₋₁)
- (B) Σ (i = 1 to 4) v(tᵢ)(tᵢ − tᵢ₋₁)
- (C) Σ (i = 1 to 4) v(tᵢ₋₁) · (10/4)
- (D) Σ (i = 0 to 4) v(tᵢ)(tᵢ₊₁ − tᵢ)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The ith subinterval is [tᵢ₋₁, tᵢ]. A left sum uses its left end, tᵢ₋₁, for the height and its own width, tᵢ − tᵢ₋₁.

- (B) uses the right end of each subinterval, so it is the right Riemann sum.
- (C) uses an equal width of 10/4 = 2.5. That is only correct when the widths are equal, which the question rules out.
- (D) has five terms. The last one (i = 4) needs t₅, which does not exist. Stopping at i = 3 would make it correct.
</details>

## Question 4 (multiple choice · core)

What is the value of lim (n → ∞) Σ (i = 1 to n) √(9 − (3i/n)²) · (3/n)?

- (A) 3π/4
- (B) 9π/4
- (C) 9π/2
- (D) 9π

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Δx = 3/n and xᵢ = 0 + 3i/n, so a = 0 and b = 3. The limit is ∫ (0 to 3) √(9 − x²) dx. The graph of y = √(9 − x²) is the upper half of the circle x² + y² = 9. From x = 0 to x = 3 it bounds a quarter of a disc of radius 3, with area (1/4)π(3)² = 9π/4.

- (A) uses x = i/n on [0, 1] and drops the 3 in the width: ∫ (0 to 1) √(9 − 9x²) dx = 3π/4.
- (C) is a half disc. That would need the interval [−3, 3].
- (D) is the whole disc.
</details>

## Question 5 (constructed response · core)

Let f(x) = x² + 1 on [1, 3].

(a) Write the right Riemann sum with 4 equal subintervals in sigma notation.
(b) Calculate it.
(c) Write ∫ (1 to 3) (x² + 1) dx as the limit of a right Riemann sum with n equal subintervals.
(d) Is your answer to (b) larger or smaller than the integral? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Δx = (3 − 1)/4 = 1/2, and the right endpoints are xᵢ = 1 + i/2. So

R₄ = Σ (i = 1 to 4) [(1 + i/2)² + 1] · (1/2)

**(b)** The endpoints are 3/2, 2, 5/2, 3. The heights are 13/4, 5, 29/4, 10, which add to 51/2. So R₄ = (1/2)(51/2) = **51/4 = 12.75**.

**(c)** Δx = 2/n and xᵢ = 1 + 2i/n:

∫ (1 to 3) (x² + 1) dx = lim (n → ∞) Σ (i = 1 to n) [(1 + 2i/n)² + 1] · (2/n)

**(d)** f′(x) = 2x > 0 on [1, 3], so f is increasing. The right end of each subinterval is its highest point, so each rectangle reaches above the curve. R₄ is **larger** than the integral (an overestimate). (In Topic 6.7 you will find the integral is 32/3 ≈ 10.67.)

| Point | What earns it |
|---|---|
| 1 | Correct sigma form in (a): width 1/2 and sample points 1 + i/2, with i from 1 to 4 |
| 1 | R₄ = 51/4 |
| 1 | Correct limit in (c), with width 2/n and xᵢ = 1 + 2i/n inside f |
| 1 | Overestimate, justified by f increasing (for example f′ > 0 or x² + 1 increasing for x ≥ 1) |

Acceptable alternative for (c): lim (n → ∞) Σ (i = 0 to n − 1) [(1 + 2i/n)² + 1] · (2/n), a left sum, has the same limit.
</details>

## Question 6 (constructed response · core)

Consider L = lim (n → ∞) Σ (i = 1 to n) cos(2 + 5i/n) · (5/n).

(a) Write L as a definite integral with lower limit 2.
(b) Write L as a definite integral with lower limit 0.
(c) A student writes L = ∫ (2 to 7) cos(2 + x) dx. Explain the error.
(d) Explain why replacing i by i − 1 inside the cosine does not change L.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Δx = 5/n, so b − a = 5. Inside the cosine, 2 + 5i/n = 2 + iΔx, so a = 2 and b = 7. Replacing 2 + iΔx by x: **L = ∫ (2 to 7) cos x dx**.

**(b)** Let x = 5i/n, which runs from 0 to 5. The term is cos(2 + x): **L = ∫ (0 to 5) cos(2 + x) dx**.

**(c)** The student has kept the lower limit 2 **and** kept the 2 inside the cosine. That shifts the input by 2 twice, so the integral uses cos on [4, 9] instead of [2, 7]. It has a different value (about 1.17 instead of about −0.25).

**(d)** Using i − 1 gives the left Riemann sum on the same partition. For a continuous function such as cos x, left and right sums have the same limit as the widths shrink to 0, so L is unchanged.

| Point | What earns it |
|---|---|
| 1 | ∫ (2 to 7) cos x dx, with dx |
| 1 | ∫ (0 to 5) cos(2 + x) dx (or another correct form with lower limit 0) |
| 1 | Explains the double shift in (c) |
| 1 | States that this gives a left sum and that, for a continuous function, the limit does not depend on the sample points |

Also acceptable for (b): ∫ (0 to 1) 5 cos(2 + 5x) dx, from x = i/n with width 1/n and a factor 5 kept in the function.
</details>

## Question 7 (constructed response · stretch)

Water flows into a storage tank. The rate of flow r(t), in litres per minute, is continuous. Selected values are shown (invented data).

| t (minutes) | 0 | 2 | 5 | 9 | 12 |
|---|---|---|---|---|---|
| r(t) (litres per minute) | 40 | 46 | 52 | 50 | 44 |

(a) Using t₀ = 0, t₁ = 2, t₂ = 5, t₃ = 9, t₄ = 12, write a left Riemann sum for the water that flows in from t = 0 to t = 12 in sigma notation, and calculate it. Include units.
(b) Write a definite integral for the exact amount of water that flows in from t = 0 to t = 12, and say how it is related to Riemann sums like the one in (a).
(c) A student says: "To make the estimate exact, just let the number of subintervals go to infinity." Explain why this is not quite the right condition when the widths are unequal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Left sum: Σ (i = 1 to 4) r(tᵢ₋₁)(tᵢ − tᵢ₋₁). The widths are 2, 3, 4 and 3 minutes.

= 40(2) + 46(3) + 52(4) + 50(3) = 80 + 138 + 208 + 150 = **576 litres**.

Units: (litres per minute) × (minutes) = litres.

**(b)** Exact amount: **∫ (0 to 12) r(t) dt** litres. It is the limit of Riemann sums Σ r(tᵢ*) Δtᵢ for r on [0, 12] as the largest width Δtᵢ shrinks to 0. Because r is continuous, this limit does not depend on where the sample points are chosen.

**(c)** With unequal widths you could add more and more points while leaving one subinterval wide, for example by only splitting the first piece. The number of pieces would grow, but the estimate on the wide piece would not improve. The correct condition is that the **largest** width tends to 0. (With equal widths, the two conditions are the same.)

| Point | What earns it |
|---|---|
| 1 | Correct sigma expression using r(tᵢ₋₁) and tᵢ − tᵢ₋₁ |
| 1 | 576 litres, with units |
| 1 | ∫ (0 to 12) r(t) dt, linked to the limit of Riemann sums as the widths shrink to 0 |
| 1 | Explains that the largest width must tend to 0, with a reason or example |

A right sum in (a) is not what was asked. It gives 580 litres; award the second point only for 576.
</details>

## How did you do?

- **Q1, Q4 or Q6 wrong:** redo "Translating a limit of sums into an integral" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/).
- **Q2 or Q5 wrong:** reread "Equal widths: the formulas you will use most" and Worked example 2.
- **Q3 or Q7 wrong:** reread "What a Riemann sum is, in general" and Figure 1, then "From sums to the definite integral".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-checklist/).
