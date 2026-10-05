---
resourceId: "mb-ap-calcab-1.7-practice"
title: "Selecting Procedures for Determining Limits: Practice Questions (Calculus AB 1.7)"
description: "Seven original Marlbridge practice questions on choosing a limit method: substitution, one-sided limits, rewriting 0/0 forms and composite functions, with solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.7"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Direct substitution and the 0/0 rewriting techniques from Topics 1.5 and 1.6"
prerequisiteResources: ["mb-ap-calcab-1.7-study-guide"]
learningObjectives:
  - "Choose a limit procedure from the result of direct substitution and the form of the expression"
  - "Use one-sided limits for piecewise functions and absolute values"
  - "Describe a nonzero-over-0 limit by checking signs on each side"
  - "Find a limit of a composite function from the inside out"
  - "Spot and correct a wrong choice of procedure in someone else's work"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.7-study-guide", "mb-ap-calcab-1.7-revision-notes", "mb-ap-calcab-1.7-checklist"]
next: "mb-ap-calcab-1.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)"; x → a⁺ means from the right and x → a⁻ means from the left. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Direct substitution into lim (x → 5) (√(x + 11) − 4)/(x − 5) gives 0/0. Which is the most appropriate next step?

- (A) Conclude that the limit is 0.
- (B) Conclude that the limit does not exist, because the denominator is 0 at x = 5.
- (C) Factor the numerator and denominator as polynomials and cancel (x − 5).
- (D) Multiply the numerator and denominator by √(x + 11) + 4.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The 0 on top comes from a square root minus a number, so the conjugate is the tool. The top becomes (x + 11) − 16 = x − 5, which cancels with the bottom for x ≠ 5, leaving 1/(√(x + 11) + 4). Substituting gives 1/(4 + 4) = 1/8.

- (A) treats 0/0 as the number 0. 0/0 is indeterminate: it only says more work is needed.
- (B) ignores the top. A zero bottom rules out a finite limit only when the top is *nonzero*.
- (C) chooses a polynomial method, but the numerator contains a square root, so it is not a polynomial and does not factor in the usual way.
</details>

## Question 2 (multiple choice · core)

Which statement describes the behaviour of (x² − 2x)/(x² − 4x + 4) as x → 2?

- (A) The limit is 0.
- (B) The limit is 1.
- (C) The expression → +∞ from both sides, so the limit is +∞.
- (D) The expression → +∞ from the right and −∞ from the left, so the limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Substitution gives (4 − 4)/(4 − 8 + 4) = 0/0, so factor: x(x − 2)/(x − 2)² = x/(x − 2) for x ≠ 2. Substituting again gives 2/0, a nonzero number over 0, so there is no finite limit. Check signs: for x slightly above 2, the top is near 2 and the bottom is small and positive, so → +∞. For x slightly below 2, the bottom is small and negative, so → −∞. The sides disagree.

- (A) stops at the first 0/0 and treats it as 0.
- (B) "cancels the x² terms", leaving −2x/(−4x + 4), which gives (−4)/(−4) = 1 at x = 2. Only whole factors cancel, never terms.
- (C) checks only the right-hand side. After nonzero/0, you must check both sides.
</details>

## Question 3 (multiple choice · foundation)

A function f is defined by f(x) = x² + 1 for x < 2, f(2) = 7, and f(x) = 3x − 1 for x > 2. What is lim (x → 2) f(x)?

- (A) 5
- (B) 7
- (C) 10
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The rule changes at x = 2, so find each one-sided limit with its own piece. Left: substitute into x² + 1 to get 5. Right: substitute into 3x − 1 to get 5. Both sides agree, so the limit is 5.

- (B) is the value f(2). The value at the point does not decide the limit.
- (C) adds the two one-sided limits. They should be compared, not added.
- (D) assumes a change of formula means no limit. The limit exists whenever the two one-sided limits are equal.
</details>

## Question 4 (multiple choice · core)

What is lim (x → 0) cos(π(x² + x)/(2x))?

