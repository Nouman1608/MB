---
title: "Cambridge A Level Physics (9702): Electromagnetic induction"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Magnetic fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 20.5
syllabusTopics:
  - qualification: "a-level"
    topic: "a-magnetic-fields"
    subtopic: "a-electromagnetic-induction"
description: "A focused guide to 20.5 Electromagnetic induction in Cambridge A Level Physics 9702: flux Φ = BA, flux linkage, Faraday's and Lenz's laws, graphs and moving conductors."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **20.5 Electromagnetic induction** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) introduces the whole of Topic 20 and describes the standard induction experiments in detail; this page goes further into the calculation side of 20.5: flux through a tilted area, flux linkage, Faraday's law as a rate of change, reading e.m.f. from a flux-linkage graph, the e.m.f. across a moving rod, and using Lenz's law to find directions and link them to energy. For quick recall use the [Electromagnetic induction revision notes](/resources/cambridge-a-level-physics-9702-a-electromagnetic-induction-revision-notes/), and for exam-style questions the [Electromagnetic induction practice questions](/resources/cambridge-a-level-physics-9702-a-electromagnetic-induction-practice/).

## What 20.5 asks you to do

The syllabus lists five outcomes. Candidates should be able to:

- **define magnetic flux as the product of the magnetic flux density and the cross-sectional area perpendicular to the direction of the magnetic flux density**
- **recall and use Φ = BA**
- **understand and use the concept of magnetic flux linkage**
- **understand and explain experiments that demonstrate** that a changing magnetic flux can induce an e.m.f. in a circuit, that the induced e.m.f. is in such a direction as to oppose the change producing it, and the factors affecting the magnitude of the induced e.m.f.
- **recall and use Faraday's and Lenz's laws of electromagnetic induction**

The experiments are covered thoroughly in the broader guide. Here the focus is on using the laws quantitatively.

## Magnetic flux

```
Φ = BA        (A is the area perpendicular to B)
```

The unit of flux is the **weber** (Wb): 1 Wb = 1 T m².

The definition insists on the area **perpendicular** to the field. If a flat coil is tilted, only the projection of its area at right angles to B counts. If the normal to the coil makes an angle θ with B:

```
Φ = BA cos θ
```

- Plane of coil perpendicular to B (normal along B, θ = 0): Φ = BA, maximum.
- Plane of coil parallel to B (θ = 90°): Φ = 0, because no field lines pass through it.

Be careful which angle a question gives. If it gives the angle between the field and the **plane** of the coil, the perpendicular area is A sin of that angle.

Flux is a scalar, but it has a sign depending on which way the field passes through the coil. Turning a coil through 180° in a uniform field changes the flux from +BA to −BA: a change of **2BA**, not zero.

## Flux linkage

For a coil of N turns, each turn links the same flux Φ, so the total **magnetic flux linkage** is:

```
flux linkage = NΦ = NBA       (unit: Wb, often written Wb-turns)
```

The induced e.m.f. depends on the rate of change of flux linkage, so a coil of many turns gives a proportionally larger e.m.f. than a single loop.

## Faraday's law and Lenz's law

**Faraday's law**: the magnitude of the induced e.m.f. is proportional to (and, in SI units, equal to) the rate of change of magnetic flux linkage.

**Lenz's law**: the direction of the induced e.m.f. is such as to oppose the change producing it.

Combined:

```
E = −Δ(NΦ) / Δt
```

The minus sign is Lenz's law. For a steady rate of change, Δ(NΦ)/Δt gives the e.m.f. directly; for a changing rate, it gives the average over the interval Δt.

Four ways of changing the flux linkage, all inducing an e.m.f.:

- changing B (moving a magnet, or changing a current in a nearby coil);
- changing the area in the field (a rod sliding along rails, a coil entering or leaving a field);
- changing the orientation (rotating a coil);
- changing N (rarely used in questions).

## Graphs of flux linkage and e.m.f.

Faraday's law says the induced e.m.f. equals the **gradient** of a graph of flux linkage against time (with a sign change for direction). Use this to sketch one graph from the other:

- straight rising section of NΦ–t → constant e.m.f. of one sign;
- flat section → zero e.m.f., however large the flux linkage;
- straight falling section → constant e.m.f. of the opposite sign;
- steeper section → larger e.m.f.

Conversely, the **area under an e.m.f.–time graph** equals the change in flux linkage.

## Worked example 1: a changing field

A coil of 100 turns and area 2.0 × 10⁻³ m² has its plane perpendicular to a magnetic field. The flux density rises steadily from zero to 0.40 T in 0.20 s, stays constant for 0.30 s, then falls steadily to zero in 0.10 s. Calculate the e.m.f. in each stage.

```
Maximum flux linkage = NBA = 100 × 0.40 × 2.0 × 10⁻³ = 0.080 Wb

Rise:      E = 0.080 / 0.20 = 0.40 V
Constant:  E = 0
Fall:      E = 0.080 / 0.10 = 0.80 V, opposite sign to the rise
```

