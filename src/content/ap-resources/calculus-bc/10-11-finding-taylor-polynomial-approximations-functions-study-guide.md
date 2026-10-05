---
resourceId: "mb-ap-calcbc-10.11-study-guide"
title: "Finding Taylor Polynomial Approximations of Functions: Study Guide (Calculus BC 10.11)"
description: "Build Taylor polynomials from derivative values, see why each coefficient is f⁽ⁿ⁾(a)/n!, read derivatives back from a polynomial, and use it to estimate function values near the centre."
course: "calculus-bc"
unit: 10
topics: ["10.11"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Higher-order derivatives (Topic 3.6)"
  - "Tangent line approximations and local linearity (Topic 4.6)"
  - "Factorial notation: n! = 1 · 2 · 3 · … · n, with 0! = 1"
prerequisiteResources: ["mb-ap-calcbc-10.10-study-guide"]
learningObjectives:
  - "Explain why a Taylor polynomial matches a function's value and first n derivatives at the centre"
  - "Write the nth-degree Taylor polynomial for a function about x = a, using f⁽ⁿ⁾(a)/n! as each coefficient"
  - "Build a Taylor polynomial from a table of derivative values, and read derivative values back from a given polynomial"
  - "Use a Taylor polynomial to estimate a function value near the centre"
  - "Describe how the approximation usually improves as the degree rises, and why it is best close to the centre"
skills: ["2", "3"]
studyMinutes: 50
difficulty: "core"
calculator: "mixed"
calculatorNote: "Build polynomials by hand. A calculator may be used to evaluate a polynomial or compare it with the true value where one is allowed. Angles in radians."
related: ["mb-ap-calcbc-10.11-revision-notes", "mb-ap-calcbc-10.11-practice", "mb-ap-calcbc-10.11-checklist"]
next: "mb-ap-calcbc-10.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "The coefficient of (x − a)ⁿ in a Taylor polynomial about x = a is f⁽ⁿ⁾(a)/n!."
  - "Pₙ(x) has the same value and the same first n derivatives as f at x = a."
  - "The tangent line is the first-degree Taylor polynomial; higher degrees add curvature and more."
  - "A Taylor polynomial gives good estimates near the centre; accuracy usually falls as you move away."
  - "Reading backwards: f⁽ⁿ⁾(a) = n! × (coefficient of (x − a)ⁿ)."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Taylor polynomials are BC-only content. AB students meet only the tangent line, which is the first-degree case."
  - question: "What is a Maclaurin polynomial?"
    answer: "A Taylor polynomial centred at x = 0. The formula is the same with a = 0, so the powers are simply x, x², x³, …"
  - question: "Is a third-degree polynomial the same as the first three nonzero terms?"
    answer: "Not always. Degree counts the highest power. For sin x about 0 the third-degree polynomial is x − x³/6, which has only two nonzero terms. Read the question carefully."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Taylor polynomials are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Higher-order derivatives | 3.6 | Finding f″, f‴, f⁽⁴⁾, … at the centre |
| Local linearity (tangent line approximation) | 4.6 | The tangent line is the degree-1 case of everything on this page |
| Factorials | — | Each coefficient divides by n! (with 0! = 1) |
| Alternating series error bound | 10.10 | Used again in Topic 10.12 to judge Taylor estimates |

If any of these is shaky, see the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) or the previous topic, the [alternating series error bound](/advanced-course-resources/calculus-bc/10-10-alternating-series-error-bound-study-guide/).

Notation on this page: f⁽ⁿ⁾(a) is the nth derivative of f evaluated at x = a, with f⁽⁰⁾ = f. Pₙ(x) is the Taylor polynomial of degree n (at most n).

## From a tangent line to a better polynomial

In Topic 4.6 you approximated f near x = a with the tangent line

**L(x) = f(a) + f′(a)(x − a)**

The line has the **same value** and the **same slope** as f at x = a. Close to a, that is good. But a line cannot bend, so the error grows quickly once the graph curves.

The idea of a Taylor polynomial is simple: match **more derivatives**. A quadratic can also match f″(a), so it bends the same way as f at a. A cubic can match f‴(a) too, and so on. Each extra matching derivative makes the polynomial hug the graph over a wider stretch near a.

## The coefficient formula, and where n! comes from

Write a polynomial centred at x = a:

P(x) = c₀ + c₁(x − a) + c₂(x − a)² + c₃(x − a)³ + … + cₙ(x − a)ⁿ

