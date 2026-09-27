---
title: "IB DP Mathematics: Analysis and Approaches -- Vectors, lines and planes (HL) Study Guide"
seoTitle: "IB Maths AA HL Vectors, Lines and Planes Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Vectors, lines and planes (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-17"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-18"
description: "Learn IB DP Maths AA HL vectors from scratch: scalar and vector products, lines, planes, intersections and angles, with fully worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the vectors, lines and planes unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 3.12–3.18. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

Afterwards, use the [vectors revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/) for final-weeks recall and the [vectors practice questions](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-practice/) to test yourself. For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/), the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) and the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/).

Vectors are written here in a row, such as (2, −1, 3); in the exam, write them as columns.

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 3.12 | Use position and displacement vectors, i, j, k and components; add, subtract and scale; find magnitudes and unit vectors; write vector proofs | HL only |
| 3.13 | Use the scalar product; find the angle between two vectors; test for perpendicular and parallel vectors | HL only |
| 3.14 | Write the equation of a line in vector, parametric and Cartesian form; find the angle between two lines; apply lines to simple kinematics | HL only |
| 3.15 | Decide whether two lines are coincident, parallel, intersecting or skew; find points of intersection | HL only |
| 3.16 | Use the vector product and its properties; find the area of a parallelogram or triangle | HL only |
| 3.17 | Write the equation of a plane in vector form, as r · n = a · n, and in Cartesian form ax + by + cz = d | HL only |
| 3.18 | Find intersections of a line and a plane, two planes and three planes; find line–plane and plane–plane angles | HL only |

## 3.12 Vectors: the basics

The position vector of A is OA = a, from the origin O to A. A displacement vector joins two points:

```
AB = b − a
```

The base vectors i, j and k are unit vectors along the x-, y- and z-axes, so v = v₁i + v₂j + v₃k = (v₁, v₂, v₃).

- Add and subtract component by component; a + b is the diagonal of the parallelogram with sides a and b.
- The zero vector 0 has every component 0. The vector −v has the same magnitude as v and the opposite direction.
- kv is a scalar multiple. Two non-zero vectors are **parallel** when one is a scalar multiple of the other.
- The magnitude is |v| = √(v₁² + v₂² + v₃²). The distance between A and B is |AB|.
- A unit vector in the direction of v is v/|v|.

### Worked example 1

A(2, −1, 3) and B(5, 3, 3). Find AB, the distance AB and a unit vector in the direction of AB.

```
AB = b − a = (5 − 2, 3 − (−1), 3 − 3) = (3, 4, 0)
|AB| = √(9 + 16 + 0) = 5
unit vector = (1/5)(3, 4, 0) = (3/5, 4/5, 0)
```

p = (2, −4, 6) and q = (−3, 6, −9) are parallel, since q = −(3/2)p.

### Worked example 2: a vector proof

In triangle OAB, M is the midpoint of OA and N is the midpoint of OB. Prove that MN is parallel to AB and half its length.

```
OM = ½a,  ON = ½b
MN = ON − OM = ½b − ½a = ½(b − a) = ½AB
```

MN is a scalar multiple of AB, so they are parallel, and |MN| = ½|AB|. Write every vector in terms of the given vectors, then state the conclusion in words.

## 3.13 The scalar product

For v = (v₁, v₂, v₃) and w = (w₁, w₂, w₃):

```
v · w = v₁w₁ + v₂w₂ + v₃w₃ = |v||w| cos θ
```

where θ is the angle between v and w. The answer is a number, not a vector. The properties the guide lists are v · w = w · v, u · (v + w) = u · v + u · w, (kv) · w = k(v · w) and v · v = |v|².

- For non-zero vectors, v · w = 0 means v and w are **perpendicular**.
- For parallel vectors, |v · w| = |v||w|.

### Worked example 3

Find the angle between u = (1, 2, −2) and v = (3, 0, 4).

