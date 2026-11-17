---
title: "Graphs in Practical Situations: Revision Notes"
resourceType: "revision-notes"
subject: "mathematics"
level: ["o-levels"]
topic: "Algebra and graphs"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["4024"]
syllabusSeries: "2025-2027"
order: 2.9
syllabusTopics:
  - qualification: "o-level"
    topic: "algebra-and-graphs"
    subtopic: "graphs-in-practical-situations"
description: "Condensed recall notes on distance-time and speed-time graphs, conversion graphs and rates of change for Cambridge O Level Mathematics 4024."
author: "muhammad-ghazali-siddiqui"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-08-22
featured: false
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by sajawal-zahid on 2026-09-29; 2026-11-08: credited to sajawal-zahid (accountable teacher, D-379)."
---

Condensed for the final weeks. For worked examples, use the
[Graphs in Practical Situations study guide](/resources/graphs-in-practical-situations/).

## The two travel graphs — never confuse them

| | Distance–time | Speed–time |
|---|---|---|
| **Gradient** = | Speed | **Acceleration** |
| **Horizontal line** = | Stationary | Constant speed |
| **Area under** = | *Nothing* | **Distance travelled** |
| Straight slope = | Constant speed | Constant acceleration |
| Negative gradient = | Returning to start | Deceleration |

The two most valuable facts: **gradient of a speed–time graph is acceleration**, and **area under a speed–time graph is distance**. Always check which quantity sits on the vertical axis before interpreting a graph — the single most common source of lost marks in this topic is applying a distance–time rule to a speed–time graph, or vice versa.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--07-gp-travel.webp" width="900" height="860" alt="A distance-time graph of an illustrative journey: rising 40 km in the first hour (40 km per hour), flat for the second hour (stopped), then rising 60 km in the third hour (a steeper line, 60 km per hour)." loading="lazy">
  <figcaption>On a travel graph a horizontal section means stopped and a steeper section means faster.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--11-gp-two-meanings.webp" width="900" height="1090" alt="Two identical rising straight lines. On the distance-time graph the gradient is the speed, 4 m/s. On the speed-time graph the gradient is the acceleration, 4 m/s squared." loading="lazy">
  <figcaption>The same straight line means constant speed on a distance–time graph but constant acceleration on a speed–time graph.</figcaption>
</figure>

## Finding gradient

```
gradient = change in y / change in x
```

Use a **large triangle** spanning most of the line for accuracy, and read coordinates from the **line**, not from plotted data points.

For a **curve**, draw a tangent at the point and find the gradient of the tangent — that gives the instantaneous rate of change.

**Worked example.** A distance–time graph shows a curve of increasing gradient. What does this describe, and how do you find the speed at a particular instant?
The object is **speeding up**, because the gradient — and therefore the speed — is increasing along the curve. To find the speed at a particular instant: **draw a tangent to the curve at that point**, then **construct a large right-angled triangle on the tangent**, and the speed is the change in distance divided by the change in time for that triangle.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--09-gp-tangent.webp" width="900" height="890" alt="A curved distance-time graph with a tangent at point P (3 s, 18 m). Two points on the tangent give a rise of 24 m over 2 s, so the speed at P is 12 metres per second." loading="lazy">
  <figcaption>The speed at a point on a curved distance–time graph is the gradient of the tangent there.</figcaption>
</figure>

## Area under a speed–time graph

Split into rectangles, triangles and trapezia.

```
rectangle  = base x height
triangle   = 1/2 x base x height
trapezium  = 1/2 (a + b) x h
```

**Worked:** a car accelerates from rest to 20 m/s in 8 s, holds 20 m/s for 12 s, then stops in 5 s.

