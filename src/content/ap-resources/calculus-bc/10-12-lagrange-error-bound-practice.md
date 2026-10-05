---
resourceId: "mb-ap-calcbc-10.12-practice"
title: "Lagrange Error Bound: Practice Questions (Calculus BC 10.12)"
description: "Seven original Marlbridge practice questions on the Lagrange error bound: setting up the bound, choosing M, intervals, degree needed and the alternating series option, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.12"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Taylor polynomials (Topic 10.11) and the alternating series error bound (Topic 10.10)"
prerequisiteResources: ["mb-ap-calcbc-10.12-study-guide"]
learningObjectives:
  - "Set up and evaluate the Lagrange error bound"
  - "Choose and justify a valid M"
  - "Use a bound to show an error is less than a given number and to give an interval for the true value"
  - "Find the degree needed for a required accuracy and compare with the alternating series bound"
skills: ["1"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–4 and 6: no calculator. Questions 5 and 7: calculator allowed for arithmetic; give decimals to at least 4 significant figures."
related: ["mb-ap-calcbc-10.12-study-guide", "mb-ap-calcbc-10.12-revision-notes", "mb-ap-calcbc-10.12-checklist"]
next: "mb-ap-calcbc-10.12-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: every function named has derivatives of all orders on the intervals used; angles in radians; no calculator for Questions 1–4 and 6; in Questions 5 and 7 a calculator may be used for arithmetic, with decimals to at least 4 significant figures. "Pₙ" always means the nth-degree Taylor polynomial about the stated centre. All data are fictional.

## Question 1 (multiple choice · foundation)

P₃ is the third-degree Taylor polynomial for f about x = 1. For every z between 1 and 1.2, the size of f⁽⁴⁾(z) is at most 5. Which is the Lagrange error bound for |f(1.2) − P₃(1.2)|?

- (A) 5(0.2)⁴/4!
- (B) 5(0.2)³/3!
- (C) 5(0.2)⁴/3!
- (D) 5(0.2)⁴

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With n = 3, the bound is M · |x − a|ⁿ⁺¹/(n + 1)! = 5(0.2)⁴/4! = 5(0.0016)/24 ≈ 0.000333.

- (B) uses n in place of n + 1, both in the power and in the factorial. That is the shape of the last term used, not of the error.
- (C) has the right power but divides by 3! instead of 4!.
- (D) forgets the factorial altogether.
</details>

## Question 2 (multiple choice · core)

P₂ is the second-degree Maclaurin polynomial for f(x) = e^(2x), used to approximate f(0.1). Which of these can be used as M in the Lagrange error bound?

- (A) 8
- (B) e^0.2
- (C) 4e^0.2
- (D) 8e^0.2

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** With n = 2 you need f‴(z) = 8e^(2z). On 0 ≤ z ≤ 0.1 this is increasing, so its largest value is 8e^0.2 ≈ 9.77, at z = 0.1. Any M at least this big is valid, and 8e^0.2 is the smallest such choice.

- (A) is f‴ at the centre, z = 0. Because f‴ increases, 8 is smaller than the true maximum, so it is not a valid M.
- (B) forgets the chain-rule factor 2³ = 8.
- (C) is the maximum of f″(z) = 4e^(2z), the wrong derivative for n = 2.
</details>

## Question 3 (multiple choice · core)

The Maclaurin series for a function g is

1 − x/3 + x²/5 − x³/7 + … + (−1)ᵏ xᵏ/(2k + 1) + …

and it converges to g(x) at x = 0.5. The second-degree Maclaurin polynomial P₂ is used to approximate g(0.5). Using the alternating series error bound, the error is at most

- (A) 0.05
- (B) about 0.0179
- (C) about 0.0069
- (D) about 0.0030

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At x = 0.5 the terms 1, 0.5/3, 0.25/5, 0.125/7, … alternate in sign, decrease in size and tend to 0. So the error is at most the first omitted term: 0.5³/7 = 0.125/7 ≈ 0.0179.

- (A) is 0.25/5, the last term **used**, not the first omitted one.
- (C) is 0.0625/9, the term after the first omitted term.
- (D) divides 0.125/7 by 3!, mixing up the alternating series bound with the factorial in the Lagrange bound.
</details>

## Question 4 (multiple choice · core)

P₃(1.4) = 2.15 is used to estimate f(1.4), and the Lagrange error bound gives |f(1.4) − P₃(1.4)| ≤ 0.004. Which statement must be true?

- (A) 2.146 ≤ f(1.4) ≤ 2.154
- (B) 2.15 ≤ f(1.4) ≤ 2.154
- (C) The difference between f(1.4) and 2.15 is exactly 0.004.
- (D) f(1.4) = 2.15

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The bound limits the size of the error in **either** direction, so f(1.4) lies in [2.15 − 0.004, 2.15 + 0.004] = [2.146, 2.154].

- (B) assumes the estimate is an underestimate. Nothing in the question gives the sign of the error.
- (C) treats the bound as the actual error. The true error can be anything from 0 up to 0.004.
- (D) treats the estimate as exact.
</details>

## Question 5 (constructed response · core)

Let f(x) = 1/(1 + x).

(a) Find P₂(x), the second-degree Maclaurin polynomial for f.
(b) Use P₂ to approximate f(−0.1).
(c) Use the Lagrange error bound to show that |f(−0.1) − P₂(−0.1)| < 0.002.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) = (1 + x)⁻¹, f′(x) = −(1 + x)⁻², f″(x) = 2(1 + x)⁻³, f‴(x) = −6(1 + x)⁻⁴.
f(0) = 1, f′(0) = −1, f″(0) = 2. So **P₂(x) = 1 − x + x²**.

