---
resourceId: "mb-ap-calcbc-9.7-practice"
title: "Defining Polar Coordinates and Differentiating in Polar Form: Practice Questions (Calculus BC 9.7)"
description: "Seven original Marlbridge practice questions on polar coordinates: converting points and equations, slopes, tangents, concavity and the meaning of dr/dθ, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.7"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Parametric dy/dx and d²y/dx² (Topics 9.1 and 9.2), the product rule and unit-circle values"
prerequisiteResources: ["mb-ap-calcbc-9.7-study-guide"]
learningObjectives:
  - "Convert between polar and rectangular coordinates and equations"
  - "Find dy/dx, tangent lines and d²y/dx² for polar curves"
  - "Locate horizontal tangents and check the other derivative"
  - "Interpret dr/dθ and dy/dθ in words"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: graphing calculator allowed in radian mode; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.7-study-guide", "mb-ap-calcbc-9.7-revision-notes", "mb-ap-calcbc-9.7-checklist"]
next: "mb-ap-calcbc-9.7-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; no calculator for Questions 1–6; a graphing calculator is allowed for Question 7, with decimals given to 3 decimal places. Notation: for a polar curve r = f(θ), x = r cos θ and y = r sin θ, and r′ means dr/dθ.

## Question 1 (multiple choice · foundation)

What are the rectangular coordinates of the point with polar coordinates (−4, 2π/3)?

- (A) (−2, 2√3)
- (B) (2, −2√3)
- (C) (−2√3, 2)
- (D) (−2, −2√3)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** x = r cos θ = −4 cos(2π/3) = −4(−½) = 2 and y = r sin θ = −4 sin(2π/3) = −4(√3/2) = −2√3. A negative r points the opposite way to the ray at 2π/3, into the fourth quadrant, which matches (2, −2√3).

- (A) is the point (4, 2π/3): it ignores the minus sign on r.
- (C) swaps cos and sin: it computes x = r sin θ and y = r cos θ.
- (D) uses cos(2π/3) = +½ instead of −½, so only the x-coordinate has the wrong sign.
</details>

## Question 2 (multiple choice · foundation)

Which polar equation describes the same curve as x² + y² = 8y?

- (A) r = 8 sin θ
- (B) r = 8 cos θ
- (C) r = 4 sin θ
- (D) r² = 8 sin θ

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Substitute x² + y² = r² and y = r sin θ: r² = 8r sin θ. Dividing by r gives r = 8 sin θ. (The pole, r = 0, is not lost: r = 8 sin θ passes through it at θ = 0.) The curve is the circle x² + (y − 4)² = 16.

- (B) uses y = r cos θ, which gives the circle x² + y² = 8x instead.
- (C) halves the coefficient, perhaps confusing the radius 4 with the coefficient. r = 4 sin θ is x² + y² = 4y.
- (D) replaces y by sin θ instead of r sin θ, so the r on the right is lost.
</details>

## Question 3 (multiple choice · core)

What is the slope of the tangent line to the curve r = 4 cos 2θ at θ = π/6?

- (A) −4√3
- (B) √3/3
- (C) √3/7
- (D) 7√3/3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** At θ = π/6: r = 4 cos(π/3) = 2 and r′ = −8 sin 2θ = −8(√3/2) = −4√3.
dx/dθ = r′ cos θ − r sin θ = (−4√3)(√3/2) − 2(½) = −6 − 1 = −7.
dy/dθ = r′ sin θ + r cos θ = (−4√3)(½) + 2(√3/2) = −2√3 + √3 = −√3.
dy/dx = (−√3) ÷ (−7) = √3/7.

- (A) is dr/dθ, the rate of change of r, not the slope of the curve.
- (B) is tan(π/6), the slope of the ray from the pole to the point, not of the tangent.
- (D) divides the wrong way round: (dx/dθ) ÷ (dy/dθ) = 7/√3 = 7√3/3.
</details>

## Question 4 (multiple choice · stretch)

