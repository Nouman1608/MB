---
resourceId: "mb-ap-calcab-1.12-revision-notes"
title: "Confirming Continuity over an Interval: Revision Notes (Calculus AB 1.12)"
description: "One-page recap of continuity on an interval: where each function family is continuous, how to handle piecewise boundaries and closed-interval endpoints, and the mistakes to avoid."
course: "calculus-ab"
unit: 1
topics: ["1.12"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.12-study-guide"]
learningObjectives:
  - "Recall where each standard function family is continuous"
  - "Recall the steps for finding intervals of continuity, including piecewise boundaries and endpoints"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.12-study-guide", "mb-ap-calcab-1.12-practice", "mb-ap-calcab-1.12-checklist"]
next: "mb-ap-calcab-1.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Continuous on an interval = continuous at every point of it."
  - "The standard families are continuous on their domains, so intervals of continuity come from the domain."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagrams and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → c⁻)** and **lim (x → c⁺)** are the limits from the left and from the right.

## Recap

- f is **continuous on an interval** if it is continuous at **every** point of the interval.
- **Open interval (a, b):** the usual two-sided definition at every point inside.
- **Closed interval [a, b]:** continuous on (a, b), plus lim (x → a⁺) f(x) = f(a) and lim (x → b⁻) f(x) = f(b).
- Polynomial, rational, power, exponential, logarithmic and trig functions are continuous **at every point of their domains**.
- Sums, differences, products, quotients (denominator ≠ 0) and composites of continuous functions are continuous.

## Key relationships

| Function | Continuous on |
|---|---|
| Polynomial | (−∞, ∞) |
| Rational p(x)/q(x) | all x with q(x) ≠ 0 |
| √x (even root) | [0, ∞) |
| ∛x (odd root) | (−∞, ∞) |
| eˣ, bˣ (b > 0) | (−∞, ∞) |
| ln x | (0, ∞) |
| sin x, cos x | (−∞, ∞) |
| tan x, sec x | all x except odd multiples of π/2 |
| cot x, csc x | all x except multiples of π |

**Piecewise boundary c:** continuous at c only if left limit = right limit = f(c). If only one side matches f(c), c joins the interval on that side.

## Assumptions behind the method

- "Continuous on its domain" is not the same as "continuous on every interval". An interval must contain no excluded value.
- Each piece of a piecewise function is judged only on the x values it actually uses.
- At an endpoint of a closed interval, only the one-sided limit from inside the interval is needed.

## Mistakes to avoid

1. **Calling 1/x "continuous on [−1, 1]".** Its domain has a gap at 0.
2. **Missing a restriction**: check every denominator, even root and logarithm.
3. **Testing only one side** at a piecewise boundary.
4. **Wrong brackets**: square only if the value exists and the one-sided limit matches it.
5. **Worrying about an asymptote outside a piece's own interval.**
6. **Forgetting removable discontinuities**: a hole still breaks continuity, even though the limit exists.

## Quick self-check

1. Where is ln(x − 3) continuous? *((3, ∞): a logarithm needs x − 3 > 0)*
2. Where is (x + 1)/(x² − 9) continuous? *((−∞, −3), (−3, 3) and (3, ∞))*
3. f(x) = x² for x ≤ 2 and f(x) = 2x for x > 2. Is f continuous on (−∞, ∞)? *(Yes. Both pieces are polynomials, and at x = 2 the left limit, right limit and f(2) are all 4.)*
4. Is tan x continuous on [0, 1]? *(Yes. The first positive value it misses is π/2 ≈ 1.57, which is outside [0, 1].)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-12-confirming-continuity-over-interval-practice/).
