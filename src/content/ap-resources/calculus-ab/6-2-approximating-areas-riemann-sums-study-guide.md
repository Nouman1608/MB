---
resourceId: "mb-ap-calcab-6.2-study-guide"
title: "Approximating Areas with Riemann Sums: Study Guide (Calculus AB 6.2)"
description: "Learn to estimate an area under a curve with left, right, midpoint and trapezoidal sums, from formulas, graphs and tables, and to decide whether each is too big or too small."
course: "calculus-ab"
unit: 6
topics: ["6.2"]
resourceType: "study-guide"
calculusScope: "ab-and-bc"
prerequisites:
  - "Area under a rate graph as accumulated change (Topic 6.1)"
  - "Increasing and decreasing functions, and concavity (Unit 5)"
  - "Area of a rectangle and of a trapezoid"
prerequisiteResources: ["mb-ap-calcab-6.1-study-guide"]
learningObjectives:
  - "Build left, right, midpoint and trapezoidal sums for a function given by a formula, a graph, a table or a description"
  - "Handle partitions with equal and with unequal subinterval widths"
  - "Decide whether a left or right sum is an overestimate or an underestimate from whether the function is increasing or decreasing"
  - "Decide whether a midpoint or trapezoidal sum is an overestimate or an underestimate from the concavity of the function"
  - "Interpret a Riemann sum in context with units, and set it up clearly when technology does the arithmetic"
skills: ["1", "2", "3"]
studyMinutes: 45
difficulty: "core"
calculator: "mixed"
calculatorNote: "Sums with a few terms can be done by hand. On calculator-active questions, still write the sum out in full before giving its value. Give decimals to three places."
related: ["mb-ap-calcab-6.2-revision-notes", "mb-ap-calcab-6.2-practice", "mb-ap-calcab-6.2-checklist"]
next: "mb-ap-calcab-6.2-practice"
framework: { schoolYear: "2026-27", examSeries: "May 2027" }
sources: ["ced-calculus-ab-bc", "page-calculus-ab", "page-calculus-bc"]
keyPoints:
  - "A Riemann sum splits [a, b] into subintervals and adds (width × height) for each one. The height comes from the left end, the right end or the midpoint."
  - "A trapezoidal sum uses the average of the two end heights on each subinterval. With the same partition, it equals the average of the left and right sums."
  - "Increasing function: left sum is too small, right sum is too big. Decreasing: the other way round."
  - "Concave up: trapezoidal sum is too big, midpoint sum is too small. Concave down: the other way round."
  - "This topic is shared by Calculus AB and Calculus BC students."
faqs:
  - question: "Is this page for Calculus AB or Calculus BC?"
    answer: "Both. Topic 6.2 is common content, so the same page serves AB and BC students."
  - question: "Do the subintervals have to be the same width?"
    answer: "No. Tables often have uneven gaps. Use the actual width of each subinterval in each term."
  - question: "Can I always use a midpoint sum with a table?"
    answer: "Only if the table gives the function value at the middle of each subinterval you choose. Otherwise use left, right or trapezoidal sums."
version: "1.0"
publishedDate: 2026-10-05
updatedDate: 2026-10-05
editorialStatus: "drafted"
author: "marlbridge-academic-team"
---

**Course scope.** This topic is shared by Calculus AB and Calculus BC. Everything here is examinable for both.

## The problem

In [Topic 6.1](/advanced-course-resources/calculus-ab/6-1-exploring-accumulations-change-study-guide/) every rate graph was made of straight lines or circular arcs, so geometry gave the exact area. Most graphs are curves. There is no formula from geometry for the area under y = x²/2 + 2, for example.

The plan is to **approximate**. Cut the interval into strips. Replace each strip with a shape whose area you can find (a rectangle or a trapezoid). Add the areas. More, thinner strips usually give a better estimate.

The exact value you are estimating is called a **definite integral**. Topic 6.3 gives its notation and formal definition. On this page, "the exact area" means that value: the signed area between the graph and the x-axis from a to b.

## Partitions and widths

