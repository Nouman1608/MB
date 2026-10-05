---
resourceId: "mb-ap-calcab-u6-review"
title: "Integration and Accumulation of Change: Mixed Unit Review (Calculus AB Unit 6)"
description: "The big ideas of Integration and Accumulation of Change in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-ab"
unit: 6
topics: []
resourceType: "unit-review"
calculusScope: "ab-and-bc"
prerequisites:
  - "Work through the Unit 6 topics, or at least the Unit 6 diagnostic"
prerequisiteResources: ["mb-ap-calcab-u6-diagnostic"]
learningObjectives:
  - "Connect accumulation, Riemann sums, the Fundamental Theorem and antidifferentiation as one set of ideas"
  - "Choose a method for a definite integral by reading how the function is given"
  - "Answer multi-part questions that combine several Unit 6 topics"
  - "Write complete justifications for accumulation functions, estimates and convergence"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave e, π, ln and arctan in exact answers; decimals are given only to help you interpret."
related: ["mb-ap-calcab-u6-diagnostic", "mb-ap-calcab-6.1-checklist", "mb-ap-calcab-6.2-checklist", "mb-ap-calcab-6.3-checklist", "mb-ap-calcab-6.4-checklist", "mb-ap-calcab-6.5-checklist", "mb-ap-calcab-6.6-checklist", "mb-ap-calcab-6.7-checklist", "mb-ap-calcab-6.8-checklist", "mb-ap-calcab-6.9-checklist", "mb-ap-calcab-6.10-checklist", "mb-ap-calcbc-6.11-checklist", "mb-ap-calcbc-6.12-checklist", "mb-ap-calcbc-6.13-checklist", "mb-ap-calcab-6.14-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The area between a rate graph and the axis is accumulated change: area above counts as positive, area below as negative."
  - "A Riemann sum estimates a definite integral; its limit is the integral, and the shape of the graph says whether an estimate is too high or too low."
  - "The Fundamental Theorem links the two halves of calculus: the derivative of ∫ (a to x) f(t) dt is f(x), and ∫ (a to b) f(x) dx = F(b) − F(a)."
  - "Finding F is a matter of choosing a technique by reading the integrand: basic rule, substitution, division, completing the square, and in BC parts and partial fractions."
  - "Shared review for Calculus AB and Calculus BC students; Questions 3 and 7 are BC only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Use this page after studying Unit 6, Integration and Accumulation of Change, or the [Unit 6 diagnostic](/advanced-course-resources/calculus-ab/unit-6-diagnostic/). The unit is shared by Calculus AB and Calculus BC. **Questions 3 and 7 are BC only** (Topics 6.11 to 6.13); Calculus AB students skip them. These are **original Marlbridge practice questions**, not past exam questions, with invented contexts and data. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring.

## Big ideas of the unit

- **Area under a rate graph is accumulated change**, in rate units × input units; area below the axis counts as negative ([Topic 6.1](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/)).
- **Riemann sums estimate that change**, with equal or unequal widths. Increasing or decreasing judges left and right sums; concavity judges midpoint and trapezoidal sums ([Topic 6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-study-guide/)).
- **The definite integral is the limit of Riemann sums** as the widest strip shrinks to 0; read Δx and xᵢ to move between the two ([Topic 6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/)).
- **An integral with a variable upper limit defines a function** whose derivative is the integrand at that limit, times any chain factor ([Topic 6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/)).
- **For g(x) = ∫ (a to x) f(t) dt, f is g′.** Sign changes of f give extrema of g, turning points of f give inflection points, and signed areas give values ([Topic 6.5](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/)).
- **Properties and geometry often replace antidifferentiation**: split, reverse, scale and use known areas, even across a jump ([Topic 6.6](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/)).
- **Evaluating needs one antiderivative**: ∫ (a to b) f(x) dx = F(b) − F(a) for f continuous on [a, b] ([Topic 6.7](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/), [Topic 6.8](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/)).
- **Techniques reshape an integrand until a basic rule fits**: substitution, division, completing the square, and in BC, parts and partial fractions ([Topic 6.9](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-study-guide/), [Topic 6.10](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/), [Topic 6.14](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/)).
- **BC only: an improper integral is a limit of definite integrals** and converges only if the limit is finite ([Topic 6.13](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| Amount at time b from a rate | Starting amount + ∫ (a to b) rate dt | 6.1, 6.7 |
| Estimate from a table | Riemann or trapezoidal sum with the actual widths | 6.2 |
| Too high or too low? | Increasing: right sum high. Concave up: trapezoid high, midpoint low | 6.2 |
| lim Σ f(xᵢ)Δx | ∫ (a to b) f(x) dx with Δx = (b − a)/n | 6.3 |
| d/dx ∫ (a to u(x)) f(t) dt | f(u(x)) · u′(x) | 6.4 |
| Extrema and concavity of g = ∫ f | Sign of f; increasing or decreasing f | 6.5 |
| Given integrals, no formula | Split, reverse, scale | 6.6 |
| A function and its derivative inside | Substitution; change the limits | 6.9 |
| Top degree ≥ bottom degree | Long division first | 6.10 |
| Quadratic bottom with no real roots | Complete the square; arctan | 6.10 |
| Product of unlike types (BC) | Integration by parts | 6.11 |
| Distinct linear factors below (BC) | Partial fractions | 6.12 |
| Infinite limit or asymptote (BC) | Write as a limit; is it finite? | 6.13 |

## Question 1 (multiple choice · mixed)

Let g(x) = ∫ (0 to x) t/(t² + 1) dt for all real x. Which statement is true?

- (A) g(2) = ln 5, and g has a relative minimum at x = 0.
- (B) g(2) = (1/2) ln 5, and g has a relative maximum at x = 0.
- (C) g(2) = (1/2) ln 5, and g has a relative minimum at x = 0.
- (D) g(2) = 2/5, and g has no relative extremum.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** With u = t² + 1, g(2) = (1/2)[ln(t² + 1)] (0 to 2) = (1/2) ln 5. By the Fundamental Theorem, g′(x) = x/(x² + 1), which changes from negative to positive at x = 0: a relative minimum.

- (A) misses the factor 1/2 from du = 2t dt.
- (B) reverses the sign test.
- (D) gives g′(2), not g(2).

Topics: 6.4, 6.5, 6.7, 6.9.
</details>

## Question 2 (multiple choice · mixed)

Let R₄ be the right Riemann sum for f(x) = x³ on [0, 2] with four equal subintervals, and let S = lim (n → ∞) Σ (i = 1 to n) (2/n)(2i/n)³. Which statement is true?

- (A) R₄ = 9/4 and S = 4, so R₄ is too low by 7/4.
- (B) R₄ = 25/4 and S = 8, so R₄ is too low by 7/4.
- (C) R₄ = 25/2 and S = 4, so R₄ is too high by 17/2.
- (D) R₄ = 25/4 and S = 4, so R₄ is too high by 9/4.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** R₄ = (1/2)(1/8 + 1 + 27/8 + 8) = 25/4. S is the limit of right sums for the same function and interval, so S = ∫ (0 to 2) x³ dx = 4. f is increasing, so R₄ is too high, by 9/4.

- (A) is the left sum, 9/4.
- (B) uses x⁴/2 as the antiderivative.
- (C) leaves out the width 1/2.

Topics: 6.2, 6.3, 6.7.
</details>

## Question 3 (multiple choice · mixed) (BC only)

What is ∫ (0 to ∞) (2x + 1) e^(−x/2) dx?

- (A) 1
- (B) 10
- (C) 2
- (D) It diverges, because 2x + 1 grows without bound.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Use parts with u = 2x + 1 and dv = e^(−x/2) dx, so du = 2 dx and v = −2e^(−x/2). Then ∫ (2x + 1) e^(−x/2) dx = −2(2x + 1) e^(−x/2) + ∫ 4e^(−x/2) dx = −(4x + 10) e^(−x/2) + C. So the integral is lim (b → ∞) [−(4x + 10) e^(−x/2)] (0 to b) = lim (b → ∞) [−(4b + 10) e^(−b/2)] + 10. By L'Hospital's rule the limit term is 0 and the integral is 10.

- (A) uses −(1/2) e^(−x/2) as the antiderivative of e^(−x/2).
- (C) stops after the uv term, −2(2x + 1) e^(−x/2).
- (D) ignores that e^(−x/2) shrinks faster than 2x + 1 grows.

Topics: 6.11, 6.13.
</details>

## Question 4 (constructed response · mixed)

Water enters a tank at a rate E(t) litres per minute, t in minutes. E is continuous and concave down for 0 ≤ t ≤ 20.

| t (minutes) | 0 | 4 | 10 | 12 | 20 |
|---|---|---|---|---|---|
| E(t) (litres per minute) | 30 | 42 | 48 | 45 | 25 |

Water leaves the tank at a constant 40 litres per minute. At t = 0 the tank holds 500 litres. Let A(x) = 500 + ∫ (0 to x) (E(t) − 40) dt.

(a) Use a trapezoidal sum with the four subintervals in the table to estimate ∫ (0 to 20) E(t) dt. Explain what it means, with units.
(b) Use (a) to estimate A(20). Is this estimate too high or too low? Explain.
(c) Find A′(10). Is the amount of water increasing or decreasing at t = 10? Explain.
(d) Explain why, at some time in (0, 4), the amount of water is momentarily not changing.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 4(30 + 42)/2 + 6(42 + 48)/2 + 2(48 + 45)/2 + 8(45 + 25)/2 = 144 + 270 + 93 + 280 = **787 litres**: about 787 litres enter the tank in the first 20 minutes.

**(b)** Water leaving: ∫ (0 to 20) 40 dt = 800 litres. So A(20) ≈ 500 + 787 − 800 = **487 litres**. E is concave down, so each trapezoid lies below the graph and 787 underestimates the water in. The 800 litres out is exact, so 487 is **too low**.

**(c)** By the Fundamental Theorem, A′(x) = E(x) − 40, so **A′(10) = 8 litres per minute**. It is positive, so the amount is **increasing** at t = 10.

**(d)** A′(t) = E(t) − 40 is continuous, with A′(0) = −10 < 0 and A′(4) = 2 > 0. By the Intermediate Value Theorem, A′(c) = 0 for some c in (0, 4).

| Point | What earns it |
|---|---|
| 1 | Trapezoidal sum with the four unequal widths |
| 1 | 787 litres, with a meaning naming the time interval |
| 1 | A(20) ≈ 487 litres, subtracting 800 |
| 1 | Too low, because concave down makes the trapezoids too small |
| 1 | A′(10) = 8 litres per minute, increasing because A′(10) > 0 |
| 1 | Intermediate Value Theorem, with continuity and both signs |

Total: 6 points. Topics: 6.1, 6.2, 6.4, 6.6.
</details>

## Question 5 (constructed response · mixed)

The graph of a continuous function f, for 0 ≤ t ≤ 9, is made of straight segments joining (0, 3), (3, 0), (5, −2), (7, 0) and (9, 2). Let g(x) = ∫ (3 to x) f(t) dt for 0 ≤ x ≤ 9.

(a) Find g(0), g(7) and g(9).
(b) Find the x-value of each relative extremum of g on (0, 9), and classify it. Justify.
(c) Find the absolute maximum and absolute minimum values of g on [0, 9]. Justify.
(d) Find the x-value of each point of inflection of the graph of g. Give a reason.
(e) Find ∫ (0 to 9) [2f(t) + 1] dt.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ (0 to 3) f(t) dt = 9/2 (a triangle above the axis), so reversing the limits gives **g(0) = −9/2**. From 3 to 7 a triangle below the axis has area 4, so **g(7) = −4**. From 7 to 9 a triangle above has area 2, so **g(9) = −2**.

**(b)** g′(x) = f(x) by the Fundamental Theorem. f changes from positive to negative at x = 3: **relative maximum at x = 3**. f changes from negative to positive at x = 7: **relative minimum at x = 7**.

**(c)** Candidates: g(0) = −9/2, g(3) = 0, g(7) = −4, g(9) = −2. **Absolute maximum 0** (at x = 3); **absolute minimum −9/2** (at x = 0).

**(d)** g″ = f′, which is −1 on (0, 5) and 1 on (5, 9). It changes sign only at x = 5: **inflection point at x = 5**.

**(e)** ∫ (0 to 9) f(t) dt = 9/2 − 4 + 2 = 5/2. So the integral is 2(5/2) + 1(9) = **14**.

| Point | What earns it |
|---|---|
| 1 | g(0) = −9/2, with the reversed limits handled |
| 1 | g(7) = −4 and g(9) = −2 |
| 1 | Maximum at 3 and minimum at 7, each with the sign change of f |
| 1 | All four candidate values compared |
| 1 | Inflection at x = 5 only, where f changes from decreasing to increasing |
| 1 | 14, using linearity |

Total: 6 points. Topics: 6.1, 6.4, 6.5, 6.6.
</details>

## Question 6 (constructed response · mixed)

A particle moves along the x-axis with velocity v(t) = (2t² − 2t + 8)/(t + 1) metres per second for t ≥ 0. At t = 0 it is at x = 5.

(a) Use long division to show that v(t) = 2t − 4 + 12/(t + 1).
(b) Find the position x(t) for t ≥ 0.
(c) Find x(3) exactly.
(d) Show that v(t) > 0 for all t ≥ 0. Hence find the total distance the particle travels from t = 0 to t = 3.
(e) A student writes ∫ v(t) dt = (2t³/3 − t² + 8t)/(t²/2 + t) + C. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (t + 1)(2t − 4) = 2t² − 2t − 4, so 2t² − 2t + 8 = (t + 1)(2t − 4) + 12. Dividing by t + 1 gives **2t − 4 + 12/(t + 1)**.

**(b)** x(t) = t² − 4t + 12 ln(t + 1) + C. (No absolute value bars: t + 1 > 0.) x(0) = C = 5, so **x(t) = t² − 4t + 12 ln(t + 1) + 5**.

**(c)** x(3) = 9 − 12 + 12 ln 4 + 5 = **2 + 24 ln 2**.

**(d)** t + 1 > 0, and 2t² − 2t + 8 has discriminant 4 − 64 < 0 and positive leading coefficient, so it is always positive. So v(t) > 0: the particle never turns back, and the distance is x(3) − x(0) = **24 ln 2 − 3 metres** (about 13.6 m).

**(e)** The student integrated the top and bottom separately. There is no quotient rule for antiderivatives: differentiating the answer does not give v(t). Divide first, as in (a).

| Point | What earns it |
|---|---|
| 1 | Division shown, with remainder 12 |
| 1 | Antiderivative t² − 4t + 12 ln(t + 1) |
| 1 | C = 5 from x(0) = 5 |
| 1 | x(3) = 2 + 24 ln 2 |
| 1 | v > 0 justified, and distance 24 ln 2 − 3 |
| 1 | (e): top and bottom integrated separately |

Total: 6 points. Topics: 6.1, 6.7, 6.8, 6.10, 6.14.
</details>

## Question 7 (constructed response · mixed) (BC only)

Each integrand has denominator x² + 5x + 4 = (x + 1)(x + 4).

(a) Find ∫ (2x + 5)/(x² + 5x + 4) dx, and name the technique.
(b) Find ∫ 3/(x² + 5x + 4) dx, and name the technique.
(c) Find ∫ x/(x² + 5x + 4) dx.
(d) Show that ∫ (0 to ∞) 3/(x² + 5x + 4) dx converges, and find its value. Use limit notation.
(e) Determine whether ∫ (0 to ∞) x/(x² + 5x + 4) dx converges. Justify.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The top is the derivative of the bottom: **substitution**, u = x² + 5x + 4. **ln|x² + 5x + 4| + C**.

**(b)** The top is not a multiple of 2x + 5, and the bottom has distinct linear factors: **partial fractions**. 3/((x + 1)(x + 4)) = 1/(x + 1) − 1/(x + 4), giving **ln|(x + 1)/(x + 4)| + C**.

**(c)** x = A(x + 4) + B(x + 1): x = −1 gives −1 = 3A, so A = −1/3; x = −4 gives −4 = −3B, so B = 4/3. **−(1/3) ln|x + 1| + (4/3) ln|x + 4| + C**.

**(d)** ∫ (0 to ∞) 3/(x² + 5x + 4) dx = lim (b → ∞) [ln((x + 1)/(x + 4))] (0 to b) = lim (b → ∞) ln((b + 1)/(b + 4)) − ln(1/4). Since (b + 1)/(b + 4) → 1, the first term tends to 0, and the integral **converges to ln 4**.

**(e)** ∫ (0 to b) x/(x² + 5x + 4) dx = (4/3) ln(b + 4) − (1/3) ln(b + 1) − (4/3) ln 4 = (1/3) ln((b + 4)⁴/(b + 1)) − (4/3) ln 4. As b → ∞, (b + 4)⁴/(b + 1) → ∞, so the integral **diverges**.

| Point | What earns it |
|---|---|
| 1 | (a) substitution named and correct answer |
| 1 | (b) partial fractions named, correct answer |
| 1 | (c) A = −1/3, B = 4/3 and correct answer |
| 1 | (d) written as a limit of a definite integral |
| 1 | (d) ln 4, with the first term's limit shown as 0 |
| 1 | (e) diverges, limit shown infinite |

Total: 6 points. Topics: 6.9, 6.12, 6.13, 6.14.
</details>

## How did you do?

Calculus AB: add your points from Questions 4–6 (18 in total) and your correct answers to Questions 1 and 2. Calculus BC: include Questions 3 and 7 (24 points in total). The total is only a guide, not a predicted score. Note **which topics** your lost points came from (each answer lists them), then use those topic checklists:

[6.1](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-checklist/) ·
[6.2](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-checklist/) ·
[6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-checklist/) ·
[6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-checklist/) ·
[6.5](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-checklist/) ·
[6.6](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-checklist/) ·
[6.7](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-checklist/) ·
[6.8](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-checklist/) ·
[6.9](/advanced-course-resources/calculus-ab/6-9-integrating-substitution-checklist/) ·
[6.10](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-checklist/) ·
[6.11 (BC only)](/advanced-course-resources/calculus-bc/6-11-integration-by-parts-checklist/) ·
[6.12 (BC only)](/advanced-course-resources/calculus-bc/6-12-integrating-linear-partial-fractions-checklist/) ·
[6.13 (BC only)](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-checklist/) ·
[6.14](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-checklist/)

If many topics need work, use the "Your next step" table in the [Unit 6 diagnostic](/advanced-course-resources/calculus-ab/unit-6-diagnostic/) to choose where to start.
