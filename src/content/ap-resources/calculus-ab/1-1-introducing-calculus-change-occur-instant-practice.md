---
resourceId: "mb-ap-calcab-1.1-practice"
title: "Introducing Calculus: Can Change Occur at an Instant? Practice Questions (Calculus AB 1.1)"
description: "Seven original Marlbridge practice questions on average rates of change and rates at an instant, from formulas, tables and graphs, with solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.1"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Function notation and expanding brackets"
prerequisiteResources: ["mb-ap-calcab-1.1-study-guide"]
learningObjectives:
  - "Calculate average rates of change with correct units"
  - "Explain why an average rate cannot be found over an interval of length zero"
  - "Estimate a rate at an instant from a formula, a table or a graph"
  - "Decide whether average rates from both sides agree on a single rate"
skills: ["1", "2", "3"]
studyMinutes: 40
difficulty: "mixed"
calculator: "not-permitted"
calculatorNote: "No calculator for any question. The arithmetic is designed to be done by hand."
related: ["mb-ap-calcab-1.1-study-guide", "mb-ap-calcab-1.1-revision-notes", "mb-ap-calcab-1.1-checklist"]
next: "mb-ap-calcab-1.1-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions for every question: **no calculator**, and all contexts and data are invented. Notation: lim (h → 0) g(h) means "the limit as h approaches 0 of g(h)". This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

What is the average rate of change of f(x) = x³ − 2x over the interval [1, 3]?

- (A) 7
- (B) 10
- (C) 11
- (D) 22

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** f(3) = 27 − 6 = 21 and f(1) = 1 − 2 = −1. Average rate = (f(3) − f(1))/(3 − 1) = (21 − (−1))/2 = 22/2 = 11.

- (A) divides one output by its input: f(3)/3 = 7. That is not a change in output over a change in input.
- (B) makes a sign slip with f(1), using +1 instead of −1: (21 − 1)/2 = 10.
- (D) finds the change in output, 22, but forgets to divide by the change in input, 2.
</details>

## Question 2 (multiple choice · foundation)

A student wants the rate of change of a function f at x = 4. She writes the average rate over [4, 4 + h] as (f(4 + h) − f(4))/h and then puts h = 0. Why does this fail?

- (A) Putting h = 0 gives 0/0, which is undefined, because an average rate needs a nonzero change in x.
- (B) Putting h = 0 always gives 0, so the rate would be zero for every function.
- (C) The method only works when h is negative.
- (D) It fails only if f is not a polynomial.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With h = 0 the top is f(4) − f(4) = 0 and the bottom is 0. Division by zero is undefined for every function f, because the average rate divides by the change in the input. The rate at x = 4 must come from what the quotient approaches as h gets close to 0, not from h = 0 itself.

- (B) treats 0/0 as if it were 0. It is not a number at all.
- (C) is wrong: intervals on either side of 4 (h positive or negative) are both useful, and neither allows h = 0.
- (D) is wrong: the problem is the zero denominator, which happens for every function, polynomials included.
</details>

## Question 3 (multiple choice · core)

The table shows average rates of change of a function g over intervals that contain x = 2.

| Interval | [1.9, 2] | [1.99, 2] | [1.999, 2] | [2, 2.001] | [2, 2.01] | [2, 2.1] |
|---|---|---|---|---|---|---|
| Average rate | 10.41 | 10.9401 | 10.994001 | 11.006001 | 11.0601 | 11.61 |

Which value is the best estimate of the rate of change of g at x = 2?

- (A) 6
- (B) 10.41
- (C) 11
- (D) 11.61

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** As the intervals shrink, the averages from the left rise towards 11 (10.41, 10.9401, 10.994001) and the averages from the right fall towards 11 (11.61, 11.0601, 11.006001). Both sides approach 11.

- (A) confuses the value of the function with its rate of change. (For the invented function behind this table, g(2) = 6.) Nothing in the table approaches 6.
- (B) and (D) are averages over the longest intervals in the table, so they are the least accurate estimates. Each also uses one side only.
</details>

