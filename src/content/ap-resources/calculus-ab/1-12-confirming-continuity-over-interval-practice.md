---
resourceId: "mb-ap-calcab-1.12-practice"
title: "Confirming Continuity over an Interval: Practice Questions (Calculus AB 1.12)"
description: "Seven original Marlbridge practice questions on intervals of continuity, function families, piecewise boundaries and closed-interval endpoints, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.12"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "The three-part definition of continuity at a point"
  - "Domains of root, logarithmic and trigonometric functions"
prerequisiteResources: ["mb-ap-calcab-1.12-study-guide"]
learningObjectives:
  - "Find the intervals on which a function is continuous and justify them with family facts"
  - "Test the boundary points of a piecewise function using one-sided limits"
  - "Decide whether a function is continuous on a given closed interval, including at its endpoints"
  - "Explain why continuity on a domain does not guarantee continuity on every interval"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Use π ≈ 3.14 where you need to place a multiple of π. Give intervals in exact form."
related: ["mb-ap-calcab-1.12-study-guide", "mb-ap-calcab-1.12-revision-notes", "mb-ap-calcab-1.12-checklist"]
next: "mb-ap-calcab-1.12-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, angles in radians, π ≈ 3.14 where needed, and "continuous on [a, b]" means continuous on (a, b), continuous from the right at a and continuous from the left at b. Notation: lim (x → c⁻) and lim (x → c⁺) are the limits from the left and from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Which of the following functions is continuous for all real numbers x?

- (A) f(x) = (x + 3)/(x² + 4)
- (B) f(x) = ln(x²)
- (C) f(x) = tan x
- (D) f(x) = 1/(eˣ − 1)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** It is a rational function, so it is continuous wherever its denominator is not 0. But x² + 4 ≥ 4 for every real x, so the denominator is never 0. The domain is all real numbers, and so is the set where f is continuous.

- (B) ln(x²) needs x² > 0, so it is undefined at x = 0. It is continuous on (−∞, 0) and (0, ∞), not on all real numbers.
- (C) tan x is undefined where cos x = 0, at odd multiples of π/2 such as π/2 ≈ 1.57.
- (D) eˣ − 1 = 0 when eˣ = 1, that is, at x = 0. The function is undefined there.
</details>

## Question 2 (multiple choice · core)

Let g(x) = ln(5 − x)/(x + 2). On which of the following intervals is g continuous?

- (A) (−∞, 5)
- (B) [−2, 5)
- (C) (−2, 5)
- (D) (−2, 5]

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The logarithm needs 5 − x > 0, so x < 5. The denominator needs x ≠ −2. Both parts belong to families that are continuous on their domains, so g is continuous on (−∞, −2) and (−2, 5). The interval (−2, 5) contains no excluded value.

- (A) contains x = −2, where the denominator is 0.
- (B) includes x = −2 with a square bracket, but g(−2) does not exist.
- (D) includes x = 5, where ln(5 − 5) = ln 0 is undefined.
</details>

## Question 3 (multiple choice · core)

A function f is defined by

- f(x) = 2ˣ for x < 1
- f(x) = x + 1 for 1 ≤ x ≤ 3
- f(x) = 8 − x for x > 3

Which statement is true?

- (A) f is continuous on (−∞, ∞).
- (B) f is continuous on (−∞, 3] but not on (−∞, ∞).
- (C) f is not continuous at x = 1.
- (D) f is continuous on [3, ∞).

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Each piece is an exponential or polynomial function, so each is continuous on its own open interval.

At x = 1: left limit 2¹ = 2; right limit 1 + 1 = 2; f(1) = 2. All three agree, so f is continuous at 1.

At x = 3: left limit 3 + 1 = 4; right limit 8 − 3 = 5; f(3) = 4. The two-sided limit does not exist, so f is not continuous at 3. But the left limit equals f(3), so f is continuous from the left at 3. That makes f continuous on (−∞, 3].

