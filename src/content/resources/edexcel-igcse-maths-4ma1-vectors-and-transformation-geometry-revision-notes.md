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
publishedDate: 2026-09-27
featured: false
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

### Must-know distinctions

- **→AB vs →BA**: same length, opposite direction; every component changes sign.
- **Parallel vs collinear**: parallel needs a scalar multiple only; collinear also needs a shared point.
- **Vector vs modulus**: a vector has two components; its modulus is one positive number.
- **Position vector vs displacement**: →OA is the position vector of A; →AB is a displacement between two points.

## 5.2 Transformation geometry (both tiers)

### What defines each transformation

| Transformation | Specified by | Preserves | Image is |
|---|---|---|---|
| Rotation | Centre and angle (anticlockwise positive, clockwise negative) | Length and angle | Congruent |
| Reflection | Mirror line | Length and angle | Congruent |
| Translation | Column vector (distance and direction) | Length and angle | Congruent |
| Enlargement | Centre and positive scale factor (fractions allowed) | Angle only | Similar, not congruent unless the scale factor is 1 |

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

### Method: describe fully a single transformation

1. Same size and same way round, just moved: **translation**. Give the column vector (image − object).
2. Same size, flipped (a mirror image): **reflection**. Give the equation of the mirror line. Find it as the perpendicular bisector of a point and its image.
3. Same size, turned: **rotation**. Give the angle with a sign or direction, and the centre. Find the centre with tracing paper, or where the perpendicular bisectors of two object–image segments meet.
4. Different size: **enlargement**. Scale factor = image length ÷ object length. Find the centre by drawing lines through each vertex and its image; they meet at the centre.
5. Write one transformation only, using the word itself ("rotation", not "turn").

Small worked reminder: a triangle with a side of 6 cm maps to a triangle whose matching side is 2 cm, the same way round. The scale factor is 2 ÷ 6 = 1/3, so the answer starts "enlargement, scale factor 1/3". The image is smaller, but it is still called an enlargement; 4MA1 uses positive scale factors only.

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

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 5, Vectors and transformation geometry: 5.1 Vectors (Higher tier only) and 5.2 Transformation geometry.