## Question 4 (multiple choice · core)

A weather balloon's height is A(t) metres, t minutes after launch. Which expression gives the balloon's vertical velocity **at** t = 2, in metres per minute?

- (A) A(2)/2
- (B) (A(4) − A(2))/(4 − 2)
- (C) lim (h → 0) (A(2 + h) − A(2))/h
- (D) (A(2 + h) − A(2))/h evaluated at h = 0

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The velocity at an instant is the value that average velocities over intervals [2, 2 + h] approach as h gets close to 0. That is exactly this limit.

- (A) divides the height by the time. Even if A(0) = 0, this is the average velocity over [0, 2], not the velocity at t = 2.
- (B) is the average velocity over [2, 4]. It contains t = 2 and is an estimate, but not the exact rate at the instant.
- (D) gives (A(2) − A(2))/0 = 0/0, which is undefined.
</details>

## Question 5 (table · core)

Rain fills a water tank. The volume W(t), in litres, is recorded t hours after the rain starts.

| t (hours) | 0 | 3 | 5 | 6 | 7 | 10 |
|---|---|---|---|---|---|---|
| W(t) (litres) | 120 | 165 | 200 | 222 | 246 | 330 |

(a) Find the average rate of change of W over [0, 10]. Include units.
(b) Use the table to estimate the rate at which water is entering the tank at t = 6. Show the interval you use and say why you chose it.
(c) Interpret your answer to (b) in context.
(d) Explain why the table cannot give the rate at t = 6 using the value W(6) alone.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** (W(10) − W(0))/(10 − 0) = (330 − 120)/10 = 210/10 = **21 litres per hour**.

**(b)** Use the shortest interval in the table with t = 6 inside it: [5, 7].
(W(7) − W(5))/(7 − 5) = (246 − 200)/2 = 46/2 = **23 litres per hour**.
It is short, and it uses one data point on each side of t = 6. (One-sided estimates: [5, 6] gives 22 and [6, 7] gives 24 litres per hour; 23 lies between them.)

**(c)** At t = 6 hours, the volume of water in the tank is increasing at about 23 litres per hour.

**(d)** A rate needs a change in volume divided by a change in time. With only t = 6, the change in time is 0, so the quotient would be (222 − 222)/0 = 0/0, which is undefined. You need intervals that contain t = 6.

| Point | What earns it |
|---|---|
| 1 | 21, with units of litres per hour |
| 1 | An estimate from an interval containing t = 6, preferably [5, 7] (23), with the quotient shown; [5, 6] (22) or [6, 7] (24) also earn the point |
| 1 | Interpretation that names the time (t = 6 hours), the quantity (volume of water), "increasing" and the units |
| 1 | Explains that a single time gives a zero change in time, so the quotient is 0/0 (undefined) |

No point for (b) is earned by using [0, 10] or any interval that does not contain t = 6.
</details>

## Question 6 (constructed response · core)

A particle moves along a straight line. Its position is s(t) = 2t² − t + 1 metres at time t seconds.

(a) Find the average velocity of the particle over [1, 3].
(b) Show that, for h ≠ 0, the average velocity over the interval from t = 1 to t = 1 + h is 3 + 2h.
(c) Use (b) to find the velocity of the particle at t = 1. Explain your reasoning.
(d) Explain why you may divide by h in (b), but may not set h = 0 in the original quotient.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** s(3) = 18 − 3 + 1 = 16 and s(1) = 2 − 1 + 1 = 2. Average velocity = (16 − 2)/(3 − 1) = 14/2 = **7 m/s**.

**(b)** s(1 + h) = 2(1 + 2h + h²) − (1 + h) + 1 = 2 + 3h + 2h². So
s(1 + h) − s(1) = 3h + 2h², and (3h + 2h²)/h = h(3 + 2h)/h = **3 + 2h**, for h ≠ 0.

**(c)** As the interval shrinks, h gets close to 0 (from either side), and 3 + 2h gets close to 3. For example, h = 0.1 gives 3.2 and h = −0.1 gives 2.8. So the velocity at t = 1 is lim (h → 0) (3 + 2h) = **3 m/s**.

