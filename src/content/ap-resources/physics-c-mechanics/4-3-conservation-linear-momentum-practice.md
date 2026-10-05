---
resourceId: "mb-ap-physcm-4.3-practice"
title: "Conservation of Linear Momentum: Practice Questions (Physics C: Mechanics 4.3)"
description: "Seven original Marlbridge practice questions on total momentum, center-of-mass velocity, choosing a system, two-dimensional explosions and momentum data."
course: "physics-c-mechanics"
unit: 4
topics: ["4.3"]
resourceType: "practice-questions"
prerequisites:
  - "Momentum and impulse as vectors (Topics 4.1 and 4.2)"
  - "Resolving vectors into components"
prerequisiteResources: ["mb-ap-physcm-4.3-study-guide"]
learningObjectives:
  - "Find total momentum and center-of-mass velocity for a system of objects"
  - "Decide whether a chosen system's momentum is constant"
  - "Use conservation of momentum in one and two dimensions for collisions and explosions"
  - "Analyse momentum–time data and find an external force from its slope"
  - "Reason qualitatively about momentum in three dimensions"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculator for arithmetic and trigonometry. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-4.3-study-guide", "mb-ap-physcm-4.3-revision-notes", "mb-ap-physcm-4.3-checklist"]
next: "mb-ap-physcm-4.3-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axes. State your system before you conserve anything."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Masses are in kg, velocities in m/s, momenta in kg·m/s and impulses in N·s. Use g = 9.8 m/s² and, where needed, Earth's mass M_E = 5.97 × 10²⁴ kg. Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A 3.0 kg cart moves at +4.0 m/s and a 1.0 kg cart moves at −2.0 m/s on the same track. What is the velocity of the center of mass of the two carts?

- (A) +1.0 m/s
- (B) +2.5 m/s
- (C) +3.5 m/s
- (D) +10 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** v_cm = P / M = (3.0 × 4.0 + 1.0 × (−2.0)) ÷ 4.0 = 10 ÷ 4.0 = +2.5 m/s.

- (A) averages the two velocities without weighting by mass: (4.0 − 2.0) ÷ 2. The heavier cart counts for more.
- (C) adds speeds instead of signed velocities: (12 + 2.0) ÷ 4.0. The 1.0 kg cart moves left, so its momentum is negative.
- (D) is the total momentum, 10 kg·m/s, given with a velocity unit. You still need to divide by the total mass.
</details>

## Question 2 (multiple choice · core)

For which system is the **total momentum constant** over the stated time?

- (A) A ball thrown straight up, from release until it reaches its highest point. System: the ball.
- (B) A bowling ball rolling to a stop on a carpet. System: the bowling ball.
- (C) Two carts with repelling magnets pushing each other apart on a level, frictionless track. System: both carts.
- (D) A ball bouncing off a wall. System: the ball.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The magnetic forces are internal, so their impulses cancel. Weight and normal force cancel and there is no friction, so ΣF_ext = 0 and P is constant, even though each cart speeds up.

- (A) Gravity is an external force on the ball, so its momentum changes at the rate mg.
- (B) Friction from the carpet is an external force on the ball. Its momentum goes to the carpet and Earth.
- (D) The wall exerts a large external force on the ball and reverses its momentum. Ball + wall + Earth would have constant momentum, but the ball alone does not.
</details>

## Question 3 (multiple choice · core)

Take **+x forward**. A 1.2 kg toy cart sits at rest on a level, frictionless track. It fires a 0.050 kg ball straight backward at 6.0 m/s relative to the ground. What is the cart's speed just after firing?

- (A) 0
- (B) 0.24 m/s
- (C) 0.25 m/s
- (D) 1.2 m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** System: cart + ball, P_x = 0 before. After: 1.2v + 0.050 × (−6.0) = 0, so v = 0.30 ÷ 1.2 = 0.25 m/s forward.

- (A) treats "momentum conserved" as "nothing moves". The total stays zero because the cart and ball move in opposite directions.
- (B) divides by the total mass 1.25 kg. The ball's mass is already accounted for in its own momentum; only the cart moves at v.
- (D) sets the kinetic energies equal: ½(0.050)(6.0)² = ½(1.2)v². Kinetic energy is not shared equally in an explosion; momentum is the conserved quantity.
</details>

## Question 4 (calculation · core)

