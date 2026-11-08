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
reviewedDate: 2026-11-08
publishedDate: 2026-09-27
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by muhammad-ghazali-siddiqui on 2026-09-29; 2026-11-08: reviewed by muhammad-ghazali-siddiqui."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--03-sum-product-of-roots.webp" width="900" height="960" alt="Graph of x^3 - 6x^2 + 11x - 6 with roots 1, 2 and 3 at spacing d = 1 about the centre root m = 2; the curve has half-turn symmetry about (2, 0). Bars 1, 2 and 3 add to 6 = -b/a, and a 1 by 2 by 3 block has 6 cells, matching the product -d/a = 6." loading="lazy">
  <figcaption>Roots in arithmetic sequence centre on m = sum/3, and sum and product read straight from the coefficients.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--05-odd-even-symmetry.webp" width="900" height="1040" alt="Top: f(x) = x^3 sin x is even; points at x = -2 and 2 have equal height (about 7.3), a mirror in the y-axis. Bottom: g(x) = x/(x^2 + 1) is odd; (2, 0.4) and (-2, -0.4) lie on a line through the origin, a half-turn symmetry." loading="lazy">
  <figcaption>Even graphs mirror in the y-axis; odd graphs have half-turn symmetry about the origin.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--06-inverse-restricted-domain.webp" width="900" height="970" alt="Equal-scale graph of f(x) = x^2 - 4x + 1 for x &gt;= 2 (from (2, -3)) and its inverse 2 + sqrt(x + 3) for x &gt;= -3 (from (-3, 2)), reflections in the dashed line y = x, for example (4, 1) and (1, 4). The left part of the parabola is dropped so f is one-to-one." loading="lazy">
  <figcaption>Restrict the domain so f is one-to-one; the inverse is the reflection in y = x with its domain equal to the range of f.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--08-reciprocal-and-square.webp" width="900" height="1120" alt="From f(x) = x^2 - 2x - 3 (dotted): y = 1/f(x) has asymptotes x = -1 and x = 3 and the minimum (1, -4) becomes a local maximum (1, -1/4); y = [f(x)]^2 touches the x-axis at -1 and 3 with maximum (1, 16). Points where f = +/-1 stay on 1/f and sit at height 1 on f squared." loading="lazy">
  <figcaption>1/f flips minima to maxima and turns zeros into asymptotes; f squared is never negative and touches at the zeros.</figcaption>
</figure>


## Graph transformations (2.16)

| From y = f(x) to | Key features |
|---|---|
| y = \|f(x)\| | Parts below the x-axis reflected up; sharp corners at zeros where the graph crossed |
| y = f(\|x\|) | Right half kept and mirrored in the y-axis; always even |
| y = 1/f(x) | Zeros ↔ vertical asymptotes; max (p, q) ↔ min (p, 1/q) for q ≠ 0; y = ±1 fixed; same sign; horizontal asymptote y = 0 where \|f\| → ∞ |
| y = f(ax + b) | Translate b left, then horizontal stretch scale factor 1/a (HL only form) |
| y = [f(x)]² | y ≥ 0; zeros become touching points; stationary points of f keep their x-coordinates |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--01-repeated-factors.webp" width="900" height="650" alt="Three small graphs, each with the factor (x - 1) to the power 1, 2 or 3 times (x + 2). Power 1 crosses the x-axis at x = 1 with non-zero slope, power 2 touches the axis and turns back, and power 3 crosses while flattening, a point of inflection. Odd powers cross and even powers touch." loading="lazy">
  <figcaption>The power of a factor decides whether the graph crosses, touches or flattens at its root.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--02-remainder-theorem-graph.webp" width="900" height="890" alt="Graph of p(x) = 2x^3 + 3x^2 - 11x - 6 = (x - 2)(2x + 1)(x + 3) with zeros at -3, -1/2 and 2. A dashed line at x = -1, the zero of the divisor (x + 1), meets the curve at (-1, 6), so the remainder on dividing by (x + 1) is 6." loading="lazy">
  <figcaption>The remainder on dividing by (x + 1) is the height of the graph at x = -1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--04-rational-asymptotes.webp" width="900" height="1100" alt="Top: y = (2x - 1)/(x^2 - x - 6) has vertical asymptotes x = -2 and x = 3, horizontal asymptote y = 0 and intercepts (1/2, 0) and (0, 1/6). Bottom: y = (x^2 + x - 2)/(x - 2) = x + 3 + 4/(x - 2) has vertical asymptote x = 2, oblique asymptote y = x + 3 and intercepts (-2, 0), (1, 0) and (0, 1)." loading="lazy">
  <figcaption>The two HL rational types, with their vertical, horizontal and oblique asymptotes and intercepts.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--07-self-inverse.webp" width="900" height="970" alt="Equal-scale graph of y = (3x + 5)/(x - 3), symmetric in y = x with asymptotes x = 3 and y = 3. Points (4, 17) and (17, 4) are on the curve and mirror each other in y = x, so f(f(x)) = x and f is its own inverse." loading="lazy">
  <figcaption>A self-inverse function has a graph that is symmetric in the line y = x.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/ib-dp-mathematics-aa-hl-further-functions--09-cubic-inequality.webp" width="900" height="880" alt="Graphs of y = x^3 and y = 2x^2 + 5x - 6 meet at x = -2, 1 and 3. Teal shading marks where the cubic is above the quadratic (-2 &lt;= x &lt;= 1 and x &gt;= 3), gold where it is below. So x^3 &gt;= 2x^2 + 5x - 6 for -2 &lt;= x &lt;= 1 or x &gt;= 3." loading="lazy">
  <figcaption>The solution of g(x) &gt;= f(x) is where the graph of g lies on or above the graph of f.</figcaption>
</figure>


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

## Frequently asked questions

**How do you solve a modulus equation like |f(x)| = g(x)?**
Solve f(x) = g(x) and f(x) = −g(x) separately, then reject any solution where g(x) < 0. For |f(x)| = |g(x)| or inequalities between two moduli, squaring both sides is often quicker.

**What is the difference between y = |f(x)| and y = f(|x|)?**
For y = |f(x)|, parts of the graph below the x-axis are reflected up. For y = f(|x|), the right half is kept and mirrored in the y-axis, so the graph is always even.

**What happens to a graph under y = 1/f(x)?**
Zeros of f become vertical asymptotes, a maximum (p, q) becomes a minimum (p, 1/q) for q ≠ 0, points with y = ±1 stay fixed, and the sign stays the same.

**What are self-inverse functions?**
A function is self-inverse if f(f(x)) = x, so f⁻¹ = f and its graph is symmetric in y = x. Families include c − x, k/x and (ax + b)/(cx − a).

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020), syllabus sections AHL 2.12–2.16.
