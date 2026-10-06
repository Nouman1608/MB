---
title: "AQA A-Level Mathematics: J: Vectors (7357)"
seoTitle: "AQA A-Level Maths 7357 Vectors Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "J: Vectors"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 11
syllabusTopics:
  - qualification: "a-level"
    topic: "j-vectors-aqa-alevel-maths"
description: "Study guide for AQA A-level Maths (7357) Section J: vectors in 2D and 3D, magnitude and direction, position vectors, geometry, forces and kinematics."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section J: Vectors (J1 to J5)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification lists Section J under **Paper 2**, alongside the mechanics sections, so vectors are examined there. A calculator is required in every 7357 paper, but "show that" and geometric proof questions still need every step written out.

Use it with the [Vectors revision notes](/resources/aqa-a-level-mathematics-vectors-revision-notes/) and the [Vectors practice questions](/resources/aqa-a-level-mathematics-vectors-practice/). The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/), the printable checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/), and you can find your weak spots first with the [free 10-minute diagnostics](/diagnostics/).

## What Section J covers

| Ref | What you must be able to do |
|---|---|
| J1 | Use vectors in two dimensions and in three dimensions |
| J2 | Calculate the magnitude and direction of a vector; convert between component form and magnitude/direction form |
| J3 | Add vectors diagrammatically; add vectors and multiply by scalars algebraically; understand what these mean geometrically |
| J4 | Understand and use position vectors; find the distance between two points given by position vectors |
| J5 | Solve problems with vectors in pure mathematics and in context, including forces and kinematics |

Appendix B of the specification lists formulae you must use **without them being provided**. For vectors it gives the magnitude result |xi + yj + zk| = √(x² + y² + z²). Learn it.

Appendix A lists the scalar product a.b under "Further Maths only", so it is not part of 7357. Every method on this page uses components, magnitudes and Pythagoras instead.

## J1: vectors in two and three dimensions

A **vector** has magnitude and direction. A **scalar** has magnitude only. Displacement, velocity, acceleration and force are vectors; distance, speed, mass and time are scalars.

Notation from Appendix A of the specification:

- a vector is printed in bold, **a**, and handwritten with an underline, a̲
- the vector from A to B is written AB with an arrow above it; on this page we write it as →AB
- **i**, **j** and **k** are unit vectors in the directions of the x-, y- and z-axes
- |a| is the magnitude of a, and â is a unit vector in the direction of a
- r, s, v and a are used for position, displacement, velocity and acceleration vectors

A vector can be written in **component form** with i, j, k or as a column vector. These are the same vector:

```
      (  3 )
a  =  ( −4 )   =  3i − 4j + 2k
      (  2 )
```

In 2D there is no k component. Every method on this page works in 2D and 3D, with one extra component in 3D.

## J2: magnitude and direction

**Magnitude.** By Pythagoras, |xi + yj| = √(x² + y²), and in 3D |xi + yj + zk| = √(x² + y² + z²).

**Unit vector.** Divide by the magnitude: â = a / |a|. Its magnitude is 1.

**Direction in 2D.** Give the angle the vector makes with a stated reference, usually the positive x-direction (i) measured anticlockwise, or a bearing when i is east and j is north. Sketch the vector first so you know the quadrant. Then use tan θ = |y| / |x| for the angle with the x-axis and adjust for the quadrant.

**Converting from magnitude/direction to components.** A vector of magnitude r at angle θ anticlockwise from i is

```
r cos θ i + r sin θ j
```

This holds for any θ, so the signs come out by themselves.

**Worked example 1.** Find the magnitude of a = 5i − 12j, the unit vector in its direction, and the angle it makes with i.

```
|a| = √(5² + (−12)²) = √169 = 13
â = (5i − 12j)/13 = (5/13)i − (12/13)j
The vector points right and down (fourth quadrant).
tan θ = 12/5  →  θ = 67.4°
```

a is at **67.4° below i**, that is 67.4° clockwise from the positive x-direction.

**Worked example 2.** A force of magnitude 40 N acts at 150° anticlockwise from i. Write it in component form.

