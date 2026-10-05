---
resourceId: "mb-ap-calcab-6.4-study-guide"
title: "The Fundamental Theorem of Calculus and Accumulation Functions: Study Guide (Calculus AB 6.4)"
description: "Learn how a definite integral with a variable upper limit defines a new function, why its derivative is the integrand, and how to apply this with the chain rule."
course: "calculus-ab"
unit: 6
topics: ["6.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums and as signed area (Topics 6.1 to 6.3)"
  - "The chain rule (Topic 3.1)"
  - "Tangent lines and local linear approximation (Topic 4.6)"
  - "Areas of rectangles, triangles and trapezoids"
prerequisiteResources: ["mb-ap-calcab-6.3-study-guide"]
learningObjectives:
  - "Describe an accumulation function g(x) = ∫ (a to x) f(t) dt as a new function whose input is the upper limit"
  - "Find values of an accumulation function from a graph of f using signed areas"
  - "State the Fundamental Theorem of Calculus in the form d/dx ∫ (a to x) f(t) dt = f(x), with its continuity condition, and explain why it holds"
  - "Differentiate integrals whose lower limit is x, or whose upper limit is a function of x, using the chain rule"
  - "Use the theorem to find derivatives, tangent lines and approximations for functions defined by integrals"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Areas come from geometry; derivatives come from the theorem."
related: ["mb-ap-calcab-6.4-revision-notes", "mb-ap-calcab-6.4-practice", "mb-ap-calcab-6.4-checklist"]
next: "mb-ap-calcab-6.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "g(x) = ∫ (a to x) f(t) dt is a function of x: it gives the signed area under f from a to x. It always has g(a) = 0."
  - "If f is continuous on an interval containing a, then g′(x) = f(x). Differentiating the accumulation function gives back the integrand."
  - "Lower limit x: d/dx ∫ (x to b) f(t) dt = −f(x). Upper limit u(x): d/dx ∫ (a to u(x)) f(t) dt = f(u(x)) · u′(x)."
  - "So every continuous function has an antiderivative, even when no formula for it can be written with familiar functions."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.4 is common content, so the same page serves AB and BC students."
  - question: "Why is the variable inside the integral t and not x?"
    answer: "x is already used as the upper limit, the input of the new function. The variable inside only labels the horizontal axis while the area is collected, so it needs a different letter. Any letter other than x works."
  - question: "Is this the same as evaluating an integral with an antiderivative?"
    answer: "No. This topic is about the derivative of an accumulation function. Using an antiderivative to evaluate ∫ (a to b) f(x) dx is the other form of the theorem, in Topic 6.7."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to x) f(t) dt** means the definite integral of f(t) from t = a to t = x. On paper, write a at the bottom of the integral sign and x at the top. **d/dx** means "the derivative with respect to x of".

## An integral that makes a new function

In Topic 6.3, ∫ (a to b) f(x) dx was one number: the limit of Riemann sums on a fixed interval. Now fix the left end a but let the right end move. Each position x of the right end gives its own signed area, so the area becomes a function of x:

**g(x) = ∫ (a to x) f(t) dt**

This is an **accumulation function**. Read it as "the signed area under f from a up to x". In context it is the net change accumulated from time a up to time x.

Three things to notice:

- **The input is the upper limit.** g takes a number x and returns an area.
- **The letter t is a dummy variable.** It labels the horizontal axis while the area is being collected. ∫ (a to x) f(t) dt and ∫ (a to x) f(s) ds are the same function of x. Do not use x inside, because x already means the right end.
- **g(a) = 0.** An interval from a to a has no width, so no area.

**Two quick examples with geometry.**

- f(t) = 2 and a = 0. The region from 0 to x (for x > 0) is a rectangle 2 high and x wide. So ∫ (0 to x) 2 dt = 2x. The derivative of 2x is **2**, which is f(x).
- f(t) = t and a = 0. For x > 0 the region is a triangle with base x and height x. So ∫ (0 to x) t dt = x²/2. The derivative of x²/2 is **x**, which is f(x).

In both cases, differentiating the area function gave back the function you were adding up. That is not a coincidence.

