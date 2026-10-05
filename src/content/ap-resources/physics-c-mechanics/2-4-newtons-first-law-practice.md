---
resourceId: "mb-ap-physcm-2.4-practice"
title: "Newton’s First Law: Practice Questions (Physics C: Mechanics 2.4)"
description: "Seven original Marlbridge practice questions on net force, translational equilibrium, forces balanced along one axis only, motion data and inertial reference frames."
course: "physics-c-mechanics"
unit: 2
topics: ["2.4"]
resourceType: "practice-questions"
prerequisites:
  - "Vector components (Topic 1.1) and derivatives of position (Topic 1.2)"
  - "Free-body diagrams (Topic 2.2)"
prerequisiteResources: ["mb-ap-physcm-2.4-study-guide"]
learningObjectives:
  - "Decide whether a system is in translational equilibrium from its motion"
  - "Find an unknown force or forces from the equilibrium conditions, by components"
  - "Use position functions and motion data to decide along which axes the forces are balanced"
  - "Sketch velocity–time graphs that show balanced and unbalanced directions"
  - "Identify inertial and non-inertial reference frames and explain why"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic and trigonometry. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-2.4-study-guide", "mb-ap-physcm-2.4-revision-notes", "mb-ap-physcm-2.4-checklist"]
next: "mb-ap-physcm-2.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes; position-function coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every position function, x and y are in m and t is in s, so each coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Treat the ground as an inertial frame unless told otherwise. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

In which situation is the net force on the named object zero?

- (A) A ball at the highest point of a vertical throw
- (B) A car driving round a bend at a constant 15 m/s
- (C) A lift moving upward at a constant 1.5 m/s
- (D) A sprinter at the moment she leaves the starting blocks

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Constant speed in a straight line is constant velocity, so by the first law ΣF = 0. Moving does not stop the lift being in equilibrium.

- (A) has v = 0 for an instant, but gravity still acts and the velocity keeps changing. Zero velocity is not zero net force.
- (B) has constant speed but a changing direction. A change in direction is a change in velocity, so ΣF ≠ 0.
- (D) is speeding up from rest, so its velocity is changing and the net force is forwards.
</details>

## Question 2 (multiple choice · core)

Take **+x east** and **+y north**. Two horizontal forces act on a crate on a smooth floor: F₁ = (4.0, −2.0) N and F₂ = (−1.0, 5.0) N. A third horizontal force F₃ keeps the crate moving at constant velocity. What is F₃?

- (A) (3.0, 3.0) N
- (B) (−3.0, −3.0) N
- (C) (−5.0, 7.0) N
- (D) (−3.0, 3.0) N

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Constant velocity means ΣF = 0, so F₃ = −(F₁ + F₂). F₁ + F₂ = (3.0, 3.0) N, so F₃ = **(−3.0, −3.0) N**, size about 4.2 N, pointing south-west.

- (A) is F₁ + F₂ itself. Adding it would double the net force rather than cancel it.
- (C) is −(F₁ − F₂): it subtracts F₂ instead of adding it.
- (D) gets the x-component right but drops the sign on the y-component. Check each component separately.
</details>

## Question 3 (multiple choice · core)

A bus pulls away from a stop, speeding up along a straight road. A hand strap hanging from the ceiling swings towards the back of the bus, even though nothing pushes it backwards. Which statement is correct?

- (A) The bus is an inertial frame, because the passengers are at rest in it.
- (B) The ground is an inertial frame; the bus is not an inertial frame while it speeds up.
- (C) Both frames are inertial, because the strap obeys the first law in each.
- (D) Neither frame is inertial, because the strap is moving.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** From the ground, the strap’s top is dragged forwards by the bus and the strap lags behind until the forces on it change its velocity: nothing breaks the first law. Inside the bus, the strap starts to swing backwards with no backward force on it. The first law fails, so the accelerating bus is not an inertial frame. Once the bus moves at constant velocity on a straight road, its frame is inertial again.

