---
resourceId: "mb-ap-calcab-6.7-revision-notes"
title: "The Fundamental Theorem of Calculus and Definite Integrals: Revision Notes (Calculus AB 6.7)"
description: "One-page recap of evaluating definite integrals with antiderivatives: the theorem and its condition, the five-step method, net change and the errors that cost marks."
course: "calculus-ab"
unit: 6
topics: ["6.7"]
resourceType: "revision-notes"
calculusScope: "ab-and-bc"
prerequisiteResources: ["mb-ap-calcab-6.7-study-guide"]
learningObjectives:
  - "Recall the evaluation form of the Fundamental Theorem of Calculus and its continuity condition"
  - "Spot the common errors in evaluating definite integrals before making them"
skills: ["1", "3"]
studyMinutes: 10
difficulty: "core"
calculator: "not-permitted"
related: ["mb-ap-calcab-6.7-study-guide", "mb-ap-calcab-6.7-practice", "mb-ap-calcab-6.7-checklist"]
next: "mb-ap-calcab-6.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc"]
keyPoints:
  - "f continuous on [a, b] and F′ = f give ∫ (a to b) f(x) dx = F(b) − F(a)."
  - "Integrating a rate gives net change: ∫ (a to b) F′(x) dx = F(b) − F(a)."
  - "Shared content for Calculus AB and Calculus BC."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

Short on time? This page is the recap. For explanations, the figure and worked examples, use the [full study guide](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/). This topic is shared by Calculus AB and Calculus BC.

Notation: **∫ (a to b) f(x) dx** is the definite integral from a to b; **[F(x)] (a to b)** means F(b) − F(a).

## Recap

- An **antiderivative** of f is any F with F′ = f. Antiderivatives of the same f differ only by a constant.
- If f is continuous, the accumulation function ∫ (a to x) f(t) dt is one antiderivative (Topic 6.4).
- **Theorem:** if f is continuous on [a, b] and F is any antiderivative of f, then ∫ (a to b) f(x) dx = F(b) − F(a).
- No + C is needed: it cancels.
- The answer is a **signed** quantity. It can be negative or zero.

## Key relationships

| Idea | Statement |
|---|---|
| Antiderivative | F′(x) = f(x) |
| Evaluation | ∫ (a to b) f(x) dx = [F(x)] (a to b) = F(b) − F(a) |
| Net change | ∫ (a to b) F′(x) dx = F(b) − F(a) |
| Final amount | F(b) = F(a) + ∫ (a to b) F′(x) dx |
| Riemann sum link | lim Σ f(xᵢ) Δx = ∫ (a to b) f(x) dx, then evaluate with F |

Basic antiderivatives: xⁿ → xⁿ⁺¹/(n + 1) for n ≠ −1; 1/x → ln x (x > 0); eˣ → eˣ; cos x → sin x; sin x → −cos x; sec²x → tan x.

## The five-step method

1. Check that f is continuous on the whole of [a, b].
2. Rewrite roots and fractions as powers.
3. Find F term by term, and check F′ = f.
4. Write [F(x)] (a to b).
5. Substitute the upper limit, then subtract the bracketed value at the lower limit.

## Assumptions behind the method

- f must be continuous on the **closed** interval [a, b]. A single point where f is undefined inside the interval breaks the theorem.
- F must be an antiderivative on the whole interval, not just at the endpoints.

## Mistakes to avoid

1. **F(a) − F(b)** instead of F(b) − F(a).
2. **No brackets** around F(a), so only its first term is subtracted.
3. **Writing f(b) − f(a)**: substituting into the integrand instead of the antiderivative.
4. **Sign slips** with trig: the antiderivative of sin x is −cos x.
5. **Using the theorem across a discontinuity**, for example ∫ (−1 to 2) (1/x²) dx.
6. **Calling net change "distance".** ∫ v(t) dt is net change in position.

## Quick self-check

1. Evaluate ∫ (1 to 9) √x dx. *(52/3: [(2/3)x^(3/2)] (1 to 9) = 18 − 2/3)*
2. Evaluate ∫ (0 to π) cos x dx. *(0: [sin x] (0 to π) = 0 − 0. The areas above and below the axis cancel.)*
3. F′ = f, f is continuous, F(2) = 7 and F(6) = 1. Find ∫ (2 to 6) f(x) dx. *(1 − 7 = −6)*

Next: [practice questions](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-practice/).