A **partition** of [a, b] is a list of points

**a = x₀ < x₁ < x₂ < … < xₙ = b**

It cuts [a, b] into n **subintervals**. The width of the i-th subinterval is Δxᵢ = xᵢ − xᵢ₋₁.

- In a **uniform** partition every width is the same: Δx = (b − a)/n.
- In a **nonuniform** partition the widths differ. This is common with tables, where readings were taken at uneven times.

## The four sums

On each subinterval, you choose a height and multiply by the width.

| Sum | Height used on each subinterval | One term |
|---|---|---|
| Left Riemann sum, L | value at the **left** end | f(xᵢ₋₁) × Δxᵢ |
| Right Riemann sum, R | value at the **right** end | f(xᵢ) × Δxᵢ |
| Midpoint Riemann sum, M | value at the **middle** | f((xᵢ₋₁ + xᵢ)/2) × Δxᵢ |
| Trapezoidal sum, T | **average** of the two ends | ½[f(xᵢ₋₁) + f(xᵢ)] × Δxᵢ |

The first three use rectangles. The trapezoidal sum uses trapezoids, which follow a sloping graph more closely.

The heights can come from a formula, from reading a graph, from a table, or from a description in words. If f is negative somewhere, those terms are negative, just as an area below the axis counted as a decrease in Topic 6.1.

**A useful link.** For the same partition, the trapezoidal sum is the average of the left and right sums:

**T = (L + R)/2**

Each trapezoid term is the average of a left term and a right term, so the whole sum is too.

## Worked example 1: a function given by a formula

**Question.** Let f(x) = x²/2 + 2. Approximate the area under f from x = 0 to x = 6 using three subintervals of equal width, with (a) a left sum, (b) a right sum, (c) a trapezoidal sum and (d) a midpoint sum.

**Set up.** Δx = (6 − 0)/3 = 2. The partition is 0, 2, 4, 6.

| x | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| f(x) | 2 | 2.5 | 4 | 6.5 | 10 | 14.5 | 20 |

**(a) Left sum.** Heights at 0, 2 and 4:
L = 2 × (2 + 4 + 10) = 2 × 16 = **32**

**(b) Right sum.** Heights at 2, 4 and 6:
R = 2 × (4 + 10 + 20) = 2 × 34 = **68**

**(c) Trapezoidal sum.**
T = 2 × [½(2 + 4) + ½(4 + 10) + ½(10 + 20)] = 2 × (3 + 7 + 15) = **50**
Check: (L + R)/2 = (32 + 68)/2 = 50.

**(d) Midpoint sum.** The midpoints are 1, 3 and 5:
M = 2 × (2.5 + 6.5 + 14.5) = 2 × 23.5 = **47**

**How good are they?** The exact area is 48 (you will be able to find this yourself in Topic 6.7). The left sum is 16 too small and the right sum 20 too big. The trapezoidal sum is 2 too big and the midpoint sum only 1 too small. The figures below show why.

