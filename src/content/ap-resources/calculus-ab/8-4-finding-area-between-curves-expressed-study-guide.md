---
resourceId: "mb-ap-calcab-8.4-study-guide"
title: "Finding the Area Between Curves Expressed as Functions of x: Study Guide (Calculus AB 8.4)"
description: "Learn why the area between two curves is the integral of top minus bottom, how to find the limits and the top curve, and how to write and evaluate the integral with and without a calculator."
course: "calculus-ab"
unit: 8
topics: ["8.4"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums (Topic 6.3)"
  - "Evaluating definite integrals with antiderivatives (Topics 6.7 to 6.9)"
  - "Solving polynomial equations; using a graphing calculator to find intersection points"
  - "Applied integrals as accumulations of small pieces (Topic 8.3)"
prerequisiteResources: ["mb-ap-calcab-8.3-study-guide"]
learningObjectives:
  - "Build the area between two curves from thin vertical rectangles and explain why it becomes ∫ (a to b) [top − bottom] dx"
  - "Find the limits of integration from intersection points or given vertical lines, and decide which curve is on top"
  - "Write a correct area integral with dx, brackets and limits, and evaluate it exactly or with a calculator"
  - "Find areas of regions that lie partly or wholly below the x-axis, and regions whose top or bottom boundary changes"
skills: ["4"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 3 use no calculator. Worked example 2 is calculator-active: find intersections and the integral on a graphing calculator, store unrounded values and give the area to three decimal places."
related: ["mb-ap-calcab-8.4-revision-notes", "mb-ap-calcab-8.4-practice", "mb-ap-calcab-8.4-checklist"]
next: "mb-ap-calcab-8.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "If f(x) ≥ g(x) on [a, b], the area between the graphs is ∫ (a to b) [f(x) − g(x)] dx: top minus bottom, integrated with respect to x."
  - "The limits are x-values: usually where the curves meet, found by solving f(x) = g(x)."
  - "Top minus bottom works wherever the region sits, above or below the x-axis. An area is never negative."
  - "If the top or the bottom boundary changes formula partway across, split the integral at that x-value."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.4 is common content, so the same page serves AB and BC students."
  - question: "What if my answer comes out negative?"
    answer: "You subtracted in the wrong order (bottom minus top). Check which curve is higher with a test point between the limits. The area is the positive value."
  - question: "Do I need to split the integral where a curve crosses the x-axis?"
    answer: "No. For the area between two curves only the difference top − bottom matters. You split only where the curves cross each other or where a boundary changes formula."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) [f(x) − g(x)] dx** means the definite integral of f(x) − g(x) from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. Keep the square brackets: they show that the whole difference is integrated, and the **dx** shows which variable the limits belong to.

## From area under a curve to area between curves

In Unit 6 the definite integral of a positive function gave the area between its graph and the x-axis. Now the region is trapped between two graphs, y = f(x) on top and y = g(x) underneath, for a ≤ x ≤ b.

Build it the same way as before. Cut [a, b] into thin vertical strips of width Δx. Pick a point xᵢ in each strip. The strip is almost a rectangle:

- its **height** is the top value minus the bottom value, f(xᵢ) − g(xᵢ);
- its **width** is Δx;
- its **area** is about [f(xᵢ) − g(xᵢ)] Δx.

Adding the strips gives the Riemann sum Σ [f(xᵢ) − g(xᵢ)] Δx. As the strips get thinner, the sum becomes a definite integral:

> **Area between curves (vertical strips).** If f and g are continuous and f(x) ≥ g(x) for a ≤ x ≤ b, the area of the region between their graphs is ∫ (a to b) [f(x) − g(x)] dx.

A short way to remember it: **∫ (left to right) [top − bottom] dx**.

The limits are the left and right edges of the region. Sometimes vertical lines x = a and x = b are given. More often the region is closed off by the curves themselves, so a and b are the x-coordinates of the points where the curves meet.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="between-title between-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="between-title">Region between y = 3 − x² and y = x + 1, with one vertical strip</title>
<desc id="between-desc">A downward parabola y = 3 − x² and a straight line y = x + 1 cross at (−2, −1) and (1, 2). The region between them, from x = −2 to x = 1, is shaded. The parabola is the upper boundary and the line is the lower boundary. Part of the region near x = −2 lies below the x-axis. A thin vertical rectangle at x = −0.5 runs from the line up to the parabola; its height is labelled top minus bottom and its width Δx.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<polygon points="60,240 70,224 80,210 90,196 100,182 110,170 120,158 130,148 140,138 150,128 160,120 170,112 180,106 190,100 200,94 210,90 220,86 230,84 240,82 250,80 260,80 270,80 280,82 290,84 300,86 310,90 320,94 330,100 340,106 350,112 360,120 60,240" fill="#dfe7f3"/>
<rect x="200" y="90" width="20" height="90" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="10" y1="200" x2="500" y2="200" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="260" y1="330" x2="260" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="20,310 30,292 40,274 50,256 60,240 70,224 80,210 90,196 100,182 110,170 120,158 130,148 140,138 150,128 160,120 170,112 180,106 190,100 200,94 210,90 220,86 230,84 240,82 250,80 260,80 270,80 280,82 290,84 300,86 310,90 320,94 330,100 340,106 350,112 360,120 370,128 380,138 390,148 400,158 410,170 420,182" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="20" y1="256" x2="420" y2="96" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="196" x2="60" y2="204"/><line x1="160" y1="196" x2="160" y2="204"/><line x1="360" y1="196" x2="360" y2="204"/>
<line x1="256" y1="160" x2="264" y2="160"/><line x1="256" y1="120" x2="264" y2="120"/><line x1="256" y1="80" x2="264" y2="80"/><line x1="256" y1="240" x2="264" y2="240"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="216">−2</text><text x="160" y="216">−1</text><text x="360" y="216">1</text><text x="505" y="196">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="252" y="164">1</text><text x="252" y="124">2</text><text x="252" y="76">3</text><text x="252" y="244">−1</text><text x="252" y="24">y</text>
</g>
<circle cx="60" cy="240" r="4" fill="#1d2b44"/><circle cx="360" cy="120" r="4" fill="#1d2b44"/>
<text x="68" y="262" font-size="12" fill="#1d2b44">(−2, −1)</text>
<text x="368" y="116" font-size="12" fill="#1d2b44">(1, 2)</text>
<text x="300" y="58" font-size="13" fill="#1d2b44">top: y = 3 − x² (solid)</text>
<text x="385" y="150" font-size="13" fill="#1d2b44">bottom: y = x + 1</text>
<text x="385" y="166" font-size="13" fill="#1d2b44">(dashed)</text>
<line x1="226" y1="92" x2="226" y2="178" stroke="#1d2b44" stroke-width="1"/>
<text x="120" y="70" font-size="12" fill="#1d2b44">height = top − bottom</text>
<line x1="190" y1="74" x2="212" y2="100" stroke="#1d2b44" stroke-width="1"/>
<text x="196" y="196" font-size="12" fill="#1d2b44">Δx</text>
</svg>
<figcaption>Figure 1. The region between y = 3 − x² (solid, on top) and y = x + 1 (dashed, underneath) for −2 ≤ x ≤ 1. The white strip shows one Riemann-sum rectangle: height f(x) − g(x), width Δx. Near x = −2 the region dips below the x-axis, yet top − bottom still gives each strip's height.</figcaption>
</figure>

## The method, step by step

1. **Sketch** both graphs, even roughly. Shade the region.
2. **Find the left and right edges.** Solve f(x) = g(x) for the intersection points, or use the given vertical lines.
3. **Decide which curve is on top.** Pick a test x-value strictly between the limits and compare f and g there.
4. **Write the integral** in full: ∫ (a to b) [top − bottom] dx. This step is where notation marks are earned.
5. **Evaluate**, with antiderivatives or a calculator.
6. **Check** the answer is positive and roughly matches your sketch.

## Why the x-axis does not matter

Suppose the whole picture is moved up by 5 units. Both curves rise by 5, so every strip has the same height: (f + 5) − (g + 5) = f − g. The area is unchanged. This means the formula works whether the region is above the x-axis, below it or across it. You never need to split at a place where a curve crosses the x-axis.

**A curve and the x-axis.** The x-axis is the curve y = 0. If y = x² − 4x lies below the axis on [0, 4], the top is y = 0 and the bottom is y = x² − 4x, so the area is

**∫ (0 to 4) [0 − (x² − 4x)] dx = ∫ (0 to 4) (4x − x²) dx = 32/3**

The plain integral ∫ (0 to 4) (x² − 4x) dx is −32/3. That is a signed area, not an area. Top minus bottom makes the sign right automatically.

## Worked example 1: two curves that meet twice (no calculator)

**Question.** Find the area of the region enclosed by y = 3 − x² and y = x + 1 (Figure 1).

1. **Intersections.** 3 − x² = x + 1 gives x² + x − 2 = 0, so (x + 2)(x − 1) = 0 and x = −2 or x = 1. The points are (−2, −1) and (1, 2).
2. **Top curve.** Test x = 0: 3 − 0² = 3 and 0 + 1 = 1. So y = 3 − x² is on top for −2 < x < 1.
3. **Integral.**
   **Area = ∫ (−2 to 1) [(3 − x²) − (x + 1)] dx = ∫ (−2 to 1) (2 − x − x²) dx**
4. **Antiderivative.** 2x − x²/2 − x³/3.
5. **Evaluate.** At x = 1: 2 − 1/2 − 1/3 = 7/6. At x = −2: −4 − 2 + 8/3 = −10/3. Subtract: 7/6 − (−10/3) = 7/6 + 20/6 = 27/6.

**Answer.** The area is **9/2 square units** (4.5).

**Check.** Part of the region is below the x-axis (for example at x = −1.5 the line is at −0.5), yet no splitting was needed, because each strip's height is still (3 − x²) − (x + 1). If you had written (x + 1) − (3 − x²), you would get −9/2: the minus sign tells you the order was reversed.

## Worked example 2: intersections from a calculator

**Question.** Let R be the region enclosed by y = 3 − x² and y = eˣ. Find the area of R. (Calculator allowed.)

1. **Intersections.** 3 − x² = eˣ cannot be solved with algebra. Graph both curves and use the intersect feature, or solve 3 − x² − eˣ = 0. The solutions are x = A ≈ −1.677 and x = B ≈ 0.834. Store them in the calculator as A and B.
2. **Top curve.** Test x = 0: 3 − 0 = 3 and e⁰ = 1. So y = 3 − x² is on top between A and B.
3. **Integral.** Write it before you press any keys:
   **Area = ∫ (A to B) [(3 − x²) − eˣ] dx**
4. **Evaluate** with the stored limits: **Area ≈ 3.652 square units.**

**Notation on paper.** A complete response shows the intersection values, the integral with its limits, brackets and dx, and then the decimal: "∫ (−1.677 to 0.834) [3 − x² − eˣ] dx = 3.652". Use the stored values in the calculation even though you write the rounded ones. Rounding the limits first can change the third decimal place in other problems.

**Sense check.** The region is about 2.512 units wide, and its tallest strip is about 2.173 units high (near x = −0.352). A region shaped roughly like a parabolic arch has area close to two-thirds of width × height: (2/3) × 2.512 × 2.173 ≈ 3.638. That is close to 3.652, so the calculator answer is believable. If you had typed the integrand in the wrong order, or used the wrong limits, this rough estimate would expose it.

## Worked example 3: when the boundary changes

**Question.** Find the area of the region bounded by y = √x, y = 2 − x and the x-axis.

1. **Sketch.** y = √x rises from (0, 0). The line y = 2 − x falls to the x-axis at (2, 0). They meet where √x = 2 − x. Squaring gives x = 4 − 4x + x², so x² − 5x + 4 = 0 and x = 1 or x = 4. Only x = 1 works in √x = 2 − x (at x = 4, √4 = 2 but 2 − 4 = −2). The meeting point is (1, 1).
2. **Look at the top boundary.** The bottom is always the x-axis, y = 0. The top is y = √x from x = 0 to x = 1, but y = 2 − x from x = 1 to x = 2. The top changes formula at x = 1.
3. **Split the integral there.**
   **Area = ∫ (0 to 1) [√x − 0] dx + ∫ (1 to 2) [(2 − x) − 0] dx**
4. **Evaluate.** ∫ (0 to 1) √x dx = [(2/3)x^(3/2)] from 0 to 1 = 2/3. ∫ (1 to 2) (2 − x) dx = [2x − x²/2] from 1 to 2 = 2 − 3/2 = 1/2 (a triangle of base 1 and height 1, as a check).

**Answer.** Area = 2/3 + 1/2 = **7/6 square units**.

A single integral ∫ (0 to 2) [√x − (2 − x)] dx is wrong here: it treats the line as the bottom boundary all the way across, which it is not. In Topic 8.5 you will see that horizontal strips (integrating with respect to y) handle this region in one integral.

## Common misconceptions

- **Bottom minus top.** This gives a negative number. Always test a point to find the top curve.
- **Using y-values as limits.** With dx, the limits are x-values: the x-coordinates of the intersection points, not the y-coordinates.
- **Splitting at the x-axis.** Not needed for the area between two curves. Split only where the curves cross each other or where a boundary changes formula.
- **Integrating just one curve.** ∫ f(x) dx alone gives the area under f down to the x-axis, which includes space that is not in the region.
- **Adding the two functions.** The strip height is a difference, f − g, not a sum.
- **Missing brackets.** ∫ (3 − x²) − (x + 1) dx without outer brackets suggests that only (x + 1) is integrated. Write [f(x) − g(x)] dx.
- **"Area = integral" for a curve below the axis.** ∫ (a to b) f(x) dx is negative there. The area is ∫ (a to b) [0 − f(x)] dx.
- **Rounding the intersection points too early** on a calculator question.

## Where this leads

Topic 8.3 integrated a rate in minus a rate out; here you integrate a top curve minus a bottom curve, the same structure in geometric form. Topic 8.5 turns the strips horizontal, for regions better described by functions of y, and Topic 8.6 handles curves that cross more than twice, where the top and bottom swap. Continue with [Finding the Area Between Curves Expressed as Functions of y](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/), or return to [Topic 8.3](/advanced-course-resources/calculus-ab/8-3-accumulation-functions-definite-integrals-applied-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-checklist/) to consolidate.
