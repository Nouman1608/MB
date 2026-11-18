---
title: "Cambridge A Level Mathematics (9709): Complex numbers (Pure Mathematics 3)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 3 – Pure Mathematics 3"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 3.9
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-3-cambridge-alevel"
    subtopic: "complex-numbers-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Paper 3 section 3.9 Complex numbers: Cartesian and polar forms, conjugate roots, square roots, Argand diagrams and loci."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **3.9 Complex numbers** of Pure Mathematics 3 in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 3 (1 hour 50 minutes, 75 marks). Complex numbers appear nowhere else in 9709, so the whole section is new at Paper 3. The [Pure Mathematics 3 study guide](/resources/a-level-maths-9709-pure-mathematics-3/) gives a short example of each idea. This page goes through all eight syllabus statements, with equations involving z\*, quartics, square roots, geometric effects and loci problems that ask for a greatest or least value. Afterwards use the [3.9 revision notes](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-revision-notes/) and the [3.9 practice questions](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-practice/).

## What section 3.9 asks for

| Syllabus statement | Notes from the syllabus |
|---|---|
| The idea of a complex number; real part, imaginary part, modulus, argument, conjugate; equality | Notation Re z, Im z, \|z\|, arg z, z\* should be known. Argument usually in −π < θ ≤ π, sometimes 0 ≤ θ < 2π |
| Add, subtract, multiply and divide in Cartesian form x + iy | Full details of working should be shown for multiplication and division |
| Non-real roots of real polynomials occur in conjugate pairs | e.g. a cubic or quartic with one complex root given |
| Argand diagrams | |
| Multiply and divide in polar form r(cos θ + i sin θ) or re^(iθ) | \|z₁z₂\| = \|z₁\|\|z₂\|, arg(z₁z₂) = arg z₁ + arg z₂, and the corresponding results for division |
| Find the two square roots of a complex number | e.g. in exact Cartesian form, with full working |
| Geometrical effects of conjugating, adding, subtracting, multiplying and dividing | "in simple terms" |
| Loci of simple equations and inequalities | e.g. \|z − a\| < k, \|z − a\| = \|z − b\|, arg(z − a) = α |

## Cartesian form and equality

Two complex numbers are equal exactly when their real parts are equal **and** their imaginary parts are equal. That one fact turns any equation in z and z\* into two real equations.

*Worked example 1.* Solve (1 + 2i)z − z\* = 6 − 2i.

```text
Let z = x + iy, so z* = x − iy.
(1 + 2i)(x + iy) = x + iy + 2ix − 2y = (x − 2y) + i(2x + y)
(1 + 2i)z − z* = (x − 2y − x) + i(2x + y + y) = −2y + i(2x + 2y)
Real parts:       −2y = 6        →  y = −3
Imaginary parts:  2x + 2y = −2   →  x = 2
z = 2 − 3i
```

Division uses the conjugate of the denominator: multiply top and bottom by it, so the denominator becomes real.

## Modulus and argument

|x + iy| = √(x² + y²). arg z is the angle from the positive real axis, measured anticlockwise; use −π < θ ≤ π unless told otherwise. Always draw the point first, because tan⁻¹(y/x) gives the wrong quadrant for half the plane.

| z | Quadrant | \|z\| | arg z |
|---|---|---|---|
| −√3 + i | second | 2 | π − π/6 = 5π/6 |
| −1 − i | third | √2 | −π + π/4 = −3π/4 |

## Conjugate pairs

If a polynomial has **real** coefficients and a + bi is a root, then a − bi is also a root. Their product gives a real quadratic factor: (z − (a + bi))(z − (a − bi)) = z² − 2az + (a² + b²).

*Worked example 2.* Given that 2i is a root of z⁴ − 4z³ + 9z² − 16z + 20 = 0, find the other roots.

```text
−2i is also a root, so (z − 2i)(z + 2i) = z² + 4 is a factor.
z⁴ − 4z³ + 9z² − 16z + 20 = (z² + 4)(z² − 4z + 5)    (by division or comparing coefficients)
z² − 4z + 5 = 0   →   z = (4 ± √(16 − 20))/2 = 2 ± i
Roots: 2i, −2i, 2 + i, 2 − i
```

## Square roots of a complex number

Set (x + iy)² equal to the number, then equate real and imaginary parts.

