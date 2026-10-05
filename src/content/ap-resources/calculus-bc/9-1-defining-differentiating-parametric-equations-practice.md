---
resourceId: "mb-ap-calcbc-9.1-practice"
title: "Defining and Differentiating Parametric Equations: Practice Questions (Calculus BC 9.1)"
description: "Seven original Marlbridge practice questions on parametric curves: dy/dx, tangent lines, horizontal and vertical tangents, and a path in context, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.1"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Basic derivatives (Topics 2.5–2.7) and the chain rule (Topic 3.1)"
prerequisiteResources: ["mb-ap-calcbc-9.1-study-guide"]
learningObjectives:
  - "Find dy/dx for a parametric curve and evaluate it at a value of t or at a point"
  - "Write the equation of a tangent line to a parametric curve"
  - "Locate horizontal and vertical tangents, checking both derivatives"
  - "Interpret the slope of a parametric path in context"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–5 and 7: no calculator. Question 6: calculator allowed; give decimal answers to 3 decimal places. Angles in radians."
related: ["mb-ap-calcbc-9.1-study-guide", "mb-ap-calcbc-9.1-revision-notes", "mb-ap-calcbc-9.1-checklist"]
next: "mb-ap-calcbc-9.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC-only practice."
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator for Questions 1–5 and 7; in Question 6 a calculator is allowed and decimal answers should be given to 3 decimal places. Notation: x′(t) = dx/dt and y′(t) = dy/dt. All contexts and data are fictional.

## Question 1 (multiple choice · foundation)

A curve is given by x = t³ + 2t and y = t² − 5t. What is the slope of the tangent line to the curve at t = 1?

- (A) −3/5
- (B) −5/3
- (C) −3
- (D) −4/3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dx/dt = 3t² + 2 = 5 and dy/dt = 2t − 5 = −3 at t = 1. So dy/dx = (dy/dt) ÷ (dx/dt) = −3/5.

- (B) divides the other way, (dx/dt) ÷ (dy/dt) = 5/(−3). That is dx/dy, not dy/dx.
- (C) gives dy/dt alone. That is the rate of change of y with respect to t, not the slope of the curve.
- (D) divides the coordinates, y ÷ x = (−4)/3 at t = 1. A ratio of coordinates is not a slope.
</details>

## Question 2 (multiple choice · core)

An ellipse is given by x = 4 cos t, y = 3 sin t. Which is an equation of the tangent line to the ellipse at t = π/4?

- (A) y − 3√2/2 = −¾(x − 2√2)
- (B) y − 3√2/2 = ¾(x − 2√2)
- (C) y − 3√2/2 = −4/3(x − 2√2)
- (D) y − 2√2 = −¾(x − 3√2/2)

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At t = π/4 the point is (4 · √2/2, 3 · √2/2) = (2√2, 3√2/2). dx/dt = −4 sin t and dy/dt = 3 cos t, so dy/dx = (3 cos t)/(−4 sin t). At t = π/4, sin t = cos t, so the slope is −¾. A negative slope makes sense: at t = π/4 the point is on the upper right part of the ellipse, where the curve falls to the right.

- (B) loses the minus sign from d/dt [cos t] = −sin t.
- (C) uses (dx/dt) ÷ (dy/dt), the reciprocal of the slope.
- (D) swaps the x- and y-coordinates of the point.
</details>

## Question 3 (multiple choice · stretch)

A curve is given by x = t² − 4t and y = t³ − 12t. For which value(s) of t does the curve have a horizontal tangent line?

- (A) t = −2 only
- (B) t = −2 and t = 2
- (C) t = 2 only
- (D) No values of t

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dy/dt = 3t² − 12 = 0 gives t = ±2. Now check dx/dt = 2t − 4 at each.

- t = −2: dx/dt = −8 ≠ 0, so the tangent is horizontal, at the point (12, 16).
- t = 2: dx/dt = 0 as well. Both derivatives are zero, so dy/dx = 0/0 gives no conclusion. In fact, for t ≠ 2, dy/dx = 3(t − 2)(t + 2) / (2(t − 2)) = 3(t + 2)/2, which approaches 6 as t → 2. The tangent direction there is not horizontal.

