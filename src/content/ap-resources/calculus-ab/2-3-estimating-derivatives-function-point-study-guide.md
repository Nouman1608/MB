---
resourceId: "mb-ap-calcab-2.3-study-guide"
title: "Estimating Derivatives of a Function at a Point: Study Guide (Calculus AB 2.3)"
description: "Learn how to estimate a derivative at a point from a table, from a graph with a tangent line, and with a calculator, and how to show the difference quotient that earns credit."
course: "calculus-ab"
unit: 2
topics: ["2.3"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Average rate of change as a difference quotient (Topic 2.1)"
  - "The derivative at a point as a limit of a difference quotient, and the notation f′(a) (Topic 2.2)"
  - "Gradient of a straight line through two points"
prerequisiteResources: ["mb-ap-calcab-2.2-study-guide"]
learningObjectives:
  - "Estimate f′(a) from a table by choosing a short interval that contains a and writing the difference quotient"
  - "Estimate f′(a) from a graph by finding the gradient of the tangent line, and read the sign of f′ from the graph"
  - "Compare forward, backward and symmetric difference quotients and say which is usually most accurate"
  - "Use a graphing calculator to find the value of a derivative at a point and record the setup and a three-decimal answer"
  - "Interpret a derivative estimate in context with correct units"
skills: ["1", "2", "4"]
studyMinutes: 40
difficulty: "foundation"
calculator: "mixed"
calculatorNote: "Table and graph estimates need only arithmetic. Worked example 3 uses a graphing calculator's numerical derivative; decimals are rounded to 3 or 4 places as stated."
related: ["mb-ap-calcab-2.3-revision-notes", "mb-ap-calcab-2.3-practice", "mb-ap-calcab-2.3-checklist"]
next: "mb-ap-calcab-2.3-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "f′(a) is a limit, so from a table or graph you can only estimate it, with the gradient of a short secant or of a drawn tangent."
  - "From a table, use the data points closest to a on an interval that contains a, and write the difference quotient, for example (f(5) − f(3))/(5 − 3)."
  - "A symmetric difference quotient, (f(a + h) − f(a − h))/(2h), is usually closer to f′(a) than a one-sided one."
  - "Units of f′ are units of f per unit of x. Interpret the sign: positive means increasing, negative means decreasing."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 2.3 is common content, so the same page serves AB and BC students."
  - question: "Which two table values should I use?"
    answer: "The closest values that give an interval containing the point. If the point is in the table, the two neighbours on either side usually give the best estimate; using the point and one neighbour is also a valid estimate."
  - question: "Can I just write the calculator's answer?"
    answer: "Write what you are finding, such as f′(3), then the value to three decimal places. The setup shows which derivative the calculator found."
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

This page has no equation renderer, so limits are written in a compact form:

**f′(a) = lim (h → 0) (f(a + h) − f(a))/h**

means "f-prime of a is the limit as h approaches 0 of the difference quotient". The symbol **≈** means "is approximately". On paper, use the usual layout with "h → 0" under "lim".

## Why estimate a derivative?

In Topic 2.2 you defined f′(a) as the limit of a difference quotient. When you have a formula and the algebra works, you can find that limit exactly. Often you cannot:

- the function is only known from a **table** of measurements,
- the function is only known from a **graph**,
- you have a formula, but not yet the rules to differentiate it.

In each case you **estimate** the derivative. The idea is simple. The derivative is the gradient of the tangent line, and the gradient of a secant line over a short interval is close to it. So a difference quotient with a small, nonzero h is an estimate of f′(a).

## Three difference quotients

Let h be a small positive number.

| Name | Formula | Secant through |
|---|---|---|
| Forward | (f(a + h) − f(a))/h | a and a point to the right |
| Backward | (f(a) − f(a − h))/h | a point to the left and a |
| Symmetric (central) | (f(a + h) − f(a − h))/(2h) | a point on each side of a |

All three are average rates of change, as in Topic 2.1. All three approach f′(a) as h → 0 when f is differentiable at a. For the same h, the **symmetric** one is usually the most accurate, because errors on the left and right partly cancel.

A quick test: f(x) = 1/x at a = 2, with h = 0.1. The exact value, from the limit definition in Topic 2.2, is f′(2) = −1/4 = −0.25.

- Forward: (1/2.1 − 1/2)/0.1 ≈ (0.47619 − 0.5)/0.1 ≈ −0.2381
- Backward: (1/2 − 1/1.9)/0.1 ≈ (0.5 − 0.52632)/0.1 ≈ −0.2632
- Symmetric: (1/2.1 − 1/1.9)/0.2 ≈ (0.47619 − 0.52632)/0.2 ≈ −0.2506

The one-sided estimates are off by more than 0.01. The symmetric one is off by less than 0.001.

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="sec-title sec-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="sec-title">Graph of y = 8/x with the tangent line at x = 4 and the symmetric secant through x = 3 and x = 5</title>
<desc id="sec-desc">A decreasing curve y = 8/x drawn for x from 1.6 to 7. Three points are marked on it: A at (3, 2.67), P at (4, 2) and B at (5, 1.6). A solid straight line touches the curve at P; this is the tangent, with gradient −0.5. A dashed straight line passes through A and B; this is the symmetric secant, with gradient about −0.53. The two lines are almost parallel, which shows that the symmetric secant's gradient is a good estimate of the tangent's gradient.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="40" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="320" x2="60" y2="30" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="120" y="317">1</text><text x="180" y="317">2</text><text x="240" y="317">3</text><text x="300" y="317">4</text><text x="360" y="317">5</text><text x="420" y="317">6</text><text x="480" y="317">7</text>
<text x="506" y="295">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="254">1</text><text x="53" y="204">2</text><text x="53" y="154">3</text><text x="53" y="104">4</text><text x="53" y="54">5</text>
<text x="53" y="36">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="120" y1="296" x2="120" y2="304"/><line x1="180" y1="296" x2="180" y2="304"/><line x1="240" y1="296" x2="240" y2="304"/><line x1="300" y1="296" x2="300" y2="304"/><line x1="360" y1="296" x2="360" y2="304"/><line x1="420" y1="296" x2="420" y2="304"/><line x1="480" y1="296" x2="480" y2="304"/>
<line x1="56" y1="250" x2="64" y2="250"/><line x1="56" y1="200" x2="64" y2="200"/><line x1="56" y1="150" x2="64" y2="150"/><line x1="56" y1="100" x2="64" y2="100"/><line x1="56" y1="50" x2="64" y2="50"/>
</g>
<path d="M156.0 50.0 L168.0 77.8 L180.0 100.0 L192.0 118.2 L204.0 133.3 L216.0 146.2 L228.0 157.1 L240.0 166.7 L252.0 175.0 L264.0 182.4 L276.0 188.9 L288.0 194.7 L300.0 200.0 L312.0 204.8 L324.0 209.1 L336.0 213.0 L348.0 216.7 L360.0 220.0 L372.0 223.1 L384.0 225.9 L396.0 228.6 L408.0 231.0 L420.0 233.3 L432.0 235.5 L444.0 237.5 L456.0 239.4 L468.0 241.2 L480.0 242.9" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<line x1="120" y1="125" x2="480" y2="275" stroke="#1d2b44" stroke-width="2"/>
<line x1="150" y1="126.7" x2="450" y2="260" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<circle cx="240" cy="166.7" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="300" cy="200" r="5" fill="#1d2b44"/>
<circle cx="360" cy="220" r="5" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<text x="232" y="194" font-size="13" fill="#1d2b44" text-anchor="end">A (3, 8/3)</text>
<text x="300" y="186" font-size="13" fill="#1d2b44">P (4, 2)</text>
<text x="372" y="214" font-size="13" fill="#1d2b44">B (5, 1.6)</text>
<text x="170" y="75" font-size="13" fill="#1d2b44">y = 8/x</text>
<text x="290" y="60" font-size="12" fill="#1d2b44">solid: tangent at P, gradient −0.5</text>
<text x="290" y="78" font-size="12" fill="#1d2b44">dashed: secant AB, gradient ≈ −0.53</text>
</svg>
<figcaption>Figure 1. For y = 8/x at x = 4 with h = 1, the forward secant (P to B) has gradient −0.4, the backward secant (A to P) has gradient about −0.67, and the symmetric secant (A to B, dashed) has gradient about −0.53. The tangent (solid) has gradient −0.5. The symmetric secant is nearly parallel to the tangent. Axes are unitless.</figcaption>
</figure>

## Estimating from a table

A table gives values at only some x values, so you cannot let h → 0. Use the data you have:

1. **Find the closest data points** that give an interval **containing a**. If a is in the table, use its neighbours on both sides (or a and one neighbour). If a lies between two table values, use those two.
2. **Write the difference quotient** with the actual table values, for example (f(5) − f(3))/(5 − 3). This shows your method, and on the exam the structure itself is expected, not just the number.
3. **Divide by the change in x**, not by the number of rows. Tables are often unevenly spaced.
4. **Attach units**: units of f per unit of x.

Never use an interval that does not contain a. The gradient over [8, 12] says nothing reliable about the rate at t = 5.

### Special cases in a table

- **a is the first or last entry.** Only a one-sided quotient is possible. Use a and its single neighbour. That is still a valid estimate; just know it is likely to be less accurate.
- **a is exactly halfway between two entries.** Then the quotient over those two entries is a symmetric quotient centred on a. That is the best estimate the table allows.
- **a is in the table and the spacing is even.** The quotient over the two neighbours is a symmetric quotient. It equals the average of the backward and forward quotients, so it uses information from both sides.
- **The data are noisy measurements.** A very short interval is not always better: a small measuring error divided by a small change in x can give a wild estimate. With real data, a sensible interval that contains a beats a tiny one.

### Writing a complete answer

A complete table-based answer has three parts:

1. **The quotient with values**, for example T′(4) ≈ (T(5) − T(3))/(5 − 3) = (71 − 78)/2.
2. **The value with units**: −3.5 °C per minute.
3. **An interpretation**, when asked: name the moment, the quantity, the direction and the rate. "At t = 4 minutes, the temperature of the tea is decreasing at about 3.5 °C per minute."

Avoid "the temperature is −3.5 °C" and "the temperature falls 7 °C". The first confuses a rate with a value. The second is the total change from t = 3 to t = 5, not a rate at an instant.

## Estimating from a graph

On a graph, f′(a) is the gradient of the tangent line at (a, f(a)).

- If the tangent is drawn, pick **two points on the tangent line** (not on the curve) that sit on grid corners, then compute rise ÷ run.
- If it is not drawn, place a ruler so it touches the curve at the point without crossing it nearby, and use two points on the ruler's line. Or use a short symmetric secant through points of the curve just either side of a.
- Read the **sign** first: where the graph rises left to right, f′ > 0; where it falls, f′ < 0; at a smooth peak or trough, the tangent is horizontal and f′ = 0. Your number should match this sign.

## Using technology

A graphing calculator can compute the value of a derivative at a point numerically. On the exam this is one of the required calculator capabilities. Many calculators do it with a symmetric difference quotient and a very small h, so the result is itself an estimate, usually accurate to many decimal places.

Good habits:

- Write the **setup** in ordinary notation, such as f′(3), then the result. Calculator keystrokes are not maths.
- Give decimals **correct to three places** after the decimal point unless told otherwise. Store long intermediate values in the calculator rather than retyping rounded ones.
- Use **radian mode** for trig functions.

## Worked example 1: a table with uneven spacing

**Question.** A cup of tea cools in a room. Its temperature T(t), in °C, is measured t minutes after it is poured. The data are invented for practice.

| t (minutes) | 0 | 3 | 5 | 8 | 12 |
|---|---|---|---|---|---|
| T(t) (°C) | 90 | 78 | 71 | 63 | 55 |

(a) Estimate T′(4). (b) Estimate T′(5) and explain your choice. (c) Interpret your answer to (a).

**(a)**

1. 4 is not in the table. The closest values either side are t = 3 and t = 5, so use [3, 5].
2. Write the quotient: **T′(4) ≈ (T(5) − T(3))/(5 − 3) = (71 − 78)/2 = −3.5**
3. Units: °C per minute. So **T′(4) ≈ −3.5 °C per minute**.

**(b)** 5 is in the table. Three estimates use the nearest data:

- Backward, [3, 5]: (71 − 78)/2 = −3.5
- Forward, [5, 8]: (63 − 71)/3 ≈ −2.667
- Using both neighbours, [3, 8]: (63 − 78)/(8 − 3) = −15/5 = **−3**

All three are valid estimates. Using both neighbours puts t = 5 inside the interval, so it balances the faster cooling before t = 5 against the slower cooling after it. A good answer is **T′(5) ≈ −3 °C per minute**, with the quotient shown.

**(c)** At t = 4 minutes, the temperature of the tea is **decreasing** at about 3.5 °C per minute. The negative sign means falling; the size says how fast.

**Check.** The average rates on successive intervals are −4, −3.5, about −2.7 and −2 °C per minute. They shrink in size, which fits tea cooling more slowly as it nears room temperature. The estimates sit in that pattern.

## Worked example 2: reading a tangent line on a graph

**Question.** Figure 2 shows the graph of a function g and the line tangent to it at x = 3. The tangent passes through the grid points (1, 1) and (5, 4).

(a) Estimate g′(3). (b) Estimate the value of x where g′(x) = 0. (c) Is g′(5.5) positive or negative?

<figure>
<svg viewBox="0 0 520 350" role="img" aria-labelledby="tan-title tan-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tan-title">Graph of g with its tangent line at x = 3 drawn on a grid</title>
<desc id="tan-desc">A curve g drawn for x from 1 to 6. It starts at (1, 0), rises through (2, 1.5), (3, 2.5) and (4, 3), reaches a smooth peak of about 3.06 at x = 4.5, then falls through (5, 3) to (6, 2.5). A straight line touches the curve at P (3, 2.5). The line passes through the grid points (1, 1) and (5, 4), which are marked with small squares. Light grid lines are drawn at every whole number on both axes.</desc>
<rect x="0" y="0" width="520" height="350" fill="#ffffff"/>
<g stroke="#c9d1dc" stroke-width="1">
<line x1="130" y1="20" x2="130" y2="320"/><line x1="200" y1="20" x2="200" y2="320"/><line x1="270" y1="20" x2="270" y2="320"/><line x1="340" y1="20" x2="340" y2="320"/><line x1="410" y1="20" x2="410" y2="320"/><line x1="480" y1="20" x2="480" y2="320"/>
<line x1="60" y1="260" x2="480" y2="260"/><line x1="60" y1="200" x2="480" y2="200"/><line x1="60" y1="140" x2="480" y2="140"/><line x1="60" y1="80" x2="480" y2="80"/><line x1="60" y1="20" x2="480" y2="20"/>
</g>
<line x1="45" y1="320" x2="500" y2="320" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="335" x2="60" y2="12" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="130" y="337">1</text><text x="200" y="337">2</text><text x="270" y="337">3</text><text x="340" y="337">4</text><text x="410" y="337">5</text><text x="480" y="337">6</text>
<text x="507" y="324">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="53" y="264">1</text><text x="53" y="204">2</text><text x="53" y="144">3</text><text x="53" y="84">4</text><text x="53" y="24">5</text>
</g>
<line x1="60" y1="305" x2="480" y2="35" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<path d="M130.0 320.0 L144.0 299.6 L158.0 280.4 L172.0 262.4 L186.0 245.6 L200.0 230.0 L214.0 215.6 L228.0 202.4 L242.0 190.4 L256.0 179.6 L270.0 170.0 L284.0 161.6 L298.0 154.4 L312.0 148.4 L326.0 143.6 L340.0 140.0 L354.0 137.6 L368.0 136.4 L382.0 136.4 L396.0 137.6 L410.0 140.0 L424.0 143.6 L438.0 148.4 L452.0 154.4 L466.0 161.6 L480.0 170.0" fill="none" stroke="#1d2b44" stroke-width="2.5"/>
<rect x="125" y="255" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="405" y="75" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="270" cy="170" r="5" fill="#1d2b44"/>
<text x="141" y="276" font-size="12" fill="#1d2b44">(1, 1)</text>
<text x="388" y="70" font-size="12" fill="#1d2b44" text-anchor="end">(5, 4)</text>
<text x="282" y="186" font-size="13" fill="#1d2b44">P (3, 2.5)</text>
<text x="430" y="190" font-size="13" fill="#1d2b44">y = g(x)</text>
<text x="150" y="40" font-size="12" fill="#1d2b44">dashed: tangent at P</text>
</svg>
<figcaption>Figure 2. The graph of g (solid curve) and its tangent at x = 3 (dashed line). Squares mark two grid points on the tangent. The curve peaks at about x = 4.5 and falls after that. Axes are unitless.</figcaption>
</figure>

**(a)**

1. Use the two grid points **on the tangent**, (1, 1) and (5, 4). Do not use points on the curve.
2. Gradient = rise ÷ run = (4 − 1)/(5 − 1) = **3/4**.
3. So **g′(3) ≈ 0.75**.

**Check the sign.** The curve rises through x = 3, so g′(3) > 0. The answer agrees.

**(b)** g′(x) = 0 where the tangent is horizontal. That is at the smooth peak, **x ≈ 4.5**.

**(c)** For x a little more than 4.5 the curve falls, so **g′(5.5) is negative**.

**A secant check.** Points on the curve at x = 2 and x = 4 are about (2, 1.5) and (4, 3). The symmetric secant gradient is (3 − 1.5)/(4 − 2) = 0.75, which agrees. The forward secant from x = 3 to x = 4 gives (3 − 2.5)/1 = 0.5, a poorer estimate.

## Worked example 3: with a calculator

**Question.** Let f(x) = 2ˣ. You do not yet have a rule for this derivative. (a) Use a graphing calculator to find f′(3). (b) Compare forward and symmetric difference quotients for h = 0.1, 0.01 and 0.001.

**(a)** Use the numerical derivative feature at x = 3. Write: **f′(3) ≈ 5.545** (calculator). The setup "f′(3)" tells a reader which derivative you found.

**(b)** Values rounded to 4 decimal places:

| h | Forward (f(3 + h) − f(3))/h | Symmetric (f(3 + h) − f(3 − h))/(2h) |
|---|---|---|
| 0.1 | 5.7419 | 5.5496 |
| 0.01 | 5.5644 | 5.5452 |
| 0.001 | 5.5471 | 5.5452 |

For h = 0.1, the forward estimate is about 0.2 too high, while the symmetric one is within 0.005. Shrinking h improves both, but the symmetric estimate settles much sooner. This is why calculators commonly use the symmetric form.

**Interpretation.** Near x = 3, 2ˣ increases by about 5.545 units for each unit increase in x. You will be able to find this derivative exactly later, once you have the rule for eˣ (Topic 2.7) and the chain rule (Topic 3.1).

## Common misconceptions

- **Dividing f(a) by a.** f′(a) is a rate of change between two points, not f(a)/a.
- **Dividing by the number of rows.** Divide by the change in x. Uneven tables make this matter.
- **Using an interval that does not contain a.** An interval far from a measures change somewhere else.
- **Using points on the curve when a tangent is drawn.** The tangent's gradient is the derivative; read two points on the line.
- **Writing only the number.** Show the difference quotient with table values. A bare number hides your method.
- **Treating an estimate as exact.** Use ≈. A table or graph never proves the exact value.
- **Wrong or missing units.** Units are "units of f per unit of x", such as °C per minute.
- **Trusting the calculator blindly.** A symmetric difference quotient can return a number even where the derivative does not exist, such as at a corner. Topic 2.4 explains when that happens.
- **Degree mode for trig functions.** Calculus uses radians.

## Where this leads

Topic 2.4 asks when a derivative exists at all, and shows why a calculator's number can be misleading at a corner or cusp. From Topic 2.5 onwards you will find many derivatives exactly with rules, and use estimates like these to check them. Table-based estimates return throughout the course, in context problems on rates, motion and accumulation. Read on with [Topic 2.4: Connecting Differentiability and Continuity](/advanced-course-resources/calculus-ab/2-4-connecting-differentiability-continuity-determining-when-study-guide/), or return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/2-3-estimating-derivatives-function-point-checklist/) to consolidate. If the limit definition feels shaky, revisit [Topic 2.2](/advanced-course-resources/calculus-ab/2-2-defining-derivative-function-derivative-notation-study-guide/).