```
Triangle:   1/2 x 8 x 20   = 80 m
Rectangle:  12 x 20        = 240 m
Triangle:   1/2 x 5 x 20   = 50 m
                             ------
Total distance             = 370 m
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--10-gp-speed-time-area.webp" width="900" height="920" alt="A speed-time graph rising to 12 m/s in 6 seconds then constant for 10 seconds. The triangle under the first part is 36 m, the rectangle under the second part is 120 m, total 156 m. The gradient of the first part is 2 m/s squared." loading="lazy">
  <figcaption>The area under a speed–time graph is the distance travelled: 36 + 120 = 156 m.</figcaption>
</figure>

## Displacement vs distance travelled

If a speed–time (strictly, **velocity–time**) graph dips below the time axis, the object is moving in the **opposite direction**. The area **above** the axis is positive displacement, and the area **below** is negative.

- **Displacement** = the **difference** between the two areas (net position change).
- **Distance travelled** = the **sum** of their magnitudes (total ground covered).

**Worked example.** A velocity–time graph shows a line starting at +6 m/s and falling steadily to −4 m/s over 10 s. Find the acceleration, and explain the difference between the displacement and the distance travelled.
```
acceleration = (-4 - 6) / 10 = -1.0 m/s^2
```
Where the line crosses the axis, the object is **momentarily at rest**, then moves in the opposite direction. The area above the axis is a triangle of ½ × 6 × 6 = 18 m; the area below is a triangle of ½ × 4 × 4 = 8 m. The **displacement is 18 − 8 = 10 m**, but the **distance travelled is 18 + 8 = 26 m** — always add the areas for distance, and subtract for displacement.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--12-gp-enrichment.webp" width="900" height="910" alt="Enrichment. A velocity-time line falls from plus 9 to minus 3 m/s over 12 s, crossing zero at 9 s. Area above the axis 40.5 m, below 4.5 m. Displacement is 40.5 minus 4.5 = 36 m; distance is 40.5 plus 4.5 = 45 m." loading="lazy">
  <figcaption>Subtract the areas for displacement and add them for distance travelled.</figcaption>
</figure>

## Conversion graphs

A straight line converting between two units (currency, miles/km, °C/°F). Read across and down; state the units in your answer.

The line passes through the origin **only when the two quantities are directly proportional** — miles and kilometres, for instance, since 0 miles is 0 kilometres. Celsius and Fahrenheit is the standard counter-example: the line crosses the Fahrenheit axis at 32, not at the origin, because 0 °C is 32 °F — the relationship is linear but **not** proportional.

The **gradient is the conversion factor only when the relationship is directly proportional** (a line through the origin). For a non-proportional conversion such as Celsius to Fahrenheit, the gradient (1.8) is the rate of change between the scales, but no single multiplying factor converts one reading directly to the other, since a fixed offset (the 32) must also be applied.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--08-gp-conversion.webp" width="900" height="870" alt="A straight-line conversion graph from degrees Celsius to degrees Fahrenheit (F = 1.8C + 32). Guide lines go up from 25 degrees Celsius to the line and across to 77 degrees Fahrenheit." loading="lazy">
  <figcaption>A conversion graph lets a value be read off in one unit once it is known in the other.</figcaption>
</figure>

## Rates of change

Any straight-line graph's gradient is a rate: cost per item, litres per minute, wages per hour. Interpret the gradient **in context** with units — that phrasing is what earns the mark.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/graphs-in-practical-situations--13-gp-rates.webp" width="900" height="1240" alt="Two straight-line graphs. Cost rises 6 pounds to 12 pounds over 5 items, so 1.20 pounds per item. Volume rises 18 litres over 6 minutes, so a flow rate of 3 litres per minute." loading="lazy">
  <figcaption>The gradient of a graph is a rate: £1.20 per item and 3 litres per minute here.</figcaption>
</figure>

## Exam traps

- Do not calculate the area under a *distance*–time graph — it has no meaning.
- Read the axis labels before deciding what the gradient represents.
- Check units: km/h vs m/s. Divide km/h by 3.6 for m/s.
- Use a large triangle; small ones magnify reading errors.
- A horizontal line on a speed–time graph means constant speed, **not** stopped.
- When a velocity–time graph dips below the axis, add the areas for distance but subtract them for displacement.
- Using a small triangle when drawing a tangent — it magnifies any reading error.

## Self-test

1. What does the gradient of a distance–time graph represent?
2. What does the area under a speed–time graph represent?
3. A horizontal line on a speed–time graph — what is happening?
4. A car goes 0 to 15 m/s in 6 s. Find the acceleration and the distance covered.
5. Convert 72 km/h to m/s.
6. A distance–time graph is a curve with increasing gradient. What does this describe?
7. A velocity–time graph's area below the axis represents what?

**Answers:** 1. Speed. 2. Distance travelled. 3. The object is moving at constant speed (zero acceleration). 4. a = 15/6 = **2.5 m/s²**; distance = ½ × 6 × 15 = **45 m**. 5. 72 ÷ 3.6 = **20 m/s**. 6. The object is speeding up, since the gradient — and so the speed — is increasing. 7. **Negative displacement** — motion in the opposite direction, still counted positively when totalling distance travelled.

For exam-style questions with full mark schemes on this topic, see the [Travel Graphs practice questions](/resources/travel-graphs-practice/).

## Frequently asked questions

**What does the area under a distance-time graph represent?**
Nothing useful: the area under a distance-time graph has no meaning. It is the area under a speed-time graph that gives the distance travelled.

**What is the difference between a speed-time and a velocity-time graph?**
A velocity-time graph can dip below the time axis, which means the object is moving in the opposite direction. Area above the axis is positive displacement and area below is negative.

**What should you check first when reading a travel graph?**
Read the axis labels to see which quantity is on the vertical axis before interpreting the gradient or area. Confusing distance-time with speed-time graphs is the most common source of lost marks.

**What is a conversion graph?**
A conversion graph is a straight line converting between two units, such as currencies, miles and kilometres, or °C and °F, as covered in Cambridge O Level Mathematics 4024. Read across and down, and give the units in your answer.
