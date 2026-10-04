---
resourceId: "mb-ap-calcab-1.1-study-guide"
title: "Introducing Calculus: Can Change Occur at an Instant? Study Guide (Calculus AB 1.1)"
description: "Learn why a rate of change at a single instant cannot be found by one division, and how average rates over shrinking intervals lead to it."
course: "calculus-ab"
unit: 1
topics: ["1.1"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Function notation, such as f(3) and f(3 + h)"
  - "Gradient (slope) of a straight line through two points"
  - "Expanding brackets such as (3 + h)²"
learningObjectives:
  - "Calculate an average rate of change over an interval and state its units"
  - "Explain why an average rate of change cannot be calculated over an interval of length zero"
  - "Estimate the rate of change at an instant from average rates over intervals that contain that instant"
  - "Describe how a limit turns a sequence of average rates into an instantaneous rate"
  - "Read rates of change from graphs, tables, formulas and verbal descriptions"
skills: ["1", "2"]
studyMinutes: 35
difficulty: "foundation"
calculator: "not-permitted"
calculatorNote: "Every calculation here is designed to be done by hand. Give rates with units."
related: ["mb-ap-calcab-1.1-revision-notes", "mb-ap-calcab-1.1-practice", "mb-ap-calcab-1.1-checklist"]
next: "mb-ap-calcab-1.1-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "An average rate of change is (change in output) ÷ (change in input) over an interval."
  - "At a single instant the change in input is 0, so the average-rate formula gives 0/0 and cannot be used directly."
  - "Average rates over smaller and smaller intervals containing the instant approach one value. That value is the instantaneous rate of change."
  - "Calculus uses limits to make this idea exact."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 1.1 is common content, so the same page serves AB and BC students."
  - question: "If nothing moves during an instant, how can there be a speed at that instant?"
    answer: "The speed at an instant is not measured during the instant. It is the value that average speeds approach as the time interval around that instant shrinks."
  - question: "Do I need formal limits for this topic?"
    answer: "No. Topic 1.1 builds the idea. Limit notation is defined properly in Topic 1.2."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## A note on notation

This page has no equation renderer, so limits are written in a compact form:

**lim (h → 0) g(h)** means "the limit as h approaches 0 of g(h)": the value g(h) gets close to when h is very close to 0 (but not equal to 0).

You do not need to work with this notation yet. Topic 1.2 defines it carefully. In this topic you only need the idea.

## The question in the title

A speedometer shows a car's speed "right now". But speed is distance divided by time. At one exact instant, no time passes and the car covers no distance. So what does "speed right now" mean?

This is the puzzle calculus was built to solve. The answer has three parts:

1. You *can* calculate an average rate over any interval of time.
2. You *cannot* calculate an average rate over an interval of length zero.
3. You *can* watch what average rates do as the interval shrinks towards zero. If they settle on one value, that value is the rate at the instant.

The rest of this guide works through each part.

## Average rate of change

For a function f, the **average rate of change** of f over the interval from x = a to x = b is

**average rate = (f(b) − f(a)) / (b − a)**

It is the change in the output divided by the change in the input. Some books write it as Δf/Δx, where Δ ("delta") means "change in".

Three ways to see it:

- **Verbally:** how much the output changes, on average, per unit of input.
- **Graphically:** the slope (gradient) of the straight line joining (a, f(a)) and (b, f(b)). This line is called a **secant line**.
- **Units:** output units per input unit. If s(t) is a position in metres and t is a time in seconds, the average rate is in metres per second.

**Example.** A toy cart rolls along a straight track. Its distance from the start is s(t) = t² + 2t metres, t seconds after release. (This is an invented model.)

Between t = 0 and t = 3: s(0) = 0 and s(3) = 9 + 6 = 15. The average velocity is (15 − 0)/(3 − 0) = **5 m/s**.

That is a fair summary of the first 3 seconds. It does not say how fast the cart is moving *at* t = 3. The cart speeds up, so it is moving faster at t = 3 than its average over [0, 3].

## Why one division cannot give the rate at an instant

To get the velocity *at* t = 3, you might try an interval that starts and ends at t = 3:

**(s(3) − s(3)) / (3 − 3) = 0/0**

That is not a number. Division by zero is undefined, and here both the top and the bottom are 0. An average rate divides by the change in the input, so **the average rate is undefined whenever the change in the input would be zero**.

This is not a weakness of the cart example. It is true for every function, every time. A rate needs two different input values. A single instant gives only one.

## Shrinking the interval

The way round the problem is to use intervals that **contain** the instant and get shorter and shorter. Write the interval as running from 3 to 3 + h, where h is a small number. If h is positive, the interval is [3, 3 + h], to the right of 3. If h is negative, it is [3 + h, 3], to the left. Either way, t = 3 is one end of the interval.

The average velocity over that interval is

**(s(3 + h) − s(3)) / h**

Here are values for intervals on both sides of t = 3:

| Interval | h | Average velocity (m/s) |
|---|---|---|
| [3, 4] | 1 | 9 |
| [3, 3.1] | 0.1 | 8.1 |
| [3, 3.01] | 0.01 | 8.01 |
| [3, 3.001] | 0.001 | 8.001 |
| [2.999, 3] | −0.001 | 7.999 |
| [2.99, 3] | −0.01 | 7.99 |
| [2.9, 3] | −0.1 | 7.9 |
| [2, 3] | −1 | 7 |

From the right, the averages fall towards 8. From the left, they rise towards 8. Both sides agree. So the cart's velocity **at** t = 3 is **8 m/s**.

In limit language, the instantaneous rate is

**lim (h → 0) (s(3 + h) − s(3)) / h = 8**

You never put h = 0 into the fraction, because that gives 0/0 again. You look at what happens for h *close to* 0. That is exactly what a limit does, and it is why calculus is built on limits.

> **Key idea.** The rate of change at an instant is the value that the average rates of change approach, as the intervals containing that instant shrink towards zero length.

## Representations: secant lines become a tangent line

<figure>
<svg viewBox="0 0 520 340" role="img" aria-labelledby="secant-title secant-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="secant-title">Secant lines on the graph of s(t) = t² + 2t getting closer to the tangent line at t = 3</title>
<desc id="secant-desc">A rising curve for s(t) = t² + 2t, drawn for t from 0 to 5.4 seconds, with s in metres from 0 to 40. Point P is at (3, 15). Point Q is at (4, 24) and point R is at (5, 35). A long-dashed secant line through P and R has slope 10. A short-dashed secant line through P and Q has slope 9. A dotted line touching the curve at P has slope 8; this is the tangent line. As the second point moves towards P, the secant slopes 10 and 9 move towards the tangent slope 8.</desc>
<rect x="0" y="0" width="520" height="340" fill="#ffffff"/>
<line x1="50" y1="300" x2="500" y2="300" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="310" x2="60" y2="10" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="130" y1="296" x2="130" y2="304"/><line x1="200" y1="296" x2="200" y2="304"/><line x1="270" y1="296" x2="270" y2="304"/><line x1="340" y1="296" x2="340" y2="304"/><line x1="410" y1="296" x2="410" y2="304"/><line x1="480" y1="296" x2="480" y2="304"/>
<line x1="56" y1="230" x2="64" y2="230"/><line x1="56" y1="160" x2="64" y2="160"/><line x1="56" y1="90" x2="64" y2="90"/><line x1="56" y1="20" x2="64" y2="20"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="130" y="318">1</text><text x="200" y="318">2</text><text x="270" y="318">3</text><text x="340" y="318">4</text><text x="410" y="318">5</text><text x="480" y="318">6</text>
<text x="470" y="334">t (seconds)</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="52" y="234">10</text><text x="52" y="164">20</text><text x="52" y="94">30</text><text x="52" y="24">40</text>
</g>
<text x="66" y="14" font-size="12" fill="#1d2b44">s (metres)</text>
<line x1="270" y1="195" x2="270" y2="300" stroke="#1d2b44" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="165" y1="300" x2="445" y2="20" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="12 6"/>
<line x1="165" y1="289.5" x2="438" y2="43.8" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="158" y1="284.6" x2="424" y2="71.8" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/>
<polyline points="60,300 95,291.2 130,279 165,263.2 200,244 235,221.2 270,195 305,165.2 340,132 375,95.2 410,55 438,20.3" fill="none" stroke="#1d2b44" stroke-width="3"/>
<circle cx="270" cy="195" r="5" fill="#1d2b44"/>
<circle cx="340" cy="132" r="4.5" fill="#1d2b44"/>
<circle cx="410" cy="55" r="4.5" fill="#1d2b44"/>
<g font-size="12" fill="#1d2b44">
<text x="280" y="216">P (3, 15)</text>
<text x="332" y="118" text-anchor="end">Q (4, 24)</text>
<text x="400" y="45" text-anchor="end">R (5, 35)</text>
</g>
<g font-size="12" fill="#1d2b44">
<line x1="78" y1="36" x2="118" y2="36" stroke="#1d2b44" stroke-width="3"/><text x="126" y="40">curve s(t) = t² + 2t</text>
<line x1="78" y1="56" x2="118" y2="56" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="12 6"/><text x="126" y="60">secant P to R: slope 10</text>
<line x1="78" y1="76" x2="118" y2="76" stroke="#1d2b44" stroke-width="1.5" stroke-dasharray="5 4"/><text x="126" y="80">secant P to Q: slope 9</text>
<line x1="78" y1="96" x2="118" y2="96" stroke="#1d2b44" stroke-width="2" stroke-dasharray="1.5 3.5" stroke-linecap="round"/><text x="126" y="100">tangent at P: slope 8</text>
</g>
</svg>
<figcaption>Figure 1. Each secant line joins P to a later point on the curve. Its slope is the average velocity over that interval: 10 m/s over [3, 5] and 9 m/s over [3, 4]. As the second point slides towards P, the secant lines tip towards the tangent line at P, whose slope, 8 m/s, is the velocity at t = 3. Lines are told apart by dash pattern and label.</figcaption>
</figure>

The same idea appears in all four representations of the course:

| Representation | Average rate over an interval | Rate at an instant |
|---|---|---|
| Verbal | "On average, the cart covered 9 m each second between t = 3 and t = 4" | "At t = 3 the cart is moving at 8 m/s" |
| Graphical | Slope of a secant line | Slope of the tangent line (the limit of secant slopes) |
| Numerical | One quotient from a table | The value the quotients approach as intervals shrink |
| Analytical | (s(b) − s(a))/(b − a) | lim (h → 0) (s(3 + h) − s(3))/h |

## Worked example 1: a velocity from a formula

**Question.** A small drone climbs vertically. Its height is H(t) = t² + 2t metres at time t seconds (an invented model, the same function as the cart, so you can compare). Use average velocities over intervals [3, 3 + h] to find its velocity at t = 3.

1. **Write the average velocity over [3, 3 + h].** For h ≠ 0:
   **(H(3 + h) − H(3)) / h**
2. **Expand the top.** H(3 + h) = (3 + h)² + 2(3 + h) = 9 + 6h + h² + 6 + 2h = 15 + 8h + h². And H(3) = 15. So the top is 8h + h².
3. **Simplify.** (8h + h²)/h = h(8 + h)/h = **8 + h**, for h ≠ 0.
4. **Read off what happens as the interval shrinks.** The average velocity over [3, 3 + h] is 8 + h. When h is close to 0 (positive or negative), 8 + h is close to 8. This matches the table above.
5. **State the result.** The instantaneous velocity is lim (h → 0) (8 + h) = **8 m/s**.

**Check.** With h = 0.01: H(3.01) = 15.0801, so (15.0801 − 15)/0.01 = 8.01. That is close to 8.

**Interpretation.** At the instant t = 3 seconds, the drone is rising at 8 metres per second. Over the first 3 seconds it averaged only 5 m/s, because it was speeding up.

**Why step 3 is allowed.** Cancelling h needs h ≠ 0. That is fine: every interval you used has h ≠ 0. You never divide by zero; you only ask what the averages approach.

## Worked example 2: an estimate from a table

**Question.** A cup of tea cools on a desk. The table gives its temperature T(t), in °C, t minutes after it was poured. (The data are invented.)

| t (minutes) | 0 | 2 | 4 | 5 | 6 | 8 | 10 |
|---|---|---|---|---|---|---|---|
| T(t) (°C) | 90.0 | 77.3 | 66.9 | 62.5 | 58.4 | 51.5 | 45.8 |

Estimate the rate at which the temperature is changing at t = 5 minutes. Interpret your answer.

1. **Pick intervals that contain t = 5.** The instant must lie inside the interval or at one end. Possible choices from the table include [4, 5], [5, 6], [4, 6], [2, 8] and [0, 10].
2. **Prefer the shortest intervals.** Short intervals give averages closer to the instantaneous rate, because the temperature has less time to change its behaviour.
   - [4, 5]: (62.5 − 66.9)/(5 − 4) = −4.4/1 = −4.4 °C per minute
   - [5, 6]: (58.4 − 62.5)/(6 − 5) = −4.1/1 = −4.1 °C per minute
   - [4, 6]: (58.4 − 66.9)/(6 − 4) = −8.5/2 = **−4.25 °C per minute**
3. **Choose an estimate.** The interval [4, 6] has t = 5 in the middle, so it uses data from both sides. Its value, −4.25 °C per minute, lies between the left and right estimates. Any of these three is a reasonable estimate; [4, 6] is the most balanced.
4. **Compare with a poor choice.** Over [0, 5], the average is (62.5 − 90.0)/5 = −5.5 °C per minute. That interval contains t = 5, but it is long and mostly describes the first few minutes, when the tea cooled faster.

**Answer.** At t = 5 minutes, the temperature is falling at about **4.25 °C per minute** (rate ≈ −4.25 °C/min).

**Interpretation.** The negative sign means the temperature is decreasing. The size says that, around t = 5, the tea loses roughly 4 degrees each minute.

**Why only an estimate?** A table gives values at a few times only. You cannot shrink the interval below one minute, so you cannot see what the averages approach. With a formula you could (as in Worked example 1). With a table, the best you can do is use the shortest available interval containing the instant.

## Common misconceptions

- **"Put the same time in twice."** (s(3) − s(3))/(3 − 3) is 0/0, which is undefined. The rate at an instant comes from nearby intervals, never from an interval of length zero.
- **"The rate at t = 3 is s(3)/3."** That is position divided by time: an average over [0, 3] only if s(0) = 0, and still an average, not a rate at an instant. For the cart, s(3)/3 = 5, not 8.
- **"Any interval containing the instant will do."** It must contain the instant, and it should be as short as possible. [0, 5] contains t = 5 in the tea example, but its average (−5.5) is a poor estimate.
- **"An instantaneous rate means nothing is changing, so it must be 0."** The tea is cooling at about 4.25 °C per minute at t = 5. A rate at an instant can be any number.
- **"Use only one side."** One-sided intervals give estimates, but you should check that the averages from the left and from the right approach the same value. If they approach different values, there is no single rate at that instant (you will meet this again in Unit 2).
- **"Average rate = average of the outputs."** The average rate is change in output over change in input, not (f(a) + f(b))/2.
- **Leaving out units or the sign.** A rate has units of output per input (m/s, °C per minute). A negative rate means the quantity is decreasing.

## Where this leads

Topic 1.1 sets up the whole course. Average rates give you something you can calculate; limits let you push them to a single instant. Topic 1.2, [Defining Limits and Using Limit Notation](/advanced-course-resources/calculus-ab/1-2-defining-limits-limit-notation-study-guide/), makes the word "approach" precise and introduces the notation lim (x → c) f(x). In Unit 2, the limit of average rates becomes the **derivative**, and the quotient (f(a + h) − f(a))/h returns as its definition. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/1-1-introducing-calculus-change-occur-instant-checklist/) to consolidate.
