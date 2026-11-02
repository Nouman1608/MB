---
title: "OxfordAQA International AS and A-level Physics: Flux, flux linkage and electromagnetic induction (9630)"
seoTitle: "OxfordAQA A-level Physics Electromagnetic Induction Guide"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Flux, flux linkage and electromagnetic induction"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
stage: "A"
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
order: 122
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics"
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "electromagnetic-induction-oxfordaqa-alevel-physics"
description: "Study guide to flux, flux linkage, Faraday's and Lenz's laws, eddy currents and the rotating coil for OxfordAQA International A-level Physics (9630)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide is written for OxfordAQA International AS and A-level Physics (9630), using Version 4.4 of the specification (exams from May/June 2020). It covers sections 3.10.3 (Magnetic flux and flux linkage) and 3.10.4 (Electromagnetic induction). The specification marks section 3.10 as International A-level only, so none of this is part of International AS. Use it with the [course hub](/boards/oxfordaqa/a-level/physics/) and tick points off on the [printable checklist](/checklists/oxfordaqa/a-level/physics/).

Other pages for this topic: [revision notes](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction-revision-notes/) and [practice questions](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction-practice/). You need the force on a wire and on a moving charge from section 3.10.1 and 3.10.2 first. Not sure where you stand? Try a [free 10-minute diagnostic](/diagnostics/).

## What this unit covers

| Section | What you must be able to do |
|---|---|
| 3.10.3 | Use magnetic flux Φ = BA, where B is perpendicular to A |
| 3.10.3 | Use flux linkage NΦ for a coil of N turns |
| 3.10.3 | Find the flux linkage of a rectangular coil rotated in a field: NΦ = BAN cos θ |
| 3.10.4 | Describe simple experimental phenomena of induction |
| 3.10.4 | Use Faraday's and Lenz's laws |
| 3.10.4 | Use ε = ΔΦ/Δt, the magnitude of the induced emf as the rate of change of flux linkage |
| 3.10.4 | Apply this to a straight conductor moving in a magnetic field |
| 3.10.4 | Explain the production of eddy currents |
| 3.10.4 | Use ε = BANω sin ωt for a coil rotating uniformly in a field |

## Magnetic flux and flux linkage (3.10.3)

The flux Φ through a surface measures how much field passes through it. When B is perpendicular to the area A:

**Φ = BA**

The unit of Φ is the weber (Wb), and 1 Wb = 1 T m². 

A coil has N turns, and each turn is threaded by the same flux Φ. The **flux linkage** is the total for the coil:

**flux linkage = NΦ**

It has the same unit as flux. Only the turns count: a 250-turn coil in the same field as a single loop of the same area has 250 times the flux linkage.

### Worked example 1: flux and flux linkage

A rectangular coil of 300 turns measures 0.060 m by 0.045 m. It sits square-on to a uniform 0.072 T field. Find the flux through one turn and the flux linkage.

```
A = 0.060 × 0.045 = 2.7 × 10⁻³ m²
Φ = BA = 0.072 × 2.7 × 10⁻³ = 1.94 × 10⁻⁴ Wb
NΦ = 300 × 1.944 × 10⁻⁴ = 5.8 × 10⁻² Wb
```

### A rotated coil

If the field is not perpendicular to the coil, only the component of B along the normal to the coil counts. Let θ be the angle between the field direction and the **normal** to the plane of the coil. Then the flux through one turn is BA cos θ, and the flux linkage is

**NΦ = BAN cos θ**

- At θ = 0° the normal is along the field, the coil faces the field and NΦ takes its largest value, BAN.
- At θ = 90° the coil plane is parallel to the field and NΦ = 0.
- If a question gives the angle between the plane of the coil and the field, call it α. Then θ = 90° − α, so cos θ becomes sin α. Draw the normal on a sketch before you substitute.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--01-fields-due-to-currents.webp" width="900" height="1210" alt="Three panels show field lines of a long straight wire (circles, with B falling as 1/r), a flat circular coil and a long solenoid. The wire panel has a 1/r graph; the coil and solenoid lines are computed with the Biot-Savart law. The solenoid has a uniform field inside and a bar-magnet pattern outside." loading="lazy">
  <figcaption>Field lines of a straight wire, a flat coil and a solenoid, with B falling as 1/r away from the wire.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--05-lenz-law-magnet-coil.webp" width="900" height="1110" alt="Three rows show a bar magnet with its north pole facing a coil and a centre-zero meter. Moving in: the near end of the coil becomes a north pole and repels the magnet. Held still: no deflection. Moving out: the near end becomes a south pole and attracts the magnet, and the meter deflection reverses." loading="lazy">
  <figcaption>The induced pole always opposes the magnet movement, so the meter deflects one way going in and the other way coming out.</figcaption>
</figure>


### Worked example 2: rotated coil

