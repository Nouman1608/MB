---
title: "IB DP Mathematics: Analysis and Approaches -- Polynomials, rational functions, odd/even functions and modulus graphs (HL) Revision Notes"
seoTitle: "IB Maths AA HL Polynomials and Rational Functions Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Polynomials, rational functions, odd/even functions and modulus graphs (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 2.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-functions"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-2-16"
description: "Condensed IB DP Maths AA HL revision notes on polynomials, rational functions, odd/even and inverse functions and modulus graphs, with a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

For full explanations and worked examples, start with the [further functions study guide](/resources/ib-dp-mathematics-aa-hl-further-functions/).

These revision notes cover the HL further functions unit of IB Diploma Programme Mathematics: Analysis and Approaches. They are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 2.12–2.16, and all of this content is HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

When you can recall everything here, move on to the [further functions practice questions](/resources/ib-dp-mathematics-aa-hl-further-functions-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show where this unit sits. The SL basics it builds on are in the [functions revision notes](/resources/ib-dp-mathematics-aa-functions-revision-notes/).

## Definitions

- **Polynomial of degree n:** aₙxⁿ + … + a₁x + a₀, aₙ ≠ 0. At most n real zeros and n − 1 turning points.
- **Zero / root / factor:** r is a zero of p ⇔ r is a root of p(x) = 0 ⇔ (x − r) is a factor of p(x).
- **Repeated factor:** (x − r)² means the graph touches the x-axis at r; (x − r)³ means it crosses with a point of inflection.
- **Even function:** f(−x) = f(x); symmetric in the y-axis.
- **Odd function:** f(−x) = −f(x); rotational symmetry of order 2 about the origin.
- **Periodic cases:** sin x, tan x and sin 2x are odd; cos x and cos 3x are even; sin x + cos x is neither.
- **Inverse function f⁻¹:** exists only if f is one-to-one; domain of f⁻¹ = range of f; graph is the reflection in y = x.
- **Self-inverse:** f(f(x)) = x, so f⁻¹ = f; graph symmetric in y = x.
- **Oblique asymptote:** a sloping straight line y = mx + k that the curve approaches as x → ±∞.

## Formulas

| Result | Statement |
|---|---|
| Remainder theorem | p(x) ÷ (x − r) leaves remainder p(r); p(x) ÷ (ax − b) leaves p(b/a) |
| Factor theorem | (x − r) is a factor ⇔ p(r) = 0 |
| Sum of roots | −aₙ₋₁/aₙ |
| Product of roots | (−1)ⁿa₀/aₙ |
| Cubic ax³ + bx² + cx + d = 0 | sum −b/a, product −d/a |
| Quartic a₄x⁴ + … + a₀ = 0 | sum −a₃/a₄, product a₀/a₄ |
| Self-inverse families | c − x, k/x, (ax + b)/(cx − a) |
| y = f(ax + b) | point (p, q) → ((p − b)/a, q) |

## Method in steps

**Factorising a cubic (calculator-free)**
1. Try small factors of a₀/aₙ in p(x) until p(r) = 0.
2. Divide by (x − r) (long division or comparing coefficients).
3. Factorise the quadratic quotient, or show its discriminant is negative.

**Sketching a rational function**
1. Factorise the denominator: vertical asymptotes x = … .
2. Compare degrees. Numerator lower: y = 0. Numerator one higher: divide to get y = mx + k.
3. Intercepts: x = 0 for the y-intercept; numerator = 0 for x-intercepts.
4. Check signs between the critical values to place each branch.

**Finding f⁻¹ with a restricted domain**
1. Restrict to one side of the turning point (complete the square to find it).
2. Write y = f(x), swap, rearrange; choose the square-root sign that matches the restricted domain.
3. State the domain of f⁻¹ as the range of f.

**Solving g(x) ≥ f(x)**
1. Rearrange to h(x) = g(x) − f(x) ≥ 0. Never divide by an expression of unknown sign.
2. Factorise h (by hand for polynomials up to degree 3) or find intersections on the GDC.
3. Sketch or sign table; write intervals, with ≤/≥ at zeros and strict signs at asymptotes.

**Modulus equations and inequalities**
1. \|f(x)\| = g(x): solve f = g and f = −g; reject solutions with g(x) < 0.
2. \|f(x)\| = \|g(x)\| or \|f\| < \|g\|: square both sides, then factorise.
3. \|f(x)\| < k (k > 0): −k < f(x) < k. \|f(x)\| > k: f(x) > k or f(x) < −k.

## Graph transformations (2.16)

| From y = f(x) to | Key features |
|---|---|
| y = \|f(x)\| | Parts below the x-axis reflected up; sharp corners at zeros where the graph crossed |
| y = f(\|x\|) | Right half kept and mirrored in the y-axis; always even |
| y = 1/f(x) | Zeros ↔ vertical asymptotes; max (p, q) ↔ min (p, 1/q) for q ≠ 0; y = ±1 fixed; same sign; horizontal asymptote y = 0 where \|f\| → ∞ |
| y = f(ax + b) | Translate b left, then horizontal stretch scale factor 1/a (HL only form) |
| y = [f(x)]² | y ≥ 0; zeros become touching points; stationary points of f keep their x-coordinates |

## Small worked reminders

- Remainder of 2x³ − x + 4 divided by (2x − 1): p(1/2) = 1/4 − 1/2 + 4 = 15/4.
- Roots of x³ − 6x² + 11x − 6 = 0: sum 6, product 6 (roots 1, 2, 3).
- y = (x² + 2x)/(x − 1) = x + 3 + 3/(x − 1): vertical asymptote x = 1, oblique asymptote y = x + 3.
- f(x) = x² − 4x + 1, x ≥ 2 has f⁻¹(x) = 2 + √(x + 3), x ≥ −3.
- \|x − 2\| < \|2x + 1\| ⇔ (3x − 1)(x + 3) > 0 ⇔ x < −3 or x > 1/3.
- f(x) = (3x + 5)/(x − 3) is self-inverse: it has the form (ax + b)/(cx − a) with a = 3, and f(f(x)) simplifies to 14x/14 = x.
- x³ ≥ 2x² + 5x − 6 ⇔ (x − 1)(x + 2)(x − 3) ≥ 0 ⇔ −2 ≤ x ≤ 1 or x ≥ 3.
- eˣ ≥ x + 2 (GDC): intersections at x = −1.84 and x = 1.15, so x ≤ −1.84 or x ≥ 1.15.
- \|2x − 3\| = x + 1: x = 4 or x = 2/3, and both give x + 1 > 0, so both are kept.

## Must-know distinctions

- **Zero vs root vs factor:** the zero 3 of p, the root x = 3 of p(x) = 0, the factor (x − 3).
- **Horizontal vs oblique asymptote:** (linear)/(quadratic) gives y = 0; (quadratic)/(linear) gives y = mx + k. Never both.
- **Odd vs even vs neither:** proving odd or even needs algebra for general x; proving neither needs one counterexample.
- **f⁻¹(x) vs 1/f(x):** the inverse function is not the reciprocal.
- **\|f(x)\| vs f(\|x\|):** the first reflects the lower part upwards; the second mirrors the right half across the y-axis.
- **f(ax + b) vs af(x) + b:** inside changes act on x (and in the opposite way); outside changes act on y.
- **Squaring is safe** for \|f\| < \|g\| (both sides non-negative) but **not** for \|f(x)\| < g(x) when g can be negative.

## Quick self-test

1. Find the remainder when x³ − 2x + 5 is divided by (x + 2).
2. Find the sum and product of the roots of 2x³ + 4x² − x + 6 = 0.
3. Is f(x) = x² sin x odd, even or neither?
4. Is g(x) = cos x + x² odd, even or neither?
5. State the asymptotes of y = (x + 5)/(x² − 9).
6. Find the oblique asymptote of y = (x² + 2x)/(x − 1).
7. Find f⁻¹(x) for f(x) = (x − 1)², x ≥ 1, and state its domain.
8. Solve \|x − 3\| = 5.
9. Solve x² ≤ 4x.
10. Which of f(x) = 5 − x and g(x) = (x + 2)/(x + 1) is self-inverse?
11. The point (3, −2) lies on y = f(x). Find the corresponding point on y = f(2x − 1).
12. Solve \|2x + 1\| > 3.

### Answers

1. p(−2) = −8 + 4 + 5 = **1**.
2. Sum −4/2 = **−2**; product (−1)³ × 6/2 = **−3**.
3. f(−x) = (−x)² sin(−x) = −x² sin x = −f(x): **odd**.
4. g(−x) = cos(−x) + (−x)² = g(x): **even**.
5. **x = 3, x = −3 and y = 0**.
6. x² + 2x = (x − 1)(x + 3) + 3, so **y = x + 3**.
7. **f⁻¹(x) = 1 + √x, x ≥ 0**.
8. x − 3 = ±5: **x = 8 or x = −2**.
9. x(x − 4) ≤ 0: **0 ≤ x ≤ 4**.
10. **f only.** f(f(x)) = 5 − (5 − x) = x. For g, g(0) = 2 and g(2) = 4/3 ≠ 0, so g is not self-inverse.
11. 2x − 1 = 3 gives x = 2: **(2, −2)**.
12. 2x + 1 > 3 or 2x + 1 < −3: **x > 1 or x < −2**.

## Where marks are usually lost

- Using p(1) instead of p(−1) for the divisor (x + 1), or p(2) instead of p(1/2) for (2x − 1).
- Dropping the (−1)ⁿ sign in the product of roots, especially for cubics.
- Giving an asymptote as a number, not an equation, or missing the oblique asymptote.
- Sketches without labelled intercepts or asymptotes, or branches on the wrong side of an asymptote.
- "Showing" a function is even by substituting x = 2 and x = −2 only.
- Writing f⁻¹ without its domain, or with ± left in the answer.
- Dividing both sides of an inequality by an expression such as (x − 3) without knowing its sign.
- Using < where the answer needs ≤ (or the reverse), and including an asymptote value in an interval.
- Keeping a modulus solution that makes the right-hand side negative.
- For y = f(ax + b), translating by b after the stretch instead of by b/a.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), syllabus sections AHL 2.12–2.16.
