---
title: "Pearson Edexcel International Advanced Level Mathematics: Centres of mass and rigid body equilibrium (YMA01)"
seoTitle: "Edexcel IAL Maths M2 Centres of Mass Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Centres of mass and equilibrium of rigid bodies"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 159
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-centres-of-mass-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-statics-of-rigid-bodies-edexcel-alevel-maths"
description: "Study guide to centres of mass, laminas in equilibrium, moments, beams and ladders for Pearson Edexcel IAL Maths unit M2, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches sections 2 and 5 of unit M2 (Mechanics 2) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics specification, Issue 3, April 2019: centres of mass (2.1 to 2.3) and statics of rigid bodies (5.1 and 5.2). The specification lists M2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics. It assumes the M1 work on moments.

Use it with the [revision notes](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies-practice/). The course hub is [/boards/edexcel/a-level/mathematics/](/boards/edexcel/a-level/mathematics/) and the printable checklist is [/checklists/edexcel/a-level/mathematics/](/checklists/edexcel/a-level/mathematics/). To find your weak spots first, try the [free 10-minute diagnostics](/diagnostics/).

## What the sections ask for

| Spec | What you must do |
|---|---|
| 2.1 | Find the centre of mass of particles in one and two dimensions |
| 2.2 | Find the centre of mass of uniform plane figures and simple composite figures, using symmetry; no integration |
| 2.3 | Equilibrium of a lamina: suspended from a point, free to rotate about a fixed horizontal axis, or on an inclined plane |
| 5.1 | Moment of a force |
| 5.2 | Equilibrium of rigid bodies under parallel and non-parallel coplanar forces, including rods and ladders against smooth or rough walls and ground |

The specification says results given in the formulae book may be quoted without proof. Check your own copy of the booklet to see which shapes it lists. The standard results below are worth knowing either way.

## 5.1 Moment of a force

The moment of a force about a point is the force multiplied by the perpendicular distance between that point and the force's line of action. Units are N m. If a force F makes angle θ with a rod of length d, measured from the pivot, the moment is F d sin θ. Pick one turning direction as positive and stay with it.

**Example 1.** A force of 24 N acts at the end A of a rod OA of length 2.5 m, at 40° to OA. Find its moment about O.

```
moment = 24 × 2.5 × sin 40° = 38.6 N m  (3 s.f.)
```

## 2.1 Centre of mass of particles

For particles of masses m₁, m₂, … at positions x₁, x₂, …, the centre of mass is at

```
x̄ = Σ(m x) / Σm      and in two dimensions      ȳ = Σ(m y) / Σm
```

The weights act as if they were all at that point. A light rod adds no mass, so only the particles count.

**Example 2.** Particles of mass 2 kg, 3 kg and 5 kg are at (1, 2), (4, −1) and (−2, 3). Find the centre of mass. A particle of mass m kg at (5, 5) is then added so that x̄ becomes 1. Find m.

```
Σm = 10
Σ(m x) = 2(1) + 3(4) + 5(−2) = 4        x̄ = 0.4
Σ(m y) = 2(2) + 3(−1) + 5(3) = 16       ȳ = 1.6
Centre of mass: (0.4, 1.6)

With the new particle: (4 + 5m)/(10 + m) = 1
4 + 5m = 10 + m
m = 1.5
```

## 2.2 Uniform plane figures and composite figures

For a uniform lamina the mass is proportional to area, so use areas as the masses. A line of symmetry contains the centre of mass, and two lines of symmetry meet at it.

| Figure | Centre of mass |
|---|---|
| Rectangle, circle, parallelogram | Where the diagonals or symmetry lines meet |
| Triangle | On each median, one third of the way from the side to the opposite vertex |
| Semicircle of radius r | On the axis of symmetry, 4r/(3π) from the diameter |
| Sector of radius r and half-angle α (in radians) | On the axis of symmetry, 2r sin α/(3α) from the centre |

**Method for a composite figure.**
1. Split the figure into simple parts, or treat a hole as a part with negative area.
2. Choose axes and find the centre of mass of each part.
3. Tabulate area and coordinates, then apply x̄ = Σ(A x)/ΣA and the same for y.
4. Use symmetry to skip a coordinate when you can.

**Example 3 (a hole).** A uniform rectangular lamina is 12 cm by 8 cm. A circular hole of radius 2 cm is cut with its centre 9 cm from one short side and 3 cm from one long side. Take the corner O at the meeting of those two sides.

```
Part          Area     x    y
Rectangle     96       6    4
Hole          −4π      9    3
Whole         96 − 4π

x̄ = (96×6 − 4π×9)/(96 − 4π) = (576 − 36π)/(96 − 4π) = 5.55 cm
ȳ = (96×4 − 4π×3)/(96 − 4π) = (384 − 12π)/(96 − 4π) = 4.15 cm
```

**Example 4 (a semicircle).** A square of side 6 cm has a semicircle of radius 3 cm attached on one side, forming a keyhole shape. Find the distance of the centre of mass from the side opposite the semicircle.

```
Square: area 36, distance 3
Semicircle: area 9π/2, distance 6 + 4(3)/(3π) = 6 + 4/π
x̄ = [36(3) + (9π/2)(6 + 4/π)] / (36 + 9π/2)
  = (108 + 27π + 18)/(36 + 9π/2)
  = 4.20 cm
```

