---
resourceId: "mb-ap-calcbc-7.9-study-guide"
title: "Logistic Models with Differential Equations: Study Guide (Calculus BC 7.9)"
description: "Write a logistic differential equation from a sentence, then read it without solving: the carrying capacity, the long-run limit, and the value where growth is fastest."
course: "calculus-bc"
unit: 7
topics: ["7.9"]
resourceType: "study-guide"
calculusScope: "bc-only"
prerequisites:
  - "Writing differential equations from verbal descriptions (Topic 7.1)"
  - "Reasoning with slope fields and constant solutions (Topic 7.4)"
  - "Exponential models, dy/dt = ky (Topic 7.8)"
  - "Maximum of a quadratic and concavity from the second derivative (Unit 5)"
prerequisiteResources: ["mb-ap-calcab-7.8-study-guide"]
learningObjectives:
  - "Turn a statement about joint proportionality into the logistic equation dy/dt = ky(a − y), and recognise the equation in other algebraic forms"
  - "Read the carrying capacity and the constant solutions straight from the equation"
  - "Use the initial condition to decide whether a solution rises, falls or stays constant, and find its limit as t → ∞"
  - "Find the value of the quantity when it is changing fastest, and the greatest rate"
  - "Use the second derivative to describe the concavity of a logistic solution"
  - "Explain the meaning of each constant and each answer in context, with units"
skills: ["3", "1", "2"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Everything except the optional solution formula is done by hand. Where a calculator is used, give final decimals to 3 decimal places."
related: ["mb-ap-calcbc-7.9-revision-notes", "mb-ap-calcbc-7.9-practice", "mb-ap-calcbc-7.9-checklist"]
next: "mb-ap-calcbc-7.9-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-bc"]
keyPoints:
  - "BC only: logistic models are not part of Calculus AB."
  - "Logistic growth: the rate is jointly proportional to y and to (a − y), so dy/dt = ky(a − y) with k > 0. The number a is the carrying capacity."
  - "For any starting value y(0) > 0, the solution tends to a as t → ∞. If y(0) = 0 it stays at 0."
  - "dy/dt is largest when y = a/2, halfway to the carrying capacity. That is also where the solution curve changes concavity."
  - "You can answer all of these from the equation and the initial condition, without solving it."
faqs:
  - question: "Do Calculus AB students need logistic models?"
    answer: "No. Topic 7.9 is BC-only. AB students stop at exponential models (Topic 7.8)."
  - question: "Do I need to solve the logistic equation?"
    answer: "Not for this topic. You must be able to interpret the equation and the initial condition: the limit, the value where growth is fastest and the shape of the graph. The solution formula is shown here only as optional background."
  - question: "What if the equation is written as dP/dt = 0.3P − 0.0006P²?"
    answer: "Factor it: 0.0006P(500 − P). Now it is in the form kP(a − P), so the carrying capacity is 500."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**BC-only material.** Logistic models are part of Calculus BC only. Calculus AB students do not need this topic.

## Before you start: prerequisites

| Prerequisite | Topic | What you use it for here |
|---|---|---|
| Differential equations from words | 7.1 | Turning "jointly proportional" into an equation |
| Constant solutions and slope fields | 7.4 | Seeing why solutions level off |
| Exponential models | 7.8 | The model that logistic growth improves on |
| Maximum of a quadratic; concavity | Unit 5 | Finding where growth is fastest |

Revisit any of these from the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

## A note on notation

y (or P, N, B…) is the size of a quantity at time t. dy/dt is its rate of change. **k** and **a** are positive constants. **a** is called the **carrying capacity** or **limiting value**. "lim y(t) as t → ∞" means the value the solution approaches in the long run.

## From exponential to logistic growth

In Topic 7.8 the rate of growth was proportional to the amount: dy/dt = ky. Growth then never slows down. Real populations run out of food or space, so growth must slow as the population gets close to some maximum, a.

A logistic model builds this in. The rate is **jointly proportional** to two things at once:

- the size of the quantity, y (more members, more growth), and
- the room left before the maximum, a − y (less room, less growth).

