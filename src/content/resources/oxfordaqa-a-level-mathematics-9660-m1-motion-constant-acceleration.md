---
title: "OxfordAQA A-level Mathematics (9660): Motion in a straight line with constant acceleration"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- M1: Mechanics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-constant-acceleration-oxfordaqa-alevel-maths"
description: "OxfordAQA 9660 M1.1 in depth: deriving suvat from graphs, two-particle and multi-stage problems, and vertical motion from a height, with worked examples."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **M1.1 Motion in a straight line with constant acceleration** of OxfordAQA International AS and A-level Mathematics (9660), specification version 5.2, part of the Mechanics strand of International AS Unit PSM1. It goes beyond the basic one-step problems to the harder question types: problems with two moving particles, journeys with several stages, graphs with an unknown, and vertical motion that starts above or below the landing point. Take g = 9.8 m s⁻², as the specification does, and give answers to 3 significant figures unless a question says otherwise.

For the definitions and the standard single-stage examples, start with the [study guide to kinematics in a straight line](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable/). Then use the [M1.1 revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-constant-acceleration-revision-notes/) and the [M1.1 practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-constant-acceleration-practice/). The next section, variable acceleration, is in the [M1.2 study guide](/resources/oxfordaqa-a-level-mathematics-9660-m1-motion-variable-acceleration/).

## What M1.1 lists

| Content | Additional information in the specification |
|---|---|
| Displacement, speed, velocity, acceleration | The difference between displacement and distance, and between velocity and speed |
| Sketching and interpreting kinematics graphs | Use of gradients and area under graphs to solve problems |
| Knowledge and use of constant acceleration equations | s = ut + ½at², s = vt − ½at², v = u + at, s = ½(u + v)t, v² = u² + 2as |
| Vertical motion under gravity | |
| Average speed | |

## Where the equations come from

Every constant acceleration equation can be read off a straight-line velocity–time graph from (0, u) to (t, v). This matters because questions may ask you to justify an equation, and because the graph is the safest way to plan a multi-stage problem.

```
Gradient of the line = acceleration:     a = (v − u)/t      ->  v = u + at
Area under the line (a trapezium):       s = ½(u + v)t
Substitute v = u + at into the area:     s = ½(2u + at)t = ut + ½at²
Substitute u = v − at instead:           s = vt − ½at²
Eliminate t using t = (v − u)/a:         s = ½(u + v)(v − u)/a  ->  v² = u² + 2as
```

If a question says "show that", writing one of these lines of reasoning earns the method marks.

## Sign conventions in practice

Choose one positive direction at the start and mark it on your sketch. Every displacement, velocity and acceleration then carries a sign. Three consequences catch candidates out:

- A displacement below the starting point is negative when up is positive, so a stone landing 30 m below its launch point has s = −30.
- A quadratic in t often gives two roots. One may be negative (before the motion started) and must be rejected, or both may be positive (the particle passes the same point twice).
- Deceleration of 3 m s⁻² while moving in the positive direction means a = −3.

## Worked example 1: two particles on the same line

Car P passes a point O travelling at a constant 16 m s⁻¹. At the same instant car Q starts from rest at O and moves in the same direction with constant acceleration 2 m s⁻². Find (a) when the cars have the same speed, (b) when and where Q catches P, and (c) the greatest distance between them before Q catches P.

```
Positions after t seconds, measured from O:
   P: s = 16t
   Q: s = ½ × 2 × t² = t²

(a) Q's speed = 2t = 16  ->  t = 8 s
(b) t² = 16t  ->  t(t − 16) = 0  ->  t = 16 s  (t = 0 is the start)
    Distance from O = 16 × 16 = 256 m
(c) Gap = 16t − t². It is greatest when the speeds are equal, t = 8:
    gap = 128 − 64 = 64 m
```

The key idea in (c) is that the gap grows while P is faster and shrinks once Q is faster, so the gap is greatest when the speeds are equal. This avoids calculus, which M1.1 does not need.

## Worked example 2: a journey with an unknown stage

A lift starts from rest and accelerates uniformly at 1.2 m s⁻² until it reaches 2.4 m s⁻¹. It then moves at constant speed and finally decelerates uniformly at 0.8 m s⁻² to rest. The total distance is 36 m. Find the total time.

