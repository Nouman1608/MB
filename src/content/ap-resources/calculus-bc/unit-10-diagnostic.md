---
resourceId: "mb-ap-calcbc-u10-diagnostic"
title: "Infinite Sequences and Series: Unit Diagnostic (Calculus BC Unit 10)"
description: "Sixteen short original questions, one or two per topic of Infinite Sequences and Series, to show which topics you should revisit, with explanations and links."
course: "calculus-bc"
unit: 10
topics: []
resourceType: "unit-diagnostic"
calculusScope: "bc-only"
prerequisites:
  - "Limits at infinity and L'Hospital's Rule"
  - "Improper integrals (Topic 6.13)"
  - "Derivatives of all orders for exponential, logarithmic and trigonometric functions"
learningObjectives:
  - "Find out which Unit 10 topics are secure and which need more work"
  - "Check that you can pick the right series test and state its conditions"
  - "Check Taylor polynomial, error bound and power series skills quickly"
  - "Practise short written justifications for classifying series and bounding errors"
skills: ["1", "2", "3"]
studyMinutes: 30
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator. Leave e, π and ln values exact; every decimal needed can be found by hand. No constants or data beyond those in each question are needed."
related: ["mb-ap-calcbc-u10-review", "mb-ap-calcbc-10.9-study-guide", "mb-ap-calcbc-10.13-study-guide", "mb-ap-calcbc-10.14-study-guide", "mb-ap-calcbc-10.15-study-guide"]
next: "mb-ap-calcbc-u10-review"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: Unit 10 is not part of Calculus AB."
  - "Use this before revising Unit 10, to decide which of the 15 topics to revisit first."
  - "Each question is labelled with its topic number, and each answer links to that topic's study guide."
  - "These are original Marlbridge practice questions, not past exam questions, and the result is not a predicted score."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**What this is for.** This diagnostic shows which topics of Unit 10, Infinite Sequences and Series, to revisit. The unit is **BC only**: it is not part of Calculus AB. There is one question per topic, and two for Topic 10.13. These are **original Marlbridge practice questions**, not past exam questions. They are not calibrated, and your result is not a predicted score.

**Rules.** No calculator; about 30 minutes. Answer everything before opening any answer, and in short answers name each test and check its conditions.

## Question 1 (multiple choice · 10.1)

The series Σ aₙ (n ≥ 1) has nth partial sum Sₙ = 2 − 3/(n + 1). Find a₃ and describe the series.

- (A) a₃ = 5/4; the series converges to 2.
- (B) a₃ = 1/4; the series converges to 0.
- (C) a₃ = 1/4; the series converges to 2.
- (D) a₃ = 1/4; the series diverges because Sₙ increases.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** a₃ = S₃ − S₂ = 5/4 − 1 = 1/4, and lim Sₙ = 2.

- (A) gives S₃, not the third term.
- (B) uses lim aₙ = 0, not lim Sₙ.
- (D) Increasing partial sums can still have a limit.

**If you missed this:** [Topic 10.1 study guide](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/).
</details>

## Question 2 (multiple choice · 10.2)

What is Σ from n = 2 to ∞ of 3(−2/5)ⁿ?

- (A) 15/7
- (B) −6/7
- (C) 4/5
- (D) 12/35

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** r = −2/5 and the first term (n = 2) is 3(4/25) = 12/25. Sum = (12/25)/(1 + 2/5) = 12/35.

- (A) starts at n = 0.
- (B) starts at n = 1.
- (C) uses r = +2/5 in the denominator.

**If you missed this:** [Topic 10.2 study guide](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/).
</details>

## Question 3 (multiple choice · 10.3)

For which series does the nth term test **prove** divergence?

