---
title: "AQA A-Level Mathematics: H: Integration (7357)"
seoTitle: "AQA A-Level Maths 7357 Integration Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "H: Integration"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 9
syllabusTopics:
  - qualification: "a-level"
    topic: "h-integration-aqa-alevel-maths"
description: "Study guide for AQA A-level Maths (7357) Section H: standard integrals, areas, substitution, parts, partial fractions and differential equations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section H: Integration (H1 to H8)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Section H is Paper 1 content, and Papers 2 and 3 can also assess any Paper 1 content, so integration can appear on all three papers. A calculator is required in every 7357 paper, but questions that ask for an **exact** answer or say **"show that"** need full working by hand.

Use it with the [Integration revision notes](/resources/aqa-a-level-mathematics-integration-revision-notes/) and the [Integration practice questions](/resources/aqa-a-level-mathematics-integration-practice/). Integration reverses differentiation, so the [Differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/) is the natural companion. The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/) and the printable checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/). To find your weak spots first, try a free 10-minute test from [/diagnostics/](/diagnostics/).

## What Section H covers

| Ref | What you must be able to do |
|---|---|
| H1 | Know and use the Fundamental Theorem of Calculus |
| H2 | Integrate xⁿ (n ≠ −1), e^(kx), 1/x, sin kx, cos kx, and sums, differences and constant multiples of these |
| H3 | Evaluate definite integrals; find the area under a curve and the area between two curves |
| H4 | Understand and use integration as the limit of a sum |
| H5 | Integrate by substitution and by parts; see them as the reverse of the chain and product rules |
| H6 | Integrate using partial fractions that are linear in the denominator |
| H7 | Solve simple first order differential equations with separable variables, including particular solutions |
| H8 | Interpret the solution of a differential equation in context, including its limitations; links to kinematics |

Appendix B of the specification lists results you must be able to use **without them being provided**. For integration it lists the integrals of xⁿ (n ≠ −1), cos kx, sin kx, e^(kx) and 1/x, the rule for f′(x) + g′(x), the rule for f′(g(x))g′(x), and area under a curve = ∫ y dx (y ≥ 0). Learn them by heart.

The notation is the specification's: ∫ y dx is the indefinite integral of y with respect to x, and ∫ₐᵇ y dx is the definite integral between the limits x = a and x = b.

## H1: The Fundamental Theorem of Calculus

The theorem links the two halves of calculus:

- If F′(x) = f(x), then ∫ f(x) dx = F(x) + c. Integration undoes differentiation.
- If F′(x) = f(x), then ∫ₐᵇ f(x) dx = F(b) − F(a).

The second form is how every definite integral is evaluated. In practice it also means a "differentiate, hence integrate" question is a gift: the derivative you just found tells you an integral.

**Worked example 1.** Differentiate x ln x. Hence find ∫ ln x dx and evaluate ∫₁ᵉ ln x dx.

```
d/dx (x ln x) = 1 × ln x + x × (1/x) = ln x + 1      (product rule)
So ∫ (ln x + 1) dx = x ln x + c
∫ ln x dx = x ln x − ∫ 1 dx = x ln x − x + c
∫₁ᵉ ln x dx = [x ln x − x]₁ᵉ = (e − e) − (0 − 1) = 1
```

## H2: Standard integrals

| f(x) | ∫ f(x) dx |
|---|---|
| xⁿ (n ≠ −1) | xⁿ⁺¹/(n + 1) + c |
| e^(kx) | (1/k)e^(kx) + c |
| 1/x | ln\|x\| + c |
| sin kx | −(1/k) cos kx + c |
| cos kx | (1/k) sin kx + c |

Rewrite roots and fractions as powers first: √x = x^(1/2), 4/x³ = 4x⁻³. Sums, differences and constant multiples are integrated term by term. Trigonometric integrals need x in **radians**.

**Worked example 2.** Find ∫ (6x² − 4/x³ + 3√x) dx.

```
= ∫ (6x² − 4x⁻³ + 3x^(1/2)) dx
= 6x³/3 − 4x⁻²/(−2) + 3x^(3/2)/(3/2) + c
= 2x³ + 2x⁻² + 2x^(3/2) + c
```

**Worked example 3.** Find ∫ (e^(3x) + 5/x − 4 sin 2x + cos(x/2)) dx.

```
= (1/3)e^(3x) + 5 ln|x| + 2 cos 2x + 2 sin(x/2) + c
```

