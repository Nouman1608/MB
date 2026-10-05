---
resourceId: "mb-ap-calcab-2.4-practice"
title: "Connecting Differentiability and Continuity: Practice Questions (Calculus AB 2.4)"
description: "Seven original Marlbridge practice questions on when derivatives do and do not exist: corners, cusps, vertical tangents, discontinuities and piecewise functions, with solutions."
course: "calculus-ab"
unit: 2
topics: ["2.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Continuity at a point and one-sided limits (Unit 1)"
  - "The derivative as a limit of a difference quotient (Topic 2.2)"
prerequisiteResources: ["mb-ap-calcab-2.4-study-guide"]
learningObjectives:
  - "Apply the theorem that differentiability implies continuity, and its contrapositive"
  - "Identify points where a function is continuous but not differentiable"
  - "Justify that a derivative does not exist using one-sided limits of the difference quotient"
  - "Decide whether a piecewise function is differentiable at a join"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Question 7 asks you to reason about what a calculator would report."
related: ["mb-ap-calcab-2.4-study-guide", "mb-ap-calcab-2.4-revision-notes", "mb-ap-calcab-2.4-checklist"]
next: "mb-ap-calcab-2.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers. All functions are invented for practice. Notation: f′(a) = lim (h → 0) (f(a + h) − f(a))/h; h → 0⁻ is from the left and h → 0⁺ from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f is differentiable at x = 3, and f(3) = 5. Which statement must be true?

- (A) f′(3) = 5
- (B) lim (x → 3) f(x) = 5
- (C) f′(x) exists for every real number x
- (D) f is a polynomial

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Differentiable at 3 implies continuous at 3, so lim (x → 3) f(x) = f(3) = 5.

- (A) confuses the value of the function with its gradient. Knowing f(3) tells you nothing about f′(3).
- (C) stretches one point to every point. Differentiability at x = 3 says nothing about other x values; f could have a corner at x = 7.
- (D) is far too strong. Many non-polynomial functions, such as √x for x > 0, are differentiable.
</details>

## Question 2 (multiple choice · core)

Which function is continuous at x = 0 but **not** differentiable at x = 0?

- (A) f(x) = x|x|
- (B) f(x) = ∛(x²)
- (C) f(x) = 1/x
- (D) f(x) = x³ + x

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** ∛(x²) is continuous at 0, with value 0. Its difference quotient is ∛(h²)/h = 1/∛h, which tends to −∞ as h → 0⁻ and +∞ as h → 0⁺. The graph has a cusp, so the derivative does not exist.

- (A) looks as if it should have a corner because of |x|, but its quotient is h|h|/h = |h| → 0 from both sides. It is differentiable at 0, with derivative 0.
- (C) is not defined at 0, so it is not continuous there (and not differentiable either).
- (D) is a polynomial, differentiable everywhere. Its quotient is (h³ + h)/h = h² + 1 → 1.
</details>

## Question 3 (multiple choice · core)

Let g(x) = (x² − 5x + 6)/(x − 2). Which statement about g′(2) is true?

- (A) g′(2) = 1
- (B) g′(2) = −1
- (C) g′(2) = 0
- (D) g′(2) does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** g(2) is undefined (substitution gives 0/0), so 2 is not in the domain of g. A point outside the domain of g cannot be in the domain of g′. Equivalently, g is not continuous at 2, so it is not differentiable there.

- (A) is the gradient of x − 3, which equals g(x) only for x ≠ 2. The hole at x = 2 means the derivative there does not exist.
- (B) is the height of the hole, the value of x − 3 at x = 2. A height is not a gradient, and the point is missing anyway.
- (C) treats 0/0 as if it were 0.
</details>

## Question 4 (multiple choice · core)

Let f(x) = ax² for x ≤ 1 and f(x) = bx + 2 for x > 1, where a and b are constants. For which values is f differentiable at x = 1? (The left-hand limit of the difference quotient at x = 1 is 2a.)

- (A) a = −2, b = −4
- (B) a = 0, b = −2
- (C) a = −1, b = −2
- (D) a = 2, b = 4

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Two conditions are needed.

1. **Continuity at 1:** a = b + 2.
2. **Equal one-sided limits of the difference quotient:** the left one is 2a and the right one is b (the gradient of the line), so 2a = b.

Substituting: a = 2a + 2, so a = −2 and b = −4. Check: both pieces give f(1) = −2, and both gradients are −4.

- (B) is continuous (0 = −2 + 2) but uses b + 2 as the gradient of the line, solving 2a = b + 2. The gradients are actually 0 and −2, so there is a corner.
- (C) matches the gradients (2a = −2 = b) but ignores continuity: the left piece gives −1 and the right side approaches 0. With a jump, there is no derivative.
- (D) comes from a sign slip in the continuity equation (a = b − 2). The gradients match, but the left piece gives 2 and the right side approaches 6, a jump.
</details>

## Question 5 (graph · core)

The graph of f on the interval −4 ≤ x ≤ 5 is made of:

- a straight segment from (−4, 1) to (−2, 3);
- a straight segment from (−2, 3) to (0, −1), with a filled dot at (0, −1);
- an open circle at (0, 2), from which a smooth curve rises to (2, 4), where its tangent line is vertical;
- the curve continues rising to a smooth peak at (3.5, 5), then falls to (5, 3).

(a) At which value(s) of x in −4 < x < 5 is f not continuous? Justify.
(b) At which value(s) of x in −4 < x < 5 is f not differentiable? Give a reason for each.
(c) Find f′(−3), f′(−1) and f′(3.5).

<details>
<summary>Worked solution</summary>

**(a)** Only **x = 0**. The left-hand limit is −1 (and f(0) = −1), but the right-hand limit is 2. The one-sided limits differ, so lim (x → 0) f(x) does not exist and f is not continuous at 0.

**(b)**

- **x = −2:** a corner. The gradient is (3 − 1)/(−2 − (−4)) = 1 on the left and (−1 − 3)/(0 − (−2)) = −2 on the right, so the one-sided limits of the difference quotient are 1 and −2, which differ.
- **x = 0:** f is not continuous there, and a function that is differentiable at a point must be continuous there.
- **x = 2:** a vertical tangent. The difference quotient is unbounded, so it has no finite limit.

**(c)** f′(−3) = **1** and f′(−1) = **−2** (the gradients of the segments). f′(3.5) = **0**, because the tangent at a smooth peak is horizontal.

Suggested mark points (4): 1 for x = 0 with the one-sided limits; 1 for x = −2 with the two different gradients; 1 for x = 2 (vertical tangent) and x = 0 (by the theorem); 1 for all three values in (c).
</details>

## Question 6 (constructed response · core)

A function h is defined by

- h(x) = x² + 2 for x < 1
- h(x) = 2x for x ≥ 1

A student says: "Both pieces have gradient 2 at x = 1, so h is differentiable at x = 1."

(a) Show that h is not continuous at x = 1.
(b) Find lim (x → 1⁻) (h(x) − h(1))/(x − 1) and lim (x → 1⁺) (h(x) − h(1))/(x − 1).
(c) Explain the student's error, and state whether h′(1) exists.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** h(1) = 2(1) = 2. From the left, lim (x → 1⁻) (x² + 2) = 3. Since 3 ≠ 2, lim (x → 1) h(x) does not equal h(1) (in fact the limit does not exist, because the right-hand limit is 2). So h is **not continuous** at 1.

**(b)** Use h(1) = 2 in both quotients.

- Left: (x² + 2 − 2)/(x − 1) = x²/(x − 1). As x → 1⁻, the top tends to 1 and the bottom is a small negative number, so the quotient → **−∞**.
- Right: (2x − 2)/(x − 1) = 2(x − 1)/(x − 1) = **2**.

**(c)** The student compared the gradients of the two formulas but ignored the jump between them. Differentiability needs continuity first. Because the left piece approaches height 3 while h(1) = 2, the left-hand quotient divides a gap of about 1 by a tiny number and is unbounded. **h′(1) does not exist.**

| Point | What earns it |
|---|---|
| 1 | (a) Left-hand limit 3 compared with h(1) = 2, concluding not continuous |
| 1 | (b) Left-hand quotient limit −∞ (or "unbounded"), with h(1) = 2 used |
| 1 | (b) Right-hand quotient limit 2 |
| 1 | (c) Explains that differentiability requires continuity (or cites the unbounded quotient), so h′(1) does not exist |

Acceptable alternative for (c): quote the theorem directly. "h is not continuous at 1, and differentiability implies continuity, so h′(1) does not exist."
</details>

## Question 7 (constructed response · stretch)

Let f(x) = |x − 1| + x.

(a) A calculator estimates f′(1) with the symmetric difference quotient (f(1 + h) − f(1 − h))/(2h) and h = 0.001. Find the value it reports.
(b) Write f without absolute-value signs on each side of x = 1, and find both one-sided limits of (f(1 + h) − f(1))/h.
(c) Is f differentiable at x = 1? Explain how your answer is consistent with (a).
(d) Is f continuous at x = 1? What does this question show about the link between continuity and differentiability?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(1.001) = 0.001 + 1.001 = 1.002 and f(0.999) = 0.001 + 0.999 = 1.000. Quotient: (1.002 − 1.000)/0.002 = **1**.

**(b)** For x < 1, |x − 1| = 1 − x, so f(x) = 1 − x + x = **1**. For x ≥ 1, |x − 1| = x − 1, so f(x) = **2x − 1**. Also f(1) = 1.

- Left (h < 0): (1 − 1)/h = 0, so the limit is **0**.
- Right (h > 0): (2(1 + h) − 1 − 1)/h = 2h/h, so the limit is **2**.

**(c)** **No.** The one-sided limits, 0 and 2, are different, so f′(1) does not exist; the graph has a corner at (1, 1). The calculator's 1 is the average of 0 and 2: the symmetric quotient blends the two sides. It is not evidence that a derivative exists.

**(d)** **Yes.** Both one-sided limits of f(x) as x → 1 equal 1, and f(1) = 1. So f is continuous but not differentiable at 1. This is a counterexample to "continuous implies differentiable"; only the other direction is a theorem.

| Point | What earns it |
|---|---|
| 1 | (a) Value 1 from correct f(1.001) and f(0.999) |
| 1 | (b) Correct pieces and one-sided limits 0 and 2 |
| 1 | (c) Not differentiable because 0 ≠ 2, and explains that the calculator averages the two sides |
| 1 | (d) Continuous at 1 with a reason, and states that continuity does not guarantee differentiability |
</details>

## How did you do?

- **Q1 or Q3 wrong:** revisit "Differentiable means continuous" and the domain example in the [study guide](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/).
- **Q2 or Q5 wrong:** study Figure 1 and the table "Four ways a derivative fails to exist".
- **Q4 or Q6 wrong:** redo Worked example 2 and the two-step method for piecewise functions: continuity first.
- **Q7 wrong:** reread Worked example 1 and "A warning about calculators".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-checklist/).
