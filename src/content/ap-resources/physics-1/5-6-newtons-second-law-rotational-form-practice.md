---
resourceId: "mb-ap-phys1-5.6-practice"
title: "Newton's Second Law in Rotational Form: Practice Questions (Physics 1 5.6)"
description: "Seven original Marlbridge practice questions on α = τ_net / I: proportional reasoning, hoops and disks, a spin-up with friction, a pulley with rotational inertia, a torque experiment and a spool on ice."
course: "physics-1"
unit: 5
topics: ["5.6"]
resourceType: "practice-questions"
prerequisites:
  - "Calculating torque and rotational inertia (Topics 5.3 and 5.4)"
prerequisiteResources: ["mb-ap-phys1-5.6-study-guide"]
learningObjectives:
  - "Predict how angular acceleration changes when net torque or rotational inertia changes"
  - "Calculate α from several torques, including a friction torque, and follow it with rotational kinematics"
  - "Solve a connected system with a pulley that has rotational inertia"
  - "Use experimental data to find a rotational inertia and a friction torque, and evaluate a claim"
  - "Justify why linear and rotational motion of one object are analysed separately"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. g = 9.8 m/s². Rotational inertias of extended objects are given. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-5.6-study-guide", "mb-ap-phys1-5.6-revision-notes", "mb-ap-phys1-5.6-checklist"]
next: "mb-ap-phys1-5.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "State your sign conventions for both the linear and the rotational equations."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. Use g = 9.8 m/s² where gravity appears. Rotational inertias of extended objects are given where needed. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

The net torque on a turntable is doubled. At the same time, a heavy plate is placed on it, which triples its rotational inertia about the axle. By what factor does the turntable's angular acceleration change?

- (A) 6
- (B) 3/2
- (C) 2/3
- (D) 2

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** α = τ_net / I. The numerator is multiplied by 2 and the denominator by 3, so α is multiplied by **2/3**.

- (A) multiplies both factors, as if α were proportional to I as well as to τ.
- (B) inverts the ratio: α would be proportional to I and inversely proportional to τ.
- (D) uses only the torque change and ignores the extra rotational inertia.
</details>

## Question 2 (multiple choice · core)

A thin hoop and a solid disk have the same mass M and the same radius R. Each is free to turn about a fixed axle through its centre. The rotational inertias are MR² for the hoop and ½MR² for the disk. A string wound around the rim of each is pulled with the same constant force F. How do their angular accelerations compare?

- (A) The disk's angular acceleration is twice the hoop's.
- (B) The hoop's angular acceleration is twice the disk's.
- (C) They are equal, because the two objects have the same mass.
- (D) They are equal, because the two torques are equal.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Both strings pull at radius R, so both torques are FR. Then α_disk = FR ÷ (½MR²) = 2F/(MR) and α_hoop = FR ÷ (MR²) = F/(MR). The disk's α is twice the hoop's because its mass is, on average, closer to the axle.

- (B) gets the inverse relationship backwards: the larger I gives the **smaller** α.
- (C) treats mass alone as the measure of resistance to rotation. How the mass is spread out matters.
- (D) is right that the torques are equal, but equal torques give equal α only if the rotational inertias are also equal.
</details>

## Question 3 (multiple choice · core)

A fan's blades spin counterclockwise. The fan is switched off, and the only torque on the blades is a friction torque from the bearing. Which statement is correct while the blades are slowing down?

- (A) The angular acceleration is counterclockwise, because the blades spin counterclockwise.
- (B) The angular acceleration is clockwise, in the same sense as the net torque.
- (C) The angular acceleration is zero, because no motor torque acts.
- (D) The angular acceleration is clockwise, but the net torque is zero.

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The friction torque opposes the rotation, so it is clockwise. It is the only torque, so the net torque is clockwise, and α = τ_net / I points the same way. α and ω have opposite senses, which is why the blades slow down.

- (A) assumes α follows ω. It follows the net torque.
- (C) forgets that friction is a torque. A non-zero net torque always gives a non-zero α.
- (D) contradicts the rotational second law: a non-zero α needs a non-zero net torque.
</details>

## Question 4 (calculation · core)