- (A) −1
- (B) 0
- (C) 1
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Work from the inside out. The inside gives 0/0 at x = 0. Factor: π x(x + 1)/(2x) = π(x + 1)/2 for x ≠ 0, which approaches π/2. Cosine is continuous at π/2, so the limit is cos(π/2) = 0.

- (A) drops the 2 in the denominator, so the inside seems to approach π, and cos π = −1.
- (C) substitutes x = 0 into the inside as if it gave 0, then uses cos 0 = 1.
- (D) gives up because the inside is undefined at x = 0. The inside only needs a limit, not a value.
</details>

## Question 5 (constructed response · core)

Let g(x) = (x³ − x)/(x² − x − 2).

For each of (a) x → 1, (b) x → −1 and (c) x → 2:

- state what direct substitution gives,
- name the procedure you choose as a result, and
- find the limit, or describe the behaviour if there is no finite limit.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

Factor once for later use: top x(x − 1)(x + 1), bottom (x − 2)(x + 1).

**(a)** Substitution: top 1 − 1 = 0, bottom 1 − 1 − 2 = −2. The bottom is not 0, so substitution is enough: lim (x → 1) g(x) = 0/(−2) = **0**. (A zero numerator over a nonzero bottom is simply 0. It is not indeterminate.)

**(b)** Substitution: top −1 + 1 = 0, bottom 1 + 1 − 2 = 0. That is 0/0 with a polynomial over a polynomial, so factor and cancel (x + 1), valid for x ≠ −1:
g(x) = x(x − 1)/(x − 2).
lim (x → −1) g(x) = (−1)(−2)/(−3) = **−2/3**.

**(c)** Substitution: top 8 − 2 = 6, bottom 4 − 2 − 2 = 0. That is nonzero/0, so there is no finite limit; check signs using x(x − 1)/(x − 2), whose top is near 2 when x is near 2.
x → 2⁺: bottom small and positive, so g(x) → +∞.
x → 2⁻: bottom small and negative, so g(x) → −∞.
The one-sided behaviours differ, so lim (x → 2) g(x) **does not exist**.

| Point | What earns it |
|---|---|
| 1 | (a) Substitution gives 0/(−2), a nonzero bottom, so the limit is 0 |
| 1 | (b) Identifies 0/0 and factors to cancel (x + 1) |
| 1 | (b) Limit −2/3 |
| 1 | (c) Identifies nonzero/0 and states that there is no finite limit |
| 1 | (c) Correct sign on each side (+∞ right, −∞ left) and concludes the limit does not exist |

Do not award the (a) point for "0/(−2) is indeterminate". Factoring in (a) before substituting is not wrong, but notice it was unnecessary.
</details>

## Question 6 (constructed response · core)

A function f is defined by

- f(x) = kx + 1 for x < 2
- f(x) = (√(x + 7) − 3)/(x − 2) for x > 2

where k is a constant. f(2) is not defined.

(a) Find lim (x → 2⁺) f(x). Name the procedure and explain why it fits.
(b) Find lim (x → 2⁻) f(x) in terms of k.
(c) Find the value of k for which lim (x → 2) f(x) exists.
(d) A student says: "f(2) is not defined, so lim (x → 2) f(x) cannot exist." Is the student right? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Use the piece for x > 2. Substitution gives (√9 − 3)/0 = 0/0. The top is a square root minus a number, so multiply by the conjugate √(x + 7) + 3:
top: (x + 7) − 9 = x − 2.
So for x > 2, f(x) = 1/(√(x + 7) + 3), and lim (x → 2⁺) f(x) = 1/(3 + 3) = **1/6**.

**(b)** The left piece is a polynomial, so substitute: lim (x → 2⁻) f(x) = **2k + 1**.

**(c)** The two-sided limit exists when the one-sided limits are equal: 2k + 1 = 1/6, so 2k = −5/6 and **k = −5/12**.

