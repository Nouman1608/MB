---
title: "Edexcel International GCSE Mathematics A (4MA1): Vectors"
resourceType: "study-guides"
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
description: "Study guide for Edexcel IGCSE Maths 4MA1 section 5.1 (Higher): column vectors, modulus, vector equations, routes through diagrams and vector proofs."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This study guide goes deeper into section 5.1, Vectors, of topic 5 (Vectors and transformation geometry) in the Pearson Edexcel International GCSE Mathematics A (4MA1) specification, Issue 2 (November 2017). The Foundation Tier entry for 5.1 says "Higher Tier only", so **all of this page is Higher tier only**. Foundation candidates meet column vectors only as descriptions of translations, in section 5.2.

The [Vectors and transformation geometry study guide](/resources/edexcel-igcse-maths-4ma1-vectors-and-transformation-geometry/) introduces each skill once. This page adds vectors from coordinates, unknowns found from a modulus, vector equations, ratio work and a two-part proof. Use it with the [Vectors revision notes](/resources/edexcel-igcse-mathematics-4ma1-vectors-revision-notes/) and the [Vectors practice questions](/resources/edexcel-igcse-mathematics-4ma1-vectors-practice/).

## What the specification asks

| Statement | Students should be taught to |
|---|---|
| 5.1 A | understand that a vector has both magnitude and direction |
| 5.1 B | understand and use vector notation including column vectors (the notations →OA and **a** will be used) |
| 5.1 C | multiply vectors by scalar quantities |
| 5.1 D | add and subtract vectors |
| 5.1 E | calculate the modulus (magnitude) of a vector |
| 5.1 F | find the resultant of two or more vectors |
| 5.1 G | apply vector methods for simple geometrical proofs |

**Notation here.** A vector from A to B is written →AB. Single-letter vectors are bold, **a**; when you write by hand, underline them. Column vectors are written on one line as (x, y), with the across component first; in the exam they are printed vertically.

## Vectors from coordinates

The vector from A to B is "end minus start":

```
→AB = (coordinates of B) − (coordinates of A)
```

**Worked example 1.** A is (2, −1) and B is (7, 3). Find →AB and |→AB|.

```
→AB = (7 − 2, 3 − (−1)) = (5, 4)
|→AB| = √(5² + 4²) = √41 = 6.40 (3 s.f.)
```

→BA = (−5, −4): the same length, opposite direction.

## Modulus with an unknown

**Worked example 2.** The vector (k, 12) has magnitude 13. Find the possible values of k.

```
k² + 12² = 13²
k² = 169 − 144 = 25
k = 5 or k = −5
```

Both values give a vector of length 13; they point in different directions. Give both unless the question says k is positive.

## Vector equations

Two column vectors are equal only when **both** components are equal, so one vector equation gives two ordinary equations.

**Worked example 3.** Find p and q such that p(3, 1) + q(−1, 2) = (4, 13).

```
across: 3p − q = 4
up:     p + 2q = 13
from the first, q = 3p − 4
p + 2(3p − 4) = 13, so 7p = 21, p = 3
q = 3 × 3 − 4 = 5
```

Check: 3(3, 1) + 5(−1, 2) = (9 − 5, 3 + 10) = (4, 13). ✓

## Equal vectors and parallelograms

Equal vectors have the same magnitude and direction. In parallelogram ABCD (vertices in order), →AB = →DC and →AD = →BC.

**Worked example 4.** A(1, 2), B(5, 3) and C(6, 7) are three vertices of parallelogram ABCD. Find D.

```
→BC = (6 − 5, 7 − 3) = (1, 4)
→AD = →BC, so D = A + (1, 4) = (2, 6)
```

Check: →DC = (6 − 2, 7 − 6) = (4, 1) and →AB = (5 − 1, 3 − 2) = (4, 1). ✓

## Scalar multiples and parallel vectors

k**a** is parallel to **a** and k times as long. If k is negative, it points the opposite way. To decide whether two expressions are parallel, take out a common factor and see whether the brackets match.

**Worked example 5.** Is 4**a** − 6**b** parallel to 6**a** − 9**b**?

```
4a − 6b = 2(2a − 3b)
6a − 9b = 3(2a − 3b)
```

Both are multiples of 2**a** − 3**b**, so they are parallel. Their lengths are in the ratio 2 : 3.

