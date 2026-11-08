---
title: "AQA GCSE Mathematics 8300: Graphs -- Revision Notes"
seoTitle: "AQA GCSE Maths 8300 Graphs Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["gcse"]
topic: "Graphs"
boards: ["aqa"]
qualifications: ["gcse"]
syllabusCodes: ["8300"]
syllabusSeries: "For first teaching 2015"
order: 2
syllabusTopics:
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
  - qualification: "gcse"
    topic: "algebra-aqa-gcse-maths"
    subtopic: "graphs-aqa-gcse-maths"
description: "Condensed AQA GCSE Maths 8300 Graphs revision notes (A8-A16): y = mx + c, quadratic features, graph shapes, transformations and a quick self-test."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-04
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
---

These notes condense section 3.2.2, **Graphs** (A8 to A16), of the AQA GCSE Mathematics (8300) specification, for teaching from September 2015 with exams from May/June 2017 (version 1.0). Basic and additional foundation content is for both tiers; anything from the "Higher content only" column is marked **Higher tier only**. Graphs can come up on Paper 1 (non-calculator) or on Papers 2 and 3 (calculator).

For full explanations and longer worked examples, use the [Graphs study guide](/resources/aqa-gcse-maths-8300-graphs/). Then try the [Graphs practice questions](/resources/aqa-gcse-maths-8300-graphs-practice/). The [Algebra revision notes](/resources/aqa-gcse-mathematics-algebra-revision-notes/) cover the rest of Topic 2. Course hub: [AQA GCSE Mathematics](/boards/aqa/gcse/mathematics/). Statement list: [printable checklist](/checklists/aqa/gcse/mathematics/). Not sure where to start? Take one of the [free 10-minute diagnostics](/diagnostics/).

## Key formulas and facts

| Idea | Formula or fact | Tier |
|---|---|---|
| Gradient | m = (y₂ − y₁) ÷ (x₂ − x₁) | Both |
| Straight line | y = mx + c (m gradient, c y-intercept) | Both |
| Parallel lines | Same gradient | Both |
| Perpendicular lines | m₁ × m₂ = −1, so m₂ = −1/m₁ | Higher tier only |
| Quadratic line of symmetry | Halfway between the roots | Both |
| Completed square | y = (x + p)² + q has turning point (−p, q) | Higher tier only |
| Circle | x² + y² = r², centre (0, 0), radius r | Higher tier only |
| Tangent to a circle | Perpendicular to the radius at that point | Higher tier only |
| Distance-time graph | Gradient = speed | Both |
| Velocity-time graph | Gradient = acceleration; area = distance | Higher tier only (A15) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-exact-trigonometric-values-and-trigonometric-functions--03-sin-cos-graphs.webp" width="900" height="810" alt="Graphs of y = sin x and y = cos x from 0 to 360 degrees with key points marked at multiples of 90 degrees. Both are waves between minus 1 and 1 repeating every 360 degrees; cos is sin shifted by 90 degrees." loading="lazy">
  <figcaption>Sin and cos are waves between -1 and 1 that repeat every 360 degrees.</figcaption>
</figure>


## A8 and A9: coordinates and straight lines

- (x, y): across, then up. Negative x is left of the y-axis; negative y is below the x-axis.
- Plot from a table of values. A point out of line means an arithmetic slip.
- **Method: line through two points**
  1. m = (difference in y) ÷ (difference in x), same order top and bottom.
  2. Substitute one point into y = mx + c to find c.
  3. Write y = mx + c and check with the other point.
- **Method: line through one point with a given gradient:** steps 2 and 3 only.
- **Perpendicular (Higher tier only):** flip the gradient and change its sign. 4 → −1/4; −3/5 → 5/3.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-coordinates-and-drawing-linear-graphs--02-quadrants.webp" width="900" height="980" alt="A grid from -6 to 6 is split into four coloured quadrants labelled with the signs of x and y, with a point in each: (3, 4), (-3, 4), (-3, -4), (3, -4). (6, 0) lies on the x-axis and (0, -2) on the y-axis." loading="lazy">
  <figcaption>The signs of x and y tell you the quadrant; on the x-axis y = 0 and on the y-axis x = 0.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-coordinates-and-drawing-linear-graphs--05-draw-line-table.webp" width="900" height="1180" alt="A table gives six points for y = -3x + 4 from x = -2 to 3. They lie on one straight line and a step triangle shows y falls by 3 for each +1 in x. The line crosses the y-axis at (0, 4)." loading="lazy">
  <figcaption>Make a table, plot every point and rule one line across the whole range.</figcaption>
