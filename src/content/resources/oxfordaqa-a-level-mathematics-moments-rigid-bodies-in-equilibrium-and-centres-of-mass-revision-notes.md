---
title: "OxfordAQA International AS and A-level Mathematics: Moments, rigid bodies in equilibrium and centres of mass (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths M2 Moments Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Moments, rigid bodies in equilibrium and centres of mass"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 210
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m2-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m2-statics-and-forces-oxfordaqa-alevel-maths"
description: "Condensed revision notes on moments, beams, ladders, centres of mass and suspended bodies for OxfordAQA International A-level Maths, Unit M2."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for section M2.3 (moments, rigid bodies in equilibrium and centres of mass) of the OxfordAQA *International AS and A-level Mathematics* specification, Version 5.2. This content belongs to International A-level Unit M2 and is not examined at International AS. Fuller explanations and longer worked examples are in the [study guide](/resources/oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass/). Then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-moments-rigid-bodies-in-equilibrium-and-centres-of-mass-practice/).

Course pages: [OxfordAQA A-level Mathematics hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). To check where you stand, use the [free diagnostics](/diagnostics/). Friction and resolving at a point are in the [forces and momentum guide](/resources/oxfordaqa-a-level-mathematics-forces-newtons-laws-connected-particles-momentum-and/).

## Key results

| Idea | Result |
|---|---|
| Moment about a point | F × d with d at right angles to the line of F; unit N m |
| Force at angle θ to a rod, distance d along it | moment = F d sin θ |
| Weight | W = mg, with g = 9.8 m s⁻² as the specification states |
| Equilibrium of a rigid body | resultant force zero and resultant moment zero (about any point) |
| Centre of mass of particles | X Σm = Σ m x and Y Σm = Σ m y |
| Uniform lamina | use areas in place of masses |
| Removed piece | negative area |
| Freely suspended body | centre of mass vertically below the suspension point |

The specification lists the centre of mass formulae among the results you must learn. Integration methods are not required.

## Moments: method in steps

1. Draw a large diagram. Mark every force, including weights, with its point of action.
2. Choose a direction as positive (say anticlockwise).
3. For each force, find the perpendicular distance from your chosen point to its line of action.
4. Write each moment with its sign and add them.

A force whose line passes through your chosen point drops out of the equation. Pick the point that removes the unknowns you do not need.

## Beams on supports

* Vertical forces only: one moment equation and one vertical resolving equation.
* A uniform beam's weight acts at its midpoint.
* Light beam: no weight term.
* Just about to tilt about one support: the reaction at the other support has become zero.

```
Reminder: uniform beam AB, 3 m, mass 12 kg, supported at A and B,
particle 6 kg at 1 m from A.
Moments about A: R_B × 3 = 12g × 1.5 + 6g × 1 = 24g
R_B = 8g = 78.4 N
R_A = 18g - 8g = 10g = 98 N
```

## Ladder against a smooth wall: method in steps

1. Draw S (wall, horizontal, away from the wall), R (ground, vertical, up), F (friction, horizontal, towards the wall) and each weight.
2. Resolve vertically: R equals the total weight.
3. Resolve horizontally: F = S.
4. Take moments about the foot: wall force × (length × sin θ) = sum of weight × horizontal distance.
5. For equilibrium, F ≤ μR, so the least μ is F ÷ R.

If the wall is rough, it also supplies a vertical friction force. You then need all three equations.

## Centre of mass

**Symmetry.** Rod: midpoint. Rectangle: where the diagonals meet. Circle: the centre. A symmetry axis contains the centre of mass.

**Particles.** Make a table of m, x, y. Find Σm, Σ m x and Σ m y. Divide.

**Composite body.** Split into rectangles, rods or discs. List the masses (or areas) and centres. Use the particle formulae.

**Hole.** Whole body minus the removed piece:

```
X = (A_whole × x_whole - A_hole × x_hole) / (A_whole - A_hole)
```

## Suspended bodies: method in steps

1. Find the centre of mass G, with coordinates from a convenient corner.
2. Mark the suspension point P. The line PG is vertical.
3. Draw the right-angled triangle with PG as its hypotenuse (or one of its sides when an edge is vertical).
4. Use tan of the angle = opposite ÷ adjacent for the edge you need.
5. Add any attached particle to the system before you find G.

## Worked reminder: composite body and suspension

