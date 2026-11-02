---
title: "Pearson Edexcel International Advanced Level Mathematics: Vectors, lines and the scalar product (YMA01) -- Revision Notes"
seoTitle: "Edexcel IAL Maths P4 Vectors Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Vectors in two and three dimensions: lines, distances and the scalar product"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 154
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p4-pure-mathematics-4-edexcel-alevel-maths"
    subtopic: "p4-vectors-edexcel-alevel-maths"
description: "Condensed revision notes on vectors for Pearson Edexcel IAL Mathematics P4: formulas, methods for lines and angles, a self-test and common lost marks."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense Unit P4 section 7 (Vectors, topics 7.1 to 7.7) of the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3, April 2019. The specification lists P4 as compulsory for IAL Mathematics and Pure Mathematics, with IAS weighting N/A. For full explanations read the [study guide](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances/), then test yourself with the [practice questions](/resources/edexcel-ial-mathematics-vectors-in-two-and-three-dimensions-lines-distances-practice/).

Other links: course hub [/boards/edexcel/a-level/mathematics/](/boards/edexcel/a-level/mathematics/), printable checklist [/checklists/edexcel/a-level/mathematics/](/checklists/edexcel/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/).

## Key results

| Topic | Result |
|---|---|
| 7.1 Components | a = a₁i + a₂j + a₃k |
| 7.2 Magnitude | \|a\| = √(a₁² + a₂² + a₃²) |
| 7.2 Unit vector | â = a/\|a\| |
| 7.3 Scalar multiple | λa is parallel to a; the sign of λ sets the direction |
| 7.4 Between points | AB = OB − OA = b − a |
| 7.5 Distance | d² = (x₁ − x₂)² + (y₁ − y₂)² + (z₁ − z₂)² |
| 7.6 Line, point and direction | r = a + tb |
| 7.6 Line, two points | r = c + t(d − c) |
| 7.7 Scalar product | a·b = a₁b₁ + a₂b₂ + a₃b₃ |
| 7.7 Angle | cos ∠AOB = (a·b)/(\|a\|\|b\|) |
| 7.7 Perpendicular | a·b = 0 for non-zero a, b means perpendicular |

## Notation to recognise

| Symbol | Meaning |
|---|---|
| a | the vector a |
| AB | the vector represented by the directed line segment AB |
| â | unit vector parallel to a |
| i, j, k | the axis unit vectors |
| \|a\| or \|AB\| | magnitude of a vector |
| a.b | the scalar product of a and b |

In this specification the scalar product is written with a dot. The vector product a × b is a different operation and belongs to Further Pure Mathematics, so do not confuse the two.

## Method boxes

**Position vector of a point on a segment.** If P divides AB so that AP : PB = m : n, then p = a + (m/(m + n))(b − a). The midpoint of AB has position vector (a + b)/2.

**Is a point on a line?**
1. Equate the i, j and k components with the point.
2. Solve one equation for t.
3. Substitute that t into the other two. All three must hold.

**Parallel, intersecting or skew?**
1. Compare directions. If one is a scalar multiple of the other, the lines are parallel (identical if one has a point on the other).
2. Otherwise use different parameters t and s and equate components.
3. Solve two equations, test in the third.
4. Third holds: intersect, and substitute to get the point. Third fails: skew.

**Angle between two lines.**
1. Take the direction vectors d₁ and d₂ only.
2. cos θ = |d₁·d₂| / (|d₁||d₂|) gives the acute angle.
3. If the question asks for the angle between the vectors themselves, drop the modulus on the top and keep the sign.

**Foot of the perpendicular from P to a line.**
1. Write the general point F on the line in terms of t.
2. Form PF = F − P.
3. Solve PF·d = 0 for t.
4. Distance from P to the line is |PF|.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--06-line-equation.webp" width="900" height="1253" alt="The line r = (3, -1) + t(2, 5): a position vector to the point, the direction vector (2, 5), and points for t = -1, 0, 1, 2. Its gradient is 5/2 so y = 5x/2 - 17/2." loading="lazy">
  <figcaption>A line is one point plus any multiple of a direction vector, in 2D or 3D.</figcaption>
</figure>


## Small worked reminders

**Magnitude and unit vector.** For v = i − 2j + 2k, |v| = √(1 + 4 + 4) = 3, so v̂ = (i − 2j + 2k)/3.

