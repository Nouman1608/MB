---
title: "OCR A Level Mathematics A: Friction and rough surfaces (H240)"
seoTitle: "OCR A Level Maths Friction and Rough Surfaces (H240)"
resourceType: "study-guides"
subject: "mathematics"
level: ["a-levels"]
topic: "Friction: limiting friction, coefficient of friction and rough surfaces"
boards: ["ocr"]
qualifications: ["a-level"]
syllabusCodes: ["H240"]
syllabusSeries: "Version 3.1 (August 2026), for first assessment in 2018"
order: 135
syllabusTopics:
  - qualification: "a-level"
    topic: "mechanics-ocr-alevel-maths"
    subtopic: "forces-and-newtons-laws-ocr-alevel-maths"
description: "Study guide to friction for OCR A Level Mathematics A (H240): F ≤ μR, limiting friction, rough horizontal planes and rough slopes, with worked examples."
author: "marlbridge-academic-team"
publishedDate: 2026-10-11
featured: false
---
This guide teaches the friction content of the OCR A Level Mathematics A (H240) specification, Version 3.1 (August 2026), for first assessment in 2018. It covers references 3.03r to 3.03v within 3.03 Forces and Newton's laws. The first reference is Stage 1 content, shared with AS. The rest is Stage 2 and is **A Level only**. Use the [course hub](/boards/ocr/a-level/mathematics/) and the [printable checklist](/checklists/ocr/a-level/mathematics/) to see where this unit sits, and the [free diagnostics](/diagnostics/) to find your weak spots. Condensed notes are in the [revision notes](/resources/ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-revision-notes/) and exam-style questions are in the [practice set](/resources/ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-practice/).

## What this unit covers

| Ref | What you must be able to do | Stage |
|---|---|---|
| 3.03r | Understand a frictional force and use it where the force is given as a vector, in components, or by magnitude and direction | Stage 1 (AS) |
| 3.03s | Represent the contact force between two rough surfaces by a normal component and a frictional component | A Level only |
| 3.03t | Use the coefficient of friction and the model F ≤ μR in one and two dimensions, including limiting friction | A Level only |
| 3.03u | Solve static equilibrium and limiting equilibrium problems on a rough surface | A Level only |
| 3.03v | Solve problems on the motion of a body on a rough surface, for example down a line of greatest slope | A Level only |

The specification excludes knowledge of the angle of friction, so this guide does not use it. For inclined planes it only considers motion along the line of greatest slope, so no vector treatment of motion on the slope is needed. Questions will explicitly use the terms normal (contact) force, frictional (contact) force and magnitude of the contact force. This guide takes g = 9.8 m s⁻² as the specification allows, and uses a smooth contact as the model for no friction.

## 3.03r: the idea of a frictional force

Friction is a contact force that acts along the surface and opposes sliding, or the tendency to slide. It is a force like any other. If you are told its value, you put it in your force diagram and use Newton's second law as usual.

**Worked example 1.** A 4 kg block is pushed along a horizontal surface by a horizontal force of 20 N. The friction force is given as 6 N. Find the acceleration.

```
Resultant = 20 − 6 = 14 N
14 = 4a, so a = 3.5 m s⁻²
```

**Worked example 2 (vector form).** A particle of mass 2 kg moves on a horizontal surface, with i and j along perpendicular directions in the surface. The applied force is (12i + 5j) N. The friction force has magnitude 5 N and acts in the direction of −(3i + 4j).

A force of magnitude 5 N in that direction is −(3i + 4j) N, because √(3² + 4²) = 5.

```
Resultant = (12i + 5j) − (3i + 4j) = (9i + j) N
a = (9i + j)/2 = (4.5i + 0.5j) m s⁻²
|a| = √(4.5² + 0.5²) = 4.53 m s⁻² (3 s.f.)
```

## 3.03s: the contact force

When one surface presses on another, the two exert equal and opposite contact forces on each other. For a rough surface you split the contact force on the body into two perpendicular components:

- the **normal (contact) force** R, perpendicular to the surface, which stops the body passing through it;
- the **frictional (contact) force** F, along the surface.

The **magnitude of the contact force** is the size of the resultant of the two: S = √(R² + F²).

**Worked example 3.** A crate on rough ground feels a normal force of 45 N and a frictional force of 18 N. Find the magnitude of the contact force.

```
S = √(45² + 18²) = √(2025 + 324) = √2349 = 48.5 N (3 s.f.)
```

Do not add R and F directly. They are perpendicular, so you need Pythagoras.

## 3.03t: the model F ≤ μR

The model says that the friction force cannot exceed a maximum value that is proportional to the normal force:

**F ≤ μR**

μ is the **coefficient of friction**. It has no units and depends on the two surfaces. A larger μ means a rougher contact. Three situations arise.

| Situation | Friction |
|---|---|
| At rest, not about to move | F < μR. Find F from equilibrium, not from μR |
| At rest, on the point of moving (limiting equilibrium) | F = μR. This is **limiting friction** |
| Sliding | F = μR, directed against the motion |

A very common error is to write F = μR for a body that is stationary and nowhere near slipping. Friction takes whatever value balances the other forces, up to the limit μR.

**Always find R first.** R is equal to the weight only when there are no other vertical forces. A force with a vertical component changes R, and friction changes with it.

**Worked example 4.** A 12 kg box rests on rough horizontal ground, μ = 0.4. A rope pulls it at 25° above the horizontal with tension T, and the box is on the point of sliding. Find T.