"Jointly proportional" means proportional to the product. So

> **dy/dt = k y (a − y)**, with k > 0 and a > 0.

**Other forms you will meet.** Expanding or rearranging gives the same model:

- **dy/dt = r y (1 − y/a)** where r = ka. Here r is the relative growth rate when y is very small.
- **dy/dt = by − cy²** (b, c > 0). Factor out cy: cy(b/c − y). So the carrying capacity is a = b/c.

Always rewrite the equation as k y (a − y) before you read off a.

## Reading the equation without solving it

Think of the right-hand side as a function of y alone: dy/dt = ky(a − y). Its graph is a downward parabola with zeros at y = 0 and y = a.

<figure>
<svg viewBox="0 0 560 350" role="img" aria-labelledby="rate-title rate-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="rate-title">Growth rate dP/dt = 0.0004P(800 − P) plotted against population P</title>
<desc id="rate-desc">A downward parabola. The horizontal axis is population P from 0 to 1000; the vertical axis is the rate dP/dt in deer per year from −80 to 80. The parabola is zero at P = 0 and at P = 800, reaches its maximum of 64 deer per year at P = 400, and is negative for P greater than 800, reaching −80 at P = 1000. The region between 0 and 800 is labelled "rate positive: P increases" and the region beyond 800 is labelled "rate negative: P decreases".</desc>
<rect x="0" y="0" width="560" height="350" fill="#ffffff"/>
<line x1="80" y1="170" x2="510" y2="170" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="305" x2="80" y2="35" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="164" y1="166" x2="164" y2="174"/><line x1="248" y1="166" x2="248" y2="174"/><line x1="332" y1="166" x2="332" y2="174"/><line x1="416" y1="166" x2="416" y2="174"/><line x1="500" y1="166" x2="500" y2="174"/>
<line x1="76" y1="40" x2="84" y2="40"/><line x1="76" y1="105" x2="84" y2="105"/><line x1="76" y1="235" x2="84" y2="235"/><line x1="76" y1="300" x2="84" y2="300"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="164" y="188">200</text><text x="248" y="188">400</text><text x="332" y="188">600</text><text x="416" y="188">800</text><text x="500" y="188">1000</text>
<text x="300" y="335" font-size="13">population P (deer)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="44">80</text><text x="70" y="109">40</text><text x="70" y="174">0</text><text x="70" y="239">−40</text><text x="70" y="304">−80</text>
</g>
<text x="24" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 170)">rate dP/dt (deer per year)</text>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,170.0 90.5,157.4 101.0,145.6 111.5,134.7 122.0,124.5 132.5,115.2 143.0,106.6 153.5,98.9 164.0,92.0 174.5,85.9 185.0,80.6 195.5,76.2 206.0,72.5 216.5,69.7 227.0,67.6 237.5,66.4 248.0,66.0 258.5,66.4 269.0,67.6 279.5,69.7 290.0,72.5 300.5,76.2 311.0,80.6 321.5,85.9 332.0,92.0 342.5,98.9 353.0,106.6 363.5,115.2 374.0,124.5 384.5,134.7 395.0,145.6 405.5,157.4 416.0,170.0 426.5,183.4 437.0,197.6 447.5,212.7 458.0,228.5 468.5,245.2 479.0,262.6 489.5,280.9 500.0,300.0"/>
<line x1="248" y1="66" x2="248" y2="170" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="6 4"/>
<circle cx="248" cy="66" r="5" fill="#1d2b44"/>
<circle cx="80" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="416" cy="170" r="4" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="258" y="54">maximum: 64 deer/year at P = 400</text>
<text x="150" y="150">rate positive:</text><text x="150" y="164">P increases</text>
<text x="424" y="215">rate negative:</text><text x="424" y="229">P decreases</text>
<text x="422" y="162">P = 800</text>
</g>
</svg>
<figcaption>Figure 1. For dP/dt = 0.0004P(800 − P), the rate is zero at P = 0 and P = 800 (open circles), positive in between and negative above 800. It is greatest, 64 deer per year, at P = 400, halfway to the carrying capacity (dashed line).</figcaption>
</figure>

