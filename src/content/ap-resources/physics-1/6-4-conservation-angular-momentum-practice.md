---
resourceId: "mb-ap-phys1-6.4-practice"
title: "Conservation of Angular Momentum: Practice Questions (Physics 1 6.4)"
description: "Seven original Marlbridge practice questions on conservation of angular momentum: system choice, rotational collisions, shape changes, graphing data and designing an experiment, with solutions."
course: "physics-1"
unit: 6
topics: ["6.4"]
resourceType: "practice-questions"
prerequisites:
  - "L = Iω, L = rmv sin θ and τ_net Δt = ΔL (Topic 6.3)"
prerequisiteResources: ["mb-ap-phys1-6.4-study-guide"]
learningObjectives:
  - "Decide whether a chosen system's angular momentum is constant from the external torques on it"
  - "Solve rotational collisions and shape changes with signed angular momenta"
  - "Compare kinetic energy before and after an interaction in which angular momentum is conserved"
  - "Linearise data to test conservation of angular momentum"
  - "Design an experiment and justify claims about internal and external torques"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Algebra only, no calculus. Angular speeds in rad/s. Give answers to 2 significant figures unless told otherwise; keep unrounded values until the last step"
related: ["mb-ap-phys1-6.4-study-guide", "mb-ap-phys1-6.4-revision-notes", "mb-ap-phys1-6.4-checklist"]
next: "mb-ap-phys1-6.4-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-1", "page-physics-1"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Name your system and check the external torques before writing L_initial = L_final."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This is the algebra-based course, so no calculus is needed. All axles are vertical and frictionless unless a question says otherwise. Round final answers to 2 significant figures unless told otherwise, and keep unrounded values in your calculator until the end. Any scientific calculator is fine.

## Question 1 (multiple choice · foundation)

A spinning stool and its rider turn freely, with no external torque about the axis. The rider pulls in their arms, and the rotational inertia of the rider + stool system falls to one third of its starting value. What happens to the system's angular speed and rotational kinetic energy?

- (A) Angular speed × 3; kinetic energy × 3
- (B) Angular speed × 3; kinetic energy unchanged
- (C) Angular speed × 3; kinetic energy × 9
- (D) Angular speed × ⅓; kinetic energy × ⅓

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** With no external torque, L = Iω is constant. If I becomes I/3, ω becomes 3ω. Then K = ½(I/3)(3ω)² = 3 × ½Iω², so K triples. Using K = L²/(2I) gives the same result directly: L fixed, I divided by 3, K multiplied by 3.

- (B) assumes kinetic energy is conserved whenever angular momentum is. The rider does work pulling their arms in, so K rises.
- (C) squares the factor of 3 in ω but forgets that I has fallen to a third.
- (D) assumes less rotational inertia means slower spinning. That reverses the relationship I₁ω₁ = I₂ω₂.
</details>

## Question 2 (multiple choice · core)

In which of these cases is the angular momentum of the named system constant about the axle?

- (A) System: a wheel only, while a brake pad fixed to the frame presses on its rim
- (B) System: a turntable and a ball of clay dropped straight down onto it, with a frictionless axle
- (C) System: a playground roundabout only, while a child runs alongside and pushes its rim
- (D) System: the blades of a desk fan only, in the seconds after the motor is switched on

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** The friction between clay and turntable is internal to the system. Gravity on the clay is parallel to the vertical axle, and the frictionless axle exerts no torque, so the net external torque is zero and L is constant. (The clay falls straight down, so it brings no angular momentum about the axle.)

- (A) The brake pad is outside the system and exerts a torque on the wheel. The wheel's L falls; it is transferred to the frame and Earth.
- (C) The child is outside the system and exerts a torque on the roundabout, so its L changes.
- (D) The motor is outside the blades-only system. Its torque increases the blades' L.
</details>

## Question 3 (multiple choice · core)

Take counterclockwise (seen from above) as +. Disk A (I = 0.30 kg·m²) turns at +10 rad/s. Disk B (I = 0.20 kg·m²) turns on the same axle at −5.0 rad/s. A clutch locks them together. What is their common angular velocity?

- (A) +4.0 rad/s
- (B) +8.0 rad/s
- (C) +2.5 rad/s
- (D) +6.7 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** System: both disks; the clutch torques are internal. L = (0.30)(+10) + (0.20)(−5.0) = 3.0 − 1.0 = 2.0 kg·m²/s. After locking: (0.30 + 0.20)ω = 2.0, so ω = +4.0 rad/s.

- (B) treats both angular momenta as positive: (3.0 + 1.0) ÷ 0.50. Disk B spins the other way, so its L is negative.
- (C) averages the two angular velocities, (10 + (−5.0)) ÷ 2. That ignores the different rotational inertias.
- (D) divides the total L by disk A's rotational inertia only, forgetting that disk B also turns afterwards.
</details>

