---
resourceId: "mb-ap-calcbc-10.13-practice"
title: "Radius and Interval of Convergence of Power Series: Practice Questions (Calculus BC 10.13)"
description: "Seven original Marlbridge practice questions on power series: radius by the ratio test, endpoint tests, coefficients and derivatives, and term-by-term calculus, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.13"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Ratio test (Topic 10.8), p-series (Topic 10.5) and the alternating series test (Topic 10.7)"
prerequisiteResources: ["mb-ap-calcbc-10.13-study-guide"]
learningObjectives:
  - "Find the radius of convergence of a power series with the ratio test"
  - "Decide each endpoint with a suitable test and state the interval of convergence"
  - "Use the coefficients of a power series to find derivatives at the centre"
  - "Find the radius and interval of a series differentiated term by term"
  - "Reason about where a series must converge from limited information"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "All seven questions are no-calculator questions."
related: ["mb-ap-calcbc-10.13-study-guide", "mb-ap-calcbc-10.13-revision-notes", "mb-ap-calcbc-10.13-checklist"]
next: "mb-ap-calcbc-10.13-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: no calculator for any question. Notation: "Σ from n = 1 to ∞ of uₙ" is an infinite series; "radius" means radius of convergence; an interval of convergence must include a decision, with a reason, at each endpoint.

## Question 1 (multiple choice · foundation)

What is the radius of convergence of Σ from n = 1 to ∞ of n(x − 4)ⁿ / 5ⁿ?

- (A) 1/5
- (B) 4
- (C) 5
- (D) 10

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Ratio of consecutive terms: |uₙ₊₁/uₙ| = ((n + 1)/n) · |x − 4|/5 → |x − 4|/5. Setting |x − 4|/5 < 1 gives |x − 4| < 5, so R = 5.

- (A) takes the limit of the coefficient ratio, (n + 1)/(5n) → 1/5, and calls that the radius. That limit is 1/R, not R.
- (B) is the centre of the series, not its radius.
- (D) is the length of the open interval (−1, 9). The radius is half of that.
</details>

## Question 2 (multiple choice · core)

What is the interval of convergence of Σ from n = 1 to ∞ of (−1)ⁿ(x + 1)ⁿ / (√n · 2ⁿ)?

- (A) (−3, 1)
- (B) [−3, 1)
- (C) (−3, 1]
- (D) [−3, 1]

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The ratio test gives |x + 1|/2 · √(n/(n + 1)) → |x + 1|/2, so |x + 1| < 2: centre −1, radius 2, open interval (−3, 1).

- At **x = 1**: x + 1 = 2, so the series is Σ (−1)ⁿ/√n. The terms alternate, 1/√n decreases and tends to 0, so it **converges** by the alternating series test.
- At **x = −3**: x + 1 = −2, so the term is (−1)ⁿ(−2)ⁿ/(√n · 2ⁿ) = (+1)ⁿ/√n = 1/√n. This is a p-series with p = ½ ≤ 1, so it **diverges**.

So the interval is (−3, 1].

- (A) stops at the open interval and never tests the endpoints.
- (B) forgets that the (−1)ⁿ in the series combines with (−2)ⁿ at x = −3, so it swaps which endpoint alternates.
- (D) treats Σ 1/√n as convergent. A p-series converges only when p > 1.
</details>

## Question 3 (multiple choice · core)

Which of the following power series converges **only** at x = 0?

- (A) Σ from n = 0 to ∞ of xⁿ/n!
- (B) Σ from n = 0 to ∞ of n! xⁿ
- (C) Σ from n = 0 to ∞ of xⁿ/(n + 1)
- (D) Σ from n = 0 to ∞ of 2ⁿxⁿ

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For n! xⁿ, |uₙ₊₁/uₙ| = (n + 1)|x|. For any x ≠ 0 this tends to ∞, so the series diverges. At x = 0 every term after the first is 0, so it converges there. R = 0.

- (A) has ratio |x|/(n + 1) → 0 for every x, so it converges for all x (R = ∞). The factorial is in the denominator.
- (C) has ratio |x| · (n + 1)/(n + 2) → |x|, so R = 1.
- (D) is geometric with ratio 2x, so it converges for |x| < 1/2 (R = 1/2).
</details>

