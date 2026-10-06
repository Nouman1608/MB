---
title: "AQA A-Level Mathematics: Q: Kinematics (7357)"
seoTitle: "AQA A-Level Maths 7357 Kinematics Study Guide"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Q: Kinematics"
boards: ["aqa"]
qualifications: ["a-level"]
syllabusCodes: ["7357"]
syllabusSeries: "For first teaching 2017"
order: 18
syllabusTopics:
  - qualification: "a-level"
    topic: "q-kinematics-aqa-alevel-maths"
description: "Study guide for AQA A-level Maths (7357) Section Q: kinematics language, motion graphs, suvat, calculus, vectors and projectiles, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-06
featured: false
---

This guide teaches **Section Q: Kinematics (Q1 to Q5)** of the AQA A-level Mathematics (7357) specification, version 1.3 (31 January 2018), for A-level exams from June 2018 onwards. The specification lists Section Q under **Paper 2**, with vectors, units, forces and moments. A calculator is required in every 7357 paper.

Kinematics describes motion without asking what causes it; forces come in Section R ([Forces and Newton's laws study guide](/resources/aqa-a-level-mathematics-forces-and-newtons-laws/)) and turning effects in Section S ([Moments study guide](/resources/aqa-a-level-mathematics-moments/)).

Use this guide with the [Kinematics revision notes](/resources/aqa-a-level-mathematics-kinematics-revision-notes/) and the [Kinematics practice questions](/resources/aqa-a-level-mathematics-kinematics-practice/). The course hub is at [/boards/aqa/a-level/mathematics/](/boards/aqa/a-level/mathematics/), the printable checklist at [/checklists/aqa/a-level/mathematics/](/checklists/aqa/a-level/mathematics/), and you can find your weak spots first with the [free 10-minute diagnostics](/diagnostics/).

## What Section Q covers

| Ref | What you must be able to do |
|---|---|
| Q1 | Understand and use the language of kinematics: position, displacement, distance travelled, velocity, speed, acceleration |
| Q2 | Use and interpret displacement–time graphs (gradient) and velocity–time graphs (gradient and area) for motion in a straight line |
| Q3 | Understand, use and derive the constant-acceleration formulae for motion in a straight line; extend to 2 dimensions using vectors |
| Q4 | Use calculus in kinematics for motion in a straight line; extend to 2 dimensions using vectors |
| Q5 | Model motion under gravity in a vertical plane using vectors; projectiles |

The specification's notation (Appendix A) is: s displacement, u initial velocity, v velocity or final velocity, a acceleration, t time, g acceleration due to gravity, and **r**, **s**, **v**, **a** for position, displacement, velocity and acceleration vectors. Units come from Section P: m, s, m s⁻¹, m s⁻². See the [Quantities and units study guide](/resources/aqa-a-level-mathematics-quantities-and-units-in-mechanics/) if those are shaky.

## Q1: The language of kinematics

Work along a straight line with a fixed origin O and a positive direction.

- **Position**: where the particle is, measured from O. It can be negative.
- **Displacement**: change in position. It is a vector, so it has a sign (1D) or a direction (2D).
- **Distance travelled**: the total length of path covered. It is a scalar and never decreases.
- **Velocity**: rate of change of displacement. It has a sign or direction.
- **Speed**: the magnitude of velocity. It is never negative.
- **Acceleration**: rate of change of velocity. A negative acceleration is not always "slowing down": a particle moving in the negative direction with negative acceleration is speeding up.

Average velocity = total displacement ÷ total time. Average speed = total distance ÷ total time.

**Worked example 1.** A particle moves 12 m in the positive direction, then 5 m back towards O, taking 8 s in total. Find its displacement, distance travelled, average velocity and average speed.

```
displacement = 12 − 5 = 7 m
distance     = 12 + 5 = 17 m
average velocity = 7 ÷ 8 = 0.875 m s⁻¹
average speed    = 17 ÷ 8 = 2.125 m s⁻¹ (2.13 to 3 s.f.)
```

The two averages differ because the particle turned back.

## Q2: Graphs for motion in a straight line

**Displacement–time graph.** The gradient is the velocity. A horizontal section means the particle is at rest. A negative gradient means it is moving in the negative direction. On a curve, the gradient of the tangent gives the instantaneous velocity.

**Velocity–time graph.**
- The gradient is the acceleration.
- The area between the graph and the t-axis is the displacement. Area below the axis counts as negative displacement.
- Distance travelled is the total area, with every part counted as positive.

**Worked example 2.** A cyclist starts from rest and accelerates uniformly to 8 m s⁻¹ in 5 s. She keeps this speed for T seconds, then decelerates uniformly to rest in 4 s. She travels 196 m in total. Find T and the two accelerations.

The velocity–time graph is a trapezium. Split it into a triangle, a rectangle and a triangle.

```
area = ½(5)(8) + 8T + ½(4)(8)
196  = 20 + 8T + 16
8T   = 160, so T = 20 s
first stage:  a = 8 ÷ 5 = 1.6 m s⁻²
last stage:   a = (0 − 8) ÷ 4 = −2 m s⁻²  (deceleration 2 m s⁻²)
```

Sketch the graph first; a labelled sketch makes the area method clear.

## Q3: Constant acceleration (suvat)

For motion in a straight line with **constant** acceleration a:

```
v = u + at
s = ½(u + v)t
s = ut + ½at²
s = vt − ½at²
v² = u² + 2as
```

### Deriving the formulae

The specification says **derive**, so learn how.

1. Acceleration is the gradient of the velocity–time graph. With constant a the graph is a straight line from (0, u) to (t, v), so a = (v − u)/t, which gives **v = u + at**.
2. Displacement is the area under that line, a trapezium with parallel sides u and v and width t: **s = ½(u + v)t**.
3. Substitute v = u + at into (2): s = ½(2u + at)t = **ut + ½at²**.
4. Substitute u = v − at into (2) instead: s = ½(2v − at)t = **vt − ½at²**.
5. From (1), t = (v − u)/a. Put this into (2): s = ½(u + v)(v − u)/a, so 2as = v² − u², which gives **v² = u² + 2as**.

You can also derive v = u + at and s = ut + ½at² by integrating a constant a (see Q4).

### Method

List s, u, v, a, t. Mark the three you know and the one you want. Choose the formula without the fifth. Decide on a positive direction first and keep it.

**Worked example 3.** A car passes a point A at 5 m s⁻¹ and accelerates uniformly at 2 m s⁻². It passes B, 36 m beyond A. Find its speed at B and the time taken.

```
u = 5, a = 2, s = 36
v² = 5² + 2(2)(36) = 25 + 144 = 169, so v = 13 m s⁻¹
v = u + at: 13 = 5 + 2t, so t = 4 s
```

### Constant acceleration in two dimensions

The same results hold with vectors:

```
v = u + at          r = r₀ + ut + ½at²
```

where u is the initial velocity vector and r₀ the initial position vector. Work with the i and j components separately.

**Worked example 4.** A particle starts at O with velocity (6i − 4j) m s⁻¹ and has constant acceleration (−2i + j) m s⁻². Find when it is moving parallel to j, and its distance from O at that time.

```
v = (6 − 2t)i + (−4 + t)j
parallel to j: i-component = 0, so 6 − 2t = 0, t = 3 s
check: v = 0i − 1j, which is non-zero, so the direction is −j
r = ut + ½at² = (6t − t²)i + (−4t + ½t²)j
at t = 3: r = 9i − 7.5j
distance = √(9² + 7.5²) = √137.25 = 11.7 m (3 s.f.)
```

For position vectors and constant-velocity problems, see the [Vectors study guide](/resources/aqa-a-level-mathematics-vectors/).

## Q4: Calculus in kinematics

When acceleration varies, suvat does not apply. Use:

```
v = dr/dt        a = dv/dt = d²r/dt²
r = ∫ v dt       v = ∫ a dt
```

Appendix B of the specification lists these as formulae you must use without them being provided. For motion in a straight line, r is the position (often written x or s). Differentiation is covered in the [Differentiation study guide](/resources/aqa-a-level-mathematics-differentiation/) and integration in the [Integration study guide](/resources/aqa-a-level-mathematics-integration/).

**Worked example 5 (differentiating).** A particle moves on a straight line with displacement x = 2t³ − 15t² + 24t metres from O at time t seconds. Find when it is at rest, its acceleration at t = 4, and the distance it travels in the first 5 seconds.

```
v = dx/dt = 6t² − 30t + 24 = 6(t − 1)(t − 4)
at rest when t = 1 s and t = 4 s
a = dv/dt = 12t − 30; at t = 4, a = 18 m s⁻²
x(0) = 0, x(1) = 11, x(4) = −16, x(5) = −5
distance = 11 + |−16 − 11| + |−5 − (−16)| = 11 + 27 + 11 = 49 m
```

The displacement after 5 s is only −5 m. Integrating v from 0 to 5 gives this, not the distance. Always find the times of rest and split the motion there.

**Worked example 6 (integrating).** A particle starts from rest at O. Its acceleration is a = (12 − 6t) m s⁻². Find v and x in terms of t, and the speed when it returns to O.

```
v = ∫(12 − 6t) dt = 12t − 3t² + c; v = 0 at t = 0, so c = 0
x = ∫(12t − 3t²) dt = 6t² − t³ + k; x = 0 at t = 0, so k = 0
returns to O: t²(6 − t) = 0, so t = 6 s
v(6) = 72 − 108 = −36, so speed = 36 m s⁻¹
```

Each integration needs its own constant, found from the initial conditions.

### Calculus with vectors

Differentiate or integrate each component separately.

**Worked example 7.** A particle has position vector r = (t³ − 3t)i + (2t² + 1)j metres. Find when it is moving parallel to j, and its speed and the magnitude of its acceleration at t = 2.

```
v = (3t² − 3)i + 4t j
parallel to j: 3t² − 3 = 0, so t = 1 (t ≥ 0); v = 4j, non-zero
a = 6t i + 4j
t = 2: v = 9i + 8j, speed = √145 = 12.0 m s⁻¹ (3 s.f.)
       a = 12i + 4j, |a| = √160 = 12.6 m s⁻² (3 s.f.)
```

## Q5: Projectiles

Model the object as a **particle** moving under gravity alone: no air resistance, no spin, and g constant. Take i horizontal and j vertically upwards, so the acceleration is **a** = −g**j**. Use the value of g a question gives; this page uses g = 9.8 m s⁻².

With r₀ = 0 and initial velocity u = (U cos α)i + (U sin α)j:

```
v = (U cos α)i + (U sin α − gt)j
r = (U cos α)t i + ((U sin α)t − ½gt²) j
```

So the horizontal velocity stays constant and the vertical motion is suvat with a = −g.

- **Greatest height**: vertical component of velocity is 0.
- **Time of flight** (landing at the same level): vertical displacement is 0, t ≠ 0.
- **Range**: horizontal velocity × time of flight.

Derive these each time; don't rely on memorised range formulae.

**Worked example 8.** A ball is kicked from level ground with speed 20 m s⁻¹ at angle α above the horizontal, where tan α = 3/4. Take g = 9.8 m s⁻². Find the greatest height, the time of flight and the range.

```
sin α = 3/5, cos α = 4/5, so u = 16i + 12j
greatest height: 0 = 12² − 2(9.8)h, h = 144/19.6 = 7.35 m
time of flight: 12t − 4.9t² = 0, t = 12/4.9 = 2.45 s (3 s.f.)
range = 16 × 24/9.8 = 39.2 m (3 s.f.)
```

Keep the unrounded time (24/9.8) for the range.

**Worked example 9.** A stone is thrown horizontally at 15 m s⁻¹ from the top of a cliff 19.6 m above the sea. Find where it lands and its velocity as it hits the water.

```
vertical: −19.6 = 0t − 4.9t², t² = 4, t = 2 s
horizontal: 15 × 2 = 30 m from the foot of the cliff
v = 15i − 9.8(2)j = 15i − 19.6j
speed = √(15² + 19.6²) = 24.7 m s⁻¹ (3 s.f.)
angle below horizontal = tan⁻¹(19.6/15) = 52.6°
```

"Velocity" needs both the speed and the direction.

## Common errors

- Using suvat when the acceleration depends on t. Check the question says "constant" or "uniform".
- Giving displacement when distance is asked for, by integrating straight across a change of direction.
- Mixing sign conventions: taking upwards as positive and then writing g = +9.8.
- Forgetting a constant of integration, or setting it to zero without using the initial conditions.
- Saying a particle moves "parallel to j" without checking that the j-component is non-zero at that time.
- In projectiles, giving only the speed when the velocity is asked for.
- Rounding the time of flight before using it for the range.
- Not stating modelling assumptions when asked (particle, no air resistance, g constant). The [Overarching themes guide](/resources/aqa-a-level-mathematics-overarching-themes/) covers how to criticise a model.

## Official syllabus

AQA A-level Mathematics (7357) specification, version 1.3, 31 January 2018, for A-level exams June 2018 onwards: Section 3.18 Q: Kinematics (Q1 to Q5), with Appendix A: mathematical notation (mechanics) and Appendix B: mathematical formulae and identities (kinematics).