- (A) ignores the jump at x = 3.
- (C) checks x = 1 wrongly. 2ˣ and x + 1 both give 2 at x = 1, so the pieces meet.
- (D) needs continuity from the right at 3, but lim (x → 3⁺) f(x) = 5 ≠ 4 = f(3).
</details>

## Question 4 (multiple choice · core)

Let k(x) = (x² + 1)/cos x. On which of the following closed intervals is k continuous?

- (A) [0, 2]
- (B) [1, 3]
- (C) [2, 4]
- (D) [4, 5]

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The top is a polynomial and cos x is continuous everywhere, so k is continuous wherever cos x ≠ 0. cos x = 0 at odd multiples of π/2. Using π ≈ 3.14, the positive ones are π/2 ≈ 1.57, 3π/2 ≈ 4.71, …. The interval [2, 4] contains neither, so k is continuous at every point of [2, 4].

- (A) contains π/2 ≈ 1.57.
- (B) also contains π/2 ≈ 1.57. A common slip is to compare with π ≈ 3.14 instead of π/2.
- (D) contains 3π/2 ≈ 4.71.
</details>

## Question 5 (constructed response · core)

Let f(x) = √(6 − 2x)/(x² + x − 2).

(a) Find the domain of f.
(b) State the largest intervals on which f is continuous. Justify your answer, including the bracket you use at x = 3.
(c) Is f continuous on [−3, 0]? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The square root needs 6 − 2x ≥ 0, so x ≤ 3. The denominator factors as (x − 1)(x + 2), which is 0 at x = 1 and x = −2. Both are less than 3, so both are removed. Domain: (−∞, −2) ∪ (−2, 1) ∪ (1, 3].

**(b)** The top is a square root of a polynomial and the bottom is a polynomial. These families are continuous on their domains, and a quotient is continuous wherever the denominator is not 0. So f is continuous at every point of its domain.

At x = 3: f(3) = √0/(9 + 3 − 2) = 0/10 = 0. As x → 3⁻, the top → 0 and the bottom → 10, so lim (x → 3⁻) f(x) = 0 = f(3). f is continuous from the left at 3, so the bracket at 3 is square.

f is continuous on **(−∞, −2), (−2, 1) and (1, 3]**.

**(c)** No. The interval [−3, 0] contains x = −2, where f is not defined. (f is unbounded near −2, because the top is √10 ≠ 0 there while the bottom → 0.)

| Point | What earns it |
|---|---|
| 1 | Uses 6 − 2x ≥ 0 to get x ≤ 3 |
| 1 | Factors the denominator and excludes x = 1 and x = −2 |
| 1 | States the three intervals, citing continuity of the families on their domains |
| 1 | Justifies the square bracket at 3: f(3) = 0 and the left-hand limit is 0 |
| 1 | (c) No, because −2 lies in [−3, 0] and f(−2) is undefined |

A table of values alone earns no mark in (b); you must refer to the family facts and to the endpoint check.
</details>

## Question 6 (constructed response · core)

A function g is defined by

- g(x) = 4 − x² for x < 0
- g(x) = 4 cos x for 0 ≤ x < π
- g(x) = x − π for x ≥ π

(a) Explain why g is continuous on each of the open intervals (−∞, 0), (0, π) and (π, ∞).
(b) Use the definition of continuity to decide whether g is continuous at x = 0.
(c) Use the definition of continuity to decide whether g is continuous at x = π.
(d) State the largest intervals on which g is continuous.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** On (−∞, 0), g(x) = 4 − x², a polynomial, which is continuous everywhere. On (0, π), g(x) = 4 cos x, a trigonometric function continuous for all real x. On (π, ∞), g(x) = x − π, a polynomial. Each formula is continuous on the interval where it is used.

