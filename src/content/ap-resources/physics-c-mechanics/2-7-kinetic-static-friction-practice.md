---
resourceId: "mb-ap-physcm-2.7-practice"
title: "Kinetic and Static Friction: Practice Questions (Physics C: Mechanics 2.7)"
description: "Seven original Marlbridge practice questions on kinetic and static friction: normal force, direction of friction, slip tests, slopes, a varying coefficient and sled data."
course: "physics-c-mechanics"
unit: 2
topics: ["2.7"]
resourceType: "practice-questions"
prerequisites:
  - "Newton's second law along two perpendicular axes"
  - "Integration with the chain rule a_x = v_x dv_x/dx (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-2.7-study-guide"]
learningObjectives:
  - "Calculate kinetic friction from a normal force found with Newton's second law"
  - "Decide the direction of friction from relative motion of the surfaces"
  - "Test whether an object slips and find static friction when it does not"
  - "Use graphed data to find a coefficient of friction and plan a measurement"
  - "Derive the motion of an object when friction varies with position"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.7-study-guide", "mb-ap-physcm-2.7-revision-notes", "mb-ap-physcm-2.7-checklist"]
next: "mb-ap-physcm-2.7-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis. Find F_N before you find friction."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+y upward**. A 5.0 kg box slides across a level floor. While it slides, a student presses straight down on its top with a force of 20 N. For the box and floor, μ_k = 0.40. What is the size of the kinetic friction force on the box?

- (A) 8.0 N
- (B) 20 N
- (C) 28 N
- (D) 69 N

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Vertically, a_y = 0, so F_N − mg − 20 = 0 and F_N = 49 + 20 = 69 N. Then F_f,k = μ_k F_N = 0.40 × 69 = 27.6 N ≈ 28 N.

- (A) multiplies μ_k by the 20 N push only. The weight also presses the box onto the floor.
- (B) uses F_N = mg = 49 N, giving 19.6 N. The downward push increases the normal force.
- (D) is the normal force itself, not the friction force.
</details>

## Question 2 (multiple choice · core)

Take **+x to the right**. A long plank lies on frictionless ice, and a small block rests on one end of it. The plank is suddenly given a velocity to the right. The block is still at rest relative to the ice at that instant, so it slides on the plank. While the block slides on the plank, which statement describes the friction forces?

- (A) On the block, kinetic friction to the left; on the plank, kinetic friction to the right.
- (B) On the block, kinetic friction to the right; on the plank, kinetic friction to the left.
- (C) On both, kinetic friction to the left, because friction opposes the motion of the plank.
- (D) No friction on the block, because the block is not moving.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Relative to the plank, the block moves to the **left**. Kinetic friction on the block opposes that relative motion, so it points **right**. This is what speeds the block up. By Newton's third law, the block exerts friction on the plank to the **left**, which slows the plank.

- (A) reverses both directions. It treats friction as opposing the block's eventual motion relative to the ice.
- (C) gives both forces the same direction. A third-law pair is always opposite in direction.
- (D) judges by the block's motion relative to the ice. Friction depends on motion **relative to the other surface**, and the surfaces are sliding.
</details>

## Question 3 (multiple choice · core)

A brick slides on a level floor resting on its largest face. It is then turned onto a face with one-third of that area, and a second identical brick is placed on top of it. It slides on the same floor. By what factor does the kinetic friction force on the bottom brick change?

- (A) 2/3
- (B) 1
- (C) 2
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** F_f,k = μ_k F_N. The normal force doubles because the floor now supports two bricks. μ_k depends only on the materials, and friction does not depend on contact area, so friction doubles.

- (A) multiplies the factor 2 by the area factor 1/3. Area does not enter the friction model.
- (B) assumes the extra brick has no effect, or that the smaller area somehow offsets the extra load. Neither is true in this model.
- (D) divides by the area factor, treating friction as if it depended on pressure.
</details>

## Question 4 (calculation · core)

Take **+x up the slope**. A small block is launched up a rough slope at 20° to the horizontal with a speed of 3.0 m/s. For the block and slope, μ_k = 0.25 and μ_s = 0.45.