**(d)** Every interval used has h ≠ 0, so dividing by h is allowed for every quotient you actually calculate. Setting h = 0 in the original quotient (s(1 + h) − s(1))/h gives 0/0, because the interval would have length zero. The velocity at t = 1 comes from what the quotients approach, not from h = 0.

| Point | What earns it |
|---|---|
| 1 | Average velocity 7 m/s, with s(3) and s(1) correct |
| 1 | Correct expansion of s(1 + h) and simplification to 3 + 2h |
| 1 | Velocity at t = 1 is 3 m/s, justified by 3 + 2h approaching 3 as h approaches 0 (a limit statement or a clear verbal equivalent) |
| 1 | Explains that h ≠ 0 for every interval, and that h = 0 gives an undefined 0/0 |

Acceptable alternative for (c): a table of 3 + 2h for h = ±0.1, ±0.01, ±0.001 showing values approaching 3 from both sides, with a stated conclusion.
</details>

## Question 7 (constructed response · stretch)

Let g(x) = 3 + |x − 2|.

(a) Find the average rate of change of g over [2, 2.1] and over [1.9, 2].
(b) Show that the average rate over [2, 2 + h] is 1 for every h > 0, and that the average rate over [2 + h, 2] is −1 for every h < 0.
(c) A student uses the interval [1.9, 2.1], finds an average rate of 0, and concludes that "the rate of change of g at x = 2 is 0". Explain why this conclusion is not justified.
(d) Does g have a single rate of change at x = 2? Explain using your answers above.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** g(2) = 3, g(2.1) = 3.1 and g(1.9) = 3.1.
Over [2, 2.1]: (g(2.1) − g(2))/(2.1 − 2) = (3.1 − 3)/0.1 = **1**.
Over [1.9, 2]: (g(2) − g(1.9))/(2 − 1.9) = (3 − 3.1)/0.1 = **−1**.

**(b)** For h > 0, g(2 + h) = 3 + h, so (g(2 + h) − g(2))/h = h/h = 1.
For h < 0, g(2 + h) = 3 + |h| = 3 − h, so the average over [2 + h, 2] is (g(2) − g(2 + h))/(2 − (2 + h)) = (3 − (3 − h))/(−h) = h/(−h) = −1.

**(c)** Over [1.9, 2.1], (g(2.1) − g(1.9))/0.2 = (3.1 − 3.1)/0.2 = 0. But this one interval hides what happens on each side: g falls at rate 1 to the left of 2 and rises at rate 1 to the right. The 0 is just the two sides cancelling. One average, however short the interval, does not show what the averages approach.

**(d)** No. As the intervals shrink, the averages from the right stay at 1 and the averages from the left stay at −1. They do not approach one common value, so there is no single rate of change at x = 2. On the graph this is a sharp corner at (2, 3): no single tangent line fits. (Unit 2 returns to this when it discusses where a derivative exists.)

| Point | What earns it |
|---|---|
| 1 | Both averages correct: 1 and −1 |
| 1 | General result for each side, including the correct treatment of |h| = −h for h < 0 |
| 1 | Explains that the symmetric average 0 comes from two different one-sided behaviours cancelling, so it does not show a rate at x = 2 |
| 1 | Concludes there is no single rate at x = 2 because the left and right averages approach different values (−1 and 1) |
</details>

## How did you do?

- **Q1 or Q5(a) wrong:** revisit "Average rate of change" in the [study guide](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-study-guide/). The formula is change in output over change in input.
- **Q2, Q4 or Q6(d) wrong:** reread "Why one division cannot give the rate at an instant".
- **Q3 or Q6(c) wrong:** reread "Shrinking the interval" and Worked example 1.
- **Q5(b)–(c) wrong:** redo Worked example 2: use the shortest interval containing the instant, and interpret with units and sign.
- **Q7 wrong:** see the misconception "Use only one side": averages from both sides must agree.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-checklist/).
