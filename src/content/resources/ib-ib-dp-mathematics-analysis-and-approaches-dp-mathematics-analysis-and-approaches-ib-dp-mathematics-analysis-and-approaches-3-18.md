---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.18 Intersections of lines and planes (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 – Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.18
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-18"
description: "IB Maths AA HL study guide to section 3.18: where a line meets a plane, two and three planes intersecting, and line-plane and plane-plane angles."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches (first
assessment 2021): **3.18, intersections of lines and planes**. It is HL only (AHL). The section asks you to
find the intersection of a line with a plane, of two planes and of three planes, and to find the angle
between a line and a plane and between two planes.

The [vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/)
introduces each case briefly. This page goes further: how to predict the outcome before you calculate,
what to do when the usual shortcut fails, how to read the geometry from a system of equations, and how
3.18 questions are built in the exam. It assumes the plane equations of
[section 3.17](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17/).

Vectors are written in rows here; write them as columns in the exam.

## A line and a plane

Take a line r = a + tb and a plane r · n = d. There are three possibilities, and the scalar product b · n
tells you which group you are in before any substitution:

| b · n | Geometry | What substitution gives |
|---|---|---|
| Not zero | The line crosses the plane at one point | One value of t |
| Zero, and a point of the line satisfies the plane | The line lies in the plane | An identity such as 5 = 5 (every t works) |
| Zero, and a point of the line does not satisfy the plane | The line is parallel to the plane, never meeting it | A contradiction such as 2 = 6 |

To find the point, write x, y and z in terms of t, substitute into the Cartesian equation, solve for t and
substitute back.

### Worked example 1

Find where the line r = (3, −1, 2) + t(1, 2, −1) meets the plane 2x − y + 3z = 4, and the acute angle
between them.

```
x = 3 + t,  y = −1 + 2t,  z = 2 − t
2(3 + t) − (−1 + 2t) + 3(2 − t) = 4
6 + 2t + 1 − 2t + 6 − 3t = 4
13 − 3t = 4   →   t = 3
Point: (6, 5, −1)          Check: 12 − 5 − 3 = 4 ✓

b · n = (1)(2) + (2)(−1) + (−1)(3) = −3
|b| = √6,  |n| = √14
sin φ = |−3| / (√6 √14) = 3/√84
φ = 19.1°  (3 s.f.)
```

The angle between a line and a plane is measured between the line and its projection on the plane. The
formula uses sine because the angle between b and n is the complement, 90° − φ. The modulus makes the
answer acute whichever way b and n point.

### The foot of the perpendicular

A frequent application: the shortest distance from a point P to a plane is along the normal. Form the line
through P with direction n, intersect it with the plane, and you have the **foot of the perpendicular** F.
The distance PF is the shortest distance, and continuing the same distance beyond F gives the
**reflection** of P in the plane.

### Worked example 2

Find the foot of the perpendicular from P(5, 2, −3) to the plane x + 2y − 2z = 3, the shortest distance
from P to the plane, and the reflection of P in the plane.

```
Line through P along n:  r = (5, 2, −3) + t(1, 2, −2)
(5 + t) + 2(2 + 2t) − 2(−3 − 2t) = 3
15 + 9t = 3   →   t = −4/3
F = (5 − 4/3, 2 − 8/3, −3 + 8/3) = (11/3, −2/3, −1/3)

PF = |t| |n| = (4/3)(3) = 4
Reflection: t = 2 × (−4/3) = −8/3   →   (7/3, −10/3, 7/3)
```

Doubling the parameter is quicker than finding F and then adding the vector PF again.

## Two planes

Two planes are either parallel (normals are scalar multiples) or they meet in a line.

- **Parallel and distinct:** normals are multiples but the equations are not. No intersection.
- **Coincident:** one whole equation is a multiple of the other.
- **Meeting in a line:** the line's direction is perpendicular to both normals, so it is n₁ × n₂. For a
  point, set one variable equal to a convenient value and solve the remaining pair of equations.

**When the shortcut fails.** Setting z = 0 works only if the line actually crosses the plane z = 0. If the
direction vector has a zero z-component, the line may never reach z = 0, and the pair of equations you get
will be inconsistent. Look at n₁ × n₂ first and set to zero a variable whose component is non-zero.

An alternative that always works: let one variable equal a parameter t, solve for the other two in terms
of t, and read off the line directly.

### Worked example 3

Find the line of intersection of x + y − z = 2 and 2x − y + z = 1, and the angle between the planes.

```
n₁ × n₂ = (1, 1, −1) × (2, −1, 1)
        = ((1)(1) − (−1)(−1), (−1)(2) − (1)(1), (1)(−1) − (1)(2))
        = (0, −3, −3),  so use (0, 1, 1)
```

The x-component is zero, so setting x = 0 would fail: adding the two equations gives 3x = 3, so every point
on the line has x = 1. Set z = 0 instead: x + y = 2 and 2x − y = 1 give x = 1, y = 1.

```
Line:  r = (1, 1, 0) + t(0, 1, 1)
Angle: n₁ · n₂ = 2 − 1 − 1 = 0, so the planes are perpendicular (90°)
```

The angle between two planes is the angle between their normals. Use the modulus of the scalar product to
give the acute angle.

## Three planes

Three planes correspond to a system of three linear equations (section 1.16). The number of solutions
gives the geometry, and the normals tell you which "no solution" picture applies.

| Solutions | Normals | Geometry |
|---|---|---|
| Exactly one | Do not all lie in one plane | Meet at a single point |
| A line of solutions | Lie in one plane, no two parallel | A sheaf: all three share a common line |
| None | At least two parallel | Two parallel planes, each cut by the third (or all three parallel) |
| None | Lie in one plane, no two parallel | A triangular prism: each pair meets in a line, the three lines are parallel |
| A plane of solutions | All parallel, equations multiples | All three coincide |

On Paper 1, solve by elimination: reduce to two equations in two unknowns, then to one. A row that becomes
0 = 0 signals infinitely many solutions; a row such as 0 = 3 signals none. On Papers 2 and 3, a GDC solves
systems with a unique solution, but you still need algebra when a parameter is involved.

### Worked example 4

The planes are x + y + z = 1, x − y + 2z = 3 and 2x + 3z = k. Find k for which the planes meet in a line,
find that line, and describe the arrangement for other values of k.

```
(first) + (second):   2x + 3z = 4
Compare with third:   2x + 3z = k
k = 4: third equation adds nothing → infinitely many solutions (a line)
k ≠ 4: 4 = k is false → no solution
```

For k = 4, let z = t. Then 2x = 4 − 3t, so x = 2 − 1.5t, and y = 1 − x − z = −1 + 0.5t. Doubling the
direction to clear fractions:

```
r = (2, −1, 0) + t(−3, 1, 2)
Check (2, −1, 0): 2 − 1 + 0 = 1 ✓   2 + 1 + 0 = 3 ✓   4 + 0 = 4 ✓
```

For k ≠ 4, the normals (1, 1, 1), (1, −1, 2) and (2, 0, 3) contain no parallel pair, so the planes form a
triangular prism.

## Common mistakes

- Using cos instead of sin for the line-plane angle, or forgetting that the plane-plane angle comes from the
  normals, not from directions inside the planes.
- Giving an obtuse angle when the question asks for the acute angle: take the modulus of the scalar product.
- Setting z = 0 to find a point on a line of intersection whose direction has zero z-component.
- Stating "no solution, so the planes are parallel" without checking the normals: a prism also has no
  solution.
- Finding t correctly but not substituting back to give coordinates.
- In foot-of-perpendicular questions, using a direction other than the normal.

## Exam technique

3.18 questions are usually the last parts of a multi-part vectors question, after 3.17 has produced the
plane. Command words matter:

- **"Find the coordinates"**: give a point, not a parameter value.
- **"Show that the line lies in the plane"**: substitute and simplify to an identity, or show b · n = 0 and
  one point satisfies the equation. State the conclusion.
- **"Find the acute angle"**: give degrees to 3 significant figures unless told otherwise; radians only if
  asked.
- **"Describe the geometrical relationship"** (three planes): use the words point, line (sheaf), prism or
  parallel, and give a reason from the algebra or the normals.
- **"Hence"**: use the line or point you have just found. A shortest-distance question that follows a foot
  of the perpendicular expects you to use that foot.

## Where to go next

Use the [3.18 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18-revision-notes/)
for recall and the [3.18 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18-practice/)
to test yourself. For linear systems without the geometry, see the
[counting principles, partial fractions, proof and linear systems study guide](/resources/ib-dp-mathematics-aa-hl-counting-partial-fractions-proof-systems/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 3.18 (AHL): intersections of a line with a plane, two planes and three planes; angle between
a line and a plane, and between two planes.
