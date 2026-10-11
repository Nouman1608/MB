---
title: "OCR A Level Mathematics A: Vectors in two and three dimensions (H240)"
seoTitle: "OCR A Level Maths Vectors in 2D and 3D Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Vectors in two and three dimensions"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 123
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "vectors-ocr-alevel-maths"
description: "Study guide to vectors in two and three dimensions for OCR A Level Mathematics A (H240): magnitude, direction, position vectors, forces and kinematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide teaches section **1.10 Vectors (1.10a to 1.10h)** of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. The specification places vectors in its Pure Mathematics content, which Papers 1, 2 and 3 all assess. Two-dimensional vectors are Stage 1 content, shared with AS. Three-dimensional vectors (1.10b) and kinematics with vectors (1.10h) are **A Level only**.

Use it with the [vectors revision notes](/resources/ocr-a-level-mathematics-vectors-in-two-and-three-dimensions-revision-notes/) and the [vectors practice questions](/resources/ocr-a-level-mathematics-vectors-in-two-and-three-dimensions-practice/). The course hub is at [/boards/ocr/a-level/mathematics/](/boards/ocr/a-level/mathematics/), the printable checklist is at [/checklists/ocr/a-level/mathematics/](/checklists/ocr/a-level/mathematics/), and the [free 10-minute diagnostics](/diagnostics/) show you where to start. For the wider course see the [pure mathematics overview](/resources/ocr-a-level-mathematics-pure-mathematics/).

## What section 1.10 covers

| Ref | You must be able to | Stage |
|---|---|---|
| 1.10a | Use vectors in two dimensions, as xi + yj or as a column vector | Stage 1 |
| 1.10b | Use vectors in three dimensions, as xi + yj + zk or a column vector | A Level only |
| 1.10c | Find magnitude and direction; convert between component and magnitude/direction form | Stage 1 |
| 1.10d | Add vectors diagrammatically and algebraically; multiply by scalars; know the geometry | Stage 1 |
| 1.10e | Understand and use position vectors | Stage 1 |
| 1.10f | Calculate the distance between two points from their position vectors | Stage 1 |
| 1.10g | Solve problems in pure mathematics and in context, including forces | Stage 1 |
| 1.10h | Solve problems in kinematics | A Level only |

The specification extends 1.10c to 1.10g to three dimensions but **excludes the direction of a vector in three dimensions**. That is outside the specification, so a 3D vector is described by components or by a unit vector.

## 1.10a and 1.10b: notation

A **scalar** has size only (mass, time, speed, distance). A **vector** has size and direction (displacement, velocity, acceleration, force). Write vectors in bold in print and underlined by hand, a̲, so that you never confuse them with scalars. A vector from A to B is written →AB or a.

The same vector can be written in either form:

```
3i − 2j + 5k   =   ( 3)
                   (−2)
                   ( 5)
```

Here i, j and k each have length 1 and point along the x-, y- and z-axes. Equal vectors have equal components, so a vector does not depend on where it is drawn.

## 1.10c: magnitude, direction and unit vectors

The **magnitude** (modulus) of a vector is its length. Write |a| for the magnitude of a and |→AB| for the magnitude of →AB.

```
|xi + yj|      = √(x² + y²)
|xi + yj + zk| = √(x² + y² + z²)
```

A **unit vector** has magnitude 1. The unit vector in the direction of a is â = a/|a|.

In two dimensions the **direction** is the angle the vector makes with a line parallel to the positive x-axis, measured anticlockwise, in the interval [0°, 360°). Sketch the vector first, then use tan⁻¹ and adjust for the quadrant.

**Example 1.** Find the magnitude and direction of a = 4i − 9j.

```
|a| = √(16 + 81) = √97 ≈ 9.85
Sketch: x > 0, y < 0, so the fourth quadrant.
Acute angle = tan⁻¹(9/4) = 66.04...°
Direction = 360° − 66.04...° = 294.0° (1 d.p.)
```

