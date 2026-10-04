---
resourceId: "mb-ap-calcab-1.13-practice"
title: "Removing Discontinuities: Practice Questions (Calculus AB 1.13)"
description: "Seven original Marlbridge practice questions on removable discontinuities and on solving for parameters in piecewise functions, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.13"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Finding 0/0 limits by factoring and conjugates"
  - "The three conditions for continuity at a point"
prerequisiteResources: ["mb-ap-calcab-1.13-study-guide"]
learningObjectives:
  - "Decide whether a discontinuity is removable and give the value that removes it"
  - "Solve for one or two parameters that make a piecewise function continuous"
  - "Recognise when no parameter value can make a function continuous"
  - "Justify a continuity conclusion using limits and function values"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.13-study-guide", "mb-ap-calcab-1.13-revision-notes", "mb-ap-calcab-1.13-checklist"]
next: "mb-ap-calcab-1.13-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and exact answers unless stated. Notation: lim (x → c) f(x) means "the limit as x approaches c of f(x)"; c⁻ and c⁺ mean from the left and from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The function f is given by f(x) = (x² − 2x − 15)/(x − 5) for x ≠ 5. Which value of f(5) makes f continuous at x = 5?

- (A) 0
- (B) −3
- (C) 8
- (D) No value; the discontinuity cannot be removed.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Factor the top: x² − 2x − 15 = (x − 5)(x + 3). For x ≠ 5, f(x) = x + 3. So lim (x → 5) f(x) = 5 + 3 = 8. The limit exists, so defining f(5) = 8 makes f continuous at 5.

- (A) treats the 0/0 from direct substitution as the number 0.
- (B) is the zero of the factor x + 3, found by setting x + 3 = 0. That answers a different question.
- (D) assumes a zero denominator always gives an asymptote. Here the top is also 0, and after cancelling the limit is finite.
</details>

## Question 2 (multiple choice · core)

For which value of k is the function below continuous at x = 3?

- f(x) = kx + 5 for x < 3
- f(x) = kx² − 7 for x ≥ 3

Options:

- (A) −1/3
- (B) 2
- (C) 4
- (D) No value of k makes f continuous at x = 3.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Left expression at 3: 3k + 5. Right expression at 3 (which is also f(3)): 9k − 7. Set equal: 3k + 5 = 9k − 7, so 12 = 6k and k = 2. Check: 3(2) + 5 = 11 and 9(2) − 7 = 11.

- (A) comes from a sign slip when collecting constants: writing 6k = 5 − 7 = −2 instead of 6k = 5 + 7 = 12.
- (C) evaluates x² at 3 as 2 × 3 = 6, giving 3k + 5 = 6k − 7 and k = 4.
- (D) is wrong because the equation has a solution; the parameter does not cancel here.
</details>

## Question 3 (multiple choice · core)

Let g(x) = (x² − 1)/(x² + x − 2). Which statement is true?

- (A) Both discontinuities of g are removable.
- (B) g has a removable discontinuity at x = 1, removed by defining g(1) = 2/3, and a non-removable discontinuity at x = −2.
- (C) g has a removable discontinuity at x = 1, removed by defining g(1) = 0, and a non-removable discontinuity at x = −2.
- (D) g has a removable discontinuity at x = −2 and a non-removable discontinuity at x = 1.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Factor: x² − 1 = (x − 1)(x + 1) and x² + x − 2 = (x − 1)(x + 2). For x ≠ 1, −2, g(x) = (x + 1)/(x + 2). At x = 1 the simplified form gives 2/3, so the limit exists and g(1) = 2/3 removes the discontinuity. At x = −2 the simplified form gives −1/0, a nonzero number over 0, so g is unbounded there: a vertical asymptote.

- (A) misses that (x + 2) does not cancel, so x = −2 still gives nonzero/0.
- (C) uses the original top at x = 1, which is 0, instead of the limit.
- (D) swaps the two points.
</details>

## Question 4 (multiple choice · core)

For which values of k is the function below continuous at x = 1?

- h(x) = kx² + 1 for x < 1
- h(x) = kx + 3 for x ≥ 1

Options:

- (A) Every value of k
- (B) k = 2 only
- (C) k = −2 only
- (D) No value of k

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Left expression at 1: k(1)² + 1 = k + 1. Right expression at 1: k(1) + 3 = k + 3. The condition k + 1 = k + 3 simplifies to 1 = 3, which is false for every k. So the left limit is always 2 less than h(1), and h always has a jump at 1.

- (A) assumes that because k appears on both sides it "cancels out", so the pieces always match. Cancelling k leaves a false statement, not a true one.
- (B) drops the k from the right piece and solves k + 1 = 3.
- (C) drops the k from the left piece and solves 1 = k + 3.
</details>

## Question 5 (constructed response · core)

Let f(x) = (√(x + 14) − 4)/(x − 2) for x ≥ −14, x ≠ 2.

(a) Explain why f is not continuous at x = 2.
(b) Find the value that f(2) must be given so that f is continuous at x = 2.
(c) A student plots f on a graphing calculator. The curve looks unbroken near x = 2. The student says: "So f was continuous at 2 all along." Explain why the student is wrong.
(d) You are told that √16.01 ≈ 4.00125. Use this to check your answer to (b).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(2) is not defined, because the denominator is 2 − 2 = 0. The first condition for continuity fails.