## Question 4 (calculation · core)

A turntable with I = 0.0144 kg·m² is at rest on a frictionless vertical axle. A 0.040 kg ball of clay slides across a horizontal surface at 5.0 m/s, along a line that just touches the turntable's rim, 0.20 m from the axle. It sticks to the rim.

(a) Find the clay's angular momentum about the axle before it hits.
(b) Find the angular speed of the turntable and clay just after.
(c) What percentage of the kinetic energy is lost?

<details>
<summary>Worked solution</summary>

1. (a) The clay's line of motion is 0.20 m from the axle, so L = mvd = 0.040 × 5.0 × 0.20 = **0.040 kg·m²/s**.
2. System: turntable + clay. The impact forces are internal; the axle is frictionless and its force acts through the axis. So L is constant.
3. After: clay is a point at 0.20 m, I = mr² = 0.040 × 0.20² = 0.0016 kg·m². Total I = 0.0144 + 0.0016 = 0.016 kg·m².
4. (b) ω = 0.040 ÷ 0.016 = **2.5 rad/s**.
5. (c) Before: K = ½ × 0.040 × 5.0² = 0.50 J. After: K = ½ × 0.016 × 2.5² = 0.050 J. Fraction kept = 0.10, so **90% is lost** (to thermal energy and deformation of the clay).

Suggested mark points (4): 1 for L = mvd with the 0.20 m perpendicular distance; 1 for adding mr² to the total rotational inertia; 1 for 2.5 rad/s; 1 for 90% with both energies shown.

Common error: forgetting the clay's own rotational inertia after it sticks gives 0.040 ÷ 0.0144 = 2.8 rad/s.
</details>

## Question 5 (graph · core)

A student sits on a frictionless rotating platform holding two heavy weights. She moves the weights to different positions, and for each position a partner measures the system's rotational inertia I (from a separate calibration) and its angular speed ω.

| I (kg·m²) | 0.90 | 0.60 | 0.45 | 0.36 | 0.30 |
|---|---|---|---|---|---|
| ω (rad/s) | 2.0 | 3.0 | 3.9 | 5.1 | 6.0 |

(a) The student wants to test the claim that the system's angular momentum stays constant. State what to plot to get a straight line if the claim is true, and what the slope would represent.
(b) Calculate the values you need, plot the graph (on paper) and find the slope.
(c) Do the data support the claim? Justify your answer.
(d) Calculate the kinetic energy for the first and last columns, and explain the difference.

<details>
<summary>Worked solution</summary>

**(a)** If Iω = L is constant, then ω = L × (1/I). Plot **ω (vertical) against 1/I (horizontal)**. The graph should be a straight line **through the origin**, and its slope is L.

**(b)**

| I (kg·m²) | 1/I (kg⁻¹·m⁻²) | ω (rad/s) | Iω (kg·m²/s) |
|---|---|---|---|
| 0.90 | 1.11 | 2.0 | 1.80 |
| 0.60 | 1.67 | 3.0 | 1.80 |
| 0.45 | 2.22 | 3.9 | 1.76 |
| 0.36 | 2.78 | 5.1 | 1.84 |
| 0.30 | 3.33 | 6.0 | 1.80 |

A best-fit line through the points has slope about (6.0 − 2.0) ÷ (3.33 − 1.11) = **1.8 kg·m²/s**, and it passes very close to the origin.

**(c)** Yes. The points lie close to one straight line through the origin, and Iω stays within about 3% of 1.8 kg·m²/s. The small scatter is consistent with measurement uncertainty. A real trend would show Iω rising or falling steadily, which it does not.

**(d)** First column: K = ½ × 0.90 × 2.0² = 1.8 J. Last column: K = ½ × 0.30 × 6.0² = 5.4 J. K triples while L stays the same. The student does work on the weights when she pulls them inwards; that work becomes extra rotational kinetic energy.

Suggested mark points (5): 1 for ω against 1/I with slope = L; 1 for correct 1/I values; 1 for a slope of about 1.8 kg·m²/s; 1 for supporting the claim **because** the line is straight and passes through the origin; 1 for both energies and the link to work done by the student.
</details>

## Question 6 (constructed response · stretch)

You are given a turntable on a low-friction axle, a metal ring that fits flat on it, a balance, a ruler, a phone app that measures angular speed when the phone is fixed to the turntable, and the rotational inertia of the turntable with the phone (supplied by the teacher).

Design an experiment to test whether angular momentum is conserved when the non-rotating ring is dropped onto the spinning turntable.

