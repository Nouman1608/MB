---
resourceId: "mb-ap-calcbc-9.5-study-guide"
title: "Integrating Vector-Valued Functions: Study Guide (Calculus BC 9.5)"
description: "Integrate vector-valued and parametric rate functions one component at a time, and use initial conditions to find a particle's position or velocity at any time."
course: "calculus-bc"
unit: 9
topics: ["9.5"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Vector-valued functions and their derivatives (Topic 9.4)"
  - "The Fundamental Theorem of Calculus and definite integrals (Topic 6.7)"
  - "Basic antiderivatives and substitution (Topics 6.8 and 6.9)"
  - "Finding a particular solution from an initial condition (Topic 7.7)"
  - "Position from velocity for motion along a line (Topic 8.2)"
prerequisiteResources: ["mb-ap-calcbc-9.4-study-guide"]
learningObjectives:
  - "Integrate a vector-valued function by integrating each component, with one constant for each component"
  - "Explain why a definite integral of a rate vector gives the net change in the vector"
  - "Use a rate vector and an initial condition to find a particular position or velocity function"
  - "Work back from an acceleration vector to position in two steps, using two initial conditions"
  - "Find a position at a later or earlier time with a graphing calculator when no elementary antiderivative exists"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Find antiderivatives by hand where they exist. When a component has no elementary antiderivative, use a graphing calculator for the definite integral and give decimals to 3 decimal places."
related: ["mb-ap-calcbc-9.5-revision-notes", "mb-ap-calcbc-9.5-practice", "mb-ap-calcbc-9.5-checklist"]
next: "mb-ap-calcbc-9.5-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Integrate a vector one component at a time: ∫ ⟨f(t), g(t)⟩ dt = ⟨∫ f(t) dt, ∫ g(t) dt⟩ + C, where C = ⟨C₁, C₂⟩ is a constant vector."
  - "Each component gets its own constant. Find each one from the initial condition."
  - "Position at a new time = position at a known time + the definite integral of velocity between the two times."
  - "From acceleration, integrate twice: use the starting velocity first, then the starting position."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Vector-valued functions are BC-only content. AB students meet the same idea for motion along a line in Topic 8.2."
  - question: "Is a parametric problem different from a vector problem?"
    answer: "No. Being told dx/dt and dy/dt is the same as being told the velocity vector ⟨dx/dt, dy/dt⟩. You integrate each one separately in both cases."
  - question: "Why is the answer to a definite integral of a vector a vector, not a number?"
    answer: "Each component gives its own number, so you get one number per component. Together they form the net change vector, for example ⟨16, 4⟩."
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

This topic joins two ideas you already have: vectors from [Topic 9.4](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/), and "integrate a rate, then add a starting value" from earlier units. If any row is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Vector-valued functions and their derivatives | 9.4 | r′(t) = ⟨x′(t), y′(t)⟩ is what you are undoing |
| Fundamental Theorem of Calculus | 6.7 | ∫ from a to b of r′(t) dt = r(b) − r(a) |
| Basic antiderivatives and substitution | 6.8, 6.9 | Integrating each component |
| Particular solutions from an initial condition | 7.7 | Finding the constants |
| Position from velocity along a line | [8.2](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/) | The same idea, now in two dimensions |

**Notation on this page.** A vector-valued function is written **r(t) = ⟨x(t), y(t)⟩**. Some books write x(t) **i** + y(t) **j**; it means the same thing. **∫ from a to b of f(t) dt** is a definite integral with lower limit a and upper limit b.

## Integrate one component at a time

In Topic 9.4 you differentiated a vector by differentiating each component:

**if r(t) = ⟨x(t), y(t)⟩, then r′(t) = ⟨x′(t), y′(t)⟩.**

Integration is the reverse process, so it also works one component at a time. To find an antiderivative of ⟨f(t), g(t)⟩, find an antiderivative of f and an antiderivative of g separately:

> **∫ ⟨f(t), g(t)⟩ dt = ⟨∫ f(t) dt, ∫ g(t) dt⟩ = ⟨F(t), G(t)⟩ + C**

Here F′ = f, G′ = g, and **C = ⟨C₁, C₂⟩ is a constant vector**. You can check the answer by differentiating: the derivative of ⟨F(t) + C₁, G(t) + C₂⟩ is ⟨f(t), g(t)⟩, because the derivative of each constant is 0.

**Two constants, not one.** The x-component and the y-component are separate functions. Each has its own constant, and the two constants are usually different. Writing "+ C" after the vector is fine, as long as you remember that C is a vector.

**Definite integrals give a vector.** For a definite integral, integrate each component between the same limits. For example,

**∫ from 0 to 1 of ⟨6t², eᵗ⟩ dt = ⟨[2t³] from 0 to 1, [eᵗ] from 0 to 1⟩ = ⟨2, e − 1⟩.**

The answer is a vector with two components, not a single number. Do not add the components together.

**Parametric form is the same problem.** You may be given dx/dt = f(t) and dy/dt = g(t) instead of a vector. That is exactly the rate vector ⟨f(t), g(t)⟩ written as two separate equations. Integrate each one and use the given starting point.

## Net change and the position formula

Apply the Fundamental Theorem of Calculus to each component of r′(t):

**∫ from a to b of r′(t) dt = ⟨x(b) − x(a), y(b) − y(a)⟩ = r(b) − r(a)**

So the definite integral of a rate vector is the **net change** in the vector over [a, b]. Rearranging gives the formula you will use most:

> **r(b) = r(a) + ∫ from a to b of r′(t) dt**

In words: new value = known value + accumulated change. This is the same idea as x(b) = x(a) + ∫ v dt for motion along a line, applied to each coordinate. When r′ is a velocity, the net change is the particle's displacement; Topic 9.6 builds on that.

The same formula works one step down. If a(t) is the acceleration vector, then

**v(b) = v(a) + ∫ from a to b of a(t) dt.**

## Finding a particular solution: two methods

A problem that gives you a rate vector **and** the value of the vector at one time is an initial value problem. You can solve it in either of two ways.

**Method 1: antiderivative, then constants.**

1. Integrate each component and attach a constant: r(t) = ⟨F(t) + C₁, G(t) + C₂⟩.
2. Substitute the known time t₀ into each component and set it equal to the known value.
3. Solve for C₁ and C₂ separately.

**Method 2: accumulation form.** Write the answer directly as

**r(t) = r(t₀) + ∫ from t₀ to t of r′(s) ds**

The letter s is a dummy variable, used so that t can be the upper limit. This form is the one to use when an antiderivative cannot be found by hand.

Both methods give the same function. Method 1 is often quicker for a formula; Method 2 is quicker for a single value at one time.

## Worked example 1: an initial condition that is not at t = 0

**Question.** A particle moves in the plane with velocity vector r′(t) = ⟨3t² − 4t, 2e^(t−1)⟩ for t ≥ 0. At t = 1 the particle is at the point (5, −1). Find r(t), then find the position at t = 3. No calculator.

1. **Integrate each component.**
   - ∫ (3t² − 4t) dt = t³ − 2t² + C₁
   - ∫ 2e^(t−1) dt = 2e^(t−1) + C₂ (the inner function t − 1 has derivative 1, so no extra factor)
2. **Use the condition at t = 1, not t = 0.**
   - x(1) = 1 − 2 + C₁ = 5, so **C₁ = 6**.
   - y(1) = 2e⁰ + C₂ = 2 + C₂ = −1, so **C₂ = −3**.
3. **Write the particular solution.**
   **r(t) = ⟨t³ − 2t² + 6, 2e^(t−1) − 3⟩**
4. **Evaluate at t = 3.**
   - x(3) = 27 − 18 + 6 = **15**
   - y(3) = 2e² − 3 ≈ **11.778**

**Answer.** At t = 3 the particle is at **(15, 2e² − 3)**, about (15, 11.778).

**Check with Method 2.** r(3) = r(1) + ∫ from 1 to 3 of r′(t) dt.
- ∫ from 1 to 3 of (3t² − 4t) dt = [t³ − 2t²] from 1 to 3 = 9 − (−1) = 10, so x(3) = 5 + 10 = 15. ✓
- ∫ from 1 to 3 of 2e^(t−1) dt = [2e^(t−1)] from 1 to 3 = 2e² − 2, so y(3) = −1 + 2e² − 2 = 2e² − 3. ✓

**Check by differentiating.** d/dt ⟨t³ − 2t² + 6, 2e^(t−1) − 3⟩ = ⟨3t² − 4t, 2e^(t−1)⟩ ✓, and r(1) = ⟨5, −1⟩ ✓.

**The trap.** If you treat (5, −1) as the position at t = 0, you get C₁ = 5 and C₂ = −1 − 2e⁻¹, and the x-coordinate at t = 3 comes out as 14 instead of 15. Always substitute the time you are actually given.

## Worked example 2: from acceleration to position

**Context.** A radio-controlled model car moves on a flat test area. Its position is measured in metres from a corner post, with x east and y north, and t is in seconds. Its acceleration vector is

**a(t) = ⟨−2, 6t − 12⟩ m/s²**

At t = 0 its velocity is ⟨8, 9⟩ m/s and its position is (2, 1). Find v(t), r(t), the velocity at t = 2 and the position at t = 4. No calculator.

1. **First integration: velocity.**
   v(t) = ⟨−2t + C₁, 3t² − 12t + C₂⟩. At t = 0: C₁ = 8 and C₂ = 9.
   **v(t) = ⟨8 − 2t, 3t² − 12t + 9⟩ m/s**
2. **Second integration: position.**
   r(t) = ⟨8t − t² + D₁, t³ − 6t² + 9t + D₂⟩. At t = 0: D₁ = 2 and D₂ = 1.
   **r(t) = ⟨8t − t² + 2, t³ − 6t² + 9t + 1⟩ m**
3. **Velocity at t = 2.** v(2) = ⟨8 − 4, 12 − 24 + 9⟩ = **⟨4, −3⟩ m/s**: moving east and south.
4. **Position at t = 4.** r(4) = ⟨32 − 16 + 2, 64 − 96 + 36 + 1⟩ = **⟨18, 5⟩**, so the car is at (18, 5).

**Checks.**
- *Differentiate twice:* r′(t) = ⟨8 − 2t, 3t² − 12t + 9⟩ = v(t) ✓ and r″(t) = ⟨−2, 6t − 12⟩ = a(t) ✓.
- *Initial values:* v(0) = ⟨8, 9⟩ ✓, r(0) = ⟨2, 1⟩ ✓.
- *Net change:* r(4) − r(0) = ⟨16, 4⟩ m. The car ends 16 m east and 4 m north of where it started.
- *Units:* integrating m/s² over seconds gives m/s; integrating m/s gives m. ✓

<figure>
<svg viewBox="0 0 570 330" role="img" aria-labelledby="path95-title path95-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="path95-title">Path of the model car, r(t) = ⟨8t − t² + 2, t³ − 6t² + 9t + 1⟩, for 0 ≤ t ≤ 4</title>
<desc id="path95-desc">Axes show x in metres from 0 to 20 and y in metres from 0 to 6. A solid curve starts at (2, 1) when t = 0, rises to (9, 5) at t = 1, falls through (14, 3) at t = 2 to (17, 1) at t = 3, then turns sharply upward to end at (18, 5) at t = 4. Each of these five points is marked with a filled circle and labelled with its t value. A short solid arrow at (14, 3) points down and to the right along the curve, showing the direction of the velocity ⟨4, −3⟩ at t = 2. A dashed arrow goes straight from the start point (2, 1) to the end point (18, 5), labelled as the net change ⟨16, 4⟩.</desc>
<rect x="0" y="0" width="570" height="330" fill="#ffffff"/>
<line x1="60" y1="280" x2="555" y2="280" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="290" x2="60" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="156" y1="276" x2="156" y2="284"/><line x1="252" y1="276" x2="252" y2="284"/><line x1="348" y1="276" x2="348" y2="284"/><line x1="444" y1="276" x2="444" y2="284"/><line x1="540" y1="276" x2="540" y2="284"/>
<line x1="56" y1="200" x2="64" y2="200"/><line x1="56" y1="120" x2="64" y2="120"/><line x1="56" y1="40" x2="64" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="298">0</text><text x="156" y="298">4</text><text x="252" y="298">8</text><text x="348" y="298">12</text><text x="444" y="298">16</text><text x="540" y="298">20</text>
<text x="300" y="320" font-size="13">x (metres east)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="204">2</text><text x="52" y="124">4</text><text x="52" y="44">6</text>
</g>
<text x="20" y="160" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 20 160)">y (metres north)</text>
<line x1="108" y1="240" x2="483.7" y2="83.5" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="7 5"/>
<polygon points="492,80 481.9,89.6 478.1,80.4" fill="#1d2b44"/>
<text x="182" y="236" font-size="12" fill="#1d2b44" transform="rotate(-22 182 236)">net change ⟨16, 4⟩ (dashed)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="108.0,240.0 117.5,222.6 127.0,206.4 136.3,191.3 145.4,177.3 154.5,164.4 163.4,152.5 172.3,141.7 181.0,131.8 189.5,123.0 198.0,115.0 206.3,107.9 214.6,101.8 222.7,96.4 230.6,91.9 238.5,88.1 246.2,85.1 253.9,82.8 261.4,81.2 268.7,80.3 276.0,80.0 283.1,80.3 290.2,81.2 297.1,82.6 303.8,84.5 310.5,86.9 317.0,89.7 323.5,93.0 329.8,96.6 335.9,100.7 342.0,105.0 347.9,109.6 353.8,114.6 359.5,119.7 365.0,125.1 370.5,130.6 375.8,136.3 381.1,142.1 386.2,148.0 391.1,154.0 396.0,160.0 400.7,166.0 405.4,172.0 409.9,177.9 414.2,183.7 418.5,189.4 422.6,194.9 426.7,200.3 430.6,205.4 434.3,210.4 438.0,215.0 441.5,219.3 445.0,223.4 448.3,227.0 451.4,230.3 454.5,233.1 457.4,235.5 460.3,237.4 463.0,238.8 465.5,239.7 468.0,240.0 470.3,239.7 472.6,238.8 474.7,237.2 476.6,234.9 478.5,231.9 480.2,228.1 481.9,223.6 483.4,218.2 484.7,212.1 486.0,205.0 487.1,197.0 488.2,188.2 489.1,178.3 489.8,167.5 490.5,155.6 491.0,142.7 491.5,128.7 491.8,113.6 491.9,97.4 492.0,80.0"/>
<g fill="#1d2b44">
<circle cx="108" cy="240" r="5"/><circle cx="276" cy="80" r="5"/><circle cx="396" cy="160" r="5"/><circle cx="468" cy="240" r="5"/><circle cx="492" cy="80" r="5"/>
</g>
<g font-size="12" fill="#1d2b44">
<text x="96" y="262">t = 0 (2, 1)</text><text x="250" y="66">t = 1 (9, 5)</text><text x="404" y="148">t = 2 (14, 3)</text><text x="440" y="262">t = 3 (17, 1)</text><text x="486" y="66" text-anchor="end">t = 4 (18, 5)</text>
</g>
<line x1="396" y1="160" x2="428.5" y2="200.6" stroke="#1d2b44" stroke-width="2.5"/>
<polygon points="434.7,208.4 423.3,202.2 431.1,195.9" fill="#1d2b44"/>
<text x="320" y="212" font-size="12" fill="#1d2b44">v(2) = ⟨4, −3⟩</text>
</svg>
<figcaption>Figure 1. The car's path from Worked example 2, with its position marked at each whole second. The solid curve is the actual path; the dashed arrow is the net change r(4) − r(0) = ⟨16, 4⟩, which equals ∫ from 0 to 4 of v(t) dt. The short solid arrow at t = 2 shows the direction of the velocity ⟨4, −3⟩; it is tangent to the path. The two axes use different scales, so the arrow looks steeper than a 4-across, 3-down slope would on square axes.</figcaption>
</figure>

