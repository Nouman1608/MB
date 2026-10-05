---
resourceId: "mb-ap-calcbc-9.6-practice"
title: "Solving Motion Problems Using Parametric and Vector-Valued Functions: Practice Questions (Calculus BC 9.6)"
description: "Seven original Marlbridge practice questions on planar motion: speed, acceleration, direction, rest, speeding up, displacement, position and total distance, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.6"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Vector-valued functions and their derivatives (Topic 9.4) and integrating them (Topic 9.5)"
prerequisiteResources: ["mb-ap-calcbc-9.6-study-guide"]
learningObjectives:
  - "Find velocity, acceleration and speed for motion in the plane"
  - "Use the signs of the velocity components to describe the direction of motion"
  - "Decide and justify whether the speed is increasing or decreasing"
  - "Find displacement, position and total distance travelled with integrals"
skills: ["1", "3", "4"]
studyMinutes: 55
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–6: no calculator. Question 7: graphing calculator allowed; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.6-study-guide", "mb-ap-calcbc-9.6-revision-notes", "mb-ap-calcbc-9.6-checklist"]
next: "mb-ap-calcbc-9.6-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; no calculator for Questions 1–6; a graphing calculator is allowed for Question 7, with decimals given to 3 decimal places. Notation: r(t) = ⟨x(t), y(t)⟩ is position, v(t) is velocity, a(t) is acceleration, and "∫ from a to b of f(t) dt" is a definite integral.

## Question 1 (multiple choice · foundation)

A particle moves with position r(t) = ⟨t² − 4t, 2t^(3/2)⟩ for t ≥ 0. What is its speed at t = 4?

- (A) 10
- (B) 2√13
- (C) 52
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v(t) = ⟨2t − 4, 3t^(1/2)⟩, so v(4) = ⟨4, 6⟩. Speed = √(4² + 6²) = √52 = 2√13 (about 7.211).

- (A) adds the components, 4 + 6. The length of a vector is not the sum of its components.
- (C) is (x′)² + (y′)² without the square root.
- (D) is the length of the position vector r(4) = ⟨0, 16⟩. That is the distance from the origin, not the speed.
</details>

## Question 2 (multiple choice · foundation)

A particle moves with position r(t) = ⟨4/t, t³ − 2t⟩ for t > 0. What is its acceleration vector at t = 2?

- (A) ⟨−1, 10⟩
- (B) ⟨−1, 12⟩
- (C) ⟨2, 4⟩
- (D) ⟨1, 12⟩

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** x(t) = 4t⁻¹, so x′(t) = −4t⁻² and x″(t) = 8t⁻³; at t = 2, x″ = 8/8 = 1. y′(t) = 3t² − 2 and y″(t) = 6t; at t = 2, y″ = 12. So a(2) = ⟨1, 12⟩.

- (A) is the velocity v(2) = ⟨−1, 10⟩: it stops after one derivative.
- (B) gets y″ right but keeps the minus sign from x′ when differentiating again. The derivative of −4t⁻² is +8t⁻³.
- (C) is the position r(2) = ⟨2, 4⟩.
</details>

## Question 3 (multiple choice · core)

A particle has velocity v(t) = ⟨t² − 4, 3 − t⟩ for 0 < t < 5. On which interval is the particle moving left and up?

- (A) 0 < t < 2
- (B) 2 < t < 3
- (C) 3 < t < 5
- (D) 0 < t < 3

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Left means x′(t) = t² − 4 < 0, which on this domain is 0 < t < 2. Up means y′(t) = 3 − t > 0, which is 0 < t < 3. Both hold on 0 < t < 2.

- (B) On 2 < t < 3, x′ > 0, so the particle moves right and up.
- (C) On 3 < t < 5, x′ > 0 and y′ < 0, so it moves right and down.
- (D) uses only the condition for moving up. It includes 2 < t < 3, where the particle moves right.
</details>

## Question 4 (multiple choice · core)

A particle has velocity v(t) = ⟨6t, 3t² − 3⟩. What is the total distance it travels for 0 ≤ t ≤ 3?

- (A) 9√13
- (B) 36
- (C) 45
- (D) 3132/5

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Speed² = 36t² + (3t² − 3)² = 9t⁴ + 18t² + 9 = 9(t² + 1)², so speed = 3(t² + 1). Distance = ∫ from 0 to 3 of (3t² + 3) dt = [t³ + 3t] from 0 to 3 = 27 + 9 = 36.