Read four facts from this picture:

1. **Constant solutions.** dy/dt = 0 when y = 0 or y = a. If the quantity starts at one of these values, it stays there.
2. **Direction.** If 0 < y < a, dy/dt > 0, so y increases. If y > a, dy/dt < 0, so y decreases.
3. **Long-run limit.** A solution that starts with y(0) > 0 moves towards a and levels off, because the rate shrinks to 0 as y nears a. So **lim y(t) as t → ∞ = a**. If y(0) = 0, the limit is 0.
4. **Fastest change.** The parabola peaks at **y = a/2** (halfway between its zeros). The greatest rate is k(a/2)(a/2) = **ka²/4**.

**Concavity.** Differentiate dy/dt = k(ay − y²) with respect to t, using the chain rule:

> **d²y/dt² = k(a − 2y) · dy/dt**

For 0 < y < a, dy/dt > 0, so the sign of d²y/dt² is the sign of a − 2y. The graph is **concave up below a/2** and **concave down above a/2**: a point of inflection at y = a/2. For y > a, both factors are negative, so the graph is concave up as it falls towards a.

**When does "fastest" happen?** If 0 < y(0) < a/2, the solution passes through a/2, and that is when it grows fastest. If a/2 ≤ y(0) < a, the rate only falls from the start, so for t ≥ 0 the greatest rate is at t = 0. Questions usually give a starting value below a/2.

## The graph of a logistic solution

<figure>
<svg viewBox="0 0 560 350" role="img" aria-labelledby="sol-title sol-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sol-title">Three solutions of dP/dt = 0.0004P(800 − P) with different starting populations</title>
<desc id="sol-desc">Population P from 0 to 1200 against time t from 0 to 20 years. A horizontal dashed line at P = 800 marks the carrying capacity and a horizontal dotted line at P = 400 marks half of it. A solid S-shaped curve starts at 100, rises slowly, then steeply, crossing P = 400 at about t = 6.1 years, where a filled circle marks the point of inflection, then levels off just below 800. A long-dashed curve starts at 600 and rises to approach 800 from below, concave down. A dash-dot curve starts at 1100 and falls to approach 800 from above, concave up. No curve crosses the line P = 800.</desc>
<rect x="0" y="0" width="560" height="350" fill="#ffffff"/>
<line x1="80" y1="300" x2="510" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="80" y1="310" x2="80" y2="35" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="185" y1="296" x2="185" y2="304"/><line x1="290" y1="296" x2="290" y2="304"/><line x1="395" y1="296" x2="395" y2="304"/><line x1="500" y1="296" x2="500" y2="304"/>
<line x1="76" y1="256.7" x2="84" y2="256.7"/><line x1="76" y1="213.3" x2="84" y2="213.3"/><line x1="76" y1="170" x2="84" y2="170"/><line x1="76" y1="126.7" x2="84" y2="126.7"/><line x1="76" y1="83.3" x2="84" y2="83.3"/><line x1="76" y1="40" x2="84" y2="40"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="80" y="318">0</text><text x="185" y="318">5</text><text x="290" y="318">10</text><text x="395" y="318">15</text><text x="500" y="318">20</text>
<text x="290" y="340" font-size="13">time t (years)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="70" y="260.7">200</text><text x="70" y="217.3">400</text><text x="70" y="174">600</text><text x="70" y="130.7">800</text><text x="70" y="87.3">1000</text><text x="70" y="44">1200</text>
</g>
<text x="24" y="170" font-size="13" fill="#1d2b44" text-anchor="middle" transform="rotate(-90 24 170)">population P (deer)</text>
<line x1="80" y1="126.7" x2="510" y2="126.7" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="8 5"/>
<line x1="80" y1="213.3" x2="510" y2="213.3" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="2 4"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="80.0,278.3 90.5,275.1 101.0,271.5 111.5,267.5 122.0,263.1 132.5,258.2 143.0,252.9 153.5,247.2 164.0,241.2 174.5,234.8 185.0,228.2 195.5,221.4 206.0,214.5 216.5,207.5 227.0,200.7 237.5,194.0 248.0,187.5 258.5,181.4 269.0,175.6 279.5,170.1 290.0,165.1 300.5,160.6 311.0,156.4 321.5,152.7 332.0,149.3 342.5,146.4 353.0,143.7 363.5,141.4 374.0,139.4 384.5,137.6 395.0,136.1 405.5,134.8 416.0,133.6 426.5,132.6 437.0,131.8 447.5,131.0 458.0,130.4 468.5,129.9 479.0,129.4 489.5,129.0 500.0,128.7"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="12 5" points="80.0,170.0 90.5,165.0 101.0,160.4 111.5,156.3 122.0,152.6 132.5,149.2 143.0,146.3 153.5,143.7 164.0,141.4 174.5,139.4 185.0,137.6 195.5,136.1 206.0,134.7 216.5,133.6 227.0,132.6 237.5,131.8 248.0,131.0 258.5,130.4 269.0,129.9 279.5,129.4 290.0,129.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2" stroke-dasharray="12 4 2 4" points="80.0,61.7 90.5,74.2 101.0,83.9 111.5,91.5 122.0,97.6 132.5,102.5 143.0,106.5 153.5,109.7 164.0,112.4 174.5,114.7 185.0,116.6 195.5,118.1 206.0,119.4 216.5,120.6 227.0,121.5 237.5,122.3 248.0,122.9 258.5,123.5 269.0,124.0 279.5,124.4 290.0,124.7"/>
<circle cx="207.7" cy="213.3" r="5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="88" y="56">P(0) = 1100</text>
<text x="88" y="190">P(0) = 600</text>
<text x="88" y="294">P(0) = 100</text>
<text x="218" y="236">inflection: P = 400, t ≈ 6.1</text>
<text x="330" y="118">carrying capacity P = 800</text>
<text x="330" y="206">P = 400 (half of 800)</text>
</g>
</svg>
<figcaption>Figure 2. Every solution with P(0) > 0 approaches the carrying capacity 800. Starting below 400 gives the S-shaped curve (solid), steepest at P = 400 (filled circle). Starting between 400 and 800 (long dashes) the curve rises and is concave down from the start. Starting above 800 (dash-dot) the population falls towards 800.</figcaption>
</figure>

