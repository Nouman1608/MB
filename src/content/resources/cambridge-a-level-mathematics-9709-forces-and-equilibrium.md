---
title: "Cambridge A Level Mathematics (9709): Forces and equilibrium"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Topic 4 – Mechanics"
boards: ["cambridge"]
qualifications: ["a-level"]
syllabusCodes: ["9709"]
syllabusSeries: "2026-2027"
order: 4.1
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-cambridge-alevel-maths"
    subtopic: "forces-and-equilibrium-cambridge-alevel-maths"
description: "Study guide to Cambridge 9709 Paper 4 section 4.1: force diagrams, resultants, resolving, friction, limiting equilibrium, smooth contact and Newton's third law."
author: "marlbridge-academic-team"
reviewer: "sajawal-zahid"
reviewStatus: "reviewed"
reviewedDate: 2026-11-18
reviewNote: "2026-11-18: credited to sajawal-zahid (accountable teacher, D-379)."
publishedDate: 2026-11-18
featured: false
---

This guide covers section **4.1 Forces and equilibrium** of Mechanics in the Cambridge International AS & A Level Mathematics 9709 syllabus for 2026 and 2027. Mechanics is examined on Paper 4 (1 hour 15 minutes, 50 marks). The [Mechanics study guide](/resources/a-level-maths-9709-mechanics/) gives one two-string example and one limiting-friction example; this page covers every statement in 4.1, with resultants of several forces, the full range of a force that keeps a particle in equilibrium, contact forces as a single force, and Newton's third law between bodies. Afterwards use the [4.1 revision notes](/resources/cambridge-a-level-mathematics-9709-forces-and-equilibrium-revision-notes/) and the [4.1 practice questions](/resources/cambridge-a-level-mathematics-9709-forces-and-equilibrium-practice/).

Take g = 10 m s⁻². The syllabus says questions in this component are mainly numerical and use the approximate value 10 for g.

## What section 4.1 asks for

| Syllabus statement | Notes from the syllabus |
|---|---|
| Identify the forces acting in a given situation | e.g. by drawing a force diagram |
| Understand the vector nature of force; find and use components and resultants | Calculations are always required, not scale drawings |
| A particle in equilibrium: the vector sum of the forces is zero, or the sum of components in any direction is zero | Resolving is usually expected; triangle of forces or Lami's theorem are acceptable but not required and will not be referred to |
| A contact force between two surfaces has a normal component and a frictional component | |
| Use the model of a smooth contact and understand its limitations | |
| Limiting friction and limiting equilibrium; definition of μ; F = μR or F ≤ μR | "About to slip" may be used to mean "in limiting equilibrium" |
| Use Newton's third law | e.g. the force of a particle on the ground equals and opposes the force of the ground on the particle |

All bodies are modelled as particles, so every force acts at a single point. Vector notation is not used in Paper 4 questions, and you should be familiar with sin(90° − θ) ≡ cos θ, cos(90° − θ) ≡ sin θ, tan θ ≡ sin θ/cos θ and sin²θ + cos²θ ≡ 1.

## Force diagrams

Include every force once, with an arrow and a label: weight mg vertically down, normal reaction R perpendicular to the surface, friction F along the surface, tension T along a string away from the particle, and any applied force. Do not add a "resultant" arrow to a force diagram.

## Components and resultants

A force P at angle θ to a direction has component P cos θ along that direction and P sin θ perpendicular to it. To combine forces, add their components in two perpendicular directions.

*Worked example 1.* Three horizontal forces act on a particle: 8 N along the positive x-direction, 5 N at 60° anticlockwise from it, and 6 N at 150° anticlockwise from it. Find the magnitude and direction of the resultant.

```text
x:  8 + 5 cos 60° + 6 cos 150° = 8 + 2.5 − 5.196 = 5.304
y:  0 + 5 sin 60° + 6 sin 150° = 4.330 + 3 = 7.330
Magnitude = √(5.304² + 7.330²) = 9.05 N
Direction: tan⁻¹(7.330/5.304) = 54.1° anticlockwise from the 8 N force
```

Keep the angle measured from one fixed direction for every force; the signs of cos and sin then take care of the quadrants.

## Equilibrium on a rough plane: the range of a force

Friction can act either way, so a force that holds a particle on a rough slope has a least and a greatest value.

*Worked example 2.* A particle of mass 4 kg rests on a rough plane inclined at 20° to the horizontal. The coefficient of friction is 0.25. A force P N acts up the plane along a line of greatest slope. Find the range of values of P for which the particle stays in equilibrium.

