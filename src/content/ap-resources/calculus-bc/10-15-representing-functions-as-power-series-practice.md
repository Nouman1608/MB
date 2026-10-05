---
resourceId: "mb-ap-calcbc-10.15-practice"
title: "Representing Functions as Power Series: Practice Questions (Calculus BC 10.15)"
description: "Seven original Marlbridge practice questions on building power series from known series, term-by-term differentiation and integration, and intervals of convergence, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.15"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Geometric series (Topic 10.2), radius and interval of convergence (Topic 10.13) and Maclaurin series of key functions (Topic 10.14)"
prerequisiteResources: ["mb-ap-calcbc-10.15-study-guide"]
learningObjectives:
  - "Write power series for rational functions using the geometric series"
  - "Build series by substitution and by multiplying by powers of x"
  - "Differentiate and integrate power series term by term and find intervals of convergence"
  - "Use a constructed series to find a derivative at the centre, the sum of a series or an approximation"
skills: ["2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5: no calculator. Questions 6 and 7: a calculator may be used for decimal values only; series must be built by hand. Give decimals to 6 decimal places in Questions 6 and 7."
related: ["mb-ap-calcbc-10.15-study-guide", "mb-ap-calcbc-10.15-revision-notes", "mb-ap-calcbc-10.15-checklist"]
next: "mb-ap-calcbc-10.15-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc", "exam-calculus-bc"]
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: series are about x = 0 unless a centre is given; angles in radians; no calculator for Questions 1–5; in Questions 6 and 7 a calculator may be used for decimal values, given to 6 decimal places. Notation: "Σ from n = 0 to ∞" is an infinite sum, and "∫ from a to b of f(t) dt" is a definite integral. You may use the series for 1/(1 − x), eˣ, sin x and cos x without proof.

## Question 1 (multiple choice · foundation)

Which of the following gives the Maclaurin series for f(x) = 1/(1 + 4x) and the interval on which it represents f?

- (A) Σ from n = 0 to ∞ of (−1)ⁿ 4ⁿ xⁿ, for −1/4 < x < 1/4
- (B) Σ from n = 0 to ∞ of (−1)ⁿ 4ⁿ xⁿ, for −4 < x < 4
- (C) Σ from n = 0 to ∞ of 4ⁿ xⁿ, for −1/4 < x < 1/4
- (D) Σ from n = 0 to ∞ of (−1)ⁿ 4xⁿ, for −1 < x < 1

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** 1/(1 + 4x) = 1/(1 − (−4x)), a geometric series with a = 1 and r = −4x. So f(x) = Σ (−4x)ⁿ = Σ (−1)ⁿ 4ⁿ xⁿ = 1 − 4x + 16x² − 64x³ + …. It converges when |−4x| < 1, that is |x| < 1/4.

- (B) has the right series but solves |4x| < 1 wrongly, as |x| < 4. Try x = 1: the terms (−4)ⁿ grow, so the series diverges.
- (C) uses r = 4x and loses the minus sign. Its sum is 1/(1 − 4x), a different function.
- (D) puts the power on x only, as if r were −x with a = 4 in each term. (−4x)ⁿ means (−4)ⁿxⁿ.
</details>

## Question 2 (multiple choice · core)

What is the coefficient of x⁶ in the Maclaurin series for x² cos(2x)?

- (A) 2/3
- (B) −2/3
- (C) 1/24
- (D) −4/45

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** cos(2x) = 1 − (2x)²/2! + (2x)⁴/4! − (2x)⁶/6! + … = 1 − 2x² + (2/3)x⁴ − (4/45)x⁶ + …. Multiplying by x² gives x² − 2x⁴ + (2/3)x⁶ − (4/45)x⁸ + …. The x⁶ term comes from the x⁴ term of cos(2x): 16/24 = 2/3, with a plus sign.

- (B) uses the wrong sign pattern (− + − instead of + − +): the x⁴ term of cos is positive.
- (C) substitutes into x but not into the power: it uses x⁴/4! instead of (2x)⁴/4!.
- (D) is the coefficient of x⁶ in cos(2x) itself. Multiplying by x² shifts every power up by 2, so that term becomes x⁸.
</details>

## Question 3 (multiple choice · core)

The function f is defined by f(x) = Σ from n = 1 to ∞ of xⁿ/(n · 5ⁿ) for −5 ≤ x < 5. Which of the following is f′(x) for −5 < x < 5?

- (A) 1/(5 − x)
- (B) 5/(5 − x)
- (C) x/(5 − x)
- (D) 1/(5 − x)²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Differentiate term by term: f′(x) = Σ from n = 1 of n xⁿ⁻¹/(n · 5ⁿ) = Σ from n = 1 of xⁿ⁻¹/5ⁿ = 1/5 + x/25 + x²/125 + …. This is geometric with a = 1/5 and r = x/5, so f′(x) = (1/5)/(1 − x/5) = 1/(5 − x).