On a level air table, take **+x east and +y north**. A 0.90 kg puck slides east at 2.0 m/s. A small internal spring splits it into two pieces. Just after, the 0.30 kg piece moves north at 4.0 m/s. Find (a) the velocity of the 0.60 kg piece and (b) the velocity of the center of mass of the two pieces.

<details>
<summary>Worked solution</summary>

1. System: both pieces. No horizontal external force, so P_x and P_y are conserved.
2. Before: P_x = 0.90 × 2.0 = 1.8 kg·m/s; P_y = 0.
3. **x:** 1.8 = 0 + p_2x, so p_2x = 1.8 kg·m/s.
4. **y:** 0 = 0.30 × 4.0 + p_2y, so p_2y = −1.2 kg·m/s.
5. **(a)** |p₂| = √(1.8² + 1.2²) ≈ 2.16 kg·m/s, so v₂ = 2.16 ÷ 0.60 ≈ **3.6 m/s**, at tan⁻¹(1.2/1.8) ≈ **34° south of east**.
6. **(b)** v_cm = P / M = 1.8 ÷ 0.90 = **2.0 m/s east**, unchanged by the internal spring.

Suggested mark points (3): 1 for conserving each component separately with correct signs; 1 for the size of v₂; 1 for the direction with a stated reference.

Common error: subtracting speeds, 2.0 − 4.0, as if the pieces moved along one line.
</details>

## Question 5 (constructed response · core)

Take **+x along a level track**. Cart A (0.50 kg) rolls towards cart B (0.75 kg), which is at rest. They collide at t = 0.50 s. Motion sensors give:

| t (s) | 0.00 | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
|---|---|---|---|---|---|---|
| v_A (m/s) | 0.800 | 0.790 | 0.780 | 0.000 | 0.000 | 0.000 |
| v_B (m/s) | 0.000 | 0.000 | 0.000 | 0.512 | 0.502 | 0.492 |

(a) Calculate the total momentum of the two carts at each time.
(b) Describe the graph of total momentum against time that you would draw, including suitable axes and scales.
(c) The total momentum is not exactly constant. Explain why, and use the data after the collision to find the net external force on the system.
(d) Use the data to decide whether momentum is conserved across the collision itself.
(e) The collision lasts about 0.020 s. Show that the external force can be ignored during it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** P = 0.50v_A + 0.75v_B: **0.400, 0.395, 0.390** kg·m/s before; **0.384, 0.3765 ≈ 0.377, 0.369** kg·m/s after.

**(b)** Total momentum (kg·m/s) on the vertical axis, time (s) on the horizontal axis. A vertical scale from about 0.36 to 0.41 kg·m/s shows the small changes; starting at zero would hide them. Two straight lines, one for 0 to 0.40 s and one for 0.60 to 1.00 s, each sloping gently downward.

**(c)** Rolling friction from the track is an **external** force on the carts, so it transfers momentum out of the system. The net external force is the slope dP/dt. After the collision: (0.369 − 0.384) ÷ 0.40 ≈ **−0.038 N** (−0.0375 N), that is, about 0.038 N backwards.

**(d)** Extend each line to t = 0.50 s. Before: 0.400 − 0.025 × 0.50 ≈ 0.388 kg·m/s. After: 0.384 + 0.0375 × 0.10 ≈ 0.388 kg·m/s. They agree, so **momentum is conserved across the collision**; the slow fall is due to friction, not the collision.

**(e)** External impulse during contact ≈ 0.038 N × 0.020 s ≈ 7.5 × 10⁻⁴ N·s. That is only about 0.2% of the 0.39 kg·m/s total, and no bigger than one step in the last recorded digit of P (0.75 kg × 0.001 m/s ≈ 7.5 × 10⁻⁴ kg·m/s). So it is negligible.

| Point | What earns it |
|---|---|
| 1 | (a) All six totals correct |
| 1 | (b) Correct axes with units and a scale chosen to show the change |
| 1 | (c) Identifies friction as an external force and finds about −0.038 N from the slope |
| 1 | (d) Compares values extrapolated to t = 0.50 s, not just neighbouring readings, and concludes |
| 1 | (e) Estimates the external impulse during contact and compares it with P |

**Alternative for (d).** Comparing P at 0.40 s and 0.60 s and correcting each for 0.10 s of friction earns the point.
</details>

## Question 6 (constructed response · core)

