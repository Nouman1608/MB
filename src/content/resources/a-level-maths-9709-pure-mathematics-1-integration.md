---
title: "Cambridge International AS & A Level Mathematics 9709: Integration (Pure Mathematics 1) -- Study Guide"
seoTitle: "A Level Maths 9709 P1 Integration Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Integration (Pure Mathematics 1)"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 36
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
  - qualification: "a-level"
    topic: "pure-mathematics-1-cambridge-alevel"
    subtopic: "integration-cambridge-alevel-maths-1"
description: "Study guide to Cambridge 9709 Pure Mathematics 1 section 1.8 Integration: reverse differentiation, definite integrals, areas and volumes, fully worked."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-28
featured: false
---

This guide teaches section **1.8 Integration** of the Cambridge International AS & A Level Mathematics 9709 syllabus for exams in 2026 and 2027 (Version 4). It is Pure Mathematics 1 content, examined on **Paper 1** (1 hour 50 minutes, 75 marks, 10 to 12 structured questions). Paper 1 is compulsory for both AS Level and A Level, and Papers 2 and 3 assume this content, so you will use it again there.

Course hub: [Cambridge A Level Mathematics](/boards/cambridge/a-level/mathematics/). Printable list: [9709 checklist](/checklists/cambridge/a-level/mathematics/). Check your gaps first with the free [AS 10-minute diagnostic](/practice/9709/diagnostic/as/), and use the [9709 self-check bank](/practice/9709/) afterwards.

## What this unit covers

| Section 1.8 outcome | What you must be able to do |
|---|---|
| Reverse differentiation | Integrate (ax + b)ⁿ for any rational n except −1, with constant multiples, sums and differences |
| Constant of integration | Find the equation of a curve from its gradient function and a point on it |
| Definite integrals | Evaluate them, including simple improper integrals (an infinite limit, or an integrand that is undefined at one end) |
| Area | Region bounded by a curve and lines parallel to the axes; between a curve and a line; between two curves |
| Volume of revolution | Rotate a region about the x-axis or the y-axis, including a region not bounded by the axis of rotation |

**Calculator.** A scientific calculator is allowed on every 9709 paper, but graphical calculators and calculators that integrate symbolically are not. The syllabus says no marks are given for unsupported answers from a calculator. So every integral must be shown by hand, and when a question asks for an *exact* answer, leave π, fractions and surds in it. Otherwise give non-exact answers to 3 significant figures.

**Formulae list.** MF19 includes ∫ xⁿ dx = xⁿ⁺¹/(n + 1) (n ≠ −1). It does **not** give the (ax + b)ⁿ result or the volume formulae, so learn those.

## 1. Integration as reverse differentiation

If differentiating F(x) gives f(x), then integrating f(x) gives F(x) + c. The constant c appears because any constant differentiates to zero, so you cannot tell what it was.

**The power rule:**

```
∫ xⁿ dx = xⁿ⁺¹/(n + 1) + c        for any rational n except −1
```

Add 1 to the power, then divide by the new power. You can integrate term by term, and constant multiples stay where they are.

Before integrating, write every term as a single power of x. Roots become fractional powers and terms like 4/x³ become 4x⁻³. You cannot integrate a product or a quotient term by term, so expand or divide first.

*Worked example 1.* Find ∫ (6x² − 4/x³ + 3√x) dx.

```
Rewrite:   6x² − 4x⁻³ + 3x^(1/2)
Integrate: 6x³/3 − 4x⁻²/(−2) + 3x^(3/2)/(3/2) + c
Simplify:  2x³ + 2x⁻² + 2x^(3/2) + c
```

*Worked example 2.* Find ∫ (3x − 2)/√x dx.

```
Divide each term by x^(1/2):   3x^(1/2) − 2x^(−1/2)
Integrate:  3x^(3/2)/(3/2) − 2x^(1/2)/(1/2) + c
          = 2x^(3/2) − 4x^(1/2) + c
```

Check any indefinite integral by differentiating your answer. You should get back the integrand.

### Integrating (ax + b)ⁿ

For a linear expression inside a bracket:

```
∫ (ax + b)ⁿ dx = (ax + b)ⁿ⁺¹ / (a(n + 1)) + c        n ≠ −1
```

The extra division by a undoes the factor a that the chain rule would produce if you differentiated the answer.

*Worked example 3.* Find ∫ (4x − 3)⁵ dx.

```
(4x − 3)⁶ / (4 × 6) + c  =  (4x − 3)⁶/24 + c
```

