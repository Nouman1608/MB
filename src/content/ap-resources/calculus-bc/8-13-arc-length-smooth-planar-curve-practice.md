---
resourceId: "mb-ap-calcbc-8.13-practice"
title: "The Arc Length of a Smooth, Planar Curve and Distance Traveled: Practice Questions (Calculus BC 8.13)"
description: "Seven original Marlbridge practice questions on arc length: setting up the integral, exact and calculator lengths, x = g(y) curves, bounds, and distance traveled along a path, with rubrics."
course: "calculus-bc"
unit: 8
topics: ["8.13"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Derivatives and the chain rule (Units 2 and 3), the Fundamental Theorem of Calculus (Topic 6.7) and substitution (Topic 6.9)"
prerequisiteResources: ["mb-ap-calcbc-8.13-study-guide"]
learningObjectives:
  - "Set up arc length integrals for curves y = f(x) and x = g(y)"
  - "Find exact arc lengths when 1 + (f′)² simplifies, and calculator values otherwise"
  - "Justify bounds on an arc length using the integrand and the straight-line distance"
  - "Use arc length to answer distance-traveled questions in context, with units"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1, 2, 4 and 5: no calculator. Questions 3, 6 and 7: graphing calculator allowed; write the integral first and give decimals to 3 decimal places."
related: ["mb-ap-calcbc-8.13-study-guide", "mb-ap-calcbc-8.13-revision-notes", "mb-ap-calcbc-8.13-checklist"]
next: "mb-ap-calcbc-8.13-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The rubrics are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; no calculator for Questions 1, 2, 4 and 5; in Questions 3, 6 and 7 a graphing calculator may be used, and decimal answers should be given to 3 decimal places. All contexts and data are fictional. Notation: "∫ from a to b of f(x) dx" is a definite integral, and "[F(x)] from a to b" means F(b) − F(a).

## Question 1 (multiple choice · foundation)

Which integral gives the length of the graph of y = x³ from x = 0 to x = 2?

- (A) ∫ from 0 to 2 of √(1 + 9x⁴) dx
- (B) ∫ from 0 to 2 of √(1 + x⁶) dx
- (C) ∫ from 0 to 2 of (1 + 3x²) dx
- (D) ∫ from 0 to 2 of √(1 + 3x²) dx

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** f′(x) = 3x², so (f′(x))² = 9x⁴ and L = ∫ from 0 to 2 of √(1 + 9x⁴) dx (about 8.630 with a calculator). f′ is continuous on [0, 2], so the formula applies.

- (B) squares f(x) = x³ instead of f′(x). The arc length formula uses the derivative.
- (C) "splits" the square root, writing √(1 + (f′)²) as 1 + f′. A square root does not split over a sum.
- (D) forgets to square the derivative: it uses 1 + 3x² instead of 1 + (3x²)².
</details>

## Question 2 (multiple choice · core)

What is the exact length of the curve y = (1/3)(2x + 3)^(3/2) for 0 ≤ x ≤ 6?

- (A) 112/3
- (B) 56/3
- (C) 60
- (D) 5√15 − √3

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** By the chain rule, f′(x) = (1/3) · (3/2)(2x + 3)^(1/2) · 2 = √(2x + 3). So 1 + (f′(x))² = 2x + 4 and

L = ∫ from 0 to 6 of √(2x + 4) dx = [(1/3)(2x + 4)^(3/2)] from 0 to 6 = (1/3)(16^(3/2) − 4^(3/2)) = (1/3)(64 − 8) = 56/3 ≈ 18.667.

Check: the chord between the end points is about 18.626, and 18.667 is slightly longer. ✓

- (A) forgets to divide by the inner derivative 2 when integrating √(2x + 4), using (2/3)(2x + 4)^(3/2).
- (C) integrates 1 + (f′)² = 2x + 4 and forgets the square root.
- (D) is f(6) − f(0), the vertical change. That is what you get by dropping the 1, since ∫ √((f′)²) dx = ∫ f′ dx here. It ignores the horizontal movement, so it is shorter than the chord.
</details>

## Question 3 (multiple choice · core · calculator)

A curve is given by x = 4 − y² for 0 ≤ y ≤ 2. It runs from the point (4, 0) to the point (0, 2). What is its length, to 3 decimal places?

- (A) 4.472
- (B) 4.647
- (C) 12.667
- (D) 16.819

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Treat x as a function of y: g(y) = 4 − y², g′(y) = −2y, which is continuous on [0, 2]. So L = ∫ from 0 to 2 of √(1 + 4y²) dy ≈ 4.647.

(Writing the curve as y = √(4 − x) also works in principle, but dy/dx is undefined at x = 4, where the tangent is vertical. The dy form avoids this.)

- (A) is √20, the straight-line distance between (4, 0) and (0, 2). The curve must be longer than this.
- (C) is ∫ from 0 to 2 of (1 + 4y²) dy = 38/3, which forgets the square root.
- (D) uses the correct integrand but the x-limits 0 to 4, which do not match the variable y.
</details>

## Question 4 (multiple choice · stretch)

A function f has a continuous derivative on [0, 3], with f(0) = 1 and f(3) = 5. Let L be the length of the graph of f from x = 0 to x = 3. Which statement **must** be true?

- (A) L ≥ 5
- (B) L = 5
- (C) L ≥ 7
- (D) L ≤ 7

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The graph joins (0, 1) to (3, 5). The straight-line distance between these points is √(3² + 4²) = 5, and no path between two points is shorter than the straight segment. (In terms of the derivation: the chord sums are always at most the arc length, and the single chord from end to end has length 5.)

- (B) holds only if the graph is the straight line y = 1 + (4/3)x. Any other smooth curve with these end points is longer.
- (C) adds the horizontal change 3 and the vertical change 4. The straight line y = 1 + (4/3)x has length 5 < 7, so (C) need not be true.
- (D) is not forced either. A wiggly graph can be as long as you like: for example, f(x) = 1 + (4/3)x + 2 sin(2πx) also has f(0) = 1 and f(3) = 5, and its length is about 24.472.
</details>

## Question 5 (calculation · core)

Let f(x) = x²/2 − (1/4) ln x.

(a) Show that 1 + (f′(x))² = (x + 1/(4x))².
(b) Find the exact length of the graph of f from x = 2 to x = 4.

<details>
<summary>Worked solution</summary>

**(a)** f′(x) = x − 1/(4x). Then (f′(x))² = x² − 2 · x · 1/(4x) + 1/(16x²) = x² − 1/2 + 1/(16x²).
So 1 + (f′(x))² = x² + 1/2 + 1/(16x²) = (x + 1/(4x))², because (x + 1/(4x))² = x² + 1/2 + 1/(16x²). ✓

**(b)** On [2, 4], x + 1/(4x) > 0, so √((x + 1/(4x))²) = x + 1/(4x) (no absolute value needed). f′ is continuous on [2, 4].
L = ∫ from 2 to 4 of (x + 1/(4x)) dx = [x²/2 + (1/4) ln x] from 2 to 4 = (8 + (1/4) ln 4) − (2 + (1/4) ln 2) = **6 + (1/4) ln 2** (about 6.173).

**Check.** The end points are (2, f(2)) and (4, f(4)), with f(4) − f(2) = 6 − (1/4) ln 2 ≈ 5.827. The chord is √(2² + 5.827²) ≈ 6.160, slightly less than 6.173. ✓ The curve is close to straight here, so the two are close.

Suggested mark points (3): 1 for f′(x) = x − 1/(4x); 1 for expanding (f′)² correctly and showing the perfect square; 1 for the exact length 6 + (1/4) ln 2 with both limits used.

Common error: writing 1 + (f′)² = x² + 1/(16x²) + 1, forgetting the middle term −1/2 of the square.
</details>

## Question 6 (constructed response · core · calculator)

A short section of a fictional roller-coaster track, seen from the side, follows **y = 12 + 8 cos(πx/20)** for 0 ≤ x ≤ 40, where x is horizontal distance and y is height, both in metres.

(a) Write, but do not evaluate, an integral for the length of this section of track.
(b) Find the length of the track section.
(c) A car moves along this section at an average speed of 7.5 metres per second. How long does it take to travel the section?
(d) Without using your answer to (b), show that the length is between 40 m and 65 m.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = −8 · (π/20) sin(πx/20) = −(2π/5) sin(πx/20), which is continuous. So
L = **∫ from 0 to 40 of √(1 + (2π/5)² sin²(πx/20)) dx**.

**(b)** With a calculator, L ≈ **52.826 m**.

**(c)** Time = distance ÷ average speed ≈ 52.826 ÷ 7.5 ≈ **7.044 seconds**. The car travels along the track, so the distance is the arc length, not the horizontal 40 m.

**(d)** Because 0 ≤ sin²(πx/20) ≤ 1, the integrand satisfies 1 ≤ √(1 + (2π/5)² sin²(πx/20)) ≤ √(1 + (2π/5)²) ≈ 1.606. Integrating over an interval of width 40 gives 40 ≤ L ≤ 40 × √(1 + (2π/5)²) ≈ 64.239 < 65. (The lower bound is strict too, since the integrand is greater than 1 except at x = 0, 20 and 40.)

| Point | What earns it |
|---|---|
| 1 | Correct f′(x), including the chain-rule factor π/20 |
| 1 | Correct integral with limits 0 and 40 and the 1 + (f′)² structure |
| 1 | 52.826 m |
| 1 | Time 7.044 s, using the arc length (or the student's (b) value) |
| 1 | Bounds on the integrand from 0 ≤ sin² ≤ 1, multiplied by the width 40, giving 40 and about 64.239 |

Total: 5 points. A common wrong answer to (b) is 72 m, from adding 40 m horizontally and 32 m of total up-and-down movement (∫ of |f′|). That treats the motion as separate horizontal and vertical trips.
</details>

## Question 7 (constructed response · stretch · calculator)

On a fictional park map, a footpath follows the curve **y = x³/30** for 0 ≤ x ≤ 6, where x and y are in hundreds of metres. A walker starts at the origin and walks along the path. Let s(x) be the distance walked along the path when the walker reaches the point with x-coordinate x.

(a) Write an integral expression for s(x).
(b) Find s′(x). Explain why s is increasing, and interpret s′(3) in context.
(c) Find the total length of the path, in metres.
(d) A drinking fountain is to be placed 500 m along the path from the origin. Find its coordinates on the map.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** f′(x) = x²/10, so (f′(x))² = x⁴/100. Using t as the variable of integration:
**s(x) = ∫ from 0 to x of √(1 + t⁴/100) dt**.

**(b)** By the Fundamental Theorem of Calculus, **s′(x) = √(1 + x⁴/100)**. This is always at least 1, so s′(x) > 0 and s is increasing: the further east the walker goes, the further they have walked.
s′(3) = √(1 + 81/100) = √1.81 ≈ 1.345. Near x = 3, the walker covers about 1.345 units of path (hundreds of metres) for each unit of eastward progress.

**(c)** s(6) = ∫ from 0 to 6 of √(1 + t⁴/100) dt ≈ 10.279 hundred metres ≈ **1028 m**. Sense check: the path ends at (6, 7.2), and the straight-line distance is √(6² + 7.2²) ≈ 9.372 hundred metres. The path is longer. ✓

**(d)** 500 m is 5 hundred metres, so solve s(x) = 5, that is ∫ from 0 to x of √(1 + t⁴/100) dt = 5, with a calculator (for example, graph the integral and the line y = 5 and find the intersection). This gives x ≈ 4.097, and y = 4.097³/30 ≈ 2.292. The fountain is at about **(4.097, 2.292)** on the map.

| Point | What earns it |
|---|---|
| 1 | Correct integrand √(1 + t⁴/100) with limits 0 and x |
| 1 | s′(x) = √(1 + x⁴/100) and the reason s is increasing (s′ ≥ 1 > 0) |
| 1 | Interpretation of s′(3) ≈ 1.345 with both quantities named |
| 1 | Total length about 1028 m (10.279 hundred metres), with units |
| 1 | Sets up s(x) = 5 (not s(x) = 500) and finds x ≈ 4.097 |
| 1 | y ≈ 2.292, giving the point |

Total: 6 points. Acceptable alternatives: in (c), 1027.9 m; in (d), a solution found by trial values of the integral, if it is shown to give s(x) ≈ 5. Using 500 instead of 5 in (d) mixes units and earns neither of the last two points.
</details>

## How did you do?

- **Q1 or Q2 wrong:** recheck the integrand √(1 + (f′)²), especially squaring the derivative and keeping the root; see "The arc length formula" and Worked example 1 in the [study guide](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/).
- **Q3 wrong:** reread "Curves written as x = g(y)", and match the limits to the variable.
- **Q4 or Q6(d) wrong:** revisit the chord idea in "Building the formula from straight pieces" and the quick facts after the formula.
- **Q5 wrong:** practise expanding (a − b)² carefully; the middle term is what makes the perfect square.
- **Q6 or Q7 wrong:** compare with Worked example 2 (distance traveled over a ridge), and check units and rounding.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-checklist/).