- (A) Σ n/(n² + 3)
- (B) Σ arctan n
- (C) Σ (−1)ⁿ/√n
- (D) Σ 1/ln(n + 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** arctan n → π/2 ≠ 0, so Σ arctan n diverges.

- (A) and (D) diverge, but their terms tend to 0, so this test is silent.
- (C) converges; its terms also tend to 0.

**If you missed this:** [Topic 10.3 study guide](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/).
</details>

## Question 4 (multiple choice · 10.4)

For x ≥ 2, f(x) = 1/(x(ln x)²) is positive, continuous and decreasing, and ∫ from 2 to ∞ of f(x) dx = 1/ln 2. What is true of Σ from n = 2 to ∞ of f(n)?

- (A) The series converges.
- (B) The series converges, and its sum is 1/ln 2.
- (C) The series diverges, because the integral is not 0.
- (D) The integral test cannot be used, because ln x is increasing.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The conditions hold and the integral converges, so the series converges.

- (B) The test does not give the sum; the first three terms already exceed 1/ln 2.
- (C) The integral only has to converge, not be 0.
- (D) Only f has to decrease, and it does.

**If you missed this:** [Topic 10.4 study guide](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/).
</details>

## Question 5 (multiple choice · 10.5)

Which series converges?

- (A) Σ 1/n^0.9
- (B) Σ √n/n
- (C) Σ ∛n/n^(3/2)
- (D) Σ 1/∛(n²)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ∛n/n^(3/2) = 1/n^(3/2 − 1/3) = 1/n^(7/6), a p-series with p = 7/6 > 1.

- (A) p = 0.9 ≤ 1.
- (B) √n/n = 1/n^(1/2), so p = 1/2.
- (D) 1/n^(2/3), so p = 2/3.

**If you missed this:** [Topic 10.5 study guide](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/).
</details>

## Question 6 (multiple choice · 10.6)

For the limit comparison test on Σ (n + 1)/√(n⁵ + 2), which is correct?

- (A) bₙ = 1/n; limit 0; the series diverges.
- (B) bₙ = 1/n^(3/2); limit 1; the series diverges.
- (C) bₙ = 1/n^(5/2); limit ∞; the series converges.
- (D) bₙ = 1/n^(3/2); limit 1; the series converges.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The terms behave like n/n^(5/2) = 1/n^(3/2). lim aₙ/bₙ = 1, finite and positive, and Σ 1/n^(3/2) converges.

- (A) A limit of 0 with a divergent benchmark decides nothing.
- (B) Σ 1/n^(3/2) converges, so the series does too.
- (C) A limit of ∞ with a convergent benchmark decides nothing.

**If you missed this:** [Topic 10.6 study guide](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/).
</details>

## Question 7 (multiple choice · 10.7)

Which statement about Σ from n = 2 to ∞ of (−1)ⁿ/ln n is true?

- (A) It diverges, because Σ 1/ln n diverges.
- (B) It converges by the alternating series test.
- (C) The alternating series test cannot be used, because 1/ln n decreases too slowly.
- (D) It converges absolutely, by comparison with Σ 1/n.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** 1/ln n is positive, decreasing and tends to 0, and the signs alternate.

- (A) Σ |aₙ| diverging does not make the series diverge.
- (C) The test has no speed condition.
- (D) 1/ln n > 1/n, so Σ |aₙ| diverges by direct comparison.

**If you missed this:** [Topic 10.7 study guide](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/).
</details>

## Question 8 (multiple choice · 10.8)

The ratio test is applied to Σ 3ⁿ n!/(n + 1)ⁿ. Which statement is correct?

- (A) L = 3/e, so the series diverges.
- (B) L = 3/e, so the series converges.
- (C) L = 3, so the series diverges.
- (D) L = 1, so the test gives no conclusion.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** aₙ₊₁/aₙ = 3(n + 1)(n + 1)ⁿ/(n + 2)ⁿ⁺¹ = 3((n + 1)/(n + 2))ⁿ⁺¹. With m = n + 1, this is 3/(1 + 1/m)ᵐ → 3/e. As e < 3, L > 1.

- (B) treats 3/e as less than 1.
- (C) loses the factor ((n + 1)/(n + 2))ⁿ⁺¹.
- (D) treats that 1^∞ form as 1.

**If you missed this:** [Topic 10.8 study guide](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/).
</details>

## Question 9 (short answer · 10.9)

Classify Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ n/(n² + 9) as absolutely convergent, conditionally convergent or divergent. Justify.

<details>
<summary>Worked answer</summary>

**Absolute values.** lim [n/(n² + 9)] ÷ (1/n) = lim n²/(n² + 9) = 1, and Σ 1/n diverges, so by limit comparison **Σ |aₙ| diverges**.

**The series itself.** aₙ = n/(n² + 9) > 0 and aₙ → 0. With f(x) = x/(x² + 9), f′(x) = (9 − x²)/(x² + 9)² < 0 for x > 3, so the terms decrease for n ≥ 3. By the alternating series test, the series converges.

So the series is **conditionally convergent**.

**If you missed this:** [Topic 10.9 study guide](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/).
</details>

## Question 10 (multiple choice · 10.10)

S = 1 − 1/2 + 1/6 − 1/24 + … = Σ (−1)ⁿ⁺¹/n! (n ≥ 1), and S₄ = 0.625. Which interval for S does the alternating series error bound give?

- (A) 0.625 − 1/120 < S < 0.625
- (B) 0.625 − 1/24 < S < 0.625
- (C) 0.625 < S < 0.625 + 1/120
- (D) 0.625 < S < 0.625 + 1/24

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The test conditions hold, so |S − S₄| < a₅ = 1/120. The first omitted term, +1/120, is positive, so S₄ is an underestimate.

- (A) gets the direction wrong.
- (B) and (D) use the last term kept, not the first term left out. (D) is true, but it is not the bound.

**If you missed this:** [Topic 10.10 study guide](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/).
</details>

## Question 11 (multiple choice · 10.11)

What is the second-degree Taylor polynomial for f(x) = x ln x about x = 1?

- (A) (x − 1) + (x − 1)²
- (B) (x − 1) − ½(x − 1)²
- (C) x + ½x²
- (D) (x − 1) + ½(x − 1)²

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** f(1) = 0, f′(x) = ln x + 1 gives f′(1) = 1, and f″(x) = 1/x gives f″(1) = 1; divide by 2!.

- (A) forgets to divide by 2!.
- (B) has a sign error in f″.
- (C) is centred at 0, not 1.

**If you missed this:** [Topic 10.11 study guide](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/).
</details>

## Question 12 (short answer · 10.12)

Let f(x) = e^(−x).

(a) Find P₃(x), the third-degree Maclaurin polynomial for f, and P₃(0.3).
(b) Use the Lagrange error bound to bound |f(0.3) − P₃(0.3)|.
(c) Hence show that e^(−0.3) > 0.74.

<details>
<summary>Worked answer</summary>

**(a)** The derivatives at 0 are 1, −1, 1, −1, so P₃(x) = 1 − x + x²/2 − x³/6, and **P₃(0.3) = 1 − 0.3 + 0.045 − 0.0045 = 0.7405**.

**(b)** f⁽⁴⁾(z) = e^(−z) ≤ 1 for 0 ≤ z ≤ 0.3, so take M = 1. The bound is 1 × 0.3⁴/4! = 0.0081/24 = **0.0003375**.

**(c)** f(0.3) ≥ 0.7405 − 0.0003375 = 0.7401625 > 0.74.

**If you missed this:** [Topic 10.12 study guide](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/).
</details>

## Question 13 (multiple choice · 10.13)

Find the interval of convergence of Σ (x + 2)ⁿ/(n · 3ⁿ), n ≥ 1.

- (A) (−5, 1]
- (B) [−5, 1)
- (C) [−1, 5)
- (D) (−5, 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The ratio test gives |x + 2|/3 < 1: centre −2, R = 3. At x = 1 the series is Σ 1/n (diverges); at x = −5 it is Σ (−1)ⁿ/n (converges).

- (A) swaps the endpoint results.
- (C) uses centre +2.
- (D) never tests the endpoints.

**If you missed this:** [Topic 10.13 study guide](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/).
</details>

## Question 14 (multiple choice · 10.13)

f(x) = Σ (x − 1)ⁿ/(n · 2ⁿ) (n ≥ 1) converges on [−1, 3). On what interval does the term-by-term series for f′(x) converge?

- (A) (−1, 3)
- (B) [−1, 3)
- (C) [−1, 3]
- (D) (−2, 2)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = Σ (x − 1)ⁿ⁻¹/2ⁿ. R stays 2. At x = 3 and x = −1 the terms are ±1/2, so both endpoints fail the nth term test.

- (B) assumes the endpoints never change.
- (C) gains an endpoint.
- (D) centres the interval at 0.

**If you missed this:** [Topic 10.13 study guide](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/).
</details>

## Question 15 (multiple choice · 10.14)

What is Σ from n = 1 to ∞ of 2ⁿ/n!?

- (A) e²
- (B) e² − 1
- (C) e² − 2
- (D) 2e

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From the series for eˣ, Σ from n = 0 of 2ⁿ/n! = e². The given sum leaves out the n = 0 term, 1.

- (A) keeps the n = 0 term.
- (C) also removes the n = 1 term.
- (D) multiplies instead of using the series for eˣ.

**If you missed this:** [Topic 10.14 study guide](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/).
</details>

## Question 16 (short answer · 10.15)

Let f(x) = x e^(−x²).

(a) Write the first four nonzero terms and the general term of the Maclaurin series for f.
(b) Write ∫ from 0 to 1 of f(x) dx as a series. Use three terms to estimate it, and bound the error.

<details>
<summary>Worked answer</summary>

**(a)** Put u = −x² into eᵘ, then multiply by x: **f(x) = x − x³ + x⁵/2 − x⁷/6 + … + (−1)ⁿx²ⁿ⁺¹/n! + …**, for all x.

**(b)** ∫ from 0 to 1 = Σ (−1)ⁿ/(n!(2n + 2)) = 1/2 − 1/4 + 1/12 − 1/48 + … . Three terms give **1/3**. The terms alternate, decrease and tend to 0, so the error is less than **1/48**.

**If you missed this:** [Topic 10.15 study guide](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/).
</details>

## Your next step

| Topic | Question(s) | If you missed it, read |
|---|---|---|
| 10.1 Convergence | 1 | [Guide](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/) |
| 10.2 Geometric series | 2 | [Guide](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/) |
| 10.3 nth term test | 3 | [Guide](/advanced-course-resources/calculus-bc/10-3-nth-term-test-divergence-study-guide/) |
| 10.4 Integral test | 4 | [Guide](/advanced-course-resources/calculus-bc/10-4-integral-test-convergence-study-guide/) |
| 10.5 p-series | 5 | [Guide](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/) |
| 10.6 Comparison tests | 6 | [Guide](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/) |
| 10.7 Alternating test | 7 | [Guide](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/) |
| 10.8 Ratio test | 8 | [Guide](/advanced-course-resources/calculus-bc/10-8-ratio-test-convergence-study-guide/) |
| 10.9 Absolute or conditional | 9 | [Guide](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/) |
| 10.10 Alternating error bound | 10 | [Guide](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/) |
| 10.11 Taylor polynomials | 11 | [Guide](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/) |
| 10.12 Lagrange error bound | 12 | [Guide](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/) |
| 10.13 Interval of convergence | 13, 14 | [Guide](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/) |
| 10.14 Taylor series | 15 | [Guide](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/) |
| 10.15 Building power series | 16 | [Guide](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/) |

## How to use your result

- **Mark each topic** secure, shaky (a slip) or gap (wrong).
- **Fix gaps in Topics 10.1, 10.2 and 10.11 first**: later topics build on them.
- **In Questions 9, 12 and 16**, check that you named each test and showed its conditions.
- **For a gap**, read the guide, then do the topic's practice set.
- **Then try the [Unit 10 mixed review](/advanced-course-resources/calculus-bc/unit-10-review/)**.
