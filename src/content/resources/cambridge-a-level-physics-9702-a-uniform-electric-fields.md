---
title: "Cambridge A Level Physics (9702): Uniform electric fields"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Electric fields"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "A"
order: 18.2
syllabusTopics:
  - qualification: "a-level"
    topic: "a-electric-fields"
    subtopic: "a-uniform-electric-fields"
description: "Cambridge A Level Physics 9702 subtopic 18.2: E = ΔV/Δd between parallel plates and how charged particles accelerate and deflect in uniform fields."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **18.2 Uniform electric fields** of Cambridge International AS & A Level Physics 9702, 2025–2027 series (A Level). The broader [Electric Fields study guide](/resources/a-physics-electric-fields/) introduces the whole of Topic 18; this page goes further into the uniform field between parallel plates: where E = ΔV/Δd comes from, how potential changes across the gap, and how to analyse the motion of charged particles that are accelerated, slowed or deflected by the field. For quick recall use the [Uniform electric fields revision notes](/resources/cambridge-a-level-physics-9702-a-uniform-electric-fields-revision-notes/), and for exam-style questions the [Uniform electric fields practice questions](/resources/cambridge-a-level-physics-9702-a-uniform-electric-fields-practice/).

## What 18.2 asks you to do

Candidates should be able to:

- **recall and use E = ΔV/Δd** to calculate the field strength of the uniform field between charged parallel plates
- **describe the effect of a uniform electric field on the motion of charged particles**

The first outcome is a calculation; the second is tested both with descriptions ("describe the path") and with multi-step calculations that use kinematics from AS Level.

## The field between parallel plates

Two parallel metal plates connected to a supply carry equal and opposite charges. Between them, away from the edges, the field lines are straight, parallel, evenly spaced and perpendicular to the plates: the field is **uniform**, with the same strength and direction everywhere. Near the edges the lines bow outwards (edge effects), and questions assume the particle stays in the uniform region.

### Why E = ΔV/Δd

Move a small positive charge q from the negative plate to the positive plate, a distance Δd, against a constant force qE. The work done is force × distance = qEΔd. By definition of potential difference, the work done per unit charge is ΔV, so qΔV = qEΔd and therefore:

```
E = ΔV / Δd          unit: V m⁻¹
```

Δd is the separation **measured along the field**, at right angles to the plates. The units confirm the result: V m⁻¹ = J C⁻¹ m⁻¹ = N m C⁻¹ m⁻¹ = **N C⁻¹**, the same as the unit from F = qE.

### Potential across the gap

Because E is constant, the potential changes **linearly** with distance between the plates. With one plate at 0 V and the other at +600 V, 40 mm apart, the potential rises by 15 V for every millimetre: 150 V at 10 mm, 300 V halfway, 450 V at 30 mm. Equipotentials are planes parallel to the plates, evenly spaced.

### How E responds to changes

| Change (other things constant) | Effect on E |
|---|---|
| Double the p.d. | E doubles |
| Double the separation (plates still connected to the same supply) | E halves |
| Double the p.d. and halve the separation | E × 4 |

## Effects on the motion of charged particles

A charged particle in a uniform field feels a **constant force** F = qE, so it has a **constant acceleration** a = qE/m, directed along the field lines (for a positive charge) or against them (for a negative charge). For electrons, protons and ions, the weight is negligible in comparison.

### Particle moving along the field lines

The force is parallel to the velocity, so only the speed changes:

- force in the direction of motion: the particle **speeds up** uniformly
- force opposite to the motion: it **slows down**, stops, and accelerates back

The energy change is the work done by the field: qEΔd = qΔV. A particle of charge q accelerated from rest through a p.d. V gains kinetic energy:

```
½mv² = qV
```

### Particle entering at right angles to the field

This is the case most often examined. Resolve the motion into two independent directions, exactly as for a projectile:

- **parallel to the plates**: no force, so the velocity component stays **constant**
- **perpendicular to the plates**: constant force, so **uniform acceleration** a = qE/m, starting from zero

The path between the plates is therefore a **parabola**. Once the particle leaves the field, there is no force, and it travels in a **straight line** along the direction it had at the exit.

```
time between plates      t = L / v        (L = plate length, v = entry speed)
sideways displacement    y = ½at²
sideways velocity        v_y = at
angle of exit            tan θ = v_y / v
```

