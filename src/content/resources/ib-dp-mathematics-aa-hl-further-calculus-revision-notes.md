---
title: "IB DP Mathematics: Analysis and Approaches -- Limits, further differentiation and integration, differential equations and Maclaurin series (HL) Revision Notes"
seoTitle: "IB Maths AA HL Further Calculus Revision Notes"
resourceType: "revision-notes"
subject: "mathematics-analysis-and-approaches"
level: ["ib"]
topic: "Limits, further differentiation and integration, differential equations and Maclaurin series (HL)"
boards: ["ib"]
qualifications: ["ib-dp"]
syllabusCodes: ["DP Mathematics: Analysis and Approaches"]
syllabusSeries: "First assessment 2021"
order: 5.12
syllabusTopics:
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-12"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-13"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-14"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-15"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-16"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-17"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-18"
  - qualification: "ib-dp"
    topic: "ib-dp-mathematics-analysis-and-approaches-calculus"
    subtopic: "ib-dp-mathematics-analysis-and-approaches-5-19"
description: "Condensed IB DP Maths AA HL further calculus revision notes: derivative tables, integration methods, DE methods, Maclaurin series and a self-test."
author: "marlbridge-academic-team"
reviewer: "muhammad-ghazali-siddiqui"
reviewStatus: "reviewed"
reviewedDate: 2026-09-29
publishedDate: 2026-09-27
featured: false
---

These revision notes condense the HL further calculus unit of IB Diploma Programme Mathematics: Analysis and Approaches for your final weeks. For full explanations and worked examples, use the [further calculus study guide](/resources/ib-dp-mathematics-aa-hl-further-calculus/). The notes are aligned to the IB *Mathematics: analysis and approaches guide*, first assessment 2021, syllabus sections 5.12–5.19, and all of the content is HL only (AHL). They follow the IB guide for first assessment 2021, which remains the examined syllabus until the new course is first assessed in May 2029, so they apply to the May and November 2026, 2027 and 2028 HL sessions.

Test yourself afterwards with the [further calculus practice questions](/resources/ib-dp-mathematics-aa-hl-further-calculus-practice/). The [IB DP Maths AA course hub](/boards/ib/ib-dp/mathematics-analysis-and-approaches/) and the [printable syllabus checklist](/checklists/ib/ib-dp/mathematics-analysis-and-approaches/) show the whole course. The SL foundations are in the [AA calculus revision material](/resources/ib-dp-mathematics-aa-calculus/).

## Definitions

- **Continuity and differentiability (5.12):** informal only. No break in the graph means continuous; no break and no sharp corner means differentiable. You will not be asked to test for either.
- **Convergence:** a sequence or expression converges if it tends to a finite limit; otherwise it diverges. Example: rⁿ → 0 when |r| < 1.
- **Derivative from first principles:** f′(x) = lim (h→0) [f(x + h) − f(x)]/h. Polynomials only.
- **Higher derivatives:** d²y/dx², …, dⁿy/dxⁿ or f⁽ⁿ⁾(x).
- **Indeterminate forms:** 0/0 and ∞/∞.
- **Indefinite integral:** a family of curves, one for each constant C.
- **Homogeneous DE:** dy/dx = f(y/x).

## Formulas

| Topic | Result |
|---|---|
| l'Hôpital | If lim f/g is 0/0 or ∞/∞, lim f/g = lim f′/g′ |
| Standard limit | lim (θ→0) (sin θ)/θ = 1 |
| d/dx tan x, sec x | sec²x, sec x tan x |
| d/dx cosec x, cot x | −cosec x cot x, −cosec²x |
| d/dx aˣ, logₐ x | aˣ ln a, 1/(x ln a) |
| d/dx arcsin x, arccos x | 1/√(1 − x²), −1/√(1 − x²) |
| d/dx arctan x | 1/(1 + x²) |
| ∫ 1/(a² + x²) dx | (1/a) arctan(x/a) + C |
| ∫ 1/√(a² − x²) dx | arcsin(x/a) + C |
| Integration by parts | ∫ u dv = uv − ∫ v du |
| Area to y-axis | ∫ₐᵇ \|x\| dy |
| Volume, x-axis | π ∫ₐᵇ y² dx |
| Volume, y-axis | π ∫ₐᵇ x² dy |
| Euler's method | xₙ₊₁ = xₙ + h, yₙ₊₁ = yₙ + h f(xₙ, yₙ) |
| Integrating factor | I(x) = e^(∫P(x) dx) for y′ + P(x)y = Q(x) |
| Maclaurin | f(x) = f(0) + x f′(0) + x² f″(0)/2! + … |

