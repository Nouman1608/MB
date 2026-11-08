---
title: "IB DP Physics: Rotational dynamics: torque, moment of inertia and angular momentum (DP Physics)"
seoTitle: "IB DP Physics A.4 Rigid Body Mechanics (HL) Guide"
resourceType: "study-guides"
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
description: "A full HL guide to IB DP Physics A.4 rigid body mechanics: torque, moment of inertia, angular momentum and rotational energy, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches **sub-topic A.4, Rigid body mechanics** (torque, moment of inertia and angular momentum), from Topic A of the IB Diploma Programme *Physics guide*, first assessment 2025. A.4 is **additional higher level (HL only)**: the guide lists no standard level content here, and the sub-topic is allotted 7 hours. If you take Physics at SL, you can skip it. Everything below is HL only.

Use the [IB Physics hub](/boards/ib/ib-dp/physics/) to see the other sub-topics and the [printable checklist](/checklists/ib/ib-dp/physics/) to tick off each statement. Two companion pages follow this one: the [revision notes](/resources/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and-revision-notes/) and the [practice questions](/resources/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and-practice/). For the linear ideas that rotation copies, see [forces and momentum](/resources/ib-dp-physics-forces-and-momentum/) and [kinematics](/resources/ib-dp-physics-kinematics/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What A.4 covers

| Guide statement | What you must be able to do | Tier |
|---|---|---|
| Torque, τ = Fr sin θ | Find a force's turning effect about an axis, with its clockwise or counter-clockwise sense | HL only |
| Rotational equilibrium | Use zero resultant torque to find unknown forces or positions | HL only |
| Unbalanced torque | Link a resultant torque on a rigid body to angular acceleration | HL only |
| Angular displacement, velocity, acceleration | Describe rotation with θ, ω and α | HL only |
| Equations for uniform angular acceleration | Use the four equations | HL only |
| Moment of inertia, I = Σmr² | Find I for point masses; explain how mass distribution matters | HL only |
| Newton's second law for rotation, τ = Iα | Solve problems with a resultant torque | HL only |
| Angular momentum, L = Iω | Calculate L and use conservation of L | HL only |
| Angular impulse, ΔL = τΔt = Δ(Iω) | Link torque acting over time to a change in L | HL only |
| Rotational kinetic energy, Ek = ½Iω² = L²/2I | Calculate and compare energies | HL only |

The guidance adds limits. The vector direction of a torque is not needed, but you must state whether it is clockwise or counter-clockwise. You do not calculate a centre of mass. The moment of inertia for a specific shape will be given when needed. Combined rotation and translation is limited to rolling without slipping. Expect situations where I changes and where two bodies are coupled.

## Torque and rotational equilibrium

A force changes how a body turns only if its line of action misses the axis. The **torque** of a force F about an axis is

τ = Fr sin θ

where r is the distance from the axis to the point where the force acts, and θ is the angle between the force and the line from the axis to that point. Only the part of the force at right angles to that line, F sin θ, turns the body. Torque is measured in N m.

**Sense.** Choose clockwise or counter-clockwise as positive. A torque the other way is negative.

**Centre of mass.** When you treat the whole of a body's weight as one force, it acts at the centre of mass. For a uniform beam that is the midpoint. You are not asked to calculate its position.

**Rotational equilibrium.** A body in rotational equilibrium has zero resultant torque about any axis. For a body at rest, the forces must also sum to zero. If the torques do not cancel, the unbalanced torque gives a rigid body an angular acceleration.

**Worked example 1.** A force of 18 N acts at 0.75 m from a hinge, at 40° to the line joining the hinge to the point of application. Find the torque.

```
τ = Fr sin θ = 18 × 0.75 × sin 40°
  = 8.68 N m  (3 s.f.)
```

**Worked example 2.** A uniform beam of length 5.0 m and mass 30 kg is balanced horizontally on a support placed 1.0 m in from its left end, with a block of mass m hanging at the left end. Find m, and the force from the pivot. Take g = 9.81 N kg⁻¹.

The beam's weight acts at its midpoint, 2.5 m from the left end, so 1.5 m from the pivot. Take torques about the pivot.

```
counter-clockwise (block):  m × 9.81 × 1.0
clockwise (beam):           30 × 9.81 × 1.5
equilibrium: m × 1.0 = 30 × 1.5, so m = 45 kg
pivot force = (45 + 30) × 9.81 = 736 N upward
```

Taking torques about the pivot removed the unknown pivot force from the equation.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--01-torque.webp" width="900" height="790" alt="A rod pivoted at one end with an 18 N force at 0.75 m acting at 40 degrees to the rod. The force splits into F cos theta (13.8 N, along the rod, no turning) and F sin theta (11.6 N, at right angles, turns the rod). The sense is counter-clockwise and the torque is 8.68 N m. Higher level only." loading="lazy">
  <figcaption>Only the component of force at right angles to the line from the axis turns the body.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--02-beam-equilibrium.webp" width="900" height="850" alt="A 5.0 m, 30 kg uniform beam balanced on a pivot 1.0 m from the left end with a 45 kg block hanging at that end. Arrow lengths are proportional to the forces: 441 N block weight, 294 N beam weight at the midpoint, 736 N pivot force. Counter-clockwise torque 441 N m equals clockwise torque 441 N m. Higher level only." loading="lazy">
  <figcaption>Taking torques about the pivot removes the unknown pivot force and gives the hanging mass.</figcaption>
</figure>


## Describing rotation: angle, speed and acceleration

The guide describes rotation using angular displacement Δθ (in radians), angular velocity ω and angular acceleration α. Angular speed is used rather than a formal vector treatment of angular velocity, so you need magnitudes and a sense.

- ω = Δθ/Δt, in rad s⁻¹.
- α = Δω/Δt, in rad s⁻².
- For a point at distance r from the axis, its speed is v = ωr. This link is needed later for rolling.

One full turn is 2π rad. Convert revolutions and degrees to radians before using any equation here.

For **uniform angular acceleration** the four equations mirror the linear ones:

| Rotational | Linear counterpart |
|---|---|
| Δθ = ((ωf + ωi)/2) t | s = ((v + u)/2) t |
| ωf = ωi + αt | v = u + at |
| Δθ = ωi t + ½αt² | s = ut + ½at² |
| ωf² = ωi² + 2αΔθ | v² = u² + 2as |

**Worked example 3.** A flywheel turning at 12 rad s⁻¹ speeds up uniformly at 3.5 rad s⁻² for 8.0 s. Find the final angular speed and the number of turns.

```
ωf = 12 + 3.5 × 8.0 = 40 rad s⁻¹
Δθ = 12 × 8.0 + ½ × 3.5 × 8.0² = 96 + 112 = 208 rad
turns = 208 / 2π = 33.1
check: ωf² = 144 + 2 × 3.5 × 208 = 1600, and 40² = 1600
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--03-angular-suvat.webp" width="900" height="900" alt="An angular speed against time graph for a flywheel going from 12 to 40 rad per second in 8.0 s. The gradient is 3.5 rad per second squared and the area under the line, 96 rad plus 112 rad, is the angle turned: 208 rad or 33.1 turns. Higher level only." loading="lazy">
  <figcaption>The area under an omega-t graph is the angle turned, just as the area under a v-t graph is distance.</figcaption>
</figure>



## Moment of inertia

The **moment of inertia** I is the rotational counterpart of mass: it sets the resistance to any change in a body's spin about a chosen axis. It depends on the mass and on how that mass is distributed about the axis: a kilogram placed far out contributes much more than one placed close in. For a system of point masses

I = Σmr²

where each r is the perpendicular distance from the axis. Unit: kg m². The same body has different values of I for different axes.

**Worked example 4.** Masses of 0.30 kg, 0.50 kg and 0.20 kg are fixed to a light rod at 0.40 m, 0.25 m and 0.80 m from an axis. Find I.

```
I = 0.30 × 0.40² + 0.50 × 0.25² + 0.20 × 0.80²
  = 0.048 + 0.03125 + 0.128 = 0.207 kg m²
```

**Same masses, different axis.** Two 0.60 kg masses sit at the ends of a light rod 0.80 m long. About the middle, I = 2 × 0.60 × 0.40² = 0.192 kg m². About one mass, I = 0.60 × 0.80² = 0.384 kg m². Moving the axis doubled I.

For extended bodies such as discs, rods and spheres, the question will supply the formula for I. Do not rely on remembering one.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--04-moment-of-inertia.webp" width="900" height="980" alt="Two 0.60 kg masses on a light 0.80 m rod, seen from above. About the middle I = 2 x 0.60 x 0.40 squared = 0.192 kg m squared; about one mass I = 0.60 x 0.80 squared = 0.384 kg m squared, twice as much. Higher level only." loading="lazy">
  <figcaption>The same body has a different moment of inertia about a different axis; r is the distance to the axis.</figcaption>
</figure>


## Newton's second law for rotation

The rotational form of Newton's second law is

τ = Iα

where τ is the resultant torque (the average torque if it varies) and I is about the same axis. For the same torque, doubling I halves α.

**Worked example 5.** A cylinder of mass 4.0 kg and radius 0.25 m has I = ½MR² (given). A string wound around it is pulled with a steady tangential force of 6.0 N. Find α.

```
I = ½ × 4.0 × 0.25² = 0.125 kg m²
τ = 6.0 × 0.25 = 1.5 N m
α = τ/I = 1.5 / 0.125 = 12 rad s⁻²
```

**Coupled bodies.** When a hanging mass turns a pulley through a string that does not slip, the string links the two motions: a = αR. Apply F = ma to the mass and τ = Iα to the pulley, and join them with the string tension.

**Worked example 6.** A 0.50 kg mass hangs from a string wound on a disc pulley of mass 3.0 kg and radius 0.10 m, with I = ½MR² (given). Released from rest, find the acceleration of the mass and the tension.

```
I = ½ × 3.0 × 0.10² = 0.015 kg m²
mass:   mg − T = ma
pulley: T R = I α = I a / R, so T = (I/R²) a = 1.5 a
add:    mg = (m + 1.5) a, so a = 0.50 × 9.81 / 2.0 = 2.45 m s⁻²
T = 1.5 × 2.4525 = 3.68 N
```

The tension is less than mg = 4.91 N, which is why the mass accelerates.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--05-pulley-coupled.webp" width="900" height="980" alt="A 0.50 kg mass hangs from a string wound on a 3.0 kg, 0.10 m disc pulley. Weight 4.91 N down, tension 3.68 N up, so the mass accelerates down at 2.45 m per second squared while the pulley turns clockwise with angular acceleration 24.5 rad per second squared. Higher level only." loading="lazy">
  <figcaption>Apply F = ma to the mass and torque = I alpha to the pulley, linked by a = alpha R.</figcaption>
</figure>


## Angular momentum and its conservation

A body turning with angular speed ω has **angular momentum**

L = Iω

in kg m² s⁻¹. **Angular momentum stays constant unless a resultant torque acts.** This applies to a system of bodies: if no external resultant torque acts, the total L before equals the total L after.

**Worked example 7: coupling to a second body.** A disc with I = 0.060 kg m² spins at 15 rad s⁻¹. A 0.20 kg lump of clay is dropped onto it at 0.15 m from the axis and sticks. Find the new angular speed and the change in kinetic energy.

```
I_final = 0.060 + 0.20 × 0.15² = 0.0645 kg m²
0.060 × 15 = 0.0645 × ω, so ω = 14.0 rad s⁻¹
Ek before = ½ × 0.060 × 15² = 6.75 J
Ek after  = ½ × 0.0645 × 13.95² = 6.28 J
```

L is conserved but kinetic energy is not. About 0.47 J is transferred to other forms during the sticking, as in an inelastic collision.

**Worked example 8: changing I.** A person on a freely turning stool holds weights out, with I = 5.2 kg m² and ω = 1.5 rad s⁻¹. Pulling the weights in reduces I to 3.4 kg m².

```
ω = 5.2 × 1.5 / 3.4 = 2.29 rad s⁻¹
Ek before = ½ × 5.2 × 1.5² = 5.85 J
Ek after  = ½ × 3.4 × 2.294² = 8.95 J
```

The kinetic energy rises because the person does work pulling the weights inwards.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--06-angular-momentum.webp" width="900" height="1110" alt="A person on a freely turning stool, top view, pulls weights in. I falls from 5.2 to 3.4 kg m squared, angular speed rises from 1.50 to 2.29 rad per second, L stays 7.8 kg m squared per second and kinetic energy rises from 5.85 to 8.95 J. Higher level only." loading="lazy">
  <figcaption>L = I omega is conserved with no external torque; the energy gain comes from the work done pulling in.</figcaption>
</figure>


## Angular impulse and rotational energy

A resultant torque acting for a time Δt produces an **angular impulse**, which equals the change in angular momentum:

ΔL = τΔt = Δ(Iω)

This is the rotational version of impulse equals change in momentum.

The kinetic energy of rotation is

Ek = ½Iω² = L²/2I

The second form follows from L = Iω. For fixed L, a smaller I means more energy.

**Worked example 9.** A torque of 0.80 N m acts on a wheel of I = 0.040 kg m², initially at rest, for 5.0 s. Find ω and Ek.

```
ΔL = 0.80 × 5.0 = 4.0 kg m² s⁻¹
ω = 4.0 / 0.040 = 100 rad s⁻¹
Ek = L²/2I = 16 / 0.080 = 200 J   (check: ½ × 0.040 × 100² = 200 J)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--07-angular-impulse.webp" width="900" height="1070" alt="A torque of 0.80 N m for 5.0 s gives an area of 4.0 N m s, so L rises from 0 to 4.0 kg m squared per second. With I = 0.040 kg m squared, omega = 100 rad per second and kinetic energy = L squared / 2I = 200 J. Higher level only." loading="lazy">
  <figcaption>The area under a torque-time graph is the change in angular momentum.</figcaption>
</figure>


## Rolling without slipping

A round body can move forward and turn at once. If it rolls without slipping, the speed of its centre is v = ωr, and its kinetic energy has two parts: ½mv² for translation and ½Iω² for rotation.

**Worked example 10.** A uniform cylinder, with I = ½mr² (given), rolls from rest down a slope, falling through a height of 0.60 m. Find its speed at the bottom.

```
mgh = ½mv² + ½Iω² = ½mv² + ½(½mr²)(v/r)² = ¾mv²
v = √(4gh/3) = √(4 × 9.81 × 0.60 / 3) = 2.80 m s⁻¹
```

A block sliding without friction would reach √(2gh) = 3.43 m s⁻¹. The cylinder is slower because part of the energy goes into rotation. Note that mass cancels.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-physics-rotational-dynamics-torque-moment-of-inertia-and--08-rolling.webp" width="900" height="1040" alt="A cylinder rolls from rest down a 0.60 m drop and reaches 2.80 m per second, while a frictionless sliding block reaches 3.43 m per second. The block turns all of mgh into forward motion; the cylinder uses two thirds for forward motion and one third for spin. Higher level only." loading="lazy">
  <figcaption>Part of the energy goes into rotation, so the rolling body is slower; mass cancels.</figcaption>
</figure>


## Common errors

- Using the wrong angle in τ = Fr sin θ. θ is measured from the line joining the axis to the point of application.
- Mixing sense: a clockwise torque must carry the opposite sign to a counter-clockwise one.
- Measuring r in Σmr² from the wrong point. It is the distance to the axis, not to the other mass.
- Leaving ω in rev min⁻¹ or degrees.
- Applying conservation of L when an external torque, such as friction at a bearing, acts during the process.
- Assuming kinetic energy is conserved whenever L is.

## Frequently asked questions

**How long is IB DP Physics A.4 Rigid body mechanics?**
A.4 is allotted 7 hours and is HL only. SL students can skip it.

**Do I need the vector direction of a torque?**
No. The vector direction of a torque is not needed, but you must state whether it is clockwise or counter-clockwise.

**Do I have to calculate a centre of mass?**
No. You are not asked to calculate the position of a centre of mass; for a uniform beam the weight acts at its midpoint.

**Which combined rotation and translation problems are examined?**
Combined rotation and translation is limited to rolling without slipping, where v = ωr and the kinetic energy has a translational and a rotational part.

## Official syllabus

This page follows sub-topic A.4 (Rigid body mechanics) of the IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. A.4 is additional higher level content only.
