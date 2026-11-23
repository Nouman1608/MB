---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.14 Complex conjugate roots and De Moivre’s theorem (AHL only)"
resourceType: "study-guides"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Number and algebra"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 1.14
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-number-and-algebra"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-1-14"
description: "IB DP Maths AA HL section 1.14 study guide: conjugate root pairs, De Moivre's theorem for powers, z + 1/z identities, and n-th roots of complex numbers."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers **syllabus section 1.14** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): complex conjugate roots of quadratic and polynomial equations with real coefficients, De Moivre's theorem and its extension to rational exponents, and powers and roots of complex numbers. It is **HL only**. The guide also requires the proof of De Moivre's theorem by mathematical induction for n ∈ ℤ⁺; that proof is set out in full in the [complex numbers (HL) study guide](/resources/ib-dp-mathematics-aa-hl-complex-numbers/), and the induction method itself is taught in the [section 1.15 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-15/).

You need polar and Euler form fluently first: see the [section 1.13 study guide](/resources/ib-dp-mathematics-analysis-and-approaches-1-13/).

## What section 1.14 asks of you

- Use the fact that non-real roots of a polynomial with real coefficients occur in conjugate pairs.
- State and use De Moivre's theorem, (r cis θ)ⁿ = rⁿ cis(nθ), and prove it by induction for n ∈ ℤ⁺.
- Extend it to rational exponents to find roots.
- Find powers and roots of complex numbers.

## Conjugate roots

**Why the theorem holds.** Let p(z) = aₙzⁿ + … + a₁z + a₀ with every coefficient real. Taking the conjugate of each term, and using (zw)* = z*w* and a* = a for real a, gives p(z)* = p(z*). So if p(α) = 0, then p(α*) = 0* = 0. The conjugate of a root is a root.

**The condition matters.** For z² − iz = 0 the roots are 0 and i, but −i is not a root. The coefficient −i is not real, so the theorem does not apply.

**Each pair gives a real quadratic factor.** If a ± bi are roots, then

(z − (a + bi))(z − (a − bi)) = z² − 2az + (a² + b²),

since the sum of the pair is 2a and the product is a² + b².

**Counting roots.** A polynomial of degree n has n roots (counted with repetition) in the complex numbers. With real coefficients, non-real roots come in pairs, so a cubic always has at least one real root.

### Worked example 1 (calculator-free): a quartic

Given that 1 + i is a root of z⁴ − 6z³ + 23z² − 34z + 26 = 0, find the other roots.

```
Coefficients are real, so 1 − i is also a root.
Sum = 2, product = 2, so z² − 2z + 2 is a factor.
Write the quartic as (z² − 2z + 2)(z² + pz + 13)      (13 × 2 = 26)
z³ coefficient: p − 2 = −6, so p = −4
Check z coefficient: 2p − 26 = −8 − 26 = −34  ✓
z² − 4z + 13 = 0 gives z = 2 ± 3i
Roots: 1 ± i and 2 ± 3i
```

*Annotation.* Comparing coefficients is usually quicker than long division. Checking an unused coefficient, here the z term, confirms the factorisation.

## De Moivre's theorem and powers

(r cis θ)ⁿ = rⁿ cis(nθ), or in Euler form (re^(iθ))ⁿ = rⁿe^(inθ).

The Euler form makes the result look like an exponent law, which is a good way to remember it. The theorem also holds for negative integers: z⁻ⁿ = r⁻ⁿ cis(−nθ).

**Method for a power.** Convert to polar form, apply the theorem, reduce the argument into the required range by adding or subtracting multiples of 2π, then convert back if asked.

```
(−1 + √3 i)⁹:  r = 2, θ = 2π/3
             = 2⁹ cis(6π) = 512 cis 0 = 512

(√3 + i)⁻⁶:   r = 2, θ = π/6
             = 2⁻⁶ cis(−π) = −1/64
```

Both results are real, which is far from obvious in Cartesian form.

### Worked example 2 (calculator-free): powers of cos θ

Let z = cis θ.

**(a)** Show that zⁿ + z⁻ⁿ = 2 cos nθ.

```
zⁿ = cis(nθ) = cos nθ + i sin nθ
z⁻ⁿ = cis(−nθ) = cos nθ − i sin nθ
Adding: zⁿ + z⁻ⁿ = 2 cos nθ
```

