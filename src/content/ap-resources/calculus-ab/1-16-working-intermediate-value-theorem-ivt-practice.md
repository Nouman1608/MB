---
resourceId: "mb-ap-calcab-1.16-practice"
title: "Working with the Intermediate Value Theorem: Practice Questions (Calculus AB 1.16)"
description: "Seven original Marlbridge practice questions on the Intermediate Value Theorem using formulas, tables and piecewise functions, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.16"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Continuity at a point and on an interval"
prerequisiteResources: ["mb-ap-calcab-1.16-study-guide"]
learningObjectives:
  - "Decide whether the Intermediate Value Theorem applies to a given function and interval"
  - "Write a complete three-part justification using values from a formula or a table"
  - "Give the least number of solutions guaranteed by a table of values"
  - "Explain what the theorem does not guarantee"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "none-needed"
calculatorNote: "No calculator needed. Use π ≈ 3.1416 and √3 ≈ 1.7321 where a decimal comparison is needed. Angles are in radians."
related: ["mb-ap-calcab-1.16-study-guide", "mb-ap-calcab-1.16-revision-notes", "mb-ap-calcab-1.16-checklist"]
next: "mb-ap-calcab-1.16-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written justification."
  - "Shared practice for Calculus AB and Calculus BC students."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, π ≈ 3.1416 and √3 ≈ 1.7321 where needed. All contexts and data are fictional. "IVT" means the Intermediate Value Theorem; in a written answer, name it in full. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

For which function and interval does the Intermediate Value Theorem guarantee a value c in the interval with f(c) = 0?

- (A) f(x) = 1/(x − 2) on [1, 3]
- (B) f(x) = x² − 3 on [0, 1]
- (C) f(x) = x³ − 2x − 1 on [1, 2]
- (D) f(x) = tan x on [π/4, 3π/4]

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f is a polynomial, so it is continuous on [1, 2]. f(1) = 1 − 2 − 1 = −2 and f(2) = 8 − 4 − 1 = 3. Since −2 < 0 < 3, the theorem guarantees a zero in (1, 2).

- (A) f(1) = −1 and f(3) = 1 do have opposite signs, but f is undefined at x = 2, so it is not continuous on [1, 3]. (In fact 1/(x − 2) is never 0.)
- (B) f is continuous, but f(0) = −3 and f(1) = −2 are both negative. 0 is not between them, so there is no guarantee.
- (D) tan(π/4) = 1 and tan(3π/4) = −1, but tan x is undefined at x = π/2, which lies inside the interval. The theorem cannot be used.
</details>

## Question 2 (multiple choice · core)

The function f is continuous on [0, 4]. Some of its values are shown.

| x | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| f(x) | 3 | −1 | 2 | 5 | −2 |

What is the least number of solutions that the equation f(x) = 0 must have in the interval (0, 4)?

- (A) 1
- (B) 2
- (C) 3
- (D) 4

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Check each neighbouring pair. 3 to −1 on [0, 1]: sign change. −1 to 2 on [1, 2]: sign change. 2 to 5 on [2, 3]: no sign change. 5 to −2 on [3, 4]: sign change. By the theorem there is a zero in each of (0, 1), (1, 2) and (3, 4). These intervals do not overlap, so there are at least 3 solutions.

- (A) uses only the endpoints, f(0) = 3 and f(4) = −2. That proves one zero but ignores the information in the middle of the table.
- (B) counts only the changes from positive to negative, (0, 1) and (3, 4). A change from negative to positive also traps 0.
- (D) counts every sub-interval. On [2, 3] both values are positive, so the theorem gives nothing there.
</details>

## Question 3 (multiple choice · core)

The function f is continuous on [1, 5], with f(1) = 4 and f(5) = −3. Which statement must be true?

- (A) f(3) = 1/2
- (B) f(c) = −1 for at least one c in (1, 5)
- (C) f has exactly one zero in (1, 5)
- (D) f(x) ≤ 4 for every x in [1, 5]

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** f is continuous on [1, 5], and −3 < −1 < 4, so −1 is between f(5) and f(1). By the Intermediate Value Theorem, f(c) = −1 for at least one c in (1, 5).

