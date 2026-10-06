---
title: "AQA A-Level Mathematics: H: Integration (7357) -- Revision Notes"
seoTitle: "AQA A-Level Maths 7357 Integration Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed AQA A-level Maths (7357) integration notes: standard results, area rules, substitution, parts, partial fractions and separable equations."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

For full explanations and longer worked examples, use the [Integration study guide](/resources/aqa-a-level-mathematics-integration/). These notes condense **Section H: Integration (H1 to H8)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. Section H is Paper 1 content and can also be assessed on Papers 2 and 3. A calculator is required in every paper of this specification, but exact answers and "show that" questions need full working.

Practise with the [Integration practice questions](/resources/aqa-a-level-mathematics-integration-practice/). Course hub: [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/). Printable checklist: [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/). Free 10-minute diagnostics: [/diagnostics/](/diagnostics/).

## H1: Fundamental Theorem of Calculus

- If F′(x) = f(x), then ∫ f(x) dx = F(x) + c.
- If F′(x) = f(x), then ∫ₐᵇ f(x) dx = F(b) − F(a).
- "Differentiate g(x), hence integrate…": the derivative you found is an integral you now know. Rearrange to isolate the part you need.

**Worked reminder.** d/dx (sin(x²)) = 2x cos(x²), so ∫ 2x cos(x²) dx = sin(x²) + c with no further work.

Notation (Appendix A): ∫ y dx is the indefinite integral; ∫ₐᵇ y dx is the definite integral between x = a and x = b.

## H2: Standard integrals (recall these)

Appendix B lists these among the results you must use without them being provided.

| f(x) | ∫ f(x) dx |
|---|---|
| xⁿ, n ≠ −1 | xⁿ⁺¹/(n + 1) + c |
| e^(kx) | (1/k)e^(kx) + c |
| 1/x | ln\|x\| + c |
| sin kx | −(1/k) cos kx + c |
| cos kx | (1/k) sin kx + c |
| f′(x) + g′(x) | f(x) + g(x) + c |
| f′(g(x)) g′(x) | f(g(x)) + c |

Also useful, and both follow from substitution:

| f(x) | ∫ f(x) dx |
|---|---|
| 1/(ax + b) | (1/a) ln\|ax + b\| + c |
| f′(x)/f(x) | ln\|f(x)\| + c |

**Method in steps: indefinite integral**
1. Rewrite every term as a power, an exponential, a trig function or 1/x.
2. Integrate term by term.
3. Simplify the coefficients.
4. Add + c.

Trigonometric integrals use **radians**.

**Curve from gradient:** integrate dy/dx, then substitute the given point to find c.

## H3: Definite integrals and area

- No + c in a definite integral: it cancels.
- Area between curve and x-axis = ∫ₐᵇ y dx, **for y ≥ 0**.
- A region below the axis gives a **negative** integral. Take its size.
- If the curve crosses the axis in [a, b], split at the root and add the sizes.
- Area between curves = ∫ₐᵇ (upper − lower) dx. No splitting needed, even below the axis.
- Limits for the area between curves come from solving y₁ = y₂.

**Worked reminder.** Area enclosed by y = 2x and y = x²:
x² = 2x gives x = 0, 2. Area = ∫₀² (2x − x²) dx = 4 − 8/3 = 4/3.

## H4: Limit of a sum

```
∫ₐᵇ y dx = lim (δx → 0) Σ y δx   (summed from x = a to x = b)
```

- Each term y δx is the area of a thin rectangle.
- To answer "write as an integral": the expression multiplying δx is the integrand, and the range of x gives the limits.
- Thinner strips give a better approximation; the limit is exact.

## H5: Substitution and parts

**Substitution (reverse chain rule)**
1. Choose u (often the inside of a bracket or root).
2. Find du/dx, then write dx in terms of du.
3. Replace every x, including any left-over x, using u.
4. Change the limits to u-values (definite integrals).
5. Integrate in u. Either use the u-limits, or go back to x.

**Worked reminder.** ∫ x(x² + 3)⁴ dx with u = x² + 3: du = 2x dx, so x dx = (1/2) du. The integral becomes (1/2) ∫ u⁴ du = (1/10)u⁵ + c = (1/10)(x² + 3)⁵ + c. Differentiate your answer to check it.

The specification limits this to cases where **one** substitution produces something you can integrate. You may have to choose u yourself.

**Parts (reverse product rule)**

```
∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx
```

| Integrand | Take u = | Take dv/dx = |
|---|---|---|
| x e^(kx) | x | e^(kx) |
| x sin kx, x cos kx | x | the trig term |
| x² e^(kx), x² sin kx | x² (parts twice) | the other factor |
| xⁿ ln x | ln x | xⁿ |
| ln x alone | ln x | 1 |

Parts may be needed more than once. Reduction formulae are excluded.

## H6: Partial fractions

