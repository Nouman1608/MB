---
title: "Pearson Edexcel International Advanced Level Mathematics: Centres of mass and rigid body equilibrium (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths M2 Centres of Mass Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes with formulas, method steps, a self-test and common slips for centres of mass and rigid-body equilibrium in Edexcel IAL Maths M2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense sections 2 and 5 of unit M2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics specification, Issue 3, April 2019 (centres of mass 2.1 to 2.3, moments and statics of rigid bodies 5.1 and 5.2). The specification lists M2 as an optional unit for IAS Further Mathematics and for IAL Mathematics and Further Mathematics.

For full explanations and longer worked examples, read the [study guide](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies/). When you are ready to test yourself, use the [practice questions](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies-practice/). Course hub: [/boards/edexcel/a-level/mathematics/](/boards/edexcel/a-level/mathematics/). Checklist: [/checklists/edexcel/a-level/mathematics/](/checklists/edexcel/a-level/mathematics/). To find weak spots, try the [free 10-minute diagnostics](/diagnostics/).

## Key results

| Topic | Result |
|---|---|
| Moment (5.1) | Force × perpendicular distance, in N m. For force F at angle θ to a rod of length d: F d sin θ |
| Equilibrium (5.2) | Resultant force zero and sum of moments about any point zero |
| Particles (2.1) | x̄ = Σ(m x)/Σm, ȳ = Σ(m y)/Σm |
| Composite lamina (2.2) | x̄ = Σ(A x)/ΣA, with area A as the mass for a uniform lamina; a hole has negative area |
| Friction | F ≤ μR; F = μR only when slipping is about to happen |
| Weight | W = m g, acting at the centre of mass |

The specification allows results from the formulae book to be quoted without proof. Look at your own copy of the booklet to see which are printed, and learn the ones in the next table.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--07-centre-of-mass-particles.webp" width="900" height="1260" alt="Particles of 4 kg at (-1, 2), 1 kg at (3, 5) and 3 kg at (2, -3) have sum m = 8, sum mx = 5 and sum my = 4. The centre of mass G is at (0.625, 0.5), marked on the axes." loading="lazy">
  <figcaption>The centre of mass is the mass-weighted average of the positions.</figcaption>
</figure>


## Standard centres of mass (uniform)

| Shape | Position |
|---|---|
| Rectangle, circle | Centre of symmetry |
| Triangle | On a median, one third of the way from the side to the opposite vertex |
| Semicircle, radius r | 4r/(3π) from the diameter, on the symmetry axis |
| Sector, radius r, half-angle α | 2r sin α/(3α) from the centre, on the symmetry axis |

## Methods in steps

**Centre of mass of a composite lamina**
1. Split into rectangles, triangles, circles, semicircles or sectors. Treat holes as negative.
2. Fix axes. Use symmetry to write down one coordinate if possible.
3. Make a table: area, x, y for each part.
4. Divide the sum of area × coordinate by the total area.
5. Give exact values (with π) and then decimals.

**Lamina hanging from a point**
1. Find G relative to the point of suspension.
2. G is directly below the point.
3. Use a right-angled triangle between the point, G and the side or edge you need to refer to.

**Lamina on a rough inclined plane**
1. Topple: G is above the lowest contact point, so tan α = (half the base)/(height of G above the plane).
2. Slip: tan α = μ.
3. The smaller angle happens first as the slope rises.

**Rod or ladder**
1. Draw all forces: weights at centres of mass, normal reactions, friction, tensions.
2. Resolve horizontally and vertically.
3. Take moments about the point where the most unknowns meet, usually the foot.
4. Add friction conditions last: F = μR if limiting, otherwise F ≤ μR.

