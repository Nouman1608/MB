---
title: "OCR A Level Mathematics A: Techniques of integration, parts and partial fractions (H240)"
seoTitle: "OCR A Level Maths Integration Techniques Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Techniques of integration: reverse chain rule, parts, substitution, partial fractions and the trapezium rule"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 120
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "integration-ocr-alevel-maths"
description: "Study guide to integration as a limit of a sum, the trapezium rule, substitution, by parts and partial fractions for OCR A Level Mathematics A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers the integration techniques in OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026). It follows content statements 1.08g to 1.08j, plus the numerical integration statement 1.09f that 1.08g points to. All of these are Stage 2 content, so they are **A Level only**. The fundamental theorem, standard integrals and areas are taught elsewhere; here you meet the methods for harder integrands. For the full course see the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/) and the [printable checklist](/checklists/ocr/a-level/mathematics/). Use the [revision notes](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-revision-notes/) to memorise the methods and the [practice questions](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-practice/) to test them.

## What this unit covers

| Reference | You must be able to | Stage |
|---|---|---|
| 1.08g | Use integration as the limit of a sum of rectangle areas | Stage 2 (A Level only) |
| 1.09f | Use the trapezium rule and rectangles to estimate areas and bounds | Stage 2 (A Level only) |
| 1.08h | Integrate by substitution; recognise f'(x)[f(x)]ⁿ and kf'(x)/f(x) | Stage 2 (A Level only) |
| 1.08i | Integrate by parts, including repeated use and ln x | Stage 2 (A Level only) |
| 1.08j | Integrate using partial fractions with linear terms in the denominator | Stage 2 (A Level only) |

## 1.08g Integration as the limit of a sum

Cut the region under the curve y = f(x), from x = a to x = b, into narrow rectangles of width δx. Each has area f(x)δx. The area is the sum of these, and as δx → 0 the sum becomes the integral:

```
Area = lim (δx→0) Σ f(x)δx = ∫ from a to b of f(x) dx
```

**Worked example.** Find the area under y = 2x + 1 from x = 0 to x = 3 as the limit of a sum.

Use n strips of width 3/n, with heights taken at the right-hand edge, x = 3r/n for r = 1, 2, …, n.

```
Sum = Σ (3/n)(2 × 3r/n + 1)
    = (3/n)[(6/n)(n(n+1)/2) + n]     using Σr = n(n+1)/2
    = (3/n)[3(n+1) + n]
    = (3/n)(4n + 3) = 12 + 9/n
```

As n → ∞, 9/n → 0, so the area is 12. Check: ∫₀³ (2x + 1) dx = [x² + x]₀³ = 12.

## 1.09f Trapezium rule and rectangles

With n strips of equal width h = (b − a)/n and ordinates y₀, y₁, …, yₙ:

```
∫ from a to b of y dx ≈ (h/2)[y₀ + yₙ + 2(y₁ + y₂ + … + yₙ₋₁)]
```

**Over or under?** If the curve is concave (bending downwards) on the interval, each trapezium sits inside the curve and the rule **underestimates**. If it is convex (bending upwards), the trapezia stick out above the curve and the rule **overestimates**. Say which, and why.

**Bounds from rectangles.** For a decreasing function, rectangles with heights taken at the left edge of each strip lie above the curve (upper bound) and those at the right edge lie below it (lower bound). For an increasing function the roles swap.

**Worked example.** Estimate ∫₀² √(4 − x²) dx using the trapezium rule with 4 strips.

h = 0.5. The ordinates are:

| x | 0 | 0.5 | 1 | 1.5 | 2 |
|---|---|---|---|---|---|
| y | 2 | 1.9365 | 1.7321 | 1.3229 | 0 |

Area ≈ (0.5/2)[2 + 0 + 2(1.9365 + 1.7321 + 1.3229)] = 0.25 × 11.983 = **2.996** (3 d.p.).

The curve is a quarter of a circle of radius 2, so the true area is π ≈ 3.142. The curve is concave, so the estimate is an underestimate, as expected.

