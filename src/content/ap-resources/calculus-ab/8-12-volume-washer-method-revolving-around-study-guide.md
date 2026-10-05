---
resourceId: "mb-ap-calcab-8.12-study-guide"
title: "Volume with Washer Method: Revolving Around Other Axes: Study Guide (Calculus AB 8.12)"
description: "Learn to measure outer and inner radii from any horizontal or vertical axis, and to set up and evaluate washer-method volumes when the axis is not a coordinate axis."
course: "calculus-ab"
unit: 8
topics: ["8.12"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Washer method around the x- or y-axis (Topic 8.11)"
  - "Disc method around other axes (Topic 8.10)"
  - "Rewriting y = f(x) as x in terms of y"
  - "Using a graphing calculator to find intersections and evaluate definite integrals"
prerequisiteResources: ["mb-ap-calcab-8.11-study-guide"]
learningObjectives:
  - "Find each radius as a distance from a horizontal line y = k or a vertical line x = h, written as larger coordinate minus smaller coordinate"
  - "Decide which boundary gives the outer radius when the axis is above, below, left or right of the region"
  - "Write and evaluate washer-method integrals around any horizontal axis (in x) or vertical axis (in y)"
  - "Connect the same region, revolved around different lines, to different radii and different volumes"
skills: ["1", "2"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: store the intersection value and give the volume to three decimal places."
related: ["mb-ap-calcab-8.12-revision-notes", "mb-ap-calcab-8.12-practice", "mb-ap-calcab-8.12-checklist"]
next: "mb-ap-calcab-8.12-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A radius is a distance from the axis: larger coordinate minus smaller coordinate, so it is never negative."
  - "Axis y = k: V = π ∫ [R(x)² − r(x)²] dx, with radii like k − f(x) or f(x) − k. Axis x = h: V = π ∫ [R(y)² − r(y)²] dy, with radii like h − g(y) or g(y) − h."
  - "The outer radius comes from the boundary farther from the axis. If the axis is above the region, that is the lower curve."
  - "The same region revolved around different lines gives different radii and different volumes."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.12 is common content, so the same page serves AB and BC students. It is the last topic of the Calculus AB course; Calculus BC continues with arc length (Topic 8.13) and then Units 9 and 10."
  - question: "Do I add or subtract k when the axis is y = k?"
    answer: "Neither rule works on its own. Write the distance as the larger y-value minus the smaller y-value. For the axis y = −1 and a curve above it, that is f(x) − (−1) = f(x) + 1."
  - question: "Why is the lower curve sometimes the outer radius?"
    answer: "When the axis is above the region, the lower curve is farther from the axis. The outer radius always belongs to the boundary farther from the axis, wherever that is."
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

Integrals are written in a compact form: **π ∫ (a to b) [R(x)² − r(x)²] dx** means π times the definite integral of R(x)² − r(x)² from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. **R** is the outer radius and **r** the inner radius. Keep the brackets and the dx or dy.

## The same washers, a different axis

In Topic 8.11 the axis was the x-axis or the y-axis. A radius was then just a height (a y-value) or an x-value. Now the axis can be any horizontal line y = k or vertical line x = h. Nothing about the slices changes:

- slices are still perpendicular to the axis;
- each slice still spins into a washer with face area π(R² − r²);
- the volume is still π times the integral of R² − r².

What changes is **how you measure the radii**. A radius is the distance from the axis to an edge of the slice. Distances along a vertical line are differences of y-values; distances along a horizontal line are differences of x-values.

> **Radius rule.** Radius = larger coordinate − smaller coordinate. This is always positive, so you never need to guess whether to add or subtract k.

| Axis | Slice | Boundary curve | Radius if axis is on this side |
|---|---|---|---|
| y = k, above the region | vertical, dx | y = f(x) | k − f(x) |
| y = k, below the region | vertical, dx | y = f(x) | f(x) − k |
| x = h, right of the region | horizontal, dy | x = g(y) | h − g(y) |
| x = h, left of the region | horizontal, dy | x = g(y) | g(y) − h |

**Which boundary is the outer one?** The one **farther from the axis**. If the axis is above the region, the lower curve is farther away, so the lower curve gives R. This surprises many students, and it is a common error in this topic.

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="axis5-title axis5-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="axis5-title">Region between y = x² and y = 4, revolved around the line y = 5</title>
<desc id="axis5-desc">Axes with the parabola y = x² and the horizontal line y = 4. The region between them, from x = −2 to x = 2, is shaded. Above it, a dashed horizontal line y = 5 is labelled as the axis of revolution. A thin vertical strip at x = 1 runs from the parabola at height 1 up to the line at height 4. Two measurements go down from the axis y = 5: the inner radius r = 5 − 4 = 1 reaches the top of the strip, and the longer outer radius R = 5 − x² = 4 reaches the bottom of the strip on the parabola.</desc>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<polygon points="100,120.0 105,137.6 110,154.2 115,170.0 120,184.8 125,198.8 130,211.8 135,224.0 140,235.2 145,245.6 150,255.0 155,263.6 160,271.2 165,278.0 170,283.8 175,288.8 180,292.8 185,296.0 190,298.2 195,299.6 200,300.0 205,299.6 210,298.2 215,295.9 220,292.8 225,288.7 230,283.8 235,277.9 240,271.2 245,263.5 250,255.0 255,245.5 260,235.2 265,223.9 270,211.8 275,198.7 280,184.8 285,169.9 290,154.2 295,137.5 300,120.0" fill="#dfe7f3"/>
<rect x="245" y="120" width="10" height="135" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="40" y1="300" x2="400" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="200" y1="320" x2="200" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="80,40.8 85,62.0 90,82.2 95,101.6 100,120.0 105,137.6 110,154.2 115,170.0 120,184.8 125,198.8 130,211.8 135,224.0 140,235.2 145,245.6 150,255.0 155,263.6 160,271.2 165,278.0 170,283.8 175,288.8 180,292.8 185,296.0 190,298.2 195,299.6 200,300.0 205,299.5 210,298.2 215,295.9 220,292.8 225,288.7 230,283.8 235,277.9 240,271.2 245,263.5 250,255.0 255,245.5 260,235.2 265,223.9 270,211.8 275,198.7 280,184.8 285,169.9 290,154.2 295,137.5 300,120.0 305,101.5 310,82.2 315,61.9 320,40.8" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="60" y1="120" x2="340" y2="120" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="40" y1="75" x2="400" y2="75" stroke="#1d2b44" stroke-width="2" stroke-dasharray="10 6"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="100" y1="296" x2="100" y2="304"/><line x1="150" y1="296" x2="150" y2="304"/><line x1="250" y1="296" x2="250" y2="304"/><line x1="300" y1="296" x2="300" y2="304"/>
<line x1="196" y1="255" x2="204" y2="255"/><line x1="196" y1="120" x2="204" y2="120"/><line x1="196" y1="75" x2="204" y2="75"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="316">−2</text><text x="150" y="316">−1</text><text x="250" y="316">1</text><text x="300" y="316">2</text><text x="408" y="296">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="194" y="259">1</text><text x="194" y="116">4</text><text x="194" y="71">5</text><text x="194" y="34">y</text>
</g>
<line x1="250" y1="77" x2="250" y2="253" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<line x1="236" y1="77" x2="236" y2="118" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="3 3"/>
<text x="274" y="230" font-size="12" fill="#1d2b44">R = 5 − x²</text>
<text x="204" y="102" font-size="12" fill="#1d2b44">r = 1</text>
<text x="330" y="68" font-size="12" fill="#1d2b44">axis y = 5 (dashed)</text>
<text x="345" y="135" font-size="12" fill="#1d2b44">y = 4</text>
<text x="322" y="50" font-size="12" fill="#1d2b44">y = x²</text>
</svg>
<figcaption>Figure 1. The region between y = x² and y = 4, with the axis of revolution y = 5 (dashed) above it. For the strip at x = 1, the inner radius is the short gap from the axis down to y = 4, r = 1. The outer radius reaches the parabola, the boundary farther from the axis: R = 5 − 1² = 4. The parabola is the lower curve but gives the outer radius.</figcaption>
</figure>

## The method, step by step

1. **Sketch** the region and draw the axis as a dashed line.
2. **Slice perpendicular to the axis**: vertical slices (dx) for a horizontal axis, horizontal slices (dy) for a vertical axis.
3. **Find the limits** in the slice variable.
4. **Write each radius as a distance**: larger coordinate minus smaller coordinate.
5. **Choose R and r** with a test point: R belongs to the boundary farther from the axis.
6. **Write and evaluate** π ∫ [R² − r²], with the right differential.
7. **Check** the answer is positive, and compare it with a simpler shape if you can.

**A quick test before you integrate.** Put your test point into both radius formulas and compare the numbers with your sketch. In Figure 1 at x = 1, your formulas should give R = 4 and r = 1, and on the picture the dashed measurement to the parabola is visibly about four times the one to the line. If a formula gives a negative number, or the larger number belongs to the curve that looks closer to the axis, fix it now. This one check catches most sign and order errors in this topic.

## Worked example 1: axis above the region (no calculator)

**Question.** The region between y = x² and y = 4 (Figure 1) is revolved around the line y = 5. Find the exact volume.

1. **Limits.** x² = 4 gives x = −2 and x = 2.
2. **Slices.** The axis is horizontal, so slices are vertical and everything is in x.
3. **Distances from y = 5.** The axis is above both boundaries, so each distance is 5 minus the curve's y-value. To the line: 5 − 4 = 1. To the parabola: 5 − x².
4. **R and r.** Test x = 0: the parabola is 5 units from the axis and the line is 1 unit away. So **R(x) = 5 − x²** and **r(x) = 1**.
5. **Integral.**
   **V = π ∫ (−2 to 2) [(5 − x²)² − 1²] dx**
6. **Expand.** (5 − x²)² − 1 = 25 − 10x² + x⁴ − 1 = x⁴ − 10x² + 24.
7. **Evaluate.** The integrand is even: ∫ (0 to 2) (x⁴ − 10x² + 24) dx = 32/5 − 80/3 + 48 = (96 − 400 + 720)/15 = 416/15. Double it: V = 832π/15.

**Answer.** **V = 832π/15 cubic units** (about 174.254).

**What goes wrong.** Taking R from the line and r from the parabola gives −832π/15, a negative volume. Ignoring the axis and revolving around the x-axis gives 256π/5, a different solid.

### The same region, axis below

Revolve the same region around y = −1 instead. Now the axis is **below** the region, so each distance is the curve's y-value minus (−1), which is the y-value plus 1. The line y = 4 is now farther away:

- R(x) = 4 − (−1) = 5
- r(x) = x² − (−1) = x² + 1

V = π ∫ (−2 to 2) [25 − (x² + 1)²] dx = **1088π/15** (about 227.870).

The region is the same, but the volume is larger because the region now sits farther from the axis on average. Also, the line that gave the inner radius before now gives the outer radius. Subtracting 1 instead of adding it (writing x² − 1 and 3) gives 448π/15, which is wrong: the distance from y = −1 up to y = 4 is 5, not 3.

## Worked example 2: a vertical axis (no calculator)

**Question.** The region bounded by x = y² and x = 4 is revolved around the line x = 6. Find the volume.

1. **Limits.** The axis is vertical, so slices are horizontal and everything is in y. y² = 4 gives y = −2 and y = 2.
2. **Distances from x = 6.** The axis is to the right of the region, so each distance is 6 minus the curve's x-value. To the parabola x = y²: 6 − y². To the line x = 4: 6 − 4 = 2.
3. **R and r.** Test y = 0: the parabola is at x = 0, which is 6 units from the axis; the line is 2 units away. So **R(y) = 6 − y²** and **r(y) = 2**.
4. **Integral.**
   **V = π ∫ (−2 to 2) [(6 − y²)² − 2²] dy**
5. **Expand.** (6 − y²)² − 4 = y⁴ − 12y² + 32.
6. **Evaluate.** ∫ (−2 to 2) 32 dy = 128. ∫ (−2 to 2) 12y² dy = 64. ∫ (−2 to 2) y⁴ dy = 64/5. So the integral is 128 − 64 + 64/5 = 384/5.

**Answer.** **V = 384π/5 cubic units** (about 241.274).

**Check.** The solid fits inside a thick tube with outer radius 6, inner radius 2 and height 4, whose volume is π(36 − 4)(4) = 128π ≈ 402.1. The answer is smaller, as it should be, because the parabola is closer to the axis than x = 0 for every y except y = 0. Revolving around the y-axis by mistake (R = 4, r = y²) gives 256π/5.

## Worked example 3: intersections from a calculator

**Question.** The region enclosed by y = 4 − x² and y = 2ˣ is revolved around the line y = −1. Find the volume. (Calculator allowed.)

1. **Intersections.** Solve 4 − x² = 2ˣ on the calculator: x = A ≈ −1.933442 and x = B ≈ 1.264166. Store A and B.
2. **Distances from y = −1.** The axis is below the region, so add 1 to each y-value: (4 − x²) + 1 = 5 − x² and 2ˣ + 1.
3. **R and r.** Test x = 0: 5 − 0 = 5 and 2⁰ + 1 = 2. So **R(x) = 5 − x²** and **r(x) = 2ˣ + 1**.
4. **Integral.**
   **V = π ∫ (A to B) [(5 − x²)² − (2ˣ + 1)²] dx**
5. **Evaluate** with the stored limits: **V ≈ 130.938 cubic units.** On paper: "π ∫ (−1.933 to 1.264) [(5 − x²)² − (2ˣ + 1)²] dx = 130.938".

**Sense check.** The same region revolved around the x-axis gives π ∫ (A to B) [(4 − x²)² − (2ˣ)²] dx ≈ 89.341. Moving the axis 1 unit further from the region should make every washer larger, and 130.938 is indeed larger. In fact (R + 1)² − (r + 1)² = R² − r² + 2(R − r), so each face grows by an amount that depends on the slice. That is why you must square the shifted radii rather than adjust the final answer. Subtracting 1 instead of adding it would measure from the line y = 1, which even cuts through the region, and gives about 47.744; rounding the limits to −1.9 and 1.3 first gives 130.863. Both are wrong.

## Common misconceptions

- **"The top curve is always R."** Only when the axis is below the region. R comes from the boundary farther from the axis.
- **Adding k when you should subtract (or the reverse).** Use larger coordinate minus smaller coordinate. For the axis y = −1, that means adding 1.
- **Ignoring the axis.** Using the plain curve values, as if the axis were y = 0 or x = 0, gives a different solid.
- **Shifting the answer instead of the radii.** Changing the axis changes each radius before squaring; you cannot adjust the final volume by a simple amount.
- **Wrong variable for a vertical axis.** Around x = h, slices are horizontal: write the curves as x in terms of y and use y-limits.
- **(R − r)² instead of R² − r².** The face of a washer is a big circle minus a small circle.
- **Rounding early** on a calculator question. Store the intersection values and round only the final volume.

## Where this leads

Topic 8.12 completes the Calculus AB course content: you can now find volumes with known cross sections, discs and washers around any horizontal or vertical axis. For AB students, the next step is mixed revision across Unit 8 and the whole course, including recognising which method a question needs. Calculus BC students continue with arc length (Topic 8.13) and then Units 9 and 10. Look back at [Volume with Washer Method: Revolving Around the x- or y-Axis](/advanced-course-resources/calculus-ab/8-11-volume-washer-method-revolving-around-study-guide/) if the radii here felt unfamiliar. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-12-volume-washer-method-revolving-around-checklist/) to consolidate.
