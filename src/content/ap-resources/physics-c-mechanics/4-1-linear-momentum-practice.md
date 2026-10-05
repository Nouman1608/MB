---
resourceId: "mb-ap-physcm-4.1-practice"
title: "Linear Momentum: Practice Questions (Physics C: Mechanics 4.1)"
description: "Seven original Marlbridge calculus-based practice questions on momentum as a vector, system momentum, momentum from position functions, K = p²/2m, and the collision and explosion models."
course: "physics-c-mechanics"
unit: 4
topics: ["4.1"]
resourceType: "practice-questions"
prerequisites:
  - "Vector components and differentiation of polynomials"
prerequisiteResources: ["mb-ap-physcm-4.1-study-guide"]
learningObjectives:
  - "Calculate momentum from p = mv with the correct sign and direction"
  - "Find the momentum of a two-object system in two dimensions"
  - "Differentiate a position function to find momentum and sketch momentum–time graphs"
  - "Use K = p²/(2m) to predict factors of change"
  - "Justify the collision and explosion models with force and time estimates"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic and inverse tangents. g = 9.8 m/s². Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-4.1-study-guide", "mb-ap-physcm-4.1-revision-notes", "mb-ap-physcm-4.1-checklist"]
next: "mb-ap-physcm-4.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question that needs a sign convention states its axes. Polynomial coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, x and y are in m, velocities in m/s, momenta in kg·m/s and t in s, so each numerical coefficient carries whatever unit makes the term correct. Use g = 9.8 m/s². Round final answers to 2 significant figures unless told otherwise.

## Question 1 (multiple choice · foundation)

Take **+x to the right**. A 0.50 kg particle has position x(t) = 4.0t − 1.0t². What is its momentum at t = 3.0 s?

- (A) +0.50 kg·m/s
- (B) +1.0 kg·m/s
- (C) −1.0 kg·m/s
- (D) −2.0 kg·m/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** v_x = dx/dt = 4.0 − 2.0t, so v_x(3.0) = −2.0 m/s and p_x = 0.50 × (−2.0) = −1.0 kg·m/s. The particle moves left.

- (A) uses position divided by time: x(3.0) = 3.0 m, and 0.50 × (3.0 ÷ 3.0) = 0.50. Position over clock time is not velocity.
- (B) uses the speed and drops the sign. Momentum points the same way as the velocity, which is −x here.
- (D) is the velocity, −2.0 m/s, with the mass left out.
</details>

## Question 2 (multiple choice · core)

A cart's kinetic energy is made four times larger while its mass stays the same. By what factor does the size of its momentum change?

- (A) ½
- (B) 2
- (C) 4
- (D) 16

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** |p| = √(2mK). With m fixed, |p| ∝ √K, so a factor of 4 on K gives a factor of √4 = 2 on p. (Equivalently, K × 4 means the speed doubles, and p ∝ v.)

- (A) inverts the relationship. More kinetic energy at the same mass means more speed, so more momentum.
- (C) assumes p is proportional to K. It is proportional to √K.
- (D) squares the factor instead of taking its square root.
</details>

## Question 3 (multiple choice · core)

For which interaction is the **collision model** least appropriate?

- (A) A hammer drives a nail during a 2 ms impact.
- (B) Two steel ball bearings bounce off each other on a level table.
- (C) A heavy crate slides slowly into a thick foam block on a rough floor and takes 1.5 s to stop.
- (D) A golf club strikes a ball resting on a tee.

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** The collision model needs the forces between the objects to be much larger than the net external force during the interaction. The crate's contact with the foam is slow and gentle, and floor friction acts on the crate the whole time with a comparable size. Friction cannot be ignored over 1.5 s.

- (A) The hammer exerts a very large force on the nail for only 2 ms, far larger than the nail's weight. Compared with the slow crate in (C), external forces have very little time to act, so the collision model fits far better.
- (B) Steel bearings interact briefly with large forces. Gravity is balanced by the table and rolling friction is tiny over the contact time.
- (D) The club's force on the ball is thousands of times its weight during a very short contact. This is a typical collision.
</details>

## Question 4 (calculation · core)

Take **+x east and +y north** on a smooth, level floor. Ball A (0.45 kg) moves with velocity (5.0, 12) m/s. Ball B (0.30 kg) moves with velocity (−4.0, −2.0) m/s.

