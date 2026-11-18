---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): The vector product of two vectors (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 3 -- Geometry and trigonometry"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 3.16
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-geometry-and-trigonometry"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-3-16"
description: "IB Maths AA HL 3.16 study guide: computing v × w, its properties and direction, and using |v × w| for areas of parallelograms and triangles."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Section 3.16 of the IB *Mathematics: analysis and approaches guide* (first assessment 2021) covers the definition of the vector product of two vectors, the properties of the vector product, and the geometric interpretation of |v × w|, which gives the area of a parallelogram and hence of a triangle. It is additional higher level (AHL) content, examined at HL only. The vector product is also how you find a normal to a plane in the next section.

This page goes deeper on 3.16 alone; the [HL vectors, lines and planes study guide](/resources/ib-dp-mathematics-aa-hl-vectors-lines-planes/) covers the whole strand. Condense this page with the [3.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16-revision-notes/) and test yourself with the [3.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16-practice/). Vectors are written in rows here; use columns in the exam.

## The definition

For v = (v₁, v₂, v₃) and w = (w₁, w₂, w₃):

```
v × w = (v₂w₃ − v₃w₂,  v₃w₁ − v₁w₃,  v₁w₂ − v₂w₁)
```

The vector product (also called the cross product) is a **vector**, unlike the scalar product, and it is defined for vectors in three dimensions. Geometrically,

```
v × w = |v||w| sin θ n
```

where θ is the angle between v and w and n is a unit vector perpendicular to both, in the direction given by the right-hand rule: point the fingers of your right hand along v, curl them towards w, and your thumb points along n.

### A reliable way to compute it

Each component leaves out its own position and "cross-multiplies" the other two in cyclic order.

- **First component:** cover the first entries and work out v₂w₃ − v₃w₂.
- **Second component:** use the cyclic order 3 then 1: v₃w₁ − v₁w₃.
- **Third component:** v₁w₂ − v₂w₁.

Many students set this out as a 3 × 3 determinant with i, j, k in the top row; that gives the same result, but remember the minus sign on the j term in that layout.

**Always check your answer**: the result must have a zero scalar product with both v and w.

### Base vectors

i × j = k, j × k = i, k × i = j, and reversing the order changes the sign: j × i = −k. Any vector crossed with itself gives 0, so i × i = 0.

## Properties

The guide lists these, and you may use them in proofs:

| Property | Meaning |
|---|---|
| v × w = −w × v | order matters: reversing it reverses the direction |
| u × (v + w) = u × v + u × w | distributes over addition |
| (kv) × w = k(v × w) | scalars move outside |
| v × v = 0 | a vector is parallel to itself |
| v × w = 0 for non-zero v, w | v and w are parallel |
| v · (v × w) = 0 | v × w is perpendicular to v (and to w) |

## The geometric meaning of |v × w|

|v × w| = |v||w| sin θ. In a parallelogram with sides v and w, the base is |v| and the perpendicular height is |w| sin θ, so

- **area of the parallelogram** with sides v and w = |v × w|;
- **area of the triangle** with sides v and w = ½|v × w|.

For triangle ABC this is ½|AB × AC|, with both vectors starting at the same vertex.

## Worked examples

### Example 1: computing and checking

Find (2, −1, 3) × (1, 4, −2).

```
first:   (−1)(−2) − (3)(4) = 2 − 12 = −10
second:  (3)(1) − (2)(−2) = 3 + 4 = 7
third:   (2)(4) − (−1)(1) = 8 + 1 = 9
v × w = (−10, 7, 9)
Check:  (−10, 7, 9) · (2, −1, 3) = −20 − 7 + 27 = 0
        (−10, 7, 9) · (1, 4, −2) = −10 + 28 − 18 = 0
```

### Example 2: area of a parallelogram, and sin θ

Find the area of the parallelogram with sides a = (3, 0, 1) and b = (1, 2, −1), and hence the sine of the angle between a and b.

```
a × b = (0·(−1) − 1·2,  1·1 − 3·(−1),  3·2 − 0·1) = (−2, 4, 6)
Area = √(4 + 16 + 36) = √56 = 2√14
sin θ = |a × b|/(|a||b|) = 2√14/(√10 × √6) = √(14/15)
```

Check with the scalar product: a · b = 3 + 0 − 1 = 2, so cos²θ = 4/60 = 1/15 and sin²θ = 14/15. Note that sin θ alone cannot tell you whether θ is acute or obtuse; the sign of a · b decides (here it is positive, so θ is acute).

### Example 3: a triangle and a perpendicular direction

For P(1, 1, 0), Q(2, 3, 1) and R(0, 2, 2), find the area of triangle PQR and a unit vector perpendicular to the plane containing it.

```
PQ = (1, 2, 1),  PR = (−1, 1, 2)
PQ × PR = (2·2 − 1·1,  1·(−1) − 1·2,  1·1 − 2·(−1)) = (3, −3, 3)
|PQ × PR| = √27 = 3√3
Area = 3√3/2
Unit perpendicular = (3, −3, 3)/(3√3) = (1/√3)(1, −1, 1)
```

The negative of this vector is also a correct answer. A vector perpendicular to two directions in a plane is a **normal** to that plane, which is how the [3.17 equations of a plane guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-17/) uses it.

### Example 4: a test for parallel vectors

(2, −4, 6) × (−3, 6, −9) = (36 − 36, −18 + 18, 12 − 12) = (0, 0, 0), so the vectors are parallel. Here (−3, 6, −9) = −(3/2)(2, −4, 6), which is quicker to see directly; the vector product test is useful when the vectors contain unknowns.

### Example 5: a proof with the properties

Show that (a + b) × (a − b) = −2(a × b).

```
(a + b) × (a − b) = a × a − a × b + b × a − b × b      (distributive)
                  = 0 − a × b − a × b − 0               (v × v = 0, b × a = −a × b)
                  = −2(a × b)
```

Geometrically, a + b and a − b are the diagonals of the parallelogram on a and b, so the parallelogram on its diagonals has twice the area of the original.

## Choosing between the two products

| You want | Use |
|---|---|
| An angle (with its type) | scalar product: cos θ = v · w/(\|v\|\|w\|) |
| A test for perpendicular vectors | scalar product = 0 |
| A test for parallel vectors | vector product = 0 (or compare components) |
| A vector perpendicular to two vectors | vector product |
| The area of a parallelogram or triangle | magnitude of the vector product |

## Common mistakes

- Sign error in the second component: it is v₃w₁ − v₁w₃, not v₁w₃ − v₃w₁.
- Treating the vector product as commutative; w × v = −(v × w).
- Forgetting the ½ for a triangle.
- Using position vectors such as OB and OC instead of displacement vectors such as AB and AC for the area of triangle ABC.
- Giving the area as the vector itself rather than its magnitude.
- Deducing an obtuse angle from |v × w|; the sine is the same for θ and π − θ.

## Exam technique

- **Find** v × w: show each component's working on Paper 1, where no GDC is allowed; on Paper 2 a GDC computes it.
- **Verify** or **show** that a vector is perpendicular to two others: give both scalar products equal to zero.
- **Find the area**: write the formula ½|AB × AC|, the vector product, its magnitude and then the area, with exact surds where possible.
- **Hence** find a normal or a plane: the vector product from the previous part is the intended normal.
- **Prove**: name each property as you use it.

## Where to go next

- Recall the facts with the [3.16 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16-revision-notes/) and practise with the [3.16 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-16-practice/).
- Compare it with the scalar product in the [3.13 guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-3-13/).