We want P⁽ᵏ⁾(a) = f⁽ᵏ⁾(a) for k = 0, 1, 2, …, n.

- At x = a, every term except c₀ is zero. So P(a) = c₀, and we need **c₀ = f(a)**.
- Differentiate once: P′(x) = c₁ + 2c₂(x − a) + 3c₃(x − a)² + … At x = a, P′(a) = c₁. So **c₁ = f′(a)**.
- Differentiate again: P″(x) = 2c₂ + 3 · 2 c₃(x − a) + … So P″(a) = 2c₂, and **c₂ = f″(a)/2**.
- Once more: P‴(a) = 3 · 2 · 1 · c₃ = 6c₃, so **c₃ = f‴(a)/6 = f‴(a)/3!**.

The pattern: differentiating (x − a)ᵏ exactly k times gives k · (k − 1) · … · 1 = **k!**, and every lower power has already vanished, while every higher power still contains a factor (x − a) that is zero at a. So

> **cₖ = f⁽ᵏ⁾(a) / k!**

and the **nth-degree Taylor polynomial for f about x = a** is

> **Pₙ(x) = f(a) + f′(a)(x − a) + f″(a)/2! · (x − a)² + f‴(a)/3! · (x − a)³ + … + f⁽ⁿ⁾(a)/n! · (x − a)ⁿ**

When a = 0 it is often called a **Maclaurin polynomial**. Notice that P₁(x) is exactly the tangent line.

**Reading backwards.** The formula also works in reverse. If you are given a Taylor polynomial about x = a, then

**f⁽ᵏ⁾(a) = k! × (coefficient of (x − a)ᵏ)**

For example, if the third-degree Taylor polynomial for f about x = −2 is 5 + 3(x + 2) − 2(x + 2)² + ½(x + 2)³, then f(−2) = 5, f′(−2) = 3, f″(−2) = 2! × (−2) = −4 and f‴(−2) = 3! × ½ = 3. Note that x + 2 = x − (−2), so the centre is −2, not 2.

## Seeing the approximation improve

For f(x) = cos x about x = 0, the derivatives at 0 cycle through 1, 0, −1, 0, 1, 0, −1, … So the odd-power coefficients are all zero and

- P₂(x) = 1 − x²/2
- P₄(x) = 1 − x²/2 + x⁴/24
- P₆(x) = 1 − x²/2 + x⁴/24 − x⁶/720

