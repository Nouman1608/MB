---
title: "OCR A Level Mathematics A: Techniques of integration, parts and partial fractions (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Integration Techniques Revision Notes"
resourceType: "revision-notes"
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
description: "Condensed revision notes on integration as a limit of a sum, the trapezium rule, substitution, parts and partial fractions for OCR A Level Maths A (H240)."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These notes condense the integration techniques in OCR A Level Mathematics A (H240), specification Version 3.1 (August 2026): content statements 1.08g to 1.08j and the numerical integration statement 1.09f. All are Stage 2 content, so they are **A Level only**. For full explanations and longer worked examples, read the [study guide](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts/). Test yourself with the [practice questions](/resources/ocr-a-level-mathematics-techniques-of-integration-reverse-chain-rule-parts-practice/), and tick skills off on the [printable checklist](/checklists/ocr/a-level/mathematics/). The wider course is on the [OCR A Level Mathematics hub](/boards/ocr/a-level/mathematics/).

## Key results

| Reference | Result or method |
|---|---|
| 1.08g | Area = lim (δx→0) Σ f(x)δx = ∫ f(x) dx |
| 1.09f | Trapezium rule: (h/2)[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], with h = (b − a)/n |
| 1.08h | ∫ f'(x)[f(x)]ⁿ dx = [f(x)]ⁿ⁺¹/(n + 1) + c, for n ≠ −1 |
| 1.08h | ∫ k f'(x)/f(x) dx = k ln|f(x)| + c |
| 1.08h | Substitution: u = g(x); replace x, dx and the limits |
| 1.08i | ∫ u (dv/dx) dx = uv − ∫ v (du/dx) dx |
| 1.08j | Split into partial fractions, then ∫ 1/(px + q) dx = (1/p) ln|px + q| |

## 1.08g and 1.09f: sums, rectangles and trapezia

- Each strip has area f(x)δx. Add them, let δx → 0, and the limit is the definite integral.
- A limit of a sum written as lim Σ (x = 1 to 4) x² δx means ∫₁⁴ x² dx.
- Rectangles: for an **increasing** function, left-edge heights give a lower bound and right-edge heights an upper bound. For a **decreasing** function, swap them.
- Trapezium rule: ordinates are the y-values at equally spaced x-values. Strips = n, ordinates = n + 1.
- **Concave** curve (bends downwards): trapezium rule underestimates. **Convex** curve (bends upwards): it overestimates.

**Reminder (bounds).** Bound ∫₀⁴ √x dx with 4 rectangles of width 1. The function is increasing, with ordinates 0, 1, √2, √3, 2.

```
Lower (left edges):  1 × (0 + 1 + √2 + √3) ≈ 4.146
Upper (right edges): 1 × (1 + √2 + √3 + 2) ≈ 6.146
```

So 4.146 < ∫₀⁴ √x dx < 6.146 (the true value is 16/3 ≈ 5.333).

**Method in steps (trapezium rule)**

```
1. h = (b − a)/n
2. List x and y values in a table
3. Add first + last, then add twice the middle values
4. Multiply by h/2
5. State under- or over-estimate, with the reason
```

**Reminder.** A table gives y = 2.0, 2.6, 3.1, 3.5 at x = 0, 1, 2, 3, so h = 1. The estimate is ½[2.0 + 3.5 + 2(2.6 + 3.1)] = 8.45. The increases in y are shrinking (0.6, 0.5, 0.4), so the curve looks concave and the true area is probably larger.

## 1.08h: reverse chain rule and substitution

**Method in steps (recognition)**

```
1. Is the top a multiple of the derivative of the bracket or denominator?
2. If yes, write it as k × f'(x)
3. Raise the power by one and divide by the new power (or take ln|f|)
4. Multiply by k, add c, then differentiate to check
```

**Reminder.** ∫ 5x²/(x³ + 2) dx. The derivative of x³ + 2 is 3x², so the top is (5/3) × 3x². The answer is (5/3) ln|x³ + 2| + c.

**Method in steps (substitution)**

```
1. Pick u (inner bracket, square root, or the given substitution)
2. Find du/dx, so that dx = du / (du/dx)
3. Replace every x, including any factor of x left over, using x = (expression in u)
4. Change the limits to u-values
5. Integrate in u; substitute back only if the integral is indefinite
```

**Reminder.** Evaluate ∫₀¹ x(2 − x)⁵ dx with u = 2 − x. Then x = 2 − u, dx = −du, and u runs from 2 to 1.

```
∫₂¹ −(2 − u)u⁵ du = ∫₁² (2u⁵ − u⁶) du = [u⁶/3 − u⁷/7]₁² = 64/21 − 4/21 = 20/7
```

For √(a² − x²) try x = a sin θ, and use cos²θ = ½(1 + cos 2θ).

## 1.08i: integration by parts

**Method in steps**

```
1. Choose u: ln x, or a power of x (it gets simpler when differentiated)
2. Choose dv/dx: eˣ, sin, cos, or a power (you can integrate it)
3. Find du/dx and v
4. Write uv − ∫ v (du/dx) dx and integrate what remains
5. For x² times eˣ, sin or cos, repeat once
6. For a definite integral, apply the limits to uv as well
```