(a) Find the acceleration of the block while it moves up the slope.
(b) Find how far it travels up the slope before stopping.
(c) Decide, with a reason, whether the block slides back down.

<details>
<summary>Worked solution</summary>

1. Perpendicular to the slope: F_N = mg cos 20°.
2. **(a)** Moving up the slope, both the weight component mg sin 20° and kinetic friction μ_k mg cos 20° point down the slope (−x). So a_x = −g(sin 20° + μ_k cos 20°) = −9.8(0.342 + 0.25 × 0.940) = **−5.7 m/s²**.
3. **(b)** The acceleration is constant, so 0 = v_x0² + 2a_x d gives d = 3.0² ÷ (2 × 5.654) = **0.80 m**.
4. **(c)** At rest, static friction would need to balance mg sin 20°. Per kilogram of block, that is 9.8 × 0.342 = 3.35 N, while the maximum is μ_s g cos 20° = 0.45 × 9.8 × 0.940 = 4.14 N. Equivalently, tan 20° = 0.36 < μ_s = 0.45. Static friction can hold it, so the block **stays at rest**.

Suggested mark points (4): 1 for F_N = mg cos θ; 1 for friction and the weight component both down the slope while moving up; 1 for d = 0.80 m; 1 for the static comparison and the conclusion.

Common error: comparing with μ_k instead of μ_s in (c). Once the block stops, static friction is the relevant model.
</details>

## Question 5 (derivation · stretch)

Take **+x in the direction of motion**, origin at the start of a test surface. A small block slides at speed v₀ onto a level surface whose roughness has been treated so that μ_k = αx, where α is a positive constant (unit m⁻¹). Kinetic friction is the only horizontal force.

(a) Show that the acceleration is a_x = −αgx.
(b) Use a_x = v_x dv_x/dx to derive v_x as a function of x.
(c) Derive the stopping distance. Evaluate it for v₀ = 2.4 m/s and α = 0.50 m⁻¹.
(d) The launch speed is doubled. By what factor does the stopping distance change? Compare with a surface of constant μ_k.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** On the level surface F_N = mg, so friction is μ_k mg = αxmg towards −x. Newton's second law: ma_x = −αmgx, so **a_x = −αgx**.

**(b)** v_x dv_x/dx = −αgx. Separate and integrate from (0, v₀) to (x, v_x): ½(v_x² − v₀²) = −½αgx², so **v_x = √(v₀² − αgx²)**.

**(c)** It stops when v_x = 0: **x_stop = v₀/√(αg)**. With the numbers: 2.4 ÷ √(0.50 × 9.8) = 2.4 ÷ 2.21 = **1.1 m**.

**(d)** x_stop ∝ v₀, so doubling v₀ **doubles** the stopping distance. With constant μ_k the acceleration is constant, x_stop = v₀²/(2μ_k g) ∝ v₀², so doubling v₀ would multiply the distance by **4**.

| Point | What earns it |
|---|---|
| 1 | (a) F_N = mg and friction αmgx opposite the motion |
| 1 | (b) Writes a_x = v_x dv_x/dx and separates variables |
| 1 | (b) Integrates with the initial condition v_x = v₀ at x = 0 |
| 1 | (c) x_stop = v₀/√(αg) = 1.1 m |
| 1 | (d) Factor 2 here and factor 4 for constant μ_k, each with a reason |

**Alternative method.** Solving the motion in time also works (it gives simple harmonic motion, met in Unit 7), but it is longer. Using the constant-acceleration equations with any single value of μ_k earns no (b) or (c) points, because the acceleration is not constant.
</details>

## Question 6 (experimental design · core)

A student pulls a wooden sled across a level bench with a force sensor held horizontal. She adds masses to the sled and, for each load, pulls so that the sled moves at a **steady** speed. Her results (fictional) are below; m is the total mass of the sled and load.

| m (kg) | 0.40 | 0.80 | 1.20 | 1.60 | 2.00 |
|---|---|---|---|---|---|
| sensor reading (N) | 1.40 | 2.71 | 4.15 | 5.46 | 6.88 |

