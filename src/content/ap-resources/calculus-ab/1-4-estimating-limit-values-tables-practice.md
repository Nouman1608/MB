---
resourceId: "mb-ap-calcab-1.4-practice"
title: "Estimating Limit Values from Tables: Practice Questions (Calculus AB 1.4)"
description: "Seven original Marlbridge practice questions on estimating limits from tables, one-sided limits, unbounded and oscillating behaviour, with full solutions and suggested rubrics."
course: "calculus-ab"
unit: 1
topics: ["1.4"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "One-sided limit notation"
prerequisiteResources: ["mb-ap-calcab-1.4-study-guide"]
learningObjectives:
  - "Estimate two-sided and one-sided limits from a given table"
  - "Decide from a table whether a limit appears not to exist, and say why"
  - "Build a table with a calculator and justify the precision of an estimate"
  - "Explain the limits of numerical evidence"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: a graphing calculator (or any calculator with powers) is needed. Use radian mode for trig."
related: ["mb-ap-calcab-1.4-study-guide", "mb-ap-calcab-1.4-revision-notes", "mb-ap-calcab-1.4-checklist"]
next: "mb-ap-calcab-1.4-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. Assumptions: **no calculator** for Questions 1–6, a calculator for Question 7, angles in radians. All functions and data are invented for practice. Notation: lim (x → a) f(x) is the limit as x approaches a; x → a⁻ is from the left and x → a⁺ is from the right. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

The table gives selected values of a function f.

| x | 3.9 | 3.99 | 3.999 | 4 | 4.001 | 4.01 | 4.1 |
|---|---|---|---|---|---|---|---|
| f(x) | 2.41 | 2.491 | 2.4991 | 7 | 2.5009 | 2.509 | 2.59 |

Based on the table, what is the best estimate of lim (x → 4) f(x)?

- (A) 2.4991
- (B) 2.5
- (C) 7
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From the left, 2.41, 2.491, 2.4991 approach 2.5. From the right, 2.59, 2.509, 2.5009 also approach 2.5. Both sides agree, so the limit is about 2.5. The entry f(4) = 7 does not affect the limit.

- (A) is just the table value closest to x = 4 on the left. The values are approaching 2.5, so 2.5 is the better estimate.
- (C) uses f(4). A limit depends on values near 4, not at 4.
- (D) assumes that f(4) differing from the trend destroys the limit. It does not; it only means f is not continuous at 4 (Topic 1.10 onwards).
</details>

## Question 2 (multiple choice · core)

The table gives selected values of a function f.

| x | −1.1 | −1.01 | −1.001 | −0.999 | −0.99 | −0.9 |
|---|---|---|---|---|---|---|
| f(x) | 2.8 | 2.98 | 2.998 | 0.997 | 0.97 | 0.7 |

Based on the table, what is the best estimate of lim (x → −1⁺) f(x)?

- (A) 1
- (B) 2
- (C) 3
- (D) The limit does not exist.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** "x → −1⁺" means from the right, so use x values greater than −1: −0.9, −0.99, −0.999. The values 0.7, 0.97, 0.997 approach 1.

- (B) averages the left-side trend (3) and the right-side trend (1). Limits are never found by averaging.
- (C) is the left-hand limit. Values such as −1.01 are **less** than −1, so they are on the left.
- (D) is true of the two-sided limit, because 3 ≠ 1. But the question asks only for the right-hand limit, which does exist.
</details>

## Question 3 (multiple choice · core)

The table gives selected values of a function f.

| x | 4.9 | 4.99 | 4.999 | 5.001 | 5.01 | 5.1 |
|---|---|---|---|---|---|---|
| f(x) | 50 | 5 000 | 500 000 | 500 000 | 5 000 | 50 |

Which statement is best supported by the table?

- (A) lim (x → 5) f(x) = 500 000
- (B) lim (x → 5) f(x) = 0
- (C) f(x) increases without bound as x → 5, so lim (x → 5) f(x) does not exist as a real number.
- (D) lim (x → 5) f(x) exists because the values on the left and right are equal.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Each step closer to 5 multiplies the values by 100: 50, 5 000, 500 000. They do not level off, so there is no finite number they approach. The function is unbounded near 5, which is one of the ways a limit fails to exist (you may write lim (x → 5) f(x) = ∞ to describe it).

- (A) takes the largest values in the table as the limit. The next step closer would give 50 000 000.
- (B) may come from noticing that x − 5 gets close to 0. The question is about f(x), which gets large, not small.
- (D) confuses "the two sides match each other" with "the two sides approach the same real number". Matching values that grow without bound still give no finite limit.
</details>

## Question 4 (multiple choice · core)

The table gives values of f(x) = (5ˣ − 5)/(x − 1), rounded to 3 decimal places. The function is not defined at x = 1.

| x | 0.9 | 0.99 | 0.999 | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|
| f(x) | 7.433 | 7.983 | 8.041 | 8.054 | 8.112 | 8.731 |

Which of the following is the best estimate of lim (x → 1) f(x)?

- (A) 7.43
- (B) 8.05
- (C) 8.73
- (D) The limit does not exist, because f(1) is not defined.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From the left the values rise towards a number just above 8.041. From the right they fall towards a number just below 8.054. The limit lies between 8.041 and 8.054, and 8.05 is the only option in that interval.

- (A) is f(0.9), the value furthest from x = 1 on the left.
- (C) is f(1.1), the value furthest from x = 1 on the right.
- (D) confuses the limit with the function value. The limit can exist even when f(1) does not, as here (substitution would give 0/0).

Background only: the exact value is 5 ln 5 ≈ 8.047, which you will be able to show in Unit 2.
</details>

## Question 5 (constructed response · core)

Let f(x) = cos(π/x) for x ≠ 0. A student makes this table and claims that lim (x → 0) f(x) = 1.

| x | −0.1 | 0.001 | 0.01 | 0.1 | 0.5 |
|---|---|---|---|---|---|
| f(x) | 1 | 1 | 1 | 1 | 1 |

(a) Without a calculator, find f(1/11) and f(1/101).
(b) Explain why the student's table gave a misleading result.
(c) Does lim (x → 0) f(x) exist? Justify your answer.

<details>
<summary>Worked solution</summary>

**(a)** f(1/11) = cos(11π) = −1, because 11π is an odd multiple of π. Likewise f(1/101) = cos(101π) = **−1**.

**(b)** For every x in the table, π/x is an even multiple of π (for example π/0.1 = 10π and π/0.5 = 2π), and the cosine of an even multiple of π is 1. The table sampled only the points where f happens to equal 1. Other x values, just as close to 0 or closer, give −1.

**(c)** **No.** However close x gets to 0, there are x values with f(x) = 1 (x = 1/(2n)) and x values with f(x) = −1 (x = 1/(2n + 1)), for whole numbers n. The values oscillate between −1 and 1 and never approach a single number, so the limit does not exist.

Lesson: a table is a sample. A pattern that looks perfect can be produced by the choice of x values.

Suggested mark points (3): 1 for both values −1 in (a); 1 for explaining that every table value makes π/x an even multiple of π; 1 for "does not exist" with the oscillation reason (values 1 and −1 occur arbitrarily close to 0).
</details>

## Question 6 (constructed response · core)

A small robot moves along a straight track. The table gives A(h), its average velocity in metres per second over the time interval from t = 2 to t = 2 + h seconds. (For negative h the interval is from 2 + h to 2.)

| h | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| A(h) (m/s) | 5.705 | 5.97005 | 5.9970005 | 6.0030005 | 6.03005 | 6.305 |

(a) Use the table to estimate lim (h → 0) A(h). Include units.
(b) Explain why the table has no entry for h = 0.
(c) Explain why the table includes negative values of h as well as positive ones.
(d) Interpret your answer to (a) in the context of the robot.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** From the left (h < 0): 5.705, 5.97005, 5.9970005 approach 6. From the right (h > 0): 6.305, 6.03005, 6.0030005 also approach 6. So lim (h → 0) A(h) ≈ **6 m/s**.

**(b)** Average velocity is (change in position)/(change in time). When h = 0 the time interval has length 0, so the calculation would divide by 0. A(0) is undefined. That does not matter: the limit only uses h values near 0.

**(c)** A two-sided limit exists only if the left-hand and right-hand limits are equal. The negative values show the left-hand trend and the positive values show the right-hand trend. Here both approach 6, so the two-sided limit exists.

**(d)** The average velocity over shorter and shorter time intervals around t = 2 approaches 6 m/s. So the robot's velocity at the instant t = 2 seconds is about 6 m/s. (This is the idea of Topic 1.1: an instantaneous rate is a limit of average rates.)

| Point | What earns it |
|---|---|
| 1 | Estimate of 6 with units m/s, supported by both sides of the table |
| 1 | Explains that A(0) would need division by a zero-length time interval, and that the limit does not use h = 0 |
| 1 | Explains that both one-sided trends are needed and that they agree |
| 1 | Interprets the limit as the robot's velocity at the instant t = 2 s |

Acceptable alternative for (a): "approximately 6.0 m/s". An answer of 5.9970005 or 6.0030005 alone does not earn the first point; it is a table value, not the value being approached.
</details>

## Question 7 (constructed response · stretch, calculator)

Let h(x) = (4ˣ − 2ˣ)/x for x ≠ 0.

(a) Use a calculator to complete a table of h(x) for x = −0.1, −0.01, −0.001, 0.001, 0.01 and 0.1. Give values to 4 decimal places.
(b) Estimate lim (x → 0) h(x) to as many decimal places as your table supports. Justify the number of decimal places.
(c) Explain why your table cannot prove that your estimate is correct.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)**

