---
title: "OxfordAQA International AS and A-level Mathematics: Equation of a circle, tangents and circle geometry (9660) -- Revision Notes"
seoTitle: "OxfordAQA Maths 9660 Circles Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Equation of a circle, tangents and circle geometry"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 179
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-pp1-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "pp1-circle-oxfordaqa-alevel-maths"
description: "Condensed formulae, method steps and a self-test on circle equations, translations, circle properties, tangents and normals for OxfordAQA 9660."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed notes for OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, content area PP1.1 (Circle). The specification places this in International AS, Unit PSM1. For full explanations read the [study guide](/resources/oxfordaqa-a-level-mathematics-equation-of-a-circle-tangents-and-circle-geometry/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-equation-of-a-circle-tangents-and-circle-geometry-practice/). Course pages: [hub](/boards/oxfordaqa/a-level/mathematics/) and [checklist](/checklists/oxfordaqa/a-level/mathematics/). To find weak spots, try a [free 10-minute diagnostic](/diagnostics/).

## Key results

| Item | Result |
|---|---|
| Circle, centre (a, b), radius r | (x − a)² + (y − b)² = r² |
| Expanded form | x² + y² + px + qy + c = 0 (equal x² and y² coefficients, no xy term) |
| Centre from expanded form | (−p/2, −q/2) |
| Radius from expanded form | r² = p²/4 + q²/4 − c |
| Translation by (s, t) | Centre (a, b) → (a + s, b + t); radius unchanged |
| Gradient of tangent | −1 ÷ gradient of the radius at that point |
| Gradient of normal | Same as the radius; the normal passes through the centre |
| Tangent length from outside point T | √(TC² − r²) |

The centre and radius formulas follow from completing the square, so you can rebuild them in the exam instead of memorising them.

## Method: centre and radius from an expanded equation

1. Divide through so the x² and y² coefficients are 1.
2. Rewrite the x terms and then the y terms as squares.
3. Move constants right. The right side is r².
4. Check r² > 0. Zero means a single point; negative means no circle.

**Reminder.** x² + y² − 12x + 6y + 9 = 0:

```
(x − 6)² − 36 + (y + 3)² − 9 + 9 = 0
(x − 6)² + (y + 3)² = 36
```

Centre (6, −3), radius 6.

## Method: inside, on or outside

Compute (x − a)² + (y − b)² for the point and compare with r².

| Result | Position |
|---|---|
| Less than r² | Inside |
| Equal to r² | On the circle |
| Greater than r² | Outside |

## Method: translating a circle

1. Write the original centre and radius.
2. Add the vector to the centre.
3. Keep the radius. Write the new equation.

**Reminder.** (x + 3)² + (y − 1)² = 49 translated by (2, −5): centre (−3, 1) → (−1, −4). Image: (x + 1)² + (y + 4)² = 49.

To find an unknown vector: image centre − original centre.

## The three circle properties

| Property | What to calculate |
|---|---|
| Angle in a semicircle is 90° | Gradient AP × gradient BP = −1 when AB is a diameter |
| Perpendicular dropped from the centre onto a chord | It splits the chord into equal halves: r² = d² + (half-chord)², with d the centre-to-chord distance |
| Tangent ⟂ radius at the point of contact | Gradient of tangent × gradient of radius = −1 |

Uses of the chord property:

- The centre lies on the perpendicular bisector of every chord.
- Two chords give the centre as the intersection of their perpendicular bisectors.
- A line through the centre perpendicular to a chord meets it at its midpoint.

## Method: tangent and normal at a point

1. Check the point lies on the circle.
2. Gradient of radius = (change in y)/(change in x) from the centre to the point.
3. Tangent gradient = negative reciprocal. Normal gradient = radius gradient.
4. Use y − y₁ = m(x − x₁).
5. Tidy to the form asked for, such as ax + by = c with integers.
6. Check the normal passes through the centre.

**Special cases.** Horizontal radius gives vertical tangent x = constant. Vertical radius gives horizontal tangent y = constant.

**Reminder.** Circle (x − 2)² + (y − 3)² = 52 at (8, 7): 36 + 16 = 52 ✓. Radius gradient = 4/6 = 2/3. Tangent gradient −3/2: y − 7 = −(3/2)(x − 8), so 3x + 2y = 38. Normal: y − 7 = (2/3)(x − 8), so 2x − 3y + 5 = 0. Centre check: 4 − 9 + 5 = 0 ✓.

Implicit differentiation is not required by the specification. Gradients come from the centre and the point of contact.

## More worked reminders

**Semicircle check.** A(0, 1) and B(6, 5) are the ends of a diameter. Is P(5, 6) on the circle? Gradient AP = (6 − 1)/5 = 1, gradient BP = (6 − 5)/(5 − 6) = −1. Product −1, so angle APB is 90° and P is on the circle. Direct check: centre (3, 3), r² = 13, and (5 − 3)² + (6 − 3)² = 13 ✓.

