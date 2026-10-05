---
resourceId: "mb-ap-calcab-1.15-practice"
title: "Connecting Limits at Infinity and Horizontal Asymptotes: Practice Questions (Calculus AB 1.15)"
description: "Seven original Marlbridge practice questions on limits at infinity, end behaviour, horizontal asymptotes and growth rates, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.15"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Dividing by a power of x; √(x²) = |x|"
prerequisiteResources: ["mb-ap-calcab-1.15-study-guide"]
learningObjectives:
  - "Evaluate limits at infinity of rational, root and exponential expressions"
  - "Identify every horizontal asymptote of a graph from its limits at both ends"
  - "Interpret a limit at infinity in a context, with units"
  - "Use relative growth rates to evaluate or compare limits"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks for a numerical check."
related: ["mb-ap-calcab-1.15-study-guide", "mb-ap-calcab-1.15-revision-notes", "mb-ap-calcab-1.15-checklist"]
next: "mb-ap-calcab-1.15-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers unless stated. The training model in Question 6 is invented for practice. Notation: lim (x → ∞) f(x) means "the limit as x increases without bound of f(x)". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is lim (x → ∞) (4x³ − 2x + 7)/(9 − 2x³)?

- (A) −2
- (B) 7/9
- (C) 2
- (D) The limit does not exist because the expression grows without bound.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The highest power in the denominator is x³. Divide every term by x³: (4 − 2/x² + 7/x³)/(9/x³ − 2). As x → ∞, every term with x in the bottom approaches 0, so the limit is 4/(−2) = −2.

- (B) uses the constant terms, 7 and 9. For large x the constants matter least, not most.
- (C) ignores the minus sign on −2x³. The leading coefficient of the bottom is −2, not 2.
- (D) would be right if the top had a higher degree than the bottom. Here the degrees are equal, so the limit is finite.
</details>

## Question 2 (multiple choice · core)

What is lim (x → −∞) (6x − 1)/√(9x² + 2x)?

- (A) −2
- (B) 2/3
- (C) 2
- (D) The limit does not exist because √(9x² + 2x) is undefined for negative x.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For x < 0, √(9x² + 2x) = |x|·√(9 + 2/x) = −x·√(9 + 2/x). Divide top and bottom by −x: the top becomes −6 + 1/x and the bottom becomes √(9 + 2/x). As x → −∞, this approaches −6/√9 = −6/3 = −2. Sign check: the top is negative and the root is positive, so the answer must be negative.

- (B) forgets the square root and divides 6 by 9.
- (C) treats √(x²) as x instead of |x|. That gives the limit as x → ∞, not x → −∞.
- (D) is false: for x < −2/9, 9x² + 2x is positive, so the root is defined for all very negative x.
</details>

## Question 3 (multiple choice · core)

Which of the following limits is equal to 0?

- (A) lim (x → ∞) eˣ/x⁵⁰
- (B) lim (x → ∞) √x/ln x
- (C) lim (x → ∞) x³/2ˣ
- (D) lim (x → ∞) (x² + 1)/(3x² − x)

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** An exponential with base greater than 1 grows faster than any power of x, so 2ˣ dominates x³ and the ratio approaches 0.

- (A) has the exponential on top. Exponentials beat powers, even x⁵⁰, so this limit is ∞.
- (B) has the power on top. √x grows faster than ln x, so this limit is ∞.
- (D) has equal degrees, so the limit is the ratio of leading coefficients, 1/3, not 0.
</details>

## Question 4 (multiple choice · core)

A function h is defined for all real x. You are told that lim (x → ∞) h(x) = −1 and lim (x → −∞) h(x) = ∞. Which statement must be true?

- (A) The graph of h has exactly one horizontal asymptote, y = −1.
- (B) The graph of h has two horizontal asymptotes, y = −1 and y = ∞.
- (C) The graph of h never crosses the line y = −1.
- (D) h(x) > −1 for every real x.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The finite limit at the right end gives the asymptote y = −1. At the left end the outputs grow without bound, so there is no horizontal asymptote there.

- (B) treats ∞ as a number. A horizontal asymptote must be a line y = L with L a real number.
- (C) is not guaranteed. A graph may cross a horizontal asymptote, even many times.
- (D) is not guaranteed. h could approach −1 from below on the right, so some values could be less than −1.
</details>

## Question 5 (constructed response · core)

Let f(x) = (ax² + 3x − 1)/(2x² − 8), where a is a constant.

(a) Find the value of a for which lim (x → ∞) f(x) = −3. Show your method.
(b) Using this value of a, find lim (x → −∞) f(x) and state every horizontal asymptote of the graph of f.
(c) Using this value of a, find the x-coordinate of every point where the graph of f meets its horizontal asymptote.
(d) A student says, "a graph can never cross its horizontal asymptote." Use your answer to (c) to respond.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Divide every term by x²: f(x) = (a + 3/x − 1/x²)/(2 − 8/x²). As x → ∞ this approaches a/2. Set a/2 = −3, so **a = −6**.

**(b)** With a = −6, the same division works as x → −∞, because 3/x, 1/x² and 8/x² still approach 0. So lim (x → −∞) f(x) = −6/2 = **−3**. The only horizontal asymptote is **y = −3**.

