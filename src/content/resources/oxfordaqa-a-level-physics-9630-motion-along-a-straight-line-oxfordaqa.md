---
title: "OxfordAQA A-Level Physics (9630): Motion along a straight line"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Section 3.2 – Mechanics and Materials"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9630"]
syllabusSeries: "International AS and A-level"
stage: "AS"
order: 2.3
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-and-materials-oxfordaqa-alevel"
    subtopic: "motion-along-a-straight-line-oxfordaqa"
description: "OxfordAQA 9630 subtopic 3.2.3 in depth: motion graphs, the bouncing ball, signed SUVAT for vertical motion, catch-up problems and Required practical 1."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into **3.2.3 Motion along a straight line** in Section 3.2 Mechanics and materials of the OxfordAQA International AS and A-level Physics (9630) specification. It is International AS content, assessed in Unit 1, and it includes **Required practical 1**, determination of g by a free-fall method. Projectile motion in 3.2.4 is built entirely from the ideas here, applied separately to horizontal and vertical motion.

When you have read the guide, condense it with the [motion along a straight line revision notes](/resources/oxfordaqa-a-level-physics-9630-motion-along-a-straight-line-oxfordaqa-revision-notes/) and test yourself with the [motion along a straight line practice questions](/resources/oxfordaqa-a-level-physics-9630-motion-along-a-straight-line-oxfordaqa-practice/). For this subtopic paired with Newton's laws, see the [motion and Newton's laws study guide](/resources/a-level-oxfordaqa-physics-motion-and-newtons-laws/).

## What the specification asks for

- displacement, speed, velocity and acceleration, with v = Δs/Δt and a = Δv/Δt
- average and instantaneous speeds and velocities
- graphs of uniform and non-uniform acceleration, for example the motion of a bouncing ball
- the significance and calculation of **areas** under velocity–time and acceleration–time graphs
- the significance and calculation of **gradients** of displacement–time and velocity–time graphs
- the equations for uniform acceleration: v = u + at, s = ½(u + v)t, s = ut + ½at², v² = u² + 2as
- acceleration due to gravity, g
- Required practical 1: determination of g by a free-fall method, including from a graph such as s against t².

## Average and instantaneous values

**Average velocity** = total displacement ÷ total time. **Instantaneous velocity** is the velocity at one moment: the gradient of the **tangent** to the displacement–time graph at that time. On a curved s–t graph the two differ; on a straight line they are equal.

To find an instantaneous value from a graph, draw a tangent that touches the curve at the point, make it long (across most of the grid), and read two well-separated points on it. A short tangent gives a large percentage uncertainty in the gradient.

## What gradients and areas mean

| Graph | Gradient gives | Area under the line gives |
|---|---|---|
| Displacement–time | Velocity | (not used) |
| Velocity–time | Acceleration | Displacement |
| Acceleration–time | (not used) | Change in velocity |

Areas below the time axis on a v–t graph count as **negative** displacement. To find the distance travelled, add the sizes of all areas; to find the displacement, add them with their signs.

### Worked example 1: a three-stage journey

**Question.** A train accelerates uniformly from rest to 24 m s⁻¹ in 40 s, travels at 24 m s⁻¹ for 120 s, then decelerates uniformly to rest in 30 s. Find the total distance and the average speed.

**Method.** The v–t graph is a trapezium; split it into shapes.

1. Accelerating: triangle ½ × 40 × 24 = 480 m.
2. Steady: rectangle 120 × 24 = 2880 m.
3. Decelerating: triangle ½ × 30 × 24 = 360 m.
4. Total = **3720 m**. Average speed = 3720 ÷ 190 = **19.6 m s⁻¹**.

**Comment.** The average speed is not (0 + 24) ÷ 2. That shortcut works only for a single stage of uniform acceleration.

### Worked example 2: area under an acceleration–time graph

A trolley starts at 2.0 m s⁻¹. Its acceleration is 3.0 m s⁻² for 4.0 s, then 1.0 m s⁻² for 2.0 s. Area under the a–t graph = 3.0 × 4.0 + 1.0 × 2.0 = 14 m s⁻¹, so the final velocity is 2.0 + 14 = **16 m s⁻¹**.

## Non-uniform acceleration: the bouncing ball

A ball is dropped, bounces several times and loses some energy at each bounce. Take **upwards as positive**.

- **Velocity–time graph:** a series of parallel straight lines, each with gradient −g, because between bounces the only significant force is weight. During each fall the velocity becomes more negative. At each bounce the velocity jumps almost instantly from a negative value to a positive one. Each rebound speed is smaller than the impact speed just before it, because energy is lost in the bounce.
- **Displacement–time graph:** a series of curved arches (parabolas), each lower than the one before. The gradient is zero at the top of each arch and changes sign sharply at each bounce.
- **Acceleration–time graph:** a constant −g between bounces, with very large positive spikes during each brief contact with the floor.