## Maclaurin series to know

| Function | Series |
|---|---|
| eˣ | 1 + x + x²/2! + x³/3! + … |
| sin x | x − x³/3! + x⁵/5! − … |
| cos x | 1 − x²/2! + x⁴/4! − … |
| arctan x | x − x³/3 + x⁵/5 − … |
| ln(1 + x) | x − x²/2 + x³/3 − … |
| (1 + x)ᵖ, p ∈ ℚ | 1 + px + p(p − 1)x²/2! + … |

New series come from substitution (x → 2x, x → x²), products (eˣ sin x), and term-by-term differentiation or integration.

## Method in steps

**First principles (polynomial)**
1. Expand f(x + h) and subtract f(x).
2. Divide every term by h.
3. Let h → 0.

**l'Hôpital's rule**
1. Substitute to confirm 0/0 or ∞/∞. Say which.
2. Differentiate numerator and denominator separately.
3. Substitute again. Still indeterminate? Repeat.

**Implicit differentiation**
1. Differentiate each term with respect to x; terms in y pick up dy/dx.
2. Use the product rule on mixed terms such as x²y.
3. Collect the dy/dx terms and factorise.

**Related rates**
1. Write the formula linking the quantities (reduce to one variable if you can).
2. Differentiate with respect to t, or use the chain rule dA/dt = (dA/dr)(dr/dt).
3. Substitute the instant's values last.

**Optimisation**
1. Write the quantity in one variable and state the allowed interval.
2. Solve the derivative = 0 and keep only solutions inside the interval.
3. Evaluate at those points and at both end points; compare.
4. Justify max or min (second derivative or a sign table) when asked.

**Partial fractions for integration**
1. Factorise the denominator into distinct linear factors.
2. Find A and B by cover-up or by comparing coefficients.
3. Integrate each term to a logarithm with modulus signs.

**Integration by substitution**
1. Use the given u; find dx in terms of du.
2. Change the limits to u-values (or substitute back at the end).
3. Simplify fully before integrating.

**Integration by parts**
1. Choose u to simplify when differentiated: ln x, arcsin x, arctan x, then polynomials.
2. For eˣ sin x or eˣ cos x, apply parts twice and solve for the integral.

**Volumes of revolution**
1. Decide the axis. About the y-axis, rewrite the curve as x in terms of y.
2. Square the correct variable and use limits on the same axis.
3. Multiply by π; give an exact answer unless the question asks for 3 s.f.

**Euler's method**
1. Write f(x, y) and h clearly; set up a table of n, xₙ, yₙ.
2. Each row: yₙ₊₁ = yₙ + h f(xₙ, yₙ). Keep full calculator values.
3. Round only the final value. Smaller h usually gives a better estimate.

**Separable DE**
1. Rearrange to g(y) dy = f(x) dx.
2. Integrate both sides; add one constant.
3. Use the initial condition, then rearrange for y.

**Homogeneous DE**
1. Put y = vx, dy/dx = v + x dv/dx.
2. Separate in v and x, integrate.
3. Replace v with y/x.

**Integrating factor**
1. Write in the form y′ + P(x)y = Q(x) (divide through if needed).
2. I(x) = e^(∫P dx), no constant needed.
3. d/dx(I y) = I Q; integrate, then divide by I.

**Maclaurin series from a DE**
1. Find y′(0) from the equation.
2. Differentiate the equation implicitly for y″, y‴.
3. Substitute x = 0 each time; build the series.

## Small worked reminders