**(c)** Solve (−6x² + 3x − 1)/(2x² − 8) = −3. Multiply by 2x² − 8: −6x² + 3x − 1 = −6x² + 24. The x² terms cancel: 3x − 1 = 24, so **x = 25/3**. The denominator there is 2(625/9) − 8 = 1178/9, not 0, so the point (25/3, −3) is on the graph.

**(d)** The graph passes through (25/3, −3), which lies on y = −3. So this graph does cross its horizontal asymptote. The student is wrong: an asymptote only describes what happens as x → ±∞.

| Point | What earns it |
|---|---|
| 1 | Divides by x² (or argues from equal degrees with a stated reason) and obtains a = −6 |
| 1 | Limit −3 as x → −∞ **and** states that y = −3 is the only horizontal asymptote |
| 1 | Sets f(x) = −3, solves to x = 25/3 and checks the denominator is nonzero |
| 1 | Uses the point (25/3, −3) to explain that a graph can cross its horizontal asymptote |

Acceptable alternative for (a): quoting "equal degrees, so the limit is the ratio of leading coefficients" earns the point only if a/2 is written down.
</details>

## Question 6 (constructed response · core)

A warehouse trains new staff to pack parcels. For one invented trainee, the packing rate after t hours of training is modelled by

**R(t) = (45t + 30)/(t + 5)** parcels per hour, for t ≥ 0.

(a) Find lim (t → ∞) R(t). Show your algebra.
(b) Interpret your answer to (a) in context, with units.
(c) Find the time when the packing rate is 40 parcels per hour.
(d) Show that R(t) < 45 for every t ≥ 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Divide top and bottom by t: R(t) = (45 + 30/t)/(1 + 5/t). As t → ∞, 30/t → 0 and 5/t → 0, so lim (t → ∞) R(t) = 45/1 = **45**.

**(b)** As the trainee's training time grows without bound, the model's packing rate gets closer and closer to 45 parcels per hour. The line R = 45 is a horizontal asymptote of the graph of R. (At the start the rate is R(0) = 6 parcels per hour.)

**(c)** (45t + 30)/(t + 5) = 40 gives 45t + 30 = 40t + 200, so 5t = 170 and **t = 34 hours**.

**(d)** 45 − R(t) = (45(t + 5) − (45t + 30))/(t + 5) = 195/(t + 5). For t ≥ 0 the top and bottom are both positive, so 45 − R(t) > 0, which means R(t) < 45. The rate approaches 45 parcels per hour but never reaches it.

| Point | What earns it |
|---|---|
| 1 | Correct algebra (dividing by t or an equivalent method) and the limit 45 |
| 1 | Interpretation in context: the packing rate approaches 45 parcels per hour as training time increases |
| 1 | t = 34 hours, with units |
| 1 | A valid argument that R(t) < 45 for all t ≥ 0 (for example, 45 − R(t) = 195/(t + 5) > 0) |

Acceptable alternative for (d): showing that R(t) = 45 leads to 30 = 225, which is impossible, and adding that R(0) = 6 < 45 and R is continuous for t ≥ 0. A value check such as R(100) ≈ 43.1 alone does not earn the point.
</details>

## Question 7 (constructed response · stretch)

Let k(x) = (3eˣ + x²)/(eˣ + 5).

(a) Find lim (x → ∞) k(x). Name the fact about growth rates that you use.
(b) Find lim (x → −∞) k(x).
(c) State every horizontal asymptote of the graph of k.
(d) Find every x where the graph of k meets the asymptote in (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** As x → ∞, eˣ is the fastest-growing term in the denominator. Divide every term by eˣ: k(x) = (3 + x²/eˣ)/(1 + 5/eˣ). Exponentials grow faster than powers, so x²/eˣ → 0. Also 5/eˣ → 0. So lim (x → ∞) k(x) = (3 + 0)/(1 + 0) = **3**.

**(b)** As x → −∞, eˣ → 0. The top behaves like x², which grows without bound, and the bottom approaches 5. So lim (x → −∞) k(x) = **∞**.

**(c)** Only **y = 3** (from the right end). The left end has an infinite limit, so it gives no horizontal asymptote.

**(d)** Solve (3eˣ + x²)/(eˣ + 5) = 3. The denominator is always positive, so multiply: 3eˣ + x² = 3eˣ + 15. Then x² = 15, so **x = √15 or x = −√15**. The graph meets y = 3 twice.

| Point | What earns it |
|---|---|
| 1 | Divides by eˣ and uses "exponentials grow faster than powers" to get x²/eˣ → 0; limit 3 |
| 1 | Limit ∞ as x → −∞, with a reason (eˣ → 0 while x² grows without bound) |
| 1 | States y = 3 as the only horizontal asymptote |
| 1 | x = ±√15 (both values) |

A numerical check is a useful extra: k(10) ≈ 3.004, close to 3. On its own it earns no mark for (a).
</details>

## How did you do?

- **Q1 or Q5 wrong:** revisit "Rational functions: divide by the highest power" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/).
- **Q2 wrong:** redo Worked example 2 and remember √(x²) = |x|.
- **Q3 or Q7 wrong:** see "Comparing how fast functions grow" and Worked example 3.
- **Q4, Q5(d) or Q6 wrong:** reread "End behaviour and horizontal asymptotes" and Figure 1: an asymptote describes the ends of a graph, and the graph may cross it.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-checklist/).
