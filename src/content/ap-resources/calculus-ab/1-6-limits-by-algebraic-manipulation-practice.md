---
resourceId: "mb-ap-calcab-1.6-practice"
title: "Determining Limits Using Algebraic Manipulation: Practice Questions (Calculus AB 1.6)"
description: "Seven original Marlbridge practice questions on 0/0 limits using factoring, conjugates, combined fractions and trig identities, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.6"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Factoring quadratics and differences of squares"
prerequisiteResources: ["mb-ap-calcab-1.6-study-guide"]
learningObjectives:
  - "Evaluate 0/0 limits by choosing and applying an appropriate rewriting technique"
  - "Distinguish 0/0 from a nonzero number over 0"
  - "Justify why cancellation leaves the limit unchanged"
  - "Connect an algebraic limit to a graph with a hole"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.6-study-guide", "mb-ap-calcab-1.6-revision-notes", "mb-ap-calcab-1.6-checklist"]
next: "mb-ap-calcab-1.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is lim (x → −2) (x² + 5x + 6)/(x² − 4)?

- (A) −1/4
- (B) 0
- (C) 1
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Substitution gives (4 − 10 + 6)/(4 − 4) = 0/0, so rewrite. Factor: (x + 2)(x + 3) / ((x + 2)(x − 2)). Cancel (x + 2), valid for x ≠ −2, to get (x + 3)/(x − 2). Substitute: (−2 + 3)/(−2 − 2) = 1/(−4) = −1/4.

- (B) treats 0/0 as if it were the number 0.
- (C) "cancels the x² terms", leaving (5x + 6)/(−4), which gives (−10 + 6)/(−4) = 1. Only whole factors cancel, not terms.
- (D) assumes a zero denominator always means no limit. That is true for nonzero/0, but here the top is also 0, so the result is indeterminate, not impossible.
</details>

## Question 2 (multiple choice · core)

What is lim (x → 9) (x − 9)/(√x − 3)?

- (A) 0
- (B) 1/6
- (C) 1
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Substitution gives 0/0. Multiply top and bottom by the conjugate √x + 3. The bottom becomes (√x)² − 9 = x − 9. So the expression is (x − 9)(√x + 3)/(x − 9) = √x + 3 for x ≠ 9. Substitute: √9 + 3 = 6.

- (A) treats 0/0 as 0.
- (B) is the limit of the reciprocal, (√x − 3)/(x − 9). It comes from flipping the fraction upside down while rationalising, so the conjugate ends up cancelling the wrong way.
- (C) squares the denominator alone (√x − 3 → x − 9) without doing the same to the numerator, so the fraction "becomes" (x − 9)/(x − 9) = 1. Squaring only one part changes the value of the expression.
</details>

## Question 3 (multiple choice · core)

What is lim (x → 0) [1/(x + 2) − 1/2] / x?

- (A) −1/2
- (B) −1/4
- (C) 0
- (D) 1/4

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Combine the top: 1/(x + 2) − 1/2 = (2 − (x + 2))/(2(x + 2)) = −x/(2(x + 2)). Divide by x: −x/(2x(x + 2)). Cancel x, valid for x ≠ 0: −1/(2(x + 2)). Substitute: −1/(2 × 2) = −1/4.

- (A) drops the (x + 2) from the common denominator, leaving −x/(2x) = −1/2.
- (C) treats 0/0 as 0.
- (D) subtracts in the wrong order, writing (x + 2) − 2 = x on top, which flips the sign.
</details>

## Question 4 (multiple choice · core)

What is lim (x → 0) (1 − cos x)/sin²x?

- (A) 0
- (B) 1/2
- (C) 1
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Substitution gives 0/0. Use sin²x = 1 − cos²x = (1 − cos x)(1 + cos x). Cancel (1 − cos x), valid for x near 0 with x ≠ 0, to get 1/(1 + cos x). Substitute: 1/(1 + 1) = 1/2.

- (A) treats 0/0 as 0.
- (C) misremembers the identity as sin²x = 1 − cos x, so top and bottom look identical.
- (D) cancels correctly but then evaluates the leftover factor 1 + cos x on its own, forgetting it sits in the denominator: 1 + cos 0 = 2.
</details>

## Question 5 (graph · core)

Let f(x) = (x² − 1)/(x² + 2x + 1).

(a) Show that substitution at x = −1 gives 0/0.
(b) Simplify f(x) for x ≠ −1, and explain what the simplified form tells you about lim (x → −1) f(x).
(c) Describe the graph of f near x = −1. Is there a hole there?

<details>
<summary>Worked solution</summary>

**(a)** Top: (−1)² − 1 = 0. Bottom: 1 − 2 + 1 = 0. So 0/0.

