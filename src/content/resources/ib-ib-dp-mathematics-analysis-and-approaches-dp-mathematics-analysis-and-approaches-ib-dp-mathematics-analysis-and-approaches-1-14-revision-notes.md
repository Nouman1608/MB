---
title: "IB DP Mathematics: Analysis and Approaches (AA): 1.14 Complex conjugate roots and De Moivre’s theorem (AHL only) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Revision notes for IB DP Maths AA HL section 1.14: conjugate root pairs, De Moivre's theorem, powers, n-th roots, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

These notes condense **syllabus section 1.14** of IB DP Mathematics: Analysis and Approaches (first assessment 2021): conjugate roots of polynomials with real coefficients, De Moivre's theorem and its extension to rational exponents, and powers and roots of complex numbers. It is **HL only**. For explanations and worked examples, use the [section 1.14 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-14/).

## Condensed recall: conjugate roots

- **Theorem.** If p(z) has real coefficients and p(α) = 0, then p(α*) = 0.
- **Reason.** For real coefficients, p(z)* = p(z*).
- **Real quadratic factor** from roots a ± bi: z² − 2az + (a² + b²).
- **Degree and roots.** Degree n gives n roots (with repetition). With real coefficients, non-real roots pair up, so odd-degree polynomials have at least one real root.
- **Finding the rest.** Form the quadratic factor, then divide or compare coefficients to find the remaining factor.
- **Unknown coefficients.** Substitute the given root, expand, and equate real and imaginary parts to zero; or use sum and product of roots.

## Condensed recall: De Moivre's theorem

**Statement.** (r cis θ)ⁿ = rⁿ cis(nθ); in Euler form (re^(iθ))ⁿ = rⁿe^(inθ).

**Proof requirement.** By induction for n ∈ ℤ⁺: basis n = 1; assume true for n = k; multiply by cis θ and use the compound angle formulae; conclude.

**Valid for** all integers n (for negative n, use z⁻¹ = r⁻¹ cis(−θ)) and, through roots, for rational exponents.

**Powers: method.**

1. Convert to polar form.
2. Apply the theorem.
3. Reduce nθ into the required range.
4. Convert back if asked.

**Multiple angles.** Expand (cos θ + i sin θ)ⁿ by the binomial theorem and equate real or imaginary parts with cos nθ + i sin nθ.

**Powers of cos θ or sin θ.** With z = cis θ:

- z + z⁻¹ = 2 cos θ, z − z⁻¹ = 2i sin θ
- zⁿ + z⁻ⁿ = 2 cos nθ, zⁿ − z⁻ⁿ = 2i sin nθ
- Expand (z ± z⁻¹)ⁿ and group into these pairs.

## Condensed recall: roots

**n-th roots of w = r cis θ.**

z = r^(1/n) cis((θ + 2kπ)/n), k = 0, 1, …, n − 1.

| Property | Value |
|---|---|
| Number of distinct roots | n |
| Modulus of each root | r^(1/n) |
| Angle between consecutive roots | 2π/n |
| Shape formed | Regular n-gon centred at the origin |
| Sum of the roots (n ≥ 2) | 0 |

**Roots of unity.** zⁿ = 1 has roots cis(2kπ/n). With ω = cis(2π/n), the roots are 1, ω, ω², …, ωⁿ⁻¹, and 1 + ω + … + ωⁿ⁻¹ = 0.

**Rational exponents.** w^(p/q) (lowest terms) has q values: (q-th roots of w) raised to the power p.

## Key terms

| Term | Meaning |
|---|---|
| Real coefficients | Every coefficient of the polynomial is a real number |
| Conjugate pair | Two roots a + bi and a − bi |
| De Moivre's theorem | (r cis θ)ⁿ = rⁿ cis(nθ) |
| n-th root of w | A number z with zⁿ = w |
| Roots of unity | Solutions of zⁿ = 1 |
| Principal argument | The argument in the stated range, often −π < θ ≤ π |

## Exam traps

- **Non-real coefficients.** The conjugate root theorem needs every coefficient real.
- **Argument multiplied, not powered.** (2 cis(π/5))³ = 8 cis(3π/5).
- **Modulus forgotten.** (√2 cis θ)⁶ = 8 cis 6θ, not cis 6θ.
- **Wrong number of roots.** z⁶ = w has exactly six roots; k runs from 0 to 5.
- **General argument missed.** Writing −16 = 16 cis π and dividing π by 4 finds only one root; include + 2kπ.
- **Range.** 2 cis(7π/4) should be given as 2 cis(−π/4) if −π < θ ≤ π.
- **Quoting instead of showing.** "Use De Moivre's theorem to show" requires the expansion.

## Self-test

1. Given that 3 − 2i is a root of a cubic with real coefficients, write down another root.
2. Find the real quadratic factor with roots 3 ± 2i.
3. Explain why a cubic with real coefficients must have at least one real root.
4. Find (1 + i)⁸.
5. Find (2 cis(π/8))⁴ in Cartesian form.
6. Find (1 − √3 i)⁻³.
7. Write z⁻¹ in polar form for z = 4 cis(π/5).
8. Show that, with z = cis θ, z − z⁻¹ = 2i sin θ.
9. Solve z³ = 27.
10. How many values does 8^(2/3) have, and what are their moduli?
11. Solve z⁶ = −1, stating the general form and the number of roots.
12. Explain why the n-th roots of any non-zero complex number sum to zero when n ≥ 2.

**Answers**

1. 3 + 2i.
2. z² − 6z + 13.
3. Non-real roots occur in conjugate pairs, so the number of non-real roots is even. A cubic has three roots, so at least one is real.
4. (√2 cis(π/4))⁸ = 16 cis 2π = 16.
5. 16 cis(π/2) = 16i.
6. (2 cis(−π/3))⁻³ = 2⁻³ cis π = −1/8.
7. (1/4) cis(−π/5).
8. z = cos θ + i sin θ and z⁻¹ = cos θ − i sin θ, so z − z⁻¹ = 2i sin θ.
9. z = 3 cis(2kπ/3), k = 0, 1, 2: 3, −3/2 + (3√3/2)i, −3/2 − (3√3/2)i.
10. Three values, each with modulus 8^(2/3) = 4.
11. z = cis(π/6 + kπ/3), k = 0, …, 5: six roots on the unit circle.
12. The roots are r^(1/n) cis(φ + 2kπ/n), a geometric series with ratio cis(2π/n) ≠ 1, and its sum contains the factor 1 − cis(2π) = 0. Geometrically, they form a regular n-gon centred at the origin.

## Where next

Test yourself with the [section 1.14 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-14-practice/). The induction proof structure is summarised in the [section 1.15 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-1-15-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section 1.14.