<figure>
<svg viewBox="0 0 580 360" role="img" aria-labelledby="cos-title cos-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cos-title">y = cos x and its Taylor polynomials of degree 2, 4 and 6 about x = 0</title>
<desc id="cos-desc">Graph for x from −3.5 to 3.5 and y from −2 to 1.5. The solid curve is cos x. The dashed parabola P2 = 1 − x²/2 matches cos x near 0 but drops below −2 by about x = ±2.45. The dotted curve P4 stays close to cos x for x between about −1.5 and 1.5, then turns upward and reaches about 1.13 at x = ±3.5. The dash-dot curve P6 follows cos x closely for x between about −2.5 and 2.5 and ends near −1.43 at x = ±3.5. All four curves pass through the point (0, 1) and agree closely near it.</desc>
<rect x="0" y="0" width="580" height="360" fill="#ffffff"/>
<line x1="35" y1="150" x2="560" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="290" y1="315" x2="290" y2="22" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="80" y1="146" x2="80" y2="154"/><line x1="150" y1="146" x2="150" y2="154"/><line x1="220" y1="146" x2="220" y2="154"/><line x1="360" y1="146" x2="360" y2="154"/><line x1="430" y1="146" x2="430" y2="154"/><line x1="500" y1="146" x2="500" y2="154"/>
<line x1="286" y1="70" x2="294" y2="70"/><line x1="286" y1="230" x2="294" y2="230"/><line x1="286" y1="310" x2="294" y2="310"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="168">−3</text><text x="150" y="168">−2</text><text x="220" y="168">−1</text><text x="360" y="168">1</text><text x="430" y="168">2</text><text x="500" y="168">3</text>
<text x="565" y="154" text-anchor="start">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="282" y="66">1</text><text x="282" y="234">−1</text><text x="282" y="314">−2</text><text x="282" y="22">y</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="45.0,224.9 52.0,227.3 59.0,229.0 66.0,229.9 73.0,229.9 80.0,229.2 87.0,227.7 94.0,225.4 101.0,222.3 108.0,218.6 115.0,214.1 122.0,209.0 129.0,203.3 136.0,197.1 143.0,190.4 150.0,183.3 157.0,175.9 164.0,168.2 171.0,160.3 178.0,152.3 185.0,144.3 192.0,136.4 199.0,128.6 206.0,121.0 213.0,113.7 220.0,106.8 227.0,100.3 234.0,94.3 241.0,88.8 248.0,84.0 255.0,79.8 262.0,76.3 269.0,73.6 276.0,71.6 283.0,70.4 290.0,70.0 297.0,70.4 304.0,71.6 311.0,73.6 318.0,76.3 325.0,79.8 332.0,84.0 339.0,88.8 346.0,94.3 353.0,100.3 360.0,106.8 367.0,113.7 374.0,121.0 381.0,128.6 388.0,136.4 395.0,144.3 402.0,152.3 409.0,160.3 416.0,168.2 423.0,175.9 430.0,183.3 437.0,190.4 444.0,197.1 451.0,203.3 458.0,209.0 465.0,214.1 472.0,218.6 479.0,222.3 486.0,225.4 493.0,227.7 500.0,229.2 507.0,229.9 514.0,229.9 521.0,229.0 528.0,227.3 535.0,224.9"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.8" stroke-dasharray="9 5" points="122.0,300.4 129.0,281.6 136.0,263.6 143.0,246.4 150.0,230.0 157.0,214.4 164.0,199.6 171.0,185.6 178.0,172.4 185.0,160.0 192.0,148.4 199.0,137.6 206.0,127.6 213.0,118.4 220.0,110.0 227.0,102.4 234.0,95.6 241.0,89.6 248.0,84.4 255.0,80.0 262.0,76.4 269.0,73.6 276.0,71.6 283.0,70.4 290.0,70.0 297.0,70.4 304.0,71.6 311.0,73.6 318.0,76.4 325.0,80.0 332.0,84.4 339.0,89.6 346.0,95.6 353.0,102.4 360.0,110.0 367.0,118.4 374.0,127.6 381.0,137.6 388.0,148.4 395.0,160.0 402.0,172.4 409.0,185.6 416.0,199.6 423.0,214.4 430.0,230.0 437.0,246.4 444.0,263.6 451.0,281.6 458.0,300.4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="2 4" points="45.0,59.8 52.0,87.0 59.0,110.3 66.0,130.1 73.0,146.6 80.0,160.0 87.0,170.6 94.0,178.7 101.0,184.5 108.0,188.1 115.0,189.8 122.0,189.8 129.0,188.3 136.0,185.5 143.0,181.6 150.0,176.7 157.0,171.0 164.0,164.6 171.0,157.8 178.0,150.6 185.0,143.1 192.0,135.6 199.0,128.1 206.0,120.7 213.0,113.5 220.0,106.7 227.0,100.2 234.0,94.2 241.0,88.8 248.0,84.0 255.0,79.8 262.0,76.3 269.0,73.6 276.0,71.6 283.0,70.4 290.0,70.0 297.0,70.4 304.0,71.6 311.0,73.6 318.0,76.3 325.0,79.8 332.0,84.0 339.0,88.8 346.0,94.2 353.0,100.2 360.0,106.7 367.0,113.5 374.0,120.7 381.0,128.1 388.0,135.6 395.0,143.1 402.0,150.6 409.0,157.8 416.0,164.6 423.0,171.0 430.0,176.7 437.0,181.6 444.0,185.5 451.0,188.3 458.0,189.8 465.0,189.8 472.0,188.1 479.0,184.5 486.0,178.7 493.0,170.6 500.0,160.0 507.0,146.6 514.0,130.1 521.0,110.3 528.0,87.0 535.0,59.8"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="10 4 2 4" points="45.0,264.0 52.0,258.6 59.0,253.8 66.0,249.4 73.0,245.2 80.0,241.0 87.0,236.7 94.0,232.3 101.0,227.5 108.0,222.4 115.0,216.9 122.0,211.0 129.0,204.8 136.0,198.1 143.0,191.1 150.0,183.8 157.0,176.2 164.0,168.4 171.0,160.4 178.0,152.4 185.0,144.4 192.0,136.4 199.0,128.6 206.0,121.0 213.0,113.7 220.0,106.8 227.0,100.3 234.0,94.3 241.0,88.8 248.0,84.0 255.0,79.8 262.0,76.3 269.0,73.6 276.0,71.6 283.0,70.4 290.0,70.0 297.0,70.4 304.0,71.6 311.0,73.6 318.0,76.3 325.0,79.8 332.0,84.0 339.0,88.8 346.0,94.3 353.0,100.3 360.0,106.8 367.0,113.7 374.0,121.0 381.0,128.6 388.0,136.4 395.0,144.4 402.0,152.4 409.0,160.4 416.0,168.4 423.0,176.2 430.0,183.8 437.0,191.1 444.0,198.1 451.0,204.8 458.0,211.0 465.0,216.9 472.0,222.4 479.0,227.5 486.0,232.3 493.0,236.7 500.0,241.0 507.0,245.2 514.0,249.4 521.0,253.8 528.0,258.6 535.0,264.0"/>
<rect x="345" y="12" width="165" height="70" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<g stroke="#1d2b44" fill="none">
<line x1="355" y1="25" x2="390" y2="25" stroke-width="3"/>
<line x1="355" y1="40" x2="390" y2="40" stroke-width="1.8" stroke-dasharray="9 5"/>
<line x1="355" y1="55" x2="390" y2="55" stroke-width="2" stroke-dasharray="2 4"/>
<line x1="355" y1="70" x2="390" y2="70" stroke-width="1.5" stroke-dasharray="10 4 2 4"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="398" y="29">cos x (solid)</text>
<text x="398" y="44">P₂ (dashed)</text>
<text x="398" y="59">P₄ (dotted)</text>
<text x="398" y="74">P₆ (dash-dot)</text>
</g>
</svg>
<figcaption>Figure 1. cos x (solid) with P₂ (dashed), P₄ (dotted) and P₆ (dash-dot) about x = 0. All four agree near the centre. As the degree rises, the polynomial stays close to cos x over a wider interval.</figcaption>
</figure>

