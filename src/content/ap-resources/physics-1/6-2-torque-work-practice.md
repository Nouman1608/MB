---
resourceId: "mb-ap-phys1-6.2-practice"
title: "Torque and Work: Practice Questions (Physics 1 6.2)"
description: "Seven original Marlbridge practice questions on work done by torques, radians, signs of work, torque–angle graph areas, experiment design and comparing two spin-ups, with worked solutions and mark points."
course: "physics-1"
unit: 6
topics: ["6.2"]
resourceType: "practice-questions"
prerequisites:
  - "Torque τ = rF⊥ and rotational kinetic energy K = ½Iω²"
prerequisiteResources: ["mb-ap-phys1-6.2-study-guide"]
learningObjectives:
  - "Calculate work done by a constant torque with Δθ in radians"
  - "Decide whether a torque does positive, negative or zero work"
  - "Find work from the area under a torque–angle graph and use it to find a final angular velocity"
  - "Derive and use symbolic expressions linking force, radius, angle and final angular velocity"
  - "Plan a measurement of work done by a torque and justify a claim comparing two scenarios"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angles in radians (1 rev = 2π rad). Give answers to 2 or 3 significant figures; keep unrounded values until the last step"
related: ["mb-ap-phys1-6.2-study-guide", "mb-ap-phys1-6.2-revision-notes", "mb-ap-phys1-6.2-checklist"]
next: "mb-ap-phys1-6.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Convert every angle to radians before using W = τΔθ."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. All data are invented for practice. Angles must be in radians (1 rev = 2π rad). Round final answers to 2 or 3 significant figures, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A winch motor exerts a constant torque of 8.0 N·m on a cable drum while the drum turns through 2.5 revolutions. How much work does the motor's torque do?

- (A) 20 J
- (B) 63 J
- (C) 1.3 × 10² J
- (D) 7.2 × 10³ J

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** Convert first: Δθ = 2.5 × 2π = 15.7 rad. Then W = τΔθ = 8.0 × 15.7 = 126 J ≈ 1.3 × 10² J.

- (A) multiplies by 2.5 revolutions without converting to radians.
- (B) converts with π instead of 2π, treating one revolution as π rad (half a turn).
- (D) converts to degrees (900°) and multiplies by that. W = τΔθ needs radians.
</details>

## Question 2 (multiple choice · core)

A wheel starts from rest on a frictionless axle. A constant torque turns it through angle Δθ, and it reaches angular velocity ω₁. The experiment is repeated from rest with the same torque, but the torque now acts through 2Δθ. What is the new final angular velocity?

- (A) ω₁
- (B) √2 ω₁
- (C) 2ω₁
- (D) 4ω₁

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Doubling the angle doubles the work, W = τΔθ. All the work becomes kinetic energy, so ½Iω² doubles. Since K depends on ω², ω is multiplied by √2.

- (A) assumes the final angular velocity depends only on the torque, not on how far it acts.
- (C) treats kinetic energy as proportional to ω instead of ω².
- (D) multiplies by 2² = 4, as if ω grew with the square of the work. In fact ω grows with the square root of the work.
</details>

## Question 3 (multiple choice · core)

A bicycle wheel is turning counterclockwise on a fixed axle. Which of these does **zero** work on the wheel while it turns through half a revolution?

- (A) Friction at the axle, which exerts a small clockwise torque
- (B) A force applied at the rim that points straight towards the axle
- (C) A motor that exerts a counterclockwise torque on the axle
- (D) A hand pushing on the tyre, tangent to the rim, in the clockwise sense

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** A force pointing towards the axle has no component perpendicular to the radius, so F⊥ = 0 and its torque about the axle is zero. A zero torque does zero work, however far the wheel turns.

- (A) opposes the rotation, so it does **negative** work, not zero. It removes energy from the wheel.
- (C) acts in the same sense as the rotation, so it does positive work.
- (D) is a tangential force against the motion. It exerts a clockwise torque on a wheel turning counterclockwise, so it does negative work.
</details>

## Question 4 (graph · core)

