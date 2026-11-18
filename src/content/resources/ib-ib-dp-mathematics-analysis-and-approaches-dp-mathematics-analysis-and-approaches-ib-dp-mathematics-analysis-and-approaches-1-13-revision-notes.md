---
title: "IB DP Mathematics: Analysis and Approaches (DP Mathematics: Analysis and Approaches): Complex numbers: modulus-argument (polar) and Euler form (AHL only) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA HL section 1.13: polar and Euler form, conversions, product and quotient rules, geometry, traps and a self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.13** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): polar (modulus–argument) form, Euler form, and sums, products and quotients with their geometric interpretation. It is **HL only**. For full explanations and worked examples, use the [section 1.13 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-13/).

## Condensed recall

**Three forms.** For modulus r > 0 and argument θ:

z = a + bi = r(cos θ + i sin θ) = r cis θ = re^(iθ),

with a = r cos θ, b = r sin θ, r = √(a² + b²).

**Euler's formula.** e^(iθ) = cos θ + i sin θ. Special values: e^(iπ/2) = i, e^(iπ) = −1, e^(3πi/2) = −i, e^(2πi) = 1.

**Converting Cartesian to polar.**

1. r = √(a² + b²).
2. Sketch the point to find its quadrant.
3. Reference angle α from tan α = |b|/|a|.
4. Place θ in the stated range.

**Converting polar to Cartesian.** Evaluate r cos θ and r sin θ, exactly where possible: 6 cis(5π/6) = −3√3 + 3i.

**Correct polar form.** r > 0, same angle in cos and sin, plus sign between them.

| Given | Correct form |
|---|---|
| −r cis θ | r cis(θ ± π) |
| r(cos θ − i sin θ) | r cis(−θ) |
| r(sin θ + i cos θ) | r cis(π/2 − θ) |
| r(−cos θ + i sin θ) | r cis(π − θ) |

**Operations.**

- Product: r₁ cis α × r₂ cis β = r₁r₂ cis(α + β).
- Quotient: r₁ cis α ÷ r₂ cis β = (r₁/r₂) cis(α − β).
- Conjugate: (r cis θ)* = r cis(−θ).
- Reciprocal: 1/(r cis θ) = (1/r) cis(−θ).
- Sum: use Cartesian form; in the complex plane it is the parallelogram rule.
- |zw| = |z||w|; |z/w| = |z|/|w|; arg(zw) = arg z + arg w (adjusted by ±2π into the range).

**Geometry of multiplying by r cis θ.** Enlargement by scale factor r about the origin plus anticlockwise rotation by θ about the origin. Multiplying by cis θ alone (modulus 1) is a pure rotation.

**Euler identities.** e^(iθ) + e^(−iθ) = 2 cos θ; e^(iθ) − e^(−iθ) = 2i sin θ.

**Exact trigonometric values.** Compute a product or quotient in both Cartesian and polar form, then equate real and imaginary parts.

## Three model calculations

**Conversion with a quadrant check.** z = −4 − 4√3 i: r = √(16 + 48) = 8. The point is in the third quadrant with reference angle π/3, so θ = −(π − π/3) = −2π/3 and z = 8 cis(−2π/3) = 8e^(−2πi/3).

**Quotient in Euler form, then Cartesian.** 6e^(iπ/4) ÷ 3e^(−iπ/4) = 2e^(iπ/2) = 2i. The divisor's negative argument is subtracted, which adds π/4.

**Rotation about the origin.** To rotate the point 5 − i by π/3 anticlockwise, multiply by cis(π/3) = 1/2 + (√3/2)i: (5 − i)(1/2 + (√3/2)i) = (5/2 + √3/2) + ((5√3)/2 − 1/2)i. The modulus stays √26; only the direction changes.

## Key terms

| Term | Meaning |
|---|---|
| Modulus–argument form | r(cos θ + i sin θ), with r > 0 |
| cis θ | Shorthand for cos θ + i sin θ |
| Euler form | re^(iθ) |
| Principal argument | The argument in −π < θ ≤ π (when that range is used) |
| Enlargement | Scaling distances from the origin by a factor |
| Rotation | Turning about the origin through an angle |
| Parallelogram rule | Geometric picture of complex addition |

## Exam traps

- **Negative r.** −4 cis(π/6) is not polar form; it equals 4 cis(−5π/6).
- **Range.** 3 cis(π/2) × 2 cis(3π/4) = 6 cis(5π/4) = 6 cis(−3π/4) in −π < θ ≤ π.
- **Quotient sign.** Subtract the argument of the divisor: cis(π/6)/cis(−π/3) = cis(π/2).
- **Moduli multiply.** |(1 + i)(3 − 4i)| = √2 × 5 = 5√2, not √2 + 5.
- **Sums.** |z + w| is not |z| + |w| in general.
- **Direction of rotation.** Dividing by cis θ rotates clockwise.
- **Modulus of a quotient.** |(3 + 4i)/(1 − i)| = 5/√2 = (5√2)/2; there is no need to carry out the division first.

## Self-test

1. Write 1 − i in polar and Euler form.
2. Write 4e^(−2πi/3) in Cartesian form.
3. Write −5 cis(π/4) in the form r cis θ with r > 0 and −π < θ ≤ π.
4. Write 2(cos(π/5) − i sin(π/5)) in the form r cis θ.
5. Find 3 cis(2π/3) × 2 cis(π/2), giving θ in −π < θ ≤ π.
6. Find 8 cis(π/4) ÷ 2 cis(−π/2).
7. Find the conjugate and the reciprocal of 5e^(iπ/3), in Euler form.
8. Find |(2 + i)(1 − 3i)| without expanding.
9. Describe the transformation given by multiplying a complex number by 3i.
10. The point P represents z. Write down the complex number for P rotated by π/2 clockwise about the origin.
11. Show that e^(iπ) + 1 = 0.
12. By writing 1 + √3 i and 1 + i in polar form, find (1 + √3 i)(1 + i) in polar form.

**Answers**

1. √2 cis(−π/4) = √2 e^(−iπ/4).
2. 4(−1/2 − (√3/2)i) = −2 − 2√3 i.
3. 5 cis(π/4 − π) = 5 cis(−3π/4).
4. 2 cis(−π/5).
5. 6 cis(7π/6) = 6 cis(−5π/6).
6. 4 cis(3π/4).
7. Conjugate 5e^(−iπ/3); reciprocal (1/5)e^(−iπ/3).
8. |2 + i| × |1 − 3i| = √5 × √10 = 5√2.
9. Enlargement by scale factor 3 about the origin and rotation by π/2 anticlockwise about the origin.
10. −iz (dividing by i).
11. e^(iπ) = cos π + i sin π = −1, so e^(iπ) + 1 = 0.
12. 2 cis(π/3) × √2 cis(π/4) = 2√2 cis(7π/12).

## Where next

Practise with the [section 1.13 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-13-practice/), then move on to powers and roots in the [section 1.14 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-14-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.13.
