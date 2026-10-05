---
resourceId: "mb-ap-physcm-6.4-practice"
title: "Conservation of Angular Momentum: Practice Questions (Physics C: Mechanics 6.4)"
description: "Seven original Marlbridge calculus-based practice questions on conservation of angular momentum: system choice, pivot collisions, shape changes, changing inertia and platform data."
course: "physics-c-mechanics"
unit: 6
topics: ["6.4"]
resourceType: "practice-questions"
prerequisites:
  - "Angular momentum and τ_net = dL/dt (Topic 6.3); rotational inertia of point masses (Topic 5.4)"
prerequisiteResources: ["mb-ap-physcm-6.4-study-guide"]
learningObjectives:
  - "Choose a system and decide whether its angular momentum is constant"
  - "Use conservation of angular momentum about a pivot or axle to find final angular velocities"
  - "Handle rotational inertia that changes with time using calculus"
  - "Prove that internal torques cancel and give equal and opposite angular impulses"
  - "Linearise rotating-platform data to test conservation and extract I and L"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.4-study-guide", "mb-ap-physcm-6.4-revision-notes", "mb-ap-physcm-6.4-checklist"]
next: "mb-ap-physcm-6.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its axis and, where it matters, its positive sense of rotation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, ω is in rad/s, I in kg·m², L in kg·m²/s, r in m and t in s, so each numerical coefficient carries whatever unit makes the term correct. Axles and bearings are frictionless unless stated. Treat small masses as points. Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

A system turns freely about a fixed vertical axis with no external torque. Parts of it move inward until its rotational inertia about the axis is one third of its starting value. Which describes the new angular velocity and the new rotational kinetic energy, compared with the start?

- (A) ω is 3 times larger; K is 3 times larger.
- (B) ω is 3 times larger; K is unchanged.
- (C) ω is 3 times larger; K is 9 times larger.
- (D) ω is √3 times larger; K is unchanged.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** L = Iω is constant, so ω = L/I triples. K = L²/(2I) with L fixed, so K is inversely proportional to I and also triples. The extra energy is work done by the internal forces.

- (B) assumes kinetic energy is conserved too. Internal forces do work, so K changes.
- (C) squares the factor in ω but forgets that I fell to a third: ½(I/3)(3ω)² = 3 × ½Iω².
- (D) works out ω by keeping K constant instead of L. It is L that is conserved when the external torque is zero.
</details>

## Question 2 (multiple choice · core)

A door hangs on frictionless vertical hinges, at rest, with rotational inertia 0.30 kg·m² about the hinge line. A 0.050 kg lump of clay moves horizontally at 6.0 m/s, perpendicular to the door, and sticks to it 0.80 m from the hinge line. What is the door's angular speed just after the impact?

- (A) 0.72 rad/s
- (B) 0.80 rad/s
- (C) 1.0 rad/s
- (D) 7.5 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** System: clay + door, axis along the hinges. The hinge forces act on the axis, so they exert no torque about it, and L is conserved. Before: L = mvd = 0.050 × 6.0 × 0.80 = 0.24 kg·m²/s. After: I = 0.30 + 0.050 × 0.80² = 0.332 kg·m². ω = 0.24/0.332 = 0.72 rad/s.

- (B) leaves the clay out of the final rotational inertia: 0.24/0.30. The clay turns with the door, so it adds mr².
- (C) uses the clay's linear momentum, mv, as if it were angular momentum: 0.30/0.30. Angular momentum needs the lever arm d.
- (D) is v/r, the clay's own angular speed about the hinges. It ignores the door.
</details>

## Question 3 (multiple choice · core)

A platform can turn freely on a frictionless vertical bearing. A small battery motor is fixed to the platform, with a propeller on its vertical shaft. Everything starts at rest. The motor is switched on and the propeller spins up counterclockwise (seen from above). Which statement is correct?

- (A) The platform turns clockwise, so the total angular momentum of platform, motor and propeller stays zero.
- (B) The platform stays at rest, because the motor's torque is internal to the platform–motor–propeller system.
- (C) The propeller's angular momentum is conserved, because no external torque acts on the whole system.
- (D) The platform turns counterclockwise, because the motor drags it round with the propeller.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** For the system platform + motor + propeller, the bearing exerts no torque about the axis, so L_sys stays at its starting value, zero. The motor's counterclockwise torque on the propeller comes with an equal clockwise torque on the motor body (Newton's third law), which is fixed to the platform. So the platform gains equal clockwise angular momentum.

- (B) is right that the torque is internal, but internal torques can still move angular momentum between parts; they only cannot change the **total**.
- (C) applies conservation to the propeller alone. The motor exerts an external torque on the propeller, so its L changes.
- (D) gives the platform the same sense as the propeller. Then the total would grow from zero with no external torque.
</details>