**Example 2.** A vector has magnitude 26 and direction 215°. Write it in component form.

```
x = 26 cos 215° = −21.3
y = 26 sin 215° = −14.9
vector = −21.3i − 14.9j   (3 s.f.)
```

Both components are negative because 215° is in the third quadrant. The sign comes out correctly if you use the full angle in cos and sin.

**Example 3 (A Level only).** Find the unit vector in the direction of p = 4i + 4j − 7k.

```
|p| = √(16 + 16 + 49) = √81 = 9
p̂ = (4i + 4j − 7k)/9 = (4/9)i + (4/9)j − (7/9)k
```

A vector of magnitude 45 in the same direction is 45p̂ = 20i + 20j − 35k.

## 1.10d: adding vectors and scalar multiples

**Algebraically**, add or subtract matching components. **Diagrammatically**, place the tail of b at the head of a. The **resultant** a + b is the single arrow from the tail of a to the head of b, which gives a triangle of vectors. A closed loop of vectors has resultant 0.

Multiplying by a scalar k scales the length by |k|. If k is negative the direction reverses. So −a is a vector of the same length pointing the opposite way, and a − b means a + (−b).

Vectors a and b are **parallel** if b = ka for some non-zero scalar k. **Equal** vectors have the same magnitude and the same direction.

**Example 4 (A Level only).** The vector a = 3i − 2j + 5k is parallel to b = 6i + pj + qk. Find p and q.

```
6 = 2 × 3, so b = 2a
p = 2 × (−2) = −4
q = 2 × 5 = 10
```

**Equating components.** If a and b are not parallel, then ma + nb = ra + sb forces m = r and n = s. In component form, compare the i parts and the j parts to get two equations.

**Example 5.** Find m and n if m(3i − j) + n(i + 2j) = 10i + 6j.

```
i:  3m + n = 10
j: −m + 2n = 6
From the first, n = 10 − 3m.
−m + 20 − 6m = 6, so 7m = 14, m = 2, n = 4.
```

## 1.10e and 1.10f: position vectors and distance

The **position vector** of A is →OA, the journey from the origin O to A. If A is (2, −1, 3) then a = 2i − j + 3k.

A **displacement vector** between two points is "end minus start":

```
→AB = →OB − →OA = b − a
```

The **distance** between A and B is |→AB|. In two dimensions, for the points ai + bj and ci + dj, it is √((c − a)² + (d − b)²). The straight-line version of this is in the [straight lines and circles guide](/resources/ocr-a-level-mathematics-straight-lines-and-circles/).

You will also meet the terms **component vector** (the part of a vector along one axis), **resultant vector** (the sum of vectors) and **unit vector**.

**Example 6 (A Level only).** A is (2, −1, 3) and B is (−2, 5, −1). Find →AB and the distance AB.

```
→AB = (−2 − 2)i + (5 − (−1))j + (−1 − 3)k = −4i + 6j − 4k
AB = √(16 + 36 + 16) = √68 = 2√17 ≈ 8.25
```

**Dividing a line.** When AP : PB = m : n, the point P has position vector p = a + m(b − a)/(m + n). Setting m = n gives the midpoint, (a + b)/2.

## 1.10g: problems in pure mathematics

Vectors prove geometric facts without coordinates. Pick two non-parallel vectors as a base, write every other vector in terms of them, and compare.

**Example 7.** ABCD is a trapezium with →AB = a, →AD = b and →DC = 2a. F is the point on AC with AF : FC = 1 : 2. Show that F lies on the diagonal BD and find BF : FD.

```
→AC = →AD + →DC = b + 2a
→AF = (1/3)→AC = (2/3)a + (1/3)b
→BD = →AD − →AB = b − a
→BF = →AF − →AB = (2/3)a + (1/3)b − a = (1/3)b − (1/3)a = (1/3)→BD
```

