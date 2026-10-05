---
resourceId: "mb-ap-calcab-6.6-study-guide"
title: "Applying Properties of Definite Integrals: Study Guide (Calculus AB 6.6)"
description: "Learn to evaluate definite integrals with geometry and with the rules for constants, sums, reversed limits and adjacent intervals, including integrands with jumps or holes."
course: "calculus-ab"
unit: 6
topics: ["6.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums and as signed area (Topics 6.1 to 6.3)"
  - "Accumulation functions (Topics 6.4 and 6.5)"
  - "Areas of rectangles, triangles, trapezoids and circles"
  - "Removable and jump discontinuities (Topic 1.10)"
prerequisiteResources: ["mb-ap-calcab-6.5-study-guide"]
learningObjectives:
  - "Evaluate a definite integral by splitting the region into shapes with known areas and attaching signs"
  - "Use the constant-multiple, sum, reversed-limits and adjacent-interval properties to combine given integral values"
  - "Explain why each property holds, using Riemann sums or a picture"
  - "Evaluate integrals of functions with removable or jump discontinuities, and explain why a single function value does not affect the integral"
  - "Recognise rules that are not properties of integrals, such as the integral of a product"
skills: ["1", "3"]
studyMinutes: 40
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Leave answers in terms of π where circles appear."
related: ["mb-ap-calcab-6.6-revision-notes", "mb-ap-calcab-6.6-practice", "mb-ap-calcab-6.6-checklist"]
next: "mb-ap-calcab-6.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "When the region under a graph is made of familiar shapes, a definite integral is the sum of their areas, with a minus sign for parts below the axis."
  - "Constants come out: ∫ (a to b) k·f(x) dx = k ∫ (a to b) f(x) dx. Sums split: ∫ (f + g) = ∫ f + ∫ g."
  - "Reversing the limits changes the sign. ∫ (a to b) + ∫ (b to c) = ∫ (a to c), whatever the order of a, b and c."
  - "Removable and jump discontinuities do not stop a definite integral: split at the jump, and ignore a single changed point."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.6 is common content, so the same page serves AB and BC students."
  - question: "Can I use antiderivatives here?"
    answer: "Not yet. Evaluating integrals with antiderivatives is Topic 6.7. Here every value comes from geometry or from integral values you are given."
  - question: "Is the integral of a product the product of the integrals?"
    answer: "No. There is no such property. ∫ (0 to 2) x · x dx = 8/3, but (∫ (0 to 2) x dx)² = 4."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer. **∫ (a to b) f(x) dx** means the definite integral of f from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. |x| is the absolute value of x.

## Integrals from geometry

In Topic 6.3 the definite integral was defined as a limit of Riemann sums. You will learn the quick way to evaluate most integrals in Topic 6.7. But when the region under the graph is made of shapes you know, you can find the integral straight away from their areas.

The rule: **add the areas of the regions above the x-axis and subtract the areas of the regions below it.**

| Shape | Area |
|---|---|
| Rectangle, width w, height h | w · h |
| Triangle, base b, height h | (1/2) · b · h |
| Trapezoid, parallel sides p and q, width w | (1/2)(p + q) · w |
| Semicircle, radius r | (1/2)πr² |
| Quarter circle, radius r | (1/4)πr² |

Three quick examples.

- **∫ (−1 to 3) (2x − 2) dx.** The line crosses the axis at x = 1. From −1 to 1 it is below the axis: a triangle with base 2 and height 4, area 4, counted as −4. From 1 to 3 it is above: another triangle of area 4. So the integral is −4 + 4 = **0**. A zero integral does not mean there is no region. It means the parts above and below balance.
- **∫ (−5 to 5) √(25 − x²) dx.** Squaring y = √(25 − x²) gives x² + y² = 25 with y ≥ 0: the upper half of a circle of radius 5. The integral is (1/2)π(5²) = **25π/2**.
- **∫ (0 to 6) |x − 4| dx.** The graph is a V with its point at (4, 0). From 0 to 4 there is a triangle of base 4 and height 4 (area 8). From 4 to 6 there is a triangle of base 2 and height 2 (area 2). The integral is **10**.

**Recognise circles.** y = √(r² − x²) is the top half of a circle of radius r centred at the origin. y = −√(r² − x²) is the bottom half. y = √(r² − (x − c)²) is the top half of a circle centred at (c, 0).

## The properties of definite integrals

Each property comes from Riemann sums: it is true for every sum, so it stays true in the limit.

| Property | In symbols | Why it holds |
|---|---|---|
| Zero width | ∫ (a to a) f(x) dx = 0 | A region with no width has no area |
| Reversed limits | ∫ (b to a) f(x) dx = −∫ (a to b) f(x) dx | Going right to left makes every Δx negative |
| Constant multiple | ∫ (a to b) k·f(x) dx = k ∫ (a to b) f(x) dx | k factors out of every term of the sum |
| Sum and difference | ∫ (a to b) [f(x) ± g(x)] dx = ∫ (a to b) f(x) dx ± ∫ (a to b) g(x) dx | A sum of (f + g)Δx terms splits into two sums |
| Adjacent intervals | ∫ (a to b) f(x) dx + ∫ (b to c) f(x) dx = ∫ (a to c) f(x) dx | Area from a to b plus area from b to c is area from a to c |
| Constant integrand | ∫ (a to b) k dx = k(b − a) | A rectangle of height k and width b − a |

**The adjacent-interval rule works in any order.** It holds even when b is not between a and c, as long as f is integrable on an interval containing all three. For example, ∫ (0 to 5) f = ∫ (0 to 8) f + ∫ (8 to 5) f. The reversed-limit rule makes the extra piece cancel correctly.

**Two useful rearrangements:**

- ∫ (b to c) f(x) dx = ∫ (a to c) f(x) dx − ∫ (a to b) f(x) dx
- ∫ (a to b) [f(x) + k] dx = ∫ (a to b) f(x) dx + k(b − a)

### What is not a property

- **Products.** ∫ f(x)g(x) dx is **not** (∫ f(x) dx)(∫ g(x) dx). Test it: ∫ (0 to 2) x² dx = 8/3, but (∫ (0 to 2) x dx)² = 2² = 4.
- **Quotients.** Likewise ∫ f/g is not ∫ f divided by ∫ g.
- **Absolute values.** ∫ (a to b) |f(x)| dx is the **total** area. |∫ (a to b) f(x) dx| is the size of the **net** area. They are equal only when f does not change sign. For f(x) = x on [−1, 1], the first is 1 and the second is 0.
- **Adding a constant.** ∫ (a to b) [f(x) + 3] dx is not ∫ (a to b) f(x) dx + 3. The constant must be multiplied by the width, b − a.

## Integrals of functions with jumps and holes

The definition of the definite integral also works for some functions that are **not** continuous.

- **Removable discontinuity (a hole, or a single moved point).** Changing f at one point does not change the integral. A single point is a vertical segment with zero width, so it has no area. In a Riemann sum, that one point affects at most one or two terms, and their width goes to 0.
- **Jump discontinuity.** Split the integral at the jump using the adjacent-interval property. Evaluate each piece using the formula that holds on that piece. The value of f exactly at the jump does not matter, for the same reason.

So a function that is continuous except for finitely many holes and jumps on [a, b], and stays bounded, has a definite integral there.

**Boundary.** A vertical asymptote inside [a, b] is different: the function is unbounded, so these rules do not apply. Integrals like that are improper integrals, a Calculus BC topic (Topic 6.13). In this topic, never apply the properties across a vertical asymptote.

## Worked example 1: combining given values

**Question.** f and g are continuous, with

∫ (0 to 6) f(x) dx = 10, ∫ (4 to 6) f(x) dx = −3, ∫ (0 to 4) g(x) dx = 7.

Find:
(a) ∫ (0 to 4) f(x) dx
(b) ∫ (6 to 4) 5f(x) dx
(c) ∫ (0 to 4) [2f(x) − 3g(x)] dx
(d) ∫ (0 to 4) [f(x) + 2] dx

**(a)** Adjacent intervals: ∫ (0 to 4) f + ∫ (4 to 6) f = ∫ (0 to 6) f. So ∫ (0 to 4) f = 10 − (−3) = **13**.

**(b)** Reverse the limits, then take out the constant: ∫ (6 to 4) 5f = −5 ∫ (4 to 6) f = −5 × (−3) = **15**.

**(c)** Split the difference and take out constants: 2 ∫ (0 to 4) f − 3 ∫ (0 to 4) g = 2(13) − 3(7) = 26 − 21 = **5**.

**(d)** ∫ (0 to 4) f + ∫ (0 to 4) 2 dx = 13 + 2(4 − 0) = **21**.

**Check.** In (d) a common slip gives 13 + 2 = 15. The constant 2 is a height; over a width of 4 it adds a rectangle of area 8.

## Worked example 2: a function with a jump and a hole

<figure>
<svg viewBox="0 0 520 270" role="img" aria-labelledby="g66a-title g66a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g66a-title">Graph of h for Worked example 2, with a jump at x = 0 and a moved point at x = 2</title>
<desc id="g66a-desc">On −2 ≤ x &lt; 0 the graph of h is a quarter circle of radius 2 rising from (−2, 0) to an open circle at (0, 2). Its region above the axis is hatched and labelled +π. At x = 0 there is a filled point at (0, −3). From (0, −3) a straight line rises to (5, 2), crossing the x-axis at (3, 0). The triangle between the line and the axis from 0 to 3 lies below the axis, is dotted and is labelled −9/2. The triangle from 3 to 5 lies above, is hatched and is labelled +2. On the line there is an open circle at (2, −1), and a separate filled point at (2, 4) shows that h(2) = 4.</desc>
<rect x="0" y="0" width="520" height="270" fill="#ffffff"/>
<defs><pattern id="g66a-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="g66a-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="80.0,140.0 85.5,121.3 91.0,113.8 96.5,108.4 102.0,104.0 107.5,100.3 113.0,97.2 118.5,94.4 124.0,92.0 129.5,89.9 135.0,88.0 140.5,86.4 146.0,85.0 151.5,83.8 157.0,82.8 162.5,81.9 168.0,81.2 173.5,80.7 179.0,80.3 184.5,80.1 190.0,80.0 190,140" fill="url(#g66a-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="190,140 190,230 355,140" fill="url(#g66a-dots)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="355,140 465,80 465,140" fill="url(#g66a-hatch)" stroke="#1d2b44" stroke-width="1"/>
<line x1="50" y1="140" x2="500" y2="140" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="190" y1="255" x2="190" y2="10" stroke="#1d2b44" stroke-width="1.5"/>
<text x="504" y="136" font-size="12" fill="#1d2b44">x</text><text x="196" y="14" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="80" y1="136" x2="80" y2="144"/><line x1="135" y1="136" x2="135" y2="144"/><line x1="245" y1="136" x2="245" y2="144"/><line x1="300" y1="136" x2="300" y2="144"/><line x1="355" y1="136" x2="355" y2="144"/><line x1="410" y1="136" x2="410" y2="144"/><line x1="465" y1="136" x2="465" y2="144"/><line x1="186" y1="230" x2="194" y2="230"/><line x1="186" y1="200" x2="194" y2="200"/><line x1="186" y1="170" x2="194" y2="170"/><line x1="186" y1="110" x2="194" y2="110"/><line x1="186" y1="80" x2="194" y2="80"/><line x1="186" y1="50" x2="194" y2="50"/><line x1="186" y1="20" x2="194" y2="20"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="80" y="157">−2</text><text x="135" y="157">−1</text><text x="245" y="132">1</text><text x="300" y="132">2</text><text x="355" y="157">3</text><text x="410" y="157">4</text><text x="465" y="157">5</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="182" y="234">−3</text><text x="182" y="204">−2</text><text x="182" y="174">−1</text><text x="182" y="114">1</text><text x="182" y="84">2</text><text x="182" y="54">3</text><text x="182" y="24">4</text></g>
<polyline points="80.0,140.0 85.5,121.3 91.0,113.8 96.5,108.4 102.0,104.0 107.5,100.3 113.0,97.2 118.5,94.4 124.0,92.0 129.5,89.9 135.0,88.0 140.5,86.4 146.0,85.0 151.5,83.8 157.0,82.8 162.5,81.9 168.0,81.2 173.5,80.7 179.0,80.3 184.5,80.1 190.0,80.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="190" y1="230" x2="465" y2="80" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="190" cy="80" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="190" cy="230" r="5" fill="#1d2b44"/>
<circle cx="300" cy="170" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="20" r="5" fill="#1d2b44"/>
<rect x="114" y="110" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="129" y="123" font-size="12" fill="#1d2b44" text-anchor="middle">+π</text>
<rect x="204" y="160" width="40" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="224" y="173" font-size="12" fill="#1d2b44" text-anchor="middle">−9/2</text>
<rect x="424" y="114" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="439" y="127" font-size="12" fill="#1d2b44" text-anchor="middle">+2</text>
<text x="310" y="24" font-size="12" fill="#1d2b44">h(2) = 4</text>
<text x="310" y="186" font-size="12" fill="#1d2b44">hole</text>
<text x="200" y="250" font-size="12" fill="#1d2b44">h(0) = −3</text>
</svg>
<figcaption>Figure 1. The graph of h. Open circles mark points that are not on the graph; filled circles mark the actual values h(0) = −3 and h(2) = 4. Hatched regions lie above the x-axis and count as positive; the dotted region lies below and counts as negative. Axes are unitless.</figcaption>
</figure>

**Question.** Let

- h(x) = √(4 − x²) for −2 ≤ x < 0
- h(x) = x − 3 for 0 ≤ x ≤ 5, except that h(2) = 4.

(a) Find ∫ (−2 to 5) h(x) dx.
(b) Find ∫ (5 to −2) 4h(x) dx.
(c) Explain why the value h(2) = 4 has no effect on your answers.

**(a)** h has a jump at x = 0 (from height 2 on the left to −3 at x = 0) and a moved point at x = 2. Neither stops the integral. Split at the jump:

∫ (−2 to 5) h = ∫ (−2 to 0) √(4 − x²) dx + ∫ (0 to 5) (x − 3) dx

- **First piece.** y = √(4 − x²) on [−2, 0] is a quarter circle of radius 2. Area (1/4)π(2²) = **π**.
- **Second piece.** The line x − 3 crosses the axis at x = 3. From 0 to 3: a triangle below the axis with base 3 and height 3, area 9/2, counted as **−9/2**. From 3 to 5: a triangle above with base 2 and height 2, area **+2**.

Total: π − 9/2 + 2 = **π − 5/2**, about 0.64.

**(b)** Reverse the limits and take out the 4: ∫ (5 to −2) 4h = −4 ∫ (−2 to 5) h = −4(π − 5/2) = **10 − 4π**, about −2.57.

**(c)** h differs from the line x − 3 at only one point, x = 2. A single point is a segment of zero width, so it adds no area. The integral of h from 0 to 5 is the same as the integral of x − 3.

**Interpretation.** The **total** area between h and the axis is π + 9/2 + 2 = π + 13/2. The integral is much smaller because the region below the axis cancels most of the rest.

## Worked example 3: geometry and properties together

**Question.**
(a) Find ∫ (−4 to 4) [2√(16 − x²) − 3] dx.
(b) Find the constant k for which ∫ (0 to 4) (k − x) dx = 6.

**(a)** Split the difference and take out the constant:

∫ (−4 to 4) [2√(16 − x²) − 3] dx = 2 ∫ (−4 to 4) √(16 − x²) dx − ∫ (−4 to 4) 3 dx

- √(16 − x²) on [−4, 4] is the top half of a circle of radius 4: area (1/2)π(4²) = 8π.
- ∫ (−4 to 4) 3 dx is a rectangle of height 3 and width 8: area 24.

So the integral is 2(8π) − 24 = **16π − 24**, about 26.3.

**(b)** Split: ∫ (0 to 4) k dx − ∫ (0 to 4) x dx = 4k − 8, because the first is a rectangle k by 4 and the second is a triangle with base 4 and height 4. Set 4k − 8 = 6, so **k = 7/2**.

**Check.** With k = 7/2 the line y = 7/2 − x is above the axis from 0 to 3.5 (triangle area (1/2)(3.5)(3.5) = 6.125) and below from 3.5 to 4 (area (1/2)(0.5)(0.5) = 0.125). 6.125 − 0.125 = 6. It agrees.

## Common misconceptions

- **"Integral = area."** A definite integral is a **signed** area. Regions below the axis count as negative, so an integral can be 0 or negative.
- **Forgetting the width for a constant.** ∫ (a to b) [f(x) + k] dx needs + k(b − a), not + k.
- **Splitting a product.** ∫ fg is not (∫ f)(∫ g). Only sums, differences and constant multiples split.
- **Dropping the sign when limits are reversed.** ∫ (6 to 4) f is the negative of ∫ (4 to 6) f.
- **"A discontinuous function has no integral."** Jumps and holes are allowed. Split at a jump; ignore a single point.
- **Using the wrong formula at a jump.** On each piece, use the formula that holds on that piece, not the value at the endpoint.
- **Applying the rules across a vertical asymptote.** That is an improper integral (Calculus BC), not covered by these properties.
- **Misreading circle formulas.** √(r² − x²) is a semicircle of radius r, not r². The area of a semicircle is half of πr², not half of 2πr.

## Where this leads

These rules turn many integrals into short calculations. In [Topic 6.7, The Fundamental Theorem of Calculus and Definite Integrals](/advanced-course-resources/calculus-ab/6-7-fundamental-theorem-calculus-definite-integrals-study-guide/), you will evaluate integrals with antiderivatives, and you will use the sum and constant-multiple rules on every line. The area calculations here are exactly what you used to find values of accumulation functions in [Topic 6.5](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-checklist/) to consolidate.