## Question 4 (calculation · core)

A turntable (I₀ = 0.40 kg·m²) spins at 6.0 rad/s about a vertical axle. From t = 0, sand falls vertically onto it at a steady 0.20 kg/s and settles in a thin ring 0.50 m from the axle, turning with the turntable.

(a) Explain why the angular momentum of turntable + sand about the axle is constant, even though the sand's mass is added.
(b) Show that ω(t) = 2.4/(0.40 + 0.050t), and find ω at t = 4.0 s.
(c) Find dω/dt at t = 4.0 s.
(d) At what time has the angular speed halved?

<details>
<summary>Worked solution</summary>

1. **(a)** The sand falls parallel to the axle, so it brings no angular momentum about the axle. Gravity and the support forces are parallel to the axle and exert no torque about it. So L about the axle stays at its starting value, 0.40 × 6.0 = 2.4 kg·m²/s.
2. **(b)** Sand mass at time t: 0.20t, all at 0.50 m, so I(t) = 0.40 + 0.20t × 0.50² = 0.40 + 0.050t. Then ω = L/I = **2.4/(0.40 + 0.050t)**. At t = 4.0 s: ω = 2.4/0.60 = **4.0 rad/s**.
3. **(c)** dω/dt = −2.4 × 0.050/(0.40 + 0.050t)² = −0.12/0.36 = **−0.33 rad/s²** at 4.0 s.
4. **(d)** ω = 3.0 rad/s when 0.40 + 0.050t = 0.80, so **t = 8.0 s**.

Suggested mark points (4): 1 for the no-torque argument including the sand's zero angular momentum on arrival; 1 for I(t) and ω = 4.0 rad/s; 1 for differentiating to −0.33 rad/s²; 1 for t = 8.0 s.

Common error: leaving out r², so I(t) = 0.40 + 0.20t and ω = 2.0 rad/s at 4.0 s.
</details>

## Question 5 (constructed response · core)

Two particles, 1 and 2, at positions r₁ and r₂ from a fixed point O, exert forces F₁₂ (on 1, by 2) and F₂₁ (on 2, by 1) on each other. No other forces act.

(a) Show that the total torque of this pair about O is zero, stating the two physical facts you use.
(b) Hence show that the total angular momentum of the two particles about O is constant.
(c) Show that during their interaction the angular impulses they exert on each other are equal and opposite.
(d) Sketch, on one set of axes, L₁, L₂ and L₁ + L₂ against time for an interaction that lasts from t₁ to t₂, if particle 1 starts with positive L and particle 2 with zero L.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Newton's third law: F₂₁ = −F₁₂. These forces act along the line joining the particles, so F₁₂ is parallel to r₁ − r₂. Total torque = r₁ × F₁₂ + r₂ × F₂₁ = (r₁ − r₂) × F₁₂ = **0**, because the vector product of parallel vectors is zero.

**(b)** dL₁/dt = r₁ × F₁₂ and dL₂/dt = r₂ × F₂₁ (Topic 6.3). Adding: d(L₁ + L₂)/dt = 0 from (a), so **L₁ + L₂ is constant**.

**(c)** The angular impulse on 1 is ∫r₁ × F₁₂ dt = ΔL₁; on 2 it is ∫r₂ × F₂₁ dt = ΔL₂. From (b), ΔL₁ + ΔL₂ = 0, so **ΔL₂ = −ΔL₁**: equal in size, opposite in direction.

**(d)** L₁ is flat, falls between t₁ and t₂, then is flat again. L₂ starts flat at zero and rises by the same amount L₁ falls. L₁ + L₂ is a horizontal line throughout; the slopes of L₁ and L₂ are always equal and opposite.

| Point | What earns it |
|---|---|
| 1 | (a) Uses Newton's third law **and** that the forces lie along the line joining the particles |
| 1 | (a) Combines to (r₁ − r₂) × F₁₂ = 0 |
| 1 | (b) Adds dL/dt for each particle to get d(L₁ + L₂)/dt = 0 |
| 1 | (c) Equal and opposite angular impulses from ΔL₁ = −ΔL₂ |
| 1 | (d) Correct sketch with a flat total and mirror-image slopes for L₁ and L₂ |
</details>

## Question 6 (constructed response · stretch)

A student tests conservation of angular momentum on a platform that turns freely about a vertical axle. Two equal 0.50 kg masses sit on a rail, one each side, at the same distance r from the axle. She sets the platform turning with the masses at 0.30 m, then uses a string through the axle to pull both masses in, in steps, recording the steady ω at each distance:

| r (m) | 0.30 | 0.25 | 0.20 | 0.15 | 0.10 |
|---|---|---|---|---|---|
| ω (rad/s) | 4.00 | 4.58 | 5.27 | 5.88 | 6.49 |

(a) Show that if L is conserved, 1/ω = I_p/L + (2m/L)r², where I_p is the platform's rotational inertia.
(b) State what to plot to get a straight line, and what the slope and intercept represent.
(c) The best-fit line through the data has slope 1.20 s/(rad·m²) and intercept 0.142 s/rad. Find L and I_p.
(d) Find the change in kinetic energy between r = 0.30 m and r = 0.10 m, and explain where the energy comes from.
(e) The bearing actually has a small friction torque. How would this show up in the data if the readings were taken in order over about a minute?

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I = I_p + 2mr², so L = (I_p + 2mr²)ω. Divide by Lω: **1/ω = I_p/L + (2m/L)r²**.

**(b)** Plot **1/ω (s/rad) against r² (m²)**. Slope = 2m/L; intercept = I_p/L.

**(c)** 2m = 1.0 kg, so L = 1.0/1.20 = **0.83 kg·m²/s**. I_p = intercept × L = 0.142 × 0.833 = **0.12 kg·m²**. Check: (0.12 + 0.09) × 4.00 = 0.84 kg·m²/s at the first reading, which agrees.

**(d)** K at 0.30 m: ½ × (0.12 + 0.090) × 4.00² = 1.7 J. K at 0.10 m: ½ × (0.12 + 0.010) × 6.49² = 2.7 J. K **increases by about 1.1 J** (1.06 J). The energy comes from the work the student does pulling the string.

**(e)** Friction takes angular momentum out over time, so L = (I_p + 2mr²)ω would fall from reading to reading. The later (small-r) points would have smaller ω than predicted, so 1/ω would lie **above** the line.

| Point | What earns it |
|---|---|
| 1 | (a) I = I_p + 2mr² with L constant, rearranged to the given form |
| 1 | (b) 1/ω against r², with slope 2m/L and intercept I_p/L |
| 1 | (c) L ≈ 0.83 kg·m²/s and I_p ≈ 0.12 kg·m² |
| 1 | (d) ΔK ≈ +1.1 J with the work done by the student (internal force) as the source |
| 1 | (e) L falls over time; late (small-r) points lie above the line or give smaller L |

**Alternative for (c).** Fitting your own line to the data earns the point.
</details>

## Question 7 (explanation · stretch)

A large turntable (I = 400 kg·m² about its axle) is at rest on a frictionless bearing. A 60 kg person stands on it 2.0 m from the axle, also at rest. The person starts to walk counterclockwise (seen from above) around a circle of radius 2.0 m, at 1.2 m/s relative to the ground.

A student says: "Angular momentum can't be conserved here. Both the person and the turntable start moving, so the angular momentum has gone up from zero."

(a) Evaluate the student's claim.
(b) Find the turntable's angular velocity, taking counterclockwise as positive.
(c) The person stops walking. What happens to the turntable? Explain.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** The claim is **wrong**. Choose the system person + turntable. The bearing exerts no torque about the axle, so the total L stays at zero. The person's feet push the turntable one way and the turntable pushes the person the other way (Newton's third law), so the two gain angular momenta that are **equal in size and opposite in sense**. Each part moves, but the total is still zero.

**(b)** Person: L = mvd = 60 × 1.2 × 2.0 = +144 kg·m²/s. Turntable: L = −144 kg·m²/s, so ω = −144/400 = **−0.36 rad/s** (clockwise).

**(c)** The total L is still zero, so when the person's L returns to zero the turntable's must too: **the turntable stops as well**.

| Point | What earns it |
|---|---|
| 1 | (a) Identifies a system (person + turntable) with no external torque about the axle |
| 1 | (a) Equal and opposite angular momenta (or angular impulses) from the third-law pair, so the total stays zero |
| 1 | (b) Person's L = 144 kg·m²/s and turntable ω = −0.36 rad/s with the sign |
| 1 | (c) Turntable stops, because the total L must stay zero |
</details>

## How did you do?

- **Q1 wrong:** re-read "Changing shape: same L, different ω" in the [study guide](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-study-guide/). L is conserved; K is not.
- **Q2 or Q3 wrong:** revisit "Choosing the system" and its table. Name the system and the axis before you write L_i = L_f.
- **Q4 wrong:** compare with Worked example 2. Write I as a function of time or position first.
- **Q5, Q6 or Q7 incomplete:** go through "Why internal torques cancel" and Figure 1. Your reasoning must name a system and argue about external torque.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-4-conservation-angular-momentum-checklist/).