A bicycle wheel is mounted on a stand so that it can turn freely about its axle, apart from a constant friction torque of 0.30 N·m from the bearing. Its rotational inertia is 0.12 kg·m². Starting from rest, a student pushes the tyre with a constant force of 15 N, tangent to the tyre at 0.30 m from the axle, for 0.80 s.

(a) Find the angular acceleration while the student pushes.
(b) Find the angular velocity when the push ends.
(c) After the push ends, how long does the wheel take to stop?

<details>
<summary>Worked solution</summary>

**(a)** Take the sense of the push as positive. Applied torque = (0.30 m)(15 N) = 4.5 N·m. Friction opposes it: τ_net = 4.5 − 0.30 = 4.2 N·m. α = 4.2 ÷ 0.12 = **35 rad/s²**.

**(b)** ω = ω₀ + αt = 0 + (35)(0.80) = **28 rad/s**.

**(c)** Only friction acts: α = −0.30 ÷ 0.12 = −2.5 rad/s². Then 0 = 28 + (−2.5)t, so **t = 11.2 s ≈ 11 s**.

Suggested mark points (4): 1 for the net torque with friction subtracted; 1 for 35 rad/s²; 1 for 28 rad/s; 1 for the time to stop using α from friction alone.

Common error: ignoring friction in (a) gives α = 37.5 rad/s² and ω = 30 rad/s. Friction torque is small here but still part of the net torque.
</details>

## Question 5 (constructed response · core)

Block A (mass 3.0 kg) sits on a frictionless horizontal table. A light string runs from A over a pulley at the table's edge to block B (mass 1.0 kg), which hangs below. The pulley has radius 0.050 m and rotational inertia 0.010 kg·m², turns without friction, and the string does not slip. The blocks are released from rest.

(a) Write separate equations for block A, block B and the pulley, naming each tension.
(b) Derive an expression for the acceleration of the blocks.
(c) Calculate the acceleration and both tensions.
(d) Explain why the two tensions are different, and compare the acceleration with that for a light pulley.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Positive directions: A towards the pulley, B downward, pulley in the sense that matches.
Block A: T_A = m_A a. Block B: m_B g − T_B = m_B a. Pulley: (T_B − T_A)R = Iα, with α = a/R.

**(b)** From the pulley, T_B − T_A = (I/R²)a. Add all three equations: m_B g = (m_A + m_B + I/R²)a, so
**a = m_B g / (m_A + m_B + I/R²)**.

**(c)** I/R² = 0.010 ÷ 0.050² = 4.0 kg. a = (1.0)(9.8) ÷ (3.0 + 1.0 + 4.0) = **1.225 m/s² ≈ 1.2 m/s²**.
T_A = (3.0)(1.225) = **3.7 N**. T_B = (1.0)(9.8 − 1.225) = **8.6 N**.
Check: (T_B − T_A)R = (4.9 N)(0.050 m) = 0.245 N·m, and Iα = (0.010)(1.225 ÷ 0.050) = (0.010)(24.5) = 0.245 N·m.

**(d)** The pulley speeds up, so it needs a net torque. The only torques come from the two tensions, so they cannot be equal: the hanging side must pull harder. With a light pulley (I = 0), a = 9.8 ÷ 4.0 = 2.45 m/s², twice as large. The pulley's rotational inertia acts like an extra 4.0 kg to be accelerated.

| Point | What earns it |
|---|---|
| 1 | Two different tensions, with correct equations for both blocks |
| 1 | Pulley equation (T_B − T_A)R = Iα |
| 1 | Uses a = Rα to combine the equations |
| 1 | a ≈ 1.2 m/s² |
| 1 | Both tensions correct |
| 1 | Explains that a net torque is needed to change the pulley's ω, so the tensions differ |
</details>

## Question 6 (experimental design and analysis · stretch)

A student wants the rotational inertia of a turntable. She wraps a cord around its spindle and pulls with a force sensor, so she knows the applied torque τ. A rotary sensor gives the angular acceleration α. The data below are invented for practice.

| τ applied (N·m) | 0.020 | 0.040 | 0.060 | 0.080 | 0.100 |
|---|---|---|---|---|---|
| α (rad/s²) | 0.30 | 0.97 | 1.63 | 2.30 | 2.97 |