*Worked example 4.* Find ∫ 8/√(2x + 5) dx.

```
Write as 8(2x + 5)^(−1/2).
New power is 1/2, a = 2:
8(2x + 5)^(1/2) / (2 × 1/2) + c  =  8√(2x + 5) + c
```

This rule only works when the bracket is **linear**. It does not apply to (x² + 1)³, which you must expand first. The case n = −1 gives a logarithm, which is Paper 2 and Paper 3 content (see the [Pure Mathematics 2 guide](/resources/a-level-mathematics-pure-mathematics-2/)).

## 2. Finding the constant of integration

A gradient function dy/dx gives a whole family of curves, one for each value of c. A point on the curve picks out one member of the family.

*Worked example 5.* A curve has gradient dy/dx = 6/√(4x + 1) and passes through (2, 10). Find its equation.

```
y = ∫ 6(4x + 1)^(−1/2) dx
  = 6(4x + 1)^(1/2) / (4 × 1/2) + c
  = 3√(4x + 1) + c

At (2, 10):  10 = 3√9 + c = 9 + c,  so c = 1

y = 3√(4x + 1) + 1
```

Questions often hide the point. It may be "the curve crosses the y-axis at 4", which means (0, 4). If you are given d²y/dx², integrate twice and find a constant each time. Always write "+ c" at the integration step, not after substituting.

## 3. Definite integrals

```
∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) − F(a)
```

No constant is needed, because it cancels. Write the square-bracket line, then substitute the upper limit, then subtract the lower. Show both substitutions: the calculator cannot do this for you.

*Worked example 6.* Evaluate ∫₁⁴ (2x − 1/√x) dx.

```
= [x² − 2x^(1/2)]₁⁴
= (16 − 2 × 2) − (1 − 2 × 1)
= 12 − (−1) = 13
```

*Worked example 7.* Evaluate ∫₀⁴ 1/√(2x + 1) dx.

```
∫ (2x + 1)^(−1/2) dx = (2x + 1)^(1/2) / (2 × 1/2) = √(2x + 1)
[√(2x + 1)]₀⁴ = √9 − √1 = 2
```

### Simple improper integrals

A definite integral is "improper" if one limit is infinite, or if the integrand is undefined at one end of the interval. You still integrate normally. Then decide what happens at the awkward end.

*Worked example 8 (infinite limit).* Evaluate ∫₂^∞ 8/x³ dx.

```
∫ 8x⁻³ dx = −4x⁻²
[−4/x²]₂^∞ :  as x → ∞, −4/x² → 0
Value = 0 − (−4/4) = 1
```

*Worked example 9 (undefined at a limit).* Evaluate ∫₀⁸ x^(−2/3) dx.

```
x^(−2/3) is undefined at x = 0, but the antiderivative is not:
∫ x^(−2/3) dx = 3x^(1/3)
[3x^(1/3)]₀⁸ = 3 × 2 − 0 = 6
```

State the limiting step in words ("as x → ∞, −4/x² → 0"). Do not write ∞ into the expression as if it were a number. Not every improper integral has a value: ∫₁^∞ x^(−1/2) dx has none, because 2√x grows without limit.

## 4. Areas

### Between a curve and the x-axis

The area between y = f(x), the x-axis and the lines x = a and x = b is ∫ₐᵇ y dx, **as long as the curve is above the axis**. Where the curve is below the x-axis the integral comes out negative. If the region crosses the axis, split it at the root and add the sizes of the parts.

*Worked example 10.* Find the total area enclosed between y = x² − 3x, the x-axis and the line x = 4.

```
Roots: x(x − 3) = 0 gives x = 0 and x = 3.
Curve is below the axis for 0 < x < 3, above for 3 < x < 4.

∫₀³ (x² − 3x) dx = [x³/3 − 3x²/2]₀³ = 9 − 27/2 = −9/2
∫₃⁴ (x² − 3x) dx = (64/3 − 24) − (−9/2) = 11/6

Total area = 9/2 + 11/6 = 19/3
```

A single integral from 0 to 4 gives −8/3, which is wrong: the two parts partly cancel. Always sketch first.

### Between a curve and the y-axis

For a region bounded by the curve, the y-axis and lines y = c and y = d, integrate with respect to y: area = ∫ x dy. Rearrange the equation to make x the subject first.

*Worked example 11.* Find the area between x = y² + 1, the y-axis, y = 0 and y = 2.

```
∫₀² (y² + 1) dy = [y³/3 + y]₀² = 8/3 + 2 = 14/3
```