(a) Describe your procedure, including what you measure and how.
(b) Explain how you would use your measurements to decide whether angular momentum is conserved.
(c) Identify one source of error that would make the measured final angular momentum smaller than the initial value, and explain how to reduce it.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** Measure the ring's mass with the balance and its inner and outer radii with the ruler. Use them to estimate its rotational inertia about the centre (for a thin ring, I ≈ MR² with R the mean radius). Spin the turntable and record its angular speed ω₁ just before the drop. Hold the ring centred just above the turntable, not rotating, and release it. Record the common angular speed ω₂ once the ring stops sliding. Repeat for several different starting speeds, and repeat each run at least three times.

**(b)** Calculate L₁ = I_T ω₁ and L₂ = (I_T + I_R) ω₂ for each run. If angular momentum is conserved, L₁ = L₂ within the uncertainty. Better: plot L₂ against L₁ for all runs. Conservation predicts a straight line through the origin with slope 1. For example, with I_T = 0.0050 kg·m², I_R = 0.0030 kg·m² and ω₁ = 16 rad/s, the prediction is ω₂ = (0.0050 × 16) ÷ 0.0080 = 10 rad/s.

**(c)** Friction in the axle exerts an external torque that removes angular momentum during and after the drop. Reduce it by measuring ω₁ and ω₂ as close in time to the drop as possible, or by measuring how fast the turntable slows on its own and correcting for that loss. Dropping the ring off-centre also gives the wrong I_R; use a guide to centre it.

| Point | What earns it |
|---|---|
| 1 | Measures (or calculates) the ring's rotational inertia from its mass and radii |
| 1 | Measures ω just before and just after the ring stops sliding |
| 1 | Repeats runs and/or varies the starting speed |
| 1 | Compares I_T ω₁ with (I_T + I_R) ω₂, or plots L₂ against L₁ and expects slope 1 |
| 1 | Names axle friction as an external torque, with a valid way to reduce or correct for it |

Measuring kinetic energy instead of angular momentum earns no credit for (b): kinetic energy is not expected to be conserved, because the ring slides on the turntable.
</details>

## Question 7 (constructed response · stretch)

Take counterclockwise (seen from above) as +. A turntable (I_T = 0.50 kg·m²) carries a small motor whose shaft is on the turntable's axis. The motor drives a flywheel (I_F = 0.020 kg·m²) mounted on the same axis. Everything starts at rest on a frictionless bearing. The motor is switched on, and the flywheel reaches +50 rad/s (measured relative to the ground).

(a) Find the turntable's angular velocity at that moment.
(b) The motor exerts an average torque of 0.40 N·m on the flywheel. How long does the spin-up take, and what angular impulse does the turntable receive?
(c) A student says: "Nothing outside the turntable touches it, so it can't start rotating." Evaluate this claim, referring to the system you choose.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** System: turntable + motor + flywheel. The motor's torques are internal and the bearing is frictionless, so L stays 0. Then I_T ω_T + I_F ω_F = 0, so ω_T = −(0.020 × 50) ÷ 0.50 = **−2.0 rad/s** (clockwise).

**(b)** The flywheel gains L = 0.020 × 50 = 1.0 kg·m²/s. Time = ΔL ÷ τ = 1.0 ÷ 0.40 = **2.5 s**. By Newton's third law, the flywheel exerts an equal and opposite torque on the motor and so on the turntable: angular impulse = −0.40 × 2.5 = **−1.0 N·m·s**, which matches the turntable's L of 0.50 × (−2.0) = −1.0 kg·m²/s.

**(c)** The claim is **incorrect**. If the system is the turntable alone, the flywheel is outside it and pushes back on the motor that is fixed to the turntable. That is an external torque on the turntable, so its angular momentum changes. If the system is turntable + motor + flywheel, there is no external torque and the total angular momentum stays zero; the turntable must therefore turn the opposite way to the flywheel.

| Point | What earns it |
|---|---|
| 1 | Total angular momentum of the whole system is zero before and after |
| 1 | −2.0 rad/s, with the sign or "opposite direction" stated |
| 1 | 2.5 s from ΔL ÷ τ |
| 1 | −1.0 N·m·s, linked to Newton's third law (equal and opposite angular impulses) |
| 1 | Rejects the claim by identifying the flywheel's reaction torque on the turntable, with a stated system |
</details>

## How did you do?

- **Q1 wrong:** re-read "Changing shape: same L, different ω" and Worked example 3 in the [study guide](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-study-guide/).
- **Q2 or Q7(c) wrong:** go back to "Choosing the system" and its table.
- **Q3 wrong:** revisit "Total angular momentum of a system". Every part needs its sign.
- **Q4 wrong:** work through Worked examples 1 and 2 again, and remember to add mr².
- **Q5 incomplete:** see Figure 2 and "Testing conservation with a graph".
- **Q6 or Q7(b) incomplete:** link external torques to changes in L, and internal torques to equal and opposite angular impulses.

Then tick off the [topic checklist](/advanced-course-resources/physics-1/6-4-conservation-angular-momentum-checklist/).
