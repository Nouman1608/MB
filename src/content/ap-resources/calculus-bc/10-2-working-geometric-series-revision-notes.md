---
resourceId: "mb-ap-calcbc-10.2-revision-notes"
title: "Working with Geometric Series: Revision Notes (Calculus BC 10.2)"
description: "One-page recap of geometric series: spotting the common ratio, the partial-sum formula, the |r| < 1 condition, the sum a/(1 − r), ratios containing x and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.2"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.2-study-guide"]
learningObjectives:
  - "Recall the convergence condition and sum of a geometric series, and the partial-sum formula"
  - "Spot the common errors with first terms, ratios and endpoints before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "All recap and self-check work is done by hand."
related: ["mb-ap-calcbc-10.2-study-guide", "mb-ap-calcbc-10.2-practice", "mb-ap-calcbc-10.2-checklist"]
next: "mb-ap-calcbc-10.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "|r| < 1: sum = first term/(1 − r)."
  - "|r| ≥ 1 (first term not 0): diverges."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivation, the graph and full worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-study-guide/). **BC-only material.** Prerequisites (the definition of convergence from Topic 10.1, limits at infinity 1.15, exponent and log laws) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- **Geometric** means a constant ratio r = (any term)/(the term before it).
- Standard form: Σ from n = 0 to ∞ of a·rⁿ = a + ar + ar² + …, first term a.
- Partial sum: **Sₙ = a(1 − rⁿ)/(1 − r)** for r ≠ 1 (from subtracting r·Sₙ from Sₙ).
- If **|r| < 1**, rⁿ → 0, so the series **converges** to **a/(1 − r)**.
- If **|r| ≥ 1** and a ≠ 0, the partial sums have no limit: the series **diverges**.

## Key relationships

| Situation | What to do | Example |
|---|---|---|
| Standard form, \|r\| < 1 | Sum = a/(1 − r) | Σ from n = 0 of 6(−½)ⁿ = 6/(3/2) = 4 |
| Later start index | Use the actual first term | Σ from n = 2 of 8(−3/4)ⁿ = (9/2)/(7/4) = 18/7 |
| Messy exponents | Rewrite as (constant)·(ratio)ⁿ | 3ⁿ⁺¹/5ⁿ = 3(3/5)ⁿ |
| \|r\| ≥ 1 | Diverges; no formula | Σ 4ⁿ/3ⁿ⁺¹, r = 4/3 |
| First n terms only | Sₙ = a(1 − rⁿ)/(1 − r) | 40 + 36 + …: S₁₀ ≈ 260.529 |
| Ratio contains x | Solve \|r\| < 1; endpoints diverge | ((x − 1)/3)ⁿ: −2 < x < 4, sum 3/(4 − x) |
| Repeating decimal | a = first block, r = 10⁻ᵏ | 0.4545… = 0.45/0.99 = 5/11 |

## Mistakes to avoid

1. **Wrong first term** when the series starts at n = 1 or n = 2.
2. **Using a/(1 − r) without checking |r| < 1.**
3. **Including x-values where |r| = 1.**
4. **Sign slips with negative r:** 1 − (−¾) = 7/4.
5. **Total versus partial:** "in the first n" means Sₙ; "in total" means the full sum.
6. **Not reversing the inequality** when dividing by ln r < 0.

## Quick self-check

1. Find Σ from n = 0 to ∞ of 7(2/5)ⁿ. *(7/(3/5) = 35/3)*
2. Find Σ from n = 1 to ∞ of (−1)ⁿ · 5/2ⁿ. *(First term −5/2, r = −½: (−5/2)/(3/2) = −5/3)*
3. Does Σ from n = 0 to ∞ of 3(5/4)ⁿ converge? *(No: r = 5/4 and |r| > 1, so it diverges)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-2-working-geometric-series-practice/).
