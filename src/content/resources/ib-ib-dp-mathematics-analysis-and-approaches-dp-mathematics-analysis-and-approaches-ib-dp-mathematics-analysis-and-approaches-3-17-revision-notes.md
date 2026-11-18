---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.17 Vector equations of a plane (AHL only) -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 – Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.17
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-17"
description: "Revision notes for IB Maths AA HL 3.17 vector equations of a plane: the three forms, conversions, key terms, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense syllabus section **3.17, vector equations of a plane**, of IB DP Mathematics:
Analysis and Approaches (first assessment 2021, HL only). For explanations and full worked examples, use
the [3.17 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17/);
for the wider vectors unit, see the
[vectors, lines and planes revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/).

## The three forms

```
Parametric vector form:   r = a + λb + μc     a: point;  b, c: non-parallel directions in the plane
Scalar product form:      r · n = a · n        n: normal;  a: any point in the plane
Cartesian form:           ax + by + cz = d     normal (a, b, c)
```

- Two parameters (λ and μ) because a plane is two-dimensional; a line has one.
- r · n = a · n comes from (r − a) · n = 0: every vector lying in the plane is perpendicular to n.
- In ax + by + cz = d, the right-hand side d equals n · (any point in the plane). If d = 0, the plane passes
  through the origin.

## Conversions at a glance

| Start | Goal | Steps |
|---|---|---|
| Parametric | Normal form | n = b × c; compute a · n |
| Normal form | Cartesian | Expand (x, y, z) · n |
| Cartesian | Parametric | Three non-collinear points (try the intercepts), two directions between them |
| Three points | Any form | Directions AB and AC; n = AB × AC |

Quick direction vectors for Cartesian to parametric: if n = (p, q, s), then (q, −p, 0), (s, 0, −p) and
(0, s, −q) are all perpendicular to n. Choose two that are non-zero and not parallel.

## Recognising planes from their equations

| Equation | What it tells you |
|---|---|
| Missing z term, e.g. 2x + y = 4 | Normal has zero z-component; plane is parallel to the z-axis |
| x = k | Plane parallel to the one containing the y- and z-axes |
| Two equations with normals that are multiples | Planes are parallel (or the same plane if the equations are multiples too) |
| d = 0 | Plane contains the origin |

## Key terms

| Term | Meaning |
|---|---|
| Normal vector | A non-zero vector perpendicular to every vector in the plane |
| Direction vector (of a plane) | A vector lying in the plane; two non-parallel ones are needed |
| Position vector | Vector from the origin O to a point; a in each form is one |
| Parameter | A real variable, λ or μ, that runs over all values to trace out the plane |
| Coplanar | Lying in the same plane |
| Collinear | Lying on the same straight line; three collinear points do not fix a plane |
| Parallel planes | Planes whose normals are scalar multiples of each other |

## Building a plane: what to use

- Three points A, B, C: n = AB × AC, after checking AB is not a multiple of AC.
- A line r = p + tb and a point Q off it: n = b × PQ.
- Two parallel lines: n = (shared direction) × (vector joining a point on each line).
- Perpendicular to a line through a point: normal = the line's direction.
- Parallel to a given plane through a point: same normal, new d.
- Containing a line and perpendicular to a plane with normal m: n = b × m.

## Exam traps

- **Wrong d.** After finding n, substitute a point that is actually in the plane. Then check a second
  given point.
- **Parallel directions.** AB and BA, or (1, 2, −1) and (−2, −4, 2), are parallel and cannot be b and c
  together.
- **Middle component of the cross product.** For b × c it is b₃c₁ − b₁c₃. A sign error here is the most
  common source of a wrong normal.
- **One parameter for two directions.** r = a + λb + λc is a line, not a plane.
- **Line in a plane.** To show a line lies in a plane you need both a point on the line in the plane and the
  line's direction perpendicular to n. One check alone is not enough.
- **Cartesian means x, y and z.** A "Cartesian equation" answer left as r · n = d may not earn the mark.

## Self-test

1. Write down a normal vector to the plane 4x − 7z = 3.
2. State why r = a + λb + μc needs two parameters.
3. The plane Π has equation r · (2, −1, 5) = 9. Write Π in Cartesian form.
4. Find the Cartesian equation of the plane through (1, 3, −2) with normal (3, −1, 2).
5. Find d so that the plane 2x + 3y − z = d passes through (4, −1, 2).
6. The plane r = (0, 1, 2) + λ(1, 1, 0) + μ(0, 1, 1). Find a normal vector.
7. Does the point (2, 0, 1) lie in the plane x − 4y + 2z = 4?
8. Give a vector perpendicular to n = (5, 2, −3) with zero z-component.
9. Find the plane through the origin parallel to 6x − y + z = 11.
10. The points A(1, 1, 1), B(2, 3, 0) and C(4, 7, −2) are given. Explain why they do not define a unique
    plane.
11. A plane contains the line r = (1, 0, 0) + t(0, 1, 1) and the point (3, 2, 0). Find its Cartesian
    equation.
12. Are the planes x − 2y + 4z = 3 and −2x + 4y − 8z = −6 parallel, distinct or the same?

### Answers

1. (4, 0, −7). The missing y term means a zero component.
2. A plane is two-dimensional, so reaching every point needs movement along two independent directions.
3. 2x − y + 5z = 9.
4. 3(1) − 3 + 2(−2) = −4, so 3x − y + 2z = −4.
5. d = 8 − 3 − 2 = 3.
6. (1, 1, 0) × (0, 1, 1) = (1, −1, 1), or any non-zero multiple.
7. 2 − 0 + 2 = 4, so yes.
8. (2, −5, 0), since 10 − 10 + 0 = 0 (any non-zero multiple also works).
9. 6x − y + z = 0.
10. AB = (1, 2, −1) and AC = (3, 6, −3) = 3AB, so the points are collinear; infinitely many planes contain
    that line.
11. Directions (0, 1, 1) and (3, 2, 0) − (1, 0, 0) = (2, 2, 0). Normal (0, 1, 1) × (2, 2, 0) = (−2, 2, −2),
    simplified to (1, −1, 1). Using (1, 0, 0): x − y + z = 1. Check (3, 2, 0): 3 − 2 + 0 = 1 ✓.
12. The second equation is −2 times the first, including the constant, so they are the same plane.

## Where to go next

Practise with the [3.17 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17-practice/),
then move on to the [3.18 intersections of lines and planes revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18-revision-notes/).