## Finding routes in a diagram

Write any vector as a journey along known vectors. Going with an arrow, add it; going against an arrow, subtract it.

**Worked example 6.** In triangle OAB, →OA = **a** and →OB = **b**. M is the midpoint of AB and N is on OB with ON : NB = 2 : 1. Find →AB, →OM and →MN.

```
→AB = →AO + →OB = −a + b = b − a
→AM = ½(b − a)
→OM = →OA + →AM = a + ½b − ½a = ½a + ½b = ½(a + b)
→ON = ⅔b
→MN = →MO + →ON = −½a − ½b + ⅔b = −½a + (1/6)b
```

A point dividing a line in the ratio m : n is m/(m + n) of the way along it, so ON : NB = 2 : 1 means ON is ⅔ of OB.

## Vector proof

Statement 5.1 G asks for simple geometrical proofs. The two you will meet most are:

- **Parallel lines**: show that one vector is a scalar multiple of the other.
- **Points on a straight line (collinear)**: show that two vectors joining the points are multiples of each other **and** share a point.

Also watch for a trapezium (one pair of parallel sides) and length ratios (if →XY = 3→PQ, then XY is three times as long as PQ).

**Worked example 7 (a two-part proof).** In triangle OAB, →OA = 6**a** and →OB = 6**b**. P is on OA with OP : PA = 1 : 2, and Q is on OB with OQ : QB = 1 : 2.

(a) Show that PQ is parallel to AB and find the ratio of their lengths.

```
→OP = ⅓ × 6a = 2a        →OQ = ⅓ × 6b = 2b
→PQ = →PO + →OQ = −2a + 2b = 2(b − a)
→AB = →AO + →OB = −6a + 6b = 6(b − a) = 3 × →PQ
```

→AB is a multiple of →PQ, so **PQ is parallel to AB**, and **AB is three times as long as PQ**.

(b) R is the midpoint of AB and X is the midpoint of PQ. Prove that O, X and R lie on a straight line.

```
→OR = →OA + ½→AB = 6a + 3(b − a) = 3a + 3b = 3(a + b)
→OX = →OP + ½→PQ = 2a + (b − a) = a + b
→OR = 3 × →OX
```

→OR is a multiple of →OX, so the lines OX and OR are parallel. They share the point O, so **O, X and R are collinear**, with OX : XR = 1 : 2.

**Worked example 8 (a trapezium).** OABC is a quadrilateral with →OA = 4**a**, →OC = **c** and →CB = 2**a**. Show that OABC is a trapezium.

```
→OA = 4a = 2 × →CB, so OA is parallel to CB
→AB = →AO + →OC + →CB = −4a + c + 2a = c − 2a, which is not a multiple of →OC = c
```

Exactly one pair of sides is parallel, so OABC is a trapezium, and OA is twice as long as CB.

## Exam technique

- **"Find, in terms of a and b"**: simplify fully, collecting the **a** terms and the **b** terms.
- **"Show that"** or **"Prove that"**: end with a sentence that states the conclusion and the facts it rests on.
- Write vectors as →AB in working, and underline bold letters by hand. A plain "a" can be read as a number.
- In a long question, keep each new vector in terms of the given ones; later parts usually reuse earlier answers.

## Common mistakes

- Writing →AB as **a** − **b** when →OA = **a** and →OB = **b**. It is **b** − **a** (end minus start).
- Using ½ for a ratio of 1 : 2. The fraction is 1/(1 + 2) = ⅓.
- Concluding "collinear" from parallel vectors without naming the shared point.
- Giving only the positive value of k from a modulus equation.
- Squaring a negative component as negative inside a modulus.

## Next steps

Condense the rules with the [Vectors revision notes](/resources/edexcel-igcse-mathematics-4ma1-vectors-revision-notes/), then try the [Vectors practice questions](/resources/edexcel-igcse-mathematics-4ma1-vectors-practice/). Column vectors for translations are covered in the [Transformation geometry study guide](/resources/edexcel-igcse-mathematics-4ma1-transformation-geometry/).

## Official syllabus

Pearson Edexcel International GCSE in Mathematics (Specification A) (4MA1), Specification Issue 2, November 2017, Pearson Education Limited. Topic 5, Vectors and transformation geometry: 5.1 Vectors, statements A to G (Higher Tier only).
