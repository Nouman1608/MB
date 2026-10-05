---
resourceId: "mb-ap-calcbc-9.5-practice"
title: "Integrating Vector-Valued Functions: Practice Questions (Calculus BC 9.5)"
description: "Seven original Marlbridge practice questions on integrating vector-valued functions: definite integrals, initial value problems, acceleration to position and calculator work, with rubrics."
course: "calculus-bc"
unit: 9
topics: ["9.5"]
resourceType: "practice-questions"
calculusScope: "bc-only"
prerequisites:
  - "Vector-valued functions and their derivatives (Topic 9.4), basic antiderivatives and substitution (Topics 6.8 and 6.9)"
prerequisiteResources: ["mb-ap-calcbc-9.5-study-guide"]
learningObjectives:
  - "Evaluate definite and indefinite integrals of vector-valued functions"
  - "Find a particular position or velocity function from a rate vector and an initial condition"
  - "Work from acceleration to position using two initial conditions"
  - "Use a graphing calculator to find a position at a later or earlier time"
skills: ["1", "3", "4"]
studyMinutes: 50
difficulty: "mixed"
calculator: "mixed"
calculatorNote: "Questions 1–3, 5 and 6: no calculator. Questions 4 and 7: graphing calculator allowed; give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.5-study-guide", "mb-ap-calcbc-9.5-revision-notes", "mb-ap-calcbc-9.5-checklist"]
next: "mb-ap-calcbc-9.5-checklist"
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

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. **BC-only material.** Assumptions: angles in radians; e ≈ 2.71828; no calculator for Questions 1–3, 5 and 6; a graphing calculator is allowed for Questions 4 and 7, with decimals given to 3 decimal places. Notation: r(t) = ⟨x(t), y(t)⟩, "∫ from a to b of f(t) dt" is a definite integral, and "[F(t)] from a to b" means F(b) − F(a).

## Question 1 (multiple choice · foundation)

What is ∫ from 0 to 2 of ⟨3t², e^(t/2)⟩ dt?

- (A) ⟨12, e⟩
- (B) ⟨8, ½e − ½⟩
- (C) ⟨8, 2e − 2⟩
- (D) 2e + 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Integrate each component between 0 and 2. ∫ from 0 to 2 of 3t² dt = [t³] from 0 to 2 = 8. ∫ from 0 to 2 of e^(t/2) dt = [2e^(t/2)] from 0 to 2 = 2e − 2. So the integral is the vector ⟨8, 2e − 2⟩.

- (A) evaluates the integrand at t = 2 instead of integrating: ⟨3 · 4, e¹⟩.
- (B) uses ½ e^(t/2) as the antiderivative. Its derivative is ¼ e^(t/2), so the chain-rule factor has been applied the wrong way round.
- (D) adds the two components, 8 + (2e − 2). The integral of a vector is a vector, not a single number.
</details>

## Question 2 (multiple choice · core)

A particle has velocity r′(t) = ⟨cos t, −2 sin(2t)⟩, and r(0) = ⟨3, 1⟩. What is r(π/2)?

- (A) ⟨1, −2⟩
- (B) ⟨4, 3⟩
- (C) ⟨4, 2⟩
- (D) ⟨4, −1⟩

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Integrate: x(t) = sin t + C₁ and y(t) = cos(2t) + C₂ (check: d/dt cos(2t) = −2 sin(2t)). From r(0) = ⟨3, 1⟩: C₁ = 3 and 1 + C₂ = 1, so C₂ = 0. Then r(π/2) = ⟨sin(π/2) + 3, cos π⟩ = ⟨4, −1⟩.

- (A) is the net change ∫ from 0 to π/2 of r′(t) dt = ⟨1, −2⟩. It forgets to add the starting position ⟨3, 1⟩.
- (B) uses −cos(2t) as the antiderivative of −2 sin(2t) (a sign error). Then C₂ = 2 and y(π/2) = 1 + 2 = 3.
- (C) uses the same constant, 3, for both components, so y(t) = cos(2t) + 3 and y(π/2) = 2. Each component needs its own constant.
</details>

## Question 3 (multiple choice · core)

A particle has acceleration a(t) = ⟨6t, −2⟩. At t = 0 its velocity is ⟨1, 5⟩ and its position is ⟨0, 3⟩. What is its position at t = 1?