**(b)** Hence show that cos³θ = (1/4)(cos 3θ + 3 cos θ).

```
(z + z⁻¹)³ = z³ + 3z + 3z⁻¹ + z⁻³          (binomial theorem)
           = (z³ + z⁻³) + 3(z + z⁻¹)
(2 cos θ)³ = 2 cos 3θ + 3 × 2 cos θ
8 cos³θ = 2 cos 3θ + 6 cos θ
cos³θ = (1/4)(cos 3θ + 3 cos θ)
```

*Annotation.* Group the expansion into matching pairs zᵏ + z⁻ᵏ before substituting. This method turns powers of cos θ into multiple angles, the reverse of expanding (cos θ + i sin θ)ⁿ to get cos nθ in terms of powers of cos θ.

## Roots of complex numbers

The extension to rational exponents gives the n-th roots. Because the argument can be θ + 2kπ for any integer k,

z = r cis θ has exactly n distinct n-th roots: r^(1/n) cis((θ + 2kπ)/n), k = 0, 1, …, n − 1.

Facts about the roots:

- They all have modulus r^(1/n), so they lie on a circle centred at the origin.
- Consecutive roots differ in argument by 2π/n, so they are the vertices of a regular n-gon.
- For n ≥ 2 they sum to zero.
- For a rational power z^(p/q) in lowest terms, there are q distinct values: find the q-th roots, then raise each to the power p.

### Worked example 3 (calculator-free): fourth roots

Solve z⁴ = −16.

```
−16 = 16 cis(π + 2kπ)
z = 16^(1/4) cis((π + 2kπ)/4) = 2 cis(π/4 + kπ/2),   k = 0, 1, 2, 3
k = 0: 2 cis(π/4)   = √2 + √2 i
k = 1: 2 cis(3π/4)  = −√2 + √2 i
k = 2: 2 cis(5π/4)  = 2 cis(−3π/4) = −√2 − √2 i
k = 3: 2 cis(7π/4)  = 2 cis(−π/4)  = √2 − √2 i
```

The four roots are the vertices of a square of side 2√2, centred on the origin. They are two conjugate pairs, as they must be, since z⁴ + 16 has real coefficients.

### Worked example 4 (calculator-free): roots of unity

The fifth roots of unity are 1, ω, ω², ω³ and ω⁴, where ω = cis(2π/5).

Because the five roots sum to zero, 1 + ω + ω² + ω³ + ω⁴ = 0. The real parts give

1 + 2 cos(2π/5) + 2 cos(4π/5) = 0, so **cos(2π/5) + cos(4π/5) = −1/2**,

using cos(6π/5) = cos(4π/5) and cos(8π/5) = cos(2π/5), which hold because ω³ = (ω²)* and ω⁴ = ω*.

## Common mistakes

- Applying the conjugate root theorem to a polynomial with a non-real coefficient.
- In De Moivre, raising the argument to the power n instead of multiplying it by n.
- Forgetting to take rⁿ (or r^(1/n) for roots).
- Giving only one root of zⁿ = w, or n + 1 roots by letting k run from 0 to n.
- Not reducing the final argument into the stated range.
- In zⁿ + z⁻ⁿ problems, substituting before grouping terms into pairs.

## Exam technique: the command words

- **Find the other roots**: state the conjugate root and the reason (real coefficients) before factorising.
- **Use De Moivre's theorem to show that**: the expansion of (cos θ + i sin θ)ⁿ or (z + z⁻¹)ⁿ must appear; a quoted identity earns nothing.
- **Solve zⁿ = w, giving answers in the form r cis θ / re^(iθ)**: all n roots, each with the argument in range.
- **Prove by mathematical induction**: write the full four-part structure, as section 1.15 sets out.

HL Paper 1 is calculator-free, so exact arguments and the binomial expansions must be done by hand. On Papers 2 and 3 a GDC can check powers and roots numerically.

## Where next

Condense the section with the [section 1.14 revision notes](/resources/ib-dp-mathematics-analysis-and-approaches-1-14-revision-notes/), then practise with the [section 1.14 practice questions](/resources/ib-dp-mathematics-analysis-and-approaches-1-14-practice/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.14.
