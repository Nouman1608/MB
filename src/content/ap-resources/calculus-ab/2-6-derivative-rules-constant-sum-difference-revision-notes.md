---
resourceId: "mb-ap-calcab-2.6-revision-notes"
title: "Derivative Rules: Constant, Sum, Difference and Constant Multiple: Revision Notes (Calculus AB 2.6)"
description: "One-page recap of the constant, constant multiple, sum and difference rules, how to differentiate polynomials term by term, and the slips that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.6-study-guide"]
learningObjectives:
  - "Recall the four basic derivative rules and what each means for a graph"
  - "Differentiate polynomials and sums of powers quickly and accurately"
  - "Spot the common errors before making them"
skills: ["1"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.6-study-guide", "mb-ap-calcab-2.6-practice", "mb-ap-calcab-2.6-checklist"]
next: "mb-ap-calcab-2.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Constants differentiate to 0; coefficients stay; derivatives split over + and −."
  - "Rewrite as a sum of powers first, then differentiate term by term."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the proofs from the limit definition, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: f′(x), dy/dx and d/dx[…] all mean the derivative with respect to x. Here c and k are constants.

## Recap

- Each rule follows from the limit definition plus a limit property from Topic 1.5.
- **A constant term** shifts the graph up or down. Steepness does not change, so its derivative is 0.
- **A coefficient** stretches the graph vertically and multiplies every slope by the same factor.
- **Sums and differences** can be differentiated one term at a time.
- With the power rule, these four rules let you differentiate **any polynomial** and any sum of powers of x.
- They do **not** split products or quotients.

## Key relationships

| Rule | Statement | Example |
|---|---|---|
| Constant | d/dx[c] = 0 | d/dx[π²] = 0 |
| Constant multiple | d/dx[k·f(x)] = k·f′(x) | d/dx[7x³] = 21x² |
| Sum | d/dx[f + g] = f′ + g′ | d/dx[x⁴ + x⁻¹] = 4x³ − x⁻² |
| Difference | d/dx[f − g] = f′ − g′ | d/dx[x² − 5x] = 2x − 5 |
| Linearity | d/dx[a·f + b·g] = a·f′ + b·g′ | f′(3) = 2, g′(3) = −5 → d/dx[4f − g] at 3 is 13 |

## Rewrite first

- Expand brackets: (2x − 3)² = 4x² − 12x + 9.
- Split a fraction with a **one-term** denominator: (x³ + 5)/x = x² + 5x⁻¹.
- Write roots and reciprocals as powers: 3/x² = 3x⁻², 5√x = 5x^(1/2).
- A denominator with several terms needs the quotient rule (Topic 2.9).

## Mistakes to avoid

1. **Keeping the constant term:** d/dx[x² + 7] = 2x, not 2x + 7.
2. **Losing a coefficient:** d/dx[5x] = 5, not 0.
3. **Differentiating π², e or √2** as if they contained x.
4. **Splitting products or quotients** into products or quotients of derivatives.
5. **Differentiating (2x − 3)² as 2(2x − 3).** Expand first.
6. **Sign slips:** d/dx[−3x⁻²] = +6x⁻³.

## Quick self-check

1. Find d/dx[4x³ − 2x² + 9]. *(12x² − 4x)*
2. Let f(x) = 6/x − 2√x. Find f′(1). *(f′(x) = −6x⁻² − x^(−1/2), so f′(1) = −6 − 1 = −7)*
3. Find d/dx[(x + 2)(x − 5)]. *(Expand: x² − 3x − 10, so the derivative is 2x − 3)*
4. Why do y = x³ and y = x³ − 40 have the same derivative? *(The second is the first shifted down 40 units. A shift does not change any slope.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-6-derivative-rules-constant-sum-difference-practice/).