**(b)** P₂(−0.1) = 1 + 0.1 + 0.01 = **1.11**.

**(c)** n = 2, so use f‴. The size of f‴(z) is 6/(1 + z)⁴. For −0.1 ≤ z ≤ 0, 1 + z is smallest at z = −0.1, so the size is **largest at z = −0.1**: M = 6/0.9⁴ = 6/0.6561 ≈ 9.145.
Bound: M · |−0.1 − 0|³/3! = (6/0.9⁴)(0.001)/6 = 0.001/0.9⁴ ≈ **0.001524**.
Since **0.001524 < 0.002**, |f(−0.1) − P₂(−0.1)| < 0.002.

*Why the endpoint matters:* taking M = 6 (the value at the centre) gives 0.001, but the actual error is 1/0.9 − 1.11 ≈ 0.001111, which is **bigger** than 0.001. A wrong M can give a "bound" that is false.

| Point | What earns it |
|---|---|
| 1 | P₂(x) = 1 − x + x² |
| 1 | Estimate 1.11 |
| 1 | Uses the third derivative and a valid M, justified (largest at z = −0.1) |
| 1 | Bound about 0.001524 (or 0.001/0.9⁴) |
| 1 | Explicit comparison: bound < 0.002 |

Total: 5 points. Any larger valid M is accepted if the bound is still shown to be less than 0.002; for example M = 10 gives 10(0.001)/6 ≈ 0.001667 < 0.002. M = 6 does not earn the M point.
</details>

## Question 6 (constructed response · core)

A function g has the following values at x = 2. For all x in the interval 2 ≤ x ≤ 2.6, the size of g⁽⁴⁾(x) is at most 15.

| x | g(x) | g′(x) | g″(x) | g‴(x) |
|---|---|---|---|---|
| 2 | −1 | 3 | −4 | 9 |

(a) Write the third-degree Taylor polynomial P₃ for g about x = 2.
(b) Use P₃ to approximate g(2.4).
(c) Use the Lagrange error bound to show that |g(2.4) − P₃(2.4)| < 0.02.
(d) Find an interval that must contain g(2.4). Can you conclude that g(2.4) is negative? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Coefficients: −1, 3, −4/2 = −2, 9/6 = 1.5.
**P₃(x) = −1 + 3(x − 2) − 2(x − 2)² + 1.5(x − 2)³**

**(b)** x − 2 = 0.4: P₃(2.4) = −1 + 1.2 − 0.32 + 0.096 = **−0.024**.

