---
title: "Edexcel International GCSE Mathematics A (4MA1): Vectors -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["igcse"]
topic: "Vectors and transformation geometry"
boards: ["edexcel"]
qualifications: ["igcse"]
syllabusCodes: ["4MA1"]
syllabusSeries: "Specification Issue 2, November 2017"
order: 5.1
syllabusTopics:
  - qualification: "igcse"
    topic: "vectors-and-transformation-geometry-edexcel-igcse-maths"
    subtopic: "vectors-edexcel-igcse-maths"
description: "Revision notes for Edexcel IGCSE Maths 4MA1 section 5.1 (Higher): notation, column vectors, modulus, routes, ratios, proof checklists and a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Condensed recall for section 5.1 (Vectors) of the 4MA1 specification. The whole section is **Higher tier only**. Worked examples and full proofs are in the [Vectors study guide](/resources/edexcel-igcse-mathematics-4ma1-vectors-edexcel-igcse-maths/); exam-style questions are in the [Vectors practice questions](/resources/edexcel-igcse-mathematics-4ma1-vectors-edexcel-igcse-maths-practice/).

## Key terms

| Term | Meaning |
|---|---|
| Vector | A quantity with magnitude and direction |
| Scalar | A quantity with magnitude only, such as 3 or −½ |
| Column vector (x, y) | x across (right positive), y up (up positive) |
| Modulus | The length (magnitude) of a vector, written with vertical bars around it |
| Resultant | The single vector equal to two or more vectors in sequence |
| Position vector | The vector from the origin O to a point |
| Parallel vectors | One is a scalar multiple of the other |
| Collinear | Lying on one straight line |

## Notation

- →AB: vector from A to B. **a**: a single vector (underline by hand).
- →BA = −→AB.
- The specification uses both →OA and **a** notations.

## Column vector arithmetic

```
k(x, y) = (kx, ky)
(a, b) + (c, d) = (a + c, b + d)
(a, b) − (c, d) = (a − c, b − d)
|(x, y)| = √(x² + y²)
```

Examples: 3(2, −1) = (6, −3). (4, 1) − (−2, 5) = (6, −4). |(6, −8)| = 10.

## From coordinates

- →AB = B − A ("end minus start").
- Midpoint of AB = ½(A + B).
- Parallelogram ABCD: →AB = →DC, →AD = →BC, so D = A + →BC.

## Unknowns

- Modulus equation: |(k, 5)| = 13 → k² = 144 → k = ±12. Give both.
- Vector equation: equate the across parts and the up parts, then solve the two simultaneous equations. Check by substituting back.

## Routes in a diagram

- With the arrow: **+**. Against the arrow: **−**.
- Choose any route of known vectors; all routes give the same answer, so a second route is a check.
- Ratio m : n along a line → m/(m + n) of the way from the first point.

| Ratio XP : PY | →XP = |
|---|---|
| 1 : 1 (midpoint) | ½→XY |
| 1 : 2 | ⅓→XY |
| 2 : 1 | ⅔→XY |
| 3 : 1 | ¾→XY |
| 2 : 3 | ⅖→XY |

## Proof checklists

**Parallel:** write one vector as a number × the other. Say "so XY is parallel to PQ".

**Length ratio:** if →XY = k→PQ (k positive), XY is k times as long as PQ.

**Collinear (three points on a line):** show →XY = k→XZ (or a multiple of →YZ), then state:
- the vectors are parallel, **and**
- they share the point X (or Y),
- so X, Y and Z lie on a straight line.

**Trapezium:** one pair of sides parallel, the other pair not parallel.

**Parallelogram:** both pairs of opposite sides are equal vectors.

## Mini-proof to copy the layout of

→OA = **a**, →OB = **b**, →OC = 3**a**, and D is the point with →OD = 3**b**. Show that CD is parallel to AB.

```
→AB = −a + b = b − a
→CD = −3a + 3b = 3(b − a) = 3→AB
```

→CD is a multiple of →AB, so CD is parallel to AB, and CD is three times as long. Two lines of working, then one sentence giving the conclusion and the reason: that is the shape of every vector proof at this level.

## Simplifying

Collect **a** terms and **b** terms: 2**a** + 3**b** − ½**a** − **b** = 1½**a** + 2**b**. Factorise to show parallel: 3**a** − 6**b** = 3(**a** − 2**b**).

## Exam traps

- →AB written as A − B.
- (−5)² written as −25 inside a modulus.
- Ratio 1 : 2 treated as ½.
- Only the positive root in a modulus equation.
- "Collinear" claimed from parallel vectors with no common point named.
- Leaving answers unsimplified, such as **a** + ½(**b** − **a**).
- Writing a vector without an arrow or underline, so it reads as a number.

## Self-test

1. **a** = (2, 5), **b** = (−3, 1). Find 3**a** − **b**.
2. Find |(−5, 12)|.
3. A is (4, −1), B is (−2, 7). Find →AB.
4. |(k, 6)| = 10. Find k.
5. Solve m(1, 2) + n(3, −1) = (7, 0).
6. Is 2**a** + 4**b** parallel to **a** + 2**b**? Explain.
7. →OA = **a**, →OB = **b**. Find →BA.
8. P divides AB in the ratio 3 : 2. What fraction of →AB is →AP?
9. M is the midpoint of AB, with →OA = **a**, →OB = **b**. Find →OM.
10. →XY = 4**c** and →YZ = 2**c**. What can you say about X, Y and Z?
11. Simplify **a** + ⅓(**b** − **a**).
12. ABCD is a parallelogram with A(0, 0), B(3, 1), D(1, 4). Find C.

### Answers

1. (6, 15) − (−3, 1) = (9, 14).
2. √(25 + 144) = 13.
3. (−6, 8).
4. k² = 64, so k = 8 or −8.
5. m + 3n = 7 and 2m − n = 0, so n = 2m, 7m = 7: m = 1, n = 2.
6. Yes: 2**a** + 4**b** = 2(**a** + 2**b**).
7. **a** − **b**.
8. 3/5.
9. ½(**a** + **b**).
10. →XY = 2→YZ, so they are parallel and share Y: X, Y and Z are collinear.
11. ⅔**a** + ⅓**b**.
12. C = B + →AD = (3, 1) + (1, 4) = (4, 5).

## Frequently asked questions

**Is vectors on the Foundation tier of 4MA1?**
No. Section 5.1 is Higher tier only. Foundation candidates use column vectors only to describe translations in section 5.2.

**How do you find the magnitude of a vector?**
Use Pythagoras' theorem on its components: |(x, y)| = √(x² + y²). Square negative components in full, so (−5)² = 25.

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017. Topic 5, Vectors and transformation geometry: 5.1 Vectors, statements A to G (Higher Tier only).