<figure>
<svg viewBox="0 0 520 275" role="img" aria-labelledby="lr-title lr-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="lr-title">Left and right Riemann sums for y = x²/2 + 2 on [0, 6] with three subintervals</title>
<desc id="lr-desc">Two panels with the same rising, concave-up curve from (0, 2) to (6, 20). Left panel, labelled left sum 32, underestimate: three rectangles of width 2 with heights 2, 4 and 10, taken from the left end of each subinterval. Each rectangle's top touches the curve at its left corner and lies below the curve elsewhere. Right panel, labelled right sum 68, overestimate: three rectangles with heights 4, 10 and 20, taken from the right end. Each top touches the curve at its right corner and lies above the curve elsewhere.</desc>
<rect x="0" y="0" width="520" height="275" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<rect x="45" y="222" width="60" height="18"/><rect x="105" y="204" width="60" height="36"/><rect x="165" y="150" width="60" height="90"/>
<rect x="305" y="204" width="60" height="36"/><rect x="365" y="150" width="60" height="90"/><rect x="425" y="60" width="60" height="180"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="35" y1="240" x2="240" y2="240"/><line x1="45" y1="250" x2="45" y2="45"/>
<line x1="295" y1="240" x2="500" y2="240"/><line x1="305" y1="250" x2="305" y2="45"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="45" y="256">0</text><text x="105" y="256">2</text><text x="165" y="256">4</text><text x="225" y="256">6</text>
<text x="305" y="256">0</text><text x="365" y="256">2</text><text x="425" y="256">4</text><text x="485" y="256">6</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="40" y="199">5</text><text x="40" y="154">10</text><text x="40" y="109">15</text><text x="40" y="64">20</text>
<text x="300" y="199">5</text><text x="300" y="154">10</text><text x="300" y="109">15</text><text x="300" y="64">20</text>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<polyline points="45.0,222.0 52.5,221.7 60.0,220.9 67.5,219.5 75.0,217.5 82.5,215.0 90.0,211.9 97.5,208.2 105.0,204.0 112.5,199.2 120.0,193.9 127.5,188.0 135.0,181.5 142.5,174.5 150.0,166.9 157.5,158.7 165.0,150.0 172.5,140.7 180.0,130.9 187.5,120.5 195.0,109.5 202.5,98.0 210.0,85.9 217.5,73.2 225.0,60.0"/>
<polyline points="305.0,222.0 312.5,221.7 320.0,220.9 327.5,219.5 335.0,217.5 342.5,215.0 350.0,211.9 357.5,208.2 365.0,204.0 372.5,199.2 380.0,193.9 387.5,188.0 395.0,181.5 402.5,174.5 410.0,166.9 417.5,158.7 425.0,150.0 432.5,140.7 440.0,130.9 447.5,120.5 455.0,109.5 462.5,98.0 470.0,85.9 477.5,73.2 485.0,60.0"/>
</g>
<text x="140" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">Left sum = 32 (underestimate)</text>
<text x="400" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">Right sum = 68 (overestimate)</text>
</svg>
<figcaption>Figure 1. For an increasing function, left-end rectangles sit under the curve and right-end rectangles stick out above it. The exact area, 48, lies between 32 and 68.</figcaption>
</figure>

