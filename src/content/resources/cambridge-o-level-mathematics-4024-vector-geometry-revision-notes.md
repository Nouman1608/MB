---
title: "Cambridge O Level Mathematics (4024): Vector Geometry -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for 4024 section 7.4: routes, position vectors, ratio on a line, parallel and collinear proofs and equating coefficients, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 7.4, Vector geometry, of the Cambridge O Level Mathematics (Syllabus D) 4024 syllabus for 2025, 2026 and 2027. Full worked proofs are in the [vector geometry study guide](/resources/cambridge-o-level-mathematics-4024-vector-geometry/), and exam-style problems are in the [vector geometry practice questions](/resources/cambridge-o-level-mathematics-4024-vector-geometry-practice/).

## The four outcomes

1. Represent vectors by directed line segments.
2. Use position vectors.
3. Express vectors in terms of two coplanar vectors using sums and differences.
4. Reason with vectors: parallel vectors, collinear points, ratio and similarity.

## Key terms

| Term | Meaning |
|---|---|
| Directed line segment | a line with an arrow; it represents a vector |
| Position vector | the vector from the origin O to a point, so OA = a |
| Coplanar vectors | vectors in the same plane; any vector in that plane can be written as pa + qb if a and b are not parallel |
| Parallel vectors | one is a scalar multiple of the other |
| Collinear points | points on one straight line |
| Equating coefficients | matching the numbers in front of a and b on both sides |

## Core results

```
AB = OB − OA = b − a
AB = AO + OB = −a + b       (a route through O)
Midpoint M of AB:   OM = (1/2)(a + b)
P on AB, AP : PB = m : n:   AP = m/(m + n) × AB
                            OP = (n/(m + n))a + (m/(m + n))b
```

For a point on AB, the coefficients of a and b in OP always add to 1.

## Using the shape

| Shape | Free information |
|---|---|
| Parallelogram OABC | CB = OA, AB = OC |
| Trapezium with CB parallel to OA | CB = k OA for some number k |
| Regular hexagon ABCDEF with AB = a, BC = b | AD = 2b, CD = b − a, DE = −a, EF = −b, FA = a − b |
| Triangle with midpoints | joining two midpoints gives half the third side, parallel to it |

## Proof templates

**Parallel.** "PQ = 4a − 6b = 2(2a − 3b) and RS = −6a + 9b = −3(2a − 3b). So RS = −(3/2)PQ, so PQ is parallel to RS."

**Collinear.** "PQ = 2a − 2b and QR = 2a − 2b. QR = PQ, so PQ and QR are parallel, and Q is a common point, so P, Q and R are collinear." (Here OP = a + b, OQ = 3a − b and OR = 5a − 3b, and Q is the midpoint of PR.)

**Intersection.** Write the unknown point in two ways, OX = λ(...) along one line and OX = (start) + μ(...) along the other. Equate the a coefficients and the b coefficients, and solve for λ and μ.

## Equating coefficients example

If (p + 2)a + 3b = 5a + (q − 1)b, with a and b not parallel:

```
a: p + 2 = 5    so p = 3
b: 3 = q − 1    so q = 4
```

## Ratio and similarity reminders

- If MN = k AB with k positive, MN is parallel to AB and k times as long.
- Parallel lines in a triangle create similar triangles. Length ratio 1 : k gives area ratio 1 : k².
- A ratio from a vector multiple: if MC = 3 MN, then MN : NC = 1 : 2.

## Exam traps

- Going against an arrow without a minus sign.
- AB written as a − b.
- AP : PB = 1 : 3 turned into AP = (1/3)AB instead of (1/4)AB.
- A collinear proof with no "common point" sentence.
- Unsimplified expressions that hide a common factor.
- Equating coefficients when the two base vectors are parallel.
- A ratio given the wrong way round, such as NC : MN instead of MN : NC.

## Self-test

1. OA = a and OB = b. Write AB and BA in terms of a and b.
2. M is the midpoint of AB. Find OM.
3. P lies on AB with AP : PB = 1 : 3. Find OP in terms of a and b.
4. OABC is a parallelogram with OA = a and OC = c. Write down AB, CB and AC.
5. Show that 6a − 3b and −4a + 2b are parallel.
6. OP = a + b, OQ = 3a − b and OR = 5a − 3b. Show that P, Q and R are collinear and state PQ : QR.
7. Find p and q if (p + 2)a + 3b = 5a + (q − 1)b, where a and b are not parallel.
8. In a regular hexagon ABCDEF, AB = a and BC = b. Find CD and AD.
9. MN = (2/5)AB. Describe the relationship between MN and AB.
10. In triangle OAB, M and N are the midpoints of OA and OB. Show that MN = (1/2)AB.
11. A is (2, −1) and B is (10, 3). P lies on AB with AP : PB = 3 : 1. Find the coordinates of P.
12. MC = 4 MN, with M, N and C collinear. Find MN : NC.

### Answers

1. **AB = b − a**, **BA = a − b**.
2. **OM = (1/2)(a + b)**.
3. OP = a + (1/4)(b − a) = **(3/4)a + (1/4)b**.
4. **AB = c**, **CB = a**, **AC = c − a**.
5. 6a − 3b = 3(2a − b) and −4a + 2b = −2(2a − b), so each is a multiple of 2a − b: **parallel** (opposite directions).
6. PQ = 2a − 2b and QR = 2a − 2b, so QR = PQ; Q is common, so **collinear**, **PQ : QR = 1 : 1**.
7. **p = 3**, **q = 4**.
8. **CD = b − a**, **AD = 2b**.
9. **Parallel** and in the same direction, with MN **two-fifths** the length of AB.
10. OM = (1/2)a, ON = (1/2)b, MN = (1/2)b − (1/2)a = **(1/2)(b − a) = (1/2)AB**.
11. AB = (8, 4), AP = (3/4)(8, 4) = (6, 3), so P is **(8, 2)**.
12. MN is one quarter of MC, so **MN : NC = 1 : 3**.
