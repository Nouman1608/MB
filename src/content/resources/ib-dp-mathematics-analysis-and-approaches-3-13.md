---
title: "IB DP Mathematics: Analysis and Approaches (AA): 3.13 The scalar product of two vectors (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-13"
description: "IB Maths AA HL 3.13 study guide: the scalar product, its properties, angles between vectors, perpendicular and parallel tests and vector proofs."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

Section 3.13 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the definition of the scalar product of two vectors, the angle between two vectors, and perpendicular and parallel vectors. It is additional higher level (AHL) content, examined at HL only. The scalar product is the main tool for angles in the rest of the vectors strand: between lines, between a line and a plane, and between planes.

This page goes deeper on 3.13 alone; the [HL vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/) covers the strand as a whole. Condense this page with the [3.13 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-13-revision-notes/) and test yourself with the [3.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-13-practice/). Vectors are written in rows here; use columns in the exam.

## Two definitions that agree

For v = (v₁, v₂, v₃) and w = (w₁, w₂, w₃):

```
Component form:   v · w = v₁w₁ + v₂w₂ + v₃w₃
Geometric form:   v · w = |v||w| cos θ
```

where θ is the angle between v and w when they are drawn from the same point, with 0 ≤ θ ≤ π. The result is a **scalar**, a single number, which is why it is called the scalar product (or dot product). In two dimensions, drop the third term.

Equating the two forms gives the angle formula:

```
cos θ = (v₁w₁ + v₂w₂ + v₃w₃) / (|v||w|)
```

## What the sign tells you

Since |v| and |w| are positive, the sign of v · w is the sign of cos θ:

| v · w | Angle θ |
|---|---|
| positive | acute (0 ≤ θ < π/2) |
| zero | right angle: the vectors are perpendicular (for non-zero vectors) |
| negative | obtuse (π/2 < θ ≤ π) |

For **parallel** vectors θ = 0 or π, so |v · w| = |v||w|. This gives a second test for parallel vectors, though comparing components (w = kv) is usually quicker.

## Properties

The guide lists these properties, and you may quote them in proofs:

- v · w = w · v (commutative)
- u · (v + w) = u · v + u · w (distributive)
- (kv) · w = k(v · w)
- v · v = |v|²

The last one is the link between the scalar product and length: it lets you find magnitudes of combinations such as |a + b| without components.

## Worked examples

### Example 1: an angle in a triangle

Find angle BAC for A(1, 0, 2), B(3, 1, 0) and C(0, 2, 1).

```
AB = (2, 1, −2),  AC = (−1, 2, −1)        both start at A
AB · AC = −2 + 2 + 2 = 2
|AB| = √(4 + 1 + 4) = 3,  |AC| = √(1 + 4 + 1) = √6
cos BAC = 2/(3√6)
BAC = 74.2° (3 s.f.)
```

The two vectors must both point **away from** the vertex of the angle. Using BA with AC would give the supplement, 105.8°.

### Example 2: lengths from the properties

Given |a| = 3, |b| = 4 and a · b = 6, find |a + b| and |a − 2b|.

```
|a + b|² = (a + b) · (a + b) = a · a + 2a · b + b · b = 9 + 12 + 16 = 37
|a + b| = √37

|a − 2b|² = a · a − 4a · b + 4b · b = 9 − 24 + 64 = 49
|a − 2b| = 7
```

Expand exactly as you would (x + y)², using v · v = |v|². Here the angle between a and b is arccos(6/12) = π/3.

### Example 3: perpendicular vectors with an unknown

Find t such that (t, 2, −1) is perpendicular to (3, t, 4).

```
3t + 2t − 4 = 0  →  t = 4/5
```

Set the scalar product to zero; this gives one linear equation for each unknown.

### Example 4: a vector perpendicular to two others

Find a non-zero vector perpendicular to both (1, 2, 0) and (0, 1, 3).

```
Let n = (x, y, z):   x + 2y = 0  and  y + 3z = 0
Choose z = 1: y = −3, x = 6, so n = (6, −3, 1)
Check: 6 − 6 + 0 = 0 and 0 − 3 + 3 = 0
```

There are infinitely many answers (any multiple of n). The vector product in [section 3.16](/resources/ib-dp-mathematics-analysis-and-approaches-3-16/) produces such a vector directly.

### Example 5: a vector proof with perpendicularity

Prove that the angle in a semicircle is a right angle.

```
Let the centre be O. Let A and B be the ends of a diameter, so OA = a and OB = −a.
Let P be on the circle, OP = p, with |p| = |a| (equal radii).
AP = p − a,  BP = p + a
AP · BP = (p − a) · (p + a) = p · p − a · a = |p|² − |a|² = 0
```

AP and BP are non-zero and their scalar product is zero, so angle APB is a right angle. The proof uses distributivity, commutativity (the cross terms p · a and a · p cancel) and v · v = |v|².

### Example 6: the angle with an axis

Find the angle between v = (2, −1, 2) and the x-axis.

```
The x-axis has direction i = (1, 0, 0)
cos θ = v · i / (|v||i|) = 2/(3 × 1) = 2/3
θ = 48.2° (3 s.f.)
```

In general the angle between v and the x-axis has cosine v₁/|v|.

## Choosing the right form

- **Components known, angle wanted:** compute v · w from components, then use the angle formula.
- **Magnitudes and angle known:** use |v||w| cos θ, for example to find v · w when |v| = 2, |w| = 5 and θ = 2π/3: v · w = 10 × (−1/2) = −5.
- **Perpendicularity:** set the component form to zero.
- **Lengths of combinations:** expand using the properties and v · v = |v|².

## Common mistakes

- Writing the answer to v · w as a vector, such as (2, 2, −2) for (1, 2, −1) · (2, 1, 2). The answer is a number: 2 + 2 − 2 = 2.
- Using one vector into the vertex and one out of it, which gives the supplement of the angle.
- Forgetting to divide by both magnitudes in the angle formula.
- Expanding (a + b) · (a + b) as a · a + b · b, without the 2a · b term.
- Testing perpendicularity with the zero vector: v · 0 = 0 for every v, but 0 has no direction.
- Calculator in the wrong mode: give degrees or radians as the question asks.

## Exam technique

- **Find the angle**: show the scalar product and both magnitudes before the inverse cosine, and give 3 s.f. or an exact form such as arccos(1/3).
- **Show that** two vectors are perpendicular: evaluate the scalar product and state "= 0, so perpendicular".
- **Hence**: a scalar product from one part is often reused, for example to find cos θ and then sin θ for a triangle's area (½|a||b| sin θ).
- **Prove**: in a geometry proof, name each property you use.
- On Paper 1, expect exact answers such as cos θ = −1/3; on Paper 2, a GDC gives the angle.

## Where to go next

- Recall the facts with the [3.13 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-3-13-revision-notes/) and practise with the [3.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-3-13-practice/).
- Revise the vector basics in the [3.12 guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-12/).
- Apply the scalar product to angles between lines in the [3.14 vector equation of a line guide](/resources/ib-dp-mathematics-analysis-and-approaches-3-14/).
