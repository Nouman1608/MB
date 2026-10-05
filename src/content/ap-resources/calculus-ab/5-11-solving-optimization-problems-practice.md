---
resourceId: "mb-ap-calcab-5.11-practice"
title: "Solving Optimization Problems: Practice Questions (Calculus AB 5.11)"
description: "Seven original Marlbridge practice questions on solving and interpreting optimization problems, with full solutions, distractor explanations and suggested rubrics."
course: "calculus-ab"
unit: 5
topics: ["5.11"]
resourceType: "practice-questions"
calculusScope: "ab-and-bc"
prerequisites:
  - "Setting up optimization models (Topic 5.10)"
  - "The Candidates Test and the first and second derivative tests"
prerequisiteResources: ["mb-ap-calcab-5.11-study-guide"]
learningObjectives:
  - "Find and justify absolute extrema in applied problems on closed and open domains"
  - "Give the location or the value of an extremum, as the question asks"
  - "Interpret maximum and minimum values in context, including values of rates"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1 to 6: no calculator. Question 7: a graphing calculator is allowed, though an exact method also works. Give calculator answers correct to three decimal places."
related: ["mb-ap-calcab-5.11-study-guide", "mb-ap-calcab-5.11-revision-notes", "mb-ap-calcab-5.11-checklist"]
next: "mb-ap-calcab-5.11-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. All contexts and data are fictional. Assumptions: **no calculator** for Questions 1 to 6; a graphing calculator is allowed for Question 7; calculator answers correct to three decimal places. This set is for both Calculus AB and Calculus BC students.

## Question 1 (multiple choice · foundation)

A workshop makes x bracelets in a week, where 10 ≤ x ≤ 200. The average cost per bracelet, A(x), is measured in dollars per bracelet. On this interval, A has its absolute minimum at x = 80, and A(80) = 6.40. Which statement is the best interpretation?

- (A) The lowest possible average cost is $6.40 per bracelet, which happens when the workshop makes 80 bracelets in the week.
- (B) Making 80 bracelets in the week costs $6.40 in total.
- (C) When the workshop makes 80 bracelets, the average cost is decreasing at $6.40 per bracelet.
- (D) The lowest possible average cost is $80 per bracelet, which happens when the workshop makes 6.40 bracelets.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The location of the minimum is the input x = 80 bracelets. The minimum value is the output A(80) = 6.40, measured in dollars per bracelet. A complete interpretation names the quantity, gives the value with units and says where it happens.

- (B) treats an average cost per bracelet as a total cost. The total would be 80 × 6.40 = $512.
- (C) treats the function value as a rate of change. At an interior minimum of a differentiable function the derivative is 0, so the average cost is not changing at that instant.
- (D) swaps the location and the value.
</details>

## Question 2 (multiple choice · core)

A rectangle in the first quadrant has two sides on the axes and its opposite corner on the line x/6 + y/4 = 1. What is the greatest possible area of the rectangle?

- (A) 3
- (B) 6
- (C) 12
- (D) 24

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** On the line, y = 4 − 2x/3. Area A(x) = x(4 − 2x/3) = 4x − 2x²/3 for 0 ≤ x ≤ 6. A′(x) = 4 − 4x/3 = 0 gives x = 3. Candidates: A(0) = 0, A(3) = 3 × 2 = 6, A(6) = 0. The greatest area is 6 square units.

- (A) is the location x = 3, not the area. The question asks for the value.
- (C) is the area of the whole triangle under the line, ½ × 6 × 4 = 12. The rectangle sits inside the triangle, so it cannot have that area.
- (D) uses both intercepts as the sides, 6 × 4 = 24. That corner, (6, 4), is not on the line.
</details>

## Question 3 (multiple choice · core)

A design cost is modelled by T(x) = x² + 16/x for x > 0. T′(x) = 2x − 16/x², so T′(2) = 0. Which statement is a complete justification that T(2) = 12 is the **absolute** minimum of T on x > 0?

- (A) T′(2) = 0.
- (B) T″(2) > 0.
- (C) x = 2 is the only critical point of T for x > 0, and T′ changes from negative to positive at x = 2.
- (D) T(2) = 12 is less than T(1) = 17 and less than T(3) = 43/3.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** T′(x) = 0 gives x³ = 8, so x = 2 is the only critical point on x > 0. T′(1) = −14 < 0 and T′(3) = 38/9 > 0, so T decreases on (0, 2) and increases on (2, ∞). The only critical point, with this sign change, is the absolute minimum.

