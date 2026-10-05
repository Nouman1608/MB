---
resourceId: "mb-ap-calcab-2.1-practice"
title: "Defining Average and Instantaneous Rates of Change at a Point: Practice Questions (Calculus AB 2.1)"
description: "Seven original Marlbridge practice questions on difference quotients and the derivative at a point as a limit, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Limits of 0/0 forms by factoring, conjugates and combining fractions (Topic 1.6)"
prerequisiteResources: ["mb-ap-calcab-2.1-study-guide"]
learningObjectives:
  - "Evaluate average rates of change with either difference quotient"
  - "Find f′(a) exactly from the limit definition"
  - "Recognise a limit as the derivative of a given function at a given point"
  - "Interpret an instantaneous rate of change in context, with units"
  - "Decide when the derivative at a point does not exist"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. Give exact answers (fractions, not decimals) unless a question asks otherwise."
related: ["mb-ap-calcab-2.1-study-guide", "mb-ap-calcab-2.1-revision-notes", "mb-ap-calcab-2.1-checklist"]
next: "mb-ap-calcab-2.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator** and exact answers unless stated. All contexts and data are invented. Notation: lim (h → 0) g(h) means "the limit as h approaches 0 of g(h)", and f′(a) is the derivative of f at a. Do not use derivative rules (Topic 2.5 onwards): use the definition. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

Let f(x) = 1/(x + 1). For h ≠ 0, which expression equals the difference quotient (f(2 + h) − f(2))/h?

- (A) −1/(3(3 + h))
- (B) 1/(3(3 + h))
- (C) −h/(3(3 + h))
- (D) −1/9

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f(2 + h) = 1/(3 + h) and f(2) = 1/3. Combine: 1/(3 + h) − 1/3 = (3 − (3 + h))/(3(3 + h)) = −h/(3(3 + h)). Divide by h, valid for h ≠ 0: −1/(3(3 + h)).

- (B) subtracts in the wrong order, (3 + h) − 3 on top, which flips the sign.
- (C) is only the top, f(2 + h) − f(2). It forgets to divide by h.
- (D) is the **limit** as h → 0, which is f′(2). The question asks for the quotient itself, which still depends on h.
</details>

## Question 2 (multiple choice · foundation)

What does lim (h → 0) ((2 + h)⁵ − 32)/h represent?

- (A) f′(2), where f(x) = x⁵
- (B) f′(32), where f(x) = x⁵
- (C) f(2), where f(x) = x⁵
- (D) The average rate of change of x⁵ over the interval [2, 2 + h]

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Match the template lim (h → 0) (f(a + h) − f(a))/h. The f(a + h) part is (2 + h)⁵, so f(x) = x⁵ and a = 2. Check: f(2) = 32, which is the number subtracted. So the limit is f′(2). (Its value is 80; you will be able to check this quickly with the power rule in Topic 2.5.)

- (B) uses the output 32 as the point. The point is the input a = 2; 32 is f(a).
- (C) confuses the derivative with the function value. f(2) = 32, not a limit of a quotient.
- (D) describes the quotient **without** the limit. The limit is the instantaneous rate, not an average.
</details>

## Question 3 (multiple choice · core)

Let f(x) = 1/x. Which of the following is equal to f′(2)?

- (A) lim (h → 0) (1/(2 + h) − 1/2)/h
- (B) lim (h → 0) (1/(2 + h) − 1/2)/(2 + h)
- (C) lim (x → 2) (1/x − 2)/(x − 2)
- (D) lim (h → 0) (1/h − 1/2)/h

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** This is the h-form with a = 2: f(2 + h) = 1/(2 + h) and f(2) = 1/2, divided by the change in input, h. (Its value is −1/4.)

- (B) divides by the new input 2 + h instead of the change in input h. Its limit is 0, not f′(2).
- (C) subtracts the point 2 instead of the function value f(2) = 1/2. The top approaches −3/2, not 0, so the quotient is unbounded.
- (D) uses f(h) = 1/h instead of f(2 + h).
</details>

## Question 4 (multiple choice · core)

A fictional seabird colony has N(t) birds, t years after the start of 2020. Researchers find that lim (h → 0) (N(6 + h) − N(6))/h = −120. Which statement is the correct interpretation?

- (A) At the start of 2026 the colony had 120 fewer birds than at the start of 2020.
- (B) At t = 6, the number of birds is decreasing at a rate of 120 birds per year.
- (C) At t = 6, the colony has −120 birds.
- (D) From t = 0 to t = 6, the colony lost an average of 120 birds per year.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The limit is N′(6), the instantaneous rate of change at t = 6. Its units are birds per year, and the negative sign means the number is falling.

- (A) describes the total change N(6) − N(0), not a rate.
- (C) treats N′(6) as the value N(6). A count of birds cannot be negative anyway.
- (D) describes the average rate over [0, 6], (N(6) − N(0))/6. The limit is a rate at one instant.
</details>

## Question 5 (constructed response · core)

Let f(x) = 3x² − x.

(a) Find the average rate of change of f over [−1, 1].
(b) Show that, for h ≠ 0, (f(−1 + h) − f(−1))/h = 3h − 7.
(c) Hence find f′(−1).
(d) Find f′(−1) again using the x-form of the definition, and confirm the two answers agree.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f(−1) = 3 + 1 = 4 and f(1) = 3 − 1 = 2. Average rate = (2 − 4)/(1 − (−1)) = −2/2 = **−1**.

**(b)** f(−1 + h) = 3(1 − 2h + h²) − (−1 + h) = 3 − 6h + 3h² + 1 − h = 4 − 7h + 3h². Subtract f(−1) = 4 to get −7h + 3h². Divide by h (h ≠ 0): **3h − 7**.

