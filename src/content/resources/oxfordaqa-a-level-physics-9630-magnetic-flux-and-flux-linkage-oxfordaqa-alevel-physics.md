---
title: "OxfordAQA A-Level Physics (9630): Magnetic flux and flux linkage"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.10 – Magnetic fields"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "A"
order: 10.3
syllabusTopics:
  - qualification: "a-level"
    topic: "magnetic-fields-oxfordaqa-alevel"
    subtopic: "magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics"
description: "Study guide to OxfordAQA 9630 section 3.10.3: Φ = BA, flux linkage NΦ, rotated coils with BANcosθ, reversals and flux linkage graphs for moving coils."
author: "marlbridge-academic-team"
reviewer: "iftikhar-azeemi"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to iftikhar-azeemi (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into one subtopic of OxfordAQA International AS and A-level Physics (9630): section 3.10.3, Magnetic flux and flux linkage, in Section 3.10 Magnetic fields (International A-level only). For a first pass through 3.10.3 and 3.10.4 together, use the [flux, flux linkage and electromagnetic induction study guide](/resources/oxfordaqa-a-level-physics-flux-flux-linkage-and-electromagnetic-induction/). After this page, condense it with the [flux and flux linkage revision notes](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics-revision-notes/) and test yourself with the [flux and flux linkage practice questions](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics-practice/).

## What the specification asks for

| Statement in 3.10.3 | What you must be able to do |
|---|---|
| Magnetic flux defined by Φ = BA where B is perpendicular to A | Define flux, use the weber, calculate Φ |
| Flux linkage as NΦ where N is the number of turns | Calculate flux linkage for coils |
| Flux and flux linkage passing through a rectangular coil rotated in a magnetic field: NΦ = BANcosθ | Use the angle correctly, find changes of flux linkage, and sketch NΦ against angle or time |

Flux linkage matters because section 3.10.4 makes it the quantity whose rate of change gives the induced emf. Every induction calculation starts with a flux linkage calculation, so the marks lost here are lost twice.

## Magnetic flux

Magnetic flux Φ through an area A is

Φ = BA, with B perpendicular to the area.

Think of B as the number of field lines per square metre, and Φ as the total number of lines passing through the area. Flux is measured in **webers** (Wb): 1 Wb = 1 T m². This also explains the name of B: flux density, in Wb m⁻².

Only the area that the field actually passes through counts. A large coil placed round a narrow magnetic field, such as the field inside a solenoid, has a flux equal to B × the area of the field, not B × the area of the coil.

## Flux linkage

A coil of N turns has the same flux through each turn, so the total flux linkage is NΦ. Its unit is the weber, though "weber-turns" is often written to show that N has been included.

| Coil | Flux through each turn | Flux linkage |
|---|---|---|
| 1 turn of area A | BA | BA |
| N turns of area A | BA | BAN |

## The rotated coil: NΦ = BAN cos θ

θ is the angle between the field and the **normal** to the plane of the coil (the line at right angles to the coil's face).

- θ = 0°: the field passes straight through the face. NΦ = BAN, the maximum.
- θ = 90°: the coil's plane lies along the field; no lines pass through. NΦ = 0.
- θ = 180°: the field passes through the face from the other side. NΦ = −BAN.

If a question gives the angle between the field and the **plane** of the coil, the angle to the normal is 90° minus that, so NΦ = BAN sin(angle to plane). Read which angle you have before substituting.

### Worked example 1: a tilted circular coil

A circular coil of radius 2.5 cm and 150 turns sits in a uniform field of 0.040 T. The field makes an angle of 30° with the plane of the coil. Find the flux linkage.

A = π × 0.025² = 1.96 × 10⁻³ m².

The angle to the normal is 90° − 30° = 60°.

NΦ = BAN cos 60° = 0.040 × 1.96 × 10⁻³ × 150 × 0.50 = **5.9 × 10⁻³ Wb**.

Using cos 30° by mistake gives 1.0 × 10⁻² Wb, which is wrong by a factor of √3.

## Changes of flux linkage

Induced emf depends on how much the flux linkage changes, so questions often ask for Δ(NΦ).

### Worked example 2: turning a coil over

The coil in worked example 1 is turned so that its face is perpendicular to the field, and then flipped through 180°.

Face perpendicular to the field (θ = 0°): NΦ = BAN = 0.040 × 1.96 × 10⁻³ × 150 = 1.18 × 10⁻² Wb.

After flipping, θ = 180°: NΦ = −1.18 × 10⁻² Wb.

Change = −1.18 × 10⁻² − (+1.18 × 10⁻²) = **−2.4 × 10⁻² Wb**, a magnitude of 2BAN.

The flux linkage has not just fallen to zero: it has reversed. Forgetting the reversal halves the change and the emf.

Other common changes:

| Movement | Change in flux linkage (magnitude) |
|---|---|
| θ from 0° to 90° | BAN |
| θ from 0° to 60° | BAN(1 − cos 60°) = 0.5 BAN |
| θ from 0° to 180° | 2BAN |
| Coil removed from the field | BAN cos θ |
| Field reversed | 2BAN cos θ |

## Flux linkage graphs for a coil moving through a field

### Worked example 3: a coil passing through a field region

A square coil of side 0.10 m and 20 turns moves at a constant 0.050 m s⁻¹ through a region 0.30 m wide where there is a uniform field of 0.20 T perpendicular to the coil. Outside this region there is no field. Describe how the flux linkage changes with time, starting as the leading edge enters.

Maximum flux linkage = BAN = 0.20 × 0.010 × 20 = 0.040 Wb.

- **0 to 2.0 s:** the coil enters. The area inside the field grows steadily (0.10 m of travel at 0.050 m s⁻¹ takes 2.0 s), so NΦ rises linearly from 0 to 0.040 Wb.
- **2.0 s to 6.0 s:** the whole coil is inside the field. The flux linkage is constant at 0.040 Wb. The leading edge reaches the far boundary at 0.30 / 0.050 = 6.0 s.
- **6.0 s to 8.0 s:** the coil leaves. NΦ falls linearly to zero.

The graph is a trapezium. In section 3.10.4, the emf is the gradient of this graph: 0.040 / 2.0 = 0.020 V while entering, zero while fully inside (even though the coil is moving), and 0.020 V in the opposite sense while leaving.

### A rotating coil

A coil rotating at angular speed ω has θ = ωt, so NΦ = BAN cos ωt. The graph against time is a cosine curve between +BAN and −BAN, with period 2π/ω. The steepest parts, where the emf will be largest, occur where NΦ passes through zero, that is when the coil's plane lies along the field.

## Worked example 4: the area of the field, not the coil

A long solenoid has a uniform field of 0.012 T inside it and a cross-sectional area of 1.5 × 10⁻³ m². A coil of 200 turns and area 4.0 × 10⁻³ m² is wound round the outside of the solenoid. Find the flux linkage of the coil.

The field exists only inside the solenoid, so the flux through each turn is BA(solenoid) = 0.012 × 1.5 × 10⁻³ = 1.8 × 10⁻⁵ Wb.

NΦ = 200 × 1.8 × 10⁻⁵ = **3.6 × 10⁻³ Wb**.

Using the coil's own area gives an answer 2.7 times too big.

## Common mistakes

- Using the angle to the plane of the coil in BAN cos θ instead of the angle to the normal.
- Forgetting N when flux linkage is asked for, or including it when flux is asked for.
- Missing the sign change when a coil turns through 180°, so finding BAN instead of 2BAN.
- Using the coil's area when only part of the coil is in the field.
- Leaving areas in cm²: 1 cm² = 10⁻⁴ m².
- Thinking a coil moving inside a uniform field has a changing flux linkage. It changes only while the area in the field changes.

## Exam technique

- **Define** magnetic flux: Φ = BA, the product of flux density and the area perpendicular to the field. Name the weber.
- **Calculate** a flux linkage: draw the normal on a sketch, mark θ to it, then write BAN cos θ.
- **Sketch** NΦ against time or angle: label the maximum BAN, mark zeros, and keep the time axis to scale.
- **Explain** a graph: link each section to what the coil is doing (entering, inside, leaving, or turning).

## Related resources

- [Flux and flux linkage revision notes](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics-revision-notes/)
- [Flux and flux linkage practice questions](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-and-flux-linkage-oxfordaqa-alevel-physics-practice/)
- [Electromagnetic induction study guide](/resources/oxfordaqa-a-level-physics-9630-electromagnetic-induction-oxfordaqa-alevel-physics/)
- [Magnetic flux density study guide](/resources/oxfordaqa-a-level-physics-9630-magnetic-flux-density-oxfordaqa-alevel-physics/)

## Official syllabus

OxfordAQA International AS and A-level Physics (9630), section 3.10.3 Magnetic flux and flux linkage, published by OxfordAQA. Check the board's website for the current version of the specification.
