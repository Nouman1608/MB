---
resourceId: "mb-ap-calcbc-9.3-study-guide"
title: "Finding Arc Lengths of Curves Given by Parametric Equations: Study Guide (Calculus BC 9.3)"
description: "Build the parametric arc length integral from Pythagoras, check when it applies, and use it for exact lengths by hand and calculator lengths in context."
course: "calculus-bc"
unit: 9
topics: ["9.3"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Derivatives of parametric equations, dx/dt and dy/dt (Topic 9.1)"
  - "Arc length of a curve y = f(x) (Topic 8.13)"
  - "Riemann sums and the definite integral (Topics 6.2 to 6.4)"
  - "Integration by substitution (Topic 6.9)"
prerequisiteResources: ["mb-ap-calcbc-9.2-study-guide"]
learningObjectives:
  - "Explain where the parametric arc length integral comes from, using Pythagoras on a small piece of the curve"
  - "Write a definite integral for the length of a parametric curve over a given interval of the parameter"
  - "Check that the curve is traced exactly once before calling the integral its length"
  - "Evaluate arc length exactly when the integrand simplifies, and with a calculator otherwise"
  - "Judge whether an arc length answer is reasonable by comparing it with a straight-line distance"
skills: ["1", "3"]
studyMinutes: 45
difficulty: "stretch"
calculator: "mixed"
calculatorNote: "Most arc length integrals have no elementary antiderivative, so a calculator is expected for their value. Set up the integral by hand. Give decimals to 3 decimal places unless told otherwise. Angles in radians."
related: ["mb-ap-calcbc-9.3-revision-notes", "mb-ap-calcbc-9.3-practice", "mb-ap-calcbc-9.3-checklist"]
next: "mb-ap-calcbc-9.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: this topic is not part of Calculus AB."
  - "Length = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt, for a smooth curve traced exactly once for a ≤ t ≤ b."
  - "The formula is Pythagoras on tiny pieces of the curve, added up by a definite integral."
  - "If the curve is traced more than once, the integral counts the repeated part again."
  - "An arc length is never shorter than the straight-line distance between its end points. Use that as a check."
faqs:
  - question: "Do Calculus AB students need this?"
    answer: "No. Parametric arc length is BC-only content, like the rest of Unit 9."
  - question: "Do I need to find an antiderivative?"
    answer: "Only when the expression under the square root simplifies to a perfect square. Most of the time you set up the integral and evaluate it with a calculator."
  - question: "How is this different from the arc length formula in Topic 8.13?"
    answer: "It is the same idea. If you take x = t and y = f(t), the parametric formula becomes the Topic 8.13 formula ∫ √(1 + (f′(x))²) dx."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**BC-only material.** Parametric arc length is part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

You need four earlier ideas. If any is shaky, revisit it from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) first.

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Parametric derivatives dx/dt and dy/dt | 9.1 | They go inside the arc length integral |
| Arc length of y = f(x) | 8.13 | The same idea, now with a parameter |
| Riemann sums and the definite integral | 6.2 to 6.4 | Adding up many tiny lengths |
| Substitution | 6.9 | Some exact arc lengths need it |

Notation on this page: **∫ from a to b of f(t) dt** is the definite integral with lower limit a and upper limit b. **x′(t)** means dx/dt and **y′(t)** means dy/dt.

## The idea: Pythagoras on tiny pieces

A parametric curve is drawn by the point (x(t), y(t)) as t runs from a to b. You want the length of the path the point draws.

Cut the interval a ≤ t ≤ b into many short pieces of width Δt. Over one piece, the point moves a horizontal distance Δx and a vertical distance Δy. If Δt is small, the curve is almost straight there, so its length Δs is close to the length of the straight chord:

**Δs ≈ √((Δx)² + (Δy)²)**

Now bring in derivatives. For a small Δt, Δx ≈ x′(t) Δt and Δy ≈ y′(t) Δt. Substitute:

**Δs ≈ √((x′(t) Δt)² + (y′(t) Δt)²) = √((x′(t))² + (y′(t))²) · Δt**

Adding all the pieces gives a Riemann sum. As Δt → 0 the sum becomes a definite integral:

> **L = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt**

The integrand √((dx/dt)² + (dy/dt)²) is "length per unit of t". In motion problems (Topic 9.6) it is the speed, and the same integral gives the distance travelled.

