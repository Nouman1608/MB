---
title: "Cambridge A Level Physics (9702): Equilibrium of forces"
resourceType: "study-guides"
subject: "physics"
level: ["a-levels"]
topic: "Forces, density and pressure"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9702"]
syllabusSeries: "2025-2027"
stage: "AS"
order: 4.2
syllabusTopics:
  - qualification: "a-level"
    topic: "as-forces-density-and-pressure"
    subtopic: "as-equilibrium-of-forces"
description: "Subtopic 4.2 of Cambridge AS Physics 9702 in depth: the principle of moments, both equilibrium conditions, and vector triangles for coplanar forces."
author: "marlbridge-academic-team"
reviewStatus: "review-pending"
publishedDate: 2026-11-18
featured: false
---

This guide covers subtopic **4.2 Equilibrium of forces** of Cambridge International AS & A Level Physics 9702, 2025–2027 series. The [Forces, Density and Pressure study guide](/resources/as-physics-forces-density-and-pressure/) introduces the principle of moments with a balanced beam; this page goes further, with a plank on two supports and the point where it tips, a ladder against a wall, a sign hung from two cords, and a lamp pulled sideways, solved both with vector triangles and with components. For quick recall use the [Equilibrium of forces revision notes](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces-revision-notes/), and for exam-style questions the [Equilibrium of forces practice questions](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces-practice/).

## Syllabus coverage

**CAMBRIDGE INTERNATIONAL AS & A LEVEL PHYSICS 9702 — AS Level, Topic 4.2**

Candidates should be able to:

1. state and apply the principle of moments;
2. understand that, when there is no resultant force and no resultant torque, a system is in equilibrium;
3. use a vector triangle to represent coplanar forces in equilibrium.

## The two conditions for equilibrium

A system is in **equilibrium** when:

1. there is **no resultant force**, so there is no linear acceleration; and
2. there is **no resultant torque** (moment) about any point, so there is no change in rotation.

Both are needed. A couple has zero resultant force but makes an object rotate; a single force through the centre of gravity has zero moment but makes it accelerate.

In practice, condition 1 gives you two equations (resolve horizontally and vertically) and condition 2 gives a third (take moments). Three equations can find up to three unknowns.

## The principle of moments

**For a body in equilibrium, the sum of the clockwise moments about any point equals the sum of the anticlockwise moments about the same point.**

"Any point" is the useful part. Take moments about the point where an unknown force acts: its moment is zero, so it drops out of the equation.

### Worked example 1: a plank on two supports

A uniform plank 4.0 m long weighs 150 N. It rests on support A, 0.50 m from the left end, and support B, 3.0 m from the left end. A person of weight 600 N stands 1.0 m from the left end.

```
moments about A (distances measured from A):
  plank weight acts at 2.0 m from left end -> 1.5 m from A (clockwise)
  person acts at 1.0 m from left end       -> 0.5 m from A (clockwise)
  R_B acts 2.5 m from A                    (anticlockwise)

R_B x 2.5 = 150 x 1.5 + 600 x 0.5 = 225 + 300 = 525
R_B = 210 N
vertical forces: R_A + R_B = 150 + 600   ->   R_A = 540 N
```

Check by moments about B: clockwise 540 × 2.5 = 1350 N m; anticlockwise 150 × 1.0 + 600 × 2.0 = 1350 N m. Balanced.

**Where does it tip?** The person now walks to the right, past B. The plank is about to tip about B when R_A falls to zero. Moments about B:

```
600 x (distance beyond B) = 150 x 1.0   ->   distance = 0.25 m
```

So the person can stand only 0.25 m beyond B, at 3.25 m from the left end. The plank extends to 4.0 m, so the end cannot be reached safely. "On the point of tipping" always means the reaction at the other support is zero.

### Worked example 2: a ladder against a smooth wall

A uniform ladder 5.0 m long, weight 200 N, rests at 60° to the horizontal ground against a smooth vertical wall. Smooth means the wall exerts only a horizontal force R. The ground exerts a vertical normal force N and a horizontal friction force f.