**Finding a centre from a chord.** A circle passes through (1, 0) and (7, 4), and its centre is on the y-axis. The chord has midpoint (4, 2) and gradient 4/6 = 2/3, so the perpendicular bisector has gradient −3/2: y − 2 = −(3/2)(x − 4). At x = 0, y = 8. Centre (0, 8), r² = 1 + 64 = 65. Check the other point: 49 + 16 = 65 ✓.

**Chord length from a distance.** Radius 13, chord 5 from the centre. Half-chord² = 169 − 25 = 144, half-chord 12, chord 24.

**Tangent length.** Circle (x − 1)² + (y − 1)² = 9, external point (7, 9). TC² = 36 + 64 = 100. Tangent length² = 100 − 9 = 91, so the length is √91.

**Line meeting a circle.** Substitute the line into the circle equation and get a quadratic. Two roots mean two intersections (a chord), a repeated root means the line is a tangent, and no real roots mean no intersection. This uses quadratics knowledge from the Unit P1 content, so see the [Pure Maths 1 revision notes](/resources/oxfordaqa-a-level-mathematics-p1-revision-notes/) if it feels rusty.

## Exam-style patterns to recognise

| Wording in the question | What it is asking for |
|---|---|
| "Find the centre and radius" | Complete the square on x and y |
| "AB is a diameter" | Midpoint is the centre; half the distance AB is the radius |
| "Prove P is on the circle" | Put its coordinates into the left-hand side and obtain r² |
| "The tangent at P" | Perpendicular to the radius CP |
| "The normal at P" | The line through P and the centre |
| "The circle is translated by" | Move the centre only |
| "Touches the x-axis" | Radius equals the distance from the centre to the axis |
| "Touches the y-axis" | Radius equals the distance from the centre to that axis |

## Must-know distinctions

- **Radius against r².** The equation gives r². Take the square root.
- **Tangent against normal.** The tangent meets the radius at 90°; the normal runs along the radius.
- **Centre sign flip.** (x − a) gives centre a. (x + a) gives centre −a.
- **Translation against enlargement.** A translation keeps r. Only the centre moves.
- **Chord against diameter.** A diameter is a chord through the centre. Any chord's perpendicular bisector passes through the centre.

## Quick self-test

1. Give the equation of the circle centred at (−3, 4) with radius 7.
2. Find the centre and radius of x² + y² − 6x + 10y + 18 = 0.
3. Find the centre and radius of 4x² + 4y² − 8x + 16y − 20 = 0.
4. Is the point (6, −2) inside, on or outside the circle (x − 2)² + (y + 5)² = 30?
5. The circle (x − 4)² + (y − 3)² = 11 is translated by the vector (−6, 2). State the image equation.
6. A diameter has endpoints (0, 1) and (6, 5). Write the equation of the circle.
7. A chord of a circle with radius 10 lies 6 units from the centre. How long is the chord?
8. Find the equation of the tangent to the circle x² + y² = 29 at (5, 2).
9. Find the equation of the normal to (x − 1)² + (y − 1)² = 25 at (4, 5).
10. Find the length of the tangent from (0, 8) to the circle x² + y² = 20.
11. Is x² + y² − 4x + 2y + 9 = 0 a circle? Give a reason.

### Answers

```
1.  (x + 3)² + (y − 4)² = 49
2.  (x − 3)² + (y + 5)² = 9 + 25 − 18 = 16 → centre (3, −5), radius 4
3.  ÷4: x² + y² − 2x + 4y − 5 = 0 → (x − 1)² + (y + 2)² = 10
    centre (1, −2), radius √10
4.  (6 − 2)² + (−2 + 5)² = 16 + 9 = 25 < 30 → inside
5.  centre (4, 3) → (−2, 5): (x + 2)² + (y − 5)² = 11
6.  centre (3, 3); r² = 9 + 4 = 13 → (x − 3)² + (y − 3)² = 13
7.  half-chord² = 100 − 36 = 64 → half-chord 8 → chord 16
8.  radius gradient 2/5, tangent gradient −5/2:
    y − 2 = −(5/2)(x − 5) → 5x + 2y = 29
9.  radius gradient (5 − 1)/(4 − 1) = 4/3; normal passes through the
    point with that gradient: y − 5 = (4/3)(x − 4) → 4x − 3y = 1
10. TC² = 64, tangent² = 64 − 20 = 44 → 2√11
11. (x − 2)² + (y + 1)² = 4 + 1 − 9 = −4 < 0 → no, no real points
```

Question 9 check: (4 − 1)² + (5 − 1)² = 25 ✓ (the point is on the circle), and the centre (1, 1) gives 4 − 3 = 1 ✓.

## Where marks are usually lost

- Writing the centre with the wrong sign after completing the square.
- Stating r² as the radius.
- Not dividing by the common coefficient first, so the completed squares are wrong.
- Using the radius gradient as the tangent gradient, or flipping without negating.
- Starting the tangent equation without checking the point is on the circle, which can hide a copying error.
- Moving the centre in the wrong direction in a translation.
- Showing a bare answer for a "show that" question instead of every line of substitution.
- Leaving a tangent equation untidy when integer coefficients are requested.
- Rounding a surd radius early. Keep exact values until the end.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section 3.2.1 PP1.1 (Circle), published by OxfordAQA.