```
Stage 1: t = 2.4 / 1.2 = 2 s,  s = ½ × 2.4 × 2 = 2.4 m
Stage 3: t = 2.4 / 0.8 = 3 s,  s = ½ × 2.4 × 3 = 3.6 m
Stage 2: distance = 36 − 2.4 − 3.6 = 30 m,  time = 30 / 2.4 = 12.5 s
Total time = 2 + 12.5 + 3 = 17.5 s
Average speed = 36 / 17.5 = 2.06 m s⁻¹
```

Sketch the velocity–time graph first: a trapezium with height 2.4 and the three time intervals marked. The area condition (36 m) is what fixes the unknown middle stage.

## Worked example 3: three points, constant acceleration

A particle moving with constant acceleration passes points A, B and C in that order on a straight line. AB = 24 m and BC = 40 m. It takes 2 s to travel from A to B and another 2 s from B to C. Find its acceleration and its speed at A.

```
Let u be the velocity at A. Use s = ut + ½at² from A each time.
A to B (t = 2, s = 24):   24 = 2u + 2a
A to C (t = 4, s = 64):   64 = 4u + 8a
From the first: u = 12 − a. Substitute: 64 = 48 − 4a + 8a  ->  a = 4 m s⁻²
u = 12 − 4 = 8 m s⁻¹
Check: speed at C = 8 + 4 × 4 = 24 m s⁻¹, and s = ½(8 + 24) × 4 = 64 ✓
```

Measuring every displacement from the same point A avoids needing the unknown speed at B.

## Vertical motion that starts above the ground

**Worked example 4.** A stone is thrown vertically upwards at 14.7 m s⁻¹ from the edge of a cliff 39.2 m above the sea. Find (a) the time it takes to reach the sea, (b) its speed as it hits the sea, and (c) the length of time for which it is more than 9.8 m above the cliff top.

```
Up positive, a = −9.8, u = 14.7, s measured from the cliff top.
(a) The sea is 39.2 m below the start, so s = −39.2:
    −39.2 = 14.7t − 4.9t²
    4.9t² − 14.7t − 39.2 = 0   ->   t² − 3t − 8 = 0
    t = (3 + √41)/2 = 4.70 s     (the negative root is rejected)
(b) v² = u² + 2as = 14.7² + 2(−9.8)(−39.2) = 216.09 + 768.32 = 984.41
    speed = 31.4 m s⁻¹ (downwards)
(c) s = 9.8:  9.8 = 14.7t − 4.9t²  ->  t² − 3t + 2 = 0  ->  t = 1 or t = 2
    The stone is above that level between t = 1 and t = 2, so for 1 s.
```

Part (c) shows why two positive roots are useful: they are the times on the way up and on the way down. The time between them is the time spent above that height.

**Modelling assumptions** you may be asked to state: the stone is a particle; air resistance is negligible; the stone moves in a vertical line; g is constant at 9.8 m s⁻². Including air resistance would make the stone's maximum height lower and its impact speed smaller.

## Interpreting displacement–time graphs

On a displacement–time graph the **gradient** is the velocity. A straight line means constant velocity; a line sloping down means motion in the negative direction; a horizontal section means the particle is at rest. Constant non-zero acceleration gives a curved (parabolic) displacement–time graph, so straight-line segments on such a graph mean the acceleration is zero on each segment. Average speed over a journey shown on a displacement–time graph is total distance (adding every leg as positive) divided by total time.

## Common mistakes

- Using s = +39.2 for a point below the start when up is positive.
- Keeping the negative root of a time quadratic.
- Treating "decelerates at 0.8" as a = +0.8 when the particle moves in the positive direction.
- In two-particle problems, measuring the two displacements from different origins, or forgetting a time delay between the starts.
- Using the five equations across two stages with different accelerations as if they were one stage.
- Giving speed with a sign, or velocity without a direction.

## Exam technique

- **Find** means give the value with units; **show that** means every step must be visible, ending with the given result.
- Write the list u, v, a, s, t with known values before choosing an equation.
- Keep exact values (such as √41) until the final line, then round to 3 significant figures.
- When a question says "state an assumption", give one that affects the model, such as no air resistance, not a general statement.

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, version 5.2, published by OxfordAQA: Unit PSM1, Mechanics, section M1.1.
