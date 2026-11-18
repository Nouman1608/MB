---
title: "Cambridge A Level Mathematics (9709): Kinematics of motion in a straight line"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 4 – Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "kinematics-of-motion-in-a-straight-line-cambridge"
description: "Study guide to Cambridge 9709 Paper 4 section 4.2: scalars and vectors, s–t and v–t graphs, calculus in time, constant acceleration and two particles."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers section **4.2 Kinematics of motion in a straight line** of Mechanics in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027, examined on Paper 4 (1 hour 15 minutes, 50 marks). The [Mechanics study guide](/resources/a-level-maths-9709-mechanics/) shows one calculus example and one vertical-motion example. This page covers the whole section, with the distinction between distance and displacement when a particle turns back, velocity–time graphs with an unknown, two particles that must be timed together, and calculus with fractional powers of t. Afterwards use the [4.2 revision notes](/resources/cambridge-a-level-mathematics-9709-kinematics-of-motion-in-a-straight-line-cambridge-revision-notes/) and the [4.2 practice questions](/resources/cambridge-a-level-mathematics-9709-kinematics-of-motion-in-a-straight-line-cambridge-practice/). Take g = 10 m s⁻² where gravity is involved.

## What section 4.2 asks for

| Syllabus statement | Notes from the syllabus |
|---|---|
| Distance and speed as scalars; displacement, velocity and acceleration as vectors | Motion in one dimension only. "Deceleration" may be used for decreasing speed |
| Sketch and interpret displacement–time and velocity–time graphs | Area under v–t = displacement; gradient of s–t = velocity; gradient of v–t = acceleration |
| Use differentiation and integration with respect to time | Calculus restricted to Paper 1 techniques |
| Use the formulae for constant acceleration | Questions may need more than one equation, using the motion of different particles |

Paper 1 calculus means powers of t, including fractional and negative powers, but not eᵗ, ln t or trigonometric functions of t.

## Scalars and vectors in one dimension

Choose a positive direction. Displacement, velocity and acceleration then carry a sign; distance and speed do not. A particle that moves 5 m forward and 3 m back has travelled a distance of 8 m but has a displacement of +2 m.

*Worked example 1.* A particle moves in a straight line from O with velocity v = t² − 6t + 8 m s⁻¹, for 0 ≤ t ≤ 5. Find its displacement from O when t = 5, and the total distance it travels.

```text
v = (t − 2)(t − 4): the particle is at rest at t = 2 and t = 4,
and v < 0 between them, so it moves backwards for 2 < t < 4.
s = t³/3 − 3t² + 8t   (s = 0 at t = 0)
s(2) = 8/3 − 12 + 16 = 20/3
s(4) = 64/3 − 48 + 32 = 16/3
s(5) = 125/3 − 75 + 40 = 20/3

Displacement at t = 5:  20/3 = 6.67 m
Distance = 20/3 + |16/3 − 20/3| + |20/3 − 16/3| = 20/3 + 4/3 + 4/3 = 28/3 = 9.33 m
```

Integrating from 0 to 5 in one go gives the displacement, not the distance. Always find where v = 0 first.

## Graphs

| Graph | Gradient | Area under it |
|---|---|---|
| Displacement–time | Velocity | (not used) |
| Velocity–time | Acceleration | Displacement (below the axis counts as negative) |

On a v–t graph made of straight lines, the area is a set of triangles, rectangles and trapezia.

*Worked example 2.* A train starts from rest and accelerates uniformly to 20 m s⁻¹ in 40 s. It travels at 20 m s⁻¹ for T s, then decelerates uniformly to rest in 30 s. The total distance is 3700 m. Find T and the deceleration.

```text
Area = ½ × 40 × 20 + 20T + ½ × 30 × 20 = 400 + 20T + 300
400 + 20T + 300 = 3700   →   T = 150
Deceleration = 20/30 = 0.667 m s⁻²
```

