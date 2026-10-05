---
resourceId: "mb-ap-calcbc-10.14-practice"
title: "Finding Taylor or Maclaurin Series for a Function: Practice Questions (Calculus BC 10.14)"
description: "Seven original Marlbridge practice questions on Taylor and Maclaurin series: the four key series, series from derivatives, reading coefficients and recognising sums, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.14"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Taylor polynomials (Topic 10.11) and radius and interval of convergence (Topic 10.13)"
prerequisiteResources: ["mb-ap-calcbc-10.14-study-guide"]
learningObjectives:
  - "Recall and use the Maclaurin series for eˣ, sin x, cos x and 1/(1 − x)"
  - "Build a Taylor series about x = c from derivatives, with its general term"
  - "Read derivative values and local behaviour from a Taylor series"
  - "Recognise the sum of a numerical series as a value of a known function"
  - "State and justify where a Taylor series converges"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6 and Question 7(a)–(c): no calculator. Question 7(d): calculator allowed; give decimals to 6 decimal places."
related: ["mb-ap-calcbc-10.14-study-guide", "mb-ap-calcbc-10.14-revision-notes", "mb-ap-calcbc-10.14-checklist"]
next: "mb-ap-calcbc-10.14-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator except in Question 7(d), where decimals should be given to 6 decimal places. Notation: "Σ from n = 0 to ∞ of uₙ" is an infinite series, and f⁽ⁿ⁾(c) is the nth derivative of f at c. You may use the Maclaurin series for eˣ, sin x, cos x and 1/(1 − x) without deriving them.

## Question 1 (multiple choice · foundation)

Which of the following is the Maclaurin series for cos x?

- (A) Σ from n = 0 to ∞ of (−1)ⁿ x^(2n+1)/(2n + 1)!
- (B) Σ from n = 0 to ∞ of (−1)ⁿ x^(2n)/(2n)!
- (C) Σ from n = 0 to ∞ of x^(2n)/(2n)!
- (D) Σ from n = 0 to ∞ of (−1)ⁿ x^(2n)/n!

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The derivatives of cos x at 0 cycle 1, 0, −1, 0, so only even powers appear, with alternating signs and the matching factorial: 1 − x²/2! + x⁴/4! − … .

- (A) is the series for sin x: odd powers, starting with x. But cos 0 = 1, so the series must start with 1.
- (C) has no alternating sign. Its x² coefficient is +1/2, which would make the second derivative at 0 equal to +1; for cos x it is −cos 0 = −1.
- (D) uses n! instead of (2n)!. Its x⁴ coefficient is 1/2!, but cos x needs 1/4! = 1/24.
</details>

## Question 2 (multiple choice · core)

What is the exact value of Σ from n = 0 to ∞ of (−1)ⁿ π^(2n) / (4ⁿ (2n)!)?

- (A) −1
- (B) 0
- (C) √2/2
- (D) 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** π^(2n)/4ⁿ = (π/2)^(2n), so the series is Σ (−1)ⁿ(π/2)^(2n)/(2n)!. The even powers, the (2n)! and the alternating signs match the cos x series with x = π/2. So the sum is cos(π/2) = **0**.

- (A) is cos π: it misses the 4ⁿ in the denominator and uses x = π.
- (C) is cos(π/4): it divides π by 4 instead of combining π^(2n)/4ⁿ = (π/2)^(2n).
- (D) is sin(π/2): it matches the wrong series. The sin series has odd powers and (2n + 1)!.
</details>

## Question 3 (multiple choice · core)

Which of the following is the Taylor series for eˣ about x = 3?

- (A) Σ from n = 0 to ∞ of e³(x − 3)ⁿ/n!
- (B) Σ from n = 0 to ∞ of (x − 3)ⁿ/n!
- (C) Σ from n = 0 to ∞ of e³xⁿ/n!
- (D) Σ from n = 0 to ∞ of e³(x − 3)ⁿ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Every derivative of eˣ is eˣ, so f⁽ⁿ⁾(3) = e³ for every n. The coefficients are e³/n!, and the powers are (x − 3)ⁿ.

- (B) uses the derivative values at 0 (all equal to 1) instead of at 3. Its value at x = 3 is 1, not e³.
- (C) has the right coefficients but powers of x, which belong to a series about 0.
- (D) forgets to divide by n!. Its second derivative at 3 would be 2e³, not e³.
</details>

## Question 4 (multiple choice · stretch)