Why the others are wrong:
- (B) stops at dy/dt = 0 and does not check dx/dt.
- (C) chooses the value where dx/dt = 0, which is the condition for a vertical tangent (and here both derivatives are zero).
- (D) is wrong because t = −2 satisfies both conditions.
</details>

## Question 4 (multiple choice · core)

A curve is given by x = t² + t and y = √(t + 3), for t ≥ −3. What is the slope of the curve at the point (2, 2)?

- (A) 1/12
- (B) −1/6
- (C) √5/50
- (D) 12

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Find t first. x = 2 gives t² + t − 2 = 0, so t = 1 or t = −2. Then y(1) = √4 = 2 ✓ but y(−2) = √1 = 1 ✗. So the point (2, 2) belongs only to t = 1. At t = 1: dx/dt = 2t + 1 = 3 and dy/dt = 1/(2√(t + 3)) = ¼. So dy/dx = (¼) ÷ 3 = 1/12.

- (B) uses t = −2, which gives x = 2 but y = 1, so it is a different point, (2, 1).
- (C) substitutes the x-coordinate as if it were t, using t = 2: (1/(2√5)) ÷ 5 = 1/(10√5) = √5/50.
- (D) divides the other way, (dx/dt) ÷ (dy/dt).
</details>

## Question 5 (calculation · core)

A curve is given by x = eᵗ + 1 and y = t eᵗ.

(a) Show that dy/dx = 1 + t.
(b) Find the equation of the tangent line at t = 0.
(c) Find the exact coordinates of the point where the tangent line is horizontal.
(d) Explain why the curve has no vertical tangent lines.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = eᵗ. By the product rule, dy/dt = eᵗ + t eᵗ = eᵗ(1 + t). So dy/dx = eᵗ(1 + t) ÷ eᵗ = **1 + t**.

**(b)** At t = 0: x = 2, y = 0, slope = 1. Tangent line: **y = x − 2**.

**(c)** dy/dt = eᵗ(1 + t) = 0 gives t = −1 (eᵗ is never 0). There dx/dt = e⁻¹ ≠ 0 ✓. The point is **(1 + 1/e, −1/e)**, about (1.368, −0.368).

**(d)** A vertical tangent needs dx/dt = 0, but dx/dt = eᵗ > 0 for every t.

| Point | What earns it |
|---|---|
| 1 | dy/dt = eᵗ(1 + t) by the product rule, divided by dx/dt = eᵗ to give 1 + t |
| 1 | Tangent line y = x − 2, with the point (2, 0) and slope 1 from the same t |
| 1 | t = −1 from dy/dt = 0, with a check that dx/dt ≠ 0 |
| 1 | Exact point (1 + 1/e, −1/e) |
| 1 | dx/dt = eᵗ is never 0, so no vertical tangent |

Total: 5 points. Optional check: eliminating t gives y = (x − 1) ln(x − 1), and dy/dx = ln(x − 1) + 1 = t + 1. ✓ Common error: writing dy/dt = eᵗ (forgetting the product rule), which gives dy/dx = 1 and a "straight line".
</details>

## Question 6 (constructed response · calculator · core)

A remote-controlled boat moves on a lake. Its position at time t seconds is **x(t) = 10 ln(t + 1)** metres east of a jetty and **y(t) = 12 + 5 sin(0.8t)** metres north of the jetty, for 0 ≤ t ≤ 6.

(a) Find dy/dx at t = 2.
(b) Interpret your answer to (a) in context.
(c) Explain why the boat's path has no vertical tangent line for 0 ≤ t ≤ 6.
(d) Find all times in 0 < t < 6 at which the path has a horizontal tangent line, and the boat's position at each.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = 10/(t + 1) and dy/dt = 4 cos(0.8t). At t = 2: dx/dt = 10/3 ≈ 3.333 and dy/dt = 4 cos(1.6) ≈ −0.117. So dy/dx = (4 cos 1.6) ÷ (10/3) = 1.2 cos 1.6 ≈ **−0.035**.

**(b)** At t = 2 the path slopes slightly downward as x increases: the boat's northward position decreases by about 0.035 m for each metre it moves east. (Since dx/dt > 0, the boat is moving east, so it is heading east and very slightly south.)

