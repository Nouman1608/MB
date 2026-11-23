---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.13 Complex numbers: modulus-argument (polar) and Euler form (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.13
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-13"
description: "IB DP Maths AA HL section 1.13 study guide: polar and Euler form, correct r cis θ form, products and quotients, and their geometric meaning."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.13** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): modulus–argument (polar) form z = r(cos θ + i sin θ) = r cis θ, Euler form z = re^(iθ), and sums, products and quotients in Cartesian, polar or Euler form with their geometric interpretation. It is **HL only**.

You need the Cartesian vocabulary of section 1.12 first: see the [section 1.12 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-12/). The whole unit, including standard conversions, is in the [complex numbers (HL) study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/). This page concentrates on writing polar form correctly, choosing the best form for each operation, and reading products and quotients as geometry.

## What section 1.13 asks of you

- Write complex numbers in modulus–argument form r(cos θ + i sin θ), abbreviated r cis θ, and in Euler form re^(iθ).
- Convert between Cartesian, polar and Euler forms.
- Find sums, products and quotients in whichever form suits, and interpret them geometrically.

## The three forms of one number

If z has modulus r and argument θ, the point is at distance r from the origin at angle θ, so its coordinates are (r cos θ, r sin θ). Hence

z = r cos θ + i r sin θ = r cis θ = re^(iθ).

Euler form is defined by e^(iθ) = cos θ + i sin θ. Two famous consequences: e^(iπ) = −1 and e^(2πi) = 1.

**The argument is not unique.** Adding 2π gives the same point, so 2 cis(π/3) = 2 cis(7π/3). Questions fix a range, usually −π < θ ≤ π or 0 ≤ θ < 2π; give the value inside it.

### Exact values you will need

| θ | cos θ | sin θ | cis θ |
|---|---|---|---|
| π/6 | √3/2 | 1/2 | √3/2 + i/2 |
| π/4 | √2/2 | √2/2 | (√2/2)(1 + i) |
| π/3 | 1/2 | √3/2 | 1/2 + (√3/2)i |
| π/2 | 0 | 1 | i |
| 2π/3 | −1/2 | √3/2 | −1/2 + (√3/2)i |
| π | −1 | 0 | −1 |

## Is it really in polar form?

r cis θ requires **r > 0** and the pattern **cos θ + i sin θ** with the same angle and a plus sign. Expressions that look polar but are not:

- **Negative modulus:** −2 cis(π/3). Multiplying by −1 rotates by π, so this is 2 cis(π/3 − π) = **2 cis(−2π/3)**.
- **Minus sign:** 3(cos θ − i sin θ) = 3(cos(−θ) + i sin(−θ)) = **3 cis(−θ)**, using cos(−θ) = cos θ and sin(−θ) = −sin θ.
- **Swapped functions:** sin θ + i cos θ = cos(π/2 − θ) + i sin(π/2 − θ) = **cis(π/2 − θ)**.

Examiners often set a "write in the form r cis θ" part on exactly these, because the conversion tests understanding of the form, not just the formula.

## Choosing the form for each operation

| Operation | Easiest form | Rule |
|---|---|---|
| Sum, difference | Cartesian | Add real and imaginary parts |
| Product | Polar or Euler | Multiply moduli, add arguments |
| Quotient | Polar or Euler | Divide moduli, subtract arguments |
| Conjugate | Any | r cis θ becomes r cis(−θ) |
| Reciprocal | Polar or Euler | 1/(r cis θ) = (1/r) cis(−θ) |

In Euler form the product and quotient rules are simply the exponent laws: r₁e^(iα) × r₂e^(iβ) = r₁r₂e^(i(α + β)). In polar form they follow from the compound angle formulae: (cos α + i sin α)(cos β + i sin β) = cos(α + β) + i sin(α + β).

Two useful consequences: |zw| = |z||w| and |z/w| = |z|/|w|; arg(zw) = arg z + arg w, adjusted by 2π if needed to land in the stated range.

## Worked example 1 (calculator-free): exact values from a quotient

Let z = √3 + i and w = 1 + i.

**(a)** Find z/w in polar form.

```
z = 2 cis(π/6),   w = √2 cis(π/4)
z/w = (2/√2) cis(π/6 − π/4) = √2 cis(−π/12)
```