**Worked example (bounds).** Use 4 rectangles to bound ∫₁³ 1/x dx.

The strips have width 0.5, with ordinates 1, 2/3, 1/2, 2/5, 1/3. The function is decreasing.

```
Upper: 0.5(1 + 2/3 + 1/2 + 2/5) = 77/60 ≈ 1.283
Lower: 0.5(2/3 + 1/2 + 2/5 + 1/3) = 19/20 = 0.95
```

So 0.95 < ∫₁³ 1/x dx < 1.283. (The exact value, ln 3 ≈ 1.099, lies between.)

## 1.08h Reverse chain rule and substitution

Both methods undo the chain rule. Differentiating [f(x)]ⁿ⁺¹ gives (n + 1)f'(x)[f(x)]ⁿ, so:

```
∫ f'(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹ / (n + 1) + c        (n ≠ −1)
∫ k f'(x) / f(x) dx = k ln|f(x)| + c
```

**Recognition (by inspection).** Spot that the numerator is a multiple of the derivative of the bracket or denominator, adjust the constant, then integrate. Always differentiate your answer to check.

**Worked example.** Find ∫ x²(5 − 2x³)⁴ dx.

Let f(x) = 5 − 2x³, so f'(x) = −6x². Then x² = −(1/6)f'(x).

```
∫ x²(5 − 2x³)⁴ dx = −(1/6) × (5 − 2x³)⁵ / 5 + c = −(5 − 2x³)⁵ / 30 + c
```

**Worked example.** Find ∫ (3x + 1)/(3x² + 2x − 5) dx.

The derivative of the denominator is 6x + 2 = 2(3x + 1), so the numerator is ½ of it. The result is **½ ln|3x² + 2x − 5| + c**.

Two more results you can derive this way: ∫ tan x dx = ∫ sin x/cos x dx = −ln|cos x| + c, and ∫ sin x cos⁴x dx = −cos⁵x/5 + c.

**Substitution.** Choose u = g(x), find du/dx, replace every x and dx, integrate in u, then substitute back. For a definite integral, change the limits to u-values instead and do not substitute back. A suitable substitution is often given. When it is not, try the inner bracket, a square root, or (for 9 − x² or 4 − x²) x = 3 sin θ or x = 2 sin θ.

**Worked example (linear).** Find ∫₀⁷ x/√(x + 2) dx using u = x + 2.

Then x = u − 2 and dx = du. When x = 0, u = 2; when x = 7, u = 9.

```
∫₂⁹ (u − 2)u^(−1/2) du = [ (2/3)u^(3/2) − 4u^(1/2) ]₂⁹
 = (18 − 12) − ((4√2)/3 − 4√2) = 6 + (8√2)/3 ≈ 9.77
```

**Worked example (square root).** Find ∫₁⁹ 1/(2 + √x) dx using u = √x.

Then x = u², dx = 2u du, and u runs from 1 to 3.

```
∫₁³ 2u/(2 + u) du = ∫₁³ [2 − 4/(u + 2)] du = [2u − 4 ln(u + 2)]₁³
 = (6 − 4 ln 5) − (2 − 4 ln 3) = 4 − 4 ln(5/3)
```

**Worked example (trigonometric).** Evaluate ∫₀² √(4 − x²) dx with x = 2 sin θ.

Then dx = 2 cos θ dθ and √(4 − 4 sin²θ) = 2 cos θ (cos θ ≥ 0 here). The limits become θ = 0 and θ = π/2.

```
∫₀^(π/2) 4cos²θ dθ = ∫₀^(π/2) (2 + 2 cos 2θ) dθ = [2θ + sin 2θ]₀^(π/2) = π
```

This matches the quarter circle in the trapezium example.

## 1.08i Integration by parts

Reversing the product rule gives:

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

Choose u to be the part that gets simpler when differentiated (a power of x, or ln x), and dv/dx the part you can integrate (eˣ, sin, cos, a power).

**Worked example.** Find ∫ x e^(3x) dx.

Let u = x and dv/dx = e^(3x), so du/dx = 1 and v = ⅓e^(3x).