**Beam about to tilt:** the reaction at the support it is not tilting about is zero. Say that in words.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--03-beam-two-supports.webp" width="900" height="1100" alt="A 6 m uniform beam of 40 kg rests on supports 1 m and 4.5 m from A with a 30 kg child at 5.5 m. Moments about C remove R_C and give R_D = 602 N; resolving vertically gives R_C = 84 N." loading="lazy">
  <figcaption>Take moments about a support so one unknown reaction drops out, then resolve vertically for the other.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--04-point-of-tilting.webp" width="900" height="1060" alt="The beam is about to tilt about D, so R_C = 0. Moments about D give 40g x 1.5 = Mg x 1.5, so M = 40 kg; a number line shows the beam stays level below 40 kg and tilts above it. The 30 kg child would need to stand 6.5 m from A, beyond the 6 m beam." loading="lazy">
  <figcaption>When a beam is about to tilt about one support, the reaction at the other support is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--05-hinged-rod.webp" width="900" height="1000" alt="A 1.8 m, 4 kg rod is hinged at A and held horizontal by a string at 40 degrees to the rod, with a 2 kg particle 1.5 m from A. Moments about A give T = 55.9 N; resolving gives H = 42.8 N and V = 22.9 N, a hinge force of 48.5 N at 28.1 degrees above the horizontal." loading="lazy">
  <figcaption>Taking moments about the hinge removes both hinge components, leaving the tension to find first.</figcaption>
</figure>


## Worked reminders

**L-shaped lamina.** A uniform lamina is made from a rectangle 8 cm by 3 cm, with a second rectangle 3 cm by 4 cm standing on one end of its long side, flush with the left edge. Find the centre of mass from the outer corner O, then the angle the 8 cm edge makes with the vertical when the lamina hangs from O.

```
Part     Area   x     y
Lower    24     4     1.5
Upper    12     1.5   5
x̄ = (96 + 18)/36 = 19/6 = 3.17 cm      ȳ = (36 + 60)/36 = 8/3 = 2.67 cm
Hanging from O, OG is vertical: tan θ = ȳ/x̄ = (8/3)/(19/6) = 16/19
θ = 40.1° between the 8 cm edge and the vertical
```

**Slope: slip or topple?** A uniform rectangular lamina has base 0.8 m on a rough plane and height 0.3 m, and μ = 0.9.

```
Topple: tan α = 0.4/0.15 = 8/3,  α = 69.4°
Slip:   tan α = 0.9,             α = 42.0°
```

It slips first, at 42.0°. A wide, low shape slips before it topples unless friction is large.

**Tilting beam.** A uniform beam AB has length 3 m and mass 12 kg. Supports are at C and D, with AC = 0.4 m and AD = 2.4 m. Find the greatest mass that can be placed at B without tilting.

```
About to tilt about D, so the reaction at C is zero.
Moments about D:  m g (0.6) = 12 g (0.9)
m = 18 kg
```

**Ladder, smooth wall.** A uniform ladder rests at 50° to the ground against a smooth wall, with nobody on it. Find the least coefficient of friction.

```
Horizontal: S = F.   Vertical: R = W.
Moments about the foot: S L sin 50° = W (L/2) cos 50°
S = W/(2 tan 50°) = 0.420 W
μ ≥ F/R = 0.420  (3 s.f.)
```

## Must-know distinctions

- **Light, uniform, non-uniform.** A light rod has no weight. A uniform rod's weight acts at its midpoint. For a non-uniform rod the position of the weight is unknown, and finding it may be the question.
- **Equilibrium versus limiting equilibrium.** Equilibrium needs F ≤ μR. Only limiting equilibrium gives F = μR.
- **Slip versus topple.** Slipping depends on μ; toppling depends on the shape.
- **Smooth versus rough wall.** A smooth wall gives a single horizontal reaction. A rough wall adds friction along the wall.
- **Mass versus area.** For a uniform lamina, areas work as masses because the lamina has the same mass per unit area everywhere.
- **Centre of mass versus point of suspension.** In a hanging lamina these two points lie on the same vertical line.

## Quick self-test

1. A force of 12 N acts at a perpendicular distance 0.35 m from a pivot. Find its moment.
2. A force of 20 N acts on the end of a 0.9 m rod at 30° to the rod. Find its moment about the other end.
3. Particles of 1 kg and 3 kg are at x = 2 and x = 6. Find x̄.
4. A uniform triangular lamina has height 9 cm. How far is its centre of mass from the base?
5. Find the distance from the diameter of the centre of mass of a uniform semicircular lamina of radius 6 cm.
6. A lamina hangs freely from a point P. Where is G?
7. A uniform rectangle has base 0.4 m and height 0.6 m. At what angle of slope, with enough friction, does it begin to topple?
8. A uniform 4 m beam of mass 20 kg lies on supports at its two ends, A and B. A 10 kg load sits 1 m from A. Find both reactions (g = 9.8).
9. A uniform disc of radius 5 cm has a circular hole of radius 1 cm whose centre is 2 cm from the disc's centre O. How far is the centre of mass from O?
10. Particles of mass 2 kg at (0, 3) and 6 kg at (4, −1). Find the centre of mass.
11. Find the distance of the centre of mass from the centre of a uniform sector of radius 6 cm and half-angle π/3.
12. Why is "F = μR" wrong for a ladder that is resting steadily?

