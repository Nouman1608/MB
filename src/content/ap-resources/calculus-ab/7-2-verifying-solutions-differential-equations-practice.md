---
resourceId: "mb-ap-calcab-7.2-practice"
title: "Verifying Solutions for Differential Equations: Practice Questions (Calculus AB 7.2)"
description: "Seven original Marlbridge practice questions on checking solutions of first- and second-order differential equations, families of solutions and unknown constants."
course: "calculus-ab"
unit: 7
topics: ["7.2"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivatives of polynomial, exponential, trig and rational functions, and the chain rule"
prerequisiteResources: ["mb-ap-calcab-7.2-study-guide"]
learningObjectives:
  - "Verify or reject a proposed solution by differentiating and substituting"
  - "Identify which members of a family solve a differential equation"
  - "Find constants that make a given form of function a solution"
  - "Explain why a one-point check does not prove a function is a solution"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Keep answers exact."
related: ["mb-ap-calcab-7.2-study-guide", "mb-ap-calcab-7.2-revision-notes", "mb-ap-calcab-7.2-checklist"]
next: "mb-ap-calcab-7.2-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, C, A and B are constants, and exact answers unless stated. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which function is a solution of dy/dx = 3y/x for x > 0?

- (A) y = 3x
- (B) y = x³
- (C) y = e^(3x)
- (D) y = x³ + 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For y = x³: left side dy/dx = 3x². Right side 3y/x = 3x³/x = 3x². Equal for all x > 0.

- (A) Left side 3; right side 3(3x)/x = 9. Never equal.
- (C) Left side 3e^(3x); right side 3e^(3x)/x. These agree only at x = 1, so a check at x = 1 alone would wrongly accept it.
- (D) Left side 3x²; right side 3(x³ + 1)/x = 3x² + 3/x. The extra 3/x is never 0, so the sides never agree.
</details>

## Question 2 (multiple choice · core)

For which values of k is y = e^(kx) a solution of y″ + y′ − 6y = 0?

- (A) k = −2 and k = 3
- (B) k = 2 only
- (C) k = 2 and k = −3
- (D) Every real number k

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** y′ = ke^(kx) and y″ = k²e^(kx). Substituting: e^(kx)(k² + k − 6) = 0. Since e^(kx) is never 0, k² + k − 6 = (k − 2)(k + 3) = 0, so k = 2 or k = −3.

- (A) solves k² − k − 6 = 0. It comes from a sign slip on the y′ term.
- (B) finds one root, perhaps by trial, and misses the other.
- (D) confuses "infinitely many solutions" with "every exponential works". Only two values of k make the bracket zero.
</details>

## Question 3 (multiple choice · core)

The function y = 5 − 2e^(−3t) is a solution of which differential equation?

- (A) dy/dt = 3(y − 5)
- (B) dy/dt = −3y
- (C) dy/dt = 5 − y
- (D) dy/dt = 3(5 − y)

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** dy/dt = −2 × (−3)e^(−3t) = 6e^(−3t). And 5 − y = 2e^(−3t), so 3(5 − y) = 6e^(−3t). The sides match for all t.

- (A) gives 3(−2e^(−3t)) = −6e^(−3t): the right size but the wrong sign.
- (B) gives −15 + 6e^(−3t). The constant −15 does not match.
- (C) gives 2e^(−3t), which is missing the factor 3 from the chain rule.
</details>

## Question 4 (multiple choice · core)

Which of these is **not** a solution of dy/dx = 2y?

- (A) y = 0
- (B) y = −4e^(2x)
- (C) y = e^(2x) + 1
- (D) y = e^(2x + 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** For y = e^(2x) + 1: left side 2e^(2x); right side 2e^(2x) + 2. They differ by 2 for every x.

- (A) Left side 0, right side 2 × 0 = 0. A constant solution.
- (B) Left side −8e^(2x), right side 2(−4e^(2x)) = −8e^(2x). This is Ce^(2x) with C = −4.
- (D) e^(2x + 1) = e × e^(2x), which is Ce^(2x) with C = e. Left side 2e^(2x + 1) equals the right side.
</details>

## Question 5 (constructed response · core)

Let y = 2sin(3x) − cos(3x).

(a) Find y′ and y″.
(b) Show that y is a solution of y″ + 9y = 0.
(c) Explain why y = 2sin(3x) − cos(3x) + 1 is not a solution of the same equation.
(d) Give two other solutions of y″ + 9y = 0 and explain how you know there are infinitely many.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y′ = 6cos(3x) + 3sin(3x). y″ = −18sin(3x) + 9cos(3x).

**(b)** Left side: y″ + 9y = (−18sin(3x) + 9cos(3x)) + (18sin(3x) − 9cos(3x)) = 0. Right side: 0. Equal for all x, so y is a solution.

**(c)** Adding 1 does not change y″, but it adds 9 × 1 = 9 to the left side. The left side becomes 9, not 0, for every x.

**(d)** For example y = sin(3x) and y = 5cos(3x). In general, y = A sin(3x) + B cos(3x) gives y″ = −9A sin(3x) − 9B cos(3x) = −9y, so y″ + 9y = 0 for **every** pair of constants A and B. There are infinitely many choices of A and B, so infinitely many solutions.

| Point | What earns it |
|---|---|
| 1 | Correct y′ and y″, using the chain rule (factor 3, then 9) |
| 1 | Substitutes into y″ + 9y and simplifies to 0, concluding "for all x" |
| 1 | Explains that the constant 1 adds 9 to the left side |
| 1 | Two correct further solutions **and** a general argument for infinitely many |

A check at one value of x, such as x = 0, earns no mark for (b).
</details>

## Question 6 (constructed response · core)

Let y = 1/(4 − x).

(a) Show that y is a solution of dy/dx = y² on the interval x < 4.
(b) Show that y = 1/(C − x) is a solution of dy/dx = y² for every constant C.
(c) Explain why y = 1/(4 − x) cannot be a solution on an interval that contains x = 4.
(d) Show that y = 0 is a solution of dy/dx = y² and explain why it is not in the family in (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Write y = (4 − x)^(−1). By the chain rule, dy/dx = −(4 − x)^(−2) × (−1) = 1/(4 − x)². Right side: y² = 1/(4 − x)². Equal for all x < 4.

**(b)** dy/dx = −(C − x)^(−2) × (−1) = 1/(C − x)², and y² = 1/(C − x)². Equal wherever y is defined, for any C.

**(c)** At x = 4 the function is undefined (division by zero), so it is not differentiable there. A solution must be differentiable at every point of its interval.

**(d)** For y = 0: left side 0, right side 0² = 0. Equal for all x. But 1/(C − x) is never 0 for any C, because a fraction with numerator 1 cannot equal 0. So y = 0 is an extra solution outside the family.

| Point | What earns it |
|---|---|
| 1 | Correct derivative 1/(4 − x)², with the chain-rule factor −1 handled |
| 1 | Shows both sides equal for the general C |
| 1 | States that the function is undefined, so not differentiable, at x = 4 |
| 1 | Verifies y = 0 and explains why no C gives it |
</details>

## Question 7 (constructed response · stretch)

Consider the differential equation dy/dx = 2y − 4x + 1.

(a) Find the constants a and b so that y = ax + b is a solution.
(b) Show that y = 2x + 1/2 + Ce^(2x) is a solution for every constant C.
(c) A student tests y = x³ + 2x + 1/2 at x = 0, finds both sides equal 2, and concludes it is a solution. Show that the student is wrong.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For y = ax + b, the left side is a. The right side is 2(ax + b) − 4x + 1 = (2a − 4)x + (2b + 1). For these to be equal for **all** x, the x-coefficients and the constants must match:

- x terms: 0 = 2a − 4, so **a = 2**.
- constants: a = 2b + 1, so 2 = 2b + 1 and **b = 1/2**.

So y = 2x + 1/2.

**(b)** Left side: dy/dx = 2 + 2Ce^(2x). Right side: 2(2x + 1/2 + Ce^(2x)) − 4x + 1 = 4x + 1 + 2Ce^(2x) − 4x + 1 = 2 + 2Ce^(2x). Equal for all x and every C.

**(c)** Left side: dy/dx = 3x² + 2. Right side: 2(x³ + 2x + 1/2) − 4x + 1 = 2x³ + 2. At x = 0 both are 2, but at x = 1 the left side is 5 and the right side is 4. The sides are not identical, so the function is not a solution. (They agree only at x = 0 and x = 3/2.)

| Point | What earns it |
|---|---|
| 1 | Substitutes y = ax + b and matches the x-coefficients to get a = 2 |
| 1 | Matches constants to get b = 1/2 |
| 1 | Shows both sides equal 2 + 2Ce^(2x) |
| 1 | Finds both sides of (c) as expressions in x and gives an x where they differ |
| 1 | States that a solution must make the sides equal for all x, so one point is not enough |
</details>

## How did you do?

- **Q1, Q3 or Q4 wrong:** revisit "The verification method" in the [study guide](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-study-guide/) and set out left side and right side separately.
- **Q2 or Q5 wrong:** redo Worked example 2 and the "Second-order equations" section.
- **Q6 wrong:** see Worked example 3 on intervals and extra solutions.
- **Q7 wrong:** reread "Why one point is not enough".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-2-verifying-solutions-differential-equations-checklist/).
