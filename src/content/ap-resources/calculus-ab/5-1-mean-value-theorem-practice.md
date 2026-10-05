---
resourceId: "mb-ap-calcab-5.1-practice"
title: "Using the Mean Value Theorem: Practice Questions (Calculus AB 5.1)"
description: "Seven original Marlbridge practice questions on the Mean Value Theorem: finding c, checking conditions, table justifications and context, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Derivative rules, including the chain rule"
  - "Continuity and differentiability of piecewise functions"
prerequisiteResources: ["mb-ap-calcab-5.1-study-guide"]
learningObjectives:
  - "Find the values of c that the Mean Value Theorem guarantees"
  - "Decide whether the conditions of the theorem hold, and explain what happens when they do not"
  - "Write a three-part justification from a formula or a table of values"
  - "Interpret the conclusion in context, with units"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers unless a question asks for units in context."
related: ["mb-ap-calcab-5.1-study-guide", "mb-ap-calcab-5.1-revision-notes", "mb-ap-calcab-5.1-checklist"]
next: "mb-ap-calcab-5.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, exact answers unless stated, and all contexts and data are fictional. MVT means the Mean Value Theorem; in your own written answers, name it in full. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = √(2x + 1). What value of c satisfies the conclusion of the Mean Value Theorem for f on [0, 4]?

- (A) 0
- (B) 1/2
- (C) 3/2
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f is continuous on [0, 4] and differentiable on (0, 4) (2x + 1 > 0 there). f(0) = 1 and f(4) = √9 = 3, so the average rate is (3 − 1)/4 = 1/2. By the chain rule, f′(x) = 1/√(2x + 1). Solve 1/√(2x + 1) = 1/2: √(2x + 1) = 2, so 2x + 1 = 4 and x = 3/2, which lies in (0, 4).

- (A) comes from forgetting the chain rule: 1/(2√(2x + 1)) = 1/2 gives x = 0, which is an endpoint anyway, so it could never be the answer.
- (B) is the average rate itself, not the value of x where the derivative equals it.
- (D) is the midpoint of [0, 4]. f′(2) = 1/√5, which is not 1/2.
</details>

## Question 2 (multiple choice · core)

For which function are **both** conditions of the Mean Value Theorem satisfied on [−1, 2]?

- (A) f(x) = |x|
- (B) f(x) = x^(1/3), the cube root of x
- (C) f(x) = (x + 2)/(x − 1)
- (D) f(x) = e^(−x) + x²

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** e^(−x) and x² are continuous and differentiable for every real x, so their sum is continuous on [−1, 2] and differentiable on (−1, 2), with f′(x) = −e^(−x) + 2x.

- (A) is continuous, but has a corner at x = 0, which is inside (−1, 2). It is not differentiable there.
- (B) is continuous, but has a vertical tangent at x = 0: the derivative (1/3)x^(−2/3) is undefined there.
- (C) is undefined at x = 1, which is inside the interval, so it is not even continuous on [−1, 2].
</details>

## Question 3 (multiple choice · core)

A function f is differentiable for all real x. Some values are shown.

| x | 1 | 3 | 6 | 8 |
|---|---|---|---|---|
| f(x) | 5 | 9 | 3 | 7 |

Which statement **must** be true?

- (A) f′(c) = 2 for some c in (3, 6)
- (B) f′(c) = −2 for some c in (3, 6)
- (C) f(c) = 0 for some c in (1, 8)
- (D) f′(c) = 2/7 for some c in (3, 8)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f is differentiable, so it is continuous on [3, 6] and differentiable on (3, 6). The average rate is (3 − 9)/(6 − 3) = −6/3 = −2. By the Mean Value Theorem, f′(c) = −2 for some c in (3, 6).

- (A) uses the wrong sub-interval. The average rate is 2 on [1, 3] and on [6, 8], so f′ = 2 is guaranteed in (1, 3) and in (6, 8), not in (3, 6).
- (C) needs a sign change for the Intermediate Value Theorem. Every table value is positive, so nothing guarantees a zero.
- (D) 2/7 is the average rate on [1, 8], which guarantees a c in (1, 8). On [3, 8] the average rate is (7 − 9)/5 = −2/5, so nothing guarantees 2/7 in (3, 8).
</details>

