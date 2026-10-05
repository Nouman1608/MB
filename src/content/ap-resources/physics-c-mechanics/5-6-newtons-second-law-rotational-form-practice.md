---
resourceId: "mb-ap-physcm-5.6-practice"
title: "Newton’s Second Law in Rotational Form: Practice Questions (Physics C: Mechanics 5.6)"
description: "Seven original Marlbridge calculus-based practice questions on α = Στ/I: factors of change, time-dependent torques, axle forces, a stepped pulley, measuring I with friction, and a drag torque."
course: "physics-c-mechanics"
unit: 5
topics: ["5.6"]
resourceType: "practice-questions"
prerequisites:
  - "Torque, rotational inertia and the parallel axis theorem (Topics 5.3 and 5.4)"
prerequisiteResources: ["mb-ap-physcm-5.6-study-guide"]
learningObjectives:
  - "Predict factors of change in α from changes in torque and rotational inertia"
  - "Use the sign of the net torque to decide whether a wheel speeds up or slows down"
  - "Integrate a time-dependent torque to find angular velocity"
  - "Apply a_cm = ΣF/M and α = Στ/I separately to find an axle force"
  - "Derive the angular acceleration of a pulley system with hanging masses"
  - "Linearise rotational data to find I and a friction torque, and model a speed-dependent drag torque"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic. g = 9.8 m/s². Each question states its positive sense of rotation. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-5.6-study-guide", "mb-ap-physcm-5.6-revision-notes", "mb-ap-physcm-5.6-checklist"]
next: "mb-ap-physcm-5.6-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive sense of rotation."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. Use g = 9.8 m/s². In formulas, τ is in N·m, I in kg·m², ω in rad/s and t in s, so each coefficient carries whatever unit makes its term correct. Strings are light and do not slip. Round final answers to 2 significant figures unless told otherwise. All data are invented for practice.

## Question 1 (multiple choice · foundation)

A solid disk turns on a fixed axle through its center. The net torque on it is tripled. At the same time the disk is replaced by one of the same shape and size but twice the mass. By what factor does the angular acceleration change?

- (A) 2/3
- (B) 3/2
- (C) 3
- (D) 6

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** For the same shape and size, I ∝ M, so I doubles. α = Στ/I changes by 3 ÷ 2 = 3/2.

- (A) inverts the ratio, as if α were proportional to I and inversely proportional to torque.
- (C) changes the torque but forgets that the heavier disk has more rotational inertia.
- (D) multiplies the two factors, treating α as proportional to I.
</details>

## Question 2 (multiple choice · core)

Take **counterclockwise as positive**. A wheel with I = 0.50 kg·m² is spinning clockwise at 6.0 rad/s (ω = −6.0 rad/s). A constant net torque of +1.5 N·m then acts on it. What is its angular velocity 1.0 s later?

- (A) −9.0 rad/s
- (B) −4.5 rad/s
- (C) −3.0 rad/s
- (D) +3.0 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** α = Στ/I = 1.5 ÷ 0.50 = +3.0 rad/s². ω = ω₀ + αt = −6.0 + 3.0 = −3.0 rad/s. The wheel still turns clockwise, but more slowly: the net torque opposes its rotation.

- (A) assumes the torque speeds the wheel up in its direction of turning. α follows the net torque, not the motion.
- (B) adds the torque straight onto ω (−6.0 + 1.5), forgetting to divide by I. Torque and angular velocity have different units.
- (D) has the right size but the wrong sign. The wheel needs 2.0 s to stop, so after 1.0 s it is still turning clockwise.
</details>

## Question 3 (multiple choice · core)

A rotor with rotational inertia I starts from rest at t = 0. The net torque on it is τ(t) = ct, where c is a positive constant. What is its angular velocity at time T?

- (A) cT/I
- (B) cT²/(2I)
- (C) cT²/I
- (D) cT³/(6I)

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** α(t) = ct/I. ω(T) = 0 + ∫₀ᵀ (ct/I) dt = cT²/(2I).

- (A) is τ(T)/I, the angular **acceleration** at time T, not the angular velocity.
- (C) uses ω = αT with the final α, as if the torque had been ct at its final value all along. The torque grows from zero, so this doubles the true answer.
- (D) integrates twice. That gives the angle turned, θ(T).
</details>

## Question 4 (calculation · core)

Take **+x east, +y north**, and **counterclockwise (seen from above) as positive**. A uniform disk of mass 4.0 kg and radius 0.30 m lies horizontally and can turn about a frictionless vertical axle through its center. At one instant, two horizontal forces act on it, both pointing **north**: 12 N at the rim, 0.30 m east of the center, and 20 N at a peg 0.15 m west of the center.

