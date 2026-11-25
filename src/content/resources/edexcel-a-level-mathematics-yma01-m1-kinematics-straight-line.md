---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M1 Kinematics of a particle moving in a straight line"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M1: Mechanics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 5.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-kinematics-straight-line-edexcel-alevel-maths"
description: "Edexcel IAL Maths M1 straight-line kinematics: choosing suvat formulae, four kinds of motion graph, unknowns from graph areas, and vertical motion."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 3 of Unit M1: Mechanics 1 (WME01) in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3: "Motion in a straight line with constant acceleration." The guidance says "graphical solutions may be required, including displacement-time, velocity-time, speed-time and acceleration-time graphs" and that "knowledge and use of formulae for constant acceleration will be required". The five constant acceleration formulae are on the list of formulae you must remember: they are not in the booklet.

The broader [models, vectors and constant acceleration guide](/resources/edexcel-ial-mathematics-mathematical-models-vectors-in-mechanics-and-constant/) shows the basic use of these formulae. This guide concentrates on the harder question types: simultaneous equations from several stages, unknowns found from graph areas, all four kinds of graph, and time spent above a height.

## What the specification asks for

| You must be able to | Typical question |
|---|---|
| Use the five constant acceleration formulae | Find a speed, time, distance or acceleration |
| Choose signs for a positive direction | Vertical motion under gravity, with g = 9.8 m s⁻² |
| Draw and read velocity–time graphs | Gradient is acceleration, area is displacement |
| Draw and read speed–time graphs | Area is distance travelled |
| Draw and read displacement–time graphs | Gradient is velocity |
| Draw and read acceleration–time graphs | Constant acceleration gives horizontal line segments |

## The five formulae

```
v = u + at              (no s)
s = ut + (1/2)at^2      (no v)
s = vt - (1/2)at^2      (no u)
v^2 = u^2 + 2as         (no t)
s = (1/2)(u + v)t       (no a)
```

Each formula leaves out one of s, u, v, a and t. List the three values you know and the one you want. The quantity you neither know nor want tells you which formula to use. The formula s = vt − ½at² is the one students forget. It is the quickest route when the initial speed is unknown.

**Example.** A car decelerates uniformly and has speed 4 m s⁻¹ after travelling 50 m in 5 s. Here u is unknown and unwanted at first, so use s = vt − ½at²: 50 = 4(5) − ½a(25), so a = −2.4 m s⁻². Then u = v − at = 4 + 12 = 16 m s⁻¹.

## Where the formulae come from

On a velocity–time graph for constant acceleration, the line is straight from (0, u) to (t, v):

- The gradient is (v − u)/t = a, which rearranges to v = u + at.
- The area under the line is a trapezium, ½(u + v)t, which is s.

So any constant acceleration question can also be done from a sketch. When a question has several stages, a sketch is usually clearer than a list of formulae.

## The four kinds of graph

| Graph | Gradient means | Area means | Constant acceleration looks like |
|---|---|---|---|
| Displacement–time | Velocity | (not used) | A curve (part of a parabola) |
| Velocity–time | Acceleration | Displacement (signed) | A straight line |
| Speed–time | Magnitude of acceleration | Distance travelled | Straight lines, reflected above the axis |
| Acceleration–time | (not used) | Change in velocity | A horizontal line |

**Velocity against speed.** When a particle changes direction, its velocity becomes negative. On a velocity–time graph the line crosses the time axis. On a speed–time graph that part is reflected above the axis, making a V shape. Area below the axis on a velocity–time graph counts negatively in displacement but positively in distance.

## Worked example 1: three points and two unknowns

A particle moves along a straight line with constant acceleration. It passes A, B and C in that order. It takes 2 s to go from A to B, a distance of 24 m, and 2 s to go from B to C, a distance of 36 m. Find its acceleration and its speed at A and at C.

You know two intervals but not u or a. Write s = ut + ½at² for A to B and for A to C, with u the speed at A:

```
A to B (t = 2, s = 24):   24 = 2u + 2a
A to C (t = 4, s = 60):   60 = 4u + 8a
from the first: u = 12 - a
60 = 4(12 - a) + 8a = 48 + 4a,  so a = 3 m s^-2
u = 9 m s^-1,  speed at C = 9 + 3(4) = 21 m s^-1
```