A flywheel with rotational inertia 0.12 kg·m² is already spinning at 5.0 rad/s on a frictionless axle. A motor then exerts a torque in the direction of rotation. The torque increases steadily from 3.0 N·m at θ = 0 to 9.0 N·m at θ = 4.0 rad, and then the motor is switched off.

(a) Sketch the torque–angle graph and shade the area that represents the work done.
(b) Calculate the work done by the motor.
(c) Calculate the flywheel's final angular velocity.

<details>
<summary>Worked solution</summary>

**(a)** A straight line from (0 rad, 3.0 N·m) to (4.0 rad, 9.0 N·m), with the trapezium between the line and the angle axis shaded.

**(b)** Area of the trapezium: ½ × (3.0 + 9.0) N·m × 4.0 rad = **24 J**.

**(c)** Initial kinetic energy: ½ × 0.12 × 5.0² = 1.5 J. Final: 1.5 + 24 = 25.5 J.
ω = √(2 × 25.5 ÷ 0.12) = √425 = **20.6 rad/s**.

Suggested mark points (4): 1 for a correct sketch with the area shaded; 1 for 24 J from the area; 1 for including the starting kinetic energy of 1.5 J; 1 for ω ≈ 21 rad/s.

Common errors: using 9.0 N·m × 4.0 rad = 36 J overestimates the work; ignoring the starting spin gives 20 rad/s; adding 5.0 rad/s to that 20 rad/s gives 25 rad/s. Angular velocities do not add like that, because kinetic energy depends on ω².
</details>

## Question 5 (derivation · core)

A string is wrapped around an axle of radius r attached to a wheel. The wheel and axle together have rotational inertia I and start at rest on a frictionless bearing. A student pulls the string with a constant force F, tangent to the axle, until a length d of string has unwound.

(a) Derive an expression for the work done on the wheel in terms of F, r and d, and simplify it.
(b) Derive an expression for the final angular velocity.
(c) Evaluate (b) for F = 15 N, d = 0.60 m, r = 0.040 m and I = 0.012 kg·m².
(d) The axle is replaced by one of radius 2r. The same force pulls off the same length of string. Compare the torque, the angle turned and the final angular velocity with the original case.

<details>
<summary>Worked solution</summary>

**(a)** Torque τ = rF. Angle turned Δθ = d / r. Work W = τΔθ = rF × d / r = **Fd**. The radius cancels: the work equals the force times the length of string pulled, as it would for a straight pull.

**(b)** Fd = ½Iω², so **ω = √(2Fd / I)**.

**(c)** ω = √(2 × 15 × 0.60 ÷ 0.012) = √1500 = **38.7 rad/s**. (Check: τ = 0.60 N·m, Δθ = 15 rad, W = 9.0 J.)

**(d)** The torque doubles (1.2 N·m), but the angle halves (7.5 rad), so the work is the same, 9.0 J. The final angular velocity is **unchanged**, 38.7 rad/s. The wheel speeds up at twice the angular acceleration, but for half the angle.

Suggested mark points (5): 1 for Δθ = d / r; 1 for W = Fd shown by cancelling r; 1 for ω = √(2Fd / I); 1 for 38.7 rad/s; 1 for (d) with the reason "τ × 2 but Δθ ÷ 2, so W and ω are unchanged".
</details>

## Question 6 (experimental design · stretch)

A student wants to find the work done by the spring of a wind-up toy as it unwinds and drives a small flywheel. The flywheel's rotational inertia is 0.0020 kg·m². She measures the spring's torque at several angles:

| θ (rad) | 0 | 2.0 | 4.0 | 6.0 | 8.0 | 10.0 |
|---|---|---|---|---|---|---|
| τ (N·m) | 0.50 | 0.42 | 0.33 | 0.25 | 0.17 | 0.08 |

(a) Describe a procedure, with named equipment, that could produce data like these.
(b) Plot τ against θ (on paper or by describing scales) and use the graph to find the work done by the spring from 0 to 10.0 rad.
(c) The spring drives the flywheel from rest with negligible friction. Predict the flywheel's angular velocity at θ = 10.0 rad.
(d) A classmate says "the work is 0.50 N·m × 10.0 rad = 5.0 J". Explain the error.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** One valid method: fix the spring's output shaft to a lever or pulley of known radius r. Hold the shaft at a measured angle with a force sensor (or a spring balance) pulling tangentially at r, and record the force F. Calculate τ = rF. Read the angle with a protractor disc or rotary motion sensor. Repeat at regular angle steps as the spring is allowed to unwind, and repeat each reading two or three times to average.

