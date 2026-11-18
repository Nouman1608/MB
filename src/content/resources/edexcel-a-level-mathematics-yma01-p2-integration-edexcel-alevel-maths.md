---
title: "Edexcel International A Level Mathematics (YMA01): Integration (P2.8)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit P2: Pure Mathematics 2"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 2.8
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-p2-pure-mathematics-2-edexcel-alevel-maths"
    subtopic: "p2-integration-edexcel-alevel-maths"
description: "Definite integrals, areas under curves and between curves and lines, and the trapezium rule with error estimates, for Edexcel IAL Maths Unit P2."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section 8 of Unit P2 in the Pearson Edexcel International Advanced Level Mathematics specification (YMA01, Issue 3). There are three content statements:

- **8.1** "Evaluation of definite integrals"
- **8.2** "Interpretation of the definite integral as the area under a curve", including the area of "a region bounded by a curve and given straight lines" and "a region bounded by two curves"; ∫x dy "will not be required"
- **8.3** "Approximation of area under a curve using the trapezium rule", where "use of increasing number of trapezia to improve accuracy and an estimate of the error may be required"

The integration itself is the Unit P1 rule for powers of x, ∫xⁿ dx = xⁿ⁺¹/(n + 1) + c for n ≠ −1. Unit P2 adds limits, areas and a numerical method.

The [Unit P2 study guide](/resources/a-level-edexcel-mathematics-pure-mathematics-2/) summarises the unit, and the [guide to stationary points, definite integrals, areas and the trapezium rule](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the/) gives a first set of examples. This page goes further on regions made of more than one piece, regions crossing the x-axis, and how to judge and reduce the error in a trapezium rule estimate. Afterwards, use the [P2 integration revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-revision-notes/) and the [P2 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-practice/).

## Evaluating definite integrals

∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a), where F is any integral of f. The constant of integration cancels, so it is left out.

### Worked example 1: negative and fractional powers

**(a) Evaluate ∫₁² (3x² − 4/x²) dx.**

Rewrite: 3x² − 4x⁻². Integrate: [x³ + 4x⁻¹]₁² = [x³ + 4/x]₁².

= (8 + 2) − (1 + 4) = **5**.

**(b) Evaluate ∫₁⁴ (√x − 2/√x) dx.**

Rewrite: x^½ − 2x^(−½). Integrate: [(2/3)x^(3/2) − 4x^½]₁⁴.

At x = 4: (2/3)(8) − 4(2) = 16/3 − 8 = −8/3. At x = 1: 2/3 − 4 = −10/3.

Result: −8/3 − (−10/3) = **2/3**.

Writing both bracketed values before subtracting avoids the most common sign slip.

## Areas and the sign of the integral

For y ≥ 0 on a ≤ x ≤ b, the area between the curve and the x-axis is ∫ₐᵇ y dx. If the curve is below the axis, the integral is **negative**, and its size is the area.

**Example.** y = x² − 4x crosses the axis at x = 0 and x = 4. ∫₀⁴ (x² − 4x) dx = 64/3 − 32 = −32/3, and ∫₄⁵ (x² − 4x) dx = 7/3. The total area between x = 0 and x = 5 is 32/3 + 7/3 = **13**, whereas ∫₀⁵ (x² − 4x) dx = −25/3 is a signed value, not an area.

So for any area question: **find where the curve crosses the axis first**, and integrate each piece separately.

## Area between a curve and a line, or two curves

If y₁ is above y₂ throughout a ≤ x ≤ b, the area between them is

∫ₐᵇ (y₁ − y₂) dx

and this works whether the region is above or below the x-axis, because subtracting removes the sign problem. The limits are usually the x-coordinates of the intersection points.

### Worked example 2: a curve and a line

**Find the area of the finite region enclosed by the curve y = x² − 2x + 3 and the line y = x + 3.**

Intersections: x² − 2x + 3 = x + 3, so x² − 3x = 0 and x = 0 or 3.

Between 0 and 3 the line is above the curve (at x = 1: line 4, curve 2).

Area = ∫₀³ [(x + 3) − (x² − 2x + 3)] dx = ∫₀³ (3x − x²) dx = [3x²/2 − x³/3]₀³ = 27/2 − 9 = **9/2**.