A rectangular coil has area 6.0 × 10⁻³ m² and 40 turns in a field of 0.12 T. The maximum flux linkage is

```
BAN = 0.12 × 6.0 × 10⁻³ × 40 = 2.88 × 10⁻² Wb
```

- θ = 35°: NΦ = 2.88 × 10⁻² × cos 35° = 2.4 × 10⁻² Wb.
- Plane at 25° to the field: θ = 90° − 25° = 65°, so NΦ = 2.88 × 10⁻² × cos 65° = 1.2 × 10⁻² Wb.
- NΦ = 1.44 × 10⁻² Wb: cos θ = 0.500, so θ = 60°.

## Simple induction experiments (3.10.4)

An emf is induced in a conductor whenever the flux linkage changes. You can show this in several ways, each with a sensitive meter or datalogger across a coil:

1. Move a bar magnet towards the coil. The meter shows a reading during the movement and returns to zero once the magnet stops.
2. Pull the magnet out. The deflection reverses.
3. Move the magnet faster. The deflection is larger but lasts for a shorter time.
4. Hold the magnet still and move the coil. Only the relative motion matters.
5. Use a second coil (or an electromagnet) next to the first and switch its current on or off, or vary it. The meter in the first coil deflects only while the current changes.
6. Move a straight wire across the field between two magnet poles, and the meter connected to the wire deflects.

Every case has the same cause: the flux linkage is changing. A steady field through a steady coil gives no emf, however strong the field is.

## Faraday's and Lenz's laws (3.10.4)

**Faraday's law:** the size of the induced emf depends on how fast the flux linkage changes, and in SI units it equals that rate.

**Lenz's law:** the induced emf acts in the direction that works against whatever caused it, and so does any current it drives round a closed loop.

In the specification's notation:

**ε = ΔΦ/Δt**, where ΔΦ is the change in flux linkage (NΦ) in time Δt.

For a coil with N turns, this is ε = N ΔΦ/Δt with Φ the flux through one turn. The specification asks for the magnitude of ε. The minus sign you may have seen in ε = −N ΔΦ/Δt is Lenz's law: the induced emf opposes the change.

Lenz's law is energy conservation in disguise. Suppose the induced current aided the change. A small push would then snowball with no energy input. In practice you do work against the opposing effect, and that work becomes electrical energy.

**Using Lenz's law for direction:**

1. Decide whether the flux linkage is rising or falling.
2. The induced current produces a field that opposes this: opposite to the original field if flux is rising, the same direction if flux is falling.
3. Use the right-hand grip to turn the required field direction into a current direction.

For example, a north pole pushed towards a coil makes the near end of the coil behave as a north pole, which repels the magnet. A north pole pulled away makes the near end a south pole, which attracts it. You always feel resistance to the motion.

### Worked example 3: average emf

A coil of 150 turns has a flux through each turn that falls uniformly from 4.0 × 10⁻⁴ Wb to 1.0 × 10⁻⁴ Wb in 0.25 s.

```
Δ(NΦ) = 150 × (4.0 × 10⁻⁴ − 1.0 × 10⁻⁴) = 4.5 × 10⁻² Wb
ε = Δ(NΦ)/Δt = 4.5 × 10⁻² / 0.25 = 0.18 V
```

The flux falls uniformly, so this emf is constant. For a non-uniform change it is an average. The gradient of a graph of flux linkage against time at a point gives the instantaneous emf.

## A straight wire cutting a field (3.10.4)

Take a straight conductor of length L moving at speed v at right angles to both its length and a uniform field B. In time Δt it sweeps out an area ΔA = L v Δt. The flux "cut" is ΔΦ = B L v Δt, and one conductor is one turn, so

**ε = BLv**

When the conductor forms part of a closed loop, the emf drives a current I = ε/R. That current in the field gives a force F = BIL on the conductor. By Lenz's law this force opposes the motion, so something must keep pushing to hold the speed constant.

### Worked example 4: rod on rails

A rod of length 0.40 m slides at a constant 3.0 m s⁻¹ along horizontal rails in a vertical field of 0.060 T. The total resistance of the circuit is 0.90 Ω.

```
ε = BLv = 0.060 × 0.40 × 3.0 = 0.072 V
I = ε/R = 0.072 / 0.90 = 0.080 A
F = BIL = 0.060 × 0.080 × 0.40 = 1.9 × 10⁻³ N (opposing the motion)
Power needed = Fv = 1.92 × 10⁻³ × 3.0 = 5.8 × 10⁻³ W
Check: I²R = 0.080² × 0.90 = 5.8 × 10⁻³ W
```

