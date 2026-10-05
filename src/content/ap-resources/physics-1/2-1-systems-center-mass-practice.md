---
resourceId: "mb-ap-phys1-2.1-practice"
title: "Systems and Center of Mass: Practice Questions (Physics 1 2.1)"
description: "Seven original Marlbridge practice questions on choosing systems, open and closed systems, symmetry and center-of-mass calculations, with worked solutions and suggested mark points."
course: "physics-1"
unit: 2
topics: ["2.1"]
resourceType: "practice-questions"
prerequisites:
  - "Reading positions on x and y axes with a stated origin"
prerequisiteResources: ["mb-ap-phys1-2.1-study-guide"]
learningObjectives:
  - "Calculate the center of mass of particles in one and two dimensions, and of a uniform object with particles on it"
  - "Use symmetry to place a center of mass without calculation"
  - "Decide whether mass crosses a chosen system boundary"
  - "Plot center-of-mass data against time and interpret the graph"
  - "Justify when a system can be modelled as a single object"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-2.1-study-guide", "mb-ap-phys1-2.1-revision-notes", "mb-ap-phys1-2.1-checklist"]
next: "mb-ap-phys1-2.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every calculation states its origin and axes. Use them for every position."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Treat small objects as particles and light frames as massless unless a mass is given. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

Take **+x along a light metre rule**, with the origin at its zero mark. A 2.0 kg weight hangs at x = 0.10 m and a 6.0 kg weight hangs at x = 0.50 m. Where is the center of mass of the two weights?

- (A) 0.30 m
- (B) 0.40 m
- (C) 0.20 m
- (D) 1.6 m

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** x_cm = [(2.0)(0.10) + (6.0)(0.50)] ÷ (2.0 + 6.0) = 3.2 ÷ 8.0 = 0.40 m. It is closer to the heavier 6.0 kg weight, as it must be.

- (A) is the midpoint. It ignores the masses and is only right for equal masses.
- (C) swaps the masses, putting the 6.0 kg weight at 0.10 m. The answer is then closer to the lighter weight, which should look wrong.
- (D) divides the weighted sum by 2 (the number of weights) instead of 8.0 kg (the total mass). The result is not even on the rule.
</details>

## Question 2 (multiple choice · core)

A uniform thin wire is bent into a semicircle. Which statement best describes the location of the center of mass of the wire?

- (A) On the wire, at the middle of the curved arc
- (B) On the line of symmetry, between the arc and the straight line joining the wire's two ends, but not on the wire itself
- (C) Exactly at the centre of the circle that the semicircle is part of
- (D) Not on the line of symmetry, because the wire has no mass along most of that line

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The wire is symmetric about the line through the middle of the arc and the centre of the circle, so the center of mass lies on that line. Every bit of wire is on the arc side of the straight line joining the ends, so the average position is pulled away from the circle's centre towards the arc. But it is an average of points spread round the curve, so it lies inside the curve, not on it.

- (A) would need all the mass to be at the middle of the arc. Most of it is off to the sides.
- (C) would need mass on both sides of the circle's centre. A semicircle has mass on one side only.
- (D) confuses where the material is with where the average position is. Symmetry fixes the center of mass on the line, whether or not there is material there.
</details>

## Question 3 (multiple choice · core)

A cart rolls along a level track carrying a bucket of sand. Sand leaks out of a hole in the bucket and falls onto the track. For which choice of system does **mass cross the system boundary**?

- (A) The cart and the empty bucket only, with no sand included
- (B) The cart, the bucket and the sand still inside the bucket
- (C) The cart, the bucket and all the sand, including the sand already on the track
- (D) The cart's wheels only

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** This boundary surrounds the sand in the bucket. As grains fall out, they leave the system, so its mass decreases. It is an open system.

- (A) contains no sand at all, so no sand ever enters or leaves it. Its mass stays constant.
- (C) includes every grain wherever it is, so the sand only moves around inside the boundary. This is the closed choice.
- (D) is a fixed set of objects that sand never enters. The choice is odd, but no mass crosses its boundary.
</details>

## Question 4 (calculation · core)

Three small sensors are fixed to a light flat frame. Take the origin at the 0.50 kg sensor, **+x to the right and +y up**. The sensors are: 0.50 kg at (0, 0); 0.30 kg at (0.40 m, 0); 0.20 kg at (0, 0.30 m).