**Why this matters.** Some functions are best defined by an integral. For example, for x > 0 the natural logarithm can be defined as ln x = ∫ (1 to x) (1/t) dt. Other integrands, such as sin(t²), have no antiderivative that can be written with familiar functions, yet ∫ (0 to x) sin(t²) dt is a perfectly good function. The theorem below lets you work with such functions anyway.

## The Fundamental Theorem of Calculus (accumulation form)

> **Theorem.** If f is continuous on an interval that contains a, then for every x in that interval
> **d/dx ∫ (a to x) f(t) dt = f(x)**.

In words: **the rate at which area accumulates equals the height of the curve at the moving edge.**

The theorem links the two halves of the course. Differentiation measures rate of change; integration measures accumulation. The theorem says that differentiating an accumulation gives back the rate that was accumulated.

### Why it is true

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="ftc-title ftc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ftc-title">Why the derivative of an accumulation function is the integrand</title>
<desc id="ftc-desc">The graph of a positive, continuous function y = f(t) is drawn against a horizontal t-axis. The region under the curve from t = a to t = x is shaded with diagonal hatching and labelled g(x), the accumulated area. Immediately to its right, a thin strip from t = x to t = x + h is shaded with dots. The strip is almost a rectangle whose height is f(x) and whose width is h, so its area is about f(x) times h. A label points to the height f(x) at the left edge of the strip.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<defs><pattern id="ftc-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="ftc-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="112.0,250 112.0,156.9 117.2,154.7 122.4,152.6 127.6,150.5 132.8,148.4 138.0,146.4 143.2,144.4 148.4,142.4 153.6,140.4 158.8,138.5 164.0,136.6 169.2,134.7 174.4,132.9 179.6,131.1 184.8,129.3 190.0,127.5 195.2,125.8 200.4,124.1 205.6,122.4 210.8,120.7 216.0,119.1 221.2,117.5 226.4,115.9 231.6,114.4 236.8,112.9 242.0,111.4 247.2,109.9 252.4,108.5 257.6,107.1 262.8,105.7 268.0,104.4 273.2,103.1 278.4,101.8 283.6,100.5 288.8,99.3 294.0,98.1 299.2,96.9 304.4,95.8 309.6,94.7 314.8,93.6 320.0,92.5 320.0,250" fill="url(#ftc-hatch)" stroke="#1d2b44" stroke-width="1.2"/>
<polygon points="320.0,250 320.0,92.5 321.2,92.3 322.3,92.0 323.5,91.8 324.7,91.6 325.8,91.3 327.0,91.1 328.2,90.9 329.4,90.7 330.5,90.4 331.7,90.2 332.9,90.0 334.0,89.8 335.2,89.5 336.4,89.3 337.6,89.1 338.7,88.9 339.9,88.7 341.1,88.5 342.2,88.3 343.4,88.1 344.6,87.9 345.7,87.6 346.9,87.4 348.1,87.2 349.2,87.0 350.4,86.8 351.6,86.6 352.8,86.4 353.9,86.2 355.1,86.1 356.3,85.9 357.4,85.7 358.6,85.5 359.8,85.3 361.0,85.1 362.1,84.9 363.3,84.7 364.5,84.5 365.6,84.4 366.8,84.2 366.8,250" fill="url(#ftc-dots)" stroke="#1d2b44" stroke-width="2"/>
<line x1="40" y1="250" x2="500" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="250" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<text x="505" y="246" font-size="12" fill="#1d2b44">t</text><text x="66" y="34" font-size="12" fill="#1d2b44">y</text>
<polyline points="60.0,180.0 65.2,177.6 70.4,175.2 75.6,172.8 80.8,170.4 86.0,168.1 91.2,165.8 96.4,163.5 101.6,161.3 106.8,159.1 112.0,156.9 117.2,154.7 122.4,152.6 127.6,150.5 132.8,148.4 138.0,146.4 143.2,144.4 148.4,142.4 153.6,140.4 158.8,138.5 164.0,136.6 169.2,134.7 174.4,132.9 179.6,131.1 184.8,129.3 190.0,127.5 195.2,125.8 200.4,124.1 205.6,122.4 210.8,120.7 216.0,119.1 221.2,117.5 226.4,115.9 231.6,114.4 236.8,112.9 242.0,111.4 247.2,109.9 252.4,108.5 257.6,107.1 262.8,105.7 268.0,104.4 273.2,103.1 278.4,101.8 283.6,100.5 288.8,99.3 294.0,98.1 299.2,96.9 304.4,95.8 309.6,94.7 314.8,93.6 320.0,92.5 325.2,91.5 330.4,90.5 335.6,89.5 340.8,88.5 346.0,87.6 351.2,86.7 356.4,85.8 361.6,85.0 366.8,84.2 372.0,83.4 377.2,82.6 382.4,81.9 387.6,81.2 392.8,80.5 398.0,79.9 403.2,79.3 408.4,78.7 413.6,78.1 418.8,77.6 424.0,77.1 429.2,76.6 434.4,76.2 439.6,75.8 444.8,75.4 450.0,75.0 455.2,74.7 460.4,74.4 465.6,74.1 470.8,73.8 476.0,73.6" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<text x="424" y="63" font-size="13" fill="#1d2b44">y = f(t)</text>
<line x1="320.0" y1="92.5" x2="280.0" y2="62.5" stroke="#1d2b44" stroke-width="1"/>
<text x="276" y="58" font-size="13" fill="#1d2b44" text-anchor="end">height f(x)</text>
<rect x="158" y="180" width="128" height="22" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/>
<text x="222" y="195" font-size="13" fill="#1d2b44" text-anchor="middle">area = g(x)</text>
<g font-size="13" fill="#1d2b44" text-anchor="middle"><text x="112" y="268">a</text><text x="320" y="268">x</text><text x="383" y="268">x + h</text></g>
<line x1="343" y1="252" x2="343" y2="284" stroke="#1d2b44" stroke-width="1"/>
<text x="343" y="300" font-size="13" fill="#1d2b44" text-anchor="middle">strip: width h, area ≈ f(x) · h</text>
</svg>
<figcaption>Figure 1. g(x) is the hatched area from a to x. Moving the right edge from x to x + h adds the dotted strip, so g(x + h) − g(x) is the strip's area, about f(x) · h. Dividing by h and letting h → 0 gives g′(x) = f(x). Axes are unitless.</figcaption>
</figure>

