---
title: "OxfordAQA International AS and A-level Mathematics: Vectors and vector equations of lines (9660)"
seoTitle: "OxfordAQA A-level Maths Vectors and Lines Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Vectors in two and three dimensions and vector equations of lines"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 199
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-maths-oxfordaqa-alevel-maths"
    subtopic: "p2-vectors-oxfordaqa-alevel-maths"
description: "Study guide to vectors in 2D and 3D, position vectors, distance and vector equations of lines, with worked intersections, parallel and skew lines (9660)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide follows the OxfordAQA International AS and A-level Mathematics specification (9660, Version 5.2) and covers the first part of section P2.10: vectors in two and three dimensions, and vector equations of lines. This content is part of International A-level (A2) Unit P2 (Pure Maths); it is not examined at International AS. The scalar product and perpendicular distance sit in other pages, so they are not taught here.

Related pages: [revision notes](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-revision-notes/), [practice questions](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice/), [exam preparation advice](/resources/oxfordaqa-a-level-mathematics-exam-preparation/), the [course hub](/boards/oxfordaqa/a-level/mathematics/) and the [printable checklist](/checklists/oxfordaqa/a-level/mathematics/). To find out which topics need work first, take a [free 10-minute diagnostic](/diagnostics/).

## What you must be able to do

The specification says column vectors will be used in questions, but you may use i, j, k notation if you prefer. Both are shown here.

| Specification content | What it means in practice |
|---|---|
| Vectors in two and three dimensions | Read, write and use vectors as columns or as ai + bj + ck |
| Magnitude | Find the length of a vector |
| Addition and scalar multiples | Combine vectors by components and explain the geometry |
| AB = OB − OA | Find the vector between two points from their position vectors |
| Parallel vectors | Recognise and use vectors that are scalar multiples |
| Position vectors, distance between two points | Use OA, find AB and |AB| |
| Lines r = a + tb | Write a line from a point and direction, or from two points |
| Intersection, parallel and skew lines | Decide whether two lines meet, and where |

In this page a column vector is written across the line, so (2, −3, 6) means the column with 2 on top, then −3, then 6. In your own answers, write columns vertically or use i, j, k.

## Vectors, components and magnitude

A vector has magnitude (size) and direction. In three dimensions the vector with components x, y, z is x i + y j + z k, where i, j, k are the unit vectors along the three axes. In two dimensions there is no k.

The **magnitude** is found with Pythagoras in three dimensions:

```
|(x, y, z)| = √(x² + y² + z²)
```

**Worked example 1.** Find the magnitude of p = (2, −3, 6) and of q = 4i − 4j + 7k.

```
|p| = √(4 + 9 + 36) = √49 = 7
|q| = √(16 + 16 + 49) = √81 = 9
```

The signs do not matter, because every component is squared. A vector whose magnitude is 1 is a **unit vector**; dividing any non-zero vector by its magnitude gives a unit vector in the same direction.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--01-magnitude-in-3d.webp" width="900" height="910" alt="A box with sides 3, 2 and 6: the floor diagonal is root 13, then the vector a = 3i + 2j + 6k has magnitude 7 (13 + 36 = 49). The angle with the z-axis has cosine 6/7, 31.0 degrees (AQA only; OCR excludes 3D direction)." loading="lazy">
  <figcaption>The 3D magnitude formula is Pythagoras applied twice, first on the floor and then up the height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--02-direction-quadrant.webp" width="900" height="1269" alt="Vectors -3i + 7j and 3i - 7j from the origin. Both have the calculator angle 66.8 degrees, but their directions anticlockwise from i are 113.2 degrees (second quadrant) and 293.2 degrees (fourth quadrant)." loading="lazy">
  <figcaption>The calculator gives only the acute angle, so sketch the vector and adjust for its quadrant.</figcaption>
</figure>


## Adding vectors and multiplying by scalars

Add and subtract component by component. A scalar multiple multiplies every component.

Geometrically, draw a, then draw b beginning where a finishes (the triangle rule). The sum a + b is the single arrow that goes straight from the first starting point to the last finishing point. Two vectors drawn from the same point make a parallelogram, and a + b is the diagonal. The vector −a is the reverse of a: equal size, pointing back the other way. A scalar multiple ka stretches a by the factor |k|, and reverses it if k is negative.

**Worked example 2.** For a = (2, −1, 3) and b = (−1, 4, 0), find 3a − 2b.

```
3a = (6, −3, 9)
2b = (−2, 8, 0)
3a − 2b = (6 − (−2), −3 − 8, 9 − 0) = (8, −11, 9)
```

### Parallel vectors

Two non-zero vectors are **parallel** when a = λb for some number λ, that is, when each is a stretched (or reversed) copy of the other. A negative λ means they point in opposite directions, but they are still parallel. Compare one pair of components to find λ, then use it on the others.

**Worked example 3.** The vector (k, 6, −9) is parallel to (2, −4, 6). Find k.

```
Compare the y-components: 6 = λ × (−4), so λ = −3/2
Check z: −9 = (−3/2) × 6 = −9, which agrees
Then k = (−3/2) × 2 = −3
```

