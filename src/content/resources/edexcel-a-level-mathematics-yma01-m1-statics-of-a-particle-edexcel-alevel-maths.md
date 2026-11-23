---
title: "Pearson Edexcel International A Level Mathematics (YMA01): M1 Statics of a particle"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Unit M1: Mechanics 1"
boards: ["edexcel"]
qualifications: ["a-level"]
syllabusCodes: ["YMA01"]
syllabusSeries: "Specification Issue 3, April 2019"
order: 5.5
syllabusTopics:
  - qualification: "a-level"
    topic: "unit-m1-mechanics-1-edexcel-alevel-maths"
    subtopic: "m1-statics-of-a-particle-edexcel-alevel-maths"
description: "Edexcel IAL Maths M1 statics: resolving forces, equilibrium on slopes, F ≤ μR, limiting friction, the range of a holding force and triangles of forces."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section 5 of Unit M1: Mechanics 1 in the Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification (YMA01), Issue 3. The three statements are "Forces treated as vectors. Resolution of forces", "Equilibrium of a particle under coplanar forces. Weight, normal reaction, tension and thrust, friction", and "Coefficient of friction", with the guidance "an understanding of F ≤ μR in a situation of equilibrium". The specification also says that "only simple cases of the application of the conditions for equilibrium to uncomplicated systems will be required".

The broader [momentum, equilibrium and moments guide](/resources/edexcel-ial-mathematics-momentum-and-impulse-equilibrium-of-a-particle-and/) covers a particle on two strings and on rough horizontal ground. This guide focuses on inclined planes, deciding whether a particle will move, and finding the range of a force that keeps a particle at rest.

## What the specification asks for

| Statement | You must be able to |
|---|---|
| 5.1 | Write forces as vectors, in i, j form or by magnitude and direction, and resolve them |
| 5.2 | Use the condition for equilibrium with weight, normal reaction, tension, thrust and friction |
| 5.3 | Use F ≤ μR, and F = μR when equilibrium is limiting |

## The condition for equilibrium

A particle is in equilibrium when the resultant force on it is zero. In practice, resolve in two perpendicular directions and set the total in each to zero:

```
sum of components in direction 1 = 0
sum of components in direction 2 = 0
```

If the forces are in i, j form, add the i components and the j components separately, and set each total to zero.

## Choosing directions

The two directions are your choice. A good choice puts as many unknown forces as possible along one of them.

- **Horizontal ground or strings:** resolve horizontally and vertically.
- **Inclined plane:** resolve parallel to and perpendicular to the plane. The normal reaction and friction then each lie along one direction, and only the weight (and any applied force at an angle) needs splitting.

On a plane inclined at α, the weight mg has components **mg sin α down the slope** and **mg cos α into the plane**. A quick check: when α = 0 the slope component must vanish, and sin 0 = 0.

## Friction in equilibrium

Friction acts along the surface and opposes the motion that would happen without it. Its size is whatever is needed for equilibrium, up to a maximum:

```
F ≤ μR
```

- **Not limiting:** F is found from the equilibrium equations, and F < μR.
- **Limiting** ("on the point of slipping", "about to move", "in limiting equilibrium"): F = μR.

The direction matters. If a particle on a slope is about to slide up, friction acts down the slope. If it is about to slide down, friction acts up the slope.

A particle resting on a rough slope with no other forces is on the point of slipping when μR = mg sin α and R = mg cos α, so μ = tan α. If μ ≥ tan α it stays at rest.

## Worked example 1: equilibrium in i, j form

Three forces (3i + 4j) N, (−5i + pj) N and q(i + 2j) N act on a particle in equilibrium. Find p and q.

```
i:  3 - 5 + q = 0,   so q = 2
j:  4 + p + 2q = 0,  so p = -8
```

The third force is 2(i + 2j) = (2i + 4j) N. A force written as q(i + 2j) has a fixed direction, and q sets its size.

## Worked example 2: will the particle move?

A particle of mass 5 kg is placed on a rough plane inclined at α, where tan α = 3/4. The coefficient of friction is 0.8. Determine whether the particle stays at rest, and find the friction force.

With tan α = 3/4, sin α = 3/5 and cos α = 4/5.