Take **+y upward**. A 0.50 kg ball is released from rest 1.8 m above the ground. Ignore air resistance.

(a) Treat the ball alone as the system. Explain why its momentum is not constant, and state the rate at which it changes.
(b) Now treat the ball and Earth together as the system. Explain why its total momentum stays constant, and derive an expression for Earth's velocity v_E just before the ball lands, in terms of m, M_E, g and h.
(c) Calculate the ball's momentum and Earth's speed just before the ball lands.
(d) Explain why nobody notices Earth's motion.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Gravity from Earth is an **external** force on the ball. So dp/dt = −mg = −4.9 N: the ball gains 4.9 kg·m/s of downward momentum every second.

**(b)** For ball + Earth, the gravitational forces are a **third-law pair inside the system**, so their impulses cancel. Ignoring the Sun and other bodies over this short time, ΣF_ext = 0 and P stays at its initial value, zero. The ball's speed is v = √(2gh), so

m(−√(2gh)) + M_E v_E = 0, giving **v_E = (m/M_E)√(2gh)**, upward.

**(c)** v = √(2 × 9.8 × 1.8) ≈ 5.9 m/s, so p_ball ≈ **−3.0 kg·m/s**. Then v_E = 2.97 ÷ (5.97 × 10²⁴) ≈ **5.0 × 10⁻²⁵ m/s** upward.

**(d)** The center of mass of ball + Earth stays at rest, so Earth moves only m h / M_E ≈ 1.5 × 10⁻²⁵ m while the ball falls 1.8 m. That is far smaller than an atomic nucleus, so it cannot be noticed.

| Point | What earns it |
|---|---|
| 1 | (a) Gravity identified as external, with dp/dt = −mg (−4.9 N) |
| 1 | (b) Gravity identified as internal (third-law pair), so P stays zero |
| 1 | (b) Correct expression for v_E, with direction |
| 1 | (c) p_ball ≈ 3.0 kg·m/s downward and v_E ≈ 5 × 10⁻²⁵ m/s |
| 1 | (d) Uses the huge mass ratio or the fixed center of mass to explain why the motion is unnoticeable |
</details>

## Question 7 (explanation · stretch)

A student says: "When an object at rest splits into two pieces of different masses, the pieces can fly off at 120° to each other."

(a) Use conservation of momentum to show that the claim is false.
(b) A second object at rest splits into **three** pieces. Explain why the three velocity vectors must lie in one plane, even though the pieces move in three-dimensional space.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** System: the two pieces, with no net external force during the split. Total momentum before is zero, so after it is zero: m₁v₁ + m₂v₂ = 0, which gives **m₁v₁ = −m₂v₂**. The momenta are equal in size and opposite in direction, so the velocities are along the **same line in opposite directions** (180° apart). Different masses change only the speeds: v₁/v₂ = m₂/m₁. A 120° angle would leave a nonzero total momentum, so the claim is false.

**(b)** Now p₁ + p₂ + p₃ = 0. Then p₃ = −(p₁ + p₂). Any two vectors p₁ and p₂ define a plane, and their sum lies in that plane, so p₃ lies in it too. Placed tip to tail, the three momenta form a **closed triangle**, which is a flat shape. So the three velocities lie in one plane (which can be tilted at any angle in space).

| Point | What earns it |
|---|---|
| 1 | (a) States that total momentum is zero after the split, from zero before |
| 1 | (a) Concludes that the momenta are equal and opposite, so the angle must be 180° |
| 1 | (a) Notes that different masses affect only the speeds (inverse ratio) |
| 1 | (b) Shows p₃ = −(p₁ + p₂) lies in the plane of p₁ and p₂, or uses the closed triangle |

This is a qualitative three-dimensional argument; no calculation is needed in three dimensions.
</details>

## How did you do?

- **Q1 or Q3 wrong:** re-read "Total momentum and the center of mass" and Worked example 1 of the [study guide](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-study-guide/). Use signed velocities.
- **Q2 or Q6 incomplete:** revisit "Choosing the system". Name the system, then list the external forces.
- **Q4 wrong:** go through Worked example 2 and Figure 2. Conserve x and y separately.
- **Q5 or Q7 incomplete:** your answer must say *why*: what the slope of a P–t graph means, or why equal and opposite momenta force the geometry.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/4-3-conservation-linear-momentum-checklist/).
