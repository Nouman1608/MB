---
resourceId: "mb-ap-calcab-1.14-practice"
title: "Connecting Infinite Limits and Vertical Asymptotes: Practice Questions (Calculus AB 1.14)"
description: "Seven original Marlbridge practice questions on one-sided infinite limits, sign checks, holes versus vertical asymptotes and limit-based justifications, with full solutions."
course: "calculus-ab"
unit: 1
topics: ["1.14"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limits and factoring rational expressions"
prerequisiteResources: ["mb-ap-calcab-1.14-study-guide"]
learningObjectives:
  - "Evaluate one-sided and two-sided infinite limits using a sign check"
  - "Distinguish a hole from a vertical asymptote in a rational function"
  - "Justify a vertical asymptote with a one-sided infinite limit"
  - "Interpret unbounded behaviour shown in a table of values"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers and state each infinite limit as +∞ or −∞ with its side."
related: ["mb-ap-calcab-1.14-study-guide", "mb-ap-calcab-1.14-revision-notes", "mb-ap-calcab-1.14-checklist"]
next: "mb-ap-calcab-1.14-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, exact answers, and ln means the natural logarithm. Notation: lim (x → a) f(x) means "the limit as x approaches a of f(x)"; x → a⁻ means from the left and x → a⁺ means from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is lim (x → 2⁻) 3x/(x − 2)?

- (A) −∞
- (B) 0
- (C) 3
- (D) +∞

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Substitution gives 6/0: nonzero over 0, so the expression is unbounded near 2. The top tends to 6, which is positive. For x slightly less than 2, x − 2 is a small negative number. Positive ÷ small negative = large negative. So the limit is −∞.

- (B) treats a nonzero number over 0 as 0. Dividing by something tiny makes the result huge, not 0.
- (C) "cancels" x from 3x and x − 2. The x in x − 2 is part of a sum, not a factor, so it cannot cancel.
- (D) is the right-hand limit. It ignores that x − 2 is negative when x < 2.
</details>

## Question 2 (multiple choice · core)

Which function has a vertical asymptote at x = 1?

- (A) f(x) = (x² − 1)/(x − 1)
- (B) f(x) = (x − 1)/(x² + 1)
- (C) f(x) = (x + 2)/(x² − 1)
- (D) f(x) = ln x

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At x = 1, (x + 2)/(x² − 1) gives 3/0. Nothing cancels, because x + 2 is not 0 at x = 1. The bottom factors as (x − 1)(x + 1), and for x slightly more than 1 it is a small positive number, so lim (x → 1⁺) f(x) = +∞. (From the left it is −∞.) One infinite one-sided limit is enough, so x = 1 is a vertical asymptote. This function also has a vertical asymptote at x = −1.

- (A) gives 0/0 at x = 1. The factor (x − 1) cancels to leave x + 1, so the limit is 2 and the graph has a **hole** at (1, 2), not an asymptote.
- (B) has a bottom, x² + 1, that is never 0. At x = 1 the function simply equals 0.
- (D) has ln 1 = 0, so the graph crosses the x-axis at x = 1. Its vertical asymptote is at x = 0, where lim (x → 0⁺) ln x = −∞.
</details>

## Question 3 (multiple choice · core)

Let f(x) = (x − 5)/(x − 3)². Which statement correctly describes f near x = 3?

- (A) lim (x → 3) f(x) = +∞
- (B) lim (x → 3) f(x) = −∞
- (C) lim (x → 3⁻) f(x) = −∞ and lim (x → 3⁺) f(x) = +∞
- (D) The graph has a hole at x = 3, so lim (x → 3) f(x) is a finite number.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The top tends to 3 − 5 = −2, which is negative. The bottom (x − 3)² is a square, so it is a small **positive** number on both sides of 3. Negative ÷ small positive = large negative, on both sides. The one-sided limits agree, so lim (x → 3) f(x) = −∞.

- (A) gets the size right but ignores the negative top.
- (C) is the pattern for an odd power such as (x − 3). A squared factor does not change sign at 3.
- (D) assumes every zero of the bottom gives a hole. A hole needs 0/0 with a factor that cancels; here the top is −2, not 0.
</details>

## Question 4 (multiple choice · core)

What is lim (x → 1⁺) x/ln x?

- (A) −∞
- (B) 0
- (C) 1
- (D) +∞

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** The top tends to 1. The bottom tends to ln 1 = 0. For x slightly more than 1, ln x is a small positive number. Positive ÷ small positive = large positive, so the limit is +∞. (This shows x = 1 is a vertical asymptote of y = x/ln x.)

- (A) uses the wrong sign for ln x. ln x < 0 only for 0 < x < 1; to the right of 1 it is positive.
- (B) treats 1/0 as 0.
- (C) uses ln 1 = 1. In fact ln 1 = 0, because e⁰ = 1.
</details>

## Question 5 (table · core)

A function g is defined for all x ≠ 5. Some values are shown.

| x | 4.9 | 4.99 | 4.999 | 5.001 | 5.01 | 5.1 |
|---|---|---|---|---|---|---|
| g(x) | −29 | −299 | −2999 | 3001 | 301 | 31 |

(a) Use the table to describe lim (x → 5⁻) g(x) and lim (x → 5⁺) g(x).
(b) Based on the table, what does the line x = 5 appear to be? Explain using limits.
(c) A student writes "lim (x → 5) g(x) = ∞". Explain why this is not correct.
(d) You are now told g(x) = (x − 2)/(x − 5). Confirm your answer to (a) without a table.

<details>
<summary>Worked solution</summary>

**(a)** From the left the values are negative and grow in size by about 10 times each step closer to 5, so they appear unbounded: lim (x → 5⁻) g(x) = −∞. From the right they are positive and grow the same way: lim (x → 5⁺) g(x) = +∞.

**(b)** The line x = 5 appears to be a **vertical asymptote**, because at least one one-sided limit at 5 (in fact both) appears infinite.

**(c)** The two sides behave differently: −∞ from the left, +∞ from the right. A two-sided statement "= ∞" would claim the values are large and positive on **both** sides. The correct description is two separate one-sided limits.

**(d)** At x = 5 the top is 5 − 2 = 3, which is positive, and the bottom is 0: nonzero over 0. For x > 5, x − 5 > 0, so g(x) → +∞. For x < 5, x − 5 < 0, so g(x) → −∞. This matches (a). The table only **suggested** the behaviour; the sign check confirms it.

Suggested mark points (3): 1 for both one-sided limits with correct signs; 1 for naming a vertical asymptote with a limit as the reason; 1 for (c) and (d) together: the sides disagree, and the sign check of 3/(small positive or negative) is shown.
</details>

## Question 6 (constructed response · core)

Let f(x) = (2x² − 2x − 4)/(x² − 4).

(a) Find the values of x where f is not defined. For each, decide whether the graph of f has a hole or a vertical asymptote there. Show your algebra.
(b) Find lim (x → −2⁻) f(x) and lim (x → −2⁺) f(x), with reasons.
(c) Write a sentence that uses a limit to justify that the graph of f has a vertical asymptote.
(d) Explain why the discontinuity at one of the points in (a) can be removed by defining a single value, but the other cannot.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The bottom is x² − 4 = (x − 2)(x + 2), so f is undefined at x = 2 and x = −2. The top is 2x² − 2x − 4 = 2(x² − x − 2) = 2(x − 2)(x + 1). Cancel (x − 2), valid for x ≠ 2:

f(x) = 2(x + 1)/(x + 2) for x ≠ 2.

- At x = 2: the simplified form gives 2(3)/4 = 3/2, a finite limit. So there is a **hole** at (2, 3/2).
- At x = −2: the simplified form gives 2(−1)/0 = −2/0, nonzero over 0. So there is a **vertical asymptote** at x = −2.

**(b)** Near x = −2 the top 2(x + 1) is close to −2, which is negative.

- x → −2⁺: x + 2 is small and positive. Negative ÷ small positive → **lim (x → −2⁺) f(x) = −∞**.
- x → −2⁻: x + 2 is small and negative. Negative ÷ small negative → **lim (x → −2⁻) f(x) = +∞**.

**(c)** Because lim (x → −2⁺) f(x) = −∞, the line x = −2 is a vertical asymptote of the graph of f. (Using the left-hand limit, +∞, is equally valid.)

**(d)** At x = 2 the limit exists and equals 3/2, so defining f(2) = 3/2 fills the hole (Topic 1.13). At x = −2 the function is unbounded, so the limit does not exist as a number. No single value of f(−2) can make the limit equal the function value, so that discontinuity cannot be removed.

| Point | What earns it |
|---|---|
| 1 | Factors top and bottom, cancels (x − 2), and identifies the hole at x = 2 (height 3/2) |
| 1 | Identifies x = −2 as the vertical asymptote because the simplified form gives nonzero/0 there |
| 1 | Both one-sided limits at −2 with correct signs, supported by a sign argument |
| 1 | A limit-based justification sentence for x = −2 **and** the removable vs non-removable explanation in (d) |

Acceptable alternative for (b): a short sign chart for 2(x + 1)/(x + 2) on each side of −2. Values such as f(−1.99) = −198 and f(−2.01) = 202 can support, but on their own do not earn the point.
</details>

## Question 7 (constructed response · stretch)

Let f(x) = (x² + kx + 6)/(x − 2), where k is a constant.

(a) Find the value of k for which the graph of f has **no** vertical asymptote at x = 2. For this value of k, find lim (x → 2) f(x).
(b) Let k = 0. Find lim (x → 2⁻) f(x) and lim (x → 2⁺) f(x).
(c) Find all values of k for which lim (x → 2⁺) f(x) = −∞. Explain your reasoning.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The bottom is 0 at x = 2. For the factor (x − 2) to cancel, the top must also be 0 there (factor theorem):

2² + 2k + 6 = 0, so 10 + 2k = 0 and **k = −5**.

Then x² − 5x + 6 = (x − 2)(x − 3), so f(x) = x − 3 for x ≠ 2, and **lim (x → 2) f(x) = 2 − 3 = −1**. The graph has a hole at (2, −1), not an asymptote.

**(b)** With k = 0, the top tends to 4 + 6 = 10, which is positive. For x < 2, x − 2 < 0, so **lim (x → 2⁻) f(x) = −∞**. For x > 2, x − 2 > 0, so **lim (x → 2⁺) f(x) = +∞**.

**(c)** For x → 2⁺ the bottom is small and positive. To get −∞, the top must tend to a **negative** number: 10 + 2k < 0, so **k < −5**.

Check: k = −5 gives a hole (finite limit −1), not −∞. For k > −5 the top tends to a positive number and the right-hand limit is +∞. For example, k = −7 gives top → −4 and right-hand limit −∞, as predicted.

| Point | What earns it |
|---|---|
| 1 | Sets the top equal to 0 at x = 2 and finds k = −5 |
| 1 | Factors, cancels, and gives lim (x → 2) f(x) = −1 |
| 1 | Both one-sided limits for k = 0 with a sign argument |
| 1 | k < −5, with the reason that the top must tend to a negative number while the bottom is small and positive |

Acceptable alternative for (a): polynomial division of x² + kx + 6 by x − 2 gives remainder 10 + 2k; setting the remainder to 0 gives the same k. An answer of k ≤ −5 in (c) loses the last point, because k = −5 gives a finite limit.
</details>

## How did you do?

- **Q1, Q4 or Q5 wrong:** redo "Finding one-sided infinite limits: the sign check" in the [study guide](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-study-guide/).
- **Q2 or Q6(a) wrong:** reread "Holes versus asymptotes" and Worked example 1. Always cancel common factors before deciding.
- **Q3 wrong:** see Worked example 2 on even powers.
- **Q5(c), Q6(c) or Q6(d) wrong:** reread "Vertical asymptotes, defined with limits": the justification must quote a one-sided infinite limit.
- **Q7 wrong:** combine Worked example 1 with the sign check, and remember the factor theorem from Topic 1.6.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-14-connecting-infinite-limits-vertical-asymptotes-checklist/).