</figure>


## A10: reading and interpreting y = mx + c

- Rearrange to "y = …" first. 3x + 2y = 12 → 2y = −3x + 12 → y = −1.5x + 6.
- From a graph: use two well-separated grid points; check the sign by eye (downhill means negative).
- In context: **gradient = rate** (per hour, per km, per item); **intercept = starting value** (fixed charge, initial amount).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-in-practical-situations--02-taxi-fare.webp" width="900" height="930" alt="A taxi cost graph starts at $3 on the vertical axis, the fixed charge. The gradient is 15 dollars per 10 km, $1.50 per km, and $24 is read across to 14 km. A 20 km ride costs $33, not the $36 that scaling would give." loading="lazy">
  <figcaption>A line with an intercept: gradient is the rate, intercept is the fixed charge, and scaling fails.</figcaption>
</figure>


## A11: quadratic graphs

- Roots: solve ax² + bx + c = 0 (factorising is the both-tier method).
- y-intercept: (0, c).
- Turning point x-value: midway between the roots; substitute to get y.
- **Higher tier only:** complete the square. x² + 10x + 18 = (x + 5)² − 25 + 18 = (x + 5)² − 7, turning point (−5, −7).
- a > 0 gives a minimum (U shape); a < 0 gives a maximum (∩ shape).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--13-gr-completing-square-turning-point.webp" width="900" height="1050" alt="The parabola y = x² − 8x + 13 is the graph of (x − 4)² moved down 3, with minimum (4, −3), y-intercept (0, 13) and roots 4 ± √3. (x − 4)² − 3 shows the turning point (4, −3) even when the roots are not whole numbers." loading="lazy">
  <figcaption>(x − 4)² − 3 shows the turning point (4, −3) even when the roots are not whole numbers.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--09-exponential-growth-decay.webp" width="900" height="970" alt="y = 2^x rises through (0,1),(1,2),(2,4),(3,8),(4,16); y = (1/2)^x falls through (0,1),(1,1/2),(2,1/4),(3,1/8),(4,1/16). Each step multiplies by 2 or by 1/2." loading="lazy">
  <figcaption>Exponential graphs y = k^x grow when k &gt; 1 and decay when k &lt; 1, both through (0, 1).</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--04-sketch-quadratic.webp" width="900" height="1160" alt="A sketch of y = x² + 2x − 15: a U-shape crossing the x-axis at (−5, 0) and (3, 0) and the y-axis at (0, −15), symmetrical about x = −1. The turning point (−1, −16), from completing the square, is Extended only." loading="lazy">
  <figcaption>A sketch shows shape, roots, y-intercept and symmetry; Extended adds the turning point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--01-table-to-curve.webp" width="900" height="1090" alt="A table of values for y = x² − 2x − 3 from x = −2 to 5 (y = 5, 0, −3, −4, −3, 0, 5, 12) is plotted as crosses and joined by a smooth U-shaped curve. The curve is symmetrical about the dashed line x = 1. It is drawn smoothly, not with ruler segments." loading="lazy">
  <figcaption>Plot a table, then draw one smooth curve; the table is symmetrical about x = 1.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-introduction-to-algebra-and-manipulation--06-complete-the-square.webp" width="900" height="870" alt="A square of side x + 4 is built from x^2, two strips 4x and a 4 by 4 corner of 16. So x^2 + 8x = (x + 4)^2 - 16, and x^2 + 8x - 5 = (x + 4)^2 - 21." loading="lazy">
  <figcaption>Half of 8 gives p = 4; the 16 added to complete the square must be taken away.</figcaption>
</figure>


## A12: recognise the shape

| Equation | Recognise it by |
|---|---|
| y = mx + c | Straight line |
| y = ax² + bx + c | Parabola, one turning point |
| y = x³ | S-shape through the origin, flat at (0, 0) |
| y = 1/x (x ≠ 0) | Two branches, first and third quadrants, never touches the axes |
| y = kˣ, k > 0 (Higher tier only) | Through (0, 1), always above the x-axis |
| y = sin x (Higher tier only) | Wave from 0, max 1 at 90°, period 360° |
| y = cos x (Higher tier only) | Wave from 1, min −1 at 180°, period 360° |
| y = tan x (Higher tier only) | Repeats every 180°, no value at 90°, 270°, … |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-exact-trigonometric-values-and-trigonometric-functions--04-tan-graph.webp" width="900" height="860" alt="Graph of y = tan x from 0 to 360 degrees with dashed asymptotes at 90 and 270 degrees. Branches pass through (0,0), (180,0) and (360,0), approach the asymptotes without touching, and repeat every 180 degrees." loading="lazy">
  <figcaption>Tan x has asymptotes at 90 and 270 degrees and repeats every 180 degrees.</figcaption>