- (A) ⟨2, 7⟩
- (B) ⟨1, 2⟩
- (C) ⟨2, 4⟩
- (D) ⟨4, 3⟩

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** First integration: v(t) = ⟨3t² + 1, −2t + 5⟩, using v(0) = ⟨1, 5⟩. Second integration: r(t) = ⟨t³ + t, −t² + 5t + 3⟩, using r(0) = ⟨0, 3⟩. So r(1) = ⟨1 + 1, −1 + 5 + 3⟩ = ⟨2, 7⟩.

- (B) leaves out the starting velocity: v(t) = ⟨3t², −2t⟩ gives r(t) = ⟨t³, −t² + 3⟩ and r(1) = ⟨1, 2⟩.
- (C) leaves out the starting position: ⟨t³ + t, −t² + 5t⟩ at t = 1 is ⟨2, 4⟩.
- (D) is the velocity v(1) = ⟨4, 3⟩, not the position. It stops after one integration.
</details>

## Question 4 (multiple choice · stretch · calculator)

A particle moves so that dx/dt = √(1 + t³). At t = 1 the particle's x-coordinate is 2. What is its x-coordinate at t = 0?

- (A) 0.586
- (B) 0.889
- (C) 1.111
- (D) 3.111

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Work back in time: x(0) = x(1) − ∫ from 0 to 1 of √(1 + t³) dt. A calculator gives ∫ from 0 to 1 of √(1 + t³) dt ≈ 1.1114, so x(0) ≈ 2 − 1.1114 = 0.889. The rate is positive, so x was increasing, and x(0) must be less than 2. ✓

- (A) uses a tangent-line estimate, 2 − x′(1) · 1 = 2 − √2 ≈ 0.586, instead of the exact accumulated change.
- (C) is the value of the integral alone. It is the change in x, not the x-coordinate.
- (D) adds the change instead of subtracting it: 2 + 1.111. Going back in time, the accumulated change must be taken away, because x(1) = x(0) + ∫ from 0 to 1 of x′(t) dt.
</details>

## Question 5 (calculation · core)

A particle has velocity vector r′(t) = ⟨2/(2t + 1), 6t√(t² + 1)⟩ for t ≥ 0, and r(0) = ⟨1, −2⟩.

