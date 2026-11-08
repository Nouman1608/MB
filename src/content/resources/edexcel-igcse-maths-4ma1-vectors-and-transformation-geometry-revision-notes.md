---
title: "Pearson Edexcel International GCSE Mathematics A 4MA1: Vectors and transformation geometry -- Revision Notes"
seoTitle: "Edexcel IGCSE Maths 4MA1 Vectors & Transformations Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Vectors and transformation geometry"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 5
syllabusTopics:
  - qualification: "igcse"
    topic: "vectors-and-transformation-geometry-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "vectors-and-transformation-geometry-edexcel-igcse-maths"
    subtopic: "vectors-edexcel-igcse-maths"
  - qualification: "igcse"
    topic: "vectors-and-transformation-geometry-edexcel-igcse-maths"
    subtopic: "transformation-geometry-edexcel-igcse-maths"
description: "Condensed 4MA1 revision notes on vectors and transformations: coordinate rules, complete descriptions, vector proof steps and a quick self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-09-27
featured: false
reviewNeeded: true
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29."
---

These revision notes cover topic 5, Vectors and transformation geometry, of the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017), first assessed in June 2018 with papers in January and June. They cover section 5.1 Vectors, which is **Higher tier only**, and section 5.2 Transformation geometry, which is Foundation content assumed at Higher tier, so both tiers need it. For full explanations and worked examples, read the [study guide](/resources/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry/) first.

Other links: [practice questions with worked answers](/resources/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry-practice/), [Edexcel IGCSE Mathematics hub](/boards/edexcel/igcse/mathematics/), [printable 4MA1 checklist](/checklists/edexcel/igcse/mathematics/), [free 10-minute diagnostics](/diagnostics/).

A calculator may be used on all four 4MA1 papers (1F, 2F, 1H, 2H). None of the rules below is printed on the formulae sheet, so learn them.

Notation: →AB is the vector from A to B (arrow over AB in the exam); **a** is a vector (underline it by hand); |**a**| is its magnitude; (x, y) written in a vector context is the column vector with x on top.

## 5.1 Vectors (Higher tier only)

### Key definitions

- **Vector**: a quantity with magnitude and direction.
- **Scalar**: a quantity with magnitude only.
- **Resultant**: the single vector with the same effect as two or more vectors followed in turn.
- **Modulus**: the magnitude (length) of a vector, written |**a**|.
- **Parallel vectors**: one is a scalar multiple of the other.

### Rules

| Operation | Rule | Example |
|---|---|---|
| Scalar multiple | k(x, y) = (kx, ky) | −2(3, −1) = (−6, 2) |
| Addition | (a, b) + (c, d) = (a + c, b + d) | (1, 4) + (2, −6) = (3, −2) |
| Subtraction | (a, b) − (c, d) = (a − c, b − d) | (1, 4) − (2, −6) = (−1, 10) |
| Reverse | →BA = −→AB | →AB = (5, 2) gives →BA = (−5, −2) |
| Between points | →AB = →OB − →OA ("end minus start") | A(1, 3), B(4, −1): →AB = (3, −4) |
| Modulus | \|(x, y)\| = √(x² + y²) | \|(3, −4)\| = 5 |
| Ratio on a line | If AP : PB = m : n, →AP = (m/(m + n))→AB | AP : PB = 3 : 1 gives →AP = (3/4)→AB |

### Method: finding a vector in a diagram

1. Choose a route from the start point to the end point using only known vectors.
2. Add each vector you travel along; subtract each one you travel against.
3. Collect like terms (**a** terms, then **b** terms).
4. If the route passes a fraction of a side, first write that side as a vector, then take the fraction.