- lim (x→0) (1 − cos 2x)/x²: l'Hôpital twice gives (4 cos 2x)/2 → 2.
- For x² + xy + y² = 7 at (1, 2): dy/dx = −(2x + y)/(x + 2y) = −4/5.
- ∫ 1/(x² + 6x + 13) dx = (1/2) arctan((x + 3)/2) + C, after completing the square.
- (x + 7)/((x − 2)(x + 1)) = 3/(x − 2) − 2/(x + 1).
- ∫ x e³ˣ dx = (x/3)e³ˣ − (1/9)e³ˣ + C.
- dn/dt = 0.001n(500 − n), n(0) = 50 gives n = 500/(1 + 9e^(−0.5t)).
- y′ + (2/x)y = 3x: I = x², y = (3/4)x² + C/x².
- eˣ sin x = x + x² + x³/3 + …
- e^(x²) = 1 + x² + x⁴/2 + …, by replacing x with x² in the eˣ series.
- √(1 + x) = 1 + x/2 − x²/8 + …, from (1 + x)ᵖ with p = 1/2.
- Area between y = x³ and the y-axis for 1 ≤ y ≤ 8: ∫₁⁸ y^(1/3) dy = 45/4.

## Must-know distinctions

- **Volume about x-axis vs y-axis:** π ∫ y² dx vs π ∫ x² dy. The limits change from x-values to y-values.
- **Area to x-axis vs y-axis:** ∫ y dx vs ∫ x dy.
- **l'Hôpital vs quotient rule:** l'Hôpital differentiates top and bottom separately.
- **Separable vs homogeneous vs linear:** separable splits as g(y) dy = f(x) dx; homogeneous depends only on y/x; linear has the form y′ + P(x)y = Q(x).
- **Stationary point vs end point:** on a closed interval, the optimum may be at an end.
- **Given vs obvious substitution:** a substitution is given unless the integral is of the form ∫ k g′(x) f(g(x)) dx.

## Quick self-test

1. lim (x→0) (sin 3x)/x
2. lim (x→∞) (2x² − x)/(5x² + 3)
3. d/dx tan 4x
4. d/dx 3ˣ
5. d/dx arcsin 2x
6. ∫ 1/(1 + 9x²) dx
7. ∫ ln x dx
8. The integrating factor for y′ + 3y = eˣ
9. The Maclaurin series of ln(1 + 2x) up to x³
10. One Euler step, h = 0.1, for dy/dx = xy with y(1) = 2
11. dy/dx for x³ + y³ = 9 at (1, 2)
12. lim (x→0) (eˣ − 1 − x)/x²

### Answers

1. 3
2. 2/5
3. 4 sec² 4x
4. 3ˣ ln 3
5. 2/√(1 − 4x²)
6. (1/3) arctan 3x + C
7. x ln x − x + C
8. e³ˣ
9. 2x − 2x² + (8/3)x³
10. y(1.1) ≈ 2 + 0.1(1 × 2) = 2.2
11. 3x² + 3y² dy/dx = 0, so dy/dx = −1/4
12. 1/2 (l'Hôpital twice, or eˣ − 1 − x = x²/2 + …)

## Where marks are usually lost

- First principles: writing the limit with h still in the denominator, or letting h = 0 before dividing.
- l'Hôpital: not stating the indeterminate form before using the rule.
- Related rates: substituting the instant's value (say r = 5) before differentiating.
- Arctan integrals: missing the 1/a factor after completing the square.
- Partial fractions: logarithms without modulus signs, or sign errors in the constants.
- Volumes about the y-axis: using x-limits instead of y-limits.
- Euler's method: rounding y at each step, so the final answer drifts.
- Separable equations: exponentiating ln|y| = f(x) + C as y = e^(f(x)) + C.
- Integrating factor: forgetting to divide the equation so y′ has coefficient 1.
- Maclaurin products: missing cross terms, such as (x²/2) × x in the x³ term of eˣ sin x.

## Official syllabus

International Baccalaureate Organization, Diploma Programme, *Mathematics: analysis and approaches guide*, first assessment 2021 (published February 2019, updated November 2020).
