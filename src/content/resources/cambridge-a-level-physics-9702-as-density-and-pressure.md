---
title: "Cambridge A Level Physics (9702): Density and pressure"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Forces, density and pressure"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.3
syllabusTopics:
  - qualification: "a-level"
    topic: "as-forces-density-and-pressure"
    subtopic: "as-density-and-pressure"
description: "Subtopic 4.3 of Cambridge AS Physics 9702 in depth: density, pressure, deriving and using Δp = ρgΔh, and upthrust from a pressure difference."
author: "marlbridge-academic-team"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to hassan (accountable teacher, D-379). 2026-11-24: markdown section headings retitled so they read apart from the page blocks (audit P17)."
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.3 Density and pressure** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Forces, Density and Pressure study guide](/resources/as-physics-forces-density-and-pressure/) states the equations for the whole of Topic 4; this page goes further, with the derivation of Δp = ρgΔh step by step, pressure under a solid, layered liquids, total versus extra pressure, and upthrust calculated two ways for the same block. For quick recall use the [Density and pressure revision notes](/resources/cambridge-a-level-physics-9702-as-density-and-pressure-revision-notes/), and for exam-style questions the [Density and pressure practice questions](/resources/cambridge-a-level-physics-9702-as-density-and-pressure-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 4.3**

Candidates should be able to:

1. define and use density;
2. define and use pressure;
3. derive, from the definitions of pressure and density, the equation for hydrostatic pressure Δp = ρgΔh;
4. use the equation Δp = ρgΔh;
5. understand that the upthrust acting on an object in a fluid is due to a difference in hydrostatic pressure;
6. calculate the upthrust acting on an object in a fluid using the equation F = ρgV (Archimedes' principle).

## Density

**Density is mass per unit volume**: ρ = m/V, unit kg m⁻³.

Typical values: water 1000 kg m⁻³, air about 1.2 kg m⁻³, aluminium about 2700 kg m⁻³. Convert g cm⁻³ to kg m⁻³ by multiplying by 1000.

### Worked example 1: a brick

A brick has mass 2.5 kg and dimensions 0.20 m × 0.10 m × 0.065 m.

```
V = 0.20 x 0.10 x 0.065 = 1.3 x 10^-3 m^3
rho = m / V = 2.5 / 1.3 x 10^-3 = 1900 kg m^-3
```

## Pressure

**Pressure is the force acting normally (perpendicularly) per unit area**: p = F/A, unit Pa = N m⁻².

"Normally" matters: only the component of a force perpendicular to a surface produces pressure on it.

### Worked example 2: the same brick in two positions

Weight = 2.5 × 9.81 = 24.5 N.

```
lying flat (0.20 m x 0.10 m):  p = 24.5 / 0.020  = 1230 Pa
standing on end (0.10 m x 0.065 m): p = 24.5 / 0.0065 = 3770 Pa
```

The force is the same; a smaller area gives a larger pressure.

## Deriving Δp = ρgΔh

The syllabus asks you to derive this from the definitions, so learn the steps in order. Consider a vertical column of liquid of density ρ, height Δh and cross-sectional area A.

```
1. volume of column        V = A dh
2. mass of column          m = rho V = rho A dh          (definition of density)
3. weight of column        W = m g = rho A dh g
4. extra pressure at base  dp = W / A = rho A dh g / A   (definition of pressure)
5. so                      dp = rho g dh
```

The area cancels, which is why the pressure in a liquid depends only on depth, not on the shape or width of the container. The derivation assumes ρ is constant (a liquid that is not compressed) and g is uniform.

## Using Δp = ρgΔh

Δp is the **difference** in pressure between two points a vertical distance Δh apart. The pressure at a depth h below an open surface is:

```
total pressure = atmospheric pressure + rho g h
```

Read questions carefully: "pressure due to the water" means ρgh alone; "total pressure" includes atmospheric pressure (about 1.0 × 10⁵ Pa).

### Worked example 3: a diver

A diver is 12 m below the surface of fresh water. Atmospheric pressure is 1.01 × 10⁵ Pa.

```
pressure due to water = 1000 x 9.81 x 12 = 1.18 x 10^5 Pa
total pressure        = 1.01 x 10^5 + 1.18 x 10^5 = 2.19 x 10^5 Pa
```

At about 10 m depth in water, the extra pressure equals roughly one atmosphere, so total pressure has doubled.

### Worked example 4: layered liquids

A tank holds 0.50 m of water with 0.30 m of oil (density 800 kg m⁻³) floating on it. Find the pressure at the base due to the liquids.

```
oil:   800 x 9.81 x 0.30  = 2350 Pa
water: 1000 x 9.81 x 0.50 = 4910 Pa
total: 7260 Pa
```

Each layer adds its own ρgΔh. Using one density for the whole 0.80 m would be wrong.

## Upthrust from a pressure difference

Because pressure increases with depth, the fluid pushes harder on the bottom of a submerged object than on its top. The difference gives a net upward force: **upthrust**.

### Worked example 5: upthrust two ways

A cuboid has a horizontal top and base each of area 0.010 m² and height 0.050 m. It is held fully submerged in water with its top 0.20 m below the surface. Ignore atmospheric pressure, which adds equally to top and bottom and cancels.

```
pressure-difference method:
  force down on top    = rho g h1 A = 1000 x 9.81 x 0.20 x 0.010 = 19.6 N
  force up on bottom   = rho g h2 A = 1000 x 9.81 x 0.25 x 0.010 = 24.5 N
  upthrust             = 24.5 - 19.6 = 4.9 N

Archimedes method:
  V = 0.010 x 0.050 = 5.0 x 10^-4 m^3
  F = rho g V = 1000 x 9.81 x 5.0 x 10^-4 = 4.9 N
```

The two methods agree, and the algebra shows why: ρg(h₂ − h₁)A = ρgV. The forces on the vertical sides cancel in pairs. Upthrust does not depend on the depth of the object, only on the volume of fluid it displaces.

## Archimedes' principle: F = ρgV

**ρ is the density of the fluid, and V is the volume of fluid displaced**, not the object's density and not necessarily its full volume.

### Worked example 6: a floating block

A wooden cube of side 0.20 m and density 650 kg m⁻³ floats in water.

```
weight of cube = 650 x 0.20^3 x 9.81 = 51.0 N
floating: upthrust = weight -> 1000 x 9.81 x V = 51.0 -> V = 5.2 x 10^-3 m^3
depth submerged = V / (0.20 x 0.20) = 0.13 m
```

The fraction submerged is 650 ÷ 1000 = 0.65: for a floating object, fraction submerged = ρ(object) ÷ ρ(fluid).

Upthrust acts in gases too. A balloon of volume 0.010 m³ in air of density 1.2 kg m⁻³ experiences an upthrust of 1.2 × 9.81 × 0.010 = 0.12 N.

## Common mistakes

- **Using the object's density in F = ρgV.** It is the fluid's density.
- **Using the depth along a sloping tube** instead of the vertical depth.
- **Adding atmospheric pressure when the question asks for the pressure due to the liquid**, or forgetting it when asked for the total.
- **Writing "pressure = force × area".**
- **Saying upthrust increases with depth.** For an incompressible fluid it depends only on displaced volume.
- **Leaving out a step in the derivation**, especially the use of the density definition.

## Exam technique for the command words

- **Define** density or pressure: "mass per unit volume"; "normal force per unit area".
- **Show that** or **derive** Δp = ρgΔh: write each line, naming where a definition is used.
- **Explain** upthrust: pressure increases with depth, so the upward force on the lower surface exceeds the downward force on the upper surface.
- **Calculate**: state which density and which volume you are using.

## Frequently asked questions

**Does the shape of a container change the pressure at the bottom?**
No. In the derivation the area cancels, so pressure depends only on vertical depth, density and g.

**What volume goes into F = ρgV?**
The volume of fluid displaced: the submerged volume of the object.

**Why does an object float?**
Because the upthrust equals its weight when only part of it is submerged, which happens if its average density is less than the fluid's.

## More resources on this topic

- [Density and pressure revision notes](/resources/cambridge-a-level-physics-9702-as-density-and-pressure-revision-notes/)
- [Density and pressure practice questions](/resources/cambridge-a-level-physics-9702-as-density-and-pressure-practice/)
- [Equilibrium of forces study guide](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces/) — balancing upthrust, weight and other forces
- [Non-uniform motion study guide](/resources/cambridge-a-level-physics-9702-as-non-uniform-motion/) — objects falling through fluids

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
