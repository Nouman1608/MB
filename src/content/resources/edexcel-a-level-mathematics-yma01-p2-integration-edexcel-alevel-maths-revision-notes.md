---
title: "Edexcel International A Level Mathematics (YMA01): Integration (P2.8) -- Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed notes on definite integrals, areas with curves and lines, regions below the axis and the trapezium rule for Edexcel IAL Maths P2, with a self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

These notes condense section 8 of Unit P2 (Pearson Edexcel International Advanced Level Mathematics, YMA01, Issue 3): "evaluation of definite integrals", "interpretation of the definite integral as the area under a curve" (including regions bounded by a curve and lines, or by two curves) and "approximation of area under a curve using the trapezium rule". For full worked examples, use the [P2 integration study guide](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths/), then try the [P2 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-practice/).

## Core results

- ∫xⁿ dx = xⁿ⁺¹/(n + 1) + c, n ≠ −1 (from Unit P1).
- ∫ₐᵇ f(x) dx = F(b) − F(a): no constant needed.
- Rewrite before integrating: 1/x³ = x⁻³, √x = x^½, (x + 2)/√x = x^½ + 2x^(−½). A term in x⁻¹ (that is, 1/x) cannot be integrated in this unit; it needs ln x from Unit P3.
- Area under a curve above the x-axis = ∫ₐᵇ y dx. This formula must be remembered; it is not in the booklet for this unit.

## Area: decide the case first

| Situation | What to integrate |
|---|---|
| Curve above the x-axis on [a, b] | ∫ₐᵇ y dx |
| Curve below the x-axis on [a, b] | the size of ∫ₐᵇ y dx (it comes out negative) |
| Curve crosses the axis | split at each root; add the sizes |
| Between upper y₁ and lower y₂ | ∫ (y₁ − y₂) dx between the intersection x-values |
| Boundary changes part-way across | split at the change; use a triangle or trapezium for straight-line parts |

## Area routine

1. Sketch, and shade the region.
2. Find all intersections: curve with axis, curve with line, curve with curve.
3. Decide which boundary is on top for each part.
4. Write one integral per part, with limits.
5. Integrate exactly; add the sizes of the parts.

**Mini example.** Area between y = x² − 3x and the x-axis from x = 0 to x = 4. The curve crosses the axis at x = 3. ∫₀³ (x² − 3x) dx = 9 − 27/2 = −9/2, so that piece has area 9/2. ∫₃⁴ (x² − 3x) dx = (64/3 − 24) − (−9/2) = 11/6. Total area = 9/2 + 11/6 = 19/3. A single integral from 0 to 4 would give −8/3, which is not an area.

## Trapezium rule

∫ₐᵇ y dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + ... + yₙ₋₁)], with h = (b − a)/n.

- n strips → n + 1 ordinates (y-values).
- End values once, middle values twice.
- Keep 4 or more decimal places in the table.
- Curve bending upwards (convex) on the interval: **overestimate**.
- Curve bending downwards (concave): **underestimate**.
- More strips (smaller h) → better estimate.
- Percentage error = |estimate − exact| ÷ exact × 100.

**Mini example.** ∫₀² (x² + 1) dx is exactly 14/3 ≈ 4.6667. With 2 strips (h = 1): ½[1 + 5 + 2(2)] = 5, an error of 0.3333 (7.14%). With 4 strips (h = 0.5): 0.25[1 + 5 + 2(1.25 + 2 + 3.25)] = 4.75, an error of 0.0833 (1.79%). Doubling the number of strips cut the error to a quarter here, and both estimates are too large because y = x² + 1 bends upwards.

## Key terms

| Term | Meaning |
|---|---|
| Definite integral | ∫ₐᵇ f(x) dx, a number found from F(b) − F(a) |
| Limits | The values a (lower) and b (upper) |
| Signed area | The value of a definite integral: negative where the curve is below the axis |
| Strip | One of the n equal-width vertical pieces in the trapezium rule |
| Ordinate | A y-value at the edge of a strip |
| Overestimate / underestimate | An approximation larger / smaller than the true value |
| Percentage error | Error as a percentage of the exact value |

## Exam traps

- One integral across a root gives the signed value, not the area.
- y₂ − y₁ instead of y₁ − y₂ gives a negative answer.
- F(a) − F(b) instead of F(b) − F(a).
- 6 ordinates are 5 strips, not 6.
- Calculator in degrees for a trapezium table involving trigonometric functions given in radians.
- Decimals where "exact" is asked.
- Forgetting to state "overestimate" or "underestimate" with a reason based on the curve's shape.

## Self-test

**1.** Evaluate ∫₀² (x³ + 1) dx.

**2.** Evaluate ∫₁⁹ x^(−½) dx.

**3.** Evaluate ∫₋₁¹ x³ dx, and find the total area between y = x³ and the x-axis from x = −1 to x = 1.

**4.** Find the area under y = 3x² from x = 1 to x = 2.

**5.** How many ordinates are needed for the trapezium rule with 6 strips?

**6.** State h for ∫₀³ y dx with 6 strips.

**7.** Find the area between y = x and y = x² for 0 ≤ x ≤ 1.

**8.** Is the trapezium rule estimate for ∫₁⁴ √x dx an overestimate or an underestimate?

**9.** Given k > 1 and ∫₁ᵏ 2x dx = 8, find k.

**10.** A trapezium estimate is 10.4 and the exact value is 10. Find the percentage error.

**11.** Find the area of the region bounded by y = 4 − x² and the x-axis.

### Answers

**1.** [x⁴/4 + x]₀² = 4 + 2 = 6.

**2.** [2x^½]₁⁹ = 6 − 2 = 4.

**3.** The integral is ¼ − ¼ = 0. The area is ¼ + ¼ = ½ (one piece above, one below the axis).

**4.** [x³]₁² = 8 − 1 = 7.

**5.** 7.

**6.** 0.5.

**7.** ∫₀¹ (x − x²) dx = ½ − ⅓ = 1/6.

**8.** Underestimate: y = √x bends downwards, so each chord lies below the curve.

**9.** [x²]₁ᵏ = k² − 1 = 8, so k = 3.

**10.** 0.4 ÷ 10 × 100 = 4%.

**11.** Roots x = ±2: ∫₋₂² (4 − x²) dx = (8 − 8/3) − (−8 + 8/3) = 32/3.

## Related resources

- [P2 integration study guide](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths/)
- [P2 integration practice questions](/resources/edexcel-a-level-mathematics-yma01-p2-integration-edexcel-alevel-maths-practice/)
- [Stationary points, definite integrals, areas and the trapezium rule revision notes](/resources/edexcel-ial-mathematics-stationary-points-definite-integrals-areas-and-the-revision-notes/)
- [Unit P2 revision notes](/resources/edexcel-a-level-mathematics-pure2-revision-notes/)