- (B) drops the factor 1/5 in the first term: it treats the series as 1 + x/5 + … .
- (C) forgets that differentiating lowers each power by one, so it keeps xⁿ instead of xⁿ⁻¹.
- (D) differentiates a second time, or differentiates 1/(5 − x) instead of recognising it.
</details>

## Question 4 (multiple choice · stretch)

For −1 < x < 5, Σ from n = 0 to ∞ of (x − 2)ⁿ/3ⁿ⁺¹ = 1/(5 − x). Let G(x) = Σ from n = 0 to ∞ of (x − 2)ⁿ⁺¹/((n + 1) 3ⁿ⁺¹), the series obtained by integrating term by term from 2 to x. What is the interval of convergence of the series for G?

- (A) −1 < x < 5
- (B) −1 ≤ x < 5
- (C) −1 < x ≤ 5
- (D) −1 ≤ x ≤ 5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Integration keeps the radius, 3, so the series converges for −1 < x < 5. Test the endpoints.

- At x = 5: (x − 2)ⁿ⁺¹ = 3ⁿ⁺¹, so the terms are 1/(n + 1): the harmonic series, which **diverges**.
- At x = −1: (x − 2)ⁿ⁺¹ = (−3)ⁿ⁺¹, so the terms are (−1)ⁿ⁺¹/(n + 1): −1 + 1/2 − 1/3 + …, which **converges** by the alternating series test.

- (A) assumes the endpoints are the same as for the original geometric series. Only the radius is guaranteed.
- (C) mixes up the endpoints: x = 5 gives the harmonic series, not the alternating one.
- (D) assumes integration makes both endpoints converge.
</details>

## Question 5 (constructed response · core)

(a) Write the first four terms and the general term of the Maclaurin series for 1/(1 + x). State its interval of convergence.
(b) Use (a) to find the first four terms and the general term of the Maclaurin series for 1/(1 + x)². Explain your method.
(c) Use (b) to find the exact value of Σ from n = 1 to ∞ of (−1)ⁿ⁺¹ n/3ⁿ⁻¹ = 1 − 2/3 + 3/9 − 4/27 + ….

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 1/(1 + x) = 1/(1 − (−x)) = **1 − x + x² − x³ + … = Σ from n = 0 of (−1)ⁿ xⁿ**, for **−1 < x < 1** (a geometric series diverges at both endpoints).

**(b)** d/dx [1/(1 + x)] = −1/(1 + x)². So 1/(1 + x)² = −d/dx [1 − x + x² − x³ + x⁴ − …] = −(−1 + 2x − 3x² + 4x³ − …).

**1/(1 + x)² = 1 − 2x + 3x² − 4x³ + … = Σ from n = 1 of (−1)ⁿ⁺¹ n xⁿ⁻¹**, for −1 < x < 1.

**(c)** The given series is the series from (b) at x = 1/3, which is inside the interval: (−1)ⁿ⁺¹ n (1/3)ⁿ⁻¹ = (−1)ⁿ⁺¹ n/3ⁿ⁻¹. So the sum is 1/(1 + 1/3)² = 1/(16/9) = **9/16**.

Check: the partial sums 1, 0.333, 0.667, 0.519, … settle towards 0.5625. ✓

| Point | What earns it |
|---|---|
| 1 | Correct series and general term in (a), with r = −x |
| 1 | Interval −1 < x < 1 in (a) |
| 1 | Differentiates term by term **and** deals with the minus sign from d/dx [1/(1 + x)] = −1/(1 + x)² |
| 1 | Correct terms and general term in (b), starting at n = 1 |
| 1 | Identifies x = 1/3, notes that it is inside the interval, and gets 9/16 |

Total: 5 points. Acceptable alternative for (b): square the series from (a) and collect terms up to x³; the general term then needs the pattern to be stated. A decimal alone (0.5625) for (c) does not earn the last point, because the question asks for an exact value.
</details>

## Question 6 (constructed response · stretch)

Let F(x) = ∫ from 0 to x of (1 − e^(−t))/t dt, where the integrand is taken to be 1 at t = 0 (its limit there).

(a) Write the first four nonzero terms and the general term of the Maclaurin series for (1 − e^(−t))/t.
(b) Write the first four nonzero terms and the general term of the Maclaurin series for F(x). For which x does it converge?
(c) Use the first three nonzero terms of (b) to estimate F(1/2). Show that the estimate differs from F(1/2) by less than 0.001.
(d) Use your series to find F″(0).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitute −t into eˣ: e^(−t) = 1 − t + t²/2! − t³/3! + t⁴/4! − ….
1 − e^(−t) = t − t²/2! + t³/3! − t⁴/4! + …. Divide by t:
**(1 − e^(−t))/t = 1 − t/2 + t²/6 − t³/24 + … = Σ from n = 0 of (−1)ⁿ tⁿ/(n + 1)!**