</figure>


## A13: transformations (Higher tier only)

| Graph | Effect on point (a, b) |
|---|---|
| y = f(x) + k | (a, b + k) |
| y = f(x + k) | (a − k, b) |
| y = −f(x) | (a, −b) |
| y = f(−x) | (−a, b) |

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--11-gr-graph-transformations.webp" width="900" height="1140" alt="Four graphs show y = f(x) dashed through (2, 4) and its image: f(x − 3) moves right 3, f(x) + 2 moves up 2, −f(x) reflects in the x-axis and f(−x) reflects in the y-axis. The change inside the bracket moves the graph the opposite way to the sign; outside it works as written." loading="lazy">
  <figcaption>The change inside the bracket moves the graph the opposite way to the sign; outside it works as written.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--15-gr-area-gradient-curve.webp" width="900" height="1070" alt="A speed-time curve through (0,0), (2,7), (4,12), (6,15), (8,16) with four trapezia of areas 7, 19, 27, 31 totalling 84 m, and the tangent at t = 4 with gradient 2 m/s². Area under the curve is distance (underestimated by trapezia on a concave curve); the tangent gradient is the acceleration." loading="lazy">
  <figcaption>Area under the curve is distance (underestimated by trapezia on a concave curve); the tangent gradient is the acceleration.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--10-area-under-graph-units.webp" width="900" height="1117" alt="Speed-time grid, one square = 1 s by 2 m/s. Four strips under the curve cover 42 squares, so area = 42 x 2 = 84 m, not 42 m; an underestimate." loading="lazy">
  <figcaption>Convert grid squares to units using both axis scales: 42 squares x 2 m = 84 m.</figcaption>
</figure>


## A14 and A15: real contexts, gradients and areas

- **Graphical solution (A14):** draw the extra line y = (the other side) and read the x-values at the intersections.
- Horizontal section on a distance-time graph = stationary.
- **Higher tier only (A15):**
  1. Gradient at a point: draw a tangent that touches the curve once; use two far-apart points on it.
  2. Area under a curve: equal-width trapezia, area = (h/2) × [first + 2(middle values) + last].
  3. Say whether it is an over- or underestimate: if the curve bends down, trapezia sit below it (underestimate).
  4. Give units: m/s² for a velocity-time gradient, m for its area.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-exponential-growth-decay-and-surds--01-growth-vs-linear.webp" width="900" height="780" alt="A graph of a population of 25 000 growing 2.4% a year for 8 years. The curve reaches about 30 223, while adding 600 a year in a straight line reaches only 29 800. The curve pulls ahead because each percentage is taken of the current value." loading="lazy">
  <figcaption>Exponential growth pulls ahead of linear growth because each year's percentage is taken of a larger value.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-in-practical-situations--03-van-journey.webp" width="900" height="930" alt="A distance-time graph of a van: 36 km out in 45 minutes (48 km/h), a flat 30 minute stop, then 36 km back in an hour (36 km/h). The whole trip is 72 km in 2.25 hours, so the average speed is 32 km/h, with the stop counted." loading="lazy">
  <figcaption>Reading speed, stops and average speed from a distance-time graph.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--02-solve-with-a-line.webp" width="900" height="1090" alt="The curve y = x² − 2x − 3 is drawn once. Its x-axis crossings (x = −1 and 3) solve x² − 2x − 3 = 0. Rearranging x² − 4x − 1 = 0 gives the line y = 2x − 2, which meets the curve at about x = −0.2 and 4.2." loading="lazy">
  <figcaption>Draw the curve once, then choose the line that matches the equation to solve.</figcaption>
</figure>


## A16: circles (Higher tier only)

- Radius from x² + y² = r²: square-root the number. x² + y² = 49 has radius 7.
- **Tangent at (a, b):** radius gradient b/a; tangent gradient −a/b; then find c through (a, b).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--12-gr-circle-tangent.webp" width="900" height="990" alt="The circle x² + y² = 20, the radius to (2, −4) with gradient −2 and the perpendicular tangent y = ½x − 5. The tangent is perpendicular to the radius, so its gradient is the negative reciprocal." loading="lazy">
  <figcaption>The tangent is perpendicular to the radius, so its gradient is the negative reciprocal.</figcaption>
