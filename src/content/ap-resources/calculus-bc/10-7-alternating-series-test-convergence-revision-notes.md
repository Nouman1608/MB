---
resourceId: "mb-ap-calcbc-10.7-revision-notes"
title: "Alternating Series Test for Convergence: Revision Notes (Calculus BC 10.7)"
description: "One-page recap of the alternating series test: spotting alternating series, the two conditions, showing terms decrease, and the mistakes that cost marks."
course: "calculus-bc"
unit: 10
topics: ["10.7"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-10.7-study-guide"]
learningObjectives:
  - "Recall the two conditions of the alternating series test and what the test can and cannot conclude"
  - "Spot the common errors in alternating series justifications before making them"
skills: ["3"]
studyMinutes: 10
difficulty: "core"
calculator: "none-needed"
calculatorNote: "No calculator needed; a calculator cannot prove that terms decrease or tend to 0."
related: ["mb-ap-calcbc-10.7-study-guide", "mb-ap-calcbc-10.7-practice", "mb-ap-calcbc-10.7-checklist"]
next: "mb-ap-calcbc-10.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "aₙ > 0, decreasing (eventually) and lim aₙ = 0 ⇒ Σ (−1)ⁿ aₙ converges."
  - "The test never proves divergence."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the partial-sums graph and full worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-study-guide/). **BC-only material.** Prerequisites (limits at infinity 1.15, L'Hospital's Rule 4.7, increasing/decreasing 5.3, partial sums 10.1, nth term test 10.3) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- An **alternating series** has signs +, −, +, − … (or −, +, − …): Σ (−1)ⁿ aₙ or Σ (−1)ⁿ⁺¹ aₙ with **aₙ > 0**.
- cos(nπ) = (−1)ⁿ, so it signals an alternating series. (−1)²ⁿ = 1 does not.
- **Test:** if aₙ₊₁ ≤ aₙ from some n on **and** lim aₙ = 0, the series **converges**.
- Why: each partial sum overshoots the last by less, so the zigzag of partial sums closes onto a single limit.

## Key relationships

| Situation | What you can conclude | Test to name |
|---|---|---|
| aₙ decreasing (eventually) and aₙ → 0 | Converges | Alternating series test |
| lim aₙ ≠ 0 (or does not exist) | Diverges | nth term test |
| aₙ → 0 but not decreasing | No conclusion from this test | Try another method |
| Converges by this test | Σ aₙ may still diverge | Check separately (Topic 10.9) |

## How to show aₙ decreases

| Method | Example |
|---|---|
| Compare denominators | 1/(2n + 9) gets smaller as the denominator grows |
| Derivative of f(x) with f(n) = aₙ | f′(x) < 0 for x ≥ N gives decreasing for n ≥ N |
| Ratio | aₙ₊₁/aₙ ≤ 1 |

## Assumptions

- The test looks only at the positive size aₙ, never the signed term.
- Finitely many early terms do not matter, so "decreasing for n ≥ N" is enough. Say what N is.

## Mistakes to avoid

1. **Checking only one condition.** You need both, stated separately.
2. **"Diverges by the alternating series test."** Impossible: use the nth term test.
3. **Proving "decreasing" from a short list of terms.** Give an inequality or a derivative.
4. **Missing the early rise.** Terms such as √n/(n + 4) rise before they fall; state where the fall starts.
5. **Forgetting to conclude.** End with "converges by the alternating series test".

## Quick self-check

1. Does Σ (−1)ⁿ/n^(1/4) converge? *(Yes: 1/n^(1/4) is positive, decreasing and tends to 0.)*
2. Does Σ (−1)ⁿ (n + 1)/n converge? *(No: aₙ → 1, so it diverges by the nth term test. The alternating series test gives no conclusion.)*
3. Is Σ cos(nπ)/(n² + 1) alternating, and does it converge? *(Yes and yes: cos(nπ) = (−1)ⁿ, and 1/(n² + 1) decreases to 0.)*

Next: [practice questions](/advanced-course-resources/calculus-bc/10-7-alternating-series-test-convergence-practice/).
