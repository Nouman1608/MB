---
resourceId: "mb-ap-calcab-6.5-study-guide"
title: "Interpreting the Behavior of Accumulation Functions Involving Area: Study Guide (Calculus AB 6.5)"
description: "Learn to read where an accumulation function increases, decreases, has extrema and changes concavity, using a graph, table, formula or description of its integrand."
course: "calculus-ab"
unit: 6
topics: ["6.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Accumulation functions and the theorem d/dx ∫ (a to x) f(t) dt = f(x) (Topic 6.4)"
  - "Signed area and Riemann or trapezoidal sums (Topics 6.1 to 6.3)"
  - "First and second derivative tests, concavity and points of inflection (Topics 5.3 to 5.9)"
  - "The candidates test for absolute extrema on a closed interval (Topic 5.5)"
prerequisiteResources: ["mb-ap-calcab-6.4-study-guide"]
learningObjectives:
  - "Use g′ = f and g″ = f′ to describe where g(x) = ∫ (a to x) f(t) dt increases, decreases and is concave up or down"
  - "Locate and justify relative extrema and points of inflection of g from information about f"
  - "Find absolute extrema of g on a closed interval by comparing signed areas at endpoints and critical points"
  - "Draw the same conclusions about g whether f is given as a graph, a table, a formula or a description in words"
skills: ["2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Areas come from geometry or from a sum; behaviour comes from the sign of f and of f′."
related: ["mb-ap-calcab-6.5-revision-notes", "mb-ap-calcab-6.5-practice", "mb-ap-calcab-6.5-checklist"]
next: "mb-ap-calcab-6.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If g(x) = ∫ (a to x) f(t) dt and f is continuous, then g′ = f. So the sign of f tells you where g increases or decreases."
  - "g has a relative maximum where f changes from positive to negative, and a relative minimum where f changes from negative to positive."
  - "g″ = f′. So g is concave up where f is increasing, concave down where f is decreasing, and has a point of inflection where f has a relative extremum."
  - "To find the absolute maximum or minimum of g on [p, q], compare g at the endpoints and at the zeros of f where f changes sign, using signed areas."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.5 is common content, so the same page serves AB and BC students."
  - question: "I am given the graph of f. Is that the graph of g?"
    answer: "No. The graph you are given is the graph of g′. Heights on it are slopes of g, and areas under it are changes in g. Say this to yourself before every question."
  - question: "Do I need to find a formula for g?"
    answer: "Almost never. The behaviour of g comes from the sign and the slope of f, and values of g come from signed areas. A formula is only needed if a question asks for one."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

**∫ (a to x) f(t) dt** means the definite integral of f(t) from t = a to t = x. Throughout this page,

**g(x) = ∫ (a to x) f(t) dt**, with f continuous.

g′ and g″ are the first and second derivatives of g. "Relative" extremum means the same as "local" extremum.

## The big idea: the graph you are given is g′

In Topic 6.4 you learned that g′(x) = f(x). This one fact turns every question about g into a question about f:

- **Heights of f are slopes of g.** If f(5) = 4, the graph of g is rising with slope 4 at x = 5.
- **Areas under f are changes in g.** The signed area under f from p to q equals g(q) − g(p).
- **Slopes of f are concavity of g.** Since g″ = (g′)′ = f′, the graph of g bends upward where f is increasing.

So you never need a formula for g. You read its behaviour from f, the way you read a function's behaviour from its derivative in Unit 5. The only new part is that values of g come from areas.

## How features of f show up in g

| What you see in f | What it means for g | Why |
|---|---|---|
| f > 0 on an interval | g is increasing there | g′ = f > 0 |
| f < 0 on an interval | g is decreasing there | g′ = f < 0 |
| f changes from + to − at c | g has a relative maximum at c | First derivative test |
| f changes from − to + at c | g has a relative minimum at c | First derivative test |
| f(c) = 0 but f keeps its sign | No extremum of g at c | g′ does not change sign |
| f is increasing on an interval | g is concave up there | g″ = f′ > 0 |
| f is decreasing on an interval | g is concave down there | g″ = f′ < 0 |
| f has a relative max or min at c (f′ changes sign) | g has a point of inflection at c | Concavity of g changes |
| Area under f from p to q | g(q) − g(p) | Additivity of area |

Two details are worth noticing.

**A corner in f is still fine for an inflection point.** If f changes from decreasing to increasing at a sharp corner, f′(c) does not exist, so g″(c) does not exist. But g is still continuous and its concavity still changes, so g has a point of inflection at c. You do not need g″(c) = 0.

**Values of g need areas, not heights.** f(c) tells you how fast g is changing at c. It does not tell you g(c). For that you add signed areas from a to c, and g(a) = 0 is always your starting point.

## Four ways f can be given

The same reasoning works whatever form f takes. Only the way you read signs and areas changes.

- **Graph.** Read the sign of f from whether the graph is above or below the axis. Read where f increases or decreases from its slope. Find areas with geometry.
- **Table.** A table of f values at a few points shows signs at those points only. If f is continuous and f(3) < 0 < f(6), the Intermediate Value Theorem gives a zero of f somewhere between 3 and 6. You need extra information (for example "f is increasing") to know there is only one. Changes in g come from a Riemann or trapezoidal sum (Topic 6.2), so they are estimates.
- **Formula.** Factor f to find where it is 0 and its sign on each interval. Differentiate f to study the concavity of g.
- **Words.** "Water flows in at a rate r(t)" means the amount of water is an accumulation function of r. "The rate is positive" means the amount is increasing.

## How to justify a claim about g

A conclusion about g always needs a reason stated in terms of **f**, because f is g′. Model sentences:

- "g is increasing on (3, 7) because g′(x) = f(x) > 0 there."
- "g has a relative maximum at x = 7 because g′ = f changes from positive to negative at x = 7."
- "The graph of g has a point of inflection at x = 5 because g′ = f changes from increasing to decreasing there."

Avoid "the graph goes up then down" without saying which graph, and avoid "f is at its highest, so g is at its highest". Those are the most common lost marks in this topic.

## Worked example 1: everything from one graph

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="g65a-title g65a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g65a-title">Graph of f for Worked example 1, with signed areas</title>
<desc id="g65a-desc">The graph of f on 0 ≤ t ≤ 8 is made of line segments. It falls from (0, 2) through (1, 0) to (2, −2), rises from (2, −2) through (3, 0) to (5, 4), then falls from (5, 4) through (7, 0) to (8, −2). Regions above the t-axis are hatched: a triangle of area 1 from t = 0 to 1, and a large triangle from t = 3 to 7 that a dashed line at t = 5 splits into two parts of area 4 each. Regions below the axis are dotted: a triangle of area 2 from t = 1 to 3 and a triangle of area 1 from t = 7 to 8. Each region is labelled with its signed area: +1, −2, +4, +4 and −1.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<defs><pattern id="g65a-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.35"/></pattern><pattern id="g65a-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<polygon points="70,190 70,130 120,190" fill="url(#g65a-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="220,190 320,70 420,190" fill="url(#g65a-hatch)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="120,190 170,250 220,190" fill="url(#g65a-dots)" stroke="#1d2b44" stroke-width="1"/>
<polygon points="420,190 470,250 470,190" fill="url(#g65a-dots)" stroke="#1d2b44" stroke-width="1"/>
<line x1="320" y1="70" x2="320" y2="190" stroke="#1d2b44" stroke-width="1" stroke-dasharray="5 4"/>
<line x1="50" y1="190" x2="500" y2="190" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="275" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<text x="504" y="186" font-size="12" fill="#1d2b44">t</text><text x="76" y="44" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="120" y1="186" x2="120" y2="194"/><line x1="170" y1="186" x2="170" y2="194"/><line x1="220" y1="186" x2="220" y2="194"/><line x1="270" y1="186" x2="270" y2="194"/><line x1="320" y1="186" x2="320" y2="194"/><line x1="370" y1="186" x2="370" y2="194"/><line x1="420" y1="186" x2="420" y2="194"/><line x1="470" y1="186" x2="470" y2="194"/><line x1="66" y1="250" x2="74" y2="250"/><line x1="66" y1="220" x2="74" y2="220"/><line x1="66" y1="160" x2="74" y2="160"/><line x1="66" y1="130" x2="74" y2="130"/><line x1="66" y1="100" x2="74" y2="100"/><line x1="66" y1="70" x2="74" y2="70"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="120" y="207">1</text><text x="170" y="182">2</text><text x="220" y="207">3</text><text x="270" y="207">4</text><text x="320" y="207">5</text><text x="370" y="207">6</text><text x="420" y="207">7</text><text x="470" y="182">8</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="254">−2</text><text x="62" y="224">−1</text><text x="62" y="164">1</text><text x="62" y="134">2</text><text x="62" y="104">3</text><text x="62" y="74">4</text></g>
<polyline points="70,130 170,250 320,70 470,250" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="74" y="160" width="28" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="88" y="173" font-size="12" fill="#1d2b44" text-anchor="middle">+1</text>
<rect x="155" y="208" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="170" y="221" font-size="12" fill="#1d2b44" text-anchor="middle">−2</text>
<rect x="272" y="150" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="287" y="163" font-size="12" fill="#1d2b44" text-anchor="middle">+4</text>
<rect x="338" y="150" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="353" y="163" font-size="12" fill="#1d2b44" text-anchor="middle">+4</text>
<line x1="462" y1="215" x2="482" y2="262" stroke="#1d2b44" stroke-width="1"/>
<rect x="470" y="262" width="30" height="18" fill="#ffffff" stroke="#1d2b44" stroke-width="0.8"/><text x="485" y="275" font-size="12" fill="#1d2b44" text-anchor="middle">−1</text>
<text x="330" y="66" font-size="13" fill="#1d2b44">y = f(t)</text>
</svg>
<figcaption>Figure 1. The graph of f in Worked example 1. Hatched regions lie above the t-axis and count as positive; dotted regions lie below and count as negative. The boxed labels give each region's signed area. Axes are unitless.</figcaption>
</figure>

**Question.** The continuous function f on 0 ≤ t ≤ 8 is shown in Figure 1. Let g(x) = ∫ (1 to x) f(t) dt for 0 ≤ x ≤ 8.

(a) On which intervals is g increasing? Justify.
(b) Find the x-values of all relative extrema of g, and classify each.
(c) On which intervals is the graph of g concave down? Where does it have points of inflection?
(d) Find the absolute maximum and absolute minimum values of g on [0, 8].

**(a)** g′ = f, so g increases where f > 0. From the graph, f > 0 on (0, 1) and on (3, 7). So **g is increasing on [0, 1] and on [3, 7]**, because g′(x) = f(x) > 0 there. (It is decreasing on [1, 3] and [7, 8], where f < 0.)

**(b)** The zeros of f are t = 1, 3 and 7. Check the sign change at each.

- At x = 1, f changes from positive to negative: **relative maximum**.
- At x = 3, f changes from negative to positive: **relative minimum**.
- At x = 7, f changes from positive to negative: **relative maximum**.

**(c)** g″ = f′. f is decreasing on (0, 2) and on (5, 8), so **g is concave down on (0, 2) and (5, 8)**. f is increasing on (2, 5), so g is concave up there. f changes from decreasing to increasing at t = 2 and from increasing to decreasing at t = 5, so **g has points of inflection at x = 2 and x = 5**. At both points f has a corner, so g″ does not exist there. The concavity still changes, so they are still inflection points.

**(d)** Use the candidates test. The candidates are the endpoints 0 and 8 and the critical points 1, 3 and 7. Find each value with signed areas, starting from g(1) = 0.

| x | Signed area used | g(x) |
|---|---|---|
| 0 | g(0) = ∫ (1 to 0) f = −(+1) | −1 |
| 1 | starting point | 0 |
| 3 | 0 + (−2) | −2 |
| 7 | −2 + 4 + 4 | 6 |
| 8 | 6 + (−1) | 5 |

So the **absolute maximum is 6, at x = 7**, and the **absolute minimum is −2, at x = 3**.

Notice g(0) = −1, not +1. Going from 1 back to 0 runs right to left, which reverses the sign of the area.

<figure>
<svg viewBox="0 0 520 300" role="img" aria-labelledby="g65b-title g65b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="g65b-title">Graph of g(x) = ∫ (1 to x) f(t) dt for Worked example 1</title>
<desc id="g65b-desc">A smooth curve on 0 ≤ x ≤ 8. It starts at (0, −1), rises to a relative maximum at (1, 0) marked with a filled circle, falls through a point of inflection at (2, −1) marked with an open diamond, reaches a relative minimum at (3, −2) marked with a filled square, rises steeply through a second point of inflection at (5, 2) marked with an open diamond, reaches a relative maximum at (7, 6) marked with a filled circle, and falls to (8, 5). Each marker has a text label.</desc>
<rect x="0" y="0" width="520" height="300" fill="#ffffff"/>
<line x1="50" y1="210" x2="500" y2="210" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="280" x2="70" y2="40" stroke="#1d2b44" stroke-width="1.5"/>
<text x="504" y="206" font-size="12" fill="#1d2b44">x</text><text x="76" y="44" font-size="12" fill="#1d2b44">y</text>
<g stroke="#1d2b44" stroke-width="1"><line x1="120" y1="206" x2="120" y2="214"/><line x1="170" y1="206" x2="170" y2="214"/><line x1="220" y1="206" x2="220" y2="214"/><line x1="270" y1="206" x2="270" y2="214"/><line x1="320" y1="206" x2="320" y2="214"/><line x1="370" y1="206" x2="370" y2="214"/><line x1="420" y1="206" x2="420" y2="214"/><line x1="470" y1="206" x2="470" y2="214"/><line x1="66" y1="254" x2="74" y2="254"/><line x1="66" y1="166" x2="74" y2="166"/><line x1="66" y1="122" x2="74" y2="122"/><line x1="66" y1="78" x2="74" y2="78"/></g>
<g font-size="12" fill="#1d2b44" text-anchor="middle"><text x="120" y="201">1</text><text x="170" y="201">2</text><text x="220" y="201">3</text><text x="270" y="201">4</text><text x="320" y="226">5</text><text x="370" y="226">6</text><text x="420" y="226">7</text><text x="470" y="226">8</text></g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="62" y="258">−2</text><text x="62" y="170">2</text><text x="62" y="126">4</text><text x="62" y="82">6</text></g>
<polyline points="70.0,232.0 75.0,227.8 80.0,224.1 85.0,220.8 90.0,217.9 95.0,215.5 100.0,213.5 105.0,212.0 110.0,210.9 115.0,210.2 120.0,210.0 125.0,210.2 130.0,210.9 135.0,212.0 140.0,213.5 145.0,215.5 150.0,217.9 155.0,220.8 160.0,224.1 165.0,227.8 170.0,232.0 175.0,236.2 180.0,239.9 185.0,243.2 190.0,246.1 195.0,248.5 200.0,250.5 205.0,252.0 210.0,253.1 215.0,253.8 220.0,254.0 225.0,253.8 230.0,253.1 235.0,252.0 240.0,250.5 245.0,248.5 250.0,246.1 255.0,243.2 260.0,239.9 265.0,236.2 270.0,232.0 275.0,227.4 280.0,222.3 285.0,216.8 290.0,210.9 295.0,204.5 300.0,197.7 305.0,190.4 310.0,182.7 315.0,174.6 320.0,166.0 325.0,157.4 330.0,149.3 335.0,141.6 340.0,134.3 345.0,127.5 350.0,121.1 355.0,115.2 360.0,109.7 365.0,104.6 370.0,100.0 375.0,95.8 380.0,92.1 385.0,88.8 390.0,85.9 395.0,83.5 400.0,81.5 405.0,80.0 410.0,78.9 415.0,78.2 420.0,78.0 425.0,78.2 430.0,78.9 435.0,80.0 440.0,81.5 445.0,83.5 450.0,85.9 455.0,88.8 460.0,92.1 465.0,95.8 470.0,100.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<circle cx="120" cy="210" r="5" fill="#1d2b44"/>
<circle cx="420" cy="78" r="5" fill="#1d2b44"/>
<rect x="215" y="249" width="10" height="10" fill="#1d2b44"/>
<polygon points="170,224 178,232 170,240 162,232" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<polygon points="320,158 328,166 320,174 312,166" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="128" y="182" font-size="12" fill="#1d2b44">rel. max (1, 0)</text>
<text x="220" y="276" font-size="12" fill="#1d2b44" text-anchor="middle">rel. min (3, −2)</text>
<text x="158" y="256" font-size="12" fill="#1d2b44" text-anchor="end">inflection</text>
<text x="306" y="160" font-size="12" fill="#1d2b44" text-anchor="end">inflection</text>
<text x="420" y="62" font-size="12" fill="#1d2b44" text-anchor="middle">rel. max (7, 6)</text>
<text x="476" y="104" font-size="12" fill="#1d2b44">(8, 5)</text>
</svg>
<figcaption>Figure 2. The graph of g built from Figure 1. Filled circles mark relative maxima, the filled square marks the relative minimum, and open diamonds mark the points of inflection at (2, −1) and (5, 2). The curve starts at (0, −1). Compare each feature with Figure 1: g peaks where f crosses the axis going down, and g bends the other way where f has a corner. Axes are unitless.</figcaption>
</figure>

**Check with the picture.** Figure 2 was drawn from the areas, and it agrees with every answer above. The steepest part of g is at x = 5, where f reaches its highest value, 4. The steepest point of g is an inflection point, not a maximum.

## Worked example 2: a formula for f

**Question.** Let g(x) = ∫ (0 to x) (4 − t²)/(1 + t²) dt for all real x.

(a) Find the x-values of the relative extrema of g, and classify each.
(b) Find the intervals on which the graph of g is concave up, and any points of inflection.
(c) Without finding g(2) or g(3), decide which is larger.

**(a)** The integrand is continuous for all t (the bottom 1 + t² is never 0), so

**g′(x) = (4 − x²)/(1 + x²)**

The bottom is always positive, so the sign of g′ is the sign of 4 − x² = (2 − x)(2 + x). That is negative for x < −2, positive for −2 < x < 2 and negative for x > 2.

- At x = −2, g′ changes from negative to positive: **relative minimum**.
- At x = 2, g′ changes from positive to negative: **relative maximum**.

**(b)** Differentiate g′ with the quotient rule:

g″(x) = [(−2x)(1 + x²) − (4 − x²)(2x)]/(1 + x²)² = **−10x/(1 + x²)²**

The bottom is positive, so g″ has the sign of −10x: positive for x < 0, negative for x > 0. **g is concave up on (−∞, 0)** and concave down on (0, ∞). The concavity changes at x = 0, so **(0, g(0)) = (0, 0) is a point of inflection**.

**(c)** g′(x) < 0 for every x between 2 and 3, so g is decreasing on [2, 3]. Therefore **g(2) > g(3)**. In area terms: g(3) − g(2) = ∫ (2 to 3) f(t) dt, and f is negative there, so this change is negative.

**Interpretation.** You found all of this without ever writing a formula for g. (For the record, g(2) ≈ 3.54 and g(3) ≈ 3.25, which agrees.)

## Worked example 3: a table and a description

**Question.** A garden pond is being filled by rain and emptied by a pump at the same time. The net rate of change of the water, r(t), in litres per minute, is continuous. Some values are shown.

| t (minutes) | 0 | 3 | 6 | 9 | 12 |
|---|---|---|---|---|---|
| r(t) (litres per minute) | −12 | −4 | 5 | 9 | 6 |

You are also told that r is increasing on [0, 9] and decreasing on [9, 12]. At t = 0 the pond holds 400 litres. Let V(x) = 400 + ∫ (0 to x) r(t) dt for 0 ≤ x ≤ 12. (This context and its data are invented.)

(a) Find V′(6) and interpret it.
(b) Explain why V has exactly one critical point in (0, 12), and say what kind of extremum it gives.
(c) Where is the graph of V concave up? Is there a point of inflection?
(d) Use a trapezoidal sum with the four intervals in the table to estimate V(12).

**(a)** The constant 400 has derivative 0, so V′(x) = r(x) and **V′(6) = r(6) = 5 litres per minute**. At 6 minutes the volume of water in the pond is increasing at 5 litres per minute.

**(b)** r is continuous, r(3) = −4 < 0 and r(6) = 5 > 0. By the Intermediate Value Theorem there is a time c in (3, 6) with r(c) = 0. Because r is increasing on [0, 9], it can be 0 only once there. It is positive from c to 9 and, since r(9) = 9, r(12) = 6 and r is decreasing on [9, 12], r stays at least 6 on that interval. So c is the **only** critical point. V′ = r changes from negative to positive at c, so **V has a relative minimum at t = c**. Because it is the only critical point, it is also the absolute minimum on [0, 12]: the pond holds the least water at some time between 3 and 6 minutes.

**(c)** V″ = r′. r is increasing on (0, 9), so **V is concave up on (0, 9)** and concave down on (9, 12). Concavity changes at t = 9, so the graph of V has a **point of inflection at t = 9**. In context, the water level is rising fastest at 9 minutes.

**(d)** Each interval is 3 minutes wide. Trapezoid areas:

- 3 × (−12 + (−4))/2 = −24
- 3 × (−4 + 5)/2 = 1.5
- 3 × (5 + 9)/2 = 21
- 3 × (9 + 6)/2 = 22.5

Total: −24 + 1.5 + 21 + 22.5 = 21. So **V(12) ≈ 400 + 21 = 421 litres**.

**Interpretation.** This is an estimate, because the table only gives r at five times. The behaviour in (b) and (c) is certain, because it relies on the stated facts about r, not on the table alone.

## Common misconceptions

- **Treating the graph of f as the graph of g.** "f is highest at t = 5, so g is highest at 5" is wrong. f highest means g is rising fastest. g is highest where f crosses from positive to negative.
- **"f = 0, so g has an extremum."** Only if f changes sign. If f touches the axis and keeps its sign, g has a horizontal tangent but no maximum or minimum.
- **Mixing up the two tests.** Extrema of g come from sign changes of f. Inflection points of g come from extrema of f (where f′ changes sign).
- **Thinking an inflection point needs g″ = 0.** A corner in f gives an inflection point of g where g″ does not exist.
- **Using f(c) as the value of g(c).** f(c) is a slope of g. g(c) is an accumulated area.
- **Forgetting the sign when x < a.** g(x) = ∫ (a to x) f(t) dt with x to the left of a reverses the sign of the area.
- **Skipping the endpoints.** On a closed interval the absolute maximum or minimum of g can be at an endpoint. Always compare endpoint values too.
- **Stating a reason about the wrong function.** "g is increasing because g is positive" is a different claim. Increasing g needs g′ = f > 0.

## Where this leads

You can now read the whole shape of an accumulation function from its integrand. In [Topic 6.6, Applying Properties of Definite Integrals](/advanced-course-resources/calculus-ab/6-6-applying-properties-definite-integrals-study-guide/), you will build the rules that make these area calculations faster: splitting intervals, reversing limits, scaling and adding integrands, and handling jumps in f. In Unit 8 the same ideas let you find a position from a velocity graph. The derivative fact behind everything here is in [Topic 6.4](/advanced-course-resources/calculus-ab/6-4-fundamental-theorem-calculus-accumulation-functions-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-5-interpreting-behavior-accumulation-functions-involving-checklist/) to consolidate.
