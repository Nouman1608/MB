---
resourceId: "mb-ap-phys1-6.1-practice"
title: "Rotational Kinetic Energy: Practice Questions (Physics 1 6.1)"
description: "Seven original Marlbridge practice questions on rotational kinetic energy, rotational inertia, unit conversion, double counting and graphing spin data, with worked solutions and suggested mark points."
course: "physics-1"
unit: 6
topics: ["6.1"]
resourceType: "practice-questions"
prerequisites:
  - "Rotational inertia of point objects, I = Σmr², and the parallel axis theorem"
prerequisiteResources: ["mb-ap-phys1-6.1-study-guide"]
learningObjectives:
  - "Calculate rotational kinetic energy for systems of point objects and for objects with a given rotational inertia"
  - "Convert rev/min to rad/s before using K = ½Iω²"
  - "Predict factors of change in rotational kinetic energy when ω or I changes"
  - "Explain why ½I_pivot ω² equals ½Mv_cm² + ½I_cm ω² for an object on a pivot"
  - "Use a linearised graph of spin data to support or refute a claim about K and ω"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. ω must be in rad/s. Rotational inertias of extended objects are given. Give answers to 2 or 3 significant figures; keep unrounded values until the last step"
related: ["mb-ap-phys1-6.1-study-guide", "mb-ap-phys1-6.1-revision-notes", "mb-ap-phys1-6.1-checklist"]
next: "mb-ap-phys1-6.1-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Convert every angular velocity to rad/s before squaring it."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. All data are invented for practice. Angular velocities must be in rad/s; rotational inertias of extended objects are given in each question. Round final answers to 2 or 3 significant figures, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A record turntable spins on a fixed axle. Its angular velocity is increased from 2.0 rad/s to 6.0 rad/s. Its rotational inertia does not change. By what factor does its rotational kinetic energy change?

- (A) × 3
- (B) × 6
- (C) × 9
- (D) × √3

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** K = ½Iω², so K is proportional to ω². The angular velocity is multiplied by 6.0 ÷ 2.0 = 3, so K is multiplied by 3² = 9.

- (A) treats K as proportional to ω, forgetting the square.
- (B) doubles the factor of 3, perhaps from the "2" in ½ or from adding instead of squaring.
- (D) takes the square root instead of squaring. That would be the factor for ω if K had been tripled.
</details>

## Question 2 (multiple choice · core)

A thin hoop and a uniform disc have the same mass M and the same radius R. Their rotational inertias about their central axes are MR² for the hoop and ½MR² for the disc. Both spin on fixed axles at the same angular velocity. What is the ratio K_hoop : K_disc?

- (A) 1 : 1
- (B) 2 : 1
- (C) 1 : 2
- (D) 4 : 1

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** At the same ω, K = ½Iω² is proportional to I. The hoop's rotational inertia is twice the disc's, so it has twice the kinetic energy. Physically, all the hoop's mass is at the rim, where pieces move fastest; much of the disc's mass is near the axle and moves slowly.

- (A) assumes same mass and same ω give the same energy, ignoring mass distribution.
- (C) inverts the ratio, as if mass near the axis carried more energy.
- (D) squares the ratio of rotational inertias. Only ω is squared in K = ½Iω².
</details>

## Question 3 (multiple choice · core)

Two identical wheels are mounted side by side on separate fixed axles. Wheel P spins clockwise at 12 rad/s and wheel Q spins counterclockwise at 12 rad/s. Each wheel on its own has rotational kinetic energy K₀. What is the total kinetic energy of the two-wheel system?

- (A) 0
- (B) K₀
- (C) 2K₀
- (D) 4K₀

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Kinetic energy is a scalar. Each wheel has K₀ whichever way it turns, because ω is squared. Scalars add as plain numbers: K₀ + K₀ = 2K₀.

- (A) treats kinetic energy like a vector, letting the opposite spins cancel. Angular velocities can cancel; kinetic energies cannot.
- (B) counts only one wheel, or assumes the second wheel's energy is "negative" and partly cancels.
- (D) adds the angular speeds first (24 rad/s) and then squares, as if one wheel spun twice as fast.
</details>