### Between a curve and a line, or two curves

Find where they meet. Then integrate (upper graph − lower graph) between those x-values. This one integral works even if part of the region is below the x-axis, because the subtraction handles the signs.

*Worked example 12.* Find the area of the region enclosed by y = 6x − x² and y = 2x.

```
Meet where 6x − x² = 2x, so x² − 4x = 0, giving x = 0 and x = 4.
Upper: 6x − x²; lower: 2x.

∫₀⁴ (4x − x²) dx = [2x² − x³/3]₀⁴ = 32 − 64/3 = 32/3
```

The same method works for two curves. The intersection skills come from [Quadratics](/resources/a-level-mathematics-pure-mathematics-1-quadratics/) and [Coordinate geometry](/resources/a-level-mathematics-pure-mathematics-1-coordinate-geometry/).

## 5. Volumes of revolution

Rotating a region through 360° about an axis produces a solid. Each thin slice is a disc of radius y (about the x-axis) or x (about the y-axis).

```
About the x-axis:   V = π ∫ₐᵇ y² dx
About the y-axis:   V = π ∫꜀ᵈ x² dy
```

Square y (or x) **before** integrating. Leave π outside and bring it back at the end.

*Worked example 13 (x-axis).* The region under y = 3/(x + 1) from x = 0 to x = 2 is rotated through 360° about the x-axis. Find the exact volume.

```
y² = 9(x + 1)⁻²
V = π ∫₀² 9(x + 1)⁻² dx = π [−9(x + 1)⁻¹]₀²
  = π(−3 − (−9)) = 6π
```

*Worked example 14 (y-axis).* The region between y = x² + 1 (x ≥ 0), the y-axis and the lines y = 1 and y = 5 is rotated about the y-axis. Find the exact volume.

```
x² = y − 1
V = π ∫₁⁵ (y − 1) dy = π [y²/2 − y]₁⁵
  = π(15/2 − (−1/2)) = 8π
```

### Region not bounded by the axis

If the region lies between two graphs and neither is the axis of rotation, the solid has a hole. Subtract the inner volume from the outer volume:

```
V = π ∫ (y_outer² − y_inner²) dx
```

*Worked example 15.* The region between y = 5 − x² and y = 1 is rotated about the x-axis. Find the exact volume.

```
Meet where 5 − x² = 1, so x = ±2.
Outer radius 5 − x², inner radius 1.

V = π ∫₋₂² ((5 − x²)² − 1²) dx
  = π ∫₋₂² (24 − 10x² + x⁴) dx
  = π [24x − 10x³/3 + x⁵/5]₋₂²
  = 2π(48 − 80/3 + 32/5) = 832π/15   (174 to 3 s.f.)
```

Using π∫(5 − x² − 1)² dx instead gives 512π/15. That is a common wrong answer: you must square each radius separately.

## Common errors

- Writing ∫ 4/x³ dx as 4 ln x³, or as 2x⁻² instead of −2x⁻² (sign lost). Rewrite as 4x⁻³ first.
- Integrating (3x − 2)/√x or (x + 1)(x − 4) term by term without expanding or dividing.
- Forgetting to divide by a in (ax + b)ⁿ, or multiplying by a instead.
- Leaving out "+ c", then being unable to use the given point.
- Treating an area below the x-axis as negative, or integrating straight across a root.
- Using lower − upper in an area between graphs, and reporting a negative area.
- Using ∫ y dx instead of ∫ x dy for a region against the y-axis.
- Forgetting π, or forgetting to square, in a volume.
- For a region with a hole, squaring the difference instead of taking the difference of the squares.
- Giving a decimal from the calculator when an exact answer was asked for.

## Next steps

- Condensed recall and a quick self-test: [Integration revision notes](/resources/a-level-maths-9709-pure-mathematics-1-integration-revision-notes/).
- Original exam-style questions with mark-by-mark answers: [Integration practice questions](/resources/a-level-maths-9709-pure-mathematics-1-integration-practice/).
- Mixed Paper 1 questions across all topics: [Pure Mathematics 1 mixed practice](/resources/a-level-mathematics-pure-1-mixed-practice/).
- Where integration goes next: [Pure Mathematics 2](/resources/a-level-mathematics-pure-mathematics-2/) (2.5) and [Pure Mathematics 3](/resources/a-level-maths-9709-pure-mathematics-3/) (3.5).

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027 (Version 4, published December 2025), Cambridge Assessment International Education. Section 1.8 Integration, Pure Mathematics 1 (Paper 1).