</figure>


## Small worked reminders

These use different numbers from the study guide, so you can check the method quickly.

**Line with a given gradient through a point.** Gradient 2 through (−3, 4):

```
4 = 2(-3) + c  ->  c = 10     so  y = 2x + 10
```

**Graphical solution.** Using the curve y = x² − 6x + 5, solve x² − 6x + 5 = 5:

```
Draw y = 5. Intersections at x = 0 and x = 6.
Check: x^2 - 6x = 0  ->  x(x - 6) = 0
```

**Trapezium estimate (Higher tier only).** Velocities 2, 8 and 11 m/s at t = 0, 3 and 6 s:

```
Area = (3/2) x [2 + 2(8) + 11] = 1.5 x 29 = 43.5 m
```

**Circle tangent (Higher tier only).** x² + y² = 10 at (1, 3):

```
Radius gradient 3/1 = 3, so tangent gradient -1/3
3 = (-1/3)(1) + c  ->  c = 10/3      so  x + 3y = 10
```

**Trig graph symmetry (Higher tier only).** cos x = 0.5 at x = 60°. The cosine graph is symmetrical about x = 180°, so the second solution in 0° to 360° is 360° − 60° = 300°.

## Must-know distinctions

- **Root vs y-intercept:** roots have y = 0; the y-intercept has x = 0.
- **Parallel vs perpendicular:** same gradient vs negative reciprocal.
- **f(x) + a vs f(x + a):** the first moves up or down; the second moves left or right, opposite to the sign.
- **Chord vs tangent:** a chord joins two points on a curve (average rate); a tangent touches at one point (rate at that instant).
- **Reciprocal vs exponential:** y = 1/x never touches either axis; y = kˣ crosses the y-axis at 1.

## Quick self-test

1. Find the gradient of the line through (2, 5) and (6, 17).
2. Find the equation of the line in question 1.
3. Write down the gradient and y-intercept of 3x + 2y = 12.
4. (Higher) Write down the gradient of a line perpendicular to y = 4x − 7.
5. For y = x² − 6x + 5, find the roots and the turning point.
6. (Higher) Write x² + 10x + 18 in the form (x + p)² + q and state the turning point.
7. Name the type of graph: (a) y = 1/x (b) y = x³.
8. (Higher) (3, 1) lies on y = f(x). Write down its image on (a) y = f(x + 2) (b) y = −f(x).
9. (Higher) Write down the radius of x² + y² = 49.
10. (Higher) Write down the coordinates where y = 2ˣ crosses the y-axis, and the value of y when x = 3.
11. A distance-time graph has a straight section from (10 min, 4 km) to (30 min, 12 km). Find the speed in km/h.
12. (Higher) A velocity-time graph is a straight line from (0 s, 0 m/s) to (10 s, 20 m/s). Find the acceleration and the distance travelled.

### Answers