**(c)** f′(−1) = lim (h → 0) (3h − 7) = **−7**.

**(d)** f′(−1) = lim (x → −1) (3x² − x − 4)/(x + 1). Substitution gives 0/0. Factor: 3x² − x − 4 = (3x − 4)(x + 1). Cancel (x + 1), valid for x ≠ −1, to get 3x − 4. As x → −1 this approaches −3 − 4 = **−7**. The answers agree.

| Point | What earns it |
|---|---|
| 1 | Average rate −1, with f(−1) and f(1) shown |
| 1 | Correct expansion of f(−1 + h) and simplification to 3h − 7, noting h ≠ 0 |
| 1 | f′(−1) = −7 from the limit, with "lim" kept until the substitution |
| 1 | x-form set up with (x + 1) in the bottom, factored and cancelled to give −7 |

Acceptable alternative for (d): polynomial division of 3x² − x − 4 by x + 1 gives 3x − 4 with remainder 0.
</details>

## Question 6 (constructed response · core)

In a fictional workshop test, the temperature of a metal block is T(t) = 20 + 60/(t + 1) degrees Celsius, t minutes after it is taken out of an oven.

(a) Find the average rate of change of T over [1, 4]. Include units.
(b) Use the definition of the derivative to find T′(2).
(c) Interpret T′(2) in context.
(d) Explain why your answers to (a) and (b) are different, even though t = 2 lies in [1, 4].

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** T(1) = 20 + 30 = 50 and T(4) = 20 + 12 = 32. Average rate = (32 − 50)/(4 − 1) = −18/3 = **−6 °C per minute**.

**(b)** T(2) = 20 + 20 = 40. For h ≠ 0,

(T(2 + h) − T(2))/h = (20 + 60/(3 + h) − 40)/h = (60/(3 + h) − 20)/h.

Combine the top: 60/(3 + h) − 20 = (60 − 60 − 20h)/(3 + h) = −20h/(3 + h). Divide by h: −20/(3 + h).

T′(2) = lim (h → 0) −20/(3 + h) = **−20/3 °C per minute** (about −6.67).

**(c)** Two minutes after leaving the oven, the block's temperature is falling at 20/3 °C (about 6.7 °C) per minute.

**(d)** The rate of cooling is not constant. The block cools faster early on and more slowly later (the definition gives T′(1) = −15 and T′(4) = −2.4). The average over [1, 4] mixes all these rates into one number, so it need not equal the rate at any particular instant you choose, such as t = 2.

| Point | What earns it |
|---|---|
| 1 | Average rate −6 with units °C per minute |
| 1 | Correct difference quotient for a = 2 with fractions combined over a common denominator |
| 1 | Cancels h (h ≠ 0) and finds T′(2) = −20/3 |
| 1 | Interpretation with the time (t = 2), "decreasing" or "falling", the size 20/3 and units |
| 1 | Explains that an average over an interval is not, in general, the rate at a particular point, because the rate changes |

The x-form, lim (t → 2) (T(t) − 40)/(t − 2), is an equally valid method for (b).
</details>

## Question 7 (constructed response · stretch)

Let g be the function defined by

- g(x) = x² for x ≤ 1
- g(x) = 3x − 2 for x > 1

(a) Show that g is continuous at x = 1.
(b) Find lim (h → 0⁻) (g(1 + h) − g(1))/h and lim (h → 0⁺) (g(1 + h) − g(1))/h.
(c) Does g′(1) exist? Explain.
(d) The rule for x > 1 is changed to kx + (1 − k), where k is a constant. Find the value of k for which g′(1) exists.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** g(1) = 1² = 1. From the left, x² → 1. From the right, 3x − 2 → 1. Both one-sided limits equal g(1), so g is continuous at 1.

**(b)** g(1) = 1.

Left (h < 0, so 1 + h < 1 and the x² rule applies): ((1 + h)² − 1)/h = (2h + h²)/h = 2 + h → **2**.

Right (h > 0, so the 3x − 2 rule applies): (3(1 + h) − 2 − 1)/h = 3h/h = 3 → **3**.

**(c)** No. The one-sided limits of the difference quotient are 2 and 3. They are not equal, so the two-sided limit does not exist, and g′(1) does not exist. The graph has a corner at (1, 1). Continuity at 1 is not enough.

**(d)** With the new rule, the right-hand quotient is (k(1 + h) + 1 − k − 1)/h = kh/h = k. The left-hand limit is still 2. They agree only when **k = 2**, giving g(x) = 2x − 1 for x > 1. (The new rule also gives 1 at x = 1 for every k, so continuity is kept.)

| Point | What earns it |
|---|---|
| 1 | Continuity: g(1) = 1 and both one-sided limits of g equal 1 |
| 1 | Left limit of the quotient = 2, using the x² rule for h < 0 |
| 1 | Right limit of the quotient = 3, using the 3x − 2 rule for h > 0 |
| 1 | Concludes g′(1) does not exist because the one-sided limits differ |
| 1 | k = 2, with the right-hand quotient shown to equal k |

Topic 2.4 develops this link between continuity and differentiability in full.
</details>

## How did you do?

- **Q1 or Q5 wrong:** redo Worked example 1 in the [study guide](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-study-guide/), writing f(a + h) in full before subtracting.
- **Q2 or Q3 wrong:** reread Worked example 3 ("reading a limit as a derivative") and check the function, the point and f(a) every time.
- **Q4 or Q6 wrong:** compare the "Representations" table: an average rate is over an interval; f′(a) is at one instant, with units.
- **Q7 wrong:** reread "When the limit does not exist" in the guide.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/2-1-defining-average-instantaneous-rates-change-checklist/).
