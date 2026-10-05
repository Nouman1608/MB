---
resourceId: "mb-ap-calcbc-9.7-study-guide"
title: "Defining Polar Coordinates and Differentiating in Polar Form: Study Guide (Calculus BC 9.7)"
description: "Learn what polar coordinates mean, convert between polar and rectangular form, and find dr/dθ, dx/dθ, dy/dθ, dy/dx and d²y/dx² for a polar curve r = f(θ)."
course: "calculus-bc"
unit: 9
topics: ["9.7"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Derivatives of parametric curves, dy/dx = (dy/dt) ÷ (dx/dt) (Topic 9.1)"
  - "Second derivatives of parametric curves (Topic 9.2)"
  - "Product rule and chain rule (Topics 2.8 and 3.1)"
  - "Exact values of sine and cosine on the unit circle, in radians"
prerequisiteResources: ["mb-ap-calcbc-9.6-study-guide"]
learningObjectives:
  - "Plot points given in polar coordinates, including points with a negative r, and convert between polar and rectangular coordinates and equations"
  - "Treat a polar curve r = f(θ) as a parametric curve with x = f(θ) cos θ and y = f(θ) sin θ"
  - "Find dr/dθ, dx/dθ and dy/dθ and say what each one tells you about a point moving along the curve"
  - "Find dy/dx and d²y/dx² for a polar curve, write tangent lines and decide concavity"
  - "Locate horizontal and vertical tangents, checking that the other derivative is not zero"
skills: ["1", "2"]
studyMinutes: 55
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives at exact angles by hand. On calculator questions, set the calculator to radians and give decimals to 3 decimal places, keeping more digits in working."
related: ["mb-ap-calcbc-9.7-revision-notes", "mb-ap-calcbc-9.7-practice", "mb-ap-calcbc-9.7-checklist"]
next: "mb-ap-calcbc-9.7-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A polar point (r, θ) is r units from the pole along the ray at angle θ. Convert with x = r cos θ, y = r sin θ and r² = x² + y²."
  - "A polar curve r = f(θ) is a parametric curve with parameter θ: x = f(θ) cos θ, y = f(θ) sin θ."
  - "dy/dx = (dy/dθ) ÷ (dx/dθ), where dx/dθ = f′(θ) cos θ − f(θ) sin θ and dy/dθ = f′(θ) sin θ + f(θ) cos θ."
  - "dr/dθ is not the slope. It tells you whether the point is moving away from the pole (r and dr/dθ with the same sign) or towards it (opposite signs)."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Polar coordinates are BC-only content. AB students can skip this page."
  - question: "Do I need to memorise the dy/dx formula for polar curves?"
    answer: "It helps, but you can always rebuild it: write x = r cos θ and y = r sin θ, differentiate each with the product rule, then divide dy/dθ by dx/dθ."
  - question: "Can r be negative?"
    answer: "Yes. A negative r means you go |r| units in the direction opposite to the ray at angle θ. So (−2, π/4) and (2, 5π/4) are the same point."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Polar coordinates are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic reuses the parametric tools of Topics 9.1 and 9.2 with a new parameter, the angle θ. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| dy/dx for parametric curves | 9.1 | dy/dx = (dy/dθ) ÷ (dx/dθ) |
| Second derivatives of parametric curves | 9.2 | d²y/dx² for a polar curve |
| Product rule and chain rule | 2.8, 3.1 | Differentiating x = f(θ) cos θ and y = f(θ) sin θ |
| Unit-circle values in radians | Precalculus | Exact values such as cos(π/3) = ½ |

Notation on this page: r′ or f′(θ) means dr/dθ. Angles are in radians. The **pole** is the origin.

## What polar coordinates are

Rectangular coordinates (x, y) describe a point by how far to go across and up. **Polar coordinates (r, θ)** describe it by a direction and a distance:

- θ is the angle measured anticlockwise from the positive x-axis (the **polar axis**);
- r is the signed distance from the pole along the ray at angle θ.

Right-angled triangle trigonometry links the two systems:

> **x = r cos θ, y = r sin θ, r² = x² + y², tan θ = y/x (when x ≠ 0)**

**Example.** The polar point (4, 5π/6) has x = 4 cos(5π/6) = −2√3 and y = 4 sin(5π/6) = 2. So it is (−2√3, 2).

**Going the other way.** For the rectangular point (−3, 3), r = √(9 + 9) = 3√2. The point is in the second quadrant, so θ = 3π/4, not the calculator's tan⁻¹(−1) = −π/4. Always check the quadrant.

**One point, many names.** Adding 2π to θ gives the same point, so (2, π/6) and (2, 13π/6) coincide. A **negative r** means "face along the ray at angle θ, then walk backwards". So (−2, π/4) is the point (−√2, −√2), the same point as (2, 5π/4). Rectangular coordinates are unique; polar coordinates are not.

## Polar curves and equations

A **polar equation** r = f(θ) gives one distance for each angle. As θ increases, the point (f(θ), θ) sweeps round the pole and traces a curve. Some shapes you will meet often:

| Equation | Shape |
|---|---|
| r = a | Circle of radius a centred at the pole |
| θ = α | Straight line through the pole |
| r = 2a cos θ or r = 2a sin θ | Circle through the pole |
| r = a + b cos θ (or sin θ) | Limaçon; a cardioid when a = b |
| r = a sin(nθ) or a cos(nθ) | Rose with petals |

You do not have to memorise this table. You can always sketch a curve from a table of values: choose θ = 0, π/6, π/4, … and plot each (r, θ).

**Converting equations.** Use r² = x² + y² and r cos θ = x. For r = 6 cos θ, multiply both sides by r: r² = 6r cos θ, so x² + y² = 6x, which is (x − 3)² + y² = 9. That is a circle of radius 3 centred at (3, 0).

## A polar curve is a parametric curve

Here is the key idea of the topic. For the curve r = f(θ), every point has

> **x = f(θ) cos θ, y = f(θ) sin θ**

These are **parametric equations with parameter θ**. So everything you learned in Topics 9.1 and 9.2 applies, with θ in the place of t.

Differentiate each with the **product rule**:

> **dx/dθ = f′(θ) cos θ − f(θ) sin θ**
> **dy/dθ = f′(θ) sin θ + f(θ) cos θ**

and then, as for any parametric curve,

> **dy/dx = (dy/dθ) ÷ (dx/dθ), provided dx/dθ ≠ 0**

**Second derivative.** As in Topic 9.2, dy/dx is a function of θ, so differentiate it with respect to θ and divide by dx/dθ again:

> **d²y/dx² = [d/dθ (dy/dx)] ÷ (dx/dθ)**

**Horizontal and vertical tangents.**

- Horizontal tangent: dy/dθ = 0 and dx/dθ ≠ 0.
- Vertical tangent: dx/dθ = 0 and dy/dθ ≠ 0.
- Both zero: the formula gives 0/0 and tells you nothing on its own. Investigate further.

**A tangent at the pole.** If f(α) = 0 and f′(α) ≠ 0, the curve passes through the pole at θ = α, and the formula simplifies to dy/dx = tan α. The tangent there is the line θ = α. For example, r = 2 sin 3θ passes through the pole at θ = π/3 with r′ = 6 cos π = −6 ≠ 0, so the tangent there is the line θ = π/3.

<figure>
<svg viewBox="0 0 540 400" role="img" aria-labelledby="pol97-title pol97-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="pol97-title">The polar curve r = 3 − 2 cos θ with a point, its polar coordinates and a tangent line</title>
<desc id="pol97-desc">Polar grid centred on the pole, with dotted circles of radius 1 to 4 and the x- and y-axes. The curve r = 3 − 2 cos θ is a dimpled limaçon: it crosses the positive x-axis at (1, 0), the y-axis at (0, 3) and (0, −3), and the negative x-axis at (−5, 0). A solid segment from the pole to the point P(1, √3) makes an angle θ = π/3 with the positive x-axis, marked by an arc; the segment is labelled r = 2. At the point Q(0, 3), where θ = π/2, a dashed tangent line with slope −2/3 is drawn.</desc>
<rect x="0" y="0" width="540" height="400" fill="#ffffff"/>
<circle cx="345" cy="200" r="50" fill="none" stroke="#9aa3b2" stroke-width="0.8" stroke-dasharray="3 4"/>
<circle cx="345" cy="200" r="100" fill="none" stroke="#9aa3b2" stroke-width="0.8" stroke-dasharray="3 4"/>
<circle cx="345" cy="200" r="150" fill="none" stroke="#9aa3b2" stroke-width="0.8" stroke-dasharray="3 4"/>
<circle cx="345" cy="200" r="200" fill="none" stroke="#9aa3b2" stroke-width="0.8" stroke-dasharray="3 4"/>
<line x1="40" y1="200" x2="530" y2="200" stroke="#1d2b44" stroke-width="1.2"/>
<line x1="345" y1="390" x2="345" y2="10" stroke="#1d2b44" stroke-width="1.2"/>
<text x="95" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">−5</text>
<text x="145" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">−4</text>
<text x="195" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">−3</text>
<text x="245" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">−2</text>
<text x="295" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">−1</text>
<text x="395" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">1</text>
<text x="445" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">2</text>
<text x="495" y="215" font-size="11" fill="#1d2b44" text-anchor="middle">3</text>
<text x="339" y="354" font-size="11" fill="#1d2b44" text-anchor="end">−3</text>
<text x="524" y="194" font-size="12" fill="#1d2b44" text-anchor="end">x</text>
<text x="353" y="20" font-size="12" fill="#1d2b44">y</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="395.0,200.0 395.0,198.3 395.1,196.5 395.3,194.7 395.5,192.9 395.7,191.1 396.0,189.2 396.4,187.2 396.8,185.2 397.2,183.0 397.7,180.8 398.1,178.5 398.6,176.1 399.0,173.6 399.5,171.0 399.9,168.3 400.3,165.5 400.6,162.5 400.9,159.4 401.1,156.2 401.2,152.8 401.2,149.4 401.2,145.8 400.9,142.1 400.6,138.3 400.1,134.3 399.4,130.3 398.6,126.2 397.6,122.0 396.4,117.7 395.0,113.4 393.4,109.0 391.5,104.6 389.5,100.1 387.2,95.7 384.6,91.2 381.8,86.7 378.7,82.3 375.4,77.9 371.9,73.6 368.0,69.4 363.9,65.2 359.6,61.2 355.0,57.3 350.1,53.6 345.0,50.0 339.6,46.6 334.0,43.4 328.2,40.4 322.2,37.7 315.9,35.2 309.5,32.9 302.9,31.0 296.1,29.3 289.1,28.0 282.0,26.9 274.8,26.2 267.4,25.8 260.0,25.8 252.5,26.1 245.0,26.8 237.4,27.9 229.9,29.3 222.3,31.1 214.7,33.3 207.3,35.9 199.9,38.8 192.5,42.1 185.4,45.8 178.3,49.9 171.4,54.3 164.7,59.1 158.2,64.3 151.9,69.8 145.9,75.6 140.1,81.7 134.6,88.1 129.4,94.8 124.5,101.8 120.0,109.1 115.7,116.6 111.9,124.3 108.4,132.2 105.3,140.2 102.6,148.5 100.3,156.9 98.4,165.3 96.9,173.9 95.9,182.6 95.2,191.3 95.0,200.0 95.2,208.7 95.9,217.4 96.9,226.1 98.4,234.7 100.3,243.1 102.6,251.5 105.3,259.8 108.4,267.8 111.9,275.7 115.7,283.4 120.0,290.9 124.5,298.2 129.4,305.2 134.6,311.9 140.1,318.3 145.9,324.4 151.9,330.2 158.2,335.7 164.7,340.9 171.4,345.7 178.3,350.1 185.4,354.2 192.5,357.9 199.9,361.2 207.3,364.1 214.7,366.7 222.3,368.9 229.9,370.7 237.4,372.1 245.0,373.2 252.5,373.9 260.0,374.2 267.4,374.2 274.8,373.8 282.0,373.1 289.1,372.0 296.1,370.7 302.9,369.0 309.5,367.1 315.9,364.8 322.2,362.3 328.2,359.6 334.0,356.6 339.6,353.4 345.0,350.0 350.1,346.4 355.0,342.7 359.6,338.8 363.9,334.8 368.0,330.6 371.9,326.4 375.4,322.1 378.7,317.7 381.8,313.3 384.6,308.8 387.2,304.3 389.5,299.9 391.5,295.4 393.4,291.0 395.0,286.6 396.4,282.3 397.6,278.0 398.6,273.8 399.4,269.7 400.1,265.7 400.6,261.7 400.9,257.9 401.2,254.2 401.2,250.6 401.2,247.2 401.1,243.8 400.9,240.6 400.6,237.5 400.3,234.5 399.9,231.7 399.5,229.0 399.0,226.4 398.6,223.9 398.1,221.5 397.7,219.2 397.2,217.0 396.8,214.8 396.4,212.8 396.0,210.8 395.7,208.9 395.5,207.1 395.3,205.3 395.1,203.5 395.0,201.7 395.0,200.0"/>
<line x1="345" y1="200" x2="395.0" y2="113.4" stroke="#1d2b44" stroke-width="2"/>
<circle cx="395.0" cy="113.4" r="4.5" fill="#1d2b44"/>
<text x="405.0" y="139.4" font-size="13" fill="#1d2b44">P(1, √3)</text>
<path d="M380.0 200 A35.0 35.0 0 0 0 362.5 169.7" fill="none" stroke="#1d2b44" stroke-width="1.2"/>
<text x="376" y="191" font-size="13" fill="#1d2b44">θ</text>
<text x="356.2" y="151.7" font-size="12" fill="#1d2b44" text-anchor="end">r = 2</text>
<line x1="270.0" y1="0.0" x2="465.0" y2="130.0" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<circle cx="345.0" cy="50.0" r="4.5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="355.0" y="41.0" font-size="13" fill="#1d2b44">Q(0, 3)</text>
<text x="530" y="150.0" font-size="12" fill="#1d2b44" text-anchor="end">tangent at Q</text>
<text x="530" y="165.0" font-size="12" fill="#1d2b44" text-anchor="end">slope −2/3</text>
<text x="60" y="60" font-size="13" fill="#1d2b44">r = 3 − 2 cos θ</text>
<text x="349" y="228" font-size="11" fill="#1d2b44">pole O</text>
</svg>
<figcaption>Figure 1. The curve r = 3 − 2 cos θ (solid). The point P has polar coordinates (2, π/3): it is 2 units from the pole along the ray at angle π/3, so its rectangular coordinates are (1, √3). At Q(0, 3), where θ = π/2, the tangent line (dashed) has slope −2/3. The dotted circles mark r = 1, 2, 3 and 4.</figcaption>
</figure>

## Three derivatives, three meanings

For a polar curve you can be asked about several rates. Keep them apart.

| Derivative | What it measures | How to read its sign |
|---|---|---|
| dr/dθ | How r changes as θ increases | If r > 0: positive means moving **away** from the pole. If r < 0, the reverse. |
| dx/dθ | How the x-coordinate changes as θ increases | Positive: the point moves right |
| dy/dθ | How the y-coordinate changes as θ increases | Positive: the point moves up |
| dy/dx | Slope of the tangent line in the xy-plane | Ordinary slope |

The rule for distance comes from |r|: the distance from the pole is **increasing** when r and dr/dθ have the **same sign**, and **decreasing** when they have **opposite signs**.

## Worked example 1: a limaçon by hand

**Question.** The curve r = 3 − 2 cos θ for 0 ≤ θ < 2π is shown in Figure 1. Without a calculator:

(a) find dr/dθ at θ = π/2 and say what it tells you;
(b) find the slope of the curve at θ = π/2 and the equation of the tangent line there;
(c) find d²y/dx² at θ = π/2 and state the concavity;
(d) find every point where the curve has a vertical tangent.

**(a)** dr/dθ = 2 sin θ, so at θ = π/2, dr/dθ = 2. Also r(π/2) = 3 > 0. Since r and dr/dθ are both positive, the point is **moving away from the pole** as θ increases through π/2.

**(b)** Write the parametric form: x = (3 − 2 cos θ) cos θ, y = (3 − 2 cos θ) sin θ.

1. At θ = π/2: r = 3, r′ = 2, cos θ = 0, sin θ = 1.
2. dx/dθ = r′ cos θ − r sin θ = 2(0) − 3(1) = **−3**.
3. dy/dθ = r′ sin θ + r cos θ = 2(1) + 3(0) = **2**.
4. dy/dx = 2 ÷ (−3) = **−2/3**.
5. The point is x = 3 cos(π/2) = 0, y = 3 sin(π/2) = 3, so Q(0, 3).
6. Tangent line: **y = 3 − (2/3)x**.

*Check with the picture:* at Q the curve is near its top, sloping gently down to the right. A small negative slope fits.

**(c)** It helps to simplify first. Expanding and using double-angle identities:

- dy/dθ = 2 sin²θ + 3 cos θ − 2 cos²θ = 3 cos θ − 2 cos 2θ
- dx/dθ = 2 sin θ cos θ − 3 sin θ + 2 sin θ cos θ = 2 sin 2θ − 3 sin θ

So dy/dx = N/D with N = 3 cos θ − 2 cos 2θ and D = 2 sin 2θ − 3 sin θ.

1. At θ = π/2: N = 2, D = −3, N′ = −3 sin θ + 4 sin 2θ = −3, D′ = 4 cos 2θ − 3 cos θ = −4.
2. Quotient rule: d/dθ (dy/dx) = (N′D − ND′)/D² = ((−3)(−3) − (2)(−4))/9 = 17/9.
3. Divide by dx/dθ = −3: **d²y/dx² = (17/9) ÷ (−3) = −17/27**.

Negative, so the curve is **concave down** at Q. That matches the figure: near Q the curve lies below its tangent line.

**(d)** Vertical tangents need dx/dθ = 0. Factorise: dx/dθ = sin θ (4 cos θ − 3).

- sin θ = 0 gives θ = 0 or π.
- cos θ = 3/4 gives θ = cos⁻¹(3/4) (about 0.723) or 2π − cos⁻¹(3/4).

Now check dy/dθ = 3 cos θ − 2 cos 2θ at each:

| θ | dy/dθ | r | Point (x, y) |
|---|---|---|---|
| 0 | 3 − 2 = 1 | 1 | (1, 0) |
| π | −3 − 2 = −5 | 5 | (−5, 0) |
| cos θ = 3/4 | 9/4 − 2(1/8) = 2 | 3/2 | (9/8, ±3√7/8) |

For cos θ = 3/4, cos 2θ = 2(9/16) − 1 = 1/8, and sin θ = ±√7/4. All four dy/dθ values are non-zero, so there are **four vertical tangents**: at (1, 0), (−5, 0) and (9/8, ±3√7/8). The two at x = 9/8 sit either side of the "dimple" on the right of the curve, slightly further right than (1, 0).

## Worked example 2: a pond edge, with a calculator

**Context.** The edge of a fictional garden pond is the polar curve r = 3 + sin 2θ for 0 ≤ θ < 2π. The fountain is at the pole, r is in metres, the positive x-axis points east and the positive y-axis points north. A robot cleaner travels round the edge as θ increases. Use a calculator in radian mode.

**(a) Find dr/dθ at θ = 2 and interpret it.**
dr/dθ = 2 cos 2θ, so at θ = 2, dr/dθ = 2 cos 4 ≈ **−1.307**. Since r(2) = 3 + sin 4 ≈ 2.243 > 0 and dr/dθ < 0, the robot is **getting closer to the fountain**, at about 1.307 metres per radian of turning.

**(b) Is the robot moving north or south at θ = 2?**
dy/dθ = r′ sin θ + r cos θ ≈ (−1.307)(0.909) + (2.243)(−0.416) ≈ **−2.122**. Negative, so y is decreasing: the robot is moving **south** as θ increases.

**(c) Find dy/dx and d²y/dx² at θ = 2.**
dx/dθ = r′ cos θ − r sin θ ≈ (−1.307)(−0.416) − (2.243)(0.909) ≈ −1.496.
dy/dx ≈ (−2.122) ÷ (−1.496) ≈ **1.419**.
A calculator (differentiating dy/dx numerically with respect to θ, then dividing by dx/dθ) gives d²y/dx² ≈ **−0.496**, so the edge is concave down there.

**(d) How far from the fountain does the edge get in the first quadrant?**
No calculator needed. On 0 ≤ θ ≤ π/2, dr/dθ = 2 cos 2θ = 0 at θ = π/4, where r = 3 + sin(π/2) = **4**. At the endpoints r(0) = r(π/2) = 3. So the greatest distance is **4 m**, at θ = π/4.

**(e) Is that also the easternmost point?**
No. The easternmost point has the largest x, which needs dx/dθ = 0, not dr/dθ = 0. Solving dx/dθ = 0 numerically gives θ ≈ 0.377, where x ≈ **3.426 m** (and r ≈ 3.684). At θ = π/4, x = 4 cos(π/4) ≈ 2.828. Being furthest from the pole is a different question from being furthest east.

**Checks.** Units: r in metres, θ in radians, so dr/dθ is in metres per radian. The slope dy/dx has no units. Signs: in the second quadrant with r shrinking, moving south and towards the fountain is consistent.

## Common misconceptions

- **"dr/dθ is the slope."** It is not. The slope of the curve is dy/dx = (dy/dθ) ÷ (dx/dθ). In Worked example 1, dr/dθ = 2 but the slope is −2/3.
- **"The slope at angle θ is tan θ."** tan θ is the slope of the ray from the pole to the point. It equals the tangent slope only in special cases, such as a curve passing through the pole.
- **Forgetting the product rule.** dx/dθ is not −f(θ) sin θ. Both factors of f(θ) cos θ depend on θ.
- **"d²y/dx² = (d²y/dθ²) ÷ (d²x/dθ²)."** Differentiate dy/dx with respect to θ, then divide by dx/dθ.
- **"dr/dθ > 0 always means moving away from the pole."** Only when r > 0. If r < 0, a positive dr/dθ means |r| is shrinking.
- **Using degree mode.** Every derivative formula here assumes radians.
- **Declaring a horizontal tangent from dy/dθ = 0 alone.** Check dx/dθ ≠ 0; if both are 0, investigate.
- **Taking tan⁻¹(y/x) without checking the quadrant** when converting to polar form.

## Where this leads

Topic 9.8 uses polar coordinates to find areas. The building block is a thin sector of area ½r²Δθ, and adding them gives ½ ∫ r² dθ. Continue with [Topic 9.8, Finding the Area of a Polar Region or the Area Bounded by a Single Polar Curve](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-7-defining-polar-coordinates-differentiating-polar-checklist/) to consolidate.