## Worked example 1: a deer population

**Question (no calculator).** The number of deer P in a fenced nature reserve (fictional data) satisfies **dP/dt = 0.0004P(800 − P)**, where t is in years, and P(0) = 100.

(a) Find lim P(t) as t → ∞ and explain what it means.
(b) Find the population when it is growing fastest, and the rate of growth then.
(c) Is the graph of P concave up or concave down at t = 0? Justify.
(d) Rewrite the equation in the form rP(1 − P/800) and explain what r means.
(e) How would the answers to (a) and (b) change if instead P(0) = 1000?

**(a)** The equation has the form kP(a − P) with k = 0.0004 and a = 800. Since P(0) = 100 > 0, **lim P(t) = 800**. In the long run the reserve supports about 800 deer: the carrying capacity.

**(b)** Growth is fastest at P = a/2 = **400 deer**. The rate there is 0.0004 × 400 × 400 = **64 deer per year**. Because 100 < 400, the population does pass through 400.

**(c)** At t = 0, dP/dt = 0.0004 × 100 × 700 = 28 deer per year. Then
d²P/dt² = 0.0004(800 − 2P) · dP/dt = 0.0004 × 600 × 28 = **6.72 deer per year²** > 0.
So the graph is **concave up** at t = 0: the growth rate is still increasing.

**(d)** 0.0004P(800 − P) = 0.0004 × 800 × P(1 − P/800) = **0.32P(1 − P/800)**. So r = 0.32. When P is small compared with 800, the factor (1 − P/800) is close to 1, and the population grows at about 32% of its size per year, just like an exponential model with k = 0.32. As P grows, the factor shrinks and growth slows.