(a) Find the angular acceleration at this instant.
(b) Find the horizontal force the axle exerts on the disk.
(c) A student says the disk’s center should accelerate north at 32 N ÷ 4.0 kg = 8.0 m/s². Explain why it does not.

<details>
<summary>Worked solution</summary>

1. **I** = ½MR² = ½(4.0)(0.30)² = 0.18 kg·m².
2. **Torques about the axle.** The 12 N force, 0.30 m east, pointing north: +12 × 0.30 = +3.6 N·m. The 20 N force, 0.15 m west, pointing north: −20 × 0.15 = −3.0 N·m. Στ = **+0.60 N·m**.
3. **(a)** α = 0.60 ÷ 0.18 = **3.3 rad/s²**, counterclockwise.
4. **(b)** The axle holds the center of the disk still, so a_cm = 0 and ΣF = 0: 12 + 20 + F_axle = 0, giving F_axle = **32 N south**.
5. **(c)** The student has used ΣF without the axle force. Including it, ΣF = 0, so a_cm = 0. The linear and rotational analyses are separate: the forces nearly cancel as torques (only 0.60 N·m), but they add as forces, and the axle supplies the balancing 32 N.

Suggested mark points (4): 1 for I; 1 for the two torques with opposite signs; 1 for α; 1 for the axle force with direction and the explanation in (c).

Common error: giving both torques the same sign (3.6 + 3.0 = 6.6 N·m, α = 37 rad/s²). Forces in the same direction on opposite sides of the axle turn the disk opposite ways.
</details>

## Question 5 (constructed response · core)

Take **clockwise as positive** and **+y upward**. A stepped pulley turns on a fixed frictionless axle. It has rotational inertia I = 0.040 kg·m², an outer radius R = 0.20 m and an inner radius r = 0.10 m. A block of mass m₁ = 1.0 kg hangs on the right from a string wound round the outer step. A block of mass m₂ = 1.5 kg hangs on the left from a string wound round the inner step. The system is released from rest.

(a) Write one equation for each block and one for the pulley. Derive α in terms of m₁, m₂, R, r, I and g.
(b) Calculate α, the acceleration of each block and both tensions.
(c) Use your expression to find the value of m₁ for which the system stays at rest, and explain the result using Topic 5.5.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** Clockwise rotation lowers m₁ and raises m₂. No slipping: m₁ moves down with a₁ = Rα, m₂ moves up with a₂ = rα.
- Block 1 (down positive for it): m₁g − T₁ = m₁Rα
- Block 2 (up positive for it): T₂ − m₂g = m₂rα
- Pulley: T₁R − T₂r = Iα

Substitute T₁ = m₁(g − Rα) and T₂ = m₂(g + rα) into the pulley equation:

m₁gR − m₁R²α − m₂gr − m₂r²α = Iα, so **α = (m₁R − m₂r)g / (I + m₁R² + m₂r²)**.

**(b)** Numerator: (0.20 − 0.15)(9.8) = 0.49 N·m. Denominator: 0.040 + 0.040 + 0.015 = 0.095 kg·m². α = **5.2 rad/s²**, clockwise. a₁ = 0.20 × 5.16 = **1.0 m/s² down**; a₂ = 0.10 × 5.16 = **0.52 m/s² up**. T₁ = 1.0(9.8 − 1.03) = **8.8 N**; T₂ = 1.5(9.8 + 0.52) = **15 N** (15.5 N).

Check: T₁R − T₂r = 1.754 − 1.547 = 0.206 N·m, and Iα = 0.040 × 5.16 = 0.206 N·m.

**(c)** α = 0 when m₁R = m₂r, so m₁ = m₂r/R = **0.75 kg**. Then T₁ = m₁g and T₂ = m₂g, and the two string torques are equal and opposite: Στ = 0, rotational equilibrium. Starting from rest, the pulley stays at rest.

| Point | What earns it |
|---|---|
| 1 | Correct second-law equation for each block, with consistent signs |
| 1 | Pulley equation T₁R − T₂r = Iα and the no-slip links a = Rα, a = rα |
| 1 | Correct symbolic α |
| 1 | Correct α, accelerations and tensions with units |
| 1 | m₁ = 0.75 kg with the zero-net-torque explanation |

**Alternative method.** Treating pulley and blocks as one system with Στ_ext = (I + m₁R² + m₂r²)α about the axle, using only the weights, gives the same α in one line and earns the first three points if the system and its rotational inertia are stated clearly.
</details>

## Question 6 (experimental design · stretch)

A student wants the rotational inertia I of a rotor. A string wound round its spindle (radius r = 0.050 m) passes over a light pulley to a hanging mass m. A rotary sensor gives the angular acceleration α. Friction in the bearing exerts a constant torque τ_f. Fictional results:

