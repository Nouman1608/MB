---
resourceId: "mb-ap-calcab-8.6-study-guide"
title: "Finding the Area Between Curves That Intersect at More Than Two Points: Study Guide (Calculus AB 8.6)"
description: "Learn how to find the area between curves that cross several times: locate every intersection, split the integral where the top curve changes, or integrate the absolute difference."
course: "calculus-ab"
unit: 8
topics: ["8.6"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area between curves with vertical strips (Topic 8.4) and horizontal strips (Topic 8.5)"
  - "Evaluating definite integrals with antiderivatives and with a calculator"
  - "Solving cubic equations by factoring; finding intersections on a graphing calculator"
  - "Properties of definite integrals, including splitting at an interior point (Topic 6.6)"
prerequisiteResources: ["mb-ap-calcab-8.5-study-guide"]
learningObjectives:
  - "Find every intersection of two curves on an interval and decide which curve is on top between each pair"
  - "Write the area as a sum of definite integrals, one for each piece of the region"
  - "Write the area as one integral of the absolute value of the difference, and evaluate it with a calculator"
  - "Explain why the integral of f − g over the whole interval is a net (signed) value, not the area"
  - "Read the information needed for an area from graphs, given integral values or tables"
skills: ["2"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 3 use no calculator. Worked example 2 is calculator-active: use radians, store unrounded intersection values and give the area to three decimal places."
related: ["mb-ap-calcab-8.6-revision-notes", "mb-ap-calcab-8.6-practice", "mb-ap-calcab-8.6-checklist"]
next: "mb-ap-calcab-8.6-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "When curves cross inside the interval, the top curve changes. Split the integral at every crossing and use top − bottom on each piece."
  - "Equivalently, Area = ∫ (a to b) |f(x) − g(x)| dx. On a calculator this one integral does all the splitting for you."
  - "∫ (a to b) [f(x) − g(x)] dx without the absolute value is a net value: pieces where g is on top count as negative and cancel."
  - "Find every intersection first. Missing one gives the wrong area."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.6 is common content, so the same page serves AB and BC students."
  - question: "Should I split the integral or use the absolute value?"
    answer: "Without a calculator, split: you cannot antidifferentiate |f − g| directly. With a calculator, ∫ |f(x) − g(x)| dx is quicker, but you still need the intersection values if they are the limits of the region."
  - question: "Is |∫ (f − g) dx| the same as ∫ |f − g| dx?"
    answer: "No. The first takes the absolute value after the pieces have cancelled. The second makes every piece positive before adding. Only the second gives the area."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) |f(x) − g(x)| dx** means the definite integral of the absolute value of f(x) − g(x) from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. The vertical bars must sit **inside** the integral, around the difference.

## When the top curve changes

In Topics 8.4 and 8.5 one curve stayed on top (or on the right) across the whole region. Now the curves cross in the middle, so the region falls into separate pieces, and in some pieces the "top" curve is f while in others it is g.

The strip idea still works. A vertical strip at x always has height equal to the **distance** between the curves. Where f is on top, that distance is f(x) − g(x). Where g is on top, it is g(x) − f(x). Both cases are captured by one expression: **|f(x) − g(x)|**.

> **Area when curves cross.** If f and g are continuous on [a, b], the area of the region between their graphs for a ≤ x ≤ b is ∫ (a to b) |f(x) − g(x)| dx. Without a calculator, split [a, b] at every point where the curves cross and add ∫ [top − bottom] dx over each piece.

The same holds for horizontal strips: the area is ∫ (c to d) |R(y) − L(y)| dy, split wherever the right and left curves swap.

<figure>
<svg viewBox="0 0 480 320" role="img" aria-labelledby="cross-title cross-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="cross-title">The curves y = x³ − x² and y = 2x crossing three times, enclosing two pieces</title>
<desc id="cross-desc">A cubic curve y = x³ − x² and a straight line y = 2x cross at (−1, −2), (0, 0) and (2, 4). Between x = −1 and x = 0 the cubic is above the line, and this thin piece is shaded with diagonal hatching and labelled A₁. Between x = 0 and x = 2 the line is above the cubic, and this larger piece is shaded solid and labelled A₂.</desc>
<defs>
<pattern id="hatch86" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<rect width="6" height="6" fill="#ffffff"/><line x1="0" y1="0" x2="0" y2="6" stroke="#1d2b44" stroke-width="1.5"/>
</pattern>
</defs>
<rect x="0" y="0" width="480" height="320" fill="#ffffff"/>
<polygon points="100.0,250.0 110.0,238.5 120.0,228.8 130.0,220.8 140.0,214.4 150.0,209.4 160.0,205.6 170.0,202.9 180.0,201.2 190.0,200.3 200.0,200.0 100.0,250.0" fill="url(#hatch86)"/>
<polygon points="200.0,200.0 210.0,200.2 220.0,200.8 230.0,201.6 240.0,202.4 250.0,203.1 260.0,203.6 270.0,203.7 280.0,203.2 290.0,202.0 300.0,200.0 310.0,197.0 320.0,192.8 330.0,187.3 340.0,180.4 350.0,171.9 360.0,161.6 370.0,149.4 380.0,135.2 390.0,118.8 400.0,100.0 200.0,200.0" fill="#dfe7f3"/>
<line x1="20" y1="200" x2="465" y2="200" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="200" y1="310" x2="200" y2="15" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="70.0,297.2 80.0,279.2 90.0,263.5 100.0,250.0 110.0,238.5 120.0,228.8 130.0,220.8 140.0,214.4 150.0,209.4 160.0,205.6 170.0,202.9 180.0,201.2 190.0,200.3 200.0,200.0 210.0,200.2 220.0,200.8 230.0,201.6 240.0,202.4 250.0,203.1 260.0,203.6 270.0,203.7 280.0,203.2 290.0,202.0 300.0,200.0 310.0,197.0 320.0,192.8 330.0,187.3 340.0,180.4 350.0,171.9 360.0,161.6 370.0,149.4 380.0,135.2 390.0,118.8 400.0,100.0 410.0,78.7 420.0,54.8 430.0,28.1" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="70" y1="265" x2="430" y2="85" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="100" y1="196" x2="100" y2="204"/><line x1="300" y1="196" x2="300" y2="204"/><line x1="400" y1="196" x2="400" y2="204"/>
<line x1="196" y1="150" x2="204" y2="150"/><line x1="196" y1="100" x2="204" y2="100"/><line x1="196" y1="50" x2="204" y2="50"/><line x1="196" y1="250" x2="204" y2="250"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="100" y="190">−1</text><text x="300" y="218">1</text><text x="400" y="218">2</text><text x="468" y="194">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="192" y="154">2</text><text x="192" y="104">4</text><text x="192" y="54">6</text><text x="192" y="254">−2</text><text x="192" y="20">y</text>
</g>
<circle cx="100" cy="250" r="4" fill="#1d2b44"/><circle cx="200" cy="200" r="4" fill="#1d2b44"/><circle cx="400" cy="100" r="4" fill="#1d2b44"/>
<text x="40" y="244" font-size="12" fill="#1d2b44">(−1, −2)</text>
<text x="408" y="112" font-size="12" fill="#1d2b44">(2, 4)</text>
<text x="300" y="182" font-size="14" fill="#1d2b44">A₂</text>
<text x="110" y="290" font-size="14" fill="#1d2b44">A₁</text>
<line x1="122" y1="280" x2="140" y2="222" stroke="#1d2b44" stroke-width="1"/>
<text x="222" y="40" font-size="13" fill="#1d2b44">y = x³ − x² (solid)</text>
<text x="300" y="250" font-size="13" fill="#1d2b44">y = 2x (dashed)</text>
<text x="230" y="290" font-size="12" fill="#1d2b44">A₁ (hatched): cubic on top</text>
<text x="230" y="306" font-size="12" fill="#1d2b44">A₂ (solid fill): line on top</text>
</svg>
<figcaption>Figure 1. y = x³ − x² (solid) and y = 2x (dashed) cross at x = −1, 0 and 2. On the hatched piece A₁ (−1 ≤ x ≤ 0) the cubic is on top; on the solid-shaded piece A₂ (0 ≤ x ≤ 2) the line is on top. The total area is A₁ + A₂.</figcaption>
</figure>

## The method, step by step

1. **Find every intersection** in the interval. Solve f(x) = g(x), or use a calculator. Include the ends if the region is closed off by the curves themselves.
2. **Make a sign chart for f − g.** Pick one test value in each subinterval between neighbouring intersections. Positive means f is on top there; negative means g is.
3. **Write one integral per piece**, each as ∫ [top − bottom] dx with that piece's limits.
4. **Evaluate and add.** Every piece should be positive.
5. **With a calculator**, you may instead enter ∫ (a to b) |f(x) − g(x)| dx in one go.

## Net value or area?

The integral without the absolute value, ∫ (a to b) [f(x) − g(x)] dx, adds positive pieces (where f is on top) and negative pieces (where g is on top). The pieces cancel, at least partly. This is the same idea you met in Topic 8.2: integrating velocity gives displacement (net), while integrating speed gives distance (total).

- **∫ (a to b) [f(x) − g(x)] dx** gives a **net value**: (area where f is on top) − (area where g is on top). Use it for accumulated-difference questions, like displacement.
- **∫ (a to b) |f(x) − g(x)| dx** gives the **total area** between the curves. Use it for area questions.
- **The absolute value of ∫ (a to b) [f(x) − g(x)] dx** is only the size of the net value. It equals the area only if the curves do not cross between a and b.

## Worked example 1: three crossings, no calculator

**Question.** Find the total area of the regions enclosed by y = x³ − x² and y = 2x (Figure 1).

1. **Intersections.** x³ − x² = 2x gives x³ − x² − 2x = 0, so x(x² − x − 2) = 0 and x(x − 2)(x + 1) = 0. The curves cross at **x = −1, 0 and 2**. The points are (−1, −2), (0, 0) and (2, 4).
2. **Sign chart for f − g = x³ − x² − 2x.**
   - On (−1, 0), test x = −0.5: (−0.5)³ − (−0.5)² − 2(−0.5) = 5/8 > 0. The cubic is on top.
   - On (0, 2), test x = 1: 1 − 1 − 2 = −2 < 0. The line is on top.
3. **One integral per piece.**
   **Area = ∫ (−1 to 0) [(x³ − x²) − 2x] dx + ∫ (0 to 2) [2x − (x³ − x²)] dx**
4. **Evaluate.** An antiderivative of x³ − x² − 2x is F(x) = x⁴/4 − x³/3 − x². F(−1) = 1/4 + 1/3 − 1 = −5/12, F(0) = 0 and F(2) = 4 − 8/3 − 4 = −8/3.
   - A₁ = F(0) − F(−1) = **5/12**.
   - A₂ = −[F(2) − F(0)] = **8/3**.
5. **Add.** 5/12 + 8/3 = 5/12 + 32/12 = 37/12.

**Answer.** The total area is **37/12 square units** (about 3.083).

**What the single integral gives.** ∫ (−1 to 2) [(x³ − x²) − 2x] dx = F(2) − F(−1) = −8/3 + 5/12 = **−9/4**. That is 5/12 − 8/3: the small piece minus the large piece. It is not an area. Even its size, 9/4, is wrong.

## Worked example 2: absolute value on a calculator

**Question.** Find the total area of the regions enclosed by y = x³ − 3x + 1 and y = cos x. (Calculator allowed; radians.)

1. **Intersections.** Graph both, or find the zeros of x³ − 3x + 1 − cos x. There are three: **x = A ≈ −1.923, x = 0 and x = B ≈ 1.540**. The middle one is exact, since 0 − 0 + 1 = 1 = cos 0. Store A and B. Check the window carefully: a crossing near the origin is easy to miss when the graphs are close together.
2. **Who is on top.** At x = −1: (−1)³ + 3 + 1 = 3 and cos(−1) ≈ 0.540, so the cubic is on top on (A, 0). At x = 1: 1 − 3 + 1 = −1 and cos 1 ≈ 0.540, so cos x is on top on (0, B).
3. **One integral with absolute value:**
   **Area = ∫ (A to B) |x³ − 3x + 1 − cos x| dx ≈ 4.723 square units.**
4. **Check by pieces.** ∫ (A to 0) [(x³ − 3x + 1) − cos x] dx ≈ 3.113 and ∫ (0 to B) [cos x − (x³ − 3x + 1)] dx ≈ 1.611. The sum is 4.723. Both pieces are positive, as they should be.

**The trap.** ∫ (A to B) [x³ − 3x + 1 − cos x] dx without the bars gives about 1.502, which is 3.113 − 1.611. Never report this as an area.

**Notation on paper.** Show the intersection values and the full integral with the absolute value bars, limits and dx, then the decimal: "∫ (−1.923 to 1.540) |x³ − 3x + 1 − cos x| dx = 4.723".

## Worked example 3: reading information from a representation (no calculator)

Sometimes you are not given formulas. You are given a graph or the values of some integrals, and you must decide what they tell you.

**Question.** f and g are continuous on [0, 7]. Their graphs cross only at x = 2 and x = 5, and

- ∫ (0 to 2) [f(x) − g(x)] dx = 6
- ∫ (2 to 5) [f(x) − g(x)] dx = −10
- ∫ (5 to 7) [f(x) − g(x)] dx = 3

(a) On which interval is g above f? (b) Find the total area between the graphs for 0 ≤ x ≤ 7. (c) Find ∫ (0 to 7) [f(x) − g(x)] dx. (d) Find ∫ (0 to 5) |f(x) − g(x)| dx.

1. **(a)** Between crossings, f − g keeps one sign. The integral over (2, 5) is negative, so f − g < 0 there: **g is above f on (2, 5)**. On (0, 2) and (5, 7), f is above g.
2. **(b)** Each piece contributes its size: 6 + 10 + 3 = **19**.
3. **(c)** The net value keeps the signs: 6 + (−10) + 3 = **−1**.
4. **(d)** Only the first two pieces: 6 + 10 = **16**.

**Why the sign tells you who is on top.** If f − g kept one sign on (2, 5) and that sign were positive, the integral would be positive. It is −10, so the sign must be negative. This reasoning relies on the curves not crossing inside (2, 5), which the question states.

## Common misconceptions

- **Integrating f − g over the whole interval.** The pieces cancel. You get a net value, not the area.
- **Putting the absolute value outside.** |∫ (f − g) dx| is not ∫ |f − g| dx. In Worked example 1 the first gives 9/4, the second 37/12.
- **Missing an intersection.** In Worked example 2 the crossing at x = 0 is easy to overlook. Every missed crossing merges two pieces with opposite signs.
- **Testing only one point** for the whole interval. You need one test value per piece.
- **Splitting at the x-axis.** For the area between two curves, split only where the curves cross each other, not where one crosses the axis.
- **Assuming equal pieces.** The pieces of a region are rarely the same size, even when the crossing points look evenly spaced.
- **Rounding intersection values** before using them as limits on a calculator.

## Where this leads

This topic completes the area work of Unit 8: vertical strips (Topic 8.4), horizontal strips (Topic 8.5) and now regions in several pieces. The same "split where the boundary changes" habit returns in Topics 8.7 to 8.12, where volumes with cross-sections and solids of revolution are built from slices. Continue with [Volumes with Cross Sections: Squares and Rectangles](/advanced-course-resources/calculus-ab/8-7-volumes-cross-sections-squares-rectangles-study-guide/), or return to [Topic 8.5](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-checklist/) to consolidate.
