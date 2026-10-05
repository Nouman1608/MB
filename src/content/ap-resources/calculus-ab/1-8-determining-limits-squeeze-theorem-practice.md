---
resourceId: "mb-ap-calcab-1.8-practice"
title: "Determining Limits Using the Squeeze Theorem: Practice Questions (Calculus AB 1.8)"
description: "Seven original Marlbridge practice questions on the squeeze theorem, its conditions and the limits of sin x / x and (1 − cos x)/x, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.8"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The inequalities −1 ≤ sin u ≤ 1 and −1 ≤ cos u ≤ 1"
  - "Absolute value and inequalities"
prerequisiteResources: ["mb-ap-calcab-1.8-study-guide"]
learningObjectives:
  - "Find limits with the squeeze theorem and state its conditions"
  - "Choose bounds that are valid on both sides of the limit point"
  - "Use sin x / x → 1 and (1 − cos x)/x → 0 to evaluate related limits"
  - "Explain what the squeeze theorem cannot tell you"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Angles are in radians. Give exact answers unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.8-study-guide", "mb-ap-calcab-1.8-revision-notes", "mb-ap-calcab-1.8-checklist"]
next: "mb-ap-calcab-1.8-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, and exact answers unless stated. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)", and |x| is the absolute value of x. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A function f satisfies −4x − 4 ≤ f(x) ≤ x² for every real number x. What is lim (x → −2) f(x)?

- (A) 0
- (B) 4
- (C) 8
- (D) It cannot be found without a formula for f.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The inequality holds for every x, so it holds on an open interval around −2. The lower bound tends to −4(−2) − 4 = 4 and the upper bound tends to (−2)² = 4. The outer limits are equal, so by the squeeze theorem the limit of f is 4. (The two bounds are consistent: x² − (−4x − 4) = (x + 2)², which is never negative.)

- (A) is the limit of the **gap** between the bounds, (x + 2)², not of f. The gap shrinking to 0 is why the squeeze works, but it is not the answer.
- (C) adds the two outer limits, 4 + 4. The squeeze gives their common value, not their sum.
- (D) misses the point of the theorem: it finds a limit from bounds alone, without a formula.
</details>

## Question 2 (multiple choice · core)

What is lim (x → 0) (sin 4x)/(3x)?

- (A) 0
- (B) 3/4
- (C) 1
- (D) 4/3

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Rewrite: (sin 4x)/(3x) = (4/3) × (sin 4x)/(4x). As x → 0, u = 4x → 0, so (sin 4x)/(4x) → 1. The limit is 4/3 × 1 = 4/3.

- (A) treats 0/0 as 0.
- (B) turns the fraction upside down when inserting the 4: it writes (3/4) × (sin 4x)/(4x) instead of (4/3).
- (C) assumes "sin of something over something" always tends to 1. That needs the **same** quantity inside the sine and in the denominator, and here they are 4x and 3x.
</details>

## Question 3 (multiple choice · core)

A student wants to use the squeeze theorem to find lim (x → 0) x cos(2/x). Which inequality, claimed for all x ≠ 0, is **true** and lets the student finish the argument?

- (A) −x ≤ x cos(2/x) ≤ x
- (B) −|x| ≤ x cos(2/x) ≤ |x|
- (C) −1 ≤ x cos(2/x) ≤ 1
- (D) −x² ≤ x cos(2/x) ≤ x²

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For x ≠ 0, |x cos(2/x)| = |x| × |cos(2/x)| ≤ |x|, which gives (B) on both sides of 0. Both bounds tend to 0, so the limit is 0.

- (A) fails for x < 0. At x = −0.1 it would say 0.1 ≤ x cos(2/x) ≤ −0.1, which is impossible, since the "floor" is above the "ceiling". Multiplying by a negative x flips the signs.
- (C) is not true for all x ≠ 0: at x = 10, x cos(2/x) = 10 cos 0.2 ≈ 9.80. It does hold near 0 (when |x| ≤ 1), but even there the bounds tend to −1 and 1. The outer limits differ, so the theorem gives no conclusion.
- (D) is false. At x = 0.1, x cos(2/x) = 0.1 cos 20 ≈ 0.0408, which is bigger than x² = 0.01. Bounds that shrink faster than |x| cannot trap a function of size up to |x|.
</details>

