---
title: "OxfordAQA International AS and A-level Mathematics: Vectors and vector equations of lines (9660) -- Revision Notes"
seoTitle: "OxfordAQA A-level Maths Vectors Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed recall notes on 2D and 3D vectors, position vectors, vector equations of lines, intersection, parallel and skew lines for OxfordAQA 9660."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

Condensed notes for the final weeks, aligned to the OxfordAQA International AS and A-level Mathematics specification (9660, Version 5.2), section P2.10 (first part). This content is part of International A-level (A2) Unit P2 and is not examined at International AS. For full explanations, read the [study guide](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector/), then test yourself with the [practice questions](/resources/oxfordaqa-a-level-mathematics-vectors-in-two-and-three-dimensions-and-vector-practice/).

Other links: [course hub](/boards/oxfordaqa/a-level/mathematics/), [printable checklist](/checklists/oxfordaqa/a-level/mathematics/), [exam preparation advice](/resources/oxfordaqa-a-level-mathematics-exam-preparation/) and the [free 10-minute diagnostics](/diagnostics/).

Column vectors are written across the line here: (3, −4, 12) is a column of 3, −4, 12. Questions use columns, but i, j, k is allowed.

## Key results

| Idea | Result |
|---|---|
| Vector in 3D | (x, y, z) = x i + y j + z k |
| Magnitude | √(x² + y² + z²) |
| Add, subtract | Component by component |
| Scalar multiple | Multiply every component |
| Parallel | a = λb for a number λ (negative λ allowed) |
| Position vector | OA, same components as the coordinates of A |
| Vector from A to B | AB = OB − OA ("end minus start") |
| Distance between A and B | \|AB\| |
| Midpoint of AB | OA + ½AB = (OA + OB)/2 |
| Point dividing AB in ratio m : n | OA + m/(m + n) × AB |
| Line | r = a + tb |
| Collinear points | AB = λAC |

## Magnitude and scalar multiples

Squares remove signs, so a negative component never gives a negative contribution.

```
|(1, −2, 2)| = √(1 + 4 + 4) = 3
|(3, 4, 12)| = √(9 + 16 + 144) = 13
```

Doubling a vector doubles its length. Multiplying by −1 reverses it. A unit vector in the direction of a is a divided by |a|.

Geometry: a + b is the diagonal of the parallelogram on a and b, and also the triangle path (a then b). a − b is the vector from the head of b to the head of a.

**Reminder.** a = (1, 3, −2), b = (4, 0, 1). Then 2a − b = (2 − 4, 6 − 0, −4 − 1) = (−2, 6, −5).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--01-magnitude-in-3d.webp" width="900" height="910" alt="A box with sides 3, 2 and 6: the floor diagonal is root 13, then the vector a = 3i + 2j + 6k has magnitude 7 (13 + 36 = 49). The angle with the z-axis has cosine 6/7, 31.0 degrees (AQA only; OCR excludes 3D direction)." loading="lazy">
  <figcaption>The 3D magnitude formula is Pythagoras applied twice, first on the floor and then up the height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--02-direction-quadrant.webp" width="900" height="1269" alt="Vectors -3i + 7j and 3i - 7j from the origin. Both have the calculator angle 66.8 degrees, but their directions anticlockwise from i are 113.2 degrees (second quadrant) and 293.2 degrees (fourth quadrant)." loading="lazy">
  <figcaption>The calculator gives only the acute angle, so sketch the vector and adjust for its quadrant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--03-adding-vectors.webp" width="900" height="1161" alt="a = (2, 5) and b = (4, -3). Placing b at the end of a gives a + b = (6, 2) (triangle law); b and a from a common point give the same diagonal (parallelogram law). a - b = (-2, 8) runs from the tip of b to the tip of a." loading="lazy">
  <figcaption>Add head to tail or complete the parallelogram; a - b joins the tip of b to the tip of a.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--08-scalar-product-angle.webp" width="900" height="917" alt="Vector u = (2, 1) with (1, 2), (-1, 2) and (-2, 1): scalar products 4, 0 and -3 give 36.9 (acute), 90 and 126.9 degrees (obtuse). For lines, directions (2, 1, -2) and (1, -4, 8) give cos = -2/3: 131.8 degrees between the vectors, 48.2 degrees between the lines." loading="lazy">
  <figcaption>The sign of u.v tells you whether the angle is acute, right or obtuse; for two lines quote the acute angle.</figcaption>