<figure>
<svg viewBox="0 0 520 275" role="img" aria-labelledby="tm-title tm-desc" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, sans-serif">
<title id="tm-title">Trapezoidal and midpoint sums for y = x²/2 + 2 on [0, 6] with three subintervals</title>
<desc id="tm-desc">Two panels with the same concave-up curve. Left panel, labelled trapezoidal sum 50, overestimate: three trapezoids whose slanted tops join the points (0, 2), (2, 4), (4, 10) and (6, 20) on the curve. Because the curve bends upward, each straight top lies slightly above the curve. Right panel, labelled midpoint sum 47, underestimate: three rectangles of width 2 with heights 2.5, 6.5 and 14.5, the curve's height at x = 1, 3 and 5, marked with dots. Each rectangle is above the curve on one half and below it on the other, and the gaps nearly cancel.</desc>
<rect x="0" y="0" width="520" height="275" fill="#ffffff"/>
<g fill="#fdf6e3" stroke="#1d2b44" stroke-width="1.5">
<polygon points="45,240 45,222 105,204 105,240"/><polygon points="105,240 105,204 165,150 165,240"/><polygon points="165,240 165,150 225,60 225,240"/>
<rect x="305" y="217.5" width="60" height="22.5"/><rect x="365" y="181.5" width="60" height="58.5"/><rect x="425" y="109.5" width="60" height="130.5"/>
</g>
<g stroke="#1d2b44" stroke-width="1.5">
<line x1="35" y1="240" x2="240" y2="240"/><line x1="45" y1="250" x2="45" y2="45"/>
<line x1="295" y1="240" x2="500" y2="240"/><line x1="305" y1="250" x2="305" y2="45"/>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="middle">
<text x="45" y="256">0</text><text x="105" y="256">2</text><text x="165" y="256">4</text><text x="225" y="256">6</text>
<text x="305" y="256">0</text><text x="365" y="256">2</text><text x="425" y="256">4</text><text x="485" y="256">6</text>
</g>
<g font-size="12" fill="#1d2b44" text-anchor="end">
<text x="40" y="199">5</text><text x="40" y="154">10</text><text x="40" y="109">15</text><text x="40" y="64">20</text>
<text x="300" y="199">5</text><text x="300" y="154">10</text><text x="300" y="109">15</text><text x="300" y="64">20</text>
</g>
<g fill="none" stroke="#1d2b44" stroke-width="2.5">
<polyline points="45.0,222.0 52.5,221.7 60.0,220.9 67.5,219.5 75.0,217.5 82.5,215.0 90.0,211.9 97.5,208.2 105.0,204.0 112.5,199.2 120.0,193.9 127.5,188.0 135.0,181.5 142.5,174.5 150.0,166.9 157.5,158.7 165.0,150.0 172.5,140.7 180.0,130.9 187.5,120.5 195.0,109.5 202.5,98.0 210.0,85.9 217.5,73.2 225.0,60.0"/>
<polyline points="305.0,222.0 312.5,221.7 320.0,220.9 327.5,219.5 335.0,217.5 342.5,215.0 350.0,211.9 357.5,208.2 365.0,204.0 372.5,199.2 380.0,193.9 387.5,188.0 395.0,181.5 402.5,174.5 410.0,166.9 417.5,158.7 425.0,150.0 432.5,140.7 440.0,130.9 447.5,120.5 455.0,109.5 462.5,98.0 470.0,85.9 477.5,73.2 485.0,60.0"/>
</g>
<g fill="#1d2b44"><circle cx="335" cy="217.5" r="3.5"/><circle cx="395" cy="181.5" r="3.5"/><circle cx="455" cy="109.5" r="3.5"/></g>
<text x="140" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">Trapezoidal sum = 50 (overestimate)</text>
<text x="400" y="22" font-size="13" fill="#1d2b44" text-anchor="middle">Midpoint sum = 47 (underestimate)</text>
</svg>
<figcaption>Figure 2. For a concave-up curve, the straight tops of the trapezoids lie above the curve, so T is too big. The midpoint rectangles gain on one half and lose on the other; for concave up they lose slightly more, so M is too small.</figcaption>
</figure>

## Over or under? Reading the behaviour of f

You can often tell whether a sum is too big or too small **without** knowing the exact value. You need to know how f behaves on the whole interval [a, b].

| What you know about f on [a, b] | Left sum L | Right sum R | Midpoint M | Trapezoidal T |
|---|---|---|---|---|
| increasing | under | over | (use concavity) | (use concavity) |
| decreasing | over | under | (use concavity) | (use concavity) |
| concave up | (use monotonicity) | (use monotonicity) | under | over |
| concave down | (use monotonicity) | (use monotonicity) | over | under |

**Why left and right depend on increasing or decreasing.** If f is increasing, the left end of each subinterval is the lowest point on it. A rectangle of that height fits under the graph, so L is too small. The right end is the highest point, so R is too big. For a decreasing f, swap them.

**Why the trapezoid depends on concavity.** A concave-up graph bends upward, so it lies below each chord joining two of its points. The trapezoid tops are those chords. They sit above the curve, so T is too big. For concave down the chords sit below the curve, so T is too small.

**Why the midpoint is the other way round.** Tilt the top of a midpoint rectangle until it lies along the tangent line at the midpoint. The tilt does not change the area, because the strip gained on one side equals the strip lost on the other. A concave-up graph lies above its tangent lines, so the tilted top, and therefore M, is too small. For concave down, M is too big.

**How to justify on paper.** Name the property and connect it to the sum: "f is decreasing on [0, 8], so on each subinterval the left end gives the largest value. The left Riemann sum is therefore an overestimate." A claim with no reason earns little credit.

**Two cautions.**

- A table of values alone does not tell you how f behaves *between* the readings. You need a statement such as "f is increasing" or information about f′ or f″.
- If f is increasing on part of [a, b] and decreasing on another part, the rule does not apply to the whole sum. The sum might be too big or too small.

