---
resourceId: "mb-ap-calcbc-10.1-revision-notes"
title: "Defining Convergent and Divergent Infinite Series: Revision Notes (Calculus BC 10.1)"
description: "One-page recap of infinite series: terms versus partial sums, the limit definition of convergence, recovering terms from Sₙ, telescoping sums and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.1"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.1-study-guide"]
learningObjectives:
  - "Recall the definitions of the nth partial sum and of a convergent series"
  - "Spot the common errors about terms, partial sums and sums before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "All recap and self-check work is done by hand."
related: ["mb-ap-calcbc-10.1-study-guide", "mb-ap-calcbc-10.1-practice", "mb-ap-calcbc-10.1-checklist"]
next: "mb-ap-calcbc-10.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Σ aₙ = S means lim Sₙ = S."
  - "aₙ → 0 is not enough for convergence."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graph, the telescoping method and full worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/). **BC-only material.** Prerequisites (limits at infinity 1.15, partial fractions 6.12, laws of logarithms) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- **Terms** aₙ are the numbers being added. The **series** Σ aₙ is the instruction to add them all.
- The **nth partial sum** Sₙ = a₁ + a₂ + … + aₙ is the total of the first n terms.
- The series **converges to S** exactly when **lim as n → ∞ of Sₙ = S**. Then S is the sum, an exact number.
- If lim Sₙ does not exist (Sₙ → ±∞, or Sₙ never settles), the series **diverges** and has no sum.

## Key relationships

| Idea | Statement | Example |
|---|---|---|
| Partial sum | Sₙ = Σ from k = 1 to n of aₖ | ½ + ¼ + ⅛: S₃ = ⅞ |
| Convergence | Σ aₙ = S ⇔ lim Sₙ = S | Sₙ = 3n/(n + 2) → 3 |
| Terms from Sₙ | a₁ = S₁; aₙ = Sₙ − Sₙ₋₁ (n ≥ 2) | Sₙ = 3n/(n + 2) gives a₄ = 1/5 |
| Telescoping | Split aₙ, cancel, find Sₙ, take the limit | Σ 2/((n + 1)(n + 3)) = 5/6 |
| Divergence with aₙ → 0 | Sₙ can still grow without bound | Σ ln((n + 1)/n): Sₙ = ln(n + 1) → ∞ |
| Bounded but divergent | Sₙ oscillates | 1 − 1 + 1 − …: Sₙ = 1, 0, 1, 0, … |
| Changing the start | Same convergence, different sum | Σ from n = 3 of 2/((n + 1)(n + 3)) = 9/20 |

## Mistakes to avoid

1. **Using lim aₙ as the sum.** The sum is lim **Sₙ**.
2. **"aₙ → 0, so it converges."** Counter-example: Σ ln((n + 1)/n).
3. **Trusting a table** of partial sums as proof.
4. **Assigning a value** to 1 − 1 + 1 − … or writing "the sum is ∞" as if it were a sum.
5. **Using S₀** for the first term. Use a₁ = S₁.
6. **Losing surviving pieces** when telescoping: write out the first few and last few brackets.

## Quick self-check

1. Sₙ = 2n/(n + 1) for Σ from n = 1 of aₙ. Find a₁, a₃ and the sum. *(a₁ = 1, a₃ = 3/2 − 4/3 = 1/6, sum 2)*
2. Find Σ from n = 1 to ∞ of (1/(n + 1) − 1/(n + 2)). *(Sₙ = ½ − 1/(n + 2) → ½)*
3. Does Σ from n = 1 to ∞ of (√(n + 1) − √n) converge? *(No: Sₙ = √(n + 1) − 1 → ∞, so it diverges, although the terms → 0)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-practice/).
