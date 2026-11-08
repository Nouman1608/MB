---
title: "Kinematics and Motion Graphs: Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["o-levels"]
topic: "Motion, forces and energy"
boards: ["cambridge"]
qualifications: ["o-level"]
syllabusCodes: ["5054"]
syllabusSeries: "2026-2028"
order: 1.2
syllabusTopics:
  - qualification: "o-level"
    topic: "motion-forces-and-energy"
    subtopic: "physical-quantities-and-measurement-techniques"
  - qualification: "o-level"
    topic: "motion-forces-and-energy"
    subtopic: "motion"
description: "Condensed recall notes on speed, velocity, acceleration and motion graphs for Cambridge O Level Physics 5054 — definitions, equations and graph rules."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Kinematics and Motion Graphs study guide](/resources/kinematics/).

## Definitions — scalar or vector

| Quantity | Type | Definition |
|---|---|---|
| Distance | Scalar | Total path length travelled |
| Displacement | Vector | Straight-line distance in a stated direction |
| Speed | Scalar | Distance per unit time |
| Velocity | Vector | Displacement per unit time (speed in a given direction) |
| Acceleration | Vector | Rate of change of **velocity** |

Acceleration occurs whenever speed changes, direction changes, or both — a car turning a corner at a constant speedometer reading is still accelerating, because its direction is changing.

**Worked example.** A runner completes one full lap of a 400 m track.
Distance travelled = **400 m** (the total path length). Displacement =
**0 m** (they end up back at the start, so the straight-line distance
from start to finish is zero) — a clean illustration of why distance and
displacement are not the same quantity, even for real motion.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--01-distance-displacement.webp" width="900" height="920" alt="A runner doing one lap of a 400 m track has distance 400 m and displacement 0. A walker going 300 m east then 100 m west has distance 400 m and displacement 200 m east." loading="lazy">
  <figcaption>Distance is the path length; displacement is the straight-line change from the start, with direction.</figcaption>
</figure>


## Equations

```
speed         v = d / t
acceleration  a = (v - u) / t

u = initial velocity   v = final velocity
a in m/s2              deceleration is NEGATIVE acceleration
```

**Worked example.** A cyclist accelerates from 2 m/s to 8 m/s in 4 s.
```
a = (8 - 2) / 4 = 1.5 m/s^2
```
**Worked example.** A trolley decelerates from 12 m/s to 4 m/s in 2 s.
```
a = (4 - 12) / 2 = -4 m/s^2
```
The negative sign itself shows this is a deceleration — there's no
separate "deceleration formula" to remember.

## Reading the two graphs — learn this table

| | Distance–time | Speed–time |
|---|---|---|
| Gradient gives | **Speed** | **Acceleration** |
| Horizontal line | At rest | Constant speed |
| Horizontal line lying on the time axis | At rest | At rest (speed = 0) |
| Straight slope | Constant speed | Constant acceleration |
| Curve getting steeper | Accelerating | Changing acceleration |
| Curve getting less steep | Decelerating | Changing acceleration |
| Area under graph | *No meaning* | **Distance travelled** |

