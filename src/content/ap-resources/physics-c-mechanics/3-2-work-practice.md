---
resourceId: "mb-ap-physcm-3.2-practice"
title: "Work: Practice Questions (Physics C: Mechanics 3.2)"
description: "Seven original Marlbridge practice questions on work: dot products, circular motion, force–position graphs, a spring launcher derivation, system versus object, and path dependence."
course: "physics-c-mechanics"
unit: 3
topics: ["3.2"]
resourceType: "practice-questions"
prerequisites:
  - "Translational kinetic energy (Topic 3.1)"
  - "Integrating polynomials (Topic 1.2)"
prerequisiteResources: ["mb-ap-physcm-3.2-study-guide"]
learningObjectives:
  - "Calculate work with the dot product in component form"
  - "Explain why a force perpendicular to the velocity does no work"
  - "Find work and speeds from a force–position graph with the work–energy theorem"
  - "Derive the work–energy theorem and the work done by a spring by integration"
  - "Decide when a system can be modelled as an object"
  - "Test whether a force is conservative by comparing the work along different paths"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-3.2-study-guide", "mb-ap-physcm-3.2-revision-notes", "mb-ap-physcm-3.2-checklist"]
next: "mb-ap-physcm-3.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. Springs are ideal and surfaces frictionless unless stated."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Forces are in N, positions in m and work in J. Use g = 9.8 m/s². Springs are ideal and surfaces frictionless unless stated. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x east and +y north**, on a level floor. A constant force **F** = (5.0, −2.0) N acts on a box while the box moves through a displacement **d** = (3.0, 4.0) m. How much work does the force do?

- (A) 7.0 J
- (B) 15 J
- (C) 23 J
- (D) 27 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** W = F_xd_x + F_yd_y = (5.0)(3.0) + (−2.0)(4.0) = 15 − 8.0 = 7.0 J.

- (B) uses only the x-components. The y-component of the force also lies partly along the displacement, and here it does −8.0 J.
- (C) adds the sizes of the products, ignoring the sign of F_y. The force has a component opposite to the y-displacement, so that term is negative.
- (D) multiplies the magnitudes, |F||d| = 5.39 × 5.0. That assumes the force is parallel to the displacement, which it is not.
</details>

## Question 2 (multiple choice · core)

A 0.30 kg ball on a string moves in a horizontal circle of radius 0.80 m at constant speed. The tension is 6.0 N. How much work does the tension do on the ball during **half** a revolution?

- (A) 0
- (B) 9.6 J
- (C) 15 J
- (D) −9.6 J

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** At every instant the tension points to the centre, perpendicular to the ball's velocity, so **F** · d**r** = 0 for every small step. Adding zero gives zero. This matches the constant speed: ΔK = 0.

- (B) multiplies the tension by the size of the overall displacement (the diameter, 1.6 m). The force is not constant in direction, so W = **F** · **d** for one fixed force does not apply.
- (C) multiplies the tension by the arc length, πr = 2.5 m. That would be correct only if the force were along the path.
- (D) makes the same error as (B) with a sign chosen because the tension "pulls back". Neither size nor sign is meaningful here.
</details>

## Question 3 (multiple choice · core)

A block is pushed once round a closed loop on a rough, level table, returning to its starting point. Several forces act on it. Which force does **non-zero** total work on the block over the loop?

- (A) The gravitational force from Earth
- (B) The normal force from the table
- (C) The force from a spring with one end fixed to a post on the table
- (D) The kinetic friction force from the table

<details>
<summary>Answer and explanation</summary>

**Answer: (D).** Kinetic friction always opposes the motion, so it does negative work on every part of the loop: W_f = −f × (loop length). Friction is nonconservative.

- (A) Gravity is conservative. On a level table it is perpendicular to every displacement, so W = 0, and round any loop it would be zero anyway.
- (B) The normal force is perpendicular to the level table, so it does no work.
- (C) An ideal spring force is conservative: the block returns to the same configuration, so the spring's total work is zero, even though it is positive on some parts of the loop and negative on others.
</details>

## Question 4 (graph · core)