## Question 4 (multiple choice · stretch)

For |x − 3| < 2, the function f is defined by f(x) = Σ from n = 0 to ∞ of (n + 1)(x − 3)ⁿ / 2ⁿ. What is the value of f‴(3)?

- (A) 1/12
- (B) 1/2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** A power series with positive radius is the Taylor series of its sum, so aₙ = f⁽ⁿ⁾(3)/n!, which means f⁽ⁿ⁾(3) = n! · aₙ. The coefficient of (x − 3)³ is a₃ = 4/2³ = 1/2. So f‴(3) = 3! · 1/2 = **3**.

- (A) divides the coefficient by 3! instead of multiplying: (1/2)/6.
- (B) is the coefficient a₃ itself, not the derivative.
- (D) takes only the factor n + 1 = 4 and forgets the 2³ in the denominator and the 3!.
</details>

## Question 5 (calculation · core)

Find the radius and the interval of convergence of Σ from n = 0 to ∞ of x^(2n) / (4ⁿ(n + 1)).

<details>
<summary>Worked solution</summary>

1. **Ratio.** |uₙ₊₁/uₙ| = |x^(2n+2)| / (4ⁿ⁺¹(n + 2)) · (4ⁿ(n + 1)) / |x^(2n)| = (x²/4) · (n + 1)/(n + 2).
2. **Limit.** (n + 1)/(n + 2) → 1, so the limit is x²/4.
3. **Solve.** x²/4 < 1 gives x² < 4, so |x| < 2. **R = 2**, centre 0.
4. **Endpoints.** At x = 2 or x = −2, x^(2n) = 4ⁿ (the power is even, so the sign does not matter). Each series becomes Σ 1/(n + 1) = 1 + ½ + ⅓ + …, the harmonic series, which **diverges**.

**Interval of convergence: (−2, 2).**

Suggested mark points (3): 1 for a correct ratio with limit x²/4; 1 for R = 2; 1 for testing both endpoints, naming the harmonic series, and giving (−2, 2).

Common error: treating x^(2n) as xⁿ and getting |x| < 4, or writing R = 4 from x² < 4.
</details>

## Question 6 (constructed response · core)

Let f(x) = Σ from n = 1 to ∞ of (x − 3)ⁿ / (n² · 2ⁿ).

(a) Use the ratio test to find the radius of convergence of the series for f.
(b) Find the interval of convergence of the series for f. Justify each endpoint.
(c) Write the series for f′(x), found by differentiating term by term. State its radius of convergence, with a reason.
(d) Find the interval of convergence of the series for f′(x).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** |uₙ₊₁/uₙ| = (|x − 3|/2) · n²/(n + 1)² → |x − 3|/2. Converges when |x − 3| < 2, so **R = 2**.

**(b)** Open interval (1, 5).
- x = 5: Σ 2ⁿ/(n² 2ⁿ) = Σ 1/n², a p-series with p = 2 > 1. **Converges.**
- x = 1: Σ (−2)ⁿ/(n² 2ⁿ) = Σ (−1)ⁿ/n². Its absolute values form Σ 1/n², which converges, so it **converges absolutely**.

Interval of convergence: **[1, 5]**.

**(c)** f′(x) = Σ from n = 1 to ∞ of n(x − 3)ⁿ⁻¹/(n² 2ⁿ) = **Σ from n = 1 to ∞ of (x − 3)ⁿ⁻¹/(n · 2ⁿ)**. Its radius is **2**, because a power series differentiated term by term has the same radius of convergence as the original.

**(d)**
- x = 5: Σ 2ⁿ⁻¹/(n 2ⁿ) = Σ 1/(2n) = ½ Σ 1/n, a multiple of the harmonic series. **Diverges.**
- x = 1: Σ (−2)ⁿ⁻¹/(n 2ⁿ) = Σ (−1)ⁿ⁻¹/(2n). Alternating, 1/(2n) decreases to 0, so it **converges** (alternating series test).

