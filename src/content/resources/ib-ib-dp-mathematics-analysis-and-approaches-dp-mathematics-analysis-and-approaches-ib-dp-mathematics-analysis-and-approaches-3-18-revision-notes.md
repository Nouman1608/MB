---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.18 Intersections of lines and planes (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.18
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-18"
description: "Revision notes for IB Maths AA HL 3.18: line-plane, two-plane and three-plane intersections, angles, key terms, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **3.18, intersections of lines and planes**, of IB DP Mathematics:
Analysis and Approaches (first assessment 2021, HL only). For explanations and full worked examples, use the
[3.18 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18/).
Plane equations themselves are in the
[3.17 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17-revision-notes/).

## Line r = a + tb meets plane r · n = d

1. Write x, y, z in terms of t.
2. Substitute into the Cartesian equation and solve for t.
3. Substitute t back to get the point.

Predict first with b · n:

- b · n ≠ 0: exactly one point of intersection.
- b · n = 0 and a satisfies the plane: the line lies in the plane (substitution gives an identity).
- b · n = 0 and a does not satisfy the plane: parallel, no intersection (substitution gives a
  contradiction).

## Angles

```
Line and plane:   sin φ = |b · n| / (|b| |n|)
Two planes:       cos θ = |n₁ · n₂| / (|n₁| |n₂|)
```

- Line-plane uses **sine** because the angle between b and n is 90° − φ.
- Plane-plane uses the **normals**. The modulus gives the acute angle.
- b · n = 0 means the line is parallel to the plane (φ = 0°); b parallel to n means the line is
  perpendicular to the plane (φ = 90°).
- n₁ · n₂ = 0 means the planes are perpendicular.

## Two planes

| Normals | Equations | Result |
|---|---|---|
| Multiples | Not multiples | Parallel, no intersection |
| Multiples | Multiples (including the constant) | Same plane |
| Not multiples | | A line with direction n₁ × n₂ |

To find a point on the line, set to zero a variable whose component in n₁ × n₂ is **not** zero, or let one
variable equal t and solve for the others.

## Three planes

| Algebra | Geometry |
|---|---|
| One solution | Single point |
| Elimination gives 0 = 0, one free parameter | Sheaf: common line |
| Elimination gives a false statement; two or more normals parallel | Parallel planes cut by the third (or all parallel) |
| Elimination gives a false statement; no two normals parallel | Triangular prism |
| All three equations multiples of one another | Coincident planes |

## Foot of the perpendicular, distance and reflection

- Line through P with direction n; intersect with the plane at parameter t = t₀ to get the foot F.
- Shortest distance from P to the plane = |t₀| |n|.
- Reflection of P: the point at parameter 2t₀.

## Key terms

| Term | Meaning |
|---|---|
| Point of intersection | The single point common to a line and a plane, or to three planes |
| Line of intersection | The common line of two non-parallel planes |
| Sheaf | Three (or more) planes sharing one common line |
| Triangular prism (configuration) | Three planes meeting in pairs in three parallel lines, with no common point |
| Foot of the perpendicular | The point of the plane closest to a given point |
| Acute angle | The angle in [0°, 90°] that the formulas give when the modulus is used |
| Consistent system | A system of equations with at least one solution |

## Exam traps

- cos used for the line-plane angle: the answer is then 90° minus the correct angle.
- Directions inside the planes used for the plane-plane angle instead of normals.
- z = 0 chosen when n₁ × n₂ has zero z-component: the equations become inconsistent and students wrongly
  conclude the planes do not meet.
- "No solutions" taken to mean "parallel planes" without checking normals; a prism also has no solution.
- t found but not substituted back to give coordinates.
- Rounded parameter values carried forward: keep exact fractions on Paper 1.

## Self-test

1. Find where r = (1, 2, 0) + t(1, 1, 1) meets the plane x + y + z = 9.
2. The line r = (1, 0, 1) + t(2, −1, 3) and the plane x + 5y + z = 0. Do they meet?
3. State the formula for the angle between a line and a plane, and why it uses sine.
4. Describe the planes 3x − y + 2z = 1 and −6x + 2y − 4z = 5.
5. Find a vector equation of the line of intersection of x + z = 1 and y + z = 2.
6. Find the angle between the planes x + y = 3 and y + z = 1.
7. The line has direction (1, 1, 0). Find the angle it makes with the plane z = 0.
8. Find the shortest distance from the origin to the plane 2x − y + 2z = 9.
9. Find the reflection of the origin in the plane of question 8.
10. Eliminating variables from three plane equations gives 0 = 0. What does this suggest?
11. Three planes have no common point and no two normals are parallel. Describe the arrangement.
12. Why can setting z = 0 fail when finding a point on a line of intersection?

### Answers

1. 3 + 3t = 9, so t = 2 and the point is (3, 4, 2).
2. b · n = 2 − 5 + 3 = 0, so the line is parallel to the plane or in it. The point (1, 0, 1) gives
   1 + 0 + 1 = 2 ≠ 0, so the line is parallel and does not meet the plane.
3. sin φ = |b · n| / (|b||n|). The angle between b and the normal is 90° − φ, and cos(90° − φ) = sin φ.
4. Normals (3, −1, 2) and (−6, 2, −4) are parallel, but −2 × 1 = −2 ≠ 5, so the planes are parallel and
   distinct.
5. (1, 0, 1) × (0, 1, 1) = (−1, −1, 1). With z = 0: x = 1, y = 2. So r = (1, 2, 0) + t(−1, −1, 1).
6. n₁ · n₂ = (1, 1, 0) · (0, 1, 1) = 1, and both magnitudes are √2, so cos θ = 1/2 and θ = 60°.
7. b · n = (1, 1, 0) · (0, 0, 1) = 0, so the angle is 0°: the line is parallel to the plane.
8. Line t(2, −1, 2): 4t + t + 4t = 9 gives t = 1, foot (2, −1, 2), distance 1 × 3 = 3.
9. Parameter 2t = 2 gives (4, −2, 4).
10. One equation is a combination of the others, so (if there is no contradiction) the system has
    infinitely many solutions: the planes share a line, or more.
11. A triangular prism: each pair meets in a line and the three lines are parallel.
12. If the line's direction has zero z-component, the line lies at a fixed height and may never reach z = 0,
    so the equations with z = 0 have no solution.

## Where to go next

Test yourself on the [3.18 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18-practice/),
or revisit the whole unit with the
[vectors, lines and planes revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).
