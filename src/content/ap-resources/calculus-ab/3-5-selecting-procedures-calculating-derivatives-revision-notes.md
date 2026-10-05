---
resourceId: "mb-ap-calcab-3.5-revision-notes"
title: "Selecting Procedures for Calculating Derivatives: Revision Notes (Calculus AB 3.5)"
description: "One-page recap of choosing a derivative rule: rewrite first, find the last operation, the full rule table, the special cases and the slips that cost marks."
course: "calculus-ab"
unit: 3
topics: ["3.5"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-3.5-study-guide"]
learningObjectives:
  - "Recall every derivative rule with the form of expression it fits"
  - "Spot the common errors in choosing and applying derivative rules"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-3.5-study-guide", "mb-ap-calcab-3.5-practice", "mb-ap-calcab-3.5-checklist"]
next: "mb-ap-calcab-3.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Rewrite first, then use the last operation to choose the first rule."
  - "Implicit differentiation for equations not solved for y; 1/f′(a) for an inverse at a point."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the structure tree and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: f′(x) and dy/dx are derivatives; d/dx [ … ] means "the derivative of". Angles are in radians.

## Recap

- Topic 3.5 has **no new rule**. It tests whether you pick the right one.
- **Step 1: rewrite** if it helps. Roots and reciprocals to powers; split a fraction with a single-term bottom; use log properties.
- **Step 2: find the last operation** (the one you would do last if you evaluated by hand). It picks the first rule.
- **Step 3: repeat** on each piece until every piece is a basic function.
- With **table values**, write the rule with letters first, then substitute.

## Key relationships

| Form | Rule |
|---|---|
| xⁿ | n xⁿ⁻¹ |
| k·f, f ± g | k·f′, f′ ± g′ |
| f·g | f′g + fg′ |
| f/g | (f′g − fg′)/g² |
| f(g(x)) | f′(g(x))·g′(x) |
| sin x, cos x, tan x | cos x, −sin x, sec²x |
| sec x, csc x, cot x | sec x tan x, −csc x cot x, −csc²x |
| eˣ, ln x | eˣ, 1/x |
| arcsin x, arccos x, arctan x | 1/√(1 − x²), −1/√(1 − x²), 1/(1 + x²) |
| x and y mixed in an equation | implicit: differentiate both sides, solve for dy/dx |
| f⁻¹ at b, where f(a) = b | (f⁻¹)′(b) = 1/f′(a), needs f′(a) ≠ 0 |

## Assumptions behind the rules

- The functions involved are differentiable at the point you use.
- Trig rules need radians.
- Log rewrites such as ln(x⁵) = 5 ln x hold only where the logs are defined.
- The inverse-function rule needs f one-to-one near a and f′(a) ≠ 0.

## Mistakes to avoid

1. **(fg)′ = f′g′** or **(f/g)′ = f′/g′**. Both are wrong.
2. **Forgetting the inner derivative** in a chain rule step.
3. **f′(1) instead of f′(g(1))** when differentiating f(g(x)) at x = 1.
4. **1/f′(b) instead of 1/f′(a)** for an inverse.
5. **Quotient rule with a single-term bottom**, then an algebra slip. Rewrite as powers instead.
6. **Sign errors** in the quotient rule: the order is f′g − fg′.

## Quick self-check

1. Differentiate 4/√x. *(−2x^(−3/2): rewrite as 4x^(−1/2) first)*
2. Find the derivative of (x² + 1)⁵ at x = 1. *(160: chain rule gives 5(x² + 1)⁴ · 2x = 5 × 16 × 2)*
3. Differentiate eˣ sin x. *(eˣ(sin x + cos x): product rule)*
4. Which rule comes first for sin(x² eˣ)? *(The chain rule, since sin is applied last. The inside then needs the product rule.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/3-5-selecting-procedures-calculating-derivatives-practice/).
