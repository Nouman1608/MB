---
title: "OCR A Level Mathematics A: Differentiation fundamentals: gradients, second derivatives, first principles and standard derivatives (H240) -- Revision Notes"
seoTitle: "OCR A Level Maths Differentiation Basics Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["a-levels"]
topic: "Differentiation fundamentals: gradients, second derivatives, first principles and standard derivatives"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 116
syllabusTopics:
  - qualification: "a-level"
    topic: "pure-mathematics-ocr-alevel-maths"
    subtopic: "differentiation-ocr-alevel-maths"
description: "Condensed revision notes for OCR A Level Mathematics A (H240) differentiation: gradient, second derivative, first principles and standard derivatives."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

These are condensed notes for OCR A Level Mathematics A (H240), content references 1.07a to 1.07l, specification Version 3.1 (August 2026). For full explanations read the [study guide](/resources/ocr-a-level-mathematics-differentiation-fundamentals-gradients-second/), then test yourself with the [practice questions](/resources/ocr-a-level-mathematics-differentiation-fundamentals-gradients-second-practice/). Items marked **A Level only** are Stage 2 content. See also the [course hub](/boards/ocr/a-level/mathematics/), the [printable checklist](/checklists/ocr/a-level/mathematics/), the [pure mathematics revision notes](/resources/ocr-a-level-mathematics-pure-revision-notes/) and the [free diagnostics](/diagnostics/).

## Definitions to know

| Term | Meaning | Ref |
|---|---|---|
| Derivative f'(x), dy/dx | Gradient of the tangent at (x, y); rate of change of y with respect to x | 1.07a, 1.07b |
| Chord gradient | [f(a + h) − f(a)] / h | 1.07b |
| Second derivative f''(x), d²y/dx² | Derivative of the derivative; rate of change of gradient | 1.07d, 1.07e |
| Convex on an interval | f''(x) > 0 there | 1.07f, A Level only |
| Concave on an interval | f''(x) < 0 there | 1.07f, A Level only |
| Point of inflection | f''(x) = 0 and the curve changes between concave and convex | 1.07f, A Level only |

## Derivatives to learn

| f(x) | f'(x) | Stage |
|---|---|---|
| xⁿ (n rational) | nxⁿ⁻¹ | 1 |
| constant | 0 | 1 |
| e^kx | k e^kx | A Level only |
| a^kx | k ln a · a^kx | A Level only |
| ln x | 1/x | A Level only |
| sin kx | k cos kx | A Level only |
| cos kx | −k sin kx | A Level only |
| tan kx | k sec² kx | A Level only |

Constant multiples come out front. Sums and differences go term by term. Trigonometric results need radians.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--07-exp-and-ln-slopes.webp" width="900" height="1200" alt="Top: the graph of y = e to the x with gold tangents at x = 0, 1 and 2. The slope at each point equals its height: 1, e and e squared, so the derivative of e to the x is e to the x. Bottom: the graph of y = ln x with tangents at x = 1, 2 and 4 having slopes 1, one half and one quarter, so the derivative of ln x is 1 over x." loading="lazy">
  <figcaption>The slope of eˣ equals its height and the slope of ln x at x is 1/x.</figcaption>
</figure>


## Method boxes

**Differentiating a power function**

1. Rewrite roots and reciprocals as powers.
2. Split any fraction with a one-term denominator into separate terms.
3. Bring the power down as a multiplier, then take 1 off the power.
4. Differentiate again for f''(x) if asked.

**First principles for xⁿ (1.07g)**

1. Write [f(x + h) − f(x)] / h with the lim (h → 0) notation.
2. Expand (x + h)ⁿ. The powers 2, 3 and 4 are the ones you may be asked for.
3. Cancel the xⁿ term and divide every remaining term by h.
4. Let h → 0 and state the result.

**First principles for sin x and cos x (1.07h, A Level only)**

1. Use the addition formula for sin(x + h) or cos(x + h).
2. Group terms to show (cos h − 1)/h and sin h / h.
3. Quote the limits 0 and 1 (radians) and read off the result.

**Convexity and inflection (1.07f, A Level only)**

1. Find f''(x) and factorise.
2. Test the sign of f'' on each side of every root.
3. State the intervals, then name a point of inflection only where the sign changes.

## Notation and the gradient sketch

| You may see | It means |
|---|---|
| f'(x) or dy/dx | First derivative |
| f''(x) or d²y/dx² | Second derivative |
| dA/dt | Rate of change of A with respect to t |
| lim (h → 0) | The value the expression approaches as h gets smaller |

**Method to sketch y = f'(x) from y = f(x) (1.07c)**