Small reminder: if →OA = **a**, →OB = **b** and M is the midpoint of AB, then →OM = **a** + ½(**b** − **a**) = ½**a** + ½**b**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--09-quadrilateral-pqrs.webp" width="900" height="870" alt="Quadrilateral PQRS on a grid with example vectors a = (2, 1) and b = (0, 2). PQ = a + 2b, QR = 3a - b, RS = -2a, so PS = 2a + b (dashed) and SQ = -a + b." loading="lazy">
  <figcaption>Worked example 3 drawn on a grid.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--03-subtracting-vectors.webp" width="900" height="1026" alt="p = (5,-2), then -q = (1,-7) from the end of p. The arrow from the origin to (6,-9) is p - q, the same as subtracting entry by entry." loading="lazy">
  <figcaption>p − q is p plus the opposite of q.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--05-magnitude-pythagoras.webp" width="900" height="998" alt="The vector (-8,15) is the hypotenuse of a right-angled triangle with sides 8 and 15. Pythagoras gives square root of (64 + 225) = 17." loading="lazy">
  <figcaption>The magnitude is the hypotenuse of the right-angled triangle with sides x and y.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--06-magnitude-of-sum.webp" width="900" height="800" alt="a = (3,-1) then b = (-2,4) gives a + b = (1,3). |a| + |b| = 7.63 but |a + b| = 3.16, so magnitudes cannot be added separately." loading="lazy">
  <figcaption>Add the vectors first, then find the magnitude; |a + b| is not |a| + |b|.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and--02-triangle-rule.webp" width="900" height="1020" alt="Points A (0,0), B (4, minus 3), C (2, 2). AB is the column 4 over minus 3 and BC, starting where AB ends, is minus 2 over 5. The direct route AC is 2 over 2, which is their sum." loading="lazy">
  <figcaption>Going A to B then B to C is the same as going straight from A to C.</figcaption>
</figure>


### Method: vector proof

1. Write every vector you need in terms of the same base vectors (usually **a** and **b**).
2. For **parallel**: show →PQ = k→RS for a number k. Write the factor out, for example 4**a** − 6**b** = 2(2**a** − 3**b**).
3. For **collinear** P, Q, R: show →PQ = k→QR (or k→PR) and state that the two vectors share the point Q (or P).
4. Finish with a sentence: "→PQ is a multiple of →QR and Q is a common point, so P, Q and R lie on a straight line."
5. If a ratio is asked, read it off from k: →PQ = 2→QR gives PQ : QR = 2 : 1.

Small worked reminder: in triangle OAB, →OA = **a** and →OB = **b**. M is on OA with OM : MA = 1 : 2, and N is on OB with ON : NB = 1 : 2.

```
OM = (1/3)a        ON = (1/3)b
MN = MO + ON = −(1/3)a + (1/3)b = (1/3)(b − a)
AB = b − a
MN = (1/3)AB
```

So MN is parallel to AB and one third of its length. No common point is needed here, because the question is about parallel lines, not collinear points.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--07-vec-proof-collinear.webp" width="900" height="1010" alt="Triangle OAB is drawn with a = (3,1), b = (1,4). N divides AB in ratio 1:2 and ON = (1/3)(2a + b). D has OD = 2a + b = 3 ON, so O, N and D are on one line with ON : ND = 1 : 2." loading="lazy">
  <figcaption>OD is a multiple of ON and both start at O, so O, N and D are collinear.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--07-vector-proof-midpoints.webp" width="900" height="945" alt="In triangle OAB, M and N are midpoints of OA and OB. MN = ON - OM = half of (b - a), and AB = b - a, so MN is half of AB and parallel to it. Shown with a = (8,2), b = (2,6)." loading="lazy">
  <figcaption>Writing every vector in terms of a and b shows MN = half of AB, so the lines are parallel.</figcaption>
</figure>


### Must-know distinctions