```
u · v = 3 + 0 − 8 = −5
|u| = √(1 + 4 + 4) = 3,  |v| = √(9 + 0 + 16) = 5
cos θ = −5/15 = −1/3
θ = 109° (3 s.f.), or 1.91 radians
```

A negative scalar product means an obtuse angle. Find k so that (2, k, 1) is perpendicular to (1, 3, −4): 2 + 3k − 4 = 0, so k = 2/3.

## 3.14 Equations of lines

A line through the point with position vector a in the direction b has vector equation

```
r = a + λb
```

a fixes one point on the line; b fixes its direction. With a = (x₀, y₀, z₀) and b = (l, m, n), the other two forms are:

```
Parametric:  x = x₀ + λl,  y = y₀ + λm,  z = z₀ + λn
Cartesian:   (x − x₀)/l = (y − y₀)/m = (z − z₀)/n
```

The angle between two lines is the angle between their direction vectors, found with the scalar product. Give the acute angle: use |b₁ · b₂| in the numerator.

**Kinematics.** If r = a + tb gives the position of an object at time t, then a is the starting position, b is the velocity and |b| is the speed.

### Worked example 4

Find a vector equation of the line through A(1, −2, 4) and B(3, 1, 2), and write it in Cartesian form.

```
direction b = AB = (3 − 1, 1 − (−2), 2 − 4) = (2, 3, −2)
r = (1, −2, 4) + λ(2, 3, −2)
(x − 1)/2 = (y + 2)/3 = (z − 4)/(−2)
```

The acute angle between this line and a line with direction (1, 1, 0):

```
cos θ = |2 + 3 + 0| / (√17 × √2) = 5/√34
θ = 31.0° (3 s.f.)
```

A boat has position r = (2, 5) + t(3, −4) km, t hours after noon. Its velocity is (3, −4) km h⁻¹, its speed is √(9 + 16) = 5 km h⁻¹, and at 2 pm it is at (8, −3).

## 3.15 How two lines meet

In three dimensions two lines are one of four types:

| Directions parallel? | Common point? | Lines are |
|---|---|---|
| Yes | Yes | Coincident (the same line) |
| Yes | No | Parallel |
| No | Yes | Intersecting (exactly one point) |
| No | No | Skew |

Skew lines are non-parallel lines that do not intersect.

**Method.** Check the directions first. If they are not parallel, equate the two lines using **different** parameters, λ and μ. Solve two component equations, then test the third: true means intersecting, false means skew.

### Worked example 5

L₁: r = (1, 2, 3) + λ(1, −1, 2) and L₂: r = (4, 2, 8) + μ(1, 2, 1).

The directions are not multiples of each other. Equate components:

```
x: 1 + λ = 4 + μ
y: 2 − λ = 2 + 2μ   →  λ = −2μ
Substitute: 1 − 2μ = 4 + μ  →  μ = −1, λ = 2
z check: 3 + 2(2) = 7 and 8 + (−1) = 7   ✓
```

The lines intersect at (3, 0, 7).

## 3.16 The vector product

The vector product (also called the cross product) of v = (v₁, v₂, v₃) and w = (w₁, w₂, w₃) is

```
v × w = (v₂w₃ − v₃w₂,  v₃w₁ − v₁w₃,  v₁w₂ − v₂w₁)
```

v × w = |v||w| sin θ n, where n is the unit normal given by the right-hand screw rule. So v × w is perpendicular to both v and w, which is why it gives normals to planes.

Properties: v × w = −w × v; u × (v + w) = u × v + u × w; (kv) × w = k(v × w); v × v = 0. For non-zero vectors, v × w = 0 means v and w are parallel.

|v × w| is the area of the parallelogram with sides v and w. Half of it is the area of the triangle.

### Worked example 6

Find the area of the triangle with vertices A(1, 0, 0), B(3, 1, −1) and C(2, 3, 2).

```
AB = (2, 1, −1),  AC = (1, 3, 2)
AB × AC = (1×2 − (−1)×3,  (−1)×1 − 2×2,  2×3 − 1×1) = (5, −5, 5)
|AB × AC| = √75 = 5√3
Area = ½ × 5√3 = 5√3/2
```

