---
resourceId: "mb-ap-calcab-8.1-study-guide"
title: "Finding the Average Value of a Function on an Interval: Study Guide (Calculus AB 8.1)"
description: "Learn why the average value of a function is an integral divided by the interval length, what it means on a graph, and how to find it from formulas, tables and graphs."
course: "calculus-ab"
unit: 8
topics: ["8.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "The definite integral as a limit of Riemann sums and as signed area (Topics 6.1 to 6.3)"
  - "Evaluating definite integrals with antiderivatives (Topic 6.7)"
  - "Trapezoidal sums from tables (Topic 6.2)"
  - "Average rate of change (Topic 2.1)"
prerequisiteResources: ["mb-ap-calcab-7.8-study-guide"]
learningObjectives:
  - "Explain why the average value of a continuous function on [a, b] is the definite integral divided by b − a"
  - "Find the average value of a function given by a formula, with and without a calculator"
  - "Estimate an average value from a table using a Riemann or trapezoidal sum, and find one from a graph using signed areas"
  - "Interpret the average value as the height of a rectangle with the same signed area, and state its units in context"
  - "Tell the average value of a function apart from its average rate of change"
skills: ["1", "2", "4"]
studyMinutes: 40
difficulty: "core"
calculator: "mixed"
calculatorNote: "Worked examples 1 to 3 are done by hand. The section on technology shows a calculator-active case; give calculator answers correct to three decimal places."
related: ["mb-ap-calcab-8.1-revision-notes", "mb-ap-calcab-8.1-practice", "mb-ap-calcab-8.1-checklist"]
next: "mb-ap-calcab-8.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The average value of a continuous function f on [a, b] is (1/(b − a)) ∫ (a to b) f(x) dx."
  - "It is the height of the rectangle on [a, b] whose area equals the signed area under f."
  - "The average value has the same units as f. It can be negative, and it is not usually the average of f(a) and f(b)."
  - "Average value uses an integral of f. Average rate of change uses only f(a) and f(b): (f(b) − f(a))/(b − a)."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 8.1 is common content, so the same page serves AB and BC students."
  - question: "Why not just add up some values of f and divide by how many there are?"
    answer: "That only uses a few points, and it treats unequal gaps as if they were equal. The integral uses every value of f on the interval, weighted by how long f spends near it. A list average is only an estimate, and only when the points are equally spaced."
  - question: "Does the function actually reach its average value?"
    answer: "If f is continuous on [a, b], yes: there is at least one c in [a, b] with f(c) equal to the average value. This follows from the Intermediate Value Theorem. There can be more than one such c."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so integrals are written in a compact form: **∫ (a to b) f(x) dx** means the definite integral of f(x) from x = a to x = b. On paper, write a at the bottom of the integral sign and b at the top. The average value of f on [a, b] is often written **f_avg**.

## From averaging a list to averaging a function

To average five test scores, you add them and divide by 5. A function on an interval has infinitely many values, so you cannot list them all. But you can sample.

Take f(x) = x² on [0, 3]. Split [0, 3] into n equal pieces of width Δx = 3/n and take the value of f at the right end of each piece. The average of those n values is

**(f(x₁) + f(x₂) + … + f(xₙ)) / n**

Since n = 3/Δx, dividing by n is the same as multiplying by Δx/3. So the sample average is

**(1/3) × [f(x₁)Δx + f(x₂)Δx + … + f(xₙ)Δx]**

The bracket is a right Riemann sum. As n grows, it approaches ∫ (0 to 3) x² dx. Here is what happens to the sample average:

| Number of samples n | Sample average |
|---|---|
| 3 | 4.667 |
| 6 | 3.792 |
| 100 | 3.045 |
| 1000 | 3.005 |

The values settle down towards 3. And (1/3) ∫ (0 to 3) x² dx = (1/3)(9) = 3. The "3" in front is the length of the interval. That is the whole idea.

## The definition

> **Average value.** If f is continuous on [a, b], the average value of f on [a, b] is
> **f_avg = (1/(b − a)) ∫ (a to b) f(x) dx**

Read it as "total accumulated amount, shared out evenly over the interval".

**Units.** The integral has units of f times units of x. Dividing by b − a (units of x) leaves the **units of f**. If f(t) is a temperature in °C and t is in hours, the average value is in °C, not °C·hours.

**Signs.** The integral is a signed area, so the average value can be negative or zero. A function that spends more time below the axis than above it has a negative average.

## The picture: a rectangle with the same area

Rearrange the definition: f_avg × (b − a) = ∫ (a to b) f(x) dx. The left side is the area of a rectangle with base b − a and height f_avg. So:

> **The average value is the height of the rectangle on [a, b] that has the same signed area as the region under f.**

<figure>
<svg viewBox="0 0 520 330" role="img" aria-labelledby="avg-title avg-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="avg-title">The average value of y = x² on [0, 3] as the height of a rectangle</title>
<desc id="avg-desc">The curve y = x² rises from (0, 0) to (3, 9). A dashed horizontal line at height 3 runs from x = 0 to x = 3, forming the top of a rectangle of width 3 and height 3, with area 9, the same as the area under the curve. On the left, between x = 0 and x = √3, the curve lies below the dashed line; the gap between them is filled with dots and labelled "gap". On the right, between x = √3 and x = 3, the curve lies above the dashed line; the extra region is hatched and labelled "extra". The two regions have equal area. The curve crosses the dashed line at x = √3, about 1.73, marked with a filled point labelled c.</desc>
<defs><pattern id="avg-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="#1d2b44" stroke-width="1" opacity="0.45"/></pattern><pattern id="avg-dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="1.3" fill="#1d2b44" opacity="0.6"/></pattern></defs>
<rect x="0" y="0" width="520" height="330" fill="#ffffff"/>
<path d="M70,206 L277.8,206 L264.9,216.2 L251.9,225.7 L238.9,234.5 L225.9,242.8 L212.9,250.3 L199.9,257.2 L186.9,263.4 L173.9,269.0 L160.9,273.9 L147.9,278.2 L135.0,281.8 L122.0,284.8 L109.0,287.0 L96.0,288.7 L83.0,289.7 L70.0,290.0 Z" fill="url(#avg-dots)" stroke="none"/>
<path d="M277.8,206.0 L287.4,198.1 L296.9,189.9 L306.4,181.4 L315.9,172.4 L325.4,163.2 L334.9,153.6 L344.4,143.6 L353.9,133.3 L363.4,122.6 L372.9,111.6 L382.5,100.2 L392.0,88.4 L401.5,76.4 L411.0,63.9 L420.5,51.1 L430.0,38.0 L430,206 Z" fill="url(#avg-hatch)" stroke="none"/>
<line x1="40" y1="290" x2="490" y2="290" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="70" y1="310" x2="70" y2="20" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="306">0</text><text x="190" y="306">1</text><text x="310" y="306">2</text><text x="430" y="306">3</text><text x="495" y="294">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="62" y="210">3</text><text x="62" y="126">6</text><text x="62" y="42">9</text><text x="62" y="24">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="190" y1="286" x2="190" y2="294"/><line x1="310" y1="286" x2="310" y2="294"/><line x1="430" y1="286" x2="430" y2="294"/>
<line x1="66" y1="206" x2="74" y2="206"/><line x1="66" y1="122" x2="74" y2="122"/><line x1="66" y1="38" x2="74" y2="38"/>
</g>
<line x1="70" y1="206" x2="430" y2="206" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<line x1="430" y1="206" x2="430" y2="290" stroke="#1d2b44" stroke-width="2" stroke-dasharray="7 5"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,290.0 82.0,289.7 94.0,288.9 106.0,287.5 118.0,285.5 130.0,283.0 142.0,279.9 154.0,276.3 166.0,272.1 178.0,267.3 190.0,262.0 202.0,256.1 214.0,249.7 226.0,242.7 238.0,235.1 250.0,227.0 262.0,218.3 274.0,209.1 286.0,199.3 298.0,188.9 310.0,178.0 322.0,166.5 334.0,154.5 346.0,141.9 358.0,128.7 370.0,115.0 382.0,100.7 394.0,85.9 406.0,70.5 418.0,54.5 430.0,38.0"/>
<circle cx="277.8" cy="206" r="5" fill="#1d2b44"/>
<line x1="277.8" y1="211" x2="277.8" y2="290" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<text x="272" y="280" font-size="12" fill="#1d2b44" text-anchor="end">c = √3</text>
<text x="150" y="232" font-size="13" fill="#1d2b44">gap</text>
<text x="400" y="185" font-size="13" fill="#1d2b44">extra</text>
<text x="140" y="196" font-size="13" fill="#1d2b44">height 3 = average value</text>
<text x="250" y="60" font-size="13" fill="#1d2b44">y = x²</text>
</svg>
<figcaption>Figure 1. The area under y = x² on [0, 3] is 9. A rectangle of width 3 needs height 3 to have area 9, so the average value is 3. The dotted gap (where the curve is below 3) and the hatched extra (where it is above 3) have equal areas, so "levelling off" the curve fills the gap exactly. The curve meets its average value at c = √3 ≈ 1.732. Axes are unitless.</figcaption>
</figure>

Think of the region as water in a tank with a curved surface. If the water settles flat, its level is the average value. The "extra" water flows into the "gap".

**The function reaches its average.** If f is continuous on [a, b], the average value lies between the smallest and largest values of f there. By the Intermediate Value Theorem, there is at least one c in [a, b] with f(c) = f_avg. (This result is sometimes called the Mean Value Theorem for integrals. You may use the idea, but questions will usually just ask you to find c.) In Figure 1, c = √3. Note that c is **not** the midpoint of the interval, and there may be several such c.

**Not the middle of the range.** In Figure 1, f runs from 0 to 9, but the average is 3, not 4.5. The curve spends most of its time low and shoots up near the end. A function can also have an average above the middle of its range, as in Worked example 1.

## Average value or average rate of change?

These two are easy to mix up. Keep them apart:

| | Average value of f | Average rate of change of f |
|---|---|---|
| Formula | (1/(b − a)) ∫ (a to b) f(x) dx | (f(b) − f(a))/(b − a) |
| Uses | every value of f on [a, b] | only f(a) and f(b) |
| Units | units of f | units of f per unit of x |
| Picture | height of the equal-area rectangle | slope of the secant line |

**The link.** Apply the average value formula to a derivative f′ instead of f. By the Fundamental Theorem, ∫ (a to b) f′(x) dx = f(b) − f(a). So

**average value of f′ on [a, b] = (f(b) − f(a))/(b − a) = average rate of change of f**

For example, the average value of 3x² on [0, 2] is (1/2)(8) = 4, and the average rate of change of x³ on [0, 2] is (8 − 0)/2 = 4. Always ask: "the average of **which** function?"

## Worked example 1: a formula, by hand

**Question.** Let f(x) = 3√x.
(a) Find the average value of f on [1, 4].
(b) Find every c in [1, 4] with f(c) equal to that average value.

**(a)**

1. **Write the definition.** f_avg = (1/(4 − 1)) ∫ (1 to 4) 3√x dx = (1/3) ∫ (1 to 4) 3x^(1/2) dx.
2. **Antiderivative.** 3x^(1/2) has antiderivative 3 × x^(3/2)/(3/2) = 2x^(3/2).
3. **Evaluate.** 2(4)^(3/2) − 2(1)^(3/2) = 2(8) − 2(1) = 14.
4. **Divide by the length.** f_avg = 14/3 ≈ 4.667.

**(b)** Solve 3√c = 14/3. Then √c = 14/9, so c = 196/81 ≈ 2.420. This is inside [1, 4], so it counts.

**Check.** f(1) = 3 and f(4) = 6, and 14/3 lies between them, as it must. It is a little **above** the middle of the range, 4.5. The graph of 3√x is concave down: it climbs quickly and then flattens out near its top, so it spends more time at high values. Compare Figure 1, where the opposite happens.

Notice also that the average **rate of change** of f on [1, 4] is (6 − 3)/3 = 1. That is a completely different number, in different units.

## Worked example 2: an average from a table

**Question.** The temperature T(t) inside a greenhouse, in °C, is recorded at selected times t, in hours after 6 a.m. (The data are invented.) T is continuous.

| t (hours) | 0 | 2 | 5 | 8 | 12 |
|---|---|---|---|---|---|
| T(t) (°C) | 18 | 22 | 27 | 25 | 19 |

Use a trapezoidal sum with the four subintervals in the table to estimate the average temperature over 0 ≤ t ≤ 12.

1. **Set up.** Average temperature = (1/12) ∫ (0 to 12) T(t) dt. You do not have a formula, so estimate the integral.
2. **Trapezoids.** The widths are unequal (2, 3, 3 and 4 hours), so work out each one:
   - [0, 2]: 2 × (18 + 22)/2 = 40
   - [2, 5]: 3 × (22 + 27)/2 = 73.5
   - [5, 8]: 3 × (27 + 25)/2 = 78
   - [8, 12]: 4 × (25 + 19)/2 = 88
3. **Add.** ∫ (0 to 12) T(t) dt ≈ 40 + 73.5 + 78 + 88 = 279.5 °C·hours.
4. **Divide by the length.** Average ≈ 279.5/12 ≈ **23.29 °C**.

**Interpretation.** Over the 12 hours from 6 a.m., the greenhouse temperature averaged about 23.3 °C. The units are °C, not °C·hours, because you divided by hours.

**Why not average the five readings?** (18 + 22 + 27 + 25 + 19)/5 = 22.2. That treats each reading as if it covered the same length of time. It does not: the reading of 19 at t = 12 is the end of a 4-hour gap, while 18 at t = 0 starts a 2-hour gap. The trapezoidal sum weights each value by the time it represents.

**Read the interval carefully.** If a question asked for the average over 0 ≤ t ≤ 8 instead, you would use only the first three trapezoids and divide by 8, even though the table goes further.

## Worked example 3: an average from a graph

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="we3-title we3-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="we3-title">Graph of g for Worked example 3, with its average value and a secant line</title>
<desc id="we3-desc">The graph of g on 0 ≤ x ≤ 8 is made of four straight segments joining (0, 1), (2, 5), (4, 5), (6, −1) and (8, −1). It crosses the x-axis at x = 17/3, between 5 and 6. A dashed horizontal line at height 9/4 shows the average value. A dotted line joins the end points (0, 1) and (8, −1); its slope, −1/4, is the average rate of change.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="40" y1="250" x2="505" y2="250" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="305" x2="60" y2="25" stroke="#1d2b44" stroke-width="1.5"/>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="170" y="266">2</text><text x="280" y="266">4</text><text x="390" y="266">6</text><text x="500" y="266">8</text><text x="510" y="245">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="294">−1</text><text x="52" y="214">1</text><text x="52" y="134">3</text><text x="52" y="54">5</text><text x="52" y="30">y</text>
</g>
<g stroke="#1d2b44" stroke-width="1">
<line x1="170" y1="246" x2="170" y2="254"/><line x1="280" y1="246" x2="280" y2="254"/><line x1="390" y1="246" x2="390" y2="254"/><line x1="500" y1="246" x2="500" y2="254"/>
<line x1="56" y1="290" x2="64" y2="290"/><line x1="56" y1="210" x2="64" y2="210"/><line x1="56" y1="170" x2="64" y2="170"/><line x1="56" y1="130" x2="64" y2="130"/><line x1="56" y1="90" x2="64" y2="90"/><line x1="56" y1="50" x2="64" y2="50"/>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60,210 170,50 280,50 390,290 500,290"/>
<line x1="60" y1="160" x2="500" y2="160" stroke="#1d2b44" stroke-width="2" stroke-dasharray="8 5"/>
<line x1="60" y1="210" x2="500" y2="290" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="2 4"/>
<text x="300" y="152" font-size="13" fill="#1d2b44">average value 9/4 (dashed)</text>
<text x="150" y="240" font-size="12" fill="#1d2b44">secant, slope −1/4 (dotted)</text>
<text x="190" y="42" font-size="13" fill="#1d2b44">y = g(x)</text>
</svg>
<figcaption>Figure 2. The graph of g in Worked example 3. The dashed line at height 9/4 is the average value of g on [0, 8]. The dotted secant from (0, 1) to (8, −1) has slope −1/4, the average rate of change. Same function, same interval, very different numbers. Axes are unitless.</figcaption>
</figure>

**Question.** The graph of g on [0, 8] is made of straight segments joining (0, 1), (2, 5), (4, 5), (6, −1) and (8, −1), as in Figure 2.
(a) Find the average value of g on [0, 8].
(b) Find the average rate of change of g on [0, 8].
(c) Find every x in [0, 8] where g(x) equals its average value.

**(a)** Find ∫ (0 to 8) g(x) dx from signed areas. For a straight segment, the signed area is width × (average of the two end heights), even if the segment crosses the axis.

- [0, 2]: trapezoid, 2 × (1 + 5)/2 = 6
- [2, 4]: rectangle, 2 × 5 = 10
- [4, 6]: 2 × (5 + (−1))/2 = 4. (Check: the segment crosses the axis at x = 17/3. The triangle above has area 25/6 and the one below has area 1/6, and 25/6 − 1/6 = 4.)
- [6, 8]: rectangle below the axis, 2 × (−1) = −2

Total: 6 + 10 + 4 − 2 = 18. So g_avg = 18/8 = **9/4**.

**(b)** (g(8) − g(0))/(8 − 0) = (−1 − 1)/8 = **−1/4**.

**(c)** The line y = 9/4 meets the graph twice.

- On [0, 2], g(x) = 1 + 2x. Solve 1 + 2x = 9/4: x = **5/8**.
- On [4, 6], g(x) = 5 − 3(x − 4). Solve 5 − 3(x − 4) = 9/4: x − 4 = 11/12, so x = **59/12** ≈ 4.917.

**Interpretation.** The average value is positive because most of the area lies above the axis. The average rate of change is negative because g ends lower than it starts. They answer different questions.

## With technology

Some average values have no antiderivative you can write down. For example, the average value of sin(x²) on [0, 2] is (1/2) ∫ (0 to 2) sin(x²) dx. On a graphing calculator, the numerical integral is about 0.80478, so the average value is about **0.402**. Write the full expression first, then the decimal. In calculator-active questions, keep full accuracy until the last step and give answers correct to three decimal places.

## Common misconceptions

- **Forgetting to divide by b − a.** ∫ (a to b) f(x) dx is the total, not the average.
- **Mixing up average value and average rate of change.** Ask which function is being averaged. The average value of f′ is the average rate of change of f, not the average value of f.
- **"The average value is (f(a) + f(b))/2."** That is true only for linear functions. Worked example 1 and Figure 1 both show it failing.
- **Averaging table entries.** Adding the listed values and dividing by how many there are ignores unequal gaps. Use a sum that weights each value by its width.
- **Wrong units.** The average value has the units of f, not units of f times units of x.
- **Using total (unsigned) area.** Regions below the axis count as negative, so the average value can be negative.
- **Assuming c is the midpoint of [a, b].** The value c with f(c) = f_avg can be anywhere in the interval, and there may be more than one.
- **Using the wrong interval.** If a table runs past the interval in the question, stop at the interval's end and divide by its length.

## Where this leads

The average value turns an accumulation into one representative number. In [Topic 8.2, Connecting Position, Velocity, and Acceleration of Functions Using Integrals](/advanced-course-resources/calculus-ab/8-2-connecting-position-velocity-acceleration-functions-study-guide/), the same idea gives **average velocity**: the average value of v(t) over a time interval, which equals displacement divided by time. Later topics in Unit 8 use integrals for net change in context, then for areas and volumes. If you need to revisit what came just before, see [Topic 7.8](/advanced-course-resources/calculus-ab/7-8-exponential-models-differential-equations-study-guide/). Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/8-1-finding-average-value-function-on-checklist/) to consolidate.