### Answers

1. 12 × 0.35 = **4.2 N m**
2. 20 × 0.9 × sin 30° = **9 N m**
3. (1×2 + 3×6)/4 = **5**
4. **3 cm** (a third of the height)
5. 4×6/(3π) = 8/π = **2.55 cm**
6. **Vertically below P**
7. tan α = 0.2/0.3 = 2/3, so **33.7°**
8. Moments about B: 4 R_A = 20g(2) + 10g(3) = 70g, so R_A = 17.5g = **171.5 N**; R_B = 30g − 171.5 = **122.5 N**
9. Hole area π, disc area 25π. Distance = π(2)/(24π) = **1/12 cm = 0.0833 cm**, on the side away from the hole
10. x̄ = 24/8 = 3, ȳ = (6 − 6)/8 = 0, so **(3, 0)**
11. 2(6) sin(π/3)/(3 × π/3) = 6√3/π = **3.31 cm**
12. Friction is only as large as needed, so F ≤ μR. F = μR holds only at the point of slipping.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--01-moment-of-a-force.webp" width="900" height="860" alt="A 24 N force acts at A on a 2.5 m rod OA at 40 degrees to the rod. The perpendicular distance from O to the line of action is 2.5 sin 40 = 1.61 m, and F sin theta turns the rod while F cos theta passes through O. Moment = 24 x 2.5 x sin 40 = 38.6 N m anticlockwise." loading="lazy">
  <figcaption>Only the part of the force at right angles to the rod turns it: moment = F d sin theta.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--02-resultant-moment.webp" width="900" height="1050" alt="A 4 m light rod is pivoted 1.5 m from A with downward forces 30 N at A, 10 N at C and 18 N at B. Moments about P are 45 N m anticlockwise against 15 + 45 = 60 N m clockwise, a resultant of 15 N m clockwise." loading="lazy">
  <figcaption>Add the moments in one sense and subtract those in the other to find which way the rod turns.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--06-ladder-smooth-wall.webp" width="900" height="1120" alt="A 5 m, 18 kg uniform ladder rests at 70 degrees against a smooth wall. Moments about A use the horizontal arm 2.5 cos 70 for the weight and the vertical arm 5 sin 70 for the wall reaction, giving S = 32.1 N. With R = 176.4 N, mu = 0.182." loading="lazy">
  <figcaption>Weight acts at a horizontal distance, the wall reaction at a vertical height: cos and sin must not be swapped.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--08-lamina-with-hole.webp" width="900" height="1090" alt="A 12 cm by 8 cm uniform rectangle has a circular hole of radius 2 cm centred at (9, 3). Treating the hole as area -4 pi, the centre of mass is at x = 5.55 cm and y = 4.15 cm, shifted away from the hole." loading="lazy">
  <figcaption>Use areas as masses and give a hole a negative area.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-moments--09-lamina-hanging-freely.webp" width="900" height="1002" alt="A right-angled triangle ABC with AB = 12 cm and BC = 9 cm hangs freely from A. G is at (3, 4) with B at the origin and must lie vertically below A, so AG is 3 across and 8 down. The angle between AB and the vertical has tan = 3/8, giving 20.6 degrees." loading="lazy">
  <figcaption>A freely suspended lamina settles with its centre of mass directly below the suspension point.</figcaption>
</figure>


## Where marks are usually lost

- Using a distance measured along the rod instead of the perpendicular distance.
- Leaving out a rod's weight, or putting the weight of a non-uniform rod at its midpoint.
- Using side lengths as masses for a lamina, or forgetting to subtract a hole.
- Mixing origins: one part measured from the left, another from the right.
- Using 4r/(3π) from the centre of a semicircle instead of from the diameter.
- Writing F = μR when the question says only that the body is in equilibrium.
- Forgetting the friction at a rough wall in the vertical equation.
- Stating a tilting condition without saying which reaction is zero.
- Rounding a reaction early and then using the rounded value in the next equation.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, unit M2: sections 2 (centres of mass) and 5 (statics of rigid bodies).