```
F = 40 cos 150° i + 40 sin 150° j
  = 40(−√3/2) i + 40(1/2) j
  = (−20√3 i + 20j) N  ≈ (−34.6i + 20j) N
```

**Direction in 3D.** The direction is usually given by the unit vector. You can also find the angle between a vector and one of the axes from a right-angled triangle: the angle θ with the z-axis satisfies cos θ = z / |a|, and the same idea works for the x- and y-axes.

**Worked example 3.** p = 2i − 3j + 6k. Find |p|, the unit vector p̂ and the angle p makes with the positive z-axis.

```
|p| = √(4 + 9 + 36) = √49 = 7
p̂ = (2i − 3j + 6k)/7
cos θ = 6/7  →  θ = 31.0°
```

## J3: adding vectors and multiplying by scalars

**Diagrammatically.** To find a + b, draw a, then draw b starting where a ends. The **resultant** a + b runs from the start of a to the end of b (the triangle law). If you draw a and b from the same point and complete the parallelogram, the diagonal from that point is also a + b (the parallelogram law).

**Algebraically.** Add or subtract matching components:

```
(2i + 5j) + (4i − 3j) = 6i + 2j
(2i + 5j) − (4i − 3j) = −2i + 8j
```

**Scalar multiples.** ka has magnitude |k| |a|. If k > 0 it points the same way as a; if k < 0 it points the opposite way. So −a has the same length as a and the opposite direction, and a − b = a + (−b).

**What this means geometrically:**

- Two vectors are **parallel** exactly when one is a scalar multiple of the other.
- Three points A, B, C are **collinear** when →AB = k →BC (or →AB = k →AC) for some scalar k, because the two vectors are parallel and share point B (or A).
- The **zero vector** 0 is what you get from a + (−a): a closed route of vectors sums to 0.

**Worked example 4 (geometric proof).** In triangle OAB, →OA = a and →OB = b. P lies on AB with AP : PB = 2 : 1. The point C has →OC = a + 2b. Show that O, P and C are collinear and find OP : PC.

```
→AB = b − a
→OP = →OA + (2/3)→AB = a + (2/3)(b − a) = (1/3)a + (2/3)b
→OP = (1/3)(a + 2b) = (1/3)→OC
```

→OP is a scalar multiple of →OC and both start at O, so O, P and C are collinear. OP is one third of OC, so **OP : PC = 1 : 2**.

**Equating coefficients.** If a and b are not parallel, then pa + qb = ra + sb means p = r and q = s. In component form, you just equate the i parts and the j parts.

**Worked example 5.** Find λ and μ such that λ(2i + j) + μ(i − 3j) = 7i − 7j.

```
i:  2λ + μ = 7
j:  λ − 3μ = −7
From the first, μ = 7 − 2λ. Substitute: λ − 21 + 6λ = −7  →  λ = 2, μ = 3
```

Check: 2(2i + j) + 3(i − 3j) = 4i + 2j + 3i − 9j = 7i − 7j. Correct.

A parallel condition gives one equation in the same way: ki + 6j is parallel to 2i + 3j when k/2 = 6/3, so **k = 4**.

## J4: position vectors and distance

The **position vector** of a point A is →OA, written a, where O is the origin. If A has coordinates (1, −2, 4), its position vector is a = i − 2j + 4k.

The key result is

```
→AB = b − a
```

because going from A to B is the same as going from A back to O and then from O to B: →AB = −a + b. The **distance** AB is |b − a|. For points given as coordinates this is the familiar distance formula, now in 3D as well; the 2D version is in the [coordinate geometry study guide](/resources/aqa-a-level-mathematics-coordinate-geometry-in-the-plane/).

A point P on AB with AP : PB = m : n has position vector

```
p = a + (m/(m + n))(b − a)
```

The **midpoint** is the case m = n: (a + b)/2.

**Worked example 6.** A and B have position vectors a = i − 2j + 4k and b = 5i + 2j + 2k. Find →AB, the distance AB, the midpoint M of AB, and the point P on AB with AP : PB = 1 : 3.

```
→AB = b − a = 4i + 4j − 2k
AB = √(16 + 16 + 4) = √36 = 6
m = (a + b)/2 = 3i + 0j + 3k, so M is (3, 0, 3)
p = a + (1/4)(4i + 4j − 2k) = 2i − j + 3.5k, so P is (2, −1, 3.5)
```