```
perpendicular:  R = 5g cos α = 5(9.8)(0.8) = 39.2 N
friction needed to hold it:  F = 5g sin α = 5(9.8)(0.6) = 29.4 N
greatest friction available:  μR = 0.8 × 39.2 = 31.36 N
```

The friction needed, 29.4 N, is less than the maximum, 31.36 N, so the particle stays at rest. The friction is 29.4 N up the slope, not μR. Equivalently, μ = 0.8 ≥ tan α = 0.75. The "show it stays at rest" mark needs that comparison in words.

## Worked example 3: the range of a holding force

A particle of mass 4 kg rests on a rough plane inclined at 30° to the horizontal, with μ = 0.25. It is held in equilibrium by a horizontal force of magnitude P N, in the vertical plane containing a line of greatest slope. Find the range of possible values of P.

The horizontal force has components P cos 30° up the slope and P sin 30° into the plane. So the reaction is R = 4g cos 30° + P sin 30°: it depends on P, which is a common trap.

**Least P: the particle is about to slide down,** so friction acts up the slope.

```
along:  P cos 30° + 0.25R = 4g sin 30°
P cos 30° + 0.25(4g cos 30° + P sin 30°) = 4g sin 30°
P(cos 30° + 0.25 sin 30°) = 4g(sin 30° - 0.25 cos 30°)
P = 11.2 N
```

**Greatest P: the particle is about to slide up,** so friction acts down the slope.

```
along:  P cos 30° = 4g sin 30° + 0.25R
P(cos 30° - 0.25 sin 30°) = 4g(sin 30° + 0.25 cos 30°)
P = 37.9 N
```

So 11.2 ≤ P ≤ 37.9, to 3 significant figures. Between these values friction is less than its maximum and adjusts its size, and its direction, to keep the particle at rest.

## Triangle of forces

When exactly three forces act on a particle in equilibrium, they can be drawn nose to tail to form a closed triangle. The sine rule or right-angled trigonometry then gives the unknowns. The specification allows a vector diagram as a method.

**Example.** A particle of weight W hangs on a string. A horizontal force of 6 N holds it with the string at 30° to the vertical. The triangle has the weight vertical, the 6 N force horizontal, and the tension closing it. So tan 30° = 6/W, giving W = 10.4 N, and T = 6/sin 30° = 12 N. Resolving gives the same answers. The triangle is quicker when there is a right angle in it.

## Thrust

A light rod can push as well as pull. A pull along a rod or string is a tension; a push along a rod is a thrust. A string can only be in tension. If your answer gives a negative tension in a rod, the rod is in thrust. If it gives a negative tension in a string, the string would be slack, so your assumed set-up is wrong.

## Common mistakes

- Taking R = mg on a slope, or when an applied force has a component perpendicular to the surface.
- Writing F = μR when the question does not say the equilibrium is limiting.
- Putting friction in the wrong direction for "about to move up" or "about to move down".
- Swapping sin α and cos α in the components of the weight.
- Giving one value of P when a range is asked for.
- Forgetting that the weight is mg, not m.

## Exam technique

- **"Find the normal reaction"** usually comes first because it is needed for μR. Resolve perpendicular to the surface.
- **"Show that the particle remains at rest"** needs three things: the friction needed, the greatest friction available, and a sentence comparing them.
- **"Find the range of values of P"** needs two limiting cases and an answer written as an inequality.
- **"Find the least value of μ"** means the equilibrium is limiting: set F = μR.
- Draw a force diagram for every statics question, with each force labelled and the angles marked.

## Where next

- [M1 statics revision notes](/resources/edexcel-a-level-mathematics-yma01-m1-statics-of-a-particle-edexcel-alevel-maths-revision-notes/) for the method in one page and a self-test.
- [M1 statics practice questions](/resources/edexcel-a-level-mathematics-yma01-m1-statics-of-a-particle-edexcel-alevel-maths-practice/) with mark schemes.
- [M1 moments study guide](/resources/edexcel-a-level-mathematics-yma01-m1-moments-edexcel-alevel-maths/) for equilibrium of a rod under parallel forces.

## Official syllabus

Pearson Edexcel International Advanced Subsidiary/Advanced Level Mathematics specification, Issue 3, April 2019 —
[qualifications.pearson.com](https://qualifications.pearson.com/content/dam/pdf/International%20Advanced%20Level/Mathematics/2018/Specification-and-Sample-Assessment/international-a-level-maths-spec.pdf).
