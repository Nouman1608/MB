---
resourceId: "mb-ap-calcbc-9.9-study-guide"
title: "Finding the Area of the Region Bounded by Two Polar Curves: Study Guide (Calculus BC 9.9)"
description: "Find areas between two polar curves: locate where the curves meet, including at the pole, decide which curve is outer, and split regions such as the area inside both curves."
course: "calculus-bc"
unit: 9
topics: ["9.9"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Polar coordinates and converting between polar and rectangular form (Topic 9.7)"
  - "Area of a region bounded by a single polar curve, ½ ∫ r² dθ (Topic 9.8)"
  - "Area between two curves in rectangular coordinates (Topic 8.4)"
  - "Solving trigonometric equations and the identities cos²θ = ½(1 + cos 2θ) and sin²θ = ½(1 − cos 2θ)"
prerequisiteResources: ["mb-ap-calcbc-9.8-study-guide"]
learningObjectives:
  - "Explain why the area between two polar curves is ½ ∫ (R² − r²) dθ, using the difference of two thin sectors"
  - "Find every point where two polar curves meet, including meetings at the pole that solving r₁ = r₂ can miss"
  - "Decide which curve is the outer boundary on each interval of θ, and justify the decision with a test angle"
  - "Set up and evaluate the area of a region inside one polar curve and outside another"
  - "Find the area of a region inside both of two polar curves by splitting it at the intersection angle"
  - "Use symmetry and a graphing calculator correctly, giving decimal answers to 3 decimal places"
skills: ["1", "2", "3"]
studyMinutes: 55
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Set-ups and simple integrals (circles, cardioids, roses) by hand. When an intersection angle has no neat value, use a graphing calculator for it and for the integral; store the angle unrounded and give the final area to 3 decimal places."
related: ["mb-ap-calcbc-9.9-revision-notes", "mb-ap-calcbc-9.9-practice", "mb-ap-calcbc-9.9-checklist"]
next: "mb-ap-calcbc-9.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Area between two polar curves = ½ ∫ from α to β of (R² − r²) dθ, where R is the outer curve and r is the inner curve on [α, β]."
  - "Square each radius first, then subtract. ½ ∫ (R − r)² dθ is a different, wrong quantity."
  - "Find the limits by solving r₁(θ) = r₂(θ), then check the pole separately: two curves can both pass through it at different angles."
  - "For a region inside both curves, split at the intersection angle and use the nearer curve to the pole on each piece."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Polar area is BC-only content. AB students find areas between curves in rectangular coordinates only (Topic 8.4)."
  - question: "Why is the formula not ½ ∫ (R − r)² dθ?"
    answer: "Each thin slice is a big sector minus a small sector. Their areas are ½R² dθ and ½r² dθ, so the slice has area ½(R² − r²) dθ. Squaring the gap R − r measures something else."
  - question: "Do I always need a sketch?"
    answer: "In practice, yes. The sketch tells you which curve is outer, where the region starts and stops, and whether you need to split it. A quick test angle then confirms what the sketch shows."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Polar area is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

This topic joins two ideas you already have: the single-curve polar area formula from [Topic 9.8](/advanced-course-resources/calculus-bc/9-8-finding-area-polar-region-area-study-guide/) and the "outer minus inner" thinking from areas between curves. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Polar coordinates and sketching r = f(θ) | 9.7 | Seeing the region and which curve is outer |
| Area bounded by one polar curve | 9.8 | Each piece of a region is ½ ∫ r² dθ |
| Area between two curves (rectangular) | 8.4 | The same "outer minus inner" idea |
| Trig equations and double-angle identities | Precalculus | Finding intersection angles; integrating cos²θ and sin²θ |

Notation on this page: **∫ from a to b of f(θ) dθ** is a definite integral with lower limit a and upper limit b. Angles are in radians. R is the curve farther from the pole and r is the curve nearer to it, on the interval being used.

## From one curve to two

In Topic 9.8 you cut a polar region into thin **sectors** (pizza slices) with their point at the pole. A sector of radius r and angle dθ has area ½ r² dθ, so a region swept by one curve from θ = α to θ = β has area ½ ∫ from α to β of r² dθ.

Now suppose the region lies **between** two curves. On each ray from the pole, the region starts at the inner curve r = g(θ) and stops at the outer curve R = f(θ). A thin slice of the region is a big sector with a small sector removed:

**slice area ≈ ½ R² dθ − ½ r² dθ = ½ (R² − r²) dθ**

Add up the slices from α to β:

> **Area = ½ ∫ from α to β of ( [f(θ)]² − [g(θ)]² ) dθ, where f(θ) ≥ g(θ) ≥ 0 on [α, β]**

This is the polar version of "top minus bottom". The important difference is that you **square each radius before subtracting**. For a slice with R = 3, r = 2 and dθ = 0.1, the true area is ½(9 − 4)(0.1) = 0.25. The wrong form ½(R − r)² dθ gives ½(1)(0.1) = 0.05, far too small.

The formula has the same three ingredients every time: **limits** (where the region starts and stops), an **outer** curve and an **inner** curve. The rest of this guide is about finding those three ingredients reliably.

## Step 1: find where the curves meet

The limits of integration are usually angles where the curves cross. To find them:

1. **Solve f(θ) = g(θ)** over one full trace of each curve (often 0 ≤ θ < 2π, or 0 ≤ θ ≤ π for a circle such as r = a sin θ).
2. **Check the pole separately.** A curve passes through the pole when r = 0. Two curves can both reach the pole at **different** angles, so the pole is a shared point that the equation f(θ) = g(θ) never finds.

**Example of the pole trap.** Take r = 2 cos θ and r = 1 − cos θ. Solving 2 cos θ = 1 − cos θ gives cos θ = ⅓, so two points with r = ⅔. But r = 2 cos θ is 0 at θ = π/2, and r = 1 − cos θ is 0 at θ = 0. Both curves pass through the pole, at different angles, so the curves actually share **three** points. A sketch shows this at once.

Why does this happen? A point in polar form has many names: the pole is (0, θ) for every θ. Solving f(θ) = g(θ) only finds places where both curves are at the same point **at the same angle**.

## Step 2: decide which curve is outer

Between two consecutive intersection angles, one curve stays farther from the pole than the other (they cannot swap without crossing). So pick **any test angle** inside the interval and compare the two r-values. The larger one is the outer curve R on that whole interval.

Write this test down in a free-response answer. It is your justification for the order of subtraction.

## Step 3: identify the type of region

| You are asked for the area… | Set-up |
|---|---|
| inside f and outside g | ½ ∫ (f² − g²) dθ over the angles where f ≥ g |
| inside both curves | Split at each intersection angle. On each piece use the curve **nearer** the pole: ½ ∫ (nearer curve)² dθ |
| inside f only (no second curve) | ½ ∫ f² dθ, as in Topic 9.8 |

A region inside both curves has the pole as one corner of each slice, so each piece is a single-curve area. That is why it needs no subtraction, only splitting.

## Worked example 1: inside a cardioid, outside a circle (no calculator)

**Question.** Find the exact area of the region that lies inside the cardioid r = 2 + 2 cos θ and outside the circle r = 3.

<figure>
<svg viewBox="0 0 540 420" role="img" aria-labelledby="f99a-title f99a-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f99a-title">The region inside the cardioid r = 2 + 2 cos θ and outside the circle r = 3</title>
<desc id="f99a-desc">Polar axes centred on the pole. A dashed circle of radius 3 and a solid heart-shaped cardioid, r = 2 + 2 cos θ, which reaches 4 on the positive x-axis and has its cusp at the pole. The curves cross at the points with polar angle π/3 and −π/3, where r = 3. Dotted rays from the pole go through these two points. The crescent-shaped region that lies inside the cardioid but outside the circle, on the right between the two rays, is shaded with diagonal hatching.</desc>
<defs><pattern id="hatch99a" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="540" height="420" fill="#ffffff"/>
<line x1="50" y1="210" x2="470" y2="210" stroke="#1d2b44" stroke-width="1"/>
<line x1="230" y1="25" x2="230" y2="395" stroke="#1d2b44" stroke-width="1"/>
<path d="M305.0 339.9 L311.2 339.7 L317.4 339.2 L323.6 338.4 L329.9 337.2 L336.1 335.7 L342.3 333.8 L348.4 331.6 L354.5 329.1 L360.4 326.2 L366.2 323.0 L371.9 319.4 L377.4 315.5 L382.8 311.3 L387.9 306.9 L392.8 302.1 L397.5 297.0 L401.9 291.7 L406.0 286.1 L409.9 280.3 L413.4 274.3 L416.7 268.1 L419.6 261.7 L422.1 255.1 L424.3 248.4 L426.2 241.6 L427.7 234.7 L428.8 227.7 L429.6 220.6 L430.0 213.5 L430.0 206.5 L429.6 199.4 L428.8 192.3 L427.7 185.3 L426.2 178.4 L424.3 171.6 L422.1 164.9 L419.6 158.3 L416.7 151.9 L413.4 145.7 L409.9 139.7 L406.0 133.9 L401.9 128.3 L397.5 123.0 L392.8 117.9 L387.9 113.1 L382.8 108.7 L377.4 104.5 L371.9 100.6 L366.2 97.0 L360.4 93.8 L354.5 90.9 L348.4 88.4 L342.3 86.2 L336.1 84.3 L329.9 82.8 L323.6 81.6 L317.4 80.8 L311.2 80.3 L305.0 80.1 L305.0 80.1 L311.9 84.3 L318.5 88.9 L324.9 93.8 L331.0 99.1 L336.8 104.6 L342.3 110.5 L347.5 116.7 L352.3 123.1 L356.8 129.8 L360.9 136.8 L364.6 143.9 L368.0 151.2 L371.0 158.7 L373.5 166.3 L375.6 174.1 L377.4 182.0 L378.7 189.9 L379.5 197.9 L379.9 206.0 L379.9 214.0 L379.5 222.1 L378.7 230.1 L377.4 238.0 L375.6 245.9 L373.5 253.7 L371.0 261.3 L368.0 268.8 L364.6 276.1 L360.9 283.2 L356.8 290.2 L352.3 296.9 L347.5 303.3 L342.3 309.5 L336.8 315.4 L331.0 320.9 L324.9 326.2 L318.5 331.1 L311.9 335.7 L305.0 339.9 Z" fill="url(#hatch99a)" stroke="none"/>
<line x1="230" y1="210" x2="340.0" y2="19.5" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<line x1="230" y1="210" x2="340.0" y2="400.5" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5" points="380.0,210.0 379.8,202.1 379.2,194.2 378.1,186.3 376.7,178.6 374.8,170.9 372.5,163.3 369.9,155.8 366.8,148.5 363.4,141.4 359.6,134.4 355.4,127.7 350.9,121.2 346.0,114.9 340.9,108.9 335.4,103.2 329.6,97.8 323.5,92.7 317.2,88.0 310.6,83.5 303.9,79.4 296.9,75.7 289.7,72.4 282.3,69.4 274.8,66.9 267.2,64.7 259.5,62.9 251.7,61.6 243.8,60.6 235.9,60.1 228.0,60.0 220.1,60.3 212.2,61.1 204.4,62.2 196.6,63.8 189.0,65.7 181.4,68.1 174.0,70.9 166.7,74.0 159.6,77.5 152.7,81.4 146.0,85.7 139.6,90.3 133.4,95.2 127.5,100.5 121.9,106.1 116.5,111.9 111.5,118.0 106.8,124.4 102.5,131.0 98.5,137.9 94.9,144.9 91.6,152.1 88.7,159.5 86.3,167.0 84.2,174.7 82.6,182.4 81.3,190.3 80.5,198.1 80.1,206.0 80.1,214.0 80.5,221.9 81.3,229.7 82.6,237.6 84.2,245.3 86.3,253.0 88.7,260.5 91.6,267.9 94.9,275.1 98.5,282.1 102.5,289.0 106.8,295.6 111.5,302.0 116.5,308.1 121.9,313.9 127.5,319.5 133.4,324.8 139.6,329.7 146.0,334.3 152.7,338.6 159.6,342.5 166.7,346.0 174.0,349.1 181.4,351.9 189.0,354.3 196.6,356.2 204.4,357.8 212.2,358.9 220.1,359.7 228.0,360.0 235.9,359.9 243.8,359.4 251.7,358.4 259.5,357.1 267.2,355.3 274.8,353.1 282.3,350.6 289.7,347.6 296.9,344.3 303.9,340.6 310.6,336.5 317.2,332.0 323.5,327.3 329.6,322.2 335.4,316.8 340.9,311.1 346.0,305.1 350.9,298.8 355.4,292.3 359.6,285.6 363.4,278.6 366.8,271.5 369.9,264.2 372.5,256.7 374.8,249.1 376.7,241.4 378.1,233.7 379.2,225.8 379.8,217.9 380.0,210.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="430.0,210.0 429.8,202.1 429.1,194.2 427.9,186.4 426.3,178.7 424.2,171.1 421.7,163.7 418.7,156.4 415.4,149.4 411.6,142.5 407.5,136.0 403.0,129.7 398.1,123.7 392.9,118.1 387.5,112.7 381.7,107.8 375.7,103.2 369.5,99.0 363.1,95.3 356.6,91.9 349.9,88.9 343.1,86.4 336.2,84.3 329.2,82.6 322.3,81.4 315.3,80.6 308.4,80.1 301.6,80.1 294.8,80.5 288.2,81.3 281.7,82.5 275.4,84.0 269.2,85.9 263.3,88.1 257.6,90.6 252.1,93.4 246.9,96.5 242.0,99.8 237.4,103.3 233.1,107.1 229.0,111.0 225.3,115.1 221.9,119.2 218.8,123.5 216.1,127.9 213.6,132.3 211.5,136.7 209.7,141.2 208.2,145.6 207.0,150.0 206.1,154.3 205.5,158.5 205.1,162.7 205.0,166.7 205.1,170.6 205.4,174.3 206.0,177.9 206.7,181.3 207.6,184.5 208.6,187.5 209.7,190.3 211.0,192.9 212.3,195.3 213.7,197.6 215.1,199.5 216.6,201.3 218.0,202.9 219.5,204.3 220.9,205.5 222.2,206.6 223.5,207.4 224.7,208.2 225.8,208.7 226.8,209.2 227.7,209.5 228.4,209.7 229.1,209.9 229.5,210.0 229.8,210.0 230.0,210.0 230.0,210.0 229.8,210.0 229.5,210.0 229.1,210.1 228.4,210.3 227.7,210.5 226.8,210.8 225.8,211.3 224.7,211.8 223.5,212.6 222.2,213.4 220.9,214.5 219.5,215.7 218.0,217.1 216.6,218.7 215.1,220.5 213.7,222.4 212.3,224.7 211.0,227.1 209.7,229.7 208.6,232.5 207.6,235.5 206.7,238.7 206.0,242.1 205.4,245.7 205.1,249.4 205.0,253.3 205.1,257.3 205.5,261.5 206.1,265.7 207.0,270.0 208.2,274.4 209.7,278.8 211.5,283.3 213.6,287.7 216.1,292.1 218.8,296.5 221.9,300.8 225.3,304.9 229.0,309.0 233.1,312.9 237.4,316.7 242.0,320.2 246.9,323.5 252.1,326.6 257.6,329.4 263.3,331.9 269.2,334.1 275.4,336.0 281.7,337.5 288.2,338.7 294.8,339.5 301.6,339.9 308.4,339.9 315.3,339.4 322.3,338.6 329.2,337.4 336.2,335.7 343.1,333.6 349.9,331.1 356.6,328.1 363.1,324.7 369.5,321.0 375.7,316.8 381.7,312.2 387.5,307.3 392.9,301.9 398.1,296.3 403.0,290.3 407.5,284.0 411.6,277.5 415.4,270.6 418.7,263.6 421.7,256.3 424.2,248.9 426.3,241.3 427.9,233.6 429.1,225.8 429.8,217.9 430.0,210.0"/>
<line x1="280" y1="206" x2="280" y2="214" stroke="#1d2b44"/><text x="270" y="226" font-size="12" fill="#1d2b44">1</text>
<line x1="330" y1="206" x2="330" y2="214" stroke="#1d2b44"/><text x="320" y="226" font-size="12" fill="#1d2b44">2</text>
<line x1="380" y1="206" x2="380" y2="214" stroke="#1d2b44"/><text x="370" y="226" font-size="12" fill="#1d2b44">3</text>
<line x1="430" y1="206" x2="430" y2="214" stroke="#1d2b44"/><text x="420" y="226" font-size="12" fill="#1d2b44">4</text>
<circle cx="305.0" cy="80.1" r="4" fill="#1d2b44"/><circle cx="305.0" cy="339.9" r="4" fill="#1d2b44"/>
<text x="313.0" y="72.1" font-size="12" fill="#1d2b44">(r, θ) = (3, π/3)</text>
<text x="313.0" y="357.9" font-size="12" fill="#1d2b44">(3, −π/3)</text>
<text x="340" y="40" font-size="12" fill="#1d2b44">dotted ray θ = π/3</text>
<text x="480" y="214" font-size="12" fill="#1d2b44">θ = 0</text>
<text x="76" y="90" font-size="12" fill="#1d2b44" text-anchor="end">circle r = 3</text><text x="76" y="105" font-size="12" fill="#1d2b44" text-anchor="end">(dashed)</text>
<text x="30" y="375" font-size="12" fill="#1d2b44">cardioid r = 2 + 2 cos θ</text><text x="30" y="390" font-size="12" fill="#1d2b44">(solid)</text>
<rect x="440" y="118" width="92" height="20" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/><text x="486" y="132" font-size="12" fill="#1d2b44" text-anchor="middle">region ≈ 4.653</text>
<text x="12" y="20" font-size="12" fill="#1d2b44">pole at the centre of the axes</text>
</svg>
<figcaption>Figure 1. The hatched crescent is inside the cardioid (solid) and outside the circle (dashed). It runs from θ = −π/3 to θ = π/3, the angles where the two curves meet. On every ray in that range the cardioid is the outer curve.</figcaption>
</figure>
1. **Sketch.** The circle has radius 3. The cardioid has r = 4 at θ = 0 and r = 0 at θ = π (its cusp is at the pole). So the cardioid pokes out beyond the circle only on the right, near θ = 0 (Figure 1).
2. **Find where they meet.** 2 + 2 cos θ = 3 gives cos θ = ½, so θ = −π/3 and θ = π/3, where r = 3. Pole check: the circle never reaches the pole, so there are no other shared points.
3. **Decide which is outer.** Test θ = 0: cardioid r = 4, circle r = 3. So on −π/3 < θ < π/3 the cardioid is outer.
4. **Write the integral.**
   **A = ½ ∫ from −π/3 to π/3 of [ (2 + 2 cos θ)² − 3² ] dθ**
5. **Expand and use cos²θ = ½(1 + cos 2θ).**
   (2 + 2 cos θ)² = 4 + 8 cos θ + 4 cos²θ = 6 + 8 cos θ + 2 cos 2θ.
   Subtract 9: the integrand is **−3 + 8 cos θ + 2 cos 2θ**.
6. **Integrate.** An antiderivative is −3θ + 8 sin θ + sin 2θ.
   - At θ = π/3: −π + 8(√3/2) + √3/2 = −π + 4√3 + √3/2.
   - At θ = −π/3: π − 4√3 − √3/2.
   - Difference: −2π + 8√3 + √3 = **9√3 − 2π**.
7. **Multiply by ½.** A = ½(9√3 − 2π) = **9√3/2 − π ≈ 4.653** square units.

**Checks.**
- *Symmetry:* the region is symmetric about the x-axis, so A = 2 × ½ ∫ from 0 to π/3 of (…) dθ = ∫ from 0 to π/3 of (−3 + 8 cos θ + 2 cos 2θ) dθ. This gives 9√3/2 − π again. ✓
- *Size:* the region is a thin crescent. The whole circle has area 9π ≈ 28.3, so 4.653 is sensible.
- *Wrong form:* ½ ∫ from −π/3 to π/3 of (2 + 2 cos θ − 3)² dθ ≈ 0.544. If you get this, you squared the gap instead of each radius.

## Worked example 2: the region inside both curves (calculator)

**Question.** Find the area of the region that lies inside both the circle r = 4 sin θ and the cardioid r = 1 + cos θ. Give the answer to 3 decimal places.

<figure>
<svg viewBox="0 0 540 420" role="img" aria-labelledby="f99b-title f99b-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="f99b-title">The region inside both the circle r = 4 sin θ and the cardioid r = 1 + cos θ</title>
<desc id="f99b-desc">Polar axes with the pole low in the picture. A dashed circle r = 4 sin θ sits above the pole with diameter 4 along the vertical axis. A solid cardioid r = 1 + cos θ reaches 2 on the positive x-axis and has its cusp at the pole. The curves cross at the pole and at one other point, at angle α ≈ 0.490 radians, where r ≈ 1.882. A dotted ray from the pole passes through that point. The small region common to both curves is hatched. Below the ray it is bounded by the circle; above the ray it is bounded by the cardioid.</desc>
<defs><pattern id="hatch99b" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#fdf6e3"/><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1"/></pattern></defs>
<rect x="0" y="0" width="540" height="420" fill="#ffffff"/>
<line x1="40" y1="330" x2="440" y2="330" stroke="#1d2b44" stroke-width="1"/>
<line x1="200" y1="20" x2="200" y2="405" stroke="#1d2b44" stroke-width="1"/>
<path d="M200 330 L200.0 330.0 L203.0 330.0 L206.0 329.8 L209.0 329.7 L212.0 329.4 L215.0 329.1 L218.0 328.6 L221.0 328.1 L224.0 327.6 L226.9 326.9 L229.8 326.2 L232.7 325.4 L235.6 324.6 L238.5 323.7 L241.3 322.7 L244.2 321.6 L247.0 320.4 L249.7 319.2 L252.4 317.9 L255.1 316.6 L257.8 315.2 L260.4 313.7 L263.0 312.1 L265.6 310.5 L268.1 308.8 L270.5 307.1 L272.9 305.3 L275.3 303.4 L277.6 301.5 L279.9 299.5 L282.1 297.5 L284.3 295.4 L286.4 293.3 L288.5 291.1 L290.5 288.8 L292.4 286.5 L294.3 284.2 L296.2 281.8 L297.9 279.3 L299.7 276.9 L299.7 276.9 L297.0 274.0 L294.2 271.4 L291.2 268.8 L288.2 266.5 L285.1 264.3 L281.8 262.3 L278.5 260.4 L275.2 258.8 L271.7 257.3 L268.3 256.0 L264.8 254.9 L261.2 254.0 L257.7 253.2 L254.2 252.7 L250.6 252.3 L247.1 252.1 L243.6 252.1 L240.2 252.2 L236.8 252.6 L233.4 253.0 L230.1 253.7 L226.9 254.5 L223.8 255.5 L220.7 256.6 L217.8 257.8 L215.0 259.2 L212.2 260.6 L209.6 262.2 L207.1 263.9 L204.8 265.7 L202.5 267.6 L200.4 269.6 L198.4 271.6 L196.6 273.7 L194.9 275.9 L193.3 278.1 L191.9 280.3 L190.6 282.5 L189.5 284.8 L188.5 287.0 L187.6 289.3 L186.9 291.6 L186.3 293.8 L185.8 296.0 L185.4 298.2 L185.2 300.3 L185.0 302.4 L185.0 304.4 L185.1 306.4 L185.2 308.3 L185.5 310.1 L185.8 311.9 L186.2 313.6 L186.7 315.2 L187.2 316.7 L187.8 318.1 L188.4 319.5 L189.1 320.7 L189.8 321.9 L190.5 323.0 L191.3 324.0 L192.0 324.9 L192.7 325.7 L193.5 326.4 L194.2 327.1 L194.9 327.6 L195.6 328.1 L196.2 328.5 L196.8 328.9 L197.4 329.2 L197.9 329.4 L198.4 329.6 L198.8 329.8 L199.2 329.9 L199.5 329.9 L199.7 330.0 L199.9 330.0 L200.0 330.0 L200.0 330.0 Z" fill="url(#hatch99b)" stroke="none"/>
<line x1="200" y1="330" x2="390.6" y2="228.4" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5" points="200.0,330.0 206.3,329.8 212.6,329.3 218.9,328.5 225.2,327.3 231.3,325.8 237.4,324.0 243.3,321.9 249.2,319.5 254.9,316.7 260.5,313.7 265.8,310.3 271.0,306.7 276.1,302.8 280.8,298.7 285.4,294.3 289.7,289.7 293.8,284.8 297.6,279.8 301.2,274.5 304.4,269.1 307.4,263.5 310.1,257.7 312.5,251.9 314.5,245.9 316.2,239.8 317.7,233.6 318.7,227.4 319.5,221.1 319.9,214.8 320.0,208.4 319.7,202.1 319.2,195.8 318.2,189.5 317.0,183.3 315.4,177.2 313.5,171.1 311.3,165.2 308.8,159.4 306.0,153.7 302.9,148.2 299.4,142.8 295.8,137.7 291.8,132.7 287.6,128.0 283.2,123.5 278.5,119.2 273.6,115.2 268.5,111.5 263.2,108.0 257.7,104.8 252.1,101.9 246.3,99.3 240.4,97.0 234.4,95.0 228.2,93.4 222.0,92.0 215.8,91.0 209.5,90.4 203.2,90.0 196.8,90.0 190.5,90.4 184.2,91.0 178.0,92.0 171.8,93.4 165.6,95.0 159.6,97.0 153.7,99.3 147.9,101.9 142.3,104.8 136.8,108.0 131.5,111.5 126.4,115.2 121.5,119.2 116.8,123.5 112.4,128.0 108.2,132.7 104.2,137.7 100.6,142.8 97.1,148.2 94.0,153.7 91.2,159.4 88.7,165.2 86.5,171.1 84.6,177.2 83.0,183.3 81.8,189.5 80.8,195.8 80.3,202.1 80.0,208.4 80.1,214.8 80.5,221.1 81.3,227.4 82.3,233.6 83.8,239.8 85.5,245.9 87.5,251.9 89.9,257.7 92.6,263.5 95.6,269.1 98.8,274.5 102.4,279.8 106.2,284.8 110.3,289.7 114.6,294.3 119.2,298.7 123.9,302.8 129.0,306.7 134.2,310.3 139.5,313.7 145.1,316.7 150.8,319.5 156.7,321.9 162.6,324.0 168.7,325.8 174.8,327.3 181.1,328.5 187.4,329.3 193.7,329.8 200.0,330.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="320.0,330.0 319.9,325.3 319.4,320.5 318.7,315.9 317.8,311.2 316.5,306.7 315.0,302.2 313.2,297.9 311.2,293.6 309.0,289.5 306.5,285.6 303.8,281.8 300.9,278.2 297.8,274.8 294.5,271.6 291.0,268.7 287.4,265.9 283.7,263.4 279.9,261.2 275.9,259.1 271.9,257.4 267.8,255.8 263.7,254.6 259.5,253.6 255.4,252.8 251.2,252.3 247.1,252.1 243.0,252.1 238.9,252.3 234.9,252.8 231.0,253.5 227.2,254.4 223.5,255.5 220.0,256.9 216.6,258.4 213.3,260.1 210.2,261.9 207.2,263.9 204.4,266.0 201.8,268.2 199.4,270.6 197.2,273.0 195.1,275.5 193.3,278.1 191.6,280.7 190.2,283.4 188.9,286.0 187.8,288.7 186.9,291.4 186.2,294.0 185.7,296.6 185.3,299.1 185.1,301.6 185.0,304.0 185.1,306.3 185.3,308.6 185.6,310.7 186.0,312.8 186.5,314.7 187.2,316.5 187.8,318.2 188.6,319.8 189.4,321.2 190.2,322.5 191.1,323.7 191.9,324.8 192.8,325.8 193.7,326.6 194.5,327.3 195.3,327.9 196.1,328.5 196.8,328.9 197.5,329.2 198.1,329.5 198.6,329.7 199.1,329.8 199.4,329.9 199.7,330.0 199.9,330.0 200.0,330.0 200.0,330.0 199.9,330.0 199.7,330.0 199.4,330.1 199.1,330.2 198.6,330.3 198.1,330.5 197.5,330.8 196.8,331.1 196.1,331.5 195.3,332.1 194.5,332.7 193.7,333.4 192.8,334.2 191.9,335.2 191.1,336.3 190.2,337.5 189.4,338.8 188.6,340.2 187.8,341.8 187.2,343.5 186.5,345.3 186.0,347.2 185.6,349.3 185.3,351.4 185.1,353.7 185.0,356.0 185.1,358.4 185.3,360.9 185.7,363.4 186.2,366.0 186.9,368.6 187.8,371.3 188.9,374.0 190.2,376.6 191.6,379.3 193.3,381.9 195.1,384.5 197.2,387.0 199.4,389.4 201.8,391.8 204.4,394.0 207.2,396.1 210.2,398.1 213.3,399.9 216.6,401.6 220.0,403.1 223.5,404.5 227.2,405.6 231.0,406.5 234.9,407.2 238.9,407.7 243.0,407.9 247.1,407.9 251.2,407.7 255.4,407.2 259.5,406.4 263.7,405.4 267.8,404.2 271.9,402.6 275.9,400.9 279.9,398.8 283.7,396.6 287.4,394.1 291.0,391.3 294.5,388.4 297.8,385.2 300.9,381.8 303.8,378.2 306.5,374.4 309.0,370.5 311.2,366.4 313.2,362.1 315.0,357.8 316.5,353.3 317.8,348.8 318.7,344.1 319.4,339.5 319.9,334.7 320.0,330.0"/>
<line x1="260" y1="326" x2="260" y2="334" stroke="#1d2b44"/><text x="263" y="346" font-size="12" fill="#1d2b44">1</text>
<line x1="320" y1="326" x2="320" y2="334" stroke="#1d2b44"/><text x="323" y="346" font-size="12" fill="#1d2b44">2</text>
<line x1="196" y1="270" x2="204" y2="270" stroke="#1d2b44"/><text x="192" y="274" font-size="12" fill="#1d2b44" text-anchor="end">1</text>
<line x1="196" y1="210" x2="204" y2="210" stroke="#1d2b44"/><text x="192" y="214" font-size="12" fill="#1d2b44" text-anchor="end">2</text>
<line x1="196" y1="150" x2="204" y2="150" stroke="#1d2b44"/><text x="192" y="154" font-size="12" fill="#1d2b44" text-anchor="end">3</text>
<line x1="196" y1="90" x2="204" y2="90" stroke="#1d2b44"/><text x="192" y="94" font-size="12" fill="#1d2b44" text-anchor="end">4</text>
<circle cx="299.7" cy="276.9" r="4" fill="#1d2b44"/><circle cx="200" cy="330" r="4" fill="#1d2b44"/>
<text x="306" y="294" font-size="12" fill="#1d2b44">meet at θ = α ≈ 0.490, r ≈ 1.882</text>
<text x="170" y="360" font-size="12" fill="#1d2b44" text-anchor="end">pole: the curves</text><text x="170" y="375" font-size="12" fill="#1d2b44" text-anchor="end">also meet here</text>
<text x="278" y="114" font-size="12" fill="#1d2b44">circle r = 4 sin θ (dashed)</text>
<text x="326" y="387" font-size="12" fill="#1d2b44">cardioid r = 1 + cos θ (solid)</text>
<text x="383" y="225" font-size="12" fill="#1d2b44">dotted ray θ = α</text>
<rect x="20" y="30" width="140" height="36" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/><text x="90" y="45" font-size="12" fill="#1d2b44" text-anchor="middle">hatched region</text><text x="90" y="60" font-size="12" fill="#1d2b44" text-anchor="middle">inside both ≈ 1.713</text>
</svg>
<figcaption>Figure 2. The hatched region lies inside both curves. Below the dotted ray θ = α the circle (dashed) is the nearer curve to the pole; above it the cardioid (solid) is nearer. So the area splits into two single-curve integrals at θ = α.</figcaption>
</figure>

1. **Sketch.** r = 4 sin θ, for 0 ≤ θ ≤ π, is a circle of diameter 4 sitting on the pole, above the x-axis. r = 1 + cos θ is a cardioid with r = 2 at θ = 0 and its cusp at the pole (θ = π). The shared region is the small lens-shaped area in Figure 2.
2. **Find where they meet.** Solve 4 sin θ = 1 + cos θ with a calculator: **θ = α ≈ 0.48996** (store it unrounded). There r ≈ 1.882. θ = π also solves the equation: both curves are at the pole there. The circle also reaches the pole at θ = 0, so the pole is a corner of the region.
3. **Decide which curve is nearer the pole on each interval.**
   - Test θ = 0.2 (between 0 and α): circle r ≈ 0.795, cardioid r ≈ 1.980. The **circle** is nearer.
   - Test θ = π/2 (between α and π): circle r = 4, cardioid r = 1. The **cardioid** is nearer.
4. **Write the integral as two pieces**, each a single-curve area:
   **A = ½ ∫ from 0 to α of (4 sin θ)² dθ + ½ ∫ from α to π of (1 + cos θ)² dθ**
   Stop at θ = π: for π < θ < 2π the circle has r < 0 and retraces itself, and the lower half of the cardioid is outside the circle.
5. **Evaluate with the calculator.** First piece ≈ 0.2989. Second piece ≈ 1.4143.
6. **Add.** **A ≈ 1.713** square units.

**Checks.**
- *Size:* the region must be smaller than each whole curve. The circle has area 4π ≈ 12.566 and the cardioid 3π/2 ≈ 4.712. 1.713 is smaller than both. ✓
- *Intersection:* in fact α = 2 arctan(¼), with sin α = 8/17 and cos α = 15/17. Then 4 sin α = 32/17 and 1 + cos α = 32/17, both ≈ 1.882. ✓ (You do not need this exact angle; the calculator value is enough.)
- *Wrong choices:* using the **farther** curve on each piece (the cardioid on [0, α] and the circle on [α, π]) gives about 13.209, which is bigger than the whole circle. That is impossible for a region inside both curves.

**Answer.** About **1.713** square units.

## Using symmetry and the calculator well

- **Symmetry.** If both curves use only cos θ, the region is symmetric about the x-axis: integrate over the top half and double. If both use only sin θ, it is symmetric about the y-axis: integrate over the right-hand half and double. Say which symmetry you are using, and check the halves really match on your sketch.
- **Store, do not retype.** Store each intersection angle in the calculator and use the stored value as a limit. Rounding α to 0.49 before integrating can change the third decimal place of the answer.
- **Write the integral first.** On a free-response question the set-up (limits, ½, outer² − inner²) usually earns a point on its own. A decimal with no integral shown does not show your reasoning.
- **Exact or decimal?** Without a calculator, intersection angles are usually standard angles such as π/6 or π/3, and you finish by hand as in Worked example 1. With a calculator, give 3 decimal places.

## A note on negative r

The formula ½ ∫ r² dθ squares r, so a negative r never makes an area negative. But a negative r plots the point on the opposite side of the pole. This can make a curve retrace part of itself (as r = 4 sin θ does for π < θ < 2π), so integrating over too wide an interval counts some area twice. Choose limits so that each part of the region is swept exactly once, and let the sketch guide you.

## Common misconceptions

- **"Area = ½ ∫ (R − r)² dθ."** You must square each radius, then subtract: ½ ∫ (R² − r²) dθ.
- **Dropping the ½.** The ½ comes from the sector area ½ r² dθ. Without it every answer doubles.
- **Missing the pole.** Solving f(θ) = g(θ) finds meetings at the same angle only. Check where each curve has r = 0.
- **Using the wrong curve for "inside both".** On each piece use the curve **nearer** the pole, not the farther one. A test angle settles it.
- **Not splitting.** A single integral cannot describe "inside both" when the nearer curve changes at the intersection angle.
- **Integrating over 0 to 2π by habit.** Use the angles where the region actually is. Over a full turn, a curve such as r = 4 sin θ is traced twice.
- **Subtracting in the wrong order.** If an "area" comes out negative, the inner and outer curves are swapped on that interval.
- **Rounding the limits early.** Store the calculator's intersection angles and round only the final area.

## Where this leads

This is the last topic of Unit 9. Polar questions often combine an area with the derivative work of Topic 9.7 (dr/dθ and dy/dx), so review Topics 9.7 to 9.9 together. Next, Unit 10 (BC only) starts infinite series with [Topic 10.1, Defining Convergent and Divergent Infinite Series](/advanced-course-resources/calculus-bc/10-1-defining-convergent-divergent-infinite-series-study-guide/). Use the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-9-finding-area-region-bounded-two-checklist/) to consolidate.