*Annotation.* The largest e.m.f. occurs during the fastest change, not when the field is largest. Questions often test this with a sketch: the e.m.f.–time graph is a set of rectangles (positive, zero, then a taller negative one).

## Worked example 2: rotating a coil

A coil of 250 turns, each of area 4.0 cm², lies with its plane perpendicular to a uniform field of 0.30 T. Calculate the average e.m.f. when the coil is turned **(a)** through 90° in 0.050 s and **(b)** through 180° in 0.050 s.

```
Initial flux linkage = NBA = 250 × 0.30 × 4.0 × 10⁻⁴ = 0.030 Wb

(a) Final flux linkage = 0 (plane parallel to B)
    E = 0.030 / 0.050 = 0.60 V

(b) Final flux linkage = −0.030 Wb (field passes through the other way)
    Change = 0.060 Wb
    E = 0.060 / 0.050 = 1.2 V
```

*Annotation.* 4.0 cm² = 4.0 × 10⁻⁴ m² (each centimetre is 10⁻² m, so a square centimetre is 10⁻⁴ m²). The 180° case catches many candidates who think the flux "ends where it started".

## The moving rod

A straight rod of length L moves at speed v across a uniform field B, at right angles to both its length and the field, sliding along two rails joined by a resistor. In time Δt it sweeps out an area L v Δt, so the flux through the circuit changes by B L v Δt. Faraday's law gives:

```
E = Δ(Φ)/Δt = BLv
```

This is not a separate law: it is Faraday's law applied to a changing area.

**Worked example 3.** A rod of length 0.20 m moves at 3.0 m s⁻¹ along rails in a field of 0.50 T. The total resistance of the circuit is 1.5 Ω. Calculate the induced e.m.f., the current, the magnetic force on the rod and the power needed to keep it moving.

```
E = BLv = 0.50 × 0.20 × 3.0 = 0.30 V
I = E / R = 0.30 / 1.5 = 0.20 A
F = BIL = 0.50 × 0.20 × 0.20 = 0.020 N
Power = Fv = 0.020 × 3.0 = 0.060 W   (check: EI = 0.30 × 0.20 = 0.060 W)
```

*Annotation.* The force on the rod, from the induced current in the field, opposes its motion: that is Lenz's law. To keep the rod at constant speed, an external force of 0.020 N must push it, doing work at 0.060 W, and that is exactly the electrical power dissipated in the resistance. Lenz's law is conservation of energy in action: if the induced current helped the motion, the rod would accelerate and produce energy from nothing.

## Finding directions with Lenz's law

A reliable method:

1. Decide what is **changing**: is the flux through the circuit increasing or decreasing, and in which direction?
2. The induced current produces its own field that **opposes the change**: opposite to the external field if the flux is increasing, the same way if it is decreasing.
3. Use the right-hand grip rule to find the current direction that gives that field.

For the rod in Worked example 3, if the rod moves to the right with the field into the page, and the circuit lies to the left of the rod, the area and the inward flux are increasing. The induced current must produce an outward field inside the circuit, so it flows anticlockwise round the circuit: up through the rod. Check: current up the rod with the field into the page gives a force to the left, opposing the motion.

## Common mistakes

- **Using the whole area of a tilted coil** instead of the perpendicular area.
- **Forgetting N** in flux linkage.
- **Treating a 180° turn as zero change** in flux.
- **Saying a large flux means a large e.m.f.** The e.m.f. depends on the rate of change.
- **Leaving cm² as if they were m²**, or dividing by 100 instead of 10⁴.
- **Stating Lenz's law as "opposes the flux".** It opposes the **change** in flux.

## Exam technique for the command words

- **Define** (magnetic flux): the product of the magnetic flux density and the cross-sectional area perpendicular to the field.
- **State** Faraday's law: the induced e.m.f. is proportional to the rate of change of magnetic flux linkage. State Lenz's law: the induced e.m.f. is in a direction to oppose the change producing it.
- **Explain** (an experiment): link the observation to a change in flux linkage; say what happens when the change stops.
- **Calculate**: find the initial and final flux linkage, the change, then divide by the time.
- **Sketch** (an e.m.f.–time graph from a flux-linkage graph): plot the negative gradient; flat parts of the flux graph give zero e.m.f.
- **Explain** (Lenz's law in terms of energy): the induced current produces a force or field opposing the motion, so work must be done, and this work becomes electrical energy.

## Related resources

- [Magnetic Fields study guide](/resources/a-physics-magnetic-fields/) — the whole of Topic 20, including the induction experiments
- [Electromagnetic induction revision notes](/resources/cambridge-a-level-physics-9702-a-electromagnetic-induction-revision-notes/)
- [Electromagnetic induction practice questions](/resources/cambridge-a-level-physics-9702-a-electromagnetic-induction-practice/)
- [Characteristics of alternating currents study guide](/resources/cambridge-a-level-physics-9702-a-characteristics-of-alternating-currents/) — the next topic, which builds on induction

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
