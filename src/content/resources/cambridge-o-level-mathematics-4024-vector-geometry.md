---
title: "Cambridge O Level Mathematics (4024): Vector Geometry"
resourceType: "study-guides"
subject: "mathematics"
level: ["o-levels"]
topic: "Transformations and vectors"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 7.4
syllabusTopics:
  - qualification: "o-level"
    topic: "transformations-and-vectors"
    subtopic: "vector-geometry-4024"
description: "Study guide to 4024 section 7.4: position vectors, expressing vectors in terms of two others, collinear proofs, intersections and ratio in shapes."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 7.4, Vector geometry, in the Transformations and vectors topic of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. It is the part of the vectors unit that carries the longest structured questions. The overview page [Vectors in Two Dimensions: Column Vectors, Magnitude and Vector Geometry](/resources/cambridge-o-level-mathematics-vectors-in-two-dimensions-column-vectors-magnitude-and/) introduces position vectors, parallel vectors and collinear points; this guide works through harder problems in parallelograms and trapezia, including finding where two lines cross. Test yourself afterwards with the [vector geometry revision notes](/resources/cambridge-o-level-mathematics-4024-vector-geometry-revision-notes/) and the [vector geometry practice questions](/resources/cambridge-o-level-mathematics-4024-vector-geometry-practice/).

## What section 7.4 asks for

| Outcome | What you must be able to do |
|---|---|
| 7.4 (1) | Represent vectors by directed line segments |
| 7.4 (2) | Use position vectors |
| 7.4 (3) | Use the sum and difference of two or more vectors to express given vectors in terms of two coplanar vectors |
| 7.4 (4) | Use vectors to reason and to solve geometric problems, such as showing vectors are parallel, showing three points are collinear, and problems involving ratio and similarity |

## Tools you will use

- **Routes.** Any vector can be written as a sum along a route of known vectors. Going against an arrow gives a minus sign.
- **AB = b − a**, where a and b are the position vectors of A and B.
- **Fraction of a line.** If P is on AB with AP : PB = m : n, then AP = m/(m + n) × AB.
- **Parallel.** If one vector is a scalar multiple of another, they are parallel.
- **Collinear.** If AB = k BC (or AB = k AC), the vectors are parallel and share a point, so A, B and C lie on one line.
- **Equating coefficients.** If a and b are not parallel and pa + qb = ra + sb, then p = r and q = s.

The last tool is what lets you find unknown ratios. It works only because a and b point in different directions: no amount of a can ever make up a piece of b.

## Shapes give you free information

In a **parallelogram** OABC, opposite sides are equal and parallel, so if OA = a then CB = a, and if OC = c then AB = c. In a **trapezium** one pair of sides is parallel, so one side is a multiple of the other: CB = 2a means CB is parallel to OA and twice as long. In a **regular hexagon** opposite sides are equal and parallel. Read the diagram for these facts before you start, and mark every known vector with an arrow.

### Worked example 1: position vectors with coordinates

A is (1, 2) and B is (7, 5). P lies on AB with AP : PB = 1 : 2. Find the coordinates of P.

```
a = (1, 2), b = (7, 5)
AB = b − a = (6, 3)
AP = (1/3)(6, 3) = (2, 1)
OP = a + AP = (3, 3)
```

P is **(3, 3)**. The same method in letters gives OP = a + (1/3)(b − a) = (2/3)a + (1/3)b. The coefficients add to 1 for any point on the line AB, which is a quick check.

## Collinear points with a ratio

### Worked example 2

In triangle OAB, OA = a and OB = b. M is the midpoint of OA. N lies on AB with AN : NB = 2 : 1. C is the point with OC = 2b, so C lies on OB extended. Show that M, N and C are collinear and find MN : NC.

```
OM = (1/2)a
AN = (2/3)(b − a)
ON = a + (2/3)(b − a) = (1/3)a + (2/3)b
MN = ON − OM = (1/3)a + (2/3)b − (1/2)a = −(1/6)a + (2/3)b
   = (1/6)(−a + 4b)
MC = OC − OM = 2b − (1/2)a = (1/2)(−a + 4b)
```

