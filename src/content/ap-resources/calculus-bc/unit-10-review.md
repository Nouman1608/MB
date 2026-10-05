---
resourceId: "mb-ap-calcbc-u10-review"
title: "Infinite Sequences and Series: Mixed Unit Review (Calculus BC Unit 10)"
description: "The big ideas of Infinite Sequences and Series in one place, a methods summary table, and seven original mixed questions with worked solutions and rubrics."
course: "calculus-bc"
unit: 10
topics: []
resourceType: "unit-review"
calculusScope: "bc-only"
prerequisites:
  - "Work through the Unit 10 topics, or at least the Unit 10 diagnostic"
prerequisiteResources: ["mb-ap-calcbc-u10-diagnostic"]
learningObjectives:
  - "Connect partial sums, series tests, error bounds and power series as one set of ideas"
  - "Choose a convergence test by reading the form of the terms"
  - "Answer multi-part questions that combine Taylor polynomials, error bounds and intervals of convergence"
  - "Write complete justifications that name each test and check its conditions"
skills: ["1", "2", "3", "4"]
studyMinutes: 60
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Leave e, π and logarithms exact; decimals are given only to help you interpret."
related: ["mb-ap-calcbc-u10-diagnostic", "mb-ap-calcbc-10.1-checklist", "mb-ap-calcbc-10.2-checklist", "mb-ap-calcbc-10.3-checklist", "mb-ap-calcbc-10.4-checklist", "mb-ap-calcbc-10.5-checklist", "mb-ap-calcbc-10.6-checklist", "mb-ap-calcbc-10.7-checklist", "mb-ap-calcbc-10.8-checklist", "mb-ap-calcbc-10.9-checklist", "mb-ap-calcbc-10.10-checklist", "mb-ap-calcbc-10.11-checklist", "mb-ap-calcbc-10.12-checklist", "mb-ap-calcbc-10.13-checklist", "mb-ap-calcbc-10.14-checklist", "mb-ap-calcbc-10.15-checklist"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: Unit 10 is not part of Calculus AB."
  - "A series converges when its partial sums have a limit; every test is a shortcut to deciding that."
  - "Choose a test from the form of the terms, and always state the test's conditions."
  - "A Taylor polynomial is a partial sum of a Taylor series, so series error bounds measure how good a polynomial estimate is."
  - "Build new power series from geometric, eˣ, sin x and cos x; the radius survives term-by-term calculus, but the endpoints must be retested."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Use this page after studying Unit 10, Infinite Sequences and Series, or after the [Unit 10 diagnostic](/advanced-course-resources/calculus-bc/unit-10-diagnostic/). The unit is **BC only**: it is not part of Calculus AB. These are **original Marlbridge practice questions**, not past exam questions, with invented functions and data. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not official scoring. No calculator for any question.

## Big ideas of the unit

- **A sum of infinitely many terms is a limit.** A series converges to S when its partial sums Sₙ approach S. Terms, partial sums and the sum are three different objects ([Topic 10.1](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/)).
- **Geometric series are the family you can always sum.** Σ arⁿ converges to (first term)/(1 − r) exactly when |r| < 1. Many power series grow out of this fact ([Topic 10.2](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/)).
- **Terms tending to 0 is necessary, never enough.** If lim aₙ ≠ 0, the series diverges. If the limit is 0, you still need another test; the harmonic series is the warning ([Topic 10.3](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/), [Topic 10.5](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/)).
- **Positive series are compared with something you know**: an area (integral test), or a p-series or geometric series (comparison tests). State each test's conditions ([Topic 10.4](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/), [Topic 10.6](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/)).
- **Signs matter.** An alternating series whose terms decrease to 0 converges, even when Σ |aₙ| does not (conditional convergence). Absolute convergence, of Σ |aₙ|, implies convergence ([Topic 10.7](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/), [Topic 10.9](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/)).
- **The ratio test compares a series with a geometric one.** It is the natural test for factorials and powers, and it is how you find a radius of convergence. When L = 1 it says nothing ([Topic 10.8](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/), [Topic 10.13](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/)).
- **Every estimate needs an error bound.** For an alternating series, the error is less than the first term left out. For a Taylor polynomial, the Lagrange bound uses the next derivative ([Topic 10.10](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/), [Topic 10.12](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/)).
- **Taylor polynomials are partial sums of Taylor series.** The coefficient of (x − a)ⁿ is f⁽ⁿ⁾(a)/n!, in both directions: from derivatives to coefficients, and from coefficients back to derivatives ([Topic 10.11](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/), [Topic 10.14](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/)).
- **New series come from old ones.** Substitute, multiply by a power of x, differentiate or integrate term by term. The radius stays the same, but each endpoint must be tested again ([Topic 10.15](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/)).

## Key relationships and methods

| You see or need | What it means or what to do | Topics |
|---|---|---|
| A formula for Sₙ | Sum = lim Sₙ; aₙ = Sₙ − Sₙ₋₁ | 10.1 |
| Constant ratio r | Converges to (first term)/(1 − r) when \|r\| < 1 | 10.2 |
| lim aₙ ≠ 0 | Diverges (nth term test); if the limit is 0, test again | 10.3 |
| Terms f(n) you can integrate | Integral test: f positive, continuous, decreasing | 10.4 |
| 1/nᵖ, or a rational function of n | p-series rule, or compare with 1/nᵖ | 10.5, 10.6 |
| Signs alternate | Alternating series test: terms decrease to 0 | 10.7 |
| Factorials or nth powers | Ratio test: L < 1 converges, L > 1 diverges, L = 1 no conclusion | 10.8 |
| "Absolutely or conditionally?" | Test Σ \|aₙ\| first, then the series itself | 10.9 |
| How far is Sₙ from S? | Alternating: \|error\| < aₙ₊₁ | 10.10 |
| f⁽ⁿ⁾(a) values | Coefficient f⁽ⁿ⁾(a)/n! of (x − a)ⁿ | 10.11, 10.14 |
| How far is Pₙ(x) from f(x)? | Lagrange: M\|x − a\|ⁿ⁺¹/(n + 1)! | 10.12 |
| Where does Σ aₙ(x − c)ⁿ converge? | Ratio test for R, then test both endpoints | 10.13 |
| A function close to 1/(1 − u), eᵘ, sin u, cos u | Substitute, multiply, differentiate or integrate | 10.14, 10.15 |

## Question 1 (multiple choice · mixed)

What is the value of Σ from n = 1 to ∞ of n/2ⁿ⁺¹?

- (A) 1
- (B) 2
- (C) 1/2
- (D) The series diverges, because the numerators grow without bound.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For |x| < 4, Σ from n = 0 of (x/4)ⁿ = 4/(4 − x). Differentiate term by term: Σ from n = 1 of n xⁿ⁻¹/4ⁿ = 4/(4 − x)². At x = 2, each term is n · 2ⁿ⁻¹/4ⁿ = n/2ⁿ⁺¹, and the sum is 4/2² = 1. (The ratio test gives L = 1/2, so the series does converge.)

- (B) is Σ n/2ⁿ, which is twice the given series.
- (C) halves the answer a second time.
- (D) 2ⁿ⁺¹ grows much faster than n; the ratio test gives convergence.

Topics: 10.2, 10.8, 10.15.
</details>

## Question 2 (multiple choice · mixed)

The Maclaurin series for sin x is used to estimate sin(0.2) by 0.2 − 0.2³/6. Which statement is true?

- (A) The estimate is too low, by less than 0.2⁵/120.
- (B) The estimate is too high, by less than 0.2⁵/120.
- (C) The estimate is too low, by less than 0.2³/6.
- (D) The estimate is too high, by less than 0.2⁴/24.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At x = 0.2 the series 0.2 − 0.2³/3! + 0.2⁵/5! − … alternates, with terms decreasing to 0. The error is less than the first term left out, 0.2⁵/120 (about 2.7 × 10⁻⁶), and that term is positive, so the estimate is too low.

- (B) gets the direction wrong: the next term is added.
- (C) uses the last term kept.
- (D) sin x has no x⁴ term, and the direction is wrong.

Topics: 10.10, 10.12, 10.14.
</details>

## Question 3 (multiple choice · mixed)

Which statement about Σ from n = 1 to ∞ of (x − 2)ⁿ/√(n³ + 1) is true?

- (A) It converges only for 1 < x < 3.
- (B) It converges for 1 ≤ x < 3 only, and conditionally at x = 1.
- (C) It converges for 1 ≤ x ≤ 3, and absolutely at both endpoints.
- (D) It converges for 1 ≤ x ≤ 3, but only conditionally at x = 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The ratio test gives L = |x − 2|, so R = 1. At x = 3 the series is Σ 1/√(n³ + 1); limit comparison with Σ 1/n^(3/2) gives a limit of 1, and p = 3/2 > 1, so it converges. At x = 1 the terms are (−1)ⁿ/√(n³ + 1), whose absolute values form that same convergent series: absolute convergence.

- (A) never tests the endpoints.
- (B) and (D) treat x = 1 as if the absolute values gave a divergent series. They do not.

Topics: 10.6, 10.9, 10.13.
</details>

## Question 4 (constructed response · mixed)

A function f has derivatives of all orders. It satisfies f′(x) = 1 + x f(x) for all x, and f(0) = 2.

(a) Find f′(0), f″(0) and f‴(0).
(b) Write the third-degree Taylor polynomial P₃(x) for f about x = 0, and use it to estimate f(0.5).
(c) It is known that |f⁽⁴⁾(x)| ≤ 16 for 0 ≤ x ≤ 0.5. Use the Lagrange error bound to show that f(0.5) < 3.
(d) Find f⁽⁴⁾(0), and give the coefficient of x⁴ in the Maclaurin series for f.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(0) = 1 + 0 · 2 = **1**. Differentiate the equation with the product rule: f″(x) = f(x) + x f′(x), so f″(0) = **2**. Again: f‴(x) = 2f′(x) + x f″(x), so f‴(0) = **2**.

**(b)** P₃(x) = 2 + x + (2/2!)x² + (2/3!)x³ = **2 + x + x² + x³/3**. So f(0.5) ≈ 2 + 0.5 + 0.25 + 1/24 = **67/24** (about 2.792).

**(c)** The Lagrange bound is 16 × 0.5⁴/4! = 16 × (1/16)/24 = **1/24**. So f(0.5) ≤ 67/24 + 1/24 = 68/24 = 17/6 (about 2.833), which is less than 3. In fact f(0.5) lies between 11/4 and 17/6.

**(d)** Differentiate once more: f⁽⁴⁾(x) = 3f″(x) + x f‴(x), so **f⁽⁴⁾(0) = 6**. The coefficient of x⁴ is 6/4! = **1/4**.

| Point | What earns it |
|---|---|
| 1 | f′(0) = 1 |
| 1 | f″(0) = 2 from a correct product-rule derivative |
| 1 | f‴(0) = 2 |
| 1 | P₃(x) with the factorials 2! and 3! |
| 1 | Estimate 67/24 |
| 1 | Error bound 16(0.5)⁴/4! = 1/24 |
| 1 | Conclusion f(0.5) ≤ 17/6 < 3, using the bound |
| 1 | f⁽⁴⁾(0) = 6 and coefficient 1/4 |

Total: 8 points. Topics: 10.11, 10.12, 10.14.
</details>

## Question 5 (constructed response · mixed)

Let f(x) = Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ xⁿ/(n · 3ⁿ) = x/3 − x²/18 + x³/81 − … at each x where the series converges.

(a) Find the interval of convergence. Justify each endpoint, and say whether the series converges absolutely or conditionally at any endpoint where it converges.
(b) Write the first three terms and the general term of the series for f′(x). Show that f′(x) = 1/(3 + x) for |x| < 3.
(c) Hence show that f(x) = ln(1 + x/3) for |x| < 3.
(d) Use the first two terms of the series to estimate f(1). Show that the estimate differs from ln(4/3) by less than 1/81.
(e) Find f″(0).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Ratio test: |uₙ₊₁/uₙ| = (|x|/3) · n/(n + 1) → |x|/3. The series converges when |x| < 3, so R = 3.
At x = 3: Σ (−1)ⁿ⁺¹/n, the alternating harmonic series. 1/n decreases to 0, so it converges by the alternating series test. Σ 1/n diverges, so this is **conditional** convergence.
At x = −3: (−1)ⁿ⁺¹(−3)ⁿ/(n · 3ⁿ) = −1/n, and −Σ 1/n diverges (harmonic series).
Interval: **−3 < x ≤ 3**.

**(b)** Differentiate term by term: **f′(x) = 1/3 − x/9 + x²/27 − … + (−1)ⁿ⁺¹xⁿ⁻¹/3ⁿ + …** . This is geometric with first term 1/3 and ratio −x/3, so for |x| < 3 its sum is (1/3)/(1 + x/3) = **1/(3 + x)**.

**(c)** f(0) = 0, because every term contains x. So f(x) = ∫ from 0 to x of 1/(3 + t) dt = ln(3 + x) − ln 3 = **ln(1 + x/3)**.

**(d)** f(1) ≈ 1/3 − 1/18 = **5/18** (about 0.278). At x = 1 the series is alternating, and its terms 1/(n · 3ⁿ) decrease to 0. So the error is less than the next term, 1/(3 · 27) = **1/81**. (ln(4/3) ≈ 0.288.)

**(e)** The coefficient of x² is −1/18 = f″(0)/2!, so **f″(0) = −1/9**.

| Point | What earns it |
|---|---|
| 1 | Ratio test limit \|x\|/3, giving R = 3 |
| 1 | x = 3: converges by the alternating series test, conditionally |
| 1 | x = −3: diverges (harmonic), and the interval (−3, 3] |
| 1 | Series for f′ with a correct general term |
| 1 | Geometric sum 1/(3 + x) |
| 1 | f(x) = ln(1 + x/3), using f(0) = 0 |
| 1 | Estimate 5/18, with error less than 1/81 from the alternating series error bound |
| 1 | f″(0) = −1/9 |

Total: 8 points. Topics: 10.7, 10.9, 10.10, 10.13, 10.15.
</details>

## Question 6 (constructed response · mixed)

Consider the series Σ from n = 1 to ∞ of e^(−√n)/√n.

(a) Use the integral test to show that the series converges. Check the conditions.
(b) Show that the ratio test gives no conclusion for this series.
(c) Decide whether Σ from n = 1 to ∞ of e^(−√n)/n converges. Justify your answer.
(d) Classify Σ from n = 1 to ∞ of (−1)ⁿ e^(−√n)/√n as absolutely convergent, conditionally convergent or divergent.
(e) Explain why the sum S of the series in (a) satisfies S ≤ 1/e + 2/e.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let f(x) = e^(−√x)/√x for x ≥ 1. It is positive and continuous. Both e^(−√x) and 1/√x are positive and decreasing, so their product is decreasing. With u = √x, d/dx(−2e^(−√x)) = e^(−√x)/√x, so
∫ from 1 to ∞ of f(x) dx = lim (b → ∞) [−2e^(−√b) + 2e^(−1)] = **2/e**.
The integral converges, so by the integral test **the series converges**.

**(b)** aₙ₊₁/aₙ = e^(−(√(n + 1) − √n)) · √n/√(n + 1). As n → ∞, √(n + 1) − √n = 1/(√(n + 1) + √n) → 0, so the first factor tends to e⁰ = 1, and the second tends to 1. L = 1, so **the ratio test gives no conclusion**.

**(c)** For n ≥ 1, n ≥ √n, so 0 < e^(−√n)/n ≤ e^(−√n)/√n. The larger series converges by (a), so **Σ e^(−√n)/n converges** by the direct comparison test.

**(d)** The absolute values form the series in (a), which converges. So the series is **absolutely convergent**.

**(e)** f decreases, so each aₙ (n ≥ 2) is less than the area under f from n − 1 to n. So a₂ + a₃ + … ≤ ∫ from 1 to ∞ of f(x) dx = 2/e, and adding a₁ = 1/e gives **S ≤ 3/e**.

| Point | What earns it |
|---|---|
| 1 | Conditions: positive, continuous and decreasing, with a reason for decreasing |
| 1 | Antiderivative −2e^(−√x) |
| 1 | Improper integral written as a limit, value 2/e, and conclusion |
| 1 | Ratio test limit L = 1, with √(n + 1) − √n → 0 shown |
| 1 | Correct inequality and direct comparison conclusion in (c) |
| 1 | Absolutely convergent, linked to (a) |
| 1 | (e): each aₙ (n ≥ 2) below an area, plus a₁ = 1/e |

Total: 7 points. Topics: 10.4, 10.6, 10.8, 10.9.
</details>

## Question 7 (constructed response · mixed)

Let aₙ = 4/3ⁿ + 2/(n(n + 2)) for n ≥ 1.

(a) Show that Σ from n = 1 to ∞ of 4/3ⁿ converges, and find its sum.
(b) Show that 2/(n(n + 2)) = 1/n − 1/(n + 2). Use it to show that the nth partial sum of Σ 2/(n(n + 2)) is Tₙ = 3/2 − 1/(n + 1) − 1/(n + 2).
(c) Find Σ from n = 1 to ∞ of aₙ.
(d) A student says: "The terms of Σ (4/3ⁿ + 2/n) tend to 0, so this series also converges." Explain whether the student is right.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** It is geometric with first term 4/3 and ratio 1/3. |1/3| < 1, so it converges to (4/3)/(1 − 1/3) = **2**.

**(b)** 1/n − 1/(n + 2) = (n + 2 − n)/(n(n + 2)) = 2/(n(n + 2)). In the partial sum, each −1/k cancels the +1/k two terms later:
Tₙ = (1 − 1/3) + (1/2 − 1/4) + (1/3 − 1/5) + … + (1/n − 1/(n + 2)).
Only 1 + 1/2 at the start and −1/(n + 1) − 1/(n + 2) at the end survive, so **Tₙ = 3/2 − 1/(n + 1) − 1/(n + 2)**. (Check: T₁ = 3/2 − 1/2 − 1/3 = 2/3 = 2/(1 · 3).)

**(c)** lim Tₙ = 3/2, so Σ 2/(n(n + 2)) = 3/2. The sum of two convergent series is the sum of their sums: **Σ aₙ = 2 + 3/2 = 7/2**.

**(d)** The student is **wrong**. Terms tending to 0 is necessary but not enough; the nth term test gives no conclusion. Σ 2/n is twice the harmonic series (p = 1), so it diverges. If Σ (4/3ⁿ + 2/n) converged, subtracting the convergent Σ 4/3ⁿ would make Σ 2/n converge. So **Σ (4/3ⁿ + 2/n) diverges**.

| Point | What earns it |
|---|---|
| 1 | Geometric with \|r\| = 1/3 < 1, and sum 2 |
| 1 | Partial fractions verified |
| 1 | Telescoping shown, giving the formula for Tₙ |
| 1 | lim Tₙ = 3/2, by the definition of the sum |
| 1 | Total 7/2 |
| 1 | (d): nth term test inconclusive, and Σ 2/n diverges (p = 1) |
| 1 | (d): convergent + divergent diverges, so the student is wrong |

Total: 7 points. Topics: 10.1, 10.2, 10.3, 10.5.
</details>

## How did you do?

Add up your points from Questions 4–7 (30 in total) and your correct answers to Questions 1–3. The total is only a guide, not a predicted exam score. More useful: note **which topics** your lost points came from (each answer lists them), then tick off those topic checklists:

[10.1](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-checklist/) ·
[10.2](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-checklist/) ·
[10.3](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-checklist/) ·
[10.4](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-checklist/) ·
[10.5](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-checklist/) ·
[10.6](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-checklist/) ·
[10.7](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-checklist/) ·
[10.8](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-checklist/) ·
[10.9](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-checklist/) ·
[10.10](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-checklist/) ·
[10.11](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-checklist/) ·
[10.12](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-checklist/) ·
[10.13](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-checklist/) ·
[10.14](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-checklist/) ·
[10.15](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-checklist/)

If many topics need work, go back to the [Unit 10 diagnostic](/advanced-course-resources/calculus-bc/unit-10-diagnostic/) and use its "Your next step" table to choose where to start.