</figure>


## Method: show two vectors are parallel, or find an unknown

1. Compare one pair of components to find λ.
2. Apply λ to every other component. All must agree.
3. If an unknown is in the question, use λ to solve for it.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--04-collinear-proof.webp" width="900" height="1029" alt="Trapezium ABCD with AB = a, AD = b, DC = 2a and F on AC with AF:FC = 1:2. Then BF = one third of BD, so B, F and D are collinear and BF:FD = 1:2." loading="lazy">
  <figcaption>Write each vector in terms of a and b; two parallel vectors sharing a point prove the points are collinear.</figcaption>
</figure>


## Method: AB, distance, midpoint, ratio

1. Write AB = OB − OA.
2. Distance is the magnitude of AB.
3. For a point P with AP : PB = m : n, the fraction along AB is m/(m + n), so OP = OA + m/(m + n) × AB.

**Reminder.** P (1, 2, 3), Q (4, 0, −1). PQ = (3, −2, −4), so |PQ| = √(9 + 4 + 16) = √29.

## Method: proving three points are collinear

1. Find two vectors between the points, for example AB and BC.
2. Show that one vector is a number times the other.
3. Say that they share a point, so the three points lie on one line.

Parallel vectors alone are not enough: the shared point is what makes the points collinear.

## Vector equation of a line

```
r = a + tb     a = a point on the line     b = direction     t any real number
```

- Through two points A and B: use a = OA and b = AB.
- Equivalent forms: a can be any point of the line, b any non-zero multiple of the direction.
- To test whether a point is on the line: find t from one component, then check the rest.
- In 2D, eliminate t to get y = mx + c. The gradient is (y-direction)/(x-direction).

**Reminder (2D).** r = (4, 1) + t(−3, 2) gives x = 4 − 3t and y = 1 + 2t. So t = (4 − x)/3 and y = 1 + 2(4 − x)/3 = (11 − 2x)/3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--09-foot-of-perpendicular.webp" width="900" height="957" alt="Point P(9, 1) and the line through A(1, 2) with direction (2, 1). Solving PX.d = 5t - 15 = 0 gives t = 3 and X = (7, 5); PX = (-2, 4) is perpendicular to the line and has length 2 root 5. Other points on the line are further from P." loading="lazy">
  <figcaption>The closest point on a line is where the vector to it is perpendicular to the direction, so set PX.d = 0.</figcaption>
</figure>


## Method: intersection of two lines

Use different letters: s for line 1, t for line 2.

1. Are the directions parallel? If yes, check whether one point of line 1 lies on line 2. If it does, the lines are the same; if not, they are parallel and distinct. Stop.
2. If not parallel, equate components to form equations in s and t.
3. Solve using two of the equations.
4. In 2D: that is the answer. In 3D: test the third equation.
5. Third equation holds: lines intersect. Substitute s into line 1 for the point, and check with t in line 2.
6. Third equation fails: lines are skew.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--07-intersect-or-skew.webp" width="900" height="916" alt="Top views of two pairs of 3D lines. l1 and l2 cross at (5, 4) and both have z = 5 there, so they intersect at (5, 4, 5). l1 and l3 cross in the top view at (-1, 1) but have z = -4 and z = 2, so they are skew." loading="lazy">
  <figcaption>Two lines can cross in a top view and still miss; the third component decides.</figcaption>
</figure>


## Worked reminders for lines

**Intersection in 3D.** Lines r = (2, 0, 1) + s(1, 1, 2) and r = (5, 1, 0) + t(2, 0, −1).

```
x: 2 + s = 5 + 2t
y: s = 1
z: 1 + 2s = −t
```

The y equation gives s = 1. Then z gives t = −3. Check x: 2 + 1 = 3 and 5 − 6 = −1. These differ, so the lines are skew (the directions are not multiples of each other).

**Changing one letter.** If the question gives both lines with the same parameter λ, rename one of them μ before you start.

**Unknown constant.** If a line contains an unknown such as k, solve for s and t from the two equations without k, then use the remaining equation to find k.

