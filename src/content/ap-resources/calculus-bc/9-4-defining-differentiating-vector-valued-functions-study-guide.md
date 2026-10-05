---
resourceId: "mb-ap-calcbc-9.4-study-guide"
title: "Defining and Differentiating Vector-Valued Functions: Study Guide (Calculus BC 9.4)"
description: "Learn what a vector-valued function is, why its derivative is found one component at a time, and how r′(t) gives tangent direction, slope and the second derivative r″(t)."
course: "calculus-bc"
unit: 9
topics: ["9.4"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Parametric equations and dy/dx = (dy/dt)/(dx/dt) (Topic 9.1)"
  - "Second derivatives of parametric equations (Topic 9.2)"
  - "Derivative rules: product, quotient and chain rules (Topics 2.8, 2.9, 3.1)"
  - "Basic vector ideas: components, the vectors i and j, drawing a vector as an arrow"
prerequisiteResources: ["mb-ap-calcbc-9.3-study-guide"]
learningObjectives:
  - "Describe a vector-valued function in plane and component form, and state its domain"
  - "Explain why the derivative of a vector-valued function is found component by component"
  - "Find first and second derivatives of vector-valued functions using the usual derivative rules"
  - "Use r′(t) to find the direction of motion, the slope of the tangent line, and horizontal or vertical tangents"
  - "Tell apart the vector r″(t) and the scalar d²y/dx²"
skills: ["1", "2"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Derivatives are found by hand; this is a no-calculator skill. A calculator may be used to give decimal values where allowed (3 decimal places, radian mode)."
related: ["mb-ap-calcbc-9.4-revision-notes", "mb-ap-calcbc-9.4-practice", "mb-ap-calcbc-9.4-checklist"]
next: "mb-ap-calcbc-9.4-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "A vector-valued function r(t) = ⟨x(t), y(t)⟩ takes a number t and returns a vector."
  - "Differentiate each component: r′(t) = ⟨x′(t), y′(t)⟩ and r″(t) = ⟨x″(t), y″(t)⟩."
  - "r′(t) points along the tangent to the curve, in the direction of increasing t; the tangent slope is y′(t)/x′(t)."
  - "r″(t) is a vector. It is not the same thing as d²y/dx²."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Vector-valued functions are BC-only content, like the rest of Unit 9."
  - question: "Is ⟨x(t), y(t)⟩ the same as x(t) i + y(t) j?"
    answer: "Yes. They are two notations for the same vector. Use whichever the question uses."
  - question: "Is a vector-valued function different from a pair of parametric equations?"
    answer: "It describes the same curve. The vector form packs the two equations into one object, so you can talk about the position vector and its derivative as single arrows."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Vector-valued functions are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

If any of these is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Parametric equations, dy/dx = (dy/dt)/(dx/dt) | 9.1 | The same curves, now in vector form |
| Parametric second derivative d²y/dx² | 9.2 | To compare with r″(t) |
| Product, quotient and chain rules | 2.8, 2.9, 3.1 | Differentiating each component |
| Vectors as arrows with components | Background | Reading ⟨a, b⟩ as "a across, b up" |

Notation on this page: **⟨a, b⟩** is the vector with horizontal component a and vertical component b. It is the same as **a i + b j**. Bold letters such as **r** are vectors.

## What is a vector-valued function?

An ordinary function takes a number and returns a number. A **vector-valued function** takes a number t and returns a **vector**:

**r(t) = ⟨x(t), y(t)⟩ = x(t) i + y(t) j**

The functions x(t) and y(t) are its **component functions**.

Picture r(t) as an arrow from the origin to the point (x(t), y(t)). This is the **position vector**. As t changes, the tip of the arrow moves and draws a curve. That curve is exactly the curve of the parametric equations x = x(t), y = y(t) from Topic 9.1. The vector form simply packs both equations into one object.

**Domain.** r(t) is defined only where **both** components are defined. For example, r(t) = ⟨√(5 − t), 1/t⟩ needs t ≤ 5 (for the root) and t ≠ 0 (for the fraction). Its domain is t ≤ 5 with t ≠ 0.

## The derivative: one component at a time

Use the same limit definition as for ordinary functions:

**r′(t) = lim as h → 0 of [r(t + h) − r(t)] / h**

Subtracting two vectors subtracts their components, and dividing a vector by the number h divides each component by h. So

[r(t + h) − r(t)] / h = ⟨ (x(t + h) − x(t))/h , (y(t + h) − y(t))/h ⟩.

As h → 0, each component becomes an ordinary derivative. That gives the key result:

> **r′(t) = ⟨x′(t), y′(t)⟩**

Other notations: dr/dt, or x′(t) i + y′(t) j. If r(t) is a position, r′(t) is called the **velocity vector**; Topic 9.6 develops this.

**All the usual rules carry over,** because each component is an ordinary function:

- Sum: (r + s)′ = r′ + s′
- Constant multiple: (c r)′ = c r′
- Scalar function times a vector function: (f r)′ = f′ r + f r′ (a product rule)
- Chain rule: d/dt [r(g(t))] = g′(t) r′(g(t))

**Second derivative.** Differentiate again, component by component:

> **r″(t) = ⟨x″(t), y″(t)⟩**

If r is a position, r″(t) is the **acceleration vector**.

## What r′(t) tells you about the curve

Draw r′(t₀) with its tail at the point r(t₀). Then:

- **Direction.** It lies along the tangent line and points the way the curve is traced as t increases. The signs of its components tell you the direction: x′ > 0 means moving right, x′ < 0 left; y′ > 0 means moving up, y′ < 0 down.
- **Slope.** If x′(t₀) ≠ 0, the tangent slope is **dy/dx = y′(t₀) / x′(t₀)**, the same rule as Topic 9.1.
- **Horizontal tangent** where y′(t₀) = 0 and x′(t₀) ≠ 0.
- **Vertical tangent** where x′(t₀) = 0 and y′(t₀) ≠ 0.
- If **both** components are 0, r′(t₀) = ⟨0, 0⟩ gives no direction. You need more work to decide what happens there.
- **Size.** The length of r′(t) is |r′(t)| = √(x′(t)² + y′(t)²). This is exactly the arc length integrand from [Topic 9.3](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/), so arc length is ∫ |r′(t)| dt.

## Worked example 1: derivatives, tangents and the domain

**Question.** Let r(t) = ⟨t³ − 3t, 4 ln(t + 1)⟩. No calculator.

(a) State the domain. (b) Find r′(t) and r″(t). (c) Find where the curve has a vertical or a horizontal tangent. (d) Find the tangent line at t = 2.

1. **Domain.** t³ − 3t is defined for all t. 4 ln(t + 1) needs t + 1 > 0. So the domain is **t > −1**.
2. **First derivative.** Differentiate each component:
   - d/dt [t³ − 3t] = 3t² − 3
   - d/dt [4 ln(t + 1)] = 4/(t + 1) (chain rule, inner derivative 1)
   - **r′(t) = ⟨3t² − 3, 4/(t + 1)⟩**
3. **Second derivative.**
   - d/dt [3t² − 3] = 6t
   - d/dt [4(t + 1)⁻¹] = −4(t + 1)⁻²
   - **r″(t) = ⟨6t, −4/(t + 1)²⟩**
4. **Vertical tangent.** x′(t) = 3t² − 3 = 0 gives t = 1 or t = −1. Only t = 1 is in the domain. There, y′(1) = 4/2 = 2 ≠ 0. So r′(1) = ⟨0, 2⟩: **vertical tangent at t = 1**, at the point r(1) = ⟨−2, 4 ln 2⟩ ≈ ⟨−2, 2.773⟩. The point is moving straight up.
5. **Horizontal tangent.** y′(t) = 4/(t + 1) is never 0, so there is **no horizontal tangent**.
6. **Tangent line at t = 2.** r(2) = ⟨8 − 6, 4 ln 3⟩ = ⟨2, 4 ln 3⟩ and r′(2) = ⟨12 − 3, 4/3⟩ = ⟨9, 4/3⟩.
   Slope = (4/3) ÷ 9 = **4/27**. Tangent line: **y − 4 ln 3 = (4/27)(x − 2)**.

**Checks.**
- *Sign sense:* at t = 2, r′(2) = ⟨9, 4/3⟩ has both components positive, so the curve is moving right and up. A small positive slope (4/27 ≈ 0.148) fits. ✓
- *Second derivative at t = 2:* r″(2) = ⟨12, −4/9⟩. You can check it by differentiating r′ term by term again. ✓

## Worked example 2: a model helicopter

**Context.** A fictional model helicopter flies in a vertical plane. Its position, in metres, is

**r(t) = ⟨10t − t², 6 + 4 sin(πt/6)⟩** for 0 ≤ t ≤ 10, where t is in seconds.

(a) Find r′(4) and describe the direction of motion at t = 4. (b) Find r″(4). (c) When is the helicopter moving straight up or down, and when is it moving horizontally?

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="vec94-title vec94-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="vec94-title">Path of the helicopter with the position vector r(4) and the derivative vector r′(4)</title>
<desc id="vec94-desc">The path starts at (0, 6) when t = 0, rises to the right to its highest point (21, 10) at t = 3, reaches its furthest right point (25, 8) at t = 5, then curves back to the left and down, passing its lowest point (9, 2) at t = 9 and ending at about (0, 2.54) at t = 10. A dashed arrow from the origin to the point (24, 9.46) is the position vector r(4). A thick solid arrow starting at that point and pointing right and down along the curve is the derivative vector r′(4) = ⟨2, −π/3⟩, drawn twice its true length for clarity.</desc>
<defs><marker id="ah94" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#1d2b44"/></marker></defs>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="70" y1="290" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="300" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="150" y1="286" x2="150" y2="294"/><line x1="230" y1="286" x2="230" y2="294"/><line x1="310" y1="286" x2="310" y2="294"/><line x1="390" y1="286" x2="390" y2="294"/><line x1="470" y1="286" x2="470" y2="294"/>
<line x1="66" y1="250" x2="74" y2="250"/><line x1="66" y1="210" x2="74" y2="210"/><line x1="66" y1="170" x2="74" y2="170"/><line x1="66" y1="130" x2="74" y2="130"/><line x1="66" y1="90" x2="74" y2="90"/><line x1="66" y1="50" x2="74" y2="50"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="150" y="308">5</text><text x="230" y="308">10</text><text x="310" y="308">15</text><text x="390" y="308">20</text><text x="470" y="308">25</text>
<text x="290" y="326" font-size="13">horizontal position x (m)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="254">2</text><text x="62" y="214">4</text><text x="62" y="174">6</text><text x="62" y="134">8</text><text x="62" y="94">10</text><text x="62" y="54">12</text>
</g>
<text x="20" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 170)">height y (m)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="70.0,170.0 101.4,161.6 131.4,153.4 160.2,145.3 187.8,137.5 214.0,130.0 239.0,123.0 262.6,116.5 285.0,110.5 306.2,105.3 326.0,100.7 344.6,96.9 361.8,93.9 377.8,91.7 392.6,90.4 406.0,90.0 418.2,90.4 429.0,91.7 438.6,93.9 447.0,96.9 454.0,100.7 459.8,105.3 464.2,110.5 467.4,116.5 469.4,123.0 470.0,130.0 469.4,137.5 467.4,145.3 464.2,153.4 459.8,161.6 454.0,170.0 447.0,178.4 438.6,186.6 429.0,194.7 418.2,202.5 406.0,210.0 392.6,217.0 377.8,223.5 361.8,229.5 344.6,234.7 326.0,239.3 306.2,243.1 285.0,246.1 262.6,248.3 239.0,249.6 214.0,250.0 187.8,249.6 160.2,248.3 131.4,246.1 101.4,243.1 70.0,239.3"/>
<line x1="70" y1="290" x2="451" y2="102" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5" marker-end="url(#ah94)"/>
<line x1="454" y1="100.7" x2="518" y2="142.6" stroke="#1d2b44" stroke-width="3.5" marker-end="url(#ah94)"/>
<g fill="#1d2b44"><circle cx="70" cy="170" r="3.5"/><circle cx="406" cy="90" r="3.5"/><circle cx="470" cy="130" r="3.5"/><circle cx="214" cy="250" r="3.5"/><circle cx="70" cy="239.3" r="3.5"/><circle cx="454" cy="100.7" r="4"/></g>
<g font-size="12" fill="#1d2b44">
<text x="78" y="162">t = 0</text>
<text x="380" y="80">t = 3</text>
<text x="478" y="128">t = 5</text>
<text x="200" y="268">t = 9</text>
<text x="78" y="232">t = 10</text>
<text x="250" y="210">r(4) (dashed)</text>
<text x="478" y="152">r′(4) ×2</text>
<text x="420" y="66">t = 4</text>
</g>
</svg>
<figcaption>Figure 1. The helicopter's path for 0 ≤ t ≤ 10. The dashed arrow is the position vector r(4) from the origin. The thick arrow is r′(4) = ⟨2, −π/3⟩ drawn from the point r(4), at twice its true length: it is tangent to the path and points the way the helicopter is moving (right and down).</figcaption>
</figure>

1. **Differentiate.**
   - d/dt [10t − t²] = 10 − 2t
   - d/dt [6 + 4 sin(πt/6)] = 4 · (π/6) cos(πt/6) = (2π/3) cos(πt/6)
   - **r′(t) = ⟨10 − 2t, (2π/3) cos(πt/6)⟩** (metres per second)
2. **(a) Evaluate at t = 4.** cos(4π/6) = cos(2π/3) = −½.
   **r′(4) = ⟨10 − 8, (2π/3)(−½)⟩ = ⟨2, −π/3⟩ ≈ ⟨2, −1.047⟩ m/s.**
   The x-component is positive and the y-component is negative, so at t = 4 the helicopter is moving **right and down**. The tangent slope there is (−π/3)/2 = −π/6 ≈ −0.524.
3. **(b) Second derivative.**
   - d/dt [10 − 2t] = −2
   - d/dt [(2π/3) cos(πt/6)] = (2π/3)(−π/6) sin(πt/6) = −(π²/9) sin(πt/6)
   - **r″(t) = ⟨−2, −(π²/9) sin(πt/6)⟩**, so with sin(2π/3) = √3/2,
   - **r″(4) = ⟨−2, −π²√3/18⟩ ≈ ⟨−2, −0.950⟩ m/s².**
4. **(c) Straight up or down:** x′(t) = 0 and y′(t) ≠ 0. 10 − 2t = 0 gives t = 5. y′(5) = (2π/3) cos(5π/6) = −π/√3 ≈ −1.814 ≠ 0. So at **t = 5** the helicopter moves **straight down**, at its furthest point to the right, (25, 8).
   **Horizontally:** y′(t) = 0 and x′(t) ≠ 0. cos(πt/6) = 0 gives πt/6 = π/2 or 3π/2, so t = 3 or t = 9. x′(3) = 4 > 0 (moving right, at the top of its path) and x′(9) = −8 < 0 (moving left, at the bottom).

**Checks.**
- *Graph:* Figure 1 shows the path turning back at x = 25 when t = 5, the highest point at t = 3 and the lowest at t = 9. ✓
- *Units:* r is in metres, so r′ is in m/s and r″ in m/s². ✓

**Interpretation.** At t = 4 seconds the helicopter is moving right at 2 m/s and down at about 1.047 m/s. Its horizontal velocity component is falling by 2 m/s every second, so it will soon stop moving right (at t = 5) and turn back.

## r″(t) is not d²y/dx²

Both are called "second derivatives", but they answer different questions.

- **r″(t)** is a **vector** of two rates with respect to t: ⟨x″(t), y″(t)⟩.
- **d²y/dx²** is a **single number** about the shape of the curve (concavity), found as in Topic 9.2: differentiate dy/dx with respect to t, then divide by dx/dt.

For the helicopter at t = 4: r″(4) ≈ ⟨−2, −0.950⟩, but dy/dx = (2π/3) cos(πt/6) / (10 − 2t) and the Topic 9.2 method gives d²y/dx² = −π(π√3 + 6)/72 ≈ −0.499 at t = 4. Neither component of r″(4) equals d²y/dx², and dividing y″ by x″ does not give it either (that gives about 0.475).

## Common misconceptions

- **Adding the components.** r′(t) is a vector ⟨x′, y′⟩, not the single number x′ + y′.
- **Differentiating only one component,** or forgetting the chain-rule factor, such as d/dt [sin(πt/6)] = (π/6) cos(πt/6).
- **Product of derivatives.** d/dt [t sin t] = sin t + t cos t, not cos t. The product rule still applies inside a component.
- **Domain from one component only.** Both components must be defined.
- **Slope as x′/y′.** The tangent slope is y′/x′ (rise over run).
- **Treating r″(t) as d²y/dx²,** or computing d²y/dx² as y″/x″.
- **Reading the direction from r(t) instead of r′(t).** Where the point *is* (r) does not tell you which way it is *going* (r′).
- **Declaring a vertical tangent when both x′ and y′ are 0.** ⟨0, 0⟩ has no direction; you cannot conclude anything from it alone.

## Where this leads

Topic 9.5 reverses this process: given r′(t) and a starting position, you integrate component by component to find r(t). Topic 9.6 then uses r′(t), |r′(t)| and r″(t) as velocity, speed and acceleration in motion problems. Next: the [Topic 9.5 study guide](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-study-guide/). To review arc length and |r′(t)|, go back to the [Topic 9.3 study guide](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-checklist/) to consolidate.
