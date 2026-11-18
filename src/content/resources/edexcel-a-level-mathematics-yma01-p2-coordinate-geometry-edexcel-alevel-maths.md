---
title: "Edexcel International A Level Mathematics (YMA01): Coordinate geometry of the circle (P2.3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-coordinate-geometry-edexcel-alevel-maths"
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.3
description: "The equation of a circle, the three circle properties, tangents, chords and tangent lengths for Edexcel IAL Maths Unit P2, with fully worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3): "coordinate geometry of the circle using the equation of a circle in the form (x − a)² + (y − b)² = r²", including use of three circle properties:

- the angle in a semicircle is a right angle
- the perpendicular from the centre to a chord bisects the chord
- the perpendicularity of radius and tangent

The guidance adds that students "should be able to find the radius and the coordinates of the centre of the circle, given the equation of the circle and vice versa".

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) summarises the unit, and the [guide to proof, the factor theorem and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/) introduces each property with a first example. This page goes further: finding a circle from three points, the length of a chord, the length of a tangent from an external point, and deciding whether a line meets a circle. Test yourself afterwards with the [P2 circle revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-coordinate-geometry-edexcel-alevel-maths-revision-notes/) and the [P2 circle practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-coordinate-geometry-edexcel-alevel-maths-practice/).

## Where the equation comes from

A point (x, y) is on the circle with centre (a, b) and radius r exactly when its distance from the centre is r. By Pythagoras:

(x − a)² + (y − b)² = r²

Everything in this section uses this one idea together with the Unit P1 straight-line toolkit: gradient, midpoint, distance, y − y₁ = m(x − x₁), and the rule that perpendicular gradients multiply to −1.

## From the expanded form to centre and radius

### Worked example 1

**Find the centre and radius of the circle x² + y² − 10x + 4y + 4 = 0.**

Group the x and y terms and complete the square in each:

(x² − 10x) + (y² + 4y) + 4 = 0

(x − 5)² − 25 + (y + 2)² − 4 + 4 = 0

(x − 5)² + (y + 2)² = 25

**Centre (5, −2), radius 5.**

Two checks are worth making. The signs flip: the term −10x gives the centre's x-coordinate +5. And the right-hand side must be positive. For x² + y² + 2x − 6y + k = 0, completing the square gives (x + 1)² + (y − 3)² = 10 − k, so the equation is a circle only when **k < 10**.

## Using the angle in a semicircle

If angle APB is 90°, then AB is a diameter of the circle through A, P and B. This is the converse of the property, and it is often the quickest way to find a circle through three points.

### Worked example 2: a circle through three points

**Find the equation of the circle through A(1, 1), B(7, 1) and C(1, 9).**

AB is horizontal and AC is vertical, so angle BAC = 90°. The angle in a semicircle is a right angle, so **BC is a diameter**.

- Centre = midpoint of BC = ((7 + 1)/2, (1 + 9)/2) = (4, 5)
- BC = √((7 − 1)² + (1 − 9)²) = √(36 + 64) = 10, so r = 5

The circle is **(x − 4)² + (y − 5)² = 25**. Check with A: (1 − 4)² + (1 − 5)² = 9 + 16 = 25.

If the right angle is not obvious, test gradients: two sides are perpendicular if their gradients multiply to −1. If no angle is 90°, use the chord property instead: the perpendicular bisector of any chord passes through the centre, so two perpendicular bisectors meet at the centre.

## Tangents: radius ⟂ tangent

### Worked example 3: the tangent at a point

**The circle C has equation (x + 1)² + (y − 3)² = 20. Show that P(3, 5) lies on C, and find the equation of the tangent to C at P in the form ax + by + c = 0.**

On the circle: (3 + 1)² + (5 − 3)² = 16 + 4 = 20, so P lies on C.

The centre is (−1, 3). Gradient of the radius to P = (5 − 3)/(3 − (−1)) = 2/4 = ½.

The tangent is perpendicular to the radius, so its gradient is −2:

y − 5 = −2(x − 3), so y = −2x + 11, which gives **2x + y − 11 = 0**.