- (A) averages 4 and −3 at the midpoint x = 3. That would only work if f were a straight line, which is not given.
- (C) The theorem guarantees at least one zero, not exactly one. The graph could cross the x-axis three times.
- (D) The theorem says nothing about values outside the range from −3 to 4. f could rise above 4 between x = 1 and x = 5.
</details>

## Question 4 (multiple choice · core)

Let f(x) = kx + 1 for x < 2, and f(x) = x² − k for x ≥ 2, where k is a constant. For which value of k is f continuous on [0, 3], so that the Intermediate Value Theorem guarantees a value c in (0, 3) with f(c) = 6?

- (A) k = 1
- (B) k = 4/3
- (C) k = 3
- (D) No value of k, because a piecewise function cannot be continuous.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both pieces are polynomials, so only the join at x = 2 needs checking. Limit from the left: 2k + 1. Value and limit from the right: 4 − k. Continuity needs 2k + 1 = 4 − k, so 3k = 3 and k = 1. Then f(0) = 1 and f(3) = 9 − 1 = 8. Since 1 < 6 < 8, the theorem guarantees c in (0, 3) with f(c) = 6.

- (B) drops the "+ 1" from the left piece: 2k = 4 − k gives k = 4/3.
- (C) makes a sign error on the right piece, writing 4 + k: 2k + 1 = 4 + k gives k = 3. With k = 3, f jumps from 7 to 1 at x = 2.
- (D) A piecewise function is continuous when its pieces meet at each join. Here they meet when k = 1.
</details>

## Question 5 (table · core)

A survey drone in a fictional field trial has altitude A(t) metres, t minutes after take-off. A is continuous on [0, 12]. Some values are shown.

| t (minutes) | 0 | 3 | 6 | 8 | 12 |
|---|---|---|---|---|---|
| A(t) (metres) | 0 | 45 | 30 | 52 | 10 |

(a) Justify that there is a time t in (0, 3) at which the drone's altitude is 20 metres.
(b) What is the least number of times in (0, 12) at which the altitude must be exactly 40 metres? Explain.
(c) Must the drone reach an altitude of 60 metres at some time in (0, 12)? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** A is continuous on [0, 3] (given). A(0) = 0 and A(3) = 45, and 0 < 20 < 45. So by the Intermediate Value Theorem there is a time c in (0, 3) with A(c) = 20 metres.

**(b)** 40 is trapped on every sub-interval: 0 to 45 on [0, 3], 45 to 30 on [3, 6], 30 to 52 on [6, 8], and 52 to 10 on [8, 12]. A is continuous on each, so the theorem gives a time in each open sub-interval. They do not overlap, so the altitude is 40 metres **at least 4 times**. It could be more, because the table does not show the flight between readings.

**(c)** Not necessarily. The largest recorded altitude is 52 m, so 60 is not between any two table values and the theorem gives no guarantee. The drone may or may not have gone above 60 m between readings.

| Point | What earns it |
|---|---|
| 1 | (a) States A is continuous, gives A(0) = 0 and A(3) = 45 with 0 < 20 < 45, and concludes by naming the Intermediate Value Theorem |
| 1 | (b) Answer 4, with the four sub-intervals identified |
| 1 | (b) Explains that the count is a minimum because the sub-intervals do not overlap and the table is incomplete |
| 1 | (c) "Not necessarily", because 60 is not between any pair of recorded values (an answer of "no" earns nothing) |
</details>

## Question 6 (constructed response · core)

Consider the equation 2 sin x = x.

(a) Show that the equation has a solution in the interval (π/2, π).
(b) Show that this solution lies in the smaller interval (π/2, 2π/3).
(c) A classmate writes: "The Intermediate Value Theorem shows that the solution is x ≈ 1.9." Comment on this statement.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Let g(x) = 2 sin x − x. A solution of the equation is a zero of g. g is the difference of two continuous functions, so g is continuous on [π/2, π].

g(π/2) = 2(1) − π/2 ≈ 2 − 1.5708 = 0.4292 > 0.
g(π) = 2(0) − π = −π < 0.

Since g(π) < 0 < g(π/2), by the Intermediate Value Theorem there is a c in (π/2, π) with g(c) = 0, that is, 2 sin c = c.

