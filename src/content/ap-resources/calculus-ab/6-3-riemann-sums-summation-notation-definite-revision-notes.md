---
resourceId: "mb-ap-calcab-6.3-revision-notes"
title: "Riemann Sums, Summation Notation and Definite Integral Notation: Revision Notes (Calculus AB 6.3)"
description: "One-page recap of sigma notation, the general Riemann sum, the definition of the definite integral and how to translate a limit of sums into an integral and back."
course: "calculus-ab"
unit: 6
topics: ["6.3"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.3-study-guide"]
learningObjectives:
  - "Recall the parts of a Riemann sum and the definition of the definite integral"
  - "Recall the translation steps between a limit of sums and an integral, and the errors to avoid"
skills: ["2", "1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.3-study-guide", "mb-ap-calcab-6.3-practice", "mb-ap-calcab-6.3-checklist"]
next: "mb-ap-calcab-6.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Riemann sum: Σ f(xᵢ*) Δxᵢ. Definite integral: its limit as the largest width → 0."
  - "Equal widths: Δx = (b − a)/n and xᵢ = a + iΔx."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **Σ (i = 1 to n) aᵢ** means a₁ + a₂ + … + aₙ, and **∫ (a to b) f(x) dx** means the definite integral of f from a to b.

## Recap

- Sigma notation has an index, a first value, a last value and a term. Σ (i = 1 to 4) (2i + 1) = 3 + 5 + 7 + 9 = 24.
- A **Riemann sum** needs a partition a = x₀ < x₁ < … < xₙ = b. In each subinterval pick a sample point xᵢ*, multiply f(xᵢ*) by the width Δxᵢ, then add.
- For f continuous on [a, b], the **definite integral** is the limit of Riemann sums as the largest width shrinks to 0. Any choice of sample points gives the same limit.
- With equal widths, "largest width → 0" means n → ∞.
- The integral is a **signed** area: parts below the axis count as negative.

## Key relationships

| Idea | Formula or rule |
|---|---|
| Width (equal pieces) | Δx = (b − a)/n |
| Partition points | xᵢ = a + iΔx, so x₀ = a and xₙ = b |
| Right sum | Σ (i = 1 to n) f(a + iΔx) Δx |
| Left sum | Σ (i = 1 to n) f(a + (i − 1)Δx) Δx |
| Definition | ∫ (a to b) f(x) dx = lim (n → ∞) Σ (i = 1 to n) f(a + iΔx) Δx |
| Sum → integral | Δx becomes dx; a + iΔx becomes x; b = a + (b − a) |
| Constant factor | Σ c·aᵢ = c · Σ aᵢ |

## Assumptions behind the method

- f is continuous on [a, b], so the limit exists and does not depend on the sample points.
- In a sum with equal widths, the factor (number)/n is the width, and the number is b − a.
- A limit of sums can match more than one integral (for example ∫ (2 to 5) √x dx and ∫ (0 to 3) √(2 + x) dx). Each must give the same value.

## Mistakes to avoid

1. **Treating the number in (number)·i/n as b.** It is b − a.
2. **Shifting twice**, e.g. writing ∫ (2 to 5) √(2 + x) dx.
3. **Dropping or changing the width factor.** A 1/n in place of 3/n changes the value.
4. **Letting n → ∞ with unequal widths** without checking that the widest piece shrinks.
5. **Miscounting terms** when the index starts at 0.
6. **Leaving out dx.**

## Quick self-check

1. Find Σ (i = 1 to 3) i². *(1 + 4 + 9 = 14)*
2. Write lim (n → ∞) Σ (i = 1 to n) (1 + 2i/n)² · (2/n) as an integral. *(∫ (1 to 3) x² dx, or ∫ (0 to 2) (1 + x)² dx)*
3. Write ∫ (0 to 2) 3x dx as the limit of a right Riemann sum, then find its value with geometry. *(lim (n → ∞) Σ (i = 1 to n) 3(2i/n) · (2/n); a triangle with base 2 and height 6, so the value is 6)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-practice/).
