---
title: "OxfordAQA International AS and A-level Mathematics: Kinematics in a straight line: constant and variable acceleration (9660)"
seoTitle: "OxfordAQA 9660 Maths Kinematics Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Kinematics in a straight line: constant and variable acceleration"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 185
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-constant-acceleration-oxfordaqa-alevel-maths"
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-motion-variable-acceleration-oxfordaqa-alevel-maths"
description: "Study guide to straight-line motion for OxfordAQA International AS Maths 9660: graphs, constant acceleration, gravity and calculus, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers sections M1.1 (motion in a straight line with constant acceleration) and M1.2 (motion in a straight line with variable acceleration) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. The specification places this content in International AS Unit PSM1 (Pure Maths, Statistics and Mechanics), where Mechanics carries 20 of the 80 marks; it carries no further tier labels.

Use it with the [revision notes](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-revision-notes/) and the [practice questions](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-practice/). The course hub is [/boards/oxfordaqa/a-level/mathematics/](/boards/oxfordaqa/a-level/mathematics/) and the printable checklist is [/checklists/oxfordaqa/a-level/mathematics/](/checklists/oxfordaqa/a-level/mathematics/). To find your weak spots first, take the [free 10-minute diagnostics](/diagnostics/). The calculus you need is the Unit P1 calculus, covered in the [Pure Maths 1 study guide](/resources/a-level-oxfordaqa-mathematics-unit-p1/).

## What this unit covers

| Ref | What you must be able to do |
|---|---|
| M1.1 | Use displacement, distance, speed, velocity and acceleration correctly |
| M1.1 | Sketch and interpret kinematic graphs, using gradients and areas |
| M1.1 | Use the five constant acceleration equations |
| M1.1 | Model vertical motion under gravity; find average speed |
| M1.2 | Use v = ds/dt and a = dv/dt = d²s/dt² |
| M1.2 | Use s = ∫v dt and v = ∫a dt, with P1 calculus only |

## The language of motion

Motion in a straight line means you can describe position with a single number on a number line. Choose a positive direction and keep to it.

| Quantity | Vector or scalar | Meaning |
|---|---|---|
| Distance | Scalar | Total length of path travelled, never negative |
| Displacement | Vector | Change in position, with a sign for direction |
| Speed | Scalar | Rate of change of distance, never negative |
| Velocity | Vector | Rate of change of displacement, with a sign |
| Acceleration | Vector | Rate of change of velocity |

Average speed is total distance ÷ total time. Average velocity is displacement ÷ time. If a particle turns round, the two differ.

**Worked example 1.** A trolley runs 40 m east along a straight track, then 15 m west, taking 25 s in all. Take east as positive.

```
Distance = 40 + 15 = 55 m
Displacement = 40 − 15 = 25 m (east)
Average speed = 55 ÷ 25 = 2.2 m/s
Average velocity = 25 ÷ 25 = 1 m/s (east)
```

Units: use metres, seconds, m/s and m/s². A negative acceleration means the velocity is decreasing in your positive direction. It does not by itself mean the particle is slowing: if the particle is already travelling in the negative direction, a negative acceleration increases its speed.

## Kinematic graphs

Two graphs matter most.

| Graph | Gradient gives | Area under graph gives |
|---|---|---|
| Displacement–time | Velocity | Nothing useful |
| Velocity–time | Acceleration | Displacement |

A horizontal line on a velocity–time graph is constant velocity. A straight sloping line is constant acceleration. A line on the time axis is rest. Area below the axis is negative displacement, so for distance you add the areas as positive quantities.

A simple velocity–time shape in text:

```
v (m/s)
12 |      ______________
   |     /              \
   |    /                \
 0 |___/__________________\____ t (s)
   0    8              28    34
```

**Worked example 2.** A tram starts from rest, accelerates uniformly to 12 m/s in 8 s, holds 12 m/s for 20 s, then decelerates uniformly to rest in 6 s. Find the acceleration in the first stage, the total distance and the average speed.

```
Stage 1 acceleration = gradient = 12 ÷ 8 = 1.5 m/s²
Stage 3 acceleration = −12 ÷ 6 = −2 m/s²
Area = ½ × 8 × 12 + 12 × 20 + ½ × 6 × 12
     = 48 + 240 + 36 = 324 m
Total time = 8 + 20 + 6 = 34 s
Average speed = 324 ÷ 34 = 162/17 ≈ 9.53 m/s
```

You can also treat the whole shape as a trapezium: ½(34 + 20) × 12 = 324.

## Constant acceleration equations

When acceleration a is constant, with initial velocity u, final velocity v, displacement s and time t, M1.1 lists these five equations:

| Equation | Missing variable |
|---|---|
| v = u + at | s |
| s = ut + ½at² | v |
| s = vt − ½at² | u |
| s = ½(u + v)t | a |
| v² = u² + 2as | t |

Method:

1. Draw a sketch and mark the positive direction.
2. List the variables you know and the one you want.
3. Pick the equation that contains those four and nothing else.
4. Substitute with signs, then solve.

If a question says "from rest", u = 0. "Comes to rest" means v = 0.

**Worked example 3.** A car moves at 8 m/s and accelerates uniformly at 1.5 m/s² for 6 s. Find its final speed and the distance covered.