The student claims: "α is directly proportional to the applied torque, so the turntable's bearing has no friction."

(a) Plot α against applied τ, or describe the graph, and find its slope.
(b) Use the rotational second law to explain what the slope and the horizontal intercept represent. Find I and the friction torque.
(c) Evaluate the student's claim.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The points lie on a straight line. Slope from the first and last points: (2.97 − 0.30) ÷ (0.100 − 0.020) = 2.67 ÷ 0.080 = **33.4 kg⁻¹·m⁻²** (rad/s² per N·m). A best-fit line gives 33.35.

**(b)** With a constant friction torque τ_f, the rotational second law gives Iα = τ − τ_f, so **α = (1/I)τ − τ_f / I**. The slope is 1/I, so **I = 1 ÷ 33.4 ≈ 0.030 kg·m²**. The line meets α = 0 where τ = τ_f. Extending the line: τ_f = 0.020 − 0.30 ÷ 33.4 ≈ **0.011 N·m**.

**(c)** The claim is **not supported**. The line is straight, but it does not pass through the origin: it cuts the τ axis at about 0.011 N·m. That is exactly what a constant friction torque produces. The ratio α/τ also changes (15 at the first point, 29.7 at the last), which would not happen for direct proportion. α is proportional to the **net** torque, τ − τ_f, not to the applied torque.

| Point | What earns it |
|---|---|
| 1 | Straight line with slope ≈ 33 per kg·m² |
| 1 | Writes Iα = τ − τ_f (or equivalent) |
| 1 | I ≈ 0.030 kg·m² from 1/slope |
| 1 | Friction torque ≈ 0.011 N·m from the intercept |
| 1 | Rejects the claim **because** the line does not pass through the origin |
</details>

## Question 7 (constructed response · stretch)

Two identical spools (mass 0.50 kg, radius 0.040 m, rotational inertia 4.0 × 10⁻⁴ kg·m² about the centre) rest on frictionless ice. Spool P is pulled by a string tied to its centre. Spool Q is pulled by a string wound around its rim, so the string unwinds as Q moves. Both strings are horizontal and are pulled with the same constant force, 2.0 N.

A student says: "Spool Q starts spinning, so some of the force goes into the spin. Its centre must accelerate less than spool P's."

(a) Find the acceleration of the centre of each spool.
(b) Find the angular acceleration of each spool.
(c) Evaluate the student's claim.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Linear analysis, separately for each spool: the only horizontal force is 2.0 N (the ice is frictionless; gravity and the normal force cancel). So a_cm = 2.0 N ÷ 0.50 kg = **4.0 m/s² for both**.

**(b)** P: the string pulls through the centre, so zero lever arm, τ = 0 and **α = 0**. Q: τ = (0.040 m)(2.0 N) = 0.080 N·m, so α = 0.080 ÷ (4.0 × 10⁻⁴) = **200 rad/s²**.

**(c)** The claim is **wrong**. Linear and rotational motion are analysed separately: the centre's acceleration depends only on the net force and the mass, and is the same for both spools. Where the force acts affects only the torque, so only Q spins up. The force is not "shared" between the two motions. (In Unit 6 you will see where Q's extra kinetic energy comes from: the hand pulling Q's string moves further, because string also unwinds, so it does more work.)

| Point | What earns it |
|---|---|
| 1 | a_cm = 4.0 m/s² for both, from ΣF = ma |
| 1 | α = 0 for P, with zero lever arm as the reason |
| 1 | α = 200 rad/s² for Q |
| 1 | States the claim is wrong because the linear and rotational equations are independent |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Using functional dependence" in the [study guide](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-study-guide/).
- **Q3 or Q4 wrong:** rework Worked example 1. α follows the net torque, and friction is part of it.
- **Q5 incomplete:** compare your equations with Worked example 2 and Figure 1.
- **Q6 incomplete:** link the slope to 1/I and the intercept to friction, then give the reason.
- **Q7 incomplete:** see "Linear and rotational analyses are separate".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/5-6-newtons-second-law-rotational-form-checklist/).
