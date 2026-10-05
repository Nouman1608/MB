---
resourceId: "mb-ap-calcbc-8.13-study-guide"
title: "The Arc Length of a Smooth, Planar Curve and Distance Traveled: Study Guide (Calculus BC 8.13)"
description: "Build the arc length integral from straight-line pieces, use it for curves y = f(x) and x = g(y), and find the distance traveled along a curved path, by hand and with a calculator."
course: "calculus-bc"
unit: 8
topics: ["8.13"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "The distance formula and Pythagoras' theorem"
  - "Derivatives, including the chain rule (Units 2 and 3)"
  - "The Mean Value Theorem (Topic 5.1)"
  - "Riemann sums and the definite integral (Topics 6.2 to 6.6)"
  - "The Fundamental Theorem of Calculus and substitution (Topics 6.7 and 6.9)"
prerequisiteResources: ["mb-ap-calcab-8.12-study-guide"]
learningObjectives:
  - "Explain how the arc length integral comes from adding the lengths of many short straight segments"
  - "Write a definite integral for the length of a smooth curve y = f(x) on an interval, or x = g(y) on a y-interval"
  - "Find an exact arc length by hand when 1 + (f′(x))² simplifies to something you can integrate"
  - "Use a graphing calculator to evaluate an arc length integral and round correctly"
  - "Use arc length to find the distance traveled along a curved path, and check the answer against the straight-line distance"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Set up every arc length integral by hand. Most of them cannot be evaluated exactly, so use a graphing calculator for the value and give decimals to 3 decimal places. By-hand questions use functions chosen so that 1 + (f′(x))² simplifies."
related: ["mb-ap-calcbc-8.13-revision-notes", "mb-ap-calcbc-8.13-practice", "mb-ap-calcbc-8.13-checklist"]
next: "mb-ap-calcbc-8.13-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "For a smooth curve y = f(x) from x = a to x = b, the length is L = ∫ from a to b of √(1 + (f′(x))²) dx."
  - "Smooth means f′ is continuous on [a, b]. Split the interval at any corner."
  - "The integrand is at least 1, so the length is at least b − a, and never less than the straight-line distance between the end points."
  - "The distance traveled by a point moving along the curve from one end to the other, without turning back, is the arc length."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Arc length is BC-only content. AB students can skip this page."
  - question: "Will I have to find arc lengths without a calculator?"
    answer: "Only for specially chosen curves where 1 + (f′(x))² becomes a perfect square or a simple expression. Most arc length integrals have no elementary antiderivative, so you set them up by hand and evaluate them with a calculator."
  - question: "Is arc length the same as the total distance from Topic 8.2?"
    answer: "Both are distances traveled, but for different motions. Topic 8.2 integrates speed |v(t)| for motion along a straight line. Arc length measures the length of a curved path in the plane, using the slope f′(x)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Arc length is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

If any of these is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Pythagoras' theorem and the distance formula | Before calculus | The length of each short straight piece |
| Derivatives and the chain rule | Units 2 and 3 | Finding f′(x) for the integrand |
| Mean Value Theorem | 5.1 | Turning a chord's slope into a value of f′ |
| Riemann sums and definite integrals | 6.2 to 6.6 | Turning a sum of pieces into an integral |
| Fundamental Theorem and substitution | 6.7, 6.9 | Evaluating the integral exactly, when that is possible |

Notation on this page: **∫ from a to b of f(x) dx** is the definite integral with lower limit a and upper limit b, and **[F(x)] from a to b** means F(b) − F(a). L stands for length.

## What arc length means

Earlier in Unit 8 you used definite integrals to add up thin pieces of **area** and **volume**. This topic adds up thin pieces of **length**.

Imagine a piece of string lying exactly along the graph of y = f(x) from x = a to x = b. Pull the string straight and measure it. That measurement is the **arc length** of the curve. It is a length, so its units are the units of the axes (metres, kilometres, and so on), not square units.

You already know one case. For a straight line, the distance formula gives the length directly. Calculus is needed when the curve bends.

## Building the formula from straight pieces

**Step 1: cut the curve into pieces.** Split [a, b] into n subintervals of width Δx. Join the points on the curve above the division points with straight segments (chords). The chain of chords is a polygon that follows the curve.

**Step 2: measure one chord with Pythagoras.** If a chord covers a horizontal change Δx and a vertical change Δy, its length is

**Δs = √((Δx)² + (Δy)²) = √(1 + (Δy/Δx)²) · Δx**

**Step 3: replace the slope of the chord by a derivative.** If f is differentiable, the Mean Value Theorem says the chord's slope Δy/Δx equals f′(c) for some c inside that subinterval. So each chord has length √(1 + (f′(c))²) · Δx.

**Step 4: add and take the limit.** The total length of the chords is a Riemann sum:

**Σ √(1 + (f′(cᵢ))²) Δx**

As n → ∞ the chords hug the curve and the sum becomes a definite integral.

<figure>
<svg viewBox="0 0 520 450" role="img" aria-labelledby="chord-title chord-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="chord-title">The curve y = (2/3)(x − 1)^(3/2) from x = 1 to x = 4, approximated by three straight chords</title>
<desc id="chord-desc">Axes with x from 0 to 4 and y from 0 to 3.5, drawn to the same scale. A solid curve rises from (1, 0) to (4, 3.464), getting steeper. Three dashed straight chords join the points (1, 0), (2, 0.667), (3, 1.886) and (4, 3.464), and each point is marked with a dot. The last chord is the long side of a right triangle: its horizontal leg is labelled delta x, its vertical leg delta y, and the chord itself delta s. A box states that the three chords add up to about 4.647, while the exact curve length is 14/3, about 4.667.</desc>
<rect x="0" y="0" width="520" height="450" fill="#ffffff"/>
<line x1="70" y1="400" x2="500" y2="400" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="415" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="396" x2="170" y2="404"/><line x1="270" y1="396" x2="270" y2="404"/><line x1="370" y1="396" x2="370" y2="404"/><line x1="470" y1="396" x2="470" y2="404"/>
<line x1="66" y1="300" x2="74" y2="300"/><line x1="66" y1="200" x2="74" y2="200"/><line x1="66" y1="100" x2="74" y2="100"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="418">0</text><text x="170" y="418">1</text><text x="270" y="418">2</text><text x="370" y="418">3</text><text x="470" y="418">4</text>
<text x="290" y="440" font-size="13">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="304">1</text><text x="62" y="204">2</text><text x="62" y="104">3</text>
</g>
<text x="40" y="215" font-size="13" fill="#1d2b44" text-anchor="middle">y</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="170.0,400.0 175.0,399.3 180.0,397.9 185.0,396.1 190.0,394.0 195.0,391.7 200.0,389.0 205.0,386.2 210.0,383.1 215.0,379.9 220.0,376.4 225.0,372.8 230.0,369.0 235.0,365.1 240.0,361.0 245.0,356.7 250.0,352.3 255.0,347.8 260.0,343.1 265.0,338.3 270.0,333.3 275.0,328.3 280.0,323.1 285.0,317.8 290.0,312.4 295.0,306.8 300.0,301.2 305.0,295.4 310.0,289.6 315.0,283.6 320.0,277.5 325.0,271.4 330.0,265.1 335.0,258.7 340.0,252.2 345.0,245.7 350.0,239.0 355.0,232.2 360.0,225.4 365.0,218.5 370.0,211.4 375.0,204.3 380.0,197.1 385.0,189.8 390.0,182.5 395.0,175.0 400.0,167.5 405.0,159.8 410.0,152.1 415.0,144.3 420.0,136.5 425.0,128.5 430.0,120.5 435.0,112.4 440.0,104.2 445.0,96.0 450.0,87.6 455.0,79.2 460.0,70.8 465.0,62.2 470.0,53.6"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5" points="170,400 270,333.3 370,211.4 470,53.6"/>
<line x1="370" y1="211.4" x2="470" y2="211.4" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<line x1="470" y1="211.4" x2="470" y2="53.6" stroke="#1d2b44" stroke-width="1" stroke-dasharray="2 3"/>
<g fill="#1d2b44"><circle cx="170" cy="400" r="4"/><circle cx="270" cy="333.3" r="4"/><circle cx="370" cy="211.4" r="4"/><circle cx="470" cy="53.6" r="4"/></g>
<g font-size="13" fill="#1d2b44">
<text x="420" y="230" text-anchor="middle">Δx</text>
<text x="478" y="136">Δy</text>
<text x="388" y="118" text-anchor="end">Δs (chord)</text>
<text x="210" y="300" text-anchor="end">chords (dashed)</text>
<text x="300" y="370">curve (solid)</text>
</g>
<rect x="88" y="44" width="230" height="56" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<text x="203" y="66" font-size="12" fill="#1d2b44" text-anchor="middle">3 chords: total ≈ 4.647</text>
<text x="203" y="86" font-size="12" fill="#1d2b44" text-anchor="middle">curve: L = 14/3 ≈ 4.667</text>
</svg>
<figcaption>Figure 1. Three chords (dashed) follow the curve y = (2/3)(x − 1)^(3/2) (solid). Each chord is the hypotenuse of a right triangle with legs Δx and Δy, so Δs = √(Δx² + Δy²). The chords are slightly shorter than the curve; more chords close the gap.</figcaption>
</figure>

You can watch the chord totals approach the true length for the curve in Figure 1 (Worked example 1 finds the exact value):

| Number of chords | 3 | 6 | 30 | Exact (integral) |
|---|---|---|---|---|
| Total chord length | 4.647 | 4.660 | 4.666 | 14/3 ≈ 4.667 |

Chords always come out a little short, because a straight segment is the shortest path between its end points.

## The arc length formula

> **Length of y = f(x) from x = a to x = b: L = ∫ from a to b of √(1 + (f′(x))²) dx**

**Condition: the curve must be smooth.** Here this means f′ exists and is continuous on [a, b]. Then the integrand is continuous and the integral exists. If the graph has a corner, such as y = |x − 2| at x = 2, split the interval at the corner and add the lengths of the pieces. (For y = |x − 2| on [0, 4] each piece is a straight segment of length 2√2, so L = 4√2 ≈ 5.657.)

**Three quick facts that help you check answers.**

- The integrand √(1 + (f′(x))²) is always **at least 1**, so L ≥ b − a. Equality holds only for a horizontal line.
- For a straight line y = mx + c, the integrand is the constant √(1 + m²), so L = (b − a)√(1 + m²). This is the distance formula again.
- L is never less than the straight-line distance (the chord) between the two end points.

A useful shorthand: **ds = √(1 + (dy/dx)²) dx** is the length of a tiny piece of curve. The integral adds up all the ds pieces.

## Curves written as x = g(y)

Sometimes a curve is easier to describe with x as a function of y, for example x = 4 − y². Swap the roles of the variables:

> **Length of x = g(y) from y = c to y = d: L = ∫ from c to d of √(1 + (g′(y))²) dy**

This needs g′ continuous on [c, d]. The limits are **y-values**, and the variable of integration is y. Use this form when the curve fails the vertical line test, or when dy/dx would be undefined at an end point (as for y = √(4 − x) at x = 4) but dx/dy is not.

## Arc length as distance traveled

If a point (a hiker, a bead on a wire, a car on a road) moves along the curve y = f(x) from x = a to x = b, and never turns back, then the **distance it travels along the path is the arc length**. It does not matter how fast it moves. Only the shape of the path matters.

Compare three kinds of "distance" you meet in calculus:

| Situation | Distance traveled | Topic |
|---|---|---|
| Motion along a straight line with velocity v(t) | ∫ from t₁ to t₂ of \|v(t)\| dt | 8.2 |
| Moving along a curve y = f(x) from x = a to x = b | ∫ from a to b of √(1 + (f′(x))²) dx | 8.13 (this topic) |
| Motion in the plane given as x(t), y(t) | ∫ of the speed √((x′(t))² + (y′(t))²) dt | 9.3 and 9.6 (later) |

Two other quantities are easy to confuse with distance traveled. The **straight-line distance** between the end points is the chord length, and it is the shortest possible. The **vertical change** f(b) − f(a) ignores horizontal movement completely.

## Worked example 1: an exact length without a calculator

**Question.** Find the exact length of the curve y = (2/3)(x − 1)^(3/2) for 1 ≤ x ≤ 4. Check that your answer is sensible.

1. **Differentiate.** By the chain rule, f′(x) = (2/3) · (3/2)(x − 1)^(1/2) · 1 = √(x − 1).
2. **Check smoothness.** √(x − 1) is continuous on [1, 4], so the formula applies.
3. **Build the integrand.** 1 + (f′(x))² = 1 + (x − 1) = x. So √(1 + (f′(x))²) = √x.
4. **Set up.** L = ∫ from 1 to 4 of √x dx.
5. **Integrate.** An antiderivative of x^(1/2) is (2/3)x^(3/2). So
   L = [(2/3)x^(3/2)] from 1 to 4 = (2/3)(8) − (2/3)(1) = **14/3 ≈ 4.667**.

**Checks.**
- *Antiderivative:* d/dx[(2/3)x^(3/2)] = x^(1/2) = √x. ✓
- *Chord:* the end points are (1, 0) and (4, 2√3), since f(4) = (2/3)(3)^(3/2) = 2√3 ≈ 3.464. The chord length is √(3² + (2√3)²) = √21 ≈ 4.583. The curve must be a little longer, and 4.667 > 4.583. ✓
- *At least b − a:* 4.667 ≥ 4 − 1 = 3. ✓

**Why this worked.** The function was chosen so that 1 + (f′(x))² became a simple expression. That is typical of no-calculator arc length questions. If the square root does not simplify, you will need a calculator.

## Worked example 2: distance traveled over a ridge (calculator)

**Context.** A walking trail crosses a ridge. Seen from the side, the trail follows **y = 0.06(25 − x²)** for −5 ≤ x ≤ 5, where x and y are in kilometres (x is horizontal distance, y is height above the valley floor). A tunnel would instead run straight along y = 0 from x = −5 to x = 5.

(a) How far does a walker travel along the trail?
(b) How much further is this than the tunnel route?
(c) At a steady 4 km/h along either route, how much extra time does the trail take?

<figure>
<svg viewBox="0 0 540 220" role="img" aria-labelledby="ridge-title ridge-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="ridge-title">Side view of a trail over a ridge, y = 0.06(25 − x²), compared with a straight tunnel along y = 0</title>
<desc id="ridge-desc">Horizontal axis from x = −5 to x = 5 kilometres, with the vertical axis drawn to the same scale. A solid curve rises from (−5, 0) to a peak of 1.5 kilometres at x = 0 and falls back to (5, 0). A dashed straight line along y = 0 joins the same two end points and is labelled tunnel, 10 kilometres. The curve is labelled trail, about 10.571 kilometres.</desc>
<rect x="0" y="0" width="540" height="220" fill="#ffffff"/>
<line x1="30" y1="150" x2="515" y2="150" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="8 5"/>
<line x1="270" y1="160" x2="270" y2="40" stroke="#1d2b44" stroke-width="1"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="40" y1="146" x2="40" y2="154"/><line x1="86" y1="146" x2="86" y2="154"/><line x1="132" y1="146" x2="132" y2="154"/><line x1="178" y1="146" x2="178" y2="154"/><line x1="224" y1="146" x2="224" y2="154"/><line x1="316" y1="146" x2="316" y2="154"/><line x1="362" y1="146" x2="362" y2="154"/><line x1="408" y1="146" x2="408" y2="154"/><line x1="454" y1="146" x2="454" y2="154"/><line x1="500" y1="146" x2="500" y2="154"/>
<line x1="266" y1="104" x2="274" y2="104"/><line x1="266" y1="58" x2="274" y2="58"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="40" y="170">−5</text><text x="132" y="170">−3</text><text x="224" y="170">−1</text><text x="316" y="170">1</text><text x="408" y="170">3</text><text x="500" y="170">5</text>
<text x="270" y="200" font-size="13">horizontal distance x (km)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end"><text x="262" y="108">1</text><text x="262" y="62">2</text></g>
<text x="270" y="32" font-size="12" fill="#1d2b44" text-anchor="middle">height y (km)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="40.0,150.0 49.2,144.6 58.4,139.4 67.6,134.4 76.8,129.7 86.0,125.2 95.2,120.9 104.4,116.8 113.6,112.9 122.8,109.3 132.0,105.8 141.2,102.6 150.4,99.7 159.6,96.9 168.8,94.4 178.0,92.0 187.2,89.9 196.4,88.1 205.6,86.4 214.8,85.0 224.0,83.8 233.2,82.8 242.4,82.0 251.6,81.4 260.8,81.1 270.0,81.0 279.2,81.1 288.4,81.4 297.6,82.0 306.8,82.8 316.0,83.8 325.2,85.0 334.4,86.4 343.6,88.1 352.8,89.9 362.0,92.0 371.2,94.4 380.4,96.9 389.6,99.7 398.8,102.6 408.0,105.8 417.2,109.3 426.4,112.9 435.6,116.8 444.8,120.9 454.0,125.2 463.2,129.7 472.4,134.4 481.6,139.4 490.8,144.6 500.0,150.0"/>
<text x="400" y="80" font-size="12" fill="#1d2b44">trail (solid) ≈ 10.571 km</text>
<text x="120" y="142" font-size="12" fill="#1d2b44">tunnel (dashed) = 10 km</text>
<text x="282" y="76" font-size="12" fill="#1d2b44">peak 1.5 km</text>
</svg>
<figcaption>Figure 2. Side view drawn to equal scale on both axes. The trail (solid) and the tunnel (dashed) join the same two points. The trail is longer, but only by about 0.571 km, because its slope never exceeds 0.6 in size.</figcaption>
</figure>

**(a)**

1. **Differentiate.** f(x) = 1.5 − 0.06x², so f′(x) = −0.12x. This is continuous on [−5, 5], so the curve is smooth.
2. **Set up.** L = ∫ from −5 to 5 of √(1 + (−0.12x)²) dx = ∫ from −5 to 5 of √(1 + 0.0144x²) dx.
3. **Evaluate with a calculator.** L ≈ **10.571 km**.

Write the integral before you press any buttons. On a free-response question, the setup earns credit in its own right.

**(b)** Extra distance ≈ 10.571 − 10 = **0.571 km**, about 571 m.

**(c)** Trail time = 10.571 ÷ 4 ≈ 2.643 hours; tunnel time = 10 ÷ 4 = 2.5 hours. Extra time ≈ 0.143 hours ≈ **8.6 minutes**. (To avoid rounding errors, divide the stored value of L, not the rounded one.)

**Checks.**
- *Units:* x and y are both in km, so the arc length is in km. ✓
- *Bounds:* |f′(x)| ≤ 0.6 on the interval, so the integrand lies between 1 and √1.36 ≈ 1.166. Then 10 ≤ L ≤ 11.662, and 10.571 fits. ✓
- *Symmetry:* the curve is symmetric about x = 0, and 2 × ∫ from 0 to 5 of √(1 + 0.0144x²) dx gives the same value (each half is about 5.286 km). ✓

**Two tempting wrong integrals.** ∫ from −5 to 5 of f(x) dx = 10 is an **area** (in km²), not a length. ∫ from −5 to 5 of |f′(x)| dx = 3 is the total **up-and-down** change (1.5 km up, then 1.5 km down), which ignores the horizontal distance.

## Common misconceptions

- **Forgetting the "1" or the square root.** √(1 + (f′)²) is not √((f′)²) = |f′|, and it is not 1 + (f′)².
- **Using f instead of f′.** ∫ √(1 + (f(x))²) dx is not the arc length. For Worked example 1 it gives about 5.498 instead of 4.667.
- **Splitting the square root.** √(1 + (f′)²) is not 1 + f′. A square root does not split over a sum.
- **Mixing variables.** If you integrate with respect to y, the limits must be y-values and the derivative must be dx/dy.
- **Using the formula across a corner.** At a corner or a vertical tangent f′ is not continuous. Split the interval, or switch to x = g(y).
- **Thinking the length can be less than the chord.** If your answer is shorter than the straight-line distance between the end points, something is wrong.
- **Confusing distance traveled with net change.** The distance along the path is not |f(b) − f(a)|, and it is not the chord either.
- **Rounding too early.** Store the calculator value and round only the final answer to 3 decimal places.

## Where this leads

This is the last topic of Unit 8. Unit 9 (BC only) starts with [Topic 9.1, defining and differentiating parametric equations](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-study-guide/). In Topic 9.3 the same idea of adding short chord lengths gives the length of a parametric curve, using √((dx/dt)² + (dy/dt)²) dt, and in Topic 9.6 the integral of speed gives the distance traveled by a particle moving in the plane. The previous topic was [Topic 8.12, the washer method around other axes](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/). Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-checklist/) to consolidate.
