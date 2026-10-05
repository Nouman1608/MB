---
resourceId: "mb-ap-calcbc-9.1-study-guide"
title: "Defining and Differentiating Parametric Equations: Study Guide (Calculus BC 9.1)"
description: "What a parametric curve is, how to find dy/dx from dx/dt and dy/dt, and how to use it for tangent lines, horizontal and vertical tangents, and a path in context."
course: "calculus-bc"
unit: 9
topics: ["9.1"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Derivatives of powers, sin x, cos x, eˣ and ln x (Topics 2.5–2.7)"
  - "The chain rule (Topic 3.1)"
  - "Writing the equation of a tangent line from a point and a slope (Topics 2.1 and 4.6)"
prerequisiteResources: ["mb-ap-calcbc-8.13-study-guide"]
learningObjectives:
  - "Describe a curve given by x = f(t) and y = g(t), including the points it passes through and its direction of travel"
  - "Find dy/dx for a parametric curve by dividing dy/dt by dx/dt, and explain why this works using the chain rule"
  - "Find the slope and the equation of a tangent line at a given value of t or at a given point on the curve"
  - "Locate horizontal and vertical tangents, and recognise when dx/dt and dy/dt are both zero and the formula gives no answer"
  - "Interpret dy/dx for a path in context, separately from the direction of motion"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives are found by hand: this is a no-calculator skill. Where a calculator is allowed, you may use it to evaluate a slope at a decimal value of t or to solve dx/dt = 0 or dy/dt = 0 numerically. Angles are in radians."
related: ["mb-ap-calcbc-9.1-revision-notes", "mb-ap-calcbc-9.1-practice", "mb-ap-calcbc-9.1-checklist"]
next: "mb-ap-calcbc-9.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A parametric curve gives both coordinates as functions of a third variable: x = f(t), y = g(t)."
  - "dy/dx = (dy/dt) ÷ (dx/dt), provided dx/dt ≠ 0. The result is the slope of the tangent line to the curve."
  - "Horizontal tangent: dy/dt = 0 and dx/dt ≠ 0. Vertical tangent: dx/dt = 0 and dy/dt ≠ 0."
  - "dy/dx is usually a function of t, so find the value of t first when you are given a point (x, y)."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Parametric equations are BC-only content. AB students can skip this page."
  - question: "Is dy/dx the same as the velocity?"
    answer: "No. dy/dx is the slope of the path. Velocity needs both dx/dt and dy/dt, and is covered in Topics 9.4 to 9.6."
  - question: "What if dx/dt and dy/dt are both 0?"
    answer: "Then dy/dx = (dy/dt)/(dx/dt) is the undefined form 0/0, so the formula alone tells you nothing about the tangent there. You need more work, such as simplifying first or looking at the graph."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Parametric equations are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need three earlier ideas. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Basic derivatives (powers, trig, eˣ, ln x) | 2.5–2.7 | Finding dx/dt and dy/dt |
| Chain rule | 3.1 | Explains why dy/dx = (dy/dt) ÷ (dx/dt), and is needed inside many dx/dt and dy/dt |
| Tangent line from a point and a slope | 2.1, 4.6 | Writing y − y₀ = m(x − x₀) |

Notation on this page: x′(t) means dx/dt and y′(t) means dy/dt. Angles are in radians.

## What a parametric curve is

So far, most curves you have met were written as y = f(x): one output y for each input x. A **parametric curve** describes x and y separately, each as a function of a third variable, the **parameter**, usually t:

> **x = f(t), y = g(t)**

Each value of t gives one point (f(t), g(t)). As t increases, the point moves and traces the curve. It often helps to think of t as time and the curve as the path of a moving object.

Three things change compared with y = f(x):

- **The curve has a direction.** As t increases, the point travels one way along the curve. This is called the **orientation**. Graphs usually show it with arrows.
- **The curve can turn back or cross itself.** It does not have to pass the vertical line test. The same point (x, y) can be reached at two different values of t.
- **Different equations can trace the same path.** x = cos t, y = sin t and x = cos 2t, y = sin 2t both give the unit circle; the second goes round twice as fast.

**A table of values** is the simplest way to see a curve. Take x = t² + 1, y = t³ − 4t:

| t | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| x = t² + 1 | 5 | 2 | 1 | 2 | 5 |
| y = t³ − 4t | 0 | 3 | 0 | −3 | 0 |

The point (5, 0) appears twice, at t = −2 and at t = 2. So this curve crosses itself there. Figure 1 shows the whole picture.

**Background: eliminating the parameter.** Sometimes you can solve one equation for t and substitute into the other. For x = 2t + 1, y = t²: t = (x − 1)/2, so y = (x − 1)²/4, a parabola. This is useful for checking work, but it is often messy or impossible, and you never need it to find dy/dx.

## Deriving dy/dx with the chain rule

Suppose that, near some point, the curve can be written as y as a function of x, and x and y both depend on t. The chain rule says

**dy/dt = (dy/dx) · (dx/dt)**

If dx/dt ≠ 0, divide both sides by dx/dt:

> **dy/dx = (dy/dt) ÷ (dx/dt), provided dx/dt ≠ 0**

The value of dy/dx at a point is the **slope of the line tangent to the curve** at that point. Leibniz notation makes the formula easy to remember: the dt's "cancel". But it is the chain rule that makes it true, so you must still check that dx/dt is not zero.

**Quick check with the parabola above.** x = 2t + 1, y = t² gives dx/dt = 2 and dy/dt = 2t, so dy/dx = 2t/2 = t. From y = (x − 1)²/4, dy/dx = (x − 1)/2, and (x − 1)/2 = t. ✓ Both methods agree.

Notice that the answer dy/dx = t is written in terms of **t**, not x. This is normal for parametric curves. To find a slope, you substitute a value of t.

## Horizontal and vertical tangents

The fraction (dy/dt) ÷ (dx/dt) tells you where the tangent line is flat or upright.

| Condition | Tangent line | Reason |
|---|---|---|
| dy/dt = 0 and dx/dt ≠ 0 | Horizontal | Slope = 0 ÷ (non-zero) = 0 |
| dx/dt = 0 and dy/dt ≠ 0 | Vertical | Slope = (non-zero) ÷ 0 is undefined; the point moves straight up or down for an instant |
| dx/dt = 0 and dy/dt = 0 | No conclusion yet | 0 ÷ 0: the formula gives no answer |

**Always check the other derivative.** Solving dy/dt = 0 finds only *candidates* for horizontal tangents. Each one must also have dx/dt ≠ 0.

**Why the both-zero case needs care.** Take x = t³, y = t⁶. At t = 0, dx/dt = 3t² = 0 and dy/dt = 6t⁵ = 0. But y = (t³)² = x², a parabola with a perfectly ordinary horizontal tangent at the origin. In other curves, both derivatives being zero gives a sharp point (a cusp). So when both are zero, simplify dy/dx first or look at the graph; do not just say "horizontal" or "vertical".

<figure>
<svg viewBox="0 0 540 360" role="img" aria-labelledby="p91-title p91-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p91-title">The parametric curve x = t² + 1, y = t³ − 4t, with its tangent lines</title>
<desc id="p91-desc">Graph on x and y axes, x from 0 to 7 and y from −5 to 5. The curve starts at the lower right near (6.8, −4.2) when t = −2.4, moves up and to the left through (5, 0) at t = −2 and (2, 3) at t = −1, reaches its highest point near (2.33, 3.08), then turns down to the leftmost point (1, 0) at t = 0, where the tangent line is vertical. It continues down through (2, −3) at t = 1, reaches its lowest point near (2.33, −3.08), and moves up and to the right through (5, 0) again at t = 2, ending near (6.8, 4.2). Arrows on the curve show this direction. At (5, 0) the curve crosses itself: a dashed tangent line with slope 2 belongs to t = 2, and a dotted tangent line with slope −2 belongs to t = −2. Short dashed horizontal lines mark the horizontal tangents at the highest and lowest points.</desc>
<defs><marker id="arr91" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="540" height="360" fill="#ffffff"/>
<line x1="70" y1="180" x2="520" y2="180" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="340" x2="70" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="131.4" y1="176" x2="131.4" y2="184"/><line x1="192.9" y1="176" x2="192.9" y2="184"/><line x1="254.3" y1="176" x2="254.3" y2="184"/><line x1="315.7" y1="176" x2="315.7" y2="184"/><line x1="377.1" y1="176" x2="377.1" y2="184"/><line x1="438.6" y1="176" x2="438.6" y2="184"/><line x1="500" y1="176" x2="500" y2="184"/>
<line x1="66" y1="60" x2="74" y2="60"/><line x1="66" y1="120" x2="74" y2="120"/><line x1="66" y1="240" x2="74" y2="240"/><line x1="66" y1="300" x2="74" y2="300"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="254.3" y="197">3</text><text x="315.7" y="197">4</text><text x="438.6" y="197">6</text><text x="500" y="197">7</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="64">4</text><text x="62" y="124">2</text><text x="62" y="184">0</text><text x="62" y="244">−2</text><text x="62" y="304">−4</text>
</g>
<text x="528" y="184" font-size="14" fill="#1d2b44">x</text>
<text x="76" y="24" font-size="14" fill="#1d2b44">y</text>
<line x1="315.7" y1="240" x2="438.6" y2="120" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<line x1="315.7" y1="120" x2="438.6" y2="240" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 3"/>
<line x1="131.4" y1="135" x2="131.4" y2="225" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<line x1="173" y1="87.6" x2="253" y2="87.6" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<line x1="173" y1="272.4" x2="253" y2="272.4" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="485.3,306.7 456.4,269.0 428.7,235.4 402.3,205.8 377.1,180.0 353.2,157.8 330.5,139.0 309.0,123.4 288.7,110.9 269.6,101.2 251.8,94.3 235.2,89.9 219.9,87.8 205.8,87.9 192.9,90.0 181.2,93.9 170.7,99.4 161.5,106.3 153.5,114.5 146.8,123.8 141.3,133.9 137.0,144.8 133.9,156.2 132.0,168.0 131.4,180.0 132.0,192.0 133.9,203.8 137.0,215.2 141.3,226.1 146.8,236.2 153.5,245.5 161.5,253.7 170.7,260.6 181.2,266.1 192.9,270.0 205.8,272.1 219.9,272.2 235.2,270.1 251.8,265.7 269.6,258.8 288.7,249.1 309.0,236.6 330.5,221.0 353.2,202.2 377.1,180.0 402.3,154.2 428.7,124.6 456.4,91.0 485.3,53.3"/>
<line x1="309.0" y1="123.4" x2="288.7" y2="110.9" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr91)"/>
<line x1="137.0" y1="144.8" x2="133.9" y2="156.2" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr91)"/>
<line x1="288.7" y1="249.1" x2="309.0" y2="236.6" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr91)"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="377.1" cy="180" r="4.5"/><circle cx="192.9" cy="90" r="4.5"/><circle cx="131.4" cy="180" r="4.5"/><circle cx="192.9" cy="270" r="4.5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="446" y="174">(5, 0), t = ±2</text>
<text x="446" y="132">slope 2</text>
<text x="446" y="146">(t = 2)</text>
<text x="446" y="218">slope −2</text>
<text x="446" y="232">(t = −2)</text>
<text x="160" y="80" text-anchor="end">t = −1</text>
<text x="160" y="290" text-anchor="end">t = 1</text>
<text x="124" y="198" text-anchor="end">t = 0</text>
<text x="142" y="172">vertical tangent</text>
<text x="262" y="84">horizontal tangent</text>
<text x="262" y="288">horizontal tangent</text>
</g>
</svg>
<figcaption>Figure 1. The curve x = t² + 1, y = t³ − 4t for −2.4 ≤ t ≤ 2.4. Arrows show the direction of increasing t. The curve crosses itself at (5, 0), so it has two tangent lines there: slope 2 (dashed) when t = 2 and slope −2 (dotted) when t = −2.</figcaption>
</figure>

