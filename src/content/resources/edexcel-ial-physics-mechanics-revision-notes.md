---
title: "Edexcel IAL Physics: Mechanics — Revision Notes"
resourceType: "revision-notes"
subject: "physics"
level: ["a-levels"]
topic: "Unit 1: Mechanics and Materials"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YPH11"]
syllabusSeries: "Issue 3"
order: 1.3
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-1-mechanics-and-materials"
    subtopic: "mechanics"
description: "Condensed recall notes on kinematics, projectiles, Newton's laws, momentum, moments, work and power for Edexcel International A Level Physics YPH11 Unit 1."
author: "iftikhar-azeemi"
reviewer: "hassan"
reviewStatus: "reviewed"
reviewedDate: 2026-11-08
reviewNote: "2026-11-08 recheck: labelled impulse as Unit 4 topic 4.3 content (not Unit 1); please re-review; previously reviewed by hassan on 2026-09-29; 2026-11-08: reviewed by hassan."
publishedDate: 2026-08-22
featured: false
---

Condensed for the final weeks. For the full explanation, use the
[Mechanics study guide](/resources/edexcel-ial-physics-mechanics/).

## Kinematics

```
v = u + at        s = ut + 1/2 at^2
v^2 = u^2 + 2as   s = (u+v)t / 2
```

These **only apply to uniform acceleration**. For non-uniform acceleration you must use graphs — gradient for acceleration, area for displacement.

**Velocity–time graph:** gradient = acceleration, **area = displacement**.
**Displacement–time graph:** gradient = velocity.

## Projectiles

**Treat horizontal and vertical motion completely independently.** They share only the time.

- **Horizontal:** no acceleration (ignoring drag), so `s = vt`.
- **Vertical:** `a = g = 9.81 m s⁻²` downwards.

**Time is the link between them** — find it from the vertical motion, then use it in the horizontal. That single insight solves almost every projectile problem.

At maximum height the **vertical** velocity is zero, but the horizontal velocity is unchanged. Saying "the velocity is zero at the top" is wrong.

## Newton's laws

**First** — constant velocity unless a **resultant** force acts.
**Second** — `F = Δp/Δt`, reducing to `F = ma` for constant mass.
**Third** — equal and opposite forces on **different bodies**, of the **same type**.

**Terminal velocity:** as speed rises, drag increases until it equals weight; the resultant force becomes zero, so acceleration is zero and velocity is constant. The object is still moving — it has simply stopped accelerating.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--02-third-law-pairs.webp" width="900" height="1090" alt="Two third-law pairs for a book on a table: Earth pulls book with book pulls Earth, and table pushes book with book pushes table. A pair is the same kind of force, equal and opposite, on different bodies. Weight and the normal force both act on the book, so they are not a pair." loading="lazy">
  <figcaption>Third-law pairs act on different bodies; weight and the normal contact force act on one body and are not a pair.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--04-terminal-velocity.webp" width="900" height="1130" alt="A velocity-time graph for a faller computed from a drag-squared model, with points A to E and matching free-body diagrams. Drag grows from zero until it equals the weight at terminal velocity (40 m s-1), then the parachute opens, drag exceeds weight and the speed falls to a smaller terminal velocity (8 m s-1) where drag again equals weight." loading="lazy">
  <figcaption>Acceleration falls to zero as drag grows to equal weight; opening a parachute gives a new, smaller terminal velocity.</figcaption>
</figure>


## Moments and equilibrium

```
moment = F x        (x = perpendicular distance from the line of
                       action of the force to the axis of rotation)
```

An extended body's weight acts through its **centre of gravity**. For a body in equilibrium, the **principle of moments** applies: the sum of clockwise moments about any point equals the sum of anticlockwise moments. This principle underlies beam-support and balance problems throughout the topic, and it holds about **any** chosen point, not just the pivot — choosing a point that eliminates an unknown force from the equation is often the fastest route to a solution.

**Worked example.** A 4.0 m uniform beam pivots at its centre. A 60 N weight hangs 0.8 m to the left of the pivot. Where must a 40 N weight hang on the right to balance it?

```
Clockwise moment = anticlockwise moment
40 x d = 60 x 0.8
d = 48 / 40 = 1.2 m
```

**CORE PRACTICAL 1** uses light gates or strobe/video photography to determine the acceleration of a freely-falling object, i.e. to measure g experimentally. This experimentally measured value of g can then be compared with the standard value of 9.81 m s⁻² used throughout the rest of the mechanics topic.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--09-moments-beam.webp" width="900" height="930" alt="A 4.0 m, 220 N board rests on supports A and B with a 650 N worker 1.0 m from the left end. Taking moments about A removes R_A: 220 x 1.5 + 650 x 0.5 = R_B x 2.7, so R_B = 243 N, and balancing forces gives R_A = 627 N." loading="lazy">
  <figcaption>Choose a pivot where an unknown force acts, equate clockwise and anticlockwise moments, then balance forces.</figcaption>
</figure>


## Momentum (and a note on impulse)

```
p = mv          impulse = Ft = delta-p   (impulse: Unit 4, topic 4.3)
```

Unit 1 needs **p = mv** and **conservation of linear momentum in one dimension**. Impulse, FΔt = Δp, is listed in the specification under Unit 4 topic 4.3 Further Mechanics, not Unit 1; it is shown here because it links the two units. Impulse is the **area under a force–time graph**.

**Momentum is conserved in all collisions; kinetic energy only in elastic ones.** In an inelastic collision the missing kinetic energy becomes thermal energy, sound and deformation.

