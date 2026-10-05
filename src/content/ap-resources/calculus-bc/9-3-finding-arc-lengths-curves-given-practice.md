---
resourceId: "mb-ap-calcbc-9.3-practice"
title: "Finding Arc Lengths of Curves Given by Parametric Equations: Practice Questions (Calculus BC 9.3)"
description: "Seven original Marlbridge practice questions on parametric arc length: setting up the integral, exact and calculator lengths, retraced curves, a loop and a context, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.3"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Parametric derivatives (Topic 9.1) and the definite integral (Topics 6.2 to 6.7)"
prerequisiteResources: ["mb-ap-calcbc-9.3-study-guide"]
learningObjectives:
  - "Write the arc length integral for a parametric curve with correct limits"
  - "Find exact arc lengths when the integrand simplifies"
  - "Evaluate arc lengths with a calculator and check them against straight-line distances"
  - "Decide whether an integral gives the length of a curve or counts part of it twice"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 4, 5 and 6: no calculator. Questions 3 and 7: calculator allowed; give decimals to 3 decimal places. Angles in radians."
related: ["mb-ap-calcbc-9.3-study-guide", "mb-ap-calcbc-9.3-revision-notes", "mb-ap-calcbc-9.3-checklist"]
next: "mb-ap-calcbc-9.3-checklist"
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
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; no calculator for Questions 1, 2, 4, 5 and 6; in Questions 3 and 7 a calculator may be used, and decimals should be given to 3 decimal places. Notation: "∫ from a to b of f(t) dt" is a definite integral, and x′(t) means dx/dt.

## Question 1 (multiple choice · foundation)

A curve is given by x = cos(2t), y = t³ for 0 ≤ t ≤ 1. Which integral gives its length?

- (A) ∫ from 0 to 1 of √(4 sin²(2t) + 9t⁴) dt
- (B) ∫ from 0 to 1 of √(sin²(2t) + 9t⁴) dt
- (C) ∫ from 0 to 1 of √(cos²(2t) + t⁶) dt
- (D) ∫ from 0 to 1 of (−2 sin(2t) + 3t²) dt

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** dx/dt = −2 sin(2t) and dy/dt = 3t². Squaring: (dx/dt)² = 4 sin²(2t) and (dy/dt)² = 9t⁴. The length is ∫ from 0 to 1 of √(4 sin²(2t) + 9t⁴) dt.

- (B) loses the chain-rule factor 2 in dx/dt, so it squares −sin(2t) instead of −2 sin(2t).
- (C) squares the functions x and y themselves, not their derivatives.
- (D) adds the derivatives without squaring or taking a root. It equals [x + y] from 0 to 1, a net change, not a length.
</details>

## Question 2 (multiple choice · foundation)

What is the length of the curve x = 1 + 2 cos t, y = 3 − 2 sin t for 0 ≤ t ≤ π?

- (A) π
- (B) 2π
- (C) 4
- (D) 4π

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** dx/dt = −2 sin t and dy/dt = −2 cos t, so the integrand is √(4 sin² t + 4 cos² t) = √4 = 2. Then L = ∫ from 0 to π of 2 dt = 2π. This is half of a circle of radius 2 centred at (1, 3), traced once.

- (A) uses an integrand of 1, as if the radius were 1.
- (C) is the straight-line distance from the start (3, 3) to the end (−1, 3), the diameter, not the length along the curve.
- (D) is the full circumference 2π · 2. For 0 ≤ t ≤ π only half the circle is drawn.
</details>

## Question 3 (multiple choice · core · calculator)

A curve is given by x = eᵗ, y = t² for 0 ≤ t ≤ 2. What is its length, to 3 decimal places?

- (A) 2.346
- (B) 7.538
- (C) 7.566
- (D) 37.466

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** dx/dt = eᵗ and dy/dt = 2t. L = ∫ from 0 to 2 of √(e^(2t) + 4t²) dt ≈ 7.566 (calculator).

- (A) uses √(1 + (dy/dx)²) with dy/dx = 2t/eᵗ, but integrates with respect to t. The Topic 8.13 formula needs dx, not dt, so the set-up mixes two methods.
- (B) is the straight-line distance from (1, 0) to (e², 4). The curve must be at least this long, and it is slightly longer.
- (D) forgets the square root: ∫ from 0 to 2 of (e^(2t) + 4t²) dt ≈ 37.466.
</details>

## Question 4 (multiple choice · stretch)

Let x = cos(2t) and y = sin(2t). Consider I = ∫ from 0 to 2π of √((dx/dt)² + (dy/dt)²) dt. Which statement is true?

- (A) I = 2π, the length of the curve.
- (B) I = 4π, the length of the curve.
- (C) I = 4π, but the curve is only 2π long, because it is traced twice.
- (D) I = 0, because the point ends where it started.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The integrand is √(4 sin²(2t) + 4 cos²(2t)) = 2, so I = ∫ from 0 to 2π of 2 dt = 4π. The curve is the unit circle, with circumference 2π. Because of the 2t, the point goes round once for 0 ≤ t ≤ π and again for π ≤ t ≤ 2π. The integral counts the circle twice.

- (A) gives the correct length of the curve but not the value of I.
- (B) computes I correctly but wrongly calls it the length. The integral gives a length only if the curve is traced once.
- (D) confuses the integral of the speed-like integrand (always positive) with a net change in position. The integrand is 2 > 0, so I cannot be 0.
</details>

## Question 5 (calculation · core)

