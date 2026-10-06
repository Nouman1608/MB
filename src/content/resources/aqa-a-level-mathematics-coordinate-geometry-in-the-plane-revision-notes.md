---
title: "AQA A-Level Mathematics: C: Coordinate geometry in the (x, y) plane (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Coordinate Geometry Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "C: Coordinate geometry in the (x, y) plane"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 4
syllabusTopics:
  - qualification: "a-level"
    topic: "c-coordinate-geometry-aqa-alevel-maths"
description: "Condensed notes on lines, circles and parametric equations, with a checked self-test, for AQA A-Level Mathematics (7357), Section C, C1 to C4."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

These notes condense **Section C: Coordinate geometry in the (x, y) plane** of the AQA A-level
Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018
onwards. They cover content references C1 to C4. Section C is listed under Paper 1, and Papers 2
and 3 can also assess it. For full explanations and worked examples, use the
[study guide](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane/); to test yourself,
use the [practice questions](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-practice/).

Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Printable checklist:
[/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## Formulas to know

| Result | Formula | Given in the exam? |
|---|---|---|
| Gradient through two points | m = (y₂ − y₁)/(x₂ − x₁) | No |
| Line through (x₁, y₁) | y − y₁ = m(x − x₁) | No (Appendix B: recall) |
| Perpendicular lines | m₁m₂ = −1 | No (Appendix B: recall) |
| Parallel lines | m₁ = m₂ | No |
| Gradient of ax + by + c = 0 | −a/b | No |
| Midpoint | ((x₁ + x₂)/2, (y₁ + y₂)/2) | No |
| Distance | √((x₂ − x₁)² + (y₂ − y₁)²) | No |
| Circle, centre (a, b), radius r | (x − a)² + (y − b)² = r² | No |
| Circle in parametric form | x = a + r cos θ, y = b + r sin θ | No |

Appendix B of the specification lists the line equation and the perpendicular condition among the
formulae you must recall. Learn every row of this table anyway: none of it is printed on the paper.

## C1: Straight lines

**Three forms.** y = mx + c (read off gradient and intercept); y − y₁ = m(x − x₁) (quickest to
write); ax + by + c = 0 (often required with integer a, b, c).

**Method: equation of a line**

1. Find the gradient (from two points, or a parallel or perpendicular line).
2. Substitute into y − y₁ = m(x − x₁).
3. Clear fractions and rearrange into the form asked for.
4. Check by substituting a known point.

**Method: perpendicular bisector of AB**

1. Midpoint of AB.
2. Gradient of AB, then its negative reciprocal.
3. Line through the midpoint with that gradient.

**Straight-line models.** Gradient = rate of change (units per unit). Intercept = value at the start.
Always state the domain where the model makes sense, and one way it could fail or be refined.

*Worked reminder.* A gym charges a joining fee plus a monthly fee. If 4 months cost £170 and 10
months cost £350, the gradient is 180/6 = 30 (£30 per month) and the intercept is 170 − 4 × 30 = 50
(a £50 joining fee): C = 30n + 50, for whole numbers n ≥ 1.

## C2: Circles

**Equation.** (x − a)² + (y − b)² = r². Centre (a, b), radius r. Signs flip: (x + 2)² means a = −2.

**Method: centre and radius from an expanded equation**

1. Group the x terms and the y terms.
2. Complete the square on each: x² + px = (x + p/2)² − (p/2)².
3. Move the constants to the right. That number is r².
4. If r² ≤ 0, it is not a circle.

*Worked reminder.* x² + y² − 8x + 2y + 8 = 0 becomes (x − 4)² + (y + 1)² = 16 + 1 − 8 = 9.
Centre (4, −1), radius 3.

**Point inside, on or outside.** Substitute into (x − a)² + (y − b)² and compare with r²:
less → inside; equal → on; greater → outside.

### The three circle properties in C2

| Property | How you use it |
|---|---|
| Angle in a semicircle is 90° | If PQ is a diameter, the centre is the midpoint of PQ and r = PQ/2. A right angle at R on the circle means PQ is a diameter. Show it with m₁m₂ = −1 or Pythagoras. |
| Perpendicular from centre bisects a chord | The centre lies on the perpendicular bisector of every chord. Half-chord = √(r² − d²), where d is the distance from the centre to the chord. |
| Radius ⟂ tangent | Tangent gradient = −1 ÷ (gradient of radius to the point of contact). |

**Method: tangent at a point on a circle**

1. Check the point is on the circle.
2. Gradient of the radius from the centre to the point.
3. Negative reciprocal.
4. y − y₁ = m(x − x₁) through the point.

**Method: line and circle**

1. Substitute the line into the circle equation.
2. Rearrange to a quadratic = 0.
3. Discriminant > 0: two points (a chord). = 0: tangent. < 0: no intersection.
4. If asked for points, solve and find y from the **line**.

*Worked reminder.* A circle has radius 10 and a chord lies 6 from the centre. Half-chord =
√(100 − 36) = 8, so the chord is 16.

## C3: Parametric equations

**Parametric to Cartesian**

- Algebraic: make the parameter the subject of the simpler equation and substitute.
  x = t + 3, y = t² gives y = (x − 3)².
- Trigonometric: use an identity.
  - x = r cos θ, y = r sin θ → x² + y² = r² (from sin²θ + cos²θ ≡ 1).
  - cos 2θ ≡ 2cos²θ − 1 ≡ 1 − 2sin²θ when one equation has a double angle.
  - sec²θ ≡ 1 + tan²θ when you see sec and tan.
- Then state the **range of x** (and y if asked) that the parameter allows.

**Cartesian to parametric**

- Circle (x − a)² + (y − b)² = r²: x = a + r cos θ, y = b + r sin θ.
- A curve y = f(x) can always be written x = t, y = f(t), but questions usually give the
  substitution to use.

**Finding where a parametric curve meets a line or axis.** Substitute both x(t) and y(t) into the
line, solve for t, then find the points. Meets the x-axis: solve y(t) = 0. Meets the y-axis: solve
x(t) = 0.

## C4: Parametric models

- The parameter is usually time, so the model tells you position at each moment.
- Check the stated domain (for example t ≥ 0) and reject roots outside it.
- Use unrounded values of t in later working; round the final answer to 3 s.f. unless told otherwise.
- Typical limitations: object treated as a particle, air resistance ignored, constant speed assumed,
  model only valid until the object lands or stops.

## Must-know distinctions

- **Parallel vs perpendicular.** Parallel: same gradient. Perpendicular: product −1.
- **r vs r².** The right-hand side of the circle equation is r². Take the square root.
- **Tangent vs normal to a circle.** The normal at a point on a circle passes through the centre; the
  tangent is perpendicular to it.
- **Chord vs tangent.** A line meeting a circle twice gives a chord (discriminant > 0); once gives a
  tangent (= 0).
- **Cartesian vs parametric domain.** x = 3cos θ forces −3 ≤ x ≤ 3, even though the Cartesian equation
  may be defined for all x.

## Quick self-test

1. Find the gradient of 3x − 4y + 8 = 0.
2. Find the gradient of a line perpendicular to y = −(2/5)x + 1.
3. Find the line through (−1, 6) with gradient −3, in the form ax + by + c = 0.
4. Find the centre and radius of x² + y² + 4x − 12y + 15 = 0.
5. Explain why x² + y² − 2x + 4y + 10 = 0 is not a circle.
6. Find the tangent to x² + y² = 25 at (−3, 4).
7. A circle has radius 13. A chord is 5 units from the centre. Find the chord's length.
8. (0, 0) and (6, 8) are the ends of a diameter. Find the circle's equation.
9. Find the values of k for which y = 2x + k is a tangent to x² + y² = 20.
10. Find the Cartesian equation of x = t − 2, y = 3t².
11. Find the Cartesian equation of x = 5cos θ, y = 5sin θ.
12. Find the Cartesian equation of x = 2t, y = 2/t (t ≠ 0).

### Answers

1. y = (3/4)x + 2, so **m = 3/4**.
2. Gradient −2/5, so perpendicular gradient **5/2**.
3. y − 6 = −3(x + 1) gives **3x + y − 3 = 0**.
4. (x + 2)² + (y − 6)² = 4 + 36 − 15 = 25. **Centre (−2, 6), radius 5.**
5. (x − 1)² + (y + 2)² = 1 + 4 − 10 = **−5**. A sum of squares cannot equal a negative number.
6. Radius gradient −4/3, tangent gradient 3/4. y − 4 = (3/4)(x + 3) gives **3x − 4y + 25 = 0**.
7. Half-chord = √(169 − 25) = 12, so the chord is **24**.
8. Centre (3, 4), radius √100/2 = 5: **(x − 3)² + (y − 4)² = 25**.
9. 5x² + 4kx + k² − 20 = 0. Discriminant 16k² − 20(k² − 20) = 400 − 4k² = 0, so **k = ±10**.
10. t = x + 2, so **y = 3(x + 2)²**.
11. **x² + y² = 25**.
12. t = x/2, so y = 4/x: **xy = 4**.

## Where marks are usually lost

- Writing 2x + 3y = 11 when the question asks for ax + by + c = 0: the "= 0" form is part of the answer.
- Leaving fractions in a, b, c when integers are asked for.
- Using the gradient of the chord or radius itself instead of the perpendicular gradient.
- Halving the constant wrongly when completing the square: x² − 10x becomes (x − 5)² − 25.
- Quoting the radius as r² or forgetting the square root of a surd: r² = 20 gives r = 2√5.
- Finding y from the circle after a line-circle substitution, which gives extra, wrong points.
- Not checking that a given point is on the circle before finding a tangent there.
- Leaving out the x-range after eliminating a trigonometric parameter.
- Rounding intermediate values of t in a parametric model, so the final answer is off at 3 s.f.
- Stating a generic limitation ("it is only a model") instead of one tied to the context.

Related pages: the [quadratics revision notes](/resources/aqa-a-level-mathematics-quadratics-revision-notes/)
for the discriminant, and the [differentiation revision notes](/resources/aqa-a-level-mathematics-differentiation-revision-notes/)
for tangents to curves and dy/dx for parametric curves. Ready to check yourself? Try the
[practice questions](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane-practice/) or a
free [diagnostic](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018 (A-level exams June 2018
onwards), section 3.4 C: Coordinate geometry in the (x, y) plane, content references C1 to C4.
Published by AQA.
