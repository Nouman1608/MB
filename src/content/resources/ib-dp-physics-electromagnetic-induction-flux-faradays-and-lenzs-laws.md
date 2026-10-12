---
title: "IB DP Physics: Electromagnetic induction: flux, Faraday's and Lenz's laws and generators (DP Physics)"
seoTitle: "IB DP Physics D.4 Induction (HL) Study Guide"
resourceType: "study-guides"
subject: "physics"
level: ["ib"]
topic: "Electromagnetic induction: flux, Faraday's and Lenz's laws and generators"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Physics"]
syllabusSeries: "First assessment 2025"
order: 293
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-physics-topic-d"
    subtopic: "ib-dp-physics-d-4"
description: "A full HL guide to IB DP Physics D.4 induction: flux, Faraday's and Lenz's laws, moving conductors and rotating-coil generators, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-12
featured: false
---

This guide teaches **sub-topic D.4, Induction**, from Topic D of the IB Diploma Programme *Physics guide*, first assessment 2025. D.4 is **additional higher level (HL only)**: the guide lists no standard level content here, and the sub-topic is allotted 6 hours. If you take Physics at SL, you can skip it. Everything below is HL only.

Use the [IB Physics hub](/boards/ib/ib-dp/physics/) and the [printable checklist](/checklists/ib/ib-dp/physics/) to track your progress. Two companion pages follow this one: the [revision notes](/resources/ib-dp-physics-electromagnetic-induction-flux-faradays-and-lenzs-laws-revision-notes/) and the [practice questions](/resources/ib-dp-physics-electromagnetic-induction-flux-faradays-and-lenzs-laws-practice/). To find out where you stand first, try the [free 10-minute diagnostics](/diagnostics/).

## What D.4 covers

| Guide statement | What you must be able to do | Tier |
|---|---|---|
| Magnetic flux, Φ = BA cos θ | Calculate flux through a loop and find the right angle | HL only |
| Faraday's law, ε = −N ΔΦ/Δt | Link a changing flux to an induced emf in a coil of N turns | HL only |
| Straight conductor moving across a field, ε = BvL | Find the emf across a rod or the side of a coil | HL only |
| Lenz's law and energy conservation | Give the direction of an induced emf or current and justify it | HL only |
| Sinusoidal emf in a rotating coil | Describe and sketch the emf, and find its peak value | HL only |
| Changing the frequency of rotation | Predict the effect on peak emf and period | HL only |
| Examples of induced emf | Time-varying fields, rotating coils, relative motion | HL only |
| Self-induction (qualitative) | Explain the effect in words only | HL only |

The guide limits calculations to straight conductors that cross a field at 90° and to rectangular coils that enter, leave or rotate in a field. It does not ask for inductance or resistor-inductor circuits.

## Magnetic flux

Magnetic flux Φ measures how much magnetic field passes through a surface. For a uniform field B crossing a flat area A:

**Φ = BA cos θ**

Here θ is measured from the field to the **normal**, the line standing at 90° to the surface. The unit is the weber (Wb), where 1 Wb = 1 T m².

Field along the normal gives θ = 0° and the maximum flux BA. Field parallel to the plane of the loop gives θ = 90° and zero flux. So flux can change in three ways: B changes, A changes, or θ changes. Every induction effect in this topic is one of these.

### Worked example 1

A square loop of side 6.0 cm sits in a uniform field of 0.42 T. The normal to the loop makes 25° with the field. Find the flux.

1. A = 0.060² = 3.6 × 10⁻³ m².
2. Φ = BA cos θ = 0.42 × 3.6 × 10⁻³ × cos 25°.
3. Φ = **1.4 × 10⁻³ Wb**.

If you are given the angle to the surface instead, take it away from 90° first.

## Faraday's law

When the flux through a coil changes with time, an emf is induced. For a coil of N turns:

**ε = −N ΔΦ/Δt**

The emf depends on the **rate of change** of flux, not on the flux itself. A large flux that stays constant induces nothing. The minus sign expresses Lenz's law, covered below.

In a graph of Φ against time, the gradient is ΔΦ/Δt, so the emf is −N times the gradient. A steep section gives a large emf, a flat section gives zero, and a negative gradient gives an emf of the opposite sense.

### Worked example 2

A coil of 120 turns has a flux through it that falls uniformly from 2.4 × 10⁻³ Wb to 0.6 × 10⁻³ Wb in 0.15 s. Find the size of the induced emf.

1. ΔΦ = 2.4 × 10⁻³ − 0.6 × 10⁻³ = 1.8 × 10⁻³ Wb.
2. |ε| = N ΔΦ/Δt = 120 × 1.8 × 10⁻³ / 0.15.
3. |ε| = **1.4 V** (1.44 V before rounding).

If the flux does not change uniformly, ΔΦ/Δt gives the average emf over the interval.

## A conductor moving in a field

Drag a straight conductor of length L through a uniform field B with velocity v perpendicular to both, and the field pushes its free electrons along the conductor. An emf appears between the ends:

**ε = BvL**

This is Faraday's law for a special case: in time Δt the rod sweeps out an area LvΔt, so ΔΦ/Δt = BvL. The rod, its velocity and the field must be mutually at right angles. If the velocity is along the field, no emf is induced.

### A rectangular coil entering or leaving a field

Only the side of the coil that is cutting field lines contributes. Once the whole coil is inside a uniform field, the flux no longer changes, so the emf is zero.

**Worked example 3.** A rectangular coil of 40 turns measures 5.0 cm by 12 cm. It is pulled out of a region of uniform field 0.80 T (field at right angles to the coil), moving along the 12 cm direction so that a 5.0 cm side leads, and takes 0.25 s to leave completely.

