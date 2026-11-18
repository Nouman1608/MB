---
title: "Edexcel International A Level Mathematics (YMA01): M2 Centres of mass"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M2: Mechanics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 6.2
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-2-edexcel-alevel-maths"
    subtopic: "m2-centres-of-mass-edexcel-alevel-maths"
description: "Edexcel IAL Maths M2 centres of mass: particles, standard laminae, frameworks, composite shapes with parts removed, and laminae hanging, pivoted or on a slope."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 2 of Unit M2: Mechanics 2 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. The three statements are "Centre of mass of a discrete mass distribution in one and two dimensions", "Centre of mass of uniform plane figures, and simple cases of composite plane figures", and "Simple cases of equilibrium of a plane lamina". The guidance says that "the use of an axis of symmetry will be acceptable", "use of integration is not required", figures "may include the shapes referred to in the formulae book", and results in that book "may be quoted without proof". The lamina "may (i) be suspended from a fixed point; (ii) be free to rotate about a fixed horizontal axis; (iii) be put on an inclined plane."

The broader [centres of mass and rigid body equilibrium guide](/resources/edexcel-ial-mathematics-centres-of-mass-and-equilibrium-of-rigid-bodies/) covers the basic method. This guide adds unknown masses, wire frameworks, a shape with a piece removed, and each of the three equilibrium cases.

## What the specification asks for

| Statement | You must be able to |
|---|---|
| 2.1 | Find the centre of mass of particles on a line or in a plane, including unknown masses or positions |
| 2.2 | Use standard results for uniform laminae and wires, and combine shapes by adding or removing parts |
| 2.3 | Solve equilibrium problems for a lamina hanging from a point, turning about an axis, or resting on a slope |

## Particles

For particles of mass mᵢ at points (xᵢ, yᵢ):

```
x̄ = Σ mᵢxᵢ / Σ mᵢ        ȳ = Σ mᵢyᵢ / Σ mᵢ
```

In vector form, r̄ = Σ mᵢrᵢ / Σ mᵢ. In one dimension only x̄ is needed. A table with columns for mass, x, y, mx and my keeps the working tidy and is easy for an examiner to follow.

**Worked example 1: an unknown mass.** Particles of mass 2 kg, 4 kg and m kg are at (0, 4), (3, 1) and (6, 5). The x-coordinate of their centre of mass is 4. Find m and ȳ.

```
x̄:  (2(0) + 4(3) + m(6)) / (6 + m) = 4
12 + 6m = 24 + 4m,  so m = 6
ȳ = (2(4) + 4(1) + 6(5)) / 12 = 42/12 = 3.5
```

Multiplying out the fraction before solving avoids errors. Then use the value of m in the other coordinate.

## Standard results

The formulae booklet lists the triangle, circular arc and sector results. The others follow from symmetry or from the sector and arc formulae:

| Uniform body | Position of the centre of mass |
|---|---|
| Rod | Midpoint |
| Rectangle | Intersection of the diagonals |
| Triangular lamina | Two-thirds of the way along each median from its vertex; the mean of the three vertices |
| Circular arc, radius r, angle 2α at the centre | r sin α / α from the centre, on the axis of symmetry |
| Sector, radius r, angle 2α at the centre | 2r sin α / (3α) from the centre, on the axis of symmetry |
| Semicircular lamina (α = π/2) | 4r/(3π) from the centre |
| Semicircular arc (α = π/2) | 2r/π from the centre |

The angle α is **half** the angle of the arc or sector, and it must be in radians.

## Composite figures

Split a shape into parts whose centres of mass you know. For a uniform lamina, each part's mass is proportional to its area, so areas can stand in for masses.

- **Adding a part:** include it with a positive area.
- **Removing a part:** include it with a negative area, or equivalently write (whole) = (remainder) + (removed part) and solve for the remainder.
- **Wire frameworks:** each rod's mass is proportional to its length, and its centre of mass is at its midpoint. A framework is not a lamina, so use lengths, not areas.

## Worked example 2: a framework hanging freely

A uniform wire is bent into a triangle ABC with AB = 3 cm, BC = 4 cm and CA = 5 cm, so the angle at B is a right angle. The framework hangs freely from A. Find the angle AB makes with the vertical.