**Interpretation.** Integrating velocity tells you only how far the car's coordinates change. The starting position (2, 1) fixes where the path sits on the test area. Notice in Figure 1 that the dashed net-change arrow is much shorter than the curved path: the net change is not the distance travelled. That distinction is the subject of Topic 9.6.

**The trap.** If you forget v(0) and write v(t) = ⟨−2t, 3t² − 12t⟩, the position at t = 4 comes out as (−14, −31). That is far from the true (18, 5). Each integration step needs its own initial condition.

## Worked example 3: with a graphing calculator

**Question.** A particle moves so that dx/dt = 1 + cos(t²) and dy/dt = 2e^(−t²/2). At t = 0 the particle is at (−1, 4). Find its position at t = 2. A graphing calculator is allowed.

1. **Spot the issue.** Neither cos(t²) nor e^(−t²/2) has an antiderivative you can write with elementary functions. So Method 1 is not possible. Use the accumulation form.
2. **Set up each coordinate.**
   - x(2) = x(0) + ∫ from 0 to 2 of (1 + cos(t²)) dt
   - y(2) = y(0) + ∫ from 0 to 2 of 2e^(−t²/2) dt
3. **Evaluate the integrals on the calculator** (radian mode).
   - ∫ from 0 to 2 of (1 + cos(t²)) dt ≈ 2.4615
   - ∫ from 0 to 2 of 2e^(−t²/2) dt ≈ 2.3926
