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
publishedDate: 2026-08-22
featured: false
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

## Finding gradient

```
gradient = change in y / change in x
```

Use a **large triangle** spanning most of the line for accuracy, and read coordinates from the **line**, not from plotted data points.

For a **curve**, draw a tangent at the point and find the gradient of the tangent — that gives the instantaneous rate of change.

**Worked example.** A distance–time graph shows a curve of increasing gradient. What does this describe, and how do you find the speed at a particular instant?
The object is **speeding up**, because the gradient — and therefore the speed — is increasing along the curve. To find the speed at a particular instant: **draw a tangent to the curve at that point**, then **construct a large right-angled triangle on the tangent**, and the speed is the change in distance divided by the change in time for that triangle.

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

## Displacement vs distance travelled

If a speed–time (strictly, **velocity–time**) graph dips below the time axis, the object is moving in the **opposite direction**. The area **above** the axis is positive displacement, and the area **below** is negative.

- **Displacement** = the **difference** between the two areas (net position change).
- **Distance travelled** = the **sum** of their magnitudes (total ground covered).

**Worked example.** A velocity–time graph shows a line starting at +6 m/s and falling steadily to −4 m/s over 10 s. Find the acceleration, and explain the difference between the displacement and the distance travelled.
```
acceleration = (-4 - 6) / 10 = -1.0 m/s^2
```
Where the line crosses the axis, the object is **momentarily at rest**, then moves in the opposite direction. The area above the axis is a triangle of ½ × 6 × 6 = 18 m; the area below is a triangle of ½ × 4 × 4 = 8 m. The **displacement is 18 − 8 = 10 m**, but the **distance travelled is 18 + 8 = 26 m** — always add the areas for distance, and subtract for displacement.

## Conversion graphs

A straight line through the origin converting between two units (currency, °C/°F, miles/km). Read across and down; state the units in your answer.

Because the relationship is proportional, the **gradient is the conversion factor**.

## Rates of change

Any straight-line graph's gradient is a rate: cost per item, litres per minute, wages per hour. Interpret the gradient **in context** with units — that phrasing is what earns the mark.

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