A larger deflection comes from a larger p.d., a smaller separation, a slower particle, a larger charge or a smaller mass. Electrons and protons deflect in **opposite** directions, and for the same entry speed the electron's sideways acceleration is about 1800 times larger.

## Worked example 1: deflecting an electron beam

An electron enters the space midway between two parallel plates, travelling at 2.5 × 10⁷ m s⁻¹ parallel to them. The plates are 0.060 m long and 0.020 m apart, with a p.d. of 150 V between them. Find the sideways deflection at exit and the angle of the beam.

```
E = V/d = 150 / 0.020 = 7500 V m⁻¹
F = eE = 1.60 × 10⁻¹⁹ × 7500 = 1.2 × 10⁻¹⁵ N
a = F/m = 1.2 × 10⁻¹⁵ / 9.11 × 10⁻³¹ = 1.32 × 10¹⁵ m s⁻²
t = L/v = 0.060 / 2.5 × 10⁷ = 2.4 × 10⁻⁹ s
y = ½at² = 0.5 × 1.32 × 10¹⁵ × (2.4 × 10⁻⁹)² = 3.8 × 10⁻³ m
v_y = at = 3.2 × 10⁶ m s⁻¹
tan θ = 3.2 × 10⁶ / 2.5 × 10⁷   so   θ = 7.2°
```

*Annotation.* Check the electron does not hit a plate: it started 10 mm from each plate and moved 3.8 mm, so it emerges. The deflection is towards the **positive** plate, because the electron is negative. The horizontal speed is unchanged at 2.5 × 10⁷ m s⁻¹ throughout.

## Worked example 2: accelerating electrons

Electrons are accelerated from rest through a p.d. of 2000 V. Calculate their final kinetic energy and speed.

```
E_k = eV = 1.60 × 10⁻¹⁹ × 2000 = 3.2 × 10⁻¹⁶ J
v = √(2E_k / m) = √(2 × 3.2 × 10⁻¹⁶ / 9.11 × 10⁻³¹) = 2.7 × 10⁷ m s⁻¹
```

*Annotation.* Only the p.d. matters, not the plate separation: a wider gap gives a weaker field acting over a longer distance, and the product Ed = V is the same.

## Worked example 3: stopping a proton

A proton moving at 4.0 × 10⁵ m s⁻¹ enters a uniform field of 2.0 × 10⁴ V m⁻¹ that opposes its motion. How far does it travel before stopping?

```
E_k = ½mv² = 0.5 × 1.67 × 10⁻²⁷ × (4.0 × 10⁵)² = 1.34 × 10⁻¹⁶ J
F = eE = 1.60 × 10⁻¹⁹ × 2.0 × 10⁴ = 3.2 × 10⁻¹⁵ N
distance = E_k / F = 0.042 m
```

*Annotation.* The work done against the field equals the kinetic energy lost. The p.d. over this distance is 2.0 × 10⁴ × 0.042 = 835 V; any gap with a smaller p.d. than this cannot stop the proton.

## Common mistakes

- **Using millimetres** in E = V/d. Convert to metres.
- **Measuring d along the plates** instead of across the gap.
- **Saying the horizontal velocity changes** in the deflection problem.
- **Describing the path between plates as circular.** A circle comes from a magnetic field; a uniform electric field gives a parabola.
- **Continuing the parabola after the particle leaves the plates.** Outside the field the path is straight.
- **Deflecting an electron towards the negative plate.**

## Exam technique for the command words

- **Describe** (the path): parabolic between the plates, towards the plate of opposite sign, straight after leaving; give the reason (constant force perpendicular to the initial velocity).
- **Explain** (why the path is a parabola): constant velocity parallel to the plates, uniform acceleration perpendicular to them, as in projectile motion.
- **Calculate**: E first, then F, then a; find t from the unaffected direction; then y and v_y.
- **Show that** (V m⁻¹ = N C⁻¹): write each unit in terms of J, C, N and m step by step.
- **Suggest** (how to increase the deflection): name a change and give its effect on a or t.

## Related resources

- [Electric Fields study guide](/resources/a-physics-electric-fields/) — the whole of Topic 18
- [Uniform electric fields revision notes](/resources/cambridge-a-level-physics-9702-a-uniform-electric-fields-revision-notes/)
- [Uniform electric fields practice questions](/resources/cambridge-a-level-physics-9702-a-uniform-electric-fields-practice/)
- [Electric fields and field lines study guide](/resources/cambridge-a-level-physics-9702-a-electric-fields-and-field-lines/) — F = qE and field-line rules

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