**(b)** Integrate term by term from 0 to x (no extra constant, because F(0) = 0):
**F(x) = x − x²/4 + x³/18 − x⁴/96 + … = Σ from n = 0 of (−1)ⁿ xⁿ⁺¹/((n + 1)(n + 1)!)**
The series for eˣ converges for all x, and substitution, division by t and integration keep an infinite radius, so the series converges for **all real x**.

**(c)** F(1/2) ≈ 1/2 − 1/16 + 1/144 = **4/9 ≈ 0.444444**.
At x = 1/2 the series alternates and its terms decrease in size to 0, so the error is less than the size of the next term: (1/2)⁴/96 = 1/1536 ≈ **0.000651 < 0.001**. ✓
(A calculator gives F(1/2) ≈ 0.443842, so the actual error is about 0.000602.)

**(d)** The coefficient of x² is −1/4 = F″(0)/2!, so **F″(0) = −1/2**.

| Point | What earns it |
|---|---|
| 1 | Correct substitution into the series for eˣ |
| 1 | Correct series for the integrand, including the general term |
| 1 | Correct series for F with no extra constant, and general term |
| 1 | Converges for all real x, with a reason |
| 1 | Estimate 0.444444 (or 4/9) |
| 1 | Error bound 1/1536 from the alternating series error bound, with the conditions stated |
| 1 | F″(0) = −1/2 from the coefficient |

Total: 7 points. The error-bound point needs a reason (alternating, decreasing terms, limit 0); a calculator comparison alone does not earn it.
</details>

## Question 7 (constructed response · stretch)

Let h(x) = ∫ from 0 to x of 1/(1 + t⁴) dt.

(a) Write the first four nonzero terms and the general term of the Maclaurin series for 1/(1 + t⁴). For which t does it converge?
(b) Write the first four nonzero terms and the general term of the Maclaurin series for h(x).
(c) Find the interval of convergence of the series in (b). Justify your answer at each endpoint.
(d) Find h⁽⁹⁾(0).
(e) Use the first two nonzero terms of (b) to approximate h(1/2), and give a bound on the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Replace x by −t⁴ in 1/(1 − x):
**1/(1 + t⁴) = 1 − t⁴ + t⁸ − t¹² + … = Σ from n = 0 of (−1)ⁿ t^(4n)**, for |t⁴| < 1, that is **−1 < t < 1**.

**(b)** Integrate from 0 to x (h(0) = 0, so no constant):
**h(x) = x − x⁵/5 + x⁹/9 − x¹³/13 + … = Σ from n = 0 of (−1)ⁿ x^(4n+1)/(4n + 1)**

**(c)** The radius is still 1. Test the endpoints.

- x = 1: Σ (−1)ⁿ/(4n + 1) = 1 − 1/5 + 1/9 − …. The terms alternate, decrease in size and tend to 0, so it **converges** (alternating series test).
- x = −1: (−1)^(4n+1) = −1, so the terms are (−1)ⁿ⁺¹/(4n + 1) = −1 + 1/5 − 1/9 + …, the same series multiplied by −1, so it **converges**.

Interval of convergence: **−1 ≤ x ≤ 1**. Both endpoints were gained by integrating.

**(d)** The x⁹ term is +x⁹/9, and its coefficient equals h⁽⁹⁾(0)/9!. So h⁽⁹⁾(0) = 9!/9 = 8! = **40 320**.

**(e)** h(1/2) ≈ 1/2 − (1/2)⁵/5 = 1/2 − 1/160 = **0.49375**. The series is alternating with decreasing terms, so the error is less than the next term, (1/2)⁹/9 = 1/4608 ≈ **0.000217**. (A calculator gives h(1/2) ≈ 0.493958, an error of about 0.000208.)

| Point | What earns it |
|---|---|
| 1 | Correct series for 1/(1 + t⁴) with general term |
| 1 | Convergence condition −1 < t < 1 |
| 1 | Correct series for h with general term and no extra constant |
| 1 | Radius 1 and convergence at x = 1, with the test named |
| 1 | Convergence at x = −1 with a reason, and the interval −1 ≤ x ≤ 1 |
| 1 | h⁽⁹⁾(0) = 8! = 40 320 from the coefficient |
| 1 | 0.49375 with error bound 1/4608 (about 0.000217), justified |

Total: 7 points. Acceptable alternatives: in (c), x = −1 may be handled by noting that h is an odd function, so the series at −1 is minus the series at 1; in (e), an error bound left as (1/2)⁹/9 earns the point.
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** reread "Rewriting into geometric form" in the [study guide](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-study-guide/).
- **Q2 or Q6(a) wrong:** practise substitution into every power, and multiplying or dividing by a power of x.
- **Q3 or Q5(b) wrong:** revisit "Term-by-term differentiation and integration", including where the sum starts.
- **Q4 or Q7(c) wrong:** work through Worked example 2, part (b), on testing endpoints again.
- **Q6(b), Q6(d), Q7(b) or Q7(d) wrong:** check the constant after integrating and the rule f⁽ⁿ⁾(0) = n! × coefficient.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-15-representing-functions-as-power-series-checklist/).