<figure>
<svg viewBox="0 0 540 330" role="img" aria-labelledby="arc93-title arc93-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="arc93-title">A small piece of a parametric curve approximated by a right triangle</title>
<desc id="arc93-desc">Graph of the curve x = t²/2, y = (2t + 1)^(3/2)/3 for t from 0 to 4. It starts at (0, 1/3) and rises to the right, ending at (8, 9). Between the points where t = 2, about (2, 3.73), and t = 3, about (4.5, 6.17), a thick straight chord labelled Δs is drawn. A dashed horizontal leg labelled Δx and a dashed vertical leg labelled Δy complete a right triangle under the chord, showing Δs is approximately the square root of Δx squared plus Δy squared.</desc>
<rect x="0" y="0" width="540" height="330" fill="#ffffff"/>
<line x1="70" y1="290" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="300" x2="70" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="286" x2="170" y2="294"/><line x1="270" y1="286" x2="270" y2="294"/><line x1="370" y1="286" x2="370" y2="294"/><line x1="470" y1="286" x2="470" y2="294"/>
<line x1="66" y1="238" x2="74" y2="238"/><line x1="66" y1="186" x2="74" y2="186"/><line x1="66" y1="134" x2="74" y2="134"/><line x1="66" y1="82" x2="74" y2="82"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="308">0</text><text x="170" y="308">2</text><text x="270" y="308">4</text><text x="370" y="308">6</text><text x="470" y="308">8</text>
<text x="290" y="326" font-size="13">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="242">2</text><text x="62" y="190">4</text><text x="62" y="138">6</text><text x="62" y="86">8</text>
</g>
<text x="30" y="160" font-size="13" fill="#1d2b44" text-anchor="middle">y</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" points="70.0,281.3 70.2,278.6 71.0,275.6 72.2,272.5 74.0,269.1 76.2,265.5 79.0,261.7 82.2,257.8 86.0,253.7 90.2,249.4 95.0,245.0 100.2,240.4 106.0,235.7 112.2,230.8 119.0,225.8 126.2,220.7 134.0,215.4 142.2,210.0 151.0,204.5 160.2,198.9 170.0,193.1 180.2,187.2 191.0,181.2 202.3,175.1 214.0,168.9 226.2,162.6 239.0,156.2 252.3,149.7 266.0,143.1 280.3,136.3 295.0,129.5 310.2,122.6 326.0,115.5 342.3,108.4 359.0,101.2 376.2,93.9 394.0,86.5 412.3,79.0 431.0,71.4 450.3,63.8 470.0,56.0"/>
<line x1="170" y1="193.1" x2="295" y2="193.1" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="295" y1="193.1" x2="295" y2="129.5" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<line x1="170" y1="193.1" x2="295" y2="129.5" stroke="#1d2b44" stroke-width="4"/>
<circle cx="170" cy="193.1" r="4" fill="#1d2b44"/><circle cx="295" cy="129.5" r="4" fill="#1d2b44"/>
<text x="232" y="212" font-size="14" fill="#1d2b44" text-anchor="middle">Δx</text>
<text x="303" y="166" font-size="14" fill="#1d2b44">Δy</text>
<text x="214" y="150" font-size="14" fill="#1d2b44" text-anchor="middle">Δs</text>
<text x="160" y="186" font-size="12" fill="#1d2b44" text-anchor="end">t = 2</text>
<text x="290" y="120" font-size="12" fill="#1d2b44" text-anchor="end">t = 3</text>
<text x="350" y="230" font-size="13" fill="#1d2b44">Δs ≈ √((Δx)² + (Δy)²)</text>
<text x="350" y="250" font-size="13" fill="#1d2b44">≈ √(x′(t)² + y′(t)²) Δt</text>
</svg>
<figcaption>Figure 1. On a short stretch of the curve (here from t = 2 to t = 3), the curve is close to the straight chord Δs, the hypotenuse of a right triangle with legs Δx and Δy. Making Δt smaller makes the approximation better.</figcaption>
</figure>

## When does the integral give the length?

Two conditions matter.

1. **The curve is smooth on [a, b].** dx/dt and dy/dt are continuous. This makes the integrand continuous, so the integral exists.
2. **The curve is traced exactly once** as t goes from a to b. The integral adds up every bit of path the point covers. If the point goes over part of the curve twice, that part is counted twice.

**Example of condition 2.** The circle x = 2 cos t, y = 2 sin t has radius 2. Its integrand is √(4 sin² t + 4 cos² t) = 2.

- For 0 ≤ t ≤ 2π: ∫ from 0 to 2π of 2 dt = **4π**. That is the circumference 2π · 2. ✓
- For 0 ≤ t ≤ 4π: the integral is **8π**, but the circle is still only 4π long. The point went round twice.

So read the question carefully. "Find the length of the curve" needs a parameter interval that traces it once. "Find the distance the point travels" (Topic 9.6) counts every lap.

**Link to Topic 8.13.** If a curve is y = f(x), use x as the parameter: x = t, y = f(t). Then dx/dt = 1 and dy/dt = f′(t), and the formula becomes ∫ √(1 + (f′(x))²) dx. The parametric formula is the more general one.

## Worked example 1: an exact length by hand

**Question.** Find the exact length of the curve x = ½t², y = ⅓(2t + 1)^(3/2) for 0 ≤ t ≤ 4. No calculator.

1. **Check the curve is traced once.** dx/dt = t, which is positive for t > 0. So x keeps increasing and the point never comes back over its path.
2. **Differentiate.**
   - dx/dt = t
   - dy/dt = ⅓ · (3/2)(2t + 1)^(1/2) · 2 = (2t + 1)^(1/2) (chain rule: the factor 2 from the inside)