## 3.17 Equations of planes

A plane has three equivalent forms:

```
Vector (parametric):  r = a + λb + μc     (b, c non-parallel vectors in the plane)
Scalar product:       r · n = a · n        (n a normal, a a point in the plane)
Cartesian:            ax + by + cz = d     (n = (a, b, c))
```

The coefficients of x, y and z form a normal vector.

### Worked example 7

Find the Cartesian equation of the plane through A, B and C from worked example 6.

```
n = AB × AC = (5, −5, 5), so use (1, −1, 1)
a · n = (1, 0, 0) · (1, −1, 1) = 1
x − y + z = 1
Check B: 3 − 1 − 1 = 1 ✓   Check C: 2 − 3 + 2 = 1 ✓
```

A vector equation is r = (1, 0, 0) + λ(2, 1, −1) + μ(1, 3, 2).

## 3.18 Intersections and angles with planes

**Line and plane.** Substitute the parametric form of the line into the plane's equation and solve for the parameter. No solution: the line is parallel to the plane. Every value works: the line lies in the plane.

**Angle between a line and a plane.** If the line has direction b and the plane has normal n, the angle φ between the line and the plane satisfies

```
sin φ = |b · n| / (|b||n|)
```

(The angle with the normal is 90° − φ.)

**Two planes.** Non-parallel planes meet in a line. Its direction is n₁ × n₂; find one point by fixing one coordinate (for example z = 0) and solving. The angle between two planes is the angle between their normals; give the acute angle.

**Three planes.** Solve the system of three linear equations (see AHL 1.16). The solution set tells you the geometry:

| Solutions | Geometry |
|---|---|
| One | The planes meet at a single point |
| Infinitely many (a line) | The planes meet in a common line, like pages of a book |
| Infinitely many (a plane) | All three planes are the same plane |
| None | Two or more planes are parallel, or the planes meet in pairs in three parallel lines (a triangular prism) |

### Worked example 8

Line r = (1, 2, −1) + t(1, 1, 2) and plane Π₁: x − y + z = 1.

```
(1 + t) − (2 + t) + (−1 + 2t) = 1  →  2t − 2 = 1  →  t = 3/2
Point: (5/2, 7/2, 2)
sin φ = |1 − 1 + 2| / (√6 × √3) = 2/√18 = √2/3
φ = 28.1° (3 s.f.)
```

Now take Π₂: x + 2y + 3z = 7.

```
Line direction: (1, −1, 1) × (1, 2, 3) = (−5, −2, 3)
Put z = 0: x − y = 1 and x + 2y = 7  →  x = 3, y = 2
Line: r = (3, 2, 0) + t(−5, −2, 3)
cos θ = |1 − 2 + 3| / (√3 × √14) = 2/√42  →  θ = 72.0°
```

The planes x + y + z = 6, 2x − y + z = 3 and x + 2y − z = 2 meet at the single point (1, 2, 3).

## Using your GDC

HL Paper 1 allows no technology; Papers 2 and 3 require it. On Paper 1 do everything by hand, including solving for intersections. On Papers 2 and 3 a GDC can solve 3 × 3 systems and find inverse cosines and sines. Write down the equations before giving the GDC's answer.

## Common errors

- One parameter for two different lines when testing for intersection.
- Calling lines skew without checking the directions are not parallel.
- Using cos instead of sin for the angle between a line and a plane.
- An obtuse angle between two lines or two planes.
- Getting the middle component of v × w wrong: it is v₃w₁ − v₁w₃, not v₁w₃ − v₃w₁.
- The wrong normal: for 2x − y + 3z = 5 it is (2, −1, 3), not (2, −1, 5).

## Where to go next

Condense the unit with the [revision notes](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-revision-notes/), then test yourself on the [practice questions](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes-practice/). The [AA subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) covers the whole course.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