Check the sign on the sine term: −4 × (−1/2) cos 2x = +2 cos 2x.

**Finding a curve from its gradient.** If dy/dx = 3x² − 2x and the curve passes through (2, 5), then y = x³ − x² + c. Substituting: 5 = 8 − 4 + c, so c = 1 and y = x³ − x² + 1.

## H3: Definite integrals and areas

**Worked example 4.** Evaluate ∫₁⁴ (3√x − 1) dx.

```
= [2x^(3/2) − x]₁⁴ = (2 × 8 − 4) − (2 − 1) = 12 − 1 = 11
```

**Area under a curve.** For y ≥ 0 on a ≤ x ≤ b, the area between the curve and the x-axis is ∫ₐᵇ y dx. Where the curve is **below** the axis, the integral is negative. Area is always positive, so split the interval at the roots and add the sizes.

**Worked example 5.** Find the total area enclosed between y = x² − 4x + 3, the x-axis and the lines x = 0 and x = 3.

```
Roots: (x − 1)(x − 3) = 0, so x = 1 and x = 3
∫₀¹ (x² − 4x + 3) dx = [x³/3 − 2x² + 3x]₀¹ = 4/3     (above the axis)
∫₁³ (x² − 4x + 3) dx = 0 − 4/3 = −4/3                 (below the axis)
Total area = 4/3 + 4/3 = 8/3
```

A single integral from 0 to 3 gives 0, which is wrong for the area.

**Area between two curves.** If y₁ ≥ y₂ on a ≤ x ≤ b, the area between them is ∫ₐᵇ (y₁ − y₂) dx. This works even if part of the region lies below the x-axis, so no splitting is needed.

**Worked example 6.** Find the area enclosed between y = x² and y = 6x − x².

```
Intersections: x² = 6x − x²  →  2x² − 6x = 0  →  x = 0 or x = 3
On 0 < x < 3, 6x − x² is the upper curve
Area = ∫₀³ (6x − 2x²) dx = [3x² − (2/3)x³]₀³ = 27 − 18 = 9
```

## H4: Integration as the limit of a sum

Split the area under y = f(x) from x = a to x = b into thin strips of width δx. Each strip is close to a rectangle of area y δx, so the area is roughly Σ y δx. As δx → 0 the approximation becomes exact:

```
lim (δx → 0) Σ y δx  (from x = a to x = b)  =  ∫ₐᵇ y dx
```

**Worked example 7.** Write lim (δx → 0) Σ (2x + 1) δx, summed from x = 1 to x = 3, as an integral and evaluate it.

```
= ∫₁³ (2x + 1) dx = [x² + x]₁³ = 12 − 2 = 10
```

With 4 rectangles (left-hand heights) the sum is 9; with 100 rectangles it is 9.96. The sums approach 10 as the strips get thinner. This idea also explains why the trapezium rule estimates an area (that method sits in Section I, Numerical methods).

## H5: Substitution and integration by parts

**Substitution reverses the chain rule.** Choose u, find dx in terms of du, change the limits, and integrate in u. The specification limits this to cases where one substitution leads to an integrable function, and you may have to choose the substitution yourself.

**Worked example 8.** Use u = 2x − 1 to find ∫₁⁵ x√(2x − 1) dx exactly.

```
u = 2x − 1  →  x = (u + 1)/2,  dx = du/2
x = 1 → u = 1;  x = 5 → u = 9
∫₁⁹ ((u + 1)/2) u^(1/2) (1/2) du = (1/4) ∫₁⁹ (u^(3/2) + u^(1/2)) du
= (1/4) [ (2/5)u^(5/2) + (2/3)u^(3/2) ]₁⁹
= (1/4) [ (486/5 + 18) − (2/5 + 2/3) ] = 428/15
```

A useful result that substitution proves: ∫ f′(x)/f(x) dx = ln|f(x)| + c. For example, ∫ 4x/(x² + 1) dx = 2 ln(x² + 1) + c, because the numerator is twice the derivative of the denominator.

**Integration by parts reverses the product rule.** From (uv)′ = u′v + uv′:

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

Let u be the factor that gets simpler when differentiated (usually the power of x), unless one factor is ln x, which you should always take as u.

**Worked example 9.** Find ∫ x e^(2x) dx.

```
u = x, dv/dx = e^(2x)  →  du/dx = 1, v = (1/2)e^(2x)
∫ x e^(2x) dx = (1/2)x e^(2x) − ∫ (1/2)e^(2x) dx
             = (1/2)x e^(2x) − (1/4)e^(2x) + c
```

