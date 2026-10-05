---
resourceId: "mb-ap-calcab-1.15-revision-notes"
title: "Connecting Limits at Infinity and Horizontal Asymptotes: Revision Notes (Calculus AB 1.15)"
description: "One-page recap of limits at infinity: end behaviour, horizontal asymptotes, the degree rules for rational functions, square roots, and comparing growth rates."
course: "calculus-ab"
unit: 1
topics: ["1.15"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.15-study-guide"]
learningObjectives:
  - "Recall how to find limits at infinity and turn them into horizontal asymptotes"
  - "Spot the common errors with square roots, signs and growth rates before making them"
skills: ["1", "2"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.15-study-guide", "mb-ap-calcab-1.15-practice", "mb-ap-calcab-1.15-checklist"]
next: "mb-ap-calcab-1.15-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A finite limit as x → ∞ or x → −∞ gives a horizontal asymptote y = L."
  - "Divide by the highest power of x in the denominator, then use 1/xⁿ → 0."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → ∞) f(x)** means "the limit as x increases without bound of f(x)".

## Recap

- A **limit at infinity** asks what f(x) approaches as x grows without bound (x → ∞) or decreases without bound (x → −∞).
- Limits at infinity describe **end behaviour**: levelling off, growing without bound, or oscillating.
- **y = L is a horizontal asymptote** if f(x) → L as x → ∞ or as x → −∞. At most two: one per end.
- A graph **may cross** its horizontal asymptote. The asymptote only describes the far ends.
- To compare growth, find lim (x → ∞) f(x)/g(x): ∞ means f dominates, 0 means g dominates, a positive number means the same rate.

## Key relationships

| Situation | Result as x → ±∞ |
|---|---|
| 1/xⁿ, n a positive integer | → 0 |
| Rational, degree top < degree bottom | → 0; asymptote y = 0 |
| Rational, equal degrees | → ratio of leading coefficients |
| Rational, degree top > degree bottom | no finite limit; no horizontal asymptote |
| √(x²) | the absolute value of x: equals x for x > 0, −x for x < 0 |
| eˣ | → ∞ as x → ∞; → 0 as x → −∞ |
| Growth order for large x | ln x < xᵖ (p > 0) < bˣ (b > 1) |

## Assumptions behind the method

- Divide **every** term on top and bottom by the same nonzero quantity; this does not change the value.
- When x → −∞, the quantity you divide by inside a root must respect the sign: divide by −x, which is positive.
- The growth order is used here as a known fact. It is proved later with L'Hospital's rule (Topic 4.7).

## Mistakes to avoid

1. **Substituting ∞**, or treating ∞/∞ as 1.
2. **Writing √(x²) = x** when x → −∞. The sign of the answer flips.
3. **Using constant terms** instead of leading terms for large x.
4. **Calling y = ∞ an asymptote.** An infinite limit at an end means no horizontal asymptote there.
5. **Assuming both ends match.** Roots, eˣ and arctan x can give different limits at the two ends.
6. **Judging growth from small x.** x³ beats 2ˣ at x = 5, but 2ˣ wins in the long run.

## Quick self-check

1. Find lim (x → ∞) (3x − 7x³)/(2x³ + x). *(−7/2)*
2. Find lim (x → −∞) √(x² + 5)/(2x). *(−1/2: the root is positive and 2x is negative)*
3. Find lim (x → ∞) (ln x)/x. *(0: x grows faster than ln x)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-15-connecting-limits-infinity-horizontal-asymptotes-practice/).