Check B to C: the speed at B is 9 + 6 = 15, and 15(2) + ½(3)(4) = 36. Using A to C, not B to C, means both equations use the same u.

## Worked example 2: an unknown speed from a graph

A train starts from rest and accelerates uniformly for 20 s to a speed V m s⁻¹. It keeps this speed for 120 s, then decelerates uniformly to rest in 30 s. The total distance is 2900 m. Find V and sketch the acceleration–time graph.

```
area of velocity-time graph = (1/2)(20)V + 120V + (1/2)(30)V
                            = 10V + 120V + 15V = 145V
145V = 2900,  so V = 20
```

The accelerations are 20/20 = 1 m s⁻² for the first 20 s, 0 for the next 120 s, and −20/30 = −2/3 m s⁻² for the last 30 s. The acceleration–time graph is three horizontal segments: at height 1 from t = 0 to 20, on the axis from 20 to 140, and at −2/3 from 140 to 170. It is not a continuous line; it jumps where the acceleration changes.

## Worked example 3: vertical motion and time above a height

A ball is thrown vertically upwards from ground level at 19.6 m s⁻¹. Find how long it is at least 14.7 m above the ground.

Take upwards as positive, so a = −9.8:

```
s = ut + (1/2)at^2:   14.7 = 19.6t - 4.9t^2
4.9t^2 - 19.6t + 14.7 = 0,  so  t^2 - 4t + 3 = 0
(t - 1)(t - 3) = 0,  t = 1 or t = 3
```

The ball passes 14.7 m on the way up at t = 1 and on the way down at t = 3. It is above that height for 3 − 1 = 2 s. Both roots are physical here; neither is rejected.

## Worked example 4: velocity–time and speed–time from one motion

A ball is thrown vertically upwards at 9.8 m s⁻¹ from the top of a tower 14.7 m high, and lands at the foot of the tower. Find the time of flight, and the distance travelled.

```
upwards positive, s = -14.7 at the ground:
-14.7 = 9.8t - 4.9t^2,  so  t^2 - 2t - 3 = 0,  t = 3 (t = -1 rejected)
v at ground = 9.8 - 9.8(3) = -19.6 m s^-1
```

The velocity–time graph is one straight line from 9.8 at t = 0 to −19.6 at t = 3, crossing the axis at t = 1, where the ball is at the top. The speed–time graph falls from 9.8 to 0 at t = 1, then rises to 19.6 at t = 3.

The ball rises ½(1)(9.8) = 4.9 m, then falls ½(2)(19.6) = 19.6 m. The distance travelled is 4.9 + 19.6 = 24.5 m. The displacement is 4.9 − 19.6 = −14.7 m, the height of the tower, which checks the answer.

## Common mistakes

- Not choosing a positive direction, so g has the wrong sign in some lines.
- Using a formula from one stage of a journey with the speed from another stage.
- Treating the area under a velocity–time graph as distance when part of it is below the axis.
- Drawing an acceleration–time graph with sloping lines for constant acceleration.
- Rejecting a valid root, or keeping a negative time.
- Using an average of two speeds as an average speed. Average speed is total distance ÷ total time.

## Exam technique

- **"Sketch a velocity–time graph"** needs labelled axes, the key values marked (speeds and times), and straight lines for constant acceleration.
- **"Use the graph to find"** means use areas or gradients, with the shapes named.
- **"Show that V satisfies…"** means form the area equation and simplify to the given form.
- **"Explain why"** a root is rejected: link it to the situation, such as "T would be negative".
- After using g = 9.8, give answers to 2 or 3 significant figures.

## Where next

- [M1 kinematics revision notes](/resources/edexcel-a-level-mathematics-yma01-m1-kinematics-straight-line-revision-notes/) for a summary and self-test.
- [M1 kinematics practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-kinematics-straight-line-practice/) with mark schemes.
- [M1 vectors in mechanics study guide](/resources/edexcel-a-level-mathematics-yma01-m1-vectors-in-mechanics/) for motion in two dimensions.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
