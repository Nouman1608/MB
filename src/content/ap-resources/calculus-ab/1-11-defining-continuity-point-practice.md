---
resourceId: "mb-ap-calcab-1.11-practice"
title: "Defining Continuity at a Point: Practice Questions (Calculus AB 1.11)"
description: "Seven original Marlbridge practice questions on continuity at a point, using the three-condition definition with piecewise, rational and absolute value functions."
course: "calculus-ab"
unit: 1
topics: ["1.11"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and algebraic rewriting of limits"
prerequisiteResources: ["mb-ap-calcab-1.11-study-guide"]
learningObjectives:
  - "Decide whether a function is continuous at a point by checking the three conditions"
  - "Name the condition that fails and support it with values"
  - "Use one-sided limits at the point where a piecewise function changes formula"
  - "Explain why a given argument about continuity is right or wrong"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact values unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.11-study-guide", "mb-ap-calcab-1.11-revision-notes", "mb-ap-calcab-1.11-checklist"]
next: "mb-ap-calcab-1.11-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: lim (x → c) f(x) means "the limit as x approaches c of f(x)"; c⁻ and c⁺ mean from the left and from the right. "Continuous at c" uses the three-condition definition: f(c) exists, lim (x → c) f(x) exists, and the two are equal. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = (x² − 4)/(x − 2) for x ≠ 2, and f(2) = 3. Which statement is true?

- (A) f is not continuous at x = 2, because f(2) is undefined.
- (B) f is not continuous at x = 2, because lim (x → 2) f(x) does not exist.
- (C) f is not continuous at x = 2, because lim (x → 2) f(x) exists but is not equal to f(2).
- (D) f is continuous at x = 2.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Condition 1: f(2) = 3 is given, so f(2) exists. Condition 2: for x ≠ 2, f(x) = (x − 2)(x + 2)/(x − 2) = x + 2, so lim (x → 2) f(x) = 4. Condition 3: 4 ≠ 3, so this condition fails.

- (A) substitutes 2 into the fraction and gets 0/0. But the fraction is only used for x ≠ 2; f(2) = 3 is given separately.
- (B) treats 0/0 as "no limit". After factoring, the limit is 4.
- (D) checks only that f(2) exists and that the limit exists, and forgets to compare them.
</details>

## Question 2 (multiple choice · core)

Let

- f(x) = x³ + 1 for x < 1
- f(x) = 3x − 1 for x ≥ 1

Which statement is true?

- (A) f is continuous at x = 1.
- (B) f is not continuous at x = 1, because f(1) is undefined.
- (C) f is not continuous at x = 1, because the one-sided limits at x = 1 are different.
- (D) f is not continuous at x = 1, because a function given by two formulas cannot be continuous where the formula changes.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f(1) = 3(1) − 1 = 2, from the second piece (x ≥ 1). From the left, lim (x → 1⁻) (x³ + 1) = 2. From the right, lim (x → 1⁺) (3x − 1) = 2. So lim (x → 1) f(x) = 2 = f(1), and f is continuous at x = 1.

- (B) misses that "x ≥ 1" includes x = 1, so the second piece defines f(1).
- (C) assumes two different formulas must give two different limits. Work them out: both are 2.
- (D) is a common belief, but pieces can meet. The definition, not the number of formulas, decides continuity.
</details>

## Question 3 (multiple choice · core)

The table gives information about a function f at four values of c.

| c | f(c) | lim (x → c⁻) f(x) | lim (x → c⁺) f(x) |
|---|---|---|---|
| 1 | 2 | 2 | 3 |
| 2 | undefined | 4 | 4 |
| 3 | 5 | 5 | 5 |
| 4 | 1 | 6 | 6 |

At which value of c is f continuous?

- (A) c = 1
- (B) c = 2
- (C) c = 3
- (D) c = 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At c = 3, f(3) = 5, both one-sided limits are 5, so lim (x → 3) f(x) = 5 = f(3). All three conditions hold.

- (A) f(1) exists, but the one-sided limits are 2 and 3, so the limit does not exist (condition 2 fails). Matching the left-hand limit is not enough.
- (B) the limit is 4, but f(2) is undefined (condition 1 fails).
- (D) f(4) = 1 and the limit is 6. Both exist, but they differ (condition 3 fails).
</details>

## Question 4 (multiple choice · core)

Which of the following functions is continuous at x = 0?

- (A) f(x) = (sin x)/x
- (B) f(x) = (sin x)/x for x ≠ 0, and f(0) = 1
- (C) f(x) = |x|/x for x ≠ 0, and f(0) = 0
- (D) f(x) = 1/x² for x ≠ 0, and f(0) = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From Topic 1.8, lim (x → 0) (sin x)/x = 1. In (B), f(0) = 1 is defined, the limit is 1, and they are equal.

- (A) has the right limit, but (sin x)/x is undefined at x = 0, so condition 1 fails.
- (C) f(0) = 0 exists, but |x|/x is −1 for x < 0 and 1 for x > 0. The one-sided limits are −1 and 1, so condition 2 fails.
- (D) f(0) = 0 exists, but 1/x² grows without bound from both sides. An infinite limit does not exist as a number, so condition 2 fails.
</details>

## Question 5 (constructed response · core)

Let f be defined by

- f(x) = x² − 2 for x < −1
- f(x) = x for −1 ≤ x < 2
- f(x) = 5 − x² for x ≥ 2

(a) Use the definition of continuity to decide whether f is continuous at x = −1.
(b) Use the definition of continuity to decide whether f is continuous at x = 2.
(c) For any point where f is not continuous, name the condition that fails and the type of discontinuity.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(−1) = −1, from the middle piece (−1 ≤ x). From the left, lim (x → −1⁻) (x² − 2) = 1 − 2 = −1. From the right, lim (x → −1⁺) x = −1. So lim (x → −1) f(x) = −1 = f(−1). **f is continuous at x = −1.**

**(b)** f(2) = 5 − 4 = 1, from the last piece (x ≥ 2). From the left, lim (x → 2⁻) x = 2. From the right, lim (x → 2⁺) (5 − x²) = 1. The one-sided limits are 2 and 1, which are not equal, so lim (x → 2) f(x) does not exist. **f is not continuous at x = 2.**

**(c)** At x = 2, condition 2 fails (the limit does not exist). Condition 1 holds, since f(2) = 1. The one-sided limits are finite but different, so this is a **jump discontinuity**.

| Point | What earns it |
|---|---|
| 1 | At x = −1: f(−1) = −1 and both one-sided limits equal −1, each found from the correct piece |
| 1 | Concludes continuous at x = −1 because the limit equals f(−1) (comparison stated) |
| 1 | At x = 2: one-sided limits 2 and 1, so the limit does not exist; not continuous |
| 1 | Names condition 2 as the failure and identifies a jump discontinuity |

A graph or a single substitution without one-sided limits earns no mark for (a) or (b).
</details>

## Question 6 (constructed response · core)

Let g(x) = (√(x + 4) − 2)/x for x ≠ 0, and g(0) = 1/4.

(a) Find lim (x → 0) g(x), showing your algebra.
(b) Is g continuous at x = 0? Justify using the definition.
(c) A classmate writes: "Putting x = 0 into the formula gives 0/0, so g is not continuous at 0." Explain the error.
(d) Suppose g(0) were redefined as 0, with the formula unchanged. Which condition of the definition would fail?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Substitution gives (2 − 2)/0 = 0/0, so rewrite. Multiply top and bottom by the conjugate √(x + 4) + 2. The top becomes (x + 4) − 4 = x. So for x ≠ 0,

g(x) = x/(x(√(x + 4) + 2)) = 1/(√(x + 4) + 2).

So lim (x → 0) g(x) = 1/(√4 + 2) = **1/4**.

**(b)** g(0) = 1/4 exists. lim (x → 0) g(x) = 1/4 exists. They are equal, so **g is continuous at x = 0**.

**(c)** The formula is only used for x ≠ 0, so 0/0 says nothing about g(0), which is given as 1/4. And 0/0 does not decide the limit either: after rewriting, the limit is 1/4. Continuity depends on the three conditions, which all hold.

**(d)** g(0) = 0 would still exist and the limit would still be 1/4, but 1/4 ≠ 0, so **condition 3** would fail.

| Point | What earns it |
|---|---|
| 1 | Multiplies by the conjugate and simplifies to 1/(√(x + 4) + 2) for x ≠ 0 |
| 1 | Limit = 1/4 |
| 1 | States g(0) = 1/4 and the limit = 1/4, so g is continuous at 0 (values quoted) |
| 1 | (c) and (d): the formula is not used at x = 0, so 0/0 decides nothing; with g(0) = 0, condition 3 fails because 1/4 ≠ 0 |

Optional check: √4.01 ≈ 2.0025, so g(0.01) ≈ 0.0025/0.01 = 0.25, close to 1/4. A table alone earns no mark for (a).
</details>

## Question 7 (constructed response · stretch)

Let h(x) = (x² − 3x)/|x − 3| for x ≠ 3, and h(3) = 3.

(a) Find lim (x → 3⁻) h(x) and lim (x → 3⁺) h(x).
(b) Is h continuous at x = 3? Justify using the definition.
(c) Is h continuous at x = 0? Justify using the definition.
(d) A student says: "h(3) = 3 is wrong. If we choose the right value for h(3), h will be continuous at 3." Is the student correct? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Factor the top: x² − 3x = x(x − 3).

- For x < 3, |x − 3| = −(x − 3), so h(x) = x(x − 3)/(−(x − 3)) = −x. So lim (x → 3⁻) h(x) = **−3**.
- For x > 3, |x − 3| = x − 3, so h(x) = x. So lim (x → 3⁺) h(x) = **3**.

**(b)** h(3) = 3 exists. But the one-sided limits are −3 and 3, so lim (x → 3) h(x) does not exist. Condition 2 fails, so **h is not continuous at x = 3**. (The right-hand limit happens to equal h(3), but that is not enough: the two-sided limit must exist.)

**(c)** Near x = 0 we have x < 3, so h(x) = −x. h(0) = 0, and lim (x → 0) h(x) = lim (x → 0) (−x) = 0. They are equal, so **h is continuous at x = 0**.

**(d)** The student is **not correct**. Changing h(3) changes only condition 1 or 3. Condition 2 does not depend on h(3) at all: the one-sided limits are −3 and 3 whatever h(3) is, so the limit never exists and h can never be continuous at 3.

| Point | What earns it |
|---|---|
| 1 | Uses the sign of x − 3 on each side to simplify h to −x (left) and x (right) |
| 1 | One-sided limits −3 and 3, and concludes h is not continuous at 3 because the limit does not exist |
| 1 | At x = 0: h(0) = 0 and lim (x → 0) h(x) = 0, so continuous (values quoted) |
| 1 | Explains that no value of h(3) can help because the limit at 3 does not exist |

Acceptable alternative for (a): a table of values on each side (for example h(2.9) = −2.9 and h(3.1) = 3.1) supports the one-sided limits, but the algebra is needed for full credit.
</details>

## How did you do?

- **Q1 or Q6 wrong:** reread "The three-condition definition" and Worked example 2 in the [study guide](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-study-guide/). A formula that gives 0/0 is not the end of the story.
- **Q2 or Q5 wrong:** redo Worked example 1 and find both one-sided limits at every piecewise boundary.
- **Q3 or Q4 wrong:** match each row or option to a panel of Figure 1 and name the condition that fails.
- **Q7 wrong:** see Worked example 3 on absolute values and why no value of h(c) can fix a jump.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-11-defining-continuity-point-checklist/).