**(d)** No. A limit depends only on values of f(x) for x near 2, not at 2. With k = −5/12, both sides approach 1/6, so the limit exists and equals 1/6, even though f(2) is undefined.

| Point | What earns it |
|---|---|
| 1 | (a) Identifies 0/0 from a root expression and uses the conjugate to reach 1/(√(x + 7) + 3) |
| 1 | (a) Right-hand limit 1/6 **and** (b) left-hand limit 2k + 1 by substitution |
| 1 | (c) Sets the one-sided limits equal and finds k = −5/12 |
| 1 | (d) Explains that a limit uses nearby values, so an undefined f(2) does not stop the limit existing |

Acceptable alternative for (a): let u = √(x + 7), so x − 2 = u² − 9 = (u − 3)(u + 3) and the expression becomes 1/(u + 3) → 1/6.
</details>

## Question 7 (constructed response · stretch)

A student finds lim (x → 0) |x|/(x² + x) like this:

> Substitution gives 0/0. Factor the bottom: x(x + 1). Cancel the x with the |x| on top to get 1/(x + 1). Substitute: 1/(0 + 1) = 1. So the limit is 1.

(a) Identify the step where the student chose the wrong procedure, and explain why it is wrong.
(b) Find lim (x → 0⁺) and lim (x → 0⁻) of |x|/(x² + x), and state lim (x → 0) |x|/(x² + x).
(c) You are told that, to 4 significant figures, the expression equals 0.9901 at x = 0.01 and −1.010 at x = −0.01. Explain how these values support your answer to (b).
(d) A second limit, lim (x → 0) x cos(1/x), cannot be found by substitution or by the Topic 1.6 rewriting techniques. Explain why, and name the method that is used for it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The error is cancelling x with |x|. The absolute value creates a split at x = 0: |x| = x only when x ≥ 0, and |x| = −x when x < 0. The student should have found the two one-sided limits separately.

**(b)** For x > 0: |x|/(x(x + 1)) = x/(x(x + 1)) = 1/(x + 1) → **1**.
For x < 0: |x|/(x(x + 1)) = −x/(x(x + 1)) = −1/(x + 1) → **−1**.
The one-sided limits are different, so lim (x → 0) |x|/(x² + x) **does not exist**.

**(c)** At x = 0.01 (just right of 0) the value 0.9901 is close to 1. At x = −0.01 (just left of 0) the value −1.010 is close to −1. The two sides head to different values, which matches (b). A table supports the answer but does not prove it.

**(d)** At x = 0, 1/x is undefined, so substitution fails. There is no common factor to cancel, no root to rationalise and no stacked fraction: cos(1/x) oscillates between −1 and 1 infinitely often near 0. Because cos(1/x) is bounded while the factor x → 0, the right method is the **squeeze theorem** (Topic 1.8), which shows the limit is 0.

| Point | What earns it |
|---|---|
| 1 | (a) Identifies cancelling x with the absolute value of x as the error, because it equals −x for x < 0 |
| 1 | (b) Right-hand limit 1 with correct simplification |
| 1 | (b) Left-hand limit −1 and conclusion that the limit does not exist |
| 1 | (c) Links each table value to the correct side and limit |
| 1 | (d) Explains why substitution and rewriting fail **and** names the squeeze theorem |

For (d), the value 0 is not required; naming the method with a reason is enough.
</details>

## How did you do?

- **Q1, Q2 or Q5 wrong:** reread "Step 3: substitute and read the result", "Step 4" and Figure 1 in the [study guide](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-study-guide/).
- **Q3, Q6 or Q7(a)–(b) wrong:** review "Step 2: is there a split at x = a?" and Worked example 2.
- **Q4 wrong:** see "Composite functions: work from the inside out".
- **Q7(d) wrong:** see "When none of these works", then look ahead to Topic 1.8.
- **Rewriting steps shaky:** revisit the [Topic 1.6 study guide](/advanced-course-resources/calculus-ab/1-6-limits-by-algebraic-manipulation-study-guide/).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-7-selecting-procedures-determining-limits-checklist/).