A polar curve r = f(θ) has f(1.2) = −0.8 and f′(1.2) = 1.5. As θ increases through 1.2, the distance between the point (f(θ), θ) and the pole is

- (A) increasing, at 1.5 units per radian
- (B) decreasing, at 1.5 units per radian
- (C) decreasing, at 0.8 units per radian
- (D) increasing, at 0.8 units per radian

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The distance from the pole is |r|. Here r = −0.8 < 0, so near θ = 1.2 the distance is −r, and its rate of change is −r′ = −1.5. The distance is decreasing at 1.5 units per radian. In short: r and dr/dθ have opposite signs, so the point moves towards the pole.

- (A) reads dr/dθ > 0 as "moving away", which is only true when r > 0.
- (C) and (D) use the value of r, 0.8, as if it were a rate. The rate comes from f′, not f.
</details>

## Question 5 (calculation · core)

For the spiral r = 2e^(θ/2), find dx/dθ, dy/dθ and dy/dx at θ = π/2. Then write the equation of the tangent line at that point.

<details>
<summary>Worked solution</summary>

1. r = 2e^(θ/2), so r′ = e^(θ/2) (chain rule). At θ = π/2: r = 2e^(π/4), r′ = e^(π/4), cos θ = 0, sin θ = 1.
2. dx/dθ = r′ cos θ − r sin θ = 0 − 2e^(π/4) = **−2e^(π/4)**.
3. dy/dθ = r′ sin θ + r cos θ = e^(π/4) + 0 = **e^(π/4)**.
4. dy/dx = e^(π/4) ÷ (−2e^(π/4)) = **−½**.
5. The point: x = r cos(π/2) = 0, y = r sin(π/2) = 2e^(π/4) (about 4.387).
6. Tangent line: **y = 2e^(π/4) − ½x**.

Suggested mark points (3): 1 for r′ = e^(θ/2) with correct dx/dθ and dy/dθ at π/2; 1 for dy/dx = −½; 1 for the point (0, 2e^(π/4)) and a correct tangent line.

Common error: using r′ = 2e^(θ/2) (chain-rule factor ½ lost) gives dx/dθ = −2e^(π/4), dy/dθ = 2e^(π/4) and a slope of −1.
</details>

## Question 6 (constructed response · core)

Consider the curve r = 2 − sin θ for 0 ≤ θ < 2π.

(a) Find dr/dθ at θ = π/6. Is the point moving towards or away from the pole as θ increases through π/6? Give a reason.
(b) Show that dy/dθ = 2 cos θ (1 − sin θ). Hence find the rectangular coordinates of every point where the curve has a horizontal tangent.
(c) Find the equation of the tangent line at θ = 0.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dr/dθ = −cos θ, so at π/6, dr/dθ = −√3/2. Also r(π/6) = 2 − ½ = 3/2 > 0. Since r > 0 and dr/dθ < 0, the point is **moving towards the pole**.

**(b)** dy/dθ = r′ sin θ + r cos θ = −cos θ sin θ + (2 − sin θ) cos θ = cos θ (2 − 2 sin θ) = **2 cos θ (1 − sin θ)**.
dy/dθ = 0 when cos θ = 0 or sin θ = 1, so θ = π/2 or 3π/2.
Check dx/dθ = r′ cos θ − r sin θ = −cos²θ − (2 − sin θ) sin θ:
- θ = π/2: dx/dθ = 0 − (1)(1) = −1 ≠ 0. r = 1, point **(0, 1)**.
- θ = 3π/2: dx/dθ = 0 − (3)(−1) = 3 ≠ 0. r = 3, point **(0, −3)**.
Both are horizontal tangents.

**(c)** At θ = 0: r = 2, r′ = −1. dx/dθ = (−1)(1) − 2(0) = −1; dy/dθ = (−1)(0) + 2(1) = 2. dy/dx = 2 ÷ (−1) = −2. The point is (2, 0). Tangent: **y = −2(x − 2)**, that is y = −2x + 4.