- (A) is the length of the displacement. Displacement = ⟨∫ 6t dt, ∫ (3t² − 3) dt⟩ from 0 to 3 = ⟨27, 18⟩, with length √1053 = 9√13 ≈ 32.450. It is shorter than the distance because the particle moves down for 0 < t < 1 and then up.
- (C) integrates x′ + y′ and adds the two components of displacement, 27 + 18.
- (D) integrates speed² = 9(t² + 1)² without the square root, giving 626.4.
</details>

## Question 5 (calculation · core)

A particle moves with position r(t) = ⟨e^(2t) − 4t, 3 sin t⟩ for 0 ≤ t ≤ π.

(a) Find v(t) and a(t).
(b) Find the speed at t = 0. Is the speed increasing or decreasing at t = 0? Justify your answer.
(c) For what values of t is the particle moving to the left?
(d) Is the particle ever at rest for 0 ≤ t ≤ π? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v(t) = ⟨2e^(2t) − 4, 3 cos t⟩ and a(t) = ⟨4e^(2t), −3 sin t⟩.

**(b)** v(0) = ⟨−2, 3⟩, so the speed is √(4 + 9) = **√13**. a(0) = ⟨4, 0⟩. Then x′x″ + y′y″ = (−2)(4) + (3)(0) = −8 < 0, so the **speed is decreasing** at t = 0. (The x-velocity is negative while the x-acceleration is positive, so the particle is slowing in x, and nothing changes in y at that instant.)

**(c)** Left means x′(t) < 0: 2e^(2t) < 4, e^(2t) < 2, t < ½ ln 2. So the particle moves left for **0 ≤ t < ½ ln 2** (about 0 ≤ t < 0.347).

**(d)** No. x′(t) = 0 only at t = ½ ln 2, where y′ = 3 cos(½ ln 2) ≈ 2.822 ≠ 0. (Also y′(t) = 0 only at t = π/2, where x′ = 2e^π − 4 ≠ 0.) The components are never zero at the same time, so the particle is never at rest.

| Point | What earns it |
|---|---|
| 1 | Correct v(t) and a(t) |
| 1 | Speed √13 at t = 0 |
| 1 | Decreasing, justified by x′x″ + y′y″ = −8 < 0 (or by the derivative of speed) |
| 1 | Moving left for 0 ≤ t < ½ ln 2, from x′(t) < 0 |
| 1 | Not at rest, with the reason that x′ and y′ are never both 0 at the same t |

Total: 5 points. A sign chart or the derivative of the speed function is an acceptable justification in (b); "a(0) is positive" alone is not.
</details>

## Question 6 (constructed response · core)

A particle has velocity v(t) = ⟨eᵗ − e⁻ᵗ, 2⟩ for 0 ≤ t ≤ ln 3. At t = 0 it is at (2, 0).

(a) Find r(t) and the exact position at t = ln 3.
(b) Show that the speed of the particle is eᵗ + e⁻ᵗ.
(c) Find the exact total distance travelled for 0 ≤ t ≤ ln 3.
(d) Find the exact length of the displacement vector for 0 ≤ t ≤ ln 3. Explain why it is less than your answer to (c).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x(t) = eᵗ + e⁻ᵗ + C₁ and x(0) = 2 + C₁ = 2, so C₁ = 0. y(t) = 2t + C₂ and C₂ = 0.
**r(t) = ⟨eᵗ + e⁻ᵗ, 2t⟩.** At t = ln 3: e^(ln 3) = 3 and e^(−ln 3) = ⅓, so **r(ln 3) = ⟨10/3, 2 ln 3⟩**.

**(b)** Speed² = (eᵗ − e⁻ᵗ)² + 4 = e^(2t) − 2 + e^(−2t) + 4 = e^(2t) + 2 + e^(−2t) = (eᵗ + e⁻ᵗ)². Since eᵗ + e⁻ᵗ > 0, speed = **eᵗ + e⁻ᵗ**.

**(c)** Distance = ∫ from 0 to ln 3 of (eᵗ + e⁻ᵗ) dt = [eᵗ − e⁻ᵗ] from 0 to ln 3 = (3 − ⅓) − 0 = **8/3** (about 2.667).

**(d)** Displacement = r(ln 3) − r(0) = ⟨10/3 − 2, 2 ln 3⟩ = ⟨4/3, 2 ln 3⟩. Its length is **√(16/9 + 4(ln 3)²)** (about 2.570, less than 8/3 ≈ 2.667). The displacement is the straight line from start to end. The particle's path is curved (the slope dy/dx = 2/(eᵗ − e⁻ᵗ) changes as t changes), and a curved path between two points is longer than the straight line between them.