**(b)** g(2π/3) = 2(√3/2) − 2π/3 = √3 − 2π/3 ≈ 1.7321 − 2.0944 = −0.3623 < 0.

g is continuous on [π/2, 2π/3], g(π/2) > 0 and g(2π/3) < 0. So by the theorem there is a zero in (π/2, 2π/3).

**(c)** The theorem only proves that a solution exists in an interval. It does not give its value. Part (b) shows the solution lies between about 1.571 and 2.094, which is consistent with 1.9, but finding x ≈ 1.9 needs a different method, such as further interval halving or a graphing calculator.

| Point | What earns it |
|---|---|
| 1 | Rewrites as g(x) = 2 sin x − x = 0 (or equivalent) and states that g is continuous, with a reason |
| 1 | g(π/2) > 0 and g(π) < 0 with values shown, and conclusion naming the Intermediate Value Theorem |
| 1 | g(2π/3) = √3 − 2π/3 < 0 and the conclusion for (π/2, 2π/3) |
| 1 | Explains that the theorem proves existence only and cannot produce the value 1.9 |

Acceptable alternative for (a) and (b): use h(x) = x − 2 sin x, which has the opposite signs; the reasoning is the same.
</details>

## Question 7 (constructed response · stretch)

A function f is defined on [0, 3] by

- f(x) = (x² − 4)/(x − 2) for x ≠ 2
- f(2) = 1

(a) Find f(0) and f(3). A student says: "4 is between f(0) and f(3), so by the Intermediate Value Theorem f(c) = 4 for some c in (0, 3)." Explain why the theorem cannot be used here.
(b) Show that, in fact, f(x) = 4 has no solution in [0, 3].
(c) Show that f(x) = 3 does have a solution in (0, 3). Explain why this does not contradict your answer to (a).
(d) What value should f(2) have to make f continuous on [0, 3]?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(0) = (0 − 4)/(0 − 2) = 2 and f(3) = (9 − 4)/(3 − 2) = 5. For x ≠ 2, f(x) = (x − 2)(x + 2)/(x − 2) = x + 2, so lim (x → 2) f(x) = 4. But f(2) = 1 ≠ 4, so f is not continuous at x = 2. Since 2 is inside [0, 3], the condition "continuous on [0, 3]" fails and the theorem may not be used.

**(b)** For x ≠ 2, f(x) = x + 2 = 4 only when x = 2, which is excluded. At x = 2, f(2) = 1, not 4. So f(x) = 4 has no solution in [0, 3]. The value 4 is skipped, exactly at the break.

**(c)** For x ≠ 2, x + 2 = 3 gives x = 1, which is in (0, 3) and is not 2. So f(1) = 3. This does not contradict (a): when a condition fails, the theorem makes no promise either way. Some values between f(0) and f(3) are still reached; one (the value 4) is not.

**(d)** f(2) = 4, the value of the limit. Then f(x) = x + 2 on all of [0, 3], which is continuous.

| Point | What earns it |
|---|---|
| 1 | f(0) = 2, f(3) = 5, and identifies the discontinuity at x = 2 (limit 4, value 1) as the reason the theorem does not apply |
| 1 | Shows f(x) = 4 has no solution, considering both x ≠ 2 and x = 2 |
| 1 | Finds f(1) = 3 and explains "no guarantee" is not "no solution" |
| 1 | f(2) = 4, with a reason linked to the limit |
</details>

## How did you do?

- **Q1 or Q4 wrong:** reread "When the theorem does not apply" and Worked example 3 in the [study guide](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-study-guide/). Check continuity on the whole interval, including joins.
- **Q2 or Q5 wrong:** redo Worked example 2 (tables) and the "Counting" paragraph.
- **Q3 or Q6(c) wrong:** reread "The theorem, part by part": the conclusion is "at least one" and says nothing about where.
- **Q6(a) or Q5(a) incomplete:** use the three-part justification every time: continuity with a reason, the trapped value with numbers, the theorem named.
- **Q7 wrong:** compare with Figure 2 in the guide: a break can skip a value, but "not guaranteed" never means "impossible".

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-16-working-intermediate-value-theorem-ivt-checklist/).
