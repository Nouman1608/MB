---
title: "AS Physics: Kinematics and Equations of Motion — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Kinematics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
order: 2.1
stage: "AS"
syllabusTopics:
  - qualification: "a-level"
    topic: "as-kinematics"
    subtopic: "as-equations-of-motion"
description: "Condensed recall notes on the suvat equations, motion graphs and projectile motion for Cambridge International AS & A Level Physics 9702."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08: FAQ section added; please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Kinematics and Equations of Motion study guide](/resources/as-physics-kinematics-equations-of-motion/).

Assessed on **Paper 1** (multiple choice, 1 h 15, 40 marks) and **Paper 2** (structured, 1 h 15, 60 marks), both testing AO1 and AO2 on AS content, so both recall of the equations and their application to unfamiliar situations can be examined.

## The four equations of motion

Valid **only for uniform acceleration** — check this condition before reaching for any of the four.

```
v = u + at
s = ut + 1/2 a t^2
v^2 = u^2 + 2as
s = (u + v) t / 2
```

Choosing the right one: list u, v, a, s, t; identify the three you know and the one you want; pick the equation containing exactly those four.

**"Derive" is an explicit syllabus command word here**, not just "recall": v = u + at follows directly from the definition of acceleration (a = Δv/Δt, rearranged), and the others follow by combining that with the definition of velocity — know the derivation, not just the finished equations.

**Determining g experimentally:** drop an object through a known, measured height and time the fall electronically (a light gate or a timer released by an electromagnet), then rearrange s = ½gt² (since u = 0) to **g = 2s/t²**. Repeating the drop and averaging t reduces the effect of random timing error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--02-suvat-from-graph.webp" width="900" height="1000" alt="A v-t graph for 6.0 to 22 m/s over 120 m has gradient 1.87 m/s squared and total area 120 m, split into a rectangle ut (51 m) and a triangle half a t squared (69 m). Four cards list the equations and which variable each leaves out." loading="lazy">
  <figcaption>The area under a v-t graph for constant acceleration gives s = ut + half a t squared; each suvat equation omits one variable.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--03-measuring-g.webp" width="900" height="1170" alt="An electromagnet releases a steel ball and starts a timer; a trapdoor stops it. Plotting h against t squared gives a straight line through the origin with gradient g over 2 = 4.90 m/s squared, so g = 9.80 m/s squared (data from the OCR worked example)." loading="lazy">
  <figcaption>h = half g t squared, so the gradient of h against t squared is g/2.</figcaption>
</figure>


## Scalars and vectors

| Scalar | Vector |
|---|---|
| distance, speed, mass, time, energy, work, power | displacement, velocity, acceleration, force, momentum, weight |

Vectors combine by the parallelogram rule or by resolving into perpendicular components, whichever suits the quantities given:

```
horizontal:  F cos(theta)
vertical:    F sin(theta)
```

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/igcse-oxfordaqa-physics-forces-and-their-effects--04-scalar-vector.webp" width="900" height="960" alt="A walk of 6 m east then 2 m west on a number line from 0 to 8 m. The distance travelled is 6 plus 2, 8 m, a scalar with no direction. The displacement is an arrow from the start to the end point, 4 m east, a vector. Below, scalars are mass, speed, distance and energy; vectors, drawn with arrows, are force, velocity, displacement and acceleration." loading="lazy">
  <figcaption>Distance versus displacement for a 6 m east, 2 m west walk, with scalar and vector examples from the lesson.</figcaption>
</figure>


## Motion graphs

| Graph | Gradient | Area under |
|---|---|---|
| Displacement–time | Velocity | — |
| Velocity–time | **Acceleration** | **Displacement** |
| Acceleration–time | — | Change in velocity |

For a curve, take the gradient of the **tangent** at the point, drawn as a straight line touching the curve at exactly that instant rather than joining two separate points on it.

Note "displacement", not "distance": area below the axis on a velocity–time graph is negative displacement, since the object is moving in the opposite direction to whichever was defined as positive.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-revision-notes--06-tangent-vs-chord.webp" width="900" height="970" alt="The curve s = t^2 has a solid tangent at t = 2 s with gradient 4 m/s (the velocity at that instant) and a dashed chord from t = 2 s to 4 s with gradient 6 m/s (only the average over that interval)." loading="lazy">
  <figcaption>Use the tangent, not a chord, for the gradient at a point.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--01-v-t-graph-gradient-area.webp" width="900" height="1160" alt="A velocity-time graph rises from 0 to 8 m/s in 4 s, stays at 8 m/s for 4 s, then falls to -4 m/s over 3 s. The areas are +16, +32, +8 m above the axis and -2 m below it, so displacement is 54 m and distance is 58 m. An acceleration-time graph beneath shows the gradients +2, 0 and -4 m/s squared." loading="lazy">
  <figcaption>Gradient of a v-t graph is acceleration; area is signed displacement, and distance adds the magnitudes.</figcaption>
</figure>


## Projectile motion — the whole method