The mechanical power supplied equals the electrical power dissipated.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--02-force-on-a-wire.webp" width="900" height="1050" alt="A wire carrying current into the page between a north pole on the left and a south pole on the right feels a downward force (Fleming left-hand rule: thumb force, first finger field, second finger current). A top view defines theta, and a graph of F = BIL sin theta (B = 0.35 T, I = 4.5 A, L = 0.080 m) gives 0 at 0 degrees, 0.081 N at 40 degrees and 0.126 N at 90 degrees." loading="lazy">
  <figcaption>The force on a wire in a field depends on sin theta and is greatest at 90 degrees.</figcaption>
</figure>


## Eddy currents (3.10.4)

A solid piece of metal is a conductor with no fixed circuit. If the flux through it changes, whether the metal moves through a field or the field changes around it, emfs are induced in it and currents circulate in closed loops through the bulk of the metal. These are **eddy currents**.

By Lenz's law, the eddy currents oppose the change that causes them. Consequences:

- A magnet dropped through a vertical aluminium tube falls much more slowly than through a cardboard tube of the same size. The moving magnet changes the flux through each part of the tube wall. The eddy currents set up opposing fields, so a force acts on the magnet, and the magnet's kinetic energy is converted to thermal energy in the tube.
- A metal plate swinging between magnet poles is damped and comes to rest quickly.
- Eddy currents heat the metal. This is wasteful in a transformer core, so a core is often made from thin insulated sheets, which break up the loops and make the currents smaller.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--07-transformer.webp" width="900" height="935" alt="A laminated iron core carries a primary coil of 1840 turns on 230 V a.c. and a secondary of 120 turns on a 15 V, 30 W load. The changing flux links both coils; Ip = 0.13 A and Is = 2.0 A, so power in equals power out for an ideal transformer. Eddy currents are big loops in a solid core and small loops in a laminated core. A real transformer draws 34.5 W for 30 W out, 87 percent efficient." loading="lazy">
  <figcaption>An ideal transformer has Ns/Np = Vs/Vp = Ip/Is; the laminated core reduces eddy-current losses.</figcaption>
</figure>


## The rotating coil (3.10.4)

A rectangular coil of N turns and area A rotates at constant angular speed ω in a uniform field B. Take θ = ωt, with t = 0 when the normal lies along the field. Then

```
NΦ = BAN cos ωt
ε = BANω sin ωt
```

The emf is the rate of change of this flux linkage, so cosine becomes sine. Peak emf is **ε₀ = BANω**, with ω = 2πf = 2π/T.

- With the coil plane square-on to the field, the flux linkage peaks and the emf is zero.
- When the plane is parallel to the field, flux linkage is zero and the emf is at its maximum, because the flux linkage is changing fastest.

Doubling the rotation rate doubles ω, so the peak emf doubles and the period halves.

### Worked example 5: generator

A coil has 200 turns of area 4.0 × 10⁻³ m² and rotates at 40 Hz in a field of 0.15 T. Find the peak emf and the emf 3.5 ms after the normal was along the field.

```
ω = 2πf = 2π × 40 = 251.3 rad s⁻¹
ε₀ = BANω = 0.15 × 4.0 × 10⁻³ × 200 × 251.3 = 30.2 V
ωt = 251.3 × 3.5 × 10⁻³ = 0.880 rad
ε = 30.16 × sin 0.880 = 23 V (2 s.f.)
```

Take sin of ωt in radians. In degrees, ωt = 50.4°, which gives the same answer.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-physics-alternating-currents--06-rotating-coil-generator.webp" width="900" height="1165" alt="Four end-on pictures show a coil turning in a uniform field at 0, 90, 180 and 270 degrees. Graphs for one 40 ms period (120 turns, 0.25 T, 4.5e-3 m2, 25 Hz) show N phi = NBA cos wt between plus and minus 0.135 Wb turns and E = NBAw sin wt with peak 21.2 V. E is zero when flux linkage is maximum and largest when it changes fastest." loading="lazy">
  <figcaption>The e.m.f. of a rotating coil is minus the gradient of the flux linkage, so a cosine flux linkage gives a sine e.m.f.</figcaption>
</figure>


## Common errors

- Putting the angle to the coil's plane into cos θ. In this section θ is measured from the normal.
- Forgetting N when you work out the emf from the flux through one turn.
- Saying a large flux gives a large emf. It is the rate of change of flux linkage that matters.
- Writing that the induced emf "opposes the flux". It opposes the change in flux.
- Calling the emf maximum when the flux is maximum on a rotating coil.
- Mixing degrees and radians in sin ωt.
- Explaining eddy-current damping without stating that the currents are induced because the flux changes.

Next, test yourself with the [practice questions](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction-practice/), or recap with the [revision notes](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction-revision-notes/).

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), Version 4.4, for International AS and A-level exams from May/June 2020 onwards, published by OxfordAQA. Sections 3.10.3 Magnetic flux and flux linkage and 3.10.4 Electromagnetic induction (International A-level only).