**(b)** Find z/w in Cartesian form.

```
(√3 + i)(1 − i)/((1 + i)(1 − i)) = (√3 − √3 i + i + 1)/2
                                 = (√3 + 1)/2 + ((1 − √3)/2) i
```

**(c)** Hence find exact values of cos(π/12) and sin(π/12).

Equate the two forms: √2 cos(−π/12) = (√3 + 1)/2 and √2 sin(−π/12) = (1 − √3)/2. Using cos(−θ) = cos θ and sin(−θ) = −sin θ:

**cos(π/12) = (√3 + 1)/(2√2) = (√6 + √2)/4** and **sin(π/12) = (√3 − 1)/(2√2) = (√6 − √2)/4**.

*Annotation.* Calculating the same number in two forms and equating real and imaginary parts is the standard way complex numbers produce trigonometric exact values. Rationalise the denominator at the end.

## Worked example 2 (calculator-free): Euler form

Let z = 2e^(iπ/6) and w = 3e^(−iπ/2). Find zw and z/w in Cartesian form.

```
zw  = 6e^(i(π/6 − π/2)) = 6e^(−iπ/3) = 6(1/2 − (√3/2)i) = 3 − 3√3 i
z/w = (2/3)e^(i(π/6 + π/2)) = (2/3)e^(2πi/3)
    = (2/3)(−1/2 + (√3/2)i) = −1/3 + (√3/3)i
```

Subtracting a negative argument adds it. Check the modulus of zw: √(9 + 27) = 6.

## Geometric interpretation

**Multiplication by r cis θ** is an enlargement, scale factor r, centre the origin, combined with a rotation by θ anticlockwise about the origin.

- Multiplying by i (= cis(π/2)) rotates by a quarter turn anticlockwise.
- Multiplying by −1 (= cis π) rotates by a half turn.
- Multiplying by 2 cis(π/4) doubles the distance from the origin and rotates by π/4.

**Division by r cis θ** enlarges by 1/r and rotates clockwise by θ.

**Addition** is vector addition (the parallelogram rule) and is not a rotation or enlargement.

**Conjugation** reflects in the real axis.

### Worked example 3 (calculator-free): an equilateral triangle

The point A represents 4 + 2i. The point B is chosen so that OAB is an equilateral triangle, with B obtained by rotating A anticlockwise by π/3 about the origin O. Find the complex number for B.

```
B = (4 + 2i) cis(π/3) = (4 + 2i)(1/2 + (√3/2)i)
  = 2 + 2√3 i + i + √3 i²
  = (2 − √3) + (2√3 + 1)i
```

The rotation keeps |B| = |A| = √20, and the angle AOB is π/3, so OAB is equilateral. Multiplying by cis θ is the cleanest way to rotate a point about the origin.

## Sums in Euler form

Sums do not simplify by a rule, but two identities from Euler form are worth knowing:

e^(iθ) + e^(−iθ) = 2 cos θ  and  e^(iθ) − e^(−iθ) = 2i sin θ.

They follow by adding and subtracting e^(±iθ) = cos θ ± i sin θ, and they let you rewrite cos θ and sin θ in exponential form.

## Common mistakes

- Leaving a negative modulus, such as −3 cis(π/4), as the final polar form.
- Writing r(cos θ − i sin θ) as r cis θ.
- Adding moduli instead of multiplying them in a product.
- Giving an argument outside the requested range after adding two arguments.
- Using polar form for a sum. Convert to Cartesian.
- Reading arg z from arctan(b/a) without checking the quadrant.

## Exam technique: the command words

- **Write in the form r cis θ / re^(iθ)**: r > 0 and θ in the stated range.
- **Hence find the exact value**: equate two forms of the same number, as in Worked example 1.
- **Describe the geometric transformation**: name both parts, the scale factor and the rotation (angle and direction, about the origin).
- **Show that**: for example "show that zw = 3 − 3√3 i"; show the conversion as well as the multiplication.

HL Paper 1 needs all of this by hand with exact values. On Papers 2 and 3 a GDC can convert forms, but you must still show the method.

## Where next

Condense this section with the [section 1.13 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-13-revision-notes/), then practise with the [section 1.13 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-13-practice/). Powers and roots follow in the [section 1.14 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-14/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.13.