| Point | What earns it |
|---|---|
| 1 | r(t) = ⟨eᵗ + e⁻ᵗ, 2t⟩ with both constants found from (2, 0) |
| 1 | r(ln 3) = ⟨10/3, 2 ln 3⟩ |
| 1 | Shows speed² = (eᵗ + e⁻ᵗ)² by expanding |
| 1 | Distance 8/3, from the integral of speed |
| 1 | Displacement length √(16/9 + 4(ln 3)²) and the reason it is shorter (straight line versus curved path) |

Total: 5 points. In (d) the equivalent form ⅓√(16 + 36(ln 3)²) is also accepted; the decimal is not required.
</details>

## Question 7 (constructed response · stretch · calculator)

A survey boat moves on a fictional lake. Its position is measured in kilometres, with x east and y north, and t is in hours. For 0 ≤ t ≤ 5 its velocity is

**v(t) = ⟨1 + 0.5√t, 3 − t e^(0.2t)⟩ km/h,**

and at t = 0 the boat is at (1, 12).

(a) Find the boat's greatest y-coordinate for 0 ≤ t ≤ 5. Justify your answer.
(b) Find the speed of the boat at t = 4. Is the speed increasing or decreasing at t = 4? Give a reason.
(c) Find the total distance the boat travels for 0 ≤ t ≤ 5.
(d) How far is the boat from its starting point at t = 5?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** y′(t) = 3 − t e^(0.2t) = 0 at t ≈ 2.008 (calculator). y′ > 0 before this time and y′ < 0 after it, so y has its maximum there. Candidates: y(0) = 12; y(2.008) = 12 + ∫ from 0 to 2.008 of y′(t) dt ≈ 12 + 3.3774 = 15.377; y(5) = 12 + ∫ from 0 to 5 of y′(t) dt = 12 − 10 = 2. The greatest y-coordinate is **about 15.377 km**, at t ≈ 2.008 h.

**(b)** v(4) = ⟨1 + 0.5 · 2, 3 − 4e^0.8⟩ ≈ ⟨2, −5.9022⟩, so the speed is √(4 + 34.836) ≈ **6.232 km/h**.
a(t) = ⟨0.25/√t, −e^(0.2t) − 0.2t e^(0.2t)⟩, so a(4) ≈ ⟨0.125, −4.0060⟩.
x′x″ + y′y″ ≈ (2)(0.125) + (−5.9022)(−4.0060) ≈ 23.894 > 0, so the **speed is increasing** at t = 4.

**(c)** Distance = ∫ from 0 to 5 of √((1 + 0.5√t)² + (3 − t e^(0.2t))²) dt ≈ **19.856 km**.

**(d)** Displacement = ⟨∫ from 0 to 5 of x′(t) dt, ∫ from 0 to 5 of y′(t) dt⟩ ≈ ⟨8.7268, −10⟩. Its length is √(8.7268² + 10²) ≈ **13.272 km**. (The boat is at about (9.727, 2) at t = 5.)

| Point | What earns it |
|---|---|
| 1 | Finds t ≈ 2.008 from y′(t) = 0 and uses the sign change (or a candidates test) |
| 1 | Greatest y ≈ 15.377 km, using 12 + ∫ y′ dt |
| 1 | Speed ≈ 6.232 km/h at t = 4 |
| 1 | Increasing, with a reason based on the sign of x′x″ + y′y″ or the derivative of speed |
| 1 | Distance ≈ 19.856 km from the integral of speed |
| 1 | Distance from start ≈ 13.272 km from the displacement vector |

Total: 6 points. Common errors: answering (d) with the total distance, or (a) with the time instead of the y-coordinate. Units (km, km/h) are expected.
</details>

## How did you do?

- **Q1 or Q2 wrong:** revisit "Derivatives: velocity, speed and direction" in the [study guide](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/).
- **Q3 or Q5(c)–(d) wrong:** work through the sign table in Worked example 1.
- **Q5(b) or Q7(b) wrong:** reread "Is the speed increasing or decreasing?"
- **Q4 or Q6 wrong:** revisit "Integrals: displacement, position and distance", especially the exact example.
- **Q7 wrong:** compare with Worked example 2 (calculator) and the "Choosing the right tool" table.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-checklist/).
