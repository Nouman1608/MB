---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M2 Centres of mass -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for Edexcel IAL Maths M2 centres of mass: particle systems, standard shapes, composite laminae, wire frameworks and lamina equilibrium cases."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes cover section 2 of Unit M2 in Pearson Edexcel International A Level Mathematics (YMA01): centres of mass of discrete mass distributions, of uniform plane figures and simple composite figures, and simple cases of equilibrium of a plane lamina. For worked examples, use the [M2 centres of mass study guide](/resources/edexcel-a-level-mathematics-yma01-m2-centres-of-mass/).

## Particles

```
x̄ = Σ m x / Σ m        ȳ = Σ m y / Σ m        r̄ = Σ m r / Σ m
```

- On a line, only one coordinate is needed.
- An unknown mass m: write the equation, multiply out the denominator, then solve the linear equation.
- An unknown position: the same, solving for the coordinate.

## Standard shapes (uniform)

| Shape | Centre of mass |
|---|---|
| Rod | Midpoint |
| Rectangle or square | Centre |
| Circle (lamina or ring) | Centre |
| Triangle (lamina) | Mean of the vertices; ⅔ along a median from the vertex |
| Circular arc, radius r, angle 2α | r sin α / α from the centre |
| Sector, radius r, angle 2α | 2r sin α / (3α) from the centre |
| Semicircular lamina | 4r/(3π) from the centre |
| Semicircular arc | 2r/π from the centre |
| Quarter-circle lamina (α = π/4) | 4√2 r/(3π) from the centre, on the line of symmetry |

**α is half the angle, in radians.** Distances are from the centre of the circle, along the axis of symmetry.

## Composite laminae

| Step | What to do |
|---|---|
| 1 | Choose axes, ideally along edges or an axis of symmetry |
| 2 | Split the shape into standard parts |
| 3 | Table: area (∝ mass), x̄ and ȳ of each part |
| 4 | Added parts positive; removed parts negative |
| 5 | Σ(area × x̄) = (total area) × X̄ |

Use symmetry to write down one coordinate without working, and say which axis of symmetry you used.

**Example:** a 10 by 6 rectangle with a semicircle of radius 3 attached along one 6 cm side. Areas 60 and 9π/2 = 14.14. The semicircle's centre of mass is 4/π = 1.27 beyond that side. X̄ = (60 × 5 + 14.14 × 11.27)/74.14 = 6.20 from the far side.

## Frameworks (wire shapes)

- Each rod or arc has mass proportional to its **length**.
- A straight rod's centre of mass is its midpoint; an arc uses r sin α/α.
- A framework's centre of mass is generally **not** the same as that of a lamina of the same outline.

## Laminae with particles attached

Add each particle as an extra row in the table, with its mass. If the lamina's mass is given, use masses for every row. If only areas are known, convert using the mass per unit area.

## Equilibrium of a lamina

| Case | Condition | Method |
|---|---|---|
| Suspended from a point P | G is vertically below P | Right-angled triangle with PG and a known edge |
| Free to rotate about a horizontal axis | Moments about the axis balance | Weight × horizontal distance of G from the axis |
| On an inclined plane | Topples when G passes beyond the lower corner | Compare the toppling angle with the sliding angle (tan α = μ) |

**Toppling condition:** for a lamina standing on a slope, with G at distance a along the slope from the lower corner and h perpendicular to the slope, it is on the point of toppling when tan α = a/h.

## Key terms

| Term | Meaning |
|---|---|
| Centre of mass | The point where the whole weight can be taken to act |
| Uniform | Mass spread evenly, so mass is proportional to area (lamina) or length (wire) |
| Lamina | A flat body of negligible thickness |
| Framework | A shape made from rods or wire, with no interior surface |
| Composite figure | A shape made by joining or removing standard shapes |
| Axis of symmetry | A line about which the shape is symmetric; G lies on it |

## Exam traps

- Areas used for a wire, or lengths for a lamina.
- The full angle used for 2α in the sector or arc formula, or degrees instead of radians.
- A removed piece added instead of subtracted.
- Distances taken from the edge of a semicircle instead of from its centre.
- The angle with the vertical found against the wrong edge.
- Toppling and sliding compared the wrong way round.

## Self-test

1. Find the centre of mass of 2 kg at x = 0, 3 kg at x = 1.2 and 5 kg at x = 2.
2. Where is the centre of mass of a uniform triangular lamina with vertices (0, 0), (6, 0) and (3, 9)?
3. Find the distance from the centre of the centre of mass of a uniform sector of radius 6 cm and angle 2π/3.
4. Find the distance from the centre of the centre of mass of a uniform semicircular wire of radius 5 cm.
5. Particles of 3 kg at A and m kg at B are on a light rod AB of length 4 m. The centre of mass is 2.5 m from A. Find m.
6. Why is mass proportional to length for a uniform wire framework?
7. A square of side 9 has a 4.5 cm² triangle removed. Write the moment equation for the remainder.
8. A lamina hangs freely from P. What do you know about its centre of mass?
9. A lamina can turn about a horizontal axis through A. Why take moments about A?
10. When does a lamina on a tilting plane topple?
11. How do you decide whether a lamina on a slope slides or topples first?
12. When can you write down a coordinate of the centre of mass with no working?

**Answers:**

1. x̄ = (0 + 3.6 + 10)/10 = 1.36.
2. The mean of the vertices: (3, 3).
3. α = π/3: 2(6) sin(π/3)/(3 × π/3) = 6√3/π = 3.31 cm.
4. 2r/π = 10/π = 3.18 cm.
5. 4m/(3 + m) = 2.5, so 1.5m = 7.5 and m = 5.
6. The wire has the same mass per unit length everywhere.
7. 81 × (centre of square) − 4.5 × (centre of triangle) = 76.5 × (centre of remainder), for each coordinate.
8. It lies vertically below P.
9. The unknown force from the axis then has no moment, so it does not appear.
10. When its centre of mass passes vertically beyond the lowest corner in contact with the plane.
11. Find the toppling angle and the sliding angle (where tan α = μ); the smaller angle is reached first.
12. When the shape has an axis of symmetry: G lies on it.

Next, try the [M2 centres of mass practice questions](/resources/edexcel-a-level-mathematics-yma01-m2-centres-of-mass-practice/).