(a) Find the center of mass of the three sensors.
(b) A 0.50 kg battery is added on the x-axis so that x_cm moves to 0.30 m. Find the battery's x-position, and the new y_cm.

<details>
<summary>Worked solution</summary>

**(a)** Total mass = 0.50 + 0.30 + 0.20 = 1.0 kg.
x_cm = [(0.50)(0) + (0.30)(0.40) + (0.20)(0)] ÷ 1.0 = **0.12 m**.
y_cm = [(0.50)(0) + (0.30)(0) + (0.20)(0.30)] ÷ 1.0 = **0.060 m**.

**(b)** New total mass = 1.5 kg. Require [0.12 + (0.50)x] ÷ 1.5 = 0.30, so 0.12 + 0.50x = 0.45 and x = **0.66 m**.
The battery is on the x-axis (y = 0), so y_cm = 0.060 ÷ 1.5 = **0.040 m**. Adding mass at y = 0 pulls y_cm down even though no y-position changed.

Suggested mark points (4): 1 for the total mass used as the divisor; 1 for (0.12 m, 0.060 m); 1 for setting up the equation with the new total mass 1.5 kg; 1 for x = 0.66 m and y_cm = 0.040 m.

Common error: dividing the sum 0.12 kg·m by 3 (the number of sensors) gives 0.040 m for x_cm, which is wrong.
</details>

## Question 5 (calculation · core)

A uniform plank 3.0 m long has a mass of 12 kg. Take the origin at the plank's left end and **+x to the right**. A 4.0 kg paint tin sits at x = 0.50 m, and an 8.0 kg toolbox sits at the right end, x = 3.0 m.

(a) Find the center of mass of the plank, tin and toolbox.
(b) Where should the toolbox be moved so that the center of mass is at the middle of the plank?

<details>
<summary>Worked solution</summary>

**(a)** Replace the uniform plank with a 12 kg particle at its midpoint, x = 1.5 m (symmetry).
x_cm = [(12)(1.5) + (4.0)(0.50) + (8.0)(3.0)] ÷ (12 + 4.0 + 8.0) = (18 + 2.0 + 24) ÷ 24 = 44 ÷ 24 = **1.8 m** (1.83 m unrounded).

**(b)** Require x_cm = 1.5 m with the toolbox at position d: [18 + 2.0 + 8.0d] ÷ 24 = 1.5, so 20 + 8.0d = 36 and d = **2.0 m** from the left end.

**Check.** At d = 2.0 m, the tin is 1.0 m left of the middle and the toolbox is 0.50 m right of it. Their weighted offsets cancel: (4.0)(−1.0) + (8.0)(+0.50) = 0.

Suggested mark points (4): 1 for placing the plank's mass at its midpoint; 1 for including all three masses in the total; 1 for x_cm = 1.8 m; 1 for d = 2.0 m.

Common error: leaving out the plank gives 2.2 m, as if the plank had no mass.
</details>

## Question 6 (constructed response · stretch)

Take **+x along a straight, level track**. Cart A (0.50 kg) and cart B (1.50 kg) are held together with a compressed spring between them and roll together at +0.10 m/s. At t = 0 a latch releases the spring and the carts move apart. A video gives the positions below (carts treated as particles, readings to the nearest millimetre).

| t (s) | 0 | 0.40 | 0.80 | 1.20 | 1.60 |
|---|---|---|---|---|---|
| x_A (m) | 0.400 | 0.320 | 0.240 | 0.160 | 0.080 |
| x_B (m) | 0.600 | 0.680 | 0.760 | 0.840 | 0.920 |

A student claims: "Releasing the spring changed how each cart moves, but it did not change the motion of the two-cart system as a whole."

(a) Calculate x_cm of the two-cart system at each time.
(b) Plot x_cm against t on labelled axes with a suitable scale, and draw the best-fit line.
(c) Use your graph to find the velocity of the center of mass after the release.
(d) Evaluate the student's claim, using your answers and the idea of internal interactions.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** x_cm = (0.50x_A + 1.50x_B) ÷ 2.00.

| t (s) | 0 | 0.40 | 0.80 | 1.20 | 1.60 |
|---|---|---|---|---|---|
| x_cm (m) | 0.550 | 0.590 | 0.630 | 0.670 | 0.710 |

