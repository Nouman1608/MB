---
resourceId: "mb-ap-physcm-5.1-practice"
title: "Rotational Kinematics: Practice Questions (Physics C: Mechanics 5.1)"
description: "Seven original Marlbridge calculus-based practice questions on angular velocity and acceleration as derivatives, integrating α(t), rotation graphs, scaling and sensor data."
course: "physics-c-mechanics"
unit: 5
topics: ["5.1"]
resourceType: "practice-questions"
prerequisites:
  - "Differentiating and integrating polynomials and exponentials"
prerequisiteResources: ["mb-ap-physcm-5.1-study-guide"]
learningObjectives:
  - "Differentiate θ(t) to find ω(t) and α(t), and integrate α(t) with initial conditions"
  - "Convert between rpm, rev and radian units before calculating"
  - "Describe rotation as clockwise or counterclockwise and as speeding up or slowing down from the signs of ω and α"
  - "Sketch θ–t, ω–t and α–t graphs and use slopes and areas"
  - "Predict how time and angle scale when α or the final ω changes, and analyse rotation-sensor data"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic, logarithms and exponentials. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.1-study-guide", "mb-ap-physcm-5.1-revision-notes", "mb-ap-physcm-5.1-checklist"]
next: "mb-ap-physcm-5.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive sense. Coefficients in θ(t), ω(t) and α(t) carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, θ is in rad, ω in rad/s, α in rad/s² and t in s, so each numerical coefficient carries whatever unit makes the term correct. 1 rev = 2π rad. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **counterclockwise as positive**. The angular position of a rotating searchlight is θ(t) = 3.0t + 0.50t³. What is its angular velocity at t = 2.0 s?

- (A) 5.0 rad/s
- (B) 6.0 rad/s
- (C) 9.0 rad/s
- (D) 10 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** ω = dθ/dt = 3.0 + 1.5t², so ω(2.0) = 3.0 + 6.0 = 9.0 rad/s, counterclockwise.

- (A) divides the angle by the time: θ(2.0) = 10 rad, and 10 ÷ 2.0 = 5.0 rad/s. That is the average angular velocity from 0 to 2.0 s, not the instantaneous value.
- (B) differentiates twice: α = 3.0t = 6.0 rad/s² at 2.0 s. That is the angular acceleration, with the wrong unit.
- (D) is θ(2.0) itself, an angle in rad, not a rate.
</details>

## Question 2 (multiple choice · core)

A cordless drill starts from rest and reaches 2400 rev/min in 0.80 s with constant angular acceleration. What is the size of its angular acceleration?

- (A) 50 rad/s²
- (B) 157 rad/s²
- (C) 314 rad/s²
- (D) 3000 rad/s²

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Convert first: ω = 2400 × 2π ÷ 60 ≈ 251 rad/s. Then α = Δω/Δt = 251 ÷ 0.80 ≈ 314 rad/s² (about 310 rad/s² to 2 s.f.).

- (A) converts minutes to seconds but not revolutions to radians: 40 rev/s ÷ 0.80 s = 50 rev/s², then labels it rad/s².
- (B) divides the *average* angular velocity (125.7 rad/s) by the time. α is the change in ω over the time, and ω changes from 0 to 251 rad/s.
- (D) skips the unit conversion entirely: 2400 ÷ 0.80 = 3000, in rev/(min·s).
</details>

## Question 3 (multiple choice · core)

Take **counterclockwise as positive**. At one instant a rotor has ω = −5.0 rad/s and α = +2.0 rad/s². Which statement describes the rotor at this instant?

- (A) It is turning clockwise and spinning slower.
- (B) It is turning clockwise and spinning faster.
- (C) It is turning counterclockwise and spinning slower.
- (D) It is turning counterclockwise and spinning faster.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** The negative ω means the rotor turns clockwise. ω and α have opposite signs, so the size of ω is decreasing: the rotor is spinning slower.

- (B) ignores the sign of α. A clockwise rotor spins faster only if α is also clockwise (negative here).
- (C) reads the direction of rotation from α instead of ω. α gives the direction of the *change* in ω, not of the rotation.
- (D) makes both errors: positive α does not mean counterclockwise rotation or speeding up.
</details>

## Question 4 (calculation · core)