A uniform lamina has a rectangle 0 ≤ x ≤ 6, 0 ≤ y ≤ 2 (area 12, centre (3, 1)) joined to a square 4 ≤ x ≤ 6, 2 ≤ y ≤ 4 (area 4, centre (5, 3)).

```
16 X = 12(3) + 4(5) = 56      X = 3.5
16 Y = 12(1) + 4(3) = 24      Y = 1.5
```

If the lamina is suspended from the origin, the vertical through the origin passes through G = (3.5, 1.5). The bottom edge, along the x-axis, makes an angle α with OG, which is vertical. Here tan α = 1.5 ÷ 3.5, so α = 23.2° (3 s.f.). The edge is therefore steep, and the angle it makes with the horizontal is 90° - 23.2° = 66.8°. Check which of these angles the question asks for.

## Worked reminder: tilting and limiting cases

A question that says "on the point of tilting" or "greatest distance" is asking for a limiting position. Use these steps:

1. Name the support about which tilting happens.
2. Put the reaction at the other support equal to zero.
3. Take moments about the tilting support.
4. Solve for the unknown mass or distance.
5. State the direction of the inequality in the answer, for example "m must be at most 60 kg".

A ladder question that says "on the point of slipping" is the same idea with friction: set F = μR and use the moment equation about the foot.

## Must-know distinctions

| Compare | Distinction |
|---|---|
| Moment and force | A moment depends on where the force acts; a force does not |
| Smooth and rough contact | Smooth: reaction perpendicular to the surface only. Rough: friction as well |
| Centre of mass and geometric centre | Same for a uniform body; different for a composite body of unequal parts |
| Equilibrium of a particle and of a rigid body | A particle needs force balance only; a rigid body also needs moment balance |

## Quick self-test

1. A 15 N force has its line of action 0.6 m from a pivot, measured at right angles. Find its moment about the pivot.
2. A 20 N force acts at 30° to a rod at a point 0.6 m along the rod from the pivot. Find the moment about the pivot.
3. A light beam AB of length 4 m is supported at its two ends. A load of 60 N hangs 1 m from A. Find the two reactions.
4. Particles of 3 kg and 1 kg are at x = 1 and x = 5 on a line. Where is the centre of mass?
5. Which direction does the reaction from a smooth vertical wall act in?
6. A lamina is made of two parts: area 8 with centre at x = 2, and area 4 with centre at x = 5. Find X.
7. A uniform lamina of area 100 has its centre at x = 5. A piece of area 20 with centre at x = 8 is removed. Find the new X.
8. A uniform rod of length 3 m and mass 6 kg is pivoted 1 m from end A. What mass at A keeps it horizontal?
9. A body is suspended freely from a point P and is at rest. Describe where its centre of mass is.
10. A light rod of length 2 m is hinged at A and held horizontal by a string at B that makes 30° with the rod. A 50 N load hangs at B. Find the tension.

### Answers

1. 15 × 0.6 = 9 N m.
2. 20 × 0.6 × sin 30° = 6 N m.
3. About A: R_B × 4 = 60 × 1, so R_B = 15 N. Then R_A = 60 - 15 = 45 N.
4. (3 × 1 + 1 × 5) ÷ 4 = 2.
5. Horizontal, perpendicular to the wall and away from it.
6. (8 × 2 + 4 × 5) ÷ 12 = 3.
7. (100 × 5 - 20 × 8) ÷ 80 = 4.25.
8. The centre of the rod is 0.5 m from the pivot on the B side. About the pivot: m × 1 = 6 × 0.5, so m = 3 kg.
9. Vertically below P.
10. About A: T sin 30° × 2 = 50 × 2, so T = 100 N.

## Where marks are usually lost

* Writing a moment as force × distance along a sloping rod, without the sine or cosine.
* Taking moments about a point but leaving out one weight, often the beam's own weight.
* Putting the weight of a uniform ladder at the foot or top instead of the midpoint.
* Showing no diagram, so a sign error cannot be traced.
* Giving the friction force when the question asks for the coefficient, or the other way round.
* Using inconsistent origins, so some centres are measured from different corners.
* Forgetting to subtract the removed piece or adding it by mistake.
* Rounding the centre of mass early and then finding an angle that is slightly out.
* Stating "equilibrium" without saying which two conditions you are applying.

## Official syllabus

OxfordAQA, *International AS and A-level Mathematics (9660)*, Version 5.2, section M2.3 (Statics and forces), part of International A-level Unit M2 (Mechanics).
