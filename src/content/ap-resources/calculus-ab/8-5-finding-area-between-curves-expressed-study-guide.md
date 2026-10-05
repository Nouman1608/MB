---
resourceId: "mb-ap-calcab-8.5-study-guide"
title: "Finding the Area Between Curves Expressed as Functions of y: Study Guide (Calculus AB 8.5)"
description: "Learn when to slice a region into horizontal strips, why the area becomes the integral of right minus left with respect to y, and how to set up and evaluate it."
course: "calculus-ab"
unit: 8
topics: ["8.5"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area between curves with vertical strips, ∫ (a to b) [top − bottom] dx (Topic 8.4)"
  - "Evaluating definite integrals with antiderivatives and with a calculator (Topics 6.7 to 6.9)"
  - "Rearranging y = f(x) to give x in terms of y (inverse functions)"
  - "Solving quadratic equations; finding intersections on a graphing calculator"
prerequisiteResources: ["mb-ap-calcab-8.4-study-guide"]
learningObjectives:
  - "Build the area of a region from thin horizontal strips and explain why it becomes ∫ (c to d) [right − left] dy"
  - "Rewrite curves given as y = f(x) in the form x = g(y) when horizontal strips are simpler"
  - "Find y-limits from intersection points and decide which curve is on the right"
  - "Choose between vertical and horizontal strips, and evaluate the area exactly or with a calculator"
skills: ["1"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 and 2 use no calculator. Worked example 3 is calculator-active: use radians, store unrounded intersection values and give the area to three decimal places."
related: ["mb-ap-calcab-8.5-revision-notes", "mb-ap-calcab-8.5-practice", "mb-ap-calcab-8.5-checklist"]
next: "mb-ap-calcab-8.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "With horizontal strips, the area is ∫ (c to d) [right − left] dy, where x = R(y) is the right boundary and x = L(y) the left boundary."
  - "The limits are y-values: the bottom and top edges of the region, usually found by solving R(y) = L(y)."
  - "Use horizontal strips when the curves are given as x in terms of y, or when vertical strips would need two or more integrals."
  - "Both methods give the same area. Pick the one with the simpler integral."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.5 is common content, so the same page serves AB and BC students."
  - question: "How do I know whether to use dx or dy?"
    answer: "Sketch the region. If every vertical line crosses it from one curve to one other curve, dx is fine. If every horizontal line crosses it from one curve to one other curve, dy is fine. If only one of these is true, use that one."
  - question: "Is right minus left the same as top minus bottom turned sideways?"
    answer: "Yes. Each horizontal strip has length (larger x) − (smaller x), so the right curve comes first. A negative answer means you subtracted in the wrong order."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (c to d) [R(y) − L(y)] dy** means the definite integral of R(y) − L(y) from y = c to y = d. On paper, write c at the bottom of the integral sign and d at the top. The **dy** is not decoration: it tells the reader that the limits are y-values and that the integrand must be written in terms of y.

## Turning the strips sideways

In Topic 8.4 you cut a region into thin **vertical** strips. Each strip had height top − bottom and width Δx, and adding them gave ∫ (a to b) [top − bottom] dx.

Some regions are easier to cut the other way. Picture thin **horizontal** strips stacked from the bottom of the region to the top. Pick a height yᵢ in each strip. The strip is almost a rectangle lying on its side:

- its **length** runs from the left boundary to the right boundary, so it is R(yᵢ) − L(yᵢ);
- its **thickness** is Δy;
- its **area** is about [R(yᵢ) − L(yᵢ)] Δy.

Adding the strips gives the Riemann sum Σ [R(yᵢ) − L(yᵢ)] Δy. As the strips get thinner, the sum becomes a definite integral in y:

> **Area between curves (horizontal strips).** If x = R(y) and x = L(y) are continuous and R(y) ≥ L(y) for c ≤ y ≤ d, the area of the region between them is ∫ (c to d) [R(y) − L(y)] dy.

A short way to remember it: **∫ (bottom to top) [right − left] dy**.

Two things change compared with Topic 8.4. The boundaries must be written as **x in terms of y**, and the limits are **y-values**: the lowest and highest points of the region.

<figure>
<svg viewBox="0 0 500 330" role="img" aria-labelledby="hstrip-title hstrip-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="hstrip-title">Region between x = 5 − y² and x = y − 1, with one horizontal strip</title>
<desc id="hstrip-desc">A parabola opening to the left, x = 5 − y², with its vertex at (5, 0), and a straight line x = y − 1. They meet at (−4, −3) and (1, 2). The region between them, from y = −3 to y = 2, is shaded. The line is the left boundary and the parabola is the right boundary. A thin horizontal rectangle at y = 0.5 runs from the line across to the parabola; its length is labelled right minus left and its thickness Δy.</desc>
<rect x="0" y="0" width="500" height="330" fill="#ffffff"/>
<polygon points="60.0,270.0 106.4,262.0 149.6,254.0 189.6,246.0 226.4,238.0 260.0,230.0 290.4,222.0 317.6,214.0 341.6,206.0 362.4,198.0 380.0,190.0 394.4,182.0 405.6,174.0 413.6,166.0 418.4,158.0 420.0,150.0 418.4,142.0 413.6,134.0 405.6,126.0 394.4,118.0 380.0,110.0 362.4,102.0 341.6,94.0 317.6,86.0 290.4,78.0 260.0,70.0 60.0,270.0" fill="#dfe7f3"/>
<rect x="200" y="126" width="210" height="8" fill="#ffffff" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="10" y1="150" x2="485" y2="150" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="220" y1="320" x2="220" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<polyline points="10.4,278.0 60.0,270.0 106.4,262.0 149.6,254.0 189.6,246.0 226.4,238.0 260.0,230.0 290.4,222.0 317.6,214.0 341.6,206.0 362.4,198.0 380.0,190.0 394.4,182.0 405.6,174.0 413.6,166.0 418.4,158.0 420.0,150.0 418.4,142.0 413.6,134.0 405.6,126.0 394.4,118.0 380.0,110.0 362.4,102.0 341.6,94.0 317.6,86.0 290.4,78.0 260.0,70.0 226.4,62.0 189.6,54.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="40" y1="290" x2="284" y2="46" stroke="#1d2b44" stroke-width="2.5" stroke-dasharray="9 5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="146" x2="60" y2="154"/><line x1="260" y1="146" x2="260" y2="154"/><line x1="420" y1="146" x2="420" y2="154"/>
<line x1="216" y1="70" x2="224" y2="70"/><line x1="216" y1="270" x2="224" y2="270"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="166">−4</text><text x="262" y="166">1</text><text x="432" y="166">5</text><text x="480" y="144">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="212" y="74">2</text><text x="212" y="274">−3</text><text x="212" y="26">y</text>
</g>
<circle cx="60" cy="270" r="4" fill="#1d2b44"/><circle cx="260" cy="70" r="4" fill="#1d2b44"/>
<text x="66" y="292" font-size="12" fill="#1d2b44">(−4, −3)</text>
<text x="268" y="62" font-size="12" fill="#1d2b44">(1, 2)</text>
<text x="330" y="40" font-size="13" fill="#1d2b44">right: x = 5 − y² (solid)</text>
<text x="20" y="210" font-size="13" fill="#1d2b44">left: x = y − 1</text>
<text x="20" y="226" font-size="13" fill="#1d2b44">(dashed)</text>
<text x="250" y="118" font-size="12" fill="#1d2b44">length = right − left</text>
<text x="426" y="134" font-size="12" fill="#1d2b44">Δy</text>
</svg>
<figcaption>Figure 1. The region between x = y − 1 (dashed, on the left) and x = 5 − y² (solid, on the right) for −3 ≤ y ≤ 2. The white strip at y = 0.5 is one Riemann-sum rectangle: length R(y) − L(y) = 4.75 − (−0.5) = 5.25 and thickness Δy. Every horizontal line through the region meets the line first and the parabola second.</figcaption>
</figure>

## The method, step by step

1. **Sketch** both curves and shade the region.
2. **Write each boundary as x = (expression in y).** If a curve is given as y = f(x), solve for x.
3. **Find the bottom and top edges.** Solve R(y) = L(y) for the y-coordinates of the meeting points, or use given horizontal lines.
4. **Decide which curve is on the right.** Pick a test y-value strictly between the limits and compare the two x-values there. The larger x is the right curve.
5. **Write the integral** in full: ∫ (c to d) [right − left] dy.
6. **Evaluate** with antiderivatives or a calculator, then check the answer is positive and fits the sketch.

## Choosing dx or dy

Both methods measure the same region, so they always give the same area. The question is which one is less work. Look at the boundaries.

| Look at the region | Better choice |
|---|---|
| Every vertical line through the region meets the same two curves | dx: ∫ [top − bottom] dx |
| Every horizontal line through the region meets the same two curves | dy: ∫ [right − left] dy |
| A curve is given as x = g(y), such as a parabola opening sideways | Usually dy |
| One method needs a square root with ± or a split, the other does not | The one without the split |

Figure 1 shows why. With vertical strips, the bottom of the region is the lower half of the parabola, y = −√(5 − x), for every x from −4 to 5. But the top changes: it is the line y = x + 1 from x = −4 to x = 1, then the upper half of the parabola, y = √(5 − x), from x = 1 to x = 5. That needs two integrals full of square roots. With horizontal strips, every strip runs from the line to the parabola, so **one** polynomial integral is enough.

You have already met a region like this. In Topic 8.4, Worked example 3 (bounded by y = √x, y = 2 − x and the x-axis) needed two dx integrals. Written as x = y² and x = 2 − y for 0 ≤ y ≤ 1, it needs only one dy integral, and it gives the same 7/6.

## Worked example 1: a sideways parabola and a line (no calculator)

**Question.** Find the area of the region enclosed by x = 5 − y² and x = y − 1 (Figure 1).

1. **Both curves are already x in terms of y.** Horizontal strips are the natural choice.
2. **Intersections.** 5 − y² = y − 1 gives y² + y − 6 = 0, so (y + 3)(y − 2) = 0 and y = −3 or y = 2. The points are (−4, −3) and (1, 2). The limits are the **y-values**, −3 and 2.
3. **Right curve.** Test y = 0: x = 5 − 0 = 5 on the parabola and x = 0 − 1 = −1 on the line. The parabola is on the right.
4. **Integral.**
   **Area = ∫ (−3 to 2) [(5 − y²) − (y − 1)] dy = ∫ (−3 to 2) (6 − y − y²) dy**
5. **Antiderivative.** 6y − y²/2 − y³/3.
6. **Evaluate.** At y = 2: 12 − 2 − 8/3 = 22/3. At y = −3: −18 − 9/2 + 9 = −27/2. Subtract: 22/3 − (−27/2) = 44/6 + 81/6 = 125/6.

**Answer.** The area is **125/6 square units** (about 20.833).

**Check with vertical strips.** ∫ (−4 to 1) [(x + 1) + √(5 − x)] dx + ∫ (1 to 5) 2√(5 − x) dx = 61/6 + 32/3 = 125/6. Same answer, but harder work: both pieces contain √(5 − x), which needs a substitution, while the dy integral was a polynomial.

## Worked example 2: rewriting y = f(x) as x = g(y) (no calculator)

**Question.** R is the region bounded by y = ln x, the y-axis, the x-axis and the line y = 2. Find the area of R.

1. **Sketch.** y = ln x passes through (1, 0) and reaches y = 2 at x = e². The region lies to the left of this curve and to the right of the y-axis, between heights 0 and 2.
2. **Rewrite the curve.** y = ln x gives x = eʸ. The y-axis is x = 0.
3. **Limits.** The region runs from y = 0 (the x-axis) to y = 2 (the given line).
4. **Right and left.** For 0 < y < 2, eʸ > 0, so x = eʸ is on the right and x = 0 is on the left.
5. **Integral.**
   **Area = ∫ (0 to 2) [eʸ − 0] dy = [eʸ] from 0 to 2 = e² − 1**

**Answer.** The area is **e² − 1 square units** (about 6.389).

**Why not dx?** A vertical line at x = 0.5 meets the region from y = 0 all the way up to y = 2, because ln 0.5 is below the x-axis. A vertical line at x = 3 meets it only from y = ln 3 to y = 2. The bottom boundary changes at x = 1, so you need ∫ (0 to 1) 2 dx + ∫ (1 to e²) (2 − ln x) dx. That also equals e² − 1, but finding an antiderivative of ln x needs integration by parts, a Calculus BC-only topic. Horizontal strips avoid the problem completely.

## Worked example 3: intersections from a calculator

**Question.** R is the region enclosed by x = 2 cos y and x = y² − 1. Find the area of R. (Calculator allowed; radians.)

1. **Intersections.** 2 cos y = y² − 1 cannot be solved with algebra. Graph y₁ = 2 cos x − (x² − 1) on the calculator (the calculator's variable is called x, but it stands for y here) and find its zeros. They are y = −B and y = B, with **B ≈ 1.265**. Store B. Both curves are symmetric about the x-axis, which is why the two answers are opposites.
2. **Right curve.** Test y = 0: 2 cos 0 = 2 and 0² − 1 = −1. So x = 2 cos y is on the right.
3. **Integral.** Write it before pressing any keys:
   **Area = ∫ (−B to B) [2 cos y − (y² − 1)] dy**
4. **Evaluate** with the stored limits: **Area ≈ 4.995 square units.**

**Notation on paper.** Write the integral with limits, brackets and dy, then the value: "∫ (−1.265 to 1.265) [2 cos y − y² + 1] dy = 4.995". Use the stored B in the calculation.

**Sense check.** The region is about 2.531 units tall, and its widest strip (at y = 0) is 3 units long. A shape like this has an area near two-thirds of height × width: (2/3) × 2.531 × 3 ≈ 5.062. That is close to 4.995, so the calculator answer is believable.

## Common misconceptions

- **Left minus right.** This gives a negative number. Use a test y-value to find which curve has the larger x.
- **Using x-values as limits in a dy integral.** In Worked example 1 the limits are −3 and 2 (the y-coordinates), not −4 and 1.
- **Leaving the integrand in terms of x.** ∫ (0 to 2) ln x dy makes no sense. Rewrite y = ln x as x = eʸ first.
- **Forgetting the y-axis is a curve.** It is x = 0, and it can be the left (or right) boundary, as in Worked example 2.
- **Thinking dx and dy give different areas.** They describe the same region. If your two answers differ, one set-up is wrong.
- **Always choosing dx out of habit.** If vertical strips need a split or a ± square root, try horizontal strips.
- **Mixing up "top" and "right".** For a dy integral the question is never which curve is higher. It is which curve is further right at the same height.
- **Rounding intersection values** before evaluating on a calculator question.

## Where this leads

Topic 8.4 used vertical strips; this topic adds horizontal ones, so you can now choose the simpler set-up for any region. Topic 8.6 handles curves that cross more than twice, where the top and bottom (or right and left) curves swap places. Horizontal slicing comes back in Topics 8.7 to 8.12, when cross-sections and solids of revolution about vertical lines are written as integrals in y. Continue with [Finding the Area Between Curves That Intersect at More Than Two Points](/advanced-course-resources/calculus-ab/8-6-finding-area-between-curves-that-study-guide/), or return to [Topic 8.4](/advanced-course-resources/calculus-ab/8-4-finding-area-between-curves-expressed-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-5-finding-area-between-curves-expressed-checklist/) to consolidate.
