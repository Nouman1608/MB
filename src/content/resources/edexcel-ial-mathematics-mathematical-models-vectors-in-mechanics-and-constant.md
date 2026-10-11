---
title: "Pearson Edexcel International Advanced Level Mathematics: Models, vectors and constant acceleration (YMA01)"
seoTitle: "Edexcel IAL Maths M1 Models, Vectors and SUVAT Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Mathematical models, vectors in mechanics and constant acceleration"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 155
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-mathematical-models-in-mechanics-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-vectors-in-mechanics-edexcel-alevel-maths"
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-kinematics-straight-line-edexcel-alevel-maths"
description: "Study guide to Edexcel International Advanced Level Maths M1: mechanical models, vectors in mechanics and constant acceleration, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---

This guide covers Unit M1: Mechanics 1, sections 1.1, 2.1, 2.2 and 3.1 of the Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics specification (Issue 3, April 2019). Under the specification, M1 is optional: it can be taken within IAS Mathematics, IAS Further Mathematics, IAL Mathematics and IAL Further Mathematics. It lists P1, P2 and vectors in two dimensions as prerequisites.

Course links: the [Edexcel A Level Mathematics hub](/boards/edexcel/a-level/mathematics/), the [printable checklist](/checklists/edexcel/a-level/mathematics/) and the [free diagnostics](/diagnostics/). After this guide use the [revision notes](/resources/edexcel-ial-mathematics-mathematical-models-vectors-in-mechanics-and-constant-revision-notes/) and the [practice questions](/resources/edexcel-ial-mathematics-mathematical-models-vectors-in-mechanics-and-constant-practice/).

## What this unit covers

| Section | You must be able to |
|---|---|
| 1.1 | Use the terms particle, lamina, rigid body, rod, inextensible string, smooth and rough, light smooth pulley, bead, wire and peg, and state the assumptions behind them |
| 2.1 | Find the magnitude and direction of a vector, resolve it into two components, find resultants, use i and j |
| 2.2 | Apply vectors to displacement, velocity, acceleration and force in a plane |
| 3.1 | Use constant acceleration formulae and displacement-time, velocity-time, speed-time and acceleration-time graphs |

## 1.1 Mathematical models in mechanics

A mathematical model replaces a real situation with a simpler one that you can solve. You choose assumptions, solve, then ask whether the answer is reasonable. The specification asks you to know these terms and their assumptions.

| Term | Assumption it makes |
|---|---|
| Particle | All mass at one point; size, shape and rotation ignored |
| Lamina | Flat object with negligible thickness |
| Rigid body | Does not bend or deform |
| Rod | Long thin rigid object, treated as one-dimensional; light if its mass is negligible, uniform if its mass is spread evenly, non-uniform otherwise |
| Light string | Negligible mass, so tension is the same along it |
| Inextensible string | Does not stretch, so connected objects move together |
| Smooth surface | No friction |
| Rough surface | Friction acts |
| Light smooth pulley | Negligible mass and no friction, so the string tension is unchanged by passing over it |
| Bead | A particle threaded on a wire, free to slide |
| Wire | Thin, rigid, one-dimensional |
| Peg | A fixed support of negligible thickness |

Other common assumptions are no air resistance and constant gravitational acceleration. When you give an assumption in an answer, add its effect, for example: "inextensible, so both particles have the same acceleration".

## 2.1 Vectors: magnitude, direction and components

A vector has size and direction. In two dimensions write it as ai + bj, where i and j are unit vectors in perpendicular directions (often east and north, or horizontal and vertical).

```
magnitude of ai + bj = √(a² + b²)
angle θ with the i direction: tan θ = b/a (use the sign of a and b to place it)
a vector of magnitude R at angle θ to i: R cos θ i + R sin θ j
```

### Worked example 1: magnitude and direction

Find the magnitude of v = (−5i + 12j) m s⁻¹ and the angle between v and the positive j direction.

