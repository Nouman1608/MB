---
title: "OxfordAQA A-level Mathematics (9660): Momentum and impulse"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit PSM1 -- M1: Mechanics (International AS)"
boards: ["oxfordaqa"]
qualifications: ["a-level"]
syllabusCodes: ["9660"]
syllabusSeries: "Version 5.2 (International AS exams from May/June 2018, A-level from May/June 2019)"
order: 4.4
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-psm1-m1-mechanics-oxfordaqa-alevel-maths"
    subtopic: "m1-momentum-and-impulse-oxfordaqa-alevel-maths"
description: "Study guide to OxfordAQA 9660 M1.4: momentum as a signed vector, conservation for two particles, impulse, and direct impact with a fixed smooth surface."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide goes deeper into section M1.4 (Momentum and impulse) of the OxfordAQA International AS and A-level Mathematics (9660) specification, Version 5.2. M1.4 sits in the Mechanics part of Unit PSM1, which is International AS content. The specification restricts the whole section to motion in a straight line.

The broader [forces, Newton's laws and momentum guide](/resources/oxfordaqa-a-level-mathematics-forces-newtons-laws-connected-particles-momentum-and/) introduces the formulae. This page concentrates on sign conventions, multi-stage problems and impacts with a surface. Condense it with the [momentum and impulse revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m1-momentum-and-impulse-oxfordaqa-alevel-maths-revision-notes/) and test yourself with the [momentum and impulse practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-momentum-and-impulse-oxfordaqa-alevel-maths-practice/).

## What the specification asks for

| Content | Additional information in the specification |
|---|---|
| Concept of momentum | Momentum = mv |
| The principle of conservation of momentum applied to two particles | Knowledge of Newton's law of restitution is not required |
| Impulse | Impulse = change in momentum |
| Direct impact with a fixed surface | Restricted to particles moving perpendicular to a fixed smooth surface |

The specification also lists two formulae you must learn because they are not in the formulae booklet: momentum = mv, and Newton's second law in the form force = rate of change of momentum.

## 1. Momentum is a vector, so choose a direction

Momentum is mass × velocity. Its SI unit is kg m s⁻¹, which is the same as N s. Because velocity has a direction, so does momentum. In a straight line you handle direction with a sign.

Before any working, write down which direction is positive. For example, with "right is positive":

- a 1200 kg car moving right at 15 m s⁻¹ has momentum +18 000 N s;
- a 0.16 kg ball moving left at 30 m s⁻¹ has momentum −4.8 N s.

Total momentum is the signed sum. Two bodies with momenta +6 N s and −6 N s have total momentum zero, even though both are moving.

## 2. Conservation of momentum for two particles

When two particles collide, each pushes on the other with an equal and opposite force for the same short time. So the impulses on them are equal and opposite, and the total momentum along the line does not change, provided no external impulse acts along the line during the impact:

m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂

Use the same principle for three common set-ups:

- **Both move on after the collision.** Without the law of restitution you need one final velocity to be given.
- **The particles coalesce** (join), so v₁ = v₂ and there is only one unknown.
- **The particles separate from rest**, for example when a spring between them is released. Total momentum is zero before and after.

A drawing of "before" and "after", with every velocity labelled as an arrow, prevents most sign errors.

### Worked example 1: finding an unknown mass

Particle P, of mass 0.6 kg, moves at 5 m s⁻¹ towards particle Q, which is at rest. After the collision P moves at 1 m s⁻¹ in the opposite direction and Q moves at 2 m s⁻¹. Find the mass of Q.

```
Take P's initial direction as positive.
Before: 0.6 × 5 + m × 0 = 3
After:  0.6 × (−1) + m × 2 = −0.6 + 2m
Conservation: 3 = −0.6 + 2m
m = 1.8 kg
```

P's rebound velocity enters as −1, not +1. Using +1 gives m = 1.2 kg, a common wrong answer.

### Worked example 2: reading the direction from the sign

Particle A (4 kg) moves right at 3 m s⁻¹ and particle B (2 kg) moves left at 5 m s⁻¹. They collide, and afterwards A moves left at 1 m s⁻¹. Find the velocity of B, and the impulse on each particle.

```
Right positive.
Before: 4(3) + 2(−5) = 12 − 10 = 2
After:  4(−1) + 2v = −4 + 2v
2 = −4 + 2v, so v = 3
```

B moves right at 3 m s⁻¹. If you had assumed B moved left and written −2v, you would get v = −3. The sign tells you the assumption was wrong, and the answer is still 3 m s⁻¹ to the right. You never need to guess correctly in advance; you must interpret the sign.

Impulses (final momentum − initial momentum):

```
On A: 4(−1) − 4(3) = −16 N s   (16 N s to the left)
On B: 2(3) − 2(−5) = +16 N s   (16 N s to the right)
```

The impulses are equal in size and opposite in direction, as Newton's third law requires. This is a fast check on any conservation answer.

## 3. Impulse

Impulse is the change in momentum: I = mv − mu. Its unit is N s.

When a constant force F acts for time t, the impulse is Ft. This comes from Newton's second law: F = ma = m(v − u)/t, so Ft = mv − mu. Impulse links the force on a body to how its velocity changes, without needing the acceleration.

### Worked example 3: a force acting for a time

A particle of mass 3 kg moves in a straight line at 2 m s⁻¹. A constant force of 12 N acts on it in its direction of motion for 1.5 s. Find its new speed.

```
Impulse = Ft = 12 × 1.5 = 18 N s
mv − mu = 18
3v − 3(2) = 18
v = 8 m s⁻¹
```

Check with constant acceleration: a = 12/3 = 4 m s⁻², and v = u + at = 2 + 4(1.5) = 8 m s⁻¹. Both routes agree, as they must.

If the force opposes the motion, the impulse is negative. A force of 12 N against the motion for 1.5 s gives 3v − 6 = −18, so v = −4: the particle has stopped and now moves at 4 m s⁻¹ the other way.

## 4. Direct impact with a fixed surface

When a particle hits a fixed wall or floor head-on, the surface does not move. Momentum of the particle alone is not conserved, because the surface gives it an external impulse. Instead use impulse = change in momentum of the particle.

The specification restricts this to particles moving perpendicular to a fixed smooth surface. "Smooth" means the surface can only push at right angles to itself, which here is along the line of motion.

### Worked example 4: a ball bouncing on a floor

A ball of mass 0.2 kg is dropped from rest at a height of 2.5 m above a horizontal floor. It rebounds to a height of 1.6 m. Model the ball as a particle and ignore air resistance. Find the impulse that the floor exerts on the ball.

```
Speed just before impact (down):  v² = 0 + 2(9.8)(2.5) = 49, so v = 7 m s⁻¹
Speed just after impact (up):     0 = u² − 2(9.8)(1.6), so u² = 31.36, u = 5.6 m s⁻¹

Take up as positive.
Before: velocity −7    After: velocity +5.6
Impulse = 0.2(5.6) − 0.2(−7) = 0.2 × 12.6 = 2.52 N s, upwards
```

This question uses vertical motion under gravity (M1.1) on each side of the bounce and impulse at the bounce itself. Treat the three stages separately: fall, impact, rise.

## 5. Multi-stage problems

Examiners often chain a collision, an impact with a wall and a second collision.

### Worked example 5: collision, wall, collision

On a smooth horizontal line, particle A (2 kg) moves at 6 m s⁻¹ towards particle B (3 kg), which is at rest. After they collide, A continues in the same direction at 0.6 m s⁻¹. B then hits a fixed wall at right angles and rebounds at 2.4 m s⁻¹. Find the velocity of B after the first collision, the impulse from the wall on B, and explain whether the particles collide again.

```
Towards the wall positive.
First collision: 2(6) + 0 = 2(0.6) + 3v, so 12 = 1.2 + 3v and v = 3.6 m s⁻¹
Wall: impulse on B = 3(−2.4) − 3(3.6) = −18 N s, so 18 N s away from the wall
```

After the rebound B moves away from the wall at 2.4 m s⁻¹, while A still moves towards the wall at 0.6 m s⁻¹. They are moving towards each other, so they collide again. If A had moved away from the wall faster than B after the rebound, B could never catch it.

## Common mistakes

- Not stating a positive direction, then mixing signs between "before" and "after".
- Using conservation of momentum for a particle and a fixed wall.
- Giving an impulse without a direction, or the impulse on the wrong body.
- Writing impulse = mu − mv (initial minus final).
- Adding speeds instead of signed velocities when a particle rebounds.
- Rounding the speed before impact, then carrying the rounded value into the impulse.

## Exam technique

- **Find** means that working is expected: show the momentum equation before solving it.
- **Show that** gives the answer, so every line must be visible, including the substitution of signed velocities.
- **State the direction**: a final answer such as "3 m s⁻¹ in the original direction of A" earns credit that "−3" alone may not.
- **State an assumption**: answer in context, such as "the ball is a particle", "air resistance is negligible" or "the floor is fixed and smooth".
- Give answers to three significant figures unless they are exact, and use g = 9.8 m s⁻² as the specification requires.

## Where next

Work through the [momentum and impulse practice questions](/resources/oxfordaqa-a-level-mathematics-9660-m1-momentum-and-impulse-oxfordaqa-alevel-maths-practice/), then revise with the [momentum and impulse revision notes](/resources/oxfordaqa-a-level-mathematics-9660-m1-momentum-and-impulse-oxfordaqa-alevel-maths-revision-notes/). For the constant acceleration equations used in bounce problems, see the [kinematics in a straight line guide](/resources/oxfordaqa-a-level-mathematics-kinematics-in-a-straight-line-constant-and-variable/).

## Official syllabus

OxfordAQA International AS and A-level Mathematics (9660), Version 5.2, section M1.4 Momentum and impulse (restricted to motion in a straight line), published by OxfordAQA.