The Maclaurin series for a function f begins 3 − 4x² + 7x³ + … , and it converges to f(x) near x = 0. Which of the following must be true?

- (A) f has a local maximum at x = 0.
- (B) f has a local minimum at x = 0.
- (C) f″(0) = −4
- (D) f‴(0) = 7

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** There is no x term, so a₁ = 0 and f′(0) = 1! · 0 = 0. The x² coefficient is −4, so f″(0) = 2! · (−4) = −8 < 0. By the second derivative test, f has a local maximum at x = 0.

- (B) reverses the second derivative test: f″(0) < 0 means concave down, which gives a maximum.
- (C) reads the coefficient as the derivative. f″(0) = 2! × (−4) = −8.
- (D) does the same for the cubic term. f‴(0) = 3! × 7 = 42.
</details>

## Question 5 (calculation · core)

(a) Find the first four nonzero terms and the general term of the Taylor series for f(x) = cos x about x = π.
(b) Explain why the fourth-degree and fifth-degree Taylor polynomials for f about x = π are the same.

<details>
<summary>Worked solution</summary>

**(a)** Derivatives: cos x, −sin x, −cos x, sin x, cos x, … At x = π, cos π = −1 and sin π = 0, so the values are:

f(π) = −1, f′(π) = 0, f″(π) = 1, f‴(π) = 0, f⁽⁴⁾(π) = −1, f⁽⁵⁾(π) = 0, f⁽⁶⁾(π) = 1, …

Only even orders survive, with values −1, 1, −1, 1, … . Dividing by the factorials:

**cos x = −1 + (x − π)²/2! − (x − π)⁴/4! + (x − π)⁶/6! − … = Σ from n = 0 to ∞ of (−1)ⁿ⁺¹(x − π)^(2n)/(2n)!**

Check: cos x = −cos(x − π), so the answer is minus the cos series with x − π in place of x. ✓

**(b)** f⁽⁵⁾(π) = −sin π = 0, so the (x − π)⁵ term is 0. Adding a zero term does not change the polynomial, so P₅ = P₄ = −1 + (x − π)²/2 − (x − π)⁴/24.

Suggested mark points (3): 1 for correct derivative values at π; 1 for the four nonzero terms with factorials and signs; 1 for a correct general term and the explanation in (b).

Common error: writing the general term with (−1)ⁿ, which gives +1 as the first term. Check it at n = 0: the series must start with f(π) = −1.
</details>

## Question 6 (constructed response · core)

A function f has derivatives of all orders at x = 2, with f⁽ⁿ⁾(2) = (−1)ⁿ n! / ((n + 1) 5ⁿ) for n = 0, 1, 2, … .

(a) Write the first four terms and the general term of the Taylor series for f about x = 2.
(b) Find the interval of convergence of this series. Justify each endpoint.
(c) Use the second-degree Taylor polynomial for f about x = 2 to approximate f(2.5).
(d) Is f increasing or decreasing at x = 2? Give a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** aₙ = f⁽ⁿ⁾(2)/n! = (−1)ⁿ/((n + 1)5ⁿ). So a₀ = 1, a₁ = −1/10, a₂ = 1/75, a₃ = −1/500.

**Taylor series: 1 − (x − 2)/10 + (x − 2)²/75 − (x − 2)³/500 + … = Σ from n = 0 to ∞ of (−1)ⁿ(x − 2)ⁿ/((n + 1)5ⁿ)**

**(b)** Ratio: |uₙ₊₁/uₙ| = (|x − 2|/5) · (n + 1)/(n + 2) → |x − 2|/5. So |x − 2| < 5, R = 5, open interval (−3, 7).
- x = 7: x − 2 = 5, so the series is Σ (−1)ⁿ/(n + 1) = 1 − ½ + ⅓ − … . Alternating, 1/(n + 1) decreases to 0: **converges**.
- x = −3: x − 2 = −5, so (−1)ⁿ(−5)ⁿ = 5ⁿ and the series is Σ 1/(n + 1), the harmonic series: **diverges**.

Interval of convergence: **(−3, 7]**.

**(c)** P₂(x) = 1 − (x − 2)/10 + (x − 2)²/75. With x − 2 = 0.5: P₂(2.5) = 1 − 0.05 + 0.25/75 = **143/150 ≈ 0.953**.

**(d)** f′(2) = a₁ · 1! = −1/10 < 0, so f is **decreasing** at x = 2.