## Worked example 1: tangent lines on a self-crossing curve

**Question.** For the curve x = t² + 1, y = t³ − 4t (Figure 1), without a calculator:
(a) find dy/dx in terms of t;
(b) find the equation of the tangent line at t = 1;
(c) find the slope of the curve at the point (5, 0);
(d) find the points where the tangent line is horizontal or vertical.

**(a) Differentiate each coordinate, then divide.**

1. dx/dt = 2t and dy/dt = 3t² − 4.
2. **dy/dx = (3t² − 4) / (2t)**, for t ≠ 0.

**(b) Tangent line at t = 1.**

1. Point: x = 1 + 1 = 2 and y = 1 − 4 = −3, so the point is (2, −3).
2. Slope: dy/dx = (3 − 4)/2 = **−½**.
3. Line: y − (−3) = −½(x − 2), which simplifies to **y = −½x − 2**.

**(c) Slope at (5, 0).** You are given a point, not a value of t, so find t first.

1. x = 5 gives t² + 1 = 5, so t = 2 or t = −2.
2. y = 0 at both: 2³ − 8 = 0 and (−2)³ + 8 = 0. So the curve passes through (5, 0) **twice**.
3. At t = 2: dy/dx = (12 − 4)/4 = **2**. At t = −2: dy/dx = 8/(−4) = **−2**.