**Exam check.** Each triangle on the v–t graph above the axis has the same area as the triangle that follows it below the axis, because the ball rises and then falls the same height.

## The SUVAT equations with signs

The equations apply only when acceleration is **uniform**. Choose a positive direction and give every vector (s, u, v, a) a sign.

| Equation | Missing quantity |
|---|---|
| v = u + at | s |
| s = ½(u + v)t | a |
| s = ut + ½at² | v |
| v² = u² + 2as | t |

Pick the equation that does not contain the quantity you neither know nor need.

### Worked example 3: a ball thrown upwards

**Question.** A ball is thrown vertically upwards at 14.0 m s⁻¹ from a point 1.5 m above the ground. Find (a) its maximum height above the launch point, (b) the time until it hits the ground and (c) its speed on impact. Take g = 9.81 m s⁻² and ignore air resistance.

**Method.** Upwards positive, so u = +14.0 m s⁻¹ and a = −9.81 m s⁻².

**(a)** At the top v = 0. v² = u² + 2as gives 0 = 14.0² − 2 × 9.81 × s, so s = **9.99 m**.

**(b)** The ground is 1.5 m below the launch point, so s = −1.5 m. s = ut + ½at² gives −1.5 = 14.0t − 4.905t², or 4.905t² − 14.0t − 1.5 = 0. The positive root is t = **2.96 s**.

**(c)** v² = 14.0² + 2 × (−9.81) × (−1.5) = 196 + 29.4 = 225.4, so the speed is **15.0 m s⁻¹** (moving downwards).

**Comment.** Using s = +1.5 m in (b) is the classic sign error. Write down your positive direction before substituting.

### Worked example 4: a catch-up problem

**Question.** A cyclist passes a parked car at a steady 8.0 m s⁻¹. At that moment the car starts from rest with acceleration 2.5 m s⁻². When and where does the car catch the cyclist?

**Method.**

1. Cyclist: s = 8.0t. Car: s = ½ × 2.5 × t² = 1.25t².
2. Equal displacements: 8.0t = 1.25t², so t = **6.4 s** (t = 0 is the start).
3. Distance = 8.0 × 6.4 = **51 m**. The car is then moving at 2.5 × 6.4 = 16 m s⁻¹, twice the cyclist's speed.

## Required practical 1: g by free fall

**Typical method.** An electromagnet holds a steel ball above a trapdoor or light gate connected to an electronic timer. Switching off the magnet releases the ball and starts the timer; the ball breaking the circuit or the beam stops it. Measure the drop height s with a metre rule, from the bottom of the ball to the trapdoor, and time the fall for at least five heights, repeating each.

**Analysis.** From rest, s = ½gt². A graph of **s against t²** is a straight line through the origin with **gradient g/2**, so g = 2 × gradient.

**Errors to discuss.**

- The magnet takes a short time to release the ball after the current is switched off, so every time is slightly too long: a systematic error that makes g too small. Larger drop heights make the delay a smaller fraction of each time, and a best-fit line that misses the origin is a sign that it matters.
- Reading the height from the wrong part of the ball is also systematic; read at eye level to avoid parallax.
- Repeating timings and averaging reduces random error.
- Air resistance is negligible for a small dense ball over a short drop.

## Common mistakes

- Treating speed and velocity as the same when the motion reverses.
- Using SUVAT when acceleration is not constant, such as during a bounce.
- Measuring a gradient from a short tangent, or from a single data point.
- Counting areas below the axis as positive when displacement is asked for.
- Giving g as +9.81 when upwards has been chosen as positive.
- Stating that the gradient of s against t² equals g.

## Exam technique for OxfordAQA command words

- **Sketch** a graph: label axes with quantities and units, mark key values, and show shape (straight, curved, gradient zero at the top).
- **Describe** motion from a graph: state each stage, using "uniform acceleration", "constant velocity" and "at rest" with values.
- **Calculate**: list s, u, v, a, t with signs before choosing an equation.
- **Explain** a graph feature: link gradient or area to the physical quantity, such as "the gradient is constant, so the acceleration is uniform".
- **Describe a method** (Required practical 1): measurements, equipment, how the graph gives g, and one source of error with how it is reduced.

## Where this subtopic leads

Newton's laws in 3.2.5 explain *why* an object accelerates; this subtopic describes *how*. Continue with the [Newton's laws of motion study guide](/resources/oxfordaqa-a-level-physics-9630-newtons-laws-of-motion-oxfordaqa/), and see the [projectile motion, friction, drag and terminal speed study guide](/resources/oxfordaqa-a-level-physics-projectile-motion-friction-drag-and-terminal-speed/) for motion in two dimensions.