Treat horizontal and vertical **independently**, applying the equations of motion separately in each direction. They share only the time.

```
HORIZONTAL   a = 0        so    s = u_x t          (constant velocity)
VERTICAL     a = -g       so    use suvat with u_y

At maximum height:   v_y = 0
Time of flight:      solve the vertical equation for s = 0
Range:               s = u_x x (time of flight)
Max height:          use v^2 = u_y^2 + 2as with v_y = 0 at the top
```

For a projectile launched at angle θ with speed u: `u_x = u cos θ`, `u_y = u sin θ`. See the [Kinematics and Equations of Motion study guide](/resources/as-physics-kinematics-equations-of-motion/) for the full derivations and worked reasoning behind every method above.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--05-horizontal-launch.webp" width="900" height="1210" alt="A ball thrown horizontally at 14 m/s from a 45 m cliff and a ball dropped at the same moment are shown every 0.5 s: always at the same height, landing together after 3.03 s. The thrown ball covers 7.0 m sideways each interval. It lands 42 m away at 33 m/s, 65 degrees below horizontal." loading="lazy">
  <figcaption>The horizontal and vertical motions are independent and share only the time.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-equations-of-motion--06-angled-projectile.webp" width="900" height="880" alt="A ball launched at 28 m/s, 35 degrees, has vx = 22.9 and vy = 16.1 m/s, flight time 3.27 s, range 75 m and maximum height 13.1 m. At the top the velocity is the horizontal component only and the acceleration is still g downwards." loading="lazy">
  <figcaption>At the top vertical velocity is zero but the speed equals vx and the acceleration is still g.</figcaption>
</figure>


## Air resistance

Without it, the trajectory is a symmetrical parabola. **With** air resistance the path becomes asymmetric: reduced range and maximum height, a steeper descent than ascent, and the impact speed is less than the launch speed, since a resistive force continuously removes kinetic energy from the projectile throughout its flight.

## Exam traps

- Applying suvat when acceleration is **not** uniform.
- Mixing horizontal and vertical quantities in one equation.
- Sign errors: choose a positive direction and hold it. Taking up as positive makes g = −9.81.
- Confusing distance with displacement, or speed with velocity.
- Forgetting that at maximum height the **vertical** velocity is zero but the horizontal is not.
- Using the gradient of a chord where a tangent is required.
- Reciting the suvat equations without being able to derive v = u + at from the definition of acceleration, when a question explicitly asks for a derivation.
- Timing a single drop when determining g experimentally, rather than repeating and averaging to reduce random timing error.

## Self-test

1. State the four equations of motion.
2. A ball is thrown at 20 m/s at 30° above the horizontal. Find its initial horizontal and vertical velocity components.
3. What does the area under a velocity–time graph give?
4. At the top of a projectile's path, which velocity component is zero?
5. Give two effects of air resistance on a projectile's path.
6. Derive v = u + at from the definition of acceleration.
7. Describe a method for determining g experimentally, including the equation used.

**Answers:** 1. v = u + at; s = ut + ½at²; v² = u² + 2as; s = (u+v)t/2. 2. u_x = 20 cos 30° = **17.3 m/s**; u_y = 20 sin 30° = **10 m/s**. 3. Displacement (not distance — area below the axis counts as negative). 4. The vertical component; the horizontal component is unchanged. 5. Any two: reduced range, reduced maximum height, asymmetric trajectory with a steeper descent, impact speed lower than launch speed. 6. Acceleration a = Δv/Δt = (v − u)/t; rearranging gives at = v − u, so v = u + at. 7. Drop an object through a known height, timing the fall with a light gate or electromagnet-released timer; rearrange s = ½gt² to g = 2s/t², repeating and averaging t to reduce random error.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/as-physics-kinematics-revision-notes--07-air-resistance-asymmetry.webp" width="900" height="800" alt="With a 30 m/s launch at 45 degrees, the path without air resistance is a symmetric parabola. With drag (illustrative model a = -0.005 v^2) the peak comes past half range, the descent is steeper (52 vs 45 degrees), range and height fall, and impact speed is 23 m/s." loading="lazy">
  <figcaption>Air resistance makes the path asymmetric and removes kinetic energy.</figcaption>
</figure>

## Frequently asked questions

**Which Cambridge 9702 papers assess kinematics?**
Kinematics is AS content assessed on Paper 1 (multiple choice, 40 marks) and Paper 2 (structured questions, 60 marks) of Cambridge 9702.

**How do you find the gradient of a curved motion graph?**
Draw a tangent, a straight line touching the curve at exactly that instant, and find its gradient. Using the gradient of a chord between two separate points is a common error.

**What is the velocity at the top of a projectile's path?**
At maximum height the vertical component of velocity is zero, but the horizontal component is unchanged, so the projectile is still moving.

**How do you resolve a projectile's launch velocity?**
For a launch speed u at angle θ above the horizontal, the horizontal component is u cos θ and the vertical component is u sin θ. Treat the two directions independently; they share only the time.
