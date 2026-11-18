---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.17 Vector equations of a plane (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.17
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-17"
description: "IB Maths AA HL study guide to section 3.17: the three equations of a plane, converting between them and building a plane from points, lines and normals."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deep on one syllabus section of IB Diploma Programme Mathematics: Analysis and Approaches
(first assessment 2021): **3.17, vector equations of a plane**. It is HL only (AHL). The section asks you
to use three forms of a plane's equation: the parametric vector form r = a + λb + μc, the scalar product
form r · n = a · n, and the Cartesian form ax + by + cz = d.

For the whole vectors unit (3.12 to 3.18) in one place, see the
[vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/). This
page assumes you can already use the scalar product (3.13), line equations (3.14) and the vector product
(3.16), and concentrates on the decisions that make plane questions go right or wrong.

Vectors are written in rows here, such as (2, −1, 3). Write them as columns in the exam.

## What a plane needs

A line is fixed by one point and one direction. A plane needs more, and there are two equally good ways to
pin it down:

- **One point and two non-parallel directions.** If a is the position vector of a point in the plane and b
  and c are non-parallel vectors lying in it, every point of the plane is r = a + λb + μc for some real
  numbers λ and μ. Two parameters are needed because a plane is two-dimensional.
- **One point and a normal.** A normal n is perpendicular to every vector in the plane. For any point R in
  the plane, the vector from A to R lies in the plane, so (r − a) · n = 0, which rearranges to
  r · n = a · n.

Expanding r · n = a · n with r = (x, y, z) and n = (p, q, s) gives px + qy + sz = a · n, the Cartesian form.
So **the coefficients of x, y and z are the components of a normal**, and the constant on the right is the
scalar product of the normal with any point in the plane.

Why b and c must be non-parallel: if c = kb, every point a + λb + μkb lies on one line, so the "plane" has
collapsed to a line. The same idea explains why three collinear points do not define a unique plane.

## Converting between the three forms

| From | To | Method |
|---|---|---|
| r = a + λb + μc | r · n = a · n | n = b × c, then find a · n |
| r · n = a · n | ax + by + cz = d | Multiply out the scalar product with r = (x, y, z) |
| ax + by + cz = d | r = a + λb + μc | Find three non-collinear points (intercepts are often easiest), then two direction vectors between them |

When converting from Cartesian to parametric form, check your two directions: each must give zero when
dotted with the normal, and they must not be parallel to each other. A useful shortcut is that any vector
(q, −p, 0) is perpendicular to n = (p, q, s), so you can often write a direction down by inspection.

A plane has infinitely many correct equations. The Cartesian equation 2x − y + 3z = 6 and 4x − 2y + 6z = 12
describe the same plane, and a parametric form can use any point and any pair of non-parallel directions
in the plane. So check that your answer is correct rather than trying to match a "standard" form.

## Building a plane from the information given

Most questions give you geometric information rather than an equation. Each situation reduces to "a point
and two directions" or "a point and a normal":

- **Three non-collinear points A, B, C:** directions AB and AC; normal AB × AC.
- **A line and a point P not on it:** the line's direction b, and the vector from a point on the line to P;
  normal is the cross product of these.
- **Two intersecting lines:** the two direction vectors; any point on either line.
- **Two parallel (distinct) lines:** one direction is shared, so take the second direction from a point on
  one line to a point on the other.
- **Through P, perpendicular to a given line:** the line's direction is the normal.
- **Through P, parallel to a given plane:** keep the normal, change d by substituting P.
- **Containing a line and perpendicular to a given plane:** the given plane's normal lies in the new plane,
  so the new normal is (line direction) × (given normal).

Special planes are worth recognising. The plane z = 0 is the plane containing the x- and y-axes; x = 3 is
parallel to the plane containing the y- and z-axes; and an equation with no z term, such as x − 2y = 0, has
normal (1, −2, 0), so the plane is parallel to the z-axis (here it contains it, because the origin
satisfies the equation).

## Worked example 1: a plane from a line and a point

The line L has equation r = (2, −1, 0) + t(1, 3, −1). The point P(4, 1, 3) does not lie on L. Find the
equation of the plane containing L and P in all three forms.

```
Point on L:   A(2, −1, 0)
Directions:   b = (1, 3, −1)   and   AP = (4, 1, 3) − (2, −1, 0) = (2, 2, 3)

Parametric:   r = (2, −1, 0) + λ(1, 3, −1) + μ(2, 2, 3)

Normal:       n = b × AP
                = ((3)(3) − (−1)(2), (−1)(2) − (1)(3), (1)(2) − (3)(2))
                = (11, −5, −4)
a · n = (2)(11) + (−1)(−5) + (0)(−4) = 27

Scalar product form:  r · (11, −5, −4) = 27
Cartesian:            11x − 5y − 4z = 27

Check with P: 11(4) − 5(1) − 4(3) = 44 − 5 − 12 = 27 ✓
```

The check costs ten seconds and catches the most common error, a slip in the middle component of the
cross product.

## Worked example 2: Cartesian to parametric

Write the plane 2x − y + 3z = 6 in the form r = a + λb + μc.

```
Intercepts:  x-axis (3, 0, 0),  y-axis (0, −6, 0),  z-axis (0, 0, 2)
a = (3, 0, 0)
b = (0, −6, 0) − (3, 0, 0) = (−3, −6, 0), simplified to (1, 2, 0)
c = (0, 0, 2) − (3, 0, 0) = (−3, 0, 2)

Checks with n = (2, −1, 3):
  n · b = 2 − 2 + 0 = 0 ✓     n · c = −6 + 0 + 6 = 0 ✓
  b and c are not parallel ✓

r = (3, 0, 0) + λ(1, 2, 0) + μ(−3, 0, 2)
```

Simplifying b to (1, 2, 0) is allowed because any non-zero multiple of a direction vector is still a
direction in the plane. If the plane passed through the origin, the intercepts would all be the origin; in
that case pick any two other points that satisfy the equation.

## Worked example 3: a plane through a point, perpendicular to a line

Find the Cartesian equation of the plane through Q(1, −2, 4) that is perpendicular to the line
r = (0, 5, 1) + s(3, 0, −2).

```
n = (3, 0, −2)                    (the line's direction)
d = (1)(3) + (−2)(0) + (4)(−2) = −5
3x − 2z = −5
```

There is no y term because the normal has a zero y-component: the plane is parallel to the y-axis.

## Common mistakes

- Using a point's position vector as a normal, or using the constant d as a component of the normal.
- Writing r = a + λb + μc with b and c parallel, often after taking AB and BA as the "two" directions.
- Copying the coefficients of the line into the plane's equation: the direction of a line perpendicular to
  a plane is the plane's normal, not a vector in the plane.
- Finding the normal correctly but substituting the wrong point to get d, so the equation describes a
  parallel plane.
- Using the same parameter for both directions, as in r = a + λb + λc, which describes only a line.
- Forgetting to check that three given points are not collinear before treating them as defining a plane.

## Exam technique

Section 3.17 can appear on any HL paper. On Paper 1 (no technology) you need the cross product and
the arithmetic by hand, so set out components one line at a time. On Papers 2 and 3 a GDC may help with
arithmetic, but cross products are still expected as working.

- **"Show that"** a point or line lies in a plane: substitute and show every step ending in the given
  value. For a line, show both that one point satisfies the equation and that the direction is
  perpendicular to the normal.
- **"Find the Cartesian equation"**: give an equation in x, y and z, not a vector form, and clear
  common factors where you can.
- **"Write down"** a normal: no working needed; read the coefficients.
- **"Hence"**: use the vector or plane you found in the previous part. A "hence" part solved another way may
  lose marks.
- **"Verify"**: substitute and state the conclusion, for example "so P lies in Π".

Plane equations are rarely the end of a question. They are the first step of a 3.18 intersection or angle
question, so an early error carries through. Checking every given point in your plane equation before
moving on is the single most valuable habit in this section.

## Where to go next

Condense this section with the [3.17 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17-revision-notes/),
then test yourself on the [3.17 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17-practice/).
Section 3.18 uses these equations to find where lines and planes meet: see the
[3.18 intersections of lines and planes study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-18/).

## Official syllabus

International Baccalaureate Organization, *Mathematics: analysis and approaches guide*, first assessment
2021, section 3.17 (AHL): vector equation of a plane r = a + λb + μc; equation of a plane using the normal
vector, r · n = a · n; Cartesian equation of a plane, ax + by + cz = d.
