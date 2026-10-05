---
resourceId: "mb-ap-physcm-6.2-practice"
title: "Torque and Work: Practice Questions (Physics C: Mechanics 6.2)"
description: "Seven original Marlbridge calculus-based practice questions on work done by torques: W = ∫τ dθ, signed areas on torque–angle graphs, the rotational work–energy theorem and gate data."
course: "physics-c-mechanics"
unit: 6
topics: ["6.2"]
resourceType: "practice-questions"
prerequisites:
  - "Integrating polynomials and sin θ; rotational kinetic energy K = ½Iω² (Topic 6.1)"
prerequisiteResources: ["mb-ap-physcm-6.2-study-guide"]
learningObjectives:
  - "Calculate the work done by constant and angle-dependent torques by integration"
  - "Find net work from signed areas on a torque–angle graph and use it to find ω"
  - "Derive W = ∫τ dθ and the rotational work–energy theorem"
  - "Estimate work from measured torque–angle data and use it to judge energy losses"
  - "Compare work and angular velocity between scenarios"
skills: ["1", "2", "3"]
studyMinutes: 50
difficulty: "mixed"
calculator: "scientific"
calculatorNote: "Calculus by hand; calculator for arithmetic only. Angles in radians. Give answers to 2 significant figures unless told otherwise"
related: ["mb-ap-physcm-6.2-study-guide", "mb-ap-physcm-6.2-revision-notes", "mb-ap-physcm-6.2-checklist"]
next: "mb-ap-physcm-6.2-checklist"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-physics-c-mechanics", "page-physics-c-mechanics", "exam-physics-c-mechanics"]
keyPoints:
  - "Questions 1–3 are multiple choice; 4–7 need written working."
  - "Every question states its positive sense of rotation. Coefficients carry units."
  - "Each answer explains why the wrong options are wrong."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

These are **original Marlbridge practice questions**, not past exam questions. The mark points are a suggested Marlbridge rubric to help you check your work; they are not an official scoring guideline. This set is for the calculus-based Physics C: Mechanics course. In every formula, τ is in N·m, θ in rad, ω in rad/s and I in kg·m², so each numerical coefficient carries whatever unit makes the term correct. Axles are frictionless unless stated. Round final answers to 2 significant figures unless told otherwise. A calculator is used only for arithmetic.

## Question 1 (multiple choice · foundation)

Take counterclockwise as positive. A torque τ(θ) = 4.0θ acts on a wheel in its direction of rotation while the wheel turns from θ = 0 to θ = 3.0 rad. How much work does the torque do?

- (A) 6.0 J
- (B) 12 J
- (C) 18 J
- (D) 36 J

<details>
<summary>Answer and explanation</summary>

**Answer: (C).** W = ∫₀^3.0 4.0θ dθ = 2.0θ² evaluated from 0 to 3.0 = 2.0 × 9.0 = 18 J. On a τ–θ graph this is the triangle with base 3.0 rad and height 12 N·m: ½ × 3.0 × 12 = 18 J.

- (A) halves the coefficient but does not square θ: 4.0 × 3.0/2. The integral of θ is θ²/2, not θ/2.
- (B) is the final torque, τ(3.0) = 12 N·m, reported as if it were the work. A torque is not an energy.
- (D) multiplies the final torque by the whole angle, 12 × 3.0. That treats the torque as constant at its largest value.
</details>

## Question 2 (multiple choice · core)

Take counterclockwise as positive. A wheel with I = 0.50 kg·m² turns counterclockwise at 4.0 rad/s. The net torque on it is +6.0 N·m from θ = 0 to 2.0 rad, then −3.0 N·m from θ = 2.0 rad to 6.0 rad. What is its angular velocity at θ = 6.0 rad?

- (A) 0
- (B) 4.0 rad/s
- (C) 8.0 rad/s
- (D) 11 rad/s

<details>
<summary>Answer and explanation</summary>

**Answer: (B).** Net work = (+6.0)(2.0) + (−3.0)(4.0) = 12 − 12 = 0. So ΔK = 0, and the wheel turns at its starting 4.0 rad/s. (It is still turning counterclockwise, because K stays above zero throughout: it rises to 16 J at θ = 2.0 rad and falls back to 4.0 J.)

- (A) confuses zero net work with zero kinetic energy. Zero net work means **no change** in kinetic energy.
- (C) counts only the positive work: K = 4.0 + 12 = 16 J gives 8.0 rad/s. The negative torque takes energy out.
- (D) adds the sizes of the two areas, 12 + 12 = 24 J, so K = 28 J and ω ≈ 10.6 rad/s. Area below the axis is negative work.
</details>

## Question 3 (multiple choice · core)

Two flywheels start from rest on frictionless axles. Flywheel A has rotational inertia I; flywheel B has 2I. Each is driven by the same constant torque through the same angle. Which statement is correct?

- (A) They end with the same kinetic energy, and ω_B = ω_A/√2.
- (B) They end with the same angular velocity, and K_B = 2K_A.
- (C) K_B = K_A/2 and ω_B = ω_A/2.
- (D) They end with the same kinetic energy, and ω_B = ω_A/2.