*Worked example 3.* Find the square roots of −15 − 8i.

```text
(x + iy)² = x² − y² + 2ixy = −15 − 8i
x² − y² = −15  and  xy = −4, so y = −4/x
x² − 16/x² = −15   →   x⁴ + 15x² − 16 = 0   →   (x² + 16)(x² − 1) = 0
x is real, so x² = 1: x = 1, y = −4  or  x = −1, y = 4
Square roots: 1 − 4i and −1 + 4i
```

Reject x² = −16 with a reason: x is real. Check one root: (1 − 4i)² = 1 − 8i − 16 = −15 − 8i.

## Polar form and the geometry of the operations

z = r(cos θ + i sin θ) = re^(iθ), with r = |z| and θ = arg z. When multiplying, multiply the moduli and add the arguments; when dividing, divide the moduli and subtract the arguments.

For z = 2e^(iπ/6) and w = √2e^(iπ/4): zw = 2√2e^(5iπ/12) and z/w = √2e^(−iπ/12).

| Operation | Effect on the point z |
|---|---|
| z\* | Reflection in the real axis |
| z + w | Translation by the vector representing w |
| z − w | Translation by the vector representing −w |
| multiply by re^(iα) | Enlargement, scale factor r, centre O, with rotation by α anticlockwise |
| divide by re^(iα) | Enlargement, scale factor 1/r, with rotation by α clockwise |
| multiply by i | Rotation by π/2 anticlockwise about O |

## Loci

| Equation or inequality | Locus |
|---|---|
| \|z − a\| = k | Circle, centre a, radius k (< k: inside, not including the circle) |
| \|z − a\| = \|z − b\| | Perpendicular bisector of the points a and b |
| arg(z − a) = α | Half-line from a at angle α, not including a itself |

*Worked example 4.* The complex number z satisfies |z − 4i| = 2. Find the greatest value of arg z.

```text
The locus is a circle, centre (0, 4), radius 2.
The tangents from O touch the circle; the angle between each tangent
and the line from O to the centre satisfies sin φ = 2/4, so φ = π/6.
The centre has argument π/2, so arg z lies between π/2 − π/6 and π/2 + π/6.
Greatest value of arg z = 2π/3
```

A sketch is essential. Greatest and least values of |z| on a circle lie on the line through O and the centre; greatest and least values of arg z come from tangents.

## Common mistakes

- Taking arg z = tan⁻¹(y/x) for a point in the second or third quadrant.
- Using the conjugate-pair rule when the coefficients are not all real.
- Not showing full working in multiplication, division or square roots, which the syllabus requires.
- Forgetting to reject x² = −16 when finding square roots.
- Drawing arg(z − a) = α as a full line instead of a half-line starting at a.
- Shading the wrong side of a perpendicular bisector.

## Exam technique

- **Showing all necessary working**: write the multiplication by the conjugate, and the two equations from equating parts.
- **Exact** modulus and argument: give √2 and −3π/4, not 1.41 and −2.36.
- **Sketch an Argand diagram**: label the centre, radius or key points, and mark included boundaries with solid lines and excluded ones with broken lines.
- **Hence**: in "show that 2i is a root; hence find the other roots", use the conjugate and the quadratic factor rather than starting again.

## Frequently asked questions

**Which argument range should I use in 9709 Paper 3?**
Usually −π < θ ≤ π. The syllabus says 0 ≤ θ < 2π may sometimes be more convenient, and either is accepted unless the question specifies one.

**Do I need de Moivre's theorem?**
It is not named in the 9709 Pure Mathematics 3 syllabus. You need the product and quotient rules for moduli and arguments, which also give simple powers by repeated multiplication.

**How do I find the least value of |z| on a circle?**
Subtract the radius from the distance between O and the centre, provided O lies outside the circle.

## Where to go next

- [3.9 revision notes](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-revision-notes/)
- [3.9 practice questions](/resources/cambridge-a-level-mathematics-9709-complex-numbers-cambridge-alevel-maths-practice/)
- Mixed questions: [Pure 3 trigonometry, vectors and complex numbers practice](/resources/a-level-mathematics-pure-3-trig-vectors-complex-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 3, Pure Mathematics 3 (for Paper 3): section 3.9 Complex numbers.