1. Write the fraction as A/(linear) + B/(linear).
2. Find A and B by substituting the root of each bracket (or by equating coefficients).
3. Integrate each term to a log, dividing by the coefficient of x.
4. Combine logs only if asked for a single log or a set form.

**Worked reminder.** 4/((x − 1)(x + 3)) = 1/(x − 1) − 1/(x + 3), so the integral is ln|x − 1| − ln|x + 3| + c.

## H7: Separable differential equations

1. Factorise the right-hand side into f(x) × g(y). Take out any common factor.
2. Separate: ∫ 1/g(y) dy = ∫ f(x) dx.
3. Integrate both sides; one constant is enough.
4. Use the given condition to find the constant.
5. Rearrange if asked for y in terms of x. ln|y − a| = F(x) + c becomes y − a = Ae^(F(x)).

**Worked reminder.** dy/dx = 3x²y with y = 2 when x = 0. Separate: ∫ (1/y) dy = ∫ 3x² dx, so ln|y| = x³ + c. At x = 0, ln 2 = c, so y = 2e^(x³). Check: at x = 0 this gives y = 2, as required.

## H8: Interpreting solutions

- Translate back: say what the variable means and its units.
- Long-term behaviour: let t → ∞ and state the limit.
- Limitations: domain where the formula makes sense (depth ≥ 0, population ≥ 0), behaviour after an event (an empty tank, a stopped particle), factors the model ignores.
- A good comment names the model and the real situation: "the model predicts the depth becomes negative after t = 40, which is impossible, so it only applies until the tank is empty".
- Kinematics: v = dr/dt and a = dv/dt, so r = ∫ v dt and v = ∫ a dt (listed in Appendix B under Mechanics).

## Must-know distinctions

- **Integral vs area.** The integral can be negative or zero; the area cannot.
- **Indefinite vs definite.** Indefinite needs + c; definite gives a number.
- **ln|x| vs xⁿ rule.** n = −1 is the one case the power rule cannot handle.
- **Substitution vs parts.** A function and (a multiple of) its inside's derivative suggests substitution. A product of unrelated types (polynomial × exponential, polynomial × trig, polynomial × log) suggests parts.
- **General vs particular solution.** General keeps the constant; particular uses a condition to fix it.

## Quick self-test

1. Find ∫ (10x⁴ − 6/√x) dx.
2. Find ∫ 6e^(2x) dx and ∫ sin 4x dx.
3. Evaluate ∫₁ᵉ (2/x) dx.
4. Find ∫ 3x²/(x³ + 2) dx.
5. Find ∫ x cos 2x dx.
6. Find ∫ (ln x)/x² dx.
7. Find ∫ 1/((x + 1)(x + 3)) dx.
8. Solve dy/dx = y cos x − 2 cos x, given y = 3 when x = 0.
9. Find the area enclosed between y = x² and y = 3x.
10. Use u = sin x to evaluate ∫₀^(π/2) cos x e^(sin x) dx.
11. Evaluate lim (δx → 0) Σ (1/x) δx, summed from x = 1 to x = 2.

### Answers

1. 2x⁵ − 12√x + c
2. 3e^(2x) + c; −(1/4) cos 4x + c
3. [2 ln x]₁ᵉ = 2
4. ln|x³ + 2| + c (numerator is the derivative of the denominator)
5. u = x, v = (1/2) sin 2x: (1/2)x sin 2x + (1/4) cos 2x + c
6. u = ln x, dv/dx = x⁻², v = −1/x: −(ln x)/x − 1/x + c
7. 1/((x + 1)(x + 3)) = (1/2)/(x + 1) − (1/2)/(x + 3), so (1/2) ln|x + 1| − (1/2) ln|x + 3| + c
8. dy/dx = cos x (y − 2); ln|y − 2| = sin x + c; c = 0; y = 2 + e^(sin x)
9. Limits x = 0, 3: ∫₀³ (3x − x²) dx = 27/2 − 9 = 9/2
10. Limits u = 0 to 1: ∫₀¹ eᵘ du = e − 1
11. ∫₁² (1/x) dx = ln 2

## Where marks are usually lost

- Writing ∫ e^(3x) dx = 3e^(3x): you divide by k when integrating, not multiply.
- Integrating sin kx to +(1/k) cos kx; the result is negative.
- Leaving + c off an indefinite integral, including after integration by parts.
- Splitting 1/(2x + 1) as ln|2x + 1| without the factor 1/2.
- Giving a negative "area", or cancelling regions above and below the axis.
- Keeping x-limits after substituting u, or leaving some x in the u-integral.
- Getting the sign wrong in uv − ∫ v (du/dx) dx on the second application of parts.
- Adding the constant on only one side, then using the wrong value of c after rearranging.
- Rounding a "find the exact value" answer, or giving a decimal where a log form was asked for.
- Stating a model's long-term value but not commenting on whether it is realistic.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, A-level exams June 2018 onwards, published by AQA. Section 3.9, H: Integration (H1 to H8), with Appendix A (mathematical notation) and Appendix B (mathematical formulae and identities).