Take **+x along a level track**. A 1.5 kg cart passes x = 0 at +2.0 m/s. The only horizontal force on it is F_x, shown on a graph made of straight segments joining these points:

| x (m) | 0 | 0.50 | 1.5 | 2.5 |
|---|---|---|---|---|
| F_x (N) | 0 | 8.0 | 8.0 | −4.0 |

(a) Find the work done on the cart from x = 0 to x = 2.5 m.
(b) Find the cart's speed at x = 2.5 m.
(c) Find where the cart's speed is greatest, and that speed.

<details>
<summary>Worked solution</summary>

1. **Areas.** 0 to 0.50 m: triangle, ½(0.50)(8.0) = 2.0 J. 0.50 to 1.5 m: rectangle, (1.0)(8.0) = 8.0 J. The last segment crosses zero where 8.0 − 12(x − 1.5) = 0, at **x = 2.17 m** (2.1667 m). Positive triangle ½(0.667)(8.0) = 2.67 J; negative triangle −½(0.333)(4.0) = −0.67 J.
2. **(a)** W = 2.0 + 8.0 + 2.67 − 0.67 = **12 J**.
3. **(b)** K_i = ½(1.5)(2.0)² = 3.0 J. K_f = 3.0 + 12 = 15 J. v = √(2 × 15 ÷ 1.5) = **4.5 m/s** (4.47 m/s).
4. **(c)** The speed rises while F_x > 0 and falls once F_x < 0, so it is greatest at **x = 2.2 m** (2.17 m). W up to there = 12.67 J, so K = 15.67 J and v = **4.6 m/s** (4.57 m/s).

Suggested mark points (4): 1 for the areas with the negative part counted as negative; 1 for 12 J; 1 for adding K_i before finding the speed; 1 for identifying F_x = 0 as the point of greatest speed, with a value.

Common error: finding v from ½mv² = W and forgetting the initial kinetic energy.
</details>

## Question 5 (derivation · core)

Take **+x to the right**, with x = 0 at the relaxed length of a spring of constant k = 200 N/m. A horizontal launcher compresses the spring to x = −0.10 m against a 0.050 kg ball, then releases it on a frictionless surface.

(a) Starting from Newton's second law, show that the net work done on an object moving along x equals ½mv_f² − ½mv_i².
(b) By integration, find the work done by the spring on the ball as the spring goes from x = −0.10 m to x = 0.
(c) Find the launch speed.
(d) What fraction of that work is done during the first half of the expansion (x = −0.10 m to −0.050 m)? Explain why it is more than half.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** F_net,x = m dv_x/dt = m (dv_x/dx)(dx/dt) = m v_x dv_x/dx. So F_net,x dx = m v_x dv_x. Integrating from (x_i, v_i) to (x_f, v_f): W_net = ∫ F_net,x dx = ½mv_f² − ½mv_i².

**(b)** F_s,x = −kx. W = ∫ (−200x) dx from x = −0.10 m to x = 0, which is [−100x²] evaluated between those limits: 0 − (−1.0) = **+1.0 J**. It is positive because the spring pushes right (x < 0 means compressed) while the ball moves right.

**(c)** The spring is the only force doing work: ½(0.050)v² = 1.0, so v = √40 = **6.3 m/s**.

**(d)** W from −0.10 to −0.050 m = [−100x²] = −100(0.0025) + 100(0.010) = 0.75 J, so **3/4** of the work. The spring force is largest when the compression is largest, so the area under the F–x graph is greater over the first half of the travel.

| Point | What earns it |
|---|---|
| 1 | (a) Uses the chain rule to write the net force as m v_x dv_x/dx |
| 1 | (a) Integrates with limits to reach ΔK |
| 1 | (b) Integral of −kx with correct limits and sign, 1.0 J |
| 1 | (c) 6.3 m/s from the work–energy theorem |
| 1 | (d) 0.75 J or 3/4, explained by the larger force at larger compression |

**Common error.** Using W = kx × x = 2.0 J treats the spring force as constant at its largest value. The force falls linearly to zero, so the work is half of that.
</details>