**Geometry with vectors.** In a parallelogram ABCD, AB = DC, so OD = OA + OC − OB. The diagonals AC and BD bisect each other, so the midpoint of AC equals the midpoint of BD.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--06-line-equation.webp" width="900" height="1253" alt="The line r = (3, -1) + t(2, 5): a position vector to the point, the direction vector (2, 5), and points for t = -1, 0, 1, 2. Its gradient is 5/2 so y = 5x/2 - 17/2." loading="lazy">
  <figcaption>A line is one point plus any multiple of a direction vector, in 2D or 3D.</figcaption>
</figure>


## Must-know distinctions

| Situation | Directions | Common point | Dimension |
|---|---|---|---|
| Intersecting | Not parallel | Exactly one | 2D or 3D |
| Parallel, distinct | Parallel | None | 2D or 3D |
| Same line | Parallel | Infinitely many | 2D or 3D |
| Skew | Not parallel | None | 3D only |

- A position vector OA is fixed to the origin. A general vector AB is only a displacement.
- A direction vector can be any non-zero multiple: (2, −4, 6) and (−1, 2, −3) give parallel lines.
- A vector equation of a line has one free parameter. A parameter has no meaning outside its own line.

## Quick self-test

1. Find the magnitude of (6, −2, 3).
2. Find 2p − 3q when p = (1, 4, −2) and q = (−2, 0, 1).
3. For what value of m is (m, −9, 12) parallel to (2, 3, −4)?
4. A is (3, −1, 2) and B is (−1, 5, 4). Find AB and the distance AB.
5. Find the midpoint of the points in question 4.
6. Write a vector equation of the line through (1, 1, 0) and (3, 0, 4).
7. Does (7, −2, 8) lie on the line r = (1, 1, 0) + t(2, −1, 4)?
8. Write r = (0, 5) + t(2, 1) in the form y = mx + c.
9. Lines r = (2, 0) + s(1, 3) and r = (0, 4) + t(2, 1) meet. Find the point.
10. Lines r = (0, 0, 1) + s(1, 1, 0) and r = (1, 0, 0) + t(0, 1, 1): are they intersecting, parallel or skew?

### Answers

1. √(36 + 4 + 9) = √49 = **7**.
2. 2p = (2, 8, −4), 3q = (−6, 0, 3). So 2p − 3q = **(8, 8, −7)**.
3. λ = −3 from the second component (−9 = λ × 3). The third gives 12 = (−3)(−4) = 12, which agrees. So m = −3 × 2 = **−6**.
4. AB = (−4, 6, 2). Distance = √(16 + 36 + 4) = √56 = **2√14**.
5. ½(3 − 1, −1 + 5, 2 + 4) = **(1, 2, 3)**.
6. Direction (2, −1, 4). **r = (1, 1, 0) + t(2, −1, 4)**.
7. From x: 1 + 2t = 7, t = 3. Then y = 1 − 3 = −2 and z = 12. The point has z = 8, so **no**.
8. x = 2t, y = 5 + t, so t = x/2 and **y = x/2 + 5**.
9. x: 2 + s = 2t; y: 3s = 4 + t. From the first, t = 1 + s/2. Then 3s = 4 + 1 + s/2, so 5s/2 = 5, s = 2, t = 2. Point **(4, 6)**. Check with line 2: (4, 4 + 2) = (4, 6).
10. Directions (1, 1, 0) and (0, 1, 1) are not multiples. x: s = 1. y: s = t, so t = 1. z: 1 + 0 = 1 for the first line, and t = 1 for the second. Both are 1, so the third equation holds. They **intersect** at (1, 1, 1).

## Where marks are usually lost

- Writing AB = OA − OB, which reverses the vector and the sign of every component.
- Reusing t for both lines, which forces the two parameters to be equal.
- Solving two equations in 3D and stating an intersection without checking the third.
- Saying "not parallel, so skew" without showing that the lines fail to meet.
- Giving the position vector when the question asks for coordinates, or the reverse.
- Making a sign slip when subtracting a negative component, such as 5 − (−2).
- Leaving a distance as a decimal when the answer is a surd and the question needs an exact value.
- Testing a point on a line by checking only one coordinate.
- Forgetting that a negative scalar multiple is still parallel.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019), published by OxfordAQA. This page covers section P2.10, first part (Unit P2, International A-level only).