If the z-check had failed, the vectors could not be parallel for any k.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--03-adding-vectors.webp" width="900" height="1161" alt="a = (2, 5) and b = (4, -3). Placing b at the end of a gives a + b = (6, 2) (triangle law); b and a from a common point give the same diagonal (parallelogram law). a - b = (-2, 8) runs from the tip of b to the tip of a." loading="lazy">
  <figcaption>Add head to tail or complete the parallelogram; a - b joins the tip of b to the tip of a.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--04-collinear-proof.webp" width="900" height="1029" alt="Trapezium ABCD with AB = a, AD = b, DC = 2a and F on AC with AF:FC = 1:2. Then BF = one third of BD, so B, F and D are collinear and BF:FD = 1:2." loading="lazy">
  <figcaption>Write each vector in terms of a and b; two parallel vectors sharing a point prove the points are collinear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--05-forces-equilibrium.webp" width="900" height="1137" alt="Forces (3, -2), (-5, 7) and (2, -5) N drawn head to tail form a closed triangle, so the sum is zero and the particle is in equilibrium. The resultant of the first two is (-2, 5) N, magnitude 5.39 N at 111.8 degrees to i; a 2 kg particle would accelerate at (-1, 2.5) m s^-2." loading="lazy">
  <figcaption>Forces add as vectors, and equilibrium means the head-to-tail loop closes.</figcaption>
</figure>


## Position vectors, AB and distance

The **position vector** of a point A is the vector OA from the origin O to A. It has the same components as the coordinates of A. For any two points, the vector from A to B is

```
AB = OB − OA
```

You go from A back to the origin, then out to B. This is why AB = −BA. The **distance between A and B** is |AB|, found with the magnitude formula.

**Worked example 4.** Points A (−2, 3, 1) and B (4, −3, 4) are given. Find the vector AB, the length of the segment AB, the midpoint M, and the point T that is one third of the way from A to B.

```
AB = (4 − (−2), −3 − 3, 4 − 1) = (6, −6, 3)
|AB| = √(36 + 36 + 9) = √81 = 9
OM = OA + ½AB = (−2 + 3, 3 − 3, 1 + 3/2) = (1, 0, 5/2)
OT = OA + ⅓AB = (−2 + 2, 3 − 2, 1 + 1) = (0, 1, 2)
```

T divides AB in the ratio 1 : 2, so the fraction of the way along is 1/(1 + 2).

Vectors also prove geometric facts. Suppose AC = λAB for some number λ. Then AB and AC point along the same direction and both start at A, so A, B and C all sit on one straight line. This is the usual test for collinear points.

## Vector equations of lines

A line is fixed by a point on it and a direction. If **a** is the position vector of a point on the line and **b** is a direction vector, then

```
r = a + t b
```

where t is a scalar parameter that can take any real value. Choosing a value of t picks out one point on the line. In components, r = (x, y, z), which gives three separate equations in t.

To find the line through two points A and B, use A as the point and AB as the direction (or B as the point, or any multiple of AB as the direction). Different-looking equations can describe the same line.

**Worked example 5.** Find a vector equation of the line through A (2, −1, 5) and B (4, 1, 6). Test whether C (8, 5, 8) and D (6, 3, 8) lie on it.

```
AB = (2, 2, 1)
r = (2, −1, 5) + t(2, 2, 1)
```

For C: x gives 2 + 2t = 8, so t = 3. Then y = −1 + 6 = 5 and z = 5 + 3 = 8, which match C. So C is on the line.

For D: x gives 2 + 2t = 6, so t = 2. Then z = 5 + 2 = 7, but D has z = 8. So D is not on the line.

Always use one coordinate to find t, then check **every other** coordinate.

### Lines in two dimensions

In 2D the same form works with two components. To change to y = mx + c, eliminate t.

**Worked example 6.** Write r = (3, −1) + t(2, 5) in the form y = mx + c.

```
x = 3 + 2t, so t = (x − 3)/2
y = −1 + 5t = −1 + 5(x − 3)/2 = (5x − 17)/2
```

So y = 5x/2 − 17/2. The gradient is the ratio of the direction components, 5/2.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--06-line-equation.webp" width="900" height="1253" alt="The line r = (3, -1) + t(2, 5): a position vector to the point, the direction vector (2, 5), and points for t = -1, 0, 1, 2. Its gradient is 5/2 so y = 5x/2 - 17/2." loading="lazy">
  <figcaption>A line is one point plus any multiple of a direction vector, in 2D or 3D.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--08-scalar-product-angle.webp" width="900" height="917" alt="Vector u = (2, 1) with (1, 2), (-1, 2) and (-2, 1): scalar products 4, 0 and -3 give 36.9 (acute), 90 and 126.9 degrees (obtuse). For lines, directions (2, 1, -2) and (1, -4, 8) give cos = -2/3: 131.8 degrees between the vectors, 48.2 degrees between the lines." loading="lazy">
  <figcaption>The sign of u.v tells you whether the angle is acute, right or obtuse; for two lines quote the acute angle.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--09-foot-of-perpendicular.webp" width="900" height="957" alt="Point P(9, 1) and the line through A(1, 2) with direction (2, 1). Solving PX.d = 5t - 15 = 0 gives t = 3 and X = (7, 5); PX = (-2, 4) is perpendicular to the line and has length 2 root 5. Other points on the line are further from P." loading="lazy">
  <figcaption>The closest point on a line is where the vector to it is perpendicular to the direction, so set PX.d = 0.</figcaption>