Let g(x) = ∫ (a to x) f(t) dt and take a small h > 0.

1. g(x + h) is the area from a to x + h. g(x) is the area from a to x. Their difference is the area of the thin strip from x to x + h.
2. Because f is continuous, the height of the curve hardly changes across the strip. Its height is close to f(x), so the strip is close to a rectangle: g(x + h) − g(x) ≈ f(x) · h.
3. Divide by h: (g(x + h) − g(x))/h ≈ f(x). As h → 0 the strip gets thinner, the approximation gets better, and the left side becomes the derivative g′(x).

So g′(x) = f(x). (A similar strip works for h < 0.)

A numerical check: take f(t) = t² + 1 and a = 1, and look at x = 1. With h = 0.1, 0.01 and 0.001, the ratio (g(1 + h) − g(1))/h is about 2.103, 2.010 and 2.001. These approach f(1) = 2.

**Continuity matters.** The step "the height hardly changes across the strip" needs f to be continuous at x. If f jumps at x, the strip's average height on the left and on the right can be different, and g may have a corner there.

**A consequence.** Every function f that is continuous on an interval has an antiderivative there: the function g(x) = ∫ (a to x) f(t) dt. Changing a only adds a constant to g (the area between the two starting points), so it never changes g′.

## Variations you must recognise

| Integral | Derivative with respect to x | Reason |
|---|---|---|
| ∫ (a to x) f(t) dt | f(x) | The theorem |
| ∫ (x to b) f(t) dt | −f(x) | Swapping the limits changes the sign: ∫ (x to b) = −∫ (b to x) |
| ∫ (a to u(x)) f(t) dt | f(u(x)) · u′(x) | Chain rule: the accumulation function evaluated at u(x) |
| ∫ (u(x) to b) f(t) dt | −f(u(x)) · u′(x) | Both rules together |

**Why the chain rule appears.** If g(x) = ∫ (a to x) f(t) dt, then ∫ (a to u(x)) f(t) dt is the composite g(u(x)). Its derivative is g′(u(x)) · u′(x) = f(u(x)) · u′(x). Substitute the upper limit into f, then multiply by the derivative of the upper limit.

