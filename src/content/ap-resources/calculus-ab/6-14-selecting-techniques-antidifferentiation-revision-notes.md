---
resourceId: "mb-ap-calcab-6.14-revision-notes"
title: "Selecting Techniques for Antidifferentiation: Revision Notes (Calculus AB 6.14)"
description: "One-page recap of how to pick an integration technique: the signal for each method, lookalike integrals, integrands with no formula, and the slips that cost marks."
course: "calculus-ab"
unit: 6
topics: ["6.14"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.14-study-guide"]
learningObjectives:
  - "Recall the signal that points to each antidifferentiation technique"
  - "Spot the common errors in choosing a technique before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.14-study-guide", "mb-ap-calcab-6.14-practice", "mb-ap-calcab-6.14-checklist"]
next: "mb-ap-calcab-6.14-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "Classify the integrand first; the form tells you the technique."
  - "Check every antiderivative by differentiating it."
  - "Shared content for Calculus AB and Calculus BC; parts and partial fractions are BC only."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For the decision path, the lookalike table and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ f(x) dx** is an indefinite integral (+ C); **∫ (a to b) f(x) dx** is a definite integral.

## Recap

- There is no new formula in Topic 6.14. The skill is **choosing** the technique by looking at the integrand.
- Ask in order: basic rule? rewrite? substitution? long division? complete the square? (BC: parts? partial fractions?)
- After a rewrite, division or substitution, the new integral often goes back to the basic rules.
- Some integrands, such as e^(−x²) and sin(x²), have **no antiderivative in familiar functions**. Use technology for a definite value, or write an accumulation function.

## Key relationships

| Technique | Signal | Example |
|---|---|---|
| Basic rule | Matches a known derivative | ∫ sec²x dx = tan x + C |
| Rewrite | Expandable product, fraction over one term, roots | ∫ (x + 1)/x dx = ∫ (1 + 1/x) dx |
| Substitution | Inner function g(x) with g′(x) present, up to a constant | ∫ x/(x² + 9) dx = ½ ln(x² + 9) + C |
| Long division | Rational, degree of top ≥ degree of bottom | x²/(x² + 9) = 1 − 9/(x² + 9) |
| Complete the square | Quadratic below with no real roots, no matching x on top | x² − 6x + 13 = (x − 3)² + 4 |
| arctan form | 1/(u² + k²) | ∫ 1/(u² + k²) du = (1/k) arctan(u/k) + C |
| Parts (BC only) | Product of unlike types, e.g. power × log | ∫ u dv = uv − ∫ v du |
| Partial fractions (BC only) | Proper fraction, different linear factors below | 6/((x − 1)(x + 5)) = 1/(x − 1) − 1/(x + 5) |

## Assumptions behind the methods

- Substitution needs the derivative of the inner function present up to a **constant** factor, never a leftover variable.
- For a definite integral by substitution, change the limits to u-values (or return to x and use the original limits).
- ln|u| needs absolute value bars unless u is always positive, as with x² + 9.

## Mistakes to avoid

1. **Starting substitution with no signal.** Check for g′(x) first.
2. **Writing ln(denominator) for every fraction.** ∫ 1/(x² + 9) dx is an arctan, not a log.
3. **Skipping long division** when the top's degree is at least the bottom's.
4. **Integrating top and bottom separately.**
5. **Old limits after substitution** in a definite integral.
6. **Assuming every integrand has a formula.**

## Quick self-check

1. Find ∫ x/(x² + 1)² dx. *(−1/(2(x² + 1)) + C, substitution with u = x² + 1)*
2. Find ∫ (x + 1)/x dx. *(x + ln|x| + C, split the fraction first)*
3. Find ∫ 1/(x² + 2x + 5) dx. *(½ arctan((x + 1)/2) + C, since x² + 2x + 5 = (x + 1)² + 4)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-14-selecting-techniques-antidifferentiation-practice/).