## Regions made of several pieces

Some regions are bounded by a curve, a straight line and an axis, with the upper boundary changing part-way across. Split at the x-coordinate where the boundary changes and add the parts. A triangle or trapezium part can be found by geometry instead of integration.

### Worked example 3: curve, line and x-axis

**The region R is bounded by the curve y = x², the line y = 8 − 2x and the x-axis. Find the area of R.**

The curve meets the line where x² = 8 − 2x, so x² + 2x − 8 = 0 and (x + 4)(x − 2) = 0. The point needed is (2, 4). The line meets the x-axis at x = 4.

- Under the curve from 0 to 2: ∫₀² x² dx = 8/3
- Under the line from 2 to 4: a triangle with base 2 and height 4, area 4

Area of R = 8/3 + 4 = **20/3**.

A sketch, even a rough one, is what reveals that the region must be split at x = 2.

## The trapezium rule

To estimate ∫ₐᵇ y dx with n strips of equal width h = (b − a)/n:

∫ₐᵇ y dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + y₂ + ... + yₙ₋₁)]

Know the structure of the formula (end values once, middle values twice); the skills that earn most of the marks are building the table of values accurately and judging the result.

### Worked example 4: estimate, error and improvement

**(a) Use the trapezium rule with 4 strips to estimate ∫₁³ 6/x² dx.**

h = (3 − 1)/4 = 0.5.

| x | 1 | 1.5 | 2 | 2.5 | 3 |
|---|---|---|---|---|---|
| y = 6/x² | 6 | 2.6667 | 1.5 | 0.96 | 0.6667 |

Estimate = 0.25[6 + 0.6667 + 2(2.6667 + 1.5 + 0.96)] = 0.25[6.6667 + 10.2533] = **4.23** (3 s.f.).

**(b) Find the exact value and the percentage error.**

∫₁³ 6x⁻² dx = [−6/x]₁³ = −2 − (−6) = 4.

Error = 4.23 − 4 = 0.23, so the percentage error is 0.23/4 × 100 = **5.75%**.

**(c) Explain why the estimate is too large, and how to improve it.**

The curve y = 6/x² bends upwards (it is convex) between x = 1 and x = 3, so each straight top of a trapezium lies above the curve and the estimate is an overestimate. Using more strips makes each chord closer to the curve: with 8 strips the estimate is 4.06, an error of about 0.06.

The same reasoning gives an **underestimate** for a curve that bends downwards (concave), such as y = √x.

## Common mistakes

- **Integrating across a root** when an area is wanted.
- **Subtracting the curves the wrong way round**, which gives a negative "area": put the upper boundary first.
- **Including the constant of integration** in a definite integral and then not cancelling it.
- **Miscounting ordinates:** n strips need n + 1 values of y.
- **Using the number of ordinates for n** in h = (b − a)/n.
- **Rounding the table too early:** keep at least 4 decimal places in the table, then round the final estimate.
- **Not rewriting** 4/x² or 1/√x as powers before integrating.

## Exam technique

- **"Use calculus to find the exact area"** means integrate and give fractions or surds, not decimals from a calculator.
- **"Find the area of R"** where R is shaded: identify every boundary and every intersection before writing an integral.
- **"Use the trapezium rule with n strips"**: show the table of values and the substituted formula; the answer alone may not earn full credit.
- **"State, with a reason, whether your estimate is an overestimate or an underestimate"**: refer to the shape of the curve (bending up or down), not just the answer.
- **"Explain how the estimate could be improved"**: increase the number of strips (reduce h).
- **"Hence find the percentage error"**: (estimate − exact) ÷ exact × 100, using the exact value from the integration part.

## Related resources

- [P2 integration revision notes](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-revision-notes/)
- [P2 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-practice/)
- [Stationary points, definite integrals, areas and the trapezium rule](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the/)
- [Differentiating and integrating powers of x (Unit P1)](/resources/edexcel-ial-mathematics-differentiating-and-integrating-powers-of-x-gradients/)
- [P2 differentiation study guide](/resources/edexcel-a-level-mathematics-yma01-p2-differentiation-edexcel-alevel-maths/)