- **→AB vs →BA**: same length, opposite direction; every component changes sign.
- **Parallel vs collinear**: parallel needs a scalar multiple only; collinear also needs a shared point.
- **Vector vs modulus**: a vector has two components; its modulus is one positive number.
- **Position vector vs displacement**: →OA is the position vector of A; →AB is a displacement between two points.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--02-adding-vectors.webp" width="900" height="1020" alt="p = (5,-2) is drawn from the origin, then q = (-1,7) from where p ends. The single arrow from the origin to (4,5) is p + q, found by adding tops and adding bottoms." loading="lazy">
  <figcaption>p + q means do p, then q; add the tops and add the bottoms.</figcaption>
</figure>


## 5.2 Transformation geometry (both tiers)

### What defines each transformation

| Transformation | Specified by | Preserves | Image is |
|---|---|---|---|
| Rotation | Centre and angle (anticlockwise positive, clockwise negative) | Length and angle | Congruent |
| Reflection | Mirror line | Length and angle | Congruent |
| Translation | Column vector (distance and direction) | Length and angle | Congruent |
| Enlargement | Centre and positive scale factor (fractions allowed) | Angle only | Similar, not congruent unless the scale factor is 1 |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--07-congruent-vs-similar.webp" width="900" height="1020" alt="Four panels show a 3-4-5 triangle and its image. Translation, reflection and rotation keep lengths and angles, so the image is congruent. Enlargement by 2 doubles lengths (hypotenuse 5 to 10) but keeps angles, so the image is similar." loading="lazy">
  <figcaption>Congruent or similar: what each transformation keeps.</figcaption>
</figure>


### Coordinate rules

| Transformation | (x, y) maps to |
|---|---|
| Rotation +90° about O | (−y, x) |
| Rotation −90° about O | (y, −x) |
| Rotation 180° about O | (−x, −y) |
| Reflection in y = x (same line as y − x = 0) | (y, x) |
| Reflection in x = a | (2a − x, y) |
| Reflection in y = b | (x, 2b − y) |
| Translation by (p, q) | (x + p, y + q) |
| Enlargement, scale factor k, centre (c, d) | (c + k(x − c), d + k(y − d)) |

For a rotation about a centre that is not O: subtract the centre, apply the rule, add the centre back.

Small reminder: rotating (2, 5) through −90° about O gives (5, −2). Swap, then change the sign of the new second coordinate.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--04-vec-rotation-about-centre.webp" width="900" height="848" alt="Triangle T with vertices (3,2), (5,2), (3,5) turns 90° anticlockwise about (2,1) to T′ with vertices (1,2), (1,4), (−2,2). The method is subtract the centre, turn (x, y) to (−y, x), add the centre." loading="lazy">
  <figcaption>Rotating about a centre that is not the origin: subtract the centre, turn, add it back.</figcaption>
</figure>


### Method: describe fully a single transformation

1. Same size and same way round, just moved: **translation**. Give the column vector (image − object).
2. Same size, flipped (a mirror image): **reflection**. Give the equation of the mirror line. Find it as the perpendicular bisector of a point and its image.
3. Same size, turned: **rotation**. Give the angle with a sign or direction, and the centre. Find the centre with tracing paper, or where the perpendicular bisectors of two object–image segments meet.
4. Different size: **enlargement**. Scale factor = image length ÷ object length. Find the centre by drawing lines through each vertex and its image; they meet at the centre.
5. Write one transformation only, using the word itself ("rotation", not "turn").