The curve has two tangent lines at (5, 0): y = 2x − 10 and y = −2x + 10. A question that asks for "the slope at (5, 0)" here must also say which value of t it means.

**(d) Horizontal and vertical tangents.**

1. *Horizontal:* dy/dt = 3t² − 4 = 0 gives t = ±2/√3 (about ±1.155). At these values dx/dt = 2t ≠ 0. ✓ The points are (7/3, 16√3/9) and (7/3, −16√3/9), about (2.33, 3.08) and (2.33, −3.08).
2. *Vertical:* dx/dt = 2t = 0 gives t = 0. There dy/dt = −4 ≠ 0. ✓ The point is **(1, 0)**.

**Checks.** Figure 1 shows a highest and a lowest point near x = 2.33, and the curve is upright at its leftmost point (1, 0). The signs also match: at t = 1 the point moves right (dx/dt = 2 > 0) and down (dy/dt = −1 < 0), so the slope should be negative. ✓

## Worked example 2: the path of a drone, in context

**Context.** A survey drone flies in a vertical plane. Its horizontal distance east of a mast is **x(t) = 9t − t³/3** metres, and its height above the ground is **y(t) = 20 + 8t − 2t²** metres, where t is the time in seconds, for 0 ≤ t ≤ 4.

(a) Find dy/dx in terms of t.
(b) When is the path horizontal, and when is it vertical? Interpret each.
(c) Find the slope of the path at t = 4. The slope is positive. Is the drone climbing?

