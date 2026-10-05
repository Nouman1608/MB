---
resourceId: "mb-ap-calcab-2.10-revision-notes"
title: "Derivatives of Tangent, Cotangent, Secant and Cosecant: Revision Notes (Calculus AB 2.10)"
description: "One-page recap of the derivatives of tan, cot, sec and csc: how each comes from sine and cosine, the sign pattern, useful identities and the mistakes that cost marks."
course: "calculus-ab"
unit: 2
topics: ["2.10"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-2.10-study-guide"]
learningObjectives:
  - "Recall the four derivatives and how to derive each one"
  - "Spot the common sign and square errors before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-2.10-study-guide", "mb-ap-calcab-2.10-practice", "mb-ap-calcab-2.10-checklist"]
next: "mb-ap-calcab-2.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "tan → sec²; cot → −csc²; sec → sec tan; csc → −csc cot."
  - "Rewrite with sin and cos, then use the quotient rule."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the derivations, the graph and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: sec²x means (sec x)². Angles are in radians.

## Recap

- tan, cot, sec and csc are all quotients of sin x and cos x. Rewrite, then use the quotient rule.
- The Pythagorean identity sin²x + cos²x = 1 tidies the numerator for tan and cot.
- The "co" functions (cot, csc) get a minus sign, just as cos x does.
- Each derivative exists exactly where the original function is defined.
- sec²x ≥ 1, so tan x is increasing on each interval of its domain, with slope at least 1. −csc²x ≤ −1, so cot x is decreasing on each interval of its domain.

## Key relationships

| Function | Rewrite | Derivative | Not defined at |
|---|---|---|---|
| tan x | sin x / cos x | sec²x | x = π/2 + kπ |
| cot x | cos x / sin x | −csc²x | x = kπ |
| sec x | 1 / cos x | sec x tan x | x = π/2 + kπ |
| csc x | 1 / sin x | −csc x cot x | x = kπ |

Useful identities: sin²x + cos²x = 1; 1 + tan²x = sec²x; 1 + cot²x = csc²x.

Exact values you will need: tan(π/4) = 1, sec(π/4) = √2, sec(π/3) = 2, tan(π/3) = √3, csc(π/6) = 2, cot(π/6) = √3.

## Assumptions behind the results

- x is measured in radians.
- x is in the domain of the function (the denominator sin x or cos x is not 0).
- For a product or quotient that contains these functions, the product or quotient rule is still needed. (Compositions such as tan(3x) need the chain rule from Topic 3.1.)

## Mistakes to avoid

1. **d/dx tan x = sec x** (missing square).
2. **d/dx sec x = tan x** (missing the factor sec x).
3. **Dropping the minus sign** on cot x or csc x.
4. **Mixing up the reciprocals:** sec x = 1/cos x, csc x = 1/sin x.
5. **Treating sin⁻¹x as 1/sin x.**
6. **Multiplying derivatives** in a product such as x sec x.

## Quick self-check

1. Find the slope of y = tan x at x = π/3. *(sec²(π/3) = 2² = 4)*
2. Find the derivative of csc x at x = π/2. *(−csc(π/2)cot(π/2) = −1 × 0 = 0)*
3. Differentiate sec x + cot x, and evaluate at π/4. *(sec x tan x − csc²x; at π/4: √2 × 1 − 2 = √2 − 2)*

Next: [practice questions](/advanced-course-resources/calculus-ab/2-10-finding-derivatives-tangent-cotangent-secant-practice/).
