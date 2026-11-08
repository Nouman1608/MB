---
title: "IB DP Physics: Rotational dynamics: torque, moment of inertia and angular momentum (DP Physics) -- Revision Notes"
seoTitle: "IB DP Physics A.4 Rigid Body Mechanics Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["ib"]
topic: "Rotational dynamics: torque, moment of inertia and angular momentum"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 274
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-a"
    subtopic: "ib-dp-physics-a-4"
description: "Condensed HL revision notes for IB DP Physics A.4: torque, moment of inertia, angular momentum and rotational energy, with a self-test."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-12
featured: false
reviewNote: "2026-11-08: reviewed by iftikhar-azeemi."
---

These notes condense **sub-topic A.4, Rigid body mechanics**, from the IB Diploma Programme *Physics guide*, first assessment 2025. A.4 is **additional higher level (HL only)** with no standard level content. For full explanations and longer worked examples, read the [study guide](/resources/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and/), then test yourself with the [practice questions](/resources/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and-practice/).

Related pages: the [IB Physics hub](/boards/ib/ib-dp/physics/), the [printable checklist](/checklists/ib/ib-dp/physics/), [forces and momentum revision notes](/resources/ib-dp-physics-forces-momentum-revision-notes/) and [kinematics revision notes](/resources/ib-dp-physics-kinematics-revision-notes/). Not sure which areas are weakest? Take the [free 10-minute diagnostics](/diagnostics/).

## Key terms

- **Torque**: the turning effect of a force about an axis, τ = Fr sin θ, in N m.
- **Rotational equilibrium**: zero resultant torque.
- **Angular displacement, Δθ**: the angle turned through, in rad.
- **Angular velocity, ω**: rate of change of angle, in rad s⁻¹. The guide uses angular speed with a sense, not a vector treatment.
- **Angular acceleration, α**: rate of change of ω, in rad s⁻².
- **Moment of inertia, I**: how the distribution of mass about an axis resists a change in rotation, in kg m².
- **Angular momentum, L**: Iω, in kg m² s⁻¹.
- **Angular impulse**: τΔt, equal to the change in L.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--03-angular-suvat.webp" width="900" height="900" alt="An angular speed against time graph for a flywheel going from 12 to 40 rad per second in 8.0 s. The gradient is 3.5 rad per second squared and the area under the line, 96 rad plus 112 rad, is the angle turned: 208 rad or 33.1 turns. Higher level only." loading="lazy">
  <figcaption>The area under an omega-t graph is the angle turned, just as the area under a v-t graph is distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--07-angular-impulse.webp" width="900" height="1070" alt="A torque of 0.80 N m for 5.0 s gives an area of 4.0 N m s, so L rises from 0 to 4.0 kg m squared per second. With I = 0.040 kg m squared, omega = 100 rad per second and kinetic energy = L squared / 2I = 200 J. Higher level only." loading="lazy">
  <figcaption>The area under a torque-time graph is the change in angular momentum.</figcaption>
</figure>


## Formulae

| Quantity | Equation | Notes |
|---|---|---|
| Torque | τ = Fr sin θ | θ is the angle between F and the line from the axis |
| Point masses | I = Σmr² | r is the distance to the axis |
| Newton's second law | τ = Iα | τ is the resultant (average) torque |
| Angular momentum | L = Iω | Conserved if no resultant torque acts |
| Angular impulse | ΔL = τΔt = Δ(Iω) | |
| Rotational energy | Ek = ½Iω² = L²/2I | |
| Link to linear motion | v = ωr | For a point at distance r from the axis |

Uniform angular acceleration:

| Equation | Missing quantity |
|---|---|
| Δθ = ((ωf + ωi)/2) t | α |
| ωf = ωi + αt | Δθ |
| Δθ = ωi t + ½αt² | ωf |
| ωf² = ωi² + 2αΔθ | t |

Choose the equation that leaves out the quantity you neither know nor need.

## Linear and rotational: the analogy

| Linear idea | Rotational partner |
|---|---|
| s | Δθ |
| v | ω |
| a | α |
| m | I |
| F | τ |
| Newton's second law, F = ma | τ = Iα |
| p = mv | L = Iω |
| FΔt (impulse) | τΔt (angular impulse) |
| Ek = ½mv² = p²/2m | Ek = ½Iω² = L²/2I |

The guide's linking idea is that the equations of motion and the conservation laws for rotation are analogous to those for linear motion. The analogy is a memory aid; always check that you are using a rotational quantity with a rotational one.

## Methods in steps

**Rotational equilibrium problem**
1. Draw the body and mark every force at its point of application. A uniform body's weight acts at its centre of mass.
2. Choose an axis, ideally through the point where an unknown force acts.
3. Choose a positive sense. Write clockwise torques equal to counter-clockwise torques.
4. Solve. If a force or angle is needed, add the condition that forces sum to zero.