The table shows the same story in numbers (values to 4 decimal places):

| x | P₂(x) | P₄(x) | P₆(x) | cos x |
|---|---|---|---|---|
| 0.5 | 0.875 | 0.8776 | 0.8776 | 0.8776 |
| 1 | 0.5 | 0.5417 | 0.5403 | 0.5403 |
| 2 | −1 | −0.3333 | −0.4222 | −0.4161 |
| 3 | −3.5 | −0.125 | −1.1375 | −0.9900 |

Two lessons:

1. **Near the centre, low degrees already work well.** At x = 0.5, P₄ matches cos x to 4 decimal places.
2. **Far from the centre, you need higher degrees,** and even P₆ is poor at x = 3.

"In many cases" the polynomials approach f as the degree increases, but not always. For f(x) = 1/(1 + x) about 0, the polynomials are 1 − x + x² − x³ + … At x = 0.5 their values 1, 0.5, 0.75, 0.625, 0.6875, … close in on f(0.5) = 2/3. At x = 2 they give 1, −1, 3, −5, 11, … and never settle near f(2) = 1/3. Topic 10.13 explains exactly where this happens (the interval of convergence).

## Worked example 1: ln x about x = 2

**Question.** Find the third-degree Taylor polynomial for f(x) = ln x about x = 2. Use it to approximate ln 2.2, giving your answer in terms of ln 2 and as a decimal.

1. **Derivatives.** f(x) = ln x, f′(x) = 1/x, f″(x) = −1/x², f‴(x) = 2/x³.
2. **Evaluate at the centre x = 2.** f(2) = ln 2, f′(2) = 1/2, f″(2) = −1/4, f‴(2) = 2/8 = 1/4.
3. **Divide by the factorials.**
   - c₀ = ln 2
   - c₁ = (1/2)/1! = 1/2
   - c₂ = (−1/4)/2! = −1/8
   - c₃ = (1/4)/3! = 1/24
4. **Write the polynomial.**
   **P₃(x) = ln 2 + ½(x − 2) − ⅛(x − 2)² + (1/24)(x − 2)³**
5. **Approximate at x = 2.2,** so x − 2 = 0.2.
   - ½(0.2) = 0.1
   - −⅛(0.04) = −0.005
   - (1/24)(0.008) = 1/3000 ≈ 0.000333
   - P₃(2.2) = ln 2 + 0.1 − 0.005 + 0.000333 = **ln 2 + 143/1500 ≈ 0.788481**, using ln 2 ≈ 0.693147.

