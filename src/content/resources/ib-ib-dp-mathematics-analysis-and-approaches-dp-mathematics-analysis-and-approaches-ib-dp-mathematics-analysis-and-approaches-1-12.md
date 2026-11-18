---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.12 Complex numbers: Cartesian form and the complex plane (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-12"
description: "IB DP Maths AA HL section 1.12 study guide: i, Cartesian form a + bi, conjugate, modulus and argument, equating parts and the complex plane."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.12** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): the number i, where i² = −1; Cartesian form z = a + bi; the terms real part, imaginary part, conjugate, modulus and argument; and the complex plane, also called the Argand diagram. It is **HL only**.

Polar and Euler forms follow in section 1.13 and De Moivre's theorem in section 1.14; see the [section 1.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-13/). The whole complex numbers unit is summarised in the [complex numbers (HL) study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/). This page goes deeper on the Cartesian toolkit that everything later depends on.

## What section 1.12 asks of you

- Use i with i² = −1.
- Write and work with complex numbers in Cartesian form z = a + bi, where a, b ∈ ℝ.
- Find and use Re z, Im z, the conjugate z*, the modulus |z| and the argument arg z.
- Represent complex numbers in the complex plane.

## Why i is needed

The equation x² + 1 = 0 has no real solution, because no real square is negative. Defining i by i² = −1 gives every quadratic with real coefficients two roots. For example,

```
z² − 6z + 13 = 0
z = (6 ± √(36 − 52))/2 = (6 ± √(−16))/2 = (6 ± 4i)/2 = 3 ± 2i
```

Here √(−16) = 4i, because (4i)² = 16i² = −16. The two roots are conjugates, an idea section 1.14 develops for polynomials in general.

## Powers of i

The powers repeat in a cycle of four:

| Power | i¹ | i² | i³ | i⁴ |
|---|---|---|---|---|
| Value | i | −1 | −i | 1 |

To find iⁿ, divide n by 4 and use the remainder. i²⁷: 27 = 4 × 6 + 3, so i²⁷ = i³ = −i. i²⁰²⁶: 2026 = 4 × 506 + 2, so i²⁰²⁶ = −1. Any four consecutive powers add to zero: i + i² + i³ + i⁴ = i − 1 − i + 1 = 0.

## Cartesian form and its vocabulary

For z = a + bi with a, b real:

- **Re z = a** and **Im z = b**. The imaginary part is the real number b, not bi.
- **Conjugate:** z* = a − bi. Change the sign of the imaginary part only.
- **Modulus:** |z| = √(a² + b²), the distance from the origin to z in the complex plane.
- **Argument:** arg z, the angle from the positive real axis to the line joining the origin to z, measured anticlockwise. This page uses −π < arg z ≤ π unless a question states a range.

**Equality.** a + bi = c + di exactly when a = c **and** b = d. One complex equation therefore gives two real equations, and that is how you solve for unknown real numbers.

## The four operations

- **Add and subtract:** combine real parts and imaginary parts separately.
- **Multiply:** expand the brackets and replace i² by −1.
- **Divide:** multiply the numerator and denominator by the conjugate of the denominator. The denominator becomes real, because (c + di)(c − di) = c² + d².

### Worked example 1 (calculator-free): division

Write (2 + 5i)/(3 − 4i) in the form a + bi.

```
(2 + 5i)/(3 − 4i) × (3 + 4i)/(3 + 4i)
Numerator:   6 + 8i + 15i + 20i² = 6 + 23i − 20 = −14 + 23i
Denominator: 9 + 16 = 25
Result:      −14/25 + (23/25)i
```

*Annotation.* "In the form a + bi" means a and b must be stated separately; leaving (−14 + 23i)/25 risks losing the final mark if the question asks for a and b.

## Properties of the conjugate

For z = a + bi and w any complex number:

- z + z* = 2a, which is real.
- z − z* = 2bi, which is purely imaginary.
- zz* = a² + b² = |z|², which is real and non-negative.
- (z + w)* = z* + w* and (zw)* = z*w*.

These give quick tests. A number equals its own conjugate exactly when it is real. And |z|² = zz* lets you find a modulus without square roots in the middle of a calculation.

## Equating real and imaginary parts

### Worked example 2 (calculator-free): unknown real numbers

Find the real numbers x and y such that (x + yi)(2 − i) = 8 + i.

```
(x + yi)(2 − i) = 2x − xi + 2yi − yi² = (2x + y) + (2y − x)i
Real parts:       2x + y = 8
Imaginary parts:  2y − x = 1
Solving: x = 3, y = 2
```

Check: (3 + 2i)(2 − i) = 6 − 3i + 4i + 2 = 8 + i.

### Worked example 3 (calculator-free): an equation with z and z*

Solve 2z − iz* = 3 + 3i.

```
Let z = a + bi, so z* = a − bi.
iz* = ai − bi² = b + ai
2z − iz* = (2a + 2bi) − (b + ai) = (2a − b) + (2b − a)i
Real:      2a − b = 3
Imaginary: 2b − a = 3
Solving: a = 3, b = 3, so z = 3 + 3i
```

*Annotation.* When an equation mixes z and z*, you cannot simply divide; substitute z = a + bi and equate parts. Write z* before multiplying by i, and simplify i × (−bi) = −bi² = +b carefully.

## The complex plane

The complex plane plots a + bi at the point (a, b). The horizontal axis is the real axis and the vertical axis is the imaginary axis.

- **Conjugate:** z* is the reflection of z in the real axis.
- **Negative:** −z is the rotation of z by π about the origin.
- **Sum:** z + w is the fourth vertex of the parallelogram with sides from the origin to z and to w, exactly like adding vectors.
- **Distance:** |z − w| is the distance between the points z and w.

For z = 2 + i and w = −1 + 3i: z + w = 1 + 4i, and the distance between them is |z − w| = |3 − 2i| = √13.

### Finding the argument by quadrant

Always sketch the point first. Find the acute reference angle α from tan α = |b|/|a|, then place it:

| Quadrant | Example | Argument |
|---|---|---|
| First (a > 0, b > 0) | 1 + √3 i | α = π/3 |
| Second (a < 0, b > 0) | −1 + √3 i | π − α = 2π/3 |
| Third (a < 0, b < 0) | −1 − √3 i | −(π − α) = −2π/3 |
| Fourth (a > 0, b < 0) | 1 − √3 i | −α = −π/3 |

All four have modulus 2. Points on the axes have arguments 0, π/2, π or −π/2.

## Common mistakes

- Writing Im(4 − 7i) = −7i. It is −7.
- Leaving i² in an answer instead of replacing it with −1.
- Multiplying by the conjugate of the **numerator** when dividing.
- Taking arg(−3 + 3i) as −π/4 from a calculator's inverse tangent; the point is in the second quadrant, so the argument is 3π/4.
- Writing √(−9) = −3 or 9i. It is 3i.
- Forgetting that x and y must be real before equating real and imaginary parts.

## Exam technique: the command words

- **Write in the form a + bi**: real a and b, both stated, simplified.
- **Find |z| and arg z**: exact values on Paper 1; the argument in the range the question gives.
- **Sketch** or **plot on an Argand diagram**: label the axes and each point with its complex number.
- **Hence**: often a later part uses zz* = |z|² or a result about the conjugate.

HL Paper 1 is calculator-free, so all arithmetic, including division and exact arguments, must be done by hand. A GDC in complex mode can check answers on Papers 2 and 3.

## Where next

Condense this section with the [section 1.12 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-12-revision-notes/) and practise with the [section 1.12 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-12-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.12.
