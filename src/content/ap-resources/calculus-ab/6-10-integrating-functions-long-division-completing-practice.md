---
resourceId: "mb-ap-calcab-6.10-practice"
title: "Integrating Functions Using Long Division and Completing the Square: Practice Questions (Calculus AB 6.10)"
description: "Seven original Marlbridge practice questions on rewriting integrands with long division and completing the square, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 6
topics: ["6.10"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Substitution and the basic ln, arctan and arcsin antiderivatives"
prerequisiteResources: ["mb-ap-calcab-6.10-study-guide"]
learningObjectives:
  - "Use long division to rewrite and integrate rational functions"
  - "Complete the square to reach arctan and arcsin forms"
  - "Split a linear numerator into a logarithm part and an arctan part"
  - "Explain when a rearrangement applies and check results by differentiating or estimating"
skills: ["1", "3", "4"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Exact answers may contain ln, π and surds."
related: ["mb-ap-calcab-6.10-study-guide", "mb-ap-calcab-6.10-revision-notes", "mb-ap-calcab-6.10-checklist"]
next: "mb-ap-calcab-6.10-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, exact answers, and every integrand is continuous on the interval used. Notation: ∫ (a to b) f(x) dx means the definite integral of f(x) from x = a to x = b. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is ∫ (x² − x + 3)/(x − 2) dx?

- (A) x²/2 + x + C
- (B) x²/2 + x + 5 ln|x − 2| + C
- (C) x²/2 + x + ln|x − 2| + C
- (D) (x³/3 − x²/2 + 3x)/(x²/2 − 2x) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The top has degree 2 and the bottom degree 1, so divide. x² ÷ x = x; x(x − 2) = x² − 2x; subtract to get x + 3. Then x ÷ x = 1; 1(x − 2) = x − 2; subtract to get 5. So the integrand is x + 1 + 5/(x − 2), and the integral is x²/2 + x + 5 ln|x − 2| + C. Check: (x + 1)(x − 2) + 5 = x² − x + 3.

- (A) drops the remainder 5/(x − 2).
- (C) makes a slip in the last subtraction, (x + 3) − (x − 2), treating it as 3 − 2 = 1 instead of 3 + 2 = 5.
- (D) integrates the top and the bottom separately. An integral of a quotient is not a quotient of integrals.
</details>

## Question 2 (multiple choice · core)

What is ∫ 1/(x² + 10x + 26) dx?

- (A) ln(x² + 10x + 26) + C
- (B) arctan(x − 5) + C
- (C) arctan(x + 5) + C
- (D) −1/(x + 5) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The discriminant is 100 − 104 = −4 < 0, so there are no real roots. Complete the square: x² + 10x + 26 = (x + 5)² + 1. With u = x + 5 and a = 1, the integral is arctan(x + 5) + C.

- (A) would need the derivative of the bottom, 2x + 10, on top.
- (B) has a sign slip: x² + 10x + 26 is (x + 5)² + 1, not (x − 5)² + 1.
- (D) ignores the + 1 and integrates 1/(x + 5)². The + 1 changes the whole form.
</details>

## Question 3 (multiple choice · core)

What is the exact value of ∫ (−2 to 1) 1/(x² + 4x + 7) dx?

- (A) ln 4
- (B) π/12
- (C) π/3
- (D) π√3/9

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Complete the square: x² + 4x + 7 = (x + 2)² + 3, so a = √3. Let u = x + 2; the limits become 0 and 3. The integral is [(1/√3) arctan(u/√3)] (0 to 3) = (1/√3)(arctan √3 − arctan 0) = (1/√3)(π/3) = π/(3√3) = π√3/9.

- (A) integrates as if the answer were ln(x² + 4x + 7): ln 12 − ln 3 = ln 4. The top is not the derivative of the bottom.
- (B) uses a = 3 (the constant itself) instead of a = √3: (1/3) arctan(3/3) = π/12.
- (C) leaves out the factor 1/a = 1/√3 in front of arctan.
</details>

## Question 4 (multiple choice · core)

What is ∫ 1/√(8 + 2x − x²) dx, for −2 < x < 4?

- (A) arcsin((x − 1)/3) + C
- (B) arcsin((x − 1)/9) + C
- (C) arcsin((x + 1)/3) + C
- (D) (1/3) arctan((x − 1)/3) + C

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Complete the square: 8 + 2x − x² = 8 − (x² − 2x) = 8 − ((x − 1)² − 1) = 9 − (x − 1)². With a = 3 and u = x − 1, the arcsin form gives arcsin((x − 1)/3) + C.

- (B) divides by a² = 9 instead of a = 3.
- (C) has a sign slip: x² − 2x completes to (x − 1)² − 1, not (x + 1)² − 1.
- (D) uses the arctan form. With a square root and a difference a² − u², the form is arcsin.
</details>

## Question 5 (constructed response · core)

Let f(x) = (2x³ + x² + 1)/(x² + 1).

(a) Use long division to show that f(x) = 2x + 1 − 2x/(x² + 1).
(b) Find ∫ f(x) dx.
(c) Evaluate ∫ (0 to 1) f(x) dx exactly.
(d) Explain why no absolute value bars are needed in the logarithm.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** 2x³ ÷ x² = 2x. 2x(x² + 1) = 2x³ + 2x. Subtract: (2x³ + x² + 1) − (2x³ + 2x) = x² − 2x + 1. Then x² ÷ x² = 1. 1(x² + 1) = x² + 1. Subtract: (x² − 2x + 1) − (x² + 1) = −2x. Quotient 2x + 1, remainder −2x, so f(x) = 2x + 1 − 2x/(x² + 1).

**(b)** The last term is derivative over function (u = x² + 1, du = 2x dx). So ∫ f(x) dx = **x² + x − ln(x² + 1) + C**.

**(c)** [x² + x − ln(x² + 1)] (0 to 1) = (1 + 1 − ln 2) − (0 + 0 − ln 1) = **2 − ln 2**, about 1.31.

**(d)** x² + 1 ≥ 1 > 0 for every real x, so ln(x² + 1) is always defined and |x² + 1| = x² + 1.

| Point | What earns it |
|---|---|
| 1 | Correct long division with quotient 2x + 1 and remainder −2x |
| 1 | Integrates the remainder term as −ln(x² + 1), by substitution or derivative-over-function |
| 1 | Correct antiderivative with + C, and the value 2 − ln 2 |
| 1 | States that x² + 1 is always positive |

Note for (a): multiplying back, (2x + 1)(x² + 1) − 2x = 2x³ + x² + 1, is a good check, but on its own it does not earn the first point, because the question asks for long division.
</details>

## Question 6 (constructed response · core)

Let I = ∫ (−1 to 0) (x + 3)/(x² + 2x + 2) dx.

(a) Find constants A and B so that x + 3 = A(2x + 2) + B.
(b) Complete the square in x² + 2x + 2.
(c) Find the exact value of I.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Compare coefficients. x-terms: 1 = 2A, so A = 1/2. Constants: 3 = 2A + B = 1 + B, so B = 2.

**(b)** x² + 2x + 2 = (x + 1)² + 1.

**(c)** I = (1/2) ∫ (−1 to 0) (2x + 2)/(x² + 2x + 2) dx + 2 ∫ (−1 to 0) 1/((x + 1)² + 1) dx.

First part: (1/2)[ln(x² + 2x + 2)] (−1 to 0) = (1/2)(ln 2 − ln 1) = (1/2) ln 2.

Second part: 2[arctan(x + 1)] (−1 to 0) = 2(arctan 1 − arctan 0) = 2(π/4) = π/2.

So **I = (1/2) ln 2 + π/2**, about 1.92.

| Point | What earns it |
|---|---|
| 1 | A = 1/2 and B = 2 |
| 1 | Completed square (x + 1)² + 1 |
| 1 | Logarithm part (1/2) ln 2, from derivative over function |
| 1 | Arctan part π/2, and total (1/2) ln 2 + π/2 |
</details>

## Question 7 (constructed response · stretch)

(a) Explain why long division, not completing the square, is the right first step for ∫ x³/(x² + 4) dx, and carry out the division.
(b) Evaluate ∫ (0 to 2) x³/(x² + 4) dx exactly.
(c) Show that your answer to (b) lies between 0 and 1 without evaluating any logarithm. (Hint: compare x³/(x² + 4) with x³/4.)
(d) A student writes ∫ 1/(x² − 4) dx = (1/2) arctan(x/2) + C. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The top has degree 3 and the bottom degree 2. The top's degree is at least the bottom's, so divide first. x³ ÷ x² = x; x(x² + 4) = x³ + 4x; subtract to get −4x. So x³/(x² + 4) = x − 4x/(x² + 4).

**(b)** An antiderivative is x²/2 − 2 ln(x² + 4), since ∫ 4x/(x² + 4) dx = 2 ln(x² + 4). Evaluate:

[x²/2 − 2 ln(x² + 4)] (0 to 2) = (2 − 2 ln 8) − (0 − 2 ln 4) = 2 − 2 ln 8 + 2 ln 4 = 2 − 2 ln 2.

**Answer: 2 − 2 ln 2**, about 0.614.

**(c)** On [0, 2], x³ ≥ 0 and x² + 4 > 0, so the integrand is at least 0 and the integral is at least 0. Also x² + 4 ≥ 4, so x³/(x² + 4) ≤ x³/4. Then the integral is at most ∫ (0 to 2) x³/4 dx = [x⁴/16] (0 to 2) = 1. So the answer lies between 0 and 1.

**(d)** The derivative of (1/2) arctan(x/2) is 1/(x² + 4), not 1/(x² − 4). The arctan form needs a **sum** of squares. x² − 4 = (x − 2)(x + 2) has real roots, so it cannot be written as (x − h)² + a² with a > 0. This integral needs partial fractions (a BC-only topic).

| Point | What earns it |
|---|---|
| 1 | Compares degrees **and** gives x − 4x/(x² + 4) |
| 1 | Correct antiderivative x²/2 − 2 ln(x² + 4) |
| 1 | Exact value 2 − 2 ln 2, with the logarithms combined correctly |
| 1 | Lower bound from a non-negative integrand and upper bound 1 from x³/4 |
| 1 | Explains that arctan needs a sum of squares, and x² − 4 is a difference (or has real roots) |
</details>

## How did you do?

- **Q1, Q5 or Q7(a) wrong:** redo "Tool 1: long division" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-study-guide/). Always check by multiplying back.
- **Q2, Q3 or Q4 wrong:** reread "Tool 2: completing the square" and Worked example 2. Check that you used a, not a².
- **Q6 wrong:** see Worked example 3 on splitting the numerator.
- **Q7(d) wrong:** reread "When does arctan apply?"

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/6-10-integrating-functions-long-division-completing-checklist/).