- ∫ ln x dx: take u = ln x and dv/dx = 1. The answer is x ln x − x + c.
- ∫ x^n ln x dx: always take u = ln x. For example, ∫ x ln x dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4 + c.
- The reduction formulae method is not required.

**Reminder.** ∫₀^π x sin x dx. With u = x and v = −cos x: [−x cos x]₀^π + ∫₀^π cos x dx = π + [sin x]₀^π = **π**.

## 1.08j: partial fractions

- Denominators are no more complicated than (ax + b)(cx + d)² or (ax + b)(cx + d)(ex + f), with a constant or linear numerator.
- Forms: A/(ax + b) + B/(cx + d), or A/(ax + b) + B/(cx + d) + C/(cx + d)² for a repeated factor.
- Find the constants by substituting the root of each factor, then comparing coefficients for the rest.
- Integrate each term. The squared term gives −1/(p(px + q)), not a logarithm.

**Reminder.** 5/((x − 1)(x + 4)) = 1/(x − 1) − 1/(x + 4), so the integral is ln|x − 1| − ln|x + 4| + c = ln|(x − 1)/(x + 4)| + c.

## Which method?

| Integrand looks like | First try |
|---|---|
| f'(x) times a power of f(x) | Recognition, or u = f(x) |
| A fraction whose top is a multiple of the derivative of the bottom | k ln|f(x)| |
| A linear factor times a power of a linear bracket | u = the bracket |
| A square root of x or of a linear expression | u = the root |
| √(a² − x²) or 1/√(a² − x²) | x = a sin θ |
| x^n times eˣ, sin x or cos x | Parts, u = x^n |
| ln x, or x^n times ln x | Parts, u = ln x |
| A fraction with two or three linear factors below | Partial fractions |

## Must-know distinctions

- **Recognition vs substitution:** recognition is substitution done in your head. Both come from the chain rule.
- **ln|f| vs [f]ⁿ⁺¹:** a power of −1 gives a logarithm, not a power of 0.
- **Parts vs substitution:** parts is for a product of unrelated functions (x and eˣ). Substitution is for a function inside a function.
- **Upper/lower bound vs under/over-estimate:** rectangles give bounds. The trapezium rule gives a single estimate whose sign of error depends on concavity.
- **Limits:** with substitution, the limits change. With parts, they stay in x.

## Quick self-test

1. Find ∫ 8x(x² + 1)³ dx.
2. Find ∫ x/(x² + 9) dx.
3. Find ∫ cos x/sin x dx.
4. Find ∫ x eˣ dx.
5. Find ∫ ln x dx.
6. Evaluate lim (δx→0) Σ (x = 1 to 4) x² δx.
7. Write 6/((x − 1)(x + 2)) in partial fractions and integrate it.
8. Use u = x + 1 to evaluate ∫₀³ x/√(x + 1) dx.
9. Estimate ∫₀¹ eˣ dx using the trapezium rule with 2 strips, to 3 d.p. Is it an over- or underestimate?
10. For an increasing function, which rectangles give a lower bound for the area?
11. Find ∫ 1/(3x + 2) dx.
12. Find ∫ x cos x dx, and show how you chose u.

### Answers

1. (x² + 1)⁴ + c
2. ½ ln(x² + 9) + c
3. ln|sin x| + c
4. (x − 1)eˣ + c
5. x ln x − x + c
6. ∫₁⁴ x² dx = (64 − 1)/3 = 21
7. 2/(x − 1) − 2/(x + 2), giving 2 ln|x − 1| − 2 ln|x + 2| + c
8. Integrand becomes (u − 1)u^(−1/2) with u from 1 to 4: [(2/3)u^(3/2) − 2u^(1/2)]₁⁴ = 8/3
9. h = 0.5: 0.25[1 + e + 2e^0.5] ≈ 1.754. The curve is convex, so it is an overestimate (the exact value is e − 1 ≈ 1.718).
10. Left-edge rectangles, because each lies below the curve.
11. (1/3) ln|3x + 2| + c, because dividing by the coefficient of x undoes the chain rule.
12. Take u = x and dv/dx = cos x, because x becomes 1 when differentiated. The answer is x sin x + cos x + c.

## Where marks are usually lost

- Forgetting the constant of integration on an indefinite integral.
- Not adjusting the constant when the numerator is a multiple of f'(x), for example dividing by 6 instead of multiplying by 1/6.
- Leaving x in the integrand after a substitution, or keeping the old limits.
- Choosing the wrong part as u, so the integral gets harder instead of simpler.
- Sign errors when integrating by parts twice.
- Dividing by the coefficient of x incorrectly in ∫ 1/(px + q) dx.
- Giving the trapezium estimate without saying whether it is an over- or underestimate, or without a reason.
- Giving an exact answer as a rounded decimal when the question asks for an exact value.

Take a [free 10-minute diagnostic](/diagnostics/) to see which method needs more work.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018. Content statements 1.08g, 1.08h, 1.08i, 1.08j and 1.09f.