Take **counterclockwise as positive**. A lathe spindle has angular velocity ω₀ = 2.0 rad/s at t = 0 and θ₀ = 0. While its motor ramps up, α(t) = 4.0t − 0.50t² for 0 ≤ t ≤ 4.0 s. Find (a) ω(t), (b) θ(t), (c) ω and θ at t = 4.0 s, and (d) the number of revolutions in the 4.0 s.

<details>
<summary>Worked solution</summary>

1. **(a)** ω = 2.0 + ∫₀ᵗ (4.0t − 0.50t²) dt = **2.0 + 2.0t² − t³/6** (rad/s).
2. **(b)** θ = 0 + ∫₀ᵗ (2.0 + 2.0t² − t³/6) dt = **2.0t + (2/3)t³ − t⁴/24** (rad).
3. **(c)** ω(4.0) = 2.0 + 32 − 10.67 ≈ **23 rad/s**. θ(4.0) = 8.0 + 42.67 − 10.67 = **40 rad**.
4. **(d)** 40 ÷ 2π ≈ **6.4 revolutions**.

Suggested mark points (4): 1 for integrating α with ω₀ = 2.0 rad/s included; 1 for integrating ω to get θ(t); 1 for both values at 4.0 s; 1 for converting rad to revolutions.

Common error: using ω = ω₀ + αt with α(0) = 0, which says the spindle never speeds up. α changes with time, so you must integrate.
</details>

## Question 5 (graphs · core)

Take **counterclockwise as positive**. A robotic welding platform starts from rest at θ = 0. It speeds up with constant angular acceleration to 6.0 rad/s in 3.0 s, turns at a steady 6.0 rad/s for 4.0 s, then slows with constant angular acceleration to rest in 2.0 s.

(a) Sketch the ω–t graph and the α–t graph for the 9.0 s, with values on both axes.
(b) Find the total angle turned, in rad and in revolutions.
(c) Describe the shape of the θ–t graph in each of the three stages.
(d) Explain why a description of this motion uses angular quantities rather than a single velocity for the platform.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** ω–t: a straight line from (0, 0) to (3.0 s, 6.0 rad/s), a horizontal line at 6.0 rad/s to 7.0 s, then a straight line down to (9.0 s, 0). α–t: +2.0 rad/s² from 0 to 3.0 s, 0 from 3.0 to 7.0 s, −3.0 rad/s² from 7.0 to 9.0 s (three horizontal segments with jumps between them).

**(b)** Area under ω–t: ½(3.0)(6.0) + (4.0)(6.0) + ½(2.0)(6.0) = 9.0 + 24 + 6.0 = **39 rad**, which is 39 ÷ 2π ≈ **6.2 revolutions**.

**(c)** 0–3.0 s: curving upward (concave up), slope increasing from 0. 3.0–7.0 s: a straight line of slope 6.0 rad/s. 7.0–9.0 s: curving over (concave down), slope falling to 0, ending flat at θ = 39 rad. The graph has no sharp corners, because ω does not jump.

**(d)** The platform is a rigid system: points on opposite sides move in opposite directions and points at different distances from the axis move at different speeds, so no single velocity describes it. Every point does turn through the same angle, so θ, ω and α describe the whole platform.

| Point | What earns it |
|---|---|
| 1 | (a) ω–t graph with three straight segments and correct values |
| 1 | (a) α–t graph with +2.0, 0 and −3.0 rad/s² in the right intervals |
| 1 | (b) 39 rad from areas, and about 6.2 rev |
| 1 | (c) concave up, straight, concave down, with slopes matching ω |
| 1 | (d) different points move differently, but all share one θ, ω, α |

**Alternative method for (b).** Using θ = ½(ω₀ + ω)t for each stage gives the same three values.
</details>

## Question 6 (constructed response · stretch)

Take **counterclockwise as positive**. A disc spinning at 40 rad/s is slowed by a magnetic brake. The brake is modelled by α = −kω, where k is a positive constant (you do not need to know where this model comes from). A rotary sensor records:

| t (s) | 0 | 2.0 | 4.0 | 6.0 | 8.0 |
|---|---|---|---|---|---|
| ω (rad/s) | 40.0 | 26.8 | 18.0 | 12.0 | 8.1 |