1. Mark every turning point of f. Plot a root of f' directly below each one.
2. Where f rises, put f' above the axis. Where f falls, put it below.
3. Where f is steepest, put a turning point of f'.
4. Where f is a straight line, draw f' as a horizontal line at that gradient.
5. Check the degree: f' should look one degree lower than f.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--01-chord-to-tangent.webp" width="900" height="880" alt="Graph of y = 2x squared. Point P is at x = 3, y = 18. Three chords from P to points a distance h to the right (h = 1, 0.5, 0.25) get closer to the gold tangent line as h shrinks. The chord gradient is 12 + 2h: 14, 13, 12.2 and 12.02 for h = 1, 0.5, 0.1 and 0.01. As h tends to 0 the gradient tends to 12, the gradient of the curve at x = 3, which agrees with dy/dx = 4x." loading="lazy">
  <figcaption>How chord gradients 12 + 2h approach the tangent gradient 12 at x = 3 on y = 2x².</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--04-tangent-and-normal.webp" width="900" height="942" alt="Graph of y = square root of (2x + 5) with equal scales on both axes. At P(2, 3) the gradient is one third, so the gold tangent is 3y = x + 7. The teal normal is perpendicular, with gradient minus 3, y = 9 minus 3x, and crosses the x-axis at (3, 0). A right-angle mark at P shows the lines are perpendicular because one third times minus 3 equals minus 1." loading="lazy">
  <figcaption>The tangent and normal at P(2, 3) are perpendicular because their gradients multiply to −1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--08-parametric-gradient.webp" width="900" height="967" alt="The curve x = t squared + 2t, y = t cubed minus 3t, drawn with equal scales. At t = 2 the point is (8, 2). Its horizontal rate dx/dt = 6 and vertical rate dy/dt = 9 form a right triangle whose slope is the gradient dy/dx = 9 over 6 = 3 over 2. The gold tangent has that gradient and the teal normal has gradient minus two thirds. Grey dots mark t = minus 1, 0 and 1." loading="lazy">
  <figcaption>At t = 2 the gradient is dy/dt ÷ dx/dt = 9/6, with the normal gradient −2/3.</figcaption>
</figure>


## Small worked reminders

First principles for x²: [(x + h)² − x²] / h = 2x + h, and the limit is 2x.

Chord for y = x³ from x = 2: gradient 12 + 6h + h², so the tangent gradient is 12.

Cosine from first principles: [cos(x + h) − cos x] / h = cos x · (cos h − 1)/h − sin x · (sin h / h), which tends to −sin x.

Rewrite before differentiating: y = 8/√x = 8x^(−1/2), so dy/dx = −4x^(−3/2).

Exponential with a general base: y = 3^(2x) gives dy/dx = 2 ln 3 · 3^(2x).

Second derivative of a trigonometric function: y = sin 3x gives y' = 3 cos 3x and y'' = −9 sin 3x.

Reading a gradient sketch: if f has a maximum then a minimum, f' is below the axis between them. For a cubic with a positive x³ coefficient, f' is a U-shaped parabola.

## Three fuller examples

**Powers and a second derivative.** Let y = 2x^(3/2) − 12√x + 5/x. Find dy/dx and d²y/dx² when x = 4.

```
y = 2x^(3/2) − 12x^(1/2) + 5x^(−1)
dy/dx = 3x^(1/2) − 6x^(−1/2) − 5x^(−2)
d²y/dx² = (3/2)x^(−1/2) + 3x^(−3/2) + 10x^(−3)
at x = 4: dy/dx = 6 − 3 − 5/16 = 43/16
          d²y/dx² = 3/4 + 3/8 + 10/64 = 41/32
```

**Inflection.** Let f(x) = x³ − 6x² + 9x + 1 (A Level only). Then f''(x) = 6x − 12 = 6(x − 2). It is negative for x < 2 (concave) and positive for x > 2 (convex), so the sign changes at x = 2. The point of inflection is (2, 3), and the gradient there is f'(2) = −3, so it is not a stationary point.

**Rate of change in context.** A balance of £500 grows as A = 500 × 1.04^t after t years (A Level only). Then dA/dt = 500 ln 1.04 × 1.04^t. At t = 10, dA/dt = 29.03 to 2 decimal places, so the balance is growing at about £29 per year at that moment. The derivative is a rate, so give it units.

## Must-know distinctions