- (A) uses "at rest in the frame" as the test. The test is whether the first law holds, and here it does not.
- (C) is wrong because, in the bus frame, the strap’s velocity changes with no net force to explain it.
- (D) confuses moving with accelerating. An object can move in an inertial frame; what matters is whether its motion matches the forces on it.
</details>

## Question 4 (calculation · core)

A child pulls a 20 kg sled across level snow at **constant velocity**, using a rope at **30° above the horizontal**. The friction force from the snow on the sled is 45 N. Take **+x in the direction of motion** and **+y upward**.

(a) Find the tension in the rope.
(b) Find the normal force from the snow on the sled.

<details>
<summary>Worked solution</summary>

1. Constant velocity, so ΣF_x = 0 and ΣF_y = 0.
2. **(a)** ΣF_x = 0: T cos 30° − 45 = 0, so T = 45 ÷ cos 30° = 51.96 ≈ **52 N**.
3. **(b)** ΣF_y = 0: F_N + T sin 30° − mg = 0. The weight is 20 × 9.8 = 196 N and T sin 30° ≈ 26.0 N, so F_N = 196 − 26.0 ≈ **170 N**.

Suggested mark points (3): 1 for stating that constant velocity means ΣF = 0; 1 for T = 52 N from the horizontal equation; 1 for F_N = 170 N, including the rope’s upward component.

Common error: writing F_N = mg = 196 N. The rope lifts part of the sled’s weight, so the snow pushes up less.
</details>

## Question 5 (constructed response · core)

Take **+x east** and **+y north**. A hovercraft on a flat lake has position x(t) = 6.0t − 0.40t² and y(t) = 1.5t for 0 ≤ t ≤ 10 s.

(a) Find v_x(t) and v_y(t).
(b) State the direction or directions in which the forces on the hovercraft are balanced, and give the direction of the net force.
(c) Sketch v_x and v_y against t for 0 ≤ t ≤ 10 s on the same axes, labelling key values.
(d) Find the time at which the hovercraft moves due north, and its speed then. Is it in equilibrium at that instant? Explain.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** v_x = dx/dt = **6.0 − 0.80t** (m/s); v_y = dy/dt = **1.5 m/s**.

**(b)** v_y is constant, so the forces are **balanced north–south** (ΣF_y = 0). v_x decreases (a_x = −0.80 m/s²), so ΣF_x ≠ 0: the net force points **west** (−x).

**(c)** v_y: a horizontal line at 1.5 m/s. v_x: a straight line falling from 6.0 m/s at t = 0, crossing zero at t = 7.5 s and reaching −2.0 m/s at t = 10 s. Label both lines, the intercepts and the crossing.

**(d)** Due north means v_x = 0: 6.0 − 0.80t = 0, so **t = 7.5 s**. The speed is then |v_y| = **1.5 m/s**. It is **not** in equilibrium: a_x is still −0.80 m/s², so the net force is still west. A component of velocity passing through zero does not mean the forces balance.

| Point | What earns it |
|---|---|
| 1 | (a) Both velocity components by differentiation, with units |
| 1 | (b) Balanced along y, with the reason that v_y is constant |
| 1 | (b) Net force west, from the decreasing v_x |
| 1 | (c) Flat v_y line and straight falling v_x line crossing zero at 7.5 s |
| 1 | (d) t = 7.5 s, 1.5 m/s, and "not in equilibrium" because a_x ≠ 0 |
</details>

## Question 6 (constructed response · core)

A fan cart runs along a level track. The fan pushes it forwards and friction acts backwards. Take **+x along the track**. A motion sensor records the position every 0.50 s in two runs.

| t (s) | 0 | 0.50 | 1.00 | 1.50 | 2.00 |
|---|---|---|---|---|---|
| Run 1: x (m) | 0.20 | 0.45 | 0.70 | 0.95 | 1.20 |
| Run 2: x (m) | 0.20 | 0.26 | 0.44 | 0.74 | 1.16 |

