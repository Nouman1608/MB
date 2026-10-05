---
resourceId: "mb-ap-calcab-5.8-study-guide"
title: "Sketching Graphs of Functions and Their Derivatives: Study Guide (Calculus AB 5.8)"
description: "Learn how sign charts for f′ and f″ turn a formula, a graph of f′ or a table of values into an accurate sketch of f, and how to sketch f′ from a graph of f."
course: "calculus-ab"
unit: 5
topics: ["5.8"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Increasing and decreasing intervals and the first derivative test (Topics 5.3 and 5.4)"
  - "Concavity, points of inflection and the second derivative test (Topics 5.6 and 5.7)"
  - "Factoring polynomials and solving f′(x) = 0 and f″(x) = 0"
learningObjectives:
  - "List the key features of a graph and say which derivative reveals each one"
  - "Build sign charts for f′ and f″ from a formula and turn them into a labelled sketch of f"
  - "Describe and sketch f from the graph of f′, reading increase, extrema and concavity from it"
  - "Draw conclusions about f from a table of values of f′"
  - "Sketch the shape of f′ from the graph of f"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "not-permitted"
calculatorNote: "Practise every example here without a calculator. Exact coordinates are expected for key points."
related: ["mb-ap-calcab-5.8-revision-notes", "mb-ap-calcab-5.8-practice", "mb-ap-calcab-5.8-checklist"]
next: "mb-ap-calcab-5.8-practice"
prerequisiteResources: ["mb-ap-calcab-5.7-study-guide"]
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "The sign of f′ tells you where f rises and falls; the sign of f″ tells you which way it bends."
  - "Sign charts for f′ and f″, plus the values of f at the key points, are enough to sketch f."
  - "On a graph of f′, read signs (above or below the axis) for increase and decrease, and slopes (rising or falling) for concavity."
  - "f′ = 0 does not always give an extremum, and f″ = 0 does not always give a point of inflection: check for a sign change."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 5.8 is common content, so the same page serves AB and BC students."
  - question: "How accurate does a sketch need to be?"
    answer: "Key points must be in the right places, with their coordinates labelled, and every interval must have the right direction and the right bend. The exact curve between key points does not need to be precise."
  - question: "How is Topic 5.8 different from Topic 5.9?"
    answer: "Topic 5.8 uses information from f′ and f″ to sketch and explain f. Topic 5.9 goes further and links the graphs of f, f′ and f″ to one another, for example matching three graphs or reading f″ from a graph of f′."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
checkedBy: "marlbridge-academic-team"
checkedDate: 2026-10-05
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## What a sketch has to show

Topics 5.3 to 5.7 each found one feature of a graph. Sketching puts them together. Information about f can arrive in three forms: a **formula** (analytical), a **graph** of f′ or f″ (graphical) or a **table** of values (numerical). The connections are the same in every form.

| Feature of the graph of f | What f′ does | What f″ does |
|---|---|---|
| f increasing | f′ > 0 | — |
| f decreasing | f′ < 0 | — |
| relative maximum at c | f′ changes from + to − at c | often f″(c) < 0 |
| relative minimum at c | f′ changes from − to + at c | often f″(c) > 0 |
| concave up | f′ increasing | f″ > 0 |
| concave down | f′ decreasing | f″ < 0 |
| point of inflection at c | f′ has a relative max or min at c | f″ changes sign at c |
| horizontal tangent at c | f′(c) = 0 | — |

Two warnings sit inside this table. A zero of f′ is only an extremum if f′ **changes sign** there. A zero of f″ is only a point of inflection if f″ **changes sign** there.

## The sign-chart method

For a formula, follow these steps.

1. State the domain. Note any asymptotes or points where f is undefined.
2. Find f′. Mark where f′ = 0 or f′ does not exist (critical points).
3. Find f″. Mark where f″ = 0 or f″ does not exist.
4. Put all marked x-values on one number line. Test the sign of f′ and of f″ in each interval.
5. Read off the shape in each interval: rising or falling, cup or cap.
6. Calculate f at every marked x-value. Plot these points, then join them with the right shape.

There are four basic shapes, one for each sign combination:

| f′ | f″ | Shape of f |
|---|---|---|
| + | + | rising, getting steeper |
| + | − | rising, flattening out |
| − | + | falling, flattening out |
| − | − | falling, getting steeper |

## Worked example 1: sketching from a formula

**Question.** Sketch the graph of f(x) = x⁴ − 4x³ + 16x. Label all relative extrema and points of inflection.

1. **Domain.** f is a polynomial: all real numbers, no asymptotes.
2. **First derivative.** f′(x) = 4x³ − 12x² + 16 = 4(x³ − 3x² + 4). Since x = −1 makes x³ − 3x² + 4 zero, (x + 1) is a factor: x³ − 3x² + 4 = (x + 1)(x − 2)². So **f′(x) = 4(x + 1)(x − 2)²**. Critical points: x = −1 and x = 2.
3. **Second derivative.** f″(x) = 12x² − 24x = **12x(x − 2)**. Zeros: x = 0 and x = 2.
4. **Sign chart.** The marked values are −1, 0 and 2.

| Interval | x < −1 | −1 < x < 0 | 0 < x < 2 | x > 2 |
|---|---|---|---|---|
| sign of f′ | − | + | + | + |
| sign of f″ | + | + | − | + |
| shape of f | falling, flattening | rising, steepening | rising, flattening | rising, steepening |

5. **Read the features.**
   - f′ changes from − to + at x = −1: **relative minimum**. It is also the absolute minimum, because f decreases before it and increases everywhere after it.
   - At x = 2, f′ = 0 but f′ is positive on both sides: **no extremum**.
   - f″ changes sign at x = 0 (+ to −) and at x = 2 (− to +): **points of inflection** at both.
6. **Values.** f(−1) = 1 + 4 − 16 = −11. f(0) = 0. f(2) = 16 − 32 + 32 = 16.

<figure>
<svg viewBox="0 0 520 320" role="img" aria-labelledby="we1-title we1-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="we1-title">Graph of f(x) = x⁴ − 4x³ + 16x with its minimum and two inflection points labelled</title>
<desc id="we1-desc">The curve is drawn for x from −2 to 3.2. It starts high at (−2, 16), falls to a lowest point at (−1, −11), then rises through the origin. Between x = 0 and x = 2 it keeps rising but flattens, becoming horizontal at (2, 16), then rises steeply again. The minimum (−1, −11) is marked with a filled dot. The inflection points (0, 0) and (2, 16) are marked with hollow squares; at (2, 16) a short dashed horizontal tangent is drawn.</desc>
<rect x="0" y="0" width="520" height="320" fill="#ffffff"/>
<line x1="40" y1="196" x2="500" y2="196" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="220" y1="300" x2="220" y2="10" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1">
<line x1="60" y1="192" x2="60" y2="200"/><line x1="140" y1="192" x2="140" y2="200"/><line x1="300" y1="192" x2="300" y2="200"/><line x1="380" y1="192" x2="380" y2="200"/><line x1="460" y1="192" x2="460" y2="200"/>
<line x1="216" y1="266" x2="224" y2="266"/><line x1="216" y1="126" x2="224" y2="126"/><line x1="216" y1="56" x2="224" y2="56"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="60" y="212">−2</text><text x="128" y="212">−1</text><text x="300" y="212">1</text><text x="392" y="212">2</text><text x="460" y="212">3</text><text x="505" y="192">x</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="212" y="270">−10</text><text x="212" y="130">10</text><text x="212" y="60">20</text><text x="212" y="16">y</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="60.0,84.0 68.0,125.5 76.0,160.8 84.0,190.4 92.0,214.6 100.0,234.1 108.0,249.1 116.0,260.1 124.0,267.5 132.0,271.7 140.0,273.0 148.0,271.8 156.0,268.4 164.0,263.1 172.0,256.2 180.0,248.1 188.0,238.8 196.0,228.8 204.0,218.2 212.0,207.2 220.0,196.0 228.0,184.8 236.0,173.8 244.0,163.1 252.0,152.8 260.0,143.1 268.0,133.9 276.0,125.5 284.0,117.9 292.0,111.0 300.0,105.0 308.0,99.8 316.0,95.5 324.0,91.9 332.0,89.1 340.0,87.1 348.0,85.6 356.0,84.7 364.0,84.2 372.0,84.0 380.0,84.0 388.0,84.0 396.0,83.8 404.0,83.2 412.0,82.0 420.0,80.1 428.0,77.0 436.0,72.7 444.0,66.8 452.0,59.0 460.0,49.0 468.0,36.5 476.0,21.1"/>
<line x1="345" y1="84" x2="415" y2="84" stroke="#1d2b44" stroke-width="1.2" stroke-dasharray="5 4"/>
<circle cx="140" cy="273" r="5" fill="#1d2b44"/>
<rect x="215" y="191" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<rect x="375" y="79" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="150" y="292">minimum (−1, −11)</text>
<text x="232" y="214">inflection (0, 0)</text>
<text x="300" y="68">inflection (2, 16)</text>
</g>
</svg>
<figcaption>Figure 1. The sketch of f(x) = x⁴ − 4x³ + 16x. Filled dot: relative (and absolute) minimum. Hollow squares: points of inflection. At (2, 16) the tangent is horizontal but the graph keeps rising, so that point is not an extremum. Axes are unitless.</figcaption>
</figure>

**Check.** The sketch matches every column of the sign chart: falling then rising, with the bend switching at x = 0 and again at x = 2.

## Worked example 2: sketching f from the graph of f′

Often you are given the graph of **f′**, not f. Read it with two questions:

- **Is f′ above or below the x-axis?** That gives where f increases or decreases.
- **Is f′ going up or down?** That gives where f is concave up or concave down.

**Question.** The top panel of Figure 2 shows the graph of f′ for −2 ≤ x ≤ 4. It crosses the x-axis at x = −1 and x = 3 and has its highest point at (1, 4). You are told f(−1) = 0, f(1) = 16/3 and f(3) = 32/3. Describe f and sketch it.

1. **Signs of f′.** f′ < 0 for −2 ≤ x < −1, f′ > 0 for −1 < x < 3, f′ < 0 for 3 < x ≤ 4. So f decreases, then increases, then decreases.
2. **Extrema.** At x = −1, f′ crosses from below to above the axis (− to +): **relative minimum**. At x = 3, f′ crosses from above to below (+ to −): **relative maximum**.
3. **Concavity.** f′ is increasing for x < 1 and decreasing for x > 1. So f is **concave up** on −2 < x < 1 and **concave down** on 1 < x < 4.
4. **Inflection.** f′ has its maximum at x = 1, so the concavity of f changes there: **point of inflection** at x = 1. Also, f′(1) = 4 is the steepest slope of f on the interval.
5. **Sketch.** Plot (−1, 0), (1, 16/3) and (3, 32/3). Join them: a cup through the minimum, rising and steepening up to x = 1, then rising and flattening into a cap at x = 3, then falling.

<figure>
<svg viewBox="0 0 520 480" role="img" aria-labelledby="we2-title we2-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="we2-title">Graph of f′ above the matching graph of f, with features lined up</title>
<desc id="we2-desc">Two panels share the same x-axis scale from −2 to 4. Top panel, labelled graph of f′: a downward-opening parabola that is below the axis at x = −2, crosses up through the axis at x = −1, reaches its highest point (1, 4), and crosses down through the axis at x = 3. Bottom panel, labelled graph of f: a curve that falls to a minimum at (−1, 0), rises with increasing steepness to the inflection point (1, 16/3), rises more and more slowly to a maximum at (3, 32/3), then falls. Vertical dashed lines at x = −1, 1 and 3 connect the two panels: a zero of f′ lines up with each extremum of f, and the top of f′ lines up with the inflection point of f.</desc>
<rect x="0" y="0" width="520" height="480" fill="#ffffff"/>
<text x="20" y="30" font-size="13" font-weight="bold" fill="#1d2b44">graph of f′</text>
<text x="20" y="250" font-size="13" font-weight="bold" fill="#1d2b44">graph of f</text>
<line x1="60" y1="121" x2="500" y2="121" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="210" y1="35" x2="210" y2="220" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="60" y1="448" x2="500" y2="448" stroke="#1d2b44" stroke-width="1.5"/>
<line x1="210" y1="245" x2="210" y2="460" stroke="#1d2b44" stroke-width="1.5"/>
<g stroke="#1d2b44" stroke-width="1" stroke-dasharray="4 4">
<line x1="140" y1="40" x2="140" y2="460"/><line x1="280" y1="40" x2="280" y2="460"/><line x1="420" y1="40" x2="420" y2="460"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="70" y="137">−2</text><text x="130" y="137">−1</text><text x="350" y="137">2</text><text x="430" y="137">3</text><text x="490" y="137">4</text>
<text x="70" y="466">−2</text><text x="130" y="466">−1</text><text x="290" y="466">1</text><text x="350" y="466">2</text><text x="430" y="466">3</text><text x="490" y="466">4</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="204" y="53">4</text><text x="204" y="89">2</text><text x="204" y="161">−2</text><text x="204" y="197">−4</text>
<text x="204" y="362">5</text><text x="204" y="272">10</text>
</g>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,211.0 77.0,200.4 84.0,190.1 91.0,180.2 98.0,170.7 105.0,161.5 112.0,152.7 119.0,144.2 126.0,136.1 133.0,128.4 140.0,121.0 147.0,114.0 154.0,107.3 161.0,101.0 168.0,95.1 175.0,89.5 182.0,84.3 189.0,79.4 196.0,74.9 203.0,70.8 210.0,67.0 217.0,63.6 224.0,60.5 231.0,57.8 238.0,55.5 245.0,53.5 252.0,51.9 259.0,50.6 266.0,49.7 273.0,49.2 280.0,49.0 287.0,49.2 294.0,49.7 301.0,50.6 308.0,51.9 315.0,53.5 322.0,55.5 329.0,57.8 336.0,60.5 343.0,63.6 350.0,67.0 357.0,70.8 364.0,74.9 371.0,79.4 378.0,84.3 385.0,89.5 392.0,95.1 399.0,101.0 406.0,107.3 413.0,114.0 420.0,121.0 427.0,128.4 434.0,136.1 441.0,144.2 448.0,152.7 455.0,161.5 462.0,170.7 469.0,180.2 476.0,190.1 483.0,200.4 490.0,211.0"/>
<polyline fill="none" stroke="#1d2b44" stroke-width="2.5" points="70.0,406.0 77.0,414.5 84.0,421.9 91.0,428.3 98.0,433.7 105.0,438.2 112.0,441.9 119.0,444.6 126.0,446.5 133.0,447.6 140.0,448.0 147.0,447.6 154.0,446.6 161.0,444.9 168.0,442.6 175.0,439.8 182.0,436.3 189.0,432.4 196.0,428.0 203.0,423.2 210.0,418.0 217.0,412.4 224.0,406.5 231.0,400.3 238.0,393.9 245.0,387.2 252.0,380.4 259.0,373.4 266.0,366.4 273.0,359.2 280.0,352.0 287.0,344.8 294.0,337.6 301.0,330.6 308.0,323.6 315.0,316.8 322.0,310.1 329.0,303.7 336.0,297.5 343.0,291.6 350.0,286.0 357.0,280.8 364.0,276.0 371.0,271.6 378.0,267.7 385.0,264.2 392.0,261.4 399.0,259.1 406.0,257.4 413.0,256.4 420.0,256.0 427.0,256.4 434.0,257.5 441.0,259.4 448.0,262.1 455.0,265.8 462.0,270.3 469.0,275.7 476.0,282.1 483.0,289.5 490.0,298.0"/>
<circle cx="140" cy="121" r="4.5" fill="#1d2b44"/><circle cx="420" cy="121" r="4.5" fill="#1d2b44"/>
<rect x="275" y="44" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<circle cx="140" cy="448" r="5" fill="#1d2b44"/><circle cx="420" cy="256" r="5" fill="#1d2b44"/>
<rect x="275" y="347" width="10" height="10" fill="#ffffff" stroke="#1d2b44" stroke-width="2"/>
<g font-size="12" fill="#1d2b44">
<text x="290" y="40">top of f′ at (1, 4)</text>
<text x="96" y="112">f′ = 0</text><text x="430" y="112">f′ = 0</text>
<text x="146" y="464">min (−1, 0)</text>
<text x="292" y="364">inflection (1, 16/3)</text>
<text x="400" y="244">max (3, 32/3)</text>
</g>
</svg>
<figcaption>Figure 2. Top: the graph of f′. Bottom: the matching graph of f. Each zero where f′ changes sign (filled dots, top) lines up with an extremum of f (filled dots, bottom). The highest point of f′ (hollow square, top) lines up with the inflection point of f (hollow square, bottom). Axes are unitless.</figcaption>
</figure>

**A common trap.** The highest point of the f′ graph is **not** a maximum of f. It is where f is rising fastest, which is a point of inflection.

## Worked example 3: conclusions from a table

**Question.** f is twice differentiable. The table gives values of f′. You are also told that f′ is decreasing on 0 < x < 3 and increasing on 3 < x < 5.

| x | 0 | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| f′(x) | 5 | 2 | 0 | −1 | 0 | 3 |

Describe the behaviour of f on 0 < x < 5.

1. **Sign of f′.** Because f′ is decreasing on (0, 3) and f′(2) = 0, f′ is positive just before x = 2 and negative just after. Because f′ is increasing on (3, 5) and f′(4) = 0, f′ is negative just before x = 4 and positive just after.
2. **Extrema.** Relative **maximum** at x = 2 (f′ changes + to −). Relative **minimum** at x = 4 (f′ changes − to +).
3. **Concavity.** f′ decreasing on (0, 3): f concave **down**. f′ increasing on (3, 5): f concave **up**. Point of **inflection** at x = 3.
4. **Steepness.** f′(0) = 5 and f′(5) = 3, so f is rising more steeply at x = 0 than at x = 5.

**Why the extra sentence matters.** A table alone shows only a few values. Without knowing how f′ behaves between them, you cannot be sure that f′ has no other zeros. Always use the information given about the whole interval, and say so in your justification.

## Going the other way: sketching f′ from f

The same table works in reverse. Given the graph of f:

- Where f has a horizontal tangent (a peak, a trough or a flat inflection), **f′ crosses or touches the x-axis**.
- Where f rises, the graph of f′ is **above** the axis; where f falls, it is **below**.
- Where f is concave up, f′ is **increasing**; where f is concave down, f′ is **decreasing**.
- At a point of inflection of f, f′ has a **peak or a trough**.
- At a corner or cusp of f, f′ is **undefined**, and its graph has a gap or jump there.

For Worked example 1, the graph of f′ is below the axis for x < −1, crosses at −1, rises to a peak at x = 0, falls to touch the axis at x = 2 without crossing, and then rises again.

## Common misconceptions

- **Reading the graph of f′ as if it were f.** A peak on the f′ graph is a point of inflection of f, not a maximum.
- **"f′ = 0, so there is a maximum or minimum."** Not if f′ touches the axis without changing sign, as at x = 2 in Worked example 1.
- **"f″ = 0, so there is a point of inflection."** Only if f″ changes sign.
- **Taking concavity from the sign of f′.** Concavity comes from whether f′ is increasing or decreasing, not whether it is positive.
- **Joining key points with straight lines.** Each interval needs its correct bend: a cup or a cap.
- **Leaving key points unlabelled.** A sketch should show the coordinates of every extremum and inflection point.
- **Concluding from a table alone.** You need information about f′ between the listed values.

## Where this leads

Sketching ties Unit 5 together. In [Topic 5.9, Connecting a Function, Its First Derivative, and Its Second Derivative](/advanced-course-resources/calculus-ab/5-9-connecting-function-its-first-derivative-study-guide/), you match the graphs of f, f′ and f″ and read features of one from another. The same reasoning returns in Unit 6, where you rebuild f from the graph of f′ using areas. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/5-8-sketching-graphs-functions-their-derivatives-checklist/) to consolidate.
