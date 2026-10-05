---
resourceId: "mb-ap-calcbc-10.9-revision-notes"
title: "Determining Absolute or Conditional Convergence: Revision Notes (Calculus BC 10.9)"
description: "One-page recap of absolute and conditional convergence: the three outcomes, the order to test in, the p-series reference family, rearrangements and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.9"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.9-study-guide"]
learningObjectives:
  - "Recall the definitions of absolute convergence, conditional convergence and divergence"
  - "Recall the order in which to test a series with mixed signs"
skills: ["3"]
studyMinutes: 10
difficulty: "stretch"
calculator: "none-needed"
calculatorNote: "No calculator needed: classifying a series is about naming tests and checking their conditions."
related: ["mb-ap-calcbc-10.9-study-guide", "mb-ap-calcbc-10.9-practice", "mb-ap-calcbc-10.9-checklist"]
next: "mb-ap-calcbc-10.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Absolute: Σ |aₙ| converges. Conditional: Σ aₙ converges, Σ |aₙ| diverges."
  - "Absolute convergence implies convergence; the reverse is false."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the flowchart, the proof and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-study-guide/). **BC-only material.** Prerequisites (Topics 10.3 to 10.8) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- Every series Σ aₙ has a partner Σ |aₙ| with all terms made positive.
- **Absolutely convergent:** Σ |aₙ| converges. Then Σ aₙ converges too.
- **Conditionally convergent:** Σ aₙ converges but Σ |aₙ| diverges. Convergence relies on cancellation.
- **Divergent:** Σ aₙ diverges (and so does Σ |aₙ|).
- If a series converges absolutely, regrouping or reordering its terms does **not** change its sum.

## Order of testing

1. Do the terms approach 0? If not, **divergent** (nth term test).
2. Test **Σ |aₙ|** with a positive-term test: p-series, geometric, comparison, limit comparison, integral or ratio. Converges → **absolutely convergent**. Stop.
3. If Σ |aₙ| diverges, test **Σ aₙ** itself, usually with the alternating series test. Converges → **conditionally convergent**; otherwise **divergent**.

## Key relationships

| Situation | Conclusion | Why |
|---|---|---|
| Σ \|aₙ\| converges | Σ aₙ converges | 0 ≤ aₙ + \|aₙ\| ≤ 2\|aₙ\|, then comparison |
| Σ \|aₙ\| diverges | no conclusion yet | test Σ aₙ separately |
| Ratio test on \|aₙ\|: L < 1 | absolutely convergent | ratio test proves Σ \|aₙ\| converges |
| Ratio test on \|aₙ\|: L > 1 | divergent | \|aₙ\| grows, so aₙ does not → 0 |
| Σ (−1)ⁿ⁺¹/nᵖ, p > 1 | absolutely convergent | p-series converges |
| Σ (−1)ⁿ⁺¹/nᵖ, 0 < p ≤ 1 | conditionally convergent | p-series diverges; alternating series test |
| Σ (−1)ⁿ⁺¹/nᵖ, p ≤ 0 | divergent | terms do not → 0 |

## Mistakes to avoid

1. **Reversing the theorem.** "Σ aₙ converges, so Σ |aₙ| converges" is false.
2. **Stopping early.** Σ |aₙ| diverging rules out *absolute* convergence only.
3. **Alternating series test on irregular signs** (such as cos n or sin n in the numerator). Use absolute values and comparison instead.
4. **Missing conditions.** For the alternating series test, show the terms decrease and approach 0.
5. **Missing absolute value bars** in the ratio test.
6. **Reordering a conditionally convergent series.** Its sum can change.

## Quick self-check

1. Classify Σ (−1)ⁿ/n³. *(Absolutely convergent: p-series with p = 3 > 1.)*
2. Classify Σ (−1)ⁿ⁺¹/n^(1/3). *(Conditionally convergent: p = 1/3 ≤ 1 so Σ |aₙ| diverges; the alternating series test gives convergence.)*
3. Classify Σ (−1)ⁿ 2ⁿ/n. *(Divergent: the ratio of sizes approaches 2 > 1, so the terms do not approach 0.)*
4. Σ |aₙ| converges to 5. Can you reorder Σ aₙ without changing its sum? *(Yes: it is absolutely convergent.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-9-determining-absolute-conditional-convergence-practice/).