**Angle between two vectors.** With d₁ = i − 2j + 2k and d₂ = 2i + 3j + 6k:

```
d₁·d₂ = 2 − 6 + 12 = 8
|d₁| = 3,  |d₂| = 7
cos θ = 8/21,  θ = 67.6° (1 d.p.)
```

**Line through two points.** For C(−3, 1, 4) and D(1, 4, 2): d − c = 4i + 3j − 2k, so r = (−3i + j + 4k) + t(4i + 3j − 2k).

### Intersecting or skew: a second example

Let l₁: r = (3j + k) + t(i − j + 2k) and l₂: r = 6k + s(2i + j − k). The directions are not multiples of each other.

```
i:  t = 2s
j:  3 − t = s
k:  1 + 2t = 6 − s
```

From the first two, 3 − 2s = s, so s = 1 and t = 2. In the k equation the left side is 1 + 4 = 5 and the right side is 6 − 1 = 5. The lines intersect at (2, 1, 5). If l₂ started at 7k instead, the right side would be 6 and the lines would be skew.

For the angle, d₁·d₂ = 2 − 1 − 2 = −1 and |d₁| = |d₂| = √6, so cos θ = −1/6 and θ = 99.6°. The acute angle between the lines is 180° − 99.6° = **80.4°**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--07-intersect-or-skew.webp" width="900" height="916" alt="Top views of two pairs of 3D lines. l1 and l2 cross at (5, 4) and both have z = 5 there, so they intersect at (5, 4, 5). l1 and l3 cross in the top view at (-1, 1) but have z = -4 and z = 2, so they are skew." loading="lazy">
  <figcaption>Two lines can cross in a top view and still miss; the third component decides.</figcaption>
</figure>


### Collinear points

Three points are collinear when AB is a scalar multiple of BC. The two vectors are parallel and share the point B, so all three points sit on one line. For A(1, 2, 3), B(3, 5, 2) and C(7, 11, 0):

```
AB = 2i + 3j − k
BC = 4i + 6j − 2k = 2AB
```

So A, B and C lie on one straight line. State the multiple and the shared point in your conclusion.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--04-collinear-proof.webp" width="900" height="1029" alt="Trapezium ABCD with AB = a, AD = b, DC = 2a and F on AC with AF:FC = 1:2. Then BF = one third of BD, so B, F and D are collinear and BF:FD = 1:2." loading="lazy">
  <figcaption>Write each vector in terms of a and b; two parallel vectors sharing a point prove the points are collinear.</figcaption>
</figure>


### Parallelograms and rhombuses

- In a parallelogram ABCD, AB = DC and AD = BC. Use whichever pair gives you the missing vertex quickly.
- A rhombus is a parallelogram with two adjacent sides of equal length, so test |AB| = |BC|.
- The diagonals of a rhombus are perpendicular, so you can test a·b = 0 for the two diagonal vectors.
- The diagonals of any parallelogram bisect each other, so both have the same midpoint.

### Writing answers

- Say "end minus start" in your head before you write each vector.
- Show the equations for each component when solving for an intersection, not just the answers.
- Write the conclusion in words: "the lines intersect at ...", "the lines are skew because ...", "the vectors are perpendicular because a·b = 0".
- Give exact values such as 2√14 when the question asks for them, and decimals to the accuracy requested.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--01-magnitude-in-3d.webp" width="900" height="910" alt="A box with sides 3, 2 and 6: the floor diagonal is root 13, then the vector a = 3i + 2j + 6k has magnitude 7 (13 + 36 = 49). The angle with the z-axis has cosine 6/7, 31.0 degrees (AQA only; OCR excludes 3D direction)." loading="lazy">
  <figcaption>The 3D magnitude formula is Pythagoras applied twice, first on the floor and then up the height.</figcaption>
</figure>


## Must-know distinctions

