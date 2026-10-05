---
resourceId: "mb-ap-calcbc-6.13-revision-notes"
title: "Evaluating Improper Integrals: Revision Notes (Calculus BC 6.13)"
description: "One-page recap of improper integrals: the two kinds, the limit definitions, converge or diverge, the p-integral benchmarks, hidden asymptotes and the mistakes that cost marks."
course: "calculus-bc"
unit: 6
topics: ["6.13"]
resourceType: "revision-notes"
calculusScope: "bc-only"
prerequisiteResources: ["mb-ap-calcbc-6.13-study-guide"]
learningObjectives:
  - "Recall the limit definitions for each kind of improper integral"
  - "Spot the common errors with improper integrals before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Evaluate improper integrals by hand with limits; a calculator may only check a value where one is allowed."
related: ["mb-ap-calcbc-6.13-study-guide", "mb-ap-calcbc-6.13-practice", "mb-ap-calcbc-6.13-checklist"]
next: "mb-ap-calcbc-6.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only."
  - "Replace the problem point with a letter, integrate, take the limit."
  - "Finite limit: converges. Anything else: diverges."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the graph, the definitions table and worked examples, use the [full study guide](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-study-guide/). **BC-only material.** Prerequisites (limits, L'Hospital's rule 4.7, FTC 6.7, techniques 6.9 to 6.12) are on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## Recap

- An integral is **improper** if a limit of integration is ±∞, or if the integrand is **unbounded** at an endpoint or at a point inside the interval.
- Method: replace the problem point with a letter, find the definite integral, then take the limit.
- **Converges:** the limit is a finite number (the value). **Diverges:** the limit is infinite or does not exist.
- An infinitely long or infinitely tall region can still have a finite area.

## Key relationships

| Case | Rewrite as | Note |
|---|---|---|
| Infinite upper limit | lim as b → ∞ of ∫ from a to b of f(x) dx | Same idea for −∞ below |
| Asymptote at the endpoint a | lim as t → a⁺ of ∫ from t to b of f(x) dx | One-sided limit from inside the interval |
| Asymptote at c inside [a, b] | ∫ from a to c + ∫ from c to b | Both parts must converge |
| From −∞ to ∞ | ∫ from −∞ to 0 + ∫ from 0 to ∞ | Not one symmetric limit |
| p-integral on [1, ∞) | ∫ 1/xᵖ dx = 1/(p − 1) if p > 1 | Diverges if p ≤ 1 |
| p-integral on (0, 1] | ∫ 1/xᵖ dx = 1/(1 − p) if p < 1 | Diverges if p ≥ 1 |
| Example | ∫ from 1 to ∞ of 4/(x(x + 2)) dx = 2 ln 3 | Combine logs before the limit |

## Mistakes to avoid

1. **Plugging in ∞.** Use a letter and limit notation.
2. **Missing a hidden asymptote.** ∫ from −1 to 1 of 1/x² dx diverges; it is not −2.
3. **∞ − ∞.** Combine log terms into one log first.
4. **"f → 0 so it converges."** 1/x is the counter-example.
5. **Symmetric limits** for ∫ from −∞ to ∞: split, and check both halves.
6. **Skipping L'Hospital's rule** for b e^(−b) or (ln b)/b.

## Quick self-check

1. Evaluate ∫ from 1 to ∞ of 3/x⁴ dx. *(lim as b → ∞ of (1 − 1/b³) = 1)*
2. Evaluate ∫ from 0 to 4 of 1/√x dx. *(lim as t → 0⁺ of (4 − 2√t) = 4)*
3. Evaluate ∫ from 0 to ∞ of e^(−x/5) dx. *(lim as b → ∞ of (5 − 5e^(−b/5)) = 5)*
4. Does ∫ from 2 to ∞ of 1/(x − 1) dx converge? *(No: ln(b − 1) → ∞, so it diverges)*

Next: [practice questions](/advanced-course-resources/calculus-bc/6-13-evaluating-improper-integrals-practice/).
