---
resourceId: "mb-ap-calcab-8.10-study-guide"
title: "Volume with the Disc Method: Revolving Around Other Axes: Study Guide (Calculus AB 8.10)"
description: "Learn how to use discs when a region spins about a line such as y = 1 or x = 3: find the radius as a distance from that line, choose dx or dy, and set up and evaluate the integral."
course: "calculus-ab"
unit: 8
topics: ["8.10"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The disc method about the x- and y-axes (Topic 8.9)"
  - "Rewriting y = f(x) as x in terms of y"
  - "Expanding squared binomials such as (a − √x)²"
  - "The identity cos²x = (1 + cos 2x)/2"
prerequisiteResources: ["mb-ap-calcab-8.9-study-guide"]
learningObjectives:
  - "Find the radius of a disc when the axis is a horizontal line y = k or a vertical line x = h, as the distance between the axis and the curve"
  - "Choose the variable of integration from the direction of the axis and write the disc integral with correct radius, limits and differential"
  - "Read the radius from a graph, an equation or a description of the region, including axes above, below, left or right of the region"
  - "Evaluate disc volumes about other axes exactly or with a calculator, and check them against a cylinder"
skills: ["1", "2"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "All three worked examples can be done without a calculator. A calculator is used only to check Worked example 3: use radians and give three decimal places."
related: ["mb-ap-calcab-8.10-revision-notes", "mb-ap-calcab-8.10-practice", "mb-ap-calcab-8.10-checklist"]
next: "mb-ap-calcab-8.10-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The disc method works about any horizontal or vertical line, as long as the region touches that line all the way along."
  - "The radius is the distance from the axis to the curve: for y = k it is |f(x) − k|; for x = h it is |g(y) − h|."
  - "Horizontal axis y = k: slice vertically, use dx. Vertical axis x = h: slice horizontally, use dy and write x in terms of y."
  - "V = π ∫ (radius)² along the axis. Write the radius as larger minus smaller so it is clearly a positive distance."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.10 is common content, so the same page serves AB and BC students."
  - question: "Does it matter whether I write (1 − √x) or (√x − 1) for the radius?"
    answer: "Not for the value, because the radius is squared. But a radius is a distance, so write it as larger minus smaller. That habit matters in Topics 8.11 and 8.12, where two radii appear."
  - question: "What if the region does not touch the axis?"
    answer: "Then the slices have holes and you need washers (Topic 8.12 for axes other than the x- and y-axes)."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **π ∫ (a to b) [1 − √x]² dx** means π times the definite integral of (1 − √x)² from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. Keep the brackets around the whole radius before squaring it, and keep the **dx** or **dy**.

## What changes when the axis moves

In Topic 8.9 the axis was the x-axis or the y-axis. The radius of each disc was simply f(x) or g(y), because that is the distance from the curve to an axis at 0.

Now the axis can be any horizontal line y = k or any vertical line x = h. The idea is the same: slice at right angles to the axis, and each slice is a disc whose radius is the distance from the axis to the curve. Only the radius formula changes. A distance between two heights is the larger one minus the smaller one:

| Axis | Where the curve is | Radius | Slice and variable |
|---|---|---|---|
| y = k | below the axis | k − f(x) | vertical, dx |
| y = k | above the axis | f(x) − k | vertical, dx |
| x = h | left of the axis | h − g(y) | horizontal, dy |
| x = h | right of the axis | g(y) − h | horizontal, dy |

Here y = f(x) or x = g(y) describes the curve. If the axis is y = −2, then k = −2 and a curve above it has radius f(x) − (−2) = f(x) + 2. Subtracting a negative number is where most sign slips happen.

**A useful way to see it.** Spinning a region about y = k gives the same solid as moving the region and the line down by k together, then spinning about the x-axis. Moving everything down by k replaces the curve y = f(x) by y = f(x) − k. That is exactly the radius in the table.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="other-title other-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="other-title">The region between y = √x and the line y = 1, spun about y = 1</title>
<desc id="other-desc">The curve y = √x rises from (0, 0) to (1, 1). A horizontal line at y = 1, drawn with long dashes and labelled axis of revolution, runs across the graph. The region between the curve and the line, for x from 0 to 1, is shaded; it lies below the line and above the curve, and is bounded on the left by the y-axis. A dotted mirror image of the curve above the line y = 1 shows the outline of the solid after one turn. At x = 0.25 a vertical segment runs from the line y = 1 down to the curve at y = 0.5; it is labelled radius = 1 − √x. A thin ellipse centred on the line y = 1 at x = 0.25 shows the disc swept out by that strip.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<polygon points="100,300.0 114,273.2 128,262.1 142,253.5 156,246.3 170,240.0 184,234.3 198,229.0 212,224.1 226,219.5 240,215.1 254,211.0 268,207.0 282,203.3 296,199.6 310,196.1 324,192.7 338,189.4 352,186.2 366,183.0 380,180.0 100,180" fill="#dfe7f3"/>
<line x1="60" y1="300" x2="480" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="100" y1="330" x2="100" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="180" x2="480" y2="180" stroke="#1d2b44" stroke-width="2" stroke-dasharray="12 6"/>
<polyline points="100,300.0 114,273.2 128,262.1 142,253.5 156,246.3 170,240.0 184,234.3 198,229.0 212,224.1 226,219.5 240,215.1 254,211.0 268,207.0 282,203.3 296,199.6 310,196.1 324,192.7 338,189.4 352,186.2 366,183.0 380,180.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="100,60.0 114,86.8 128,97.9 142,106.5 156,113.7 170,120.0 184,125.7 198,131.0 212,135.9 226,140.5 240,144.9 254,149.0 268,153.0 282,156.7 296,160.4 310,163.9 324,167.3 338,170.6 352,173.8 366,177.0 380,180.0" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<ellipse cx="170" cy="180" rx="12" ry="60" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="170" y1="180" x2="170" y2="240" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="380" y1="296" x2="380" y2="304"/><line x1="240" y1="296" x2="240" y2="304"/>
<line x1="96" y1="240" x2="104" y2="240"/><line x1="96" y1="180" x2="104" y2="180"/><line x1="96" y1="60" x2="104" y2="60"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="240" y="318">0.5</text><text x="380" y="318">1</text><text x="490" y="304">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="92" y="244">0.5</text><text x="92" y="184">1</text><text x="92" y="64">2</text><text x="92" y="24">y</text>
</g>
<text x="390" y="172" font-size="13" fill="#1d2b44">axis: y = 1</text>
<text x="390" y="200" font-size="13" fill="#1d2b44">(long dashes)</text>
<text x="300" y="250" font-size="13" fill="#1d2b44">y = √x (solid curve)</text>
<text x="190" y="280" font-size="13" fill="#1d2b44">radius = 1 − √x</text>
<line x1="200" y1="270" x2="174" y2="226" stroke="#1d2b44" stroke-width="1"/>
<text x="230" y="60" font-size="12" fill="#1d2b44">dotted: outline of the solid above the axis</text>
</svg>
<figcaption>Figure 1. The shaded region lies between y = √x (solid curve) and the axis y = 1 (long dashes), for 0 ≤ x ≤ 1. The strip at x = 0.25 runs from the curve at height 0.5 up to the axis, so it sweeps out a disc of radius 1 − 0.5 = 0.5 (drawn as an ellipse). The dotted curve is the reflection of y = √x in the axis; it shows the top half of the solid's outline. Axes are unitless.</figcaption>
</figure>

## The disc method about other lines

> **Horizontal axis y = k.** If the region lies between y = f(x) and the line y = k for a ≤ x ≤ b, the solid formed by spinning it about y = k has volume **V = π ∫ (a to b) [f(x) − k]² dx**.
>
> **Vertical axis x = h.** If the region lies between x = g(y) and the line x = h for c ≤ y ≤ d, the solid formed by spinning it about x = h has volume **V = π ∫ (c to d) [g(y) − h]² dy**.

Because the radius is squared, [f(x) − k]² and [k − f(x)]² are equal. Still, write the radius as **larger minus smaller** so that it is a positive distance you can explain. In Topics 8.11 and 8.12, where each slice has two radii, that habit prevents errors.

**The axis must be part of the boundary.** Discs need the region to sit against the axis all the way along. In Figure 1, the line y = 1 forms the top edge of the region from x = 0 to x = 1, so every slice is a full disc. If the same region were spun about y = 2, there would be a gap between the region and the axis, and each slice would be a washer (Topic 8.12).

## Reading the radius from different representations

The radius can come to you in several forms. The skill is to turn each one into "distance from the axis".

- **From a graph.** Draw one strip from the axis to the curve, at right angles to the axis. Mark its two ends. The radius is the coordinate of the far end minus the coordinate of the near end (or the reverse, whichever is positive).
- **From equations.** For a horizontal axis, both ends are heights: the axis height k and the curve height f(x). For a vertical axis, both ends are x-coordinates: h and g(y). If the curve is given as y = f(x), solve for x first.
- **From a description or a table.** "The distance from the line to the edge is d(x)" means the radius is d(x) itself. A table of such distances can be used in a Riemann or trapezoidal sum of the areas π[d(x)]².

## The method, step by step

1. **Sketch** the region and draw the axis line. Check that the region touches the axis along its whole length.
2. **Choose the variable.** Horizontal axis: vertical slices, dx. Vertical axis: horizontal slices, dy.
3. **Draw one strip** from the axis to the curve and write its length as larger minus smaller.
4. **Find the limits** along the axis.
5. **Write the integral in full:** V = π ∫ (limits) [radius]² d(variable).
6. **Evaluate** and give cubic units.
7. **Check** against a cylinder whose radius is the largest radius and whose length is the length of the solid.

## Worked example 1: a horizontal axis above the region

**Question.** The region R is bounded by y = √x, the line y = 1 and the y-axis (Figure 1). Find the volume of the solid formed when R is spun about the line y = 1.

1. **Region and axis.** y = √x meets y = 1 at x = 1. R lies below the line y = 1 and above the curve, from x = 0 to x = 1. The line y = 1 is the top edge of R all the way along, so discs work.
2. **Variable.** The axis is horizontal, so slice vertically and use dx.
3. **Radius.** The top of the strip is the axis at height 1. The bottom is the curve at height √x. Radius = 1 − √x.
4. **Integral.**
   **V = π ∫ (0 to 1) [1 − √x]² dx**
5. **Expand.** (1 − √x)² = 1 − 2√x + x.
6. **Integrate.** x − (4/3)x^(3/2) + x²/2. At x = 1: 1 − 4/3 + 1/2 = 1/6. At x = 0: 0.

**Answer.** V = **π/6 cubic units** (about 0.524).

**Check.** The largest radius is 1 (at x = 0). A cylinder of radius 1 and length 1 has volume π ≈ 3.142. The radius falls quickly, from 1 at x = 0 to 0.5 at x = 0.25 and to 0 at x = 1, so the solid is a narrowing horn and a sixth of the cylinder is believable.

**Two wrong radii to avoid.** Using √x (the distance to the x-axis) gives π/2: that is the Topic 8.9 solid formed by spinning the region *under* the curve about the x-axis, not this one. Using 1 − x (as if √x were x) gives π/3. Neither is the volume of this solid.

## Worked example 2: a vertical axis to the right of the region

**Question.** The region S is bounded by y = x², the x-axis and the line x = 3. Find the volume of the solid formed when S is spun about the line x = 3.

1. **Region and axis.** The curve rises from (0, 0) to (3, 9). S lies under the curve, between the curve and the line x = 3. The line x = 3 is the right-hand edge of S from y = 0 to y = 9, so discs work.
2. **Variable.** The axis is vertical, so slice horizontally and use dy. The limits are heights: y = 0 to y = 9.
3. **Rewrite the curve.** For x ≥ 0, y = x² gives x = √y.
4. **Radius.** At height y the strip runs from the curve, x = √y, to the axis, x = 3. The axis is further right, so radius = 3 − √y.
5. **Integral.**
   **V = π ∫ (0 to 9) [3 − √y]² dy = π ∫ (0 to 9) (9 − 6√y + y) dy**
6. **Evaluate each part.** ∫ (0 to 9) 9 dy = 81. ∫ (0 to 9) 6√y dy = 6 × (2/3) × 9^(3/2) = 4 × 27 = 108. ∫ (0 to 9) y dy = 81/2. Total: 81 − 108 + 40.5 = 13.5.

**Answer.** V = **27π/2 cubic units** (about 42.412).

**Check.** A cylinder of radius 3 and height 9 has volume 81π. Our answer is exactly one sixth of that. The solid is widest at the bottom (radius 3) and shrinks to a point at the top, so a small fraction is reasonable.

**Common wrong setup.** π ∫ (0 to 3) (3 − x)² dx uses vertical slices for a vertical axis. It gives 9π, which is the volume of a cone that has nothing to do with S. When the axis is vertical, use dy.

## Worked example 3: a horizontal axis below the region

**Question.** The region T is bounded by y = cos x, the line y = −1 and the y-axis, for 0 ≤ x ≤ π. Find the volume of the solid formed when T is spun about the line y = −1.

1. **Region and axis.** cos x = −1 first at x = π, so the curve meets the line y = −1 at (π, −1). T lies above the line and below the curve, from x = 0 to x = π. The line y = −1 is the bottom edge of T all the way, so discs work.
2. **Variable.** Horizontal axis: dx.
3. **Radius.** The curve is above the axis: radius = cos x − (−1) = **cos x + 1**. Note the sign: subtracting −1 adds 1.
4. **Integral.**
   **V = π ∫ (0 to π) [cos x + 1]² dx = π ∫ (0 to π) (cos²x + 2 cos x + 1) dx**
5. **Evaluate each part.** ∫ (0 to π) 1 dx = π. ∫ (0 to π) 2 cos x dx = 2 sin π − 2 sin 0 = 0. For cos²x use cos²x = (1 + cos 2x)/2: ∫ (0 to π) cos²x dx = π/2 + (sin 2π − sin 0)/4 = π/2. Total: π + 0 + π/2 = 3π/2.

**Answer.** V = π × 3π/2 = **3π²/2 cubic units** (about 14.804). A calculator in radian mode gives the same value for π ∫ (0 to π) (cos x + 1)² dx.

**Check.** The largest radius is 2 (at x = 0) and the solid is π long, so it fits in a cylinder of volume π(2²)(π) = 4π² ≈ 39.478. Our answer is less than half of that, which fits a solid that narrows to a point at x = π.

**The sign slip.** Writing the radius as cos x − 1 is a different function from cos x + 1. On this interval the wrong integral happens to give the same value, 3π²/2, because of the symmetry cos(π − x) = −cos x, so you might not notice the error. On another interval it would cost you the answer: on 0 ≤ x ≤ π/2, the correct radius gives π(3π/4 + 2) but the wrong one gives π(3π/4 − 2). Always compute the radius as curve height minus axis height, with the axis height in brackets.

## Common misconceptions

- **Measuring from the x-axis or y-axis.** The radius is measured from the axis of revolution, not from a coordinate axis.
- **Wrong sign with a negative axis.** For the axis y = −1, the radius of a curve above it is f(x) + 1, not f(x) − 1.
- **Squaring separately.** [1 − √x]² is not 1 − x. Square the whole radius: expand (a − b)² = a² − 2ab + b².
- **Wrong variable.** A vertical axis such as x = 3 needs horizontal slices and dy, with y-limits.
- **Using discs when there is a gap.** If the region does not touch the axis along its whole length, the slices are washers (Topic 8.12).
- **Forgetting π, or using 2π.** Each slice has area πr².
- **Square units.** Volumes are in cubic units.

## Where this leads

Topic 8.9 spun regions about the coordinate axes; here the same disc method works about any horizontal or vertical line. Topic 8.11 introduces washers, for regions with a gap between them and the axis, and Topic 8.12 combines washers with other axes, where you will need two radii, each measured from the axis as larger minus smaller. Continue with [Volume with the Washer Method: Revolving Around the x- or y-Axis](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/), or return to [Topic 8.9](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-checklist/) to consolidate.
