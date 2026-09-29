---
title: "IB DP Mathematics: Analysis and Approaches -- Complex numbers (HL) Study Guide"
seoTitle: "IB Maths AA HL Complex Numbers Study Guide"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Complex numbers (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-14"
description: "Study guide to complex numbers for IB DP Maths AA HL: Cartesian, polar and Euler forms, the Argand diagram, conjugate roots and De Moivre's theorem."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

This study guide teaches the complex numbers unit of IB Diploma Programme Mathematics: Analysis and Approaches from scratch. It is aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, and covers syllabus sections 1.12–1.14. All of this content is HL only (AHL). It follows the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so it applies to the May and November 2026, 2027 and 2028 HL sessions.

When you have worked through it, use the [complex numbers revision notes](/resources/ib-dp-mathematics-aa-hl-complex-numbers-revision-notes/) for final-weeks recall and the [complex numbers practice questions](/resources/ib-dp-mathematics-aa-hl-complex-numbers-practice/) to test yourself. For the whole course, see the [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/).

## What this unit covers

| Syllabus section | What you must be able to do | SL/HL |
|---|---|---|
| 1.12 | Use i, where i² = −1; write z = a + bi; find the real part, imaginary part, conjugate, modulus and argument; plot numbers on the complex plane (Argand diagram) | HL only |
| 1.13 | Convert between Cartesian, modulus–argument (polar) form z = r(cos θ + i sin θ) = r cis θ and Euler form z = re^(iθ); find sums, products and quotients in each form and interpret them geometrically | HL only |
| 1.14 | Use the fact that complex roots of polynomials with real coefficients come in conjugate pairs; state, use and prove (by induction, for n ∈ ℤ⁺) De Moivre's theorem and its extension to rational exponents; find powers and roots of complex numbers | HL only |

## 1.12 Cartesian form and the complex plane

### The number i

Define i by i² = −1. Then every quadratic with real coefficients has two roots, even when the discriminant is negative. Powers of i repeat in a cycle of four: i¹ = i, i² = −1, i³ = −i, i⁴ = 1.

### Cartesian form

A complex number in Cartesian form is z = a + bi, with a, b ∈ ℝ. The IB notation is:

- Re z = a, the real part
- Im z = b, the imaginary part (a real number: Im(3 − 4i) = −4, not −4i)
- z* = a − bi, the complex conjugate
- |z| = √(a² + b²), the modulus
- arg z, the argument: the angle from the positive real axis to the line joining the origin to z

Two complex numbers are equal only when their real parts are equal **and** their imaginary parts are equal. This gives you two equations from one, which is how you solve most "find a and b" questions.

Useful facts: z + z* = 2 Re z, z z* = |z|², and dividing by a complex number means multiplying top and bottom by the conjugate of the bottom.

### The complex plane

The complex plane (also called the Argand diagram) plots z = a + bi as the point (a, b). The horizontal axis is the real axis and the vertical axis is the imaginary axis. The modulus is the distance from the origin; the argument is the angle measured anticlockwise from the positive real axis. The conjugate z* is the reflection of z in the real axis.

This page gives arguments in the range −π < θ ≤ π. If a question states a range, use that one.

### Worked example 1

Let z = 3 − 4i and w = 1 + 2i. Find z + w, zw, z/w, z* and |z|.

```
z + w = (3 + 1) + (−4 + 2)i = 4 − 2i
zw    = 3 + 6i − 4i − 8i² = 3 + 2i + 8 = 11 + 2i
z/w   = (3 − 4i)(1 − 2i) / ((1 + 2i)(1 − 2i))
      = (3 − 6i − 4i + 8i²) / 5 = (−5 − 10i)/5 = −1 − 2i
z*    = 3 + 4i
|z|   = √(9 + 16) = 5
```

### Worked example 2

Find the square roots of −5 + 12i.

Let (a + bi)² = −5 + 12i, with a, b real. Expanding gives a² − b² + 2abi. Equate parts:

```
a² − b² = −5     and     2ab = 12, so b = 6/a
a² − 36/a² = −5
a⁴ + 5a² − 36 = 0
(a² + 9)(a² − 4) = 0
```

a is real, so a² = 4, a = ±2 and b = ±3. The square roots are **2 + 3i and −2 − 3i**.

## 1.13 Polar and Euler form

### Converting between forms

If z has modulus r and argument θ, then a = r cos θ and b = r sin θ, so

z = r(cos θ + i sin θ) = r cis θ = re^(iθ).

The guide expects you to convert freely between Cartesian, modulus–argument (polar) and Euler form.

**Cartesian to polar:** find r = √(a² + b²). Then find θ by sketching the point first. Work out the reference angle from tan α = |b|/|a|, then place it in the correct quadrant. Using arctan(b/a) alone gives the wrong quadrant whenever a < 0.

**Polar to Cartesian:** evaluate r cos θ and r sin θ.

### Worked example 3

(a) Write z = −2 + 2i in polar and Euler form.

r = √(4 + 4) = 2√2. The point is in the second quadrant with reference angle π/4, so θ = π − π/4 = 3π/4.

**z = 2√2 cis(3π/4) = 2√2 e^(3πi/4)**

(b) Write 4 cis(−π/3) in Cartesian form.

4 cos(−π/3) = 2 and 4 sin(−π/3) = −2√3, so **4 cis(−π/3) = 2 − 2√3 i**.

### Products and quotients

For z₁ = r₁ cis θ₁ and z₂ = r₂ cis θ₂:

- z₁z₂ = r₁r₂ cis(θ₁ + θ₂): multiply the moduli, add the arguments
- z₁/z₂ = (r₁/r₂) cis(θ₁ − θ₂): divide the moduli, subtract the arguments

In Euler form these are just the index laws: r₁e^(iθ₁) × r₂e^(iθ₂) = r₁r₂e^(i(θ₁ + θ₂)).

**Geometric interpretation.** Multiplying by r cis θ enlarges by scale factor r about the origin and rotates anticlockwise by θ. So multiplying by i (modulus 1, argument π/2) is a rotation of π/2 anticlockwise. Dividing by r cis θ enlarges by 1/r and rotates clockwise by θ.

### Worked example 4

Let z₁ = 6 cis(5π/6) and z₂ = 2 cis(π/3). Find z₁z₂ and z₁/z₂.

```
z₁z₂  = 12 cis(5π/6 + π/3) = 12 cis(7π/6)
      = 12 cis(−5π/6)        (subtract 2π to get −π < θ ≤ π)
z₁/z₂ = 3 cis(5π/6 − π/3) = 3 cis(π/2) = 3i
```

### Sums

Sums are easiest in Cartesian form: add real parts and add imaginary parts. On the Argand diagram, z₁ + z₂ is the fourth vertex of the parallelogram with sides from the origin to z₁ and to z₂, exactly like adding vectors.

When both numbers have the same modulus, Euler form gives a neat result by taking out the "average" angle. For example:

```
1 + e^(iθ) = e^(iθ/2)(e^(−iθ/2) + e^(iθ/2))
           = e^(iθ/2) × 2cos(θ/2)
```

So 1 + e^(iθ) has argument θ/2 and, for 0 ≤ θ < π, modulus 2cos(θ/2). Geometrically, the parallelogram is a rhombus, and its diagonal bisects the angle.

### Worked example 5: an exact value

Use (1 + i)(√3 + i) to find cos(5π/12) exactly.

In Cartesian form: (1 + i)(√3 + i) = √3 + i + √3 i − 1 = (√3 − 1) + (√3 + 1)i.

In polar form: √2 cis(π/4) × 2 cis(π/6) = 2√2 cis(5π/12).

Equating real parts: 2√2 cos(5π/12) = √3 − 1, so

**cos(5π/12) = (√3 − 1)/(2√2) = (√6 − √2)/4**.

## 1.14 Conjugate roots, De Moivre's theorem, powers and roots

### Conjugate roots

If a polynomial has **real coefficients** and z = a + bi is a root, then z* = a − bi is also a root. So complex roots come in conjugate pairs. Each pair gives a real quadratic factor:

(z − (a + bi))(z − (a − bi)) = z² − 2az + (a² + b²)

The sum of the pair is 2a and the product is a² + b². This links to the sum and product of roots in section 2.12.

### Worked example 6

Given that 1 + 2i is a root of p(z) = z³ − 5z² + 11z − 15, find the other roots.

The coefficients are real, so 1 − 2i is also a root. The pair has sum 2 and product 1 + 4 = 5, so z² − 2z + 5 is a factor. Comparing constant terms, p(z) = (z² − 2z + 5)(z − 3). The roots are **1 + 2i, 1 − 2i and 3**.

### De Moivre's theorem

(r cis θ)ⁿ = rⁿ cis(nθ)

In Euler form this is (re^(iθ))ⁿ = rⁿe^(inθ). The guide requires proof by induction for n ∈ ℤ⁺:

```
Let P(n): (cos θ + i sin θ)ⁿ = cos nθ + i sin nθ.
n = 1: both sides equal cos θ + i sin θ, so P(1) is true.
Assume P(k) is true for some k ∈ ℤ⁺. Then
(cos θ + i sin θ)^(k+1) = (cos kθ + i sin kθ)(cos θ + i sin θ)
  = (cos kθ cos θ − sin kθ sin θ) + i(sin kθ cos θ + cos kθ sin θ)
  = cos(k + 1)θ + i sin(k + 1)θ      (compound angle identities)
So P(k) true implies P(k + 1) true. P(1) is true, so by
mathematical induction P(n) is true for all n ∈ ℤ⁺.
```

### Worked example 7: powers

Find (1 − i)¹⁰.

1 − i = √2 cis(−π/4), so (1 − i)¹⁰ = (√2)¹⁰ cis(−10π/4) = 32 cis(−5π/2) = 32 cis(−π/2) = **−32i**.

Expanding with the binomial theorem would take far longer. Convert to polar first whenever the power is more than about 3.

### Multiple-angle identities

De Moivre combined with the binomial expansion gives cos nθ and sin nθ in terms of powers of cos θ and sin θ. For n = 3, write c = cos θ and s = sin θ:

```
cos 3θ + i sin 3θ = (c + is)³ = c³ + 3c²(is) + 3c(is)² + (is)³
                  = (c³ − 3cs²) + i(3c²s − s³)
Real parts: cos 3θ = c³ − 3c(1 − c²) = 4cos³θ − 3cos θ
```

### Roots and rational exponents

The extension of De Moivre to rational exponents gives the n-th roots. Write the number with its general argument, θ + 2kπ:

z = r cis θ has n distinct n-th roots: r^(1/n) cis((θ + 2kπ)/n), k = 0, 1, …, n − 1.

All the roots have the same modulus and are equally spaced by 2π/n. They form the vertices of a regular n-gon centred on the origin. For n ≥ 2 their sum is zero. The same idea handles z^(p/q): for example the three values of 8^(2/3) are 4 cis(2kπ/3), namely 4 and −2 ± 2√3 i.

### Worked example 8: roots

Solve z³ = 8i.

8i = 8 cis(π/2) = 8 cis(π/2 + 2kπ). So z = 2 cis(π/6 + 2kπ/3), k = 0, 1, 2.

```
k = 0: 2 cis(π/6)  = √3 + i
k = 1: 2 cis(5π/6) = −√3 + i
k = 2: 2 cis(3π/2) = 2 cis(−π/2) = −2i
```

The three roots lie on a circle of radius 2 and form an equilateral triangle.

## Using your GDC

HL Paper 1 is calculator-free, so every skill in this unit must work by hand: conversions using exact values of sin and cos, division by the conjugate, De Moivre powers, n-th roots with exact arguments, the induction proof and multiple-angle identities. On Paper 2 and Paper 3 (technology required), a GDC in complex mode will do arithmetic and convert between a + bi and polar form. Use it to check, and still write down the method: the modulus, the argument and the general root formula.

## Common errors

- Taking arg(−2 + 2i) as arctan(2/−2) = −π/4. The point is in the second quadrant, so the argument is 3π/4.
- Writing Im(3 − 4i) = −4i. The imaginary part is the real number −4.
- Using the conjugate-pair rule on a polynomial whose coefficients are not all real.
- Giving only one root of z³ = 8i, or listing four roots by letting k run to 3.
- Leaving 12 cis(7π/6) when the question asks for −π < θ ≤ π.
- In the induction proof, not stating the assumption for n = k, or not naming the compound angle identities.
- Dividing the argument by n but forgetting to take the n-th root of the modulus.

## Where to go next

Condense this unit with the [revision notes](/resources/ib-dp-mathematics-aa-hl-complex-numbers-revision-notes/), then test it with the [practice set](/resources/ib-dp-mathematics-aa-hl-complex-numbers-practice/). Other strands of the course have their own guides, such as the [functions study guide](/resources/ib-dp-mathematics-aa-functions/) and the [calculus study guide](/resources/ib-dp-mathematics-aa-calculus/). For the course as a whole, read the [AA syllabus guide](/resources/ib-dp-mathematics-analysis-and-approaches-syllabus-guide/), the [subject guide](/resources/ib-dp-mathematics-analysis-and-approaches-subject-guide/) and the [exam preparation guide](/resources/ib-dp-mathematics-analysis-and-approaches-exam-preparation/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
