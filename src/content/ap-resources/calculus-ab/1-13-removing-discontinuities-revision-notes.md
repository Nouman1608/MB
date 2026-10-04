---
resourceId: "mb-ap-calcab-1.13-revision-notes"
title: "Removing Discontinuities: Revision Notes (Calculus AB 1.13)"
description: "One-page recap of removable discontinuities, redefining a function value, and the boundary condition for solving parameters in piecewise functions."
course: "calculus-ab"
unit: 1
topics: ["1.13"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-1.13-study-guide"]
learningObjectives:
  - "Recall when a discontinuity can be removed and how to remove it"
  - "Recall the boundary condition for a continuous piecewise function"
  - "Spot the common errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-1.13-study-guide", "mb-ap-calcab-1.13-practice", "mb-ap-calcab-1.13-checklist"]
next: "mb-ap-calcab-1.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Removable means the limit exists: set f(c) equal to it."
  - "Piecewise boundary: left expression at c = right expression at c = f(c)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, graphs and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **lim (x → c) f(x)** means "the limit as x approaches c of f(x)"; c⁻ and c⁺ mean from the left and from the right.

## Recap

- You may change **only the value f(c)**, never the values near c.
- If lim (x → c) f(x) exists and equals L, define (or redefine) **f(c) = L**. The discontinuity is **removable**.
- If the one-sided limits differ (jump) or are infinite (vertical asymptote), **no value of f(c) helps**.
- In a piecewise function, each piece is usually continuous on its own interval. Check only the **boundaries**.
- At a boundary c: substitute c into **both** expressions and set them equal. The piece with ≤ or ≥ gives f(c).

## Key relationships

| Situation | What to do | Result |
|---|---|---|
| 0/0 at c and the limit is L | Find L by algebra (Topic 1.6) | Define f(c) = L |
| f(c) defined but ≠ limit | Find the limit L | Redefine f(c) = L |
| Nonzero/0 after simplifying | Check each side | Asymptote: not removable |
| One-sided limits differ | None for a fixed formula | Jump: not removable |
| One parameter, one boundary | Left value at c = right value at c | One equation |
| Two parameters, two boundaries | One equation per boundary | Solve simultaneously |

## Assumptions behind the method

- Each piece must be continuous on its own interval (polynomials, roots on their domain, exponentials, trig).
- A limit uses values near c only, so the value of f(c) never changes the limit.
- The equation may have one solution, two, or none. All three are possible answers.

## Mistakes to avoid

1. **Saying "removable" without giving the value** of f(c).
2. **Trying to remove a jump** by picking one side's value.
3. **Setting a piece equal to 0** instead of equal to the other piece.
4. **Substituting the wrong x** at a boundary.
5. **Losing a solution** when the condition is a quadratic in k.
6. **Inventing a value** when the parameter cancels and the equation is false.
7. **Trusting a calculator plot** to show a hole.

## Quick self-check

1. f(x) = (x² − 49)/(x − 7) for x ≠ 7. What value of f(7) makes f continuous? *(14)*
2. f(x) = kx − 1 for x < 2 and f(x) = x² + k for x ≥ 2. Find k. *(2k − 1 = 4 + k, so k = 5; both pieces give 9)*
3. A function has left limit 2 and right limit 5 at x = c. Can a new value of f(c) make it continuous? *(No. The two-sided limit does not exist, so no single value works.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/1-13-removing-discontinuities-practice/).