The single most useful fact: **area under a speed–time graph = distance**, found by splitting the graph into triangles and rectangles — this technique applies to motion with **constant speed or constant acceleration** (a graph with changing acceleration isn't calculated this way at this level).

**Worked example.** An object accelerates uniformly from rest to 10 m/s
in 5 s, then travels at 10 m/s for a further 8 s. Find the total
distance travelled.
```
Stage 1 (triangle):   1/2 x 5 x 10  = 25 m
Stage 2 (rectangle):  8 x 10        = 80 m
                                      -----
Total distance                       = 105 m
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--02-distance-time-gradient.webp" width="900" height="900" alt="A distance-time graph rises 20 m in 4 s (5 m/s), stays flat for 4 s (at rest), then rises 50 m in 4 s (12.5 m/s). The steeper line is faster." loading="lazy">
  <figcaption>On a distance-time graph the gradient is the speed, and a flat line means at rest.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--04-speed-time-area.webp" width="900" height="930" alt="Speed rises from 0 to 10 m/s in 5 s then stays constant for 8 s. Gradient of the slope is 2 m/s squared. Triangle area 25 m plus rectangle area 80 m gives 105 m." loading="lazy">
  <figcaption>Gradient gives acceleration and area gives distance travelled.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--05-same-shape.webp" width="900" height="975" alt="Four small graphs compare the same line shapes. A sloping line is constant speed on a distance-time graph but constant acceleration on a speed-time graph. A flat line is rest on distance-time but constant speed on speed-time." loading="lazy">
  <figcaption>The same line shape means different things on the two graphs.</figcaption>
</figure>


## Free fall

- Acceleration of free fall **g = 9.8 m/s²**.
- Without air resistance, all objects fall with the same acceleration regardless of mass — a feather and a hammer dropped in a vacuum land together.
- With air resistance: drag rises with speed until drag = weight, resultant force = 0, and the object falls at constant **terminal velocity**.
- On a speed–time graph, terminal velocity is where the curve **flattens** — the object does not slow down.
- A skydiver's speed–time graph before and after the parachute opens shows: a rising curve that flattens as the object approaches its (higher) terminal velocity in free fall, then a sharp drop in speed the instant the parachute opens (drag suddenly increases), followed by the curve flattening again at a much lower terminal velocity for the rest of the descent.

## Exam traps

- Deceleration is negative acceleration, not a separate quantity.
- Gradient of a *distance*–time graph is speed, never acceleration.
- Area under a *distance*–time graph means nothing — don't calculate it.
- An object moving at constant speed in a circle **is** accelerating, because direction changes.
- Use u for initial and v for final consistently; swapping them flips the sign.
- Check units: convert km/h to m/s by dividing by 3.6.
- Confusing distance with displacement, or speed with velocity — the first of each pair is a scalar, the second a vector.
- Mixing up which axis a gradient is taken from before deciding what it represents.

## Self-test

1. A car goes from 5 m/s to 25 m/s in 8 s. Find the acceleration.
2. What does the area under a speed–time graph represent?
3. Sketch the speed–time graph of a skydiver before and after the parachute opens.
4. Why is an object in circular motion at constant speed accelerating?
5. A graph of distance against time is a horizontal line. What is happening?
6. A runner completes one lap of a 400 m track. State the distance travelled and the displacement.
7. An object accelerates uniformly from rest to 10 m/s in 5 s, then travels at 10 m/s for 8 s. Find the total distance.

**Answers:** 1. a = (25 − 5)/8 = **2.5 m/s²**. 2. Distance travelled. 3. Rising curve flattening to terminal velocity, sharp drop when the parachute opens, then flattening to a lower terminal velocity. 4. Velocity is a vector; direction is changing continuously, so velocity changes and there is acceleration. 5. The object is stationary — distance is not changing. 6. Distance = **400 m**; displacement = **0 m**, since the runner returns to the starting point. 7. 25 m (triangle) + 80 m (rectangle) = **105 m**.

For the full worked explanations behind every example above, see the [Kinematics and Motion Graphs study guide](/resources/kinematics/); for exam-style questions with full mark schemes, see the [Kinematics practice questions](/resources/kinematics-practice/).

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--03-distance-time-tangent.webp" width="900" height="900" alt="A curved distance-time graph gets steeper, so the object accelerates. A tangent at 4 s rises 32 m over 4 s, so the speed at that instant is 8 m/s." loading="lazy">
  <figcaption>For a curve, the speed at an instant is the gradient of the tangent.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/kinematics--06-free-fall.webp" width="900" height="920" alt="A ball dropped from rest is shown at 0, 1, 2 and 3 seconds with gaps that grow. Its downward speed is 9.8, 19.6 and 29.4 m/s, so it gains 9.8 m/s each second." loading="lazy">
  <figcaption>In free fall, speed increases by about 9.8 m/s every second.</figcaption>
</figure>

## Frequently asked questions

**What is the gradient of a speed-time graph?**
The gradient of a speed-time graph is the acceleration, and the area under it is the distance travelled. The gradient of a distance-time graph is the speed, never the acceleration.

**Is an object moving in a circle at constant speed accelerating?**
Yes. Its direction keeps changing, so its velocity changes, which means it is accelerating even though its speed is constant.

**How do you convert km/h to m/s?**
Divide by 3.6. For example, 72 km/h is 72 ÷ 3.6 = 20 m/s.

**Is deceleration a separate quantity?**
No. Deceleration is negative acceleration, found with the same equation a = (v − u) / t; the answer simply comes out negative.
