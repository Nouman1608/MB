---
resourceId: "mb-ap-phys1-8.2-practice"
title: "Pressure: Practice Questions (Physics 1 8.2)"
description: "Seven original Marlbridge practice questions on pressure from forces, the particle model, gauge and absolute pressure, pressure at depth in layered liquids and pressure–depth sketches, with mark points."
course: "physics-1"
unit: 8
topics: ["8.2"]
resourceType: "practice-questions"
prerequisites:
  - "Density and the ideal-fluid model (Topic 8.1)"
  - "Splitting a force into components"
prerequisiteResources: ["mb-ap-phys1-8.2-study-guide"]
learningObjectives:
  - "Calculate pressure using the perpendicular component of a force"
  - "Explain fluid pressure with the particle model and as a scalar"
  - "Calculate gauge and absolute pressures at depth, including in layered liquids"
  - "Sketch and interpret pressure–depth graphs"
  - "Evaluate a claim about pressure at the bottom of different bodies of water"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s², P_atm = 1.0 × 10⁵ Pa, density of fresh water 1000 kg/m³. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-phys1-8.2-study-guide", "mb-ap-phys1-8.2-revision-notes", "mb-ap-phys1-8.2-checklist"]
next: "mb-ap-phys1-8.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–4 are multiple choice; 5–7 need written working."
  - "Decide first whether each pressure is gauge or absolute."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s², atmospheric pressure P_atm = 1.0 × 10⁵ Pa and the density of fresh water 1000 kg/m³. Treat liquids as ideal (incompressible). Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

A student presses the palm of her hand against a wall with a force of 50 N. The force is directed at 30° to the line perpendicular to the wall. Her palm touches an area of 100 cm². What pressure does her hand exert on the wall?

- (A) 0.43 Pa
- (B) 2.5 × 10³ Pa
- (C) 4.3 × 10³ Pa
- (D) 5.0 × 10³ Pa

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The perpendicular component is F⊥ = 50 cos 30° = 43.3 N. The area is 100 cm² = 100 × 10⁻⁴ m² = 0.010 m². P = 43.3 N ÷ 0.010 m² = 4330 Pa ≈ 4.3 × 10³ Pa.

- (A) divides by the area in cm² (100) instead of converting to m².
- (B) uses 50 sin 30° = 25 N, the component **along** the wall. The angle was measured from the perpendicular, so the perpendicular component uses cosine.
- (D) uses the whole 50 N. Only the perpendicular component presses into the wall.
</details>

## Question 2 (multiple choice · foundation)

A small pressure sensor is held at one point 1.5 m below the surface of a still pond. Its sensing face is turned to point upward, then sideways, then downward. How do the three readings compare?

- (A) The upward-facing reading is largest, because the water above pushes down on it.
- (B) The downward-facing reading is largest, because pressure increases with depth.
- (C) The sideways reading is zero, because pressure acts only vertically.
- (D) All three readings are the same.

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Pressure is a scalar: at one point in a fluid at rest it has a single value. Water particles move in all directions and hit the sensor face equally often whichever way it points. Only the direction of the **force** on the face changes; it is always perpendicular to the face.

- (A) treats pressure as a downward vector, like weight.
- (B) is right that pressure increases with depth, but the sensor stays at one depth, so the reading does not change.
- (C) is false: a liquid pushes sideways on the walls of its container, so it pushes sideways on the sensor too.
</details>

## Question 3 (multiple choice · core)

Point X is 2.0 m below the surface of a freshwater lake. Point Y is 4.0 m below the surface. What is the ratio of the absolute pressures, P_Y / P_X?

- (A) 1.0
- (B) 1.2
- (C) 2.0
- (D) 4.0

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** P_X = 1.0 × 10⁵ + 1000 × 9.8 × 2.0 = 1.196 × 10⁵ Pa. P_Y = 1.0 × 10⁵ + 1000 × 9.8 × 4.0 = 1.392 × 10⁵ Pa. P_Y / P_X = 1.392 ÷ 1.196 = 1.16 ≈ 1.2.

- (A) ignores the extra depth, as if pressure were the same throughout the lake.
- (C) is the ratio of **gauge** pressures. Doubling depth doubles ρgh, but the atmospheric part stays the same.
- (D) assumes pressure grows with the square of depth.
</details>