**(c)** n = 3, M = 15: bound = 15(0.4)⁴/4! = 15(0.0256)/24 = **0.016**. Since **0.016 < 0.02**, |g(2.4) − P₃(2.4)| < 0.02.

**(d)** g(2.4) lies in [−0.024 − 0.016, −0.024 + 0.016] = **[−0.04, −0.008]**. Every number in this interval is negative, so **yes, g(2.4) < 0**.

| Point | What earns it |
|---|---|
| 1 | Coefficients −2 and 1.5 (dividing by 2! and 3!), in powers of (x − 2) |
| 1 | Estimate −0.024 |
| 1 | Bound 15(0.4)⁴/4! = 0.016 |
| 1 | Explicit comparison 0.016 < 0.02 |
| 1 | Interval [−0.04, −0.008] and the conclusion g(2.4) < 0 because the whole interval is below 0 |

Total: 5 points. In (d), using 0.02 in place of 0.016 gives [−0.044, −0.004], which also leads to the correct conclusion and is accepted. Saying "yes, because P₃(2.4) is negative" without the interval does not earn the point: the estimate alone does not prove the sign.
</details>

## Question 7 (constructed response · stretch)

The Maclaurin polynomials for cos x are used to approximate cos 0.5.

(a) Using M = 1, find the smallest n for which the Lagrange error bound for |cos 0.5 − Pₙ(0.5)| is less than 0.0001.
(b) Explain why P₄(0.5) already meets the accuracy in (a), even though your answer to (a) may be larger than 4.
(c) Use the alternating series error bound to bound the error of P₄(0.5) = 1 − 0.5²/2 + 0.5⁴/24, and decide whether P₄(0.5) is an overestimate or an underestimate.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Every derivative of cos x is ±sin x or ±cos x, so M = 1 is valid. Bound: 0.5ⁿ⁺¹/(n + 1)!.
- n = 3: 0.5⁴/24 ≈ 0.002604 (too big)
- n = 4: 0.5⁵/120 ≈ 0.0002604 (too big)
- n = 5: 0.5⁶/720 ≈ 0.0000217 (less than 0.0001)

So **n = 5**.

**(b)** The x⁵ coefficient of cos x is 0 (all odd coefficients are 0), so **P₅ = P₄**. The n = 5 bound therefore applies to P₄(0.5) as well, so P₄(0.5) is within about 0.0000217 < 0.0001.

**(c)** The series 1 − x²/2! + x⁴/4! − x⁶/6! + … has terms that alternate, decrease in size at x = 0.5 and tend to 0. The first omitted term is −0.5⁶/720 ≈ −0.0000217, so the error is at most **0.0000217**. That term is **negative**, so the true value is below P₄(0.5): P₄(0.5) ≈ 0.877604 is an **overestimate**.
(Calculator check: cos 0.5 ≈ 0.877583, so P₄(0.5) is too big by about 0.0000216.)

| Point | What earns it |
|---|---|
| 1 | Correct bound expression 0.5ⁿ⁺¹/(n + 1)! with M = 1 justified |
| 1 | n = 5, with the n = 4 value shown to be too big |
| 1 | P₅ = P₄ because the x⁵ coefficient is 0 |
| 1 | Alternating series bound 0.5⁶/720 ≈ 0.0000217, with the conditions stated |
| 1 | Overestimate, because the first omitted term is negative |

Total: 5 points. In (c), a correct Lagrange argument for the sign (for example using the sign of the next derivative) is also accepted.
</details>

## How did you do?

- **Q1 or Q6(c) wrong:** recheck the formula: f⁽ⁿ⁺¹⁾, power n + 1 and (n + 1)!. See "The Lagrange error bound" in the [study guide](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/).
- **Q2 or Q5(c) wrong:** reread "Choosing M", and check both ends of the interval.
- **Q4 or Q6(d) wrong:** look again at the number line in Worked example 1.
- **Q3 or Q7(c) wrong:** revisit "The alternating series error bound as an alternative".
- **Q7(a)–(b) wrong:** work through Worked example 2, choosing the degree.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-checklist/).