## Question 4 (multiple choice · core)

Let f(x) = |x − 2| on [0, 5]. The average rate of change of f on [0, 5] is 1/5. Which statement is true?

- (A) By the Mean Value Theorem, f′(c) = 1/5 for some c in (0, 5).
- (B) No c in (0, 5) has f′(c) = 1/5. This does not contradict the Mean Value Theorem, because f is not differentiable at x = 2.
- (C) c = 5/2 works, because it is the midpoint of the interval.
- (D) The Mean Value Theorem does not apply because f is not continuous on [0, 5].

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f(0) = 2 and f(5) = 3, so the average rate is 1/5. But f′(x) = −1 for x < 2 and f′(x) = 1 for x > 2, and f′(2) does not exist (corner). So f′ never equals 1/5. The differentiability condition fails at x = 2, inside (0, 5), so the theorem made no promise.

- (A) applies the theorem without checking the conditions.
- (C) f′(5/2) = 1, not 1/5. The midpoint is not special.
- (D) f is continuous everywhere. The failing condition is differentiability, not continuity.
</details>

## Question 5 (constructed response · core)

Let g(x) = x + 4/x.

(a) Explain why the Mean Value Theorem applies to g on [1, 4], and find every value of c it guarantees.
(b) The average rate of change of g on [−1, 4] is 2. Show that no c in (−1, 4) has g′(c) = 2, and explain why this does not contradict the Mean Value Theorem.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** g is a sum of a polynomial and a rational function whose only problem point is x = 0, which is not in [1, 4]. So g is continuous on [1, 4] and differentiable on (1, 4).

g(1) = 1 + 4 = 5 and g(4) = 4 + 1 = 5. Average rate: (5 − 5)/3 = 0.

g′(x) = 1 − 4/x². Solve 1 − 4/x² = 0: x² = 4, x = ±2. Only **c = 2** lies in (1, 4).

**(b)** g(−1) = −1 − 4 = −5 and g(4) = 5, so the average rate is (5 − (−5))/5 = 2. Solve 1 − 4/x² = 2: −4/x² = 1, so x² = −4. There is no real solution, so no c in (−1, 4) works.

There is no contradiction: g is undefined at x = 0, which lies in [−1, 4]. So g is not continuous on [−1, 4], and the theorem does not apply.

| Point | What earns it |
|---|---|
| 1 | States that g is continuous on [1, 4] and differentiable on (1, 4), with a reason (only problem point is x = 0, outside the interval) |
| 1 | Average rate 0 and g′(x) = 1 − 4/x², solved to give c = 2 with −2 rejected |
| 1 | Shows g′(x) = 2 has no real solution |
| 1 | Explains that the continuity condition fails at x = 0 inside [−1, 4], so there is no contradiction |

Acceptable alternative for (b): note that g′(x) = 1 − 4/x² < 1 for every x ≠ 0, so g′ can never equal 2.
</details>

## Question 6 (constructed response · core)

Let f(x) = ax² + 1 for x ≤ 2, and f(x) = 4x + b for x > 2, where a and b are constants.

(a) Find a and b so that f is differentiable for all x.
(b) With these values, explain why the Mean Value Theorem applies to f on [0, 4].
(c) Find every value of c in (0, 4) that satisfies the conclusion.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Differentiable at 2 needs matching derivatives: 2a(2) = 4, so a = 1. Differentiable also needs continuity at 2: a(2²) + 1 = 4(2) + b, so 5 = 8 + b and b = −3.

**(b)** Each piece is a polynomial, so f is differentiable on each side of 2. With a = 1 and b = −3, both pieces give f(2) = 5 and both give derivative 4 at x = 2, so f is differentiable at 2 as well. Hence f is differentiable on [0, 4], and therefore continuous there too.

