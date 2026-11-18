---
title: "OCR GCSE Mathematics (J560): Plane vector geometry"
resourceType: "study-guides"
subject: "mathematics"
level: ["gcse"]
topic: "Topic 9 – Congruence and similarity"
boards: ["ocr"]
qualifications: ["gcse"]
syllabusCodes: ["J560"]
syllabusSeries: "Version 2.1 (August 2026), for first assessment in 2017"
order: 9.3
syllabusTopics:
  - qualification: "gcse"
    topic: "congruence-and-similarity-ocr-gcse-maths"
    subtopic: "plane-vector-geometry-ocr-gcse-maths"
description: "OCR GCSE Maths J560 section 9.03 in depth: column vectors, adding, subtracting and scaling vectors, routes, ratios and vector proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 9.03, Plane vector geometry, of the OCR GCSE (9-1) Mathematics J560 specification, Version 2.1 (August 2026), for first assessment in 2017. Column vectors, drawing them on a grid, and adding, subtracting and multiplying vectors by a scalar are for **both tiers**. Using vectors in geometric arguments and proofs is **Higher tier only**.

The [isometric transformations and vectors guide](/resources/ocr-gcse-mathematics-isometric-transformations-and-vectors/) introduces column vectors and two proofs. This page goes further on 9.03 alone: vectors between points and back to coordinates, finding an unknown that makes two vectors parallel, combining vectors to make a target, position vectors of midpoints and points dividing a line in a ratio, and two more proof patterns. Condense it with the [9.03 revision notes](/resources/ocr-gcse-mathematics-j560-plane-vector-geometry-ocr-gcse-maths-revision-notes/) and test yourself with the [9.03 practice questions](/resources/ocr-gcse-mathematics-j560-plane-vector-geometry-ocr-gcse-maths-practice/).

## What the specification asks

| Ref | Content | Tier |
|---|---|---|
| 9.03a | Understand addition, subtraction and scalar multiplication of vectors | Both tiers |
| 9.03a | Use vectors in geometric arguments and proofs | Higher tier only |
| 9.03b | Represent a 2-dimensional vector as a column vector, and draw column vectors on a square or coordinate grid | Both tiers |

Notation on this page: a column vector is written (a over b), meaning a units in the x-direction and b units in the y-direction. Vectors named by a single letter are in bold, such as **a**; by hand, underline them. The vector from A to B is written **AB**.

## Column vectors and grids

A vector has a size and a direction but no fixed starting point. Every arrow 3 right and 2 down is the same vector, (3 over −2), wherever it is drawn.

**Drawing.** Start anywhere on the grid, move along the x-direction by the top number and the y-direction by the bottom number, and draw an arrow from start to finish. The arrowhead matters: it shows the direction.

**Worked example 1.** P is (−3, 2) and Q is (1, −4). Find **PQ** and **QP**, and use **PQ** to find the midpoint of PQ.

```
PQ = (1 − (−3) over −4 − 2) = (4 over −6)
QP = −PQ = (−4 over 6)
half of PQ = (2 over −3)
midpoint = P + (2 over −3) = (−3 + 2, 2 − 3) = (−1, −1)
```

Always subtract "start from finish": the coordinates of the end point minus those of the start point.

## Adding, subtracting and scaling

Work on the top numbers and the bottom numbers separately.

**Worked example 2.** **u** = (3 over −2) and **v** = (−1 over 4). Find 2**u** − 3**v** and ½(**u** + **v**).

```
2u = (6 over −4),  3v = (−3 over 12)
2u − 3v = (6 − (−3) over −4 − 12) = (9 over −16)
u + v = (2 over 2),  ½(u + v) = (1 over 1)
```

Geometrically:

- **u** + **v** means "go along **u**, then along **v**". The result is the third side of the triangle they make.
- −**v** is **v** reversed, so **u** − **v** = **u** + (−**v**).
- k**u** is parallel to **u**: k times as long, in the same direction if k > 0 and the opposite direction if k < 0.

### Parallel vectors

Two vectors are parallel when one is a scalar multiple of the other.

**Worked example 3.** (a) Find k so that (k over 6) is parallel to (2 over 3). (b) Is (−6 over −9) parallel to (2 over 3)?

```
(a) 6 = 3 × 2, so the multiplier is 2, and k = 2 × 2 = 4
(b) (−6 over −9) = −3 × (2 over 3), so yes: parallel, opposite direction, 3 times as long
```

Test both components with the same multiplier. (6 over 8) is not parallel to (2 over 3), because 6 = 3 × 2 but 8 is not 3 × 3.

### Making a target vector

