---
resourceId: "mb-ap-calcab-1.5-revision-notes"
title: "Determining Limits Using Algebraic Properties of Limits: Revision Notes (Calculus AB 1.5)"
description: "One-page recap of the limit properties, the condition each one needs, composite and one-sided limits, and the mistakes that cost marks."
course: "calculus-ab"
unit: 1
topics: ["1.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.5-study-guide"]
learningObjectives:
  - "Recall each limit property and the condition it needs"
  - "Spot the common errors with quotients, composites and one-sided limits before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.5-study-guide", "mb-ap-calcab-1.5-practice", "mb-ap-calcab-1.5-checklist"]
next: "mb-ap-calcab-1.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Limits of sums, differences, products, powers and roots follow from the separate limits, when those limits exist."
  - "Quotients need a nonzero bottom limit; composites need an outer function you can substitute into."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → a) f(x)** means "the limit as x approaches a of f(x)"; **x → a⁻** is from the left and **x → a⁺** is from the right.

## Recap

- Start from two facts: lim (x → a) c = c and lim (x → a) x = a.
- If lim f(x) = L and lim g(x) = M both exist, you can combine them with the properties below.
- Polynomials: lim (x → a) p(x) = p(a). Rational functions: substitute, as long as the bottom is not 0 at a.
- The properties also work for one-sided limits.
- **Two-sided test:** lim (x → a) f(x) exists only when both one-sided limits exist and are equal.
- The value f(a) never decides the limit.

## Key relationships

| Property | Result | Condition |
|---|---|---|
| Sum / difference | L ± M | Both limits exist |
| Constant multiple | kL | lim f exists |
| Product | LM | Both limits exist |
| Quotient | L/M | Both exist **and M ≠ 0** |
| Power | Lⁿ | n a positive whole number |
| Root | ⁿ√L | L > 0 for an even root |
| Composite | f(L), where g(x) → L | f can be evaluated by substitution at L |

## Assumptions behind the method

- Every property assumes the separate limits exist and are finite.
- If a separate limit does not exist, the property is silent: work out each one-sided limit of the whole expression instead.
- If the outer function of a composite jumps at L, find which side g(x) approaches L from, and use that one-sided limit of f.

## Mistakes to avoid

1. **Using the quotient property when the bottom limit is 0.** Nonzero/0: no finite limit. 0/0: undecided (Topic 1.6).
2. **Assuming "no limit for f" means "no limit for f + g".** Jumps can cancel.
3. **Reading the filled dot as the limit.** The filled dot is f(a); the limit is where the curve heads.
4. **Writing f(lim g) without checking f** at that point.
5. **Losing signs:** 3 − (−4) = 7 and (−2)³ = −8.
6. **Using the wrong piece** of a piecewise function on one side of a.

## Quick self-check

1. Find lim (x → −2) (x³ + x)/(x − 1). *(10/3: the top tends to −10 and the bottom to −3.)*
2. lim (x → 1) f(x) = 2 and lim (x → 1) g(x) = −1. Find lim (x → 1) [(f(x))²g(x) − 3g(x)]. *(−1: that is 4 × (−1) − 3 × (−1) = −4 + 3.)*
3. f(x) = x² + 1 for x < 1, f(1) = 5, and f(x) = 2x for x > 1. Does lim (x → 1) f(x) exist? *(Yes, it is 2: both one-sided limits are 2. The value f(1) = 5 does not matter.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-5-determining-limits-algebraic-properties-limits-practice/).