Find the exact length of the curve x = t² − 2 ln t, y = 4t for 1 ≤ t ≤ e.

<details>
<summary>Worked solution</summary>

1. dx/dt = 2t − 2/t and dy/dt = 4.
2. Square and add: (2t − 2/t)² + 16 = 4t² − 8 + 4/t² + 16 = 4t² + 8 + 4/t².
3. Recognise a perfect square: 4t² + 8 + 4/t² = (2t + 2/t)². For 1 ≤ t ≤ e, 2t + 2/t > 0, so the root is 2t + 2/t.
4. L = ∫ from 1 to e of (2t + 2/t) dt = [t² + 2 ln t] from 1 to e = (e² + 2) − (1 + 0) = **e² + 1** (about 8.389).

Check: dx/dt > 0 for t > 1, so x increases and the curve is traced once.

Suggested mark points (3): 1 for both derivatives and the correct integral set-up; 1 for simplifying to (2t + 2/t)²; 1 for the exact answer e² + 1.

Common error: writing the root as 2t − 2/t (copying the sign from dx/dt). That gives e² − 3, which is about 4.389, shorter than the straight-line distance from (1, 4) to (e² − 2, 4e) (about 8.155). Impossible for a length.
</details>

## Question 6 (constructed response · stretch)

A curve C is given by x = 3t², y = t³ − 3t for all real t.

(a) Show that C passes through the point (9, 0) at two different values of t, so C crosses itself there.
(b) Show that (dx/dt)² + (dy/dt)² = 9(t² + 1)².
(c) The part of C for −√3 ≤ t ≤ √3 is a closed loop. Find the exact length of the loop.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y = t(t² − 3) = 0 when t = 0, t = √3 or t = −√3. At t = ±√3, x = 3 · 3 = 9. So the point (9, 0) is reached at t = −√3 and at t = √3: C crosses itself there. (At t = 0 the point is (0, 0).)

**(b)** dx/dt = 6t and dy/dt = 3t² − 3. Then
(6t)² + (3t² − 3)² = 36t² + 9t⁴ − 18t² + 9 = 9t⁴ + 18t² + 9 = 9(t⁴ + 2t² + 1) = **9(t² + 1)²**.

**(c)** √(9(t² + 1)²) = 3(t² + 1), since t² + 1 > 0.
L = ∫ from −√3 to √3 of 3(t² + 1) dt = [t³ + 3t] from −√3 to √3 = (3√3 + 3√3) − (−3√3 − 3√3) = **12√3** (about 20.785).

The loop is traced once on this interval: it starts and ends at (9, 0), and t moves through each point of the loop once.

| Point | What earns it |
|---|---|
| 1 | (a) Finds t = ±√3 from y = 0 and shows x = 9 at both |
| 1 | (b) Correct dx/dt and dy/dt |
| 1 | (b) Correct expansion and factorisation to 9(t² + 1)² |
| 1 | (c) Correct integral with integrand 3(t² + 1) and limits −√3, √3 |
| 1 | (c) Exact answer 12√3 |

Total: 5 points. Acceptable alternative for (c): use symmetry (the integrand is even) and double ∫ from 0 to √3 of 3(t² + 1) dt = 6√3. A decimal alone (20.785) does not earn the last point, because this question is no-calculator and asks for an exact value.
</details>

## Question 7 (constructed response · stretch · calculator)

A fictional robotic lawn mower moves across a garden. Its position, in metres, is x(t) = t² and y(t) = 4 sin t, where t is in minutes, 0 ≤ t ≤ 3.

(a) Explain why the mower never goes back over any part of its path for 0 < t ≤ 3.
(b) Write an integral for the length of the mower's path from t = 0 to t = 3, and evaluate it.
(c) Find the straight-line distance between the mower's start and end points. Explain why your answer to (b) must be larger.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dx/dt = 2t > 0 for 0 < t ≤ 3, so x(t) is strictly increasing. The mower is always further along in the x direction than before, so it cannot return to an earlier point of its path.

**(b)** dx/dt = 2t and dy/dt = 4 cos t.
L = **∫ from 0 to 3 of √(4t² + 16 cos² t) dt ≈ 12.696 m** (calculator, radian mode).

**(c)** Start: (0, 0). End: (9, 4 sin 3) ≈ (9, 0.564). Straight-line distance = √(81 + 16 sin² 3) ≈ **9.018 m**. The straight segment is the shortest route between two points, and the mower's path is not straight (y rises and falls), so its length must be larger: 12.696 > 9.018.

| Point | What earns it |
|---|---|
| 1 | (a) Uses dx/dt = 2t > 0 (x increasing) to explain no retracing |
| 1 | (b) Correct integrand √(4t² + 16 cos² t) |
| 1 | (b) Correct limits 0 and 3 in t, with dt |
| 1 | (b) 12.696 m, with units |
| 1 | (c) 9.018 m and a reason why the path is longer (shortest distance is a straight line) |

Total: 5 points. Units: the integrand is metres per minute and t is in minutes, so L is in metres. A degree-mode calculator gives a different, wrong value; the answer must use radians.
</details>

## How did you do?

- **Q1 or Q3 wrong:** check how you square the derivatives and where the root goes; see "The idea: Pythagoras on tiny pieces" in the [study guide](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/).
- **Q2 or Q4 wrong:** reread "When does the integral give the length?", especially the circle traced twice.
- **Q5 or Q6 wrong:** work through Worked example 1 again and practise spotting perfect squares.
- **Q7 wrong:** compare with Worked example 2 and its straight-line check.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-checklist/).
