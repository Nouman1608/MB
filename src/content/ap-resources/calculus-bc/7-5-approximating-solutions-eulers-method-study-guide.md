---
resourceId: "mb-ap-calcbc-7.5-study-guide"
title: "Approximating Solutions Using Euler’s Method: Study Guide (Calculus BC 7.5)"
description: "Build Euler’s method from tangent lines, run it in a clear table, see how step size changes accuracy, and use concavity to decide whether an estimate is too high or too low."
course: "calculus-bc"
unit: 7
topics: ["7.5"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Tangent lines and local linear approximation (Topic 4.6)"
  - "Writing and reading differential equations (Topic 7.1)"
  - "Verifying a solution by differentiating (Topic 7.2)"
  - "Slope fields and particular solutions (Topics 7.3 and 7.4)"
  - "Second derivatives and concavity (Unit 5)"
prerequisiteResources: ["mb-ap-calcab-7.4-study-guide"]
learningObjectives:
  - "Explain Euler’s method as a chain of short tangent-line steps that follow a slope field"
  - "Carry out Euler’s method by hand for a given step size and number of steps, recording each step in a table"
  - "Use a negative step to approximate a value to the left of the starting point"
  - "Describe how a smaller step size usually changes the size of the error"
  - "Use the sign of the second derivative to decide whether an Euler estimate is an overestimate or an underestimate"
  - "Interpret an Euler estimate in context, with units"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked example 1 and the backward step are no-calculator. Worked example 2 allows a calculator for square roots; keep full calculator values between steps and round only the final answer to 3 decimal places."
related: ["mb-ap-calcbc-7.5-revision-notes", "mb-ap-calcbc-7.5-practice", "mb-ap-calcbc-7.5-checklist"]
next: "mb-ap-calcbc-7.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: Euler’s method is not part of Calculus AB."
  - "Euler’s method approximates a solution by taking short tangent-line steps: new y = old y + (step size) × (slope at the old point)."
  - "Always use the slope at the point you are stepping from, then update both x and y before the next step."
  - "A smaller step size usually gives a better estimate, but Euler’s method is still an approximation."
  - "If the solutions are concave up where the steps run, Euler underestimates; if concave down, it overestimates."
faqs:
  - question: "Do Calculus AB students need Euler’s method?"
    answer: "No. Topic 7.5 is BC-only. AB students can skip this page; BC students may be asked to carry out the method and to judge the estimate."
  - question: "Do I have to memorise a formula?"
    answer: "It helps to know yₙ₊₁ = yₙ + h · f(xₙ, yₙ), but it is better to understand each step as a tangent-line approximation. Then you can rebuild the formula whenever you need it."
  - question: "How should I round?"
    answer: "Keep exact values or full calculator values from step to step. Round only the final answer, usually to 3 decimal places when a calculator is allowed."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Euler’s method is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need these earlier ideas. If one is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Tangent line approximation | 4.6 | Every Euler step is one tangent line |
| Differential equations | 7.1 | The equation gives the slope at any point |
| Verifying solutions | 7.2 | Checking an exact solution used for comparison |
| Slope fields and particular solutions | 7.3, 7.4 | Euler’s method follows the field from a starting point |
| Concavity from the second derivative | Unit 5 | Deciding if an estimate is too high or too low |

## A note on notation

The differential equation is written **dy/dx = f(x, y)**: a rule that gives the slope at any point (x, y). The **step size** is h (some books write Δx). The starting point is (x₀, y₀), the next point is (x₁, y₁), and so on. The point (xₙ, yₙ) is the estimate after n steps. In context the letters change (for example dA/dt), but the method is the same.

## The idea: follow tangent lines in short steps

Suppose y = f(x) is the particular solution through (x₀, y₀). You cannot always find a formula for it. But the differential equation tells you its **slope** at (x₀, y₀). From Topic 4.6, the tangent line there gives a local linear approximation:

**y(x₀ + h) ≈ y₀ + h · (slope at (x₀, y₀))**

This works well for small h and badly for large h, because the curve bends away from its tangent line.

Euler’s method fixes this by taking **several short steps** instead of one long one. After each step you are at a new point. The differential equation gives you a new slope there, so you draw a new short tangent segment and carry on. You are walking through the slope field, re-reading the direction at every stop.

## The procedure

For dy/dx = f(x, y), starting at (x₀, y₀), with step size h:

> **xₙ₊₁ = xₙ + h**
> **yₙ₊₁ = yₙ + h · f(xₙ, yₙ)**

In words: *new y = old y + step size × slope at the old point.*

To keep your work clear, use a table with one row per step:

| Step | (xₙ, yₙ) | Slope f(xₙ, yₙ) | Change h · slope | New point |
|---|---|---|---|---|

The number of steps is (target x − starting x) ÷ h. To get from x = 0 to x = 1 with h = 0.5 you need 2 steps; with h = 0.25 you need 4.

## Worked example 1: two steps, and a comparison with one

**Question (no calculator).** Let y = f(x) be the particular solution of **dy/dx = x² − y** with f(0) = 1.

(a) Use the tangent line at x = 0 to approximate f(1).
(b) Use Euler’s method with two steps of equal size to approximate f(1).

**(a)** At (0, 1) the slope is 0² − 1 = −1. The tangent line is y = 1 − x, so **f(1) ≈ 0**. This is the same as one Euler step with h = 1.

**(b)** Two equal steps from 0 to 1 means h = 0.5.

| Step | (xₙ, yₙ) | Slope xₙ² − yₙ | Change 0.5 × slope | New point |
|---|---|---|---|---|
| 1 | (0, 1) | 0 − 1 = −1 | −0.5 | (0.5, 0.5) |
| 2 | (0.5, 0.5) | 0.25 − 0.5 = −0.25 | −0.125 | (1, 0.375) |

So **f(1) ≈ 0.375**.

**Check against the exact solution.** In Topics 7.6 and later you learn to solve some equations exactly. For this one, the solution is y = x² − 2x + 2 − e^(−x). You can confirm it with Topic 7.2: y′ = 2x − 2 + e^(−x), and x² − y = x² − x² + 2x − 2 + e^(−x) = 2x − 2 + e^(−x). ✓ Also y(0) = 2 − 1 = 1. ✓ So f(1) = 1 − e⁻¹ ≈ 0.632.

Both estimates are too low, but two steps did much better than one. Figure 1 shows why.

<figure>
<svg viewBox="0 0 560 360" role="img" aria-labelledby="euler-title euler-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="euler-title">Exact solution of dy/dx = x² − y through (0, 1) compared with one tangent-line step and two Euler steps</title>
<desc id="euler-desc">Graph for x from 0 to 1 and y from 0 to 1.2. A thick solid curve is the exact solution: it starts at (0, 1), dips to a minimum of about 0.59 near x = 0.77, and ends at about 0.632 at x = 1. A thin dotted straight line is the single tangent line from (0, 1) with slope −1, ending at (1, 0). A dashed broken line with square markers is Euler's method with step 0.5: it follows the tangent line from (0, 1) to (0.5, 0.5), then turns to a gentler slope and ends at (1, 0.375). Both approximations lie below the curve.</desc>
<rect x="0" y="0" width="560" height="360" fill="#ffffff"/>
<line x1="80" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="310" x2="80" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="180" y1="296" x2="180" y2="304"/><line x1="280" y1="296" x2="280" y2="304"/><line x1="380" y1="296" x2="380" y2="304"/><line x1="480" y1="296" x2="480" y2="304"/>
<line x1="76" y1="256.7" x2="84" y2="256.7"/><line x1="76" y1="213.3" x2="84" y2="213.3"/><line x1="76" y1="170" x2="84" y2="170"/><line x1="76" y1="126.7" x2="84" y2="126.7"/><line x1="76" y1="83.3" x2="84" y2="83.3"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="318">0</text><text x="180" y="318">0.25</text><text x="280" y="318">0.5</text><text x="380" y="318">0.75</text><text x="480" y="318">1</text>
<text x="290" y="342" font-size="13">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="260.7">0.2</text><text x="70" y="217.3">0.4</text><text x="70" y="174">0.6</text><text x="70" y="130.7">0.8</text><text x="70" y="87.3">1</text>
</g>
<text x="28" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 28 170)">y</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="3" points="80.0,83.3 90.0,88.7 100.0,93.9 110.0,99.0 120.0,103.9 130.0,108.7 140.0,113.3 150.0,117.7 160.0,122.1 170.0,126.2 180.0,130.2 190.0,134.0 200.0,137.7 210.0,141.2 220.0,144.5 230.0,147.6 240.0,150.6 250.0,153.3 260.0,155.9 270.0,158.4 280.0,160.6 290.0,162.6 300.0,164.5 310.0,166.1 320.0,167.6 330.0,168.8 340.0,169.9 350.0,170.8 360.0,171.4 370.0,171.9 380.0,172.1 390.0,172.2 400.0,172.0 410.0,171.6 420.0,171.1 430.0,170.3 440.0,169.3 450.0,168.0 460.0,166.6 470.0,164.9 480.0,163.0"/>
<line x1="80" y1="83.3" x2="480" y2="300" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5" points="80,83.3 280,191.7 480,218.8"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<rect x="75" y="78.3" width="10" height="10"/><rect x="275" y="186.7" width="10" height="10"/><rect x="475" y="213.8" width="10" height="10"/>
</g>
<circle cx="480" cy="163" r="5" fill="#1d2b44"/>
<circle cx="480" cy="300" r="4" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="92" y="76">start (0, 1)</text>
<text x="292" y="206">(0.5, 0.5)</text>
<text x="400" y="240">Euler: (1, 0.375)</text>
<text x="388" y="152">exact: f(1) ≈ 0.632</text>
<text x="370" y="292">one step: (1, 0)</text>
</g>
<g font-size="12" fill="#1d2b44">
<rect x="300" y="38" width="236" height="66" fill="#ffffff" stroke="#1d2b44" stroke-width="1"/>
<line x1="310" y1="54" x2="350" y2="54" stroke="#1d2b44" stroke-width="3"/><text x="358" y="58">exact solution</text>
<line x1="310" y1="72" x2="350" y2="72" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/><rect x="325" y="67" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/><text x="358" y="76">Euler, h = 0.5 (2 steps)</text>
<line x1="310" y1="90" x2="350" y2="90" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/><text x="358" y="94">tangent line (1 step)</text>
</g>
</svg>
<figcaption>Figure 1. The single tangent line (dotted) keeps the starting slope −1 all the way to x = 1 and lands at 0. Euler’s method (dashed, square markers) stops at x = 0.5, reads a new, gentler slope −0.25, and lands at 0.375. The exact solution (solid) is concave up here, so both straight-line approximations fall below it.</figcaption>
</figure>