**Angular acceleration problem**
1. Find the resultant torque, with signs.
2. Find I about the same axis, using Σmr² or the formula you are given.
3. α = τ/I, then use the angular equations of motion.

**Coupled bodies (string over a pulley)**
1. Write F = ma for the hanging mass.
2. Write τ = Iα for the pulley, using the tension.
3. Link them with a = αR, assuming the string does not slip.
4. Eliminate the tension.

**Changing I or joining bodies**
1. Check there is no external resultant torque.
2. Write L before = L after, with I and ω on both sides.
3. Calculate Ek before and after if energy is asked about. L is conserved, Ek need not be.

**Rolling without slipping**
1. Use v = ωr.
2. Write total Ek = ½mv² + ½Iω².
3. Substitute the given I and eliminate ω.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--02-beam-equilibrium.webp" width="900" height="850" alt="A 5.0 m, 30 kg uniform beam balanced on a pivot 1.0 m from the left end with a 45 kg block hanging at that end. Arrow lengths are proportional to the forces: 441 N block weight, 294 N beam weight at the midpoint, 736 N pivot force. Counter-clockwise torque 441 N m equals clockwise torque 441 N m. Higher level only." loading="lazy">
  <figcaption>Taking torques about the pivot removes the unknown pivot force and gives the hanging mass.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--05-pulley-coupled.webp" width="900" height="980" alt="A 0.50 kg mass hangs from a string wound on a 3.0 kg, 0.10 m disc pulley. Weight 4.91 N down, tension 3.68 N up, so the mass accelerates down at 2.45 m per second squared while the pulley turns clockwise with angular acceleration 24.5 rad per second squared. Higher level only." loading="lazy">
  <figcaption>Apply F = ma to the mass and torque = I alpha to the pulley, linked by a = alpha R.</figcaption>
</figure>


## Small worked reminders

**Torque.** A force of 4.0 N perpendicular to a handle, 0.35 m from the axis: τ = 4.0 × 0.35 = 1.4 N m. The same force along the handle gives sin 0° = 0, so no torque.

**Angular impulse.** A wheel with I = 0.20 kg m² reaches 10 rad s⁻¹ from rest. Then L = 2.0 kg m² s⁻¹ and Ek = L²/2I = 4.0/0.40 = 10 J. The torque that did this over 4.0 s was on average ΔL/Δt = 0.50 N m.

**Conservation.** If a spinning body's I falls to a third of its value and no external torque acts, ω triples and Ek triples. The extra energy comes from the work done on the body.

**Rolling.** A hoop (I = mr², given) rolls from rest down a drop of 0.80 m without slipping. Then mgh = ½mv² + ½mv² = mv², so v = √(gh) = √(9.81 × 0.80) = 2.80 m s⁻¹. Half the energy is rotational. With ω = v/r, a hoop of radius 0.20 m turns at 14.0 rad s⁻¹ at the bottom.

**Sense.** For a seesaw balanced about its midpoint, a 30 kg child at 1.5 m on the left gives a counter-clockwise torque. A second child on the right balances it only if their mass times distance is also 45 kg m.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--01-torque.webp" width="900" height="790" alt="A rod pivoted at one end with an 18 N force at 0.75 m acting at 40 degrees to the rod. The force splits into F cos theta (13.8 N, along the rod, no turning) and F sin theta (11.6 N, at right angles, turns the rod). The sense is counter-clockwise and the torque is 8.68 N m. Higher level only." loading="lazy">
  <figcaption>Only the component of force at right angles to the line from the axis turns the body.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--06-angular-momentum.webp" width="900" height="1110" alt="A person on a freely turning stool, top view, pulls weights in. I falls from 5.2 to 3.4 kg m squared, angular speed rises from 1.50 to 2.29 rad per second, L stays 7.8 kg m squared per second and kinetic energy rises from 5.85 to 8.95 J. Higher level only." loading="lazy">
  <figcaption>L = I omega is conserved with no external torque; the energy gain comes from the work done pulling in.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--08-rolling.webp" width="900" height="1040" alt="A cylinder rolls from rest down a 0.60 m drop and reaches 2.80 m per second, while a frictionless sliding block reaches 3.43 m per second. The block turns all of mgh into forward motion; the cylinder uses two thirds for forward motion and one third for spin. Higher level only." loading="lazy">
  <figcaption>Part of the energy goes into rotation, so the rolling body is slower; mass cancels.</figcaption>
</figure>


## Must-know distinctions