<details>
<summary>Answer and explanation</summary>

**Answer: (A).** Each torque does the same work, τΔθ, so each flywheel gains the same kinetic energy. Then ½Iω_A² = ½(2I)ω_B², which gives ω_B² = ω_A²/2, so ω_B = ω_A/√2 ≈ 0.71ω_A.

- (B) assumes the larger flywheel ends up turning just as fast. The work is the same, so it cannot have twice the energy.
- (C) assumes the work depends on I. W = ∫τ dθ contains no rotational inertia.
- (D) has the right energy but forgets that ω is under a square: halving ω would quarter ½Iω² for the same I, and with 2I would leave only half the energy.
</details>

## Question 4 (calculation · core)

Take counterclockwise as positive. A crank applies a torque τ(θ) = 20 sin θ to a wheel with I = 0.80 kg·m². The wheel turns counterclockwise at 2.0 rad/s when θ = 0.

(a) Find the work done by the torque from θ = 0 to θ = π rad.
(b) Find the wheel's angular velocity at θ = π rad.
(c) Find the work done from θ = 0 to θ = 2π rad, and state the angular velocity at 2π rad.

<details>
<summary>Worked solution</summary>

1. **(a)** W = ∫₀^π 20 sin θ dθ = 20[−cos θ]₀^π = 20(1 + 1) = **40 J**.
2. **(b)** K₀ = ½ × 0.80 × 2.0² = 1.6 J. K = 1.6 + 40 = 41.6 J. ω = √(2 × 41.6/0.80) = √104 = **10 rad/s** (10.2 rad/s).
3. **(c)** W = 20[−cos θ]₀^2π = 20(−1 + 1) = **0**. From π to 2π the torque is negative and takes out the 40 J it put in, so ω is back to **2.0 rad/s**. (K never reaches zero, since 1.6 J is left at 2π, so the wheel keeps turning the same way.)

Suggested mark points (4): 1 for setting up ∫τ dθ; 1 for 40 J; 1 for adding K₀ and finding ω; 1 for zero work over the full turn with ω = 2.0 rad/s.

Common error: using W = τΔθ with τ = 20 N·m and Δθ = π, which gives 63 J. The torque is only 20 N·m at θ = π/2.
</details>

## Question 5 (constructed response · core)

A rigid body turns about a fixed axis. A force F acts at a point a distance r from the axis, at angle φ to the position vector from the axis to that point.

(a) Show that when the body turns through a small angle dθ, the work done by F is dW = τ dθ, where τ = rF sin φ.
(b) Several torques act on the body. Explain why the total work done by all of them is ∫τ_net dθ.
(c) Starting from τ_net = Iα, derive ∫τ_net dθ = ½Iω² − ½Iω₀².
(d) State one condition needed for the result in (c), and say which step uses it.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** The point moves along a circular arc of length ds = r dθ (θ in radians), tangent to the circle. Only the tangential component of the force, F sin φ, is along this displacement; the radial component is perpendicular to it. So dW = (F sin φ)(r dθ) = (rF sin φ) dθ = **τ dθ**.

**(b)** In a rigid body every point turns through the **same** dθ. So the work done by each torque is τᵢ dθ with the same dθ, and the total is (τ₁ + τ₂ + …) dθ = τ_net dθ. Integrating gives ∫τ_net dθ.

**(c)** α = dω/dt = (dω/dθ)(dθ/dt) = ω dω/dθ. So τ_net = Iω dω/dθ, and τ_net dθ = Iω dω. Integrate from (θ₀, ω₀) to (θ, ω): ∫τ_net dθ = I∫ω dω = **½Iω² − ½Iω₀²**.

**(d)** The body must be **rigid**, with a fixed axis, so that I is constant. This is used when I is taken outside the integral in (c). (Also accept: τ_net = Iα itself needs a rigid body about a fixed axis.)

| Point | What earns it |
|---|---|
| 1 | (a) ds = r dθ along the tangent |
| 1 | (a) Only F sin φ does work, giving dW = τ dθ |
| 1 | (b) Same dθ for every point of a rigid body, so the works add to ∫τ_net dθ |
| 1 | (c) Chain rule α = ω dω/dθ and integration with limits |
| 1 | (d) Constant I (rigid, fixed axis), linked to taking I outside the integral |

**Alternative for (a).** Using the dot product dW = F·ds with |ds| = r dθ and the angle between F and ds equal to 90° − φ earns both (a) points.
</details>

## Question 6 (constructed response · stretch)

A garden gate turns about vertical hinges. A spring in the hinge pulls the gate towards the closed position. A student opens the gate to θ = 1.2 rad (θ is measured from closed), holds it still, and measures the spring's torque at several angles with a torque sensor:

| θ (rad) | 0 | 0.2 | 0.4 | 0.6 | 0.8 | 1.0 | 1.2 |
|---|---|---|---|---|---|---|---|
| spring torque, magnitude (N·m) | 5.0 | 6.0 | 7.6 | 9.6 | 12.0 | 15.0 | 18.4 |