| x | −0.1 | −0.01 | −0.001 | 0.001 | 0.01 | 0.1 |
|---|---|---|---|---|---|---|
| h(x) | 0.6248 | 0.6860 | 0.6924 | 0.6939 | 0.7004 | 0.7692 |

**(b)** The left values increase towards a number above 0.6924. The right values decrease towards a number below 0.6939. The two closest values, 0.6924 and 0.6939, both round to 0.69 but give 0.692 and 0.694 to 3 decimal places. So **lim (x → 0) h(x) ≈ 0.69**, to 2 decimal places. (Going closer, to x = ±0.0001, would support a third decimal place.)

**(c)** A table shows only a few sampled values. It cannot show what happens for x values between the samples or closer to 0. The function could, in principle, behave differently there, as cos(π/x) does in Question 5. A table is evidence for a limit, not proof.

| Point | What earns it |
|---|---|
| 1 | All six table values correct to 4 decimal places (allow one rounding slip) |
| 1 | Estimate 0.69, based on values from both sides |
| 1 | Justifies 2 decimal places: the closest left and right values agree to 2 decimal places but not 3 |
| 1 | Explains that a table samples finitely many points and cannot rule out other behaviour near 0 |

Background only: the exact value is ln 2 ≈ 0.6931, which you will be able to show in Unit 2.
</details>

## How did you do?

- **Q1 wrong:** reread "What a table can tell you" in the [study guide](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-study-guide/): ignore f(c).
- **Q2 or Q6(c) wrong:** revisit "One-sided limits from a table" and Worked example 2.
- **Q3 or Q5 wrong:** see "When a table suggests the limit does not exist" and Worked example 3.
- **Q4 or Q7 wrong:** redo Worked example 1, especially the step that decides the precision.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/1-4-estimating-limit-values-tables-checklist/).