- (A) shows only that x = 2 is a critical point. It could be a maximum or neither.
- (B) shows a relative minimum. Without saying x = 2 is the only critical point (or that T″ > 0 everywhere), it does not rule out a lower value elsewhere. (Here T″(x) = 2 + 32/x³ is in fact positive for all x > 0, but option (B) does not say so.)
- (D) checks only two other inputs. A few values cannot rule out a smaller value somewhere else.
</details>

## Question 4 (multiple choice · core)

The temperature of a sample, in °C, t minutes after a test starts is H(t) = t³ − 12t + 20, for 0 ≤ t ≤ 5. What is the maximum temperature of the sample during the test?

- (A) 4 °C
- (B) 20 °C
- (C) 36 °C
- (D) 85 °C

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** H′(t) = 3t² − 12 = 0 gives t = 2 or t = −2. Only t = 2 is in [0, 5]. Candidates: H(0) = 20, H(2) = 8 − 24 + 20 = 4, H(5) = 125 − 60 + 20 = 85. The maximum temperature is 85 °C, at the end of the test.

- (A) is H(2), the only interior critical value. It is the absolute **minimum**, not the maximum.
- (B) is the starting temperature. It is larger than H(2) but smaller than H(5).
- (C) is H(−2). The time t = −2 is before the test starts, so it is not a candidate.
</details>

## Question 5 (constructed response · core)

On a weekday morning, the rate at which cars pass a road sensor is modelled by f(t) = 40 + 18t − 6t² cars per minute, where t is hours after 7:00 am and 0 ≤ t ≤ 3.

(a) Find the time when cars pass the sensor at the greatest rate. Justify your answer.
(b) Find the greatest rate and interpret it in context.
(c) Find the least rate during the period, and when it happens.
(d) A student says: "Most cars passed the sensor at 8:30 am." Explain what is wrong with this statement.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(t) = 18 − 12t = 0 gives t = 1.5. Candidates on [0, 3]: f(0) = 40, f(1.5) = 40 + 27 − 13.5 = 53.5, f(3) = 40 + 54 − 54 = 40. The largest value is at t = 1.5, so the rate is greatest at **8:30 am**.

**(b)** f(1.5) = **53.5 cars per minute**. At 8:30 am cars are passing the sensor faster than at any other time between 7:00 and 10:00 am, at 53.5 cars per minute.

**(c)** The least rate is **40 cars per minute**. It happens at both endpoints, 7:00 am and 10:00 am.

**(d)** f measures a **rate**, cars per minute, not a number of cars. At 8:30 am cars pass most frequently. The total number of cars that have passed keeps increasing for the whole period, because f(t) > 0 throughout, so it is not greatest at 8:30 am. A correct statement is: "Cars passed the sensor at the greatest rate at 8:30 am."

| Point | What earns it |
|---|---|
| 1 | f′(t) = 18 − 12t and the critical point t = 1.5 |
| 1 | Justifies with the Candidates Test (f(0), f(1.5), f(3)) or with the sign change of f′, and states 8:30 am |
| 1 | 53.5 cars per minute, interpreted as the fastest rate, with units and time |
| 1 | Least rate 40 cars per minute at both 7:00 am and 10:00 am |
| 1 | Explains that f is a rate, so its maximum is the busiest moment, not the greatest total |

Acceptable alternative for (a): f″(t) = −12 < 0 everywhere, so the only critical point gives the absolute maximum.
</details>

## Question 6 (constructed response · core)

A closed crate with a square base must hold 12 m³. The base costs $4 per m², the lid costs $2 per m² and the four sides cost $2 per m². Let x be the side of the base and h the height, both in metres.

(a) Show that the total cost, in dollars, is C(x) = 6x² + 96/x, and state the domain.
(b) Find the value of x that minimises the cost. Justify that it gives the absolute minimum.
(c) Give the dimensions of the cheapest crate and its cost, and interpret the minimum value.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Base: 4x². Lid: 2x². Four sides, each x by h: 2 × 4xh = 8xh. Volume x²h = 12, so h = 12/x². Then 8xh = 8x × 12/x² = 96/x. So C(x) = 4x² + 2x² + 96/x = **6x² + 96/x**, for **x > 0**.

**(b)** C′(x) = 12x − 96/x². C′(x) = 0 gives 12x³ = 96, so x³ = 8 and x = 2. C′ exists for all x > 0, so x = 2 is the only critical point. C″(x) = 12 + 192/x³ > 0 for all x > 0, so C is concave up on its whole domain and x = 2 gives the **absolute minimum**.