## Question 4 (multiple choice · core)

A sealed metal can contains a gas. Which statement best explains why the gas exerts pressure on the **top** inside surface of the can?

- (A) The weight of the gas pushes upward on the top of the can.
- (B) Gas particles moving in all directions collide with the top surface, and each collision gives it a small outward impulse.
- (C) Gas particles repel the metal from a distance without touching it.
- (D) The gas exerts no pressure on the top, because fluid pressure acts only downward.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Particles move in every direction. Many of them strike the top surface each second and bounce back. Each bounce changes a particle's momentum, so the surface receives an equal and opposite impulse (Newton's third law). The huge number of collisions adds up to a steady outward force per unit area: the pressure.

- (A) is backwards: weight acts downward, and the top of the can is above the gas.
- (C) describes an action-at-a-distance force. Gas pressure comes from contact collisions.
- (D) is the "pressure only pushes down" misconception. Fluids push on every surface they touch.
</details>

## Question 5 (calculation and sketch · core)

An open tank contains a 0.40 m layer of oil (density 850 kg/m³) floating on a 0.60 m layer of fresh water. The liquids do not mix.

(a) Calculate the absolute pressure at the boundary between the oil and the water.
(b) Calculate the absolute pressure at the bottom of the tank.
(c) Sketch a graph of absolute pressure P (vertical axis) against depth below the oil surface, from 0 to 1.0 m. Label the value at depth 0 and describe how the slope changes.
(d) A second tank holds 1.0 m of fresh water only. Is the gauge pressure at its bottom larger or smaller than in the first tank? Give a reason.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P = P_atm + ρ_oil g h_oil = 1.0 × 10⁵ + 850 × 9.8 × 0.40 = 1.0 × 10⁵ + 3332 = 1.033 × 10⁵ Pa ≈ **1.03 × 10⁵ Pa** (3 s.f., to show the change).

**(b)** Add the water layer: 1.0333 × 10⁵ + 1000 × 9.8 × 0.60 = 1.0333 × 10⁵ + 5880 = 1.092 × 10⁵ Pa ≈ **1.09 × 10⁵ Pa**.

**(c)** Sketch features:
- The line starts at P = 1.0 × 10⁵ Pa at depth 0 (not at zero).
- From 0 to 0.40 m it is a straight line with slope ρ_oil g = 8330 Pa/m.
- At 0.40 m it changes to a **steeper** straight line, slope ρ_water g = 9800 Pa/m, with **no jump** in pressure at the boundary.
- It ends at about 1.09 × 10⁵ Pa at 1.0 m.

**(d)** Second tank: P_gauge = 1000 × 9.8 × 1.0 = 9800 Pa. First tank: 3332 + 5880 = 9212 Pa. The water-only tank has the **larger** gauge pressure, because its top 0.40 m is water, which is denser than oil. A denser column of the same height weighs more.

| Point | What earns it |
|---|---|
| 1 | Absolute pressure at the boundary, including P_atm |
| 1 | Absolute pressure at the bottom, adding both layers |
| 1 | Sketch starts at 1.0 × 10⁵ Pa and is made of straight segments |
| 1 | Second segment steeper than the first, with no jump at 0.40 m |
| 1 | (d) larger, with a reason based on density (or a correct calculation of both gauge pressures) |
</details>

## Question 6 (constructed response · stretch)

A food-storage jar has a circular lid of radius 5.0 cm. A small pump removes air from the jar until the absolute pressure inside is 2.0 × 10⁴ Pa. The air outside is at atmospheric pressure. Ignore the weight of the lid.

(a) State the gauge pressure inside the jar.
(b) Calculate the net force that the air inside and outside exerts on the lid, and give its direction.
(c) Use the particle model to explain why the outside air pushes on the lid more strongly than the inside air.
(d) A student says: "The jar is hard to open because the vacuum inside sucks the lid in." Comment on this explanation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P_gauge = P − P_atm = 2.0 × 10⁴ − 1.0 × 10⁵ = **−8.0 × 10⁴ Pa**. Gauge pressure is negative because the inside is below atmospheric pressure.