```
vertical:   N = 200 N
moments about the foot of the ladder (N and f drop out):
  weight: 200 x (2.5 cos 60) = 200 x 1.25 = 250 N m   (clockwise)
  wall:   R x (5.0 sin 60)   = R x 4.33               (anticlockwise)
  R = 250 / 4.33 = 57.7 N
horizontal: f = R = 57.7 N
```

The perpendicular distances are the horizontal distance to the weight's vertical line of action, and the vertical height to the wall force's horizontal line of action. The total ground force is √(200² + 57.7²) = 208 N, at 74° to the horizontal.

## Vector triangles for three forces

If three coplanar forces keep an object in equilibrium, their resultant is zero, so when drawn **tip to tail they form a closed triangle**. The arrows all go the same way round the triangle.

Two consequences:

- The triangle can be solved by trigonometry or by scale drawing, giving an unknown force or angle.
- If three non-parallel forces are in equilibrium, their lines of action **pass through a single point**; otherwise two of them would have a moment about the intersection of the other two. This helps fix the direction of an unknown force.

### Worked example 3: a sign on two cords

A sign of weight 120 N hangs from two cords. Cord 1 makes 30° with the horizontal; cord 2 makes 60° with the horizontal, on the other side.

**Vector triangle.** The cords are at 90° to each other (30° + 60° = 90°, measured on opposite sides), so the triangle is right-angled with the 120 N weight as the hypotenuse:

```
T1 = 120 sin 30 = 60 N        T2 = 120 cos 30 = 104 N
```

**Check by resolving:**

```
horizontal: T1 cos 30 = 60 x 0.866 = 52.0 N;   T2 cos 60 = 104 x 0.5 = 52.0 N   (balanced)
vertical:   T1 sin 30 + T2 sin 60 = 30 + 90 = 120 N                       (balances the weight)
```

The steeper cord carries the larger tension.

### Worked example 4: a lamp pulled aside

A lamp of weight 8.0 N hangs on a flex. A horizontal force F holds it so the flex makes 20° with the vertical.

```
vector triangle: weight (vertical), F (horizontal), tension (closing side)
F = 8.0 tan 20 = 2.9 N
T = 8.0 / cos 20 = 8.5 N
```

The tension is greater than the weight, because the flex must also balance F.

## Common mistakes

- **Stating only one condition for equilibrium.**
- **Leaving out "about the same point"** in the principle of moments.
- **Taking moments about a point that keeps every unknown in the equation**, when a better point removes one.
- **Using the length of the ladder as the perpendicular distance** for a force that is not perpendicular to it.
- **Drawing a vector triangle with two arrows meeting head to head.** In equilibrium the arrows go round the triangle in one direction.
- **Forgetting a beam's weight** or placing it away from the centre of a uniform beam.

## Exam technique for the command words

- **State** the principle of moments: include "in equilibrium", "sum of clockwise", "sum of anticlockwise" and "about the same point".
- **Calculate** or **determine**: say which point you take moments about, and why.
- **Show that** a system is in equilibrium: check both conditions, with numbers.
- **Draw** a vector triangle: correct directions, arrows nose to tail round the triangle, labels, and the angles used.

## Frequently asked questions

**What are the two conditions for equilibrium?**
No resultant force and no resultant torque about any point.

**Why take moments about a support?**
The force at that support has zero moment about it, so one unknown disappears from the equation.

**What does a closed vector triangle show?**
That three forces have zero resultant, which is the first condition for equilibrium.

## Related resources

- [Equilibrium of forces revision notes](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces-revision-notes/)
- [Equilibrium of forces practice questions](/resources/cambridge-a-level-physics-9702-as-equilibrium-of-forces-practice/)
- [Turning effects of forces study guide](/resources/cambridge-a-level-physics-9702-as-turning-effects-of-forces/) — moments and couples defined
- [Scalars and vectors study guide](/resources/cambridge-a-level-physics-9702-as-scalars-and-vectors/) — adding and resolving vectors

*Written against Cambridge International AS & A Level Physics 9702, 2025–2027 series. Always check the current syllabus for your examination year.*