## Worked example 1: an accumulation function from a graph

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="we1-title we1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="we1-title">Graph of f for Worked example 1, with signed areas</title>
<desc id="we1-desc">The graph of f on 0 ≤ t ≤ 6 is made of three line segments. It is horizontal at height 2 from (0, 2) to (2, 2), then falls in a straight line through (3, 0) to (4, −2), then rises in a straight line to (6, 0). Regions above the t-axis are hatched: a rectangle of area 4 from t = 0 to 2 and a triangle of area 1 from t = 2 to 3. Regions below the axis are dotted: a triangle of area 1 from t = 3 to 4 and a triangle of area 2 from t = 4 to 6. Each region is labelled with its signed area: +4, +1, −1 and −2.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<defs><pattern id="we1-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="we1-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="70,150 70,50 210,50 280,150" fill="url(#we1-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="280,150 350,250 490,150" fill="url(#we1-dots)" stroke="#1d2b44" stroke-width="1"/>
<line x1="210" y1="50" x2="210" y2="150" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="350" y1="250" x2="350" y2="150" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="50" y1="150" x2="505" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="275" x2="70" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<text x="508" y="146" font-size="12" fill="#1d2b44">t</text><text x="76" y="28" font-size="12" fill="#1d2b44">y</text>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="140" y="166">1</text><text x="210" y="166">2</text><text x="280" y="166">3</text><text x="350" y="140">4</text><text x="420" y="140">5</text><text x="490" y="140">6</text></g>
<g stroke="#1d2b44" stroke-width="1"><line x1="140" y1="146" x2="140" y2="154"/><line x1="210" y1="146" x2="210" y2="154"/><line x1="280" y1="146" x2="280" y2="154"/><line x1="350" y1="146" x2="350" y2="154"/><line x1="420" y1="146" x2="420" y2="154"/><line x1="490" y1="146" x2="490" y2="154"/><line x1="66" y1="250" x2="74" y2="250"/><line x1="66" y1="200" x2="74" y2="200"/><line x1="66" y1="100" x2="74" y2="100"/><line x1="66" y1="50" x2="74" y2="50"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="254">−2</text><text x="62" y="204">−1</text><text x="62" y="104">1</text><text x="62" y="54">2</text></g>
<polyline points="70,50 210,50 350,250 490,150" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="122" y="87" width="36" height="19" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="140" y="101" font-size="13" fill="#1d2b44" text-anchor="middle">+4</text><rect x="213.0" y="109.5" width="36" height="19" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="231.0" y="123.5" font-size="13" fill="#1d2b44" text-anchor="middle">+1</text><rect x="312.40000000000003" y="164.5" width="36" height="19" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="330.40000000000003" y="178.5" font-size="13" fill="#1d2b44" text-anchor="middle">−1</text><rect x="384.5" y="162.0" width="36" height="19" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="402.5" y="176.0" font-size="13" fill="#1d2b44" text-anchor="middle">−2</text>
<text x="224.0" y="40" font-size="13" fill="#1d2b44">y = f(t)</text>
</svg>
<figcaption>Figure 2. The graph of f in Worked example 1. Hatched regions lie above the t-axis and count as positive; dotted regions lie below and count as negative. The labels give each region's signed area.</figcaption>
</figure>

**Question.** The function f on 0 ≤ t ≤ 6 is shown in Figure 2. Let g(x) = ∫ (0 to x) f(t) dt.

(a) Find g(0), g(2), g(3), g(4) and g(6).
(b) Find g′(1), g′(3) and g′(5).
(c) Let h(x) = ∫ (2 to x) f(t) dt. Find h(0) and h(6), and explain why h′(x) = g′(x).

**(a)** Add signed areas from 0 up to x.

- g(0) = 0, because the interval has no width.
- g(2) = area of the rectangle from 0 to 2 = 2 × 2 = **4**.
- g(3) = 4 + (triangle from 2 to 3, base 1, height 2) = 4 + 1 = **5**.
- g(4) = 5 − 1 = **4**, because the triangle from 3 to 4 lies below the axis.
- g(6) = 4 − (triangle from 4 to 6, base 2, height 2) = 4 − 2 = **2**.

**(b)** f is continuous on [0, 6], so g′(x) = f(x). Read heights from the graph:

- g′(1) = f(1) = **2**
- g′(3) = f(3) = **0**
- g′(5) = f(5) = **−1**, since f(t) = t − 6 on [4, 6]

Notice that g′(2) = f(2) = 2 exists even though the graph of f has a corner at t = 2. The theorem needs f to be continuous, not smooth.

**(c)** h starts collecting area at 2 instead of 0.

- h(0) = ∫ (2 to 0) f(t) dt = −∫ (0 to 2) f(t) dt = **−4**. Going from right to left reverses the sign.
- h(6) = ∫ (2 to 6) f(t) dt = 1 − 1 − 2 = **−2**.

In fact h(x) = g(x) − 4 for every x, since g includes the extra 4 units of area from 0 to 2. A constant difference does not affect the derivative, so h′(x) = g′(x) = f(x).

## Worked example 2: derivatives of functions defined by integrals

**Question.** Find each derivative.

(a) d/dx ∫ (2 to x) cos(t³) dt
(b) d/dx ∫ (x to 5) √(1 + t⁴) dt
(c) d/dx ∫ (0 to x³) 1/(1 + t²) dt, and its value at x = 1

**(a)** The lower limit is a constant and the upper limit is x. cos(t³) is continuous, so the theorem applies directly: **cos(x³)**. Do not try to find an antiderivative first.

**(b)** The variable is in the lower limit. Swap the limits: ∫ (x to 5) √(1 + t⁴) dt = −∫ (5 to x) √(1 + t⁴) dt. The derivative is **−√(1 + x⁴)**.

**(c)** The upper limit is u(x) = x³, with u′(x) = 3x². Substitute u into the integrand and multiply by u′:

d/dx ∫ (0 to x³) 1/(1 + t²) dt = 1/(1 + (x³)²) · 3x² = **3x²/(1 + x⁶)**

At x = 1: 3/(1 + 1) = **3/2**.

**Check.** In each answer the variable t has gone and only x remains. A derivative of a function of x must be a function of x.

## Worked example 3: a tangent line to a function with no simple formula

**Question.** Let F(x) = ∫ (2 to x) √(t² + 5) dt. Find the equation of the tangent line to the graph of F at x = 2, and use it to estimate F(2.1).

1. **Point.** F(2) = ∫ (2 to 2) √(t² + 5) dt = 0. The point is (2, 0).
2. **Slope.** √(t² + 5) is continuous everywhere, so F′(x) = √(x² + 5). Then F′(2) = √9 = 3.
3. **Tangent line.** y − 0 = 3(x − 2), so **y = 3(x − 2)**.
4. **Estimate.** F(2.1) ≈ 3(0.1) = **0.3**.

**Interpretation.** The strip from 2 to 2.1 is 0.1 wide and about 3 high, so its area is about 0.3. That is exactly what the tangent line computes. (The true value is about 0.3034. The estimate is slightly low because F″(x) = x/√(x² + 5) > 0 near x = 2, so F is concave up there.)

## Common misconceptions

- **"g′(x) = f′(x)."** The theorem gives back f itself, not its derivative. Differentiating the integrand is a different calculation.
- **"g(a) is f(a)."** g(a) = 0 always, whatever f(a) is.
- **Forgetting the chain rule.** d/dx ∫ (0 to x³) f(t) dt is f(x³) · 3x², not just f(x³).
- **Forgetting the minus sign** when x is the lower limit.
- **Substituting x into the integrand and subtracting:** writing f(x) − f(a) as the derivative. The constant lower limit contributes nothing to the derivative.
- **Using x as the variable inside.** ∫ (0 to x) f(x) dx mixes the edge of the region with the variable along the axis. Use t.
- **Adding areas without signs.** Area below the axis counts as negative in g. Going from right to left (x < a) also reverses the sign.
- **Ignoring the condition.** The theorem needs f to be continuous on an interval containing a and x. Corners in f are fine; jumps are not.

## Where this leads

You can now build a function from an integral and differentiate it. In [Topic 6.5, Interpreting the Behavior of Accumulation Functions Involving Area](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/), you will use g′ = f and g″ = f′ to find where g increases, decreases, has extrema and changes concavity, straight from a graph of f. In Topic 6.7 you will meet the other form of the theorem, which uses an antiderivative to evaluate a definite integral exactly. The limit-of-sums ideas from [Topic 6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/) are what make "area" precise here. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-checklist/) to consolidate.