**Interpretation.** The first Euler step is exactly the tangent line. The second step corrects the direction using the slope at (0.5, 0.5). The estimate is still low, because the true curve bends upward away from each straight step.

## How step size affects accuracy

Repeat Worked example 1 with smaller steps (the longer runs were done with a calculator or a short program):

| Step size h | Steps | Estimate of f(1) | Error (exact − estimate) |
|---|---|---|---|
| 1 | 1 | 0 | 0.632 |
| 0.5 | 2 | 0.375 | 0.257 |
| 0.25 | 4 | 0.513 | 0.119 |
| 0.1 | 10 | 0.586 | 0.046 |

The exact value is 1 − e⁻¹ ≈ 0.632.

- **Smaller steps usually give better estimates**, because each tangent segment is shorter and has less room to drift from the curve.
- The error does **not** reach zero. Euler’s method is always an approximation.
- *Background, not examined:* for well-behaved equations the error is roughly proportional to h. In the table, halving h from 0.5 to 0.25 roughly halves the error. You will not be asked to prove this.

## Overestimate or underestimate? Use concavity

A tangent line lies **below** a curve that is concave up and **above** a curve that is concave down. Each Euler step is a tangent segment, so:

- If **d²y/dx² > 0** (concave up) in the region the steps pass through, Euler’s method gives an **underestimate**.
- If **d²y/dx² < 0** (concave down) there, it gives an **overestimate**.