## Question 4 (calculation · core)

A light, rigid frame holds three small objects that all turn together about a vertical axle at 8.0 rad/s. Treat them as point objects and ignore the frame's mass.

| Object | Mass (kg) | Distance from axle (m) |
|---|---|---|
| 1 | 0.20 | 0.30 |
| 2 | 0.30 | 0.20 |
| 3 | 0.10 | 0.50 |

(a) Calculate the rotational inertia of the system about the axle.
(b) Calculate the system's rotational kinetic energy.
(c) Which object has the most kinetic energy? Show that its energy is almost half the total.

<details>
<summary>Worked solution</summary>

**(a)** I = Σmr² = 0.20 × 0.30² + 0.30 × 0.20² + 0.10 × 0.50² = 0.018 + 0.012 + 0.025 = **0.055 kg·m²**.

**(b)** K = ½Iω² = ½ × 0.055 × 8.0² = **1.76 J ≈ 1.8 J**.

**(c)** Speeds v = rω: 2.4 m/s, 1.6 m/s and 4.0 m/s. Kinetic energies ½mv²: 0.576 J, 0.384 J and **0.800 J**. They add to 1.76 J, matching (b). Object 3 has the most, and 0.800 ÷ 1.76 = 0.45, about 45 % of the total, even though it has the **least** mass. Its large distance from the axle gives it the highest speed, and K grows with v².

Suggested mark points (4): 1 for squaring each distance in I; 1 for I = 0.055 kg·m²; 1 for K = 1.76 J with unit; 1 for identifying object 3 with a reason based on speed or distance.

Common error: using Σmr without squaring gives 0.17 kg·m (wrong unit as well as wrong value).
</details>

## Question 5 (calculation · core)

A workshop flywheel has rotational inertia 0.85 kg·m² about its axle. It spins at 1200 rev/min.

(a) Convert the angular velocity to rad/s.
(b) Calculate the flywheel's kinetic energy.
(c) The motor is switched to 600 rev/min. Without a full recalculation, state the new kinetic energy and explain your reasoning.

<details>
<summary>Worked solution</summary>

**(a)** ω = 1200 × 2π ÷ 60 = **126 rad/s** (125.7 rad/s unrounded).

**(b)** K = ½ × 0.85 × 125.7² = ½ × 0.85 × 15 791 = **6.71 × 10³ J ≈ 6.7 kJ**.

**(c)** Halving ω multiplies K by (½)² = ¼, so K ≈ 6711 ÷ 4 = **1.68 × 10³ J ≈ 1.7 kJ**.

Suggested mark points (4): 1 for the factor 2π ÷ 60; 1 for K ≈ 6.7 kJ; 1 for the factor of ¼; 1 for the reason "K is proportional to ω²".

Common errors: putting 1200 straight into ½Iω² gives 612 000 J, about 91 times too big; using 20 rev/s without the 2π gives 170 J, which is 4π² ≈ 39 times too small.
</details>

## Question 6 (constructed response · stretch)

A uniform door of mass 24 kg and width 0.90 m swings about its hinges at a steady 1.5 rad/s. Its rotational inertia about the hinge axis is ⅓ML², and about a parallel axis through its centre of mass it is (1/12)ML², where L is the width.

(a) Calculate the door's kinetic energy using the rotational inertia about the hinges.
(b) A student says: "The door's centre of mass is halfway across, so it moves at 0.45 m × 1.5 rad/s. The kinetic energy is ½Mv_cm²." Calculate the student's value and explain why it is too small.
(c) Show that adding the missing energy to the student's value gives your answer to (a).

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** I_hinge = ⅓ × 24 × 0.90² = 6.48 kg·m². K = ½ × 6.48 × 1.5² = **7.29 J ≈ 7.3 J**.

**(b)** v_cm = 0.45 × 1.5 = 0.675 m/s, so ½Mv_cm² = ½ × 24 × 0.675² = **5.47 J**. This only counts the motion of the centre of mass. The door also **turns** about its centre of mass: the edge far from the hinges moves at 0.90 × 1.5 = 1.35 m/s, faster than the centre, and the part near the hinges moves slower. That rotation about the centre of mass has its own kinetic energy, which the student has left out.