(a) Use Run 1 to decide whether the cart is in translational equilibrium. Justify your answer with the data.
(b) A student says: "In Run 1 the fan’s push must be bigger than friction, or the cart would stop." Evaluate this claim.
(c) Run 2 starts from rest with the fan on a higher setting. Use the data to decide whether the horizontal forces are balanced, and give the direction of the net force.
(d) Sketch v_x against t for both runs on the same axes.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** In Run 1 the cart moves 0.25 m in every 0.50 s interval, so v_x = 0.25 ÷ 0.50 = **0.50 m/s**, constant. Constant velocity means ΣF = 0: the cart **is** in equilibrium (horizontally; vertically it does not move at all).

**(b)** The claim is **wrong**. A cart moving at constant velocity needs **no** net force. The fan’s push and friction are **equal** in size. If the push were larger, the cart would speed up, and the data show it does not.

**(c)** The distances in successive intervals are 0.06, 0.18, 0.30 and 0.42 m. They increase, so the velocity is increasing: the horizontal forces are **not** balanced, and the net force points in **+x**. (The differences grow by a steady 0.12 m, which matches constant acceleration of 0.12 ÷ 0.50² = 0.48 m/s²; you do not need this value for the first law.)

**(d)** Run 1: a flat line at 0.50 m/s. Run 2: a straight line rising from 0 at t = 0 (it starts from rest) with positive slope.

| Point | What earns it |
|---|---|
| 1 | (a) Uses equal displacements in equal times to show constant velocity, so ΣF = 0 |
| 1 | (b) Rejects the claim: equal forces give constant velocity; a larger push would make the cart speed up |
| 1 | (c) Uses the increasing interval distances to conclude the forces are unbalanced, net force in +x |
| 1 | (d) Flat line for Run 1 and rising line from the origin for Run 2, with axes labelled |
</details>

## Question 7 (explanation · stretch)

Two students make claims about objects in space.

- Student 1: "A satellite in a circular orbit at constant speed is in equilibrium, because its speed does not change."
- Student 2: "A probe drifting far from any star or planet will slowly stop unless its engine keeps firing."

The satellite’s position, in an inertial frame centred on the planet, is x(t) = R cos(ωt), y(t) = R sin(ωt), where R and ω are positive constants.

(a) Find the satellite’s velocity components and its speed.
(b) Use your answer to (a) to evaluate Student 1’s claim.
(c) Evaluate Student 2’s claim using the first law.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** v_x = −Rω sin(ωt), v_y = Rω cos(ωt). Speed = √(v_x² + v_y²) = **Rω**, which is constant.

**(b)** The speed is constant, but the velocity components change with time, so the **direction** of the velocity changes. A changing velocity needs a non-zero net force (here, the planet’s gravitational pull). The satellite is **not** in equilibrium, so Student 1 is wrong. Differentiating again gives a_x = −Rω² cos(ωt) and a_y = −Rω² sin(ωt), which are not zero.

**(c)** Far from any star or planet, the forces on the probe are negligible, so ΣF ≈ 0. By the first law its velocity stays constant: it keeps moving at the same speed in the same direction with the engine off. Student 2 is wrong. Objects on Earth slow down because friction and drag act on them, not because motion needs a force.

| Point | What earns it |
|---|---|
| 1 | (a) Both velocity components by differentiation and the constant speed Rω |
| 1 | (b) Notes that the direction of v changes, so the velocity is not constant |
| 1 | (b) Concludes ΣF ≠ 0, so not in equilibrium, naming gravity or using a ≠ 0 |
| 1 | (c) Uses ΣF ≈ 0 and the first law to reject Student 2, with constant velocity in size and direction |
</details>

## How did you do?

- **Q1 or Q7 wrong:** re-read "Newton’s first law" and the misconceptions in the [study guide](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-study-guide/). Equilibrium is about ΣF, not about speed or rest.
- **Q2 or Q4 wrong:** revisit "Net force" and Worked example 1. Work one component at a time, with signs.
- **Q5 or Q6 incomplete:** revisit "Balanced in one direction, unbalanced in another" and Worked example 2 with Figure 2.
- **Q3 wrong:** revisit "Inertial reference frames".

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/2-4-newtons-first-law-checklist/).