The method may need applying **twice**. For ∫ x² cos x dx, the first application leaves ∫ 2x sin x dx, and a second gives x² sin x + 2x cos x − 2 sin x + c. Reduction formulae are excluded.

## H6: Partial fractions

Split the integrand into fractions with linear denominators, then integrate each to a logarithm. Note ∫ 1/(ax + b) dx = (1/a) ln|ax + b| + c.

**Worked example 10.** Find ∫₂⁴ (5x + 1)/((x − 1)(x + 2)) dx exactly.

```
(5x + 1) ≡ A(x + 2) + B(x − 1)
x = 1:  6 = 3A  → A = 2;     x = −2:  −9 = −3B  → B = 3
∫₂⁴ (2/(x − 1) + 3/(x + 2)) dx = [2 ln|x − 1| + 3 ln|x + 2|]₂⁴
= (2 ln 3 + 3 ln 6) − (0 + 3 ln 4) = 2 ln 3 + 3 ln(3/2) = ln(243/8)
```

The decomposition itself is taught in Section B (Algebra and functions); see the [Quadratics and inequalities guide](/resources/a-level-aqa-mathematics-quadratics-and-inequalities/) for where Section B fits.

## H7: Separable differential equations

A first order equation dy/dx = f(x)g(y) separates into ∫ 1/g(y) dy = ∫ f(x) dx. Add one constant, then use the given condition for a particular solution. The specification notes you may first need to **factorise out a common factor**.

**Worked example 11.** Solve dy/dx = xy + x, given y = 2 when x = 0.

```
dy/dx = x(y + 1)                      (common factor x)
∫ 1/(y + 1) dy = ∫ x dx
ln|y + 1| = x²/2 + c
x = 0, y = 2:  ln 3 = c
y + 1 = e^(x²/2 + ln 3) = 3e^(x²/2)
y = 3e^(x²/2) − 1
```

## H8: Interpreting solutions in context

A solution is a model. Say what it predicts, and say where it stops making sense.

**Worked example 12.** Water drains from a tank. The depth h metres after t minutes satisfies dh/dt = −0.1√h, with h = 4 when t = 0. Find h in terms of t and comment on the model.

```
∫ h^(−1/2) dh = ∫ −0.1 dt  →  2√h = −0.1t + c
t = 0, h = 4:  c = 4
√h = 2 − 0.05t  →  h = (2 − 0.05t)²
```

The tank is empty when 2 − 0.05t = 0, at t = 40 minutes. The formula h = (2 − 0.05t)² rises again for t > 40, which is impossible, so the model is valid only for 0 ≤ t ≤ 40.

**Kinematics link.** If a particle slows so that dv/dt = −0.5v with v = 8 m s⁻¹ at t = 0, separating gives v = 8e^(−0.5t). The model says v never reaches zero, so the particle never quite stops. The distance travelled up to time T is ∫₀ᵀ v dt = 16(1 − e^(−0.5T)), which never exceeds 16 m. A real particle would stop because of forces the model leaves out.

## Common errors

- Writing ∫ x⁻¹ dx = x⁰/0. Use ln|x| for n = −1.
- Getting the factor wrong on e^(kx), sin kx, cos kx: you **divide** by k when integrating.
- Losing the minus sign: ∫ sin kx dx = −(1/k) cos kx.
- Using degrees for trigonometric integrals. Radians only.
- Finding an area with one integral across a root, so the positive and negative parts cancel.
- Changing to u but keeping the x-limits, or forgetting to replace dx.
- Choosing u = e^x instead of u = x in parts, which makes the integral harder.
- Dropping the constant in a differential equation, or adding it only after rearranging.
- Giving a solution valid beyond the point where the context breaks down.

## Next steps

Condense this with the [Integration revision notes](/resources/aqa-a-level-mathematics-integration-revision-notes/), then test yourself on the [Integration practice questions](/resources/aqa-a-level-mathematics-integration-practice/). For how integration sits across the three papers, read [AQA A-level Maths exam preparation](/resources/aqa-a-level-mathematics-exam-preparation/). Check what you still need to revise with a free diagnostic at [/diagnostics/](/diagnostics/).

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, A-level exams June 2018 onwards, published by AQA. Section 3.9, H: Integration (H1 to H8), with Appendix A (mathematical notation) and Appendix B (mathematical formulae and identities).
