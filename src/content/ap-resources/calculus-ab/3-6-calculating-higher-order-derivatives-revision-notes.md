---
resourceId: "mb-ap-calcab-3.6-revision-notes"
title: "Calculating Higher-Order Derivatives: Revision Notes (Calculus AB 3.6)"
description: "One-page recap of second and higher derivatives: notation, when they exist, patterns for polynomials, exponentials and sine, and implicit second derivatives."
course: "calculus-ab"
unit: 3
topics: ["3.6"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.6-study-guide"]
learningObjectives:
  - "Recall the notations and patterns for higher-order derivatives"
  - "Spot the common errors in second derivatives before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.6-study-guide", "mb-ap-calcab-3.6-practice", "mb-ap-calcab-3.6-checklist"]
next: "mb-ap-calcab-3.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "f″ is the derivative of f′; repeat for f‴, f⁽⁴⁾, …, f⁽ⁿ⁾."
  - "f″(a) needs f′ to be differentiable at a."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the sine cycle diagram and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **Second derivative:** differentiate f′ to get f″. Keep going for higher orders.
- **Existence:** f″(a) exists only if f′ is differentiable at a. Example: x^(4/3) has f′(0) = 0 but no f″(0).
- **Simplify f′ first**, then classify it and choose the next rule (Topic 3.5). The rule for f′ is often different from the rule for f: tan x needs a known result, but sec²x then needs the chain rule.
- **Implicit curves:** differentiate dy/dx again, remembering y depends on x. Substitute dy/dx, then use the curve's equation to simplify.

## Key relationships

| Idea | Fact |
|---|---|
| Second derivative notations | f″(x), y″, d²y/dx² |
| nth derivative notations | f⁽ⁿ⁾(x), y⁽ⁿ⁾, dⁿy/dxⁿ |
| d²y/dx² | means d/dx (dy/dx), not (dy/dx)² |
| Polynomial of degree n | nth derivative is constant; all later ones are 0 |
| e^(kx) | nth derivative is kⁿ e^(kx) |
| sin x | cycle: cos x, −sin x, −cos x, sin x (period 4) |
| sin(kx) or cos(kx) | each step adds a factor k; use n ÷ 4 remainder for the function |
| Implicit | derivative of y is y′; derivative of y′ is y″ |

## Assumptions behind the method

- Each derivative you take must exist on the interval you use.
- Trig patterns need radians.
- In an implicit second derivative, the point must lie on the curve, and the bottom of dy/dx must not be 0 there.

## Mistakes to avoid

1. **Squaring dy/dx** instead of differentiating it again.
2. **Reading f⁽⁴⁾(x) as [f(x)]⁴.**
3. **Treating y as a constant** in an implicit second derivative.
4. **Dropping the chain factor k** at each step for sin(kx), cos(kx) or e^(kx).
5. **Sign slips in the sine cycle.** Write out all four steps once.
6. **Assuming f″ exists** because f′ does.

## Quick self-check

1. y = x⁶. Find y‴. *(120x³)*
2. Find d²/dx² [e⁵ˣ]. *(25e⁵ˣ)*
3. Let f(x) = x sin x. Find f″(x). *(2 cos x − x sin x: product rule twice)*
4. What is the 10th derivative of x⁹ + 4x? *(0: a degree-9 polynomial has a constant 9th derivative)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-6-calculating-higher-order-derivatives-practice/).