```
Vertical:    R + T sin 25° = 12 × 9.8 = 117.6
             R = 117.6 − T sin 25°
Horizontal:  T cos 25° = F = 0.4R      (limiting)
             T cos 25° = 0.4(117.6 − T sin 25°)
             T(cos 25° + 0.4 sin 25°) = 47.04
             T = 47.04 ÷ 1.0753 = 43.7 N (3 s.f.)
```

Here R = 99.1 N, which is less than the weight, because the rope helps to carry some of it.

**Worked example 5 (pushing instead).** The same box is pushed by a force P at 25° **below** the horizontal, and is on the point of sliding.

```
Vertical:    R = 117.6 + P sin 25°
Horizontal:  P cos 25° = 0.4(117.6 + P sin 25°)
             P(cos 25° − 0.4 sin 25°) = 47.04
             P = 47.04 ÷ 0.7373 = 63.8 N (3 s.f.)
```

The push needs more force than the pull (63.8 N against 43.7 N), because it presses the box into the ground and increases R.

## 3.03u: equilibrium on a rough surface

For a body at rest, resolve in two perpendicular directions and set each resultant to zero. On a slope of angle α, the useful directions are along and perpendicular to the slope. The weight mg splits into mg sin α pointing down the slope and mg cos α pressing into it.

With no other forces, equilibrium gives R = mg cos α and F = mg sin α. Friction is up the slope. The body stays at rest if F ≤ μR, which means mg sin α ≤ μ mg cos α, that is tan α ≤ μ. Mass cancels, so the test does not depend on the mass.

**Worked example 6.** A 6 kg block is placed on a rough slope at 18° to the horizontal, μ = 0.35. Does it stay at rest? Find the friction force.

```
R = 6 × 9.8 × cos 18° = 55.9 N
Needed for equilibrium: F = 6 × 9.8 × sin 18° = 18.2 N
Maximum available:      μR = 0.35 × 55.9 = 19.6 N
18.2 < 19.6, so it stays at rest.  F = 18.2 N
```

You can also compare tan 18° = 0.325 with μ = 0.35. The friction is 18.2 N, not 19.6 N, because the body is not on the point of moving.

**Limiting equilibrium with an extra force.** A force P up the slope can hold a body that would otherwise slide. P has a smallest and a greatest value for equilibrium.

- **Least P:** the body is on the point of slipping down, so friction acts up the slope at its maximum. P + μR = mg sin α.
- **Greatest P:** the body is about to slide up, so friction acts down the slope at its maximum. P = mg sin α + μR.

**Worked example 7.** An 8 kg block is on a rough slope at 30°, μ = 0.3. A force P acts up a line of greatest slope. Find the range of P for equilibrium.

```
R = 8 × 9.8 × cos 30° = 67.9 N       mg sin 30° = 39.2 N
μR = 0.3 × 67.9 = 20.4 N
Least P:    P = 39.2 − 20.4 = 18.8 N
Greatest P: P = 39.2 + 20.4 = 59.6 N
```

So equilibrium is maintained for 18.8 N ≤ P ≤ 59.6 N.

## 3.03v: motion on a rough surface

Once a body slides, friction is F = μR in the direction opposing the motion. Apply Newton's second law along the direction of motion, then use the constant acceleration equations.

**Horizontal ground.** With R = mg, the friction is μmg and the deceleration of a body with no driving force is μg. Mass cancels.

**Worked example 8.** A block is projected at 7 m s⁻¹ along rough horizontal ground, μ = 0.2. How far and for how long does it slide?

```
Deceleration = μg = 0.2 × 9.8 = 1.96 m s⁻²
0 = 7² − 2(1.96)s      s = 49 ÷ 3.92 = 12.5 m
0 = 7 − 1.96t          t = 3.57 s (3 s.f.)
```

**Inclined plane.** The direction of friction depends on the direction of motion. Going down the slope, friction acts up it. Going up, friction acts down it.

**Worked example 9.** A body is projected down the line of greatest slope on a rough plane at 20° to the horizontal, at 3 m s⁻¹. The coefficient of friction is 0.45. Find how far it travels before it stops, and say what happens next.

Taking down the slope as positive, the equation of motion per unit mass is a = g sin 20° − μg cos 20°.

```
a = 9.8(0.3420 − 0.45 × 0.9397) = 9.8(−0.0809) = −0.792 m s⁻²
0 = 3² − 2(0.792)s      s = 9 ÷ 1.584 = 5.68 m (3 s.f.)
```

The body decelerates and stops after 5.68 m. Since tan 20° = 0.364 is less than μ = 0.45, the friction needed to hold it is less than the maximum, so it stays at rest. If μ were less than tan 20°, the acceleration would be positive and it would speed up.

## Common errors

- Writing F = μR for a stationary body that is not close to slipping.
- Using R = mg when a rope or push has a vertical component, or on a slope where R = mg cos α.
- Drawing friction in the direction of motion. It opposes the motion, or the tendency to move.
- Using one direction for friction in both the up-slope and down-slope cases.
- Adding R and F to get the contact force instead of using Pythagoras.
- Forgetting that after the driving force is removed, the deceleration is found with friction alone.

## Next steps

Practise these skills with the [practice questions](/resources/ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-practice/), then condense them with the [revision notes](/resources/ocr-a-level-mathematics-friction-limiting-friction-coefficient-of-friction-and-revision-notes/). Tick off each reference on the [checklist](/checklists/ocr/a-level/mathematics/) when you can do it without notes.

## Official syllabus

OCR, *A Level Mathematics A (H240) specification*, Version 3.1 (August 2026), for first assessment in 2018. This guide follows references 3.03r to 3.03v.