**(e)** The limit is still **800**: the reserve holds more deer than it can support, so dP/dt = 0.0004 × 1000 × (−200) = −80 < 0 and P **decreases** towards 800. P never passes through 400, so there is no "fastest growth at 400"; the population falls fastest at the start, then more and more slowly.

**Checks.** Units: k has units of 1/(deer · year), so k × deer × deer gives deer per year. ✓ The answer to (b) is less than 800 and equals a/2. ✓

## Worked example 2: from a sentence to the model

**Question.** In a school of 1500 students (fictional), a rumour spreads at a rate jointly proportional to the number N of students who have heard it and the number who have not. When 300 students have heard it, it is spreading at 72 students per day. At t = 0 days, 30 students have heard it.

(a) Write a differential equation for N and find the constant of proportionality.
(b) Find lim N(t) as t → ∞ and interpret it.
(c) How many students have heard the rumour when it is spreading fastest? What is that greatest rate?

**(a)** "Have not heard" is 1500 − N. Jointly proportional means the rate is k times the product:

**dN/dt = kN(1500 − N)**.

At N = 300: 72 = k × 300 × 1200 = 360 000k, so **k = 72/360 000 = 0.0002** (per student per day).

**(b)** N(0) = 30 > 0, so **lim N(t) = 1500**. In the model, eventually every student hears the rumour.

**(c)** Fastest when N = 1500/2 = **750 students**. The greatest rate is 0.0002 × 750 × 750 = **112.5 students per day**.

**Interpretation.** Early on the rumour spreads slowly because few people know it. Late on it spreads slowly because few people are left to tell. It spreads fastest when half the school knows.

## Going further (optional): the solution formula

You are not required to solve the logistic equation in this topic. For interest only: separating variables and using partial fractions (Topic 6.12) gives

**y = a / (1 + C e^(−akt))**, with C = a/y(0) − 1.

You can check this by differentiating (Topic 7.2). For Worked example 2, ak = 1500 × 0.0002 = 0.3 and C = 1500/30 − 1 = 49, so N(t) = 1500/(1 + 49e^(−0.3t)). It gives N(0) = 30 ✓ and reaches 750 when 49e^(−0.3t) = 1, at t = ln 49 / 0.3 ≈ 12.973 days (calculator). For the deer, P = 800/(1 + 7e^(−0.32t)) reaches 400 at t = ln 7 / 0.32 ≈ 6.081 years, the inflection point in Figure 2.

## Common misconceptions

- **"The carrying capacity is the number outside the bracket."** In 0.0004P(800 − P), 0.0004 is k and 800 is a. In 0.32P(1 − P/800), 0.32 is r, not a.
- **Not factoring first.** In dP/dt = 0.3P − 0.0006P², the capacity is 0.3/0.0006 = 500, not 0.3 and not 0.0006.
- **"Growth is fastest at the carrying capacity."** At y = a the rate is 0. The fastest rate is at a/2.
- **Giving the time instead of the value.** "Fastest when y = a/2" answers the question asked in this topic. The time needs the solution formula.
- **"The limit depends on where you start."** Any positive start gives limit a. Only y(0) = 0 gives 0.
- **"A population above a can't happen."** It can (for example after animals are moved in). The model says it then decreases towards a.
- **Thinking k is a percentage growth rate.** In ky(a − y), the relative rate is k(a − y), which changes as y changes.
- **Treating logistic and exponential models as the same.** dy/dt = ky never levels off; dy/dt = ky(a − y) always does.

## Where this leads

Logistic models close Unit 7. Unit 8 turns to applications of integration, starting with the average value of a function. Logistic equations also make good Euler’s method exercises, since Topic 7.5 needs only the equation and a starting point.

Next topic: [Finding the Average Value of a Function on an Interval](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-study-guide/). Previous topic: [Exponential Models with Differential Equations](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/). See also [Euler’s method](/advanced-course-resources/calculus-bc/7-5-approximating-solutions-eulers-method-study-guide/). Return to the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap) to see the order.

Try the [practice questions](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-revision-notes/) and the [checklist](/advanced-course-resources/calculus-bc/7-9-logistic-models-differential-equations-checklist/) to consolidate.
