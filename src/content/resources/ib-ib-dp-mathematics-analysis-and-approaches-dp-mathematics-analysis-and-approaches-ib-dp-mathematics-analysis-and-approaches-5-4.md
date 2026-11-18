---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.4 Tangents and normals at a given point"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.04
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-4"
description: "Study guide to IB DP Maths AA section 5.4: equations of tangents and normals by hand and by GDC, parallel tangents, second intersections and unknown constants."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 5.4 of IB DP Mathematics: Analysis and Approaches (first assessment 2021) covers **tangents
and normals at a given point, and their equations**. The guide expects the use of both analytic
approaches and technology. It is SL content, examined at SL and HL, and it combines the derivative
from sections 5.1 and 5.3 with the straight-line work from Topic 2.

The [differentiation study guide](/resources/ib-dp-mathematics-aa-sl-differentiation/) works one
tangent and normal for a cubic. This page goes on to the question types that build on that skill:
tangents parallel to a given line, a normal meeting the curve again, triangles formed with the axes,
unknown constants, and the technology route. Afterwards, use the
[5.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4-revision-notes/)
and the
[5.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4-practice/).

## Key ideas

- The **tangent** at a point P on a curve is the straight line through P with the same gradient as
  the curve at P. Its gradient is m = f′(x₁).
- The **normal** at P is the straight line through P perpendicular to the tangent. Perpendicular
  gradients multiply to −1, so the normal's gradient is −1/m.
- Both lines pass through P(x₁, y₁), so both use the point-gradient form

```
y − y₁ = m(x − x₁)
```

Two special cases: if f′(x₁) = 0, the tangent is horizontal (y = y₁) and the normal is vertical
(x = x₁). A vertical line has no gradient, so do not try to write −1/0.

## The standard method

1. Find y₁ by substituting x₁ into f(x), if the point is not fully given.
2. Find f′(x) and evaluate m = f′(x₁).
3. Tangent: y − y₁ = m(x − x₁). Normal: y − y₁ = −(1/m)(x − x₁).
4. Rearrange into the form the question asks for, such as y = mx + c or ax + by + d = 0 with integer
   coefficients.

### Worked example 1

Find the equations of the tangent and normal to y = x² − 2/x at the point where x = 1.

```
y(1) = 1 − 2 = −1, so P = (1, −1)
y = x² − 2x⁻¹,  dy/dx = 2x + 2x⁻²
m = 2 + 2 = 4
Tangent: y + 1 = 4(x − 1)    →  y = 4x − 5
Normal:  y + 1 = −(1/4)(x − 1)  →  4y + 4 = −x + 1  →  x + 4y + 3 = 0
```

## Further question types

### Worked example 2: tangents parallel to a given line

Find the equations of the tangents to y = x³ − 3x + 2 that are parallel to y = 9x.

```
Parallel lines have equal gradients, so solve dy/dx = 9:
3x² − 3 = 9  →  x² = 4  →  x = 2 or x = −2
x = 2:   y = 8 − 6 + 2 = 4     tangent y − 4 = 9(x − 2)   →  y = 9x − 14
x = −2:  y = −8 + 6 + 2 = 0    tangent y − 0 = 9(x + 2)   →  y = 9x + 18
```

There are two tangents because a cubic's gradient takes most values twice.

### Worked example 3: the normal meets the curve again

Find where the normal to y = x² − 4x + 5 at (3, 2) meets the curve again.

```
dy/dx = 2x − 4, so m = 2 at x = 3; normal gradient −1/2
Normal: y − 2 = −(1/2)(x − 3)  →  y = −x/2 + 7/2
Solve with the curve:
x² − 4x + 5 = −x/2 + 7/2
2x² − 8x + 10 = −x + 7
2x² − 7x + 3 = 0
(2x − 1)(x − 3) = 0  →  x = 1/2 (x = 3 is P itself)
y = (1/2)² − 4(1/2) + 5 = 13/4
The normal meets the curve again at (1/2, 13/4).
```

Knowing that x = 3 must be a root is a useful check on the algebra: if (x − 3) is not a factor, an
earlier step is wrong.

### Worked example 4: a triangle with the axes

The tangent from worked example 1, y = 4x − 5, meets the x-axis at (5/4, 0) and the y-axis at
(0, −5). The triangle it forms with the axes has area

```
(1/2) × (5/4) × 5 = 25/8 square units
```

Lengths are distances, so use 5, not −5.

### Worked example 5: an unknown constant

The tangent to y = x² + k at the point where x = 1 passes through the origin. Find k.

```
Point: (1, 1 + k).  Gradient: dy/dx = 2x = 2
Tangent: y − (1 + k) = 2(x − 1)
Through (0, 0): −(1 + k) = −2  →  k = 1
```

## Using technology

On Paper 2 the GDC can find the value of a derivative at a point (and some models draw the tangent
and give its equation). You still need to write the equation of the line, and for a normal you must
calculate −1/m yourself.

**Example.** Find the equation of the tangent to y = x³ − 2x at x = 1.3.

```
y(1.3) = 2.197 − 2.6 = −0.403
GDC: dy/dx at x = 1.3 is 3.07
Tangent: y + 0.403 = 3.07(x − 1.3)  →  y = 3.07x − 4.39 (3 s.f.)
```

Keep the unrounded values in the calculator until the final line.

For the normal at the same point, the gradient is −1/3.07 = −0.326 (3 s.f.), so
y + 0.403 = −0.326(x − 1.3), giving y = −0.326x + 0.0205 (3 s.f.). Using the rounded gradient 3.07
rather than the stored value changes nothing at three significant figures here, but on steeper curves
it can.

## Common mistakes

- Using f(x₁) instead of f′(x₁) as the gradient.
- Using m for the normal, or −m, or 1/m, instead of −1/m.
- Substituting x₁ into f′ to find y₁.
- Leaving the gradient as a function: the tangent's gradient is a number, f′(x₁), not f′(x).
- Writing the normal at a stationary point as y = something instead of the vertical line x = x₁.
- Not giving the form asked for, for example "ax + by + d = 0 where a, b, d ∈ ℤ".

## Exam technique and command words

- **Find the equation**: show y₁, m and the substitution into y − y₁ = m(x − x₁); each is a typical
  method mark.
- **Show that** the tangent is a given line: rearrange your equation until it matches exactly.
- **Hence**: use the tangent or normal just found, for instance to find an intersection or an area.
- **Write down** the gradient of the normal: −1/m, with no working needed once m is known.

## Where to go next

Condense the section with the
[5.4 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4-revision-notes/),
then try the
[5.4 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-4-practice/).
With the rules in the
[5.6 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-6/)
you can find tangents and normals to exponential, logarithmic and trigonometric curves in exactly the
same way.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.4: tangents and normals at a given point, and their
equations, using both analytic approaches and technology.