Small worked reminder: a triangle with a side of 6 cm maps to a triangle whose matching side is 2 cm, the same way round. The scale factor is 2 ÷ 6 = 1/3, so the answer starts "enlargement, scale factor 1/3". The image is smaller, but it is still called an enlargement; 4MA1 uses positive scale factors only.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--05-vec-one-point-three-mirrors.webp" width="900" height="1036" alt="The point (3,−1) is reflected in x = 1, y = 2 and y = x, giving (−1,−1), (3,5) and (−1,3). In y = x the coordinates swap. The point and its image are equally far from each mirror." loading="lazy">
  <figcaption>One point reflected in three of the specification mirror lines, including y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--06-vec-find-enlargement-centre.webp" width="900" height="1010" alt="Shape P and its enlargement Q are drawn. Lines through each vertex and its image meet at (1,1), the centre. Q is 3 times as far from the centre as P, so the scale factor is 3." loading="lazy">
  <figcaption>Join each point to its image; the lines meet at the centre of enlargement.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--06-construct-mirror-line.webp" width="900" height="1028" alt="Triangle ABC and its image A′B′C′ on a grid. Join A to A′, draw equal arcs from A and A′ to find two crossing points, and draw the line through them: this is the mirror line y = x. It also passes through the midpoint of BB′." loading="lazy">
  <figcaption>Constructing the perpendicular bisector of a point and its image.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry--08-enlargement-no-centre.webp" width="900" height="850" alt="A small right-angled triangle (legs 2 and 1) and two copies with legs 4 and 2, drawn in different places. With no centre only the size matters: lengths double, angles stay the same and sides stay parallel." loading="lazy">
  <figcaption>Enlargement with no centre can be drawn anywhere.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/cambridge-o-level-mathematics-transformations-reflection-rotation-enlargement-and--02-rotation.webp" width="900" height="1060" alt="Triangle A is rotated 90 degrees clockwise about the centre (2, 1) to give A dash at (4,0), (4,-3), (6,-3). Dashed radii from the centre to a vertex and its image are equal in length and meet at a right angle, with a curved arrow showing the clockwise turn." loading="lazy">
  <figcaption>A rotation needs a centre, an angle and a direction: here 90 degrees clockwise about (2, 1).</figcaption>
</figure>


### Must-know distinctions

- **Clockwise vs anticlockwise**: −90° is clockwise; +90° is anticlockwise.
- **x = 2 vs y = 2**: x = 2 is a vertical line; y = 2 is horizontal.
- **Scale factor ½ vs 2**: ½ makes the image smaller and nearer the centre.
- **Congruent vs similar**: rotation, reflection and translation give congruent images; enlargement gives similar images.

## Quick self-test

1. Find |(−9, 12)|.
2. **a** = (3, 5) and **b** = (−1, 2). Find **a** − 2**b**.
3. →AB = (2, −7). Write down →BA.
4. |(k, 12)| = 13 and k > 0. Find k.
5. Is 6**a** − 9**b** parallel to 2**a** − 3**b**? Give a reason.
6. Reflect (5, −2) in the line y = x.
7. Reflect (5, −2) in the line x = 1.
8. Rotate (4, 1) through 180° about the origin.
9. Rotate (4, 1) through +90° about the origin.
10. Enlarge the point (6, 9) by scale factor 1/3, centre (0, 3).
11. Translate (−3, 4) by the vector (5, −6).
12. Rotate (3, 4) through −90° about (1, 1).

### Answers

1. √(81 + 144) = √225 = **15**
2. (3, 5) − (−2, 4) = **(5, 1)**
3. **(−2, 7)**
4. k² + 144 = 169, so k² = 25 and **k = 5**
5. **Yes**: 6**a** − 9**b** = 3(2**a** − 3**b**), a scalar multiple.
6. **(−2, 5)**
7. The point is 4 units right of x = 1, so the image is 4 units left: **(−3, −2)**
8. **(−4, −1)**
9. **(−1, 4)**
10. (0, 3) + (1/3)(6, 6) = **(2, 5)**
11. **(2, −2)**
12. Subtract centre: (2, 3). Turn −90°: (3, −2). Add centre: **(4, −1)**

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--01-vector-between-points.webp" width="900" height="1020" alt="Grid with P(-3,5) and Q(4,-1). Going from P to Q is 7 right and 6 down, so PQ is the column vector (7, -6). QP goes the other way, (-7, 6), so QP = -PQ." loading="lazy">
  <figcaption>Finish minus start gives the column vector; the reverse vector has both signs changed.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-vectors-and-magnitude--04-scalar-multiples.webp" width="900" height="866" alt="r = (6,-4) with 3r = (18,-12) three times as long, half r = (3,-2) half as long, and -2r = (-12,8) twice as long and reversed. All lie along the same line." loading="lazy">
  <figcaption>Multiplying by k scales both entries and keeps the arrow parallel to r.</figcaption>