</figure>


## Intersection, parallel and skew lines

Take two lines r = a₁ + s b₁ and r = a₂ + t b₂. Use a different letter for each parameter, because the two lines reach the point at different parameter values.

**Step 1.** Compare the direction vectors.
- If b₁ is a scalar multiple of b₂, the lines are **parallel**. They are either the same line or never meet. Test whether a point of one line lies on the other.
- If not, go to step 2.

**Step 2.** Equate the position vectors, writing one equation per component.

**Step 3.** Solve two equations for s and t.

**Step 4.** In 2D, two non-parallel lines always meet, so you have the answer. In 3D, **substitute s and t into the third equation**.
- If it holds, the lines intersect. Put s into line 1 (or t into line 2) to get the point.
- If it fails, the lines never meet and are not parallel: they are **skew**. Skew lines exist only in three dimensions.

**Worked example 7 (2D).** Find where r = (1, 4) + s(2, −1) meets r = (−1, −4) + t(1, 1).

```
x: 1 + 2s = −1 + t
y: 4 − s = −4 + t
```

From the second, t = 8 − s. Substitute into the first: 1 + 2s = −1 + 8 − s, so 3s = 6, s = 2 and t = 6. The point is (1 + 4, 4 − 2) = (5, 2). Check with line 2: (−1 + 6, −4 + 6) = (5, 2).

**Worked example 8 (3D, intersecting).** Line l₁: r = (1, 2, −1) + s(2, 1, 3). Line l₂: r = (7, −1, 2) + t(−2, 5, 3).

```
x: 1 + 2s = 7 − 2t
y: 2 + s = −1 + 5t
z: −1 + 3s = 2 + 3t
```

The z equation gives s = 1 + t. Put that into x: 1 + 2 + 2t = 7 − 2t, so t = 1 and s = 2. Check in y: 2 + 2 = 4 and −1 + 5 = 4. It holds, so the lines intersect at (1 + 4, 2 + 2, −1 + 6) = (5, 4, 5).

**Worked example 9 (3D, skew).** Use l₁ from above and l₃: r = (0, 3, 1) + u(1, 2, −1). The directions (2, 1, 3) and (1, 2, −1) are not multiples, so the lines are not parallel.

```
x: 1 + 2s = u
y: 2 + s = 3 + 2u
```

Substituting u = 1 + 2s into the second equation: 2 + s = 3 + 2 + 4s, so s = −1 and u = −1. Third component: l₁ gives −1 + 3(−1) = −4, but l₃ gives 1 − (−1) = 2. These differ, so the lines do not meet. They are skew.

**Worked example 10 (parallel).** Line A: r = (1, 0, 2) + s(2, −4, 6). Line B: r = (3, 1, 0) + t(−1, 2, −3). The direction of A is −2 times the direction of B, so the lines are parallel. Does (3, 1, 0) lie on A? The x-value gives 1 + 2s = 3, s = 1, but then y = −4, not 1. It does not, so the lines are parallel and distinct.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--07-intersect-or-skew.webp" width="900" height="916" alt="Top views of two pairs of 3D lines. l1 and l2 cross at (5, 4) and both have z = 5 there, so they intersect at (5, 4, 5). l1 and l3 cross in the top view at (-1, 1) but have z = -4 and z = 2, so they are skew." loading="lazy">
  <figcaption>Two lines can cross in a top view and still miss; the third component decides.</figcaption>
</figure>


## Common errors

- Using the same letter for both parameters. The two lines usually reach the common point at different values, so use s and t.
- Finding AB as OA − OB. The vector from A to B is OB − OA, "end minus start".
- Stopping after two equations in 3D. The third equation is the whole test for intersection against skew.
- Calling two lines skew when the directions are parallel. Parallel lines are never skew.
- Writing the direction as the coordinates of a point on the line. The direction vector is the difference of two points, not either point.
- Treating negative scalars as "not parallel". (−2, 4) and (1, −2) are parallel.
- Dropping a sign when subtracting a negative component.

## Examiner insight

Show the equations you set up, the values of s and t, and the check in the unused component. A stated conclusion ("lines intersect" or "lines are skew") with the comparison written beside it is easier to credit than a bare statement. Give exact values, and give column vectors for position vectors unless you are asked for coordinates.

## Next steps

Work through the [practice questions](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice/), then use the [revision notes](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-revision-notes/) to recall the methods. Tick off the topic on the [checklist](/checklists/oxfordaqa/a-level/mathematics/) and see the [course hub](/boards/oxfordaqa/a-level/mathematics/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. This page covers section P2.10, first part (Unit P2, International A-level only).