<figure>
<svg viewBox="0 0 540 300" role="img" aria-labelledby="p91d-title p91d-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="p91d-title">Path of the drone x = 9t − t³/3, y = 20 + 8t − 2t² for 0 ≤ t ≤ 4</title>
<desc id="p91d-desc">Graph of height in metres against horizontal distance in metres. The path starts at (0, 20) when t = 0, rises to the right through (8.67, 26) at t = 1, reaches its highest point (15.33, 28) at t = 2 where the tangent is horizontal, reaches its furthest point east (18, 26) at t = 3 where the tangent is vertical, then moves back to the left and down to (14.67, 20) at t = 4. Arrows show the direction of travel. Short dashed lines mark the horizontal tangent at t = 2 and the vertical tangent at t = 3. A short dashed line at t = 4 shows the tangent slope of 8/7, which rises to the right even though the drone is moving left and down.</desc>
<defs><marker id="arr91d" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="540" height="300" fill="#ffffff"/>
<line x1="70" y1="240" x2="525" y2="240" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="240" x2="70" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="180" y1="236" x2="180" y2="244"/><line x1="290" y1="236" x2="290" y2="244"/><line x1="400" y1="236" x2="400" y2="244"/><line x1="510" y1="236" x2="510" y2="244"/>
<line x1="66" y1="200" x2="74" y2="200"/><line x1="66" y1="120" x2="74" y2="120"/><line x1="66" y1="40" x2="74" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="258">0</text><text x="180" y="258">5</text><text x="290" y="258">10</text><text x="400" y="258">15</text><text x="510" y="258">20</text>
<text x="290" y="286" font-size="13">horizontal distance x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="204">20</text><text x="62" y="124">24</text><text x="62" y="44">28</text><text x="62" y="244">18</text>
</g>
<text x="20" y="135" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 135)">height y (m)</text>
<line x1="380" y1="40" x2="435" y2="40" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<line x1="466" y1="58" x2="466" y2="102" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<line x1="370.7" y1="222.9" x2="414.7" y2="177.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,200.0 89.8,184.4 109.5,169.6 129.2,155.6 148.7,142.4 168.1,130.0 187.2,118.4 206.1,107.6 224.6,97.6 242.9,88.4 260.7,80.0 278.0,72.4 294.9,65.6 311.3,59.6 327.1,54.4 342.2,50.0 356.8,46.4 370.6,43.6 383.6,41.6 395.9,40.4 407.3,40.0 417.9,40.4 427.5,41.6 436.2,43.6 443.8,46.4 450.4,50.0 455.9,54.4 460.3,59.6 463.4,65.6 465.3,72.4 466.0,80.0 465.3,88.4 463.3,97.6 459.9,107.6 455.0,118.4 448.6,130.0 440.7,142.4 431.1,155.6 420.0,169.6 407.2,184.4 392.7,200.0"/>
<line x1="148.7" y1="142.4" x2="168.1" y2="130.0" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr91d)"/>
<line x1="448.6" y1="130.0" x2="440.7" y2="142.4" stroke="#1d2b44" stroke-width="2.5" marker-end="url(#arr91d)"/>
<g fill="#ffffff" stroke="#1d2b44" stroke-width="2">
<circle cx="70" cy="200" r="4.5"/><circle cx="260.7" cy="80" r="4.5"/><circle cx="407.3" cy="40" r="4.5"/><circle cx="466" cy="80" r="4.5"/><circle cx="392.7" cy="200" r="4.5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="80" y="218">t = 0</text>
<text x="254" y="68" text-anchor="end">t = 1</text>
<text x="407" y="28" text-anchor="middle">t = 2 (highest)</text>
<text x="455" y="84" text-anchor="end">t = 3 (furthest east)</text>
<text x="366" y="228" text-anchor="end">t = 4, slope 8/7</text>
</g>
</svg>
<figcaption>Figure 2. The drone's path. The tangent is horizontal at t = 2 and vertical at t = 3. At t = 4 the tangent line (dashed) rises to the right with slope 8/7, but the arrows show the drone is moving left and down.</figcaption>
</figure>