**(b)** Substitution gives (√16 − 4)/0 = 0/0, so rewrite. Multiply top and bottom by the conjugate √(x + 14) + 4. The top becomes (x + 14) − 16 = x − 2. So, for x ≠ 2,

f(x) = (x − 2)/((x − 2)(√(x + 14) + 4)) = 1/(√(x + 14) + 4).

lim (x → 2) f(x) = 1/(√16 + 4) = 1/(4 + 4) = **1/8**. The limit exists, so define **f(2) = 1/8**.

**(c)** A calculator plots a finite set of points and joins them. It almost never samples x = 2 exactly, so the missing point does not show. The function as given is still undefined at 2, so it is not continuous there until f(2) is defined.

**(d)** f(2.01) ≈ (4.00125 − 4)/0.01 = 0.00125/0.01 = 0.125, and 1/8 = 0.125. They agree.

| Point | What earns it |
|---|---|
| 1 | States f(2) is undefined (or the denominator is 0), so a continuity condition fails |
| 1 | Multiplies by the conjugate and simplifies to 1/(√(x + 14) + 4) for x ≠ 2 |
| 1 | Limit 1/8 **and** states f(2) = 1/8 |
| 1 | Explains that a plot can hide a single missing point, so it does not show continuity; gives the numerical check 0.125 |

Acceptable alternative for (b): let u = √(x + 14), so x − 2 = u² − 16 = (u − 4)(u + 4), and the expression becomes 1/(u + 4) → 1/8.
</details>

## Question 6 (constructed response · core)

A function f is defined by

- f(x) = ax + 2 for x < −1
- f(x) = x² + bx for −1 ≤ x ≤ 2
- f(x) = x + 6 for x > 2

where a and b are constants.

(a) Write the condition for f to be continuous at x = 2, and use it to find b.
(b) Find a so that f is also continuous at x = −1.
(c) With these values, explain why f is continuous for all real x.
(d) State the value of f(−1).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At x = 2 the middle piece (which includes 2) gives 4 + 2b, and the right piece gives 2 + 6 = 8. For continuity: lim (x → 2⁻) f(x) = lim (x → 2⁺) f(x) = f(2), so 4 + 2b = 8, giving **b = 2**.

**(b)** At x = −1 the left piece gives −a + 2, and the middle piece (which includes −1) gives (−1)² + b(−1) = 1 − b = 1 − 2 = −1. So −a + 2 = −1, giving **a = 3**.

**(c)** Each piece is a polynomial, so f is continuous on x < −1, on −1 < x < 2 and on x > 2. At x = −1 both one-sided limits and f(−1) equal −1. At x = 2 both one-sided limits and f(2) equal 8. So f is continuous at every real x.

**(d)** f(−1) = (−1)² + 2(−1) = **−1**.

| Point | What earns it |
|---|---|
| 1 | Correct boundary equation at x = 2 (4 + 2b = 8) and b = 2 |
| 1 | Correct boundary equation at x = −1, using b = 2, and a = 3 |
| 1 | States each piece is continuous on its own interval (polynomials) |
| 1 | Shows both boundaries join (values −1 and 8) and concludes f is continuous for all real x |

Order note: solving x = 2 first is easier, because that equation contains only b. Writing both equations first and solving them together also earns full credit.
</details>

## Question 7 (constructed response · stretch)

A function f is defined by

- f(x) = (x² + kx − 10)/(x − 2) for x ≠ 2
- f(2) = m

where k and m are constants.

(a) Explain why the numerator must equal 0 at x = 2 if f is to be continuous at 2, and use this to find k.
(b) With this value of k, find m so that f is continuous at x = 2.
(c) Explain why, for k = 4, no value of m makes f continuous at x = 2.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As x → 2 the denominator tends to 0. If the numerator tended to a nonzero number, the quotient would be unbounded near 2 and the limit would not exist. So the numerator must tend to 0: 2² + 2k − 10 = 0, so 2k − 6 = 0 and **k = 3**.

**(b)** With k = 3, x² + 3x − 10 = (x + 5)(x − 2). For x ≠ 2, f(x) = x + 5. So lim (x → 2) f(x) = 7. Continuity needs f(2) = 7, so **m = 7**.

**(c)** For k = 4 the numerator at x = 2 is 4 + 8 − 10 = 2, while the denominator tends to 0. The quotient is unbounded near 2 (it tends to −∞ from the left and +∞ from the right), so lim (x → 2) f(x) does not exist. A single value m cannot make a non-existent limit equal to f(2).

| Point | What earns it |
|---|---|
| 1 | Reasons that a nonzero numerator over a denominator tending to 0 gives no finite limit |
| 1 | Sets the numerator to 0 at x = 2 and finds k = 3 |
| 1 | Factors, cancels (x − 2) for x ≠ 2, and finds m = 7 |
| 1 | For k = 4: numerator 2 (nonzero) over 0, so the limit does not exist and no m works |

Acceptable check for (b): f(2.001) = 7.001 with k = 3, close to 7. A check alone does not earn the m = 7 point.
</details>

## How did you do?

- **Q1, Q3 or Q5 wrong:** revisit "Removing a discontinuity: define or redefine f(c)" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/).
- **Q2 or Q6 wrong:** redo Worked examples 2 and 3, and always check both expressions at the boundary.
- **Q4 or Q7(c) wrong:** reread "When it is impossible, or there are two answers". "No value" is a valid answer.
- **Q5(c) wrong:** see "Using technology".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-checklist/).
