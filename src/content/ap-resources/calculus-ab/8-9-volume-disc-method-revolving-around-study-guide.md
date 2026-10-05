---
resourceId: "mb-ap-calcab-8.9-study-guide"
title: "Volume with the Disc Method: Revolving Around the x- or y-Axis: Study Guide (Calculus AB 8.9)"
description: "Learn why spinning a region about the x- or y-axis gives circular slices, how to write the disc integral π∫r² with the right variable and limits, and how to evaluate it with and without a calculator."
course: "calculus-ab"
unit: 8
topics: ["8.9"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Volumes from known cross sections, V = ∫ A(x) dx (Topics 8.7 and 8.8)"
  - "Evaluating definite integrals with antiderivatives and with a calculator (Unit 6)"
  - "Rewriting y = f(x) as x in terms of y (inverse functions)"
  - "Area of a circle, A = πr², and volume of a cylinder, V = πr²h"
prerequisiteResources: ["mb-ap-calcab-8.8-study-guide"]
learningObjectives:
  - "Explain why a region spun about the x-axis or y-axis has circular cross sections, and why each slice's area is π times the radius squared"
  - "Write the disc-method integral for a solid of revolution about the x-axis (in x) or the y-axis (in y), with correct radius, limits and differential"
  - "Evaluate disc-method volumes exactly, or with a graphing calculator when the integral has no simple antiderivative"
  - "Recognise when the disc method applies (the region touches the axis all the way along) and check an answer against a simple cylinder"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: use radians, store unrounded values and give the volume to three decimal places."
related: ["mb-ap-calcab-8.9-revision-notes", "mb-ap-calcab-8.9-practice", "mb-ap-calcab-8.9-checklist"]
next: "mb-ap-calcab-8.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "Spinning a region about an axis it touches makes a solid whose slices, cut at right angles to the axis, are circular discs."
  - "About the x-axis: V = π ∫ (a to b) [f(x)]² dx. About the y-axis: V = π ∫ (c to d) [g(y)]² dy, where x = g(y) describes the curve."
  - "The radius is the distance from the axis to the curve. Square the radius before you integrate, and keep the π."
  - "Slice at right angles to the axis: x-axis means dx and x-limits; y-axis means dy and y-limits."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.9 is common content, so the same page serves AB and BC students."
  - question: "Do I need the shell method?"
    answer: "No. Every volume of revolution in this course can be set up with discs (and, from Topic 8.11, washers). The shell method is not part of the course framework."
  - question: "What if the curve is below the x-axis?"
    answer: "The radius is a distance, so it is |f(x)|. Because you square it, π[f(x)]² is still correct. The volume is always positive."
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

This page has no equation renderer, so integrals are written in a compact form: **π ∫ (a to b) [f(x)]² dx** means π times the definite integral of [f(x)]² from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. Keep the square brackets and the small ² outside them: the whole radius is squared. The **dx** or **dy** tells you which variable the limits belong to.

## From known cross sections to solids of revolution

In Topics 8.7 and 8.8 you built a solid from thin slices. If every slice at position x has area A(x) and thickness Δx, the slice's volume is about A(x) Δx. Adding the slices and letting Δx shrink gives

**V = ∫ (a to b) A(x) dx**

A **solid of revolution** is a special case. Take a flat region and spin it through a full turn about a line in its plane, called the **axis of revolution**. If the region sits right against the axis, every point on a thin vertical strip traces out a circle about the axis. So each slice, cut at right angles to the axis, is a solid circle: a **disc**.

The radius of that disc is the length of the strip, which is the distance from the axis out to the curve. For a region between y = f(x) and the x-axis, that distance is f(x) (or |f(x)| if the curve is below the axis). The slice's area is

**A(x) = π × (radius)² = π[f(x)]²**

and the volume is the integral of that area. Nothing new is happening: the disc method is the cross-section method with the shape fixed as a circle.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="disc-title disc-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="disc-title">The region under y = 3x − x² spun about the x-axis, with one disc slice</title>
<desc id="disc-desc">The arch y = 3x − x² rises from (0, 0) to a peak of height 2.25 at x = 1.5 and returns to the x-axis at (3, 0). The region between the arch and the x-axis is shaded. A dashed mirror image of the arch below the x-axis shows the outline of the solid after a full turn about the x-axis. At x = 1 a vertical line segment of length 2 runs from the x-axis up to the curve; it is labelled radius r = f(x). A tall thin ellipse centred on the x-axis at x = 1, reaching from height 2 to height −2, shows the circular disc that this strip sweeps out. A curved arrow near the right end of the x-axis indicates rotation about the x-axis.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<polygon points="80,170.0 90,155.5 100,142.0 110,129.5 120,118.0 130,107.5 140,98.0 150,89.5 160,82.0 170,75.5 180,70.0 190,65.5 200,62.0 210,59.5 220,58.0 230,57.5 240,58.0 250,59.5 260,62.0 270,65.5 280,70.0 290,75.5 300,82.0 310,89.5 320,98.0 330,107.5 340,118.0 350,129.5 360,142.0 370,155.5 380,170.0" fill="#dfe7f3"/>
<line x1="40" y1="170" x2="470" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="300" x2="80" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="80,170.0 90,155.5 100,142.0 110,129.5 120,118.0 130,107.5 140,98.0 150,89.5 160,82.0 170,75.5 180,70.0 190,65.5 200,62.0 210,59.5 220,58.0 230,57.5 240,58.0 250,59.5 260,62.0 270,65.5 280,70.0 290,75.5 300,82.0 310,89.5 320,98.0 330,107.5 340,118.0 350,129.5 360,142.0 370,155.5 380,170.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<polyline points="80,170.0 90,184.5 100,198.0 110,210.5 120,222.0 130,232.5 140,242.0 150,250.5 160,258.0 170,264.5 180,270.0 190,274.5 200,278.0 210,280.5 220,282.0 230,282.5 240,282.0 250,280.5 260,278.0 270,274.5 280,270.0 290,264.5 300,258.0 310,250.5 320,242.0 330,232.5 340,222.0 350,210.5 360,198.0 370,184.5 380,170.0" fill="none" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<ellipse cx="180" cy="170" rx="16" ry="100" fill="none" stroke="#1d2b44" stroke-width="2"/>
<line x1="180" y1="170" x2="180" y2="70" stroke="#1d2b44" stroke-width="3"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="280" y1="166" x2="280" y2="174"/><line x1="380" y1="166" x2="380" y2="174"/>
<line x1="76" y1="120" x2="84" y2="120"/><line x1="76" y1="70" x2="84" y2="70"/><line x1="76" y1="220" x2="84" y2="220"/><line x1="76" y1="270" x2="84" y2="270"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="172" y="188">1</text><text x="280" y="188">2</text><text x="388" y="188">3</text><text x="478" y="174">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="72" y="124">1</text><text x="72" y="74">2</text><text x="72" y="224">−1</text><text x="72" y="274">−2</text><text x="72" y="24">y</text>
</g>
<text x="96" y="52" font-size="13" fill="#1d2b44">radius r = f(x)</text>
<line x1="140" y1="56" x2="176" y2="100" stroke="#1d2b44" stroke-width="1"/>
<text x="240" y="44" font-size="13" fill="#1d2b44">y = 3x − x² (solid curve)</text>
<text x="250" y="300" font-size="12" fill="#1d2b44">dashed: outline of the solid after one full turn</text>
<text x="30" y="316" font-size="12" fill="#1d2b44">ellipse at x = 1: the disc swept out by one strip</text>
<path d="M 440 150 A 12 22 0 1 1 440 190" fill="none" stroke="#1d2b44" stroke-width="1.5"/>
<polygon points="440,190 448,184 436,182" fill="#1d2b44"/>
<text x="372" y="128" font-size="12" fill="#1d2b44">spin about the x-axis</text>
</svg>
<figcaption>Figure 1. The shaded region under y = 3x − x² (0 ≤ x ≤ 3) is spun once about the x-axis. The strip at x = 1 has length f(1) = 2, so it sweeps out a disc of radius 2 (drawn as an ellipse because the disc is seen at an angle). The dashed curve is the mirror image of the arch: together with the solid curve it outlines the football-shaped solid. Axes are unitless.</figcaption>
</figure>

## The disc method

> **About the x-axis.** If the region lies between y = f(x) and the x-axis for a ≤ x ≤ b, the solid formed by spinning it about the x-axis has volume **V = π ∫ (a to b) [f(x)]² dx**.
>
> **About the y-axis.** If the region lies between x = g(y) and the y-axis for c ≤ y ≤ d, the solid formed by spinning it about the y-axis has volume **V = π ∫ (c to d) [g(y)]² dy**.

A short way to remember both: **V = π ∫ (radius)² d(variable along the axis)**.

Three points decide almost every mark in this topic.

1. **The radius is a distance from the axis.** It runs at right angles to the axis, from the axis out to the curve. For the x-axis that is a vertical distance, f(x). For the y-axis it is a horizontal distance, g(y).
2. **Slice at right angles to the axis.** Spinning about the x-axis gives vertical slices with thickness dx, so the limits are x-values. Spinning about the y-axis gives horizontal slices with thickness dy, so the limits are y-values and the radius must be written in terms of y.
3. **The region must touch the axis all the way along.** If there is a gap between the region and the axis, each slice is a disc with a hole in it: a washer. That case is Topic 8.11. In this topic every slice is a full disc.

**A curve below the axis.** If f(x) is negative, the radius is |f(x)|. Because the radius is squared, π[f(x)]² gives the same area either way. A disc volume is never negative.

## Revolving about the y-axis

When the axis is vertical, the slices are horizontal. Ask: "At height y, how far is the curve from the y-axis?" That distance is the x-coordinate of the curve at that height, so you need **x as a function of y**.

- y = x², x ≥ 0, becomes x = √y.
- y = x³ becomes x = y^(1/3).
- y = eˣ becomes x = ln y.

The limits are the lowest and highest y-values of the region, not x-values. If the region is described by x-limits, convert them: an edge at x = 2 on y = x³ is the height y = 8.

## The method, step by step

1. **Sketch** the region and the axis. Check that the region touches the axis along its whole length.
2. **Draw one strip at right angles to the axis.** Its length is the radius.
3. **Write the radius** in terms of the variable along the axis (x for the x-axis, y for the y-axis).
4. **Find the limits** along the axis: the first and last slice.
5. **Write the integral in full:** V = π ∫ (limits) [radius]² d(variable). This line earns the setup marks.
6. **Evaluate**, with antiderivatives or a calculator, and give **cubic units**.
7. **Check** against a simple cylinder that contains the solid.

## Worked example 1: about the x-axis (no calculator)

**Question.** The region R lies between the curve y = 3x − x² and the x-axis (Figure 1). Find the volume of the solid formed when R is spun about the x-axis.

1. **Limits.** 3x − x² = x(3 − x) = 0 at x = 0 and x = 3. Between them the curve is above the axis (for example f(1) = 2), so R touches the x-axis from x = 0 to x = 3.
2. **Radius.** A vertical strip at x reaches from the axis to the curve, so the radius is r = 3x − x².
3. **Integral.**
   **V = π ∫ (0 to 3) [3x − x²]² dx**
4. **Expand before integrating.** (3x − x²)² = 9x² − 6x³ + x⁴. You cannot integrate a square by squaring the antiderivative, so expand first.
5. **Antiderivative.** 3x³ − (3/2)x⁴ + x⁵/5.
6. **Evaluate.** At x = 3: 81 − 243/2 + 243/5 = 81 − 121.5 + 48.6 = 8.1. At x = 0 it is 0.

**Answer.** V = 8.1π = **81π/10 cubic units** (about 25.447).

**Check.** The widest disc has radius 9/4 (at the peak, x = 1.5). A cylinder of radius 9/4 and length 3 has volume π(9/4)²(3) = 243π/16 ≈ 47.713, and the solid fits inside it. Our answer is a bit over half of that, which is reasonable for a shape that tapers to points at both ends.

**A common slip.** π ∫ (0 to 3) (3x − x²) dx = 9π/2 ≈ 14.137. That forgets to square the radius. It is π times the area of R, which is not a volume.

## Worked example 2: about the y-axis (no calculator)

**Question.** The region S is bounded by the curve y = x³, the y-axis and the line y = 8. Find the volume of the solid formed when S is spun about the y-axis.

1. **Sketch.** The curve y = x³ rises through (0, 0) and (2, 8). S is the region to the left of the curve, between the y-axis and the curve, from y = 0 up to y = 8. It touches the y-axis all the way, so discs work.
2. **Slices.** The axis is vertical, so slice horizontally. Each slice has thickness dy.
3. **Radius.** At height y, the curve is at x = y^(1/3). The radius is the horizontal distance from the y-axis to the curve: r = y^(1/3).
4. **Limits.** y runs from 0 to 8. (The point (2, 8) gives the top limit as a y-value, 8, not the x-value 2.)
5. **Integral.**
   **V = π ∫ (0 to 8) [y^(1/3)]² dy = π ∫ (0 to 8) y^(2/3) dy**
6. **Evaluate.** The antiderivative of y^(2/3) is (3/5)y^(5/3). At y = 8: 8^(5/3) = 2⁵ = 32, so (3/5)(32) = 96/5.

**Answer.** V = **96π/5 cubic units** (about 60.319).

**Check.** The solid sits inside a cylinder of radius 2 and height 8, of volume π(2²)(8) = 32π ≈ 100.531. Our solid is narrow at the bottom and full width at the top, so a value of 0.6 of the cylinder is sensible.

**Why not use dx?** Writing π ∫ (0 to 2) (x³)² dx spins a different region (the one under the curve, next to the x-axis) about a different axis (the x-axis). The variable must match the axis: y-axis, dy.

## Worked example 3: a calculator-active profile

**Question.** A craft designer models a wooden spindle by spinning the region between r(x) = 1 + 0.3 sin x and the x-axis, for 0 ≤ x ≤ 6, about the x-axis. Lengths are in centimetres. (This context is invented.) Find the volume of wood in the spindle. Calculator allowed.

1. **Radius.** The profile r(x) is always between 0.7 and 1.3, so it is positive and the region touches the x-axis from x = 0 to x = 6.
2. **Integral.** Write it before pressing any keys:
   **V = π ∫ (0 to 6) [1 + 0.3 sin x]² dx**
3. **Evaluate** in radian mode: **V ≈ 19.811 cm³**.

**Notation on paper.** A complete response shows "π ∫ (0 to 6) (1 + 0.3 sin x)² dx = 19.811". The decimal alone is not enough; the integral shows the method.

**Sense check.** A cylinder of radius 1 cm and length 6 cm has volume 6π ≈ 18.850 cm³. The spindle is wider than 1 cm over slightly more than half of its length, so a volume a little above 18.850 makes sense. If you forget the square you get about 18.887, which happens to be close here. That is a warning: a sense check can miss a missing square when the radius is near 1, so always look at your integral too.

## Common misconceptions

- **Forgetting π.** Each slice is a circle of area πr². Without π you have integrated something else.
- **Forgetting to square.** π ∫ f(x) dx is π times an area, not a volume.
- **Squaring after integrating.** π[∫ f(x) dx]² is not the same as π ∫ [f(x)]² dx. Square the radius inside the integral.
- **Using 2π.** 2πr is the circumference, not the area. The disc area is πr².
- **Mixing variables.** About the y-axis, both the radius and the limits must be in y. A dx with y-limits (or the reverse) is a wrong integral.
- **Using the diameter.** The radius runs from the axis to the curve, not across the whole solid.
- **Using discs when the region does not touch the axis.** If there is a gap, the slices are washers (Topic 8.11).
- **Square units.** A volume is in cubic units: cm³, m³ or "cubic units".
- **Rounding too early** on a calculator question. Store values and round only the final answer to three decimal places.

## Where this leads

Topic 8.8 found volumes from slices of known shape; here the slice is always a circle. Topic 8.10 keeps the disc method but spins about other lines, such as y = 2 or x = −1, where the radius becomes a difference. Topic 8.11 then handles regions with a gap between them and the axis, where the slices are washers. Continue with [Volume with the Disc Method: Revolving Around Other Axes](/advanced-course-resources/calculus-ab/8-10-volume-disc-method-revolving-around-study-guide/), or return to [Topic 8.8](/advanced-course-resources/calculus-ab/8-8-volumes-cross-sections-triangles-semicircles-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-9-volume-disc-method-revolving-around-checklist/) to consolidate.