```
v = u + at = 8 + 1.5 × 6 = 17 m/s
s = ut + ½at² = 8 × 6 + ½ × 1.5 × 36 = 48 + 27 = 75 m
Check: s = ½(u + v)t = ½ × 25 × 6 = 75 m
```

**Worked example 4.** A van slows uniformly from 20 m/s and stops after 50 m. Find the deceleration and the time taken.

```
u = 20, v = 0, s = 50, a = ?
v² = u² + 2as → 0 = 400 + 100a → a = −4 m/s²
v = u + at → 0 = 20 − 4t → t = 5 s
```

The deceleration is 4 m/s². Give the answer as a magnitude if the question asks for "deceleration", or as −4 if it asks for the acceleration.

**Worked example 5 (the equation with s = vt − ½at²).** A scooter finishes a 4 s stretch at 14 m/s, having accelerated at 2.5 m/s². Find the distance covered in those 4 s and its speed at the start.

```
s = vt − ½at² = 14 × 4 − ½ × 2.5 × 16 = 56 − 20 = 36 m
u = v − at = 14 − 2.5 × 4 = 4 m/s
```

This equation is useful when you know the final velocity but not the initial one.

## Vertical motion under gravity

Treat the object as a particle that moves only under gravity, ignoring air resistance. Its acceleration is then constant, of magnitude g, directed downwards. The specification takes g as 9.8 m/s² where it uses gravity, so use 9.8 unless a question says otherwise.

Choose upwards as positive and use a = −9.8. Key facts:

- At the highest point v = 0.
- Time up equals time down when it returns to the launch height, and the speed on return equals the launch speed.
- For a particle dropped, u = 0.

**Worked example 6.** A ball is thrown vertically upwards at 18 m/s from ground level. Find the greatest height and the time before it returns to the ground.

```
Up positive: u = 18, a = −9.8, v = 0 at the top
v² = u² + 2as → 0 = 324 − 19.6s → s = 324 ÷ 19.6 ≈ 16.5 m
Return to ground: s = 0
s = ut + ½at² → 0 = 18t − 4.9t² = t(18 − 4.9t)
t = 0 (launch) or t = 18 ÷ 4.9 ≈ 3.67 s
```

The model ignores air resistance and treats the ball as a point. Both are assumptions you may be asked to state.

## Variable acceleration: differentiation

When acceleration is not constant, the five equations do not apply. Use calculus. With s the displacement from a fixed point at time t:

```
v = ds/dt        a = dv/dt = d²s/dt²
```

M1.2 restricts the calculus to that in Unit P1, so expect polynomials and powers x^n with n rational, such as t^(1/2) or t^(−1/2), with no exponentials or trigonometric functions.

To find when a particle is at rest, set v = 0. To find its greatest or least velocity, set a = 0 (and check which it is).

## Variable acceleration: integration

Reverse the process:

```
v = ∫a dt        s = ∫v dt
```

Each indefinite integral has a constant. Use a given condition, such as "at t = 0, v = 4", to find it. A definite integral from t = p to t = q gives displacement over that interval, not distance.

**Worked example 7.** A particle moves on a line with velocity v = 3t² − 30t + 63 m/s, and its displacement from the origin is 4 m when t = 0. Find the acceleration at t = 3, the times it is at rest, and the distance it travels in the first 8 s.

```
a = dv/dt = 6t − 30, so at t = 3, a = −12 m/s²
At rest: 3t² − 30t + 63 = 0 → 3(t − 3)(t − 7) = 0 → t = 3 or t = 7
s = ∫v dt = t³ − 15t² + 63t + c, and s = 4 at t = 0 gives c = 4
s = t³ − 15t² + 63t + 4
s(0) = 4, s(3) = 85, s(7) = 53, s(8) = 60
```

The particle changes direction at t = 3 and t = 7, so find each leg separately.

```
0 to 3 s: 85 − 4 = 81 m forwards
3 to 7 s: 53 − 85 = −32, so 32 m backwards
7 to 8 s: 60 − 53 = 7 m forwards
Distance = 81 + 32 + 7 = 120 m,  displacement = s(8) − s(0) = 56 m
```

Splitting at the times v = 0 is the step most often missed. A single definite integral from 0 to 8 would give the displacement, 56 m, not the distance.

**Worked example 8 (fractional powers).** A particle has acceleration a = 3t^(−1/2) m/s² for t > 0 and starts with v = 2 m/s. Find v and the displacement gained between t = 0 and t = 4.

```
v = ∫3t^(−1/2) dt = 6t^(1/2) + c; v(0) = 2 gives c = 2
v = 6√t + 2
s = ∫(6t^(1/2) + 2) dt = 4t^(3/2) + 2t (+ const)
Displacement from t = 0 to 4 = (4 × 8 + 8) − 0 = 40 m
```

## Common errors

- Using suvat when acceleration varies. If a depends on t, use calculus.
- Mixing signs: taking up as positive for u but using a = +9.8.
- Treating distance and displacement as the same after a turn.
- Forgetting the constant of integration, or using it without a boundary condition.
- Reading "v = 0" as "a = 0". At the top of a throw, v = 0 but a is still −9.8.
- Using the area under a displacement–time graph.
- Rounding too early. Keep exact values until the last line.

## Where next

Move to the [revision notes](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-revision-notes/) for a compact summary and self-test, then try the [practice questions](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable-practice/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2, published by OxfordAQA. Sections M1.1 and M1.2 of Unit PSM1.