</figure>


## Where marks are usually lost

- Answering "rotation, 90°" with no direction or sign, which usually loses the angle mark even when the centre is right.
- Giving the centre of rotation or enlargement as a vector, or leaving it out; the centre must be a coordinate point.
- Naming two transformations when the question asks for a single transformation; that answer usually scores no marks.
- Reflecting in x = 1 as though it were y = 1 (or the reverse). Sketch the line first.
- Finding a translation vector as object − image, which reverses both signs.
- Enlarging by a fractional scale factor from the origin when a different centre is given.
- In vector work, writing →AB as **a** − **b** when →OA = **a** and →OB = **b**; the correct vector is **b** − **a**.
- Leaving a modulus as 17.80449… when the question asks for 3 significant figures, or rounding too early in a longer calculation.
- In a "show that" or proof, simplifying correctly but never writing the concluding sentence about parallel lines or the common point.
- Treating a vector expression like 2**a** + **b** as a number and trying to "cancel" **a** with **b**.

## Frequently asked questions

**Are vectors Higher tier only in Edexcel IGCSE Maths 4MA1?**
Yes. Section 5.1, Vectors, is Higher tier only, while section 5.2, Transformation geometry (rotations, reflections, translations and enlargements), is on both tiers.

**What defines an enlargement?**
An enlargement is defined by a scale factor and a centre of enlargement. Using the origin when another centre is stated is a common mistake.

**What is the difference between a vector and a scalar?**
A vector has both magnitude (size) and direction, while a scalar, such as 5 or −2, has size only. Equal vectors have the same magnitude and the same direction.

**Is |a − b| the same as |a| − |b|?**
No. |**a** − **b**| is the magnitude of the single vector **a** − **b**, found by subtracting the components first and then using Pythagoras' theorem; it is not the difference of the two magnitudes.

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 5, Vectors and transformation geometry: 5.1 Vectors (Higher tier only) and 5.2 Transformation geometry.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--02-rotation-about-origin.webp" width="900" height="1065" alt="Triangle ABC is rotated 90 degrees clockwise about the origin. B(1,4) moves to B'(4,-1); the lines OB and OB' are equal and meet at a right angle. A rotation needs centre, angle and direction." loading="lazy">
  <figcaption>A rotation is described by its centre, angle and direction.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--01-reflection-mirror-line.webp" width="900" height="845" alt="Triangle ABC is reflected in the vertical line x = 4. Dashed lines join each corner to its image and cross the mirror at their midpoints. Image corners are A'(7,2), B'(7,4), C'(5,2)." loading="lazy">
  <figcaption>A reflection puts each image point the same distance behind the mirror line, and is described by its mirror line.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--03-translation-column-vector.webp" width="900" height="970" alt="Triangle ABC is translated by (4, -3): 4 right and 3 down. Every corner moves by the same arrow to A'(5,-1), B'(5,1), C'(7,-1)." loading="lazy">
  <figcaption>A translation slides every point by the same column vector without turning or resizing the shape.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--04-enlargement-scale-factor-2.webp" width="900" height="945" alt="Triangle ABC is enlarged by scale factor 2 from P(1,1). Dashed lines from P pass through each corner to its image, which is twice as far from P. Every side doubles." loading="lazy">
  <figcaption>An enlargement multiplies every distance from the centre, and every side, by the scale factor.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-transformations-and-vectors--05-enlargement-fractional.webp" width="900" height="1145" alt="Triangle ABC is enlarged by scale factor one half from P(1,1). Each image corner is half as far from P, giving a smaller image A'(2,2), B'(2,4), C'(4,2)." loading="lazy">
  <figcaption>A scale factor between 0 and 1 makes the image smaller.</figcaption>
</figure>