Find d²y/dx² by differentiating the differential equation implicitly (Topic 7.4), remembering that y is a function of x.

For Worked example 1: d²y/dx² = d/dx (x² − y) = 2x − dy/dx = 2x − (x² − y) = **2x − x² + y**. For 0 ≤ x ≤ 1, 2x − x² ≥ 0, and y > 0 along the steps, so d²y/dx² > 0. At the two points used, the values are 1 and 1.25. The solutions are concave up, so **0.375 is an underestimate**. This matches the exact value 0.632.

**Careful.** Whether y is increasing or decreasing tells you nothing here. Only concavity decides. And if the concavity changes sign along the path, you cannot conclude either way without more information.

## Worked example 2: Euler’s method in context

**Question (calculator allowed).** The area A, in square metres, of an algae mat on a pond (fictional data) grows according to **dA/dt = 0.4√A**, where t is in days. At t = 0 the area is 25 m².

(a) Find the rate of growth at t = 0, with units.
(b) Use Euler’s method with step size 2 days to approximate A(4).
(c) Is your answer an overestimate or an underestimate? Justify.

**(a)** dA/dt at A = 25 is 0.4 × √25 = **2 m² per day**.

**(b)** From t = 0 to t = 4 with h = 2 needs 2 steps.

| Step | (tₙ, Aₙ) | Slope 0.4√Aₙ (m²/day) | Change 2 × slope (m²) | New point |
|---|---|---|---|---|
| 1 | (0, 25) | 2 | 4 | (2, 29) |
| 2 | (2, 29) | 0.4√29 ≈ 2.154066 | ≈ 4.308132 | (4, 33.308132) |