→BF is a multiple of →BD and both start at B, so B, F and D are collinear: F lies on BD. BF is one third of BD, so **BF : FD = 1 : 2**.

Finish with a sentence in words: the vectors are parallel and share a point, so the points are collinear.

## 1.10g: problems in context, including forces

A force is a vector, so forces acting at a point combine by vector addition to give a **resultant**. A particle is in **equilibrium** if that resultant is the zero vector. Newton's second law, F = ma, also holds in vector form, so the resultant force and the acceleration point the same way.

**Example 8.** Forces F₁ = (6i + 2j) N and F₂ = (−9i + 7j) N act on a particle. A third force F₃ keeps it in equilibrium. Find F₃, its magnitude and its direction.

```
F₁ + F₂ = −3i + 9j
F₃ = −(F₁ + F₂) = 3i − 9j
|F₃| = √(9 + 81) = √90 = 3√10 ≈ 9.49 N
Fourth quadrant: tan⁻¹(9/3) = 71.57...°
Direction = 360° − 71.57...° = 288.4° (1 d.p.)
```

If F₃ were removed, the resultant would be −3i + 9j, which has the same magnitude, 9.49 N, in the opposite direction, 108.4°. For a particle of mass 2 kg this gives acceleration (−1.5i + 4.5j) m s⁻².

## 1.10h: kinematics (A Level only)

The constant acceleration formulae in section 3.02e hold in vector form, with the same letters but vector quantities:

```
s = ut + ½at²      v = u + at
s = vt − ½at²      s = ½(u + v)t
```

Here s is the displacement from the start. The position at time t is r = r₀ + s, where r₀ is the initial position. The velocity vector gives the direction of motion and the acceleration vector gives the direction of the resultant force. **Speed** is |v|, a scalar.

**Example 9.** A particle has position 4i + 6j m at t = 0, velocity (3i − 2j) m s⁻¹ and constant acceleration (−i + 0.5j) m s⁻². Find its velocity and position when t = 6, then its position when it is moving parallel to i.

```
t = 6:  v = (3i − 2j) + 6(−i + 0.5j) = −3i + j
        speed = √10 ≈ 3.16 m s⁻¹
        r = (4i + 6j) + 6(3i − 2j) + 18(−i + 0.5j)
          = (4 + 18 − 18)i + (6 − 12 + 9)j = 4i + 3j
Parallel to i: the j-component of v is zero.
        −2 + 0.5t = 0, so t = 4
        r = (4 + 12 − 8)i + (6 − 8 + 4)j = 8i + 2j
```

## Common errors

- Forgetting the order in →AB = b − a. It is end minus start.
- Writing the direction as the acute angle from a calculator. A vector such as −3i + 7j has direction 113.2°, not 66.8°.
- Using √(x + y) or leaving out a square, or adding magnitudes: |a + b| is not |a| + |b|.
- Dividing a vector by its largest component instead of its magnitude to make a unit vector.
- Mixing scalars and vectors, for example writing a force as "6" when its direction matters, or giving speed as a vector.
- Proving collinearity with only one vector. You need two vectors with a common point, or equal ratios of components.
- Giving a direction for a 3D vector. The specification excludes it.

## Next steps

Work through the [revision notes](/resources/ocr-a-level-mathematics-vectors-in-two-and-three-dimensions-revision-notes/), then the [practice questions](/resources/ocr-a-level-mathematics-vectors-in-two-and-three-dimensions-practice/). The wider [pure mathematics practice](/resources/ocr-a-level-mathematics-pure-practice/) and [exam preparation page](/resources/ocr-a-level-mathematics-exam-preparation/) cover mixed questions.

## Official syllabus

OCR, *A Level in Mathematics A (H240)*, Version 3.1 (August 2026), for first assessment in 2018, section 1.10 (Vectors), with the constant acceleration formulae from section 3.02e.
