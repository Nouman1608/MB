---
resourceId: "mb-ap-calcbc-10.5-revision-notes"
title: "Harmonic Series and p-Series: Revision Notes (Calculus BC 10.5)"
description: "One-page recap of p-series and the harmonic series: the p > 1 rule, why ∑ 1/n diverges, the alternating harmonic series, rewriting terms as powers of n, and the mistakes to avoid."
course: "calculus-bc"
unit: 10
topics: ["10.5"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.5-study-guide"]
learningObjectives:
  - "Recall when a p-series converges and how the harmonic and alternating harmonic series behave"
  - "Spot the common errors in classifying p-series before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "Classifying series is a no-calculator skill."
related: ["mb-ap-calcbc-10.5-study-guide", "mb-ap-calcbc-10.5-practice", "mb-ap-calcbc-10.5-checklist"]
next: "mb-ap-calcbc-10.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "BC only."
  - "∑ 1/nᵖ converges if p > 1 and diverges if p ≤ 1."
  - "Simplify the term to a single power of n before reading off p."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the proofs, the partial-sum graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-study-guide/). **BC-only material.** Prerequisites (partial sums 10.1, geometric series 10.2, nth term test 10.3, integral test 10.4) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- A **p-series** is ∑ 1/nᵖ with p a fixed number. The variable n is in the base.
- **p > 1: converges. p ≤ 1: diverges.** Proof: the integral test with ∫ from 1 to ∞ of x^(−p) dx (p > 0), and the nth term test for p ≤ 0.
- The **harmonic series** ∑ 1/n is the case p = 1. It diverges, although 1/n → 0.
- The **alternating harmonic series** 1 − 1/2 + 1/3 − … converges (proof in Topic 10.7). Same term sizes as ∑ 1/n, different signs, different outcome.

## Key relationships

| Idea | Statement | Note |
|---|---|---|
| p-series rule | ∑ 1/nᵖ converges ⇔ p > 1 | Boundary p = 1 diverges |
| Integral behind it | ∫ from 1 to ∞ of x^(−p) dx = 1/(p − 1) for p > 1 | Not the sum of the series |
| Harmonic grouping | S(2ᵏ) ≥ 1 + k/2 | Partial sums are unbounded |
| Constant multiple | ∑ c·aₙ behaves like ∑ aₙ (c ≠ 0) | ∑ 1/(2n) diverges |
| Shifted start | Dropping finitely many terms keeps the behaviour | ∑ 1/(n + 5) diverges |
| Sums | conv + conv = conv; conv + div = div | div + div: no conclusion |

## Assumptions

- p is a constant. If the power changes with n, it is not a p-series.
- Use the index laws: √n = n^(1/2), n·∛n = n^(4/3), nᵃ/nᵇ = n^(a−b).

## Mistakes to avoid

1. **"Terms → 0, so it converges."** The harmonic series breaks this.
2. **Using the nth term test on ∑ 1/n.** It is inconclusive there.
3. **p ≥ 1 or p > 0** instead of p > 1.
4. **Reading p before simplifying.** n/n³ is 1/n², so p = 2.
5. **Calling ∑ 1/3ⁿ a p-series.** It is geometric.
6. **Giving a decision without a reason.** Name the series, state p, compare with 1.

## Quick self-check

1. Does ∑ n²/n^(7/2) converge? *(Yes: the term is 1/n^(3/2), p = 3/2 > 1.)*
2. Does ∑ 1/(n^0.5 · n^0.4) converge? *(No: p = 0.9 ≤ 1.)*
3. Does ∑ (1/n³ + 1/n) converge? *(No: convergent plus divergent diverges.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-5-harmonic-series-p-series-practice/).
