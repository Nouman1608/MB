---
resourceId: "mb-ap-calcab-3.2-study-guide"
title: "Implicit Differentiation: Study Guide (Calculus AB 3.2)"
description: "Learn to find dy/dx for curves where y is not written on its own, using the chain rule on every y term, then use the result for tangent lines and horizontal or vertical tangents."
course: "calculus-ab"
unit: 3
topics: ["3.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The chain rule (Topic 3.1)"
  - "The product and quotient rules (Topics 2.8 and 2.9)"
  - "Derivatives of sin x, cos x, eˣ and ln x (Topic 2.7)"
  - "Writing the equation of a line through a point with a given slope"
prerequisiteResources: ["mb-ap-calcab-3.1-study-guide"]
learningObjectives:
  - "Explain why every term containing y gains a factor dy/dx when you differentiate with respect to x"
  - "Differentiate an equation in x and y term by term, using the chain, product and quotient rules where needed"
  - "Rearrange the result to make dy/dx the subject"
  - "Evaluate dy/dx at a point on a curve and write the tangent line there"
  - "Find points on a curve where the tangent line is horizontal or vertical"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every derivative here without a calculator. Angles are in radians. Leave answers exact, for example −1/e rather than −0.368."
related: ["mb-ap-calcab-3.2-revision-notes", "mb-ap-calcab-3.2-practice", "mb-ap-calcab-3.2-checklist"]
next: "mb-ap-calcab-3.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Implicit differentiation is the chain rule applied to y, which is treated as an unknown function of x."
  - "d/dx [y³] = 3y² · dy/dx, d/dx [sin y] = cos y · dy/dx, d/dx [e^y] = e^y · dy/dx. Every y term gains a factor dy/dx."
  - "Terms such as xy need the product rule: d/dx [xy] = y + x · dy/dx."
  - "Method: differentiate both sides, collect the dy/dx terms, factor out dy/dx, divide. The answer usually contains both x and y."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 3.2 is common content, so the same page serves AB and BC students."
  - question: "Why does the answer contain y as well as x?"
    answer: "Because a curve such as a circle can pass through two points with the same x. The slope can be different at each, so the formula needs y to tell them apart."
  - question: "Do I have to solve for y first?"
    answer: "No. Often you cannot. Implicit differentiation works directly on the equation as given."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so derivatives are written in a compact form:

- **dy/dx** is the derivative of y with respect to x. Some books write y′; both are accepted.
- **d/dx [ … ]** means "differentiate the bracket with respect to x".
- **e^y** means e raised to the power y; **y³** means y cubed.

## Explicit and implicit equations

An equation such as y = x³ − 2x is **explicit**: y is on its own, written as a formula in x. You already know how to differentiate it.

An equation such as x² + y² = 169 (a circle of radius 13) is **implicit**: x and y are mixed together. Near most points, part of the curve is still the graph of a function y(x), so it has a slope. But you may not be able, or want, to solve for y.

For this circle you *can* solve: the top half is y = √(169 − x²). The chain rule gives dy/dx = −x/√(169 − x²), and at x = 5 that is −5/12. The bottom half needs a second formula, y = −√(169 − x²).

Implicit differentiation finds both slopes at once, without solving.

## The key idea: y is a function of x

Treat y as an unknown function of x, y = y(x). Then any expression in y is a **composite**: an outer function applied to the inner function y(x). The chain rule from [Topic 3.1](/advanced-course-resources/calculus-ab/3-1-chain-rule-study-guide/) says: differentiate the outer function, then multiply by the derivative of the inside. The derivative of the inside is **dy/dx**.

| Expression | Rule used | d/dx of it |
|---|---|---|
| x³ | power rule | 3x² |
| y³ | chain rule (outer u³, inner y) | 3y² · dy/dx |
| sin y | chain rule | cos y · dy/dx |
| e^y | chain rule | e^y · dy/dx |
| ln y (y > 0) | chain rule | (1/y) · dy/dx |
| xy | product rule, then chain rule on y | y + x · dy/dx |
| y/x | quotient rule | (x · dy/dx − y)/x² |
| a constant, such as 169 | constant rule | 0 |

The pattern is simple: **differentiate as if y were x, then attach dy/dx**. For x terms there is nothing to attach, because dx/dx = 1.

### Back to the circle

Differentiate both sides of x² + y² = 169 with respect to x:

2x + 2y · dy/dx = 0, so **dy/dx = −x/y**.

At (5, 12): dy/dx = −5/12, matching the explicit answer. At (5, −12): dy/dx = −5/(−12) = **+5/12**. One formula, both halves of the circle.

## The method in five steps

1. **Differentiate both sides** of the equation with respect to x, term by term.
2. **Attach dy/dx** to the derivative of every term containing y. Use the product or quotient rule where x and y are multiplied or divided.
3. **Collect** all terms containing dy/dx on one side and everything else on the other.
4. **Factor out** dy/dx.
5. **Divide** to make dy/dx the subject.

To find a slope at a point, **check the point is on the curve**, then substitute **both** coordinates.

## Why the slope depends on y: a picture

<figure>
<svg viewBox="0 0 560 340" role="img" aria-labelledby="ell-title ell-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ell-title">The ellipse x² + 4y² = 25 with tangent lines at (3, 2) and (3, −2)</title>
<desc id="ell-desc">An ellipse centred at the origin, crossing the x-axis at −5 and 5 and the y-axis at −2.5 and 2.5. Two points on it share x = 3: P at (3, 2) on the upper half and Q at (3, −2) on the lower half, joined by a dotted vertical guide line. At P a dashed tangent line slopes downward to the right with slope −3/8. At Q a dash-dot tangent line slopes upward to the right with slope +3/8. The two tangents are mirror images in the x-axis.</desc>
<rect x="0" y="0" width="560" height="340" fill="#ffffff"/>
<line x1="20" y1="170" x2="545" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="280" y1="325" x2="280" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="80" y1="166" x2="80" y2="174"/><line x1="160" y1="166" x2="160" y2="174"/><line x1="400" y1="166" x2="400" y2="174"/><line x1="480" y1="166" x2="480" y2="174"/>
<line x1="276" y1="90" x2="284" y2="90"/><line x1="276" y1="250" x2="284" y2="250"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="74" y="188">−5</text><text x="154" y="188">−3</text><text x="408" y="188">3</text><text x="488" y="188">5</text>
<text x="540" y="162">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="272" y="94">2</text><text x="272" y="254">−2</text><text x="272" y="22">y</text>
</g>
<ellipse cx="280" cy="170" rx="200" ry="100" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="400" y1="90" x2="400" y2="250" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 4"/>
<line x1="300" y1="52.5" x2="520" y2="135" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="300" y1="287.5" x2="520" y2="205" stroke="#1d2b44" stroke-width="2" stroke-dasharray="10 4 2 4"/>
<circle cx="400" cy="90" r="5" fill="#1d2b44"/>
<circle cx="400" cy="250" r="5" fill="#1d2b44"/>
<g font-size="13" fill="#1d2b44">
<text x="408" y="80">P (3, 2): slope −3/8</text>
<text x="408" y="272">Q (3, −2): slope +3/8</text>
<text x="40" y="40">x² + 4y² = 25</text>
<text x="40" y="58" font-size="12">dy/dx = −x/(4y)</text>
</g>
</svg>
<figcaption>Figure 1. The ellipse x² + 4y² = 25 is not the graph of a function: the vertical line x = 3 meets it twice. The tangent at P (dashed) falls to the right; the tangent at Q (dash-dot) rises. Knowing x = 3 alone cannot fix the slope; the y-coordinate is needed. Axes are unitless.</figcaption>
</figure>

Differentiating x² + 4y² = 25 gives 2x + 8y · dy/dx = 0, so dy/dx = −x/(4y). At P (3, 2): −3/8. At Q (3, −2): +3/8. The y in the formula is exactly what tells the two points apart.

## Horizontal and vertical tangent lines

Implicit derivatives usually come out as a fraction, dy/dx = N/D, where N and D contain x and y.

- **Horizontal tangent:** dy/dx = 0. Set **N = 0** (with D ≠ 0), and solve together with the curve's equation.
- **Vertical tangent:** the slope is undefined because the tangent line is vertical. Set **D = 0** (with N ≠ 0), and solve together with the curve's equation.
- If N and D are **both 0** at a point, the formula gives 0/0 and does not decide the slope there. This needs further analysis.

A solution of N = 0 that is not on the curve is not an answer. Always substitute back into the original equation.

## Worked example 1: slope and tangent line at a point

**Question.** The curve x²y + y³ = 10 passes through (1, 2). Find dy/dx, the slope at (1, 2), and the tangent line there.

1. **Check the point.** 1² × 2 + 2³ = 2 + 8 = 10. ✓
2. **Differentiate both sides.** x²y is a product, so use the product rule; y³ needs the chain rule; 10 is a constant.
   2x · y + x² · dy/dx + 3y² · dy/dx = 0
3. **Collect.** Keep the dy/dx terms on the left: x² · dy/dx + 3y² · dy/dx = −2xy.
4. **Factor.** dy/dx · (x² + 3y²) = −2xy.
5. **Divide.** **dy/dx = −2xy/(x² + 3y²)**.
6. **Substitute both coordinates.** At (1, 2): dy/dx = −2(1)(2)/(1 + 3 × 4) = **−4/13**.
7. **Tangent line:** **y = 2 − (4/13)(x − 1)**.

**Check.** Solving the equation numerically for y at x = 1.001 gives y ≈ 1.999692, so the slope is about (1.999692 − 2)/0.001 ≈ −0.308. And −4/13 ≈ −0.3077. They agree.

**Common slip.** Writing d/dx [x²y] = 2x · dy/dx (differentiating both factors at once) or 2xy (forgetting the second term). The product rule gives two terms.

## Worked example 2: horizontal and vertical tangents

**Question.** For the curve x² − 2xy + 3y² = 18, find dy/dx. Then find every point where the tangent line is horizontal and every point where it is vertical.

1. **Differentiate.** The middle term −2xy is a product: d/dx [−2xy] = −2y − 2x · dy/dx.
   2x − 2y − 2x · dy/dx + 6y · dy/dx = 0
2. **Collect and factor.** dy/dx · (6y − 2x) = 2y − 2x.
3. **Divide and simplify** (divide top and bottom by −2):
   **dy/dx = (x − y)/(x − 3y)**
4. **Horizontal tangents: N = 0**, so y = x. Substitute into the curve: x² − 2x² + 3x² = 2x² = 18, so x = ±3.
   Points: **(3, 3) and (−3, −3)**. Check D: x − 3y = −6 and 6, both nonzero. ✓
5. **Vertical tangents: D = 0**, so x = 3y. Substitute: 9y² − 6y² + 3y² = 6y² = 18, so y = ±√3.
   Points: **(3√3, √3) and (−3√3, −√3)**. Check N: x − y = ±2√3, nonzero. ✓

**Interpretation.** The curve is a tilted ellipse. Its highest point is (3, 3) and its lowest is (−3, −3). Its furthest-right point is (3√3, √3) ≈ (5.20, 1.73).

## Worked example 3: an exponential term

**Question.** The curve e^y + xy = e passes through (0, 1). Find the slope of the curve there and the tangent line.

1. **Check the point.** e¹ + 0 × 1 = e. ✓
2. **Differentiate.** e^y needs the chain rule; xy needs the product rule; e is a constant, so its derivative is **0**.
   e^y · dy/dx + y + x · dy/dx = 0
3. **Collect and factor.** dy/dx · (e^y + x) = −y.
4. **Divide.** **dy/dx = −y/(e^y + x)**.
5. **Substitute (0, 1).** dy/dx = −1/(e + 0) = **−1/e**.
6. **Tangent line:** **y = 1 − x/e**.

**Common slip.** Treating the e on the right as a variable and writing its derivative as e. It is a number, about 2.718, so its derivative is 0.

## Common misconceptions

- **Forgetting dy/dx on a y term.** d/dx [y²] = 2y · dy/dx, not 2y. Without the factor, dy/dx disappears and the algebra cannot be finished.
- **Skipping the product rule on xy.** d/dx [xy] = y + x · dy/dx. Writing just dy/dx, or just y, loses a term.
- **Differentiating a constant to something nonzero.** The right side 10, 25 or e becomes 0.
- **Substituting only x.** dy/dx usually contains y as well. Use both coordinates of a point that is on the curve.
- **Leaving dy/dx on both sides.** Collect every dy/dx term on one side and factor before dividing.
- **Dividing by zero without noticing.** If the denominator of dy/dx is 0 at a point, the tangent may be vertical there. Check the numerator too.
- **Thinking implicit differentiation needs a function.** The curve need not pass the vertical line test. The method gives the slope of the tangent at each point where one exists.
- **Accepting a point that is not on the curve.** Solving N = 0 alone can give points off the curve. Substitute back.

## Where this leads

The same chain-rule move appears again and again. Topic 3.3, [differentiating inverse functions](/advanced-course-resources/calculus-ab/3-3-differentiating-inverse-functions-study-guide/), rewrites y = f⁻¹(x) as f(y) = x and differentiates implicitly. Topic 3.6 covers second and higher derivatives; when dy/dx contains y, you find the next derivative by differentiating implicitly again. In Unit 4, related rates differentiate implicitly with respect to time t instead of x. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/3-2-implicit-differentiation-checklist/) to consolidate.
