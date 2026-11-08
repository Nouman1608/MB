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
reviewStatus: "review-pending"
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--01-spring-tensile-compressive.webp" width="900" height="960" alt="The same spring is shown at natural length, pulled by 7.2 N (45 mm longer) and pushed by 4.8 N (30 mm shorter). x is the change from natural length. k = 7.2 / 0.045 = 160 N/m." loading="lazy">
  <figcaption>Hooke's law F = kx applies to both tensile extension and compression; x is the change in length.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--02-force-extension-graph.webp" width="900" height="960" alt="Force against extension for a stiff spring (gradient 160 N/m) and a softer one (80 N/m). The stiff spring is straight to its limit of proportionality at 0.07 m and 11.2 N, then curves." loading="lazy">
  <figcaption>The gradient of a force-extension graph is the spring constant; a steeper line is a stiffer spring.</figcaption>
</figure>


## Stress, strain and the Young modulus

```
stress   = F / A          Pa or N m^-2
strain   = x / L          no units
E = stress / strain = FL / Ax
```

**The Young modulus is a property of the material, not of the object.** Two wires of the same metal but different thickness have the same E; only their stiffness `k` differs. That distinction is examined nearly every series.

**Determining E experimentally:** use a long, thin wire — long to give a measurable extension, thin to give a large stress for a modest load. Measure the diameter at several points with a micrometer and take a mean, because the wire may not be uniform. A test wire is loaded with increasing known weights and its extension measured with a vernier scale or travelling microscope **against an unstretched reference wire of the same material**, run alongside it to cancel out effects like thermal expansion during the experiment. Plot stress against strain; **E is the gradient** of the straight-line region.

**Worked example.** A wire of length 1.5 m and cross-sectional area 2.0 × 10⁻⁶ m² extends by 1.2 mm under a load of 80 N. stress = F/A = 80 ÷ (2.0 × 10⁻⁶) = 4.0 × 10⁷ Pa. strain = x/L = (1.2 × 10⁻³) ÷ 1.5 = 8.0 × 10⁻⁴. E = stress/strain = (4.0 × 10⁷) ÷ (8.0 × 10⁻⁴) = **5.0 × 10¹⁰ Pa**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--05-stress-strain-young-modulus.webp" width="900" height="1050" alt="A 2.0 m wire of cross-section 1.0e-6 m squared carries 60 N and extends 1.5 mm. Stress is 6.0e7 Pa, strain is 7.5e-4 and E is 8.0e10 Pa." loading="lazy">
  <figcaption>Stress is force per area, strain is extension per original length, and their ratio is the Young modulus.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--06-measuring-young-modulus.webp" width="900" height="1215" alt="A long thin wire is loaded in equal steps while a marker moves along a fixed scale; the diameter is measured with a micrometer. The extension-force gradient 4.3e-4 m/N gives E = L / (A x gradient) = 1.96e11 Pa." loading="lazy">
  <figcaption>Measure L, d and the extensions, plot extension against force, and use E = L / (A x gradient).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--08-material-types.webp" width="900" height="1165" alt="Stress-strain sketches: ductile copper has a big plastic region; brittle glass is straight to the break; rubber has a loading curve above its unloading curve and returns to zero, the area between them being heat. Strong, stiff and tough are different properties." loading="lazy">
  <figcaption>Brittle, ductile and polymeric materials have characteristic stress-strain shapes.</figcaption>
</figure>


## Elastic strain energy

```
E = 1/2 F x  =  1/2 k x^2
```

This is the **area under the force–extension graph** — which is why the ½ appears, and why for a non-linear graph you must find the area rather than use the formula.

For a material loaded beyond its elastic limit, the loading and unloading curves differ, and the **area between them is the energy dissipated**, usually as thermal energy.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--03-elastic-energy-area.webp" width="900" height="990" alt="The area under a straight force-extension line is a triangle: 0.5 x 7.2 x 0.045 = 0.162 J. Doubling the extension to 0.090 m gives 0.648 J, four times as much." loading="lazy">
  <figcaption>Elastic potential energy is the area under the line, E = 1/2 Fx = 1/2 kx squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--07-ductile-stress-strain.webp" width="900" height="1040" alt="A sketch of stress against strain for a ductile metal: straight line to the limit of proportionality, elastic limit, yield point, peak (UTS), necking and breaking. The gradient of the straight part is the Young modulus." loading="lazy">
  <figcaption>A ductile metal shows an elastic region, then plastic deformation, necking and fracture; the gradient of the straight part is E.</figcaption>
</figure>


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

**Answers:** 1. The force applied is directly proportional to the extension produced, up to the limit of proportionality. 2. The Young modulus is defined using stress and strain, which account for cross-sectional area and original length, so it depends only on the material. 3. While the deformation stays within the elastic limit, the area under the loading curve is both the total work done stretching the material and the elastic strain energy stored, since all of it is recoverable. Once the material has been stretched beyond its elastic limit, this is no longer true: the total work done is still the full area under the loading curve, but only the smaller area under the *unloading* curve is recoverable elastic strain energy — the area between the two curves has instead been dissipated (mostly as thermal energy) in permanently deforming the material. 4. Strong means a high breaking stress; stiff means a high Young modulus; tough means absorbing a large amount of energy before fracture. 5. A long wire gives a measurably large extension and a thin wire gives a large stress for a modest load, reducing percentage uncertainty in both measurements. 6. stress = 80 ÷ (2.0 × 10⁻⁶) = 4.0 × 10⁷ Pa; strain = (1.2 × 10⁻³) ÷ 1.5 = 8.0 × 10⁻⁴; E = 4.0 × 10⁷ ÷ 8.0 × 10⁻⁴ = 5.0 × 10¹⁰ Pa. 7. It cancels out effects such as thermal expansion during the experiment, since both wires expand or contract by the same amount, isolating the extension due to the load alone.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--04-loading-unloading.webp" width="900" height="960" alt="Loading a metal strip to 36 N at 0.100 m does 2.08 J of work. Unloading runs parallel to the first line and reaches zero force at 0.028 m, the permanent extension. 1.30 J is recovered and 0.78 J is dissipated as heat." loading="lazy">
  <figcaption>After plastic deformation the unloading line is parallel to the first line, leaving a permanent extension and wasted energy.</figcaption>
</figure>

## Frequently asked questions

**What is Hooke's law?**
Hooke's law states that the force applied is directly proportional to the extension, F = kx, up to the limit of proportionality. Omitting that limit loses the mark.

**Why is the Young modulus a property of the material?**
The Young modulus is stress divided by strain, which already accounts for cross-sectional area and original length. Two wires of the same material but different thickness have the same Young modulus, though their stiffness k differs.

**What is the difference between strong, stiff and tough?**
Strong means a high breaking stress, stiff means a high Young modulus, and tough means absorbing a lot of energy before breaking. Glass is stiff and strong but not tough.

**How do you calculate elastic strain energy?**
Elastic strain energy is the area under the force-extension graph, which is ½Fx = ½kx² for a straight-line region. For a non-linear graph you must find the area instead of using the formula.