(a) Starting from α = dω/dt, show that the model gives ω = ω₀e^(−kt).
(b) State what to plot against what to obtain a straight line if the model is correct, and what the slope means.
(c) Use the data to find k, with its unit.
(d) Find the angle the disc turns through in the first 8.0 s.
(e) A student says the disc never stops, so it must turn through an infinite angle. Evaluate this claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** dω/dt = −kω, so dω/ω = −k dt. Integrate from (0, ω₀) to (t, ω): ln(ω/ω₀) = −kt, so **ω = ω₀e^(−kt)**.

**(b)** Plot **ln ω (vertical) against t (horizontal)**. The model gives ln ω = ln ω₀ − kt: a straight line with slope −k and intercept ln ω₀.

**(c)** ln ω values: 3.69, 3.29, 2.89, 2.48, 2.09. The slope is (2.09 − 3.69) ÷ 8.0 ≈ −0.20 s⁻¹, and a best-fit line gives the same. So **k ≈ 0.20 s⁻¹**.

**(d)** θ = ∫₀⁸ 40e^(−0.20t) dt = (40 ÷ 0.20)(1 − e^(−1.6)) = 200 × 0.798 ≈ **160 rad** (about 25 rev).

**(e)** The claim is **wrong**. The total angle is ∫₀^∞ ω₀e^(−kt) dt = ω₀/k = 40 ÷ 0.20 = **200 rad**, a finite value. ω gets small so fast that the extra angle added after any time is limited. (In a real disc, friction would also stop it completely.)

| Point | What earns it |
|---|---|
| 1 | (a) Separates variables and integrates with the initial condition ω₀ |
| 1 | (b) ln ω against t, slope identified as −k |
| 1 | (c) k ≈ 0.20 s⁻¹ with unit |
| 1 | (d) 160 rad by integrating ω(t) (carry forward an incorrect k) |
| 1 | (e) Total angle ω₀/k = 200 rad, so the claim fails |

**Alternative method for (c).** Each 2.0 s interval multiplies ω by about 0.67, so e^(−2.0k) ≈ 0.67 and k ≈ 0.20 s⁻¹. This earns the point.
</details>

## Question 7 (explanation · stretch)

Take **counterclockwise as positive**. Two identical rotors, A and B, start from rest and each speed up with constant angular acceleration to the same final angular velocity, 24 rad/s. Rotor B's angular acceleration is twice rotor A's.

A student says: "B reaches 24 rad/s in half the time, so it turns through a quarter of the angle, because angle depends on time squared."

Evaluate the claim. Support your answer with an equation and with a sketch of the two ω–t graphs. Then check it with α_A = 4.0 rad/s².

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**Model answer.** The first part is correct: from rest, t = ω/α, so doubling α halves the time.

The second part is wrong. θ = ½αt² does depend on t², but α has doubled too: ½(2α)(t/2)² = ¼αt², which is **half** of ½αt², not a quarter. More directly, Δθ = ω²/(2α): with the same final ω, doubling α **halves** the angle.

**Graphs.** Both ω–t graphs are straight lines from the origin to 24 rad/s. B's line is twice as steep and reaches 24 rad/s at half the time. Each area is a triangle of the same height; B's base is half as long, so its area (the angle) is half as big.

**Check.** A: t = 24 ÷ 4.0 = 6.0 s, Δθ = 24² ÷ (2 × 4.0) = 72 rad. B: t = 3.0 s, Δθ = 24² ÷ (2 × 8.0) = 36 rad. The ratio is 1/2.

| Point | What earns it |
|---|---|
| 1 | Agrees that the time halves, using t = ω/α |
| 1 | Shows the angle halves (Δθ = ω²/2α, or both factors in ½αt²) |
| 1 | Identifies the student's error: ignoring that α also doubled |
| 1 | Sketch: two straight lines to the same height, B's base half as long, area compared |
| 1 | Numerical check: 72 rad and 36 rad |
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Angular velocity and angular acceleration as derivatives" and the sign chart in Worked example 1 of the [study guide](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-study-guide/).
- **Q2 wrong:** convert rpm to rad/s before any calculation (see the same section).
- **Q4 or Q6 incomplete:** revisit Worked example 2. Add initial conditions, and integrate whenever α changes.
- **Q5 or Q7 incomplete:** use the graph rules (slope gives α, area gives Δθ) and "Predicting changes" in the study guide.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-1-rotational-kinematics-checklist/).
