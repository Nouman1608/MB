---
resourceId: "mb-ap-calcab-6.8-revision-notes"
title: "Antiderivatives and Indefinite Integrals: Basic Rules and Notation: Revision Notes (Calculus AB 6.8)"
description: "One-page recap of indefinite integrals: the meaning of + C, the table of basic antiderivatives, rewriting before integrating and the errors that cost marks."
course: "calculus-ab"
unit: 6
topics: ["6.8"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.8-study-guide"]
learningObjectives:
  - "Recall the basic antiderivative rules and the derivative fact behind each"
  - "Spot the common errors with indefinite integrals before making them"
skills: ["1", "4"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.8-study-guide", "mb-ap-calcab-6.8-practice", "mb-ap-calcab-6.8-checklist"]
next: "mb-ap-calcab-6.8-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "∫ f(x) dx = F(x) + C, where F′ = f and C is any constant."
  - "Every basic antiderivative is a derivative rule read backwards; check by differentiating."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the family-of-curves figure and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-study-guide/). This topic is shared by Calculus AB and Calculus BC.

## Recap

- **∫ f(x) dx** (no limits) is the **indefinite integral**: all antiderivatives of f.
- If F′ = f, then ∫ f(x) dx = **F(x) + C**. Antiderivatives on an interval differ only by a constant, so this lists them all.
- Graphically, the family is one curve shifted up and down. All members have the same slope at each x.
- Constant multiples and sums integrate term by term. Use one + C at the end.
- No product or quotient rule: expand, split or use an identity first.
- Some functions, such as e^(x²) and sin(x²), have no antiderivative you can write as a formula.

## Key relationships

| Integral | Result |
|---|---|
| ∫ xⁿ dx, n ≠ −1 | xⁿ⁺¹/(n + 1) + C |
| ∫ (1/x) dx | ln\|x\| + C |
| ∫ eˣ dx; ∫ aˣ dx | eˣ + C; aˣ/ln a + C |
| ∫ cos x dx; ∫ sin x dx | sin x + C; −cos x + C |
| ∫ sec²x dx; ∫ csc²x dx | tan x + C; −cot x + C |
| ∫ sec x tan x dx; ∫ csc x cot x dx | sec x + C; −csc x + C |
| ∫ 1/√(1 − x²) dx; ∫ 1/(1 + x²) dx | arcsin x + C; arctan x + C |

## Assumptions behind the rules

- Each result holds on an interval where the integrand is defined. For example, ln|x| + C works on x > 0 or on x < 0, not across 0.
- The constant C is arbitrary. A known point on the graph (Topic 7.7) is needed to fix it. In a definite integral it cancels, so it does not matter there.

## Mistakes to avoid

1. **No + C** on an indefinite integral.
2. **Power rule on 1/x**, which divides by 0.
3. **ln for every fraction:** ∫ 1/x² dx = −1/x + C, not ln(x²).
4. **Factor-by-factor integration** of a product.
5. **Trig sign slips:** ∫ sin x dx = −cos x + C; ∫ csc²x dx = −cot x + C.
6. **No dx**, or an "=" between a function and its integral.

## Quick self-check

1. Find ∫ x^(2/3) dx. *((3/5)x^(5/3) + C)*
2. Find ∫ 7 dx. *(7x + C)*
3. Find ∫ csc²x dx. *(−cot x + C, because d/dx cot x = −csc²x)*
4. Is ∫ (x + 1)² dx = (x + 1)³/3 + C correct? *(Yes: its derivative is (x + 1)². Expanding to x² + 2x + 1 and integrating gives x³/3 + x² + x + C, which differs only by the constant 1/3.)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-8-finding-antiderivatives-indefinite-integrals-basic-practice/).