- **f'(x) versus f''(x).** The first is the gradient. The second tells you how the gradient is changing.
- **d²y/dx² versus (dy/dx)².** The first is the second derivative. The second is the first derivative squared.
- **xⁿ versus a^kx.** Use the power rule when the variable is in the base. When the variable is in the power, use the exponential rule with ln a.
- **f''(x) = 0 versus an inflection.** The first is necessary. You also need a sign change in f''.
- **Convex versus concave.** Convex means f'' > 0 and the curve bends upwards. Concave means f'' < 0.
- **Graph of f versus graph of f'.** A turning point on f is a root of f'. A section where f rises is a section where f' is positive.

## Quick self-test

1. Differentiate 7x⁻².
2. Differentiate x^(3/2).
3. Differentiate 4e^(−x/2).
4. Differentiate 3^(2x).
5. Differentiate tan 5x.
6. Find d²y/dx² when y = sin 3x.
7. What is the value of lim (h → 0) of (cos h − 1)/h?
8. For f(x) = x⁵ − 10x³, find the values of x where the curve is concave.
9. Find the gradient of y = ln x at x = e².
10. A cubic has a maximum at x = 2 and a minimum at x = 6. State the x-coordinates where f'(x) = 0 and describe the shape of the graph of f'.
11. In first principles for x², what does the quotient simplify to before the limit?

### Answers

1. −14x⁻³.
2. (3/2)x^(1/2), which is (3/2)√x.
3. −2e^(−x/2).
4. 2 ln 3 · 3^(2x).
5. 5 sec² 5x.
6. −9 sin 3x.
7. 0.
8. f''(x) = 20x³ − 60x = 20x(x² − 3). This is negative for x < −√3 and for 0 < x < √3.
9. 1/e², which is e⁻².
10. f'(x) = 0 at x = 2 and x = 6. A positive-cubic maximum then minimum gives f' as a U-shaped parabola with roots 2 and 6. It dips below the axis between them, with its lowest point at x = 4.
11. 2x + h.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--02-gradient-function.webp" width="900" height="1110" alt="Two graphs aligned on the same x values. Top: the cubic f(x) = x cubed minus 3x squared minus 9x plus 4, rising to a maximum (minus 1, 9), falling to a minimum (3, minus 23), then rising. Bottom: its gradient function f dash = 3(x + 1)(x minus 3), a U-shaped parabola crossing zero at x = minus 1 and x = 3. Where f dash is positive f is rising, where negative f is falling, and f dash = 0 at the maximum and minimum." loading="lazy">
  <figcaption>The sign of f′ tells you where f rises or falls, and f′ = 0 at turning points.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--03-convex-concave-inflection.webp" width="900" height="970" alt="A quartic curve f(x) = x to the 4 minus 8x cubed plus 18x squared plus 5. It is convex (bends upwards, teal) for x less than 1, concave (bends downwards, copper) between x = 1 and x = 3, and convex again for x greater than 3. The points of inflection (1, 16) and (3, 32) are ringed; dashed tangents there cross the curve, and at (3, 32) the tangent is horizontal. The second derivative 12(x minus 1)(x minus 3) is zero and changes sign at each." loading="lazy">
  <figcaption>Convex and concave sections of a curve and the inflection points where f″ changes sign.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-maths-9709-pure-mathematics-1-differentiation--05-chain-rule-gradients.webp" width="900" height="1250" alt="Three graphs show y = square root of (4x squared + 9) built in two steps. Top: u = 4x squared + 9 has gradient 16 at x = 2 where u = 25. Middle: y = square root of u has gradient 0.1 at u = 25 where y = 5. Bottom: the combined curve y = square root of (4x squared + 9) has gradient 1.6 at x = 2, and 16 times 0.1 equals 1.6, so dy/dx = dy/du times du/dx." loading="lazy">
  <figcaption>The gradient of the composite is the product of the two gradients: 16 × 0.1 = 1.6.</figcaption>
</figure>


## Where marks are usually lost

- Leaving √x or 1/x² in place and trying to differentiate it directly.
- Dropping the ln a factor for a^kx, or the k factor for e^kx and the trigonometric functions.
- A sign slip on cos kx, whose derivative is −k sin kx.
- Writing the limit too early, or not at all, in a first-principles answer.
- Expanding (x + h)³ or (x + h)⁴ with a wrong coefficient.
- Calling a point an inflection from f'' = 0 without testing the sign on both sides.
- Mixing up concave and convex, or stating them without the interval.
- Sketching f' with the roots in the wrong places; they must sit under the turning points of f.
- Differentiating a trigonometric function with the angle in degrees, when the standard results need radians.
- Leaving exact values untidy, for example 3 − 3/16 instead of 45/16.

## Official syllabus

*OCR Level 3 Advanced GCE in Mathematics A (H240)* specification, Version 3.1 (August 2026), for first assessment in 2018, published by OCR: section 1.07, Differentiation, references 1.07a to 1.07l.