## Question 6 (constructed response · core)

Take **+x away from the wall**. A 50 kg skater stands at rest on ice and pushes on a wall with her hands. She leaves the wall at 1.2 m/s.

(a) Find the skater's change in kinetic energy.
(b) How much work does the wall's force do on the skater? Explain.
(c) Explain where the kinetic energy came from, and why the skater cannot be modelled as a single object during the push.
(d) Contrast this with a 6.0 kg crate pushed from rest across frictionless ice by a constant 30 N horizontal force through a rigid pole for 2.0 m. Find the crate's final speed and say why an object model works there.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** ΔK = ½(50)(1.2)² = **36 J**.

**(b)** **Zero.** The wall's force acts on her hands, and her hands do not move while they touch the wall. Work needs a displacement of the point of application.

**(c)** The energy came from **inside the skater**: chemical energy in her muscles, converted as her arms straighten. During the push her centre of mass moves but her hands do not, so different parts of her move by different amounts. Her shape (configuration) changes, which means she is a system with internal energy, not a single object.

**(d)** The pole's end and the crate's centre of mass move together, so the crate can be modelled as an object and W = ΔK applies: (30)(2.0) = 60 J = ½(6.0)v², so v = √20 = **4.5 m/s** (4.47 m/s).

| Point | What earns it |
|---|---|
| 1 | (a) 36 J |
| 1 | (b) W = 0, because the point of application does not move |
| 1 | (c) Internal (chemical) energy of the skater as the source |
| 1 | (c) Centre of mass moves while the point of application does not, so the object model fails |
| 1 | (d) 4.5 m/s, with the point of application and centre of mass moving equally as the reason |
</details>

## Question 7 (constructed response · stretch)

Take **+x east and +y north** on a level surface. A puck moves from the origin O(0, 0) to P(2.0, 2.0) m. A horizontal force acts on it given by **F** = (3.0y) î N, with y in m. The force has no y-component.

Find the work done by this force along each path:

- Path A: along the x-axis to (2.0, 0), then north to P.
- Path B: north to (0, 2.0), then east to P.
- Path C: straight along the line y = x.

Then decide whether the force is conservative, and compare with gravity acting on a 0.40 kg puck moved from O to a point 2.0 m **higher** by any path.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

Only motion in x can give work, because F_y = 0. So W = ∫ F_x dx = ∫ 3.0y dx along the path.

- **Path A.** First leg: y = 0, so F_x = 0 and W = 0. Second leg: dx = 0, so W = 0. **W_A = 0**.
- **Path B.** First leg: dx = 0, so W = 0. Second leg at y = 2.0 m: F_x = 6.0 N over 2.0 m. **W_B = 12 J**.
- **Path C.** y = x, so W = ∫₀² 3.0x dx = 1.5(2.0)² = **6.0 J**.

The three paths give different work between the same two points, so the force is **nonconservative**. Going out along B and back along A gives a closed loop with W = 12 + 0 = 12 J, not zero. No potential energy can be defined for it.

For gravity, only the vertical displacement matters: W = −mgΔy = −(0.40)(9.8)(2.0) = **−7.8 J** (−7.84 J) by any path. Gravity is conservative.

| Point | What earns it |
|---|---|
| 1 | Uses W = ∫ F_x dx and notes that the y-legs contribute nothing |
| 1 | W_A = 0 and W_B = 12 J |
| 1 | W_C = 6.0 J by substituting y = x before integrating |
| 1 | Concludes nonconservative from path dependence (or non-zero closed loop) |
| 1 | Gravity −7.8 J for any path, identified as conservative |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "The dot product and constant forces" in the [study guide](/advanced-course-resources/physics-c-mechanics/3-2-work-study-guide/).
- **Q3 or Q7 incomplete:** revisit "Conservative and nonconservative forces", Figure 2 and Worked example 3.
- **Q4 or Q5 wrong:** work through Figure 1, Worked example 1 and the derivation of the work–energy theorem.
- **Q6 incomplete:** re-read "Object or system: where does the force act?"

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/3-2-work-checklist/).
