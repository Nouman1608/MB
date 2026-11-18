---
title: "AQA A-Level Physics (7408): Rotational dynamics -- Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Engineering physics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7408"]
syllabusSeries: "For first teaching 2015"
order: 11.1
syllabusTopics:
  - qualification: "a-level"
    topic: "engineering-physics-aqa-alevel"
    subtopic: "rotational-dynamics-aqa-alevel"
description: "Condensed AQA A-level Physics 7408 notes on rotational dynamics (3.11.1): equations, linear analogy, flywheels, angular momentum and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense section **3.11.1 Rotational dynamics** of the AQA AS and A-level Physics specification (7407/7408), part of the A-level only Engineering physics option. Full explanations and worked examples are in the [rotational dynamics study guide](/resources/aqa-a-level-physics-7408-rotational-dynamics-aqa-alevel/); test yourself with the [rotational dynamics practice questions](/resources/aqa-a-level-physics-7408-rotational-dynamics-aqa-alevel-practice/).

## Equations

| Statement | Equation | Units |
|---|---|---|
| 3.11.1.1 | I = mr² (point mass); I = Σmr² | kg m² |
| 3.11.1.2 | E_k = ½Iω² | J |
| 3.11.1.3 | ω = Δθ/Δt; α = Δω/Δt | rad s⁻¹; rad s⁻² |
| 3.11.1.3 | ω₂ = ω₁ + αt; θ = ½(ω₁ + ω₂)t; θ = ω₁t + ½αt²; ω₂² = ω₁² + 2αθ | uniform α only |
| 3.11.1.4 | T = Fr; T = Iα | N m |
| 3.11.1.5 | angular momentum = Iω; TΔt = Δ(Iω) | N m s |
| 3.11.1.6 | W = Tθ; P = Tω | J; W |

Conversions: 1 revolution = 2π rad; ω (rad s⁻¹) = rpm × 2π/60.

## Key terms

| Term | Meaning |
|---|---|
| Moment of inertia | Resistance of an object to angular acceleration about an axis; depends on mass and its distribution |
| Torque | Turning effect of a force: force × perpendicular distance from axis |
| Resultant torque | Driving torque minus frictional torque |
| Angular momentum | Iω; conserved if no external resultant torque |
| Angular impulse | TΔt; equals change of angular momentum; area under a T–t graph |
| Flywheel | Rotating mass used to store energy or smooth torque and speed |
| Frictional torque | Torque from bearings and air resistance opposing rotation |

## Moment of inertia factors

- More mass → larger I.
- Mass further from the axis → much larger I (r²).
- Axis position matters; the same body has different I about different axes.
- Shape expressions (such as ring MR², disc ½MR²) are given in questions.

## Flywheels

- Capacity rises with I (mass at the rim) and with ω² (high speed).
- Limit: material strength at high ω.
- Losses: bearing friction and air resistance.
- Uses: smoothing torque and speed; vehicle energy storage (regenerative braking); production machines (press, punch) releasing energy in a burst.

## Graphs

- ω–t: gradient = α; area = θ.
- θ–t: gradient = ω.
- T–t: area = angular impulse = Δ(Iω).
- Curved ω–t line: non-uniform α; draw a tangent.

## Conservation of angular momentum

- No external resultant torque → I₁ω₁ = I₂ω₂.
- Pull mass inwards → I down → ω up; E_k rises because work is done pulling inwards.
- Objects coupling together (a disc dropped onto a turntable) → angular momentum conserved, E_k falls.
- Sport: skater spins, diver tucks, gymnast opens out to slow down.

## Method: falling-mass experiment to find I

1. Find a from s = ½at² (released from rest).
2. Tension = m(g − a).
3. Torque = tension × axle radius; α = a/r.
4. I = torque/α (friction makes this an overestimate).

## Exam traps

- Leaving ω in rpm or θ in revolutions.
- Using the applied torque instead of the resultant torque.
- Saying kinetic energy is conserved whenever angular momentum is.
- Taking the string tension as mg for an accelerating mass.
- Forgetting that r is measured from the axis, not from the edge.
- Mixing up angular speed (no direction) and angular velocity (direction of rotation).

## Self-test

1. Three 0.20 kg masses sit 0.30 m from an axis on a light frame. Calculate I.
2. Convert 1800 rpm to rad s⁻¹.
3. Calculate the kinetic energy of a flywheel with I = 0.60 kg m² at 150 rad s⁻¹.
4. A wheel speeds up uniformly from 20 rad s⁻¹ to 80 rad s⁻¹ in 12 s. Find α and θ.
5. A wheel with I = 0.30 kg m² must have α = 4.0 rad s⁻² against a frictional torque of 0.30 N m. Find the applied torque.
6. A spinning object's I falls from 0.40 kg m² to 0.10 kg m² with no external torque. It started at 3.0 rad s⁻¹. Find the new ω.
7. A shaft transmits a torque of 40 N m at 150 rad s⁻¹. Find the power.
8. What does the area under a torque–time graph represent?
9. Give two factors that increase a flywheel's energy storage capacity.
10. Explain why a skater spins faster when pulling in their arms.
11. A motor does work against a constant 2.0 N m frictional torque for 100 revolutions. How much work is done against friction?
12. Why does friction make the falling-mass value of I too large?

### Answers

1. I = 3 × 0.20 × 0.30² = **0.054 kg m²**.
2. 1800 × 2π/60 = **188 rad s⁻¹**.
3. ½ × 0.60 × 150² = **6.75 × 10³ J**.
4. α = 60/12 = **5.0 rad s⁻²**; θ = ½(20 + 80) × 12 = **600 rad**.
5. Resultant needed = 0.30 × 4.0 = 1.2 N m; applied = 1.2 + 0.30 = **1.5 N m**.
6. 0.40 × 3.0 = 0.10ω, so **ω = 12 rad s⁻¹**.
7. P = 40 × 150 = **6.0 kW**.
8. The **angular impulse**, equal to the **change in angular momentum**.
9. Larger **mass at the rim** (larger I); **higher angular speed** (E_k ∝ ω²).
10. No external torque, so **Iω is constant**; pulling the arms in **reduces I**, so ω increases.
11. W = Tθ = 2.0 × 100 × 2π = **1.26 × 10³ J**.
12. Part of the string's torque overcomes friction, so the measured α is smaller than for the same torque without friction, and **I = T/α comes out larger**.

## Frequently asked questions

**What is the rotational equivalent of Newton's second law?**
T = Iα, where T is the resultant torque on the object, I its moment of inertia and α its angular acceleration. It mirrors F = ma with torque for force and moment of inertia for mass.

**Why does a flywheel's rim carry most of its mass?**
Moment of inertia depends on r², so mass placed far from the axis gives a large I for little total mass. A larger I stores more energy at a given angular speed and smooths speed changes better.

## Official syllabus

AQA AS and A-level Physics specification (7407/7408), AS and A-level exams June 2016 onwards: section 3.11.1 Rotational dynamics (A-level only).