1. Speed: the coil travels its own length, 0.12 m, so v = 0.12 / 0.25 = 0.48 m s⁻¹.
2. Only the 5.0 cm side that is still in the field cuts the lines: emf per turn = BvL = 0.80 × 0.48 × 0.050 = 0.0192 V.
3. For 40 turns, ε = 40 × 0.0192 = **0.77 V**.
4. Faraday check: 40 × 0.80 × (0.050 × 0.12) / 0.25 = 0.77 V.

## Lenz's law and energy conservation

**Lenz's law:** the direction of an induced emf is such that any current it drives opposes the change that produced it.

This is energy conservation in action. If the induced current helped the change, a magnet pushed towards a coil would be pulled in harder and gain kinetic energy for free. Because the current opposes the motion, you must do work to move the magnet, and that work becomes electrical energy in the circuit.

**Method for direction:**

1. Work out whether the flux through the loop is growing or shrinking, and which way it points.
2. The induced current produces its own field that opposes the change: against the flux if it is rising, along it if it is falling.
3. Apply the right-hand grip rule to that field to get the current direction.

**Example: a magnet and a coil.** Push the north pole of a bar magnet towards a coil. The flux through the coil along the magnet's axis increases. The coil responds by becoming a north pole on the side facing the magnet, so it repels the approaching pole. Pull the magnet away and the near face of the coil becomes a south pole, attracting the magnet back. Either way you feel resistance.

**Example: the sliding rod.** A rod slides to the right along rails, closed at the left end, in a field pointing into the page. The area enclosed grows, so the flux into the page grows. The induced current must produce a field out of the page inside the loop, which means anticlockwise current, so it flows up the page in the rod. The force on this current in the field points left, against the motion.

### Worked example 4: energy check

A rod of length 0.36 m moves at 3.5 m s⁻¹ along rails in a uniform field of 0.075 T. The rod and rails together have a resistance of 0.20 Ω. Find the emf, the current, the push needed to hold the speed steady and the power supplied, and confirm that energy is conserved.

1. ε = BvL = 0.075 × 3.5 × 0.36 = 0.0945 V.
2. I = ε/R = 0.0945 / 0.20 = 0.47 A (0.4725 A).
3. Magnetic force on the rod: F = BIL = 0.075 × 0.4725 × 0.36 = 0.013 N (0.01276 N). You must push with this force.
4. Mechanical power: P = Fv = 0.01276 × 3.5 = **0.045 W**.
5. Electrical power: I²R = 0.4725² × 0.20 = 0.045 W.

The work you do equals the heating in the circuit.

## Rotating coils and generators

Place a flat coil of N turns and area A in a uniform field B, and rotate it at a steady angular speed ω = 2πf about an axis perpendicular to the field. Start the clock when the coil's plane is perpendicular to the field, so the normal is along B. Then θ = ωt and:

Φ = BA cos ωt, so ε = −N dΦ/dt = **NBAω sin ωt**

The emf is sinusoidal. Its peak value is

**ε_max = NBAω = 2πf NBA**

and its period is T = 1/f.

- When the coil's plane is perpendicular to the field, the flux is at its maximum but is changing most slowly, so the emf is **zero**.
- When the coil's plane is parallel to the field, the flux is zero but is changing fastest, so the emf is at its **peak**. Its sides are cutting the field lines at right angles.
If timing starts with the plane parallel to the field, the emf is a cosine instead. Read where the question starts.

### Changing the rotation frequency

In ε_max = 2πf NBA, only f changes. Doubling the frequency:

- doubles the peak emf, because the flux changes twice as fast;
- halves the period, so the waveform is squeezed along the time axis and made taller.

Raising the turbine speed therefore raises the voltage and the frequency of the output together. You can also raise the peak emf by increasing N, B or A.

### Worked example 5

A generator coil has N = 200 and area 0.012 m². It turns at 50 Hz in a field of 0.15 T, starting from flux maximum.

1. ω = 2π × 50 = 314 rad s⁻¹.
2. ε_max = NBAω = 200 × 0.15 × 0.012 × 314 = **113 V**.
3. At t = 2.0 ms: ωt = 0.628 rad, so ε = 113 × sin 0.628 = **66 V**.
4. If the frequency rises to 100 Hz, ε_max = **226 V** and the period falls from 20 ms to 10 ms.

## Other ways of inducing an emf

The guide asks you to recognise three groups of examples:

- **Time-varying fields.** A fixed coil near a changing electromagnet sees B change.
- **Rotating coils** in a uniform field, as above.
- **Relative motion.** A magnet bobbing on a spring over a coil gives an emf that alternates in sign as the magnet moves up and down. It is largest as the magnet passes equilibrium at maximum speed, and the oscillation dies away as the circuit takes energy from it.

## Self-induction (qualitative)

A changing current in a coil changes its own flux, and so induces an emf in that same coil. By Lenz's law, this emf opposes the change in current. When a switch is closed, the current cannot jump to its final value at once; the self-induced emf opposes the rise. When a switch in an inductive circuit is opened, the collapsing current is opposed in the same way, which can produce a large emf across the switch gap and a spark. You need this description only. Inductance and circuits with resistors and inductors are not required.

## Common errors

- Using the angle to the plane of the loop in Φ = BA cos θ, instead of the angle to the normal.
- Calculating an emf when the coil is wholly inside a uniform field. It is zero.
- Saying that Lenz's law opposes the **field** rather than the **change** in flux.
- Forgetting to use ω = 2πf, which makes the peak emf wrong by a factor of 2π.

## Official syllabus

This page follows sub-topic D.4 (Induction) of the IB Diploma Programme *Physics guide*, first assessment 2025, published by the International Baccalaureate Organization. D.4 is additional higher level content only.