(a) Find the momentum of each ball in component form.
(b) Find the size and direction of the momentum of the two-ball system.

<details>
<summary>Worked solution</summary>

1. **(a)** p_A = 0.45 × (5.0, 12) = **(2.25, 5.4) kg·m/s**. p_B = 0.30 × (−4.0, −2.0) = **(−1.2, −0.60) kg·m/s**.
2. **(b)** Components: p_x = 2.25 − 1.2 = 1.05 kg·m/s; p_y = 5.4 − 0.60 = 4.8 kg·m/s.
3. Size: √(1.05² + 4.8²) ≈ **4.9 kg·m/s**.
4. Direction: tan θ = 4.8 ÷ 1.05, θ ≈ **78° north of east** (first quadrant, since both components are positive).

Suggested mark points (3): 1 for both momenta in components with signs; 1 for adding components; 1 for size and direction with the quadrant justified.

Common error: adding the sizes, 5.85 + 1.34 ≈ 7.2 kg·m/s. That ignores the fact that B's momentum points partly against A's.
</details>

## Question 5 (constructed response · core)

Take **+x horizontal and +y vertically upward**, origin at the launch point. A 0.20 kg ball is launched and its position is r(t) = (4.0t) **i** + (6.0t − 4.9t²) **j** until it lands. Air resistance is negligible.

(a) Find p_x(t) and p_y(t).
(b) On one set of axes, sketch p_x and p_y against t from t = 0 to t = 1.0 s. Label the values at t = 0 and t = 1.0 s and where any graph crosses zero.
(c) Find the smallest size of the ball's momentum during the flight and when it occurs.
(d) Find the slope of your p_y–t graph, with its unit, and compare it with the ball's weight.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** p_x = m dx/dt = 0.20 × 4.0 = **0.80 kg·m/s** (constant). p_y = m dy/dt = 0.20(6.0 − 9.8t) = **1.2 − 1.96t** kg·m/s.

**(b)** p_x: a horizontal line at 0.80 kg·m/s. p_y: a straight line falling from +1.2 kg·m/s at t = 0, crossing zero at t = 1.2 ÷ 1.96 ≈ **0.61 s**, and reaching −0.76 kg·m/s at t = 1.0 s.

**(c)** |p| = √(p_x² + p_y²). Since p_x is constant, |p| is smallest when p_y = 0, at t ≈ **0.61 s** (the top of the flight). Then |p| = **0.80 kg·m/s**, pointing horizontally.

**(d)** Slope = dp_y/dt = **−1.96 kg·m/s²** = −1.96 N. The weight is mg = 0.20 × 9.8 = 1.96 N downward. The slope equals the weight, with the sign showing it points in −y. (Topic 4.2 shows why: the slope of a p–t graph is the net force.)

| Point | What earns it |
|---|---|
| 1 | (a) Both components by differentiating, with m included |
| 1 | (b) p_x drawn constant and p_y drawn as a straight line with negative slope |
| 1 | (b) Labelled values: 0.80; 1.2 at t = 0; zero crossing near 0.61 s; −0.76 at 1.0 s |
| 1 | (c) Minimum 0.80 kg·m/s at about 0.61 s, with the reason that p_x is constant |
| 1 | (d) Slope −1.96 N (or kg·m/s²) and matched to the weight, including its direction |

**Alternative method for (c).** Writing |p|² = 0.64 + (1.2 − 1.96t)² and setting its derivative to zero gives the same time and earns the point.
</details>

## Question 6 (constructed response · stretch)

Take **+x in the direction of the shot** on level ice. A 0.16 kg puck at rest is struck by a stick. A sensor in the stick records an average force of 900 N in +x over a contact time of 2.0 ms. The coefficient of kinetic friction between puck and ice is 0.050.

(a) Compare the stick's force with the friction force on the puck while they are in contact.
(b) Estimate the change in the puck's velocity during the contact due to (i) the stick and (ii) friction.
(c) Use your answers to justify modelling the hit as a collision.
(d) After the hit, the puck slides 25 m to the goal. A student says: "Friction can be ignored for the whole shot, because it was negligible during the hit." Evaluate this claim with a calculation.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Friction: f = μmg = 0.050 × 0.16 × 9.8 ≈ **0.078 N**. The stick's force, 900 N, is about **11 000 times** larger. (The puck's weight is balanced by the normal force, so there is no net vertical force.)

