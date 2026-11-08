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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--01-moment-of-a-force.webp" width="900" height="860" alt="A 24 N force acts at A on a 2.5 m rod OA at 40 degrees to the rod. The perpendicular distance from O to the line of action is 2.5 sin 40 = 1.61 m, and F sin theta turns the rod while F cos theta passes through O. Moment = 24 x 2.5 x sin 40 = 38.6 N m anticlockwise." loading="lazy">
  <figcaption>Only the part of the force at right angles to the rod turns it: moment = F d sin theta.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--02-resultant-moment.webp" width="900" height="1050" alt="A 4 m light rod is pivoted 1.5 m from A with downward forces 30 N at A, 10 N at C and 18 N at B. Moments about P are 45 N m anticlockwise against 15 + 45 = 60 N m clockwise, a resultant of 15 N m clockwise." loading="lazy">
  <figcaption>Add the moments in one sense and subtract those in the other to find which way the rod turns.</figcaption>
</figure>


## 2.1 Centre of mass of particles

<!-- marlbridge-diagram:maths-b16-centre-of-mass-weighted-coordinates -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b16-centre-of-mass-weighted-coordinates.svg" aria-label="Open full-size diagram: maths-b16-centre-of-mass-weighted-coordinates"><img src="/images/learning/mathematics/maths-b16-centre-of-mass-weighted-coordinates.svg" width="1600" height="1050" alt="Three particles at given coordinates have weighted centre of mass (0.4,1.6); adding 1.5 kg at (5,5) shifts the x coordinate to 1." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>Three particles at given coordinates have weighted centre of mass (0.4,1.6); adding 1.5 kg at (5,5) shifts the x coordinate to 1. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b16-centre-of-mass-weighted-coordinates -->


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--07-centre-of-mass-particles.webp" width="900" height="1260" alt="Particles of 4 kg at (-1, 2), 1 kg at (3, 5) and 3 kg at (2, -3) have sum m = 8, sum mx = 5 and sum my = 4. The centre of mass G is at (0.625, 0.5), marked on the axes." loading="lazy">
  <figcaption>The centre of mass is the mass-weighted average of the positions.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--05-hinged-rod.webp" width="900" height="1000" alt="A 1.8 m, 4 kg rod is hinged at A and held horizontal by a string at 40 degrees to the rod, with a 2 kg particle 1.5 m from A. Moments about A give T = 55.9 N; resolving gives H = 42.8 N and V = 22.9 N, a hinge force of 48.5 N at 28.1 degrees above the horizontal." loading="lazy">
  <figcaption>Taking moments about the hinge removes both hinge components, leaving the tension to find first.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--08-lamina-with-hole.webp" width="900" height="1090" alt="A 12 cm by 8 cm uniform rectangle has a circular hole of radius 2 cm centred at (9, 3). Treating the hole as area -4 pi, the centre of mass is at x = 5.55 cm and y = 4.15 cm, shifted away from the hole." loading="lazy">
  <figcaption>Use areas as masses and give a hole a negative area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--09-lamina-hanging-freely.webp" width="900" height="1002" alt="A right-angled triangle ABC with AB = 12 cm and BC = 9 cm hangs freely from A. G is at (3, 4) with B at the origin and must lie vertically below A, so AG is 3 across and 8 down. The angle between AB and the vertical has tan = 3/8, giving 20.6 degrees." loading="lazy">
  <figcaption>A freely suspended lamina settles with its centre of mass directly below the suspension point.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--03-beam-two-supports.webp" width="900" height="1100" alt="A 6 m uniform beam of 40 kg rests on supports 1 m and 4.5 m from A with a 30 kg child at 5.5 m. Moments about C remove R_C and give R_D = 602 N; resolving vertically gives R_C = 84 N." loading="lazy">
  <figcaption>Take moments about a support so one unknown reaction drops out, then resolve vertically for the other.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--04-point-of-tilting.webp" width="900" height="1060" alt="The beam is about to tilt about D, so R_C = 0. Moments about D give 40g x 1.5 = Mg x 1.5, so M = 40 kg; a number line shows the beam stays level below 40 kg and tilts above it. The 30 kg child would need to stand 6.5 m from A, beyond the 6 m beam." loading="lazy">
  <figcaption>When a beam is about to tilt about one support, the reaction at the other support is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--06-ladder-smooth-wall.webp" width="900" height="1120" alt="A 5 m, 18 kg uniform ladder rests at 70 degrees against a smooth wall. Moments about A use the horizontal arm 2.5 cos 70 for the weight and the vertical arm 5 sin 70 for the wall reaction, giving S = 32.1 N. With R = 176.4 N, mu = 0.182." loading="lazy">
  <figcaption>Weight acts at a horizontal distance, the wall reaction at a vertical height: cos and sin must not be swapped.</figcaption>
</figure>


## Common errors

- Taking the distance along the rod when the force meets it at an angle.
- Forgetting the weight of a rod that is not called light, or placing a non-uniform rod's weight at its midpoint.
- Using side lengths as masses for a lamina. Use areas, and make a hole negative.
- Measuring all distances from different origins in one composite table.
- Treating friction at a rough wall as horizontal. It acts along the wall.
- Assuming limiting friction when the question only says the body is in equilibrium.

## Frequently asked questions

**What is the moment of a force?**
The moment of a force about a point is the force multiplied by the perpendicular distance from the point to the line of action of the force.

**Why can you use areas instead of masses for a uniform lamina?**
A uniform lamina has the same mass per unit area throughout, so mass is proportional to area and areas can be used in place of masses.

**What are the conditions for a rigid body to be in equilibrium?**
The resultant force on the body must be zero and the sum of the moments about any point must be zero.

**Which way does friction act at a rough wall?**
Friction at a rough wall acts along the wall, not horizontally, so it appears in the vertical resolution of forces.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, unit M2: sections 2 (centres of mass) and 5 (statics of rigid bodies).