Momentum is a **vector** — assign a positive direction and treat opposite motion as negative. That is the biggest source of lost marks in collision questions.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--05-momentum-change.webp" width="900" height="1090" alt="A ball hits a wall at 32 m s-1 and rebounds at 24 m s-1. Taking towards the wall as positive, the initial momentum is +1.824 and the final is -1.368 kg m s-1, so the change is -3.192. The velocity change is 56 m s-1, not 8. Over 4.5 ms the average force is 709 N away from the wall." loading="lazy">
  <figcaption>Because momentum is a vector, a rebound changes it by the sum of the two sizes, and F = Δp/Δt gives the force.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--06-impulse-area.webp" width="900" height="1140" alt="Two force-time graphs. A triangle rising to 800 N at 6 ms and falling to zero at 18 ms has area 7.2 N s, so a 0.16 kg ball leaves at 45 m s-1. Readings at 2 ms intervals are estimated with trapezium strips as 0.0020 x 1630 = 3.26 N s, about 20 m s-1." loading="lazy">
  <figcaption>Impulse is the area under a force-time graph; use exact shapes for straight lines and strips for a curve.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--07-collisions-1d.webp" width="900" height="1240" alt="Two one-dimensional collisions with bar charts. Gliders sticking together keep momentum 0.378 kg m s-1 but kinetic energy falls from 0.170 J to 0.102 J. Elastic trolleys keep both momentum (1.44) and kinetic energy (1.728 J), and the speeds of approach and separation are both 2.4 m s-1." loading="lazy">
  <figcaption>Momentum is conserved in both kinds of collision; kinetic energy is conserved only if the collision is perfectly elastic.</figcaption>
</figure>

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--08-collision-2d.webp" width="900" height="1110" alt="A 0.16 kg puck at 5.0 m s-1 hits a stationary 0.24 kg puck. The first leaves at 3.0 m s-1 at 35 degrees; the second leaves at 2.0 m s-1 at 34 degrees on the other side. A to-scale momentum triangle closes on the original 0.80 kg m s-1. Kinetic energy falls from 2.0 J to 1.22 J, so it is inelastic." loading="lazy">
  <figcaption>Momentum is conserved on each axis, so the two final momenta add as vectors to the initial momentum.</figcaption>
</figure>


## Work, energy and power

```
W = F s cos(theta)        Ek = 1/2 m v^2        Ep = mgh
P = W/t = Fv
efficiency = useful output / total input
```

**The cos θ matters:** only the component of force **along** the displacement does work. A force perpendicular to motion — such as the centripetal force, or the normal contact force on a horizontal surface — does **no work at all**.

**Conservation of energy** solves problems that kinematics cannot, particularly on curved paths where acceleration is not uniform. If a question involves a slope, a loop or a swing, energy is usually the faster route.

## Exam traps

- Using the *suvat* equations where acceleration is not uniform.
- Saying velocity is zero at the top of a projectile's path.
- Mixing horizontal and vertical components.
- Ignoring the vector nature of momentum.
- Omitting cos θ from the work equation.
- Claiming kinetic energy is conserved in all collisions.
- Forgetting to use the perpendicular distance from the pivot to the line of action of a force when calculating a moment, especially when the force acts at an angle.

Related: [Mechanics practice questions](/resources/edexcel-ial-physics-mechanics-practice/) for further worked calculations.

## Self-test

1. When are the *suvat* equations valid?
2. What links horizontal and vertical motion in a projectile problem?
3. What is true of the velocity at the top of a projectile's flight?
4. Which quantity is conserved in all collisions, and what happens to the rest?
5. Why does a centripetal force do no work?
6. State the principle of moments.
7. A 3.0 m uniform beam pivots at its centre. A 50 N weight hangs 0.9 m to the left of the pivot. Where must a 30 N weight hang on the right to balance it?

**Answers:** 1. Only when acceleration is uniform. 2. The time of flight — the two motions are otherwise independent. 3. The vertical component is zero, but the horizontal component is unchanged, so the velocity is not zero. 4. Momentum; in an inelastic collision the missing kinetic energy is transferred to thermal energy, sound and deformation. 5. It acts perpendicular to the direction of motion, and only the component of force along the displacement does work. 6. For a body in equilibrium, the sum of clockwise moments about any point equals the sum of anticlockwise moments about that same point. 7. 30 × d = 50 × 0.9 → d = 45 ÷ 30 = **1.5 m**.

<figure class="topic-figure">
  <img src="https://img.marlbridge.com/a-level-oxfordaqa-physics-motion-and-newtons-laws--01-slope-forces.webp" width="900" height="840" alt="Free-body diagram of a 12 kg block on a 25 degree slope with arrows to scale. Weight 118 N acts down, the normal contact force 107 N is perpendicular to the slope and friction 18 N acts up the slope. Weight is resolved into mg sin 25 = 49.8 N down the slope and mg cos 25 = 107 N into it, giving a net 31.8 N and a = 2.6 m s-2." loading="lazy">
  <figcaption>The normal force is perpendicular to the slope, and the weight splits into components along and into it.</figcaption>
</figure>

## Frequently asked questions

**What does a velocity-time graph show in Edexcel IAL Physics?**
The gradient of a velocity-time graph gives the acceleration and the area under it gives the displacement. On a displacement-time graph, the gradient gives the velocity.

**Is impulse part of Unit 1 in Edexcel IAL Physics?**
No. Unit 1 needs p = mv and conservation of linear momentum in one dimension. Impulse, FΔt = Δp, is listed under Unit 4 topic 4.3 Further Mechanics.

**What is Core Practical 1 in Edexcel IAL Physics?**
Core Practical 1 determines the acceleration of a freely-falling object, measuring g with light gates or strobe or video photography. The result can be compared with the standard value of 9.81 m s⁻².

**What is special about a pair of Newton's third law forces?**
The two forces are equal and opposite, act on different bodies and are of the same type.