(a) Explain why the sensor reading equals the kinetic friction force.
(b) State what to plot on each axis to give a straight line whose slope is μ_k, and calculate the values for the horizontal axis.
(c) Use the data to find μ_k.
(d) Describe how she could use the same equipment to find μ_s.
(e) She repeats the experiment with a sled of the same material but twice the base area. Predict the effect on the graph.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** At steady speed a_x = 0, so the net horizontal force is zero. The only horizontal forces are the pull and kinetic friction, so they are equal in size.

**(b)** Plot **friction force (N) on the vertical axis against normal force F_N = mg (N) on the horizontal axis**. F_N values: 3.92, 7.84, 11.76, 15.68, 19.6 N. Choose scales that make the points fill most of the grid, for example 0 to 20 N across and 0 to 7 N up.

**(c)** The points lie close to a straight line through the origin. A best-fit line gives slope ≈ **0.35**, so μ_k = 0.35 (no unit). (Each ratio reading ÷ F_N lies between 0.345 and 0.357.)

**(d)** Start with the sled at rest and increase the pull slowly. Record the **largest** reading just before the sled starts to move; that is μ_s F_N. Repeat for each load, plot it against F_N, and take the slope as μ_s.

**(e)** No change. Friction does not depend on the area of contact, so the points should lie on the same line within uncertainty.

| Point | What earns it |
|---|---|
| 1 | (a) Steady speed means zero net force, so pull equals friction |
| 1 | (b) Friction against F_N = mg, with F_N values and sensible scales |
| 1 | (c) μ_k = 0.35 from a best-fit slope (0.34 to 0.36 accepted) |
| 1 | (d) Peak reading just before motion starts, gives μ_s F_N |
| 1 | (e) Same line, because friction does not depend on contact area |

**Alternative method for (c).** Averaging the five ratios also gives 0.35 and earns the point, but a graph shows any trend or offset that an average would hide.
</details>

## Question 7 (constructed response · stretch)

Take **+y upward**. A 12 kg box rests on the floor of a lift. For the box and floor, μ_s = 0.50. A student pushes the box horizontally and wants to know the largest push it can take without sliding. Another student says: "The answer depends only on the box's mass and μ_s, so it is the same whatever the lift does."

(a) Derive an expression for the largest push in terms of m, g, μ_s and the lift's acceleration a_y.
(b) Evaluate it when the lift accelerates upward at 1.2 m/s², when it is at rest, and when it accelerates downward at 1.2 m/s².
(c) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The box moves vertically with the lift. Vertically: F_N − mg = ma_y, so F_N = m(g + a_y). The largest static friction, and so the largest push, is **P_max = μ_s m(g + a_y)**.

**(b)** Upward acceleration: F_N = 12 × 11.0 = 132 N, P_max = **66 N**. At rest: F_N = 117.6 N, P_max = **59 N**. Downward acceleration: F_N = 12 × 8.6 = 103.2 N, P_max = **52 N**.

**(c)** The claim is **false**. Friction depends on the normal force, not directly on mass. The normal force equals mg only when a_y = 0. When the lift accelerates upward the floor must push harder, so more friction is available; when it accelerates downward, less is available.

| Point | What earns it |
|---|---|
| 1 | Newton's second law vertically gives F_N = m(g + a_y) |
| 1 | P_max = μ_s F_N with the sign of a_y handled correctly |
| 1 | All three values: 66 N, 59 N, 52 N |
| 1 | Rejects the claim: friction depends on F_N, which depends on a_y |

A student who reasons only in words, with correct directions of change, earns the first and last points.
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Two parts of one contact force" in the [study guide](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-study-guide/). Always find F_N first.
- **Q2 wrong:** go back to the direction rule and Worked example 2. Friction opposes **relative** motion.
- **Q3 or Q6(e) wrong:** review the area rule and the background note in "Two parts of one contact force", and the misconceptions list.
- **Q4 wrong:** revisit "Friction on a slope, symbolically" and the slip test.
- **Q5 incomplete:** practise the chain-rule step from Topic 1.2, then compare with Worked example 1, where the force changed with time instead of position.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-7-kinetic-static-friction-checklist/).