4. **Add the starting values.**
   - x(2) ≈ −1 + 2.4615 = **1.461**
   - y(2) ≈ 4 + 2.3926 = **6.393**

**Answer.** At t = 2 the particle is at about **(1.461, 6.393)**.

**Checks.** Both rates are never negative on [0, 2] (cos(t²) ≥ −1), so both coordinates should increase from their starting values. They do. Keep at least 4 decimal places in the integrals and round only the final answer.

**Going backwards in time.** The same formula works for an earlier time. If you know r(1) and want r(0), write r(0) = r(1) + ∫ from 1 to 0 of r′(t) dt = r(1) − ∫ from 0 to 1 of r′(t) dt. The minus sign is easy to lose.

## Checking your answer

You can check any particular solution in two quick steps:

1. **Differentiate it.** You should get back the given rate vector.
2. **Substitute the given time.** You should get back the given position (or velocity).

If both checks pass, the answer is correct. There is only one function that meets both conditions.

## Common misconceptions

- **"One constant is enough."** ⟨t³ − 2t², 2e^(t−1)⟩ + C needs C = ⟨C₁, C₂⟩. Using the same number for both components is almost always wrong.
- **Using t = 0 when the condition is at another time.** Substitute the time you are given, such as t = 1.
- **Reporting the net change as the position.** ∫ from a to b of r′(t) dt is the change. Add r(a) to get the position at b.
- **Losing the starting velocity.** From acceleration, the first constant comes from v(t₀), the second from r(t₀). Both are needed.
- **Adding the components of a definite integral.** ∫ from 0 to 1 of ⟨6t², eᵗ⟩ dt is the vector ⟨2, e − 1⟩, not the number e + 1.
- **Forgetting a chain-rule factor in one component.** ∫ e^(t/2) dt = 2e^(t/2), not ½ e^(t/2).
- **Sign errors going backwards in time.** r(0) = r(1) − ∫ from 0 to 1 of r′(t) dt.
- **Rounding too early** in calculator work. Store integral values and round only at the end.

## Where this leads

Topic 9.6 uses everything here to solve full motion problems in the plane: velocity, speed and acceleration from derivatives, and displacement and total distance from integrals. Continue with [Topic 9.6, Solving Motion Problems Using Parametric and Vector-Valued Functions](/advanced-course-resources/calculus-bc/9-6-solving-motion-problems-parametric-vector-study-guide/), or see the order on the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-5-integrating-vector-valued-functions-checklist/) to consolidate.