The gate's rotational inertia about the hinges is 15 kg·m². She then releases it from rest at 1.2 rad and lets it swing shut.

(a) Explain whether the spring does positive or negative work as the gate closes.
(b) Estimate the work done by the spring from θ = 1.2 rad to θ = 0, showing your method.
(c) Predict the gate's angular velocity as it reaches θ = 0, if friction is negligible.
(d) A photogate measures 1.15 rad/s at θ = 0. Estimate the energy lost to friction, and the average friction torque.
(e) Where during the swing is the gate's angular acceleration largest? Justify your answer from the data.

<details>
<summary>Worked solution and suggested Marlbridge rubric</summary>

**(a)** **Positive.** The spring torque acts towards closed, and the gate turns towards closed. Torque and rotation are in the same sense, so τ dθ > 0 for every step.

**(b)** Use the trapezium rule on the τ–θ data (strips 0.2 rad wide): W = 0.2 × [½(5.0 + 18.4) + 6.0 + 7.6 + 9.6 + 12.0 + 15.0] = 0.2 × 61.9 = **12.4 J ≈ 12 J**. (The torque curve bends upward, so straight-line trapezia slightly overestimate.)

**(c)** ½Iω² = 12.4 J, so ω = √(2 × 12.4/15) = **1.3 rad/s** (1.28 rad/s).

**(d)** Measured K = ½ × 15 × 1.15² = 9.9 J. Energy lost ≈ 12.4 − 9.9 = **2.5 J**. If the friction torque τ_f is roughly constant, |W_f| = τ_f × 1.2 rad, so τ_f ≈ 2.5/1.2 ≈ **2.1 N·m**.

**(e)** At **θ = 1.2 rad**, at release. There the spring torque is largest (18.4 N·m), and α = τ_net/I, so α is largest. (With friction, the net torque is still largest there.)

| Point | What earns it |
|---|---|
| 1 | (a) Positive, because torque and rotation are in the same sense |
| 1 | (b) Area under the τ–θ data by trapezia or counting squares, about 12 J (accept 11–14 J with a valid method) |
| 1 | (c) ω ≈ 1.3 rad/s from W = ½Iω² (carry forward from (b)) |
| 1 | (d) Energy lost ≈ 2.5 J and average friction torque ≈ 2 N·m |
| 1 | (e) θ = 1.2 rad, linked to the largest torque and α = τ_net/I |

**Alternative for (b).** Fitting a curve to the data and integrating it earns the point (the data fit τ ≈ 5.0 + 4.0θ + 6.0θ², giving 12.3 J).
</details>

## Question 7 (explanation · stretch)

Take counterclockwise as positive. A motor turns a wheel from rest with a torque τ = bθ² (b is a positive constant) from θ = 0 to θ = Θ. The axle is frictionless. A student says: "The motor does the same work in the first half of the turn as in the second half, because the angles are equal."

(a) Test the claim by finding the work in each half.
(b) Find the wheel's angular velocity at θ = Θ/2 as a fraction of its angular velocity at θ = Θ.
(c) State the condition under which the student's claim would be true, and give the fraction in (b) for that case.

<details>
<summary>Model answer and suggested Marlbridge rubric</summary>

**(a)** First half: ∫₀^(Θ/2) bθ² dθ = bΘ³/24. Second half: ∫ from Θ/2 to Θ of bθ² dθ = b(Θ³ − Θ³/8)/3 = 7bΘ³/24. The second half gets **7 times** the work, so the claim is **false**. Work is the area under the τ–θ graph, and the graph is much higher in the second half.

**(b)** From rest, K is proportional to the work done so far. At Θ/2, K = bΘ³/24, out of a final bΘ³/3, so K is 1/8 of its final value. Since K ∝ ω², ω(Θ/2)/ω(Θ) = √(1/8) ≈ **0.35**.

**(c)** The claim is true for a **constant torque**: then equal angles give equal areas and equal work. In that case K at Θ/2 is half the final value, so the fraction is 1/√2 ≈ **0.71**.

| Point | What earns it |
|---|---|
| 1 | (a) Both works by integration, bΘ³/24 and 7bΘ³/24 |
| 1 | (a) Concludes the claim is false, with the area (or "torque larger later") reason |
| 1 | (b) ω ratio √(1/8) ≈ 0.35 from the work–energy theorem |
| 1 | (c) Constant torque, with 1/√2 ≈ 0.71 |
</details>

## How did you do?

- **Q1 or Q4 wrong:** re-read "From force work to torque work" and Worked example 1 in the [study guide](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-study-guide/). Integrate any torque that changes with angle.
- **Q2 or Q6 wrong:** revisit "Positive, negative and zero work" and "Area under a torque–angle graph". Area below the axis is negative work.
- **Q3 or Q7 wrong:** go back to "Comparing scenarios". Equal work means equal ΔK, not equal ω.
- **Q5 incomplete:** work through "The rotational work–energy theorem" step by step, including the chain rule.

Then tick off the [topic checklist](/advanced-course-resources/physics-c-mechanics/6-2-torque-work-checklist/).