### The length of a tangent from an external point

From a point T outside a circle, the tangent touches the circle at a point Q. Because the radius CQ is perpendicular to TQ, triangle CQT has a right angle at Q, so

TQ² = CT² − r²

**Example.** For the circle in Worked example 1, centre C(5, −2), radius 5, and T(13, 4): CT² = 8² + 6² = 100, so TQ² = 100 − 25 = 75 and **TQ = 5√3**. You do not need the coordinates of Q.

## Chords: the perpendicular from the centre bisects the chord

### Worked example 4: the equation and length of a chord

**The circle (x − 2)² + (y − 1)² = 25 has a chord AB whose midpoint is M(4, 2). Find the equation of AB and its length.**

The centre is C(2, 1). Because the perpendicular from the centre to a chord bisects it, CM is perpendicular to AB.

- Gradient CM = (2 − 1)/(4 − 2) = ½, so the gradient of AB is −2.
- Equation of AB: y − 2 = −2(x − 4), so **y = −2x + 10**.

For the length, triangle CMA has a right angle at M:

- CM² = 2² + 1² = 5
- AM² = r² − CM² = 25 − 5 = 20, so AM = 2√5
- **AB = 2 × AM = 4√5**

**Check by solving:** substituting y = −2x + 10 gives 5x² − 40x + 60 = 0, so x = 2 or 6, and the ends are (2, 6) and (6, −2). Their distance apart is √(16 + 64) = √80 = 4√5.

## Does a line meet a circle?

Substitute the line into the circle's equation to get a quadratic in x, then use the Unit P1 discriminant:

| b² − 4ac | Meaning |
|---|---|
| > 0 | the line cuts the circle at two points (a chord) |
| = 0 | the line is a tangent |
| < 0 | the line misses the circle |

**Example.** For which values of k is y = x + k a tangent to x² + y² = 8? Substituting: x² + (x + k)² = 8, so 2x² + 2kx + k² − 8 = 0. Tangent when (2k)² − 4(2)(k² − 8) = 0, i.e. 64 − 4k² = 0, so **k = ±4**.

A quicker comparison, when the centre and radius are known, is the distance from the centre to the point or line: less than r means inside (or a chord), equal means on the circle (or a tangent), greater means outside.

## Common mistakes

- **Sign errors in the centre.** (x + 3)² + (y − 7)² = 18 has centre (−3, 7), not (3, −7).
- **Forgetting to square root.** r² = 18 gives r = √18 = 3√2, not 18.
- **Completing the square with a coefficient on x².** Divide through first if the equation is 2x² + 2y² + ... = 0.
- **Using the radius gradient as the tangent gradient.** The tangent's gradient is the negative reciprocal.
- **Doubling the wrong length.** The right-angled triangle gives half the chord; double it at the end.
- **Not checking that a point is on the circle** before finding a tangent there, when the question asks you to show it.

## Exam technique

- **"Show that P lies on C"** needs the substitution written out with both sides equal.
- **"Find an equation of the tangent"** expects a full line equation; if a form such as ax + by + c = 0 with integers is requested, rearrange and clear fractions.
- **"Hence"** after a semicircle or perpendicularity result usually means use that right angle: Pythagoras, or a negative reciprocal gradient.
- **Exact answers** such as 4√5 are expected unless a decimal is asked for.
- **Sketch.** A quick labelled sketch of centre, radius and points shows which right-angled triangle to use. It is not marked, but it prevents choosing the wrong lengths.

## Related resources

- [P2 circle revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-coordinate-geometry-edexcel-alevel-maths-revision-notes/)
- [P2 circle practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-coordinate-geometry-edexcel-alevel-maths-practice/)
- [Proof, the factor and remainder theorems and circles](/resources/edexcel-ial-mathematics-proof-the-factor-and-remainder-theorems-and-the/)
- [Indices, surds, quadratics and the discriminant (Unit P1)](/resources/edexcel-ial-mathematics-indices-surds-and-quadratics-functions-discriminant/)
- [Unit P2: Pure Mathematics 2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/)