## Question 4 (multiple choice · core)

What is lim (x → 0) (sin x + 1 − cos x)/(2x)?

- (A) 0
- (B) 1/2
- (C) 1
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Split the fraction: (1/2) × [(sin x)/x + (1 − cos x)/x]. As x → 0, (sin x)/x → 1 and (1 − cos x)/x → 0. So the limit is (1/2)(1 + 0) = 1/2.

- (A) treats 0/0 as 0.
- (C) mixes up the two key limits and uses 1 for (1 − cos x)/x too: (1/2)(1 + 1) = 1.
- (D) assumes a 0 in the denominator always means no limit. Here the top is also 0, so the form is indeterminate, and the known trig limits settle it.
</details>

## Question 5 (graph · core)

A function f is known only through this fact: for all x with 3 < x < 7 and x ≠ 4,

**5 − (x − 4)² ≤ f(x) ≤ 5 + |x − 4|.**

(a) Find lim (x → 4) f(x), stating the conditions you checked.
(b) What can you conclude about f(4)?
(c) Describe the region where the graph of f must lie near x = 6. Does the given fact determine lim (x → 6) f(x)?

<details>
<summary>Worked solution</summary>

**(a)** The inequality holds on the open interval (3, 7), which contains 4, except at x = 4 itself. That is enough. The lower bound tends to 5 − 0 = 5 and the upper bound tends to 5 + 0 = 5. The outer limits are equal, so by the squeeze theorem lim (x → 4) f(x) = **5**.

**(b)** Nothing. The inequality is not claimed at x = 4, so f(4) may be any number, or f may be undefined there. The graph near x = 4 is pinched towards the point (4, 5), whether or not that point is on the graph.

**(c)** Near x = 6 the graph lies between the downward parabola y = 5 − (x − 4)², which passes through (6, 1), and the V-shaped line y = 5 + |x − 4|, which passes through (6, 7). The bounds tend to 1 and 7. They are different, so the squeeze theorem gives **no** value for lim (x → 6) f(x). The limit might exist, or might not.

Suggested mark points (3): 1 for the limit 5 with all three conditions named (inequality, open interval around 4 except 4, equal outer limits); 1 for stating that f(4) cannot be determined, with the reason; 1 for bounds 1 and 7 at x = 6 and the conclusion that the theorem gives no answer (not "the limit does not exist").
</details>

## Question 6 (constructed response · core)

Let g(x) = 2 + (x − 3) cos(1/(x − 3)) for x ≠ 3.

(a) Explain why the limit laws alone cannot give lim (x → 3) g(x).
(b) Write an inequality g₁(x) ≤ g(x) ≤ g₂(x) that holds for all x ≠ 3. Explain why your bounds must use an absolute value.
(c) Use the squeeze theorem to find lim (x → 3) g(x), stating each condition.
(d) A student says: "cos(1/(x − 3)) has no limit at 3, so g has no limit at 3." Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The product law needs both lim (x → 3) (x − 3) and lim (x → 3) cos(1/(x − 3)) to exist. The second does not: as x → 3, 1/(x − 3) grows without bound in size, so the cosine keeps swinging between −1 and 1.

**(b)** For x ≠ 3, |(x − 3) cos(1/(x − 3))| = |x − 3| × |cos(1/(x − 3))| ≤ |x − 3|. So

**2 − |x − 3| ≤ g(x) ≤ 2 + |x − 3|.**

An absolute value is needed because x − 3 is negative when x < 3. Multiplying −1 ≤ cos(…) ≤ 1 by a negative number reverses the signs, so 2 − (x − 3) ≤ g(x) ≤ 2 + (x − 3) is false to the left of 3. For example, at x = 2.9 it would claim 2.1 ≤ g(2.9) ≤ 1.9.