| Point | What earns it |
|---|---|
| 1 | Four correct terms with (x − 2) powers |
| 1 | Correct general term (−1)ⁿ(x − 2)ⁿ/((n + 1)5ⁿ) |
| 1 | Radius 5 from a correct ratio test |
| 1 | Both endpoints decided with named tests, giving (−3, 7] |
| 1 | P₂(2.5) = 143/150 ≈ 0.953 |
| 1 | Decreasing, because f′(2) = −1/10 < 0 |

Total: 6 points. In (a), forgetting to divide by n! (writing f⁽ⁿ⁾(2) as the coefficient) loses both (a) points, but later parts can earn credit if they follow correctly from the student's series.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = sin x.

(a) Find f(π/4), f′(π/4), f″(π/4) and f‴(π/4), and write the first four terms of the Taylor series for f about x = π/4.
(b) Describe the pattern in the values f⁽ⁿ⁾(π/4). Use it to find f⁽¹⁰⁾(π/4) and the coefficient of (x − π/4)¹⁰ in the series.
(c) Explain why this series converges for all real x.
(d) *Calculator allowed.* Use the third-degree Taylor polynomial to approximate sin(π/4 + 0.1). Compare it with your calculator's value of sin(π/4 + 0.1), both to 6 decimal places.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** sin(π/4) = cos(π/4) = √2/2. Derivatives: sin x, cos x, −sin x, −cos x. So

f(π/4) = √2/2, f′(π/4) = √2/2, f″(π/4) = −√2/2, f‴(π/4) = −√2/2.

**sin x = √2/2 + (√2/2)(x − π/4) − (√2/4)(x − π/4)² − (√2/12)(x − π/4)³ + …**

(The last two coefficients are (−√2/2)/2! and (−√2/2)/3!.)

**(b)** The derivatives repeat every 4 steps: sin, cos, −sin, −cos. At π/4 the values follow the sign pattern **+, +, −, −**, repeating, always with size √2/2. Since 10 = 4 · 2 + 2, the tenth derivative is −sin x, so **f⁽¹⁰⁾(π/4) = −√2/2**. The coefficient is (−√2/2)/10! = **−√2/(2 · 10!)** (about −1.95 × 10⁻⁷).

**(c)** Every coefficient has size (√2/2)/n!, and none is 0. The ratio of the sizes of consecutive terms is |x − π/4| · n!/(n + 1)! = |x − π/4|/(n + 1), which tends to 0 for every x. By the ratio test, the series converges for every real x (R = ∞).

**(d)** With h = 0.1: P₃ = (√2/2)(1 + 0.1 − 0.01/2 − 0.001/6) ≈ **0.774164**. Calculator: sin(π/4 + 0.1) ≈ **0.774167**. They differ by about 0.000003, so the third-degree partial sum is already very close.

| Point | What earns it |
|---|---|
| 1 | All four derivative values at π/4 |
| 1 | Four correct terms, dividing by 2! and 3! |
| 1 | The +, +, −, − pattern and f⁽¹⁰⁾(π/4) = −√2/2 |
| 1 | Coefficient −√2/(2 · 10!) |
| 1 | Ratio-test argument with limit 0, so convergence for all x |
| 1 | P₃ ≈ 0.774164 and a correct comparison with 0.774167 |

Total: 6 points. Acceptable alternative for (c): sin x = sin(π/4)cos(x − π/4) + cos(π/4)sin(x − π/4), and the cos and sin series converge for all real numbers. For (d), a difference of 1 in the sixth decimal place caused by rounding during the working is acceptable with a correct method.
</details>

## How did you do?

- **Q1 wrong:** relearn the table of four series in the [study guide](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-study-guide/), and use the odd/even checks.
- **Q2 wrong:** read "Recognising the sum of a series", and match powers, factorials and signs.
- **Q3 or Q5 wrong:** see "Taylor series about other centres" and Worked example 1.
- **Q4 or Q6(d) wrong:** revisit Worked example 2: f⁽ⁿ⁾(c) = n! · aₙ, then the first and second derivative tests.
- **Q6(b) wrong:** practise endpoints in [Topic 10.13](/advanced-course-resources/calculus-bc/10-13-radius-interval-convergence-power-series-study-guide/).
- **Q7 wrong:** compare with the derivative-pattern method in Worked example 1 and the sin x derivation.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-14-finding-taylor-maclaurin-series-function-checklist/).
