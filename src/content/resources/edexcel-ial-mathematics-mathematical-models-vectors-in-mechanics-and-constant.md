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
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
publishedDate: 2026-10-11
featured: false
reviewNote: "2026-11-08: reviewed by sajawal-zahid."
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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--06-vector-motion-plane.webp" width="900" height="900" alt="The path of r = (t³ − 3t)i + (2t² + 1)j from t = 0 to 2 with velocity arrows. At t = 0 the velocity is minus 3i, at t = 1 it is 4j (i component zero) and at t = 2 it is 9i + 8j, speed 12.0 m/s, with acceleration 12i + 4j." loading="lazy">
  <figcaption>Differentiate each component separately; parallel to j means the i component of velocity is zero.</figcaption>
</figure>


### Worked example 2: resolving

<!-- marlbridge-diagram:maths-b22-resolving-force-components-35 -->
<figure class="lesson-diagram" style="margin: 2rem 0;">
  <a href="/images/learning/mathematics/maths-b22-resolving-force-components-35.svg" aria-label="Open full-size diagram: maths-b22-resolving-force-components-35"><img src="/images/learning/mathematics/maths-b22-resolving-force-components-35.svg" width="1600" height="1050" alt="An 18 N force acts 35 degrees above the horizontal. Its horizontal component is 18 cos 35 degrees = 14.7 N and its upward vertical component is 18 sin 35 degrees = 10.3 N, so F=(14.7i+10.3j) N." loading="lazy" decoding="async" style="display: block; width: 100%; height: auto;" /></a>
  <figcaption>An 18 N force acts 35 degrees above the horizontal. Its horizontal component is 18 cos 35 degrees = 14.7 N and its upward vertical component is 18 sin 35 degrees = 10.3 N, so F=(14.7i+10.3j) N. Select the image to enlarge it.</figcaption>
</figure>
<!-- /marlbridge-diagram:maths-b22-resolving-force-components-35 -->


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--01-distance-displacement.webp" width="900" height="910" alt="A number line from minus 4 to 14 m shows a particle moving 12 m forward, 5 m back and 9 m back, ending at minus 2 m after 20 s. Distance is 26 m, giving average speed 1.3 m/s. Displacement is minus 2 m, giving average velocity minus 0.1 m/s." loading="lazy">
  <figcaption>Distance adds every leg; displacement only compares start and end, so the two averages differ.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--03-suvat-trapezium.webp" width="900" height="920" alt="A straight-line velocity-time graph from 5 to 13 m/s over 4 s has gradient 2. The area is a 36 m trapezium that splits into a rectangle of 20 and a triangle of 16. These give v = u + at, s = ½(u+v)t, s = ut + ½at², and eliminating t gives v² = u² + 2as." loading="lazy">
  <figcaption>The suvat equations are the gradient and area of one straight-line velocity-time graph.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--04-vertical-two-roots.webp" width="900" height="910" alt="A displacement-time parabola for a ball thrown up at 21 m/s peaks at 22.5 m. The line s = 15 m meets it at t = 0.91 s going up and t = 3.38 s coming down, with velocities plus and minus 12.1 m/s from the tangent gradients. The gap of 2.47 s is the time above 15 m." loading="lazy">
  <figcaption>The two roots of the quadratic are the times going up and coming down through the same height.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--05-calculus-turning-points.webp" width="900" height="1040" alt="Two graphs share a time axis. Displacement x = 2t³ − 15t² + 24t reaches 11 m at t = 1, minus 16 m at t = 4 and minus 5 m at t = 5. Velocity, its derivative, is zero at t = 1 and 4 and negative between. Displacement is minus 5 m but distance is 11 + 27 + 11 = 49 m." loading="lazy">
  <figcaption>Find where v = 0, split the motion there, and add the sizes of the stages for distance.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--07-projectile-two-motions.webp" width="900" height="800" alt="A projectile launched at 24.5 m/s with sin α = 0.6, drawn to scale with dots every 0.5 s. The dots are 9.8 m apart horizontally (constant 19.6 m/s) while vertical speed falls from 14.7 to zero at the top and to minus 14.7 on landing. T = 3 s, R = 58.8 m, H = 11.0 m." loading="lazy">
  <figcaption>Horizontal motion is uniform and vertical motion has acceleration −g; time links the two.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--08-cliff-landing.webp" width="900" height="830" alt="A stone is thrown from a 20 m cliff at 18 m/s and 25 degrees above horizontal. Setting y = minus 20 gives 4.9t² − 7.607t − 20 = 0, with roots 2.94 s and minus 1.39 s. The negative root belongs to the dashed backward extension inside the cliff and is rejected. It lands 48.0 m away at 26.8 m/s." loading="lazy">
  <figcaption>When the landing level differs, put the landing height into y and reject the negative root.</figcaption>
</figure>


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

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/aqa-a-level-mathematics-kinematics--02-vt-graph-areas.webp" width="900" height="900" alt="A velocity-time graph rises to 12 m/s in 5 s, stays level to t = 11, then falls to minus 4 m/s at t = 15, crossing zero at t = 14. The areas are 30, 72, 18 above the axis and 2 below. Displacement is 118 m and distance 122 m." loading="lazy">
  <figcaption>Gradients give acceleration; areas give displacement, and distance counts every area as positive.</figcaption>
</figure>


## Common errors

- Giving the assumption but not its consequence for the motion.
- Using tan θ = b/a for an angle measured from j, when it should be a/b.
- Swapping sin and cos when converting a bearing to components.
- Treating deceleration of 3 as a = +3 in a formula, when the acceleration is −3.
- Using a formula with a different positive direction from the one you set.
- Using one formula for a journey with more than one acceleration, instead of splitting it into stages.
- Confusing speed with velocity, or distance with displacement.
- Reading the gradient of a velocity-time graph as velocity.

## Frequently asked questions

**What does modelling an object as a particle mean?**
A particle is a model in which all the mass is at a single point, so the object's size, shape and rotation are ignored.

**How do you resolve a force into components?**
Draw a right-angled triangle with the force as the hypotenuse. The component adjacent to the given angle is F cos θ and the opposite component is F sin θ, each with a sign taken from the diagram.

**What value of g is used in Edexcel IAL Mechanics?**
Vertical motion under gravity uses an acceleration of 9.8 m s⁻², taken as −9.8 if upwards is positive or +9.8 if downwards is positive. Keep the same positive direction for every quantity.

**How do you deal with a journey that has more than one acceleration?**
Split the motion into stages with constant acceleration in each, and use the final velocity of one stage as the initial velocity of the next. One suvat equation cannot be applied across a change of acceleration.

**Which sections of Edexcel IAL Unit M1 does this guide cover?**
It covers Unit M1 sections 1.1 (mathematical models), 2.1 and 2.2 (vectors in mechanics) and 3.1 (constant acceleration) of the Edexcel IAL Mathematics specification (YMA01).

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level in Mathematics, Further Mathematics and Pure Mathematics, Specification, Issue 3, April 2019, Pearson Education Limited. This guide covers Unit M1: Mechanics 1, sections 1.1, 2.1, 2.2 and 3.1.