**(c)** x = 2 m and h = 12/4 = 3 m: the crate is **2 m by 2 m by 3 m high**. C(2) = 24 + 48 = **$72**. Interpretation: $72 is the least amount the materials for a 12 m³ crate of this shape can cost; it is reached with a 2 m square base and a 3 m height. (Check: C(1) = 102 and C(3) = 86, both more.)

| Point | What earns it |
|---|---|
| 1 | Correct cost of base, lid and sides, and uses x²h = 12 to reach C(x) = 6x² + 96/x |
| 1 | Domain x > 0 |
| 1 | C′(x) = 12x − 96/x² and x = 2 |
| 1 | Valid absolute-minimum justification (only critical point with sign change of C′, or C″ > 0 on the whole domain) |
| 1 | Dimensions 2 m × 2 m × 3 m and minimum cost $72, interpreted in context |

Acceptable alternative for (b): C′(1) = −84 < 0 and C′(3) = 76/3 > 0, with the statement that x = 2 is the only critical point. Saying only "C″(2) > 0" earns the justification point only if the student also says x = 2 is the only critical point.
</details>

## Question 7 (constructed response · stretch · calculator allowed)

A park ranger is at point R in a meadow, 3 km from a straight road. The nearest point of the road to R is N. A station S is on the road, 8 km from N. The ranger walks in a straight line across the meadow at 4 km/h to a point P on the road, x km from N towards S, then walks along the road at 6 km/h to S. Assume 0 ≤ x ≤ 8.

(a) Show that the total time, in hours, is T(x) = √(9 + x²)/4 + (8 − x)/6.
(b) Find the value of x that minimises T. Justify your answer.
(c) Find the minimum time, in hours correct to three decimal places, and interpret it.
(d) How many minutes does the best route save compared with walking straight to N and then along the road?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** R, N and P form a right angle at N, with RN = 3 and NP = x. By Pythagoras, RP = √(9 + x²) km, taking √(9 + x²)/4 hours. The road part is (8 − x) km, taking (8 − x)/6 hours. Add them.

**(b)** T′(x) = x/(4√(9 + x²)) − 1/6. Setting T′(x) = 0 (by graphing T′ or by hand: 6x = 4√(9 + x²), so 36x² = 16(9 + x²), 20x² = 144) gives x = √7.2 = 6√5/5 ≈ **2.683 km**. Candidates Test on [0, 8]: T(0) = 25/12 ≈ 2.083, T(2.683) ≈ 1.892, T(8) = √73/4 ≈ 2.136. The smallest is at x ≈ 2.683, so this gives the absolute minimum.

**(c)** The minimum time is T ≈ **1.892 hours** (exactly 4/3 + √5/4), about 113.5 minutes. This is the shortest time in which the ranger can reach S under these speeds. It happens when the ranger meets the road about 2.683 km from N.

**(d)** Walking straight to N takes T(0) = 25/12 hours = 125 minutes. The saving is about 125 − 113.541 ≈ **11.459 minutes**, so about 11.5 minutes.

| Point | What earns it |
|---|---|
| 1 | Correct distances √(9 + x²) and 8 − x, each divided by the right speed |
| 1 | T′(x) correct, or the calculator setup "T′(x) = 0" stated clearly |
| 1 | x ≈ 2.683 |
| 1 | Justification: Candidates Test with T(0), T(2.683) and T(8), or T′ changes from negative to positive at the only critical point |
| 1 | Minimum time 1.892 hours, interpreted as the shortest possible journey time, and a saving of about 11.459 minutes |

Note: T′(1) ≈ −0.088 < 0 and T′(4) ≈ 0.033 > 0, which confirms the sign change.
</details>

## How did you do?

- **Q1 or Q5 wrong:** reread "What a maximum or minimum means in context" in the [study guide](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-study-guide/), especially the row about rates.
- **Q2 or Q4 wrong:** see Worked example 1 and Figure 1. On a closed interval, check every candidate, and give the value when the value is asked for.
- **Q3 or Q6 wrong:** see "Step 2: justifying an absolute extremum" and Worked example 2.
- **Q7 wrong:** see "Using a graphing calculator", and keep unrounded values until the end.

Then tick off the [topic checklist](/advanced-course-resources/calculus-ab/5-11-solving-optimization-problems-checklist/).