**(b)** Area: A = πr² = π × (0.050 m)² = 7.85 × 10⁻³ m².
Outside air pushes in: 1.0 × 10⁵ × 7.85 × 10⁻³ = 785 N. Inside air pushes out: 2.0 × 10⁴ × 7.85 × 10⁻³ = 157 N.
Net force = 785 − 157 = 628 N ≈ **6.3 × 10² N, inward (towards the jar)**. Shortcut: |P_gauge| × A = 8.0 × 10⁴ × 7.85 × 10⁻³ = 628 N. That is about the weight of a 64 kg mass.

**(c)** Outside, there are many more air particles in each cubic metre than inside the pumped jar. So many more particles hit each square metre of the outer face of the lid every second. More collisions per second give a larger average force per area, so the outside pressure is greater.

**(d)** The explanation is **misleading**. A vacuum does not pull. The remaining inside air still pushes **outward** on the lid, just weakly. The lid is held on because the outside air pushes **inward** much harder. The difference in pressure across the lid, times its area, gives the net force.

| Point | What earns it |
|---|---|
| 1 | Gauge pressure −8.0 × 10⁴ Pa, with the sign |
| 1 | Correct lid area in m² |
| 1 | Net force about 6.3 × 10² N, inward |
| 1 | Particle-model reason: more particles per volume outside, so more collisions per second on each area |
| 1 | Rejects "suction": both sides push, and the larger outside push wins |
</details>

## Question 7 (constructed response · stretch)

A swimming pool and a large lake are both 5.0 m deep at their deepest point. Both contain fresh water. A student claims: "The pressure at the bottom of the lake is much greater than at the bottom of the pool, because the lake holds millions of times more water."

(a) Calculate the gauge pressure and the absolute pressure at the bottom of each.
(b) Evaluate the student's claim. Base your answer on a column of water above a small area on the bottom.
(c) The pool is drained and refilled to the same depth with seawater of density 1030 kg/m³. By what factor does the gauge pressure at the bottom change?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** For both: P_gauge = ρgh = 1000 × 9.8 × 5.0 = **4.9 × 10⁴ Pa**. Absolute: 1.0 × 10⁵ + 4.9 × 10⁴ = **1.5 × 10⁵ Pa** (1.49 × 10⁵ Pa).

**(b)** The claim is **incorrect**. Consider a column of water of area A standing on the bottom. Only the water directly above that area is held up by it. Its weight is ρAhg, so the extra pressure on that area is ρAhg ÷ A = ρgh. The area A cancels, and so does everything about how wide the lake or pool is. Both columns have the same density, the same g and the same height of 5.0 m, so the pressures are equal. The lake's extra water is spread over a much larger bottom area: the total force on the lake bed is far larger, but the force on each square metre is the same.

**(c)** Gauge pressure is proportional to ρ at a fixed depth, so it increases by a factor 1030 / 1000 = **1.03** (to 5.0 × 10⁴ Pa, or 50,470 Pa before rounding).

| Point | What earns it |
|---|---|
| 1 | Gauge pressure 4.9 × 10⁴ Pa for both |
| 1 | Absolute pressure 1.5 × 10⁵ Pa for both |
| 1 | Uses the column argument: weight of the water above an area, divided by that area |
| 1 | States that the area (and width) cancels, so only ρ, g and h matter; claim rejected |
| 1 | Distinguishes the total force on the bottom (larger for the lake) from the pressure (equal) |
| 1 | Factor 1.03 for the seawater |

An answer that quotes P = P₀ + ρgh and notes that the amount of water does not appear in it earns the fourth point but not the third.
</details>

## How did you do?

- **Q1 wrong:** re-read "Only the perpendicular part counts" and Worked example 1 in the [study guide](/advanced-course-resources/physics-1/8-2-pressure-study-guide/).
- **Q2 or Q4 wrong:** revisit "Pressure is a scalar" and "Where fluid pressure comes from".
- **Q3 wrong:** go back to "Absolute pressure and gauge pressure" and "Comparing scenarios".
- **Q5 incomplete:** work through Figure 3 and the rules for pressure–depth graphs.
- **Q6 or Q7 incomplete:** revisit Worked example 2 (net force from a pressure difference) and the column argument in Figure 2.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/8-2-pressure-checklist/).
