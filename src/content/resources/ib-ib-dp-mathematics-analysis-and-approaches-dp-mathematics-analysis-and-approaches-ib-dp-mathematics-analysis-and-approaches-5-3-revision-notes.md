---
title: "IB DP Mathematics: Analysis and Approaches (AA): 5.3 Derivative of f(x) = axⁿ -- Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Topic 5 – Calculus"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.03
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-3"
description: "Revision notes on IB DP Maths AA section 5.3: the power rule for integer powers, rewriting fractions and products, exam traps and a 12-question self-test."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

Quick-recall notes for **section 5.3, the derivative of f(x) = axⁿ for integer n**, in IB DP
Mathematics: Analysis and Approaches (first assessment 2021), examined at SL and HL. The
[5.3 study guide](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-3/)
explains each technique with worked examples; the
[5.3 practice questions](/resources/ib-ib-dp-mathematics-analysis-and-approaches-dp-mathematics-analysis-and-approaches-ib-dp-mathematics-analysis-and-approaches-5-3-practice/)
test them. The later rules (5.6) are in the
[differentiation revision notes](/resources/ib-dp-mathematics-aa-sl-differentiation-revision-notes/).

## The rule

```
d/dx (axⁿ) = anxⁿ⁻¹      n ∈ ℤ (…, −2, −1, 0, 1, 2, …)
d/dx (c) = 0              constants vanish
d/dx (f + g) = f′ + g′     term by term
d/dx (kf) = kf′            constant multiples stay
```

## Condensed recall

- **Scope.** 5.3 covers integer powers only. Roots and fractional powers are 5.6.
- **Rewrite before differentiating.** Every term must look like axⁿ. Move powers of x from the
  denominator with a negative index: k/xⁿ = kx⁻ⁿ.
- **Constants in denominators stay put.** 3/(4x²) = (3/4)x⁻².
- **Expand products.** (x + 2)(x − 5) = x² − 3x − 10 before differentiating.
- **Divide out quotients by a single power of x.** (x⁴ + 2x)/x² = x² + 2x⁻¹.
- **Negative powers decrease.** x⁻² → −2x⁻³: the index goes from −2 to −3.
- **Gradient at a point.** Substitute the x-value into f′(x), not f(x).
- **Point with a given gradient.** Solve f′(x) = m, then substitute each solution into f to get y.
- **Unknown coefficients.** Each gradient condition gives one equation; solve simultaneously.
- **Interpretation.** dy/dx is the rate of change of y with respect to x, with units of y per unit
  of x.

## Key terms

| Term | Meaning |
|---|---|
| Power rule | d/dx(axⁿ) = anxⁿ⁻¹ |
| Index (exponent) | The power n in xⁿ |
| Negative index | x⁻ⁿ = 1/xⁿ |
| Polynomial | A sum of terms axⁿ with non-negative integer n |
| Gradient function | f′(x), giving the gradient at every x |
| Term-by-term differentiation | Differentiating each term of a sum separately |

## Quick conversions

| Expression | Index form | Derivative |
|---|---|---|
| 4/x | 4x⁻¹ | −4x⁻² |
| −2/x⁵ | −2x⁻⁵ | 10x⁻⁶ |
| 1/(3x) | (1/3)x⁻¹ | −(1/3)x⁻² |
| x(x² − 1) | x³ − x | 3x² − 1 |
| (x² + 5)/x | x + 5x⁻¹ | 1 − 5x⁻² |
| (1 − x)² | 1 − 2x + x² | −2 + 2x |

## Mini-example

y = (x⁴ − 3x)/x². Find the gradient at x = −1.

```
y = x² − 3x⁻¹
dy/dx = 2x + 3x⁻²
at x = −1: −2 + 3 = 1
```

## Mini-example: two unknown coefficients

y = px³ + q/x has gradient 1 at x = 1 and gradient 91/4 at x = 2. Find p and q.

```
dy/dx = 3px² − qx⁻²
x = 1:  3p − q = 1
x = 2:  12p − q/4 = 91/4,  so 48p − q = 91
Subtract:  45p = 90,  so p = 2 and q = 5
Check at x = 2:  24 − 5/4 = 91/4
```

One equation per gradient condition, then eliminate. Clearing fractions first (multiplying the
second equation by 4) avoids arithmetic slips.

## A routine for "find the point where the gradient is m"

1. Rewrite y in index form and differentiate.
2. Set dy/dx = m and rearrange to zero.
3. Solve, keeping every root (factorise rather than divide by x).
4. Substitute each x into the original y, not into dy/dx.
5. State the points as coordinates.

If dy/dx = m has no real solutions (for example, 3x² + 2 = 1), say so: no point on the curve has that
gradient. That is a complete answer, not a dead end.

## Exam traps

- **Trap: dividing the derivative.** The derivative of 5/x³ is not 5/(3x²). Rewrite as 5x⁻³ first.
- **Trap: the stray coefficient.** 1/(2x) is (1/2)x⁻¹, not 2x⁻¹.
- **Trap: differentiating factors separately.** Expand (3x + 1)(x − 2) first.
- **Trap: sign errors with negative indices.** −2x⁻⁵ gives (−2)(−5)x⁻⁶ = +10x⁻⁶.
- **Trap: gradient versus y-coordinate.** "Find the point where the gradient is 4" needs both
  coordinates.
- **Trap: forgetting a solution.** f′(x) = m is often a quadratic with two solutions; both give
  points.

## Self-test

1. Differentiate 7x⁵.
2. Differentiate 9.
3. Differentiate 3/x².
4. Differentiate 1/(4x⁴).
5. Differentiate (2x + 3)(x − 1).
6. Differentiate (x³ + 6)/x.
7. f(x) = x³ − 2x. Find f′(2).
8. Find the x-coordinates of the points on y = x³ − 6x where the gradient is 6.
9. y = ax³ + 2x has gradient 14 at x = 2. Find a.
10. The gradient of y = x² + k/x is zero at x = 2. Find k.
11. A = 50t − 2t² is the area (m²) of a spill after t hours. Find dA/dt at t = 5 and interpret it.
12. Explain why the derivative of any constant is 0.

**Answers**

1. 35x⁴.
2. 0.
3. −6x⁻³ = −6/x³.
4. (1/4)x⁻⁴ → −x⁻⁵ = −1/x⁵.
5. 2x² + x − 3 → 4x + 1.
6. x² + 6x⁻¹ → 2x − 6x⁻² = 2x − 6/x².
7. f′(x) = 3x² − 2, so f′(2) = 10.
8. 3x² − 6 = 6, x² = 4, x = ±2.
9. dy/dx = 3ax² + 2; 12a + 2 = 14, so a = 1.
10. dy/dx = 2x − k/x²; 4 − k/4 = 0, so k = 16.
11. dA/dt = 50 − 4t = 30: at 5 hours the area is increasing at 30 m² per hour.
12. A constant c is cx⁰, giving 0 × cx⁻¹ = 0; geometrically y = c is horizontal, with gradient 0.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches
guide*, first assessment 2021. Section SL 5.3: derivative of f(x) = axⁿ is f′(x) = anxⁿ⁻¹, n ∈ ℤ;
derivatives of sums of such terms where all exponents are integers.