**(c)** f(0) = 0 + 1 = 1. f(4) = 16 − 3 = 13. Average rate: (13 − 1)/4 = 3.

On (0, 2), f′(x) = 2x. Solve 2x = 3: x = 3/2, which lies in (0, 2). ✓
At x = 2, f′(2) = 4 ≠ 3.
On (2, 4), f′(x) = 4 ≠ 3.

So the only value is **c = 3/2**.

| Point | What earns it |
|---|---|
| 1 | a = 1 from matching derivatives at x = 2 |
| 1 | b = −3 from continuity at x = 2 |
| 1 | Explains that f is differentiable (hence continuous) on [0, 4], referring to both pieces and the join |
| 1 | Average rate 3 and c = 3/2, having checked the other piece and the join |
</details>

## Question 7 (constructed response · stretch)

A fictional cyclist rides along a straight road. Her distance from the start is d(t) km, t minutes after starting. d is twice differentiable. Some values are shown.

| t (minutes) | 0 | 10 | 25 | 30 | 45 |
|---|---|---|---|---|---|
| d(t) (km) | 0 | 3.5 | 9.5 | 11.0 | 18.5 |

(a) Explain why there must be a time t in (10, 25) at which the cyclist's velocity is 0.4 km per minute.
(b) Explain why there must be a time t in (10, 45) at which her velocity is 0.45 km per minute.
(c) A classmate says: "Her average velocity over [0, 45] is about 0.41 km per minute, so her velocity was never more than 0.5 km per minute." Is this correct? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** d is differentiable, so it is continuous on [10, 25] and differentiable on (10, 25). Average rate: (9.5 − 3.5)/(25 − 10) = 6/15 = 0.4 km per minute. By the Mean Value Theorem, d′(t₁) = 0.4 for some t₁ in (10, 25). Since d′ is velocity, her velocity was 0.4 km per minute (24 km/h) at that time.

**(b)** On [30, 45]: (18.5 − 11.0)/15 = 7.5/15 = 0.5. By the Mean Value Theorem, v(t₂) = d′(t₂) = 0.5 for some t₂ in (30, 45).

d is twice differentiable, so v = d′ is differentiable and therefore continuous. On [t₁, t₂], v is continuous, v(t₁) = 0.4 and v(t₂) = 0.5, and 0.4 < 0.45 < 0.5. By the Intermediate Value Theorem, v(t) = 0.45 for some t in (t₁, t₂), which lies inside (10, 45).

**(c)** Not correct. The Mean Value Theorem gives values the velocity must **take**; it never gives an upper bound. In fact part (b) shows the velocity equals 0.5 at some time, and nothing in the table stops it from being higher at other times.

| Point | What earns it |
|---|---|
| 1 | (a) Conditions stated (differentiable, so continuous), average rate 0.4 shown, Mean Value Theorem named |
| 1 | (b) Average rate 0.5 on [30, 45] and the Mean Value Theorem gives v = 0.5 at some t₂ in (30, 45) |
| 1 | (b) States that v is continuous because d is twice differentiable, and applies the Intermediate Value Theorem between 0.4 and 0.5 |
| 1 | (c) Explains that average rates give values the velocity reaches, not a maximum |

Note for (b): you need one guaranteed velocity below 0.45 and one above it. The values 0.4 (from [10, 25]) and 0.5 (from [30, 45]) do this and keep the time inside (10, 45). The value 0.35 from [0, 10] would also sit below 0.45, but it could place the time before t = 10.
</details>

## How did you do?

- **Q1, Q5(a) or Q6(c) wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-study-guide/) and check every solution against the open interval.
- **Q2, Q4 or Q5(b) wrong:** reread "The theorem, part by part" and Worked example 3 (when a condition fails).
- **Q3 or Q7 wrong:** redo Worked example 2 (tables) and remember that any sub-interval may be used.
- **Q6(a) wrong:** review differentiability of piecewise functions (Topic 2.4).

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-1-mean-value-theorem-checklist/).