```
∫ x e^(3x) dx = (x/3)e^(3x) − ∫ ⅓e^(3x) dx = (x/3)e^(3x) − (1/9)e^(3x) + c
```

**Repeated use.** For a power x² you need two applications. Find ∫ x² cos 2x dx.

```
First:  u = x², dv/dx = cos 2x → x² (½ sin 2x) − ∫ x sin 2x dx
Second: u = x,  dv/dx = sin 2x → ∫ x sin 2x dx = −(x/2)cos 2x + ¼ sin 2x
Result: ½x² sin 2x + ½x cos 2x − ¼ sin 2x + c
```

**Logarithms.** To integrate ln x, write it as 1 × ln x with u = ln x and dv/dx = 1: ∫ ln x dx = x ln x − x + c. For ln x multiplied by a power, keep u = ln x. For (ln x)², apply the method twice, to get x(ln x)² − 2x ln x + 2x + c.

**Worked example.** Evaluate ∫₁ᵉ x³ ln x dx.

Keep ln x as u, because it becomes 1/x. Then dv/dx = x³, so v = x⁴/4.

```
[ (x⁴/4) ln x ]₁ᵉ − ∫₁ᵉ x³/4 dx = e⁴/4 − [x⁴/16]₁ᵉ = e⁴/4 − (e⁴ − 1)/16 = (3e⁴ + 1)/16
```

Reduction formulae are not part of the specification.

## 1.08j Partial fractions in integration

The specification limits denominators to two or three linear factors, with at most one repeated: (ax + b)(cx + d)² or (ax + b)(cx + d)(ex + f). Take the numerator to be constant or linear. Split the fraction, then use ∫ 1/(px + q) dx = (1/p) ln|px + q| and ∫ 1/(px + q)² dx = −1/(p(px + q)).

**Worked example (distinct factors).** Evaluate ∫₁³ (15 − 2x)/((2x − 1)(x + 3)) dx.

Write (15 − 2x)/((2x − 1)(x + 3)) = A/(2x − 1) + B/(x + 3), so 15 − 2x = A(x + 3) + B(2x − 1).

Put x = ½: 14 = 3.5A, so A = 4. Put x = −3: 21 = −7B, so B = −3.

```
∫₁³ [4/(2x − 1) − 3/(x + 3)] dx = [2 ln|2x − 1| − 3 ln|x + 3|]₁³
 = (2 ln 5 − 3 ln 6) − (0 − 3 ln 4) = ln(25 × 64 / 216) = ln(200/27)
```

**Worked example (repeated factor).** Evaluate ∫₂⁴ (6x + 3)/((x − 1)(x + 2)²) dx.

Use A/(x − 1) + B/(x + 2) + C/(x + 2)². Putting x = 1 gives A = 1. Putting x = −2 gives C = 3. Comparing x² coefficients (there are none on the left) gives A + B = 0, so B = −1.

```
∫₂⁴ [1/(x − 1) − 1/(x + 2) + 3/(x + 2)²] dx = [ln|x − 1| − ln|x + 2| − 3/(x + 2)]₂⁴
 = (ln 3 − ln 6 − ½) − (0 − ln 4 − ¾) = ln 2 + ¼
```

## Common errors

- Forgetting to change the limits after a substitution, or changing them and then also substituting back.
- Leaving a stray x in a u-integral. Rewrite x in terms of u before integrating.
- Choosing u = eˣ or u = sin x when the other factor is a power of x, which makes parts harder, not easier.
- Dropping the minus sign in uv − ∫ v du, especially in the second application of parts.
- Writing ln(2x − 1) × 4 instead of dividing by the coefficient of x: ∫ 4/(2x − 1) dx is 2 ln|2x − 1|, not 4 ln|2x − 1|.
- Calling a trapezium-rule estimate an overestimate without checking whether the curve is concave or convex.
- Treating the rectangle sums as the exact value rather than as bounds.

Try the [free 10-minute diagnostics](/diagnostics/) to see which method to revise first.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018. Content statements 1.08g, 1.08h, 1.08i, 1.08j and 1.09f.