**(a)** dx/dt = 9 − t² and dy/dt = 8 − 4t, so **dy/dx = (8 − 4t)/(9 − t²)**, for t ≠ 3.

**(b) Horizontal and vertical.**

1. dy/dt = 8 − 4t = 0 at t = 2. There dx/dt = 9 − 4 = 5 ≠ 0, so the path is **horizontal at t = 2**, at the point (46/3, 28), about (15.33, 28). The drone has stopped rising and starts to descend: this is its highest point, 28 m.
2. dx/dt = 9 − t² = 0 at t = 3 (t = −3 is outside the interval). There dy/dt = 8 − 12 = −4 ≠ 0, so the path is **vertical at t = 3**, at (18, 26). The drone has stopped moving east and starts to move back west: this is its furthest point from the mast, 18 m.

**(c) Slope at t = 4.**

1. dx/dt = 9 − 16 = −7 and dy/dt = 8 − 16 = −8.
2. dy/dx = (−8)/(−7) = **8/7 ≈ 1.14**.
3. **Interpretation.** The path is rising to the right at the drone's position (14.67, 20). But the drone is *not* climbing: dy/dt = −8 < 0, so its height is falling at 8 m/s, and dx/dt = −7 < 0, so it is moving west. It is travelling down and to the left along a line that slopes up to the right.

**Units.** dy/dx is metres of height per metre of horizontal distance, so it has no units. It describes the shape of the path, not how fast the drone moves.

**Checks.** At t = 1 the slope is 4/8 = ½, positive, and the drone really is moving up and right (dx/dt = 8, dy/dt = 4), which matches Figure 2. ✓ dx/dt and dy/dt are never both zero on 0 ≤ t ≤ 4 (one is zero only at t = 3, the other only at t = 2). ✓

## Common misconceptions

- **"dy/dx = (dx/dt) ÷ (dy/dt)."** The formula is upside down. Think "dy over dx": the y-derivative goes on top.
- **Substituting x into a formula in t.** If dy/dx = (3t² − 4)/(2t), the slope "at x = 5" is not found by putting t = 5. Find the value (or values) of t that give the point first.
- **Assuming one point means one value of t.** A parametric curve can pass through the same point twice with different slopes, as at (5, 0) in Worked example 1.
- **Stopping at dy/dt = 0.** That gives candidates only. A horizontal tangent also needs dx/dt ≠ 0; if both are 0, the formula gives no answer.
- **Mixing up horizontal and vertical.** dx/dt = 0 means no sideways movement at that instant, so the tangent is **vertical**, not horizontal.
- **Reading dy/dx as "going up".** A positive slope only says the path rises to the right. The object can still be moving down and to the left, as at t = 4 in Worked example 2.
- **Treating dy/dx as a speed.** Speed and velocity need both dx/dt and dy/dt; they come later in Unit 9.

## Where this leads

Topic 9.2 differentiates again to find d²y/dx², which tells you the concavity of a parametric curve. Topic 9.3 uses dx/dt and dy/dt to find the length of a parametric curve, building on the arc length work in [Topic 8.13](/advanced-course-resources/calculus-bc/8-13-arc-length-smooth-planar-curve-study-guide/). Topics 9.4 to 9.6 turn the parameter into time and study velocity, speed and motion in the plane. Next: [Second Derivatives of Parametric Equations (9.2)](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-1-defining-differentiating-parametric-equations-checklist/) to consolidate.