Put B at (0, 0), A at (0, 3) and C at (4, 0).

| Rod | Length | Midpoint |
|---|---|---|
| AB | 3 | (0, 1.5) |
| BC | 4 | (2, 0) |
| CA | 5 | (2, 1.5) |

```
x̄ = (3(0) + 4(2) + 5(2)) / 12 = 18/12 = 1.5
ȳ = (3(1.5) + 4(0) + 5(1.5)) / 12 = 12/12 = 1
```

When a body hangs freely from a point, its centre of mass is **vertically below** that point. So AG is vertical. From A, G is 1.5 across and 3 − 1 = 2 down. AB points straight down from A in these coordinates, so the angle between AB and AG is tan⁻¹(1.5/2) = **36.9°**. This is a framework, not a lamina: the answer would be different if the triangle were a solid sheet, whose centre of mass is the mean of the vertices, (4/3, 1).

## Worked example 3: a lamina with a corner removed

A uniform square lamina OABC has side 9 cm, with O at the origin, A at (9, 0) and C at (0, 9). The triangle with vertices (6, 9), (9, 9) and (9, 6) is cut off the corner at B. Find the centre of mass of the remaining lamina, and the angle OA makes with the vertical when it hangs freely from A.

| Part | Area | x̄ | ȳ |
|---|---|---|---|
| Square | 81 | 4.5 | 4.5 |
| Triangle removed | 4.5 | 8 | 8 |
| Remainder | 76.5 | x̄ | ȳ |

The triangle's centre of mass is the mean of its vertices: ((6 + 9 + 9)/3, (9 + 9 + 6)/3) = (8, 8).

```
81(4.5) - 4.5(8) = 76.5 x̄
364.5 - 36 = 76.5 x̄,  so x̄ = 4.29 cm
```

The remaining shape is symmetric about the line y = x, so ȳ = x̄ = 4.29 cm. Hanging from A(9, 0), G is 9 − 4.29 = 4.71 to the left of A and 4.29 above it. OA points left from A, so the angle between OA and the vertical line AG is tan⁻¹(4.29/4.71) = **42.4°**.

## The three equilibrium cases

**(i) Suspended from a fixed point.** The centre of mass hangs vertically below the point of suspension. Find the angle using the right-angled triangle formed by the point, G and a known edge, as in the examples above.

**(ii) Free to rotate about a fixed horizontal axis.** The lamina turns about the axis unless held. Take moments about the axis: the weight's moment uses the horizontal distance from the axis to G. The axis exerts a force too, but it has no moment about itself. Resolving then gives that force.

**(iii) On an inclined plane.** As the plane tilts, a lamina standing on one edge may slide or topple.

- It **topples** when G passes beyond the lowest point of contact, so the condition is "G is vertically above the lower corner".
- It **slides** when tan α exceeds μ.
- Whichever condition is reached at the smaller angle happens first.

## Common mistakes

- Using areas for a wire framework, or lengths for a lamina.
- Using the full angle of a sector in 2r sin α/(3α), instead of half of it, or using degrees.
- Adding the area of a removed piece instead of subtracting it.
- Measuring a centre-of-mass distance from the wrong reference point, such as from the edge of a semicircle instead of its centre.
- In a hanging problem, finding the angle between AG and the wrong edge.
- Ignoring symmetry, and doing twice as much work.

## Exam technique

- **"Show that the centre of mass is … from AB"** needs the table of masses or areas and the moment equation written out in full.
- **"Find the angle between AB and the vertical"** needs a clear statement that G is vertically below the point of suspension, then a labelled triangle.
- **"Explain why"** a coordinate is a given value: name the axis of symmetry.
- Keep π in exact form until the last line, and give angles to 1 decimal place or 3 significant figures.

## Where next

- [M2 centres of mass revision notes](/resources/edexcel-a-level-mathematics-yma01-m2-centres-of-mass-edexcel-alevel-maths-revision-notes/) for the formulae and a self-test.
- [M2 centres of mass practice questions](/resources/edexcel-a-level-mathematics-yma01-m2-centres-of-mass-edexcel-alevel-maths-practice/) with mark schemes.
- [M1 moments study guide](/resources/edexcel-a-level-mathematics-yma01-m1-moments-edexcel-alevel-maths/) for the moments skills these problems rely on.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