**Worked example 4.** **a** = (2 over 1) and **b** = (−1 over 3). Find numbers p and q so that p**a** + q**b** = (8 over −3).

```
top:     2p − q = 8
bottom:  p + 3q = −3
from the top line, q = 2p − 8
p + 3(2p − 8) = −3  →  7p = 21  →  p = 3,  q = −2
```

Check: 3(2 over 1) − 2(−1 over 3) = (6 + 2 over 3 − 6) = (8 over −3).

## Routes through a diagram

In a diagram, write any vector as a route along vectors you know. Going against an arrow changes its sign.

With an origin O, **OA** = **a** and **OB** = **b**:

```
AB = AO + OB = −a + b = b − a
```

### Midpoints and ratios

If M is the midpoint of AB:

```
OM = OA + ½AB = a + ½(b − a) = ½(a + b)
```

If P lies on AB with AP : PB = 1 : 3, then AP is one quarter of AB:

```
OP = a + ¼(b − a) = ¾a + ¼b
```

The fractions come from the ratio: AP : PB = m : n means **AP** = m/(m + n) of **AB**. A common slip is to use 1/3 for a 1 : 3 ratio; the whole line has 1 + 3 = 4 parts.

## Vector proofs (Higher tier only)

The three results you are usually asked to show:

- **Parallel:** one vector is a scalar multiple of the other.
- **Collinear:** two vectors along the path are multiples **and** share a point.
- **Ratio or length:** the scalar tells you how many times as long, for example **PR** = 3**PQ**.

**Worked example 5 (Higher tier only, a midpoint theorem).** In triangle OAB, **OA** = **a** and **OB** = **b**. M is the midpoint of OA and N is the midpoint of OB. Prove that MN is parallel to AB and half its length.

```
OM = ½a,  ON = ½b
MN = MO + ON = −½a + ½b = ½(b − a)
AB = b − a
so MN = ½AB
```

**MN** is a scalar multiple of **AB**, so MN is parallel to AB, and the scalar ½ shows MN is half the length of AB.

**Worked example 6 (Higher tier only, collinear points).** OABC is a parallelogram with **OA** = **a** and **OC** = **c**. M is the midpoint of BC. N is the point on the diagonal OB with ON : NB = 2 : 1. Prove that A, N and M lie on a straight line, and find AN : NM.

```
OB = a + c                      (OA then AB, and AB = OC)
OM = OC + CM = c + ½a           (CM is half of CB, and CB = OA)
ON = ⅔OB = ⅔a + ⅔c
AN = ON − OA = −⅓a + ⅔c
AM = OM − OA = −½a + c
AN = ⅔(−½a + c) = ⅔AM
```

**AN** is a multiple of **AM**, so they are parallel; they share the point A, so A, N and M are collinear. Since AN is ⅔ of AM, N splits AM in the ratio **AN : NM = 2 : 1**.

Write the conclusion in words. A correct line of algebra that ends without "so A, N and M are collinear" leaves the proof unfinished.

## Common mistakes

- Subtracting the coordinates the wrong way round, so the vector points backwards.
- Drawing a vector without an arrowhead, or from the wrong end.
- Multiplying only one component by the scalar.
- Writing **AB** as **a** − **b** instead of **b** − **a**.
- Using 1/3 instead of 1/4 for a point dividing a line in the ratio 1 : 3.
- Claiming collinearity from parallel vectors alone, without a shared point.
- Forgetting to bold or underline single-letter vectors, so they look like numbers.

## Exam technique for OCR command words

- **Write down the column vector**: give it as a column (a over b), not as coordinates.
- **Draw the vector** on the grid: an arrow, with the arrowhead, of the right size and direction.
- **Find in terms of a and b**: give a simplified expression, collecting the **a** terms and the **b** terms.
- **Show that** or **Prove** (Higher tier only): write each route, simplify, factor out a scalar, then state the geometrical conclusion in words.

## Next steps

- Condense the methods with the [plane vector geometry revision notes](/resources/ocr-gcse-mathematics-j560-plane-vector-geometry-ocr-gcse-maths-revision-notes/).
- Test yourself with the [plane vector geometry practice questions](/resources/ocr-gcse-mathematics-j560-plane-vector-geometry-ocr-gcse-maths-practice/).
- See column vectors describing movement in the [plane isometric transformations guide](/resources/ocr-gcse-mathematics-j560-plane-isometric-transformations-ocr-gcse-maths/).

## Official syllabus

OCR GCSE (9-1) Mathematics J560, Version 2.1 (August 2026), for first assessment in 2017, published by OCR. Section 9.03, Plane vector geometry.