| m (kg) | 0.050 | 0.100 | 0.150 | 0.200 | 0.250 |
|---|---|---|---|---|---|
| α (rad/s²) | 2.05 | 4.36 | 6.72 | 8.93 | 11.18 |

(a) Show that the torque from the string is τ = m(g − rα)r.
(b) Write an equation that relates τ, I, α and τ_f, and state what to plot to get a straight line.
(c) Use the data to find I and τ_f.
(d) Another student uses τ = mgr instead. Explain the effect on the value of I.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The hanging mass accelerates downward at a = rα (no slipping). For the mass: mg − T = mrα, so T = m(g − rα). The string pulls tangentially at radius r, so τ = Tr = m(g − rα)r.

**(b)** For the rotor: τ − τ_f = Iα, so **τ = Iα + τ_f**. Plot **τ (vertical) against α (horizontal)**: slope I, vertical intercept τ_f.

**(c)** τ values: 0.0242, 0.0479, 0.0710, 0.0935, 0.1155 N·m. A best-fit line gives slope **I = 0.010 kg·m²** and intercept **τ_f = 0.0040 N·m**.

**(d)** mgr is larger than the true torque, and the error grows with α (by m r²α). The heaviest mass gives rα/g ≈ 0.057, a 6% error. The points rise more steeply, so the slope is too large: about 0.0107 kg·m², 7% high. The intercept also falls, to about 0.0022 N·m, so the friction torque is underestimated.

| Point | What earns it |
|---|---|
| 1 | (a) Second law for the hanging mass with a = rα, giving T = m(g − rα) |
| 1 | (b) τ = Iα + τ_f with the plot named and slope and intercept identified |
| 1 | (c) I = 0.010 kg·m² (0.0095–0.0105 accepted) |
| 1 | (c) τ_f = 0.0040 N·m (0.003–0.005 accepted) |
| 1 | (d) Says mgr overestimates the torque by more at larger α, so I comes out too large |

**Alternative method.** Plotting α against τ gives slope 1/I (≈ 100 kg⁻¹·m⁻²) and a horizontal intercept of τ_f; this earns full marks if interpreted correctly.
</details>

## Question 7 (explanation · stretch)

Take **counterclockwise as positive**. A desk fan is switched off while its blades turn at ω₀ = 80 rad/s. The blades have I = 0.012 kg·m². Model the air drag as a torque τ = −bω with b = 0.0030 N·m·s, and ignore bearing friction. A student says: "The starting angular acceleration is −bω₀/I = −20 rad/s², so the blades slow at that rate and stop after 80 ÷ 20 = 4.0 s."

(a) Derive ω(t) for this model.
(b) Use it to test the student’s claim at t = 4.0 s.
(c) Find the time for ω to halve, and the total angle the model predicts.
(d) Explain what is wrong with the student’s reasoning, and say what the model leaves out.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** I dω/dt = −bω. Separate variables: dω/ω = −(b/I) dt. Integrate from (0, ω₀): ln(ω/ω₀) = −bt/I, so **ω = ω₀e^(−bt/I)**. Here I/b = 4.0 s.

**(b)** At t = 4.0 s: ω = 80e^(−1) = **29 rad/s**. The blades are still turning; the claim fails.

**(c)** Halving time: e^(−bt/I) = ½ gives t = (I/b) ln 2 = 4.0 × 0.693 = **2.8 s**. Total angle: ∫₀^∞ ω dt = ω₀I/b = 80 × 4.0 = **320 rad**.

**(d)** The student used constant-α reasoning. But α = Στ/I = −bω/I, so α shrinks as ω shrinks: the drag torque gets weaker as the blades slow. Each halving takes the same 2.8 s, so in this model ω never quite reaches zero. Real blades do stop, because bearing friction gives a torque that does not fade with ω; the model leaves this out.

| Point | What earns it |
|---|---|
| 1 | Separates variables and integrates with the initial condition to get the exponential |
| 1 | Evaluates ω(4.0 s) ≈ 29 rad/s and concludes the claim is false |
| 1 | Halving time 2.8 s and total angle 320 rad |
| 1 | Explains that α depends on ω, so constant-α reasoning does not apply, and names a missing torque (bearing friction) |
</details>

## How did you do?

- **Q1 or Q2 wrong:** re-read "Newton’s second law in rotational form" in the [study guide](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-study-guide/). α follows the net torque and divides by I.
- **Q3 or Q7 wrong:** revisit "Torques that change with time" and Worked example 2. If the torque changes, integrate.
- **Q4 or Q5 wrong:** go through "Linear and rotational analyses are separate" and Worked example 1. Write one equation per object, with signs.
- **Q6 incomplete:** read "Measuring rotational inertia in the lab". Correct the tension and include friction.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/5-6-newtons-second-law-rotational-form-checklist/).
