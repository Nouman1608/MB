---
resourceId: "mb-ap-calcab-8.11-study-guide"
title: "Volume with Washer Method: Revolving Around the x- or y-Axis: Study Guide (Calculus AB 8.11)"
description: "Learn why a region with a gap from the axis makes ring-shaped slices, how to find the outer and inner radii, and how to write, evaluate and round a washer-method volume."
course: "calculus-ab"
unit: 8
topics: ["8.11"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area between curves with vertical and horizontal strips (Topics 8.4 and 8.5)"
  - "Volume with the disc method around the x- or y-axis (Topic 8.9)"
  - "Evaluating definite integrals exactly and with a graphing calculator (Units 6 and 8)"
  - "Rewriting y = f(x) as x in terms of y"
prerequisiteResources: ["mb-ap-calcab-8.10-study-guide"]
learningObjectives:
  - "Explain why revolving a region that does not touch the axis produces ring-shaped cross sections, and find the area of one ring"
  - "Identify the outer radius R and the inner radius r as distances from the axis, using a test point"
  - "Write a washer-method volume integral around the x-axis (in x) or the y-axis (in y), with correct limits and notation"
  - "Evaluate washer volumes exactly or with a calculator, storing intermediate values and rounding only the final answer to three decimal places"
skills: ["1", "4"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: store the intersection values, evaluate the integral with π included, and round only the final answer to three decimal places."
related: ["mb-ap-calcab-8.11-revision-notes", "mb-ap-calcab-8.11-practice", "mb-ap-calcab-8.11-checklist"]
next: "mb-ap-calcab-8.11-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If the region leaves a gap between itself and the axis, each slice perpendicular to the axis is a ring (a washer), not a solid disc."
  - "Area of one washer = π(R² − r²), where R is the outer radius and r the inner radius, both measured from the axis."
  - "Around the x-axis: V = π ∫ (a to b) [R(x)² − r(x)²] dx. Around the y-axis: V = π ∫ (c to d) [R(y)² − r(y)²] dy."
  - "Square each radius separately: R² − r² is not (R − r)²."
  - "On calculator questions, store intersection values and round only the final volume, usually to three decimal places."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.11 is common content, so the same page serves AB and BC students."
  - question: "How do I know whether to use discs or washers?"
    answer: "Look at one slice perpendicular to the axis. If it reaches all the way to the axis, it sweeps out a solid disc. If there is a gap between the slice and the axis, it sweeps out a ring, so use washers."
  - question: "Can I subtract first and then square?"
    answer: "No. The ring's area is the big circle minus the small circle, πR² − πr². Squaring the difference, (R − r)², gives a much smaller and wrong number."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **π ∫ (a to b) [R(x)² − r(x)²] dx** means π times the definite integral of R(x)² − r(x)² from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. Keep the square brackets around R² − r², and keep the **dx** or **dy**: it tells the reader which variable the limits belong to.

Throughout, **R** is the outer radius and **r** is the inner radius. Both are distances from the axis of revolution, so both are positive.

## From discs to washers

In the disc method (Topics 8.9 and 8.10), the region touched the axis. Each thin slice perpendicular to the axis spun round to make a solid coin, a disc of radius R and thickness Δx. Its volume was about πR² Δx.

Now suppose the region does **not** touch the axis. Take the region between the curve y = 4 − x² and the line y = 3. It sits above the line y = 3, so there is a gap of 3 units between the region and the x-axis.

Cut one thin vertical strip from the region. When you spin it around the x-axis:

- the top end of the strip, at height 4 − x², traces a big circle;
- the bottom end, at height 3, traces a smaller circle;
- the gap below the strip traces a hole.

The strip sweeps out a flat **ring**, like a metal washer used with a bolt. Its face is a big circle with a small circle removed:

**area of one washer = πR² − πr² = π(R² − r²)**

Its volume is about π(R² − r²) Δx. Adding all the washers gives a Riemann sum, and as the slices get thinner the sum becomes a definite integral.

> **Washer method (slices perpendicular to the x-axis).** If a region lies between y = R(x) (farther from the x-axis) and y = r(x) (closer to it) for a ≤ x ≤ b, with R(x) ≥ r(x) ≥ 0, the solid made by revolving it around the x-axis has volume V = π ∫ (a to b) [R(x)² − r(x)²] dx.

Another way to see it: the solid is the big solid you would get by revolving the outer curve (a disc solid), with the smaller disc solid made by the inner curve removed from its middle. That is why you subtract the two **disc areas**, not the two radii.

<figure>
<svg viewBox="0 0 560 320" role="img" aria-labelledby="washer-title washer-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="washer-title">A region above the line y = 3 and the washer made by one of its strips</title>
<desc id="washer-desc">Left panel: the parabola y = 4 − x² and the horizontal line y = 3 on axes. The region between them, from x = −1 to x = 1, is shaded and sits above the line, leaving a gap of 3 units down to the x-axis. A thin vertical strip at x = 0.5 runs from the line at height 3 up to the parabola at height 3.75. Two measurements from the x-axis are marked: the outer radius R = 4 − x² up to the top of the strip, and the inner radius r = 3 up to the bottom of the strip. Right panel: the washer that this strip sweeps out, seen face-on: a large circle of radius 3.75 with a central hole of radius 3, the ring between them shaded.</desc>
<rect x="0" y="0" width="560" height="320" fill="#ffffff"/>
<polygon points="90,120.0 96,110.5 102,102.0 108,94.5 114,88.0 120,82.5 126,78.0 132,74.5 138,72.0 144,70.5 150,70.0 156,70.5 162,72.0 168,74.5 174,78.0 180,82.5 186,88.0 192,94.5 198,102.0 204,110.5 210,120.0" fill="#dfe7f3"/>
<rect x="175" y="83" width="10" height="37" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="15" y1="270" x2="290" y2="270" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="150" y1="300" x2="150" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="30,270.0 36,250.5 42,232.0 48,214.5 54,198.0 60,182.5 66,168.0 72,154.5 78,142.0 84,130.5 90,120.0 96,110.5 102,102.0 108,94.5 114,88.0 120,82.5 126,78.0 132,74.5 138,72.0 144,70.5 150,70.0 156,70.5 162,72.0 168,74.5 174,78.0 180,82.5 186,88.0 192,94.5 198,102.0 204,110.5 210,120.0 216,130.5 222,142.0 228,154.5 234,168.0 240,182.5 246,198.0 252,214.5 258,232.0 264,250.5 270,270.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="20" y1="120" x2="285" y2="120" stroke="#1d2b44" stroke-width="2" stroke-dasharray="9 5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="90" y1="266" x2="90" y2="274"/><line x1="210" y1="266" x2="210" y2="274"/><line x1="30" y1="266" x2="30" y2="274"/><line x1="270" y1="266" x2="270" y2="274"/>
<line x1="146" y1="220" x2="154" y2="220"/><line x1="146" y1="170" x2="154" y2="170"/><line x1="146" y1="120" x2="154" y2="120"/><line x1="146" y1="70" x2="154" y2="70"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="30" y="287">−2</text><text x="90" y="287">−1</text><text x="210" y="287">1</text><text x="270" y="287">2</text><text x="285" y="262">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="143" y="224">1</text><text x="143" y="174">2</text><text x="143" y="116">3</text><text x="143" y="66">4</text><text x="143" y="34">y</text>
</g>
<line x1="196" y1="270" x2="196" y2="83" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="168" y1="270" x2="168" y2="122" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<text x="200" y="200" font-size="12" fill="#1d2b44">R = 4 − x²</text>
<text x="100" y="200" font-size="12" fill="#1d2b44">r = 3</text>
<text x="205" y="62" font-size="12" fill="#1d2b44">y = 4 − x² (solid)</text>
<text x="215" y="138" font-size="12" fill="#1d2b44">y = 3 (dashed)</text>
<line x1="305" y1="20" x2="305" y2="300" stroke="#1d2b44" stroke-width="0.8"/>
<path d="M 440 64 a 94 94 0 1 0 0.01 0 Z M 440 95 a 75 75 0 1 1 -0.01 0 Z" fill="#dfe7f3" fill-rule="evenodd" stroke="#1d2b44" stroke-width="2"/>
<circle cx="440" cy="170" r="3" fill="#1d2b44"/>
<line x1="440" y1="170" x2="534" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="440" y1="170" x2="387" y2="223" stroke="#1d2b44" stroke-width="1.5"/>
<text x="476" y="164" font-size="12" fill="#1d2b44">R = 3.75</text>
<text x="368" y="244" font-size="12" fill="#1d2b44">r = 3</text>
<text x="440" y="300" font-size="12" fill="#1d2b44" text-anchor="middle">washer from the strip at x = 0.5</text>
<text x="440" y="190" font-size="11" fill="#1d2b44" text-anchor="middle">hole</text>
</svg>
<figcaption>Figure 1. Left: the region between y = 4 − x² (solid) and y = 3 (dashed) for −1 ≤ x ≤ 1, with one strip at x = 0.5. Both radii are measured up from the x-axis, the axis of revolution. Right: the strip spins into a washer with outer radius R = 3.75 and inner radius r = 3. Its face has area π(3.75² − 3²) = 81π/16. The two panels are drawn to different scales.</figcaption>
</figure>

## Finding R and r

Both radii are **distances from the axis of revolution to the edges of the slice**.

- **Around the x-axis**, use vertical slices, so everything is a function of x. R(x) is the height of the boundary farther from the axis; r(x) is the height of the boundary nearer to it. For a region above the x-axis, R is the top curve and r is the bottom curve.
- **Around the y-axis**, use horizontal slices, so everything is a function of y. R(y) is the x-value of the boundary farther from the y-axis; r(y) is the x-value of the nearer boundary. For a region to the right of the y-axis, R is the right-hand curve and r is the left-hand curve.

A test point settles which curve is which. Pick a value strictly between the limits and compare the two distances.

**When does a washer become a disc?** If the region touches the axis along a whole edge, the inner radius is 0 and π(R² − 0²) = πR². So the disc method is the special case r = 0 of the washer method.

## The method, step by step

1. **Sketch** the region and draw the axis of revolution.
2. **Draw one slice perpendicular to the axis**: vertical for the x-axis, horizontal for the y-axis.
3. **Find the limits** along the axis: x-values for dx, y-values for dy. They usually come from intersection points.
4. **Write R and r** as distances from the axis, in terms of the slice variable. Check with a test point that R ≥ r.
5. **Write the integral in full**: π ∫ (limits) [R² − r²] d(variable).
6. **Evaluate** exactly, or with a calculator (store values; round at the end).
7. **Check**: the answer is positive, and it is smaller than the volume of the solid made by the outer boundary alone.

## Worked example 1: around the x-axis (no calculator)

**Question.** The region between y = 4 − x² and y = 3 (Figure 1) is revolved around the x-axis. Find the exact volume.

1. **Limits.** 4 − x² = 3 gives x² = 1, so x = −1 and x = 1.
2. **Radii.** Slices are vertical. Test x = 0: the parabola is at 4 and the line is at 3. The parabola is farther from the x-axis, so **R(x) = 4 − x²** and **r(x) = 3**.
3. **Integral.**
   **V = π ∫ (−1 to 1) [(4 − x²)² − 3²] dx**
4. **Expand.** (4 − x²)² = 16 − 8x² + x⁴, so R² − r² = x⁴ − 8x² + 7.
5. **Evaluate.** The integrand is even, so integrate from 0 to 1 and double:
   ∫ (0 to 1) (x⁴ − 8x² + 7) dx = 1/5 − 8/3 + 7 = (3 − 40 + 105)/15 = 68/15.
   So V = π × 2 × 68/15.

**Answer.** **V = 136π/15 cubic units** (about 28.484).

**Check.** The solid lies inside a cylinder of radius 4 and length 2 with a cylinder of radius 3 and length 2 removed. That shell has volume π(16 − 9)(2) = 14π ≈ 43.98. The answer, 28.48, is smaller, as it must be, because the parabola is below height 4 except at x = 0.

**The trap.** Writing π ∫ (−1 to 1) [(4 − x²) − 3]² dx gives 16π/15, about one-ninth of the right answer. At x = 0.5 the correct face area is π(3.75² − 3²) = 81π/16, while (3.75 − 3)² π is only 9π/16.

## Worked example 2: around the y-axis (no calculator)

**Question.** S is the region in the first quadrant enclosed by y = x³ and y = 4x. Find the volume of the solid made by revolving S around the y-axis.

1. **Intersections.** x³ = 4x gives x(x² − 4) = 0, so x = 0 or x = 2 in the first quadrant. The points are (0, 0) and (2, 8).
2. **Slices.** The axis is the y-axis, so slices are horizontal and everything must be in terms of y. The limits are y-values: **y = 0 to y = 8**.
3. **Rewrite the curves.** y = x³ becomes x = y^(1/3). y = 4x becomes x = y/4.
4. **Radii.** Test y = 1: y^(1/3) = 1 and y/4 = 0.25. The cube-root curve is farther from the y-axis, so **R(y) = y^(1/3)** and **r(y) = y/4**. The region does not touch the y-axis except at the origin, so there is a hole.
5. **Integral.**
   **V = π ∫ (0 to 8) [(y^(1/3))² − (y/4)²] dy = π ∫ (0 to 8) [y^(2/3) − y²/16] dy**
6. **Evaluate.** ∫ (0 to 8) y^(2/3) dy = (3/5) y^(5/3) from 0 to 8 = (3/5)(32) = 96/5. ∫ (0 to 8) y²/16 dy = y³/48 from 0 to 8 = 512/48 = 32/3. Subtract: 96/5 − 32/3 = (288 − 160)/15 = 128/15.

**Answer.** **V = 128π/15 cubic units** (about 26.808).

**Common slips here.** Using the x-limits 0 and 2 in a dy integral gives a different (wrong) number, because the region runs from y = 0 to y = 8. Revolving around the x-axis by mistake, π ∫ (0 to 2) [(4x)² − (x³)²] dx, gives 512π/21, a different solid altogether.

## Rounding on calculator questions

When a calculator is allowed, the expected form of a decimal answer is usually **correct to three decimal places**. Two habits protect that third decimal:

- **Store, do not retype.** Save intersection values in the calculator (for example as A and B) and use the stored values as limits.
- **Round once, at the end.** Keep π inside the calculation. Do not round a middle step and then multiply.

Written work still shows the integral with rounded limits, for example "π ∫ (−1.250 to 1.250) [...] dx = 65.725". The rounded limits are for the reader; the stored ones are for the calculation.

## Worked example 3: intersections from a calculator

**Question.** The region enclosed by y = 4/(1 + x²) and y = x² is revolved around the x-axis. Find the volume. (Calculator allowed.)

1. **Intersections.** Solve 4/(1 + x²) = x² on the calculator, or note it is x⁴ + x² − 4 = 0. The solutions are x = ±c with **c ≈ 1.249621**. Store c.
2. **Radii.** Test x = 0: 4/(1 + 0) = 4 and 0² = 0. The curve y = 4/(1 + x²) is farther from the x-axis, so **R(x) = 4/(1 + x²)** and **r(x) = x²**. (At x = 0 the region touches the axis, but for every other slice there is a gap, so washers are needed.)
3. **Integral.** Write it before pressing any keys:
   **V = π ∫ (−c to c) [(4/(1 + x²))² − (x²)²] dx**
4. **Evaluate** with the stored limits: **V ≈ 65.725 cubic units.**

**What early rounding does.** Suppose you first find ∫ (−c to c) [16/(1 + x²)² − x⁴] dx ≈ 20.921, round it to 20.9, and then multiply by π. You get 65.659, which is wrong in the first decimal place. Rounding the limits to 1.2 gives 65.629, also wrong. Only the stored, unrounded values give 65.725.

**Sense check.** Subtracting first and then squaring, π ∫ (−c to c) [4/(1 + x²) − x²]² dx, gives about 55.604. That is only about 10 less than the correct value, because the inner radius is small near the middle of the interval. A wrong answer of a believable size is exactly why this mistake is easy to miss: always write R² − r² with each radius squared on its own.

## Common misconceptions

- **(R − r)² instead of R² − r².** The ring's area is a big circle minus a small circle. Square each radius separately.
- **Swapping R and r.** Inner minus outer gives a negative "volume". Use a test point to see which boundary is farther from the axis.
- **Treating the region's height as a radius.** The strip's length R − r is not a radius. Radii are measured from the axis to each end of the strip.
- **Using a disc when there is a gap.** If the slice does not reach the axis, the solid has a hole, and you need r.
- **Mixing variables around the y-axis.** A dy integral needs R and r written in terms of y, and y-values as limits.
- **Forgetting π**, or dropping it from one term only. π multiplies the whole bracket.
- **Rounding too early.** Round the final volume, not the intersections or a middle result.

## Where this leads

The washer method here uses only the coordinate axes. In Topic 8.12 the axis can be any horizontal or vertical line, so each radius becomes a distance such as 5 − y or x + 1, worked out from the line. Continue with [Volume with Washer Method: Revolving Around Other Axes](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-study-guide/), or look back at [Volume with Disc Method: Revolving Around Other Axes](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-checklist/) to consolidate.