**(b)** (i) Δv = F Δt ÷ m = 900 × 0.0020 ÷ 0.16 ≈ **11 m/s** (11.25 m/s). (ii) Δv = f Δt ÷ m = 0.078 × 0.0020 ÷ 0.16 ≈ **0.00098 m/s**, about 1 mm/s.

**(c)** The interaction force between stick and puck is far larger than the net external force on the puck, and over the 2.0 ms contact the external force changes the velocity by about 0.01% of the stick's effect. That is exactly the condition for the collision model. Only the states just before and just after the hit matter, so the puck can be treated as an object.

**(d)** After the hit, friction gives a deceleration of μg = 0.49 m/s². Over 25 m, v² = 11.25² − 2 × 0.49 × 25, so v ≈ **10 m/s**: the puck loses about 1.1 m/s over roughly 2.3 s. That is about 10% of its speed, not negligible. The claim is **wrong**: friction is negligible during the 2.0 ms contact because the time is short and the stick's force is huge, not because friction is small in general.

| Point | What earns it |
|---|---|
| 1 | (a) Friction ≈ 0.078 N and a ratio of order 10⁴ |
| 1 | (b) Both velocity changes, about 11 m/s and about 0.001 m/s |
| 1 | (c) States the collision condition (interaction force ≫ net external force over the contact) using the numbers |
| 1 | (d) Finds the speed loss over 25 m (about 1.1 m/s, or about 10%) |
| 1 | (d) Explains that the collision model holds only for the short contact time |
</details>

## Question 7 (constructed response · stretch)

Take **+x to the right** on a level, low-friction track. Two carts are held together at rest with a compressed spring between them. When released, cart A (0.30 kg) moves left and cart B (0.60 kg) moves right. Motion sensors show both carts have momentum of size 0.90 kg·m/s.

(a) Starting from p = mv and K = ½mv², show that K = p²/(2m).
(b) Find the kinetic energy of each cart and the ratio K_A/K_B.
(c) Explain why this event fits the explosion model, and state the momentum of the two-cart system after release.
(d) A student says: "The carts have the same momentum, so the spring gave each one the same amount of energy." Evaluate the claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** v = p/m, so K = ½m(p/m)² = **p²/(2m)**.

**(b)** K_A = 0.90² ÷ (2 × 0.30) = **1.35 J**; K_B = 0.90² ÷ (2 × 0.60) = **0.675 J**. Ratio K_A/K_B = **2.0**, which equals m_B/m_A.

**(c)** The spring is **inside** the system. Its forces push the two parts of the system apart, which is the explosion model; no fire or noise is needed. The momenta are −0.90 kg·m/s (A) and +0.90 kg·m/s (B), so the system momentum is **zero**, the same as before release, even though both carts now move.

**(d)** The claim is **false**. Equal momenta do not mean equal kinetic energies. From K = p²/(2m), with the same p the lighter cart A gets twice the kinetic energy of B: 1.35 J against 0.675 J. The spring's stored energy, at least 2.0 J, is shared unequally.

| Point | What earns it |
|---|---|
| 1 | (a) Substitutes v = p/m and simplifies |
| 1 | (b) Both kinetic energies correct |
| 1 | (b) Ratio 2.0, linked to the mass ratio |
| 1 | (c) Identifies internal (spring) forces pushing parts apart, and system momentum zero from signed values |
| 1 | (d) Rejects the claim using K = p²/(2m) and the different masses |

A student who finds the speeds first (3.0 m/s and 1.5 m/s) and uses ½mv² for (b) earns both (b) points.
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "The definition: p = mv" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-study-guide/). Keep signs and add components.
- **Q2 or Q7 wrong:** revisit "Momentum and kinetic energy" and its factor-of-change table.
- **Q5 incomplete:** work through Worked example 2 and Figure 2. Differentiate each component and multiply by m.
- **Q3 or Q6 incomplete:** re-read "Collisions and explosions as models". The collision model depends on the size of forces **and** the length of time they act.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/4-1-linear-momentum-checklist/).
