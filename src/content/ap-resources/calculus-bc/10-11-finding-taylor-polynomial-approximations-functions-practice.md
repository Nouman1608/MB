---
resourceId: "mb-ap-calcbc-10.11-practice"
title: "Finding Taylor Polynomial Approximations of Functions: Practice Questions (Calculus BC 10.11)"
description: "Seven original Marlbridge practice questions on Taylor polynomials: coefficients, building from tables, reading derivatives back and estimating values, with rubrics."
course: "calculus-bc"
unit: 10
topics: ["10.11"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Higher-order derivatives (Topic 3.6) and local linearity (Topic 4.6)"
prerequisiteResources: ["mb-ap-calcbc-10.11-study-guide"]
learningObjectives:
  - "Find Taylor polynomial coefficients from derivative values"
  - "Build Taylor polynomials for given functions and from tables"
  - "Recover derivative values from a given Taylor polynomial"
  - "Estimate function values with a Taylor polynomial and explain when the estimate is reliable"
skills: ["2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5 and 7: no calculator. Question 6: calculator allowed for arithmetic; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-10.11-study-guide", "mb-ap-calcbc-10.11-revision-notes", "mb-ap-calcbc-10.11-checklist"]
next: "mb-ap-calcbc-10.11-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: every function named has derivatives of all orders where needed; angles in radians; no calculator except in Question 6, where decimals should be given to 3 decimal places. All contexts and data are fictional.

## Question 1 (multiple choice · foundation)

A function f has f‴(2) = 12. What is the coefficient of (x − 2)³ in the third-degree Taylor polynomial for f about x = 2?

- (A) 2
- (B) 4
- (C) 6
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The coefficient is f‴(2)/3! = 12/6 = 2.

- (B) divides by 3 instead of 3! = 6.
- (C) divides by 2!, the factorial for the (x − 2)² term.
- (D) uses the derivative itself as the coefficient, forgetting the factorial.
</details>

## Question 2 (multiple choice · core)

Which is the second-degree Maclaurin polynomial for f(x) = √(1 + 4x)?

- (A) 1 + 2x − 2x²
- (B) 1 + 2x − 4x²
- (C) 1 + 2x + 2x²
- (D) 1 + ½x − ⅛x²

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f(0) = 1. f′(x) = 2(1 + 4x)^(−1/2), so f′(0) = 2. f″(x) = −4(1 + 4x)^(−3/2), so f″(0) = −4. Then P₂(x) = 1 + 2x + (−4/2!)x² = 1 + 2x − 2x².

- (B) uses f″(0) = −4 as the coefficient without dividing by 2!.
- (C) loses the minus sign in f″: the power −1/2 gives a negative second derivative.
- (D) is the polynomial for √(1 + x). It forgets the chain-rule factor 4 in each derivative.
</details>

## Question 3 (multiple choice · core)

The third-degree Taylor polynomial for a function g about x = −1 is

P₃(x) = 5 − 2(x + 1) + 3(x + 1)² − ½(x + 1)³.

What is g‴(−1)?

- (A) −3
- (B) −3/2
- (C) −1/2
- (D) −1/12

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The coefficient of (x + 1)³ is g‴(−1)/3!, so g‴(−1) = 3! × (−½) = 6 × (−½) = −3.

- (B) multiplies by 3 instead of 3! = 6.
- (C) reads the coefficient as the derivative.
- (D) divides the coefficient by 3! instead of multiplying.
</details>

## Question 4 (multiple choice · core)

A function h has h(3) = 4, h′(3) = −1.5 and h″(3) = 2.4. Using the second-degree Taylor polynomial for h about x = 3, what is the estimate of h(2.8)?

- (A) 3.748
- (B) 4.252
- (C) 4.348
- (D) 4.396

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** P₂(x) = 4 − 1.5(x − 3) + (2.4/2)(x − 3)² = 4 − 1.5(x − 3) + 1.2(x − 3)². At x = 2.8, x − 3 = −0.2, so P₂(2.8) = 4 + 0.3 + 1.2(0.04) = 4.348.

- (A) uses x − 3 = +0.2, so the linear term becomes −0.3. Moving left of the centre makes (x − 3) negative.
- (B) gets the linear term right but subtracts the quadratic term. (x − 3)² is positive and the coefficient 1.2 is positive.
- (D) forgets to divide h″(3) by 2!, giving 4 + 0.3 + 2.4(0.04).
</details>

## Question 5 (calculation · core)

Let f(x) = 1/x.

(a) Find the third-degree Taylor polynomial for f about x = 2.
(b) Use it to approximate 1/2.1. Give your answer as an exact fraction or a decimal.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(x) = x⁻¹, f′(x) = −x⁻², f″(x) = 2x⁻³, f‴(x) = −6x⁻⁴.
At x = 2: f(2) = 1/2, f′(2) = −1/4, f″(2) = 1/4, f‴(2) = −6/16 = −3/8.
Coefficients: 1/2, −1/4, (1/4)/2 = 1/8, (−3/8)/6 = −1/16.

**P₃(x) = ½ − ¼(x − 2) + ⅛(x − 2)² − (1/16)(x − 2)³**

**(b)** x − 2 = 0.1: P₃(2.1) = 0.5 − 0.025 + 0.00125 − 0.0000625 = **0.4761875** (exactly 7619/16000).

(For comparison only: 1/2.1 = 0.476190…, so the estimate is off by about 0.000003.)

| Point | What earns it |
|---|---|
| 1 | Correct derivatives f′, f″, f‴ (signs included) |
| 1 | Correct values at x = 2 |
| 1 | Correct coefficients, dividing by 2! and 3!, written in powers of (x − 2) |
| 1 | Correct estimate 0.4761875 (or 7619/16000) |

Total: 4 points. The (b) point can be earned by correctly evaluating an incorrect polynomial from (a) only if that polynomial has degree 3 and is centred at 2.
</details>

## Question 6 (constructed response · core)

The temperature of a cup of tea in a fictional test kitchen is T(t) degrees Celsius, t minutes after it is poured. T has derivatives of all orders. At t = 4:

| t (min) | T(t) (°C) | T′(t) (°C/min) | T″(t) (°C/min²) | T‴(t) (°C/min³) |
|---|---|---|---|---|
| 4 | 70 | −3.2 | 0.36 | −0.042 |

(a) Write the third-degree Taylor polynomial for T about t = 4.
(b) Use it to estimate T(5).
(c) A student uses the same polynomial to estimate T(10) and gets 55.768 °C. Explain why the estimate of T(5) is likely to be more reliable than the estimate of T(10).
(d) What is the value of T″(4) as read from your polynomial in (a)? Show how you read it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Coefficients: 70; −3.2; 0.36/2 = 0.18; −0.042/6 = −0.007.
**P₃(t) = 70 − 3.2(t − 4) + 0.18(t − 4)² − 0.007(t − 4)³**

**(b)** t − 4 = 1: P₃(5) = 70 − 3.2 + 0.18 − 0.007 = **66.973 °C**.

**(c)** A Taylor polynomial is built to match T and its derivatives **at t = 4**, so it is most accurate close to t = 4. t = 5 is 1 minute from the centre; t = 10 is 6 minutes away. At t = 10 the terms are 70, −19.2, 6.48 and −1.512: they are not shrinking quickly, which shows the higher-degree terms we left out could also be large. At t = 5 the terms (−3.2, 0.18, −0.007) shrink fast.

**(d)** The coefficient of (t − 4)² is 0.18 = T″(4)/2!, so T″(4) = 2! × 0.18 = **0.36 °C/min²**, which agrees with the table.

| Point | What earns it |
|---|---|
| 1 | Coefficients 0.18 and −0.007 (dividing by 2! and 3!) |
| 1 | Polynomial written in powers of (t − 4) |
| 1 | Estimate 66.973 °C |
| 1 | Reason in (c) that refers to distance from the centre t = 4 (size of the terms is a good supporting reason) |
| 1 | (d) uses T″(4) = 2! × coefficient to get 0.36 |

Total: 5 points. A reason in (c) such as "polynomials are inaccurate" without reference to the centre does not earn the point.
</details>

## Question 7 (constructed response · stretch)

The fourth-degree Taylor polynomial for a function g about x = 0 is

P₄(x) = 4 − 6x² + 2x³ + (1/3)x⁴.

(a) Find g′(0), g″(0), g‴(0) and g⁽⁴⁾(0).
(b) Does g have a relative maximum, a relative minimum or neither at x = 0? Justify your answer.
(c) Write the third-degree Taylor polynomial for g′ about x = 0.
(d) Use P₄ to estimate g(0.5).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use g⁽ᵏ⁾(0) = k! × (coefficient of xᵏ).
- g′(0) = 1! × 0 = **0** (there is no x term)
- g″(0) = 2! × (−6) = **−12**
- g‴(0) = 3! × 2 = **12**
- g⁽⁴⁾(0) = 4! × (1/3) = **8**

**(b)** **Relative maximum.** g′(0) = 0 and g″(0) = −12 < 0, so by the second derivative test g has a relative maximum at x = 0.

**(c)** The Taylor polynomial for g′ has coefficients g′(0), g″(0), g‴(0)/2!, g⁽⁴⁾(0)/3!: that is 0, −12, 12/2 = 6, 8/6 = 4/3. So the polynomial is **−12x + 6x² + (4/3)x³**. This is the same as differentiating P₄ term by term.

**(d)** P₄(0.5) = 4 − 6(0.25) + 2(0.125) + (1/3)(0.0625) = 4 − 1.5 + 0.25 + 0.0208… = **133/48 ≈ 2.771**.

| Point | What earns it |
|---|---|
| 1 | g′(0) = 0 and g″(0) = −12 |
| 1 | g‴(0) = 12 and g⁽⁴⁾(0) = 8 (multiplying by 3! and 4!) |
| 1 | Relative maximum, justified with g′(0) = 0 **and** g″(0) < 0 |
| 1 | Polynomial for g′: −12x + 6x² + (4/3)x³ |
| 1 | Estimate 133/48 ≈ 2.771 |

Total: 5 points. Alternative for (c): differentiating P₄ directly is fully acceptable. In (b), a conclusion from the graph of P₄ alone, without the derivative values, does not earn the point.
</details>

## How did you do?

- **Q1 or Q3 wrong:** reread "The coefficient formula, and where n! comes from" in the [study guide](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-study-guide/), including "Reading backwards".
- **Q2 or Q5 wrong:** check your derivatives (chain rule, signs) and compare with Worked example 1.
- **Q4 or Q6 wrong:** watch the sign of (x − a) and the factorials; see Worked example 2.
- **Q6(c) wrong:** look again at the cos x table in "Seeing the approximation improve".
- **Q7 wrong:** practise reading derivatives back from coefficients.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-checklist/).