**(c)** I_cm = (1/12) × 24 × 0.90² = 1.62 kg·m², so ½I_cm ω² = ½ × 1.62 × 1.5² = 1.82 J. Total: 5.47 + 1.82 = **7.29 J**, the same as (a). The parallel axis theorem guarantees this: I_cm + M(L/2)² = 1.62 + 24 × 0.45² = 6.48 kg·m² = I_hinge.

| Point | What earns it |
|---|---|
| 1 | K = 7.29 J from ½I_hinge ω², with unit |
| 1 | Student's value 5.47 J |
| 1 | Explains that the door also rotates about its centre of mass, so parts move at different speeds |
| 1 | Calculates the rotational part, 1.82 J, using I_cm |
| 1 | Shows the sum equals (a), or links the agreement to the parallel axis theorem |

A student who writes ½I_hinge ω² + ½Mv_cm² = 12.8 J in (c) has double counted and loses the last two points.
</details>

## Question 7 (constructed response · stretch)

A calibrated motor spins a small wheel up from rest on a low-friction axle. At each run the motor reports the energy it has given to the wheel, and a sensor measures the final angular velocity.

| ω (rad/s) | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|
| K (J) | 0.010 | 0.041 | 0.091 | 0.159 | 0.252 |

A student claims: "The kinetic energy is directly proportional to the angular velocity."

(a) Say what quantities you would plot to get a straight line through the origin if K = ½Iω² is correct.
(b) Process the data and use the graph's slope to find the wheel's rotational inertia.
(c) Do the data support the student's claim? Use the data to justify your answer.
(d) Predict the kinetic energy at 12 rad/s.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Plot K (vertical, J) against ω² (horizontal, rad²/s²). If K = ½Iω², the points lie on a straight line through the origin with slope ½I.

**(b)** ω² values: 4.0, 16, 36, 64, 100 rad²/s². A best-fit line through the points has slope ≈ 0.0025 J·s²/rad² (a least-squares fit gives 0.00251; the end points give (0.252 − 0.010) ÷ (100 − 4.0) = 0.00252). So ½I = 0.0025 kg·m² and **I ≈ 0.0050 kg·m²**.

**(c)** The data **do not support** the claim. If K were proportional to ω, then K ÷ ω would be constant. It is not: it rises from 0.010 ÷ 2.0 = 0.0050 to 0.252 ÷ 10.0 = 0.025 J·s/rad, five times larger. Instead K ÷ ω² stays close to 0.0025 for every run (0.00250, 0.00256, 0.00253, 0.00248, 0.00252), so K is proportional to ω². For example, doubling ω from 4.0 to 8.0 rad/s multiplies K by 0.159 ÷ 0.041 ≈ 3.9, close to 4, not 2.

**(d)** K = ½ × 0.0050 × 12² ≈ **0.36 J**.

| Point | What earns it |
|---|---|
| 1 | Plots K against ω² (axes named) |
| 1 | Slope ≈ 0.0025 and I ≈ 0.0050 kg·m², with the link slope = ½I |
| 1 | Shows K ÷ ω is not constant (or a factor-of-change test giving about × 4, not × 2) |
| 1 | Concludes K is proportional to ω², so the claim is refuted |
| 1 | Prediction ≈ 0.36 J |

**Alternative method.** Plotting K against ω gives a curve, not a straight line; stating that the curve bends upward and is therefore not a direct proportion earns the third and fourth points, but not the second.
</details>

## How did you do?

- **Q1 or Q5(c) wrong:** revisit "Comparing scenarios: factors of change" in the [study guide](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-study-guide/).
- **Q2 or Q4 wrong:** re-read "Why mass far from the axis matters" and Figure 1.
- **Q3 wrong:** see "Rotational kinetic energy is a scalar".
- **Q5(a)–(b) wrong:** see "Units: always rad/s".
- **Q6 incomplete:** work through Worked example 1 and "Two ways to describe one motion".
- **Q7 incomplete:** your claim needs evidence from the data, such as a ratio that stays constant or a factor of change.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-1-rotational-kinetic-energy-checklist/).