**(c)** The inequality holds for all x ≠ 3, so on an open interval around 3 except at 3. lim (x → 3) (2 − |x − 3|) = 2 and lim (x → 3) (2 + |x − 3|) = 2. The outer limits are equal, so by the squeeze theorem lim (x → 3) g(x) = **2**.

**(d)** The student assumes that if one factor has no limit, the product has none. The product law only works in one direction: if both limits exist, so does the limit of the product. It says nothing when one fails. Here the factor (x − 3) shrinks to 0 while cos(1/(x − 3)) stays between −1 and 1, so the product is squeezed to 0 and g tends to 2.

| Point | What earns it |
|---|---|
| 1 | States that lim (x → 3) cos(1/(x − 3)) does not exist, so the product law cannot be used |
| 1 | Correct bounds 2 − \|x − 3\| ≤ g(x) ≤ 2 + \|x − 3\|, with the reason for the absolute value (sign of x − 3 for x < 3) |
| 1 | Limit = 2, naming the squeeze theorem, the interval around 3 and the equal outer limits |
| 1 | Explains that the failure of one factor's limit does not decide the product's limit |

Acceptable alternative for (b): split into cases, 2 + (x − 3) ≤ g(x) ≤ 2 − (x − 3) for x < 3 and 2 − (x − 3) ≤ g(x) ≤ 2 + (x − 3) for x > 3, then apply the theorem to each one-sided limit.
</details>

## Question 7 (constructed response · stretch)

You may use the fact that, for 0 < |x| < π/2,

**cos x ≤ (sin x)/x ≤ 1.**

(a) Show that 1 ≤ (tan x)/x ≤ 1/cos x for 0 < |x| < π/2.
(b) Hence find lim (x → 0) (tan x)/x, justifying your answer.
(c) Find lim (x → 0) (tan 3x)/(5x).
(d) You are told that tan 0.03 ≈ 0.030009. Use this to check your answer to (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** For 0 < |x| < π/2, cos x > 0, and (tan x)/x = [(sin x)/x] ÷ cos x. Divide every part of the given inequality by the positive number cos x:

cos x / cos x ≤ (sin x)/(x cos x) ≤ 1/cos x, which is **1 ≤ (tan x)/x ≤ 1/cos x**.

**(b)** The inequality holds for all x with 0 < |x| < π/2, an open interval around 0 with 0 removed. lim (x → 0) 1 = 1 and lim (x → 0) 1/cos x = 1/cos 0 = 1. The outer limits are equal, so by the squeeze theorem **lim (x → 0) (tan x)/x = 1**.

**(c)** Write (tan 3x)/(5x) = (3/5) × (tan 3x)/(3x). As x → 0, u = 3x → 0, so (tan 3x)/(3x) → 1 by (b). The limit is **3/5**.

**(d)** At x = 0.01, (tan 0.03)/0.05 ≈ 0.030009/0.05 ≈ 0.6002. That is very close to 3/5 = 0.6, which supports the answer.

| Point | What earns it |
|---|---|
| 1 | Divides the given inequality by cos x, noting cos x > 0 so the signs are kept |
| 1 | Limit of (tan x)/x is 1, naming the squeeze theorem and showing both outer limits equal 1 |
| 1 | Rewrites with a factor 3/5 and the matching form (tan 3x)/(3x), giving 3/5 |
| 1 | Correct numerical check, about 0.6002, compared with 0.6 |

Acceptable alternative for (b): (tan x)/x = [(sin x)/x] × [1/cos x], then use lim (sin x)/x = 1 and the product law. This earns the (b) point only if the result for (sin x)/x is quoted correctly; part (a) still needs the inequality.
</details>

## How did you do?

- **Q1 or Q5 wrong:** reread "The squeeze theorem" and Worked example 2 in the [study guide](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-study-guide/). Check all three conditions every time.
- **Q3 or Q6 wrong:** see "How to build the bounds". When a factor can be negative, use absolute values.
- **Q2, Q4 or Q7 wrong:** revisit "The two trig limits you must know" and Worked example 3. Match the angle and the denominator.
- **Q6(d) wrong:** see "When rewriting is not enough" on why the product law does not apply.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-8-determining-limits-squeeze-theorem-checklist/).