1. (17 − 5) ÷ (6 − 2) = 12 ÷ 4 = **3**.
2. 5 = 3(2) + c, so c = −1: **y = 3x − 1**.
3. y = −1.5x + 6: gradient **−3/2**, y-intercept **6**.
4. **−1/4**.
5. (x − 1)(x − 5) = 0: roots **x = 1 and x = 5**. Line of symmetry x = 3; y = 9 − 18 + 5 = −4: turning point **(3, −4)**, a minimum.
6. **(x + 5)² − 7**, turning point **(−5, −7)**.
7. (a) **Reciprocal** (b) **Cubic**.
8. (a) **(1, 1)** (b) **(3, −1)**.
9. **7**.
10. **(0, 1)**; y = 2³ = **8**.
11. 8 km in 20 minutes = 8 × 3 = **24 km/h**.
12. Acceleration = 20 ÷ 10 = **2 m/s²**; distance = ½ × 10 × 20 = **100 m**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--14-gr-exponential-graphs.webp" width="900" height="1090" alt="y = 3^x, 2^x and (½)^x pass through (0, 1), stay above the x-axis, and take values 9, 4 and ¼ at x = 2. For k &gt; 1 the graph rises and a larger k is steeper; for 0 &lt; k &lt; 1 it falls." loading="lazy">
  <figcaption>For k &gt; 1 the graph rises and a larger k is steeper; for 0 &lt; k &lt; 1 it falls.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-gcse-maths-8300-graphs--08-line-through-two-points.webp" width="900" height="830" alt="Graph of the line through (-1, 7) and (3, -1) with a dashed gradient triangle (+4 across, -8 down). Gradient -2, intercept 5, equation y = -2x + 5, checked at (3, -1)." loading="lazy">
  <figcaption>The line through (-1, 7) and (3, -1): gradient, intercept, equation and check.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--05-sketch-cubic.webp" width="900" height="1030" alt="Sketch of y = x³ − 4x² + 3x = x(x − 1)(x − 3). The curve crosses the x-axis at 0, 1 and 3, coming up from bottom left, turning twice, and rising to top right because the x³ coefficient is positive." loading="lazy">
  <figcaption>Factorise a cubic to find its roots, then follow the rise, turn, fall, turn, rise.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-0580-graphs-of-functions-and-sketching-curves--06-asymptotes.webp" width="900" height="1230" alt="Two Extended sketches with dashed asymptotes. y = 2/x + 1 has asymptotes x = 0 and y = 1 and crosses the x-axis at (−2, 0). y = 3 × 2ˣ − 6 has asymptote y = −6, y-intercept (0, −3) and root x = 1." loading="lazy">
  <figcaption>Reciprocal and exponential curves approach their asymptotes but never cross or touch them.</figcaption>
</figure>


## Where marks are usually lost

- Reading m from an equation such as 3x + 2y = 12 without rearranging first.
- Subtracting coordinates in a different order on the top and bottom of the gradient fraction.
- Writing a perpendicular gradient as the reciprocal with the same sign.
- Plotting a correct table but joining quadratic points with a ruler.
- Stating a turning point from (x + p)² + q as (p, q) instead of (−p, q).
- Translating y = f(x − 2) left instead of right.
- On a reciprocal sketch, letting the curve touch or cross an axis.
- Forgetting units, or giving speed in km per minute when km/h is asked.
- For an area estimate, missing the "under or over" comment, or using unequal strip widths.
- For a circle tangent, using the radius gradient itself instead of its negative reciprocal.

## Frequently asked questions

**What do the gradient and intercept mean in a real-life graph?**
The gradient is a rate, such as cost per hour, and the intercept is the starting value, such as a fixed charge. Give both meanings in context with units.

**How do you find the turning point of a quadratic graph?**
Find the x-value midway between the roots and substitute it to get y. At Higher tier, completing the square to (x + p)² + q gives the turning point (−p, q).

**How do you estimate the area under a curve?**
Split the area into equal-width strips and use trapezia, then say whether the result is an over- or underestimate. If the curve bends down, the trapezia sit below it and give an underestimate.

**What is the difference between f(x) + a and f(x + a)?**
f(x) + a moves the graph up or down by a. f(x + a) moves it left or right, in the opposite direction to the sign, so f(x − 2) moves 2 to the right.

## Official syllabus

AQA GCSE Mathematics (8300) specification, for teaching from September 2015, exams from May/June 2017, version 1.0, published by AQA -- section 3.2.2 Graphs (A8 to A16).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--02-gradient-signs.webp" width="900" height="880" alt="Four small graphs: a rising line has positive gradient, a falling line negative, a horizontal line zero, and a vertical line has no gradient because the run is zero." loading="lazy">
  <figcaption>Uphill is positive, downhill is negative, flat is zero.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--04-y-mx-c.webp" width="900" height="990" alt="The line y = 2x - 1 crosses the y-axis at (0, -1) so c = -1. Between (1, 1) and (3, 5) it goes 2 across and 4 up, so m = 2." loading="lazy">
  <figcaption>m is the gradient and c is where the line crosses the y-axis.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--05-parallel-lines.webp" width="900" height="1000" alt="Lines y = 2x - 1 and y = 2x + 3 each go 1 across and 2 up, so they are parallel. The parallel line through P (1, 5) has c = 3." loading="lazy">
  <figcaption>Parallel lines share a gradient; use a point to find c.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-mathematics-coordinate-geometry--06-perpendicular-lines.webp" width="900" height="960" alt="Two lines meet at right angles at (0, 1). One has gradient 2/3 and the other -3/2; their product is -1." loading="lazy">
  <figcaption>Perpendicular gradients multiply to -1.</figcaption>
</figure>