(a) Find r(t).
(b) Find the exact position of the particle at t = √3.
(c) Verify your answer to (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x-component: ∫ 2/(2t + 1) dt = ln(2t + 1) + C₁ (substitute u = 2t + 1, du = 2 dt). Since 2t + 1 > 0 for t ≥ 0, no absolute value is needed. x(0) = ln 1 + C₁ = 1, so C₁ = 1.

y-component: with u = t² + 1, du = 2t dt, ∫ 6t√(t² + 1) dt = ∫ 3√u du = 2u^(3/2) = 2(t² + 1)^(3/2) + C₂. y(0) = 2 + C₂ = −2, so C₂ = −4.

**r(t) = ⟨ln(2t + 1) + 1, 2(t² + 1)^(3/2) − 4⟩**

**(b)** At t = √3: t² + 1 = 4, and 4^(3/2) = 8. So r(√3) = **⟨1 + ln(1 + 2√3), 12⟩** (about ⟨2.496, 12⟩).

**(c)** d/dt[ln(2t + 1) + 1] = 2/(2t + 1) ✓. d/dt[2(t² + 1)^(3/2) − 4] = 2 · (3/2)(t² + 1)^(1/2) · 2t = 6t√(t² + 1) ✓. r(0) = ⟨0 + 1, 2 − 4⟩ = ⟨1, −2⟩ ✓.

| Point | What earns it |
|---|---|
| 1 | Correct antiderivative of the x-component, ln(2t + 1) |
| 1 | Correct antiderivative of the y-component, 2(t² + 1)^(3/2) |
| 1 | Two separate constants found from r(0): C₁ = 1 and C₂ = −4 |
| 1 | Exact position ⟨1 + ln(1 + 2√3), 12⟩ |
| 1 | Verification: both derivatives and the initial value checked |

Total: 5 points. Acceptable alternative: the accumulation form r(√3) = ⟨1, −2⟩ + ∫ from 0 to √3 of r′(t) dt, evaluated exactly, earns the first four points.
</details>

## Question 6 (constructed response · core)

A particle moves in the plane with acceleration a(t) = ⟨−4 sin(2t), 2⟩ for t ≥ 0. At t = 0 its velocity is ⟨2, −3⟩ and its position is (1, 0).

(a) Find the velocity vector v(t).
(b) Find the position vector r(t).
(c) Find the time t > 0 at which the particle is on the x-axis, and give its exact x-coordinate at that time.
(d) A student writes v(t) = ⟨2 cos(2t) + 2, 2t − 3⟩. Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ∫ −4 sin(2t) dt = 2 cos(2t) + C₁. At t = 0: 2 + C₁ = 2, so C₁ = 0. ∫ 2 dt = 2t + C₂, and C₂ = −3.
**v(t) = ⟨2 cos(2t), 2t − 3⟩**

**(b)** ∫ 2 cos(2t) dt = sin(2t) + D₁; at t = 0, D₁ = 1. ∫ (2t − 3) dt = t² − 3t + D₂; at t = 0, D₂ = 0.
**r(t) = ⟨sin(2t) + 1, t² − 3t⟩**

**(c)** On the x-axis, y(t) = 0: t² − 3t = t(t − 3) = 0, so t = 0 or t = 3. For t > 0, **t = 3**, and x(3) = **1 + sin 6** (about 0.721).

**(d)** The student set the constant equal to the starting velocity, 2, without checking. But 2 cos(2t) already equals 2 at t = 0, so the student's function gives v(0) = ⟨4, −3⟩, not ⟨2, −3⟩. The constant must be chosen so that the whole component equals 2 at t = 0, which gives C₁ = 0.

| Point | What earns it |
|---|---|
| 1 | Correct v(t), with both constants found from v(0) |
| 1 | Correct r(t), with both constants found from r(0) |
| 1 | Sets y(t) = 0 and identifies t = 3 |
| 1 | x(3) = 1 + sin 6, using the position function from (b) |
| 1 | Explains that the student's v(0) would be ⟨4, −3⟩, so the constant is wrong |

Total: 5 points. A correct (c) that follows from an incorrect r(t) in (b) still earns the (c) points if the method is right.
</details>

## Question 7 (constructed response · stretch · calculator)

A small remote-controlled rover crosses a fictional sports field. Its position is measured in metres, with x east and y north, and t is in seconds. Its velocity components are

**dx/dt = 3 sin(√t)  and  dy/dt = ln(1 + t²) − 1, for 0 ≤ t ≤ 4.**

At t = 1 the rover is at (2, 5).

(a) Find the rover's position at t = 4.
(b) Find the rover's y-coordinate at t = 0. Explain why your answer is greater than 5.
(c) Explain why the rover's x-coordinate increases throughout 1 ≤ t ≤ 4.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x(4) = 2 + ∫ from 1 to 4 of 3 sin(√t) dt ≈ 2 + 8.6425 = **10.643**.
y(4) = 5 + ∫ from 1 to 4 of (ln(1 + t²) − 1) dt ≈ 5 + 2.7205 = **7.721**.
Position at t = 4: about **(10.643, 7.721)** m.

**(b)** y(0) = y(1) − ∫ from 0 to 1 of (ln(1 + t²) − 1) dt ≈ 5 − (−0.7361) = **5.736** m.
For 0 ≤ t < 1, t² < 1, so ln(1 + t²) < ln 2 < 1 and dy/dt < 0. The y-coordinate was decreasing from t = 0 to t = 1, so it must have been larger than 5 at t = 0.

**(c)** For 1 ≤ t ≤ 4, 1 ≤ √t ≤ 2. Since 0 < 2 < π, sin(√t) > 0 on this interval, so dx/dt = 3 sin(√t) > 0. A positive rate of change means x(t) is increasing.

| Point | What earns it |
|---|---|
| 1 | Sets up x(4) = 2 + ∫ from 1 to 4 of dx/dt dt (starting value and limits) |
| 1 | x(4) ≈ 10.643 and y(4) ≈ 7.721 |
| 1 | y(0) = 5 − ∫ from 0 to 1 of dy/dt dt, with the subtraction |
| 1 | y(0) ≈ 5.736, explained by dy/dt < 0 on [0, 1) |
| 1 | Justifies dx/dt > 0 using 1 ≤ √t ≤ 2 < π, and links a positive derivative to increasing |

Total: 5 points. Units (metres) are expected in (a) and (b). An answer of 4.264 for (b) adds the integral instead of subtracting it and does not earn the fourth point.
</details>

## How did you do?

- **Q1 or Q5 wrong:** check each component separately, including chain-rule factors; see "Integrate one component at a time" in the [study guide](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/).
- **Q2 wrong:** revisit Worked example 1, especially separate constants and the net-change trap.
- **Q3 or Q6 wrong:** work through Worked example 2 (acceleration to position, two initial conditions).
- **Q4 or Q7 wrong:** compare with Worked example 3 and the note on going backwards in time.

Then tick off the [topic checklist](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-checklist/).