**(b)** Scales: θ axis 0 to 10 rad (1 cm per rad); τ axis 0 to 0.60 N·m (1 cm per 0.10 N·m). The points lie close to a straight line falling from 0.50 N·m to 0.08 N·m. Area under the line: trapeziums between neighbouring readings add to **2.92 J**; a single trapezium from the end points gives ½ × (0.50 + 0.08) × 10.0 = 2.9 J. Either is fine: **W ≈ 2.9 J**.

**(c)** ½Iω² = 2.92 J, so ω = √(2 × 2.92 ÷ 0.0020) = √2920 ≈ **54 rad/s**.

**(d)** 0.50 N·m is the torque only at the start. The torque falls as the spring unwinds, so the work is the area under the falling line, not a rectangle using the largest value. The classmate's 5.0 J is about 70 % too high.

| Point | What earns it |
|---|---|
| 1 | Measures force at a known radius (or uses a torque sensor) and states τ = rF |
| 1 | Measures angle with a named instrument at regular steps, with repeats |
| 1 | Graph with labelled axes, units and sensible scales |
| 1 | W ≈ 2.9 J from the area, with unit |
| 1 | ω ≈ 54 rad/s from ½Iω² = W |
| 1 | Explains that the torque is not constant, so the area, not τ_max × Δθ, gives the work |

A procedure that times the flywheel and uses rotational kinematics instead can earn the first two points only if it explains how the torque at each angle would be found from the results.
</details>

## Question 7 (constructed response · stretch)

Two identical wheels, A and B, start at rest on frictionless axles. Wheel A is driven by a constant torque τ through an angle θ. Wheel B is driven by a constant torque 2τ through an angle θ/2.

A student claims: "Wheel B ends up spinning faster, because a bigger torque gives a bigger angular acceleration."

(a) Compare the work done on each wheel.
(b) Use your answer to evaluate the student's claim.
(c) Which wheel reaches its final angular velocity in less time? Justify your answer.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** W_A = τθ. W_B = 2τ × θ/2 = τθ. The works are **equal**.

**(b)** The wheels are identical (same I) and start from rest, so equal work gives equal kinetic energy, ½Iω², and therefore **equal final angular velocities**. The claim is wrong. The student is right that B's angular acceleration is twice A's (α = τ_net / I), but B accelerates through only half the angle. A larger angular acceleration does not guarantee a larger final ω; what matters for ω is the energy transferred, τ × Δθ.

**(c)** Both reach the same ω. Starting from rest, ω = αt, so t = ω / α. B's angular acceleration is twice as large, so **B takes half the time**. (With sample values τ = 0.40 N·m, θ = 12 rad and I = 0.030 kg·m², both wheels reach 17.9 rad/s; A takes 1.34 s and B takes 0.67 s.)

| Point | What earns it |
|---|---|
| 1 | Shows W_A = W_B = τθ |
| 1 | Links equal work to equal change in kinetic energy, so equal ω (same I) |
| 1 | Refutes the claim, explaining that B's larger α acts over a smaller angle |
| 1 | B takes less time, half as long |
| 1 | Justifies (c) with α = τ / I and ω = αt (or an equivalent argument) |

Simply writing "energy is conserved" without linking work to ½Iω² earns no credit for (b).
</details>

## How did you do?

- **Q1 wrong:** re-read the units paragraph under "Deriving W = τΔθ" in the [study guide](/advanced-course-resources/physics-1/6-2-torque-work-study-guide/).
- **Q2 or Q7 wrong:** revisit "Torque, work and rotational kinetic energy" and Worked example 3(c).
- **Q3 wrong:** see "Positive, negative and zero work".
- **Q4 or Q6 incomplete:** work through Figure 2 and Worked example 2 (area under the torque–angle graph).
- **Q5 incomplete:** see the derivation with Figure 1, and "Planning an experiment".

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-2-torque-work-checklist/).