3. **Square and add.**
   (dx/dt)² + (dy/dt)² = t² + (2t + 1) = t² + 2t + 1 = **(t + 1)²**
4. **Take the square root.** √((t + 1)²) = |t + 1| = t + 1, because t + 1 > 0 on [0, 4].
5. **Integrate.**
   **L = ∫ from 0 to 4 of (t + 1) dt = [½t² + t] from 0 to 4 = (8 + 4) − 0 = 12**

**Answer.** The curve is **12 units** long.

**Checks.**
- *Straight-line distance:* the curve runs from (0, ⅓) to (8, 9). The chord length is √(8² + (26/3)²) = √(64 + 75.11…) ≈ 11.795. The curve must be at least this long, and 12 is just a little more, which fits a curve that bends only gently. ✓
- *Calculator (where allowed):* a numerical integral of √(t² + 2t + 1) from 0 to 4 gives 12.000. ✓

**Why this worked.** The expression under the root became a perfect square. That is the only reason an exact answer was possible. Questions that want an exact length are built this way, so after squaring and adding, **look for a perfect square**.

## Worked example 2: a calculator length in context

**Context.** A fictional survey drone flies over a field. Its position, in metres, is x(t) = 8t and y(t) = 20 + 6 sin(πt/5), where t is the time in seconds, 0 ≤ t ≤ 10. Find the length of the drone's path. Then compare it with the straight-line distance between its start and end.

1. **Check the path is traced once.** dx/dt = 8 > 0, so the drone always moves in the positive x direction. No part of the path is repeated.
2. **Differentiate.**
   - dx/dt = 8
   - dy/dt = 6 · (π/5) cos(πt/5) = (6π/5) cos(πt/5)
3. **Set up the integral.**
   **L = ∫ from 0 to 10 of √(64 + (6π/5)² cos²(πt/5)) dt**
4. **Can you integrate by hand?** No. 64 + (a constant)·cos²(…) is not a perfect square. Use the calculator's numerical integration (radian mode).
5. **Evaluate.** L ≈ **84.272 m**.

**Checks.**
- *Straight-line distance:* at t = 0 the drone is at (0, 20); at t = 10 it is at (80, 20 + 6 sin 2π) = (80, 20). The chord is 80 m. The path is a wave, so it must be longer than 80 m. ✓
- *Upper bound:* the integrand is at most √(64 + (6π/5)²) ≈ 8.844 m per second, so in 10 seconds the path is at most about 88.4 m. 84.272 m lies between 80 m and 88.4 m. ✓
- *Units:* the integrand is in metres per second; multiplied by seconds it gives metres. ✓

**Interpretation.** The drone's path over the 10 seconds is about **84.3 m** long, about 4.3 m more than the straight-line distance between its start and end points, because of the up-and-down wave.

## A strategy for any arc length question

1. Find dx/dt and dy/dt (watch the chain rule).
2. Check the parameter interval traces the curve once. A component that is always increasing or always decreasing is the quickest proof.
3. Write L = ∫ from a to b of √((dx/dt)² + (dy/dt)²) dt with the correct limits. **The limits are values of t, not of x or y.**
4. Expand (dx/dt)² + (dy/dt)². If it is a perfect square, integrate by hand. If not, and a calculator is allowed, evaluate numerically.
5. Check: is the answer at least the straight-line distance between the end points? Are the units right?

## Common misconceptions

- **Forgetting the square root,** or squaring after adding: ∫ ((dx/dt)² + (dy/dt)²) dt and ∫ (dx/dt + dy/dt)² dt are not lengths. In Worked example 2 the first one gives about 711, which is far too big.
- **Adding the derivatives without squaring.** ∫ (dx/dt + dy/dt) dt = [x + y], which only measures the net change in x + y. For the drone it gives 80, the chord length, by coincidence, not the arc length.
- **Using x-values or y-values as limits.** The integral is in t, so the limits are the starting and finishing values of t.
- **Losing the chain-rule factor** inside a derivative, such as writing dy/dt = 6 cos(πt/5) instead of (6π/5) cos(πt/5).
- **Ignoring retracing.** A circle traced twice gives double its circumference. Check the parameter interval.
- **Mixing up √(a² + b²) with a + b.** √(t² + 2t + 1) simplifies only because it is a perfect square. √(64 + 14.2 cos² u) does not split into 8 + 3.77 cos u.
- **Calculator in degree mode** for trigonometric components. Calculus uses radians.

## Where this leads

The integrand √((dx/dt)² + (dy/dt)²) comes back in Topic 9.6 as the speed of a particle, and this integral becomes the total distance it travels. Next, the [Topic 9.4 study guide](/advanced-course-resources/calculus-bc/9-4-defining-differentiating-vector-valued-functions-study-guide/) writes the same curves as vector-valued functions; the arc length integrand is then the size of the derivative vector. If you need to review parametric derivatives first, go back to the [Topic 9.2 study guide](/advanced-course-resources/calculus-bc/9-2-second-derivatives-parametric-equations-study-guide/).

Try the [practice questions](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/9-3-finding-arc-lengths-curves-given-checklist/) to consolidate.