**A(4) ≈ 33.308 m².** (Keep the unrounded slope in step 2; round only at the end.)

**(c)** Differentiate dA/dt = 0.4√A with respect to t, using the chain rule:

d²A/dt² = 0.4 · (1 / (2√A)) · dA/dt = (0.2/√A) · 0.4√A = **0.08**.

This is positive for every A > 0, so every solution is concave up. Each Euler step lies below the curve, so **33.308 m² is an underestimate**.

**Checks.**
- *Units:* (m² per day) × days = m². ✓
- *Exact comparison:* the solution here is A = (5 + 0.2t)². Check: dA/dt = 2(5 + 0.2t)(0.2) = 0.4(5 + 0.2t) = 0.4√A, and A(0) = 25. ✓ So A(4) = 5.8² = 33.64 m², which is above 33.308, as predicted.
- *Smaller steps:* with h = 1 (4 steps) the estimate is about 33.471 m², closer to 33.64.

**Interpretation.** After 4 days the algae mat covers about 33.3 m²; the true area is a little larger because growth speeds up as the mat grows.

## Stepping backwards

To approximate a value to the **left** of the starting point, use a **negative** step. The formula does not change.

For dy/dx = x² − y with f(0) = 1, approximate f(−0.5) with one step, h = −0.5:

f(−0.5) ≈ 1 + (−0.5)(−1) = **1.5**.

The exact value is 3.25 − e^0.5 ≈ 1.601. Here the estimate is below the curve again: at (0, 1), d²y/dx² = 1 > 0, so the tangent line lies below the curve on both sides.

## Common misconceptions

- **Using the slope at the new point.** Each step uses the slope at the point you are leaving, (xₙ, yₙ).
- **Forgetting to multiply by h.** The change in y is h × slope, not the slope itself.
- **Updating x but not y** (or the reverse) before finding the next slope. Both coordinates change every step.
- **Reporting the change instead of the new value.** yₙ₊₁ = yₙ + change; add the change on.
- **Rounding at each step.** Small rounding errors grow across steps. Keep full values and round once at the end.
- **"Increasing means underestimate."** Over or under depends on concavity (the sign of d²y/dx²), not on whether y is increasing.
- **"With small enough steps, Euler is exact."** The error shrinks but does not vanish.
- **Using the wrong number of steps.** Number of steps = (distance in x) ÷ h. Two steps of 0.5 reach x = 1; two steps of 0.25 reach only x = 0.5.

## Where this leads

Euler’s method gives numbers when you cannot, or do not yet, find a formula. Next, Topic 7.6 shows how to find exact solutions by separating the variables, and Topic 7.7 uses an initial condition to pick the particular solution, so you can compare your Euler estimates with exact values. The same "follow the slope" idea appears again in the BC logistic model (Topic 7.9).

Next topic: [Finding General Solutions Using Separation of Variables](/advanced-course-resources/calculus-ab/7-6-finding-general-solutions-separation-variables-study-guide/). Previous topic: [Reasoning Using Slope Fields](/advanced-course-resources/calculus-ab/7-4-reasoning-slope-fields-study-guide/). Return to the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-checklist/) to consolidate.