Interval of convergence of f′: **[1, 5)**.

| Point | What earns it |
|---|---|
| 1 | Ratio-test limit \|x − 3\|/2 and R = 2 |
| 1 | Both endpoints of f tested with named tests (p-series, absolute convergence) |
| 1 | Interval [1, 5] |
| 1 | Correct series for f′(x) |
| 1 | Radius 2 for f′, with the term-by-term reason (or a correct ratio test) |
| 1 | Interval [1, 5) for f′, with both endpoints justified |

Total: 6 points. Acceptable alternative for (c): a fresh ratio test on the f′ series, which also gives R = 2. In (d), "the endpoints are the same as for f" earns no credit: the right endpoint is lost.
</details>

## Question 7 (constructed response · stretch)

A power series Σ from n = 0 to ∞ of aₙ(x − 5)ⁿ is known to converge at x = 8 and to diverge at x = 1.

(a) What can you conclude about the radius of convergence R? Explain.
(b) For each of x = 7.5, x = 10 and x = 2, decide whether the series must converge, must diverge, or whether you cannot tell from the given information. Give a reason for each.
(c) Now suppose a₀ = 0 and aₙ = (−1)ⁿ/(n · 3ⁿ) for n ≥ 1. Show that this series agrees with the given information, and find its interval of convergence.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x = 8 is 3 units from the centre 5. A power series diverges whenever |x − 5| > R, so converging at distance 3 means 3 ≤ R. x = 1 is 4 units from the centre, and the series converges whenever |x − 5| < R, so diverging at distance 4 means R ≤ 4. **3 ≤ R ≤ 4.**

**(b)**
- **x = 7.5:** distance 2.5 < 3 ≤ R, so it is strictly inside the radius. **Must converge.**
- **x = 10:** distance 5 > 4 ≥ R. **Must diverge.**
- **x = 2:** distance 3. If R = 3, x = 2 is an endpoint and could go either way; if R > 3 it is inside. **Cannot tell.**

**(c)** Ratio: |uₙ₊₁/uₙ| = (|x − 5|/3) · n/(n + 1) → |x − 5|/3, so R = 3 (which fits 3 ≤ R ≤ 4).
- x = 8: x − 5 = 3, so the term is (−1)ⁿ3ⁿ/(n 3ⁿ) = (−1)ⁿ/n. Converges (alternating series test). ✓
- x = 1: x − 5 = −4, so |term| = (4/3)ⁿ/n, which tends to ∞. Diverges (nth term test). ✓
- x = 2: x − 5 = −3, so the term is (−1)ⁿ(−3)ⁿ/(n 3ⁿ) = 1/n. Harmonic series: **diverges**.

Interval of convergence: **(2, 8]**.

| Point | What earns it |
|---|---|
| 1 | 3 ≤ R ≤ 4, using distances from the centre 5 |
| 1 | x = 7.5 must converge and x = 10 must diverge, each with a distance reason |
| 1 | x = 2 cannot tell, explained as a possible endpoint |
| 1 | R = 3 for the specific series from a correct ratio test |
| 1 | Checks at x = 8 (converges) and x = 1 (diverges) with named tests |
| 1 | x = 2 diverges (harmonic) and interval (2, 8] |

Total: 6 points. Note for (b): a different series, such as aₙ = 1/(n² 3ⁿ), also converges at 8 and diverges at 1 but **converges** at x = 2. That is why "cannot tell" is the right answer there.
</details>

## How did you do?

- **Q1 or Q3 wrong:** reread "Finding the radius with the ratio test" in the [study guide](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/), especially the three cases R = 0, positive R and R = ∞.
- **Q2 or Q5 wrong:** practise the endpoint step with the "Endpoint toolkit" table, and watch signs when (−1)ⁿ meets a negative base.
- **Q4 wrong:** see "Power series and Taylor series": f⁽ⁿ⁾(c) = n! · aₙ.
- **Q6 wrong:** compare with "Differentiating and integrating term by term" and Worked example 2.
- **Q7 wrong:** revisit "Only three things can happen" and the paragraph on what one test value tells you.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-checklist/).