```
|v| = √(25 + 144) = 13 m s⁻¹
tan φ = 5/12 (horizontal over vertical, as the angle is from j)
φ = 22.6° to 1 decimal place
```

The angle is 22.6° from the positive j direction, towards the negative i side.

### Resolving a vector

To resolve means to split a vector into two perpendicular parts. Draw a right-angled triangle with the vector as the hypotenuse. The component along the side adjacent to the angle uses cos, the opposite side uses sin.

### Worked example 2: resolving

A force of 18 N acts at 35° above the horizontal. With i horizontal and j vertically upwards:

```
horizontal = 18 cos 35° = 14.7 N
vertical   = 18 sin 35° = 10.3 N
force = (14.7i + 10.3j) N
```

For a bearing, measure clockwise from north. A velocity of 9 m s⁻¹ on bearing 140°, with i east and j north, has east component 9 sin 140° = 5.79 and north component 9 cos 140° = −6.89. So v = (5.79i − 6.89j) m s⁻¹. The sin and cos swap compared with an angle from the east axis.

### Resultants

The resultant of several vectors is their sum. Add the i parts and the j parts separately. A vector diagram places them nose to tail; the resultant joins the start to the end.

### Worked example 3: resultant of forces

Forces (6i + 2j) N, (−3i + 7j) N and (4i − j) N act on a particle.

```
resultant = (6 − 3 + 4)i + (2 + 7 − 1)j = (7i + 8j) N
magnitude = √(49 + 64) = √113 = 10.6 N
angle with i: tan α = 8/7, α = 48.8°
```

## 2.2 Vectors for displacement, velocity, acceleration and force

Displacement, velocity, acceleration and force are all vectors in a plane. Their magnitudes are, respectively, the straight-line distance from the start, the speed, the size of the acceleration and the size of the force.

The specification requires these two relationships for constant values:

```
velocity = (change of displacement)/time
acceleration = (change of velocity)/time
```

In symbols, for constant velocity v, a particle starting at r₀ has position r = r₀ + vt at time t. For constant acceleration a, a velocity u changes to v = u + at, so a = (v − u)/t.

### Worked example 4: constant velocity

A particle is at (−4i + 9j) m at t = 0 and moves with constant velocity (2.5i − 3j) m s⁻¹. Find when it is due north of the origin O, and its position at t = 5.

```
r = (−4 + 2.5t)i + (9 − 3t)j
due north of O means i component = 0: −4 + 2.5t = 0, so t = 1.6 s
there, j component = 9 − 3(1.6) = 4.2, so it is 4.2 m north of O
at t = 5: r = (−4 + 12.5)i + (9 − 15)j = (8.5i − 6j) m
```

Speed is the magnitude of velocity: √(2.5² + 3²) = 3.91 m s⁻¹.

### Worked example 5: acceleration from velocities

A particle's velocity changes from (3i + 2j) m s⁻¹ to (11i − 6j) m s⁻¹ in 4 s, with constant acceleration.

```
a = ((11 − 3)i + (−6 − 2)j)/4 = (2i − 2j) m s⁻²
magnitude = √8 = 2√2 = 2.83 m s⁻²
direction: 45° below the positive i direction
```

Always take final minus initial. To find the distance between two moving particles at time t, subtract their position vectors and take the magnitude.

## 3.1 Motion in a straight line with constant acceleration

Constant acceleration in a straight line means the acceleration does not change. Use s for displacement, u for starting velocity, v for final velocity, a for acceleration and t for time. The specification lists these formulae as ones you are expected to know, and says they will not appear in the formulae booklet.

| Formula | Use it when you have no value for |
|---|---|
| v = u + at | s |
| s = ut + ½at² | v |
| s = vt − ½at² | u |
| v² = u² + 2as | t |
| s = ½(u + v)t | a |

### Method

1. Choose a positive direction and keep it for every quantity.
2. Write down which of s, u, v, a and t you have been given, and which one you need.
3. Pick the formula that does not contain the fifth quantity.
4. Substitute, solve, and check that the answer has a sensible sign and size.