```text
Perpendicular to the plane:  R = 40 cos 20° = 37.59 N
Maximum friction:            F = 0.25 × 37.59 = 9.397 N
Weight component down the plane: 40 sin 20° = 13.68 N

About to slide down (friction up the plane):  P + 9.397 = 13.68  →  P = 4.28
About to slide up (friction down the plane):  P = 13.68 + 9.397  →  P = 23.1
Equilibrium for 4.28 ≤ P ≤ 23.1
```

Between these values friction is less than its limiting value, so F < μR. Only at the two ends does F = μR.

## A horizontal force on a slope

When a force is not parallel to the plane, it changes R as well as the forces along the plane.

*Worked example 3.* A block of mass 2 kg is on a rough plane inclined at 25°, with μ = 0.3. A horizontal force H N, in the vertical plane containing a line of greatest slope, keeps the block on the point of moving up the plane. Find H.

```text
Perpendicular:  R = 20 cos 25° + H sin 25°
Along (friction down the plane):
H cos 25° = 20 sin 25° + 0.3(20 cos 25° + H sin 25°)
H(cos 25° − 0.3 sin 25°) = 20 sin 25° + 6 cos 25°
H = 17.8 N
```

The horizontal force pushes the block into the plane, so R (25.7 N here) is larger than mg cos 25°.

## The contact force as one force

The normal reaction R and friction F are two components of one contact force. Its magnitude is √(R² + F²).

*Worked example 4.* A box of mass 5 kg is at rest on a rough horizontal floor while a horizontal force of 20 N acts on it. Find the magnitude of the contact force from the floor and its angle with the vertical.

```text
R = 50 N,  F = 20 N  (equilibrium)
Contact force = √(50² + 20²) = 53.9 N, at tan⁻¹(20/50) = 21.8° to the vertical
```

**Smooth contact.** A smooth surface exerts only a normal force. The model is useful when friction is small, but it predicts, for instance, that any horizontal push moves a box on a floor, which real floors do not allow. That is the limitation the syllabus expects you to recognise.

## Newton's third law

If body A exerts a force on body B, then B exerts a force on A of equal magnitude in the opposite direction. A crate of mass 20 kg resting on a crate of mass 30 kg feels an upward force of 200 N from the lower crate, so it pushes down on the lower crate with 200 N. The ground then supports the lower crate with 300 + 200 = 500 N.

## Common mistakes

- Drawing friction the wrong way: it opposes the motion that would occur.
- Using F = μR when the particle is not in limiting equilibrium.
- Taking R = mg on a slope or when another force has a perpendicular component.
- Mixing sin and cos when resolving: draw the angle on the diagram.
- Measuring a scale drawing instead of calculating.
- Treating the third-law pair as two forces on the same body.

## Exam technique

- **Find the set of values** or **range**: two limiting cases, friction reversed between them.
- **Show that** a particle is in equilibrium or about to slip: compare F needed with μR and state the conclusion.
- Give answers to 3 significant figures, and angles to 1 decimal place, unless told otherwise.
- Resolve in the direction that avoids an unknown where possible: perpendicular to a slope removes friction.

## Frequently asked questions

**Do I need Lami's theorem for 9709 Paper 4?**
No. The syllabus says resolving is usually expected; Lami's theorem and the triangle of forces are acceptable where suitable, but not required.

**What does "about to slip" mean?**
It means the particle is in limiting equilibrium, so friction has its maximum value F = μR.

**What value of g should I use?**
Use g = 10 m s⁻², as the syllabus expects in this component.

## Where to go next

- [4.1 revision notes](/resources/cambridge-a-level-mathematics-9709-forces-and-equilibrium-revision-notes/)
- [4.1 practice questions](/resources/cambridge-a-level-mathematics-9709-forces-and-equilibrium-practice/)
- Motion in a straight line: [4.2 Kinematics](/resources/cambridge-a-level-mathematics-9709-kinematics-of-motion-in-a-straight-line-cambridge/)
- Mixed questions: [Mechanics practice](/resources/a-level-mathematics-mechanics-practice/)

## Official syllabus

Cambridge International AS & A Level Mathematics 9709 syllabus for examination in 2026 and 2027, Cambridge University Press & Assessment. Topic 4, Mechanics (for Paper 4): section 4.1 Forces and equilibrium.
