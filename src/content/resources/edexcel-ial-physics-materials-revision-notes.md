---
title: "Edexcel IAL Physics: Materials — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 1: Mechanics and Materials"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 1.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-1-mechanics-and-materials"
    subtopic: "materials"
description: "Condensed recall notes on density, viscosity, Stokes law, Hooke law, the Young modulus and material properties for Edexcel International A Level Physics YPH11."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Materials study guide](/resources/edexcel-ial-physics-materials/).

## Density and fluids

```
rho = m / V         upthrust = rho g V (weight of fluid displaced)
```

An object floats if its **average density** is less than the fluid's.

**Viscous drag — Stokes' law:**

```
F = 6 pi eta r v        (small sphere, low speed, laminar flow only)
```

**Terminal velocity in a fluid** occurs when weight = upthrust + viscous drag. Note that this is a **three-force** balance, not two — omitting upthrust is the standard error in the falling-sphere experiment.

**Viscosity decreases as temperature increases for liquids**, but **increases** with temperature for gases. That opposite behaviour is examined, and the reason differs: in liquids the intermolecular forces weaken; in gases the increased molecular motion raises momentum transfer between layers.

**CORE PRACTICAL 2** uses a falling-ball method to determine a liquid's viscosity, applying Stokes' law together with the object's weight and the upthrust acting on it.

## Hooke's law and elasticity

```
F = k x
```

Valid **up to the limit of proportionality**.

Order of features: limit of proportionality → elastic limit → yield point → breaking point.

**Elastic** deformation returns to original shape; **plastic** deformation is permanent.