**(c)** A vertical tangent needs dx/dt = 0. But dx/dt = 10/(t + 1) > 0 for all t in [0, 6], so this never happens.

**(d)** dy/dt = 4 cos(0.8t) = 0 when 0.8t = π/2 or 3π/2 (the next solution, 5π/2, gives t ≈ 9.817, outside the interval). So **t = 5π/8 ≈ 1.963** and **t = 15π/8 ≈ 5.890**. At both, dx/dt > 0 by part (c), so both are horizontal tangents.
- t ≈ 1.963: position ≈ (10.864, 17.000), the furthest north the boat goes.
- t ≈ 5.890: position ≈ (19.301, 7.000), the furthest south.

| Point | What earns it |
|---|---|
| 1 | dx/dt and dy/dt correct, including the chain-rule factor 0.8 |
| 1 | dy/dx ≈ −0.035 at t = 2 |
| 1 | Interpretation: change in north position per metre east, with units, referring to t = 2 |
| 1 | No vertical tangent because dx/dt = 10/(t + 1) is never 0 on the interval |
| 1 | Both times t ≈ 1.963 and t ≈ 5.890 from dy/dt = 0, with dx/dt ≠ 0 |
| 1 | Both positions correct |

Total: 6 points. A calculator's numerical derivative for (a) is fine. An interpretation such as "the boat moves 0.035 m per second" does not earn the (b) point: dy/dx is not a rate with respect to time.
</details>

## Question 7 (constructed response · stretch)

A curve is given by **x = t + 1/t** and **y = t − 1/t**, for t > 0.

(a) Find dy/dx in terms of t, simplified so that it has no fractions inside fractions.
(b) Find the point where the curve has a vertical tangent. Justify your answer.
(c) Find the value of t at which the slope of the curve is 2, and write the equation of the tangent line there.
(d) Show that every point of the curve satisfies x² − y² = 4. Use implicit differentiation of this equation to check your slope in (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = 1 − 1/t² and dy/dt = 1 + 1/t². Multiply top and bottom by t²:
**dy/dx = (t² + 1)/(t² − 1)**, for t ≠ 1.

**(b)** dx/dt = 1 − 1/t² = 0 gives t = 1 (t > 0). There dy/dt = 2 ≠ 0, so the tangent is vertical at **(2, 0)**.

**(c)** (t² + 1)/(t² − 1) = 2 gives t² + 1 = 2t² − 2, so t² = 3 and **t = √3**. Point: x = √3 + 1/√3 = 4√3/3, y = √3 − 1/√3 = 2√3/3. Tangent line: y − 2√3/3 = 2(x − 4√3/3), which simplifies to **y = 2x − 2√3** (about y = 2x − 3.464).

**(d)** x² − y² = (t² + 2 + 1/t²) − (t² − 2 + 1/t²) = 4 for every t. Differentiating x² − y² = 4 implicitly: 2x − 2y (dy/dx) = 0, so dy/dx = x/y. At (4√3/3, 2√3/3): dy/dx = (4√3/3) ÷ (2√3/3) = 2. ✓

| Point | What earns it |
|---|---|
| 1 | dy/dx = (t² + 1)/(t² − 1) |
| 1 | t = 1 from dx/dt = 0, **with** the check dy/dt ≠ 0, and the point (2, 0) |
| 1 | t = √3 from solving dy/dx = 2 |
| 1 | Correct tangent line through (4√3/3, 2√3/3) |
| 1 | x² − y² = 4 shown by expanding |
| 1 | Implicit derivative x/y evaluated to confirm the slope 2 |

Total: 6 points. Acceptable alternative for (c): the point written as (4/√3, 2/√3). Common error in (b): saying "vertical" without checking dy/dt, or giving the answer as t = 1 without the point.
</details>

## How did you do?

- **Q1 or Q2 wrong:** check which derivative goes on top, and your signs for trig derivatives; see "Deriving dy/dx with the chain rule" in the [study guide](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/).
- **Q3 or Q5(c) wrong:** reread "Horizontal and vertical tangents", especially the both-zero case.
- **Q4 or Q7(c) wrong:** practise finding t from a point first (Worked example 1, part (c)).
- **Q6 wrong:** compare with Worked example 2, where dy/dx is interpreted separately from the direction of motion.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-checklist/).
