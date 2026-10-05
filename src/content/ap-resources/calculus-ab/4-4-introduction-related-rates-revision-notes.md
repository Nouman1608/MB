---
resourceId: "mb-ap-calcab-4.4-revision-notes"
title: "Introduction to Related Rates: Revision Notes (Calculus AB 4.4)"
description: "One-page recap of related rates: differentiating with respect to time, the chain, product and quotient rules in action, the order of work and the slips that cost marks."
course: "calculus-ab"
unit: 4
topics: ["4.4"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-4.4-study-guide"]
learningObjectives:
  - "Recall how to differentiate common expressions with respect to time"
  - "Spot the common errors in related rates calculations before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-4.4-study-guide", "mb-ap-calcab-4.4-practice", "mb-ap-calcab-4.4-checklist"]
next: "mb-ap-calcab-4.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Differentiate the linking equation with respect to t; every changing quantity picks up its own rate."
  - "Differentiate first, substitute instant values second."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Related rates:** quantities linked by an equation change together, so their rates are linked too.
- All quantities depend on the **same** independent variable, time t. Differentiate everything with respect to t.
- The **chain rule** is the basis: d/dt of g(x) is g′(x) · dx/dt.
- When two changing quantities are multiplied or divided, you also need the **product rule** or the **quotient rule**.
- A decreasing quantity has a **negative** rate.

## Key relationships

| Expression | d/dt |
|---|---|
| xⁿ | n·xⁿ⁻¹ · dx/dt |
| x² + y² | 2x · dx/dt + 2y · dy/dt |
| xy | x · dy/dt + y · dx/dt |
| x/y | (y · dx/dt − x · dy/dt)/y² |
| πr²h (both r and h change) | 2πrh · dr/dt + πr² · dh/dt |
| πr²h (r fixed) | πr² · dh/dt |

**Order of work:** (1) equation true at all times; (2) differentiate with respect to t; (3) substitute instant values; (4) solve and give units.

## Assumptions behind the method

- Every quantity in the equation is a differentiable function of t.
- The equation holds at **all** times near the instant, not just at that instant. Only then can you differentiate it.
- A quantity is treated as a constant only if it never changes. A value "at the moment when…" is not a constant.

## Mistakes to avoid

1. **Substituting first.** It turns variables into constants and their rates into 0.
2. **Missing rate factors:** writing 3s² instead of 3s² · ds/dt.
3. **"Product rule" as rate × rate:** d/dt(xy) ≠ (dx/dt)(dy/dt).
4. **Wrong sign:** "shrinking at 2 cm/s" means a rate of −2 cm/s.
5. **Quotient rule order:** the top is (bottom × rate of top) − (top × rate of bottom).
6. **Mixed units:** convert metres and centimetres before substituting.

## Quick self-check

1. y = x² + 1, x = 3 and dx/dt = 4. Find dy/dt. *(dy/dt = 2x · dx/dt = 24)*
2. A = πr², r = 5 cm and dr/dt = 2 cm/s. Find dA/dt. *(2πr · dr/dt = 20π cm²/s)*
3. P = xy, x = 2, y = 7, dx/dt = 3 and dy/dt = −1. Find dP/dt. *(x · dy/dt + y · dx/dt = −2 + 21 = 19)*

Next: [practice questions](/advanced-course-resources/calculus-ab/4-4-introduction-related-rates-practice/).
