---
resourceId: "mb-ap-calcbc-10.6-revision-notes"
title: "Comparison Tests for Convergence: Revision Notes (Calculus BC 10.6)"
description: "One-page recap of the direct and limit comparison tests: conditions, the two useful directions, choosing a benchmark from dominant terms, and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.6"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.6-study-guide"]
learningObjectives:
  - "Recall the direct and limit comparison tests with their conditions"
  - "Spot the common errors in comparison arguments before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "stretch"
calculator: "none-needed"
calculatorNote: "Comparison tests are a no-calculator skill."
related: ["mb-ap-calcbc-10.6-study-guide", "mb-ap-calcbc-10.6-practice", "mb-ap-calcbc-10.6-checklist"]
next: "mb-ap-calcbc-10.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "BC only."
  - "Smaller than convergent converges; bigger than divergent diverges."
  - "Limit comparison needs 0 < lim aₙ/bₙ < ∞."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the four-case diagram, the reasons the tests work and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-study-guide/). **BC-only material.** Prerequisites (limits at infinity 1.15, geometric series 10.2, nth term test 10.3, p-series 10.5) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Compare the series you are testing (aₙ) with a **benchmark** you know (bₙ): usually a p-series or a geometric series.
- Both tests need **positive terms**, at least from some n onwards.
- **Direct comparison** links the series with an inequality. **Limit comparison** links them with the limit of aₙ/bₙ.
- Make a guess first (converge or diverge?) from the dominant terms, then pick the comparison that can prove it.

## Key relationships

| Test | Condition | Conclusion |
|---|---|---|
| Direct, convergence | 0 ≤ aₙ ≤ bₙ eventually, ∑ bₙ converges | ∑ aₙ converges |
| Direct, divergence | aₙ ≥ bₙ ≥ 0 eventually, ∑ bₙ diverges | ∑ aₙ diverges |
| Direct, other two cases | smaller than divergent, or bigger than convergent | **No conclusion** |
| Limit comparison | aₙ, bₙ > 0, aₙ/bₙ → L with 0 < L < ∞ | Both converge or both diverge |

## Choosing bₙ

- Keep the fastest-growing term on top and on the bottom: (3n + 1)/(n³ − 2) → bₙ = 1/n².
- Roots count as powers: √n/(n² + 4) → bₙ = 1/n^(3/2).
- Exponentials beat powers: 2ⁿ/(5ⁿ + n²) → bₙ = (2/5)ⁿ.

## Assumptions

- Inequalities only need to hold for n ≥ some N; say which N.
- Bounded pieces: |sin n| ≤ 1, 0 ≤ cos² n ≤ 1, 0 < arctan n < π/2; ln n > 1 for n ≥ 3.

## Mistakes to avoid

1. **Useless direction**, such as "smaller than ∑ 1/n, so it diverges".
2. **No positivity check.**
3. **lim aₙ instead of lim aₙ/bₙ.**
4. **Accepting L = 0 or ∞** in the basic limit comparison test.
5. **Not saying why the benchmark converges or diverges** (state p or the ratio).

## Quick self-check

1. Does ∑ 1/(n³ + n) converge? *(Yes: 0 < aₙ ≤ 1/n³, and ∑ 1/n³ converges, p = 3.)*
2. Does ∑ (n + 1)/(n² + 1) converge? *(No: limit comparison with 1/n gives L = 1, and ∑ 1/n diverges.)*
3. Does ∑ 1/(5ⁿ − 1) converge? *(Yes: aₙ > (1/5)ⁿ so direct comparison fails, but limit comparison with (1/5)ⁿ gives L = 1, and the geometric series converges.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-6-comparison-tests-convergence-practice/).