| Point | What earns it |
|---|---|
| 1 | dr/dθ = −√3/2 at θ = π/6 |
| 1 | "Towards the pole", with the reason that r > 0 and dr/dθ < 0 |
| 1 | Correct derivation of dy/dθ = 2 cos θ (1 − sin θ) using the product rule |
| 1 | θ = π/2 and 3π/2, with dx/dθ checked to be non-zero at both |
| 1 | Points (0, 1) and (0, −3) |
| 1 | Tangent line y = −2(x − 2) at (2, 0) |

Total: 6 points. A reason in (a) that mentions only the sign of dr/dθ, without r, does not earn the second point. In (b), stating the angles without checking dx/dθ does not earn the fourth point.
</details>

## Question 7 (constructed response · stretch · calculator)

An ant walks on a table along the polar curve r = θ + 2 cos θ for 0 ≤ θ ≤ π, where r is in centimetres and a sugar cube sits at the pole.

(a) Find dr/dθ at θ = 2.5. Is the ant moving towards or away from the sugar cube at that moment? Give a reason.
(b) Find dy/dx at θ = 2.5.
(c) Find d²y/dx² at θ = 2.5. Is the path concave up or concave down there?
(d) Without a calculator, find the greatest distance between the ant and the sugar cube for 0 ≤ θ ≤ π. Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dr/dθ = 1 − 2 sin θ. At θ = 2.5: dr/dθ ≈ **−0.197**. r(2.5) = 2.5 + 2 cos 2.5 ≈ 0.898 > 0. Since r > 0 and dr/dθ < 0, the ant is **moving towards** the sugar cube.

**(b)** dx/dθ = r′ cos θ − r sin θ ≈ −0.379 and dy/dθ = r′ sin θ + r cos θ ≈ −0.837. So dy/dx ≈ (−0.837) ÷ (−0.379) ≈ **2.206**.

**(c)** d²y/dx² = [d/dθ (dy/dx)] ÷ (dx/dθ) ≈ **10.155**. Positive, so the path is **concave up** at θ = 2.5.

**(d)** On 0 ≤ θ ≤ π, r ≥ 0 (its smallest value is about 0.886), so the distance is r. dr/dθ = 1 − 2 sin θ = 0 when sin θ = ½: θ = π/6 or 5π/6. Compare candidates:

| θ | r |
|---|---|
| 0 | 2 |
| π/6 | π/6 + √3 ≈ 2.256 |
| 5π/6 | 5π/6 − √3 ≈ 0.886 |
| π | π − 2 ≈ 1.142 |

The greatest distance is **π/6 + √3 cm (about 2.256 cm)**, at θ = π/6 (Candidates Test on a closed interval).

| Point | What earns it |
|---|---|
| 1 | dr/dθ ≈ −0.197 |
| 1 | "Towards", with the reason r > 0 and dr/dθ < 0 |
| 1 | dy/dx ≈ 2.206 from (dy/dθ) ÷ (dx/dθ) |
| 1 | d²y/dx² ≈ 10.155 and "concave up" |
| 1 | Critical values θ = π/6 and 5π/6 from dr/dθ = 0 |
| 1 | Maximum π/6 + √3, justified by comparing values at the critical points and endpoints |

Total: 6 points. Answers within 0.001 of these values are accepted. A common wrong answer to (b) is −0.197 (dr/dθ) or tan 2.5 ≈ −0.747 (the slope of the ray to the point); neither is the slope of the path. In (d), noting that r ≥ 0 on the interval (so distance equals r) is part of a complete justification.
</details>

## How did you do?

- **Q1 or Q2 wrong:** reread "What polar coordinates are" and "Polar curves and equations" in the [study guide](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-study-guide/), especially negative r.
- **Q3 or Q5 wrong:** rebuild dx/dθ and dy/dθ with the product rule, as in Worked example 1.
- **Q4 or Q6(a) wrong:** see "Three derivatives, three meanings": compare the signs of r and dr/dθ.
- **Q6(b) wrong:** check the other derivative is non-zero (Worked example 1(d)).
- **Q7 wrong:** compare with Worked example 2, and check your calculator is in radian mode.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-checklist/).