- **Position vector or displacement.** OA is fixed to the origin. AB is the move from A to B, found as b − a.
- **Direction vector or position vector in a line.** In r = a + tb, a locates the line and b gives its direction. Only b is used for the angle between lines.
- **Parallel or skew.** Parallel lines have proportional directions. Skew lines do not, and still never meet.
- **Scalar product or magnitude.** a·a = |a|², which is a quick way to get a magnitude. The scalar product itself is a number.
- **Vector or unit vector.** A vector of magnitude 1 only. Divide by |a|.
- **Zero scalar product.** a·b = 0 means perpendicular only when both vectors are non-zero.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--02-direction-quadrant.webp" width="900" height="1269" alt="Vectors -3i + 7j and 3i - 7j from the origin. Both have the calculator angle 66.8 degrees, but their directions anticlockwise from i are 113.2 degrees (second quadrant) and 293.2 degrees (fourth quadrant)." loading="lazy">
  <figcaption>The calculator gives only the acute angle, so sketch the vector and adjust for its quadrant.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--09-foot-of-perpendicular.webp" width="900" height="957" alt="Point P(9, 1) and the line through A(1, 2) with direction (2, 1). Solving PX.d = 5t - 15 = 0 gives t = 3 and X = (7, 5); PX = (-2, 4) is perpendicular to the line and has length 2 root 5. Other points on the line are further from P." loading="lazy">
  <figcaption>The closest point on a line is where the vector to it is perpendicular to the direction, so set PX.d = 0.</figcaption>
</figure>


## Quick self-test

1. Find |8i + j − 4k|.
2. Write down the unit vector in the direction of 2i − 2j + k.
3. A is (4, −1, 2) and B is (0, 4, 2). Find AB and the distance AB.
4. Show that (1, 5, −1) lies on r = (i + j + k) + t(2j − k).
5. Are r = (2i + k) + t(i − 2j + 3k) and r = (j + 5k) + s(−2i + 4j − 6k) parallel?
6. Find a·b when a = 3i − j + 2k and b = i + 4j − 5k.
7. Find the angle between the vectors i + 2j + 2k and 2i + 3j + 6k, to 1 d.p.
8. Find p so that pi + 3j − 2k is perpendicular to 4i − 2j + pk.
9. Do r = (2i + j) + t(i + j + k) and r = (2i + 3j + 3k) + s(2i − k) intersect? If so, find the point.
10. Find the midpoint of A(−2, 5, 1) and B(6, 1, −3).

### Answers

1. √(64 + 1 + 16) = √81 = **9**.
2. **(2i − 2j + k)/3**, since the magnitude is 3.
3. AB = −4i + 5j + 0k, and |AB| = **√41**.
4. At t = 2 the point is (1, 1 + 4, 1 − 2) = (1, 5, −1). **It lies on the line.**
5. The second direction is −2 times the first, so **yes, parallel**. They are different lines: the point (2, 0, 1) would need s = −1 from the i-component of the second line, which gives a j-component of −3, not 0.
6. 3 − 4 − 10 = **−11**.
7. a·b = 2 + 6 + 12 = 20, |a| = 3, |b| = 7, cos θ = 20/21, so θ = **17.8°**.
8. (p, 3, −2)·(4, −2, p) = 4p − 6 − 2p = 2p − 6 = 0, so **p = 3**.
9. i: 2 + t = 2 + 2s; j: 1 + t = 3; so t = 2, s = 1. k: 2 on the left and 3 − 1 = 2 on the right. **Yes, at (4, 3, 2).**
10. **(2, 3, −1)**.

## Where marks are usually lost

- Writing AB as a − b, which is really BA. Say "end minus start" every time.
- Stopping after two component equations and announcing an intersection.
- Using the same parameter letter in both lines, so that a valid intersection is missed.
- Rounding in the middle of a calculation, so the final decimal is slightly off. Keep surds or unrounded values until the last line.
- Using position vectors rather than direction vectors in the angle between lines.
- Quoting an obtuse angle when the acute angle between lines is wanted, or the reverse when the angle between the vectors is wanted.
- Not showing the scalar product working when asked to show perpendicularity: state a·b = 0 and the arithmetic.
- Calling lines skew without first ruling out parallel.
- Dropping a minus sign in a component when a coordinate is negative.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-vectors--08-scalar-product-angle.webp" width="900" height="917" alt="Vector u = (2, 1) with (1, 2), (-1, 2) and (-2, 1): scalar products 4, 0 and -3 give 36.9 (acute), 90 and 126.9 degrees (obtuse). For lines, directions (2, 1, -2) and (1, -4, 8) give cos = -2/3: 131.8 degrees between the vectors, 48.2 degrees between the lines." loading="lazy">
  <figcaption>The sign of u.v tells you whether the angle is acute, right or obtuse; for two lines quote the acute angle.</figcaption>
</figure>


## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. Unit P4, section 7 (Vectors).
