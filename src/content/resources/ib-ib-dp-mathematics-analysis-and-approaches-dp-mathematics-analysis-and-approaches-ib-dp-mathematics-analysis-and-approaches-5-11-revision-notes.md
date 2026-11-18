---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.11 Definite integrals and areas between curves -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.11
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-11"
description: "Revision notes for IB DP Maths AA section 5.11: definite integrals, their properties, signed area, areas between curves, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to muhammad-ghazali-siddiqui (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense **section 5.11 of IB DP Mathematics: Analysis and Approaches: definite integrals, areas enclosed by a curve and the x-axis where f(x) can be negative, and areas between curves**. It is SL content, examined at SL and HL. The [section 5.11 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11/) has the full worked examples.

## Core recall

```
∫ₐᵇ g′(x) dx = g(b) − g(a)          (no + C)
∫ₐᵃ f dx = 0
∫ᵇₐ f dx = −∫ₐᵇ f dx
∫ₐᵇ f dx + ∫ᵇᶜ f dx = ∫ₐᶜ f dx
∫ₐᵇ (p f + q g) dx = p∫ₐᵇ f dx + q∫ₐᵇ g dx
∫ₐᵇ k dx = k(b − a)
```

- A definite integral is a number; an indefinite integral is a family of functions.
- A definite integral is a **signed** area: below the x-axis counts as negative.
- **Area to the x-axis**: split at every root of f inside [a, b]; add the absolute values.
- **Area between curves**: ∫ (top − bottom) dx between intersections; recheck which is on top in each interval.
- Exact values: e^(ln a) = a, ln e = 1, ln 1 = 0, sin(π/2) = 1, cos(π/4) = √2/2.

## Method: area between two curves

1. Solve f(x) = g(x) for the intersections.
2. In each interval between consecutive intersections, test one x-value to see which curve is on top.
3. Write the integral(s) of top minus bottom with limits.
4. Evaluate (by hand on Paper 1; with the GDC and stored limits on Paper 2).
5. Add the pieces.

## Three patterns in brief

**Curve crossing the axis.** For y = sin x on 0 ≤ x ≤ 3π/2, split at x = π: ∫₀^π sin x dx = 2 and ∫_π^(3π/2) sin x dx = −1, so the area is 2 + 1 = 3, while the single integral gives only 1.

**Curves crossing three times.** y = x³ and y = 4x meet at x = −2, 0, 2. The cubic is on top on (−2, 0) and the line on (0, 2). Each piece has area 4, so the total is 8; one integral from −2 to 2 gives 0.

**Curves that swap over.** y = sin x and y = cos x meet at x = π/4 in [0, π]. cos x is on top first, then sin x: (√2 − 1) + (1 + √2) = 2√2.

In all three, the error is the same: one integral across a point where the sign of the integrand changes. A quick sketch, or one test value in each interval, prevents it.

**Unknown limits.** Integrate with the letter as a limit, set the result equal to the given value, solve, and keep only the root allowed by the stated condition. For ∫₁ᵏ (2x − 1) dx = 12, k² − k − 12 = 0 gives k = 4 or k = −3; only k = 4 satisfies k > 1.

## Key terms

| Term | Meaning |
|---|---|
| Definite integral | ∫ₐᵇ f(x) dx = F(b) − F(a), a number |
| Limits | the values a (lower) and b (upper) |
| Signed area | the value of the definite integral: positive above the axis, negative below |
| Area | always positive; split at roots and add sizes |
| Intersection | where two curves meet; usually the limits for an area between curves |
| Exact value | answer in surds, π, e or logarithms, without rounding |

## Exam traps

- **Signed value given as area.** ∫₀^(3π/2) sin x dx = 1, but the area is 3.
- **Cancelling regions.** For y = x³ and y = 4x, ∫₋₂² (4x − x³) dx = 0, but the area is 8.
- **Constant not integrated.** ∫₁⁵ (3f(x) − 2) dx with ∫₁⁵ f = 7 is 21 − 8, not 21 − 2.
- **Reversed subtraction.** F(a) − F(b) gives the negative of the answer.
- **Wrong root.** In unknown-limit questions, reject solutions that break a stated condition such as k > 1.
- **Rounded limits on the GDC.** Store intersections.

## Self-test

1. ∫₁⁴ (3√x − 1/x²) dx
2. ∫₀^(π/3) 4 cos 2x dx
3. ∫₀^(ln 3) e^(2x) dx
4. ∫₂⁵ 1/(x − 1) dx
5. Given ∫₁⁴ f(x) dx = 6, find ∫₄¹ f(x) dx.
6. Given ∫₁⁴ f(x) dx = 6, find ∫₁⁴ (2f(x) + x) dx.
7. ∫₀¹ x(x² + 1)³ dx
8. Find k > 1 such that ∫₁ᵏ (6x² − 2) dx = 48.
9. Find the area between y = 6x − x² and y = x² − 2x.
10. For k > 0, the region between y = x² and y = kx has area 36. Find k.
11. f(x) = x² − x − 2. Find ∫₀³ f(x) dx and the area enclosed by y = f(x), the x-axis, x = 0 and x = 3.
12. Find the area of the region between y = 4 − x² and the line y = 3.

## Answers

1. [2x^(3/2) + 1/x]₁⁴ = (16 + 1/4) − (2 + 1) = 53/4
2. [2 sin 2x]₀^(π/3) = 2 sin(2π/3) = √3
3. [(1/2)e^(2x)]₀^(ln 3) = 9/2 − 1/2 = 4
4. [ln(x − 1)]₂⁵ = ln 4 − ln 1 = ln 4
5. −6
6. 2(6) + [x²/2]₁⁴ = 12 + 15/2 = 39/2
7. [(x² + 1)⁴/8]₀¹ = 16/8 − 1/8 = 15/8
8. [2x³ − 2x]₁ᵏ = 2k³ − 2k = 48, so k³ − k − 24 = 0; k = 3 (27 − 3 − 24 = 0).
9. Intersections x = 0 and x = 4; ∫₀⁴ (8x − 2x²) dx = 64 − 128/3 = 64/3.
10. Intersections x = 0 and x = k; ∫₀ᵏ (kx − x²) dx = k³/6 = 36, so k³ = 216, k = 6.
11. Roots x = −1, 2. ∫₀² f dx = −10/3 and ∫₂³ f dx = 11/6, so ∫₀³ f dx = −3/2; area = 10/3 + 11/6 = 31/6.
12. 4 − x² = 3 at x = ±1; ∫₋₁¹ (1 − x²) dx = 4/3.

## Where next

Apply these skills on the [section 5.11 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-11-practice/). Distance in kinematics uses the same splitting idea, summarised in the [section 5.9 revision notes](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-9-revision-notes/).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), section SL 5.11.