**(b)** g(0) = 4 cos 0 = 4. lim (x → 0⁻) g(x) = 4 − 0 = 4. lim (x → 0⁺) g(x) = 4 cos 0 = 4. The one-sided limits agree, so lim (x → 0) g(x) = 4, which equals g(0). **g is continuous at 0.**

**(c)** g(π) = π − π = 0. lim (x → π⁻) g(x) = 4 cos π = −4. lim (x → π⁺) g(x) = π − π = 0. Since −4 ≠ 0, lim (x → π) g(x) does not exist. **g is not continuous at π** (a jump).

**(d)** The right-hand limit at π equals g(π), so g is continuous from the right at π. g is continuous on **(−∞, π)** and **[π, ∞)**.

| Point | What earns it |
|---|---|
| 1 | (a) Names the family of each piece (polynomial, trigonometric) and states that each is continuous on its interval |
| 1 | (b) Finds g(0) = 4 and both one-sided limits equal to 4 |
| 1 | (b) Concludes continuity at 0, referring to all three conditions |
| 1 | (c) Finds left limit −4, right limit 0 and concludes the limit does not exist, so g is not continuous at π |
| 1 | (d) (−∞, π) and [π, ∞), with the square bracket justified by right-continuity |

Writing (−∞, π] in (d) loses the last point: the left-hand limit at π is −4, not g(π) = 0.
</details>

## Question 7 (constructed response · stretch)

(a) A student writes: "s(x) = 1/(x − 2) is a rational function, and rational functions are continuous, so s is continuous on [0, 4]." Explain the error.

(b) For each function, decide whether it is continuous on the closed interval [−1, 1]. Justify each answer.

- p(x) = ∛x
- q(x) = √(1 − x²)
- r(x) = 1/(x² − 1)

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Rational functions are continuous **at every point of their domains**, not at every real number. s is undefined at x = 2, and 2 lies in [0, 4]. So s is not continuous on [0, 4]. It is continuous on [0, 2) and on (2, 4].

**(b)**

- **p(x) = ∛x.** The cube root is a power function defined for every real number, so it is continuous on (−∞, ∞). In particular it is continuous on [−1, 1]. **Yes.**
- **q(x) = √(1 − x²).** It needs 1 − x² ≥ 0, so its domain is exactly [−1, 1]. It is continuous on (−1, 1) as a root of a polynomial. At the endpoints: q(1) = 0 and lim (x → 1⁻) q(x) = 0; q(−1) = 0 and lim (x → −1⁺) q(x) = 0. The one-sided conditions hold. **Yes**, even though no two-sided limit exists at ±1.
- **r(x) = 1/(x² − 1).** The denominator is 0 at x = 1 and x = −1, so r(1) and r(−1) do not exist. **No.** (r is continuous on the open interval (−1, 1), where for example r(0) = −1.)

| Point | What earns it |
|---|---|
| 1 | (a) Identifies that continuity holds only on the domain, and that 2 is in [0, 4] where s is undefined |
| 1 | (b) p: yes, cube root defined and continuous for all real x |
| 1 | (b) q: identifies domain [−1, 1] and continuity inside |
| 1 | (b) q: checks the one-sided limits at both endpoints and concludes yes |
| 1 | (b) r: no, because r is undefined at the endpoints ±1 |

Acceptable alternative for q: describe the graph as the upper half of the circle x² + y² = 1, which can be traced from (−1, 0) to (1, 0) without lifting the pen, **and** state the endpoint values and one-sided limits.
</details>

## How did you do?

- **Q1 or Q2 wrong:** revisit "The function families and where they are continuous" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/).
- **Q3 or Q6 wrong:** redo Worked example 2 and Figure 2; test the left limit, right limit and value at every boundary.
- **Q4 wrong:** see Worked example 3; list every zero of the denominator, then compare with the interval.
- **Q5 or Q7 wrong:** reread "Open and closed intervals": one-sided limits at the endpoints, and continuous on a domain is not continuous on every interval.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-checklist/).