- **Torque and energy**: both have the unit N m, but torque is a turning effect with a sense and energy is a scalar. Write torque in N m and energy in J.
- **Angular speed and linear speed**: ω is the same for every point of a rigid body. v = ωr differs with r.
- **Mass and moment of inertia**: mass is fixed for a body, I changes with the axis and with the arrangement of mass.
- **Conservation of L and of Ek**: collisions where bodies join lose kinetic energy but keep L if no external torque acts.
- **Equilibrium and rest**: zero resultant torque means constant ω, which can be non-zero. Rotational equilibrium does not require the body to be stationary.
- **Resultant and individual torques**: τ = Iα uses the resultant torque, including friction at the axle.

## Quick self-test

1. A force of 12 N acts perpendicular to a spanner at 0.50 m from the nut. What is the torque?
2. A torque of 2.0 N m acts on a body of I = 0.50 kg m². What is α?
3. A wheel at 5.0 rad s⁻¹ has α = 2.0 rad s⁻² for 6.0 s. Find ω at the end.
4. A body starts from rest with α = 5.0 rad s⁻². Find the angular displacement when ω = 8.0 rad s⁻¹.
5. Masses of 0.20 kg at 0.50 m and 0.30 kg at 0.20 m from an axis: find I.
6. A body with I = 0.40 kg m² turns at 3.0 rad s⁻¹. Find L.
7. A skater spinning at 3.0 rad s⁻¹ reduces I from 2.0 to 0.80 kg m². Find the new ω.
8. A body has L = 6.0 kg m² s⁻¹ and I = 0.90 kg m². Find Ek.
9. A torque of 3.0 N m acts for 2.5 s. What angular impulse is this?
10. A wheel of radius 0.15 m rolls without slipping at 3.0 m s⁻¹. Find ω.
11. State the condition for rotational equilibrium.
12. Why does a hoop have a larger I than a disc of the same mass and radius?

### Answers

1. τ = 12 × 0.50 = **6.0 N m**.
2. α = 2.0/0.50 = **4.0 rad s⁻²**.
3. ω = 5.0 + 2.0 × 6.0 = **17 rad s⁻¹**.
4. Δθ = ωf²/2α = 64/10 = **6.4 rad**.
5. I = 0.20 × 0.25 + 0.30 × 0.04 = 0.050 + 0.012 = **0.062 kg m²**.
6. L = 0.40 × 3.0 = **1.2 kg m² s⁻¹**.
7. ω = 2.0 × 3.0/0.80 = **7.5 rad s⁻¹**.
8. Ek = 36/(2 × 0.90) = **20 J**.
9. ΔL = 3.0 × 2.5 = **7.5 kg m² s⁻¹** (equivalently N m s).
10. ω = v/r = 3.0/0.15 = **20 rad s⁻¹**.
11. **The resultant torque about any axis is zero.**
12. **More of the hoop's mass is at the full radius, far from the axis, so Σmr² is larger.**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--04-moment-of-inertia.webp" width="900" height="980" alt="Two 0.60 kg masses on a light 0.80 m rod, seen from above. About the middle I = 2 x 0.60 x 0.40 squared = 0.192 kg m squared; about one mass I = 0.60 x 0.80 squared = 0.384 kg m squared, twice as much. Higher level only." loading="lazy">
  <figcaption>The same body has a different moment of inertia about a different axis; r is the distance to the axis.</figcaption>
</figure>


## Where marks are usually lost

- Using a force that is not perpendicular to r without the factor sin θ.
- Forgetting a torque, such as the weight of a uniform beam at its midpoint, or the sense of one torque.
- Reporting torque in J, or I in kg.
- Using one radius for every mass in Σmr² when the masses sit at different distances from the axis.
- Using revolutions or rev min⁻¹ in an equation that needs rad and rad s⁻¹.
- Writing L = Iω for the final state without adding the second body's I after coupling.
- Claiming Ek is conserved when bodies join.
- Giving a final answer without a sense when the question asks for the direction of rotation.
- Not showing the substitution in a "show that" question, where the full route is needed.

## Frequently asked questions

**Is angular velocity treated as a vector in IB DP Physics?**
No. The guide uses angular speed with a sense of rotation, clockwise or counter-clockwise, rather than a full vector treatment.

**Does rotational equilibrium mean the body is at rest?**
No. Zero resultant torque means constant angular velocity, which can be non-zero, so a body in rotational equilibrium can still be turning.

**Torque and energy are both in N m, so are they the same thing?**
No. Torque is a turning effect with a sense, while energy is a scalar. Write torque in N m and energy in J.

**Is kinetic energy conserved when two spinning bodies join?**
No. Angular momentum is conserved if no external torque acts, but kinetic energy is lost when bodies join.

## Official syllabus

These notes follow sub-topic A.4 (Rigid body mechanics) of the IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization.