**(b)** f(x) = (x − 1)(x + 1)/(x + 1)² = (x − 1)/(x + 1) for x ≠ −1. Substituting −1 into the simplified form gives −2/0: a nonzero number over 0. So the limit **does not exist** as a finite number. As x → −1 from the right, x + 1 is a small positive number and x − 1 is close to −2, so f(x) → −∞. From the left, x + 1 is small and negative, so f(x) → +∞.

**(c)** There is **no hole**. The graph has a vertical asymptote at x = −1, with the curve going down on the right side and up on the left side.

Lesson: 0/0 does not guarantee a finite limit. After cancelling once, (x + 1) was still left in the bottom.

Suggested mark points (3): 1 for showing 0/0; 1 for (x − 1)/(x + 1) and concluding the limit does not exist because of nonzero/0; 1 for a vertical asymptote (not a hole) with the correct sign on each side.
</details>

## Question 6 (constructed response · core)

A function f is defined by

- f(x) = (x² − x − 6)/(x − 3) for x ≠ 3
- f(3) = 2

(a) Find lim (x → 3) f(x), showing your algebra.
(b) Explain why your algebra in (a) is valid, even though the expression you started with is undefined at x = 3.
(c) A student says: "f(3) = 2, so the limit as x → 3 is 2." Explain the student's error.
(d) Describe the graph of f near x = 3.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitution in the formula gives (9 − 3 − 6)/0 = 0/0. Factor: x² − x − 6 = (x − 3)(x + 2). For x ≠ 3, f(x) = x + 2. So lim (x → 3) f(x) = lim (x → 3) (x + 2) = **5**.

**(b)** For every x near 3 except x = 3 itself, f(x) and x + 2 are equal. A limit depends only on values of x close to 3, not on the value at 3. So the two functions have the same limit, and x + 2 can be evaluated by substitution.

**(c)** The limit describes the values f(x) approaches as x gets close to 3. The single value f(3) = 2 does not affect it. Here the nearby values approach 5, so the limit is 5, while f(3) = 2.

**(d)** The graph is the line y = x + 2 with an open circle at (3, 5), plus a separate solid point at (3, 2).

| Point | What earns it |
|---|---|
| 1 | Factors the numerator and cancels (x − 3) to reach x + 2 (or equivalent) |
| 1 | Limit = 5, with "lim" kept until substitution |
| 1 | Justifies cancellation: the expressions agree for all x near 3 with x ≠ 3, and a limit ignores the value at 3 |
| 1 | Explains that f(3) does not determine the limit **and** describes the open circle at (3, 5) with a filled point at (3, 2) |

Acceptable alternative for (a): polynomial division of x² − x − 6 by x − 3 gives x + 2 with remainder 0. A table of values alone earns no mark for (a), because it does not show the exact value.
</details>

## Question 7 (constructed response · stretch)

Let g(x) = (√(x + 5) − 3)/(x − 4).

(a) Explain why direct substitution does not determine lim (x → 4) g(x).
(b) Find the exact value of lim (x → 4) g(x).
(c) Without a calculator you are told that √9.01 ≈ 3.00167. Use this to check your answer to (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At x = 4, the top is √9 − 3 = 0 and the bottom is 0. The result 0/0 is indeterminate, so substitution alone gives no value.

**(b)** Multiply top and bottom by the conjugate √(x + 5) + 3:

top: (√(x + 5) − 3)(√(x + 5) + 3) = (x + 5) − 9 = x − 4.

So g(x) = (x − 4)/((x − 4)(√(x + 5) + 3)) = 1/(√(x + 5) + 3) for x ≠ 4.

Substitute: 1/(√9 + 3) = 1/(3 + 3) = **1/6**.

**(c)** g(4.01) = (3.00167 − 3)/0.01 = 0.00167/0.01 = 0.167. And 1/6 ≈ 0.1667. They agree to about 3 decimal places, which supports the answer.

| Point | What earns it |
|---|---|
| 1 | Shows that substitution gives 0/0 and states that this is indeterminate (not "the limit is 0" or "does not exist") |
| 1 | Multiplies by the correct conjugate and simplifies the numerator to x − 4 |
| 1 | Cancels (x − 4), noting x ≠ 4, and obtains 1/6 |
| 1 | Correct numerical check, 0.167, compared with 1/6 |

Acceptable alternative for (b): let u = √(x + 5), so x − 4 = u² − 9 = (u − 3)(u + 3) and u → 3 as x → 4. Then g = 1/(u + 3) → 1/6.
</details>

## How did you do?

- **Q1 or Q6 wrong:** revisit "Four techniques and when to use each" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/).
- **Q2 or Q7 wrong:** redo Worked example 2 (conjugates) and keep the bottom factored.
- **Q3 or Q4 wrong:** see "Technique 3 in action" and "Technique 4 in action" in the guide.
- **Q5 or Q6(c) wrong:** reread "The key fact" and Figure 1: a limit is about nearby values, and nonzero/0 means no finite limit.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-checklist/).