## J5: vectors in pure mathematics and in context

In pure problems, vectors let you prove geometric facts (parallel sides, collinear points, ratios along lines) without coordinates, as in worked example 4. You can also find unknown lengths and check right angles with Pythagoras: if |→AB|² + |→BC|² = |→AC|², the angle at B is 90°.

**Forces.** Forces are vectors, so the **resultant** of several forces is their vector sum. A particle is in **equilibrium** when the resultant is 0. The magnitude of the resultant gives its size and its components give its direction. Newton's second law in vector form, F = ma, connects the resultant force to the acceleration (Section R of the specification).

**Worked example 7.** Forces F₁ = (3i − 2j) N, F₂ = (−5i + 7j) N and F₃ act on a particle, which is in equilibrium.

(a) Find F₃.

(b) F₃ is removed. Find the magnitude of the resultant of F₁ and F₂, the angle it makes with i, and the acceleration of the particle if its mass is 2 kg.

```
(a) F₁ + F₂ + F₃ = 0
    F₃ = −(F₁ + F₂) = −(−2i + 5j) = (2i − 5j) N

(b) R = F₁ + F₂ = (−2i + 5j) N
    |R| = √(4 + 25) = √29 = 5.39 N
    R points left and up (second quadrant):
    tan α = 5/2 → α = 68.2°, so the angle with i is 180° − 68.2° = 111.8°
    a = R/m = (−2i + 5j)/2 = (−i + 2.5j) m s⁻²
```

The acceleration is in the same direction as R, with magnitude √29 / 2 = 2.69 m s⁻².

**Kinematics.** For a particle moving with **constant velocity** v from initial position r₀,

```
r = r₀ + vt
```

Speed is |v|. Displacement over time t is vt. Section Q extends the constant-acceleration and calculus results to two dimensions using vectors; this page only uses the constant-velocity model.

**Worked example 8.** A particle starts at (2i + 5j) m and moves with constant velocity (3i − 4j) m s⁻¹. Find its speed, its position vector at time t seconds, when it is due east of the origin, and its distance from its starting point after 2 seconds.

```
speed = |3i − 4j| = 5 m s⁻¹
r = (2i + 5j) + t(3i − 4j) = (2 + 3t)i + (5 − 4t)j
Due east of O means the j component is 0: 5 − 4t = 0 → t = 1.25 s
At t = 1.25, r = 5.75i, so it is 5.75 m east of O
Displacement after 2 s = 2(3i − 4j) = 6i − 8j, distance = 10 m
```

"Due east of O" means j component 0 and i component positive. Check both.

## Common errors

- Writing →AB = a − b instead of b − a. Route: A to O to B.
- Giving the angle with i as arctan(y/x) without a sketch, so a second- or third-quadrant vector gets the wrong angle.
- Forgetting that a unit vector must be divided by the **magnitude**, not by the largest component.
- Squaring a negative component wrongly: (−3)² = 9, so it adds to the magnitude.
- Claiming three points are collinear from parallel vectors alone, without saying the vectors share a point.
- Using AP : PB = 2 : 1 as "a + (1/2)→AB" instead of "a + (2/3)→AB".
- Adding force magnitudes instead of force vectors.
- Leaving out units (N, m, m s⁻¹) or the direction when a question asks for a velocity or force, not a speed or magnitude.

## Next steps

- Condensed recall: [Vectors revision notes](/resources/aqa-a-level-mathematics-vectors-revision-notes/).
- Test yourself: [Vectors practice questions](/resources/aqa-a-level-mathematics-vectors-practice/).
- Resolving forces with sine and cosine: [Trigonometry study guide](/resources/aqa-a-level-mathematics-trigonometry/).
- How proof and modelling are examined: [Overarching themes](/resources/aqa-a-level-mathematics-overarching-themes/).
- [All free 10-minute diagnostics](/diagnostics/).
- Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.11 J: Vectors (J1 to J5), with Appendix A: mathematical notation (vectors) and Appendix B: mathematical formulae and identities.