For a body falling or thrown vertically, a = ±9.8 m s⁻² with the sign set by your positive direction, and v = 0 at the highest point.

### Worked example 6: braking

A car slows uniformly from 28 m s⁻¹ to 12 m s⁻¹ in 5 s. Find its acceleration and the distance in that time, and the further distance to stop.

```
a = (v − u)/t = (12 − 28)/5 = −3.2 m s⁻²
s = ½(u + v)t = ½(28 + 12)(5) = 100 m
to stop from 12 m s⁻¹: 0 = 12² + 2(−3.2)s, so s = 144/6.4 = 22.5 m
```

The two distances add to 122.5 m, which matches stopping from 28 m s⁻¹ directly: 28²/(2 × 3.2).

### Worked example 7: vertical motion

A stone is thrown upwards at 25 m s⁻¹ from the top of a cliff 30 m above the sea. Find the time to reach the sea and its speed on arrival.

```
take up as positive: s = −30, u = 25, a = −9.8
−30 = 25t − 4.9t²  →  4.9t² − 25t − 30 = 0
t = (25 + √1213)/9.8 = 6.10 s  (the negative root is rejected)
v² = 25² + 2(9.8)(30) = 1213, so speed = 34.8 m s⁻¹
```

The velocity is −34.8 m s⁻¹, downwards; speed is the magnitude, 34.8 m s⁻¹.

## Motion graphs

| Type of graph | What its slope gives | What the enclosed area gives |
|---|---|---|
| Displacement against time | Velocity | Nothing useful |
| Velocity against time | Acceleration | Displacement |
| Speed against time | Size of the acceleration | Distance |
| Acceleration against time | Nothing needed here | Change in velocity |

For a constant acceleration, a velocity-time graph is a straight line. A horizontal line means constant velocity. Where a velocity-time graph crosses the axis, the object turns round. Areas above the axis are positive displacement and areas below are negative. For total distance, add all areas as positive. A speed-time graph is the velocity-time graph with any part below the axis reflected above it.

A curve on a displacement-time graph means changing velocity. A horizontal section means the object is at rest.

### Worked example 8: a journey in stages

A train accelerates uniformly from rest at 0.4 m s⁻² for 50 s, then travels at constant speed, then decelerates uniformly at 0.5 m s⁻² to rest. The total distance is 2500 m. Find the total time.

```
top speed = 0.4 × 50 = 20 m s⁻¹
braking time = 20/0.5 = 40 s
distance while accelerating = ½(20)(50) = 500 m
distance while braking = ½(20)(40) = 400 m
constant stage: 20T = 2500 − 900, so T = 80 s
total time = 50 + 80 + 40 = 170 s
```

### Worked example 9: reading a velocity-time graph

A particle's velocity falls uniformly from 8 m s⁻¹ at t = 0 to −4 m s⁻¹ at t = 6.

```
acceleration = (−4 − 8)/6 = −2 m s⁻²
at rest when 8 − 2t = 0, so t = 4
area 0 to 4 = ½(4)(8) = 16 (forwards)
area 4 to 6 = ½(2)(4) = 4 (backwards)
displacement = 16 − 4 = 12 m, distance = 16 + 4 = 20 m
```

The final speed is 4 m s⁻¹, but the velocity is −4 m s⁻¹.

## Common errors

- Giving the assumption but not its consequence for the motion.
- Using tan θ = b/a for an angle measured from j, when it should be a/b.
- Swapping sin and cos when converting a bearing to components.
- Treating deceleration of 3 as a = +3 in a formula, when the acceleration is −3.
- Using a formula with a different positive direction from the one you set.
- Using one formula for a journey with more than one acceleration, instead of splitting it into stages.
- Confusing speed with velocity, or distance with displacement.
- Reading the gradient of a velocity-time graph as velocity.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. This guide covers Unit M1: Mechanics 1, sections 1.1, 2.1, 2.2 and 3.1.