**Checks.**
- *Matching:* P₃(2) = ln 2 and P₃′(2) = ½, as required.
- *Calculator comparison (where allowed):* ln 2.2 ≈ 0.788457, so the estimate is off by about 0.000023. The tangent line alone gives ln 2 + 0.1 ≈ 0.793147, off by about 0.0047. The extra terms improved the estimate by a factor of about 200.
- *Common slip:* forgetting the factorials gives ln 2 + 0.1 − 0.01 + 0.002 ≈ 0.785147, which is off by about 0.0033, far worse than the correct P₃.

## Worked example 2: a polynomial from a table (no formula for f)

On the exam you often do not get a formula. You get derivative values, and you build the polynomial from them.

**Context.** The depth of water in a fictional reservoir is D(t) metres, where t is hours after midnight. D has derivatives of all orders. At t = 2 the following values are known.

| t | D(t) (m) | D′(t) (m/h) | D″(t) (m/h²) | D‴(t) (m/h³) |
|---|---|---|---|---|
| 2 | 12 | −0.8 | 0.3 | −0.06 |

(a) Write the third-degree Taylor polynomial for D about t = 2.
(b) Use it to estimate the depth at t = 2.5.
(c) What is the coefficient of (t − 2)² telling you?

1. **(a) Coefficients.** c₀ = 12; c₁ = −0.8; c₂ = 0.3/2 = 0.15; c₃ = −0.06/6 = −0.01.
   **P₃(t) = 12 − 0.8(t − 2) + 0.15(t − 2)² − 0.01(t − 2)³**
2. **(b) Evaluate at t = 2.5** (so t − 2 = 0.5):
   - 12
   - −0.8(0.5) = −0.4
   - 0.15(0.25) = 0.0375
   - −0.01(0.125) = −0.00125
   - P₃(2.5) = **11.63625**, so D(2.5) ≈ **11.64 m**.
3. **(c) Interpret.** The coefficient 0.15 is D″(2)/2. Since D″(2) > 0, the depth is falling (D′ < 0) but its rate of fall is slowing at t = 2. The quadratic term bends the estimate up a little compared with the tangent line, which gives 11.6 m.

**Checks.** *Size:* the depth starts at 12 m and falls at about 0.8 m/h, so after half an hour roughly 11.6 m is expected; the small corrections (+0.0375, −0.00125) shrink fast, as they should close to the centre. *Units:* each term is in metres, because D⁽ᵏ⁾ is in m/hᵏ and (t − 2)ᵏ is in hᵏ.

## Degree versus number of terms

A question may ask for "the third-degree Taylor polynomial" or for "the first three nonzero terms". These can differ.

- For sin x about 0, the derivatives at 0 are 0, 1, 0, −1, 0, … So P₃(x) = x − x³/6, which has **two** nonzero terms. P₄ is the same polynomial, because the x⁴ coefficient is 0.
- The first three nonzero terms are x − x³/6 + x⁵/120, which is P₅.

Always check which one is asked for.

## Common misconceptions

- **Forgetting the factorial.** The coefficient of (x − a)³ is f‴(a)/3! = f‴(a)/6, not f‴(a) and not f‴(a)/3.
- **Using x instead of (x − a).** About x = 2 the powers are (x − 2)ᵏ, not xᵏ. Only a Maclaurin polynomial (a = 0) uses plain powers of x.
- **Evaluating derivatives at the wrong point.** The coefficients use f⁽ᵏ⁾(a), the values at the **centre**, never at the point you are estimating.
- **Sign of the centre.** (x + 3) means the centre is x = −3.
- **Confusing the coefficient with the derivative when reading backwards.** If the coefficient of (x − a)² is 4, then f″(a) = 2! × 4 = 8, not 4.
- **Thinking a Taylor polynomial is good everywhere.** It is built to fit at the centre. Far away it can be badly wrong, as P₂(3) = −3.5 for cos x shows.
- **Mixing up degree and number of terms** (see the section above).
- **Using degrees for trig functions.** The derivative rules for sin and cos need radians.

## Where this leads

An estimate is only useful if you know how far off it might be. The next topic, [Topic 10.12, the Lagrange error bound](/advanced-course-resources/calculus-bc/10-12-lagrange-error-bound-study-guide/), gives a guaranteed limit on |f(x) − Pₙ(x)|. After that, Topic 10.13 finds where the infinite version (a power series) converges, and Topic 10.14 writes full Taylor and Maclaurin series. See the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/10-11-finding-taylor-polynomial-approximations-functions-checklist/) to consolidate.