Sketch the graph first, mark every known time and speed, and only then write the area equation.

## Calculus with respect to time

```text
v = ds/dt        a = dv/dt
s = ∫ v dt       v = ∫ a dt     (find the constant from a known value)
```

At rest: v = 0. Maximum or minimum velocity: a = 0.

*Worked example 3.* A particle starts from rest at O and moves in a straight line with velocity v = 6√t − t m s⁻¹, for 0 ≤ t ≤ 36. Find the maximum velocity, the displacement at that moment, and the time when the particle is next at rest.

```text
a = dv/dt = 3t^(−½) − 1 = 0   →   √t = 3   →   t = 9
v(9) = 18 − 9 = 9 m s⁻¹
s = 4t^(3/2) − t²/2   (s = 0 at t = 0)
s(9) = 4 × 27 − 40.5 = 67.5 m
v = 0:  6√t = t   →   √t = 6   →   t = 36 s
```

This is Paper 1 calculus: t^(½) and t^(−½) only.

## The constant acceleration formulae

MF19 lists v = u + at, s = ½(u + v)t, s = ut + ½at² and v² = u² + 2as. One more version, s = vt − ½at², follows from these and saves time when u is not known. Use them only when a is constant over the whole stage.

**Method.** List s, u, v, a, t with the positive direction stated, mark the unknown, and pick the formula that leaves out the quantity you neither know nor want.

### Two particles

When two particles move at the same time, write an expression for each displacement using the **same** time variable, then set up the condition (they meet, one is a given distance ahead, and so on).

*Worked example 4.* Particles A and B are 100 m apart on a straight track and move towards each other at the same instant. A starts from rest with acceleration 0.6 m s⁻²; B moves at a constant 4 m s⁻¹. Find when they meet.

```text
In time t: A travels 0.3t², B travels 4t
They meet when 0.3t² + 4t = 100
3t² + 40t − 1000 = 0
t = (−40 + √(1600 + 12000))/6 = (−40 + 116.6)/6 = 12.8 s
```

Reject the negative root. If one particle starts later, use t for one and (t − k) for the other.

## Common mistakes

- Giving displacement when the question asks for distance, after the particle has reversed.
- Using constant-acceleration formulae when a depends on t.
- Forgetting the constant of integration, or not using the starting condition to find it.
- Treating deceleration as a negative number and then subtracting it again.
- Mixing the two time variables in a two-particle problem.
- Reading a v–t graph's gradient as velocity.

## Exam technique

- **Sketch a velocity–time graph**: label axes, times and speeds; straight lines for constant acceleration.
- **Show that** in graph questions: write the area expression in full before simplifying.
- **Find the distance travelled**: check for sign changes of v in the time interval first.
- Keep 4 significant figures in intermediate times and give final answers to 3 significant figures.

## Frequently asked questions

**Can I use suvat equations when acceleration varies?**
No. The constant-acceleration formulae need constant a over the stage. If a or v is given as a function of t, use calculus.

**Which calculus is needed for 9709 kinematics?**
Only techniques from Pure Mathematics 1: powers of t, including fractional and negative powers.

**How do I find the distance travelled when the particle turns back?**
Find the times when v = 0, work out the displacement in each interval, and add the sizes of those displacements.

## Where to go next

- [4.2 revision notes](/resources/cambridge-a-level-mathematics-9709-kinematics-of-motion-in-a-straight-line-cambridge-revision-notes/)
- [4.2 practice questions](/resources/cambridge-a-level-mathematics-9709-kinematics-of-motion-in-a-straight-line-cambridge-practice/)
- Forces that cause the motion: [4.1 Forces and equilibrium](/resources/cambridge-a-level-mathematics-9709-forces-and-equilibrium-cambridge-alevel-maths/)
- Mixed questions: [Mechanics practice](/resources/a-level-mathematics-mechanics-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 4, Mechanics (for Paper 4): section 4.2 Kinematics of motion in a straight line.