MC = 3 MN. So MN and MC are parallel, and M is a point on both, so **M, N and C are collinear**. MN is one third of MC, so **MN : NC = 1 : 2**.

**Writing the proof.** Examiners look for three things: the two vectors written as multiples of the same expression, the statement that they are parallel, and the statement that they share a point. Without the shared point, the vectors could lie on two separate parallel lines.

## Finding where two lines meet

When two lines cross at an unknown point X, write OX in two ways, each with its own unknown scalar, and equate coefficients.

### Worked example 3

OABC is a parallelogram with OA = a and OC = c. M is the midpoint of AB. The lines OB and CM meet at X. Find the ratio OX : XB.

**Route along OB.** OB = a + c, and X is somewhere on it, so OX = λ(a + c) for some number λ.

**Route along CM.** OM = OA + AM = a + (1/2)c. Then CM = OM − OC = a − (1/2)c. X is on CM, so

```
OX = OC + μ CM = c + μ(a − (1/2)c) = μa + (1 − (1/2)μ)c
```

**Equate coefficients** (a and c are not parallel):

```
a:  λ = μ
c:  λ = 1 − (1/2)μ
```

Substituting, λ = 1 − (1/2)λ, so (3/2)λ = 1 and λ = 2/3. So OX = (2/3)OB and **OX : XB = 2 : 1**. Also μ = 2/3, so CX : XM = 2 : 1 as well.

The answer can be checked with similar triangles: triangles XOC and XBM are similar, because OC is parallel to BM, and OC is twice BM, so every length near O is twice the matching length near B.

## Ratio and similarity in a trapezium

### Worked example 4

OABC is a trapezium with OA = a, OC = c and CB = 2a. P lies on OB with OP : PB = 1 : 2.

(a) Find OB and AC in terms of a and c.

(b) Show that P lies on AC, and find AP : PC.

```
(a) OB = OC + CB = c + 2a
    AC = OC − OA = c − a

(b) OP = (1/3)(2a + c) = (2/3)a + (1/3)c
    AP = OP − OA = −(1/3)a + (1/3)c = (1/3)(c − a) = (1/3)AC
```

AP is a multiple of AC and they share A, so **P lies on AC** with **AP : PC = 1 : 2**. The diagonals of this trapezium cut each other in the ratio 1 : 2, matching the ratio of the parallel sides OA : CB = 1 : 2. Triangles OPA and BPC are similar with scale factor 2, so the area of BPC is 2² = 4 times the area of OPA.

## Common mistakes

- Following a route against an arrow without changing the sign.
- Using the ratio as a fraction directly: AP : PB = 2 : 1 means AP = (2/3)AB, not (2/1)AB or (1/2)AB.
- Writing AB = a − b instead of b − a.
- Showing two vectors are parallel and stopping, with no statement of a shared point.
- Equating coefficients of vectors that are parallel to each other.
- Leaving expressions unsimplified, so a common factor is not visible.

## Exam technique for the command words

- **Express in terms of a and b:** give a simplified expression in letters; collect a terms and b terms.
- **Show that:** the final line must match the stated result, and a sentence must give the geometric conclusion.
- **Find the ratio:** give it in the order asked, in its simplest whole-number form.
- **Hence:** use the result of the previous part rather than starting again.

## Next steps

Try the [vector geometry practice questions](/resources/cambridge-o-level-mathematics-4024-vector-geometry-practice/) and use the [vector geometry revision notes](/resources/cambridge-o-level-mathematics-4024-vector-geometry-revision-notes/) to revise. The arithmetic behind these proofs is in [vectors in two dimensions](/resources/cambridge-o-level-mathematics-4024-vectors-in-two-dimensions/), and lengths are in [magnitude of a vector](/resources/cambridge-o-level-mathematics-4024-magnitude-of-a-vector/).

## Syllabus reference

Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027, published by Cambridge University Press & Assessment. The relevant section is 7.4 Vector geometry.