**(b)** Horizontal axis: t from 0 to 1.6 s (for example 1 cm per 0.20 s). Vertical axis: x_cm from 0.50 m to 0.75 m (for example 1 cm per 0.02 m), labelled with units. The five points lie on one straight line.

**(c)** Slope = (0.710 − 0.550) m ÷ (1.60 − 0) s = 0.16 ÷ 1.60 = **+0.10 m/s**.

**(d)** The claim is **supported**. Each cart changed velocity at the release: cart A moves at −0.20 m/s and cart B at +0.20 m/s, from the slopes of their own position data. But the center of mass moves at a steady +0.10 m/s, the same velocity the carts had together before the release. The spring is inside the system, so its push is an internal interaction. Internal interactions change how the parts move relative to each other, not how the system's center of mass moves. Topic 2.3 explains why.

| Point | What earns it |
|---|---|
| 1 | Uses x_cm = Σmx ÷ Σm with the masses as weights |
| 1 | Correct x_cm values (at least four of the five) |
| 1 | Graph with labelled axes, units, a sensible scale and a straight best-fit line |
| 1 | Center-of-mass velocity +0.10 m/s from the slope |
| 1 | Supports the claim **because** the center-of-mass velocity equals the velocity before release, while the carts' velocities changed |
| 1 | Links this to the spring force being internal to the chosen system |

**Common error.** Using the midpoint of the carts, (x_A + x_B) ÷ 2, gives 0.500 m at every time. That suggests the system is at rest, which is wrong: the carts have unequal masses, so the midpoint is not the center of mass.
</details>

## Question 7 (constructed response · stretch)

A 0.50 kg box rests on top of a 1.5 kg box on a smooth floor. A student pushes the bottom box horizontally.

(a) For a gentle push, both boxes move together. Explain why the two boxes can then be modelled as one 2.0 kg object.
(b) For a much harder push, the top box slides backwards across the bottom box. Explain why the one-object model no longer works.
(c) Before the push, the top box is centred on the bottom box. By the time the top box has slid 0.20 m backwards relative to the bottom box (and is still on it), how far, and in which direction, has the system's center of mass moved relative to the bottom box?

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** When the boxes move together, they have the same velocity and the same acceleration at every instant. Nothing about the interaction between them changes the answer to questions about the motion, so their internal structure does not matter. The pair can be modelled as one object of mass 0.50 + 1.5 = 2.0 kg at the system's center of mass.

**(b)** Now the parts move relative to each other: the boxes have different velocities and accelerations. The interaction between the boxes (the friction at their contact) matters for the motion, so the system's structure must be included. A change in an external condition, the size of the push, has changed the system's substructure.

**(c)** Measure positions relative to the bottom box, with +x in the direction of the push. Only the top box moves: Δx_top = −0.20 m. So Δx_cm = (0.50)(−0.20) ÷ 2.0 = **−0.050 m**. The center of mass moves 0.050 m backwards relative to the bottom box (opposite to the push).

| Point | What earns it |
|---|---|
| 1 | (a) Same velocity and acceleration, so internal structure does not matter; total mass 2.0 kg |
| 1 | (b) Relative motion means the interaction between the boxes matters, so the single-object model fails |
| 1 | (b) Links the change to the external push becoming larger |
| 1 | (c) Uses a mass-weighted shift with the total mass 2.0 kg as divisor |
| 1 | (c) 0.050 m, with direction stated as backwards (opposite to the push) |

An answer to (c) of 0.10 m (half of 0.20 m, as if the masses were equal) earns neither (c) point: it does not weight by mass.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "The equation" and Worked examples 1 and 2 in the [study guide](/advanced-course-resources/physics-1/2-1-systems-center-mass-study-guide/). Always divide by the total mass.
- **Q2 wrong:** go back to "Use symmetry first". The center of mass need not be on the material.
- **Q3 wrong:** revisit "Open and closed systems" and Figure 1: it all depends on where you draw the boundary.
- **Q5 wrong:** see Worked example 3 on replacing a uniform part with a particle at its centre.
- **Q6 or Q7 incomplete:** your reasoning needs the *why*: internal interactions, or parts moving relative to each other. See "When can a system be treated as one object?".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/2-1-systems-center-mass-checklist/).