A **yield point** is where some materials extend significantly with little or no increase in force, beyond the elastic limit. A **stress-strain graph** identifies the **breaking stress** — the maximum stress a material can withstand before it fractures — and allows direct comparison between different samples regardless of dimensions.

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
stress = F/A        strain = x/L        E = stress/strain = FL/Ax
```

**The Young modulus is a property of the material, not the specimen.** Two wires of the same metal have the same E regardless of length or thickness; only their stiffness k differs.

**CORE PRACTICAL 3** determines the Young modulus of a wire by measuring extension against applied force and calculating stress and strain from its known cross-sectional area and original length.

**Worked example.** A wire of natural length 2.00 m and cross-sectional area 1.5 × 10⁻⁷ m² extends by 3.0 mm under a force of 45 N, within its limit of proportionality.

```
stress = 45 / (1.5 x 10^-7) = 3.0 x 10^8 Pa
strain = 0.0030 / 2.00      = 1.5 x 10^-3  (no units)
E = stress/strain = (3.0 x 10^8) / (1.5 x 10^-3) = 2.0 x 10^11 Pa
```

**Experimental determination:** use a **long thin wire** — long for a measurable extension, thin for a large stress from a modest load. Measure the diameter at several points with a micrometer and take a mean. E is the **gradient** of the stress–strain graph in the linear region.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--05-stress-strain-young-modulus.webp" width="900" height="1050" alt="A 2.0 m wire of cross-section 1.0e-6 m squared carries 60 N and extends 1.5 mm. Stress is 6.0e7 Pa, strain is 7.5e-4 and E is 8.0e10 Pa." loading="lazy">
  <figcaption>Stress is force per area, strain is extension per original length, and their ratio is the Young modulus.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--06-measuring-young-modulus.webp" width="900" height="1215" alt="A long thin wire is loaded in equal steps while a marker moves along a fixed scale; the diameter is measured with a micrometer. The extension-force gradient 4.3e-4 m/N gives E = L / (A x gradient) = 1.96e11 Pa." loading="lazy">
  <figcaption>Measure L, d and the extensions, plot extension against force, and use E = L / (A x gradient).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--07-ductile-stress-strain.webp" width="900" height="1040" alt="A sketch of stress against strain for a ductile metal: straight line to the limit of proportionality, elastic limit, yield point, peak (UTS), necking and breaking. The gradient of the straight part is the Young modulus." loading="lazy">
  <figcaption>A ductile metal shows an elastic region, then plastic deformation, necking and fracture; the gradient of the straight part is E.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--08-material-types.webp" width="900" height="1165" alt="Stress-strain sketches: ductile copper has a big plastic region; brittle glass is straight to the break; rubber has a loading curve above its unloading curve and returns to zero, the area between them being heat. Strong, stiff and tough are different properties." loading="lazy">
  <figcaption>Brittle, ductile and polymeric materials have characteristic stress-strain shapes.</figcaption>
</figure>


## Strain energy

```
E = 1/2 F x = 1/2 k x^2
```

This is the **area under the force–extension graph** — which is why you must find the area, not use the formula, when the graph is not linear.

For loading beyond the elastic limit, the loading and unloading curves differ and the **area between them is energy dissipated**, usually as heat. In rubber this is called **hysteresis**, and it is why a bouncing rubber ball warms up and does not return to its original height.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--03-elastic-energy-area.webp" width="900" height="990" alt="The area under a straight force-extension line is a triangle: 0.5 x 7.2 x 0.045 = 0.162 J. Doubling the extension to 0.090 m gives 0.648 J, four times as much." loading="lazy">
  <figcaption>Elastic potential energy is the area under the line, E = 1/2 Fx = 1/2 kx squared.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-deformation-of-solids--04-loading-unloading.webp" width="900" height="960" alt="Loading a metal strip to 36 N at 0.100 m does 2.08 J of work. Unloading runs parallel to the first line and reaches zero force at 0.028 m, the permanent extension. 1.30 J is recovered and 0.78 J is dissipated as heat." loading="lazy">
  <figcaption>After plastic deformation the unloading line is parallel to the first line, leaving a permanent extension and wasted energy.</figcaption>
</figure>


## Material properties

| Term | Meaning |
|---|---|
| **Strong** | High breaking stress |
| **Stiff** | High Young modulus |
| **Tough** | Absorbs much energy before fracture |
| **Brittle** | Breaks at the elastic limit with no plastic deformation |
| **Ductile** | Large plastic deformation; can be drawn into wire |

**These are five separate properties**, and questions rely on distinguishing them. Glass is stiff and strong but **brittle and not tough**; copper is ductile and tough but less stiff.

## Exam traps

- Omitting upthrust from the terminal velocity force balance in a fluid.
- Assuming viscosity behaves the same way with temperature in liquids and gases.
- Treating the Young modulus as a property of the object.
- Using ½Fx on a non-linear graph.
- Confusing strong, stiff and tough.
- Applying Stokes' law to turbulent flow, to high speeds, or to objects that are not small spheres.

## Self-test

1. Give the three forces acting on a sphere falling at terminal velocity in a liquid.
2. How does viscosity respond to temperature in liquids and in gases?
3. Why do two wires of the same material have the same Young modulus?
4. What does the area between loading and unloading curves represent?
5. Distinguish stiff, strong and tough.
6. A wire of length 2.00 m and cross-sectional area 1.5 × 10⁻⁷ m² extends 3.0 mm under 45 N. Calculate the Young modulus.
7. What is a yield point?

**Answers:** 1. Weight downwards, upthrust upwards, and viscous drag upwards. 2. It decreases with temperature in liquids as intermolecular forces weaken, but increases with temperature in gases because faster molecular motion increases momentum transfer between layers. 3. The Young modulus is defined by stress and strain, which account for cross-sectional area and original length, so it depends only on the material. 4. The energy dissipated, usually as thermal energy — hysteresis. 5. Stiff means a high Young modulus; strong means a high breaking stress; tough means absorbing a large amount of energy before fracturing. 6. stress = 45 ÷ (1.5×10⁻⁷) = 3.0×10⁸ Pa; strain = 0.0030 ÷ 2.00 = 1.5×10⁻³; E = 2.0×10¹¹ Pa. 7. The point beyond the elastic limit where a material extends significantly with little or no increase in force.

## Frequently asked questions

**When does Stokes' law apply?**
Stokes' law, F = 6πηrv, applies only to small spheres moving at low speed with laminar (non-turbulent) flow.

**What forces act on a sphere falling at terminal velocity in a liquid?**
Weight acts downwards, and upthrust and viscous drag act upwards. At terminal velocity, weight = upthrust + viscous drag; leaving out upthrust is the standard error.

**What is hysteresis in rubber?**
Hysteresis means the loading and unloading curves of rubber follow different paths. The area between them is energy dissipated, usually as heat, which is why a bouncing rubber ball warms up and does not return to its original height.

**What is breaking stress?**
Breaking stress is the maximum stress a material can withstand before it fractures. It is read from a stress-strain graph, which allows samples of different dimensions to be compared directly.