## 2.3 Equilibrium of a lamina

**Suspended from a point.** The centre of mass G hangs vertically below the point of suspension, because the weight and the tension or reaction at the point must have the same line of action. Use right-angled triangles to find the angle a side makes with the vertical.

**Example 5.** A uniform triangular lamina ABC has a right angle at B, with AB = 12 cm and BC = 9 cm. It hangs freely from A. Find the angle AB makes with the vertical.

```
Put B at (0, 0), A at (0, 12), C at (9, 0).
G is a third of the way along each leg from B: G = (3, 4).
From A to G: 3 across, 8 down.
tan θ = 3/8,  θ = 20.6°
```

**Free to rotate about a fixed horizontal axis.** Take moments about the axis. The weight of the lamina acts at G, so its moment is the weight times the horizontal distance of G from the axis. Any extra particle or applied force adds its own moment.

**Example 6.** A uniform square lamina PQRS of side 0.6 m and mass 4 kg turns freely about a horizontal axis through P. A particle of mass 1 kg is fixed at Q. In equilibrium PQ makes angle φ with the downward vertical. Find φ.

```
G is 0.6/√2 from P, at 45° to PQ, on the side towards S.
Horizontal offset of Q: 0.6 sin φ
Horizontal offset of G: (0.6/√2) sin(45° − φ) on the other side

Moments about P:  1(0.6 sin φ) = 4(0.6/√2) sin(45° − φ)
sin φ = (4/√2)(√2/2)(cos φ − sin φ) = 2 cos φ − 2 sin φ
3 sin φ = 2 cos φ
tan φ = 2/3,  φ = 33.7°
```

**On an inclined plane.** A lamina standing on a rough plane can slip or topple. It is about to topple when G is vertically above the lowest point of contact.

**Example 7.** A uniform rectangular lamina has base AB = 0.5 m on a rough plane and height AD = 1.2 m. The coefficient of friction is 0.6. As the plane tilts, does the lamina slip or topple first?

```
Topples when tan α = (AB/2)/(AD/2) = 0.5/1.2,  α = 22.6°
Slips when tan α = μ = 0.6,                    α = 31.0°
```

It topples first, at 22.6°.

## 5.2 Equilibrium of rigid bodies

A rigid body is in equilibrium when the resultant force is zero and the sum of moments about any point is zero. Resolve in two perpendicular directions, then take moments about the point where most unknown forces act, which removes them from the equation.

**Parallel forces.** A beam is about to tilt about a support when the reaction at the other support is zero.

**Example 8.** A uniform beam AB of length 5 m and mass 40 kg rests on supports at C and D, with AC = 1 m and AD = 4 m. A 60 kg load sits 1.5 m from A. Take g = 9.8.

```
Moments about C:  3 R_D = 40g(1.5) + 60g(0.5) = 90g
R_D = 30g = 294 N
Vertically:  R_C + R_D = 100g, so R_C = 70g = 686 N
```

**Ladders and rods.** For a ladder of length L at angle θ to the ground, a vertical force acting along the ladder at distance x from the foot has moment arm x cos θ. A horizontal force at the top has moment arm L sin θ. Friction is F ≤ μR, with F = μR when slipping is about to happen. On a smooth wall the only force at the wall is a normal reaction S, horizontal.

**Example 9 (smooth wall).** A uniform ladder of length 7.5 m and mass 25 kg has its foot on rough ground (μ = 0.25) and its top against a smooth vertical wall, at 68° to the ground. A man of mass 80 kg climbs it. How far along the ladder from its foot can he go before it slips? Take g = 9.8.

```
Vertically: R = 105g = 1029 N.  Limiting: S = F = 0.25 × 1029 = 257.25 N
Moments about the foot:
S(7.5 sin 68°) = 25g(3.75 cos 68°) + 80g(x cos 68°)
257.25 × 7.5 × 0.9272 = (918.75 + 784x) × 0.3746
1788.9 = 344.2 + 293.7x
x = 4.92 m
```

**Example 10 (rough wall).** A uniform ladder rests at 55° to the horizontal against a rough wall and on rough ground. The ground coefficient is 0.3. With no one on it, the ladder is about to slip. Find the wall coefficient μ_w. Let the weight be W.

```
Ground: R, friction 0.3R towards the wall.  Wall: S, friction μ_w S upwards.
Horizontal: S = 0.3R
Vertical:   R + μ_w S = W
So R(1 + 0.3 μ_w) = W   and   S = 0.3W/(1 + 0.3 μ_w)

Moments about the foot (ladder length L):
S L sin 55° + μ_w S L cos 55° = W (L/2) cos 55°
S(tan 55° + μ_w) = W/2
0.3(tan 55° + μ_w) = 0.5(1 + 0.3 μ_w)
0.15 μ_w = 0.5 − 0.3 tan 55°
μ_w = 0.477  (3 s.f.)
```

## Common errors

- Taking the distance along the rod when the force meets it at an angle.
- Forgetting the weight of a rod that is not called light, or placing a non-uniform rod's weight at its midpoint.
- Using side lengths as masses for a lamina. Use areas, and make a hole negative.
- Measuring all distances from different origins in one composite table.
- Treating friction at a rough wall as horizontal. It acts along the wall.
- Assuming limiting friction when the question only says the body is in equilibrium.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, unit M2: sections 2 (centres of mass) and 5 (statics of rigid bodies).
