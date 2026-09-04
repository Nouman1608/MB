---
title: "AS Physics: Deformation of Solids — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Deformation of solids"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 6.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-deformation-of-solids"
    subtopic: "as-stress-and-strain"
  - qualification: "a-level"
    topic: "as-deformation-of-solids"
    subtopic: "as-elastic-and-plastic-behaviour"
description: "Condensed recall notes on Hooke law, stress and strain, the Young modulus and elastic strain energy for Cambridge AS & A Level Physics 9702."
author: "iftikhar-azeemi"
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Deformation of Solids study guide](/resources/as-physics-deformation-of-solids/).

## Hooke's law

```
F = k x
```

Force is proportional to extension **up to the limit of proportionality**. That qualifier is part of the law, and omitting it loses the mark.

Key points on the graph, in order: **limit of proportionality** → **elastic limit** → **yield point** → **breaking point**.

- **Elastic deformation** — the material returns to its original shape when the load is removed.
- **Plastic deformation** — a permanent extension remains.

The **elastic limit** is where behaviour changes from elastic to plastic. It comes *after* the limit of proportionality, not before — the two points are related but distinct, and for many materials the elastic limit sits only slightly beyond where proportionality ends.

## Stress, strain and the Young modulus

```
stress   = F / A          Pa or N m^-2
strain   = x / L          no units
E = stress / strain = FL / Ax
```

**The Young modulus is a property of the material, not of the object.** Two wires of the same metal but different thickness have the same E; only their stiffness `k` differs. That distinction is examined nearly every series.

**Determining E experimentally:** use a long, thin wire — long to give a measurable extension, thin to give a large stress for a modest load. Measure the diameter at several points with a micrometer and take a mean, because the wire may not be uniform. A test wire is loaded with increasing known weights and its extension measured with a vernier scale or travelling microscope **against an unstretched reference wire of the same material**, run alongside it to cancel out effects like thermal expansion during the experiment. Plot stress against strain; **E is the gradient** of the straight-line region.

**Worked example.** A wire of length 1.5 m and cross-sectional area 2.0 × 10⁻⁶ m² extends by 1.2 mm under a load of 80 N. stress = F/A = 80 ÷ (2.0 × 10⁻⁶) = 4.0 × 10⁷ Pa. strain = x/L = (1.2 × 10⁻³) ÷ 1.5 = 8.0 × 10⁻⁴. E = stress/strain = (4.0 × 10⁷) ÷ (8.0 × 10⁻⁴) = **5.0 × 10¹⁰ Pa**.

## Elastic strain energy

```
E = 1/2 F x  =  1/2 k x^2
```

This is the **area under the force–extension graph** — which is why the ½ appears, and why for a non-linear graph you must find the area rather than use the formula.

For a material loaded beyond its elastic limit, the loading and unloading curves differ, and the **area between them is the energy dissipated**, usually as thermal energy.

## Material types

| Type | Behaviour |
|---|---|
| **Brittle** | Breaks at the elastic limit with no plastic deformation — glass, ceramics |
| **Ductile** | Large plastic deformation before breaking; can be drawn into wire — copper |
| **Polymeric** | Very large extensions; loading and unloading curves differ — rubber |

**Strong** means high breaking stress. **Stiff** means high Young modulus. **Tough** means it absorbs a lot of energy before breaking. These are three different properties and questions rely on the distinction — glass is stiff and strong but not tough, because it shatters with almost no plastic deformation to absorb energy first.

## Exam traps

- Stating Hooke's law without "up to the limit of proportionality".
- Treating the Young modulus as a property of the object.
- Using ½Fx for a non-linear graph instead of finding the area.
- Confusing strong, stiff and tough.
- Putting the elastic limit before the limit of proportionality.
- Forgetting to convert mm to m, or to use the *radius* when calculating area from a diameter.
- Confusing stress with pressure conceptually — they share the same unit (Pa), but stress specifically describes a force producing deformation in a solid, not a fluid pushing on a surface.

## Self-test

1. State Hooke's law in full.
2. Why do two wires of the same material but different diameters have the same Young modulus?
3. What does the area under a force–extension graph represent?
4. Distinguish strong, stiff and tough.
5. Why is a long thin wire used to measure the Young modulus?
6. Calculate the Young modulus of a wire of length 1.5 m and cross-sectional area 2.0 × 10⁻⁶ m² that extends 1.2 mm under an 80 N load.
7. Why is an unstretched reference wire run alongside the test wire in this experiment?

**Answers:** 1. The force applied is directly proportional to the extension produced, up to the limit of proportionality. 2. The Young modulus is defined using stress and strain, which account for cross-sectional area and original length, so it depends only on the material. 3. The elastic strain energy stored — or work done — in stretching the material. 4. Strong means a high breaking stress; stiff means a high Young modulus; tough means absorbing a large amount of energy before fracture. 5. A long wire gives a measurably large extension and a thin wire gives a large stress for a modest load, reducing percentage uncertainty in both measurements. 6. stress = 80 ÷ (2.0 × 10⁻⁶) = 4.0 × 10⁷ Pa; strain = (1.2 × 10⁻³) ÷ 1.5 = 8.0 × 10⁻⁴; E = 4.0 × 10⁷ ÷ 8.0 × 10⁻⁴ = 5.0 × 10¹⁰ Pa. 7. It cancels out effects such as thermal expansion during the experiment, since both wires expand or contract by the same amount, isolating the extension due to the load alone.
