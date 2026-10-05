---
resourceId: "mb-ap-calcab-7.6-practice"
title: "Finding General Solutions Using Separation of Variables: Practice Questions (Calculus AB 7.6)"
description: "Seven original Marlbridge practice questions on separable differential equations and general solutions, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 7
topics: ["7.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Indefinite integrals of powers, exponentials, trig functions and 1/(1 + x²)"
  - "Implicit differentiation"
prerequisiteResources: ["mb-ap-calcab-7.6-study-guide"]
learningObjectives:
  - "Recognise separable differential equations, including ones that need factoring first"
  - "Find general solutions by separating variables, with one constant in the right place"
  - "Check a general solution by differentiation"
  - "Identify and explain common errors in student solutions"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give general solutions with one arbitrary constant."
related: ["mb-ap-calcab-7.6-study-guide", "mb-ap-calcab-7.6-revision-notes", "mb-ap-calcab-7.6-checklist"]
next: "mb-ap-calcab-7.6-checklist"
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
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and C, A or K stand for arbitrary constants. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which of these differential equations is separable?

- (A) dy/dx = x − y²
- (B) dy/dx = x²y − y
- (C) dy/dx = cos(x + y)
- (D) dy/dx = y + ln x

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Factor out y: x²y − y = y(x² − 1). That is a function of y times a function of x, so you can write (1/y) dy = (x² − 1) dx.

- (A) is a difference of an x-term and a y-term. No factoring turns it into a product.
- (C) looks like one function, but cos(x + y) = cos x cos y − sin x sin y, which is a difference of two products, not a single product.
- (D) is a sum of a y-term and an x-term, like dy/dx = x + y. It cannot be separated.
</details>

## Question 2 (multiple choice · foundation)

Which equation gives the general solution of dy/dx = 3x²/(2y)?

- (A) y² = x³ + C
- (B) 2y² = x³ + C
- (C) ln|2y| = x³ + C
- (D) y² = x³

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: 2y dy = 3x² dx. Antidifferentiate: y² = x³ + C. Check: 2y · dy/dx = 3x², so dy/dx = 3x²/(2y).

- (B) uses 2y² as the antiderivative of 2y. Differentiating 2y² = x³ + C gives 4y · dy/dx = 3x², so dy/dx = 3x²/(4y), which is a different equation.
- (C) treats the fraction as if it must give a logarithm. Differentiating ln|2y| = x³ + C gives (1/y) · dy/dx = 3x², so dy/dx = 3x²y. Wrong equation.
- (D) has no constant, so it is one solution, not the general solution.
</details>

## Question 3 (multiple choice · core)

What is the general solution of dy/dx = y² sin x?

- (A) y = 1/(cos x + C)
- (B) y = −1/cos x + C
- (C) y = C e^(−cos x)
- (D) y = 1/(C − cos x)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: (1/y²) dy = sin x dx. Antidifferentiate: −1/y = −cos x + C. Multiply by −1: 1/y = cos x − C. Since −C is still an arbitrary constant, rename it: 1/y = cos x + C, so y = 1/(cos x + C). Check: dy/dx = sin x/(cos x + C)² = y² sin x.

- (B) adds the constant at the end and mishandles the minus sign when rearranging. It is not a solution for any C: its derivative is −sin x/cos²x, but with C = 0 the right side y² sin x is +sin x/cos²x, and no other value of C fixes the mismatch.
- (C) answers the fraction 1/y² with a logarithm, as if it were 1/y. That gives the solution of dy/dx = y sin x instead.
- (D) uses ∫ sin x dx = cos x (the sign is wrong). Its derivative is −sin x/(C − cos x)², which is −y² sin x: the opposite sign.
</details>

## Question 4 (multiple choice · core)

What is the general solution of dy/dt = (t + 1)(y + 2)?

- (A) y = A e^(t²/2 + t) − 2
- (B) y = e^(t²/2 + t) + C − 2
- (C) y = A e^(t²/2 + t − 2)
- (D) y = A e^(t²/2 + t) + 2

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Separate: (1/(y + 2)) dy = (t + 1) dt. Antidifferentiate: ln|y + 2| = t²/2 + t + C. Then |y + 2| = e^C e^(t²/2 + t), so y + 2 = A e^(t²/2 + t) with A any constant (A = 0 gives the constant solution y = −2). Subtract 2.

- (B) turns e^(G + C) into e^G + C. The constant must be a multiplier.
- (C) moves the "−2" inside the exponent. That function solves dy/dt = (t + 1)y, not this equation.
- (D) has the wrong sign: from y + 2 = A e^(...) you subtract 2, not add it.
</details>

## Question 5 (constructed response · core)

Consider dy/dx = 2x(1 + y²).

(a) Separate the variables.
(b) Find the general solution, written as y = ….
(c) A student writes the answer as y = tan(x²) + C. Show that this is not a solution when C ≠ 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (1/(1 + y²)) dy = 2x dx.

**(b)** ∫ (1/(1 + y²)) dy = arctan y and ∫ 2x dx = x². So arctan y = x² + C. Apply tan to both sides: **y = tan(x² + C)**.

Check: dy/dx = sec²(x² + C) · 2x = 2x(1 + tan²(x² + C)) = 2x(1 + y²).

**(c)** If y = tan(x²) + C, then dy/dx = 2x sec²(x²) = 2x(1 + tan²(x²)). But 2x(1 + y²) = 2x(1 + (tan(x²) + C)²). The difference is 2Cx(C + 2 tan(x²)), which is not zero for all x when C ≠ 0. The constant belongs inside the tangent, because it was added before tan was applied.

| Point | What earns it |
|---|---|
| 1 | Correct separation, with all y's on the dy side |
| 1 | arctan y = x² + C (antiderivatives correct and a constant included) |
| 1 | y = tan(x² + C) |
| 1 | Shows by differentiation that tan(x²) + C does not satisfy the equation, and explains where the constant belongs |

A logarithm for ∫ (1/(1 + y²)) dy earns no antiderivative point.
</details>

## Question 6 (constructed response · core)

A student is asked to solve dy/dx = x + y. The student writes:

dy = (x + y) dx, so y = x²/2 + xy + C.

(a) Explain the error in the student's work.
(b) Show, by differentiating implicitly, that the student's equation does not satisfy dy/dx = x + y.
(c) The equation dy/dx = xy + x **is** separable. Show why, and find its general solution.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The student integrated y with respect to x as if y were a constant, writing ∫ y dx = xy. But y is an unknown function of x, so ∫ y dx cannot be found this way. The variables were never separated, and dy/dx = x + y cannot be separated, because the right side is a sum.

**(b)** Differentiate y = x²/2 + xy + C with respect to x, using the product rule on xy: dy/dx = x + y + x · dy/dx. So dy/dx (1 − x) = x + y, and dy/dx = (x + y)/(1 − x). This is not x + y (except where x = 0 or x + y = 0), so the student's equation is not a solution.

**(c)** Factor: xy + x = x(y + 1), an x-part times a y-part. Separate: (1/(y + 1)) dy = x dx. Then ln|y + 1| = x²/2 + C, so |y + 1| = e^C e^(x²/2), and **y = A e^(x²/2) − 1**, with A any constant.

| Point | What earns it |
|---|---|
| 1 | Identifies that y was treated as a constant when integrating with respect to x |
| 1 | Correct implicit derivative, dy/dx = (x + y)/(1 − x), and the conclusion |
| 1 | Factors to x(y + 1) and separates correctly |
| 1 | y = A e^(x²/2) − 1 (or ln|y + 1| = x²/2 + C) |
</details>

## Question 7 (constructed response · stretch)

Consider dy/dx = (3x² − 1)/(eʸ + 4y³).

(a) Find the general solution in implicit form.
(b) Verify your answer to (a) by implicit differentiation.
(c) Explain why it is acceptable to leave the answer in implicit form here.
(d) Find the value of the constant for the solution curve that passes through (1, 0).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Separate: (eʸ + 4y³) dy = (3x² − 1) dx. Antidifferentiate: **eʸ + y⁴ = x³ − x + C**.

**(b)** Differentiate both sides with respect to x: eʸ · dy/dx + 4y³ · dy/dx = 3x² − 1. Factor: (eʸ + 4y³) dy/dx = 3x² − 1, so dy/dx = (3x² − 1)/(eʸ + 4y³). This is the original equation.

**(c)** There is no way to rearrange eʸ + y⁴ = x³ − x + C to make y the subject using familiar functions. The implicit equation still describes every solution exactly, and it can be checked, as in (b). So it is a complete general solution.

**(d)** Substitute x = 1, y = 0: e⁰ + 0 = 1 − 1 + C, so **C = 1**. (Finding constants this way is the main skill of Topic 7.7.)

| Point | What earns it |
|---|---|
| 1 | Correct separation |
| 1 | eʸ + y⁴ = x³ − x + C, with a constant |
| 1 | Correct implicit differentiation, including dy/dx on both y-terms |
| 1 | Valid reason for implicit form **and** C = 1 |
</details>

## How did you do?

- **Q1 or Q6(c) wrong:** reread "Separable differential equations" and its table in the [study guide](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/).
- **Q2 or Q3 wrong:** see "Not every fraction gives a logarithm" and Worked example 1.
- **Q4 or Q5 wrong:** redo Worked example 2 and its "Watch the constant" note.
- **Q6(a) or Q7 wrong:** see "When you cannot solve for y" and the misconception about integrating y with respect to x.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-checklist/).