## Worked example 2: a table with uneven gaps

**Question.** A file is downloaded over 40 seconds. The download speed S(t), in megabits per second (Mb/s), is measured at a few times t, in seconds. S is increasing on 0 ≤ t ≤ 40.

| t (s) | 0 | 10 | 15 | 25 | 40 |
|---|---|---|---|---|---|
| S(t) (Mb/s) | 12 | 18 | 26 | 30 | 34 |

(a) Use a right Riemann sum with the four subintervals in the table to estimate the amount of data downloaded from t = 0 to t = 40.
(b) Is this an overestimate or an underestimate? Explain.
(c) Find the trapezoidal sum with the same subintervals.

**Set up.** The widths are 10, 5, 10 and 15 seconds. They are not equal, so each term needs its own width.

**(a)** R = 10 × 18 + 5 × 26 + 10 × 30 + 15 × 34
= 180 + 130 + 300 + 510 = **1,120 megabits**.

Units: (Mb/s) × s = Mb. About 1,120 megabits were downloaded in the first 40 seconds. (S is a rate, so the sum estimates the accumulated change in data, as in Topic 6.1.)

**(b)** S is increasing, so on each subinterval the right end gives the largest speed. Each rectangle is at least as tall as the graph across its subinterval. The right sum is an **overestimate**.

**(c)** The left sum is 10 × 12 + 5 × 18 + 10 × 26 + 15 × 30 = 120 + 90 + 260 + 450 = 920. Then

T = (920 + 1,120)/2 = **1,020 megabits**.

Or directly: 10 × ½(12 + 18) + 5 × ½(18 + 26) + 10 × ½(26 + 30) + 15 × ½(30 + 34) = 150 + 110 + 280 + 480 = 1,020.

**Can you say whether T is over or under?** Not from this information. The question tells you S is increasing, but says nothing about concavity.

**Midpoint?** A midpoint sum on these subintervals would need S at t = 5, 12.5, 20 and 32.5. The table does not give those, so a midpoint sum is not possible here.

## Using technology

With many subintervals, the arithmetic is long, so use a calculator list or a spreadsheet. The thinking stays the same.

1. Write the partition and the widths.
2. Decide which height each term uses.
3. Write the sum in full (or with the first few terms and the last term) before giving its value.

On a calculator-active exam question, a bare number with no set-up shows no method. Writing "10 × 18 + 5 × 26 + 10 × 30 + 15 × 34" first earns the set-up even if you then make a keying error.

## Common misconceptions

- **Using one Δx for a nonuniform table.** Every term needs its own width.
- **Counting the wrong number of terms.** n subintervals give n terms. A left sum never uses the last value; a right sum never uses the first.
- **"Midpoint" from a table.** The midpoint of a subinterval is a point in the middle of the *x*-interval, not the average of the two table values.
- **Mixing up which property decides what.** Increasing/decreasing decides left and right. Concavity decides midpoint and trapezoid.
- **Claiming over or under from a table alone.** You need information about f between the data points.
- **Forgetting the ½ in a trapezoid term.** Without it you get L + R, double the trapezoidal sum.
- **Giving a sum with no units or context.** The sum estimates an accumulated change, so it carries units of (rate) × (input).

## Where this leads

[Topic 6.3](/advanced-course-resources/calculus-ab/6-3-riemann-sums-summation-notation-definite-study-guide/) writes these sums with sigma (Σ) notation, and defines the definite integral as the limit of a Riemann sum as the widths shrink to zero. Later in the unit, the Fundamental Theorem of Calculus gives exact values, which you can compare with your estimates. Students in either course can return to the [Calculus AB roadmap](/advanced-course-resources/calculus-ab/#roadmap) or the [Calculus BC roadmap](/advanced-course-resources/calculus-bc/#roadmap).

Try the [practice questions](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-practice/) now, then use the [revision notes](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-revision-notes/) and the [checklist](/advanced-course-resources/calculus-ab/6-2-approximating-areas-riemann-sums-checklist/) to consolidate.
